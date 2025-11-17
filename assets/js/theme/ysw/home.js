import YSWTabsContent from './components/tabs-content';
import YSWProductSetFactory from './components/product-set';

class YSWHome {
    constructor(context) {
        this.context = context;
        this.isMobileFeatureCarouselInitialized = false;
        this.init();
    }

    init() {
        YSWProductSetFactory();
        YSWTabsContent();
    }
}

export default function YSWHomeFactory(context) {
    if (this instanceof YSWHome) {
        this.context = context;
    } else {
        return new YSWHome(context);
    }
}
