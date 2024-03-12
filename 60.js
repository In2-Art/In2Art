"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[60],{

/***/ 20632:
/*!***************************************************************!*\
  !*** ./src/app/pages/profile/components/profile.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 31792);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68944);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 40604);
/* harmony import */ var _store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/profile/profile.selectors */ 21388);
/* harmony import */ var _store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/profile/profile.actions */ 74132);
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/auth/auth.selectors */ 81032);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @enums/urls */ 84904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 66192);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 89276);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/ripple */ 82856);
/* harmony import */ var _ApiClient_Backend_components_image_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ApiClient.Backend/components/image/image.component */ 9192);
/* harmony import */ var _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/post-card/post-card.component */ 74148);
/* harmony import */ var _shared_components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/skeleton-card/skeleton-card.component */ 25096);




















const _c0 = (a1, a2) => ["/", a1, a2];
function ProfileComponent_div_2_p_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, ctx_r6.locale$), ctx_r6.URLS.SET_PHOTO))("rounded", true);
  }
}
function ProfileComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-image", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ProfileComponent_div_2_p_button_4_Template, 2, 7, "p-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div")(7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const LoginInfo_r5 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("folder", "UserPictures")("idPicture", LoginInfo_r5.pictureId)("userId", LoginInfo_r5.userProfile.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 6, ctx_r0.isCurrentUserProfile$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](LoginInfo_r5.userProfile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]("@" + LoginInfo_r5.userNickname.nicknameDisplayed);
  }
}
function ProfileComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "BTN.EDIT_PROFILE"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, ctx_r1.locale$), ctx_r1.URLS.EDIT_PROFILE));
  }
}
function ProfileComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "PROFILE_PAGE.NO_POSTS"), " ");
  }
}
function ProfileComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-post-card", 17);
  }
  if (rf & 2) {
    const post_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("post", post_r7);
  }
}
function ProfileComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-skeleton-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
let ProfileComponent = /*#__PURE__*/(() => {
  class ProfileComponent {
    constructor(store, route, translate) {
      this.store = store;
      this.route = route;
      this.translate = translate;
      this.locale$ = this.translate.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)({
        lang: this.translate.currentLang
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => event.lang));
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
        _this.isCurrentUserProfile$ = _this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatestWith)(_this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCurrentUserNickname)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([params, currentUser]) => {
          _this.store.dispatch((0,_store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_2__.getLoginInfoAction)({
            nicknameUrl: params['userSlug']
          }));
          return params['userSlug'] === currentUser;
        }));
      })();
    }
    static #_ = this.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-user-profile"]],
      decls: 15,
      vars: 14,
      consts: [[1, "profile-wrapper"], [1, "user-info"], ["class", "profile-user", 4, "ngIf"], [1, "profile-controls"], [4, "ngIf"], ["class", "pb-5 pt-5 text-center w-full text-2xl", 4, "ngIf"], [1, "profile-feed"], ["class", "w-full", 4, "ngIf"], [1, "profile-user"], [1, "relative"], [1, "image-wrapper"], ["defaultImageUrl", "assets/videos/noUserVid.mp4", 3, "folder", "idPicture", "userId"], ["class", "set-image-button", "icon", "pi pi-camera", 3, "routerLink", "rounded", 4, "ngIf"], [1, "text-3xl", "font-bold", "mb-2"], ["icon", "pi pi-camera", 1, "set-image-button", 3, "routerLink", "rounded"], ["pButton", "", "pRipple", "", "icon", "pi pi-user-edit", 3, "label", "routerLink"], [1, "pb-5", "pt-5", "text-center", "w-full", "text-2xl"], [3, "post"], [1, "w-full"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ProfileComponent_div_2_Template, 11, 8, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ProfileComponent_ng_container_5_Template, 4, 9, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ProfileComponent_div_7_Template, 3, 3, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](10, ProfileComponent_For_11_Template, 1, 1, "app-post-card", 17, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, ProfileComponent_div_13_Template, 2, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, ctx.userLoginInfo$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 6, ctx.isCurrentUserProfile$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 8, ctx.userPosts$)) == null ? null : tmp_2_0.length) === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 10, ctx.userPosts$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 12, ctx.isLoadingFeed$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_16__.Button, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.Ripple, _ApiClient_Backend_components_image_image_component__WEBPACK_IMPORTED_MODULE_5__.ImageComponent, _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_6__.PostCardComponent, _shared_components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_7__.SkeletonCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
      styles: [".profile-wrapper[_ngcontent-%COMP%] {\n  margin: 70px auto 0;\n  display: grid;\n  column-gap: 54px;\n  grid-template-columns: 240px 640px;\n  justify-content: center;\n}\n\n.profile-feed[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 100%;\n}\n\n.profile[_ngcontent-%COMP%] {\n  width: 100%;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.profile-user[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.profile-controls[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top: 1px solid var(--bgSecondary);\n  border-bottom: 1px solid var(--bgSecondary);\n  padding: 1.5rem 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.profile-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.profile-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 28px;\n  padding: 0.25rem 0;\n  font-family: \"Bebas Neue\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n.profile-button[_ngcontent-%COMP%]:hover {\n  color: var(--btnPrimary);\n}\n.profile-button[_ngcontent-%COMP%]:active {\n  color: var(--btnActive);\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  overflow: hidden;\n  width: 150px;\n}\n@media (min-width: 768px) {\n  .image-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.profile-highlights[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.add-highlight[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 2px solid var(--text);\n  border-radius: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20%;\n}\n.add-highlight[_ngcontent-%COMP%]:hover {\n  border-color: var(--text);\n}\n.add-highlight[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: var(--text);\n}\n\n.icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  stroke: var(--text);\n}\n\n.set-image-button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 50;\n  bottom: 0;\n  right: 0;\n}\n@media (min-width: 768px) {\n  .set-image-button[_ngcontent-%COMP%] {\n    bottom: 1rem;\n    right: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDRTtFQUNFLHdCQUFBO0FBQ0o7QUFFRTtFQUNFLHVCQUFBO0FBQUo7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQURGO0FBR0U7RUFMRjtJQU1JLFdBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0FBQUY7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBRjtBQUVFO0VBQ0UseUJBQUE7QUFBSjtBQUVJO0VBQ0UsbUJBQUE7QUFBTjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBRkY7QUFJRTtFQU5GO0lBT0ksWUFBQTtJQUNBLFdBQUE7RUFERjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtd3JhcHBlciB7XG4gIG1hcmdpbjogNzBweCBhdXRvIDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGNvbHVtbi1nYXA6IDU0cHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjQwcHggNjQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvZmlsZS1mZWVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2ZpbGUge1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjVyZW1cbn1cblxuLnByb2ZpbGUtdXNlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41cmVtXG59XG5cbi5wcm9maWxlLWNvbnRyb2xzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1iZ1NlY29uZGFyeSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iZ1NlY29uZGFyeSk7XG4gIHBhZGRpbmc6IDEuNXJlbSAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNzVyZW1cbn1cblxuLnByb2ZpbGUtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvZmlsZS1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcGFkZGluZzogMC4yNXJlbSAwO1xuICBmb250LWZhbWlseTogXCJCZWJhcyBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tYnRuUHJpbWFyeSlcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tYnRuQWN0aXZlKVxuICB9XG59XG5cbi5pbWFnZS13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTUwcHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnByb2ZpbGUtaGlnaGxpZ2h0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG59XG5cbi5hZGQtaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjAlO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dCk7XG5cbiAgICAmIC5pY29uIHBhdGgge1xuICAgICAgc3Ryb2tlOiB2YXIoLS10ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuLmljb24gcGF0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHN0cm9rZTogdmFyKC0tdGV4dCk7XG59XG5cbi5zZXQtaW1hZ2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1MDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBib3R0b206IDFyZW07XG4gICAgcmlnaHQ6IDFyZW07XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return ProfileComponent;
})();

/***/ }),

/***/ 55924:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileRoutingModule: () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 97625);
/* harmony import */ var _components_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/profile.component */ 20632);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @enums/urls */ 84904);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @guards/auth.guard */ 3565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);








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

/***/ 96060:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileModule: () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 89276);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 82856);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/skeleton */ 90797);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/progressspinner */ 92032);
/* harmony import */ var _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ApiClient/components/image/image.component */ 9192);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-routing.module */ 55924);
/* harmony import */ var _components_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/profile.component */ 20632);
/* harmony import */ var _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/post-card/post-card.component */ 74148);
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/container/container.component */ 93992);
/* harmony import */ var _components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/skeleton-card/skeleton-card.component */ 25096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94280);













let ProfileModule = /*#__PURE__*/(() => {
  class ProfileModule {
    static #_ = this.ɵfac = function ProfileModule_Factory(t) {
      return new (t || ProfileModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: ProfileModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProfileRoutingModule, _components_container_container_component__WEBPACK_IMPORTED_MODULE_4__.ContainerComponent, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.RippleModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_0__.ImageComponent, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__.ProgressSpinnerModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_12__.SkeletonModule, _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_3__.PostCardComponent, _components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_5__.SkeletonCardComponent]
    });
  }
  return ProfileModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProfileModule, {
    declarations: [_components_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProfileRoutingModule, _components_container_container_component__WEBPACK_IMPORTED_MODULE_4__.ContainerComponent, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.RippleModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_0__.ImageComponent, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__.ProgressSpinnerModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_12__.SkeletonModule, _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_3__.PostCardComponent, _components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_5__.SkeletonCardComponent]
  });
})();

/***/ }),

/***/ 21388:
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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 66192);

const profileFeatureSelector = state => state.profile;
const selectIsLoadingProfile = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(profileFeatureSelector, state => state.isLoading);
const selectIsLoadingProfileFeed = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(profileFeatureSelector, state => state.isLoadingFeed);
const selectUserLoginInfo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(profileFeatureSelector, state => state.loginInfo);
const selectUserPosts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(profileFeatureSelector, state => state.posts);

/***/ }),

/***/ 2340:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/combineLatest.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combineLatest: () => (/* binding */ combineLatest)
/* harmony export */ });
/* harmony import */ var _observable_combineLatest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/combineLatest */ 35876);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 35976);
/* harmony import */ var _util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/argsOrArgArray */ 3859);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 71444);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/pipe */ 19964);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 4608);






function combineLatest(...args) {
  const resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popResultSelector)(args);
  return resultSelector ? (0,_util_pipe__WEBPACK_IMPORTED_MODULE_1__.pipe)(combineLatest(...args), (0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_2__.mapOneOrManyArgs)(resultSelector)) : (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => {
    (0,_observable_combineLatest__WEBPACK_IMPORTED_MODULE_4__.combineLatestInit)([source, ...(0,_util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_5__.argsOrArgArray)(args)])(subscriber);
  });
}

/***/ }),

/***/ 68944:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/combineLatestWith.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combineLatestWith: () => (/* binding */ combineLatestWith)
/* harmony export */ });
/* harmony import */ var _combineLatest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combineLatest */ 2340);

function combineLatestWith(...otherSources) {
  return (0,_combineLatest__WEBPACK_IMPORTED_MODULE_0__.combineLatest)(...otherSources);
}

/***/ }),

/***/ 3859:
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
//# sourceMappingURL=60.js.map