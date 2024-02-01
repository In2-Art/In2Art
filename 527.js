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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1236);
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/auth/auth.selectors */ 4590);
/* harmony import */ var _utils_generate_image_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/generate-image-path */ 371);
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/auth/auth.actions */ 3978);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @enums/urls */ 5500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/container/container.component */ 2580);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/fileupload */ 8285);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var _ApiClient_Backend_components_image_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ApiClient.Backend/components/image/image.component */ 4072);























const _c0 = ["fileUpload"];
const _c1 = a0 => ({
  "select-photo": a0
});
function SetPhotoComponent_div_14_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SetPhotoComponent_div_14_button_1_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const path_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.onImageClick(path_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const path_r7 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c1, ctx_r5.selectedPath === path_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", path_r7, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function SetPhotoComponent_div_14_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SetPhotoComponent_div_14_button_7_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const path_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.onImageClick(path_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const path_r10 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c1, ctx_r6.selectedPath === path_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", path_r10, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function SetPhotoComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SetPhotoComponent_div_14_button_1_Template, 2, 4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 16)(3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-image", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, SetPhotoComponent_div_14_button_7_Template, 2, 4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.imagePaths.slice(0, 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", 180)("height", 180)("folder", "UserPictures")("idPicture", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 7, ctx_r0.pictureId$))("userId", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 9, ctx_r0.userId$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.imagePaths.slice(4, 8));
  }
}
function SetPhotoComponent_img_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 21);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.selectedFile, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function SetPhotoComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SetPhotoComponent_ng_container_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("loading", ctx_r2.isRefreshed);
  }
}
function SetPhotoComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SetPhotoComponent_ng_container_23_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.onCancelHandler());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "BTN.CANCEL"));
  }
}
const _c2 = a0 => ({
  hidden: a0
});
const _c3 = (a0, a1, a2) => [a0, a1, a2];
let SetPhotoComponent = /*#__PURE__*/(() => {
  class SetPhotoComponent {
    refresh() {
      this.isRefreshed = true;
      setTimeout(() => {
        this.isRefreshed = false;
        this.imagePaths = (0,_utils_generate_image_path__WEBPACK_IMPORTED_MODULE_2__.generateImagePath)(8, 'assets/images/welcome-photo/photo-profile', 'webp');
      }, 1000);
    }
    constructor(store, http, toast, translate) {
      this.store = store;
      this.http = http;
      this.toast = toast;
      this.translate = translate;
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_4__.URLS;
      this.pictureId$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCurrentUserPictureId);
      this.userId$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCurrentUserId);
      this.userNickname$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCurrentUserNickname);
      this.isLoading$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_1__.selectIsLoadingAuth);
      this.imagePaths = (0,_utils_generate_image_path__WEBPACK_IMPORTED_MODULE_2__.generateImagePath)(8, 'assets/images/welcome-photo/photo-profile', 'webp');
      this.selectedPath = null;
      this.selectedFile = null;
      this.isRefreshed = false;
    }
    onImageClick(imagePath) {
      this.selectedPath = imagePath;
    }
    confirm() {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          if (_this.selectedPath && !_this.selectedFile) {
            const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.lastValueFrom)(_this.http.get(_this.selectedPath, {
              responseType: 'blob'
            }));
            const base64String = yield _this.readFileAsBase64(res);
            _this.store.dispatch((0,_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__.updateUserImageAction)({
              photo: {
                dataBase64: base64String,
                fileExt: 'webp'
              }
            }));
          } else if (!_this.selectedPath && _this.selectedFile) {
            _this.store.dispatch((0,_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_3__.updateUserImageAction)({
              photo: {
                dataBase64: _this.selectedFile,
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
      this.selectedFile = null;
    }
    onSelectHandler(event) {
      var _this2 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this2.fileUpload.msgs = []; // clear messages to avoid the appearance of an error window whose styles cannot be changed
        if (event.files.length > 0) {
          const file = event.files[0];
          if (!file.type.startsWith('image/')) {
            _this2.selectedFile = null;
            _this2.showErrorMessage('ERROR.WRONG_TYPE');
          } else {
            _this2.selectedFile = yield _this2.readFileAsBase64(file);
            _this2.selectedPath = null;
          }
        }
      })();
    }
    readFileAsBase64(file) {
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.onload = () => {
            const base64String = fileReader.result;
            resolve(base64String);
          };
          fileReader.onerror = error => {
            reject(error);
          };
          fileReader.readAsDataURL(file);
        });
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
      return new (t || SetPhotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: SetPhotoComponent,
      selectors: [["app-set-photo"]],
      viewQuery: function SetPhotoComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
        }
      },
      decls: 27,
      vars: 40,
      consts: [[3, "width", "isLoading"], [1, "flex", "flex-column", "gap-5", "align-items-center", "justify-content-center"], [1, "text-center"], [1, "text-3xl", "mb-3", "font-bold"], [1, "last-word"], [1, "text-xl", "font-bold"], ["class", "photos", 4, "ngIf"], ["class", "uploaded-image m-0 p-0 flex align-items-center", "alt", "Uploaded Image", "width", "180", "height", "180", 3, "src", 4, "ngIf"], [1, "flex", "flex-column", "md:flex-row", "gap-3", "pt-2", "w-full", "flex-wrap"], [4, "ngIf"], ["chooseIcon", "pi-upload", "name", "chooseImage", "accept", "image/*", 1, "w-full", "md:w-auto", "flex-grow-1", 3, "fileLimit", "mode", "chooseLabel", "maxFileSize", "ngClass", "onSelect"], ["fileUpload", ""], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "w-full", "md:w-auto", "flex-grow-1", 3, "label", "disabled", "click"], ["icon", "pi pi-user", "pButton", "", "pRipple", "", 1, "w-full", "md:w-auto", "flex-grow-1", 3, "routerLink", "label"], [1, "photos"], ["class", "photo-button flex align-items-center m-0 p-0", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "current-user-wrapper", "flex", "align-items-center", "justify-content-center", "m-0", "p-0"], [1, "current-user-inner"], ["defaultImageUrl", "assets/videos/noUserVid.mp4", 3, "width", "height", "folder", "idPicture", "userId"], [1, "photo-button", "flex", "align-items-center", "m-0", "p-0", 3, "ngClass", "click"], ["alt", "Profile photo", "width", "180", "height", "180", 3, "src"], ["alt", "Uploaded Image", "width", "180", "height", "180", 1, "uploaded-image", "m-0", "p-0", "flex", "align-items-center", 3, "src"], ["icon", "pi pi-refresh", "pButton", "", "pRipple", "", 3, "loading", "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-times", 1, "w-full", "md:w-auto", "flex-grow-1", 3, "label", "click"]],
      template: function SetPhotoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "avatar");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, SetPhotoComponent_div_14_Template, 8, 11, "div", 6)(15, SetPhotoComponent_img_15_Template, 1, 1, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, SetPhotoComponent_ng_container_17_Template, 2, 1, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p-fileUpload", 10, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onSelect", function SetPhotoComponent_Template_p_fileUpload_onSelect_18_listener($event) {
            return ctx.onSelectHandler($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SetPhotoComponent_Template_button_click_21_listener() {
            return ctx.confirm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, SetPhotoComponent_ng_container_23_Template, 3, 3, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", 700)("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 18, ctx.isLoading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 20, "SET_PHOTO_PAGE.TITLE_1"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 22, "SET_PHOTO_PAGE.TITLE_2"), ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 24, "SET_PHOTO_PAGE.CONTENT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedFile === null);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.selectedFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("fileLimit", 1)("mode", "basic")("chooseLabel", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 26, "BTN.UPLOAD"))("maxFileSize", 1000000)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](34, _c2, ctx.selectedFile !== null));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 28, "BTN.CONFIRM"))("disabled", !ctx.selectedFile && !ctx.selectedPath);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](36, _c3, ctx.URLS.BACK, ctx.URLS.PROFILE, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 30, ctx.userNickname$)))("label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 32, "BTN.TO_PROFILE"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonDirective, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_5__.ContainerComponent, primeng_fileupload__WEBPACK_IMPORTED_MODULE_16__.FileUpload, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.Ripple, _ApiClient_Backend_components_image_image_component__WEBPACK_IMPORTED_MODULE_6__.ImageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
      styles: [".photos[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  gap: 20px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.last-word[_ngcontent-%COMP%] {\n  color: #FFAA2B;\n}\n\n.uploaded-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.uploaded-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.photo-button[_ngcontent-%COMP%] {\n  border: 6px solid transparent;\n  background-color: transparent;\n  border-radius: 50%;\n}\n.photo-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.photo-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.photo-button[_ngcontent-%COMP%]:active {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\n.current-user-wrapper[_ngcontent-%COMP%] {\n  background-color: #FFAA2B;\n  border-radius: 20px;\n}\n\n.current-user-inner[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.select-photo[_ngcontent-%COMP%] {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2V0LXBob3RvL2NvbXBvbmVudHMvc2V0LXBob3RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUVFO0VBQ0Usa0JBQUE7QUFBSjtBQUdFO0VBQ0UsMENBQUE7QUFESjtBQUlFO0VBQ0UsMENBQUE7QUFGSjs7QUFNQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsdUJBQUE7QUFIRiIsInNvdXJjZXNDb250ZW50IjpbIi5waG90b3Mge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGdhcDogMjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbn1cblxuLmxhc3Qtd29yZCB7XG4gIGNvbG9yOiAjRkZBQTJCO1xufVxuXG4udXBsb2FkZWQtaW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgJiBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuXG4ucGhvdG8tYnV0dG9uIHtcbiAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgJiBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIH1cbn1cblxuLmN1cnJlbnQtdXNlci13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQUEyQjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmN1cnJlbnQtdXNlci1pbm5lciB7XG4gIHdpZHRoOjE4MHB4O1xuICBoZWlnaHQ6IDE4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuLnNlbGVjdC1waG90byB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_set_photo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/set-photo.component */ 9675);
/* harmony import */ var _set_photo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-photo-routing.module */ 4366);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/container/container.component */ 2580);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/fileupload */ 8285);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ApiClient/components/image/image.component */ 4072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);










let SetPhotoModule = /*#__PURE__*/(() => {
  class SetPhotoModule {
    static #_ = this.ɵfac = function SetPhotoModule_Factory(t) {
      return new (t || SetPhotoModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: SetPhotoModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _set_photo_routing_module__WEBPACK_IMPORTED_MODULE_1__.SetPhotoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, primeng_fileupload__WEBPACK_IMPORTED_MODULE_7__.FileUploadModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_3__.ImageComponent]
    });
  }
  return SetPhotoModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SetPhotoModule, {
    declarations: [_components_set_photo_component__WEBPACK_IMPORTED_MODULE_0__.SetPhotoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _set_photo_routing_module__WEBPACK_IMPORTED_MODULE_1__.SetPhotoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, primeng_fileupload__WEBPACK_IMPORTED_MODULE_7__.FileUploadModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_3__.ImageComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=527.js.map