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
/* harmony import */ var _ApiClient_backend_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ApiClient/backend/api */ 39039);
/* harmony import */ var _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ApiClient/components/image/image.component */ 69379);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @enums/urls */ 94317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 17780);

















const _c0 = ["textContainer"];
const _c1 = (a0, a1, a2) => ["/", a0, a1, a2];
function PostCardComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PostCardComponent_button_37_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.toggleShowMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "BTN.MORE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 4, "BTN.LESS"));
  }
}
let PostCardComponent = /*#__PURE__*/(() => {
  class PostCardComponent {
    ngAfterViewInit() {
      const textElement = this.textContainer.nativeElement;
      this.showMoreText = textElement.scrollHeight > textElement.clientHeight;
    }
    constructor(toast, translate) {
      this.toast = toast;
      this.translate = translate;
      this.isUniquePost = false;
      this.showMoreText = false;
      this.locale$ = this.translate.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.startWith)({
        lang: this.translate.currentLang
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(event => event.lang));
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_5__.URLS;
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
    static #_ = this.ɵfac = function PostCardComponent_Factory(t) {
      return new (t || PostCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: PostCardComponent,
      selectors: [["app-post-card"]],
      viewQuery: function PostCardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.textContainer = _t.first);
        }
      },
      inputs: {
        post: "post",
        isUniquePost: "isUniquePost"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 38,
      vars: 23,
      consts: [["textContainer", ""], [1, "post-wrapper"], [1, "post-header"], [1, "flex", "gap-2", "align-items-center"], [1, "post-author", 3, "routerLink"], ["folder", "UserPictures", "defaultImageUrl", "assets/videos/noUserVid.mp4", 3, "idPicture", "userId"], [1, "post-button"], ["width", "32", "height", "6"], ["href", "assets/images/icons.svg#post-more-option"], [1, "post-image"], [3, "routerLink"], [1, "responsive-video", 3, "src"], [1, "post-footer"], [1, "post-controls"], [1, "flex", "gap-3"], [1, "post-button", "post-button-hover", "gap-2"], ["width", "24", "height", "24"], ["href", "assets/images/icons.svg#comments"], ["width", "22", "height", "20"], ["href", "assets/images/icons.svg#likes"], [1, "post-button", 3, "click"], ["width", "28", "height", "28"], ["href", "assets/images/icons.svg#share"], [1, "post-text"], [1, "font-bold"], ["class", "more-text-button", 3, "click", 4, "ngIf"], [1, "more-text-button", 3, "click"], [1, "more-text"], [1, "less-text"]],
      template: function PostCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "article", 1)(1, "div", 2)(2, "div", 3)(3, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-image", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "svg", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "use", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 9)(11, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "video", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "svg", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "use", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "svg", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "use", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PostCardComponent_Template_button_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.copyLink(ctx.post.id));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "svg", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "use", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 23, 0)(33, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, PostCardComponent_button_37_Template, 7, 6, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](15, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 9, ctx.locale$), ctx.URLS.PROFILE, ctx.post.userCreator.userNickname == null ? null : ctx.post.userCreator.userNickname.nicknameUrl));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("idPicture", (tmp_2_0 = ctx.post.userCreator.pictureId) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "")("userId", ctx.post.userCreatorId);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.post.userCreator.userProfile == null ? null : ctx.post.userCreator.userProfile.name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](19, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 11, ctx.locale$), ctx.URLS.POST, ctx.post.id));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 13, ctx.urlThumbnail$), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.post.languages[0].title);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.post.languages[0].description, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showMoreText);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_4__.ImageComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink],
      styles: [".post-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--linesOnNormalBackground);\n}\n\n.post-header[_ngcontent-%COMP%] {\n  font-weight: 700;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n  height: 3.5rem;\n  padding: 0 1rem;\n}\n\n.post-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 0.5rem;\n}\n\n.post-controls[_ngcontent-%COMP%] {\n  padding: 0 0.5rem;\n  height: 3rem;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.post-author[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 1rem;\n  overflow: hidden;\n}\n\n.post-text[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  max-height: 72px;\n  overflow: hidden;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  padding: 0 1rem;\n}\n.post-text.show-all[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n.post-text.show-all[_ngcontent-%COMP%]   .more-text-button[_ngcontent-%COMP%] {\n  position: static;\n  align-self: end;\n}\n.post-text.show-all[_ngcontent-%COMP%]   .more-text-button[_ngcontent-%COMP%]   .less-text[_ngcontent-%COMP%] {\n  display: block;\n}\n.post-text.show-all[_ngcontent-%COMP%]   .more-text-button[_ngcontent-%COMP%]   .more-text[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.less-text[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.more-text-button[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  display: flex;\n  border: none;\n  font-size: 1rem;\n  color: var(--button);\n  position: absolute;\n  right: 0.5rem;\n  bottom: 1px;\n  background: var(--background);\n  background: linear-gradient(90deg, transparent 0px, var(--background) 45px);\n}\n\n.post-button[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2rem;\n  padding: 0 0.5rem;\n  border: none;\n  background-color: transparent;\n}\n.post-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.post-button[_ngcontent-%COMP%]:active {\n  opacity: 0.5;\n}\n\n.post-button-hover[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background-color: var(--input);\n  border-radius: 6px;\n}\n.post-button-hover[_ngcontent-%COMP%]:active {\n  opacity: 0.7;\n}\n\n[_nghost-%COMP%]     .p-card .p-card-body {\n  padding: 0 !important;\n}\n\n[_nghost-%COMP%]     .p-card {\n  width: 100%;\n  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.24), 0px 1px 4px -1px rgba(0, 0, 0, 0.24);\n}\n\n[_nghost-%COMP%]     .p-card .p-card-header {\n  padding: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_pulseShadow {\n  0%, 100% {\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.24), 0 1px 4px -1px rgba(0, 0, 0, 0.24);\n  }\n  50% {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6), 0 6px 10px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.7);\n  }\n}\n.loading-element[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulseShadow 1.5s infinite ease-in-out;\n}\n\n[_nghost-%COMP%]     .p-card .p-card-content {\n  padding: 0 !important;\n}\n\n[_nghost-%COMP%]     .p-tabview .p-tabview-panels {\n  padding: 0 !important;\n}\n\n[_nghost-%COMP%]     .ratingTabPanel {\n  padding: 16px !important;\n  margin: 0 !important;\n}\n\n[_nghost-%COMP%]     .p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {\n  box-shadow: none !important;\n}\n\n.video-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.responsive-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n[_nghost-%COMP%]     .p-tabview .p-tabview-nav li .p-tabview-nav-link {\n  border: none !important;\n}\n\n.ratingBtn[_ngcontent-%COMP%] {\n  color: #292828;\n  background: #c7d3d9;\n  border: 1px solid #c7d3d9;\n  font-size: 1rem;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  border-radius: 30px;\n  height: 1.5rem;\n  font-weight: bold;\n  display: flex;\n  text-align: center;\n  margin: 1px;\n}\n.ratingBtn[_ngcontent-%COMP%]   .ratingValue[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  min-width: 1rem;\n  height: 1rem;\n  line-height: 1rem;\n  color: #c7d3d9;\n  background-color: #292828;\n  width: 2.5rem;\n  font-size: medium;\n}\n\n.usrInfo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.usrInfo[_ngcontent-%COMP%]   .usrData[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  display: flex;\n  flex-direction: column;\n  font-size: larger;\n}\n\n[_nghost-%COMP%]     .p-fieldset .p-fieldset-content {\n  margin: -20px;\n  padding: 0;\n}\n\n.p-tabview-panelVIEW[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 300px;\n}\n.p-tabview-panelVIEW[_ngcontent-%COMP%]   .titlePost[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin: 20px;\n}\n.p-tabview-panelVIEW[_ngcontent-%COMP%]   .descriptionPost[_ngcontent-%COMP%] {\n  text-align: justify;\n  max-width: 100%;\n  margin: auto;\n  padding: 35px;\n  border-radius: 5px;\n}\n\n.p-tabview-panelRATING[_ngcontent-%COMP%] {\n  height: 370px;\n}\n\n@media (min-width: 768px) {\n  p-card[_ngcontent-%COMP%] {\n    width: 800px;\n  }\n}\n@media only screen and (max-width: 650px) {\n  .p-tabview-panelRATING[_ngcontent-%COMP%] {\n    height: 390px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .descriptionPost[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 10px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9zdC1jYXJkL3Bvc3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnREFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0VBQUEsdUJBQUE7QUFDSjtBQUNJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQ047QUFDTTtFQUNFLGNBQUE7QUFDUjtBQUVNO0VBQ0UsYUFBQTtBQUFSOztBQU1BO0VBQ0UsYUFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLDJFQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBSEY7QUFLRTtFQUNFLFlBQUE7QUFISjtBQU1FO0VBQ0UsWUFBQTtBQUpKOztBQVNFO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVNFO0VBQ0UsWUFBQTtBQVBKOztBQVlBO0VBQ0UscUJBQUE7QUFURjs7QUFnQkE7RUFDRSxXQUFBO0VBQ0EsbUhBTmlCO0FBUG5COztBQWdCQTtFQUNFLHFCQUFBO0FBYkY7O0FBZ0JBO0VBQ0U7SUFDRSwyR0FBQTtFQWJGO0VBZUE7SUFDRSwyR0FBQTtFQWJGO0FBQ0Y7QUFnQkE7RUFDRSxnREFBQTtBQWRGOztBQWlCQTtFQUNFLHFCQUFBO0FBZEY7O0FBaUJBO0VBQ0UscUJBQUE7QUFkRjs7QUFrQkE7RUFDRSx3QkFBQTtFQUNBLG9CQUFBO0FBZkY7O0FBa0JBO0VBQ0UsMkJBQUE7QUFmRjs7QUFrQkE7RUFDRSxXQUFBO0FBZkY7O0FBbUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsdUJBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUZBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFoQkY7QUFrQkU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFoQko7O0FBcUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQWxCRjtBQW9CRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFsQko7O0FBdUJBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFwQkY7O0FBdUJBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBcEJGO0FBc0JFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFwQko7QUF1QkU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBckJKOztBQXlCQTtFQUNFLGFBQUE7QUF0QkY7O0FBMEJBO0VBQ0U7SUFDRSxZQUFBO0VBdkJGO0FBQ0Y7QUEwQkE7RUFDRTtJQUNFLGFBQUE7RUF4QkY7QUFDRjtBQTJCQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBekJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmVzT25Ob3JtYWxCYWNrZ3JvdW5kKTtcbn1cblxuLnBvc3QtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNzVyZW07XG4gIGhlaWdodDogMy41cmVtO1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG5cbi5wb3N0LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG5cbi5wb3N0LWNvbnRyb2xzIHtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGhlaWdodDogM3JlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucG9zdC1hdXRob3Ige1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucG9zdC10ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtaGVpZ2h0OiA3MnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIHBhZGRpbmc6IDAgMXJlbTtcblxuICAmLnNob3ctYWxsIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG5cbiAgICAubW9yZS10ZXh0LWJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgYWxpZ24tc2VsZjogZW5kO1xuXG4gICAgICAmIC5sZXNzLXRleHQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgJiAubW9yZS10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxlc3MtdGV4dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tb3JlLXRleHQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHZhcigtLWJ1dHRvbik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAuNXJlbTtcbiAgYm90dG9tOiAxcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50IDBweCwgdmFyKC0tYmFja2dyb3VuZCkgNDVweCk7XG59XG5cbi5wb3N0LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAycmVtO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5cbi5wb3N0LWJ1dHRvbi1ob3ZlciB7XG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbn1cblxuXG46aG9zdCA6Om5nLWRlZXAgLnAtY2FyZCAucC1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbiRib3gtc2hhZG93LWxpZ2h0OiAwcHggMTJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbjBweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNCksXG4wcHggMXB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG5cbjpob3N0IDo6bmctZGVlcCAucC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWxpZ2h0XG59XG5cbjpob3N0IDo6bmctZGVlcCAucC1jYXJkIC5wLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlU2hhZG93IHtcbiAgMCUsIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpLCAwIDFweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNiksIDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjcpLCAwIDRweCA2cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIH1cbn1cblxuLmxvYWRpbmctZWxlbWVudCB7XG4gIGFuaW1hdGlvbjogcHVsc2VTaGFkb3cgMS41cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5wLWNhcmQgLnAtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnAtdGFidmlldyAucC10YWJ2aWV3LXBhbmVscyB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcblxufVxuXG46aG9zdCA6Om5nLWRlZXAgLnJhdGluZ1RhYlBhbmVsIHtcbiAgcGFkZGluZzogMTZweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5wLXRhYnZpZXcgLnAtdGFidmlldy1uYXYgbGkgLnAtdGFidmlldy1uYXYtbGluazpub3QoLnAtZGlzYWJsZWQpOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udmlkZW8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG5cbn1cblxuLnJlc3BvbnNpdmUtdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnAtdGFidmlldyAucC10YWJ2aWV3LW5hdiBsaSAucC10YWJ2aWV3LW5hdi1saW5rIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5yYXRpbmdCdG4ge1xuICBjb2xvcjogIzI5MjgyODtcbiAgYmFja2dyb3VuZDogI2M3ZDNkOTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M3ZDNkOTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycywgY29sb3IgLjJzLCBib3JkZXItY29sb3IgLjJzLCBib3gtc2hhZG93IC4ycztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMXB4O1xuXG4gIC5yYXRpbmdWYWx1ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBtaW4td2lkdGg6IDFyZW07XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgIGNvbG9yOiAjYzdkM2Q5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI4Mjg7XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgfVxufVxuXG5cbi51c3JJbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gIC51c3JEYXRhIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG4gIH1cblxufVxuXG46aG9zdCA6Om5nLWRlZXAgLnAtZmllbGRzZXQgLnAtZmllbGRzZXQtY29udGVudCB7XG4gIG1hcmdpbjogLTIwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wLXRhYnZpZXctcGFuZWxWSUVXIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMwMHB4O1xuXG4gIC50aXRsZVBvc3Qge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvblBvc3Qge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxufVxuXG4ucC10YWJ2aWV3LXBhbmVsUkFUSU5HIHtcbiAgaGVpZ2h0OiAzNzBweDtcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgcC1jYXJkIHtcbiAgICB3aWR0aDogODAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICAucC10YWJ2aWV3LXBhbmVsUkFUSU5HIHtcbiAgICBoZWlnaHQ6IDM5MHB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmRlc2NyaXB0aW9uUG9zdCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
  return PostCardComponent;
})();

/***/ })

}]);
//# sourceMappingURL=621.js.map