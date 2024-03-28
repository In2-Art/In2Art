"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[140],{

/***/ 95614:
/*!*********************************************************!*\
  !*** ./src/app/pages/post/components/post.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostPageComponent: () => (/* binding */ PostPageComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var _ApiClient_backend_Post_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ApiClient/backend/Post/post */ 490);
/* harmony import */ var _store_post_post_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/post/post.action */ 53065);
/* harmony import */ var _store_post_post_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/post/post.selectors */ 30213);
/* harmony import */ var _ApiClient_helpers_observables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ApiClient/helpers/observables */ 55364);
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store/auth/auth.selectors */ 47393);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ 72743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/galleria */ 64747);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _shared_components_post_header_post_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/post-header/post-header.component */ 29709);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var _shared_components_post_footer_post_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/post-footer/post-footer.component */ 52125);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 60316);



















const _c0 = () => ({
  width: "200px",
  height: "200px"
});
function PostPageComponent_Conditional_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "video", 5);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", item_r1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function PostPageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "article", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-post-header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p-galleria", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, PostPageComponent_Conditional_0_ng_template_4_Template, 1, 1, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-post-footer", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isCurrentUserPost", ctx_r1.isCurrentUserPost)("post", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 6, ctx_r1.post$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r1.imageLinks)("showIndicators", ctx_r1.imageLinks.length > 1)("showThumbnails", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("post", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 8, ctx_r1.post$));
  }
}
function PostPageComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "p-progressSpinner", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](2, _c0));
  }
}
let PostPageComponent = /*#__PURE__*/(() => {
  class PostPageComponent {
    constructor(route, store) {
      this.route = route;
      this.store = store;
      this.imageLinks = [];
      this.isCurrentUserPost = false;
      this.post$ = this.store.select(_store_post_post_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPost);
      this.postSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
      this.isLoading$ = this.store.select(_store_post_post_selectors__WEBPACK_IMPORTED_MODULE_3__.selectIsLoadingPost);
      this.route.params.subscribe(params => {
        this.postId = params['id'];
      });
      this.postService = (0,_ApiClient_helpers_observables__WEBPACK_IMPORTED_MODULE_4__.ToService)(_ApiClient_backend_Post_post__WEBPACK_IMPORTED_MODULE_1__.Post);
    }
    ngOnInit() {
      this.store.dispatch((0,_store_post_post_action__WEBPACK_IMPORTED_MODULE_2__.getPostAction)({
        postId: this.postId
      }));
      this.postSubscription = this.post$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.concatLatestFrom)(() => this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_5__.selectCurrentUserId))).subscribe(([post, currentUserId]) => {
        if (post) {
          void this.setUpImages(post.postFiles);
          this.isCurrentUserPost = post.userCreatorId === currentUserId;
        }
      });
    }
    ngOnDestroy() {
      this.postSubscription.unsubscribe();
    }
    setUpImages(postFiles) {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)(postFiles.map(file => {
          return _this.postService.getUrlPostFileThumbnail({
            fileId: file.fileId,
            userCreatorId: file.userCreatorId,
            id: file.id
          });
        })).subscribe(urls => {
          _this.imageLinks = urls;
        });
      })();
    }
    static #_ = this.ɵfac = function PostPageComponent_Factory(t) {
      return new (t || PostPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: PostPageComponent,
      selectors: [["app-post-page"]],
      decls: 3,
      vars: 3,
      consts: [[1, "post-wrapper"], [3, "isCurrentUserPost", "post"], [3, "value", "showIndicators", "showThumbnails"], ["pTemplate", "item"], [3, "post"], [2, "width", "100%", "display", "block", 3, "src"], [1, "post-loader"], ["strokeWidth", "4"]],
      template: function PostPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, PostPageComponent_Conditional_0_Template, 7, 10, "article", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, PostPageComponent_Conditional_2_Template, 2, 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx.isLoading$) === false ? 0 : 2);
        }
      },
      dependencies: [primeng_galleria__WEBPACK_IMPORTED_MODULE_14__.Galleria, primeng_api__WEBPACK_IMPORTED_MODULE_15__.PrimeTemplate, _shared_components_post_header_post_header_component__WEBPACK_IMPORTED_MODULE_6__.PostHeaderComponent, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__.ProgressSpinner, _shared_components_post_footer_post_footer_component__WEBPACK_IMPORTED_MODULE_7__.PostFooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe],
      styles: [".post-loader[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 2rem auto;\n  display: flex;\n  justify-content: center;\n}\n\n.post-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: 0;\n  border: 1px solid var(--linesOnNormalBackground);\n}\n@media (min-width: 768px) {\n  .post-wrapper[_ngcontent-%COMP%] {\n    max-width: 1000px;\n    margin: 2rem auto;\n    border: 1px solid var(--linesOnNormalBackground);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcG9zdC9jb21wb25lbnRzL3Bvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0RBQUE7QUFDRjtBQUNFO0VBUEY7SUFRSSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0RBQUE7RUFFRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtbG9hZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMnJlbSBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBvc3Qtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmVzT25Ob3JtYWxCYWNrZ3JvdW5kKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lc09uTm9ybWFsQmFja2dyb3VuZCk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return PostPageComponent;
})();

/***/ }),

/***/ 74757:
/*!***************************************************!*\
  !*** ./src/app/pages/post/post-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostRoutingModule: () => (/* binding */ PostRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 61611);
/* harmony import */ var _components_post_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/post.component */ 95614);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @enums/urls */ 94317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);







const routes = [{
  path: _enums_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.ID,
  component: _components_post_component__WEBPACK_IMPORTED_MODULE_0__.PostPageComponent
}];
let PostRoutingModule = /*#__PURE__*/(() => {
  class PostRoutingModule {
    static #_ = this.ɵfac = function PostRoutingModule_Factory(t) {
      return new (t || PostRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: PostRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
  return PostRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PostRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 140:
/*!*******************************************!*\
  !*** ./src/app/pages/post/post.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostModule: () => (/* binding */ PostModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _post_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-routing.module */ 74757);
/* harmony import */ var _components_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/post.component */ 95614);
/* harmony import */ var _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/post-card/post-card.component */ 23621);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/galleria */ 64747);
/* harmony import */ var _components_post_header_post_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/post-header/post-header.component */ 29709);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var _components_post_footer_post_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/post-footer/post-footer.component */ 52125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);









let PostModule = /*#__PURE__*/(() => {
  class PostModule {
    static #_ = this.ɵfac = function PostModule_Factory(t) {
      return new (t || PostModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: PostModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _post_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostRoutingModule, _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__.PostCardComponent, primeng_galleria__WEBPACK_IMPORTED_MODULE_7__.GalleriaModule, _components_post_header_post_header_component__WEBPACK_IMPORTED_MODULE_3__.PostHeaderComponent, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__.ProgressSpinnerModule, _components_post_footer_post_footer_component__WEBPACK_IMPORTED_MODULE_4__.PostFooterComponent]
    });
  }
  return PostModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PostModule, {
    declarations: [_components_post_component__WEBPACK_IMPORTED_MODULE_1__.PostPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _post_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostRoutingModule, _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__.PostCardComponent, primeng_galleria__WEBPACK_IMPORTED_MODULE_7__.GalleriaModule, _components_post_header_post_header_component__WEBPACK_IMPORTED_MODULE_3__.PostHeaderComponent, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__.ProgressSpinnerModule, _components_post_footer_post_footer_component__WEBPACK_IMPORTED_MODULE_4__.PostFooterComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=140.js.map