"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[818],{

/***/ 71296:
/*!***************************************************************!*\
  !*** ./src/app/pages/profile/components/profile.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 85647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/profile/profile.selectors */ 43031);
/* harmony import */ var _store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/profile/profile.actions */ 13198);
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/auth/auth.selectors */ 47393);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @enums/urls */ 94317);
/* harmony import */ var _enums_feed_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @enums/feed-type */ 18296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ApiClient_Backend_components_image_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ApiClient.Backend/components/image/image.component */ 69379);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var _shared_components_feed_type_switch_feed_type_switch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/feed-type-switch/feed-type-switch.component */ 24903);
/* harmony import */ var _shared_components_profile_posts_feed_profile_posts_feed_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/profile-posts-feed/profile-posts-feed.component */ 52367);




















const _c0 = a0 => ({
  isActive: a0
});
const _c1 = (a0, a1) => ["/", a0, a1];
const _c2 = (a0, a1, a2) => ["/", a0, a1, a2];
const _c3 = () => ({
  width: "200px",
  height: "200px"
});
function ProfileComponent_Conditional_1_Conditional_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "use", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx_r1.locale$), ctx_r1.URLS.SET_PHOTO));
  }
}
function ProfileComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ProfileComponent_Conditional_1_Conditional_1_a_4_Template, 4, 6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "app-image", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const LoginInfo_r3 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]("@" + LoginInfo_r3.userNickname.nicknameDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isCurrentUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("folder", "UserPictures")("idPicture", LoginInfo_r3.pictureId)("userId", LoginInfo_r3.userProfile.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](LoginInfo_r3.userProfile.name);
  }
}
function ProfileComponent_Conditional_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "use", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "use", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "use", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](18, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 6, ctx_r1.locale$), ctx_r1.URLS.EDIT_PROFILE));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 8, "BTN.EDIT_PROFILE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](21, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 10, ctx_r1.locale$), ctx_r1.URLS.NEW, ctx_r1.URLS.POST));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 12, "BTN.CREATE_POST"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](25, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 14, ctx_r1.locale$), ctx_r1.URLS.NEW, ctx_r1.URLS.ARTWORK));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 16, "BTN.ADD_ARTWORK"));
  }
}
function ProfileComponent_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-feed-type-switch", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("feedTypeChange", function ProfileComponent_Conditional_1_Conditional_13_Template_app_feed_type_switch_feedTypeChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.setFeedType(ctx_r1.currentTab, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentFeedType", ctx_r1.postFeedType);
  }
}
function ProfileComponent_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-feed-type-switch", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("feedTypeChange", function ProfileComponent_Conditional_1_Conditional_18_Template_app_feed_type_switch_feedTypeChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.setFeedType(ctx_r1.currentTab, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentFeedType", ctx_r1.artworkFeedType);
  }
}
function ProfileComponent_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-profile-posts-feed", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("feedType", ctx_r1.postFeedType)("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 3, ctx_r1.isLoading$))("userId", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 5, ctx_r1.userLoginInfo$).id);
  }
}
function ProfileComponent_Conditional_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_Conditional_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Collections");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_Conditional_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_Conditional_1_Conditional_1_Template, 9, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ProfileComponent_Conditional_1_div_4_Template, 24, 29, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " I found I could say things with color and shapes that I couldn\u2019t say any other way \u2013 things I had no words for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ul", 6)(9, "li", 7)(10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_Conditional_1_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.setTab(ctx_r1.PROFILE_TABS.POSTS));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, ProfileComponent_Conditional_1_Conditional_13_Template, 1, 1, "app-feed-type-switch", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "li", 7)(15, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_Conditional_1_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.setTab(ctx_r1.PROFILE_TABS.GALLERY));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, ProfileComponent_Conditional_1_Conditional_18_Template, 1, 1, "app-feed-type-switch", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "li")(20, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_Conditional_1_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.setTab(ctx_r1.PROFILE_TABS.COLLECT));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "li")(24, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_Conditional_1_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.setTab(ctx_r1.PROFILE_TABS.ABOUT));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, ProfileComponent_Conditional_1_Conditional_28_Template, 3, 7, "app-profile-posts-feed", 10)(29, ProfileComponent_Conditional_1_div_29_Template, 2, 0, "div", 11)(30, ProfileComponent_Conditional_1_div_30_Template, 2, 0, "div", 11)(31, ProfileComponent_Conditional_1_div_31_Template, 2, 0, "div", 11);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](1, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 16, ctx_r1.userLoginInfo$)) ? 1 : -1, tmp_1_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isCurrentUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](26, _c0, ctx_r1.currentTab === ctx_r1.PROFILE_TABS.POSTS));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 18, "PROFILE_PAGE.POSTS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](13, ctx_r1.currentTab === ctx_r1.PROFILE_TABS.POSTS ? 13 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](28, _c0, ctx_r1.currentTab === ctx_r1.PROFILE_TABS.GALLERY));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 20, "PROFILE_PAGE.GALLERY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](18, ctx_r1.currentTab === ctx_r1.PROFILE_TABS.GALLERY ? 18 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](30, _c0, ctx_r1.currentTab === ctx_r1.PROFILE_TABS.COLLECT));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 22, "PROFILE_PAGE.COLLECTIONS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](32, _c0, ctx_r1.currentTab === ctx_r1.PROFILE_TABS.ABOUT));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](26, 24, "PROFILE_PAGE.ABOUT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](28, ctx_r1.currentTab === ctx_r1.PROFILE_TABS.POSTS ? 28 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.currentTab === ctx_r1.PROFILE_TABS.GALLERY);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.currentTab === ctx_r1.PROFILE_TABS.COLLECT);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.currentTab === ctx_r1.PROFILE_TABS.ABOUT);
  }
}
function ProfileComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "p-progressSpinner", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](2, _c3));
  }
}
var PROFILE_TABS = /*#__PURE__*/function (PROFILE_TABS) {
  PROFILE_TABS["POSTS"] = "posts";
  PROFILE_TABS["GALLERY"] = "gallery";
  PROFILE_TABS["COLLECT"] = "collections";
  PROFILE_TABS["ABOUT"] = "about";
  return PROFILE_TABS;
}(PROFILE_TABS || {});
let ProfileComponent = /*#__PURE__*/(() => {
  class ProfileComponent {
    constructor(store, route, translate) {
      this.store = store;
      this.route = route;
      this.translate = translate;
      this.locale$ = this.translate.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)({
        lang: this.translate.currentLang
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(event => event.lang));
      this.currentTab = PROFILE_TABS.POSTS;
      this.postFeedType = _enums_feed_type__WEBPACK_IMPORTED_MODULE_5__.FEED_TYPE.COLUMN;
      this.artworkFeedType = _enums_feed_type__WEBPACK_IMPORTED_MODULE_5__.FEED_TYPE.COLUMN;
      this.isCurrentUser = false;
      this.isLoading$ = this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_1__.selectIsLoadingProfile);
      this.userLoginInfo$ = this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_1__.selectUserLoginInfo);
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_4__.URLS;
      this.PROFILE_TABS = PROFILE_TABS;
    }
    ngOnInit() {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatestWith)(_this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCurrentUserNickname))).subscribe(([params, currentUser]) => {
          _this.isCurrentUser = params['userSlug'] === currentUser;
          _this.store.dispatch((0,_store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_2__.getLoginInfoAction)({
            nicknameUrl: params['userSlug']
          }));
        });
      })();
    }
    setTab(newValue) {
      this.currentTab = newValue;
    }
    setFeedType(feed, newValue) {
      if (feed === PROFILE_TABS.POSTS) {
        this.postFeedType = newValue;
      }
      if (feed === PROFILE_TABS.GALLERY) {
        this.artworkFeedType = newValue;
      }
    }
    static #_ = this.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-user-profile"]],
      decls: 4,
      vars: 3,
      consts: [[1, "profile-wrapper"], [1, "profile-user"], [1, "flex", "flex-column"], [1, "profile-divider"], ["class", "flex flex-column align-items-center justify-content-center w-full", 4, "ngIf"], [1, "profile-bio"], [1, "flex", "flex-column", "align-items-center", "pt-1", "pb-1"], [1, "w-full", "flex", "justify-content-center", "relative"], ["type", "button", 1, "profile-tab", 3, "click", "ngClass"], [3, "currentFeedType"], [3, "feedType", "isLoading", "userId"], ["class", "profile-feed", 4, "ngIf"], [1, "user-nickname"], [1, "relative"], ["class", "image-link", 3, "routerLink", 4, "ngIf"], [1, "image-wrapper"], ["defaultImageUrl", "assets/videos/noUserVid.mp4", 3, "folder", "idPicture", "userId"], [1, "user-profile-name"], [1, "image-link", 3, "routerLink"], ["width", "56", "height", "56"], ["href", "assets/images/icons.svg#edit-photo"], [1, "flex", "flex-column", "align-items-center", "justify-content-center", "w-full"], [1, "w-fit", "flex", "flex-column", "gap-3"], ["type", "button", 1, "profile-button", 3, "routerLink"], ["width", "25", "height", "21"], ["href", "assets/images/icons.svg#edit-profile"], [1, "flex-grow-1", "text-center"], ["href", "assets/images/icons.svg#create-post"], ["href", "assets/images/icons.svg#add-artwork"], [3, "feedTypeChange", "currentFeedType"], [1, "profile-feed"], [1, "profile-loader"], ["strokeWidth", "4"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_Conditional_1_Template, 32, 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ProfileComponent_Conditional_3_Template, 2, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx.isLoading$) === false ? 1 : 3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _ApiClient_Backend_components_image_image_component__WEBPACK_IMPORTED_MODULE_6__.ImageComponent, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__.ProgressSpinner, _shared_components_feed_type_switch_feed_type_switch_component__WEBPACK_IMPORTED_MODULE_7__.FeedTypeSwitchComponent, _shared_components_profile_posts_feed_profile_posts_feed_component__WEBPACK_IMPORTED_MODULE_8__.ProfilePostsFeedComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
      styles: [".profile-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 2rem;\n  display: grid;\n  column-gap: 54px;\n  width: 100%;\n  grid-template-columns: 240px 640px;\n  justify-content: center;\n}\n\n.profile-user[_ngcontent-%COMP%] {\n  position: sticky;\n  height: 300px;\n  width: 100%;\n  top: calc(70px + 2rem);\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.profile-divider[_ngcontent-%COMP%] {\n  width: 100%;\n  border: solid 1px var(--linesOnNormalBackground);\n  margin: 1.5rem 0;\n}\n\n.profile-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.profile-tab[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 28px;\n  font-family: \"Bebas Neue\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n.profile-tab.isActive[_ngcontent-%COMP%] {\n  color: var(--button);\n}\n.profile-tab[_ngcontent-%COMP%]:hover {\n  color: var(--button);\n}\n.profile-tab[_ngcontent-%COMP%]:active {\n  color: var(--pressedButton);\n}\n\n.profile-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-family: \"Roboto\", sans-serif;\n  background-color: var(--background);\n  font-size: 1rem;\n  font-weight: bold;\n  align-items: center;\n  justify-content: space-between;\n  display: flex;\n  gap: 1rem;\n  border: 1.5px solid var(--mainContrastElement);\n  border-radius: 6px;\n  height: 2rem;\n  padding: 0 1rem;\n  width: 100%;\n}\n.profile-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none;\n}\n.profile-button[_ngcontent-%COMP%]:hover {\n  color: var(--button);\n  border-color: var(--button);\n}\n.profile-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  color: var(--button);\n}\n.profile-button[_ngcontent-%COMP%]:active {\n  color: var(--pressedButton);\n  border-color: var(--pressedButton);\n}\n.profile-button[_ngcontent-%COMP%]:active   svg[_ngcontent-%COMP%] {\n  color: var(--pressedButton);\n}\n\n.image-link[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  cursor: pointer;\n}\n.image-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.5s ease;\n}\n.image-link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(26, 26, 26, 0.75);\n}\n.image-link[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.image-wrapper[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  content: \"\";\n  height: 60px;\n  background: linear-gradient(180deg, transparent 0%, var(--background) 90%);\n}\n\n.profile-highlights[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.set-image-button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 50;\n  bottom: 0;\n  right: 0;\n}\n@media (min-width: 768px) {\n  .set-image-button[_ngcontent-%COMP%] {\n    bottom: 1rem;\n    right: 1rem;\n  }\n}\n\n.user-nickname[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--greyText);\n  margin-bottom: 20px;\n}\n\n.user-profile-name[_ngcontent-%COMP%] {\n  z-index: 10;\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-size: 20px;\n  width: 100%;\n  text-align: center;\n  font-weight: bold;\n}\n\n.profile-loader[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  grid-column: 1/3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0Usb0JBQUE7QUFDSjtBQUVFO0VBQ0Usb0JBQUE7QUFBSjtBQUdFO0VBQ0UsMkJBQUE7QUFESjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUZGO0FBSUU7RUFDRSxVQUFBO0FBRko7QUFLRTtFQUNFLG9CQUFBO0VBQ0EsMkJBQUE7QUFISjtBQUtJO0VBQ0Usb0JBQUE7QUFITjtBQU9FO0VBQ0UsMkJBQUE7RUFDQSxrQ0FBQTtBQUxKO0FBT0k7RUFDRSwyQkFBQTtBQUxOOztBQVVBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQVBGO0FBU0U7RUFDRSxVQUFBO0VBQ0EsNkJBQUE7QUFQSjtBQVVFO0VBQ0Usd0NBQUE7QUFSSjtBQVVJO0VBQ0UsVUFBQTtBQVJOOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBVkY7QUFZRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwRUFBQTtBQVZKOztBQWNBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0FBWEY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQVhGO0FBYUU7RUFORjtJQU9JLFlBQUE7SUFDQSxXQUFBO0VBVkY7QUFDRjs7QUFhQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBVkY7O0FBYUE7RUFDRSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFWRjs7QUFhQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQVZGIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgY29sdW1uLWdhcDogNTRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjQwcHggNjQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvZmlsZS11c2VyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogY2FsYyg3MHB4ICsgMnJlbSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcm9maWxlLWRpdmlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tbGluZXNPbk5vcm1hbEJhY2tncm91bmQpO1xuICBtYXJnaW46IDEuNXJlbSAwO1xufVxuXG4ucHJvZmlsZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLXRhYiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LWZhbWlseTogXCJCZWJhcyBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcblxuICAmLmlzQWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uKTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1idXR0b24pO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGNvbG9yOiB2YXIoLS1wcmVzc2VkQnV0dG9uKTtcbiAgfVxufVxuXG4ucHJvZmlsZS1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLW1haW5Db250cmFzdEVsZW1lbnQpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGhlaWdodDogMnJlbTtcbiAgcGFkZGluZzogMCAxcmVtO1xuICB3aWR0aDogMTAwJTtcblxuICBzdmcge1xuICAgIGZpbGw6IG5vbmVcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1idXR0b24pO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uKTtcblxuICAgIHN2ZyB7XG4gICAgICBjb2xvcjogdmFyKC0tYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLXByZXNzZWRCdXR0b24pO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJlc3NlZEJ1dHRvbik7XG5cbiAgICBzdmcge1xuICAgICAgY29sb3I6IHZhcigtLXByZXNzZWRCdXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG4uaW1hZ2UtbGluayB7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICYgc3ZnIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMjYsIDI2LCAwLjc1KTtcblxuICAgIHN2ZyB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxufVxuXG4uaW1hZ2Utd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB0cmFuc3BhcmVudCAwJSwgdmFyKC0tYmFja2dyb3VuZCkgOTAlKTtcbiAgfVxufVxuXG4ucHJvZmlsZS1oaWdobGlnaHRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbn1cblxuLnNldC1pbWFnZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDUwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGJvdHRvbTogMXJlbTtcbiAgICByaWdodDogMXJlbTtcbiAgfVxufVxuXG4udXNlci1uaWNrbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHZhcigtLWdyZXlUZXh0KTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnVzZXItcHJvZmlsZS1uYW1lIHtcbiAgei1pbmRleDogMTA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByb2ZpbGUtbG9hZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLWNvbHVtbjogMS8zO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return ProfileComponent;
})();

/***/ }),

/***/ 71291:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileRoutingModule: () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 61611);
/* harmony import */ var _components_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/profile.component */ 71296);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @enums/urls */ 94317);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @guards/auth.guard */ 91336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);








const routes = [{
  path: _enums_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.USER_SLUG,
  component: _components_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
}];
let ProfileRoutingModule = /*#__PURE__*/(() => {
  class ProfileRoutingModule {
    static #_ = this.ɵfac = function ProfileRoutingModule_Factory(t) {
      return new (t || ProfileRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: ProfileRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
  return ProfileRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 21818:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileModule: () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/skeleton */ 76301);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ApiClient/components/image/image.component */ 69379);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-routing.module */ 71291);
/* harmony import */ var _components_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/profile.component */ 71296);
/* harmony import */ var _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/post-card/post-card.component */ 23621);
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/container/container.component */ 2645);
/* harmony import */ var _components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/skeleton-card/skeleton-card.component */ 17685);
/* harmony import */ var _shared_directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/directives/scroll-bottom.directive */ 58577);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/divider */ 36171);
/* harmony import */ var _components_feed_type_switch_feed_type_switch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/feed-type-switch/feed-type-switch.component */ 24903);
/* harmony import */ var _components_profile_posts_feed_profile_posts_feed_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/profile-posts-feed/profile-posts-feed.component */ 52367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);

















let ProfileModule = /*#__PURE__*/(() => {
  class ProfileModule {
    static #_ = this.ɵfac = function ProfileModule_Factory(t) {
      return new (t || ProfileModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: ProfileModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProfileRoutingModule, _components_container_container_component__WEBPACK_IMPORTED_MODULE_4__.ContainerComponent, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.RippleModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_0__.ImageComponent, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_14__.ProgressSpinnerModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_15__.SkeletonModule, _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_3__.PostCardComponent, _components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_5__.SkeletonCardComponent, primeng_divider__WEBPACK_IMPORTED_MODULE_16__.DividerModule, _components_feed_type_switch_feed_type_switch_component__WEBPACK_IMPORTED_MODULE_7__.FeedTypeSwitchComponent, _components_profile_posts_feed_profile_posts_feed_component__WEBPACK_IMPORTED_MODULE_8__.ProfilePostsFeedComponent]
    });
  }
  return ProfileModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ProfileModule, {
    declarations: [_components_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProfileRoutingModule, _components_container_container_component__WEBPACK_IMPORTED_MODULE_4__.ContainerComponent, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.RippleModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_0__.ImageComponent, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_14__.ProgressSpinnerModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_15__.SkeletonModule, _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_3__.PostCardComponent, _components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_5__.SkeletonCardComponent, _shared_directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_6__.ScrollBottomDirective, primeng_divider__WEBPACK_IMPORTED_MODULE_16__.DividerModule, _components_feed_type_switch_feed_type_switch_component__WEBPACK_IMPORTED_MODULE_7__.FeedTypeSwitchComponent, _components_profile_posts_feed_profile_posts_feed_component__WEBPACK_IMPORTED_MODULE_8__.ProfilePostsFeedComponent]
  });
})();

/***/ }),

/***/ 24903:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/feed-type-switch/feed-type-switch.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedTypeSwitchComponent: () => (/* binding */ FeedTypeSwitchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _enums_feed_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @enums/feed-type */ 18296);





const _c0 = a0 => ({
  isActive: a0
});
let FeedTypeSwitchComponent = /*#__PURE__*/(() => {
  class FeedTypeSwitchComponent {
    constructor() {
      this.feedTypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.FEED_TYPE = _enums_feed_type__WEBPACK_IMPORTED_MODULE_0__.FEED_TYPE;
    }
    setFeedType(feedType) {
      this.feedTypeChange.emit(feedType);
    }
    static #_ = this.ɵfac = function FeedTypeSwitchComponent_Factory(t) {
      return new (t || FeedTypeSwitchComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FeedTypeSwitchComponent,
      selectors: [["app-feed-type-switch"]],
      inputs: {
        currentFeedType: "currentFeedType"
      },
      outputs: {
        feedTypeChange: "feedTypeChange"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 6,
      consts: [[1, "switcher"], [1, "button", 3, "click", "ngClass"], ["width", "22", "height", "24"], ["href", "assets/images/icons.svg#feed-column"], [1, "divider"], ["href", "assets/images/icons.svg#feed-masonry"]],
      template: function FeedTypeSwitchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FeedTypeSwitchComponent_Template_button_click_1_listener() {
            return ctx.setFeedType(ctx.FEED_TYPE.COLUMN);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "use", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FeedTypeSwitchComponent_Template_button_click_5_listener() {
            return ctx.setFeedType(ctx.FEED_TYPE.MASONRY);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "use", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.currentFeedType === ctx.FEED_TYPE.COLUMN));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx.currentFeedType === ctx.FEED_TYPE.MASONRY));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
      styles: [".switcher[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  transform: translate(100%, -50%);\n  right: 0;\n  top: 50%;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n}\n.button.isActive[_ngcontent-%COMP%] {\n  color: var(--button);\n}\n.button[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:active {\n  color: var(--button);\n}\n\n.divider[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 24px;\n  border: solid 1px var(--mainContrastElement);\n  margin: 0 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmVlZC10eXBlLXN3aXRjaC9mZWVkLXR5cGUtc3dpdGNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUFGO0FBRUU7RUFDRSxvQkFBQTtBQUFKO0FBR0U7RUFDRSxvQkFBQTtBQURKOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FBRkYiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zd2l0Y2hlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgLTUwJSk7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICYuaXNBY3RpdmUge1xuICAgIGNvbG9yOiB2YXIoLS1idXR0b24pXG4gIH1cblxuICAmOmhvdmVyLCAmOmFjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbik7XG4gIH1cbn1cblxuLmRpdmlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1tYWluQ29udHJhc3RFbGVtZW50KTtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return FeedTypeSwitchComponent;
})();

/***/ }),

/***/ 52367:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/profile-posts-feed/profile-posts-feed.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePostsFeedComponent: () => (/* binding */ ProfilePostsFeedComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _ApiClient_backend_Post_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ApiClient/backend/Post/post */ 490);
/* harmony import */ var _directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/scroll-bottom.directive */ 58577);
/* harmony import */ var _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/post-card/post-card.component */ 23621);
/* harmony import */ var _components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/skeleton-card/skeleton-card.component */ 17685);
/* harmony import */ var _store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/profile/profile.selectors */ 43031);
/* harmony import */ var _store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store/profile/profile.actions */ 13198);
/* harmony import */ var _enums_feed_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @enums/feed-type */ 18296);
/* harmony import */ var _pipes_masonry_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/masonry.pipe */ 66933);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/skeleton */ 76301);
/* harmony import */ var _directives_masonry_feed_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directives/masonry-feed.directive */ 55372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 81383);



















function ProfilePostsFeedComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-post-card", 4);
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("post", post_r1);
  }
}
function ProfilePostsFeedComponent_Conditional_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-skeleton-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProfilePostsFeedComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](0, ProfilePostsFeedComponent_Conditional_1_For_1_Template, 1, 1, "app-post-card", 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ProfilePostsFeedComponent_Conditional_1_div_3_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "async");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r1.userPosts$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 3, ctx_r1.isLoadingFeed$));
  }
}
function ProfilePostsFeedComponent_Conditional_2_For_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "video", 8);
  }
  if (rf & 2) {
    const post_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r1.getImageUrl(post_r4), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function ProfilePostsFeedComponent_Conditional_2_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "p-skeleton", 9);
  }
}
function ProfilePostsFeedComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](1, ProfilePostsFeedComponent_Conditional_2_For_2_For_2_Template, 1, 1, "video", 8, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "masonry");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ProfilePostsFeedComponent_Conditional_2_For_2_Conditional_4_Template, 1, 0, "p-skeleton", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const idx_r5 = ctx.$index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](3, 1, ctx_r1.userPosts$, ctx_r1.masonryColumnNumber, idx_r5 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 5, ctx_r1.isLoadingFeed$) ? 4 : -1);
  }
}
function ProfilePostsFeedComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("fillEmptyPage", function ProfilePostsFeedComponent_Conditional_2_Template_section_fillEmptyPage_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.onMasonryInit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](1, ProfilePostsFeedComponent_Conditional_2_For_2_Template, 6, 7, "div", 7, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx_r1.masonryColumnArray);
  }
}
function ProfilePostsFeedComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "PROFILE_PAGE.NO_POSTS"), " ");
  }
}
let ProfilePostsFeedComponent = /*#__PURE__*/(() => {
  class ProfilePostsFeedComponent {
    constructor(store, translate) {
      this.store = store;
      this.translate = translate;
      this.isLoading = null;
      this.masonryFeedCount = 20;
      this.masonryColumnNumber = 3;
      this.masonryColumnArray = [];
      this.userPosts$ = this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_4__.selectUserPosts);
      this.isLoadingFeed$ = this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsLoadingProfileFeed);
      this.allPostLoaded$ = this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsAllUserPostsLoaded);
      this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
      this.FEED_TYPE = _enums_feed_type__WEBPACK_IMPORTED_MODULE_6__.FEED_TYPE;
    }
    ngOnDestroy() {
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
    }
    ngOnInit() {
      this.masonryColumnArray = Array.from({
        length: this.masonryColumnNumber
      });
    }
    onScrollingFinished(postCount) {
      if (!this.isLoading) {
        this.allPostLoaded$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.filter)(allPostLoaded => !allPostLoaded), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.ngUnsubscribe), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe(() => {
          this.store.dispatch((0,_store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_5__.getUserPostsAction)({
            count: postCount,
            userId: this.userId
          }));
        });
      }
    }
    onMasonryInit() {
      if (!this.isLoading) {
        this.allPostLoaded$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.filter)(allPostLoaded => !allPostLoaded), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.ngUnsubscribe), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe(() => {
          this.store.dispatch((0,_store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_5__.getUserPostsAction)({
            count: this.masonryFeedCount,
            userId: this.userId
          }));
        });
      }
    }
    getImageUrl(post) {
      return _ApiClient_backend_Post_post__WEBPACK_IMPORTED_MODULE_0__.Post.getUrlPostFileThumbnail({
        fileId: post.postFiles[0].fileId,
        userCreatorId: post.userCreatorId,
        id: post.postFiles[0].id
      });
    }
    static #_ = this.ɵfac = function ProfilePostsFeedComponent_Factory(t) {
      return new (t || ProfilePostsFeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ProfilePostsFeedComponent,
      selectors: [["app-profile-posts-feed"]],
      inputs: {
        userId: "userId",
        isLoading: "isLoading",
        feedType: "feedType"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 5,
      consts: [["appScrollBottom", "", 1, "profile-feed", 3, "scrollingFinished"], [1, "w-full"], ["appMasonryFeed", "", 1, "masonry-wrapper"], ["class", "pb-5 pt-5 text-center w-full text-2xl", 4, "ngIf"], [3, "post"], ["class", "w-full", 4, "ngIf"], ["appMasonryFeed", "", 1, "masonry-wrapper", 3, "fillEmptyPage"], [1, "flex", "flex-column", "gap-1"], [1, "masonry-image", 3, "src"], ["height", "200px", 1, "w-full"], [1, "pb-5", "pt-5", "text-center", "w-full", "text-2xl"]],
      template: function ProfilePostsFeedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("scrollingFinished", function ProfilePostsFeedComponent_Template_div_scrollingFinished_0_listener() {
            return ctx.onScrollingFinished(ctx.masonryColumnNumber * 2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfilePostsFeedComponent_Conditional_1_Template, 5, 5, "div", 1)(2, ProfilePostsFeedComponent_Conditional_2_Template, 3, 0, "section", 2)(3, ProfilePostsFeedComponent_div_3_Template, 3, 3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](1, ctx.feedType === ctx.FEED_TYPE.COLUMN ? 1 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](2, ctx.feedType === ctx.FEED_TYPE.MASONRY ? 2 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 3, ctx.userPosts$)) == null ? null : tmp_2_0.length) === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__.PostCardComponent, _directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_1__.ScrollBottomDirective, _components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_3__.SkeletonCardComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _pipes_masonry_pipe__WEBPACK_IMPORTED_MODULE_7__.MasonryPipe, primeng_skeleton__WEBPACK_IMPORTED_MODULE_17__.SkeletonModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_17__.Skeleton, _directives_masonry_feed_directive__WEBPACK_IMPORTED_MODULE_8__.MasonryFeedDirective],
      styles: [".profile-feed[_ngcontent-%COMP%] {\n  margin: 40px 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 100%;\n}\n\n.masonry-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  gap: 4px;\n  grid-auto-flow: column;\n}\n\n.masonry-column[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.masonry-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZmlsZS1wb3N0cy1mZWVkL3Byb2ZpbGUtcG9zdHMtZmVlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtZmVlZCB7XG4gIG1hcmdpbjogNDBweCAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIHdpZHRoOiAxMDAlXG59XG5cbi5tYXNvbnJ5LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA0cHg7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG59XG5cbi5tYXNvbnJ5LWNvbHVtbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFzb25yeS1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
  return ProfilePostsFeedComponent;
})();

/***/ }),

/***/ 55372:
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/masonry-feed.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MasonryFeedDirective: () => (/* binding */ MasonryFeedDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);


let MasonryFeedDirective = /*#__PURE__*/(() => {
  class MasonryFeedDirective {
    constructor(el) {
      this.el = el;
      this.fillEmptyPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
      this.window = window;
    }
    ngAfterViewInit() {
      const heightOfElement = this.el.nativeElement.scrollHeight;
      const innerHeight = this.window.innerHeight;
      if (heightOfElement < innerHeight) {
        this.fillEmptyPage.emit();
      }
    }
    static #_ = this.ɵfac = function MasonryFeedDirective_Factory(t) {
      return new (t || MasonryFeedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MasonryFeedDirective,
      selectors: [["", "appMasonryFeed", ""]],
      outputs: {
        fillEmptyPage: "fillEmptyPage"
      },
      standalone: true
    });
  }
  return MasonryFeedDirective;
})();

/***/ }),

/***/ 18296:
/*!*******************************************!*\
  !*** ./src/app/shared/enums/feed-type.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FEED_TYPE: () => (/* binding */ FEED_TYPE)
/* harmony export */ });
var FEED_TYPE = /*#__PURE__*/function (FEED_TYPE) {
  FEED_TYPE["COLUMN"] = "column";
  FEED_TYPE["MASONRY"] = "masonry";
  return FEED_TYPE;
}(FEED_TYPE || {});

/***/ }),

/***/ 66933:
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/masonry.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MasonryPipe: () => (/* binding */ MasonryPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);


let MasonryPipe = /*#__PURE__*/(() => {
  class MasonryPipe {
    constructor() {
      this.currentObs = null;
      this.sub = null;
      this.latestValue = null;
      this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    }
    dispose() {
      if (this.sub) {
        this.sub.unsubscribe();
        this.sub = null;
      }
    }
    ngOnDestroy() {
      this.dispose();
      this.currentObs = null;
    }
    subscribe(obs) {
      this.currentObs = obs;
      this.sub = obs.subscribe({
        next: res => {
          this.latestValue = res;
          this.cdr.markForCheck();
        },
        error: error => {
          throw error;
        }
      });
    }
    transform(obs, numColumns, colNum) {
      if (!obs) {
        this.dispose();
        return null;
      }
      if (obs !== this.currentObs) {
        this.dispose();
        this.subscribe(obs);
      }
      if (!Array.isArray(this.latestValue)) {
        return null;
      } else {
        return this.latestValue.filter((_, index) => index % numColumns === colNum - 1);
      }
    }
    static #_ = this.ɵfac = function MasonryPipe_Factory(t) {
      return new (t || MasonryPipe)();
    };
    static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "masonry",
      type: MasonryPipe,
      pure: false,
      standalone: true
    });
  }
  return MasonryPipe;
})();

/***/ }),

/***/ 1559:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/combineLatest.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combineLatest: () => (/* binding */ combineLatest)
/* harmony export */ });
/* harmony import */ var _observable_combineLatest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/combineLatest */ 19999);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 50819);
/* harmony import */ var _util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/argsOrArgArray */ 41303);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 38067);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/pipe */ 95682);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 4083);






function combineLatest(...args) {
  const resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popResultSelector)(args);
  return resultSelector ? (0,_util_pipe__WEBPACK_IMPORTED_MODULE_1__.pipe)(combineLatest(...args), (0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_2__.mapOneOrManyArgs)(resultSelector)) : (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => {
    (0,_observable_combineLatest__WEBPACK_IMPORTED_MODULE_4__.combineLatestInit)([source, ...(0,_util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_5__.argsOrArgArray)(args)])(subscriber);
  });
}

/***/ }),

/***/ 85647:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/combineLatestWith.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combineLatestWith: () => (/* binding */ combineLatestWith)
/* harmony export */ });
/* harmony import */ var _combineLatest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combineLatest */ 1559);

function combineLatestWith(...otherSources) {
  return (0,_combineLatest__WEBPACK_IMPORTED_MODULE_0__.combineLatest)(...otherSources);
}

/***/ }),

/***/ 41303:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/argsOrArgArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   argsOrArgArray: () => (/* binding */ argsOrArgArray)
/* harmony export */ });
const {
  isArray
} = Array;
function argsOrArgArray(args) {
  return args.length === 1 && isArray(args[0]) ? args[0] : args;
}

/***/ }),

/***/ 36171:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-divider.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Divider: () => (/* binding */ Divider),
/* harmony export */   DividerModule: () => (/* binding */ DividerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);





/**
 * Divider is used to separate contents.
 * @group Components
 */
const _c0 = ["*"];
let Divider = /*#__PURE__*/(() => {
  class Divider {
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
     * Specifies the orientation.
     * @group Props
     */
    layout = 'horizontal';
    /**
     * Border style type.
     * @group Props
     */
    type = 'solid';
    /**
     * Alignment of the content.
     * @group Props
     */
    align;
    containerClass() {
      return {
        'p-divider p-component': true,
        'p-divider-horizontal': this.layout === 'horizontal',
        'p-divider-vertical': this.layout === 'vertical',
        'p-divider-solid': this.type === 'solid',
        'p-divider-dashed': this.type === 'dashed',
        'p-divider-dotted': this.type === 'dotted',
        'p-divider-left': this.layout === 'horizontal' && (!this.align || this.align === 'left'),
        'p-divider-center': this.layout === 'horizontal' && this.align === 'center' || this.layout === 'vertical' && (!this.align || this.align === 'center'),
        'p-divider-right': this.layout === 'horizontal' && this.align === 'right',
        'p-divider-top': this.layout === 'vertical' && this.align === 'top',
        'p-divider-bottom': this.layout === 'vertical' && this.align === 'bottom'
      };
    }
    static ɵfac = function Divider_Factory(t) {
      return new (t || Divider)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Divider,
      selectors: [["p-divider"]],
      hostAttrs: [1, "p-element"],
      inputs: {
        style: "style",
        styleClass: "styleClass",
        layout: "layout",
        type: "type",
        align: "align"
      },
      ngContentSelectors: _c0,
      decls: 3,
      vars: 6,
      consts: [["role", "separator", 3, "ngClass", "ngStyle"], [1, "p-divider-content"]],
      template: function Divider_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass())("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx.layout)("data-pc-name", "divider");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
      styles: ["@layer primeng{.p-divider-horizontal{display:flex;width:100%;position:relative;align-items:center}.p-divider-horizontal:before{position:absolute;display:block;top:50%;left:0;width:100%;content:\"\"}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{min-height:100%;margin:0 1rem;display:flex;position:relative;justify-content:center}.p-divider-vertical:before{position:absolute;display:block;top:0;left:50%;height:100%;content:\"\"}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-top-style:dotted}.p-divider-dotted.p-divider-horizontal:before{border-left-style:dotted}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Divider;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DividerModule = /*#__PURE__*/(() => {
  class DividerModule {
    static ɵfac = function DividerModule_Factory(t) {
      return new (t || DividerModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DividerModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
    });
  }
  return DividerModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=818.js.map