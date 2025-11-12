"use strict";
(self["webpackChunksecond_skin_audio"] = self["webpackChunksecond_skin_audio"] || []).push([["assets_js_theme_common_nod_js-assets_js_theme_global_foundation_js-assets_js_theme_global_mod-495f42"],{

/***/ "./assets/js/theme/common/nod-functions/min-max-validate.js":
/*!******************************************************************!*\
  !*** ./assets/js/theme/common/nod-functions/min-max-validate.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNaN */ "./node_modules/lodash/isNaN.js");
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


function minMaxValidate(minInputSelector, maxInputSelector) {
  function validate(cb) {
    var minValue = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()(minInputSelector).val());
    var maxValue = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()(maxInputSelector).val());
    if (maxValue > minValue || lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default()(maxValue) || lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default()(minValue)) {
      return cb(true);
    }
    return cb(false);
  }
  return validate;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (minMaxValidate);

/***/ }),

/***/ "./assets/js/theme/common/nod.js":
/*!***************************************!*\
  !*** ./assets/js/theme/common/nod.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nod_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nod-validate */ "./node_modules/nod-validate/nod.js");
/* harmony import */ var nod_validate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nod_validate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nod_functions_min_max_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nod-functions/min-max-validate */ "./assets/js/theme/common/nod-functions/min-max-validate.js");



// Hook our SCSS framework form field status classes into the nod validation system before use
(nod_validate__WEBPACK_IMPORTED_MODULE_0___default().classes).errorClass = 'form-field--error';
(nod_validate__WEBPACK_IMPORTED_MODULE_0___default().classes).successClass = 'form-field--success';
(nod_validate__WEBPACK_IMPORTED_MODULE_0___default().classes).errorMessageClass = 'form-inlineMessage';

// Register validate functions
(nod_validate__WEBPACK_IMPORTED_MODULE_0___default().checkFunctions)['min-max'] = _nod_functions_min_max_validate__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((nod_validate__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./assets/js/theme/global/foundation.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/global/foundation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.dropdown */ "./node_modules/foundation-sites/js/foundation/foundation.dropdown.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.tab */ "./node_modules/foundation-sites/js/foundation/foundation.tab.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _reveal_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reveal-close */ "./assets/js/theme/global/reveal-close.js");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($element) {
  $element.foundation({
    dropdown: {
      // specify the class used for active dropdowns
      active_class: 'is-open'
    },
    reveal: {
      bg_class: 'modal-background',
      dismiss_modal_class: 'modal-close',
      close_on_background_click: true
    },
    tab: {
      active_class: 'is-active'
    }
  });
  (0,_modal__WEBPACK_IMPORTED_MODULE_4__["default"])('[data-reveal]', {
    $context: $element
  });
  (0,_reveal_close__WEBPACK_IMPORTED_MODULE_5__["default"])('[data-reveal-close]', {
    $context: $element
  });
}

/***/ }),

/***/ "./assets/js/theme/global/modal.js":
/*!*****************************************!*\
  !*** ./assets/js/theme/global/modal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal),
/* harmony export */   ModalEvents: () => (/* binding */ ModalEvents),
/* harmony export */   "default": () => (/* binding */ modalFactory),
/* harmony export */   defaultModal: () => (/* binding */ defaultModal)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./assets/js/theme/global/foundation.js");
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var bodyActiveClass = 'has-activeModal';
var loadingOverlayClass = 'loadingOverlay';
var modalBodyClass = 'modal-body';
var modalContentClass = 'modal-content';
var SizeClasses = {
  small: 'modal--small',
  large: 'modal--large',
  normal: ''
};
var ModalEvents = {
  close: 'close.fndtn.reveal',
  closed: 'closed.fndtn.reveal',
  open: 'open.fndtn.reveal',
  opened: 'opened.fndtn.reveal'
};
function getSizeFromModal($modal) {
  if ($modal.hasClass(SizeClasses.small)) {
    return 'small';
  }
  if ($modal.hasClass(SizeClasses.large)) {
    return 'large';
  }
  return 'normal';
}
function getViewportHeight(multipler) {
  if (multipler === void 0) {
    multipler = 1;
  }
  var viewportHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();
  return viewportHeight * multipler;
}
function wrapModalBody(content) {
  var $modalBody = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>');
  $modalBody.addClass(modalBodyClass).html(content);
  return $modalBody;
}
function restrainContentHeight($content) {
  var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()("." + modalBodyClass, $content);
  var bodyHeight = $body.outerHeight();
  var contentHeight = $content.outerHeight();
  var viewportHeight = getViewportHeight(0.9);
  var maxHeight = viewportHeight - (contentHeight - bodyHeight);
  $body.css('max-height', maxHeight);
}
function createModalContent($modal) {
  var $content = jquery__WEBPACK_IMPORTED_MODULE_0___default()("." + modalContentClass, $modal);
  if ($content.length === 0) {
    var existingContent = $modal.children();
    $content = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass(modalContentClass).append(existingContent).appendTo($modal);
  }
  return $content;
}
function createLoadingOverlay($modal) {
  var $loadingOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()("." + loadingOverlayClass, $modal);
  if ($loadingOverlay.length === 0) {
    $loadingOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass(loadingOverlayClass).appendTo($modal);
  }
  return $loadingOverlay;
}

/**
 * Require foundation.reveal
 * Decorate foundation.reveal with additional methods
 * @param {jQuery} $modal
 * @param {Object} [options]
 * @param {string} [options.size]
 */
var Modal = /*#__PURE__*/function () {
  function Modal($modal, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? null : _ref$size;
    this.$modal = $modal;
    this.$content = createModalContent(this.$modal);
    this.$overlay = createLoadingOverlay(this.$modal);
    this.defaultSize = size || getSizeFromModal($modal);
    this.size = this.defaultSize;
    this.pending = false;
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalOpened = this.onModalOpened.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalClosed = this.onModalClosed.bind(this);
    this.bindEvents();

    /* STRF-2471 - Multiple Wish Lists - prevents double-firing
     * of foundation.dropdown click.fndtn.dropdown event */
    this.$modal.on('click', '.dropdown-menu-button', function (e) {
      e.stopPropagation();
    });
  }
  var _proto = Modal.prototype;
  _proto.bindEvents = function bindEvents() {
    this.$modal.on(ModalEvents.close, this.onModalClose);
    this.$modal.on(ModalEvents.closed, this.onModalClosed);
    this.$modal.on(ModalEvents.open, this.onModalOpen);
    this.$modal.on(ModalEvents.opened, this.onModalOpened);
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$modal.off(ModalEvents.close, this.onModalClose);
    this.$modal.off(ModalEvents.closed, this.onModalClosed);
    this.$modal.off(ModalEvents.open, this.onModalOpen);
    this.$modal.off(ModalEvents.opened, this.onModalOpened);
  };
  _proto.open = function open(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      size = _ref2.size,
      _ref2$pending = _ref2.pending,
      pending = _ref2$pending === void 0 ? true : _ref2$pending,
      _ref2$clearContent = _ref2.clearContent,
      clearContent = _ref2$clearContent === void 0 ? true : _ref2$clearContent,
      addClass = _ref2.addClass;
    this.pending = pending;
    if (size) {
      this.size = size;
    }
    if (clearContent) {
      this.clearContent();
    }
    if (addClass) {
      this.$modal.addClass(addClass);
    }
    this.$modal.foundation('reveal', 'open');
  };
  _proto.close = function close() {
    this.$modal.foundation('reveal', 'close');
  };
  _proto.updateContent = function updateContent(content, _temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      _ref3$wrap = _ref3.wrap,
      wrap = _ref3$wrap === void 0 ? false : _ref3$wrap;
    var $content = jquery__WEBPACK_IMPORTED_MODULE_0___default()(content);
    if (wrap) {
      $content = wrapModalBody(content);
    }
    this.pending = false;
    this.$content.html($content);
    restrainContentHeight(this.$content);
    (0,_foundation__WEBPACK_IMPORTED_MODULE_1__["default"])(this.$content);
  };
  _proto.clearContent = function clearContent() {
    this.$content.html('');
  };
  _proto.onModalClose = function onModalClose() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass(bodyActiveClass);
  };
  _proto.onModalClosed = function onModalClosed() {
    this.size = this.defaultSize;
  };
  _proto.onModalOpen = function onModalOpen() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass(bodyActiveClass);
  };
  _proto.onModalOpened = function onModalOpened() {
    restrainContentHeight(this.$content);
  };
  return _createClass(Modal, [{
    key: "pending",
    get: function get() {
      return this._pending;
    },
    set: function set(pending) {
      this._pending = pending;
      if (pending) {
        this.$overlay.show();
      } else {
        this.$overlay.hide();
      }
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(size) {
      this._size = size;
      this.$modal.removeClass(SizeClasses.small).removeClass(SizeClasses.large).addClass(SizeClasses[size] || '');
    }
  }]);
}();

/**
 * Return an array of modals
 * @param {string} selector
 * @param {Object} [options]
 * @param {string} [options.size]
 * @returns {array}
 */
function modalFactory(selector, options) {
  if (selector === void 0) {
    selector = '[data-reveal]';
  }
  if (options === void 0) {
    options = {};
  }
  var $modals = jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector, options.$context);
  return $modals.map(function (index, element) {
    var $modal = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var instanceKey = 'modalInstance';
    var cachedModal = $modal.data(instanceKey);
    if (cachedModal instanceof Modal) {
      return cachedModal;
    }
    var modal = new Modal($modal, options);
    $modal.data(instanceKey, modal);
    return modal;
  }).toArray();
}

/*
 * Return the default page modal
 */
function defaultModal() {
  var modal = modalFactory('#modal')[0];
  return modal;
}

/***/ }),

/***/ "./assets/js/theme/global/reveal-close.js":
/*!************************************************!*\
  !*** ./assets/js/theme/global/reveal-close.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ revealCloseFactory)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var revealCloseAttr = 'revealClose';
var revealCloseSelector = "[data-" + revealCloseAttr + "]";
var revealSelector = '[data-reveal]';
var RevealClose = /*#__PURE__*/function () {
  function RevealClose($button) {
    this.$button = $button;
    this.modalId = $button.data(revealCloseAttr);
    this.onClick = this.onClick.bind(this);
    this.bindEvents();
  }
  var _proto = RevealClose.prototype;
  _proto.bindEvents = function bindEvents() {
    this.$button.on('click', this.onClick);
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$button.off('click', this.onClick);
  };
  _proto.onClick = function onClick(event) {
    var modal = this.modal;
    if (modal) {
      event.preventDefault();
      modal.close();
    }
  };
  return _createClass(RevealClose, [{
    key: "modal",
    get: function get() {
      var $modal;
      if (this.modalId) {
        $modal = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#" + this.modalId);
      } else {
        $modal = this.$button.parents(revealSelector).eq(0);
      }
      return $modal.data('modalInstance');
    }
  }]);
}();
/*
 * Extend foundation.reveal with the ability to close a modal by clicking on any of its child element
 * with data-reveal-close attribute.
 *
 * @example
 *
 * <div data-reveal id="helloModal">
 *   <button data-reveal-close>Continue</button>
 * </div>
 *
 * <div data-reveal id="helloModal"></div>
 * <button data-reveal-close="helloModal">Continue</button>
 */
function revealCloseFactory(selector, options) {
  if (selector === void 0) {
    selector = revealCloseSelector;
  }
  if (options === void 0) {
    options = {};
  }
  var $buttons = jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector, options.$context);
  return $buttons.map(function (index, element) {
    var $button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var instanceKey = revealCloseAttr + "Instance";
    var cachedButton = $button.data(instanceKey);
    if (cachedButton instanceof RevealClose) {
      return cachedButton;
    }
    var button = new RevealClose($button);
    $button.data(instanceKey, button);
    return button;
  }).toArray();
}

/***/ }),

/***/ "./assets/js/theme/page-manager.js":
/*!*****************************************!*\
  !*** ./assets/js/theme/page-manager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageManager)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var PageManager = /*#__PURE__*/function () {
  function PageManager(context) {
    this.context = context;
  }
  var _proto = PageManager.prototype;
  _proto.type = function type() {
    return this.constructor.name;
  };
  _proto.onReady = function onReady() {};
  PageManager.load = function load(context) {
    var page = new this(context);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
      page.onReady.bind(page)();
    });

    // This manipulates the badge counter on the cart.
    var cartBadge = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navUser-action--badge');
    var badgeCount = Number(cartBadge.data('badge-cart-quantity'));
    if (cartBadge && badgeCount >= 10) {
      cartBadge.data('badge-cart-quantity', '9+').trigger('');
      cartBadge.html('9+');
    }
  };
  return PageManager;
}();


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb21tb25fbm9kX2pzLWFzc2V0c19qc190aGVtZV9nbG9iYWxfZm91bmRhdGlvbl9qcy1hc3NldHNfanNfdGhlbWVfZ2xvYmFsX21vZC00OTVmNDIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VCO0FBRXZCLFNBQVNDLGNBQWNBLENBQUNDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRTtFQUN4RCxTQUFTQyxRQUFRQSxDQUFDQyxFQUFFLEVBQUU7SUFDbEIsSUFBTUMsUUFBUSxHQUFHQyxVQUFVLENBQUNQLDZDQUFDLENBQUNFLGdCQUFnQixDQUFDLENBQUNNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEQsSUFBTUMsUUFBUSxHQUFHRixVQUFVLENBQUNQLDZDQUFDLENBQUNHLGdCQUFnQixDQUFDLENBQUNLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFdEQsSUFBSUMsUUFBUSxHQUFHSCxRQUFRLElBQUlJLG1EQUFBLENBQVFELFFBQVEsQ0FBQyxJQUFJQyxtREFBQSxDQUFRSixRQUFRLENBQUMsRUFBRTtNQUMvRCxPQUFPRCxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ25CO0lBRUEsT0FBT0EsRUFBRSxDQUFDLEtBQUssQ0FBQztFQUNwQjtFQUVBLE9BQU9ELFFBQVE7QUFDbkI7QUFFQSxpRUFBZUgsY0FBYyxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCRTtBQUMrQjs7QUFFOUQ7QUFDQVUsNkRBQVcsQ0FBQ0UsVUFBVSxHQUFHLG1CQUFtQjtBQUM1Q0YsNkRBQVcsQ0FBQ0csWUFBWSxHQUFHLHFCQUFxQjtBQUNoREgsNkRBQVcsQ0FBQ0ksaUJBQWlCLEdBQUcsb0JBQW9COztBQUVwRDtBQUNBSixvRUFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBR1YsdUVBQWM7QUFFOUMsaUVBQWVVLHFEQUFHLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hpQztBQUNTO0FBQ0Y7QUFDSDtBQUNwQjtB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QyxDQUFDO0lBRWhFLElBQUk0QixTQUFTLElBQUlDLFVBQVUsSUFBSSxFQUFFLEVBQUU7TUFDL0JELFNBQVMsQ0FBQzVCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQytCLE9BQU8sQ0FBQyxFQUFFLENBQUM7TUFDdkRILFNBQVMsQ0FBQzdGLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDeEI7RUFDSixDQUFDO0VBQUEsT0FBQW1GLFdBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlY29uZC1za2luLWF1ZGlvLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9ub2QtZnVuY3Rpb25zL21pbi1tYXgtdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vc2Vjb25kLXNraW4tYXVkaW8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL25vZC5qcyIsIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vc2Vjb25kLXNraW4tYXVkaW8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL3JldmVhbC1jbG9zZS5qcyIsIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS9wYWdlLW1hbmFnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmZ1bmN0aW9uIG1pbk1heFZhbGlkYXRlKG1pbklucHV0U2VsZWN0b3IsIG1heElucHV0U2VsZWN0b3IpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShjYikge1xuICAgICAgICBjb25zdCBtaW5WYWx1ZSA9IHBhcnNlRmxvYXQoJChtaW5JbnB1dFNlbGVjdG9yKS52YWwoKSk7XG4gICAgICAgIGNvbnN0IG1heFZhbHVlID0gcGFyc2VGbG9hdCgkKG1heElucHV0U2VsZWN0b3IpLnZhbCgpKTtcblxuICAgICAgICBpZiAobWF4VmFsdWUgPiBtaW5WYWx1ZSB8fCBfLmlzTmFOKG1heFZhbHVlKSB8fCBfLmlzTmFOKG1pblZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNiKGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1pbk1heFZhbGlkYXRlO1xuIiwiaW1wb3J0IG5vZCBmcm9tICdub2QtdmFsaWRhdGUnO1xuaW1wb3J0IG1pbk1heFZhbGlkYXRlIGZyb20gJy4vbm9kLWZ1bmN0aW9ucy9taW4tbWF4LXZhbGlkYXRlJztcblxuLy8gSG9vayBvdXIgU0NTUyBmcmFtZXdvcmsgZm9ybSBmaWVsZCBzdGF0dXMgY2xhc3NlcyBpbnRvIHRoZSBub2QgdmFsaWRhdGlvbiBzeXN0ZW0gYmVmb3JlIHVzZVxubm9kLmNsYXNzZXMuZXJyb3JDbGFzcyA9ICdmb3JtLWZpZWxkLS1lcnJvcic7XG5ub2QuY2xhc3Nlcy5zdWNjZXNzQ2xhc3MgPSAnZm9ybS1maWVsZC0tc3VjY2Vzcyc7XG5ub2QuY2xhc3Nlcy5lcnJvck1lc3NhZ2VDbGFzcyA9ICdmb3JtLWlubGluZU1lc3NhZ2UnO1xuXG4vLyBSZWdpc3RlciB2YWxpZGF0ZSBmdW5jdGlvbnNcbm5vZC5jaGVja0Z1bmN0aW9uc1snbWluLW1heCddID0gbWluTWF4VmFsaWRhdGU7XG5cbmV4cG9ydCBkZWZhdWx0IG5vZDtcbiIsImltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5kcm9wZG93bic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnRhYic7XG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHJldmVhbENsb3NlRmFjdG9yeSBmcm9tICcuL3JldmVhbC1jbG9zZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgkZWxlbWVudCkge1xuICAgICRlbGVtZW50LmZvdW5kYXRpb24oe1xuICAgICAgICBkcm9wZG93bjoge1xuICAgICAgICAgICAgLy8gc3BlY2lmeSB0aGUgY2xhc3MgdXNlZCBmb3IgYWN0aXZlIGRyb3Bkb3duc1xuICAgICAgICAgICAgYWN0aXZlX2NsYXNzOiAnaXMtb3BlbicsXG4gICAgICAgIH0sXG4gICAgICAgIHJldmVhbDoge1xuICAgICAgICAgICAgYmdfY2xhc3M6ICdtb2RhbC1iYWNrZ3JvdW5kJyxcbiAgICAgICAgICAgIGRpc21pc3NfbW9kYWxfY2xhc3M6ICdtb2RhbC1jbG9zZScsXG4gICAgICAgICAgICBjbG9zZV9vbl9iYWNrZ3JvdW5kX2NsaWNrOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB0YWI6IHtcbiAgICAgICAgICAgIGFjdGl2ZV9jbGFzczogJ2lzLWFjdGl2ZScsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBtb2RhbEZhY3RvcnkoJ1tkYXRhLXJldmVhbF0nLCB7ICRjb250ZXh0OiAkZWxlbWVudCB9KTtcbiAgICByZXZlYWxDbG9zZUZhY3RvcnkoJ1tkYXRhLXJldmVhbC1jbG9zZV0nLCB7ICRjb250ZXh0OiAkZWxlbWVudCB9KTtcbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgZm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG5jb25zdCBib2R5QWN0aXZlQ2xhc3MgPSAnaGFzLWFjdGl2ZU1vZGFsJztcbmNvbnN0IGxvYWRpbmdPdmVybGF5Q2xhc3MgPSAnbG9hZGluZ092ZXJsYXknO1xuY29uc3QgbW9kYWxCb2R5Q2xhc3MgPSAnbW9kYWwtYm9keSc7XG5jb25zdCBtb2RhbENvbnRlbnRDbGFzcyA9ICdtb2RhbC1jb250ZW50JztcblxuY29uc3QgU2l6ZUNsYXNzZXMgPSB7XG4gICAgc21hbGw6ICdtb2RhbC0tc21hbGwnLFxuICAgIGxhcmdlOiAnbW9kYWwtLWxhcmdlJyxcbiAgICBub3JtYWw6ICcnLFxufTtcblxuZXhwb3J0IGNvbnN0IE1vZGFsRXZlbnRzID0ge1xuICAgIGNsb3NlOiAnY2xvc2UuZm5kdG4ucmV2ZWFsJyxcbiAgICBjbG9zZWQ6ICdjbG9zZWQuZm5kdG4ucmV2ZWFsJyxcbiAgICBvcGVuOiAnb3Blbi5mbmR0bi5yZXZlYWwnLFxuICAgIG9wZW5lZDogJ29wZW5lZC5mbmR0bi5yZXZlYWwnLFxufTtcblxuZnVuY3Rpb24gZ2V0U2l6ZUZyb21Nb2RhbCgkbW9kYWwpIHtcbiAgICBpZiAoJG1vZGFsLmhhc0NsYXNzKFNpemVDbGFzc2VzLnNtYWxsKSkge1xuICAgICAgICByZXR1cm4gJ3NtYWxsJztcbiAgICB9XG5cbiAgICBpZiAoJG1vZGFsLmhhc0NsYXNzKFNpemVDbGFzc2VzLmxhcmdlKSkge1xuICAgICAgICByZXR1cm4gJ2xhcmdlJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ25vcm1hbCc7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0SGVpZ2h0KG11bHRpcGxlciA9IDEpIHtcbiAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcblxuICAgIHJldHVybiB2aWV3cG9ydEhlaWdodCAqIG11bHRpcGxlcjtcbn1cblxuZnVuY3Rpb24gd3JhcE1vZGFsQm9keShjb250ZW50KSB7XG4gICAgY29uc3QgJG1vZGFsQm9keSA9ICQoJzxkaXY+Jyk7XG5cbiAgICAkbW9kYWxCb2R5XG4gICAgICAgIC5hZGRDbGFzcyhtb2RhbEJvZHlDbGFzcylcbiAgICAgICAgLmh0bWwoY29udGVudCk7XG5cbiAgICByZXR1cm4gJG1vZGFsQm9keTtcbn1cblxuZnVuY3Rpb24gcmVzdHJhaW5Db250ZW50SGVpZ2h0KCRjb250ZW50KSB7XG4gICAgY29uc3QgJGJvZHkgPSAkKGAuJHttb2RhbEJvZHlDbGFzc31gLCAkY29udGVudCk7XG4gICAgY29uc3QgYm9keUhlaWdodCA9ICRib2R5Lm91dGVySGVpZ2h0KCk7XG4gICAgY29uc3QgY29udGVudEhlaWdodCA9ICRjb250ZW50Lm91dGVySGVpZ2h0KCk7XG4gICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSBnZXRWaWV3cG9ydEhlaWdodCgwLjkpO1xuICAgIGNvbnN0IG1heEhlaWdodCA9IHZpZXdwb3J0SGVpZ2h0IC0gKGNvbnRlbnRIZWlnaHQgLSBib2R5SGVpZ2h0KTtcblxuICAgICRib2R5LmNzcygnbWF4LWhlaWdodCcsIG1heEhlaWdodCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsQ29udGVudCgkbW9kYWwpIHtcbiAgICBsZXQgJGNvbnRlbnQgPSAkKGAuJHttb2RhbENvbnRlbnRDbGFzc31gLCAkbW9kYWwpO1xuXG4gICAgaWYgKCRjb250ZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBleGlzdGluZ0NvbnRlbnQgPSAkbW9kYWwuY2hpbGRyZW4oKTtcblxuICAgICAgICAkY29udGVudCA9ICQoJzxkaXY+JylcbiAgICAgICAgICAgIC5hZGRDbGFzcyhtb2RhbENvbnRlbnRDbGFzcylcbiAgICAgICAgICAgIC5hcHBlbmQoZXhpc3RpbmdDb250ZW50KVxuICAgICAgICAgICAgLmFwcGVuZFRvKCRtb2RhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRjb250ZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2FkaW5nT3ZlcmxheSgkbW9kYWwpIHtcbiAgICBsZXQgJGxvYWRpbmdPdmVybGF5ID0gJChgLiR7bG9hZGluZ092ZXJsYXlDbGFzc31gLCAkbW9kYWwpO1xuXG4gICAgaWYgKCRsb2FkaW5nT3ZlcmxheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJGxvYWRpbmdPdmVybGF5ID0gJCgnPGRpdj4nKVxuICAgICAgICAgICAgLmFkZENsYXNzKGxvYWRpbmdPdmVybGF5Q2xhc3MpXG4gICAgICAgICAgICAuYXBwZW5kVG8oJG1vZGFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJGxvYWRpbmdPdmVybGF5O1xufVxuXG4vKipcbiAqIFJlcXVpcmUgZm91bmRhdGlvbi5yZXZlYWxcbiAqIERlY29yYXRlIGZvdW5kYXRpb24ucmV2ZWFsIHdpdGggYWRkaXRpb25hbCBtZXRob2RzXG4gKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuc2l6ZV1cbiAqL1xuZXhwb3J0IGNsYXNzIE1vZGFsIHtcbiAgICBjb25zdHJ1Y3RvcigkbW9kYWwsIHtcbiAgICAgICAgc2l6ZSA9IG51bGwsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuJG1vZGFsID0gJG1vZGFsO1xuICAgICAgICB0aGlzLiRjb250ZW50ID0gY3JlYXRlTW9kYWxDb250ZW50KHRoaXMuJG1vZGFsKTtcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9IGNyZWF0ZUxvYWRpbmdPdmVybGF5KHRoaXMuJG1vZGFsKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0U2l6ZSA9IHNpemUgfHwgZ2V0U2l6ZUZyb21Nb2RhbCgkbW9kYWwpO1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmRlZmF1bHRTaXplO1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm9uTW9kYWxPcGVuID0gdGhpcy5vbk1vZGFsT3Blbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW9kYWxPcGVuZWQgPSB0aGlzLm9uTW9kYWxPcGVuZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbk1vZGFsQ2xvc2UgPSB0aGlzLm9uTW9kYWxDbG9zZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW9kYWxDbG9zZWQgPSB0aGlzLm9uTW9kYWxDbG9zZWQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcblxuICAgICAgICAvKiBTVFJGLTI0NzEgLSBNdWx0aXBsZSBXaXNoIExpc3RzIC0gcHJldmVudHMgZG91YmxlLWZpcmluZ1xuICAgICAgICAgKiBvZiBmb3VuZGF0aW9uLmRyb3Bkb3duIGNsaWNrLmZuZHRuLmRyb3Bkb3duIGV2ZW50ICovXG4gICAgICAgIHRoaXMuJG1vZGFsLm9uKCdjbGljaycsICcuZHJvcGRvd24tbWVudS1idXR0b24nLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBwZW5kaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGVuZGluZztcbiAgICB9XG5cbiAgICBzZXQgcGVuZGluZyhwZW5kaW5nKSB7XG4gICAgICAgIHRoaXMuX3BlbmRpbmcgPSBwZW5kaW5nO1xuXG4gICAgICAgIGlmIChwZW5kaW5nKSB7XG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgIH1cblxuICAgIHNldCBzaXplKHNpemUpIHtcbiAgICAgICAgdGhpcy5fc2l6ZSA9IHNpemU7XG5cbiAgICAgICAgdGhpcy4kbW9kYWxcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhTaXplQ2xhc3Nlcy5zbWFsbClcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhTaXplQ2xhc3Nlcy5sYXJnZSlcbiAgICAgICAgICAgIC5hZGRDbGFzcyhTaXplQ2xhc3Nlc1tzaXplXSB8fCAnJyk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kbW9kYWwub24oTW9kYWxFdmVudHMuY2xvc2UsIHRoaXMub25Nb2RhbENsb3NlKTtcbiAgICAgICAgdGhpcy4kbW9kYWwub24oTW9kYWxFdmVudHMuY2xvc2VkLCB0aGlzLm9uTW9kYWxDbG9zZWQpO1xuICAgICAgICB0aGlzLiRtb2RhbC5vbihNb2RhbEV2ZW50cy5vcGVuLCB0aGlzLm9uTW9kYWxPcGVuKTtcbiAgICAgICAgdGhpcy4kbW9kYWwub24oTW9kYWxFdmVudHMub3BlbmVkLCB0aGlzLm9uTW9kYWxPcGVuZWQpO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kbW9kYWwub2ZmKE1vZGFsRXZlbnRzLmNsb3NlLCB0aGlzLm9uTW9kYWxDbG9zZSk7XG4gICAgICAgIHRoaXMuJG1vZGFsLm9mZihNb2RhbEV2ZW50cy5jbG9zZWQsIHRoaXMub25Nb2RhbENsb3NlZCk7XG4gICAgICAgIHRoaXMuJG1vZGFsLm9mZihNb2RhbEV2ZW50cy5vcGVuLCB0aGlzLm9uTW9kYWxPcGVuKTtcbiAgICAgICAgdGhpcy4kbW9kYWwub2ZmKE1vZGFsRXZlbnRzLm9wZW5lZCwgdGhpcy5vbk1vZGFsT3BlbmVkKTtcbiAgICB9XG5cbiAgICBvcGVuKHtcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgcGVuZGluZyA9IHRydWUsXG4gICAgICAgIGNsZWFyQ29udGVudCA9IHRydWUsXG4gICAgICAgIGFkZENsYXNzLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBwZW5kaW5nO1xuXG4gICAgICAgIGlmIChzaXplKSB7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsZWFyQ29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhckNvbnRlbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhZGRDbGFzcykge1xuICAgICAgICAgICAgdGhpcy4kbW9kYWwuYWRkQ2xhc3MoYWRkQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kbW9kYWwuZm91bmRhdGlvbigncmV2ZWFsJywgJ29wZW4nKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy4kbW9kYWwuZm91bmRhdGlvbigncmV2ZWFsJywgJ2Nsb3NlJyk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ29udGVudChjb250ZW50LCB7IHdyYXAgPSBmYWxzZSB9ID0ge30pIHtcbiAgICAgICAgbGV0ICRjb250ZW50ID0gJChjb250ZW50KTtcblxuICAgICAgICBpZiAod3JhcCkge1xuICAgICAgICAgICAgJGNvbnRlbnQgPSB3cmFwTW9kYWxCb2R5KGNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJGNvbnRlbnQuaHRtbCgkY29udGVudCk7XG5cbiAgICAgICAgcmVzdHJhaW5Db250ZW50SGVpZ2h0KHRoaXMuJGNvbnRlbnQpO1xuICAgICAgICBmb3VuZGF0aW9uKHRoaXMuJGNvbnRlbnQpO1xuICAgIH1cblxuICAgIGNsZWFyQ29udGVudCgpIHtcbiAgICAgICAgdGhpcy4kY29udGVudC5odG1sKCcnKTtcbiAgICB9XG5cbiAgICBvbk1vZGFsQ2xvc2UoKSB7XG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhib2R5QWN0aXZlQ2xhc3MpO1xuICAgIH1cblxuICAgIG9uTW9kYWxDbG9zZWQoKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGVmYXVsdFNpemU7XG4gICAgfVxuXG4gICAgb25Nb2RhbE9wZW4oKSB7XG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhib2R5QWN0aXZlQ2xhc3MpO1xuICAgIH1cblxuICAgIG9uTW9kYWxPcGVuZWQoKSB7XG4gICAgICAgIHJlc3RyYWluQ29udGVudEhlaWdodCh0aGlzLiRjb250ZW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IG9mIG1vZGFsc1xuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuc2l6ZV1cbiAqIEByZXR1cm5zIHthcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWxGYWN0b3J5KHNlbGVjdG9yID0gJ1tkYXRhLXJldmVhbF0nLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCAkbW9kYWxzID0gJChzZWxlY3Rvciwgb3B0aW9ucy4kY29udGV4dCk7XG5cbiAgICByZXR1cm4gJG1vZGFscy5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICRtb2RhbCA9ICQoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlS2V5ID0gJ21vZGFsSW5zdGFuY2UnO1xuICAgICAgICBjb25zdCBjYWNoZWRNb2RhbCA9ICRtb2RhbC5kYXRhKGluc3RhbmNlS2V5KTtcblxuICAgICAgICBpZiAoY2FjaGVkTW9kYWwgaW5zdGFuY2VvZiBNb2RhbCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZE1vZGFsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoJG1vZGFsLCBvcHRpb25zKTtcblxuICAgICAgICAkbW9kYWwuZGF0YShpbnN0YW5jZUtleSwgbW9kYWwpO1xuXG4gICAgICAgIHJldHVybiBtb2RhbDtcbiAgICB9KS50b0FycmF5KCk7XG59XG5cbi8qXG4gKiBSZXR1cm4gdGhlIGRlZmF1bHQgcGFnZSBtb2RhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXTtcblxuICAgIHJldHVybiBtb2RhbDtcbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IHJldmVhbENsb3NlQXR0ciA9ICdyZXZlYWxDbG9zZSc7XG5jb25zdCByZXZlYWxDbG9zZVNlbGVjdG9yID0gYFtkYXRhLSR7cmV2ZWFsQ2xvc2VBdHRyfV1gO1xuY29uc3QgcmV2ZWFsU2VsZWN0b3IgPSAnW2RhdGEtcmV2ZWFsXSc7XG5cbmNsYXNzIFJldmVhbENsb3NlIHtcbiAgICBjb25zdHJ1Y3RvcigkYnV0dG9uKSB7XG4gICAgICAgIHRoaXMuJGJ1dHRvbiA9ICRidXR0b247XG4gICAgICAgIHRoaXMubW9kYWxJZCA9ICRidXR0b24uZGF0YShyZXZlYWxDbG9zZUF0dHIpO1xuXG4gICAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGdldCBtb2RhbCgpIHtcbiAgICAgICAgbGV0ICRtb2RhbDtcblxuICAgICAgICBpZiAodGhpcy5tb2RhbElkKSB7XG4gICAgICAgICAgICAkbW9kYWwgPSAkKGAjJHt0aGlzLm1vZGFsSWR9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbW9kYWwgPSB0aGlzLiRidXR0b24ucGFyZW50cyhyZXZlYWxTZWxlY3RvcikuZXEoMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJG1vZGFsLmRhdGEoJ21vZGFsSW5zdGFuY2UnKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRidXR0b24ub24oJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJGJ1dHRvbi5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHsgbW9kYWwgfSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKlxuICogRXh0ZW5kIGZvdW5kYXRpb24ucmV2ZWFsIHdpdGggdGhlIGFiaWxpdHkgdG8gY2xvc2UgYSBtb2RhbCBieSBjbGlja2luZyBvbiBhbnkgb2YgaXRzIGNoaWxkIGVsZW1lbnRcbiAqIHdpdGggZGF0YS1yZXZlYWwtY2xvc2UgYXR0cmlidXRlLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogPGRpdiBkYXRhLXJldmVhbCBpZD1cImhlbGxvTW9kYWxcIj5cbiAqICAgPGJ1dHRvbiBkYXRhLXJldmVhbC1jbG9zZT5Db250aW51ZTwvYnV0dG9uPlxuICogPC9kaXY+XG4gKlxuICogPGRpdiBkYXRhLXJldmVhbCBpZD1cImhlbGxvTW9kYWxcIj48L2Rpdj5cbiAqIDxidXR0b24gZGF0YS1yZXZlYWwtY2xvc2U9XCJoZWxsb01vZGFsXCI+Q29udGludWU8L2J1dHRvbj5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV2ZWFsQ2xvc2VGYWN0b3J5KHNlbGVjdG9yID0gcmV2ZWFsQ2xvc2VTZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGJ1dHRvbnMgPSAkKHNlbGVjdG9yLCBvcHRpb25zLiRjb250ZXh0KTtcblxuICAgIHJldHVybiAkYnV0dG9ucy5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICRidXR0b24gPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpbnN0YW5jZUtleSA9IGAke3JldmVhbENsb3NlQXR0cn1JbnN0YW5jZWA7XG4gICAgICAgIGNvbnN0IGNhY2hlZEJ1dHRvbiA9ICRidXR0b24uZGF0YShpbnN0YW5jZUtleSk7XG5cbiAgICAgICAgaWYgKGNhY2hlZEJ1dHRvbiBpbnN0YW5jZW9mIFJldmVhbENsb3NlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQnV0dG9uO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnV0dG9uID0gbmV3IFJldmVhbENsb3NlKCRidXR0b24pO1xuXG4gICAgICAgICRidXR0b24uZGF0YShpbnN0YW5jZUtleSwgYnV0dG9uKTtcblxuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH0pLnRvQXJyYXkoKTtcbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxuXG4gICAgdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkKGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcGFnZSA9IG5ldyB0aGlzKGNvbnRleHQpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgIHBhZ2Uub25SZWFkeS5iaW5kKHBhZ2UpKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRoaXMgbWFuaXB1bGF0ZXMgdGhlIGJhZGdlIGNvdW50ZXIgb24gdGhlIGNhcnQuXG4gICAgICAgIGNvbnN0IGNhcnRCYWRnZSA9ICQoJy5uYXZVc2VyLWFjdGlvbi0tYmFkZ2UnKTtcbiAgICAgICAgY29uc3QgYmFkZ2VDb3VudCA9IE51bWJlcihjYXJ0QmFkZ2UuZGF0YSgnYmFkZ2UtY2FydC1xdWFudGl0eScpKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjYXJ0QmFkZ2UgJiYgYmFkZ2VDb3VudCA+PSAxMCkge1xuICAgICAgICAgICAgY2FydEJhZGdlLmRhdGEoJ2JhZGdlLWNhcnQtcXVhbnRpdHknLCAnOSsnKS50cmlnZ2VyKCcnKTtcbiAgICAgICAgICAgIGNhcnRCYWRnZS5odG1sKCc5KycpXG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsiJCIsIm1pbk1heFZhbGlkYXRlIiwibWluSW5wdXRTZWxlY3RvciIsIm1heElucHV0U2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwibWluVmFsdWUiLCJwYXJzZUZsb2F0IiwidmFsIiwibWF4VmFsdWUiLCJfaXNOYU4iLCJub2QiLCJjbGFzc2VzIiwiZXJyb3JDbGFzcyIsInN1Y2Nlc3NDbGFzcyIsImVycm9yTWVzc2FnZUNsYXNzIiwiY2hlY2tGdW5jdGlvbnMiLCJtb2RhbEZhY3RvcnkiLCJyZXZlYWxDbG9zZUZhY3RvcnkiLCIkZWxlbWVudCIsImZvdW5kYXRpb24iLCJkcm9wZG93biIsImFjdGl2ZV9jbGFzcyIsInJldmVhbCIsImJnX2NsYXNzIiwiZGlzbWlzc19tb2RhbF9jbGFzcyIsImNsb3NlX29uX2JhY2tncm91bmRfY2xpY2siLCJ0YWIiLCIkY29udGV4dCIsImJvZHlBY3RpdmVDbGFzcyIsImxvYWRpbmdPdmVybGF5Q2xhc3MiLCJtb2RhbEJvZHlDbGFzcyIsIm1vZGFsQ29udGVudENsYXNzIiwiU2l6ZUNsYXNzZXMiLCJzbWFsbCIsImxhcmdlIiwibm9ybWFsIiwiTW9kYWxFdmVudHMiLCJjbG9zZSIsImNsb3NlZCIsIm9wZW4iLCJvcGVuZWQiLCJnZXRTaXplRnJvbU1vZGFsIiwiJG1vZGFsIiwiaGFzQ2xhc3MiLCJnZXRWaWV3cG9ydEhlaWdodCIsIm11bHRpcGxlciIsInZpZXdwb3J0SGVpZ2h0Iiwid2luZG93IiwiaGVpZ2h0Iiwid3JhcE1vZGFsQm9keSIsImNvbnRlbnQiLCIkbW9kYWxCb2R5IiwiYWRkQ2xhc3MiLCJodG1sIiwicmVzdHJhaW5Db250ZW50SGVpZ2h0IiwiJGNvbnRlbnQiLCIkYm9keSIsImJvZHlIZWlnaHQiLCJvdXRlckhlaWdodCIsImNvbnRlbnRIZWlnaHQiLCJtYXhIZWlnaHQiLCJjc3MiLCJjcmVhdGVNb2RhbENvbnRlbnQiLCJsZW5ndGgiLCJleGlzdGluZ0NvbnRlbnQiLCJjaGlsZHJlbiIsImFwcGVuZCIsImFwcGVuZFRvIiwiY3JlYXRlTG9hZGluZ092ZXJsYXkiLCIkbG9hZGluZ092ZXJsYXkiLCJNb2RhbCIsIl90ZW1wIiwiX3JlZiIsIl9yZWYkc2l6ZSIsInNpemUiLCIkb3ZlcmxheSIsImRlZmF1bHRTaXplIiwicGVuZGluZyIsIm9uTW9kYWxPcGVuIiwiYmluZCIsIm9uTW9kYWxPcGVuZWQiLCJvbk1vZGFsQ2xvc2UiLCJvbk1vZGFsQ2xvc2VkIiwiYmluZEV2ZW50cyIsIm9uIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIl9wcm90byIsInByb3RvdHlwZSIsInVuYmluZEV2ZW50cyIsIm9mZiIsIl90ZW1wMiIsIl9yZWYyIiwiX3JlZjIkcGVuZGluZyIsIl9yZWYyJGNsZWFyQ29udGVudCIsImNsZWFyQ29udGVudCIsInVwZGF0ZUNvbnRlbnQiLCJfdGVtcDMiLCJfcmVmMyIsIl9yZWYzJHdyYXAiLCJ3cmFwIiwicmVtb3ZlQ2xhc3MiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJnZXQiLCJfcGVuZGluZyIsInNldCIsInNob3ciLCJoaWRlIiwiX3NpemUiLCJzZWxlY3RvciIsIm9wdGlvbnMiLCIkbW9kYWxzIiwibWFwIiwiaW5kZXgiLCJlbGVtZW50IiwiaW5zdGFuY2VLZXkiLCJjYWNoZWRNb2RhbCIsImRhdGEiLCJtb2RhbCIsInRvQXJyYXkiLCJkZWZhdWx0TW9kYWwiLCJyZXZlYWxDbG9zZUF0dHIiLCJyZXZlYWxDbG9zZVNlbGVjdG9yIiwicmV2ZWFsU2VsZWN0b3IiLCJSZXZlYWxDbG9zZSIsIiRidXR0b24iLCJtb2RhbElkIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwYXJlbnRzIiwiZXEiLCIkYnV0dG9ucyIsImNhY2hlZEJ1dHRvbiIsImJ1dHRvbiIsIlBhZ2VNYW5hZ2VyIiwiY29udGV4dCIsInR5cGUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJvblJlYWR5IiwibG9hZCIsInBhZ2UiLCJkb2N1bWVudCIsInJlYWR5IiwiY2FydEJhZGdlIiwiYmFkZ2VDb3VudCIsIk51bWJlciIsInRyaWdnZXIiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==