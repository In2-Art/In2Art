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
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @enums/urls */ 5500);
/* harmony import */ var src_app_shared_components_set_user_image_set_user_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/set-user-image/set-user-image.component */ 7292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 5939);






let WelcomePhotoComponent = /*#__PURE__*/(() => {
  class WelcomePhotoComponent {
    constructor(translate) {
      this.translate = translate;
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_0__.URLS;
      this.PAGE = src_app_shared_components_set_user_image_set_user_image_component__WEBPACK_IMPORTED_MODULE_1__.PAGE;
    }
    static #_ = this.ɵfac = function WelcomePhotoComponent_Factory(t) {
      return new (t || WelcomePhotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: WelcomePhotoComponent,
      selectors: [["app-welcome-photo"]],
      decls: 10,
      vars: 7,
      consts: [[3, "page"], [1, "text-3xl", "mb-3", "font-bold"], [1, "last-word"], [1, "text-xl", "font-bold"]],
      template: function WelcomePhotoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-set-user-image", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "avatar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("page", ctx.PAGE.WELCOME_PHOTO);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, "WELCOME_PHOTO_PAGE.TITLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 5, "WELCOME_PHOTO_PAGE.CONTENT"));
        }
      },
      dependencies: [src_app_shared_components_set_user_image_set_user_image_component__WEBPACK_IMPORTED_MODULE_1__.SetUserImageComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
      styles: [".last-word[_ngcontent-%COMP%] {\n  color: #FFAA2B;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvd2VsY29tZS1waG90by9jb21wb25lbnRzL3dlbGNvbWUtcGhvdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubGFzdC13b3JkIHtcbiAgY29sb3I6ICNGRkFBMkI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_welcome_photo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/welcome-photo.component */ 2890);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/container/container.component */ 2580);
/* harmony import */ var _welcome_photo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-photo-routing.module */ 1243);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/fileupload */ 8285);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ 8313);
/* harmony import */ var _shared_components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/image-cropper/image-cropper.component */ 9648);
/* harmony import */ var _shared_components_set_user_image_set_user_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/set-user-image/set-user-image.component */ 7292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);












let WelcomePhotoModule = /*#__PURE__*/(() => {
  class WelcomePhotoModule {
    static #_ = this.ɵfac = function WelcomePhotoModule_Factory(t) {
      return new (t || WelcomePhotoModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: WelcomePhotoModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__.ContainerComponent, _welcome_photo_routing_module__WEBPACK_IMPORTED_MODULE_2__.WelcomePhotoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__.FileUploadModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.ToastModule, _shared_components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_3__.ImageCropperComponent, _shared_components_set_user_image_set_user_image_component__WEBPACK_IMPORTED_MODULE_4__.SetUserImageComponent]
    });
  }
  return WelcomePhotoModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](WelcomePhotoModule, {
    declarations: [_components_welcome_photo_component__WEBPACK_IMPORTED_MODULE_0__.WelcomePhotoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__.ContainerComponent, _welcome_photo_routing_module__WEBPACK_IMPORTED_MODULE_2__.WelcomePhotoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__.FileUploadModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.ToastModule, _shared_components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_3__.ImageCropperComponent, _shared_components_set_user_image_set_user_image_component__WEBPACK_IMPORTED_MODULE_4__.SetUserImageComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=740.js.map