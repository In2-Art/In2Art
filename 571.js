"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[571],{

/***/ 8877:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/profile/components/user-profile/user-profile.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserProfileComponent: () => (/* binding */ UserProfileComponent)
/* harmony export */ });
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/auth/auth.selectors */ 4590);
/* harmony import */ var _store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/profile/profile.actions */ 7188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);







let UserProfileComponent = /*#__PURE__*/(() => {
  class UserProfileComponent {
    constructor(store, route, router) {
      this.store = store;
      this.route = route;
      this.router = router;
      this.user$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_0__.selectCurrentUser);
    }
    ngOnInit() {
      this.initializeListeners();
      this.user$.subscribe(user => {
        this.userId = user?.userId;
      });
    }
    initializeListeners() {
      this.route.params.subscribe(params => {
        this.userSlug = params['userSlug'];
        this.fetchUserProfile();
      });
    }
    fetchUserProfile() {
      this.store.dispatch((0,_store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getProfileAction)({
        slug: this.userSlug
      }));
    }
    static #_ = this.ɵfac = function UserProfileComponent_Factory(t) {
      return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: UserProfileComponent,
      selectors: [["app-user-profile"]],
      decls: 2,
      vars: 1,
      template: function UserProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.userSlug, "\n");
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return UserProfileComponent;
})();

/***/ }),

/***/ 8197:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileRoutingModule: () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 3708);
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ 8877);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @enums/urls */ 5500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: _enums_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.USER_SLUG,
  component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__.UserProfileComponent
}];
let ProfileRoutingModule = /*#__PURE__*/(() => {
  class ProfileRoutingModule {
    static #_ = this.ɵfac = function ProfileRoutingModule_Factory(t) {
      return new (t || ProfileRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ProfileRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
  return ProfileRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5017:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileModule: () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 8197);
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ 8877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




let ProfileModule = /*#__PURE__*/(() => {
  class ProfileModule {
    static #_ = this.ɵfac = function ProfileModule_Factory(t) {
      return new (t || ProfileModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ProfileModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule]
    });
  }
  return ProfileModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileModule, {
    declarations: [_components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__.UserProfileComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=571.js.map