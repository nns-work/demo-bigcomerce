"use strict";
(self["webpackChunksecond_skin_audio"] = self["webpackChunksecond_skin_audio"] || []).push([["assets_js_theme_cart_js"],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);


function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }







var Cart = /*#__PURE__*/function (_PageManager) {
  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Cart, _PageManager);
  var _proto = Cart.prototype;
  _proto.refreshElements = function refreshElements() {
    this.$cartContent = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-cart-content]');
    this.$cartMessages = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-cart-status]');
    this.$cartTotals = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-cart-totals]');
    this.$overlay = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-cart] .loadingOverlay');
  };
  _proto.onReady = function onReady() {
    this.refreshElements();
    this.$overlay.hide(); // TODO: temporary until roper pulls in his cart components
    this.bindEvents();
    window.applyCouponCode = this.applyCouponCode.bind(this);
    this.addCartDisclaimer();
    this.displayProductFullPrice();
  };
  _proto.getProductPrice = function getProductPrice(pid, sku) {
    // Ensure pid parameter set:
    if (typeof pid == 'undefined') {
      throw new Error('Missing product ID.');
    } else if (typeof sku == 'undefined') {
      throw new Error('Missing SKU.');
    } else {
      // Ensure pid is a non decimal number:
      pid = parseInt(pid);
    }
    // Return promise to contain the results...
    return new Promise(function (resolve, reject) {
      // Make an Ajax GET request to the product page:
      jquery__WEBPACK_IMPORTED_MODULE_3___default().get('/products.php?productId=' + pid + '&sku=' + sku, function (res) {
        // If request successful:
        if (res) {
          // The content for the product page is loaded in 'res'. 
          // if product is bulk discount
          var amount1 = jquery__WEBPACK_IMPORTED_MODULE_3___default()(res).filter('meta[itemprop="price"]').attr('content');
          var amount2 = amount1 ? amount1 : jquery__WEBPACK_IMPORTED_MODULE_3___default()(res).filter('meta[property="product:price:amount"]').attr('content');
          resolve(amount2);
          // Else request failed:
        } else {
          reject(false);
        }
      });
    });
  };
  _proto.numberWithCommas = function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  _proto.displayProductFullPrice = function displayProductFullPrice() {
    var that = this;
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-item[data-product-id]').each(function () {
      var $cartItem = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this);
      var pid = $cartItem.data('product-id');
      var sku = $cartItem.data('product-sku');
      var quantity = $cartItem.data('quantity');

      // if price not already discounted
      if ($cartItem.find('.price--discounted').length == 0) {
        that.getProductPrice(pid, sku).then(function (price) {
          if (price) {
            var $priceElem = $cartItem.find('.cart-item-value:first');
            var $totalElem = $cartItem.find('.cart-item-value:last');
            var currentPrice = $priceElem.text();
            var fullTotalPrice = '$' + that.numberWithCommas(Number(price * quantity).toFixed(2));
            var fullPrice = '$' + that.numberWithCommas(Number(price).toFixed(2));
            if (currentPrice != fullPrice) {
              jquery__WEBPACK_IMPORTED_MODULE_3___default()('<strong class="cart-item-value price--discounted price--full-bulk">' + fullPrice + '</strong>').insertBefore($priceElem);
              jquery__WEBPACK_IMPORTED_MODULE_3___default()('<strong class="cart-item-value price--discounted price--full-bulk">' + fullTotalPrice + '</strong>').insertBefore($totalElem);
            }
          }
        })["catch"](function (e) {
          console.log('Error getting product price - ', e);
        });
      }
    });
  };
  _proto.addCartDisclaimer = function addCartDisclaimer() {
    // add disclaimer for fantastic frames
    var $framesProducts = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-item[data-product-id=' + 622 + ']');
    var $cartDisclaimerFrame = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-disclaimer.frame');
    var totalQuantityFrames = 0;
    if ($framesProducts.length > 0) {
      $framesProducts.each(function () {
        totalQuantityFrames = totalQuantityFrames + jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).data('quantity');
      });
      if ($cartDisclaimerFrame.length < 1) {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("\n                    <p class=\"cart-disclaimer frame\" style=\"display: none\">\n                    You need at least 5 Fantastic Frame\u2122 Soundproof Window Inserts in\n                    your cart to checkout.</p>\n                ").insertBefore('[data-cart-totals]');
        $cartDisclaimerFrame = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-disclaimer.frame');
      }
    }
    if ($cartDisclaimerFrame.length > 0) {
      if ($framesProducts.length > 0 && totalQuantityFrames < 5) {
        $cartDisclaimerFrame.show();
      } else {
        $cartDisclaimerFrame.hide();
      }
    }

    // add disclaimer for fabric panels
    var $fabricPanels = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-item[data-product-id=' + 225 + ']');
    var totalQuantityFabric = 0;
    var $cartDisclaimerFabric = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-disclaimer.fabric');
    if ($fabricPanels.length > 0) {
      $fabricPanels.each(function () {
        totalQuantityFabric = totalQuantityFabric + jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).data('quantity');
      });
      if ($cartDisclaimerFabric.length < 1) {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("\n                    <p class=\"cart-disclaimer fabric\" style=\"display: none\">\n                    You need at least 5 Acoustic Pro\u2122 Anchorage Fabric Panels in\n                    your cart to checkout.</p>\n                ").insertBefore('[data-cart-totals]');
        $cartDisclaimerFabric = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-disclaimer.fabric');
      }
    }
    if ($cartDisclaimerFabric.length > 0) {
      if ($fabricPanels.length > 0 && totalQuantityFabric < 5) {
        $cartDisclaimerFabric.show();
      } else {
        $cartDisclaimerFabric.hide();
      }
    }

    // add disclaimer for polyzorbe panels
    var $polyzorbePanels = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-item[data-product-id=' + 1184 + ']');
    var totalQuantityPolyzorbe = 0;
    var $cartDisclaimerPolyzorbe = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-disclaimer.polyzorbe');
    if ($polyzorbePanels.length > 0) {
      $polyzorbePanels.each(function () {
        totalQuantityPolyzorbe = totalQuantityPolyzorbe + jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).data('quantity');
      });
      if ($cartDisclaimerPolyzorbe.length < 1) {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("\n                    <p class=\"cart-disclaimer polyzorbe\" style=\"display: none\">\n                    You need at least 5 PolyZorbe\u2122 Large Acoustic Panels in\n                    your cart to checkout.</p>\n                ").insertBefore('[data-cart-totals]');
        $cartDisclaimerPolyzorbe = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-disclaimer.polyzorbe');
      }
    }
    if ($cartDisclaimerPolyzorbe.length > 0) {
      if ($polyzorbePanels.length > 0 && totalQuantityPolyzorbe < 5) {
        $cartDisclaimerPolyzorbe.show();
      } else {
        $cartDisclaimerPolyzorbe.hide();
      }
    }
    if ($framesProducts.length > 0 && totalQuantityFrames < 3 || $fabricPanels.length > 0 && totalQuantityFabric < 5 || $polyzorbePanels.length > 0 && totalQuantityPolyzorbe < 5) {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-actions').hide();
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-additionalCheckoutButtons').hide();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-actions').show();
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-additionalCheckoutButtons').show();
    }
  };
  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;
    var itemId = $target.data('cartItemid');
    var $el = jquery__WEBPACK_IMPORTED_MODULE_3___default()("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
    // Does not quality for min/max quantity
    if (newQty < minQty) {
      return sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
        text: minError,
        type: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      return sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
        text: maxError,
        type: 'error'
      });
    }
    this.refreshElements();
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this.refreshContent(remove);
      } else {
        $el.val(oldQty);
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };
  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this2 = this;
    if (preVal === void 0) {
      preVal = null;
    }
    var itemId = $target.data('cartItemid');
    var $el = jquery__WEBPACK_IMPORTED_MODULE_3___default()("#qty-" + itemId);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = parseInt(Number($el.attr('value')), 10);
    var invalidEntry;
    // Does not quality for min/max quantity
    if (!newQty) {
      invalidEntry = $el.attr('value');
      $el.val(oldQty);
      return sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
        text: invalidEntry + " is not a valid entry",
        type: 'error'
      });
    } else if (newQty < minQty) {
      $el.val(oldQty);
      return sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
        text: minError,
        type: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      $el.val(oldQty);
      return sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
        text: maxError,
        type: 'error'
      });
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this2.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this2.refreshContent(remove);
      } else {
        $el.val(oldQty);
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };
  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this3 = this;
    this.refreshElements();
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this3.refreshContent(true);
      } else {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };
  _proto.cartEditOptions = function cartEditOptions(itemId) {
    var _this4 = this;
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);
      _this4.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].hooks.on('product-option-change', function (event, option) {
      var $changedOption = jquery__WEBPACK_IMPORTED_MODULE_3___default()(option);
      var $form = $changedOption.parents('form');
      var $submit = jquery__WEBPACK_IMPORTED_MODULE_3___default()('input.button', $form);
      var $messageBox = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.alertMessageBox');
      var item = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[name="item_id"]', $form).attr('value');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.optionChange(item, $form.serialize(), function (err, result) {
        var data = result.data || {};
        if (err) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            text: err,
            type: 'error'
          });
          return false;
        }
        if (data.purchasing_message) {
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }
        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };
  _proto.refreshContent = function refreshContent(remove) {
    var _this5 = this;
    var $cartItemsRows = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-item-row]', this.$cartContent);
    var $cartPageTitle = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages'
      }
    };
    this.$overlay.show();

    // Remove last item from cart? Reload
    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getContent(options, function (err, response) {
      _this5.refreshElements();
      _this5.$cartContent.html(response.content);
      _this5.$cartTotals.html(response.totals);
      _this5.$cartMessages.html(response.statusMessages);
      $cartPageTitle.replaceWith(response.pageTitle);
      _this5.bindEvents();
      _this5.$overlay.hide();
      var quantity = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-cart-quantity]', _this5.$cartContent).data('cartQuantity') || 0;
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('body').trigger('cart-quantity-update', quantity);
      _this5.addCartDisclaimer();
      _this5.displayProductFullPrice();
    });
  };
  _proto.bindCartEvents = function bindCartEvents() {
    var _this6 = this;
    var debounceTimeout = 400;
    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);
    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);
    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);
    var preVal;

    // cart update
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdate($target);
    });

    // cart qty manually updates
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-item-qty-input', this.$cartContent).on('focus', function () {
      preVal = _this6.value;
    }).change(function (event) {
      var $target = jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdateQtyTextChange($target, preVal);
    });
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget).data('cartItemid');
      var string = jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget).data('confirmDelete');
      sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
        text: string,
        type: 'warning',
        showCancelButton: true
      }).then(function () {
        // remove item from cart
        cartRemoveItem(itemId);
      });
      event.preventDefault();
    });
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget).data('itemEdit');
      event.preventDefault();
      // edit item in cart
      _this6.cartEditOptions(itemId);
    });
  };
  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this7 = this;
    var $couponContainer = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.coupon-code');
    var $couponForm = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.coupon-form');
    var $codeInput = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[name="couponcode"]', $couponForm);
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget).hide();
      $couponContainer.show();
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.coupon-code-cancel').hide();
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault();

      // Empty code
      if (!code) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
          text: $codeInput.data('error'),
          type: 'error'
        });
      }
      _this7.applyCouponCode(code);
    });
  };
  _proto.applyCouponCode = function applyCouponCode(code) {
    var _this8 = this;
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyCode(code, function (err, response) {
      if (response.data.status === 'success') {
        _this8.refreshContent();
      } else {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };
  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this9 = this;
    var $certContainer = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.gift-certificate-code');
    var $certForm = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-gift-certificate-form');
    var $certInput = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[name="certcode"]', $certForm);
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget).toggle();
      $certContainer.toggle();
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.gift-certificate-cancel').toggle();
    });
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.gift-certificate-add').toggle();
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();
      if (!(0,_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_4__["default"])(code)) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
          text: $certInput.data('error'),
          type: 'error'
        });
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this9.refreshContent();
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            text: resp.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    });
  };
  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this0 = this;
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-item-giftwrap]').on('click', function (event) {
      var itemId = jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);
        _this0.bindGiftWrappingForm();
      });
    });
  };
  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.giftWrapping-select').on('change', function (event) {
      var $select = jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');
      if (!id) {
        return;
      }
      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(".giftWrapping-image-" + index).hide();
      jquery__WEBPACK_IMPORTED_MODULE_3___default()("#giftWrapping-image-" + index + "-" + id).show();
      if (allowMessage) {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#giftWrapping-message-" + index).show();
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#giftWrapping-message-" + index).hide();
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.giftWrapping-select').trigger('change');
    function toggleViews() {
      var value = jquery__WEBPACK_IMPORTED_MODULE_3___default()('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.giftWrapping-single');
      var $multiForm = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.giftWrapping-multiple');
      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };
  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents();

    // initiate shipping estimator module
    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__["default"](jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-shipping-estimator]'));
  };
  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShippingEstimator)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element) {
    this.$element = $element;
    this.$state = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-field-type="State"]', this.$element);
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }
  var _proto = ShippingEstimator.prototype;
  _proto.initFormValidation = function initFormValidation() {
    var _this = this;
    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }
      if (_this.shippingValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };
  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: 'The \'Country\' field cannot be blank.'
    }]);
  };
  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;
    this.shippingValidator.add([{
      selector: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this2.shippingEstimator + " select[name=\"shipping-state\"]");
        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }
        cb(result);
      },
      errorMessage: 'The \'State/Province\' field cannot be blank.'
    }]);
  }

  /**
   * Toggle between default shipping and ups shipping rates
   */;
  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.estimator-form--ups');
      var $estimatorFormDefault = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };
  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;
    var $last;

    // Requests the states for a country with AJAX
    (0,_common_state_country__WEBPACK_IMPORTED_MODULE_1__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
          text: err,
          type: 'error'
        });
        throw new Error(err);
      }
      var $field = jquery__WEBPACK_IMPORTED_MODULE_0___default()(field);
      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }
      if ($last) {
        _this3.shippingValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_form_utils__WEBPACK_IMPORTED_MODULE_4__.Validators.cleanUpStateValidation(field);
      }

      // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };
  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var $estimatorContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimator');
    var $estimatorForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.estimator-form');
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-country"]', $estimatorForm).val(),
        state_id: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-state"]', $estimatorForm).val(),
        city: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-quotes').html(response.content);

        // bind the select button
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).hide();
      $estimatorContainer.removeClass('u-hiddenVisually');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-hide').show();
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-hide').on('click', function (event) {
      event.preventDefault();
      $estimatorContainer.addClass('u-hiddenVisually');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-show').show();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-hide').hide();
    });
  };
  return ShippingEstimator;
}();


/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(cert) {
  if (typeof cert !== 'string') {
    return false;
  }

  // Add any custom gift certificate validation logic here
  return true;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXJ0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNsQjtBQUV5QztBQUNqQjtBQUNXO0FBQ1o7QUFDZjtBQUFBLElBRVZPLElBQUksMEJBQUFDLFlBQUE7RUFBQSxTQUFBRCxLQUFBO0lBQUEsT0FBQUMsWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBQyxjQUFBLENBQUFKLElBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFJLE1BQUEsR0FBQUwsSUFBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FDckJFLGVBQWUsR0FBZixTQUFBQSxlQUFlQSxDQUFBLEVBQUc7SUFDZCxJQUFJLENBQUNDLFlBQVksR0FBR2QsNkNBQUMsQ0FBQyxxQkFBcUIsQ0FBQztJQUM1QyxJQUFJLENBQUNlLGFBQWEsR0FBR2YsNkNBQUMsQ0FBQyxvQkFBb0IsQ0FBQztJQUM1QyxJQUFJLENBQUNnQixXQUFXLEdBQUdoQiw2Q0FBQyxDQUFDLG9CQUFvQixDQUFDO0lBQzFDLElBQUksQ0FBQ2lCLFFBQVEsR0FBR2pCLDZDQUFDLENBQUMsNkJBQTZCLENBQUM7RUFDcEQsQ0FBQztFQUFBVyxNQUFBLENBRURPLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFDTixJQUFJLENBQUNMLGVBQWUsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQ0ksUUFBUSxDQUFDRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUVqQkMsTUFBTSxDQUFDQyxlQUFlLEdBQUcsSUFBSSxDQUFDQSxlQUFlLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFFeEQsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hCLElBQUksQ0FBQ0MsdUJBQXVCLENBQUMsQ0FBQztFQUNsQyxDQUFDO0VBQUFkLE1BQUEsQ0FFRGUsZUFBZSxHQUFmLFNBQUFBLGVBQWVBLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RCO0lBQ0EsSUFBSSxPQUFPRCxHQUFHLElBQUksV0FBVyxFQUFFO01BQzNCLE1BQU0sSUFBSUUsS0FBSyxDQUFDLHFCQUFxQixDQUFDO0lBQzFDLENBQUMsTUFBTSxJQUFJLE9BQU9ELEdBQUcsSUFBSSxXQUFXLEVBQUU7TUFDbEMsTUFBTSxJQUFJQyxLQUFLLENBQUMsY0FBYyxDQUFDO0lBQ25DLENBQUMsTUFBTTtNQUNIO01BQ0FGLEdBQUcsR0FBR0csUUFBUSxDQUFDSCxHQUFHLENBQUM7SUFDdkI7SUFDQTtJQUNBLE9BQU8sSUFBSUksT0FBTyxDQUFDLFVBQVNDLE9BQU8sRUFBRUMsTUFBTSxFQUFFO01BQ3pDO01BQ0FqQyxpREFBSyxDQUFDLDBCQUEwQixHQUFHMkIsR0FBRyxHQUFHLE9BQU8sR0FBR0MsR0FBRyxFQUNsRCxVQUFTTyxHQUFHLEVBQUU7UUFDVjtRQUNBLElBQUlBLEdBQUcsRUFBRTtVQUNMO1VBQ0E7VUFDQSxJQUFNQyxPQUFPLEdBQUdwQyw2Q0FBQyxDQUFDbUMsR0FBRyxDQUFDLENBQUNFLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDQyxJQUFJLENBQUMsU0FBUyxDQUFDO1VBQ3ZFLElBQU1DLE9BQU8sR0FBR0gsT0FBTyxHQUFHQSxPQUFPLEdBQzdCcEMsNkNBQUMsQ0FBQ21DLEdBQUcsQ0FBQyxDQUFDRSxNQUFNLENBQUMsdUNBQXVDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQztVQUMxRU4sT0FBTyxDQUFDTyxPQUFPLENBQUM7VUFDcEI7UUFDQSxDQUFDLE1BQU07VUFDSE4sTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQjtNQUNKLENBQ0osQ0FBQztJQUNMLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQXRCLE1BQUEsQ0FFRDZCLGdCQUFnQixHQUFoQixTQUFBQSxnQkFBZ0JBLENBQUNDLENBQUMsRUFBRTtJQUNoQixPQUFPQSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUM7RUFDN0QsQ0FBQztFQUFBaEMsTUFBQSxDQUVEYyx1QkFBdUIsR0FBdkIsU0FBQUEsdUJBQXVCQSxDQUFBLEVBQUc7SUFDdEIsSUFBTW1CLElBQUksR0FBRyxJQUFJO0lBQ2pCNUMsNkNBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDNkMsSUFBSSxDQUFDLFlBQVc7TUFDN0MsSUFBTUMsU0FBUyxHQUFHOUMsNkNBQUMsQ0FBQyxJQUFJLENBQUM7TUFDekIsSUFBTTJCLEdBQUcsR0FBR21CLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQztNQUN4QyxJQUFNbkIsR0FBRyxHQUFHa0IsU0FBUyxDQUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDO01BQ3pDLElBQU1DLFFBQVEsR0FBR0YsU0FBUyxDQUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDOztNQUUzQztNQUNBLElBQUlELFNBQVMsQ0FBQ0csSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUNDLE1BQU0sSUFBSSxDQUFDLEVBQUU7UUFDbEROLElBQUksQ0FBQ2xCLGVBQWUsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQ3VCLElBQUksQ0FBQyxVQUFTQyxLQUFLLEVBQUU7VUFDaEQsSUFBSUEsS0FBSyxFQUFFO1lBQ1AsSUFBTUMsVUFBVSxHQUFHUCxTQUFTLENBQUNHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztZQUMzRCxJQUFNSyxVQUFVLEdBQUdSLFNBQVMsQ0FBQ0csSUFBSSxDQUFDLHVCQUF1QixDQUFDO1lBQzFELElBQU1NLFlBQVksR0FBR0YsVUFBVSxDQUFDRyxJQUFJLENBQUMsQ0FBQztZQUN0QyxJQUFNQyxjQUFjLEdBQUcsR0FBRyxHQUFHYixJQUFJLENBQUNKLGdCQUFnQixDQUFDa0IsTUFBTSxDQUFDTixLQUFLLEdBQUdKLFFBQVEsQ0FBQyxDQUFDVyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkYsSUFBTUMsU0FBUyxHQUFHLEdBQUcsR0FBR2hCLElBQUksQ0FBQ0osZ0JBQWdCLENBQUNrQixNQUFNLENBQUNOLEtBQUssQ0FBQyxDQUFDTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkUsSUFBS0osWUFBWSxJQUFJSyxTQUFTLEVBQUU7Y0FDNUI1RCw2Q0FBQyxDQUFDLHFFQUFxRSxHQUNuRTRELFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FDdkJDLFlBQVksQ0FBQ1IsVUFBVSxDQUFDO2NBQzdCckQsNkNBQUMsQ0FBQyxxRUFBcUUsR0FDbkV5RCxjQUFjLEdBQUcsV0FBVyxDQUFDLENBQzVCSSxZQUFZLENBQUNQLFVBQVUsQ0FBQztZQUNqQztVQUNKO1FBQ0osQ0FBQyxDQUFDLFNBQU0sQ0FBQyxVQUFTUSxDQUFDLEVBQUU7VUFDakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdDQUFnQyxFQUFFRixDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDO01BQ047SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUFuRCxNQUFBLENBRURhLGlCQUFpQixHQUFqQixTQUFBQSxpQkFBaUJBLENBQUEsRUFBRztJQUNoQjtJQUNBLElBQU15QyxlQUFlLEdBQUdqRSw2Q0FBQyxDQUFDLDZCQUE2QixHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDcEUsSUFBSWtFLG9CQUFvQixHQUFHbEUsNkNBQUMsQ0FBQyx3QkFBd0IsQ0FBQztJQUN0RCxJQUFJbUUsbUJBQW1CLEdBQUcsQ0FBQztJQUMzQixJQUFLRixlQUFlLENBQUNmLE1BQU0sR0FBRyxDQUFDLEVBQUc7TUFDOUJlLGVBQWUsQ0FBQ3BCLElBQUksQ0FBQyxZQUFXO1FBQzVCc0IsbUJBQW1CLEdBQUdBLG1CQUFtQixHQUFHbkUsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQytDLElBQUksQ0FBQyxVQUFVLENBQUM7TUFDeEUsQ0FBQyxDQUFDO01BRUYsSUFBS21CLG9CQUFvQixDQUFDaEIsTUFBTSxHQUFHLENBQUMsRUFBRztRQUNuQ2xELDZDQUFDLGtQQUlBLENBQUMsQ0FBQzZELFlBQVksQ0FBQyxvQkFBb0IsQ0FBQztRQUNyQ0ssb0JBQW9CLEdBQUdsRSw2Q0FBQyxDQUFDLHdCQUF3QixDQUFDO01BQ3REO0lBQ0o7SUFFQSxJQUFLa0Usb0JBQW9CLENBQUNoQixNQUFNLEdBQUcsQ0FBQyxFQUFHO01BQ25DLElBQUtlLGVBQWUsQ0FBQ2YsTUFBTSxHQUFHLENBQUMsSUFBSWlCLG1CQUFtQixHQUFHLENBQUMsRUFBRztRQUN6REQsb0JBQW9CLENBQUNFLElBQUksQ0FBQyxDQUFDO01BQy9CLENBQUMsTUFBTTtRQUNIRixvQkFBb0IsQ0FBQy9DLElBQUksQ0FBQyxDQUFDO01BQy9CO0lBQ0o7O0lBRUE7SUFDQSxJQUFNa0QsYUFBYSxHQUFHckUsNkNBQUMsQ0FBQyw2QkFBNkIsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2xFLElBQUlzRSxtQkFBbUIsR0FBRyxDQUFDO0lBQzNCLElBQUlDLHFCQUFxQixHQUFHdkUsNkNBQUMsQ0FBQyx5QkFBeUIsQ0FBQztJQUN4RCxJQUFLcUUsYUFBYSxDQUFDbkIsTUFBTSxHQUFHLENBQUMsRUFBRztNQUM1Qm1CLGFBQWEsQ0FBQ3hCLElBQUksQ0FBQyxZQUFXO1FBQzFCeUIsbUJBQW1CLEdBQUdBLG1CQUFtQixHQUFHdEUsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQytDLElBQUksQ0FBQyxVQUFVLENBQUM7TUFDeEUsQ0FBQyxDQUFDO01BRUYsSUFBS3dCLHFCQUFxQixDQUFDckIsTUFBTSxHQUFHLENBQUMsRUFBRztRQUNwQ2xELDZDQUFDLDhPQUlBLENBQUMsQ0FBQzZELFlBQVksQ0FBQyxvQkFBb0IsQ0FBQztRQUNyQ1UscUJBQXFCLEdBQUd2RSw2Q0FBQyxDQUFDLHlCQUF5QixDQUFDO01BQ3hEO0lBQ0o7SUFFQSxJQUFLdUUscUJBQXFCLENBQUNyQixNQUFNLEdBQUcsQ0FBQyxFQUFHO01BQ3BDLElBQUttQixhQUFhLENBQUNuQixNQUFNLEdBQUcsQ0FBQyxJQUFJb0IsbUJBQW1CLEdBQUcsQ0FBQyxFQUFHO1FBQ3ZEQyxxQkFBcUIsQ0FBQ0gsSUFBSSxDQUFDLENBQUM7TUFDaEMsQ0FBQyxNQUFNO1FBQ0hHLHFCQUFxQixDQUFDcEQsSUFBSSxDQUFDLENBQUM7TUFDaEM7SUFDSjs7SUFFQTtJQUNBLElBQU1xRCxnQkFBZ0IsR0FBR3hFLDZDQUFDLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUN0RSxJQUFJeUUsc0JBQXNCLEdBQUcsQ0FBQztJQUM5QixJQUFJQyx3QkFBd0IsR0FBRzFFLDZDQUFDLENBQUMsNEJBQTRCLENBQUM7SUFDOUQsSUFBS3dFLGdCQUFnQixDQUFDdEIsTUFBTSxHQUFHLENBQUMsRUFBRztNQUMvQnNCLGdCQUFnQixDQUFDM0IsSUFBSSxDQUFDLFlBQVc7UUFDN0I0QixzQkFBc0IsR0FBR0Esc0JBQXNCLEdBQUd6RSw2Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDK0MsSUFBSSxDQUFDLFVBQVUsQ0FBQztNQUM5RSxDQUFDLENBQUM7TUFFRixJQUFLMkIsd0JBQXdCLENBQUN4QixNQUFNLEdBQUcsQ0FBQyxFQUFHO1FBQ3ZDbEQsNkNBQUMsNE9BSUEsQ0FBQyxDQUFDNkQsWUFBWSxDQUFDLG9CQUFvQixDQUFDO1FBQ3JDYSx3QkFBd0IsR0FBRzFFLDZDQUFDLENBQUMsNEJBQTRCLENBQUM7TUFDOUQ7SUFDSjtJQUVBLElBQUswRSx3QkFBd0IsQ0FBQ3hCLE1BQU0sR0FBRyxDQUFDLEVBQUc7TUFDdkMsSUFBS3NCLGdCQUFnQixDQUFDdEIsTUFBTSxHQUFHLENBQUMsSUFBSXVCLHNCQUFzQixHQUFHLENBQUMsRUFBRztRQUM3REMsd0JBQXdCLENBQUNOLElBQUksQ0FBQyxDQUFDO01BQ25DLENBQUMsTUFBTTtRQUNITSx3QkFBd0IsQ0FBQ3ZELElBQUksQ0FBQyxDQUFDO01BQ25DO0lBQ0o7SUFFQSxJQUFNOEMsZUFBZSxDQUFDZixNQUFNLEdBQUcsQ0FBQyxJQUFJaUIsbUJBQW1CLEdBQUcsQ0FBQyxJQUN0REUsYUFBYSxDQUFDbkIsTUFBTSxHQUFHLENBQUMsSUFBSW9CLG1CQUFtQixHQUFHLENBQUUsSUFDcERFLGdCQUFnQixDQUFDdEIsTUFBTSxHQUFHLENBQUMsSUFBSXVCLHNCQUFzQixHQUFHLENBQUUsRUFBRztNQUM5RHpFLDZDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNtQixJQUFJLENBQUMsQ0FBQztNQUN6Qm5CLDZDQUFDLENBQUMsaUNBQWlDLENBQUMsQ0FBQ21CLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUMsTUFBTTtNQUNIbkIsNkNBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ29FLElBQUksQ0FBQyxDQUFDO01BQ3pCcEUsNkNBQUMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDb0UsSUFBSSxDQUFDLENBQUM7SUFDL0M7RUFDSixDQUFDO0VBQUF6RCxNQUFBLENBRURnRSxVQUFVLEdBQVYsU0FBQUEsVUFBVUEsQ0FBQ0MsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNoQixJQUFNQyxNQUFNLEdBQUdGLE9BQU8sQ0FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDekMsSUFBTWdDLEdBQUcsR0FBRy9FLDZDQUFDLFdBQVM4RSxNQUFRLENBQUM7SUFDL0IsSUFBTUUsTUFBTSxHQUFHbEQsUUFBUSxDQUFDaUQsR0FBRyxDQUFDRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUN0QyxJQUFNQyxNQUFNLEdBQUdwRCxRQUFRLENBQUNpRCxHQUFHLENBQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3BELElBQU1vQyxNQUFNLEdBQUdyRCxRQUFRLENBQUNpRCxHQUFHLENBQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3BELElBQU1xQyxRQUFRLEdBQUdMLEdBQUcsQ0FBQ2hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUM3QyxJQUFNc0MsUUFBUSxHQUFHTixHQUFHLENBQUNoQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDN0MsSUFBTXVDLE1BQU0sR0FBR1YsT0FBTyxDQUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssR0FBR2lDLE1BQU0sR0FBRyxDQUFDLEdBQUdBLE1BQU0sR0FBRyxDQUFDO0lBQ3pFO0lBQ0EsSUFBSU0sTUFBTSxHQUFHSCxNQUFNLEVBQUU7TUFDakIsT0FBTzlFLGtEQUFJLENBQUM7UUFDUm1ELElBQUksRUFBRTRCLFFBQVE7UUFDZEcsSUFBSSxFQUFFO01BQ1YsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxNQUFNLElBQUlMLE1BQU0sR0FBRyxDQUFDLElBQUlJLE1BQU0sR0FBR0osTUFBTSxFQUFFO01BQ3RDLE9BQU83RSxrREFBSSxDQUFDO1FBQ1JtRCxJQUFJLEVBQUU2QixRQUFRO1FBQ2RFLElBQUksRUFBRTtNQUNWLENBQUMsQ0FBQztJQUNOO0lBRUEsSUFBSSxDQUFDMUUsZUFBZSxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDSSxRQUFRLENBQUNtRCxJQUFJLENBQUMsQ0FBQztJQUVwQmxFLHNFQUFTLENBQUN1RixJQUFJLENBQUNDLFVBQVUsQ0FBQ1osTUFBTSxFQUFFUSxNQUFNLEVBQUUsVUFBQ0ssR0FBRyxFQUFFQyxRQUFRLEVBQUs7TUFDekRmLEtBQUksQ0FBQzVELFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7TUFFcEIsSUFBSXlFLFFBQVEsQ0FBQzdDLElBQUksQ0FBQzhDLE1BQU0sS0FBSyxTQUFTLEVBQUU7UUFDcEM7UUFDQSxJQUFNQyxNQUFNLEdBQUlSLE1BQU0sS0FBSyxDQUFFO1FBRTdCVCxLQUFJLENBQUNrQixjQUFjLENBQUNELE1BQU0sQ0FBQztNQUMvQixDQUFDLE1BQU07UUFDSGYsR0FBRyxDQUFDRSxHQUFHLENBQUNELE1BQU0sQ0FBQztRQUNmM0Usa0RBQUksQ0FBQztVQUNEbUQsSUFBSSxFQUFFb0MsUUFBUSxDQUFDN0MsSUFBSSxDQUFDaUQsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO1VBQ3JDVixJQUFJLEVBQUU7UUFDVixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQTVFLE1BQUEsQ0FFRHVGLHVCQUF1QixHQUF2QixTQUFBQSx1QkFBdUJBLENBQUN0QixPQUFPLEVBQUV1QixNQUFNLEVBQVM7SUFBQSxJQUFBQyxNQUFBO0lBQUEsSUFBZkQsTUFBTTtNQUFOQSxNQUFNLEdBQUcsSUFBSTtJQUFBO0lBQzFDLElBQU1yQixNQUFNLEdBQUdGLE9BQU8sQ0FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDekMsSUFBTWdDLEdBQUcsR0FBRy9FLDZDQUFDLFdBQVM4RSxNQUFRLENBQUM7SUFDL0IsSUFBTUksTUFBTSxHQUFHcEQsUUFBUSxDQUFDaUQsR0FBRyxDQUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNwRCxJQUFNb0MsTUFBTSxHQUFHckQsUUFBUSxDQUFDaUQsR0FBRyxDQUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNwRCxJQUFNaUMsTUFBTSxHQUFHbUIsTUFBTSxLQUFLLElBQUksR0FBR0EsTUFBTSxHQUFHaEIsTUFBTTtJQUNoRCxJQUFNQyxRQUFRLEdBQUdMLEdBQUcsQ0FBQ2hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUM3QyxJQUFNc0MsUUFBUSxHQUFHTixHQUFHLENBQUNoQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDN0MsSUFBTXVDLE1BQU0sR0FBR3hELFFBQVEsQ0FBQzRCLE1BQU0sQ0FBQ3FCLEdBQUcsQ0FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUN0RCxJQUFJK0QsWUFBWTtJQUNoQjtJQUNBLElBQUksQ0FBQ2YsTUFBTSxFQUFFO01BQ1RlLFlBQVksR0FBR3RCLEdBQUcsQ0FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUM7TUFDaEN5QyxHQUFHLENBQUNFLEdBQUcsQ0FBQ0QsTUFBTSxDQUFDO01BQ2YsT0FBTzNFLGtEQUFJLENBQUM7UUFDUm1ELElBQUksRUFBSzZDLFlBQVksMEJBQXVCO1FBQzVDZCxJQUFJLEVBQUU7TUFDVixDQUFDLENBQUM7SUFDTixDQUFDLE1BQU0sSUFBSUQsTUFBTSxHQUFHSCxNQUFNLEVBQUU7TUFDeEJKLEdBQUcsQ0FBQ0UsR0FBRyxDQUFDRCxNQUFNLENBQUM7TUFDZixPQUFPM0Usa0RBQUksQ0FBQztRQUNSbUQsSUFBSSxFQUFFNEIsUUFBUTtRQUNkRyxJQUFJLEVBQUU7TUFDVixDQUFDLENBQUM7SUFDTixDQUFDLE1BQU0sSUFBSUwsTUFBTSxHQUFHLENBQUMsSUFBSUksTUFBTSxHQUFHSixNQUFNLEVBQUU7TUFDdENILEdBQUcsQ0FBQ0UsR0FBRyxDQUFDRCxNQUFNLENBQUM7TUFDZixPQUFPM0Usa0RBQUksQ0FBQztRQUNSbUQsSUFBSSxFQUFFNkIsUUFBUTtRQUNkRSxJQUFJLEVBQUU7TUFDVixDQUFDLENBQUM7SUFDTjtJQUVBLElBQUksQ0FBQ3RFLFFBQVEsQ0FBQ21ELElBQUksQ0FBQyxDQUFDO0lBRXBCbEUsc0VBQVMsQ0FBQ3VGLElBQUksQ0FBQ0MsVUFBVSxDQUFDWixNQUFNLEVBQUVRLE1BQU0sRUFBRSxVQUFDSyxHQUFHLEVBQUVDLFFBQVEsRUFBSztNQUN6RFEsTUFBSSxDQUFDbkYsUUFBUSxDQUFDRSxJQUFJLENBQUMsQ0FBQztNQUVwQixJQUFJeUUsUUFBUSxDQUFDN0MsSUFBSSxDQUFDOEMsTUFBTSxLQUFLLFNBQVMsRUFBRTtRQUNwQztRQUNBLElBQU1DLE1BQU0sR0FBSVIsTUFBTSxLQUFLLENBQUU7UUFFN0JjLE1BQUksQ0FBQ0wsY0FBYyxDQUFDRCxNQUFNLENBQUM7TUFDL0IsQ0FBQyxNQUFNO1FBQ0hmLEdBQUcsQ0FBQ0UsR0FBRyxDQUFDRCxNQUFNLENBQUM7UUFDZjNFLGtEQUFJLENBQUM7VUFDRG1ELElBQUksRUFBRW9DLFFBQVEsQ0FBQzdDLElBQUksQ0FBQ2lELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztVQUNyQ1YsSUFBSSxFQUFFO1FBQ1YsQ0FBQyxDQUFDO01BQ047SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUE1RSxNQUFBLENBRUQyRixjQUFjLEdBQWQsU0FBQUEsY0FBY0EsQ0FBQ3hCLE1BQU0sRUFBRTtJQUFBLElBQUF5QixNQUFBO0lBQ25CLElBQUksQ0FBQzFGLGVBQWUsQ0FBQyxDQUFDO0lBRXRCLElBQUksQ0FBQ0ksUUFBUSxDQUFDbUQsSUFBSSxDQUFDLENBQUM7SUFDcEJsRSxzRUFBUyxDQUFDdUYsSUFBSSxDQUFDZSxVQUFVLENBQUMxQixNQUFNLEVBQUUsVUFBQ2EsR0FBRyxFQUFFQyxRQUFRLEVBQUs7TUFDakQsSUFBSUEsUUFBUSxDQUFDN0MsSUFBSSxDQUFDOEMsTUFBTSxLQUFLLFNBQVMsRUFBRTtRQUNwQ1UsTUFBSSxDQUFDUixjQUFjLENBQUMsSUFBSSxDQUFDO01BQzdCLENBQUMsTUFBTTtRQUNIMUYsa0RBQUksQ0FBQztVQUNEbUQsSUFBSSxFQUFFb0MsUUFBUSxDQUFDN0MsSUFBSSxDQUFDaUQsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO1VBQ3JDVixJQUFJLEVBQUU7UUFDVixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQTVFLE1BQUEsQ0FFRDhGLGVBQWUsR0FBZixTQUFBQSxlQUFlQSxDQUFDM0IsTUFBTSxFQUFFO0lBQUEsSUFBQTRCLE1BQUE7SUFDcEIsSUFBTUMsS0FBSyxHQUFHdkcsMkRBQVksQ0FBQyxDQUFDO0lBQzVCLElBQU13RyxPQUFPLEdBQUc7TUFDWkMsUUFBUSxFQUFFO0lBQ2QsQ0FBQztJQUVERixLQUFLLENBQUNHLElBQUksQ0FBQyxDQUFDO0lBRVo1RyxzRUFBUyxDQUFDNkcsaUJBQWlCLENBQUNDLGVBQWUsQ0FBQ2xDLE1BQU0sRUFBRThCLE9BQU8sRUFBRSxVQUFDakIsR0FBRyxFQUFFQyxRQUFRLEVBQUs7TUFDNUVlLEtBQUssQ0FBQ00sYUFBYSxDQUFDckIsUUFBUSxDQUFDc0IsT0FBTyxDQUFDO01BRXJDUixNQUFJLENBQUNTLG9CQUFvQixDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0lBRUZqSCx3RUFBVyxDQUFDbUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFLFVBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFLO01BQ3ZELElBQU1DLGNBQWMsR0FBR3hILDZDQUFDLENBQUN1SCxNQUFNLENBQUM7TUFDaEMsSUFBTUUsS0FBSyxHQUFHRCxjQUFjLENBQUNFLE9BQU8sQ0FBQyxNQUFNLENBQUM7TUFDNUMsSUFBTUMsT0FBTyxHQUFHM0gsNkNBQUMsQ0FBQyxjQUFjLEVBQUV5SCxLQUFLLENBQUM7TUFDeEMsSUFBTUcsV0FBVyxHQUFHNUgsNkNBQUMsQ0FBQyxrQkFBa0IsQ0FBQztNQUN6QyxJQUFNNkgsSUFBSSxHQUFHN0gsNkNBQUMsQ0FBQyxrQkFBa0IsRUFBRXlILEtBQUssQ0FBQyxDQUFDbkYsSUFBSSxDQUFDLE9BQU8sQ0FBQztNQUV2RHBDLHNFQUFTLENBQUM2RyxpQkFBaUIsQ0FBQ2UsWUFBWSxDQUFDRCxJQUFJLEVBQUVKLEtBQUssQ0FBQ00sU0FBUyxDQUFDLENBQUMsRUFBRSxVQUFDcEMsR0FBRyxFQUFFcUMsTUFBTSxFQUFLO1FBQy9FLElBQU1qRixJQUFJLEdBQUdpRixNQUFNLENBQUNqRixJQUFJLElBQUksQ0FBQyxDQUFDO1FBRTlCLElBQUk0QyxHQUFHLEVBQUU7VUFDTHRGLGtEQUFJLENBQUM7WUFDRG1ELElBQUksRUFBRW1DLEdBQUc7WUFDVEosSUFBSSxFQUFFO1VBQ1YsQ0FBQyxDQUFDO1VBQ0YsT0FBTyxLQUFLO1FBQ2hCO1FBRUEsSUFBSXhDLElBQUksQ0FBQ2tGLGtCQUFrQixFQUFFO1VBQ3pCakksNkNBQUMsQ0FBQyxvQkFBb0IsRUFBRTRILFdBQVcsQ0FBQyxDQUFDcEUsSUFBSSxDQUFDVCxJQUFJLENBQUNrRixrQkFBa0IsQ0FBQztVQUNsRU4sT0FBTyxDQUFDTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztVQUM5Qk4sV0FBVyxDQUFDeEQsSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxNQUFNO1VBQ0h1RCxPQUFPLENBQUNPLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO1VBQy9CTixXQUFXLENBQUN6RyxJQUFJLENBQUMsQ0FBQztRQUN0QjtRQUVBLElBQUksQ0FBQzRCLElBQUksQ0FBQ29GLFdBQVcsSUFBSSxDQUFDcEYsSUFBSSxDQUFDcUYsT0FBTyxFQUFFO1VBQ3BDVCxPQUFPLENBQUNPLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO1FBQ2xDLENBQUMsTUFBTTtVQUNIUCxPQUFPLENBQUNPLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO1FBQ25DO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBdkgsTUFBQSxDQUVEb0YsY0FBYyxHQUFkLFNBQUFBLGNBQWNBLENBQUNELE1BQU0sRUFBRTtJQUFBLElBQUF1QyxNQUFBO0lBQ25CLElBQU1DLGNBQWMsR0FBR3RJLDZDQUFDLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDYyxZQUFZLENBQUM7SUFDOUQsSUFBTXlILGNBQWMsR0FBR3ZJLDZDQUFDLENBQUMsd0JBQXdCLENBQUM7SUFDbEQsSUFBTTRHLE9BQU8sR0FBRztNQUNaQyxRQUFRLEVBQUU7UUFDTkssT0FBTyxFQUFFLGNBQWM7UUFDdkJzQixNQUFNLEVBQUUsYUFBYTtRQUNyQkMsU0FBUyxFQUFFLGlCQUFpQjtRQUM1QkMsY0FBYyxFQUFFO01BQ3BCO0lBQ0osQ0FBQztJQUVELElBQUksQ0FBQ3pILFFBQVEsQ0FBQ21ELElBQUksQ0FBQyxDQUFDOztJQUVwQjtJQUNBLElBQUkwQixNQUFNLElBQUl3QyxjQUFjLENBQUNwRixNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ3ZDLE9BQU83QixNQUFNLENBQUNzSCxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DO0lBRUExSSxzRUFBUyxDQUFDdUYsSUFBSSxDQUFDb0QsVUFBVSxDQUFDakMsT0FBTyxFQUFFLFVBQUNqQixHQUFHLEVBQUVDLFFBQVEsRUFBSztNQUNsRHlDLE1BQUksQ0FBQ3hILGVBQWUsQ0FBQyxDQUFDO01BQ3RCd0gsTUFBSSxDQUFDdkgsWUFBWSxDQUFDZ0ksSUFBSSxDQUFDbEQsUUFBUSxDQUFDc0IsT0FBTyxDQUFDO01BQ3hDbUIsTUFBSSxDQUFDckgsV0FBVyxDQUFDOEgsSUFBSSxDQUFDbEQsUUFBUSxDQUFDNEMsTUFBTSxDQUFDO01BQ3RDSCxNQUFJLENBQUN0SCxhQUFhLENBQUMrSCxJQUFJLENBQUNsRCxRQUFRLENBQUM4QyxjQUFjLENBQUM7TUFFaERILGNBQWMsQ0FBQ1EsV0FBVyxDQUFDbkQsUUFBUSxDQUFDNkMsU0FBUyxDQUFDO01BQzlDSixNQUFJLENBQUNqSCxVQUFVLENBQUMsQ0FBQztNQUNqQmlILE1BQUksQ0FBQ3BILFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7TUFFcEIsSUFBTTZCLFFBQVEsR0FBR2hELDZDQUFDLENBQUMsc0JBQXNCLEVBQUVxSSxNQUFJLENBQUN2SCxZQUFZLENBQUMsQ0FBQ2lDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO01BRXZGL0MsNkNBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ2dKLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRWhHLFFBQVEsQ0FBQztNQUVuRHFGLE1BQUksQ0FBQzdHLGlCQUFpQixDQUFDLENBQUM7TUFDeEI2RyxNQUFJLENBQUM1Ryx1QkFBdUIsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQWQsTUFBQSxDQUVEc0ksY0FBYyxHQUFkLFNBQUFBLGNBQWNBLENBQUEsRUFBRztJQUFBLElBQUFDLE1BQUE7SUFDYixJQUFNQyxlQUFlLEdBQUcsR0FBRztJQUMzQixJQUFNeEUsVUFBVSxHQUFHeUUsa0RBQUEsQ0FBT0Msc0RBQUEsQ0FBVyxJQUFJLENBQUMxRSxVQUFVLEVBQUV3RSxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDN0UsSUFBTWpELHVCQUF1QixHQUFHa0Qsa0RBQUEsQ0FBT0Msc0RBQUEsQ0FBVyxJQUFJLENBQUNuRCx1QkFBdUIsRUFBRWlELGVBQWUsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUN2RyxJQUFNN0MsY0FBYyxHQUFHOEMsa0RBQUEsQ0FBT0Msc0RBQUEsQ0FBVyxJQUFJLENBQUMvQyxjQUFjLEVBQUU2QyxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDckYsSUFBSWhELE1BQU07O0lBRVY7SUFDQW5HLDZDQUFDLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDYyxZQUFZLENBQUMsQ0FBQ3VHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO01BQzVELElBQU0xQyxPQUFPLEdBQUc1RSw2Q0FBQyxDQUFDc0gsS0FBSyxDQUFDZ0MsYUFBYSxDQUFDO01BRXRDaEMsS0FBSyxDQUFDaUMsY0FBYyxDQUFDLENBQUM7O01BRXRCO01BQ0E1RSxVQUFVLENBQUNDLE9BQU8sQ0FBQztJQUN2QixDQUFDLENBQUM7O0lBRUY7SUFDQTVFLDZDQUFDLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDYyxZQUFZLENBQUMsQ0FBQ3VHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUMzRGxCLE1BQU0sR0FBRytDLE1BQUksQ0FBQ00sS0FBSztJQUN2QixDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFVBQUFuQyxLQUFLLEVBQUk7TUFDZixJQUFNMUMsT0FBTyxHQUFHNUUsNkNBQUMsQ0FBQ3NILEtBQUssQ0FBQ2dDLGFBQWEsQ0FBQztNQUN0Q2hDLEtBQUssQ0FBQ2lDLGNBQWMsQ0FBQyxDQUFDOztNQUV0QjtNQUNBckQsdUJBQXVCLENBQUN0QixPQUFPLEVBQUV1QixNQUFNLENBQUM7SUFDNUMsQ0FBQyxDQUFDO0lBRUZuRyw2Q0FBQyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUNjLFlBQVksQ0FBQyxDQUFDdUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7TUFDdEQsSUFBTXhDLE1BQU0sR0FBRzlFLDZDQUFDLENBQUNzSCxLQUFLLENBQUNnQyxhQUFhLENBQUMsQ0FBQ3ZHLElBQUksQ0FBQyxZQUFZLENBQUM7TUFDeEQsSUFBTTJHLE1BQU0sR0FBRzFKLDZDQUFDLENBQUNzSCxLQUFLLENBQUNnQyxhQUFhLENBQUMsQ0FBQ3ZHLElBQUksQ0FBQyxlQUFlLENBQUM7TUFDM0QxQyxrREFBSSxDQUFDO1FBQ0RtRCxJQUFJLEVBQUVrRyxNQUFNO1FBQ1puRSxJQUFJLEVBQUUsU0FBUztRQUNmb0UsZ0JBQWdCLEVBQUU7TUFDdEIsQ0FBQyxDQUFDLENBQUN4RyxJQUFJLENBQUMsWUFBTTtRQUNWO1FBQ0FtRCxjQUFjLENBQUN4QixNQUFNLENBQUM7TUFDMUIsQ0FBQyxDQUFDO01BQ0Z3QyxLQUFLLENBQUNpQyxjQUFjLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUM7SUFFRnZKLDZDQUFDLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDYyxZQUFZLENBQUMsQ0FBQ3VHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO01BQzFELElBQU14QyxNQUFNLEdBQUc5RSw2Q0FBQyxDQUFDc0gsS0FBSyxDQUFDZ0MsYUFBYSxDQUFDLENBQUN2RyxJQUFJLENBQUMsVUFBVSxDQUFDO01BRXREdUUsS0FBSyxDQUFDaUMsY0FBYyxDQUFDLENBQUM7TUFDdEI7TUFDQUwsTUFBSSxDQUFDekMsZUFBZSxDQUFDM0IsTUFBTSxDQUFDO0lBQ2hDLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQW5FLE1BQUEsQ0FFRGlKLG1CQUFtQixHQUFuQixTQUFBQSxtQkFBbUJBLENBQUEsRUFBRztJQUFBLElBQUFDLE1BQUE7SUFDbEIsSUFBTUMsZ0JBQWdCLEdBQUc5Siw2Q0FBQyxDQUFDLGNBQWMsQ0FBQztJQUMxQyxJQUFNK0osV0FBVyxHQUFHL0osNkNBQUMsQ0FBQyxjQUFjLENBQUM7SUFDckMsSUFBTWdLLFVBQVUsR0FBR2hLLDZDQUFDLENBQUMscUJBQXFCLEVBQUUrSixXQUFXLENBQUM7SUFFeEQvSiw2Q0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNxSCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFDLEtBQUssRUFBSTtNQUN2Q0EsS0FBSyxDQUFDaUMsY0FBYyxDQUFDLENBQUM7TUFFdEJ2Siw2Q0FBQyxDQUFDc0gsS0FBSyxDQUFDZ0MsYUFBYSxDQUFDLENBQUNuSSxJQUFJLENBQUMsQ0FBQztNQUM3QjJJLGdCQUFnQixDQUFDMUYsSUFBSSxDQUFDLENBQUM7TUFDdkJwRSw2Q0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNvRSxJQUFJLENBQUMsQ0FBQztNQUMvQjRGLFVBQVUsQ0FBQ2hCLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0lBRUZoSiw2Q0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNxSCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFDLEtBQUssRUFBSTtNQUMxQ0EsS0FBSyxDQUFDaUMsY0FBYyxDQUFDLENBQUM7TUFFdEJPLGdCQUFnQixDQUFDM0ksSUFBSSxDQUFDLENBQUM7TUFDdkJuQiw2Q0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNtQixJQUFJLENBQUMsQ0FBQztNQUMvQm5CLDZDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ29FLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztJQUVGMkYsV0FBVyxDQUFDMUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBQyxLQUFLLEVBQUk7TUFDOUIsSUFBTTJDLElBQUksR0FBR0QsVUFBVSxDQUFDL0UsR0FBRyxDQUFDLENBQUM7TUFFN0JxQyxLQUFLLENBQUNpQyxjQUFjLENBQUMsQ0FBQzs7TUFFdEI7TUFDQSxJQUFJLENBQUNVLElBQUksRUFBRTtRQUNQLE9BQU81SixrREFBSSxDQUFDO1VBQ1JtRCxJQUFJLEVBQUV3RyxVQUFVLENBQUNqSCxJQUFJLENBQUMsT0FBTyxDQUFDO1VBQzlCd0MsSUFBSSxFQUFFO1FBQ1YsQ0FBQyxDQUFDO01BQ047TUFFQXNFLE1BQUksQ0FBQ3ZJLGVBQWUsQ0FBQzJJLElBQUksQ0FBQztJQUM5QixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUF0SixNQUFBLENBRURXLGVBQWUsR0FBZixTQUFBQSxlQUFlQSxDQUFDMkksSUFBSSxFQUFFO0lBQUEsSUFBQUMsTUFBQTtJQUNsQmhLLHNFQUFTLENBQUN1RixJQUFJLENBQUMwRSxTQUFTLENBQUNGLElBQUksRUFBRSxVQUFDdEUsR0FBRyxFQUFFQyxRQUFRLEVBQUs7TUFDOUMsSUFBSUEsUUFBUSxDQUFDN0MsSUFBSSxDQUFDOEMsTUFBTSxLQUFLLFNBQVMsRUFBRTtRQUNwQ3FFLE1BQUksQ0FBQ25FLGNBQWMsQ0FBQyxDQUFDO01BQ3pCLENBQUMsTUFBTTtRQUNIMUYsa0RBQUksQ0FBQztVQUNEbUQsSUFBSSxFQUFFb0MsUUFBUSxDQUFDN0MsSUFBSSxDQUFDaUQsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO1VBQ3JDVixJQUFJLEVBQUU7UUFDVixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQTVFLE1BQUEsQ0FFRHlKLHlCQUF5QixHQUF6QixTQUFBQSx5QkFBeUJBLENBQUEsRUFBRztJQUFBLElBQUFDLE1BQUE7SUFDeEIsSUFBTUMsY0FBYyxHQUFHdEssNkNBQUMsQ0FBQyx3QkFBd0IsQ0FBQztJQUNsRCxJQUFNdUssU0FBUyxHQUFHdkssNkNBQUMsQ0FBQyw2QkFBNkIsQ0FBQztJQUNsRCxJQUFNd0ssVUFBVSxHQUFHeEssNkNBQUMsQ0FBQyxtQkFBbUIsRUFBRXVLLFNBQVMsQ0FBQztJQUVwRHZLLDZDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ3FILEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO01BQzVDQSxLQUFLLENBQUNpQyxjQUFjLENBQUMsQ0FBQztNQUN0QnZKLDZDQUFDLENBQUNzSCxLQUFLLENBQUNnQyxhQUFhLENBQUMsQ0FBQ21CLE1BQU0sQ0FBQyxDQUFDO01BQy9CSCxjQUFjLENBQUNHLE1BQU0sQ0FBQyxDQUFDO01BQ3ZCekssNkNBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDeUssTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDO0lBRUZ6Syw2Q0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNxSCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFDLEtBQUssRUFBSTtNQUMvQ0EsS0FBSyxDQUFDaUMsY0FBYyxDQUFDLENBQUM7TUFDdEJlLGNBQWMsQ0FBQ0csTUFBTSxDQUFDLENBQUM7TUFDdkJ6Syw2Q0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUN5SyxNQUFNLENBQUMsQ0FBQztNQUNuQ3pLLDZDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ3lLLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQztJQUVGRixTQUFTLENBQUNsRCxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUFDLEtBQUssRUFBSTtNQUM1QixJQUFNMkMsSUFBSSxHQUFHTyxVQUFVLENBQUN2RixHQUFHLENBQUMsQ0FBQztNQUU3QnFDLEtBQUssQ0FBQ2lDLGNBQWMsQ0FBQyxDQUFDO01BRXRCLElBQUksQ0FBQ3RKLDhFQUFhLENBQUNnSyxJQUFJLENBQUMsRUFBRTtRQUN0QixPQUFPNUosa0RBQUksQ0FBQztVQUNSbUQsSUFBSSxFQUFFZ0gsVUFBVSxDQUFDekgsSUFBSSxDQUFDLE9BQU8sQ0FBQztVQUM5QndDLElBQUksRUFBRTtRQUNWLENBQUMsQ0FBQztNQUNOO01BRUFyRixzRUFBUyxDQUFDdUYsSUFBSSxDQUFDaUYsb0JBQW9CLENBQUNULElBQUksRUFBRSxVQUFDdEUsR0FBRyxFQUFFZ0YsSUFBSSxFQUFLO1FBQ3JELElBQUlBLElBQUksQ0FBQzVILElBQUksQ0FBQzhDLE1BQU0sS0FBSyxTQUFTLEVBQUU7VUFDaEN3RSxNQUFJLENBQUN0RSxjQUFjLENBQUMsQ0FBQztRQUN6QixDQUFDLE1BQU07VUFDSDFGLGtEQUFJLENBQUM7WUFDRG1ELElBQUksRUFBRW1ILElBQUksQ0FBQzVILElBQUksQ0FBQ2lELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNqQ1YsSUFBSSxFQUFFO1VBQ1YsQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUE1RSxNQUFBLENBRURpSyxzQkFBc0IsR0FBdEIsU0FBQUEsc0JBQXNCQSxDQUFBLEVBQUc7SUFBQSxJQUFBQyxNQUFBO0lBQ3JCLElBQU1sRSxLQUFLLEdBQUd2RywyREFBWSxDQUFDLENBQUM7SUFFNUJKLDZDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ3FILEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO01BQzNDLElBQU14QyxNQUFNLEdBQUc5RSw2Q0FBQyxDQUFDc0gsS0FBSyxDQUFDZ0MsYUFBYSxDQUFDLENBQUN2RyxJQUFJLENBQUMsY0FBYyxDQUFDO01BQzFELElBQU02RCxPQUFPLEdBQUc7UUFDWkMsUUFBUSxFQUFFO01BQ2QsQ0FBQztNQUVEUyxLQUFLLENBQUNpQyxjQUFjLENBQUMsQ0FBQztNQUV0QjVDLEtBQUssQ0FBQ0csSUFBSSxDQUFDLENBQUM7TUFFWjVHLHNFQUFTLENBQUN1RixJQUFJLENBQUNxRiwwQkFBMEIsQ0FBQ2hHLE1BQU0sRUFBRThCLE9BQU8sRUFBRSxVQUFDakIsR0FBRyxFQUFFQyxRQUFRLEVBQUs7UUFDMUVlLEtBQUssQ0FBQ00sYUFBYSxDQUFDckIsUUFBUSxDQUFDc0IsT0FBTyxDQUFDO1FBRXJDMkQsTUFBSSxDQUFDMUQsb0JBQW9CLENBQUMsQ0FBQztNQUMvQixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUF4RyxNQUFBLENBRUR3RyxvQkFBb0IsR0FBcEIsU0FBQUEsb0JBQW9CQSxDQUFBLEVBQUc7SUFDbkJuSCw2Q0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNxSCxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUFDLEtBQUssRUFBSTtNQUM1QyxJQUFNeUQsT0FBTyxHQUFHL0ssNkNBQUMsQ0FBQ3NILEtBQUssQ0FBQ2dDLGFBQWEsQ0FBQztNQUN0QyxJQUFNMEIsRUFBRSxHQUFHRCxPQUFPLENBQUM5RixHQUFHLENBQUMsQ0FBQztNQUN4QixJQUFNZ0csS0FBSyxHQUFHRixPQUFPLENBQUNoSSxJQUFJLENBQUMsT0FBTyxDQUFDO01BRW5DLElBQUksQ0FBQ2lJLEVBQUUsRUFBRTtRQUNMO01BQ0o7TUFFQSxJQUFNRSxZQUFZLEdBQUdILE9BQU8sQ0FBQzlILElBQUksbUJBQWlCK0gsRUFBRSxNQUFHLENBQUMsQ0FBQ2pJLElBQUksQ0FBQyxjQUFjLENBQUM7TUFFN0UvQyw2Q0FBQywwQkFBd0JpTCxLQUFPLENBQUMsQ0FBQzlKLElBQUksQ0FBQyxDQUFDO01BQ3hDbkIsNkNBQUMsMEJBQXdCaUwsS0FBSyxTQUFJRCxFQUFJLENBQUMsQ0FBQzVHLElBQUksQ0FBQyxDQUFDO01BRTlDLElBQUk4RyxZQUFZLEVBQUU7UUFDZGxMLDZDQUFDLDRCQUEwQmlMLEtBQU8sQ0FBQyxDQUFDN0csSUFBSSxDQUFDLENBQUM7TUFDOUMsQ0FBQyxNQUFNO1FBQ0hwRSw2Q0FBQyw0QkFBMEJpTCxLQUFPLENBQUMsQ0FBQzlKLElBQUksQ0FBQyxDQUFDO01BQzlDO0lBQ0osQ0FBQyxDQUFDO0lBRUZuQiw2Q0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNnSixPQUFPLENBQUMsUUFBUSxDQUFDO0lBRTNDLFNBQVNtQyxXQUFXQSxDQUFBLEVBQUc7TUFDbkIsSUFBTTNCLEtBQUssR0FBR3hKLDZDQUFDLENBQUMsMkNBQTJDLENBQUMsQ0FBQ2lGLEdBQUcsQ0FBQyxDQUFDO01BQ2xFLElBQU1tRyxXQUFXLEdBQUdwTCw2Q0FBQyxDQUFDLHNCQUFzQixDQUFDO01BQzdDLElBQU1xTCxVQUFVLEdBQUdyTCw2Q0FBQyxDQUFDLHdCQUF3QixDQUFDO01BRTlDLElBQUl3SixLQUFLLEtBQUssTUFBTSxFQUFFO1FBQ2xCNEIsV0FBVyxDQUFDaEgsSUFBSSxDQUFDLENBQUM7UUFDbEJpSCxVQUFVLENBQUNsSyxJQUFJLENBQUMsQ0FBQztNQUNyQixDQUFDLE1BQU07UUFDSGlLLFdBQVcsQ0FBQ2pLLElBQUksQ0FBQyxDQUFDO1FBQ2xCa0ssVUFBVSxDQUFDakgsSUFBSSxDQUFDLENBQUM7TUFDckI7SUFDSjtJQUVBcEUsNkNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDcUgsRUFBRSxDQUFDLE9BQU8sRUFBRThELFdBQVcsQ0FBQztJQUVuREEsV0FBVyxDQUFDLENBQUM7RUFDakIsQ0FBQztFQUFBeEssTUFBQSxDQUVEUyxVQUFVLEdBQVYsU0FBQUEsVUFBVUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDNkgsY0FBYyxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDVyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQ2dCLHNCQUFzQixDQUFDLENBQUM7SUFDN0IsSUFBSSxDQUFDUix5QkFBeUIsQ0FBQyxDQUFDOztJQUVoQztJQUNBLElBQUksQ0FBQ2tCLGlCQUFpQixHQUFHLElBQUluTCxnRUFBaUIsQ0FBQ0gsNkNBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0VBQ2xGLENBQUM7RUFBQSxPQUFBTSxJQUFBO0FBQUEsRUF2bEI2QlAscURBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHRCO0FBQzRCO0FBQ25CO0FBQ2U7QUFDRztBQUNuQjtBQUFBLElBRVZJLGlCQUFpQjtFQUNsQyxTQUFBQSxrQkFBWXdMLFFBQVEsRUFBRTtJQUNsQixJQUFJLENBQUNBLFFBQVEsR0FBR0EsUUFBUTtJQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBRzVMLDZDQUFDLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDMkwsUUFBUSxDQUFDO0lBQzNELElBQUksQ0FBQ0Usa0JBQWtCLENBQUMsQ0FBQztJQUN6QixJQUFJLENBQUNDLHNCQUFzQixDQUFDLENBQUM7SUFDN0IsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQyxDQUFDO0VBQzlCO0VBQUMsSUFBQXBMLE1BQUEsR0FBQVIsaUJBQUEsQ0FBQVMsU0FBQTtFQUFBRCxNQUFBLENBRURrTCxrQkFBa0IsR0FBbEIsU0FBQUEsa0JBQWtCQSxDQUFBLEVBQUc7SUFBQSxJQUFBaEgsS0FBQTtJQUNqQixJQUFJLENBQUN5RyxpQkFBaUIsR0FBRywrQkFBK0I7SUFDeEQsSUFBSSxDQUFDVSxpQkFBaUIsR0FBR1AsdURBQUcsQ0FBQztNQUN6QlEsTUFBTSxFQUFLLElBQUksQ0FBQ1gsaUJBQWlCO0lBQ3JDLENBQUMsQ0FBQztJQUVGdEwsNkNBQUMsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMyTCxRQUFRLENBQUMsQ0FBQ3RFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO01BQy9EO01BQ0E7TUFDQTtNQUNBLElBQUl0SCw2Q0FBQyxDQUFJNkUsS0FBSSxDQUFDeUcsaUJBQWlCLHVDQUFrQyxDQUFDLENBQUNyRyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3RFSixLQUFJLENBQUNtSCxpQkFBaUIsQ0FBQ0UsWUFBWSxDQUFDLENBQUM7TUFDekM7TUFFQSxJQUFJckgsS0FBSSxDQUFDbUgsaUJBQWlCLENBQUNHLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUN4QztNQUNKO01BRUE3RSxLQUFLLENBQUNpQyxjQUFjLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUM7SUFFRixJQUFJLENBQUM2QyxjQUFjLENBQUMsQ0FBQztJQUNyQixJQUFJLENBQUNDLG1CQUFtQixDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQztFQUN2QixDQUFDO0VBQUEzTCxNQUFBLENBRUR5TCxjQUFjLEdBQWQsU0FBQUEsY0FBY0EsQ0FBQSxFQUFHO0lBQ2IsSUFBSSxDQUFDSixpQkFBaUIsQ0FBQ08sR0FBRyxDQUFDLENBQ3ZCO01BQ0lDLFFBQVEsRUFBSyxJQUFJLENBQUNsQixpQkFBaUIsdUNBQWtDO01BQ3JFbUIsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUdDLEVBQUUsRUFBRXpILEdBQUcsRUFBSztRQUNuQixJQUFNMEgsU0FBUyxHQUFHakosTUFBTSxDQUFDdUIsR0FBRyxDQUFDO1FBQzdCLElBQU0rQyxNQUFNLEdBQUcyRSxTQUFTLEtBQUssQ0FBQyxJQUFJLENBQUNqSixNQUFNLENBQUNrSixLQUFLLENBQUNELFNBQVMsQ0FBQztRQUUxREQsRUFBRSxDQUFDMUUsTUFBTSxDQUFDO01BQ2QsQ0FBQztNQUNENkUsWUFBWSxFQUFFO0lBQ2xCLENBQUMsQ0FDSixDQUFDO0VBQ04sQ0FBQztFQUFBbE0sTUFBQSxDQUVEMEwsbUJBQW1CLEdBQW5CLFNBQUFBLG1CQUFtQkEsQ0FBQSxFQUFHO0lBQUEsSUFBQWpHLE1BQUE7SUFDbEIsSUFBSSxDQUFDNEYsaUJBQWlCLENBQUNPLEdBQUcsQ0FBQyxDQUN2QjtNQUNJQyxRQUFRLEVBQUV4TSw2Q0FBQyxDQUFJLElBQUksQ0FBQ3NMLGlCQUFpQixxQ0FBZ0MsQ0FBQztNQUN0RW1CLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHQyxFQUFFLEVBQUs7UUFDZCxJQUFJMUUsTUFBTTtRQUVWLElBQU04RSxJQUFJLEdBQUc5TSw2Q0FBQyxDQUFJb0csTUFBSSxDQUFDa0YsaUJBQWlCLHFDQUFnQyxDQUFDO1FBRXpFLElBQUl3QixJQUFJLENBQUM1SixNQUFNLEVBQUU7VUFDYixJQUFNNkosTUFBTSxHQUFHRCxJQUFJLENBQUM3SCxHQUFHLENBQUMsQ0FBQztVQUV6QitDLE1BQU0sR0FBRytFLE1BQU0sSUFBSUEsTUFBTSxDQUFDN0osTUFBTSxJQUFJNkosTUFBTSxLQUFLLGdCQUFnQjtRQUNuRTtRQUVBTCxFQUFFLENBQUMxRSxNQUFNLENBQUM7TUFDZCxDQUFDO01BQ0Q2RSxZQUFZLEVBQUU7SUFDbEIsQ0FBQyxDQUNKLENBQUM7RUFDTjs7RUFFQTtBQUNKO0FBQ0EsS0FGSTtFQUFBbE0sTUFBQSxDQUdBMkwsWUFBWSxHQUFaLFNBQUFBLFlBQVlBLENBQUEsRUFBRztJQUNYLElBQU1VLGFBQWEsR0FBRywrQkFBK0I7SUFFckRoTiw2Q0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDcUgsRUFBRSxDQUFDLE9BQU8sRUFBRTJGLGFBQWEsRUFBRSxVQUFDMUYsS0FBSyxFQUFLO01BQzVDLElBQU0yRixpQkFBaUIsR0FBR2pOLDZDQUFDLENBQUMsc0JBQXNCLENBQUM7TUFDbkQsSUFBTWtOLHFCQUFxQixHQUFHbE4sNkNBQUMsQ0FBQywwQkFBMEIsQ0FBQztNQUUzRHNILEtBQUssQ0FBQ2lDLGNBQWMsQ0FBQyxDQUFDO01BRXRCMEQsaUJBQWlCLENBQUNFLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztNQUNqREQscUJBQXFCLENBQUNDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztJQUN6RCxDQUFDLENBQUM7RUFDTixDQUFDO0VBQUF4TSxNQUFBLENBRURtTCxzQkFBc0IsR0FBdEIsU0FBQUEsc0JBQXNCQSxDQUFBLEVBQUc7SUFBQSxJQUFBdkYsTUFBQTtJQUNyQixJQUFJNkcsS0FBSzs7SUFFVDtJQUNBNUIsaUVBQVksQ0FBQyxJQUFJLENBQUNJLE1BQU0sRUFBRSxJQUFJLENBQUN5QixPQUFPLEVBQUU7TUFBRUMsY0FBYyxFQUFFO0lBQUssQ0FBQyxFQUFFLFVBQUMzSCxHQUFHLEVBQUU0SCxLQUFLLEVBQUs7TUFDOUUsSUFBSTVILEdBQUcsRUFBRTtRQUNMdEYsa0RBQUksQ0FBQztVQUNEbUQsSUFBSSxFQUFFbUMsR0FBRztVQUNUSixJQUFJLEVBQUU7UUFDVixDQUFDLENBQUM7UUFFRixNQUFNLElBQUkxRCxLQUFLLENBQUM4RCxHQUFHLENBQUM7TUFDeEI7TUFFQSxJQUFNNkgsTUFBTSxHQUFHeE4sNkNBQUMsQ0FBQ3VOLEtBQUssQ0FBQztNQUV2QixJQUFJaEgsTUFBSSxDQUFDeUYsaUJBQWlCLENBQUN5QixTQUFTLENBQUNsSCxNQUFJLENBQUNxRixNQUFNLENBQUMsS0FBSyxXQUFXLEVBQUU7UUFDL0RyRixNQUFJLENBQUN5RixpQkFBaUIsQ0FBQ2xHLE1BQU0sQ0FBQ1MsTUFBSSxDQUFDcUYsTUFBTSxDQUFDO01BQzlDO01BRUEsSUFBSXdCLEtBQUssRUFBRTtRQUNQN0csTUFBSSxDQUFDeUYsaUJBQWlCLENBQUNsRyxNQUFNLENBQUNzSCxLQUFLLENBQUM7TUFDeEM7TUFFQSxJQUFJSSxNQUFNLENBQUNFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNyQk4sS0FBSyxHQUFHRyxLQUFLO1FBQ2JoSCxNQUFJLENBQUM4RixtQkFBbUIsQ0FBQyxDQUFDO01BQzlCLENBQUMsTUFBTTtRQUNIbUIsTUFBTSxDQUFDbEwsSUFBSSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQztRQUM1Q29KLDBEQUFVLENBQUNpQyxzQkFBc0IsQ0FBQ0osS0FBSyxDQUFDO01BQzVDOztNQUVBO01BQ0E7TUFDQTtNQUNBdk4sNkNBQUMsQ0FBQ3VHLE1BQUksQ0FBQytFLGlCQUFpQixDQUFDLENBQUNySSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQzJLLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQztJQUM3RixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUFqTixNQUFBLENBRURvTCxtQkFBbUIsR0FBbkIsU0FBQUEsbUJBQW1CQSxDQUFBLEVBQUc7SUFDbEIsSUFBTThCLG1CQUFtQixHQUFHN04sNkNBQUMsQ0FBQyxxQkFBcUIsQ0FBQztJQUNwRCxJQUFNOE4sY0FBYyxHQUFHOU4sNkNBQUMsQ0FBQyxpQkFBaUIsQ0FBQztJQUUzQzhOLGNBQWMsQ0FBQ3pHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQUMsS0FBSyxFQUFJO01BQ2pDLElBQU15RyxNQUFNLEdBQUc7UUFDWEMsVUFBVSxFQUFFaE8sNkNBQUMsQ0FBQywyQkFBMkIsRUFBRThOLGNBQWMsQ0FBQyxDQUFDN0ksR0FBRyxDQUFDLENBQUM7UUFDaEVnSixRQUFRLEVBQUVqTyw2Q0FBQyxDQUFDLHlCQUF5QixFQUFFOE4sY0FBYyxDQUFDLENBQUM3SSxHQUFHLENBQUMsQ0FBQztRQUM1RGlKLElBQUksRUFBRWxPLDZDQUFDLENBQUMsd0JBQXdCLEVBQUU4TixjQUFjLENBQUMsQ0FBQzdJLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZEa0osUUFBUSxFQUFFbk8sNkNBQUMsQ0FBQyx1QkFBdUIsRUFBRThOLGNBQWMsQ0FBQyxDQUFDN0ksR0FBRyxDQUFDO01BQzdELENBQUM7TUFFRHFDLEtBQUssQ0FBQ2lDLGNBQWMsQ0FBQyxDQUFDO01BRXRCckosc0VBQVMsQ0FBQ3VGLElBQUksQ0FBQzJJLGlCQUFpQixDQUFDTCxNQUFNLEVBQUUsc0JBQXNCLEVBQUUsVUFBQ3BJLEdBQUcsRUFBRUMsUUFBUSxFQUFLO1FBQ2hGNUYsNkNBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOEksSUFBSSxDQUFDbEQsUUFBUSxDQUFDc0IsT0FBTyxDQUFDOztRQUU1QztRQUNBbEgsNkNBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDcUgsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBZ0gsVUFBVSxFQUFJO1VBQ2xELElBQU1DLE9BQU8sR0FBR3RPLDZDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ2lGLEdBQUcsQ0FBQyxDQUFDO1VBRWxEb0osVUFBVSxDQUFDOUUsY0FBYyxDQUFDLENBQUM7VUFFM0JySixzRUFBUyxDQUFDdUYsSUFBSSxDQUFDOEksbUJBQW1CLENBQUNELE9BQU8sRUFBRSxZQUFNO1lBQzlDak4sTUFBTSxDQUFDc0gsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQztVQUM1QixDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7SUFFRjVJLDZDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ3FILEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO01BQzlDQSxLQUFLLENBQUNpQyxjQUFjLENBQUMsQ0FBQztNQUV0QnZKLDZDQUFDLENBQUNzSCxLQUFLLENBQUNnQyxhQUFhLENBQUMsQ0FBQ25JLElBQUksQ0FBQyxDQUFDO01BQzdCME0sbUJBQW1CLENBQUNELFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztNQUNuRDVOLDZDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ29FLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQztJQUdGcEUsNkNBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDcUgsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7TUFDOUNBLEtBQUssQ0FBQ2lDLGNBQWMsQ0FBQyxDQUFDO01BRXRCc0UsbUJBQW1CLENBQUNXLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztNQUNoRHhPLDZDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ29FLElBQUksQ0FBQyxDQUFDO01BQ25DcEUsNkNBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDbUIsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUFoQixpQkFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUN0TEwsNkJBQWUsb0NBQVVzTyxJQUFJLEVBQUU7RUFDM0IsSUFBSSxPQUFPQSxJQUFJLEtBQUssUUFBUSxFQUFFO0lBQzFCLE9BQU8sS0FBSztFQUNoQjs7RUFFQTtFQUNBLE9BQU8sSUFBSTtBQUNmLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS9jYXJ0LmpzIiwid2VicGFjazovL3NlY29uZC1za2luLWF1ZGlvLy4vYXNzZXRzL2pzL3RoZW1lL2NhcnQvc2hpcHBpbmctZXN0aW1hdG9yLmpzIiwid2VicGFjazovL3NlY29uZC1za2luLWF1ZGlvLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZ2lmdENlcnRDaGVjayBmcm9tICcuL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvcic7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IFNoaXBwaW5nRXN0aW1hdG9yIGZyb20gJy4vY2FydC9zaGlwcGluZy1lc3RpbWF0b3InO1xuaW1wb3J0IHsgZGVmYXVsdE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIHJlZnJlc2hFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy4kY2FydENvbnRlbnQgPSAkKCdbZGF0YS1jYXJ0LWNvbnRlbnRdJyk7XG4gICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcyA9ICQoJ1tkYXRhLWNhcnQtc3RhdHVzXScpO1xuICAgICAgICB0aGlzLiRjYXJ0VG90YWxzID0gJCgnW2RhdGEtY2FydC10b3RhbHNdJyk7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKCdbZGF0YS1jYXJ0XSAubG9hZGluZ092ZXJsYXknKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICB0aGlzLnJlZnJlc2hFbGVtZW50cygpO1xuICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTsgLy8gVE9ETzogdGVtcG9yYXJ5IHVudGlsIHJvcGVyIHB1bGxzIGluIGhpcyBjYXJ0IGNvbXBvbmVudHNcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgd2luZG93LmFwcGx5Q291cG9uQ29kZSA9IHRoaXMuYXBwbHlDb3Vwb25Db2RlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5hZGRDYXJ0RGlzY2xhaW1lcigpO1xuICAgICAgICB0aGlzLmRpc3BsYXlQcm9kdWN0RnVsbFByaWNlKCk7XG4gICAgfVxuXG4gICAgZ2V0UHJvZHVjdFByaWNlKHBpZCwgc2t1KSB7XG4gICAgICAgIC8vIEVuc3VyZSBwaWQgcGFyYW1ldGVyIHNldDpcbiAgICAgICAgaWYgKHR5cGVvZiBwaWQgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBwcm9kdWN0IElELicpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBza3UgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBTS1UuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgcGlkIGlzIGEgbm9uIGRlY2ltYWwgbnVtYmVyOlxuICAgICAgICAgICAgcGlkID0gcGFyc2VJbnQocGlkKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXR1cm4gcHJvbWlzZSB0byBjb250YWluIHRoZSByZXN1bHRzLi4uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIC8vIE1ha2UgYW4gQWpheCBHRVQgcmVxdWVzdCB0byB0aGUgcHJvZHVjdCBwYWdlOlxuICAgICAgICAgICAgJC5nZXQoJy9wcm9kdWN0cy5waHA/cHJvZHVjdElkPScgKyBwaWQgKyAnJnNrdT0nICsgc2t1LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiByZXF1ZXN0IHN1Y2Nlc3NmdWw6XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBjb250ZW50IGZvciB0aGUgcHJvZHVjdCBwYWdlIGlzIGxvYWRlZCBpbiAncmVzJy4gXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBwcm9kdWN0IGlzIGJ1bGsgZGlzY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudDEgPSAkKHJlcykuZmlsdGVyKCdtZXRhW2l0ZW1wcm9wPVwicHJpY2VcIl0nKS5hdHRyKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbW91bnQyID0gYW1vdW50MSA/IGFtb3VudDEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQocmVzKS5maWx0ZXIoJ21ldGFbcHJvcGVydHk9XCJwcm9kdWN0OnByaWNlOmFtb3VudFwiXScpLmF0dHIoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYW1vdW50Mik7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVsc2UgcmVxdWVzdCBmYWlsZWQ6XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbnVtYmVyV2l0aENvbW1hcyh4KSB7XG4gICAgICAgIHJldHVybiB4LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xuICAgIH1cblxuICAgIGRpc3BsYXlQcm9kdWN0RnVsbFByaWNlKCkge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgJCgnLmNhcnQtaXRlbVtkYXRhLXByb2R1Y3QtaWRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0SXRlbSA9ICQodGhpcyk7XG4gICAgICAgICAgICBjb25zdCBwaWQgPSAkY2FydEl0ZW0uZGF0YSgncHJvZHVjdC1pZCcpO1xuICAgICAgICAgICAgY29uc3Qgc2t1ID0gJGNhcnRJdGVtLmRhdGEoJ3Byb2R1Y3Qtc2t1Jyk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICRjYXJ0SXRlbS5kYXRhKCdxdWFudGl0eScpO1xuXG4gICAgICAgICAgICAvLyBpZiBwcmljZSBub3QgYWxyZWFkeSBkaXNjb3VudGVkXG4gICAgICAgICAgICBpZiAoJGNhcnRJdGVtLmZpbmQoJy5wcmljZS0tZGlzY291bnRlZCcpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhhdC5nZXRQcm9kdWN0UHJpY2UocGlkLCBza3UpLnRoZW4oZnVuY3Rpb24ocHJpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkcHJpY2VFbGVtID0gJGNhcnRJdGVtLmZpbmQoJy5jYXJ0LWl0ZW0tdmFsdWU6Zmlyc3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICR0b3RhbEVsZW0gPSAkY2FydEl0ZW0uZmluZCgnLmNhcnQtaXRlbS12YWx1ZTpsYXN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UHJpY2UgPSAkcHJpY2VFbGVtLnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxUb3RhbFByaWNlID0gJyQnICsgdGhhdC5udW1iZXJXaXRoQ29tbWFzKE51bWJlcihwcmljZSAqIHF1YW50aXR5KS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxQcmljZSA9ICckJyArIHRoYXQubnVtYmVyV2l0aENvbW1hcyhOdW1iZXIocHJpY2UpLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBjdXJyZW50UHJpY2UgIT0gZnVsbFByaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnPHN0cm9uZyBjbGFzcz1cImNhcnQtaXRlbS12YWx1ZSBwcmljZS0tZGlzY291bnRlZCBwcmljZS0tZnVsbC1idWxrXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxQcmljZSArICc8L3N0cm9uZz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5zZXJ0QmVmb3JlKCRwcmljZUVsZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJzxzdHJvbmcgY2xhc3M9XCJjYXJ0LWl0ZW0tdmFsdWUgcHJpY2UtLWRpc2NvdW50ZWQgcHJpY2UtLWZ1bGwtYnVsa1wiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsVG90YWxQcmljZSArICc8L3N0cm9uZz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5zZXJ0QmVmb3JlKCR0b3RhbEVsZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZ2V0dGluZyBwcm9kdWN0IHByaWNlIC0gJywgZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZENhcnREaXNjbGFpbWVyKCkge1xuICAgICAgICAvLyBhZGQgZGlzY2xhaW1lciBmb3IgZmFudGFzdGljIGZyYW1lc1xuICAgICAgICBjb25zdCAkZnJhbWVzUHJvZHVjdHMgPSAkKCcuY2FydC1pdGVtW2RhdGEtcHJvZHVjdC1pZD0nICsgNjIyICsgJ10nKTtcbiAgICAgICAgbGV0ICRjYXJ0RGlzY2xhaW1lckZyYW1lID0gJCgnLmNhcnQtZGlzY2xhaW1lci5mcmFtZScpO1xuICAgICAgICBsZXQgdG90YWxRdWFudGl0eUZyYW1lcyA9IDA7XG4gICAgICAgIGlmICggJGZyYW1lc1Byb2R1Y3RzLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICAkZnJhbWVzUHJvZHVjdHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0b3RhbFF1YW50aXR5RnJhbWVzID0gdG90YWxRdWFudGl0eUZyYW1lcyArICQodGhpcykuZGF0YSgncXVhbnRpdHknKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoICRjYXJ0RGlzY2xhaW1lckZyYW1lLmxlbmd0aCA8IDEgKSB7XG4gICAgICAgICAgICAgICAgJChgXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FydC1kaXNjbGFpbWVyIGZyYW1lXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+XG4gICAgICAgICAgICAgICAgICAgIFlvdSBuZWVkIGF0IGxlYXN0IDUgRmFudGFzdGljIEZyYW1l4oSiIFNvdW5kcHJvb2YgV2luZG93IEluc2VydHMgaW5cbiAgICAgICAgICAgICAgICAgICAgeW91ciBjYXJ0IHRvIGNoZWNrb3V0LjwvcD5cbiAgICAgICAgICAgICAgICBgKS5pbnNlcnRCZWZvcmUoJ1tkYXRhLWNhcnQtdG90YWxzXScpO1xuICAgICAgICAgICAgICAgICRjYXJ0RGlzY2xhaW1lckZyYW1lID0gJCgnLmNhcnQtZGlzY2xhaW1lci5mcmFtZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAkY2FydERpc2NsYWltZXJGcmFtZS5sZW5ndGggPiAwICkge1xuICAgICAgICAgICAgaWYgKCAkZnJhbWVzUHJvZHVjdHMubGVuZ3RoID4gMCAmJiB0b3RhbFF1YW50aXR5RnJhbWVzIDwgNSApIHtcbiAgICAgICAgICAgICAgICAkY2FydERpc2NsYWltZXJGcmFtZS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRjYXJ0RGlzY2xhaW1lckZyYW1lLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBkaXNjbGFpbWVyIGZvciBmYWJyaWMgcGFuZWxzXG4gICAgICAgIGNvbnN0ICRmYWJyaWNQYW5lbHMgPSAkKCcuY2FydC1pdGVtW2RhdGEtcHJvZHVjdC1pZD0nICsgMjI1ICsgJ10nKTtcbiAgICAgICAgbGV0IHRvdGFsUXVhbnRpdHlGYWJyaWMgPSAwO1xuICAgICAgICBsZXQgJGNhcnREaXNjbGFpbWVyRmFicmljID0gJCgnLmNhcnQtZGlzY2xhaW1lci5mYWJyaWMnKTtcbiAgICAgICAgaWYgKCAkZmFicmljUGFuZWxzLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICAkZmFicmljUGFuZWxzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdG90YWxRdWFudGl0eUZhYnJpYyA9IHRvdGFsUXVhbnRpdHlGYWJyaWMgKyAkKHRoaXMpLmRhdGEoJ3F1YW50aXR5Jyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCAkY2FydERpc2NsYWltZXJGYWJyaWMubGVuZ3RoIDwgMSApIHtcbiAgICAgICAgICAgICAgICAkKGBcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJ0LWRpc2NsYWltZXIgZmFicmljXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+XG4gICAgICAgICAgICAgICAgICAgIFlvdSBuZWVkIGF0IGxlYXN0IDUgQWNvdXN0aWMgUHJv4oSiIEFuY2hvcmFnZSBGYWJyaWMgUGFuZWxzIGluXG4gICAgICAgICAgICAgICAgICAgIHlvdXIgY2FydCB0byBjaGVja291dC48L3A+XG4gICAgICAgICAgICAgICAgYCkuaW5zZXJ0QmVmb3JlKCdbZGF0YS1jYXJ0LXRvdGFsc10nKTtcbiAgICAgICAgICAgICAgICAkY2FydERpc2NsYWltZXJGYWJyaWMgPSAkKCcuY2FydC1kaXNjbGFpbWVyLmZhYnJpYycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAkY2FydERpc2NsYWltZXJGYWJyaWMubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgIGlmICggJGZhYnJpY1BhbmVscy5sZW5ndGggPiAwICYmIHRvdGFsUXVhbnRpdHlGYWJyaWMgPCA1ICkge1xuICAgICAgICAgICAgICAgICRjYXJ0RGlzY2xhaW1lckZhYnJpYy5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRjYXJ0RGlzY2xhaW1lckZhYnJpYy5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgZGlzY2xhaW1lciBmb3IgcG9seXpvcmJlIHBhbmVsc1xuICAgICAgICBjb25zdCAkcG9seXpvcmJlUGFuZWxzID0gJCgnLmNhcnQtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9JyArIDExODQgKyAnXScpO1xuICAgICAgICBsZXQgdG90YWxRdWFudGl0eVBvbHl6b3JiZSA9IDA7XG4gICAgICAgIGxldCAkY2FydERpc2NsYWltZXJQb2x5em9yYmUgPSAkKCcuY2FydC1kaXNjbGFpbWVyLnBvbHl6b3JiZScpO1xuICAgICAgICBpZiAoICRwb2x5em9yYmVQYW5lbHMubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgICRwb2x5em9yYmVQYW5lbHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0b3RhbFF1YW50aXR5UG9seXpvcmJlID0gdG90YWxRdWFudGl0eVBvbHl6b3JiZSArICQodGhpcykuZGF0YSgncXVhbnRpdHknKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoICRjYXJ0RGlzY2xhaW1lclBvbHl6b3JiZS5sZW5ndGggPCAxICkge1xuICAgICAgICAgICAgICAgICQoYFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcnQtZGlzY2xhaW1lciBwb2x5em9yYmVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgWW91IG5lZWQgYXQgbGVhc3QgNSBQb2x5Wm9yYmXihKIgTGFyZ2UgQWNvdXN0aWMgUGFuZWxzIGluXG4gICAgICAgICAgICAgICAgICAgIHlvdXIgY2FydCB0byBjaGVja291dC48L3A+XG4gICAgICAgICAgICAgICAgYCkuaW5zZXJ0QmVmb3JlKCdbZGF0YS1jYXJ0LXRvdGFsc10nKTtcbiAgICAgICAgICAgICAgICAkY2FydERpc2NsYWltZXJQb2x5em9yYmUgPSAkKCcuY2FydC1kaXNjbGFpbWVyLnBvbHl6b3JiZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAkY2FydERpc2NsYWltZXJQb2x5em9yYmUubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgIGlmICggJHBvbHl6b3JiZVBhbmVscy5sZW5ndGggPiAwICYmIHRvdGFsUXVhbnRpdHlQb2x5em9yYmUgPCA1ICkge1xuICAgICAgICAgICAgICAgICRjYXJ0RGlzY2xhaW1lclBvbHl6b3JiZS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRjYXJ0RGlzY2xhaW1lclBvbHl6b3JiZS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICgkZnJhbWVzUHJvZHVjdHMubGVuZ3RoID4gMCAmJiB0b3RhbFF1YW50aXR5RnJhbWVzIDwgMykgfHxcbiAgICAgICAgICAgICgkZmFicmljUGFuZWxzLmxlbmd0aCA+IDAgJiYgdG90YWxRdWFudGl0eUZhYnJpYyA8IDUpIHx8XG4gICAgICAgICAgICAoJHBvbHl6b3JiZVBhbmVscy5sZW5ndGggPiAwICYmIHRvdGFsUXVhbnRpdHlQb2x5em9yYmUgPCA1KSApIHtcbiAgICAgICAgICAgICQoJy5jYXJ0LWFjdGlvbnMnKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcuY2FydC1hZGRpdGlvbmFsQ2hlY2tvdXRCdXR0b25zJykuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLmNhcnQtYWN0aW9ucycpLnNob3coKTtcbiAgICAgICAgICAgICQoJy5jYXJ0LWFkZGl0aW9uYWxDaGVja291dEJ1dHRvbnMnKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHBhcnNlSW50KCRlbC52YWwoKSwgMTApO1xuICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5FcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1pbkVycm9yJyk7XG4gICAgICAgIGNvbnN0IG1heEVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWF4RXJyb3InKTtcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycgPyBvbGRRdHkgKyAxIDogb2xkUXR5IC0gMTtcbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGl0eSBmb3IgbWluL21heCBxdWFudGl0eVxuICAgICAgICBpZiAobmV3UXR5IDwgbWluUXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWluRXJyb3IsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG1heFF0eSA+IDAgJiYgbmV3UXR5ID4gbWF4UXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWF4RXJyb3IsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlKCR0YXJnZXQsIHByZVZhbCA9IG51bGwpIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XG4gICAgICAgIGNvbnN0IG1heFF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1pblF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHByZVZhbCAhPT0gbnVsbCA/IHByZVZhbCA6IG1pblF0eTtcbiAgICAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNaW5FcnJvcicpO1xuICAgICAgICBjb25zdCBtYXhFcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1heEVycm9yJyk7XG4gICAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KE51bWJlcigkZWwuYXR0cigndmFsdWUnKSksIDEwKTtcbiAgICAgICAgbGV0IGludmFsaWRFbnRyeTtcbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGl0eSBmb3IgbWluL21heCBxdWFudGl0eVxuICAgICAgICBpZiAoIW5ld1F0eSkge1xuICAgICAgICAgICAgaW52YWxpZEVudHJ5ID0gJGVsLmF0dHIoJ3ZhbHVlJyk7XG4gICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogYCR7aW52YWxpZEVudHJ5fSBpcyBub3QgYSB2YWxpZCBlbnRyeWAsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld1F0eSA8IG1pblF0eSkge1xuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgIHRleHQ6IG1pbkVycm9yLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXhRdHkgPiAwICYmIG5ld1F0eSA+IG1heFF0eSkge1xuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgIHRleHQ6IG1heEVycm9yLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcXVhbnRpdHkgaXMgY2hhbmdlZCBcIjFcIiBmcm9tIFwiMFwiLCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGUgcm93LlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9IChuZXdRdHkgPT09IDApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudChyZW1vdmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0UmVtb3ZlSXRlbShpdGVtSWQpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoRWxlbWVudHMoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtUmVtb3ZlKGl0ZW1JZCwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0RWRpdE9wdGlvbnMoaXRlbUlkKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvbW9kYWxzL2NvbmZpZ3VyZS1wcm9kdWN0JyxcbiAgICAgICAgfTtcblxuICAgICAgICBtb2RhbC5vcGVuKCk7XG5cbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLmNvbmZpZ3VyZUluQ2FydChpdGVtSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdGb3JtKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHV0aWxzLmhvb2tzLm9uKCdwcm9kdWN0LW9wdGlvbi1jaGFuZ2UnLCAoZXZlbnQsIG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGNoYW5nZWRPcHRpb24gPSAkKG9wdGlvbik7XG4gICAgICAgICAgICBjb25zdCAkZm9ybSA9ICRjaGFuZ2VkT3B0aW9uLnBhcmVudHMoJ2Zvcm0nKTtcbiAgICAgICAgICAgIGNvbnN0ICRzdWJtaXQgPSAkKCdpbnB1dC5idXR0b24nLCAkZm9ybSk7XG4gICAgICAgICAgICBjb25zdCAkbWVzc2FnZUJveCA9ICQoJy5hbGVydE1lc3NhZ2VCb3gnKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSAkKCdbbmFtZT1cIml0ZW1faWRcIl0nLCAkZm9ybSkuYXR0cigndmFsdWUnKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShpdGVtLCAkZm9ybS5zZXJpYWxpemUoKSwgKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdC5kYXRhIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ3AuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWZyZXNoQ29udGVudChyZW1vdmUpIHtcbiAgICAgICAgY29uc3QgJGNhcnRJdGVtc1Jvd3MgPSAkKCdbZGF0YS1pdGVtLXJvd10nLCB0aGlzLiRjYXJ0Q29udGVudCk7XG4gICAgICAgIGNvbnN0ICRjYXJ0UGFnZVRpdGxlID0gJCgnW2RhdGEtY2FydC1wYWdlLXRpdGxlXScpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnY2FydC9jb250ZW50JyxcbiAgICAgICAgICAgICAgICB0b3RhbHM6ICdjYXJ0L3RvdGFscycsXG4gICAgICAgICAgICAgICAgcGFnZVRpdGxlOiAnY2FydC9wYWdlLXRpdGxlJyxcbiAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlczogJ2NhcnQvc3RhdHVzLW1lc3NhZ2VzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGxhc3QgaXRlbSBmcm9tIGNhcnQ/IFJlbG9hZFxuICAgICAgICBpZiAocmVtb3ZlICYmICRjYXJ0SXRlbXNSb3dzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEVsZW1lbnRzKCk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0Q29udGVudC5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy4kY2FydFRvdGFscy5odG1sKHJlc3BvbnNlLnRvdGFscyk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMuaHRtbChyZXNwb25zZS5zdGF0dXNNZXNzYWdlcyk7XG5cbiAgICAgICAgICAgICRjYXJ0UGFnZVRpdGxlLnJlcGxhY2VXaXRoKHJlc3BvbnNlLnBhZ2VUaXRsZSk7XG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgdGhpcy4kY2FydENvbnRlbnQpLmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcblxuICAgICAgICAgICAgdGhpcy5hZGRDYXJ0RGlzY2xhaW1lcigpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5UHJvZHVjdEZ1bGxQcmljZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kQ2FydEV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgZGVib3VuY2VUaW1lb3V0ID0gNDAwO1xuICAgICAgICBjb25zdCBjYXJ0VXBkYXRlID0gXy5iaW5kKF8uZGVib3VuY2UodGhpcy5jYXJ0VXBkYXRlLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcbiAgICAgICAgY29uc3QgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UgPSBfLmJpbmQoXy5kZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcbiAgICAgICAgY29uc3QgY2FydFJlbW92ZUl0ZW0gPSBfLmJpbmQoXy5kZWJvdW5jZSh0aGlzLmNhcnRSZW1vdmVJdGVtLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcbiAgICAgICAgbGV0IHByZVZhbDtcblxuICAgICAgICAvLyBjYXJ0IHVwZGF0ZVxuICAgICAgICAkKCdbZGF0YS1jYXJ0LXVwZGF0ZV0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XG4gICAgICAgICAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYXJ0IHF0eSBtYW51YWxseSB1cGRhdGVzXG4gICAgICAgICQoJy5jYXJ0LWl0ZW0tcXR5LWlucHV0JywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdmb2N1cycsICgpID0+IHtcbiAgICAgICAgICAgIHByZVZhbCA9IHRoaXMudmFsdWU7XG4gICAgICAgIH0pLmNoYW5nZShldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XG4gICAgICAgICAgICBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSgkdGFyZ2V0LCBwcmVWYWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuY2FydC1yZW1vdmUnLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmcgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NvbmZpcm1EZWxldGUnKTtcbiAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBpdGVtIGZyb20gY2FydFxuICAgICAgICAgICAgICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWl0ZW0tZWRpdF0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdpdGVtRWRpdCcpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gZWRpdCBpdGVtIGluIGNhcnRcbiAgICAgICAgICAgIHRoaXMuY2FydEVkaXRPcHRpb25zKGl0ZW1JZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRQcm9tb0NvZGVFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRjb3Vwb25Db250YWluZXIgPSAkKCcuY291cG9uLWNvZGUnKTtcbiAgICAgICAgY29uc3QgJGNvdXBvbkZvcm0gPSAkKCcuY291cG9uLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNvZGVJbnB1dCA9ICQoJ1tuYW1lPVwiY291cG9uY29kZVwiXScsICRjb3Vwb25Gb3JtKTtcblxuICAgICAgICAkKCcuY291cG9uLWNvZGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5oaWRlKCk7XG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLnNob3coKTtcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5zaG93KCk7XG4gICAgICAgICAgICAkY29kZUlucHV0LnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtYWRkJykuc2hvdygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkY291cG9uRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9ICRjb2RlSW5wdXQudmFsKCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIEVtcHR5IGNvZGVcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJGNvZGVJbnB1dC5kYXRhKCdlcnJvcicpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFwcGx5Q291cG9uQ29kZShjb2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXBwbHlDb3Vwb25Db2RlKGNvZGUpIHtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuYXBwbHlDb2RlKGNvZGUsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCkge1xuICAgICAgICBjb25zdCAkY2VydENvbnRhaW5lciA9ICQoJy5naWZ0LWNlcnRpZmljYXRlLWNvZGUnKTtcbiAgICAgICAgY29uc3QgJGNlcnRGb3JtID0gJCgnLmNhcnQtZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtJyk7XG4gICAgICAgIGNvbnN0ICRjZXJ0SW5wdXQgPSAkKCdbbmFtZT1cImNlcnRjb2RlXCJdJywgJGNlcnRGb3JtKTtcblxuICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1hZGQnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS50b2dnbGUoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykudG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkY2VydENvbnRhaW5lci50b2dnbGUoKTtcbiAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykudG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRjZXJ0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9ICRjZXJ0SW5wdXQudmFsKCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmICghZ2lmdENlcnRDaGVjayhjb2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJGNlcnRJbnB1dC5kYXRhKCdlcnJvcicpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5hcHBseUdpZnRDZXJ0aWZpY2F0ZShjb2RlLCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3AuZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG5cbiAgICAgICAgJCgnW2RhdGEtaXRlbS1naWZ0d3JhcF0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1HaWZ0d3JhcCcpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvbW9kYWxzL2dpZnQtd3JhcHBpbmctZm9ybScsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBtb2RhbC5vcGVuKCk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zKGl0ZW1JZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0V3JhcHBpbmdGb3JtKCkge1xuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJHNlbGVjdC52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gJHNlbGVjdC5kYXRhKCdpbmRleCcpO1xuXG4gICAgICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhbGxvd01lc3NhZ2UgPSAkc2VsZWN0LmZpbmQoYG9wdGlvblt2YWx1ZT0ke2lkfV1gKS5kYXRhKCdhbGxvd01lc3NhZ2UnKTtcblxuICAgICAgICAgICAgJChgLmdpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fWApLmhpZGUoKTtcbiAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctaW1hZ2UtJHtpbmRleH0tJHtpZH1gKS5zaG93KCk7XG5cbiAgICAgICAgICAgIGlmIChhbGxvd01lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLW1lc3NhZ2UtJHtpbmRleH1gKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnRXcmFwcGluZy1zZWxlY3QnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVWaWV3cygpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJCgnaW5wdXQ6cmFkaW9bbmFtZSA9XCJnaWZ0d3JhcHR5cGVcIl06Y2hlY2tlZCcpLnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgJHNpbmdsZUZvcm0gPSAkKCcuZ2lmdFdyYXBwaW5nLXNpbmdsZScpO1xuICAgICAgICAgICAgY29uc3QgJG11bHRpRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctbXVsdGlwbGUnKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnc2FtZScpIHtcbiAgICAgICAgICAgICAgICAkc2luZ2xlRm9ybS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJG11bHRpRm9ybS5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tuYW1lPVwiZ2lmdHdyYXB0eXBlXCJdJykub24oJ2NsaWNrJywgdG9nZ2xlVmlld3MpO1xuXG4gICAgICAgIHRvZ2dsZVZpZXdzKCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5iaW5kQ2FydEV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRQcm9tb0NvZGVFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpO1xuXG4gICAgICAgIC8vIGluaXRpYXRlIHNoaXBwaW5nIGVzdGltYXRvciBtb2R1bGVcbiAgICAgICAgdGhpcy5zaGlwcGluZ0VzdGltYXRvciA9IG5ldyBTaGlwcGluZ0VzdGltYXRvcigkKCdbZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJykpO1xuICAgIH1cbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgc3RhdGVDb3VudHJ5IGZyb20gJy4uL2NvbW1vbi9zdGF0ZS1jb3VudHJ5JztcbmltcG9ydCBub2QgZnJvbSAnLi4vY29tbW9uL25vZCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJy4uL2NvbW1vbi9mb3JtLXV0aWxzJztcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcHBpbmdFc3RpbWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcblxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScsIHRoaXMuJGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmluaXRGb3JtVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5iaW5kRXN0aW1hdG9yRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdEZvcm1WYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gJ2Zvcm1bZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJztcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IC5zaGlwcGluZy1lc3RpbWF0ZS1zdWJtaXRgLFxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0JywgdGhpcy4kZWxlbWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgLy8gV2hlbiBzd2l0Y2hpbmcgYmV0d2VlbiBjb3VudHJpZXMsIHRoZSBzdGF0ZS9yZWdpb24gaXMgZHluYW1pY1xuICAgICAgICAgICAgLy8gT25seSBwZXJmb3JtIGEgY2hlY2sgZm9yIGFsbCBmaWVsZHMgd2hlbiBjb3VudHJ5IGhhcyBhIHZhbHVlXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgYXJlQWxsKCd2YWxpZCcpIHdpbGwgY2hlY2sgY291bnRyeSBmb3IgdmFsaWRpdHlcbiAgICAgICAgICAgIGlmICgkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXWApLnZhbCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJpbmRWYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFN0YXRlVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRVUFNSYXRlcygpO1xuICAgIH1cblxuICAgIGJpbmRWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnlJZCA9IE51bWJlcih2YWwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb3VudHJ5SWQgIT09IDAgJiYgIU51bWJlci5pc05hTihjb3VudHJ5SWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnQ291bnRyeVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdYCksXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbGUgPSAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJGVsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZVZhbCA9ICRlbGUudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVsZVZhbCAmJiBlbGVWYWwubGVuZ3RoICYmIGVsZVZhbCAhPT0gJ1N0YXRlL3Byb3ZpbmNlJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnU3RhdGUvUHJvdmluY2VcXCcgZmllbGQgY2Fubm90IGJlIGJsYW5rLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYmV0d2VlbiBkZWZhdWx0IHNoaXBwaW5nIGFuZCB1cHMgc2hpcHBpbmcgcmF0ZXNcbiAgICAgKi9cbiAgICBiaW5kVVBTUmF0ZXMoKSB7XG4gICAgICAgIGNvbnN0IFVQU1JhdGVUb2dnbGUgPSAnLmVzdGltYXRvci1mb3JtLXRvZ2dsZVVQU1JhdGUnO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBVUFNSYXRlVG9nZ2xlLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtVXBzID0gJCgnLmVzdGltYXRvci1mb3JtLS11cHMnKTtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtRGVmYXVsdCA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tZGVmYXVsdCcpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkZXN0aW1hdG9yRm9ybVVwcy50b2dnbGVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1EZWZhdWx0LnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKSB7XG4gICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgIHN0YXRlQ291bnRyeSh0aGlzLiRzdGF0ZSwgdGhpcy5jb250ZXh0LCB7IHVzZUlkRm9yU3RhdGVzOiB0cnVlIH0sIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuZ2V0U3RhdHVzKHRoaXMuJHN0YXRlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnJlbW92ZSh0aGlzLiRzdGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkbGFzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZFN0YXRlVmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZmllbGQuYXR0cigncGxhY2Vob2xkZXInLCAnU3RhdGUvcHJvdmluY2UnKTtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXaGVuIHlvdSBjaGFuZ2UgYSBjb3VudHJ5LCB5b3Ugc3dhcCB0aGUgc3RhdGUvcHJvdmluY2UgYmV0d2VlbiBhbiBpbnB1dCBhbmQgYSBzZWxlY3QgZHJvcGRvd25cbiAgICAgICAgICAgIC8vIE5vdCBhbGwgY291bnRyaWVzIHJlcXVpcmUgdGhlIHByb3ZpbmNlIHRvIGJlIGZpbGxlZFxuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byByZW1vdmUgdGhpcyBjbGFzcyB3aGVuIHdlIHN3YXAgc2luY2Ugbm9kIHZhbGlkYXRpb24gZG9lc24ndCBjbGVhbnVwIGZvciB1c1xuICAgICAgICAgICAgJCh0aGlzLnNoaXBwaW5nRXN0aW1hdG9yKS5maW5kKCcuZm9ybS1maWVsZC0tc3VjY2VzcycpLnJlbW92ZUNsYXNzKCdmb3JtLWZpZWxkLS1zdWNjZXNzJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFc3RpbWF0b3JFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JDb250YWluZXIgPSAkKCcuc2hpcHBpbmctZXN0aW1hdG9yJyk7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtID0gJCgnLmVzdGltYXRvci1mb3JtJyk7XG5cbiAgICAgICAgJGVzdGltYXRvckZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBjb3VudHJ5X2lkOiAkKCdbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgc3RhdGVfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctc3RhdGVcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgY2l0eTogJCgnW25hbWU9XCJzaGlwcGluZy1jaXR5XCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgICAgIHppcF9jb2RlOiAkKCdbbmFtZT1cInNoaXBwaW5nLXppcFwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldFNoaXBwaW5nUXVvdGVzKHBhcmFtcywgJ2NhcnQvc2hpcHBpbmctcXVvdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuc2hpcHBpbmctcXVvdGVzJykuaHRtbChyZXNwb25zZS5jb250ZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIGJpbmQgdGhlIHNlbGVjdCBidXR0b25cbiAgICAgICAgICAgICAgICAkKCcuc2VsZWN0LXNoaXBwaW5nLXF1b3RlJykub24oJ2NsaWNrJywgY2xpY2tFdmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlSWQgPSAkKCcuc2hpcHBpbmctcXVvdGU6Y2hlY2tlZCcpLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrRXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkuY2FydC5zdWJtaXRTaGlwcGluZ1F1b3RlKHF1b3RlSWQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXNob3cnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhpZGUoKTtcbiAgICAgICAgICAgICRlc3RpbWF0b3JDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1oaWRlJykuc2hvdygpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1oaWRlJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJGVzdGltYXRvckNvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXNob3cnKS5zaG93KCk7XG4gICAgICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtaGlkZScpLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlcnQpIHtcbiAgICBpZiAodHlwZW9mIGNlcnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYW55IGN1c3RvbSBnaWZ0IGNlcnRpZmljYXRlIHZhbGlkYXRpb24gbG9naWMgaGVyZVxuICAgIHJldHVybiB0cnVlO1xufVxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwiJCIsImdpZnRDZXJ0Q2hlY2siLCJ1dGlscyIsIlNoaXBwaW5nRXN0aW1hdG9yIiwiZGVmYXVsdE1vZGFsIiwic3dhbCIsIkNhcnQiLCJfUGFnZU1hbmFnZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwicmVmcmVzaEVsZW1lbnRzIiwiJGNhcnRDb250ZW50IiwiJGNhcnRNZXNzYWdlcyIsIiRjYXJ0VG90YWxzIiwiJG92ZXJsYXkiLCJvblJlYWR5IiwiaGlkZSIsImJpbmRFdmVudHMiLCJ3aW5kb3ciLCJhcHBseUNvdXBvbkNvZGUiLCJiaW5kIiwiYWRkQ2FydERpc2NsYWltZXIiLCJkaXNwbGF5UHJvZHVjdEZ1bGxQcmljZSIsImdldFByb2R1Y3RQcmljZSIsInBpZCIsInNrdSIsIkVycm9yIiwicGFyc2VJbnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImdldCIsInJlcyIsImFtb3VudDEiLCJmaWx0ZXIiLCJhdHRyIiwiYW1vdW50MiIsIm51bWJlcldpdGhDb21tYXMiLCJ4IiwidG9TdHJpbmciLCJyZXBsYWNlIiwidGhhdCIsImVhY2giLCIkY2FydEl0ZW0iLCJkYXRhIiwicXVhbnRpdHkiLCJmaW5kIiwibGVuZ3RoIiwidGhlbiIsInByaWNlIiwiJHByaWNlRWxlbSIsIiR0b3RhbEVsZW0iLCJjdXJyZW50UHJpY2UiLCJ0ZXh0IiwiZnVsbFRvdGFsUHJpY2UiLCJOdW1iZXIiLCJ0b0ZpeGVkIiwiZnVsbFByaWNlIiwiaW5zZXJ0QmVmb3JlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCIkZnJhbWVzUHJvZHVjdHMiLCIkY2FydERpc2NsYWltZXJGcmFtZSIsInRvdGFsUXVhbnRpdHlGcmFtZXMiLCJzaG93IiwiJGZhYnJpY1BhbmVscyIsInRvdGFsUXVhbnRpdHlGYWJyaWMiLCIkY2FydERpc2NsYWltZXJGYWJyaWMiLCIkcG9seXpvcmJlUGFuZWxzIiwidG90YWxRdWFudGl0eVBvbHl6b3JiZSIsIiRjYXJ0RGlzY2xhaW1lclBvbHl6b3JiZSIsImNhcnRVcGRhdGUiLCIkdGFyZ2V0IiwiX3RoaXMiLCJpdGVtSWQiLCIkZWwiLCJvbGRRdHkiLCJ2YWwiLCJtYXhRdHkiLCJtaW5RdHkiLCJtaW5FcnJvciIsIm1heEVycm9yIiwibmV3UXR5IiwidHlwZSIsImFwaSIsImNhcnQiLCJpdGVtVXBkYXRlIiwiZXJyIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJyZW1vdmUiLCJyZWZyZXNoQ29udGVudCIsImVycm9ycyIsImpvaW4iLCJjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSIsInByZVZhbCIsIl90aGlzMiIsImludmFsaWRFbnRyeSIsImNhcnRSZW1vdmVJdGVtIiwiX3RoaXMzIiwiaXRlbVJlbW92ZSIsImNhcnRFZGl0T3B0aW9ucyIsIl90aGlzNCIsIm1vZGFsIiwib3B0aW9ucyIsInRlbXBsYXRlIiwib3BlbiIsInByb2R1Y3RBdHRyaWJ1dGVzIiwiY29uZmlndXJlSW5DYXJ0IiwidXBkYXRlQ29udGVudCIsImNvbnRlbnQiLCJiaW5kR2lmdFdyYXBwaW5nRm9ybSIsImhvb2tzIiwib24iLCJldmVudCIsIm9wdGlvbiIsIiRjaGFuZ2VkT3B0aW9uIiwiJGZvcm0iLCJwYXJlbnRzIiwiJHN1Ym1pdCIsIiRtZXNzYWdlQm94IiwiaXRlbSIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsInJlc3VsdCIsInB1cmNoYXNpbmdfbWVzc2FnZSIsInByb3AiLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCJfdGhpczUiLCIkY2FydEl0ZW1zUm93cyIsIiRjYXJ0UGFnZVRpdGxlIiwidG90YWxzIiwicGFnZVRpdGxlIiwic3RhdHVzTWVzc2FnZXMiLCJsb2NhdGlvbiIsInJlbG9hZCIsImdldENvbnRlbnQiLCJodG1sIiwicmVwbGFjZVdpdGgiLCJ0cmlnZ2VyIiwiYmluZENhcnRFdmVudHMiLCJfdGhpczYiLCJkZWJvdW5jZVRpbWVvdXQiLCJfYmluZCIsIl9kZWJvdW5jZSIsImN1cnJlbnRUYXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiY2hhbmdlIiwic3RyaW5nIiwic2hvd0NhbmNlbEJ1dHRvbiIsImJpbmRQcm9tb0NvZGVFdmVudHMiLCJfdGhpczciLCIkY291cG9uQ29udGFpbmVyIiwiJGNvdXBvbkZvcm0iLCIkY29kZUlucHV0IiwiY29kZSIsIl90aGlzOCIsImFwcGx5Q29kZSIsImJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMiLCJfdGhpczkiLCIkY2VydENvbnRhaW5lciIsIiRjZXJ0Rm9ybSIsIiRjZXJ0SW5wdXQiLCJ0b2dnbGUiLCJhcHBseUdpZnRDZXJ0aWZpY2F0ZSIsInJlc3AiLCJiaW5kR2lmdFdyYXBwaW5nRXZlbnRzIiwiX3RoaXMwIiwiZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMiLCIkc2VsZWN0IiwiaWQiLCJpbmRleCIsImFsbG93TWVzc2FnZSIsInRvZ2dsZVZpZXdzIiwiJHNpbmdsZUZvcm0iLCIkbXVsdGlGb3JtIiwic2hpcHBpbmdFc3RpbWF0b3IiLCJkZWZhdWx0Iiwic3RhdGVDb3VudHJ5Iiwibm9kIiwiVmFsaWRhdG9ycyIsIiRlbGVtZW50IiwiJHN0YXRlIiwiaW5pdEZvcm1WYWxpZGF0aW9uIiwiYmluZFN0YXRlQ291bnRyeUNoYW5nZSIsImJpbmRFc3RpbWF0b3JFdmVudHMiLCJzaGlwcGluZ1ZhbGlkYXRvciIsInN1Ym1pdCIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImJpbmRWYWxpZGF0aW9uIiwiYmluZFN0YXRlVmFsaWRhdGlvbiIsImJpbmRVUFNSYXRlcyIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsImNvdW50cnlJZCIsImlzTmFOIiwiZXJyb3JNZXNzYWdlIiwiJGVsZSIsImVsZVZhbCIsIlVQU1JhdGVUb2dnbGUiLCIkZXN0aW1hdG9yRm9ybVVwcyIsIiRlc3RpbWF0b3JGb3JtRGVmYXVsdCIsInRvZ2dsZUNsYXNzIiwiJGxhc3QiLCJjb250ZXh0IiwidXNlSWRGb3JTdGF0ZXMiLCJmaWVsZCIsIiRmaWVsZCIsImdldFN0YXR1cyIsImlzIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsInJlbW92ZUNsYXNzIiwiJGVzdGltYXRvckNvbnRhaW5lciIsIiRlc3RpbWF0b3JGb3JtIiwicGFyYW1zIiwiY291bnRyeV9pZCIsInN0YXRlX2lkIiwiY2l0eSIsInppcF9jb2RlIiwiZ2V0U2hpcHBpbmdRdW90ZXMiLCJjbGlja0V2ZW50IiwicXVvdGVJZCIsInN1Ym1pdFNoaXBwaW5nUXVvdGUiLCJhZGRDbGFzcyIsImNlcnQiXSwic291cmNlUm9vdCI6IiJ9