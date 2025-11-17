// Query for products in a category
// Category ID: is the ID of the category you want to get products from
// Page Size: is the number of products you want to return
// Replace categoryId with the category ID and pageSize with the number of products to return

const productsByCategory = `
    query productsInCategory{
        site {
            category(entityId: [categoryId]) {
                name
                entityId
                products(first: [productsQty], sortBy: DEFAULT) {
                    edges {
                        node {
                            name
                            sku
                            entityId
                            path
                            defaultImage {
                                url(width: 500)
                                altText
                            }
                            prices {
                                price {
                                    value
                                }
                                salePrice {
                                    value
                                }
                                basePrice {
                                    value
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export { productsByCategory };
