(function () {
  var _templateObject, _templateObject2, _templateObject3;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_in2art_pages_home_home_module_ts"], {
    /***/
    73264: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeRoutingModule": function HomeRoutingModule() {
          return (
            /* binding */
            _HomeRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.component */
      96731);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
        }]
      }];

      var _HomeRoutingModule = function _HomeRoutingModule() {
        _classCallCheck(this, _HomeRoutingModule);
      };

      _HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) {
        return new (t || _HomeRoutingModule)();
      };

      _HomeRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _HomeRoutingModule
      });
      _HomeRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_HomeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    96731: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _services_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../services/utils.service */
      81274);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/main.service */
      18607);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var src_app_in2art_components_publicacio_publicacio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/in2art/components/publicacio/publicacio.component */
      57493);
      /* harmony import */


      var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/loading/loading.component */
      6362);

      var _c0 = ["publicacio"];

      function HomeComponent_app_publicacio_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-publicacio", 4, 5);
        }

        if (rf & 2) {
          var p_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("p", p_r4);
        }
      }

      function HomeComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](5, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_div_2_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r6.main.goTo("/search");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](7, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r8.carregarMes();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_app_loading_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loading");
        }
      }

      var _HomeComponent = /*#__PURE__*/function () {
        function _HomeComponent(main, route) {
          _classCallCheck(this, _HomeComponent);

          this.main = main;
          this.route = route;
          this.scroll = true;
          this.numPublicacions = 5;
          this.comptador = 0;
          this.publicacions = [];
          this.primerCop = true;
          this.encaraQueda = {
            yourTimeline: true,
            yourPreferences: true,
            otherContent: true
          };
          main.newPage(this);
        }

        _createClass(_HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (_services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.getToken()) {
                        _context.next = 3;
                        break;
                      }

                      this.main.router.navigate(['/auth/login']);
                      return _context.abrupt("return");

                    case 3:
                      _context.next = 5;
                      return this.carregarMes();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.main.onDestroyPage();
          }
        }, {
          key: "carregarMes",
          value: function carregarMes() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this$publicacions;

              var novesPublicacions;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // Más publicaciones!!! //
                      novesPublicacions = null;
                      this.carregant = true;
                      _context2.next = 4;
                      return this.getMes();

                    case 4:
                      novesPublicacions = _context2.sent;
                      this.carregant = false;

                      (_this$publicacions = this.publicacions).push.apply(_this$publicacions, _toConsumableArray(novesPublicacions));

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getMes",
          value: function getMes() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var novesPublicacions;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      novesPublicacions = []; // Your timeline
                      // if (this.encaraQueda.yourTimeline) {
                      //     novesPublicacions = await this.main.provider.getRandomPosts(15); this.primerCop = false;
                      //     novesPublicacions = null
                      //     if (novesPublicacions?.length) return novesPublicacions;
                      //     else this.encaraQueda.yourTimeline = false;
                      // }
                      // Your preferences //
                      // if (this.encaraQueda.yourPreferences) {
                      //     novesPublicacions = await this.main.provider.getRandomPosts(20);
                      //     novesPublicacions = null;
                      //     if (novesPublicacions?.length) return novesPublicacions;
                      //     else this.encaraQueda.yourPreferences = false;
                      // }
                      // // Other content //
                      // if (this.encaraQueda.otherContent) {
                      //     novesPublicacions = await this.main.provider.getRandomPosts(5);
                      //     novesPublicacions = null;
                      //     if (novesPublicacions?.length) return novesPublicacions;
                      //     else this.encaraQueda.otherContent = false;
                      // }
                      // if(this.comptador >= 4){
                      //     novesPublicacions = await this.main.provider.getRandomPosts(5);
                      // }

                      return _context3.abrupt("return", novesPublicacions);

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          } // Scroll //

        }, {
          key: "onWindowScroll",
          value: function onWindowScroll() {
            // if (!Utils.getToken()) return;
            // Top //
            if (window.scrollY == 0) {} // Bottom //


            var marge = 10;

            if (window.innerHeight + window.scrollY + marge >= document.body.scrollHeight) {
              // console.log("End of page");
              if (!this.carregant && this.scroll) this.carregarMes();
            }
          }
        }]);

        return _HomeComponent;
      }();

      _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || _HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["app-home"]],
        viewQuery: function HomeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.publicacioComponents = _t);
          }
        },
        hostBindings: function HomeComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) {
              return ctx.onWindowScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"])("mousemove", function HomeComponent_mousemove_HostBindingHandler($event) {
              return ctx.onWindowScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
          }
        },
        decls: 5,
        vars: 4,
        consts: function consts() {
          var i18n_1;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_You_ve_seen_it_all$$SRC_APP_IN2ART_PAGES_HOME_HOME_COMPONENT_TS__2 = goog.getMsg("You've seen it all");
            i18n_1 = MSG_EXTERNAL_You_ve_seen_it_all$$SRC_APP_IN2ART_PAGES_HOME_HOME_COMPONENT_TS__2;
          } else {
            i18n_1 = "Ja ho has vist tot";
          }

          var i18n_3;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Go_to_Discover$$SRC_APP_IN2ART_PAGES_HOME_HOME_COMPONENT_TS__4 = goog.getMsg("Go to Discover");
            i18n_3 = MSG_EXTERNAL_Go_to_Discover$$SRC_APP_IN2ART_PAGES_HOME_HOME_COMPONENT_TS__4;
          } else {
            i18n_3 = "Ves al Discover";
          }

          var i18n_5;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_More_posts$$SRC_APP_IN2ART_PAGES_HOME_HOME_COMPONENT_TS__6 = goog.getMsg("More posts +");
            i18n_5 = MSG_EXTERNAL_More_posts$$SRC_APP_IN2ART_PAGES_HOME_HOME_COMPONENT_TS__6;
          } else {
            i18n_5 = "M\xE9s publicacions +";
          }

          return [[1, "content", "align-center"], [3, "p", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "boto botoPrincipal fs-5", 3, "click", 4, "ngIf"], [3, "p"], ["publicacio", ""], [1, "noPublicacions"], [1, "fas", "fa-check-circle"], i18n_1, [1, "boto", "botoPrincipal", "botoGran", "reload", 3, "click"], i18n_3, [1, "boto", "botoPrincipal", "fs-5", 3, "click"], i18n_5];
        },
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HomeComponent_app_publicacio_1_Template, 2, 1, "app-publicacio", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 8, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HomeComponent_button_3_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, HomeComponent_app_loading_4_Template, 1, 0, "app-loading", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.publicacions);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.scroll && !ctx.carregant);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.carregant);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, src_app_in2art_components_publicacio_publicacio_component__WEBPACK_IMPORTED_MODULE_2__.PublicacioComponent, _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__.LoadingComponent],
        styles: [".content[_ngcontent-%COMP%] {\n  max-width: 940px;\n  padding: 20px 0 100px;\n}\n.content[_ngcontent-%COMP%]   app-publicacio[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 30px;\n}\n.content[_ngcontent-%COMP%]   .noPublicacions[_ngcontent-%COMP%] {\n  padding: 1em;\n  font-size: 1.75em;\n}\n.content[_ngcontent-%COMP%]   .reload[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDSTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQ0k7RUFFSSxZQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUVJO0VBQ0ksZ0JBQUE7QUFBUiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiA5NDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAxMDBweDtcclxuXHJcbiAgICBhcHAtcHVibGljYWNpbyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIC5ub1B1YmxpY2FjaW9ucyB7XHJcbiAgICAgICAgLy8gY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc3VjY2Vzcyk7XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43NWVtO1xyXG4gICAgfVxyXG4gICAgLnJlbG9hZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    87901: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeModule": function HomeModule() {
          return (
            /* binding */
            _HomeModule
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


      var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.component */
      96731);
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home-routing.module */
      73264);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _HomeModule = function _HomeModule() {
        _classCallCheck(this, _HomeModule);
      };

      _HomeModule.ɵfac = function HomeModule_Factory(t) {
        return new (t || _HomeModule)();
      };

      _HomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _HomeModule
      });
      _HomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomeRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_HomeModule, {
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent],
          imports: [_home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomeRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_in2art_pages_home_home_module_ts-es5.js.map