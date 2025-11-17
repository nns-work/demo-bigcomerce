import YSWPricingCalculatorFactory from './components/pricing-calculator';
import YSWGenericPricingCalculatorFactory from './controllers/generic-calculator.controller';
import YSWGenericSqftCalculatorFactory from './controllers/generic-sqft-calculator.controller';
import YSWTablePricingCalculatorFactory from './components/table-pricing-calculator';
import yswCarPackage from './components/car-package';
import yswControlGraphics from './components/control-graphics';
import YSWTimberwoolCalculatorFactory from './components/timberwool-calculator';
import YSWTimberwoolSampleModalFactory from './components/timberwool-sample-modal';
import YSWProductGalleryControllerFactory from './controllers/gallery.controller';
import YSWCelluzorbeV3Factory from './components/celluzorbe-v3';

class YSWProduct {
    constructor(context) {
        this.context = context;
        this.init();
    }

    init() {
        YSWGenericSqftCalculatorFactory(this.context);
        YSWGenericPricingCalculatorFactory(this.context);
        YSWPricingCalculatorFactory(this.context);
        YSWTablePricingCalculatorFactory(this.context);
        yswCarPackage();
        yswControlGraphics();
        YSWTimberwoolCalculatorFactory(this.context);
        YSWTimberwoolSampleModalFactory(this.context);
        YSWProductGalleryControllerFactory();
        YSWCelluzorbeV3Factory(this.context);
        this.gotoGuarantee();
        this.quoteBtnHandler();

        this.changeOptionEvent();
        this.clickColorOption();
    }

    clickColorOption() {
        const colorOptions = document.querySelector('.form-option-variant--color');

        if (colorOptions) {
            colorOptions.parentNode.previousElementSibling.click();
        }
    }

    gotoGuarantee() {
        const guarantee = document.querySelector('.productView-guarantee');

        if (!guarantee) return;

        guarantee.addEventListener('click', (e) => {
            e.preventDefault();

            const guaranteeSection = document.querySelector('#proGuarantee4429');

            if (!guaranteeSection) return;

            window.scrollBy(0, guaranteeSection.getBoundingClientRect().top - 100);
        });
    }

    quoteBtnHandler() {
        const quoteCutoff = Number(this.context.quoteCutoff);

        if (Number.isNaN(quoteCutoff)) return;

        const qtyInput = document.querySelector('#numberOfPanels');

        if (!qtyInput) return;

        const numberOfPanels = qtyInput;
        const btnIncrease = document.querySelector('[data-action="inc"]');
        const btnDecrease = document.querySelector('[data-action="dec"]');
        const calculateSquareFt = document.querySelector('#calculateSquareFt');
        const buyNowBtn = document.querySelector('#btn-qn-buy-now');
        const addToCartBtn = document.querySelector('#btn-qn-add-to-cart');
        const arr = [buyNowBtn, addToCartBtn];

        if (!numberOfPanels || !btnIncrease || !btnDecrease || !calculateSquareFt || !arr.every(Boolean)) return;

        numberOfPanels.addEventListener('input', () => {
            const value = numberOfPanels.value;

            this.handleQuoteBtnVisibility(value, quoteCutoff);
        });

        [btnIncrease, btnDecrease].forEach(btn => {
            btn.addEventListener('click', () => {
                const value = numberOfPanels.value;

                this.handleQuoteBtnVisibility(value, quoteCutoff);
            });
        });

        if ( calculateSquareFt ) {
            calculateSquareFt.addEventListener('click', () => {
                const value = numberOfPanels.value;

                this.handleQuoteBtnVisibility(value, quoteCutoff);
            });
        }

        window.missingOptionSelect = this.missingOptionSelect;

        arr.forEach(btn => {
            if (!btn) return;

            btn.addEventListener('click', (e) => {
                const value = qtyInput.value;

                if (value < quoteCutoff || !window.QN || !window.QN.add_product) return;
                if (this.missingOptionSelect()) return;

                e.preventDefault();
                window.QN.add_product(null, false);
            });
        });
    }

    missingOptionSelect() {
        const productDivOptions = document.querySelectorAll('.productView-options [data-product-option-change] [data-product-attribute]');
        let flagDiv = false;

        if (!productDivOptions.length) {
            return flagDiv;
        }

        productDivOptions.forEach((option) => {
            const options = option.querySelectorAll('input, select');
            let flagOptions = false;

            options.forEach((input) => {
                if (input.required && (input.checked || (input.tagName === 'SELECT' && input.value))) {
                    flagOptions = true;
                }
            });

            if (!flagOptions) {
                flagDiv = true;
            }
        });

        return flagDiv;
    }

    handleQuoteBtnVisibility(value, quoteCutoff) {
        if (this.optionSelected) {
            if (this.optionSelected.includes('Custom Sizes')) {
                return;
            }
        }

        const buyBtnsWrapperOrignal = document.querySelector('.buy-buttons--original');
        const buyBtnsWrapperQuote = document.querySelector('.buy-buttons--quote');

        if (value >= quoteCutoff) {
            buyBtnsWrapperOrignal.style.display = 'none';
            buyBtnsWrapperQuote.style.display = 'block';

            return;
        }

        buyBtnsWrapperOrignal.style.display = 'block';
        buyBtnsWrapperQuote.style.display = 'none';
    }

    changeOptionEvent() {
        const options = document.querySelectorAll('[data-product-option-change] [data-product-attribute="set-rectangle"]');

        options.forEach((option) => {
            const labelEl = option.querySelector('label');

            if (!labelEl) return;

            const label = labelEl.innerText;

            if (!label.toLowerCase().includes('choose sizes')) return;

            option.addEventListener('change', (e) => {
                const _label = e.target.nextElementSibling;

                if (!_label) return;

                this.optionSelected = _label.innerText;
            });
        });
    }
}

export default function YSWProductFactory(context) {
    if (this instanceof YSWProduct) {
        this.context = context;
    } else {
        return new YSWProduct(context);
    }
}
