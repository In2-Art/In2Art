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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _ApiClient_backend_Post_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ApiClient/backend/Post/post */ 490);
/* harmony import */ var _ApiClient_helpers_observables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ApiClient/helpers/observables */ 55364);
/* harmony import */ var _ApiClient_backend_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ApiClient/backend/api */ 39039);
/* harmony import */ var _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ApiClient/components/image/image.component */ 69379);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @enums/urls */ 94317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 17780);














const _c0 = ["textContainer"];
function PostCardComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PostCardComponent_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.toggleShowMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 23);
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
      return new (t || PostCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService));
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
      decls: 31,
      vars: 9,
      consts: [["textContainer", ""], [1, "post-wrapper"], [1, "post-header"], [1, "flex", "gap-2", "align-items-center"], [1, "post-author"], ["folder", "UserPictures", "defaultImageUrl", "assets/videos/noUserVid.mp4", 3, "idPicture", "userId"], [1, "post-button"], ["src", "assets/images/icons/more.svg", "alt", "more options"], [1, "post-image"], [1, "responsive-video", 3, "src"], [1, "post-footer"], [1, "post-controls"], [1, "flex", "gap-3"], [1, "post-button", "post-button-hover", "gap-2"], ["src", "assets/images/icons/comments.svg", "alt", "comments"], ["src", "assets/images/icons/likes.svg", "alt", "likes"], [1, "post-button", 3, "click"], ["src", "assets/images/icons/share.svg", "alt", "share"], [1, "post-text"], [1, "font-bold"], ["class", "more-text-button", 3, "click", 4, "ngIf"], [1, "more-text-button", 3, "click"], [1, "more-text"], [1, "less-text"]],
      template: function PostCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "article", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-image", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "video", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PostCardComponent_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.copyLink(ctx.post.id));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "img", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 18, 0)(26, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, PostCardComponent_button_30_Template, 7, 6, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("idPicture", (tmp_1_0 = ctx.post.userCreator.pictureId) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "")("userId", ctx.post.userCreatorId);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.post.userCreator.userProfile == null ? null : ctx.post.userCreator.userProfile.name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 7, ctx.urlThumbnail$), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.post.languages[0].title);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.post.languages[0].description, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showMoreText);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_4__.ImageComponent],
      styles: [".post-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--bgSecondary);\n}\n\n.post-header[_ngcontent-%COMP%] {\n  font-weight: 700;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n  height: 3.5rem;\n  padding: 0 0.75rem;\n}\n\n.post-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 0.5rem;\n}\n\n.post-controls[_ngcontent-%COMP%] {\n  padding: 0 0.5rem;\n  height: 3rem;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.post-author[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 1rem;\n  overflow: hidden;\n}\n\n.post-text[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  max-height: 72px;\n  overflow: hidden;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  padding: 0 0.5rem;\n}\n.post-text.show-all[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n.post-text.show-all[_ngcontent-%COMP%]   .more-text-button[_ngcontent-%COMP%] {\n  position: static;\n  align-self: end;\n}\n.post-text.show-all[_ngcontent-%COMP%]   .more-text-button[_ngcontent-%COMP%]   .less-text[_ngcontent-%COMP%] {\n  display: block;\n}\n.post-text.show-all[_ngcontent-%COMP%]   .more-text-button[_ngcontent-%COMP%]   .more-text[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.less-text[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.more-text-button[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  display: flex;\n  border: none;\n  font-size: 1rem;\n  color: var(--btnPrimary);\n  position: absolute;\n  right: 0.5rem;\n  bottom: 1px;\n  background: var(--bgPrimary);\n  background: linear-gradient(90deg, transparent 0px, var(--bgPrimary) 45px);\n}\n\n.post-button[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2rem;\n  padding: 0 0.5rem;\n  border: none;\n  background-color: transparent;\n}\n.post-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.post-button[_ngcontent-%COMP%]:active {\n  opacity: 0.5;\n}\n\n.post-button-hover[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background-color: var(--inputBg);\n  border-radius: 6px;\n}\n.post-button-hover[_ngcontent-%COMP%]:active {\n  opacity: 0.7;\n}\n\n[_nghost-%COMP%]     .p-card .p-card-body {\n  padding: 0 !important;\n}\n\n[_nghost-%COMP%]     .p-card {\n  width: 100%;\n  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.24), 0px 1px 4px -1px rgba(0, 0, 0, 0.24);\n}\n\n[_nghost-%COMP%]     .p-card .p-card-header {\n  padding: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_pulseShadow {\n  0%, 100% {\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.24), 0 1px 4px -1px rgba(0, 0, 0, 0.24);\n  }\n  50% {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6), 0 6px 10px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.7);\n  }\n}\n.loading-element[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulseShadow 1.5s infinite ease-in-out;\n}\n\n[_nghost-%COMP%]     .p-card .p-card-content {\n  padding: 0 !important;\n}\n\n[_nghost-%COMP%]     .p-tabview .p-tabview-panels {\n  padding: 0 !important;\n}\n\n[_nghost-%COMP%]     .ratingTabPanel {\n  padding: 16px !important;\n  margin: 0 !important;\n}\n\n[_nghost-%COMP%]     .p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {\n  box-shadow: none !important;\n}\n\n.video-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.responsive-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n[_nghost-%COMP%]     .p-tabview .p-tabview-nav li .p-tabview-nav-link {\n  border: none !important;\n}\n\n.ratingBtn[_ngcontent-%COMP%] {\n  color: #292828;\n  background: #c7d3d9;\n  border: 1px solid #c7d3d9;\n  font-size: 1rem;\n  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;\n  border-radius: 30px;\n  height: 1.5rem;\n  font-weight: bold;\n  display: flex;\n  text-align: center;\n  margin: 1px;\n}\n.ratingBtn[_ngcontent-%COMP%]   .ratingValue[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  min-width: 1rem;\n  height: 1rem;\n  line-height: 1rem;\n  color: #c7d3d9;\n  background-color: #292828;\n  width: 2.5rem;\n  font-size: medium;\n}\n\n.usrInfo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.usrInfo[_ngcontent-%COMP%]   .usrData[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  display: flex;\n  flex-direction: column;\n  font-size: larger;\n}\n\n[_nghost-%COMP%]     .p-fieldset .p-fieldset-content {\n  margin: -20px;\n  padding: 0;\n}\n\n.p-tabview-panelVIEW[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 300px;\n}\n.p-tabview-panelVIEW[_ngcontent-%COMP%]   .titlePost[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin: 20px;\n}\n.p-tabview-panelVIEW[_ngcontent-%COMP%]   .descriptionPost[_ngcontent-%COMP%] {\n  text-align: justify;\n  max-width: 100%;\n  margin: auto;\n  padding: 35px;\n  border-radius: 5px;\n}\n\n.p-tabview-panelRATING[_ngcontent-%COMP%] {\n  height: 370px;\n}\n\n@media (min-width: 768px) {\n  p-card[_ngcontent-%COMP%] {\n    width: 800px;\n  }\n}\n@media only screen and (max-width: 650px) {\n  .p-tabview-panelRATING[_ngcontent-%COMP%] {\n    height: 390px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .descriptionPost[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 10px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9zdC1jYXJkL3Bvc3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7RUFBQSx1QkFBQTtBQUNKO0FBQ0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFDTjtBQUNNO0VBQ0UsY0FBQTtBQUNSO0FBRU07RUFDRSxhQUFBO0FBQVI7O0FBTUE7RUFDRSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEVBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFIRjtBQUtFO0VBQ0UsWUFBQTtBQUhKO0FBTUU7RUFDRSxZQUFBO0FBSko7O0FBU0U7RUFDRSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQU5KO0FBU0U7RUFDRSxZQUFBO0FBUEo7O0FBWUE7RUFDRSxxQkFBQTtBQVRGOztBQWdCQTtFQUNFLFdBQUE7RUFDQSxtSEFOaUI7QUFQbkI7O0FBZ0JBO0VBQ0UscUJBQUE7QUFiRjs7QUFnQkE7RUFDRTtJQUNFLDJHQUFBO0VBYkY7RUFlQTtJQUNFLDJHQUFBO0VBYkY7QUFDRjtBQWdCQTtFQUNFLGdEQUFBO0FBZEY7O0FBaUJBO0VBQ0UscUJBQUE7QUFkRjs7QUFpQkE7RUFDRSxxQkFBQTtBQWRGOztBQWtCQTtFQUNFLHdCQUFBO0VBQ0Esb0JBQUE7QUFmRjs7QUFrQkE7RUFDRSwyQkFBQTtBQWZGOztBQWtCQTtFQUNFLFdBQUE7QUFmRjs7QUFtQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWhCRjs7QUFtQkE7RUFDRSx1QkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpRkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWhCRjtBQWtCRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQWhCSjs7QUFxQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBbEJGO0FBb0JFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQWxCSjs7QUF1QkE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQXBCRjs7QUF1QkE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUFwQkY7QUFzQkU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQXBCSjtBQXVCRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFyQko7O0FBeUJBO0VBQ0UsYUFBQTtBQXRCRjs7QUEwQkE7RUFDRTtJQUNFLFlBQUE7RUF2QkY7QUFDRjtBQTBCQTtFQUNFO0lBQ0UsYUFBQTtFQXhCRjtBQUNGO0FBMkJBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUF6QkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmdTZWNvbmRhcnkpO1xufVxuXG4ucG9zdC1oZWFkZXIge1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC43NXJlbTtcbiAgaGVpZ2h0OiAzLjVyZW07XG4gIHBhZGRpbmc6IDAgMC43NXJlbTtcbn1cblxuLnBvc3QtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn1cblxuLnBvc3QtY29udHJvbHMge1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wb3N0LWF1dGhvciB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wb3N0LXRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDcycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG5cbiAgJi5zaG93LWFsbCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xuXG4gICAgLm1vcmUtdGV4dC1idXR0b24ge1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgIGFsaWduLXNlbGY6IGVuZDtcblxuICAgICAgJiAubGVzcy10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICYgLm1vcmUtdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5sZXNzLXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubW9yZS10ZXh0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1idG5QcmltYXJ5KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMC41cmVtO1xuICBib3R0b206IDFweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmdQcmltYXJ5KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCAwcHgsIHZhcigtLWJnUHJpbWFyeSkgNDVweCk7XG59XG5cbi5wb3N0LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAycmVtO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5cbi5wb3N0LWJ1dHRvbi1ob3ZlciB7XG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXRCZyk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxufVxuXG5cbjpob3N0IDo6bmctZGVlcCAucC1jYXJkIC5wLWNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuJGJveC1zaGFkb3ctbGlnaHQ6IDBweCAxMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuMHB4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI0KSxcbjBweCAxcHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcblxuOmhvc3QgOjpuZy1kZWVwIC5wLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3ctbGlnaHRcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5wLWNhcmQgLnAtY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2VTaGFkb3cge1xuICAwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNCksIDAgMXB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC42KSwgMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNyksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgfVxufVxuXG4ubG9hZGluZy1lbGVtZW50IHtcbiAgYW5pbWF0aW9uOiBwdWxzZVNoYWRvdyAxLjVzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnAtY2FyZCAucC1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAucC10YWJ2aWV3IC5wLXRhYnZpZXctcGFuZWxzIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuXG59XG5cbjpob3N0IDo6bmctZGVlcCAucmF0aW5nVGFiUGFuZWwge1xuICBwYWRkaW5nOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnAtdGFidmlldyAucC10YWJ2aWV3LW5hdiBsaSAucC10YWJ2aWV3LW5hdi1saW5rOm5vdCgucC1kaXNhYmxlZCk6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi52aWRlby1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcblxufVxuXG4ucmVzcG9uc2l2ZS12aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCAucC10YWJ2aWV3IC5wLXRhYnZpZXctbmF2IGxpIC5wLXRhYnZpZXctbmF2LWxpbmsge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnJhdGluZ0J0biB7XG4gIGNvbG9yOiAjMjkyODI4O1xuICBiYWNrZ3JvdW5kOiAjYzdkM2Q5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzdkM2Q5O1xuICBmb250LXNpemU6IDFyZW07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzLCBjb2xvciAuMnMsIGJvcmRlci1jb2xvciAuMnMsIGJveC1zaGFkb3cgLjJzO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxcHg7XG5cbiAgLnJhdGluZ1ZhbHVlIHtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIG1pbi13aWR0aDogMXJlbTtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgY29sb3I6ICNjN2QzZDk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjgyODtcbiAgICB3aWR0aDogMi41cmVtO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB9XG59XG5cblxuLnVzckluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgLnVzckRhdGEge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgfVxuXG59XG5cbjpob3N0IDo6bmctZGVlcCAucC1maWVsZHNldCAucC1maWVsZHNldC1jb250ZW50IHtcbiAgbWFyZ2luOiAtMjBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnAtdGFidmlldy1wYW5lbFZJRVcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzAwcHg7XG5cbiAgLnRpdGxlUG9zdCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG5cbiAgLmRlc2NyaXB0aW9uUG9zdCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDM1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG59XG5cbi5wLXRhYnZpZXctcGFuZWxSQVRJTkcge1xuICBoZWlnaHQ6IDM3MHB4O1xufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBwLWNhcmQge1xuICAgIHdpZHRoOiA4MDBweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIC5wLXRhYnZpZXctcGFuZWxSQVRJTkcge1xuICAgIGhlaWdodDogMzkwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZGVzY3JpcHRpb25Qb3N0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
  return PostCardComponent;
})();

/***/ })

}]);
//# sourceMappingURL=621.js.map