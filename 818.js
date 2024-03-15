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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/profile/profile.selectors */ 43031);
/* harmony import */ var _store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/profile/profile.actions */ 13198);
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/auth/auth.selectors */ 47393);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @enums/urls */ 94317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ApiClient_Backend_components_image_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ApiClient.Backend/components/image/image.component */ 69379);
/* harmony import */ var _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/post-card/post-card.component */ 23621);
/* harmony import */ var _shared_components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/skeleton-card/skeleton-card.component */ 17685);
/* harmony import */ var _shared_directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/scroll-bottom.directive */ 58577);



















const _c0 = (a0, a1) => ["/", a0, a1];
const _c1 = (a0, a1, a2) => ["/", a0, a1, a2];
function ProfileComponent_div_2_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "use", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](3, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx_r0.locale$), ctx_r0.URLS.SET_PHOTO));
  }
}
function ProfileComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ProfileComponent_div_2_a_4_Template, 4, 6, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "app-image", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const LoginInfo_r2 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]("@" + LoginInfo_r2.userNickname.nicknameDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 6, ctx_r0.isCurrentUserProfile$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("folder", "UserPictures")("idPicture", LoginInfo_r2.pictureId)("userId", LoginInfo_r2.userProfile.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](LoginInfo_r2.userProfile.name);
  }
}
function ProfileComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "use", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "use", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "use", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](18, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 6, ctx_r0.locale$), ctx_r0.URLS.EDIT_PROFILE));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 8, "BTN.EDIT_PROFILE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](21, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 10, ctx_r0.locale$), ctx_r0.URLS.NEW, ctx_r0.URLS.POST));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 12, "BTN.CREATE_POST"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](25, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 14, ctx_r0.locale$), ctx_r0.URLS.NEW, ctx_r0.URLS.ARTWORK));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 16, "BTN.ADD_ARTWORK"));
  }
}
function ProfileComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "PROFILE_PAGE.NO_POSTS"), " ");
  }
}
function ProfileComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-post-card", 26);
  }
  if (rf & 2) {
    const post_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("post", post_r3);
  }
}
function ProfileComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-skeleton-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
let ProfileComponent = /*#__PURE__*/(() => {
  class ProfileComponent {
    constructor(store, route, translate) {
      this.store = store;
      this.route = route;
      this.translate = translate;
      this.locale$ = this.translate.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)({
        lang: this.translate.currentLang
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(event => event.lang));
      this.count = 4;
      this.userPosts$ = this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_1__.selectUserPosts);
      this.isLoading$ = this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_1__.selectIsLoadingProfile);
      this.isLoadingFeed$ = this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_1__.selectIsLoadingProfileFeed);
      this.canUpload$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCanUpload);
      this.userLoginInfo$ = this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_1__.selectUserLoginInfo);
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_4__.URLS;
    }
    ngOnInit() {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.isCurrentUserProfile$ = _this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatestWith)(_this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCurrentUserNickname)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([params, currentUser]) => {
          _this.store.dispatch((0,_store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_2__.getLoginInfoAction)({
            nicknameUrl: params['userSlug']
          }));
          return params['userSlug'] === currentUser;
        }));
      })();
    }
    onScrollingFinished() {
      this.isLoading$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatestWith)(this.userLoginInfo$), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.filter)(([isLoading]) => !isLoading), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.take)(1)).subscribe(([, userInfo]) => {
        this.store.dispatch((0,_store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_2__.getUserPostsAction)({
          count: this.count,
          userId: userInfo.id
        }));
      });
    }
    static #_ = this.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_15__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-user-profile"]],
      decls: 14,
      vars: 14,
      consts: [[1, "profile-wrapper"], [1, "profile-user"], ["class", "flex flex-column", 4, "ngIf"], ["class", "profile-controls", 4, "ngIf"], ["class", "pb-5 pt-5 text-center w-full text-2xl", 4, "ngIf"], ["appScrollBottom", "", 1, "profile-feed", 3, "scrollingFinished"], ["class", "w-full", 4, "ngIf"], [1, "flex", "flex-column"], [1, "user-nickname"], [1, "relative"], ["class", "image-link", 3, "routerLink", 4, "ngIf"], [1, "image-wrapper"], ["defaultImageUrl", "assets/videos/noUserVid.mp4", 3, "folder", "idPicture", "userId"], [1, "user-profile-name"], [1, "image-link", 3, "routerLink"], ["width", "56", "height", "56"], ["href", "assets/images/icons.svg#edit-photo"], [1, "profile-controls"], [1, "w-fit", "flex", "flex-column", "gap-3"], ["type", "button", 1, "profile-button", 3, "routerLink"], ["width", "25", "height", "21"], ["href", "assets/images/icons.svg#edit-profile"], [1, "flex-grow-1", "text-center"], ["href", "assets/images/icons.svg#create-post"], ["href", "assets/images/icons.svg#add-artwork"], [1, "pb-5", "pt-5", "text-center", "w-full", "text-2xl"], [3, "post"], [1, "w-full"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ProfileComponent_div_2_Template, 10, 8, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ProfileComponent_div_4_Template, 23, 29, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ProfileComponent_div_6_Template, 3, 3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("scrollingFinished", function ProfileComponent_Template_div_scrollingFinished_8_listener() {
            return ctx.onScrollingFinished();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](9, ProfileComponent_For_10_Template, 1, 1, "app-post-card", null, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, ProfileComponent_div_12_Template, 2, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 4, ctx.userLoginInfo$));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 6, ctx.isCurrentUserProfile$));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 8, ctx.userPosts$)) == null ? null : tmp_2_0.length) === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 10, ctx.userPosts$));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 12, ctx.isLoadingFeed$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _ApiClient_Backend_components_image_image_component__WEBPACK_IMPORTED_MODULE_5__.ImageComponent, _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_6__.PostCardComponent, _shared_components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_7__.SkeletonCardComponent, _shared_directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_8__.ScrollBottomDirective, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
      styles: [".profile-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 2rem auto 0;\n  display: grid;\n  column-gap: 54px;\n  grid-template-columns: 240px 640px;\n  justify-content: center;\n}\n\n.profile-feed[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 100%;\n}\n\n.profile-user[_ngcontent-%COMP%] {\n  position: sticky;\n  height: 300px;\n  width: 100%;\n  top: calc(70px + 2rem);\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.profile-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  border-bottom: 1px solid var(--bgSecondary);\n  padding: 0 0 1.5rem 0;\n}\n\n.profile-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.profile-tab[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 28px;\n  padding: 0.25rem 0;\n  font-family: \"Bebas Neue\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n.profile-tab[_ngcontent-%COMP%]:hover {\n  color: var(--btnPrimary);\n}\n.profile-tab[_ngcontent-%COMP%]:active {\n  color: var(--btnActive);\n}\n\n.profile-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-family: \"Roboto\", sans-serif;\n  background-color: var(--bgPrimary);\n  font-size: 1rem;\n  font-weight: bold;\n  align-items: center;\n  justify-content: space-between;\n  display: flex;\n  gap: 1rem;\n  border: 1.5px solid var(--text);\n  border-radius: 6px;\n  height: 2rem;\n  padding: 0 1rem;\n  width: 100%;\n}\n.profile-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none;\n}\n.profile-button[_ngcontent-%COMP%]:hover {\n  color: var(--btnPrimary);\n  border-color: var(--btnPrimary);\n}\n.profile-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  color: var(--btnPrimary);\n}\n.profile-button[_ngcontent-%COMP%]:active {\n  color: var(--btnActive);\n  border-color: var(--btnActive);\n}\n.profile-button[_ngcontent-%COMP%]:active   svg[_ngcontent-%COMP%] {\n  color: var(--btnActive);\n}\n\n.image-link[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  cursor: pointer;\n}\n.image-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.5s ease;\n}\n.image-link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.image-link[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.image-wrapper[_ngcontent-%COMP%]:after {\n  z-index: 10;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  content: \"\";\n  height: 60px;\n  background: linear-gradient(180deg, transparent 0%, var(--bgPrimary) 90%);\n}\n\n.profile-highlights[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.set-image-button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 50;\n  bottom: 0;\n  right: 0;\n}\n@media (min-width: 768px) {\n  .set-image-button[_ngcontent-%COMP%] {\n    bottom: 1rem;\n    right: 1rem;\n  }\n}\n\n.user-nickname[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--iconsInactive);\n  margin-bottom: 20px;\n}\n\n.user-profile-name[_ngcontent-%COMP%] {\n  z-index: 10;\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-size: 20px;\n  width: 100%;\n  text-align: center;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQ0U7RUFDRSx3QkFBQTtBQUNKO0FBRUU7RUFDRSx1QkFBQTtBQUFKOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBREY7QUFHRTtFQUNFLFVBQUE7QUFESjtBQUlFO0VBQ0Usd0JBQUE7RUFDQSwrQkFBQTtBQUZKO0FBSUk7RUFDRSx3QkFBQTtBQUZOO0FBTUU7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0FBSko7QUFNSTtFQUNFLHVCQUFBO0FBSk47O0FBU0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBTkY7QUFRRTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtBQU5KO0FBU0U7RUFDRSxvQ0FBQTtBQVBKO0FBU0k7RUFDRSxVQUFBO0FBUE47O0FBWUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFURjtBQVdFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5RUFBQTtBQVRKOztBQWFBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0FBVkY7O0FBYUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQVZGO0FBWUU7RUFORjtJQU9JLFlBQUE7SUFDQSxXQUFBO0VBVEY7QUFDRjs7QUFZQTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBVEY7O0FBWUE7RUFDRSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFURiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMnJlbSBhdXRvIDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGNvbHVtbi1nYXA6IDU0cHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjQwcHggNjQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvZmlsZS1mZWVkIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2ZpbGUtdXNlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IGNhbGMoNzBweCArIDJyZW0pO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuNXJlbVxufVxuXG4ucHJvZmlsZS1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJnU2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogMCAwIDEuNXJlbSAwO1xufVxuXG4ucHJvZmlsZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLXRhYiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBwYWRkaW5nOiAwLjI1cmVtIDA7XG4gIGZvbnQtZmFtaWx5OiBcIkJlYmFzIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1idG5QcmltYXJ5KTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tYnRuQWN0aXZlKTtcbiAgfVxufVxuXG4ucHJvZmlsZS1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdQcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiAycmVtO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIHdpZHRoOiAxMDAlO1xuXG4gIHN2ZyB7XG4gICAgZmlsbDogbm9uZVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWJ0blByaW1hcnkpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnRuUHJpbWFyeSk7XG5cbiAgICBzdmcge1xuICAgICAgY29sb3I6IHZhcigtLWJ0blByaW1hcnkpO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tYnRuQWN0aXZlKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ0bkFjdGl2ZSk7XG5cbiAgICBzdmcge1xuICAgICAgY29sb3I6IHZhcigtLWJ0bkFjdGl2ZSk7XG4gICAgfVxuICB9XG59XG5cbi5pbWFnZS1saW5rIHtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJiBzdmcge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2U7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjMpO1xuXG4gICAgc3ZnIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG59XG5cbi5pbWFnZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcblxuICAmOmFmdGVyIHtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29udGVudDogJyc7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHRyYW5zcGFyZW50IDAlLCB2YXIoLS1iZ1ByaW1hcnkpIDkwJSApO1xuICB9XG59XG5cbi5wcm9maWxlLWhpZ2hsaWdodHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xufVxuXG4uc2V0LWltYWdlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNTA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgYm90dG9tOiAxcmVtO1xuICAgIHJpZ2h0OiAxcmVtO1xuICB9XG59XG5cbi51c2VyLW5pY2tuYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0taWNvbnNJbmFjdGl2ZSk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi51c2VyLXByb2ZpbGUtbmFtZSB7XG4gIHotaW5kZXg6IDEwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/skeleton */ 76301);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ApiClient/components/image/image.component */ 69379);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-routing.module */ 71291);
/* harmony import */ var _components_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/profile.component */ 71296);
/* harmony import */ var _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/post-card/post-card.component */ 23621);
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/container/container.component */ 2645);
/* harmony import */ var _components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/skeleton-card/skeleton-card.component */ 17685);
/* harmony import */ var _shared_directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/directives/scroll-bottom.directive */ 58577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);














let ProfileModule = /*#__PURE__*/(() => {
  class ProfileModule {
    static #_ = this.ɵfac = function ProfileModule_Factory(t) {
      return new (t || ProfileModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: ProfileModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProfileRoutingModule, _components_container_container_component__WEBPACK_IMPORTED_MODULE_4__.ContainerComponent, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.RippleModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_0__.ImageComponent, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_12__.ProgressSpinnerModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_13__.SkeletonModule, _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_3__.PostCardComponent, _components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_5__.SkeletonCardComponent]
    });
  }
  return ProfileModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ProfileModule, {
    declarations: [_components_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProfileRoutingModule, _components_container_container_component__WEBPACK_IMPORTED_MODULE_4__.ContainerComponent, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.RippleModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_0__.ImageComponent, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_12__.ProgressSpinnerModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_13__.SkeletonModule, _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_3__.PostCardComponent, _components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_5__.SkeletonCardComponent, _shared_directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_6__.ScrollBottomDirective]
  });
})();

/***/ }),

/***/ 43031:
/*!****************************************************!*\
  !*** ./src/app/store/profile/profile.selectors.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   profileFeatureSelector: () => (/* binding */ profileFeatureSelector),
/* harmony export */   selectIsLoadingProfile: () => (/* binding */ selectIsLoadingProfile),
/* harmony export */   selectIsLoadingProfileFeed: () => (/* binding */ selectIsLoadingProfileFeed),
/* harmony export */   selectUserLoginInfo: () => (/* binding */ selectUserLoginInfo),
/* harmony export */   selectUserPosts: () => (/* binding */ selectUserPosts)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

const profileFeatureSelector = state => state.profile;
const selectIsLoadingProfile = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(profileFeatureSelector, state => state.isLoading);
const selectIsLoadingProfileFeed = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(profileFeatureSelector, state => state.isLoadingFeed);
const selectUserLoginInfo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(profileFeatureSelector, state => state.loginInfo);
const selectUserPosts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(profileFeatureSelector, state => state.posts);

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

/***/ })

}]);
//# sourceMappingURL=818.js.map