"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[527],{

/***/ 9675:
/*!*******************************************************************!*\
  !*** ./src/app/pages/set-photo/components/set-photo.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetPhotoComponent: () => (/* binding */ SetPhotoComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 1236);
/* harmony import */ var _utils_generate_image_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/generate-image-path */ 371);
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/auth/auth.actions */ 3978);
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/auth/auth.selectors */ 4590);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @enums/urls */ 5500);
/* harmony import */ var _utils_read_file_as_base_64__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/read-file-as-base-64 */ 5650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/container/container.component */ 2580);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/fileupload */ 8285);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var _ApiClient_Backend_components_image_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ApiClient.Backend/components/image/image.component */ 4072);
/* harmony import */ var _shared_components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/image-cropper/image-cropper.component */ 9648);

























const _c0 = ["fileUpload"];
const _c1 = a0 => ({
  "select-photo": a0
});
function SetPhotoComponent_div_14_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SetPhotoComponent_div_14_button_1_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const path_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.onImageClick(path_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const path_r8 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c1, ctx_r5.selectedPath === path_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", path_r8, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function SetPhotoComponent_div_14_p_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SetPhotoComponent_div_14_p_button_3_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r11.deletePhoto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rounded", true);
  }
}
function SetPhotoComponent_div_14_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SetPhotoComponent_div_14_button_8_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      const path_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.onImageClick(path_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const path_r13 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c1, ctx_r7.selectedPath === path_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", path_r13, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
const _c2 = a0 => ({
  "background-color": a0
});
function SetPhotoComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SetPhotoComponent_div_14_button_1_Template, 2, 4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, SetPhotoComponent_div_14_p_button_3_Template, 1, 1, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "app-image", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, SetPhotoComponent_div_14_button_8_Template, 2, 4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.imagePaths.slice(0, 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](13, _c2, ctx_r0.selectedPath ? "transparent" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.isDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("width", 180)("height", 180)("folder", "UserPictures")("idPicture", ctx_r0.isDeleted ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 9, ctx_r0.pictureId$))("userId", ctx_r0.isDeleted ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 11, ctx_r0.userId$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.imagePaths.slice(4, 8));
  }
}
function SetPhotoComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "app-image-cropper", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("croppedFile", function SetPhotoComponent_div_15_Template_app_image_cropper_croppedFile_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r16.onSelectCroppedFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("fileInput", ctx_r1.fileToCropper);
  }
}
function SetPhotoComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SetPhotoComponent_ng_container_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r18.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("loading", ctx_r2.isRefreshed);
  }
}
function SetPhotoComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SetPhotoComponent_ng_container_24_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r20.onCancelHandler());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "BTN.CANCEL"));
  }
}
const _c3 = a0 => ({
  hidden: a0
});
const _c4 = (a0, a1, a2) => [a0, a1, a2];
let SetPhotoComponent = /*#__PURE__*/(() => {
  class SetPhotoComponent {
    constructor(store, http, toast, translate) {
      this.store = store;
      this.http = http;
      this.toast = toast;
      this.translate = translate;
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_4__.URLS;
      this.pictureId$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCurrentUserPictureId);
      this.userId$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCurrentUserId);
      this.userNickname$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCurrentUserNickname);
      this.isLoading$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__.selectIsLoadingAuth);
      this.imagePaths = (0,_utils_generate_image_path__WEBPACK_IMPORTED_MODULE_1__.generateImagePath)(8, 'assets/images/welcome-photo/photo-profile', 'webp');
      this.selectedPath = null;
      this.selectedFile = null;
      this.fileToCropper = null;
      this.croppedFile = null;
      this.isRefreshed = false;
      this.isDeleted = false;
    }
    onImageClick(imagePath) {
      this.selectedPath = imagePath;
    }
    confirm() {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          if (_this.selectedPath && !_this.croppedFile) {
            const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.lastValueFrom)(_this.http.get(_this.selectedPath, {
              responseType: 'blob'
            }));
            const base64String = yield (0,_utils_read_file_as_base_64__WEBPACK_IMPORTED_MODULE_5__.readFileAsBase64)(res);
            _this.store.dispatch((0,_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__.updateUserImageAction)({
              photo: {
                dataBase64: base64String,
                fileExt: 'webp'
              }
            }));
          } else if (!_this.selectedPath && _this.croppedFile) {
            _this.store.dispatch((0,_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__.updateUserImageAction)({
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
      this.onCancelHandler();
      this.isRefreshed = true;
      setTimeout(() => {
        this.isRefreshed = false;
        this.imagePaths = (0,_utils_generate_image_path__WEBPACK_IMPORTED_MODULE_1__.generateImagePath)(8, 'assets/images/welcome-photo/photo-profile', 'webp');
      }, 1000);
    }
    onCancelHandler() {
      this.fileUpload.clear();
      this.selectedPath = null;
      this.fileToCropper = null;
      this.croppedFile = null;
      this.isDeleted = false;
    }
    deletePhoto() {
      this.isDeleted = true;
      this.selectedPath = 'assets/images/no-user.webp';
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
    static #_ = this.ɵfac = function SetPhotoComponent_Factory(t) {
      return new (t || SetPhotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_13__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: SetPhotoComponent,
      selectors: [["app-set-photo"]],
      viewQuery: function SetPhotoComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
        }
      },
      decls: 27,
      vars: 40,
      consts: [[3, "width", "isLoading"], [1, "flex", "flex-column", "gap-5", "align-items-center", "justify-content-center"], [1, "text-center"], [1, "text-3xl", "mb-3", "font-bold"], [1, "last-word"], [1, "text-xl", "font-bold"], ["class", "photos", 4, "ngIf"], [4, "ngIf"], [1, "flex", "flex-column", "md:flex-row", "md:justify-content-center", "gap-3", "flex-wrap"], ["chooseIcon", "pi-upload", "name", "chooseImage", "accept", "image/*", 3, "fileLimit", "mode", "chooseLabel", "maxFileSize", "ngClass", "onSelect"], ["fileUpload", ""], ["icon", "pi pi-user", "pButton", "", "pRipple", "", 3, "routerLink", "label"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "p-button-success", 3, "label", "disabled", "click"], [1, "photos"], ["class", "photo-button flex align-items-center m-0 p-0", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "current-user-wrapper", "flex", "align-items-center", "justify-content-center", "m-0", "p-0", "relative", 3, "ngStyle"], ["class", "delete-button", "icon", "pi pi-trash", "severity", "danger", 3, "rounded", "click", 4, "ngIf"], [1, "current-user-inner"], ["defaultImageUrl", "assets/videos/noUserVid.mp4", 3, "width", "height", "folder", "idPicture", "userId"], [1, "photo-button", "flex", "align-items-center", "m-0", "p-0", 3, "ngClass", "click"], ["alt", "Profile photo", "width", "180", "height", "180", 3, "src"], ["icon", "pi pi-trash", "severity", "danger", 1, "delete-button", 3, "rounded", "click"], [3, "fileInput", "croppedFile"], ["icon", "pi pi-refresh", "pButton", "", "pRipple", "", 3, "loading", "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-times", 1, "p-button-danger", 3, "label", "click"]],
      template: function SetPhotoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "avatar");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, SetPhotoComponent_div_14_Template, 9, 15, "div", 6)(15, SetPhotoComponent_div_15_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, SetPhotoComponent_ng_container_17_Template, 2, 1, "ng-container", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "p-fileUpload", 9, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onSelect", function SetPhotoComponent_Template_p_fileUpload_onSelect_18_listener($event) {
            return ctx.onSelectFileUpload($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, SetPhotoComponent_ng_container_24_Template, 3, 3, "ng-container", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SetPhotoComponent_Template_button_click_25_listener() {
            return ctx.confirm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("width", 700)("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 18, ctx.isLoading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 20, "SET_PHOTO_PAGE.TITLE_1"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 22, "SET_PHOTO_PAGE.TITLE_2"), ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 24, "SET_PHOTO_PAGE.CONTENT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.fileToCropper === null);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.fileToCropper);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.croppedFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("fileLimit", 1)("mode", "basic")("chooseLabel", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 26, "BTN.UPLOAD"))("maxFileSize", 1000000)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](34, _c3, ctx.croppedFile !== null));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](36, _c4, ctx.URLS.BACK, ctx.URLS.PROFILE, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 28, ctx.userNickname$)))("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](23, 30, "BTN.TO_PROFILE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selectedPath || ctx.croppedFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](26, 32, "BTN.CONFIRM"))("disabled", !ctx.croppedFile && !ctx.selectedPath);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_17__.Button, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_6__.ContainerComponent, primeng_fileupload__WEBPACK_IMPORTED_MODULE_18__.FileUpload, primeng_ripple__WEBPACK_IMPORTED_MODULE_19__.Ripple, _ApiClient_Backend_components_image_image_component__WEBPACK_IMPORTED_MODULE_7__.ImageComponent, _shared_components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_8__.ImageCropperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
      styles: [".photos[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  gap: 20px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.last-word[_ngcontent-%COMP%] {\n  color: #FFAA2B;\n}\n\n.uploaded-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.uploaded-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.photo-button[_ngcontent-%COMP%] {\n  border: 6px solid transparent;\n  background-color: transparent;\n  border-radius: 50%;\n}\n.photo-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.photo-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.photo-button[_ngcontent-%COMP%]:active {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\n.current-user-wrapper[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 50%;\n}\n\n.current-user-inner[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.select-photo[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2V0LXBob3RvL2NvbXBvbmVudHMvc2V0LXBob3RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUVFO0VBQ0Usa0JBQUE7QUFBSjtBQUdFO0VBQ0UsMENBQUE7QUFESjtBQUlFO0VBQ0UsMENBQUE7QUFGSjs7QUFNQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsdUJBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FBSEYiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvdG9zIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBnYXA6IDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG59XG5cbi5sYXN0LXdvcmQge1xuICBjb2xvcjogI0ZGQUEyQjtcbn1cblxuLnVwbG9hZGVkLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICYgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbn1cblxuLnBob3RvLWJ1dHRvbiB7XG4gIGJvcmRlcjogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICYgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICB9XG59XG5cbi5jdXJyZW50LXVzZXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jdXJyZW50LXVzZXItaW5uZXIge1xuICB3aWR0aDoxODBweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbi5zZWxlY3QtcGhvdG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmRlbGV0ZS1idXR0b24ge1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return SetPhotoComponent;
})();

/***/ }),

/***/ 4366:
/*!*************************************************************!*\
  !*** ./src/app/pages/set-photo/set-photo-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetPhotoRoutingModule: () => (/* binding */ SetPhotoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 862);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @guards/auth.guard */ 4419);
/* harmony import */ var _components_set_photo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/set-photo.component */ 9675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: '',
  component: _components_set_photo_component__WEBPACK_IMPORTED_MODULE_1__.SetPhotoComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}];
let SetPhotoRoutingModule = /*#__PURE__*/(() => {
  class SetPhotoRoutingModule {
    static #_ = this.ɵfac = function SetPhotoRoutingModule_Factory(t) {
      return new (t || SetPhotoRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: SetPhotoRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
  return SetPhotoRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SetPhotoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 8527:
/*!*****************************************************!*\
  !*** ./src/app/pages/set-photo/set-photo.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetPhotoModule: () => (/* binding */ SetPhotoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_set_photo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/set-photo.component */ 9675);
/* harmony import */ var _set_photo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-photo-routing.module */ 4366);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/container/container.component */ 2580);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/fileupload */ 8285);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ApiClient/components/image/image.component */ 4072);
/* harmony import */ var _shared_components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/image-cropper/image-cropper.component */ 9648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);











let SetPhotoModule = /*#__PURE__*/(() => {
  class SetPhotoModule {
    static #_ = this.ɵfac = function SetPhotoModule_Factory(t) {
      return new (t || SetPhotoModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: SetPhotoModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _set_photo_routing_module__WEBPACK_IMPORTED_MODULE_1__.SetPhotoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, primeng_fileupload__WEBPACK_IMPORTED_MODULE_8__.FileUploadModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.RippleModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_3__.ImageComponent, _shared_components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_4__.ImageCropperComponent]
    });
  }
  return SetPhotoModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SetPhotoModule, {
    declarations: [_components_set_photo_component__WEBPACK_IMPORTED_MODULE_0__.SetPhotoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _set_photo_routing_module__WEBPACK_IMPORTED_MODULE_1__.SetPhotoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, primeng_fileupload__WEBPACK_IMPORTED_MODULE_8__.FileUploadModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.RippleModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_3__.ImageComponent, _shared_components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_4__.ImageCropperComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=527.js.map