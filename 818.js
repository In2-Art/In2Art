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
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/layout */ 87912);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ApiClient_Backend_components_image_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ApiClient.Backend/components/image/image.component */ 69379);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var _shared_components_feed_type_switch_feed_type_switch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/feed-type-switch/feed-type-switch.component */ 24903);
/* harmony import */ var _shared_components_profile_posts_feed_profile_posts_feed_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/profile-posts-feed/profile-posts-feed.component */ 52367);






















const _c0 = (a0, a1) => ["/", a0, a1];
const _c1 = (a0, a1, a2) => ["/", a0, a1, a2];
const _c2 = a0 => ({
  isActive: a0
});
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
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](3, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx_r0.locale$), ctx_r0.URLS.SET_PHOTO));
  }
}
function ProfileComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ProfileComponent_Conditional_1_Conditional_1_a_4_Template, 4, 6, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "app-image", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 16)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " Painter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const LoginInfo_r2 = ctx;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]("@" + LoginInfo_r2.userNickname.nicknameDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.isCurrentUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("folder", "UserPictures")("idPicture", LoginInfo_r2.pictureId)("userId", LoginInfo_r2.userProfile.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", LoginInfo_r2.userProfile.name, " ");
  }
}
function ProfileComponent_Conditional_1_div_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "use", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "use", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](12, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 4, ctx_r0.locale$), ctx_r0.URLS.NEW, ctx_r0.URLS.POST));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 6, "BTN.CREATE_POST"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](16, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 8, ctx_r0.locale$), ctx_r0.URLS.NEW, ctx_r0.URLS.ARTWORK));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 10, "BTN.ADD_ARTWORK"));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ProfileComponent_Conditional_1_div_4_Conditional_9_Template, 14, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](7, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, ctx_r0.locale$), ctx_r0.URLS.EDIT_PROFILE));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 5, "BTN.EDIT_PROFILE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](9, !ctx_r0.isMobileScreen ? 9 : -1);
  }
}
function ProfileComponent_Conditional_1_ul_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-feed-type-switch", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("feedTypeChange", function ProfileComponent_Conditional_1_ul_8_Conditional_5_Template_app_feed_type_switch_feedTypeChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.setFeedType(ctx_r0.currentTab, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentFeedType", ctx_r0.postFeedType);
  }
}
function ProfileComponent_Conditional_1_ul_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-feed-type-switch", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("feedTypeChange", function ProfileComponent_Conditional_1_ul_8_Conditional_10_Template_app_feed_type_switch_feedTypeChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.setFeedType(ctx_r0.currentTab, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentFeedType", ctx_r0.artworkFeedType);
  }
}
function ProfileComponent_Conditional_1_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ul", 29)(1, "li", 30)(2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_Conditional_1_ul_8_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.setTab(ctx_r0.PROFILE_TABS.POSTS));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ProfileComponent_Conditional_1_ul_8_Conditional_5_Template, 1, 1, "app-feed-type-switch", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "li", 30)(7, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_Conditional_1_ul_8_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.setTab(ctx_r0.PROFILE_TABS.GALLERY));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ProfileComponent_Conditional_1_ul_8_Conditional_10_Template, 1, 1, "app-feed-type-switch", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "li")(12, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_Conditional_1_ul_8_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.setTab(ctx_r0.PROFILE_TABS.COLLECT));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "li")(16, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_Conditional_1_ul_8_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.setTab(ctx_r0.PROFILE_TABS.ABOUT));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](18, _c2, ctx_r0.currentTab === ctx_r0.PROFILE_TABS.POSTS));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 10, "PROFILE_PAGE.POSTS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](5, ctx_r0.currentTab === ctx_r0.PROFILE_TABS.POSTS && !ctx_r0.isMobileScreen ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](20, _c2, ctx_r0.currentTab === ctx_r0.PROFILE_TABS.GALLERY));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 12, "PROFILE_PAGE.ARTWORKS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](10, ctx_r0.currentTab === ctx_r0.PROFILE_TABS.GALLERY && !ctx_r0.isMobileScreen ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](22, _c2, ctx_r0.currentTab === ctx_r0.PROFILE_TABS.COLLECT));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 14, "PROFILE_PAGE.COLLECTIONS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](24, _c2, ctx_r0.currentTab === ctx_r0.PROFILE_TABS.ABOUT));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 16, "PROFILE_PAGE.ABOUT"), " ");
  }
}
function ProfileComponent_Conditional_1_div_10_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-feed-type-switch", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("feedTypeChange", function ProfileComponent_Conditional_1_div_10_Conditional_18_Template_app_feed_type_switch_feedTypeChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.setFeedType(ctx_r0.currentTab, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentFeedType", ctx_r0.artworkFeedType);
  }
}
function ProfileComponent_Conditional_1_div_10_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-feed-type-switch", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("feedTypeChange", function ProfileComponent_Conditional_1_div_10_Conditional_19_Template_app_feed_type_switch_feedTypeChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.setFeedType(ctx_r0.currentTab, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentFeedType", ctx_r0.postFeedType);
  }
}
function ProfileComponent_Conditional_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 34)(1, "ul", 35)(2, "li", 30)(3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_Conditional_1_div_10_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.setTab(ctx_r0.PROFILE_TABS.POSTS));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "li", 30)(7, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_Conditional_1_div_10_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.setTab(ctx_r0.PROFILE_TABS.GALLERY));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "li")(11, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_Conditional_1_div_10_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.setTab(ctx_r0.PROFILE_TABS.COLLECT));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "li")(15, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_Conditional_1_div_10_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.setTab(ctx_r0.PROFILE_TABS.ABOUT));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, ProfileComponent_Conditional_1_div_10_Conditional_18_Template, 1, 1, "app-feed-type-switch", 32)(19, ProfileComponent_Conditional_1_div_10_Conditional_19_Template, 1, 1, "app-feed-type-switch", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](18, _c2, ctx_r0.currentTab === ctx_r0.PROFILE_TABS.POSTS));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 10, "PROFILE_PAGE.POSTS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](20, _c2, ctx_r0.currentTab === ctx_r0.PROFILE_TABS.GALLERY));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 12, "PROFILE_PAGE.ARTWORKS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](22, _c2, ctx_r0.currentTab === ctx_r0.PROFILE_TABS.COLLECT));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 14, "PROFILE_PAGE.COLLECTIONS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](24, _c2, ctx_r0.currentTab === ctx_r0.PROFILE_TABS.ABOUT));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 16, "PROFILE_PAGE.ABOUT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](18, ctx_r0.currentTab === ctx_r0.PROFILE_TABS.GALLERY && ctx_r0.isMobileScreen ? 18 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](19, ctx_r0.currentTab === ctx_r0.PROFILE_TABS.POSTS && ctx_r0.isMobileScreen ? 19 : -1);
  }
}
function ProfileComponent_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-profile-posts-feed", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("feedType", ctx_r0.postFeedType)("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 3, ctx_r0.isLoading$))("userId", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 5, ctx_r0.userLoginInfo$).id);
  }
}
function ProfileComponent_Conditional_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_Conditional_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Collections");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_Conditional_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_Conditional_1_Conditional_1_Template, 12, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ProfileComponent_Conditional_1_div_4_Template, 11, 10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " I found I could say things with color and shapes that I couldn\u2019t say any other way \u2013 things I had no words for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ProfileComponent_Conditional_1_ul_8_Template, 19, 26, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ProfileComponent_Conditional_1_div_10_Template, 20, 26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, ProfileComponent_Conditional_1_Conditional_12_Template, 3, 7, "app-profile-posts-feed", 9)(13, ProfileComponent_Conditional_1_div_13_Template, 2, 0, "div", 10)(14, ProfileComponent_Conditional_1_div_14_Template, 2, 0, "div", 10)(15, ProfileComponent_Conditional_1_div_15_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](1, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 8, ctx_r0.userLoginInfo$)) ? 1 : -1, tmp_1_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.isCurrentUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.isMobileScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.isMobileScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](12, ctx_r0.currentTab === ctx_r0.PROFILE_TABS.POSTS ? 12 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.currentTab === ctx_r0.PROFILE_TABS.GALLERY);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.currentTab === ctx_r0.PROFILE_TABS.COLLECT);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.currentTab === ctx_r0.PROFILE_TABS.ABOUT);
  }
}
function ProfileComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "p-progressSpinner", 37);
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
    constructor(store, breakpointObserver, route, translate) {
      this.store = store;
      this.breakpointObserver = breakpointObserver;
      this.route = route;
      this.translate = translate;
      this.locale$ = this.translate.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)({
        lang: this.translate.currentLang
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(event => event.lang));
      this.currentTab = PROFILE_TABS.POSTS;
      this.postFeedType = _enums_feed_type__WEBPACK_IMPORTED_MODULE_5__.FEED_TYPE.COLUMN;
      this.artworkFeedType = _enums_feed_type__WEBPACK_IMPORTED_MODULE_5__.FEED_TYPE.COLUMN;
      this.isCurrentUser = false;
      this.isMobileScreen = false;
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
        _this.breakpointObserver.observe(['(max-width: 768px)']).subscribe(res => {
          _this.isMobileScreen = res.matches;
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
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-user-profile"]],
      decls: 4,
      vars: 3,
      consts: [[1, "profile-wrapper"], [1, "profile-user"], [1, "flex", "flex-column", "w-full", "relative"], [1, "profile-divider"], ["class", "flex flex-column align-items-center justify-content-center w-full", 4, "ngIf"], [1, "profile-bio"], ["class", "feed-buttons-desktop", 4, "ngIf"], ["class", "feed-buttons-mobile", 4, "ngIf"], [1, "profile-feed"], [3, "feedType", "isLoading", "userId"], ["class", "profile-feed", 4, "ngIf"], [1, "user-nickname"], [1, "relative"], ["class", "image-link", 3, "routerLink", 4, "ngIf"], [1, "image-wrapper"], ["defaultImageUrl", "assets/videos/noUserVid.mp4", 3, "folder", "idPicture", "userId"], [1, "user-profile-name"], [1, "text-lg", "font-italic"], [1, "image-link", 3, "routerLink"], ["width", "56", "height", "56"], ["href", "assets/images/icons.svg#edit-photo"], [1, "flex", "flex-column", "align-items-center", "justify-content-center", "w-full"], [1, "w-fit", "flex", "flex-column", "gap-3", "align-self-start", "pl-3", "md:align-self-center", "md:pl-0"], ["type", "button", 1, "profile-button", 3, "routerLink"], ["width", "25", "height", "21"], ["href", "assets/images/icons.svg#edit-profile"], [1, "flex-grow-1", "text-center"], ["href", "assets/images/icons.svg#create-post"], ["href", "assets/images/icons.svg#add-artwork"], [1, "feed-buttons-desktop"], [1, "w-fit", "md:w-full", "flex", "justify-content-center", "relative"], ["type", "button", 1, "profile-tab", 3, "click", "ngClass"], [3, "currentFeedType"], [3, "feedTypeChange", "currentFeedType"], [1, "feed-buttons-mobile"], [1, "flex", "justify-content-around", "w-full", "pt-2", "pb-2"], [1, "profile-loader"], ["strokeWidth", "4"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_Conditional_1_Template, 16, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ProfileComponent_Conditional_3_Template, 2, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx.isLoading$) === false ? 1 : 3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _ApiClient_Backend_components_image_image_component__WEBPACK_IMPORTED_MODULE_6__.ImageComponent, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__.ProgressSpinner, _shared_components_feed_type_switch_feed_type_switch_component__WEBPACK_IMPORTED_MODULE_7__.FeedTypeSwitchComponent, _shared_components_profile_posts_feed_profile_posts_feed_component__WEBPACK_IMPORTED_MODULE_8__.ProfilePostsFeedComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
      styles: [".profile-wrapper[_ngcontent-%COMP%] {\n  padding: 0 0 90px 0;\n  position: relative;\n  display: grid;\n  width: 100%;\n  grid-template-columns: 1fr;\n  justify-content: center;\n}\n@media (min-width: 768px) {\n  .profile-wrapper[_ngcontent-%COMP%] {\n    max-width: 80%;\n    margin: 2rem auto 0;\n    padding: 0;\n    column-gap: 54px;\n    grid-template-columns: 3fr 8fr;\n  }\n}\n@media (min-width: 1601px) {\n  .profile-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 3fr 8fr 3fr;\n  }\n}\n\n.profile-user[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding-top: 16px;\n}\n@media (min-width: 768px) {\n  .profile-user[_ngcontent-%COMP%] {\n    min-width: 240px;\n    max-width: 380px;\n    padding: 0;\n    gap: 0;\n    top: calc(70px + 2rem);\n    height: -moz-fit-content;\n    height: fit-content;\n    position: sticky;\n  }\n}\n\n.profile-divider[_ngcontent-%COMP%] {\n  display: none;\n  width: 100%;\n  border: solid 1px var(--linesOnNormalBackground);\n  margin: 1.5rem 0;\n}\n@media (min-width: 768px) {\n  .profile-divider[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.profile-bio[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n@media (min-width: 768px) {\n  .profile-bio[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n\n.profile-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.profile-tab[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 20px;\n  font-family: \"Bebas Neue\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n@media (min-width: 768px) {\n  .profile-tab[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n.profile-tab.isActive[_ngcontent-%COMP%] {\n  color: var(--button);\n}\n.profile-tab[_ngcontent-%COMP%]:hover {\n  color: var(--button);\n}\n.profile-tab[_ngcontent-%COMP%]:active {\n  color: var(--pressedButton);\n}\n\n.feed-buttons-desktop[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.feed-buttons-mobile[_ngcontent-%COMP%] {\n  z-index: 10;\n  background-color: var(--background);\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 69px;\n}\n.feed-buttons-mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--linesOnNormalBackground);\n  border-bottom: 1px solid var(--linesOnNormalBackground);\n}\n\n.profile-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-family: \"Roboto\", sans-serif;\n  background-color: var(--background);\n  font-size: 1rem;\n  font-weight: bold;\n  align-items: center;\n  justify-content: space-between;\n  display: flex;\n  gap: 1rem;\n  border: 1.5px solid var(--mainContrastElement);\n  border-radius: 6px;\n  height: 2rem;\n  padding: 0 1rem;\n  width: 100%;\n}\n.profile-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none;\n}\n.profile-button[_ngcontent-%COMP%]:hover {\n  color: var(--button);\n  border-color: var(--button);\n}\n.profile-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  color: var(--button);\n}\n.profile-button[_ngcontent-%COMP%]:active {\n  color: var(--pressedButton);\n  border-color: var(--pressedButton);\n}\n.profile-button[_ngcontent-%COMP%]:active   svg[_ngcontent-%COMP%] {\n  color: var(--pressedButton);\n}\n\n.image-link[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  cursor: pointer;\n}\n.image-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.5s ease;\n}\n.image-link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(26, 26, 26, 0.75);\n}\n.image-link[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.image-wrapper[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  content: \"\";\n  height: 162px;\n  background: var(--avatarGradient);\n}\n\n.profile-highlights[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.set-image-button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 50;\n  bottom: 0;\n  right: 0;\n}\n@media (min-width: 768px) {\n  .set-image-button[_ngcontent-%COMP%] {\n    bottom: 1rem;\n    right: 1rem;\n  }\n}\n\n.user-nickname[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 0.5rem 1rem;\n  color: var(--greyText);\n}\n@media (min-width: 768px) {\n  .user-nickname[_ngcontent-%COMP%] {\n    padding: 0 0 10px 0;\n    font-size: 20px;\n  }\n}\n\n.user-profile-name[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0 1rem;\n  font-family: \"Abhaya Libre\", serif;\n  width: 100%;\n  font-weight: bold;\n  font-size: 20px;\n  position: absolute;\n  bottom: 22px;\n  left: 0;\n}\n@media (min-width: 768px) {\n  .user-profile-name[_ngcontent-%COMP%] {\n    z-index: 10;\n    bottom: 0;\n  }\n}\n\n.profile-loader[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  grid-column: 1/3;\n}\n\n@media (min-width: 768px) {\n  .profile-feed[_ngcontent-%COMP%] {\n    padding-top: 40px;\n    grid-column-start: 2;\n    grid-row-start: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQVJGO0lBU0ksY0FBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsOEJBQUE7RUFFRjtBQUNGO0FBQUU7RUFoQkY7SUFpQkksa0NBQUE7RUFHRjtBQUNGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFHRjtBQURFO0VBVEY7SUFVSSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtJQUNBLE1BQUE7SUFDQSxzQkFBQTtJQUNBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxnQkFBQTtFQUlGO0FBQ0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdEQUFBO0VBQ0EsZ0JBQUE7QUFJRjtBQUZFO0VBTkY7SUFPSSxjQUFBO0VBS0Y7QUFDRjs7QUFGQTtFQUNFLGVBQUE7QUFLRjtBQUhFO0VBSEY7SUFJSSxVQUFBO0VBTUY7QUFDRjs7QUFIQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQU1GOztBQUhBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBTUY7QUFKRTtFQVZGO0lBV0ksZUFBQTtFQU9GO0FBQ0Y7QUFMRTtFQUNFLG9CQUFBO0FBT0o7QUFKRTtFQUNFLG9CQUFBO0FBTUo7QUFIRTtFQUNFLDJCQUFBO0FBS0o7O0FBREE7RUFDRSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUlGO0FBRkU7RUFDRSxvREFBQTtFQUNBLHVEQUFBO0FBSUo7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHRjtBQURFO0VBQ0UsVUFBQTtBQUdKO0FBQUU7RUFDRSxvQkFBQTtFQUNBLDJCQUFBO0FBRUo7QUFBSTtFQUNFLG9CQUFBO0FBRU47QUFFRTtFQUNFLDJCQUFBO0VBQ0Esa0NBQUE7QUFBSjtBQUVJO0VBQ0UsMkJBQUE7QUFBTjs7QUFLQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFGRjtBQUlFO0VBQ0UsVUFBQTtFQUNBLDZCQUFBO0FBRko7QUFLRTtFQUNFLHdDQUFBO0FBSEo7QUFLSTtFQUNFLFVBQUE7QUFITjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUxGO0FBT0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7QUFMSjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFORjtBQVFFO0VBTkY7SUFPSSxZQUFBO0lBQ0EsV0FBQTtFQUxGO0FBQ0Y7O0FBUUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQUxGO0FBT0U7RUFMRjtJQU1JLG1CQUFBO0lBQ0EsZUFBQTtFQUpGO0FBQ0Y7O0FBT0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBQUpGO0FBTUU7RUFaRjtJQWFJLFdBQUE7SUFDQSxTQUFBO0VBSEY7QUFDRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUhGOztBQVFFO0VBRkY7SUFHSSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsaUJBQUE7RUFKRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDAgMCA5MHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDJyZW0gYXV0byAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sdW1uLWdhcDogNTRweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA4ZnI7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTYwMXB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgOGZyIDNmcjtcbiAgfVxufVxuXG4ucHJvZmlsZS11c2VyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMTZweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBtaW4td2lkdGg6IDI0MHB4O1xuICAgIG1heC13aWR0aDogMzgwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBnYXA6IDA7XG4gICAgdG9wOiBjYWxjKDcwcHggKyAycmVtKTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gIH1cbn1cblxuLnByb2ZpbGUtZGl2aWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1saW5lc09uTm9ybWFsQmFja2dyb3VuZCk7XG4gIG1hcmdpbjogMS41cmVtIDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLnByb2ZpbGUtYmlvIHtcbiAgcGFkZGluZzogMCAxcmVtO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuLnByb2ZpbGUtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvZmlsZS10YWIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiQmViYXMgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG5cbiAgJi5pc0FjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbik7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tcHJlc3NlZEJ1dHRvbik7XG4gIH1cbn1cblxuLmZlZWQtYnV0dG9ucy1kZXNrdG9wIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmVlZC1idXR0b25zLW1vYmlsZSB7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNjlweDtcblxuICB1bCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpbmVzT25Ob3JtYWxCYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGluZXNPbk5vcm1hbEJhY2tncm91bmQpO1xuICB9XG59XG5cbi5wcm9maWxlLWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tbWFpbkNvbnRyYXN0RWxlbWVudCk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiAycmVtO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIHdpZHRoOiAxMDAlO1xuXG4gIHN2ZyB7XG4gICAgZmlsbDogbm9uZVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbik7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24pO1xuXG4gICAgc3ZnIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24pO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tcHJlc3NlZEJ1dHRvbik7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmVzc2VkQnV0dG9uKTtcblxuICAgIHN2ZyB7XG4gICAgICBjb2xvcjogdmFyKC0tcHJlc3NlZEJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cbi5pbWFnZS1saW5rIHtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJiBzdmcge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2U7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAyNiwgMjYsIDAuNzUpO1xuXG4gICAgc3ZnIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG59XG5cbi5pbWFnZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcblxuICAmOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29udGVudDogJyc7XG4gICAgaGVpZ2h0OiAxNjJweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hdmF0YXJHcmFkaWVudCk7XG4gIH1cbn1cblxuLnByb2ZpbGUtaGlnaGxpZ2h0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG59XG5cbi5zZXQtaW1hZ2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1MDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBib3R0b206IDFyZW07XG4gICAgcmlnaHQ6IDFyZW07XG4gIH1cbn1cblxuLnVzZXItbmlja25hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBjb2xvcjogdmFyKC0tZ3JleVRleHQpO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbi51c2VyLXByb2ZpbGUtbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiQWJoYXlhIExpYnJlXCIsIHNlcmlmO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIycHg7XG4gIGxlZnQ6IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgei1pbmRleDogMTA7XG4gICAgYm90dG9tOiAwXG4gIH1cbn1cblxuLnByb2ZpbGUtbG9hZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLWNvbHVtbjogMS8zO1xufVxuXG4ucHJvZmlsZS1mZWVkIHtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
      styles: [".switcher[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 0.5rem 0;\n  justify-content: space-around;\n  border-bottom: 1px solid var(--linesOnNormalBackground);\n}\n@media (min-width: 768px) {\n  .switcher[_ngcontent-%COMP%] {\n    width: -moz-fit-content;\n    width: fit-content;\n    position: absolute;\n    transform: translate(100%, -50%);\n    right: 0;\n    top: 50%;\n    border: none;\n  }\n}\n\n.button[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  width: 100%;\n}\n.button.isActive[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  height: 2px;\n  background-color: var(--mainContrastElement);\n  width: 100%;\n  left: 0;\n  right: 0;\n  bottom: -9px;\n}\n@media (min-width: 768px) {\n  .button[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .button.isActive[_ngcontent-%COMP%] {\n    color: var(--button);\n  }\n  .button.isActive[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n  .button[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:active {\n    color: var(--button);\n  }\n}\n\n.divider[_ngcontent-%COMP%] {\n  display: none;\n  width: 100%;\n  height: 24px;\n  border: solid 1px var(--mainContrastElement);\n  margin: 0 0.5rem;\n}\n@media (min-width: 768px) {\n  .divider[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmVlZC10eXBlLXN3aXRjaC9mZWVkLXR5cGUtc3dpdGNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdURBQUE7QUFBRjtBQUVFO0VBUEY7SUFRSSx1QkFBQTtJQUFBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQ0FBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsWUFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFFSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFBTjtBQUlFO0VBdkJGO0lBd0JJLFdBQUE7RUFERjtFQUdFO0lBQ0Usb0JBQUE7RUFESjtFQUdJO0lBQ0UsYUFBQTtFQUROO0VBS0U7SUFDRSxvQkFBQTtFQUhKO0FBQ0Y7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FBTEY7QUFPRTtFQVBGO0lBUUksY0FBQTtFQUpGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zd2l0Y2hlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saW5lc09uTm9ybWFsQmFja2dyb3VuZCk7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAtNTAlKTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn1cblxuLmJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICYuaXNBY3RpdmUge1xuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBoZWlnaHQ6IDJweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db250cmFzdEVsZW1lbnQpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IC05cHg7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IGF1dG87XG5cbiAgICAmLmlzQWN0aXZlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24pO1xuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyLCAmOmFjdGl2ZSB7XG4gICAgICBjb2xvcjogdmFyKC0tYnV0dG9uKTtcbiAgICB9XG5cbiAgfVxufVxuXG4uZGl2aWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLW1haW5Db250cmFzdEVsZW1lbnQpO1xuICBtYXJnaW46IDAgMC41cmVtO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _ApiClient_backend_Post_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ApiClient/backend/Post/post */ 490);
/* harmony import */ var _directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/scroll-bottom.directive */ 58577);
/* harmony import */ var _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/post-card/post-card.component */ 23621);
/* harmony import */ var _components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/skeleton-card/skeleton-card.component */ 17685);
/* harmony import */ var _store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/profile/profile.selectors */ 43031);
/* harmony import */ var _store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store/profile/profile.actions */ 13198);
/* harmony import */ var _enums_feed_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @enums/feed-type */ 18296);
/* harmony import */ var _pipes_masonry_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/masonry.pipe */ 66933);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/skeleton */ 76301);
/* harmony import */ var _directives_masonry_feed_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directives/masonry-feed.directive */ 55372);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @enums/urls */ 94317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store */ 81383);























const _c0 = (a0, a1, a2) => ["/", a0, a1, a2];
function ProfilePostsFeedComponent_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-post-card", 4);
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("post", post_r1);
  }
}
function ProfilePostsFeedComponent_Conditional_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-skeleton-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProfilePostsFeedComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](1, ProfilePostsFeedComponent_Conditional_1_For_2_Template, 1, 1, "app-post-card", 4, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ProfilePostsFeedComponent_Conditional_1_div_4_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, ctx_r1.userPosts$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 3, ctx_r1.isLoadingFeed$));
  }
}
function ProfilePostsFeedComponent_Conditional_2_For_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "video", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const post_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, ctx_r1.locale$), ctx_r1.URLS.POST, post_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r1.getImageUrl(post_r4), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function ProfilePostsFeedComponent_Conditional_2_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "p-skeleton", 10);
  }
}
function ProfilePostsFeedComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](1, ProfilePostsFeedComponent_Conditional_2_For_2_For_2_Template, 3, 8, "a", 9, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "masonry");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ProfilePostsFeedComponent_Conditional_2_For_2_Conditional_4_Template, 1, 0, "p-skeleton", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const idx_r5 = ctx.$index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](3, 1, ctx_r1.userPosts$, ctx_r1.masonryColumnNumber, idx_r5 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](4, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 5, ctx_r1.isLoadingFeed$) ? 4 : -1);
  }
}
function ProfilePostsFeedComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("fillEmptyPage", function ProfilePostsFeedComponent_Conditional_2_Template_section_fillEmptyPage_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onMasonryInit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](1, ProfilePostsFeedComponent_Conditional_2_For_2_Template, 6, 7, "div", 8, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](ctx_r1.masonryColumnArray);
  }
}
function ProfilePostsFeedComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "PROFILE_PAGE.NO_POSTS"), " ");
  }
}
let ProfilePostsFeedComponent = /*#__PURE__*/(() => {
  class ProfilePostsFeedComponent {
    constructor(store, translate, elementRef, cdr) {
      this.store = store;
      this.translate = translate;
      this.elementRef = elementRef;
      this.cdr = cdr;
      this.isLoading = null;
      this.masonryColumnNumber = 2;
      this.masonryColumnArray = [];
      this.userPosts$ = this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_4__.selectUserPosts);
      this.isLoadingFeed$ = this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsLoadingProfileFeed);
      this.allPostLoaded$ = this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsAllUserPostsLoaded);
      this.locale$ = this.translate.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.startWith)({
        lang: this.translate.currentLang
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(event => event.lang));
      this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
      this.FEED_TYPE = _enums_feed_type__WEBPACK_IMPORTED_MODULE_6__.FEED_TYPE;
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_9__.URLS;
    }
    onResize() {
      this.calculateColumns();
    }
    ngOnDestroy() {
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
    }
    ngOnInit() {
      this.calculateColumns();
      this.store.dispatch((0,_store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_5__.getUserPostsInitAction)({
        userId: this.userId,
        count: this.masonryColumnNumber * 5
      }));
    }
    onScrollingFinished(postCount) {
      if (!this.isLoading) {
        this.allPostLoaded$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.filter)(allPostLoaded => !allPostLoaded), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.ngUnsubscribe), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(() => {
          this.store.dispatch((0,_store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_5__.getUserPostsAction)({
            count: postCount,
            userId: this.userId
          }));
        });
      }
    }
    onMasonryInit() {
      if (!this.isLoading) {
        this.allPostLoaded$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.filter)(allPostLoaded => !allPostLoaded), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.ngUnsubscribe), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(() => {
          this.store.dispatch((0,_store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_5__.getUserPostsAction)({
            count: this.masonryColumnNumber * 3,
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
    calculateColumns() {
      const elementWidth = this.elementRef.nativeElement.offsetWidth;
      console.log(elementWidth);
      this.masonryColumnNumber = Math.floor(elementWidth / 220) === 1 ? 2 : Math.floor(elementWidth / 220);
      this.masonryColumnArray = Array.from({
        length: this.masonryColumnNumber
      });
      console.log(this.masonryColumnNumber);
      this.cdr.detectChanges();
    }
    static #_ = this.ɵfac = function ProfilePostsFeedComponent_Factory(t) {
      return new (t || ProfilePostsFeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: ProfilePostsFeedComponent,
      selectors: [["app-profile-posts-feed"]],
      hostBindings: function ProfilePostsFeedComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("resize", function ProfilePostsFeedComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        userId: "userId",
        isLoading: "isLoading",
        feedType: "feedType"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["appScrollBottom", "", 1, "profile-feed", 3, "scrollingFinished"], [1, "column-feed-wrapper"], ["appMasonryFeed", "", 1, "masonry-feed-wrapper"], [1, "pb-5", "pt-5", "text-center", "w-full", "text-2xl"], [3, "post"], ["class", "w-full", 4, "ngIf"], [1, "w-full"], ["appMasonryFeed", "", 1, "masonry-feed-wrapper", 3, "fillEmptyPage"], [1, "flex", "flex-column", "gap-1", "masonry-column"], [1, "flex", 3, "routerLink"], ["height", "2rem", 1, "w-full"], [1, "masonry-image", 3, "src"]],
      template: function ProfilePostsFeedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("scrollingFinished", function ProfilePostsFeedComponent_Template_div_scrollingFinished_0_listener() {
            return ctx.onScrollingFinished(ctx.masonryColumnNumber * 2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProfilePostsFeedComponent_Conditional_1_Template, 6, 5, "section", 1)(2, ProfilePostsFeedComponent_Conditional_2_Template, 3, 0, "section", 2)(3, ProfilePostsFeedComponent_Conditional_3_Template, 3, 3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](1, ctx.feedType === ctx.FEED_TYPE.COLUMN ? 1 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](2, ctx.feedType === ctx.FEED_TYPE.MASONRY ? 2 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](3, ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 3, ctx.userPosts$)) == null ? null : tmp_2_0.length) === 0 && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 5, ctx.isLoadingFeed$) === false ? 3 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__.PostCardComponent, _directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_1__.ScrollBottomDirective, _components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_3__.SkeletonCardComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _pipes_masonry_pipe__WEBPACK_IMPORTED_MODULE_7__.MasonryPipe, primeng_skeleton__WEBPACK_IMPORTED_MODULE_20__.SkeletonModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_20__.Skeleton, _directives_masonry_feed_directive__WEBPACK_IMPORTED_MODULE_8__.MasonryFeedDirective, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterLink],
      styles: [".profile-feed[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 100%;\n}\n\n.masonry-feed-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  gap: 4px;\n  grid-auto-flow: column;\n}\n\n.column-feed-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n@media (min-width: 768px) {\n  .column-feed-wrapper[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n}\n\n.masonry-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  object-fit: cover;\n  aspect-ratio: 1/1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZmlsZS1wb3N0cy1mZWVkL3Byb2ZpbGUtcG9zdHMtZmVlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxNQUFBO0FBQ0Y7QUFDRTtFQUxGO0lBTUksU0FBQTtFQUVGO0FBQ0Y7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUZGIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtZmVlZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXNvbnJ5LWZlZWQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDRweDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbn1cblxuLmNvbHVtbi1mZWVkLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgZ2FwOiAxcmVtXG4gIH1cbn1cblxuLm1hc29ucnktY29sdW1uIHtcbiAgLy9tYXgtd2lkdGg6IDIzNXB4O1xufVxuXG4ubWFzb25yeS1pbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
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