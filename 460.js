"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[460],{

/***/ 5740:
/*!********************************************************!*\
  !*** ./src/app/ApiClient.Backend/services/nickname.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _backend_Common_nickname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../backend/Common/nickname */ 8805);
/* harmony import */ var _helpers_observables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/observables */ 2594);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_helpers_observables__WEBPACK_IMPORTED_MODULE_1__.ToService)(_backend_Common_nickname__WEBPACK_IMPORTED_MODULE_0__.Nickname));

/***/ }),

/***/ 5240:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/settings/components/change-password/change-password.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordComponent: () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/auth/auth.selectors */ 4590);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _utils_signup_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/signup-validators */ 1784);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @enums/urls */ 5500);
/* harmony import */ var _store_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/settings/settings.actions */ 2307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/container/container.component */ 2580);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/password */ 3219);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
















function ChangePasswordComponent_small_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_PASSWORD"), " ");
  }
}
function ChangePasswordComponent_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_PASSWORD"), " ");
  }
}
function ChangePasswordComponent_small_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ERROR.MIN_LENGTH_PASSWORD"), " ");
  }
}
function ChangePasswordComponent_small_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_CONFIRM_PASSWORD"), " ");
  }
}
function ChangePasswordComponent_small_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ERROR.NO_MATCH_PASSWORD"), " ");
  }
}
const _c0 = a0 => [a0];
let ChangePasswordComponent = /*#__PURE__*/(() => {
  class ChangePasswordComponent {
    onSubmit() {
      if (this.changePasswordForm.invalid) {
        this.changePasswordForm.markAllAsTouched();
        return;
      }
      const changePasswordData = {
        password: this.changePasswordForm.get('newPassword')?.value,
        actualPassword: this.changePasswordForm.get('oldPassword')?.value
      };
      this.store.dispatch((0,_store_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__.changePasswordAction)({
        changePasswordData
      }));
    }
    constructor(store) {
      this.store = store;
      this.isLoading$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_0__.selectIsLoadingAuth);
      this.changePasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
        oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
        newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8)]),
        confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
      }, [_utils_signup_validators__WEBPACK_IMPORTED_MODULE_1__.SignupValidators.passwordMatch('newPassword', 'confirmPassword')]);
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_2__.URLS;
    }
    static #_ = this.ɵfac = function ChangePasswordComponent_Factory(t) {
      return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ChangePasswordComponent,
      selectors: [["app-change-password"]],
      decls: 25,
      vars: 38,
      consts: [[3, "width"], [1, "font-bold", "text-2xl", "mb-5", "w-full", "flex", "justify-content-center"], [1, "w-full", 3, "formGroup", "ngSubmit"], [1, "mb-3", "input-group"], ["id", "oldPassword", "styleClass", "w-full", "inputStyleClass", "w-full", "formControlName", "oldPassword", 3, "feedback", "toggleMask", "placeholder"], ["class", "error-message text-sm text-red-400", 4, "ngIf"], ["id", "newPassword", "styleClass", "w-full", "inputStyleClass", "w-full", "formControlName", "newPassword", 3, "toggleMask", "placeholder"], ["inputId", "confirmPassword", "id", "confirmPassword", "styleClass", "w-full", "inputStyleClass", "w-full", "formControlName", "confirmPassword", 3, "toggleMask", "feedback", "placeholder", "required"], [1, "flex", "flex-column", "md:flex-row", "gap-3", "w-full"], ["pButton", "", "pRipple", "", "icon", "pi pi-user-edit", 1, "w-full", "md:w-auto", "flex-grow-1", 3, "routerLink", "label"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "w-full", "md:w-auto", "flex-grow-1", 3, "loading", "label", "disabled"], [1, "error-message", "text-sm", "text-red-400"]],
      template: function ChangePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-container", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "p-password", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ChangePasswordComponent_small_8_Template, 3, 3, "small", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "p-password", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ChangePasswordComponent_small_12_Template, 3, 3, "small", 5)(13, ChangePasswordComponent_small_13_Template, 3, 3, "small", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "p-password", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ChangePasswordComponent_small_17_Template, 3, 3, "small", 5)(18, ChangePasswordComponent_small_18_Template, 3, 3, "small", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_6_0;
          let tmp_9_0;
          let tmp_10_0;
          let tmp_15_0;
          let tmp_16_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 600);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 22, "CHANGE_PASSWORD_PAGE.TITLE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.changePasswordForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("feedback", false)("toggleMask", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 24, "PLACEHOLDER.OLD_PASSWORD"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.changePasswordForm.get("oldPassword")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx.changePasswordForm.get("oldPassword")) == null ? null : tmp_6_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("toggleMask", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 26, "PLACEHOLDER.NEW_PASSWORD"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.changePasswordForm.get("newPassword")) == null ? null : tmp_9_0.hasError("required")) && ((tmp_9_0 = ctx.changePasswordForm.get("newPassword")) == null ? null : tmp_9_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.changePasswordForm.get("newPassword")) == null ? null : tmp_10_0.hasError("minlength")) && ((tmp_10_0 = ctx.changePasswordForm.get("newPassword")) == null ? null : tmp_10_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("toggleMask", true)("feedback", false)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 28, "PLACEHOLDER.CONFIRM_NEW_PASSWORD"))("required", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx.changePasswordForm.get("confirmPassword")) == null ? null : tmp_15_0.hasError("required")) && ((tmp_15_0 = ctx.changePasswordForm.get("confirmPassword")) == null ? null : tmp_15_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_16_0 = ctx.changePasswordForm.get("confirmPassword")) == null ? null : tmp_16_0.hasError("noMatch")) && ((tmp_16_0 = ctx.changePasswordForm.get("confirmPassword")) == null ? null : tmp_16_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](36, _c0, ctx.URLS.BACK))("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 30, "BTN.TO_SETTINGS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("loading", !!_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 32, ctx.isLoading$))("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 34, "BTN.CHANGE_PASSWORD"))("disabled", !ctx.changePasswordForm.valid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_4__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.Ripple, primeng_password__WEBPACK_IMPORTED_MODULE_12__.Password, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
      styles: [".input-group[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 1fr;\n  row-gap: 0.5rem;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  padding-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2V0dGluZ3MvY29tcG9uZW50cy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZ3JvdXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgcm93LWdhcDogMC41cmVtO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return ChangePasswordComponent;
})();

/***/ }),

/***/ 9549:
/*!*****************************************************************!*\
  !*** ./src/app/pages/settings/components/settings.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsComponent: () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _ApiClient_services_nickname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ApiClient/services/nickname */ 5740);
/* harmony import */ var _ApiClient_backend_Common_nickname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ApiClient/backend/Common/nickname */ 8805);
/* harmony import */ var _ApiClient_backend_Register_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ApiClient/backend/Register/register */ 1802);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @enums/urls */ 5500);
/* harmony import */ var _store_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/settings/settings.selectors */ 4921);
/* harmony import */ var _store_settings_settings_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store/settings/settings.actions */ 2307);
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/auth/auth.selectors */ 4590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/container/container.component */ 2580);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/calendar */ 7411);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/inputtextarea */ 652);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/tooltip */ 1251);



























function SettingsComponent_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.INVALID_EMAIL"), " ");
  }
}
function SettingsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("error", (tmp_0_0 = ctx_r1.settingsForm.get("nickname")) == null ? null : tmp_0_0.hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r1.settingsForm.value.nickname == null ? null : ctx_r1.settingsForm.value.nickname.length, "/", ctx_r1.maxLengthNickname, " ");
  }
}
function SettingsComponent_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_NICKNAME"), " ");
  }
}
function SettingsComponent_small_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.MAX_LIMIT"), " ");
  }
}
function SettingsComponent_small_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.NICKNAME_SPACES"), " ");
  }
}
function SettingsComponent_small_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.NICKNAME_EXIST"), " ");
  }
}
function SettingsComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("error", (tmp_0_0 = ctx_r6.settingsForm.get("profileName")) == null ? null : tmp_0_0.hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r6.settingsForm.value.profileName == null ? null : ctx_r6.settingsForm.value.profileName.length, "/", ctx_r6.maxLengthName, " ");
  }
}
function SettingsComponent_small_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_PROFILE_NAME"), " ");
  }
}
function SettingsComponent_small_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.MAX_LIMIT"), " ");
  }
}
function SettingsComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("error", (tmp_0_0 = ctx_r9.settingsForm.get("firstName")) == null ? null : tmp_0_0.hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r9.settingsForm.value.firstName == null ? null : ctx_r9.settingsForm.value.firstName.length, "/", ctx_r9.maxLengthLastName, " ");
  }
}
function SettingsComponent_small_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_FIRST_NAME"), " ");
  }
}
function SettingsComponent_small_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.MAX_LIMIT"), " ");
  }
}
function SettingsComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("error", (tmp_0_0 = ctx_r12.settingsForm.get("lastName")) == null ? null : tmp_0_0.hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r12.settingsForm.value.lastName == null ? null : ctx_r12.settingsForm.value.lastName.length, "/", ctx_r12.maxLengthLastName, " ");
  }
}
function SettingsComponent_small_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_LAST_NAME"), " ");
  }
}
function SettingsComponent_small_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.MAX_LIMIT"), " ");
  }
}
function SettingsComponent_small_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_BIRTHDATE"), " ");
  }
}
function SettingsComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("error", (tmp_0_0 = ctx_r16.settingsForm.get("website")) == null ? null : tmp_0_0.hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r16.settingsForm.value.website == null ? null : ctx_r16.settingsForm.value.website.length, "/", ctx_r16.maxLengthWebsite, " ");
  }
}
function SettingsComponent_small_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.MAX_LIMIT"), " ");
  }
}
function SettingsComponent_small_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.WEBSITE_FORMAT"), " ");
  }
}
function SettingsComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("error", (tmp_0_0 = ctx_r19.settingsForm.get("bio")) == null ? null : tmp_0_0.hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r19.settingsForm.value.bio == null ? null : ctx_r19.settingsForm.value.bio.length, "/", ctx_r19.maxLengthBio, " ");
  }
}
function SettingsComponent_small_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.MAX_LIMIT"), " ");
  }
}
const _c0 = a0 => [a0];
const _c1 = (a0, a1, a2) => [a0, a1, a2];
let SettingsComponent = /*#__PURE__*/(() => {
  class SettingsComponent {
    constructor(store, translate, toast) {
      this.store = store;
      this.translate = translate;
      this.toast = toast;
      this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
      this.isLoading$ = this.store.select(_store_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsLoadingSettings);
      this.userNickname$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_6__.selectCurrentUserNickname);
      this.initialFormValues = {};
      this.maxLengthName = _ApiClient_backend_Register_register__WEBPACK_IMPORTED_MODULE_2__.Register.MaxNameLength;
      this.maxLengthLastName = _ApiClient_backend_Register_register__WEBPACK_IMPORTED_MODULE_2__.Register.MaxLastNameLength;
      this.maxLengthNickname = _ApiClient_backend_Common_nickname__WEBPACK_IMPORTED_MODULE_1__.Nickname.MaxLengthNicknameUrl;
      this.maxLengthBio = 5000;
      this.maxLengthWebsite = 350;
      this.settingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl({
          value: '',
          disabled: true
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.email]),
        nickname: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(this.maxLengthNickname), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(/^[a-zA-Z0-9_-]*$/)], [this.nicknameValidator()]),
        profileName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(this.maxLengthName)]),
        firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(this.maxLengthLastName)]),
        lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(this.maxLengthLastName)]),
        birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(10)]),
        bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(this.maxLengthBio)]),
        website: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(this.maxLengthWebsite), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)])
      });
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_3__.URLS;
    }
    ngOnInit() {
      this.store.dispatch((0,_store_settings_settings_actions__WEBPACK_IMPORTED_MODULE_5__.getUserSettingsAction)());
      this.maxDate = new Date();
      this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_6__.selectCurrentUserNickname).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe$)).subscribe(nickname => {
        this.settingsForm.patchValue({
          nickname
        });
        this.initialFormValues.nickname = nickname ?? undefined;
      });
      this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_6__.selectCurrentUserProfileName).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe$)).subscribe(profileName => {
        this.settingsForm.patchValue({
          profileName
        });
        this.initialFormValues.profileName = profileName ?? undefined;
      });
      this.store.select(_store_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIdentity).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe$)).subscribe(identity => {
        this.settingsForm.patchValue({
          firstName: identity.firstName
        });
        this.settingsForm.patchValue({
          lastName: identity.lastName
        });
        this.settingsForm.patchValue({
          birthDate: new Date(identity.birthDate)
        });
        this.settingsForm.patchValue({
          bio: identity.bio
        });
        this.settingsForm.patchValue({
          website: identity.website
        });
        this.initialFormValues.firstName = identity.firstName ?? undefined;
        this.initialFormValues.lastName = identity.lastName ?? undefined;
        this.initialFormValues.birthDate = new Date(identity.birthDate) ?? undefined;
        this.initialFormValues.bio = identity.bio ?? undefined;
        this.initialFormValues.website = identity.website ?? undefined;
      });
      this.store.select(_store_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_4__.selectEmail).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe$)).subscribe(email => {
        this.settingsForm.patchValue({
          email
        });
      });
    }
    ngOnDestroy() {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }
    onSubmit() {
      if (this.settingsForm.invalid) {
        this.settingsForm.markAllAsTouched();
        return;
      }
      const changedValues = this.compareObjectsWithoutDate(this.settingsForm.value, this.initialFormValues);
      const isFormChanged = Object.values(changedValues).some(value => value !== undefined);
      const isDateChanged = this.settingsForm.get('birthDate')?.value?.toString() !== this.initialFormValues.birthDate?.toString();
      if (isDateChanged || isFormChanged) {
        this.store.dispatch((0,_store_settings_settings_actions__WEBPACK_IMPORTED_MODULE_5__.updateUserSettings)({
          settings: {
            nicknameDisplayed: changedValues.nickname,
            nicknameUrl: changedValues.nickname,
            name: changedValues.profileName,
            birthDate: this.settingsForm.get('birthDate')?.value,
            firstName: changedValues.firstName,
            lastName: changedValues.lastName,
            biography: changedValues.bio,
            website: changedValues.website,
            langCode: this.translate.currentLang
          }
        }));
      } else {
        this.toast.add({
          severity: 'error',
          summary: this.translate.instant('ERROR.TITLE'),
          detail: this.translate.instant('ERROR.NOTHING_TO_CHANGE')
        });
      }
    }
    compareObjectsWithoutDate(obj1, obj2) {
      const res = {};
      Object.keys(obj1).map(key => {
        const typedKey = key;
        if (typedKey !== 'birthDate') {
          if (obj1[typedKey] === obj2[typedKey]) {
            res[typedKey] = undefined;
          } else {
            res[typedKey] = obj1[typedKey];
          }
        }
      });
      return res;
    }
    nicknameValidator() {
      return control => {
        return _ApiClient_services_nickname__WEBPACK_IMPORTED_MODULE_0__["default"].exist(control.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(isExist => {
          if (!isExist || control.value === this.initialFormValues.nickname) {
            return null;
          } else {
            return {
              nicknameTaken: true
            };
          }
        }));
      };
    }
    static #_ = this.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_15__.MessageService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      decls: 88,
      vars: 106,
      consts: [[3, "width", "isLoading"], [1, "font-bold", "text-2xl", "mb-5", "w-full", "flex", "justify-content-center"], [1, "w-full", 3, "formGroup", "ngSubmit"], [1, "mb-3", "input-group"], ["for", "email", 1, "block", "font-normal"], ["id", "email", "type", "text", "pInputText", "", "formControlName", "email", 1, "w-full", 3, "placeholder"], ["class", "error-message text-sm text-red-400", 4, "ngIf"], [1, "mb-3", "input-group", "relative"], ["for", "nickname", 1, "flex", "align-items-center", "gap-2", "font-normal"], ["tooltipPosition", "top", 1, "pi", "pi-question-circle", 3, "pTooltip", "positionTop"], ["id", "nickname", "type", "text", "pInputText", "", "formControlName", "nickname", 1, "w-full", 3, "placeholder"], ["class", "input-letter-count", 3, "error", 4, "ngIf"], ["for", "profileName", 1, "flex", "align-items-center", "gap-2", "font-normal"], ["id", "profileName", "type", "text", "pInputText", "", "formControlName", "profileName", 1, "w-full", 3, "placeholder"], ["for", "firstName", 1, "block", "font-normal"], ["id", "firstName", "type", "text", "pInputText", "", "formControlName", "firstName", 1, "w-full", 3, "placeholder"], ["for", "lastName", 1, "block", "font-normal"], ["id", "lastName", "type", "text", "pInputText", "", "formControlName", "lastName", 1, "w-full", 3, "placeholder"], ["for", "birthDate", 1, "block", "font-normal"], ["id", "birthDate", "inputId", "birthDate", "styleClass", "w-full", "dateFormat", "dd/mm/yy", 3, "formControl", "showIcon", "maxDate", "placeholder"], ["for", "website", 1, "block", "font-normal"], ["id", "website", "type", "text", "pInputText", "", "formControlName", "website", 1, "w-full", 3, "placeholder"], [1, "mb-3", "input-group", "align-items-start"], ["for", "bio", 1, "block", "font-normal", "pt-3"], [1, "relative"], ["id", "bio", "rows", "3", "pInputTextarea", "", "formControlName", "bio", 1, "w-full", 3, "autoResize", "placeholder"], ["class", "input-letter-count-bio", 3, "error", 4, "ngIf"], [1, "flex", "flex-column", "md:flex-row", "gap-3", "pt-2", "w-full", "flex-wrap"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-key", 1, "w-full", "md:w-auto", "flex-grow-1", 3, "routerLink", "label"], ["icon", "pi pi-user", "pButton", "", "pRipple", "", 1, "w-full", "md:w-auto", "flex-grow-1", 3, "routerLink", "label"], ["type", "submit", "pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "w-full", "md:w-auto", "flex-grow-1", 3, "disabled", "label"], [1, "error-message", "text-sm", "text-red-400"], [1, "input-letter-count"], [1, "input-letter-count-bio"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 3)(7, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, SettingsComponent_small_12_Template, 3, 3, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 7)(14, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, SettingsComponent_div_21_Template, 2, 4, "div", 11)(22, SettingsComponent_small_22_Template, 3, 3, "small", 6)(23, SettingsComponent_small_23_Template, 3, 3, "small", 6)(24, SettingsComponent_small_24_Template, 3, 3, "small", 6)(25, SettingsComponent_small_25_Template, 3, 3, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 7)(27, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, SettingsComponent_div_34_Template, 2, 4, "div", 11)(35, SettingsComponent_small_35_Template, 3, 3, "small", 6)(36, SettingsComponent_small_36_Template, 3, 3, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 7)(38, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](40, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, SettingsComponent_div_43_Template, 2, 4, "div", 11)(44, SettingsComponent_small_44_Template, 3, 3, "small", 6)(45, SettingsComponent_small_45_Template, 3, 3, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 7)(47, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](49, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](50, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](51, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, SettingsComponent_div_52_Template, 2, 4, "div", 11)(53, SettingsComponent_small_53_Template, 3, 3, "small", 6)(54, SettingsComponent_small_54_Template, 3, 3, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 3)(56, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](58, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](59, "p-calendar", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](60, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, SettingsComponent_small_61_Template, 3, 3, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 7)(63, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](65, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](67, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](68, SettingsComponent_div_68_Template, 2, 4, "div", 11)(69, SettingsComponent_small_69_Template, 3, 3, "small", 6)(70, SettingsComponent_small_70_Template, 3, 3, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 22)(72, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, "Bio");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 24)(75, "textarea", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](76, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, "        ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](78, SettingsComponent_div_78_Template, 2, 4, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](79, SettingsComponent_small_79_Template, 3, 3, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](81, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](82, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](83, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](84, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](85, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](86, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](87, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_6_0;
          let tmp_12_0;
          let tmp_13_0;
          let tmp_14_0;
          let tmp_15_0;
          let tmp_21_0;
          let tmp_22_0;
          let tmp_26_0;
          let tmp_27_0;
          let tmp_31_0;
          let tmp_32_0;
          let tmp_38_0;
          let tmp_42_0;
          let tmp_43_0;
          let tmp_47_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", 600)("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 54, ctx.isLoading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 56, "SETTINGS_PAGE.TITLE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.settingsForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 58, "LABEL.EMAIL"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 60, "PLACEHOLDER.EMAIL"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.settingsForm.get("email")) == null ? null : tmp_6_0.hasError("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 62, "LABEL.NICKNAME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 64, "TOOLTIP.NICKNAME"))("positionTop", -8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 66, "PLACEHOLDER.NICKNAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.settingsForm.controls.nickname.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.settingsForm.get("nickname")) == null ? null : tmp_12_0.hasError("required")) && ((tmp_12_0 = ctx.settingsForm.get("nickname")) == null ? null : tmp_12_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx.settingsForm.get("nickname")) == null ? null : tmp_13_0.hasError("maxlength")) && ((tmp_13_0 = ctx.settingsForm.get("nickname")) == null ? null : tmp_13_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.settingsForm.get("nickname")) == null ? null : tmp_14_0.hasError("pattern")) && ((tmp_14_0 = ctx.settingsForm.get("nickname")) == null ? null : tmp_14_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx.settingsForm.get("nickname")) == null ? null : tmp_15_0.hasError("nicknameTaken")) && ((tmp_15_0 = ctx.settingsForm.get("nickname")) == null ? null : tmp_15_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 68, "LABEL.PROFILE_NAME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 70, "TOOLTIP.PROFILE_NAME_SETTINGS"))("positionTop", -8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 72, "PLACEHOLDER.PROFILE_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.settingsForm.controls.profileName.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_21_0 = ctx.settingsForm.get("profileName")) == null ? null : tmp_21_0.hasError("required")) && ((tmp_21_0 = ctx.settingsForm.get("profileName")) == null ? null : tmp_21_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_22_0 = ctx.settingsForm.get("profileName")) == null ? null : tmp_22_0.hasError("maxlength")) && ((tmp_22_0 = ctx.settingsForm.get("profileName")) == null ? null : tmp_22_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](40, 74, "LABEL.FIRST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](42, 76, "PLACEHOLDER.FIRST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.settingsForm.controls.firstName.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_26_0 = ctx.settingsForm.get("firstName")) == null ? null : tmp_26_0.hasError("required")) && ((tmp_26_0 = ctx.settingsForm.get("firstName")) == null ? null : tmp_26_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_27_0 = ctx.settingsForm.get("firstName")) == null ? null : tmp_27_0.hasError("maxlength")) && ((tmp_27_0 = ctx.settingsForm.get("firstName")) == null ? null : tmp_27_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](49, 78, "LABEL.LAST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](51, 80, "PLACEHOLDER.LAST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.settingsForm.controls.lastName.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_31_0 = ctx.settingsForm.get("lastName")) == null ? null : tmp_31_0.hasError("required")) && ((tmp_31_0 = ctx.settingsForm.get("lastName")) == null ? null : tmp_31_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_32_0 = ctx.settingsForm.get("lastName")) == null ? null : tmp_32_0.hasError("maxlength")) && ((tmp_32_0 = ctx.settingsForm.get("lastName")) == null ? null : tmp_32_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](58, 82, "LABEL.BIRTH_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.settingsForm.controls.birthDate)("showIcon", true)("maxDate", ctx.maxDate)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](60, 84, "PLACEHOLDER.BIRTH_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_38_0 = ctx.settingsForm.get("birthDate")) == null ? null : tmp_38_0.hasError("required")) && ((tmp_38_0 = ctx.settingsForm.get("birthDate")) == null ? null : tmp_38_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](65, 86, "LABEL.WEBSITE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](67, 88, "PLACEHOLDER.WEBSITE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.settingsForm.controls.website.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_42_0 = ctx.settingsForm.get("website")) == null ? null : tmp_42_0.hasError("maxlength")) && ((tmp_42_0 = ctx.settingsForm.get("website")) == null ? null : tmp_42_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_43_0 = ctx.settingsForm.get("website")) == null ? null : tmp_43_0.hasError("pattern")) && ((tmp_43_0 = ctx.settingsForm.get("website")) == null ? null : tmp_43_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("autoResize", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](76, 90, "PLACEHOLDER.BIO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.settingsForm.controls.bio.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_47_0 = ctx.settingsForm.get("bio")) == null ? null : tmp_47_0.hasError("maxlength")) && ((tmp_47_0 = ctx.settingsForm.get("bio")) == null ? null : tmp_47_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](100, _c0, ctx.URLS.CHANGE_PASSWORD))("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](82, 92, "BTN.CHANGE_PASSWORD"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](102, _c1, ctx.URLS.BACK, ctx.URLS.PROFILE, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](84, 94, ctx.userNickname$)))("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](85, 96, "BTN.TO_PROFILE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.settingsForm.valid && (ctx.settingsForm.dirty || ctx.settingsForm.touched))("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](87, 98, "BTN.UPDATE_SETTINGS"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLink, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_7__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_19__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_20__.Ripple, primeng_calendar__WEBPACK_IMPORTED_MODULE_21__.Calendar, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_22__.InputTextarea, primeng_tooltip__WEBPACK_IMPORTED_MODULE_23__.Tooltip, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
      styles: [".input-letter-count-bio[_ngcontent-%COMP%] {\n  padding: 5px 2px;\n  background-color: #3b3b3b;\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n.input-letter-count-bio.error[_ngcontent-%COMP%] {\n  color: var(--red-400);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2V0dGluZ3MvY29tcG9uZW50cy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1sZXR0ZXItY291bnQtYmlvIHtcbiAgcGFkZGluZzogNXB4IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzYjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xuXG4gICYuZXJyb3Ige1xuICAgIGNvbG9yOiB2YXIoLS1yZWQtNDAwKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return SettingsComponent;
})();

/***/ }),

/***/ 4884:
/*!***********************************************************!*\
  !*** ./src/app/pages/settings/settings-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsRoutingModule: () => (/* binding */ SettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 862);
/* harmony import */ var _components_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/settings.component */ 9549);
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/change-password/change-password.component */ 5240);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @enums/urls */ 5500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);








const routes = [{
  path: '',
  component: _components_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent
}, {
  path: _enums_urls__WEBPACK_IMPORTED_MODULE_2__.URLS.CHANGE_PASSWORD,
  component: _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent
}];
let SettingsRoutingModule = /*#__PURE__*/(() => {
  class SettingsRoutingModule {
    static #_ = this.ɵfac = function SettingsRoutingModule_Factory(t) {
      return new (t || SettingsRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: SettingsRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
  return SettingsRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SettingsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 2460:
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsModule: () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _components_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/settings.component */ 9549);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-routing.module */ 4884);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/container/container.component */ 2580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/calendar */ 7411);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtextarea */ 652);
/* harmony import */ var src_app_shared_components_photo_edit_profile_photo_edit_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/photo-edit-profile/photo-edit-profile.component */ 313);
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/change-password/change-password.component */ 5240);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/password */ 3219);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tooltip */ 1251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
















let SettingsModule = /*#__PURE__*/(() => {
  class SettingsModule {
    static #_ = this.ɵfac = function SettingsModule_Factory(t) {
      return new (t || SettingsModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: SettingsModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__.SettingsRoutingModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.RippleModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_12__.CalendarModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__.InputTextareaModule, src_app_shared_components_photo_edit_profile_photo_edit_profile_component__WEBPACK_IMPORTED_MODULE_3__.PhotoEditProfileComponent, primeng_password__WEBPACK_IMPORTED_MODULE_14__.PasswordModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__.TooltipModule]
    });
  }
  return SettingsModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SettingsModule, {
    declarations: [_components_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent, _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__.ChangePasswordComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__.SettingsRoutingModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.RippleModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_12__.CalendarModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__.InputTextareaModule, src_app_shared_components_photo_edit_profile_photo_edit_profile_component__WEBPACK_IMPORTED_MODULE_3__.PhotoEditProfileComponent, primeng_password__WEBPACK_IMPORTED_MODULE_14__.PasswordModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__.TooltipModule]
  });
})();

/***/ }),

/***/ 9648:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/image-cropper/image-cropper.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageCropperComponent: () => (/* binding */ ImageCropperComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-image-cropper */ 4214);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dialog */ 3311);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/fileupload */ 8285);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 8026);

/* eslint-disable no-debugger */













const _c0 = ["input"];
const _c1 = () => ({
  width: "50vw"
});
const _c2 = () => ({
  "960px": "75vw",
  "640px": "100vw"
});
let ImageCropperComponent = /*#__PURE__*/(() => {
  class ImageCropperComponent {
    constructor(toast, translate) {
      this.toast = toast;
      this.translate = translate;
      this.selectedFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.displayModal = false;
      this.selectedImageBase64 = null; // Inicializa como null
      this.transform = {};
      this.scale = 1;
      this.canvasRotation = 0;
    }
    /**
     * Displays the dialog or modal associated with the specific functionality.
     * Set the `displayModal` property to `true`.
     */
    showDialog() {
      this.displayModal = true;
    }
    /**
     * Hides the dialog or modal associated with the specific functionality.
     * Set the `displayModal` property to `false`.
     */
    hideDialog() {
      this.displayModal = false;
    }
    /**
     * Handle file selection event. Read the selected file,
     * Convert its content to Base64, and assign it to the `selectedImageBase64` property.
     * Additionally, cast the selected file to the parent component using the `selectedFile` event.
     * Display an error toast message if the selected file is not an image.
     * @param event The file selection event.
     */
    onFileSelected(event) {
      const input = event.target;
      if (input.files && input.files.length > 0) {
        const file = input.files[0];
        // Validate that the file is an image
        if (!file.type.startsWith('image/')) {
          this.toast.add({
            severity: 'error',
            summary: this.translate.instant('ERROR.TITLE'),
            detail: this.translate.instant('ERROR.WRONG_TYPE')
          });
          return;
        }
        // Create an Image object to obtain the resolution
        const img = new Image();
        // Handle the image load event
        img.onload = () => {
          // Create a file reader
          const reader = new FileReader();
          reader.onload = e => {
            const base64Content = e.target.result;
            this.selectedImageBase64 = base64Content;
            this.imageChangedEvent = event;
          };
          reader.readAsDataURL(file);
          this.selectedFile.emit(file);
        };
        // Assign the image data URL to the Image object
        img.src = URL.createObjectURL(file);
      }
    }
    /**
     * Handles the image crop event. Converts the Blob resulting from the clipping to Base64,
     * Casts the resulting file as a File object and updates the preview with Base64.   *
     * @param event The image crop event that contains the resulting Blob.
     */
    onImageCropped(event) {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        // Check if the event contains a Blob
        if (event.blob) {
          // Convert the Blob to Base64
          const base64Image = yield _this.blobToBase64(event.blob);
          // Output the resulting file as a File object to the parent component
          const file = _this.base64ToFile(base64Image, 'image');
          _this.selectedFile.emit(file);
          // Update the preview with Base64
          _this.selectedImageBase64 = base64Image;
        }
      })();
    }
    /**
     * Converts a Blob to a Base64 string.   *
     * @param blob The Blob to be converted.
     * @returns A Promise that resolves to the resulting Base64 string.
     */
    blobToBase64(blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        // Configure the reader's onload and onerror event handlers
        reader.onload = () => {
          // Resolve the Promise with the resulting Base64 string
          resolve(reader.result);
        };
        reader.onerror = reject;
        // Start reading the Blob as a Base64 string
        reader.readAsDataURL(blob);
      });
    }
    base64ToFile(base64, mimeType) {
      try {
        // Get the binary data from Base64
        const binary = atob(base64.split(',')[1]);
        // Create a byte array
        const array = [];
        for (let i = 0; i < binary.length; i++) {
          array.push(binary.charCodeAt(i));
        }
        // Create a Blob from the byte array
        const blob = new Blob([new Uint8Array(array)], {
          type: mimeType
        });
        // Create a file from the Blob
        const fileName = 'Photo Profile Image Cropper';
        return new File([blob], fileName, {
          type: mimeType
        });
      } catch (error) {
        console.error('Error converting Base64 to file:', error);
        return undefined;
      }
    }
    /**
     * Rotates the image to the left (counterclockwise) in 90-degree increments.
     * If the transformation is not defined, initializes it as an empty object.
     * Update the 'rotate' property on the transformation with a -90 degree rotation.
     */
    rotateLeft() {
      if (!this.transform) {
        // Initialize the object if it is undefined
        this.transform = {};
      }
      this.transform = {
        ...this.transform,
        // Rotate -90 degrees
        rotate: (this.transform.rotate || 0) - 90
      };
    }
    /**
     * Rotates the image clockwise (clockwise) in 90 degree increments.
     * If the transformation is not defined, initializes it as an empty object.
     * Update the 'rotate' property on the transformation with a 90 degree rotation.
     */
    rotateRight() {
      if (!this.transform) {
        // Initialize the object if it is undefined
        this.transform = {};
      }
      this.transform = {
        ...this.transform,
        // Rotate -90 degrees
        rotate: (this.transform.rotate || 0) + 90
      };
    }
    /**
     * Increases the image zoom level by 10%.
     * Updates the 'scale' property in the transformation with the new zoom level.
     */
    zoomIn() {
      this.scale += 0.1;
      this.transform = {
        ...this.transform,
        scale: this.scale
      };
    }
    /**
     * Reduces the image zoom level by 10%.
     * Updates the 'scale' property in the transformation with the new zoom level.
     */
    zoomOut() {
      this.scale -= 0.1;
      this.transform = {
        ...this.transform,
        scale: this.scale
      };
    }
    /**
     * Flips the image horizontally.
     * Will toggle the 'flipH' property in the transform to horizontally mirror the image.
     */
    flipHorizontal() {
      this.transform = {
        ...this.transform,
        // Toggle horizontal mirror
        flipH: !this.transform.flipH
      };
    }
    /**
     * Vertically flips the image.
     * Will toggle the 'flipV' property in the transform to vertically mirror the image.
     */
    flipVertical() {
      this.transform = {
        ...this.transform,
        // Toggle vertical mirror
        flipV: !this.transform.flipV
      };
    }
    /**
     * Determines whether buttons should be shown based on the selected file.
     * @returns Returns true if the input element has a selected image file; otherwise, it returns false.
     */
    showButtons() {
      // Check if the input element and its native element exist and have files
      if (this.input && this.input.nativeElement && this.input.nativeElement.files) {
        const files = this.input.nativeElement.files;
        // Check if there is at least one file selected
        if (files.length > 0) {
          const file = files[0];
          // Verify if the selected file is an image
          if (file && file.type && file.type.startsWith('image/')) {
            return true; // Show buttons only if the selected file is an image
          }
        }
      }
      return false; // Do not show buttons if there is no file selected or if it is not an image
    }
    /**
     * Cancels the image editing operation.
     * Hide the image dialog.
     */
    cancel() {
      console.log('Cancel');
      this.hideDialog();
    }
    /**
     * Confirm and finish the image editing operation.
     * Emit the selected file to the parent component, if any.
     * Hide the image dialog and display an informational toast message.
     */
    confirm() {
      console.log('Confirm');
      this.selectedFile.emit();
      this.hideDialog();
      this.toast.add({
        severity: 'warn',
        summary: this.translate.instant('IMAGE_CROPPER.WARNING_TITLE'),
        detail: this.translate.instant('IMAGE_CROPPER.PHOTO_INFO'),
        sticky: true
      });
    }
    static #_ = this.ɵfac = function ImageCropperComponent_Factory(t) {
      return new (t || ImageCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ImageCropperComponent,
      selectors: [["app-image-cropper"]],
      viewQuery: function ImageCropperComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
        }
      },
      outputs: {
        selectedFile: "selectedFile"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 22,
      vars: 25,
      consts: [[3, "visible", "modal", "breakpoints", "visibleChange"], ["format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "resizeToWidth", "cropperMinWidth", "onlyScaleDown", "roundCropper", "transform", "imageCropped"], [1, "flex", "justify-content-center", "w-full", "m-3"], [1, "input-file-wrapper"], ["type", "file", 1, "btn", "inputImage", 3, "change"], ["input", ""], ["for", ""], [1, "text-center", "my-2"], ["alt", "Imagen recortada", 1, "croppedImage", 3, "src"], [1, "text-center", "my-2", "md:", "mt-3", "sm:", "mt-1"], ["label", "Rotate Left", 1, "buttons", 3, "click"], ["label", "Rotate Right", 1, "buttons", 3, "click"], ["label", "Zoom -", "severity", "secondary", 1, "buttons", 3, "click"], ["label", "Zoom +", "severity", "secondary", 1, "buttons", 3, "click"], ["label", "Flip Horizontal", "severity", "info", 1, "buttons", 3, "click"], ["label", "Flip Vertical", "severity", "info", 1, "buttons", 3, "click"], [1, "m-8", "p-2", "md:", "mt-3", "sm:", "flex", "flex-column", "align-items-center", "mt-1"], ["label", "Cancel", "severity", "danger", 1, "buttons", 3, "click"], ["label", "Confirm", "severity", "success", 1, "buttons", 3, "click"]],
      template: function ImageCropperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function ImageCropperComponent_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.displayModal = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "image-cropper", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imageCropped", function ImageCropperComponent_Template_image_cropper_imageCropped_1_listener($event) {
            return ctx.onImageCropped($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div")(3, "div", 2)(4, "div", 3)(5, "input", 4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ImageCropperComponent_Template_input_change_5_listener($event) {
            return ctx.onFileSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "p-button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_p_button_click_13_listener() {
            return ctx.rotateLeft();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p-button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_p_button_click_14_listener() {
            return ctx.rotateRight();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p-button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_p_button_click_15_listener() {
            return ctx.zoomOut();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p-button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_p_button_click_16_listener() {
            return ctx.zoomIn();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p-button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_p_button_click_17_listener() {
            return ctx.flipHorizontal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p-button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_p_button_click_18_listener() {
            return ctx.flipVertical();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16)(20, "p-button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_p_button_click_20_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p-button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_p_button_click_21_listener() {
            return ctx.confirm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.displayModal)("modal", true)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.showButtons() ? "block" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imageChangedEvent", ctx.imageChangedEvent)("maintainAspectRatio", true)("aspectRatio", 1 / 1)("resizeToWidth", 256)("cropperMinWidth", 128)("onlyScaleDown", true)("roundCropper", false)("transform", ctx.transform);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 21, "LABEL.SELECT_IMAGE"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.showButtons() ? "block" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.selectedImageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.showButtons() ? "block" : "none");
        }
      },
      dependencies: [primeng_dialog__WEBPACK_IMPORTED_MODULE_4__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_4__.Dialog, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__.ImageCropperModule, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__.ImageCropperComponent, primeng_fileupload__WEBPACK_IMPORTED_MODULE_7__.FileUploadModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
      styles: [".inputImage[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.croppedImage[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  margin-bottom: 36px;\n  border-radius: 10000%;\n  width: 30%;\n  height: 30%;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.input-file-wrapper[_ngcontent-%COMP%] {\n  width: 50%;\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n  text-align: center;\n  cursor: pointer;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 4px 8px;\n  background-color: #fff;\n  color: black;\n}\n\n.input-file-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW1hZ2UtY3JvcHBlci9pbWFnZS1jcm9wcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0SW1hZ2Uge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmNyb3BwZWRJbWFnZSB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMDAwJTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMzAlO1xufVxuXG4uYnV0dG9uc3tcbiAgICBtYXJnaW46IDVweDtcbn1cblxuLmlucHV0LWZpbGUtd3JhcHBlciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5pbnB1dC1maWxlLXdyYXBwZXIgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return ImageCropperComponent;
})();

/***/ }),

/***/ 313:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/photo-edit-profile/photo-edit-profile.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhotoEditProfileComponent: () => (/* binding */ PhotoEditProfileComponent)
/* harmony export */ });
/* harmony import */ var _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ApiClient/components/image/image.component */ 4072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/auth/auth.selectors */ 4590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image-cropper/image-cropper.component */ 9648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 5939);













const _c0 = ["photoProfile"];
const _c1 = ["imageCropper"];
function PhotoEditProfileComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PhotoEditProfileComponent_div_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.openImageCropper());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-image", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PhotoEditProfileComponent_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.onRemovePhoto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const currentUser_r2 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-content", "Change-photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("folder", "UserPictures")("idPicture", ctx_r0.imageId)("userId", currentUser_r2.userId)("dataBase64Src", ctx_r0.updatedImageUrl)("isAPicture", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 6, ctx_r0.isAPicture$));
  }
}
let PhotoEditProfileComponent = /*#__PURE__*/(() => {
  class PhotoEditProfileComponent {
    constructor(store, toast, translate) {
      this.store = store;
      this.toast = toast;
      this.translate = translate;
      this.currentUser$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCurrentUser);
      this.imageId = '';
      this.updatedImageUrl = null;
      this.isAPictureSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
      this.isAPicture$ = this.isAPictureSubject.asObservable();
      this.currentUser$.subscribe(user => {
        this.imageId = user ? user.pictureId : null;
      });
    }
    /**
     * Delete the current profile photo. Restore the image ID and reset the profile photo object state.
     */
    onRemovePhoto() {
      this.profilePhoto.idPicture = '';
      this.profilePhoto.reset();
      this.toast.add({
        severity: 'warn',
        summary: this.translate.instant('IMAGE_CROPPER.WARNING_TITLE'),
        detail: this.translate.instant('IMAGE_CROPPER.PHOTO_INFO'),
        sticky: true
      });
    }
    /**
     * Opens the image cropping component to allow editing of the profile photo.
     */
    openImageCropper() {
      console.log('Image cropper open');
      this.imageCropper.showDialog();
    }
    /**
     * Handles the event when a file (edited image) is selected.
     * @param file - The File object that represents the selected file.
     */
    onSelectedFile(file) {
      console.log('Selected file (edited image):', file);
      this.updatedImageUrl = this.imageCropper.selectedImageBase64;
      this.isAPictureSubject.next(true);
      console.log('Profile url: ', this.updatedImageUrl);
    }
    static #_ = this.ɵfac = function PhotoEditProfileComponent_Factory(t) {
      return new (t || PhotoEditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PhotoEditProfileComponent,
      selectors: [["app-photo-edit-profile"]],
      viewQuery: function PhotoEditProfileComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.profilePhoto = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.imageCropper = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 3,
      consts: [["class", "text-center", "id", "form-group", 4, "ngIf"], [3, "selectedFile"], ["imageCropper", ""], ["id", "form-group", 1, "text-center"], [1, "botoFoto", 3, "click"], ["defaultImageUrl", "assets/videos/noUserVid.mp4", 3, "folder", "idPicture", "userId", "dataBase64Src", "isAPicture"], ["photoProfile", ""], [1, "remove", 3, "click"]],
      template: function PhotoEditProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PhotoEditProfileComponent_div_0_Template, 8, 8, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-image-cropper", 1, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedFile", function PhotoEditProfileComponent_Template_app_image_cropper_selectedFile_2_listener($event) {
            return ctx.onSelectedFile($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.currentUser$));
        }
      },
      dependencies: [_ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_0__.ImageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_2__.ImageCropperComponent],
      styles: ["#form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: bold;\n  margin-bottom: 0;\n  padding: 7px 0;\n  padding: 6px 12px;\n  border-width: 1px;\n  border-radius: 20px;\n}\n\n.botoFoto[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  object-fit: cover;\n  padding: 0;\n  margin-bottom: 10px;\n  border: none;\n  border-radius: 10000px;\n  overflow: hidden;\n  position: relative;\n  cursor: pointer;\n}\n.botoFoto[_ngcontent-%COMP%]:after {\n  content: attr(data-content);\n  font-size: 20px;\n  line-height: 150px;\n  color: white;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5333333333);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  opacity: 0;\n  border-radius: 10000px;\n  transition: all 0.2s;\n}\n.botoFoto[_ngcontent-%COMP%]:hover:after {\n  opacity: 1;\n}\n\n.remove[_ngcontent-%COMP%] {\n  transition: background-color 200ms, color 200ms, box-shadow 200ms, transform 100ms, -webkit-text-decoration 200ms !important;\n  transition: background-color 200ms, color 200ms, box-shadow 200ms, text-decoration 200ms, transform 100ms !important;\n  transition: background-color 200ms, color 200ms, box-shadow 200ms, text-decoration 200ms, transform 100ms, -webkit-text-decoration 200ms !important;\n  color: var(--color-text);\n  border: none;\n  background-color: rgb(200, 0, 0);\n  color: white;\n  padding: 0.375rem 1.125rem;\n  font-size: 1rem;\n  border-radius: 30px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGhvdG8tZWRpdC1wcm9maWxlL3Bob3RvLWVkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0U7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUNKO0FBRUU7RUFDRSxVQUFBO0FBQUo7O0FBSUE7RUFDRSw0SEFDRTtFQURGLG9IQUNFO0VBREYsbUpBQ0U7RUFLRix3QkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFORiIsInNvdXJjZXNDb250ZW50IjpbIiNmb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDdweCAwO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5ib3RvRm90byB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogYXR0cihkYXRhLWNvbnRlbnQpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMTUwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB9XG5cbiAgJjpob3ZlcjphZnRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4ucmVtb3ZlIHtcbiAgdHJhbnNpdGlvbjpcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zLFxuICAgIGNvbG9yIDIwMG1zLFxuICAgIGJveC1zaGFkb3cgMjAwbXMsXG4gICAgdGV4dC1kZWNvcmF0aW9uIDIwMG1zLFxuICAgIHRyYW5zZm9ybSAxMDBtcyAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMCwgMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC4zNzVyZW0gMS4xMjVyZW07IC8vcGFkZGluZzogMC4zNzVyZW0gMS43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return PhotoEditProfileComponent;
})();

/***/ }),

/***/ 4921:
/*!******************************************************!*\
  !*** ./src/app/store/settings/settings.selectors.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectEmail: () => (/* binding */ selectEmail),
/* harmony export */   selectIdentity: () => (/* binding */ selectIdentity),
/* harmony export */   selectIsLoadingSettings: () => (/* binding */ selectIsLoadingSettings),
/* harmony export */   settingsFeatureSelector: () => (/* binding */ settingsFeatureSelector)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

const settingsFeatureSelector = state => state.settings;
const selectIsLoadingSettings = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(settingsFeatureSelector, state => state.isLoading);
const selectEmail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(settingsFeatureSelector, state => state.email);
const selectIdentity = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(settingsFeatureSelector, state => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    birthDate: state.birthDate,
    bio: state.bio,
    website: state.website
  };
});

/***/ }),

/***/ 4214:
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-image-cropper/fesm2020/ngx-image-cropper.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CropService: () => (/* binding */ CropService),
/* harmony export */   CropperSettings: () => (/* binding */ CropperSettings),
/* harmony export */   ImageCropperComponent: () => (/* binding */ ImageCropperComponent),
/* harmony export */   ImageCropperModule: () => (/* binding */ ImageCropperModule),
/* harmony export */   LoadImageService: () => (/* binding */ LoadImageService),
/* harmony export */   base64ToFile: () => (/* binding */ base64ToFile),
/* harmony export */   resizeCanvas: () => (/* binding */ resizeCanvas)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7835);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9016);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);









const _c0 = ["wrapper"];
const _c1 = ["sourceImage"];
function ImageCropperComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function ImageCropperComponent_img_2_Template_img_load_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.imageLoadedInView());
    })("mousedown", function ImageCropperComponent_img_2_Template_img_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.startMove($event, ctx_r6.moveTypes.Drag));
    })("touchstart", function ImageCropperComponent_img_2_Template_img_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.startMove($event, ctx_r7.moveTypes.Drag));
    })("error", function ImageCropperComponent_img_2_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.loadImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx_r1.imageVisible ? "visible" : "hidden")("transform", ctx_r1.safeTransformStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-ic-draggable", !ctx_r1.disabled && ctx_r1.allowMoveImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.safeImgDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("alt", ctx_r1.imageAltText);
  }
}
function ImageCropperComponent_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.startMove($event, ctx_r10.moveTypes.Resize, "topleft"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.startMove($event, ctx_r12.moveTypes.Resize, "topleft"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.startMove($event, ctx_r13.moveTypes.Resize, "topright"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.startMove($event, ctx_r14.moveTypes.Resize, "topright"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.startMove($event, ctx_r15.moveTypes.Resize, "bottomright"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.startMove($event, ctx_r16.moveTypes.Resize, "bottomright"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.startMove($event, ctx_r17.moveTypes.Resize, "bottomleft"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.startMove($event, ctx_r18.moveTypes.Resize, "bottomleft"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.startMove($event, ctx_r19.moveTypes.Resize, "top"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.startMove($event, ctx_r20.moveTypes.Resize, "top"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.startMove($event, ctx_r21.moveTypes.Resize, "right"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.startMove($event, ctx_r22.moveTypes.Resize, "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.startMove($event, ctx_r23.moveTypes.Resize, "bottom"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.startMove($event, ctx_r24.moveTypes.Resize, "bottom"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.startMove($event, ctx_r25.moveTypes.Resize, "left"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.startMove($event, ctx_r26.moveTypes.Resize, "left"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function ImageCropperComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function ImageCropperComponent_div_4_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r27.keyboardAccess($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_Template_div_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r29.startMove($event, ctx_r29.moveTypes.Move));
    })("touchstart", function ImageCropperComponent_div_4_Template_div_touchstart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r30.startMove($event, ctx_r30.moveTypes.Move));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ImageCropperComponent_div_4_ng_container_2_Template, 21, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", ctx_r2.cropper.y1, "px")("left", ctx_r2.cropper.x1, "px")("width", ctx_r2.cropper.x2 - ctx_r2.cropper.x1, "px")("height", ctx_r2.cropper.y2 - ctx_r2.cropper.y1, "px")("margin-left", ctx_r2.alignImage === "center" ? ctx_r2.marginLeft : null)("visibility", ctx_r2.imageVisible ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-ic-round", ctx_r2.roundCropper);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r2.cropperFrameAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.hideResizeSquares);
  }
}
class CropperSettings {
  constructor() {
    // From options
    this.format = 'png';
    this.output = 'blob';
    this.maintainAspectRatio = true;
    this.transform = {};
    this.aspectRatio = 1;
    this.resetCropOnAspectRatioChange = true;
    this.resizeToWidth = 0;
    this.resizeToHeight = 0;
    this.cropperMinWidth = 0;
    this.cropperMinHeight = 0;
    this.cropperMaxHeight = 0;
    this.cropperMaxWidth = 0;
    this.cropperStaticWidth = 0;
    this.cropperStaticHeight = 0;
    this.canvasRotation = 0;
    this.initialStepSize = 3;
    this.roundCropper = false;
    this.onlyScaleDown = false;
    this.imageQuality = 92;
    this.autoCrop = true;
    this.backgroundColor = null;
    this.containWithinAspectRatio = false;
    this.hideResizeSquares = false;
    this.alignImage = 'center';
    this.cropperFrameAriaLabel = 'Crop photo';
    // Internal
    this.cropperScaledMinWidth = 20;
    this.cropperScaledMinHeight = 20;
    this.cropperScaledMaxWidth = 20;
    this.cropperScaledMaxHeight = 20;
    this.stepSize = this.initialStepSize;
  }
  setOptions(options) {
    Object.keys(options).filter(k => k in this).forEach(k => this[k] = options[k]);
    this.validateOptions();
  }
  setOptionsFromChanges(changes) {
    Object.keys(changes).filter(k => k in this).forEach(k => this[k] = changes[k].currentValue);
    this.validateOptions();
  }
  validateOptions() {
    if (this.maintainAspectRatio && !this.aspectRatio) {
      throw new Error('`aspectRatio` should > 0 when `maintainAspectRatio` is enabled');
    }
  }
}
var MoveTypes = /*#__PURE__*/function (MoveTypes) {
  MoveTypes["Drag"] = "drag";
  MoveTypes["Move"] = "move";
  MoveTypes["Resize"] = "resize";
  MoveTypes["Pinch"] = "pinch";
  return MoveTypes;
}(MoveTypes || {});
function getPositionForKey(key) {
  switch (key) {
    case 'ArrowUp':
      return 'top';
    case 'ArrowRight':
      return 'right';
    case 'ArrowDown':
      return 'bottom';
    case 'ArrowLeft':
    default:
      return 'left';
  }
}
function getInvertedPositionForKey(key) {
  switch (key) {
    case 'ArrowUp':
      return 'bottom';
    case 'ArrowRight':
      return 'left';
    case 'ArrowDown':
      return 'top';
    case 'ArrowLeft':
    default:
      return 'right';
  }
}
function getEventForKey(key, stepSize) {
  switch (key) {
    case 'ArrowUp':
      return {
        clientX: 0,
        clientY: stepSize * -1
      };
    case 'ArrowRight':
      return {
        clientX: stepSize,
        clientY: 0
      };
    case 'ArrowDown':
      return {
        clientX: 0,
        clientY: stepSize
      };
    case 'ArrowLeft':
    default:
      return {
        clientX: stepSize * -1,
        clientY: 0
      };
  }
}

/*
 * Hermite resize - fast image resize/resample using Hermite filter.
 * https://github.com/viliusle/Hermite-resize
 */
function resizeCanvas(canvas, width, height) {
  const width_source = canvas.width;
  const height_source = canvas.height;
  width = Math.round(width);
  height = Math.round(height);
  const ratio_w = width_source / width;
  const ratio_h = height_source / height;
  const ratio_w_half = Math.ceil(ratio_w / 2);
  const ratio_h_half = Math.ceil(ratio_h / 2);
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const img = ctx.getImageData(0, 0, width_source, height_source);
    const img2 = ctx.createImageData(width, height);
    const data = img.data;
    const data2 = img2.data;
    for (let j = 0; j < height; j++) {
      for (let i = 0; i < width; i++) {
        const x2 = (i + j * width) * 4;
        const center_y = j * ratio_h;
        let weight = 0;
        let weights = 0;
        let weights_alpha = 0;
        let gx_r = 0;
        let gx_g = 0;
        let gx_b = 0;
        let gx_a = 0;
        const xx_start = Math.floor(i * ratio_w);
        const yy_start = Math.floor(j * ratio_h);
        let xx_stop = Math.ceil((i + 1) * ratio_w);
        let yy_stop = Math.ceil((j + 1) * ratio_h);
        xx_stop = Math.min(xx_stop, width_source);
        yy_stop = Math.min(yy_stop, height_source);
        for (let yy = yy_start; yy < yy_stop; yy++) {
          const dy = Math.abs(center_y - yy) / ratio_h_half;
          const center_x = i * ratio_w;
          const w0 = dy * dy; //pre-calc part of w
          for (let xx = xx_start; xx < xx_stop; xx++) {
            const dx = Math.abs(center_x - xx) / ratio_w_half;
            const w = Math.sqrt(w0 + dx * dx);
            if (w >= 1) {
              //pixel too far
              continue;
            }
            //hermite filter
            weight = 2 * w * w * w - 3 * w * w + 1;
            const pos_x = 4 * (xx + yy * width_source);
            //alpha
            gx_a += weight * data[pos_x + 3];
            weights_alpha += weight;
            //colors
            if (data[pos_x + 3] < 255) weight = weight * data[pos_x + 3] / 250;
            gx_r += weight * data[pos_x];
            gx_g += weight * data[pos_x + 1];
            gx_b += weight * data[pos_x + 2];
            weights += weight;
          }
        }
        data2[x2] = gx_r / weights;
        data2[x2 + 1] = gx_g / weights;
        data2[x2 + 2] = gx_b / weights;
        data2[x2 + 3] = gx_a / weights_alpha;
      }
    }
    canvas.width = width;
    canvas.height = height;
    //draw
    ctx.putImageData(img2, 0, 0);
  }
}
function percentage(percent, totalValue) {
  return percent / 100 * totalValue;
}
let CropService = /*#__PURE__*/(() => {
  class CropService {
    crop(loadedImage, cropper, settings, output, maxSize) {
      const imagePosition = this.getImagePosition(loadedImage, cropper, settings, maxSize);
      const width = imagePosition.x2 - imagePosition.x1;
      const height = imagePosition.y2 - imagePosition.y1;
      const cropCanvas = document.createElement('canvas');
      cropCanvas.width = width;
      cropCanvas.height = height;
      const ctx = cropCanvas.getContext('2d');
      if (!ctx) {
        return null;
      }
      if (settings.backgroundColor != null) {
        ctx.fillStyle = settings.backgroundColor;
        ctx.fillRect(0, 0, width, height);
      }
      const scaleX = (settings.transform.scale || 1) * (settings.transform.flipH ? -1 : 1);
      const scaleY = (settings.transform.scale || 1) * (settings.transform.flipV ? -1 : 1);
      const {
        translateH,
        translateV
      } = this.getCanvasTranslate(loadedImage, settings, maxSize);
      const transformedImage = loadedImage.transformed;
      ctx.setTransform(scaleX, 0, 0, scaleY, transformedImage.size.width / 2 + translateH, transformedImage.size.height / 2 + translateV);
      ctx.translate(-imagePosition.x1 / scaleX, -imagePosition.y1 / scaleY);
      ctx.rotate((settings.transform.rotate || 0) * Math.PI / 180);
      ctx.drawImage(transformedImage.image, -transformedImage.size.width / 2, -transformedImage.size.height / 2);
      const result = {
        width,
        height,
        imagePosition,
        cropperPosition: {
          ...cropper
        }
      };
      if (settings.containWithinAspectRatio) {
        result.offsetImagePosition = this.getOffsetImagePosition(loadedImage, cropper, settings, maxSize);
      }
      const resizeRatio = this.getResizeRatio(width, height, settings);
      if (resizeRatio !== 1) {
        result.width = Math.round(width * resizeRatio);
        result.height = settings.maintainAspectRatio ? Math.round(result.width / settings.aspectRatio) : Math.round(height * resizeRatio);
        resizeCanvas(cropCanvas, result.width, result.height);
      }
      if (output === 'blob') {
        return this.cropToBlob(result, cropCanvas, settings);
      } else {
        result.base64 = cropCanvas.toDataURL('image/' + settings.format, this.getQuality(settings));
        return result;
      }
    }
    cropToBlob(output, cropCanvas, settings) {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        output.blob = yield new Promise(resolve => cropCanvas.toBlob(resolve, 'image/' + settings.format, _this.getQuality(settings)));
        if (output.blob) {
          output.objectUrl = URL.createObjectURL(output.blob);
        }
        return output;
      })();
    }
    getCanvasTranslate(loadedImage, settings, maxSize) {
      if (settings.transform.translateUnit === 'px') {
        const ratio = this.getRatio(loadedImage, maxSize);
        return {
          translateH: (settings.transform.translateH || 0) * ratio,
          translateV: (settings.transform.translateV || 0) * ratio
        };
      } else {
        return {
          translateH: settings.transform.translateH ? percentage(settings.transform.translateH, loadedImage.transformed.size.width) : 0,
          translateV: settings.transform.translateV ? percentage(settings.transform.translateV, loadedImage.transformed.size.height) : 0
        };
      }
    }
    getRatio(loadedImage, maxSize) {
      return loadedImage.transformed.size.width / maxSize.width;
    }
    getImagePosition(loadedImage, cropper, settings, maxSize) {
      const ratio = this.getRatio(loadedImage, maxSize);
      const out = {
        x1: Math.round(cropper.x1 * ratio),
        y1: Math.round(cropper.y1 * ratio),
        x2: Math.round(cropper.x2 * ratio),
        y2: Math.round(cropper.y2 * ratio)
      };
      if (!settings.containWithinAspectRatio) {
        out.x1 = Math.max(out.x1, 0);
        out.y1 = Math.max(out.y1, 0);
        out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
        out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
      }
      return out;
    }
    getOffsetImagePosition(loadedImage, cropper, settings, maxSize) {
      const canvasRotation = settings.canvasRotation + loadedImage.exifTransform.rotate;
      const ratio = this.getRatio(loadedImage, maxSize);
      let offsetX;
      let offsetY;
      if (canvasRotation % 2) {
        offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.height) / 2;
        offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.width) / 2;
      } else {
        offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.width) / 2;
        offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.height) / 2;
      }
      const out = {
        x1: Math.round(cropper.x1 * ratio) - offsetX,
        y1: Math.round(cropper.y1 * ratio) - offsetY,
        x2: Math.round(cropper.x2 * ratio) - offsetX,
        y2: Math.round(cropper.y2 * ratio) - offsetY
      };
      if (!settings.containWithinAspectRatio) {
        out.x1 = Math.max(out.x1, 0);
        out.y1 = Math.max(out.y1, 0);
        out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
        out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
      }
      return out;
    }
    getResizeRatio(width, height, settings) {
      const ratioWidth = settings.resizeToWidth / width;
      const ratioHeight = settings.resizeToHeight / height;
      const ratios = new Array();
      if (settings.resizeToWidth > 0) {
        ratios.push(ratioWidth);
      }
      if (settings.resizeToHeight > 0) {
        ratios.push(ratioHeight);
      }
      const result = ratios.length === 0 ? 1 : Math.min(...ratios);
      if (result > 1 && !settings.onlyScaleDown) {
        return result;
      }
      return Math.min(result, 1);
    }
    getQuality(settings) {
      return Math.min(1, Math.max(0, settings.imageQuality / 100));
    }
  }
  CropService.ɵfac = function CropService_Factory(t) {
    return new (t || CropService)();
  };
  CropService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CropService,
    factory: CropService.ɵfac,
    providedIn: 'root'
  });
  return CropService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CropperPositionService = /*#__PURE__*/(() => {
  class CropperPositionService {
    resetCropperPosition(sourceImage, cropperPosition, settings, maxSize) {
      if (!sourceImage?.nativeElement) {
        return;
      }
      if (settings.cropperStaticHeight && settings.cropperStaticWidth) {
        cropperPosition.x1 = 0;
        cropperPosition.x2 = maxSize.width > settings.cropperStaticWidth ? settings.cropperStaticWidth : maxSize.width;
        cropperPosition.y1 = 0;
        cropperPosition.y2 = maxSize.height > settings.cropperStaticHeight ? settings.cropperStaticHeight : maxSize.height;
      } else {
        const cropperWidth = Math.min(settings.cropperScaledMaxWidth, maxSize.width);
        const cropperHeight = Math.min(settings.cropperScaledMaxHeight, maxSize.height);
        if (!settings.maintainAspectRatio) {
          cropperPosition.x1 = 0;
          cropperPosition.x2 = cropperWidth;
          cropperPosition.y1 = 0;
          cropperPosition.y2 = cropperHeight;
        } else if (maxSize.width / settings.aspectRatio < maxSize.height) {
          cropperPosition.x1 = 0;
          cropperPosition.x2 = cropperWidth;
          const cropperHeightWithAspectRatio = cropperWidth / settings.aspectRatio;
          cropperPosition.y1 = (maxSize.height - cropperHeightWithAspectRatio) / 2;
          cropperPosition.y2 = cropperPosition.y1 + cropperHeightWithAspectRatio;
        } else {
          cropperPosition.y1 = 0;
          cropperPosition.y2 = cropperHeight;
          const cropperWidthWithAspectRatio = cropperHeight * settings.aspectRatio;
          cropperPosition.x1 = (maxSize.width - cropperWidthWithAspectRatio) / 2;
          cropperPosition.x2 = cropperPosition.x1 + cropperWidthWithAspectRatio;
        }
      }
    }
    move(event, moveStart, cropperPosition) {
      const diffX = this.getClientX(event) - moveStart.clientX;
      const diffY = this.getClientY(event) - moveStart.clientY;
      cropperPosition.x1 = moveStart.x1 + diffX;
      cropperPosition.y1 = moveStart.y1 + diffY;
      cropperPosition.x2 = moveStart.x2 + diffX;
      cropperPosition.y2 = moveStart.y2 + diffY;
    }
    resize(event, moveStart, cropperPosition, maxSize, settings) {
      const moveX = this.getClientX(event) - moveStart.clientX;
      const moveY = this.getClientY(event) - moveStart.clientY;
      switch (moveStart.position) {
        case 'left':
          cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
          break;
        case 'topleft':
          cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
          cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
          break;
        case 'top':
          cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
          break;
        case 'topright':
          cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
          cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
          break;
        case 'right':
          cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
          break;
        case 'bottomright':
          cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
          cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
          break;
        case 'bottom':
          cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
          break;
        case 'bottomleft':
          cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
          cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
          break;
        case 'center':
          const scale = event.scale;
          const newWidth = Math.min(Math.max(settings.cropperScaledMinWidth, Math.abs(moveStart.x2 - moveStart.x1) * scale), settings.cropperScaledMaxWidth);
          const newHeight = Math.min(Math.max(settings.cropperScaledMinHeight, Math.abs(moveStart.y2 - moveStart.y1) * scale), settings.cropperScaledMaxHeight);
          cropperPosition.x1 = moveStart.clientX - newWidth / 2;
          cropperPosition.x2 = moveStart.clientX + newWidth / 2;
          cropperPosition.y1 = moveStart.clientY - newHeight / 2;
          cropperPosition.y2 = moveStart.clientY + newHeight / 2;
          if (cropperPosition.x1 < 0) {
            cropperPosition.x2 -= cropperPosition.x1;
            cropperPosition.x1 = 0;
          } else if (cropperPosition.x2 > maxSize.width) {
            cropperPosition.x1 -= cropperPosition.x2 - maxSize.width;
            cropperPosition.x2 = maxSize.width;
          }
          if (cropperPosition.y1 < 0) {
            cropperPosition.y2 -= cropperPosition.y1;
            cropperPosition.y1 = 0;
          } else if (cropperPosition.y2 > maxSize.height) {
            cropperPosition.y1 -= cropperPosition.y2 - maxSize.height;
            cropperPosition.y2 = maxSize.height;
          }
          break;
      }
      if (settings.maintainAspectRatio) {
        this.checkAspectRatio(moveStart.position, cropperPosition, maxSize, settings);
      }
    }
    checkAspectRatio(position, cropperPosition, maxSize, settings) {
      let overflowX = 0;
      let overflowY = 0;
      switch (position) {
        case 'top':
          cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
          overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
          overflowY = Math.max(0 - cropperPosition.y1, 0);
          if (overflowX > 0 || overflowY > 0) {
            cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
            cropperPosition.y1 += overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
          }
          break;
        case 'bottom':
          cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
          overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
          overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
          if (overflowX > 0 || overflowY > 0) {
            cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
            cropperPosition.y2 -= overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
          }
          break;
        case 'topleft':
          cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
          overflowX = Math.max(0 - cropperPosition.x1, 0);
          overflowY = Math.max(0 - cropperPosition.y1, 0);
          if (overflowX > 0 || overflowY > 0) {
            cropperPosition.x1 += overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
            cropperPosition.y1 += overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
          }
          break;
        case 'topright':
          cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
          overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
          overflowY = Math.max(0 - cropperPosition.y1, 0);
          if (overflowX > 0 || overflowY > 0) {
            cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
            cropperPosition.y1 += overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
          }
          break;
        case 'right':
        case 'bottomright':
          cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
          overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
          overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
          if (overflowX > 0 || overflowY > 0) {
            cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
            cropperPosition.y2 -= overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
          }
          break;
        case 'left':
        case 'bottomleft':
          cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
          overflowX = Math.max(0 - cropperPosition.x1, 0);
          overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
          if (overflowX > 0 || overflowY > 0) {
            cropperPosition.x1 += overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
            cropperPosition.y2 -= overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
          }
          break;
        case 'center':
          cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
          cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
          const overflowX1 = Math.max(0 - cropperPosition.x1, 0);
          const overflowX2 = Math.max(cropperPosition.x2 - maxSize.width, 0);
          const overflowY1 = Math.max(cropperPosition.y2 - maxSize.height, 0);
          const overflowY2 = Math.max(0 - cropperPosition.y1, 0);
          if (overflowX1 > 0 || overflowX2 > 0 || overflowY1 > 0 || overflowY2 > 0) {
            cropperPosition.x1 += overflowY1 * settings.aspectRatio > overflowX1 ? overflowY1 * settings.aspectRatio : overflowX1;
            cropperPosition.x2 -= overflowY2 * settings.aspectRatio > overflowX2 ? overflowY2 * settings.aspectRatio : overflowX2;
            cropperPosition.y1 += overflowY2 * settings.aspectRatio > overflowX2 ? overflowY2 : overflowX2 / settings.aspectRatio;
            cropperPosition.y2 -= overflowY1 * settings.aspectRatio > overflowX1 ? overflowY1 : overflowX1 / settings.aspectRatio;
          }
          break;
      }
    }
    getClientX(event) {
      return event.touches?.[0].clientX || event.clientX || 0;
    }
    getClientY(event) {
      return event.touches?.[0].clientY || event.clientY || 0;
    }
  }
  CropperPositionService.ɵfac = function CropperPositionService_Factory(t) {
    return new (t || CropperPositionService)();
  };
  CropperPositionService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CropperPositionService,
    factory: CropperPositionService.ɵfac,
    providedIn: 'root'
  });
  return CropperPositionService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// Black 2x1 JPEG, with the following meta information set:
// - EXIF Orientation: 6 (Rotated 90° CCW)
// Source: https://github.com/blueimp/JavaScript-Load-Image
const testAutoOrientationImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' + 'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' + 'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' + 'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' + 'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' + 'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';
function supportsAutomaticRotation() {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      // Check if browser supports automatic image orientation:
      const supported = img.width === 1 && img.height === 2;
      resolve(supported);
    };
    img.src = testAutoOrientationImageURL;
  });
}
function getTransformationsFromExifData(exifRotationOrArrayBuffer) {
  if (typeof exifRotationOrArrayBuffer === 'object') {
    exifRotationOrArrayBuffer = getExifRotation(exifRotationOrArrayBuffer);
  }
  switch (exifRotationOrArrayBuffer) {
    case 2:
      return {
        rotate: 0,
        flip: true
      };
    case 3:
      return {
        rotate: 2,
        flip: false
      };
    case 4:
      return {
        rotate: 2,
        flip: true
      };
    case 5:
      return {
        rotate: 1,
        flip: true
      };
    case 6:
      return {
        rotate: 1,
        flip: false
      };
    case 7:
      return {
        rotate: 3,
        flip: true
      };
    case 8:
      return {
        rotate: 3,
        flip: false
      };
    default:
      return {
        rotate: 0,
        flip: false
      };
  }
}
function getExifRotation(arrayBuffer) {
  const view = new DataView(arrayBuffer);
  if (view.getUint16(0, false) !== 0xFFD8) {
    return -2;
  }
  const length = view.byteLength;
  let offset = 2;
  while (offset < length) {
    if (view.getUint16(offset + 2, false) <= 8) return -1;
    const marker = view.getUint16(offset, false);
    offset += 2;
    if (marker == 0xFFE1) {
      if (view.getUint32(offset += 2, false) !== 0x45786966) {
        return -1;
      }
      const little = view.getUint16(offset += 6, false) == 0x4949;
      offset += view.getUint32(offset + 4, little);
      const tags = view.getUint16(offset, little);
      offset += 2;
      for (let i = 0; i < tags; i++) {
        if (view.getUint16(offset + i * 12, little) == 0x0112) {
          return view.getUint16(offset + i * 12 + 8, little);
        }
      }
    } else if ((marker & 0xFF00) !== 0xFF00) {
      break;
    } else {
      offset += view.getUint16(offset, false);
    }
  }
  return -1;
}
let LoadImageService = /*#__PURE__*/(() => {
  class LoadImageService {
    constructor() {
      this.autoRotateSupported = supportsAutomaticRotation();
    }
    loadImageFile(file, cropperSettings) {
      var _this2 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const arrayBuffer = yield file.arrayBuffer();
        return yield _this2.checkImageTypeAndLoadImageFromArrayBuffer(arrayBuffer, file.type, cropperSettings);
      })();
    }
    checkImageTypeAndLoadImageFromArrayBuffer(arrayBuffer, imageType, cropperSettings) {
      if (!this.isValidImageType(imageType)) {
        return Promise.reject(new Error('Invalid image type'));
      }
      return this.loadImageFromArrayBuffer(arrayBuffer, cropperSettings, imageType);
    }
    isValidImageType(type) {
      return /image\/(png|jpg|jpeg|bmp|gif|tiff|svg|webp|x-icon|vnd.microsoft.icon)/.test(type);
    }
    loadImageFromURL(url, cropperSettings) {
      var _this3 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const res = yield fetch(url);
        const blob = yield res.blob();
        const buffer = yield blob.arrayBuffer();
        return yield _this3.loadImageFromArrayBuffer(buffer, cropperSettings, blob.type);
      })();
    }
    loadBase64Image(imageBase64, cropperSettings) {
      const arrayBuffer = this.base64ToArrayBuffer(imageBase64);
      return this.loadImageFromArrayBuffer(arrayBuffer, cropperSettings);
    }
    base64ToArrayBuffer(imageBase64) {
      imageBase64 = imageBase64.replace(/^data:([^;]+);base64,/gmi, '');
      const binaryString = atob(imageBase64);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes.buffer;
    }
    loadImageFromArrayBuffer(arrayBuffer, cropperSettings, imageType) {
      var _this4 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const res = yield new Promise( /*#__PURE__*/function () {
          var _ref = (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
            try {
              const blob = new Blob([arrayBuffer], imageType ? {
                type: imageType
              } : undefined);
              const objectUrl = URL.createObjectURL(blob);
              const originalImage = new Image();
              const isSvg = imageType === 'image/svg+xml';
              const originalImageSize = isSvg ? yield _this4.getSvgImageSize(blob) : undefined;
              originalImage.onload = () => resolve({
                originalImage,
                originalImageSize,
                originalObjectUrl: objectUrl,
                originalArrayBuffer: arrayBuffer
              });
              originalImage.onerror = reject;
              originalImage.src = objectUrl;
            } catch (e) {
              reject(e);
            }
          });
          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
        return yield _this4.transformImageFromArrayBuffer(res, cropperSettings, res.originalImageSize != null);
      })();
    }
    getSvgImageSize(blob) {
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const parser = new DOMParser();
        const doc = parser.parseFromString(yield blob.text(), 'image/svg+xml');
        const svgElement = doc.querySelector('svg');
        if (!svgElement) {
          throw Error('Failed to parse SVG image');
        }
        const widthAttr = svgElement.getAttribute('width');
        const heightAttr = svgElement.getAttribute('height');
        if (widthAttr && heightAttr) {
          return null;
        }
        const viewBoxAttr = svgElement.getAttribute('viewBox') || svgElement.getAttribute('viewbox');
        if (viewBoxAttr) {
          const viewBox = viewBoxAttr.split(' ');
          return {
            width: +viewBox[2],
            height: +viewBox[3]
          };
        }
        throw Error('Failed to load SVG image. SVG must have width + height or viewBox definition.');
      })();
    }
    transformImageFromArrayBuffer(res, cropperSettings, forceTransform = false) {
      var _this5 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const autoRotate = yield _this5.autoRotateSupported;
        const exifTransform = getTransformationsFromExifData(autoRotate ? -1 : res.originalArrayBuffer);
        if (!res.originalImage || !res.originalImage.complete) {
          return Promise.reject(new Error('No image loaded'));
        }
        const loadedImage = {
          original: {
            objectUrl: res.originalObjectUrl,
            image: res.originalImage,
            size: res.originalImageSize ?? {
              width: res.originalImage.naturalWidth,
              height: res.originalImage.naturalHeight
            }
          },
          exifTransform
        };
        return _this5.transformLoadedImage(loadedImage, cropperSettings, forceTransform);
      })();
    }
    transformLoadedImage(loadedImage, cropperSettings, forceTransform = false) {
      var _this6 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const canvasRotation = cropperSettings.canvasRotation + loadedImage.exifTransform.rotate;
        const originalSize = loadedImage.original.size;
        if (!forceTransform && canvasRotation === 0 && !loadedImage.exifTransform.flip && !cropperSettings.containWithinAspectRatio) {
          return {
            original: {
              objectUrl: loadedImage.original.objectUrl,
              image: loadedImage.original.image,
              size: {
                ...originalSize
              }
            },
            transformed: {
              objectUrl: loadedImage.original.objectUrl,
              image: loadedImage.original.image,
              size: {
                ...originalSize
              }
            },
            exifTransform: loadedImage.exifTransform
          };
        }
        const transformedSize = _this6.getTransformedSize(originalSize, loadedImage.exifTransform, cropperSettings);
        const canvas = document.createElement('canvas');
        canvas.width = transformedSize.width;
        canvas.height = transformedSize.height;
        const ctx = canvas.getContext('2d');
        ctx?.setTransform(loadedImage.exifTransform.flip ? -1 : 1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
        ctx?.rotate(Math.PI * (canvasRotation / 2));
        ctx?.drawImage(loadedImage.original.image, -originalSize.width / 2, -originalSize.height / 2);
        const blob = yield new Promise(resolve => canvas.toBlob(resolve, cropperSettings.format));
        if (!blob) {
          throw new Error('Failed to get Blob for transformed image.');
        }
        const objectUrl = URL.createObjectURL(blob);
        const transformedImage = yield _this6.loadImageFromObjectUrl(objectUrl);
        return {
          original: {
            objectUrl: loadedImage.original.objectUrl,
            image: loadedImage.original.image,
            size: {
              ...originalSize
            }
          },
          transformed: {
            objectUrl: objectUrl,
            image: transformedImage,
            size: {
              width: transformedImage.width,
              height: transformedImage.height
            }
          },
          exifTransform: loadedImage.exifTransform
        };
      })();
    }
    loadImageFromObjectUrl(objectUrl) {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = objectUrl;
      });
    }
    getTransformedSize(originalSize, exifTransform, cropperSettings) {
      const canvasRotation = cropperSettings.canvasRotation + exifTransform.rotate;
      if (cropperSettings.containWithinAspectRatio) {
        if (canvasRotation % 2) {
          const minWidthToContain = originalSize.width * cropperSettings.aspectRatio;
          const minHeightToContain = originalSize.height / cropperSettings.aspectRatio;
          return {
            width: Math.max(originalSize.height, minWidthToContain),
            height: Math.max(originalSize.width, minHeightToContain)
          };
        } else {
          const minWidthToContain = originalSize.height * cropperSettings.aspectRatio;
          const minHeightToContain = originalSize.width / cropperSettings.aspectRatio;
          return {
            width: Math.max(originalSize.width, minWidthToContain),
            height: Math.max(originalSize.height, minHeightToContain)
          };
        }
      }
      if (canvasRotation % 2) {
        return {
          height: originalSize.width,
          width: originalSize.height
        };
      }
      return {
        width: originalSize.width,
        height: originalSize.height
      };
    }
  }
  LoadImageService.ɵfac = function LoadImageService_Factory(t) {
    return new (t || LoadImageService)();
  };
  LoadImageService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LoadImageService,
    factory: LoadImageService.ɵfac,
    providedIn: 'root'
  });
  return LoadImageService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ImageCropperComponent = /*#__PURE__*/(() => {
  class ImageCropperComponent {
    constructor(cropService, cropperPositionService, loadImageService, sanitizer, cd, zone, hammerLoader) {
      this.cropService = cropService;
      this.cropperPositionService = cropperPositionService;
      this.loadImageService = loadImageService;
      this.sanitizer = sanitizer;
      this.cd = cd;
      this.zone = zone;
      this.hammerLoader = hammerLoader;
      this.settings = new CropperSettings();
      this.setImageMaxSizeRetries = 0;
      this.resizedWhileHidden = false;
      this.marginLeft = '0px';
      this.maxSize = {
        width: 0,
        height: 0
      };
      this.moveTypes = MoveTypes;
      this.imageVisible = false;
      this.cropperFrameAriaLabel = this.settings.cropperFrameAriaLabel;
      this.output = this.settings.output;
      this.format = this.settings.format;
      this.transform = {};
      this.maintainAspectRatio = this.settings.maintainAspectRatio;
      this.aspectRatio = this.settings.aspectRatio;
      this.resetCropOnAspectRatioChange = this.settings.resetCropOnAspectRatioChange;
      this.resizeToWidth = this.settings.resizeToWidth;
      this.resizeToHeight = this.settings.resizeToHeight;
      this.cropperMinWidth = this.settings.cropperMinWidth;
      this.cropperMinHeight = this.settings.cropperMinHeight;
      this.cropperMaxHeight = this.settings.cropperMaxHeight;
      this.cropperMaxWidth = this.settings.cropperMaxWidth;
      this.cropperStaticWidth = this.settings.cropperStaticWidth;
      this.cropperStaticHeight = this.settings.cropperStaticHeight;
      this.canvasRotation = this.settings.canvasRotation;
      this.initialStepSize = this.settings.initialStepSize;
      this.roundCropper = this.settings.roundCropper;
      this.onlyScaleDown = this.settings.onlyScaleDown;
      this.imageQuality = this.settings.imageQuality;
      this.autoCrop = this.settings.autoCrop;
      this.backgroundColor = this.settings.backgroundColor;
      this.containWithinAspectRatio = this.settings.containWithinAspectRatio;
      this.hideResizeSquares = this.settings.hideResizeSquares;
      this.allowMoveImage = false;
      this.cropper = {
        x1: -100,
        y1: -100,
        x2: 10000,
        y2: 10000
      };
      this.alignImage = this.settings.alignImage;
      this.disabled = false;
      this.hidden = false;
      this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.startCropImage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.cropperReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.transformChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.reset();
    }
    ngOnChanges(changes) {
      this.onChangesUpdateSettings(changes);
      this.onChangesInputImage(changes);
      if (this.loadedImage?.original.image.complete && (changes['containWithinAspectRatio'] || changes['canvasRotation'])) {
        this.loadImageService.transformLoadedImage(this.loadedImage, this.settings).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
      }
      if (changes['cropper'] || changes['maintainAspectRatio'] || changes['aspectRatio']) {
        this.setMaxSize();
        this.setCropperScaledMinSize();
        this.setCropperScaledMaxSize();
        if (this.maintainAspectRatio && (this.resetCropOnAspectRatioChange || !this.aspectRatioIsCorrect()) && (changes['maintainAspectRatio'] || changes['aspectRatio'])) {
          this.resetCropperPosition();
        } else if (changes['cropper']) {
          this.checkCropperPosition(false);
          this.doAutoCrop();
        }
      }
      if (changes['transform']) {
        this.transform = this.transform || {};
        this.setCssTransform();
        this.doAutoCrop();
      }
      if (changes['hidden'] && this.resizedWhileHidden && !this.hidden) {
        setTimeout(() => {
          this.onResize();
          this.resizedWhileHidden = false;
        });
      }
    }
    onChangesUpdateSettings(changes) {
      this.settings.setOptionsFromChanges(changes);
      if (this.settings.cropperStaticHeight && this.settings.cropperStaticWidth) {
        this.hideResizeSquares = true;
        this.settings.setOptions({
          hideResizeSquares: true,
          cropperMinWidth: this.settings.cropperStaticWidth,
          cropperMinHeight: this.settings.cropperStaticHeight,
          cropperMaxHeight: this.settings.cropperStaticHeight,
          cropperMaxWidth: this.settings.cropperStaticWidth,
          maintainAspectRatio: false
        });
      }
    }
    onChangesInputImage(changes) {
      if (changes['imageChangedEvent'] || changes['imageURL'] || changes['imageBase64'] || changes['imageFile']) {
        this.reset();
      }
      if (changes['imageChangedEvent'] && this.isValidImageChangedEvent()) {
        this.loadImageFile(this.imageChangedEvent.target.files[0]);
      }
      if (changes['imageURL'] && this.imageURL) {
        this.loadImageFromURL(this.imageURL);
      }
      if (changes['imageBase64'] && this.imageBase64) {
        this.loadBase64Image(this.imageBase64);
      }
      if (changes['imageFile'] && this.imageFile) {
        this.loadImageFile(this.imageFile);
      }
    }
    isValidImageChangedEvent() {
      return this.imageChangedEvent?.target?.files?.length > 0;
    }
    setCssTransform() {
      const translateUnit = this.transform?.translateUnit || '%';
      this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle(`translate(${this.transform.translateH || 0}${translateUnit}, ${this.transform.translateV || 0}${translateUnit})` + ' scaleX(' + (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1) + ')' + ' scaleY(' + (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1) + ')' + ' rotate(' + (this.transform.rotate || 0) + 'deg)');
    }
    ngOnInit() {
      this.settings.stepSize = this.initialStepSize;
      this.activatePinchGesture();
    }
    reset() {
      this.imageVisible = false;
      this.loadedImage = undefined;
      this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg' + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU' + 'AAarVyFEAAAAASUVORK5CYII=';
      this.moveStart = {
        active: false,
        type: null,
        position: null,
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        clientX: 0,
        clientY: 0
      };
      this.maxSize = {
        width: 0,
        height: 0
      };
      this.cropper.x1 = -100;
      this.cropper.y1 = -100;
      this.cropper.x2 = 10000;
      this.cropper.y2 = 10000;
    }
    loadImageFile(file) {
      this.loadImageService.loadImageFile(file, this.settings).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
    }
    loadBase64Image(imageBase64) {
      this.loadImageService.loadBase64Image(imageBase64, this.settings).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
    }
    loadImageFromURL(url) {
      this.loadImageService.loadImageFromURL(url, this.settings).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
    }
    setLoadedImage(loadedImage) {
      this.loadedImage = loadedImage;
      this.safeImgDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(loadedImage.transformed.objectUrl);
      this.cd.markForCheck();
    }
    loadImageError(error) {
      console.error(error);
      this.loadImageFailed.emit();
    }
    imageLoadedInView() {
      if (this.loadedImage != null) {
        this.imageLoaded.emit(this.loadedImage);
        this.setImageMaxSizeRetries = 0;
        setTimeout(() => this.checkImageMaxSizeRecursively());
      }
    }
    checkImageMaxSizeRecursively() {
      if (this.setImageMaxSizeRetries > 40) {
        this.loadImageFailed.emit();
      } else if (this.sourceImageLoaded()) {
        this.setMaxSize();
        this.setCropperScaledMinSize();
        this.setCropperScaledMaxSize();
        this.resetCropperPosition();
        this.cropperReady.emit({
          ...this.maxSize
        });
        this.cd.markForCheck();
      } else {
        this.setImageMaxSizeRetries++;
        setTimeout(() => this.checkImageMaxSizeRecursively(), 50);
      }
    }
    sourceImageLoaded() {
      return this.sourceImage?.nativeElement?.offsetWidth > 0;
    }
    onResize() {
      if (!this.loadedImage) {
        return;
      }
      if (this.hidden) {
        this.resizedWhileHidden = true;
      } else {
        const oldMaxSize = {
          ...this.maxSize
        };
        this.setMaxSize();
        this.resizeCropperPosition(oldMaxSize);
        this.setCropperScaledMinSize();
        this.setCropperScaledMaxSize();
      }
    }
    activatePinchGesture() {
      var _this7 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        // Loads HammerJS via angular APIs if configured
        yield _this7.hammerLoader?.();
        const Hammer = window?.['Hammer'] || null;
        if (Hammer) {
          const hammer = new Hammer(_this7.wrapper.nativeElement);
          hammer.get('pinch').set({
            enable: true
          });
          hammer.on('pinchmove', _this7.onPinch.bind(_this7));
          hammer.on('pinchend', _this7.pinchStop.bind(_this7));
          hammer.on('pinchstart', _this7.startPinch.bind(_this7));
        } else if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isDevMode)()) {
          console.warn('[NgxImageCropper] Could not find HammerJS - Pinch Gesture won\'t work');
        }
      })();
    }
    resizeCropperPosition(oldMaxSize) {
      if (oldMaxSize.width !== this.maxSize.width || oldMaxSize.height !== this.maxSize.height) {
        this.cropper.x1 = this.cropper.x1 * this.maxSize.width / oldMaxSize.width;
        this.cropper.x2 = this.cropper.x2 * this.maxSize.width / oldMaxSize.width;
        this.cropper.y1 = this.cropper.y1 * this.maxSize.height / oldMaxSize.height;
        this.cropper.y2 = this.cropper.y2 * this.maxSize.height / oldMaxSize.height;
      }
    }
    resetCropperPosition() {
      this.cropperPositionService.resetCropperPosition(this.sourceImage, this.cropper, this.settings, this.maxSize);
      this.doAutoCrop();
      this.imageVisible = true;
    }
    keyboardAccess(event) {
      this.changeKeyboardStepSize(event);
      this.keyboardMoveCropper(event);
    }
    changeKeyboardStepSize(event) {
      const key = +event.key;
      if (key >= 1 && key <= 9) {
        this.settings.stepSize = key;
      }
    }
    keyboardMoveCropper(event) {
      const keyboardWhiteList = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
      if (!keyboardWhiteList.includes(event.key)) {
        return;
      }
      const moveType = event.shiftKey ? MoveTypes.Resize : MoveTypes.Move;
      const position = event.altKey ? getInvertedPositionForKey(event.key) : getPositionForKey(event.key);
      const moveEvent = getEventForKey(event.key, this.settings.stepSize);
      event.preventDefault();
      event.stopPropagation();
      this.startMove({
        clientX: 0,
        clientY: 0
      }, moveType, position);
      this.handleMouseMove(moveEvent);
      this.handleMouseUp();
    }
    startMove(event, moveType, position = null) {
      if (this.disabled || this.moveStart?.active && this.moveStart?.type === MoveTypes.Pinch || moveType === MoveTypes.Drag && !this.allowMoveImage) {
        return;
      }
      if (event.preventDefault) {
        event.preventDefault();
      }
      this.moveStart = {
        active: true,
        type: moveType,
        position,
        transform: {
          ...this.transform
        },
        clientX: this.cropperPositionService.getClientX(event),
        clientY: this.cropperPositionService.getClientY(event),
        ...this.cropper
      };
      this.initMouseMove();
    }
    initMouseMove() {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mousemove'), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'touchmove')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mouseup'), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'touchend')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)()))).subscribe({
        next: event => this.zone.run(() => {
          this.handleMouseMove(event);
          this.cd.markForCheck();
        }),
        complete: () => this.zone.run(() => {
          this.handleMouseUp();
          this.cd.markForCheck();
        })
      });
    }
    startPinch(event) {
      if (!this.safeImgDataUrl) {
        return;
      }
      if (event.preventDefault) {
        event.preventDefault();
      }
      this.moveStart = {
        active: true,
        type: MoveTypes.Pinch,
        position: 'center',
        clientX: this.cropper.x1 + (this.cropper.x2 - this.cropper.x1) / 2,
        clientY: this.cropper.y1 + (this.cropper.y2 - this.cropper.y1) / 2,
        ...this.cropper
      };
    }
    handleMouseMove(event) {
      if (this.moveStart.active) {
        if (event.stopPropagation) {
          event.stopPropagation();
        }
        if (event.preventDefault) {
          event.preventDefault();
        }
        if (this.moveStart.type === MoveTypes.Move) {
          this.cropperPositionService.move(event, this.moveStart, this.cropper);
          this.checkCropperPosition(true);
        } else if (this.moveStart.type === MoveTypes.Resize) {
          if (!this.cropperStaticWidth && !this.cropperStaticHeight) {
            this.cropperPositionService.resize(event, this.moveStart, this.cropper, this.maxSize, this.settings);
          }
          this.checkCropperPosition(false);
        } else if (this.moveStart.type === MoveTypes.Drag) {
          const diffX = this.cropperPositionService.getClientX(event) - this.moveStart.clientX;
          const diffY = this.cropperPositionService.getClientY(event) - this.moveStart.clientY;
          this.transform = {
            ...this.transform,
            translateH: (this.moveStart.transform?.translateH || 0) + diffX,
            translateV: (this.moveStart.transform?.translateV || 0) + diffY
          };
          this.setCssTransform();
        }
      }
    }
    onPinch(event) {
      if (this.moveStart.active) {
        if (event.stopPropagation) {
          event.stopPropagation();
        }
        if (event.preventDefault) {
          event.preventDefault();
        }
        if (this.moveStart.type === MoveTypes.Pinch) {
          this.cropperPositionService.resize(event, this.moveStart, this.cropper, this.maxSize, this.settings);
          this.checkCropperPosition(false);
        }
        this.cd.markForCheck();
      }
    }
    setMaxSize() {
      if (this.sourceImage) {
        const sourceImageStyle = getComputedStyle(this.sourceImage.nativeElement);
        this.maxSize.width = parseFloat(sourceImageStyle.width);
        this.maxSize.height = parseFloat(sourceImageStyle.height);
        this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
      }
    }
    setCropperScaledMinSize() {
      if (this.loadedImage?.transformed?.image) {
        this.setCropperScaledMinWidth();
        this.setCropperScaledMinHeight();
      } else {
        this.settings.cropperScaledMinWidth = 20;
        this.settings.cropperScaledMinHeight = 20;
      }
    }
    setCropperScaledMinWidth() {
      this.settings.cropperScaledMinWidth = this.cropperMinWidth > 0 ? Math.max(20, this.cropperMinWidth / this.loadedImage.transformed.image.width * this.maxSize.width) : 20;
    }
    setCropperScaledMinHeight() {
      if (this.maintainAspectRatio) {
        this.settings.cropperScaledMinHeight = Math.max(20, this.settings.cropperScaledMinWidth / this.aspectRatio);
      } else if (this.cropperMinHeight > 0) {
        this.settings.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.loadedImage.transformed.image.height * this.maxSize.height);
      } else {
        this.settings.cropperScaledMinHeight = 20;
      }
    }
    setCropperScaledMaxSize() {
      if (this.loadedImage?.transformed?.image) {
        const ratio = this.loadedImage.transformed.size.width / this.maxSize.width;
        this.settings.cropperScaledMaxWidth = this.cropperMaxWidth > 20 ? this.cropperMaxWidth / ratio : this.maxSize.width;
        this.settings.cropperScaledMaxHeight = this.cropperMaxHeight > 20 ? this.cropperMaxHeight / ratio : this.maxSize.height;
        if (this.maintainAspectRatio) {
          if (this.settings.cropperScaledMaxWidth > this.settings.cropperScaledMaxHeight * this.aspectRatio) {
            this.settings.cropperScaledMaxWidth = this.settings.cropperScaledMaxHeight * this.aspectRatio;
          } else if (this.settings.cropperScaledMaxWidth < this.settings.cropperScaledMaxHeight * this.aspectRatio) {
            this.settings.cropperScaledMaxHeight = this.settings.cropperScaledMaxWidth / this.aspectRatio;
          }
        }
      } else {
        this.settings.cropperScaledMaxWidth = this.maxSize.width;
        this.settings.cropperScaledMaxHeight = this.maxSize.height;
      }
    }
    checkCropperPosition(maintainSize = false) {
      if (this.cropper.x1 < 0) {
        this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
        this.cropper.x1 = 0;
      }
      if (this.cropper.y1 < 0) {
        this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
        this.cropper.y1 = 0;
      }
      if (this.cropper.x2 > this.maxSize.width) {
        this.cropper.x1 -= maintainSize ? this.cropper.x2 - this.maxSize.width : 0;
        this.cropper.x2 = this.maxSize.width;
      }
      if (this.cropper.y2 > this.maxSize.height) {
        this.cropper.y1 -= maintainSize ? this.cropper.y2 - this.maxSize.height : 0;
        this.cropper.y2 = this.maxSize.height;
      }
    }
    handleMouseUp() {
      if (this.moveStart.active) {
        this.moveStart.active = false;
        if (this.moveStart?.type === MoveTypes.Drag) {
          this.transformChange.emit(this.transform);
        } else {
          this.doAutoCrop();
        }
      }
    }
    pinchStop() {
      if (this.moveStart.active) {
        this.moveStart.active = false;
        this.doAutoCrop();
      }
    }
    doAutoCrop() {
      if (this.autoCrop) {
        void this.crop();
      }
    }
    crop(output = this.settings.output) {
      if (this.loadedImage?.transformed?.image != null) {
        this.startCropImage.emit();
        if (output === 'blob') {
          return this.cropToBlob();
        } else if (output === 'base64') {
          return this.cropToBase64();
        }
      }
      return null;
    }
    cropToBlob() {
      var _this8 = this;
      return new Promise((resolve, reject) => this.zone.run( /*#__PURE__*/(0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _this8.cropService.crop(_this8.loadedImage, _this8.cropper, _this8.settings, 'blob', _this8.maxSize);
        if (result) {
          _this8.imageCropped.emit(result);
          resolve(result);
        } else {
          reject('Crop image failed');
        }
      })));
    }
    cropToBase64() {
      const result = this.cropService.crop(this.loadedImage, this.cropper, this.settings, 'base64', this.maxSize);
      if (result) {
        this.imageCropped.emit(result);
        return result;
      }
      return null;
    }
    aspectRatioIsCorrect() {
      const currentCropAspectRatio = (this.cropper.x2 - this.cropper.x1) / (this.cropper.y2 - this.cropper.y1);
      return currentCropAspectRatio === this.aspectRatio;
    }
  }
  ImageCropperComponent.ɵfac = function ImageCropperComponent_Factory(t) {
    return new (t || ImageCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CropService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CropperPositionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LoadImageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.HAMMER_LOADER, 8));
  };
  ImageCropperComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ImageCropperComponent,
    selectors: [["image-cropper"]],
    viewQuery: function ImageCropperComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sourceImage = _t.first);
      }
    },
    hostVars: 6,
    hostBindings: function ImageCropperComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function ImageCropperComponent_resize_HostBindingHandler() {
          return ctx.onResize();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("text-align", ctx.alignImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.disabled)("ngx-ix-hidden", ctx.hidden);
      }
    },
    inputs: {
      imageChangedEvent: "imageChangedEvent",
      imageURL: "imageURL",
      imageBase64: "imageBase64",
      imageFile: "imageFile",
      imageAltText: "imageAltText",
      cropperFrameAriaLabel: "cropperFrameAriaLabel",
      output: "output",
      format: "format",
      transform: "transform",
      maintainAspectRatio: "maintainAspectRatio",
      aspectRatio: "aspectRatio",
      resetCropOnAspectRatioChange: "resetCropOnAspectRatioChange",
      resizeToWidth: "resizeToWidth",
      resizeToHeight: "resizeToHeight",
      cropperMinWidth: "cropperMinWidth",
      cropperMinHeight: "cropperMinHeight",
      cropperMaxHeight: "cropperMaxHeight",
      cropperMaxWidth: "cropperMaxWidth",
      cropperStaticWidth: "cropperStaticWidth",
      cropperStaticHeight: "cropperStaticHeight",
      canvasRotation: "canvasRotation",
      initialStepSize: "initialStepSize",
      roundCropper: "roundCropper",
      onlyScaleDown: "onlyScaleDown",
      imageQuality: "imageQuality",
      autoCrop: "autoCrop",
      backgroundColor: "backgroundColor",
      containWithinAspectRatio: "containWithinAspectRatio",
      hideResizeSquares: "hideResizeSquares",
      allowMoveImage: "allowMoveImage",
      cropper: "cropper",
      alignImage: "alignImage",
      disabled: "disabled",
      hidden: "hidden"
    },
    outputs: {
      imageCropped: "imageCropped",
      startCropImage: "startCropImage",
      imageLoaded: "imageLoaded",
      cropperReady: "cropperReady",
      loadImageFailed: "loadImageFailed",
      transformChange: "transformChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 5,
    vars: 10,
    consts: [["wrapper", ""], ["class", "ngx-ic-source-image", "role", "presentation", 3, "src", "visibility", "transform", "ngx-ic-draggable", "load", "mousedown", "touchstart", "error", 4, "ngIf"], [1, "ngx-ic-overlay"], ["class", "ngx-ic-cropper", "tabindex", "0", 3, "ngx-ic-round", "top", "left", "width", "height", "margin-left", "visibility", "keydown", 4, "ngIf"], ["role", "presentation", 1, "ngx-ic-source-image", 3, "src", "load", "mousedown", "touchstart", "error"], ["sourceImage", ""], ["tabindex", "0", 1, "ngx-ic-cropper", 3, "keydown"], ["role", "presentation", 1, "ngx-ic-move", 3, "mousedown", "touchstart"], [4, "ngIf"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-topleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-square"], [1, "ngx-ic-resize", "ngx-ic-top"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-topright", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-right"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-bottomright", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-bottom"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-bottomleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-left"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-top", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-right", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-bottom", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-left", 3, "mousedown", "touchstart"]],
    template: function ImageCropperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ImageCropperComponent_img_2_Template, 2, 8, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ImageCropperComponent_div_4_Template, 3, 16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.imageVisible && ctx.backgroundColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.safeImgDataUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.maxSize.width, "px")("height", ctx.maxSize.height, "px")("margin-left", ctx.alignImage === "center" ? ctx.marginLeft : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageVisible);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
    styles: ["[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image.ngx-ic-draggable[_ngcontent-%COMP%]{user-drag:none;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;cursor:grab}[_nghost-%COMP%]   .ngx-ic-overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color, white) solid 100vw;top:0;left:0}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c;background:transparent;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color, rgba(255, 255, 255, .3)) solid 100vw;touch-action:none}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{outline-width:100vh}}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:after{position:absolute;content:\"\";inset:0;pointer-events:none;border:dashed 1px;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:focus   .ngx-ic-move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]   .ngx-ic-square[_ngcontent-%COMP%]{display:inline-block;background:#53535C;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw #ffffff4d;box-shadow:0 0 0 100vw var(--cropper-outline-color, rgba(255, 255, 255, .3))}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh #ffffff4d;box-shadow:0 0 0 100vh var(--cropper-outline-color, rgba(255, 255, 255, .3))}}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{display:none}.ngx-ix-hidden[_nghost-%COMP%]{display:none}"],
    changeDetection: 0
  });
  return ImageCropperComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ImageCropperModule = /*#__PURE__*/(() => {
  class ImageCropperModule {}
  ImageCropperModule.ɵfac = function ImageCropperModule_Factory(t) {
    return new (t || ImageCropperModule)();
  };
  ImageCropperModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ImageCropperModule
  });
  ImageCropperModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]]
  });
  return ImageCropperModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function base64ToFile(base64Image) {
  const split = base64Image.split(',');
  const type = split[0].replace('data:', '').replace(';base64', '');
  const byteString = atob(split[1]);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i += 1) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], {
    type
  });
}

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3311:
/*!**********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-dialog.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ Dialog),
/* harmony export */   DialogModule: () => (/* binding */ DialogModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 4946);
/* harmony import */ var primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/focustrap */ 9182);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/times */ 8993);
/* harmony import */ var primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/windowmaximize */ 2282);
/* harmony import */ var primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/windowminimize */ 3366);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 5861);
















const _c0 = ["titlebar"];
const _c1 = ["content"];
const _c2 = ["footer"];
function Dialog_div_0_div_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dialog_div_0_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.headlessTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function Dialog_div_0_div_1_ng_template_3_div_0_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.initResize($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r15.getAriaLabelledBy());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.header);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r16.getAriaLabelledBy());
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 24);
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r20.maximized ? ctx_r20.minimizeIcon : ctx_r20.maximizeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMaximizeIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "WindowMaximizeIcon", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dialog-header-maximize-icon");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMinimizeIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "WindowMinimizeIcon", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dialog-header-maximize-icon");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMaximizeIcon_1_Template, 1, 1, "WindowMaximizeIcon", 25)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMinimizeIcon_2_Template, 1, 1, "WindowMinimizeIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r21.maximized && !ctx_r21.maximizeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.maximized && !ctx_r21.minimizeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_ng_template_0_Template(rf, ctx) {}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.maximizeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_ng_template_0_Template(rf, ctx) {}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.minimizeIconTemplate);
  }
}
const _c3 = () => ({
  "p-dialog-header-icon p-dialog-header-maximize p-link": true
});
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r30.maximize());
    })("keydown.enter", function Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template_button_keydown_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r32.maximize());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_span_1_Template, 1, 1, "span", 22)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_Template, 3, 2, "ng-container", 23)(3, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_Template, 2, 1, "ng-container", 23)(4, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_Template, 2, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.maximizeIcon && !ctx_r18.maximizeIconTemplate && !ctx_r18.minimizeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.maximizeIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.maximized);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.maximized);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 29);
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r35.closeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_TimesIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesIcon", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dialog-header-close-icon");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_span_1_Template, 1, 1, "span", 28)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_TimesIcon_2_Template, 1, 1, "TimesIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.closeIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r33.closeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_ng_template_0_Template(rf, ctx) {}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r34.closeIconTemplate);
  }
}
const _c4 = () => ({
  "p-dialog-header-icon p-dialog-header-close p-link": true
});
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r39.close($event));
    })("keydown.enter", function Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template_button_keydown_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r41.close($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_Template, 3, 2, "ng-container", 23)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r19.closeAriaLabel)("tabindex", ctx_r19.closeTabindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.closeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function Dialog_div_0_div_1_ng_template_3_div_1_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r42.initDrag($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dialog_div_0_div_1_ng_template_3_div_1_span_2_Template, 2, 2, "span", 16)(3, Dialog_div_0_div_1_ng_template_3_div_1_span_3_Template, 2, 1, "span", 16)(4, Dialog_div_0_div_1_ng_template_3_div_1_ng_container_4_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template, 5, 6, "button", 18)(7, Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template, 3, 6, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.headerFacet && !ctx_r8.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.headerFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.maximizable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.closable);
  }
}
function Dialog_div_0_div_1_ng_template_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Dialog_div_0_div_1_ng_template_3_div_6_ng_container_3_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r11.footerTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_div_1_ng_template_3_div_0_Template, 1, 0, "div", 8)(1, Dialog_div_0_div_1_ng_template_3_div_1_Template, 8, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Dialog_div_0_div_1_ng_template_3_ng_container_5_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dialog_div_0_div_1_ng_template_3_div_6_Template, 4, 1, "div", 12);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.resizable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-dialog-content")("ngStyle", ctx_r4.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.contentTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.footerFacet || ctx_r4.footerTemplate);
  }
}
const _c5 = (a1, a2, a3, a4) => ({
  "p-dialog p-component": true,
  "p-dialog-rtl": a1,
  "p-dialog-draggable": a2,
  "p-dialog-resizable": a3,
  "p-dialog-maximized": a4
});
const _c6 = (a0, a1) => ({
  transform: a0,
  transition: a1
});
const _c7 = a1 => ({
  value: "visible",
  params: a1
});
function Dialog_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@animation.start", function Dialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r46.onAnimationStart($event));
    })("@animation.done", function Dialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r48.onAnimationEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dialog_div_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 5)(3, Dialog_div_0_div_1_ng_template_3_Template, 7, 8, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](10, _c5, ctx_r1.rtl, ctx_r1.draggable, ctx_r1.resizable, ctx_r1.maximized))("ngStyle", ctx_r1.style)("pFocusTrapDisabled", ctx_r1.focusTrap === false)("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c6, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-modal", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.headlessTemplate)("ngIfElse", _r5);
  }
}
const _c8 = (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => ({
  "p-dialog-mask": true,
  "p-component-overlay p-component-overlay-enter": a1,
  "p-dialog-mask-scrollblocker": a2,
  "p-dialog-left": a3,
  "p-dialog-right": a4,
  "p-dialog-top": a5,
  "p-dialog-top-left": a6,
  "p-dialog-top-right": a7,
  "p-dialog-bottom": a8,
  "p-dialog-bottom-left": a9,
  "p-dialog-bottom-right": a10
});
function Dialog_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_Template, 5, 20, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r0.maskStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.maskStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](6, _c8, [ctx_r0.modal, ctx_r0.modal || ctx_r0.blockScroll, ctx_r0.position === "left", ctx_r0.position === "right", ctx_r0.position === "top", ctx_r0.position === "topleft" || ctx_r0.position === "top-left", ctx_r0.position === "topright" || ctx_r0.position === "top-right", ctx_r0.position === "bottom", ctx_r0.position === "bottomleft" || ctx_r0.position === "bottom-left", ctx_r0.position === "bottomright" || ctx_r0.position === "bottom-right"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.visible);
  }
}
const _c9 = ["*", [["p-header"]], [["p-footer"]]];
const _c10 = ["*", "p-header", "p-footer"];
const showAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  transform: '{{transform}}',
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{transition}}')]);
const hideAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{transition}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  transform: '{{transform}}',
  opacity: 0
}))]);
/**
 * Dialog is a container to display content in an overlay window.
 * @group Components
 */
let Dialog = /*#__PURE__*/(() => {
  class Dialog {
    document;
    platformId;
    el;
    renderer;
    zone;
    cd;
    config;
    /**
     * Title text of the dialog.
     * @group Props
     */
    header;
    /**
     * Enables dragging to change the position using header.
     * @group Props
     */
    draggable = true;
    /**
     * Enables resizing of the content.
     * @group Props
     */
    resizable = true;
    /**
     * Defines the left offset of dialog.
     * @group Props
     * @deprecated positionLeft property is deprecated.
     */
    get positionLeft() {
      return 0;
    }
    set positionLeft(_positionLeft) {
      console.log('positionLeft property is deprecated.');
    }
    /**
     * Defines the top offset of dialog.
     * @group Props
     * @deprecated positionTop property is deprecated.
     */
    get positionTop() {
      return 0;
    }
    set positionTop(_positionTop) {
      console.log('positionTop property is deprecated.');
    }
    /**
     * Style of the content section.
     * @group Props
     */
    contentStyle;
    /**
     * Style class of the content.
     * @group Props
     */
    contentStyleClass;
    /**
     * Defines if background should be blocked when dialog is displayed.
     * @group Props
     */
    modal = false;
    /**
     * Specifies if pressing escape key should hide the dialog.
     * @group Props
     */
    closeOnEscape = true;
    /**
     * Specifies if clicking the modal background should hide the dialog.
     * @group Props
     */
    dismissableMask = false;
    /**
     * When enabled dialog is displayed in RTL direction.
     * @group Props
     */
    rtl = false;
    /**
     * Adds a close icon to the header to hide the dialog.
     * @group Props
     */
    closable = true;
    /**
     * Defines if the component is responsive.
     * @group Props
     * @deprecated Responsive property is deprecated.
     */
    get responsive() {
      return false;
    }
    set responsive(_responsive) {
      console.log('Responsive property is deprecated.');
    }
    /**
     * Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * Object literal to define widths per screen size.
     * @group Props
     */
    breakpoints;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Style class of the mask.
     * @group Props
     */
    maskStyleClass;
    /**
     * Style of the mask.
     * @group Props
     */
    maskStyle;
    /**
     * Whether to show the header or not.
     * @group Props
     */
    showHeader = true;
    /**
     * Defines the breakpoint of the component responsive.
     * @group Props
     * @deprecated Breakpoint property is not utilized and deprecated. Use breakpoints or CSS media queries instead.
     */
    get breakpoint() {
      return 649;
    }
    set breakpoint(_breakpoint) {
      console.log('Breakpoint property is not utilized and deprecated, use breakpoints or CSS media queries instead.');
    }
    /**
     * Whether background scroll should be blocked when dialog is visible.
     * @group Props
     */
    blockScroll = false;
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex = true;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex = 0;
    /**
     * Minimum value for the left coordinate of dialog in dragging.
     * @group Props
     */
    minX = 0;
    /**
     * Minimum value for the top coordinate of dialog in dragging.
     * @group Props
     */
    minY = 0;
    /**
     * When enabled, first button receives focus on show.
     * @group Props
     */
    focusOnShow = true;
    /**
     * Whether the dialog can be displayed full screen.
     * @group Props
     */
    maximizable = false;
    /**
     * Keeps dialog in the viewport.
     * @group Props
     */
    keepInViewport = true;
    /**
     * When enabled, can only focus on elements inside the dialog.
     * @group Props
     */
    focusTrap = true;
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    /**
     * Name of the close icon.
     * @group Props
     */
    closeIcon;
    /**
     * Defines a string that labels the close button for accessibility.
     * @group Props
     */
    closeAriaLabel;
    /**
     * Index of the close button in tabbing order.
     * @group Props
     */
    closeTabindex = '-1';
    /**
     * Name of the minimize icon.
     * @group Props
     */
    minimizeIcon;
    /**
     * Name of the maximize icon.
     * @group Props
     */
    maximizeIcon;
    /**
     * Specifies the visibility of the dialog.
     * @group Props
     */
    get visible() {
      return this._visible;
    }
    set visible(value) {
      this._visible = value;
      if (this._visible && !this.maskVisible) {
        this.maskVisible = true;
      }
    }
    /**
     * Inline style of the component.
     * @group Props
     */
    get style() {
      return this._style;
    }
    set style(value) {
      if (value) {
        this._style = {
          ...value
        };
        this.originalStyle = value;
      }
    }
    /**
     * Position of the dialog.
     * @group Props
     */
    get position() {
      return this._position;
    }
    set position(value) {
      this._position = value;
      switch (value) {
        case 'topleft':
        case 'bottomleft':
        case 'left':
          this.transformOptions = 'translate3d(-100%, 0px, 0px)';
          break;
        case 'topright':
        case 'bottomright':
        case 'right':
          this.transformOptions = 'translate3d(100%, 0px, 0px)';
          break;
        case 'bottom':
          this.transformOptions = 'translate3d(0px, 100%, 0px)';
          break;
        case 'top':
          this.transformOptions = 'translate3d(0px, -100%, 0px)';
          break;
        default:
          this.transformOptions = 'scale(0.7)';
          break;
      }
    }
    /**
     * Callback to invoke when dialog is shown.
     * @group Emits
     */
    onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog is hidden.
     * @group Emits
     */
    onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This EventEmitter is used to notify changes in the visibility state of a component.
     * @param {boolean} value - New value.
     * @group Emits
     */
    visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog resizing is initiated.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    onResizeInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog resizing is completed.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    onResizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog dragging is completed.
     * @param {DragEvent} event - Drag event.
     * @group Emits
     */
    onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog maximized or unmaximized.
     * @group Emits
     */
    onMaximize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    headerFacet;
    footerFacet;
    templates;
    headerViewChild;
    contentViewChild;
    footerViewChild;
    headerTemplate;
    contentTemplate;
    footerTemplate;
    maximizeIconTemplate;
    closeIconTemplate;
    minimizeIconTemplate;
    headlessTemplate;
    _visible = false;
    maskVisible;
    container;
    wrapper;
    dragging;
    ariaLabelledBy;
    documentDragListener;
    documentDragEndListener;
    resizing;
    documentResizeListener;
    documentResizeEndListener;
    documentEscapeListener;
    maskClickListener;
    lastPageX;
    lastPageY;
    preventVisibleChangePropagation;
    maximized;
    preMaximizeContentHeight;
    preMaximizeContainerWidth;
    preMaximizeContainerHeight;
    preMaximizePageX;
    preMaximizePageY;
    id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
    _style = {};
    _position = 'center';
    originalStyle;
    transformOptions = 'scale(0.7)';
    styleElement;
    window;
    constructor(document, platformId, el, renderer, zone, cd, config) {
      this.document = document;
      this.platformId = platformId;
      this.el = el;
      this.renderer = renderer;
      this.zone = zone;
      this.cd = cd;
      this.config = config;
      this.window = this.document.defaultView;
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'content':
            this.contentTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          case 'closeicon':
            this.closeIconTemplate = item.template;
            break;
          case 'maximizeicon':
            this.maximizeIconTemplate = item.template;
            break;
          case 'minimizeicon':
            this.minimizeIconTemplate = item.template;
            break;
          case 'headless':
            this.headlessTemplate = item.template;
            break;
          default:
            this.contentTemplate = item.template;
            break;
        }
      });
    }
    ngOnInit() {
      if (this.breakpoints) {
        this.createStyle();
      }
    }
    getAriaLabelledBy() {
      return this.header !== null ? (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)() + '_header' : null;
    }
    focus() {
      let focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.container, '[autofocus]');
      if (focusable) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => focusable.focus(), 5);
        });
      }
    }
    close(event) {
      this.visibleChange.emit(false);
      event.preventDefault();
    }
    enableModality() {
      if (this.closable && this.dismissableMask) {
        this.maskClickListener = this.renderer.listen(this.wrapper, 'mousedown', event => {
          if (this.wrapper && this.wrapper.isSameNode(event.target)) {
            this.close(event);
          }
        });
      }
      if (this.modal) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.blockBodyScroll();
      }
    }
    disableModality() {
      if (this.wrapper) {
        if (this.dismissableMask) {
          this.unbindMaskClickListener();
        }
        if (this.modal) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.unblockBodyScroll();
        }
        if (!this.cd.destroyed) {
          this.cd.detectChanges();
        }
      }
    }
    maximize() {
      this.maximized = !this.maximized;
      if (!this.modal && !this.blockScroll) {
        if (this.maximized) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.blockBodyScroll();
        } else {
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.unblockBodyScroll();
        }
      }
      this.onMaximize.emit({
        maximized: this.maximized
      });
    }
    unbindMaskClickListener() {
      if (this.maskClickListener) {
        this.maskClickListener();
        this.maskClickListener = null;
      }
    }
    moveOnTop() {
      if (this.autoZIndex) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('modal', this.container, this.baseZIndex + this.config.zIndex.modal);
        this.wrapper.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
      }
    }
    createStyle() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        if (!this.styleElement) {
          this.styleElement = this.renderer.createElement('style');
          this.styleElement.type = 'text/css';
          this.renderer.appendChild(this.document.head, this.styleElement);
          let innerHTML = '';
          for (let breakpoint in this.breakpoints) {
            innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[breakpoint]} !important;
                            }
                        }
                    `;
          }
          this.renderer.setProperty(this.styleElement, 'innerHTML', innerHTML);
        }
      }
    }
    initDrag(event) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-dialog-header-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target.parentElement, 'p-dialog-header-icon')) {
        return;
      }
      if (this.draggable) {
        this.dragging = true;
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        this.container.style.margin = '0';
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.document.body, 'p-unselectable-text');
      }
    }
    onKeydown(event) {
      if (this.focusTrap) {
        if (event.which === 9) {
          event.preventDefault();
          let focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getFocusableElements(this.container);
          if (focusableElements && focusableElements.length > 0) {
            if (!focusableElements[0].ownerDocument.activeElement) {
              focusableElements[0].focus();
            } else {
              let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
              if (event.shiftKey) {
                if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
              } else {
                if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
              }
            }
          }
        }
      }
    }
    onDrag(event) {
      if (this.dragging) {
        const containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(this.container);
        const containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(this.container);
        const deltaX = event.pageX - this.lastPageX;
        const deltaY = event.pageY - this.lastPageY;
        const offset = this.container.getBoundingClientRect();
        const containerComputedStyle = getComputedStyle(this.container);
        const leftMargin = parseFloat(containerComputedStyle.marginLeft);
        const topMargin = parseFloat(containerComputedStyle.marginTop);
        const leftPos = offset.left + deltaX - leftMargin;
        const topPos = offset.top + deltaY - topMargin;
        const viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getViewport();
        this.container.style.position = 'fixed';
        if (this.keepInViewport) {
          if (leftPos >= this.minX && leftPos + containerWidth < viewport.width) {
            this._style.left = `${leftPos}px`;
            this.lastPageX = event.pageX;
            this.container.style.left = `${leftPos}px`;
          }
          if (topPos >= this.minY && topPos + containerHeight < viewport.height) {
            this._style.top = `${topPos}px`;
            this.lastPageY = event.pageY;
            this.container.style.top = `${topPos}px`;
          }
        } else {
          this.lastPageX = event.pageX;
          this.container.style.left = `${leftPos}px`;
          this.lastPageY = event.pageY;
          this.container.style.top = `${topPos}px`;
        }
      }
    }
    endDrag(event) {
      if (this.dragging) {
        this.dragging = false;
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.document.body, 'p-unselectable-text');
        this.cd.detectChanges();
        this.onDragEnd.emit(event);
      }
    }
    resetPosition() {
      this.container.style.position = '';
      this.container.style.left = '';
      this.container.style.top = '';
      this.container.style.margin = '';
    }
    //backward compatibility
    center() {
      this.resetPosition();
    }
    initResize(event) {
      if (this.resizable) {
        this.resizing = true;
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.document.body, 'p-unselectable-text');
        this.onResizeInit.emit(event);
      }
    }
    onResize(event) {
      if (this.resizing) {
        let deltaX = event.pageX - this.lastPageX;
        let deltaY = event.pageY - this.lastPageY;
        let containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(this.container);
        let containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(this.container);
        let contentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(this.contentViewChild?.nativeElement);
        let newWidth = containerWidth + deltaX;
        let newHeight = containerHeight + deltaY;
        let minWidth = this.container.style.minWidth;
        let minHeight = this.container.style.minHeight;
        let offset = this.container.getBoundingClientRect();
        let viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getViewport();
        let hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);
        if (hasBeenDragged) {
          newWidth += deltaX;
          newHeight += deltaY;
        }
        if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
          this._style.width = newWidth + 'px';
          this.container.style.width = this._style.width;
        }
        if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
          this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + 'px';
          if (this._style.height) {
            this._style.height = newHeight + 'px';
            this.container.style.height = this._style.height;
          }
        }
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
      }
    }
    resizeEnd(event) {
      if (this.resizing) {
        this.resizing = false;
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.document.body, 'p-unselectable-text');
        this.onResizeEnd.emit(event);
      }
    }
    bindGlobalListeners() {
      if (this.draggable) {
        this.bindDocumentDragListener();
        this.bindDocumentDragEndListener();
      }
      if (this.resizable) {
        this.bindDocumentResizeListeners();
      }
      if (this.closeOnEscape && this.closable) {
        this.bindDocumentEscapeListener();
      }
    }
    unbindGlobalListeners() {
      this.unbindDocumentDragListener();
      this.unbindDocumentDragEndListener();
      this.unbindDocumentResizeListeners();
      this.unbindDocumentEscapeListener();
    }
    bindDocumentDragListener() {
      if (!this.documentDragListener) {
        this.zone.runOutsideAngular(() => {
          this.documentDragListener = this.renderer.listen(this.window, 'mousemove', this.onDrag.bind(this));
        });
      }
    }
    unbindDocumentDragListener() {
      if (this.documentDragListener) {
        this.documentDragListener();
        this.documentDragListener = null;
      }
    }
    bindDocumentDragEndListener() {
      if (!this.documentDragEndListener) {
        this.zone.runOutsideAngular(() => {
          this.documentDragEndListener = this.renderer.listen(this.window, 'mouseup', this.endDrag.bind(this));
        });
      }
    }
    unbindDocumentDragEndListener() {
      if (this.documentDragEndListener) {
        this.documentDragEndListener();
        this.documentDragEndListener = null;
      }
    }
    bindDocumentResizeListeners() {
      if (!this.documentResizeListener && !this.documentResizeEndListener) {
        this.zone.runOutsideAngular(() => {
          this.documentResizeListener = this.renderer.listen(this.window, 'mousemove', this.onResize.bind(this));
          this.documentResizeEndListener = this.renderer.listen(this.window, 'mouseup', this.resizeEnd.bind(this));
        });
      }
    }
    unbindDocumentResizeListeners() {
      if (this.documentResizeListener && this.documentResizeEndListener) {
        this.documentResizeListener();
        this.documentResizeEndListener();
        this.documentResizeListener = null;
        this.documentResizeEndListener = null;
      }
    }
    bindDocumentEscapeListener() {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.documentEscapeListener = this.renderer.listen(documentTarget, 'keydown', event => {
        if (event.which == 27) {
          this.close(event);
        }
      });
    }
    unbindDocumentEscapeListener() {
      if (this.documentEscapeListener) {
        this.documentEscapeListener();
        this.documentEscapeListener = null;
      }
    }
    appendContainer() {
      if (this.appendTo) {
        if (this.appendTo === 'body') this.renderer.appendChild(this.document.body, this.wrapper);else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.appendChild(this.wrapper, this.appendTo);
      }
    }
    restoreAppend() {
      if (this.container && this.appendTo) {
        this.renderer.appendChild(this.el.nativeElement, this.wrapper);
      }
    }
    onAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          this.container = event.element;
          this.wrapper = this.container?.parentElement;
          this.appendContainer();
          this.moveOnTop();
          this.bindGlobalListeners();
          this.container?.setAttribute(this.id, '');
          if (this.modal) {
            this.enableModality();
          }
          if (!this.modal && this.blockScroll) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.document.body, 'p-overflow-hidden');
          }
          if (this.focusOnShow) {
            this.focus();
          }
          break;
        case 'void':
          if (this.wrapper && this.modal) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.wrapper, 'p-component-overlay-leave');
          }
          break;
      }
    }
    onAnimationEnd(event) {
      switch (event.toState) {
        case 'void':
          this.onContainerDestroy();
          this.onHide.emit({});
          this.cd.markForCheck();
          break;
        case 'visible':
          this.onShow.emit({});
          break;
      }
    }
    onContainerDestroy() {
      this.unbindGlobalListeners();
      this.dragging = false;
      this.maskVisible = false;
      if (this.maximized) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.document.body, 'p-overflow-hidden');
        this.document.body.style.removeProperty('--scrollbar-width');
        this.maximized = false;
      }
      if (this.modal) {
        this.disableModality();
      }
      if (this.blockScroll) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.document.body, 'p-overflow-hidden');
      }
      if (this.container && this.autoZIndex) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.container);
      }
      this.container = null;
      this.wrapper = null;
      this._style = this.originalStyle ? {
        ...this.originalStyle
      } : {};
    }
    destroyStyle() {
      if (this.styleElement) {
        this.renderer.removeChild(this.document.head, this.styleElement);
        this.styleElement = null;
      }
    }
    ngOnDestroy() {
      if (this.container) {
        this.restoreAppend();
        this.onContainerDestroy();
      }
      this.destroyStyle();
    }
    static ɵfac = function Dialog_Factory(t) {
      return new (t || Dialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Dialog,
      selectors: [["p-dialog"]],
      contentQueries: function Dialog_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.Header, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.Footer, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Dialog_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        header: "header",
        draggable: "draggable",
        resizable: "resizable",
        positionLeft: "positionLeft",
        positionTop: "positionTop",
        contentStyle: "contentStyle",
        contentStyleClass: "contentStyleClass",
        modal: "modal",
        closeOnEscape: "closeOnEscape",
        dismissableMask: "dismissableMask",
        rtl: "rtl",
        closable: "closable",
        responsive: "responsive",
        appendTo: "appendTo",
        breakpoints: "breakpoints",
        styleClass: "styleClass",
        maskStyleClass: "maskStyleClass",
        maskStyle: "maskStyle",
        showHeader: "showHeader",
        breakpoint: "breakpoint",
        blockScroll: "blockScroll",
        autoZIndex: "autoZIndex",
        baseZIndex: "baseZIndex",
        minX: "minX",
        minY: "minY",
        focusOnShow: "focusOnShow",
        maximizable: "maximizable",
        keepInViewport: "keepInViewport",
        focusTrap: "focusTrap",
        transitionOptions: "transitionOptions",
        closeIcon: "closeIcon",
        closeAriaLabel: "closeAriaLabel",
        closeTabindex: "closeTabindex",
        minimizeIcon: "minimizeIcon",
        maximizeIcon: "maximizeIcon",
        visible: "visible",
        style: "style",
        position: "position"
      },
      outputs: {
        onShow: "onShow",
        onHide: "onHide",
        visibleChange: "visibleChange",
        onResizeInit: "onResizeInit",
        onResizeEnd: "onResizeEnd",
        onDragEnd: "onDragEnd",
        onMaximize: "onMaximize"
      },
      ngContentSelectors: _c10,
      decls: 1,
      vars: 1,
      consts: [[3, "class", "style", "ngClass", 4, "ngIf"], [3, "ngClass"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "class", "pFocusTrapDisabled", 4, "ngIf"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "pFocusTrapDisabled"], ["container", ""], [4, "ngIf", "ngIfElse"], ["notHeadless", ""], [4, "ngTemplateOutlet"], ["class", "p-resizable-handle", "style", "z-index: 90;", 3, "mousedown", 4, "ngIf"], ["class", "p-dialog-header", 3, "mousedown", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["content", ""], ["class", "p-dialog-footer", 4, "ngIf"], [1, "p-resizable-handle", 2, "z-index", "90", 3, "mousedown"], [1, "p-dialog-header", 3, "mousedown"], ["titlebar", ""], ["class", "p-dialog-title", 3, "id", 4, "ngIf"], [1, "p-dialog-header-icons"], ["role", "button", "type", "button", "tabindex", "-1", "pRipple", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], ["type", "button", "pRipple", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], [1, "p-dialog-title", 3, "id"], ["role", "button", "type", "button", "tabindex", "-1", "pRipple", "", 3, "ngClass", "click", "keydown.enter"], ["class", "p-dialog-header-maximize-icon", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "p-dialog-header-maximize-icon", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], ["type", "button", "pRipple", "", 3, "ngClass", "click", "keydown.enter"], ["class", "p-dialog-header-close-icon", 3, "ngClass", 4, "ngIf"], [1, "p-dialog-header-close-icon", 3, "ngClass"], [1, "p-dialog-footer"], ["footer", ""]],
      template: function Dialog_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_Template, 2, 17, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maskVisible);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__.FocusTrap, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__.TimesIcon, primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_9__.WindowMaximizeIcon, primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_10__.WindowMinimizeIcon],
      styles: ["@layer primeng{.p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-webkit-transition:none;transition:none;transform:none;width:100vw!important;height:100vh!important;top:0!important;left:0!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(showAnimation)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(hideAnimation)])])]
      },
      changeDetection: 0
    });
  }
  return Dialog;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DialogModule = /*#__PURE__*/(() => {
  class DialogModule {
    static ɵfac = function DialogModule_Factory(t) {
      return new (t || DialogModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DialogModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__.FocusTrapModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__.TimesIcon, primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_9__.WindowMaximizeIcon, primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_10__.WindowMinimizeIcon, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
    });
  }
  return DialogModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 2282:
/*!************************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-windowmaximize.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WindowMaximizeIcon: () => (/* binding */ WindowMaximizeIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 3128);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 5861);




let WindowMaximizeIcon = /*#__PURE__*/(() => {
  class WindowMaximizeIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵWindowMaximizeIcon_BaseFactory;
      return function WindowMaximizeIcon_Factory(t) {
        return (ɵWindowMaximizeIcon_BaseFactory || (ɵWindowMaximizeIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](WindowMaximizeIcon)))(t || WindowMaximizeIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: WindowMaximizeIcon,
      selectors: [["WindowMaximizeIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function WindowMaximizeIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
        }
      },
      encapsulation: 2
    });
  }
  return WindowMaximizeIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3366:
/*!************************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-windowminimize.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WindowMinimizeIcon: () => (/* binding */ WindowMinimizeIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 3128);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 5861);




let WindowMinimizeIcon = /*#__PURE__*/(() => {
  class WindowMinimizeIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵWindowMinimizeIcon_BaseFactory;
      return function WindowMinimizeIcon_Factory(t) {
        return (ɵWindowMinimizeIcon_BaseFactory || (ɵWindowMinimizeIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](WindowMinimizeIcon)))(t || WindowMinimizeIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: WindowMinimizeIcon,
      selectors: [["WindowMinimizeIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function WindowMinimizeIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
        }
      },
      encapsulation: 2
    });
  }
  return WindowMinimizeIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 652:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-inputtextarea.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputTextarea: () => (/* binding */ InputTextarea),
/* harmony export */   InputTextareaModule: () => (/* binding */ InputTextareaModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);





/**
 * InputTextarea adds styling and autoResize functionality to standard textarea element.
 * @group Components
 */
let InputTextarea = /*#__PURE__*/(() => {
  class InputTextarea {
    el;
    ngModel;
    control;
    cd;
    /**
     * When present, textarea size changes as being typed.
     * @group Props
     */
    autoResize;
    /**
     * Callback to invoke on textarea resize.
     * @param {(Event | {})} event - Custom resize event.
     * @group Emits
     */
    onResize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    filled;
    cachedScrollHeight;
    ngModelSubscription;
    ngControlSubscription;
    constructor(el, ngModel, control, cd) {
      this.el = el;
      this.ngModel = ngModel;
      this.control = control;
      this.cd = cd;
    }
    ngOnInit() {
      if (this.ngModel) {
        this.ngModelSubscription = this.ngModel.valueChanges.subscribe(() => {
          this.updateState();
        });
      }
      if (this.control) {
        this.ngControlSubscription = this.control.valueChanges.subscribe(() => {
          this.updateState();
        });
      }
    }
    ngAfterViewChecked() {
      this.updateState();
    }
    ngAfterViewInit() {
      if (this.autoResize) this.resize();
      this.updateFilledState();
      this.cd.detectChanges();
    }
    onInput(e) {
      this.updateState();
    }
    updateFilledState() {
      this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
    }
    resize(event) {
      this.el.nativeElement.style.height = 'auto';
      this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
      if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
        this.el.nativeElement.style.overflowY = 'scroll';
        this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
      } else {
        this.el.nativeElement.style.overflow = 'hidden';
      }
      this.onResize.emit(event || {});
    }
    updateState() {
      this.updateFilledState();
      if (this.autoResize) {
        this.resize();
      }
    }
    ngOnDestroy() {
      if (this.ngModelSubscription) {
        this.ngModelSubscription.unsubscribe();
      }
      if (this.ngControlSubscription) {
        this.ngControlSubscription.unsubscribe();
      }
    }
    static ɵfac = function InputTextarea_Factory(t) {
      return new (t || InputTextarea)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: InputTextarea,
      selectors: [["", "pInputTextarea", ""]],
      hostAttrs: [1, "p-inputtextarea", "p-inputtext", "p-component", "p-element"],
      hostVars: 4,
      hostBindings: function InputTextarea_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputTextarea_input_HostBindingHandler($event) {
            return ctx.onInput($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-filled", ctx.filled)("p-inputtextarea-resizable", ctx.autoResize);
        }
      },
      inputs: {
        autoResize: "autoResize"
      },
      outputs: {
        onResize: "onResize"
      }
    });
  }
  return InputTextarea;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let InputTextareaModule = /*#__PURE__*/(() => {
  class InputTextareaModule {
    static ɵfac = function InputTextareaModule_Factory(t) {
      return new (t || InputTextareaModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InputTextareaModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
  return InputTextareaModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=460.js.map