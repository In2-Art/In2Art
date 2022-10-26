(function () {
  var _templateObject;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_in2art_pages_learn_learn_module_ts"], {
    /***/
    83571: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LearnRoutingModule": function LearnRoutingModule() {
          return (
            /* binding */
            _LearnRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _learn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./learn.component */
      27057);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _learn_component__WEBPACK_IMPORTED_MODULE_0__.LearnComponent
        }]
      }];

      var _LearnRoutingModule = function _LearnRoutingModule() {
        _classCallCheck(this, _LearnRoutingModule);
      };

      _LearnRoutingModule.ɵfac = function LearnRoutingModule_Factory(t) {
        return new (t || _LearnRoutingModule)();
      };

      _LearnRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _LearnRoutingModule
      });
      _LearnRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_LearnRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    27057: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LearnComponent": function LearnComponent() {
          return (
            /* binding */
            _LearnComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../services/main.service */
      18607);

      var _LearnComponent = /*#__PURE__*/function () {
        function _LearnComponent(main) {
          _classCallCheck(this, _LearnComponent);

          this.main = main;
          main.newPage(this);
        }

        _createClass(_LearnComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.main.onDestroyPage();
          }
        }]);

        return _LearnComponent;
      }();

      _LearnComponent.ɵfac = function LearnComponent_Factory(t) {
        return new (t || _LearnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
      };

      _LearnComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _LearnComponent,
        selectors: [["app-learn"]],
        decls: 5,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Welcome_to_the_beta_program$$SRC_APP_IN2ART_PAGES_LEARN_LEARN_COMPONENT_TS_1 = goog.getMsg("Welcome to the beta program. We are developing a worldwide academy of art, where everyone can share their knowledge through online classes. This site is currently unavailable, as this is an early version. We are still actively working on this feature, so there might be frequent updates and bugs. Stay tuned! ");
            i18n_0 = MSG_EXTERNAL_Welcome_to_the_beta_program$$SRC_APP_IN2ART_PAGES_LEARN_LEARN_COMPONENT_TS_1;
          } else {
            i18n_0 = "Benvingut al programa beta. Estem desenvolupant una acad\xE8mia d'art mundial, on tothom pot compartir el seu coneixement a trav\xE9s de classes en l\xEDnia.  Aquest lloc no est\xE0 disponible actualment, ja que \xE9s una versi\xF3 primerenca. Encara estem treballant activament en aquesta eina, per la qual cosa pot haver-hi actualitzacions i errors freq\xFCents. Estigues atent!";
          }

          return [[1, "content"], [1, "card"], [1, "card-body"], i18n_0];
        },
        template: function LearnComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](4, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        styles: [".content[_ngcontent-%COMP%] {\n  max-width: 940px;\n  padding: 100px 0;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXJuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRCIsImZpbGUiOiJsZWFybi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRtYXgtd2lkdGg6IDk0MHB4O1xyXG5cdHBhZGRpbmc6IDEwMHB4IDA7XHJcblx0Ym9yZGVyOiBub25lO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    56345: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LearnModule": function LearnModule() {
          return (
            /* binding */
            _LearnModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      86640);
      /* harmony import */


      var _learn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./learn.component */
      27057);
      /* harmony import */


      var _learn_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./learn-routing.module */
      83571);
      /* harmony import */


      var ngb_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngb-modal */
      58603);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LearnModule = function _LearnModule() {
        _classCallCheck(this, _LearnModule);
      };

      _LearnModule.ɵfac = function LearnModule_Factory(t) {
        return new (t || _LearnModule)();
      };

      _LearnModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _LearnModule
      });
      _LearnModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_learn_routing_module__WEBPACK_IMPORTED_MODULE_2__.LearnRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ngb_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_LearnModule, {
          declarations: [_learn_component__WEBPACK_IMPORTED_MODULE_1__.LearnComponent],
          imports: [_learn_routing_module__WEBPACK_IMPORTED_MODULE_2__.LearnRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ngb_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_in2art_pages_learn_learn_module_ts-es5.js.map