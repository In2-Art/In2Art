(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_in2art_pages_notifications_notifications-routing_module_ts"], {
    /***/
    17385: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationsRoutingModule": function NotificationsRoutingModule() {
          return (
            /* binding */
            _NotificationsRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _notifications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./notifications.component */
      53256);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _notifications_component__WEBPACK_IMPORTED_MODULE_0__.NotificationsComponent
        }]
      }];

      var _NotificationsRoutingModule = function _NotificationsRoutingModule() {
        _classCallCheck(this, _NotificationsRoutingModule);
      };

      _NotificationsRoutingModule.ɵfac = function NotificationsRoutingModule_Factory(t) {
        return new (t || _NotificationsRoutingModule)();
      };

      _NotificationsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _NotificationsRoutingModule
      });
      _NotificationsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_NotificationsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_in2art_pages_notifications_notifications-routing_module_ts-es5.js.map