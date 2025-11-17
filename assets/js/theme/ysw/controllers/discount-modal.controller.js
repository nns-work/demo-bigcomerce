import utils from '@bigcommerce/stencil-utils';
import { defaultModal } from '../../global/modal';
import Cart from '../../cart';
import { detectIncognito } from 'detectincognitojs';

class YswDiscountModal {
    constructor(context) {
        this.context = context;
        this.discountContent = null;
        this.discountDelay = this.context.ysw_modal_discount_delay;
        this.discountValue = this.context.ysw_modal_discount_value;
        this.discountCode = this.context.ysw_modal_discount_code;
        this.$cartContent = $('[data-cart-content]');
        this.$cartMessages = $('[data-cart-status]');
        this.$cartTotals = $('[data-cart-totals]');
        this.$overlay = $('[data-cart] .loadingOverlay');
        this.isIncognito = false;
        this.init();
    }

    async init() {
        const incognito = await detectIncognito();
        this.isIncognito = incognito.isPrivate;

        if (this.getStorage()) return;

        const cartId = this.context.cartId;
        const url = window.location.href;

        this.discountContent = document.getElementById('discount-modal');

        // If the client comes from quote URL, don't show this popup.

        const isQuote = localStorage.getItem('qn_quote_id');
        if (url.includes('quoteId=') || isQuote) {
            console.log("url.includes('quoteId='): " + url.includes('quoteId='));
            console.log("isQuote: " + isQuote);
            this.setStorage();
            return;
        }

        if (!this.discountContent) return;

        if (!cartId) return;

        setTimeout(() => {
            this.openModal();
        }, Number(this.discountDelay) * 1000);
    }

    calcDiscount() {
        const discountTotal = document.querySelector('[data-ysw-discount-total]');
        const cartTotal = document.querySelector('.cart-total .cart-total-value span');
        const discountAmount = this.discountValue;

        if (!cartTotal || !discountAmount) return;

        const total = parseFloat(cartTotal.textContent.replace(/[$,]/g, ''));
        const discountValue = total * (this.discountValue / 100);
        const newTotal = discountValue;

        discountTotal.textContent = `${newTotal.toFixed(2)}`;
    }
    
    getProductPrice(pid, sku) {
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
        return new Promise(function(resolve, reject) {
            // Make an Ajax GET request to the product page:
            $.get('/products.php?productId=' + pid + '&sku=' + sku,
                function(res) {
                    // If request successful:
                    if (res) {
                        // The content for the product page is loaded in 'res'. 
                        // if product is bulk discount
                        const amount1 = $(res).filter('meta[itemprop="price"]').attr('content');
                        const amount2 = amount1 ? amount1 :
                            $(res).filter('meta[property="product:price:amount"]').attr('content');
                        resolve(amount2);
                    // Else request failed:
                    } else {
                        reject(false);
                    }
                }
            );
        });
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    displayProductFullPrice() {
        const that = this;
        $('.cart-item[data-product-id]').each(function() {
            const $cartItem = $(this);
            const pid = $cartItem.data('product-id');
            const sku = $cartItem.data('product-sku');
            const quantity = $cartItem.data('quantity');

            // if price not already discounted
            if ($cartItem.find('.price--discounted').length == 0) {
                that.getProductPrice(pid, sku).then(function(price) {
                    if (price) {
                        const $priceElem = $cartItem.find('.cart-item-value:first');
                        const $totalElem = $cartItem.find('.cart-item-value:last');
                        const currentPrice = $priceElem.text();
                        const fullTotalPrice = '$' + that.numberWithCommas(Number(price * quantity).toFixed(2));
                        const fullPrice = '$' + that.numberWithCommas(Number(price).toFixed(2));
                        if ( currentPrice != fullPrice) {
                            $('<strong class="cart-item-value price--discounted price--full-bulk">' +
                                fullPrice + '</strong>')
                                .insertBefore($priceElem);
                            $('<strong class="cart-item-value price--discounted price--full-bulk">' +
                                fullTotalPrice + '</strong>')
                                .insertBefore($totalElem);
                        }
                    }
                }).catch(function(e) {
                    console.log('Error getting product price - ', e);
                });
            }
        });
    }

    openModal() {
        const modal = defaultModal();
        const modalContent = this.discountContent.innerHTML;

        /**
         * Re-validate if cart is empty to not show the discount modal.
         */
        const _this = this;

        const showModal = (err, res) => {
            const data = res[0] || res;

            if (Object.keys(data).length === 0) return;
            if (data.cartAmount === 0 || data.coupons.length > 0) return;

            modal.open({ addClass: 'ysw-c-discount-modal' });
            modal.updateContent(modalContent);

            this.calcDiscount();
            this.setStorage();

            const button = document.querySelector('.ysw-c-discount-modal__button');

            if (!button) return;

            button.addEventListener('click', (event) => {
                event.preventDefault();

                const code = _this.discountCode;

                if (!code) return;

                _this.applyCouponCode(code);
                modal.close();
            });
        };

        /**
         * Show the modal after fetch the cart data.
         */
        utils.api.cart.getCart({}, showModal);
    }

    applyCouponCode(code) {
        utils.api.cart.applyCode(code, (err, response) => {
            if (response.data.status !== 'success') return;

            this.refreshContent();
        });
    }

    refreshContent(remove) {
        const $cartItemsRows = $('[data-item-row]', this.$cartContent);
        const $cartPageTitle = $('[data-cart-page-title]');
        const options = {
            template: {
                content: 'cart/content',
                totals: 'cart/totals',
                pageTitle: 'cart/page-title',
                statusMessages: 'cart/status-messages',
            },
        };

        this.$overlay.show();

        // Remove last item from cart? Reload
        if (remove && $cartItemsRows.length === 1) {
            return window.location.reload();
        }

        utils.api.cart.getContent(options, (err, response) => {
            this.$cartContent.html(response.content);
            this.$cartTotals.html(response.totals);
            this.$cartMessages.html(response.statusMessages);

            $cartPageTitle.replaceWith(response.pageTitle);
            const cart = new Cart();
            cart.bindEvents();

            this.$overlay.hide();

            const quantity = $('[data-cart-quantity]', this.$cartContent).data('cartQuantity') || 0;

            $('body').trigger('cart-quantity-update', quantity);
        
            this.displayProductFullPrice();
        });
    }

    setStorage() {
        if (this.isIncognito) {
            localStorage.setItem('yswDiscountModal', 'true');
            return;
        }

        sessionStorage.setItem('yswDiscountModal', 'true');
        localStorage.removeItem('yswDiscountModal');
    }

    getStorage() {
        return this.isIncognito ? localStorage.getItem('yswDiscountModal')
            : sessionStorage.getItem('yswDiscountModal');
    }
}

export default function YswDiscountModalFactory(context) {
    if (this instanceof YswDiscountModal) {
        this.context = context;
    } else {
        return new YswDiscountModal(context);
    }
}
