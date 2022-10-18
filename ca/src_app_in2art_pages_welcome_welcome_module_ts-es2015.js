(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_in2art_pages_welcome_welcome_module_ts"],{

/***/ 28992:
/*!****************************************************************!*\
  !*** ./src/app/in2art/pages/welcome/welcome-routing.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeRoutingModule": function() { return /* binding */ WelcomeRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.component */ 38684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [{
        path: '',
        children: [
            {
                path: '',
                component: _welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent
            }
        ]
    }];
class WelcomeRoutingModule {
}
WelcomeRoutingModule.ɵfac = function WelcomeRoutingModule_Factory(t) { return new (t || WelcomeRoutingModule)(); };
WelcomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WelcomeRoutingModule });
WelcomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WelcomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 38684:
/*!***********************************************************!*\
  !*** ./src/app/in2art/pages/welcome/welcome.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComponent": function() { return /* binding */ WelcomeComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/utils.service */ 81274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/main.service */ 18607);
/* harmony import */ var _components_user_info_foto_perfil_foto_perfil_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/user-info/foto-perfil/foto-perfil.component */ 52839);





class WelcomeComponent {
    constructor(main) {
        this.main = main;
        this.carregantReenviarCorreu = false;
        main.newPage(this);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.user = this.main.getParams();
            if (this.main.debug && !_services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.objPle(this.user))
                this.user = { "name": "Josep Maria", "username": "josepmaria", "photo": "https://picsum.photos/200", "email": "josepmaria@mail.com" };
            // Si intentem entrar directament a welcome sense venir del signup
            if (!_services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.objPle(this.user))
                this.main.goTo("/");
            // Get user per la foto (en cas que no hi hagi foto) //
            // TODO: No va perque en ferran no m'ha ret el unauthorized del puto "user/get"
            // if (this.user.lastId) {
            //     let res = await this.main.provider.getUserById(this.user.lastId);
            //     if (res) this.user = res;
            // }
        });
    }
    ngOnDestroy() { this.main.onDestroyPage(); }
    reenviarCorreu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.carregantReenviarCorreu = true;
            let email = this.user.email;
            let res = yield this.main.provider.reenviarCorreuActivacio(email);
            if (this.main.eh.hiHaError(res)) {
                this.main.toastDanger("Couldn't send email to " + email);
            }
            else
                this.main.toastSuccess("Email sent to " + email);
            this.carregantReenviarCorreu = false;
        });
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__.MainService)); };
WelcomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 21, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_We_have_sent_you_an_email_to_activate$$SRC_APP_IN2ART_PAGES_WELCOME_WELCOME_COMPONENT_TS_1 = goog.getMsg("We have sent you an email to{$lineBreak}{$interpolation}{$lineBreak}to activate your account", { "lineBreak": "[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD]", "interpolation": "\uFFFD0\uFFFD" });
        i18n_0 = MSG_EXTERNAL_We_have_sent_you_an_email_to_activate$$SRC_APP_IN2ART_PAGES_WELCOME_WELCOME_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "T'hem enviat un correu electr\xF2nic a" + "[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD]" + "" + "\uFFFD0\uFFFD" + "" + "[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD]" + "per activar el teu compte";
    } i18n_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nPostprocess"](i18n_0); let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_Didnt_receive_the_email_$$SRC_APP_IN2ART_PAGES_WELCOME_WELCOME_COMPONENT_TS_3 = goog.getMsg("Didn't receive the email?{$lineBreak}Check your spam folder or {$startTagButton}try again{$closeTagButton}", { "lineBreak": "\uFFFD#15\uFFFD\uFFFD/#15\uFFFD", "startTagButton": "\uFFFD#16\uFFFD", "closeTagButton": "\uFFFD/#16\uFFFD" });
        i18n_2 = MSG_EXTERNAL_Didnt_receive_the_email_$$SRC_APP_IN2ART_PAGES_WELCOME_WELCOME_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "No has rebut el correu electr\xF2nic?" + "\uFFFD#15\uFFFD\uFFFD/#15\uFFFD" + "Revisa la carpeta spam o " + "\uFFFD#16\uFFFD" + "torna-ho a provar" + "\uFFFD/#16\uFFFD" + "";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_We_are_still_actively_working_on_the_app$$SRC_APP_IN2ART_PAGES_WELCOME_WELCOME_COMPONENT_TS_5 = goog.getMsg("We are still actively working on the app,{$lineBreak}so there might be frequent updates.{$lineBreak}Stay tuned!", { "lineBreak": "[\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD]" });
        i18n_4 = MSG_EXTERNAL_We_are_still_actively_working_on_the_app$$SRC_APP_IN2ART_PAGES_WELCOME_WELCOME_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "Encara estem treballant activament en l'aplicaci\xF3," + "[\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD]" + "per tant pot ser que hi hagi actualitzacions freq\xFCents." + "[\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD]" + "Estigues atent!";
    } i18n_4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nPostprocess"](i18n_4); return [[1, "content"], [1, "card"], [1, "card-body"], [1, "welcome"], ["src", "assets/in2art/imatges/welcome.svg", "alt", "Welcome"], [1, "divFoto"], [3, "user"], [1, "name"], [1, "textEmailSent"], i18n_0, [1, "textDidntReceiveEmail"], i18n_2, [1, "boto", "botoLink", 3, "disabled", "click"], [1, "textBeta"], i18n_4]; }, template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-foto-perfil", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nStart"](10, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nStart"](14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_16_listener() { return ctx.reenviarCorreu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nStart"](18, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("user", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.user.name, " ", ctx.user.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nExp"](ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nApply"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.carregantReenviarCorreu);
    } }, directives: [_components_user_info_foto_perfil_foto_perfil_component__WEBPACK_IMPORTED_MODULE_2__.FotoPerfilComponent], styles: [".content[_ngcontent-%COMP%] {\n  max-width: 575px;\n  padding: 100px 0;\n  border: none;\n}\n.content[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0 20px 0px 50px;\n  margin-bottom: 20px;\n  -webkit-animation: fadeIn 1.5s linear 0s normal 1 both;\n          animation: fadeIn 1.5s linear 0s normal 1 both;\n}\n.content[_ngcontent-%COMP%]   .divFoto[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30px;\n  margin-bottom: 10px;\n  -webkit-animation: fadeIn 1.5s linear 1s normal 1 both;\n          animation: fadeIn 1.5s linear 1s normal 1 both;\n}\n.content[_ngcontent-%COMP%]   .divFoto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 200px;\n  width: 200px;\n}\n.content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: center;\n  color: var(--color-b);\n  -webkit-animation: fadeIn 1s linear 1s normal 1 both;\n          animation: fadeIn 1s linear 1s normal 1 both;\n}\n.content[_ngcontent-%COMP%]   .textEmailSent[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 50px;\n  font-size: 1.5rem;\n  -webkit-animation: fadeIn 1s linear 2s normal 1 both;\n          animation: fadeIn 1s linear 2s normal 1 both;\n}\n.content[_ngcontent-%COMP%]   .textDidntReceiveEmail[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 50px;\n  font-size: 1.25rem;\n  -webkit-animation: fadeIn 1s linear 3s normal 1 both;\n          animation: fadeIn 1s linear 3s normal 1 both;\n}\n.content[_ngcontent-%COMP%]   .textBeta[_ngcontent-%COMP%] {\n  text-align: center;\n  color: gray;\n  font-size: 1rem;\n  -webkit-animation: fadeIn 1s linear 3s normal 1 both;\n          animation: fadeIn 1s linear 3s normal 1 both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNEO0FBQ0M7RUFDQyxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzREFBQTtVQUFBLDhDQUFBO0FBQ0Y7QUFDQztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNEQUFBO1VBQUEsOENBQUE7QUFDRjtBQUNFO0VBQ0Msb0JBQUE7RUFDQSxZQUFBO0FBQ0g7QUFFQztFQUNDLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9EQUFBO1VBQUEsNENBQUE7QUFBRjtBQUVDO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0RBQUE7VUFBQSw0Q0FBQTtBQUFGO0FBRUM7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvREFBQTtVQUFBLDRDQUFBO0FBQUY7QUFFQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxvREFBQTtVQUFBLDRDQUFBO0FBQUYiLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRtYXgtd2lkdGg6IDU3NXB4O1xyXG5cdHBhZGRpbmc6IDEwMHB4IDA7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cclxuXHQud2VsY29tZSB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAwIDIwcHggMHB4IDUwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdFx0YW5pbWF0aW9uOiBmYWRlSW4gMS41cyBsaW5lYXIgMHMgbm9ybWFsIDEgYm90aDtcclxuXHR9XHJcblx0LmRpdkZvdG8ge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogMzBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0XHRhbmltYXRpb246IGZhZGVJbiAxLjVzIGxpbmVhciAxcyBub3JtYWwgMSBib3RoO1xyXG5cclxuXHRcdGltZyB7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDIwMHB4O1xyXG5cdFx0XHR3aWR0aDogMjAwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5uYW1lIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRjb2xvcjogdmFyKC0tY29sb3ItYik7XHJcblx0XHRhbmltYXRpb246IGZhZGVJbiAxcyBsaW5lYXIgMXMgbm9ybWFsIDEgYm90aDtcclxuXHR9XHJcblx0LnRleHRFbWFpbFNlbnQge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdFx0YW5pbWF0aW9uOiBmYWRlSW4gMXMgbGluZWFyIDJzIG5vcm1hbCAxIGJvdGg7XHJcblx0fVxyXG5cdC50ZXh0RGlkbnRSZWNlaXZlRW1haWwge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHRcdGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuXHRcdGFuaW1hdGlvbjogZmFkZUluIDFzIGxpbmVhciAzcyBub3JtYWwgMSBib3RoO1xyXG5cdH1cclxuXHQudGV4dEJldGEge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Y29sb3I6IGdyYXk7XHJcblx0XHRmb250LXNpemU6IDFyZW07XHJcblx0XHRhbmltYXRpb246IGZhZGVJbiAxcyBsaW5lYXIgM3Mgbm9ybWFsIDEgYm90aDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 10785:
/*!********************************************************!*\
  !*** ./src/app/in2art/pages/welcome/welcome.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeModule": function() { return /* binding */ WelcomeModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.component */ 38684);
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-routing.module */ 28992);
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngb-modal */ 58603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);








class WelcomeModule {
}
WelcomeModule.ɵfac = function WelcomeModule_Factory(t) { return new (t || WelcomeModule)(); };
WelcomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: WelcomeModule });
WelcomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_2__.WelcomeRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
            ngb_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WelcomeModule, { declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_1__.WelcomeComponent], imports: [_welcome_routing_module__WEBPACK_IMPORTED_MODULE_2__.WelcomeRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
        ngb_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_in2art_pages_welcome_welcome_module_ts-es2015.js.map