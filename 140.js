"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[140],{

/***/ 95614:
/*!*********************************************************!*\
  !*** ./src/app/pages/post/components/post.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostPageComponent: () => (/* binding */ PostPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 81383);





let PostPageComponent = /*#__PURE__*/(() => {
  class PostPageComponent {
    constructor(route, store) {
      this.route = route;
      this.store = store;
      this.route.params.subscribe(params => {
        this.postId = params['id'];
      });
    }
    static #_ = this.ɵfac = function PostPageComponent_Factory(t) {
      return new (t || PostPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostPageComponent,
      selectors: [["app-post-page"]],
      decls: 1,
      vars: 0,
      consts: [[1, "content", "align-center"]],
      template: function PostPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: [".content[_ngcontent-%COMP%] {\n  padding: 20px 0 100px;\n}\n.content[_ngcontent-%COMP%]   app-post[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcG9zdC9jb21wb25lbnRzL3Bvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgcGFkZGluZzogMjBweCAwIDEwMHB4O1xuXG4gIGFwcC1wb3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return PostPageComponent;
})();

/***/ }),

/***/ 74757:
/*!***************************************************!*\
  !*** ./src/app/pages/post/post-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostRoutingModule: () => (/* binding */ PostRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 61611);
/* harmony import */ var _components_post_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/post.component */ 95614);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @enums/urls */ 94317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);







const routes = [{
  path: _enums_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.ID,
  component: _components_post_component__WEBPACK_IMPORTED_MODULE_0__.PostPageComponent
}];
let PostRoutingModule = /*#__PURE__*/(() => {
  class PostRoutingModule {
    static #_ = this.ɵfac = function PostRoutingModule_Factory(t) {
      return new (t || PostRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: PostRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
  return PostRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PostRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 140:
/*!*******************************************!*\
  !*** ./src/app/pages/post/post.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostModule: () => (/* binding */ PostModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _post_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-routing.module */ 74757);
/* harmony import */ var _components_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/post.component */ 95614);
/* harmony import */ var _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/post-card/post-card.component */ 23621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);





let PostModule = /*#__PURE__*/(() => {
  class PostModule {
    static #_ = this.ɵfac = function PostModule_Factory(t) {
      return new (t || PostModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: PostModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _post_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostRoutingModule, _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__.PostCardComponent]
    });
  }
  return PostModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PostModule, {
    declarations: [_components_post_component__WEBPACK_IMPORTED_MODULE_1__.PostPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _post_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostRoutingModule, _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_2__.PostCardComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=140.js.map