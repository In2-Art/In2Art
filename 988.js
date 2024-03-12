"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[988],{

/***/ 83888:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/settings/components/change-password/change-password.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordComponent: () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/auth/auth.selectors */ 81032);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _utils_signup_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/signup-validators */ 2060);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @enums/urls */ 84904);
/* harmony import */ var _store_edit_profile_editProfile_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/edit-profile/editProfile.actions */ 74688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 66192);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/container/container.component */ 93992);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 89276);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/ripple */ 82856);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/password */ 36128);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
















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
      this.store.dispatch((0,_store_edit_profile_editProfile_actions__WEBPACK_IMPORTED_MODULE_3__.changePasswordAction)({
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
      consts: [[3, "width"], [1, "font-bold", "text-2xl", "mb-5", "w-full", "flex", "justify-content-center", "text-center"], [1, "w-full", 3, "formGroup", "ngSubmit"], [1, "mb-3", "input-group"], ["id", "oldPassword", "styleClass", "w-full", "inputStyleClass", "w-full", "formControlName", "oldPassword", 3, "feedback", "toggleMask", "placeholder"], ["class", "error-message text-sm", 4, "ngIf"], ["id", "newPassword", "styleClass", "w-full", "inputStyleClass", "w-full", "formControlName", "newPassword", 3, "toggleMask", "placeholder"], ["inputId", "confirmPassword", "id", "confirmPassword", "styleClass", "w-full", "inputStyleClass", "w-full", "formControlName", "confirmPassword", 3, "toggleMask", "feedback", "placeholder", "required"], [1, "flex", "flex-column", "md:flex-row", "gap-3", "w-full"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", 1, "w-full", "md:w-auto", "flex-grow-1", 3, "routerLink", "label"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "w-full", "md:w-auto", "flex-grow-1", 3, "loading", "label", "disabled"], [1, "error-message", "text-sm"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](36, _c0, ctx.URLS.BACK))("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 30, "BTN.TO_EDIT_PROFILE"));
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

/***/ 94448:
/*!************************************************************************!*\
  !*** ./src/app/pages/settings/components/cookies/cookies.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CookiesComponent: () => (/* binding */ CookiesComponent)
/* harmony export */ });
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @enums/urls */ 84904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/container/container.component */ 93992);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 89276);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 82856);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 72584);







const _c0 = a0 => [a0];
let CookiesComponent = /*#__PURE__*/(() => {
  class CookiesComponent {
    constructor() {
      this.decisionMade = false;
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_0__.URLS;
    }
    ngOnInit() {
      const decisionFromStorage = localStorage.getItem('cookieDecision');
      if (decisionFromStorage) {
        this.decisionMade = true;
      }
    }
    rejectCookies() {
      // Logic to reject cookies
      this.decisionMade = true;
      // Store the decision in local storage
      localStorage.setItem('cookieDecision', 'rejected');
    }
    acceptAllCookies() {
      // Logic to accept cookies
      this.decisionMade = true;
      // Store the decision in local storage
      localStorage.setItem('cookieDecision', 'accepted');
    }
    static #_ = this.ɵfac = function CookiesComponent_Factory(t) {
      return new (t || CookiesComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CookiesComponent,
      selectors: [["app-cookies"]],
      decls: 26,
      vars: 25,
      consts: [[3, "width"], [1, "font-bold", "text-2xl", "mb-5", "flex", "justify-content-center", "text-center"], [1, "flex", "flex-column"], [1, "w-full"], [1, "text-center", "md:text-left"], [1, "w-full", "flex", "flex-column", "md:flex-row", "justify-content-between"], [1, "flex", "mt-4", "w-full", "md:w-2"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", 1, "w-full", "text-base", "md:w-auto", "flex-grow-1", 3, "routerLink", "label"], [1, "flex", "mt-4", "w-full", "md:w-7"], ["pButton", "", "pRipple", "", 1, "w-full", "flex", "justify-content-center", "text-base", "mr-2", "p-button-secondary", 3, "label", "click"], ["pButton", "", "pRipple", "", 1, "w-full", "flex", "justify-content-center", "text-base", 3, "label", "click"]],
      template: function CookiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-container", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5)(18, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 8)(22, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CookiesComponent_Template_button_click_22_listener() {
            return ctx.rejectCookies();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CookiesComponent_Template_button_click_24_listener() {
            return ctx.acceptAllCookies();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 900);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 9, "SETTINGS_PAGE.COOKIE_SETTINGS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 11, "COOKIE_POPUP.MESSAGE_1"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 13, "COOKIE_POPUP.MESSAGE_2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 15, "COOKIE_POPUP.MESSAGE_3"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](23, _c0, ctx.URLS.BACK))("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 17, "BTN.TO_EDIT_PROFILE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 19, "BTN.REJECT_COOKIES"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 21, "BTN.ACCEPT_COOKIES"));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__.ContainerComponent, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return CookiesComponent;
})();

/***/ }),

/***/ 94768:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/settings/components/delete-account/delete-account.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteAccountComponent: () => (/* binding */ DeleteAccountComponent)
/* harmony export */ });
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/auth/auth.selectors */ 81032);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @enums/urls */ 84904);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/auth/auth.actions */ 20684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 66192);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/container/container.component */ 93992);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 89276);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/ripple */ 82856);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/password */ 36128);
/* harmony import */ var _ApiClient_Backend_components_image_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ApiClient.Backend/components/image/image.component */ 9192);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/checkbox */ 93459);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 72584);

















function DeleteAccountComponent_app_container_33_small_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_CONFIRM_PASSWORD"), " ");
  }
}
function DeleteAccountComponent_app_container_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-container", 20)(1, "form", 21)(2, "div", 22)(3, "div", 23)(4, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 25)(8, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus risus et nulla ullamcorper, et varius lacus pharetra. Pellentesque vulputate, dolor interdum interdum varius, nisi nulla convallis ipsum, ac vehicula nibh mauris vitae justo. Fusce tortor mi, sodales vitae ante ac, gravida mattis arcu. Suspendisse vitae fermentum nibh. Nulla facilisi. Vestibulum quis mattis ante. Integer eu efficitur quam. Curabitur ante dolor, molestie nec blandit sed, convallis et libero. Nulla facilisi. Sed mattis feugiat risus ac malesuada. Donec in metus imperdiet, auctor ante at, efficitur orci. Nam eu urna vitae ligula ultricies auctor aliquam sed purus. Aenean congue sagittis mauris, ut gravida ex aliquam non. Proin sagittis orci a congue elementum. Vestibulum scelerisque sit amet risus vel convallis. Etiam volutpat ex arcu, et finibus tortor lobortis porttitor. Praesent suscipit scelerisque eleifend. Integer non pulvinar quam. Curabitur ante dolor, molestie nec blandit sed, convallis et libero. Nulla facilisi. Sed mattis feugiat risus ac malesuada. Donec in metus imperdiet, auctor ante at, efficitur orci. Nam eu urna vitae ligula ultricies auctor aliquam sed purus. Aenean congue sagittis mauris, ut gravida ex aliquam non. Proin sagittis orci a congue elementum. Vestibulum scelerisque sit amet risus vel convallis. Etiam volutpat ex arcu, et finibus tortor lobortis porttitor. Praesent suscipit scelerisque eleifend. Integer non pulvinar quam. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Per poder eliminar el teu compte, primer haur\u00E0s de escriure la teva contrasenya actual per saber que ets tu:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "p-password", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, DeleteAccountComponent_app_container_33_small_16_Template, 3, 3, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 30)(18, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeleteAccountComponent_app_container_33_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.hideDeleteConfirmationDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeleteAccountComponent_app_container_33_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.confirmDeleteAccount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_6_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 900);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.deleteAccountForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 10, "DELETE_ACCOUNT_PAGE.TITLE_POPUP"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("feedback", false)("toggleMask", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 12, "PLACEHOLDER.OLD_PASSWORD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx_r0.deleteAccountForm.get("actualPassword")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx_r0.deleteAccountForm.get("actualPassword")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 14, "BTN.CANCEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 16, "BTN.CONFIRM"))("disabled", !ctx_r0.deleteAccountForm.valid);
  }
}
const _c0 = a0 => [a0];
let DeleteAccountComponent = /*#__PURE__*/(() => {
  class DeleteAccountComponent {
    constructor(store) {
      this.store = store;
      this.isLoading$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_0__.selectIsLoadingAuth);
      this.userId$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_0__.selectCurrentUserId);
      this.pictureId$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_0__.selectCurrentUserPictureId);
      this.isCheckboxChecked = false;
      this.showDeletePopup = false;
      this.deleteAccountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
        actualPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
      });
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_1__.URLS;
    }
    showDeleteConfirmationDialog() {
      if (this.isCheckboxChecked) {
        this.showDeletePopup = true;
      }
    }
    hideDeleteConfirmationDialog() {
      this.showDeletePopup = false;
    }
    confirmDeleteAccount() {
      const actualPassword = this.deleteAccountForm.get('actualPassword')?.value ?? '';
      this.store.dispatch((0,_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__.deleteAccountAction)({
        actualPassword
      }));
    }
    static #_ = this.ɵfac = function DeleteAccountComponent_Factory(t) {
      return new (t || DeleteAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: DeleteAccountComponent,
      selectors: [["app-delete-account"]],
      decls: 34,
      vars: 36,
      consts: [[3, "width"], [1, "font-bold", "text-4xl", "mb-5", "w-full", "flex", "justify-content-center", "md:", "w-auto", "text-center"], [1, "flex", "flex-column", "justify-content-center", "align-items-center", "mt-6"], [1, "w-full", "flex", "justify-content-center"], [1, "photo"], ["defaultImageUrl", "assets/videos/noUserVid.mp4", 3, "folder", "idPicture", "userId"], [1, "w-full", "flex", "flex-column", "align-items-center"], [1, "font-bold", "text-4xl", "mt-5", "mb-3", "w-full", "flex", "justify-content-center", "md:", "w-auto", "text-center"], [1, "w-full", "mt-4", "flex", "flex-column", "justify-content-center", "md:", "w-auto", "text-center"], [1, "w-full", "p-3", "flex", "justify-content-center"], [1, "pi", "pi-exclamation-triangle", "text-5xl"], [1, "w-full", "text-2xl", "pt-3", "font-bold", "flex", "justify-content-center"], [1, "flex", "text-xl", "pt-2", "w-full", "justify-content-center"], [1, "w-full", "flex", "justify-content-center", "mt-6"], ["id", "rememberMe", 3, "binary", "ngModel", "ngModelChange"], ["for", "rememberMe", 1, "font-bold"], [1, "flex", "flex-column", "md:flex-row", "gap-3", "w-full", "mt-8"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", 1, "w-full", "md:w-auto", "flex-grow-1", 3, "routerLink", "label"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "w-full", "md:w-auto", "flex-grow-1", 3, "label", "disabled", "click"], ["class", "popup-container", 3, "width", 4, "ngIf"], [1, "popup-container", 3, "width"], [3, "formGroup"], [1, "p-4"], [1, "popup-header"], [1, "text-4xl", "w-full", "flex", "justify-content-center", "text-center"], [1, "w-full", "flex", "flex-column", "justify-content-center", "text-xl", "mt-6", "text-center", "md:text-left"], [1, "max-h-15rem", "overflow-auto", "mb-3"], [1, "input-group", "mt-3"], ["id", "oldPassword", "styleClass", "w-full", "inputStyleClass", "w-full", "formControlName", "actualPassword", 3, "feedback", "toggleMask", "placeholder"], ["class", "error-message text-sm", 4, "ngIf"], [1, "flex", "flex-column", "mt-7", "md:flex-row", "gap-3", "w-full"], ["pButton", "", "pRipple", "", 1, "w-full", "md:w-auto", "flex-grow-1", 3, "label", "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "w-full", "p-button-danger", "md:w-auto", "flex-grow-1", 3, "label", "disabled", "click"], [1, "error-message", "text-sm"]],
      template: function DeleteAccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-container", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-image", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6)(11, "h3", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 8)(15, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 13)(24, "p-checkbox", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function DeleteAccountComponent_Template_p_checkbox_ngModelChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.isCheckboxChecked, $event) || (ctx.isCheckboxChecked = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeleteAccountComponent_Template_button_click_31_listener() {
            return ctx.showDeleteConfirmationDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, DeleteAccountComponent_app_container_33_Template, 22, 18, "app-container", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 900);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 16, "DELETE_ACCOUNT_PAGE.TITLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("folder", "UserPictures")("idPicture", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 18, ctx.pictureId$))("userId", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 20, ctx.userId$));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 22, "DELETE_ACCOUNT_PAGE.TITLE_QUESTION"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 24, "DELETE_ACCOUNT_PAGE.MESSAGE_1"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 26, "DELETE_ACCOUNT_PAGE.MESSAGE_2"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("binary", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.isCheckboxChecked);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 28, "DELETE_ACCOUNT_PAGE.CHECKBOX"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](34, _c0, ctx.URLS.BACK))("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 30, "BTN.TO_EDIT_PROFILE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](32, 32, "BTN.DELETE_ACCOUNT"))("disabled", !ctx.isCheckboxChecked);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showDeletePopup);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_3__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.Ripple, primeng_password__WEBPACK_IMPORTED_MODULE_12__.Password, _ApiClient_Backend_components_image_image_component__WEBPACK_IMPORTED_MODULE_4__.ImageComponent, primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__.Checkbox, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
      styles: [".photo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  height: 120px;\n  width: 120px;\n  border: 1px solid white;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: var(--btnPrimary);\n}\n\n.popup-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.718);\n}\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 1fr;\n  row-gap: 0.5rem;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  padding-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2V0dGluZ3MvY29tcG9uZW50cy9kZWxldGUtYWNjb3VudC9kZWxldGUtYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiLnBob3RvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaDMge1xuICBjb2xvcjogdmFyKC0tYnRuUHJpbWFyeSk7XG59XG5cbi5wb3B1cC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43MTgpOyAgIFxufVxuLnBvcHVwLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICByb3ctZ2FwOiAwLjVyZW07XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return DeleteAccountComponent;
})();

/***/ }),

/***/ 19072:
/*!*****************************************************************!*\
  !*** ./src/app/pages/settings/components/settings.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsComponent: () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @enums/urls */ 84904);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 31792);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 40604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/container/container.component */ 93992);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 89276);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 82856);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 65056);










const _c0 = (a1, a2, a3) => ["/", a1, a2, a3];
let SettingsComponent = /*#__PURE__*/(() => {
  class SettingsComponent {
    constructor(translate) {
      this.translate = translate;
      this.locale$ = this.translate.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.startWith)({
        lang: this.translate.currentLang
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(event => event.lang));
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_0__.URLS;
    }
    static #_ = this.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      decls: 53,
      vars: 61,
      consts: [[3, "width"], [1, "font-bold", "text-2xl", "mb-5", "flex", "justify-content-center", "text-center"], [1, "font-bold", "text-xl", "mt-5"], [1, "flex", "flex-column", "p-4", "border-1", "border-solid", "border-round-md", "w-full", "mb-2", "md:flex-row"], [1, "flex", "flex-column", "align-items-center", "w-full", "md:w-8", "mr-2"], [1, "text-lg", "w-full", "flex", "justify-content-center", "md:justify-content-start"], [1, "w-full", "mt-2", "text-sm", "flex", "justify-content-center", "text-center", "md:text-left", "md:justify-content-start"], [1, "w-full", "mt-2", "md:w-8"], ["pButton", "", "pRipple", "", 1, "w-full", "flex", "justify-content-center", "text-base", 3, "routerLink", "label"], [1, "font-bold", "text-xl", "mt-5", "danger"], [1, "danger"], [1, "danger", "flex", "flex-column", "p-4", "border-1", "border-solid", "border-round-md", "w-full", "mb-2", "md:flex-row"], [1, "danger", "text-lg", "w-full", "flex", "justify-content-center", "md:justify-content-start"], ["pButton", "", "pRipple", "", 1, "w-full", "flex", "justify-content-center", "text-base", "p-button-danger", 3, "routerLink", "label"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-container", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div")(5, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 3)(10, "div", 4)(11, "h4", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 3)(26, "div", 4)(27, "h4", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "h3", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "hr", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 11)(42, "div", 4)(43, "h4", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](45, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](48, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](51, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](52, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", 900);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 17, "SETTINGS_PAGE.TITLE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 19, "SETTINGS_PAGE.SECURITY"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 21, "SETTINGS_PAGE.CHANGE_PASSWORD"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 23, "SETTINGS_PAGE.CHANGE_PASSWORD_MESSAGE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](49, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 25, ctx.locale$), ctx.URLS.SETTINGS, ctx.URLS.CHANGE_PASSWORD))("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 27, "BTN.CHANGE_PASSWORD"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 29, "SETTINGS_PAGE.COOKIES"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 31, "SETTINGS_PAGE.OPTION_COOKIES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 33, "SETTINGS_PAGE.COOKIES_MESSAGE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](53, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](35, 35, ctx.locale$), ctx.URLS.SETTINGS, ctx.URLS.COOKIES))("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 37, "BTN.CHANGE_OPTION"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](39, 39, "SETTINGS_PAGE.DANGEROUS_ZONE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](45, 41, "SETTINGS_PAGE.DELETE_ACCOUNT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](48, 43, "SETTINGS_PAGE.DELETE_ACCOUNT_MESSAGE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](57, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](51, 45, ctx.locale$), ctx.URLS.SETTINGS, ctx.URLS.DELETE_ACCOUNT))("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](52, 47, "BTN.DELETE_ACCOUNT"));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__.ContainerComponent, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.Ripple, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
      styles: ["h4[_ngcontent-%COMP%] {\n  color: var(--btnPrimary);\n}\n\n.danger[_ngcontent-%COMP%] {\n  color: var(--inputInvalid);\n}\n\np[_ngcontent-%COMP%] {\n  color: var(--inputText);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2V0dGluZ3MvY29tcG9uZW50cy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImg0e1xuICAgIGNvbG9yOiB2YXIoLS1idG5QcmltYXJ5KTtcbn1cblxuLmRhbmdlcntcbiAgICBjb2xvcjogdmFyKC0taW5wdXRJbnZhbGlkKTtcbn1cblxucHtcbiAgICBjb2xvcjogdmFyKC0taW5wdXRUZXh0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return SettingsComponent;
})();

/***/ }),

/***/ 25476:
/*!***********************************************************!*\
  !*** ./src/app/pages/settings/settings-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsRoutingModule: () => (/* binding */ SettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 97625);
/* harmony import */ var _components_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/settings.component */ 19072);
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/change-password/change-password.component */ 83888);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @enums/urls */ 84904);
/* harmony import */ var _components_cookies_cookies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cookies/cookies.component */ 94448);
/* harmony import */ var _components_delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/delete-account/delete-account.component */ 94768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94280);










const routes = [{
  path: '',
  component: _components_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent
}, {
  path: _enums_urls__WEBPACK_IMPORTED_MODULE_2__.URLS.CHANGE_PASSWORD,
  component: _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent
}, {
  path: _enums_urls__WEBPACK_IMPORTED_MODULE_2__.URLS.COOKIES,
  component: _components_cookies_cookies_component__WEBPACK_IMPORTED_MODULE_3__.CookiesComponent
}, {
  path: _enums_urls__WEBPACK_IMPORTED_MODULE_2__.URLS.DELETE_ACCOUNT,
  component: _components_delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_4__.DeleteAccountComponent
}];
let SettingsRoutingModule = /*#__PURE__*/(() => {
  class SettingsRoutingModule {
    static #_ = this.ɵfac = function SettingsRoutingModule_Factory(t) {
      return new (t || SettingsRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: SettingsRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_7__.LocalizeRouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    });
  }
  return SettingsRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SettingsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_7__.LocalizeRouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 99988:
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsModule: () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _components_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/settings.component */ 19072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-routing.module */ 25476);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/container/container.component */ 93992);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 94800);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 89276);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/ripple */ 82856);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/calendar */ 46600);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtextarea */ 21132);
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/change-password/change-password.component */ 83888);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/password */ 36128);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tooltip */ 22416);
/* harmony import */ var src_app_shared_components_cookie_modal_cookie_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/cookie-modal/cookie-modal.component */ 61919);
/* harmony import */ var _components_cookies_cookies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cookies/cookies.component */ 94448);
/* harmony import */ var _components_delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/delete-account/delete-account.component */ 94768);
/* harmony import */ var _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ApiClient/components/image/image.component */ 9192);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/checkbox */ 93459);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/selectbutton */ 64856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94280);





















let SettingsModule = /*#__PURE__*/(() => {
  class SettingsModule {
    static #_ = this.ɵfac = function SettingsModule_Factory(t) {
      return new (t || SettingsModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: SettingsModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__.SettingsRoutingModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputTextModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_14__.RippleModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_15__.CalendarModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__.InputTextareaModule, primeng_password__WEBPACK_IMPORTED_MODULE_17__.PasswordModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__.TooltipModule, src_app_shared_components_cookie_modal_cookie_modal_component__WEBPACK_IMPORTED_MODULE_4__.CookieModalComponent, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_7__.ImageComponent, primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__.CheckboxModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_20__.SelectButtonModule]
    });
  }
  return SettingsModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SettingsModule, {
    declarations: [_components_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent, _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__.ChangePasswordComponent, _components_cookies_cookies_component__WEBPACK_IMPORTED_MODULE_5__.CookiesComponent, _components_delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_6__.DeleteAccountComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__.SettingsRoutingModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputTextModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_14__.RippleModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_15__.CalendarModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__.InputTextareaModule, primeng_password__WEBPACK_IMPORTED_MODULE_17__.PasswordModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__.TooltipModule, src_app_shared_components_cookie_modal_cookie_modal_component__WEBPACK_IMPORTED_MODULE_4__.CookieModalComponent, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_7__.ImageComponent, primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__.CheckboxModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_20__.SelectButtonModule]
  });
})();

/***/ }),

/***/ 64856:
/*!****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-selectbutton.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SELECTBUTTON_VALUE_ACCESSOR: () => (/* binding */ SELECTBUTTON_VALUE_ACCESSOR),
/* harmony export */   SelectButton: () => (/* binding */ SelectButton),
/* harmony export */   SelectButtonModule: () => (/* binding */ SelectButtonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 41384);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 82856);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 93188);









const _c0 = ["container"];
function SelectButton_div_2_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 8);
  }
  if (rf & 2) {
    const option_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](option_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-button-icon p-button-icon-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "icon");
  }
}
function SelectButton_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectButton_div_2_ng_container_1_span_1_Template, 1, 4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const option_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getOptionLabel(option_r2));
  }
}
function SelectButton_div_2_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c1 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function SelectButton_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SelectButton_div_2_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const option_r2 = ctx_r11.$implicit;
    const i_r3 = ctx_r11.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.selectButtonTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, option_r2, i_r3));
  }
}
const _c2 = (a0, a1, a2) => ({
  "p-highlight": a0,
  "p-disabled": a1,
  "p-button-icon-only": a2
});
function SelectButton_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectButton_div_2_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const option_r2 = restoredCtx.$implicit;
      const i_r3 = restoredCtx.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onOptionSelect($event, option_r2, i_r3));
    })("keydown", function SelectButton_div_2_Template_div_keydown_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const option_r2 = restoredCtx.$implicit;
      const i_r3 = restoredCtx.index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.onKeyDown($event, option_r2, i_r3));
    })("focus", function SelectButton_div_2_Template_div_focus_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const i_r3 = restoredCtx.index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.onFocus($event, i_r3));
    })("blur", function SelectButton_div_2_Template_div_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.onBlur());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectButton_div_2_ng_container_1_Template, 4, 3, "ng-container", 4)(2, SelectButton_div_2_ng_template_2_Template, 1, 5, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](option_r2.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("role", ctx_r1.multiple ? "checkbox" : "radio")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](14, _c2, ctx_r1.isSelected(option_r2), ctx_r1.disabled || ctx_r1.isOptionDisabled(option_r2), option_r2.icon && !ctx_r1.getOptionLabel(option_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", i_r3 === ctx_r1.focusedIndex ? "0" : "-1")("aria-label", option_r2.label)("aria-checked", ctx_r1.isSelected(option_r2))("aria-disabled", ctx_r1.optionDisabled)("aria-pressed", ctx_r1.isSelected(option_r2))("title", option_r2.title)("aria-labelledby", ctx_r1.getOptionLabel(option_r2))("data-pc-section", "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.itemTemplate)("ngIfElse", _r6);
  }
}
const SELECTBUTTON_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SelectButton),
  multi: true
};
/**
 * SelectButton is used to choose single or multiple items from a list using buttons.
 * @group Components
 */
let SelectButton = /*#__PURE__*/(() => {
  class SelectButton {
    cd;
    /**
     * An array of selectitems to display as the available options.
     * @group Props
     */
    options;
    /**
     * Name of the label field of an option.
     * @group Props
     */
    optionLabel;
    /**
     * Name of the value field of an option.
     * @group Props
     */
    optionValue;
    /**
     * Name of the disabled field of an option.
     * @group Props
     */
    optionDisabled;
    /**
     * Whether selection can be cleared.
     * @group Props
     */
    unselectable = false;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex = 0;
    /**
     * When specified, allows selecting multiple values.
     * @group Props
     */
    multiple;
    /**
     * Whether selection can not be cleared.
     * @group Props
     */
    allowEmpty = true;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled;
    /**
     * A property to uniquely identify a value in options.
     * @group Props
     */
    dataKey;
    /**
     * Callback to invoke on input click.
     * @param {SelectButtonOptionClickEvent} event - Custom click event.
     * @group Emits
     */
    onOptionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on selection change.
     * @param {SelectButtonChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    container;
    itemTemplate;
    get selectButtonTemplate() {
      return this.itemTemplate?.template;
    }
    get equalityKey() {
      return this.optionValue ? null : this.dataKey;
    }
    value;
    onModelChange = () => {};
    onModelTouched = () => {};
    focusedIndex = 0;
    constructor(cd) {
      this.cd = cd;
    }
    getOptionLabel(option) {
      return this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(option, this.optionLabel) : option.label != undefined ? option.label : option;
    }
    getOptionValue(option) {
      return this.optionValue ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(option, this.optionValue) : this.optionLabel || option.value === undefined ? option : option.value;
    }
    isOptionDisabled(option) {
      return this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(option, this.optionDisabled) : option.disabled !== undefined ? option.disabled : false;
    }
    writeValue(value) {
      this.value = value;
      this.cd.markForCheck();
    }
    registerOnChange(fn) {
      this.onModelChange = fn;
    }
    registerOnTouched(fn) {
      this.onModelTouched = fn;
    }
    setDisabledState(val) {
      this.disabled = val;
      this.cd.markForCheck();
    }
    onOptionSelect(event, option, index) {
      if (this.disabled || this.isOptionDisabled(option)) {
        return;
      }
      let selected = this.isSelected(option);
      if (selected && this.unselectable) {
        return;
      }
      let optionValue = this.getOptionValue(option);
      let newValue;
      if (this.multiple) {
        if (selected) newValue = this.value.filter(val => !primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(val, optionValue, this.equalityKey));else newValue = this.value ? [...this.value, optionValue] : [optionValue];
      } else {
        if (selected && !this.allowEmpty) {
          return;
        }
        newValue = selected ? null : optionValue;
      }
      this.focusedIndex = index;
      this.value = newValue;
      this.onModelChange(this.value);
      this.onChange.emit({
        originalEvent: event,
        value: this.value
      });
      this.onOptionClick.emit({
        originalEvent: event,
        option: option,
        index: index
      });
    }
    onKeyDown(event, option, index) {
      switch (event.code) {
        case 'Space':
          {
            this.onOptionSelect(event, option, index);
            event.preventDefault();
            break;
          }
        case 'ArrowDown':
        case 'ArrowRight':
          {
            this.changeTabIndexes(event, 'next');
            event.preventDefault();
            break;
          }
        case 'ArrowUp':
        case 'ArrowLeft':
          {
            this.changeTabIndexes(event, 'prev');
            event.preventDefault();
            break;
          }
        default:
          //no op
          break;
      }
    }
    changeTabIndexes(event, direction) {
      let firstTabableChild, index;
      for (let i = 0; i <= this.container.nativeElement.children.length - 1; i++) {
        if (this.container.nativeElement.children[i].getAttribute('tabindex') === '0') firstTabableChild = {
          elem: this.container.nativeElement.children[i],
          index: i
        };
      }
      if (direction === 'prev') {
        if (firstTabableChild.index === 0) index = this.container.nativeElement.children.length - 1;else index = firstTabableChild.index - 1;
      } else {
        if (firstTabableChild.index === this.container.nativeElement.children.length - 1) index = 0;else index = firstTabableChild.index + 1;
      }
      this.focusedIndex = index;
      this.container.nativeElement.children[index].focus();
    }
    onFocus(event, index) {
      this.focusedIndex = index;
    }
    onBlur() {
      this.onModelTouched();
    }
    removeOption(option) {
      this.value = this.value.filter(val => !primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(val, this.getOptionValue(option), this.dataKey));
    }
    isSelected(option) {
      let selected = false;
      const optionValue = this.getOptionValue(option);
      if (this.multiple) {
        if (this.value && Array.isArray(this.value)) {
          for (let val of this.value) {
            if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(val, optionValue, this.dataKey)) {
              selected = true;
              break;
            }
          }
        }
      } else {
        selected = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(this.getOptionValue(option), this.value, this.equalityKey);
      }
      return selected;
    }
    static ɵfac = function SelectButton_Factory(t) {
      return new (t || SelectButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectButton,
      selectors: [["p-selectButton"]],
      contentQueries: function SelectButton_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
        }
      },
      viewQuery: function SelectButton_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        options: "options",
        optionLabel: "optionLabel",
        optionValue: "optionValue",
        optionDisabled: "optionDisabled",
        unselectable: "unselectable",
        tabindex: "tabindex",
        multiple: "multiple",
        allowEmpty: "allowEmpty",
        style: "style",
        styleClass: "styleClass",
        ariaLabelledBy: "ariaLabelledBy",
        disabled: "disabled",
        dataKey: "dataKey"
      },
      outputs: {
        onOptionClick: "onOptionClick",
        onChange: "onChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([SELECTBUTTON_VALUE_ACCESSOR])],
      decls: 3,
      vars: 8,
      consts: [["role", "group", 3, "ngClass", "ngStyle"], ["container", ""], ["pRipple", "", "class", "p-button p-component", 3, "role", "class", "ngClass", "click", "keydown", "focus", "blur", 4, "ngFor", "ngForOf"], ["pRipple", "", 1, "p-button", "p-component", 3, "role", "ngClass", "click", "keydown", "focus", "blur"], [4, "ngIf", "ngIfElse"], ["customcontent", ""], [3, "ngClass", "class", 4, "ngIf"], [1, "p-button-label"], [3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function SelectButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectButton_div_2_Template, 4, 18, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-selectbutton p-buttonset p-component")("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx.ariaLabelledBy)("data-pc-name", "selectbutton")("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple],
      styles: ["@layer primeng{.p-button{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label{flex:1 1 auto}.p-button-icon-right{order:1}.p-button:disabled{cursor:default;pointer-events:none}.p-button-icon-only{justify-content:center}.p-button-icon-only:after{content:\"p\";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical{flex-direction:column}.p-button-icon-bottom{order:2}.p-button-group .p-button{margin:0}.p-button-group .p-button:focus,.p-button-group p-button:focus .p-button,.p-buttonset .p-button:focus,.p-buttonset p-button:focus .p-button{position:relative;z-index:1}.p-button-group .p-button:not(:last-child),.p-button-group .p-button:not(:last-child):hover,.p-button-group p-button:not(:last-child) .p-button,.p-button-group p-button:not(:last-child) .p-button:hover,.p-buttonset .p-button:not(:last-child),.p-buttonset .p-button:not(:last-child):hover,.p-buttonset p-button:not(:last-child) .p-button,.p-buttonset p-button:not(:last-child) .p-button:hover{border-right:0 none}.p-button-group .p-button:not(:first-of-type):not(:last-of-type),.p-button-group p-button:not(:first-of-type):not(:last-of-type) .p-button,.p-buttonset .p-button:not(:first-of-type):not(:last-of-type),.p-buttonset p-button:not(:first-of-type):not(:last-of-type) .p-button{border-radius:0}.p-button-group .p-button:first-of-type:not(:only-of-type),.p-button-group p-button:first-of-type:not(:only-of-type) .p-button,.p-buttonset .p-button:first-of-type:not(:only-of-type),.p-buttonset p-button:first-of-type:not(:only-of-type) .p-button{border-top-right-radius:0;border-bottom-right-radius:0}.p-button-group .p-button:last-of-type:not(:only-of-type),.p-button-group p-button:last-of-type:not(:only-of-type) .p-button,.p-buttonset .p-button:last-of-type:not(:only-of-type),.p-buttonset p-button:last-of-type:not(:only-of-type) .p-button{border-top-left-radius:0;border-bottom-left-radius:0}p-button[iconpos=right] spinnericon{order:1}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return SelectButton;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SelectButtonModule = /*#__PURE__*/(() => {
  class SelectButtonModule {
    static ɵfac = function SelectButtonModule_Factory(t) {
      return new (t || SelectButtonModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SelectButtonModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
    });
  }
  return SelectButtonModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=988.js.map