"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[876],{

/***/ 9117:
/*!***************************************************************************!*\
  !*** ./src/app/pages/new/components/new-artwork/new-artwork.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewArtworkComponent: () => (/* binding */ NewArtworkComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/container/container.component */ 2580);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 5939);








function NewArtworkComponent_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_TITLE"), " ");
  }
}
let NewArtworkComponent = /*#__PURE__*/(() => {
  class NewArtworkComponent {
    constructor() {
      this.newArtworkForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
        post: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
          file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
        }),
        languages: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
          technique: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
          dimensions: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
          material: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
          preservation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
          location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
          others: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
        }),
        dateParams: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
          date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
          dateFormatType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
          afterChrist: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(false)
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
        isArtistUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
        price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(0)
      });
    }
    onSubmit() {
      console.log(this.newArtworkForm.value);
    }
    static #_ = this.ɵfac = function NewArtworkComponent_Factory(t) {
      return new (t || NewArtworkComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NewArtworkComponent,
      selectors: [["app-new-artwork"]],
      decls: 15,
      vars: 11,
      consts: [[3, "width"], [1, "mb-3", "flex", "align-items-center", "justify-content-center", "flex-column"], [1, "font-bold", "text-2xl", "mb-3", "w-full", "flex", "justify-content-center"], [1, "w-full", 3, "formGroup", "ngSubmit"], ["header", "Main information", 1, "w-full"], [1, "mb-3", "input-group"], ["for", "title", 1, "block", "font-normal"], ["type", "text", "id", "title", "pInputText", "", "formControlName", "title", 1, "w-full"], ["class", "error-message text-sm text-red-400", 4, "ngIf"], ["header", "Artwork Date", 1, "w-full", 3, "toggleable"], ["header", "Additional Information", 1, "w-full", 3, "toggleable"], [1, "error-message", "text-sm", "text-red-400"]],
      template: function NewArtworkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-container", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NewArtworkComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p-panel", 4)(7, "div", 5)(8, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NewArtworkComponent_small_12_Template, 3, 3, "small", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p-panel", 9)(14, "p-panel", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_4_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 800);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "NEW_PAGE.ARTWORK.TITLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.newArtworkForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 9, "LABEL.TITLE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.newArtworkForm.get("title")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx.newArtworkForm.get("title")) == null ? null : tmp_4_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("toggleable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("toggleable", true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_0__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, primeng_panel__WEBPACK_IMPORTED_MODULE_4__.Panel, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return NewArtworkComponent;
})();

/***/ }),

/***/ 85:
/*!*************************************************!*\
  !*** ./src/app/pages/new/new-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewRoutingModule: () => (/* binding */ NewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @enums/urls */ 5500);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 862);
/* harmony import */ var _components_new_artwork_new_artwork_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/new-artwork/new-artwork.component */ 9117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: _enums_urls__WEBPACK_IMPORTED_MODULE_0__.URLS.ARTWORK,
  component: _components_new_artwork_new_artwork_component__WEBPACK_IMPORTED_MODULE_1__.NewArtworkComponent
}];
let NewRoutingModule = /*#__PURE__*/(() => {
  class NewRoutingModule {
    static #_ = this.ɵfac = function NewRoutingModule_Factory(t) {
      return new (t || NewRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: NewRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
  return NewRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NewRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 8876:
/*!*****************************************!*\
  !*** ./src/app/pages/new/new.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewModule: () => (/* binding */ NewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_new_artwork_new_artwork_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/new-artwork/new-artwork.component */ 9117);
/* harmony import */ var _new_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-routing.module */ 85);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/container/container.component */ 2580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/chips */ 8061);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);









let NewModule = /*#__PURE__*/(() => {
  class NewModule {
    static #_ = this.ɵfac = function NewModule_Factory(t) {
      return new (t || NewModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: NewModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _new_routing_module__WEBPACK_IMPORTED_MODULE_1__.NewRoutingModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, primeng_panel__WEBPACK_IMPORTED_MODULE_7__.PanelModule, primeng_chips__WEBPACK_IMPORTED_MODULE_8__.ChipsModule]
    });
  }
  return NewModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NewModule, {
    declarations: [_components_new_artwork_new_artwork_component__WEBPACK_IMPORTED_MODULE_0__.NewArtworkComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _new_routing_module__WEBPACK_IMPORTED_MODULE_1__.NewRoutingModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, primeng_panel__WEBPACK_IMPORTED_MODULE_7__.PanelModule, primeng_chips__WEBPACK_IMPORTED_MODULE_8__.ChipsModule]
  });
})();

/***/ }),

/***/ 8061:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-chips.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHIPS_VALUE_ACCESSOR: () => (/* binding */ CHIPS_VALUE_ACCESSOR),
/* harmony export */   Chips: () => (/* binding */ Chips),
/* harmony export */   ChipsModule: () => (/* binding */ ChipsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/times */ 8993);
/* harmony import */ var primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/timescircle */ 7800);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 5861);










const _c0 = ["inputtext"];
const _c1 = ["container"];
function Chips_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Chips_li_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.field ? ctx_r8.resolveFieldData(item_r4, ctx_r8.field) : item_r4);
  }
}
function Chips_li_3_ng_container_4_TimesCircleIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesCircleIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Chips_li_3_ng_container_4_TimesCircleIcon_1_Template_TimesCircleIcon_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.removeItem($event, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-chips-token-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "removeTokenIcon")("aria-hidden", true);
  }
}
function Chips_li_3_ng_container_4_span_2_1_ng_template_0_Template(rf, ctx) {}
function Chips_li_3_ng_container_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Chips_li_3_ng_container_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Chips_li_3_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Chips_li_3_ng_container_4_span_2_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.removeItem($event, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Chips_li_3_ng_container_4_span_2_1_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "removeTokenIcon")("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r12.removeTokenIconTemplate);
  }
}
function Chips_li_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Chips_li_3_ng_container_4_TimesCircleIcon_1_Template, 1, 3, "TimesCircleIcon", 13)(2, Chips_li_3_ng_container_4_span_2_Template, 2, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.removeTokenIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.removeTokenIconTemplate);
  }
}
const _c2 = a1 => ({
  "p-chips-token": true,
  "p-focus": a1
});
const _c3 = a0 => ({
  $implicit: a0
});
function Chips_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Chips_li_3_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const item_r4 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.onItemClick($event, item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Chips_li_3_ng_container_2_Template, 1, 0, "ng-container", 10)(3, Chips_li_3_span_3_Template, 2, 2, "span", 11)(4, Chips_li_3_ng_container_4_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, ctx_r1.focusedIndex === i_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.id + "_chips_item_" + i_r5)("ariaLabel", item_r4)("aria-selected", true)("aria-setsize", ctx_r1.value.length)("aria-posinset", i_r5 + 1)("data-p-focused", ctx_r1.focusedIndex === i_r5)("data-pc-section", "token");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c3, item_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.disabled);
  }
}
function Chips_li_7_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Chips_li_7_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r25.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-chips-clear-icon");
  }
}
function Chips_li_7_span_2_1_ng_template_0_Template(rf, ctx) {}
function Chips_li_7_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Chips_li_7_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Chips_li_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Chips_li_7_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Chips_li_7_span_2_1_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r24.clearIconTemplate);
  }
}
function Chips_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Chips_li_7_TimesIcon_1_Template, 1, 1, "TimesIcon", 13)(2, Chips_li_7_span_2_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.clearIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.clearIconTemplate);
  }
}
const _c4 = (a1, a2, a3, a4) => ({
  "p-chips p-component p-input-wrapper": true,
  "p-disabled": a1,
  "p-focus": a2,
  "p-inputwrapper-filled": a3,
  "p-inputwrapper-focus": a4
});
const _c5 = () => ({
  "p-inputtext p-chips-multiple-container": true
});
const _c6 = a0 => ({
  "p-chips-clearable": a0
});
const CHIPS_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Chips),
  multi: true
};
/**
 * Chips groups a collection of contents in tabs.
 * @group Components
 */
let Chips = /*#__PURE__*/(() => {
  class Chips {
    document;
    el;
    cd;
    /**
     * Inline style of the element.
     * @group Props
     */
    style;
    /**
     * Style class of the element.
     * @group Props
     */
    styleClass;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled;
    /**
     * Name of the property to display on a chip.
     * @group Props
     */
    field;
    /**
     * Advisory information to display on input.
     * @group Props
     */
    placeholder;
    /**
     * Maximum number of entries allowed.
     * @group Props
     */
    max;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex;
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId;
    /**
     * Whether to allow duplicate values or not.
     * @group Props
     */
    allowDuplicate = true;
    /**
     * Defines whether duplication check should be case-sensitive
     * @group Props
     */
    caseSensitiveDuplication = true;
    /**
     * Inline style of the input field.
     * @group Props
     */
    inputStyle;
    /**
     * Style class of the input field.
     * @group Props
     */
    inputStyleClass;
    /**
     * Whether to add an item on tab key press.
     * @group Props
     */
    addOnTab;
    /**
     * Whether to add an item when the input loses focus.
     * @group Props
     */
    addOnBlur;
    /**
     * Separator char to add an item when pressed in addition to the enter key.
     * @group Props
     */
    separator;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear = false;
    /**
     * Callback to invoke on chip add.
     * @param {ChipsAddEvent} event - Custom chip add event.
     * @group Emits
     */
    onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on chip remove.
     * @param {ChipsRemoveEvent} event - Custom chip remove event.
     * @group Emits
     */
    onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on focus of input field.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on blur of input field.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on chip clicked.
     * @param {ChipsClickEvent} event - Custom chip click event.
     * @group Emits
     */
    onChipClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on clear token clicked.
     * @group Emits
     */
    onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    inputViewChild;
    containerViewChild;
    templates;
    itemTemplate;
    removeTokenIconTemplate;
    clearIconTemplate;
    value;
    onModelChange = () => {};
    onModelTouched = () => {};
    valueChanged;
    id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
    focused;
    focusedIndex;
    filled;
    get focusedOptionId() {
      return this.focusedIndex !== null ? `${this.id}_chips_item_${this.focusedIndex}` : null;
    }
    get isMaxedOut() {
      return this.max && this.value && this.max === this.value.length;
    }
    constructor(document, el, cd) {
      this.document = document;
      this.el = el;
      this.cd = cd;
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'item':
            this.itemTemplate = item.template;
            break;
          case 'removetokenicon':
            this.removeTokenIconTemplate = item.template;
            break;
          case 'clearicon':
            this.clearIconTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
      this.updateFilledState();
    }
    onWrapperClick() {
      this.inputViewChild?.nativeElement.focus();
    }
    onContainerFocus() {
      this.focused = true;
    }
    onContainerBlur() {
      this.focusedIndex = -1;
      this.focused = false;
    }
    onContainerKeyDown(event) {
      switch (event.code) {
        case 'ArrowLeft':
          this.onArrowLeftKeyOn();
          break;
        case 'ArrowRight':
          this.onArrowRightKeyOn();
          break;
        case 'Backspace':
          this.onBackspaceKeyOn(event);
          break;
        default:
          break;
      }
    }
    onArrowLeftKeyOn() {
      if (this.inputViewChild.nativeElement.value.length === 0 && this.value && this.value.length > 0) {
        this.focusedIndex = this.focusedIndex === null ? this.value.length - 1 : this.focusedIndex - 1;
        if (this.focusedIndex < 0) this.focusedIndex = 0;
      }
    }
    onArrowRightKeyOn() {
      if (this.inputViewChild.nativeElement.value.length === 0 && this.value && this.value.length > 0) {
        if (this.focusedIndex === this.value.length - 1) {
          this.focusedIndex = null;
          this.inputViewChild?.nativeElement.focus();
        } else {
          this.focusedIndex++;
        }
      }
    }
    onBackspaceKeyOn(event) {
      if (this.focusedIndex !== null) {
        this.removeItem(event, this.focusedIndex);
      }
    }
    onInput() {
      this.updateFilledState();
      this.focusedIndex = null;
    }
    onPaste(event) {
      if (!this.disabled) {
        if (this.separator) {
          const pastedData = (event.clipboardData || this.document.defaultView['clipboardData']).getData('Text');
          pastedData.split(this.separator).forEach(val => {
            this.addItem(event, val, true);
          });
          this.inputViewChild.nativeElement.value = '';
        }
        this.updateFilledState();
      }
    }
    updateFilledState() {
      if (!this.value || this.value.length === 0) {
        this.filled = this.inputViewChild && this.inputViewChild.nativeElement && this.inputViewChild.nativeElement.value != '';
      } else {
        this.filled = true;
      }
    }
    onItemClick(event, item) {
      this.onChipClick.emit({
        originalEvent: event,
        value: item
      });
    }
    writeValue(value) {
      this.value = value;
      this.updateMaxedOut();
      this.updateFilledState();
      this.cd.markForCheck();
    }
    registerOnChange(fn) {
      this.onModelChange = fn;
    }
    registerOnTouched(fn) {
      this.onModelTouched = fn;
    }
    setDisabledState(val) {
      this.disabled = val;
      this.cd.markForCheck();
    }
    resolveFieldData(data, field) {
      if (data && field) {
        if (field.indexOf('.') == -1) {
          return data[field];
        } else {
          let fields = field.split('.');
          let value = data;
          for (var i = 0, len = fields.length; i < len; ++i) {
            value = value[fields[i]];
          }
          return value;
        }
      } else {
        return null;
      }
    }
    onInputFocus(event) {
      this.focused = true;
      this.focusedIndex = null;
      this.onFocus.emit(event);
    }
    onInputBlur(event) {
      this.focused = false;
      this.focusedIndex = null;
      if (this.addOnBlur && this.inputViewChild.nativeElement.value) {
        this.addItem(event, this.inputViewChild.nativeElement.value, false);
      }
      this.onModelTouched();
      this.onBlur.emit(event);
    }
    removeItem(event, index) {
      if (this.disabled) {
        return;
      }
      let removedItem = this.value[index];
      this.value = this.value.filter((val, i) => i != index);
      this.focusedIndex = null;
      this.inputViewChild.nativeElement.focus();
      this.onModelChange(this.value);
      this.onRemove.emit({
        originalEvent: event,
        value: removedItem
      });
      this.updateFilledState();
      this.updateMaxedOut();
    }
    addItem(event, item, preventDefault) {
      this.value = this.value || [];
      if (item && item.trim().length) {
        const newItemIsDuplicate = this.caseSensitiveDuplication ? this.value.includes(item) : this.value.some(val => val.toLowerCase() === item.toLowerCase());
        if ((this.allowDuplicate || !newItemIsDuplicate) && !this.isMaxedOut) {
          this.value = [...this.value, item];
          this.onModelChange(this.value);
          this.onAdd.emit({
            originalEvent: event,
            value: item
          });
        }
      }
      this.updateFilledState();
      this.updateMaxedOut();
      this.inputViewChild.nativeElement.value = '';
      if (preventDefault) {
        event.preventDefault();
      }
    }
    clear() {
      this.value = null;
      this.updateFilledState();
      this.onModelChange(this.value);
      this.updateMaxedOut();
      this.onClear.emit();
    }
    onKeyDown(event) {
      const inputValue = event.target.value;
      switch (event.code) {
        case 'Backspace':
          if (inputValue.length === 0 && this.value && this.value.length > 0) {
            if (this.focusedIndex !== null) {
              this.removeItem(event, this.focusedIndex);
            } else this.removeItem(event, this.value.length - 1);
          }
          break;
        case 'Enter':
        case 'NumpadEnter':
          if (inputValue && inputValue.trim().length && !this.isMaxedOut) {
            this.addItem(event, inputValue, true);
          }
          break;
        case 'ArrowLeft':
          if (inputValue.length === 0 && this.value && this.value.length > 0) {
            this.containerViewChild?.nativeElement.focus();
          }
          break;
        case 'ArrowRight':
          event.stopPropagation();
          break;
        default:
          if (this.separator) {
            if (this.separator === event.key || event.key.match(this.separator)) {
              this.addItem(event, inputValue, true);
            }
          }
          break;
      }
    }
    updateMaxedOut() {
      if (this.inputViewChild && this.inputViewChild.nativeElement) {
        if (this.isMaxedOut) {
          // Calling `blur` is necessary because firefox does not call `onfocus` events
          // for disabled inputs, unlike chromium browsers.
          this.inputViewChild.nativeElement.blur();
          this.inputViewChild.nativeElement.disabled = true;
        } else {
          if (this.disabled) {
            this.inputViewChild.nativeElement.blur();
          }
          this.inputViewChild.nativeElement.disabled = this.disabled || false;
        }
      }
    }
    static ɵfac = function Chips_Factory(t) {
      return new (t || Chips)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Chips,
      selectors: [["p-chips"]],
      contentQueries: function Chips_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Chips_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element", "p-inputwrapper"],
      hostVars: 6,
      hostBindings: function Chips_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused)("p-chips-clearable", ctx.showClear);
        }
      },
      inputs: {
        style: "style",
        styleClass: "styleClass",
        disabled: "disabled",
        field: "field",
        placeholder: "placeholder",
        max: "max",
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        tabindex: "tabindex",
        inputId: "inputId",
        allowDuplicate: "allowDuplicate",
        caseSensitiveDuplication: "caseSensitiveDuplication",
        inputStyle: "inputStyle",
        inputStyleClass: "inputStyleClass",
        addOnTab: "addOnTab",
        addOnBlur: "addOnBlur",
        separator: "separator",
        showClear: "showClear"
      },
      outputs: {
        onAdd: "onAdd",
        onRemove: "onRemove",
        onFocus: "onFocus",
        onBlur: "onBlur",
        onChipClick: "onChipClick",
        onClear: "onClear"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHIPS_VALUE_ACCESSOR])],
      decls: 8,
      vars: 31,
      consts: [[3, "ngClass", "ngStyle"], ["tabindex", "-1", "role", "listbox", 3, "ngClass", "click", "focus", "blur", "keydown"], ["container", ""], ["role", "option", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["role", "option", 1, "p-chips-input-token", 3, "ngClass"], ["type", "text", 3, "disabled", "ngStyle", "keydown", "input", "paste", "focus", "blur"], ["inputtext", ""], [4, "ngIf"], ["role", "option", 3, "ngClass", "click"], ["token", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-chips-token-label", 4, "ngIf"], [1, "p-chips-token-label"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-chips-token-icon", 3, "click", 4, "ngIf"], [3, "styleClass", "click"], [1, "p-chips-token-icon", 3, "click"], [4, "ngTemplateOutlet"], ["class", "p-chips-clear-icon", 3, "click", 4, "ngIf"], [1, "p-chips-clear-icon", 3, "click"]],
      template: function Chips_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Chips_Template_ul_click_1_listener() {
            return ctx.onWrapperClick();
          })("focus", function Chips_Template_ul_focus_1_listener() {
            return ctx.onContainerFocus();
          })("blur", function Chips_Template_ul_blur_1_listener() {
            return ctx.onContainerBlur();
          })("keydown", function Chips_Template_ul_keydown_1_listener($event) {
            return ctx.onContainerKeyDown($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Chips_li_3_Template, 5, 16, "li", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4)(5, "input", 5, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Chips_Template_input_keydown_5_listener($event) {
            return ctx.onKeyDown($event);
          })("input", function Chips_Template_input_input_5_listener() {
            return ctx.onInput();
          })("paste", function Chips_Template_input_paste_5_listener($event) {
            return ctx.onPaste($event);
          })("focus", function Chips_Template_input_focus_5_listener($event) {
            return ctx.onInputFocus($event);
          })("blur", function Chips_Template_input_blur_5_listener($event) {
            return ctx.onInputBlur($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Chips_li_7_Template, 3, 2, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](23, _c4, ctx.disabled, ctx.focused, ctx.value && ctx.value.length || (ctx.inputViewChild == null ? null : ctx.inputViewChild.nativeElement.value) && (ctx.inputViewChild == null ? null : ctx.inputViewChild.nativeElement.value.length), ctx.focused))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "chips")("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c5));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-activedescendant", ctx.focused ? ctx.focusedOptionId : undefined)("aria-orientation", "horizontal")("data-pc-section", "container");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c6, ctx.showClear && !ctx.disabled));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "inputToken");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.inputStyleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled || ctx.isMaxedOut)("ngStyle", ctx.inputStyle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("placeholder", ctx.value && ctx.value.length ? null : ctx.placeholder)("tabindex", ctx.tabindex);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value != null && ctx.filled && !ctx.disabled && ctx.showClear);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_5__.TimesCircleIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_6__.TimesIcon],
      styles: ["@layer primeng{.p-chips{display:inline-flex}.p-chips-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-chips-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto;max-width:100%}.p-chips-token-label{min-width:0%;overflow:auto}.p-chips-token-label::-webkit-scrollbar{display:none}.p-chips-input-token{flex:1 1 auto;display:inline-flex}.p-chips-token-icon{cursor:pointer}.p-chips-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-chips{display:flex}.p-chips-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-chips-clearable .p-inputtext{position:relative}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Chips;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ChipsModule = /*#__PURE__*/(() => {
  class ChipsModule {
    static ɵfac = function ChipsModule_Factory(t) {
      return new (t || ChipsModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChipsModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_5__.TimesCircleIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_6__.TimesIcon, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
  return ChipsModule;
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

/***/ 6110:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-panel.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Panel: () => (/* binding */ Panel),
/* harmony export */   PanelModule: () => (/* binding */ PanelModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_icons_minus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/minus */ 8859);
/* harmony import */ var primeng_icons_plus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/plus */ 7186);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 5861);












/**
 * Panel is a container with the optional content toggle feature.
 * @group Components
 */
function Panel_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r3.id + "_header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.header);
  }
}
function Panel_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Panel_div_1_5_ng_template_0_Template(rf, ctx) {}
function Panel_div_1_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Panel_div_1_5_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r12.expandIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r12.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_1_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "MinusIcon", 17);
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", ctx_r13.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Panel_div_1_button_6_ng_container_1_ng_container_1_span_1_Template, 1, 3, "span", 14)(2, Panel_div_1_button_6_ng_container_1_ng_container_1_MinusIcon_2_Template, 1, 1, "MinusIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.expandIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.expandIcon);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r14.collapseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r14.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_2_PlusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "PlusIcon", 17);
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", ctx_r15.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Panel_div_1_button_6_ng_container_1_ng_container_2_span_1_Template, 1, 3, "span", 14)(2, Panel_div_1_button_6_ng_container_1_ng_container_2_PlusIcon_2_Template, 1, 1, "PlusIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.collapseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.collapseIcon);
  }
}
function Panel_div_1_button_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Panel_div_1_button_6_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 12)(2, Panel_div_1_button_6_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.collapsed);
  }
}
function Panel_div_1_button_6_2_ng_template_0_Template(rf, ctx) {}
function Panel_div_1_button_6_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Panel_div_1_button_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c0 = a0 => ({
  $implicit: a0
});
function Panel_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Panel_div_1_button_6_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.onIconClick($event));
    })("keydown", function Panel_div_1_button_6_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Panel_div_1_button_6_ng_container_1_Template, 3, 2, "ng-container", 12)(2, Panel_div_1_button_6_2_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r6.id + "_header")("aria-label", ctx_r6.buttonAriaLabel)("aria-controls", ctx_r6.id + "_content")("aria-expanded", !ctx_r6.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.headerIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.headerIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r6.collapsed));
  }
}
const _c1 = (a0, a1, a2) => ({
  "p-panel-icons-start": a0,
  "p-panel-icons-end": a1,
  "p-panel-icons-center": a2
});
function Panel_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Panel_div_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.onHeaderClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Panel_div_1_span_1_Template, 2, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Panel_div_1_ng_container_3_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Panel_div_1_5_Template, 1, 0, null, 4)(6, Panel_div_1_button_6_Template, 3, 9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r0.id + "-titlebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c1, ctx_r0.iconPos === "start", ctx_r0.iconPos === "end", ctx_r0.iconPos === "center"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.iconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toggleable);
  }
}
function Panel_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Panel_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Panel_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Panel_div_6_ng_container_2_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.footerTemplate);
  }
}
const _c2 = ["*", [["p-header"]], [["p-footer"]]];
const _c3 = (a1, a2) => ({
  "p-panel p-component": true,
  "p-panel-toggleable": a1,
  "p-panel-expanded": a2
});
const _c4 = a0 => ({
  transitionParams: a0,
  height: "0",
  opacity: "0"
});
const _c5 = a1 => ({
  value: "hidden",
  params: a1
});
const _c6 = a0 => ({
  transitionParams: a0,
  height: "*",
  opacity: "1"
});
const _c7 = a1 => ({
  value: "visible",
  params: a1
});
const _c8 = ["*", "p-header", "p-footer"];
let Panel = /*#__PURE__*/(() => {
  class Panel {
    el;
    /**
     * Defines if content of panel can be expanded and collapsed.
     * @group Props
     */
    toggleable;
    /**
     * Header text of the panel.
     * @group Props
     */
    header;
    /**
     * Defines the initial state of panel content, supports one or two-way binding as well.
     * @group Props
     */
    collapsed;
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
     * Position of the icons.
     * @group Props
     */
    iconPos = 'end';
    /**
     * Expand icon of the toggle button.
     * @group Props
     * @deprecated since v15.4.2, use `headericons` template instead.
     */
    expandIcon;
    /**
     * Collapse icon of the toggle button.
     * @group Props
     * @deprecated since v15.4.2, use `headericons` template instead.
     */
    collapseIcon;
    /**
     * Specifies if header of panel cannot be displayed.
     * @group Props
     * @deprecated since v15.4.2, use `headericons` template instead.
     */
    showHeader = true;
    /**
     * Specifies the toggler element to toggle the panel content.
     * @group Props
     */
    toggler = 'icon';
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
    /**
     * Emitted when the collapsed changes.
     * @param {boolean} value - New Value.
     * @group Emits
     */
    collapsedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke before panel toggle.
     * @param {PanelBeforeToggleEvent} event - Custom panel toggle event
     * @group Emits
     */
    onBeforeToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke after panel toggle.
     * @param {PanelAfterToggleEvent} event - Custom panel toggle event
     * @group Emits
     */
    onAfterToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    footerFacet;
    templates;
    iconTemplate;
    animating;
    headerTemplate;
    contentTemplate;
    footerTemplate;
    headerIconTemplate;
    id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)();
    get buttonAriaLabel() {
      return this.header;
    }
    constructor(el) {
      this.el = el;
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
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
          case 'icons':
            this.iconTemplate = item.template;
            break;
          case 'headericons':
            this.headerIconTemplate = item.template;
            break;
          default:
            this.contentTemplate = item.template;
            break;
        }
      });
    }
    onHeaderClick(event) {
      if (this.toggler === 'header') {
        this.toggle(event);
      }
    }
    onIconClick(event) {
      if (this.toggler === 'icon') {
        this.toggle(event);
      }
    }
    toggle(event) {
      if (this.animating) {
        return false;
      }
      this.animating = true;
      this.onBeforeToggle.emit({
        originalEvent: event,
        collapsed: this.collapsed
      });
      if (this.toggleable) {
        if (this.collapsed) this.expand();else this.collapse();
      }
      event.preventDefault();
    }
    expand() {
      this.collapsed = false;
      this.collapsedChange.emit(this.collapsed);
    }
    collapse() {
      this.collapsed = true;
      this.collapsedChange.emit(this.collapsed);
    }
    getBlockableElement() {
      return this.el.nativeElement.children[0];
    }
    onKeyDown(event) {
      if (event.code === 'Enter' || event.code === 'Space') {
        this.toggle(event);
        event.preventDefault();
      }
    }
    onToggleDone(event) {
      this.animating = false;
      this.onAfterToggle.emit({
        originalEvent: event,
        collapsed: this.collapsed
      });
    }
    static ɵfac = function Panel_Factory(t) {
      return new (t || Panel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Panel,
      selectors: [["p-panel"]],
      contentQueries: function Panel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.Footer, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        toggleable: "toggleable",
        header: "header",
        collapsed: "collapsed",
        style: "style",
        styleClass: "styleClass",
        iconPos: "iconPos",
        expandIcon: "expandIcon",
        collapseIcon: "collapseIcon",
        showHeader: "showHeader",
        toggler: "toggler",
        transitionOptions: "transitionOptions"
      },
      outputs: {
        collapsedChange: "collapsedChange",
        onBeforeToggle: "onBeforeToggle",
        onAfterToggle: "onAfterToggle"
      },
      ngContentSelectors: _c8,
      decls: 7,
      vars: 25,
      consts: [[3, "ngClass", "ngStyle"], ["class", "p-panel-header", 3, "click", 4, "ngIf"], ["role", "region", 1, "p-toggleable-content", 3, "id"], [1, "p-panel-content"], [4, "ngTemplateOutlet"], ["class", "p-panel-footer", 4, "ngIf"], [1, "p-panel-header", 3, "click"], ["class", "p-panel-title", 4, "ngIf"], [1, "p-panel-icons", 3, "ngClass"], ["pRipple", "", "type", "button", "role", "button", "class", "p-panel-header-icon p-panel-toggler p-link", 3, "click", "keydown", 4, "ngIf"], [1, "p-panel-title"], ["pRipple", "", "type", "button", "role", "button", 1, "p-panel-header-icon", "p-panel-toggler", "p-link", 3, "click", "keydown"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "ngClass"], [3, "styleClass"], [1, "p-panel-footer"]],
      template: function Panel_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Panel_div_1_Template, 7, 10, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@panelContent.done", function Panel_Template_div_animation_panelContent_done_2_listener($event) {
            return ctx.onToggleDone($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Panel_ng_container_5_Template, 1, 0, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Panel_div_6_Template, 3, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c3, ctx.toggleable, !ctx.collapsed && ctx.toggleable))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("data-pc-name", "panel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showHeader);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id + "_content")("@panelContent", ctx.collapsed ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c4, ctx.animating ? ctx.transitionOptions : "0ms")) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c6, ctx.animating ? ctx.transitionOptions : "0ms")));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx.id + "_header")("aria-hidden", ctx.collapsed)("tabindex", ctx.collapsed ? "-1" : undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerFacet || ctx.footerTemplate);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_5__.PlusIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_6__.MinusIcon],
      styles: ["@layer primeng{.p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-panel-toggleable.p-panel-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-panel-toggleable .p-toggleable-content{overflow:hidden}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('panelContent', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '0'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '{{height}}'
        }), {
          params: {
            height: '0'
          }
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '*'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('visible <=> hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}'))])]
      },
      changeDetection: 0
    });
  }
  return Panel;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let PanelModule = /*#__PURE__*/(() => {
  class PanelModule {
    static ɵfac = function PanelModule_Factory(t) {
      return new (t || PanelModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PanelModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_5__.PlusIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_6__.MinusIcon, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
  return PanelModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=876.js.map