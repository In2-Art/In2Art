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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _ApiClient_backend_Post_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ApiClient/backend/Post/post */ 490);
/* harmony import */ var _ApiClient_helpers_observables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ApiClient/helpers/observables */ 55364);
/* harmony import */ var _ApiClient_backend_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ApiClient/backend/api */ 39039);
/* harmony import */ var _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ApiClient/components/image/image.component */ 69379);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @enums/urls */ 94317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _directives_clickedOutside_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/clickedOutside.module */ 215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/layout */ 87912);
/* harmony import */ var _directives_clickedOutside_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/clickedOutside.directive */ 51182);





















const _c0 = ["textContainer"];
const _c1 = (a0, a1, a2) => ["/", a0, a1, a2];
const _c2 = () => ["/"];
function PostCardComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PostCardComponent_button_37_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.toggleShowMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "BTN.MORE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 4, "BTN.LESS"));
  }
}
function PostCardComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 30);
  }
}
function PostCardComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("clickOutside", function PostCardComponent_div_39_Template_div_clickOutside_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.clickedOutside());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 32)(2, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "use", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "use", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](8, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 4, "BTN.EDIT_POST"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 6, "BTN.DELETE_POST"));
  }
}
let PostCardComponent = /*#__PURE__*/(() => {
  class PostCardComponent {
    ngAfterViewInit() {
      const textElement = this.textContainer.nativeElement;
      this.showMoreText = textElement.scrollHeight > textElement.clientHeight;
    }
    constructor(toast, translate, breakpointObserver) {
      this.toast = toast;
      this.translate = translate;
      this.breakpointObserver = breakpointObserver;
      this.isUniquePost = false;
      this.showMoreText = false;
      this.showMoreOptionTab = false;
      this.isMobileScreen = false;
      this.locale$ = this.translate.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)({
        lang: this.translate.currentLang
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => event.lang));
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_5__.URLS;
      this.postService = (0,_ApiClient_helpers_observables__WEBPACK_IMPORTED_MODULE_2__.ToService)(_ApiClient_backend_Post_post__WEBPACK_IMPORTED_MODULE_1__.Post);
    }
    ngOnInit() {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.setUpImage();
        console.log('Posts: ', _this.post);
        _this.breakpointObserver.observe(['(max-width: 768px)']).subscribe(res => {
          _this.isMobileScreen = res.matches;
        });
      })();
    }
    setUpImage() {
      this.urlThumbnail$ = this.postService.getUrlPostFileThumbnail({
        fileId: this.post?.postFiles[0].fileId,
        userCreatorId: this.post?.userCreatorId,
        id: this.post?.postFiles[0].id
      });
    }
    copyLink(id) {
      var _this2 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.log('copyLink');
        yield _this2.copy(`${_ApiClient_backend_api__WEBPACK_IMPORTED_MODULE_3__.Api.AppUrl}/${_this2.translate.currentLang}/${_enums_urls__WEBPACK_IMPORTED_MODULE_5__.URLS.POST}/${id}`);
      })();
    }
    toggleShowMore() {
      this.textContainer.nativeElement.classList.toggle('show-all');
    }
    copy(msg) {
      var _this3 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          yield navigator.clipboard.writeText(msg);
          _this3.toast.add({
            severity: 'success',
            summary: _this3.translate.instant('SUCCESS.TITLE'),
            detail: _this3.translate.instant('SUCCESS.URL_COPY')
          });
        } catch {
          _this3.toast.add({
            severity: 'error',
            summary: 'Error',
            detail: _this3.translate.instant('ERROR.URL_COPY')
          });
        }
      })();
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
    static #_ = this.ɵfac = function PostCardComponent_Factory(t) {
      return new (t || PostCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__.BreakpointObserver));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: PostCardComponent,
      selectors: [["app-post-card"]],
      viewQuery: function PostCardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.textContainer = _t.first);
        }
      },
      inputs: {
        post: "post",
        isUniquePost: "isUniquePost"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 40,
      vars: 27,
      consts: [["textContainer", ""], [1, "post-wrapper"], [1, "post-header"], [1, "flex", "gap-2", "align-items-center"], [1, "post-author", 3, "routerLink"], ["folder", "UserPictures", "defaultImageUrl", "assets/videos/noUserVid.mp4", 3, "idPicture", "userId"], [1, "post-button", 3, "click"], ["width", "32", "height", "6"], ["href", "assets/images/icons.svg#post-more-option"], [1, "post-image"], [3, "routerLink"], [1, "responsive-video", 3, "src"], [1, "post-footer"], [1, "post-controls"], [1, "flex", "gap-3"], [1, "post-button", "post-button-hover", "gap-2"], ["width", "24", "height", "24"], ["href", "assets/images/icons.svg#comments"], ["width", "22", "height", "20"], ["href", "assets/images/icons.svg#likes"], ["width", "28", "height", "28"], ["href", "assets/images/icons.svg#share"], [1, "post-text"], [1, "font-bold"], ["class", "more-text-button", 3, "click", 4, "ngIf"], ["class", "overlay", 4, "ngIf"], ["class", "moreOption-tab", "appClickOutside", "", "outsideSelector", ".switcher-icon", 3, "clickOutside", 4, "ngIf"], [1, "more-text-button", 3, "click"], [1, "more-text"], [1, "less-text"], [1, "overlay"], ["appClickOutside", "", "outsideSelector", ".switcher-icon", 1, "moreOption-tab", 3, "clickOutside"], [1, "moreOption-tab-buttons"], ["type", "button", 1, "moreOption-tab-button", 3, "routerLink"], ["width", "38", "height", "38"], ["href", "assets/images/icons.svg#edit-post"], ["href", "assets/images/icons.svg#delete-post"], ["id", "delete"]],
      template: function PostCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "article", 1)(1, "div", 2)(2, "div", 3)(3, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-image", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PostCardComponent_Template_button_click_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.toggleMoreOption($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "svg", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "use", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 9)(11, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "video", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "svg", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "use", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "svg", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "use", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PostCardComponent_Template_button_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.copyLink(ctx.post.id));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "svg", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "use", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 22, 0)(33, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, PostCardComponent_button_37_Template, 7, 6, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, PostCardComponent_div_38_Template, 1, 0, "div", 25)(39, PostCardComponent_div_39_Template, 14, 10, "div", 26);
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](19, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 13, ctx.locale$), ctx.URLS.PROFILE, ctx.post.userCreator.userNickname == null ? null : ctx.post.userCreator.userNickname.nicknameUrl));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("idPicture", (tmp_2_0 = ctx.post.userCreator.pictureId) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "")("userId", ctx.post.userCreatorId);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.post.userCreator.userProfile == null ? null : ctx.post.userCreator.userProfile.name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](23, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 15, ctx.locale$), ctx.URLS.POST, ctx.post.id));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 17, ctx.urlThumbnail$), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.post.totalComments);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.post.reactions[0] == null ? null : ctx.post.reactions[0].count);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.post.languages[0].title);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.post.languages[0].description, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showMoreText);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showMoreOptionTab && ctx.isMobileScreen);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showMoreOptionTab && ctx.isMobileScreen);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_4__.ImageComponent, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _directives_clickedOutside_module__WEBPACK_IMPORTED_MODULE_6__.ClickedOutsideModule, _directives_clickedOutside_directive__WEBPACK_IMPORTED_MODULE_7__.ClickedOutsideDirective],
      styles: [".post-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid var(--linesOnNormalBackground);\n}\n@media (min-width: 768px) {\n  .post-wrapper[_ngcontent-%COMP%] {\n    border: 1px solid var(--linesOnNormalBackground);\n  }\n}\n\n.post-header[_ngcontent-%COMP%] {\n  font-weight: 700;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n  height: 3.5rem;\n  padding: 0 1rem;\n}\n\n.post-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 1rem;\n}\n\n.post-controls[_ngcontent-%COMP%] {\n  padding: 0 0.5rem;\n  height: 3rem;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.post-author[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 1rem;\n  overflow: hidden;\n}\n\n.post-text[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  max-height: 72px;\n  overflow: hidden;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  padding: 0 1rem;\n}\n.post-text.show-all[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n.post-text.show-all[_ngcontent-%COMP%]   .more-text-button[_ngcontent-%COMP%] {\n  position: static;\n  align-self: end;\n}\n.post-text.show-all[_ngcontent-%COMP%]   .more-text-button[_ngcontent-%COMP%]   .less-text[_ngcontent-%COMP%] {\n  display: block;\n}\n.post-text.show-all[_ngcontent-%COMP%]   .more-text-button[_ngcontent-%COMP%]   .more-text[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.less-text[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.more-text-button[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  display: flex;\n  border: none;\n  font-size: 1rem;\n  color: var(--button);\n  position: absolute;\n  right: 0.5rem;\n  bottom: 1px;\n  background: var(--background);\n  background: linear-gradient(90deg, transparent 0px, var(--background) 45px);\n}\n\n.post-button[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2rem;\n  padding: 0 0.5rem;\n  border: none;\n  background-color: transparent;\n}\n.post-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.post-button[_ngcontent-%COMP%]:active {\n  opacity: 0.5;\n}\n\n.post-button-hover[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background-color: var(--input);\n  border-radius: 6px;\n}\n.post-button-hover[_ngcontent-%COMP%]:active {\n  opacity: 0.7;\n}\n\n[_nghost-%COMP%]     .p-card .p-card-body {\n  padding: 0 !important;\n}\n\n[_nghost-%COMP%]     .p-card {\n  width: 100%;\n  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.24), 0px 1px 4px -1px rgba(0, 0, 0, 0.24);\n}\n\n[_nghost-%COMP%]     .p-card .p-card-header {\n  padding: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_pulseShadow {\n  0%, 100% {\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.24), 0 1px 4px -1px rgba(0, 0, 0, 0.24);\n  }\n  50% {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6), 0 6px 10px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.7);\n  }\n}\n.loading-element[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulseShadow 1.5s infinite ease-in-out;\n}\n\n[_nghost-%COMP%]     .p-card .p-card-content {\n  padding: 0 !important;\n}\n\n[_nghost-%COMP%]     .p-tabview .p-tabview-panels {\n  padding: 0 !important;\n}\n\n[_nghost-%COMP%]     .ratingTabPanel {\n  padding: 16px !important;\n  margin: 0 !important;\n}\n\n[_nghost-%COMP%]     .p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {\n  box-shadow: none !important;\n}\n\n.video-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.responsive-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n[_nghost-%COMP%]     .p-tabview .p-tabview-nav li .p-tabview-nav-link {\n  border: none !important;\n}\n\n.ratingBtn[_ngcontent-%COMP%] {\n  color: #292828;\n  background: #c7d3d9;\n  border: 1px solid #c7d3d9;\n  font-size: 1rem;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  border-radius: 30px;\n  height: 1.5rem;\n  font-weight: bold;\n  display: flex;\n  text-align: center;\n  margin: 1px;\n}\n.ratingBtn[_ngcontent-%COMP%]   .ratingValue[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  min-width: 1rem;\n  height: 1rem;\n  line-height: 1rem;\n  color: #c7d3d9;\n  background-color: #292828;\n  width: 2.5rem;\n  font-size: medium;\n}\n\n.usrInfo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.usrInfo[_ngcontent-%COMP%]   .usrData[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  display: flex;\n  flex-direction: column;\n  font-size: larger;\n}\n\n[_nghost-%COMP%]     .p-fieldset .p-fieldset-content {\n  margin: -20px;\n  padding: 0;\n}\n\n.p-tabview-panelVIEW[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 300px;\n}\n.p-tabview-panelVIEW[_ngcontent-%COMP%]   .titlePost[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin: 20px;\n}\n.p-tabview-panelVIEW[_ngcontent-%COMP%]   .descriptionPost[_ngcontent-%COMP%] {\n  text-align: justify;\n  max-width: 100%;\n  margin: auto;\n  padding: 35px;\n  border-radius: 5px;\n}\n\n.p-tabview-panelRATING[_ngcontent-%COMP%] {\n  height: 370px;\n}\n\n@media (min-width: 768px) {\n  p-card[_ngcontent-%COMP%] {\n    width: 800px;\n  }\n}\n@media only screen and (max-width: 650px) {\n  .p-tabview-panelRATING[_ngcontent-%COMP%] {\n    height: 390px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .descriptionPost[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 10px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 60px);\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n}\n\n.moreOption-tab[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: fixed;\n  bottom: 60px;\n  left: 0;\n  width: 100%;\n  height: 145px;\n  gap: 0px;\n  border-radius: 16px 16px 0px 0px;\n  opacity: 0px;\n  background-color: var(--background);\n}\n\n.moreOption-tab-buttons[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 89.23px;\n  margin: 30.42px 96px 25.35px 32px;\n  gap: 0px;\n  border: 1px 0px 0px 0px;\n  opacity: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.moreOption-tab-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: 10px;\n  line-height: 1;\n  gap: 5px;\n}\n\n.moreOption-tab-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 24px;\n  text-align: left;\n  margin-left: 32px;\n}\n\n#delete[_ngcontent-%COMP%] {\n  color: var(--errorMessage);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9zdC1jYXJkL3Bvc3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1REFBQTtBQUNGO0FBQ0U7RUFORjtJQU9JLGdEQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRUY7QUFBRTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUFBLHVCQUFBO0FBRUo7QUFBSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUVOO0FBQU07RUFDRSxjQUFBO0FBRVI7QUFDTTtFQUNFLGFBQUE7QUFDUjs7QUFLQTtFQUNFLGFBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSwyRUFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQUZGO0FBSUU7RUFDRSxZQUFBO0FBRko7QUFLRTtFQUNFLFlBQUE7QUFISjs7QUFRRTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBTEo7QUFRRTtFQUNFLFlBQUE7QUFOSjs7QUFXQTtFQUNFLHFCQUFBO0FBUkY7O0FBZUE7RUFDRSxXQUFBO0VBQ0EsbUhBTmlCO0FBTm5COztBQWVBO0VBQ0UscUJBQUE7QUFaRjs7QUFlQTtFQUNFO0lBQ0UsMkdBQUE7RUFaRjtFQWNBO0lBQ0UsMkdBQUE7RUFaRjtBQUNGO0FBZUE7RUFDRSxnREFBQTtBQWJGOztBQWdCQTtFQUNFLHFCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UscUJBQUE7QUFiRjs7QUFpQkE7RUFDRSx3QkFBQTtFQUNBLG9CQUFBO0FBZEY7O0FBaUJBO0VBQ0UsMkJBQUE7QUFkRjs7QUFpQkE7RUFDRSxXQUFBO0FBZEY7O0FBa0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFmRjs7QUFrQkE7RUFDRSx1QkFBQTtBQWZGOztBQWtCQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlGQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBZkY7QUFpQkU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFmSjs7QUFvQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBakJGO0FBbUJFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQWpCSjs7QUFzQkE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQW5CRjs7QUFzQkE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUFuQkY7QUFxQkU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQW5CSjtBQXNCRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFwQko7O0FBd0JBO0VBQ0UsYUFBQTtBQXJCRjs7QUF5QkE7RUFDRTtJQUNFLFlBQUE7RUF0QkY7QUFDRjtBQXlCQTtFQUNFO0lBQ0UsYUFBQTtFQXZCRjtBQUNGO0FBMEJBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUF4QkY7QUFDRjtBQTRCQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQTFCRjs7QUE2QkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7QUExQkY7O0FBNkJBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQTFCRjs7QUE4QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtBQTNCRjs7QUE4QkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsMEJBQUE7QUEzQkYiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saW5lc09uTm9ybWFsQmFja2dyb3VuZCk7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZXNPbk5vcm1hbEJhY2tncm91bmQpO1xuICB9XG59XG5cbi5wb3N0LWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuXG4ucG9zdC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuLnBvc3QtY29udHJvbHMge1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wb3N0LWF1dGhvciB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wb3N0LXRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDcycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgcGFkZGluZzogMCAxcmVtO1xuXG4gICYuc2hvdy1hbGwge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICAgIC5tb3JlLXRleHQtYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XG5cbiAgICAgICYgLmxlc3MtdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAmIC5tb3JlLXRleHQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubGVzcy10ZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1vcmUtdGV4dC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tYnV0dG9uKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMC41cmVtO1xuICBib3R0b206IDFweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQgMHB4LCB2YXIoLS1iYWNrZ3JvdW5kKSA0NXB4KTtcbn1cblxuLnBvc3QtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDJyZW07XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbn1cblxuLnBvc3QtYnV0dG9uLWhvdmVyIHtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dCk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxufVxuXG5cbjpob3N0IDo6bmctZGVlcCAucC1jYXJkIC5wLWNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuJGJveC1zaGFkb3ctbGlnaHQ6IDBweCAxMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuMHB4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI0KSxcbjBweCAxcHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcblxuOmhvc3QgOjpuZy1kZWVwIC5wLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3ctbGlnaHRcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5wLWNhcmQgLnAtY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2VTaGFkb3cge1xuICAwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNCksIDAgMXB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC42KSwgMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNyksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgfVxufVxuXG4ubG9hZGluZy1lbGVtZW50IHtcbiAgYW5pbWF0aW9uOiBwdWxzZVNoYWRvdyAxLjVzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnAtY2FyZCAucC1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAucC10YWJ2aWV3IC5wLXRhYnZpZXctcGFuZWxzIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuXG59XG5cbjpob3N0IDo6bmctZGVlcCAucmF0aW5nVGFiUGFuZWwge1xuICBwYWRkaW5nOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnAtdGFidmlldyAucC10YWJ2aWV3LW5hdiBsaSAucC10YWJ2aWV3LW5hdi1saW5rOm5vdCgucC1kaXNhYmxlZCk6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi52aWRlby1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcblxufVxuXG4ucmVzcG9uc2l2ZS12aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCAucC10YWJ2aWV3IC5wLXRhYnZpZXctbmF2IGxpIC5wLXRhYnZpZXctbmF2LWxpbmsge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnJhdGluZ0J0biB7XG4gIGNvbG9yOiAjMjkyODI4O1xuICBiYWNrZ3JvdW5kOiAjYzdkM2Q5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzdkM2Q5O1xuICBmb250LXNpemU6IDFyZW07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzLCBjb2xvciAuMnMsIGJvcmRlci1jb2xvciAuMnMsIGJveC1zaGFkb3cgLjJzO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxcHg7XG5cbiAgLnJhdGluZ1ZhbHVlIHtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIG1pbi13aWR0aDogMXJlbTtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgY29sb3I6ICNjN2QzZDk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjgyODtcbiAgICB3aWR0aDogMi41cmVtO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB9XG59XG5cblxuLnVzckluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgLnVzckRhdGEge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgfVxuXG59XG5cbjpob3N0IDo6bmctZGVlcCAucC1maWVsZHNldCAucC1maWVsZHNldC1jb250ZW50IHtcbiAgbWFyZ2luOiAtMjBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnAtdGFidmlldy1wYW5lbFZJRVcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzAwcHg7XG5cbiAgLnRpdGxlUG9zdCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG5cbiAgLmRlc2NyaXB0aW9uUG9zdCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDM1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG59XG5cbi5wLXRhYnZpZXctcGFuZWxSQVRJTkcge1xuICBoZWlnaHQ6IDM3MHB4O1xufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBwLWNhcmQge1xuICAgIHdpZHRoOiA4MDBweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIC5wLXRhYnZpZXctcGFuZWxSQVRJTkcge1xuICAgIGhlaWdodDogMzkwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZGVzY3JpcHRpb25Qb3N0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cblxuLy9Nb3JlIG9wdGlvbiB0YWJcbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IFxuICB6LWluZGV4OiAxMDA7XG59XG5cbi5tb3JlT3B0aW9uLXRhYiB7XG4gIHotaW5kZXg6IDEwMDsgIFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNjBweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTQ1cHg7XG4gIGdhcDogMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMHB4IDBweDtcbiAgb3BhY2l0eTogMHB4OyBcbiAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLWJhY2tncm91bmQpO1xufVxuXG4ubW9yZU9wdGlvbi10YWItYnV0dG9uc3tcbiAgd2lkdGg6IDg1JTtcbiAgaGVpZ2h0OiA4OS4yM3B4O1xuICBtYXJnaW46IDMwLjQycHggOTZweCAyNS4zNXB4IDMycHg7XG4gIGdhcDogMHB4O1xuICBib3JkZXI6IDFweCAwcHggMHB4IDBweDtcbiAgb3BhY2l0eTogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbn1cblxuLm1vcmVPcHRpb24tdGFiLWJ1dHRvbntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBnYXA6IDVweDtcbn1cblxuLm1vcmVPcHRpb24tdGFiLWJ1dHRvbiBzcGFueyAgXG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4jZGVsZXRle1xuICBjb2xvcjogdmFyKC0tZXJyb3JNZXNzYWdlKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
  return PostCardComponent;
})();

/***/ })

}]);
//# sourceMappingURL=621.js.map