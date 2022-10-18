(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["default-src_app_in2art_pages_auth_auth_module_ts"], {
    /***/
    61246: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DefaultPhotoInfo": function DefaultPhotoInfo() {
          return (
            /* binding */
            _DefaultPhotoInfo
          );
        }
        /* harmony export */

      });

      var _DefaultPhotoInfo = function _DefaultPhotoInfo() {
        _classCallCheck(this, _DefaultPhotoInfo);
      };

      _DefaultPhotoInfo.file_Name = "profilePicture";
      _DefaultPhotoInfo.file_Ext = "PNG";
      _DefaultPhotoInfo.base64 = "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";
      /***/
    },

    /***/
    1219: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ErrorObject": function ErrorObject() {
          return (
            /* binding */
            _ErrorObject
          );
        }
        /* harmony export */

      });

      var _ErrorObject = function _ErrorObject(type, message) {
        _classCallCheck(this, _ErrorObject);

        this.type = type;
        this.message = message;
      };
      /***/

    },

    /***/
    51112: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthRoutingModule": function AuthRoutingModule() {
          return (
            /* binding */
            _AuthRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _verify_account_verify_account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./verify-account/verify-account.component */
      40283);
      /* harmony import */


      var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./reset-password/reset-password.component */
      66400);
      /* harmony import */


      var _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./recover-password/recover-password.component */
      82994);
      /* harmony import */


      var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login-page/login-page.component */
      95030);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _activate_activate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./activate/activate.component */
      5293);
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./logout/logout.component */
      89656);
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup/signup.component */
      12438);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          redirectTo: 'login'
        }, {
          path: 'verifyaccount',
          component: _verify_account_verify_account_component__WEBPACK_IMPORTED_MODULE_0__.VerifyAccountComponent
        }, {
          path: 'activate/:token',
          component: _activate_activate_component__WEBPACK_IMPORTED_MODULE_4__.ActivateComponent
        }, {
          path: 'verifyaccount/:key',
          component: _verify_account_verify_account_component__WEBPACK_IMPORTED_MODULE_0__.VerifyAccountComponent
        }, {
          path: 'resetpassword',
          component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordComponent
        }, {
          path: 'resetpassword/:token',
          component: _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_2__.RecoverPasswordComponent
        }, {
          path: 'login',
          component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__.LoginPageComponent
        }, {
          path: 'logout',
          component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__.LogoutComponent
        }, {
          path: 'signup',
          component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__.SignupComponent
        }]
      }];

      var _AuthRoutingModule = function _AuthRoutingModule() {
        _classCallCheck(this, _AuthRoutingModule);
      };

      _AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
        return new (t || _AuthRoutingModule)();
      };

      _AuthRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _AuthRoutingModule
      });
      _AuthRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    49622: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthModule": function AuthModule() {
          return (
            /* binding */
            _AuthModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _verify_account_verify_account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./verify-account/verify-account.component */
      40283);
      /* harmony import */


      var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./reset-password/reset-password.component */
      66400);
      /* harmony import */


      var _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./recover-password/recover-password.component */
      82994);
      /* harmony import */


      var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login-page/login-page.component */
      95030);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ng-select/ng-select */
      86640);
      /* harmony import */


      var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-image-cropper */
      55819);
      /* harmony import */


      var _activate_activate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./activate/activate.component */
      5293);
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login/login.component */
      11864);
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./logout/logout.component */
      89656);
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./signup/signup.component */
      12438);
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./auth-routing.module */
      51112);
      /* harmony import */


      var ngb_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngb-modal */
      58603);
      /* harmony import */


      var _components_tools_image_croper_image_croper_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../components/_tools/image-croper/image.croper.module */
      73101);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AuthModule = function _AuthModule() {
        _classCallCheck(this, _AuthModule);
      };

      _AuthModule.ɵfac = function AuthModule_Factory(t) {
        return new (t || _AuthModule)();
      };

      _AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: _AuthModule
      });
      _AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        imports: [[_auth_routing_module__WEBPACK_IMPORTED_MODULE_9__.AuthRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_15__.ImageCropperModule, ngb_modal__WEBPACK_IMPORTED_MODULE_16__.ModalModule, _components_tools_image_croper_image_croper_module__WEBPACK_IMPORTED_MODULE_10__.ImageCroperModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](_AuthModule, {
          declarations: [_activate_activate_component__WEBPACK_IMPORTED_MODULE_5__.ActivateComponent, _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__.LoginPageComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent, _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__.LogoutComponent, _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__.SignupComponent, _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_2__.RecoverPasswordComponent, _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordComponent, _verify_account_verify_account_component__WEBPACK_IMPORTED_MODULE_0__.VerifyAccountComponent],
          imports: [_auth_routing_module__WEBPACK_IMPORTED_MODULE_9__.AuthRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_15__.ImageCropperModule, ngb_modal__WEBPACK_IMPORTED_MODULE_16__.ModalModule, _components_tools_image_croper_image_croper_module__WEBPACK_IMPORTED_MODULE_10__.ImageCroperModule],
          exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent]
        });
      })();
      /***/

    },

    /***/
    95030: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageComponent": function LoginPageComponent() {
          return (
            /* binding */
            _LoginPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../services/main.service */
      18607);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../login/login.component */
      11864);

      var _c0 = ["loginComponent"];

      function LoginPageComponent_app_login_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-login", null, 2);
        }
      }

      var _LoginPageComponent = /*#__PURE__*/function () {
        function _LoginPageComponent(main) {
          _classCallCheck(this, _LoginPageComponent);

          this.main = main;
          main.newPage(this);
        }

        _createClass(_LoginPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      //redireccio a la home directament en el cas de que es vulgui tornar al login
                      if (this.main.currentUser) this.main.goTo('/home');

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return _LoginPageComponent;
      }();

      _LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
        return new (t || _LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
      };

      _LoginPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _LoginPageComponent,
        selectors: [["app-login-page"]],
        viewQuery: function LoginPageComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.loginComponent = _t.first);
          }
        },
        decls: 2,
        vars: 1,
        consts: [[1, "content"], [4, "ngIf"], ["loginComponent", ""]],
        template: function LoginPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginPageComponent_app_login_1_Template, 2, 0, "app-login", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.main.currentUser);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
        styles: [".content[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtBQUNEIiwiZmlsZSI6ImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZy10b3A6IDEwMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    11864: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
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
      /*! ../../../services/utils.service */
      81274);
      /* harmony import */


      var _services_DTOs_LoginDTO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/DTOs/LoginDTO */
      83963);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../services/main.service */
      18607);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _components_missatge_error_form_missatge_error_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../components/missatge-error-form/missatge-error-form.component */
      45219);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = ["uploadFileModal"];
      var _c1 = ["imageCropper"];

      function LoginComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_div_20_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r1.reenviarCorreu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](2, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.carregantReenviarCorreu);
        }
      }

      var _LoginComponent = /*#__PURE__*/function () {
        function _LoginComponent(main, fb) {
          _classCallCheck(this, _LoginComponent);

          this.main = main;
          this.fb = fb;
          this.notValidated = false;
          this.carregantReenviarCorreu = false;
          this.carregantLogin = false;
          this.form = this.fb.group({
            email: [""],
            password: [""],
            saveLogin: [false]
          });
          this.form.controls.saveLogin.setValue(true); // TEST

          if (main.debug) {
            this.form.controls.email.setValue("remon@gmail.com");
            this.form.controls.password.setValue("123456");
          }
        }

        _createClass(_LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
          key: "reenviarCorreu",
          value: function reenviarCorreu() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var email, res;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.carregantReenviarCorreu = true;
                      email = this.form.controls.email.value;
                      _context3.next = 4;
                      return this.main.provider.reenviarCorreuActivacio(email);

                    case 4:
                      res = _context3.sent;

                      if (this.main.eh.hiHaError(res)) {
                        this.main.toastDanger("Couldn't send email to " + email);
                      } else {
                        this.main.toastSuccess("Email sent to " + email);
                        this.notValidated = false;
                      }

                      this.carregantReenviarCorreu = false;

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // public submit() {
          //     this.form.markAllAsTouched();
          //     if (!this.form.valid) {
          //         console.error("Error validacio form");
          //         console.log("loginForm: ", this.form);
          //         return;
          //     }
          //     let params = {
          //         email: this.form.controls.email.value,
          //         password: LoginDTO.encryptPassword(this.form.controls.password.value),
          //     };
          //     console.log("Èxit validacio form");
          //     // console.log("el que s'enviarà:", params);
          //     this.carregantLogin = true;
          //     this.main.ps.post(`/login`, params,
          //         (data) => {
          //             this.carregantLogin = false;
          //             // Possibles codis //
          //             // {code: 303, text: 'Not validated'}
          //             // Error //
          //             if (data.code == 533 || data.code == 534) { this.main.toastDanger("Incorrect email or password"); }
          //             if (data.code == 303) {
          //                 this.main.toastDanger("Account still not validated");
          //                 this.notValidated = true;
          //             }
          //             if (data.code != 302) { console.error("Ha donat un codi incorrecte", data); return; }
          //             if (!data || !data.token) return;
          //             // Guardar dades sessió //
          //             let currentUser = { "token": data.token, "id": data.id, "email": data.user.email, emailVerified: true };
          //             Utils.sessionStorageSet("currentUser", currentUser);
          //             if (this.form.controls.saveLogin.value)
          //                 Utils.cookieStorageSet("currentUser", currentUser, Utils.CADUCITAT_TOKEN_DIES);
          //             this.main.currentUser = currentUser;
          //             this.main.refreshCurrentUser();
          //             // Redirecció a home (recarregar pàgina per actualitzar la appbar) //
          //             location.href = "/home";
          //             this.main.goToHome();
          //         },
          //         (error) => {
          //             this.carregantLogin = false;
          //             this.main.eh.peticioFallada(error);
          //             this.main.toastDanger("Unknown error");
          //         },
          //     );
          // }
          // public async loginWithGoogle() {
          //     let res = await this.main.provider.loginWithGoogle();
          //     if (this.main.eh.hiHaError(res)) {
          //         this.main.toastDanger("Error logging in with Google");
          //         return;
          //     }
          //     this.main.toastSuccess("Logged in with Google");
          //     this.main.goToHome();
          // }
          // public async loginWithFacebook() {
          //     let res = await this.main.provider.loginWithFacebook();
          //     if (this.main.eh.hiHaError(res)) {
          //         this.main.toastDanger("Error logging in with Facebook");
          //         return;
          //     }
          //     this.main.toastSuccess("Logged in with Facebook");
          //     this.main.goToHome();
          // }
          // public async loginWithTwitter() {
          //     let res = await this.main.provider.loginWithTwitter();
          //     if (this.main.eh.hiHaError(res)) {
          //         this.main.toastDanger("Error logging in with Twitter");
          //         return;
          //     }
          //     this.main.toastSuccess("Logged in with Twitter");
          //     this.main.goToHome();
          // }

        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            this.form.markAllAsTouched();

            if (!this.form.valid) {
              console.error("Error validacio form");
              console.log("loginForm: ", this.form);
              return;
            }

            console.log("Èxit validacio form");
            var params = {
              email: this.form.controls.email.value,
              password: this.form.controls.password.value
            };
            var loginDTO = new _services_DTOs_LoginDTO__WEBPACK_IMPORTED_MODULE_1__.LoginDTO(params);
            var errors = loginDTO.check();

            if (errors.length > 0) {
              errors.forEach(function (error) {
                console.log(error.message);
              });
              return;
            } else {
              this.carregantLogin = true;
              params.password = _services_DTOs_LoginDTO__WEBPACK_IMPORTED_MODULE_1__.LoginDTO.encryptPassword(params.password);
              this.main.provider.login(params).then(function (res) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                  var currentUser;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          this.carregantLogin = false;

                          if (!res.status) {
                            _context4.next = 6;
                            break;
                          }

                          this.main.toastDanger("Error logging in");
                          return _context4.abrupt("return");

                        case 6:
                          currentUser = {
                            "token": res.token,
                            "id": res.userId,
                            "email": params.email,
                            emailVerified: true
                          };
                          console.log(currentUser);

                          _services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.sessionStorageSet("currentUser", currentUser);

                          if (this.form.controls.saveLogin.value) _services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.cookieStorageSet("currentUser", currentUser, _services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.CADUCITAT_TOKEN_DIES);
                          this.main.currentUser = currentUser;
                          this.main.refreshCurrentUser(); // Redirecció a home (recarregar pàgina per actualitzar la appbar) //

                          location.href = "/home";
                          this.main.goToHome();

                        case 14:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, this);
                }));
              })["catch"](function (error) {
                console.log(error);
              });
            }
          }
        }]);

        return _LoginComponent;
      }();

      _LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_2__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder));
      };

      _LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _LoginComponent,
        selectors: [["app-login"]],
        viewQuery: function LoginComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.uploadFileModal = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.imageCropper = _t.first);
          }
        },
        decls: 30,
        vars: 7,
        consts: function consts() {
          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Email$$SRC_APP_IN2ART_PAGES_AUTH_LOGIN_LOGIN_COMPONENT_TS_3 = goog.getMsg("Email");
            i18n_2 = MSG_EXTERNAL_Email$$SRC_APP_IN2ART_PAGES_AUTH_LOGIN_LOGIN_COMPONENT_TS_3;
          } else {
            i18n_2 = "Email";
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Password$$SRC_APP_IN2ART_PAGES_AUTH_LOGIN_LOGIN_COMPONENT_TS_5 = goog.getMsg("Password");
            i18n_4 = MSG_EXTERNAL_Password$$SRC_APP_IN2ART_PAGES_AUTH_LOGIN_LOGIN_COMPONENT_TS_5;
          } else {
            i18n_4 = "Password";
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Forgot_password_$$SRC_APP_IN2ART_PAGES_AUTH_LOGIN_LOGIN_COMPONENT_TS_7 = goog.getMsg("Forgot password?");
            i18n_6 = MSG_EXTERNAL_Forgot_password_$$SRC_APP_IN2ART_PAGES_AUTH_LOGIN_LOGIN_COMPONENT_TS_7;
          } else {
            i18n_6 = "Forgot password?";
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Don_t_have_an_account__Register_$$SRC_APP_IN2ART_PAGES_AUTH_LOGIN_LOGIN_COMPONENT_TS_9 = goog.getMsg(" Don't have an account? {$startTagButton}Register!{$closeTagButton}", {
              "startTagButton": "\uFFFD#29\uFFFD",
              "closeTagButton": "\uFFFD/#29\uFFFD"
            });
            i18n_8 = MSG_EXTERNAL_Don_t_have_an_account__Register_$$SRC_APP_IN2ART_PAGES_AUTH_LOGIN_LOGIN_COMPONENT_TS_9;
          } else {
            i18n_8 = " Don't have an account? " + "\uFFFD#29\uFFFD" + "Register!" + "\uFFFD/#29\uFFFD" + "";
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Resend_activation_mail$$SRC_APP_IN2ART_PAGES_AUTH_LOGIN_LOGIN_COMPONENT_TS__11 = goog.getMsg("Resend activation mail");
            i18n_10 = MSG_EXTERNAL_Resend_activation_mail$$SRC_APP_IN2ART_PAGES_AUTH_LOGIN_LOGIN_COMPONENT_TS__11;
          } else {
            i18n_10 = "Resend activation mail";
          }

          return [[1, "card", "senseFons"], [1, "card-body"], [1, "logo"], ["src", "assets/in2art/logos/ma_blanca_text.svg", "alt", "in2art"], [1, "theme-form", 3, "formGroup"], [1, "form-grup", "row", "no-gutters"], [1, "col-form-label", "col-12", "col-sm-3"], i18n_2, ["type", "text", "formControlName", "email", 1, "form-camp", "col-12", "col-sm-9"], [3, "control", "nomText"], i18n_4, ["type", "password", "formControlName", "password", 1, "form-camp", "col-12", "col-sm-9"], [1, "form-grup"], ["for", "saveLogin", 1, "d-block", "checkbox-label", 2, "text-align", "center"], ["id", "saveLogin", "type", "checkbox", "formControlName", "saveLogin", 1, "checkbox_animated"], [1, "mt-4", "mb-4", 2, "height", "0"], ["class", "notValidated", 4, "ngIf"], [1, "boto", "botoPrincipal", "botoGran", 3, "disabled", "click"], [1, "forgotPassword"], [1, "boto", "botoLink", 3, "click"], i18n_6, [1, "noAccount"], i18n_8, [1, "notValidated"], [1, "boto", "botoLink", 3, "disabled", "click"], i18n_10];
        },
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](7, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-missatge-error-form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](12, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "app-missatge-error-form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Save login info ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 3, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Log in");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_25_listener() {
              return ctx.main.goTo("resetpassword");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](26, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nStart"](28, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_29_listener() {
              return ctx.main.goTo("/signup");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx.form.controls.email)("nomText", "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx.form.controls.password)("nomText", "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.notValidated);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.carregantLogin);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _components_missatge_error_form_missatge_error_form_component__WEBPACK_IMPORTED_MODULE_3__.MissatgeErrorFormComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
        styles: [".card[_ngcontent-%COMP%] {\n  max-width: 940px;\n  margin: auto;\n  border: none;\n  text-align: center;\n}\n.card[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  height: 100px;\n}\n.card[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  max-width: 100%;\n  height: 100%;\n}\n.card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   .col-form-label[_ngcontent-%COMP%] {\n  text-align: left;\n  margin: auto;\n}\n.card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   .form-camp[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n}\n.card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .notValidated[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 20px;\n}\n.card[_ngcontent-%COMP%]   .forgotPassword[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 20px;\n}\n.card[_ngcontent-%COMP%]   .noAccount[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.card[_ngcontent-%COMP%]   .noAccount[_ngcontent-%COMP%]   .botoLink[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0gsWUFBQTtFQUNHLGtCQUFBO0FBQ0o7QUFDSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQUNSO0FBQ1E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDWjtBQUdJO0VBQ0ksbUJBQUE7QUFEUjtBQUtZO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBSGhCO0FBTVk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBSmhCO0FBUVE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFOWjtBQVVJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBUlI7QUFXSTtFQUNJLGVBQUE7QUFUUjtBQVdRO0VBQ0ksbUJBQUE7QUFUWiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIG1heC13aWR0aDogOTQwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblx0Ym9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgIC5mb3JtLWdydXAge1xyXG5cclxuICAgICAgICAgICAgLmNvbC1mb3JtLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5mb3JtLWNhbXAge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubm90VmFsaWRhdGVkIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9yZ290UGFzc3dvcmQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ub0FjY291bnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuXHJcbiAgICAgICAgLmJvdG9MaW5rIHtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    89656: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LogoutComponent": function LogoutComponent() {
          return (
            /* binding */
            _LogoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _services_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../services/utils.service */
      81274);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LogoutComponent = /*#__PURE__*/function () {
        function _LogoutComponent() {
          _classCallCheck(this, _LogoutComponent);
        }

        _createClass(_LogoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.sessionStorageRemove("currentUser");

                      _services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.removeCookie("currentUser");

                      location.href = "/auth/login";

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
          }
        }]);

        return _LogoutComponent;
      }();

      _LogoutComponent.ɵfac = function LogoutComponent_Factory(t) {
        return new (t || _LogoutComponent)();
      };

      _LogoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _LogoutComponent,
        selectors: [["app-logout"]],
        decls: 0,
        vars: 0,
        template: function LogoutComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
      /***/
    },

    /***/
    66400: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordComponent": function ResetPasswordComponent() {
          return (
            /* binding */
            _ResetPasswordComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_in2art_services_DTOs_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/in2art/services/DTOs/checks */
      71012);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../services/main.service */
      18607);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _components_missatge_error_form_missatge_error_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../components/missatge-error-form/missatge-error-form.component */
      45219);
      /* harmony import */


      var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../components/loading/loading.component */
      6362);

      function ResetPasswordComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](2, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](6, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-missatge-error-form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ResetPasswordComponent_div_3_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r2.enviarEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](10, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx_r0.form.controls.email)("nomText", "email");
        }
      }

      function ResetPasswordComponent_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](2, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-loading");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ResetPasswordComponent_div_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nStart"](2, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nExp"](ctx_r5.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nApply"](2);
        }
      }

      function ResetPasswordComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ResetPasswordComponent_div_4_div_1_Template, 4, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ResetPasswordComponent_div_4_div_2_Template, 5, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.carregant);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.carregant && ctx_r1.res);
        }
      }

      var _ResetPasswordComponent = /*#__PURE__*/function () {
        function _ResetPasswordComponent(main, fb) {
          _classCallCheck(this, _ResetPasswordComponent);

          this.main = main;
          this.fb = fb;
          this.carregant = false;
          main.newPage(this);
          this.form = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]]
          });
        }

        _createClass(_ResetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
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
        }, {
          key: "enviarEmail",
          value: function enviarEmail() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.carregant = true;

                      if (src_app_in2art_services_DTOs_checks__WEBPACK_IMPORTED_MODULE_0__.Checks.checkEmail(this.form.controls.email.value)) {
                        this.main.provider.sendEmailforResetPassword(this.form.controls.email.value).then(function (res) {
                          if (res == 404) {
                            var msgErr = _this2.form.controls.email.value + " doesn't exist";

                            _this2.main.toastDanger(msgErr);
                          } else {
                            var msgSucces = "Email sent to " + _this2.form.controls.email.value;

                            _this2.main.toastSuccess(msgSucces);

                            _this2.carregant = false;
                          }
                        });
                      } // this.res = await this.main.provider.recuperarPasswordEnviarEmail(this.email);


                      this.carregant = false; // if (!this.res) {
                      //     this.main.toastDanger(this.main.t("Error sending email to") + " " + this.email);
                      //     this.emailForm = this.email;
                      //     this.email = "";

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return _ResetPasswordComponent;
      }();

      _ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
        return new (t || _ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
      };

      _ResetPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _ResetPasswordComponent,
        selectors: [["app-reset-password"]],
        decls: 5,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Send_email$$SRC_APP_IN2ART_PAGES_AUTH_RESET_PASSWORD_RESET_PASSWORD_COMPONENT_TS__1 = goog.getMsg("Send email");
            i18n_0 = MSG_EXTERNAL_Send_email$$SRC_APP_IN2ART_PAGES_AUTH_RESET_PASSWORD_RESET_PASSWORD_COMPONENT_TS__1;
          } else {
            i18n_0 = "Send email";
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Email$$SRC_APP_IN2ART_PAGES_AUTH_RESET_PASSWORD_RESET_PASSWORD_COMPONENT_TS__3 = goog.getMsg("Email");
            i18n_2 = MSG_EXTERNAL_Email$$SRC_APP_IN2ART_PAGES_AUTH_RESET_PASSWORD_RESET_PASSWORD_COMPONENT_TS__3;
          } else {
            i18n_2 = "Email";
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Try_again$$SRC_APP_IN2ART_PAGES_AUTH_RESET_PASSWORD_RESET_PASSWORD_COMPONENT_TS__5 = goog.getMsg("Try again");
            i18n_4 = MSG_EXTERNAL_Try_again$$SRC_APP_IN2ART_PAGES_AUTH_RESET_PASSWORD_RESET_PASSWORD_COMPONENT_TS__5;
          } else {
            i18n_4 = "Try again";
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Sending_email$$SRC_APP_IN2ART_PAGES_AUTH_RESET_PASSWORD_RESET_PASSWORD_COMPONENT_TS___7 = goog.getMsg("Sending email...");
            i18n_6 = MSG_EXTERNAL_Sending_email$$SRC_APP_IN2ART_PAGES_AUTH_RESET_PASSWORD_RESET_PASSWORD_COMPONENT_TS___7;
          } else {
            i18n_6 = "Sending email...";
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_We_have_sent_you_an_email_to_reset$$SRC_APP_IN2ART_PAGES_AUTH_RESET_PASSWORD_RESET_PASSWORD_COMPONENT_TS___9 = goog.getMsg(" We have sent you an email to{$lineBreak} {$interpolation}{$lineBreak} to reset your password ", {
              "lineBreak": "[\uFFFD#3\uFFFD\uFFFD/#3\uFFFD|\uFFFD#4\uFFFD\uFFFD/#4\uFFFD]",
              "interpolation": "\uFFFD0\uFFFD"
            });
            i18n_8 = MSG_EXTERNAL_We_have_sent_you_an_email_to_reset$$SRC_APP_IN2ART_PAGES_AUTH_RESET_PASSWORD_RESET_PASSWORD_COMPONENT_TS___9;
          } else {
            i18n_8 = " We have sent you an email to" + "[\uFFFD#3\uFFFD\uFFFD/#3\uFFFD|\uFFFD#4\uFFFD\uFFFD/#4\uFFFD]" + " " + "\uFFFD0\uFFFD" + "" + "[\uFFFD#3\uFFFD\uFFFD/#3\uFFFD|\uFFFD#4\uFFFD\uFFFD/#4\uFFFD]" + " to reset your password ";
          }

          i18n_8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nPostprocess"](i18n_8);
          return [[1, "content", "content-m"], [1, "card"], [1, "card-body"], ["class", "form theme-form", 4, "ngIf"], [4, "ngIf"], [1, "form", "theme-form"], [1, "titol"], i18n_0, [1, "theme-form", 3, "formGroup"], [1, "form-grup", "row", "no-gutters"], [1, "col-form-label", "col-12", "col-sm-3", "asterisc"], i18n_2, ["type", "text", "formControlName", "email", 1, "form-camp", "col-12", "col-sm-9"], [3, "control", "nomText"], [1, "boto", "botoPrincipal", "botoGran", 3, "click"], i18n_4, [1, "fs-4"], i18n_6, [1, "missatge"], i18n_8];
        },
        template: function ResetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ResetPasswordComponent_div_3_Template, 11, 3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ResetPasswordComponent_div_4_Template, 3, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.email);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _components_missatge_error_form_missatge_error_form_component__WEBPACK_IMPORTED_MODULE_2__.MissatgeErrorFormComponent, _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__.LoadingComponent],
        styles: [".content[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .titol[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 7px;\n}\n.content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.content[_ngcontent-%COMP%]   .missatge[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7RUFDRyxrQkFBQTtBQUNKO0FBRVE7RUFDSSxtQkFBQTtBQUFaO0FBRVE7RUFDSSxZQUFBO0FBQVo7QUFFUTtFQUNJLGdCQUFBO0FBQVo7QUFJSTtFQUNJLGlCQUFBO0FBRlIiLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0cGFkZGluZzogMTAwcHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAuZm9ybSB7XHJcbiAgICAgICAgLnRpdG9sIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5taXNzYXRnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    12438: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupComponent": function SignupComponent() {
          return (
            /* binding */
            _SignupComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _shared_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../shared/routes/routes */
      46382);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _services_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/utils.service */
      81274);
      /* harmony import */


      var _services_DTOs_RegisterDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/DTOs/RegisterDTO */
      77219);
      /* harmony import */


      var _classes_defaultPhotoInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../classes/defaultPhotoInfo */
      61246);
      /* harmony import */


      var src_app_in2art_services_DTOs_checks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/in2art/services/DTOs/checks */
      71012);
      /* harmony import */


      var _services_DTOs_InputCheckDTO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/DTOs/InputCheckDTO */
      34070);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../services/main.service */
      18607);
      /* harmony import */


      var ngb_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngb-modal */
      58603);
      /* harmony import */


      var _services_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/provider.service */
      77638);
      /* harmony import */


      var _components_missatge_error_form_missatge_error_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../components/missatge-error-form/missatge-error-form.component */
      45219);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _components_tools_image_croper_image_croper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../components/_tools/image-croper/image-croper.component */
      27723);

      var _c0 = ["uploadFileModal"];
      var _c1 = ["imageCropper"];

      function SignupComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Passwords don't match!");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_img_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 53);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r1.form.controls.photo.value, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        }
      }

      var _SignupComponent = /*#__PURE__*/function () {
        function _SignupComponent(main, fb, modalService, provider) {
          _classCallCheck(this, _SignupComponent);

          this.main = main;
          this.fb = fb;
          this.modalService = modalService;
          this.provider = provider;
          this.validate = false;
          this.uploadFileModalObert = false;
          this.avuiString = new Date().toISOString().split('T')[0];
          this.defaultPhoto = new _classes_defaultPhotoInfo__WEBPACK_IMPORTED_MODULE_3__.DefaultPhotoInfo();
          this.base64textString = "";
          this.inputCheck = new _services_DTOs_InputCheckDTO__WEBPACK_IMPORTED_MODULE_5__.InputCheckDTO(this.provider);
          main.newPage(this);
          this.form = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            lastName: [""],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.email]],
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(5)]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            password2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            profile1: [false],
            profile2: [false],
            profile3: [false],
            profile4: [false],
            photo: [""],
            data: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            address: [""],
            phone: [""],
            terms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.requiredTrue]
          });
        }

        _createClass(_SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.main.provider.getProfileTypes().then(function (data) {
                        _this3.profileTypes = data[3];
                      });

                    case 2:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.closeUploadFileModal(false);
          }
        }, {
          key: "openUploadFileModal",
          value: function openUploadFileModal() {
            // this.imageCropper
            this.modalService.open(this.uploadFileModal, {
              size: "lg",
              modalClass: "uploadFileModal",
              backdropClass: "modal-backdrop",
              hideCloseButton: false,
              centered: true,
              backdrop: true,
              animation: true,
              keyboard: true,
              closeOnOutsideClick: false
            });
          }
        }, {
          key: "onChangeEmail",
          value: function onChangeEmail(value) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (!src_app_in2art_services_DTOs_checks__WEBPACK_IMPORTED_MODULE_4__.Checks.checkEmail(value)) {
                        _context9.next = 16;
                        break;
                      }

                      if (!(value != undefined)) {
                        _context9.next = 15;
                        break;
                      }

                      _context9.next = 4;
                      return this.inputCheck.validateEmail(value);

                    case 4:
                      _context9.t0 = _context9.sent;
                      _context9.next = _context9.t0 === true ? 7 : _context9.t0 === false ? 10 : 13;
                      break;

                    case 7:
                      this.email.markAsPending({
                        onlySelf: false
                      });
                      this.email.setErrors({
                        notUnique: true
                      });
                      return _context9.abrupt("break", 13);

                    case 10:
                      this.email.markAsPending({
                        onlySelf: false
                      });
                      this.email.setErrors(null);
                      return _context9.abrupt("break", 13);

                    case 13:
                      _context9.next = 16;
                      break;

                    case 15:
                      this.form.markAsPending();

                    case 16:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "onChangeNickname",
          value: function onChangeNickname(value) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      if (!src_app_in2art_services_DTOs_checks__WEBPACK_IMPORTED_MODULE_4__.Checks.checkNickname(value)) {
                        _context10.next = 16;
                        break;
                      }

                      if (!(value != undefined)) {
                        _context10.next = 15;
                        break;
                      }

                      _context10.next = 4;
                      return this.inputCheck.validateNickname(value);

                    case 4:
                      _context10.t0 = _context10.sent;
                      _context10.next = _context10.t0 === true ? 7 : _context10.t0 === false ? 10 : 13;
                      break;

                    case 7:
                      this.form.controls.username.markAsPending({
                        onlySelf: false
                      });
                      this.form.controls.username.setErrors({
                        notUnique: true
                      });
                      return _context10.abrupt("break", 13);

                    case 10:
                      this.form.controls.username.markAsPending({
                        onlySelf: false
                      });
                      this.form.controls.username.setErrors(null);
                      return _context10.abrupt("break", 13);

                    case 13:
                      _context10.next = 16;
                      break;

                    case 15:
                      this.form.controls.username.markAsPending();

                    case 16:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "email",
          get: function get() {
            return this.form.get('email');
          }
        }, {
          key: "username",
          get: function get() {
            return this.form.get('username');
          }
        }, {
          key: "closeUploadFileModal",
          value: function closeUploadFileModal(saved) {
            if (saved) this.form.controls.photo.setValue(this.imageCropper.croppedImage);
            this.modalService.close(this.uploadFileModal);
          }
        }, {
          key: "autocompletarUsername",
          value: function autocompletarUsername() {
            if (!this.form.controls.name.valid) return; // Si nom invàlid, fora //

            if (!this.form.controls.lastName.valid) return; // Si cognom invàlid, fora //

            if (this.form.controls.username.touched) return; // Si username ja alterat, fora //
            // this.form.controls.username.setValue(email.split("@")[0]);

            var nom = this.form.controls.name.value + this.form.controls.lastName.value;
            this.form.controls.username.setValue(nom.replaceAll(" ", "").toLowerCase());
          }
        }, {
          key: "usernameValid",
          value: function usernameValid() {
            var pathsInvalids = _shared_routes_routes__WEBPACK_IMPORTED_MODULE_0__.content.map(function (e) {
              return e.path;
            });

            pathsInvalids = pathsInvalids.filter(function (e) {
              if (e.includes(":")) return false;
              if (e == "") return false;
              return true;
            });
            return !pathsInvalids.includes(this.form.controls.username.value);
          }
        }, {
          key: "profileIncorrecte",
          value: function profileIncorrecte() {
            return (this.form.controls.profile1.touched || this.form.controls.profile2.touched || this.form.controls.profile3.touched || this.form.controls.profile4.touched) && !(this.form.controls.profile1.value || this.form.controls.profile2.value || this.form.controls.profile3.value || this.form.controls.profile4.value);
          }
        }, {
          key: "corregirDataNaixement",
          value: function corregirDataNaixement(target) {
            if (target.valueAsDate > new Date()) target.valueAsDate = new Date();
          }
        }, {
          key: "submit",
          value: function submit() {
            this.form.markAllAsTouched();
            this.uploadFileModalObert = true;

            if (!this.form.valid) {
              console.error("Error validacio form");
              console.log("loginForm: ", this.form);
              return;
            }

            var formData = new FormData();
            var file = new File([_services_utils_service__WEBPACK_IMPORTED_MODULE_1__.Utils.dataURLToBlob(this.imageCropper.croppedImage)], "photo.png");
            formData.append("photo", file, "photo.png");
            formData.append("name", this.form.controls.name.value);
            formData.append("lastName", this.form.controls.lastName.value);
            formData.append("email", this.form.controls.email.value);
            formData.append("username", this.form.controls.username.value);
            formData.append("password", this.form.controls.password.value);
            formData.append("data", this.form.controls.data.value);
            formData.append("address", this.form.controls.address.value);
            formData.append("phone", this.form.controls.phone.value);
            if (this.form.controls.profile1.value) formData.append("profile[]", "1");
            if (this.form.controls.profile2.value) formData.append("profile[]", "2");
            if (this.form.controls.profile3.value) formData.append("profile[]", "3");
            if (this.form.controls.profile4.value) formData.append("profile[]", "4");
            this.photoParams = {
              dataBase64: _classes_defaultPhotoInfo__WEBPACK_IMPORTED_MODULE_3__.DefaultPhotoInfo.base64,
              fileName: _classes_defaultPhotoInfo__WEBPACK_IMPORTED_MODULE_3__.DefaultPhotoInfo.file_Name,
              fileExt: _classes_defaultPhotoInfo__WEBPACK_IMPORTED_MODULE_3__.DefaultPhotoInfo.file_Ext
            };
            this.userObject = {
              name: this.form.controls.name.value,
              lastName: this.form.controls.lastName.value,
              email: this.form.controls.email.value,
              nickname: this.form.controls.username.value,
              password: this.form.controls.password.value,
              profileTypeId: this.profileTypes.id,
              address: this.form.controls.address.value,
              phone: this.form.controls.phone.value,
              birthDate: this.form.controls.data.value,
              photo: this.photoParams
            };
            this.userDTO = new _services_DTOs_RegisterDTO__WEBPACK_IMPORTED_MODULE_2__.RegisterDTO(this.userObject);
            this.errors = this.userDTO.check();

            if (this.errors.length > 0) {
              //En el cas de que hi hagin errors els mostrem per pantalla al usuari
              console.error("Error validacio DTO");
              this.setErrorMSG(this.errors);
              return;
            } else {
              //Si tot esta correcte, encriptem la contrasenya i enviem les dades del usuari al servidor
              this.userDTO.password = src_app_in2art_services_DTOs_checks__WEBPACK_IMPORTED_MODULE_4__.Checks.EncryptPassword(this.form.controls.password.value);
              this.provider.signup(new _services_DTOs_RegisterDTO__WEBPACK_IMPORTED_MODULE_2__.RegisterDTO(this.userDTO));
              this.main.gotToEmailSend();
            }
          }
        }, {
          key: "setErrorMSG",
          value: function setErrorMSG(error) {
            var _this4 = this;

            error.forEach(function (e) {
              switch (e.type) {
                case "name":
                  _this4.main.toastDanger(e.message);

                  break;

                case "nickname":
                  _this4.main.toastDanger(e.message);

                  _this4.form.controls.username.touched;
                  break;

                case "lastname":
                  _this4.main.toastDanger(e.message);

                  break;

                case "email":
                  _this4.main.toastDanger(e.message);

                  break;

                case "password":
                  _this4.main.toastDanger(e.message);

                  break;

                case "birthDate":
                  _this4.main.toastDanger(e.message);

                  break;

                case "address":
                  _this4.main.toastDanger(e.message);

                  break;

                case "phone":
                  _this4.main.toastDanger(e.message);

                  break;

                case "profileTypeId":
                  _this4.main.toastDanger(e.message);

                  break;

                case "invalidPhoto":
                  _this4.main.toastDanger(e.message);

                  break;

                case "photoFileName":
                  _this4.userDTO.photo.fileName = "profilePicture";
                  break;

                case "photoFileExt":
                  _this4.main.toastDanger(e.message);

                  break;

                case "missingPhoto":
                  _this4.userDTO.photo = {
                    dataBase64: _classes_defaultPhotoInfo__WEBPACK_IMPORTED_MODULE_3__.DefaultPhotoInfo.base64,
                    fileName: "profilePicture",
                    fileExt: "PNG"
                  };
              }
            });
          }
        }]);

        return _SignupComponent;
      }();

      _SignupComponent.ɵfac = function SignupComponent_Factory(t) {
        return new (t || _SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_6__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngb_modal__WEBPACK_IMPORTED_MODULE_13__.ModalManager), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_provider_service__WEBPACK_IMPORTED_MODULE_7__.ProviderService));
      };

      _SignupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: _SignupComponent,
        selectors: [["app-signup"]],
        viewQuery: function SignupComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.uploadFileModal = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.imageCropper = _t.first);
          }
        },
        decls: 86,
        vars: 22,
        consts: function consts() {
          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Name$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_3 = goog.getMsg("Name");
            i18n_2 = MSG_EXTERNAL_Name$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_3;
          } else {
            i18n_2 = "Name";
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Last_name$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_5 = goog.getMsg("Last name");
            i18n_4 = MSG_EXTERNAL_Last_name$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_5;
          } else {
            i18n_4 = "Last name";
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Email$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_7 = goog.getMsg("Email");
            i18n_6 = MSG_EXTERNAL_Email$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_7;
          } else {
            i18n_6 = "Email";
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Username$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_9 = goog.getMsg("Username");
            i18n_8 = MSG_EXTERNAL_Username$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_9;
          } else {
            i18n_8 = "Username";
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Password$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_11 = goog.getMsg("Password");
            i18n_10 = MSG_EXTERNAL_Password$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_11;
          } else {
            i18n_10 = "Password";
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Repeat_password$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_13 = goog.getMsg("Repeat password");
            i18n_12 = MSG_EXTERNAL_Repeat_password$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_13;
          } else {
            i18n_12 = "Repeat password";
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Photo$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_15 = goog.getMsg("Photo");
            i18n_14 = MSG_EXTERNAL_Photo$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_15;
          } else {
            i18n_14 = "Photo";
          }

          var i18n_16;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Birth_date$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_17 = goog.getMsg("Birth date");
            i18n_16 = MSG_EXTERNAL_Birth_date$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_17;
          } else {
            i18n_16 = "Birth date";
          }

          var i18n_18;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Address$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_19 = goog.getMsg("Address");
            i18n_18 = MSG_EXTERNAL_Address$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_19;
          } else {
            i18n_18 = "Address";
          }

          var i18n_20;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Phone_number$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_21 = goog.getMsg("Phone number");
            i18n_20 = MSG_EXTERNAL_Phone_number$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_21;
          } else {
            i18n_20 = "Phone number";
          }

          var i18n_22;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Already_have_an_account__Log_in_$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_23 = goog.getMsg(" Already have an account? {$startTagButton}Log in!{$closeTagButton}", {
              "startTagButton": "\uFFFD#73\uFFFD",
              "closeTagButton": "\uFFFD/#73\uFFFD"
            });
            i18n_22 = MSG_EXTERNAL_Already_have_an_account__Log_in_$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_23;
          } else {
            i18n_22 = " Already have an account? " + "\uFFFD#73\uFFFD" + "Log in!" + "\uFFFD/#73\uFFFD" + "";
          }

          var i18n_24;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Upload_Photo$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_25 = goog.getMsg(" Upload Photo ");
            i18n_24 = MSG_EXTERNAL_Upload_Photo$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_25;
          } else {
            i18n_24 = " Upload Photo ";
          }

          var i18n_26;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Close$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_27 = goog.getMsg("Close");
            i18n_26 = MSG_EXTERNAL_Close$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_27;
          } else {
            i18n_26 = "Close";
          }

          var i18n_28;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Save$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_29 = goog.getMsg("Save");
            i18n_28 = MSG_EXTERNAL_Save$$SRC_APP_IN2ART_PAGES_AUTH_SIGNUP_SIGNUP_COMPONENT_TS_29;
          } else {
            i18n_28 = "Save";
          }

          return [[1, "content"], [1, "card", "senseFons"], [1, "card-body"], [1, "logo"], ["src", "assets/in2art/logos/ma_blanca_text.svg", "alt", "in2art"], [1, "theme-form", 3, "formGroup"], [1, "form-grup", "row", "no-gutters"], [1, "col-form-label", "col-12", "col-sm-3", "asterisc"], i18n_2, ["type", "text", "formControlName", "name", 1, "form-camp", "col-12", "col-sm-9", 3, "blur"], [3, "control", "nomText"], [1, "col-form-label", "col-12", "col-sm-3"], i18n_4, ["type", "text", "formControlName", "lastName", 1, "form-camp", "col-12", "col-sm-9", 3, "blur"], i18n_6, ["type", "text", "formControlName", "email", 1, "form-camp", "col-12", "col-sm-9", 3, "ngModelChange"], i18n_8, [1, "input-group", "col-12", "col-sm-9"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "formControlName", "username", 1, "form-camp", 3, "ngModelChange"], i18n_10, ["type", "password", "formControlName", "password", 1, "form-camp", "col-12", "col-sm-9"], i18n_12, ["type", "password", "formControlName", "password2", 1, "form-camp", "col-12", "col-sm-9"], ["class", "textErrorForm", 4, "ngIf"], i18n_14, ["type", "button", "value", "Select photo", 1, "boto", "botoPrincipal", "botoGran", "col-12", "col-sm-9", 3, "click"], ["class", "croppedImage shadow-4", "alt", "Profile photo", 3, "src", 4, "ngIf"], i18n_16, ["type", "date", "formControlName", "data", 1, "form-camp", "col-12", "col-sm-9", 3, "max", "change"], i18n_18, ["type", "text", "formControlName", "address", 1, "form-camp", "col-12", "col-sm-9"], i18n_20, ["type", "text", "formControlName", "phone", 1, "form-camp", "col-12", "col-sm-9", 3, "blur"], [1, "form-grup"], ["for", "privacy-policy", 1, "d-block", "checkbox-label", "text-center", 2, "padding", "0.5rem"], ["id", "privacy-policy", "type", "checkbox", "formControlName", "terms", 1, "checkbox_animated"], ["href", "/settings/about/privacy-policy", "target", "_blank", 1, "link", "boing"], [1, "text-center", 3, "control", "text"], [1, "mt-4", "mb-4", 2, "height", "0"], [1, "align-center"], [1, "boto", "botoPrincipal", "botoGran", 3, "click"], [1, "haveAccount"], i18n_22, [1, "boto", "botoLink", 3, "click"], ["id", "uploadFileModal", 1, "uploadFileModal"], ["uploadFileModal", ""], i18n_24, ["imageCropper", ""], i18n_26, i18n_28, [1, "textErrorForm"], ["alt", "Profile photo", 1, "croppedImage", "shadow-4", 3, "src"]];
        },
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](8, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("blur", function SignupComponent_Template_input_blur_9_listener() {
              return ctx.autocompletarUsername();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "app-missatge-error-form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](13, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("blur", function SignupComponent_Template_input_blur_14_listener() {
              return ctx.autocompletarUsername();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "app-missatge-error-form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](18, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.onChangeEmail($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "app-missatge-error-form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](23, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "@");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.onChangeNickname($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "app-missatge-error-form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](32, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](34, "app-missatge-error-form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](37, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](38, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, SignupComponent_div_39_Template, 2, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](42, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SignupComponent_Template_input_click_43_listener() {
              return ctx.openUploadFileModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, SignupComponent_img_44_Template, 1, 1, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](47, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function SignupComponent_Template_input_change_48_listener($event) {
              return ctx.corregirDataNaixement($event.target);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](49, "app-missatge-error-form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](52, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](53, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](54, "app-missatge-error-form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](57, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("blur", function SignupComponent_Template_input_blur_58_listener($event) {
              return $event.target.value = $event.target.value.replaceAll(" ", "");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](59, "app-missatge-error-form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](62, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63, "Agree to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](66, "app-missatge-error-form", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](67, "hr", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_69_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70, "Sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18nStart"](72, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_73_listener() {
              return ctx.main.goTo("/login");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "modal", 46, 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "modal-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](77, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "modal-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](79, "app-image-croper", null, 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "modal-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_82_listener() {
              return ctx.closeUploadFileModal(false);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](83, 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_84_listener() {
              return ctx.closeUploadFileModal(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](85, 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.form.controls.name)("nomText", "name");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.form.controls.lastName)("nomText", "last name");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.form.controls.email)("nomText", "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.form.controls.username)("nomText", "username");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.form.controls.password)("nomText", "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.form.controls.password2.touched && ctx.form.controls.password.value != ctx.form.controls.password2.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.form.controls.photo.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("max", ctx.avuiString);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.form.controls.data)("nomText", "birth date");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.form.controls.address)("nomText", "address");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.form.controls.phone)("nomText", "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.form.controls.terms)("text", "You must agree before submitting");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _components_missatge_error_form_missatge_error_form_component__WEBPACK_IMPORTED_MODULE_8__.MissatgeErrorFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, ngb_modal__WEBPACK_IMPORTED_MODULE_13__.ModalComponent, ngb_modal__WEBPACK_IMPORTED_MODULE_13__.ModalHeaderComponent, ngb_modal__WEBPACK_IMPORTED_MODULE_13__.ModalContentComponent, _components_tools_image_croper_image_croper_component__WEBPACK_IMPORTED_MODULE_9__.ImageCroperComponent, ngb_modal__WEBPACK_IMPORTED_MODULE_13__.ModalFooterComponent],
        styles: [".content[_ngcontent-%COMP%] {\n  max-width: 940px;\n  padding: 100px 0;\n  border: none;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n}\n.content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  height: 100px;\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  max-width: 100%;\n  height: 100%;\n}\n.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   .col-form-label[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]    > .form-camp[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n}\n.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%] {\n  width: 40px;\n  overflow: hidden;\n  border-radius: 20px 0 0 20px;\n  border: var(--border-input);\n  border-right: none;\n}\n.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  color: gray;\n  font-weight: bold;\n  cursor: default;\n  background: transparent;\n  border: none;\n  padding: 0 10px 0 11px;\n}\n.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]    > .form-camp[_ngcontent-%COMP%] {\n  width: calc(100% - 40px);\n  padding: 6px 12px;\n  border-radius: 0 20px 20px 0;\n}\n.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   img.croppedImage[_ngcontent-%COMP%] {\n  width: auto;\n  width: initial;\n  padding: 0;\n  margin: 12px auto;\n  border-radius: 10000px;\n}\n.content[_ngcontent-%COMP%]   .haveAccount[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   .haveAccount[_ngcontent-%COMP%]   .botoLink[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Q7QUFDSTtFQUNJLFlBQUE7QUFDUjtBQUVJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQVo7QUFJSTtFQUNJLG1CQUFBO0FBRlI7QUFNWTtFQUNJLFlBQUE7QUFKaEI7QUFPWTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFMaEI7QUFTZ0I7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFQcEI7QUFTb0I7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFQeEI7QUFVZ0I7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFScEI7QUFZWTtFQUNJLFdBQUE7RUFBQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBRUEsc0JBQUE7QUFYaEI7QUFnQkk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFkUjtBQWdCUTtFQUNJLG1CQUFBO0FBZFoiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdG1heC13aWR0aDogOTQwcHg7XHJcblx0cGFkZGluZzogMTAwcHggMDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICAuZm9ybS1ncnVwIHtcclxuXHJcbiAgICAgICAgICAgIC5jb2wtZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgID4uZm9ybS1jYW1wIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5wdXQtZ3JvdXAge1xyXG5cclxuICAgICAgICAgICAgICAgID4gLmlucHV0LWdyb3VwLXByZXBlbmQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAwIDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHZhcigtLWJvcmRlci1pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPiAuZm9ybS1jYW1wIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDIwcHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1nLmNyb3BwZWRJbWFnZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEycHggYXV0bztcclxuICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwMDBweDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGF2ZUFjY291bnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmJvdG9MaW5rIHtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    40283: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VerifyAccountComponent": function VerifyAccountComponent() {
          return (
            /* binding */
            _VerifyAccountComponent
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
      /*! ../../../services/main.service */
      18607);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _VerifyAccountComponent = /*#__PURE__*/function () {
        function _VerifyAccountComponent(main, router, route) {
          _classCallCheck(this, _VerifyAccountComponent);

          this.main = main;
          this.router = router;
          this.route = route;
          this.valid = null;
        }

        _createClass(_VerifyAccountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      if (((_a = this.main.currentUser) === null || _a === void 0 ? void 0 : _a.email) == null) {
                        this.router.navigate(['/login']);
                      }

                    case 1:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.main.onDestroyPage();
          }
        }, {
          key: "countDownTimer",
          value: function countDownTimer() {}
        }, {
          key: "reSendEmail",
          value: function reSendEmail() {
            this.main.provider.reenviarCorreuActivacio(this.main.currentUser.email);
          }
        }, {
          key: "checkAcces",
          value: function checkAcces() {
            var response; //TODO : Necessaria una peticio per poder compravar si el email del usuari que es situa dins de currentUser ja esta donat de alta o com a minim si ha fet el intent de registrar-se

            this.main.provider.checkEmail(this.main.currentUser.email).then(function (res) {
              response = res;
            })["catch"](function (err) {
              console.log(err); //Error code
            });
            return response;
          }
        }]);

        return _VerifyAccountComponent;
      }();

      _VerifyAccountComponent.ɵfac = function VerifyAccountComponent_Factory(t) {
        return new (t || _VerifyAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
      };

      _VerifyAccountComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _VerifyAccountComponent,
        selectors: [["app-verify-account"]],
        decls: 9,
        vars: 0,
        consts: [[1, "content", "content-m"], [1, "card"], [1, "card-body"], [1, "text-center"], [1, "titleActivate"], [1, "loading-spinner"]],
        template: function VerifyAccountComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Email verification");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "We will send a confirmation email from IN2ART to the email address you provided.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        styles: [".content[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .titol[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.content[_ngcontent-%COMP%]   .missatge[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.content[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  opacity: 1;\n  position: relative;\n  height: 10vh;\n}\n@-webkit-keyframes spinner {\n  0% {\n    transform: translate3d(-50%, -50%, 0) rotate(0deg);\n  }\n  100% {\n    transform: translate3d(-50%, -50%, 0) rotate(360deg);\n  }\n}\n@keyframes spinner {\n  0% {\n    transform: translate3d(-50%, -50%, 0) rotate(0deg);\n  }\n  100% {\n    transform: translate3d(-50%, -50%, 0) rotate(360deg);\n  }\n}\n.content[_ngcontent-%COMP%]   .loading-spinner.-paused[_ngcontent-%COMP%] {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  opacity: 0.2;\n  transition: opacity linear 0.1s;\n}\n.content[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%]::before {\n  -webkit-animation: 1.5s linear infinite spinner;\n          animation: 1.5s linear infinite spinner;\n  -webkit-animation-play-state: inherit;\n          animation-play-state: inherit;\n  border: solid 3px #dedede;\n  border-bottom-color: #EF6565;\n  border-radius: 50%;\n  content: \"\";\n  height: 40px;\n  left: 50%;\n  opacity: inherit;\n  position: absolute;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  width: 40px;\n  will-change: transform;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7RUFDRyxrQkFBQTtBQUNKO0FBRVE7RUFDSSxtQkFBQTtBQUFaO0FBS1E7RUFDSSxnQkFBQTtBQUhaO0FBT0k7RUFDSSxpQkFBQTtBQUxSO0FBZ0RJO0VBN0JJLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUE2QkEsWUFBQTtBQTVDUjtBQUdRO0VBQ0k7SUFDSSxrREFBQTtFQURkO0VBSVU7SUFDSSxvREFBQTtFQUZkO0FBQ0Y7QUFMUTtFQUNJO0lBQ0ksa0RBQUE7RUFEZDtFQUlVO0lBQ0ksb0RBQUE7RUFGZDtBQUNGO0FBU1E7RUFDSSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FBUFo7QUFVUTtFQUNJLCtDQUFBO1VBQUEsdUNBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQVJaIiwiZmlsZSI6InZlcmlmeS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIC50aXRvbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5taXNzYXRnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgQG1peGluIGxvYWRpbmctc3Bpbm5lcigkYWN0aXZlQ29sb3I6ICNFRjY1NjUsICRzZWxlY3RvcjogXCImOjpiZWZvcmVcIiwgJHRpbWU6IDEuNXMpIHtcclxuICAgICAgICBAa2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApIHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKSByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBcclxuICAgICAgICAmLi1wYXVzZWQgeyBcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDsgXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSBsaW5lYXIgMC4xcztcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAjeyRzZWxlY3Rvcn0ge1xyXG4gICAgICAgICAgICBhbmltYXRpb246ICR0aW1lIGxpbmVhciBpbmZpbml0ZSBzcGlubmVyO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogaW5oZXJpdDtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggI2RlZGVkZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI3skYWN0aXZlQ29sb3J9O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiBpbmhlcml0O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlOyBcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5sb2FkaW5nLXNwaW5uZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIGxvYWRpbmctc3Bpbm5lcjtcclxuICAgICAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    34070: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InputCheckDTO": function InputCheckDTO() {
          return (
            /* binding */
            _InputCheckDTO
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./checks */
      71012);

      var _InputCheckDTO = /*#__PURE__*/function () {
        function _InputCheckDTO(provider) {
          _classCallCheck(this, _InputCheckDTO);

          this.provider = provider;
        }

        _createClass(_InputCheckDTO, [{
          key: "validateEmail",
          value: function validateEmail(email) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      if (!_checks__WEBPACK_IMPORTED_MODULE_0__.Checks.checkEmail(email)) {
                        _context12.next = 3;
                        break;
                      }

                      _context12.next = 3;
                      return this.provider.checkEmail(email).then(function (res) {
                        _this5.response = res;
                        _this5.exists = _this5.response.exist;
                      });

                    case 3:
                      return _context12.abrupt("return", this.exists);

                    case 4:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "validateNickname",
          value: function validateNickname(nickname) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (!_checks__WEBPACK_IMPORTED_MODULE_0__.Checks.checkNickname(nickname)) {
                        _context13.next = 3;
                        break;
                      }

                      _context13.next = 3;
                      return this.provider.checkNickname(nickname).then(function (res) {
                        _this6.response = res;
                        _this6.exists = _this6.response.exist;
                      });

                    case 3:
                      return _context13.abrupt("return", this.exists);

                    case 4:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }]);

        return _InputCheckDTO;
      }();
      /***/

    },

    /***/
    83963: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginDTO": function LoginDTO() {
          return (
            /* binding */
            _LoginDTO
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./checks */
      71012);
      /* harmony import */


      var _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../classes/errorObject */
      1219);

      var _LoginDTO = /*#__PURE__*/function () {
        function _LoginDTO(Obj) {
          _classCallCheck(this, _LoginDTO);

          this.errors = [];
          this.email = Obj.email;
          this.password = Obj.password;
          this.isEncrypted = Obj.isEncrypted;
        }

        _createClass(_LoginDTO, [{
          key: "check",
          value: function check() {
            if (!this.email) {
              this.errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("email", "falta el email"));
            } else if (!_checks__WEBPACK_IMPORTED_MODULE_0__.Checks.checkEmail(this.email)) {
              this.errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("email", "email no valid"));
            }

            if (!this.password) {
              this.errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("password", "falta la password"));
            } else if (this.isEncrypted ? !_checks__WEBPACK_IMPORTED_MODULE_0__.Checks.EncryptPassword(this.password) : !_checks__WEBPACK_IMPORTED_MODULE_0__.Checks.checkPassword(this.password)) {
              this.errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("password", "password no valida"));
            }

            return this.errors;
          }
        }, {
          key: "prepareToSend",
          value: function prepareToSend() {
            return {
              email: this.email,
              password: this.isEncrypted ? this.password : _checks__WEBPACK_IMPORTED_MODULE_0__.Checks.EncryptPassword(this.password)
            };
          }
        }], [{
          key: "encryptPassword",
          value: function encryptPassword(password) {
            return _checks__WEBPACK_IMPORTED_MODULE_0__.Checks.EncryptPassword(password);
          }
        }]);

        return _LoginDTO;
      }();
      /***/

    },

    /***/
    77219: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterDTO": function RegisterDTO() {
          return (
            /* binding */
            _RegisterDTO
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./checks */
      71012);
      /* harmony import */


      var _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../classes/errorObject */
      1219);

      var _RegisterDTO = /*#__PURE__*/function () {
        function _RegisterDTO(Obj) {
          _classCallCheck(this, _RegisterDTO);

          this.photo = {
            dataBase64: "",
            fileName: "",
            fileExt: ""
          };
          this.name = Obj.name;
          this.lastName = Obj.lastName;
          this.email = Obj.email;
          this.nickname = Obj.nickname;
          this.password = Obj.password;
          this.profileTypeId = Obj.profileTypeId;
          this.photo = {
            dataBase64: Obj.photo.dataBase64,
            fileName: Obj.photo.fileName,
            fileExt: Obj.photo.fileExt
          };
          this.birthDate = Obj.birthDate;
          this.address = Obj.address;
          this.phone = Obj.phone;
        }
        /**
         * Funcio en la que comprovem que tots els camps estiguin omplerts i siguin valids per a poder completar el registre
         * @returns Array de string amb els errors trobats
         */


        _createClass(_RegisterDTO, [{
          key: "check",
          value: function check() {
            var errors = []; //miro que estiguin tots els camps necessaris

            if (!this.name) {
              errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("name", 'Falta el nom'));
            }

            if (this.name) {
              this.name = this.name.trim();

              if (this.name.length == 0 || this.name.length > _RegisterDTO.MaxNameLength) {
                errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("name", 'El nom no te una longitud valida'));
              }
            }

            if (!this.nickname) {
              errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("nickname", "falta el username"));
            }

            if (this.nickname) {
              this.nickname = this.nickname.trim();

              if (this.nickname.length == 0 || this.nickname.length > _RegisterDTO.MaxNicknameLength) {
                errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("nickname", 'El nickname no te una longitud valida'));
              }
            }

            if (this.lastName) {
              this.lastName = this.lastName.trim();

              if (this.lastName.length == 0 || this.lastName.length > _RegisterDTO.MaxLastNameLength) {
                errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("lastName", "el cognom no te una longitud valida"));
              }
            }

            if (!this.email) {
              errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("email", "falta el email"));
            } else if (!_checks__WEBPACK_IMPORTED_MODULE_0__.Checks.checkEmail(this.email)) {
              errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("email", "el email no es valid"));
            }

            if (!this.password) {
              errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("password", "falta la contrasenya"));
            }

            if (this.password) {
              if (!_checks__WEBPACK_IMPORTED_MODULE_0__.Checks.checkPassword(this.password)) {
                errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("password", "la contrasenya no es valida"));
              }
            }

            if (!this.birthDate) {
              errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("birthDate", "falta la data de naixement"));
            }

            if (this.birthDate) {
              if (!_checks__WEBPACK_IMPORTED_MODULE_0__.Checks.checkData(this.birthDate)) {
                errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("birthDate", "la data no es valida"));
              }
            }

            if (this.address) {
              if (this.address.length == 0 || this.address.length > _RegisterDTO.MaxAddressLength) {
                errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("address", "la direccio no te una longitud valida"));
              }
            }

            if (this.phone) {
              if (!_checks__WEBPACK_IMPORTED_MODULE_0__.Checks.checkPhone(this.phone)) {
                errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("phone", "el telefon no es valid"));
              }
            }

            if (!this.profileTypeId) {
              errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("profileTypeId", "falta el tipus de perfil"));
            }

            if (this.profileTypeId) {
              if (!_checks__WEBPACK_IMPORTED_MODULE_0__.Checks.checkID(this.profileTypeId)) {
                errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("profileTypeId", "el tipus de perfil no es valid"));
              }
            }

            if (this.photo) {
              //check if is a base64 string format
              if (!_checks__WEBPACK_IMPORTED_MODULE_0__.Checks.checkBase64(this.photo.dataBase64)) {
                errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("invalidPhoto", "la foto no es valida"));
              }

              if (!this.photo.fileName || this.photo.fileName.length == 0) {
                errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("photoFileName", "falta el nom de la foto"));
              }

              if (!this.photo.fileExt || this.photo.fileExt.length == 0) {
                errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("photoFileExt", "Extensio de la foto no valida"));
              }

              if (!this.photo) {
                errors.push(new _classes_errorObject__WEBPACK_IMPORTED_MODULE_1__.ErrorObject("missingPhoto", "falta la foto"));
              }
            }

            return errors;
          }
        }]);

        return _RegisterDTO;
      }();

      _RegisterDTO.MaxNameLength = 150;
      _RegisterDTO.MaxAddressLength = 9999;
      _RegisterDTO.MaxLastNameLength = 250;
      _RegisterDTO.MaxNicknameLength = 150;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_in2art_pages_auth_auth_module_ts-es5.js.map