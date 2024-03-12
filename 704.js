"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[704],{

/***/ 63636:
/*!*********************************************************!*\
  !*** ./src/app/pages/home/components/home.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 37496);
/* harmony import */ var _store_feed_feed_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/feed/feed.selectors */ 50580);
/* harmony import */ var _store_feed_feed_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/feed/feed.actions */ 94572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 66192);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/post-card/post-card.component */ 74148);
/* harmony import */ var _shared_directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/directives/scroll-bottom.directive */ 77592);
/* harmony import */ var _shared_components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/skeleton-card/skeleton-card.component */ 25096);










function HomeComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-post-card", 2);
  }
  if (rf & 2) {
    const post_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("post", post_r2);
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
      consts: [["appScrollBottom", "", 1, "content", "align-center", "flex", "flex-column", "gap-4", "pt-4", "pb-4", 3, "scrollingFinished"], ["class", "w-full flex justify-content-center align-self-center", 4, "ngIf"], [3, "post"], [1, "w-full", "flex", "justify-content-center", "align-self-center"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scrollingFinished", function HomeComponent_Template_div_scrollingFinished_0_listener() {
            return ctx.onScrollingFinished();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, HomeComponent_For_2_Template, 1, 1, "app-post-card", 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
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
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return HomeComponent;
})();

/***/ }),

/***/ 13404:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _components_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home.component */ 63636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 97625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94280);






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

/***/ 40704:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 72584);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 13404);
/* harmony import */ var _components_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home.component */ 63636);
/* harmony import */ var src_app_shared_directives_scroll_bottom_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/directives/scroll-bottom.directive */ 77592);
/* harmony import */ var _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/post-card/post-card.component */ 74148);
/* harmony import */ var _components_skeleton_card_skeleton_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/skeleton-card/skeleton-card.component */ 25096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94280);








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

/***/ 25096:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/skeleton-card/skeleton-card.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkeletonCardComponent: () => (/* binding */ SkeletonCardComponent)
/* harmony export */ });
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/skeleton */ 90797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94280);



let SkeletonCardComponent = /*#__PURE__*/(() => {
  class SkeletonCardComponent {
    static #_ = this.ɵfac = function SkeletonCardComponent_Factory(t) {
      return new (t || SkeletonCardComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkeletonCardComponent,
      selectors: [["app-skeleton-card"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 0,
      consts: [[1, "wrapper"], [1, "image"], ["height", "300px"], [1, "tabs"], ["size", "1.5rem"], ["height", "1.5rem", "width", "5rem"]],
      template: function SkeletonCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-skeleton", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-skeleton", 4)(5, "p-skeleton", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [primeng_skeleton__WEBPACK_IMPORTED_MODULE_1__.SkeletonModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_1__.Skeleton],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 800px;\n  padding: 0;\n  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.24), 0 1px 4px -1px rgba(0, 0, 0, 0.24);\n  animation: _ngcontent-%COMP%_pulseShadow 1.5s infinite ease-in-out;\n}\n\n@keyframes _ngcontent-%COMP%_pulseShadow {\n  0%, 100% {\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.24), 0 1px 4px -1px rgba(0, 0, 0, 0.24);\n  }\n  50% {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6), 0 6px 10px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.7);\n  }\n}\n.image[_ngcontent-%COMP%] {\n  height: 300px;\n  padding: 0;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  height: 56px;\n  align-items: center;\n  padding: 0 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2tlbGV0b24tY2FyZC9za2VsZXRvbi1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSw2R0FBQTtFQUdBLGdEQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLDJHQUFBO0VBREY7RUFHQTtJQUNFLDJHQUFBO0VBREY7QUFDRjtBQUlBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUZGIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogODAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgMCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNCksXG4gIDAgMXB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIGFuaW1hdGlvbjogcHVsc2VTaGFkb3cgMS41cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuQGtleWZyYW1lcyBwdWxzZVNoYWRvdyB7XG4gIDAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI0KSwgMCAxcHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjYpLCAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC43KSwgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB9XG59XG5cbi5pbWFnZSB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjVyZW07XG4gIGhlaWdodDogNTZweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return SkeletonCardComponent;
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


let ScrollBottomDirective = /*#__PURE__*/(() => {
  class ScrollBottomDirective {
    constructor(el) {
      this.el = el;
      this.scrollingFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.threshold = 60;
    }
    ngOnInit() {
      this.window = window;
    }
    windowScrollEvent() {
      const heightOfWholePage = this.window.document.documentElement.scrollHeight;
      const heightOfElement = this.el.nativeElement.scrollHeight;
      const currentScrolledY = this.window.scrollY;
      const innerHeight = this.window.innerHeight;
      const spaceOfElementAndPage = heightOfWholePage - heightOfElement;
      const scrollToBottom = heightOfElement - innerHeight - currentScrolledY + spaceOfElementAndPage;
      if (scrollToBottom < this.threshold) {
        this.scrollingFinished.emit();
      }
    }
    static #_ = this.ɵfac = function ScrollBottomDirective_Factory(t) {
      return new (t || ScrollBottomDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ScrollBottomDirective,
      selectors: [["", "appScrollBottom", ""]],
      hostBindings: function ScrollBottomDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollBottomDirective_scroll_HostBindingHandler($event) {
            return ctx.windowScrollEvent($event.target);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        threshold: "threshold"
      },
      outputs: {
        scrollingFinished: "scrollingFinished"
      },
      standalone: true
    });
  }
  return ScrollBottomDirective;
})();

/***/ }),

/***/ 50580:
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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 66192);

const feedFeatureSelector = state => state.feed;
const selectIsLoadingPosts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(feedFeatureSelector, state => state.isLoading);
const selectPosts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(feedFeatureSelector, state => state.posts);

/***/ })

}]);
//# sourceMappingURL=704.js.map