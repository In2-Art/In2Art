(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_in2art_pages_test_test_module_ts"],{

/***/ 86323:
/*!**********************************************************!*\
  !*** ./src/app/in2art/pages/test/test-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestRoutingModule": function() { return /* binding */ TestRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.component */ 4592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [{
        path: '',
        children: [
            {
                path: '',
                component: _test_component__WEBPACK_IMPORTED_MODULE_0__.TestComponent
            }
        ]
    }];
class TestRoutingModule {
}
TestRoutingModule.ɵfac = function TestRoutingModule_Factory(t) { return new (t || TestRoutingModule)(); };
TestRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TestRoutingModule });
TestRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4592:
/*!*****************************************************!*\
  !*** ./src/app/in2art/pages/test/test.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestComponent": function() { return /* binding */ TestComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/main.service */ 18607);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_user_info_foto_perfil_foto_perfil_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/user-info/foto-perfil/foto-perfil.component */ 52839);





function TestComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-foto-perfil", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", 25);
} }
class TestComponent {
    constructor(main) {
        this.main = main;
        main.newPage(this);
        if (!main.debug)
            main.router.navigate(["/"]);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () { });
    }
    ngOnDestroy() { this.main.onDestroyPage(); }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService)); };
TestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 1, vars: 1, consts: [["class", "content", 4, "ngIf"], [1, "content"], [3, "id"]], template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TestComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.main.debug);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _components_user_info_foto_perfil_foto_perfil_component__WEBPACK_IMPORTED_MODULE_1__.FotoPerfilComponent], styles: [".content[_ngcontent-%COMP%] {\n  max-width: 940px;\n  padding: 20px 0 60px;\n}\n.content[_ngcontent-%COMP%]   app-publicacio[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFDSTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQUNSIiwiZmlsZSI6InRlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBtYXgtd2lkdGg6IDk0MHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAwIDYwcHg7XHJcblxyXG4gICAgYXBwLXB1YmxpY2FjaW8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICBhcHAtZm90by1wZXJmaWwge1xyXG4gICAgICAgIC8vIHdpZHRoOiAyMDBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 63094:
/*!**************************************************!*\
  !*** ./src/app/in2art/pages/test/test.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestModule": function() { return /* binding */ TestModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var _test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.component */ 4592);
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-routing.module */ 86323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);





class TestModule {
}
TestModule.ɵfac = function TestModule_Factory(t) { return new (t || TestModule)(); };
TestModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TestModule });
TestModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _test_routing_module__WEBPACK_IMPORTED_MODULE_2__.TestRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TestModule, { declarations: [_test_component__WEBPACK_IMPORTED_MODULE_1__.TestComponent], imports: [_test_routing_module__WEBPACK_IMPORTED_MODULE_2__.TestRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_in2art_pages_test_test_module_ts-es2015.js.map