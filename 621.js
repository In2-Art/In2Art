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
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _ApiClient_backend_Post_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ApiClient/backend/Post/post */ 490);
/* harmony import */ var _ApiClient_helpers_observables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ApiClient/helpers/observables */ 55364);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @enums/urls */ 94317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _directives_clickedOutside_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/clickedOutside.module */ 215);
/* harmony import */ var _components_post_header_post_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/post-header/post-header.component */ 29709);
/* harmony import */ var _components_post_footer_post_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/post-footer/post-footer.component */ 52125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);















const _c0 = (a0, a1, a2) => ["/", a0, a1, a2];
let PostCardComponent = /*#__PURE__*/(() => {
  class PostCardComponent {
    constructor(translate) {
      this.translate = translate;
      this.locale$ = this.translate.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.startWith)({
        lang: this.translate.currentLang
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(event => event.lang));
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_3__.URLS;
      this.postService = (0,_ApiClient_helpers_observables__WEBPACK_IMPORTED_MODULE_2__.ToService)(_ApiClient_backend_Post_post__WEBPACK_IMPORTED_MODULE_1__.Post);
    }
    ngOnInit() {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.setUpImage();
      })();
    }
    setUpImage() {
      this.urlThumbnail$ = this.postService.getUrlPostFileThumbnail({
        fileId: this.post?.postFiles[0].fileId,
        userCreatorId: this.post?.userCreatorId,
        id: this.post?.postFiles[0].id
      });
    }
    static #_ = this.ɵfac = function PostCardComponent_Factory(t) {
      return new (t || PostCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: PostCardComponent,
      selectors: [["app-post-card"]],
      inputs: {
        post: "post"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 12,
      consts: [[1, "post-card-wrapper"], [3, "post"], [3, "routerLink"], [1, "responsive-video", 3, "src"]],
      template: function PostCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "article", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-post-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "video", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "app-post-footer", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("post", ctx.post);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](8, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 4, ctx.locale$), ctx.URLS.POST, ctx.post.id));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 6, ctx.urlThumbnail$), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("post", ctx.post);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _directives_clickedOutside_module__WEBPACK_IMPORTED_MODULE_4__.ClickedOutsideModule, _components_post_header_post_header_component__WEBPACK_IMPORTED_MODULE_5__.PostHeaderComponent, _components_post_footer_post_footer_component__WEBPACK_IMPORTED_MODULE_6__.PostFooterComponent],
      styles: [".post-card-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid var(--linesOnNormalBackground);\n}\n@media (min-width: 768px) {\n  .post-card-wrapper[_ngcontent-%COMP%] {\n    border: 1px solid var(--linesOnNormalBackground);\n  }\n}\n\n.responsive-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9zdC1jYXJkL3Bvc3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1REFBQTtBQUNGO0FBQ0U7RUFORjtJQU9JLGdEQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1jYXJkLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpbmVzT25Ob3JtYWxCYWNrZ3JvdW5kKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lc09uTm9ybWFsQmFja2dyb3VuZCk7XG4gIH1cbn1cblxuLnJlc3BvbnNpdmUtdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
  return PostCardComponent;
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PostFooterComponent_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.toggleShowMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 17);
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
      decls: 23,
      vars: 4,
      consts: [["textContainer", ""], [1, "post-footer"], [1, "post-controls"], [1, "flex", "gap-3"], [1, "post-button", "post-button-hover", "gap-2"], ["width", "24", "height", "24"], ["href", "assets/images/icons.svg#comments"], ["width", "22", "height", "20"], ["href", "assets/images/icons.svg#likes"], [1, "post-button", 3, "click"], ["width", "28", "height", "28"], ["href", "assets/images/icons.svg#share"], [1, "post-text"], [1, "font-bold"], ["class", "more-text-button", 3, "click", 4, "ngIf"], [1, "more-text-button", 3, "click"], [1, "more-text"], [1, "less-text"]],
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
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _directives_clickedOutside_module__WEBPACK_IMPORTED_MODULE_2__.ClickedOutsideModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, primeng_skeleton__WEBPACK_IMPORTED_MODULE_8__.SkeletonModule],
      styles: [".post-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 1rem;\n}\n\n.post-controls[_ngcontent-%COMP%] {\n  padding: 0 0.5rem;\n  height: 3rem;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.post-text[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  max-height: 72px;\n  overflow: hidden;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  padding: 0 1rem;\n}\n.post-text.show-all[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n.post-text.show-all[_ngcontent-%COMP%]   .more-text-button[_ngcontent-%COMP%] {\n  position: static;\n  align-self: end;\n}\n.post-text.show-all[_ngcontent-%COMP%]   .more-text-button[_ngcontent-%COMP%]   .less-text[_ngcontent-%COMP%] {\n  display: block;\n}\n.post-text.show-all[_ngcontent-%COMP%]   .more-text-button[_ngcontent-%COMP%]   .more-text[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.less-text[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.post-button[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2rem;\n  padding: 0 0.5rem;\n  border: none;\n  background-color: transparent;\n}\n.post-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.post-button[_ngcontent-%COMP%]:active {\n  opacity: 0.5;\n}\n\n.more-text-button[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  display: flex;\n  border: none;\n  font-size: 1rem;\n  color: var(--button);\n  position: absolute;\n  right: 0.5rem;\n  bottom: 1px;\n  background: var(--background);\n  background: linear-gradient(90deg, transparent 0px, var(--background) 45px);\n}\n\n.post-button-hover[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background-color: var(--input);\n  border-radius: 6px;\n}\n.post-button-hover[_ngcontent-%COMP%]:active {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9zdC1mb290ZXIvcG9zdC1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFERjtBQUdFO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0VBQUEsdUJBQUE7QUFESjtBQUdJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBRE47QUFHTTtFQUNFLGNBQUE7QUFEUjtBQUlNO0VBQ0UsYUFBQTtBQUZSOztBQVFBO0VBQ0UsYUFBQTtBQUxGOztBQVNBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQU5GO0FBUUU7RUFDRSxZQUFBO0FBTko7QUFTRTtFQUNFLFlBQUE7QUFQSjs7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSwyRUFBQTtBQVZGOztBQWVFO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFaSjtBQWVFO0VBQ0UsWUFBQTtBQWJKIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cblxuXG4ucG9zdC1jb250cm9scyB7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBvc3QtdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LWhlaWdodDogNzJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICBwYWRkaW5nOiAwIDFyZW07XG5cbiAgJi5zaG93LWFsbCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xuXG4gICAgLm1vcmUtdGV4dC1idXR0b24ge1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgIGFsaWduLXNlbGY6IGVuZDtcblxuICAgICAgJiAubGVzcy10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICYgLm1vcmUtdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5sZXNzLXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi5wb3N0LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAycmVtO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5cblxuXG4ubW9yZS10ZXh0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1idXR0b24pO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwLjVyZW07XG4gIGJvdHRvbTogMXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCAwcHgsIHZhcigtLWJhY2tncm91bmQpIDQ1cHgpO1xufVxuXG5cbi5wb3N0LWJ1dHRvbi1ob3ZlciB7XG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @enums/urls */ 94317);
/* harmony import */ var _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ApiClient/components/image/image.component */ 69379);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _directives_clickedOutside_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/clickedOutside.module */ 215);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/skeleton */ 76301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ 87912);
/* harmony import */ var _directives_clickedOutside_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/clickedOutside.directive */ 51182);

















const _c0 = (a0, a1, a2) => ["/", a0, a1, a2];
const _c1 = () => ["/"];
function PostHeaderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-image", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 4, ctx_r0.locale$), ctx_r0.URLS.PROFILE, ctx_r0.nicknameUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("idPicture", ctx_r0.pictureId)("userId", ctx_r0.creatorId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.userName, " ");
  }
}
function PostHeaderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-skeleton", 9)(1, "p-skeleton", 10);
  }
}
function PostHeaderComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 11);
  }
}
function PostHeaderComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("clickOutside", function PostHeaderComponent_div_8_Template_div_clickOutside_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.clickedOutside());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 13)(2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "use", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "use", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 4, "BTN.EDIT_POST"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 6, "BTN.DELETE_POST"));
  }
}
let PostHeaderComponent = /*#__PURE__*/(() => {
  class PostHeaderComponent {
    constructor(translate, breakpointObserver) {
      this.translate = translate;
      this.breakpointObserver = breakpointObserver;
      this.showMoreOptionTab = false;
      this.isMobileScreen = false;
      this.locale$ = this.translate.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.startWith)({
        lang: this.translate.currentLang
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(event => event.lang));
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
    static #_ = this.ɵfac = function PostHeaderComponent_Factory(t) {
      return new (t || PostHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.BreakpointObserver));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: PostHeaderComponent,
      selectors: [["app-post-header"]],
      inputs: {
        post: "post"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 3,
      consts: [[1, "post-header"], [1, "flex", "gap-2", "align-items-center"], [1, "option-button", 3, "click"], ["width", "32", "height", "6"], ["href", "assets/images/icons.svg#post-more-option"], ["class", "overlay", 4, "ngIf"], ["class", "moreOption-tab", "appClickOutside", "", 3, "clickOutside", 4, "ngIf"], [1, "post-author", 3, "routerLink"], ["folder", "UserPictures", "defaultImageUrl", "assets/videos/noUserVid.mp4", 3, "idPicture", "userId"], ["size", "2rem", "shape", "circle"], ["height", "1.5rem", "width", "6rem"], [1, "overlay"], ["appClickOutside", "", 1, "moreOption-tab", 3, "clickOutside"], [1, "moreOption-tab-buttons"], ["type", "button", 1, "moreOption-tab-button", 3, "routerLink"], ["width", "38", "height", "38"], ["href", "assets/images/icons.svg#edit-post"], ["href", "assets/images/icons.svg#delete-post"], ["id", "delete"]],
      template: function PostHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PostHeaderComponent_Conditional_2_Template, 4, 10)(3, PostHeaderComponent_Conditional_3_Template, 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PostHeaderComponent_Template_button_click_4_listener($event) {
            return ctx.toggleMoreOption($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "svg", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "use", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, PostHeaderComponent_div_7_Template, 1, 0, "div", 5)(8, PostHeaderComponent_div_8_Template, 14, 10, "div", 6);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](2, ctx.post ? 2 : 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMoreOptionTab && ctx.isMobileScreen);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMoreOptionTab && ctx.isMobileScreen);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_1__.ImageComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _directives_clickedOutside_module__WEBPACK_IMPORTED_MODULE_2__.ClickedOutsideModule, _directives_clickedOutside_directive__WEBPACK_IMPORTED_MODULE_3__.ClickedOutsideDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, primeng_skeleton__WEBPACK_IMPORTED_MODULE_11__.SkeletonModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_11__.Skeleton],
      styles: [".post-header[_ngcontent-%COMP%] {\n  font-weight: 700;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n  height: 3.5rem;\n  padding: 0 1rem;\n}\n\n.post-author[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 1rem;\n  overflow: hidden;\n}\n\n.option-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2rem;\n  padding: 0 0.5rem;\n  border: none;\n  background-color: transparent;\n}\n.option-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.option-button[_ngcontent-%COMP%]:active {\n  opacity: 0.5;\n}\n\n.moreOption-tab[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: fixed;\n  bottom: 59px;\n  left: 0;\n  width: 100%;\n  gap: 1rem;\n  border-radius: 16px 16px 0 0;\n  background-color: var(--background);\n}\n\n.moreOption-tab-buttons[_ngcontent-%COMP%] {\n  margin: 1.5rem 2rem;\n  gap: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.moreOption-tab-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: 10px;\n  line-height: 1;\n  gap: 20px;\n}\n\n.moreOption-tab-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 24px;\n}\n\n#delete[_ngcontent-%COMP%] {\n  color: var(--errorMessage);\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 60px);\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9zdC1oZWFkZXIvcG9zdC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0FBQ0o7QUFFRTtFQUNFLFlBQUE7QUFBSjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUZGOztBQUtBO0VBQ0UsMEJBQUE7QUFGRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQUhGIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNzVyZW07XG4gIGhlaWdodDogMy41cmVtO1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG5cbi5wb3N0LWF1dGhvciB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5vcHRpb24tYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAycmVtO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5cblxuLm1vcmVPcHRpb24tdGFiIHtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNTlweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG59XG5cbi5tb3JlT3B0aW9uLXRhYi1idXR0b25zIHtcbiAgbWFyZ2luOiAxLjVyZW0gMnJlbTtcbiAgZ2FwOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubW9yZU9wdGlvbi10YWItYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBnYXA6IDIwcHg7XG59XG5cbi5tb3JlT3B0aW9uLXRhYi1idXR0b24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbiNkZWxldGUge1xuICBjb2xvcjogdmFyKC0tZXJyb3JNZXNzYWdlKTtcbn1cblxuLy9Nb3JlIG9wdGlvbiB0YWJcbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return PostHeaderComponent;
})();

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