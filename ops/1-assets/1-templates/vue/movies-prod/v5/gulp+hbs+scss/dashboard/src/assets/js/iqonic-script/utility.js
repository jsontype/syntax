/*
* Version: 5.1.1
* Template: Streamit - Responsive Bootstrap 5 Admin Dashboard Template
* Author: iqonic.design
* Author URL: https://iqonic.design/
* Design and Developed by: iqonic.design
* Description: This file contains the script for initialize & listener Template.
*/

(function () {
    this.IQUtils = function (params) {
    }


    // save session storage value
    this.IQUtils.saveSessionStorage = function (key, value) {
        window.sessionStorage.setItem(key, value);
    }

    // get session storage value
    this.IQUtils.getSessionStorage = function (key) {
        return window.sessionStorage.getItem(key);
    }

    // remove session storage value
    this.IQUtils.removeSessionStorage = function (key) {
        window.sessionStorage.removeItem(key);
    }

    // save local storage value
    this.IQUtils.saveLocalStorage = function (key, value) {
        window.localStorage.setItem(key, value);
    }

    // get local storage value
    this.IQUtils.getLocalStorage = function (key) {
        return window.localStorage.getItem(key);
    }

    // remove local storage value
    this.IQUtils.removeLocalStorage = function (key) {
        window.localStorage.removeItem(key);
    }

    // get cookie value
    this.IQUtils.getCookie = function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // set cookie value
    this.IQUtils.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    // remove cookie value
    this.IQUtils.removeCookie = function (cname) {
        document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    // check storage key exist function
    this.IQUtils.checkStorageKey = function (key) {
        if (window.localStorage.getItem(key) === null) {
            return false;
        } else {
            return true;
        }
    }

    // check session storage key exist function
    this.IQUtils.checkSessionStorageKey = function (key) {
        if (window.sessionStorage.getItem(key) === null) {
            return false;
        } else {
            return true;
        }
    }

    // check cookie key exist function
    this.IQUtils.checkCookieKey = function (key) {
        if (this.getCookie(key) === "") {
            return false;
        } else {
            return true;
        }
    }

    // check value exist function
    this.IQUtils.checkValue = function (value) {
        if (value === null || value === undefined || value === "") {
            return false;
        } else {
            return true;
        }
    }

    // check all storage from key exist or not
    this.IQUtils.checkAllStorageKey = function (key) {
        if (this.checkStorageKey(key) || this.checkSessionStorageKey(key) || this.checkCookieKey(key)) {
            return true;
        } else {
            return false;
        }
    }

    // check storage array by paramerts exist function
    this.IQUtils.checkStorageArray = function (key, storages) {
        let result = false;
        let obj = {}
        for (var i = 0; i < storages.length; i++) {
            switch (storages[i]) {
                case 'localStorage':
                    if (this.checkStorageKey(key)) {
                        if (window.localStorage.getItem(key) !== 'none') {
                            result = true;
                            obj.storage = 'localStorage';
                        }
                    }
                    break;

                case 'sessionStorage':
                    if (this.checkSessionStorageKey(key)) {
                        if (window.sessionStorage.getItem(key) !== 'none') {
                            result = true;
                            obj.storage = 'sessionStorage';
                        }
                    }
                    break;

                case 'cookie':
                    if (this.checkCookieKey(key)) {
                        result = true;
                        obj.storage = 'cookieStorage'
                        obj.cookie = false;
                    }
                    break;

                case 'none':
                    if (window.sessionStorage.getItem(key) == 'none' && window.localStorage.getItem(key) == 'none') {
                        result = true;
                        obj.storage = 'none'
                    }
                    break;

                default:
                    break;
            }
        }
        obj.result = result;
        return obj;
    }

    // get url parameter value
    this.IQUtils.getUrlParameter = function (name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // get query string value
    this.IQUtils.getQueryString = function (name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // get element by selector
    this.IQUtils.getElem = function (selector, elem = document) {
        return elem.querySelector(selector);
    }


    this.IQUtils.getElems = function (selector, elem = document) {
        return elem.querySelectorAll(selector);
    }

    this.IQUtils.setContent = function (selector, content) {
        let _newElem = selector
        if (_.isString(_newElem)) {
            _newElem = IQUtils.getElems(selector);;
        }
        if (typeof _newElem.length !== typeof undefined) {
            _.forEach(_newElem, function (elem) {
                const leftJoin = elem.getAttribute('data-leftJoin') !== null ? elem.getAttribute('data-leftJoin') : '';
                const rightJoin = elem.getAttribute('data-rightJoin') !== null ? elem.getAttribute('data-rightJoin') : '';
                elem.innerHTML = leftJoin + content + rightJoin;
            });
        }
    }

    // class add function
    this.IQUtils.addClass = function (elem, ...className) {
        let _newElem = elem
        if (_.isString(_newElem)) {
            _newElem = IQUtils.getElems(elem);;
        }
        if (_newElem.length !== undefined) {
            _.forEach(_newElem, function (elem) {
                _.forEach(className, function (newClassName) {
                    elem.classList.add(newClassName);
                });
            });
        } else {
            _.forEach(className, function (newClassName) {
                _newElem.classList.add(newClassName);
            });
        }

    }

    // class remove function
    this.IQUtils.removeClass = function (elem, ...className) {
        let _newElem = elem
        if (_.isString(_newElem)) {
            _newElem = IQUtils.getElems(elem);;
        }
        if (_newElem.length !== undefined) {
            _.forEach(_newElem, function (elem) {
                _.forEach(className, function (className) {
                    elem.classList.remove(className);
                });
            });
        } else {
            _.forEach(className, function (className) {
                _newElem.classList.remove(className);
            });
        }
    }

    // class toggle function
    this.IQUtils.toggleClass = function (elem, className) {
        elem.classList.toggle(className);
    }

    // class has function
    this.IQUtils.hasClass = function (elem, className) {
        return elem.classList.contains(className);
    }

    // get attribute value
    this.IQUtils.getAttr = function (elem, attr) {
        return elem.getAttribute(attr);
    }

    // set attribute value
    this.IQUtils.setAttr = function (elems, object) {
        let _newElem = elems
        if (_.isString(_newElem)) {
            _newElem = IQUtils.getElems(elems);;
        }
        _.forEach(_newElem, function (elem) {
            elem.setAttribute(object.prop, object.value);
        })
    }

    // remove attribute value
    this.IQUtils.removeAttr = function (elem, attr) {
        elem.removeAttribute(attr);
    }

    // update style value
    this.IQUtils.setStyle = function (elems, object) {
        for (var key in object) {
            let _newElem = elems
            if (_.isString(_newElem)) {
                _newElem = IQUtils.getElems(elems);;
            }
            _.forEach(_newElem, function (elem) {
                elem.style[key] = object[key];
            })
        }
    }

    // get element position
    this.IQUtils.getPosition = function (elem) {
        var xPosition = 0;
        var yPosition = 0;

        while (elem) {
            xPosition += (elem.offsetLeft - elem.scrollLeft + elem.clientLeft);
            yPosition += (elem.offsetTop - elem.scrollTop + elem.clientTop);
            elem = elem.offsetParent;
        }
        return {
            x: xPosition,
            y: yPosition
        };
    }

    // get element width
    this.IQUtils.getWidth = function (elem) {
        return elem.offsetWidth;
    }

    // get element height
    this.IQUtils.getHeight = function (elem) {
        return elem.offsetHeight;
    }

    // create event
    this.IQUtils.createEvent = (eventName, eventData) => {
        return new Event(eventName, eventData);
    }

    // deep merge function
    this.IQUtils.mergeDeep = (target, ...sources) => {
        if (!sources.length) return target;
        const source = sources.shift();

        if (_.isObject(target) && _.isObject(source)) {
            for (const key in source) {
                if (_.isObject(source[key])) {
                    if (!target[key]) Object.assign(target, { [key]: {} });
                    IQUtils.mergeDeep(target[key], source[key]);
                } else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }

        return IQUtils.mergeDeep(target, ...sources);
    }

    // get style root variables function
    this.IQUtils.getRootVars = (property, elem = document.body) => {
        let _newElem = elem
        if (_.isString(_newElem)) {
            _newElem = IQUtils.getElems(elems);;
        }
        return getComputedStyle(elem).getPropertyValue(property).trim() || null;

    }

    // add or update css root variables function
    this.IQUtils.setRootVariables = (variables) => {
        const _root = document.documentElement;
        const _variables = variables;
        _.forEach(_variables, function (value, key) {
            _root.style.setProperty(key, value);
        });
    }

    // remove css root variables function
    this.IQUtils.removeRootVariables = (variables) => {
        const _root = document.documentElement;
        const _variables = variables;
        _.forEach(_variables, function (value, key) {
            _root.style.removeProperty(key);
        });
    }

    // color mix function
    this.IQUtils.colorMix = (color_1, color_2, weight) => {
        function d2h(d) { return d.toString(16); }  // convert a decimal value to hex
        function h2d(h) { return parseInt(h, 16); } // convert a hex value to decimal
        weight = (typeof (weight) !== 'undefined') ? weight : 50; // set the weight to 50%, if that argument is omitted
        var color = "#";
        for (var i = 0; i <= 5; i += 2) { // loop through each of the 3 hex pairs—red, green, and blue
            var v1 = h2d(color_1.substr(i, 2)) // extract the current pairs
            var v2 = h2d(color_2.substr(i, 2))
            // combine the current pairs from each source color, according to the specified weight
            var val = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0)));

            while (val.length < 2) { val = '0' + val; } // prepend a '0' if val results in a single digit

            color += val; // concatenate val to our new color string
        }

        return color; // PROFIT!
    }

    // tint color function
    this.IQUtils.tintColor = (color, weight) => {
        weight = (typeof (weight) !== 'undefined') ? weight : 50; // set the weight to 50%, if that argument is omitted
        var color = color;
        var color_1 = color.substr(1); // strip the '#' character from the beginning
        var color_2 = 'FFFFFF';
        return IQUtils.colorMix(color_2, color_1, weight);
    }

    // shade color function
    this.IQUtils.shadeColor = (color, weight) => {
        weight = (typeof (weight) !== 'undefined') ? weight : 50; // set the weight to 50%, if that argument is omitted
        var color = color;
        var color_1 = color.substr(1); // strip the '#' character from the beginning
        var color_2 = '000000';
        return IQUtils.colorMix(color_2, color_1, weight);
    }

    // color hex to rgb function
    this.IQUtils.hexToRgb = (hex) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    }

    // get color shade & tint Functions
    this.IQUtils.getColorShadeTint = (color, value) => {
        console.log(color, value)
        let colors = {}
        const style = document.createElement('style')
        style.setAttribute('class', 'custom-color')
        style.innerHTML = `
            [data-bs-theme-color="custom"] {
                ${color}: ${value};
                ${color}-rgb: ${IQUtils.hexToRgb(value)};
                ${color}-bg-subtle: ${IQUtils.tintColor(value, 80)};
                ${color}-border-subtle: var(${color}-bg-subtle);
                --bs-link-color-rgb: var(${color}-rgb);
                ${color}-hover-bg: ${IQUtils.shadeColor(value, 20)};
                ${color}-hover-border: ${IQUtils.shadeColor(value, 30)};
                ${color}-active-bg: ${IQUtils.shadeColor(value, 20)};
                ${color}-active-border: ${IQUtils.shadeColor(value, 30)};
            }
            [data-bs-theme-color="custom"][data-bs-theme="dark"] {
                ${color}-text-emphasis:  ${IQUtils.tintColor(value, 40)};
                ${color}-bg-subtle:  ${IQUtils.shadeColor(value, 80)};
              }
        `;
        document.head.appendChild(style)
        return colors
    }

    this.IQUtils.debounce = (func, wait, immediate) => {
        let timeout
        return function () {
            const context = this, args = arguments
            const later = function () {
                timeout = null
                if (!immediate) func.apply(context, args)
            }
            const callNow = immediate && !timeout
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)
            if (callNow) func.apply(context, args)
        }
    }

    this.IQUtils.getVariableColor = () => {
        let prefix = getComputedStyle(document.body).getPropertyValue('--prefix') || 'bs-';
        if (prefix) {
            prefix = prefix.trim()
        }
        const color1 = getComputedStyle(document.body).getPropertyValue(`--${prefix}primary`);
        const color2 = getComputedStyle(document.body).getPropertyValue(`--${prefix}secondary`);
        const color3 = getComputedStyle(document.body).getPropertyValue(`--${prefix}primary-tint-20`);
        const color4 = getComputedStyle(document.body).getPropertyValue(`--${prefix}warning`);
        const color5 = getComputedStyle(document.body).getPropertyValue(`--${prefix}tertiray`);
        return {
            primary: color1.trim(),
            secondary: color2.trim(),
            primary_light: color3.trim(),
            warning: color4.trim(),
            tertiray: color5.trim(),
        };
    }

    return this.IQUtils;
})();
