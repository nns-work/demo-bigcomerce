class YSWProductSet {
    constructor(context) {
        this.context = context;
        this.products = document.querySelectorAll('[data-product-set="true"] [data-product-id]');

        this.init();
    }

    init() {
        if (!this.products.length) return;

        this.getProducts();
    }

    getProducts() {
        const graphqlToken = window.theme_settings.sf_tk;

        fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${graphqlToken}`,
            },
            body: JSON.stringify({
                query: this.getGraphqlData(),
            }),
        })
            .then(res => res.json())
            .then(res => {
                const data = res.data.site;
                const products = [];

                if (typeof data !== 'undefined') {
                    Object.values(data).forEach((item) => {
                        item.edges.forEach((element) => {
                            products.push(element.node);
                        });
                    });
                }

                if (!products.length) return;

                products.forEach(index => this.cardRender(index));
            })
            // eslint-disable-next-line
            .catch(err => {
                throw new Error(err);
            });
    }

    getIds(content) {
        const ids = [];

        content.querySelectorAll('[data-product-id]').forEach(item => {
            ids.push(Number(item.dataset.productId));
        });

        return ids;
    }

    cardRender(item) {
        const product = {
            id: item.entityId,
            name: item.name,
            url: item.path,
            sku: item.sku,
            priceOur: item.prices.price.value,
            priceList: item.prices.basePrice.value,
        };

        if (product.length === 0) return;

        const cards = document.querySelectorAll(`[data-product-id="${product.id}"]`);

        if (!cards) return;

        Array.from(cards).forEach(card => {
            if (card.classList.contains('ysw-loaded')) return null;

            const title = card.querySelector('[data-product-title]') || { dataset: { productTitle: '' }, textContent: '' };
            const price = card.querySelector('[data-product-price]') || { dataset: { price: 0 }, innerHTML: '' };
            const urls = card.querySelectorAll('[data-product-url]') || { dataset: { productUrl: '' }, href: '' };

            title.dataset.productName = product.name;
            title.innerHTML = product.name;
            price.dataset.productPrice = `$${product.priceOur}`;
            price.innerHTML = `$${product.priceOur}`;
            urls.forEach(url => {
                url.href = product.url;
            });

            card.classList.add('ysw-loaded');
        });
    }

    getGraphqlData() {
        const data = Array.from(this.products).map(item => Number(item.dataset.productId));
        const ids = data.filter((item, index) => data.indexOf(item) === index);
        const range = (Math.ceil(ids.length / 10));
        let queries = '';

        for (let i = 0; i < range; i++) {
            const idRange = ids.slice(i * 10, (i + 1) * 10);

            queries += `product_list_${i}:products(entityIds: [${idRange}]) { edges { node {...ProductFields } } }`;
        }

        const products = `
            query ProductsQuery {
                site {${queries}}
            }

            fragment ProductFields on Product {
                entityId
                name
                path
                prices {
                    basePrice {
                        ...MoneyFields
                    }
                    price {
                        ...MoneyFields
                    }
                }
            }

            fragment MoneyFields on Money {
                value
            }
        `;

        return products;
    }
}

export default function YSWProductSetFactory(context) {
    if (this instanceof YSWProductSet) {
        this.context = context;
    } else {
        return new YSWProductSet(context);
    }
}
