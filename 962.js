"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[962],{

/***/ 46049:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/image-cropper/image-cropper.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageCropperComponent: () => (/* binding */ ImageCropperComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-image-cropper */ 98691);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 17780);

/* eslint-disable no-debugger */










let ImageCropperComponent = /*#__PURE__*/(() => {
  class ImageCropperComponent {
    constructor(toast, translate) {
      this.toast = toast;
      this.translate = translate;
      this.fileInput = null;
      this.roundCropper = true;
      this.aspectRatio = 1;
      this.croppedFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.uploadFileOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.transform = {};
      this.scale = 1;
    }
    onImageCropped(event) {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (event.blob) {
          const base64Image = yield _this.blobToBase64(event.blob);
          _this.croppedFile.emit(base64Image);
        }
      })();
    }
    emitFileFromOutside() {
      this.uploadFileOutside.emit();
    }
    blobToBase64(blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    }
    /**
     * Rotates the image clockwise (clockwise) in 90 degree increments.
     * If the transformation is not defined, initializes it as an empty object.
     * Update the 'rotate' property on the transformation with a 90 degree rotation.
     */
    rotateRight() {
      this.transform = {
        ...this.transform,
        rotate: (this.transform.rotate || 0) + 90
      };
    }
    /**
     * Increases the image zoom level by 10%.
     * Updates the 'scale' property in the transformation with the new zoom level.
     */
    zoomIn() {
      this.scale += 0.1;
      this.transform = {
        ...this.transform,
        scale: this.scale
      };
    }
    /**
     * Reduces the image zoom level by 10%.
     * Updates the 'scale' property in the transformation with the new zoom level.
     */
    zoomOut() {
      if (this.scale > 1) {
        this.scale -= 0.1;
        this.transform = {
          ...this.transform,
          scale: this.scale
        };
      }
    }
    /**
     * Flips the image horizontally.
     * Will toggle the 'flipH' property in the transform to horizontally mirror the image.
     */
    flipHorizontal() {
      this.transform = {
        ...this.transform,
        flipH: !this.transform.flipH
      };
    }
    showErrorMessage(key) {
      this.toast.add({
        severity: 'error',
        summary: this.translate.instant('ERROR.TITLE'),
        detail: this.translate.instant(key)
      });
    }
    static #_ = this.ɵfac = function ImageCropperComponent_Factory(t) {
      return new (t || ImageCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ImageCropperComponent,
      selectors: [["app-image-cropper"]],
      inputs: {
        fileInput: "fileInput",
        roundCropper: "roundCropper",
        aspectRatio: "aspectRatio"
      },
      outputs: {
        croppedFile: "croppedFile",
        uploadFileOutside: "uploadFileOutside"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 19,
      vars: 6,
      consts: [[1, "cropper-wrapper", "flex", "flex-column", "gap-5"], [1, "relative"], ["format", "png", 1, "cropper", 3, "imageCropped", "imageFile", "aspectRatio", "roundCropper", "cropperMinWidth", "onlyScaleDown", "transform"], [1, "buttons"], [1, "control-button", 3, "click"], ["width", "20", "height", "20"], ["href", "assets/images/icons.svg#zoom-in"], ["href", "assets/images/icons.svg#zoom-out"], ["href", "assets/images/icons.svg#rotate-right"], ["width", "22", "height", "22"], ["href", "assets/images/icons.svg#flip-horizontal"], ["href", "assets/images/icons.svg#upload-file"]],
      template: function ImageCropperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "image-cropper", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imageCropped", function ImageCropperComponent_Template_image_cropper_imageCropped_2_listener($event) {
            return ctx.onImageCropped($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_button_click_4_listener() {
            return ctx.zoomIn();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "use", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_button_click_7_listener() {
            return ctx.zoomOut();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "use", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_button_click_10_listener() {
            return ctx.rotateRight();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "use", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_button_click_13_listener() {
            return ctx.flipHorizontal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "use", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_button_click_16_listener() {
            return ctx.emitFileFromOutside();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "use", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imageFile", ctx.fileInput ? ctx.fileInput : undefined)("aspectRatio", ctx.aspectRatio)("roundCropper", ctx.roundCropper)("cropperMinWidth", 128)("onlyScaleDown", true)("transform", ctx.transform);
        }
      },
      dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__.ImageCropperModule, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__.ImageCropperComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule],
      styles: [".cropper[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  display: flex;\n  gap: 8px;\n}\n\n.control-button[_ngcontent-%COMP%] {\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.3);\n  border: none;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 0 10px 2.5px rgba(0, 0, 0, 0.3);\n  transition: all 0.1s ease;\n}\n.control-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.control-button[_ngcontent-%COMP%]:active {\n  transform: scale(1.1);\n}\n.control-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: var(--mainContrastElement);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW1hZ2UtY3JvcHBlci9pbWFnZS1jcm9wcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLHlCQUFBO0FBQ0o7QUFDSTtFQUNJLG9DQUFBO0FBQ1I7QUFFSTtFQUNJLHFCQUFBO0FBQVI7QUFHSTtFQUNJLGdDQUFBO0FBRFIiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JvcHBlciB7XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG59XG5cbi5idXR0b25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA4cHg7XG59XG5cbi5jb250cm9sLWJ1dHRvbiB7XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMi41cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIH1cblxuICAgIHN2ZyB7XG4gICAgICAgIGZpbGw6IHZhcigtLW1haW5Db250cmFzdEVsZW1lbnQpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return ImageCropperComponent;
})();

/***/ }),

/***/ 22649:
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/event-blocker.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventBlockerDirective: () => (/* binding */ EventBlockerDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

let EventBlockerDirective = /*#__PURE__*/(() => {
  class EventBlockerDirective {
    handleEvent(event) {
      event.preventDefault();
    }
    static #_ = this.ɵfac = function EventBlockerDirective_Factory(t) {
      return new (t || EventBlockerDirective)();
    };
    static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: EventBlockerDirective,
      selectors: [["", "appEventBlocker", ""]],
      hostBindings: function EventBlockerDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function EventBlockerDirective_drop_HostBindingHandler($event) {
            return ctx.handleEvent($event);
          })("dragover", function EventBlockerDirective_dragover_HostBindingHandler($event) {
            return ctx.handleEvent($event);
          });
        }
      }
    });
  }
  return EventBlockerDirective;
})();

/***/ }),

/***/ 44254:
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/event-blocker.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventBlockerModule: () => (/* binding */ EventBlockerModule)
/* harmony export */ });
/* harmony import */ var _event_blocker_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-blocker.directive */ 22649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


let EventBlockerModule = /*#__PURE__*/(() => {
  class EventBlockerModule {
    static #_ = this.ɵfac = function EventBlockerModule_Factory(t) {
      return new (t || EventBlockerModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: EventBlockerModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  }
  return EventBlockerModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EventBlockerModule, {
    declarations: [_event_blocker_directive__WEBPACK_IMPORTED_MODULE_0__.EventBlockerDirective],
    exports: [_event_blocker_directive__WEBPACK_IMPORTED_MODULE_0__.EventBlockerDirective]
  });
})();

/***/ }),

/***/ 82489:
/*!******************************************************!*\
  !*** ./src/app/shared/utils/read-file-as-base-64.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   readFileAsBase64: () => (/* binding */ readFileAsBase64)
/* harmony export */ });
const readFileAsBase64 = file => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const base64String = fileReader.result;
      resolve(base64String);
    };
    fileReader.onerror = error => {
      reject(error);
    };
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      reject(new Error('File is null or undefined.'));
    }
  });
};

/***/ }),

/***/ 98691:
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-image-cropper/fesm2020/ngx-image-cropper.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CropService: () => (/* binding */ CropService),
/* harmony export */   CropperSettings: () => (/* binding */ CropperSettings),
/* harmony export */   ImageCropperComponent: () => (/* binding */ ImageCropperComponent),
/* harmony export */   ImageCropperModule: () => (/* binding */ ImageCropperModule),
/* harmony export */   LoadImageService: () => (/* binding */ LoadImageService),
/* harmony export */   base64ToFile: () => (/* binding */ base64ToFile),
/* harmony export */   resizeCanvas: () => (/* binding */ resizeCanvas)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2435);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 63617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 18537);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);









const _c0 = ["wrapper"];
const _c1 = ["sourceImage"];
function ImageCropperComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 5, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function ImageCropperComponent_img_2_Template_img_load_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.imageLoadedInView());
    })("mousedown", function ImageCropperComponent_img_2_Template_img_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Drag));
    })("touchstart", function ImageCropperComponent_img_2_Template_img_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Drag));
    })("error", function ImageCropperComponent_img_2_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.loadImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx_r1.imageVisible ? "visible" : "hidden")("transform", ctx_r1.safeTransformStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-ic-draggable", !ctx_r1.disabled && ctx_r1.allowMoveImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.safeImgDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("alt", ctx_r1.imageAltText);
  }
}
function ImageCropperComponent_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topleft"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topleft"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topright"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topright"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomright"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomright"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomleft"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomleft"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "top"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "top"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "right"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottom"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottom"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "left"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "left"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function ImageCropperComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function ImageCropperComponent_div_4_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.keyboardAccess($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_Template_div_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Move));
    })("touchstart", function ImageCropperComponent_div_4_Template_div_touchstart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.startMove($event, ctx_r1.moveTypes.Move));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ImageCropperComponent_div_4_ng_container_2_Template, 21, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", ctx_r1.cropper.y1, "px")("left", ctx_r1.cropper.x1, "px")("width", ctx_r1.cropper.x2 - ctx_r1.cropper.x1, "px")("height", ctx_r1.cropper.y2 - ctx_r1.cropper.y1, "px")("margin-left", ctx_r1.alignImage === "center" ? ctx_r1.marginLeft : null)("visibility", ctx_r1.imageVisible ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-ic-round", ctx_r1.roundCropper);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r1.cropperFrameAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.hideResizeSquares);
  }
}
class CropperSettings {
  constructor() {
    // From options
    this.format = 'png';
    this.output = 'blob';
    this.maintainAspectRatio = true;
    this.transform = {};
    this.aspectRatio = 1;
    this.resetCropOnAspectRatioChange = true;
    this.resizeToWidth = 0;
    this.resizeToHeight = 0;
    this.cropperMinWidth = 0;
    this.cropperMinHeight = 0;
    this.cropperMaxHeight = 0;
    this.cropperMaxWidth = 0;
    this.cropperStaticWidth = 0;
    this.cropperStaticHeight = 0;
    this.canvasRotation = 0;
    this.initialStepSize = 3;
    this.roundCropper = false;
    this.onlyScaleDown = false;
    this.imageQuality = 92;
    this.autoCrop = true;
    this.backgroundColor = null;
    this.containWithinAspectRatio = false;
    this.hideResizeSquares = false;
    this.alignImage = 'center';
    this.cropperFrameAriaLabel = 'Crop photo';
    // Internal
    this.cropperScaledMinWidth = 20;
    this.cropperScaledMinHeight = 20;
    this.cropperScaledMaxWidth = 20;
    this.cropperScaledMaxHeight = 20;
    this.stepSize = this.initialStepSize;
  }
  setOptions(options) {
    Object.keys(options).filter(k => k in this).forEach(k => this[k] = options[k]);
    this.validateOptions();
  }
  setOptionsFromChanges(changes) {
    Object.keys(changes).filter(k => k in this).forEach(k => this[k] = changes[k].currentValue);
    this.validateOptions();
  }
  validateOptions() {
    if (this.maintainAspectRatio && !this.aspectRatio) {
      throw new Error('`aspectRatio` should > 0 when `maintainAspectRatio` is enabled');
    }
  }
}
var MoveTypes = /*#__PURE__*/function (MoveTypes) {
  MoveTypes["Drag"] = "drag";
  MoveTypes["Move"] = "move";
  MoveTypes["Resize"] = "resize";
  MoveTypes["Pinch"] = "pinch";
  return MoveTypes;
}(MoveTypes || {});
function getPositionForKey(key) {
  switch (key) {
    case 'ArrowUp':
      return 'top';
    case 'ArrowRight':
      return 'right';
    case 'ArrowDown':
      return 'bottom';
    case 'ArrowLeft':
    default:
      return 'left';
  }
}
function getInvertedPositionForKey(key) {
  switch (key) {
    case 'ArrowUp':
      return 'bottom';
    case 'ArrowRight':
      return 'left';
    case 'ArrowDown':
      return 'top';
    case 'ArrowLeft':
    default:
      return 'right';
  }
}
function getEventForKey(key, stepSize) {
  switch (key) {
    case 'ArrowUp':
      return {
        clientX: 0,
        clientY: stepSize * -1
      };
    case 'ArrowRight':
      return {
        clientX: stepSize,
        clientY: 0
      };
    case 'ArrowDown':
      return {
        clientX: 0,
        clientY: stepSize
      };
    case 'ArrowLeft':
    default:
      return {
        clientX: stepSize * -1,
        clientY: 0
      };
  }
}

/*
 * Hermite resize - fast image resize/resample using Hermite filter.
 * https://github.com/viliusle/Hermite-resize
 */
function resizeCanvas(canvas, width, height) {
  const width_source = canvas.width;
  const height_source = canvas.height;
  width = Math.round(width);
  height = Math.round(height);
  const ratio_w = width_source / width;
  const ratio_h = height_source / height;
  const ratio_w_half = Math.ceil(ratio_w / 2);
  const ratio_h_half = Math.ceil(ratio_h / 2);
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const img = ctx.getImageData(0, 0, width_source, height_source);
    const img2 = ctx.createImageData(width, height);
    const data = img.data;
    const data2 = img2.data;
    for (let j = 0; j < height; j++) {
      for (let i = 0; i < width; i++) {
        const x2 = (i + j * width) * 4;
        const center_y = j * ratio_h;
        let weight = 0;
        let weights = 0;
        let weights_alpha = 0;
        let gx_r = 0;
        let gx_g = 0;
        let gx_b = 0;
        let gx_a = 0;
        const xx_start = Math.floor(i * ratio_w);
        const yy_start = Math.floor(j * ratio_h);
        let xx_stop = Math.ceil((i + 1) * ratio_w);
        let yy_stop = Math.ceil((j + 1) * ratio_h);
        xx_stop = Math.min(xx_stop, width_source);
        yy_stop = Math.min(yy_stop, height_source);
        for (let yy = yy_start; yy < yy_stop; yy++) {
          const dy = Math.abs(center_y - yy) / ratio_h_half;
          const center_x = i * ratio_w;
          const w0 = dy * dy; //pre-calc part of w
          for (let xx = xx_start; xx < xx_stop; xx++) {
            const dx = Math.abs(center_x - xx) / ratio_w_half;
            const w = Math.sqrt(w0 + dx * dx);
            if (w >= 1) {
              //pixel too far
              continue;
            }
            //hermite filter
            weight = 2 * w * w * w - 3 * w * w + 1;
            const pos_x = 4 * (xx + yy * width_source);
            //alpha
            gx_a += weight * data[pos_x + 3];
            weights_alpha += weight;
            //colors
            if (data[pos_x + 3] < 255) weight = weight * data[pos_x + 3] / 250;
            gx_r += weight * data[pos_x];
            gx_g += weight * data[pos_x + 1];
            gx_b += weight * data[pos_x + 2];
            weights += weight;
          }
        }
        data2[x2] = gx_r / weights;
        data2[x2 + 1] = gx_g / weights;
        data2[x2 + 2] = gx_b / weights;
        data2[x2 + 3] = gx_a / weights_alpha;
      }
    }
    canvas.width = width;
    canvas.height = height;
    //draw
    ctx.putImageData(img2, 0, 0);
  }
}
function percentage(percent, totalValue) {
  return percent / 100 * totalValue;
}
let CropService = /*#__PURE__*/(() => {
  class CropService {
    crop(loadedImage, cropper, settings, output, maxSize) {
      const imagePosition = this.getImagePosition(loadedImage, cropper, settings, maxSize);
      const width = imagePosition.x2 - imagePosition.x1;
      const height = imagePosition.y2 - imagePosition.y1;
      const cropCanvas = document.createElement('canvas');
      cropCanvas.width = width;
      cropCanvas.height = height;
      const ctx = cropCanvas.getContext('2d');
      if (!ctx) {
        return null;
      }
      if (settings.backgroundColor != null) {
        ctx.fillStyle = settings.backgroundColor;
        ctx.fillRect(0, 0, width, height);
      }
      const scaleX = (settings.transform.scale || 1) * (settings.transform.flipH ? -1 : 1);
      const scaleY = (settings.transform.scale || 1) * (settings.transform.flipV ? -1 : 1);
      const {
        translateH,
        translateV
      } = this.getCanvasTranslate(loadedImage, settings, maxSize);
      const transformedImage = loadedImage.transformed;
      ctx.setTransform(scaleX, 0, 0, scaleY, transformedImage.size.width / 2 + translateH, transformedImage.size.height / 2 + translateV);
      ctx.translate(-imagePosition.x1 / scaleX, -imagePosition.y1 / scaleY);
      ctx.rotate((settings.transform.rotate || 0) * Math.PI / 180);
      ctx.drawImage(transformedImage.image, -transformedImage.size.width / 2, -transformedImage.size.height / 2);
      const result = {
        width,
        height,
        imagePosition,
        cropperPosition: {
          ...cropper
        }
      };
      if (settings.containWithinAspectRatio) {
        result.offsetImagePosition = this.getOffsetImagePosition(loadedImage, cropper, settings, maxSize);
      }
      const resizeRatio = this.getResizeRatio(width, height, settings);
      if (resizeRatio !== 1) {
        result.width = Math.round(width * resizeRatio);
        result.height = settings.maintainAspectRatio ? Math.round(result.width / settings.aspectRatio) : Math.round(height * resizeRatio);
        resizeCanvas(cropCanvas, result.width, result.height);
      }
      if (output === 'blob') {
        return this.cropToBlob(result, cropCanvas, settings);
      } else {
        result.base64 = cropCanvas.toDataURL('image/' + settings.format, this.getQuality(settings));
        return result;
      }
    }
    cropToBlob(output, cropCanvas, settings) {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        output.blob = yield new Promise(resolve => cropCanvas.toBlob(resolve, 'image/' + settings.format, _this.getQuality(settings)));
        if (output.blob) {
          output.objectUrl = URL.createObjectURL(output.blob);
        }
        return output;
      })();
    }
    getCanvasTranslate(loadedImage, settings, maxSize) {
      if (settings.transform.translateUnit === 'px') {
        const ratio = this.getRatio(loadedImage, maxSize);
        return {
          translateH: (settings.transform.translateH || 0) * ratio,
          translateV: (settings.transform.translateV || 0) * ratio
        };
      } else {
        return {
          translateH: settings.transform.translateH ? percentage(settings.transform.translateH, loadedImage.transformed.size.width) : 0,
          translateV: settings.transform.translateV ? percentage(settings.transform.translateV, loadedImage.transformed.size.height) : 0
        };
      }
    }
    getRatio(loadedImage, maxSize) {
      return loadedImage.transformed.size.width / maxSize.width;
    }
    getImagePosition(loadedImage, cropper, settings, maxSize) {
      const ratio = this.getRatio(loadedImage, maxSize);
      const out = {
        x1: Math.round(cropper.x1 * ratio),
        y1: Math.round(cropper.y1 * ratio),
        x2: Math.round(cropper.x2 * ratio),
        y2: Math.round(cropper.y2 * ratio)
      };
      if (!settings.containWithinAspectRatio) {
        out.x1 = Math.max(out.x1, 0);
        out.y1 = Math.max(out.y1, 0);
        out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
        out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
      }
      return out;
    }
    getOffsetImagePosition(loadedImage, cropper, settings, maxSize) {
      const canvasRotation = settings.canvasRotation + loadedImage.exifTransform.rotate;
      const ratio = this.getRatio(loadedImage, maxSize);
      let offsetX;
      let offsetY;
      if (canvasRotation % 2) {
        offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.height) / 2;
        offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.width) / 2;
      } else {
        offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.width) / 2;
        offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.height) / 2;
      }
      const out = {
        x1: Math.round(cropper.x1 * ratio) - offsetX,
        y1: Math.round(cropper.y1 * ratio) - offsetY,
        x2: Math.round(cropper.x2 * ratio) - offsetX,
        y2: Math.round(cropper.y2 * ratio) - offsetY
      };
      if (!settings.containWithinAspectRatio) {
        out.x1 = Math.max(out.x1, 0);
        out.y1 = Math.max(out.y1, 0);
        out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
        out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
      }
      return out;
    }
    getResizeRatio(width, height, settings) {
      const ratioWidth = settings.resizeToWidth / width;
      const ratioHeight = settings.resizeToHeight / height;
      const ratios = new Array();
      if (settings.resizeToWidth > 0) {
        ratios.push(ratioWidth);
      }
      if (settings.resizeToHeight > 0) {
        ratios.push(ratioHeight);
      }
      const result = ratios.length === 0 ? 1 : Math.min(...ratios);
      if (result > 1 && !settings.onlyScaleDown) {
        return result;
      }
      return Math.min(result, 1);
    }
    getQuality(settings) {
      return Math.min(1, Math.max(0, settings.imageQuality / 100));
    }
  }
  CropService.ɵfac = function CropService_Factory(t) {
    return new (t || CropService)();
  };
  CropService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CropService,
    factory: CropService.ɵfac,
    providedIn: 'root'
  });
  return CropService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CropperPositionService = /*#__PURE__*/(() => {
  class CropperPositionService {
    resetCropperPosition(sourceImage, cropperPosition, settings, maxSize) {
      if (!sourceImage?.nativeElement) {
        return;
      }
      if (settings.cropperStaticHeight && settings.cropperStaticWidth) {
        cropperPosition.x1 = 0;
        cropperPosition.x2 = maxSize.width > settings.cropperStaticWidth ? settings.cropperStaticWidth : maxSize.width;
        cropperPosition.y1 = 0;
        cropperPosition.y2 = maxSize.height > settings.cropperStaticHeight ? settings.cropperStaticHeight : maxSize.height;
      } else {
        const cropperWidth = Math.min(settings.cropperScaledMaxWidth, maxSize.width);
        const cropperHeight = Math.min(settings.cropperScaledMaxHeight, maxSize.height);
        if (!settings.maintainAspectRatio) {
          cropperPosition.x1 = 0;
          cropperPosition.x2 = cropperWidth;
          cropperPosition.y1 = 0;
          cropperPosition.y2 = cropperHeight;
        } else if (maxSize.width / settings.aspectRatio < maxSize.height) {
          cropperPosition.x1 = 0;
          cropperPosition.x2 = cropperWidth;
          const cropperHeightWithAspectRatio = cropperWidth / settings.aspectRatio;
          cropperPosition.y1 = (maxSize.height - cropperHeightWithAspectRatio) / 2;
          cropperPosition.y2 = cropperPosition.y1 + cropperHeightWithAspectRatio;
        } else {
          cropperPosition.y1 = 0;
          cropperPosition.y2 = cropperHeight;
          const cropperWidthWithAspectRatio = cropperHeight * settings.aspectRatio;
          cropperPosition.x1 = (maxSize.width - cropperWidthWithAspectRatio) / 2;
          cropperPosition.x2 = cropperPosition.x1 + cropperWidthWithAspectRatio;
        }
      }
    }
    move(event, moveStart, cropperPosition) {
      const diffX = this.getClientX(event) - moveStart.clientX;
      const diffY = this.getClientY(event) - moveStart.clientY;
      cropperPosition.x1 = moveStart.x1 + diffX;
      cropperPosition.y1 = moveStart.y1 + diffY;
      cropperPosition.x2 = moveStart.x2 + diffX;
      cropperPosition.y2 = moveStart.y2 + diffY;
    }
    resize(event, moveStart, cropperPosition, maxSize, settings) {
      const moveX = this.getClientX(event) - moveStart.clientX;
      const moveY = this.getClientY(event) - moveStart.clientY;
      switch (moveStart.position) {
        case 'left':
          cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
          break;
        case 'topleft':
          cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
          cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
          break;
        case 'top':
          cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
          break;
        case 'topright':
          cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
          cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
          break;
        case 'right':
          cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
          break;
        case 'bottomright':
          cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
          cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
          break;
        case 'bottom':
          cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
          break;
        case 'bottomleft':
          cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
          cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
          break;
        case 'center':
          const scale = event.scale;
          const newWidth = Math.min(Math.max(settings.cropperScaledMinWidth, Math.abs(moveStart.x2 - moveStart.x1) * scale), settings.cropperScaledMaxWidth);
          const newHeight = Math.min(Math.max(settings.cropperScaledMinHeight, Math.abs(moveStart.y2 - moveStart.y1) * scale), settings.cropperScaledMaxHeight);
          cropperPosition.x1 = moveStart.clientX - newWidth / 2;
          cropperPosition.x2 = moveStart.clientX + newWidth / 2;
          cropperPosition.y1 = moveStart.clientY - newHeight / 2;
          cropperPosition.y2 = moveStart.clientY + newHeight / 2;
          if (cropperPosition.x1 < 0) {
            cropperPosition.x2 -= cropperPosition.x1;
            cropperPosition.x1 = 0;
          } else if (cropperPosition.x2 > maxSize.width) {
            cropperPosition.x1 -= cropperPosition.x2 - maxSize.width;
            cropperPosition.x2 = maxSize.width;
          }
          if (cropperPosition.y1 < 0) {
            cropperPosition.y2 -= cropperPosition.y1;
            cropperPosition.y1 = 0;
          } else if (cropperPosition.y2 > maxSize.height) {
            cropperPosition.y1 -= cropperPosition.y2 - maxSize.height;
            cropperPosition.y2 = maxSize.height;
          }
          break;
      }
      if (settings.maintainAspectRatio) {
        this.checkAspectRatio(moveStart.position, cropperPosition, maxSize, settings);
      }
    }
    checkAspectRatio(position, cropperPosition, maxSize, settings) {
      let overflowX = 0;
      let overflowY = 0;
      switch (position) {
        case 'top':
          cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
          overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
          overflowY = Math.max(0 - cropperPosition.y1, 0);
          if (overflowX > 0 || overflowY > 0) {
            cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
            cropperPosition.y1 += overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
          }
          break;
        case 'bottom':
          cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
          overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
          overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
          if (overflowX > 0 || overflowY > 0) {
            cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
            cropperPosition.y2 -= overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
          }
          break;
        case 'topleft':
          cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
          overflowX = Math.max(0 - cropperPosition.x1, 0);
          overflowY = Math.max(0 - cropperPosition.y1, 0);
          if (overflowX > 0 || overflowY > 0) {
            cropperPosition.x1 += overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
            cropperPosition.y1 += overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
          }
          break;
        case 'topright':
          cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
          overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
          overflowY = Math.max(0 - cropperPosition.y1, 0);
          if (overflowX > 0 || overflowY > 0) {
            cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
            cropperPosition.y1 += overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
          }
          break;
        case 'right':
        case 'bottomright':
          cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
          overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
          overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
          if (overflowX > 0 || overflowY > 0) {
            cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
            cropperPosition.y2 -= overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
          }
          break;
        case 'left':
        case 'bottomleft':
          cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
          overflowX = Math.max(0 - cropperPosition.x1, 0);
          overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
          if (overflowX > 0 || overflowY > 0) {
            cropperPosition.x1 += overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
            cropperPosition.y2 -= overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
          }
          break;
        case 'center':
          cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
          cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
          const overflowX1 = Math.max(0 - cropperPosition.x1, 0);
          const overflowX2 = Math.max(cropperPosition.x2 - maxSize.width, 0);
          const overflowY1 = Math.max(cropperPosition.y2 - maxSize.height, 0);
          const overflowY2 = Math.max(0 - cropperPosition.y1, 0);
          if (overflowX1 > 0 || overflowX2 > 0 || overflowY1 > 0 || overflowY2 > 0) {
            cropperPosition.x1 += overflowY1 * settings.aspectRatio > overflowX1 ? overflowY1 * settings.aspectRatio : overflowX1;
            cropperPosition.x2 -= overflowY2 * settings.aspectRatio > overflowX2 ? overflowY2 * settings.aspectRatio : overflowX2;
            cropperPosition.y1 += overflowY2 * settings.aspectRatio > overflowX2 ? overflowY2 : overflowX2 / settings.aspectRatio;
            cropperPosition.y2 -= overflowY1 * settings.aspectRatio > overflowX1 ? overflowY1 : overflowX1 / settings.aspectRatio;
          }
          break;
      }
    }
    getClientX(event) {
      return event.touches?.[0].clientX || event.clientX || 0;
    }
    getClientY(event) {
      return event.touches?.[0].clientY || event.clientY || 0;
    }
  }
  CropperPositionService.ɵfac = function CropperPositionService_Factory(t) {
    return new (t || CropperPositionService)();
  };
  CropperPositionService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CropperPositionService,
    factory: CropperPositionService.ɵfac,
    providedIn: 'root'
  });
  return CropperPositionService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// Black 2x1 JPEG, with the following meta information set:
// - EXIF Orientation: 6 (Rotated 90° CCW)
// Source: https://github.com/blueimp/JavaScript-Load-Image
const testAutoOrientationImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' + 'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' + 'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' + 'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' + 'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' + 'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';
function supportsAutomaticRotation() {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      // Check if browser supports automatic image orientation:
      const supported = img.width === 1 && img.height === 2;
      resolve(supported);
    };
    img.src = testAutoOrientationImageURL;
  });
}
function getTransformationsFromExifData(exifRotationOrArrayBuffer) {
  if (typeof exifRotationOrArrayBuffer === 'object') {
    exifRotationOrArrayBuffer = getExifRotation(exifRotationOrArrayBuffer);
  }
  switch (exifRotationOrArrayBuffer) {
    case 2:
      return {
        rotate: 0,
        flip: true
      };
    case 3:
      return {
        rotate: 2,
        flip: false
      };
    case 4:
      return {
        rotate: 2,
        flip: true
      };
    case 5:
      return {
        rotate: 1,
        flip: true
      };
    case 6:
      return {
        rotate: 1,
        flip: false
      };
    case 7:
      return {
        rotate: 3,
        flip: true
      };
    case 8:
      return {
        rotate: 3,
        flip: false
      };
    default:
      return {
        rotate: 0,
        flip: false
      };
  }
}
function getExifRotation(arrayBuffer) {
  const view = new DataView(arrayBuffer);
  if (view.getUint16(0, false) !== 0xFFD8) {
    return -2;
  }
  const length = view.byteLength;
  let offset = 2;
  while (offset < length) {
    if (view.getUint16(offset + 2, false) <= 8) return -1;
    const marker = view.getUint16(offset, false);
    offset += 2;
    if (marker == 0xFFE1) {
      if (view.getUint32(offset += 2, false) !== 0x45786966) {
        return -1;
      }
      const little = view.getUint16(offset += 6, false) == 0x4949;
      offset += view.getUint32(offset + 4, little);
      const tags = view.getUint16(offset, little);
      offset += 2;
      for (let i = 0; i < tags; i++) {
        if (view.getUint16(offset + i * 12, little) == 0x0112) {
          return view.getUint16(offset + i * 12 + 8, little);
        }
      }
    } else if ((marker & 0xFF00) !== 0xFF00) {
      break;
    } else {
      offset += view.getUint16(offset, false);
    }
  }
  return -1;
}
let LoadImageService = /*#__PURE__*/(() => {
  class LoadImageService {
    constructor() {
      this.autoRotateSupported = supportsAutomaticRotation();
    }
    loadImageFile(file, cropperSettings) {
      var _this2 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const arrayBuffer = yield file.arrayBuffer();
        return yield _this2.checkImageTypeAndLoadImageFromArrayBuffer(arrayBuffer, file.type, cropperSettings);
      })();
    }
    checkImageTypeAndLoadImageFromArrayBuffer(arrayBuffer, imageType, cropperSettings) {
      if (!this.isValidImageType(imageType)) {
        return Promise.reject(new Error('Invalid image type'));
      }
      return this.loadImageFromArrayBuffer(arrayBuffer, cropperSettings, imageType);
    }
    isValidImageType(type) {
      return /image\/(png|jpg|jpeg|bmp|gif|tiff|svg|webp|x-icon|vnd.microsoft.icon)/.test(type);
    }
    loadImageFromURL(url, cropperSettings) {
      var _this3 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const res = yield fetch(url);
        const blob = yield res.blob();
        const buffer = yield blob.arrayBuffer();
        return yield _this3.loadImageFromArrayBuffer(buffer, cropperSettings, blob.type);
      })();
    }
    loadBase64Image(imageBase64, cropperSettings) {
      const arrayBuffer = this.base64ToArrayBuffer(imageBase64);
      return this.loadImageFromArrayBuffer(arrayBuffer, cropperSettings);
    }
    base64ToArrayBuffer(imageBase64) {
      imageBase64 = imageBase64.replace(/^data:([^;]+);base64,/gmi, '');
      const binaryString = atob(imageBase64);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes.buffer;
    }
    loadImageFromArrayBuffer(arrayBuffer, cropperSettings, imageType) {
      var _this4 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const res = yield new Promise( /*#__PURE__*/function () {
          var _ref = (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
            try {
              const blob = new Blob([arrayBuffer], imageType ? {
                type: imageType
              } : undefined);
              const objectUrl = URL.createObjectURL(blob);
              const originalImage = new Image();
              const isSvg = imageType === 'image/svg+xml';
              const originalImageSize = isSvg ? yield _this4.getSvgImageSize(blob) : undefined;
              originalImage.onload = () => resolve({
                originalImage,
                originalImageSize,
                originalObjectUrl: objectUrl,
                originalArrayBuffer: arrayBuffer
              });
              originalImage.onerror = reject;
              originalImage.src = objectUrl;
            } catch (e) {
              reject(e);
            }
          });
          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
        return yield _this4.transformImageFromArrayBuffer(res, cropperSettings, res.originalImageSize != null);
      })();
    }
    getSvgImageSize(blob) {
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const parser = new DOMParser();
        const doc = parser.parseFromString(yield blob.text(), 'image/svg+xml');
        const svgElement = doc.querySelector('svg');
        if (!svgElement) {
          throw Error('Failed to parse SVG image');
        }
        const widthAttr = svgElement.getAttribute('width');
        const heightAttr = svgElement.getAttribute('height');
        if (widthAttr && heightAttr) {
          return null;
        }
        const viewBoxAttr = svgElement.getAttribute('viewBox') || svgElement.getAttribute('viewbox');
        if (viewBoxAttr) {
          const viewBox = viewBoxAttr.split(' ');
          return {
            width: +viewBox[2],
            height: +viewBox[3]
          };
        }
        throw Error('Failed to load SVG image. SVG must have width + height or viewBox definition.');
      })();
    }
    transformImageFromArrayBuffer(res, cropperSettings, forceTransform = false) {
      var _this5 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const autoRotate = yield _this5.autoRotateSupported;
        const exifTransform = getTransformationsFromExifData(autoRotate ? -1 : res.originalArrayBuffer);
        if (!res.originalImage || !res.originalImage.complete) {
          return Promise.reject(new Error('No image loaded'));
        }
        const loadedImage = {
          original: {
            objectUrl: res.originalObjectUrl,
            image: res.originalImage,
            size: res.originalImageSize ?? {
              width: res.originalImage.naturalWidth,
              height: res.originalImage.naturalHeight
            }
          },
          exifTransform
        };
        return _this5.transformLoadedImage(loadedImage, cropperSettings, forceTransform);
      })();
    }
    transformLoadedImage(loadedImage, cropperSettings, forceTransform = false) {
      var _this6 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const canvasRotation = cropperSettings.canvasRotation + loadedImage.exifTransform.rotate;
        const originalSize = loadedImage.original.size;
        if (!forceTransform && canvasRotation === 0 && !loadedImage.exifTransform.flip && !cropperSettings.containWithinAspectRatio) {
          return {
            original: {
              objectUrl: loadedImage.original.objectUrl,
              image: loadedImage.original.image,
              size: {
                ...originalSize
              }
            },
            transformed: {
              objectUrl: loadedImage.original.objectUrl,
              image: loadedImage.original.image,
              size: {
                ...originalSize
              }
            },
            exifTransform: loadedImage.exifTransform
          };
        }
        const transformedSize = _this6.getTransformedSize(originalSize, loadedImage.exifTransform, cropperSettings);
        const canvas = document.createElement('canvas');
        canvas.width = transformedSize.width;
        canvas.height = transformedSize.height;
        const ctx = canvas.getContext('2d');
        ctx?.setTransform(loadedImage.exifTransform.flip ? -1 : 1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
        ctx?.rotate(Math.PI * (canvasRotation / 2));
        ctx?.drawImage(loadedImage.original.image, -originalSize.width / 2, -originalSize.height / 2);
        const blob = yield new Promise(resolve => canvas.toBlob(resolve, cropperSettings.format));
        if (!blob) {
          throw new Error('Failed to get Blob for transformed image.');
        }
        const objectUrl = URL.createObjectURL(blob);
        const transformedImage = yield _this6.loadImageFromObjectUrl(objectUrl);
        return {
          original: {
            objectUrl: loadedImage.original.objectUrl,
            image: loadedImage.original.image,
            size: {
              ...originalSize
            }
          },
          transformed: {
            objectUrl: objectUrl,
            image: transformedImage,
            size: {
              width: transformedImage.width,
              height: transformedImage.height
            }
          },
          exifTransform: loadedImage.exifTransform
        };
      })();
    }
    loadImageFromObjectUrl(objectUrl) {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = objectUrl;
      });
    }
    getTransformedSize(originalSize, exifTransform, cropperSettings) {
      const canvasRotation = cropperSettings.canvasRotation + exifTransform.rotate;
      if (cropperSettings.containWithinAspectRatio) {
        if (canvasRotation % 2) {
          const minWidthToContain = originalSize.width * cropperSettings.aspectRatio;
          const minHeightToContain = originalSize.height / cropperSettings.aspectRatio;
          return {
            width: Math.max(originalSize.height, minWidthToContain),
            height: Math.max(originalSize.width, minHeightToContain)
          };
        } else {
          const minWidthToContain = originalSize.height * cropperSettings.aspectRatio;
          const minHeightToContain = originalSize.width / cropperSettings.aspectRatio;
          return {
            width: Math.max(originalSize.width, minWidthToContain),
            height: Math.max(originalSize.height, minHeightToContain)
          };
        }
      }
      if (canvasRotation % 2) {
        return {
          height: originalSize.width,
          width: originalSize.height
        };
      }
      return {
        width: originalSize.width,
        height: originalSize.height
      };
    }
  }
  LoadImageService.ɵfac = function LoadImageService_Factory(t) {
    return new (t || LoadImageService)();
  };
  LoadImageService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LoadImageService,
    factory: LoadImageService.ɵfac,
    providedIn: 'root'
  });
  return LoadImageService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ImageCropperComponent = /*#__PURE__*/(() => {
  class ImageCropperComponent {
    constructor(cropService, cropperPositionService, loadImageService, sanitizer, cd, zone, hammerLoader) {
      this.cropService = cropService;
      this.cropperPositionService = cropperPositionService;
      this.loadImageService = loadImageService;
      this.sanitizer = sanitizer;
      this.cd = cd;
      this.zone = zone;
      this.hammerLoader = hammerLoader;
      this.settings = new CropperSettings();
      this.setImageMaxSizeRetries = 0;
      this.resizedWhileHidden = false;
      this.marginLeft = '0px';
      this.maxSize = {
        width: 0,
        height: 0
      };
      this.moveTypes = MoveTypes;
      this.imageVisible = false;
      this.cropperFrameAriaLabel = this.settings.cropperFrameAriaLabel;
      this.output = this.settings.output;
      this.format = this.settings.format;
      this.transform = {};
      this.maintainAspectRatio = this.settings.maintainAspectRatio;
      this.aspectRatio = this.settings.aspectRatio;
      this.resetCropOnAspectRatioChange = this.settings.resetCropOnAspectRatioChange;
      this.resizeToWidth = this.settings.resizeToWidth;
      this.resizeToHeight = this.settings.resizeToHeight;
      this.cropperMinWidth = this.settings.cropperMinWidth;
      this.cropperMinHeight = this.settings.cropperMinHeight;
      this.cropperMaxHeight = this.settings.cropperMaxHeight;
      this.cropperMaxWidth = this.settings.cropperMaxWidth;
      this.cropperStaticWidth = this.settings.cropperStaticWidth;
      this.cropperStaticHeight = this.settings.cropperStaticHeight;
      this.canvasRotation = this.settings.canvasRotation;
      this.initialStepSize = this.settings.initialStepSize;
      this.roundCropper = this.settings.roundCropper;
      this.onlyScaleDown = this.settings.onlyScaleDown;
      this.imageQuality = this.settings.imageQuality;
      this.autoCrop = this.settings.autoCrop;
      this.backgroundColor = this.settings.backgroundColor;
      this.containWithinAspectRatio = this.settings.containWithinAspectRatio;
      this.hideResizeSquares = this.settings.hideResizeSquares;
      this.allowMoveImage = false;
      this.cropper = {
        x1: -100,
        y1: -100,
        x2: 10000,
        y2: 10000
      };
      this.alignImage = this.settings.alignImage;
      this.disabled = false;
      this.hidden = false;
      this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.startCropImage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.cropperReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.transformChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.reset();
    }
    ngOnChanges(changes) {
      this.onChangesUpdateSettings(changes);
      this.onChangesInputImage(changes);
      if (this.loadedImage?.original.image.complete && (changes['containWithinAspectRatio'] || changes['canvasRotation'])) {
        this.loadImageService.transformLoadedImage(this.loadedImage, this.settings).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
      }
      if (changes['cropper'] || changes['maintainAspectRatio'] || changes['aspectRatio']) {
        this.setMaxSize();
        this.setCropperScaledMinSize();
        this.setCropperScaledMaxSize();
        if (this.maintainAspectRatio && (this.resetCropOnAspectRatioChange || !this.aspectRatioIsCorrect()) && (changes['maintainAspectRatio'] || changes['aspectRatio'])) {
          this.resetCropperPosition();
        } else if (changes['cropper']) {
          this.checkCropperPosition(false);
          this.doAutoCrop();
        }
      }
      if (changes['transform']) {
        this.transform = this.transform || {};
        this.setCssTransform();
        this.doAutoCrop();
      }
      if (changes['hidden'] && this.resizedWhileHidden && !this.hidden) {
        setTimeout(() => {
          this.onResize();
          this.resizedWhileHidden = false;
        });
      }
    }
    onChangesUpdateSettings(changes) {
      this.settings.setOptionsFromChanges(changes);
      if (this.settings.cropperStaticHeight && this.settings.cropperStaticWidth) {
        this.hideResizeSquares = true;
        this.settings.setOptions({
          hideResizeSquares: true,
          cropperMinWidth: this.settings.cropperStaticWidth,
          cropperMinHeight: this.settings.cropperStaticHeight,
          cropperMaxHeight: this.settings.cropperStaticHeight,
          cropperMaxWidth: this.settings.cropperStaticWidth,
          maintainAspectRatio: false
        });
      }
    }
    onChangesInputImage(changes) {
      if (changes['imageChangedEvent'] || changes['imageURL'] || changes['imageBase64'] || changes['imageFile']) {
        this.reset();
      }
      if (changes['imageChangedEvent'] && this.isValidImageChangedEvent()) {
        this.loadImageFile(this.imageChangedEvent.target.files[0]);
      }
      if (changes['imageURL'] && this.imageURL) {
        this.loadImageFromURL(this.imageURL);
      }
      if (changes['imageBase64'] && this.imageBase64) {
        this.loadBase64Image(this.imageBase64);
      }
      if (changes['imageFile'] && this.imageFile) {
        this.loadImageFile(this.imageFile);
      }
    }
    isValidImageChangedEvent() {
      return this.imageChangedEvent?.target?.files?.length > 0;
    }
    setCssTransform() {
      const translateUnit = this.transform?.translateUnit || '%';
      this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle(`translate(${this.transform.translateH || 0}${translateUnit}, ${this.transform.translateV || 0}${translateUnit})` + ' scaleX(' + (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1) + ')' + ' scaleY(' + (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1) + ')' + ' rotate(' + (this.transform.rotate || 0) + 'deg)');
    }
    ngOnInit() {
      this.settings.stepSize = this.initialStepSize;
      this.activatePinchGesture();
    }
    reset() {
      this.imageVisible = false;
      this.loadedImage = undefined;
      this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg' + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU' + 'AAarVyFEAAAAASUVORK5CYII=';
      this.moveStart = {
        active: false,
        type: null,
        position: null,
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        clientX: 0,
        clientY: 0
      };
      this.maxSize = {
        width: 0,
        height: 0
      };
      this.cropper.x1 = -100;
      this.cropper.y1 = -100;
      this.cropper.x2 = 10000;
      this.cropper.y2 = 10000;
    }
    loadImageFile(file) {
      this.loadImageService.loadImageFile(file, this.settings).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
    }
    loadBase64Image(imageBase64) {
      this.loadImageService.loadBase64Image(imageBase64, this.settings).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
    }
    loadImageFromURL(url) {
      this.loadImageService.loadImageFromURL(url, this.settings).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
    }
    setLoadedImage(loadedImage) {
      this.loadedImage = loadedImage;
      this.safeImgDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(loadedImage.transformed.objectUrl);
      this.cd.markForCheck();
    }
    loadImageError(error) {
      console.error(error);
      this.loadImageFailed.emit();
    }
    imageLoadedInView() {
      if (this.loadedImage != null) {
        this.imageLoaded.emit(this.loadedImage);
        this.setImageMaxSizeRetries = 0;
        setTimeout(() => this.checkImageMaxSizeRecursively());
      }
    }
    checkImageMaxSizeRecursively() {
      if (this.setImageMaxSizeRetries > 40) {
        this.loadImageFailed.emit();
      } else if (this.sourceImageLoaded()) {
        this.setMaxSize();
        this.setCropperScaledMinSize();
        this.setCropperScaledMaxSize();
        this.resetCropperPosition();
        this.cropperReady.emit({
          ...this.maxSize
        });
        this.cd.markForCheck();
      } else {
        this.setImageMaxSizeRetries++;
        setTimeout(() => this.checkImageMaxSizeRecursively(), 50);
      }
    }
    sourceImageLoaded() {
      return this.sourceImage?.nativeElement?.offsetWidth > 0;
    }
    onResize() {
      if (!this.loadedImage) {
        return;
      }
      if (this.hidden) {
        this.resizedWhileHidden = true;
      } else {
        const oldMaxSize = {
          ...this.maxSize
        };
        this.setMaxSize();
        this.resizeCropperPosition(oldMaxSize);
        this.setCropperScaledMinSize();
        this.setCropperScaledMaxSize();
      }
    }
    activatePinchGesture() {
      var _this7 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        // Loads HammerJS via angular APIs if configured
        yield _this7.hammerLoader?.();
        const Hammer = window?.['Hammer'] || null;
        if (Hammer) {
          const hammer = new Hammer(_this7.wrapper.nativeElement);
          hammer.get('pinch').set({
            enable: true
          });
          hammer.on('pinchmove', _this7.onPinch.bind(_this7));
          hammer.on('pinchend', _this7.pinchStop.bind(_this7));
          hammer.on('pinchstart', _this7.startPinch.bind(_this7));
        } else if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isDevMode)()) {
          console.warn('[NgxImageCropper] Could not find HammerJS - Pinch Gesture won\'t work');
        }
      })();
    }
    resizeCropperPosition(oldMaxSize) {
      if (oldMaxSize.width !== this.maxSize.width || oldMaxSize.height !== this.maxSize.height) {
        this.cropper.x1 = this.cropper.x1 * this.maxSize.width / oldMaxSize.width;
        this.cropper.x2 = this.cropper.x2 * this.maxSize.width / oldMaxSize.width;
        this.cropper.y1 = this.cropper.y1 * this.maxSize.height / oldMaxSize.height;
        this.cropper.y2 = this.cropper.y2 * this.maxSize.height / oldMaxSize.height;
      }
    }
    resetCropperPosition() {
      this.cropperPositionService.resetCropperPosition(this.sourceImage, this.cropper, this.settings, this.maxSize);
      this.doAutoCrop();
      this.imageVisible = true;
    }
    keyboardAccess(event) {
      this.changeKeyboardStepSize(event);
      this.keyboardMoveCropper(event);
    }
    changeKeyboardStepSize(event) {
      const key = +event.key;
      if (key >= 1 && key <= 9) {
        this.settings.stepSize = key;
      }
    }
    keyboardMoveCropper(event) {
      const keyboardWhiteList = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
      if (!keyboardWhiteList.includes(event.key)) {
        return;
      }
      const moveType = event.shiftKey ? MoveTypes.Resize : MoveTypes.Move;
      const position = event.altKey ? getInvertedPositionForKey(event.key) : getPositionForKey(event.key);
      const moveEvent = getEventForKey(event.key, this.settings.stepSize);
      event.preventDefault();
      event.stopPropagation();
      this.startMove({
        clientX: 0,
        clientY: 0
      }, moveType, position);
      this.handleMouseMove(moveEvent);
      this.handleMouseUp();
    }
    startMove(event, moveType, position = null) {
      if (this.disabled || this.moveStart?.active && this.moveStart?.type === MoveTypes.Pinch || moveType === MoveTypes.Drag && !this.allowMoveImage) {
        return;
      }
      if (event.preventDefault) {
        event.preventDefault();
      }
      this.moveStart = {
        active: true,
        type: moveType,
        position,
        transform: {
          ...this.transform
        },
        clientX: this.cropperPositionService.getClientX(event),
        clientY: this.cropperPositionService.getClientY(event),
        ...this.cropper
      };
      this.initMouseMove();
    }
    initMouseMove() {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mousemove'), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'touchmove')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mouseup'), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'touchend')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)()))).subscribe({
        next: event => this.zone.run(() => {
          this.handleMouseMove(event);
          this.cd.markForCheck();
        }),
        complete: () => this.zone.run(() => {
          this.handleMouseUp();
          this.cd.markForCheck();
        })
      });
    }
    startPinch(event) {
      if (!this.safeImgDataUrl) {
        return;
      }
      if (event.preventDefault) {
        event.preventDefault();
      }
      this.moveStart = {
        active: true,
        type: MoveTypes.Pinch,
        position: 'center',
        clientX: this.cropper.x1 + (this.cropper.x2 - this.cropper.x1) / 2,
        clientY: this.cropper.y1 + (this.cropper.y2 - this.cropper.y1) / 2,
        ...this.cropper
      };
    }
    handleMouseMove(event) {
      if (this.moveStart.active) {
        if (event.stopPropagation) {
          event.stopPropagation();
        }
        if (event.preventDefault) {
          event.preventDefault();
        }
        if (this.moveStart.type === MoveTypes.Move) {
          this.cropperPositionService.move(event, this.moveStart, this.cropper);
          this.checkCropperPosition(true);
        } else if (this.moveStart.type === MoveTypes.Resize) {
          if (!this.cropperStaticWidth && !this.cropperStaticHeight) {
            this.cropperPositionService.resize(event, this.moveStart, this.cropper, this.maxSize, this.settings);
          }
          this.checkCropperPosition(false);
        } else if (this.moveStart.type === MoveTypes.Drag) {
          const diffX = this.cropperPositionService.getClientX(event) - this.moveStart.clientX;
          const diffY = this.cropperPositionService.getClientY(event) - this.moveStart.clientY;
          this.transform = {
            ...this.transform,
            translateH: (this.moveStart.transform?.translateH || 0) + diffX,
            translateV: (this.moveStart.transform?.translateV || 0) + diffY
          };
          this.setCssTransform();
        }
      }
    }
    onPinch(event) {
      if (this.moveStart.active) {
        if (event.stopPropagation) {
          event.stopPropagation();
        }
        if (event.preventDefault) {
          event.preventDefault();
        }
        if (this.moveStart.type === MoveTypes.Pinch) {
          this.cropperPositionService.resize(event, this.moveStart, this.cropper, this.maxSize, this.settings);
          this.checkCropperPosition(false);
        }
        this.cd.markForCheck();
      }
    }
    setMaxSize() {
      if (this.sourceImage) {
        const sourceImageStyle = getComputedStyle(this.sourceImage.nativeElement);
        this.maxSize.width = parseFloat(sourceImageStyle.width);
        this.maxSize.height = parseFloat(sourceImageStyle.height);
        this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
      }
    }
    setCropperScaledMinSize() {
      if (this.loadedImage?.transformed?.image) {
        this.setCropperScaledMinWidth();
        this.setCropperScaledMinHeight();
      } else {
        this.settings.cropperScaledMinWidth = 20;
        this.settings.cropperScaledMinHeight = 20;
      }
    }
    setCropperScaledMinWidth() {
      this.settings.cropperScaledMinWidth = this.cropperMinWidth > 0 ? Math.max(20, this.cropperMinWidth / this.loadedImage.transformed.image.width * this.maxSize.width) : 20;
    }
    setCropperScaledMinHeight() {
      if (this.maintainAspectRatio) {
        this.settings.cropperScaledMinHeight = Math.max(20, this.settings.cropperScaledMinWidth / this.aspectRatio);
      } else if (this.cropperMinHeight > 0) {
        this.settings.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.loadedImage.transformed.image.height * this.maxSize.height);
      } else {
        this.settings.cropperScaledMinHeight = 20;
      }
    }
    setCropperScaledMaxSize() {
      if (this.loadedImage?.transformed?.image) {
        const ratio = this.loadedImage.transformed.size.width / this.maxSize.width;
        this.settings.cropperScaledMaxWidth = this.cropperMaxWidth > 20 ? this.cropperMaxWidth / ratio : this.maxSize.width;
        this.settings.cropperScaledMaxHeight = this.cropperMaxHeight > 20 ? this.cropperMaxHeight / ratio : this.maxSize.height;
        if (this.maintainAspectRatio) {
          if (this.settings.cropperScaledMaxWidth > this.settings.cropperScaledMaxHeight * this.aspectRatio) {
            this.settings.cropperScaledMaxWidth = this.settings.cropperScaledMaxHeight * this.aspectRatio;
          } else if (this.settings.cropperScaledMaxWidth < this.settings.cropperScaledMaxHeight * this.aspectRatio) {
            this.settings.cropperScaledMaxHeight = this.settings.cropperScaledMaxWidth / this.aspectRatio;
          }
        }
      } else {
        this.settings.cropperScaledMaxWidth = this.maxSize.width;
        this.settings.cropperScaledMaxHeight = this.maxSize.height;
      }
    }
    checkCropperPosition(maintainSize = false) {
      if (this.cropper.x1 < 0) {
        this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
        this.cropper.x1 = 0;
      }
      if (this.cropper.y1 < 0) {
        this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
        this.cropper.y1 = 0;
      }
      if (this.cropper.x2 > this.maxSize.width) {
        this.cropper.x1 -= maintainSize ? this.cropper.x2 - this.maxSize.width : 0;
        this.cropper.x2 = this.maxSize.width;
      }
      if (this.cropper.y2 > this.maxSize.height) {
        this.cropper.y1 -= maintainSize ? this.cropper.y2 - this.maxSize.height : 0;
        this.cropper.y2 = this.maxSize.height;
      }
    }
    handleMouseUp() {
      if (this.moveStart.active) {
        this.moveStart.active = false;
        if (this.moveStart?.type === MoveTypes.Drag) {
          this.transformChange.emit(this.transform);
        } else {
          this.doAutoCrop();
        }
      }
    }
    pinchStop() {
      if (this.moveStart.active) {
        this.moveStart.active = false;
        this.doAutoCrop();
      }
    }
    doAutoCrop() {
      if (this.autoCrop) {
        void this.crop();
      }
    }
    crop(output = this.settings.output) {
      if (this.loadedImage?.transformed?.image != null) {
        this.startCropImage.emit();
        if (output === 'blob') {
          return this.cropToBlob();
        } else if (output === 'base64') {
          return this.cropToBase64();
        }
      }
      return null;
    }
    cropToBlob() {
      var _this8 = this;
      return new Promise((resolve, reject) => this.zone.run( /*#__PURE__*/(0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _this8.cropService.crop(_this8.loadedImage, _this8.cropper, _this8.settings, 'blob', _this8.maxSize);
        if (result) {
          _this8.imageCropped.emit(result);
          resolve(result);
        } else {
          reject('Crop image failed');
        }
      })));
    }
    cropToBase64() {
      const result = this.cropService.crop(this.loadedImage, this.cropper, this.settings, 'base64', this.maxSize);
      if (result) {
        this.imageCropped.emit(result);
        return result;
      }
      return null;
    }
    aspectRatioIsCorrect() {
      const currentCropAspectRatio = (this.cropper.x2 - this.cropper.x1) / (this.cropper.y2 - this.cropper.y1);
      return currentCropAspectRatio === this.aspectRatio;
    }
  }
  ImageCropperComponent.ɵfac = function ImageCropperComponent_Factory(t) {
    return new (t || ImageCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CropService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CropperPositionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LoadImageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.HAMMER_LOADER, 8));
  };
  ImageCropperComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ImageCropperComponent,
    selectors: [["image-cropper"]],
    viewQuery: function ImageCropperComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sourceImage = _t.first);
      }
    },
    hostVars: 6,
    hostBindings: function ImageCropperComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function ImageCropperComponent_resize_HostBindingHandler() {
          return ctx.onResize();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("text-align", ctx.alignImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.disabled)("ngx-ix-hidden", ctx.hidden);
      }
    },
    inputs: {
      imageChangedEvent: "imageChangedEvent",
      imageURL: "imageURL",
      imageBase64: "imageBase64",
      imageFile: "imageFile",
      imageAltText: "imageAltText",
      cropperFrameAriaLabel: "cropperFrameAriaLabel",
      output: "output",
      format: "format",
      transform: "transform",
      maintainAspectRatio: "maintainAspectRatio",
      aspectRatio: "aspectRatio",
      resetCropOnAspectRatioChange: "resetCropOnAspectRatioChange",
      resizeToWidth: "resizeToWidth",
      resizeToHeight: "resizeToHeight",
      cropperMinWidth: "cropperMinWidth",
      cropperMinHeight: "cropperMinHeight",
      cropperMaxHeight: "cropperMaxHeight",
      cropperMaxWidth: "cropperMaxWidth",
      cropperStaticWidth: "cropperStaticWidth",
      cropperStaticHeight: "cropperStaticHeight",
      canvasRotation: "canvasRotation",
      initialStepSize: "initialStepSize",
      roundCropper: "roundCropper",
      onlyScaleDown: "onlyScaleDown",
      imageQuality: "imageQuality",
      autoCrop: "autoCrop",
      backgroundColor: "backgroundColor",
      containWithinAspectRatio: "containWithinAspectRatio",
      hideResizeSquares: "hideResizeSquares",
      allowMoveImage: "allowMoveImage",
      cropper: "cropper",
      alignImage: "alignImage",
      disabled: "disabled",
      hidden: "hidden"
    },
    outputs: {
      imageCropped: "imageCropped",
      startCropImage: "startCropImage",
      imageLoaded: "imageLoaded",
      cropperReady: "cropperReady",
      loadImageFailed: "loadImageFailed",
      transformChange: "transformChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 5,
    vars: 10,
    consts: [["wrapper", ""], ["sourceImage", ""], ["class", "ngx-ic-source-image", "role", "presentation", 3, "src", "visibility", "transform", "ngx-ic-draggable", "load", "mousedown", "touchstart", "error", 4, "ngIf"], [1, "ngx-ic-overlay"], ["class", "ngx-ic-cropper", "tabindex", "0", 3, "ngx-ic-round", "top", "left", "width", "height", "margin-left", "visibility", "keydown", 4, "ngIf"], ["role", "presentation", 1, "ngx-ic-source-image", 3, "load", "mousedown", "touchstart", "error", "src"], ["tabindex", "0", 1, "ngx-ic-cropper", 3, "keydown"], ["role", "presentation", 1, "ngx-ic-move", 3, "mousedown", "touchstart"], [4, "ngIf"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-topleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-square"], [1, "ngx-ic-resize", "ngx-ic-top"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-topright", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-right"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-bottomright", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-bottom"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-bottomleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-left"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-top", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-right", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-bottom", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-left", 3, "mousedown", "touchstart"]],
    template: function ImageCropperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ImageCropperComponent_img_2_Template, 2, 8, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ImageCropperComponent_div_4_Template, 3, 16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.imageVisible && ctx.backgroundColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.safeImgDataUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.maxSize.width, "px")("height", ctx.maxSize.height, "px")("margin-left", ctx.alignImage === "center" ? ctx.marginLeft : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageVisible);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
    styles: ["[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image.ngx-ic-draggable[_ngcontent-%COMP%]{user-drag:none;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;cursor:grab}[_nghost-%COMP%]   .ngx-ic-overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color, white) solid 100vw;top:0;left:0}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c;background:transparent;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color, rgba(255, 255, 255, .3)) solid 100vw;touch-action:none}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{outline-width:100vh}}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:after{position:absolute;content:\"\";inset:0;pointer-events:none;border:dashed 1px;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:focus   .ngx-ic-move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]   .ngx-ic-square[_ngcontent-%COMP%]{display:inline-block;background:#53535C;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw #ffffff4d;box-shadow:0 0 0 100vw var(--cropper-outline-color, rgba(255, 255, 255, .3))}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh #ffffff4d;box-shadow:0 0 0 100vh var(--cropper-outline-color, rgba(255, 255, 255, .3))}}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{display:none}.ngx-ix-hidden[_nghost-%COMP%]{display:none}"],
    changeDetection: 0
  });
  return ImageCropperComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ImageCropperModule = /*#__PURE__*/(() => {
  class ImageCropperModule {}
  ImageCropperModule.ɵfac = function ImageCropperModule_Factory(t) {
    return new (t || ImageCropperModule)();
  };
  ImageCropperModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ImageCropperModule
  });
  ImageCropperModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]]
  });
  return ImageCropperModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function base64ToFile(base64Image) {
  const split = base64Image.split(',');
  const type = split[0].replace('data:', '').replace(';base64', '');
  const byteString = atob(split[1]);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i += 1) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], {
    type
  });
}

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 13209:
/*!**************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-fileupload.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileUpload: () => (/* binding */ FileUpload),
/* harmony export */   FileUploadModule: () => (/* binding */ FileUploadModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 35228);
/* harmony import */ var primeng_icons_plus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/plus */ 41155);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/icons/times */ 57727);
/* harmony import */ var primeng_icons_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/upload */ 65596);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/messages */ 91564);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/progressbar */ 21416);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 80436);






















/**
 * FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.
 * @group Components
 */
const _c0 = ["advancedfileinput"];
const _c1 = ["basicfileinput"];
const _c2 = ["content"];
const _c3 = (a0, a1) => ({
  "p-focus": a0,
  "p-disabled": a1
});
const _c4 = a0 => ({
  $implicit: a0
});
const _c5 = (a0, a1, a2, a3) => ({
  "p-button p-component p-fileupload-choose": true,
  "p-button-icon-only": a0,
  "p-fileupload-choose-selected": a1,
  "p-focus": a2,
  "p-disabled": a3
});
function FileUpload_div_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.chooseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-button-icon p-button-icon-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", true)("data-pc-section", "chooseicon");
  }
}
function FileUpload_div_0_ng_container_6_PlusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "PlusIcon", 23);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_ng_container_6_span_2_1_Template, 1, 0, null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", true)("data-pc-section", "chooseicon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.chooseIconTemplate);
  }
}
function FileUpload_div_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_ng_container_6_PlusIcon_1_Template, 1, 3, "PlusIcon", 21)(2, FileUpload_div_0_ng_container_6_span_2_Template, 2, 3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.chooseIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.chooseIconTemplate);
  }
}
function FileUpload_div_0_p_button_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 27);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.uploadIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function FileUpload_div_0_p_button_9_ng_container_2_UploadIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "UploadIcon", 23);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_p_button_9_ng_container_2_span_2_1_Template, 1, 0, null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.uploadIconTemplate);
  }
}
function FileUpload_div_0_p_button_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_p_button_9_ng_container_2_UploadIcon_1_Template, 1, 1, "UploadIcon", 21)(2, FileUpload_div_0_p_button_9_ng_container_2_span_2_Template, 2, 2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.uploadIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.uploadIconTemplate);
  }
}
function FileUpload_div_0_p_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function FileUpload_div_0_p_button_9_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.upload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_p_button_9_span_1_Template, 1, 2, "span", 26)(2, FileUpload_div_0_p_button_9_ng_container_2_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r1.uploadButtonLabel)("disabled", !ctx_r1.hasFiles() || ctx_r1.isFileLimitExceeded())("styleClass", ctx_r1.uploadStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.uploadIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.uploadIcon);
  }
}
function FileUpload_div_0_p_button_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 27);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.cancelIcon);
  }
}
function FileUpload_div_0_p_button_10_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesIcon", 23);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_p_button_10_ng_container_2_span_2_1_Template, 1, 0, null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.cancelIconTemplate);
  }
}
function FileUpload_div_0_p_button_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_p_button_10_ng_container_2_TimesIcon_1_Template, 1, 2, "TimesIcon", 21)(2, FileUpload_div_0_p_button_10_ng_container_2_span_2_Template, 2, 2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.cancelIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.cancelIconTemplate);
  }
}
function FileUpload_div_0_p_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function FileUpload_div_0_p_button_10_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_p_button_10_span_1_Template, 1, 1, "span", 26)(2, FileUpload_div_0_p_button_10_ng_container_2_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r1.cancelButtonLabel)("disabled", !ctx_r1.hasFiles() || ctx_r1.uploading)("styleClass", ctx_r1.cancelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.cancelIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.cancelIcon);
  }
}
function FileUpload_div_0_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FileUpload_div_0_p_progressBar_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-progressBar", 28);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.progress)("showValue", false);
  }
}
function FileUpload_div_0_div_16_div_1_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function FileUpload_div_0_div_16_div_1_div_1_img_2_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.imageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", file_r7.objectURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("width", ctx_r1.previewWidth);
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
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FileUpload_div_0_div_16_div_1_div_1_img_2_Template, 1, 2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div")(8, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileUpload_div_0_div_16_div_1_div_1_Template_button_click_8_listener($event) {
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.remove($event, i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FileUpload_div_0_div_16_div_1_div_1_TimesIcon_9_Template, 1, 0, "TimesIcon", 11)(10, FileUpload_div_0_div_16_div_1_div_1_10_Template, 1, 0, null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const file_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isImage(file_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formatSize(file_r7.size));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.removeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.uploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.cancelIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.cancelIconTemplate);
  }
}
function FileUpload_div_0_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_div_16_div_1_div_1_Template, 11, 8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.files);
  }
}
function FileUpload_div_0_div_16_div_2_ng_template_1_Template(rf, ctx) {}
function FileUpload_div_0_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_div_16_div_2_ng_template_1_Template, 0, 0, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.files)("ngForTemplate", ctx_r1.fileTemplate);
  }
}
function FileUpload_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_0_div_16_div_1_Template, 2, 1, "div", 11)(2, FileUpload_div_0_div_16_div_2_Template, 2, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.fileTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.fileTemplate);
  }
}
function FileUpload_div_0_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function FileUpload_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function FileUpload_div_0_Template_span_focus_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onFocus());
    })("blur", function FileUpload_div_0_Template_span_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onBlur());
    })("click", function FileUpload_div_0_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.choose());
    })("keydown.enter", function FileUpload_div_0_Template_span_keydown_enter_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.choose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 9, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUpload_div_0_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onFileSelect($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FileUpload_div_0_span_5_Template, 1, 5, "span", 10)(6, FileUpload_div_0_ng_container_6_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FileUpload_div_0_p_button_9_Template, 3, 5, "p-button", 13)(10, FileUpload_div_0_p_button_10_Template, 3, 5, "p-button", 13)(11, FileUpload_div_0_ng_container_11_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragenter", function FileUpload_div_0_Template_div_dragenter_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onDragEnter($event));
    })("dragleave", function FileUpload_div_0_Template_div_dragleave_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onDragLeave($event));
    })("drop", function FileUpload_div_0_Template_div_drop_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onDrop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FileUpload_div_0_p_progressBar_14_Template, 1, 2, "p-progressBar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p-messages", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FileUpload_div_0_div_16_Template, 3, 2, "div", 18)(17, FileUpload_div_0_ng_container_17_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-fileupload p-fileupload-advanced p-component")("ngStyle", ctx_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "fileupload")("data-pc-section", "root");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "buttonbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.chooseStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](30, _c3, ctx_r1.focus, ctx_r1.disabled || ctx_r1.isChooseDisabled()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "choosebutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", ctx_r1.multiple)("accept", ctx_r1.accept)("disabled", ctx_r1.disabled || ctx_r1.isChooseDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", "")("data-pc-section", "input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.chooseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.chooseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "choosebuttonlabel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.chooseButtonLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.auto && ctx_r1.showUploadButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.auto && ctx_r1.showCancelButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.toolbarTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hasFiles());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.msgs)("enableService", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hasFiles());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.contentTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c4, ctx_r1.files));
  }
}
function FileUpload_div_1_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 27);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.uploadIcon);
  }
}
function FileUpload_div_1_ng_container_3_ng_container_2_UploadIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "UploadIcon", 23);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_1_ng_container_3_ng_container_2_span_2_1_Template, 1, 0, null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.uploadIconTemplate);
  }
}
function FileUpload_div_1_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_1_ng_container_3_ng_container_2_UploadIcon_1_Template, 1, 1, "UploadIcon", 21)(2, FileUpload_div_1_ng_container_3_ng_container_2_span_2_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.uploadIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.uploadIconTemplate);
  }
}
function FileUpload_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_1_ng_container_3_span_1_Template, 1, 1, "span", 26)(2, FileUpload_div_1_ng_container_3_ng_container_2_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.uploadIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.uploadIcon);
  }
}
function FileUpload_div_1_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 43);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.chooseIcon);
  }
}
function FileUpload_div_1_ng_template_4_ng_container_1_PlusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "PlusIcon", 23);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_1_ng_template_4_ng_container_1_span_2_1_Template, 1, 0, null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", "uploadicon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.chooseIconTemplate);
  }
}
function FileUpload_div_1_ng_template_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUpload_div_1_ng_template_4_ng_container_1_PlusIcon_1_Template, 1, 3, "PlusIcon", 21)(2, FileUpload_div_1_ng_template_4_ng_container_1_span_2_Template, 2, 3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.chooseIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.chooseIconTemplate);
  }
}
function FileUpload_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FileUpload_div_1_ng_template_4_span_0_Template, 1, 1, "span", 42)(1, FileUpload_div_1_ng_template_4_ng_container_1_Template, 3, 2, "ng-container", 11);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.chooseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.chooseIcon);
  }
}
function FileUpload_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.basicButtonLabel);
  }
}
function FileUpload_div_1_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 46, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUpload_div_1_input_7_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onFileSelect($event));
    })("focus", function FileUpload_div_1_input_7_Template_input_focus_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onFocus());
    })("blur", function FileUpload_div_1_input_7_Template_input_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onBlur());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", ctx_r1.accept)("multiple", ctx_r1.multiple)("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "input");
  }
}
function FileUpload_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-messages", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileUpload_div_1_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onBasicUploaderClick());
    })("keydown", function FileUpload_div_1_Template_span_keydown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onBasicKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FileUpload_div_1_ng_container_3_Template, 3, 2, "ng-container", 39)(4, FileUpload_div_1_ng_template_4_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(6, FileUpload_div_1_span_6_Template, 2, 2, "span", 40)(7, FileUpload_div_1_input_7_Template, 2, 4, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chooseSection_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "fileupload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.msgs)("enableService", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](12, _c5, !ctx_r1.basicButtonLabel, ctx_r1.hasFiles(), ctx_r1.focus, ctx_r1.disabled))("ngStyle", ctx_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "choosebutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hasFiles() && !ctx_r1.auto)("ngIfElse", chooseSection_r11);
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
      // this will check the fileLimit with the uploaded files
      this.checkFileLimit(files);
      if (this.hasFiles() && this.auto && !(this.mode === 'advanced') && !this.isFileLimitExceeded()) {
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
      this.checkFileLimit(this.files);
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
    checkFileLimit(files) {
      this.msgs ??= [];
      const hasExistingValidationMessages = this.msgs.length > 0 && this.fileLimit < files.length;
      if (this.isFileLimitExceeded() || hasExistingValidationMessages) {
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
      consts: [["advancedfileinput", ""], ["content", ""], ["chooseSection", ""], ["basicfileinput", ""], [3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["class", "p-fileupload p-fileupload-basic p-component", 4, "ngIf"], [3, "ngClass", "ngStyle"], [1, "p-fileupload-buttonbar"], ["pRipple", "", "tabindex", "0", 1, "p-button", "p-component", "p-fileupload-choose", 3, "focus", "blur", "click", "keydown.enter", "ngClass"], ["type", "file", 3, "change", "multiple", "accept", "disabled"], [3, "ngClass", "class", 4, "ngIf"], [4, "ngIf"], [1, "p-button-label"], ["type", "button", 3, "label", "disabled", "styleClass", "onClick", 4, "ngIf"], [4, "ngTemplateOutlet"], [1, "p-fileupload-content", 3, "dragenter", "dragleave", "drop"], [3, "value", "showValue", 4, "ngIf"], [3, "value", "enableService"], ["class", "p-fileupload-files", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "p-button-icon p-button-icon-left", 4, "ngIf"], [3, "styleClass"], [1, "p-button-icon", "p-button-icon-left"], ["type", "button", 3, "onClick", "label", "disabled", "styleClass"], ["class", "p-button-icon p-button-icon-left", 3, "ngClass", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left", 3, "ngClass"], [3, "value", "showValue"], [1, "p-fileupload-files"], ["class", "p-fileupload-row", 4, "ngFor", "ngForOf"], [1, "p-fileupload-row"], [3, "src", "width", "error", 4, "ngIf"], [1, "p-fileupload-filename"], ["type", "button", "pButton", "", 1, "p-button-icon-only", 3, "click", "disabled"], [3, "error", "src", "width"], ["ngFor", "", 3, "ngForOf", "ngForTemplate"], [1, "p-fileupload", "p-fileupload-basic", "p-component"], ["tabindex", "0", "pRipple", "", 3, "click", "keydown", "ngClass", "ngStyle"], [4, "ngIf", "ngIfElse"], ["class", "p-button-label", 4, "ngIf"], ["type", "file", 3, "accept", "multiple", "disabled", "change", "focus", "blur", 4, "ngIf"], ["class", "p-button-icon p-button-icon-left pi", 3, "ngClass", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left", "pi", 3, "ngClass"], ["class", "p-button-icon p-button-icon-left pi", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left", "pi"], ["type", "file", 3, "change", "focus", "blur", "accept", "multiple", "disabled"]],
      template: function FileUpload_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FileUpload_div_0_Template, 18, 35, "div", 4)(1, FileUpload_div_1_Template, 8, 17, "div", 5);
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

/***/ 41155:
/*!**************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-plus.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlusIcon: () => (/* binding */ PlusIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 19436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




let PlusIcon = /*#__PURE__*/(() => {
  class PlusIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵPlusIcon_BaseFactory;
      return function PlusIcon_Factory(t) {
        return (ɵPlusIcon_BaseFactory || (ɵPlusIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](PlusIcon)))(t || PlusIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PlusIcon,
      selectors: [["PlusIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function PlusIcon_Template(rf, ctx) {
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
  return PlusIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 65596:
/*!****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-upload.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadIcon: () => (/* binding */ UploadIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 19436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




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

/***/ 91564:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-messages.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Messages: () => (/* binding */ Messages),
/* harmony export */   MessagesModule: () => (/* binding */ MessagesModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/check */ 82289);
/* harmony import */ var primeng_icons_exclamationtriangle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/exclamationtriangle */ 13814);
/* harmony import */ var primeng_icons_infocircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/infocircle */ 48075);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/times */ 57727);
/* harmony import */ var primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/timescircle */ 20839);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 14876);
















/**
 * Messages is used to display alerts inline.
 * @group Components
 */
const _c0 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
const _c1 = a0 => ({
  value: "visible",
  params: a0
});
function Messages_ng_container_1_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
  }
  if (rf & 2) {
    const msg_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("p-message-icon pi " + msg_r1.icon);
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
    const msg_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r1.severity === "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r1.severity === "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r1.severity === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r1.severity === "warn");
  }
}
function Messages_ng_container_1_div_1_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
  }
  if (rf & 2) {
    const msg_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", msg_r1.summary, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "summary");
  }
}
function Messages_ng_container_1_div_1_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 15);
  }
  if (rf & 2) {
    const msg_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", msg_r1.detail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
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
    const msg_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r1.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r1.detail);
  }
}
function Messages_ng_container_1_div_1_ng_template_5_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r1.summary);
  }
}
function Messages_ng_container_1_div_1_ng_template_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r1.detail);
  }
}
function Messages_ng_container_1_div_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Messages_ng_container_1_div_1_ng_template_5_span_0_Template, 2, 2, "span", 16)(1, Messages_ng_container_1_div_1_ng_template_5_span_1_Template, 2, 2, "span", 17);
  }
  if (rf & 2) {
    const msg_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r1.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r1.detail);
  }
}
function Messages_ng_container_1_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Messages_ng_container_1_div_1_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.removeMessage(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "TimesIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r3.closeAriaLabel)("data-pc-section", "closebutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-message-close-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "closeicon");
  }
}
function Messages_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Messages_ng_container_1_div_1_span_2_Template, 1, 3, "span", 7)(3, Messages_ng_container_1_div_1_span_3_Template, 6, 4, "span", 8)(4, Messages_ng_container_1_div_1_ng_container_4_Template, 3, 2, "ng-container", 3)(5, Messages_ng_container_1_div_1_ng_template_5_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(7, Messages_ng_container_1_div_1_button_7_Template, 2, 4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const msg_r1 = ctx.$implicit;
    const escapeOut_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("p-message p-message-" + msg_r1.severity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@messageAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx_r3.showTransitionOptions, ctx_r3.hideTransitionOptions)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "wrapper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !msg_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.escape)("ngIfElse", escapeOut_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.closable);
  }
}
function Messages_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Messages_ng_container_1_div_1_Template, 8, 14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.messages);
  }
}
function Messages_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Messages_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Messages_ng_template_2_ng_container_2_Template, 1, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-message p-message-" + ctx_r3.severity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.contentTemplate);
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
      consts: [["staticMessage", ""], ["escapeOut", ""], ["role", "alert", 1, "p-messages", "p-component", 3, "ngStyle"], [4, "ngIf", "ngIfElse"], ["role", "alert", 3, "class", 4, "ngFor", "ngForOf"], ["role", "alert"], [1, "p-message-wrapper"], [3, "class", 4, "ngIf"], ["class", "p-message-icon", 4, "ngIf"], ["class", "p-message-close p-link", "type", "button", "pRipple", "", 3, "click", 4, "ngIf"], [1, "p-message-icon"], [4, "ngIf"], ["class", "p-message-summary", 3, "innerHTML", 4, "ngIf"], ["class", "p-message-detail", 3, "innerHTML", 4, "ngIf"], [1, "p-message-summary", 3, "innerHTML"], [1, "p-message-detail", 3, "innerHTML"], ["class", "p-message-summary", 4, "ngIf"], ["class", "p-message-detail", 4, "ngIf"], [1, "p-message-summary"], [1, "p-message-detail"], ["type", "button", "pRipple", "", 1, "p-message-close", "p-link", 3, "click"], [3, "styleClass"], ["role", "alert", 3, "ngClass"], [4, "ngTemplateOutlet"]],
      template: function Messages_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Messages_ng_container_1_Template, 2, 1, "ng-container", 3)(2, Messages_ng_template_2_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const staticMessage_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-atomic", true)("aria-live", "assertive")("data-pc-name", "message");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.contentTemplate)("ngIfElse", staticMessage_r6);
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

/***/ 21416:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-progressbar.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressBar: () => (/* binding */ ProgressBar),
/* harmony export */   ProgressBarModule: () => (/* binding */ ProgressBarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 17780);






/**
 * ProgressBar is a process status indicator.
 * @group Components
 */
const _c0 = (a0, a1) => ({
  "p-progressbar p-component": true,
  "p-progressbar-determinate": a0,
  "p-progressbar-indeterminate": a1
});
const _c1 = a0 => ({
  $implicit: a0
});
function ProgressBar_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r0.value != null && ctx_r0.value !== 0 ? "flex" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.value, "", ctx_r0.unit, "");
  }
}
function ProgressBar_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx_r0.value));
  }
}
function ProgressBar_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r0.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "value");
  }
}
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, ctx.mode === "determinate", ctx.mode === "indeterminate"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuemin", 0)("aria-valuenow", ctx.value)("aria-valuemax", 100)("data-pc-name", "progressbar")("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "determinate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "indeterminate");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
      styles: ["@layer primeng{.p-progressbar{position:relative;overflow:hidden}.p-progressbar-determinate .p-progressbar-value{height:100%;width:0%;position:absolute;display:none;border:0 none;display:flex;align-items:center;justify-content:center;overflow:hidden}.p-progressbar-determinate .p-progressbar-label{display:inline-flex}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-indeterminate .p-progressbar-value:before{content:\"\";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;-webkit-animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite;animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.p-progressbar-indeterminate .p-progressbar-value:after{content:\"\";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;-webkit-animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;-webkit-animation-delay:1.15s;animation-delay:1.15s}}@-webkit-keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@-webkit-keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}\n"],
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
//# sourceMappingURL=962.js.map