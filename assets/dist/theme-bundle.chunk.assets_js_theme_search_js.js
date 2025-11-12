"use strict";
(self["webpackChunksecond_skin_audio"] = self["webpackChunksecond_skin_audio"] || []).push([["assets_js_theme_search_js"],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }









var Search = /*#__PURE__*/function (_CatalogPage) {
  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  _inheritsLoose(Search, _CatalogPage);
  var _proto = Search.prototype;
  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;
    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };
    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }
    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }
    return nodeData;
  };
  _proto.showProducts = function showProducts() {
    var url = _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceParams(window.location.href, {
      section: 'product'
    });
    this.$productListingContainer.removeClass('u-hiddenVisually');
    this.$facetedSearchContainer.removeClass('u-hiddenVisually');
    this.$contentResultsContainer.addClass('u-hiddenVisually');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').addClass('navBar-action');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').removeClass('navBar-action');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').addClass('navBar-action-color--active');
    _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].goToUrl(url);
  };
  _proto.showContent = function showContent() {
    var url = _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceParams(window.location.href, {
      section: 'content'
    });
    this.$contentResultsContainer.removeClass('u-hiddenVisually');
    this.$productListingContainer.addClass('u-hiddenVisually');
    this.$facetedSearchContainer.addClass('u-hiddenVisually');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').addClass('navBar-action');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').removeClass('navBar-action');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').addClass('navBar-action-color--active');
    _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].goToUrl(url);
  };
  _proto.onReady = function onReady() {
    var _this2 = this;
    var $searchForm = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_5__.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#product-listing-container');
    this.$facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#faceted-search-container');
    this.$contentResultsContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search-results-content');

    // Init faceted search
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }

    // Init collapsibles
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_6__["default"])();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showProducts();
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showContent();
    });
    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent();
    } else {
      this.showProducts();
    }
    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();
      if (!validator.check()) {
        return event.preventDefault();
      }
      $searchForm.find('input[name="category\[\]"]').remove();
      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
  };
  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;
    jquery__WEBPACK_IMPORTED_MODULE_2___default().ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };
  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;
    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var $productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#product-listing-container');
    var $facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#faceted-search-container');
    var $searchHeading = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search-results-heading');
    var $searchCount = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search-results-product-count');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'search/product-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $searchHeading.html(content.heading);
      $searchCount.html(content.productCount);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };
  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_8__["default"])({
      submit: $form
    });
    return this;
  };
  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }
    return this;
  };
  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }
    return false;
  };
  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9zZWFyY2hfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNiO0FBQzZCO0FBQ1Y7QUFDcEI7QUFDZ0M7QUFDdEM7QUFDZTtBQUFBLElBRVZRLE1BQU0sMEJBQUFDLFlBQUE7RUFBQSxTQUFBRCxPQUFBO0lBQUEsT0FBQUMsWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBQyxjQUFBLENBQUFKLE1BQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFJLE1BQUEsR0FBQUwsTUFBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FDdkJFLDJCQUEyQixHQUEzQixTQUFBQSwyQkFBMkJBLENBQUNDLElBQUksRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDOUIsSUFBTUMsUUFBUSxHQUFHO01BQ2JDLElBQUksRUFBRUgsSUFBSSxDQUFDSSxJQUFJO01BQ2ZDLEVBQUUsRUFBRUwsSUFBSSxDQUFDTSxRQUFRLENBQUNELEVBQUU7TUFDcEJFLEtBQUssRUFBRTtRQUNIQyxRQUFRLEVBQUVSLElBQUksQ0FBQ1E7TUFDbkI7SUFDSixDQUFDO0lBRUQsSUFBSVIsSUFBSSxDQUFDTyxLQUFLLEVBQUU7TUFDWkwsUUFBUSxDQUFDSyxLQUFLLENBQUNFLE1BQU0sR0FBR1QsSUFBSSxDQUFDTyxLQUFLLEtBQUssTUFBTTtNQUM3Q0wsUUFBUSxDQUFDUSxRQUFRLEdBQUcsSUFBSTtJQUM1QjtJQUVBLElBQUlWLElBQUksQ0FBQ1UsUUFBUSxFQUFFO01BQ2ZSLFFBQVEsQ0FBQ1EsUUFBUSxHQUFHLEVBQUU7TUFDdEJWLElBQUksQ0FBQ1UsUUFBUSxDQUFDQyxPQUFPLENBQUMsVUFBQ0MsU0FBUyxFQUFLO1FBQ2pDVixRQUFRLENBQUNRLFFBQVEsQ0FBQ0csSUFBSSxDQUFDWixLQUFJLENBQUNGLDJCQUEyQixDQUFDYSxTQUFTLENBQUMsQ0FBQztNQUN2RSxDQUFD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QyxjQUFjLEdBQWQsU0FBQUEsY0FBY0EsQ0FBQ3lELEtBQUssRUFBRTtJQUNsQixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUMxRCxTQUFTLEdBQUdwRCx1REFBRyxDQUFDO01BQ2pCK0csTUFBTSxFQUFFRDtJQUNaLENBQUMsQ0FBQztJQUVGLE9BQU8sSUFBSTtFQUNmLENBQUM7RUFBQXhHLE1BQUEsQ0FFRGdELGNBQWMsR0FBZCxTQUFBQSxjQUFjQSxDQUFDMEQsUUFBUSxFQUFFO0lBQ3JCLElBQUksSUFBSSxDQUFDNUQsU0FBUyxFQUFFO01BQ2hCLElBQUksQ0FBQ0EsU0FBUyxDQUFDNkQsR0FBRyxDQUFDO1FBQ2ZDLFFBQVEsRUFBRUYsUUFBUTtRQUNsQkcsUUFBUSxFQUFFLFVBQVU7UUFDcEJDLFlBQVksRUFBRUosUUFBUSxDQUFDbkcsSUFBSSxDQUFDLGNBQWM7TUFDOUMsQ0FBQyxDQUFDO0lBQ047SUFFQSxPQUFPLElBQUk7RUFDZixDQUFDO0VBQUFQLE1BQUEsQ0FFRHdELEtBQUssR0FBTCxTQUFBQSxLQUFLQSxDQUFBLEVBQUc7SUFDSixJQUFJLElBQUksQ0FBQ1YsU0FBUyxFQUFFO01BQ2hCLElBQUksQ0FBQ0EsU0FBUyxDQUFDaUUsWUFBWSxDQUFDLENBQUM7TUFDN0IsT0FBTyxJQUFJLENBQUNqRSxTQUFTLENBQUNrRSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ3pDO0lBRUEsT0FBTyxLQUFLO0VBQ2hCLENBQUM7RUFBQSxPQUFBckgsTUFBQTtBQUFBLEVBMU8rQlAsZ0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS9zZWFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0ICdqc3RyZWUnO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZURhdGEgPSB7XG4gICAgICAgICAgICB0ZXh0OiBub2RlLmRhdGEsXG4gICAgICAgICAgICBpZDogbm9kZS5tZXRhZGF0YS5pZCxcbiAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IG5vZGUuc2VsZWN0ZWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChub2RlLnN0YXRlKSB7XG4gICAgICAgICAgICBub2RlRGF0YS5zdGF0ZS5vcGVuZWQgPSBub2RlLnN0YXRlID09PSAnb3Blbic7XG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4ucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShjaGlsZE5vZGUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGVEYXRhO1xuICAgIH1cblxuICAgIHNob3dQcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgdXJsID0gdXJsVXRpbHMucmVwbGFjZVBhcmFtcyh3aW5kb3cubG9jYXRpb24uaHJlZiwge1xuICAgICAgICAgICAgc2VjdGlvbjogJ3Byb2R1Y3QnLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBzaG93Q29udGVudCgpIHtcbiAgICAgICAgY29uc3QgdXJsID0gdXJsVXRpbHMucmVwbGFjZVBhcmFtcyh3aW5kb3cubG9jYXRpb24uaHJlZiwge1xuICAgICAgICAgICAgc2VjdGlvbjogJ2NvbnRlbnQnLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCAkc2VhcmNoRm9ybSA9ICQoJ1tkYXRhLWFkdmFuY2VkLXNlYXJjaC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkY2F0ZWdvcnlUcmVlQ29udGFpbmVyID0gJHNlYXJjaEZvcm0uZmluZCgnW2RhdGEtc2VhcmNoLWNhdGVnb3J5LXRyZWVdJyk7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHRyZWVEYXRhID0gW107XG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudCcpO1xuXG4gICAgICAgIC8vIEluaXQgZmFjZXRlZCBzZWFyY2hcbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKCdsaS5wcm9kdWN0JykubGVuZ3RoID09PSAwIHx8IHVybC5xdWVyeS5zZWN0aW9uID09PSAnY29udGVudCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmluaXRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtKVxuICAgICAgICAgICAgLmJpbmRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtLmZpbmQoJyNzZWFyY2hfcXVlcnlfYWR2JykpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5jYXRlZ29yeVRyZWUuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgdHJlZURhdGEucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShub2RlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlUcmVlRGF0YSA9IHRyZWVEYXRhO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhdGVnb3J5VHJlZSgkY2F0ZWdvcnlUcmVlQ29udGFpbmVyKTtcblxuICAgICAgICAkc2VhcmNoRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yeUlkcyA9ICRjYXRlZ29yeVRyZWVDb250YWluZXIuanN0cmVlKCkuZ2V0X3NlbGVjdGVkKCk7XG5cbiAgICAgICAgICAgIGlmICghdmFsaWRhdG9yLmNoZWNrKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNlYXJjaEZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNhdGVnb3J5XFxbXFxdXCJdJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgY2F0ZWdvcnlJZCBvZiBzZWxlY3RlZENhdGVnb3J5SWRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NhdGVnb3J5W10nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2F0ZWdvcnlJZCxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICRzZWFyY2hGb3JtLmFwcGVuZChpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRUcmVlTm9kZXMobm9kZSwgY2IpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9yZW1vdGUvdjEvY2F0ZWdvcnktdHJlZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkOiBub2RlLmlkLFxuICAgICAgICAgICAgICAgIHByZWZpeDogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLmRvbmUoZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRSZXN1bHRzID0gW107XG5cbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZGF0YU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRSZXN1bHRzLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUoZGF0YU5vZGUpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYihmb3JtYXR0ZWRSZXN1bHRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgdHJlZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb3JlOiB7XG4gICAgICAgICAgICAgICAgZGF0YTogKG5vZGUsIGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJvb3Qgbm9kZVxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5pZCA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYih0aGlzLmNhdGVnb3J5VHJlZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF6eSBsb2FkZWQgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRyZWVOb2Rlcyhub2RlLCBjYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW1lczoge1xuICAgICAgICAgICAgICAgICAgICBpY29uczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrYm94OiB7XG4gICAgICAgICAgICAgICAgdGhyZWVfc3RhdGU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAnY2hlY2tib3gnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcblxuICAgICAgICAkY29udGFpbmVyLmpzdHJlZSh0cmVlT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkc2VhcmNoSGVhZGluZyA9ICQoJyNzZWFyY2gtcmVzdWx0cy1oZWFkaW5nJyk7XG4gICAgICAgIGNvbnN0ICRzZWFyY2hDb3VudCA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50Jyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5zZWFyY2hQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ3NlYXJjaC9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdzZWFyY2gvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ3NlYXJjaC9oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0Q291bnQ6ICdzZWFyY2gvcHJvZHVjdC1jb3VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdF9yZXN1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ3NlYXJjaC9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICAgICAgICAkc2VhcmNoSGVhZGluZy5odG1sKGNvbnRlbnQuaGVhZGluZyk7XG4gICAgICAgICAgICAkc2VhcmNoQ291bnQuaHRtbChjb250ZW50LnByb2R1Y3RDb3VudCk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0VmFsaWRhdGlvbigkZm9ybSkge1xuICAgICAgICB0aGlzLiRmb3JtID0gJGZvcm07XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJGZvcm0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJpbmRWYWxpZGF0aW9uKCRlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAkZWxlbWVudC5kYXRhKCdlcnJvck1lc3NhZ2UnKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2hlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJob29rcyIsIkNhdGFsb2dQYWdlIiwiJCIsIkZhY2V0ZWRTZWFyY2giLCJ1cmxVdGlscyIsIlVybCIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIm5vZCIsIlNlYXJjaCIsIl9DYXRhbG9nUGFnZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUiLCJub2RlIiwiX3RoaXMiLCJub2RlRGF0YSIsInRleHQiLCJkYXRhIiwiaWQiLCJtZXRhZGF0YSIsInN0YXRlIiwic2VsZWN0ZWQiLCJvcGVuZWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJwdXNoIiwic2hvd1Byb2R1Y3RzIiwidXJsIiwicmVwbGFjZVBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNlY3Rpb24iLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCJyZW1vdmVDbGFzcyIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwiJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyIiwiYWRkQ2xhc3MiLCJnb1RvVXJsIiwic2hvd0NvbnRlbnQiLCJvblJlYWR5IiwiX3RoaXMyIiwiJHNlYXJjaEZvcm0iLCIkY2F0ZWdvcnlUcmVlQ29udGFpbmVyIiwiZmluZCIsInBhcnNlIiwidHJlZURhdGEiLCJsZW5ndGgiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5IiwidmFsaWRhdG9yIiwiaW5pdFZhbGlkYXRpb24iLCJiaW5kVmFsaWRhdGlvbiIsImNvbnRleHQiLCJjYXRlZ29yeVRyZWUiLCJjYXRlZ29yeVRyZWVEYXRhIiwiY3JlYXRlQ2F0ZWdvcnlUcmVlIiwic2VsZWN0ZWRDYXRlZ29yeUlkcyIsImpzdHJlZSIsImdldF9zZWxlY3RlZCIsImNoZWNrIiwicmVtb3ZlIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZG9uZSIsImNhdGVnb3J5SWQiLCJ2YWx1ZSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJhcHBlbmQiLCJsb2FkVHJlZU5vZGVzIiwiY2IiLCJfdGhpczMiLCJhamF4Iiwic2VsZWN0ZWRDYXRlZ29yeUlkIiwicHJlZml4IiwiZm9ybWF0dGVkUmVzdWx0cyIsImRhdGFOb2RlIiwiJGNvbnRhaW5lciIsIl90aGlzNCIsInRyZWVPcHRpb25zIiwiY29yZSIsInRoZW1lcyIsImljb25zIiwiY2hlY2tib3giLCJ0aHJlZV9zdGF0ZSIsInBsdWdpbnMiLCIkc2VhcmNoSGVhZGluZyIsIiRzZWFyY2hDb3VudCIsInByb2R1Y3RzUGVyUGFnZSIsInNlYXJjaFByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJoZWFkaW5nIiwicHJvZHVjdENvdW50IiwiY29uZmlnIiwicHJvZHVjdF9yZXN1bHRzIiwibGltaXQiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCIkZm9ybSIsInN1Ym1pdCIsIiRlbGVtZW50IiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImVycm9yTWVzc2FnZSIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9