const createPagination = ({ container, productsQty, itemPerPage }) => {
    const totalItems = productsQty;
    const totalPages = Math.ceil(totalItems / itemPerPage);

    const createPaginationItem = ({ type }) => {
        const item = document.createElement('li');
        item.classList.add('pagination-item');

        if (type) item.classList.add(`pagination-item--${type}`);
        if (type === 'current') item.classList.add('pagination-item--current');

        return item;
    };

    const createPaginationLink = ({ page }) => {
        const link = document.createElement('button');
        link.classList.add('pagination-link');
        link.setAttribute('data-page', page);
        link.innerHTML = page;
        return link;
    };

    const createNavigationButton = ({ type, content, callback }) => {
        const button = createPaginationItem({ type });
        const link = createPaginationLink({ page: content });
        link.addEventListener('click', callback);
        button.appendChild(link);
        return button;
    };

    const handlePaginationClick = ({ e, type }) => {
        const target = e.currentTarget;
        const parent = target.parentElement;

        if (parent.classList.contains('pagination-item--current')) return;

        container.classList.add('is-change-page');

        const currentPageElement = parent.parentElement.querySelector('.pagination-item--current');
        currentPageElement.classList.remove('pagination-item--current');

        let page = null;

        if (type === 'previous') {
            page = Number(currentPageElement.querySelector('.pagination-link').dataset.page) - 1;
            const prevPageElement = currentPageElement.previousElementSibling;
            prevPageElement.classList.add('pagination-item--current');
        } else if (type === 'next') {
            page = Number(currentPageElement.querySelector('.pagination-link').dataset.page) + 1;
            const nextPageElement = currentPageElement.nextElementSibling;
            nextPageElement.classList.add('pagination-item--current');
        } else {
            page = Number(target.dataset.page);
            parent.classList.add('pagination-item--current');
        }

        const products = container.querySelectorAll('.featured-products__product-item');

        setTimeout(() => {
            products.forEach((product, index) => {
                const isVisible = index >= (page - 1) * itemPerPage && index < page * itemPerPage;
                product.classList.toggle('ysw-u-hidden', !isVisible);
            });

            container.classList.add('is-changed-page');
        }, 300);

        const prevButton = parent.parentElement.querySelector('.pagination-item--previous');
        const nextButton = parent.parentElement.querySelector('.pagination-item--next');

        prevButton.classList.toggle('ysw-u-hidden', page === 1);
        nextButton.classList.toggle('ysw-u-hidden', page === totalPages);
    };

    const paginationWrapper = document.createElement('div');
    paginationWrapper.classList.add('pagination');

    const paginationList = document.createElement('ul');
    paginationList.classList.add('pagination-list');

    if (totalPages === 1) {
        paginationWrapper.classList.add('ysw-u-hidden');
        return paginationWrapper;
    }

    const prevItemString = `
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-chevron-left"></use>
        </svg>
        Previous`;

    const nextItemString = `
        Next
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-chevron-right"></use>
        </svg>`;

    const prevItem = createNavigationButton({
        type: 'previous',
        content: prevItemString,
        callback: (e) => handlePaginationClick({ e, type: 'previous' }),
    });

    prevItem.classList.add('ysw-u-hidden');

    const nextItem = createNavigationButton({
        type: 'next',
        content: nextItemString,
        callback: (e) => handlePaginationClick({ e, type: 'next' }),
    });

    const paginationItems = Array.from({ length: totalPages }, (_, index) => {
        const item = createPaginationItem({ type: (!index ? 'current' : '') });
        const link = createPaginationLink({ page: index + 1 });
        link.addEventListener('click', (e) => handlePaginationClick({ e }));
        item.appendChild(link);
        return item;
    });

    paginationList.appendChild(prevItem);
    paginationList.append(...paginationItems);
    paginationList.appendChild(nextItem);
    paginationWrapper.appendChild(paginationList);

    return paginationWrapper;
};

export default createPagination;
