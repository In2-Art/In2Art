(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_in2art_pages_settings_settings_module_ts"], {
    /***/
    33132: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BuscadorComponent": function BuscadorComponent() {
          return (
            /* binding */
            _BuscadorComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../settings.component */
      98932);
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../about/about.component */
      21462);
      /* harmony import */


      var _account_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../account/account.component */
      15530);
      /* harmony import */


      var _security_security_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../security/security.component */
      98028);
      /* harmony import */


      var _support_support_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../support/support.component */
      22411);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _c0 = ["input"];

      var _BuscadorComponent = /*#__PURE__*/function () {
        function _BuscadorComponent() {
          _classCallCheck(this, _BuscadorComponent);

          this.optionsFull = [];
          this.options = null; // Recopilem totes les llistes d'opcions de totes les categories //

          this.optionsFull = this.optionsFull.concat(_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent.options).concat(_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent.options).concat(_account_account_component__WEBPACK_IMPORTED_MODULE_2__.AccountComponent.options).concat(_security_security_component__WEBPACK_IMPORTED_MODULE_3__.SecurityComponent.options).concat(_support_support_component__WEBPACK_IMPORTED_MODULE_4__.SupportComponent.options);
        }

        _createClass(_BuscadorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
          key: "filtrar",
          value: function filtrar(text) {
            if (text == "") this.options = null;else {
              this.options = this.optionsFull.filter(function (e, i) {
                return e.name.toLowerCase().includes(text.toLowerCase());
              });
            }
          }
        }]);

        return _BuscadorComponent;
      }();

      _BuscadorComponent.ɵfac = function BuscadorComponent_Factory(t) {
        return new (t || _BuscadorComponent)();
      };

      _BuscadorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _BuscadorComponent,
        selectors: [["app-buscador"]],
        viewQuery: function BuscadorComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
          }
        },
        decls: 3,
        vars: 0,
        consts: function consts() {
          var i18n_1;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Search___$$SRC_APP_IN2ART_PAGES_SETTINGS__BUSCADOR_BUSCADOR_COMPONENT_TS_2 = goog.getMsg("Search...");
            i18n_1 = MSG_EXTERNAL_Search___$$SRC_APP_IN2ART_PAGES_SETTINGS__BUSCADOR_BUSCADOR_COMPONENT_TS_2;
          } else {
            i18n_1 = "Search...";
          }

          return [["type", "text", "placeholder", i18n_1, 1, "form-camp", 3, "input"], ["input", ""]];
        },
        template: function BuscadorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "input", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function BuscadorComponent_Template_input_input_1_listener($event) {
              return ctx.filtrar($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }
        },
        styles: ["div[_ngcontent-%COMP%] {\n  margin: 20px;\n}\ndiv[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c2NhZG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKO0FBQ0k7RUFDSSxXQUFBO0FBQ1IiLCJmaWxlIjoiYnVzY2Fkb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    50518: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AboutIn2artComponent": function AboutIn2artComponent() {
          return (
            /* binding */
            _AboutIn2artComponent
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
      /*! ./../../../../services/main.service */
      18607);

      var _AboutIn2artComponent = /*#__PURE__*/function () {
        function _AboutIn2artComponent(main) {
          _classCallCheck(this, _AboutIn2artComponent);

          this.main = main;
          main.newPage(this);
        }

        _createClass(_AboutIn2artComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.main.onDestroyPage();
          }
        }]);

        return _AboutIn2artComponent;
      }();

      _AboutIn2artComponent.ɵfac = function AboutIn2artComponent_Factory(t) {
        return new (t || _AboutIn2artComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
      };

      _AboutIn2artComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AboutIn2artComponent,
        selectors: [["app-about-in2art"]],
        decls: 14,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_About_IN2ART$$SRC_APP_IN2ART_PAGES_SETTINGS_ABOUT_ABOUT_IN2ART_ABOUT_IN2ART_COMPONENT_TS_1 = goog.getMsg("About IN2ART");
            i18n_0 = MSG_EXTERNAL_About_IN2ART$$SRC_APP_IN2ART_PAGES_SETTINGS_ABOUT_ABOUT_IN2ART_ABOUT_IN2ART_COMPONENT_TS_1;
          } else {
            i18n_0 = "About IN2ART";
          }

          return [[1, "content", "content-l"], [1, "card"], [1, "card-body"], [1, "titol"], i18n_0, [1, "text"], [1, "jordi"], ["href", "mailto:xordimas@gmail.com"], ["href", "https://github.com/jordimas96"]];
        },
        template: function AboutIn2artComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Jordi Mas Parramon - Main Frontend Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "xordimas@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "https://github.com/jordimas96");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        styles: [".content[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  border: none;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .titol[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 2rem;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LWluMmFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUFaO0FBRVE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBQVoiLCJmaWxlIjoiYWJvdXQtaW4yYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNjBweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIC50aXRvbCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgLy8gd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG5cclxuICAgICAgICAgICAgLmpvcmRpLCAubWFuZWwge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    21462: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AboutComponent": function AboutComponent() {
          return (
            /* binding */
            _AboutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../services/main.service */
      18607);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function AboutComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutComponent_li_6_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var o_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.main.goTo(o_r1.path);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var o_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("boing ", o_r1["class"], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](o_r1.name);
        }
      }

      var _AboutComponent = /*#__PURE__*/function () {
        function _AboutComponent(main) {
          _classCallCheck(this, _AboutComponent);

          this.main = main;
          main.newPage(this);
          this.options = _AboutComponent.options;
        }

        _createClass(_AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.main.onDestroyPage();
          }
        }]);

        return _AboutComponent;
      }();

      _AboutComponent.options = [{
        name: "privacy policy",
        "class": "privacy-policy",
        path: "/settings/about/privacy-policy"
      }, {
        name: "terms of use",
        "class": "terms-of-use",
        path: "/settings/about/terms-of-use"
      }, {
        name: "About IN2ART",
        "class": "about-in2art",
        path: "/settings/about/about-in2art"
      }];

      _AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || _AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
      };

      _AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AboutComponent,
        selectors: [["app-about"]],
        decls: 7,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_About$$SRC_APP_IN2ART_PAGES_SETTINGS_ABOUT_ABOUT_COMPONENT_TS_1 = goog.getMsg("About");
            i18n_0 = MSG_EXTERNAL_About$$SRC_APP_IN2ART_PAGES_SETTINGS_ABOUT_ABOUT_COMPONENT_TS_1;
          } else {
            i18n_0 = "About";
          }

          return [[1, "content"], [1, "card"], [1, "card-body"], [1, "titol"], i18n_0, [4, "ngFor", "ngForOf"], [3, "click"]];
        },
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AboutComponent_li_6_Template, 3, 4, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.options);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
        styles: [".content[_ngcontent-%COMP%] {\n  max-width: 575px;\n  padding: 60px 0;\n  border: none;\n  border-radius: 39px;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p.titol[_ngcontent-%COMP%] {\n  margin: 20px;\n  text-align: center;\n  font-size: 2rem;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: var(--border-card);\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  width: 100%;\n  font-size: 20px;\n  padding: 15px 20px;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-letter {\n  text-transform: capitalize;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.logout[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.delete-account[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.privacy[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.ads[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n@media only screen and (max-width: 576px) {\n  .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p.titol[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFUTtFQUNJLFVBQUE7QUFBWjtBQUVZO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFoQjtBQU1vQjtFQUNJLGlDQUFBO0FBSnhCO0FBT29CO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFOeEI7QUFRd0I7RUFDSSwwQkFBQTtBQU41QjtBQVF3QjtFQUVJLFVBQUE7RUFDQSxpQkFBQTtBQVA1QjtBQVN3QjtFQUVJLFdBQUE7QUFSNUI7QUFtQkE7RUFJZ0I7O0lBRUksZ0JBQUE7RUFuQmxCO0FBQ0YiLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBtYXgtd2lkdGg6IDU3NXB4O1xyXG4gICAgcGFkZGluZzogNjBweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzlweDtcclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICAgICBwLnRpdG9sIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlci1jYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtbGV0dGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5sb2dvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuZGVsZXRlLWFjY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYucHJpdmFjeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5hZHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBNw7JiaWwgLy9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgICAgICBwLnRpdG9sLFxyXG4gICAgICAgICAgICAgICAgdWwgbGkgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    22178: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrivacyPolicyComponent": function PrivacyPolicyComponent() {
          return (
            /* binding */
            _PrivacyPolicyComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../services/main.service */
      18607);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function PrivacyPolicyComponent_iframe_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "iframe", 10);
        }
      }

      function PrivacyPolicyComponent_iframe_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "iframe", 11);
        }
      }

      function PrivacyPolicyComponent_iframe_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "iframe", 12);
        }
      }

      function PrivacyPolicyComponent_iframe_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "iframe", 12);
        }
      }

      var _PrivacyPolicyComponent = /*#__PURE__*/function () {
        function _PrivacyPolicyComponent(main) {
          _classCallCheck(this, _PrivacyPolicyComponent);

          this.main = main;
          main.newPage(this);
        }

        _createClass(_PrivacyPolicyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.lang = this.main.getLocale();

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.main.onDestroyPage();
          }
        }]);

        return _PrivacyPolicyComponent;
      }();

      _PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) {
        return new (t || _PrivacyPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
      };

      _PrivacyPolicyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _PrivacyPolicyComponent,
        selectors: [["app-privacy-policy"]],
        decls: 10,
        vars: 4,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Privacy_policy$$SRC_APP_IN2ART_PAGES_SETTINGS_ABOUT_PRIVACY_POLICY_PRIVACY_POLICY_COMPONENT_TS_1 = goog.getMsg("Privacy policy");
            i18n_0 = MSG_EXTERNAL_Privacy_policy$$SRC_APP_IN2ART_PAGES_SETTINGS_ABOUT_PRIVACY_POLICY_PRIVACY_POLICY_COMPONENT_TS_1;
          } else {
            i18n_0 = "Privacy policy";
          }

          return [[1, "content", "content-l"], [1, "card"], [1, "card-body"], [1, "titol"], i18n_0, [3, "ngSwitch"], ["src", "assets/documents/LSSI-CE_ONIXTRO_SL_CA.pdf", "width", "100%", "height", "500px", 4, "ngSwitchCase"], ["src", "assets/documents/LSSI-CE_ONIXTRO_SL_ES.pdf", "width", "100%", "height", "500px", 4, "ngSwitchCase"], ["src", "assets/documents/LSSI-CE_ONIXTRO_SL_EN.pdf", "width", "100%", "height", "500px", 4, "ngSwitchCase"], ["src", "assets/documents/LSSI-CE_ONIXTRO_SL_EN.pdf", "width", "100%", "height", "500px", 4, "ngSwitchDefault"], ["src", "assets/documents/LSSI-CE_ONIXTRO_SL_CA.pdf", "width", "100%", "height", "500px"], ["src", "assets/documents/LSSI-CE_ONIXTRO_SL_ES.pdf", "width", "100%", "height", "500px"], ["src", "assets/documents/LSSI-CE_ONIXTRO_SL_EN.pdf", "width", "100%", "height", "500px"]];
        },
        template: function PrivacyPolicyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PrivacyPolicyComponent_iframe_6_Template, 1, 0, "iframe", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PrivacyPolicyComponent_iframe_7_Template, 1, 0, "iframe", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PrivacyPolicyComponent_iframe_8_Template, 1, 0, "iframe", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PrivacyPolicyComponent_iframe_9_Template, 1, 0, "iframe", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.main.getLocale());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "ca");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "es");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "en");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchDefault],
        styles: [".content[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  border: none;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .titol[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: justify;\n  font-size: 1.2rem;\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFDSjtBQUVRO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUFaO0FBRVE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFBWiIsImZpbGUiOiJwcml2YWN5LXBvbGljeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDYwcHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICAudGl0b2wge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    26235: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TermsOfUseComponent": function TermsOfUseComponent() {
          return (
            /* binding */
            _TermsOfUseComponent
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
      /*! ./../../../../services/main.service */
      18607);

      var _TermsOfUseComponent = /*#__PURE__*/function () {
        function _TermsOfUseComponent(main) {
          _classCallCheck(this, _TermsOfUseComponent);

          this.main = main;
          main.newPage(this);
        }

        _createClass(_TermsOfUseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.main.onDestroyPage();
          }
        }]);

        return _TermsOfUseComponent;
      }();

      _TermsOfUseComponent.ɵfac = function TermsOfUseComponent_Factory(t) {
        return new (t || _TermsOfUseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
      };

      _TermsOfUseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _TermsOfUseComponent,
        selectors: [["app-terms-of-use"]],
        decls: 6,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Terms_of_use$$SRC_APP_IN2ART_PAGES_SETTINGS_ABOUT_TERMS_OF_USE_TERMS_OF_USE_COMPONENT_TS_1 = goog.getMsg("Terms of use");
            i18n_0 = MSG_EXTERNAL_Terms_of_use$$SRC_APP_IN2ART_PAGES_SETTINGS_ABOUT_TERMS_OF_USE_TERMS_OF_USE_COMPONENT_TS_1;
          } else {
            i18n_0 = "Terms of use";
          }

          return [[1, "content", "content-l"], [1, "card"], [1, "card-body"], [1, "titol"], i18n_0, [1, "text"]];
        },
        template: function TermsOfUseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        styles: [".content[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  border: none;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .titol[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: justify;\n  font-size: 1.2rem;\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLW9mLXVzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFBWjtBQUVRO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQVoiLCJmaWxlIjoidGVybXMtb2YtdXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNjBweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIC50aXRvbCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    15530: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountComponent": function AccountComponent() {
          return (
            /* binding */
            _AccountComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../services/main.service */
      18607);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function AccountComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountComponent_li_6_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var o_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.main.goTo(o_r1.path);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var o_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("boing ", o_r1["class"], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](o_r1.name);
        }
      }

      var _AccountComponent = /*#__PURE__*/function () {
        function _AccountComponent(main) {
          _classCallCheck(this, _AccountComponent);

          this.main = main;
          main.newPage(this);
          this.options = _AccountComponent.options;
        }

        _createClass(_AccountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.main.onDestroyPage();
          }
        }]);

        return _AccountComponent;
      }();

      _AccountComponent.options = [{
        name: "personal information",
        "class": "personal-information",
        path: "/settings/account/personal-information"
      }, {
        name: "your activity",
        "class": "your-activity",
        path: "/settings/account/your-activity"
      }, {
        name: "language",
        "class": "language",
        path: "/settings/account/language"
      }, {
        name: "contacts syncing",
        "class": "contacts-syncing",
        path: "/settings/account/contacts-syncing"
      }, {
        name: "delete account",
        "class": "delete-account",
        path: "/settings/account/delete-account"
      }];

      _AccountComponent.ɵfac = function AccountComponent_Factory(t) {
        return new (t || _AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
      };

      _AccountComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AccountComponent,
        selectors: [["app-account"]],
        decls: 7,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Account$$SRC_APP_IN2ART_PAGES_SETTINGS_ACCOUNT_ACCOUNT_COMPONENT_TS_1 = goog.getMsg("Account");
            i18n_0 = MSG_EXTERNAL_Account$$SRC_APP_IN2ART_PAGES_SETTINGS_ACCOUNT_ACCOUNT_COMPONENT_TS_1;
          } else {
            i18n_0 = "Account";
          }

          return [[1, "content"], [1, "card"], [1, "card-body"], [1, "titol"], i18n_0, [4, "ngFor", "ngForOf"], [3, "click"]];
        },
        template: function AccountComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AccountComponent_li_6_Template, 3, 4, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.options);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
        styles: [".content[_ngcontent-%COMP%] {\n  max-width: 575px;\n  padding: 60px 0;\n  border: none;\n  border-radius: 39px;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p.titol[_ngcontent-%COMP%] {\n  margin: 20px;\n  text-align: center;\n  font-size: 2rem;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: var(--border-card);\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  width: 100%;\n  font-size: 20px;\n  padding: 15px 20px;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-letter {\n  text-transform: capitalize;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.logout[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.delete-account[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.privacy[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.ads[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n@media only screen and (max-width: 576px) {\n  .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p.titol[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFUTtFQUNJLFVBQUE7QUFBWjtBQUVZO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFoQjtBQU1vQjtFQUNJLGlDQUFBO0FBSnhCO0FBT29CO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFOeEI7QUFRd0I7RUFDSSwwQkFBQTtBQU41QjtBQVF3QjtFQUVJLFVBQUE7RUFDQSxpQkFBQTtBQVA1QjtBQVN3QjtFQUVJLFdBQUE7QUFSNUI7QUFtQkE7RUFJZ0I7O0lBRUksZ0JBQUE7RUFuQmxCO0FBQ0YiLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBtYXgtd2lkdGg6IDU3NXB4O1xyXG4gICAgcGFkZGluZzogNjBweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzlweDtcclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICAgICBwLnRpdG9sIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlci1jYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtbGV0dGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5sb2dvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuZGVsZXRlLWFjY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYucHJpdmFjeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5hZHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBNw7JiaWwgLy9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgICAgICBwLnRpdG9sLFxyXG4gICAgICAgICAgICAgICAgdWwgbGkgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    39628: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeEmailComponent": function ChangeEmailComponent() {
          return (
            /* binding */
            _ChangeEmailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _services_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../services/utils.service */
      81274);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jquery */
      91704);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../services/main.service */
      18607);

      var _ChangeEmailComponent = /*#__PURE__*/function () {
        function _ChangeEmailComponent(main) {
          _classCallCheck(this, _ChangeEmailComponent);

          this.main = main;
          main.newPage(this);
        }

        _createClass(_ChangeEmailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var saveLogin;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      saveLogin = false;
                      jquery__WEBPACK_IMPORTED_MODULE_1__("#saveLogin").prop("checked", saveLogin);

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.main.onDestroyPage();
          }
        }, {
          key: "guardarCanvis",
          value: function guardarCanvis() {
            var saveLogin = jquery__WEBPACK_IMPORTED_MODULE_1__("#saveLogin").prop("checked");
            if (saveLogin) _services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.sessionToCookie("currentUser");else _services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.cookieToSession("currentUser");
            this.main.toastSuccess("Changes saved"); // console.log("Cookie", localStorage.getItem("currentUser"));
            // console.log("Session", sessionStorage.getItem("currentUser"));
          }
        }]);

        return _ChangeEmailComponent;
      }();

      _ChangeEmailComponent.ɵfac = function ChangeEmailComponent_Factory(t) {
        return new (t || _ChangeEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_2__.MainService));
      };

      _ChangeEmailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _ChangeEmailComponent,
        selectors: [["change-email"]],
        decls: 14,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Saved_login_info$$SRC_APP_IN2ART_PAGES_SETTINGS_ACCOUNT_PERSONAL_INFORMATION_CHANGE_EMAIL_CHANGE_EMAIL_COMPONENT_TS_1 = goog.getMsg("Saved login info");
            i18n_0 = MSG_EXTERNAL_Saved_login_info$$SRC_APP_IN2ART_PAGES_SETTINGS_ACCOUNT_PERSONAL_INFORMATION_CHANGE_EMAIL_CHANGE_EMAIL_COMPONENT_TS_1;
          } else {
            i18n_0 = "Saved login info";
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_If_you_save_login$$SRC_APP_IN2ART_PAGES_SETTINGS_ACCOUNT_PERSONAL_INFORMATION_CHANGE_EMAIL_CHANGE_EMAIL_COMPONENT_TS_3 = goog.getMsg("If you save login, we'll remember your account info for you on this device, so you won't need to enter it again");
            i18n_2 = MSG_EXTERNAL_If_you_save_login$$SRC_APP_IN2ART_PAGES_SETTINGS_ACCOUNT_PERSONAL_INFORMATION_CHANGE_EMAIL_CHANGE_EMAIL_COMPONENT_TS_3;
          } else {
            i18n_2 = "If you save login, we'll remember your account info for you on this device, so you won't need to enter it again";
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Save_login_info$$SRC_APP_IN2ART_PAGES_SETTINGS_ACCOUNT_PERSONAL_INFORMATION_CHANGE_EMAIL_CHANGE_EMAIL_COMPONENT_TS_5 = goog.getMsg("Save login info");
            i18n_4 = MSG_EXTERNAL_Save_login_info$$SRC_APP_IN2ART_PAGES_SETTINGS_ACCOUNT_PERSONAL_INFORMATION_CHANGE_EMAIL_CHANGE_EMAIL_COMPONENT_TS_5;
          } else {
            i18n_4 = "Save login info";
          }

          return [[1, "content", "content-m"], [1, "card"], [1, "card-body"], [1, "titol"], i18n_0, [1, "notaEnGris"], i18n_2, [1, "media", "switchGroup"], ["for", "saveLogin", 1, "textSaveLogin"], i18n_4, [1, "media-body", "text-right"], [1, "switch"], ["type", "checkbox", "checked", "", "id", "saveLogin", 3, "input"], [1, "switch-state"]];
        },
        template: function ChangeEmailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](6, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](9, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function ChangeEmailComponent_Template_input_input_12_listener() {
              return ctx.guardarCanvis();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
        },
        styles: [".content[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  border: none;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .titol[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2rem;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .notaEnGris[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .switchGroup[_ngcontent-%COMP%]   .textSaveLogin[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1lbWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUFaO0FBRVE7RUFDSSxxQkFBQTtBQUFaO0FBR1k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBRGhCIiwiZmlsZSI6ImNoYW5nZS1lbWFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDYwcHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICAudGl0b2wge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vdGFFbkdyaXMge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zd2l0Y2hHcm91cCB7XHJcbiAgICAgICAgICAgIC50ZXh0U2F2ZUxvZ2luIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    1551: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PersonalInformationComponent": function PersonalInformationComponent() {
          return (
            /* binding */
            _PersonalInformationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../services/main.service */
      18607);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function PersonalInformationComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PersonalInformationComponent_li_6_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var o_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.main.goTo(o_r1.path);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var o_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("boing ", o_r1["class"], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](o_r1.name);
        }
      }

      var _PersonalInformationComponent = /*#__PURE__*/function () {
        function _PersonalInformationComponent(main) {
          _classCallCheck(this, _PersonalInformationComponent);

          this.main = main;
          main.newPage(this);
          this.options = _PersonalInformationComponent.options;
        }

        _createClass(_PersonalInformationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.main.onDestroyPage();
          }
        }]);

        return _PersonalInformationComponent;
      }();

      _PersonalInformationComponent.options = [// { name: "Profile", class: "profile-settings", path: "/settings/account/personal-information/profile-settings" },
      // { name: "Change email", class: "change-email", path: "/settings/account/personal-information/change-email" },
      {
        name: "Change interests",
        "class": "change-interests",
        path: "/settings/account/personal-information/change-interests"
      }];

      _PersonalInformationComponent.ɵfac = function PersonalInformationComponent_Factory(t) {
        return new (t || _PersonalInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
      };

      _PersonalInformationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _PersonalInformationComponent,
        selectors: [["app-personal-information"]],
        decls: 7,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_PersonalInformation$$SRC_APP_IN2ART_PAGES_SETTINGS_ACCOUNT_PERSONAL_INFORMATION_PERSONAL_INFORMATION_COMPONENT_TS_1 = goog.getMsg("Personal information");
            i18n_0 = MSG_EXTERNAL_PersonalInformation$$SRC_APP_IN2ART_PAGES_SETTINGS_ACCOUNT_PERSONAL_INFORMATION_PERSONAL_INFORMATION_COMPONENT_TS_1;
          } else {
            i18n_0 = "Personal information";
          }

          return [[1, "content"], [1, "card"], [1, "card-body"], [1, "titol"], i18n_0, [4, "ngFor", "ngForOf"], [3, "click"]];
        },
        template: function PersonalInformationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PersonalInformationComponent_li_6_Template, 3, 4, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.options);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
        styles: [".content[_ngcontent-%COMP%] {\n  max-width: 575px;\n  padding: 60px 0;\n  border: none;\n  border-radius: 39px;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p.titol[_ngcontent-%COMP%] {\n  margin: 20px;\n  text-align: center;\n  font-size: 2rem;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: var(--border-card);\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  width: 100%;\n  font-size: 20px;\n  padding: 15px 20px;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-letter {\n  text-transform: capitalize;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.logout[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.delete-account[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.privacy[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.ads[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n@media only screen and (max-width: 576px) {\n  .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p.titol[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFUTtFQUNJLFVBQUE7QUFBWjtBQUVZO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFoQjtBQU1vQjtFQUNJLGlDQUFBO0FBSnhCO0FBT29CO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFOeEI7QUFRd0I7RUFDSSwwQkFBQTtBQU41QjtBQVF3QjtFQUVJLFVBQUE7RUFDQSxpQkFBQTtBQVA1QjtBQVN3QjtFQUVJLFdBQUE7QUFSNUI7QUFtQkE7RUFJZ0I7O0lBRUksZ0JBQUE7RUFuQmxCO0FBQ0YiLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBtYXgtd2lkdGg6IDU3NXB4O1xyXG4gICAgcGFkZGluZzogNjBweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzlweDtcclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICAgICBwLnRpdG9sIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlci1jYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtbGV0dGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5sb2dvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuZGVsZXRlLWFjY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYucHJpdmFjeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5hZHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBNw7JiaWwgLy9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgICAgICBwLnRpdG9sLFxyXG4gICAgICAgICAgICAgICAgdWwgbGkgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    34035: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileSettingsComponent": function ProfileSettingsComponent() {
          return (
            /* binding */
            _ProfileSettingsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _services_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../services/utils.service */
      81274);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jquery */
      91704);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../services/main.service */
      18607);

      var _ProfileSettingsComponent = /*#__PURE__*/function () {
        function _ProfileSettingsComponent(main) {
          _classCallCheck(this, _ProfileSettingsComponent);

          this.main = main;
          main.newPage(this);
        }

        _createClass(_ProfileSettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var saveLogin;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      saveLogin = false;
                      jquery__WEBPACK_IMPORTED_MODULE_1__("#saveLogin").prop("checked", saveLogin);

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.main.onDestroyPage();
          }
        }, {
          key: "guardarCanvis",
          value: function guardarCanvis() {
            var saveLogin = jquery__WEBPACK_IMPORTED_MODULE_1__("#saveLogin").prop("checked");
            if (saveLogin) _services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.sessionToCookie("currentUser");else _services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.cookieToSession("currentUser");
            this.main.toastSuccess("Changes saved"); // console.log("Cookie", localStorage.getItem("currentUser"));
            // console.log("Session", sessionStorage.getItem("currentUser"));
          }
        }]);

        return _ProfileSettingsComponent;
      }();

      _ProfileSettingsComponent.ɵfac = function ProfileSettingsComponent_Factory(t) {
        return new (t || _ProfileSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_2__.MainService));
      };

      _ProfileSettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _ProfileSettingsComponent,
        selectors: [["profile-settings"]],
        decls: 14,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Saved_login_info$$SRC_APP_IN2ART_PAGES_SETTINGS_ACCOUNT_PERSONAL_INFORMATION_PROFILE_SETTINGS_PROFILE_SETTINGS_COMPONENT_TS_1 = goog.getMsg("Saved login info");
            i18n_0 = MSG_EXTERNAL_Saved_login_info$$SRC_APP_IN2ART_PAGES_SETTINGS_ACCOUNT_PERSONAL_INFORMATION_PROFILE_SETTINGS_PROFILE_SETTINGS_COMPONENT_TS_1;
          } else {
            i18n_0 = "Saved login info";
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_If_you_save_login$$SRC_APP_IN2ART_PAGES_SETTINGS_ACCOUNT_PERSONAL_INFORMATION_PROFILE_SETTINGS_PROFILE_SETTINGS_COMPONENT_TS_3 = goog.getMsg("If you save login, we'll remember your account info for you on this device, so you won't need to enter it again");
            i18n_2 = MSG_EXTERNAL_If_you_save_login$$SRC_APP_IN2ART_PAGES_SETTINGS_ACCOUNT_PERSONAL_INFORMATION_PROFILE_SETTINGS_PROFILE_SETTINGS_COMPONENT_TS_3;
          } else {
            i18n_2 = "If you save login, we'll remember your account info for you on this device, so you won't need to enter it again";
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Save_login_info$$SRC_APP_IN2ART_PAGES_SETTINGS_ACCOUNT_PERSONAL_INFORMATION_PROFILE_SETTINGS_PROFILE_SETTINGS_COMPONENT_TS_5 = goog.getMsg("Save login info");
            i18n_4 = MSG_EXTERNAL_Save_login_info$$SRC_APP_IN2ART_PAGES_SETTINGS_ACCOUNT_PERSONAL_INFORMATION_PROFILE_SETTINGS_PROFILE_SETTINGS_COMPONENT_TS_5;
          } else {
            i18n_4 = "Save login info";
          }

          return [[1, "content", "content-m"], [1, "card"], [1, "card-body"], [1, "titol"], i18n_0, [1, "notaEnGris"], i18n_2, [1, "media", "switchGroup"], ["for", "saveLogin", 1, "textSaveLogin"], i18n_4, [1, "media-body", "text-right"], [1, "switch"], ["type", "checkbox", "checked", "", "id", "saveLogin", 3, "input"], [1, "switch-state"]];
        },
        template: function ProfileSettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](6, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](9, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function ProfileSettingsComponent_Template_input_input_12_listener() {
              return ctx.guardarCanvis();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
        },
        styles: [".content[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  border: none;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .titol[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2rem;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .notaEnGris[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .switchGroup[_ngcontent-%COMP%]   .textSaveLogin[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRVE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFBWjtBQUVRO0VBQ0kscUJBQUE7QUFBWjtBQUdZO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQURoQiIsImZpbGUiOiJwcm9maWxlLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNjBweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIC50aXRvbCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm90YUVuR3JpcyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN3aXRjaEdyb3VwIHtcclxuICAgICAgICAgICAgLnRleHRTYXZlTG9naW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    63464: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SavedLoginInfoComponent": function SavedLoginInfoComponent() {
          return (
            /* binding */
            _SavedLoginInfoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _services_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../services/utils.service */
      81274);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../services/main.service */
      18607);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      45396);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _SavedLoginInfoComponent = /*#__PURE__*/function () {
        function _SavedLoginInfoComponent(main) {
          _classCallCheck(this, _SavedLoginInfoComponent);

          this.main = main;
          this.key = "currentUser";
          main.newPage(this);
        }

        _createClass(_SavedLoginInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      this.saveLogin = _services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.cookieStorageGet(this.key);

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.main.onDestroyPage();
          }
        }, {
          key: "guardarCanvis",
          value: function guardarCanvis() {
            if (this.saveLogin) {
              var value = _services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.sessionStorageGet(this.key);

              if (!value) return;

              _services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.cookieStorageSet(this.key, value);
            } else {
              var _value = _services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.cookieStorageGet(this.key);

              if (!_value) return;

              _services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.sessionStorageSet(this.key, _value);

              _services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.cookieStorageRemove(this.key);
            }

            this.main.toastSuccess("Changes saved");
          }
        }]);

        return _SavedLoginInfoComponent;
      }();

      _SavedLoginInfoComponent.ɵfac = function SavedLoginInfoComponent_Factory(t) {
        return new (t || _SavedLoginInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__.MainService));
      };

      _SavedLoginInfoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _SavedLoginInfoComponent,
        selectors: [["app-saved-login-info"]],
        decls: 9,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Saved_login_info$$SRC_APP_IN2ART_PAGES_SETTINGS_SECURITY_SAVED_LOGIN_INFO_SAVED_LOGIN_INFO_COMPONENT_TS_1 = goog.getMsg("Saved login info");
            i18n_0 = MSG_EXTERNAL_Saved_login_info$$SRC_APP_IN2ART_PAGES_SETTINGS_SECURITY_SAVED_LOGIN_INFO_SAVED_LOGIN_INFO_COMPONENT_TS_1;
          } else {
            i18n_0 = "Saved login info";
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_If_you_save_login$$SRC_APP_IN2ART_PAGES_SETTINGS_SECURITY_SAVED_LOGIN_INFO_SAVED_LOGIN_INFO_COMPONENT_TS_3 = goog.getMsg("If you save login, we'll remember your account info for you on this device, so you won't need to enter it again");
            i18n_2 = MSG_EXTERNAL_If_you_save_login$$SRC_APP_IN2ART_PAGES_SETTINGS_SECURITY_SAVED_LOGIN_INFO_SAVED_LOGIN_INFO_COMPONENT_TS_3;
          } else {
            i18n_2 = "If you save login, we'll remember your account info for you on this device, so you won't need to enter it again";
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Save_login_info$$SRC_APP_IN2ART_PAGES_SETTINGS_SECURITY_SAVED_LOGIN_INFO_SAVED_LOGIN_INFO_COMPONENT_TS_5 = goog.getMsg("Save login info");
            i18n_4 = MSG_EXTERNAL_Save_login_info$$SRC_APP_IN2ART_PAGES_SETTINGS_SECURITY_SAVED_LOGIN_INFO_SAVED_LOGIN_INFO_COMPONENT_TS_5;
          } else {
            i18n_4 = "Save login info";
          }

          return [[1, "content", "content-m"], [1, "card"], [1, "card-body"], [1, "titol"], i18n_0, [1, "notaEnGris"], i18n_2, [3, "ngModel", "labelPosition", "ngModelChange", "change"], i18n_4];
        },
        template: function SavedLoginInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](6, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-slide-toggle", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SavedLoginInfoComponent_Template_mat_slide_toggle_ngModelChange_7_listener($event) {
              return ctx.saveLogin = $event;
            })("change", function SavedLoginInfoComponent_Template_mat_slide_toggle_change_7_listener() {
              return ctx.guardarCanvis();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](8, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.saveLogin)("labelPosition", "before");
          }
        },
        directives: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
        styles: [".content[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  border: none;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .titol[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2rem;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .notaEnGris[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .switchGroup[_ngcontent-%COMP%]   .textSaveLogin[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 0;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]     .mat-slide-toggle-content {\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]     .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: #3ab63a8a;\n}\n.content[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]     .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #3ab63a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmVkLWxvZ2luLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRVE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFBWjtBQUVRO0VBQ0kscUJBQUE7QUFBWjtBQUdZO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQURoQjtBQUlRO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FBRlo7QUFJWTtFQUNJLFdBQUE7QUFGaEI7QUFRWTtFQUF3QiwyQkFBQTtBQUxwQztBQU1ZO0VBQTBCLHlCQUFBO0FBSHRDIiwiZmlsZSI6InNhdmVkLWxvZ2luLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgLnRpdG9sIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ub3RhRW5HcmlzIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3dpdGNoR3JvdXAge1xyXG4gICAgICAgICAgICAudGV4dFNhdmVMb2dpbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0LXNsaWRlLXRvZ2dsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIDo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb2xvciAvL1xyXG4gICAgICAgIDo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjM2FiNjNhOGE7IH1cclxuICAgICAgICAgICAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjM2FiNjNhOyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    98028: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SecurityComponent": function SecurityComponent() {
          return (
            /* binding */
            _SecurityComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../services/main.service */
      18607);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function SecurityComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SecurityComponent_li_6_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var o_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.main.goTo(o_r1.path);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var o_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("boing ", o_r1["class"], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](o_r1.name);
        }
      }

      var _SecurityComponent = /*#__PURE__*/function () {
        function _SecurityComponent(main) {
          _classCallCheck(this, _SecurityComponent);

          this.main = main;
          main.newPage(this);
          this.options = _SecurityComponent.options;
        }

        _createClass(_SecurityComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.main.onDestroyPage();
          }
        }]);

        return _SecurityComponent;
      }();

      _SecurityComponent.options = [{
        name: "reset password",
        "class": "reset-password",
        path: "/settings/security/reset-password"
      }, {
        name: "saved login info",
        "class": "saved-login-info",
        path: "/settings/security/saved-login-info"
      }];

      _SecurityComponent.ɵfac = function SecurityComponent_Factory(t) {
        return new (t || _SecurityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
      };

      _SecurityComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _SecurityComponent,
        selectors: [["app-security"]],
        decls: 7,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Security$$SRC_APP_IN2ART_PAGES_SETTINGS_SECURITY_SECURITY_COMPONENT_TS_1 = goog.getMsg("Security");
            i18n_0 = MSG_EXTERNAL_Security$$SRC_APP_IN2ART_PAGES_SETTINGS_SECURITY_SECURITY_COMPONENT_TS_1;
          } else {
            i18n_0 = "Security";
          }

          return [[1, "content"], [1, "card"], [1, "card-body"], [1, "titol"], i18n_0, [4, "ngFor", "ngForOf"], [3, "click"]];
        },
        template: function SecurityComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SecurityComponent_li_6_Template, 3, 4, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.options);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
        styles: [".content[_ngcontent-%COMP%] {\n  max-width: 575px;\n  padding: 60px 0;\n  border: none;\n  border-radius: 39px;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p.titol[_ngcontent-%COMP%] {\n  margin: 20px;\n  text-align: center;\n  font-size: 2rem;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: var(--border-card);\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  width: 100%;\n  font-size: 20px;\n  padding: 15px 20px;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-letter {\n  text-transform: capitalize;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.logout[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.delete-account[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.privacy[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.ads[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n@media only screen and (max-width: 576px) {\n  .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p.titol[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFUTtFQUNJLFVBQUE7QUFBWjtBQUVZO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFoQjtBQU1vQjtFQUNJLGlDQUFBO0FBSnhCO0FBT29CO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFOeEI7QUFRd0I7RUFDSSwwQkFBQTtBQU41QjtBQVF3QjtFQUVJLFVBQUE7RUFDQSxpQkFBQTtBQVA1QjtBQVN3QjtFQUVJLFdBQUE7QUFSNUI7QUFtQkE7RUFJZ0I7O0lBRUksZ0JBQUE7RUFuQmxCO0FBQ0YiLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBtYXgtd2lkdGg6IDU3NXB4O1xyXG4gICAgcGFkZGluZzogNjBweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzlweDtcclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICAgICBwLnRpdG9sIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlci1jYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtbGV0dGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5sb2dvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuZGVsZXRlLWFjY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYucHJpdmFjeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5hZHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBNw7JiaWwgLy9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgICAgICBwLnRpdG9sLFxyXG4gICAgICAgICAgICAgICAgdWwgbGkgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    43040: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsRoutingModule": function SettingsRoutingModule() {
          return (
            /* binding */
            _SettingsRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./settings.component */
      98932);
      /* harmony import */


      var _account_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./account/account.component */
      15530);
      /* harmony import */


      var _account_personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account/personal-information/personal-information.component */
      1551);
      /* harmony import */


      var _account_personal_information_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account/personal-information/change-email/change-email.component */
      39628);
      /* harmony import */


      var _account_personal_information_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./account/personal-information/profile-settings/profile-settings.component */
      34035);
      /* harmony import */


      var _security_security_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./security/security.component */
      98028);
      /* harmony import */


      var _security_saved_login_info_saved_login_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./security/saved-login-info/saved-login-info.component */
      63464);
      /* harmony import */


      var _support_support_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./support/support.component */
      22411);
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./about/about.component */
      21462);
      /* harmony import */


      var _about_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./about/privacy-policy/privacy-policy.component */
      22178);
      /* harmony import */


      var _about_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./about/terms-of-use/terms-of-use.component */
      26235);
      /* harmony import */


      var _about_about_in2art_about_in2art_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./about/about-in2art/about-in2art.component */
      50518);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716); // import { PrivacyComponent } from './privacy/privacy.component';
      // import { AdsComponent } from './ads/ads.component';
      // import { NotificationsComponent } from './notifications/notifications.component';


      var routes = [{
        path: 'account',
        children: [{
          path: 'personal-information',
          children: [{
            path: 'change-email',
            component: _account_personal_information_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_3__.ChangeEmailComponent
          }, {
            path: 'change-interests',
            redirectTo: '/interests/medium'
          }, {
            path: 'profile-settings',
            component: _account_personal_information_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_4__.ProfileSettingsComponent
          }, {
            path: '',
            component: _account_personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_2__.PersonalInformationComponent
          }]
        }, {
          path: '',
          component: _account_account_component__WEBPACK_IMPORTED_MODULE_1__.AccountComponent
        }]
      }, {
        path: 'security',
        children: [{
          path: 'reset-password',
          redirectTo: "/auth/resetpassword"
        }, {
          path: 'saved-login-info',
          component: _security_saved_login_info_saved_login_info_component__WEBPACK_IMPORTED_MODULE_6__.SavedLoginInfoComponent
        }, {
          path: '',
          component: _security_security_component__WEBPACK_IMPORTED_MODULE_5__.SecurityComponent
        }]
      }, // {
      //     path: 'privacy',
      //     component: PrivacyComponent
      // },
      // {
      //     path: 'ads',
      //     component: AdsComponent
      // },
      // {
      //     path: 'notifications',
      //     component: NotificationsComponent
      // },
      {
        path: 'support',
        component: _support_support_component__WEBPACK_IMPORTED_MODULE_7__.SupportComponent
      }, {
        path: 'about',
        children: [{
          path: 'privacy-policy',
          component: _about_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_9__.PrivacyPolicyComponent
        }, {
          path: 'terms-of-use',
          component: _about_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_10__.TermsOfUseComponent
        }, {
          path: 'about-in2art',
          component: _about_about_in2art_about_in2art_component__WEBPACK_IMPORTED_MODULE_11__.AboutIn2artComponent
        }, {
          path: '',
          component: _about_about_component__WEBPACK_IMPORTED_MODULE_8__.AboutComponent
        }]
      }, {
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent
      }];

      var _SettingsRoutingModule = function _SettingsRoutingModule() {
        _classCallCheck(this, _SettingsRoutingModule);
      };

      _SettingsRoutingModule.ɵfac = function SettingsRoutingModule_Factory(t) {
        return new (t || _SettingsRoutingModule)();
      };

      _SettingsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: _SettingsRoutingModule
      });
      _SettingsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](_SettingsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    98932: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsComponent": function SettingsComponent() {
          return (
            /* binding */
            _SettingsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../services/main.service */
      18607);

      var _c0 = ["buscador"];

      function SettingsComponent_li_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_li_8_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var o_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.goTo(o_r2.path);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var o_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("boing ", o_r2["class"], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](o_r2.name);
        }
      }

      var _SettingsComponent = /*#__PURE__*/function () {
        function _SettingsComponent(main) {
          _classCallCheck(this, _SettingsComponent);

          this.main = main;
          main.newPage(this);
          this.options = _SettingsComponent.options;
        }

        _createClass(_SettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      setTimeout(function () {
                        _this.buscador.input.nativeElement.focus();
                      }, 500); // 500 És la duració de la transició del .page-body //

                    case 1:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.main.onDestroyPage();
          }
        }, {
          key: "goTo",
          value: function goTo(path) {
            if (path == "/settings/privacy" || path == "/settings/ads") {
              this.main.notInMyBeta();
              return;
            }

            this.main.goTo(path);
          }
        }]);

        return _SettingsComponent;
      }();

      _SettingsComponent.options = [{
        name: "account",
        "class": "account",
        path: "/settings/account"
      }, {
        name: "security",
        "class": "security",
        path: "/settings/security"
      }, {
        name: "privacy",
        "class": "privacy",
        path: "/settings/privacy"
      }, {
        name: "ads",
        "class": "ads",
        path: "/settings/ads"
      }, {
        name: "support",
        "class": "support",
        path: "/settings/support"
      }, {
        name: "about",
        "class": "about",
        path: "/settings/about"
      }, {
        name: "log out",
        "class": "logout",
        path: "/logout"
      }];

      _SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
        return new (t || _SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
      };

      _SettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _SettingsComponent,
        selectors: [["app-settings"]],
        viewQuery: function SettingsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.buscador = _t.first);
          }
        },
        decls: 9,
        vars: 1,
        consts: function consts() {
          var i18n_1;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Settings$$SRC_APP_IN2ART_PAGES_SETTINGS_SETTINGS_COMPONENT_TS_2 = goog.getMsg("Settings");
            i18n_1 = MSG_EXTERNAL_Settings$$SRC_APP_IN2ART_PAGES_SETTINGS_SETTINGS_COMPONENT_TS_2;
          } else {
            i18n_1 = "Settings";
          }

          return [[1, "content"], [1, "card"], [1, "card-body"], [1, "titol"], i18n_1, ["buscador", ""], [4, "ngFor", "ngForOf"], [3, "click"]];
        },
        template: function SettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-buscador", null, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SettingsComponent_li_8_Template, 3, 4, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.options != null ? _r0.options : ctx.options);
          }
        },
        styles: [".content[_ngcontent-%COMP%] {\n  max-width: 575px;\n  padding: 60px 0;\n  border: none;\n  border-radius: 39px;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p.titol[_ngcontent-%COMP%] {\n  margin: 20px;\n  text-align: center;\n  font-size: 2rem;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: var(--border-card);\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  width: 100%;\n  font-size: 20px;\n  padding: 15px 20px;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-letter {\n  text-transform: capitalize;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.logout[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.delete-account[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.privacy[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.ads[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n@media only screen and (max-width: 576px) {\n  .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p.titol[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFUTtFQUNJLFVBQUE7QUFBWjtBQUVZO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFoQjtBQU1vQjtFQUNJLGlDQUFBO0FBSnhCO0FBT29CO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFOeEI7QUFRd0I7RUFDSSwwQkFBQTtBQU41QjtBQVF3QjtFQUVJLFVBQUE7RUFDQSxpQkFBQTtBQVA1QjtBQVN3QjtFQUVJLFdBQUE7QUFSNUI7QUFtQkE7RUFJZ0I7O0lBRUksZ0JBQUE7RUFuQmxCO0FBQ0YiLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBtYXgtd2lkdGg6IDU3NXB4O1xyXG4gICAgcGFkZGluZzogNjBweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzlweDtcclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICAgICBwLnRpdG9sIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlci1jYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtbGV0dGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5sb2dvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuZGVsZXRlLWFjY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYucHJpdmFjeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5hZHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBNw7JiaWwgLy9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgICAgICBwLnRpdG9sLFxyXG4gICAgICAgICAgICAgICAgdWwgbGkgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    21170: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsModule": function SettingsModule() {
          return (
            /* binding */
            _SettingsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _about_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./about/privacy-policy/privacy-policy.component */
      22178);
      /* harmony import */


      var _about_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./about/terms-of-use/terms-of-use.component */
      26235);
      /* harmony import */


      var _about_about_in2art_about_in2art_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about/about-in2art/about-in2art.component */
      50518);
      /* harmony import */


      var _security_saved_login_info_saved_login_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./security/saved-login-info/saved-login-info.component */
      63464);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ng-select/ng-select */
      86640);
      /* harmony import */


      var ngb_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngb-modal */
      58603);
      /* harmony import */


      var _account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./account/account.component */
      15530);
      /* harmony import */


      var _account_personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account/personal-information/personal-information.component */
      1551);
      /* harmony import */


      var _security_security_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./security/security.component */
      98028);
      /* harmony import */


      var _support_support_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./support/support.component */
      22411);
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./about/about.component */
      21462);
      /* harmony import */


      var _settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./settings.component */
      98932);
      /* harmony import */


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./settings-routing.module */
      43040);
      /* harmony import */


      var _buscador_buscador_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./_buscador/buscador.component */
      33132);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SettingsModule = function _SettingsModule() {
        _classCallCheck(this, _SettingsModule);
      };

      _SettingsModule.ɵfac = function SettingsModule_Factory(t) {
        return new (t || _SettingsModule)();
      };

      _SettingsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
        type: _SettingsModule
      });
      _SettingsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
        imports: [[_settings_routing_module__WEBPACK_IMPORTED_MODULE_11__.SettingsRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectModule, ngb_modal__WEBPACK_IMPORTED_MODULE_17__.ModalModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](_SettingsModule, {
          declarations: [_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_12__.BuscadorComponent, _account_account_component__WEBPACK_IMPORTED_MODULE_5__.AccountComponent,
          /**/
          _account_personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_6__.PersonalInformationComponent, _security_security_component__WEBPACK_IMPORTED_MODULE_7__.SecurityComponent, _security_saved_login_info_saved_login_info_component__WEBPACK_IMPORTED_MODULE_3__.SavedLoginInfoComponent, _support_support_component__WEBPACK_IMPORTED_MODULE_8__.SupportComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_9__.AboutComponent,
          /**/
          _about_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyComponent,
          /**/
          _about_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_1__.TermsOfUseComponent,
          /**/
          _about_about_in2art_about_in2art_component__WEBPACK_IMPORTED_MODULE_2__.AboutIn2artComponent, _settings_component__WEBPACK_IMPORTED_MODULE_10__.SettingsComponent],
          imports: [_settings_routing_module__WEBPACK_IMPORTED_MODULE_11__.SettingsRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectModule, ngb_modal__WEBPACK_IMPORTED_MODULE_17__.ModalModule]
        });
      })();

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetComponentScope"](_settings_component__WEBPACK_IMPORTED_MODULE_10__.SettingsComponent, [_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_12__.BuscadorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf], []);
      /***/

    },

    /***/
    22411: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupportComponent": function SupportComponent() {
          return (
            /* binding */
            _SupportComponent
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
      /*! ./../../../services/main.service */
      18607);

      var _SupportComponent = /*#__PURE__*/function () {
        function _SupportComponent(main) {
          _classCallCheck(this, _SupportComponent);

          this.main = main;
          main.newPage(this);
          this.options = _SupportComponent.options;
        }

        _createClass(_SupportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.main.onDestroyPage();
          }
        }]);

        return _SupportComponent;
      }();

      _SupportComponent.options = [{
        name: "report a problem",
        "class": "report-a-problem",
        path: "/settings/support/report-a-problem"
      }, {
        name: "help center",
        "class": "help-center",
        path: "/settings/support/help-center"
      }];

      _SupportComponent.ɵfac = function SupportComponent_Factory(t) {
        return new (t || _SupportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
      };

      _SupportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _SupportComponent,
        selectors: [["app-support"]],
        decls: 8,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_If_you_have_any_problem_or_question$$SRC_APP_IN2ART_PAGES_SETTINGS_SUPPORT_SUPPORT_COMPONENT_TS_1 = goog.getMsg("If you have any problem or question, please contact with ");
            i18n_0 = MSG_EXTERNAL_If_you_have_any_problem_or_question$$SRC_APP_IN2ART_PAGES_SETTINGS_SUPPORT_SUPPORT_COMPONENT_TS_1;
          } else {
            i18n_0 = "If you have any problem or question, please contact with ";
          }

          return [[1, "content", "content-l"], [1, "card"], [1, "card-body"], i18n_0, ["href", "mailto:meet@in2.art", 1, "link", "boing"]];
        },
        template: function SupportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](5, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "meet@in2.art");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        styles: [".content[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  border: none;\n}\n.content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDSSxTQUFBO0FBQ1IiLCJmaWxlIjoic3VwcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDYwcHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_in2art_pages_settings_settings_module_ts-es5.js.map