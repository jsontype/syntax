
import { isString, forEach } from 'lodash'
interface AttributeProp {
  prop: string,
  value: string
}
// get element by selector
export const getElem = (selector: string) => {
  return document.querySelector(selector)
}

// get element by selector all
export const getElems = (selector: string) => {
  return document.querySelectorAll(selector)
}

// class add function
export const addClass = (elem: any, ...classNames: Array<string>) => {
  let _newElem = elem
  if (isString(_newElem)) {
    _newElem = getElems(elem)
  }
  if (_newElem.length !== undefined) {
    forEach(_newElem, function (elem) {
      forEach(classNames, function (className) {
        elem.classList.add(className)
      })
    })
  } else {
    forEach(classNames, function (className) {
      _newElem.classList.add(className)
    })
  }
}

// class remove function
export const removeClass = (elem: any, ...className: Array<string>) => {
  let _newElem = elem
  if (isString(_newElem)) {
    _newElem = getElems(elem)
  }
  if (_newElem.length !== undefined) {
    forEach(_newElem, function (elem) {
      forEach(className, function (className) {
        elem.classList.remove(className)
      })
    })
  } else {
    forEach(className, function (className) {
      _newElem.classList.remove(className)
    })
  }
}

// get attribute value
export const getAttr = function (elem: any, attr: AttributeProp) {
  return elem.getAttribute(attr);
}

// set attribute value
export const setAttr = function (elems: any, object: AttributeProp) {
  let _newElem = elems
  if (isString(_newElem)) {
    _newElem = getElems(elems);;
  }
  forEach(_newElem, function (elem) {
    elem.setAttribute(object.prop, object.value);
  })
}

// remove attribute value
export const removeAttr = function (elem: HTMLElement, attr: string) {
  elem.removeAttribute(attr);
}

// Update html content
export const setContent = function (selector: any, content: string) {
  let _newElem = selector
  if (isString(_newElem)) {
    _newElem = getElems(selector);;
  }
  if (typeof _newElem.length !== typeof undefined) {
    forEach(_newElem, function (elem) {
      const leftJoin = elem.getAttribute('data-leftJoin') !== null ? elem.getAttribute('data-leftJoin') : '';
      const rightJoin = elem.getAttribute('data-rightJoin') !== null ? elem.getAttribute('data-rightJoin') : '';
      elem.innerHTML = leftJoin + content + rightJoin;
    });
  }
}

export const copyToClipboard = (value: Object) => {
  const elem = document.createElement("textarea");
  document.querySelector("body")?.appendChild(elem);
  elem.value = JSON.stringify(value, null, 4);
  elem.select();
  document.execCommand('copy');
  elem.remove();
}
