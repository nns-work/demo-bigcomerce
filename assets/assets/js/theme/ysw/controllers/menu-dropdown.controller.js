const MOBILE_BREAKPOINT = 1023;
let navigationList = null;
let flag = false;
const body = document.querySelector('body');
const header = document.querySelector('header');
const menu = document.querySelector('.navPages-container-upper');
const navWrapper = document.querySelector('.navPages-upper-wrapper');
const btnOpen = document.getElementById('btnOpenMenu');
const btnClose = document.getElementById('closemenu');
const overlay = document.querySelector('.v_navOverlay');

const open = (element) => {
    element.classList.add('is-open');
    element.style.display = 'block';
    element.style.opacity = 0;
    element.style.overflow = 'inherit';

    const { width, left } = element.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const diff = Math.max(left + width - viewportWidth, 0);

    if (diff > 0) {
        element.style.left = `-${diff + 25}px`;
    }

    element.style.opacity = 1;
};

const close = (element) => {
    element.classList.remove('is-open');
    element.style.opacity = 0;
    element.style.display = 'none';
    element.style.left = '0';
    element.style.right = 'unset';
    element.style.overflow = 'hidden';
};

const toggleElement = ({ element, dropdown, action }) => {
    if (!action) {
        element.classList.toggle('is-open');
        open(dropdown);
    }

    if (action === 'open') {
        element.classList.add('is-open');
        open(dropdown);
    }

    if (action === 'close') {
        element.classList.remove('is-open');
        close(dropdown);
    }
};

const openMenu = ({ e }) => {
    e.preventDefault();
    body.classList.add('has-activeNavPages');
    header.classList.add('is-open');
    menu.classList.add('is-open');

    setTimeout(() => {
        navWrapper.style.transform = 'translateX(0)';
    }, 100); // 100ms to start the animation
};

const closeMenu = ({ e }) => {
    e.preventDefault();
    body.classList.remove('has-activeNavPages');
    header.classList.remove('is-open');
    navWrapper.style.transform = '';

    setTimeout(() => {
        menu.classList.remove('is-open');
    }, 400); // 300ms is the transition duration
};

const toggleMobileMenu = () => {
    btnOpen.addEventListener('click', (e) => {
        console.log(menu.classList.contains('is-open'));
        if (menu.classList.contains('is-open')) {
            closeMenu({
                e, body, header, menu,
            });
        } else {
            openMenu({
                e, body, header, menu,
            });
        }
    });
    btnClose.addEventListener('click', (e) => closeMenu({
        e, body, header, menu,
    }));
    overlay.addEventListener('click', (e) => closeMenu({
        e, body, header, menu,
    }));
};

const toggleMobileDropdown = ({ dropdown, action }) => {
    if (action === 'open') {
        dropdown.style.display = 'block';
        navigationList.style.transform = 'translateX(-100%)';

        return;
    }

    if (action === 'openSubnav') {
        dropdown.style.display = 'block';
        navigationList.style.transform = 'translateX(-200%)';

        return;
    }

    if (action === 'closeSubnav') {
        dropdown.style.display = 'block';
        navigationList.style.transform = 'translateX(-100%)';

        return;
    }

    if (action === 'close') {
        navigationList.style.transform = 'translateX(0)';

        setTimeout(() => {
            dropdown.style.display = 'none';
        }, 400); // 300ms is the transition duration, 100ms is the delay
    }
};

const setObserver = () => {
    const observer = new ResizeObserver((entries) => {
        entries.forEach(() => {
            if (window.innerWidth > MOBILE_BREAKPOINT && flag) {
                navigationList.style.transform = 'translateX(0)';

                closeMenu({
                    e: { preventDefault: () => {} },
                    body,
                    header,
                    menu,
                });

                flag = false;
            }

            if (window.innerWidth <= MOBILE_BREAKPOINT) {
                flag = true;
            }
        });
    });

    observer.observe(document.querySelector('body'));
};

export default function YSWDropDownController() {
    toggleMobileMenu();

    const dropdowns = document.querySelectorAll('[data-ysw-dropdown]');
    const tabs = document.querySelectorAll('.navPages-submenu-tab-item');

    if (!dropdowns.length) return;

    navigationList = document.querySelector('.navPages-upper-list');
    setObserver();

    dropdowns.forEach((element) => {
        const dropdown = document.getElementById(element.dataset.yswDropdown);
        const action = element.querySelector('.navPages-upper-action');

        element.addEventListener('mouseenter', () => {
            if (window.innerWidth <= MOBILE_BREAKPOINT) return;

            toggleElement({
                element,
                dropdown,
                action: 'open',
            });
        });

        element.addEventListener('mouseleave', () => {
            if (window.innerWidth <= MOBILE_BREAKPOINT) return;

            toggleElement({
                element,
                dropdown,
                action: 'close',
            });
        });

        if (!action) return;

        action.addEventListener('click', (e) => {
            if (window.innerWidth > MOBILE_BREAKPOINT) return;

            e.preventDefault();

            toggleMobileDropdown({
                dropdown,
                action: 'open',
            });
        });

        const closeBtn = dropdown.querySelector('.ysw-w-navigation__action--back');

        if (!closeBtn) return;

        closeBtn.addEventListener('click', () => {
            toggleMobileDropdown({
                dropdown,
                action: 'close',
            });
        });
    });

    if (tabs.length) {
        tabs.forEach((element) => {
            let tabContent = document.getElementById(element.getAttribute('aria-controls'));

            if (!tabContent) return;

            tabContent = tabContent.parentElement;
    
            element.addEventListener('click', (e) => {
                if (window.innerWidth > MOBILE_BREAKPOINT) return;
    
                e.preventDefault();
    
                toggleMobileDropdown({
                    dropdown: tabContent,
                    action: 'openSubnav',
                });
            });

            const closeBtns = tabContent.querySelectorAll('.ysw-w-navigation__action--back');
            if (!closeBtns) return;
    
            closeBtns.forEach((closeBtn) => {
                closeBtn.addEventListener('click', () => {
                    toggleMobileDropdown({
                        dropdown: tabContent,
                        action: 'closeSubnav',
                    });
                });
            });
        });
    }
}
