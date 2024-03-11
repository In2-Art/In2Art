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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 40604);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 31792);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 68944);
/* harmony import */ var _store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/profile/profile.selectors */ 21388);
/* harmony import */ var _store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/profile/profile.actions */ 74132);
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/auth/auth.selectors */ 81032);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @enums/urls */ 84904);
/* harmony import */ var _store_feed_feed_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/feed/feed.actions */ 94572);
/* harmony import */ var _store_feed_post_rating_rating_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store/feed/post/rating/rating.actions */ 65168);
/* harmony import */ var _store_feed_feed_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/feed/feed.selectors */ 50580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ 66192);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/container/container.component */ 93992);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/button */ 89276);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/ripple */ 82856);
/* harmony import */ var _ApiClient_Backend_components_image_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ApiClient.Backend/components/image/image.component */ 9192);
/* harmony import */ var _shared_modules_post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/modules/post/post.component */ 19664);






















const _c0 = (a1, a2) => ["/", a1, a2];
function ProfileComponent_div_3_p_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, ctx_r7.locale$), ctx_r7.URLS.SET_PHOTO))("rounded", true);
  }
}
function ProfileComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "app-image", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ProfileComponent_div_3_p_button_4_Template, 2, 7, "p-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div")(6, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const LoginInfo_r6 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("folder", "UserPictures")("idPicture", LoginInfo_r6.pictureId)("userId", LoginInfo_r6.userProfile.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.isCurrentUserProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](LoginInfo_r6.userProfile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]("@" + LoginInfo_r6.userNickname.nicknameDisplayed);
  }
}
function ProfileComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "BTN.EDIT_PROFILE"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, ctx_r1.locale$), ctx_r1.URLS.EDIT_PROFILE));
  }
}
function ProfileComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
  }
}
function ProfileComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function ProfileComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "PROFILE_PAGE.NO_POSTS"), " ");
  }
}
const ProfileComponent_div_13_Defer_3_DepsFn = () => [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _shared_modules_post_post_component__WEBPACK_IMPORTED_MODULE_9__.PostComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe];
function ProfileComponent_div_13_Defer_1_app_post_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-post", 23);
  }
  if (rf & 2) {
    const postId_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("postId", postId_r11);
  }
}
function ProfileComponent_div_13_Defer_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, ProfileComponent_div_13_Defer_1_app_post_0_Template, 1, 1, "app-post", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, ctx_r8.postIds$));
  }
}
function ProfileComponent_div_13_DeferPlaceholder_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Profile skeleton");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProfileComponent_div_13_Defer_1_Template, 2, 3)(2, ProfileComponent_div_13_DeferPlaceholder_2_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefer"](3, 1, ProfileComponent_div_13_Defer_3_DepsFn, null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdeferOnIdle"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
let ProfileComponent = /*#__PURE__*/(() => {
  class ProfileComponent {
    constructor(store, route, translate) {
      this.store = store;
      this.route = route;
      this.translate = translate;
      this.onlyArtworkIds$ = this.store.select(_store_feed_feed_selectors__WEBPACK_IMPORTED_MODULE_6__.selectOnlyArtworkIds);
      this.isCurrentUserProfile = false;
      this.locale$ = this.translate.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.startWith)({
        lang: this.translate.currentLang
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(event => event.lang));
      this.userPosts$ = this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_0__.selectUserPosts);
      this.postIds$ = this.store.select(_store_feed_feed_selectors__WEBPACK_IMPORTED_MODULE_6__.selectPostIds);
      this.isLoading$ = this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_0__.selectIsLoadingProfile);
      this.canUpload$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCanUpload);
      this.userLoginInfo$ = this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_0__.selectUserLoginInfo);
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_3__.URLS;
    }
    ngOnInit() {
      this.routeSubscription = this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatestWith)(this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCurrentUserNickname)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(([params, currentUser]) => {
        this.isCurrentUserProfile = params['userSlug'] === currentUser;
        this.store.dispatch((0,_store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getLoginInfoAction)({
          nicknameUrl: params['userSlug']
        }));
        this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_0__.selectUserLoginInfo).subscribe(user => {
          if (user?.userProfile.userId !== null && user?.userProfile.userId !== undefined) {
            user.userProfile.userId;
          }
        });
      })).subscribe();
      this.userPosts$.forEach(posts => {
        this.store.dispatch(_store_feed_feed_actions__WEBPACK_IMPORTED_MODULE_4__.initProfileFeedPosts({
          posts: posts
        }));
      });
      this.onlyArtworkIds$.subscribe(artworkIds => {
        const filteredArtworkIds = artworkIds.filter(id => id !== undefined);
        if (filteredArtworkIds.length >= 1) {
          this.store.dispatch(_store_feed_post_rating_rating_actions__WEBPACK_IMPORTED_MODULE_5__.initRating({
            postsIds: filteredArtworkIds
          }));
        }
      });
    }
    ngOnDestroy() {
      if (this.routeSubscription) {
        this.routeSubscription.unsubscribe();
        this.store.dispatch(_store_feed_feed_actions__WEBPACK_IMPORTED_MODULE_4__.cleanFeedPosts());
      }
    }
    static #_ = this.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_15__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-user-profile"]],
      decls: 15,
      vars: 18,
      consts: [[3, "width", "isLoading"], [1, "flex", "flex-column", "gap-4"], ["class", "profile-user", 4, "ngIf"], [1, "profile-controls"], [4, "ngIf"], [1, "profile-highlights"], ["class", "add-highlight", 4, "ngIf"], ["class", "pb-5 pt-5 text-center w-full text-2xl", 4, "ngIf"], ["class", "postContent align-center", 4, "ngIf"], [1, "profile-user"], [1, "relative"], [1, "image-wrapper"], ["defaultImageUrl", "assets/videos/noUserVid.mp4", 3, "folder", "idPicture", "userId"], ["class", "set-image-button", "icon", "pi pi-camera", 3, "routerLink", "rounded", 4, "ngIf"], [1, "text-3xl", "font-bold", "mb-2"], ["icon", "pi pi-camera", 1, "set-image-button", 3, "routerLink", "rounded"], ["pButton", "", "pRipple", "", "icon", "pi pi-user-edit", 3, "label", "routerLink"], [1, "add-highlight"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 231.99 232.02", 1, "icon"], ["stroke", "currentColor", "stroke-width", "10px", "stroke-miterlimit", "10", "fill", "none", "d", "M95.17 136.82h-69a20.81 20.81 0 0 1-9.04-39.72 21.83 21.83 0 0 1 9.11-1.9h68.93v-69a20.25 20.25 0 0 1 8.24-16.94 20.72 20.72 0 0 1 32.77 11.78 23.12 23.12 0 0 1 .57 5.32q.06 33.93 0 67.87v1h69a20.34 20.34 0 0 1 17.57 9.05c8.64 12.37 1.24 29.8-13.66 32.23a25.15 25.15 0 0 1-4.06.31h-68.81v68.94c0 7.76-3.24 13.89-9.79 18.08a20.77 20.77 0 0 1-31.5-14.12 25.94 25.94 0 0 1-.32-4.13v-67.75Z"], [1, "pb-5", "pt-5", "text-center", "w-full", "text-2xl"], [1, "postContent", "align-center"], [3, "postId", 4, "ngFor", "ngForOf"], [3, "postId"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, ProfileComponent_div_3_Template, 10, 6, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, ProfileComponent_ng_container_6_Template, 4, 9, "ng-container", 4)(7, ProfileComponent_ng_container_7_Template, 1, 0, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ProfileComponent_button_9_Template, 3, 0, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, ProfileComponent_div_11_Template, 3, 3, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, ProfileComponent_div_13_Template, 5, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_6_0;
          let tmp_7_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("width", 800)("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 8, ctx.isLoading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 10, ctx.userLoginInfo$));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isCurrentUserProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isCurrentUserProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isCurrentUserProfile && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 12, ctx.canUpload$));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 14, ctx.userPosts$)) == null ? null : tmp_6_0.length) === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 16, ctx.userPosts$)) == null ? null : tmp_7_0.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_7__.ContainerComponent, primeng_button__WEBPACK_IMPORTED_MODULE_18__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_18__.Button, primeng_ripple__WEBPACK_IMPORTED_MODULE_19__.Ripple, _ApiClient_Backend_components_image_image_component__WEBPACK_IMPORTED_MODULE_8__.ImageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
      styles: [".profile-wrapper[_ngcontent-%COMP%] {\n  width: 1200px;\n  margin: 70px auto 0;\n  display: grid;\n  column-gap: 4rem;\n  grid-template-columns: 3fr 8fr;\n}\n\n.profile-feed[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--inputPlaceholder);\n}\n\n.profile[_ngcontent-%COMP%] {\n  width: 100%;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.profile-user[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.profile-controls[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top: 1px solid var(--bgSecondary);\n  border-bottom: 1px solid var(--bgSecondary);\n  padding: 1.5rem 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.profile-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.profile-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 28px;\n  padding: 0.25rem 0;\n  font-family: \"Bebas Neue\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n.profile-button[_ngcontent-%COMP%]:hover {\n  color: var(--btnPrimary);\n}\n.profile-button[_ngcontent-%COMP%]:active {\n  color: var(--btnActive);\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  overflow: hidden;\n  width: 150px;\n}\n@media (min-width: 768px) {\n  .image-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.profile-highlights[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.add-highlight[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 2px solid var(--text);\n  border-radius: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20%;\n}\n.add-highlight[_ngcontent-%COMP%]:hover {\n  border-color: var(--text);\n}\n.add-highlight[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: var(--text);\n}\n\n.icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  stroke: var(--text);\n}\n\n.set-image-button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 50;\n  bottom: 0;\n  right: 0;\n}\n@media (min-width: 768px) {\n  .set-image-button[_ngcontent-%COMP%] {\n    bottom: 1rem;\n    right: 1rem;\n  }\n}\n\n.postContent[_ngcontent-%COMP%] {\n  padding: 20px 0 100px;\n}\n.postContent[_ngcontent-%COMP%]   app-post[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 30px;\n}\n.postContent[_ngcontent-%COMP%]   app-post-skeleton[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLHlDQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQUY7QUFFRTtFQUNFLHdCQUFBO0FBQUo7QUFHRTtFQUNFLHVCQUFBO0FBREo7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUZGO0FBSUU7RUFMRjtJQU1JLFdBQUE7RUFERjtBQUNGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0FBREY7O0FBSUE7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFERjtBQUdFO0VBQ0UseUJBQUE7QUFESjtBQUdJO0VBQ0UsbUJBQUE7QUFETjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBSEY7QUFLRTtFQU5GO0lBT0ksWUFBQTtJQUNBLFdBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjtBQUlFO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FBRk47QUFLRTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQUhOIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtd3JhcHBlciB7XG5cbiAgd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiA3MHB4IGF1dG8gMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgY29sdW1uLWdhcDogNHJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgOGZyO1xufVxuXG4ucHJvZmlsZS1mZWVkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0UGxhY2Vob2xkZXIpXG59XG5cbi5wcm9maWxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41cmVtXG59XG5cbi5wcm9maWxlLXVzZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuNXJlbVxufVxuXG4ucHJvZmlsZS1jb250cm9scyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYmdTZWNvbmRhcnkpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmdTZWNvbmRhcnkpO1xuICBwYWRkaW5nOiAxLjVyZW0gMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjc1cmVtXG59XG5cbi5wcm9maWxlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMDtcbiAgZm9udC1mYW1pbHk6IFwiQmViYXMgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWJ0blByaW1hcnkpXG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLWJ0bkFjdGl2ZSlcbiAgfVxufVxuXG4uaW1hZ2Utd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDE1MHB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5wcm9maWxlLWhpZ2hsaWdodHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xufVxuXG4uYWRkLWhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwJTtcblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRleHQpO1xuXG4gICAgJiAuaWNvbiBwYXRoIHtcbiAgICAgIHN0cm9rZTogdmFyKC0tdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbi5pY29uIHBhdGgge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBzdHJva2U6IHZhcigtLXRleHQpO1xufVxuXG4uc2V0LWltYWdlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNTA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgYm90dG9tOiAxcmVtO1xuICAgIHJpZ2h0OiAxcmVtO1xuICB9XG59XG5cbi5wb3N0Q29udGVudHtcbiAgcGFkZGluZzogMjBweCAwIDEwMHB4O1xuXG4gIGFwcC1wb3N0e1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgYXBwLXBvc3Qtc2tlbGV0b257XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 55924);
/* harmony import */ var _components_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/profile.component */ 20632);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/container/container.component */ 93992);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 89276);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 82856);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ApiClient/components/image/image.component */ 9192);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/progressspinner */ 92032);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/skeleton */ 90797);
/* harmony import */ var _modules_post_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/post/post.component */ 19664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94280);












let ProfileModule = /*#__PURE__*/(() => {
  class ProfileModule {
    static #_ = this.ɵfac = function ProfileModule_Factory(t) {
      return new (t || ProfileModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: ProfileModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_3__.ImageComponent, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__.ProgressSpinnerModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_11__.SkeletonModule, _modules_post_post_component__WEBPACK_IMPORTED_MODULE_4__.PostComponent]
    });
  }
  return ProfileModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProfileModule, {
    declarations: [_components_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_3__.ImageComponent, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_10__.ProgressSpinnerModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_11__.SkeletonModule, _modules_post_post_component__WEBPACK_IMPORTED_MODULE_4__.PostComponent]
  });
})();

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