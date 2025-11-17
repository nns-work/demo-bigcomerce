import $ from 'jquery';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import compareProducts from './global/compare-products';
import privacyCookieNotification from './global/cookieNotification';
import maintenanceMode from './global/maintenanceMode';
import carousel from './common/carousel';
import accordion from './common/accordion';
import 'lazysizes';
import loadingProgressBar from './global/loading-progress-bar';
import sweetAlert from './global/sweet-alert';
import svgInjector from './global/svg-injector';
import athleticLoaded from './athletic/global';
import IEdetection from './global/internet-explorer-warning';
import toggleSearchAssignment from './global/search-bar-toggle';
import toggleSubmenuAssignment from './global/submenu-toggle';
import handleSearchSubmit from './global/search-bar-submit';
import handleQuoteAndCart from './global/quoteAndCart';
import applyCouponCode from './global/apply-coupon-code';
import readMore from './global/read-more';
import setupYoutubeVideos from './global/youtube-video';
import setupFilterBars from './global/filter-bar';
import customizeAmazonButton from './global/vwo-consolidation/customize-amazon-button';
import setupKlaviyoHelper from './global/klaviyo-integration';
import setupSoundproofDoorHelper from './global/vwo/soundproof-door';
import setupTruAcousticsHelper from './global/vwo/tru-acoustics';
import lazyScripts from './global/lazy-scripts';
import YSWCGlobalFactory from './ysw/global';
import AbsorptionCalculator from './product/absorption-calculator';
import faqs from './modules/faqs';
import articleSlider from './modules/article-slider';
import reportTables from './product/report-tables';

export default class Global extends PageManager {
    onReady() {
        // Only load visible elements until the onload event fires,
        // after which preload nearby elements.
        window.lazySizesConfig = window.lazySizesConfig || {};
        window.lazySizesConfig.loadMode = 1;

        handleQuoteAndCart();
        quickSearch();
        currencySelector();
        foundation($(document));
        quickView(this.context);
        cartPreview();
        compareProducts(this.context.urls);
        carousel();
        accordion();
        menu();
        mobileMenuToggle();
        privacyCookieNotification();
        maintenanceMode(this.context.maintenanceMode);
        loadingProgressBar();
        sweetAlert();
        svgInjector();
        athleticLoaded();
        IEdetection();
        toggleSearchAssignment();
        toggleSubmenuAssignment();
        handleSearchSubmit();
        setupYoutubeVideos();
        applyCouponCode();
        setupFilterBars();
        readMore();
        customizeAmazonButton();
        setupKlaviyoHelper();
        setupSoundproofDoorHelper();
        setupTruAcousticsHelper();
        faqs();
        articleSlider();
        lazyScripts([
            '//static.klaviyo.com/onsite/js/klaviyo.js?company_id=JQEccv',
        ]);
        YSWCGlobalFactory(this.context);
    
        this.absorptionCalculator = new AbsorptionCalculator();
        this.absorptionCalculator.init();

        reportTables();
    }
}
