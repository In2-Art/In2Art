(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_in2art_pages_publicacio-post_publicacio-post_module_ts"], {
    /***/
    44254: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PublicacioPostRoutingModule": function PublicacioPostRoutingModule() {
          return (
            /* binding */
            _PublicacioPostRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _publicacio_post_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./publicacio-post.component */
      22467);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _publicacio_post_component__WEBPACK_IMPORTED_MODULE_0__.PublicacioPostComponent
        }]
      }];

      var _PublicacioPostRoutingModule = function _PublicacioPostRoutingModule() {
        _classCallCheck(this, _PublicacioPostRoutingModule);
      };

      _PublicacioPostRoutingModule.ɵfac = function PublicacioPostRoutingModule_Factory(t) {
        return new (t || _PublicacioPostRoutingModule)();
      };

      _PublicacioPostRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _PublicacioPostRoutingModule
      });
      _PublicacioPostRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_PublicacioPostRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    22467: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PublicacioPostComponent": function PublicacioPostComponent() {
          return (
            /* binding */
            _PublicacioPostComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../services/main.service */
      18607);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_in2art_components_publicacio_publicacio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/in2art/components/publicacio/publicacio.component */
      57493);

      var _c0 = ["publicacioComponent"];

      var _PublicacioPostComponent = /*#__PURE__*/function () {
        function _PublicacioPostComponent(main, router, route) {
          var _this = this;

          _classCallCheck(this, _PublicacioPostComponent);

          this.main = main;
          this.router = router;
          this.route = route;
          main.newPage(this); // force route reload whenever params change;

          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          };

          this.route.params.subscribe(function (params) {
            return _this.params = params;
          });
        }

        _createClass(_PublicacioPostComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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

        return _PublicacioPostComponent;
      }();

      _PublicacioPostComponent.ɵfac = function PublicacioPostComponent_Factory(t) {
        return new (t || _PublicacioPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
      };

      _PublicacioPostComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _PublicacioPostComponent,
        selectors: [["app-publicacio-post"]],
        viewQuery: function PublicacioPostComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.publicacioComponent = _t.first);
          }
        },
        decls: 3,
        vars: 1,
        consts: [[1, "content", "content-l"], [3, "postId"], ["publicacioComponent", ""]],
        template: function PublicacioPostComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-publicacio", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("postId", ctx.params.postId);
          }
        },
        directives: [src_app_in2art_components_publicacio_publicacio_component__WEBPACK_IMPORTED_MODULE_1__.PublicacioComponent],
        styles: [".content[_ngcontent-%COMP%] {\n  padding: 20px 0 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpY2FjaW8tcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FBQ0oiLCJmaWxlIjoicHVibGljYWNpby1wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjBweCAwIDYwcHg7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    11719: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PublicacioPostModule": function PublicacioPostModule() {
          return (
            /* binding */
            _PublicacioPostModule
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


      var _publicacio_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./publicacio-post.component */
      22467);
      /* harmony import */


      var _publicacio_post_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./publicacio-post-routing.module */
      44254);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PublicacioPostModule = function _PublicacioPostModule() {
        _classCallCheck(this, _PublicacioPostModule);
      };

      _PublicacioPostModule.ɵfac = function PublicacioPostModule_Factory(t) {
        return new (t || _PublicacioPostModule)();
      };

      _PublicacioPostModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _PublicacioPostModule
      });
      _PublicacioPostModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _publicacio_post_routing_module__WEBPACK_IMPORTED_MODULE_2__.PublicacioPostRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_PublicacioPostModule, {
          declarations: [_publicacio_post_component__WEBPACK_IMPORTED_MODULE_1__.PublicacioPostComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _publicacio_post_routing_module__WEBPACK_IMPORTED_MODULE_2__.PublicacioPostRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_in2art_pages_publicacio-post_publicacio-post_module_ts-es5.js.map