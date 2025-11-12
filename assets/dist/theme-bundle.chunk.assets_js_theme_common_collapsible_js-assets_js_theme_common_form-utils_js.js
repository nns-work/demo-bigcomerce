"use strict";
(self["webpackChunksecond_skin_audio"] = self["webpackChunksecond_skin_audio"] || []).push([["assets_js_theme_common_collapsible_js-assets_js_theme_common_form-utils_js"],{

/***/ "./assets/js/theme/common/collapsible.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/common/collapsible.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collapsible: () => (/* binding */ Collapsible),
/* harmony export */   CollapsibleEvents: () => (/* binding */ CollapsibleEvents),
/* harmony export */   "default": () => (/* binding */ collapsibleFactory)
/* harmony export */ });
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media_query_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media-query-list */ "./assets/js/theme/common/media-query-list.js");

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var PLUGIN_KEY = 'collapsible';
var CollapsibleEvents = {
  open: 'open.collapsible',
  close: 'close.collapsible',
  toggle: 'toggle.collapsible',
  click: 'click.collapsible'
};
var CollapsibleState = {
  closed: 'closed',
  open: 'open'
};
function prependHash(id) {
  if (id && id.indexOf('#') === 0) {
    return id;
  }
  return "#" + id;
}
function optionsFromData($element) {
  return {
    disabledBreakpoint: $element.data(PLUGIN_KEY + "DisabledBreakpoint"),
    disabledState: $element.data(PLUGIN_KEY + "DisabledState"),
    enabledState: $element.data(PLUGIN_KEY + "EnabledState"),
    openClassName: $element.data(PLUGIN_KEY + "OpenClassName")
  };
}

/**
 * Collapse/Expand toggle
 */
var Collapsible = /*#__PURE__*/function () {
  /**
   * @param {jQuery} $toggle - Trigger button
   * @param {jQuery} $target - Content to collapse / expand
   * @param {Object} [options] - Configurable options
   * @param {Object} [options.$context]
   * @param {Object} [options.disabledBreakpoint]
   * @param {Object} [options.disabledState]
   * @param {Object} [options.enabledState]
   * @param {Object} [options.openClassName]
   * @example
   *
   * <button id="#more">Collapse</button>
   * <div id="content">...</div>
   *
   * new Collapsible($('#more'), $('#content'));
   */
  function Collapsible($toggle, $target, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      disabledBreakpoint = _ref.disabledBreakpoint,
      disabledState = _ref.disabledState,
      enabledState = _ref.enabledState,
      _ref$openClassName = _ref.openClassName,
      openClassName = _ref$openClassName === void 0 ? 'is-open' : _ref$openClassName;
    this.$toggle = $toggle;
    this.$target = $target;
    this.targetId = $target.attr('id');
    this.openClassName = openClassName;
    this.disabledState = disabledState;
    this.enabledState = enabledState;
    if (disabledBreakpoint) {
      this.disabledMediaQueryList = (0,_media_query_list__WEBPACK_IMPORTED_MODULE_2__["default"])(disabledBreakpoint);
    }
    if (this.disabledMediaQueryList) {
      this.disabled = this.disabledMediaQueryList.matches;
    } else {
      this.disabled = false;
    }

    // Auto-bind
    this.onClicked = this.onClicked.bind(this);
    this.onDisabledMediaQueryListMatch = this.onDisabledMediaQueryListMatch.bind(this);

    // Assign DOM attributes
    this.$target.attr('aria-hidden', this.isCollapsed);
    this.$toggle.attr('aria-controls', $target.attr('id')).attr('aria-expanded', this.isOpen);

    // Listen
    this.bindEvents();
  }
  var _proto = Collapsible.prototype;
  _proto.open = function open(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      _ref2$notify = _ref2.notify,
      notify = _ref2$notify === void 0 ? true : _ref2$notify;
    this.$toggle.addClass(this.openClassName).attr('aria-expanded', true);
    this.$target.addClass(this.openClassName).attr('aria-hidden', false);
    if (notify) {
      this.$toggle.trigger(CollapsibleEvents.open, [this]);
      this.$toggle.trigger(CollapsibleEvents.toggle, [this]);
    }
  };
  _proto.close = function close(_temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      _ref3$notify = _ref3.notify,
      notify = _ref3$notify === void 0 ? true : _ref3$notify;
    this.$toggle.removeClass(this.openClassName).attr('aria-expanded', false);
    this.$target.removeClass(this.openClassName).attr('aria-hidden', true);
    if (notify) {
      this.$toggle.trigger(CollapsibleEvents.close, [this]);
      this.$toggle.trigger(CollapsibleEvents.toggle, [this]);
    }
  };
  _proto.toggle = function toggle() {
    if (this.isCollapsed) {
      this.open();
    } else {
      this.close();
    }
  };
  _proto.toggleByState = function toggleByState(state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    switch (state) {
      case CollapsibleState.open:
        return this.open.apply(this, args);
      case CollapsibleState.closed:
        return this.close.apply(this, args);
      default:
        return undefined;
    }
  };
  _proto.hasCollapsible = function hasCollapsible(collapsibleInstance) {
    return jquery__WEBPACK_IMPORTED_MODULE_1___default().contains(this.$target.get(0), collapsibleInstance.$target.get(0));
  };
  _proto.bindEvents = function bindEvents() {
    this.$toggle.on(CollapsibleEvents.click, this.onClicked);
    if (this.disabledMediaQueryList && this.disabledMediaQueryList.addListener) {
      this.disabledMediaQueryList.addListener(this.onDisabledMediaQueryListMatch);
    }
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$toggle.off(CollapsibleEvents.click, this.onClicked);
    if (this.disabledMediaQueryList && this.disabledMediaQueryList.removeListener) {
      this.disabledMediaQueryList.removeListener(this.onDisabledMediaQueryListMatch);
    }
  };
  _proto.onClicked = function onClicked(event) {
    if (this.disabled) {
      return;
    }
    event.preventDefault();
    this.toggle();
  };
  _proto.onDisabledMediaQueryListMatch = function onDisabledMediaQueryListMatch(media) {
    this.disabled = media.matches;
  };
  return _createClass(Collapsible, [{
    key: "isCollapsed",
    get: function get() {
      return !this.$target.hasClass(this.openClassName) || this.$target.is(':hidden');
    }
  }, {
    key: "isOpen",
    get: function get() {
      return !this.isCollapsed;
    }
  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(disabled) {
      this._disabled = disabled;
      if (disabled) {
        this.toggleByState(this.disabledState);
      } else {
        this.toggleByState(this.enabledState);
      }
    }
  }]);
}();

/**
 * Convenience method for constructing Collapsible instance
 *
 * @param {string} [selector]
 * @param {Object} [options]
 * @param {Object} [options.$context]
 * @param {Object} [options.disabledBreakpoint]
 * @param {Object} [options.disabledState]
 * @param {Object} [options.enabledState]
 * @param {Object} [options.openClassName]
 * @return {Array} array of Collapsible instances
 *
 * @example
 * <a href="#content" data-collapsible>Collapse</a>
 * <div id="content">...</div>
 *
 * collapsibleFactory();
 */
function collapsibleFactory(selector, overrideOptions) {
  if (selector === void 0) {
    selector = "[data-" + PLUGIN_KEY + "]";
  }
  if (overrideOptions === void 0) {
    overrideOptions = {};
  }
  var $collapsibles = jquery__WEBPACK_IMPORTED_MODULE_1___default()(selector, overrideOptions.$context);
  return $collapsibles.map(function (index, element) {
    var $toggle = jquery__WEBPACK_IMPORTED_MODULE_1___default()(element);
    var instanceKey = PLUGIN_KEY + "Instance";
    var cachedCollapsible = $toggle.data(instanceKey);
    if (cachedCollapsible instanceof Collapsible) {
      return cachedCollapsible;
    }
    var targetId = prependHash($toggle.data(PLUGIN_KEY) || $toggle.data(PLUGIN_KEY + "Target") || $toggle.attr('href'));
    var options = lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(optionsFromData($toggle), overrideOptions);
    var collapsible = new Collapsible($toggle, jquery__WEBPACK_IMPORTED_MODULE_1___default()(targetId), options);
    $toggle.data(instanceKey, collapsible);
    return collapsible;
  }).toArray();
}

/***/ }),

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Validators: () => (/* binding */ Validators),
/* harmony export */   classifyForm: () => (/* binding */ classifyForm),
/* harmony export */   insertStateHiddenField: () => (/* binding */ insertStateHiddenField)
/* harmony export */ });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");






var inputTagNames = ['input', 'select', 'textarea'];

/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */
function classifyInput(input, formFieldClass) {
  var $input = jquery__WEBPACK_IMPORTED_MODULE_3___default()(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName;

  // Input can be text/checkbox/radio etc...
  if (tagName === 'input') {
    var inputType = $input.prop('type');
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
    }
  }

  // Apply class modifier
  return $formField.addClass(className).addClass(specificClassName);
}

/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */
function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }
  var $form = jquery__WEBPACK_IMPORTED_MODULE_3___default()(formSelector);
  var $inputs = $form.find(inputTagNames.join(', '));

  // Obtain options
  var _options = options,
    _options$formFieldCla = _options.formFieldClass,
    formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla;

  // Classify each input in a form
  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}

/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */
function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);
  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }
  return '';
}

/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */
function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after(jquery__WEBPACK_IMPORTED_MODULE_3___default()('<input />', stateFieldAttrs));
}
var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setEmailValidation: function setEmailValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_5__["default"].email(val);
          cb(result);
        },
        errorMessage: 'You must enter a valid email.'
      });
    }
  },
  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
    var $password = jquery__WEBPACK_IMPORTED_MODULE_3___default()(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength;

        // If optional and nothing entered, it is valid
        if (isOptional && val.length === 0) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: requirements.error
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: 'Your passwords do not match.'
    }];
    validator.add(passwordValidations);
  },
  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
    var errorSelector = selectors.errorSelector,
      fieldsetSelector = selectors.fieldsetSelector,
      formSelector = selectors.formSelector,
      maxPriceSelector = selectors.maxPriceSelector,
      minPriceSelector = selectors.minPriceSelector;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Max. price is required.',
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Min. price is required.',
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Input must be greater than 0.',
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: 'The \'State/Province\' field cannot be blank.'
      });
    }
  },
  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = jquery__WEBPACK_IMPORTED_MODULE_3___default()("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_4__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_4__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_4__["default"].classes[value]);
      }
    });
  }
};


/***/ }),

/***/ "./assets/js/theme/common/media-query-list.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/media-query-list.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mediaQueryListFactory)
/* harmony export */ });
/*
 * Remember to update /assets/scss/settings/global/screensizes/screensizes.scss
 * if you decide to change breakpoint values
 */
var breakpointSizes = {
  large: 1261,
  medium: 801,
  small: 551,
  xsmall: 320
};

/**
 * Create MediaQueryList using breakpoint name
 * @param {string} breakpointName
 * @return {MediaQueryList|null}
 */
function mediaQueryListFactory(breakpointName) {
  if (!breakpointName || !window.matchMedia) {
    return null;
  }
  var breakpoint = breakpointSizes[breakpointName];
  var mediaQuery = "(min-width: " + breakpoint + "px)";
  var mediaQueryList = window.matchMedia(mediaQuery);
  return mediaQueryList;
}

/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var forms = {
  email: function email(value) {
    var re = /^.+@.+\..+/;
    return re.test(value);
  },
  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },
  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb21tb25fY29sbGFwc2libGVfanMtYXNzZXRzX2pzX3RoZW1lX2NvbW1vbl9mb3JtLXV0aWxzX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFFZ0M7QUFFdkQsSUFBTUUsVUFBVSxHQUFHLGFBQWE7QUFFekIsSUFBTUMsaUJBQWlCLEdBQUc7RUFDN0JDLElBQUksRUFBRSxrQkFBa0I7RUFDeEJDLEtBQUssRUFBRSxtQkFBbUI7RUFDMUJDLE1BQU0sRUFBRSxvQkFBb0I7RUFDNUJDLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRCxJQUFNQyxnQkFBZ0IsR0FBRztFQUNyQkMsTUFBTSxFQUFFLFFBQVE7RUFDaEJMLElBQUksRUFBRTtBQUNWLENBQUM7QUFFRCxTQUFTTSxXQUFXQSxDQUFDQyxFQUFFLEVBQUU7RUFDckIsSUFBSUEsRUFBRSxJQUFJQSxFQUFFLENBQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFDN0IsT0FBT0QsRUFBRTtFQUNiO0VBRUEsYUFBV0EsRUFBRTtBQUNqQjtBQUVBLFNBQVNFLGVBQWVBLENBQUNDLFFBQVEsRUFBRTtFQUMvQixPQUFPO0lBQ0hDLGtCQUFrQixFQUFFRCxRQUFRLENBQUNFLElBQUksQ0FBSWQsVUFBVSx1QkFBb0IsQ0FBQztJQUNwRWUsYUFBYSxFQUFFSCxRQUFRLENBQUNFLElBQUksQ0FBSWQsVUFBVSxrQkFBZSxDQUFDO0lBQzFEZ0IsWUFBWSxFQUFFSixRQUFRLENBQUNFLElBQUksQ0FBSWQsVUFBVSxpQkFBYyxDQUFDO0lBQ3hEaUIsYUFBYSxFQUFFTCxRQUFRLENBQUNFLElBQUksQ0FBSWQsVUFBVSxrQkFBZTtFQUM3RCxDQUFDO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ08sSUFBTWtCLFdBQVc7RUFDcEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QU1FLGNBQWMsR0FBR0osTUFBTSxDQUFDQyxVQUFVLENBQUNFLFVBQVUsQ0FBQztFQUVwRCxPQUFPQyxjQUFjO0FBQ3pCLEM7Ozs7Ozs7Ozs7Ozs7O0FDMUJBLElBQU0xRixLQUFLLEdBQUc7RUFDVitDLEtBQUssV0FBTEEsS0FBS0EsQ0FBQ1gsS0FBSyxFQUFFO0lBQ1QsSUFBTXVELEVBQUUsR0FBRyxZQUFZO0lBQ3ZCLE9BQU9BLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDeEQsS0FBSyxDQUFDO0VBQ3pCLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0l5RCxRQUFRLFdBQVJBLFFBQVFBLENBQUN6RCxLQUFLLEVBQUU7SUFDWixPQUFPLElBQUksQ0FBQzBELFFBQVEsQ0FBQzFELEtBQUssQ0FBQztFQUMvQixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0kwRCxRQUFRLFdBQVJBLFFBQVFBLENBQUMxRCxLQUFLLEVBQUU7SUFDWixPQUFPQSxLQUFLLENBQUMzRSxNQUFNLEdBQUcsQ0FBQztFQUMzQjtBQUNKLENBQUM7QUFFRCxpRUFBZXVDLEtBQUssRSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlY29uZC1za2luLWF1ZGlvLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9jb2xsYXBzaWJsZS5qcyIsIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZm9ybS11dGlscy5qcyIsIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vbWVkaWEtcXVlcnktbGlzdC5qcyIsIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vbW9kZWxzL2Zvcm1zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG1lZGlhUXVlcnlMaXN0RmFjdG9yeSBmcm9tICcuL21lZGlhLXF1ZXJ5LWxpc3QnO1xuXG5jb25zdCBQTFVHSU5fS0VZID0gJ2NvbGxhcHNpYmxlJztcblxuZXhwb3J0IGNvbnN0IENvbGxhcHNpYmxlRXZlbnRzID0ge1xuICAgIG9wZW46ICdvcGVuLmNvbGxhcHNpYmxlJyxcbiAgICBjbG9zZTogJ2Nsb3NlLmNvbGxhcHNpYmxlJyxcbiAgICB0b2dnbGU6ICd0b2dnbGUuY29sbGFwc2libGUnLFxuICAgIGNsaWNrOiAnY2xpY2suY29sbGFwc2libGUnLFxufTtcblxuY29uc3QgQ29sbGFwc2libGVTdGF0ZSA9IHtcbiAgICBjbG9zZWQ6ICdjbG9zZWQnLFxuICAgIG9wZW46ICdvcGVuJyxcbn07XG5cbmZ1bmN0aW9uIHByZXBlbmRIYXNoKGlkKSB7XG4gICAgaWYgKGlkICYmIGlkLmluZGV4T2YoJyMnKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAjJHtpZH1gO1xufVxuXG5mdW5jdGlvbiBvcHRpb25zRnJvbURhdGEoJGVsZW1lbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNhYmxlZEJyZWFrcG9pbnQ6ICRlbGVtZW50LmRhdGEoYCR7UExVR0lOX0tFWX1EaXNhYmxlZEJyZWFrcG9pbnRgKSxcbiAgICAgICAgZGlzYWJsZWRTdGF0ZTogJGVsZW1lbnQuZGF0YShgJHtQTFVHSU5fS0VZfURpc2FibGVkU3RhdGVgKSxcbiAgICAgICAgZW5hYmxlZFN0YXRlOiAkZWxlbWVudC5kYXRhKGAke1BMVUdJTl9LRVl9RW5hYmxlZFN0YXRlYCksXG4gICAgICAgIG9wZW5DbGFzc05hbWU6ICRlbGVtZW50LmRhdGEoYCR7UExVR0lOX0tFWX1PcGVuQ2xhc3NOYW1lYCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBDb2xsYXBzZS9FeHBhbmQgdG9nZ2xlXG4gKi9cbmV4cG9ydCBjbGFzcyBDb2xsYXBzaWJsZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICR0b2dnbGUgLSBUcmlnZ2VyIGJ1dHRvblxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkdGFyZ2V0IC0gQ29udGVudCB0byBjb2xsYXBzZSAvIGV4cGFuZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBDb25maWd1cmFibGUgb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy4kY29udGV4dF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZGlzYWJsZWRCcmVha3BvaW50XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kaXNhYmxlZFN0YXRlXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5lbmFibGVkU3RhdGVdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm9wZW5DbGFzc05hbWVdXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqIDxidXR0b24gaWQ9XCIjbW9yZVwiPkNvbGxhcHNlPC9idXR0b24+XG4gICAgICogPGRpdiBpZD1cImNvbnRlbnRcIj4uLi48L2Rpdj5cbiAgICAgKlxuICAgICAqIG5ldyBDb2xsYXBzaWJsZSgkKCcjbW9yZScpLCAkKCcjY29udGVudCcpKTtcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigkdG9nZ2xlLCAkdGFyZ2V0LCB7XG4gICAgICAgIGRpc2FibGVkQnJlYWtwb2ludCxcbiAgICAgICAgZGlzYWJsZWRTdGF0ZSxcbiAgICAgICAgZW5hYmxlZFN0YXRlLFxuICAgICAgICBvcGVuQ2xhc3NOYW1lID0gJ2lzLW9wZW4nLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLiR0b2dnbGUgPSAkdG9nZ2xlO1xuICAgICAgICB0aGlzLiR0YXJnZXQgPSAkdGFyZ2V0O1xuICAgICAgICB0aGlzLnRhcmdldElkID0gJHRhcmdldC5hdHRyKCdpZCcpO1xuICAgICAgICB0aGlzLm9wZW5DbGFzc05hbWUgPSBvcGVuQ2xhc3NOYW1lO1xuICAgICAgICB0aGlzLmRpc2FibGVkU3RhdGUgPSBkaXNhYmxlZFN0YXRlO1xuICAgICAgICB0aGlzLmVuYWJsZWRTdGF0ZSA9IGVuYWJsZWRTdGF0ZTtcblxuICAgICAgICBpZiAoZGlzYWJsZWRCcmVha3BvaW50KSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QgPSBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkoZGlzYWJsZWRCcmVha3BvaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QubWF0Y2hlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF1dG8tYmluZFxuICAgICAgICB0aGlzLm9uQ2xpY2tlZCA9IHRoaXMub25DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2ggPSB0aGlzLm9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8gQXNzaWduIERPTSBhdHRyaWJ1dGVzXG4gICAgICAgIHRoaXMuJHRhcmdldC5hdHRyKCdhcmlhLWhpZGRlbicsIHRoaXMuaXNDb2xsYXBzZWQpO1xuICAgICAgICB0aGlzLiR0b2dnbGVcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWNvbnRyb2xzJywgJHRhcmdldC5hdHRyKCdpZCcpKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0aGlzLmlzT3Blbik7XG5cbiAgICAgICAgLy8gTGlzdGVuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGdldCBpc0NvbGxhcHNlZCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLiR0YXJnZXQuaGFzQ2xhc3ModGhpcy5vcGVuQ2xhc3NOYW1lKSB8fCB0aGlzLiR0YXJnZXQuaXMoJzpoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBnZXQgaXNPcGVuKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNDb2xsYXBzZWQ7XG4gICAgfVxuXG4gICAgc2V0IGRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG5cbiAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUJ5U3RhdGUodGhpcy5kaXNhYmxlZFN0YXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQnlTdGF0ZSh0aGlzLmVuYWJsZWRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgICB9XG5cbiAgICBvcGVuKHsgbm90aWZ5ID0gdHJ1ZSB9ID0ge30pIHtcbiAgICAgICAgdGhpcy4kdG9nZ2xlXG4gICAgICAgICAgICAuYWRkQ2xhc3ModGhpcy5vcGVuQ2xhc3NOYW1lKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcblxuICAgICAgICB0aGlzLiR0YXJnZXRcbiAgICAgICAgICAgIC5hZGRDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKG5vdGlmeSkge1xuICAgICAgICAgICAgdGhpcy4kdG9nZ2xlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMub3BlbiwgW3RoaXNdKTtcbiAgICAgICAgICAgIHRoaXMuJHRvZ2dsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLnRvZ2dsZSwgW3RoaXNdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlKHsgbm90aWZ5ID0gdHJ1ZSB9ID0ge30pIHtcbiAgICAgICAgdGhpcy4kdG9nZ2xlXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3ModGhpcy5vcGVuQ2xhc3NOYW1lKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy4kdGFyZ2V0XG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3ModGhpcy5vcGVuQ2xhc3NOYW1lKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKG5vdGlmeSkge1xuICAgICAgICAgICAgdGhpcy4kdG9nZ2xlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xvc2UsIFt0aGlzXSk7XG4gICAgICAgICAgICB0aGlzLiR0b2dnbGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy50b2dnbGUsIFt0aGlzXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUJ5U3RhdGUoc3RhdGUsIC4uLmFyZ3MpIHtcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlIENvbGxhcHNpYmxlU3RhdGUub3BlbjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wZW4uYXBwbHkodGhpcywgYXJncyk7XG5cbiAgICAgICAgY2FzZSBDb2xsYXBzaWJsZVN0YXRlLmNsb3NlZDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb3NlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzQ29sbGFwc2libGUoY29sbGFwc2libGVJbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gJC5jb250YWlucyh0aGlzLiR0YXJnZXQuZ2V0KDApLCBjb2xsYXBzaWJsZUluc3RhbmNlLiR0YXJnZXQuZ2V0KDApKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiR0b2dnbGUub24oQ29sbGFwc2libGVFdmVudHMuY2xpY2ssIHRoaXMub25DbGlja2VkKTtcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0ICYmIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5hZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0LmFkZExpc3RlbmVyKHRoaXMub25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiR0b2dnbGUub2ZmKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrLCB0aGlzLm9uQ2xpY2tlZCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdCAmJiB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2tlZChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoKG1lZGlhKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBtZWRpYS5tYXRjaGVzO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIGNvbnN0cnVjdGluZyBDb2xsYXBzaWJsZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3JdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuJGNvbnRleHRdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZGlzYWJsZWRCcmVha3BvaW50XVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRpc2FibGVkU3RhdGVdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZW5hYmxlZFN0YXRlXVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm9wZW5DbGFzc05hbWVdXG4gKiBAcmV0dXJuIHtBcnJheX0gYXJyYXkgb2YgQ29sbGFwc2libGUgaW5zdGFuY2VzXG4gKlxuICogQGV4YW1wbGVcbiAqIDxhIGhyZWY9XCIjY29udGVudFwiIGRhdGEtY29sbGFwc2libGU+Q29sbGFwc2U8L2E+XG4gKiA8ZGl2IGlkPVwiY29udGVudFwiPi4uLjwvZGl2PlxuICpcbiAqIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xsYXBzaWJsZUZhY3Rvcnkoc2VsZWN0b3IgPSBgW2RhdGEtJHtQTFVHSU5fS0VZfV1gLCBvdmVycmlkZU9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0ICRjb2xsYXBzaWJsZXMgPSAkKHNlbGVjdG9yLCBvdmVycmlkZU9wdGlvbnMuJGNvbnRleHQpO1xuXG4gICAgcmV0dXJuICRjb2xsYXBzaWJsZXMubWFwKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VLZXkgPSBgJHtQTFVHSU5fS0VZfUluc3RhbmNlYDtcbiAgICAgICAgY29uc3QgY2FjaGVkQ29sbGFwc2libGUgPSAkdG9nZ2xlLmRhdGEoaW5zdGFuY2VLZXkpO1xuXG4gICAgICAgIGlmIChjYWNoZWRDb2xsYXBzaWJsZSBpbnN0YW5jZW9mIENvbGxhcHNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ29sbGFwc2libGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHByZXBlbmRIYXNoKCR0b2dnbGUuZGF0YShQTFVHSU5fS0VZKSB8fFxuICAgICAgICAgICAgJHRvZ2dsZS5kYXRhKGAke1BMVUdJTl9LRVl9VGFyZ2V0YCkgfHxcbiAgICAgICAgICAgICR0b2dnbGUuYXR0cignaHJlZicpKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IF8uZXh0ZW5kKG9wdGlvbnNGcm9tRGF0YSgkdG9nZ2xlKSwgb3ZlcnJpZGVPcHRpb25zKTtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSBuZXcgQ29sbGFwc2libGUoJHRvZ2dsZSwgJCh0YXJnZXRJZCksIG9wdGlvbnMpO1xuXG4gICAgICAgICR0b2dnbGUuZGF0YShpbnN0YW5jZUtleSwgY29sbGFwc2libGUpO1xuXG4gICAgICAgIHJldHVybiBjb2xsYXBzaWJsZTtcbiAgICB9KS50b0FycmF5KCk7XG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vbW9kZWxzL2Zvcm1zJztcblxuY29uc3QgaW5wdXRUYWdOYW1lcyA9IFtcbiAgICAnaW5wdXQnLFxuICAgICdzZWxlY3QnLFxuICAgICd0ZXh0YXJlYScsXG5dO1xuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gYW4gaW5wdXQgZWxlbWVudCBvbiBpdHMgdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IGlucHV0XG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybUZpZWxkQ2xhc3NcbiAqIEByZXR1cm4ge29iamVjdH0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZnVuY3Rpb24gY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpIHtcbiAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcbiAgICBjb25zdCAkZm9ybUZpZWxkID0gJGlucHV0LnBhcmVudChgLiR7Zm9ybUZpZWxkQ2xhc3N9YCk7XG4gICAgY29uc3QgdGFnTmFtZSA9ICRpbnB1dC5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7dGFnTmFtZX1gO1xuICAgIGxldCBzcGVjaWZpY0NsYXNzTmFtZTtcblxuICAgIC8vIElucHV0IGNhbiBiZSB0ZXh0L2NoZWNrYm94L3JhZGlvIGV0Yy4uLlxuICAgIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9ICRpbnB1dC5wcm9wKCd0eXBlJyk7XG5cbiAgICAgICAgaWYgKF8uaW5jbHVkZXMoWydyYWRpbycsICdjaGVja2JveCcsICdzdWJtaXQnXSwgaW5wdXRUeXBlKSkge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1jaGVja2JveCwgLmZvcm0tZmllbGQtLXJhZGlvXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7Xy5jYW1lbENhc2UoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1pbnB1dCAuZm9ybS1maWVsZC0taW5wdXRUZXh0XG4gICAgICAgICAgICBzcGVjaWZpY0NsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0ke18uY2FwaXRhbGl6ZShpbnB1dFR5cGUpfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBjbGFzcyBtb2RpZmllclxuICAgIHJldHVybiAkZm9ybUZpZWxkXG4gICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUpXG4gICAgICAgIC5hZGRDbGFzcyhzcGVjaWZpY0NsYXNzTmFtZSk7XG59XG5cbi8qKlxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBlYWNoIGlucHV0IGVsZW1lbnQgaW4gYSBmb3JtIGJhc2VkIG9uIGl0cyB0eXBlXG4gKiBAZXhhbXBsZVxuICogLy8gQmVmb3JlXG4gKiA8Zm9ybSBpZD1cImZvcm1cIj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cbiAqICAgICA8L2Rpdj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8c2VsZWN0Pi4uLjwvc2VsZWN0PlxuICogICAgIDwvZGl2PlxuICogPC9mb3JtPlxuICpcbiAqIGNsYXNzaWZ5Rm9ybSgnI2Zvcm0nLCB7IGZvcm1GaWVsZENsYXNzOiAnZm9ybS1maWVsZCcgfSk7XG4gKlxuICogLy8gQWZ0ZXJcbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLWlucHV0IGZvcm0tZmllbGQtLWlucHV0VGV4dFwiPi4uLjwvZGl2PlxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2VsZWN0XCI+Li4uPC9kaXY+XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBmb3JtU2VsZWN0b3IgLSBzZWxlY3RvciBvciBlbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7alF1ZXJ5fSBFbGVtZW50IGl0c2VsZlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlGb3JtKGZvcm1TZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGZvcm0gPSAkKGZvcm1TZWxlY3Rvcik7XG4gICAgY29uc3QgJGlucHV0cyA9ICRmb3JtLmZpbmQoaW5wdXRUYWdOYW1lcy5qb2luKCcsICcpKTtcblxuICAgIC8vIE9idGFpbiBvcHRpb25zXG4gICAgY29uc3QgeyBmb3JtRmllbGRDbGFzcyA9ICdmb3JtLWZpZWxkJyB9ID0gb3B0aW9ucztcblxuICAgIC8vIENsYXNzaWZ5IGVhY2ggaW5wdXQgaW4gYSBmb3JtXG4gICAgJGlucHV0cy5lYWNoKChfXywgaW5wdXQpID0+IHtcbiAgICAgICAgY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICRmb3JtO1xufVxuXG4vKipcbiAqIEdldCBpZCBmcm9tIGdpdmVuIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJGZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RmllbGRJZCgkZmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gJGZpZWxkLnByb3AoJ25hbWUnKS5tYXRjaCgvKFxcWy4qXFxdKS8pO1xuXG4gICAgaWYgKGZpZWxkSWQgJiYgZmllbGRJZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkSWRbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIEluc2VydCBoaWRkZW4gZmllbGQgYWZ0ZXIgU3RhdGUvUHJvdmluY2UgZmllbGRcbiAqIEBwYXJhbSB7b2JqZWN0fSAkc3RhdGVGaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJHN0YXRlRmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gZ2V0RmllbGRJZCgkc3RhdGVGaWVsZCk7XG4gICAgY29uc3Qgc3RhdGVGaWVsZEF0dHJzID0ge1xuICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgbmFtZTogYEZvcm1GaWVsZElzVGV4dCR7ZmllbGRJZH1gLFxuICAgICAgICB2YWx1ZTogJzEnLFxuICAgIH07XG5cbiAgICAkc3RhdGVGaWVsZC5hZnRlcigkKCc8aW5wdXQgLz4nLCBzdGF0ZUZpZWxkQXR0cnMpKTtcbn1cblxuY29uc3QgVmFsaWRhdG9ycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRFbWFpbFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHZhbGlkIGVtYWlsLicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmQyU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcmVxdWlyZW1lbnRzXG4gICAgICogQHBhcmFtIGlzT3B0aW9uYWxcbiAgICAgKi9cbiAgICBzZXRQYXNzd29yZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIHBhc3N3b3JkU2VsZWN0b3IsIHBhc3N3b3JkMlNlbGVjdG9yLCByZXF1aXJlbWVudHMsIGlzT3B0aW9uYWwpID0+IHtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5hbHBoYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMubnVtZXJpYykpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubGVuZ3RoID49IHJlcXVpcmVtZW50cy5taW5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgb3B0aW9uYWwgYW5kIG5vdGhpbmcgZW50ZXJlZCwgaXQgaXMgdmFsaWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwgJiYgdmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogcmVxdWlyZW1lbnRzLmVycm9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsID09PSAkcGFzc3dvcmQudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHBhc3N3b3JkVmFsaWRhdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0ge05vZH0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdG9yc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZXJyb3JTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZmllbGRzZXRTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZm9ybVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5tYXhQcmljZVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5taW5QcmljZVNlbGVjdG9yXG4gICAgICovXG4gICAgc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBzZWxlY3RvcnMpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfSA9IHNlbGVjdG9ycztcblxuICAgICAgICB2YWxpZGF0b3IuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGZvcm06IGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIHByZXZlbnRTdWJtaXQ6IHRydWUsXG4gICAgICAgICAgICBzdWNjZXNzQ2xhc3M6ICdfJywgLy8gS0xVREdFOiBEb24ndCBhcHBseSBzdWNjZXNzIGNsYXNzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWF4LiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaW4uIHByaWNlIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ0lucHV0IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ21pbi1udW1iZXI6MCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5zZXRNZXNzYWdlT3B0aW9ucyh7XG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgcGFyZW50OiBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZXJyb3JTcGFuOiBlcnJvclNlbGVjdG9yLFxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ1N0YXRlL1Byb3ZpbmNlXFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBjbGFzc2VzIGZyb20gZGlydHkgZm9ybSBpZiBwcmV2aW91c2x5IGNoZWNrZWRcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBjbGVhblVwU3RhdGVWYWxpZGF0aW9uOiAoZmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgJGZpZWxkQ2xhc3NFbGVtZW50ID0gJCgoYFtkYXRhLXR5cGU9XCIke2ZpZWxkLmRhdGEoJ2ZpZWxkVHlwZScpfVwiXWApKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhub2QuY2xhc3NlcykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICgkZmllbGRDbGFzc0VsZW1lbnQuaGFzQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKSkge1xuICAgICAgICAgICAgICAgICRmaWVsZENsYXNzRWxlbWVudC5yZW1vdmVDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IHsgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9O1xuIiwiLypcbiAqIFJlbWVtYmVyIHRvIHVwZGF0ZSAvYXNzZXRzL3Njc3Mvc2V0dGluZ3MvZ2xvYmFsL3NjcmVlbnNpemVzL3NjcmVlbnNpemVzLnNjc3NcbiAqIGlmIHlvdSBkZWNpZGUgdG8gY2hhbmdlIGJyZWFrcG9pbnQgdmFsdWVzXG4gKi9cbmNvbnN0IGJyZWFrcG9pbnRTaXplcyA9IHtcbiAgICBsYXJnZTogMTI2MSxcbiAgICBtZWRpdW06IDgwMSxcbiAgICBzbWFsbDogNTUxLFxuICAgIHhzbWFsbDogMzIwLFxufTtcblxuLyoqXG4gKiBDcmVhdGUgTWVkaWFRdWVyeUxpc3QgdXNpbmcgYnJlYWtwb2ludCBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gYnJlYWtwb2ludE5hbWVcbiAqIEByZXR1cm4ge01lZGlhUXVlcnlMaXN0fG51bGx9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lZGlhUXVlcnlMaXN0RmFjdG9yeShicmVha3BvaW50TmFtZSkge1xuICAgIGlmICghYnJlYWtwb2ludE5hbWUgfHwgIXdpbmRvdy5tYXRjaE1lZGlhKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSBicmVha3BvaW50U2l6ZXNbYnJlYWtwb2ludE5hbWVdO1xuICAgIGNvbnN0IG1lZGlhUXVlcnkgPSBgKG1pbi13aWR0aDogJHticmVha3BvaW50fXB4KWA7XG4gICAgY29uc3QgbWVkaWFRdWVyeUxpc3QgPSB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVF1ZXJ5KTtcblxuICAgIHJldHVybiBtZWRpYVF1ZXJ5TGlzdDtcbn1cbiIsImNvbnN0IGZvcm1zID0ge1xuICAgIGVtYWlsKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlID0gL14uK0AuK1xcLi4rLztcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgYSBwYXNzd29yZCBmaWVsZFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHBhc3N3b3JkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdEVtcHR5KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogdmFsaWRhdGVzIGlmIGEgZmllbGQgaXMgZW1wdHlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKlxuICAgICAqL1xuICAgIG5vdEVtcHR5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtcztcbiJdLCJuYW1lcyI6WyIkIiwibWVkaWFRdWVyeUxpc3RGYWN0b3J5IiwiUExVR0lOX0tFWSIsIkNvbGxhcHNpYmxlRXZlbnRzIiwib3BlbiIsImNsb3NlIiwidG9nZ2xlIiwiY2xpY2siLCJDb2xsYXBzaWJsZVN0YXRlIiwiY2xvc2VkIiwicHJlcGVuZEhhc2giLCJpZCIsImluZGV4T2YiLCJvcHRpb25zRnJvbURhdGEiLCIkZWxlbWVudCIsImRpc2FibGVkQnJlYWtwb2ludCIsImRhdGEiLCJkaXNhYmxlZFN0YXRlIiwiZW5hYmxlZFN0YXRlIiwib3BlbkNsYXNzTmFtZSIsIkNvbGxhcHNpYmxlIiwiJHRvZ2dsZSIsIiR0YXJnZXQiLCJfdGVtcCIsIl9yZWYiLCJfcmVmJG9wZW5DbGFzc05hbWUiLCJ0YXJnZXRJZCIsImF0dHIiLCJkaXNhYmxlZE1lZGlhUXVlcnlMaXN0IiwiZGlzYWJsZWQiLCJtYXRjaGVzIiwib25DbGlja2VkIiwiYmluZCIsIm9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoIiwiaXNDb2xsYXBzZWQiLCJpc09wZW4iLCJiaW5kRXZlbnRzIiwiX3Byb3RvIiwicHJvdG90eXBlIiwiX3RlbXAyIiwiX3JlZjIiLCJfcmVmMiRub3RpZnkiLCJub3RpZnkiLCJhZGRDbGFzcyIsInRyaWdnZXIiLCJfdGVtcDMiLCJfcmVmMyIsIl9yZWYzJG5vdGlmeSIsInJlbW92ZUNsYXNzIiwidG9nZ2xlQnlTdGF0ZSIsInN0YXRlIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJhcHBseSIsInVuZGVmaW5lZCIsImhhc0NvbGxhcHNpYmxlIiwiY29sbGFwc2libGVJbnN0YW5jZSIsImNvbnRhaW5zIiwiZ2V0Iiwib24iLCJhZGRMaXN0ZW5lciIsInVuYmluZEV2ZW50cyIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1lZGlhIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiaGFzQ2xhc3MiLCJpcyIsIl9kaXNhYmxlZCIsInNldCIsImNvbGxhcHNpYmxlRmFjdG9yeSIsInNlbGVjdG9yIiwib3ZlcnJpZGVPcHRpb25zIiwiJGNvbGxhcHNpYmxlcyIsIiRjb250ZXh0IiwibWFwIiwiaW5kZXgiLCJlbGVtZW50IiwiaW5zdGFuY2VLZXkiLCJjYWNoZWRDb2xsYXBzaWJsZSIsIm9wdGlvbnMiLCJfZXh0ZW5kIiwiY29sbGFwc2libGUiLCJ0b0FycmF5Iiwibm9kIiwiZm9ybXMiLCJpbnB1dFRhZ05hbWVzIiwiY2xhc3NpZnlJbnB1dCIsImlucHV0IiwiZm9ybUZpZWxkQ2xhc3MiLCIkaW5wdXQiLCIkZm9ybUZpZWxkIiwicGFyZW50IiwidGFnTmFtZSIsInByb3AiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTmFtZSIsInNwZWNpZmljQ2xhc3NOYW1lIiwiaW5wdXRUeXBlIiwiX2luY2x1ZGVzIiwiX2NhbWVsQ2FzZSIsIl9jYXBpdGFsaXplIiwiY2xhc3NpZnlGb3JtIiwiZm9ybVNlbGVjdG9yIiwiJGZvcm0iLCIkaW5wdXRzIiwiZmluZCIsImpvaW4iLCJfb3B0aW9ucyIsIl9vcHRpb25zJGZvcm1GaWVsZENsYSIsImVhY2giLCJfXyIsImdldEZpZWxkSWQiLCIkZmllbGQiLCJmaWVsZElkIiwibWF0Y2giLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwiJHN0YXRlRmllbGQiLCJzdGF0ZUZpZWxkQXR0cnMiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYWZ0ZXIiLCJWYWxpZGF0b3JzIiwic2V0RW1haWxWYWxpZGF0aW9uIiwidmFsaWRhdG9yIiwiZmllbGQiLCJhZGQiLCJ2YWxpZGF0ZSIsImNiIiwidmFsIiwicmVzdWx0IiwiZW1haWwiLCJlcnJvck1lc3NhZ2UiLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJwYXNzd29yZFNlbGVjdG9yIiwicGFzc3dvcmQyU2VsZWN0b3IiLCJyZXF1aXJlbWVudHMiLCJpc09wdGlvbmFsIiwiJHBhc3N3b3JkIiwicGFzc3dvcmRWYWxpZGF0aW9ucyIsIlJlZ0V4cCIsImFscGhhIiwibnVtZXJpYyIsIm1pbmxlbmd0aCIsImVycm9yIiwic2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsImNvbmZpZ3VyZSIsImZvcm0iLCJwcmV2ZW50U3VibWl0Iiwic3VjY2Vzc0NsYXNzIiwic2V0TWVzc2FnZU9wdGlvbnMiLCJlcnJvclNwYW4iLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsIiRmaWVsZENsYXNzRWxlbWVudCIsIk9iamVjdCIsImtleXMiLCJjbGFzc2VzIiwiZm9yRWFjaCIsImJyZWFrcG9pbnRTaXplcyIsImxhcmdlIiwibWVkaXVtIiwic21hbGwiLCJ4c21hbGwiLCJicmVha3BvaW50TmFtZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJicmVha3BvaW50IiwibWVkaWFRdWVyeSIsIm1lZGlhUXVlcnlMaXN0IiwicmUiLCJ0ZXN0IiwicGFzc3dvcmQiLCJub3RFbXB0eSJdLCJzb3VyY2VSb290IjoiIn0=