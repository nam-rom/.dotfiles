var InstantMultiSearch = function() {
  this.options = {};

  this.loadOptions();
  this.addSearchListeners();
};

InstantMultiSearch.prototype.loadOptions = function() {
  var self = this;

  chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.get('categories', function(result) {
      if (result.categories) return;

      request(
        'GET',
        chrome.extension.getURL('/assets/default_options.json'),
        function(defaultOptions) {
          chrome.storage.sync.set(defaultOptions);
        }
      );
    });
  });

  chrome.storage.sync.get(function(options) {
    for (var optionName in options) {
      self.options[optionName] = options[optionName];
    }
  });

  chrome.storage.onChanged.addListener(function(changes) {
    for (var optionName in changes) {
      self.options[optionName] = changes[optionName].newValue;
    }
  });
};

InstantMultiSearch.prototype.addSearchListeners = function() {
  var self = this;

  chrome.omnibox.onInputChanged.addListener(function(searchText, suggestCallback) {
    self.fillInSuggestions(searchText, suggestCallback);
  });

  chrome.omnibox.onInputEntered.addListener(function(searchText, tabDisposition) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {

      var search = self.parseSearch(searchText);
      if (!search.category || search.text.length === 0) return;

      var currentTab = tabs[0];
      self.multiTabSearch(search, currentTab);
      self.arrangeTabs(tabDisposition, currentTab);
      self.incrementSearchCount();
    });
  });
};

InstantMultiSearch.prototype.fillInSuggestions = function(searchText, suggestCallback) {
  var search = this.parseSearch(searchText);

  var description = search.text || searchText || 'Instant Multi Search';
  chrome.omnibox.setDefaultSuggestion({ description: description });

  if (search.text.length === 0 || !this.options.useGoogleAutocomplete) return;

  request(
    'GET',
    'http://suggestqueries.google.com/complete/search?output=firefox&q=' + search.text,
    function(response) {
      var suggestions = response[1].map(function(suggestion) {
        var content = suggestion;
        if (search.categoryKeyword) {
          content = search.categoryKeyword + ' ' + suggestion;
        }

        return {content: content, description: suggestion};
      });

      suggestCallback(suggestions);
    }
  );
};

InstantMultiSearch.prototype.parseSearch = function(searchText) {
  var category;

  var matches = searchText.match(/([^ ]+) (.*)/);
  var categoryKeyword = matches ? matches[1] : null;

  if (categoryKeyword) {
    category = this.options.categories.find(function(category) {
      return category.keywords.includes(categoryKeyword);
    });
  }

  if (category) {
    searchText = matches[2];
  }
  else {
    categoryKeyword = '';

    category = this.options.categories.find(function(category) {
      return category.defaultCategory;
    });
  }

  return {
    category: category,
    categoryKeyword: categoryKeyword,
    text: searchText.trim()
  };
};

InstantMultiSearch.prototype.multiTabSearch = function(search, currentTab) {
  search.category.urls.forEach(function(url, i) {
    url = url.replace(/\[Google Feeling Lucky\] ?/, 'http://www.google.com/search?sourceid=navclient&gfns=1&q=')
             .replace(/%s/, search.text);

    chrome.tabs.create({ url: url, index: currentTab.index + 1 + i });
  });
};

InstantMultiSearch.prototype.arrangeTabs = function(tabDisposition, currentTab) {
  switch (tabDisposition) {
    case 'currentTab':
      chrome.tabs.update(currentTab.id, { active: true });
      chrome.tabs.remove(currentTab.id);
      break;

    case 'newBackgroundTab':
      chrome.tabs.update(currentTab.id, { active: true });
      break;

    case 'newForegroundTab':
      chrome.tabs.query({ index: currentTab.index + 1, currentWindow: true }, function(tabs) {
        var firstTab = tabs[0];
        chrome.tabs.update(firstTab.id, { active: true });
      });
  }
};

InstantMultiSearch.prototype.incrementSearchCount = function() {
  var currentCount = this.options.searchCount || 0;
  if (currentCount >= 5) return;

  chrome.storage.sync.set({ searchCount: currentCount + 1 });
};

new InstantMultiSearch();
