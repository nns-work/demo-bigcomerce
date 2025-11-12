"use strict";
(self["webpackChunksecond_skin_audio"] = self["webpackChunksecond_skin_audio"] || []).push([["assets_js_theme_category_js"],{

/***/ "./assets/js/theme/athletic/category.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/athletic/category.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loaded)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

function loaded() {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default().trim(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-sidebar').text()) === '') {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-sidebar').remove();
  }
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#facetedSearch').length <= 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.toggleSidebarBlock').on('click', function toggleLink(e) {
      e.preventDefault();
      var toggleEleId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href').replace('#', '');
      var toggleEle = document.getElementById(toggleEleId);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('is-open');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(toggleEle).toggleClass('is-open');
    });
  }

  // subcategory display
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-content-subcategories .image-wrap:not(.image-placeholder)').length > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-content-subcategories ul').addClass('subcategory-grid');
  }
}

/***/ }),

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _athletic_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./athletic/category */ "./assets/js/theme/athletic/category.js");
/* harmony import */ var _ysw_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ysw/category */ "./assets/js/theme/ysw/category.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var Category = /*#__PURE__*/function (_CatalogPage) {
  function Category() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  _inheritsLoose(Category, _CatalogPage);
  var _proto = Category.prototype;
  _proto.onReady = function onReady() {
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
    (0,_athletic_category__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_ysw_category__WEBPACK_IMPORTED_MODULE_5__["default"])(this.context);
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var $productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#product-listing-container');
    var $facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#faceted-search-container');
    var $facetedSearchResultTotal = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#faceted-search-result-total');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar',
        productCount: 'category/product-count'
      },
      showMore: 'category/show-more'
    };
    if ($facetedSearchResultTotal.length > 0) {
      $facetedSearchResultTotal.prependTo('.facetedSearch__selected-filters');
    }
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $facetedSearchResultTotal.html(content.productCount);
      var result = content.productCount;
      if (result == '1 results') {
        result = '1 result';
      }
      $facetedSearchResultTotal.html(result);
      if ($facetedSearchResultTotal.length > 0) {
        $facetedSearchResultTotal.prependTo('.facetedSearch__selected-filters');
      }
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('html, body').animate({
        scrollTop: 0
      }, 100);
      if (window.trustspot_init) {
        window.trustspot_init(undefined, '#product-listing-container');
      }
    });
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/ysw/category.js":
/*!*****************************************!*\
  !*** ./assets/js/theme/ysw/category.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YSWCategoryFactory)
/* harmony export */ });
/* harmony import */ var _components_product_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/product-set */ "./assets/js/theme/ysw/components/product-set.js");
/* harmony import */ var _components_contact_us__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contact-us */ "./assets/js/theme/ysw/components/contact-us.js");


var YSWCategory = /*#__PURE__*/function () {
  function YSWCategory(context) {
    this.context = context;
    this.init();
  }
  var _proto = YSWCategory.prototype;
  _proto.init = function init() {
    // Your code here.
    (0,_components_product_set__WEBPACK_IMPORTED_MODULE_0__["default"])(this.context);
    (0,_components_contact_us__WEBPACK_IMPORTED_MODULE_1__["default"])();
  };
  return YSWCategory;
}();
function YSWCategoryFactory(context) {
  if (this instanceof YSWCategory) {
    this.context = context;
  } else {
    return new YSWCategory(context);
  }
}

/***/ }),

/***/ "./assets/js/theme/ysw/components/contact-us.js":
/*!******************************************************!*\
  !*** ./assets/js/theme/ysw/components/contact-us.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YSWContactUSForm)
/* harmony export */ });
function YSWContactUSForm() {
  var form = document.getElementById('ysw-js-form-contact');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var formKey = form.formKey.value;
    var name = form.name.value;
    var email = form.email.value;
    var numberPhone = form.numberPhone.value;
    var project = form.project.value;
    var message = form.message.value;
    var options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        formKey: formKey,
        name: name,
        email: email,
        numberPhone: numberPhone,
        project: project,
        message: message
      })
    };
    try {
      var xhr = new XMLHttpRequest();

      // eslint-disable-next-line func-names
      xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          var container = document.querySelector('.ysw-c-contact-us .container');
          container.innerHTML = "\n                        <h2 class=\"ysw-c-contact-us__title\">\n                            Thanks for reaching out!\n                        </h2>\n                        <p class=\"ysw-c-contact-us__text\">\n                            We'll be in touch soon.\n                        </p>\n                    ";
        }
        if (this.readyState === 400 && this.status === 404 && this.status === 403) {
          var _container = document.querySelector('.ysw-c-contact-us .container');
          _container.innerHTML = "\n                    <h2 class=\"ysw-c-contact-us__title\">\n                        Sorry! We have encountered an error\n                    </h2>\n                    <p class=\"ysw-c-contact-us__text\">\n                        Please refresh the page and try again. If the error persists please reach out to us via the <a href='/contact-us'>contact us form</a>\n                    </p>\n                    ";
        }
      };
      xhr.open('POST', 'https://hooks.zapier.com/hooks/catch/3632704/bwll8fe/');
      xhr.send(JSON.stringify({
        options: options
      }));
    } catch (_e) {
      console.error(_e);
    }
  });
}

/***/ }),

/***/ "./assets/js/theme/ysw/components/product-set.js":
/*!*******************************************************!*\
  !*** ./assets/js/theme/ysw/components/product-set.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YSWProductSetFactory)
/* harmony export */ });
var YSWProductSet = /*#__PURE__*/function () {
  function YSWProductSet(context) {
    this.context = context;
    this.products = document.querySelectorAll('[data-product-set="true"] [data-product-id]');
    this.init();
  }
  var _proto = YSWProductSet.prototype;
  _proto.init = function init() {
    if (!this.products.length) return;
    this.getProducts();
  };
  _proto.getProducts = function getProducts() {
    var _this = this;
    var graphqlToken = window.theme_settings.sf_tk;
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + graphqlToken
      },
      body: JSON.stringify({
        query: this.getGraphqlData()
      })
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      var data = res.data.site;
      var products = [];
      if (typeof data !== 'undefined') {
        Object.values(data).forEach(function (item) {
          item.edges.forEach(function (element) {
            products.push(element.node);
          });
        });
      }
      if (!products.length) return;
      products.forEach(function (index) {
        return _this.cardRender(index);
      });
    })
    // eslint-disable-next-line
    ["catch"](function (err) {
      throw new Error(err);
    });
  };
  _proto.getIds = function getIds(content) {
    var ids = [];
    content.querySelectorAll('[data-product-id]').forEach(function (item) {
      ids.push(Number(item.dataset.productId));
    });
    return ids;
  };
  _proto.cardRender = function cardRender(item) {
    var product = {
      id: item.entityId,
      name: item.name,
      url: item.path,
      sku: item.sku,
      priceOur: item.prices.price.value,
      priceList: item.prices.basePrice.value
    };
    if (product.length === 0) return;
    var cards = document.querySelectorAll("[data-product-id=\"" + product.id + "\"]");
    if (!cards) return;
    Array.from(cards).forEach(function (card) {
      if (card.classList.contains('ysw-loaded')) return null;
      var title = card.querySelector('[data-product-title]') || {
        dataset: {
          productTitle: ''
        },
        textContent: ''
      };
      var price = card.querySelector('[data-product-price]') || {
        dataset: {
          price: 0
        },
        innerHTML: ''
      };
      var urls = card.querySelectorAll('[data-product-url]') || {
        dataset: {
          productUrl: ''
        },
        href: ''
      };
      title.dataset.productName = product.name;
      title.innerHTML = product.name;
      price.dataset.productPrice = "$" + product.priceOur;
      price.innerHTML = "$" + product.priceOur;
      urls.forEach(function (url) {
        url.href = product.url;
      });
      card.classList.add('ysw-loaded');
    });
  };
  _proto.getGraphqlData = function getGraphqlData() {
    var data = Array.from(this.products).map(function (item) {
      return Number(item.dataset.productId);
    });
    var ids = data.filter(function (item, index) {
      return data.indexOf(item) === index;
    });
    var range = Math.ceil(ids.length / 10);
    var queries = '';
    for (var i = 0; i < range; i++) {
      var idRange = ids.slice(i * 10, (i + 1) * 10);
      queries += "product_list_" + i + ":products(entityIds: [" + idRange + "]) { edges { node {...ProductFields } } }";
    }
    var products = "\n            query ProductsQuery {\n                site {" + queries + "}\n            }\n\n            fragment ProductFields on Product {\n                entityId\n                name\n                path\n                prices {\n                    basePrice {\n                        ...MoneyFields\n                    }\n                    price {\n                        ...MoneyFields\n                    }\n                }\n            }\n\n            fragment MoneyFields on Money {\n                value\n            }\n        ";
    return products;
  };
  return YSWProductSet;
}();
function YSWProductSetFactory(context) {
  if (this instanceof YSWProductSet) {
    this.context = context;
  } else {
    return new YSWProductSet(context);
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFFUixTQUFTQyxNQUFNQSxDQUFBLEVBQUc7RUFDN0IsSUFBSUQsa0RBQU0sQ0FBQ0EsNkNBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0csSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUMxQ0gsNkNBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0ksTUFBTSxDQUFDLENBQUM7RUFDL0I7RUFFQSxJQUFJSiw2Q0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNLLE1BQU0sSUFBSSxDQUFDLEVBQUU7SUFDakNMLDZDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQ00sRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTQyxVQUFVQSxDQUFDQyxDQUFDLEVBQUU7TUFDeERBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFDbEIsSUFBTUMsV0FBVyxHQUFHViw2Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDVyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO01BQ3pELElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUNMLFdBQVcsQ0FBQztNQUN0RFYsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2dCLFdBQVcsQ0FBQyxTQUFTLENBQUM7TUFDOUJoQiw2Q0FBQyxDQUFDYSxTQUFTLENBQUMsQ0FBQ0csV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUN2QyxDQUFDLENBQUM7RUFDTjs7RUFFQTtFQUNBLElBQUloQiw2Q0FBQyxDQUFDLGlFQUFpRSxDQUFDLENBQUNLLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDakZMLDZDQUFDLENBQUMsZ0NBQWdDLENBQUMsQ0FBQ2lCLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztFQUNwRTtBQUNKLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEVBQUM7SUFDbEYsSUFBTUgsR0FBRyxHQUFHZixJQUFJLENBQUM4QyxNQUFNLENBQUMsVUFBQ3pDLElBQUksRUFBRUssS0FBSztNQUFBLE9BQUtWLElBQUksQ0FBQytDLE9BQU8sQ0FBQzFDLElBQUksQ0FBQyxLQUFLSyxLQUFLO0lBQUEsRUFBQztJQUN0RSxJQUFNc0MsS0FBSyxHQUFJQyxJQUFJLENBQUNDLElBQUksQ0FBQ25DLEdBQUcsQ0FBQ3ZILE1BQU0sR0FBRyxFQUFFLENBQUU7SUFDMUMsSUFBSTJKLE9BQU8sR0FBRyxFQUFFO0lBRWhCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSixLQUFLLEVBQUVJLENBQUMsRUFBRSxFQUFFO01BQzVCLElBQU1DLE9BQU8sR0FBR3RDLEdBQUcsQ0FBQ3VDLEtBQUssQ0FBQ0YsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDQSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztNQUUvQ0QsT0FBTyxzQkFBb0JDLENBQUMsOEJBQXlCQyxPQUFPLDhDQUEyQztJQUMzRztJQUVBLElBQU10SCxRQUFRLG1FQUVFb0gsT0FBTyxxZUFvQnRCO0lBRUQsT0FBT3BILFFBQVE7RUFDbkIsQ0FBQztFQUFBLE9BQUFtRCxhQUFBO0FBQUE7QUFHVSxTQUFTakMsb0JBQW9CQSxDQUFDNUIsT0FBTyxFQUFFO0VBQ2xELElBQUksSUFBSSxZQUFZNkQsYUFBYSxFQUFFO0lBQy9CLElBQUksQ0FBQzdELE9BQU8sR0FBR0EsT0FBTztFQUMxQixDQUFDLE1BQU07SUFDSCxPQUFPLElBQUk2RCxhQUFhLENBQUM3RCxPQUFPLENBQUM7RUFDckM7QUFDSixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Vjb25kLXNraW4tYXVkaW8vLi9hc3NldHMvanMvdGhlbWUvYXRobGV0aWMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vc2Vjb25kLXNraW4tYXVkaW8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vc2Vjb25kLXNraW4tYXVkaW8vLi9hc3NldHMvanMvdGhlbWUveXN3L2NhdGVnb3J5LmpzIiwid2VicGFjazovL3NlY29uZC1za2luLWF1ZGlvLy4vYXNzZXRzL2pzL3RoZW1lL3lzdy9jb21wb25lbnRzL2NvbnRhY3QtdXMuanMiLCJ3ZWJwYWNrOi8vc2Vjb25kLXNraW4tYXVkaW8vLi9hc3NldHMvanMvdGhlbWUveXN3L2NvbXBvbmVudHMvcHJvZHVjdC1zZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZGVkKCkge1xuICAgIGlmICgkLnRyaW0oJCgnLnBhZ2Utc2lkZWJhcicpLnRleHQoKSkgPT09ICcnKSB7XG4gICAgICAgICQoJy5wYWdlLXNpZGViYXInKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPD0gMCkge1xuICAgICAgICAkKCcudG9nZ2xlU2lkZWJhckJsb2NrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gdG9nZ2xlTGluayhlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB0b2dnbGVFbGVJZCA9ICQodGhpcykuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICAgICAgICBjb25zdCB0b2dnbGVFbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2dnbGVFbGVJZCk7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAkKHRvZ2dsZUVsZSkudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc3ViY2F0ZWdvcnkgZGlzcGxheVxuICAgIGlmICgkKCcucGFnZS1jb250ZW50LXN1YmNhdGVnb3JpZXMgLmltYWdlLXdyYXA6bm90KC5pbWFnZS1wbGFjZWhvbGRlciknKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICQoJy5wYWdlLWNvbnRlbnQtc3ViY2F0ZWdvcmllcyB1bCcpLmFkZENsYXNzKCdzdWJjYXRlZ29yeS1ncmlkJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgYXRobGV0aWNMb2FkZWQgZnJvbSAnLi9hdGhsZXRpYy9jYXRlZ29yeSc7XG5pbXBvcnQgWVNXQ2F0ZWdvcnlGYWN0b3J5IGZyb20gJy4veXN3L2NhdGVnb3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICAgICAgYXRobGV0aWNMb2FkZWQoKTtcbiAgICAgICAgWVNXQ2F0ZWdvcnlGYWN0b3J5KHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaFJlc3VsdFRvdGFsID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLXJlc3VsdC10b3RhbCcpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgcHJvZHVjdENvdW50OiAnY2F0ZWdvcnkvcHJvZHVjdC1jb3VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG5cbiAgICAgICAgaWYgKCAkZmFjZXRlZFNlYXJjaFJlc3VsdFRvdGFsLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaFJlc3VsdFRvdGFsLnByZXBlbmRUbygnLmZhY2V0ZWRTZWFyY2hfX3NlbGVjdGVkLWZpbHRlcnMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaFJlc3VsdFRvdGFsLmh0bWwoY29udGVudC5wcm9kdWN0Q291bnQpO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGNvbnRlbnQucHJvZHVjdENvdW50O1xuICAgICAgICAgICAgaWYgKCByZXN1bHQgPT0gJzEgcmVzdWx0cycgKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJzEgcmVzdWx0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoUmVzdWx0VG90YWwuaHRtbChyZXN1bHQpO1xuXG4gICAgICAgICAgICBpZiAoICRmYWNldGVkU2VhcmNoUmVzdWx0VG90YWwubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgICAgICAkZmFjZXRlZFNlYXJjaFJlc3VsdFRvdGFsLnByZXBlbmRUbygnLmZhY2V0ZWRTZWFyY2hfX3NlbGVjdGVkLWZpbHRlcnMnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cudHJ1c3RzcG90X2luaXQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cudHJ1c3RzcG90X2luaXQodW5kZWZpbmVkLCAnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFlTV1Byb2R1Y3RTZXRGYWN0b3J5IGZyb20gJy4vY29tcG9uZW50cy9wcm9kdWN0LXNldCc7XG5pbXBvcnQgWVNXQ29udGFjdFVTRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFjdC11cyc7XG5cbmNsYXNzIFlTV0NhdGVnb3J5IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIFlvdXIgY29kZSBoZXJlLlxuICAgICAgICBZU1dQcm9kdWN0U2V0RmFjdG9yeSh0aGlzLmNvbnRleHQpO1xuICAgICAgICBZU1dDb250YWN0VVNGb3JtKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBZU1dDYXRlZ29yeUZhY3RvcnkoY29udGV4dCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgWVNXQ2F0ZWdvcnkpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFlTV0NhdGVnb3J5KGNvbnRleHQpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFlTV0NvbnRhY3RVU0Zvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5c3ctanMtZm9ybS1jb250YWN0Jyk7XG5cbiAgICBpZiAoIWZvcm0pIHJldHVybjtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1LZXkgPSBmb3JtLmZvcm1LZXkudmFsdWU7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBmb3JtLm5hbWUudmFsdWU7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gZm9ybS5lbWFpbC52YWx1ZTtcbiAgICAgICAgY29uc3QgbnVtYmVyUGhvbmUgPSBmb3JtLm51bWJlclBob25lLnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZm9ybS5wcm9qZWN0LnZhbHVlO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gZm9ybS5tZXNzYWdlLnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBmb3JtS2V5LFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgbnVtYmVyUGhvbmUsXG4gICAgICAgICAgICAgICAgcHJvamVjdCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH07XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0ICYmIHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnlzdy1jLWNvbnRhY3QtdXMgLmNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ5c3ctYy1jb250YWN0LXVzX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoYW5rcyBmb3IgcmVhY2hpbmcgb3V0IVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwieXN3LWMtY29udGFjdC11c19fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlJ2xsIGJlIGluIHRvdWNoIHNvb24uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQwMCAmJiB0aGlzLnN0YXR1cyA9PT0gNDA0ICYmIHRoaXMuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnlzdy1jLWNvbnRhY3QtdXMgLmNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInlzdy1jLWNvbnRhY3QtdXNfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTb3JyeSEgV2UgaGF2ZSBlbmNvdW50ZXJlZCBhbiBlcnJvclxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInlzdy1jLWNvbnRhY3QtdXNfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSByZWZyZXNoIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uIElmIHRoZSBlcnJvciBwZXJzaXN0cyBwbGVhc2UgcmVhY2ggb3V0IHRvIHVzIHZpYSB0aGUgPGEgaHJlZj0nL2NvbnRhY3QtdXMnPmNvbnRhY3QgdXMgZm9ybTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHhoci5vcGVuKCdQT1NUJywgJ2h0dHBzOi8vaG9va3MuemFwaWVyLmNvbS9ob29rcy9jYXRjaC8zNjMyNzA0L2J3bGw4ZmUvJyk7XG4gICAgICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBjYXRjaCAoX2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoX2UpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJjbGFzcyBZU1dQcm9kdWN0U2V0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wcm9kdWN0LXNldD1cInRydWVcIl0gW2RhdGEtcHJvZHVjdC1pZF0nKTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvZHVjdHMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0cygpO1xuICAgIH1cblxuICAgIGdldFByb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCBncmFwaHFsVG9rZW4gPSB3aW5kb3cudGhlbWVfc2V0dGluZ3Muc2ZfdGs7XG5cbiAgICAgICAgZmV0Y2goJy9ncmFwaHFsJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z3JhcGhxbFRva2VufWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLmdldEdyYXBocWxEYXRhKCksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEuc2l0ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGRhdGEpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZWRnZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLnB1c2goZWxlbWVudC5ub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXByb2R1Y3RzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgcHJvZHVjdHMuZm9yRWFjaChpbmRleCA9PiB0aGlzLmNhcmRSZW5kZXIoaW5kZXgpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SWRzKGNvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgaWRzID0gW107XG5cbiAgICAgICAgY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wcm9kdWN0LWlkXScpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZHMucHVzaChOdW1iZXIoaXRlbS5kYXRhc2V0LnByb2R1Y3RJZCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaWRzO1xuICAgIH1cblxuICAgIGNhcmRSZW5kZXIoaXRlbSkge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0ge1xuICAgICAgICAgICAgaWQ6IGl0ZW0uZW50aXR5SWQsXG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICB1cmw6IGl0ZW0ucGF0aCxcbiAgICAgICAgICAgIHNrdTogaXRlbS5za3UsXG4gICAgICAgICAgICBwcmljZU91cjogaXRlbS5wcmljZXMucHJpY2UudmFsdWUsXG4gICAgICAgICAgICBwcmljZUxpc3Q6IGl0ZW0ucHJpY2VzLmJhc2VQcmljZS52YWx1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocHJvZHVjdC5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgICAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXByb2R1Y3QtaWQ9XCIke3Byb2R1Y3QuaWR9XCJdYCk7XG5cbiAgICAgICAgaWYgKCFjYXJkcykgcmV0dXJuO1xuXG4gICAgICAgIEFycmF5LmZyb20oY2FyZHMpLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICBpZiAoY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ3lzdy1sb2FkZWQnKSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gY2FyZC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9kdWN0LXRpdGxlXScpIHx8IHsgZGF0YXNldDogeyBwcm9kdWN0VGl0bGU6ICcnIH0sIHRleHRDb250ZW50OiAnJyB9O1xuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2R1Y3QtcHJpY2VdJykgfHwgeyBkYXRhc2V0OiB7IHByaWNlOiAwIH0sIGlubmVySFRNTDogJycgfTtcbiAgICAgICAgICAgIGNvbnN0IHVybHMgPSBjYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXByb2R1Y3QtdXJsXScpIHx8IHsgZGF0YXNldDogeyBwcm9kdWN0VXJsOiAnJyB9LCBocmVmOiAnJyB9O1xuXG4gICAgICAgICAgICB0aXRsZS5kYXRhc2V0LnByb2R1Y3ROYW1lID0gcHJvZHVjdC5uYW1lO1xuICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gcHJvZHVjdC5uYW1lO1xuICAgICAgICAgICAgcHJpY2UuZGF0YXNldC5wcm9kdWN0UHJpY2UgPSBgJCR7cHJvZHVjdC5wcmljZU91cn1gO1xuICAgICAgICAgICAgcHJpY2UuaW5uZXJIVE1MID0gYCQke3Byb2R1Y3QucHJpY2VPdXJ9YDtcbiAgICAgICAgICAgIHVybHMuZm9yRWFjaCh1cmwgPT4ge1xuICAgICAgICAgICAgICAgIHVybC5ocmVmID0gcHJvZHVjdC51cmw7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCd5c3ctbG9hZGVkJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEdyYXBocWxEYXRhKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gQXJyYXkuZnJvbSh0aGlzLnByb2R1Y3RzKS5tYXAoaXRlbSA9PiBOdW1iZXIoaXRlbS5kYXRhc2V0LnByb2R1Y3RJZCkpO1xuICAgICAgICBjb25zdCBpZHMgPSBkYXRhLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGRhdGEuaW5kZXhPZihpdGVtKSA9PT0gaW5kZXgpO1xuICAgICAgICBjb25zdCByYW5nZSA9IChNYXRoLmNlaWwoaWRzLmxlbmd0aCAvIDEwKSk7XG4gICAgICAgIGxldCBxdWVyaWVzID0gJyc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpZFJhbmdlID0gaWRzLnNsaWNlKGkgKiAxMCwgKGkgKyAxKSAqIDEwKTtcblxuICAgICAgICAgICAgcXVlcmllcyArPSBgcHJvZHVjdF9saXN0XyR7aX06cHJvZHVjdHMoZW50aXR5SWRzOiBbJHtpZFJhbmdlfV0pIHsgZWRnZXMgeyBub2RlIHsuLi5Qcm9kdWN0RmllbGRzIH0gfSB9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gYFxuICAgICAgICAgICAgcXVlcnkgUHJvZHVjdHNRdWVyeSB7XG4gICAgICAgICAgICAgICAgc2l0ZSB7JHtxdWVyaWVzfX1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnJhZ21lbnQgUHJvZHVjdEZpZWxkcyBvbiBQcm9kdWN0IHtcbiAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICBwYXRoXG4gICAgICAgICAgICAgICAgcHJpY2VzIHtcbiAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnJhZ21lbnQgTW9uZXlGaWVsZHMgb24gTW9uZXkge1xuICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGA7XG5cbiAgICAgICAgcmV0dXJuIHByb2R1Y3RzO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWVNXUHJvZHVjdFNldEZhY3RvcnkoY29udGV4dCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgWVNXUHJvZHVjdFNldCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgWVNXUHJvZHVjdFNldChjb250ZXh0KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiJCIsImxvYWRlZCIsInRyaW0iLCJ0ZXh0IiwicmVtb3ZlIiwibGVuZ3RoIiwib24iLCJ0b2dnbGVMaW5rIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlRWxlSWQiLCJhdHRyIiwicmVwbGFjZSIsInRvZ2dsZUVsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2dnbGVDbGFzcyIsImFkZENsYXNzIiwiaG9va3MiLCJDYXRhbG9nUGFnZSIsIkZhY2V0ZWRTZWFyY2giLCJhdGhsZXRpY0xvYWRlZCIsIllTV0NhdGVnb3J5RmFjdG9yeSIsIkNhdGVnb3J5IiwiX0NhdGFsb2dQYWdlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsImNvbnRleHQiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoUmVzdWx0VG90YWwiLCJwcm9kdWN0c1BlclBhZ2UiLCJjYXRlZ29yeVByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiY2F0ZWdvcnkiLCJzaG9wX2J5X3ByaWNlIiwicHJvZHVjdHMiLCJsaW1pdCIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJzaWRlYmFyIiwicHJvZHVjdENvdW50Iiwic2hvd01vcmUiLCJwcmVwZW5kVG8iLCJmYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJyZXN1bHQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwid2luZG93IiwidHJ1c3RzcG90X2luaXQiLCJ1bmRlZmluZWQiLCJkZWZhdWx0IiwiWVNXUHJvZHVjdFNldEZhY3RvcnkiLCJZU1dDb250YWN0VVNGb3JtIiwiWVNXQ2F0ZWdvcnkiLCJpbml0IiwiZm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtS2V5IiwidmFsdWUiLCJuYW1lIiwiZW1haWwiLCJudW1iZXJQaG9uZSIsInByb2plY3QiLCJtZXNzYWdlIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJvcGVuIiwic2VuZCIsIl9lIiwiY29uc29sZSIsImVycm9yIiwiWVNXUHJvZHVjdFNldCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRQcm9kdWN0cyIsIl90aGlzIiwiZ3JhcGhxbFRva2VuIiwidGhlbWVfc2V0dGluZ3MiLCJzZl90ayIsImZldGNoIiwiQXV0aG9yaXphdGlvbiIsInF1ZXJ5IiwiZ2V0R3JhcGhxbERhdGEiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzaXRlIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsIml0ZW0iLCJlZGdlcyIsImVsZW1lbnQiLCJwdXNoIiwibm9kZSIsImluZGV4IiwiY2FyZFJlbmRlciIsImVyciIsIkVycm9yIiwiZ2V0SWRzIiwiaWRzIiwiTnVtYmVyIiwiZGF0YXNldCIsInByb2R1Y3RJZCIsInByb2R1Y3QiLCJpZCIsImVudGl0eUlkIiwidXJsIiwicGF0aCIsInNrdSIsInByaWNlT3VyIiwicHJpY2VzIiwicHJpY2UiLCJwcmljZUxpc3QiLCJiYXNlUHJpY2UiLCJjYXJkcyIsIkFycmF5IiwiZnJvbSIsImNhcmQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRpdGxlIiwicHJvZHVjdFRpdGxlIiwidGV4dENvbnRlbnQiLCJ1cmxzIiwicHJvZHVjdFVybCIsImhyZWYiLCJwcm9kdWN0TmFtZSIsInByb2R1Y3RQcmljZSIsImFkZCIsIm1hcCIsImZpbHRlciIsImluZGV4T2YiLCJyYW5nZSIsIk1hdGgiLCJjZWlsIiwicXVlcmllcyIsImkiLCJpZFJhbmdlIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9