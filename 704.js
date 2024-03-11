"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[704],{

/***/ 13404:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 71983);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 97625);
/* harmony import */ var _uniquepost_uniquepost_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uniquepost/uniquepost.component */ 35860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);







const routes = [{
  path: '',
  component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: ':id',
  component: _uniquepost_uniquepost_component__WEBPACK_IMPORTED_MODULE_1__.UniquepostComponent
}];
let HomeRoutingModule = /*#__PURE__*/(() => {
  class HomeRoutingModule {
    static #_ = this.ɵfac = function HomeRoutingModule_Factory(t) {
      return new (t || HomeRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
  return HomeRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 71983:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 35392);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68688);
/* harmony import */ var _store_feed_feed_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/feed/feed.selectors */ 50580);
/* harmony import */ var _store_feed_feed_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/feed/feed.actions */ 94572);
/* harmony import */ var _store_feed_post_rating_rating_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/feed/post/rating/rating.actions */ 65168);
/* harmony import */ var _store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/profile/profile.selectors */ 21388);
/* harmony import */ var _store_feed_feedState_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store/feed/feedState.interface */ 80292);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 66192);
/* harmony import */ var _shared_directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/directives/scroll-bottom.directive */ 77592);
/* harmony import */ var _shared_modules_post_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/modules/post/post.component */ 19664);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 65056);

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @ngrx/avoid-dispatching-multiple-actions-sequentially */
/* eslint-disable @ngrx/prefer-selector-in-select */













const HomeComponent_Defer_4_DepsFn = () => [_shared_modules_post_post_component__WEBPACK_IMPORTED_MODULE_7__.PostComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe];
function HomeComponent_Defer_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-post", 1);
  }
  if (rf & 2) {
    const postId_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("postId", postId_r4);
  }
}
function HomeComponent_Defer_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](0, HomeComponent_Defer_1_For_1_Template, 1, 1, "app-post", 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 0, ctx_r0.postIds$));
  }
}
function HomeComponent_DeferPlaceholder_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Post skeleton");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
const _c0 = () => [];
function HomeComponent_DeferPlaceholder_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](1, HomeComponent_DeferPlaceholder_2_For_2_Template, 2, 0, "div", null, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](0, _c0).constructor(4));
  }
}
function HomeComponent_DeferError_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Post skeleton");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomeComponent_DeferError_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](0, HomeComponent_DeferError_3_For_1_Template, 2, 0, "div", null, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](0, _c0).constructor(4));
  }
}
let HomeComponent = /*#__PURE__*/(() => {
  class HomeComponent {
    constructor(store) {
      this.store = store;
      this.postIds$ = this.store.select(_store_feed_feed_selectors__WEBPACK_IMPORTED_MODULE_1__.selectPostIds);
      this.onlyArtworkIds$ = this.store.select(_store_feed_feed_selectors__WEBPACK_IMPORTED_MODULE_1__.selectOnlyArtworkIds);
      this.userLoginInfo$ = this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_4__.selectUserLoginInfo);
      this.loadingMorePosts = false;
      this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
      this.postsLoadingCount = _store_feed_feedState_interface__WEBPACK_IMPORTED_MODULE_5__.postsNumber;
      this.scrollingFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
      this.store.dispatch(_store_feed_feed_actions__WEBPACK_IMPORTED_MODULE_2__.loadFeedPosts());
    }
    ngOnInit() {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.onlyArtworkIds$.subscribe(artworkIds => {
          const filteredArtworkIds = artworkIds.filter(id => id !== undefined);
          if (filteredArtworkIds.length >= 1) {
            _this.store.dispatch(_store_feed_post_rating_rating_actions__WEBPACK_IMPORTED_MODULE_3__.initRating({
              postsIds: filteredArtworkIds
            }));
          }
        });
      })();
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
      this.store.dispatch(_store_feed_feed_actions__WEBPACK_IMPORTED_MODULE_2__.cleanFeedPosts());
    }
    onScrollingFinished() {
      this.scrollingFinished.emit();
      this.loadMore();
    }
    loadMore() {
      if (this.getMorePosts()) {
        console.log('MorePosts on it!!');
        this.store.dispatch(_store_feed_feed_actions__WEBPACK_IMPORTED_MODULE_2__.loadMoreFeedPosts());
        this.loadingMorePosts = false;
      }
    }
    getMorePosts() {
      if (this.loadingMorePosts) {
        console.log('false');
        return false;
      } else {
        console.log('true');
        this.loadingMorePosts = true;
        return true;
      }
    }
    static #_ = this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      outputs: {
        scrollingFinished: "scrollingFinished"
      },
      decls: 6,
      vars: 0,
      consts: [["id", "homeContainer", "appScrollBottom", "", 1, "content", "align-center", 3, "scrollingFinished"], [3, "postId"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("scrollingFinished", function HomeComponent_Template_div_scrollingFinished_0_listener() {
            return ctx.onScrollingFinished();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomeComponent_Defer_1_Template, 3, 2)(2, HomeComponent_DeferPlaceholder_2_Template, 3, 1)(3, HomeComponent_DeferError_3_Template, 2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefer"](4, 1, HomeComponent_Defer_4_DepsFn, null, 2, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdeferOnViewport"](0, -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_shared_directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_6__.ScrollBottomDirective],
      styles: [".content[_ngcontent-%COMP%] {\n  padding: 20px 0 100px;\n}\n.content[_ngcontent-%COMP%]   app-post[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 30px;\n}\n.content[_ngcontent-%COMP%]   app-post-skeleton[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjtBQUNJO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FBQ1I7QUFFSTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XG4gICAgcGFkZGluZzogMjBweCAwIDEwMHB4O1xuXG4gICAgYXBwLXBvc3R7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cblxuICAgIGFwcC1wb3N0LXNrZWxldG9ue1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return HomeComponent;
})();

/***/ }),

/***/ 40704:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 71983);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 13404);
/* harmony import */ var _modules_post_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/post/post.component */ 19664);
/* harmony import */ var primeng_defer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/defer */ 61288);
/* harmony import */ var src_app_shared_directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/directives/scroll-bottom.directive */ 77592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94280);







let HomeModule = /*#__PURE__*/(() => {
  class HomeModule {
    static #_ = this.ɵfac = function HomeModule_Factory(t) {
      return new (t || HomeModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule, _modules_post_post_component__WEBPACK_IMPORTED_MODULE_2__.PostComponent, primeng_defer__WEBPACK_IMPORTED_MODULE_6__.DeferModule]
    });
  }
  return HomeModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule, _modules_post_post_component__WEBPACK_IMPORTED_MODULE_2__.PostComponent, primeng_defer__WEBPACK_IMPORTED_MODULE_6__.DeferModule, src_app_shared_directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_3__.ScrollBottomDirective]
  });
})();

/***/ }),

/***/ 35860:
/*!***************************************************************!*\
  !*** ./src/app/pages/home/uniquepost/uniquepost.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UniquepostComponent: () => (/* binding */ UniquepostComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _modules_post_post_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/post/post.component */ 19664);
/* harmony import */ var _store_feed_feed_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/feed/feed.actions */ 94572);
/* harmony import */ var _store_feed_post_rating_rating_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/feed/post/rating/rating.actions */ 65168);
/* harmony import */ var _store_feed_feed_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/feed/feed.selectors */ 50580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 66192);










let UniquepostComponent = /*#__PURE__*/(() => {
  class UniquepostComponent {
    constructor(route, store) {
      this.route = route;
      this.store = store;
      this.onlyArtworkIds$ = this.store.select(_store_feed_feed_selectors__WEBPACK_IMPORTED_MODULE_3__.selectOnlyArtworkIds);
      this.route.params.subscribe(params => {
        this.postId = params['id'];
      });
    }
    ngOnInit() {
      this.store.dispatch(_store_feed_feed_actions__WEBPACK_IMPORTED_MODULE_1__.initUniqueFeedSoloPost({
        postId: this.postId
      }));
      this.onlyArtworkIds$.subscribe(artworkIds => {
        const filteredArtworkIds = artworkIds.filter(id => id !== undefined);
        if (filteredArtworkIds.length >= 1) {
          this.store.dispatch(_store_feed_post_rating_rating_actions__WEBPACK_IMPORTED_MODULE_2__.initRating({
            postsIds: filteredArtworkIds
          }));
        }
      });
    }
    static #_ = this.ɵfac = function UniquepostComponent_Factory(t) {
      return new (t || UniquepostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: UniquepostComponent,
      selectors: [["app-uniquepost"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 2,
      consts: [[1, "content", "align-center"], [3, "postId", "isUniquePost"]],
      template: function UniquepostComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-post", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("postId", ctx.postId)("isUniquePost", true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _modules_post_post_component__WEBPACK_IMPORTED_MODULE_0__.PostComponent],
      styles: [".content[_ngcontent-%COMP%] {\n  padding: 20px 0 100px;\n}\n.content[_ngcontent-%COMP%]   app-post[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS91bmlxdWVwb3N0L3VuaXF1ZXBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKO0FBQ0k7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFDUiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICAgIHBhZGRpbmc6IDIwcHggMCAxMDBweDtcblxuICAgIGFwcC1wb3N0e1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return UniquepostComponent;
})();

/***/ }),

/***/ 77592:
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/scroll-bottom.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollBottomDirective: () => (/* binding */ ScrollBottomDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94280);
/* eslint-disable @typescript-eslint/no-unused-vars */


let ScrollBottomDirective = /*#__PURE__*/(() => {
  class ScrollBottomDirective {
    constructor() {
      this.scrollingFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.emitted = false;
    }
    onScroll() {
      if (window.innerHeight + window.scrollY == document.body.offsetHeight && !this.emitted) {
        this.emitted = true;
        this.scrollingFinished.emit();
      } else if (window.innerHeight + window.scrollY < document.body.offsetHeight) {
        this.emitted = false;
        console.log('emmited: ', this.emitted);
      }
    }
    static #_ = this.ɵfac = function ScrollBottomDirective_Factory(t) {
      return new (t || ScrollBottomDirective)();
    };
    static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ScrollBottomDirective,
      selectors: [["", "appScrollBottom", ""]],
      hostBindings: function ScrollBottomDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollBottomDirective_scroll_HostBindingHandler() {
            return ctx.onScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      outputs: {
        scrollingFinished: "scrollingFinished"
      },
      standalone: true
    });
  }
  return ScrollBottomDirective;
})();

/***/ })

}]);
//# sourceMappingURL=704.js.map