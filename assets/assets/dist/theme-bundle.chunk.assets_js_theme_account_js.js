"use strict";
(self["webpackChunksecond_skin_audio"] = self["webpackChunksecond_skin_audio"] || []).push([["assets_js_theme_account_js"],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Account)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }








var Account = /*#__PURE__*/function (_PageManager) {
  function Account(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.$state = jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-field-type="State"]');
    _this.$body = jquery__WEBPACK_IMPORTED_MODULE_1___default()('body');
    return _this;
  }
  _inheritsLoose(Account, _PageManager);
  var _proto = Account.prototype;
  _proto.onReady = function onReady() {
    var $editAccountForm = (0,_common_form_utils__WEBPACK_IMPORTED_MODULE_6__.classifyForm)('form[data-edit-account-form]');
    var $addressForm = (0,_common_form_utils__WEBPACK_IMPORTED_MODULE_6__.classifyForm)('form[data-address-form]');
    var $inboxForm = (0,_common_form_utils__WEBPACK_IMPORTED_MODULE_6__.classifyForm)('form[data-inbox-form]');
    var $accountReturnForm = (0,_common_form_utils__WEBPACK_IMPORTED_MODULE_6__.classifyForm)('[data-account-return-form]');
    var $reorderForm = (0,_common_form_utils__WEBPACK_IMPORTED_MODULE_6__.classifyForm)('[data-account-reorder-form]');
    var $invoiceButton = jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-print-invoice]');

    // Injected via template
    this.passwordRequirements = this.context.passwordRequirements;

    // Instantiates wish list JS
    _wishlist__WEBPACK_IMPORTED_MODULE_3__["default"].load(this.context);
    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);
      if (this.$state.is('input')) {
        (0,_common_form_utils__WEBPACK_IMPORTED_MODULE_6__.insertStateHiddenField)(this.$state);
      }
    }
    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }
    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);
      if (this.$state.is('input')) {
        (0,_common_form_utils__WEBPACK_IMPORTED_MODULE_6__.insertStateHiddenField)(this.$state);
      }
    }
    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }
    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }
    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }
    this.bindDeleteAddress();
  }

  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */;
  _proto.bindDeleteAddress = function bindDeleteAddress() {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-delete-address]').on('submit', function (event) {
      var message = jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.currentTarget).data('deleteAddress');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;
    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = jquery__WEBPACK_IMPORTED_MODULE_1___default()(productCheckbox).val();
        var $input = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });
      if (!submitForm) {
        event.preventDefault();
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
          text: _this2.context.selectItem,
          type: 'error'
        });
      }
    });
  };
  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_4__["default"])($addressForm);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = jquery__WEBPACK_IMPORTED_MODULE_1___default()(stateSelector);
    var addressValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: 'form[data-address-form] input[type="submit"]'
    });
    addressValidator.add(validationModel);
    if ($stateElement) {
      var $last;

      // Requests the states for a country with AJAX
      (0,_common_state_country__WEBPACK_IMPORTED_MODULE_5__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }
        var $field = jquery__WEBPACK_IMPORTED_MODULE_1___default()(field);
        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }
        if ($last) {
          addressValidator.remove($last);
        }
        if ($field.is('select')) {
          $last = field;
          _common_form_utils__WEBPACK_IMPORTED_MODULE_6__.Validators.setStateCountryValidation(addressValidator, field);
        } else {
          _common_form_utils__WEBPACK_IMPORTED_MODULE_6__.Validators.cleanUpStateValidation(field);
        }
      });
    }
    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();
      if (addressValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false;

      // Iterate until we find a non-zero value in the dropdown for quantity
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt(jquery__WEBPACK_IMPORTED_MODULE_1___default()(ele).val(), 10) !== 0) {
          formSubmit = true;

          // Exit out of loop if we found at least one return
          return true;
        }
      });
      if (formSubmit) {
        return true;
      }
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
        text: errorMessage,
        type: 'error'
      });
      return event.preventDefault();
    });
  };
  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_4__["default"])($editAccountForm);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '${formEditSelector} input[type="submit"]'
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = jquery__WEBPACK_IMPORTED_MODULE_1___default()(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = jquery__WEBPACK_IMPORTED_MODULE_1___default()(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = jquery__WEBPACK_IMPORTED_MODULE_1___default()(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = jquery__WEBPACK_IMPORTED_MODULE_1___default()(currentPasswordSelector);

    // This only handles the custom fields, standard fields are added below
    editValidator.add(validationModel);
    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_6__.Validators.setEmailValidation(editValidator, emailSelector);
    }
    if ($passwordElement && $password2Element) {
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_6__.Validators.setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, true);
    }
    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;
          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }
          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }
    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }, {
      selector: formEditSelector + " input[name='account_phone']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.phoneNumber
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();
      if (editValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]'
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();
      if (inboxValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/form-validation.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/form-validation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Validate that the given date for the day/month/year select inputs is within potential range
 * @param $formField
 * @param validation
 * @returns {{selector: string, triggeredBy: string, validate: Function, errorMessage: string}}
 */
function buildDateValidation($formField, validation) {
  // No date range restriction, skip
  if (validation.min_date && validation.max_date) {
    var invalidMessage = "Your chosen date must fall between " + validation.min_date + " and " + validation.max_date + ".";
    var formElementId = $formField.attr('id');
    var minSplit = validation.min_date.split('-');
    var maxSplit = validation.max_date.split('-');
    var minDate = new Date(minSplit[0], minSplit[1] - 1, minSplit[2]);
    var maxDate = new Date(maxSplit[0], maxSplit[1] - 1, maxSplit[2]);
    return {
      selector: "#" + formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = Number($formField.find('select[data-label="day"]').val());
        var month = Number($formField.find('select[data-label="month"]').val()) - 1;
        var year = Number(val);
        var chosenDate = new Date(year, month, day);
        cb(chosenDate >= minDate && chosenDate <= maxDate);
      },
      errorMessage: invalidMessage
    };
  }
}

/**
 * We validate checkboxes separately from single input fields, as they must have at least one checked option
 * from many different inputs
 * @param $formField
 * @param validation
 */
function buildRequiredCheckboxValidation($formField, validation) {
  var formFieldId = $formField.attr('id');
  var primarySelector = "#" + formFieldId + " input:first-of-type";
  var secondarySelector = "#" + formFieldId + " input";
  return {
    selector: primarySelector,
    triggeredBy: secondarySelector,
    validate: function validate(cb) {
      var result = false;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(secondarySelector).each(function (index, checkbox) {
        if (checkbox.checked) {
          result = true;
          return false;
        }
      });
      cb(result);
    },
    errorMessage: "The '" + validation.label + "' field cannot be blank."
  };
}
function buildRequiredValidation(validation, selector) {
  return {
    selector: selector,
    validate: function validate(cb, val) {
      cb(val.length > 0);
    },
    errorMessage: "The '" + validation.label + "' field cannot be blank."
  };
}
function buildNumberRangeValidation(validation, formFieldSelector) {
  var invalidMessage = "The value for " + validation.label + " must be between " + validation.min + " and " + validation.max + ".";
  var min = Number(validation.min);
  var max = Number(validation.max);
  return {
    selector: formFieldSelector + " input[name=\"" + validation.name + "\"]",
    validate: function validate(cb, val) {
      var numberVal = Number(val);
      cb(numberVal >= min && numberVal <= max);
    },
    errorMessage: invalidMessage
  };
}
function buildValidation($validateableElement) {
  var validation = $validateableElement.data('validation');
  var fieldValidations = [];
  var formFieldSelector = "#" + $validateableElement.attr('id');
  if (validation.type === 'datechooser') {
    var dateValidation = buildDateValidation($validateableElement, validation);
    if (dateValidation) {
      fieldValidations.push(dateValidation);
    }
  } else if (validation.required && (validation.type === 'checkboxselect' || validation.type === 'radioselect')) {
    fieldValidations.push(buildRequiredCheckboxValidation($validateableElement, validation));
  } else {
    $validateableElement.find('input, select, textarea').each(function (index, element) {
      var $inputElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
      var tagName = $inputElement.get(0).tagName;
      var inputName = $inputElement.attr('name');
      var elementSelector = formFieldSelector + " " + tagName + "[name=\"" + inputName + "\"]";
      if (validation.type === 'numberonly') {
        fieldValidations.push(buildNumberRangeValidation(validation, formFieldSelector));
      }
      if (validation.required) {
        fieldValidations.push(buildRequiredValidation(validation, elementSelector));
      }
    });
  }
  return fieldValidations;
}

/**
 * Builds the validation model for dynamic forms
 * @param $form
 * @returns {Array}
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($form) {
  var validationsToPerform = [];
  $form.find('[data-validation]').each(function (index, input) {
    validationsToPerform = validationsToPerform.concat(buildValidation(jquery__WEBPACK_IMPORTED_MODULE_0___default()(input)));
  });
  return validationsToPerform;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9hY2NvdW50X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDbEI7QUFDUTtBQUNHO0FBQ2dCO0FBQ0E7QUFDcUM7QUFDeEQ7QUFBQSxJQUVWVSxPQUFPLDBCQUFBQyxZQUFBO0VBQ3hCLFNBQUFELFFBQVlFLE9BQU8sRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDakJBLEtBQUEsR0FBQUYsWUFBQSxDQUFBRyxJQUFBLE9BQU1GLE9BQU8sQ0FBQztJQUVkQyxLQUFBLENBQUtFLE1BQU0sR0FBR2QsNkNBQUMsQ0FBQywyQkFBMkIsQ0FBQztJQUM1Q1ksS0FBQSxDQUFLRyxLQUFLLEdBQUdmLDZDQUFDLENBQUMsTUFBTSxDQUFDO0lBQUMsT0FBQVksS0FBQTtFQUMzQjtFQUFDSSxjQUFBLENBQUFQLE9BQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFPLE1BQUEsR0FBQVIsT0FBQSxDQUFBUyxTQUFBO0VBQUFELE1BQUEsQ0FFREUsT0FBTyxHQUFQLFNBQUFBLE9BQU9BLENBQUEsRUFBRztJQUNOLElBQU1DLGdCQUFnQixHQUFHZixnRUFBWSxDQUFDLDhCQUE4QixDQUFDO0lBQ3JFLElBQU1nQixZQUFZLEdBQUdoQixnRUFBWSxDQUFDLHlCQUF5QixDQUFDO0lBQzVELElBQU1pQixVQUFVLEdBQUdqQixnRUFBWSxDQUFDLHVCQUF1QixDQUFDO0lBQ3hELElBQU1rQixrQkFBa0IsR0FBR2xCLGdFQUFZLENBQUMsNEJBQTRCLENBQUM7SUFDckUsSUFBTW1CLFlBQVksR0FBR25CLGdFQUFZLENBQUMsNkJBQTZCLENBQUM7SUFDaEUsSUFBTW9CLGNBQWMsR0FBR3pCLDZDQUFDLENBQUMsc0JBQXNCLENBQUM7O0lBRWhEO0lBQ0EsSUFBSSxDQUFDMEIsb0JBQW9CLEdBQUcsSUFBSSxDQUFDZixPQUFPLENBQUNlLG9CQUFvQjs7SUFFN0Q7SUFDQXhCLGlEQUFRLENBQUN5QixJ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LGVBQWUsR0FBTWYsaUJBQWlCLFNBQUlZLE9BQU8sZ0JBQVVFLFNBQVMsUUFBSTtNQUU5RSxJQUFJekosVUFBVSxDQUFDMkQsSUFBSSxLQUFLLFlBQVksRUFBRTtRQUNsQ3NGLGdCQUFnQixDQUFDRSxJQUFJLENBQUNULDBCQUEwQixDQUFDMUksVUFBVSxFQUFFMkksaUJBQWlCLENBQUMsQ0FBQztNQUNwRjtNQUNBLElBQUkzSSxVQUFVLENBQUNvSixRQUFRLEVBQUU7UUFDckJILGdCQUFnQixDQUFDRSxJQUFJLENBQUNWLHVCQUF1QixDQUFDekksVUFBVSxFQUFFMEosZUFBZSxDQUFDLENBQUM7TUFDL0U7SUFDSixDQUFDLENBQUM7RUFDTjtFQUVBLE9BQU9ULGdCQUFnQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQWUsb0NBQVVVLEtBQUssRUFBRTtFQUM1QixJQUFJQyxvQkFBb0IsR0FBRyxFQUFFO0VBRTdCRCxLQUFLLENBQUN4RyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLFVBQUNDLEtBQUssRUFBRXVHLEtBQUssRUFBSztJQUNuREQsb0JBQW9CLEdBQUdBLG9CQUFvQixDQUFDRSxNQUFNLENBQUNmLGVBQWUsQ0FBQ2xKLDZDQUFDLENBQUNnSyxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQ2pGLENBQUMsQ0FBQztFQUVGLE9BQU9ELG9CQUFvQjtBQUMvQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Vjb25kLXNraW4tYXVkaW8vLi9hc3NldHMvanMvdGhlbWUvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly9zZWNvbmQtc2tpbi1hdWRpby8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZm9ybS12YWxpZGF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IFdpc2hsaXN0IGZyb20gJy4vd2lzaGxpc3QnO1xuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi9jb21tb24vZm9ybS12YWxpZGF0aW9uJztcbmltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi9jb21tb24vc3RhdGUtY291bnRyeSc7XG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0sIFZhbGlkYXRvcnMsIGluc2VydFN0YXRlSGlkZGVuRmllbGQgfSBmcm9tICcuL2NvbW1vbi9mb3JtLXV0aWxzJztcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgJGVkaXRBY2NvdW50Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWVkaXQtYWNjb3VudC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkYWRkcmVzc0Zvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1hZGRyZXNzLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRpbmJveEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkYWNjb3VudFJldHVybkZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmV0dXJuLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRyZW9yZGVyRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnW2RhdGEtYWNjb3VudC1yZW9yZGVyLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRpbnZvaWNlQnV0dG9uID0gJCgnW2RhdGEtcHJpbnQtaW52b2ljZV0nKTtcblxuICAgICAgICAvLyBJbmplY3RlZCB2aWEgdGVtcGxhdGVcbiAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyA9IHRoaXMuY29udGV4dC5wYXNzd29yZFJlcXVpcmVtZW50cztcblxuICAgICAgICAvLyBJbnN0YW50aWF0ZXMgd2lzaCBsaXN0IEpTXG4gICAgICAgIFdpc2hsaXN0LmxvYWQodGhpcy5jb250ZXh0KTtcblxuICAgICAgICBpZiAoJGVkaXRBY2NvdW50Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSk7XG4gICAgICAgICAgICBpZiAodGhpcy4kc3RhdGUuaXMoJ2lucHV0JykpIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkaW52b2ljZUJ1dHRvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICRpbnZvaWNlQnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0ID0gd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoIC8gMiAtIDQ1MDtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3AgPSB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0IC8gMiAtIDMyMDtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSAkaW52b2ljZUJ1dHRvbi5kYXRhKCdwcmludEludm9pY2UnKTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ29yZGVySW52b2ljZScsIGB3aWR0aD05MDAsaGVpZ2h0PTY1MCxsZWZ0PSR7bGVmdH0sdG9wPSR7dG9wfSxzY3JvbGxiYXJzPTFgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRhZGRyZXNzRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy4kc3RhdGUuaXMoJ2lucHV0JykpIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkaW5ib3hGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckluYm94VmFsaWRhdGlvbigkaW5ib3hGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkYWNjb3VudFJldHVybkZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24oJGFjY291bnRSZXR1cm5Gb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcmVvcmRlckZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRSZW9yZGVyRm9ybSgkcmVvcmRlckZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kRGVsZXRlQWRkcmVzcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGEgc3VibWl0IGhvb2sgdG8gZW5zdXJlIHRoZSBjdXN0b21lciByZWNlaXZlcyBhIGNvbmZpcm1hdGlvbiBkaWFsb2cgYmVmb3JlIGRlbGV0aW5nIGFuIGFkZHJlc3NcbiAgICAgKi9cbiAgICBiaW5kRGVsZXRlQWRkcmVzcygpIHtcbiAgICAgICAgJCgnW2RhdGEtZGVsZXRlLWFkZHJlc3NdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZUFkZHJlc3MnKTtcblxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRSZW9yZGVyRm9ybSgkcmVvcmRlckZvcm0pIHtcbiAgICAgICAgJHJlb3JkZXJGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzID0gJCgnLmFjY291bnQtbGlzdEl0ZW0gLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgbGV0IHN1Ym1pdEZvcm0gPSBmYWxzZTtcblxuICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmZpbmQoJ1tuYW1lXj1cInJlb3JkZXJpdGVtXCJdJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMuZWFjaCgoaW5kZXgsIHByb2R1Y3RDaGVja2JveCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQocHJvZHVjdENoZWNrYm94KS52YWwoKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYHJlb3JkZXJpdGVtWyR7cHJvZHVjdElkfV1gLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzEnLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAkcmVvcmRlckZvcm0uYXBwZW5kKCRpbnB1dCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFzdWJtaXRGb3JtKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jb250ZXh0LnNlbGVjdEl0ZW0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKTtcbiAgICAgICAgY29uc3Qgc3RhdGVTZWxlY3RvciA9ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nO1xuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJChzdGF0ZVNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgYWRkcmVzc1ZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICBpZiAoJHN0YXRlRWxlbWVudCkge1xuICAgICAgICAgICAgbGV0ICRsYXN0O1xuXG4gICAgICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgICAgICBzdGF0ZUNvdW50cnkoJHN0YXRlRWxlbWVudCwgdGhpcy5jb250ZXh0LCAoZXJyLCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkbGFzdCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKGFkZHJlc3NWYWxpZGF0b3IsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJGFkZHJlc3NGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24oJGFjY291bnRSZXR1cm5Gb3JtKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICRhY2NvdW50UmV0dXJuRm9ybS5kYXRhKCdhY2NvdW50UmV0dXJuRm9ybUVycm9yJyk7XG5cbiAgICAgICAgJGFjY291bnRSZXR1cm5Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybVN1Ym1pdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBJdGVyYXRlIHVudGlsIHdlIGZpbmQgYSBub24temVybyB2YWx1ZSBpbiB0aGUgZHJvcGRvd24gZm9yIHF1YW50aXR5XG4gICAgICAgICAgICAkKCdbbmFtZV49XCJyZXR1cm5fcXR5XCJdJywgJGFjY291bnRSZXR1cm5Gb3JtKS5lYWNoKChpLCBlbGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoJChlbGUpLnZhbCgpLCAxMCkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybVN1Ym1pdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRXhpdCBvdXQgb2YgbG9vcCBpZiB3ZSBmb3VuZCBhdCBsZWFzdCBvbmUgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZm9ybVN1Ym1pdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSkge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pO1xuICAgICAgICBjb25zdCBmb3JtRWRpdFNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1lZGl0LWFjY291bnQtZm9ybV0nO1xuICAgICAgICBjb25zdCBlZGl0VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJyR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBlbWFpbFNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIkVtYWlsQWRkcmVzc1wiXWA7XG4gICAgICAgIGNvbnN0ICRlbWFpbEVsZW1lbnQgPSAkKGVtYWlsU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZFNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIlBhc3N3b3JkXCJdYDtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkRWxlbWVudCA9ICQocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkMlNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIkNvbmZpcm1QYXNzd29yZFwiXWA7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZDJFbGVtZW50ID0gJChwYXNzd29yZDJTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIkN1cnJlbnRQYXNzd29yZFwiXWA7XG4gICAgICAgIGNvbnN0ICRjdXJyZW50UGFzc3dvcmQgPSAkKGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yKTtcblxuICAgICAgICAvLyBUaGlzIG9ubHkgaGFuZGxlcyB0aGUgY3VzdG9tIGZpZWxkcywgc3RhbmRhcmQgZmllbGRzIGFyZSBhZGRlZCBiZWxvd1xuICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xuXG4gICAgICAgIGlmICgkZW1haWxFbGVtZW50KSB7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0RW1haWxWYWxpZGF0aW9uKGVkaXRWYWxpZGF0b3IsIGVtYWlsU2VsZWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwYXNzd29yZEVsZW1lbnQgJiYgJHBhc3N3b3JkMkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmQyU2VsZWN0b3IpO1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRQYXNzd29yZFZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgZWRpdFZhbGlkYXRvcixcbiAgICAgICAgICAgICAgICBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGN1cnJlbnRQYXNzd29yZCkge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBjdXJyZW50UGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gJycgJiYgJHBhc3N3b3JkRWxlbWVudC52YWwoKSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmN1cnJlbnRQYXNzd29yZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFtuYW1lPSdhY2NvdW50X2ZpcnN0bmFtZSddYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZmlyc3ROYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbbmFtZT0nYWNjb3VudF9sYXN0bmFtZSddYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQubGFzdE5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFtuYW1lPSdhY2NvdW50X3Bob25lJ11gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5waG9uZU51bWJlcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRlZGl0QWNjb3VudEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmIChlZGl0VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJJbmJveFZhbGlkYXRpb24oJGluYm94Rm9ybSkge1xuICAgICAgICBjb25zdCBpbmJveFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGluYm94VmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gc2VsZWN0W25hbWU9XCJtZXNzYWdlX29yZGVyX2lkXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gTnVtYmVyKHZhbCkgIT09IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyT3JkZXJOdW0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIGlucHV0W25hbWU9XCJtZXNzYWdlX3N1YmplY3RcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlclN1YmplY3QsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIHRleHRhcmVhW25hbWU9XCJtZXNzYWdlX2NvbnRlbnRcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlck1lc3NhZ2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkaW5ib3hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpbmJveFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGluYm94VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBWYWxpZGF0ZSB0aGF0IHRoZSBnaXZlbiBkYXRlIGZvciB0aGUgZGF5L21vbnRoL3llYXIgc2VsZWN0IGlucHV0cyBpcyB3aXRoaW4gcG90ZW50aWFsIHJhbmdlXG4gKiBAcGFyYW0gJGZvcm1GaWVsZFxuICogQHBhcmFtIHZhbGlkYXRpb25cbiAqIEByZXR1cm5zIHt7c2VsZWN0b3I6IHN0cmluZywgdHJpZ2dlcmVkQnk6IHN0cmluZywgdmFsaWRhdGU6IEZ1bmN0aW9uLCBlcnJvck1lc3NhZ2U6IHN0cmluZ319XG4gKi9cbmZ1bmN0aW9uIGJ1aWxkRGF0ZVZhbGlkYXRpb24oJGZvcm1GaWVsZCwgdmFsaWRhdGlvbikge1xuICAgIC8vIE5vIGRhdGUgcmFuZ2UgcmVzdHJpY3Rpb24sIHNraXBcbiAgICBpZiAodmFsaWRhdGlvbi5taW5fZGF0ZSAmJiB2YWxpZGF0aW9uLm1heF9kYXRlKSB7XG4gICAgICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gYFlvdXIgY2hvc2VuIGRhdGUgbXVzdCBmYWxsIGJldHdlZW4gJHt2YWxpZGF0aW9uLm1pbl9kYXRlfSBhbmQgJHt2YWxpZGF0aW9uLm1heF9kYXRlfS5gO1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudElkID0gJGZvcm1GaWVsZC5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCBtaW5TcGxpdCA9IHZhbGlkYXRpb24ubWluX2RhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgY29uc3QgbWF4U3BsaXQgPSB2YWxpZGF0aW9uLm1heF9kYXRlLnNwbGl0KCctJyk7XG4gICAgICAgIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZShtaW5TcGxpdFswXSwgbWluU3BsaXRbMV0gLSAxLCBtaW5TcGxpdFsyXSk7XG4gICAgICAgIGNvbnN0IG1heERhdGUgPSBuZXcgRGF0ZShtYXhTcGxpdFswXSwgbWF4U3BsaXRbMV0gLSAxLCBtYXhTcGxpdFsyXSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0W2RhdGEtbGFiZWw9XCJ5ZWFyXCJdYCxcbiAgICAgICAgICAgIHRyaWdnZXJlZEJ5OiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0Om5vdChbZGF0YS1sYWJlbD1cInllYXJcIl0pYCxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IE51bWJlcigkZm9ybUZpZWxkLmZpbmQoJ3NlbGVjdFtkYXRhLWxhYmVsPVwiZGF5XCJdJykudmFsKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gTnVtYmVyKCRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJtb250aFwiXScpLnZhbCgpKSAtIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IE51bWJlcih2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNob3NlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcblxuICAgICAgICAgICAgICAgIGNiKGNob3NlbkRhdGUgPj0gbWluRGF0ZSAmJiBjaG9zZW5EYXRlIDw9IG1heERhdGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogaW52YWxpZE1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKipcbiAqIFdlIHZhbGlkYXRlIGNoZWNrYm94ZXMgc2VwYXJhdGVseSBmcm9tIHNpbmdsZSBpbnB1dCBmaWVsZHMsIGFzIHRoZXkgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBjaGVja2VkIG9wdGlvblxuICogZnJvbSBtYW55IGRpZmZlcmVudCBpbnB1dHNcbiAqIEBwYXJhbSAkZm9ybUZpZWxkXG4gKiBAcGFyYW0gdmFsaWRhdGlvblxuICovXG5mdW5jdGlvbiBidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uKCRmb3JtRmllbGQsIHZhbGlkYXRpb24pIHtcbiAgICBjb25zdCBmb3JtRmllbGRJZCA9ICRmb3JtRmllbGQuYXR0cignaWQnKTtcbiAgICBjb25zdCBwcmltYXJ5U2VsZWN0b3IgPSBgIyR7Zm9ybUZpZWxkSWR9IGlucHV0OmZpcnN0LW9mLXR5cGVgO1xuICAgIGNvbnN0IHNlY29uZGFyeVNlbGVjdG9yID0gYCMke2Zvcm1GaWVsZElkfSBpbnB1dGA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogcHJpbWFyeVNlbGVjdG9yLFxuICAgICAgICB0cmlnZ2VyZWRCeTogc2Vjb25kYXJ5U2VsZWN0b3IsXG4gICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgJChzZWNvbmRhcnlTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGNoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZTogYFRoZSAnJHt2YWxpZGF0aW9uLmxhYmVsfScgZmllbGQgY2Fubm90IGJlIGJsYW5rLmAsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRSZXF1aXJlZFZhbGlkYXRpb24odmFsaWRhdGlvbiwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgdmFsaWRhdGUoY2IsIHZhbCkge1xuICAgICAgICAgICAgY2IodmFsLmxlbmd0aCA+IDApO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGBUaGUgJyR7dmFsaWRhdGlvbi5sYWJlbH0nIGZpZWxkIGNhbm5vdCBiZSBibGFuay5gLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSB7XG4gICAgY29uc3QgaW52YWxpZE1lc3NhZ2UgPSBgVGhlIHZhbHVlIGZvciAke3ZhbGlkYXRpb24ubGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke3ZhbGlkYXRpb24ubWlufSBhbmQgJHt2YWxpZGF0aW9uLm1heH0uYDtcbiAgICBjb25zdCBtaW4gPSBOdW1iZXIodmFsaWRhdGlvbi5taW4pO1xuICAgIGNvbnN0IG1heCA9IE51bWJlcih2YWxpZGF0aW9uLm1heCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUZpZWxkU2VsZWN0b3J9IGlucHV0W25hbWU9XCIke3ZhbGlkYXRpb24ubmFtZX1cIl1gLFxuICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlclZhbCA9IE51bWJlcih2YWwpO1xuXG4gICAgICAgICAgICBjYihudW1iZXJWYWwgPj0gbWluICYmIG51bWJlclZhbCA8PSBtYXgpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGludmFsaWRNZXNzYWdlLFxuICAgIH07XG59XG5cblxuZnVuY3Rpb24gYnVpbGRWYWxpZGF0aW9uKCR2YWxpZGF0ZWFibGVFbGVtZW50KSB7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9ICR2YWxpZGF0ZWFibGVFbGVtZW50LmRhdGEoJ3ZhbGlkYXRpb24nKTtcbiAgICBjb25zdCBmaWVsZFZhbGlkYXRpb25zID0gW107XG4gICAgY29uc3QgZm9ybUZpZWxkU2VsZWN0b3IgPSBgIyR7JHZhbGlkYXRlYWJsZUVsZW1lbnQuYXR0cignaWQnKX1gO1xuXG4gICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ2RhdGVjaG9vc2VyJykge1xuICAgICAgICBjb25zdCBkYXRlVmFsaWRhdGlvbiA9IGJ1aWxkRGF0ZVZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQsIHZhbGlkYXRpb24pO1xuXG4gICAgICAgIGlmIChkYXRlVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGRhdGVWYWxpZGF0aW9uKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCAmJiAodmFsaWRhdGlvbi50eXBlID09PSAnY2hlY2tib3hzZWxlY3QnIHx8IHZhbGlkYXRpb24udHlwZSA9PT0gJ3JhZGlvc2VsZWN0JykpIHtcbiAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkUmVxdWlyZWRDaGVja2JveFZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQsIHZhbGlkYXRpb24pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkdmFsaWRhdGVhYmxlRWxlbWVudC5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXRFbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXRFbGVtZW50LmdldCgwKS50YWdOYW1lO1xuICAgICAgICAgICAgY29uc3QgaW5wdXROYW1lID0gJGlucHV0RWxlbWVudC5hdHRyKCduYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50U2VsZWN0b3IgPSBgJHtmb3JtRmllbGRTZWxlY3Rvcn0gJHt0YWdOYW1lfVtuYW1lPVwiJHtpbnB1dE5hbWV9XCJdYDtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ251bWJlcm9ubHknKSB7XG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChidWlsZFJlcXVpcmVkVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBlbGVtZW50U2VsZWN0b3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkVmFsaWRhdGlvbnM7XG59XG5cbi8qKlxuICogQnVpbGRzIHRoZSB2YWxpZGF0aW9uIG1vZGVsIGZvciBkeW5hbWljIGZvcm1zXG4gKiBAcGFyYW0gJGZvcm1cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCRmb3JtKSB7XG4gICAgbGV0IHZhbGlkYXRpb25zVG9QZXJmb3JtID0gW107XG5cbiAgICAkZm9ybS5maW5kKCdbZGF0YS12YWxpZGF0aW9uXScpLmVhY2goKGluZGV4LCBpbnB1dCkgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uc1RvUGVyZm9ybSA9IHZhbGlkYXRpb25zVG9QZXJmb3JtLmNvbmNhdChidWlsZFZhbGlkYXRpb24oJChpbnB1dCkpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB2YWxpZGF0aW9uc1RvUGVyZm9ybTtcbn1cbiJdLCJuYW1lcyI6WyJQYWdlTWFuYWdlciIsIiQiLCJub2QiLCJXaXNobGlzdCIsInZhbGlkYXRpb24iLCJzdGF0ZUNvdW50cnkiLCJjbGFzc2lmeUZvcm0iLCJWYWxpZGF0b3JzIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsInN3YWwiLCJBY2NvdW50IiwiX1BhZ2VNYW5hZ2VyIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsIiRzdGF0ZSIsIiRib2R5IiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiJGVkaXRBY2NvdW50Rm9ybSIsIiRhZGRyZXNzRm9ybSIsIiRpbmJveEZvcm0iLCIkYWNjb3VudFJldHVybkZvcm0iLCIkcmVvcmRlckZvcm0iLCIkaW52b2ljZUJ1dHRvbiIsInBhc3N3b3JkUmVxdWlyZW1lbnRzIiwibG9hZCIsImxlbmd0aCIsInJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uIiwiaXMiLCJvbiIsImxlZnQiLCJ3aW5kb3ciLCJzY3JlZW4iLCJhdmFpbFdpZHRoIiwidG9wIiwiYXZhaWxIZWlnaHQiLCJ1cmwiLCJkYXRhIiwib3BlbiIsImluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24iLCJyZWdpc3RlckluYm94VmFsaWRhdGlvbiIsImluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24iLCJpbml0UmVvcmRlckZvcm0iLCJiaW5kRGVsZXRlQWRkcmVzcyIsImV2ZW50IiwibWVzc2FnZSIsImN1cnJlbnRUYXJnZXQiLCJjb25maXJtIiwicHJldmVudERlZmF1bHQiLCJfdGhpczIiLCIkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzIiwic3VibWl0Rm9ybSIsImZpbmQiLCJyZW1vdmUiLCJlYWNoIiwiaW5kZXgiLCJwcm9kdWN0Q2hlY2tib3giLCJwcm9kdWN0SWQiLCJ2YWwiLCIkaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYXBwZW5kIiwidGV4dCIsInNlbGVjdEl0ZW0iLCJ2YWxpZGF0aW9uTW9kZWwiLCJzdGF0ZVNlbGVjdG9yIiwiJHN0YXRlRWxlbWVudCIsImFkZHJlc3NWYWxpZGF0b3IiLCJzdWJtaXQiLCJhZGQiLCIkbGFzdCIsImVyciIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImVycm9yTWVzc2FnZSIsImZvcm1TdWJtaXQiLCJpIiwiZWxlIiwicGFyc2VJbnQiLCJmb3JtRWRpdFNlbGVjdG9yIiwiZWRpdFZhbGlkYXRvciIsImVtYWlsU2VsZWN0b3IiLCIkZW1haWxFbGVtZW50IiwicGFzc3dvcmRTZWxlY3RvciIsIiRwYXNzd29yZEVsZW1lbnQiLCJwYXNzd29yZDJTZWxlY3RvciIsIiRwYXNzd29yZDJFbGVtZW50IiwiY3VycmVudFBhc3N3b3JkU2VsZWN0b3IiLCIkY3VycmVudFBhc3N3b3JkIiwic2V0RW1haWxWYWxpZGF0aW9uIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwicmVzdWx0IiwiY3VycmVudFBhc3N3b3JkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJwaG9uZU51bWJlciIsImluYm94VmFsaWRhdG9yIiwiTnVtYmVyIiwiZW50ZXJPcmRlck51bSIsImVudGVyU3ViamVjdCIsImVudGVyTWVzc2FnZSIsImRlZmF1bHQiLCJidWlsZERhdGVWYWxpZGF0aW9uIiwiJGZvcm1GaWVsZCIsIm1pbl9kYXRlIiwibWF4X2RhdGUiLCJpbnZhbGlkTWVzc2FnZSIsImZvcm1FbGVtZW50SWQiLCJhdHRyIiwibWluU3BsaXQiLCJzcGxpdCIsIm1heFNwbGl0IiwibWluRGF0ZSIsIkRhdGUiLCJtYXhEYXRlIiwidHJpZ2dlcmVkQnkiLCJkYXkiLCJtb250aCIsInllYXIiLCJjaG9zZW5EYXRlIiwiYnVpbGRSZXF1aXJlZENoZWNrYm94VmFsaWRhdGlvbiIsImZvcm1GaWVsZElkIiwicHJpbWFyeVNlbGVjdG9yIiwic2Vjb25kYXJ5U2VsZWN0b3IiLCJjaGVja2JveCIsImNoZWNrZWQiLCJsYWJlbCIsImJ1aWxkUmVxdWlyZWRWYWxpZGF0aW9uIiwiYnVpbGROdW1iZXJSYW5nZVZhbGlkYXRpb24iLCJmb3JtRmllbGRTZWxlY3RvciIsIm1pbiIsIm1heCIsIm51bWJlclZhbCIsImJ1aWxkVmFsaWRhdGlvbiIsIiR2YWxpZGF0ZWFibGVFbGVtZW50IiwiZmllbGRWYWxpZGF0aW9ucyIsImRhdGVWYWxpZGF0aW9uIiwicHVzaCIsInJlcXVpcmVkIiwiZWxlbWVudCIsIiRpbnB1dEVsZW1lbnQiLCJ0YWdOYW1lIiwiZ2V0IiwiaW5wdXROYW1lIiwiZWxlbWVudFNlbGVjdG9yIiwiJGZvcm0iLCJ2YWxpZGF0aW9uc1RvUGVyZm9ybSIsImlucHV0IiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==