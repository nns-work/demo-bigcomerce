import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import $ from 'jquery';
import FacetedSearch from './common/faceted-search';
import athleticLoaded from './athletic/category';
import YSWCategoryFactory from './ysw/category';

export default class Category extends CatalogPage {
    onReady() {
        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }
        athleticLoaded();
        YSWCategoryFactory(this.context);
    }

    initFacetedSearch() {
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const $facetedSearchResultTotal = $('#faceted-search-result-total');
        const productsPerPage = this.context.categoryProductsPerPage;
        const requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
                productCount: 'category/product-count',
            },
            showMore: 'category/show-more',
        };


        if ( $facetedSearchResultTotal.length > 0 ) {
            $facetedSearchResultTotal.prependTo('.facetedSearch__selected-filters');
        }

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);
            $facetedSearchResultTotal.html(content.productCount);
            let result = content.productCount;
            if ( result == '1 results' ) {
                result = '1 result';
            }
            $facetedSearchResultTotal.html(result);

            if ( $facetedSearchResultTotal.length > 0 ) {
                $facetedSearchResultTotal.prependTo('.facetedSearch__selected-filters');
            }

            $('html, body').animate({
                scrollTop: 0,
            }, 100);

            if (window.trustspot_init) {
                window.trustspot_init(undefined, '#product-listing-container');
            }
        });
    }
}
