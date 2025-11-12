class YSWPricingCalculator {
    constructor(context) {
        this.context = context;
        this.productPrices = null;
        this.priceValue = null;
        this.originalPrice = null;

        this.init();
    }

    init() {
        const { product } = window;
        const celluzorbe = document.querySelector('.productView--celluzorbe');

        if (!product || !product.bulk_discount_rates || !celluzorbe) return;

        this.productPrices = document.querySelectorAll('#productView-details [data-product-price-without-tax]');
        this.priceValue = Number(this.productPrices[0].textContent.split('$')[1]);
        this.originalPrice = Number(this.productPrices[0].textContent.split('$')[1]);

        const { bulk_discount_rates: bulkDiscountRates } = product;

        const addToCardWrapper = document.getElementById('productView-details');
        const descButton = addToCardWrapper.querySelector('[data-action="dec"]');
        const incButton = addToCardWrapper.querySelector('[data-action="inc"]');
        const qtyInput = addToCardWrapper.querySelector('#numberOfPanels');
        const calculateBtn = addToCardWrapper.querySelector('#calculateSquareFt');

        incButton.addEventListener('click', () => {
            this.updatePrice(bulkDiscountRates, 'inc');
        });

        descButton.addEventListener('click', () => {
            this.updatePrice(bulkDiscountRates);
        });

        qtyInput.addEventListener('input', () => {
            this.updatePrice(bulkDiscountRates);
        });

        calculateBtn.addEventListener('click', () => {
            this.updatePrice(bulkDiscountRates);
        });

        const options = { attributes: true, childList: true, subtree: true };

        let flag = false;

        const callback = (mutationList) => {
            mutationList.forEach((mutation) => {
                const mHasAttribute = mutation.target.hasAttribute('data-product-price-without-tax');

                if (mutation.type === 'childList' && mHasAttribute && flag) {
                    this.priceValue = Number(mutation.target.textContent.split('$')[1]);
                    this.originalPrice = this.priceValue;
                    this.updatePrice(bulkDiscountRates, '', flag);

                    flag = false;
                }
            });
        };

        const observer = new MutationObserver(callback);

        const previewProduct = document.getElementById('productView-details');

        const price = previewProduct.querySelector('[data-product-price-without-tax]');

        observer.observe(previewProduct, options);

        const observerPrice = new MutationObserver(function(e) {flag = true;});
        observerPrice.observe(price, {characterData: true, childList: true});
    }

    calculatePrice(price, discount) {
        return Math.round((price - (price * discount / 100)) * 100) / 100;
    }

    updatePrice(bulkDiscountRates, type, flagObs) {
        let flag = false;
        const quantity = document.getElementById('numberOfPanels');
        const quantityValue = Number(quantity.value) || 0;
        const flagExist = flagObs !== undefined;

        bulkDiscountRates.forEach(({ min, max, discount }, index) => {
            const checker = quantityValue >= min && quantityValue <= (max || quantityValue + 1);
            const setProductPrices = () => {
                this.productPrices.forEach((productPrice) => {
                    productPrice.innerHTML = `
                        <span class="ysw-js-price">
                            <span class="ysw-js-price__before">
                                $${this.originalPrice}
                            </span>
                            <span class="ysw-js-price__now">
                                $${this.calculatePrice(this.originalPrice, discount.value).toFixed(2)}
                            </span>
                        </span>`;

                    productPrice.dataset.discount = `discount-${index}`;
                });
            };

            if (flagExist && (checker && flag)) return setProductPrices();

            if (checker) {
                setProductPrices();
                flag = true;

                return;
            }

            if (quantityValue < min && !flag && type !== 'inc' && type !== 'observer') {
                this.productPrices.forEach((productPrice) => {
                    productPrice.textContent = `$${(this.originalPrice).toFixed(2)}`;
                });
            }
        });
    }
}

export default function YSWPricingCalculatorFactory(context) {
    if (this instanceof YSWPricingCalculator) {
        this.context = context;
    } else {
        return new YSWPricingCalculator(context);
    }
}
