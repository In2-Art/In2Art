(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_in2art_pages_profile-redirect_profile-redirect_module_ts"], {
    /***/
    35978: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileRedirectRoutingModule": function ProfileRedirectRoutingModule() {
          return (
            /* binding */
            _ProfileRedirectRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _profile_redirect_profile_redirect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../profile-redirect/profile-redirect.component */
      69914);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _profile_redirect_profile_redirect_component__WEBPACK_IMPORTED_MODULE_0__.ProfileRedirectComponent
        }]
      }];

      var _ProfileRedirectRoutingModule = function _ProfileRedirectRoutingModule() {
        _classCallCheck(this, _ProfileRedirectRoutingModule);
      };

      _ProfileRedirectRoutingModule.ɵfac = function ProfileRedirectRoutingModule_Factory(t) {
        return new (t || _ProfileRedirectRoutingModule)();
      };

      _ProfileRedirectRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ProfileRedirectRoutingModule
      });
      _ProfileRedirectRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ProfileRedirectRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    69914: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileRedirectComponent": function ProfileRedirectComponent() {
          return (
            /* binding */
            _ProfileRedirectComponent
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
      /*! ../../services/main.service */
      18607);

      var _ProfileRedirectComponent = /*#__PURE__*/function () {
        function _ProfileRedirectComponent(main) {
          _classCallCheck(this, _ProfileRedirectComponent);

          this.main = main;
        }

        _createClass(_ProfileRedirectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var username;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      try {
                        // let username = (await this.main.provider.getCurrentUser())["username"];
                        username = this.main.currentUser.username;
                        if (username) this.main.goTo(username);else new Error();
                      } catch (_a) {
                        this.main.goTo("/login");
                      }

                    case 1:
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
        }]);

        return _ProfileRedirectComponent;
      }();

      _ProfileRedirectComponent.ɵfac = function ProfileRedirectComponent_Factory(t) {
        return new (t || _ProfileRedirectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
      };

      _ProfileRedirectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ProfileRedirectComponent,
        selectors: [["app-profile-redirect"]],
        decls: 0,
        vars: 0,
        template: function ProfileRedirectComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
      /***/
    },

    /***/
    75931: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileRedirectModule": function ProfileRedirectModule() {
          return (
            /* binding */
            _ProfileRedirectModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _profile_redirect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile-redirect.component */
      69914);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
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


      var _profile_redirect_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile-redirect-routing.module */
      35978);
      /* harmony import */


      var ngb_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngb-modal */
      58603);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ProfileRedirectModule = function _ProfileRedirectModule() {
        _classCallCheck(this, _ProfileRedirectModule);
      };

      _ProfileRedirectModule.ɵfac = function ProfileRedirectModule_Factory(t) {
        return new (t || _ProfileRedirectModule)();
      };

      _ProfileRedirectModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _ProfileRedirectModule
      });
      _ProfileRedirectModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_profile_redirect_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProfileRedirectRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ngb_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_ProfileRedirectModule, {
          declarations: [_profile_redirect_component__WEBPACK_IMPORTED_MODULE_0__.ProfileRedirectComponent],
          imports: [_profile_redirect_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProfileRedirectRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ngb_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_in2art_pages_profile-redirect_profile-redirect_module_ts-es5.js.map