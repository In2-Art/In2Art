"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[312],{

/***/ 21132:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-inputtextarea.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputTextarea: () => (/* binding */ InputTextarea),
/* harmony export */   InputTextareaModule: () => (/* binding */ InputTextareaModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 71904);





/**
 * InputTextarea adds styling and autoResize functionality to standard textarea element.
 * @group Components
 */
let InputTextarea = /*#__PURE__*/(() => {
  class InputTextarea {
    el;
    ngModel;
    control;
    cd;
    /**
     * When present, textarea size changes as being typed.
     * @group Props
     */
    autoResize;
    /**
     * Callback to invoke on textarea resize.
     * @param {(Event | {})} event - Custom resize event.
     * @group Emits
     */
    onResize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    filled;
    cachedScrollHeight;
    ngModelSubscription;
    ngControlSubscription;
    constructor(el, ngModel, control, cd) {
      this.el = el;
      this.ngModel = ngModel;
      this.control = control;
      this.cd = cd;
    }
    ngOnInit() {
      if (this.ngModel) {
        this.ngModelSubscription = this.ngModel.valueChanges.subscribe(() => {
          this.updateState();
        });
      }
      if (this.control) {
        this.ngControlSubscription = this.control.valueChanges.subscribe(() => {
          this.updateState();
        });
      }
    }
    ngAfterViewInit() {
      if (this.autoResize) this.resize();
      this.updateFilledState();
      this.cd.detectChanges();
    }
    onInput(e) {
      this.updateState();
    }
    updateFilledState() {
      this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
    }
    resize(event) {
      this.el.nativeElement.style.height = 'auto';
      this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
      if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
        this.el.nativeElement.style.overflowY = 'scroll';
        this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
      } else {
        this.el.nativeElement.style.overflow = 'hidden';
      }
      this.onResize.emit(event || {});
    }
    updateState() {
      this.updateFilledState();
      if (this.autoResize) {
        this.resize();
      }
    }
    ngOnDestroy() {
      if (this.ngModelSubscription) {
        this.ngModelSubscription.unsubscribe();
      }
      if (this.ngControlSubscription) {
        this.ngControlSubscription.unsubscribe();
      }
    }
    static ɵfac = function InputTextarea_Factory(t) {
      return new (t || InputTextarea)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: InputTextarea,
      selectors: [["", "pInputTextarea", ""]],
      hostAttrs: [1, "p-inputtextarea", "p-inputtext", "p-component", "p-element"],
      hostVars: 4,
      hostBindings: function InputTextarea_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputTextarea_input_HostBindingHandler($event) {
            return ctx.onInput($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-filled", ctx.filled)("p-inputtextarea-resizable", ctx.autoResize);
        }
      },
      inputs: {
        autoResize: "autoResize"
      },
      outputs: {
        onResize: "onResize"
      }
    });
  }
  return InputTextarea;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let InputTextareaModule = /*#__PURE__*/(() => {
  class InputTextareaModule {
    static ɵfac = function InputTextareaModule_Factory(t) {
      return new (t || InputTextareaModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InputTextareaModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
  return InputTextareaModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=common.js.map