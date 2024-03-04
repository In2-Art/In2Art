"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[100],{

/***/ 54656:
/*!********************************************************!*\
  !*** ./src/app/ApiClient.Backend/services/nickname.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _backend_Common_nickname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../backend/Common/nickname */ 24464);
/* harmony import */ var _helpers_observables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/observables */ 20884);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_helpers_observables__WEBPACK_IMPORTED_MODULE_1__.ToService)(_backend_Common_nickname__WEBPACK_IMPORTED_MODULE_0__.Nickname));

/***/ }),

/***/ 51572:
/*!*************************************************************************!*\
  !*** ./src/app/pages/edit-profile/components/edit-profile.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditProfileComponent: () => (/* binding */ EditProfileComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 75100);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 94364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 40604);
/* harmony import */ var _ApiClient_services_nickname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ApiClient/services/nickname */ 54656);
/* harmony import */ var _ApiClient_backend_Common_nickname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ApiClient/backend/Common/nickname */ 24464);
/* harmony import */ var _ApiClient_backend_Register_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ApiClient/backend/Register/register */ 83732);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @enums/urls */ 84904);
/* harmony import */ var _store_edit_profile_editPfofile_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/edit-profile/editPfofile.selectors */ 42672);
/* harmony import */ var _store_edit_profile_editProfile_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store/edit-profile/editProfile.actions */ 74688);
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/auth/auth.selectors */ 81032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 66192);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/container/container.component */ 93992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtext */ 94800);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/button */ 89276);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/ripple */ 82856);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/calendar */ 46600);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputtextarea */ 21132);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/tooltip */ 22416);

























function EditProfileComponent_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.INVALID_EMAIL"), " ");
  }
}
function EditProfileComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);
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
function EditProfileComponent_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_NICKNAME"), " ");
  }
}
function EditProfileComponent_small_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.MAX_LIMIT"), " ");
  }
}
function EditProfileComponent_small_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.NICKNAME_SPACES"), " ");
  }
}
function EditProfileComponent_small_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.NICKNAME_EXIST"), " ");
  }
}
function EditProfileComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);
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
function EditProfileComponent_small_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_PROFILE_NAME"), " ");
  }
}
function EditProfileComponent_small_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.MAX_LIMIT"), " ");
  }
}
function EditProfileComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);
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
function EditProfileComponent_small_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_FIRST_NAME"), " ");
  }
}
function EditProfileComponent_small_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.MAX_LIMIT"), " ");
  }
}
function EditProfileComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);
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
function EditProfileComponent_small_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_LAST_NAME"), " ");
  }
}
function EditProfileComponent_small_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.MAX_LIMIT"), " ");
  }
}
function EditProfileComponent_small_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_BIRTHDATE"), " ");
  }
}
function EditProfileComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);
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
function EditProfileComponent_small_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.MAX_LIMIT"), " ");
  }
}
function EditProfileComponent_small_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.WEBSITE_FORMAT"), " ");
  }
}
function EditProfileComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32);
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
function EditProfileComponent_small_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ERROR.MAX_LIMIT"), " ");
  }
}
const _c0 = (a0, a1, a2) => [a0, a1, a2];
let EditProfileComponent = /*#__PURE__*/(() => {
  class EditProfileComponent {
    constructor(store, translate) {
      this.store = store;
      this.translate = translate;
      this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
      this.isLoading$ = this.store.select(_store_edit_profile_editPfofile_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsLoadingEditProfile);
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
      this.store.dispatch((0,_store_edit_profile_editProfile_actions__WEBPACK_IMPORTED_MODULE_5__.getUserProfileAction)());
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
      this.store.select(_store_edit_profile_editPfofile_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIdentity).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe$)).subscribe(identity => {
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
      this.store.select(_store_edit_profile_editPfofile_selectors__WEBPACK_IMPORTED_MODULE_4__.selectEmail).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe$)).subscribe(email => {
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
        this.store.dispatch((0,_store_edit_profile_editProfile_actions__WEBPACK_IMPORTED_MODULE_5__.updateUserProfile)({
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
    static #_ = this.ɵfac = function EditProfileComponent_Factory(t) {
      return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: EditProfileComponent,
      selectors: [["app-user-profile"]],
      decls: 86,
      vars: 100,
      consts: [[3, "width", "isLoading"], [1, "font-bold", "text-2xl", "mb-5"], [1, "w-full", "flex", "flex-column", "gap-5", "md:gap-3", 3, "formGroup", "ngSubmit"], [1, "input-group"], ["for", "email", 1, "block", "font-bold"], ["id", "email", "type", "text", "pInputText", "", "formControlName", "email", 1, "w-full", 3, "placeholder"], ["class", "error-message text-sm", 4, "ngIf"], [1, "input-group", "relative"], ["for", "nickname", 1, "flex", "align-items-center", "gap-2", "font-bold"], ["tooltipPosition", "top", 1, "pi", "pi-question-circle", 3, "pTooltip", "positionTop"], ["id", "nickname", "type", "text", "pInputText", "", "formControlName", "nickname", 1, "w-full", 3, "placeholder"], ["class", "input-letter-count", 3, "error", 4, "ngIf"], ["for", "profileName", 1, "flex", "align-items-center", "gap-2", "font-bold"], ["id", "profileName", "type", "text", "pInputText", "", "formControlName", "profileName", 1, "w-full", 3, "placeholder"], ["for", "firstName", 1, "block", "font-bold"], ["id", "firstName", "type", "text", "pInputText", "", "formControlName", "firstName", 1, "w-full", 3, "placeholder"], ["for", "lastName", 1, "block", "font-bold"], ["id", "lastName", "type", "text", "pInputText", "", "formControlName", "lastName", 1, "w-full", 3, "placeholder"], ["for", "birthDate", 1, "block", "font-bold"], ["id", "birthDate", "inputId", "birthDate", "styleClass", "w-full", "dateFormat", "dd/mm/yy", 3, "formControl", "showIcon", "maxDate", "placeholder"], ["for", "website", 1, "block", "font-bold"], ["id", "website", "type", "text", "pInputText", "", "formControlName", "website", 1, "w-full", 3, "placeholder"], [1, "input-group", "align-items-start"], ["for", "bio", 1, "block", "font-bold", "pt-3"], [1, "relative"], ["id", "bio", "rows", "3", "pInputTextarea", "", "formControlName", "bio", 1, "w-full", 3, "autoResize", "placeholder"], ["class", "input-letter-count-bio", 3, "error", 4, "ngIf"], [1, "flex", "flex-column", "md:flex-row", "gap-3", "w-full", "flex-wrap"], ["icon", "pi pi-user", "pButton", "", "pRipple", "", 1, "w-full", "md:w-auto", "flex-grow-1", 3, "routerLink", "label"], ["type", "submit", "pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "w-full", "md:w-auto", "flex-grow-1", 3, "disabled", "label"], [1, "error-message", "text-sm"], [1, "input-letter-count"], [1, "input-letter-count-bio"]],
      template: function EditProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function EditProfileComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 3)(7, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, EditProfileComponent_small_12_Template, 3, 3, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 7)(14, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, EditProfileComponent_div_21_Template, 2, 4, "div", 11)(22, EditProfileComponent_small_22_Template, 3, 3, "small", 6)(23, EditProfileComponent_small_23_Template, 3, 3, "small", 6)(24, EditProfileComponent_small_24_Template, 3, 3, "small", 6)(25, EditProfileComponent_small_25_Template, 3, 3, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 7)(27, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, EditProfileComponent_div_34_Template, 2, 4, "div", 11)(35, EditProfileComponent_small_35_Template, 3, 3, "small", 6)(36, EditProfileComponent_small_36_Template, 3, 3, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 7)(38, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](40, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, EditProfileComponent_div_43_Template, 2, 4, "div", 11)(44, EditProfileComponent_small_44_Template, 3, 3, "small", 6)(45, EditProfileComponent_small_45_Template, 3, 3, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 7)(47, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](49, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](50, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](51, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, EditProfileComponent_div_52_Template, 2, 4, "div", 11)(53, EditProfileComponent_small_53_Template, 3, 3, "small", 6)(54, EditProfileComponent_small_54_Template, 3, 3, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 3)(56, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](58, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](59, "p-calendar", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](60, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, EditProfileComponent_small_61_Template, 3, 3, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 7)(63, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](65, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](67, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](68, EditProfileComponent_div_68_Template, 2, 4, "div", 11)(69, EditProfileComponent_small_69_Template, 3, 3, "small", 6)(70, EditProfileComponent_small_70_Template, 3, 3, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 22)(72, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, "Bio");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 24)(75, "textarea", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](76, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, "        ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](78, EditProfileComponent_div_78_Template, 2, 4, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](79, EditProfileComponent_small_79_Template, 3, 3, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](81, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](82, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](83, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](84, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](85, "translate");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", 600)("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 52, ctx.isLoading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 54, "EDIT_PROFILE_PAGE.TITLE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.settingsForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 56, "LABEL.EMAIL"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 58, "PLACEHOLDER.EMAIL"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.settingsForm.get("email")) == null ? null : tmp_6_0.hasError("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 60, "LABEL.NICKNAME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 62, "TOOLTIP.NICKNAME"))("positionTop", -8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 64, "PLACEHOLDER.NICKNAME"));
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
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 66, "LABEL.PROFILE_NAME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 68, "TOOLTIP.PROFILE_NAME"))("positionTop", -8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 70, "PLACEHOLDER.PROFILE_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.settingsForm.controls.profileName.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_21_0 = ctx.settingsForm.get("profileName")) == null ? null : tmp_21_0.hasError("required")) && ((tmp_21_0 = ctx.settingsForm.get("profileName")) == null ? null : tmp_21_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_22_0 = ctx.settingsForm.get("profileName")) == null ? null : tmp_22_0.hasError("maxlength")) && ((tmp_22_0 = ctx.settingsForm.get("profileName")) == null ? null : tmp_22_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](40, 72, "LABEL.FIRST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](42, 74, "PLACEHOLDER.FIRST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.settingsForm.controls.firstName.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_26_0 = ctx.settingsForm.get("firstName")) == null ? null : tmp_26_0.hasError("required")) && ((tmp_26_0 = ctx.settingsForm.get("firstName")) == null ? null : tmp_26_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_27_0 = ctx.settingsForm.get("firstName")) == null ? null : tmp_27_0.hasError("maxlength")) && ((tmp_27_0 = ctx.settingsForm.get("firstName")) == null ? null : tmp_27_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](49, 76, "LABEL.LAST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](51, 78, "PLACEHOLDER.LAST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.settingsForm.controls.lastName.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_31_0 = ctx.settingsForm.get("lastName")) == null ? null : tmp_31_0.hasError("required")) && ((tmp_31_0 = ctx.settingsForm.get("lastName")) == null ? null : tmp_31_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_32_0 = ctx.settingsForm.get("lastName")) == null ? null : tmp_32_0.hasError("maxlength")) && ((tmp_32_0 = ctx.settingsForm.get("lastName")) == null ? null : tmp_32_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](58, 80, "LABEL.BIRTH_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx.settingsForm.controls.birthDate)("showIcon", true)("maxDate", ctx.maxDate)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](60, 82, "PLACEHOLDER.BIRTH_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_38_0 = ctx.settingsForm.get("birthDate")) == null ? null : tmp_38_0.hasError("required")) && ((tmp_38_0 = ctx.settingsForm.get("birthDate")) == null ? null : tmp_38_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](65, 84, "LABEL.WEBSITE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](67, 86, "PLACEHOLDER.WEBSITE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.settingsForm.controls.website.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_42_0 = ctx.settingsForm.get("website")) == null ? null : tmp_42_0.hasError("maxlength")) && ((tmp_42_0 = ctx.settingsForm.get("website")) == null ? null : tmp_42_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_43_0 = ctx.settingsForm.get("website")) == null ? null : tmp_43_0.hasError("pattern")) && ((tmp_43_0 = ctx.settingsForm.get("website")) == null ? null : tmp_43_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("autoResize", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](76, 88, "PLACEHOLDER.BIO"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.settingsForm.controls.bio.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_47_0 = ctx.settingsForm.get("bio")) == null ? null : tmp_47_0.hasError("maxlength")) && ((tmp_47_0 = ctx.settingsForm.get("bio")) == null ? null : tmp_47_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](96, _c0, ctx.URLS.BACK, ctx.URLS.PROFILE, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](82, 90, ctx.userNickname$)))("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](83, 92, "BTN.TO_PROFILE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.settingsForm.valid && (ctx.settingsForm.dirty || ctx.settingsForm.touched))("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](85, 94, "BTN.UPDATE_USER_ACCOUNT"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_7__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_18__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_19__.Ripple, primeng_calendar__WEBPACK_IMPORTED_MODULE_20__.Calendar, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_21__.InputTextarea, primeng_tooltip__WEBPACK_IMPORTED_MODULE_22__.Tooltip, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
      styles: [".input-letter-count-bio[_ngcontent-%COMP%] {\n  padding: 5px 2px;\n  background-color: var(--inputBg);\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n.input-letter-count-bio.error[_ngcontent-%COMP%] {\n  color: var(--inputInvalid);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL2NvbXBvbmVudHMvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWxldHRlci1jb3VudC1iaW8ge1xuICBwYWRkaW5nOiA1cHggMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dEJnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xuXG4gICYuZXJyb3Ige1xuICAgIGNvbG9yOiB2YXIoLS1pbnB1dEludmFsaWQpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return EditProfileComponent;
})();

/***/ }),

/***/ 59256:
/*!*******************************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditProfileRoutingModule: () => (/* binding */ EditProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 97625);
/* harmony import */ var _components_edit_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/edit-profile.component */ 51572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94280);






const routes = [{
  path: '',
  component: _components_edit_profile_component__WEBPACK_IMPORTED_MODULE_0__.EditProfileComponent
}];
let EditProfileRoutingModule = /*#__PURE__*/(() => {
  class EditProfileRoutingModule {
    static #_ = this.ɵfac = function EditProfileRoutingModule_Factory(t) {
      return new (t || EditProfileRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: EditProfileRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_3__.LocalizeRouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return EditProfileRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditProfileRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_3__.LocalizeRouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 28100:
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditProfileModule: () => (/* binding */ EditProfileModule)
/* harmony export */ });
/* harmony import */ var _components_edit_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/edit-profile.component */ 51572);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile-routing.module */ 59256);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/container/container.component */ 93992);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 94800);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 89276);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 82856);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ 46600);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtextarea */ 21132);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/password */ 36128);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tooltip */ 22416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);














let EditProfileModule = /*#__PURE__*/(() => {
  class EditProfileModule {
    static #_ = this.ɵfac = function EditProfileModule_Factory(t) {
      return new (t || EditProfileModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: EditProfileModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.EditProfileRoutingModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputTextModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.RippleModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__.InputTextareaModule, primeng_password__WEBPACK_IMPORTED_MODULE_12__.PasswordModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__.TooltipModule]
    });
  }
  return EditProfileModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EditProfileModule, {
    declarations: [_components_edit_profile_component__WEBPACK_IMPORTED_MODULE_0__.EditProfileComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.EditProfileRoutingModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputTextModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.RippleModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__.InputTextareaModule, primeng_password__WEBPACK_IMPORTED_MODULE_12__.PasswordModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__.TooltipModule]
  });
})();

/***/ }),

/***/ 42672:
/*!*************************************************************!*\
  !*** ./src/app/store/edit-profile/editPfofile.selectors.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editProfileFeatureSelector: () => (/* binding */ editProfileFeatureSelector),
/* harmony export */   selectEmail: () => (/* binding */ selectEmail),
/* harmony export */   selectIdentity: () => (/* binding */ selectIdentity),
/* harmony export */   selectIsLoadingEditProfile: () => (/* binding */ selectIsLoadingEditProfile)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 66192);

const editProfileFeatureSelector = state => state.editProfile;
const selectIsLoadingEditProfile = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(editProfileFeatureSelector, state => state.isLoading);
const selectEmail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(editProfileFeatureSelector, state => state.email);
const selectIdentity = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(editProfileFeatureSelector, state => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    birthDate: state.birthDate,
    bio: state.bio,
    website: state.website
  };
});

/***/ })

}]);
//# sourceMappingURL=100.js.map