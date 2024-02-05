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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-routing.module */ 4884);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/container/container.component */ 2580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/calendar */ 7411);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtextarea */ 652);
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/change-password/change-password.component */ 5240);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/password */ 3219);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tooltip */ 1251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);















let SettingsModule = /*#__PURE__*/(() => {
  class SettingsModule {
    static #_ = this.ɵfac = function SettingsModule_Factory(t) {
      return new (t || SettingsModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: SettingsModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__.SettingsRoutingModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.RippleModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_11__.CalendarModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__.InputTextareaModule, primeng_password__WEBPACK_IMPORTED_MODULE_13__.PasswordModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__.TooltipModule]
    });
  }
  return SettingsModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SettingsModule, {
    declarations: [_components_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent, _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__.ChangePasswordComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__.SettingsRoutingModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.RippleModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_11__.CalendarModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__.InputTextareaModule, primeng_password__WEBPACK_IMPORTED_MODULE_13__.PasswordModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__.TooltipModule]
  });
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