"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[460],{

/***/ 9549:
/*!*****************************************************************!*\
  !*** ./src/app/pages/settings/components/settings.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsComponent: () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/auth/auth.selectors */ 4590);
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/auth/auth.actions */ 3978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/container/container.component */ 2580);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/calendar */ 7411);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtextarea */ 652);
















function SettingsComponent_small_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_USERNAME"), " ");
  }
}
function SettingsComponent_small_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ERROR.INVALID_EMAIL"), " ");
  }
}
function SettingsComponent_small_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "ERROR.USERNAME_LONG"), " ", ctx_r2.settingsForm.value.userName == null ? null : ctx_r2.settingsForm.value.userName.length, " ");
  }
}
function SettingsComponent_small_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "ERROR.FIRST_NAME_LONG"), " ", ctx_r3.settingsForm.value.firstName == null ? null : ctx_r3.settingsForm.value.firstName.length, " ");
  }
}
function SettingsComponent_small_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "ERROR.LAST_NAME_LONG"), " ", ctx_r4.settingsForm.value.lastName == null ? null : ctx_r4.settingsForm.value.lastName.length, " ");
  }
}
let SettingsComponent = /*#__PURE__*/(() => {
  class SettingsComponent {
    constructor(store, translate) {
      this.store = store;
      this.translate = translate;
      this.currentUser$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_0__.selectCurrentUser);
      this.isLoading$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_0__.selectIsLoadingAuth);
      this.settingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
        nickname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
          value: '',
          disabled: true
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(15)]),
        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
          value: '',
          disabled: true
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
        userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(20)]),
        firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(20)]),
        lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(20)]),
        birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(),
        bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
        website: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
        image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
      });
    }
    ngOnInit() {
      this.maxDate = new Date();
      this.currentUserSubscription = this.currentUser$.subscribe(user => {
        if (user) {
          this.settingsForm.patchValue({
            nickname: user.nicknameUrl,
            email: user.email,
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            birthDate: user.birthDate ? new Date(user.birthDate) : null
          });
        }
      });
    }
    ngOnDestroy() {
      this.currentUserSubscription.unsubscribe();
    }
    onSubmit() {
      if (this.settingsForm.invalid) {
        this.settingsForm.markAllAsTouched();
        return;
      }
      const userPublic = {
        name: this.settingsForm.get('userName')?.value,
        nickname: this.settingsForm.get('nickname')?.value,
        languages: [{
          website: this.settingsForm.get('website')?.value,
          biography: this.settingsForm.get('bio')?.value,
          langCode: this.translate.currentLang
        }]
      };
      const userPrivate = {
        firstName: this.settingsForm.get('firstName')?.value,
        lastName: this.settingsForm.get('lastName')?.value,
        birthDate: this.settingsForm.get('birthDate').value
      };
      this.store.dispatch((0,_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__.updateCurrentUserAction)({
        userPublic,
        userPrivate
      }));
    }
    static #_ = this.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      decls: 59,
      vars: 64,
      consts: [[3, "width", "isLoading"], [1, "font-bold", "text-2xl", "mb-5", "w-full", "flex", "justify-content-center"], [1, "w-full", 3, "formGroup", "ngSubmit"], [1, "mb-3", "input-group"], ["for", "nickname", 1, "block", "font-normal"], ["id", "nickname", "type", "text", "pInputText", "", "formControlName", "nickname", 1, "w-full", 3, "placeholder"], ["class", "error-message text-sm text-red-400", 4, "ngIf"], ["for", "email", 1, "block", "font-normal"], ["id", "email", "type", "text", "pInputText", "", "formControlName", "email", 1, "w-full", 3, "placeholder"], ["for", "userName", 1, "block", "font-normal"], ["id", "userName", "type", "text", "pInputText", "", "formControlName", "userName", 1, "w-full", 3, "placeholder"], ["for", "firstName", 1, "block", "font-normal"], ["id", "firstName", "type", "text", "pInputText", "", "formControlName", "firstName", 1, "w-full", 3, "placeholder"], ["for", "lastName", 1, "block", "font-normal"], ["id", "lastName", "type", "text", "pInputText", "", "formControlName", "lastName", 1, "w-full", 3, "placeholder"], ["for", "birthDate", 1, "block", "font-normal"], ["formControlName", "birthDate", "id", "birthDate", "inputId", "birthDate", "styleClass", "w-full", "dateFormat", "dd/mm/yy", 3, "showIcon", "maxDate", "required", "dataType", "placeholder"], ["for", "website", 1, "block", "font-normal"], ["id", "website", "type", "text", "pInputText", "", "formControlName", "website", 1, "w-full", 3, "placeholder"], [1, "mb-3", "input-group", "bio-group"], ["for", "bio", 1, "block", "font-normal", "pt-3"], ["id", "bio", "rows", "3", "pInputTextarea", "", "formControlName", "bio", 1, "w-full", 3, "autoResize", "placeholder"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "w-full", 3, "disabled", "label"], [1, "error-message", "text-sm", "text-red-400"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "User Account Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SettingsComponent_small_11_Template, 3, 3, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 3)(13, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, SettingsComponent_small_18_Template, 3, 3, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 3)(20, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, SettingsComponent_small_25_Template, 3, 4, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 3)(27, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, SettingsComponent_small_32_Template, 3, 4, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 3)(34, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, SettingsComponent_small_39_Template, 3, 4, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 3)(41, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](43, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "p-calendar", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](45, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 3)(47, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](51, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 19)(53, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Bio");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "textarea", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](56, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](58, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_5_0;
          let tmp_8_0;
          let tmp_11_0;
          let tmp_14_0;
          let tmp_17_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 600)("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 30, ctx.isLoading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.settingsForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 32, "LABEL.NICKNAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 34, "PLACEHOLDER.NICKNAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.settingsForm.get("userName")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.settingsForm.get("userName")) == null ? null : tmp_5_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 36, "LABEL.EMAIL"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 38, "PLACEHOLDER.EMAIL"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.settingsForm.get("email")) == null ? null : tmp_8_0.hasError("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 40, "LABEL.USER_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 42, "PLACEHOLDER.USER_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.settingsForm.get("userName")) == null ? null : tmp_11_0.hasError("maxlength")) && ((tmp_11_0 = ctx.settingsForm.get("userName")) == null ? null : tmp_11_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 44, "LABEL.FIRST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 46, "PLACEHOLDER.FIRST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.settingsForm.get("firstName")) == null ? null : tmp_14_0.hasError("maxlength")) && ((tmp_14_0 = ctx.settingsForm.get("firstName")) == null ? null : tmp_14_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 48, "LABEL.LAST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 50, "PLACEHOLDER.LAST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_17_0 = ctx.settingsForm.get("lastName")) == null ? null : tmp_17_0.hasError("maxlength")) && ((tmp_17_0 = ctx.settingsForm.get("lastName")) == null ? null : tmp_17_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](43, 52, "LABEL.BIRTH_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showIcon", true)("maxDate", ctx.maxDate)("required", true)("dataType", "Date")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](45, 54, "PLACEHOLDER.BIRTH_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 56, "LABEL.WEBSITE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](51, 58, "PLACEHOLDER.WEBSITE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autoResize", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](56, 60, "PLACEHOLDER.BIO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.settingsForm.valid && (ctx.settingsForm.dirty || ctx.settingsForm.touched))("label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](58, 62, "BTN.UPDATE_SETTINGS"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.Ripple, primeng_calendar__WEBPACK_IMPORTED_MODULE_11__.Calendar, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__.InputTextarea, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: [".input-group[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 2fr 3fr;\n  row-gap: 0.5rem;\n}\n@media (min-width: 768px) {\n  .input-group[_ngcontent-%COMP%] {\n    grid-template-columns: 180px 1fr;\n  }\n}\n\n.bio-group[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  grid-column-start: 2;\n  padding-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2V0dGluZ3MvY29tcG9uZW50cy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0U7RUFORjtJQU9JLGdDQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFLHVCQUFBO0FBRUY7O0FBQ0E7RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZ3JvdXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XG4gIHJvdy1nYXA6IDAuNXJlbTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE4MHB4IDFmcjtcbiAgfVxufVxuXG4uYmlvLWdyb3VwIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 862);
/* harmony import */ var _components_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/settings.component */ 9549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);






const routes = [{
  path: '',
  component: _components_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent
}];
let SettingsRoutingModule = /*#__PURE__*/(() => {
  class SettingsRoutingModule {
    static #_ = this.ɵfac = function SettingsRoutingModule_Factory(t) {
      return new (t || SettingsRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SettingsRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_3__.LocalizeRouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return SettingsRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SettingsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_3__.LocalizeRouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-routing.module */ 4884);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/container/container.component */ 2580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ 7411);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtextarea */ 652);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);












let SettingsModule = /*#__PURE__*/(() => {
  class SettingsModule {
    static #_ = this.ɵfac = function SettingsModule_Factory(t) {
      return new (t || SettingsModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: SettingsModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__.SettingsRoutingModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputTextModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.RippleModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__.InputTextareaModule]
    });
  }
  return SettingsModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SettingsModule, {
    declarations: [_components_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__.SettingsRoutingModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputTextModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.RippleModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__.InputTextareaModule]
  });
})();

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