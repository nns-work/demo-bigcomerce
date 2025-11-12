"use strict";
(self["webpackChunksecond_skin_audio"] = self["webpackChunksecond_skin_audio"] || []).push([["assets_js_theme_home_js"],{

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _ysw_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ysw/home */ "./assets/js/theme/ysw/home.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Home = /*#__PURE__*/function (_PageManager) {
  function Home() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Home, _PageManager);
  var _proto = Home.prototype;
  _proto.onReady = function onReady() {
    (0,_ysw_home__WEBPACK_IMPORTED_MODULE_1__["default"])(this.context);
  };
  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


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

/***/ }),

/***/ "./assets/js/theme/ysw/components/tabs-content.js":
/*!********************************************************!*\
  !*** ./assets/js/theme/ysw/components/tabs-content.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YSWTabsContent)
/* harmony export */ });
function YSWTabsContent() {
  var tabContents = document.querySelectorAll('[data-tabs-content="true"]');
  tabContents.forEach(function (tabContent) {
    var tabs = tabContent.querySelectorAll('[data-tab-title]');
    var contents = tabContent.querySelectorAll('[data-tab-content]');
    tabs.forEach(function (t) {
      return t.classList.remove('ysw-is-active');
    });
    contents.forEach(function (content) {
      return content.classList.remove('ysw-is-active');
    });
    document.querySelectorAll("[data-tab-title=\"" + tabs[0].dataset.tabTitle + "\"]").forEach(function (t) {
      t.classList.add('ysw-is-active');
    });
    contents[tabs[0].dataset.tabTitle].classList.add('ysw-is-active');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function (e) {
        var band = false;
        tabs.forEach(function (t) {
          if (t === e.currentTarget && t.classList.contains('ysw-is-active') && !tabContent.dataset.tabAlways && window.innerWidth < 1024) band = true;
          t.classList.remove('ysw-is-active');
        });
        contents.forEach(function (content) {
          return content.classList.remove('ysw-is-active');
        });
        if (!band) {
          tabContent.querySelectorAll("[data-tab-title=\"" + e.currentTarget.dataset.tabTitle + "\"]").forEach(function (t) {
            return t.classList.add('ysw-is-active');
          });
          contents[e.currentTarget.dataset.tabTitle].classList.add('ysw-is-active');
        }
      });
    });
  });
}

/***/ }),

/***/ "./assets/js/theme/ysw/home.js":
/*!*************************************!*\
  !*** ./assets/js/theme/ysw/home.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YSWHomeFactory)
/* harmony export */ });
/* harmony import */ var _components_tabs_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tabs-content */ "./assets/js/theme/ysw/components/tabs-content.js");
/* harmony import */ var _components_product_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product-set */ "./assets/js/theme/ysw/components/product-set.js");


var YSWHome = /*#__PURE__*/function () {
  function YSWHome(context) {
    this.context = context;
    this.isMobileFeatureCarouselInitialized = false;
    this.init();
  }
  var _proto = YSWHome.prototype;
  _proto.init = function init() {
    (0,_components_product_set__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_components_tabs_content__WEBPACK_IMPORTED_MODULE_0__["default"])();
  };
  return YSWHome;
}();
function YSWHomeFactory(context) {
  if (this instanceof YSWHome) {
    this.context = context;
  } else {
    return new YSWHome(context);
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9ob21lX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0Q7QUFBQSxJQUVuQkUsSUFBSSwwQkFBQUMsWUFBQTtFQUFBLFNBQUFELEtBQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLGNBQUEsQ0FBQUosSUFBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQUksTUFBQSxHQUFBTCxJQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUNyQkUsT0FBTyxHQUFQLFNBQUFBLE9BQU9BLENBQUEsRUFBRztJQUNOUixxREFBYyxDQUFDLElBQUksQ0FBQ1MsT0FBTyxDQUFDO0VBQ2hDLENBQUM7RUFBQSxPQUFBUixJQUFBO0FBQUEsRUFINkJGLHFEQUFXOzs7Ozs7Ozs7Ozs7Ozs7SUNIdkNZLGFBQWE7RUFDZixTQUFBQSxjQUFZRixPQUFPLEVBQUU7SUFDakIsSUFBSSxDQUFDQSxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDRyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsNkNBQTZDLENBQUM7SUFFeEYsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQztFQUNmO0VBQUMsSUFBQVQsTUFBQSxHQUFBSyxhQUFBLENBQUFKLFNBQUE7RUFBQUQsTUFBQSxDQUVEUyxJQUFJLEdBQUosU0FBQUEsSUFBSUEsQ0FBQSxFQUFHO0lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQ0gsUUFBUSxDQUFDSSxNQUFNLEVBQUU7SUFFM0IsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztFQUN0QixDQUFDO0VBQUFYLE1BQUEsQ0FFRFcsV0FBVyxHQUFYLFNBQUFBLFdBQVdBLENBQUEsRUFBRztJQUFBLElBQUFDLEtBQUE7SUFDVixJQUFNQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxLQUFLO0lBRWhEQyxLQUFLLENBQUMsVUFBVSxF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Q0FFRFMsSUFBSSxHQUFKLFNBQUFBLElBQUlBLENBQUEsRUFBRztJQUNIZ0YsbUVBQW9CLENBQUMsQ0FBQztJQUN0QkMsb0VBQWMsQ0FBQyxDQUFDO0VBQ3BCLENBQUM7RUFBQSxPQUFBZSxPQUFBO0FBQUE7QUFHVSxTQUFTL0csY0FBY0EsQ0FBQ1MsT0FBTyxFQUFFO0VBQzVDLElBQUksSUFBSSxZQUFZc0csT0FBTyxFQUFFO0lBQ3pCLElBQUksQ0FBQ3RHLE9BQU8sR0FBR0EsT0FBTztFQUMxQixDQUFDLE1BQU07SUFDSCxPQUFPLElBQUlzRyxPQUFPLENBQUN0RyxPQUFPLENBQUM7RUFDL0I7QUFDSixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Vjb25kLXNraW4tYXVkaW8vLi9hc3NldHMvanMvdGhlbWUvaG9tZS5qcyIsIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS95c3cvY29tcG9uZW50cy9wcm9kdWN0LXNldC5qcyIsIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS95c3cvY29tcG9uZW50cy90YWJzLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vc2Vjb25kLXNraW4tYXVkaW8vLi9hc3NldHMvanMvdGhlbWUveXN3L2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBZU1dIb21lRmFjdG9yeSBmcm9tICcuL3lzdy9ob21lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICBZU1dIb21lRmFjdG9yeSh0aGlzLmNvbnRleHQpO1xuICAgIH1cbn1cbiIsImNsYXNzIFlTV1Byb2R1Y3RTZXQge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXByb2R1Y3Qtc2V0PVwidHJ1ZVwiXSBbZGF0YS1wcm9kdWN0LWlkXScpO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9kdWN0cy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB0aGlzLmdldFByb2R1Y3RzKCk7XG4gICAgfVxuXG4gICAgZ2V0UHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IGdyYXBocWxUb2tlbiA9IHdpbmRvdy50aGVtZV9zZXR0aW5ncy5zZl90aztcblxuICAgICAgICBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtncmFwaHFsVG9rZW59YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMuZ2V0R3JhcGhxbERhdGEoKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YS5zaXRlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RzID0gW107XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5lZGdlcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMucHVzaChlbGVtZW50Lm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghcHJvZHVjdHMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5mb3JFYWNoKGluZGV4ID0+IHRoaXMuY2FyZFJlbmRlcihpbmRleCkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRJZHMoY29udGVudCkge1xuICAgICAgICBjb25zdCBpZHMgPSBbXTtcblxuICAgICAgICBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXByb2R1Y3QtaWRdJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlkcy5wdXNoKE51bWJlcihpdGVtLmRhdGFzZXQucHJvZHVjdElkKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBpZHM7XG4gICAgfVxuXG4gICAgY2FyZFJlbmRlcihpdGVtKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSB7XG4gICAgICAgICAgICBpZDogaXRlbS5lbnRpdHlJZCxcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIHVybDogaXRlbS5wYXRoLFxuICAgICAgICAgICAgc2t1OiBpdGVtLnNrdSxcbiAgICAgICAgICAgIHByaWNlT3VyOiBpdGVtLnByaWNlcy5wcmljZS52YWx1ZSxcbiAgICAgICAgICAgIHByaWNlTGlzdDogaXRlbS5wcmljZXMuYmFzZVByaWNlLnZhbHVlLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChwcm9kdWN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcHJvZHVjdC1pZD1cIiR7cHJvZHVjdC5pZH1cIl1gKTtcblxuICAgICAgICBpZiAoIWNhcmRzKSByZXR1cm47XG5cbiAgICAgICAgQXJyYXkuZnJvbShjYXJkcykuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucygneXN3LWxvYWRlZCcpKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2R1Y3QtdGl0bGVdJykgfHwgeyBkYXRhc2V0OiB7IHByb2R1Y3RUaXRsZTogJycgfSwgdGV4dENvbnRlbnQ6ICcnIH07XG4gICAgICAgICAgICBjb25zdCBwcmljZSA9IGNhcmQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvZHVjdC1wcmljZV0nKSB8fCB7IGRhdGFzZXQ6IHsgcHJpY2U6IDAgfSwgaW5uZXJIVE1MOiAnJyB9O1xuICAgICAgICAgICAgY29uc3QgdXJscyA9IGNhcmQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcHJvZHVjdC11cmxdJykgfHwgeyBkYXRhc2V0OiB7IHByb2R1Y3RVcmw6ICcnIH0sIGhyZWY6ICcnIH07XG5cbiAgICAgICAgICAgIHRpdGxlLmRhdGFzZXQucHJvZHVjdE5hbWUgPSBwcm9kdWN0Lm5hbWU7XG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBwcm9kdWN0Lm5hbWU7XG4gICAgICAgICAgICBwcmljZS5kYXRhc2V0LnByb2R1Y3RQcmljZSA9IGAkJHtwcm9kdWN0LnByaWNlT3VyfWA7XG4gICAgICAgICAgICBwcmljZS5pbm5lckhUTUwgPSBgJCR7cHJvZHVjdC5wcmljZU91cn1gO1xuICAgICAgICAgICAgdXJscy5mb3JFYWNoKHVybCA9PiB7XG4gICAgICAgICAgICAgICAgdXJsLmhyZWYgPSBwcm9kdWN0LnVybDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3lzdy1sb2FkZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0R3JhcGhxbERhdGEoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBBcnJheS5mcm9tKHRoaXMucHJvZHVjdHMpLm1hcChpdGVtID0+IE51bWJlcihpdGVtLmRhdGFzZXQucHJvZHVjdElkKSk7XG4gICAgICAgIGNvbnN0IGlkcyA9IGRhdGEuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gZGF0YS5pbmRleE9mKGl0ZW0pID09PSBpbmRleCk7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gKE1hdGguY2VpbChpZHMubGVuZ3RoIC8gMTApKTtcbiAgICAgICAgbGV0IHF1ZXJpZXMgPSAnJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkUmFuZ2UgPSBpZHMuc2xpY2UoaSAqIDEwLCAoaSArIDEpICogMTApO1xuXG4gICAgICAgICAgICBxdWVyaWVzICs9IGBwcm9kdWN0X2xpc3RfJHtpfTpwcm9kdWN0cyhlbnRpdHlJZHM6IFske2lkUmFuZ2V9XSkgeyBlZGdlcyB7IG5vZGUgey4uLlByb2R1Y3RGaWVsZHMgfSB9IH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBgXG4gICAgICAgICAgICBxdWVyeSBQcm9kdWN0c1F1ZXJ5IHtcbiAgICAgICAgICAgICAgICBzaXRlIHske3F1ZXJpZXN9fVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmcmFnbWVudCBQcm9kdWN0RmllbGRzIG9uIFByb2R1Y3Qge1xuICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgIHBhdGhcbiAgICAgICAgICAgICAgICBwcmljZXMge1xuICAgICAgICAgICAgICAgICAgICBiYXNlUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmcmFnbWVudCBNb25leUZpZWxkcyBvbiBNb25leSB7XG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgICAgICByZXR1cm4gcHJvZHVjdHM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBZU1dQcm9kdWN0U2V0RmFjdG9yeShjb250ZXh0KSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBZU1dQcm9kdWN0U2V0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBZU1dQcm9kdWN0U2V0KGNvbnRleHQpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFlTV1RhYnNDb250ZW50KCkge1xuICAgIGNvbnN0IHRhYkNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGFicy1jb250ZW50PVwidHJ1ZVwiXScpO1xuXG4gICAgdGFiQ29udGVudHMuZm9yRWFjaCh0YWJDb250ZW50ID0+IHtcbiAgICAgICAgY29uc3QgdGFicyA9IHRhYkNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGFiLXRpdGxlXScpO1xuICAgICAgICBjb25zdCBjb250ZW50cyA9IHRhYkNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGFiLWNvbnRlbnRdJyk7XG5cbiAgICAgICAgdGFicy5mb3JFYWNoKHQgPT4gdC5jbGFzc0xpc3QucmVtb3ZlKCd5c3ctaXMtYWN0aXZlJykpO1xuICAgICAgICBjb250ZW50cy5mb3JFYWNoKGNvbnRlbnQgPT4gY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCd5c3ctaXMtYWN0aXZlJykpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXRhYi10aXRsZT1cIiR7dGFic1swXS5kYXRhc2V0LnRhYlRpdGxlfVwiXWApLmZvckVhY2godCA9PiB7XG4gICAgICAgICAgICB0LmNsYXNzTGlzdC5hZGQoJ3lzdy1pcy1hY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGVudHNbdGFic1swXS5kYXRhc2V0LnRhYlRpdGxlXS5jbGFzc0xpc3QuYWRkKCd5c3ctaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBiYW5kID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB0YWJzLmZvckVhY2godCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ID09PSBlLmN1cnJlbnRUYXJnZXQgJiYgdC5jbGFzc0xpc3QuY29udGFpbnMoJ3lzdy1pcy1hY3RpdmUnKSAmJiAhdGFiQ29udGVudC5kYXRhc2V0LnRhYkFsd2F5cyAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpIGJhbmQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHQuY2xhc3NMaXN0LnJlbW92ZSgneXN3LWlzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29udGVudHMuZm9yRWFjaChjb250ZW50ID0+IGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgneXN3LWlzLWFjdGl2ZScpKTtcblxuICAgICAgICAgICAgICAgIGlmICghYmFuZCkge1xuICAgICAgICAgICAgICAgICAgICB0YWJDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXRhYi10aXRsZT1cIiR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFiVGl0bGV9XCJdYCkuZm9yRWFjaCh0ID0+IHQuY2xhc3NMaXN0LmFkZCgneXN3LWlzLWFjdGl2ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudHNbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFiVGl0bGVdLmNsYXNzTGlzdC5hZGQoJ3lzdy1pcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgWVNXVGFic0NvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL3RhYnMtY29udGVudCc7XG5pbXBvcnQgWVNXUHJvZHVjdFNldEZhY3RvcnkgZnJvbSAnLi9jb21wb25lbnRzL3Byb2R1Y3Qtc2V0JztcblxuY2xhc3MgWVNXSG9tZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmlzTW9iaWxlRmVhdHVyZUNhcm91c2VsSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgWVNXUHJvZHVjdFNldEZhY3RvcnkoKTtcbiAgICAgICAgWVNXVGFic0NvbnRlbnQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFlTV0hvbWVGYWN0b3J5KGNvbnRleHQpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIFlTV0hvbWUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFlTV0hvbWUoY29udGV4dCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwiWVNXSG9tZUZhY3RvcnkiLCJIb21lIiwiX1BhZ2VNYW5hZ2VyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJjb250ZXh0IiwiZGVmYXVsdCIsIllTV1Byb2R1Y3RTZXQiLCJwcm9kdWN0cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluaXQiLCJsZW5ndGgiLCJnZXRQcm9kdWN0cyIsIl90aGlzIiwiZ3JhcGhxbFRva2VuIiwid2luZG93IiwidGhlbWVfc2V0dGluZ3MiLCJzZl90ayIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwiZ2V0R3JhcGhxbERhdGEiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzaXRlIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsIml0ZW0iLCJlZGdlcyIsImVsZW1lbnQiLCJwdXNoIiwibm9kZSIsImluZGV4IiwiY2FyZFJlbmRlciIsImVyciIsIkVycm9yIiwiZ2V0SWRzIiwiY29udGVudCIsImlkcyIsIk51bWJlciIsImRhdGFzZXQiLCJwcm9kdWN0SWQiLCJwcm9kdWN0IiwiaWQiLCJlbnRpdHlJZCIsIm5hbWUiLCJ1cmwiLCJwYXRoIiwic2t1IiwicHJpY2VPdXIiLCJwcmljZXMiLCJwcmljZSIsInZhbHVlIiwicHJpY2VMaXN0IiwiYmFzZVByaWNlIiwiY2FyZHMiLCJBcnJheSIsImZyb20iLCJjYXJkIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0aXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9kdWN0VGl0bGUiLCJ0ZXh0Q29udGVudCIsImlubmVySFRNTCIsInVybHMiLCJwcm9kdWN0VXJsIiwiaHJlZiIsInByb2R1Y3ROYW1lIiwicHJvZHVjdFByaWNlIiwiYWRkIiwibWFwIiwiZmlsdGVyIiwiaW5kZXhPZiIsInJhbmdlIiwiTWF0aCIsImNlaWwiLCJxdWVyaWVzIiwiaSIsImlkUmFuZ2UiLCJzbGljZSIsIllTV1Byb2R1Y3RTZXRGYWN0b3J5IiwiWVNXVGFic0NvbnRlbnQiLCJ0YWJDb250ZW50cyIsInRhYkNvbnRlbnQiLCJ0YWJzIiwiY29udGVudHMiLCJ0IiwicmVtb3ZlIiwidGFiVGl0bGUiLCJ0YWIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImJhbmQiLCJjdXJyZW50VGFyZ2V0IiwidGFiQWx3YXlzIiwiaW5uZXJXaWR0aCIsIllTV0hvbWUiLCJpc01vYmlsZUZlYXR1cmVDYXJvdXNlbEluaXRpYWxpemVkIl0sInNvdXJjZVJvb3QiOiIifQ==