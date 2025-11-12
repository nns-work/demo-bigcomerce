class YSWTablePricingCalculator {
    constructor(context) {
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

    init() {
        const { product } = window;
        const celluzorbeV2 = document.querySelector('.productView--price-table');

        if (!product || !product.bulk_discount_rates || !celluzorbeV2) return;

        this.productPriceContent = document.querySelector('#productView-details [data-product-price-without-tax]');
        this.productPrice = document.querySelector('[data-price-withoutTax]');
        this.priceValue = Number(this.productPrice.textContent);
        this.originalPrice = Number(this.productPrice.textContent);
        this.bulkDiscountRates = product.bulk_discount_rates;

        const addToCardWrapper = document.getElementById('productView-details');
        const descButton = addToCardWrapper.querySelector('[data-action="dec"]');
        const incButton = addToCardWrapper.querySelector('[data-action="inc"]');
        const qtyInput = addToCardWrapper.querySelector('#numberOfPanels');
        const calculateBtn = addToCardWrapper.querySelector('#calculateSquareFt');

        this.reset(this.bulkDiscountRates);

        incButton.addEventListener('click', () => {
            this.updatePrice('inc');
        });

        descButton.addEventListener('click', () => {
            this.updatePrice('desc');
        });

        qtyInput.addEventListener('input', () => {
            this.updatePrice();
        });

        calculateBtn.addEventListener('click', () => {
            this.updatePrice();
        });

        this.setObserver();
    }

    updatePrice(type, flagObs) {
        const quantity = document.getElementById('numberOfPanels');
        const quantityValue = Number(quantity.value) || 0;
        const flagExist = flagObs !== undefined;
        let flag = false;

        this.reset(quantityValue);

        this.bulkDiscountRates.forEach(({ min, max, discount }) => {
            const checker = quantityValue >= min && quantityValue <= (max || quantityValue + 1);

            const setProductPrices = () => {
                if (!checker && flag) return;

                this.discountSaving.textContent = `Saving ${discount.value}%`;
                this.productPrice.textContent = `${this.calculatePrice(Number(this.priceValue), discount.value).toFixed(2)}`;
                this.priceBefore.innerHTML = `<span class="symbol">$</span><span class="price">${this.originalPrice}</span>`;
                this.priceBeforeTotal.innerHTML = `<span class="symbol">$</span><span class="price">${(quantityValue * this.priceValue).toFixed(2)}</span>`;
                this.priceAfterTotal.textContent = `${(quantityValue * this.calculatePrice(this.priceValue, discount.value).toFixed(2)).toFixed(2)}`;
                this.priceTotalSavings.textContent = `${((quantityValue * this.priceValue).toFixed(2) - quantityValue * this.calculatePrice(this.priceValue, discount.value).toFixed(2)).toFixed(2)}`;

                flag = true;
            };

            if (flagExist && (checker && flag)) return setProductPrices();

            if (checker) {
                setProductPrices();
                flag = true;
            }
        });
    }

    calculatePrice(price, discount) {
        return ((price - (price * discount / 100)) * 100 / 100);
    }

    reset(quantityValue) {
        const qtyInput = document.querySelector('#numberOfPanels');
        const pricesSection = document.querySelector('.prices-section');

        this.productPrice.textContent = this.originalPrice;
        this.discountSaving.innerHTML = 'No savings';
        this.priceAfterTotal.textContent = (Number(qtyInput.value) * this.originalPrice).toFixed(2);
        this.priceTotalSavings.innerHTML = '0.00';

        pricesSection.querySelector('thead').style.display = 'none';

        pricesSection.querySelectorAll('.icons').forEach((icon) => {
            icon.style.visibility = 'hidden';
        });

        pricesSection.querySelectorAll('tbody tr:not(:first-child)').forEach((row) => {
            row.style.display = 'none';
        });

        if (quantityValue < 14) {
            pricesSection.querySelectorAll('.discount-wrapper').forEach((discountWrapper) => {
                discountWrapper.style.display = 'none';
            });
        }

        if (quantityValue >= 14) {
            pricesSection.querySelectorAll('.discount-wrapper').forEach((discountWrapper) => {
                discountWrapper.style.display = 'block';
            });
            pricesSection.querySelectorAll('tbody tr:not(:first-child)').forEach((row) => {
                row.style.display = 'table-row';
            });
            pricesSection.querySelectorAll('.icons').forEach((icon) => {
                icon.style.visibility = 'visible';
            });
            pricesSection.querySelector('thead').style.display = 'table-header-group';
        }
    }

    setObserver() {
        let flag = false;

        const callback = (mutationList) => {
            mutationList.forEach((mutation) => {
                const mHasAttribute = mutation.target.hasAttribute('data-product-price-without-tax');

                if (mutation.type === 'childList' && mHasAttribute && flag) {
                    this.priceValue = Number(mutation.target.textContent);
                    this.originalPrice = this.priceValue;
                    this.updatePrice('', true);

                    flag = false;
                }
            });
        };

        const observer = new MutationObserver(callback);

        observer.observe(document.querySelector('#productView-details'), {
            childList: true,
            subtree: true,
        });

        const price = document.querySelector('#productView-details [data-product-price-without-tax]');

        const observerPrice = new MutationObserver(function(e) {flag = true;});
        observerPrice.observe(price, {characterData: true, childList: true});
    }
}

export default function YSWTablePricingCalculatorFactory(context) {
    if (this instanceof YSWTablePricingCalculator) {
        this.context = context;
    } else {
        return new YSWTablePricingCalculator(context);
    }
}
