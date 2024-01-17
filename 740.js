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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1236);
/* harmony import */ var _ApiClient_backend_User_userPicture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ApiClient/backend/User/userPicture */ 5316);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @enums/urls */ 5500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/container/container.component */ 2580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/fileupload */ 8285);


















const _c0 = ["fileUpload"];
const _c1 = a0 => ({
  "select-photo": a0
});
function WelcomePhotoComponent_div_12_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WelcomePhotoComponent_div_12_button_1_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const path_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.onImageClick(path_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const path_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c1, ctx_r4.selectedPath === path_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", path_r5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function WelcomePhotoComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WelcomePhotoComponent_div_12_button_1_Template, 2, 4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.imagePaths);
  }
}
function WelcomePhotoComponent_img_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 18);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.selectedFile, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function WelcomePhotoComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WelcomePhotoComponent_ng_container_20_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.onCancelHandler());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "BTN.CANCEL"));
  }
}
const _c2 = a0 => ({
  hidden: a0
});
const _c3 = a0 => [a0];
let WelcomePhotoComponent = /*#__PURE__*/(() => {
  class WelcomePhotoComponent {
    constructor(http, toast, translate) {
      this.http = http;
      this.toast = toast;
      this.translate = translate;
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_2__.URLS;
      this.imagePaths = Array.from({
        length: 9
      }, (_, i) => `assets/images/welcome-photo/photo-profile${i + 1}.svg`);
      this.selectedPath = null;
      this.selectedFile = null;
    }
    onImageClick(imagePath) {
      this.selectedPath = imagePath;
    }
    confirm() {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          if (_this.selectedPath && !_this.selectedFile) {
            const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(_this.http.get(_this.selectedPath, {
              responseType: 'blob'
            }));
            const base64String = yield _this.readFileAsBase64(res);
            yield _ApiClient_backend_User_userPicture__WEBPACK_IMPORTED_MODULE_1__.UserPicture.post({
              dataBase64: base64String,
              fileExt: 'png'
            });
          } else if (!_this.selectedPath && _this.selectedFile) {
            yield _ApiClient_backend_User_userPicture__WEBPACK_IMPORTED_MODULE_1__.UserPicture.post({
              dataBase64: _this.selectedFile,
              fileExt: 'png'
            });
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
    static #_ = this.ɵfac = function WelcomePhotoComponent_Factory(t) {
      return new (t || WelcomePhotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: WelcomePhotoComponent,
      selectors: [["app-welcome-photo"]],
      viewQuery: function WelcomePhotoComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
        }
      },
      decls: 23,
      vars: 29,
      consts: [[3, "width"], [1, "flex", "flex-column", "gap-5", "align-items-center", "justify-content-center"], [1, "text-center"], [1, "text-3xl", "mb-3", "font-bold"], [1, "last-word"], [1, "text-xl", "font-bold"], ["class", "photos", 4, "ngIf"], ["class", "uploaded-image m-0 p-0 flex align-items-center", "alt", "Uploaded Image", "width", "180", "height", "180", 3, "src", 4, "ngIf"], [1, "flex", "gap-2", "w-full", "justify-content-center"], ["chooseIcon", "pi-upload", "name", "chooseImage", "accept", "image/jpeg,image/png,image/gif,image/svg+xml", 3, "fileLimit", "mode", "chooseLabel", "maxFileSize", "ngClass", "onSelect"], ["fileUpload", ""], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 3, "label", "disabled", "click"], [4, "ngIf"], ["pButton", "", "pRipple", "", 3, "routerLink", "label"], [1, "photos"], ["class", "photo-button flex align-items-center m-0 p-0", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "photo-button", "flex", "align-items-center", "m-0", "p-0", 3, "ngClass", "click"], ["alt", "Profile photo", "width", "180", "height", "180", 3, "src"], ["alt", "Uploaded Image", "width", "180", "height", "180", 1, "uploaded-image", "m-0", "p-0", "flex", "align-items-center", 3, "src"], ["pButton", "", "pRipple", "", "icon", "pi pi-times", 3, "label", "click"]],
      template: function WelcomePhotoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-container", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "avatar");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, WelcomePhotoComponent_div_12_Template, 2, 1, "div", 6)(13, WelcomePhotoComponent_img_13_Template, 1, 1, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8)(15, "p-fileUpload", 9, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSelect", function WelcomePhotoComponent_Template_p_fileUpload_onSelect_15_listener($event) {
            return ctx.onSelectHandler($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WelcomePhotoComponent_Template_button_click_18_listener() {
            return ctx.confirm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, WelcomePhotoComponent_ng_container_20_Template, 3, 3, "ng-container", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", 700);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 15, "WELCOME_PHOTO_PAGE.TITLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 17, "WELCOME_PHOTO_PAGE.CONTENT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedFile === null);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fileLimit", 1)("mode", "basic")("chooseLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 19, "BTN.UPLOAD"))("maxFileSize", 1000000)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](25, _c2, ctx.selectedFile !== null));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 21, "BTN.CONFIRM"))("disabled", !ctx.selectedFile && !ctx.selectedPath);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c3, ctx.URLS.BACK))("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 23, "BTN.SKIP"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_3__.ContainerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.Ripple, primeng_fileupload__WEBPACK_IMPORTED_MODULE_13__.FileUpload, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
      styles: [".photos[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  gap: 20px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.last-word[_ngcontent-%COMP%] {\n  color: #FFAA2B;\n}\n\n.uploaded-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.uploaded-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.photo-button[_ngcontent-%COMP%] {\n  border: 6px solid transparent;\n  background-color: transparent;\n  border-radius: 50%;\n}\n.photo-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.photo-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.photo-button[_ngcontent-%COMP%]:active {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\n.select-photo[_ngcontent-%COMP%] {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvd2VsY29tZS1waG90by9jb21wb25lbnRzL3dlbGNvbWUtcGhvdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7QUFDSjs7QUFHQTtFQUNFLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUFGO0FBRUU7RUFDRSxrQkFBQTtBQUFKO0FBR0U7RUFDRSwwQ0FBQTtBQURKO0FBSUU7RUFDRSwwQ0FBQTtBQUZKOztBQU1BO0VBQ0UsdUJBQUE7QUFIRiIsInNvdXJjZXNDb250ZW50IjpbIi5waG90b3Mge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGdhcDogMjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbn1cblxuLmxhc3Qtd29yZCB7XG4gIGNvbG9yOiAjRkZBQTJCO1xufVxuXG4udXBsb2FkZWQtaW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgJiBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuXG4ucGhvdG8tYnV0dG9uIHtcbiAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgJiBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIH1cbn1cblxuLnNlbGVjdC1waG90byB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_welcome_photo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/welcome-photo.component */ 2890);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/container/container.component */ 2580);
/* harmony import */ var _welcome_photo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-photo-routing.module */ 1243);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/fileupload */ 8285);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 8313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);










let WelcomePhotoModule = /*#__PURE__*/(() => {
  class WelcomePhotoModule {
    static #_ = this.ɵfac = function WelcomePhotoModule_Factory(t) {
      return new (t || WelcomePhotoModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: WelcomePhotoModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__.ContainerComponent, _welcome_photo_routing_module__WEBPACK_IMPORTED_MODULE_2__.WelcomePhotoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_7__.FileUploadModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.ToastModule]
    });
  }
  return WelcomePhotoModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WelcomePhotoModule, {
    declarations: [_components_welcome_photo_component__WEBPACK_IMPORTED_MODULE_0__.WelcomePhotoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__.ContainerComponent, _welcome_photo_routing_module__WEBPACK_IMPORTED_MODULE_2__.WelcomePhotoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_7__.FileUploadModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.ToastModule]
  });
})();

/***/ }),

/***/ 1236:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/lastValueFrom.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lastValueFrom: () => (/* binding */ lastValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/EmptyError */ 1967);

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

/***/ }),

/***/ 8285:
/*!**************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-fileupload.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileUpload: () => (/* binding */ FileUpload),
/* harmony export */   FileUploadModule: () => (/* binding */ FileUploadModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 4946);
/* harmony import */ var primeng_icons_plus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/plus */ 7186);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/icons/times */ 8993);
/* harmony import */ var primeng_icons_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/upload */ 18);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/messages */ 9404);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/progressbar */ 2506);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);






















/**
 * FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.
 * @group Components
 */
const _c0 = ["advancedfileinput"];
const _c1 = ["basicfileinput"];
const _c2 = ["content"];
function FileUpload_div_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 18);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.chooseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-button-icon p-button-icon-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", true)("data-pc-section", "chooseicon");
  }
}
function FileUpload_div_0_ng_container_6_PlusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "PlusIcon", 21);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-button-icon p-button-icon-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", true)("data-pc-section", "chooseicon");
  }
}
function FileUpload_div_0_ng_container_6_span_2_1_ng_template_0_Template(rf, ctx) {}
function FileUpload_div_0_ng_container_6_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FileUpload_div_0_ng_container_6_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_ng_container_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_ng_container_6_span_2_1_Template, 1, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", true)("data-pc-section", "chooseicon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r13.chooseIconTemplate);
  }
}
function FileUpload_div_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_ng_container_6_PlusIcon_1_Template, 1, 3, "PlusIcon", 19)(2, FileUpload_div_0_ng_container_6_span_2_Template, 2, 3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.chooseIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.chooseIconTemplate);
  }
}
function FileUpload_div_0_p_button_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 25);
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r16.uploadIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function FileUpload_div_0_p_button_9_ng_container_2_UploadIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "UploadIcon", 21);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-button-icon p-button-icon-left");
  }
}
function FileUpload_div_0_p_button_9_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {}
function FileUpload_div_0_p_button_9_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FileUpload_div_0_p_button_9_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_p_button_9_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_p_button_9_ng_container_2_span_2_1_Template, 1, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r19.uploadIconTemplate);
  }
}
function FileUpload_div_0_p_button_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_p_button_9_ng_container_2_UploadIcon_1_Template, 1, 1, "UploadIcon", 19)(2, FileUpload_div_0_p_button_9_ng_container_2_span_2_Template, 2, 2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.uploadIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.uploadIconTemplate);
  }
}
function FileUpload_div_0_p_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function FileUpload_div_0_p_button_9_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.upload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_p_button_9_span_1_Template, 1, 2, "span", 24)(2, FileUpload_div_0_p_button_9_ng_container_2_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r5.uploadButtonLabel)("disabled", !ctx_r5.hasFiles() || ctx_r5.isFileLimitExceeded())("styleClass", ctx_r5.uploadStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.uploadIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.uploadIcon);
  }
}
function FileUpload_div_0_p_button_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 25);
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r24.cancelIcon);
  }
}
function FileUpload_div_0_p_button_10_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesIcon", 21);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-button-icon p-button-icon-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function FileUpload_div_0_p_button_10_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {}
function FileUpload_div_0_p_button_10_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FileUpload_div_0_p_button_10_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_p_button_10_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_p_button_10_ng_container_2_span_2_1_Template, 1, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r27.cancelIconTemplate);
  }
}
function FileUpload_div_0_p_button_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_p_button_10_ng_container_2_TimesIcon_1_Template, 1, 2, "TimesIcon", 19)(2, FileUpload_div_0_p_button_10_ng_container_2_span_2_Template, 2, 2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r25.cancelIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.cancelIconTemplate);
  }
}
function FileUpload_div_0_p_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function FileUpload_div_0_p_button_10_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r30.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_p_button_10_span_1_Template, 1, 1, "span", 24)(2, FileUpload_div_0_p_button_10_ng_container_2_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r6.cancelButtonLabel)("disabled", !ctx_r6.hasFiles() || ctx_r6.uploading)("styleClass", ctx_r6.cancelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.cancelIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.cancelIcon);
  }
}
function FileUpload_div_0_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FileUpload_div_0_p_progressBar_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-progressBar", 26);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r9.progress)("showValue", false);
  }
}
function FileUpload_div_0_div_16_div_1_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function FileUpload_div_0_div_16_div_1_div_1_img_2_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r40.imageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", file_r35.objectURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("width", ctx_r37.previewWidth);
  }
}
function FileUpload_div_0_div_16_div_1_div_1_TimesIcon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesIcon");
  }
}
function FileUpload_div_0_div_16_div_1_div_1_10_ng_template_0_Template(rf, ctx) {}
function FileUpload_div_0_div_16_div_1_div_1_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FileUpload_div_0_div_16_div_1_div_1_10_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_div_16_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FileUpload_div_0_div_16_div_1_div_1_img_2_Template, 1, 2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div")(8, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileUpload_div_0_div_16_div_1_div_1_Template_button_click_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const i_r36 = restoredCtx.index;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r44.remove($event, i_r36));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FileUpload_div_0_div_16_div_1_div_1_TimesIcon_9_Template, 1, 0, "TimesIcon", 8)(10, FileUpload_div_0_div_16_div_1_div_1_10_Template, 1, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const file_r35 = ctx.$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.isImage(file_r35));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r35.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r34.formatSize(file_r35.size));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r34.removeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r34.uploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r34.cancelIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r34.cancelIconTemplate);
  }
}
function FileUpload_div_0_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_div_16_div_1_div_1_Template, 11, 8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r32.files);
  }
}
function FileUpload_div_0_div_16_div_2_ng_template_1_Template(rf, ctx) {}
function FileUpload_div_0_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_div_16_div_2_ng_template_1_Template, 0, 0, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.files)("ngForTemplate", ctx_r33.fileTemplate);
  }
}
function FileUpload_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_div_16_div_1_Template, 2, 1, "div", 8)(2, FileUpload_div_0_div_16_div_2_Template, 2, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.fileTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.fileTemplate);
  }
}
function FileUpload_div_0_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c3 = (a0, a1) => ({
  "p-focus": a0,
  "p-disabled": a1
});
const _c4 = a0 => ({
  $implicit: a0
});
function FileUpload_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function FileUpload_div_0_Template_span_focus_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r47.onFocus());
    })("blur", function FileUpload_div_0_Template_span_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r49.onBlur());
    })("click", function FileUpload_div_0_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r50.choose());
    })("keydown.enter", function FileUpload_div_0_Template_span_keydown_enter_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r51.choose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUpload_div_0_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r52.onFileSelect($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FileUpload_div_0_span_5_Template, 1, 5, "span", 7)(6, FileUpload_div_0_ng_container_6_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FileUpload_div_0_p_button_9_Template, 3, 5, "p-button", 10)(10, FileUpload_div_0_p_button_10_Template, 3, 5, "p-button", 10)(11, FileUpload_div_0_ng_container_11_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragenter", function FileUpload_div_0_Template_div_dragenter_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r53.onDragEnter($event));
    })("dragleave", function FileUpload_div_0_Template_div_dragleave_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r54.onDragLeave($event));
    })("drop", function FileUpload_div_0_Template_div_drop_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r55.onDrop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FileUpload_div_0_p_progressBar_14_Template, 1, 2, "p-progressBar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p-messages", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FileUpload_div_0_div_16_Template, 3, 2, "div", 16)(17, FileUpload_div_0_ng_container_17_Template, 1, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-fileupload p-fileupload-advanced p-component")("ngStyle", ctx_r0.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "fileupload")("data-pc-section", "root");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "buttonbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.chooseStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](30, _c3, ctx_r0.focus, ctx_r0.disabled || ctx_r0.isChooseDisabled()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "choosebutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", ctx_r0.multiple)("accept", ctx_r0.accept)("disabled", ctx_r0.disabled || ctx_r0.isChooseDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", "")("data-pc-section", "input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.chooseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.chooseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "choosebuttonlabel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.chooseButtonLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.auto && ctx_r0.showUploadButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.auto && ctx_r0.showCancelButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.toolbarTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasFiles());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.msgs)("enableService", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasFiles());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c4, ctx_r0.files));
  }
}
function FileUpload_div_1_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 25);
  }
  if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r61.uploadIcon);
  }
}
function FileUpload_div_1_ng_container_3_ng_container_2_UploadIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "UploadIcon", 21);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-button-icon p-button-icon-left");
  }
}
function FileUpload_div_1_ng_container_3_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {}
function FileUpload_div_1_ng_container_3_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FileUpload_div_1_ng_container_3_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_1_ng_container_3_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_1_ng_container_3_ng_container_2_span_2_1_Template, 1, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r64.uploadIconTemplate);
  }
}
function FileUpload_div_1_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_1_ng_container_3_ng_container_2_UploadIcon_1_Template, 1, 1, "UploadIcon", 19)(2, FileUpload_div_1_ng_container_3_ng_container_2_span_2_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r62.uploadIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r62.uploadIconTemplate);
  }
}
function FileUpload_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_1_ng_container_3_span_1_Template, 1, 1, "span", 24)(2, FileUpload_div_1_ng_container_3_ng_container_2_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.uploadIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r56.uploadIcon);
  }
}
function FileUpload_div_1_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 42);
  }
  if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r67.chooseIcon);
  }
}
function FileUpload_div_1_ng_template_4_ng_container_1_PlusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "PlusIcon", 21);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-button-icon p-button-icon-left pi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", "uploadicon");
  }
}
function FileUpload_div_1_ng_template_4_ng_container_1_span_2_1_ng_template_0_Template(rf, ctx) {}
function FileUpload_div_1_ng_template_4_ng_container_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FileUpload_div_1_ng_template_4_ng_container_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_1_ng_template_4_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_1_ng_template_4_ng_container_1_span_2_1_Template, 1, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", "uploadicon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r70.chooseIconTemplate);
  }
}
function FileUpload_div_1_ng_template_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_1_ng_template_4_ng_container_1_PlusIcon_1_Template, 1, 3, "PlusIcon", 19)(2, FileUpload_div_1_ng_template_4_ng_container_1_span_2_Template, 2, 3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r68.chooseIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r68.chooseIconTemplate);
  }
}
function FileUpload_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FileUpload_div_1_ng_template_4_span_0_Template, 1, 1, "span", 41)(1, FileUpload_div_1_ng_template_4_ng_container_1_Template, 3, 2, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.chooseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r57.chooseIcon);
  }
}
function FileUpload_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r59.basicButtonLabel);
  }
}
function FileUpload_div_1_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUpload_div_1_input_7_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r74.onFileSelect($event));
    })("focus", function FileUpload_div_1_input_7_Template_input_focus_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r76.onFocus());
    })("blur", function FileUpload_div_1_input_7_Template_input_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r77.onBlur());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", ctx_r60.accept)("multiple", ctx_r60.multiple)("disabled", ctx_r60.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "input");
  }
}
const _c5 = (a1, a2, a3, a4) => ({
  "p-button p-component p-fileupload-choose": true,
  "p-button-icon-only": a1,
  "p-fileupload-choose-selected": a2,
  "p-focus": a3,
  "p-disabled": a4
});
function FileUpload_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-messages", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileUpload_div_1_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r78.onBasicUploaderClick());
    })("keydown", function FileUpload_div_1_Template_span_keydown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r80.onBasicKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FileUpload_div_1_ng_container_3_Template, 3, 2, "ng-container", 37)(4, FileUpload_div_1_ng_template_4_Template, 2, 2, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(6, FileUpload_div_1_span_6_Template, 2, 2, "span", 39)(7, FileUpload_div_1_input_7_Template, 2, 4, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "fileupload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.msgs)("enableService", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](12, _c5, !ctx_r1.basicButtonLabel, ctx_r1.hasFiles(), ctx_r1.focus, ctx_r1.disabled))("ngStyle", ctx_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "choosebutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hasFiles() && !ctx_r1.auto)("ngIfElse", _r58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.basicButtonLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.hasFiles());
  }
}
let FileUpload = /*#__PURE__*/(() => {
  class FileUpload {
    document;
    platformId;
    renderer;
    el;
    sanitizer;
    zone;
    http;
    cd;
    config;
    /**
     * Name of the request parameter to identify the files at backend.
     * @group Props
     */
    name;
    /**
     * Remote url to upload the files.
     * @group Props
     */
    url;
    /**
     * HTTP method to send the files to the url such as "post" and "put".
     * @group Props
     */
    method = 'post';
    /**
     * Used to select multiple files at once from file dialog.
     * @group Props
     */
    multiple;
    /**
     * Comma-separated list of pattern to restrict the allowed file types. Can be any combination of either the MIME types (such as "image/*") or the file extensions (such as ".jpg").
     * @group Props
     */
    accept;
    /**
     * Disables the upload functionality.
     * @group Props
     */
    disabled;
    /**
     * When enabled, upload begins automatically after selection is completed.
     * @group Props
     */
    auto;
    /**
     * Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.
     * @group Props
     */
    withCredentials;
    /**
     * Maximum file size allowed in bytes.
     * @group Props
     */
    maxFileSize;
    /**
     * Summary message of the invalid file size.
     * @group Props
     */
    invalidFileSizeMessageSummary = '{0}: Invalid file size, ';
    /**
     * Detail message of the invalid file size.
     * @group Props
     */
    invalidFileSizeMessageDetail = 'maximum upload size is {0}.';
    /**
     * Summary message of the invalid file type.
     * @group Props
     */
    invalidFileTypeMessageSummary = '{0}: Invalid file type, ';
    /**
     * Detail message of the invalid file type.
     * @group Props
     */
    invalidFileTypeMessageDetail = 'allowed file types: {0}.';
    /**
     * Detail message of the invalid file type.
     * @group Props
     */
    invalidFileLimitMessageDetail = 'limit is {0} at most.';
    /**
     * Summary message of the invalid file type.
     * @group Props
     */
    invalidFileLimitMessageSummary = 'Maximum number of files exceeded, ';
    /**
     * Inline style of the element.
     * @group Props
     */
    style;
    /**
     * Class of the element.
     * @group Props
     */
    styleClass;
    /**
     * Width of the image thumbnail in pixels.
     * @group Props
     */
    previewWidth = 50;
    /**
     * Label of the choose button. Defaults to PrimeNG Locale configuration.
     * @group Props
     */
    chooseLabel;
    /**
     * Label of the upload button. Defaults to PrimeNG Locale configuration.
     * @group Props
     */
    uploadLabel;
    /**
     * Label of the cancel button. Defaults to PrimeNG Locale configuration.
     * @group Props
     */
    cancelLabel;
    /**
     * Icon of the choose button.
     * @group Props
     */
    chooseIcon;
    /**
     * Icon of the upload button.
     * @group Props
     */
    uploadIcon;
    /**
     * Icon of the cancel button.
     * @group Props
     */
    cancelIcon;
    /**
     * Whether to show the upload button.
     * @group Props
     */
    showUploadButton = true;
    /**
     * Whether to show the cancel button.
     * @group Props
     */
    showCancelButton = true;
    /**
     * Defines the UI of the component.
     * @group Props
     */
    mode = 'advanced';
    /**
     * HttpHeaders class represents the header configuration options for an HTTP request.
     * @group Props
     */
    headers;
    /**
     * Whether to use the default upload or a manual implementation defined in uploadHandler callback. Defaults to PrimeNG Locale configuration.
     * @group Props
     */
    customUpload;
    /**
     * Maximum number of files that can be uploaded.
     * @group Props
     */
    fileLimit;
    /**
     * Style class of the upload button.
     * @group Props
     */
    uploadStyleClass;
    /**
     * Style class of the cancel button.
     * @group Props
     */
    cancelStyleClass;
    /**
     * Style class of the remove button.
     * @group Props
     */
    removeStyleClass;
    /**
     * Style class of the choose button.
     * @group Props
     */
    chooseStyleClass;
    /**
     * Callback to invoke before file upload is initialized.
     * @param {FileBeforeUploadEvent} event - Custom upload event.
     * @group Emits
     */
    onBeforeUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event indicating that the request was sent to the server. Useful when a request may be retried multiple times, to distinguish between retries on the final event stream.
     * @param {FileSendEvent} event - Custom send event.
     * @group Emits
     */
    onSend = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when file upload is complete.
     * @param {FileUploadEvent} event - Custom upload event.
     * @group Emits
     */
    onUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke if file upload fails.
     * @param {FileUploadErrorEvent} event - Custom error event.
     * @group Emits
     */
    onError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when files in queue are removed without uploading using clear all button.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a file is removed without uploading using clear button of a file.
     * @param {FileRemoveEvent} event - Remove event.
     * @group Emits
     */
    onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when files are selected.
     * @param {FileSelectEvent} event - Select event.
     * @group Emits
     */
    onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when files are being uploaded.
     * @param {FileProgressEvent} event - Progress event.
     * @group Emits
     */
    onProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke in custom upload mode to upload the files manually.
     * @param {FileUploadHandlerEvent} event - Upload handler event.
     * @group Emits
     */
    uploadHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is triggered if an error occurs while loading an image file.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onImageError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    templates;
    advancedFileInput;
    basicFileInput;
    content;
    set files(files) {
      this._files = [];
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        if (this.validate(file)) {
          if (this.isImage(file)) {
            file.objectURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i]));
          }
          this._files.push(files[i]);
        }
      }
    }
    get files() {
      return this._files;
    }
    get basicButtonLabel() {
      if (this.auto || !this.hasFiles()) {
        return this.chooseLabel;
      }
      return this.uploadLabel ?? this.files[0].name;
    }
    _files = [];
    progress = 0;
    dragHighlight;
    msgs;
    fileTemplate;
    contentTemplate;
    toolbarTemplate;
    chooseIconTemplate;
    uploadIconTemplate;
    cancelIconTemplate;
    uploadedFileCount = 0;
    focus;
    uploading;
    duplicateIEEvent; // flag to recognize duplicate onchange event for file input
    translationSubscription;
    dragOverListener;
    constructor(document, platformId, renderer, el, sanitizer, zone, http, cd, config) {
      this.document = document;
      this.platformId = platformId;
      this.renderer = renderer;
      this.el = el;
      this.sanitizer = sanitizer;
      this.zone = zone;
      this.http = http;
      this.cd = cd;
      this.config = config;
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'file':
            this.fileTemplate = item.template;
            break;
          case 'content':
            this.contentTemplate = item.template;
            break;
          case 'toolbar':
            this.toolbarTemplate = item.template;
            break;
          case 'chooseicon':
            this.chooseIconTemplate = item.template;
            break;
          case 'uploadicon':
            this.uploadIconTemplate = item.template;
            break;
          case 'cancelicon':
            this.cancelIconTemplate = item.template;
            break;
          default:
            this.fileTemplate = item.template;
            break;
        }
      });
    }
    ngOnInit() {
      this.translationSubscription = this.config.translationObserver.subscribe(() => {
        this.cd.markForCheck();
      });
    }
    ngAfterViewInit() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        if (this.mode === 'advanced') {
          this.zone.runOutsideAngular(() => {
            if (this.content) {
              this.dragOverListener = this.renderer.listen(this.content.nativeElement, 'dragover', this.onDragOver.bind(this));
            }
          });
        }
      }
    }
    getTranslation(option) {
      return this.config.getTranslation(option);
    }
    choose() {
      this.advancedFileInput?.nativeElement.click();
    }
    onFileSelect(event) {
      if (event.type !== 'drop' && this.isIE11() && this.duplicateIEEvent) {
        this.duplicateIEEvent = false;
        return;
      }
      this.msgs = [];
      if (!this.multiple) {
        this.files = [];
      }
      let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        if (!this.isFileSelected(file)) {
          if (this.validate(file)) {
            if (this.isImage(file)) {
              file.objectURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i]));
            }
            this.files.push(files[i]);
          }
        }
      }
      this.onSelect.emit({
        originalEvent: event,
        files: files,
        currentFiles: this.files
      });
      if (this.fileLimit) {
        this.checkFileLimit();
      }
      if (this.hasFiles() && this.auto && (!(this.mode === 'advanced') || !this.isFileLimitExceeded())) {
        this.upload();
      }
      if (event.type !== 'drop' && this.isIE11()) {
        this.clearIEInput();
      } else {
        this.clearInputElement();
      }
    }
    isFileSelected(file) {
      for (let sFile of this.files) {
        if (sFile.name + sFile.type + sFile.size === file.name + file.type + file.size) {
          return true;
        }
      }
      return false;
    }
    isIE11() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        return !!this.document.defaultView['MSInputMethodContext'] && !!this.document['documentMode'];
      }
    }
    validate(file) {
      this.msgs = this.msgs || [];
      if (this.accept && !this.isFileTypeValid(file)) {
        this.msgs.push({
          severity: 'error',
          summary: this.invalidFileTypeMessageSummary.replace('{0}', file.name),
          detail: this.invalidFileTypeMessageDetail.replace('{0}', this.accept)
        });
        return false;
      }
      if (this.maxFileSize && file.size > this.maxFileSize) {
        this.msgs.push({
          severity: 'error',
          summary: this.invalidFileSizeMessageSummary.replace('{0}', file.name),
          detail: this.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.maxFileSize))
        });
        return false;
      }
      return true;
    }
    isFileTypeValid(file) {
      let acceptableTypes = this.accept?.split(',').map(type => type.trim());
      for (let type of acceptableTypes) {
        let acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type) : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();
        if (acceptable) {
          return true;
        }
      }
      return false;
    }
    getTypeClass(fileType) {
      return fileType.substring(0, fileType.indexOf('/'));
    }
    isWildcard(fileType) {
      return fileType.indexOf('*') !== -1;
    }
    getFileExtension(file) {
      return '.' + file.name.split('.').pop();
    }
    isImage(file) {
      return /^image\//.test(file.type);
    }
    onImageLoad(img) {
      window.URL.revokeObjectURL(img.src);
    }
    /**
     * Uploads the selected files.
     * @group Method
     */
    upload() {
      if (this.customUpload) {
        if (this.fileLimit) {
          this.uploadedFileCount += this.files.length;
        }
        this.uploadHandler.emit({
          files: this.files
        });
        this.cd.markForCheck();
      } else {
        this.uploading = true;
        this.msgs = [];
        let formData = new FormData();
        this.onBeforeUpload.emit({
          formData: formData
        });
        for (let i = 0; i < this.files.length; i++) {
          formData.append(this.name, this.files[i], this.files[i].name);
        }
        this.http.request(this.method, this.url, {
          body: formData,
          headers: this.headers,
          reportProgress: true,
          observe: 'events',
          withCredentials: this.withCredentials
        }).subscribe(event => {
          switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpEventType.Sent:
              this.onSend.emit({
                originalEvent: event,
                formData: formData
              });
              break;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpEventType.Response:
              this.uploading = false;
              this.progress = 0;
              if (event['status'] >= 200 && event['status'] < 300) {
                if (this.fileLimit) {
                  this.uploadedFileCount += this.files.length;
                }
                this.onUpload.emit({
                  originalEvent: event,
                  files: this.files
                });
              } else {
                this.onError.emit({
                  files: this.files
                });
              }
              this.clear();
              break;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpEventType.UploadProgress:
              {
                if (event['loaded']) {
                  this.progress = Math.round(event['loaded'] * 100 / event['total']);
                }
                this.onProgress.emit({
                  originalEvent: event,
                  progress: this.progress
                });
                break;
              }
          }
          this.cd.markForCheck();
        }, error => {
          this.uploading = false;
          this.onError.emit({
            files: this.files,
            error: error
          });
        });
      }
    }
    /**
     * Clears the files list.
     * @group Method
     */
    clear() {
      this.files = [];
      this.uploadedFileCount = 0;
      this.onClear.emit();
      this.clearInputElement();
      this.cd.markForCheck();
    }
    remove(event, index) {
      this.clearInputElement();
      this.onRemove.emit({
        originalEvent: event,
        file: this.files[index]
      });
      this.files.splice(index, 1);
      this.checkFileLimit();
    }
    isFileLimitExceeded() {
      const isAutoMode = this.auto;
      const totalFileCount = isAutoMode ? this.files.length : this.files.length + this.uploadedFileCount;
      if (this.fileLimit && this.fileLimit <= totalFileCount && this.focus) {
        this.focus = false;
      }
      return this.fileLimit && this.fileLimit < totalFileCount;
    }
    isChooseDisabled() {
      if (this.auto) {
        return this.fileLimit && this.fileLimit <= this.files.length;
      } else {
        return this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount;
      }
    }
    checkFileLimit() {
      this.msgs ??= [];
      if (this.isFileLimitExceeded()) {
        this.msgs.push({
          severity: 'error',
          summary: this.invalidFileLimitMessageSummary.replace('{0}', this.fileLimit.toString()),
          detail: this.invalidFileLimitMessageDetail.replace('{0}', this.fileLimit.toString())
        });
      }
    }
    clearInputElement() {
      if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
        this.advancedFileInput.nativeElement.value = '';
      }
      if (this.basicFileInput && this.basicFileInput.nativeElement) {
        this.basicFileInput.nativeElement.value = '';
      }
    }
    clearIEInput() {
      if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
        this.duplicateIEEvent = true; //IE11 fix to prevent onFileChange trigger again
        this.advancedFileInput.nativeElement.value = '';
      }
    }
    hasFiles() {
      return this.files && this.files.length > 0;
    }
    onDragEnter(e) {
      if (!this.disabled) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
    onDragOver(e) {
      if (!this.disabled) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.content?.nativeElement, 'p-fileupload-highlight');
        this.dragHighlight = true;
        e.stopPropagation();
        e.preventDefault();
      }
    }
    onDragLeave(event) {
      if (!this.disabled) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.content?.nativeElement, 'p-fileupload-highlight');
      }
    }
    onDrop(event) {
      if (!this.disabled) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.content?.nativeElement, 'p-fileupload-highlight');
        event.stopPropagation();
        event.preventDefault();
        let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        let allowDrop = this.multiple || files && files.length === 1;
        if (allowDrop) {
          this.onFileSelect(event);
        }
      }
    }
    onFocus() {
      this.focus = true;
    }
    onBlur() {
      this.focus = false;
    }
    formatSize(bytes) {
      const k = 1024;
      const dm = 3;
      const sizes = this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.FILE_SIZE_TYPES);
      if (bytes === 0) {
        return `0 ${sizes[0]}`;
      }
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      const formattedSize = (bytes / Math.pow(k, i)).toFixed(dm);
      return `${formattedSize} ${sizes[i]}`;
    }
    onBasicUploaderClick() {
      if (this.hasFiles()) this.upload();else this.basicFileInput?.nativeElement.click();
    }
    onBasicKeydown(event) {
      switch (event.code) {
        case 'Space':
        case 'Enter':
          this.onBasicUploaderClick();
          event.preventDefault();
          break;
      }
    }
    imageError(event) {
      this.onImageError.emit(event);
    }
    getBlockableElement() {
      return this.el.nativeElement.children[0];
    }
    get chooseButtonLabel() {
      return this.chooseLabel || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.CHOOSE);
    }
    get uploadButtonLabel() {
      return this.uploadLabel || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.UPLOAD);
    }
    get cancelButtonLabel() {
      return this.cancelLabel || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.CANCEL);
    }
    ngOnDestroy() {
      if (this.content && this.content.nativeElement) {
        if (this.dragOverListener) {
          this.dragOverListener();
          this.dragOverListener = null;
        }
      }
      if (this.translationSubscription) {
        this.translationSubscription.unsubscribe();
      }
    }
    static ɵfac = function FileUpload_Factory(t) {
      return new (t || FileUpload)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FileUpload,
      selectors: [["p-fileUpload"]],
      contentQueries: function FileUpload_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function FileUpload_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.advancedFileInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.basicFileInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        name: "name",
        url: "url",
        method: "method",
        multiple: "multiple",
        accept: "accept",
        disabled: "disabled",
        auto: "auto",
        withCredentials: "withCredentials",
        maxFileSize: "maxFileSize",
        invalidFileSizeMessageSummary: "invalidFileSizeMessageSummary",
        invalidFileSizeMessageDetail: "invalidFileSizeMessageDetail",
        invalidFileTypeMessageSummary: "invalidFileTypeMessageSummary",
        invalidFileTypeMessageDetail: "invalidFileTypeMessageDetail",
        invalidFileLimitMessageDetail: "invalidFileLimitMessageDetail",
        invalidFileLimitMessageSummary: "invalidFileLimitMessageSummary",
        style: "style",
        styleClass: "styleClass",
        previewWidth: "previewWidth",
        chooseLabel: "chooseLabel",
        uploadLabel: "uploadLabel",
        cancelLabel: "cancelLabel",
        chooseIcon: "chooseIcon",
        uploadIcon: "uploadIcon",
        cancelIcon: "cancelIcon",
        showUploadButton: "showUploadButton",
        showCancelButton: "showCancelButton",
        mode: "mode",
        headers: "headers",
        customUpload: "customUpload",
        fileLimit: "fileLimit",
        uploadStyleClass: "uploadStyleClass",
        cancelStyleClass: "cancelStyleClass",
        removeStyleClass: "removeStyleClass",
        chooseStyleClass: "chooseStyleClass",
        files: "files"
      },
      outputs: {
        onBeforeUpload: "onBeforeUpload",
        onSend: "onSend",
        onUpload: "onUpload",
        onError: "onError",
        onClear: "onClear",
        onRemove: "onRemove",
        onSelect: "onSelect",
        onProgress: "onProgress",
        uploadHandler: "uploadHandler",
        onImageError: "onImageError"
      },
      decls: 2,
      vars: 2,
      consts: [[3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["class", "p-fileupload p-fileupload-basic p-component", 4, "ngIf"], [3, "ngClass", "ngStyle"], [1, "p-fileupload-buttonbar"], ["pRipple", "", "tabindex", "0", 1, "p-button", "p-component", "p-fileupload-choose", 3, "ngClass", "focus", "blur", "click", "keydown.enter"], ["type", "file", 3, "multiple", "accept", "disabled", "change"], ["advancedfileinput", ""], [3, "ngClass", "class", 4, "ngIf"], [4, "ngIf"], [1, "p-button-label"], ["type", "button", 3, "label", "disabled", "styleClass", "onClick", 4, "ngIf"], [4, "ngTemplateOutlet"], [1, "p-fileupload-content", 3, "dragenter", "dragleave", "drop"], ["content", ""], [3, "value", "showValue", 4, "ngIf"], [3, "value", "enableService"], ["class", "p-fileupload-files", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "p-button-icon p-button-icon-left", 4, "ngIf"], [3, "styleClass"], [1, "p-button-icon", "p-button-icon-left"], ["type", "button", 3, "label", "disabled", "styleClass", "onClick"], ["class", "p-button-icon p-button-icon-left", 3, "ngClass", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left", 3, "ngClass"], [3, "value", "showValue"], [1, "p-fileupload-files"], ["class", "p-fileupload-row", 4, "ngFor", "ngForOf"], [1, "p-fileupload-row"], [3, "src", "width", "error", 4, "ngIf"], [1, "p-fileupload-filename"], ["type", "button", "pButton", "", 1, "p-button-icon-only", 3, "disabled", "click"], [3, "src", "width", "error"], ["ngFor", "", 3, "ngForOf", "ngForTemplate"], [1, "p-fileupload", "p-fileupload-basic", "p-component"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "ngStyle", "click", "keydown"], [4, "ngIf", "ngIfElse"], ["chooseSection", ""], ["class", "p-button-label", 4, "ngIf"], ["type", "file", 3, "accept", "multiple", "disabled", "change", "focus", "blur", 4, "ngIf"], ["class", "p-button-icon p-button-icon-left pi", 3, "ngClass", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left", "pi", 3, "ngClass"], ["class", "p-button-icon p-button-icon-left pi", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left", "pi"], ["type", "file", 3, "accept", "multiple", "disabled", "change", "focus", "blur"], ["basicfileinput", ""]],
      template: function FileUpload_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FileUpload_div_0_Template, 18, 35, "div", 0)(1, FileUpload_div_1_Template, 8, 17, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "advanced");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "basic");
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__.ProgressBar, primeng_messages__WEBPACK_IMPORTED_MODULE_8__.Messages, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.Ripple, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_10__.PlusIcon, primeng_icons_upload__WEBPACK_IMPORTED_MODULE_11__.UploadIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_12__.TimesIcon],
      styles: ["@layer primeng{.p-fileupload-content{position:relative}.p-fileupload-row{display:flex;align-items:center}.p-fileupload-row>div{flex:1 1 auto;width:25%}.p-fileupload-row>div:last-child{text-align:right}.p-fileupload-content .p-progressbar{width:100%;position:absolute;top:0;left:0}.p-button.p-fileupload-choose{position:relative;overflow:hidden}.p-button.p-fileupload-choose input[type=file],.p-fileupload-choose.p-fileupload-choose-selected input[type=file]{display:none}.p-fluid .p-fileupload .p-button{width:auto}.p-fileupload-filename{word-break:break-all}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return FileUpload;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let FileUploadModule = /*#__PURE__*/(() => {
  class FileUploadModule {
    static ɵfac = function FileUploadModule_Factory(t) {
      return new (t || FileUploadModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FileUploadModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__.ProgressBarModule, primeng_messages__WEBPACK_IMPORTED_MODULE_8__.MessagesModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.RippleModule, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_10__.PlusIcon, primeng_icons_upload__WEBPACK_IMPORTED_MODULE_11__.UploadIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_12__.TimesIcon, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__.ProgressBarModule, primeng_messages__WEBPACK_IMPORTED_MODULE_8__.MessagesModule]
    });
  }
  return FileUploadModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 18:
/*!****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-upload.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadIcon: () => (/* binding */ UploadIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 3128);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 5861);




let UploadIcon = /*#__PURE__*/(() => {
  class UploadIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵUploadIcon_BaseFactory;
      return function UploadIcon_Factory(t) {
        return (ɵUploadIcon_BaseFactory || (ɵUploadIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](UploadIcon)))(t || UploadIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: UploadIcon,
      selectors: [["UploadIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function UploadIcon_Template(rf, ctx) {
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
  return UploadIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 9404:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-messages.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Messages: () => (/* binding */ Messages),
/* harmony export */   MessagesModule: () => (/* binding */ MessagesModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/check */ 7613);
/* harmony import */ var primeng_icons_exclamationtriangle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/exclamationtriangle */ 4733);
/* harmony import */ var primeng_icons_infocircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/infocircle */ 3803);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/times */ 8993);
/* harmony import */ var primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/timescircle */ 7800);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9378);
















/**
 * Messages is used to display alerts inline.
 * @group Components
 */
function Messages_ng_container_1_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
  }
  if (rf & 2) {
    const msg_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("p-message-icon pi " + msg_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "icon");
  }
}
function Messages_ng_container_1_div_1_span_3_CheckIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "CheckIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "icon");
  }
}
function Messages_ng_container_1_div_1_span_3_InfoCircleIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "InfoCircleIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "icon");
  }
}
function Messages_ng_container_1_div_1_span_3_TimesCircleIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesCircleIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "icon");
  }
}
function Messages_ng_container_1_div_1_span_3_ExclamationTriangleIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ExclamationTriangleIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "icon");
  }
}
function Messages_ng_container_1_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Messages_ng_container_1_div_1_span_3_CheckIcon_2_Template, 1, 1, "CheckIcon", 11)(3, Messages_ng_container_1_div_1_span_3_InfoCircleIcon_3_Template, 1, 1, "InfoCircleIcon", 11)(4, Messages_ng_container_1_div_1_span_3_TimesCircleIcon_4_Template, 1, 1, "TimesCircleIcon", 11)(5, Messages_ng_container_1_div_1_span_3_ExclamationTriangleIcon_5_Template, 1, 1, "ExclamationTriangleIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r4.severity === "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r4.severity === "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r4.severity === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r4.severity === "warn");
  }
}
function Messages_ng_container_1_div_1_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
  }
  if (rf & 2) {
    const msg_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", msg_r4.summary, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "summary");
  }
}
function Messages_ng_container_1_div_1_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 15);
  }
  if (rf & 2) {
    const msg_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", msg_r4.detail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "detail");
  }
}
function Messages_ng_container_1_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Messages_ng_container_1_div_1_ng_container_4_span_1_Template, 1, 2, "span", 12)(2, Messages_ng_container_1_div_1_ng_container_4_span_2_Template, 1, 2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const msg_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r4.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r4.detail);
  }
}
function Messages_ng_container_1_div_1_ng_template_5_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r4.summary);
  }
}
function Messages_ng_container_1_div_1_ng_template_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r4.detail);
  }
}
function Messages_ng_container_1_div_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Messages_ng_container_1_div_1_ng_template_5_span_0_Template, 2, 2, "span", 16)(1, Messages_ng_container_1_div_1_ng_template_5_span_1_Template, 2, 2, "span", 17);
  }
  if (rf & 2) {
    const msg_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r4.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r4.detail);
  }
}
function Messages_ng_container_1_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Messages_ng_container_1_div_1_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r28.removeMessage(i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "TimesIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r11.closeAriaLabel)("data-pc-section", "closebutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-message-close-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "closeicon");
  }
}
const _c0 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
const _c1 = a1 => ({
  value: "visible",
  params: a1
});
function Messages_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Messages_ng_container_1_div_1_span_2_Template, 1, 3, "span", 6)(3, Messages_ng_container_1_div_1_span_3_Template, 6, 4, "span", 7)(4, Messages_ng_container_1_div_1_ng_container_4_Template, 3, 2, "ng-container", 1)(5, Messages_ng_container_1_div_1_ng_template_5_Template, 2, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(7, Messages_ng_container_1_div_1_button_7_Template, 2, 4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const msg_r4 = ctx.$implicit;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("p-message p-message-" + msg_r4.severity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@messageAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx_r3.showTransitionOptions, ctx_r3.hideTransitionOptions)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "wrapper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !msg_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.escape)("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.closable);
  }
}
function Messages_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Messages_ng_container_1_div_1_Template, 8, 14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.messages);
  }
}
function Messages_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Messages_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Messages_ng_template_2_ng_container_2_Template, 1, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-message p-message-" + ctx_r1.severity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.contentTemplate);
  }
}
let Messages = /*#__PURE__*/(() => {
  class Messages {
    messageService;
    el;
    cd;
    config;
    /**
     * An array of messages to display.
     * @group Props
     */
    set value(messages) {
      this.messages = messages;
      this.startMessageLifes(this.messages);
    }
    /**
     * Defines if message box can be closed by the click icon.
     * @group Props
     */
    closable = true;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Whether displaying services messages are enabled.
     * @group Props
     */
    enableService = true;
    /**
     * Id to match the key of the message to enable scoping in service based messaging.
     * @group Props
     */
    key;
    /**
     * Whether displaying messages would be escaped or not.
     * @group Props
     */
    escape = true;
    /**
     * Severity level of the message.
     * @group Props
     */
    severity;
    /**
     * Transition options of the show animation.
     * @group Props
     */
    showTransitionOptions = '300ms ease-out';
    /**
     * Transition options of the hide animation.
     * @group Props
     */
    hideTransitionOptions = '200ms cubic-bezier(0.86, 0, 0.07, 1)';
    /**
     * This function is executed when the value changes.
     * @param {Message[]} value - messages value.
     * @group Emits
     */
    valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    templates;
    messages;
    messageSubscription;
    clearSubscription;
    timerSubscriptions = [];
    contentTemplate;
    constructor(messageService, el, cd, config) {
      this.messageService = messageService;
      this.el = el;
      this.cd = cd;
      this.config = config;
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'content':
            this.contentTemplate = item.template;
            break;
          default:
            this.contentTemplate = item.template;
            break;
        }
      });
      if (this.messageService && this.enableService && !this.contentTemplate) {
        this.messageSubscription = this.messageService.messageObserver.subscribe(messages => {
          if (messages) {
            if (!Array.isArray(messages)) {
              messages = [messages];
            }
            const filteredMessages = messages.filter(m => this.key === m.key);
            this.messages = this.messages ? [...this.messages, ...filteredMessages] : [...filteredMessages];
            this.startMessageLifes(filteredMessages);
            this.cd.markForCheck();
          }
        });
        this.clearSubscription = this.messageService.clearObserver.subscribe(key => {
          if (key) {
            if (this.key === key) {
              this.messages = null;
            }
          } else {
            this.messages = null;
          }
          this.cd.markForCheck();
        });
      }
    }
    hasMessages() {
      let parentEl = this.el.nativeElement.parentElement;
      if (parentEl && parentEl.offsetParent) {
        return this.contentTemplate != null || this.messages && this.messages.length > 0;
      }
      return false;
    }
    clear() {
      this.messages = [];
      this.valueChange.emit(this.messages);
    }
    removeMessage(i) {
      this.messages = this.messages?.filter((msg, index) => index !== i);
      this.valueChange.emit(this.messages);
    }
    get icon() {
      const severity = this.severity || (this.hasMessages() ? this.messages[0].severity : null);
      if (this.hasMessages()) {
        switch (severity) {
          case 'success':
            return 'pi-check';
          case 'info':
            return 'pi-info-circle';
          case 'error':
            return 'pi-times';
          case 'warn':
            return 'pi-exclamation-triangle';
          default:
            return 'pi-info-circle';
        }
      }
      return null;
    }
    get closeAriaLabel() {
      return this.config.translation.aria ? this.config.translation.aria.close : undefined;
    }
    ngOnDestroy() {
      if (this.messageSubscription) {
        this.messageSubscription.unsubscribe();
      }
      if (this.clearSubscription) {
        this.clearSubscription.unsubscribe();
      }
      this.timerSubscriptions?.forEach(subscription => subscription.unsubscribe());
    }
    startMessageLifes(messages) {
      messages?.forEach(message => message.life && this.startMessageLife(message));
    }
    startMessageLife(message) {
      const timerSubsctiption = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(message.life).subscribe(() => {
        this.messages = this.messages?.filter(msgEl => msgEl !== message);
        this.timerSubscriptions = this.timerSubscriptions?.filter(timerEl => timerEl !== timerSubsctiption);
        this.valueChange.emit(this.messages);
        this.cd.markForCheck();
      });
      this.timerSubscriptions.push(timerSubsctiption);
    }
    static ɵfac = function Messages_Factory(t) {
      return new (t || Messages)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Messages,
      selectors: [["p-messages"]],
      contentQueries: function Messages_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        value: "value",
        closable: "closable",
        style: "style",
        styleClass: "styleClass",
        enableService: "enableService",
        key: "key",
        escape: "escape",
        severity: "severity",
        showTransitionOptions: "showTransitionOptions",
        hideTransitionOptions: "hideTransitionOptions"
      },
      outputs: {
        valueChange: "valueChange"
      },
      decls: 4,
      vars: 8,
      consts: [["role", "alert", 1, "p-messages", "p-component", 3, "ngStyle"], [4, "ngIf", "ngIfElse"], ["staticMessage", ""], ["role", "alert", 3, "class", 4, "ngFor", "ngForOf"], ["role", "alert"], [1, "p-message-wrapper"], [3, "class", 4, "ngIf"], ["class", "p-message-icon", 4, "ngIf"], ["escapeOut", ""], ["class", "p-message-close p-link", "type", "button", "pRipple", "", 3, "click", 4, "ngIf"], [1, "p-message-icon"], [4, "ngIf"], ["class", "p-message-summary", 3, "innerHTML", 4, "ngIf"], ["class", "p-message-detail", 3, "innerHTML", 4, "ngIf"], [1, "p-message-summary", 3, "innerHTML"], [1, "p-message-detail", 3, "innerHTML"], ["class", "p-message-summary", 4, "ngIf"], ["class", "p-message-detail", 4, "ngIf"], [1, "p-message-summary"], [1, "p-message-detail"], ["type", "button", "pRipple", "", 1, "p-message-close", "p-link", 3, "click"], [3, "styleClass"], ["role", "alert", 3, "ngClass"], [4, "ngTemplateOutlet"]],
      template: function Messages_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Messages_ng_container_1_Template, 2, 1, "ng-container", 1)(2, Messages_ng_template_2_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-atomic", true)("aria-live", "assertive")("data-pc-name", "message");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.contentTemplate)("ngIfElse", _r2);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__.CheckIcon, primeng_icons_infocircle__WEBPACK_IMPORTED_MODULE_6__.InfoCircleIcon, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_7__.TimesCircleIcon, primeng_icons_exclamationtriangle__WEBPACK_IMPORTED_MODULE_8__.ExclamationTriangleIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_9__.TimesIcon],
      styles: ["@layer primeng{.p-message-wrapper{display:flex;align-items:center}.p-message-close{display:flex;align-items:center;justify-content:center;flex:none}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}.p-messages .p-message.ng-animating{overflow:hidden}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('messageAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
          opacity: 0,
          transform: 'translateY(-25%)'
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
          height: 0,
          marginTop: 0,
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          opacity: 0
        }))])])]
      },
      changeDetection: 0
    });
  }
  return Messages;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MessagesModule = /*#__PURE__*/(() => {
  class MessagesModule {
    static ɵfac = function MessagesModule_Factory(t) {
      return new (t || MessagesModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MessagesModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule, primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__.CheckIcon, primeng_icons_infocircle__WEBPACK_IMPORTED_MODULE_6__.InfoCircleIcon, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_7__.TimesCircleIcon, primeng_icons_exclamationtriangle__WEBPACK_IMPORTED_MODULE_8__.ExclamationTriangleIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_9__.TimesIcon]
    });
  }
  return MessagesModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 2506:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-progressbar.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressBar: () => (/* binding */ ProgressBar),
/* harmony export */   ProgressBarModule: () => (/* binding */ ProgressBarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 8026);






/**
 * ProgressBar is a process status indicator.
 * @group Components
 */
function ProgressBar_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r2.value != null && ctx_r2.value !== 0 ? "flex" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.value, "", ctx_r2.unit, "");
  }
}
function ProgressBar_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c0 = a0 => ({
  $implicit: a0
});
function ProgressBar_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgressBar_div_1_div_2_Template, 2, 5, "div", 5)(3, ProgressBar_div_1_ng_container_3_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r0.value + "%")("background", ctx_r0.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showValue && !ctx_r0.contentTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.value));
  }
}
function ProgressBar_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "value");
  }
}
const _c1 = (a1, a2) => ({
  "p-progressbar p-component": true,
  "p-progressbar-determinate": a1,
  "p-progressbar-indeterminate": a2
});
let ProgressBar = /*#__PURE__*/(() => {
  class ProgressBar {
    /**
     * Current value of the progress.
     * @group Props
     */
    value;
    /**
     * Whether to display the progress bar value.
     * @group Props
     */
    showValue = true;
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
     * Unit sign appended to the value.
     * @group Props
     */
    unit = '%';
    /**
     * Defines the mode of the progress
     * @group Props
     */
    mode = 'determinate';
    /**
     * Color for the background of the progress.
     * @group Props
     */
    color;
    templates;
    contentTemplate;
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'content':
            this.contentTemplate = item.template;
            break;
          default:
            this.contentTemplate = item.template;
        }
      });
    }
    static ɵfac = function ProgressBar_Factory(t) {
      return new (t || ProgressBar)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProgressBar,
      selectors: [["p-progressBar"]],
      contentQueries: function ProgressBar_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        value: "value",
        showValue: "showValue",
        styleClass: "styleClass",
        style: "style",
        unit: "unit",
        mode: "mode",
        color: "color"
      },
      decls: 3,
      vars: 14,
      consts: [["role", "progressbar", 3, "ngStyle", "ngClass"], ["class", "p-progressbar-value p-progressbar-value-animate", "style", "display:flex", 3, "width", "background", 4, "ngIf"], ["class", "p-progressbar-indeterminate-container", 4, "ngIf"], [1, "p-progressbar-value", "p-progressbar-value-animate", 2, "display", "flex"], [1, "p-progressbar-label"], [3, "display", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-progressbar-indeterminate-container"], [1, "p-progressbar-value", "p-progressbar-value-animate"]],
      template: function ProgressBar_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgressBar_div_1_Template, 4, 10, "div", 1)(2, ProgressBar_div_2_Template, 2, 4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c1, ctx.mode === "determinate", ctx.mode === "indeterminate"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuemin", 0)("aria-valuenow", ctx.value)("aria-valuemax", 100)("data-pc-name", "progressbar")("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "determinate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "indeterminate");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
      styles: ["@layer primeng{.p-progressbar{position:relative;overflow:hidden}.p-progressbar-determinate .p-progressbar-value{height:100%;width:0%;position:absolute;display:none;border:0 none;display:flex;align-items:center;justify-content:center;overflow:hidden}.p-progressbar-determinate .p-progressbar-label{display:inline-flex}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-indeterminate .p-progressbar-value:before{content:\"\";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.p-progressbar-indeterminate .p-progressbar-value:after{content:\"\";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s}}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return ProgressBar;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ProgressBarModule = /*#__PURE__*/(() => {
  class ProgressBarModule {
    static ɵfac = function ProgressBarModule_Factory(t) {
      return new (t || ProgressBarModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProgressBarModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
  return ProgressBarModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=740.js.map