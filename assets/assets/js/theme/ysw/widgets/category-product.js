import { productsByCategory } from './../utils/queries';
import getData from './../utils/getGraphQlData';
import createPagination from './../controllers/pagination.controller';

class YswCategoryProductSet {
    constructor(context) {
        this.context = context;
        this.categories = [];
        this.storefrontApiToken = this.context.storefrontApiToken;
        this.productsPerPage = 15;
        this.productsQty = 50;
        this.query = '';
        this.init();
    }

    init() {
        const categoriesWidget = document.querySelectorAll('[data-ysw-category-id]');
        this.categories = Array.from(categoriesWidget);

        categoriesWidget.forEach(async (widget) => {
            const categoryId = Number(widget.dataset.yswCategoryId);
            const productsQty = Number(widget.dataset.yswProductsQty) > 0 ? Number(widget.dataset.yswProductsQty) : this.productsQty;

            const options = {
                token: this.storefrontApiToken,
                query: this.transformQuery({ query: productsByCategory, categoryId, productsQty }),
            };
            const data = await getData(options);
            const transfromData = this.transfromData(data);

            this.renderProduct({ data: transfromData, container: widget });

            if (!window.trustspotInit) return;

            window.trustspotInit();
        });
    }

    transformQuery({ query, categoryId, productsQty }) {
        const queryTransformed = query.replace('[categoryId]', categoryId)
            .replace('[productsQty]', productsQty);

        return queryTransformed;
    }

    transfromData({ data }) {
        if (!data) throw new Error('Category not found');

        const category = data.site.category;
        const products = category.products.edges.map(product => product.node);

        return {
            name: category.name,
            entityId: category.entityId,
            products,
        };
    }

    renderProduct({ data, container }) {
        const categoryTitle = container.querySelector('[data-ysw-category-heading]');

        if (categoryTitle) {
            categoryTitle.textContent = data.name;
        }

        const category = container.querySelector('.featured-products__product-list');

        if (!category) return;

        const productsHtml = data.products.map((product, index) => this.cardHtml(product, index)).join('');
        category.innerHTML = productsHtml;
        category.style.maxHeight = `${category.scrollHeight}px`;
        category.classList.add('is-loaded');

        const paginationOptions = {
            productsQty: data.products.length,
            container: category,
            itemPerPage: this.productsPerPage,
        };

        category.parentNode.appendChild(createPagination(paginationOptions));
        this.changePageObserver(category);
        this.resizeObserver();
    }

    cardHtml(product, index) {
        const image = `
            <img
                src="${product.defaultImage.url}"
                alt="${product.defaultImage.altText}"
                title="${product.defaultImage.altText}"
                loading="lazy"
            >
        `;

        return `
            <li class="featured-products__product-item ${index + 1 > this.productsPerPage ? 'ysw-u-hidden' : ''}">
                <div class="featured-products__product featured-product">
                    <a class="featured-product__image-link featured-product__image-link--auto" href="${product.path}">
                        ${image}
                    </a>
                    <div class="featured-product__info">
                        <h4>
                            <a
                                href="${product.path}"
                                style="-webkit-box-orient: vertical;"
                            >
                                ${product.name}
                            </a>
                        </h4>
                        <footer class="featured-product__footer">
                            <div class="featured-product__info-row">
                                <span class="featured-product__price">$${product.prices.price.value.toFixed(2)}</span>
                                <div class="trustspot-inline-category" data-product-sku="${product.entityId}">
                                </div>
                            </div>
                            <a href="${product.path}" class="btn-new btn-new--primary">Shop Now</a>
                        </footer>
                    </div>
                </div>
            </li>`;
    }

    changePageObserver(list) {
        const fn = (mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName !== 'class') return;

                const target = mutation.target;
                const classList = target.classList;

                if (classList.contains('is-change-page')) {
                    classList.remove('is-change-page');

                    target.style.opacity = 0;

                    setTimeout(() => {
                        const targetHeight = target.scrollHeight;
                        target.style.height = `${targetHeight}px`;
                        target.style.maxHeight = `${targetHeight}px`;

                        const section = target.parentElement;
                        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
                        const header = document.querySelector('.header');
                        const headerHeight = header.getBoundingClientRect().height;

                        window.scrollTo({
                            top: sectionTop - headerHeight,
                            behavior: 'smooth',
                        });
                    }, 300);
                } else if (classList.contains('is-changed-page')) {
                    classList.remove('is-changed-page');

                    setTimeout(() => {
                        target.style.height = 'auto';
                        target.style.opacity = 1;
                    }, 500);
                }
            });
        };

        const observer = new MutationObserver(fn);

        observer.observe(list, {
            attributes: true,
        });
    }

    resizeObserver() {
        const observer = new ResizeObserver((entries) => {
            entries.forEach(() => {
                this.categories.forEach((category) => {
                    const list = category.querySelector('.featured-products__product-list');

                    if (!list) return;

                    list.style.maxHeight = 'none';
                });
            });
        });

        this.categories.forEach(() => {
            observer.observe(document.body);
        });
    }
}

export default function YswCategoryProductSetFactory(context) {
    if (this instanceof YswCategoryProductSet) {
        this.context = context;
    } else {
        return new YswCategoryProductSet(context);
    }
}
