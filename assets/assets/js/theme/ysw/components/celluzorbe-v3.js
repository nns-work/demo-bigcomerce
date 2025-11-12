class YSWCelluzorbeV3 {
    constructor(context) {
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

    init() {
        const { product } = window;
        const celluzorbeV3 = document.querySelector('.ysw-l-product-celluzorbe-v3');

        if (!product || !product.bulk_discount_rates || !celluzorbeV3) return;

        this.productPrice = document.querySelector('[data-product-price-without-tax]');
        this.priceValue = Number(this.productPrice.textContent);
        this.originalPrice = Number(this.productPrice.textContent);
        this.bulkDiscountRates = product.bulk_discount_rates;

        const addToCardWrapper = document.querySelector('.productView-options');
        const descButton = addToCardWrapper.querySelector('.increment--down');
        const incButton = addToCardWrapper.querySelector('.increment--up');
        const qtyInput = addToCardWrapper.querySelector('#numberOfPanels');
        const calculateBtn = addToCardWrapper.querySelector('#calculateSquareFt');

        calculateBtn.click();

        this.reset();

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

        this.reset();

        this.bulkDiscountRates.forEach(({ min, max, discount }) => {
            const checker = quantityValue >= min && quantityValue <= (max || quantityValue + 1);

            const setProductPrices = () => {
                if (!checker && flag) return;
                const priceAfter = this.calculatePrice(Number(this.priceValue), discount.value).toFixed(2);
                const sqftPriceBefore = this.calculateSquareFtPrice(8, this.originalPrice).toFixed(2);
                const sqftPriceAfter = this.calculateSquareFtPrice(8, priceAfter).toFixed(2);

                if (priceAfter === this.originalPrice.toFixed(2)) {
                    this.priceBefore.style.display = 'none';
                    this.sqftPriceBefore.style.display = 'none';
                } else {
                    this.priceBefore.style.display = 'block';
                    this.sqftPriceBefore.style.display = 'block';
                }

                this.priceBefore.textContent = `$${this.originalPrice}`;
                this.priceAfter.textContent = `$${priceAfter}`;
                this.sqftPrice.textContent = `${sqftPriceAfter}`;
                this.sqftPriceBefore.textContent = `${sqftPriceBefore}`;

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
        const calc = ((price - (price * discount / 100)) * 100 / 100);
        const newPrice = Math.round(calc * 100 + Number.EPSILON) / 100;

        return newPrice;
    }


    calculateSquareFtPrice(sqft, price) {
        const calc = ((price / sqft) * 100 / 100);
        const newPrice = Math.round(calc * 100 + Number.EPSILON) / 100;

        return newPrice;
    }

    reset() {
        this.productPrice.textContent = this.originalPrice;
        this.priceBefore.style.display = 'none';
        this.priceAfter.textContent = `$${(this.originalPrice).toFixed(2)}`;
        this.sqftPriceBefore.style.display = 'none';
        this.sqftPrice.textContent = `${(this.originalPrice / 8).toFixed(2)}`;
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

        observer.observe(document.querySelector('.productView-options'), {
            childList: true,
            subtree: true,
        });

        const price = document.querySelector('.productView-options [data-product-price-without-tax]');

        const observerPrice = new MutationObserver(function(e) {flag = true;});
        observerPrice.observe(price, {characterData: true, childList: true});
    }
}

export default function YSWCelluzorbeV3Factory(context) {
    if (this instanceof YSWCelluzorbeV3) {
        this.context = context;
    } else {
        return new YSWCelluzorbeV3(context);
    }
}
