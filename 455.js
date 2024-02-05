"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[455],{

/***/ 9648:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/image-cropper/image-cropper.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageCropperComponent: () => (/* binding */ ImageCropperComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-image-cropper */ 4214);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dialog */ 3311);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/fileupload */ 8285);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 5046);

/* eslint-disable no-debugger */










let ImageCropperComponent = /*#__PURE__*/(() => {
  class ImageCropperComponent {
    constructor() {
      this.fileInput = null;
      this.croppedFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.selectedImageBase64 = null;
      this.transform = {};
      this.scale = 1;
    }
    onImageCropped(event) {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (event.blob) {
          const base64Image = yield _this.blobToBase64(event.blob);
          _this.croppedFile.emit(base64Image);
          _this.selectedImageBase64 = base64Image;
        }
      })();
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
     * Rotates the image to the left (counterclockwise) in 90-degree increments.
     * If the transformation is not defined, initializes it as an empty object.
     * Update the 'rotate' property on the transformation with a -90 degree rotation.
     */
    rotateLeft() {
      this.transform = {
        ...this.transform,
        // Rotate -90 degrees
        rotate: (this.transform.rotate || 0) - 90
      };
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
      this.scale -= 0.1;
      this.transform = {
        ...this.transform,
        scale: this.scale
      };
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
    /**
     * Vertically flips the image.
     * Will toggle the 'flipV' property in the transform to vertically mirror the image.
     */
    flipVertical() {
      this.transform = {
        ...this.transform,
        flipV: !this.transform.flipV
      };
    }
    static #_ = this.ɵfac = function ImageCropperComponent_Factory(t) {
      return new (t || ImageCropperComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ImageCropperComponent,
      selectors: [["app-image-cropper"]],
      inputs: {
        fileInput: "fileInput"
      },
      outputs: {
        croppedFile: "croppedFile"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 26,
      vars: 9,
      consts: [[1, "cropper-wrapper", "flex", "flex-column", "gap-5"], ["format", "png", 1, "cropper", 3, "imageFile", "maintainAspectRatio", "aspectRatio", "resizeToWidth", "cropperMinWidth", "onlyScaleDown", "roundCropper", "transform", "imageCropped"], [1, "flex", "justify-content-center", "gap-3"], [1, "buttons"], [3, "click"], ["fill", "#292828", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 452.64", "width", "20", "height", "20"], ["d", "M143.65 161.02c33.05-59.34 90.64-98.27 164.75-89.98 69.06 7.72 131.91 57.64 147.19 131.68 12.78 62-10.79 121.11-52.63 161.1-48.87 46.7-122.66 67.32-192.61 36.01-35.84-16.05-60.23-36.5-78.47-62.84-1.86-2.45-4.36-6.41-7.83-8.99-10.07-7.53-23.32 1.41-21.28 12.43.43 2.36 1.49 4.88 3.36 7.53 15 23.71 31.64 41.83 53.38 58.4 49.84 37.98 114.27 55.13 178.92 41.8 60.23-12.41 109.18-48.92 139.51-97.8 53.04-85.46 40.95-188.32-14.26-260.43-34.29-44.79-85.22-77.72-147.5-87.26C211.03-13.44 105.47 44.94 71.66 137.99l-42.51-13.6c-11.78-3.73-24.37 2.79-28.1 14.57a22.326 22.326 0 0 0 .9 15.89l48.64 108.53c5.04 11.3 18.29 16.37 29.59 11.32l1.65-.82.02.03 106.62-58.84c10.86-5.97 14.83-19.61 8.87-30.47-3.15-5.74-8.44-9.55-14.34-11l-39.35-12.58z"], ["width", "20", "height", "20", "fill", "#292828", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 452.64"], ["d", "M368.35 161.02c-33.05-59.34-90.64-98.27-164.75-89.98-69.06 7.72-131.91 57.64-147.19 131.68-12.78 61.99 10.79 121.11 52.63 161.1 48.87 46.7 122.66 67.32 192.61 36.01 35.84-16.05 60.23-36.5 78.47-62.84 1.86-2.46 4.36-6.41 7.83-9 10.07-7.53 23.32 1.42 21.28 12.44-.43 2.36-1.49 4.88-3.36 7.53-15 23.71-31.64 41.83-53.38 58.4-49.84 37.98-114.27 55.13-178.91 41.8-60.24-12.42-109.19-48.92-139.52-97.8C-18.98 264.9-6.89 162.04 48.32 89.93c34.29-44.79 85.22-77.72 147.5-87.26 105.15-16.11 210.71 42.27 244.52 135.32l42.51-13.6c11.78-3.73 24.36 2.79 28.1 14.57a22.33 22.33 0 0 1-.9 15.89l-48.64 108.53c-5.04 11.3-18.29 16.36-29.59 11.32l-1.65-.82-.02.03-106.62-58.85c-10.86-5.96-14.83-19.6-8.87-30.46 3.15-5.74 8.44-9.55 14.34-11l39.35-12.58z"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "#292828", "width", "20", "height", "20", "viewBox", "0 0 24 24"], ["d", "m23.707 22.293-5.969-5.969a10.016 10.016 0 1 0-1.414 1.414l5.969 5.969a1 1 0 0 0 1.414-1.414ZM10 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Z"], ["d", "M13 9h-2V7a1 1 0 0 0-2 0v2H7a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z"], ["d", "M13 9H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z"], ["width", "20", "height", "20", "fill", "#292828", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 417.79"], ["d", "M333.55 16.79 511 392.75c2.46 5.22.22 11.45-4.99 13.91-1.45.68-2.97 1.01-4.46 1l-177.77.03c-5.78 0-10.47-4.7-10.47-10.48V20.58c0-5.78 4.69-10.47 10.47-10.47 4.44 0 8.25 2.77 9.77 6.68zM240.3 402.16c0 18.18 26.25 21.89 30.98 3.74.28-1.29.45-2.4.45-3.74v-9.45c0-18.18-26.25-21.89-30.98-3.74-.28 1.29-.45 2.4-.45 3.74v9.45zm0-72.3c0 18.18 26.25 21.89 30.98 3.74.28-1.29.45-2.4.45-3.74v-31.42c0-18.18-26.25-21.89-30.98-3.74-.28 1.29-.45 2.4-.45 3.74v31.42zm0-94.27c0 18.18 26.25 21.89 30.98 3.74.28-1.29.45-2.4.45-3.74v-31.42c0-18.18-26.25-21.89-30.98-3.73-.28 1.28-.45 2.39-.45 3.73v31.42zm0-94.26c0 18.17 26.25 21.88 30.98 3.73.28-1.28.45-2.39.45-3.73V109.9c0-18.17-26.25-21.89-30.98-3.73-.28 1.28-.45 2.39-.45 3.73v31.43zm0-94.27c0 18.17 26.25 21.89 30.98 3.73.28-1.28.45-2.39.45-3.73V15.63c0-18.17-26.25-21.88-30.98-3.73-.28 1.29-.45 2.39-.45 3.73v31.43zM1.33 392.11 178.79 16.12c2.46-5.21 8.7-7.45 13.91-4.99 3.78 1.78 5.99 5.54 5.99 9.45l.04 376.63c0 5.78-4.7 10.48-10.48 10.48H10.48c-5.79 0-10.48-4.7-10.48-10.48 0-1.85.48-3.59 1.33-5.1zm483.72-5.37L334.26 67.26v319.48h150.79z"], ["width", "20", "height", "20", "fill", "#292828", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 428 512.54"], ["d", "m72.21 334.61 319.82 150.95V334.61H72.21zm-56.56-94.06c-18.2 0-21.91 26.27-3.74 31.01 1.29.28 2.4.45 3.74.45h19.23c18.2 0 21.91-26.27 3.74-31.01-1.29-.28-2.4-.45-3.74-.45H15.65zm82.14 0c-18.2 0-21.91 26.27-3.74 31.01 1.29.28 2.4.45 3.74.45h31.46c18.19 0 21.91-26.27 3.74-31.01-1.29-.28-2.4-.45-3.74-.45H97.79zm94.37 0c-18.2 0-21.91 26.27-3.74 31.01 1.29.28 2.4.45 3.74.45h31.45c18.2 0 21.92-26.27 3.74-31.01-1.28-.28-2.39-.45-3.74-.45h-31.45zm94.37 0c-18.2 0-21.92 26.27-3.74 31.01 1.28.28 2.39.45 3.74.45h31.45c18.2 0 21.91-26.27 3.74-31.01-1.29-.28-2.4-.45-3.74-.45h-31.45zm94.36 0c-18.19 0-21.91 26.27-3.74 31.01 1.29.28 2.4.45 3.74.45h31.46c18.2 0 21.91-26.27 3.74-31.01-1.29-.28-2.4-.45-3.74-.45h-31.46zM21.02 178.98 397.41 1.33c1.51-.85 3.25-1.33 5.1-1.33C408.3 0 413 4.7 413 10.49v177.96c0 5.79-4.7 10.48-10.49 10.48H25.49c-3.92-.03-7.68-2.25-9.47-6.03-2.46-5.22-.22-11.46 5-13.92zm377.03 332.56L21.69 333.9c-3.91-1.53-6.69-5.33-6.69-9.78 0-5.79 4.7-10.48 10.49-10.48h377.02c5.79 0 10.49 4.69 10.49 10.48v177.95c-.02 1.5-.35 3.02-1.03 4.47-2.46 5.22-8.7 7.46-13.92 5z"], ["height", "180", "width", "180", "alt", "cropped image", 1, "croppedImage", 3, "src"]],
      template: function ImageCropperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "image-cropper", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imageCropped", function ImageCropperComponent_Template_image_cropper_imageCropped_2_listener($event) {
            return ctx.onImageCropped($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "p-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_p_button_click_5_listener() {
            return ctx.rotateLeft();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_p_button_click_8_listener() {
            return ctx.rotateRight();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "svg", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_p_button_click_11_listener() {
            return ctx.zoomIn();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "path", 10)(14, "path", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_p_button_click_15_listener() {
            return ctx.zoomOut();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "path", 10)(18, "path", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_p_button_click_19_listener() {
            return ctx.flipHorizontal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "svg", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "path", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_p_button_click_22_listener() {
            return ctx.flipVertical();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "svg", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "path", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imageFile", ctx.fileInput ? ctx.fileInput : undefined)("maintainAspectRatio", true)("aspectRatio", 1 / 1)("resizeToWidth", 256)("cropperMinWidth", 128)("onlyScaleDown", true)("roundCropper", false)("transform", ctx.transform);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.selectedImageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [primeng_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__.ImageCropperModule, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__.ImageCropperComponent, primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__.FileUploadModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule],
      styles: [".croppedImage[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.cropper[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW1hZ2UtY3JvcHBlci9pbWFnZS1jcm9wcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JvcHBlZEltYWdlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jcm9wcGVyIHtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogMXJlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return ImageCropperComponent;
})();

/***/ }),

/***/ 371:
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

/***/ 5650:
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

/***/ 4214:
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
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7835);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9016);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);









const _c0 = ["wrapper"];
const _c1 = ["sourceImage"];
function ImageCropperComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function ImageCropperComponent_img_2_Template_img_load_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.imageLoadedInView());
    })("mousedown", function ImageCropperComponent_img_2_Template_img_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.startMove($event, ctx_r6.moveTypes.Drag));
    })("touchstart", function ImageCropperComponent_img_2_Template_img_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.startMove($event, ctx_r7.moveTypes.Drag));
    })("error", function ImageCropperComponent_img_2_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.loadImageError($event));
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
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.startMove($event, ctx_r10.moveTypes.Resize, "topleft"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.startMove($event, ctx_r12.moveTypes.Resize, "topleft"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.startMove($event, ctx_r13.moveTypes.Resize, "topright"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.startMove($event, ctx_r14.moveTypes.Resize, "topright"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.startMove($event, ctx_r15.moveTypes.Resize, "bottomright"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.startMove($event, ctx_r16.moveTypes.Resize, "bottomright"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.startMove($event, ctx_r17.moveTypes.Resize, "bottomleft"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.startMove($event, ctx_r18.moveTypes.Resize, "bottomleft"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.startMove($event, ctx_r19.moveTypes.Resize, "top"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.startMove($event, ctx_r20.moveTypes.Resize, "top"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.startMove($event, ctx_r21.moveTypes.Resize, "right"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.startMove($event, ctx_r22.moveTypes.Resize, "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.startMove($event, ctx_r23.moveTypes.Resize, "bottom"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.startMove($event, ctx_r24.moveTypes.Resize, "bottom"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.startMove($event, ctx_r25.moveTypes.Resize, "left"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.startMove($event, ctx_r26.moveTypes.Resize, "left"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function ImageCropperComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function ImageCropperComponent_div_4_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r27.keyboardAccess($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_Template_div_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r29.startMove($event, ctx_r29.moveTypes.Move));
    })("touchstart", function ImageCropperComponent_div_4_Template_div_touchstart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r30.startMove($event, ctx_r30.moveTypes.Move));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ImageCropperComponent_div_4_ng_container_2_Template, 21, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", ctx_r2.cropper.y1, "px")("left", ctx_r2.cropper.x1, "px")("width", ctx_r2.cropper.x2 - ctx_r2.cropper.x1, "px")("height", ctx_r2.cropper.y2 - ctx_r2.cropper.y1, "px")("margin-left", ctx_r2.alignImage === "center" ? ctx_r2.marginLeft : null)("visibility", ctx_r2.imageVisible ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-ic-round", ctx_r2.roundCropper);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r2.cropperFrameAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.hideResizeSquares);
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
    consts: [["wrapper", ""], ["class", "ngx-ic-source-image", "role", "presentation", 3, "src", "visibility", "transform", "ngx-ic-draggable", "load", "mousedown", "touchstart", "error", 4, "ngIf"], [1, "ngx-ic-overlay"], ["class", "ngx-ic-cropper", "tabindex", "0", 3, "ngx-ic-round", "top", "left", "width", "height", "margin-left", "visibility", "keydown", 4, "ngIf"], ["role", "presentation", 1, "ngx-ic-source-image", 3, "src", "load", "mousedown", "touchstart", "error"], ["sourceImage", ""], ["tabindex", "0", 1, "ngx-ic-cropper", 3, "keydown"], ["role", "presentation", 1, "ngx-ic-move", 3, "mousedown", "touchstart"], [4, "ngIf"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-topleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-square"], [1, "ngx-ic-resize", "ngx-ic-top"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-topright", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-right"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-bottomright", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-bottom"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-bottomleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-left"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-top", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-right", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-bottom", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-left", 3, "mousedown", "touchstart"]],
    template: function ImageCropperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ImageCropperComponent_img_2_Template, 2, 8, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ImageCropperComponent_div_4_Template, 3, 16, "div", 3);
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

/***/ 3311:
/*!**********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-dialog.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ Dialog),
/* harmony export */   DialogModule: () => (/* binding */ DialogModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 4946);
/* harmony import */ var primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/focustrap */ 9182);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/times */ 8993);
/* harmony import */ var primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/windowmaximize */ 2282);
/* harmony import */ var primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/windowminimize */ 3366);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 5861);
















const _c0 = ["titlebar"];
const _c1 = ["content"];
const _c2 = ["footer"];
function Dialog_div_0_div_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dialog_div_0_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.headlessTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function Dialog_div_0_div_1_ng_template_3_div_0_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.initResize($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r15.getAriaLabelledBy());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.header);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r16.getAriaLabelledBy());
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 24);
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r20.maximized ? ctx_r20.minimizeIcon : ctx_r20.maximizeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMaximizeIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "WindowMaximizeIcon", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dialog-header-maximize-icon");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMinimizeIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "WindowMinimizeIcon", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dialog-header-maximize-icon");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMaximizeIcon_1_Template, 1, 1, "WindowMaximizeIcon", 25)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_WindowMinimizeIcon_2_Template, 1, 1, "WindowMinimizeIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r21.maximized && !ctx_r21.maximizeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.maximized && !ctx_r21.minimizeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_ng_template_0_Template(rf, ctx) {}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_1_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.maximizeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_ng_template_0_Template(rf, ctx) {}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_1_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.minimizeIconTemplate);
  }
}
const _c3 = () => ({
  "p-dialog-header-icon p-dialog-header-maximize p-link": true
});
function Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r30.maximize());
    })("keydown.enter", function Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template_button_keydown_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r32.maximize());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_6_span_1_Template, 1, 1, "span", 22)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_2_Template, 3, 2, "ng-container", 23)(3, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_3_Template, 2, 1, "ng-container", 23)(4, Dialog_div_0_div_1_ng_template_3_div_1_button_6_ng_container_4_Template, 2, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.maximizeIcon && !ctx_r18.maximizeIconTemplate && !ctx_r18.minimizeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.maximizeIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.maximized);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.maximized);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 29);
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r35.closeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_TimesIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesIcon", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-dialog-header-close-icon");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_span_1_Template, 1, 1, "span", 28)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_TimesIcon_2_Template, 1, 1, "TimesIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.closeIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r33.closeIcon);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_ng_template_0_Template(rf, ctx) {}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_1_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r34.closeIconTemplate);
  }
}
const _c4 = () => ({
  "p-dialog-header-icon p-dialog-header-close p-link": true
});
function Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r39.close($event));
    })("keydown.enter", function Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template_button_keydown_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r41.close($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_ng_template_3_div_1_button_7_ng_container_1_Template, 3, 2, "ng-container", 23)(2, Dialog_div_0_div_1_ng_template_3_div_1_button_7_span_2_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r19.closeAriaLabel)("tabindex", ctx_r19.closeTabindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.closeIconTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function Dialog_div_0_div_1_ng_template_3_div_1_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r42.initDrag($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dialog_div_0_div_1_ng_template_3_div_1_span_2_Template, 2, 2, "span", 16)(3, Dialog_div_0_div_1_ng_template_3_div_1_span_3_Template, 2, 1, "span", 16)(4, Dialog_div_0_div_1_ng_template_3_div_1_ng_container_4_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dialog_div_0_div_1_ng_template_3_div_1_button_6_Template, 5, 6, "button", 18)(7, Dialog_div_0_div_1_ng_template_3_div_1_button_7_Template, 3, 6, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.headerFacet && !ctx_r8.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.headerFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.maximizable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.closable);
  }
}
function Dialog_div_0_div_1_ng_template_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Dialog_div_0_div_1_ng_template_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Dialog_div_0_div_1_ng_template_3_div_6_ng_container_3_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r11.footerTemplate);
  }
}
function Dialog_div_0_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_div_1_ng_template_3_div_0_Template, 1, 0, "div", 8)(1, Dialog_div_0_div_1_ng_template_3_div_1_Template, 8, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Dialog_div_0_div_1_ng_template_3_ng_container_5_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Dialog_div_0_div_1_ng_template_3_div_6_Template, 4, 1, "div", 12);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.resizable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-dialog-content")("ngStyle", ctx_r4.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.contentTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.footerFacet || ctx_r4.footerTemplate);
  }
}
const _c5 = (a1, a2, a3, a4) => ({
  "p-dialog p-component": true,
  "p-dialog-rtl": a1,
  "p-dialog-draggable": a2,
  "p-dialog-resizable": a3,
  "p-dialog-maximized": a4
});
const _c6 = (a0, a1) => ({
  transform: a0,
  transition: a1
});
const _c7 = a1 => ({
  value: "visible",
  params: a1
});
function Dialog_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@animation.start", function Dialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r46.onAnimationStart($event));
    })("@animation.done", function Dialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r48.onAnimationEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Dialog_div_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 5)(3, Dialog_div_0_div_1_ng_template_3_Template, 7, 8, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](10, _c5, ctx_r1.rtl, ctx_r1.draggable, ctx_r1.resizable, ctx_r1.maximized))("ngStyle", ctx_r1.style)("pFocusTrapDisabled", ctx_r1.focusTrap === false)("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c6, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-modal", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.headlessTemplate)("ngIfElse", _r5);
  }
}
const _c8 = (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => ({
  "p-dialog-mask": true,
  "p-component-overlay p-component-overlay-enter": a1,
  "p-dialog-mask-scrollblocker": a2,
  "p-dialog-left": a3,
  "p-dialog-right": a4,
  "p-dialog-top": a5,
  "p-dialog-top-left": a6,
  "p-dialog-top-right": a7,
  "p-dialog-bottom": a8,
  "p-dialog-bottom-left": a9,
  "p-dialog-bottom-right": a10
});
function Dialog_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dialog_div_0_div_1_Template, 5, 20, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r0.maskStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.maskStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](6, _c8, [ctx_r0.modal, ctx_r0.modal || ctx_r0.blockScroll, ctx_r0.position === "left", ctx_r0.position === "right", ctx_r0.position === "top", ctx_r0.position === "topleft" || ctx_r0.position === "top-left", ctx_r0.position === "topright" || ctx_r0.position === "top-right", ctx_r0.position === "bottom", ctx_r0.position === "bottomleft" || ctx_r0.position === "bottom-left", ctx_r0.position === "bottomright" || ctx_r0.position === "bottom-right"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.visible);
  }
}
const _c9 = ["*", [["p-header"]], [["p-footer"]]];
const _c10 = ["*", "p-header", "p-footer"];
const showAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  transform: '{{transform}}',
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{transition}}')]);
const hideAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animation)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{transition}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  transform: '{{transform}}',
  opacity: 0
}))]);
/**
 * Dialog is a container to display content in an overlay window.
 * @group Components
 */
let Dialog = /*#__PURE__*/(() => {
  class Dialog {
    document;
    platformId;
    el;
    renderer;
    zone;
    cd;
    config;
    /**
     * Title text of the dialog.
     * @group Props
     */
    header;
    /**
     * Enables dragging to change the position using header.
     * @group Props
     */
    draggable = true;
    /**
     * Enables resizing of the content.
     * @group Props
     */
    resizable = true;
    /**
     * Defines the left offset of dialog.
     * @group Props
     * @deprecated positionLeft property is deprecated.
     */
    get positionLeft() {
      return 0;
    }
    set positionLeft(_positionLeft) {
      console.log('positionLeft property is deprecated.');
    }
    /**
     * Defines the top offset of dialog.
     * @group Props
     * @deprecated positionTop property is deprecated.
     */
    get positionTop() {
      return 0;
    }
    set positionTop(_positionTop) {
      console.log('positionTop property is deprecated.');
    }
    /**
     * Style of the content section.
     * @group Props
     */
    contentStyle;
    /**
     * Style class of the content.
     * @group Props
     */
    contentStyleClass;
    /**
     * Defines if background should be blocked when dialog is displayed.
     * @group Props
     */
    modal = false;
    /**
     * Specifies if pressing escape key should hide the dialog.
     * @group Props
     */
    closeOnEscape = true;
    /**
     * Specifies if clicking the modal background should hide the dialog.
     * @group Props
     */
    dismissableMask = false;
    /**
     * When enabled dialog is displayed in RTL direction.
     * @group Props
     */
    rtl = false;
    /**
     * Adds a close icon to the header to hide the dialog.
     * @group Props
     */
    closable = true;
    /**
     * Defines if the component is responsive.
     * @group Props
     * @deprecated Responsive property is deprecated.
     */
    get responsive() {
      return false;
    }
    set responsive(_responsive) {
      console.log('Responsive property is deprecated.');
    }
    /**
     * Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * Object literal to define widths per screen size.
     * @group Props
     */
    breakpoints;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Style class of the mask.
     * @group Props
     */
    maskStyleClass;
    /**
     * Style of the mask.
     * @group Props
     */
    maskStyle;
    /**
     * Whether to show the header or not.
     * @group Props
     */
    showHeader = true;
    /**
     * Defines the breakpoint of the component responsive.
     * @group Props
     * @deprecated Breakpoint property is not utilized and deprecated. Use breakpoints or CSS media queries instead.
     */
    get breakpoint() {
      return 649;
    }
    set breakpoint(_breakpoint) {
      console.log('Breakpoint property is not utilized and deprecated, use breakpoints or CSS media queries instead.');
    }
    /**
     * Whether background scroll should be blocked when dialog is visible.
     * @group Props
     */
    blockScroll = false;
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex = true;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex = 0;
    /**
     * Minimum value for the left coordinate of dialog in dragging.
     * @group Props
     */
    minX = 0;
    /**
     * Minimum value for the top coordinate of dialog in dragging.
     * @group Props
     */
    minY = 0;
    /**
     * When enabled, first button receives focus on show.
     * @group Props
     */
    focusOnShow = true;
    /**
     * Whether the dialog can be displayed full screen.
     * @group Props
     */
    maximizable = false;
    /**
     * Keeps dialog in the viewport.
     * @group Props
     */
    keepInViewport = true;
    /**
     * When enabled, can only focus on elements inside the dialog.
     * @group Props
     */
    focusTrap = true;
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    /**
     * Name of the close icon.
     * @group Props
     */
    closeIcon;
    /**
     * Defines a string that labels the close button for accessibility.
     * @group Props
     */
    closeAriaLabel;
    /**
     * Index of the close button in tabbing order.
     * @group Props
     */
    closeTabindex = '-1';
    /**
     * Name of the minimize icon.
     * @group Props
     */
    minimizeIcon;
    /**
     * Name of the maximize icon.
     * @group Props
     */
    maximizeIcon;
    /**
     * Specifies the visibility of the dialog.
     * @group Props
     */
    get visible() {
      return this._visible;
    }
    set visible(value) {
      this._visible = value;
      if (this._visible && !this.maskVisible) {
        this.maskVisible = true;
      }
    }
    /**
     * Inline style of the component.
     * @group Props
     */
    get style() {
      return this._style;
    }
    set style(value) {
      if (value) {
        this._style = {
          ...value
        };
        this.originalStyle = value;
      }
    }
    /**
     * Position of the dialog.
     * @group Props
     */
    get position() {
      return this._position;
    }
    set position(value) {
      this._position = value;
      switch (value) {
        case 'topleft':
        case 'bottomleft':
        case 'left':
          this.transformOptions = 'translate3d(-100%, 0px, 0px)';
          break;
        case 'topright':
        case 'bottomright':
        case 'right':
          this.transformOptions = 'translate3d(100%, 0px, 0px)';
          break;
        case 'bottom':
          this.transformOptions = 'translate3d(0px, 100%, 0px)';
          break;
        case 'top':
          this.transformOptions = 'translate3d(0px, -100%, 0px)';
          break;
        default:
          this.transformOptions = 'scale(0.7)';
          break;
      }
    }
    /**
     * Callback to invoke when dialog is shown.
     * @group Emits
     */
    onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog is hidden.
     * @group Emits
     */
    onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This EventEmitter is used to notify changes in the visibility state of a component.
     * @param {boolean} value - New value.
     * @group Emits
     */
    visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog resizing is initiated.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    onResizeInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog resizing is completed.
     * @param {MouseEvent} event - Mouse event.
     * @group Emits
     */
    onResizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog dragging is completed.
     * @param {DragEvent} event - Drag event.
     * @group Emits
     */
    onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when dialog maximized or unmaximized.
     * @group Emits
     */
    onMaximize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    headerFacet;
    footerFacet;
    templates;
    headerViewChild;
    contentViewChild;
    footerViewChild;
    headerTemplate;
    contentTemplate;
    footerTemplate;
    maximizeIconTemplate;
    closeIconTemplate;
    minimizeIconTemplate;
    headlessTemplate;
    _visible = false;
    maskVisible;
    container;
    wrapper;
    dragging;
    ariaLabelledBy;
    documentDragListener;
    documentDragEndListener;
    resizing;
    documentResizeListener;
    documentResizeEndListener;
    documentEscapeListener;
    maskClickListener;
    lastPageX;
    lastPageY;
    preventVisibleChangePropagation;
    maximized;
    preMaximizeContentHeight;
    preMaximizeContainerWidth;
    preMaximizeContainerHeight;
    preMaximizePageX;
    preMaximizePageY;
    id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
    _style = {};
    _position = 'center';
    originalStyle;
    transformOptions = 'scale(0.7)';
    styleElement;
    window;
    constructor(document, platformId, el, renderer, zone, cd, config) {
      this.document = document;
      this.platformId = platformId;
      this.el = el;
      this.renderer = renderer;
      this.zone = zone;
      this.cd = cd;
      this.config = config;
      this.window = this.document.defaultView;
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'content':
            this.contentTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          case 'closeicon':
            this.closeIconTemplate = item.template;
            break;
          case 'maximizeicon':
            this.maximizeIconTemplate = item.template;
            break;
          case 'minimizeicon':
            this.minimizeIconTemplate = item.template;
            break;
          case 'headless':
            this.headlessTemplate = item.template;
            break;
          default:
            this.contentTemplate = item.template;
            break;
        }
      });
    }
    ngOnInit() {
      if (this.breakpoints) {
        this.createStyle();
      }
    }
    getAriaLabelledBy() {
      return this.header !== null ? (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)() + '_header' : null;
    }
    focus() {
      let focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.container, '[autofocus]');
      if (focusable) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => focusable.focus(), 5);
        });
      }
    }
    close(event) {
      this.visibleChange.emit(false);
      event.preventDefault();
    }
    enableModality() {
      if (this.closable && this.dismissableMask) {
        this.maskClickListener = this.renderer.listen(this.wrapper, 'mousedown', event => {
          if (this.wrapper && this.wrapper.isSameNode(event.target)) {
            this.close(event);
          }
        });
      }
      if (this.modal) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.blockBodyScroll();
      }
    }
    disableModality() {
      if (this.wrapper) {
        if (this.dismissableMask) {
          this.unbindMaskClickListener();
        }
        if (this.modal) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.unblockBodyScroll();
        }
        if (!this.cd.destroyed) {
          this.cd.detectChanges();
        }
      }
    }
    maximize() {
      this.maximized = !this.maximized;
      if (!this.modal && !this.blockScroll) {
        if (this.maximized) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.blockBodyScroll();
        } else {
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.unblockBodyScroll();
        }
      }
      this.onMaximize.emit({
        maximized: this.maximized
      });
    }
    unbindMaskClickListener() {
      if (this.maskClickListener) {
        this.maskClickListener();
        this.maskClickListener = null;
      }
    }
    moveOnTop() {
      if (this.autoZIndex) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('modal', this.container, this.baseZIndex + this.config.zIndex.modal);
        this.wrapper.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
      }
    }
    createStyle() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        if (!this.styleElement) {
          this.styleElement = this.renderer.createElement('style');
          this.styleElement.type = 'text/css';
          this.renderer.appendChild(this.document.head, this.styleElement);
          let innerHTML = '';
          for (let breakpoint in this.breakpoints) {
            innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[breakpoint]} !important;
                            }
                        }
                    `;
          }
          this.renderer.setProperty(this.styleElement, 'innerHTML', innerHTML);
        }
      }
    }
    initDrag(event) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-dialog-header-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target.parentElement, 'p-dialog-header-icon')) {
        return;
      }
      if (this.draggable) {
        this.dragging = true;
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        this.container.style.margin = '0';
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.document.body, 'p-unselectable-text');
      }
    }
    onKeydown(event) {
      if (this.focusTrap) {
        if (event.which === 9) {
          event.preventDefault();
          let focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getFocusableElements(this.container);
          if (focusableElements && focusableElements.length > 0) {
            if (!focusableElements[0].ownerDocument.activeElement) {
              focusableElements[0].focus();
            } else {
              let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
              if (event.shiftKey) {
                if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
              } else {
                if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
              }
            }
          }
        }
      }
    }
    onDrag(event) {
      if (this.dragging) {
        const containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(this.container);
        const containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(this.container);
        const deltaX = event.pageX - this.lastPageX;
        const deltaY = event.pageY - this.lastPageY;
        const offset = this.container.getBoundingClientRect();
        const containerComputedStyle = getComputedStyle(this.container);
        const leftMargin = parseFloat(containerComputedStyle.marginLeft);
        const topMargin = parseFloat(containerComputedStyle.marginTop);
        const leftPos = offset.left + deltaX - leftMargin;
        const topPos = offset.top + deltaY - topMargin;
        const viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getViewport();
        this.container.style.position = 'fixed';
        if (this.keepInViewport) {
          if (leftPos >= this.minX && leftPos + containerWidth < viewport.width) {
            this._style.left = `${leftPos}px`;
            this.lastPageX = event.pageX;
            this.container.style.left = `${leftPos}px`;
          }
          if (topPos >= this.minY && topPos + containerHeight < viewport.height) {
            this._style.top = `${topPos}px`;
            this.lastPageY = event.pageY;
            this.container.style.top = `${topPos}px`;
          }
        } else {
          this.lastPageX = event.pageX;
          this.container.style.left = `${leftPos}px`;
          this.lastPageY = event.pageY;
          this.container.style.top = `${topPos}px`;
        }
      }
    }
    endDrag(event) {
      if (this.dragging) {
        this.dragging = false;
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.document.body, 'p-unselectable-text');
        this.cd.detectChanges();
        this.onDragEnd.emit(event);
      }
    }
    resetPosition() {
      this.container.style.position = '';
      this.container.style.left = '';
      this.container.style.top = '';
      this.container.style.margin = '';
    }
    //backward compatibility
    center() {
      this.resetPosition();
    }
    initResize(event) {
      if (this.resizable) {
        this.resizing = true;
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.document.body, 'p-unselectable-text');
        this.onResizeInit.emit(event);
      }
    }
    onResize(event) {
      if (this.resizing) {
        let deltaX = event.pageX - this.lastPageX;
        let deltaY = event.pageY - this.lastPageY;
        let containerWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(this.container);
        let containerHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(this.container);
        let contentHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(this.contentViewChild?.nativeElement);
        let newWidth = containerWidth + deltaX;
        let newHeight = containerHeight + deltaY;
        let minWidth = this.container.style.minWidth;
        let minHeight = this.container.style.minHeight;
        let offset = this.container.getBoundingClientRect();
        let viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getViewport();
        let hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);
        if (hasBeenDragged) {
          newWidth += deltaX;
          newHeight += deltaY;
        }
        if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
          this._style.width = newWidth + 'px';
          this.container.style.width = this._style.width;
        }
        if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
          this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + 'px';
          if (this._style.height) {
            this._style.height = newHeight + 'px';
            this.container.style.height = this._style.height;
          }
        }
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
      }
    }
    resizeEnd(event) {
      if (this.resizing) {
        this.resizing = false;
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.document.body, 'p-unselectable-text');
        this.onResizeEnd.emit(event);
      }
    }
    bindGlobalListeners() {
      if (this.draggable) {
        this.bindDocumentDragListener();
        this.bindDocumentDragEndListener();
      }
      if (this.resizable) {
        this.bindDocumentResizeListeners();
      }
      if (this.closeOnEscape && this.closable) {
        this.bindDocumentEscapeListener();
      }
    }
    unbindGlobalListeners() {
      this.unbindDocumentDragListener();
      this.unbindDocumentDragEndListener();
      this.unbindDocumentResizeListeners();
      this.unbindDocumentEscapeListener();
    }
    bindDocumentDragListener() {
      if (!this.documentDragListener) {
        this.zone.runOutsideAngular(() => {
          this.documentDragListener = this.renderer.listen(this.window, 'mousemove', this.onDrag.bind(this));
        });
      }
    }
    unbindDocumentDragListener() {
      if (this.documentDragListener) {
        this.documentDragListener();
        this.documentDragListener = null;
      }
    }
    bindDocumentDragEndListener() {
      if (!this.documentDragEndListener) {
        this.zone.runOutsideAngular(() => {
          this.documentDragEndListener = this.renderer.listen(this.window, 'mouseup', this.endDrag.bind(this));
        });
      }
    }
    unbindDocumentDragEndListener() {
      if (this.documentDragEndListener) {
        this.documentDragEndListener();
        this.documentDragEndListener = null;
      }
    }
    bindDocumentResizeListeners() {
      if (!this.documentResizeListener && !this.documentResizeEndListener) {
        this.zone.runOutsideAngular(() => {
          this.documentResizeListener = this.renderer.listen(this.window, 'mousemove', this.onResize.bind(this));
          this.documentResizeEndListener = this.renderer.listen(this.window, 'mouseup', this.resizeEnd.bind(this));
        });
      }
    }
    unbindDocumentResizeListeners() {
      if (this.documentResizeListener && this.documentResizeEndListener) {
        this.documentResizeListener();
        this.documentResizeEndListener();
        this.documentResizeListener = null;
        this.documentResizeEndListener = null;
      }
    }
    bindDocumentEscapeListener() {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.documentEscapeListener = this.renderer.listen(documentTarget, 'keydown', event => {
        if (event.which == 27) {
          this.close(event);
        }
      });
    }
    unbindDocumentEscapeListener() {
      if (this.documentEscapeListener) {
        this.documentEscapeListener();
        this.documentEscapeListener = null;
      }
    }
    appendContainer() {
      if (this.appendTo) {
        if (this.appendTo === 'body') this.renderer.appendChild(this.document.body, this.wrapper);else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.appendChild(this.wrapper, this.appendTo);
      }
    }
    restoreAppend() {
      if (this.container && this.appendTo) {
        this.renderer.appendChild(this.el.nativeElement, this.wrapper);
      }
    }
    onAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          this.container = event.element;
          this.wrapper = this.container?.parentElement;
          this.appendContainer();
          this.moveOnTop();
          this.bindGlobalListeners();
          this.container?.setAttribute(this.id, '');
          if (this.modal) {
            this.enableModality();
          }
          if (!this.modal && this.blockScroll) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.document.body, 'p-overflow-hidden');
          }
          if (this.focusOnShow) {
            this.focus();
          }
          break;
        case 'void':
          if (this.wrapper && this.modal) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.wrapper, 'p-component-overlay-leave');
          }
          break;
      }
    }
    onAnimationEnd(event) {
      switch (event.toState) {
        case 'void':
          this.onContainerDestroy();
          this.onHide.emit({});
          this.cd.markForCheck();
          break;
        case 'visible':
          this.onShow.emit({});
          break;
      }
    }
    onContainerDestroy() {
      this.unbindGlobalListeners();
      this.dragging = false;
      this.maskVisible = false;
      if (this.maximized) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.document.body, 'p-overflow-hidden');
        this.document.body.style.removeProperty('--scrollbar-width');
        this.maximized = false;
      }
      if (this.modal) {
        this.disableModality();
      }
      if (this.blockScroll) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.document.body, 'p-overflow-hidden');
      }
      if (this.container && this.autoZIndex) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.container);
      }
      this.container = null;
      this.wrapper = null;
      this._style = this.originalStyle ? {
        ...this.originalStyle
      } : {};
    }
    destroyStyle() {
      if (this.styleElement) {
        this.renderer.removeChild(this.document.head, this.styleElement);
        this.styleElement = null;
      }
    }
    ngOnDestroy() {
      if (this.container) {
        this.restoreAppend();
        this.onContainerDestroy();
      }
      this.destroyStyle();
    }
    static ɵfac = function Dialog_Factory(t) {
      return new (t || Dialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Dialog,
      selectors: [["p-dialog"]],
      contentQueries: function Dialog_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.Header, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.Footer, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Dialog_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        header: "header",
        draggable: "draggable",
        resizable: "resizable",
        positionLeft: "positionLeft",
        positionTop: "positionTop",
        contentStyle: "contentStyle",
        contentStyleClass: "contentStyleClass",
        modal: "modal",
        closeOnEscape: "closeOnEscape",
        dismissableMask: "dismissableMask",
        rtl: "rtl",
        closable: "closable",
        responsive: "responsive",
        appendTo: "appendTo",
        breakpoints: "breakpoints",
        styleClass: "styleClass",
        maskStyleClass: "maskStyleClass",
        maskStyle: "maskStyle",
        showHeader: "showHeader",
        breakpoint: "breakpoint",
        blockScroll: "blockScroll",
        autoZIndex: "autoZIndex",
        baseZIndex: "baseZIndex",
        minX: "minX",
        minY: "minY",
        focusOnShow: "focusOnShow",
        maximizable: "maximizable",
        keepInViewport: "keepInViewport",
        focusTrap: "focusTrap",
        transitionOptions: "transitionOptions",
        closeIcon: "closeIcon",
        closeAriaLabel: "closeAriaLabel",
        closeTabindex: "closeTabindex",
        minimizeIcon: "minimizeIcon",
        maximizeIcon: "maximizeIcon",
        visible: "visible",
        style: "style",
        position: "position"
      },
      outputs: {
        onShow: "onShow",
        onHide: "onHide",
        visibleChange: "visibleChange",
        onResizeInit: "onResizeInit",
        onResizeEnd: "onResizeEnd",
        onDragEnd: "onDragEnd",
        onMaximize: "onMaximize"
      },
      ngContentSelectors: _c10,
      decls: 1,
      vars: 1,
      consts: [[3, "class", "style", "ngClass", 4, "ngIf"], [3, "ngClass"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "class", "pFocusTrapDisabled", 4, "ngIf"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "pFocusTrapDisabled"], ["container", ""], [4, "ngIf", "ngIfElse"], ["notHeadless", ""], [4, "ngTemplateOutlet"], ["class", "p-resizable-handle", "style", "z-index: 90;", 3, "mousedown", 4, "ngIf"], ["class", "p-dialog-header", 3, "mousedown", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["content", ""], ["class", "p-dialog-footer", 4, "ngIf"], [1, "p-resizable-handle", 2, "z-index", "90", 3, "mousedown"], [1, "p-dialog-header", 3, "mousedown"], ["titlebar", ""], ["class", "p-dialog-title", 3, "id", 4, "ngIf"], [1, "p-dialog-header-icons"], ["role", "button", "type", "button", "tabindex", "-1", "pRipple", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], ["type", "button", "pRipple", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], [1, "p-dialog-title", 3, "id"], ["role", "button", "type", "button", "tabindex", "-1", "pRipple", "", 3, "ngClass", "click", "keydown.enter"], ["class", "p-dialog-header-maximize-icon", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "p-dialog-header-maximize-icon", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], ["type", "button", "pRipple", "", 3, "ngClass", "click", "keydown.enter"], ["class", "p-dialog-header-close-icon", 3, "ngClass", 4, "ngIf"], [1, "p-dialog-header-close-icon", 3, "ngClass"], [1, "p-dialog-footer"], ["footer", ""]],
      template: function Dialog_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Dialog_div_0_Template, 2, 17, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maskVisible);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__.FocusTrap, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__.TimesIcon, primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_9__.WindowMaximizeIcon, primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_10__.WindowMinimizeIcon],
      styles: ["@layer primeng{.p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-webkit-transition:none;transition:none;transform:none;width:100vw!important;height:100vh!important;top:0!important;left:0!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(showAnimation)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(hideAnimation)])])]
      },
      changeDetection: 0
    });
  }
  return Dialog;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DialogModule = /*#__PURE__*/(() => {
  class DialogModule {
    static ɵfac = function DialogModule_Factory(t) {
      return new (t || DialogModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DialogModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_focustrap__WEBPACK_IMPORTED_MODULE_6__.FocusTrapModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__.TimesIcon, primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_9__.WindowMaximizeIcon, primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_10__.WindowMinimizeIcon, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
    });
  }
  return DialogModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



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

/***/ 7186:
/*!**************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-plus.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlusIcon: () => (/* binding */ PlusIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 3128);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 5861);




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

/***/ 2282:
/*!************************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-windowmaximize.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WindowMaximizeIcon: () => (/* binding */ WindowMaximizeIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 3128);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 5861);




let WindowMaximizeIcon = /*#__PURE__*/(() => {
  class WindowMaximizeIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵWindowMaximizeIcon_BaseFactory;
      return function WindowMaximizeIcon_Factory(t) {
        return (ɵWindowMaximizeIcon_BaseFactory || (ɵWindowMaximizeIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](WindowMaximizeIcon)))(t || WindowMaximizeIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: WindowMaximizeIcon,
      selectors: [["WindowMaximizeIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function WindowMaximizeIcon_Template(rf, ctx) {
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
  return WindowMaximizeIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3366:
/*!************************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-windowminimize.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WindowMinimizeIcon: () => (/* binding */ WindowMinimizeIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 3128);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 5861);




let WindowMinimizeIcon = /*#__PURE__*/(() => {
  class WindowMinimizeIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵWindowMinimizeIcon_BaseFactory;
      return function WindowMinimizeIcon_Factory(t) {
        return (ɵWindowMinimizeIcon_BaseFactory || (ɵWindowMinimizeIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](WindowMinimizeIcon)))(t || WindowMinimizeIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: WindowMinimizeIcon,
      selectors: [["WindowMinimizeIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function WindowMinimizeIcon_Template(rf, ctx) {
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
  return WindowMinimizeIcon;
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
//# sourceMappingURL=455.js.map