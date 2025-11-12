import { defaultModal } from './../../global/modal';

const cookieName = 'ssa_popup';

let mobileBanner;
let desktopBanner;

const setBanners = (context) => {
    mobileBanner = context.themeSettings['ysw-modal-mobile-banner'];
    desktopBanner = context.themeSettings['ysw-modal-desktop-banner'];
};

const modalContent = (imageURL, type, context) => `<img src="/images/stencil/original/image-manager/${imageURL}" alt="${context.themeSettings['ysw-modal-alt']}" class="ysw-c-modal__image" />
    <a href="${context.themeSettings['ysw-modal-link']}" class="ysw-c-modal__link ysw-c-modal__link--${type}" title="${context.themeSettings['ysw-modal-button-aria-label']}" aria-label="${context.themeSettings['ysw-modal-button-aria-label']}"></a>`;

const createCookie = () => {
    const date = new Date();

    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

    document.cookie = `${cookieName}=False; expires=${date.toUTCString()}; secure;`;
};

const getCookieValue = () => Boolean(document.cookie.replace(/(?:(?:^|.*;\s*)ssa_popup\s*\=\s*([^;]*).*$)|^.*$/, '$1'));

const createModal = (context) => {
    const modal = defaultModal();

    if (window.innerWidth > 800) {
        modal.open({ addClass: 'ysw-c-modal ysw-c-modal--desktop' });
        modal.updateContent(modalContent(desktopBanner, 'desktop', context));
    } else {
        modal.open({ addClass: 'ysw-c-modal ysw-c-modal--mobile' });
        modal.updateContent(modalContent(mobileBanner, 'mobile', context));
    }

    createCookie();
};

export default function YSWModal(context) {
    if (((getCookieValue() && context.template === 'pages/home') || context.template !== 'pages/home') || !context.themeSettings['ysw-modal-enabled']) return;

    setBanners(context);
    createModal(context);
}
