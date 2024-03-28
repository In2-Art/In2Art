"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[621],{

/***/ 23621:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/post-card/post-card.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostCardComponent: () => (/* binding */ PostCardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _ApiClient_backend_Post_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ApiClient/backend/Post/post */ 490);
/* harmony import */ var _ApiClient_helpers_observables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ApiClient/helpers/observables */ 55364);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @enums/urls */ 94317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _directives_clickedOutside_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/clickedOutside.module */ 215);
/* harmony import */ var _components_post_header_post_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/post-header/post-header.component */ 29709);
/* harmony import */ var _components_post_footer_post_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/post-footer/post-footer.component */ 52125);
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/auth/auth.selectors */ 47393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 81383);

















const _c0 = (a0, a1, a2) => ["/", a0, a1, a2];
let PostCardComponent = /*#__PURE__*/(() => {
  class PostCardComponent {
    constructor(translate, store) {
      this.translate = translate;
      this.store = store;
      this.currentUserSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
      this.isCurrentUserPost = false;
      this.currentUserId$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_6__.selectCurrentUserId);
      this.locale$ = this.translate.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.startWith)({
        lang: this.translate.currentLang
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(event => event.lang));
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_2__.URLS;
      this.postService = (0,_ApiClient_helpers_observables__WEBPACK_IMPORTED_MODULE_1__.ToService)(_ApiClient_backend_Post_post__WEBPACK_IMPORTED_MODULE_0__.Post);
    }
    ngOnInit() {
      this.setUpImage();
      this.currentUserSubscription = this.currentUserId$.subscribe(currentUserId => {
        if (currentUserId === this.post.userCreatorId) {
          this.isCurrentUserPost = true;
        }
      });
    }
    ngOnDestroy() {
      this.currentUserSubscription.unsubscribe();
    }
    setUpImage() {
      this.urlThumbnail$ = this.postService.getUrlPostFileThumbnail({
        fileId: this.post?.postFiles[0].fileId,
        userCreatorId: this.post?.userCreatorId,
        id: this.post?.postFiles[0].id
      });
    }
    static #_ = this.ɵfac = function PostCardComponent_Factory(t) {
      return new (t || PostCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: PostCardComponent,
      selectors: [["app-post-card"]],
      inputs: {
        post: "post"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 13,
      consts: [[1, "post-card-wrapper"], [3, "isCurrentUserPost", "post"], [3, "routerLink"], [1, "responsive-video", 3, "src"], [3, "post"]],
      template: function PostCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "article", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-post-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "video", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "app-post-footer", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isCurrentUserPost", ctx.isCurrentUserPost)("post", ctx.post);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](9, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 5, ctx.locale$), ctx.URLS.POST, ctx.post.id));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 7, ctx.urlThumbnail$), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("post", ctx.post);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _directives_clickedOutside_module__WEBPACK_IMPORTED_MODULE_3__.ClickedOutsideModule, _components_post_header_post_header_component__WEBPACK_IMPORTED_MODULE_4__.PostHeaderComponent, _components_post_footer_post_footer_component__WEBPACK_IMPORTED_MODULE_5__.PostFooterComponent],
      styles: [".post-card-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid var(--linesOnNormalBackground);\n}\n@media (min-width: 768px) {\n  .post-card-wrapper[_ngcontent-%COMP%] {\n    border: 1px solid var(--linesOnNormalBackground);\n  }\n}\n\n.responsive-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9zdC1jYXJkL3Bvc3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1REFBQTtBQUNGO0FBQ0U7RUFORjtJQU9JLGdEQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1jYXJkLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpbmVzT25Ob3JtYWxCYWNrZ3JvdW5kKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lc09uTm9ybWFsQmFja2dyb3VuZCk7XG4gIH1cbn1cblxuLnJlc3BvbnNpdmUtdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
  return PostCardComponent;
})();

/***/ }),

/***/ 8281:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/post-delete-modal/post-delete-modal.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostDeleteModalComponent: () => (/* binding */ PostDeleteModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dynamicdialog */ 55079);
/* harmony import */ var _store_post_post_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/post/post.action */ 53065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 49136);














let PostDeleteModalComponent = /*#__PURE__*/(() => {
  class PostDeleteModalComponent {
    constructor(ref, config, store) {
      this.ref = ref;
      this.config = config;
      this.store = store;
    }
    closeModal() {
      this.ref.close();
    }
    deletePost() {
      this.store.dispatch((0,_store_post_post_action__WEBPACK_IMPORTED_MODULE_0__.deletePostAction)({
        postId: this.config.data.postId,
        userId: this.config.data.userId
      }));
      this.ref.close();
    }
    static #_ = this.ɵfac = function PostDeleteModalComponent_Factory(t) {
      return new (t || PostDeleteModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__.DynamicDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PostDeleteModalComponent,
      selectors: [["app-post-delete-modal"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__.DialogService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 9,
      consts: [[1, "wrapper"], [1, "title"], [1, "controls"], ["pButton", "", "pRipple", "", 1, "w-full", "md:w-auto", 3, "click", "label"], ["pButton", "", "pRipple", "", 1, "w-full", "md:w-auto", "p-button-secondary", 3, "click", "label"]],
      template: function PostDeleteModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostDeleteModalComponent_Template_button_click_5_listener() {
            return ctx.deletePost();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostDeleteModalComponent_Template_button_click_7_listener() {
            return ctx.closeModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "TITLE.DELETE_POST"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "BTN.DELETE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 7, "BTN.CANCEL"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialogModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.RippleModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.Ripple],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  min-width: 420px;\n  padding: 0;\n  align-items: center;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--mainContrastElement);\n}\n\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9zdC1kZWxldGUtbW9kYWwvcG9zdC1kZWxldGUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJyZW07XG4gIG1pbi13aWR0aDogNDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHZhcigtLW1haW5Db250cmFzdEVsZW1lbnQpO1xufVxuXG4uY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAycmVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return PostDeleteModalComponent;
})();

/***/ }),

/***/ 52125:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/post-footer/post-footer.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostFooterComponent: () => (/* binding */ PostFooterComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @enums/urls */ 94317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _directives_clickedOutside_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/clickedOutside.module */ 215);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/skeleton */ 76301);
/* harmony import */ var _ApiClient_backend_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ApiClient/backend/api */ 39039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 17780);













const _c0 = ["textContainer"];
function PostFooterComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reaction_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](reaction_r2.count);
  }
}
function PostFooterComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PostFooterComponent_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.toggleShowMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "BTN.MORE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 4, "BTN.LESS"));
  }
}
function PostFooterComponent_Conditional_23_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tag_r5.name);
  }
}
function PostFooterComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](1, PostFooterComponent_Conditional_23_For_2_Template, 2, 1, "button", 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r3.tags);
  }
}
let PostFooterComponent = /*#__PURE__*/(() => {
  class PostFooterComponent {
    constructor(toast, translate) {
      this.toast = toast;
      this.translate = translate;
      this.showMoreText = false;
      this.totalComments = 0;
      this.userReactions = [{
        reaction: 'Like',
        count: BigInt(0)
      }];
      this.title = '';
      this.description = '';
      this.postId = '';
      this.date = '';
      this.tags = [];
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_1__.URLS;
    }
    ngAfterViewInit() {
      const textElement = this.textContainer.nativeElement;
      this.showMoreText = textElement.scrollHeight > textElement.clientHeight;
    }
    ngOnChanges(changes) {
      if ('post' in changes && this.post !== null) {
        this.totalComments = this.post.totalComments;
        this.userReactions = this.post.reactions.length > 0 ? this.post.reactions : this.userReactions;
        this.title = this.post.languages[0].title;
        this.description = this.post.languages[0]?.description ?? '';
        this.postId = this.post.id;
        this.date = this.formatDate(this.post.createdAt.toString());
        this.tags = this.post.tags;
      }
    }
    toggleShowMore() {
      this.textContainer.nativeElement.classList.toggle('show-all');
    }
    copyLink(id) {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this.copy(`${_ApiClient_backend_api__WEBPACK_IMPORTED_MODULE_3__.Api.AppUrl}/${_this.translate.currentLang}/${_enums_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.POST}/${id}`);
      })();
    }
    copy(msg) {
      var _this2 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          yield navigator.clipboard.writeText(msg);
          _this2.toast.add({
            severity: 'success',
            summary: _this2.translate.instant('SUCCESS.TITLE'),
            detail: _this2.translate.instant('SUCCESS.URL_COPY')
          });
        } catch {
          _this2.toast.add({
            severity: 'error',
            summary: 'Error',
            detail: _this2.translate.instant('ERROR.URL_COPY')
          });
        }
      })();
    }
    formatDate(input) {
      const date = new Date(input);
      return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    }
    static #_ = this.ɵfac = function PostFooterComponent_Factory(t) {
      return new (t || PostFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: PostFooterComponent,
      selectors: [["app-post-footer"]],
      viewQuery: function PostFooterComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.textContainer = _t.first);
        }
      },
      inputs: {
        post: "post"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 26,
      vars: 6,
      consts: [["textContainer", ""], [1, "post-footer"], [1, "post-controls"], [1, "flex", "gap-3"], [1, "post-button", "post-button-hover", "gap-2"], ["width", "24", "height", "24"], ["href", "assets/images/icons.svg#comments"], ["width", "22", "height", "20"], ["href", "assets/images/icons.svg#likes"], [1, "post-button", 3, "click"], ["width", "28", "height", "28"], ["href", "assets/images/icons.svg#share"], [1, "post-text"], [1, "font-bold"], ["class", "more-text-button", 3, "click", 4, "ngIf"], [1, "post-tags", "mt-2"], [1, "date", "mt-2"], [1, "more-text-button", 3, "click"], [1, "more-text"], [1, "less-text"], [1, "post-tag"]],
      template: function PostFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "svg", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "use", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "svg", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "use", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](11, PostFooterComponent_For_12_Template, 2, 1, "span", null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PostFooterComponent_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.copyLink(ctx.postId));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "svg", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "use", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 12, 0)(18, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, PostFooterComponent_button_22_Template, 7, 6, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, PostFooterComponent_Conditional_23_Template, 3, 0, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.totalComments);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.userReactions);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.description, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMoreText);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](23, ctx.tags.length > 0 ? 23 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.date, " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _directives_clickedOutside_module__WEBPACK_IMPORTED_MODULE_2__.ClickedOutsideModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, primeng_skeleton__WEBPACK_IMPORTED_MODULE_8__.SkeletonModule],
      styles: [".post-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 1rem;\n}\n\n.post-controls[_ngcontent-%COMP%] {\n  padding: 0 0.5rem;\n  height: 3rem;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.post-text[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  max-height: 72px;\n  overflow: hidden;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  padding: 0 1rem;\n}\n.post-text.show-all[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n.post-text.show-all[_ngcontent-%COMP%]   .more-text-button[_ngcontent-%COMP%] {\n  position: static;\n  align-self: end;\n}\n.post-text.show-all[_ngcontent-%COMP%]   .more-text-button[_ngcontent-%COMP%]   .less-text[_ngcontent-%COMP%] {\n  display: block;\n}\n.post-text.show-all[_ngcontent-%COMP%]   .more-text-button[_ngcontent-%COMP%]   .more-text[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.less-text[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--greyText);\n  padding: 0 1rem;\n}\n\n.post-button[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2rem;\n  padding: 0 0.5rem;\n  border: none;\n  background-color: transparent;\n}\n.post-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.post-button[_ngcontent-%COMP%]:active {\n  opacity: 0.5;\n}\n\n.more-text-button[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  display: flex;\n  border: none;\n  font-size: 1rem;\n  color: var(--button);\n  position: absolute;\n  right: 0.5rem;\n  bottom: 1px;\n  background: var(--background);\n  background: linear-gradient(90deg, transparent 0px, var(--background) 45px);\n}\n\n.post-button-hover[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background-color: var(--input);\n  border-radius: 6px;\n}\n.post-button-hover[_ngcontent-%COMP%]:active {\n  opacity: 0.7;\n}\n\n.post-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  padding: 0 1rem;\n}\n\n.post-tag[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: none;\n  color: var(--tagsText);\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  height: 1.5rem;\n  background-color: var(--tagsBackground);\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0 0.5rem;\n  border-radius: 0.75rem;\n}\n.post-tag[_ngcontent-%COMP%]:hover {\n  color: var(--mainContrastElement);\n}\n.post-tag[_ngcontent-%COMP%]:active {\n  color: var(--mainContrastElement);\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9zdC1mb290ZXIvcG9zdC1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBRjtBQUVFO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0VBQUEsdUJBQUE7QUFBSjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQU47QUFFTTtFQUNFLGNBQUE7QUFBUjtBQUdNO0VBQ0UsYUFBQTtBQURSOztBQU9BO0VBQ0UsYUFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQUpGO0FBTUU7RUFDRSxZQUFBO0FBSko7QUFPRTtFQUNFLFlBQUE7QUFMSjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSwyRUFBQTtBQVBGOztBQVlFO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFUSjtBQVlFO0VBQ0UsWUFBQTtBQVZKOztBQWNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVhGOztBQWNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQVhGO0FBYUU7RUFDRSxpQ0FBQTtBQVhKO0FBYUU7RUFDRSxpQ0FBQTtFQUNBLFlBQUE7QUFYSiIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuXG5cbi5wb3N0LWNvbnRyb2xzIHtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGhlaWdodDogM3JlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucG9zdC10ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtaGVpZ2h0OiA3MnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIHBhZGRpbmc6IDAgMXJlbTtcblxuICAmLnNob3ctYWxsIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG5cbiAgICAubW9yZS10ZXh0LWJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgYWxpZ24tc2VsZjogZW5kO1xuXG4gICAgICAmIC5sZXNzLXRleHQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgJiAubW9yZS10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxlc3MtdGV4dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kYXRlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tZ3JleVRleHQpO1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG5cbi5wb3N0LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAycmVtO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5cblxuLm1vcmUtdGV4dC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tYnV0dG9uKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMC41cmVtO1xuICBib3R0b206IDFweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQgMHB4LCB2YXIoLS1iYWNrZ3JvdW5kKSA0NXB4KTtcbn1cblxuXG4ucG9zdC1idXR0b24taG92ZXIge1xuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0KTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG5cbi5wb3N0LXRhZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC41cmVtO1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG5cbi5wb3N0LXRhZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tdGFnc1RleHQpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWdzQmFja2dyb3VuZCk7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLW1haW5Db250cmFzdEVsZW1lbnQpO1xuICB9XG4gICY6YWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tbWFpbkNvbnRyYXN0RWxlbWVudCk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return PostFooterComponent;
})();

/***/ }),

/***/ 29709:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/post-header/post-header.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostHeaderComponent: () => (/* binding */ PostHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @enums/urls */ 94317);
/* harmony import */ var _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ApiClient/components/image/image.component */ 69379);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _directives_clickedOutside_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/clickedOutside.module */ 215);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/skeleton */ 76301);
/* harmony import */ var _components_post_delete_modal_post_delete_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/post-delete-modal/post-delete-modal.component */ 8281);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dynamicdialog */ 55079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ 87912);
/* harmony import */ var _directives_clickedOutside_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/clickedOutside.directive */ 51182);




















const _c0 = (a0, a1, a2) => ["/", a0, a1, a2];
const _c1 = () => ["/"];
function PostHeaderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-image", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 4, ctx_r0.locale$), ctx_r0.URLS.PROFILE, ctx_r0.nicknameUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("idPicture", ctx_r0.pictureId)("userId", ctx_r0.creatorId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.userName, " ");
  }
}
function PostHeaderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p-skeleton", 9)(1, "p-skeleton", 10);
  }
}
function PostHeaderComponent_div_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "use", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostHeaderComponent_div_7_Conditional_2_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.showDeleteDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "use", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "BTN.EDIT_POST"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 5, "BTN.DELETE_POST"));
  }
}
function PostHeaderComponent_div_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "use", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 2, "BTN.REPORT_POST"));
  }
}
function PostHeaderComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("clickOutside", function PostHeaderComponent_div_7_Template_div_clickOutside_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.clickedOutside());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PostHeaderComponent_div_7_Conditional_2_Template, 12, 8)(3, PostHeaderComponent_div_7_Conditional_3_Template, 6, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](2, ctx_r0.isCurrentUserPost ? 2 : 3);
  }
}
function PostHeaderComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 21);
  }
}
let PostHeaderComponent = /*#__PURE__*/(() => {
  class PostHeaderComponent {
    constructor(translate, breakpointObserver, dialogService) {
      this.translate = translate;
      this.breakpointObserver = breakpointObserver;
      this.dialogService = dialogService;
      this.showMoreOptionTab = false;
      this.isMobileScreen = false;
      this.locale$ = this.translate.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.startWith)({
        lang: this.translate.currentLang
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(event => event.lang));
      this.creatorId = '';
      this.userName = '';
      this.pictureId = '';
      this.nicknameUrl = '';
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_0__.URLS;
    }
    ngOnInit() {
      this.breakpointObserver.observe(['(max-width: 768px)']).subscribe(res => {
        this.isMobileScreen = res.matches;
      });
    }
    ngOnChanges(changes) {
      if ('post' in changes && this.post !== null) {
        this.creatorId = this.post.userCreatorId;
        this.userName = this.post.userCreator.userProfile?.name ?? '';
        this.pictureId = this.post.userCreator?.pictureId ?? '';
        this.nicknameUrl = this.post.userCreator.userNickname?.nicknameUrl ?? '';
      }
    }
    toggleMoreOption(event) {
      if (event) {
        event.stopPropagation();
      }
      this.showMoreOptionTab = !this.showMoreOptionTab;
    }
    clickedOutside() {
      this.showMoreOptionTab = false;
    }
    showDeleteDialog() {
      this.showMoreOptionTab = false;
      this.ref = this.dialogService.open(_components_post_delete_modal_post_delete_modal_component__WEBPACK_IMPORTED_MODULE_3__.PostDeleteModalComponent, {
        data: {
          postId: this.post?.id,
          userId: this.post?.userCreatorId
        },
        showHeader: false,
        dismissableMask: true,
        closable: true,
        closeOnEscape: true
      });
    }
    ngOnDestroy() {
      if (this.ref) {
        this.ref.close();
      }
    }
    static #_ = this.ɵfac = function PostHeaderComponent_Factory(t) {
      return new (t || PostHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_10__.DialogService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: PostHeaderComponent,
      selectors: [["app-post-header"]],
      inputs: {
        post: "post",
        isCurrentUserPost: "isCurrentUserPost"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_10__.DialogService]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 3,
      consts: [[1, "post-header"], [1, "flex", "gap-2", "align-items-center"], [1, "option-button", 3, "click"], ["width", "32", "height", "6"], ["href", "assets/images/icons.svg#post-more-option"], ["class", "moreOption-tab", "appClickOutside", "", 3, "clickOutside", 4, "ngIf"], ["class", "overlay", 4, "ngIf"], [1, "post-author", 3, "routerLink"], ["folder", "UserPictures", "defaultImageUrl", "assets/videos/noUserVid.mp4", 3, "idPicture", "userId"], ["size", "2rem", "shape", "circle"], ["height", "1.5rem", "width", "6rem"], ["appClickOutside", "", 1, "moreOption-tab", 3, "clickOutside"], [1, "moreOption-tab-buttons"], ["type", "button", 1, "moreOption-tab-button", 3, "routerLink"], ["width", "38", "height", "38"], ["href", "assets/images/icons.svg#edit-post"], ["type", "button", 1, "moreOption-tab-button", "delete-post", 3, "click"], ["href", "assets/images/icons.svg#delete-post"], ["type", "button", 1, "moreOption-tab-button", "delete-post", 3, "routerLink"], ["width", "38", "height", "25"], ["href", "assets/images/icons.svg#warning-mark"], [1, "overlay"]],
      template: function PostHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PostHeaderComponent_Conditional_2_Template, 4, 10)(3, PostHeaderComponent_Conditional_3_Template, 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostHeaderComponent_Template_button_click_4_listener($event) {
            return ctx.toggleMoreOption($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "svg", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "use", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, PostHeaderComponent_div_7_Template, 4, 1, "div", 5)(8, PostHeaderComponent_div_8_Template, 1, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](2, ctx.post ? 2 : 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showMoreOptionTab);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showMoreOptionTab && ctx.isMobileScreen);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_1__.ImageComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _directives_clickedOutside_module__WEBPACK_IMPORTED_MODULE_2__.ClickedOutsideModule, _directives_clickedOutside_directive__WEBPACK_IMPORTED_MODULE_4__.ClickedOutsideDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, primeng_skeleton__WEBPACK_IMPORTED_MODULE_13__.SkeletonModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_13__.Skeleton],
      styles: [".post-header[_ngcontent-%COMP%] {\n  position: relative;\n  font-weight: 700;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n  height: 3.5rem;\n  padding: 0 1rem;\n}\n\n.post-author[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 1rem;\n  overflow: hidden;\n}\n\n.option-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2rem;\n  padding: 0 0.5rem;\n  border: none;\n  background-color: transparent;\n}\n.option-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.option-button[_ngcontent-%COMP%]:active {\n  opacity: 0.5;\n}\n\n.moreOption-tab[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: fixed;\n  bottom: 59px;\n  left: 0;\n  width: 100%;\n  gap: 1rem;\n  border-radius: 16px 16px 0 0;\n  background-color: var(--background);\n}\n@media (min-width: 768px) {\n  .moreOption-tab[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    left: auto;\n    transform: translateY(100%);\n    width: -moz-fit-content;\n    width: fit-content;\n    border-radius: 0 0 8px 8px;\n    background-color: var(--input);\n  }\n}\n\n.moreOption-tab-buttons[_ngcontent-%COMP%] {\n  margin: 1.5rem 2rem;\n  gap: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 768px) {\n  .moreOption-tab-buttons[_ngcontent-%COMP%] {\n    margin: 1rem;\n    gap: 0.5rem;\n  }\n}\n\n.moreOption-tab-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  gap: 20px;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 24px;\n}\n@media (min-width: 768px) {\n  .moreOption-tab-button[_ngcontent-%COMP%] {\n    color: var(--textMenuGrey);\n    cursor: pointer;\n    font-size: 18px;\n    gap: 1rem;\n  }\n  .moreOption-tab-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n  .moreOption-tab-button[_ngcontent-%COMP%]:hover {\n    color: var(--mainContrastElement);\n  }\n}\n\n.delete-post[_ngcontent-%COMP%] {\n  color: var(--errorMessage);\n}\n.delete-post[_ngcontent-%COMP%]:hover {\n  color: var(--mainContrastElement);\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 60px);\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 99;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9zdC1oZWFkZXIvcG9zdC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7QUFDSjtBQUVFO0VBQ0UsWUFBQTtBQUFKOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtBQUZGO0FBSUU7RUFWRjtJQVdJLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxVQUFBO0lBQ0EsMkJBQUE7SUFDQSx1QkFBQTtJQUFBLGtCQUFBO0lBQ0EsMEJBQUE7SUFDQSw4QkFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFERjtBQUdFO0VBTkY7SUFPSSxZQUFBO0lBQ0EsV0FBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUVFO0VBYkY7SUFjSSwwQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsU0FBQTtFQUNGO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQUNKO0VBRUU7SUFDRSxpQ0FBQTtFQUFKO0FBQ0Y7O0FBTUE7RUFDRSwwQkFBQTtBQUhGO0FBS0U7RUFDRSxpQ0FBQTtBQUhKOztBQVFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FBTEYiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuXG4ucG9zdC1hdXRob3Ige1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ub3B0aW9uLWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMnJlbTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxufVxuXG5cbi5tb3JlT3B0aW9uLXRhYiB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDU5cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogYXV0bztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0KTtcbiAgfVxufVxuXG4ubW9yZU9wdGlvbi10YWItYnV0dG9ucyB7XG4gIG1hcmdpbjogMS41cmVtIDJyZW07XG4gIGdhcDogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgZ2FwOiAwLjVyZW07XG4gIH1cbn1cblxuLm1vcmVPcHRpb24tdGFiLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZ2FwOiAyMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0TWVudUdyZXkpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZ2FwOiAxcmVtO1xuXG4gICAgJiBzdmcge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tbWFpbkNvbnRyYXN0RWxlbWVudClcbiAgICB9XG4gIH1cblxuXG59XG5cbi5kZWxldGUtcG9zdCB7XG4gIGNvbG9yOiB2YXIoLS1lcnJvck1lc3NhZ2UpO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1tYWluQ29udHJhc3RFbGVtZW50KVxuICB9XG59XG5cbi8vTW9yZSBvcHRpb24gdGFiXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiA5OTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return PostHeaderComponent;
})();

/***/ }),

/***/ 68160:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-confirmdialog.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmDialog: () => (/* binding */ ConfirmDialog),
/* harmony export */   ConfirmDialogModule: () => (/* binding */ ConfirmDialogModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 35228);
/* harmony import */ var primeng_icons_check__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/check */ 82289);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/times */ 57727);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 7251);















const _c0 = ["content"];
const _c1 = [[["p-footer"]]];
const _c2 = ["p-footer"];
const _c3 = a0 => ({
  "p-dialog p-confirm-dialog p-component": true,
  "p-dialog-rtl": a0
});
const _c4 = (a0, a1) => ({
  transform: a0,
  transition: a1
});
const _c5 = a0 => ({
  value: "visible",
  params: a0
});
const _c6 = a0 => ({
  $implicit: a0
});
const _c7 = () => ({
  "p-dialog-header-icon p-dialog-header-close p-link": true
});
function ConfirmDialog_div_0_div_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function ConfirmDialog_div_0_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmDialog_div_0_div_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headlessTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c6, ctx_r1.confirmation));
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmDialog_div_0_div_1_ng_template_2_div_0_ng_container_1_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headerTemplate);
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1.ariaLabelledBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.option("header"));
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialog_div_0_div_1_ng_template_2_div_1_button_3_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.close($event));
    })("keydown.enter", function ConfirmDialog_div_0_div_1_ng_template_2_div_1_button_3_Template_button_keydown_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.close($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "TimesIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.closeAriaLabel);
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmDialog_div_0_div_1_ng_template_2_div_1_span_1_Template, 2, 2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfirmDialog_div_0_div_1_ng_template_2_div_1_button_3_Template, 2, 3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.option("header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.closable);
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 3);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.option("icon"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-confirm-dialog-icon");
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_ng_container_5_1_ng_template_0_Template(rf, ctx) {}
function ConfirmDialog_div_0_div_1_ng_template_2_ng_container_5_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmDialog_div_0_div_1_ng_template_2_ng_container_5_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmDialog_div_0_div_1_ng_template_2_ng_container_5_1_Template, 1, 0, null, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.iconTemplate);
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.option("message"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_ng_container_7_1_ng_template_0_Template(rf, ctx) {}
function ConfirmDialog_div_0_div_1_ng_template_2_ng_container_7_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmDialog_div_0_div_1_ng_template_2_ng_container_7_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmDialog_div_0_div_1_ng_template_2_ng_container_7_1_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.messageTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c6, ctx_r1.confirmation));
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfirmDialog_div_0_div_1_ng_template_2_div_8_ng_container_2_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_1_ng_container_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.option("rejectIcon"));
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_1_ng_container_1_TimesIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesIcon", 28);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-button-icon-left");
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_1_ng_container_1_i_1_Template, 1, 2, "i", 26)(2, ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_1_ng_container_1_TimesIcon_2_Template, 1, 1, "TimesIcon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.option("rejectIcon"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.option("rejectIcon"));
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_1_span_2_1_ng_template_0_Template(rf, ctx) {}
function ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_1_span_2_1_Template, 1, 0, null, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.rejectIconTemplate);
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.reject());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_1_ng_container_1_Template, 3, 2, "ng-container", 11)(2, ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_1_span_2_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.option("rejectButtonStyleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r1.rejectButtonLabel)("ngClass", "p-confirm-dialog-reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.rejectAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.rejectIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.rejectIconTemplate);
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_2_ng_container_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.option("acceptIcon"));
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_2_ng_container_1_CheckIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "CheckIcon", 28);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-button-icon-left");
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_2_ng_container_1_i_1_Template, 1, 2, "i", 26)(2, ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_2_ng_container_1_CheckIcon_2_Template, 1, 1, "CheckIcon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.option("acceptIcon"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.option("acceptIcon"));
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_2_span_2_1_ng_template_0_Template(rf, ctx) {}
function ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_2_span_2_1_Template, 1, 0, null, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.acceptIconTemplate);
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.accept());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_2_ng_container_1_Template, 3, 2, "ng-container", 11)(2, ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_2_span_2_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.option("acceptButtonStyleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r1.acceptButtonLabel)("ngClass", "p-confirm-dialog-accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.acceptAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.acceptIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.acceptIconTemplate);
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_1_Template, 3, 7, "button", 23)(2, ConfirmDialog_div_0_div_1_ng_template_2_div_9_button_2_Template, 3, 7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.option("rejectVisible"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.option("acceptVisible"));
  }
}
function ConfirmDialog_div_0_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmDialog_div_0_div_1_ng_template_2_div_0_Template, 2, 1, "div", 8)(1, ConfirmDialog_div_0_div_1_ng_template_2_div_1_Template, 4, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfirmDialog_div_0_div_1_ng_template_2_i_4_Template, 1, 3, "i", 10)(5, ConfirmDialog_div_0_div_1_ng_template_2_ng_container_5_Template, 2, 1, "ng-container", 11)(6, ConfirmDialog_div_0_div_1_ng_template_2_span_6_Template, 1, 1, "span", 12)(7, ConfirmDialog_div_0_div_1_ng_template_2_ng_container_7_Template, 2, 4, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ConfirmDialog_div_0_div_1_ng_template_2_div_8_Template, 3, 1, "div", 13)(9, ConfirmDialog_div_0_div_1_ng_template_2_div_9_Template, 3, 2, "div", 13);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.iconTemplate && ctx_r1.option("icon"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.iconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.messageTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.messageTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.footer || ctx_r1.footerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.footer && !ctx_r1.footerTemplate);
  }
}
function ConfirmDialog_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@animation.start", function ConfirmDialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onAnimationStart($event));
    })("@animation.done", function ConfirmDialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onAnimationEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmDialog_div_0_div_1_ng_container_1_Template, 2, 4, "ng-container", 6)(2, ConfirmDialog_div_0_div_1_ng_template_2_Template, 10, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notHeadless_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c3, ctx_r1.rtl))("ngStyle", ctx_r1.style)("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c4, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-modal", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.headlessTemplate)("ngIfElse", notHeadless_r6);
  }
}
function ConfirmDialog_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmDialog_div_0_div_1_Template, 4, 16, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.maskStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.getMaskClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.visible);
  }
}
const showAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  transform: '{{transform}}',
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{transition}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  transform: 'none',
  opacity: 1
}))]);
const hideAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{transition}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  transform: '{{transform}}',
  opacity: 0
}))]);
/**
 * ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API.
 * @group Components
 */
let ConfirmDialog = /*#__PURE__*/(() => {
  class ConfirmDialog {
    el;
    renderer;
    confirmationService;
    zone;
    cd;
    config;
    document;
    /**
     * Title text of the dialog.
     * @group Props
     */
    header;
    /**
     * Icon to display next to message.
     * @group Props
     */
    icon;
    /**
     * Message of the confirmation.
     * @group Props
     */
    message;
    /**
     * Inline style of the element.
     * @group Props
     */
    get style() {
      return this._style;
    }
    set style(value) {
      this._style = value;
      this.cd.markForCheck();
    }
    /**
     * Class of the element.
     * @group Props
     */
    styleClass;
    /**
     * Specify the CSS class(es) for styling the mask element
     * @group Props
     */
    maskStyleClass;
    /**
     * Icon of the accept button.
     * @group Props
     */
    acceptIcon;
    /**
     * Label of the accept button.
     * @group Props
     */
    acceptLabel;
    /**
     * Defines a string that labels the close button for accessibility.
     * @group Props
     */
    closeAriaLabel;
    /**
     * Defines a string that labels the accept button for accessibility.
     * @group Props
     */
    acceptAriaLabel;
    /**
     * Visibility of the accept button.
     * @group Props
     */
    acceptVisible = true;
    /**
     * Icon of the reject button.
     * @group Props
     */
    rejectIcon;
    /**
     * Label of the reject button.
     * @group Props
     */
    rejectLabel;
    /**
     * Defines a string that labels the reject button for accessibility.
     * @group Props
     */
    rejectAriaLabel;
    /**
     * Visibility of the reject button.
     * @group Props
     */
    rejectVisible = true;
    /**
     * Style class of the accept button.
     * @group Props
     */
    acceptButtonStyleClass;
    /**
     * Style class of the reject button.
     * @group Props
     */
    rejectButtonStyleClass;
    /**
     * Specifies if pressing escape key should hide the dialog.
     * @group Props
     */
    closeOnEscape = true;
    /**
     * Specifies if clicking the modal background should hide the dialog.
     * @group Props
     */
    dismissableMask;
    /**
     * Determines whether scrolling behavior should be blocked within the component.
     * @group Props
     */
    blockScroll = true;
    /**
     * When enabled dialog is displayed in RTL direction.
     * @group Props
     */
    rtl = false;
    /**
     * Adds a close icon to the header to hide the dialog.
     * @group Props
     */
    closable = true;
    /**
     *  Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
     * @group Props
     */
    key;
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex = true;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex = 0;
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    /**
     * When enabled, can only focus on elements inside the confirm dialog.
     * @group Props
     */
    focusTrap = true;
    /**
     * Element to receive the focus when the dialog gets visible.
     * @group Props
     */
    defaultFocus = 'accept';
    /**
     * Object literal to define widths per screen size.
     * @group Props
     */
    breakpoints;
    /**
     * Current visible state as a boolean.
     * @group Props
     */
    get visible() {
      return this._visible;
    }
    set visible(value) {
      this._visible = value;
      if (this._visible && !this.maskVisible) {
        this.maskVisible = true;
      }
      this.cd.markForCheck();
    }
    /**
     *  Allows getting the position of the component.
     * @group Props
     */
    get position() {
      return this._position;
    }
    set position(value) {
      this._position = value;
      switch (value) {
        case 'top-left':
        case 'bottom-left':
        case 'left':
          this.transformOptions = 'translate3d(-100%, 0px, 0px)';
          break;
        case 'top-right':
        case 'bottom-right':
        case 'right':
          this.transformOptions = 'translate3d(100%, 0px, 0px)';
          break;
        case 'bottom':
          this.transformOptions = 'translate3d(0px, 100%, 0px)';
          break;
        case 'top':
          this.transformOptions = 'translate3d(0px, -100%, 0px)';
          break;
        default:
          this.transformOptions = 'scale(0.7)';
          break;
      }
    }
    /**
     * Callback to invoke when dialog is hidden.
     * @param {ConfirmEventType} enum - Custom confirm event.
     * @group Emits
     */
    onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    footer;
    contentViewChild;
    templates;
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          case 'message':
            this.messageTemplate = item.template;
            break;
          case 'icon':
            this.iconTemplate = item.template;
            break;
          case 'rejecticon':
            this.rejectIconTemplate = item.template;
            break;
          case 'accepticon':
            this.acceptIconTemplate = item.template;
            break;
          case 'headless':
            this.headlessTemplate = item.template;
            break;
        }
      });
    }
    headerTemplate;
    footerTemplate;
    rejectIconTemplate;
    acceptIconTemplate;
    messageTemplate;
    iconTemplate;
    headlessTemplate;
    confirmation;
    _visible;
    _style;
    maskVisible;
    documentEscapeListener;
    container;
    wrapper;
    contentContainer;
    subscription;
    maskClickListener;
    preWidth;
    _position = 'center';
    transformOptions = 'scale(0.7)';
    styleElement;
    id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
    ariaLabelledBy = this.getAriaLabelledBy();
    confirmationOptions;
    translationSubscription;
    constructor(el, renderer, confirmationService, zone, cd, config, document) {
      this.el = el;
      this.renderer = renderer;
      this.confirmationService = confirmationService;
      this.zone = zone;
      this.cd = cd;
      this.config = config;
      this.document = document;
      this.subscription = this.confirmationService.requireConfirmation$.subscribe(confirmation => {
        if (!confirmation) {
          this.hide();
          return;
        }
        if (confirmation.key === this.key) {
          this.confirmation = confirmation;
          this.confirmationOptions = {
            message: this.confirmation.message || this.message,
            icon: this.confirmation.icon || this.icon,
            header: this.confirmation.header || this.header,
            rejectVisible: this.confirmation.rejectVisible == null ? this.rejectVisible : this.confirmation.rejectVisible,
            acceptVisible: this.confirmation.acceptVisible == null ? this.acceptVisible : this.confirmation.acceptVisible,
            acceptLabel: this.confirmation.acceptLabel || this.acceptLabel,
            rejectLabel: this.confirmation.rejectLabel || this.rejectLabel,
            acceptIcon: this.confirmation.acceptIcon || this.acceptIcon,
            rejectIcon: this.confirmation.rejectIcon || this.rejectIcon,
            acceptButtonStyleClass: this.confirmation.acceptButtonStyleClass || this.acceptButtonStyleClass,
            rejectButtonStyleClass: this.confirmation.rejectButtonStyleClass || this.rejectButtonStyleClass,
            defaultFocus: this.confirmation.defaultFocus || this.defaultFocus,
            blockScroll: this.confirmation.blockScroll === false || this.confirmation.blockScroll === true ? this.confirmation.blockScroll : this.blockScroll,
            closeOnEscape: this.confirmation.closeOnEscape === false || this.confirmation.closeOnEscape === true ? this.confirmation.closeOnEscape : this.closeOnEscape,
            dismissableMask: this.confirmation.dismissableMask === false || this.confirmation.dismissableMask === true ? this.confirmation.dismissableMask : this.dismissableMask
          };
          if (this.confirmation.accept) {
            this.confirmation.acceptEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
            this.confirmation.acceptEvent.subscribe(this.confirmation.accept);
          }
          if (this.confirmation.reject) {
            this.confirmation.rejectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
            this.confirmation.rejectEvent.subscribe(this.confirmation.reject);
          }
          this.visible = true;
        }
      });
    }
    ngOnInit() {
      if (this.breakpoints) {
        this.createStyle();
      }
      this.translationSubscription = this.config.translationObserver.subscribe(() => {
        if (this.visible) {
          this.cd.markForCheck();
        }
      });
    }
    getAriaLabelledBy() {
      return this.header !== null ? (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)() + '_header' : null;
    }
    option(name) {
      const source = this.confirmationOptions || this;
      if (source.hasOwnProperty(name)) {
        return source[name];
      }
      return undefined;
    }
    onAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          this.container = event.element;
          this.wrapper = this.container?.parentElement;
          this.contentContainer = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.container, '.p-dialog-content');
          this.container?.setAttribute(this.id, '');
          this.appendContainer();
          this.moveOnTop();
          this.bindGlobalListeners();
          this.enableModality();
          const element = this.getElementToFocus();
          if (element) {
            element.focus();
          }
          break;
      }
    }
    onAnimationEnd(event) {
      switch (event.toState) {
        case 'void':
          this.onOverlayHide();
          break;
      }
    }
    getElementToFocus() {
      switch (this.option('defaultFocus')) {
        case 'accept':
          return primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.container, '.p-confirm-dialog-accept');
        case 'reject':
          return primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.container, '.p-confirm-dialog-reject');
        case 'close':
          return primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.container, '.p-dialog-header-close');
        case 'none':
          return null;
        //backward compatibility
        default:
          return primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.container, '.p-confirm-dialog-accept');
      }
    }
    appendContainer() {
      if (this.appendTo) {
        if (this.appendTo === 'body') this.document.body.appendChild(this.wrapper);else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.appendChild(this.wrapper, this.appendTo);
      }
    }
    restoreAppend() {
      if (this.wrapper && this.appendTo) {
        this.el.nativeElement.appendChild(this.wrapper);
      }
    }
    enableModality() {
      if (this.option('blockScroll')) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.document.body, 'p-overflow-hidden');
      }
      if (this.option('dismissableMask')) {
        this.maskClickListener = this.renderer.listen(this.wrapper, 'mousedown', event => {
          if (this.wrapper && this.wrapper.isSameNode(event.target)) {
            this.close(event);
          }
        });
      }
    }
    disableModality() {
      this.maskVisible = false;
      if (this.option('blockScroll')) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.document.body, 'p-overflow-hidden');
      }
      if (this.dismissableMask) {
        this.unbindMaskClickListener();
      }
      if (this.container && !this.cd['destroyed']) {
        this.cd.detectChanges();
      }
    }
    createStyle() {
      if (!this.styleElement) {
        this.styleElement = this.document.createElement('style');
        this.styleElement.type = 'text/css';
        this.document.head.appendChild(this.styleElement);
        let innerHTML = '';
        for (let breakpoint in this.breakpoints) {
          innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-dialog[${this.id}] {
                            width: ${this.breakpoints[breakpoint]} !important;
                        }
                    }
                `;
        }
        this.styleElement.innerHTML = innerHTML;
      }
    }
    close(event) {
      if (this.confirmation?.rejectEvent) {
        this.confirmation.rejectEvent.emit(primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmEventType.CANCEL);
      }
      this.hide(primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmEventType.CANCEL);
      event.preventDefault();
    }
    hide(type) {
      this.onHide.emit(type);
      this.visible = false;
      this.confirmation = null;
      this.confirmationOptions = null;
    }
    moveOnTop() {
      if (this.autoZIndex) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('modal', this.container, this.baseZIndex + this.config.zIndex.modal);
        this.wrapper.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
      }
    }
    getMaskClass() {
      let maskClass = {
        'p-dialog-mask p-component-overlay': true,
        'p-dialog-mask-scrollblocker': this.blockScroll
      };
      maskClass[this.getPositionClass().toString()] = true;
      return maskClass;
    }
    getPositionClass() {
      const positions = ['left', 'right', 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'];
      const pos = positions.find(item => item === this.position);
      return pos ? `p-dialog-${pos}` : '';
    }
    bindGlobalListeners() {
      if (this.option('closeOnEscape') && this.closable || this.focusTrap && !this.documentEscapeListener) {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
        this.documentEscapeListener = this.renderer.listen(documentTarget, 'keydown', event => {
          if (event.which == 27 && this.option('closeOnEscape') && this.closable) {
            if (parseInt(this.container.style.zIndex) === primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.get(this.container) && this.visible) {
              this.close(event);
            }
          }
          if (event.which === 9 && this.focusTrap) {
            event.preventDefault();
            let focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getFocusableElements(this.container);
            if (focusableElements && focusableElements.length > 0) {
              if (!focusableElements[0].ownerDocument.activeElement) {
                focusableElements[0].focus();
              } else {
                let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
                if (event.shiftKey) {
                  if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
                } else {
                  if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
                }
              }
            }
          }
        });
      }
    }
    unbindGlobalListeners() {
      if (this.documentEscapeListener) {
        this.documentEscapeListener();
        this.documentEscapeListener = null;
      }
    }
    unbindMaskClickListener() {
      if (this.maskClickListener) {
        this.maskClickListener();
        this.maskClickListener = null;
      }
    }
    onOverlayHide() {
      if (this.container && this.autoZIndex) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.container);
      }
      this.disableModality();
      this.unbindGlobalListeners();
      this.container = null;
    }
    destroyStyle() {
      if (this.styleElement) {
        this.document.head.removeChild(this.styleElement);
        this.styleElement = null;
      }
    }
    ngOnDestroy() {
      this.restoreAppend();
      this.onOverlayHide();
      this.subscription.unsubscribe();
      if (this.translationSubscription) {
        this.translationSubscription.unsubscribe();
      }
      this.destroyStyle();
    }
    accept() {
      if (this.confirmation && this.confirmation.acceptEvent) {
        this.confirmation.acceptEvent.emit();
      }
      this.hide(primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmEventType.ACCEPT);
    }
    reject() {
      if (this.confirmation && this.confirmation.rejectEvent) {
        this.confirmation.rejectEvent.emit(primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmEventType.REJECT);
      }
      this.hide(primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmEventType.REJECT);
    }
    get acceptButtonLabel() {
      return this.option('acceptLabel') || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.ACCEPT);
    }
    get rejectButtonLabel() {
      return this.option('rejectLabel') || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.REJECT);
    }
    static ɵfac = function ConfirmDialog_Factory(t) {
      return new (t || ConfirmDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmDialog,
      selectors: [["p-confirmDialog"]],
      contentQueries: function ConfirmDialog_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.Footer, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function ConfirmDialog_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        header: "header",
        icon: "icon",
        message: "message",
        style: "style",
        styleClass: "styleClass",
        maskStyleClass: "maskStyleClass",
        acceptIcon: "acceptIcon",
        acceptLabel: "acceptLabel",
        closeAriaLabel: "closeAriaLabel",
        acceptAriaLabel: "acceptAriaLabel",
        acceptVisible: "acceptVisible",
        rejectIcon: "rejectIcon",
        rejectLabel: "rejectLabel",
        rejectAriaLabel: "rejectAriaLabel",
        rejectVisible: "rejectVisible",
        acceptButtonStyleClass: "acceptButtonStyleClass",
        rejectButtonStyleClass: "rejectButtonStyleClass",
        closeOnEscape: "closeOnEscape",
        dismissableMask: "dismissableMask",
        blockScroll: "blockScroll",
        rtl: "rtl",
        closable: "closable",
        appendTo: "appendTo",
        key: "key",
        autoZIndex: "autoZIndex",
        baseZIndex: "baseZIndex",
        transitionOptions: "transitionOptions",
        focusTrap: "focusTrap",
        defaultFocus: "defaultFocus",
        breakpoints: "breakpoints",
        visible: "visible",
        position: "position"
      },
      outputs: {
        onHide: "onHide"
      },
      ngContentSelectors: _c2,
      decls: 1,
      vars: 1,
      consts: [["notHeadless", ""], ["content", ""], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], ["role", "alertdialog", 3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["role", "alertdialog", 3, "ngClass", "ngStyle"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-dialog-header", 4, "ngIf"], [1, "p-dialog-content"], [3, "ngClass", "class", 4, "ngIf"], [4, "ngIf"], ["class", "p-confirm-dialog-message", 3, "innerHTML", 4, "ngIf"], ["class", "p-dialog-footer", 4, "ngIf"], [1, "p-dialog-header"], [4, "ngTemplateOutlet"], ["class", "p-dialog-title", 3, "id", 4, "ngIf"], [1, "p-dialog-header-icons"], ["type", "button", "role", "button", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], [1, "p-dialog-title", 3, "id"], ["type", "button", "role", "button", 3, "click", "keydown.enter", "ngClass"], [1, "p-confirm-dialog-message", 3, "innerHTML"], [1, "p-dialog-footer"], ["type", "button", "pRipple", "", "pButton", "", 3, "label", "ngClass", "class", "click", 4, "ngIf"], ["type", "button", "pRipple", "", "pButton", "", 3, "click", "label", "ngClass"], ["class", "p-button-icon-left", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-button-icon-left"]],
      template: function ConfirmDialog_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmDialog_div_0_Template, 2, 4, "div", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maskVisible);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__.TimesIcon, primeng_icons_check__WEBPACK_IMPORTED_MODULE_9__.CheckIcon],
      styles: ["@layer primeng{.p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-webkit-transition:none;transition:none;transform:none;width:100vw!important;height:100vh!important;top:0!important;left:0!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(showAnimation)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(hideAnimation)])])]
      },
      changeDetection: 0
    });
  }
  return ConfirmDialog;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ConfirmDialogModule = /*#__PURE__*/(() => {
  class ConfirmDialogModule {
    static ɵfac = function ConfirmDialogModule_Factory(t) {
      return new (t || ConfirmDialogModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ConfirmDialogModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__.TimesIcon, primeng_icons_check__WEBPACK_IMPORTED_MODULE_9__.CheckIcon, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
  return ConfirmDialogModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 16280:
/*!**********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-dialog.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ Dialog),
/* harmony export */   DialogModule: () => (/* binding */ DialogModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 35228);
/* harmony import */ var primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/focustrap */ 61257);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/times */ 57727);
/* harmony import */ var primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/windowmaximize */ 31717);
/* harmony import */ var primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/windowminimize */ 69551);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 7251);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 49136);


















const _c0 = ["titlebar"];
const _c1 = ["content"];
const _c2 = ["footer"];
const _c3 = ["*", [["p-header"]], [["p-footer"]]];
const _c4 = ["*", "p-header", "p-footer"];
const _c5 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => ({
  "p-dialog-mask": true,
  "p-component-overlay p-component-overlay-enter": a0,
  "p-dialog-mask-scrollblocker": a1,
  "p-dialog-left": a2,
  "p-dialog-right": a3,
  "p-dialog-top": a4,
  "p-dialog-top-left": a5,
  "p-dialog-top-right": a6,
  "p-dialog-bottom": a7,
  "p-dialog-bottom-left": a8,
  "p-dialog-bottom-right": a9
});
const _c6 = (a0, a1, a2, a3) => ({
  "p-dialog p-component": true,
  "p-dialog-rtl": a0,
  "p-dialog-draggable": a1,
  "p-dialog-resizable": a2,
  "p-dialog-maximized": a3
});
const _c7 = (a0, a1) => ({
  transform: a0,
  transition: a1
});
const _c8 = a0 => ({
  value: "visible",
  params: a0
});
const _c9 = () => ({
  "p-dialog-header-icon p-dialog-header-maximize p-link": true
});
const _c10 = () => ({
  "p-dialog-header-icon p-dialog-header-close p-link": true
});
function Dialog_div_0_div_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dialog_div_0_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headlessTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function Dialog_div_0_div_1_ng_template_3_div_0_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.initResize($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1.ariaLabelledBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.header);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1.ariaLabelledBy);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 25);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.maximized ? ctx_r1.minimizeIcon : ctx_r1.maximizeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMaximizeIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "WindowMaximizeIcon", 27);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dialog-header-maximize-icon");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMinimizeIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "WindowMinimizeIcon", 27);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dialog-header-maximize-icon");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMaximizeIcon_1_Template, 1, 1, "WindowMaximizeIcon", 26)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMinimizeIcon_2_Template, 1, 1, "WindowMinimizeIcon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.maximized && !ctx_r1.maximizeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.maximized && !ctx_r1.minimizeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_ng_template_0_Template(rf, ctx) {}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.maximizeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_ng_template_0_Template(rf, ctx) {}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.minimizeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.maximize());
    })("keydown.enter", function Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template_button_keydown_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.maximize());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_span_1_Template, 1, 1, "span", 23)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_Template, 3, 2, "ng-container", 24)(3, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_Template, 2, 1, "ng-container", 24)(4, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r1.maximizable ? "0" : "-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.maximizeIcon && !ctx_r1.maximizeIconTemplate && !ctx_r1.minimizeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.maximizeIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.maximized);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.maximized);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 30);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.closeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_TimesIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesIcon", 27);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dialog-header-close-icon");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_span_1_Template, 1, 1, "span", 29)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_TimesIcon_2_Template, 1, 1, "TimesIcon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.closeIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.closeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_ng_template_0_Template(rf, ctx) {}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.closeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.close($event));
    })("keydown.enter", function Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template_button_keydown_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.close($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_Template, 3, 2, "ng-container", 24)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.closeAriaLabel)("tabindex", ctx_r1.closeTabindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.closeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function Dialog_div_0_div_1_ng_template_3_div_1_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.initDrag($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dialog_div_0_div_1_ng_template_3_div_1_span_2_Template, 2, 2, "span", 17)(3, Dialog_div_0_div_1_ng_template_3_div_1_span_3_Template, 2, 1, "span", 17)(4, Dialog_div_0_div_1_ng_template_3_div_1_ng_container_4_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template, 5, 7, "button", 19)(7, Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template, 3, 6, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.headerFacet && !ctx_r1.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.headerFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.maximizable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.closable);
  }
}
function Dialog_div_0_div_1_ng_template_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Dialog_div_0_div_1_ng_template_3_div_6_ng_container_3_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_div_1_ng_template_3_div_0_Template, 1, 0, "div", 11)(1, Dialog_div_0_div_1_ng_template_3_div_1_Template, 8, 5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Dialog_div_0_div_1_ng_template_3_ng_container_5_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dialog_div_0_div_1_ng_template_3_div_6_Template, 4, 1, "div", 14);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.resizable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-dialog-content")("ngStyle", ctx_r1.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.contentTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.footerFacet || ctx_r1.footerTemplate);
  }
}
function Dialog_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@animation.start", function Dialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onAnimationStart($event));
    })("@animation.done", function Dialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onAnimationEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dialog_div_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 9)(3, Dialog_div_0_div_1_ng_template_3_Template, 7, 8, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notHeadless_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](10, _c6, ctx_r1.rtl, ctx_r1.draggable, ctx_r1.resizable, ctx_r1.maximized))("ngStyle", ctx_r1.style)("pFocusTrapDisabled", ctx_r1.focusTrap === false)("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c7, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-modal", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.headlessTemplate)("ngIfElse", notHeadless_r8);
  }
}
function Dialog_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function Dialog_div_0_Template_div_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.containerFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_Template, 5, 20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r1.maskStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.maskStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](6, _c5, [ctx_r1.modal, ctx_r1.modal || ctx_r1.blockScroll, ctx_r1.position === "left", ctx_r1.position === "right", ctx_r1.position === "top", ctx_r1.position === "topleft" || ctx_r1.position === "top-left", ctx_r1.position === "topright" || ctx_r1.position === "top-right", ctx_r1.position === "bottom", ctx_r1.position === "bottomleft" || ctx_r1.position === "bottom-left", ctx_r1.position === "bottomright" || ctx_r1.position === "bottom-right"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.visible);
  }
}
const showAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  transform: '{{transform}}',
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{transition}}')]);
const hideAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{transition}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  transform: '{{transform}}',
  opacity: 0
}))]);
/**
 * Dialog is a container to display content in an overlay window.
 * @group Components
 */
let Dialog = /*#__PURE__*/(() => {
  class Dialog {
    document;
    platformId;
    el;
    renderer;
    zone;
    cd;
    config;
    /**
     * Title text of the dialog.
     * @group Props
     */
    header;
    /**
     * Enables dragging to change the position using header.
     * @group Props
     */
    draggable = true;
    /**
     * Enables resizing of the content.
     * @group Props
     */
    resizable = true;
    /**
     * Defines the left offset of dialog.
     * @group Props
     * @deprecated positionLeft property is deprecated.
     */
    get positionLeft() {
      return 0;
    }
    set positionLeft(_positionLeft) {
      console.log('positionLeft property is deprecated.');
    }
    /**
     * Defines the top offset of dialog.
     * @group Props
     * @deprecated positionTop property is deprecated.
     */
    get positionTop() {
      return 0;
    }
    set positionTop(_positionTop) {
      console.log('positionTop property is deprecated.');
    }
    /**
     * Style of the content section.
     * @group Props
     */
    contentStyle;
    /**
     * Style class of the content.
     * @group Props
     */
    contentStyleClass;
    /**
     * Defines if background should be blocked when dialog is displayed.
     * @group Props
     */
    modal = false;
    /**
     * Specifies if pressing escape key should hide the dialog.
     * @group Props
     */
    closeOnEscape = true;
    /**
     * Specifies if clicking the modal background should hide the dialog.
     * @group Props
     */
    dismissableMask = false;
    /**
     * When enabled dialog is displayed in RTL direction.
     * @group Props
     */
    rtl = false;
    /**
     * Adds a close icon to the header to hide the dialog.
     * @group Props
     */
    closable = true;
    /**
     * Defines if the component is responsive.
     * @group Props
     * @deprecated Responsive property is deprecated.
     */
    get responsive() {
      return false;
    }
    set responsive(_responsive) {
      console.log('Responsive property is deprecated.');
    }
    /**
     * Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * Object literal to define widths per screen size.
     * @group Props
     */
    breakpoints;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Style class of the mask.
     * @group Props
     */
    maskStyleClass;
    /**
     * Style of the mask.
     * @group Props
     */
    maskStyle;
    /**
     * Whether to show the header or not.
     * @group Props
     */
    showHeader = true;
    /**
     * Defines the breakpoint of the component responsive.
     * @group Props
     * @deprecated Breakpoint property is not utilized and deprecated. Use breakpoints or CSS media queries instead.
     */
    get breakpoint() {
      return 649;
    }
    set breakpoint(_breakpoint) {
      console.log('Breakpoint property is not utilized and deprecated, use breakpoints or CSS media queries instead.');
    }
    /**
     * Whether background scroll should be blocked when dialog is visible.
     * @group Props
     */
    blockScroll = false;
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex = true;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex = 0;
    /**
     * Minimum value for the left coordinate of dialog in dragging.
     * @group Props
     */
    minX = 0;
    /**
     * Minimum value for the top coordinate of dialog in dragging.
     * @group Props
     */
    minY = 0;
    /**
     * When enabled, first button receives focus on show.
     * @group Props
     */
    focusOnShow = true;
    /**
     * Whether the dialog can be displayed full screen.
     * @group Props
     */
    maximizable = false;
    /**
     * Keeps dialog in the viewport.
     * @group Props
     */
    keepInViewport = true;
    /**
     * When enabled, can only focus on elements inside the dialog.
     * @group Props
     */
    focusTrap = true;
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    /**
     * Name of the close icon.
     * @group Props
     */
    closeIcon;
    /**
     * Defines a string that labels the close button for accessibility.
     * @group Props
     */
    closeAriaLabel;
    /**
     * Index of the close button in tabbing order.
     * @group Props
     */
    closeTabindex = '0';
    /**
     * Name of the minimize icon.
     * @group Props
     */
    minimizeIcon;
    /**
     * Name of the maximize icon.
     * @group Props
     */
    maximizeIcon;
    /**
     * Specifies the visibility of the dialog.
     * @group Props
     */
    get visible() {
      return this._visible;
    }
    set visible(value) {
      this._visible = value;
      if (this._visible && !this.maskVisible) {
        this.maskVisible = true;
      }
    }
    /**
     * Inline style of the component.
     * @group Props
     */
    get style() {
      return this._style;
    }
    set style(value) {
      if (value) {
        this._style = {
          ...value
        };
        this.originalStyle = value;
      }
    }
    /**
     * Position of the dialog.
     * @group Props
     */
    get position() {
      return this._position;
    }
    set position(value) {
      this._position = value;
      switch (value) {
        case 'topleft':
        case 'bottomleft':
        case 'left':
          this.transformOptions = 'translate3d(-100%, 0px, 0px)';
          break;
        case 'topright':
        case 'bottomright':
        case 'right':
          this.transformOptions = 'translate3d(100%, 0px, 0px)';
          break;
        case 'bottom':
          this.transformOptions = 'translate3d(0px, 100%, 0px)';
          break;
        case 'top':
          this.transformOptions = 'translate3d(0px, -100%, 0px)';
          break;
        default:
          this.transformOptions = 'scale(0.7)';
          break;
      }
    }
    /**
     * Callback to invoke when dialog is shown.
     * @group Emits
     */
    onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog is hidden.
     * @group Emits
     */
    onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This EventEmitter is used to notify changes in the visibility state of a component.
     * @param {boolean} value - New value.
     * @group Emits
     */
    visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog resizing is initiated.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    onResizeInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog resizing is completed.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    onResizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog dragging is completed.
     * @param {DragEvent} event - Drag event.
     * @group Emits
     */
    onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog maximized or unmaximized.
     * @group Emits
     */
    onMaximize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    headerFacet;
    footerFacet;
    templates;
    headerViewChild;
    contentViewChild;
    footerViewChild;
    headerTemplate;
    contentTemplate;
    footerTemplate;
    maximizeIconTemplate;
    closeIconTemplate;
    minimizeIconTemplate;
    headlessTemplate;
    _visible = false;
    maskVisible;
    container;
    wrapper;
    dragging;
    ariaLabelledBy = this.getAriaLabelledBy();
    documentDragListener;
    documentDragEndListener;
    resizing;
    documentResizeListener;
    documentResizeEndListener;
    documentEscapeListener;
    maskClickListener;
    lastPageX;
    lastPageY;
    preventVisibleChangePropagation;
    maximized;
    preMaximizeContentHeight;
    preMaximizeContainerWidth;
    preMaximizeContainerHeight;
    preMaximizePageX;
    preMaximizePageY;
    id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
    _style = {};
    _position = 'center';
    originalStyle;
    transformOptions = 'scale(0.7)';
    styleElement;
    window;
    constructor(document, platformId, el, renderer, zone, cd, config) {
      this.document = document;
      this.platformId = platformId;
      this.el = el;
      this.renderer = renderer;
      this.zone = zone;
      this.cd = cd;
      this.config = config;
      this.window = this.document.defaultView;
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'content':
            this.contentTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          case 'closeicon':
            this.closeIconTemplate = item.template;
            break;
          case 'maximizeicon':
            this.maximizeIconTemplate = item.template;
            break;
          case 'minimizeicon':
            this.minimizeIconTemplate = item.template;
            break;
          case 'headless':
            this.headlessTemplate = item.template;
            break;
          default:
            this.contentTemplate = item.template;
            break;
        }
      });
    }
    ngOnInit() {
      if (this.breakpoints) {
        this.createStyle();
      }
    }
    getAriaLabelledBy() {
      return this.header !== null ? (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)() + '_header' : null;
    }
    focus() {
      let focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.container, '[autofocus]');
      if (focusable) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => focusable.focus(), 5);
        });
      }
    }
    close(event) {
      this.visibleChange.emit(false);
      event.preventDefault();
    }
    enableModality() {
      if (this.closable && this.dismissableMask) {
        this.maskClickListener = this.renderer.listen(this.wrapper, 'mousedown', event => {
          if (this.wrapper && this.wrapper.isSameNode(event.target)) {
            this.close(event);
          }
        });
      }
      if (this.modal) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.blockBodyScroll();
      }
    }
    disableModality() {
      if (this.wrapper) {
        if (this.dismissableMask) {
          this.unbindMaskClickListener();
        }
        // for nested dialogs w/modal
        const scrollBlockers = document.querySelectorAll('.p-dialog-mask-scrollblocker');
        if (this.modal && scrollBlockers && scrollBlockers.length == 1) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.unblockBodyScroll();
        }
        if (!this.cd.destroyed) {
          this.cd.detectChanges();
        }
      }
    }
    maximize() {
      this.maximized = !this.maximized;
      if (!this.modal && !this.blockScroll) {
        if (this.maximized) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.blockBodyScroll();
        } else {
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.unblockBodyScroll();
        }
      }
      this.onMaximize.emit({
        maximized: this.maximized
      });
    }
    unbindMaskClickListener() {
      if (this.maskClickListener) {
        this.maskClickListener();
        this.maskClickListener = null;
      }
    }
    moveOnTop() {
      if (this.autoZIndex) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('modal', this.container, this.baseZIndex + this.config.zIndex.modal);
        this.wrapper.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
      }
    }
    createStyle() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        if (!this.styleElement) {
          this.styleElement = this.renderer.createElement('style');
          this.styleElement.type = 'text/css';
          this.renderer.appendChild(this.document.head, this.styleElement);
          let innerHTML = '';
          for (let breakpoint in this.breakpoints) {
            innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[breakpoint]} !important;
                            }
                        }
                    `;
          }
          this.renderer.setProperty(this.styleElement, 'innerHTML', innerHTML);
        }
      }
    }
    initDrag(event) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-dialog-header-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target.parentElement, 'p-dialog-header-icon')) {
        return;
      }
      if (this.draggable) {
        this.dragging = true;
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        this.container.style.margin = '0';
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.document.body, 'p-unselectable-text');
      }
    }
    onKeydown(event) {
      if (this.focusTrap) {
        if (event.which === 9) {
          event.preventDefault();
          let focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getFocusableElements(this.container);
          if (focusableElements && focusableElements.length > 0) {
            if (!focusableElements[0].ownerDocument.activeElement) {
              focusableElements[0].focus();
            } else {
              let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
              if (event.shiftKey) {
                if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
              } else {
                if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
              }
            }
          }
        }
      }
    }
    onDrag(event) {
      if (this.dragging) {
        const containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(this.container);
        const containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(this.container);
        const deltaX = event.pageX - this.lastPageX;
        const deltaY = event.pageY - this.lastPageY;
        const offset = this.container.getBoundingClientRect();
        const containerComputedStyle = getComputedStyle(this.container);
        const leftMargin = parseFloat(containerComputedStyle.marginLeft);
        const topMargin = parseFloat(containerComputedStyle.marginTop);
        const leftPos = offset.left + deltaX - leftMargin;
        const topPos = offset.top + deltaY - topMargin;
        const viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getViewport();
        this.container.style.position = 'fixed';
        if (this.keepInViewport) {
          if (leftPos >= this.minX && leftPos + containerWidth < viewport.width) {
            this._style.left = `${leftPos}px`;
            this.lastPageX = event.pageX;
            this.container.style.left = `${leftPos}px`;
          }
          if (topPos >= this.minY && topPos + containerHeight < viewport.height) {
            this._style.top = `${topPos}px`;
            this.lastPageY = event.pageY;
            this.container.style.top = `${topPos}px`;
          }
        } else {
          this.lastPageX = event.pageX;
          this.container.style.left = `${leftPos}px`;
          this.lastPageY = event.pageY;
          this.container.style.top = `${topPos}px`;
        }
      }
    }
    endDrag(event) {
      if (this.dragging) {
        this.dragging = false;
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.document.body, 'p-unselectable-text');
        this.cd.detectChanges();
        this.onDragEnd.emit(event);
      }
    }
    resetPosition() {
      this.container.style.position = '';
      this.container.style.left = '';
      this.container.style.top = '';
      this.container.style.margin = '';
    }
    //backward compatibility
    center() {
      this.resetPosition();
    }
    initResize(event) {
      if (this.resizable) {
        this.resizing = true;
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.document.body, 'p-unselectable-text');
        this.onResizeInit.emit(event);
      }
    }
    onResize(event) {
      if (this.resizing) {
        let deltaX = event.pageX - this.lastPageX;
        let deltaY = event.pageY - this.lastPageY;
        let containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(this.container);
        let containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(this.container);
        let contentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(this.contentViewChild?.nativeElement);
        let newWidth = containerWidth + deltaX;
        let newHeight = containerHeight + deltaY;
        let minWidth = this.container.style.minWidth;
        let minHeight = this.container.style.minHeight;
        let offset = this.container.getBoundingClientRect();
        let viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getViewport();
        let hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);
        if (hasBeenDragged) {
          newWidth += deltaX;
          newHeight += deltaY;
        }
        if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
          this._style.width = newWidth + 'px';
          this.container.style.width = this._style.width;
        }
        if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
          this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + 'px';
          if (this._style.height) {
            this._style.height = newHeight + 'px';
            this.container.style.height = this._style.height;
          }
        }
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
      }
    }
    resizeEnd(event) {
      if (this.resizing) {
        this.resizing = false;
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.document.body, 'p-unselectable-text');
        this.onResizeEnd.emit(event);
      }
    }
    bindGlobalListeners() {
      if (this.draggable) {
        this.bindDocumentDragListener();
        this.bindDocumentDragEndListener();
      }
      if (this.resizable) {
        this.bindDocumentResizeListeners();
      }
      if (this.closeOnEscape && this.closable) {
        this.bindDocumentEscapeListener();
      }
    }
    unbindGlobalListeners() {
      this.unbindDocumentDragListener();
      this.unbindDocumentDragEndListener();
      this.unbindDocumentResizeListeners();
      this.unbindDocumentEscapeListener();
    }
    bindDocumentDragListener() {
      if (!this.documentDragListener) {
        this.zone.runOutsideAngular(() => {
          this.documentDragListener = this.renderer.listen(this.window, 'mousemove', this.onDrag.bind(this));
        });
      }
    }
    unbindDocumentDragListener() {
      if (this.documentDragListener) {
        this.documentDragListener();
        this.documentDragListener = null;
      }
    }
    bindDocumentDragEndListener() {
      if (!this.documentDragEndListener) {
        this.zone.runOutsideAngular(() => {
          this.documentDragEndListener = this.renderer.listen(this.window, 'mouseup', this.endDrag.bind(this));
        });
      }
    }
    unbindDocumentDragEndListener() {
      if (this.documentDragEndListener) {
        this.documentDragEndListener();
        this.documentDragEndListener = null;
      }
    }
    bindDocumentResizeListeners() {
      if (!this.documentResizeListener && !this.documentResizeEndListener) {
        this.zone.runOutsideAngular(() => {
          this.documentResizeListener = this.renderer.listen(this.window, 'mousemove', this.onResize.bind(this));
          this.documentResizeEndListener = this.renderer.listen(this.window, 'mouseup', this.resizeEnd.bind(this));
        });
      }
    }
    unbindDocumentResizeListeners() {
      if (this.documentResizeListener && this.documentResizeEndListener) {
        this.documentResizeListener();
        this.documentResizeEndListener();
        this.documentResizeListener = null;
        this.documentResizeEndListener = null;
      }
    }
    bindDocumentEscapeListener() {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.documentEscapeListener = this.renderer.listen(documentTarget, 'keydown', event => {
        if (event.which == 27) {
          this.close(event);
        }
      });
    }
    unbindDocumentEscapeListener() {
      if (this.documentEscapeListener) {
        this.documentEscapeListener();
        this.documentEscapeListener = null;
      }
    }
    appendContainer() {
      if (this.appendTo) {
        if (this.appendTo === 'body') this.renderer.appendChild(this.document.body, this.wrapper);else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.appendChild(this.wrapper, this.appendTo);
      }
    }
    restoreAppend() {
      if (this.container && this.appendTo) {
        this.renderer.appendChild(this.el.nativeElement, this.wrapper);
      }
    }
    onAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          this.container = event.element;
          this.wrapper = this.container?.parentElement;
          this.appendContainer();
          this.moveOnTop();
          this.bindGlobalListeners();
          this.container?.setAttribute(this.id, '');
          if (this.modal) {
            this.enableModality();
          }
          if (!this.modal && this.blockScroll) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.document.body, 'p-overflow-hidden');
          }
          if (this.focusOnShow) {
            this.focus();
          }
          break;
        case 'void':
          if (this.wrapper && this.modal) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.wrapper, 'p-component-overlay-leave');
          }
          break;
      }
    }
    onAnimationEnd(event) {
      switch (event.toState) {
        case 'void':
          this.onContainerDestroy();
          this.onHide.emit({});
          this.cd.markForCheck();
          break;
        case 'visible':
          this.onShow.emit({});
          break;
      }
    }
    onContainerDestroy() {
      this.unbindGlobalListeners();
      this.dragging = false;
      this.maskVisible = false;
      if (this.maximized) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.document.body, 'p-overflow-hidden');
        this.document.body.style.removeProperty('--scrollbar-width');
        this.maximized = false;
      }
      if (this.modal) {
        this.disableModality();
      }
      if (this.blockScroll) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.document.body, 'p-overflow-hidden');
      }
      if (this.container && this.autoZIndex) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.container);
      }
      this.container = null;
      this.wrapper = null;
      this._style = this.originalStyle ? {
        ...this.originalStyle
      } : {};
    }
    destroyStyle() {
      if (this.styleElement) {
        this.renderer.removeChild(this.document.head, this.styleElement);
        this.styleElement = null;
      }
    }
    ngOnDestroy() {
      if (this.container) {
        this.restoreAppend();
        this.onContainerDestroy();
      }
      this.destroyStyle();
    }
    static ɵfac = function Dialog_Factory(t) {
      return new (t || Dialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Dialog,
      selectors: [["p-dialog"]],
      contentQueries: function Dialog_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.Header, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.Footer, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Dialog_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        header: "header",
        draggable: "draggable",
        resizable: "resizable",
        positionLeft: "positionLeft",
        positionTop: "positionTop",
        contentStyle: "contentStyle",
        contentStyleClass: "contentStyleClass",
        modal: "modal",
        closeOnEscape: "closeOnEscape",
        dismissableMask: "dismissableMask",
        rtl: "rtl",
        closable: "closable",
        responsive: "responsive",
        appendTo: "appendTo",
        breakpoints: "breakpoints",
        styleClass: "styleClass",
        maskStyleClass: "maskStyleClass",
        maskStyle: "maskStyle",
        showHeader: "showHeader",
        breakpoint: "breakpoint",
        blockScroll: "blockScroll",
        autoZIndex: "autoZIndex",
        baseZIndex: "baseZIndex",
        minX: "minX",
        minY: "minY",
        focusOnShow: "focusOnShow",
        maximizable: "maximizable",
        keepInViewport: "keepInViewport",
        focusTrap: "focusTrap",
        transitionOptions: "transitionOptions",
        closeIcon: "closeIcon",
        closeAriaLabel: "closeAriaLabel",
        closeTabindex: "closeTabindex",
        minimizeIcon: "minimizeIcon",
        maximizeIcon: "maximizeIcon",
        visible: "visible",
        style: "style",
        position: "position"
      },
      outputs: {
        onShow: "onShow",
        onHide: "onHide",
        visibleChange: "visibleChange",
        onResizeInit: "onResizeInit",
        onResizeEnd: "onResizeEnd",
        onDragEnd: "onDragEnd",
        onMaximize: "onMaximize"
      },
      ngContentSelectors: _c4,
      decls: 1,
      vars: 1,
      consts: [["container", ""], ["notHeadless", ""], ["content", ""], ["titlebar", ""], ["footer", ""], [3, "class", "style", "ngClass", "focus", 4, "ngIf"], [3, "focus", "ngClass"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "class", "pFocusTrapDisabled", 4, "ngIf"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "pFocusTrapDisabled"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], ["class", "p-resizable-handle", "style", "z-index: 90;", 3, "mousedown", 4, "ngIf"], ["class", "p-dialog-header", 3, "mousedown", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["class", "p-dialog-footer", 4, "ngIf"], [1, "p-resizable-handle", 2, "z-index", "90", 3, "mousedown"], [1, "p-dialog-header", 3, "mousedown"], ["class", "p-dialog-title", 3, "id", 4, "ngIf"], [1, "p-dialog-header-icons"], ["role", "button", "type", "button", "pRipple", "", "pButton", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], ["type", "button", "pRipple", "", "pButton", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], [1, "p-dialog-title", 3, "id"], ["role", "button", "type", "button", "pRipple", "", "pButton", "", 3, "click", "keydown.enter", "ngClass"], ["class", "p-dialog-header-maximize-icon", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "p-dialog-header-maximize-icon", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], ["type", "button", "pRipple", "", "pButton", "", 3, "click", "keydown.enter", "ngClass"], ["class", "p-dialog-header-close-icon", 3, "ngClass", 4, "ngIf"], [1, "p-dialog-header-close-icon", 3, "ngClass"], [1, "p-dialog-footer"]],
      template: function Dialog_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_Template, 2, 17, "div", 5);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maskVisible);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__.FocusTrap, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.Ripple, primeng_icons_times__WEBPACK_IMPORTED_MODULE_9__.TimesIcon, primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_10__.WindowMaximizeIcon, primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_11__.WindowMinimizeIcon],
      styles: ["@layer primeng{.p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-webkit-transition:none;transition:none;transform:none;width:100vw!important;height:100vh!important;top:0!important;left:0!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(showAnimation)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(hideAnimation)])])]
      },
      changeDetection: 0
    });
  }
  return Dialog;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DialogModule = /*#__PURE__*/(() => {
  class DialogModule {
    static ɵfac = function DialogModule_Factory(t) {
      return new (t || DialogModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DialogModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__.FocusTrapModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_9__.TimesIcon, primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_10__.WindowMaximizeIcon, primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_11__.WindowMinimizeIcon, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
    });
  }
  return DialogModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 55079:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-dynamicdialog.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogService: () => (/* binding */ DialogService),
/* harmony export */   DynamicDialogComponent: () => (/* binding */ DynamicDialogComponent),
/* harmony export */   DynamicDialogConfig: () => (/* binding */ DynamicDialogConfig),
/* harmony export */   DynamicDialogInjector: () => (/* binding */ DynamicDialogInjector),
/* harmony export */   DynamicDialogModule: () => (/* binding */ DynamicDialogModule),
/* harmony export */   DynamicDialogRef: () => (/* binding */ DynamicDialogRef)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dom */ 35228);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/times */ 57727);
/* harmony import */ var primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/windowmaximize */ 31717);
/* harmony import */ var primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/windowminimize */ 69551);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/utils */ 7251);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10819);













const _c0 = ["mask"];
const _c1 = ["content"];
const _c2 = ["titlebar"];
const _c3 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => ({
  "p-dialog-mask": true,
  "p-component-overlay p-component-overlay-enter p-dialog-mask-scrollblocker": a0,
  "p-dialog-left": a1,
  "p-dialog-right": a2,
  "p-dialog-top": a3,
  "p-dialog-bottom": a4,
  "p-dialog-top-left": a5,
  "p-dialog-top-right": a6,
  "p-dialog-bottom-left": a7,
  "p-dialog-bottom-right": a8
});
const _c4 = (a0, a1, a2, a3) => ({
  "p-dialog p-dynamic-dialog p-component": true,
  "p-dialog-rtl": a0,
  "p-dialog-resizable": a1,
  "p-dialog-draggable": a2,
  "p-dialog-maximized": a3
});
const _c5 = (a0, a1) => ({
  transform: a0,
  transition: a1
});
const _c6 = a0 => ({
  value: "visible",
  params: a0
});
const _c7 = () => ({
  "p-dialog-header-icon p-dialog-header-maximize p-link": true
});
function DynamicDialogComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function DynamicDialogComponent_div_2_div_2_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.initResize($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 22);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.maximized ? ctx_r1.minimizeIcon : ctx_r1.maximizeIcon);
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_WindowMaximizeIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "WindowMaximizeIcon", 23);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dialog-header-maximize-icon");
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_WindowMinimizeIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "WindowMinimizeIcon", 23);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dialog-header-maximize-icon");
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.maximize());
    })("keydown.enter", function DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_Template_button_keydown_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.maximize());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_span_1_Template, 1, 1, "span", 20)(2, DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_WindowMaximizeIcon_2_Template, 1, 1, "WindowMaximizeIcon", 21)(3, DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_WindowMinimizeIcon_3_Template, 1, 1, "WindowMinimizeIcon", 21)(4, DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_ng_container_4_Template, 1, 0, "ng-container", 11)(5, DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_ng_container_5_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.maximizeIconTemplate || !ctx_r1.minimizeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.maximized && !ctx_r1.maximizeIcon && !ctx_r1.maximizeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.maximized && !ctx_r1.minimizeIcon && !ctx_r1.minimizeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", ctx_r1.maximizeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", ctx_r1.minimizeIconTemplate);
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_button_5_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesIcon", 23);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dialog-header-close-icon");
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_button_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicDialogComponent_div_2_div_3_ng_container_3_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.hide());
    })("keydown.enter", function DynamicDialogComponent_div_2_div_3_ng_container_3_button_5_Template_button_keydown_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicDialogComponent_div_2_div_3_ng_container_3_button_5_TimesIcon_1_Template, 1, 1, "TimesIcon", 21)(2, DynamicDialogComponent_div_2_div_3_ng_container_3_button_5_ng_container_2_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-dialog-header-icon p-dialog-header-maximize p-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.closeAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", ctx_r1.closeIconTemplate);
  }
}
function DynamicDialogComponent_div_2_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicDialogComponent_div_2_div_3_ng_container_3_button_4_Template, 6, 7, "button", 17)(5, DynamicDialogComponent_div_2_div_3_ng_container_3_button_5_Template, 3, 4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1.ariaLabelledBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.config.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.config.maximizable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.config.closable !== false);
  }
}
function DynamicDialogComponent_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function DynamicDialogComponent_div_2_div_3_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.initDrag($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicDialogComponent_div_2_div_3_ng_container_2_Template, 1, 0, "ng-container", 11)(3, DynamicDialogComponent_div_2_div_3_ng_container_3_Template, 6, 4, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", ctx_r1.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.headerTemplate);
  }
}
function DynamicDialogComponent_div_2_6_ng_template_0_Template(rf, ctx) {}
function DynamicDialogComponent_div_2_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DynamicDialogComponent_div_2_6_ng_template_0_Template, 0, 0, "ng-template", 25);
  }
}
function DynamicDialogComponent_div_2_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function DynamicDialogComponent_div_2_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.config.footer, " ");
  }
}
function DynamicDialogComponent_div_2_div_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function DynamicDialogComponent_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicDialogComponent_div_2_div_8_ng_container_1_Template, 2, 1, "ng-container", 10)(2, DynamicDialogComponent_div_2_div_8_ng_container_2_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.footerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", ctx_r1.footerTemplate);
  }
}
function DynamicDialogComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@animation.start", function DynamicDialogComponent_div_2_Template_div_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onAnimationStart($event));
    })("@animation.done", function DynamicDialogComponent_div_2_Template_div_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onAnimationEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicDialogComponent_div_2_div_2_Template, 1, 0, "div", 7)(3, DynamicDialogComponent_div_2_div_3_Template, 4, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicDialogComponent_div_2_6_Template, 1, 0, null, 10)(7, DynamicDialogComponent_div_2_ng_container_7_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DynamicDialogComponent_div_2_div_8_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.config.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r1.config.width)("height", ctx_r1.config.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](17, _c4, ctx_r1.config.rtl, ctx_r1.config.resizable, ctx_r1.config.draggable, ctx_r1.maximized))("ngStyle", ctx_r1.config.style)("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c5, ctx_r1.transformOptions, ctx_r1.config.transitionOptions || "150ms cubic-bezier(0, 0, 0.2, 1)")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-modal", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.config.resizable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.config.showHeader === false ? false : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.config.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.contentTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", ctx_r1.contentTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.config.footer || ctx_r1.footerTemplate);
  }
}
let DynamicDialogContent = /*#__PURE__*/(() => {
  class DynamicDialogContent {
    viewContainerRef;
    constructor(viewContainerRef) {
      this.viewContainerRef = viewContainerRef;
    }
    static ɵfac = function DynamicDialogContent_Factory(t) {
      return new (t || DynamicDialogContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DynamicDialogContent,
      selectors: [["", "pDynamicDialogContent", ""]],
      hostAttrs: [1, "p-element"]
    });
  }
  return DynamicDialogContent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Dialogs can be created dynamically with any component as the content using a DialogService.
 * @group Components
 */
class DynamicDialogConfig {
  /**
   * An object to pass to the component loaded inside the Dialog.
   * @group Props
   */
  data;
  /**
   * Header text of the dialog.
   * @group Props
   */
  header;
  /**
   * Identifies the element (or elements) that labels the element it is applied to.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Footer text of the dialog.
   * @group Props
   */
  footer;
  /**
   * Width of the dialog.
   * @group Props
   */
  width;
  /**
   * Height of the dialog.
   * @group Props
   */
  height;
  /**
   * Specifies if pressing escape key should hide the dialog.
   * @group Props
   */
  closeOnEscape;
  /**
   * Specifies if autofocus should happen on show.
   * @group Props
   */
  focusOnShow = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex;
  /**
   * Specifies if clicking the modal background should hide the dialog.
   * @group Props
   */
  dismissableMask;
  /**
   * Inline style of the component.
   * @group Props
   */
  rtl;
  /**
   * Inline style of the comopnent.
   * @group Props
   */
  style;
  /**
   * Inline style of the content.
   * @group Props
   */
  contentStyle;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions;
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  closable;
  /**
   * Whether to show the header or not.
   * @group Props
   */
  showHeader;
  /**
   * Defines if background should be blocked when dialog is displayed.
   * @group Props
   */
  modal;
  /**
   * Style class of the mask.
   * @group Props
   */
  maskStyleClass;
  /**
   * Enables resizing of the content.
   * @group Props
   */
  resizable;
  /**
   * Enables dragging to change the position using header.
   * @group Props
   */
  draggable;
  /**
   * Keeps dialog in the viewport.
   * @group Props
   */
  keepInViewport;
  /**
   * Minimum value for the left coordinate of dialog in dragging.
   * @group Props
   */
  minX;
  /**
   * Minimum value for the top coordinate of dialog in dragging.
   * @group Props
   */
  minY;
  /**
   * Whether the dialog can be displayed full screen.
   * @group Props
   */
  maximizable;
  /**
   * Name of the maximize icon.
   * @group Props
   */
  maximizeIcon;
  /**
   * Name of the minimize icon.
   * @group Props
   */
  minimizeIcon;
  /**
   * Position of the dialog, options are "center", "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left" or "bottom-right".
   * @group Props
   */
  position;
  /**
   * Defines a string that labels the close button for accessibility.
   * @group Props
   */
  closeAriaLabel;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * A boolean to determine if it can be duplicate.
   * @group Props
   */
  duplicate;
  /**
   * Object literal to define widths per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Dialog templates.
   * @group Props
   */
  templates;
}

/**
 * Dynamic Dialog instance.
 * @group Components
 */
class DynamicDialogRef {
  constructor() {}
  /**
   * Closes dialog.
   * @group Method
   */
  close(result) {
    this._onClose.next(result);
    setTimeout(() => {
      this._onClose.complete();
    }, 1000);
  }
  /**
   * Destroys the dialog instance.
   * @group Method
   */
  destroy() {
    this._onDestroy.next(null);
  }
  /**
   * Callback to invoke on drag start.
   * @param {MouseEvent} event - Mouse event.
   * @group Method
   */
  dragStart(event) {
    this._onDragStart.next(event);
  }
  /**
   * Callback to invoke on drag end.
   * @param {MouseEvent} event - Mouse event.
   * @group Method
   */
  dragEnd(event) {
    this._onDragEnd.next(event);
  }
  /**
   * Callback to invoke on resize start.
   * @param {MouseEvent} event - Mouse event.
   * @group Method
   */
  resizeInit(event) {
    this._onResizeInit.next(event);
  }
  /**
   * Callback to invoke on resize start.
   * @param {MouseEvent} event - Mouse event.
   * @group Method
   */
  resizeEnd(event) {
    this._onResizeEnd.next(event);
  }
  /**
   * Callback to invoke on dialog is maximized.
   * @param {*} value - Size value.
   * @group Method
   */
  maximize(value) {
    this._onMaximize.next(value);
  }
  _onClose = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  /**
   * Event triggered on dialog is closed.
   * @group Events
   */
  onClose = this._onClose.asObservable();
  _onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  /**
   * Event triggered on dialog instance is destroyed.
   * @group Events
   */
  onDestroy = this._onDestroy.asObservable();
  _onDragStart = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  /**
   * Event triggered on drag start.
   * @param {MouseEvent} event - Mouse event.
   * @group Events
   */
  onDragStart = this._onDragStart.asObservable();
  _onDragEnd = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  /**
   * Event triggered on drag end.
   * @param {MouseEvent} event - Mouse event.
   * @group Events
   */
  onDragEnd = this._onDragEnd.asObservable();
  _onResizeInit = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  /**
   * Event triggered on resize start.
   * @param {MouseEvent} event - Mouse event.
   * @group Events
   */
  onResizeInit = this._onResizeInit.asObservable();
  _onResizeEnd = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  /**
   * Event triggered on resize end.
   * @param {MouseEvent} event - Mouse event.
   * @group Events
   */
  onResizeEnd = this._onResizeEnd.asObservable();
  _onMaximize = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  /**
   * Event triggered on dialog is maximized.
   * @param {*} value - Size value.
   * @group Events
   */
  onMaximize = this._onMaximize.asObservable();
}
const showAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: '{{transform}}',
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{transition}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: 'none',
  opacity: 1
}))]);
const hideAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{transition}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
  transform: '{{transform}}',
  opacity: 0
}))]);
let DynamicDialogComponent = /*#__PURE__*/(() => {
  class DynamicDialogComponent {
    document;
    platformId;
    cd;
    renderer;
    config;
    dialogRef;
    zone;
    primeNGConfig;
    parentDialog;
    visible = true;
    componentRef;
    mask;
    resizing;
    dragging;
    maximized;
    _style = {};
    originalStyle;
    lastPageX;
    lastPageY;
    ariaLabelledBy;
    id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_3__.UniqueComponentId)();
    styleElement;
    insertionPoint;
    maskViewChild;
    contentViewChild;
    headerViewChild;
    childComponentType;
    container;
    wrapper;
    documentKeydownListener;
    documentEscapeListener;
    maskClickListener;
    transformOptions = 'scale(0.7)';
    documentResizeListener;
    documentResizeEndListener;
    documentDragListener;
    documentDragEndListener;
    get minX() {
      return this.config.minX ? this.config.minX : 0;
    }
    get minY() {
      return this.config.minY ? this.config.minY : 0;
    }
    get keepInViewport() {
      return this.config.keepInViewport;
    }
    get maximizable() {
      return this.config.maximizable;
    }
    get maximizeIcon() {
      return this.config.maximizeIcon;
    }
    get minimizeIcon() {
      return this.config.minimizeIcon;
    }
    get style() {
      return this._style;
    }
    get position() {
      return this.config.position;
    }
    set style(value) {
      if (value) {
        this._style = {
          ...value
        };
        this.originalStyle = value;
      }
    }
    get parent() {
      const domElements = Array.from(this.document.getElementsByClassName('p-dialog'));
      if (domElements.length > 1) {
        return domElements.pop();
      }
    }
    get header() {
      return this.config.header;
    }
    get data() {
      return this.config.data;
    }
    get breakpoints() {
      return this.config.breakpoints;
    }
    get footerTemplate() {
      return this.config?.templates?.footer;
    }
    get headerTemplate() {
      return this.config?.templates?.header;
    }
    get contentTemplate() {
      return this.config?.templates?.content;
    }
    get minimizeIconTemplate() {
      return this.config?.templates?.minimizeicon;
    }
    get maximizeIconTemplate() {
      return this.config?.templates?.maximizeicon;
    }
    get closeIconTemplate() {
      return this.config?.templates?.closeicon;
    }
    constructor(document, platformId, cd, renderer, config, dialogRef, zone, primeNGConfig, parentDialog) {
      this.document = document;
      this.platformId = platformId;
      this.cd = cd;
      this.renderer = renderer;
      this.config = config;
      this.dialogRef = dialogRef;
      this.zone = zone;
      this.primeNGConfig = primeNGConfig;
      this.parentDialog = parentDialog;
    }
    ngOnInit() {
      if (this.breakpoints) {
        this.createStyle();
      }
    }
    createStyle() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        if (!this.styleElement) {
          this.styleElement = this.renderer.createElement('style');
          this.styleElement.type = 'text/css';
          this.renderer.appendChild(this.document.head, this.styleElement);
          let innerHTML = '';
          for (let breakpoint in this.breakpoints) {
            innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[breakpoint]} !important;
                            }
                        }
                    `;
          }
          this.renderer.setProperty(this.styleElement, 'innerHTML', innerHTML);
        }
      }
    }
    destroyStyle() {
      if (this.styleElement) {
        this.renderer.removeChild(this.document.head, this.styleElement);
        this.styleElement = null;
      }
    }
    ngAfterViewInit() {
      this.loadChildComponent(this.childComponentType);
      this.ariaLabelledBy = this.getAriaLabelledBy();
      this.cd.detectChanges();
    }
    getAriaLabelledBy() {
      return this.header !== null ? (0,primeng_utils__WEBPACK_IMPORTED_MODULE_3__.UniqueComponentId)() + '_header' : null;
    }
    loadChildComponent(componentType) {
      let viewContainerRef = this.insertionPoint?.viewContainerRef;
      viewContainerRef?.clear();
      this.componentRef = viewContainerRef?.createComponent(componentType);
    }
    moveOnTop() {
      if (this.config.autoZIndex !== false) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ZIndexUtils.set('modal', this.container, (this.config.baseZIndex || 0) + this.primeNGConfig.zIndex.modal);
        this.wrapper.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
      }
    }
    onAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          this.container = event.element;
          this.wrapper = this.container.parentElement;
          this.moveOnTop();
          if (this.parent) {
            this.unbindGlobalListeners();
          }
          this.bindGlobalListeners();
          this.container?.setAttribute(this.id, '');
          if (this.config.modal !== false) {
            this.enableModality();
          }
          if (this.config.focusOnShow === true) {
            this.focus();
          }
          break;
        case 'void':
          if (this.wrapper && this.config.modal !== false) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.addClass(this.wrapper, 'p-component-overlay-leave');
          }
          break;
      }
    }
    onAnimationEnd(event) {
      if (event.toState === 'void') {
        this.onContainerDestroy();
        this.dialogRef.destroy();
      }
    }
    onContainerDestroy() {
      this.unbindGlobalListeners();
      if (this.container && this.config.autoZIndex !== false) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ZIndexUtils.clear(this.container);
      }
      if (this.config.modal !== false) {
        this.disableModality();
      }
      this.container = null;
    }
    close() {
      this.visible = false;
      this.cd.markForCheck();
    }
    hide() {
      if (this.dialogRef) {
        this.dialogRef.close();
      }
    }
    enableModality() {
      if (this.config.closable !== false && this.config.dismissableMask) {
        this.maskClickListener = this.renderer.listen(this.wrapper, 'mousedown', event => {
          if (this.wrapper && this.wrapper.isSameNode(event.target)) {
            this.hide();
          }
        });
      }
      if (this.config.modal !== false) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.addClass(this.document.body, 'p-overflow-hidden');
      }
    }
    disableModality() {
      if (this.wrapper) {
        if (this.config.dismissableMask) {
          this.unbindMaskClickListener();
        }
        if (this.config.modal !== false) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.removeClass(this.document.body, 'p-overflow-hidden');
        }
        if (!this.cd.destroyed) {
          this.cd.detectChanges();
        }
      }
    }
    onKeydown(event) {
      // tab
      if (event.which === 9) {
        event.preventDefault();
        let focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getFocusableElements(this.container);
        if (focusableElements && focusableElements.length > 0) {
          if (!focusableElements[0].ownerDocument.activeElement) {
            focusableElements[0].focus();
          } else {
            let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
            if (event.shiftKey) {
              if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
            } else {
              if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
            }
          }
        }
      }
    }
    focus() {
      const autoFocusElement = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.findSingle(this.container, '[autofocus]');
      if (autoFocusElement) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => autoFocusElement.focus(), 5);
        });
        return;
      }
      const focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getFocusableElements(this.container);
      if (focusableElements && focusableElements.length > 0) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => focusableElements[0].focus(), 5);
        });
      }
    }
    maximize() {
      this.maximized = !this.maximized;
      if (this.maximized) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.addClass(this.document.body, 'p-overflow-hidden');
      } else {
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.removeClass(this.document.body, 'p-overflow-hidden');
      }
      this.dialogRef.maximize({
        maximized: this.maximized
      });
    }
    initResize(event) {
      if (this.config.resizable) {
        if (!this.documentResizeListener) {
          this.bindDocumentResizeListeners();
        }
        this.resizing = true;
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.addClass(this.document.body, 'p-unselectable-text');
        this.dialogRef.resizeInit(event);
      }
    }
    onResize(event) {
      if (this.resizing) {
        let deltaX = event.pageX - this.lastPageX;
        let deltaY = event.pageY - this.lastPageY;
        let containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getOuterWidth(this.container);
        let containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getOuterHeight(this.container);
        let contentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getOuterHeight(this.contentViewChild.nativeElement);
        let newWidth = containerWidth + deltaX;
        let newHeight = containerHeight + deltaY;
        let minWidth = this.container.style.minWidth;
        let minHeight = this.container.style.minHeight;
        let offset = this.container.getBoundingClientRect();
        let viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getViewport();
        let hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);
        if (hasBeenDragged) {
          newWidth += deltaX;
          newHeight += deltaY;
        }
        if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
          this._style.width = newWidth + 'px';
          this.container.style.width = this._style.width;
        }
        if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
          this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + 'px';
          if (this._style.height) {
            this._style.height = newHeight + 'px';
            this.container.style.height = this._style.height;
          }
        }
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
      }
    }
    resizeEnd(event) {
      if (this.resizing) {
        this.resizing = false;
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.removeClass(this.document.body, 'p-unselectable-text');
        this.dialogRef.resizeEnd(event);
      }
    }
    initDrag(event) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.hasClass(event.target, 'p-dialog-header-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.hasClass(event.target.parentElement, 'p-dialog-header-icon')) {
        return;
      }
      if (this.config.draggable) {
        this.dragging = true;
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        this.container.style.margin = '0';
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.addClass(this.document.body, 'p-unselectable-text');
        this.dialogRef.dragStart(event);
      }
    }
    onDrag(event) {
      if (this.dragging) {
        let containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getOuterWidth(this.container);
        let containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getOuterHeight(this.container);
        let deltaX = event.pageX - this.lastPageX;
        let deltaY = event.pageY - this.lastPageY;
        let offset = this.container.getBoundingClientRect();
        let leftPos = offset.left + deltaX;
        let topPos = offset.top + deltaY;
        let viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.getViewport();
        this.container.style.position = 'fixed';
        if (this.keepInViewport) {
          if (leftPos >= this.minX && leftPos + containerWidth < viewport.width) {
            this._style.left = leftPos + 'px';
            this.lastPageX = event.pageX;
            this.container.style.left = leftPos + 'px';
          }
          if (topPos >= this.minY && topPos + containerHeight < viewport.height) {
            this._style.top = topPos + 'px';
            this.lastPageY = event.pageY;
            this.container.style.top = topPos + 'px';
          }
        } else {
          this.lastPageX = event.pageX;
          this.container.style.left = leftPos + 'px';
          this.lastPageY = event.pageY;
          this.container.style.top = topPos + 'px';
        }
      }
    }
    endDrag(event) {
      if (this.dragging) {
        this.dragging = false;
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.removeClass(this.document.body, 'p-unselectable-text');
        this.dialogRef.dragEnd(event);
        this.cd.detectChanges();
      }
    }
    resetPosition() {
      this.container.style.position = '';
      this.container.style.left = '';
      this.container.style.top = '';
      this.container.style.margin = '';
    }
    bindDocumentDragListener() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        this.zone.runOutsideAngular(() => {
          this.documentDragListener = this.renderer.listen(this.document, 'mousemove', this.onDrag.bind(this));
        });
      }
    }
    bindDocumentDragEndListener() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        this.zone.runOutsideAngular(() => {
          this.documentDragEndListener = this.renderer.listen(this.document, 'mouseup', this.endDrag.bind(this));
        });
      }
    }
    unbindDocumentDragEndListener() {
      if (this.documentDragEndListener) {
        this.documentDragEndListener();
        this.documentDragListener = null;
      }
    }
    unbindDocumentDragListener() {
      if (this.documentDragListener) {
        this.documentDragListener();
        this.documentDragListener = null;
      }
    }
    bindDocumentResizeListeners() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        this.zone.runOutsideAngular(() => {
          this.documentResizeListener = this.renderer.listen(this.document, 'mousemove', this.onResize.bind(this));
          this.documentResizeEndListener = this.renderer.listen(this.document, 'mouseup', this.resizeEnd.bind(this));
        });
      }
    }
    unbindDocumentResizeListeners() {
      if (this.documentResizeListener && this.documentResizeEndListener) {
        this.documentResizeListener();
        this.documentResizeEndListener();
        this.documentResizeListener = null;
        this.documentResizeEndListener = null;
      }
    }
    bindGlobalListeners() {
      if (this.parentDialog) {
        this.parentDialog.unbindDocumentKeydownListener();
      }
      this.bindDocumentKeydownListener();
      if (this.config.closeOnEscape !== false && this.config.closable !== false) {
        this.bindDocumentEscapeListener();
      }
      if (this.config.resizable) {
        this.bindDocumentResizeListeners();
      }
      if (this.config.draggable) {
        this.bindDocumentDragListener();
        this.bindDocumentDragEndListener();
      }
    }
    unbindGlobalListeners() {
      this.unbindDocumentKeydownListener();
      this.unbindDocumentEscapeListener();
      this.unbindDocumentResizeListeners();
      this.unbindDocumentDragListener();
      this.unbindDocumentDragEndListener();
      if (this.parentDialog) {
        this.parentDialog.bindDocumentKeydownListener();
      }
    }
    bindDocumentKeydownListener() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        if (this.documentKeydownListener) {
          return;
        } else {
          this.zone.runOutsideAngular(() => {
            this.documentKeydownListener = this.renderer.listen(this.document, 'keydown', this.onKeydown.bind(this));
          });
        }
      }
    }
    unbindDocumentKeydownListener() {
      if (this.documentKeydownListener) {
        this.documentKeydownListener();
        this.documentKeydownListener = null;
      }
    }
    bindDocumentEscapeListener() {
      const documentTarget = this.maskViewChild ? this.maskViewChild.nativeElement.ownerDocument : 'document';
      this.documentEscapeListener = this.renderer.listen(documentTarget, 'keydown', event => {
        if (event.which == 27) {
          if (parseInt(this.container.style.zIndex) == primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ZIndexUtils.getCurrent()) {
            this.hide();
          }
        }
      });
    }
    unbindDocumentEscapeListener() {
      if (this.documentEscapeListener) {
        this.documentEscapeListener();
        this.documentEscapeListener = null;
      }
    }
    unbindMaskClickListener() {
      if (this.maskClickListener) {
        this.maskClickListener();
        this.maskClickListener = null;
      }
    }
    ngOnDestroy() {
      this.onContainerDestroy();
      if (this.componentRef) {
        this.componentRef.destroy();
      }
      this.destroyStyle();
    }
    static ɵfac = function DynamicDialogComponent_Factory(t) {
      return new (t || DynamicDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DynamicDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DynamicDialogComponent, 12));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DynamicDialogComponent,
      selectors: [["p-dynamicDialog"]],
      viewQuery: function DynamicDialogComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DynamicDialogContent, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.insertionPoint = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.maskViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      decls: 3,
      vars: 14,
      consts: [["mask", ""], ["container", ""], ["content", ""], ["titlebar", ""], [3, "ngClass"], ["role", "dialog", 3, "ngClass", "ngStyle", "class", "width", "height", 4, "ngIf"], ["role", "dialog", 3, "ngClass", "ngStyle"], ["class", "p-resizable-handle", "style", "z-index: 90;", 3, "mousedown", 4, "ngIf"], ["class", "p-dialog-header", 3, "mousedown", 4, "ngIf"], [1, "p-dialog-content", 3, "ngStyle"], [4, "ngIf"], [4, "ngComponentOutlet"], ["class", "p-dialog-footer", 4, "ngIf"], [1, "p-resizable-handle", 2, "z-index", "90", 3, "mousedown"], [1, "p-dialog-header", 3, "mousedown"], [1, "p-dialog-title", 3, "id"], [1, "p-dialog-header-icons"], ["type", "button", "tabindex", "-1", "pRipple", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], ["type", "button", "role", "button", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], ["type", "button", "tabindex", "-1", "pRipple", "", 3, "click", "keydown.enter", "ngClass"], ["class", "p-dialog-header-maximize-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-dialog-header-maximize-icon", 3, "ngClass"], [3, "styleClass"], ["type", "button", "role", "button", 3, "click", "keydown.enter", "ngClass"], ["pDynamicDialogContent", ""], [1, "p-dialog-footer"]],
      template: function DynamicDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicDialogComponent_div_2_Template, 9, 27, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.config.maskStyleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](4, _c3, [ctx.config.modal !== false, ctx.position === "left", ctx.position === "right", ctx.position === "top", ctx.position === "bottom", ctx.position === "topleft" || ctx.position === "top-left", ctx.position === "topright" || ctx.position === "top-right", ctx.position === "bottomleft" || ctx.position === "bottom-left", ctx.position === "bottomright" || ctx.position === "bottom-right"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgComponentOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_7__.WindowMaximizeIcon, primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_8__.WindowMinimizeIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_9__.TimesIcon, DynamicDialogContent],
      styles: ["@layer primeng{.p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-webkit-transition:none;transition:none;transform:none;width:100vw!important;height:100vh!important;top:0!important;left:0!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.useAnimation)(showAnimation)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.useAnimation)(hideAnimation)])])]
      }
    });
  }
  return DynamicDialogComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DynamicDialogModule = /*#__PURE__*/(() => {
  class DynamicDialogModule {
    static ɵfac = function DynamicDialogModule_Factory(t) {
      return new (t || DynamicDialogModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DynamicDialogModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_7__.WindowMaximizeIcon, primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_8__.WindowMinimizeIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_9__.TimesIcon, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule]
    });
  }
  return DynamicDialogModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class DynamicDialogInjector {
  _parentInjector;
  _additionalTokens;
  constructor(_parentInjector, _additionalTokens) {
    this._parentInjector = _parentInjector;
    this._additionalTokens = _additionalTokens;
  }
  get(token, notFoundValue, options) {
    const value = this._additionalTokens.get(token);
    if (value) return value;
    return this._parentInjector.get(token, notFoundValue);
  }
}

/**
 * Dynamic Dialog component methods.
 * @group Service
 */
let DialogService = /*#__PURE__*/(() => {
  class DialogService {
    appRef;
    injector;
    document;
    dialogComponentRefMap = new Map();
    constructor(appRef, injector, document) {
      this.appRef = appRef;
      this.injector = injector;
      this.document = document;
    }
    /**
     * Displays the dialog using the dynamic dialog object options.
     * @param {*} componentType - Dynamic component for content template.
     * @param {DynamicDialogConfig} config - DynamicDialog object.
     * @returns {DynamicDialogRef} DynamicDialog instance.
     * @group Method
     */
    open(componentType, config) {
      if (!this.duplicationPermission(componentType, config)) {
        return null;
      }
      const dialogRef = this.appendDialogComponentToBody(config);
      this.dialogComponentRefMap.get(dialogRef).instance.childComponentType = componentType;
      return dialogRef;
    }
    /**
     * Returns the dynamic dialog component instance.
     * @param {ref} DynamicDialogRef - DynamicDialog instance.
     * @group Method
     */
    getInstance(ref) {
      return this.dialogComponentRefMap.get(ref).instance;
    }
    appendDialogComponentToBody(config) {
      const map = new WeakMap();
      map.set(DynamicDialogConfig, config);
      const dialogRef = new DynamicDialogRef();
      map.set(DynamicDialogRef, dialogRef);
      const sub = dialogRef.onClose.subscribe(() => {
        this.dialogComponentRefMap.get(dialogRef).instance.close();
      });
      const destroySub = dialogRef.onDestroy.subscribe(() => {
        this.removeDialogComponentFromBody(dialogRef);
        destroySub.unsubscribe();
        sub.unsubscribe();
      });
      const componentRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.createComponent)(DynamicDialogComponent, {
        environmentInjector: this.appRef.injector,
        elementInjector: new DynamicDialogInjector(this.injector, map)
      });
      this.appRef.attachView(componentRef.hostView);
      const domElem = componentRef.hostView.rootNodes[0];
      if (!config.appendTo || config.appendTo === 'body') {
        this.document.body.appendChild(domElem);
      } else {
        primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.appendChild(domElem, config.appendTo);
      }
      this.dialogComponentRefMap.set(dialogRef, componentRef);
      return dialogRef;
    }
    removeDialogComponentFromBody(dialogRef) {
      if (!dialogRef || !this.dialogComponentRefMap.has(dialogRef)) {
        return;
      }
      const dialogComponentRef = this.dialogComponentRefMap.get(dialogRef);
      this.appRef.detachView(dialogComponentRef.hostView);
      dialogComponentRef.destroy();
      this.dialogComponentRefMap.delete(dialogRef);
    }
    duplicationPermission(componentType, config) {
      if (config.duplicate) {
        return true;
      }
      let permission = true;
      for (const [key, value] of this.dialogComponentRefMap) {
        if (value.instance.childComponentType === componentType) {
          permission = false;
          break;
        }
      }
      return permission;
    }
    static ɵfac = function DialogService_Factory(t) {
      return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT));
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DialogService,
      factory: DialogService.ɵfac
    });
  }
  return DialogService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 31717:
/*!************************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-windowmaximize.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WindowMaximizeIcon: () => (/* binding */ WindowMaximizeIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 19436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




let WindowMaximizeIcon = /*#__PURE__*/(() => {
  class WindowMaximizeIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵWindowMaximizeIcon_BaseFactory;
      return function WindowMaximizeIcon_Factory(t) {
        return (ɵWindowMaximizeIcon_BaseFactory || (ɵWindowMaximizeIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](WindowMaximizeIcon)))(t || WindowMaximizeIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: WindowMaximizeIcon,
      selectors: [["WindowMaximizeIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function WindowMaximizeIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
        }
      },
      encapsulation: 2
    });
  }
  return WindowMaximizeIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 69551:
/*!************************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-windowminimize.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WindowMinimizeIcon: () => (/* binding */ WindowMinimizeIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 19436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




let WindowMinimizeIcon = /*#__PURE__*/(() => {
  class WindowMinimizeIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵWindowMinimizeIcon_BaseFactory;
      return function WindowMinimizeIcon_Factory(t) {
        return (ɵWindowMinimizeIcon_BaseFactory || (ɵWindowMinimizeIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](WindowMinimizeIcon)))(t || WindowMinimizeIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: WindowMinimizeIcon,
      selectors: [["WindowMinimizeIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function WindowMinimizeIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
        }
      },
      encapsulation: 2
    });
  }
  return WindowMinimizeIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 76301:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-skeleton.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Skeleton: () => (/* binding */ Skeleton),
/* harmony export */   SkeletonModule: () => (/* binding */ SkeletonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);





/**
 * Skeleton is a placeholder to display instead of the actual content.
 * @group Components
 */
let Skeleton = /*#__PURE__*/(() => {
  class Skeleton {
    /**
     * Class of the element.
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the element.
     * @group Props
     */
    style;
    /**
     * Shape of the element.
     * @group Props
     */
    shape = 'rectangle';
    /**
     * Type of the animation.
     * @gruop Props
     */
    animation = 'wave';
    /**
     * Border radius of the element, defaults to value from theme.
     * @group Props
     */
    borderRadius;
    /**
     * Size of the Circle or Square.
     * @group Props
     */
    size;
    /**
     * Width of the element.
     * @group Props
     */
    width = '100%';
    /**
     * Height of the element.
     * @group Props
     */
    height = '1rem';
    containerClass() {
      return {
        'p-skeleton p-component': true,
        'p-skeleton-circle': this.shape === 'circle',
        'p-skeleton-none': this.animation === 'none'
      };
    }
    containerStyle() {
      if (this.size) return {
        ...this.style,
        width: this.size,
        height: this.size,
        borderRadius: this.borderRadius
      };else return {
        ...this.style,
        width: this.width,
        height: this.height,
        borderRadius: this.borderRadius
      };
    }
    static ɵfac = function Skeleton_Factory(t) {
      return new (t || Skeleton)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Skeleton,
      selectors: [["p-skeleton"]],
      hostAttrs: [1, "p-element"],
      inputs: {
        styleClass: "styleClass",
        style: "style",
        shape: "shape",
        animation: "animation",
        borderRadius: "borderRadius",
        size: "size",
        width: "width",
        height: "height"
      },
      decls: 1,
      vars: 7,
      consts: [[3, "ngClass", "ngStyle"]],
      template: function Skeleton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass())("ngStyle", ctx.containerStyle());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "skeleton")("aria-hidden", true)("data-pc-section", "root");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
      styles: ["@layer primeng{.p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:\"\";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Skeleton;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SkeletonModule = /*#__PURE__*/(() => {
  class SkeletonModule {
    static ɵfac = function SkeletonModule_Factory(t) {
      return new (t || SkeletonModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SkeletonModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
    });
  }
  return SkeletonModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=621.js.map