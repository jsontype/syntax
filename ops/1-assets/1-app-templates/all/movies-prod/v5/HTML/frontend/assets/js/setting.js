/*-----------------------------
 * Functions
 * - init
 * - reInit
 * - destroy
 * - storageGet
 * - storageSet
 * - storageRemove
 * - UpdateOption
 * - setSettingOption
 * - UpdateOptionFromStorage
 * - CustomEvent for updateOption
 * - CustomEvent for updateOptionFromStorage
 * - setDefault option Soon
 * - addListeners
   * - radioListener
   * - attribuiteListener
 * - removeListeners
    * - radioListener
    * - attribuiteListener
 * - addClass
 * - removeClass
 * - toggleClass
 * - observeStorage:  https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event
-----------------------------*/

/*************************
 * Lodash functions use
 * https://lodash.com/docs/4.17.15#functions
 *  function list:
    - _.keys
    - _.has
    - _.findKey
    - _.find
    - _.forEach
    - _.isObject
    - _.isArray
    - _.isString
 * ***********************/

/****** Incomplete Points
 * Color Customizer with color pallet & Custom Color
 * Font Family by root variables
 * FOOTER FIXED
 - position: STICKY;
 - bottom: 0;
 * ***/
(function (window) {
  // Listners for Customizer

  const selectors = {
    radio: document.querySelectorAll('[data-setting="radio"]'),
    attribute: document.querySelectorAll('[data-setting="attribute"]'),
  };

  /**************************************************************************
   * Default Object for setting Start
   * **********************************************************************/

  const defaults = defaultSetting();

  function defaultSetting() {
    return {
      saveLocal: "sessionStorage", // sessionStorage, localStorage, none
      storeKey: "streamit",
      setting: defaultSettingOption(),
      beforeInit: function (cb) {
        return cb;
      },
      afterInit: function (cb) {
        return cb;
      },
    };
  }

  function defaultSettingOption() {
    return {
      theme_scheme_direction: {
        target: "html",
        choices: ["ltr", "rtl"],
        value: "ltr",
      },
      theme_style_appearance: {
        target: "html",
        choices: ["dark", "hotstar", "prime", "hulu"],
        value: ["dark"],
      },
    };
  }

  /**************************************************************************
   * Default Object for setting End
   * **********************************************************************/

  // Main function
  this.IQSetting = function (opt) {
    this.options = {};

    this.arg = opt;

    this.extend(defaults);

    this.getStorageValue(this.options.storeKey);

    this.updateOptionFromStorage();

    if (_.isFunction(this.options.beforeInit)) {
      this.options.beforeInit(this);
    }

    this.init();

    if (_.isFunction(this.options.afterInit)) {
      this.options.afterInit(this);
    }

    this.addListeners();

    return this;
  };

  /**************************************************************************
   * Initialize Functions Start
   * **********************************************************************/

  // extend object function to the IQSetting prototype
  IQSetting.prototype.extend = function (defaults) {
    // Create options by extending defaults with the passed in arugments
    if (this.arg && _.isObject(this.arg)) {
      this.options = IQUtils.mergeDeep(defaults, this.arg);
    } else {
      this.options = defaults;
    }
  };

  // Function call by parameter to the IQSetting prototype
  IQSetting.prototype.fnCall = function (
    key,
    value = this.getSettingKey(key).value
  ) {
    if (_.isString(key)) {
      if (
        this.__proto__.hasOwnProperty(key) &&
        _.isFunction(this.__proto__[key])
      ) {
        this.__proto__[key].call(this, value);
      }
    }
  };

  // Init function to the IQSetting prototype
  IQSetting.prototype.init = function () {
    const keys = _.keys(this.options.setting);
    _.forEach(keys, (key) => {
      this.fnCall(key);
    });

    this.saveOption();
  };

  // reInit function to the IQSetting prototype
  IQSetting.prototype.reInit = function () {
    this.destroy();
    this.extend(defaultSetting());
    this.saveLocal(this.options.saveLocal);
    this.init();
    this.afterUpdate("reinit", this.options);
    this.resetFontFamily();
  };

  // After Update function to the IQSetting Prototype
  IQSetting.prototype.afterUpdate = function (key, value, currentValue = "") {
    const event = new CustomEvent(key, {
      detail: { value: value, name: key, currentValue: currentValue },
    });
    document.dispatchEvent(event);
    this.saveOption();
  };

  // Destroy function to the IQSetting prototype
  IQSetting.prototype.destroy = function () {
    this.removeListeners();
  };

  // addListeners function to the IQSetting prototype
  IQSetting.prototype.addListeners = function (elems, key) {
    this.addRadioListener();
    this.addAttributeListener();
  };

  // removeListeners function to the IQSetting prototype
  IQSetting.prototype.removeListeners = function (elems, key) {
    this.removeRadioListeners();
    this.removeAttributeListeners();
  };

  /**************************************************************************
   * Initialize Functions End
   * **********************************************************************/

  /**************************************************************************
   * Get Value Functions Start
   * **********************************************************************/

  // Update option key values to the IQSetting
  IQSetting.prototype.setMainOption = function (key, value) {
    this.options[key] = value;
  };

  // get setting options function to the IQSetting prototype
  IQSetting.prototype.getSettingOptions = function () {
    return this.options.settings;
  };

  // get Setting key function to the IQSetting prototype
  IQSetting.prototype.getSettingKey = function (key) {
    return this.options.setting[key];
  };

  // Update option setting key values to the IQSetting
  IQSetting.prototype.setSettingOption = function (key, value, manual) {
    if (manual) {
      this.options.setting[key].value = value;
    }
  };

  // get option json function to the IQSetting prototype
  IQSetting.prototype.getSettingJson = function () {
    const self = this;
    const json = {};
    Object.keys(self.options).forEach(function (key) {
      if (key !== "afterInit" && key !== "beforeInit") {
        json[key] = self.options[key];
        if (key === "setting") {
          Object.keys(json[key]).forEach(function (subKey) {
            delete json[key][subKey].target;
            delete json[key][subKey].type;
            delete json[key][subKey].choices;
          });
        }
      }
    });
    this.options = IQUtils.mergeDeep(defaults, json);
    return JSON.stringify(json, null, 4);
  };

  // Static method to get the instance of the IQSetting
  IQSetting.getInstance = function () {
    if (!IQSetting.instance) {
      IQSetting.instance = new IQSetting();
    }
    return IQSetting.instance;
  };

  /**************************************************************************
   * Get Value Functions End
   * **********************************************************************/

  /**************************************************************************
   * Storage get & update Functions Start
   * **********************************************************************/

  // function for save option in localStorage or sessionStorage based on options
  IQSetting.prototype.saveOption = function () {
    const key = this.options.storeKey;
    const value = this.options;
    if (typeof value !== typeof undefined && typeof key !== typeof undefined) {
      switch (this.options.saveLocal) {
        case "localStorage":
          sessionStorage.removeItem(key);
          return IQUtils.saveLocalStorage(key, JSON.stringify(value));
          break;

        case "sessionStorage":
          localStorage.removeItem(key);
          return IQUtils.saveSessionStorage(key, JSON.stringify(value));
          break;

        default:
          break;
      }
    }
    localStorage.setItem(key, "none");
    sessionStorage.setItem(key, "none");
  };

  // function for get option in localStorage or sessionStorage based on options
  IQSetting.prototype.getOption = function (key) {
    if (
      localStorage.getItem(key) === "none" ||
      sessionStorage.getItem(key) === "none"
    )
      return "none";
    if (
      (localStorage.getItem(key) !== null &&
        localStorage.getItem(key) !== "") ||
      (sessionStorage.getItem(key) !== null &&
        sessionStorage.getItem(key) !== "")
    ) {
      let value = localStorage.getItem(key);
      if (value === null) value = sessionStorage.getItem(key);
      if (value !== null) {
        try {
          return JSON.parse(value);
        } catch (e) {
          return value;
        }
      }
    }
  };

  // function for update option from localStorage or sessionStorage based on options
  IQSetting.prototype.updateOptionFromStorage = function () {
    const getData = this.getOption(this.options.storeKey);
    if (getData === "none") {
      return (this.options.saveLocal = "none");
    }
    if (getData !== undefined) {
      this.options = getData;
    }
    return this.options;
  };

  // function for get storage value if exists
  IQSetting.prototype.getStorageValue = function (key) {
    const checkKey = IQUtils.checkStorageArray(key, [
      "localStorage",
      "sessionStorage",
      "none",
    ]);
    let defaultstorage = this.options.saveLocal;
    if (checkKey.result) {
      defaultstorage = checkKey.storage;
    }
    IQUtils.getElems(`input[name="saveLocal"]`).forEach(function (el) {
      el.checked = false;
      if (el.value === defaultstorage) {
        el.checked = true;
      }
    });
  };

  /**************************************************************************
   * Storage get & update Functions End
   * **********************************************************************/

  /**************************************************************************
   * Input Update Functions Start
   * **********************************************************************/

  // Input radio input manually change function to the IQSetting prototype
  IQSetting.prototype.__radioInputChange__ = function (key) {
    const obj = this.getSettingKey(key);
    IQUtils.getElems(`input[name="${key}"]`).forEach(function (el) {
      el.checked = false;
      if (el.value === obj.value) {
        el.checked = true;
      }
    });
  };

  /**************************************************************************
   * Input Update Functions End
   * **********************************************************************/

  /**************************************************************************
   * Dom & Object Update Functions Start
   * IQSetting.options update functions saveLocal, setting:key, value etc...
   * **********************************************************************/

  // radio update function to the IQSetting prototype
  IQSetting.prototype.__radioUpdate__ = function (key, value, cb) {
    const obj = this.getSettingKey(key);
    if (value !== null) {
      obj.value = value;
      this.setSettingOption(key, value);
    }
    if (obj.target !== null) {
      obj.choices.forEach((other) => {
        IQUtils.removeClass(obj.target, ...other.split(" "));
      });
      IQUtils.addClass(obj.target, ...value.split(" "));
    }
    this.__radioInputChange__(key);
    if (_.isFunction(cb)) {
      cb(key, value, obj);
    }
    this.afterUpdate(key, value);
  };

  // attribute update function to the IQSetting prototype
  IQSetting.prototype.__attributeUpdate__ = function (
    key,
    pair = { prop: "color", value: "value" },
    cb
  ) {
    const obj = this.getSettingKey(key);
    if (pair.value !== null) {
      obj.value = pair.value;
      this.setSettingOption(key, pair.value);
    }
    if (obj.target !== null) {
      IQUtils.setAttr(obj.target, pair);
    }
    this.__radioInputChange__(key);
    if (_.isFunction(cb)) {
      cb(key, pair.value);
    }
    this.afterUpdate(key, pair);
  };

  // Update option function to the IQSetting Prototype
  IQSetting.prototype.__updateOption__ = function (key, value) {
    this.setMainOption(key, value);
    this.saveOption();
    this.updateOptionFromStorage();
  };

  /**************************************************************************
   * Dom & Object Update Functions End
   * **********************************************************************/

  /**************************************************************************
   * Add Listener Functions Start
   * **********************************************************************/

  // Add radio event listener to the IQSetting prototype
  IQSetting.prototype.addRadioListener = function (cb) {
    const self = this;
    selectors.radio.forEach(function (item) {
      item.addEventListener("change", function (e) {
        const value = e.target.value;
        const key = e.target.getAttribute("name");
        // Update dom values based on radio button
        self.__proto__[key].call(self, value);
        if (_.isFunction(cb)) {
          cb();
        }
      });
    });
  };

  // Add attribute event listener to the IQSetting Prototype
  IQSetting.prototype.addAttributeListener = function (cb) {
    const self = this;
    selectors.attribute.forEach(function (item) {
      // add event listener for attribute change
      item.addEventListener("change", function (e) {
        const value = e.target.value;
        const key = e.target.getAttribute("name");
        const pair = {
          prop: e.target.getAttribute("data-prop"),
          value: value,
        };
        // Update dom values based on attribute
        self.__proto__[key].call(self, pair.value);
        if (_.isFunction(cb)) {
          cb();
        }
      });
    });
  };

  /**************************************************************************
   * Add Listener Functions End
   * **********************************************************************/

  /**************************************************************************
   * Remove Listener Functions Start
   * **********************************************************************/

  // remove radio listeners function to the IQSetting prototype
  IQSetting.prototype.removeRadioListeners = function () {
    selectors.radio.forEach(function (item) {
      item.removeEventListener("change", null);
    });
  };

  // remove attribute listeners function to the IQSetting prototype
  IQSetting.prototype.removeAttributeListeners = function () {
    selectors.attribute.forEach(function (item) {
      item.removeEventListener("change", null);
    });
  };

  /**************************************************************************
   * Remove Listener Functions End
   * **********************************************************************/

  // theme_scheme_direction function to the IQSetting prototype @params: value (string)
  IQSetting.prototype.theme_scheme_direction = function (value) {
    if (typeof value !== typeof null) {
      const __this = this;
      this.__attributeUpdate__(
        "theme_scheme_direction",
        { prop: "dir", value: value },
        function (key, val) {
          __this.rtlChange(val == "rtl" ? true : false);
        }
      );
    }
  };

  // theme_style_appearance function to the IQSetting prototype @params: value (string)
  IQSetting.prototype.theme_style_appearance = function (value, currentValue) {
    if (value !== null) {
      this.__attributeUpdate__("theme_style_appearance", {
        prop: "data-bs-theme",
        value: value,
      });
    }
  };

  // saveLocal function to the IQSetting prototype value (string)
  IQSetting.prototype.saveLocal = function (value = null) {
    if (value !== null) {
      this.__updateOption__("saveLocal", value);
    }
  };

  /**************************************************************************
   * Additional Functions Start
   * **********************************************************************/
  // Rtl Change to Offcanvas left to right Static Function
  IQSetting.prototype.rtlChange = function (check) {
    IQUtils.addClass(".offcanvas-start", "on-rtl", "start");
    IQUtils.addClass(".offcanvas-end", "on-rtl", "end");
    if (check) {
      IQUtils.addClass(".on-rtl.start", "offcanvas-end");
      IQUtils.removeClass(".on-rtl.start", "offcanvas-start");
      IQUtils.addClass(".on-rtl.end", "offcanvas-start");
      IQUtils.removeClass(".on-rtl.end", "offcanvas-end");
    } else {
      IQUtils.addClass(".on-rtl.start", "offcanvas-start");
      IQUtils.removeClass(".on-rtl.start", "offcanvas-end");
      IQUtils.addClass(".on-rtl.end", "offcanvas-end");
      IQUtils.removeClass(".on-rtl.end", "offcanvas-start");
    }
  };
  /**************************************************************************
   * Additional Functions End
   * **********************************************************************/

  // Export the IQSetting
  window.IQSetting = this.IQSetting;
  return window.IQSetting;
})(window);
