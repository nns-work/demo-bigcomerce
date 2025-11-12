const markdownToHTML = (texto) => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const textParsed = texto.replace(regex, '<a href="$2">$1</a>');

    return textParsed;
};

const renderdynamicContent = (accordionContent) => {
    accordionContent.forEach((content) => {
        const tabContentName = content.getAttribute('data-accordion-dynamic');

        if (!tabContentName) {
            content.classList.remove('loading');

            return;
        }

        const $contentTab = content.querySelector(`[data-ysw-tab-content="${tabContentName}"]`);

        if (!$contentTab) {
            content.parentElement.remove();

            return;
        }

        content.classList.remove('loading');
        content.innerHTML = $contentTab.innerHTML;

        if (!content.classList.contains('ysw-c-accordion-info__content--faqs')) return;

        const faqs = Array.from(content.children);
        const accordions = [];

        if (tabContentName !== 'product-faqs') return;

        faqs.forEach((faq) => {
            const faqHeader = faq.firstElementChild;
            const faqContent = faqHeader.nextElementSibling;
            const details = document.createElement('details');
            const summary = document.createElement('summary');

            summary.innerHTML = `
                <div class="icon" aria-hidden="true">
                    <svg class="less">
                        <use xlink:href="#icon-minus-sharp-solid" />
                    </svg>
                    <svg class="more">
                        <use xlink:href="#icon-plus-sharp-solid" />
                    </svg>
                </div>
                ${faqHeader.outerHTML}`;

            details.appendChild(summary);
            details.appendChild(faqContent);

            accordions.push(details);
        });

        content.innerHTML = '';

        accordions.forEach((accordion) => {
            content.appendChild(accordion);
        });
    });

    const ArrayList = Array.from(accordionContent);

    if (ArrayList.length <= 0) return;

    ArrayList.shift().parentElement.setAttribute('open', '');
};

const renderMarkdown = (accordionContent) => {
    accordionContent.forEach((content) => {
        const markdownElements = content.querySelectorAll('[data-markdown]');

        markdownElements.forEach(element => {
            const markdown = element.innerHTML;

            element.innerHTML = markdownToHTML(markdown);
        });
    });
};

const removeLoadingClass = (accordionHeader) => {
    accordionHeader.forEach((header) => {
        header.classList.remove('loading');
    });
};

const yswAccordionRenderController = () => {
    const accordionHeader = document.querySelectorAll('[data-accordion-header]');
    const accordionContent = document.querySelectorAll('[data-accordion-content]');

    renderdynamicContent(accordionContent);
    renderMarkdown(accordionContent);
    removeLoadingClass(accordionHeader);
};

export default yswAccordionRenderController;
