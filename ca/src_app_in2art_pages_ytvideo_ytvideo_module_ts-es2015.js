(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_in2art_pages_ytvideo_ytvideo_module_ts"],{

/***/ 60430:
/*!****************************************************************!*\
  !*** ./src/app/in2art/pages/ytvideo/ytvideo-routing.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YtvideoRoutingModule": function() { return /* binding */ YtvideoRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ytvideo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ytvideo.component */ 23661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [{
        path: '',
        children: [
            {
                path: '',
                component: _ytvideo_component__WEBPACK_IMPORTED_MODULE_0__.YtvideoComponent
            }
        ]
    }];
class YtvideoRoutingModule {
}
YtvideoRoutingModule.ɵfac = function YtvideoRoutingModule_Factory(t) { return new (t || YtvideoRoutingModule)(); };
YtvideoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: YtvideoRoutingModule });
YtvideoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](YtvideoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 23661:
/*!***********************************************************!*\
  !*** ./src/app/in2art/pages/ytvideo/ytvideo.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YtvideoComponent": function() { return /* binding */ YtvideoComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/main.service */ 18607);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);




class YtvideoComponent {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.url = this.main.sanitizeVideoURL(`https://www.youtube-nocookie.com/embed/${this.params.id}`);
            this.video = yield this.main.provider.getVideoYoutube(this.params.id);
            // this.titol = "COLORIST APPRECIATION DAY - THE HISTORY BEHIND THIS FESTIVITY - MEET JORDIE BELLAIRE - IN2ART";
            this.data = "24/01/2022";
            // this.descripcio = "Today, January 24th is the Colorist Appreciation Day. This celebration started unexpectedly in 2013, from a Tumblr post by Jordie ...";
            this.titol = this.video.items[0].snippet.title;
            this.descripcio = this.video.items[0].snippet.description;
        });
    }
    ngOnDestroy() { this.main.onDestroyPage(); }
}
YtvideoComponent.ɵfac = function YtvideoComponent_Factory(t) { return new (t || YtvideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
YtvideoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: YtvideoComponent, selectors: [["app-ytvideo"]], decls: 13, vars: 5, consts: [[1, "content"], [1, "card"], [1, "card-body"], [1, "grupVideo", "row", "no-gutters"], [1, "col-12", "col-md-4", "order-2", "order-md-1", "infoVideo"], [1, "titol"], [1, "data"], [1, "descripcio"], [1, "col-12", "col-md-8", "order-1", "order-md-2", "video"], ["width", "48000", "height", "36000", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src", "title"]], template: function YtvideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "iframe", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.titol);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.descripcio);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"])("title", ctx.titol);
    } }, styles: [".content[_ngcontent-%COMP%] {\n  max-width: var(--breakpoint-xl);\n  padding: 100px 0;\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   .grupVideo[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  margin-bottom: 100px;\n  transition: all 0.5s;\n}\n.content[_ngcontent-%COMP%]   .grupVideo[_ngcontent-%COMP%]   .infoVideo[_ngcontent-%COMP%] {\n  padding-right: 40px;\n  text-align: left;\n}\n.content[_ngcontent-%COMP%]   .grupVideo[_ngcontent-%COMP%]   .infoVideo[_ngcontent-%COMP%]   .titol[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  text-transform: lowercase;\n}\n.content[_ngcontent-%COMP%]   .grupVideo[_ngcontent-%COMP%]   .infoVideo[_ngcontent-%COMP%]   .titol[_ngcontent-%COMP%]:first-letter {\n  text-transform: uppercase;\n}\n.content[_ngcontent-%COMP%]   .grupVideo[_ngcontent-%COMP%]   .infoVideo[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: gray;\n}\n.content[_ngcontent-%COMP%]   .grupVideo[_ngcontent-%COMP%]   .infoVideo[_ngcontent-%COMP%]   .descripcio[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: gray;\n}\n.content[_ngcontent-%COMP%]   .grupVideo[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] {\n  min-height: 480px;\n  margin-bottom: 20px;\n}\n.content[_ngcontent-%COMP%]   .grupVideo[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.content[_ngcontent-%COMP%]   .grupVideos[_ngcontent-%COMP%] {\n  max-width: var(--breakpoint-xl);\n  margin: 0 auto 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInl0dmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7QUFBSjtBQUlJO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBRUEsb0JBQUE7RUFDQSxvQkFBQTtBQUhSO0FBT1E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBTFo7QUFPWTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUFMaEI7QUFNZ0I7RUFBaUIseUJBQUE7QUFIakM7QUFLWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBSGhCO0FBS1k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUhoQjtBQU1RO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQUpaO0FBTVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUpoQjtBQVNJO0VBQ0ksK0JBQUE7RUFDQSxvQkFBQTtBQVBSIiwiZmlsZSI6Inl0dmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBtYXgtd2lkdGg6IHZhcigtLWJyZWFrcG9pbnQteGwpO1xyXG4gICAgcGFkZGluZzogMTAwcHggMDtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuXHJcblxyXG4gICAgLmdydXBWaWRlbyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICAuaW5mb1ZpZGVvIHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC50aXRvbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAmOmZpcnN0LWxldHRlciB7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGF0YSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcGNpbyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudmlkZW8ge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0ODBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZ3J1cFZpZGVvcyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS1icmVha3BvaW50LXhsKTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAyMDBweDtcclxuICAgIH1cclxufVxyXG4gICAgICAgIFxyXG5cclxuLy8gLmNvbnRlbnQge1xyXG4gICAgLy8gbWF4LXdpZHRoOiA5NDBweDtcclxuICAgIC8vICAgICBtYXJnaW46IDIwcHggYXV0byA2MHB4O1xyXG4vLyAgICAgaWZyYW1lIHtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4iXX0= */"] });


/***/ }),

/***/ 73540:
/*!********************************************************!*\
  !*** ./src/app/in2art/pages/ytvideo/ytvideo.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YtvideoModule": function() { return /* binding */ YtvideoModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var _ytvideo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ytvideo.component */ 23661);
/* harmony import */ var _ytvideo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ytvideo-routing.module */ 60430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);





class YtvideoModule {
}
YtvideoModule.ɵfac = function YtvideoModule_Factory(t) { return new (t || YtvideoModule)(); };
YtvideoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: YtvideoModule });
YtvideoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _ytvideo_routing_module__WEBPACK_IMPORTED_MODULE_2__.YtvideoRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](YtvideoModule, { declarations: [_ytvideo_component__WEBPACK_IMPORTED_MODULE_1__.YtvideoComponent], imports: [_ytvideo_routing_module__WEBPACK_IMPORTED_MODULE_2__.YtvideoRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_in2art_pages_ytvideo_ytvideo_module_ts-es2015.js.map