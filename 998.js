"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[998],{

/***/ 67586:
/*!*********************************************************!*\
  !*** ./src/app/pages/home/components/home.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var _store_feed_feed_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/feed/feed.selectors */ 88161);
/* harmony import */ var _store_feed_feed_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/feed/feed.actions */ 5220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/post-card/post-card.component */ 23621);
/* harmony import */ var _shared_directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/directives/scroll-bottom.directive */ 58577);
/* harmony import */ var _shared_components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/skeleton-card/skeleton-card.component */ 17685);










function HomeComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-post-card", 2);
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("post", post_r1);
  }
}
function HomeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-skeleton-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
let HomeComponent = /*#__PURE__*/(() => {
  class HomeComponent {
    constructor(store) {
      this.store = store;
      this.count = 4;
      this.posts$ = this.store.select(_store_feed_feed_selectors__WEBPACK_IMPORTED_MODULE_0__.selectPosts);
      this.isLoading$ = this.store.select(_store_feed_feed_selectors__WEBPACK_IMPORTED_MODULE_0__.selectIsLoadingPosts);
    }
    ngOnInit() {
      this.store.dispatch((0,_store_feed_feed_actions__WEBPACK_IMPORTED_MODULE_1__.getPostsAction)({
        count: this.count
      }));
    }
    onScrollingFinished() {
      this.isLoading$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(isLoading => !isLoading), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(() => {
        this.store.dispatch((0,_store_feed_feed_actions__WEBPACK_IMPORTED_MODULE_1__.getPostsAction)({
          count: this.count
        }));
      });
    }
    static #_ = this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 6,
      vars: 5,
      consts: [["appScrollBottom", "", 1, "content", "align-center", "justify-content-center", "flex", "flex-column", "gap-4", 3, "scrollingFinished"], ["class", "w-full", 4, "ngIf"], [3, "post"], [1, "w-full"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scrollingFinished", function HomeComponent_Template_div_scrollingFinished_0_listener() {
            return ctx.onScrollingFinished();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, HomeComponent_For_2_Template, 1, 1, "app-post-card", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 2, 0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, ctx.posts$));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, ctx.isLoading$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__.PostCardComponent, _shared_directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_3__.ScrollBottomDirective, _shared_components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_4__.SkeletonCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
      styles: [".content[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    margin: 2rem auto 0;\n    width: 800px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFDRjtBQUNFO0VBSkY7SUFLSSxtQkFBQTtJQUNBLFlBQUE7RUFFRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICBtYXJnaW46IDEuNXJlbSAwO1xuICB3aWR0aDogMTAwJTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBtYXJnaW46IDJyZW0gYXV0byAwO1xuICAgIHdpZHRoOiA4MDBweDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return HomeComponent;
})();

/***/ }),

/***/ 10935:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _components_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home.component */ 67586);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 61611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);






const routes = [{
  path: '',
  component: _components_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
let HomeRoutingModule = /*#__PURE__*/(() => {
  class HomeRoutingModule {
    static #_ = this.ɵfac = function HomeRoutingModule_Factory(t) {
      return new (t || HomeRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_3__.LocalizeRouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return HomeRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_3__.LocalizeRouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 96998:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 10935);
/* harmony import */ var _components_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home.component */ 67586);
/* harmony import */ var src_app_shared_directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/directives/scroll-bottom.directive */ 58577);
/* harmony import */ var _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/post-card/post-card.component */ 23621);
/* harmony import */ var _components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/skeleton-card/skeleton-card.component */ 17685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);








let HomeModule = /*#__PURE__*/(() => {
  class HomeModule {
    static #_ = this.ɵfac = function HomeModule_Factory(t) {
      return new (t || HomeModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_3__.PostCardComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_4__.SkeletonCardComponent]
    });
  }
  return HomeModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_components_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_3__.PostCardComponent, src_app_shared_directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_2__.ScrollBottomDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_4__.SkeletonCardComponent]
  });
})();

/***/ }),

/***/ 88161:
/*!**********************************************!*\
  !*** ./src/app/store/feed/feed.selectors.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   feedFeatureSelector: () => (/* binding */ feedFeatureSelector),
/* harmony export */   selectIsLoadingPosts: () => (/* binding */ selectIsLoadingPosts),
/* harmony export */   selectPosts: () => (/* binding */ selectPosts)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

const feedFeatureSelector = state => state.feed;
const selectIsLoadingPosts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(feedFeatureSelector, state => state.isLoading);
const selectPosts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(feedFeatureSelector, state => state.posts);

/***/ })

}]);
//# sourceMappingURL=998.js.map