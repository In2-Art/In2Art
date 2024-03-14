"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[667],{

/***/ 63667:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/set-user-image/set-user-image.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PAGE: () => (/* binding */ PAGE),
/* harmony export */   SetUserImageComponent: () => (/* binding */ SetUserImageComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/fileupload */ 13209);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 5342);
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/auth/auth.selectors */ 47393);
/* harmony import */ var _utils_generate_image_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/generate-image-path */ 88189);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _utils_read_file_as_base_64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/read-file-as-base-64 */ 82489);
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/auth/auth.actions */ 44772);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @enums/urls */ 94317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../container/container.component */ 2645);
/* harmony import */ var _image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image-cropper/image-cropper.component */ 46049);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _directives_event_blocker_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directives/event-blocker.module */ 44254);
/* harmony import */ var _svg_file_drag_svg_file_drag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../svg/file-drag/svg-file-drag.component */ 76771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _directives_event_blocker_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/event-blocker.directive */ 22649);






























const _c0 = ["fileInput"];
const _c1 = ["*"];
const _c2 = (a0, a1, a2) => [a0, a1, a2];
const _c3 = a0 => [a0];
const _c4 = a0 => ({
  isDragover: a0
});
const _c5 = a0 => ({
  "select-photo": a0
});
function SetUserImageComponent_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("dragend", function SetUserImageComponent_div_5_div_3_Template_button_dragend_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.isDragover = false);
    })("dragover", function SetUserImageComponent_div_5_div_3_Template_button_dragover_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.isDragover = true);
    })("dragenter", function SetUserImageComponent_div_5_div_3_Template_button_dragenter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.isDragover = true);
    })("dragleave", function SetUserImageComponent_div_5_div_3_Template_button_dragleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.isDragover = false);
    })("mouseleave", function SetUserImageComponent_div_5_div_3_Template_button_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.isDragover = false);
    })("drop", function SetUserImageComponent_div_5_div_3_Template_button_drop_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.storeFile($event));
    })("click", function SetUserImageComponent_div_5_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      const fileInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](fileInput_r4.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-svg-file-drag");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](4, _c4, ctx_r1.isDragover));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 2, "IMAGE_CROPPER.DRAG_DROP"));
  }
}
function SetUserImageComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "app-image-cropper", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("uploadFileOutside", function SetUserImageComponent_div_5_div_4_Template_app_image_cropper_uploadFileOutside_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.clickFileInput());
    })("croppedFile", function SetUserImageComponent_div_5_div_4_Template_app_image_cropper_croppedFile_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onSelectCroppedFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("fileInput", ctx_r1.fileToCropper);
  }
}
function SetUserImageComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 12)(1, "input", 13, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function SetUserImageComponent_div_5_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onSelectFileUpload($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, SetUserImageComponent_div_5_div_3_Template, 6, 6, "div", 14)(4, SetUserImageComponent_div_5_div_4_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.fileToCropper);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.fileToCropper);
  }
}
function SetUserImageComponent_div_6_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SetUserImageComponent_div_6_button_4_Template_button_click_0_listener() {
      const path_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onImageClick(path_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const path_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](2, _c5, ctx_r1.selectedPath === path_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", path_r8, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function SetUserImageComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 20)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SetUserImageComponent_div_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, SetUserImageComponent_div_6_button_4_Template, 2, 4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SetUserImageComponent_div_6_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r1.onImageClick(ctx_r1.noImagePath));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("rotate", ctx_r1.isRefreshed);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.imagePaths.slice(0, ctx_r1.page === ctx_r1.PAGE.SET_PHOTO ? 8 : 9));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](5, _c5, ctx_r1.selectedPath === ctx_r1.noImagePath));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r1.noImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
var PAGE = /*#__PURE__*/function (PAGE) {
  PAGE["WELCOME_PHOTO"] = "welcome-photo";
  PAGE["SET_PHOTO"] = "set-photo";
  return PAGE;
}(PAGE || {});
let SetUserImageComponent = /*#__PURE__*/(() => {
  class SetUserImageComponent {
    constructor(store, http, toast, translate) {
      this.store = store;
      this.http = http;
      this.toast = toast;
      this.translate = translate;
      this.page = PAGE.SET_PHOTO;
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_5__.URLS;
      this.isDragover = false;
      this.isUploadMode = true;
      this.userNickname$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCurrentUserNickname);
      this.isLoading$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_1__.selectIsLoadingAuth);
      this.noImagePath = 'assets/images/no-user.webp';
      this.imagePaths = (0,_utils_generate_image_path__WEBPACK_IMPORTED_MODULE_2__.generateImagePath)(8, 'assets/images/welcome-photo/photo-profile', 'webp');
      this.selectedPath = null;
      this.fileToCropper = null;
      this.croppedFile = null;
      this.isRefreshed = false;
      this.PAGE = PAGE;
    }
    onImageClick(imagePath) {
      this.selectedPath = imagePath;
    }
    clickFileInput() {
      this.fileToCropper = null;
      this.fileInput.nativeElement.click();
    }
    changeMode() {
      this.fileToCropper = null;
      this.croppedFile = null;
      this.selectedPath = null;
      this.isUploadMode = !this.isUploadMode;
    }
    confirm() {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          if (_this.selectedPath && !_this.croppedFile) {
            const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.lastValueFrom)(_this.http.get(_this.selectedPath, {
              responseType: 'blob'
            }));
            const base64String = yield (0,_utils_read_file_as_base_64__WEBPACK_IMPORTED_MODULE_3__.readFileAsBase64)(res);
            _this.store.dispatch((0,_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__.updateUserImageAction)({
              photo: {
                dataBase64: base64String,
                fileExt: 'webp'
              }
            }));
          } else if (!_this.selectedPath && _this.croppedFile) {
            _this.store.dispatch((0,_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__.updateUserImageAction)({
              photo: {
                dataBase64: _this.croppedFile,
                fileExt: 'png'
              }
            }));
          }
        } catch (error) {
          console.error('Error during conformation', error);
        }
      })();
    }
    refresh() {
      this.isRefreshed = true;
      setTimeout(() => {
        this.isRefreshed = false;
        this.imagePaths = (0,_utils_generate_image_path__WEBPACK_IMPORTED_MODULE_2__.generateImagePath)(8, 'assets/images/welcome-photo/photo-profile', 'webp');
        this.selectedPath = null;
      }, 1000);
    }
    storeFile($event) {
      var _this2 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this2.isDragover = false;
        _this2.fileToCropper = $event.dataTransfer ? $event.dataTransfer?.files.item(0) ?? null : $event.target.files?.item(0) ?? null;
        _this2.selectedPath = null;
      })();
    }
    onSelectFileUpload(event) {
      var _this3 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const target = event.target;
        const fileList = target.files;
        if (fileList && fileList.length > 0) {
          const file = fileList[0];
          if (!file.type.startsWith('image/')) {
            _this3.showErrorMessage('ERROR.WRONG_TYPE');
          } else {
            _this3.fileToCropper = file;
            _this3.selectedPath = null;
          }
        }
      })();
    }
    onSelectCroppedFile(file) {
      var _this4 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this4.croppedFile = file;
      })();
    }
    showErrorMessage(key) {
      this.toast.add({
        severity: 'error',
        summary: this.translate.instant('ERROR.TITLE'),
        detail: this.translate.instant(key)
      });
    }
    static #_ = this.ɵfac = function SetUserImageComponent_Factory(t) {
      return new (t || SetUserImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_15__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: SetUserImageComponent,
      selectors: [["app-set-user-image"]],
      viewQuery: function SetUserImageComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        }
      },
      inputs: {
        page: "page"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c1,
      decls: 17,
      vars: 24,
      consts: [["fileInput", ""], [3, "width", "isLoading"], [1, "flex", "w-full", "flex-column", "gap-6", "align-items-center", "relative", "justify-content-center"], [1, "text-center"], ["class", "flex justify-content-center w-full", 4, "ngIf"], ["class", "photos relative", 4, "ngIf"], [1, "flex", "w-full", "flex-column", "md:flex-row", "md:justify-content-center", "gap-3", "flex-wrap", "mb-4"], ["pRipple", "", "pButton", "", 1, "w-full", "md:w-auto", "p-button-secondary", 3, "click", "label"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "w-full", "md:w-auto", 3, "click", "label", "disabled"], [1, "back-button", 3, "routerLink"], ["width", "19", "height", "19", "viewBox", "0 0 19 19", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1.5319 0L0 1.5319L7.90072 9.43262L0 17.3333L1.5319 18.8652L9.43262 10.9645L17.3333 18.8652L18.8652 17.3333L10.9645 9.43262L18.8652 1.5319L17.3333 0L9.43262 7.90072L1.5319 0Z", "fill", "currentColor"], [1, "flex", "justify-content-center", "w-full"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["class", "w-full flex justify-content-center", 4, "ngIf"], [4, "ngIf"], [1, "w-full", "flex", "justify-content-center"], ["appEventBlocker", "", 1, "upload", "transition-duration-500", 3, "dragend", "dragover", "dragenter", "dragleave", "mouseleave", "drop", "click", "ngClass"], [1, "text-xl", "mg:text-2xl"], [3, "uploadFileOutside", "croppedFile", "fileInput"], [1, "photos", "relative"], [1, "absolute", "refresh-button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 32 32"], ["d", "M29.974 0c-1.12 0-2.026.908-2.026 2.026V6.75C25.664 3.984 23.032 0 15.788 0 7.084 0 0 7.082 0 15.788s7.084 15.788 15.788 15.788a15.77 15.77 0 0 0 15.004-10.864 2.062 2.062 0 1 0-3.92-1.29 11.65 11.65 0 0 1-11.084 8.028c-6.432 0-11.664-5.232-11.664-11.664s5.232-11.64 11.664-11.64c4.554 0 7.084 2.834 9.148 5.806h-5.094a2.026 2.026 0 1 0 0 4.052h10.132A2.021 2.021 0 0 0 32 11.982V2.026A2.027 2.027 0 0 0 29.974 0z"], ["class", "photo-button flex align-items-center m-0 p-0", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "photo-button", "flex", "align-items-center", "m-0", "p-0", 3, "click", "ngClass"], ["alt", "No Image", "width", "180", "height", "180", 3, "src"], ["alt", "Profile photo", "width", "180", "height", "180", 3, "src"]],
      template: function SetUserImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, SetUserImageComponent_div_5_Template, 5, 2, "div", 4)(6, SetUserImageComponent_div_6_Template, 7, 7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SetUserImageComponent_Template_button_click_8_listener() {
            return ctx.changeMode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SetUserImageComponent_Template_button_click_11_listener() {
            return ctx.confirm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "svg", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "path", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("width", 850)("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 8, ctx.isLoading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isUploadMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isUploadMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", ctx.isUploadMode ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 10, "BTN.AVATAR") : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 12, "BTN.UPLOAD"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 14, "BTN.CONFIRM"))("disabled", !ctx.croppedFile && !ctx.selectedPath);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", ctx.page === ctx.PAGE.SET_PHOTO ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](18, _c2, ctx.URLS.BACK, ctx.URLS.PROFILE, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 16, ctx.userNickname$)) : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](22, _c3, ctx.URLS.BACK));
        }
      },
      dependencies: [primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.RippleModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.Ripple, primeng_button__WEBPACK_IMPORTED_MODULE_18__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_18__.ButtonDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _container_container_component__WEBPACK_IMPORTED_MODULE_6__.ContainerComponent, primeng_fileupload__WEBPACK_IMPORTED_MODULE_20__.FileUploadModule, _image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_7__.ImageCropperComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterLink, _directives_event_blocker_module__WEBPACK_IMPORTED_MODULE_8__.EventBlockerModule, _directives_event_blocker_directive__WEBPACK_IMPORTED_MODULE_10__.EventBlockerDirective, _svg_file_drag_svg_file_drag_component__WEBPACK_IMPORTED_MODULE_9__.SvgFileDragComponent],
      styles: [".photos[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  gap: 0.25rem;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (min-width: 768px) {\n  .photos[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n}\n\n.last-word[_ngcontent-%COMP%] {\n  color: var(--activeLink);\n}\n\n.uploaded-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.uploaded-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.photo-button[_ngcontent-%COMP%] {\n  border: 6px solid transparent;\n  background-color: transparent;\n  border-radius: 50%;\n  min-width: 70px;\n  min-height: 70px;\n  max-width: 180px;\n  max-height: 180px;\n}\n@media (min-width: 768px) {\n  .photo-button[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n  }\n}\n.photo-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.photo-button[_ngcontent-%COMP%]:hover {\n  background-color: var(--btnPrimary);\n}\n.photo-button[_ngcontent-%COMP%]:active {\n  background-color: var(--btnActive);\n}\n\n.select-photo[_ngcontent-%COMP%] {\n  background-color: var(--btnPrimary);\n}\n\n.refresh-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid var(--bgSecondary);\n  background-color: transparent;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  top: -2rem;\n  right: -2rem;\n}\n.refresh-button[_ngcontent-%COMP%]:hover, .refresh-button[_ngcontent-%COMP%]:active {\n  border-color: var(--btnPrimary);\n}\n.refresh-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: var(--text);\n}\n@media (min-width: 768px) {\n  .refresh-button[_ngcontent-%COMP%] {\n    width: 3rem;\n    height: 3rem;\n  }\n  .refresh-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 26px;\n    height: 26px;\n  }\n}\n\n.rotate[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_rotation 500ms infinite linear;\n}\n\n@keyframes _ngcontent-%COMP%_rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2V0LXVzZXItaW1hZ2Uvc2V0LXVzZXItaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7QUFDRjtBQUNFO0VBUEY7SUFRSSxTQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFLHdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGO0FBQUU7RUFDRSxrQkFBQTtBQUVKOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFURjtJQVVJLFlBQUE7SUFDQSxhQUFBO0VBRUY7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQ0U7RUFDRSxtQ0FBQTtBQUNKO0FBRUU7RUFDRSxrQ0FBQTtBQUFKOztBQUlBO0VBQ0UsbUNBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQURGO0FBR0U7RUFDRSwrQkFBQTtBQURKO0FBSUU7RUFDRSxpQkFBQTtBQUZKO0FBS0U7RUFwQkY7SUFxQkksV0FBQTtJQUNBLFlBQUE7RUFGRjtFQUlFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFGSjtBQUNGOztBQU1BO0VBQ0UseUNBQUE7QUFIRjs7QUFNQTtFQUNFO0lBQ0UsdUJBQUE7RUFIRjtFQUtBO0lBQ0UseUJBQUE7RUFIRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBob3RvcyB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGdhcDogMC4yNXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBnYXA6IDFyZW07XG4gIH1cbn1cblxuLmxhc3Qtd29yZCB7XG4gIGNvbG9yOiB2YXIoLS1hY3RpdmVMaW5rKTtcbn1cblxuLnVwbG9hZGVkLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICYgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbn1cblxuLnBob3RvLWJ1dHRvbiB7XG4gIGJvcmRlcjogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIG1pbi1oZWlnaHQ6IDcwcHg7XG4gIG1heC13aWR0aDogMTgwcHg7XG4gIG1heC1oZWlnaHQ6IDE4MHB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICB9XG5cbiAgJiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5QcmltYXJ5KTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5BY3RpdmUpO1xuICB9XG59XG5cbi5zZWxlY3QtcGhvdG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5QcmltYXJ5KTtcbn1cblxuLnJlZnJlc2gtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJnU2Vjb25kYXJ5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgdG9wOiAtMnJlbTtcbiAgcmlnaHQ6IC0ycmVtO1xuXG4gICY6aG92ZXIsJjphY3RpdmUge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnRuUHJpbWFyeSlcbiAgfVxuXG4gICYgc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS10ZXh0KVxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuXG4gICAgJiBzdmcge1xuICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgfVxuICB9XG59XG5cbi5yb3RhdGUge1xuICBhbmltYXRpb246IHJvdGF0aW9uIDUwMG1zIGluZmluaXRlIGxpbmVhcjtcbn1cblxuQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return SetUserImageComponent;
})();

/***/ }),

/***/ 88189:
/*!*****************************************************!*\
  !*** ./src/app/shared/utils/generate-image-path.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateImagePath: () => (/* binding */ generateImagePath)
/* harmony export */ });
function generateImagePath(count, filePath, fileExtension) {
  const totalDigits = 48;
  if (count > totalDigits) {
    throw new Error('Count should be less than or equal to totalDigits');
  }
  const getRandomUniqueDigits = (totalDigits, count) => {
    const allDigits = Array.from({
      length: totalDigits
    }, (_, i) => i + 1);
    const shuffledDigits = allDigits.sort(() => Math.random() - 0.5);
    return shuffledDigits.slice(0, count);
  };
  const selectedDigits = getRandomUniqueDigits(totalDigits, count);
  return selectedDigits.map(digit => `${filePath}${digit}.${fileExtension}`);
}

/***/ }),

/***/ 5342:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/lastValueFrom.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lastValueFrom: () => (/* binding */ lastValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/EmptyError */ 93335);

function lastValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    let _hasValue = false;
    let _value;
    source.subscribe({
      next: value => {
        _value = value;
        _hasValue = true;
      },
      error: reject,
      complete: () => {
        if (_hasValue) {
          resolve(_value);
        } else if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__.EmptyError());
        }
      }
    });
  });
}

/***/ })

}]);
//# sourceMappingURL=667.js.map