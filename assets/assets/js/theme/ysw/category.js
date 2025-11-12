import YSWProductSetFactory from './components/product-set';
import YSWContactUSForm from './components/contact-us';

class YSWCategory {
    constructor(context) {
        this.context = context;
        this.init();
    }

    init() {
        // Your code here.
        YSWProductSetFactory(this.context);
        YSWContactUSForm();
    }
}

export default function YSWCategoryFactory(context) {
    if (this instanceof YSWCategory) {
        this.context = context;
    } else {
        return new YSWCategory(context);
    }
}
