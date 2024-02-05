"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[740],{

/***/ 2890:
/*!***************************************************************************!*\
  !*** ./src/app/pages/welcome-photo/components/welcome-photo.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WelcomePhotoComponent: () => (/* binding */ WelcomePhotoComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1236);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @enums/urls */ 5500);
/* harmony import */ var _utils_generate_image_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/generate-image-path */ 371);
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/auth/auth.actions */ 3978);
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/auth/auth.selectors */ 4590);
/* harmony import */ var _utils_read_file_as_base_64__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/read-file-as-base-64 */ 5650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/container/container.component */ 2580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/fileupload */ 8285);
/* harmony import */ var _shared_components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/image-cropper/image-cropper.component */ 9648);
























const _c0 = ["fileUpload"];
const _c1 = a0 => ({
  "select-photo": a0
});
function WelcomePhotoComponent_div_13_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WelcomePhotoComponent_div_13_button_1_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const path_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r7.onImageClick(path_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const path_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c1, ctx_r5.selectedPath === path_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", path_r6, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function WelcomePhotoComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, WelcomePhotoComponent_div_13_button_1_Template, 2, 4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.imagePaths);
  }
}
function WelcomePhotoComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "app-image-cropper", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("croppedFile", function WelcomePhotoComponent_div_14_Template_app_image_cropper_croppedFile_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.onSelectCroppedFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fileInput", ctx_r1.fileToCropper);
  }
}
function WelcomePhotoComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WelcomePhotoComponent_ng_container_16_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("loading", ctx_r2.isRefreshed);
  }
}
function WelcomePhotoComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WelcomePhotoComponent_ng_container_22_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.onCancelHandler());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "BTN.CANCEL"));
  }
}
const _c2 = a0 => ({
  hidden: a0
});
const _c3 = a0 => [a0];
let WelcomePhotoComponent = /*#__PURE__*/(() => {
  class WelcomePhotoComponent {
    constructor(store, http, toast, translate) {
      this.store = store;
      this.http = http;
      this.toast = toast;
      this.translate = translate;
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_1__.URLS;
      this.isLoading$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsLoadingAuth);
      this.imagePaths = (0,_utils_generate_image_path__WEBPACK_IMPORTED_MODULE_2__.generateImagePath)(9, 'assets/images/welcome-photo/photo-profile', 'webp');
      this.selectedPath = null;
      this.selectedFile = null;
      this.fileToCropper = null;
      this.croppedFile = null;
      this.isRefreshed = false;
    }
    onImageClick(imagePath) {
      this.selectedPath = imagePath;
    }
    confirm() {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          if (_this.selectedPath && !_this.croppedFile) {
            const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.lastValueFrom)(_this.http.get(_this.selectedPath, {
              responseType: 'blob'
            }));
            const base64String = yield (0,_utils_read_file_as_base_64__WEBPACK_IMPORTED_MODULE_5__.readFileAsBase64)(res);
            _this.store.dispatch((0,_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__.updateUserImageAction)({
              photo: {
                dataBase64: base64String,
                fileExt: 'webp'
              }
            }));
          } else if (!_this.selectedPath && _this.croppedFile) {
            _this.store.dispatch((0,_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__.updateUserImageAction)({
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
    onCancelHandler() {
      this.fileUpload.clear();
      this.selectedPath = null;
      this.fileToCropper = null;
      this.croppedFile = null;
    }
    refresh() {
      this.onCancelHandler();
      this.isRefreshed = true;
      setTimeout(() => {
        this.isRefreshed = false;
        this.imagePaths = (0,_utils_generate_image_path__WEBPACK_IMPORTED_MODULE_2__.generateImagePath)(9, 'assets/images/welcome-photo/photo-profile', 'webp');
      }, 1000);
    }
    onSelectFileUpload(event) {
      var _this2 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this2.fileUpload.msgs = [];
        if (event.files.length > 0) {
          const file = event.files[0];
          if (!file.type.startsWith('image/')) {
            _this2.selectedFile = null;
            _this2.showErrorMessage('ERROR.WRONG_TYPE');
          } else {
            _this2.fileToCropper = event.files[0];
            _this2.selectedPath = null;
          }
        }
      })();
    }
    onSelectCroppedFile(file) {
      var _this3 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this3.croppedFile = file;
      })();
    }
    showErrorMessage(key) {
      this.toast.add({
        severity: 'error',
        summary: this.translate.instant('ERROR.TITLE'),
        detail: this.translate.instant(key)
      });
    }
    static #_ = this.ɵfac = function WelcomePhotoComponent_Factory(t) {
      return new (t || WelcomePhotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_12__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: WelcomePhotoComponent,
      selectors: [["app-welcome-photo"]],
      viewQuery: function WelcomePhotoComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
        }
      },
      decls: 25,
      vars: 33,
      consts: [[3, "width", "isLoading"], [1, "flex", "flex-column", "gap-5", "align-items-center", "justify-content-center"], [1, "text-center"], [1, "text-3xl", "mb-3", "font-bold"], [1, "last-word"], [1, "text-xl", "font-bold"], ["class", "photos", 4, "ngIf"], [4, "ngIf"], [1, "flex", "flex-column", "md:flex-row", "md:justify-content-center", "gap-3", "flex-wrap"], ["chooseIcon", "pi-upload", "name", "chooseImage", "accept", "image/*", 3, "fileLimit", "mode", "chooseLabel", "maxFileSize", "ngClass", "onSelect"], ["fileUpload", ""], ["pButton", "", "pRipple", "", 3, "routerLink", "label"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "p-button-success", 3, "label", "disabled", "click"], [1, "photos"], ["class", "photo-button flex align-items-center m-0 p-0", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "photo-button", "flex", "align-items-center", "m-0", "p-0", 3, "ngClass", "click"], ["alt", "Profile photo", "width", "180", "height", "180", 3, "src"], [3, "fileInput", "croppedFile"], ["icon", "pi pi-refresh", "pButton", "", "pRipple", "", 3, "loading", "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-times", 1, "p-button-danger", 3, "label", "click"]],
      template: function WelcomePhotoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "avatar");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, WelcomePhotoComponent_div_13_Template, 2, 1, "div", 6)(14, WelcomePhotoComponent_div_14_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, WelcomePhotoComponent_ng_container_16_Template, 2, 1, "ng-container", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "p-fileUpload", 9, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onSelect", function WelcomePhotoComponent_Template_p_fileUpload_onSelect_17_listener($event) {
            return ctx.onSelectFileUpload($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, WelcomePhotoComponent_ng_container_22_Template, 3, 3, "ng-container", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WelcomePhotoComponent_Template_button_click_23_listener() {
            return ctx.confirm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", 700)("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 17, ctx.isLoading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 19, "WELCOME_PHOTO_PAGE.TITLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 21, "WELCOME_PHOTO_PAGE.CONTENT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.fileToCropper === null);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.fileToCropper);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.croppedFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fileLimit", 1)("mode", "basic")("chooseLabel", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 23, "BTN.UPLOAD"))("maxFileSize", 1000000)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](29, _c2, ctx.croppedFile !== null));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](31, _c3, ctx.URLS.BACK))("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 25, "BTN.SKIP"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectedPath || ctx.croppedFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](24, 27, "BTN.CONFIRM"))("disabled", !ctx.croppedFile && !ctx.selectedPath);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_6__.ContainerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.Ripple, primeng_fileupload__WEBPACK_IMPORTED_MODULE_18__.FileUpload, _shared_components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_7__.ImageCropperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
      styles: [".photos[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  gap: 20px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.last-word[_ngcontent-%COMP%] {\n  color: #FFAA2B;\n}\n\n.uploaded-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.uploaded-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.photo-button[_ngcontent-%COMP%] {\n  border: 6px solid transparent;\n  background-color: transparent;\n  border-radius: 50%;\n}\n.photo-button[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.photo-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.photo-button[_ngcontent-%COMP%]:active {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\n.select-photo[_ngcontent-%COMP%] {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvd2VsY29tZS1waG90by9jb21wb25lbnRzL3dlbGNvbWUtcGhvdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7QUFDSjs7QUFHQTtFQUNFLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUFGO0FBRUU7RUFDRSxrQkFBQTtBQUFKO0FBR0U7RUFDRSwwQ0FBQTtBQURKO0FBSUU7RUFDRSwwQ0FBQTtBQUZKOztBQU1BO0VBQ0UsdUJBQUE7QUFIRiIsInNvdXJjZXNDb250ZW50IjpbIi5waG90b3Mge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGdhcDogMjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbn1cblxuLmxhc3Qtd29yZCB7XG4gIGNvbG9yOiAjRkZBQTJCO1xufVxuXG4udXBsb2FkZWQtaW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgJiBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuXG4ucGhvdG8tYnV0dG9uIHtcbiAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgJiBhcHAtaW1hZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIH1cbn1cblxuLnNlbGVjdC1waG90byB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return WelcomePhotoComponent;
})();

/***/ }),

/***/ 1243:
/*!*********************************************************************!*\
  !*** ./src/app/pages/welcome-photo/welcome-photo-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WelcomePhotoRoutingModule: () => (/* binding */ WelcomePhotoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 862);
/* harmony import */ var _components_welcome_photo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/welcome-photo.component */ 2890);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @guards/auth.guard */ 4419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: '',
  component: _components_welcome_photo_component__WEBPACK_IMPORTED_MODULE_0__.WelcomePhotoComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}];
let WelcomePhotoRoutingModule = /*#__PURE__*/(() => {
  class WelcomePhotoRoutingModule {
    static #_ = this.ɵfac = function WelcomePhotoRoutingModule_Factory(t) {
      return new (t || WelcomePhotoRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: WelcomePhotoRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
  return WelcomePhotoRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WelcomePhotoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 7740:
/*!*************************************************************!*\
  !*** ./src/app/pages/welcome-photo/welcome-photo.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WelcomePhotoModule: () => (/* binding */ WelcomePhotoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_welcome_photo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/welcome-photo.component */ 2890);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/container/container.component */ 2580);
/* harmony import */ var _welcome_photo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-photo-routing.module */ 1243);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/fileupload */ 8285);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ 8313);
/* harmony import */ var _shared_components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/image-cropper/image-cropper.component */ 9648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);











let WelcomePhotoModule = /*#__PURE__*/(() => {
  class WelcomePhotoModule {
    static #_ = this.ɵfac = function WelcomePhotoModule_Factory(t) {
      return new (t || WelcomePhotoModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: WelcomePhotoModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__.ContainerComponent, _welcome_photo_routing_module__WEBPACK_IMPORTED_MODULE_2__.WelcomePhotoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_8__.FileUploadModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, primeng_toast__WEBPACK_IMPORTED_MODULE_10__.ToastModule, _shared_components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_3__.ImageCropperComponent]
    });
  }
  return WelcomePhotoModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](WelcomePhotoModule, {
    declarations: [_components_welcome_photo_component__WEBPACK_IMPORTED_MODULE_0__.WelcomePhotoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__.ContainerComponent, _welcome_photo_routing_module__WEBPACK_IMPORTED_MODULE_2__.WelcomePhotoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_8__.FileUploadModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, primeng_toast__WEBPACK_IMPORTED_MODULE_10__.ToastModule, _shared_components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_3__.ImageCropperComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=740.js.map