import PageManager from './page-manager';
import YSWHomeFactory from './ysw/home';

export default class Home extends PageManager {
    onReady() {
        YSWHomeFactory(this.context);
    }
}
