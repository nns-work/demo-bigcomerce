"use strict";
(self["webpackChunksecond_skin_audio"] = self["webpackChunksecond_skin_audio"] || []).push([["assets_js_theme_page_js"],{

/***/ "./assets/js/theme/page.js":
/*!*********************************!*\
  !*** ./assets/js/theme/page.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_sq_ft_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/sq-ft-calc */ "./assets/js/theme/product/sq-ft-calc.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Page = /*#__PURE__*/function (_PageManager) {
  function Page() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Page, _PageManager);
  var _proto = Page.prototype;
  _proto.onReady = function onReady() {
    (0,_product_sq_ft_calc__WEBPACK_IMPORTED_MODULE_1__["default"])();
  };
  return Page;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/product/sq-ft-calc.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/product/sq-ft-calc.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// initialize global calculation variables
var areaArray = [];
var vehicleClass = '';
var totalSqFt = 0;
// data for fancy math to calculate square width using square width (addition)
var Data = {
  "2dcar": {
    "floor": 20,
    "doors": 12,
    "roof": 14,
    "firewall": 10,
    "trunk": 16,
    "hood": 12,
    "wheel-wells": 24,
    "undercarriage": 45
  },
  "4dcar": {
    "floor": 22,
    "doors": 24,
    "roof": 16,
    "firewall": 10,
    "trunk": 18,
    "hood": 12,
    "wheel-wells": 24,
    "undercarriage": 50
  },
  "midcar": {
    "floor": 26,
    "doors": 26,
    "roof": 18,
    "firewall": 12,
    "trunk": 22,
    "hood": 14,
    "wheel-wells": 24,
    "undercarriage": 55
  },
  "fullcar": {
    "floor": 28,
    "doors": 26,
    "roof": 20,
    "firewall": 12,
    "trunk": 26,
    "hood": 14,
    "wheel-wells": 24,
    "undercarriage": 60
  },
  "2dtruck": {
    "floor": 20,
    "doors": 14,
    "roof": 14,
    "firewall": 10,
    "trunk": 0,
    "hood": 14,
    "wheel-wells": 28,
    "undercarriage": 36
  },
  "4dtruck": {
    "floor": 28,
    "doors": 24,
    "roof": 22,
    "firewall": 12,
    "trunk": 0,
    "hood": 14,
    "wheel-wells": 28,
    "undercarriage": 45
  },
  "jeep": {
    "floor": 24,
    "doors": 22,
    "roof": 22,
    "firewall": 10,
    "trunk": 24,
    "hood": 14,
    "wheel-wells": 28,
    "undercarriage": 58
  },
  "compactSUV": {
    "floor": 28,
    "doors": 26,
    "roof": 24,
    "firewall": 12,
    "trunk": 30,
    "hood": 14,
    "wheel-wells": 28,
    "undercarriage": 65
  },
  "fullSUV": {
    "floor": 36,
    "doors": 26,
    "roof": 34,
    "firewall": 14,
    "trunk": 32,
    "hood": 14,
    "wheel-wells": 28,
    "undercarriage": 75
  },
  "minivan": {
    "floor": 42,
    "doors": 34,
    "roof": 44,
    "firewall": 14,
    "trunk": 34,
    "hood": 14,
    "wheel-wells": 28,
    "undercarriage": 80
  },
  "cargovan": {
    "floor": 60,
    "doors": 34,
    "roof": 60,
    "firewall": 16,
    "trunk": 34,
    "hood": 14,
    "wheel-wells": 28,
    "undercarriage": 90
  }
};
function handleAreaArray(area) {
  var areaIndex = areaArray.indexOf(area);
  if (areaIndex > -1) {
    // if the area is already in the array, remove it.
    areaArray.splice(areaIndex, 1);
  } else {
    // otherwise, add it
    areaArray.push(area);
  }

  // recalculate total
  calculateTotal();
}
function calculateTotal() {
  // confirm that we have a vehicle class
  var vehicleSelector = document.getElementById("vehicle-class");
  // if not, error
  if (!vehicleClass.length) {
    vehicleSelector.classList.add('error');
    return;
  }
  // if we've updated to have vehicle, remove error
  if (vehicleSelector.classList.contains('error')) {
    vehicleSelector.classList.remove('error');
  }

  // use the global areaArray
  var total = areaArray.reduce(function (acc, area) {
    return acc + Data[vehicleClass][area];
  }, 0);
  // show total in interface
  document.getElementById('sq-ft-calc__value').innerHTML = total;
}
function initializeSquareFootageCalculator() {
  var container = document.querySelector('.sq-ft-calc');
  var tooltipCloseBtn = document.getElementById('sq-ft-close-x');
  var tooltipShowBtn = document.getElementById('sq-ft-tooltip-show');
  var tooltipBox = document.getElementById('sq-ft-tooltip-box');
  var vehicleCoverageBtns = document.querySelectorAll('.sq-ft-calc__btn');
  if (!container) {
    // No calculator was found; bail
    return;
  }

  // showing tooltip
  tooltipShowBtn.addEventListener("click", function () {
    tooltipBox.classList.add('active');
  });

  // removing tooltip
  tooltipCloseBtn.addEventListener("click", function () {
    tooltipBox.classList.remove('active');
  });

  // buttons: toggle active state & modify calculations
  vehicleCoverageBtns.forEach(function (button) {
    button.addEventListener('click', function (e) {
      button.classList.toggle('active');
      // console.log(e.target.dataset.area);
      var area = e.target.dataset.area;
      handleAreaArray(area);
    });
  });
  // change vehicle class to modify calculations
  document.getElementById('vehicle-class').onchange = function () {
    var target = document.getElementById("vehicle-class");

    // grabbing the value for selected vehicle
    vehicleClass = target.options[target.selectedIndex].value;
    var calcBlock = document.querySelector('.sq-ft-calc__calc-content');
    var altBlock = document.querySelector('.sq-ft-calc__alt-content');

    // making the calculator part go away and a phone number alt text appear if sprinter van or other is selected
    if (vehicleClass != 'sprinter-van' && vehicleClass != 'other') {
      calcBlock.classList.remove('not-active');
      altBlock.classList.remove('active');
    } else {
      calcBlock.classList.add('not-active');
      altBlock.classList.add('active');
    }
    calculateTotal();
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeSquareFootageCalculator);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wYWdlX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQzRCO0FBQUEsSUFFaERFLElBQUksMEJBQUFDLFlBQUE7RUFBQSxTQUFBRCxLQUFBO0lBQUEsT0FBQUMsWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBQyxjQUFBLENBQUFKLElBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFJLE1BQUEsR0FBQUwsSUFBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FDdkJFLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFDUlIsK0RBQWlDLENBQUMsQ0FBQztFQUNyQyxDQUFDO0VBQUEsT0FBQUMsSUFBQTtBQUFBLEVBSCtCRixxREFBVzs7Ozs7Ozs7Ozs7Ozs7O0FDSDdDO0FBQ0EsSUFBSVcsU0FBUyxHQUFHLEVBQUU7QUFDbEIsSUFBSUMsWUFBWSxHQUFHLEVBQUU7QUFDckIsSUFBSUMsU0FBUyxHQUFHLENBQUM7QUFDakI7QUFDQSxJQUFNQyxJQUFJLEdBQUc7RUFDVCxPQUFPLEVBQUU7SUFDTCxPQUFPLEVBQUUsRUFBRTtJQUNYLE9BQU8sRUFBRSxFQUFFO0lBQ1gsTUFBTSxFQUFFLEVBQUU7SUFDVixVQUFVLEVBQUUsRUFBRTtJQUNkLE9BQU8sRUFBRSxFQUFFO0lBQ1gsTUFBTSxFQUFFLEVBQUU7SUFDVixhQUFhLEVBQUUsRUFBRTtJQUNqQixlQUFlLEVBQUU7RUFDckIsQ0FBQztFQUNELE9BQU8sRUFBRTtJQUNMLE9BQU8sRUFBRSxFQUFFO0lBQ1gsT0FBTyxFQUFFLEVBQUU7SUFDWCxNQUFNLEVBQUUsRUFBRTtJQUNWLFVBQVUsRUFBRSxFQUFFO0lBQ2QsT0FBTyxFQUFFLEVBQUU7SUFDWCxNQUFNLEVBQUUsRUFBRTtJQUNWLGFBQWEsRUFBRSxFQUFFO0lBQ2pCLGVBQWUsRUFBRTtFQUNyQixDQUFDO0VBQ0QsUUFBUSxFQUFFO0lBQ04sT0FB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QUFDLDBCQUEwQixDQUFDOztJQUVuRTtJQUNBLElBQUl2QixZQUFZLElBQUksY0FBYyxJQUFJQSxZQUFZLElBQUksT0FBTyxFQUFFO01BQzNEd0MsU0FBUyxDQUFDMUIsU0FBUyxDQUFDRyxNQUFNLENBQUMsWUFBWSxDQUFDO01BQ3hDd0IsUUFBUSxDQUFDM0IsU0FBUyxDQUFDRyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUMsTUFBTztNQUNKdUIsU0FBUyxDQUFDMUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO01BQ3JDMEIsUUFBUSxDQUFDM0IsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBRXBDO0lBQ0FOLGNBQWMsQ0FBQyxDQUFDO0VBQ3BCLENBQUM7QUFDSDtBQUNBLGlFQUFlcEIsaUNBQWlDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS9wYWdlLmpzIiwid2VicGFjazovL3NlY29uZC1za2luLWF1ZGlvLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3Qvc3EtZnQtY2FsYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IGluaXRpYWxpemVTcXVhcmVGb290YWdlQ2FsY3VsYXRvciBmcm9tICcuL3Byb2R1Y3Qvc3EtZnQtY2FsYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gIG9uUmVhZHkoKSB7XG4gICAgaW5pdGlhbGl6ZVNxdWFyZUZvb3RhZ2VDYWxjdWxhdG9yKCk7XG4gIH1cbn1cbiIsIi8vIGluaXRpYWxpemUgZ2xvYmFsIGNhbGN1bGF0aW9uIHZhcmlhYmxlc1xubGV0IGFyZWFBcnJheSA9IFtdO1xubGV0IHZlaGljbGVDbGFzcyA9ICcnO1xubGV0IHRvdGFsU3FGdCA9IDA7XG4vLyBkYXRhIGZvciBmYW5jeSBtYXRoIHRvIGNhbGN1bGF0ZSBzcXVhcmUgd2lkdGggdXNpbmcgc3F1YXJlIHdpZHRoIChhZGRpdGlvbilcbmNvbnN0IERhdGEgPSB7XG4gICAgXCIyZGNhclwiOiB7XG4gICAgICAgIFwiZmxvb3JcIjogMjAsXG4gICAgICAgIFwiZG9vcnNcIjogMTIsXG4gICAgICAgIFwicm9vZlwiOiAxNCxcbiAgICAgICAgXCJmaXJld2FsbFwiOiAxMCxcbiAgICAgICAgXCJ0cnVua1wiOiAxNixcbiAgICAgICAgXCJob29kXCI6IDEyLFxuICAgICAgICBcIndoZWVsLXdlbGxzXCI6IDI0LFxuICAgICAgICBcInVuZGVyY2FycmlhZ2VcIjogNDVcbiAgICB9LFxuICAgIFwiNGRjYXJcIjoge1xuICAgICAgICBcImZsb29yXCI6IDIyLFxuICAgICAgICBcImRvb3JzXCI6IDI0LFxuICAgICAgICBcInJvb2ZcIjogMTYsXG4gICAgICAgIFwiZmlyZXdhbGxcIjogMTAsXG4gICAgICAgIFwidHJ1bmtcIjogMTgsXG4gICAgICAgIFwiaG9vZFwiOiAxMixcbiAgICAgICAgXCJ3aGVlbC13ZWxsc1wiOiAyNCxcbiAgICAgICAgXCJ1bmRlcmNhcnJpYWdlXCI6IDUwXG4gICAgfSxcbiAgICBcIm1pZGNhclwiOiB7XG4gICAgICAgIFwiZmxvb3JcIjogMjYsXG4gICAgICAgIFwiZG9vcnNcIjogMjYsXG4gICAgICAgIFwicm9vZlwiOiAxOCxcbiAgICAgICAgXCJmaXJld2FsbFwiOiAxMixcbiAgICAgICAgXCJ0cnVua1wiOiAyMixcbiAgICAgICAgXCJob29kXCI6IDE0LFxuICAgICAgICBcIndoZWVsLXdlbGxzXCI6IDI0LFxuICAgICAgICBcInVuZGVyY2FycmlhZ2VcIjogNTVcbiAgICB9LFxuICAgIFwiZnVsbGNhclwiOiB7XG4gICAgICAgIFwiZmxvb3JcIjogMjgsXG4gICAgICAgIFwiZG9vcnNcIjogMjYsXG4gICAgICAgIFwicm9vZlwiOiAyMCxcbiAgICAgICAgXCJmaXJld2FsbFwiOiAxMixcbiAgICAgICAgXCJ0cnVua1wiOiAyNixcbiAgICAgICAgXCJob29kXCI6IDE0LFxuICAgICAgICBcIndoZWVsLXdlbGxzXCI6IDI0LFxuICAgICAgICBcInVuZGVyY2FycmlhZ2VcIjogNjBcbiAgICB9LFxuICAgIFwiMmR0cnVja1wiOiB7XG4gICAgICAgIFwiZmxvb3JcIjogMjAsXG4gICAgICAgIFwiZG9vcnNcIjogMTQsXG4gICAgICAgIFwicm9vZlwiOiAxNCxcbiAgICAgICAgXCJmaXJld2FsbFwiOiAxMCxcbiAgICAgICAgXCJ0cnVua1wiOiAwLFxuICAgICAgICBcImhvb2RcIjogMTQsXG4gICAgICAgIFwid2hlZWwtd2VsbHNcIjogMjgsXG4gICAgICAgIFwidW5kZXJjYXJyaWFnZVwiOiAzNlxuICAgIH0sXG4gICAgXCI0ZHRydWNrXCI6IHtcbiAgICAgICAgXCJmbG9vclwiOiAyOCxcbiAgICAgICAgXCJkb29yc1wiOiAyNCxcbiAgICAgICAgXCJyb29mXCI6IDIyLFxuICAgICAgICBcImZpcmV3YWxsXCI6IDEyLFxuICAgICAgICBcInRydW5rXCI6IDAsXG4gICAgICAgIFwiaG9vZFwiOiAxNCxcbiAgICAgICAgXCJ3aGVlbC13ZWxsc1wiOiAyOCxcbiAgICAgICAgXCJ1bmRlcmNhcnJpYWdlXCI6IDQ1XG4gICAgfSxcbiAgICBcImplZXBcIjoge1xuICAgICAgICBcImZsb29yXCI6IDI0LFxuICAgICAgICBcImRvb3JzXCI6IDIyLFxuICAgICAgICBcInJvb2ZcIjogMjIsXG4gICAgICAgIFwiZmlyZXdhbGxcIjogMTAsXG4gICAgICAgIFwidHJ1bmtcIjogMjQsXG4gICAgICAgIFwiaG9vZFwiOiAxNCxcbiAgICAgICAgXCJ3aGVlbC13ZWxsc1wiOiAyOCxcbiAgICAgICAgXCJ1bmRlcmNhcnJpYWdlXCI6IDU4XG4gICAgfSxcbiAgICBcImNvbXBhY3RTVVZcIjoge1xuICAgICAgICBcImZsb29yXCI6IDI4LFxuICAgICAgICBcImRvb3JzXCI6IDI2LFxuICAgICAgICBcInJvb2ZcIjogMjQsXG4gICAgICAgIFwiZmlyZXdhbGxcIjogMTIsXG4gICAgICAgIFwidHJ1bmtcIjogMzAsXG4gICAgICAgIFwiaG9vZFwiOiAxNCxcbiAgICAgICAgXCJ3aGVlbC13ZWxsc1wiOiAyOCxcbiAgICAgICAgXCJ1bmRlcmNhcnJpYWdlXCI6IDY1XG4gICAgfSxcbiAgICBcImZ1bGxTVVZcIjoge1xuICAgICAgICBcImZsb29yXCI6IDM2LFxuICAgICAgICBcImRvb3JzXCI6IDI2LFxuICAgICAgICBcInJvb2ZcIjogMzQsXG4gICAgICAgIFwiZmlyZXdhbGxcIjogMTQsXG4gICAgICAgIFwidHJ1bmtcIjogMzIsXG4gICAgICAgIFwiaG9vZFwiOiAxNCxcbiAgICAgICAgXCJ3aGVlbC13ZWxsc1wiOiAyOCxcbiAgICAgICAgXCJ1bmRlcmNhcnJpYWdlXCI6IDc1XG4gICAgfSxcbiAgICBcIm1pbml2YW5cIjoge1xuICAgICAgICBcImZsb29yXCI6IDQyLFxuICAgICAgICBcImRvb3JzXCI6IDM0LFxuICAgICAgICBcInJvb2ZcIjogNDQsXG4gICAgICAgIFwiZmlyZXdhbGxcIjogMTQsXG4gICAgICAgIFwidHJ1bmtcIjogMzQsXG4gICAgICAgIFwiaG9vZFwiOiAxNCxcbiAgICAgICAgXCJ3aGVlbC13ZWxsc1wiOiAyOCxcbiAgICAgICAgXCJ1bmRlcmNhcnJpYWdlXCI6IDgwXG4gICAgfSxcbiAgICBcImNhcmdvdmFuXCI6IHtcbiAgICAgICAgXCJmbG9vclwiOiA2MCxcbiAgICAgICAgXCJkb29yc1wiOiAzNCxcbiAgICAgICAgXCJyb29mXCI6IDYwLFxuICAgICAgICBcImZpcmV3YWxsXCI6IDE2LFxuICAgICAgICBcInRydW5rXCI6IDM0LFxuICAgICAgICBcImhvb2RcIjogMTQsXG4gICAgICAgIFwid2hlZWwtd2VsbHNcIjogMjgsXG4gICAgICAgIFwidW5kZXJjYXJyaWFnZVwiOiA5MFxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGhhbmRsZUFyZWFBcnJheShhcmVhKSB7XG4gICAgY29uc3QgYXJlYUluZGV4ID0gYXJlYUFycmF5LmluZGV4T2YoYXJlYSk7XG4gICAgaWYgKGFyZWFJbmRleCA+IC0xKSB7XG4gICAgICAgIC8vIGlmIHRoZSBhcmVhIGlzIGFscmVhZHkgaW4gdGhlIGFycmF5LCByZW1vdmUgaXQuXG4gICAgICAgIGFyZWFBcnJheS5zcGxpY2UoYXJlYUluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBvdGhlcndpc2UsIGFkZCBpdFxuICAgICAgICBhcmVhQXJyYXkucHVzaChhcmVhKTtcbiAgICB9XG5cbiAgICAvLyByZWNhbGN1bGF0ZSB0b3RhbFxuICAgIGNhbGN1bGF0ZVRvdGFsKCk7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVRvdGFsKCkge1xuICAgIC8vIGNvbmZpcm0gdGhhdCB3ZSBoYXZlIGEgdmVoaWNsZSBjbGFzc1xuICAgIGNvbnN0IHZlaGljbGVTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVoaWNsZS1jbGFzc1wiKTtcbiAgICAvLyBpZiBub3QsIGVycm9yXG4gICAgaWYgKCF2ZWhpY2xlQ2xhc3MubGVuZ3RoKSB7XG4gICAgICAgIHZlaGljbGVTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgICAgICByZXR1cm47XG4gICAgfSBcbiAgICAvLyBpZiB3ZSd2ZSB1cGRhdGVkIHRvIGhhdmUgdmVoaWNsZSwgcmVtb3ZlIGVycm9yXG4gICAgaWYodmVoaWNsZVNlbGVjdG9yLmNsYXNzTGlzdC5jb250YWlucygnZXJyb3InKSkge1xuICAgICAgICB2ZWhpY2xlU2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICB9XG5cbiAgICAvLyB1c2UgdGhlIGdsb2JhbCBhcmVhQXJyYXlcbiAgICBjb25zdCB0b3RhbCA9IGFyZWFBcnJheS5yZWR1Y2UoKGFjYywgYXJlYSkgPT4gYWNjICsgRGF0YVt2ZWhpY2xlQ2xhc3NdW2FyZWFdLCAwKTtcbiAgICAvLyBzaG93IHRvdGFsIGluIGludGVyZmFjZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcS1mdC1jYWxjX192YWx1ZScpLmlubmVySFRNTCA9IHRvdGFsO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplU3F1YXJlRm9vdGFnZUNhbGN1bGF0b3IoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNxLWZ0LWNhbGMnKTtcbiAgICBjb25zdCB0b29sdGlwQ2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3EtZnQtY2xvc2UteCcpO1xuICAgIGNvbnN0IHRvb2x0aXBTaG93QnRuID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcS1mdC10b29sdGlwLXNob3cnKTtcbiAgICBjb25zdCB0b29sdGlwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NxLWZ0LXRvb2x0aXAtYm94Jyk7XG4gICAgY29uc3QgdmVoaWNsZUNvdmVyYWdlQnRucz0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNxLWZ0LWNhbGNfX2J0bicpO1xuXG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgLy8gTm8gY2FsY3VsYXRvciB3YXMgZm91bmQ7IGJhaWxcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNob3dpbmcgdG9vbHRpcFxuICAgIHRvb2x0aXBTaG93QnRuLmFkZEV2ZW50TGlzdGVuZXIoIFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgICAgIHRvb2x0aXBCb3guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAvLyByZW1vdmluZyB0b29sdGlwXG4gICAgdG9vbHRpcENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICAgICAgdG9vbHRpcEJveC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8vIGJ1dHRvbnM6IHRvZ2dsZSBhY3RpdmUgc3RhdGUgJiBtb2RpZnkgY2FsY3VsYXRpb25zXG4gICAgdmVoaWNsZUNvdmVyYWdlQnRucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQuYXJlYSk7XG4gICAgICAgICAgICBsZXQgYXJlYSA9IGUudGFyZ2V0LmRhdGFzZXQuYXJlYTtcbiAgICAgICAgICAgIGhhbmRsZUFyZWFBcnJheShhcmVhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gY2hhbmdlIHZlaGljbGUgY2xhc3MgdG8gbW9kaWZ5IGNhbGN1bGF0aW9uc1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZWhpY2xlLWNsYXNzJykub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVoaWNsZS1jbGFzc1wiKTtcblxuICAgICAgICAvLyBncmFiYmluZyB0aGUgdmFsdWUgZm9yIHNlbGVjdGVkIHZlaGljbGVcbiAgICAgICAgdmVoaWNsZUNsYXNzID0gdGFyZ2V0Lm9wdGlvbnNbdGFyZ2V0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IGNhbGNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcS1mdC1jYWxjX19jYWxjLWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgYWx0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3EtZnQtY2FsY19fYWx0LWNvbnRlbnQnKTtcblxuICAgICAgICAvLyBtYWtpbmcgdGhlIGNhbGN1bGF0b3IgcGFydCBnbyBhd2F5IGFuZCBhIHBob25lIG51bWJlciBhbHQgdGV4dCBhcHBlYXIgaWYgc3ByaW50ZXIgdmFuIG9yIG90aGVyIGlzIHNlbGVjdGVkXG4gICAgICAgIGlmICh2ZWhpY2xlQ2xhc3MgIT0gJ3NwcmludGVyLXZhbicgJiYgdmVoaWNsZUNsYXNzICE9ICdvdGhlcicpIHtcbiAgICAgICAgICAgIGNhbGNCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdub3QtYWN0aXZlJyk7XG4gICAgICAgICAgICBhbHRCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICB9ICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGNCbG9jay5jbGFzc0xpc3QuYWRkKCdub3QtYWN0aXZlJyk7XG4gICAgICAgICAgICBhbHRCbG9jay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGNhbGN1bGF0ZVRvdGFsKCk7XG4gICAgfVxuICB9XG4gIGV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVTcXVhcmVGb290YWdlQ2FsY3VsYXRvcjtcbiJdLCJuYW1lcyI6WyJQYWdlTWFuYWdlciIsImluaXRpYWxpemVTcXVhcmVGb290YWdlQ2FsY3VsYXRvciIsIlBhZ2UiLCJfUGFnZU1hbmFnZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImRlZmF1bHQiLCJhcmVhQXJyYXkiLCJ2ZWhpY2xlQ2xhc3MiLCJ0b3RhbFNxRnQiLCJEYXRhIiwiaGFuZGxlQXJlYUFycmF5IiwiYXJlYSIsImFyZWFJbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwiY2FsY3VsYXRlVG90YWwiLCJ2ZWhpY2xlU2VsZWN0b3IiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29udGFpbnMiLCJyZW1vdmUiLCJ0b3RhbCIsInJlZHVjZSIsImFjYyIsImlubmVySFRNTCIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJ0b29sdGlwQ2xvc2VCdG4iLCJ0b29sdGlwU2hvd0J0biIsInRvb2x0aXBCb3giLCJ2ZWhpY2xlQ292ZXJhZ2VCdG5zIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JFYWNoIiwiYnV0dG9uIiwiZSIsInRvZ2dsZSIsInRhcmdldCIsImRhdGFzZXQiLCJvbmNoYW5nZSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidmFsdWUiLCJjYWxjQmxvY2siLCJhbHRCbG9jayJdLCJzb3VyY2VSb290IjoiIn0=