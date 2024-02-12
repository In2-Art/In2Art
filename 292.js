"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[292],{

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-image-cropper */ 4214);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 8026);

/* eslint-disable no-debugger */










let ImageCropperComponent = /*#__PURE__*/(() => {
  class ImageCropperComponent {
    constructor(toast, translate) {
      this.toast = toast;
      this.translate = translate;
      this.fileInput = null;
      this.croppedFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
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
    onFileInputChange(event) {
      var _this2 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const target = event.target;
        const fileList = target.files;
        if (fileList && fileList.length > 0) {
          if (!fileList[0].type.startsWith('image/')) {
            _this2.showErrorMessage('ERROR.WRONG_TYPE');
          } else {
            _this2.fileInput = fileList[0];
          }
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
        fileInput: "fileInput"
      },
      outputs: {
        croppedFile: "croppedFile"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 23,
      vars: 7,
      consts: [[1, "cropper-wrapper", "flex", "flex-column", "gap-5"], [1, "relative"], ["format", "png", 1, "cropper", 3, "imageFile", "maintainAspectRatio", "resizeToWidth", "cropperMinWidth", "onlyScaleDown", "roundCropper", "transform", "imageCropped"], [1, "buttons"], [1, "control-button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24"], ["d", "m23.707 22.293-5.969-5.969a10.016 10.016 0 1 0-1.414 1.414l5.969 5.969a1 1 0 0 0 1.414-1.414ZM10 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Z"], ["d", "M13 9h-2V7a1 1 0 0 0-2 0v2H7a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z"], ["d", "M13 9H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z"], ["width", "20", "height", "20", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 452.64"], ["d", "M368.35 161.02c-33.05-59.34-90.64-98.27-164.75-89.98-69.06 7.72-131.91 57.64-147.19 131.68-12.78 61.99 10.79 121.11 52.63 161.1 48.87 46.7 122.66 67.32 192.61 36.01 35.84-16.05 60.23-36.5 78.47-62.84 1.86-2.46 4.36-6.41 7.83-9 10.07-7.53 23.32 1.42 21.28 12.44-.43 2.36-1.49 4.88-3.36 7.53-15 23.71-31.64 41.83-53.38 58.4-49.84 37.98-114.27 55.13-178.91 41.8-60.24-12.42-109.19-48.92-139.52-97.8C-18.98 264.9-6.89 162.04 48.32 89.93c34.29-44.79 85.22-77.72 147.5-87.26 105.15-16.11 210.71 42.27 244.52 135.32l42.51-13.6c11.78-3.73 24.36 2.79 28.1 14.57a22.33 22.33 0 0 1-.9 15.89l-48.64 108.53c-5.04 11.3-18.29 16.36-29.59 11.32l-1.65-.82-.02.03-106.62-58.85c-10.86-5.96-14.83-19.6-8.87-30.46 3.15-5.74 8.44-9.55 14.34-11l39.35-12.58z"], ["width", "22", "height", "22", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 417.79"], ["d", "M333.55 16.79 511 392.75c2.46 5.22.22 11.45-4.99 13.91-1.45.68-2.97 1.01-4.46 1l-177.77.03c-5.78 0-10.47-4.7-10.47-10.48V20.58c0-5.78 4.69-10.47 10.47-10.47 4.44 0 8.25 2.77 9.77 6.68zM240.3 402.16c0 18.18 26.25 21.89 30.98 3.74.28-1.29.45-2.4.45-3.74v-9.45c0-18.18-26.25-21.89-30.98-3.74-.28 1.29-.45 2.4-.45 3.74v9.45zm0-72.3c0 18.18 26.25 21.89 30.98 3.74.28-1.29.45-2.4.45-3.74v-31.42c0-18.18-26.25-21.89-30.98-3.74-.28 1.29-.45 2.4-.45 3.74v31.42zm0-94.27c0 18.18 26.25 21.89 30.98 3.74.28-1.29.45-2.4.45-3.74v-31.42c0-18.18-26.25-21.89-30.98-3.73-.28 1.28-.45 2.39-.45 3.73v31.42zm0-94.26c0 18.17 26.25 21.88 30.98 3.73.28-1.28.45-2.39.45-3.73V109.9c0-18.17-26.25-21.89-30.98-3.73-.28 1.28-.45 2.39-.45 3.73v31.43zm0-94.27c0 18.17 26.25 21.89 30.98 3.73.28-1.28.45-2.39.45-3.73V15.63c0-18.17-26.25-21.88-30.98-3.73-.28 1.29-.45 2.39-.45 3.73v31.43zM1.33 392.11 178.79 16.12c2.46-5.21 8.7-7.45 13.91-4.99 3.78 1.78 5.99 5.54 5.99 9.45l.04 376.63c0 5.78-4.7 10.48-10.48 10.48H10.48c-5.79 0-10.48-4.7-10.48-10.48 0-1.85.48-3.59 1.33-5.1zm483.72-5.37L334.26 67.26v319.48h150.79z"], ["width", "22", "height", "22", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24"], ["d", "M8.71 7.71 11 5.41V15a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42ZM21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6a1 1 0 0 0-2 0v6a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1Z"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["hiddenFileInput", ""]],
      template: function ImageCropperComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
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
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 6)(7, "path", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_button_click_8_listener() {
            return ctx.zoomOut();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "svg", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 6)(11, "path", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_button_click_12_listener() {
            return ctx.rotateRight();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "path", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_button_click_15_listener() {
            return ctx.flipHorizontal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "svg", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "path", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageCropperComponent_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "svg", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "path", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 15, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ImageCropperComponent_Template_input_change_21_listener($event) {
            return ctx.onFileInputChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imageFile", ctx.fileInput ? ctx.fileInput : undefined)("maintainAspectRatio", true)("resizeToWidth", 256)("cropperMinWidth", 128)("onlyScaleDown", true)("roundCropper", true)("transform", ctx.transform);
        }
      },
      dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__.ImageCropperModule, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__.ImageCropperComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule],
      styles: [".buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  display: flex;\n  gap: 8px;\n}\n\n.control-button[_ngcontent-%COMP%] {\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.3);\n  border: none;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 0 10px 2.5px rgba(0, 0, 0, 0.3);\n  transition: all 0.1s ease;\n}\n.control-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.control-button[_ngcontent-%COMP%]:active {\n  transform: scale(1.1);\n}\n.control-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: var(--text);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW1hZ2UtY3JvcHBlci9pbWFnZS1jcm9wcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUNJO0VBQ0ksb0NBQUE7QUFDUjtBQUVJO0VBQ0kscUJBQUE7QUFBUjtBQUdJO0VBQ0ksaUJBQUE7QUFEUiIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA4cHg7XG59XG5cbi5jb250cm9sLWJ1dHRvbiB7XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMi41cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIH1cblxuICAgIHN2ZyB7XG4gICAgICAgIGZpbGw6IHZhcigtLXRleHQpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return ImageCropperComponent;
})();

/***/ }),

/***/ 7292:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/set-user-image/set-user-image.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PAGE: () => (/* binding */ PAGE),
/* harmony export */   SetUserImageComponent: () => (/* binding */ SetUserImageComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/fileupload */ 8285);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 1236);
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/auth/auth.selectors */ 4590);
/* harmony import */ var _utils_generate_image_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/generate-image-path */ 371);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _utils_read_file_as_base_64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/read-file-as-base-64 */ 5650);
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/auth/auth.actions */ 3978);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @enums/urls */ 5500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../container/container.component */ 2580);
/* harmony import */ var _image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image-cropper/image-cropper.component */ 9648);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _directives_event_blocker_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directives/event-blocker.module */ 2276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var _directives_event_blocker_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../directives/event-blocker.directive */ 3884);




























const _c0 = a0 => ({
  isDragover: a0
});
function SetUserImageComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 13)(1, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function SetUserImageComponent_div_5_div_1_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r7.onSelectFileUpload($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("dragend", function SetUserImageComponent_div_5_div_1_Template_button_dragend_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r9.isDragover = false);
    })("dragover", function SetUserImageComponent_div_5_div_1_Template_button_dragover_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r10.isDragover = true);
    })("dragenter", function SetUserImageComponent_div_5_div_1_Template_button_dragenter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r11.isDragover = true);
    })("dragleave", function SetUserImageComponent_div_5_div_1_Template_button_dragleave_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.isDragover = false);
    })("mouseleave", function SetUserImageComponent_div_5_div_1_Template_button_mouseleave_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r13.isDragover = false);
    })("drop", function SetUserImageComponent_div_5_div_1_Template_button_drop_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r14.storeFile($event));
    })("click", function SetUserImageComponent_div_5_div_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r6.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Upload your photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](1, _c0, ctx_r4.isDragover));
  }
}
function SetUserImageComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "app-image-cropper", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("croppedFile", function SetUserImageComponent_div_5_div_2_Template_app_image_cropper_croppedFile_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r16.onSelectCroppedFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("fileInput", ctx_r5.fileToCropper);
  }
}
function SetUserImageComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SetUserImageComponent_div_5_div_1_Template, 8, 3, "div", 11)(2, SetUserImageComponent_div_5_div_2_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.fileToCropper);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.fileToCropper);
  }
}
const _c1 = a0 => ({
  "select-photo": a0
});
function SetUserImageComponent_div_6_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SetUserImageComponent_div_6_button_4_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const path_r19 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r20.onImageClick(path_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const path_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c1, ctx_r18.selectedPath === path_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", path_r19, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function SetUserImageComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 21)(1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SetUserImageComponent_div_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r22.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, SetUserImageComponent_div_6_button_4_Template, 2, 4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SetUserImageComponent_div_6_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r24.onImageClick(ctx_r24.noImagePath));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("rotate", ctx_r1.isRefreshed);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.imagePaths.slice(0, ctx_r1.page === ctx_r1.PAGE.SET_PHOTO ? 8 : 9));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](5, _c1, ctx_r1.selectedPath === ctx_r1.noImagePath));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r1.noImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
const _c2 = (a0, a1, a2) => [a0, a1, a2];
function SetUserImageComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](6, _c2, ctx_r2.URLS.BACK, ctx_r2.URLS.PROFILE, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, ctx_r2.userNickname$)))("label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 4, "BTN.CANCEL"));
  }
}
const _c3 = a0 => [a0];
function SetUserImageComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](4, _c3, ctx_r3.URLS.BACK))("label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, "BTN.CANCEL"));
  }
}
const _c4 = ["*"];
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
    changeMode() {
      this.fileToCropper = null;
      this.selectedPath = null;
      this.isUploadMode = !this.isUploadMode;
    }
    confirm() {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          if (_this.selectedPath && !_this.croppedFile) {
            const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.lastValueFrom)(_this.http.get(_this.selectedPath, {
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
        console.log('file from drag', _this2.fileToCropper);
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
      return new (t || SetUserImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_14__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: SetUserImageComponent,
      selectors: [["app-set-user-image"]],
      inputs: {
        page: "page"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c4,
      decls: 13,
      vars: 13,
      consts: [[3, "width", "isLoading"], [1, "flex", "w-full", "flex-column", "gap-5", "align-items-center", "justify-content-center"], [1, "text-center", "mb-4"], ["class", "flex justify-content-center w-full", 4, "ngIf"], ["class", "photos relative", 4, "ngIf"], [1, "flex", "w-full", "flex-column", "md:flex-row", "md:justify-content-center", "gap-3", "flex-wrap"], ["pRipple", "", "pButton", "", 1, "w-full", "md:w-auto", "p-button-secondary", 3, "label", "click"], ["icon", "pi pi-times", "class", "w-full md:w-auto", "pButton", "", "pRipple", "", 3, "routerLink", "label", 4, "ngIf"], ["class", "w-full md:w-auto", "pButton", "", "pRipple", "", 3, "routerLink", "label", 4, "ngIf"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "w-full", "md:w-auto", 3, "label", "disabled", "click"], [1, "flex", "justify-content-center", "w-full"], ["class", "w-full", 4, "ngIf"], [4, "ngIf"], [1, "w-full"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["fileInput", ""], ["appEventBlocker", "", 1, "upload", "transition-duration-500", 3, "ngClass", "dragend", "dragover", "dragenter", "dragleave", "mouseleave", "drop", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "80", "height", "60", "viewBox", "0 50 512 367"], ["d", "M470.7 277.2c3-11.2 4.7-22.9 4.7-35 0-75.8-61.4-137.1-137.1-137.1-19.5 0-38 4.1-54.7 11.4-16.8-39-55.6-66.3-100.7-66.3-60.6 0-109.7 49.1-109.7 109.7 0 4.1.8 7.9 1.2 11.9C30.5 192.1 0 236.3 0 287.9c0 70.7 57.3 128 128 128h310.9c40.4 0 73.1-32.7 73.1-73.1 0-29-16.9-53.7-41.3-65.6zm-178.1-25.9v91.4h-73.1v-91.4h-54.9l91.4-91.4 91.4 91.4h-54.8z"], [1, "text-xl"], [3, "fileInput", "croppedFile"], [1, "photos", "relative"], [1, "absolute", "refresh-button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 32 32"], ["d", "M29.974 0c-1.12 0-2.026.908-2.026 2.026V6.75C25.664 3.984 23.032 0 15.788 0 7.084 0 0 7.082 0 15.788s7.084 15.788 15.788 15.788a15.77 15.77 0 0 0 15.004-10.864 2.062 2.062 0 1 0-3.92-1.29 11.65 11.65 0 0 1-11.084 8.028c-6.432 0-11.664-5.232-11.664-11.664s5.232-11.64 11.664-11.64c4.554 0 7.084 2.834 9.148 5.806h-5.094a2.026 2.026 0 1 0 0 4.052h10.132A2.021 2.021 0 0 0 32 11.982V2.026A2.027 2.027 0 0 0 29.974 0z"], ["class", "photo-button flex align-items-center m-0 p-0", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "photo-button", "flex", "align-items-center", "m-0", "p-0", 3, "ngClass", "click"], ["alt", "No Image", "width", "180", "height", "180", 3, "src"], ["alt", "Profile photo", "width", "180", "height", "180", 3, "src"], ["icon", "pi pi-times", "pButton", "", "pRipple", "", 1, "w-full", "md:w-auto", 3, "routerLink", "label"], ["pButton", "", "pRipple", "", 1, "w-full", "md:w-auto", 3, "routerLink", "label"]],
      template: function SetUserImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, SetUserImageComponent_div_5_Template, 3, 2, "div", 3)(6, SetUserImageComponent_div_6_Template, 7, 7, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SetUserImageComponent_Template_button_click_8_listener() {
            return ctx.changeMode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, SetUserImageComponent_button_9_Template, 3, 10, "button", 7)(10, SetUserImageComponent_button_10_Template, 2, 6, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SetUserImageComponent_Template_button_click_11_listener() {
            return ctx.confirm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("width", 700)("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 9, ctx.isLoading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isUploadMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isUploadMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", ctx.isUploadMode ? "Avatar library" : "Upload file");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.page === ctx.PAGE.SET_PHOTO);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.page === ctx.PAGE.WELCOME_PHOTO);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 11, "BTN.CONFIRM"))("disabled", !ctx.croppedFile && !ctx.selectedPath);
        }
      },
      dependencies: [primeng_ripple__WEBPACK_IMPORTED_MODULE_16__.RippleModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_16__.Ripple, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonDirective, _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _container_container_component__WEBPACK_IMPORTED_MODULE_6__.ContainerComponent, primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__.FileUploadModule, _image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_7__.ImageCropperComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterLink, _directives_event_blocker_module__WEBPACK_IMPORTED_MODULE_8__.EventBlockerModule, _directives_event_blocker_directive__WEBPACK_IMPORTED_MODULE_9__.EventBlockerDirective],
      styles: [".photos[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  gap: 0.25rem;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (min-width: 768px) {\n  .photos[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n}\n\n.last-word[_ngcontent-%COMP%] {\n  color: var(--activeLink);\n}\n\n.uploaded-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.uploaded-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.photo-button[_ngcontent-%COMP%] {\n  border: 6px solid transparent;\n  background-color: transparent;\n  border-radius: 50%;\n  min-width: 70px;\n  min-height: 70px;\n  max-width: 180px;\n  max-height: 180px;\n}\n@media (min-width: 768px) {\n  .photo-button[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n  }\n}\n.photo-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.photo-button[_ngcontent-%COMP%]:hover {\n  background-color: var(--btnPrimary);\n}\n.photo-button[_ngcontent-%COMP%]:active {\n  background-color: var(--btnActive);\n}\n\n.select-photo[_ngcontent-%COMP%] {\n  background-color: var(--btnPrimary);\n}\n\n.upload[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  flex-direction: column;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--btnPrimary);\n  border-radius: 1rem;\n  padding: 3rem;\n  gap: 1rem;\n  color: var(--text);\n}\n.upload[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: var(--text);\n}\n.upload[_ngcontent-%COMP%]:hover {\n  background-color: var(--btnHover);\n}\n\n.isDragover[_ngcontent-%COMP%] {\n  background-color: var(--btnHover);\n}\n\n.refresh-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid var(--bgSecondary);\n  background-color: transparent;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  top: -2rem;\n  right: 0;\n}\n.refresh-button[_ngcontent-%COMP%]:hover, .refresh-button[_ngcontent-%COMP%]:active {\n  border-color: var(--btnPrimary);\n}\n.refresh-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: var(--text);\n}\n@media (min-width: 768px) {\n  .refresh-button[_ngcontent-%COMP%] {\n    width: 3rem;\n    height: 3rem;\n  }\n  .refresh-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 26px;\n    height: 26px;\n  }\n}\n\n.rotate[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_rotation 500ms infinite linear;\n}\n\n@keyframes _ngcontent-%COMP%_rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2V0LXVzZXItaW1hZ2Uvc2V0LXVzZXItaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7QUFDRjtBQUNFO0VBUEY7SUFRSSxTQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFLHdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGO0FBQUU7RUFDRSxrQkFBQTtBQUVKOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFURjtJQVVJLFlBQUE7SUFDQSxhQUFBO0VBRUY7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQ0U7RUFDRSxtQ0FBQTtBQUNKO0FBRUU7RUFDRSxrQ0FBQTtBQUFKOztBQUlBO0VBQ0UsbUNBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBREY7QUFHRTtFQUNFLGlCQUFBO0FBREo7QUFJRTtFQUNFLGlDQUFBO0FBRko7O0FBTUE7RUFDRSxpQ0FBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBSEY7QUFLRTtFQUNFLCtCQUFBO0FBSEo7QUFNRTtFQUNFLGlCQUFBO0FBSko7QUFPRTtFQXBCRjtJQXFCSSxXQUFBO0lBQ0EsWUFBQTtFQUpGO0VBTUU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQUpKO0FBQ0Y7O0FBUUE7RUFDRSx5Q0FBQTtBQUxGOztBQVFBO0VBQ0U7SUFDRSx1QkFBQTtFQUxGO0VBT0E7SUFDRSx5QkFBQTtFQUxGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvdG9zIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgZ2FwOiAwLjI1cmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGdhcDogMXJlbTtcbiAgfVxufVxuXG4ubGFzdC13b3JkIHtcbiAgY29sb3I6IHZhcigtLWFjdGl2ZUxpbmspO1xufVxuXG4udXBsb2FkZWQtaW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgJiBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuXG4ucGhvdG8tYnV0dG9uIHtcbiAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1pbi13aWR0aDogNzBweDtcbiAgbWluLWhlaWdodDogNzBweDtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgbWF4LWhlaWdodDogMTgwcHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogMTgwcHg7XG4gIH1cblxuICAmIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0blByaW1hcnkpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bkFjdGl2ZSk7XG4gIH1cbn1cblxuLnNlbGVjdC1waG90byB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0blByaW1hcnkpO1xufVxuXG4udXBsb2FkIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0blByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBwYWRkaW5nOiAzcmVtO1xuICBnYXA6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcblxuICAmIHN2ZyB7XG4gICAgZmlsbDogdmFyKC0tdGV4dCk7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5Ib3Zlcik7XG4gIH1cbn1cblxuLmlzRHJhZ292ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5Ib3Zlcik7XG59XG5cbi5yZWZyZXNoLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iZ1NlY29uZGFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIHRvcDogLTJyZW07XG4gIHJpZ2h0OiAwO1xuXG4gICY6aG92ZXIsJjphY3RpdmUge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnRuUHJpbWFyeSlcbiAgfVxuXG4gICYgc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS10ZXh0KVxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuXG4gICAgJiBzdmcge1xuICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgfVxuICB9XG59XG5cbi5yb3RhdGUge1xuICBhbmltYXRpb246IHJvdGF0aW9uIDUwMG1zIGluZmluaXRlIGxpbmVhcjtcbn1cblxuQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return SetUserImageComponent;
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



/***/ })

}]);
//# sourceMappingURL=292.js.map