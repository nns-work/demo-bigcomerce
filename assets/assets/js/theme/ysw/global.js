import YSWModal from './components/modal';
import YSWDropDownController from './controllers/menu-dropdown.controller';
import YswProductWithPagination from './components/product-with-pagination';
import YswCategoryProductSet from './widgets/category-product';
import yswAccordionRenderController from './controllers/accordion.controller';
import YswDiscountModalFactory from './controllers/discount-modal.controller';
import YswNavTabs from './widgets/nav-tabs';

class YSWGlobal {
    constructor(context) {
        this.context = context;
        this.init();
    }

    init() {
        YSWModal(this.context);
        YSWDropDownController();
        this.moveTobBar();
        YswProductWithPagination();
        YswCategoryProductSet(this.context);
        YswNavTabs();
        yswAccordionRenderController();
        YswDiscountModalFactory(this.context);
    }

    moveTobBar() {
        const header = document.querySelector('.ysw-l-header');
        const topBar = document.querySelector('.ysw-l-header__top-bar');

        const resizeObserver = new ResizeObserver(entries => {
            for (const _entry of entries) {
                if (window.innerWidth > 1023) {
                    header.prepend(topBar);
                    return;
                }

                header.parentNode.prepend(topBar);
            }
        });

        resizeObserver.observe(topBar);
    }
}

export default function YSWCGlobalFactory(context) {
    if (this instanceof YSWGlobal) {
        this.context = context;
    } else {
        return new YSWGlobal(context);
    }
}
