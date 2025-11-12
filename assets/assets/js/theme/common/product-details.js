import $ from 'jquery';
import utils from '@bigcommerce/stencil-utils';
import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.reveal';
import ImageGallery from '../product/image-gallery';
import modalFactory from '../global/modal';
import _ from 'lodash';
import swal from 'sweetalert2';
import Wishlist from '../wishlist';

export default class ProductDetails {
    constructor($scope, context, productAttributesData = {}) {
        this.$overlay = $('[data-cart-item-add] .loadingOverlay');
        this.$scope = $scope;
        this.context = context;
        this.imageGallery = new ImageGallery($('[data-image-gallery]', this.$scope));
        this.imageGallery.init();
        this.listenQuantityChange();
        this.initRadioAttributes();
        Wishlist.load(this.context);
        this.getTabRequests();
        this.isGenericCalculator = document.querySelector('.productView--generic-calculator');


        this.dimensionsWidth = document.querySelector('#dimensionsWidth');
        this.dimensionsHeight = document.querySelector('#dimensionsHeight');
        this.$dimensionsSize = $('.dimensionsRow__size');
        this.$dimensionsSelect = $("[id^=attribute_select_]:first");
        this.$dimensionsSelect2 = $("[id^=attribute_select_]").length > 1 ?
            $($("[id^=attribute_select_]")[1]) : null;
        this.$addDimensionsButton = $('.addDimensionsButton');
        this.$dimensionsRow = $('.dimensionsRow');
        this.$addtoCartButton = $('#form-action-addToCart');
        this.isDoor = $('.dimensions-form.door').length > 0 ? true : false;
        this.$dimensionsAddtoCart = $('.dimensions-form #form-action-addToCart');
        this.$productCartSuccessModal = $('#productCartSuccessModal');

        if (this.dimensionsWidth && this.dimensionsHeight) {
            if ( this.isDoor) {
                // select first option in dropdown
                $('.form-select').prop('selectedIndex', 1);
        
                this.setDoorDimensions(
                    this.dimensionsWidth,
                    this.dimensionsHeight,
                    this.$dimensionsSelect,
                    this.$dimensionsSelect2
                );
            } else {
                this.setDimensions(
                    this.dimensionsWidth,
                    this.dimensionsHeight,
                    this.$dimensionsSelect
                );
            }

            this.dimensionsWidth.addEventListener('input', (event) => {
                setTimeout(() => {
                    if ( this.isDoor) {
                        this.setDoorDimensions(
                            this.dimensionsWidth,
                            this.dimensionsHeight,
                            this.$dimensionsSelect,
                            this.$dimensionsSelect2
                        );
                    } else {
                        this.setDimensions(
                            this.dimensionsWidth,
                            this.dimensionsHeight,
                            this.$dimensionsSelect
                        );
                    }
                }, 500);
            });

            this.dimensionsHeight.addEventListener('input', (event) => {
                setTimeout(() => {
                    if ( this.isDoor) {
                        this.setDoorDimensions(
                            this.dimensionsWidth,
                            this.dimensionsHeight,
                            this.$dimensionsSelect,
                            this.$dimensionsSelect2
                        );
                    } else {
                        this.setDimensions(
                            this.dimensionsWidth,
                            this.dimensionsHeight,
                            this.$dimensionsSelect
                        );
                    }
                }, 500);
            });
        }

        if (this.$dimensionsAddtoCart.length > 0) {
            const $quoteBtn = $('#qn-add-to-quote');
            if ($quoteBtn.length > 0) {
                $quoteBtn.on('click', () => {
                    window.QN.add_product(null, false);
                });
            }
        }

        if (this.$productCartSuccessModal.length > 0) {
            this.$addtoCartButton.on('click', function(e) {
                e.preventDefault();
                const form = $(this).closest('form');
                $('#form-action-addToCart').val('Adding to Cart...');
                $.ajax({
                    url: '/cart.php',
                    type: 'GET',
                    data: form.serialize(), // serializes the form's elements.
                    success: function(response) {
                        $('#form-action-addToCart').val('Add to Cart');

                        const $successModal = $('#productCartSuccessModal');
                        if ($successModal) {
                            $successModal.foundation('reveal', 'open');
                        }
                        
                        const $disclaimer = $('.data-cart-disclaimer');
                        if ( $disclaimer.length > 0 ) {
                            const $minQuantityDiv = $('.data-cart-min-quantity');
                            let minQuantity = 0;
                            if ($minQuantityDiv.length > 0) {
                                minQuantity = $minQuantityDiv.data('quantity');
                            }
                            const $currentProductCount = $('.data-cart-current-product');
                            let totalQuantity = Number(document.getElementById('qty[]').value);
                            if ( $currentProductCount)  {
                                $currentProductCount.each(function() {
                                    totalQuantity = totalQuantity + $(this).data('quantity');
                                });
                            }

                            if ( totalQuantity >= minQuantity ) {
                                $disclaimer.hide();
                            }
                        }
                    },
                    error: function(xhr, status, error) {
                        $('#form-action-addToCart').val('Add to Cart');
                        // Handle errors if needed
                    }
                });
            });
        }

        if (this.context.bulkDiscountRates && this.isGenericCalculator) {
            this.bulkDiscountRates = this.context.bulkDiscountRates || [];
            this.productPrices = document.querySelectorAll('#productView-details [data-product-price-without-tax]');
            this.originalPrice = null;
            this.squareFootageId = Number(this.context.squareFootageId);
            this.flag = false;
            this.sizeOptions = null;
            this.getOptionSize();
        }

        const $form = $('form[data-cart-item-add]', $scope);
        const $productOptionsElement = $('[data-product-option-change]', $form);
        const hasOptions = $productOptionsElement.html().trim().length;
        const hasDefaultOptions = $productOptionsElement.find('[data-default]').length;

        $productOptionsElement.on('change', event => {
            this.productOptionsChanged(event);
        });

        // add class to buy now button so it can get
        // read during form on submit
        const $buyNowButton = $('#form-action-buyNow');
        $buyNowButton.on('touchend click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            $buyNowButton.addClass('clicked');

            const waitMessage = $buyNowButton.data('waitMessage');
            $buyNowButton
                .val(waitMessage)
                .prop('disabled', true);
            
            $form.trigger('submit');
        });

        if (this.$productCartSuccessModal.length <= 0) {
            $form.on('submit', event => {
                // const quoteCutoff = Number(this.context.quoteCutoff);
                // const qtyInput = document.querySelector('#numberOfPanels');

                // send buy now button to cart
                if ($('#form-action-buyNow.clicked').length > 0) {
                    $buyNowButton.removeClass('clicked');

                    const waitMessage = $buyNowButton.data('waitMessage');
                    $buyNowButton
                        .val(waitMessage)
                        .prop('disabled', true);
                } else {
                    this.addProductToCart(event, $form[0]);
                }

                // if (!Number.isNaN(quoteCutoff) && (!qtyInput || qtyInput.value < quoteCutoff || !window.QN || !window.QN.add_product)) {
                //    this.addProductToCart(event, $form[0]);
                // }
            });
        }

        // Update product attributes. Also update the initial view in case items are oos
        // or have default variant properties that change the view
        if ((_.isEmpty(productAttributesData) || hasDefaultOptions) && hasOptions) {
            const $productId = $('[name="product_id"]', $form).val();

            utils.api.productAttributes.optionChange($productId, $form.serialize(), 'products/bulk-discount-rates', (err, response) => {
                const attributesData = response.data || {};
                const attributesContent = response.content || {};
                this.updateProductAttributes(attributesData);
                if (hasDefaultOptions) {
                    this.updateView(attributesData, attributesContent);
                } else {
                    this.updateDefaultAttributesForOOS(attributesData);
                }
            });
        } else {
            this.updateProductAttributes(productAttributesData);
        }

        $productOptionsElement.show();

        this.previewModal = modalFactory('#previewModal')[0];

        if ($(window).width() <= 600) {
            window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(timeOutFn){return setTimeout(timeOutFn, 1000 / 60);};
            window['secondskinaudio4076'] = () => {
                if(
                    document.querySelectorAll('div#previewModal').length > 0 &&
                    !document.getElementsByClassName('secondskinaudio4076').length
                ) {
                    console.log($(window).width() <= 600);
                    console.log('why is this triggered');
                    document.querySelector('body').classList.add('secondskinaudio4076');
                    document.querySelector('ul.breadcrumbs').parentNode.classList.add('breadcrumbWrap');
                    
                    document.querySelector('.productView .buy-buttons #form-action-addToCart').addEventListener('click', function(){
                            var addCrtPopup = setInterval(function() {
                            if(document.querySelectorAll('body > #previewModal').length > 0) {
                                clearInterval(addCrtPopup);
                                if(document.querySelectorAll('.productView--quickView+#previewModal').length > 0){
                                        document.querySelector('.productView--quickView+#previewModal').remove(); 
                                }
                                    document.querySelector('.modal-background').style.display = 'none';
                                    var cartPopup = document.querySelector('#previewModal');
                                    document.querySelector('.body').prepend(cartPopup);
                            
                                    if(document.querySelectorAll('div#previewModal > ul.productGrid').length == 0){
                                        var tabRelated = document.querySelector('#tab-related').innerHTML
                                        document.querySelector('#previewModal').insertAdjacentHTML('beforeend', tabRelated);
                                    }
                                    setTimeout(function(){ window.scrollTo(0, 0); }, 300);
                                }
                            },20);
                    });
                
                } else if(!document.getElementsByClassName('secondskinaudio4076').length) {
                    window.requestAnimationFrame(secondskinaudio4076);
                }
            };
            console.log('tirggered');
            window.secondskinaudio4076();
        }
    }

    hasWarning() {
        // keep button disabled if warning shown
        if ( $('.dimensionsRow__size .warning').is(':visible') ) {
            return true;
        }

        return false;
    }
    
    round6(x) {
        if (x < 13) {
            return 12;
        }
        return Math.ceil(x / 6) * 6;
    }
    
    round2(x) {
        if (x < 24) {
            return 24;
        }
        return Math.ceil(x / 2) * 2;
    }

    setDimensions(width, height, $select) {
        if ($select.length < 1) return;

        if (!(width.value > 0) || !(height.value > 0)) {
            this.$dimensionsAddtoCart.attr('disabled', true);
            return;
        }
    
        const oldVal = $select.val();
        let dimensionsFound = false;

        const roundedWidth = this.round6(width.value);
        const roundedHeight = this.round6(height.value);
        const roundedDimensionsA =
            roundedWidth + 'in x ' + roundedHeight + 'in';
        const roundedDimensionsB =
            roundedHeight + 'in x ' + roundedWidth + 'in';

        for (let i = 0; i < $select.find('option').length; i++) {
            let option = $select.find('option')[i];
            if (option.text == roundedDimensionsA ||
                option.text == roundedDimensionsB) {
                option.selected = true;
        
                if (oldVal != $select.val()) {
                    $select.trigger('change');
                }
                dimensionsFound = true;
                break;
            }
        }

        if ( dimensionsFound ) {
            this.$dimensionsSize.find('.warning').removeClass('show');
            this.$dimensionsAddtoCart.attr('disabled', false);
        } else {
            this.$dimensionsSize.find('.warning').addClass('show');
            this.$dimensionsAddtoCart.attr('disabled', true);
        }
    }

    setDoorDimensions(width, height, $bottomSelect, $panelSelect) {
        if ($bottomSelect.length < 1 && $panelSelect.length < 1)
            return;

        if (!(width.value > 0) || !(height.value > 0)) {
            this.$dimensionsAddtoCart.attr('disabled', true);
            return;
        }
    
        const oldValBottom = $bottomSelect.val();
        const oldValPanel = $panelSelect.val();

        const roundedWidth = this.round2(width.value);
        const heightVal = height.value;

        if ( roundedWidth > 48) {
            this.$dimensionsSize.find('.warning.wide').addClass('show');
            this.$dimensionsAddtoCart.attr('disabled', true);
        } else {
            this.$dimensionsSize.find('.warning.wide').removeClass('show');
            this.$dimensionsAddtoCart.attr('disabled', false);
        }
        for (let i = 0; i < $bottomSelect.find('option').length; i++) {
            let option = $bottomSelect.find('option')[i];
            if (option.text == `${roundedWidth}"`) {
                option.selected = true;
        
                if (oldValBottom != $bottomSelect.val()) {
                    $bottomSelect.trigger('change');
                }
                break;
            }
        }

        let newPanelVal = '';
        if ( roundedWidth <= 36 && heightVal <= 84 ) {
            newPanelVal = 1024;
        } else if (
            36 <= roundedWidth <= 48 
            && heightVal <= 84 ) {
            newPanelVal = 1025;
        } else if (
            roundedWidth <= 36 && heightVal <= 96 ) {
            newPanelVal = 1026;
        } else if (
            36 <= roundedWidth <= 48
            && heightVal <= 96 ) {
            newPanelVal = 1027;
        } else if (
            roundedWidth <= 36
            && heightVal > 96 ) {
            newPanelVal = 1028;
        } else if (
            36 <= roundedWidth <= 48
            && heightVal > 96 ) {
            newPanelVal = 1029;
        }
        
        if (oldValPanel != newPanelVal) {
            $panelSelect.val(newPanelVal).change();
        }
    }

    /**
     * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
     * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
     * @param formData: FormData object
     * @returns FormData object
     */
    filterEmptyFilesFromForm(formData) {
        try {
            for (const [key, val] of formData) {
                if (val instanceof File && !val.name && !val.size) {
                    formData.delete(key);
                }
            }
        } catch (e) {
            console.error(e); // eslint-disable-line no-console
        }
        return formData;
    }

    /**
     * Since $productView can be dynamically inserted using render_with,
     * We have to retrieve the respective elements
     *
     * @param $scope
     */
    getViewModel($scope) {
        return {
            $priceWithTax: $('[data-product-price-with-tax]', $scope),
            $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
            rrpWithTax: {
                $div: $('.rrp-price--withTax', $scope),
                $span: $('[data-product-rrp-with-tax]', $scope),
            },
            rrpWithoutTax: {
                $div: $('.rrp-price--withoutTax', $scope),
                $span: $('[data-product-rrp-price-without-tax]', $scope),
            },
            nonSaleWithTax: {
                $div: $('.non-sale-price--withTax', $scope),
                $span: $('[data-product-non-sale-price-with-tax]', $scope),
            },
            nonSaleWithoutTax: {
                $div: $('.non-sale-price--withoutTax', $scope),
                $span: $('[data-product-non-sale-price-without-tax]', $scope),
            },
            priceSaved: {
                $div: $('.price-section--saving', $scope),
                $span: $('[data-product-price-saved]', $scope),
            },
            priceNowLabel: {
                $span: $('.price-now-label', $scope),
            },
            priceLabel: {
                $span: $('.price-label', $scope),
            },
            $weight: $('.productView-info [data-product-weight]'),
            $increments: $('.form-field--increments :input', $scope),
            $addToCart: $('#form-action-addToCart', $scope),
            $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
            stock: {
                $container: $('.form-field--stock', $scope),
                $input: $('[data-product-stock]', $scope),
            },
            $sku: $('[data-product-sku]'),
            $upc: $('[data-product-upc]'),
            quantity: {
                $text: $('.incrementTotal', $scope),
                $input: $('[name=qty\\[\\]]', $scope),
            },
            $bulkPricing: $('.productView-info-bulkPricing', $scope),
        };
    }

    /**
     * Checks if the current window is being run inside an iframe
     * @returns {boolean}
     */
    isRunningInIframe() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }

    /**
     *
     * Handle product options changes
     *
     */
    productOptionsChanged(event) {
        const $changedOption = $(event.target);
        const $form = $changedOption.parents('form');
        const productId = $('[name="product_id"]', $form).val();

        // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
        if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
            return;
        }

        if (this.context.bulkDiscountRates && this.isGenericCalculator) {
            const optionId = $changedOption.attr('name').replace(/\D/g, '');
            const optionValue = $changedOption.val();

            if (Number(optionId) === this.squareFootageId) {
                this.handleOptionName(optionValue);
            }
        }

        if (window.onProductOptionsChange) {
            window.onProductOptionsChange($form.serializeArray());
        }

        utils.api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', (err, response) => {
            const productAttributesData = response.data || {};
            const productAttributesContent = response.content || {};
            this.updateProductAttributes(productAttributesData);
            this.updateView(productAttributesData, productAttributesContent);
        });
    }

    getOptionSize() {
        if (!this.context.productOptions) return;

        const productOptions = this.context.productOptions;
        const sizeOption = productOptions.find((option) => option.id === Number(this.squareFootageId));

        if (!sizeOption) return;

        const defaultOption = sizeOption.values.find((option) => option.selected);

        if (!defaultOption) return;

        const sqftValue = {};

        sizeOption.values.forEach((option) => {
            sqftValue[option.id] = this.context.customFields.find((field) =>
                field.name.includes(`square_footage[${option.id}]`));
        });

        this.sizeOptions = sqftValue;
    }

    handleOptionName(optionValue) {
        const squareFootage = document.querySelector('.SquareFootage');
        const coversSF = document.querySelector('.coversSF');
        const saveDiscount = document.querySelector('.saveDiscount');

        if (this.sizeOptions[optionValue] && this.sizeOptions[optionValue].value === 'quote') {
            this.resetPrice();
            this.hideElements([squareFootage, coversSF, saveDiscount]);
            this.flag = true;
            this.injectQuoteBtn();
        } else {
            this.flag = false;
            this.showElements([squareFootage, coversSF]);
            this.handleQuoteBtnVisibility('original');
        }
    }

    hideElements(elements) {
        elements.forEach(element => {
            if (element) {
                element.style.display = 'none';
            }
        });
    }

    showElements(elements) {
        elements.forEach(element => {
            if (element) {
                element.style.display = 'inline-block';
            }
        });
    }

    handleQuoteBtnVisibility(display) {
        const btnOriginal = document.querySelector('.buy-buttons--original');
        const btnQuote = document.querySelector('.buy-buttons--quote');
        const requestQuoteBtn = document.querySelector('.btn--request-quote');

        if (display === 'original') {
            if (btnOriginal) btnOriginal.style.display = 'block';
            if (btnQuote) btnQuote.style.display = 'none';
            if (requestQuoteBtn) requestQuoteBtn.style.display = 'none';

            return;
        }

        if (display === 'quote') {
            if (btnOriginal) btnOriginal.style.display = 'none';
            if (btnQuote) btnQuote.style.display = 'block';
            if (requestQuoteBtn) requestQuoteBtn.style.display = 'block';

            return;
        }

        if (display === 'request-quote') {
            if (btnOriginal) btnOriginal.style.display = 'none';
            if (btnQuote) btnQuote.style.display = 'none';
            if (requestQuoteBtn) requestQuoteBtn.style.display = 'none';
        }
    }

    injectQuoteBtn() {
        this.handleQuoteBtnVisibility('request-quote');

        const requestQuoteBtnEl = document.querySelector('.btn--request-quote');

        if (requestQuoteBtnEl) {
            requestQuoteBtnEl.remove();
        }

        const requestQuoteBtn = document.createElement('button');
        requestQuoteBtn.classList.add('btn-new', 'btn-new--primary', 'btn-new--big', 'btn--request-quote');
        requestQuoteBtn.innerHTML = 'Request a Free Quote';
        requestQuoteBtn.onclick = () => {
            window.QN.add_product(null, false);
        };

        const form = document.querySelector('form[data-cart-item-add]');

        if (!form) return;

        form.parentNode.appendChild(requestQuoteBtn);
    }

    showProductImage(image) {
        if (_.isPlainObject(image)) {
            const zoomImageUrl = utils.tools.image.getSrc(
                image.data,
                this.context.themeSettings.zoom_size,
            );

            const mainImageUrl = utils.tools.image.getSrc(
                image.data,
                this.context.themeSettings.product_size,
            );

            this.imageGallery.setAlternateImage({
                mainImageUrl,
                zoomImageUrl,
            });
        } else {
            this.imageGallery.restoreImage();
        }
    }

    /**
     *
     * Handle action when the shopper clicks on + / - for quantity
     *
     */
    listenQuantityChange() {
        this.$scope.on('click', '[data-quantity-change] button', event => {
            event.preventDefault();
            const $target = $(event.currentTarget);
            const viewModel = this.getViewModel(this.$scope);
            const $input = viewModel.quantity.$input;
            const quantityMin = parseInt($input.data('quantityMin'), 10);
            const quantityMax = parseInt($input.data('quantityMax'), 10);

            let qty = parseInt($input.val(), 10);

            // If action is incrementing
            if ($target.data('action') === 'inc') {
                // If quantity max option is set
                if (quantityMax > 0) {
                    // Check quantity does not exceed max
                    if ((qty + 1) <= quantityMax) {
                        qty++;
                    }
                } else {
                    qty++;
                }
            } else if (qty > 1) {
                // If quantity min option is set
                if (quantityMin > 0) {
                    // Check quantity does not fall below min
                    if ((qty - 1) >= quantityMin) {
                        qty--;
                    }
                } else {
                    qty--;
                }
            }

            // update hidden input
            viewModel.quantity.$input.val(qty);
            // update text
            viewModel.quantity.$text.text(qty);
        });
    }

    /**
     *
     * Add a product to cart
     *
     */
    addProductToCart(event, form) {
        const $addToCartBtn = $('#form-action-addToCart', $(event.target));
        const originalBtnVal = $addToCartBtn.val();
        const waitMessage = $addToCartBtn.data('waitMessage');
        
        // Do not do AJAX if browser doesn't support FormData
        if (window.FormData === undefined) {
            return;
        }

        // Prevent default
        event.preventDefault();

        $addToCartBtn
            .val(waitMessage)
            .prop('disabled', true);

        this.$overlay.show();

        // Add item to cart
        utils.api.cart.itemAdd(this.filterEmptyFilesFromForm(new FormData(form)), (err, response) => {
            const errorMessage = err || response.data.error;

            $addToCartBtn
                .val(originalBtnVal)
                .prop('disabled', false);

            this.$overlay.hide();

            // Guard statement
            if (errorMessage) {
                // Strip the HTML from the error message
                const tmp = document.createElement('DIV');
                tmp.innerHTML = errorMessage;

                return swal({
                    text: tmp.textContent || tmp.innerText,
                    type: 'error',
                });
            }

            // Open preview modal and update content
            if (typeof window.theme_settings !== 'undefined' && window.theme_settings.show_fast_cart) {
                if (this.previewModal) {
                    this.previewModal.open();

                    this.updateCartContent(this.previewModal, response.data.cart_item.hash);
                } else {
                    this.$overlay.show();

                    // if no modal, redirect to the cart page
                    this.redirectTo(response.data.cart_item.cart_url || this.context.urls.cart);
                }
            } else {
                this.redirectTo(response.data.cart_item.cart_url || this.context.urls.cart);
            }
        });
    }

    /**
     * Get cart contents
     *
     * @param {String} cartItemHash
     * @param {Function} onComplete
     */
    getCartContent(cartItemHash, onComplete) {
        const options = {
            template: 'cart/preview',
            params: {
                suggest: cartItemHash,
            },
            config: {
                cart: {
                    suggestions: {
                        limit: 4,
                    },
                },
            },
        };

        utils.api.cart.getContent(options, onComplete);
    }

    /**
     * Redirect to url
     *
     * @param {String} url
     */
    redirectTo(url) {
        if (this.isRunningInIframe() && !window.iframeSdk) {
            window.top.location = url;
        } else {
            window.location = url;
        }
    }

    /**
     * Update cart content
     *
     * @param {Modal} modal
     * @param {String} cartItemHash
     * @param {Function} onComplete
     */
    updateCartContent(modal, cartItemHash, onComplete) {
        this.getCartContent(cartItemHash, (err, response) => {
            if (err) {
                return;
            }

            modal.updateContent(response);

            // Update cart counter
            const $body = $('body');
            const $cartQuantity = $('[data-cart-quantity]', modal.$content);
            const $cartCounter = $('.navUser-action .cart-count');
            const quantity = $cartQuantity.data('cartQuantity') || 0;

            $cartCounter.addClass('cart-count--positive');
            $body.trigger('cart-quantity-update', quantity);

            if (onComplete) {
                onComplete(response);
            }
        });
    }

    /**
     * Show an message box if a message is passed
     * Hide the box if the message is empty
     * @param  {String} message
     */
    showMessageBox(message) {
        const $messageBox = $('.productAttributes-message');
        const $buyNowBtn = document.querySelector('#form-action-buyNow');
        const $buyNowBtnBolt = document.querySelector('#product-page-checkout-wrapper');

        if (message) {
            // disabling the buy now button
            if ($buyNowBtn) $buyNowBtn.disabled = true;
            if ($buyNowBtnBolt) $buyNowBtnBolt.classList.add('hide');

            // showing error message
            $('.alertBox-message', $messageBox).text(message);
            $messageBox.show();
        } else {
            $messageBox.hide();

            // enabling the button when the product is available
            if ($buyNowBtn) $buyNowBtn.disabled = false;
            if ($buyNowBtnBolt) $buyNowBtnBolt.disabled = false;
        }
    }

    /**
     * Hide the pricing elements that will show up only when the price exists in API
     * @param viewModel
     */
    clearPricingNotFound(viewModel) {
        viewModel.rrpWithTax.$div.hide();
        viewModel.rrpWithoutTax.$div.hide();
        viewModel.nonSaleWithTax.$div.hide();
        viewModel.nonSaleWithoutTax.$div.hide();
        viewModel.priceSaved.$div.hide();
        viewModel.priceNowLabel.$span.hide();
        viewModel.priceLabel.$span.hide();
    }

    /**
     * Update the view of price, messages, SKU and stock options when a product option changes
     * @param  {Object} data Product attribute data
     */
    updatePriceView(viewModel, price, bulkDiscountRates) {
        this.clearPricingNotFound(viewModel);

        if (price.with_tax) {
            viewModel.priceLabel.$span.show();
            viewModel.$priceWithTax.html(price.with_tax.formatted);
        }

        if (price.without_tax) {
            viewModel.priceLabel.$span.show();

            const selectors = ['.productView--price-table', '.productView--timberwool', '.productView--celluzorbe-v3'];
            const condition = selectors.some(selector => document.querySelector(selector));

            if (condition) {
                viewModel.$priceWithoutTax.html(price.without_tax.value);
            } else {
                viewModel.$priceWithoutTax.html(price.without_tax.formatted);
                this.originalPrice = price.without_tax.value;
                if (!this.flag && this.isGenericCalculator) {
                    this.updatePriceBulkDiscount(price.without_tax.value, bulkDiscountRates);
                }
            }
        }

        if (price.rrp_with_tax) {
            viewModel.rrpWithTax.$div.show();
            viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
        }

        if (price.rrp_without_tax) {
            viewModel.rrpWithoutTax.$div.show();
            viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
        }

        if (price.saved) {
            viewModel.priceSaved.$div.show();
            viewModel.priceSaved.$span.html(price.saved.formatted);
        }

        if (price.non_sale_price_with_tax) {
            viewModel.priceLabel.$span.hide();
            viewModel.nonSaleWithTax.$div.show();
            viewModel.priceNowLabel.$span.show();
            viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
        }

        if (price.non_sale_price_without_tax) {
            viewModel.priceLabel.$span.hide();
            viewModel.nonSaleWithoutTax.$div.show();
            viewModel.priceNowLabel.$span.show();
            viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
        }
    }

    updatePriceBulkDiscount(price, bulkDiscountRates) {
        const quantity = document.getElementById('numberOfPanels');
        const quantityValue = Number(quantity.value);
        let check = false;
        let discontValue = 0;

        for (let i = 0; i < bulkDiscountRates.length; i++) {
            const discount = bulkDiscountRates[i];

            if (discount.min <= quantityValue && quantityValue <= (discount.max || quantityValue + 1)) {
                check = true;
                discontValue = discount.discount.value;

                break;
            }
        }

        if (!check) {
            this.productPrices.forEach((productPrice) => {
                productPrice.textContent = `$${(price).toFixed(2)}`;
            });

            return;
        }

        const priceAfter = this.calculatePrice(Number(price), discontValue).toFixed(2);
        const priceBefore = price.toFixed(2);

        this.productPrices.forEach((productPrice) => {
            productPrice.innerHTML = `
                <span class="ysw-js-price">
                    <span class="ysw-js-price__before">
                        $${priceBefore}
                    </span>
                    <span class="ysw-js-price__now">
                        $${priceAfter}
                    </span>
                </span>`;
        });
    }

    calculatePrice(price, discount) {
        return Math.round((price - (price * discount / 100)) * 100) / 100;
    }

    resetPrice() {
        if (!this.originalPrice) return;

        this.productPrices.forEach((productPrice) => {
            productPrice.textContent = `$${this.originalPrice.toFixed(2)}`;
        });
    }

    /**
     * Update the view of price, messages, SKU and stock options when a product option changes
     * @param  {Object} data Product attribute data
     */
    updateView(data, content = null) {
        const viewModel = this.getViewModel(this.$scope);

        this.showMessageBox(data.stock_message || data.purchasing_message);

        if (_.isObject(data.price)) {
            this.updatePriceView(viewModel, data.price, data.bulk_discount_rates);
        }

        if (_.isObject(data.weight)) {
            viewModel.$weight.html(data.weight.formatted);
        }

        // Set variation_id if it exists for adding to wishlist
        if (data.variantId) {
            viewModel.$wishlistVariation.val(data.variantId);
        }

        // If SKU is available
        if (data.sku) {
            viewModel.$sku.text(data.sku);
        }

        // If UPC is available
        if (data.upc) {
            viewModel.$upc.text(data.upc);
        }

        // if stock view is on (CP settings)
        if (viewModel.stock.$container.length && _.isNumber(data.stock)) {
            // if the stock container is hidden, show
            viewModel.stock.$container.removeClass('u-hiddenVisually');

            viewModel.stock.$input.text(data.stock);
        } else {
            viewModel.stock.$container.addClass('u-hiddenVisually');
            viewModel.stock.$input.text(data.stock);
        }

        this.updateDefaultAttributesForOOS(data);

        // If Bulk Pricing rendered HTML is available
        if (data.bulk_discount_rates && content) {
            viewModel.$bulkPricing.html(content);
        } else if (typeof (data.bulk_discount_rates) !== 'undefined') {
            viewModel.$bulkPricing.html('');
        }
    
        if (this.hasWarning()) {
            this.$addtoCartButton.attr('disabled', true);
        }


        if (this.$dimensionsAddtoCart.length > 0) {
            if (!(this.dimensionsWidth.value > 0) || !(this.dimensionsHeight.value > 0)) {
                this.$dimensionsAddtoCart.attr('disabled', true);
            }
        }
    }

    updateDefaultAttributesForOOS(data) {
        const viewModel = this.getViewModel(this.$scope);
        if (!data.purchasable || !data.instock) {
            viewModel.$addToCart.prop('disabled', true);
            viewModel.$increments.prop('disabled', true);
        } else {
            viewModel.$addToCart.prop('disabled', false);
            viewModel.$increments.prop('disabled', false);
        }
    }

    /**
     * Hide or mark as unavailable out of stock attributes if enabled
     * @param  {Object} data Product attribute data
     */
    updateProductAttributes(data) {
        const behavior = data.out_of_stock_behavior;
        const inStockIds = data.in_stock_attributes;
        const outOfStockMessage = ` (${data.out_of_stock_message})`;

        this.showProductImage(data.image);

        if (behavior !== 'hide_option' && behavior !== 'label_option') {
            return;
        }

        $('[data-product-attribute-value]', this.$scope).each((i, attribute) => {
            const $attribute = $(attribute);
            const attrId = parseInt($attribute.data('productAttributeValue'), 10);


            if (inStockIds.indexOf(attrId) !== -1) {
                this.enableAttribute($attribute, behavior, outOfStockMessage);
            } else {
                this.disableAttribute($attribute, behavior, outOfStockMessage);
            }
        });
    }

    disableAttribute($attribute, behavior, outOfStockMessage) {
        if (this.getAttributeType($attribute) === 'set-select') {
            return this.disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
        }

        if (behavior === 'hide_option') {
            $attribute.hide();
        } else {
            $attribute.addClass('unavailable');
        }
    }

    disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
        const $select = $attribute.parent();

        if (behavior === 'hide_option') {
            $attribute.toggleOption(false);
            // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
            if ($select.val() === $attribute.attr('value')) {
                $select[0].selectedIndex = 0;
            }
        } else {
            $attribute.attr('disabled', 'disabled');
            $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
        }
    }

    enableAttribute($attribute, behavior, outOfStockMessage) {
        if (this.getAttributeType($attribute) === 'set-select') {
            return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
        }

        if (behavior === 'hide_option') {
            $attribute.show();
        } else {
            $attribute.removeClass('unavailable');
        }
    }

    enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
        if (behavior === 'hide_option') {
            $attribute.toggleOption(true);
        } else {
            $attribute.prop('disabled', false);
            $attribute.html($attribute.html().replace(outOfStockMessage, ''));
        }
    }

    getAttributeType($attribute) {
        const $parent = $attribute.closest('[data-product-attribute]');

        return $parent ? $parent.data('productAttribute') : null;
    }

    /**
     * Allow radio buttons to get deselected
     */
    initRadioAttributes() {
        $('[data-product-attribute] input[type="radio"]', this.$scope).each((i, radio) => {
            const $radio = $(radio);

            // Only bind to click once
            if ($radio.attr('data-state') !== undefined) {
                $radio.on('click', () => {
                    if ($radio.data('state') === true) {
                        $radio.prop('checked', false);
                        $radio.data('state', false);

                        $radio.trigger('change');
                    } else {
                        $radio.data('state', true);
                    }

                    this.initRadioAttributes();
                });
            }

            $radio.attr('data-state', $radio.prop('checked'));
        });
    }

    /**
     * Check for fragment identifier in URL requesting a specific tab
     */
    getTabRequests() {
        if (window.location.hash && window.location.hash.indexOf('#tab-') === 0) {
            const $activeTab = $('.tabs').has(`[href='${window.location.hash}']`);
            const $tabContent = $(`${window.location.hash}`);

            if ($activeTab.length > 0) {
                $activeTab.find('.tab')
                    .removeClass('is-active')
                    .has(`[href='${window.location.hash}']`)
                    .addClass('is-active');

                $tabContent.addClass('is-active')
                    .siblings()
                    .removeClass('is-active');
            }
        }
    }
}
