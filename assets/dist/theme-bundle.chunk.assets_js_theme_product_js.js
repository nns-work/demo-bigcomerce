"use strict";
(self["webpackChunksecond_skin_audio"] = self["webpackChunksecond_skin_audio"] || []).push([["assets_js_theme_product_js"],{

/***/ "./assets/js/theme/athletic/product.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/athletic/product.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loaded)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

function loaded() {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tab-specifications').text().trim() !== '') {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tab-heading--specs').show();
  }
}

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _athletic_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./athletic/product */ "./assets/js/theme/athletic/product.js");
/* harmony import */ var _product_coverage_calculator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/coverage-calculator */ "./assets/js/theme/product/coverage-calculator.js");
/* harmony import */ var _product_sq_ft_calc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/sq-ft-calc */ "./assets/js/theme/product/sq-ft-calc.js");
/* harmony import */ var _ysw_product__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ysw/product */ "./assets/js/theme/ysw/product.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/*
 Import all product specific js
 */











var Product = /*#__PURE__*/function (_PageManager) {
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-reveal-id="modal-review-form"]');
    return _this;
  }
  _inheritsLoose(Product, _PageManager);
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    // Listen for foundation modal close events to sanitize URL after review.
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_3__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.productView'), this.context, window.BCData.product_attributes);
    (0,_product_video_gallery__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_product_coverage_calculator__WEBPACK_IMPORTED_MODULE_8__["default"])();
    (0,_product_sq_ft_calc__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var $reviewForm = (0,_common_form_utils__WEBPACK_IMPORTED_MODULE_6__.classifyForm)('.writeReview-form');
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_2__["default"]($reviewForm);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    (0,_athletic_product__WEBPACK_IMPORTED_MODULE_7__["default"])();
    this.productReviewHandler();
    (0,_ysw_product__WEBPACK_IMPORTED_MODULE_10__["default"])(this.context);
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/product/coverage-calculator.js":
/*!********************************************************!*\
  !*** ./assets/js/theme/product/coverage-calculator.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// coverage calculator on acoustic product pages
function calculate(e) {
  e.preventDefault();
  document.querySelector('.calculated-results').style.display = "none";
  var baseMsg = '<strong>Coverage: <span class="recommended-coverage"></span> Sq Ft</strong><br /><br />You need <strong><span class="recommended-number"></span> <span class="panel-type"></span> panels</strong> to get the <span class="coverage-description"></span> <span class="coverage-amount"></span>% coverage in your <span class="coverage-length"></span> ft by <span class="coverage-width"></span> ft room.';
  document.querySelector('.calculated-results').innerHTML = baseMsg;
  var roomType = document.querySelector('#room-type').value;
  var roomLength = document.querySelector('#room-length').value;
  var roomWidth = document.querySelector('#room-width').value;
  var roomHeight = document.querySelector('#room-height').value;
  if (roomType.length === 0 || roomLength.length === 0 || roomWidth.length === 0 || roomHeight.length === 0) {
    alert('All fields required.');
    return false;
  }
  roomLength = parseInt(roomLength);
  roomWidth = parseInt(roomWidth);
  roomHeight = parseInt(roomHeight);
  var sqFootage = roomLength * roomWidth;
  if (sqFootage >= 400) {
    var msg = '<p class="message">This room is too big. Please contact us for a custom quote.<p><p class="icon-phone"></p><p style="text-align: center"><a href="tel:1-800-679-8511">1-800-679-8511</a></p><span class="icon-email"></span><p><a href="mailto:service@secondskinaudio.com">service@secondskinaudio.com</a><p>';
    document.querySelector('.calculated-results').innerHTML = msg;
    document.querySelector('.calculated-results').style.display = "block";
    return;
  }
  // console.log('sq footage', sqFootage);
  if (roomHeight > 12) {
    var _msg = '<p class="message">This ceiling is too high. Please contact us for a custom quote.<p><p class="icon-phone"></p><p style="text-align: center"><a href="tel:1-800-679-8511">1-800-679-8511</a></p><span class="icon-email"></span><p><a href="mailto:service@secondskinaudio.com">service@secondskinaudio.com</a><p>';
    document.querySelector('.calculated-results').innerHTML = _msg;
    document.querySelector('.calculated-results').style.display = "block";
    return;
  }

  // get shape so we can figure out how many needed
  var shape;
  var shapes = document.getElementsByName('shape');
  for (var i = 0; i < shapes.length; i++) {
    if (shapes[i].checked) shape = shapes[i].value;
  }
  // console.log('shape', shape);

  var coverages = document.getElementsByName('coverage');
  var coverageAmount = coverages[0].checked ? coverages[0].value : coverages[1].value;
  var coveragePercentage = coverageAmount * .01;
  // console.log('coveragePercentage', coveragePercentage);

  // figure out how much square footage each shape gives us
  var sqFtPerPanel;
  if (shape === 'rectangle') {
    sqFtPerPanel = 8;
  } else {
    sqFtPerPanel = 4;
  }
  var panelSqFtNeeded = sqFootage * coveragePercentage;
  // we want a whole number that is divisible by the sqFtPerPanel
  var divisor = Math.floor(panelSqFtNeeded / sqFtPerPanel);
  var panelSqFtApprox = divisor * sqFtPerPanel;

  // panels needed =
  var panelsNeeded = Math.round(panelSqFtApprox / sqFtPerPanel);
  // console.log('panelsNeeded', panelsNeeded);

  document.querySelector('.recommended-coverage').innerHTML = panelSqFtApprox;
  document.querySelector('.recommended-number').innerHTML = panelsNeeded;
  document.querySelector('.panel-type').innerHTML = shape;
  document.querySelector('.coverage-description').innerHTML = coverageAmount === 25 ? 'minimum' : 'recommended';
  document.querySelector('.coverage-amount').innerHTML = coverageAmount;
  document.querySelector('.coverage-width').innerHTML = roomWidth;
  document.querySelector('.coverage-length').innerHTML = roomLength;
  document.querySelector('.calculated-results').style.display = "block";
  return false;
}
function handleCoverageCalculatorSubmit() {
  var calculatorTrigger = document.querySelector('.coverage-calculator');
  if (calculatorTrigger) {
    calculatorTrigger.addEventListener("submit", calculate);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleCoverageCalculatorSubmit);

/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");




var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: $reviewForm.find('input[type="submit"]')
    });
    this.$reviewsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-reviews');
    this.$collapsible = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }

  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */
  var _proto = _default.prototype;
  _proto.initLinkBind = function initLinkBind() {
    var $content = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#productReviews-content', this.$reviewsContent);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.productView-reviewLink a').on('click', function () {
      var reviewsTab = $content.parents('.tab-content:first');
      if (!reviewsTab.hasClass('is-active')) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.review-tab a').trigger('click');
      }
    });
  };
  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    }

    // force collapse on page load
    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__.CollapsibleEvents.click);
  }

  /**
   * Inject ID into the pagination link
   */;
  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination-item--previous .pagination-link', this.$reviewsContent);
    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }
    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };
  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: this.context.reviewRating
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: this.context.reviewSubject
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: this.context.reviewComment
    }, {
      selector: '[name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };
  _proto.validate = function validate() {
    return this.validator.performCheck();
  };
  return _default;
}();


/***/ }),

/***/ "./assets/js/theme/product/sq-ft-calc.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/product/sq-ft-calc.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// initialize global calculation variables
var areaArray = [];
var vehicleClass = '';
var totalSqFt = 0;
// data for fancy math to calculate square width using square width (addition)
var Data = {
  "2dcar": {
    "floor": 20,
    "doors": 12,
    "roof": 14,
    "firewall": 10,
    "trunk": 16,
    "hood": 12,
    "wheel-wells": 24,
    "undercarriage": 45
  },
  "4dcar": {
    "floor": 22,
    "doors": 24,
    "roof": 16,
    "firewall": 10,
    "trunk": 18,
    "hood": 12,
    "wheel-wells": 24,
    "undercarriage": 50
  },
  "midcar": {
    "floor": 26,
    "doors": 26,
    "roof": 18,
    "firewall": 12,
    "trunk": 22,
    "hood": 14,
    "wheel-wells": 24,
    "undercarriage": 55
  },
  "fullcar": {
    "floor": 28,
    "doors": 26,
    "roof": 20,
    "firewall": 12,
    "trunk": 26,
    "hood": 14,
    "wheel-wells": 24,
    "undercarriage": 60
  },
  "2dtruck": {
    "floor": 20,
    "doors": 14,
    "roof": 14,
    "firewall": 10,
    "trunk": 0,
    "hood": 14,
    "wheel-wells": 28,
    "undercarriage": 36
  },
  "4dtruck": {
    "floor": 28,
    "doors": 24,
    "roof": 22,
    "firewall": 12,
    "trunk": 0,
    "hood": 14,
    "wheel-wells": 28,
    "undercarriage": 45
  },
  "jeep": {
    "floor": 24,
    "doors": 22,
    "roof": 22,
    "firewall": 10,
    "trunk": 24,
    "hood": 14,
    "wheel-wells": 28,
    "undercarriage": 58
  },
  "compactSUV": {
    "floor": 28,
    "doors": 26,
    "roof": 24,
    "firewall": 12,
    "trunk": 30,
    "hood": 14,
    "wheel-wells": 28,
    "undercarriage": 65
  },
  "fullSUV": {
    "floor": 36,
    "doors": 26,
    "roof": 34,
    "firewall": 14,
    "trunk": 32,
    "hood": 14,
    "wheel-wells": 28,
    "undercarriage": 75
  },
  "minivan": {
    "floor": 42,
    "doors": 34,
    "roof": 44,
    "firewall": 14,
    "trunk": 34,
    "hood": 14,
    "wheel-wells": 28,
    "undercarriage": 80
  },
  "cargovan": {
    "floor": 60,
    "doors": 34,
    "roof": 60,
    "firewall": 16,
    "trunk": 34,
    "hood": 14,
    "wheel-wells": 28,
    "undercarriage": 90
  }
};
function handleAreaArray(area) {
  var areaIndex = areaArray.indexOf(area);
  if (areaIndex > -1) {
    // if the area is already in the array, remove it.
    areaArray.splice(areaIndex, 1);
  } else {
    // otherwise, add it
    areaArray.push(area);
  }

  // recalculate total
  calculateTotal();
}
function calculateTotal() {
  // confirm that we have a vehicle class
  var vehicleSelector = document.getElementById("vehicle-class");
  // if not, error
  if (!vehicleClass.length) {
    vehicleSelector.classList.add('error');
    return;
  }
  // if we've updated to have vehicle, remove error
  if (vehicleSelector.classList.contains('error')) {
    vehicleSelector.classList.remove('error');
  }

  // use the global areaArray
  var total = areaArray.reduce(function (acc, area) {
    return acc + Data[vehicleClass][area];
  }, 0);
  // show total in interface
  document.getElementById('sq-ft-calc__value').innerHTML = total;
}
function initializeSquareFootageCalculator() {
  var container = document.querySelector('.sq-ft-calc');
  var tooltipCloseBtn = document.getElementById('sq-ft-close-x');
  var tooltipShowBtn = document.getElementById('sq-ft-tooltip-show');
  var tooltipBox = document.getElementById('sq-ft-tooltip-box');
  var vehicleCoverageBtns = document.querySelectorAll('.sq-ft-calc__btn');
  if (!container) {
    // No calculator was found; bail
    return;
  }

  // showing tooltip
  tooltipShowBtn.addEventListener("click", function () {
    tooltipBox.classList.add('active');
  });

  // removing tooltip
  tooltipCloseBtn.addEventListener("click", function () {
    tooltipBox.classList.remove('active');
  });

  // buttons: toggle active state & modify calculations
  vehicleCoverageBtns.forEach(function (button) {
    button.addEventListener('click', function (e) {
      button.classList.toggle('active');
      // console.log(e.target.dataset.area);
      var area = e.target.dataset.area;
      handleAreaArray(area);
    });
  });
  // change vehicle class to modify calculations
  document.getElementById('vehicle-class').onchange = function () {
    var target = document.getElementById("vehicle-class");

    // grabbing the value for selected vehicle
    vehicleClass = target.options[target.selectedIndex].value;
    var calcBlock = document.querySelector('.sq-ft-calc__calc-content');
    var altBlock = document.querySelector('.sq-ft-calc__alt-content');

    // making the calculator part go away and a phone number alt text appear if sprinter van or other is selected
    if (vehicleClass != 'sprinter-van' && vehicleClass != 'other') {
      calcBlock.classList.remove('not-active');
      altBlock.classList.remove('active');
    } else {
      calcBlock.classList.add('not-active');
      altBlock.classList.add('active');
    }
    calculateTotal();
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeSquareFootageCalculator);

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoGallery: () => (/* binding */ VideoGallery),
/* harmony export */   "default": () => (/* binding */ videoGallery)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}

/***/ }),

/***/ "./assets/js/theme/ysw/components/car-package.js":
/*!*******************************************************!*\
  !*** ./assets/js/theme/ysw/components/car-package.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var yswCarPackage = function yswCarPackage() {
  var vehicleKits = document.querySelector('.ysw-l-product-vehicle-kits');
  if (!vehicleKits) return;
  var title = document.querySelector('.productView-package-title h3');
  var options = document.querySelectorAll('[data-product-attribute="set-radio"] input');
  var obj = {
    210: {
      text_1: 'Damplifier Pro &bull; 36 Sq Ft',
      text_2: 'Luxury Liner Pro &bull; 36 Sq Ft'
    },
    211: {
      text_1: 'Damplifier Pro &bull; 55 Sq Ft',
      text_2: 'Luxury Liner Pro &bull; 45 Sq Ft'
    },
    284: {
      text_1: 'Damplifier Pro &bull; 80 Sq Ft',
      text_2: 'Luxury Liner Pro &bull; 54 Sq Ft'
    },
    212: {
      text_1: 'Damplifier Pro &bull; 120 Sq Ft',
      text_2: 'Luxury Liner Pro &bull; 72 Sq Ft'
    },
    213: {
      text_1: 'Damplifier Pro &bull; 120 Sq Ft',
      text_2: 'Luxury Liner Pro &bull; 90 Sq Ft'
    },
    324: {
      text_1: 'Damplifier Pro &bull; 55 Sq Ft',
      text_2: 'Luxury Liner Pro &bull; 45 Sq Ft'
    },
    325: {
      text_1: 'Damplifier Pro &bull; 120 Sq Ft',
      text_2: 'Luxury Liner Pro &bull; 72 Sq Ft'
    }
  };
  options.forEach(function (option) {
    option.addEventListener('click', function (e) {
      var label = option.nextElementSibling;
      var text = label.textContent.trim();
      var value = e.target.value;
      var text1 = obj[value].text_1;
      var text2 = obj[value].text_2;
      var $text1 = document.querySelector('.productView-package-item--first h4');
      var $text2 = document.querySelector('.productView-package-item--second h4');
      title.innerHTML = text;
      $text1.innerHTML = text1;
      $text2.innerHTML = text2;
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (yswCarPackage);

/***/ }),

/***/ "./assets/js/theme/ysw/components/celluzorbe-v3.js":
/*!*********************************************************!*\
  !*** ./assets/js/theme/ysw/components/celluzorbe-v3.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YSWCelluzorbeV3Factory)
/* harmony export */ });
var YSWCelluzorbeV3 = /*#__PURE__*/function () {
  function YSWCelluzorbeV3(context) {
    this.context = context;
    this.productPrice = null;
    this.priceValue = null;
    this.originalPrice = null;
    this.priceBefore = document.querySelector('.pricePerPanel .price--before');
    this.priceAfter = document.querySelector('.pricePerPanel .price--after');
    this.sqftPrice = document.querySelector('.productView-price__sqft-price');
    this.sqftPriceBefore = document.querySelector('.productView-price__sqft-price--before');
    this.bulkDiscountRates = null;
    this.init();
  }
  var _proto = YSWCelluzorbeV3.prototype;
  _proto.init = function init() {
    var _this = this;
    var _window = window,
      product = _window.product;
    var celluzorbeV3 = document.querySelector('.ysw-l-product-celluzorbe-v3');
    if (!product || !product.bulk_discount_rates || !celluzorbeV3) return;
    this.productPrice = document.querySelector('[data-product-price-without-tax]');
    this.priceValue = Number(this.productPrice.textContent);
    this.originalPrice = Number(this.productPrice.textContent);
    this.bulkDiscountRates = product.bulk_discount_rates;
    var addToCardWrapper = document.querySelector('.productView-options');
    var descButton = addToCardWrapper.querySelector('.increment--down');
    var incButton = addToCardWrapper.querySelector('.increment--up');
    var qtyInput = addToCardWrapper.querySelector('#numberOfPanels');
    var calculateBtn = addToCardWrapper.querySelector('#calculateSquareFt');
    calculateBtn.click();
    this.reset();
    incButton.addEventListener('click', function () {
      _this.updatePrice('inc');
    });
    descButton.addEventListener('click', function () {
      _this.updatePrice('desc');
    });
    qtyInput.addEventListener('input', function () {
      _this.updatePrice();
    });
    calculateBtn.addEventListener('click', function () {
      _this.updatePrice();
    });
    this.setObserver();
  };
  _proto.updatePrice = function updatePrice(type, flagObs) {
    var _this2 = this;
    var quantity = document.getElementById('numberOfPanels');
    var quantityValue = Number(quantity.value) || 0;
    var flagExist = flagObs !== undefined;
    var flag = false;
    this.reset();
    this.bulkDiscountRates.forEach(function (_ref) {
      var min = _ref.min,
        max = _ref.max,
        discount = _ref.discount;
      var checker = quantityValue >= min && quantityValue <= (max || quantityValue + 1);
      var setProductPrices = function setProductPrices() {
        if (!checker && flag) return;
        var priceAfter = _this2.calculatePrice(Number(_this2.priceValue), discount.value).toFixed(2);
        var sqftPriceBefore = _this2.calculateSquareFtPrice(8, _this2.originalPrice).toFixed(2);
        var sqftPriceAfter = _this2.calculateSquareFtPrice(8, priceAfter).toFixed(2);
        if (priceAfter === _this2.originalPrice.toFixed(2)) {
          _this2.priceBefore.style.display = 'none';
          _this2.sqftPriceBefore.style.display = 'none';
        } else {
          _this2.priceBefore.style.display = 'block';
          _this2.sqftPriceBefore.style.display = 'block';
        }
        _this2.priceBefore.textContent = "$" + _this2.originalPrice;
        _this2.priceAfter.textContent = "$" + priceAfter;
        _this2.sqftPrice.textContent = "" + sqftPriceAfter;
        _this2.sqftPriceBefore.textContent = "" + sqftPriceBefore;
        flag = true;
      };
      if (flagExist && checker && flag) return setProductPrices();
      if (checker) {
        setProductPrices();
        flag = true;
      }
    });
  };
  _proto.calculatePrice = function calculatePrice(price, discount) {
    var calc = (price - price * discount / 100) * 100 / 100;
    var newPrice = Math.round(calc * 100 + Number.EPSILON) / 100;
    return newPrice;
  };
  _proto.calculateSquareFtPrice = function calculateSquareFtPrice(sqft, price) {
    var calc = price / sqft * 100 / 100;
    var newPrice = Math.round(calc * 100 + Number.EPSILON) / 100;
    return newPrice;
  };
  _proto.reset = function reset() {
    this.productPrice.textContent = this.originalPrice;
    this.priceBefore.style.display = 'none';
    this.priceAfter.textContent = "$" + this.originalPrice.toFixed(2);
    this.sqftPriceBefore.style.display = 'none';
    this.sqftPrice.textContent = "" + (this.originalPrice / 8).toFixed(2);
  };
  _proto.setObserver = function setObserver() {
    var _this3 = this;
    var flag = false;
    var callback = function callback(mutationList) {
      mutationList.forEach(function (mutation) {
        var mHasAttribute = mutation.target.hasAttribute('data-product-price-without-tax');
        if (mutation.type === 'childList' && mHasAttribute && flag) {
          _this3.priceValue = Number(mutation.target.textContent);
          _this3.originalPrice = _this3.priceValue;
          _this3.updatePrice('', true);
          flag = false;
        }
      });
    };
    var observer = new MutationObserver(callback);
    observer.observe(document.querySelector('.productView-options'), {
      childList: true,
      subtree: true
    });
    var price = document.querySelector('.productView-options [data-product-price-without-tax]');
    var observerPrice = new MutationObserver(function (e) {
      flag = true;
    });
    observerPrice.observe(price, {
      characterData: true,
      childList: true
    });
  };
  return YSWCelluzorbeV3;
}();
function YSWCelluzorbeV3Factory(context) {
  if (this instanceof YSWCelluzorbeV3) {
    this.context = context;
  } else {
    return new YSWCelluzorbeV3(context);
  }
}

/***/ }),

/***/ "./assets/js/theme/ysw/components/control-graphics.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/ysw/components/control-graphics.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var addMultiEventListener = function addMultiEventListener(element, eventNames, listener) {
  eventNames.forEach(function (eventName) {
    element.addEventListener(eventName, listener);
  });
};
var yswControlGraphics = function yswControlGraphics() {
  var controls = document.querySelectorAll('[data-ysw-control]');
  if (!controls) return;
  controls.forEach(function (control) {
    control.checked = true;
    var targets = document.querySelectorAll("[data-ysw-target=\"" + control.dataset.yswControl + "\"]");
    targets.forEach(function (target) {
      target.style.visibility = 'visible';
    });
    control.addEventListener('click', function () {
      var _targets = document.querySelectorAll("[data-ysw-target=\"" + control.dataset.yswControl + "\"]");
      _targets.forEach(function (target) {
        // eslint-disable-next-line no-unused-expressions
        target.style.visibility === 'hidden' ? target.style.visibility = 'visible' : target.style.visibility = 'hidden';
      });
    });
  });
  var bullets = document.querySelectorAll('[data-ysw-hover]');
  if (!bullets) return;
  bullets.forEach(function (bullet) {
    var showTargetsFunc = function showTargetsFunc(e) {
      var targets = document.querySelectorAll("[data-" + bullet.dataset.yswHover + "]");
      if (e.target.dataset.yswHover === bullet.dataset.yswHover || e.target.closest("[data-" + bullet.dataset.yswHover + "]")) {
        targets.forEach(function (target) {
          return target.removeAttribute('hidden');
        });
      }
    };
    var hideTargetsFunc = function hideTargetsFunc(e) {
      var targets = document.querySelectorAll("[data-" + bullet.dataset.yswHover + "]");
      if (e.target.dataset.yswHover !== bullet.dataset.yswHover || !e.target.closest("[data-" + bullet.dataset.yswHover + "]")) {
        targets.forEach(function (target) {
          return target.setAttribute('hidden', '');
        });
      }
    };
    addMultiEventListener(document.body, ['mouseover', 'touchstart'], showTargetsFunc);
    addMultiEventListener(document.body, ['mouseout', 'touchend'], hideTargetsFunc);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (yswControlGraphics);

/***/ }),

/***/ "./assets/js/theme/ysw/components/pricing-calculator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/ysw/components/pricing-calculator.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YSWPricingCalculatorFactory)
/* harmony export */ });
var YSWPricingCalculator = /*#__PURE__*/function () {
  function YSWPricingCalculator(context) {
    this.context = context;
    this.productPrices = null;
    this.priceValue = null;
    this.originalPrice = null;
    this.init();
  }
  var _proto = YSWPricingCalculator.prototype;
  _proto.init = function init() {
    var _this = this;
    var _window = window,
      product = _window.product;
    var celluzorbe = document.querySelector('.productView--celluzorbe');
    if (!product || !product.bulk_discount_rates || !celluzorbe) return;
    this.productPrices = document.querySelectorAll('#productView-details [data-product-price-without-tax]');
    this.priceValue = Number(this.productPrices[0].textContent.split('$')[1]);
    this.originalPrice = Number(this.productPrices[0].textContent.split('$')[1]);
    var bulkDiscountRates = product.bulk_discount_rates;
    var addToCardWrapper = document.getElementById('productView-details');
    var descButton = addToCardWrapper.querySelector('[data-action="dec"]');
    var incButton = addToCardWrapper.querySelector('[data-action="inc"]');
    var qtyInput = addToCardWrapper.querySelector('#numberOfPanels');
    var calculateBtn = addToCardWrapper.querySelector('#calculateSquareFt');
    incButton.addEventListener('click', function () {
      _this.updatePrice(bulkDiscountRates, 'inc');
    });
    descButton.addEventListener('click', function () {
      _this.updatePrice(bulkDiscountRates);
    });
    qtyInput.addEventListener('input', function () {
      _this.updatePrice(bulkDiscountRates);
    });
    calculateBtn.addEventListener('click', function () {
      _this.updatePrice(bulkDiscountRates);
    });
    var options = {
      attributes: true,
      childList: true,
      subtree: true
    };
    var flag = false;
    var callback = function callback(mutationList) {
      mutationList.forEach(function (mutation) {
        var mHasAttribute = mutation.target.hasAttribute('data-product-price-without-tax');
        if (mutation.type === 'childList' && mHasAttribute && flag) {
          _this.priceValue = Number(mutation.target.textContent.split('$')[1]);
          _this.originalPrice = _this.priceValue;
          _this.updatePrice(bulkDiscountRates, '', flag);
          flag = false;
        }
      });
    };
    var observer = new MutationObserver(callback);
    var previewProduct = document.getElementById('productView-details');
    var price = previewProduct.querySelector('[data-product-price-without-tax]');
    observer.observe(previewProduct, options);
    var observerPrice = new MutationObserver(function (e) {
      flag = true;
    });
    observerPrice.observe(price, {
      characterData: true,
      childList: true
    });
  };
  _proto.calculatePrice = function calculatePrice(price, discount) {
    return Math.round((price - price * discount / 100) * 100) / 100;
  };
  _proto.updatePrice = function updatePrice(bulkDiscountRates, type, flagObs) {
    var _this2 = this;
    var flag = false;
    var quantity = document.getElementById('numberOfPanels');
    var quantityValue = Number(quantity.value) || 0;
    var flagExist = flagObs !== undefined;
    bulkDiscountRates.forEach(function (_ref, index) {
      var min = _ref.min,
        max = _ref.max,
        discount = _ref.discount;
      var checker = quantityValue >= min && quantityValue <= (max || quantityValue + 1);
      var setProductPrices = function setProductPrices() {
        _this2.productPrices.forEach(function (productPrice) {
          productPrice.innerHTML = "\n                        <span class=\"ysw-js-price\">\n                            <span class=\"ysw-js-price__before\">\n                                $" + _this2.originalPrice + "\n                            </span>\n                            <span class=\"ysw-js-price__now\">\n                                $" + _this2.calculatePrice(_this2.originalPrice, discount.value).toFixed(2) + "\n                            </span>\n                        </span>";
          productPrice.dataset.discount = "discount-" + index;
        });
      };
      if (flagExist && checker && flag) return setProductPrices();
      if (checker) {
        setProductPrices();
        flag = true;
        return;
      }
      if (quantityValue < min && !flag && type !== 'inc' && type !== 'observer') {
        _this2.productPrices.forEach(function (productPrice) {
          productPrice.textContent = "$" + _this2.originalPrice.toFixed(2);
        });
      }
    });
  };
  return YSWPricingCalculator;
}();
function YSWPricingCalculatorFactory(context) {
  if (this instanceof YSWPricingCalculator) {
    this.context = context;
  } else {
    return new YSWPricingCalculator(context);
  }
}

/***/ }),

/***/ "./assets/js/theme/ysw/components/table-pricing-calculator.js":
/*!********************************************************************!*\
  !*** ./assets/js/theme/ysw/components/table-pricing-calculator.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YSWTablePricingCalculatorFactory)
/* harmony export */ });
var YSWTablePricingCalculator = /*#__PURE__*/function () {
  function YSWTablePricingCalculator(context) {
    this.context = context;
    this.productPriceContent = null;
    this.productPrice = null;
    this.priceValue = null;
    this.originalPrice = null;
    this.priceBeforeTotal = document.querySelector('[data-price-before-total]');
    this.priceBefore = document.querySelector('[data-price-before]');
    this.priceAfterTotal = document.querySelector('[data-price-after-total]');
    this.priceTotalSavings = document.querySelector('[data-price-total-savings]');
    this.discountSaving = document.querySelector('.discPercent');
    this.bulkDiscountRates = null;
    this.init();
  }
  var _proto = YSWTablePricingCalculator.prototype;
  _proto.init = function init() {
    var _this = this;
    var _window = window,
      product = _window.product;
    var celluzorbeV2 = document.querySelector('.productView--price-table');
    if (!product || !product.bulk_discount_rates || !celluzorbeV2) return;
    this.productPriceContent = document.querySelector('#productView-details [data-product-price-without-tax]');
    this.productPrice = document.querySelector('[data-price-withoutTax]');
    this.priceValue = Number(this.productPrice.textContent);
    this.originalPrice = Number(this.productPrice.textContent);
    this.bulkDiscountRates = product.bulk_discount_rates;
    var addToCardWrapper = document.getElementById('productView-details');
    var descButton = addToCardWrapper.querySelector('[data-action="dec"]');
    var incButton = addToCardWrapper.querySelector('[data-action="inc"]');
    var qtyInput = addToCardWrapper.querySelector('#numberOfPanels');
    var calculateBtn = addToCardWrapper.querySelector('#calculateSquareFt');
    this.reset(this.bulkDiscountRates);
    incButton.addEventListener('click', function () {
      _this.updatePrice('inc');
    });
    descButton.addEventListener('click', function () {
      _this.updatePrice('desc');
    });
    qtyInput.addEventListener('input', function () {
      _this.updatePrice();
    });
    calculateBtn.addEventListener('click', function () {
      _this.updatePrice();
    });
    this.setObserver();
  };
  _proto.updatePrice = function updatePrice(type, flagObs) {
    var _this2 = this;
    var quantity = document.getElementById('numberOfPanels');
    var quantityValue = Number(quantity.value) || 0;
    var flagExist = flagObs !== undefined;
    var flag = false;
    this.reset(quantityValue);
    this.bulkDiscountRates.forEach(function (_ref) {
      var min = _ref.min,
        max = _ref.max,
        discount = _ref.discount;
      var checker = quantityValue >= min && quantityValue <= (max || quantityValue + 1);
      var setProductPrices = function setProductPrices() {
        if (!checker && flag) return;
        _this2.discountSaving.textContent = "Saving " + discount.value + "%";
        _this2.productPrice.textContent = "" + _this2.calculatePrice(Number(_this2.priceValue), discount.value).toFixed(2);
        _this2.priceBefore.innerHTML = "<span class=\"symbol\">$</span><span class=\"price\">" + _this2.originalPrice + "</span>";
        _this2.priceBeforeTotal.innerHTML = "<span class=\"symbol\">$</span><span class=\"price\">" + (quantityValue * _this2.priceValue).toFixed(2) + "</span>";
        _this2.priceAfterTotal.textContent = "" + (quantityValue * _this2.calculatePrice(_this2.priceValue, discount.value).toFixed(2)).toFixed(2);
        _this2.priceTotalSavings.textContent = "" + ((quantityValue * _this2.priceValue).toFixed(2) - quantityValue * _this2.calculatePrice(_this2.priceValue, discount.value).toFixed(2)).toFixed(2);
        flag = true;
      };
      if (flagExist && checker && flag) return setProductPrices();
      if (checker) {
        setProductPrices();
        flag = true;
      }
    });
  };
  _proto.calculatePrice = function calculatePrice(price, discount) {
    return (price - price * discount / 100) * 100 / 100;
  };
  _proto.reset = function reset(quantityValue) {
    var qtyInput = document.querySelector('#numberOfPanels');
    var pricesSection = document.querySelector('.prices-section');
    this.productPrice.textContent = this.originalPrice;
    this.discountSaving.innerHTML = 'No savings';
    this.priceAfterTotal.textContent = (Number(qtyInput.value) * this.originalPrice).toFixed(2);
    this.priceTotalSavings.innerHTML = '0.00';
    pricesSection.querySelector('thead').style.display = 'none';
    pricesSection.querySelectorAll('.icons').forEach(function (icon) {
      icon.style.visibility = 'hidden';
    });
    pricesSection.querySelectorAll('tbody tr:not(:first-child)').forEach(function (row) {
      row.style.display = 'none';
    });
    if (quantityValue < 14) {
      pricesSection.querySelectorAll('.discount-wrapper').forEach(function (discountWrapper) {
        discountWrapper.style.display = 'none';
      });
    }
    if (quantityValue >= 14) {
      pricesSection.querySelectorAll('.discount-wrapper').forEach(function (discountWrapper) {
        discountWrapper.style.display = 'block';
      });
      pricesSection.querySelectorAll('tbody tr:not(:first-child)').forEach(function (row) {
        row.style.display = 'table-row';
      });
      pricesSection.querySelectorAll('.icons').forEach(function (icon) {
        icon.style.visibility = 'visible';
      });
      pricesSection.querySelector('thead').style.display = 'table-header-group';
    }
  };
  _proto.setObserver = function setObserver() {
    var _this3 = this;
    var flag = false;
    var callback = function callback(mutationList) {
      mutationList.forEach(function (mutation) {
        var mHasAttribute = mutation.target.hasAttribute('data-product-price-without-tax');
        if (mutation.type === 'childList' && mHasAttribute && flag) {
          _this3.priceValue = Number(mutation.target.textContent);
          _this3.originalPrice = _this3.priceValue;
          _this3.updatePrice('', true);
          flag = false;
        }
      });
    };
    var observer = new MutationObserver(callback);
    observer.observe(document.querySelector('#productView-details'), {
      childList: true,
      subtree: true
    });
    var price = document.querySelector('#productView-details [data-product-price-without-tax]');
    var observerPrice = new MutationObserver(function (e) {
      flag = true;
    });
    observerPrice.observe(price, {
      characterData: true,
      childList: true
    });
  };
  return YSWTablePricingCalculator;
}();
function YSWTablePricingCalculatorFactory(context) {
  if (this instanceof YSWTablePricingCalculator) {
    this.context = context;
  } else {
    return new YSWTablePricingCalculator(context);
  }
}

/***/ }),

/***/ "./assets/js/theme/ysw/components/timberwool-calculator.js":
/*!*****************************************************************!*\
  !*** ./assets/js/theme/ysw/components/timberwool-calculator.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YSWTimberwoolCalculatorFactory)
/* harmony export */ });
var YSWTimberwoolCalculator = /*#__PURE__*/function () {
  function YSWTimberwoolCalculator(context) {
    this.context = context;
    this.productPrice = null;
    this.priceValue = null;
    this.originalPrice = null;
    this.priceBefore = document.querySelector('.pricePerPanel .price--before');
    this.priceAfter = document.querySelector('.pricePerPanel .price--after');
    this.bulkDiscountRates = null;
    this.init();
  }
  var _proto = YSWTimberwoolCalculator.prototype;
  _proto.init = function init() {
    var _this = this;
    var _window = window,
      product = _window.product;
    var timberwool = document.querySelector('.productView--timberwool');
    if (!product || !product.bulk_discount_rates || !timberwool) return;
    this.productPrice = document.querySelector('[data-product-price-without-tax]');
    this.priceValue = Number(this.productPrice.textContent);
    this.originalPrice = Number(this.productPrice.textContent);
    this.bulkDiscountRates = product.bulk_discount_rates;
    var addToCardWrapper = document.querySelector('.productView-options');
    var descButton = addToCardWrapper.querySelector('.increment--down');
    var incButton = addToCardWrapper.querySelector('.increment--up');
    var qtyInput = addToCardWrapper.querySelector('#numberOfPanels');
    var calculateBtn = addToCardWrapper.querySelector('#calculateSquareFt');
    calculateBtn.click();
    this.reset();
    incButton.addEventListener('click', function () {
      _this.updatePrice('inc');
    });
    descButton.addEventListener('click', function () {
      _this.updatePrice('desc');
    });
    qtyInput.addEventListener('input', function () {
      _this.updatePrice();
    });
    calculateBtn.addEventListener('click', function () {
      _this.updatePrice();
    });
    this.setObserver();
  };
  _proto.updatePrice = function updatePrice(type, flagObs) {
    var _this2 = this;
    var quantity = document.getElementById('numberOfPanels');
    var quantityValue = Number(quantity.value) || 0;
    var flagExist = flagObs !== undefined;
    var flag = false;
    this.reset();
    this.bulkDiscountRates.forEach(function (_ref) {
      var min = _ref.min,
        max = _ref.max,
        discount = _ref.discount;
      var checker = quantityValue >= min && quantityValue <= (max || quantityValue + 1);
      var setProductPrices = function setProductPrices() {
        if (!checker && flag) return;
        var priceAfter = _this2.calculatePrice(Number(_this2.priceValue), discount.value).toFixed(2);
        if (priceAfter === _this2.originalPrice.toFixed(2)) {
          _this2.priceBefore.style.display = 'none';
        } else {
          _this2.priceBefore.style.display = 'block';
        }
        _this2.priceBefore.textContent = "$" + _this2.originalPrice;
        _this2.priceAfter.textContent = "$" + priceAfter;
        flag = true;
      };
      if (flagExist && checker && flag) return setProductPrices();
      if (checker) {
        setProductPrices();
        flag = true;
      }
    });
  };
  _proto.calculatePrice = function calculatePrice(price, discount) {
    return (price - price * discount / 100) * 100 / 100;
  };
  _proto.reset = function reset() {
    this.productPrice.textContent = this.originalPrice;
    this.priceBefore.style.display = 'none';
    this.priceAfter.textContent = "$" + this.originalPrice.toFixed(2);
  };
  _proto.setObserver = function setObserver() {
    var _this3 = this;
    var flag = false;
    var callback = function callback(mutationList) {
      mutationList.forEach(function (mutation) {
        var mHasAttribute = mutation.target.hasAttribute('data-product-price-without-tax');
        if (mutation.type === 'childList' && mHasAttribute && flag) {
          _this3.priceValue = Number(mutation.target.textContent);
          _this3.originalPrice = _this3.priceValue;
          _this3.updatePrice('', true);
          flag = false;
        }
      });
    };
    var observer = new MutationObserver(callback);
    observer.observe(document.querySelector('.productView-options'), {
      childList: true,
      subtree: true
    });
    var price = document.querySelector('.productView-options [data-product-price-without-tax]');
    var observerPrice = new MutationObserver(function (e) {
      flag = true;
    });
    observerPrice.observe(price, {
      characterData: true,
      childList: true
    });
  };
  return YSWTimberwoolCalculator;
}();
function YSWTimberwoolCalculatorFactory(context) {
  if (this instanceof YSWTimberwoolCalculator) {
    this.context = context;
  } else {
    return new YSWTimberwoolCalculator(context);
  }
}

/***/ }),

/***/ "./assets/js/theme/ysw/components/timberwool-sample-modal.js":
/*!*******************************************************************!*\
  !*** ./assets/js/theme/ysw/components/timberwool-sample-modal.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YSWTimberwoolSampleModalFactory)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }

var YSWTimberwoolSampleModal = /*#__PURE__*/function () {
  function YSWTimberwoolSampleModal(context) {
    this.context = context;
    this.productId = document.querySelector('.modal--timberwool-sample #product_id');
    this.quantityGlobal = 0;
    this.maxQuantity = 1;
    this.attributes = [];
    this.flag = false;
    this.init();
  }
  var _proto = YSWTimberwoolSampleModal.prototype;
  _proto.init = function init() {
    var timberwool = document.querySelector('.modal--timberwool-sample');
    if (!timberwool) return;
    this.modalTrigger();
    this.addTrigger();
    this.selectColorTrigger();
    this.selectIconTrigger();
    this.render();
    this.setRemoveListeners();
  };
  _proto.render = function render(type) {
    var _this = this;
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.cart.getCart({
      includeOptions: true
    }, function (err, response) {
      var qty = document.querySelector('.productView-free-sample__title [data-qty-added]');
      var maxQty = document.querySelector('.productView-free-sample__title [data-max-qty]');
      var list = document.querySelector('.productView-free-sample__items');
      var flag = false;
      var quantity = 0;
      var products = [];
      var panels = [];
      try {
        qty.innerHTML = response[0].lineItems.physicalItems.length || 0;
        products = response[0].lineItems.physicalItems.filter(function (item) {
          return item.productId === Number(_this.productId.value);
        });
        panels = products.filter(function (item) {
          return item.options.some(function (option) {
            return option.name === 'Edge Type';
          });
        });
        panels.forEach(function (panel) {
          quantity += panel.quantity;
        });
        _this.quantityGlobal = quantity;
        qty.innerHTML = quantity;
      } catch (e) {
        qty.innerHTML = 0;
        flag = true;
      }
      maxQty.innerHTML = _this.maxQuantity;
      list.innerHTML = '';
      if (flag) return;
      var items = {
        options: [],
        id: []
      };
      panels.forEach(function (panel) {
        if (panel.quantity > 1) {
          for (var j = 0; j < panel.quantity; j++) {
            items.options.push(panel.options);
            items.id.push(panel.id);
          }
        } else {
          items.options.push(panel.options);
          items.id.push(panel.id);
        }
      });
      items.options.forEach(function (option, index) {
        var thickness = option[0],
          color = option[1],
          edge = option[2];
        var colorCode = document.querySelector("[data-product-attribute-value=\"" + option[1].valueId + "\"][value=\"" + option[1].valueId + "\"]");
        var template = "<li class=\"productView-free-sample__item\">\n                        <div class=\"productView-free-sample__item-color\" style=\"background-color: " + colorCode.dataset.color + ";\">\n                            <img src=\"" + colorCode.dataset.image + "\" alt=\"" + color.value + "\">\n                        </div>\n                        <div class=\"productView-free-sample__item-right\">\n                            <div>\n                                <p>" + color.value + ", " + thickness.value + ",</p>\n                                <p>" + edge.value + "</p>\n                            </div>\n                            <button data-id=\"" + items.id[index] + "\">\n                                <svg class=\"icon\">\n                                    <use xlink:href=\"#icon-xmark\"></use>\n                                </svg>\n                            </button>\n                        </div>\n                    </li>";
        list.insertAdjacentHTML('beforeend', template);
      });
      _this.setRemoveListeners();
      if (type === 'success') {
        _this.setMessages('success');
      }
      if (type === 'error') {
        _this.setMessages('error');
      }
      if (_this.quantityGlobal >= _this.maxQuantity) {
        _this.setMessages('disabled');
        return;
      }
      if (!type) return;
      setTimeout(function () {
        _this.setMessages('normal');
      }, 1000);
    });
  };
  _proto.setMessages = function setMessages(type) {
    var addToCartBtn = document.querySelectorAll('.order-free-sample-button');
    var messages = {
      success: 'Added Sample',
      inprogress: 'Adding to cart…',
      error: 'Error',
      normal: 'Add Sample',
      removing: 'Removing…',
      removed: 'Removed',
      disabled: "Max " + this.maxQuantity + " Sample" + (this.maxQuantity > 1 ? 's' : '')
    };
    addToCartBtn.forEach(function (btn) {
      btn.value = messages[type];
      if (type === 'normal') {
        btn.removeAttribute('disabled');
        btn.classList.remove('btn-new--disabled');
        return;
      }
      btn.setAttribute('disabled', 'disabled');
      btn.classList.add('btn-new--disabled');
    });
  };
  _proto.setRemoveListeners = function setRemoveListeners() {
    var _this2 = this;
    var removeButtons = document.querySelectorAll('.productView-free-sample__item-right button');
    removeButtons.forEach(function (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        removeButtons.forEach(function (btn) {
          btn.setAttribute('disabled', 'disabled');
          btn.classList.add('disabled');
        });
        _this2.setMessages('removing');
        var id = button.dataset.id;
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.cart.getCart({
          includeOptions: true
        }, function (err, response) {
          try {
            var products = response[0].lineItems.physicalItems.filter(function (item) {
              return item.productId === Number(_this2.productId.value);
            });
            var panels = products.filter(function (item) {
              return item.options.some(function (option) {
                return option.name === 'Edge Type';
              });
            });
            if (panels.find(function (panel) {
              return panel.id === id;
            }).quantity > 1) {
              _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.cart.itemUpdate(id, panels.find(function (panel) {
                return panel.id === id;
              }).quantity - 1, function (_err, _response) {
                _this2.render('removed');
              });
              return;
            }
            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.cart.itemRemove(id, function (_err, _response) {
              _this2.render('removed');
            });
          } catch (_e) {
            console.error(_e); // eslint-disable-line no-console
          }
          _this2.render('normal');
          removeButtons.forEach(function (btn) {
            btn.removeAttribute('disabled');
            btn.classList.remove('disabled');
          });
        });
      });
    });
  };
  _proto.postToCart = function postToCart() {
    var _this3 = this;
    var formData = new FormData();
    formData.append('action', 'add');
    formData.append('product_id', Number(this.productId.value));
    formData.append('quantity', 1);
    document.querySelectorAll('.modal--timberwool-sample .form-select option:checked').forEach(function (option) {
      _this3.attributes.push({
        name: option.parentElement.name,
        value: option.value
      });
    });
    this.attributes.forEach(function (attribute) {
      formData.append(attribute.name, attribute.value);
    });
    var quantity = 0;
    var setTimer = setTimeout(function () {
      if (_this3.flag) return;
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.cart.getCart({
        includeOptions: true
      }, function (err, response) {
        try {
          var products = response[0].lineItems.physicalItems.filter(function (item) {
            return item.productId === Number(_this3.productId.value);
          });
          var panels = products.filter(function (item) {
            return item.options.some(function (option) {
              return option.name === 'Edge Type';
            });
          });
          panels.forEach(function (panel) {
            quantity += panel.quantity;
          });
          _this3.quantityGlobal = quantity;
        } catch (e) {
          _this3.render('error');
        }
        if (quantity >= 3 || _this3.quantityGlobal >= 3) {
          _this3.setMessages('normal');
          _this3.flag = true;
          return;
        }
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.cart.itemAdd(formData, function (_err, _response) {
          var errorMessage = _err || _response.data.error;
          if (errorMessage) {
            console.error(errorMessage); // eslint-disable-line no-console
          }
          _this3.setMessages('success');
          _this3.render('success');
        });
      });
      _this3.flag = true;
      clearTimeout(setTimer);
    }, 1000);
    this.flag = false;
    this.attributes = [];
  };
  _proto.modalTrigger = function modalTrigger() {
    var modal = document.querySelector('.modal--timberwool-sample');
    var modalTrigger = document.querySelector('.productView-sample a');
    modalTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('open');
      modal.style.display = 'block';
      modal.style.opacity = '1';
      modal.style.visibility = 'visible';
      modal.style.top = '530px';
      document.body.classList.add('has-activeModal');
    });
  };
  _proto.addTrigger = function addTrigger() {
    var _this4 = this;
    var addToCartBtn = document.querySelectorAll('.order-free-sample-button');
    addToCartBtn.forEach(function (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        _this4.setMessages('inprogress');
        _this4.postToCart();
      });
    });
  };
  _proto.selectColorTrigger = function selectColorTrigger() {
    var selectColor = document.querySelector('#attribute_select_707');
    selectColor.addEventListener('change', function (e) {
      var img = document.querySelector('label[for="attribute_select_707"] img');
      img.src = e.target.options[e.target.selectedIndex].dataset.image;
      img.alt = e.target.options[e.target.selectedIndex].text;
    });
  };
  _proto.selectIconTrigger = function selectIconTrigger() {
    var selectThicknessIcon = document.querySelector('#attribute_select_706');
    var selectEdgeIcon = document.querySelector('#attribute_select_708');
    selectThicknessIcon.addEventListener('change', function (e) {
      var icon = document.querySelector('label[for="attribute_select_706"] .icon use');
      icon.href.baseVal = e.target.options[e.target.selectedIndex].dataset.icon;
    });
    selectEdgeIcon.addEventListener('change', function (e) {
      var icon = document.querySelector('label[for="attribute_select_708"] .icon use');
      icon.href.baseVal = e.target.options[e.target.selectedIndex].dataset.icon;
    });
  };
  return YSWTimberwoolSampleModal;
}();
function YSWTimberwoolSampleModalFactory(context) {
  if (this instanceof YSWTimberwoolSampleModal) {
    this.context = context;
  } else {
    return new YSWTimberwoolSampleModal(context);
  }
}

/***/ }),

/***/ "./assets/js/theme/ysw/controllers/gallery.controller.js":
/*!***************************************************************!*\
  !*** ./assets/js/theme/ysw/controllers/gallery.controller.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YSWProductGalleryControllerFactory)
/* harmony export */ });
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var YSWProductGalleryController = /*#__PURE__*/function () {
  function YSWProductGalleryController(context) {
    this.context = context;
    this.carousel = document.querySelector('.productView-thumbnails');
    this.mobileThumbnails = document.querySelectorAll('.productView-thumbnail.mobile');
    this.desktopThumbnails = document.querySelectorAll('.productView-thumbnail.desktop');
    this.arrowWrap = document.querySelector('.slideBtnWrap');
    this.firstSlide = document.querySelector('.productView-thumbnail-link');
    this.flagMobile = false;
    this.flagDesktop = false;
    this.init();
  }
  var _proto = YSWProductGalleryController.prototype;
  _proto.init = function init() {
    this.setFlag();
    this.setCarousel();
    this.setArrow();
    this.setObserve();
    this.setClickEvent();
  };
  _proto.setCarousel = function setCarousel() {
    this.setFirstSlide();
    this.hideCarousel();
    if (window.innerWidth < 1001) {
      if (this.mobileThumbnails.length > 1) {
        this.arrowWrap.removeAttribute('hidden');
      }
      if (!this.flagMobile) return;
      $(this.carousel).slick({
        infinite: false,
        mobileFirst: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        infinity: true
      }).slick('slickFilter', '.mobile').slick('refresh').slick('slickGoTo', 0);
    } else {
      if (this.desktopThumbnails.length > 1) {
        this.arrowWrap.removeAttribute('hidden');
      }
      if (!this.flagDesktop) return;
      $(this.carousel).slick({
        infinite: false,
        mobileFirst: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        infinity: true
      }).slick('slickFilter', '.desktop').slick('refresh').slick('slickGoTo', 0);
    }
    this.showCarousel();
  };
  _proto.setClickEvent = function setClickEvent() {
    var _this = this;
    var thumbnails = document.querySelectorAll('.productView-thumbnail-link');
    thumbnails.forEach(function (link, index) {
      link.addEventListener('click', function () {
        if (index === 0) {
          document.querySelector('.slidePrevBtn').style.display = 'none';
        } else {
          document.querySelector('.slidePrevBtn').style.display = 'block';
        }
        if (index === document.querySelectorAll('.productView-thumbnail-link').length - 1) {
          document.querySelector('.slideNextBtn').style.display = 'none';
        } else {
          document.querySelector('.slideNextBtn').style.display = 'block';
        }
        $(_this.carousel).slick('slickGoTo', index);
      });
    });
  };
  _proto.setFirstSlide = function setFirstSlide() {
    this.firstSlide.classList.add('is-active');
    this.firstSlide.click();
  };
  _proto.setFlag = function setFlag() {
    this.flagMobile = true;
    this.flagDesktop = true;
  };
  _proto.setArrow = function setArrow() {
    var _this2 = this;
    var arrowPrev = document.querySelector('.slidePrevBtn');
    var arrowNext = document.querySelector('.slideNextBtn');
    arrowPrev.addEventListener('click', function () {
      _this2.goTo('previous');
    });
    arrowNext.addEventListener('click', function () {
      _this2.goTo('next');
    });
  };
  _proto.setObserve = function setObserve() {
    var _this3 = this;
    var observer = new ResizeObserver(function (entries) {
      for (var _iterator = _createForOfIteratorHelperLoose(entries), _step; !(_step = _iterator()).done;) {
        var entry = _step.value;
        _this3.hideCarousel();
        if (document.querySelector('.slick-active[data-slick-index="0"]')) {
          document.querySelector('.slidePrevBtn').style.display = 'none';
        }
        if (entry.contentRect.width < 1001) {
          if (!_this3.flagMobile) return;
          $(_this3.carousel).slick('slickUnfilter').slick('slickFilter', '.mobile').slick('refresh').slick('slickGoTo', 0);
          _this3.setFirstSlide();
        } else {
          if (!_this3.flagDesktop) return;
          $(_this3.carousel).slick('slickUnfilter').slick('slickFilter', '.desktop').slick('refresh').slick('slickGoTo', 0);
          _this3.setFirstSlide();
        }
        _this3.showCarousel();
      }
    });
    observer.observe(document.body);
  };
  _proto.goTo = function goTo(direction) {
    var imageLinks = Array.from(document.querySelectorAll('.productView-thumbnail-link'));
    var activeIndex = imageLinks.findIndex(function (link) {
      return link.classList.contains('is-active');
    });
    var targetIndex;
    if (direction === 'next') {
      targetIndex = (activeIndex + 1) % imageLinks.length;
    } else if (direction === 'previous') {
      targetIndex = (activeIndex - 1 + imageLinks.length) % imageLinks.length;
    }
    if (targetIndex === 0) {
      document.querySelector('.slidePrevBtn').style.display = 'none';
    } else {
      document.querySelector('.slidePrevBtn').style.display = 'block';
    }
    if (targetIndex === imageLinks.length - 1) {
      document.querySelector('.slideNextBtn').style.display = 'none';
    } else {
      document.querySelector('.slideNextBtn').style.display = 'block';
    }
    if (targetIndex === imageLinks.length - 1) {
      $(this.carousel).slick('slickNext');
    } else {
      $(this.carousel).slick('slickGoTo', targetIndex);
    }
    imageLinks[targetIndex].click();
  };
  _proto.hideCarousel = function hideCarousel() {
    this.carousel.style.visibility = 'hidden';
    this.arrowWrap.setAttribute('hidden', '');
  };
  _proto.showCarousel = function showCarousel() {
    this.carousel.style.visibility = 'visible';
    this.arrowWrap.removeAttribute('hidden');
  };
  return YSWProductGalleryController;
}();
function YSWProductGalleryControllerFactory(context) {
  if (this instanceof YSWProductGalleryController) {
    this.context = context;
  } else {
    return new YSWProductGalleryController(context);
  }
}

/***/ }),

/***/ "./assets/js/theme/ysw/controllers/generic-calculator.controller.js":
/*!**************************************************************************!*\
  !*** ./assets/js/theme/ysw/controllers/generic-calculator.controller.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YSWGenericPricingCalculatorFactory)
/* harmony export */ });
var YSWGenericPricingCalculator = /*#__PURE__*/function () {
  function YSWGenericPricingCalculator(context) {
    this.context = context;
    this.productPrices = null;
    this.priceValue = null;
    this.originalPrice = null;
    this.bulkDiscountRates = null;
    this.optionSelected = '';
    this.customFields = this.context.customFields || [];
    this.squareFootageId = Number(this.context.squareFootageId);
    this.init();
  }
  var _proto = YSWGenericPricingCalculator.prototype;
  _proto.init = function init() {
    var _this = this;
    var product = this.context.product;
    var calculator = document.querySelector('.productView--generic-calculator');
    if (!product || !product.bulk_discount_rates || !calculator) return;
    this.productPrices = document.querySelectorAll('#productView-details [data-product-price-without-tax]');
    this.priceValue = Number(this.productPrices[0].textContent.split('$')[1]);
    this.originalPrice = Number(this.productPrices[0].textContent.split('$')[1]);
    var bulkDiscountRates = product.bulk_discount_rates;
    this.bulkDiscountRates = bulkDiscountRates;
    var addToCardWrapper = document.getElementById('productView-details');
    var descButton = addToCardWrapper.querySelector('[data-action="dec"]');
    var incButton = addToCardWrapper.querySelector('[data-action="inc"]');
    var qtyInput = addToCardWrapper.querySelector('#numberOfPanels');
    var calculateBtn = addToCardWrapper.querySelector('#calculateSquareFt');
    this.changeOptionEvent();
    this.getOptionSize();
    incButton.addEventListener('click', function () {
      _this.updatePrice(bulkDiscountRates);
    });
    descButton.addEventListener('click', function () {
      _this.updatePrice(bulkDiscountRates);
    });
    if (qtyInput) {
      qtyInput.addEventListener('input', function () {
        _this.updatePrice(bulkDiscountRates);
      });
    }
    if (calculateBtn) {
      calculateBtn.addEventListener('click', function () {
        _this.updatePrice(bulkDiscountRates);
      });
    }
    var options = {
      attributes: true,
      childList: true,
      subtree: true
    };
    var flag = false;
    var callback = function callback(mutationList) {
      mutationList.forEach(function (mutation) {
        var mHasAttribute = mutation.target.hasAttribute('data-product-price-without-tax');
        if (mutation.type === 'childList' && mHasAttribute && flag) {
          _this.priceValue = Number(mutation.target.textContent.split('$')[1]);
          _this.originalPrice = _this.priceValue;
          flag = false;
        }
      });
    };
    var observer = new MutationObserver(callback);
    var previewProduct = document.getElementById('productView-details');
    var price = previewProduct.querySelector('[data-product-price-without-tax]');
    var observerPrice = new MutationObserver(function (e) {
      flag = true;
    });
    observerPrice.observe(price, {
      characterData: true,
      childList: true
    });
    observer.observe(previewProduct, options);
  };
  _proto.calculatePrice = function calculatePrice(price, discount) {
    return Math.round((price - price * discount / 100) * 100) / 100;
  };
  _proto.updatePrice = function updatePrice(bulkDiscountRates) {
    var _this2 = this;
    if (this.optionList[this.optionSelected] && this.optionList[this.optionSelected].value === 'quote') return;
    var quantity = document.getElementById('numberOfPanels');
    var quantityValue = Number(quantity.value);
    var check = false;
    var discontValue = 0;
    for (var i = 0; i < bulkDiscountRates.length; i++) {
      var discount = bulkDiscountRates[i];
      if (discount.min <= quantityValue && quantityValue <= (discount.max || quantityValue + 1)) {
        check = true;
        discontValue = discount.discount.value;
        break;
      }
    }
    if (!check) {
      this.productPrices.forEach(function (productPrice) {
        productPrice.textContent = "$" + _this2.originalPrice.toFixed(2);
      });
    } else {
      var priceAfter = this.calculatePrice(Number(this.priceValue), discontValue).toFixed(2);
      var priceBefore = this.priceValue.toFixed(2);
      this.productPrices.forEach(function (productPrice) {
        productPrice.innerHTML = "\n                    <span class=\"ysw-js-price\">\n                        <span class=\"ysw-js-price__before\">\n                            $" + priceBefore + "\n                        </span>\n                        <span class=\"ysw-js-price__now\">\n                            $" + priceAfter + "\n                        </span>\n                    </span>";
      });
    }
  };
  _proto.changeOptionEvent = function changeOptionEvent() {
    var _this3 = this;
    var options = document.querySelectorAll('[data-product-option-change] [data-product-attribute]');
    var _option = Array.from(options).find(function (option) {
      var input = option.querySelector('input');
      if (!input) return null;
      var optionId = input.name.replace(/\D/g, '');
      if (!optionId) return null;
      if (Number(optionId) === Number(_this3.squareFootageId)) {
        return option;
      }
      return null;
    });
    if (!_option) return;
    _option.addEventListener('change', function (event) {
      var optionValue = event.target.value;
      if (!optionValue) return;
      _this3.optionSelected = optionValue;
    });
  };
  _proto.getOptionSize = function getOptionSize() {
    var _this4 = this;
    if (!this.context.productOptions) return;
    var productOptions = this.context.productOptions;
    var sizeOption = productOptions.find(function (option) {
      return option.id === Number(_this4.squareFootageId);
    });
    if (!sizeOption) {
      this.optionList = {
        "default": this.customFields.find(function (field) {
          return field.name.includes('square_footage');
        })
      };
      this.optionSelected = 'default';
      return;
    }
    var defaultOption = sizeOption.values.find(function (option) {
      return option.selected;
    });
    if (!defaultOption) return;
    var sqftValue = {};
    sizeOption.values.forEach(function (option) {
      sqftValue[option.id] = _this4.customFields.find(function (field) {
        return field.name.includes("square_footage[" + option.id + "]");
      });
    });
    this.optionSelected = defaultOption.id;
    this.optionList = sqftValue;
  };
  _proto.resetPrice = function resetPrice() {
    var _this5 = this;
    this.productPrices.forEach(function (productPrice) {
      productPrice.textContent = "$" + _this5.originalPrice.toFixed(2);
    });
  };
  return YSWGenericPricingCalculator;
}();
function YSWGenericPricingCalculatorFactory(context) {
  if (this instanceof YSWGenericPricingCalculator) {
    this.context = context;
  } else {
    return new YSWGenericPricingCalculator(context);
  }
}

/***/ }),

/***/ "./assets/js/theme/ysw/controllers/generic-sqft-calculator.controller.js":
/*!*******************************************************************************!*\
  !*** ./assets/js/theme/ysw/controllers/generic-sqft-calculator.controller.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YSWGenericSqftCalculatorFactory)
/* harmony export */ });
var YSWGenericSqftCalculator = /*#__PURE__*/function () {
  function YSWGenericSqftCalculator(context) {
    this.context = context;
    this.sqftInput = document.querySelector('#squareFootage');
    this.qtyInput = document.querySelector('#numberOfPanels');
    this.defaultQtyInput = document.getElementById('qty[]');
    this.coversSF = document.querySelector('.coversSF span.sfCount');
    this.calculateBtn = document.querySelector('#calculateSquareFt');
    this.incBtn = document.querySelector('.changePanelNumbers [data-action="inc"]');
    this.decBtn = document.querySelector('.changePanelNumbers [data-action="dec"]');
    this.optionSelected = '';
    this.bulkDiscount = null;
    this.sqft = 0;
    this.sizeOption = null;
    this.productDivOptions = this.context.productOptions;
    this.squareFootageId = this.context.squareFootageId;
    this.init();
  }
  var _proto = YSWGenericSqftCalculator.prototype;
  _proto.init = function init() {
    var _this = this;
    var _this$context = this.context,
      bulkDiscountRates = _this$context.bulkDiscountRates,
      customFields = _this$context.customFields;
    if (!bulkDiscountRates) return;
    this.bulkDiscount = bulkDiscountRates || [];
    this.customFields = customFields || [];
    var sqftField = null;
    sqftField = customFields.filter(function (field) {
      return field.name.includes('square_footage');
    });
    this.sqft = sqftField.length ? Number(sqftField[0].value) : 1;
    if (this.isCustomSize()) {
      this.getOptionSize();
      this.changeOptionEvent();
    } else {
      this.calculateSquareFt();
    }
    if (this.sqftInput) {
      this.sqftInput.addEventListener('keyup', function (e) {
        return _this.isNumber(e);
      });
      this.qtyInput.addEventListener('keyup', function (e) {
        var qty = e.target.value;
        _this.calculateSquareFtFromQty(qty);
      });
    }
    if (this.calculateBtn) {
      this.calculateBtn.addEventListener('click', function (e) {
        e.preventDefault();
        _this.calculateSquareFt();
      });
    }
    this.qtyInput.addEventListener('change', function () {
      return _this.setQuantityInDefaultInput();
    });
    this.incBtn.addEventListener('click', function (e) {
      return _this.changePanelValue(e, 'add');
    });
    this.decBtn.addEventListener('click', function (e) {
      return _this.changePanelValue(e, 'dec');
    });
  };
  _proto.calculateSquareFt = function calculateSquareFt() {
    if (!this.sqftInput) return;
    var sqftQuantity = this.sqftInput.value;
    if (!sqftQuantity) return;
    if (sqftQuantity > 0 && this.sqft > 0) {
      var numberOfPanels = Math.ceil(sqftQuantity / this.sqft);
      var coversSFQuantity = this.sqft * numberOfPanels;
      this.qtyInput.value = numberOfPanels;
      this.coversSF.innerHTML = coversSFQuantity.toFixed(1);
      this.showHideSavings(numberOfPanels);
    } else {
      this.qtyInput.value = 1;
      this.coversSF.innerHTML = this.sqft.toFixed(1);
      this.showHideSavings(1);
    }
  };
  _proto.calculateSquareFtFromQty = function calculateSquareFtFromQty(qty) {
    var numberOfPanels = qty;
    var coversSFQuantity = this.sqft * numberOfPanels;
    this.qtyInput.value = numberOfPanels;
    this.coversSF.innerHTML = coversSFQuantity.toFixed(1);
    this.showHideSavings(numberOfPanels);
  };
  _proto.changePanelValue = function changePanelValue(e, n) {
    e.preventDefault();
    var numberOfPanelsQuantity = this.qtyInput.value;
    if (n === 'add') {
      this.qtyInput.value = Number(numberOfPanelsQuantity) + 1;
    } else if (numberOfPanelsQuantity > 1) {
      this.qtyInput.value = Number(numberOfPanelsQuantity) - 1;
    }
    if (this.sqftInput) {
      this.calculateSquareFtFromQty(this.qtyInput.value);
    } else {
      this.setQuantityInDefaultInput();
      this.showHideSavings(this.qtyInput.value);
    }
  };
  _proto.isNumber = function isNumber(e) {
    return !isNaN(Number(e)); // eslint-disable-line
  };
  _proto.setQuantityInDefaultInput = function setQuantityInDefaultInput() {
    var qty = this.qtyInput.value || 1;
    this.defaultQtyInput.value = qty;
  };
  _proto.showHideSavings = function showHideSavings(qty) {
    if (!this.isNumber(qty)) return;
    var _qty = Number(qty);
    var discountPercent = document.querySelector('.discPercent');
    var discontWrapper = document.querySelector('.saveDiscount');
    var porcent = 0;
    this.defaultQtyInput.value = _qty;
    this.bulkDiscount.forEach(function (discount) {
      if (discount.min <= _qty && _qty <= (discount.max || _qty + 1)) {
        porcent = discount.discount.value;
      }
    });
    if (porcent > 0 && this.sqft !== 'quote') {
      discountPercent.innerHTML = porcent;
      discontWrapper.style.display = 'inline-block';
    } else {
      discontWrapper.style.display = 'none';
    }
  };
  _proto.isCustomSize = function isCustomSize() {
    var _this2 = this;
    return this.productDivOptions.find(function (option) {
      return option.id === Number(_this2.squareFootageId);
    });
  };
  _proto.getOptionSize = function getOptionSize() {
    var _this3 = this;
    if (!this.context.productOptions) return;
    var productOptions = this.context.productOptions;
    var sizeOption = productOptions.find(function (option) {
      return option.id === Number(_this3.squareFootageId);
    });
    if (!sizeOption) return;
    var defaultOption = sizeOption.values.find(function (option) {
      return option.selected;
    });
    if (!defaultOption) return;
    var sqftValue = {};
    sizeOption.values.forEach(function (option) {
      sqftValue[option.id] = _this3.customFields.find(function (field) {
        return field.name.includes("square_footage[" + option.id + "]");
      });
    });
    this.sizeOption = sizeOption.values;
    this.optionSelected = sizeOption.values.find(function (option) {
      return option.selected;
    }).id || sizeOption.values[0].id;
    this.sqft = sqftValue[defaultOption.id].value;
    this.coversSF.innerHTML = Number(this.sqft).toFixed(1);
  };
  _proto.changeOptionEvent = function changeOptionEvent() {
    var _this4 = this;
    var options = document.querySelectorAll('[data-product-option-change] [data-product-attribute]');
    var _option = Array.from(options).find(function (option) {
      var input = option.querySelector('input');
      input = input ? input : option.querySelector('select');
      if (!input) return null;
      var optionId = input.name.replace(/\D/g, '');
      if (!optionId) return null;
      if (Number(optionId) === Number(_this4.squareFootageId)) {
        return option;
      }
      return null;
    });
    if (!_option) return;
    _option.addEventListener('change', function (event) {
      var optionValue = event.target.value;
      if (!optionValue) return;
      _this4.optionSelected = optionValue;
      _this4.changeOptionSize(optionValue);
    });
  };
  _proto.changeOptionSize = function changeOptionSize(value) {
    var _this5 = this;
    var sqftValue = {};
    this.sizeOption.forEach(function (option) {
      sqftValue[option.id] = _this5.customFields.find(function (field) {
        return field.name.includes("square_footage[" + option.id + "]");
      });
    });
    this.sqft = sqftValue[value] ? sqftValue[value].value : 0;
    if (!sqftValue[value] || sqftValue[value].value === 'quote') return;
    this.coversSF.innerHTML = Number(sqftValue[value].value).toFixed(1);
    this.calculateSquareFtFromQty(this.qtyInput.value);
  };
  return YSWGenericSqftCalculator;
}();
function YSWGenericSqftCalculatorFactory(context) {
  if (this instanceof YSWGenericSqftCalculator) {
    this.context = context;
  } else {
    return new YSWGenericSqftCalculator(context);
  }
}

/***/ }),

/***/ "./assets/js/theme/ysw/product.js":
/*!****************************************!*\
  !*** ./assets/js/theme/ysw/product.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YSWProductFactory)
/* harmony export */ });
/* harmony import */ var _components_pricing_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pricing-calculator */ "./assets/js/theme/ysw/components/pricing-calculator.js");
/* harmony import */ var _controllers_generic_calculator_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/generic-calculator.controller */ "./assets/js/theme/ysw/controllers/generic-calculator.controller.js");
/* harmony import */ var _controllers_generic_sqft_calculator_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/generic-sqft-calculator.controller */ "./assets/js/theme/ysw/controllers/generic-sqft-calculator.controller.js");
/* harmony import */ var _components_table_pricing_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/table-pricing-calculator */ "./assets/js/theme/ysw/components/table-pricing-calculator.js");
/* harmony import */ var _components_car_package__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/car-package */ "./assets/js/theme/ysw/components/car-package.js");
/* harmony import */ var _components_control_graphics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/control-graphics */ "./assets/js/theme/ysw/components/control-graphics.js");
/* harmony import */ var _components_timberwool_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/timberwool-calculator */ "./assets/js/theme/ysw/components/timberwool-calculator.js");
/* harmony import */ var _components_timberwool_sample_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/timberwool-sample-modal */ "./assets/js/theme/ysw/components/timberwool-sample-modal.js");
/* harmony import */ var _controllers_gallery_controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controllers/gallery.controller */ "./assets/js/theme/ysw/controllers/gallery.controller.js");
/* harmony import */ var _components_celluzorbe_v3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/celluzorbe-v3 */ "./assets/js/theme/ysw/components/celluzorbe-v3.js");










var YSWProduct = /*#__PURE__*/function () {
  function YSWProduct(context) {
    this.context = context;
    this.init();
  }
  var _proto = YSWProduct.prototype;
  _proto.init = function init() {
    (0,_controllers_generic_sqft_calculator_controller__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    (0,_controllers_generic_calculator_controller__WEBPACK_IMPORTED_MODULE_1__["default"])(this.context);
    (0,_components_pricing_calculator__WEBPACK_IMPORTED_MODULE_0__["default"])(this.context);
    (0,_components_table_pricing_calculator__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context);
    (0,_components_car_package__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_components_control_graphics__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_components_timberwool_calculator__WEBPACK_IMPORTED_MODULE_6__["default"])(this.context);
    (0,_components_timberwool_sample_modal__WEBPACK_IMPORTED_MODULE_7__["default"])(this.context);
    (0,_controllers_gallery_controller__WEBPACK_IMPORTED_MODULE_8__["default"])();
    (0,_components_celluzorbe_v3__WEBPACK_IMPORTED_MODULE_9__["default"])(this.context);
    this.gotoGuarantee();
    this.quoteBtnHandler();
    this.changeOptionEvent();
    this.clickColorOption();
  };
  _proto.clickColorOption = function clickColorOption() {
    var colorOptions = document.querySelector('.form-option-variant--color');
    if (colorOptions) {
      colorOptions.parentNode.previousElementSibling.click();
    }
  };
  _proto.gotoGuarantee = function gotoGuarantee() {
    var guarantee = document.querySelector('.productView-guarantee');
    if (!guarantee) return;
    guarantee.addEventListener('click', function (e) {
      e.preventDefault();
      var guaranteeSection = document.querySelector('#proGuarantee4429');
      if (!guaranteeSection) return;
      window.scrollBy(0, guaranteeSection.getBoundingClientRect().top - 100);
    });
  };
  _proto.quoteBtnHandler = function quoteBtnHandler() {
    var _this = this;
    var quoteCutoff = Number(this.context.quoteCutoff);
    if (Number.isNaN(quoteCutoff)) return;
    var qtyInput = document.querySelector('#numberOfPanels');
    if (!qtyInput) return;
    var numberOfPanels = qtyInput;
    var btnIncrease = document.querySelector('[data-action="inc"]');
    var btnDecrease = document.querySelector('[data-action="dec"]');
    var calculateSquareFt = document.querySelector('#calculateSquareFt');
    var buyNowBtn = document.querySelector('#btn-qn-buy-now');
    var addToCartBtn = document.querySelector('#btn-qn-add-to-cart');
    var arr = [buyNowBtn, addToCartBtn];
    if (!numberOfPanels || !btnIncrease || !btnDecrease || !calculateSquareFt || !arr.every(Boolean)) return;
    numberOfPanels.addEventListener('input', function () {
      var value = numberOfPanels.value;
      _this.handleQuoteBtnVisibility(value, quoteCutoff);
    });
    [btnIncrease, btnDecrease].forEach(function (btn) {
      btn.addEventListener('click', function () {
        var value = numberOfPanels.value;
        _this.handleQuoteBtnVisibility(value, quoteCutoff);
      });
    });
    if (calculateSquareFt) {
      calculateSquareFt.addEventListener('click', function () {
        var value = numberOfPanels.value;
        _this.handleQuoteBtnVisibility(value, quoteCutoff);
      });
    }
    window.missingOptionSelect = this.missingOptionSelect;
    arr.forEach(function (btn) {
      if (!btn) return;
      btn.addEventListener('click', function (e) {
        var value = qtyInput.value;
        if (value < quoteCutoff || !window.QN || !window.QN.add_product) return;
        if (_this.missingOptionSelect()) return;
        e.preventDefault();
        window.QN.add_product(null, false);
      });
    });
  };
  _proto.missingOptionSelect = function missingOptionSelect() {
    var productDivOptions = document.querySelectorAll('.productView-options [data-product-option-change] [data-product-attribute]');
    var flagDiv = false;
    if (!productDivOptions.length) {
      return flagDiv;
    }
    productDivOptions.forEach(function (option) {
      var options = option.querySelectorAll('input, select');
      var flagOptions = false;
      options.forEach(function (input) {
        if (input.required && (input.checked || input.tagName === 'SELECT' && input.value)) {
          flagOptions = true;
        }
      });
      if (!flagOptions) {
        flagDiv = true;
      }
    });
    return flagDiv;
  };
  _proto.handleQuoteBtnVisibility = function handleQuoteBtnVisibility(value, quoteCutoff) {
    if (this.optionSelected) {
      if (this.optionSelected.includes('Custom Sizes')) {
        return;
      }
    }
    var buyBtnsWrapperOrignal = document.querySelector('.buy-buttons--original');
    var buyBtnsWrapperQuote = document.querySelector('.buy-buttons--quote');
    if (value >= quoteCutoff) {
      buyBtnsWrapperOrignal.style.display = 'none';
      buyBtnsWrapperQuote.style.display = 'block';
      return;
    }
    buyBtnsWrapperOrignal.style.display = 'block';
    buyBtnsWrapperQuote.style.display = 'none';
  };
  _proto.changeOptionEvent = function changeOptionEvent() {
    var _this2 = this;
    var options = document.querySelectorAll('[data-product-option-change] [data-product-attribute="set-rectangle"]');
    options.forEach(function (option) {
      var labelEl = option.querySelector('label');
      if (!labelEl) return;
      var label = labelEl.innerText;
      if (!label.toLowerCase().includes('choose sizes')) return;
      option.addEventListener('change', function (e) {
        var _label = e.target.nextElementSibling;
        if (!_label) return;
        _this2.optionSelected = _label.innerText;
      });
    });
  };
  return YSWProduct;
}();
function YSWProductFactory(context) {
  if (this instanceof YSWProduct) {
    this.context = context;
  } else {
    return new YSWProduct(context);
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUVSLFNBQVNDLE1BQU1BLENBQUEsRUFBRztFQUM3QixJQUFJRCw2Q0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNFLElBQUksQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO0lBQy9DSCw2Q0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNJLElBQUksQ0FBQyxDQUFDO0VBQ25DO0FBQ0osQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUN1QjtBQUNrQjtBQUNGO0FBQ2U7QUFDQTtBQUNIO0FBQ0E7QUFDSDtBQUMyQjtBQUNOO0FBQ3ZCO0FBQUEsSUFFekJXLE9BQU8sMEJBQUFDLFlBQUE7RUFDeEIsU0FBQUQsUUFBWUUsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBRixZQUFBLENBQUFHLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0UsR0FBRyxHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSTtJQUMvQkwsS0FBQSxDQUFLTSxXQUFXLEdBQUd4Qiw2Q0FBQyxDQUFDLHNDQUFzQyxDQUFDO0lBQUMsT0FBQWtCLEtBQUE7RUFDakU7RUFBQ08sY0FBQSxDQUFBVixPQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBVSxNQUFBLEdBQUFYLE9BQUEsQ0FBQVksU0FBQTtFQUFBRCxNQUFBLENBRURFLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFBQSxJQUFBQyxNQUFBO0lBQ047SUFDQTdCLDZDQUFDLENBQUM4QixRQUFRLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLG9CQUFvQixFQUFFLFlBQU07TUFDdkMsSUFBSUYsTUFBSSxDQUFDVCxHQUFHLENBQUNZLE9BQU8sQ0FBQyxlQUFlLENBQUMs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O0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUE3QixVQUFBO0FBQUE7QUFHVSxTQUFTemMsaUJBQWlCQSxDQUFDRyxPQUFPLEVBQUU7RUFDL0MsSUFBSSxJQUFJLFlBQVlzYyxVQUFVLEVBQUU7SUFDNUIsSUFBSSxDQUFDdGMsT0FBTyxHQUFHQSxPQUFPO0VBQzFCLENBQUMsTUFBTTtJQUNILE9BQU8sSUFBSXNjLFVBQVUsQ0FBQ3RjLE9BQU8sQ0FBQztFQUNsQztBQUNKLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS9hdGhsZXRpYy9wcm9kdWN0LmpzIiwid2VicGFjazovL3NlY29uZC1za2luLWF1ZGlvLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vc2Vjb25kLXNraW4tYXVkaW8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC9jb3ZlcmFnZS1jYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3NlY29uZC1za2luLWF1ZGlvLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3NxLWZ0LWNhbGMuanMiLCJ3ZWJwYWNrOi8vc2Vjb25kLXNraW4tYXVkaW8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC92aWRlby1nYWxsZXJ5LmpzIiwid2VicGFjazovL3NlY29uZC1za2luLWF1ZGlvLy4vYXNzZXRzL2pzL3RoZW1lL3lzdy9jb21wb25lbnRzL2Nhci1wYWNrYWdlLmpzIiwid2VicGFjazovL3NlY29uZC1za2luLWF1ZGlvLy4vYXNzZXRzL2pzL3RoZW1lL3lzdy9jb21wb25lbnRzL2NlbGx1em9yYmUtdjMuanMiLCJ3ZWJwYWNrOi8vc2Vjb25kLXNraW4tYXVkaW8vLi9hc3NldHMvanMvdGhlbWUveXN3L2NvbXBvbmVudHMvY29udHJvbC1ncmFwaGljcy5qcyIsIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS95c3cvY29tcG9uZW50cy9wcmljaW5nLWNhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vc2Vjb25kLXNraW4tYXVkaW8vLi9hc3NldHMvanMvdGhlbWUveXN3L2NvbXBvbmVudHMvdGFibGUtcHJpY2luZy1jYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3NlY29uZC1za2luLWF1ZGlvLy4vYXNzZXRzL2pzL3RoZW1lL3lzdy9jb21wb25lbnRzL3RpbWJlcndvb2wtY2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS95c3cvY29tcG9uZW50cy90aW1iZXJ3b29sLXNhbXBsZS1tb2RhbC5qcyIsIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS95c3cvY29udHJvbGxlcnMvZ2FsbGVyeS5jb250cm9sbGVyLmpzIiwid2VicGFjazovL3NlY29uZC1za2luLWF1ZGlvLy4vYXNzZXRzL2pzL3RoZW1lL3lzdy9jb250cm9sbGVycy9nZW5lcmljLWNhbGN1bGF0b3IuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS95c3cvY29udHJvbGxlcnMvZ2VuZXJpYy1zcWZ0LWNhbGN1bGF0b3IuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS95c3cvcHJvZHVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkZWQoKSB7XG4gICAgaWYgKCQoJyN0YWItc3BlY2lmaWNhdGlvbnMnKS50ZXh0KCkudHJpbSgpICE9PSAnJykge1xuICAgICAgICAkKCcudGFiLWhlYWRpbmctLXNwZWNzJykuc2hvdygpO1xuICAgIH1cbn1cbiIsIi8qXG4gSW1wb3J0IGFsbCBwcm9kdWN0IHNwZWNpZmljIGpzXG4gKi9cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IFJldmlldyBmcm9tICcuL3Byb2R1Y3QvcmV2aWV3cyc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xuaW1wb3J0IHZpZGVvR2FsbGVyeSBmcm9tICcuL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeSc7XG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0gfSBmcm9tICcuL2NvbW1vbi9mb3JtLXV0aWxzJztcbmltcG9ydCBhdGhsZXRpY0xvYWRlZCBmcm9tICcuL2F0aGxldGljL3Byb2R1Y3QnO1xuaW1wb3J0IGhhbmRsZUNvdmVyYWdlQ2FsY3VsYXRvclN1Ym1pdCBmcm9tICcuL3Byb2R1Y3QvY292ZXJhZ2UtY2FsY3VsYXRvcic7XG5pbXBvcnQgaW5pdGlhbGl6ZVNxdWFyZUZvb3RhZ2VDYWxjdWxhdG9yIGZyb20gJy4vcHJvZHVjdC9zcS1mdC1jYWxjJztcbmltcG9ydCBZU1dQcm9kdWN0RmFjdG9yeSBmcm9tICcuL3lzdy9wcm9kdWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB0aGlzLiRyZXZpZXdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICAvLyBMaXN0ZW4gZm9yIGZvdW5kYXRpb24gbW9kYWwgY2xvc2UgZXZlbnRzIHRvIHNhbml0aXplIFVSTCBhZnRlciByZXZpZXcuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbG9zZS5mbmR0bi5yZXZlYWwnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSAmJiB0eXBlb2Ygd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdmFsaWRhdG9yO1xuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscyA9IG5ldyBQcm9kdWN0RGV0YWlscygkKCcucHJvZHVjdFZpZXcnKSwgdGhpcy5jb250ZXh0LCB3aW5kb3cuQkNEYXRhLnByb2R1Y3RfYXR0cmlidXRlcyk7XG5cbiAgICAgICAgdmlkZW9HYWxsZXJ5KCk7XG5cbiAgICAgICAgaGFuZGxlQ292ZXJhZ2VDYWxjdWxhdG9yU3VibWl0KCk7XG5cbiAgICAgICAgaW5pdGlhbGl6ZVNxdWFyZUZvb3RhZ2VDYWxjdWxhdG9yKCk7XG5cbiAgICAgICAgY29uc3QgJHJldmlld0Zvcm0gPSBjbGFzc2lmeUZvcm0oJy53cml0ZVJldmlldy1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHJldmlldyA9IG5ldyBSZXZpZXcoJHJldmlld0Zvcm0pO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nLCAoKSA9PiB7XG4gICAgICAgICAgICB2YWxpZGF0b3IgPSByZXZpZXcucmVnaXN0ZXJWYWxpZGF0aW9uKHRoaXMuY29udGV4dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBhdGhsZXRpY0xvYWRlZCgpO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdFJldmlld0hhbmRsZXIoKTtcblxuICAgICAgICBZU1dQcm9kdWN0RmFjdG9yeSh0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIHByb2R1Y3RSZXZpZXdIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kcmV2aWV3TGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gY292ZXJhZ2UgY2FsY3VsYXRvciBvbiBhY291c3RpYyBwcm9kdWN0IHBhZ2VzXG5mdW5jdGlvbiBjYWxjdWxhdGUoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGVkLXJlc3VsdHMnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvbnN0IGJhc2VNc2cgPSAnPHN0cm9uZz5Db3ZlcmFnZTogPHNwYW4gY2xhc3M9XCJyZWNvbW1lbmRlZC1jb3ZlcmFnZVwiPjwvc3Bhbj4gU3EgRnQ8L3N0cm9uZz48YnIgLz48YnIgLz5Zb3UgbmVlZCA8c3Ryb25nPjxzcGFuIGNsYXNzPVwicmVjb21tZW5kZWQtbnVtYmVyXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cInBhbmVsLXR5cGVcIj48L3NwYW4+IHBhbmVsczwvc3Ryb25nPiB0byBnZXQgdGhlIDxzcGFuIGNsYXNzPVwiY292ZXJhZ2UtZGVzY3JpcHRpb25cIj48L3NwYW4+IDxzcGFuIGNsYXNzPVwiY292ZXJhZ2UtYW1vdW50XCI+PC9zcGFuPiUgY292ZXJhZ2UgaW4geW91ciA8c3BhbiBjbGFzcz1cImNvdmVyYWdlLWxlbmd0aFwiPjwvc3Bhbj4gZnQgYnkgPHNwYW4gY2xhc3M9XCJjb3ZlcmFnZS13aWR0aFwiPjwvc3Bhbj4gZnQgcm9vbS4nO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRlZC1yZXN1bHRzJykuaW5uZXJIVE1MID0gYmFzZU1zZztcblxuICBjb25zdCByb29tVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb29tLXR5cGUnKS52YWx1ZTtcbiAgbGV0IHJvb21MZW5ndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vbS1sZW5ndGgnKS52YWx1ZTtcbiAgbGV0IHJvb21XaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb29tLXdpZHRoJykudmFsdWU7XG4gIGxldCByb29tSGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb20taGVpZ2h0JykudmFsdWU7XG5cbiAgaWYgKHJvb21UeXBlLmxlbmd0aCA9PT0gMCB8fCByb29tTGVuZ3RoLmxlbmd0aCA9PT0gMCB8fCByb29tV2lkdGgubGVuZ3RoID09PSAwIHx8IHJvb21IZWlnaHQubGVuZ3RoID09PSAwICkge1xuICAgIGFsZXJ0KCdBbGwgZmllbGRzIHJlcXVpcmVkLicpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJvb21MZW5ndGggPSBwYXJzZUludChyb29tTGVuZ3RoKTtcbiAgcm9vbVdpZHRoID0gcGFyc2VJbnQocm9vbVdpZHRoKTtcbiAgcm9vbUhlaWdodCA9IHBhcnNlSW50KHJvb21IZWlnaHQpO1xuXG4gIGNvbnN0IHNxRm9vdGFnZSA9IHJvb21MZW5ndGggKiByb29tV2lkdGg7XG5cbiAgaWYgKHNxRm9vdGFnZSA+PSA0MDApIHtcbiAgICBjb25zdCBtc2cgPSAnPHAgY2xhc3M9XCJtZXNzYWdlXCI+VGhpcyByb29tIGlzIHRvbyBiaWcuIFBsZWFzZSBjb250YWN0IHVzIGZvciBhIGN1c3RvbSBxdW90ZS48cD48cCBjbGFzcz1cImljb24tcGhvbmVcIj48L3A+PHAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIj48YSBocmVmPVwidGVsOjEtODAwLTY3OS04NTExXCI+MS04MDAtNjc5LTg1MTE8L2E+PC9wPjxzcGFuIGNsYXNzPVwiaWNvbi1lbWFpbFwiPjwvc3Bhbj48cD48YSBocmVmPVwibWFpbHRvOnNlcnZpY2VAc2Vjb25kc2tpbmF1ZGlvLmNvbVwiPnNlcnZpY2VAc2Vjb25kc2tpbmF1ZGlvLmNvbTwvYT48cD4nO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGVkLXJlc3VsdHMnKS5pbm5lckhUTUwgPSBtc2c7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0ZWQtcmVzdWx0cycpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKCdzcSBmb290YWdlJywgc3FGb290YWdlKTtcbiAgaWYgKHJvb21IZWlnaHQgPiAxMikge1xuICAgIGNvbnN0IG1zZyA9ICc8cCBjbGFzcz1cIm1lc3NhZ2VcIj5UaGlzIGNlaWxpbmcgaXMgdG9vIGhpZ2guIFBsZWFzZSBjb250YWN0IHVzIGZvciBhIGN1c3RvbSBxdW90ZS48cD48cCBjbGFzcz1cImljb24tcGhvbmVcIj48L3A+PHAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIj48YSBocmVmPVwidGVsOjEtODAwLTY3OS04NTExXCI+MS04MDAtNjc5LTg1MTE8L2E+PC9wPjxzcGFuIGNsYXNzPVwiaWNvbi1lbWFpbFwiPjwvc3Bhbj48cD48YSBocmVmPVwibWFpbHRvOnNlcnZpY2VAc2Vjb25kc2tpbmF1ZGlvLmNvbVwiPnNlcnZpY2VAc2Vjb25kc2tpbmF1ZGlvLmNvbTwvYT48cD4nO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGVkLXJlc3VsdHMnKS5pbm5lckhUTUwgPSBtc2c7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0ZWQtcmVzdWx0cycpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBnZXQgc2hhcGUgc28gd2UgY2FuIGZpZ3VyZSBvdXQgaG93IG1hbnkgbmVlZGVkXG4gIGxldCBzaGFwZTtcbiAgY29uc3Qgc2hhcGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3NoYXBlJyk7IFxuICAgICAgICAgICAgICBcbiAgZm9yKGxldCBpID0gMDsgaSA8IHNoYXBlcy5sZW5ndGg7IGkrKykgeyBcbiAgICBpZihzaGFwZXNbaV0uY2hlY2tlZCkgXG4gICAgc2hhcGUgPSBzaGFwZXNbaV0udmFsdWU7IFxuICB9IFxuICAvLyBjb25zb2xlLmxvZygnc2hhcGUnLCBzaGFwZSk7XG5cbiAgY29uc3QgY292ZXJhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2NvdmVyYWdlJyk7XG4gIGNvbnN0IGNvdmVyYWdlQW1vdW50ID0gY292ZXJhZ2VzWzBdLmNoZWNrZWQgPyBjb3ZlcmFnZXNbMF0udmFsdWUgOiBjb3ZlcmFnZXNbMV0udmFsdWU7XG4gIGNvbnN0IGNvdmVyYWdlUGVyY2VudGFnZSA9IGNvdmVyYWdlQW1vdW50ICogLjAxO1xuICAvLyBjb25zb2xlLmxvZygnY292ZXJhZ2VQZXJjZW50YWdlJywgY292ZXJhZ2VQZXJjZW50YWdlKTtcblxuICAvLyBmaWd1cmUgb3V0IGhvdyBtdWNoIHNxdWFyZSBmb290YWdlIGVhY2ggc2hhcGUgZ2l2ZXMgdXNcbiAgbGV0IHNxRnRQZXJQYW5lbDtcbiAgaWYoc2hhcGUgPT09ICdyZWN0YW5nbGUnKSB7XG4gICAgc3FGdFBlclBhbmVsID0gODtcbiAgfSBlbHNlIHtcbiAgICBzcUZ0UGVyUGFuZWwgPSA0O1xuICB9XG5cbiAgY29uc3QgcGFuZWxTcUZ0TmVlZGVkID0gc3FGb290YWdlICogY292ZXJhZ2VQZXJjZW50YWdlO1xuICAvLyB3ZSB3YW50IGEgd2hvbGUgbnVtYmVyIHRoYXQgaXMgZGl2aXNpYmxlIGJ5IHRoZSBzcUZ0UGVyUGFuZWxcbiAgY29uc3QgZGl2aXNvciA9IE1hdGguZmxvb3IocGFuZWxTcUZ0TmVlZGVkIC8gc3FGdFBlclBhbmVsKTtcbiAgY29uc3QgcGFuZWxTcUZ0QXBwcm94ID0gZGl2aXNvciAqIHNxRnRQZXJQYW5lbDtcblxuICAvLyBwYW5lbHMgbmVlZGVkID1cbiAgY29uc3QgcGFuZWxzTmVlZGVkID0gTWF0aC5yb3VuZChwYW5lbFNxRnRBcHByb3ggLyBzcUZ0UGVyUGFuZWwpO1xuICAvLyBjb25zb2xlLmxvZygncGFuZWxzTmVlZGVkJywgcGFuZWxzTmVlZGVkKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjb21tZW5kZWQtY292ZXJhZ2UnKS5pbm5lckhUTUwgPSBwYW5lbFNxRnRBcHByb3g7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvbW1lbmRlZC1udW1iZXInKS5pbm5lckhUTUwgPSBwYW5lbHNOZWVkZWQ7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYW5lbC10eXBlJykuaW5uZXJIVE1MID0gc2hhcGU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcmFnZS1kZXNjcmlwdGlvbicpLmlubmVySFRNTCA9IGNvdmVyYWdlQW1vdW50ID09PSAyNSA/ICdtaW5pbXVtJyA6ICdyZWNvbW1lbmRlZCc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcmFnZS1hbW91bnQnKS5pbm5lckhUTUwgPSBjb3ZlcmFnZUFtb3VudDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyYWdlLXdpZHRoJykuaW5uZXJIVE1MID0gcm9vbVdpZHRoO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY292ZXJhZ2UtbGVuZ3RoJykuaW5uZXJIVE1MID0gcm9vbUxlbmd0aDtcbiAgXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGVkLXJlc3VsdHMnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICByZXR1cm4gZmFsc2U7XG59XG5cblxuXG5mdW5jdGlvbiBoYW5kbGVDb3ZlcmFnZUNhbGN1bGF0b3JTdWJtaXQoKSB7XG4gIGNvbnN0IGNhbGN1bGF0b3JUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyYWdlLWNhbGN1bGF0b3InKTtcbiAgaWYoY2FsY3VsYXRvclRyaWdnZXIpIHtcbiAgICBjYWxjdWxhdG9yVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGNhbGN1bGF0ZSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUNvdmVyYWdlQ2FsY3VsYXRvclN1Ym1pdDtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHsgQ29sbGFwc2libGVFdmVudHMgfSBmcm9tICcuLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoJHJldmlld0Zvcm0pIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkcmV2aWV3Rm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHJldmlld3NDb250ZW50ID0gJCgnI3Byb2R1Y3QtcmV2aWV3cycpO1xuICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZSA9ICQoJ1tkYXRhLWNvbGxhcHNpYmxlXScsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICB0aGlzLmluaXRMaW5rQmluZCgpO1xuICAgICAgICB0aGlzLmluamVjdFBhZ2luYXRpb25MaW5rKCk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VSZXZpZXdzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gaW5pdGlhbCBwYWdlIGxvYWQsIHRoZSB1c2VyIGNsaWNrcyBvbiBcIigxMiBSZXZpZXdzKVwiIGxpbmtcbiAgICAgKiBUaGUgYnJvd3NlciBqdW1wcyB0byB0aGUgcmV2aWV3IHBhZ2UgYW5kIHNob3VsZCBleHBhbmQgdGhlIHJldmlld3Mgc2VjdGlvblxuICAgICAqL1xuICAgIGluaXRMaW5rQmluZCgpIHtcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkKCcjcHJvZHVjdFJldmlld3MtY29udGVudCcsIHRoaXMuJHJldmlld3NDb250ZW50KTtcbiAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXJldmlld0xpbmsgYScpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJldmlld3NUYWIgPSAkY29udGVudC5wYXJlbnRzKCcudGFiLWNvbnRlbnQ6Zmlyc3QnKTtcbiAgICAgICAgICAgIGlmICghcmV2aWV3c1RhYi5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAkKCcucmV2aWV3LXRhYiBhJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VSZXZpZXdzKCkge1xuICAgICAgICAvLyBXZSdyZSBpbiBwYWdpbmF0aW5nIHN0YXRlLCBkbyBub3QgY29sbGFwc2VcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJyNwcm9kdWN0LXJldmlld3MnKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2UgY29sbGFwc2Ugb24gcGFnZSBsb2FkXG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluamVjdCBJRCBpbnRvIHRoZSBwYWdpbmF0aW9uIGxpbmtcbiAgICAgKi9cbiAgICBpbmplY3RQYWdpbmF0aW9uTGluaygpIHtcbiAgICAgICAgY29uc3QgJG5leHRMaW5rID0gJCgnLnBhZ2luYXRpb24taXRlbS0tbmV4dCAucGFnaW5hdGlvbi1saW5rJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuICAgICAgICBjb25zdCAkcHJldkxpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1wcmV2aW91cyAucGFnaW5hdGlvbi1saW5rJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgIGlmICgkbmV4dExpbmsubGVuZ3RoKSB7XG4gICAgICAgICAgICAkbmV4dExpbmsuYXR0cignaHJlZicsIGAkeyRuZXh0TGluay5hdHRyKCdocmVmJyl9ICNwcm9kdWN0LXJldmlld3NgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcHJldkxpbmsubGVuZ3RoKSB7XG4gICAgICAgICAgICAkcHJldkxpbmsuYXR0cignaHJlZicsIGAkeyRwcmV2TGluay5hdHRyKCdocmVmJyl9ICNwcm9kdWN0LXJldmlld3NgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyVmFsaWRhdGlvbihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yLmFkZChbe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnJhdGluZ1wiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld1JhdGluZyxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnRpdGxlXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3U3ViamVjdCxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnRleHRcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdDb21tZW50LFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwiZW1haWxcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcbiAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld0VtYWlsLFxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgfVxufVxuIiwiLy8gaW5pdGlhbGl6ZSBnbG9iYWwgY2FsY3VsYXRpb24gdmFyaWFibGVzXG5sZXQgYXJlYUFycmF5ID0gW107XG5sZXQgdmVoaWNsZUNsYXNzID0gJyc7XG5sZXQgdG90YWxTcUZ0ID0gMDtcbi8vIGRhdGEgZm9yIGZhbmN5IG1hdGggdG8gY2FsY3VsYXRlIHNxdWFyZSB3aWR0aCB1c2luZyBzcXVhcmUgd2lkdGggKGFkZGl0aW9uKVxuY29uc3QgRGF0YSA9IHtcbiAgICBcIjJkY2FyXCI6IHtcbiAgICAgICAgXCJmbG9vclwiOiAyMCxcbiAgICAgICAgXCJkb29yc1wiOiAxMixcbiAgICAgICAgXCJyb29mXCI6IDE0LFxuICAgICAgICBcImZpcmV3YWxsXCI6IDEwLFxuICAgICAgICBcInRydW5rXCI6IDE2LFxuICAgICAgICBcImhvb2RcIjogMTIsXG4gICAgICAgIFwid2hlZWwtd2VsbHNcIjogMjQsXG4gICAgICAgIFwidW5kZXJjYXJyaWFnZVwiOiA0NVxuICAgIH0sXG4gICAgXCI0ZGNhclwiOiB7XG4gICAgICAgIFwiZmxvb3JcIjogMjIsXG4gICAgICAgIFwiZG9vcnNcIjogMjQsXG4gICAgICAgIFwicm9vZlwiOiAxNixcbiAgICAgICAgXCJmaXJld2FsbFwiOiAxMCxcbiAgICAgICAgXCJ0cnVua1wiOiAxOCxcbiAgICAgICAgXCJob29kXCI6IDEyLFxuICAgICAgICBcIndoZWVsLXdlbGxzXCI6IDI0LFxuICAgICAgICBcInVuZGVyY2FycmlhZ2VcIjogNTBcbiAgICB9LFxuICAgIFwibWlkY2FyXCI6IHtcbiAgICAgICAgXCJmbG9vclwiOiAyNixcbiAgICAgICAgXCJkb29yc1wiOiAyNixcbiAgICAgICAgXCJyb29mXCI6IDE4LFxuICAgICAgICBcImZpcmV3YWxsXCI6IDEyLFxuICAgICAgICBcInRydW5rXCI6IDIyLFxuICAgICAgICBcImhvb2RcIjogMTQsXG4gICAgICAgIFwid2hlZWwtd2VsbHNcIjogMjQsXG4gICAgICAgIFwidW5kZXJjYXJyaWFnZVwiOiA1NVxuICAgIH0sXG4gICAgXCJmdWxsY2FyXCI6IHtcbiAgICAgICAgXCJmbG9vclwiOiAyOCxcbiAgICAgICAgXCJkb29yc1wiOiAyNixcbiAgICAgICAgXCJyb29mXCI6IDIwLFxuICAgICAgICBcImZpcmV3YWxsXCI6IDEyLFxuICAgICAgICBcInRydW5rXCI6IDI2LFxuICAgICAgICBcImhvb2RcIjogMTQsXG4gICAgICAgIFwid2hlZWwtd2VsbHNcIjogMjQsXG4gICAgICAgIFwidW5kZXJjYXJyaWFnZVwiOiA2MFxuICAgIH0sXG4gICAgXCIyZHRydWNrXCI6IHtcbiAgICAgICAgXCJmbG9vclwiOiAyMCxcbiAgICAgICAgXCJkb29yc1wiOiAxNCxcbiAgICAgICAgXCJyb29mXCI6IDE0LFxuICAgICAgICBcImZpcmV3YWxsXCI6IDEwLFxuICAgICAgICBcInRydW5rXCI6IDAsXG4gICAgICAgIFwiaG9vZFwiOiAxNCxcbiAgICAgICAgXCJ3aGVlbC13ZWxsc1wiOiAyOCxcbiAgICAgICAgXCJ1bmRlcmNhcnJpYWdlXCI6IDM2XG4gICAgfSxcbiAgICBcIjRkdHJ1Y2tcIjoge1xuICAgICAgICBcImZsb29yXCI6IDI4LFxuICAgICAgICBcImRvb3JzXCI6IDI0LFxuICAgICAgICBcInJvb2ZcIjogMjIsXG4gICAgICAgIFwiZmlyZXdhbGxcIjogMTIsXG4gICAgICAgIFwidHJ1bmtcIjogMCxcbiAgICAgICAgXCJob29kXCI6IDE0LFxuICAgICAgICBcIndoZWVsLXdlbGxzXCI6IDI4LFxuICAgICAgICBcInVuZGVyY2FycmlhZ2VcIjogNDVcbiAgICB9LFxuICAgIFwiamVlcFwiOiB7XG4gICAgICAgIFwiZmxvb3JcIjogMjQsXG4gICAgICAgIFwiZG9vcnNcIjogMjIsXG4gICAgICAgIFwicm9vZlwiOiAyMixcbiAgICAgICAgXCJmaXJld2FsbFwiOiAxMCxcbiAgICAgICAgXCJ0cnVua1wiOiAyNCxcbiAgICAgICAgXCJob29kXCI6IDE0LFxuICAgICAgICBcIndoZWVsLXdlbGxzXCI6IDI4LFxuICAgICAgICBcInVuZGVyY2FycmlhZ2VcIjogNThcbiAgICB9LFxuICAgIFwiY29tcGFjdFNVVlwiOiB7XG4gICAgICAgIFwiZmxvb3JcIjogMjgsXG4gICAgICAgIFwiZG9vcnNcIjogMjYsXG4gICAgICAgIFwicm9vZlwiOiAyNCxcbiAgICAgICAgXCJmaXJld2FsbFwiOiAxMixcbiAgICAgICAgXCJ0cnVua1wiOiAzMCxcbiAgICAgICAgXCJob29kXCI6IDE0LFxuICAgICAgICBcIndoZWVsLXdlbGxzXCI6IDI4LFxuICAgICAgICBcInVuZGVyY2FycmlhZ2VcIjogNjVcbiAgICB9LFxuICAgIFwiZnVsbFNVVlwiOiB7XG4gICAgICAgIFwiZmxvb3JcIjogMzYsXG4gICAgICAgIFwiZG9vcnNcIjogMjYsXG4gICAgICAgIFwicm9vZlwiOiAzNCxcbiAgICAgICAgXCJmaXJld2FsbFwiOiAxNCxcbiAgICAgICAgXCJ0cnVua1wiOiAzMixcbiAgICAgICAgXCJob29kXCI6IDE0LFxuICAgICAgICBcIndoZWVsLXdlbGxzXCI6IDI4LFxuICAgICAgICBcInVuZGVyY2FycmlhZ2VcIjogNzVcbiAgICB9LFxuICAgIFwibWluaXZhblwiOiB7XG4gICAgICAgIFwiZmxvb3JcIjogNDIsXG4gICAgICAgIFwiZG9vcnNcIjogMzQsXG4gICAgICAgIFwicm9vZlwiOiA0NCxcbiAgICAgICAgXCJmaXJld2FsbFwiOiAxNCxcbiAgICAgICAgXCJ0cnVua1wiOiAzNCxcbiAgICAgICAgXCJob29kXCI6IDE0LFxuICAgICAgICBcIndoZWVsLXdlbGxzXCI6IDI4LFxuICAgICAgICBcInVuZGVyY2FycmlhZ2VcIjogODBcbiAgICB9LFxuICAgIFwiY2FyZ292YW5cIjoge1xuICAgICAgICBcImZsb29yXCI6IDYwLFxuICAgICAgICBcImRvb3JzXCI6IDM0LFxuICAgICAgICBcInJvb2ZcIjogNjAsXG4gICAgICAgIFwiZmlyZXdhbGxcIjogMTYsXG4gICAgICAgIFwidHJ1bmtcIjogMzQsXG4gICAgICAgIFwiaG9vZFwiOiAxNCxcbiAgICAgICAgXCJ3aGVlbC13ZWxsc1wiOiAyOCxcbiAgICAgICAgXCJ1bmRlcmNhcnJpYWdlXCI6IDkwXG4gICAgfVxufTtcblxuZnVuY3Rpb24gaGFuZGxlQXJlYUFycmF5KGFyZWEpIHtcbiAgICBjb25zdCBhcmVhSW5kZXggPSBhcmVhQXJyYXkuaW5kZXhPZihhcmVhKTtcbiAgICBpZiAoYXJlYUluZGV4ID4gLTEpIHtcbiAgICAgICAgLy8gaWYgdGhlIGFyZWEgaXMgYWxyZWFkeSBpbiB0aGUgYXJyYXksIHJlbW92ZSBpdC5cbiAgICAgICAgYXJlYUFycmF5LnNwbGljZShhcmVhSW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG90aGVyd2lzZSwgYWRkIGl0XG4gICAgICAgIGFyZWFBcnJheS5wdXNoKGFyZWEpO1xuICAgIH1cblxuICAgIC8vIHJlY2FsY3VsYXRlIHRvdGFsXG4gICAgY2FsY3VsYXRlVG90YWwoKTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVG90YWwoKSB7XG4gICAgLy8gY29uZmlybSB0aGF0IHdlIGhhdmUgYSB2ZWhpY2xlIGNsYXNzXG4gICAgY29uc3QgdmVoaWNsZVNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZWhpY2xlLWNsYXNzXCIpO1xuICAgIC8vIGlmIG5vdCwgZXJyb3JcbiAgICBpZiAoIXZlaGljbGVDbGFzcy5sZW5ndGgpIHtcbiAgICAgICAgdmVoaWNsZVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9IFxuICAgIC8vIGlmIHdlJ3ZlIHVwZGF0ZWQgdG8gaGF2ZSB2ZWhpY2xlLCByZW1vdmUgZXJyb3JcbiAgICBpZih2ZWhpY2xlU2VsZWN0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKCdlcnJvcicpKSB7XG4gICAgICAgIHZlaGljbGVTZWxlY3Rvci5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgIH1cblxuICAgIC8vIHVzZSB0aGUgZ2xvYmFsIGFyZWFBcnJheVxuICAgIGNvbnN0IHRvdGFsID0gYXJlYUFycmF5LnJlZHVjZSgoYWNjLCBhcmVhKSA9PiBhY2MgKyBEYXRhW3ZlaGljbGVDbGFzc11bYXJlYV0sIDApO1xuICAgIC8vIHNob3cgdG90YWwgaW4gaW50ZXJmYWNlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NxLWZ0LWNhbGNfX3ZhbHVlJykuaW5uZXJIVE1MID0gdG90YWw7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVTcXVhcmVGb290YWdlQ2FsY3VsYXRvcigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3EtZnQtY2FsYycpO1xuICAgIGNvbnN0IHRvb2x0aXBDbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcS1mdC1jbG9zZS14Jyk7XG4gICAgY29uc3QgdG9vbHRpcFNob3dCdG4gPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NxLWZ0LXRvb2x0aXAtc2hvdycpO1xuICAgIGNvbnN0IHRvb2x0aXBCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3EtZnQtdG9vbHRpcC1ib3gnKTtcbiAgICBjb25zdCB2ZWhpY2xlQ292ZXJhZ2VCdG5zPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3EtZnQtY2FsY19fYnRuJyk7XG5cbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAvLyBObyBjYWxjdWxhdG9yIHdhcyBmb3VuZDsgYmFpbFxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc2hvd2luZyB0b29sdGlwXG4gICAgdG9vbHRpcFNob3dCdG4uYWRkRXZlbnRMaXN0ZW5lciggXCJjbGlja1wiLCAoKT0+IHtcbiAgICAgICAgdG9vbHRpcEJveC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8vIHJlbW92aW5nIHRvb2x0aXBcbiAgICB0b29sdGlwQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgICAgICB0b29sdGlwQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgLy8gYnV0dG9uczogdG9nZ2xlIGFjdGl2ZSBzdGF0ZSAmIG1vZGlmeSBjYWxjdWxhdGlvbnNcbiAgICB2ZWhpY2xlQ292ZXJhZ2VCdG5zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC5hcmVhKTtcbiAgICAgICAgICAgIGxldCBhcmVhID0gZS50YXJnZXQuZGF0YXNldC5hcmVhO1xuICAgICAgICAgICAgaGFuZGxlQXJlYUFycmF5KGFyZWEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBjaGFuZ2UgdmVoaWNsZSBjbGFzcyB0byBtb2RpZnkgY2FsY3VsYXRpb25zXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZlaGljbGUtY2xhc3MnKS5vbmNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZWhpY2xlLWNsYXNzXCIpO1xuXG4gICAgICAgIC8vIGdyYWJiaW5nIHRoZSB2YWx1ZSBmb3Igc2VsZWN0ZWQgdmVoaWNsZVxuICAgICAgICB2ZWhpY2xlQ2xhc3MgPSB0YXJnZXQub3B0aW9uc1t0YXJnZXQuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG5cbiAgICAgICAgY29uc3QgY2FsY0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNxLWZ0LWNhbGNfX2NhbGMtY29udGVudCcpO1xuICAgICAgICBjb25zdCBhbHRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcS1mdC1jYWxjX19hbHQtY29udGVudCcpO1xuXG4gICAgICAgIC8vIG1ha2luZyB0aGUgY2FsY3VsYXRvciBwYXJ0IGdvIGF3YXkgYW5kIGEgcGhvbmUgbnVtYmVyIGFsdCB0ZXh0IGFwcGVhciBpZiBzcHJpbnRlciB2YW4gb3Igb3RoZXIgaXMgc2VsZWN0ZWRcbiAgICAgICAgaWYgKHZlaGljbGVDbGFzcyAhPSAnc3ByaW50ZXItdmFuJyAmJiB2ZWhpY2xlQ2xhc3MgIT0gJ290aGVyJykge1xuICAgICAgICAgICAgY2FsY0Jsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ25vdC1hY3RpdmUnKTtcbiAgICAgICAgICAgIGFsdEJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIH0gIGVsc2Uge1xuICAgICAgICAgICAgY2FsY0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ25vdC1hY3RpdmUnKTtcbiAgICAgICAgICAgIGFsdEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgY2FsY3VsYXRlVG90YWwoKTtcbiAgICB9XG4gIH1cbiAgZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVNxdWFyZUZvb3RhZ2VDYWxjdWxhdG9yO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGNsYXNzIFZpZGVvR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8tcGxheWVyXScpO1xuICAgICAgICB0aGlzLiR2aWRlb3MgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1pdGVtXScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHt9O1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBzZWxlY3ROZXdWaWRlbyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge1xuICAgICAgICAgICAgaWQ6ICR0YXJnZXQuZGF0YSgndmlkZW9JZCcpLFxuICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6ICR0YXJnZXQsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8oKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xuICAgIH1cblxuICAgIHNldE1haW5WaWRlbygpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyLmF0dHIoJ3NyYycsIGAvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3RoaXMuY3VycmVudFZpZGVvLmlkfWApO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3MucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlby4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLm9uKCdjbGljaycsIHRoaXMuc2VsZWN0TmV3VmlkZW8uYmluZCh0aGlzKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aWRlb0dhbGxlcnkoKSB7XG4gICAgY29uc3QgcGx1Z2luS2V5ID0gJ3ZpZGVvLWdhbGxlcnknO1xuICAgIGNvbnN0ICR2aWRlb0dhbGxlcnkgPSAkKGBbZGF0YS0ke3BsdWdpbktleX1dYCk7XG5cbiAgICAkdmlkZW9HYWxsZXJ5LmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGlzSW5pdGlhbGl6ZWQgPSAkZWwuZGF0YShwbHVnaW5LZXkpIGluc3RhbmNlb2YgVmlkZW9HYWxsZXJ5O1xuXG4gICAgICAgIGlmIChpc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkZWwuZGF0YShwbHVnaW5LZXksIG5ldyBWaWRlb0dhbGxlcnkoJGVsKSk7XG4gICAgfSk7XG59XG4iLCJjb25zdCB5c3dDYXJQYWNrYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHZlaGljbGVLaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnlzdy1sLXByb2R1Y3QtdmVoaWNsZS1raXRzJyk7XG5cbiAgICBpZiAoIXZlaGljbGVLaXRzKSByZXR1cm47XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0Vmlldy1wYWNrYWdlLXRpdGxlIGgzJyk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlPVwic2V0LXJhZGlvXCJdIGlucHV0Jyk7XG5cbiAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIDIxMDoge1xuICAgICAgICAgICAgdGV4dF8xOiAnRGFtcGxpZmllciBQcm8gJmJ1bGw7IDM2IFNxIEZ0JyxcbiAgICAgICAgICAgIHRleHRfMjogJ0x1eHVyeSBMaW5lciBQcm8gJmJ1bGw7IDM2IFNxIEZ0JyxcbiAgICAgICAgfSxcbiAgICAgICAgMjExOiB7XG4gICAgICAgICAgICB0ZXh0XzE6ICdEYW1wbGlmaWVyIFBybyAmYnVsbDsgNTUgU3EgRnQnLFxuICAgICAgICAgICAgdGV4dF8yOiAnTHV4dXJ5IExpbmVyIFBybyAmYnVsbDsgNDUgU3EgRnQnLFxuICAgICAgICB9LFxuICAgICAgICAyODQ6IHtcbiAgICAgICAgICAgIHRleHRfMTogJ0RhbXBsaWZpZXIgUHJvICZidWxsOyA4MCBTcSBGdCcsXG4gICAgICAgICAgICB0ZXh0XzI6ICdMdXh1cnkgTGluZXIgUHJvICZidWxsOyA1NCBTcSBGdCcsXG4gICAgICAgIH0sXG4gICAgICAgIDIxMjoge1xuICAgICAgICAgICAgdGV4dF8xOiAnRGFtcGxpZmllciBQcm8gJmJ1bGw7IDEyMCBTcSBGdCcsXG4gICAgICAgICAgICB0ZXh0XzI6ICdMdXh1cnkgTGluZXIgUHJvICZidWxsOyA3MiBTcSBGdCcsXG4gICAgICAgIH0sXG4gICAgICAgIDIxMzoge1xuICAgICAgICAgICAgdGV4dF8xOiAnRGFtcGxpZmllciBQcm8gJmJ1bGw7IDEyMCBTcSBGdCcsXG4gICAgICAgICAgICB0ZXh0XzI6ICdMdXh1cnkgTGluZXIgUHJvICZidWxsOyA5MCBTcSBGdCcsXG4gICAgICAgIH0sXG4gICAgICAgIDMyNDoge1xuICAgICAgICAgICAgdGV4dF8xOiAnRGFtcGxpZmllciBQcm8gJmJ1bGw7IDU1IFNxIEZ0JyxcbiAgICAgICAgICAgIHRleHRfMjogJ0x1eHVyeSBMaW5lciBQcm8gJmJ1bGw7IDQ1IFNxIEZ0JyxcbiAgICAgICAgfSxcbiAgICAgICAgMzI1OiB7XG4gICAgICAgICAgICB0ZXh0XzE6ICdEYW1wbGlmaWVyIFBybyAmYnVsbDsgMTIwIFNxIEZ0JyxcbiAgICAgICAgICAgIHRleHRfMjogJ0x1eHVyeSBMaW5lciBQcm8gJmJ1bGw7IDcyIFNxIEZ0JyxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gb3B0aW9uLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBsYWJlbC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdGV4dDEgPSBvYmpbdmFsdWVdLnRleHRfMTtcbiAgICAgICAgICAgIGNvbnN0IHRleHQyID0gb2JqW3ZhbHVlXS50ZXh0XzI7XG4gICAgICAgICAgICBjb25zdCAkdGV4dDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdFZpZXctcGFja2FnZS1pdGVtLS1maXJzdCBoNCcpO1xuICAgICAgICAgICAgY29uc3QgJHRleHQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RWaWV3LXBhY2thZ2UtaXRlbS0tc2Vjb25kIGg0Jyk7XG5cbiAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHRleHQ7XG4gICAgICAgICAgICAkdGV4dDEuaW5uZXJIVE1MID0gdGV4dDE7XG4gICAgICAgICAgICAkdGV4dDIuaW5uZXJIVE1MID0gdGV4dDI7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeXN3Q2FyUGFja2FnZTtcbiIsImNsYXNzIFlTV0NlbGx1em9yYmVWMyB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnByb2R1Y3RQcmljZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJpY2VWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub3JpZ2luYWxQcmljZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJpY2VCZWZvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2VQZXJQYW5lbCAucHJpY2UtLWJlZm9yZScpO1xuICAgICAgICB0aGlzLnByaWNlQWZ0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2VQZXJQYW5lbCAucHJpY2UtLWFmdGVyJyk7XG4gICAgICAgIHRoaXMuc3FmdFByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RWaWV3LXByaWNlX19zcWZ0LXByaWNlJyk7XG4gICAgICAgIHRoaXMuc3FmdFByaWNlQmVmb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RWaWV3LXByaWNlX19zcWZ0LXByaWNlLS1iZWZvcmUnKTtcbiAgICAgICAgdGhpcy5idWxrRGlzY291bnRSYXRlcyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0IH0gPSB3aW5kb3c7XG4gICAgICAgIGNvbnN0IGNlbGx1em9yYmVWMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55c3ctbC1wcm9kdWN0LWNlbGx1em9yYmUtdjMnKTtcblxuICAgICAgICBpZiAoIXByb2R1Y3QgfHwgIXByb2R1Y3QuYnVsa19kaXNjb3VudF9yYXRlcyB8fCAhY2VsbHV6b3JiZVYzKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4XScpO1xuICAgICAgICB0aGlzLnByaWNlVmFsdWUgPSBOdW1iZXIodGhpcy5wcm9kdWN0UHJpY2UudGV4dENvbnRlbnQpO1xuICAgICAgICB0aGlzLm9yaWdpbmFsUHJpY2UgPSBOdW1iZXIodGhpcy5wcm9kdWN0UHJpY2UudGV4dENvbnRlbnQpO1xuICAgICAgICB0aGlzLmJ1bGtEaXNjb3VudFJhdGVzID0gcHJvZHVjdC5idWxrX2Rpc2NvdW50X3JhdGVzO1xuXG4gICAgICAgIGNvbnN0IGFkZFRvQ2FyZFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdFZpZXctb3B0aW9ucycpO1xuICAgICAgICBjb25zdCBkZXNjQnV0dG9uID0gYWRkVG9DYXJkV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuaW5jcmVtZW50LS1kb3duJyk7XG4gICAgICAgIGNvbnN0IGluY0J1dHRvbiA9IGFkZFRvQ2FyZFdyYXBwZXIucXVlcnlTZWxlY3RvcignLmluY3JlbWVudC0tdXAnKTtcbiAgICAgICAgY29uc3QgcXR5SW5wdXQgPSBhZGRUb0NhcmRXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJyNudW1iZXJPZlBhbmVscycpO1xuICAgICAgICBjb25zdCBjYWxjdWxhdGVCdG4gPSBhZGRUb0NhcmRXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJyNjYWxjdWxhdGVTcXVhcmVGdCcpO1xuXG4gICAgICAgIGNhbGN1bGF0ZUJ0bi5jbGljaygpO1xuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcblxuICAgICAgICBpbmNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKCdpbmMnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGVzY0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2UoJ2Rlc2MnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNhbGN1bGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRPYnNlcnZlcigpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByaWNlKHR5cGUsIGZsYWdPYnMpIHtcbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtYmVyT2ZQYW5lbHMnKTtcbiAgICAgICAgY29uc3QgcXVhbnRpdHlWYWx1ZSA9IE51bWJlcihxdWFudGl0eS52YWx1ZSkgfHwgMDtcbiAgICAgICAgY29uc3QgZmxhZ0V4aXN0ID0gZmxhZ09icyAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcblxuICAgICAgICB0aGlzLmJ1bGtEaXNjb3VudFJhdGVzLmZvckVhY2goKHsgbWluLCBtYXgsIGRpc2NvdW50IH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZXIgPSBxdWFudGl0eVZhbHVlID49IG1pbiAmJiBxdWFudGl0eVZhbHVlIDw9IChtYXggfHwgcXVhbnRpdHlWYWx1ZSArIDEpO1xuXG4gICAgICAgICAgICBjb25zdCBzZXRQcm9kdWN0UHJpY2VzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghY2hlY2tlciAmJiBmbGFnKSByZXR1cm47XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VBZnRlciA9IHRoaXMuY2FsY3VsYXRlUHJpY2UoTnVtYmVyKHRoaXMucHJpY2VWYWx1ZSksIGRpc2NvdW50LnZhbHVlKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxZnRQcmljZUJlZm9yZSA9IHRoaXMuY2FsY3VsYXRlU3F1YXJlRnRQcmljZSg4LCB0aGlzLm9yaWdpbmFsUHJpY2UpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3FmdFByaWNlQWZ0ZXIgPSB0aGlzLmNhbGN1bGF0ZVNxdWFyZUZ0UHJpY2UoOCwgcHJpY2VBZnRlcikudG9GaXhlZCgyKTtcblxuICAgICAgICAgICAgICAgIGlmIChwcmljZUFmdGVyID09PSB0aGlzLm9yaWdpbmFsUHJpY2UudG9GaXhlZCgyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlQmVmb3JlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3FmdFByaWNlQmVmb3JlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZUJlZm9yZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcWZ0UHJpY2VCZWZvcmUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZUJlZm9yZS50ZXh0Q29udGVudCA9IGAkJHt0aGlzLm9yaWdpbmFsUHJpY2V9YDtcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlQWZ0ZXIudGV4dENvbnRlbnQgPSBgJCR7cHJpY2VBZnRlcn1gO1xuICAgICAgICAgICAgICAgIHRoaXMuc3FmdFByaWNlLnRleHRDb250ZW50ID0gYCR7c3FmdFByaWNlQWZ0ZXJ9YDtcbiAgICAgICAgICAgICAgICB0aGlzLnNxZnRQcmljZUJlZm9yZS50ZXh0Q29udGVudCA9IGAke3NxZnRQcmljZUJlZm9yZX1gO1xuXG4gICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoZmxhZ0V4aXN0ICYmIChjaGVja2VyICYmIGZsYWcpKSByZXR1cm4gc2V0UHJvZHVjdFByaWNlcygpO1xuXG4gICAgICAgICAgICBpZiAoY2hlY2tlcikge1xuICAgICAgICAgICAgICAgIHNldFByb2R1Y3RQcmljZXMoKTtcbiAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlUHJpY2UocHJpY2UsIGRpc2NvdW50KSB7XG4gICAgICAgIGNvbnN0IGNhbGMgPSAoKHByaWNlIC0gKHByaWNlICogZGlzY291bnQgLyAxMDApKSAqIDEwMCAvIDEwMCk7XG4gICAgICAgIGNvbnN0IG5ld1ByaWNlID0gTWF0aC5yb3VuZChjYWxjICogMTAwICsgTnVtYmVyLkVQU0lMT04pIC8gMTAwO1xuXG4gICAgICAgIHJldHVybiBuZXdQcmljZTtcbiAgICB9XG5cblxuICAgIGNhbGN1bGF0ZVNxdWFyZUZ0UHJpY2Uoc3FmdCwgcHJpY2UpIHtcbiAgICAgICAgY29uc3QgY2FsYyA9ICgocHJpY2UgLyBzcWZ0KSAqIDEwMCAvIDEwMCk7XG4gICAgICAgIGNvbnN0IG5ld1ByaWNlID0gTWF0aC5yb3VuZChjYWxjICogMTAwICsgTnVtYmVyLkVQU0lMT04pIC8gMTAwO1xuXG4gICAgICAgIHJldHVybiBuZXdQcmljZTtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0UHJpY2UudGV4dENvbnRlbnQgPSB0aGlzLm9yaWdpbmFsUHJpY2U7XG4gICAgICAgIHRoaXMucHJpY2VCZWZvcmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5wcmljZUFmdGVyLnRleHRDb250ZW50ID0gYCQkeyh0aGlzLm9yaWdpbmFsUHJpY2UpLnRvRml4ZWQoMil9YDtcbiAgICAgICAgdGhpcy5zcWZ0UHJpY2VCZWZvcmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5zcWZ0UHJpY2UudGV4dENvbnRlbnQgPSBgJHsodGhpcy5vcmlnaW5hbFByaWNlIC8gOCkudG9GaXhlZCgyKX1gO1xuICAgIH1cblxuICAgIHNldE9ic2VydmVyKCkge1xuICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKG11dGF0aW9uTGlzdCkgPT4ge1xuICAgICAgICAgICAgbXV0YXRpb25MaXN0LmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbUhhc0F0dHJpYnV0ZSA9IG11dGF0aW9uLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdjaGlsZExpc3QnICYmIG1IYXNBdHRyaWJ1dGUgJiYgZmxhZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlVmFsdWUgPSBOdW1iZXIobXV0YXRpb24udGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFByaWNlID0gdGhpcy5wcmljZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKCcnLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdFZpZXctb3B0aW9ucycpLCB7XG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0Vmlldy1vcHRpb25zIFtkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJyk7XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXJQcmljZSA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGUpIHtmbGFnID0gdHJ1ZTt9KTtcbiAgICAgICAgb2JzZXJ2ZXJQcmljZS5vYnNlcnZlKHByaWNlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBZU1dDZWxsdXpvcmJlVjNGYWN0b3J5KGNvbnRleHQpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIFlTV0NlbGx1em9yYmVWMykge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgWVNXQ2VsbHV6b3JiZVYzKGNvbnRleHQpO1xuICAgIH1cbn1cbiIsImNvbnN0IGFkZE11bHRpRXZlbnRMaXN0ZW5lciA9IChlbGVtZW50LCBldmVudE5hbWVzLCBsaXN0ZW5lcikgPT4ge1xuICAgIGV2ZW50TmFtZXMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IHlzd0NvbnRyb2xHcmFwaGljcyA9ICgpID0+IHtcbiAgICBjb25zdCBjb250cm9scyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXlzdy1jb250cm9sXScpO1xuXG4gICAgaWYgKCFjb250cm9scykgcmV0dXJuO1xuXG4gICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICBjb250cm9sLmNoZWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS15c3ctdGFyZ2V0PVwiJHtjb250cm9sLmRhdGFzZXQueXN3Q29udHJvbH1cIl1gKTtcblxuICAgICAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBfdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXlzdy10YXJnZXQ9XCIke2NvbnRyb2wuZGF0YXNldC55c3dDb250cm9sfVwiXWApO1xuICAgICAgICAgICAgX3RhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJyA/IHRhcmdldC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnIDogdGFyZ2V0LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJ1bGxldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS15c3ctaG92ZXJdJyk7XG5cbiAgICBpZiAoIWJ1bGxldHMpIHJldHVybjtcblxuICAgIGJ1bGxldHMuZm9yRWFjaCgoYnVsbGV0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNob3dUYXJnZXRzRnVuYyA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtJHtidWxsZXQuZGF0YXNldC55c3dIb3Zlcn1dYCk7XG5cbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5kYXRhc2V0Lnlzd0hvdmVyID09PSBidWxsZXQuZGF0YXNldC55c3dIb3ZlciB8fCBlLnRhcmdldC5jbG9zZXN0KGBbZGF0YS0ke2J1bGxldC5kYXRhc2V0Lnlzd0hvdmVyfV1gKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGlkZVRhcmdldHNGdW5jID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS0ke2J1bGxldC5kYXRhc2V0Lnlzd0hvdmVyfV1gKTtcblxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQueXN3SG92ZXIgIT09IGJ1bGxldC5kYXRhc2V0Lnlzd0hvdmVyIHx8ICFlLnRhcmdldC5jbG9zZXN0KGBbZGF0YS0ke2J1bGxldC5kYXRhc2V0Lnlzd0hvdmVyfV1gKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGFkZE11bHRpRXZlbnRMaXN0ZW5lcihkb2N1bWVudC5ib2R5LCBbJ21vdXNlb3ZlcicsICd0b3VjaHN0YXJ0J10sIHNob3dUYXJnZXRzRnVuYyk7XG4gICAgICAgIGFkZE11bHRpRXZlbnRMaXN0ZW5lcihkb2N1bWVudC5ib2R5LCBbJ21vdXNlb3V0JywgJ3RvdWNoZW5kJ10sIGhpZGVUYXJnZXRzRnVuYyk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB5c3dDb250cm9sR3JhcGhpY3M7XG4iLCJjbGFzcyBZU1dQcmljaW5nQ2FsY3VsYXRvciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnByb2R1Y3RQcmljZXMgPSBudWxsO1xuICAgICAgICB0aGlzLnByaWNlVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm9yaWdpbmFsUHJpY2UgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdCB9ID0gd2luZG93O1xuICAgICAgICBjb25zdCBjZWxsdXpvcmJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RWaWV3LS1jZWxsdXpvcmJlJyk7XG5cbiAgICAgICAgaWYgKCFwcm9kdWN0IHx8ICFwcm9kdWN0LmJ1bGtfZGlzY291bnRfcmF0ZXMgfHwgIWNlbGx1em9yYmUpIHJldHVybjtcblxuICAgICAgICB0aGlzLnByb2R1Y3RQcmljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvZHVjdFZpZXctZGV0YWlscyBbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4XScpO1xuICAgICAgICB0aGlzLnByaWNlVmFsdWUgPSBOdW1iZXIodGhpcy5wcm9kdWN0UHJpY2VzWzBdLnRleHRDb250ZW50LnNwbGl0KCckJylbMV0pO1xuICAgICAgICB0aGlzLm9yaWdpbmFsUHJpY2UgPSBOdW1iZXIodGhpcy5wcm9kdWN0UHJpY2VzWzBdLnRleHRDb250ZW50LnNwbGl0KCckJylbMV0pO1xuXG4gICAgICAgIGNvbnN0IHsgYnVsa19kaXNjb3VudF9yYXRlczogYnVsa0Rpc2NvdW50UmF0ZXMgfSA9IHByb2R1Y3Q7XG5cbiAgICAgICAgY29uc3QgYWRkVG9DYXJkV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Vmlldy1kZXRhaWxzJyk7XG4gICAgICAgIGNvbnN0IGRlc2NCdXR0b24gPSBhZGRUb0NhcmRXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjdGlvbj1cImRlY1wiXScpO1xuICAgICAgICBjb25zdCBpbmNCdXR0b24gPSBhZGRUb0NhcmRXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjdGlvbj1cImluY1wiXScpO1xuICAgICAgICBjb25zdCBxdHlJbnB1dCA9IGFkZFRvQ2FyZFdyYXBwZXIucXVlcnlTZWxlY3RvcignI251bWJlck9mUGFuZWxzJyk7XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZUJ0biA9IGFkZFRvQ2FyZFdyYXBwZXIucXVlcnlTZWxlY3RvcignI2NhbGN1bGF0ZVNxdWFyZUZ0Jyk7XG5cbiAgICAgICAgaW5jQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZShidWxrRGlzY291bnRSYXRlcywgJ2luYycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkZXNjQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZShidWxrRGlzY291bnRSYXRlcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHF0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZShidWxrRGlzY291bnRSYXRlcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNhbGN1bGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2UoYnVsa0Rpc2NvdW50UmF0ZXMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcblxuICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKG11dGF0aW9uTGlzdCkgPT4ge1xuICAgICAgICAgICAgbXV0YXRpb25MaXN0LmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbUhhc0F0dHJpYnV0ZSA9IG11dGF0aW9uLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdjaGlsZExpc3QnICYmIG1IYXNBdHRyaWJ1dGUgJiYgZmxhZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlVmFsdWUgPSBOdW1iZXIobXV0YXRpb24udGFyZ2V0LnRleHRDb250ZW50LnNwbGl0KCckJylbMV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yaWdpbmFsUHJpY2UgPSB0aGlzLnByaWNlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2UoYnVsa0Rpc2NvdW50UmF0ZXMsICcnLCBmbGFnKTtcblxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG5cbiAgICAgICAgY29uc3QgcHJldmlld1Byb2R1Y3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdFZpZXctZGV0YWlscycpO1xuXG4gICAgICAgIGNvbnN0IHByaWNlID0gcHJldmlld1Byb2R1Y3QucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheF0nKTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHByZXZpZXdQcm9kdWN0LCBvcHRpb25zKTtcblxuICAgICAgICBjb25zdCBvYnNlcnZlclByaWNlID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZSkge2ZsYWcgPSB0cnVlO30pO1xuICAgICAgICBvYnNlcnZlclByaWNlLm9ic2VydmUocHJpY2UsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlLCBjaGlsZExpc3Q6IHRydWV9KTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVQcmljZShwcmljZSwgZGlzY291bnQpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoKHByaWNlIC0gKHByaWNlICogZGlzY291bnQgLyAxMDApKSAqIDEwMCkgLyAxMDA7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJpY2UoYnVsa0Rpc2NvdW50UmF0ZXMsIHR5cGUsIGZsYWdPYnMpIHtcbiAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtYmVyT2ZQYW5lbHMnKTtcbiAgICAgICAgY29uc3QgcXVhbnRpdHlWYWx1ZSA9IE51bWJlcihxdWFudGl0eS52YWx1ZSkgfHwgMDtcbiAgICAgICAgY29uc3QgZmxhZ0V4aXN0ID0gZmxhZ09icyAhPT0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGJ1bGtEaXNjb3VudFJhdGVzLmZvckVhY2goKHsgbWluLCBtYXgsIGRpc2NvdW50IH0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VyID0gcXVhbnRpdHlWYWx1ZSA+PSBtaW4gJiYgcXVhbnRpdHlWYWx1ZSA8PSAobWF4IHx8IHF1YW50aXR5VmFsdWUgKyAxKTtcbiAgICAgICAgICAgIGNvbnN0IHNldFByb2R1Y3RQcmljZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0UHJpY2VzLmZvckVhY2goKHByb2R1Y3RQcmljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2UuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ5c3ctanMtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInlzdy1qcy1wcmljZV9fYmVmb3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQke3RoaXMub3JpZ2luYWxQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ5c3ctanMtcHJpY2VfX25vd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHt0aGlzLmNhbGN1bGF0ZVByaWNlKHRoaXMub3JpZ2luYWxQcmljZSwgZGlzY291bnQudmFsdWUpLnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPmA7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFByaWNlLmRhdGFzZXQuZGlzY291bnQgPSBgZGlzY291bnQtJHtpbmRleH1gO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGZsYWdFeGlzdCAmJiAoY2hlY2tlciAmJiBmbGFnKSkgcmV0dXJuIHNldFByb2R1Y3RQcmljZXMoKTtcblxuICAgICAgICAgICAgaWYgKGNoZWNrZXIpIHtcbiAgICAgICAgICAgICAgICBzZXRQcm9kdWN0UHJpY2VzKCk7XG4gICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChxdWFudGl0eVZhbHVlIDwgbWluICYmICFmbGFnICYmIHR5cGUgIT09ICdpbmMnICYmIHR5cGUgIT09ICdvYnNlcnZlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RQcmljZXMuZm9yRWFjaCgocHJvZHVjdFByaWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQcmljZS50ZXh0Q29udGVudCA9IGAkJHsodGhpcy5vcmlnaW5hbFByaWNlKS50b0ZpeGVkKDIpfWA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWVNXUHJpY2luZ0NhbGN1bGF0b3JGYWN0b3J5KGNvbnRleHQpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIFlTV1ByaWNpbmdDYWxjdWxhdG9yKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBZU1dQcmljaW5nQ2FsY3VsYXRvcihjb250ZXh0KTtcbiAgICB9XG59XG4iLCJjbGFzcyBZU1dUYWJsZVByaWNpbmdDYWxjdWxhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMucHJvZHVjdFByaWNlQ29udGVudCA9IG51bGw7XG4gICAgICAgIHRoaXMucHJvZHVjdFByaWNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmljZVZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFByaWNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmljZUJlZm9yZVRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJpY2UtYmVmb3JlLXRvdGFsXScpO1xuICAgICAgICB0aGlzLnByaWNlQmVmb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJpY2UtYmVmb3JlXScpO1xuICAgICAgICB0aGlzLnByaWNlQWZ0ZXJUb3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByaWNlLWFmdGVyLXRvdGFsXScpO1xuICAgICAgICB0aGlzLnByaWNlVG90YWxTYXZpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJpY2UtdG90YWwtc2F2aW5nc10nKTtcbiAgICAgICAgdGhpcy5kaXNjb3VudFNhdmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNjUGVyY2VudCcpO1xuICAgICAgICB0aGlzLmJ1bGtEaXNjb3VudFJhdGVzID0gbnVsbDtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCB7IHByb2R1Y3QgfSA9IHdpbmRvdztcbiAgICAgICAgY29uc3QgY2VsbHV6b3JiZVYyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RWaWV3LS1wcmljZS10YWJsZScpO1xuXG4gICAgICAgIGlmICghcHJvZHVjdCB8fCAhcHJvZHVjdC5idWxrX2Rpc2NvdW50X3JhdGVzIHx8ICFjZWxsdXpvcmJlVjIpIHJldHVybjtcblxuICAgICAgICB0aGlzLnByb2R1Y3RQcmljZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdFZpZXctZGV0YWlscyBbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4XScpO1xuICAgICAgICB0aGlzLnByb2R1Y3RQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByaWNlLXdpdGhvdXRUYXhdJyk7XG4gICAgICAgIHRoaXMucHJpY2VWYWx1ZSA9IE51bWJlcih0aGlzLnByb2R1Y3RQcmljZS50ZXh0Q29udGVudCk7XG4gICAgICAgIHRoaXMub3JpZ2luYWxQcmljZSA9IE51bWJlcih0aGlzLnByb2R1Y3RQcmljZS50ZXh0Q29udGVudCk7XG4gICAgICAgIHRoaXMuYnVsa0Rpc2NvdW50UmF0ZXMgPSBwcm9kdWN0LmJ1bGtfZGlzY291bnRfcmF0ZXM7XG5cbiAgICAgICAgY29uc3QgYWRkVG9DYXJkV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0Vmlldy1kZXRhaWxzJyk7XG4gICAgICAgIGNvbnN0IGRlc2NCdXR0b24gPSBhZGRUb0NhcmRXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjdGlvbj1cImRlY1wiXScpO1xuICAgICAgICBjb25zdCBpbmNCdXR0b24gPSBhZGRUb0NhcmRXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjdGlvbj1cImluY1wiXScpO1xuICAgICAgICBjb25zdCBxdHlJbnB1dCA9IGFkZFRvQ2FyZFdyYXBwZXIucXVlcnlTZWxlY3RvcignI251bWJlck9mUGFuZWxzJyk7XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZUJ0biA9IGFkZFRvQ2FyZFdyYXBwZXIucXVlcnlTZWxlY3RvcignI2NhbGN1bGF0ZVNxdWFyZUZ0Jyk7XG5cbiAgICAgICAgdGhpcy5yZXNldCh0aGlzLmJ1bGtEaXNjb3VudFJhdGVzKTtcblxuICAgICAgICBpbmNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKCdpbmMnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGVzY0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2UoJ2Rlc2MnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNhbGN1bGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRPYnNlcnZlcigpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByaWNlKHR5cGUsIGZsYWdPYnMpIHtcbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtYmVyT2ZQYW5lbHMnKTtcbiAgICAgICAgY29uc3QgcXVhbnRpdHlWYWx1ZSA9IE51bWJlcihxdWFudGl0eS52YWx1ZSkgfHwgMDtcbiAgICAgICAgY29uc3QgZmxhZ0V4aXN0ID0gZmxhZ09icyAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucmVzZXQocXVhbnRpdHlWYWx1ZSk7XG5cbiAgICAgICAgdGhpcy5idWxrRGlzY291bnRSYXRlcy5mb3JFYWNoKCh7IG1pbiwgbWF4LCBkaXNjb3VudCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VyID0gcXVhbnRpdHlWYWx1ZSA+PSBtaW4gJiYgcXVhbnRpdHlWYWx1ZSA8PSAobWF4IHx8IHF1YW50aXR5VmFsdWUgKyAxKTtcblxuICAgICAgICAgICAgY29uc3Qgc2V0UHJvZHVjdFByaWNlcyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWNoZWNrZXIgJiYgZmxhZykgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNjb3VudFNhdmluZy50ZXh0Q29udGVudCA9IGBTYXZpbmcgJHtkaXNjb3VudC52YWx1ZX0lYDtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RQcmljZS50ZXh0Q29udGVudCA9IGAke3RoaXMuY2FsY3VsYXRlUHJpY2UoTnVtYmVyKHRoaXMucHJpY2VWYWx1ZSksIGRpc2NvdW50LnZhbHVlKS50b0ZpeGVkKDIpfWA7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZUJlZm9yZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJzeW1ib2xcIj4kPC9zcGFuPjxzcGFuIGNsYXNzPVwicHJpY2VcIj4ke3RoaXMub3JpZ2luYWxQcmljZX08L3NwYW4+YDtcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlQmVmb3JlVG90YWwuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwic3ltYm9sXCI+JDwvc3Bhbj48c3BhbiBjbGFzcz1cInByaWNlXCI+JHsocXVhbnRpdHlWYWx1ZSAqIHRoaXMucHJpY2VWYWx1ZSkudG9GaXhlZCgyKX08L3NwYW4+YDtcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlQWZ0ZXJUb3RhbC50ZXh0Q29udGVudCA9IGAkeyhxdWFudGl0eVZhbHVlICogdGhpcy5jYWxjdWxhdGVQcmljZSh0aGlzLnByaWNlVmFsdWUsIGRpc2NvdW50LnZhbHVlKS50b0ZpeGVkKDIpKS50b0ZpeGVkKDIpfWA7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZVRvdGFsU2F2aW5ncy50ZXh0Q29udGVudCA9IGAkeygocXVhbnRpdHlWYWx1ZSAqIHRoaXMucHJpY2VWYWx1ZSkudG9GaXhlZCgyKSAtIHF1YW50aXR5VmFsdWUgKiB0aGlzLmNhbGN1bGF0ZVByaWNlKHRoaXMucHJpY2VWYWx1ZSwgZGlzY291bnQudmFsdWUpLnRvRml4ZWQoMikpLnRvRml4ZWQoMil9YDtcblxuICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGZsYWdFeGlzdCAmJiAoY2hlY2tlciAmJiBmbGFnKSkgcmV0dXJuIHNldFByb2R1Y3RQcmljZXMoKTtcblxuICAgICAgICAgICAgaWYgKGNoZWNrZXIpIHtcbiAgICAgICAgICAgICAgICBzZXRQcm9kdWN0UHJpY2VzKCk7XG4gICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVByaWNlKHByaWNlLCBkaXNjb3VudCkge1xuICAgICAgICByZXR1cm4gKChwcmljZSAtIChwcmljZSAqIGRpc2NvdW50IC8gMTAwKSkgKiAxMDAgLyAxMDApO1xuICAgIH1cblxuICAgIHJlc2V0KHF1YW50aXR5VmFsdWUpIHtcbiAgICAgICAgY29uc3QgcXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbnVtYmVyT2ZQYW5lbHMnKTtcbiAgICAgICAgY29uc3QgcHJpY2VzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZXMtc2VjdGlvbicpO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdFByaWNlLnRleHRDb250ZW50ID0gdGhpcy5vcmlnaW5hbFByaWNlO1xuICAgICAgICB0aGlzLmRpc2NvdW50U2F2aW5nLmlubmVySFRNTCA9ICdObyBzYXZpbmdzJztcbiAgICAgICAgdGhpcy5wcmljZUFmdGVyVG90YWwudGV4dENvbnRlbnQgPSAoTnVtYmVyKHF0eUlucHV0LnZhbHVlKSAqIHRoaXMub3JpZ2luYWxQcmljZSkudG9GaXhlZCgyKTtcbiAgICAgICAgdGhpcy5wcmljZVRvdGFsU2F2aW5ncy5pbm5lckhUTUwgPSAnMC4wMCc7XG5cbiAgICAgICAgcHJpY2VzU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCd0aGVhZCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgcHJpY2VzU2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuaWNvbnMnKS5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgICAgICBpY29uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJpY2VzU2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0cjpub3QoOmZpcnN0LWNoaWxkKScpLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgICAgcm93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChxdWFudGl0eVZhbHVlIDwgMTQpIHtcbiAgICAgICAgICAgIHByaWNlc1NlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmRpc2NvdW50LXdyYXBwZXInKS5mb3JFYWNoKChkaXNjb3VudFdyYXBwZXIpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNjb3VudFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHF1YW50aXR5VmFsdWUgPj0gMTQpIHtcbiAgICAgICAgICAgIHByaWNlc1NlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmRpc2NvdW50LXdyYXBwZXInKS5mb3JFYWNoKChkaXNjb3VudFdyYXBwZXIpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNjb3VudFdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByaWNlc1NlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgndGJvZHkgdHI6bm90KDpmaXJzdC1jaGlsZCknKS5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9ICd0YWJsZS1yb3cnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcmljZXNTZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29ucycpLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgICAgICAgICBpY29uLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByaWNlc1NlY3Rpb24ucXVlcnlTZWxlY3RvcigndGhlYWQnKS5zdHlsZS5kaXNwbGF5ID0gJ3RhYmxlLWhlYWRlci1ncm91cCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRPYnNlcnZlcigpIHtcbiAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjYWxsYmFjayA9IChtdXRhdGlvbkxpc3QpID0+IHtcbiAgICAgICAgICAgIG11dGF0aW9uTGlzdC5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1IYXNBdHRyaWJ1dGUgPSBtdXRhdGlvbi50YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXgnKTtcblxuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnY2hpbGRMaXN0JyAmJiBtSGFzQXR0cmlidXRlICYmIGZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZVZhbHVlID0gTnVtYmVyKG11dGF0aW9uLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JpZ2luYWxQcmljZSA9IHRoaXMucHJpY2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZSgnJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2R1Y3RWaWV3LWRldGFpbHMnKSwge1xuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdFZpZXctZGV0YWlscyBbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4XScpO1xuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyUHJpY2UgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihlKSB7ZmxhZyA9IHRydWU7fSk7XG4gICAgICAgIG9ic2VydmVyUHJpY2Uub2JzZXJ2ZShwcmljZSwge2NoYXJhY3RlckRhdGE6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZX0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWVNXVGFibGVQcmljaW5nQ2FsY3VsYXRvckZhY3RvcnkoY29udGV4dCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgWVNXVGFibGVQcmljaW5nQ2FsY3VsYXRvcikge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgWVNXVGFibGVQcmljaW5nQ2FsY3VsYXRvcihjb250ZXh0KTtcbiAgICB9XG59XG4iLCJjbGFzcyBZU1dUaW1iZXJ3b29sQ2FsY3VsYXRvciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnByb2R1Y3RQcmljZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJpY2VWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub3JpZ2luYWxQcmljZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJpY2VCZWZvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2VQZXJQYW5lbCAucHJpY2UtLWJlZm9yZScpO1xuICAgICAgICB0aGlzLnByaWNlQWZ0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2VQZXJQYW5lbCAucHJpY2UtLWFmdGVyJyk7XG4gICAgICAgIHRoaXMuYnVsa0Rpc2NvdW50UmF0ZXMgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdCB9ID0gd2luZG93O1xuICAgICAgICBjb25zdCB0aW1iZXJ3b29sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RWaWV3LS10aW1iZXJ3b29sJyk7XG5cbiAgICAgICAgaWYgKCFwcm9kdWN0IHx8ICFwcm9kdWN0LmJ1bGtfZGlzY291bnRfcmF0ZXMgfHwgIXRpbWJlcndvb2wpIHJldHVybjtcblxuICAgICAgICB0aGlzLnByb2R1Y3RQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJyk7XG4gICAgICAgIHRoaXMucHJpY2VWYWx1ZSA9IE51bWJlcih0aGlzLnByb2R1Y3RQcmljZS50ZXh0Q29udGVudCk7XG4gICAgICAgIHRoaXMub3JpZ2luYWxQcmljZSA9IE51bWJlcih0aGlzLnByb2R1Y3RQcmljZS50ZXh0Q29udGVudCk7XG4gICAgICAgIHRoaXMuYnVsa0Rpc2NvdW50UmF0ZXMgPSBwcm9kdWN0LmJ1bGtfZGlzY291bnRfcmF0ZXM7XG5cbiAgICAgICAgY29uc3QgYWRkVG9DYXJkV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0Vmlldy1vcHRpb25zJyk7XG4gICAgICAgIGNvbnN0IGRlc2NCdXR0b24gPSBhZGRUb0NhcmRXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5pbmNyZW1lbnQtLWRvd24nKTtcbiAgICAgICAgY29uc3QgaW5jQnV0dG9uID0gYWRkVG9DYXJkV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuaW5jcmVtZW50LS11cCcpO1xuICAgICAgICBjb25zdCBxdHlJbnB1dCA9IGFkZFRvQ2FyZFdyYXBwZXIucXVlcnlTZWxlY3RvcignI251bWJlck9mUGFuZWxzJyk7XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZUJ0biA9IGFkZFRvQ2FyZFdyYXBwZXIucXVlcnlTZWxlY3RvcignI2NhbGN1bGF0ZVNxdWFyZUZ0Jyk7XG5cbiAgICAgICAgY2FsY3VsYXRlQnRuLmNsaWNrKCk7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuXG4gICAgICAgIGluY0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2UoJ2luYycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkZXNjQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZSgnZGVzYycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBxdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2FsY3VsYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldE9ic2VydmVyKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJpY2UodHlwZSwgZmxhZ09icykge1xuICAgICAgICBjb25zdCBxdWFudGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW1iZXJPZlBhbmVscycpO1xuICAgICAgICBjb25zdCBxdWFudGl0eVZhbHVlID0gTnVtYmVyKHF1YW50aXR5LnZhbHVlKSB8fCAwO1xuICAgICAgICBjb25zdCBmbGFnRXhpc3QgPSBmbGFnT2JzICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBmbGFnID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuXG4gICAgICAgIHRoaXMuYnVsa0Rpc2NvdW50UmF0ZXMuZm9yRWFjaCgoeyBtaW4sIG1heCwgZGlzY291bnQgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlciA9IHF1YW50aXR5VmFsdWUgPj0gbWluICYmIHF1YW50aXR5VmFsdWUgPD0gKG1heCB8fCBxdWFudGl0eVZhbHVlICsgMSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNldFByb2R1Y3RQcmljZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFjaGVja2VyICYmIGZsYWcpIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZUFmdGVyID0gdGhpcy5jYWxjdWxhdGVQcmljZShOdW1iZXIodGhpcy5wcmljZVZhbHVlKSwgZGlzY291bnQudmFsdWUpLnRvRml4ZWQoMik7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJpY2VBZnRlciA9PT0gdGhpcy5vcmlnaW5hbFByaWNlLnRvRml4ZWQoMikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZUJlZm9yZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VCZWZvcmUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZUJlZm9yZS50ZXh0Q29udGVudCA9IGAkJHt0aGlzLm9yaWdpbmFsUHJpY2V9YDtcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlQWZ0ZXIudGV4dENvbnRlbnQgPSBgJCR7cHJpY2VBZnRlcn1gO1xuXG4gICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoZmxhZ0V4aXN0ICYmIChjaGVja2VyICYmIGZsYWcpKSByZXR1cm4gc2V0UHJvZHVjdFByaWNlcygpO1xuXG4gICAgICAgICAgICBpZiAoY2hlY2tlcikge1xuICAgICAgICAgICAgICAgIHNldFByb2R1Y3RQcmljZXMoKTtcbiAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlUHJpY2UocHJpY2UsIGRpc2NvdW50KSB7XG4gICAgICAgIHJldHVybiAoKHByaWNlIC0gKHByaWNlICogZGlzY291bnQgLyAxMDApKSAqIDEwMCAvIDEwMCk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdFByaWNlLnRleHRDb250ZW50ID0gdGhpcy5vcmlnaW5hbFByaWNlO1xuICAgICAgICB0aGlzLnByaWNlQmVmb3JlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucHJpY2VBZnRlci50ZXh0Q29udGVudCA9IGAkJHsodGhpcy5vcmlnaW5hbFByaWNlKS50b0ZpeGVkKDIpfWA7XG4gICAgfVxuXG4gICAgc2V0T2JzZXJ2ZXIoKSB7XG4gICAgICAgIGxldCBmbGFnID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAobXV0YXRpb25MaXN0KSA9PiB7XG4gICAgICAgICAgICBtdXRhdGlvbkxpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtSGFzQXR0cmlidXRlID0gbXV0YXRpb24udGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2NoaWxkTGlzdCcgJiYgbUhhc0F0dHJpYnV0ZSAmJiBmbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VWYWx1ZSA9IE51bWJlcihtdXRhdGlvbi50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yaWdpbmFsUHJpY2UgPSB0aGlzLnByaWNlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2UoJycsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0Vmlldy1vcHRpb25zJyksIHtcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RWaWV3LW9wdGlvbnMgW2RhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheF0nKTtcblxuICAgICAgICBjb25zdCBvYnNlcnZlclByaWNlID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZSkge2ZsYWcgPSB0cnVlO30pO1xuICAgICAgICBvYnNlcnZlclByaWNlLm9ic2VydmUocHJpY2UsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlLCBjaGlsZExpc3Q6IHRydWV9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFlTV1RpbWJlcndvb2xDYWxjdWxhdG9yRmFjdG9yeShjb250ZXh0KSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBZU1dUaW1iZXJ3b29sQ2FsY3VsYXRvcikge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgWVNXVGltYmVyd29vbENhbGN1bGF0b3IoY29udGV4dCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcblxuY2xhc3MgWVNXVGltYmVyd29vbFNhbXBsZU1vZGFsIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS10aW1iZXJ3b29sLXNhbXBsZSAjcHJvZHVjdF9pZCcpO1xuICAgICAgICB0aGlzLnF1YW50aXR5R2xvYmFsID0gMDtcbiAgICAgICAgdGhpcy5tYXhRdWFudGl0eSA9IDE7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICB0aGlzLmZsYWcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgdGltYmVyd29vbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC0tdGltYmVyd29vbC1zYW1wbGUnKTtcblxuICAgICAgICBpZiAoIXRpbWJlcndvb2wpIHJldHVybjtcblxuICAgICAgICB0aGlzLm1vZGFsVHJpZ2dlcigpO1xuICAgICAgICB0aGlzLmFkZFRyaWdnZXIoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RDb2xvclRyaWdnZXIoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RJY29uVHJpZ2dlcigpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLnNldFJlbW92ZUxpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJlbmRlcih0eXBlKSB7XG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENhcnQoeyBpbmNsdWRlT3B0aW9uczogdHJ1ZSB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RWaWV3LWZyZWUtc2FtcGxlX190aXRsZSBbZGF0YS1xdHktYWRkZWRdJyk7XG4gICAgICAgICAgICBjb25zdCBtYXhRdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdFZpZXctZnJlZS1zYW1wbGVfX3RpdGxlIFtkYXRhLW1heC1xdHldJyk7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RWaWV3LWZyZWUtc2FtcGxlX19pdGVtcycpO1xuICAgICAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBxdWFudGl0eSA9IDA7XG4gICAgICAgICAgICBsZXQgcHJvZHVjdHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBwYW5lbHMgPSBbXTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBxdHkuaW5uZXJIVE1MID0gcmVzcG9uc2VbMF0ubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXMubGVuZ3RoIHx8IDA7XG4gICAgICAgICAgICAgICAgcHJvZHVjdHMgPSByZXNwb25zZVswXS5saW5lSXRlbXMucGh5c2ljYWxJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucHJvZHVjdElkID09PSBOdW1iZXIodGhpcy5wcm9kdWN0SWQudmFsdWUpKTtcblxuICAgICAgICAgICAgICAgIHBhbmVscyA9IHByb2R1Y3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5vcHRpb25zLnNvbWUoKG9wdGlvbikgPT4gb3B0aW9uLm5hbWUgPT09ICdFZGdlIFR5cGUnKSk7XG5cbiAgICAgICAgICAgICAgICBwYW5lbHMuZm9yRWFjaCgocGFuZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHkgKz0gcGFuZWwucXVhbnRpdHk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnF1YW50aXR5R2xvYmFsID0gcXVhbnRpdHk7XG5cbiAgICAgICAgICAgICAgICBxdHkuaW5uZXJIVE1MID0gcXVhbnRpdHk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcXR5LmlubmVySFRNTCA9IDA7XG4gICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1heFF0eS5pbm5lckhUTUwgPSB0aGlzLm1heFF1YW50aXR5O1xuXG4gICAgICAgICAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgICAgICBpZiAoZmxhZykgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IHtcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgICAgICAgICAgICBpZDogW10sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwYW5lbHMuZm9yRWFjaCgocGFuZWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFuZWwucXVhbnRpdHkgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGFuZWwucXVhbnRpdHk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMub3B0aW9ucy5wdXNoKHBhbmVsLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMuaWQucHVzaChwYW5lbC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5vcHRpb25zLnB1c2gocGFuZWwub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLmlkLnB1c2gocGFuZWwuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdGVtcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbdGhpY2tuZXNzLCBjb2xvciwgZWRnZV0gPSBvcHRpb247XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JDb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke29wdGlvblsxXS52YWx1ZUlkfVwiXVt2YWx1ZT1cIiR7b3B0aW9uWzFdLnZhbHVlSWR9XCJdYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPVxuICAgICAgICAgICAgICAgICAgICBgPGxpIGNsYXNzPVwicHJvZHVjdFZpZXctZnJlZS1zYW1wbGVfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0Vmlldy1mcmVlLXNhbXBsZV9faXRlbS1jb2xvclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvckNvZGUuZGF0YXNldC5jb2xvcn07XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2NvbG9yQ29kZS5kYXRhc2V0LmltYWdlfVwiIGFsdD1cIiR7Y29sb3IudmFsdWV9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0Vmlldy1mcmVlLXNhbXBsZV9faXRlbS1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7Y29sb3IudmFsdWV9LCAke3RoaWNrbmVzcy52YWx1ZX0sPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2VkZ2UudmFsdWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1pZD1cIiR7aXRlbXMuaWRbaW5kZXhdfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2ljb24teG1hcmtcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5gO1xuXG4gICAgICAgICAgICAgICAgbGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRlbXBsYXRlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNldFJlbW92ZUxpc3RlbmVycygpO1xuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNZXNzYWdlcygnc3VjY2VzcycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWVzc2FnZXMoJ2Vycm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnF1YW50aXR5R2xvYmFsID49IHRoaXMubWF4UXVhbnRpdHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1lc3NhZ2VzKCdkaXNhYmxlZCcpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXR5cGUpIHJldHVybjtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNZXNzYWdlcygnbm9ybWFsJyk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0TWVzc2FnZXModHlwZSkge1xuICAgICAgICBjb25zdCBhZGRUb0NhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3JkZXItZnJlZS1zYW1wbGUtYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0ge1xuICAgICAgICAgICAgc3VjY2VzczogJ0FkZGVkIFNhbXBsZScsXG4gICAgICAgICAgICBpbnByb2dyZXNzOiAnQWRkaW5nIHRvIGNhcnTigKYnLFxuICAgICAgICAgICAgZXJyb3I6ICdFcnJvcicsXG4gICAgICAgICAgICBub3JtYWw6ICdBZGQgU2FtcGxlJyxcbiAgICAgICAgICAgIHJlbW92aW5nOiAnUmVtb3ZpbmfigKYnLFxuICAgICAgICAgICAgcmVtb3ZlZDogJ1JlbW92ZWQnLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGBNYXggJHt0aGlzLm1heFF1YW50aXR5fSBTYW1wbGUke3RoaXMubWF4UXVhbnRpdHkgPiAxID8gJ3MnIDogJyd9YCxcbiAgICAgICAgfTtcblxuICAgICAgICBhZGRUb0NhcnRCdG4uZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICBidG4udmFsdWUgPSBtZXNzYWdlc1t0eXBlXTtcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdub3JtYWwnKSB7XG4gICAgICAgICAgICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLW5ldy0tZGlzYWJsZWQnKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tbmV3LS1kaXNhYmxlZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRSZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdFZpZXctZnJlZS1zYW1wbGVfX2l0ZW0tcmlnaHQgYnV0dG9uJyk7XG5cbiAgICAgICAgcmVtb3ZlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldE1lc3NhZ2VzKCdyZW1vdmluZycpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBidXR0b24uZGF0YXNldC5pZDtcblxuICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENhcnQoeyBpbmNsdWRlT3B0aW9uczogdHJ1ZSB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdHMgPSByZXNwb25zZVswXS5saW5lSXRlbXMucGh5c2ljYWxJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucHJvZHVjdElkID09PSBOdW1iZXIodGhpcy5wcm9kdWN0SWQudmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhbmVscyA9IHByb2R1Y3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5vcHRpb25zLnNvbWUoKG9wdGlvbikgPT4gb3B0aW9uLm5hbWUgPT09ICdFZGdlIFR5cGUnKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYW5lbHMuZmluZCgocGFuZWwpID0+IHBhbmVsLmlkID09PSBpZCkucXVhbnRpdHkgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpZCwgcGFuZWxzLmZpbmQoKHBhbmVsKSA9PiBwYW5lbC5pZCA9PT0gaWQpLnF1YW50aXR5IC0gMSwgKF9lcnIsIF9yZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigncmVtb3ZlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtUmVtb3ZlKGlkLCAoX2VyciwgX3Jlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoJ3JlbW92ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihfZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoJ25vcm1hbCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBvc3RUb0NhcnQoKSB7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYWN0aW9uJywgJ2FkZCcpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2R1Y3RfaWQnLCBOdW1iZXIodGhpcy5wcm9kdWN0SWQudmFsdWUpKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdxdWFudGl0eScsIDEpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC0tdGltYmVyd29vbC1zYW1wbGUgLmZvcm0tc2VsZWN0IG9wdGlvbjpjaGVja2VkJykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogb3B0aW9uLnBhcmVudEVsZW1lbnQubmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChhdHRyaWJ1dGUubmFtZSwgYXR0cmlidXRlLnZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHF1YW50aXR5ID0gMDtcblxuICAgICAgICBjb25zdCBzZXRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmxhZykgcmV0dXJuO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDYXJ0KHsgaW5jbHVkZU9wdGlvbnM6IHRydWUgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0cyA9IHJlc3BvbnNlWzBdLmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5wcm9kdWN0SWQgPT09IE51bWJlcih0aGlzLnByb2R1Y3RJZC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYW5lbHMgPSBwcm9kdWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ub3B0aW9ucy5zb21lKChvcHRpb24pID0+IG9wdGlvbi5uYW1lID09PSAnRWRnZSBUeXBlJykpO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhbmVscy5mb3JFYWNoKChwYW5lbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHkgKz0gcGFuZWwucXVhbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVhbnRpdHlHbG9iYWwgPSBxdWFudGl0eTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChxdWFudGl0eSA+PSAzIHx8IHRoaXMucXVhbnRpdHlHbG9iYWwgPj0gMykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE1lc3NhZ2VzKCdub3JtYWwnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGFnID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChmb3JtRGF0YSwgKF9lcnIsIF9yZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBfZXJyIHx8IF9yZXNwb25zZS5kYXRhLmVycm9yO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE1lc3NhZ2VzKCdzdWNjZXNzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmZsYWcgPSB0cnVlO1xuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2V0VGltZXIpO1xuICAgICAgICB9LCAxMDAwKTtcblxuXG4gICAgICAgIHRoaXMuZmxhZyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IFtdO1xuICAgIH1cblxuICAgIG1vZGFsVHJpZ2dlcigpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtLXRpbWJlcndvb2wtc2FtcGxlJyk7XG4gICAgICAgIGNvbnN0IG1vZGFsVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0Vmlldy1zYW1wbGUgYScpO1xuXG4gICAgICAgIG1vZGFsVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUudG9wID0gJzUzMHB4JztcblxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdoYXMtYWN0aXZlTW9kYWwnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkVHJpZ2dlcigpIHtcbiAgICAgICAgY29uc3QgYWRkVG9DYXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9yZGVyLWZyZWUtc2FtcGxlLWJ1dHRvbicpO1xuXG4gICAgICAgIGFkZFRvQ2FydEJ0bi5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWVzc2FnZXMoJ2lucHJvZ3Jlc3MnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RUb0NhcnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZWxlY3RDb2xvclRyaWdnZXIoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdENvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F0dHJpYnV0ZV9zZWxlY3RfNzA3Jyk7XG5cbiAgICAgICAgc2VsZWN0Q29sb3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cImF0dHJpYnV0ZV9zZWxlY3RfNzA3XCJdIGltZycpO1xuXG4gICAgICAgICAgICBpbWcuc3JjID0gZS50YXJnZXQub3B0aW9uc1tlLnRhcmdldC5zZWxlY3RlZEluZGV4XS5kYXRhc2V0LmltYWdlO1xuICAgICAgICAgICAgaW1nLmFsdCA9IGUudGFyZ2V0Lm9wdGlvbnNbZS50YXJnZXQuc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZWN0SWNvblRyaWdnZXIoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdFRoaWNrbmVzc0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXR0cmlidXRlX3NlbGVjdF83MDYnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0RWRnZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXR0cmlidXRlX3NlbGVjdF83MDgnKTtcblxuICAgICAgICBzZWxlY3RUaGlja25lc3NJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVwiYXR0cmlidXRlX3NlbGVjdF83MDZcIl0gLmljb24gdXNlJyk7XG5cbiAgICAgICAgICAgIGljb24uaHJlZi5iYXNlVmFsID0gZS50YXJnZXQub3B0aW9uc1tlLnRhcmdldC5zZWxlY3RlZEluZGV4XS5kYXRhc2V0Lmljb247XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNlbGVjdEVkZ2VJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVwiYXR0cmlidXRlX3NlbGVjdF83MDhcIl0gLmljb24gdXNlJyk7XG5cbiAgICAgICAgICAgIGljb24uaHJlZi5iYXNlVmFsID0gZS50YXJnZXQub3B0aW9uc1tlLnRhcmdldC5zZWxlY3RlZEluZGV4XS5kYXRhc2V0Lmljb247XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWVNXVGltYmVyd29vbFNhbXBsZU1vZGFsRmFjdG9yeShjb250ZXh0KSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBZU1dUaW1iZXJ3b29sU2FtcGxlTW9kYWwpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFlTV1RpbWJlcndvb2xTYW1wbGVNb2RhbChjb250ZXh0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJ3NsaWNrLWNhcm91c2VsJztcblxuY2xhc3MgWVNXUHJvZHVjdEdhbGxlcnlDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdFZpZXctdGh1bWJuYWlscycpO1xuICAgICAgICB0aGlzLm1vYmlsZVRodW1ibmFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdFZpZXctdGh1bWJuYWlsLm1vYmlsZScpO1xuICAgICAgICB0aGlzLmRlc2t0b3BUaHVtYm5haWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RWaWV3LXRodW1ibmFpbC5kZXNrdG9wJyk7XG4gICAgICAgIHRoaXMuYXJyb3dXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlQnRuV3JhcCcpO1xuICAgICAgICB0aGlzLmZpcnN0U2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdFZpZXctdGh1bWJuYWlsLWxpbmsnKTtcbiAgICAgICAgdGhpcy5mbGFnTW9iaWxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmxhZ0Rlc2t0b3AgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZXRGbGFnKCk7XG4gICAgICAgIHRoaXMuc2V0Q2Fyb3VzZWwoKTtcbiAgICAgICAgdGhpcy5zZXRBcnJvdygpO1xuICAgICAgICB0aGlzLnNldE9ic2VydmUoKTtcbiAgICAgICAgdGhpcy5zZXRDbGlja0V2ZW50KCk7XG4gICAgfVxuXG4gICAgc2V0Q2Fyb3VzZWwoKSB7XG4gICAgICAgIHRoaXMuc2V0Rmlyc3RTbGlkZSgpO1xuICAgICAgICB0aGlzLmhpZGVDYXJvdXNlbCgpO1xuXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vYmlsZVRodW1ibmFpbHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJyb3dXcmFwLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5mbGFnTW9iaWxlKSByZXR1cm47XG5cbiAgICAgICAgICAgICQodGhpcy5jYXJvdXNlbCkuc2xpY2soe1xuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0eTogdHJ1ZSxcbiAgICAgICAgICAgIH0pLnNsaWNrKCdzbGlja0ZpbHRlcicsICcubW9iaWxlJykuc2xpY2soJ3JlZnJlc2gnKS5zbGljaygnc2xpY2tHb1RvJywgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kZXNrdG9wVGh1bWJuYWlscy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJvd1dyYXAucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLmZsYWdEZXNrdG9wKSByZXR1cm47XG5cbiAgICAgICAgICAgICQodGhpcy5jYXJvdXNlbCkuc2xpY2soe1xuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0eTogdHJ1ZSxcbiAgICAgICAgICAgIH0pLnNsaWNrKCdzbGlja0ZpbHRlcicsICcuZGVza3RvcCcpLnNsaWNrKCdyZWZyZXNoJykuc2xpY2soJ3NsaWNrR29UbycsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93Q2Fyb3VzZWwoKTtcbiAgICB9XG5cbiAgICBzZXRDbGlja0V2ZW50KCkge1xuICAgICAgICBjb25zdCB0aHVtYm5haWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RWaWV3LXRodW1ibmFpbC1saW5rJyk7XG5cbiAgICAgICAgdGh1bWJuYWlscy5mb3JFYWNoKChsaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlUHJldkJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlUHJldkJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RWaWV3LXRodW1ibmFpbC1saW5rJykubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVOZXh0QnRuJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVOZXh0QnRuJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJCh0aGlzLmNhcm91c2VsKS5zbGljaygnc2xpY2tHb1RvJywgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldEZpcnN0U2xpZGUoKSB7XG4gICAgICAgIHRoaXMuZmlyc3RTbGlkZS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5maXJzdFNsaWRlLmNsaWNrKCk7XG4gICAgfVxuXG4gICAgc2V0RmxhZygpIHtcbiAgICAgICAgdGhpcy5mbGFnTW9iaWxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mbGFnRGVza3RvcCA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0QXJyb3coKSB7XG4gICAgICAgIGNvbnN0IGFycm93UHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZVByZXZCdG4nKTtcbiAgICAgICAgY29uc3QgYXJyb3dOZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlTmV4dEJ0bicpO1xuXG4gICAgICAgIGFycm93UHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ29UbygncHJldmlvdXMnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXJyb3dOZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nb1RvKCduZXh0Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldE9ic2VydmUoKSB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlQ2Fyb3VzZWwoKTtcblxuXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGljay1hY3RpdmVbZGF0YS1zbGljay1pbmRleD1cIjBcIl0nKSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVQcmV2QnRuJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5jb250ZW50UmVjdC53aWR0aCA8IDEwMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZsYWdNb2JpbGUpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMuY2Fyb3VzZWwpLnNsaWNrKCdzbGlja1VuZmlsdGVyJykuc2xpY2soJ3NsaWNrRmlsdGVyJywgJy5tb2JpbGUnKS5zbGljaygncmVmcmVzaCcpLnNsaWNrKCdzbGlja0dvVG8nLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRGaXJzdFNsaWRlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZsYWdEZXNrdG9wKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLmNhcm91c2VsKS5zbGljaygnc2xpY2tVbmZpbHRlcicpLnNsaWNrKCdzbGlja0ZpbHRlcicsICcuZGVza3RvcCcpLnNsaWNrKCdyZWZyZXNoJykuc2xpY2soJ3NsaWNrR29UbycsIDApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZpcnN0U2xpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDYXJvdXNlbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHkpO1xuICAgIH1cblxuICAgIGdvVG8oZGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGltYWdlTGlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0Vmlldy10aHVtYm5haWwtbGluaycpKTtcbiAgICAgICAgY29uc3QgYWN0aXZlSW5kZXggPSBpbWFnZUxpbmtzLmZpbmRJbmRleChsaW5rID0+IGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSk7XG5cbiAgICAgICAgbGV0IHRhcmdldEluZGV4O1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICAgICAgdGFyZ2V0SW5kZXggPSAoYWN0aXZlSW5kZXggKyAxKSAlIGltYWdlTGlua3MubGVuZ3RoO1xuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ByZXZpb3VzJykge1xuICAgICAgICAgICAgdGFyZ2V0SW5kZXggPSAoYWN0aXZlSW5kZXggLSAxICsgaW1hZ2VMaW5rcy5sZW5ndGgpICUgaW1hZ2VMaW5rcy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZVByZXZCdG4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlUHJldkJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldEluZGV4ID09PSBpbWFnZUxpbmtzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZU5leHRCdG4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlTmV4dEJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodGFyZ2V0SW5kZXggPT09IGltYWdlTGlua3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgJCh0aGlzLmNhcm91c2VsKS5zbGljaygnc2xpY2tOZXh0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMuY2Fyb3VzZWwpLnNsaWNrKCdzbGlja0dvVG8nLCB0YXJnZXRJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZUxpbmtzW3RhcmdldEluZGV4XS5jbGljaygpO1xuICAgIH1cblxuICAgIGhpZGVDYXJvdXNlbCgpIHtcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHRoaXMuYXJyb3dXcmFwLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgIH1cblxuICAgIHNob3dDYXJvdXNlbCgpIHtcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICB0aGlzLmFycm93V3JhcC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWVNXUHJvZHVjdEdhbGxlcnlDb250cm9sbGVyRmFjdG9yeShjb250ZXh0KSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBZU1dQcm9kdWN0R2FsbGVyeUNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFlTV1Byb2R1Y3RHYWxsZXJ5Q29udHJvbGxlcihjb250ZXh0KTtcbiAgICB9XG59XG4iLCJjbGFzcyBZU1dHZW5lcmljUHJpY2luZ0NhbGN1bGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5wcm9kdWN0UHJpY2VzID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmljZVZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFByaWNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5idWxrRGlzY291bnRSYXRlcyA9IG51bGw7XG4gICAgICAgIHRoaXMub3B0aW9uU2VsZWN0ZWQgPSAnJztcbiAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMgPSB0aGlzLmNvbnRleHQuY3VzdG9tRmllbGRzIHx8IFtdO1xuICAgICAgICB0aGlzLnNxdWFyZUZvb3RhZ2VJZCA9IE51bWJlcih0aGlzLmNvbnRleHQuc3F1YXJlRm9vdGFnZUlkKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0IH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdFZpZXctLWdlbmVyaWMtY2FsY3VsYXRvcicpO1xuXG4gICAgICAgIGlmICghcHJvZHVjdCB8fCAhcHJvZHVjdC5idWxrX2Rpc2NvdW50X3JhdGVzIHx8ICFjYWxjdWxhdG9yKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0UHJpY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2R1Y3RWaWV3LWRldGFpbHMgW2RhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheF0nKTtcbiAgICAgICAgdGhpcy5wcmljZVZhbHVlID0gTnVtYmVyKHRoaXMucHJvZHVjdFByaWNlc1swXS50ZXh0Q29udGVudC5zcGxpdCgnJCcpWzFdKTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFByaWNlID0gTnVtYmVyKHRoaXMucHJvZHVjdFByaWNlc1swXS50ZXh0Q29udGVudC5zcGxpdCgnJCcpWzFdKTtcblxuICAgICAgICBjb25zdCB7IGJ1bGtfZGlzY291bnRfcmF0ZXM6IGJ1bGtEaXNjb3VudFJhdGVzIH0gPSBwcm9kdWN0O1xuXG4gICAgICAgIHRoaXMuYnVsa0Rpc2NvdW50UmF0ZXMgPSBidWxrRGlzY291bnRSYXRlcztcblxuICAgICAgICBjb25zdCBhZGRUb0NhcmRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RWaWV3LWRldGFpbHMnKTtcbiAgICAgICAgY29uc3QgZGVzY0J1dHRvbiA9IGFkZFRvQ2FyZFdyYXBwZXIucXVlcnlTZWxlY3RvcignW2RhdGEtYWN0aW9uPVwiZGVjXCJdJyk7XG4gICAgICAgIGNvbnN0IGluY0J1dHRvbiA9IGFkZFRvQ2FyZFdyYXBwZXIucXVlcnlTZWxlY3RvcignW2RhdGEtYWN0aW9uPVwiaW5jXCJdJyk7XG4gICAgICAgIGNvbnN0IHF0eUlucHV0ID0gYWRkVG9DYXJkV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcjbnVtYmVyT2ZQYW5lbHMnKTtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlQnRuID0gYWRkVG9DYXJkV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcjY2FsY3VsYXRlU3F1YXJlRnQnKTtcblxuICAgICAgICB0aGlzLmNoYW5nZU9wdGlvbkV2ZW50KCk7XG4gICAgICAgIHRoaXMuZ2V0T3B0aW9uU2l6ZSgpO1xuXG4gICAgICAgIGluY0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2UoYnVsa0Rpc2NvdW50UmF0ZXMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkZXNjQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZShidWxrRGlzY291bnRSYXRlcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChxdHlJbnB1dCkge1xuICAgICAgICAgICAgcXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZShidWxrRGlzY291bnRSYXRlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYWxjdWxhdGVCdG4pIHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlKGJ1bGtEaXNjb3VudFJhdGVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG5cbiAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjYWxsYmFjayA9IChtdXRhdGlvbkxpc3QpID0+IHtcbiAgICAgICAgICAgIG11dGF0aW9uTGlzdC5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1IYXNBdHRyaWJ1dGUgPSBtdXRhdGlvbi50YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXgnKTtcblxuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnY2hpbGRMaXN0JyAmJiBtSGFzQXR0cmlidXRlICYmIGZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZVZhbHVlID0gTnVtYmVyKG11dGF0aW9uLnRhcmdldC50ZXh0Q29udGVudC5zcGxpdCgnJCcpWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFByaWNlID0gdGhpcy5wcmljZVZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICAgICAgY29uc3QgcHJldmlld1Byb2R1Y3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdFZpZXctZGV0YWlscycpO1xuICAgICAgICBjb25zdCBwcmljZSA9IHByZXZpZXdQcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJyk7XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXJQcmljZSA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGUpIHtmbGFnID0gdHJ1ZTt9KTtcbiAgICAgICAgb2JzZXJ2ZXJQcmljZS5vYnNlcnZlKHByaWNlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShwcmV2aWV3UHJvZHVjdCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlUHJpY2UocHJpY2UsIGRpc2NvdW50KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKChwcmljZSAtIChwcmljZSAqIGRpc2NvdW50IC8gMTAwKSkgKiAxMDApIC8gMTAwO1xuICAgIH1cblxuICAgIHVwZGF0ZVByaWNlKGJ1bGtEaXNjb3VudFJhdGVzKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbkxpc3RbdGhpcy5vcHRpb25TZWxlY3RlZF0gJiZcbiAgICAgICAgICAgIHRoaXMub3B0aW9uTGlzdFt0aGlzLm9wdGlvblNlbGVjdGVkXS52YWx1ZSA9PT0gJ3F1b3RlJykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bWJlck9mUGFuZWxzJyk7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5VmFsdWUgPSBOdW1iZXIocXVhbnRpdHkudmFsdWUpO1xuICAgICAgICBsZXQgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgbGV0IGRpc2NvbnRWYWx1ZSA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWxrRGlzY291bnRSYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZGlzY291bnQgPSBidWxrRGlzY291bnRSYXRlc1tpXTtcblxuICAgICAgICAgICAgaWYgKGRpc2NvdW50Lm1pbiA8PSBxdWFudGl0eVZhbHVlICYmIHF1YW50aXR5VmFsdWUgPD0gKGRpc2NvdW50Lm1heCB8fCBxdWFudGl0eVZhbHVlICsgMSkpIHtcbiAgICAgICAgICAgICAgICBjaGVjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGlzY29udFZhbHVlID0gZGlzY291bnQuZGlzY291bnQudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2hlY2spIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdFByaWNlcy5mb3JFYWNoKChwcm9kdWN0UHJpY2UpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2UudGV4dENvbnRlbnQgPSBgJCR7KHRoaXMub3JpZ2luYWxQcmljZSkudG9GaXhlZCgyKX1gO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcmljZUFmdGVyID0gdGhpcy5jYWxjdWxhdGVQcmljZShOdW1iZXIodGhpcy5wcmljZVZhbHVlKSwgZGlzY29udFZhbHVlKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgY29uc3QgcHJpY2VCZWZvcmUgPSB0aGlzLnByaWNlVmFsdWUudG9GaXhlZCgyKTtcblxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0UHJpY2VzLmZvckVhY2goKHByb2R1Y3RQcmljZSkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RQcmljZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwieXN3LWpzLXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInlzdy1qcy1wcmljZV9fYmVmb3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR7cHJpY2VCZWZvcmV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInlzdy1qcy1wcmljZV9fbm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR7cHJpY2VBZnRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPmA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZU9wdGlvbkV2ZW50KCkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXSBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKTtcblxuICAgICAgICBjb25zdCBfb3B0aW9uID0gQXJyYXkuZnJvbShvcHRpb25zKS5maW5kKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gb3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgIGlmICghaW5wdXQpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBjb25zdCBvcHRpb25JZCA9IGlucHV0Lm5hbWUucmVwbGFjZSgvXFxEL2csICcnKTtcblxuICAgICAgICAgICAgaWYgKCFvcHRpb25JZCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIGlmIChOdW1iZXIob3B0aW9uSWQpID09PSBOdW1iZXIodGhpcy5zcXVhcmVGb290YWdlSWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghX29wdGlvbikgcmV0dXJuO1xuXG4gICAgICAgIF9vcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKCFvcHRpb25WYWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvblNlbGVjdGVkID0gb3B0aW9uVmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldE9wdGlvblNpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb250ZXh0LnByb2R1Y3RPcHRpb25zKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcHJvZHVjdE9wdGlvbnMgPSB0aGlzLmNvbnRleHQucHJvZHVjdE9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNpemVPcHRpb24gPSBwcm9kdWN0T3B0aW9ucy5maW5kKChvcHRpb24pID0+IG9wdGlvbi5pZCA9PT0gTnVtYmVyKHRoaXMuc3F1YXJlRm9vdGFnZUlkKSk7XG5cbiAgICAgICAgaWYgKCFzaXplT3B0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbkxpc3QgPSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdGhpcy5jdXN0b21GaWVsZHMuZmluZCgoZmllbGQpID0+IGZpZWxkLm5hbWUuaW5jbHVkZXMoJ3NxdWFyZV9mb290YWdlJykpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZCA9ICdkZWZhdWx0JztcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbiA9IHNpemVPcHRpb24udmFsdWVzLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnNlbGVjdGVkKTtcblxuICAgICAgICBpZiAoIWRlZmF1bHRPcHRpb24pIHJldHVybjtcblxuICAgICAgICBjb25zdCBzcWZ0VmFsdWUgPSB7fTtcblxuICAgICAgICBzaXplT3B0aW9uLnZhbHVlcy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIHNxZnRWYWx1ZVtvcHRpb24uaWRdID0gdGhpcy5jdXN0b21GaWVsZHMuZmluZCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgZmllbGQubmFtZS5pbmNsdWRlcyhgc3F1YXJlX2Zvb3RhZ2VbJHtvcHRpb24uaWR9XWApKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZCA9IGRlZmF1bHRPcHRpb24uaWQ7XG4gICAgICAgIHRoaXMub3B0aW9uTGlzdCA9IHNxZnRWYWx1ZTtcbiAgICB9XG5cbiAgICByZXNldFByaWNlKCkge1xuICAgICAgICB0aGlzLnByb2R1Y3RQcmljZXMuZm9yRWFjaCgocHJvZHVjdFByaWNlKSA9PiB7XG4gICAgICAgICAgICBwcm9kdWN0UHJpY2UudGV4dENvbnRlbnQgPSBgJCR7KHRoaXMub3JpZ2luYWxQcmljZSkudG9GaXhlZCgyKX1gO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFlTV0dlbmVyaWNQcmljaW5nQ2FsY3VsYXRvckZhY3RvcnkoY29udGV4dCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgWVNXR2VuZXJpY1ByaWNpbmdDYWxjdWxhdG9yKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBZU1dHZW5lcmljUHJpY2luZ0NhbGN1bGF0b3IoY29udGV4dCk7XG4gICAgfVxufVxuIiwiY2xhc3MgWVNXR2VuZXJpY1NxZnRDYWxjdWxhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuc3FmdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NxdWFyZUZvb3RhZ2UnKTtcbiAgICAgICAgdGhpcy5xdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNudW1iZXJPZlBhbmVscycpO1xuICAgICAgICB0aGlzLmRlZmF1bHRRdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdHlbXScpO1xuICAgICAgICB0aGlzLmNvdmVyc1NGID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyc1NGIHNwYW4uc2ZDb3VudCcpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYWxjdWxhdGVTcXVhcmVGdCcpO1xuICAgICAgICB0aGlzLmluY0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2VQYW5lbE51bWJlcnMgW2RhdGEtYWN0aW9uPVwiaW5jXCJdJyk7XG4gICAgICAgIHRoaXMuZGVjQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZVBhbmVsTnVtYmVycyBbZGF0YS1hY3Rpb249XCJkZWNcIl0nKTtcbiAgICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZCA9ICcnO1xuICAgICAgICB0aGlzLmJ1bGtEaXNjb3VudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3FmdCA9IDA7XG4gICAgICAgIHRoaXMuc2l6ZU9wdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMucHJvZHVjdERpdk9wdGlvbnMgPSB0aGlzLmNvbnRleHQucHJvZHVjdE9wdGlvbnM7XG4gICAgICAgIHRoaXMuc3F1YXJlRm9vdGFnZUlkID0gdGhpcy5jb250ZXh0LnNxdWFyZUZvb3RhZ2VJZDtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgeyBidWxrRGlzY291bnRSYXRlcywgY3VzdG9tRmllbGRzIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgaWYgKCFidWxrRGlzY291bnRSYXRlcykgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuYnVsa0Rpc2NvdW50ID0gYnVsa0Rpc2NvdW50UmF0ZXMgfHwgW107XG4gICAgICAgIHRoaXMuY3VzdG9tRmllbGRzID0gY3VzdG9tRmllbGRzIHx8IFtdO1xuXG4gICAgICAgIGxldCBzcWZ0RmllbGQgPSBudWxsO1xuXG4gICAgICAgIHNxZnRGaWVsZCA9IGN1c3RvbUZpZWxkcy5maWx0ZXIoKGZpZWxkKSA9PiBmaWVsZC5uYW1lLmluY2x1ZGVzKCdzcXVhcmVfZm9vdGFnZScpKTtcblxuICAgICAgICB0aGlzLnNxZnQgPSBzcWZ0RmllbGQubGVuZ3RoID8gTnVtYmVyKHNxZnRGaWVsZFswXS52YWx1ZSkgOiAxO1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ3VzdG9tU2l6ZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmdldE9wdGlvblNpemUoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlT3B0aW9uRXZlbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlU3F1YXJlRnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNxZnRJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5zcWZ0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4gdGhpcy5pc051bWJlcihlKSk7XG5cbiAgICAgICAgICAgIHRoaXMucXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHF0eSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlU3F1YXJlRnRGcm9tUXR5KHF0eSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNhbGN1bGF0ZUJ0bikge1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVNxdWFyZUZ0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnF0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuc2V0UXVhbnRpdHlJbkRlZmF1bHRJbnB1dCgpKTtcbiAgICAgICAgdGhpcy5pbmNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5jaGFuZ2VQYW5lbFZhbHVlKGUsICdhZGQnKSk7XG4gICAgICAgIHRoaXMuZGVjQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuY2hhbmdlUGFuZWxWYWx1ZShlLCAnZGVjJykpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVNxdWFyZUZ0KCkge1xuICAgICAgICBpZiAoIXRoaXMuc3FmdElucHV0KSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgc3FmdFF1YW50aXR5ID0gdGhpcy5zcWZ0SW5wdXQudmFsdWU7XG5cbiAgICAgICAgaWYgKCFzcWZ0UXVhbnRpdHkpIHJldHVybjtcblxuICAgICAgICBpZiAoc3FmdFF1YW50aXR5ID4gMCAmJiB0aGlzLnNxZnQgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZlBhbmVscyA9IE1hdGguY2VpbChzcWZ0UXVhbnRpdHkgLyB0aGlzLnNxZnQpO1xuICAgICAgICAgICAgY29uc3QgY292ZXJzU0ZRdWFudGl0eSA9IHRoaXMuc3FmdCAqIG51bWJlck9mUGFuZWxzO1xuICAgICAgICAgICAgdGhpcy5xdHlJbnB1dC52YWx1ZSA9IG51bWJlck9mUGFuZWxzO1xuICAgICAgICAgICAgdGhpcy5jb3ZlcnNTRi5pbm5lckhUTUwgPSBjb3ZlcnNTRlF1YW50aXR5LnRvRml4ZWQoMSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2hvd0hpZGVTYXZpbmdzKG51bWJlck9mUGFuZWxzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucXR5SW5wdXQudmFsdWUgPSAxO1xuICAgICAgICAgICAgdGhpcy5jb3ZlcnNTRi5pbm5lckhUTUwgPSB0aGlzLnNxZnQudG9GaXhlZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0hpZGVTYXZpbmdzKDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlU3F1YXJlRnRGcm9tUXR5KHF0eSkge1xuICAgICAgICBjb25zdCBudW1iZXJPZlBhbmVscyA9IHF0eTtcbiAgICAgICAgY29uc3QgY292ZXJzU0ZRdWFudGl0eSA9IHRoaXMuc3FmdCAqIG51bWJlck9mUGFuZWxzO1xuICAgICAgICB0aGlzLnF0eUlucHV0LnZhbHVlID0gbnVtYmVyT2ZQYW5lbHM7XG4gICAgICAgIHRoaXMuY292ZXJzU0YuaW5uZXJIVE1MID0gY292ZXJzU0ZRdWFudGl0eS50b0ZpeGVkKDEpO1xuXG4gICAgICAgIHRoaXMuc2hvd0hpZGVTYXZpbmdzKG51bWJlck9mUGFuZWxzKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VQYW5lbFZhbHVlKGUsIG4pIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBudW1iZXJPZlBhbmVsc1F1YW50aXR5ID0gdGhpcy5xdHlJbnB1dC52YWx1ZTtcblxuICAgICAgICBpZiAobiA9PT0gJ2FkZCcpIHtcbiAgICAgICAgICAgIHRoaXMucXR5SW5wdXQudmFsdWUgPSBOdW1iZXIobnVtYmVyT2ZQYW5lbHNRdWFudGl0eSkgKyAxO1xuICAgICAgICB9IGVsc2UgaWYgKG51bWJlck9mUGFuZWxzUXVhbnRpdHkgPiAxKSB7XG4gICAgICAgICAgICB0aGlzLnF0eUlucHV0LnZhbHVlID0gTnVtYmVyKG51bWJlck9mUGFuZWxzUXVhbnRpdHkpIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNxZnRJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVTcXVhcmVGdEZyb21RdHkodGhpcy5xdHlJbnB1dC52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFF1YW50aXR5SW5EZWZhdWx0SW5wdXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0hpZGVTYXZpbmdzKHRoaXMucXR5SW5wdXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNOdW1iZXIoZSkge1xuICAgICAgICByZXR1cm4gIWlzTmFOKE51bWJlcihlKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9XG5cbiAgICBzZXRRdWFudGl0eUluRGVmYXVsdElucHV0KCkge1xuICAgICAgICBjb25zdCBxdHkgPSB0aGlzLnF0eUlucHV0LnZhbHVlIHx8IDE7XG5cbiAgICAgICAgdGhpcy5kZWZhdWx0UXR5SW5wdXQudmFsdWUgPSBxdHk7XG4gICAgfVxuXG4gICAgc2hvd0hpZGVTYXZpbmdzKHF0eSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNOdW1iZXIocXR5KSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IF9xdHkgPSBOdW1iZXIocXR5KTtcbiAgICAgICAgY29uc3QgZGlzY291bnRQZXJjZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc2NQZXJjZW50Jyk7XG4gICAgICAgIGNvbnN0IGRpc2NvbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmVEaXNjb3VudCcpO1xuICAgICAgICBsZXQgcG9yY2VudCA9IDA7XG5cbiAgICAgICAgdGhpcy5kZWZhdWx0UXR5SW5wdXQudmFsdWUgPSBfcXR5O1xuXG4gICAgICAgIHRoaXMuYnVsa0Rpc2NvdW50LmZvckVhY2goKGRpc2NvdW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZGlzY291bnQubWluIDw9IF9xdHkgJiYgX3F0eSA8PSAoZGlzY291bnQubWF4IHx8IF9xdHkgKyAxKSkge1xuICAgICAgICAgICAgICAgIHBvcmNlbnQgPSBkaXNjb3VudC5kaXNjb3VudC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHBvcmNlbnQgPiAwICYmIHRoaXMuc3FmdCAhPT0gJ3F1b3RlJykge1xuICAgICAgICAgICAgZGlzY291bnRQZXJjZW50LmlubmVySFRNTCA9IHBvcmNlbnQ7XG4gICAgICAgICAgICBkaXNjb250V3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNjb250V3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNDdXN0b21TaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0RGl2T3B0aW9ucy5maW5kKChvcHRpb24pID0+IG9wdGlvbi5pZCA9PT0gTnVtYmVyKHRoaXMuc3F1YXJlRm9vdGFnZUlkKSk7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uU2l6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRleHQucHJvZHVjdE9wdGlvbnMpIHJldHVybjtcblxuICAgICAgICBjb25zdCBwcm9kdWN0T3B0aW9ucyA9IHRoaXMuY29udGV4dC5wcm9kdWN0T3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2l6ZU9wdGlvbiA9IHByb2R1Y3RPcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLmlkID09PSBOdW1iZXIodGhpcy5zcXVhcmVGb290YWdlSWQpKTtcblxuICAgICAgICBpZiAoIXNpemVPcHRpb24pIHJldHVybjtcblxuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9uID0gc2l6ZU9wdGlvbi52YWx1ZXMuZmluZCgob3B0aW9uKSA9PiBvcHRpb24uc2VsZWN0ZWQpO1xuXG4gICAgICAgIGlmICghZGVmYXVsdE9wdGlvbikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHNxZnRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIHNpemVPcHRpb24udmFsdWVzLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgc3FmdFZhbHVlW29wdGlvbi5pZF0gPSB0aGlzLmN1c3RvbUZpZWxkcy5maW5kKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICBmaWVsZC5uYW1lLmluY2x1ZGVzKGBzcXVhcmVfZm9vdGFnZVske29wdGlvbi5pZH1dYCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNpemVPcHRpb24gPSBzaXplT3B0aW9uLnZhbHVlcztcbiAgICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZCA9IHNpemVPcHRpb24udmFsdWVzLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnNlbGVjdGVkKS5pZCB8fCBzaXplT3B0aW9uLnZhbHVlc1swXS5pZDtcbiAgICAgICAgdGhpcy5zcWZ0ID0gc3FmdFZhbHVlW2RlZmF1bHRPcHRpb24uaWRdLnZhbHVlO1xuICAgICAgICB0aGlzLmNvdmVyc1NGLmlubmVySFRNTCA9IE51bWJlcih0aGlzLnNxZnQpLnRvRml4ZWQoMSk7XG4gICAgfVxuXG4gICAgY2hhbmdlT3B0aW9uRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdIFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpO1xuXG4gICAgICAgIGNvbnN0IF9vcHRpb24gPSBBcnJheS5mcm9tKG9wdGlvbnMpLmZpbmQoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gb3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0ID8gaW5wdXQgOiBvcHRpb24ucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgXG4gICAgICAgICAgICBpZiAoIWlucHV0KSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uSWQgPSBpbnB1dC5uYW1lLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9uSWQpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBpZiAoTnVtYmVyKG9wdGlvbklkKSA9PT0gTnVtYmVyKHRoaXMuc3F1YXJlRm9vdGFnZUlkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIV9vcHRpb24pIHJldHVybjtcblxuICAgICAgICBfb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9uVmFsdWUpIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZCA9IG9wdGlvblZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLmNoYW5nZU9wdGlvblNpemUob3B0aW9uVmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFuZ2VPcHRpb25TaXplKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHNxZnRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIHRoaXMuc2l6ZU9wdGlvbi5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIHNxZnRWYWx1ZVtvcHRpb24uaWRdID0gdGhpcy5jdXN0b21GaWVsZHMuZmluZCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgZmllbGQubmFtZS5pbmNsdWRlcyhgc3F1YXJlX2Zvb3RhZ2VbJHtvcHRpb24uaWR9XWApKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zcWZ0ID0gc3FmdFZhbHVlW3ZhbHVlXSA/IHNxZnRWYWx1ZVt2YWx1ZV0udmFsdWUgOiAwO1xuXG4gICAgICAgIGlmICghc3FmdFZhbHVlW3ZhbHVlXSB8fCBzcWZ0VmFsdWVbdmFsdWVdLnZhbHVlID09PSAncXVvdGUnKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5jb3ZlcnNTRi5pbm5lckhUTUwgPSBOdW1iZXIoc3FmdFZhbHVlW3ZhbHVlXS52YWx1ZSkudG9GaXhlZCgxKTtcblxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVNxdWFyZUZ0RnJvbVF0eSh0aGlzLnF0eUlucHV0LnZhbHVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFlTV0dlbmVyaWNTcWZ0Q2FsY3VsYXRvckZhY3RvcnkoY29udGV4dCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgWVNXR2VuZXJpY1NxZnRDYWxjdWxhdG9yKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBZU1dHZW5lcmljU3FmdENhbGN1bGF0b3IoY29udGV4dCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFlTV1ByaWNpbmdDYWxjdWxhdG9yRmFjdG9yeSBmcm9tICcuL2NvbXBvbmVudHMvcHJpY2luZy1jYWxjdWxhdG9yJztcbmltcG9ydCBZU1dHZW5lcmljUHJpY2luZ0NhbGN1bGF0b3JGYWN0b3J5IGZyb20gJy4vY29udHJvbGxlcnMvZ2VuZXJpYy1jYWxjdWxhdG9yLmNvbnRyb2xsZXInO1xuaW1wb3J0IFlTV0dlbmVyaWNTcWZ0Q2FsY3VsYXRvckZhY3RvcnkgZnJvbSAnLi9jb250cm9sbGVycy9nZW5lcmljLXNxZnQtY2FsY3VsYXRvci5jb250cm9sbGVyJztcbmltcG9ydCBZU1dUYWJsZVByaWNpbmdDYWxjdWxhdG9yRmFjdG9yeSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUtcHJpY2luZy1jYWxjdWxhdG9yJztcbmltcG9ydCB5c3dDYXJQYWNrYWdlIGZyb20gJy4vY29tcG9uZW50cy9jYXItcGFja2FnZSc7XG5pbXBvcnQgeXN3Q29udHJvbEdyYXBoaWNzIGZyb20gJy4vY29tcG9uZW50cy9jb250cm9sLWdyYXBoaWNzJztcbmltcG9ydCBZU1dUaW1iZXJ3b29sQ2FsY3VsYXRvckZhY3RvcnkgZnJvbSAnLi9jb21wb25lbnRzL3RpbWJlcndvb2wtY2FsY3VsYXRvcic7XG5pbXBvcnQgWVNXVGltYmVyd29vbFNhbXBsZU1vZGFsRmFjdG9yeSBmcm9tICcuL2NvbXBvbmVudHMvdGltYmVyd29vbC1zYW1wbGUtbW9kYWwnO1xuaW1wb3J0IFlTV1Byb2R1Y3RHYWxsZXJ5Q29udHJvbGxlckZhY3RvcnkgZnJvbSAnLi9jb250cm9sbGVycy9nYWxsZXJ5LmNvbnRyb2xsZXInO1xuaW1wb3J0IFlTV0NlbGx1em9yYmVWM0ZhY3RvcnkgZnJvbSAnLi9jb21wb25lbnRzL2NlbGx1em9yYmUtdjMnO1xuXG5jbGFzcyBZU1dQcm9kdWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIFlTV0dlbmVyaWNTcWZ0Q2FsY3VsYXRvckZhY3RvcnkodGhpcy5jb250ZXh0KTtcbiAgICAgICAgWVNXR2VuZXJpY1ByaWNpbmdDYWxjdWxhdG9yRmFjdG9yeSh0aGlzLmNvbnRleHQpO1xuICAgICAgICBZU1dQcmljaW5nQ2FsY3VsYXRvckZhY3RvcnkodGhpcy5jb250ZXh0KTtcbiAgICAgICAgWVNXVGFibGVQcmljaW5nQ2FsY3VsYXRvckZhY3RvcnkodGhpcy5jb250ZXh0KTtcbiAgICAgICAgeXN3Q2FyUGFja2FnZSgpO1xuICAgICAgICB5c3dDb250cm9sR3JhcGhpY3MoKTtcbiAgICAgICAgWVNXVGltYmVyd29vbENhbGN1bGF0b3JGYWN0b3J5KHRoaXMuY29udGV4dCk7XG4gICAgICAgIFlTV1RpbWJlcndvb2xTYW1wbGVNb2RhbEZhY3RvcnkodGhpcy5jb250ZXh0KTtcbiAgICAgICAgWVNXUHJvZHVjdEdhbGxlcnlDb250cm9sbGVyRmFjdG9yeSgpO1xuICAgICAgICBZU1dDZWxsdXpvcmJlVjNGYWN0b3J5KHRoaXMuY29udGV4dCk7XG4gICAgICAgIHRoaXMuZ290b0d1YXJhbnRlZSgpO1xuICAgICAgICB0aGlzLnF1b3RlQnRuSGFuZGxlcigpO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlT3B0aW9uRXZlbnQoKTtcbiAgICAgICAgdGhpcy5jbGlja0NvbG9yT3B0aW9uKCk7XG4gICAgfVxuXG4gICAgY2xpY2tDb2xvck9wdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29sb3JPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yJyk7XG5cbiAgICAgICAgaWYgKGNvbG9yT3B0aW9ucykge1xuICAgICAgICAgICAgY29sb3JPcHRpb25zLnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZy5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ290b0d1YXJhbnRlZSgpIHtcbiAgICAgICAgY29uc3QgZ3VhcmFudGVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RWaWV3LWd1YXJhbnRlZScpO1xuXG4gICAgICAgIGlmICghZ3VhcmFudGVlKSByZXR1cm47XG5cbiAgICAgICAgZ3VhcmFudGVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgZ3VhcmFudGVlU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9HdWFyYW50ZWU0NDI5Jyk7XG5cbiAgICAgICAgICAgIGlmICghZ3VhcmFudGVlU2VjdGlvbikgcmV0dXJuO1xuXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgZ3VhcmFudGVlU2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBxdW90ZUJ0bkhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IHF1b3RlQ3V0b2ZmID0gTnVtYmVyKHRoaXMuY29udGV4dC5xdW90ZUN1dG9mZik7XG5cbiAgICAgICAgaWYgKE51bWJlci5pc05hTihxdW90ZUN1dG9mZikpIHJldHVybjtcblxuICAgICAgICBjb25zdCBxdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNudW1iZXJPZlBhbmVscycpO1xuXG4gICAgICAgIGlmICghcXR5SW5wdXQpIHJldHVybjtcblxuICAgICAgICBjb25zdCBudW1iZXJPZlBhbmVscyA9IHF0eUlucHV0O1xuICAgICAgICBjb25zdCBidG5JbmNyZWFzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjdGlvbj1cImluY1wiXScpO1xuICAgICAgICBjb25zdCBidG5EZWNyZWFzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjdGlvbj1cImRlY1wiXScpO1xuICAgICAgICBjb25zdCBjYWxjdWxhdGVTcXVhcmVGdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYWxjdWxhdGVTcXVhcmVGdCcpO1xuICAgICAgICBjb25zdCBidXlOb3dCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLXFuLWJ1eS1ub3cnKTtcbiAgICAgICAgY29uc3QgYWRkVG9DYXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1xbi1hZGQtdG8tY2FydCcpO1xuICAgICAgICBjb25zdCBhcnIgPSBbYnV5Tm93QnRuLCBhZGRUb0NhcnRCdG5dO1xuXG4gICAgICAgIGlmICghbnVtYmVyT2ZQYW5lbHMgfHwgIWJ0bkluY3JlYXNlIHx8ICFidG5EZWNyZWFzZSB8fCAhY2FsY3VsYXRlU3F1YXJlRnQgfHwgIWFyci5ldmVyeShCb29sZWFuKSkgcmV0dXJuO1xuXG4gICAgICAgIG51bWJlck9mUGFuZWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBudW1iZXJPZlBhbmVscy52YWx1ZTtcblxuICAgICAgICAgICAgdGhpcy5oYW5kbGVRdW90ZUJ0blZpc2liaWxpdHkodmFsdWUsIHF1b3RlQ3V0b2ZmKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgW2J0bkluY3JlYXNlLCBidG5EZWNyZWFzZV0uZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbnVtYmVyT2ZQYW5lbHMudmFsdWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVF1b3RlQnRuVmlzaWJpbGl0eSh2YWx1ZSwgcXVvdGVDdXRvZmYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICggY2FsY3VsYXRlU3F1YXJlRnQgKSB7XG4gICAgICAgICAgICBjYWxjdWxhdGVTcXVhcmVGdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG51bWJlck9mUGFuZWxzLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVRdW90ZUJ0blZpc2liaWxpdHkodmFsdWUsIHF1b3RlQ3V0b2ZmKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93Lm1pc3NpbmdPcHRpb25TZWxlY3QgPSB0aGlzLm1pc3NpbmdPcHRpb25TZWxlY3Q7XG5cbiAgICAgICAgYXJyLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgIGlmICghYnRuKSByZXR1cm47XG5cbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBxdHlJbnB1dC52YWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA8IHF1b3RlQ3V0b2ZmIHx8ICF3aW5kb3cuUU4gfHwgIXdpbmRvdy5RTi5hZGRfcHJvZHVjdCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1pc3NpbmdPcHRpb25TZWxlY3QoKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5RTi5hZGRfcHJvZHVjdChudWxsLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWlzc2luZ09wdGlvblNlbGVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdERpdk9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdFZpZXctb3B0aW9ucyBbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdIFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpO1xuICAgICAgICBsZXQgZmxhZ0RpdiA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghcHJvZHVjdERpdk9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmxhZ0RpdjtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2R1Y3REaXZPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IG9wdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgc2VsZWN0Jyk7XG4gICAgICAgICAgICBsZXQgZmxhZ09wdGlvbnMgPSBmYWxzZTtcblxuICAgICAgICAgICAgb3B0aW9ucy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5yZXF1aXJlZCAmJiAoaW5wdXQuY2hlY2tlZCB8fCAoaW5wdXQudGFnTmFtZSA9PT0gJ1NFTEVDVCcgJiYgaW5wdXQudmFsdWUpKSkge1xuICAgICAgICAgICAgICAgICAgICBmbGFnT3B0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghZmxhZ09wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBmbGFnRGl2ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZsYWdEaXY7XG4gICAgfVxuXG4gICAgaGFuZGxlUXVvdGVCdG5WaXNpYmlsaXR5KHZhbHVlLCBxdW90ZUN1dG9mZikge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25TZWxlY3RlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uU2VsZWN0ZWQuaW5jbHVkZXMoJ0N1c3RvbSBTaXplcycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnV5QnRuc1dyYXBwZXJPcmlnbmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1eS1idXR0b25zLS1vcmlnaW5hbCcpO1xuICAgICAgICBjb25zdCBidXlCdG5zV3JhcHBlclF1b3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1eS1idXR0b25zLS1xdW90ZScpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA+PSBxdW90ZUN1dG9mZikge1xuICAgICAgICAgICAgYnV5QnRuc1dyYXBwZXJPcmlnbmFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBidXlCdG5zV3JhcHBlclF1b3RlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBidXlCdG5zV3JhcHBlck9yaWduYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGJ1eUJ0bnNXcmFwcGVyUXVvdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBjaGFuZ2VPcHRpb25FdmVudCgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0gW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9XCJzZXQtcmVjdGFuZ2xlXCJdJyk7XG5cbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsRWwgPSBvcHRpb24ucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcblxuICAgICAgICAgICAgaWYgKCFsYWJlbEVsKSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gbGFiZWxFbC5pbm5lclRleHQ7XG5cbiAgICAgICAgICAgIGlmICghbGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnY2hvb3NlIHNpemVzJykpIHJldHVybjtcblxuICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgX2xhYmVsID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFfbGFiZWwpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uU2VsZWN0ZWQgPSBfbGFiZWwuaW5uZXJUZXh0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWVNXUHJvZHVjdEZhY3RvcnkoY29udGV4dCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgWVNXUHJvZHVjdCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgWVNXUHJvZHVjdChjb250ZXh0KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiJCIsImxvYWRlZCIsInRleHQiLCJ0cmltIiwic2hvdyIsIlBhZ2VNYW5hZ2VyIiwiUmV2aWV3IiwiY29sbGFwc2libGVGYWN0b3J5IiwiUHJvZHVjdERldGFpbHMiLCJ2aWRlb0dhbGxlcnkiLCJjbGFzc2lmeUZvcm0iLCJhdGhsZXRpY0xvYWRlZCIsImhhbmRsZUNvdmVyYWdlQ2FsY3VsYXRvclN1Ym1pdCIsImluaXRpYWxpemVTcXVhcmVGb290YWdlQ2FsY3VsYXRvciIsIllTV1Byb2R1Y3RGYWN0b3J5IiwiUHJvZHVjdCIsIl9QYWdlTWFuYWdlciIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCIkcmV2aWV3TGluayIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsIl90aGlzMiIsImRvY3VtZW50Iiwib24iLCJpbmRleE9mIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwicGF0aG5hbWUiLCJ2YWxpZGF0b3IiLCJwcm9kdWN0RGV0YWlscyIsIkJDRGF0YSIsInByb2R1Y3RfYXR0cmlidXRlcyIsIiRyZXZpZXdGb3JtIiwicmV2aWV3IiwicmVnaXN0ZXJWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJvZHVjdFJldmlld0hhbmRsZXIiLCJ0cmlnZ2VyIiwiZGVmYXVsdCIsImNhbGN1bGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJiYXNlTXNnIiwiaW5uZXJIVE1MIiwicm9vbVR5cGUiLCJ2YWx1ZSIsInJvb21MZW5ndGgiLCJyb29tV2lkdGgiLCJyb29tSGVpZ2h0IiwibGVuZ3RoIiwiYWxlcnQiLCJwYXJzZUludCIsInNxRm9vdGFnZSIsIm1zZyIsInNoYXBlIiwic2hhcGVzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJpIiwiY2hlY2tlZCIsImNvdmVyYWdlcyIsImNvdmVyYWdlQW1vdW50IiwiY292ZXJhZ2VQZXJjZW50YWdlIiwic3FGdFBlclBhbmVsIiwicGFuZWxTcUZ0TmVlZGVkIiwiZGl2aXNvciIsIk1hdGgiLCJmbG9vciIsInBhbmVsU3FGdEFwcHJveCIsInBhbmVsc05lZWRlZCIsInJvdW5kIiwiY2FsY3VsYXRvclRyaWdnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwibm9kIiwiQ29sbGFwc2libGVFdmVudHMiLCJmb3JtcyIsIl9kZWZhdWx0Iiwic3VibWl0IiwiZmluZCIsIiRyZXZpZXdzQ29udGVudCIsIiRjb2xsYXBzaWJsZSIsImluaXRMaW5rQmluZCIsImluamVjdFBhZ2luYXRpb25MaW5rIiwiY29sbGFwc2VSZXZpZXdzIiwiJGNvbnRlbnQiLCJyZXZpZXdzVGFiIiwicGFyZW50cyIsImhhc0NsYXNzIiwiaGFzaCIsImNsaWNrIiwiJG5leHRMaW5rIiwiJHByZXZMaW5rIiwiYXR0ciIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJlcnJvck1lc3NhZ2UiLCJyZXZpZXdSYXRpbmciLCJyZXZpZXdTdWJqZWN0IiwicmV2aWV3Q29tbWVudCIsImNiIiwidmFsIiwicmVzdWx0IiwiZW1haWwiLCJyZXZpZXdFbWFpbCIsImFyZWFBcnJheSIsInZlaGljbGVDbGFzcyIsInRvdGFsU3FGdCIsIkRhdGEiLCJoYW5kbGVBcmVhQXJyYXkiLCJhcmVhIiwiYXJlYUluZGV4Iiwic3BsaWNlIiwicHVzaCIsImNhbGN1bGF0ZVRvdGFsIiwidmVoaWNsZVNlbGVjdG9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInRvdGFsIiwicmVkdWNlIiwiYWNjIiwiY29udGFpbmVyIiwidG9vbHRpcENsb3NlQnRuIiwidG9vbHRpcFNob3dCdG4iLCJ0b29sdGlwQm94IiwidmVoaWNsZUNvdmVyYWdlQnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwidG9nZ2xlIiwidGFyZ2V0IiwiZGF0YXNldCIsIm9uY2hhbmdlIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJjYWxjQmxvY2siLCJhbHRCbG9jayIsIlZpZGVvR2FsbGVyeSIsIiRlbGVtZW50IiwiJHBsYXllciIsIiR2aWRlb3MiLCJjdXJyZW50VmlkZW8iLCJiaW5kRXZlbnRzIiwic2VsZWN0TmV3VmlkZW8iLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImlkIiwiZGF0YSIsIiRzZWxlY3RlZFRodW1iIiwic2V0TWFpblZpZGVvIiwic2V0QWN0aXZlVGh1bWIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYmluZCIsInBsdWdpbktleSIsIiR2aWRlb0dhbGxlcnkiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwiJGVsIiwiaXNJbml0aWFsaXplZCIsInlzd0NhclBhY2thZ2UiLCJ2ZWhpY2xlS2l0cyIsIm9iaiIsInRleHRfMSIsInRleHRfMiIsIm9wdGlvbiIsImxhYmVsIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidGV4dENvbnRlbnQiLCJ0ZXh0MSIsInRleHQyIiwiJHRleHQxIiwiJHRleHQyIiwiWVNXQ2VsbHV6b3JiZVYzIiwicHJvZHVjdFByaWNlIiwicHJpY2VWYWx1ZSIsIm9yaWdpbmFsUHJpY2UiLCJwcmljZUJlZm9yZSIsInByaWNlQWZ0ZXIiLCJzcWZ0UHJpY2UiLCJzcWZ0UHJpY2VCZWZvcmUiLCJidWxrRGlzY291bnRSYXRlcyIsImluaXQiLCJfd2luZG93IiwicHJvZHVjdCIsImNlbGx1em9yYmVWMyIsImJ1bGtfZGlzY291bnRfcmF0ZXMiLCJOdW1iZXIiLCJhZGRUb0NhcmRXcmFwcGVyIiwiZGVzY0J1dHRvbiIsImluY0J1dHRvbiIsInF0eUlucHV0IiwiY2FsY3VsYXRlQnRuIiwicmVzZXQiLCJ1cGRhdGVQcmljZSIsInNldE9ic2VydmVyIiwidHlwZSIsImZsYWdPYnMiLCJxdWFudGl0eSIsInF1YW50aXR5VmFsdWUiLCJmbGFnRXhpc3QiLCJ1bmRlZmluZWQiLCJmbGFnIiwiX3JlZiIsIm1pbiIsIm1heCIsImRpc2NvdW50IiwiY2hlY2tlciIsInNldFByb2R1Y3RQcmljZXMiLCJjYWxjdWxhdGVQcmljZSIsInRvRml4ZWQiLCJjYWxjdWxhdGVTcXVhcmVGdFByaWNlIiwic3FmdFByaWNlQWZ0ZXIiLCJwcmljZSIsImNhbGMiLCJuZXdQcmljZSIsIkVQU0lMT04iLCJzcWZ0IiwiX3RoaXMzIiwiY2FsbGJhY2siLCJtdXRhdGlvbkxpc3QiLCJtdXRhdGlvbiIsIm1IYXNBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsIm9ic2VydmVyUHJpY2UiLCJjaGFyYWN0ZXJEYXRhIiwiWVNXQ2VsbHV6b3JiZVYzRmFjdG9yeSIsImFkZE11bHRpRXZlbnRMaXN0ZW5lciIsImV2ZW50TmFtZXMiLCJsaXN0ZW5lciIsImV2ZW50TmFtZSIsInlzd0NvbnRyb2xHcmFwaGljcyIsImNvbnRyb2xzIiwiY29udHJvbCIsInRhcmdldHMiLCJ5c3dDb250cm9sIiwidmlzaWJpbGl0eSIsIl90YXJnZXRzIiwiYnVsbGV0cyIsImJ1bGxldCIsInNob3dUYXJnZXRzRnVuYyIsInlzd0hvdmVyIiwiY2xvc2VzdCIsInJlbW92ZUF0dHJpYnV0ZSIsImhpZGVUYXJnZXRzRnVuYyIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJZU1dQcmljaW5nQ2FsY3VsYXRvciIsInByb2R1Y3RQcmljZXMiLCJjZWxsdXpvcmJlIiwic3BsaXQiLCJhdHRyaWJ1dGVzIiwicHJldmlld1Byb2R1Y3QiLCJZU1dQcmljaW5nQ2FsY3VsYXRvckZhY3RvcnkiLCJZU1dUYWJsZVByaWNpbmdDYWxjdWxhdG9yIiwicHJvZHVjdFByaWNlQ29udGVudCIsInByaWNlQmVmb3JlVG90YWwiLCJwcmljZUFmdGVyVG90YWwiLCJwcmljZVRvdGFsU2F2aW5ncyIsImRpc2NvdW50U2F2aW5nIiwiY2VsbHV6b3JiZVYyIiwicHJpY2VzU2VjdGlvbiIsImljb24iLCJyb3ciLCJkaXNjb3VudFdyYXBwZXIiLCJZU1dUYWJsZVByaWNpbmdDYWxjdWxhdG9yRmFjdG9yeSIsIllTV1RpbWJlcndvb2xDYWxjdWxhdG9yIiwidGltYmVyd29vbCIsIllTV1RpbWJlcndvb2xDYWxjdWxhdG9yRmFjdG9yeSIsInV0aWxzIiwiWVNXVGltYmVyd29vbFNhbXBsZU1vZGFsIiwicHJvZHVjdElkIiwicXVhbnRpdHlHbG9iYWwiLCJtYXhRdWFudGl0eSIsIm1vZGFsVHJpZ2dlciIsImFkZFRyaWdnZXIiLCJzZWxlY3RDb2xvclRyaWdnZXIiLCJzZWxlY3RJY29uVHJpZ2dlciIsInJlbmRlciIsInNldFJlbW92ZUxpc3RlbmVycyIsImFwaSIsImNhcnQiLCJnZXRDYXJ0IiwiaW5jbHVkZU9wdGlvbnMiLCJlcnIiLCJyZXNwb25zZSIsInF0eSIsIm1heFF0eSIsImxpc3QiLCJwcm9kdWN0cyIsInBhbmVscyIsImxpbmVJdGVtcyIsInBoeXNpY2FsSXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwic29tZSIsIm5hbWUiLCJwYW5lbCIsIml0ZW1zIiwiaiIsInRoaWNrbmVzcyIsImNvbG9yIiwiZWRnZSIsImNvbG9yQ29kZSIsInZhbHVlSWQiLCJ0ZW1wbGF0ZSIsImltYWdlIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwic2V0TWVzc2FnZXMiLCJzZXRUaW1lb3V0IiwiYWRkVG9DYXJ0QnRuIiwibWVzc2FnZXMiLCJzdWNjZXNzIiwiaW5wcm9ncmVzcyIsImVycm9yIiwibm9ybWFsIiwicmVtb3ZpbmciLCJyZW1vdmVkIiwiZGlzYWJsZWQiLCJidG4iLCJyZW1vdmVCdXR0b25zIiwiaXRlbVVwZGF0ZSIsIl9lcnIiLCJfcmVzcG9uc2UiLCJpdGVtUmVtb3ZlIiwiX2UiLCJjb25zb2xlIiwicG9zdFRvQ2FydCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwYXJlbnRFbGVtZW50IiwiYXR0cmlidXRlIiwic2V0VGltZXIiLCJpdGVtQWRkIiwiY2xlYXJUaW1lb3V0IiwibW9kYWwiLCJvcGFjaXR5IiwidG9wIiwiX3RoaXM0Iiwic2VsZWN0Q29sb3IiLCJpbWciLCJzcmMiLCJhbHQiLCJzZWxlY3RUaGlja25lc3NJY29uIiwic2VsZWN0RWRnZUljb24iLCJiYXNlVmFsIiwiWVNXVGltYmVyd29vbFNhbXBsZU1vZGFsRmFjdG9yeSIsIllTV1Byb2R1Y3RHYWxsZXJ5Q29udHJvbGxlciIsImNhcm91c2VsIiwibW9iaWxlVGh1bWJuYWlscyIsImRlc2t0b3BUaHVtYm5haWxzIiwiYXJyb3dXcmFwIiwiZmlyc3RTbGlkZSIsImZsYWdNb2JpbGUiLCJmbGFnRGVza3RvcCIsInNldEZsYWciLCJzZXRDYXJvdXNlbCIsInNldEFycm93Iiwic2V0T2JzZXJ2ZSIsInNldENsaWNrRXZlbnQiLCJzZXRGaXJzdFNsaWRlIiwiaGlkZUNhcm91c2VsIiwiaW5uZXJXaWR0aCIsInNsaWNrIiwiaW5maW5pdGUiLCJtb2JpbGVGaXJzdCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwiaW5maW5pdHkiLCJzaG93Q2Fyb3VzZWwiLCJ0aHVtYm5haWxzIiwibGluayIsImFycm93UHJldiIsImFycm93TmV4dCIsImdvVG8iLCJSZXNpemVPYnNlcnZlciIsImVudHJpZXMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiX3N0ZXAiLCJkb25lIiwiZW50cnkiLCJjb250ZW50UmVjdCIsIndpZHRoIiwiZGlyZWN0aW9uIiwiaW1hZ2VMaW5rcyIsIkFycmF5IiwiZnJvbSIsImFjdGl2ZUluZGV4IiwiZmluZEluZGV4IiwidGFyZ2V0SW5kZXgiLCJZU1dQcm9kdWN0R2FsbGVyeUNvbnRyb2xsZXJGYWN0b3J5IiwiWVNXR2VuZXJpY1ByaWNpbmdDYWxjdWxhdG9yIiwib3B0aW9uU2VsZWN0ZWQiLCJjdXN0b21GaWVsZHMiLCJzcXVhcmVGb290YWdlSWQiLCJjYWxjdWxhdG9yIiwiY2hhbmdlT3B0aW9uRXZlbnQiLCJnZXRPcHRpb25TaXplIiwib3B0aW9uTGlzdCIsImNoZWNrIiwiZGlzY29udFZhbHVlIiwiX29wdGlvbiIsImlucHV0Iiwib3B0aW9uSWQiLCJyZXBsYWNlIiwiZXZlbnQiLCJvcHRpb25WYWx1ZSIsInByb2R1Y3RPcHRpb25zIiwic2l6ZU9wdGlvbiIsImZpZWxkIiwiaW5jbHVkZXMiLCJkZWZhdWx0T3B0aW9uIiwidmFsdWVzIiwic2VsZWN0ZWQiLCJzcWZ0VmFsdWUiLCJyZXNldFByaWNlIiwiX3RoaXM1IiwiWVNXR2VuZXJpY1ByaWNpbmdDYWxjdWxhdG9yRmFjdG9yeSIsIllTV0dlbmVyaWNTcWZ0Q2FsY3VsYXRvciIsInNxZnRJbnB1dCIsImRlZmF1bHRRdHlJbnB1dCIsImNvdmVyc1NGIiwiaW5jQnRuIiwiZGVjQnRuIiwiYnVsa0Rpc2NvdW50IiwicHJvZHVjdERpdk9wdGlvbnMiLCJfdGhpcyRjb250ZXh0Iiwic3FmdEZpZWxkIiwiaXNDdXN0b21TaXplIiwiY2FsY3VsYXRlU3F1YXJlRnQiLCJpc051bWJlciIsImNhbGN1bGF0ZVNxdWFyZUZ0RnJvbVF0eSIsInNldFF1YW50aXR5SW5EZWZhdWx0SW5wdXQiLCJjaGFuZ2VQYW5lbFZhbHVlIiwic3FmdFF1YW50aXR5IiwibnVtYmVyT2ZQYW5lbHMiLCJjZWlsIiwiY292ZXJzU0ZRdWFudGl0eSIsInNob3dIaWRlU2F2aW5ncyIsIm4iLCJudW1iZXJPZlBhbmVsc1F1YW50aXR5IiwiaXNOYU4iLCJfcXR5IiwiZGlzY291bnRQZXJjZW50IiwiZGlzY29udFdyYXBwZXIiLCJwb3JjZW50IiwiY2hhbmdlT3B0aW9uU2l6ZSIsIllTV0dlbmVyaWNTcWZ0Q2FsY3VsYXRvckZhY3RvcnkiLCJZU1dQcm9kdWN0IiwiZ290b0d1YXJhbnRlZSIsInF1b3RlQnRuSGFuZGxlciIsImNsaWNrQ29sb3JPcHRpb24iLCJjb2xvck9wdGlvbnMiLCJwYXJlbnROb2RlIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImd1YXJhbnRlZSIsImd1YXJhbnRlZVNlY3Rpb24iLCJzY3JvbGxCeSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInF1b3RlQ3V0b2ZmIiwiYnRuSW5jcmVhc2UiLCJidG5EZWNyZWFzZSIsImJ1eU5vd0J0biIsImFyciIsImV2ZXJ5IiwiQm9vbGVhbiIsImhhbmRsZVF1b3RlQnRuVmlzaWJpbGl0eSIsIm1pc3NpbmdPcHRpb25TZWxlY3QiLCJRTiIsImFkZF9wcm9kdWN0IiwiZmxhZ0RpdiIsImZsYWdPcHRpb25zIiwicmVxdWlyZWQiLCJ0YWdOYW1lIiwiYnV5QnRuc1dyYXBwZXJPcmlnbmFsIiwiYnV5QnRuc1dyYXBwZXJRdW90ZSIsImxhYmVsRWwiLCJpbm5lclRleHQiLCJ0b0xvd2VyQ2FzZSIsIl9sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=