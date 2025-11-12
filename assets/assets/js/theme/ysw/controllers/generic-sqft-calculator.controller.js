class YSWGenericSqftCalculator {
    constructor(context) {
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

    init() {
        const { bulkDiscountRates, customFields } = this.context;

        if (!bulkDiscountRates) return;

        this.bulkDiscount = bulkDiscountRates || [];
        this.customFields = customFields || [];

        let sqftField = null;

        sqftField = customFields.filter((field) => field.name.includes('square_footage'));

        this.sqft = sqftField.length ? Number(sqftField[0].value) : 1;

        if (this.isCustomSize()) {
            this.getOptionSize();
            this.changeOptionEvent();
        } else {
            this.calculateSquareFt();
        }

        if (this.sqftInput) {
            this.sqftInput.addEventListener('keyup', (e) => this.isNumber(e));

            this.qtyInput.addEventListener('keyup', (e) => {
                const qty = e.target.value;
    
                this.calculateSquareFtFromQty(qty);
            });
        }

        if (this.calculateBtn) {
            this.calculateBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.calculateSquareFt();
            });
        }
        this.qtyInput.addEventListener('change', () => this.setQuantityInDefaultInput());
        this.incBtn.addEventListener('click', (e) => this.changePanelValue(e, 'add'));
        this.decBtn.addEventListener('click', (e) => this.changePanelValue(e, 'dec'));
    }

    calculateSquareFt() {
        if (!this.sqftInput) return;

        const sqftQuantity = this.sqftInput.value;

        if (!sqftQuantity) return;

        if (sqftQuantity > 0 && this.sqft > 0) {
            const numberOfPanels = Math.ceil(sqftQuantity / this.sqft);
            const coversSFQuantity = this.sqft * numberOfPanels;
            this.qtyInput.value = numberOfPanels;
            this.coversSF.innerHTML = coversSFQuantity.toFixed(1);

            this.showHideSavings(numberOfPanels);
        } else {
            this.qtyInput.value = 1;
            this.coversSF.innerHTML = this.sqft.toFixed(1);
            this.showHideSavings(1);
        }
    }

    calculateSquareFtFromQty(qty) {
        const numberOfPanels = qty;
        const coversSFQuantity = this.sqft * numberOfPanels;
        this.qtyInput.value = numberOfPanels;
        this.coversSF.innerHTML = coversSFQuantity.toFixed(1);

        this.showHideSavings(numberOfPanels);
    }

    changePanelValue(e, n) {
        e.preventDefault();
        const numberOfPanelsQuantity = this.qtyInput.value;

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
    }

    isNumber(e) {
        return !isNaN(Number(e)); // eslint-disable-line
    }

    setQuantityInDefaultInput() {
        const qty = this.qtyInput.value || 1;

        this.defaultQtyInput.value = qty;
    }

    showHideSavings(qty) {
        if (!this.isNumber(qty)) return;

        const _qty = Number(qty);
        const discountPercent = document.querySelector('.discPercent');
        const discontWrapper = document.querySelector('.saveDiscount');
        let porcent = 0;

        this.defaultQtyInput.value = _qty;

        this.bulkDiscount.forEach((discount) => {
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
    }

    isCustomSize() {
        return this.productDivOptions.find((option) => option.id === Number(this.squareFootageId));
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
            sqftValue[option.id] = this.customFields.find((field) =>
                field.name.includes(`square_footage[${option.id}]`));
        });

        this.sizeOption = sizeOption.values;
        this.optionSelected = sizeOption.values.find((option) => option.selected).id || sizeOption.values[0].id;
        this.sqft = sqftValue[defaultOption.id].value;
        this.coversSF.innerHTML = Number(this.sqft).toFixed(1);
    }

    changeOptionEvent() {
        const options = document.querySelectorAll('[data-product-option-change] [data-product-attribute]');

        const _option = Array.from(options).find((option) => {
            let input = option.querySelector('input');
            input = input ? input : option.querySelector('select');
    
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

            this.changeOptionSize(optionValue);
        });
    }

    changeOptionSize(value) {
        const sqftValue = {};

        this.sizeOption.forEach((option) => {
            sqftValue[option.id] = this.customFields.find((field) =>
                field.name.includes(`square_footage[${option.id}]`));
        });

        this.sqft = sqftValue[value] ? sqftValue[value].value : 0;

        if (!sqftValue[value] || sqftValue[value].value === 'quote') return;

        this.coversSF.innerHTML = Number(sqftValue[value].value).toFixed(1);

        this.calculateSquareFtFromQty(this.qtyInput.value);
    }
}

export default function YSWGenericSqftCalculatorFactory(context) {
    if (this instanceof YSWGenericSqftCalculator) {
        this.context = context;
    } else {
        return new YSWGenericSqftCalculator(context);
    }
}
