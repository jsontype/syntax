// @ts-nocheck
import _ from 'lodash'
import { addClass, removeClass, setAttr } from './dom'
export const updateBodyClass = (choices, value) => {
  if (value !== '') {
    // remove class from choices
    if (choices.length > 0) {
      choices.forEach((other) => {
        removeClass('body', other)
      });
    }
    if (_.isArray(value)) {
      _.forEach(value, (val) => {
        addClass('body', val)
      })
    } else {
      addClass('body', value)
    }
  }
}

export const updateHtmlAttr = (value) => {
  // set direction
  setAttr('html', value)
}
export const updateTitle = (value) => {
  // set title
  setContent('[data-setting="app_name"]', value)
}

export const updateHtmlClass = (choices, value) => {
  // remove class from choices
  if (choices.length > 0) {
    choices.forEach((other) => {
      removeClass('html', other)
    });
  }
  addClass('html', value)
}

export const updateDomValueBySetting = (setting) => {
  updateHtmlAttr({ prop: 'dir', value: setting.theme_scheme_direction.value })
  updateHtmlAttr({ prop: 'data-bs-theme', value: setting.theme_color.value })
  updateTitle(setting.app_name.value)
}

export const updateStorage = (storage, key, value) => {
  if (typeof value !== typeof undefined && typeof key !== typeof undefined) {
    switch (storage) {
      case 'localStorage':
        sessionStorage.removeItem(key)
        localStorage.setItem(key, JSON.stringify(value))
        break;

      case 'sessionStorage':
        localStorage.removeItem(key)
        sessionStorage.setItem(key, JSON.stringify(value))
        break;

      default:
        localStorage.removeItem(key)
        sessionStorage.removeItem(key)
        localStorage.setItem(key, 'none')
        sessionStorage.setItem(key, 'none')
        break;
    }
  }
}

export const getStorage = (key) => {
  if (localStorage.getItem(key) === 'none' || sessionStorage.getItem(key) === 'none') return 'none'
  if ((localStorage.getItem(key) !== null && localStorage.getItem(key) !== '') ||
    (sessionStorage.getItem(key) !== null && sessionStorage.getItem(key) !== '')) {
    let value = localStorage.getItem(key)
    if (value === null) value = sessionStorage.getItem(key)
    if (value !== null) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value
      }
    }
  }
  return null
}
