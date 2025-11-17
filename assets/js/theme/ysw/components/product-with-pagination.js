function goToTop(target) {
    const targetTop = target.getBoundingClientRect().top + window.pageYOffset - 300;

    window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
    });
}

function toggleHidden(element, shouldHide) {
    if (element) {
        element.classList.toggle('ysw-u-hidden', shouldHide);
    }
}

function getSiblingItem(activeItem, item) {
    if (item.dataset.prev) {
        return activeItem.previousElementSibling;
    } else if (item.dataset.next) {
        return activeItem.nextElementSibling;
    }

    return null;
}

function getNextOrPrevItem(activeItem, siblingItem, nextItem, prevItem) {
    const _nextItem = siblingItem.nextElementSibling;
    const _prevItem = siblingItem.previousElementSibling;

    if (nextItem === _nextItem || prevItem === _prevItem) {
        return nextItem === _nextItem ? _nextItem : _prevItem;
    }

    return null;
}

function updateProductListVisibility(widget, targetItem) {
    const currentList = widget.querySelector('.featured-products__product-list:not(.ysw-u-hidden)');
    toggleHidden(currentList, true);
    toggleHidden(targetItem, false);
    goToTop(targetItem);
}

function clickSiblingButton(siblingItem) {
    const button = siblingItem.querySelector('.pagination-link');
    if (button) {
        button.click();
    }
}

function handlePagination(item, widget) {
    const activeItem = widget.querySelector('.pagination-item--current');

    if (!activeItem || item.parentElement.classList.contains('pagination-link--current')) {
        return;
    }

    const prevItem = widget.querySelector('.pagination-item--previous');
    const nextItem = widget.querySelector('.pagination-item--next');

    toggleHidden(prevItem, false);
    toggleHidden(nextItem, false);

    const siblingItem = getSiblingItem(activeItem, item);

    if (siblingItem) {
        siblingItem.classList.add('pagination-item--current');

        const targetItem = getNextOrPrevItem(activeItem, siblingItem, nextItem, prevItem);

        if (targetItem) {
            updateProductListVisibility(widget, targetItem);
        } else {
            clickSiblingButton(siblingItem);
        }
    }
}

function handleListVisibility(item, widget) {
    const currentList = widget.querySelector('.featured-products__product-list:not(.ysw-u-hidden)');
    const targetList = widget.querySelector(`[data-list="${item.dataset.target}"][data-widget="${item.dataset.widget}"]`);

    if (currentList && targetList && currentList !== targetList) {
        toggleHidden(currentList, true);
        toggleHidden(targetList, false);

        goToTop(targetList);

        const paginationLinks = widget.querySelectorAll('.pagination-link');
        paginationLinks.forEach(_link => {
            _link.parentElement.classList.remove('pagination-item--current');
        });

        if (!item.parentElement.classList.contains('pagination-link--next') || !item.parentElement.classList.contains('pagination-link--previous')) {
            item.parentElement.classList.add('pagination-item--current');
        }

        const prevItem = widget.querySelector('.pagination-item--previous');
        const nextItem = widget.querySelector('.pagination-item--next');

        toggleHidden(prevItem, prevItem === item.parentElement.previousElementSibling);
        toggleHidden(nextItem, nextItem === item.parentElement.nextElementSibling);
    }
}

function handleClick(e) {
    e.preventDefault();
    const item = e.currentTarget;
    const widget = item.closest('.ysw-w-product-alternative');

    if (!item.parentElement.classList.contains('pagination-link--current')) {
        handlePagination(item, widget);
        handleListVisibility(item, widget);
    }
}

const YswProductWithPagination = () => {
    const widgets = document.querySelectorAll('.ysw-w-product-alternative');

    widgets.forEach(widget => {
        const paginationLinks = widget.querySelectorAll('.pagination-link');
        paginationLinks.forEach(link => {
            link.addEventListener('click', handleClick);
        });
    });
};

export default YswProductWithPagination;
