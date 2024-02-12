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
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @enums/urls */ 5500);
/* harmony import */ var src_app_shared_components_set_user_image_set_user_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/set-user-image/set-user-image.component */ 7292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 5939);






let SetPhotoComponent = /*#__PURE__*/(() => {
  class SetPhotoComponent {
    constructor(translate) {
      this.translate = translate;
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_0__.URLS;
      this.PAGE = src_app_shared_components_set_user_image_set_user_image_component__WEBPACK_IMPORTED_MODULE_1__.PAGE;
    }
    static #_ = this.ɵfac = function SetPhotoComponent_Factory(t) {
      return new (t || SetPhotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SetPhotoComponent,
      selectors: [["app-set-photo"]],
      decls: 7,
      vars: 7,
      consts: [[3, "page"], [1, "text-3xl", "mb-3", "title"], [1, "text-xl", "font-bold"]],
      template: function SetPhotoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-set-user-image", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("page", ctx.PAGE.SET_PHOTO);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, "SET_PHOTO_PAGE.TITLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 5, "SET_PHOTO_PAGE.CONTENT"));
        }
      },
      dependencies: [src_app_shared_components_set_user_image_set_user_image_component__WEBPACK_IMPORTED_MODULE_1__.SetUserImageComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
      styles: [".title[_ngcontent-%COMP%] {\n  color: var(--textTitle);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2V0LXBob3RvL2NvbXBvbmVudHMvc2V0LXBob3RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXRleHRUaXRsZSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_set_photo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/set-photo.component */ 9675);
/* harmony import */ var _set_photo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-photo-routing.module */ 4366);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/container/container.component */ 2580);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/fileupload */ 8285);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ApiClient/components/image/image.component */ 4072);
/* harmony import */ var _shared_components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/image-cropper/image-cropper.component */ 9648);
/* harmony import */ var _shared_components_set_user_image_set_user_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/set-user-image/set-user-image.component */ 7292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);












let SetPhotoModule = /*#__PURE__*/(() => {
  class SetPhotoModule {
    static #_ = this.ɵfac = function SetPhotoModule_Factory(t) {
      return new (t || SetPhotoModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: SetPhotoModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _set_photo_routing_module__WEBPACK_IMPORTED_MODULE_1__.SetPhotoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__.FileUploadModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.RippleModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_3__.ImageComponent, _shared_components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_4__.ImageCropperComponent, _shared_components_set_user_image_set_user_image_component__WEBPACK_IMPORTED_MODULE_5__.SetUserImageComponent]
    });
  }
  return SetPhotoModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SetPhotoModule, {
    declarations: [_components_set_photo_component__WEBPACK_IMPORTED_MODULE_0__.SetPhotoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _set_photo_routing_module__WEBPACK_IMPORTED_MODULE_1__.SetPhotoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__.FileUploadModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.RippleModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_3__.ImageComponent, _shared_components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_4__.ImageCropperComponent, _shared_components_set_user_image_set_user_image_component__WEBPACK_IMPORTED_MODULE_5__.SetUserImageComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=527.js.map