"use strict";
(self["webpackChunksecond_skin_audio"] = self["webpackChunksecond_skin_audio"] || []).push([["assets_js_theme_compare_js"],{

/***/ "./assets/js/theme/compare.js":
/*!************************************!*\
  !*** ./assets/js/theme/compare.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Compare)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var Compare = /*#__PURE__*/function (_PageManager) {
  function Compare() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Compare, _PageManager);
  var _proto = Compare.prototype;
  _proto.onReady = function onReady() {
    var _this = this;
    var message = this.context.compareRemoveMessage;
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').on('click', '[data-comparison-remove]', function (event) {
      if (_this.context.comparisons.length <= 2) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
          text: message,
          type: 'error'
        });
        event.preventDefault();
      }
    });
  };
  return Compare;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb21wYXJlX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2xCO0FBQ1E7QUFBQSxJQUVWRyxPQUFPLDBCQUFBQyxZQUFBO0VBQUEsU0FBQUQsUUFBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsY0FBQSxDQUFBSixPQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBSSxNQUFBLEdBQUFMLE9BQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQ3hCRSxPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQUEsSUFBQUMsS0FBQTtJQUNOLElBQU1DLE9BQU8sR0FBRyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0Msb0JBQW9CO0lBRWpEYiw2Q0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDYyxFQUFFLENBQUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFVBQUFDLEtBQUssRUFBSTtNQUN2RCxJQUFJTCxLQUFJLENBQUNFLE9BQU8sQ0FBQ0ksV0FBVyxDQUFDQyxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQ3RDaEIsa0RBQUksQ0FBQztVQUNEaUIsSUFBSSxFQUFFUCxPQUFPO1VBQ2JRLElBQUksRUFBRTtRQUNWLENBQUMsQ0FBQztRQUNGSixLQUFLLENBQUNLLGNBQWMsQ0FBQyxDQUFDO01BQzFCO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUFsQixPQUFBO0FBQUEsRUFiZ0NILHFEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Vjb25kLXNraW4tYXVkaW8vLi9hc3NldHMvanMvdGhlbWUvY29tcGFyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcGFyZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5jb250ZXh0LmNvbXBhcmVSZW1vdmVNZXNzYWdlO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyaXNvbi1yZW1vdmVdJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5jb21wYXJpc29ucy5sZW5ndGggPD0gMikge1xuICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJQYWdlTWFuYWdlciIsIiQiLCJzd2FsIiwiQ29tcGFyZSIsIl9QYWdlTWFuYWdlciIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiX3RoaXMiLCJtZXNzYWdlIiwiY29udGV4dCIsImNvbXBhcmVSZW1vdmVNZXNzYWdlIiwib24iLCJldmVudCIsImNvbXBhcmlzb25zIiwibGVuZ3RoIiwidGV4dCIsInR5cGUiLCJwcmV2ZW50RGVmYXVsdCIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9