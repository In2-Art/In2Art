(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_in2art_pages_publicacio-artwork_publicacio-artwork_module_ts"],{

/***/ 90903:
/*!**************************************************************************************!*\
  !*** ./src/app/in2art/pages/publicacio-artwork/publicacio-artwork-routing.module.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicacioArtworkRoutingModule": function() { return /* binding */ PublicacioArtworkRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _publicacio_artwork_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publicacio-artwork.component */ 25927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [{
        path: '',
        children: [
            {
                path: '',
                component: _publicacio_artwork_component__WEBPACK_IMPORTED_MODULE_0__.PublicacioArtworkComponent
            }
        ]
    }];
class PublicacioArtworkRoutingModule {
}
PublicacioArtworkRoutingModule.ɵfac = function PublicacioArtworkRoutingModule_Factory(t) { return new (t || PublicacioArtworkRoutingModule)(); };
PublicacioArtworkRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PublicacioArtworkRoutingModule });
PublicacioArtworkRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PublicacioArtworkRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 25927:
/*!*********************************************************************************!*\
  !*** ./src/app/in2art/pages/publicacio-artwork/publicacio-artwork.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicacioArtworkComponent": function() { return /* binding */ PublicacioArtworkComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/main.service */ 18607);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_in2art_components_publicacio_publicacio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/in2art/components/publicacio/publicacio.component */ 57493);





const _c0 = ["publicacioComponent"];
class PublicacioArtworkComponent {
    constructor(main, router, route) {
        this.main = main;
        this.router = router;
        this.route = route;
        main.newPage(this);
        // force route reload whenever params change;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.params.subscribe(params => this.params = params);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () { });
    }
    ngOnDestroy() { this.main.onDestroyPage(); }
}
PublicacioArtworkComponent.ɵfac = function PublicacioArtworkComponent_Factory(t) { return new (t || PublicacioArtworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
PublicacioArtworkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PublicacioArtworkComponent, selectors: [["app-publicacio-artwork"]], viewQuery: function PublicacioArtworkComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.publicacioComponent = _t.first);
    } }, decls: 3, vars: 1, consts: [[1, "content", "content-l"], [3, "idObra"], ["publicacioComponent", ""]], template: function PublicacioArtworkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-publicacio", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("idObra", ctx.params.artist);
    } }, directives: [src_app_in2art_components_publicacio_publicacio_component__WEBPACK_IMPORTED_MODULE_1__.PublicacioComponent], styles: [".content[_ngcontent-%COMP%] {\n  padding: 20px 0 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpY2FjaW8tYXJ0d29yay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FBQ0oiLCJmaWxlIjoicHVibGljYWNpby1hcnR3b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjBweCAwIDYwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 41493:
/*!******************************************************************************!*\
  !*** ./src/app/in2art/pages/publicacio-artwork/publicacio-artwork.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicacioArtworkModule": function() { return /* binding */ PublicacioArtworkModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var _publicacio_artwork_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publicacio-artwork.component */ 25927);
/* harmony import */ var _publicacio_artwork_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publicacio-artwork-routing.module */ 90903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);





class PublicacioArtworkModule {
}
PublicacioArtworkModule.ɵfac = function PublicacioArtworkModule_Factory(t) { return new (t || PublicacioArtworkModule)(); };
PublicacioArtworkModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PublicacioArtworkModule });
PublicacioArtworkModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _publicacio_artwork_routing_module__WEBPACK_IMPORTED_MODULE_2__.PublicacioArtworkRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PublicacioArtworkModule, { declarations: [_publicacio_artwork_component__WEBPACK_IMPORTED_MODULE_1__.PublicacioArtworkComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _publicacio_artwork_routing_module__WEBPACK_IMPORTED_MODULE_2__.PublicacioArtworkRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_in2art_pages_publicacio-artwork_publicacio-artwork_module_ts-es2015.js.map