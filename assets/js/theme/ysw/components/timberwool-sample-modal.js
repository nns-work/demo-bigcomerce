import utils from '@bigcommerce/stencil-utils';

class YSWTimberwoolSampleModal {
    constructor(context) {
        this.context = context;
        this.productId = document.querySelector('.modal--timberwool-sample #product_id');
        this.quantityGlobal = 0;
        this.maxQuantity = 1;
        this.attributes = [];
        this.flag = false;
        this.init();
    }

    init() {
        const timberwool = document.querySelector('.modal--timberwool-sample');

        if (!timberwool) return;

        this.modalTrigger();
        this.addTrigger();
        this.selectColorTrigger();
        this.selectIconTrigger();
        this.render();
        this.setRemoveListeners();
    }

    render(type) {
        utils.api.cart.getCart({ includeOptions: true }, (err, response) => {
            const qty = document.querySelector('.productView-free-sample__title [data-qty-added]');
            const maxQty = document.querySelector('.productView-free-sample__title [data-max-qty]');
            const list = document.querySelector('.productView-free-sample__items');
            let flag = false;
            let quantity = 0;
            let products = [];
            let panels = [];

            try {
                qty.innerHTML = response[0].lineItems.physicalItems.length || 0;
                products = response[0].lineItems.physicalItems.filter((item) => item.productId === Number(this.productId.value));

                panels = products.filter((item) => item.options.some((option) => option.name === 'Edge Type'));

                panels.forEach((panel) => {
                    quantity += panel.quantity;
                });

                this.quantityGlobal = quantity;

                qty.innerHTML = quantity;
            } catch (e) {
                qty.innerHTML = 0;
                flag = true;
            }

            maxQty.innerHTML = this.maxQuantity;

            list.innerHTML = '';

            if (flag) return;

            const items = {
                options: [],
                id: [],
            };

            panels.forEach((panel) => {
                if (panel.quantity > 1) {
                    for (let j = 0; j < panel.quantity; j++) {
                        items.options.push(panel.options);
                        items.id.push(panel.id);
                    }
                } else {
                    items.options.push(panel.options);
                    items.id.push(panel.id);
                }
            });

            items.options.forEach((option, index) => {
                const [thickness, color, edge] = option;
                const colorCode = document.querySelector(`[data-product-attribute-value="${option[1].valueId}"][value="${option[1].valueId}"]`);
                const template =
                    `<li class="productView-free-sample__item">
                        <div class="productView-free-sample__item-color" style="background-color: ${colorCode.dataset.color};">
                            <img src="${colorCode.dataset.image}" alt="${color.value}">
                        </div>
                        <div class="productView-free-sample__item-right">
                            <div>
                                <p>${color.value}, ${thickness.value},</p>
                                <p>${edge.value}</p>
                            </div>
                            <button data-id="${items.id[index]}">
                                <svg class="icon">
                                    <use xlink:href="#icon-xmark"></use>
                                </svg>
                            </button>
                        </div>
                    </li>`;

                list.insertAdjacentHTML('beforeend', template);
            });

            this.setRemoveListeners();

            if (type === 'success') {
                this.setMessages('success');
            }

            if (type === 'error') {
                this.setMessages('error');
            }

            if (this.quantityGlobal >= this.maxQuantity) {
                this.setMessages('disabled');

                return;
            }

            if (!type) return;

            setTimeout(() => {
                this.setMessages('normal');
            }, 1000);
        });
    }

    setMessages(type) {
        const addToCartBtn = document.querySelectorAll('.order-free-sample-button');
        const messages = {
            success: 'Added Sample',
            inprogress: 'Adding to cart…',
            error: 'Error',
            normal: 'Add Sample',
            removing: 'Removing…',
            removed: 'Removed',
            disabled: `Max ${this.maxQuantity} Sample${this.maxQuantity > 1 ? 's' : ''}`,
        };

        addToCartBtn.forEach((btn) => {
            btn.value = messages[type];

            if (type === 'normal') {
                btn.removeAttribute('disabled');
                btn.classList.remove('btn-new--disabled');

                return;
            }

            btn.setAttribute('disabled', 'disabled');
            btn.classList.add('btn-new--disabled');
        });
    }

    setRemoveListeners() {
        const removeButtons = document.querySelectorAll('.productView-free-sample__item-right button');

        removeButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();

                removeButtons.forEach((btn) => {
                    btn.setAttribute('disabled', 'disabled');
                    btn.classList.add('disabled');
                });

                this.setMessages('removing');

                const id = button.dataset.id;

                utils.api.cart.getCart({ includeOptions: true }, (err, response) => {
                    try {
                        const products = response[0].lineItems.physicalItems.filter((item) => item.productId === Number(this.productId.value));
                        const panels = products.filter((item) => item.options.some((option) => option.name === 'Edge Type'));

                        if (panels.find((panel) => panel.id === id).quantity > 1) {
                            utils.api.cart.itemUpdate(id, panels.find((panel) => panel.id === id).quantity - 1, (_err, _response) => {
                                this.render('removed');
                            });

                            return;
                        }

                        utils.api.cart.itemRemove(id, (_err, _response) => {
                            this.render('removed');
                        });
                    } catch (_e) {
                        console.error(_e); // eslint-disable-line no-console
                    }

                    this.render('normal');

                    removeButtons.forEach((btn) => {
                        btn.removeAttribute('disabled');
                        btn.classList.remove('disabled');
                    });
                });
            });
        });
    }

    postToCart() {
        const formData = new FormData();
        formData.append('action', 'add');
        formData.append('product_id', Number(this.productId.value));
        formData.append('quantity', 1);

        document.querySelectorAll('.modal--timberwool-sample .form-select option:checked').forEach((option) => {
            this.attributes.push({
                name: option.parentElement.name,
                value: option.value,
            });
        });

        this.attributes.forEach((attribute) => {
            formData.append(attribute.name, attribute.value);
        });

        let quantity = 0;

        const setTimer = setTimeout(() => {
            if (this.flag) return;

            utils.api.cart.getCart({ includeOptions: true }, (err, response) => {
                try {
                    const products = response[0].lineItems.physicalItems.filter((item) => item.productId === Number(this.productId.value));
                    const panels = products.filter((item) => item.options.some((option) => option.name === 'Edge Type'));

                    panels.forEach((panel) => {
                        quantity += panel.quantity;
                    });

                    this.quantityGlobal = quantity;
                } catch (e) {
                    this.render('error');
                }

                if (quantity >= 3 || this.quantityGlobal >= 3) {
                    this.setMessages('normal');
                    this.flag = true;

                    return;
                }

                utils.api.cart.itemAdd(formData, (_err, _response) => {
                    const errorMessage = _err || _response.data.error;

                    if (errorMessage) {
                        console.error(errorMessage); // eslint-disable-line no-console
                    }

                    this.setMessages('success');

                    this.render('success');
                });
            });

            this.flag = true;

            clearTimeout(setTimer);
        }, 1000);


        this.flag = false;

        this.attributes = [];
    }

    modalTrigger() {
        const modal = document.querySelector('.modal--timberwool-sample');
        const modalTrigger = document.querySelector('.productView-sample a');

        modalTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('open');
            modal.style.display = 'block';
            modal.style.opacity = '1';
            modal.style.visibility = 'visible';
            modal.style.top = '530px';

            document.body.classList.add('has-activeModal');
        });
    }

    addTrigger() {
        const addToCartBtn = document.querySelectorAll('.order-free-sample-button');

        addToCartBtn.forEach((button) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.setMessages('inprogress');
                this.postToCart();
            });
        });
    }

    selectColorTrigger() {
        const selectColor = document.querySelector('#attribute_select_707');

        selectColor.addEventListener('change', (e) => {
            const img = document.querySelector('label[for="attribute_select_707"] img');

            img.src = e.target.options[e.target.selectedIndex].dataset.image;
            img.alt = e.target.options[e.target.selectedIndex].text;
        });
    }

    selectIconTrigger() {
        const selectThicknessIcon = document.querySelector('#attribute_select_706');
        const selectEdgeIcon = document.querySelector('#attribute_select_708');

        selectThicknessIcon.addEventListener('change', (e) => {
            const icon = document.querySelector('label[for="attribute_select_706"] .icon use');

            icon.href.baseVal = e.target.options[e.target.selectedIndex].dataset.icon;
        });

        selectEdgeIcon.addEventListener('change', (e) => {
            const icon = document.querySelector('label[for="attribute_select_708"] .icon use');

            icon.href.baseVal = e.target.options[e.target.selectedIndex].dataset.icon;
        });
    }
}

export default function YSWTimberwoolSampleModalFactory(context) {
    if (this instanceof YSWTimberwoolSampleModal) {
        this.context = context;
    } else {
        return new YSWTimberwoolSampleModal(context);
    }
}
