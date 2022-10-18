(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_in2art_pages_publicacio-post_publicacio-post_module_ts"],{

/***/ 44254:
/*!********************************************************************************!*\
  !*** ./src/app/in2art/pages/publicacio-post/publicacio-post-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicacioPostRoutingModule": function() { return /* binding */ PublicacioPostRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _publicacio_post_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publicacio-post.component */ 22467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [{
        path: '',
        children: [
            {
                path: '',
                component: _publicacio_post_component__WEBPACK_IMPORTED_MODULE_0__.PublicacioPostComponent
            }
        ]
    }];
class PublicacioPostRoutingModule {
}
PublicacioPostRoutingModule.ɵfac = function PublicacioPostRoutingModule_Factory(t) { return new (t || PublicacioPostRoutingModule)(); };
PublicacioPostRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PublicacioPostRoutingModule });
PublicacioPostRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PublicacioPostRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 22467:
/*!***************************************************************************!*\
  !*** ./src/app/in2art/pages/publicacio-post/publicacio-post.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicacioPostComponent": function() { return /* binding */ PublicacioPostComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/main.service */ 18607);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_in2art_components_publicacio_publicacio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/in2art/components/publicacio/publicacio.component */ 57493);





const _c0 = ["publicacioComponent"];
class PublicacioPostComponent {
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
PublicacioPostComponent.ɵfac = function PublicacioPostComponent_Factory(t) { return new (t || PublicacioPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
PublicacioPostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PublicacioPostComponent, selectors: [["app-publicacio-post"]], viewQuery: function PublicacioPostComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.publicacioComponent = _t.first);
    } }, decls: 3, vars: 1, consts: [[1, "content", "content-l"], [3, "postId"], ["publicacioComponent", ""]], template: function PublicacioPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-publicacio", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("postId", ctx.params.postId);
    } }, directives: [src_app_in2art_components_publicacio_publicacio_component__WEBPACK_IMPORTED_MODULE_1__.PublicacioComponent], styles: [".content[_ngcontent-%COMP%] {\n  padding: 20px 0 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpY2FjaW8tcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FBQ0oiLCJmaWxlIjoicHVibGljYWNpby1wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjBweCAwIDYwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 11719:
/*!************************************************************************!*\
  !*** ./src/app/in2art/pages/publicacio-post/publicacio-post.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicacioPostModule": function() { return /* binding */ PublicacioPostModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var _publicacio_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publicacio-post.component */ 22467);
/* harmony import */ var _publicacio_post_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publicacio-post-routing.module */ 44254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);





class PublicacioPostModule {
}
PublicacioPostModule.ɵfac = function PublicacioPostModule_Factory(t) { return new (t || PublicacioPostModule)(); };
PublicacioPostModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PublicacioPostModule });
PublicacioPostModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _publicacio_post_routing_module__WEBPACK_IMPORTED_MODULE_2__.PublicacioPostRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PublicacioPostModule, { declarations: [_publicacio_post_component__WEBPACK_IMPORTED_MODULE_1__.PublicacioPostComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _publicacio_post_routing_module__WEBPACK_IMPORTED_MODULE_2__.PublicacioPostRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_in2art_pages_publicacio-post_publicacio-post_module_ts-es2015.js.map