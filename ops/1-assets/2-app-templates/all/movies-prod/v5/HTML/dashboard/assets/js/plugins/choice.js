(function (jQuery) {
  "use strict";

//A Basic message
const choicebasic = document.querySelector('#choices-basic')
if (choicebasic) {
  new Choices(choicebasic, {
    searchEnabled: false,
    removeItemButton: true,
  })
}

//multi choice
const multipleCancelButton = document.querySelectorAll('.choices-multiple-remove-button')
if (multipleCancelButton) {
  Array.from(multipleCancelButton, (elem) => {
    window.choise = new Choices(elem, {
      removeItemButton: true
    })
  });
}

//option group
const optiongroup = document.querySelector('#choices-optiongroup')
if (optiongroup) {
  new Choices(optiongroup, {
    searchEnabled: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'choices select-choices',
    },
  });
}

//dropdown item
const secondElement = document.querySelector('#choices-dropdown')
if (secondElement) {
  new Choices(secondElement, {
    allowSearch: false
  });
}

//text input
const choicesremove = document.querySelector('#choices-remove-button')
if (choicesremove) {
  new Choices(choicesremove, {
    delimiter: ',',
    editItems: true,
    maxItemCount: 5,
    removeItemButton: true,
  });
}

//select item
const selectitem = document.querySelector('#choices-selectitem')
if (selectitem) {
  new Choices(selectitem, {
    delimiter: ',',
    editItems: true,
    maxItemCount: 5,
    removeItemButton: true,
  });
}
const choicesemailfilter = document.querySelector('#choices-email-filter')
if (choicesemailfilter) {
  new Choices(choicesemailfilter, {
    editItems: true,
    addItemFilter: function (value) {
      if (!value) {
        return false;
      }
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const expression = new RegExp(regex.source, 'i');
      return expression.test(value);
    },
  }).setValue(['joe@bloggs.com']);
};

const choicestextdisabled = document.querySelector('#choices-text-disabled')
if (choicestextdisabled) {
  new Choices(choicestextdisabled, {
    addItems: false,
    removeItems: false,
  }).disable();
}

})(jQuery);