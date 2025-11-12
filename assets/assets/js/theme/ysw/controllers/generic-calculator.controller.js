class YSWGenericPricingCalculator {
    constructor(context) {
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

    init() {
        const { product } = this.context;
        const calculator = document.querySelector('.productView--generic-calculator');

        if (!product || !product.bulk_discount_rates || !calculator) return;

        this.productPrices = document.querySelectorAll('#productView-details [data-product-price-without-tax]');
        this.priceValue = Number(this.productPrices[0].textContent.split('$')[1]);
        this.originalPrice = Number(this.productPrices[0].textContent.split('$')[1]);

        const { bulk_discount_rates: bulkDiscountRates } = product;

        this.bulkDiscountRates = bulkDiscountRates;

        const addToCardWrapper = document.getElementById('productView-details');
        const descButton = addToCardWrapper.querySelector('[data-action="dec"]');
        const incButton = addToCardWrapper.querySelector('[data-action="inc"]');
        const qtyInput = addToCardWrapper.querySelector('#numberOfPanels');
        const calculateBtn = addToCardWrapper.querySelector('#calculateSquareFt');

        this.changeOptionEvent();
        this.getOptionSize();

        incButton.addEventListener('click', () => {
            this.updatePrice(bulkDiscountRates);
        });

        descButton.addEventListener('click', () => {
            this.updatePrice(bulkDiscountRates);
        });

        if (qtyInput) {
            qtyInput.addEventListener('input', () => {
                this.updatePrice(bulkDiscountRates);
            });
        }

        if (calculateBtn) {
            calculateBtn.addEventListener('click', () => {
                this.updatePrice(bulkDiscountRates);
            });
        }

        const options = { attributes: true, childList: true, subtree: true };

        let flag = false;

        const callback = (mutationList) => {
            mutationList.forEach((mutation) => {
                const mHasAttribute = mutation.target.hasAttribute('data-product-price-without-tax');

                if (mutation.type === 'childList' && mHasAttribute && flag) {
                    this.priceValue = Number(mutation.target.textContent.split('$')[1]);
                    this.originalPrice = this.priceValue;

                    flag = false;
                }
            });
        };

        const observer = new MutationObserver(callback);
        const previewProduct = document.getElementById('productView-details');
        const price = previewProduct.querySelector('[data-product-price-without-tax]');

        const observerPrice = new MutationObserver(function(e) {flag = true;});
        observerPrice.observe(price, {characterData: true, childList: true});

        observer.observe(previewProduct, options);
    }

    calculatePrice(price, discount) {
        return Math.round((price - (price * discount / 100)) * 100) / 100;
    }

    updatePrice(bulkDiscountRates) {
        if (this.optionList[this.optionSelected] &&
            this.optionList[this.optionSelected].value === 'quote') return;

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
                productPrice.textContent = `$${(this.originalPrice).toFixed(2)}`;
            });
        } else {
            const priceAfter = this.calculatePrice(Number(this.priceValue), discontValue).toFixed(2);
            const priceBefore = this.priceValue.toFixed(2);

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
    }

    changeOptionEvent() {
        const options = document.querySelectorAll('[data-product-option-change] [data-product-attribute]');

        const _option = Array.from(options).find((option) => {
            const input = option.querySelector('input');

            if (!input) return null;

            const optionId = input.name.replace(/\D/g, '');

            if (!optionId) return null;

            if (Number(optionId) === Number(this.squareFootageId)) {
                return option;
            }

            return null;
        });

        if (!_option) return;

        _option.addEventListener('change', (event) => {
            const optionValue = event.target.value;

            if (!optionValue) return;

            this.optionSelected = optionValue;
        });
    }

    getOptionSize() {
        if (!this.context.productOptions) return;

        const productOptions = this.context.productOptions;
        const sizeOption = productOptions.find((option) => option.id === Number(this.squareFootageId));

        if (!sizeOption) {
            this.optionList = {
                default: this.customFields.find((field) => field.name.includes('square_footage')),
            };

            this.optionSelected = 'default';

            return;
        }

        const defaultOption = sizeOption.values.find((option) => option.selected);

        if (!defaultOption) return;

        const sqftValue = {};

        sizeOption.values.forEach((option) => {
            sqftValue[option.id] = this.customFields.find((field) =>
                field.name.includes(`square_footage[${option.id}]`));
        });

        this.optionSelected = defaultOption.id;
        this.optionList = sqftValue;
    }

    resetPrice() {
        this.productPrices.forEach((productPrice) => {
            productPrice.textContent = `$${(this.originalPrice).toFixed(2)}`;
        });
    }
}

export default function YSWGenericPricingCalculatorFactory(context) {
    if (this instanceof YSWGenericPricingCalculator) {
        this.context = context;
    } else {
        return new YSWGenericPricingCalculator(context);
    }
}
