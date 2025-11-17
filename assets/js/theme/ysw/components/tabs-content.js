export default function YSWTabsContent() {
    const tabContents = document.querySelectorAll('[data-tabs-content="true"]');

    tabContents.forEach(tabContent => {
        const tabs = tabContent.querySelectorAll('[data-tab-title]');
        const contents = tabContent.querySelectorAll('[data-tab-content]');

        tabs.forEach(t => t.classList.remove('ysw-is-active'));
        contents.forEach(content => content.classList.remove('ysw-is-active'));

        document.querySelectorAll(`[data-tab-title="${tabs[0].dataset.tabTitle}"]`).forEach(t => {
            t.classList.add('ysw-is-active');
        });

        contents[tabs[0].dataset.tabTitle].classList.add('ysw-is-active');

        tabs.forEach((tab) => {
            tab.addEventListener('click', e => {
                let band = false;

                tabs.forEach(t => {
                    if (t === e.currentTarget && t.classList.contains('ysw-is-active') && !tabContent.dataset.tabAlways && window.innerWidth < 1024) band = true;

                    t.classList.remove('ysw-is-active');
                });

                contents.forEach(content => content.classList.remove('ysw-is-active'));

                if (!band) {
                    tabContent.querySelectorAll(`[data-tab-title="${e.currentTarget.dataset.tabTitle}"]`).forEach(t => t.classList.add('ysw-is-active'));
                    contents[e.currentTarget.dataset.tabTitle].classList.add('ysw-is-active');
                }
            });
        });
    });
}
