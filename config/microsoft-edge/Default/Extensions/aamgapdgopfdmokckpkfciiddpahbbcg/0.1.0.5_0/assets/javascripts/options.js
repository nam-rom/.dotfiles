var OptionsPage = function() {
  var self = this;

  self.options = {};
  self.categoriesNode = document.querySelector('.categories');
  self.newCategoryNode = document.querySelector('.new.category');
  self.ratingPromptNode = document.querySelector('.rating-prompt');
  self.editedCategoryNode = null;
  self.editedCategory = null;
  self.selectedCategoryNode = null;
  self.justSavedCategory = false;
  self.categoryTemplate = document.querySelector('#category-template').content;
  self.editableCategoryTemplate = document.querySelector('#editable-category-template').content;

  self.addCategoryListeners(self.newCategoryNode);
  self.addInputsListener(self.newCategoryNode);
  autosize(self.newCategoryNode.querySelector('textarea'));

  self.loadOptions(function() {
    self.resetOptions();
    self.loadCategories();
    self.addClickListener();
    self.addOtherInputsListeners();
    self.askForRating();
  });
};

OptionsPage.prototype.loadOptions = function(loadedCallback) {
  var self = this;

  chrome.storage.sync.get(function(options) {
    for (var optionName in options) {
      self.options[optionName] = options[optionName];
    }
    loadedCallback();
  });
};

OptionsPage.prototype.resetOptions = function() {
  var self = this;

  document.querySelector('.use-google-autocomplete').checked = self.options.useGoogleAutocomplete;

  self.getCategoryNodes().forEach(function(categoryNode) {
    categoryNode.remove();
  });
};

OptionsPage.prototype.loadCategories = function() {
  var self = this;

  this.options.categories.sort(function(category1, category2) {
    return category1.name.localeCompare(category2.name);
  });

  self.options.categories.forEach(function(category) {
    var categoryNode = self.createCategoryNode();
    self.fillIn(categoryNode, category);

    self.categoriesNode.insertBefore(categoryNode, self.newCategoryNode);
  });
};

OptionsPage.prototype.createCategoryNode = function() {
  categoryNode = this.categoryTemplate.cloneNode(true).querySelector('.category');

  this.addCategoryListeners(categoryNode);

  return categoryNode;
};

OptionsPage.prototype.addCategoryListeners = function(categoryNode) {
  var self = this;

  categoryNode.addEventListener('mouseenter', function(e) {
    categoryNode.classList.add('hover');
  });

  categoryNode.addEventListener('mouseleave', function(e) {
    categoryNode.classList.remove('hover');
  });

  if (categoryNode === self.newCategoryNode) return;

  categoryNode.querySelector('.delete').addEventListener('click', function(e) {
    e.stopPropagation();

    categoryNode.remove();
    self.saveCategories();
  });

  categoryNode.querySelector('.default label').addEventListener('click', function(e) {
    e.stopPropagation();
    if (categoryNode.classList.contains('editing')) return;

    if (self.editedCategoryNode) self.unfocusCategory();

    if (self.justSavedCategory) {
      e.preventDefault();
      self.justSavedCategory = false;
    }
    else {
      self.uncheckCategoryNodes(categoryNode);
      self.saveCategories();
    }

    if (self.selectedCategoryNode) {
      self.selectedCategoryNode.classList.remove('selected');
      self.selectedCategoryNode = null;
    }
  });
};

OptionsPage.prototype.fillIn = function(categoryNode, category) {
  categoryNode.querySelector('.name').textContent = category.name;
  categoryNode.querySelector('.default input').checked = category.defaultCategory;
  categoryNode.querySelector('.keywords').textContent = category.keywords;
  categoryNode.querySelector('.urls').innerHTML = category.urls.join('<br>');
};

OptionsPage.prototype.addClickListener = function() {
  var self = this;

  document.addEventListener('click', function(e) {
    var categoryNode = e.target.closest('.category');

    if (categoryNode) {
      var clickedColumn = e.target.closest('.column');

      self.edit(categoryNode, clickedColumn);
    }
    else {
      self.unfocusCategory();
    }

    self.justSavedCategory = false;
  });
};

OptionsPage.prototype.edit = function(categoryNode, clickedColumn) {
  if (categoryNode === this.editedCategoryNode) return;

  if (this.editedCategoryNode) {
    this.editedCategoryNode.classList.remove('selected');

    this.unfocusCategory();
    if (this.justSavedCategory) return;
  }
  else if (this.selectedCategoryNode) {
    this.selectedCategoryNode.classList.remove('selected');
    this.selectedCategoryNode = null;
  }

  this.categoriesNode.classList.add('has-category-focused');

  categoryNode.classList.add('selected', 'editing');

  if (!categoryNode.classList.contains('editable')) {
    this.makeEditable(categoryNode);
  }

  if (clickedColumn) this.focusInput(clickedColumn);

  this.editedCategoryNode = categoryNode;
};

OptionsPage.prototype.makeEditable = function(categoryNode) {
  categoryNode.classList.add('editable');

  this.editedCategory = this.getInfo(categoryNode);
  var clone = this.editableCategoryTemplate.cloneNode(true);
  var input;

  input = clone.querySelector('.name input');
  input.value = this.editedCategory.name;
  this.setChild(categoryNode.querySelector('.name'), input);

  input = clone.querySelector('.keywords input');
  input.value = this.editedCategory.keywords;
  this.setChild(categoryNode.querySelector('.keywords'), input);

  input = clone.querySelector('.urls textarea');
  input.value = this.editedCategory.urls.join('\n');
  this.setChild(categoryNode.querySelector('.urls'), input);
  autosize(input);

  this.addInputsListener(categoryNode);
};

OptionsPage.prototype.getInfo = function(categoryNode) {
  return {
    name: categoryNode.querySelector('.name').textContent,
    defaultCategory: categoryNode.querySelector('.default input').checked,
    keywords: categoryNode.querySelector('.keywords').textContent.split(','),
    urls: this.toArray(categoryNode.querySelector('.urls').childNodes)
              .reduce(function(acc, node) {
                if (node.nodeValue) acc.push(node.nodeValue);

                return acc;
              }, [])
  };
};

OptionsPage.prototype.toArray = function(nodeList) {
  return Array.prototype.slice.call(nodeList);
};

OptionsPage.prototype.setChild = function(parent, child) {
  parent.innerHTML = null;
  parent.appendChild(child);
};

OptionsPage.prototype.addInputsListener = function(categoryNode) {
  var ENTER_KEY_CODE = 13;
  var self = this;

  self.toArray(categoryNode.querySelectorAll('input[type="text"]')).forEach(function(input) {
    input.addEventListener('keydown', function(e) {
      if (e.keyCode === ENTER_KEY_CODE) {

        if (self.isValid(categoryNode)) {
          self.unfocusCategory();
          input.blur();
        }
      }
    });
  });

  self.toArray(categoryNode.querySelectorAll('input, textarea')).forEach(function(input) {
    input.addEventListener('input', function(e) {
      input.classList.toggle('invalid', !input.value.trim());
    });
  });
};

OptionsPage.prototype.focusInput = function(clickedColumn) {
  input = clickedColumn.querySelector('input, textarea');
  if (!input) return;

  input.focus();

  if (input.tagName == 'TEXTAREA') {
    var endIndex = input.value.length;
    input.setSelectionRange(endIndex, endIndex);
  }
};

OptionsPage.prototype.unfocusCategory = function() {
  this.categoriesNode.classList.remove('has-category-focused');

  if (this.editedCategoryNode) {
    if (this.isValid(this.editedCategoryNode)) {
      this.saveAndMove(this.editedCategoryNode);
    }
    else {
      this.resetCategoryNode(this.editedCategoryNode);
    }

    if (this.editedCategoryNode != this.newCategoryNode) {
      this.editedCategoryNode.classList.remove('editable');
    }
    this.editedCategoryNode.classList.remove('editing');
    this.selectedCategoryNode = this.editedCategoryNode;
    this.editedCategoryNode = null;
    this.editedCategory = null;
  }
};

OptionsPage.prototype.isValid = function(categoryNode) {
  return !categoryNode.querySelector(':invalid, .invalid');
};

OptionsPage.prototype.saveAndMove = function(categoryNode) {
  var self = this;
  var category = self.getEditedInfo(categoryNode);

  if (self.areEqual(category, self.editedCategory)) {
    self.resetCategoryNode(categoryNode);
    return;
  }

  categoryNode.classList.remove('selected');

  if (categoryNode === self.newCategoryNode) {
    self.resetCategoryNode(self.newCategoryNode);

    categoryNode = self.createCategoryNode(category);
  }
  self.fillIn(categoryNode, category);

  if (category.defaultCategory) {
    self.uncheckCategoryNodes(categoryNode);
  }

  if (!self.editedCategory || category.name !== self.editedCategory.name) {
    var referenceNode = self.getCategoryNodes().find(function(currentNode) {
      if (currentNode.classList.contains('editing')) return false;

      var currentName = self.getInfo(currentNode).name;
      return category.name.localeCompare(currentName) < 0;
    });

    self.categoriesNode.insertBefore(categoryNode, referenceNode || self.newCategoryNode);

    self.getCategoryNodes().forEach(function(categoryNode) {
      categoryNode.classList.remove('hover');
    });
    self.newCategoryNode.classList.remove('hover');
  }

  self.saveCategories();
  self.justSavedCategory = true;
};

OptionsPage.prototype.getEditedInfo = function(node) {
  return {
    name: node.querySelector('.name input').value.trim(),
    defaultCategory: node.querySelector('.default input').checked,
    keywords: node.querySelector('.keywords input').value.trim().split(','),
    urls: node.querySelector('.urls textarea')
              .value
              .split('\n')
              .reduce(function(acc, url) {
                url = url.trim();
                if (url) acc.push(url);

                return acc;
              }, [])
  };
};

OptionsPage.prototype.areEqual = function(object1, object2) {
  return JSON.stringify(object1) === JSON.stringify(object2);
};

OptionsPage.prototype.resetCategoryNode = function(categoryNode) {
  if (categoryNode == this.newCategoryNode) {
    this.newCategoryNode.querySelector('.name input').value = null;
    this.newCategoryNode.querySelector('.default input').checked = false;
    this.newCategoryNode.querySelector('.keywords input').value = null;
    this.newCategoryNode.querySelector('.urls textarea').value = null;
  }
  else {
    this.fillIn(categoryNode, this.editedCategory);
  }
};

OptionsPage.prototype.uncheckCategoryNodes = function(checkedCategoryNode) {
  this.getCategoryNodes().forEach(function(categoryNode) {
    if (categoryNode == checkedCategoryNode) return;

    categoryNode.querySelector('.default input').checked = false;
  });
};

OptionsPage.prototype.getCategoryNodes = function() {
  var nodeList = this.categoriesNode.querySelectorAll('.category:not(.new)');

  return this.toArray(nodeList);
};

OptionsPage.prototype.saveCategories = function() {
  var self = this;

  var categories = self.getCategoryNodes().map(function(categoryNode) {
    return self.getInfo(categoryNode);
  });

  chrome.storage.sync.set({ categories: categories });
};

OptionsPage.prototype.addOtherInputsListeners = function() {
  var self = this;

  document.querySelector('.use-google-autocomplete').addEventListener('click', function(e) {
    chrome.storage.sync.set({ useGoogleAutocomplete: e.target.checked });
  });

  var resetToDefaultsNode = document.querySelector('.reset-to-defaults');
  var resetButton = resetToDefaultsNode.querySelector('.reset');
  var confirmNode = resetToDefaultsNode.querySelector('.confirm');

  resetButton.addEventListener('click', function() {
    resetButton.classList.add('hidden');
    confirmNode.classList.remove('hidden');
  });
  confirmNode.querySelector('.cancel').addEventListener('click', function() {
    confirmNode.classList.add('hidden');
    resetButton.classList.remove('hidden');
  });
  confirmNode.querySelector('.yes').addEventListener('click', function() {
    confirmNode.classList.add('hidden');
    resetButton.classList.remove('hidden');

    request(
      'GET',
      chrome.extension.getURL('/assets/default_options.json'),
      function(defaultOptions) {
        chrome.storage.sync.set(defaultOptions);

        self.resetOptions();
        self.loadCategories();
      }
    );
  });

  self.ratingPromptNode.querySelector('a').addEventListener('click', function(e) {
    self.ratingPromptNode.classList.add('hidden');
    chrome.storage.sync.set({ hideRatingPrompt: true });
  });

  document.querySelector('#done').addEventListener('click', function(e) {
    window.close();
  });
};

OptionsPage.prototype.askForRating = function() {
  if (this.options.searchCount >= 5 && !this.options.hideRatingPrompt) {
    this.ratingPromptNode.classList.remove('hidden');
  }
};

OptionsPage.prototype.debug = function(text) {
  document.body.appendChild(document.createElement('br'));

  document.body.appendChild(document.createTextNode('>>> ' + text));
};

document.addEventListener('DOMContentLoaded', function() {
  new OptionsPage();
});
