(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_in2art_pages_profile_profile_module_ts"],{

/***/ 75737:
/*!****************************************************************!*\
  !*** ./src/app/in2art/pages/profile/profile-routing.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRoutingModule": function() { return /* binding */ ProfileRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ 99879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [{
        path: '',
        children: [
            {
                path: '',
                component: _profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent
            }
        ]
    }];
class ProfileRoutingModule {
}
ProfileRoutingModule.ɵfac = function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); };
ProfileRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProfileRoutingModule });
ProfileRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 99879:
/*!***********************************************************!*\
  !*** ./src/app/in2art/pages/profile/profile.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": function() { return /* binding */ ProfileComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ 65548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/main.service */ 18607);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngb-modal */ 58603);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_user_info_foto_perfil_foto_perfil_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/user-info/foto-perfil/foto-perfil.component */ 52839);
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/loading/loading.component */ 6362);
/* harmony import */ var src_app_in2art_components_publicacio_publicacio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/in2art/components/publicacio/publicacio.component */ 57493);
/* harmony import */ var _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/user-info/user-info.component */ 77273);











const _c0 = ["followersModal"];
const _c1 = ["followingModal"];
function ProfileComponent_div_3_div_1_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r11.user.name, " ", ctx_r11.user.lastName, "");
} }
function ProfileComponent_div_3_div_1_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r12.user.bio);
} }
function ProfileComponent_div_3_div_1_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r13.user.email);
} }
function ProfileComponent_div_3_div_1_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r14.user.web);
} }
function ProfileComponent_div_3_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileComponent_div_3_div_1_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r22.main.goTo("edit-profile"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](2, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileComponent_div_3_div_1_div_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r24.clickInsights(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](4, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileComponent_div_3_div_1_div_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r25.clickMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](6, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_3_div_1_div_11_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileComponent_div_3_div_1_div_11_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r28.clickFollow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](1, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r26.carregantBotoFollow);
} }
function ProfileComponent_div_3_div_1_div_11_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileComponent_div_3_div_1_div_11_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r30.clickUnfollow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](1, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r27.carregantBotoFollow);
} }
function ProfileComponent_div_3_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProfileComponent_div_3_div_1_div_11_button_1_Template, 2, 1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ProfileComponent_div_3_div_1_div_11_button_2_Template, 2, 1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileComponent_div_3_div_1_div_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r32.clickSubscribe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](4, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileComponent_div_3_div_1_div_11_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r34.clickMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](6, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r16.estasSeguint);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r16.estasSeguint);
} }
function ProfileComponent_div_3_div_1_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileComponent_div_3_div_1_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r35.openNewModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_3_div_1_button_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("height", _r37.offsetWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r18.artworksNomesImg[0] == null ? null : ctx_r18.artworksNomesImg[0].content[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function ProfileComponent_div_3_div_1_button_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 49, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("height", _r38.offsetWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r19.artworksNomesImg[1] == null ? null : ctx_r19.artworksNomesImg[1].content[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function ProfileComponent_div_3_div_1_button_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 49, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("height", _r39.offsetWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r20.artworksNomesImg[2] == null ? null : ctx_r20.artworksNomesImg[2].content[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function ProfileComponent_div_3_div_1_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 49, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("height", _r40.offsetWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r21.artworksNomesImg[3] == null ? null : ctx_r21.artworksNomesImg[3].content[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function ProfileComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dblclick", function ProfileComponent_div_3_div_1_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r41.main.logDebug(ctx_r41.user); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-foto-perfil", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ProfileComponent_div_3_div_1_p_5_Template, 2, 2, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ProfileComponent_div_3_div_1_p_6_Template, 2, 1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ProfileComponent_div_3_div_1_p_7_Template, 2, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ProfileComponent_div_3_div_1_p_8_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ProfileComponent_div_3_div_1_div_10_Template, 7, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ProfileComponent_div_3_div_1_div_11_Template, 7, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileComponent_div_3_div_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r43.openMoreModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ProfileComponent_div_3_div_1_button_16_Template, 2, 0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ProfileComponent_div_3_div_1_button_17_Template, 3, 3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ProfileComponent_div_3_div_1_button_18_Template, 3, 3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ProfileComponent_div_3_div_1_button_19_Template, 3, 3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ProfileComponent_div_3_div_1_button_20_Template, 3, 3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("user", ctx_r9.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.user.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.user.web);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.esPerfilPropi());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r9.esPerfilPropi());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.esPerfilPropi());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.artworksNomesImg && ctx_r9.artworksNomesImg[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.artworksNomesImg && ctx_r9.artworksNomesImg[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.artworksNomesImg && ctx_r9.artworksNomesImg[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.artworksNomesImg && ctx_r9.artworksNomesImg[3] && !ctx_r9.esPerfilPropi());
} }
function ProfileComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](2, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileComponent_div_3_div_2_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r44.main.goTo("/home"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](5, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nExp"](ctx_r10.paramsUrl.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nApply"](2);
} }
function ProfileComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProfileComponent_div_3_div_1_Template, 21, 12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ProfileComponent_div_3_div_2_Template, 6, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.user);
} }
function ProfileComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_5_app_publicacio_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-publicacio", 68);
} if (rf & 2) {
    const p_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("p", p_r49.artwork.post);
} }
function ProfileComponent_div_5_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](1, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_5_app_loading_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loading");
} }
function ProfileComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileComponent_div_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r50.tabActiu = 2; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](5, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ProfileComponent_div_5_app_publicacio_7_Template, 1, 1, "app-publicacio", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ProfileComponent_div_5_div_8_Template, 2, 0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ProfileComponent_div_5_app_loading_9_Template, 1, 0, "app-loading", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-open", ctx_r2.tabActiu == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !(ctx_r2.tabActiu == 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.artworks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.artworks && !ctx_r2.artworks.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.carregantArtworks);
} }
function ProfileComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProfileComponent_ul_10_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-user-info", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("user", f_r54);
} }
function ProfileComponent_ul_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](1, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProfileComponent_ul_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProfileComponent_ul_10_li_1_Template, 2, 1, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ProfileComponent_ul_10_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.followers);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r5.followers);
} }
function ProfileComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProfileComponent_ul_15_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-user-info", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("user", f_r57);
} }
function ProfileComponent_ul_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](1, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProfileComponent_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProfileComponent_ul_15_li_1_Template, 2, 1, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ProfileComponent_ul_15_div_2_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r8.following);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r8.following);
} }
swiper__WEBPACK_IMPORTED_MODULE_0__.default.use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination]);
// https://swiperjs.com/swiper-api#parameters //
class ProfileComponent {
    constructor(main, router, route, modalService) {
        this.main = main;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.estasSeguint = false;
        this.tabActiu = 2; //Nomes Artwork per la v1.5
        this.carregantFollowers = true;
        this.carregantFollowing = true;
        this.carregantBotoFollow = false;
        this.carregantPosts = true;
        this.carregantArtworks = true;
        main.newPage(this);
        // force route reload whenever params change;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.params.subscribe(params => this.paramsUrl = params);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.carregantProfile = true;
            yield this.actUser();
            if (!this.esPerfilPropi())
                yield this.actBotoFollow();
            if (this.user.photo == null)
                this.user.photo = this.main.provider.getUserPhoto(this.user.id);
            this.carregantProfile = false;
            this.carregantPosts = true;
            // this.posts = await this.main.provider.getXPostsNoArtworkByUser(this.user.id, 1, 100) || [];// TODO: Treure "[]"
            this.carregantPosts = false;
            this.carregantArtworks = true;
            // this.artworks = await this.main.provider.getXPostsSiArtworkByUser(this.user.id, 1, 100) || [];// TODO: Treure "[]"
            // this.artworksNomesImg = this.artworks.filter(e => e.content[0].type == 1);
            console.log("Info from var User: ", this.user);
            this.artworks = yield this.main.provider.getUserPosts(this.user.userProfile.userId);
            console.log(this.artworks);
            this.carregantArtworks = false;
        });
    }
    ngOnDestroy() {
        this.closeFollowersModal();
        this.closeFollowingModal();
        this.main.onDestroyPage();
    }
    actUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.main.provider.getUserByUsername(this.paramsUrl.username);
        });
    }
    actBotoFollow() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.user)
                this.estasSeguint = 0; // await this.main.provider.estasSeguint(this.user.id);
        });
    }
    esPerfilPropi() {
        var _a, _b;
        return ((_a = this.main.currentUser) === null || _a === void 0 ? void 0 : _a.username) == ((_b = this.user) === null || _b === void 0 ? void 0 : _b.nickname);
    }
    clickInsights() { this.main.notInMyBeta(); }
    clickOrders() { this.main.notInMyBeta(); }
    clickMessage() { this.main.notInMyBeta(); }
    clickFollow() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // this.carregantBotoFollow = true;
            // await this.main.provider.follow(this.user.id);
            // await this.actBotoFollow();
            // await this.actUser();
            // this.carregantBotoFollow = false;
            this.main.notInMyBeta();
        });
    }
    clickUnfollow() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // this.carregantBotoFollow = true;
            // await this.main.provider.unfollow(this.user.id);
            // await this.actBotoFollow();
            // await this.actUser();
            // this.carregantBotoFollow = false;
            this.main.notInMyBeta();
        });
    }
    clickSubscribe() { this.main.notInMyBeta(); }
    // clickMessage() { }
    // Modals //
    openNewModal() {
        this.main.modalOptions.openModal([
            // {
            //     accio: () => { this.main.goTo("new/post"); },
            //     img: "assets/in2art/icones/Post.svg",
            //     text: "Post",
            //     class: "post",
            // },
            {
                accio: () => { this.main.goTo("new/artwork"); },
                img: "assets/in2art/icones/Artwork.svg",
                text: "Artwork",
                class: "artwork",
            },
        ]);
    }
    closeNewModal() { this.main.modalOptions.closeModal(); }
    openMoreModal() {
        // Definir opcions //
        let copy = {
            accio: () => {
                this.closeMoreModal();
                this.main.copy(this.main.urlBase + "/" + this.user.nickname);
            },
            img: "assets/in2art/icones/link.svg",
            text: this.main.t("Copy profile URL"),
            class: "copy",
        };
        let report = {
            accio: () => {
                this.closeMoreModal();
                this.main.modalReport.openModal(this.user.id, 3);
            },
            img: "assets/in2art/icones/report.svg",
            text: this.main.t("Report"),
            class: "report",
        };
        // Aplicar opcions //
        let opcions = [];
        if (window.isSecureContext)
            opcions.push(copy);
        if (this.esPerfilPropi()) { }
        else {
            opcions.push(report);
        }
        this.main.modalOptions.openModal(opcions);
    }
    closeMoreModal() { this.main.modalOptions.closeModal(); }
    openFollowersModal() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.carregantFollowers = true;
            this.modalService.open(this.followersModal, {
                size: "md",
                modalClass: "followersModal",
                backdropClass: "modal-backdrop",
                hideCloseButton: true,
                centered: true,
                backdrop: true,
                animation: true,
                keyboard: true,
                closeOnOutsideClick: true,
            });
            this.followers = yield this.main.provider.getFollowers((_a = this.user) === null || _a === void 0 ? void 0 : _a.id);
            this.carregantFollowers = false;
        });
    }
    closeFollowersModal() {
        this.modalService.close(this.followersModal);
    }
    openFollowingModal() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.carregantFollowing = true;
            this.modalService.open(this.followingModal, {
                size: "md",
                modalClass: "followingModal",
                backdropClass: "modal-backdrop",
                hideCloseButton: true,
                centered: true,
                backdrop: true,
                animation: true,
                keyboard: true,
                closeOnOutsideClick: true,
            });
            this.following = yield this.main.provider.getFollowing((_a = this.user) === null || _a === void 0 ? void 0 : _a.id);
            this.carregantFollowing = false;
        });
    }
    closeFollowingModal() {
        this.modalService.close(this.followingModal);
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngb_modal__WEBPACK_IMPORTED_MODULE_9__.ModalManager)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], viewQuery: function ProfileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.followersModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.followingModal = _t.first);
    } }, decls: 16, vars: 7, consts: function () { let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_Edit_profile$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS____3 = goog.getMsg("Edit profile");
        i18n_2 = MSG_EXTERNAL_Edit_profile$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS____3;
    }
    else {
        i18n_2 = "Edit profile";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_Insights$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS____5 = goog.getMsg("Insights");
        i18n_4 = MSG_EXTERNAL_Insights$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS____5;
    }
    else {
        i18n_4 = "Insights";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_Message$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS____7 = goog.getMsg("Message");
        i18n_6 = MSG_EXTERNAL_Message$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS____7;
    }
    else {
        i18n_6 = "Message";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_Subscribe$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS____9 = goog.getMsg("Subscribe");
        i18n_8 = MSG_EXTERNAL_Subscribe$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS____9;
    }
    else {
        i18n_8 = "Subscribe";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_Message$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS____11 = goog.getMsg("Message");
        i18n_10 = MSG_EXTERNAL_Message$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS____11;
    }
    else {
        i18n_10 = "Message";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_Follow$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS_____13 = goog.getMsg("Follow");
        i18n_12 = MSG_EXTERNAL_Follow$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS_____13;
    }
    else {
        i18n_12 = "Follow";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_Unfollow$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS_____15 = goog.getMsg("Unfollow");
        i18n_14 = MSG_EXTERNAL_Unfollow$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS_____15;
    }
    else {
        i18n_14 = "Unfollow";
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_User_not_found$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS___17 = goog.getMsg("User \"{$interpolation}\" not found", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_16 = MSG_EXTERNAL_User_not_found$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS___17;
    }
    else {
        i18n_16 = "User \"" + "\uFFFD0\uFFFD" + "\" not found";
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_Go_to_home$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS___19 = goog.getMsg("Go to home");
        i18n_18 = MSG_EXTERNAL_Go_to_home$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS___19;
    }
    else {
        i18n_18 = "Go to home";
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_Artworks$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS__21 = goog.getMsg("Artworks");
        i18n_20 = MSG_EXTERNAL_Artworks$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS__21;
    }
    else {
        i18n_20 = "Artworks";
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_No_artworks_found$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS___23 = goog.getMsg("No artworks found");
        i18n_22 = MSG_EXTERNAL_No_artworks_found$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS___23;
    }
    else {
        i18n_22 = "No artworks found";
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_No_followers_found$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS___25 = goog.getMsg("No followers found");
        i18n_24 = MSG_EXTERNAL_No_followers_found$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS___25;
    }
    else {
        i18n_24 = "No followers found";
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_Not_following_anyone_yet$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS___27 = goog.getMsg("Not following anyone yet");
        i18n_26 = MSG_EXTERNAL_Not_following_anyone_yet$$SRC_APP_IN2ART_PAGES_PROFILE_PROFILE_COMPONENT_TS___27;
    }
    else {
        i18n_26 = "Not following anyone yet";
    } return [[1, "content"], [1, "card"], [1, "card-body"], [4, "ngIf"], ["class", "carregantProfile", 4, "ngIf"], ["class", "publicacions", 4, "ngIf"], ["id", "followersModal"], ["followersModal", ""], ["class", "carregant", 4, "ngIf"], ["class", "usuaris", 4, "ngIf"], ["id", "followingModal"], ["followingModal", ""], [3, "dblclick", 4, "ngIf"], ["class", "userNotFound", 4, "ngIf"], [3, "dblclick"], [1, "dadesPerfil", "row", "no-gutters"], [1, "divFotoPerfil", "col-6", "col-sm-3", "order-1", "order-sm-1"], [3, "user"], [1, "dadesUsuari", "col-12", "col-sm-5", "order-3", "order-sm-2"], ["class", "nom", 4, "ngIf"], ["class", "bio", 4, "ngIf"], ["class", "email", 4, "ngIf"], ["class", "web", 4, "ngIf"], [1, "botonsPerfil"], ["class", "botonsPerfil1 row no-gutters", 4, "ngIf"], [1, "botonsPerfil2"], [1, "boto", "botoSecundari", "col", 3, "click"], ["src", "assets/in2art/icones/more-options.svg", "alt", "More"], [1, "highlights"], ["class", "botoQuadrat botoNew boing", 3, "click", 4, "ngIf"], ["class", "botoQuadrat botoHighlight boing", 3, "height", 4, "ngIf"], [1, "nom"], [1, "bio"], [1, "email"], [1, "web"], [1, "botonsPerfil1", "row", "no-gutters"], i18n_2, i18n_4, i18n_6, ["class", "boto botoSecundari col", 3, "disabled", "click", 4, "ngIf"], ["class", "boto botoPrincipal col", 3, "disabled", "click", 4, "ngIf"], i18n_8, i18n_10, [1, "boto", "botoSecundari", "col", 3, "disabled", "click"], i18n_12, [1, "boto", "botoPrincipal", "col", 3, "disabled", "click"], i18n_14, [1, "botoQuadrat", "botoNew", "boing", 3, "click"], ["src", "assets/in2art/icones/Upload.svg", 1, "quadrat"], [1, "botoQuadrat", "botoHighlight", "boing"], ["boto1", ""], [1, "quadrat", 3, "src"], ["boto2", ""], ["boto3", ""], ["boto4", ""], [1, "userNotFound"], i18n_16, [1, "link", 3, "click"], i18n_18, [1, "carregantProfile"], [1, "publicacions"], [1, "botonsTab"], [1, "botoTab", 3, "click"], ["src", "assets/in2art/icones/Artwork.svg"], i18n_20, [1, "artworks", 3, "hidden"], [3, "p", 4, "ngFor", "ngForOf"], ["class", "noArtworks card", 4, "ngIf"], [3, "p"], [1, "noArtworks", "card"], i18n_22, [1, "carregant"], [1, "usuaris"], [4, "ngFor", "ngForOf"], ["class", "noUsuaris", 4, "ngIf"], [1, "noUsuaris"], i18n_24, i18n_26]; }, template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ProfileComponent_div_3_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ProfileComponent_div_4_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ProfileComponent_div_5_Template, 10, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "modal", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "modal-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ProfileComponent_div_9_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ProfileComponent_ul_10_Template, 3, 2, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "modal", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "modal-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ProfileComponent_div_14_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ProfileComponent_ul_15_Template, 3, 2, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.carregantProfile && ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.carregantProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.carregantProfile && ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.carregantFollowers);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.carregantFollowers);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.carregantFollowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.carregantFollowing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ngb_modal__WEBPACK_IMPORTED_MODULE_9__.ModalComponent, ngb_modal__WEBPACK_IMPORTED_MODULE_9__.ModalContentComponent, _components_user_info_foto_perfil_foto_perfil_component__WEBPACK_IMPORTED_MODULE_2__.FotoPerfilComponent, _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__.LoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, src_app_in2art_components_publicacio_publicacio_component__WEBPACK_IMPORTED_MODULE_4__.PublicacioComponent, _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_5__.UserInfoComponent], styles: [".content[_ngcontent-%COMP%] {\n  max-width: 940px;\n  padding: 100px 0;\n  border: none;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.userNotFound[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 1rem;\n}\n.dadesPerfil[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n}\n.dadesPerfil[_ngcontent-%COMP%]   .divFotoPerfil[_ngcontent-%COMP%]   .fons[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-color: #0002;\n  background-size: cover;\n  background-position-y: center;\n  opacity: 0.3;\n  filter: blur(10px) saturate(2);\n  transform: scale(1.1);\n}\n.dadesPerfil[_ngcontent-%COMP%]   .dadesUsuari[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.dadesPerfil[_ngcontent-%COMP%]   .dadesUsuari[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: inherit;\n}\n.dadesPerfil[_ngcontent-%COMP%]   .dadesUsuari[_ngcontent-%COMP%]   p.nom[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.dadesPerfil[_ngcontent-%COMP%]   .dadesUsuari[_ngcontent-%COMP%]   p.bio[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.dadesPerfil[_ngcontent-%COMP%]   .grupFollowers[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 20px;\n}\n.dadesPerfil[_ngcontent-%COMP%]   .grupFollowers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  padding: 2px 0;\n  color: #888;\n}\n.botonsPerfil[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 10px;\n}\n.botonsPerfil[_ngcontent-%COMP%]   .botonsPerfil1[_ngcontent-%COMP%] {\n  width: calc(100% - 50px);\n}\n.botonsPerfil[_ngcontent-%COMP%]   .botonsPerfil2[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.botonsPerfil[_ngcontent-%COMP%]   .botonsPerfil1[_ngcontent-%COMP%]   .boto[_ngcontent-%COMP%], .botonsPerfil[_ngcontent-%COMP%]   .botonsPerfil2[_ngcontent-%COMP%]   .boto[_ngcontent-%COMP%] {\n  padding: 0.125rem 0.5rem;\n  margin: 10px 1%;\n  font-size: 1.2rem;\n  border-radius: 20px;\n}\n.highlights[_ngcontent-%COMP%] {\n  display: flex;\n}\n.highlights[_ngcontent-%COMP%]   .botoQuadrat[_ngcontent-%COMP%] {\n  width: 25%;\n  margin: 5px;\n  padding: 0;\n  border: none;\n  border-radius: 13%;\n  background: none;\n  overflow: hidden;\n}\n.highlights[_ngcontent-%COMP%]   .botoQuadrat[_ngcontent-%COMP%]   img.quadrat[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n}\n.highlights[_ngcontent-%COMP%]   .botoQuadrat.botoNew[_ngcontent-%COMP%] {\n  border: 2px solid gray;\n  width: calc(25% - 2px);\n}\n.highlights[_ngcontent-%COMP%]   .botoQuadrat.botoNew[_ngcontent-%COMP%]   img.quadrat[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 25%;\n}\n.highlights[_ngcontent-%COMP%]   .botoQuadrat.botoHighlight[_ngcontent-%COMP%]   img.quadrat[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.carregantProfile[_ngcontent-%COMP%], .carregant[_ngcontent-%COMP%] {\n  padding: 50px;\n}\n.publicacions[_ngcontent-%COMP%]   .botonsTab[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  padding: 0;\n  border: var(--border-card);\n  border-radius: 15px 15px 0 0;\n  overflow: hidden;\n}\n.publicacions[_ngcontent-%COMP%]   .botonsTab[_ngcontent-%COMP%]   .botoTab[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: var(--color-fons-card);\n  color: var(--color-text);\n  transition: all 0.3s;\n}\n.publicacions[_ngcontent-%COMP%]   .botonsTab[_ngcontent-%COMP%]   .botoTab[data-open=true][_ngcontent-%COMP%] {\n  background-color: var(--color-tab-obert);\n}\n.publicacions[_ngcontent-%COMP%]   .botonsTab[_ngcontent-%COMP%]   .botoTab[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 8px;\n}\n.publicacions[_ngcontent-%COMP%]   .botonsTab[_ngcontent-%COMP%]   .botoTab[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline;\n  vertical-align: middle;\n  font-size: 1.5rem;\n}\n.publicacions[_ngcontent-%COMP%]   .posts[_ngcontent-%COMP%]   app-publicacio[_ngcontent-%COMP%], .publicacions[_ngcontent-%COMP%]   .artworks[_ngcontent-%COMP%]   app-publicacio[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 30px;\n}\n.publicacions[_ngcontent-%COMP%]   .posts[_ngcontent-%COMP%]   .noPosts[_ngcontent-%COMP%], .publicacions[_ngcontent-%COMP%]   .posts[_ngcontent-%COMP%]   .noArtworks[_ngcontent-%COMP%], .publicacions[_ngcontent-%COMP%]   .artworks[_ngcontent-%COMP%]   .noPosts[_ngcontent-%COMP%], .publicacions[_ngcontent-%COMP%]   .artworks[_ngcontent-%COMP%]   .noArtworks[_ngcontent-%COMP%] {\n  padding: 1rem;\n  font-size: 1.75rem;\n  text-align: center;\n  border-top: none;\n  border-radius: 0 0 15px 15px;\n}\n[_nghost-%COMP%]     #followersModal .modal-content, [_nghost-%COMP%]     #followingModal .modal-content {\n  overflow: hidden;\n  border: none;\n  border-radius: 40px;\n  background: var(--color-fons-card);\n}\n[_nghost-%COMP%]     #followersModal .modal-content .modal-header, [_nghost-%COMP%]     #followingModal .modal-content .modal-header {\n  display: none;\n}\n[_nghost-%COMP%]     #followersModal .modal-content .modal-body, [_nghost-%COMP%]     #followingModal .modal-content .modal-body {\n  padding: 0;\n}\n[_nghost-%COMP%]     #followersModal .modal-content .modal-body ul.usuaris li:hover, [_nghost-%COMP%]     #followingModal .modal-content .modal-body ul.usuaris li:hover {\n  background: #09f4;\n}\n[_nghost-%COMP%]     #followersModal .modal-content .modal-body ul.usuaris .noUsuaris, [_nghost-%COMP%]     #followingModal .modal-content .modal-body ul.usuaris .noUsuaris {\n  font-size: 1.2rem;\n  padding: 2rem;\n}\n[_nghost-%COMP%]     #followersModal .modal-content .modal-footer, [_nghost-%COMP%]     #followingModal .modal-content .modal-footer {\n  display: none;\n}\n@media only screen and (max-width: 576px) {\n  .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .dadesPerfil[_ngcontent-%COMP%]   .dadesUsuari[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .dadesPerfil[_ngcontent-%COMP%]   .grupFollowers[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .content[_ngcontent-%COMP%]   .publicacions[_ngcontent-%COMP%]   .botonsTab[_ngcontent-%COMP%] {\n    height: 40px;\n    border-radius: 0;\n    border-left: none;\n    border-right: none;\n  }\n  .content[_ngcontent-%COMP%]   .publicacions[_ngcontent-%COMP%]   .botonsTab[_ngcontent-%COMP%]   .botoTab[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNEO0FBQ0M7RUFDQyxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDQyxVQUFBO0FBQ0g7QUFJQTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7QUFERDtBQUlBO0VBQ0ksbUJBQUE7RUFDSCxrQkFBQTtBQUREO0FBTUU7RUFDQyxrQkFBQTtFQUVBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQUxIO0FBVUM7RUFDQyxhQUFBO0FBUkY7QUFVRTtFQUNDLG1CQUFBO0VBQ0Esa0JBQUE7QUFSSDtBQVVHO0VBQ0MsaUJBQUE7QUFSSjtBQVVHO0VBQ0Msa0JBQUE7QUFSSjtBQWNDO0VBQ0MsaUJBQUE7RUFDQSxhQUFBO0FBWkY7QUFjRTtFQUNDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBWkg7QUFvQkE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUFsQkQ7QUFvQkM7RUFBaUIsd0JBQUE7QUFqQmxCO0FBa0JDO0VBQWlCLFdBQUE7QUFmbEI7QUFrQkU7RUFDQyx3QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBaEJIO0FBcUJBO0VBQ0ksYUFBQTtBQWxCSjtBQW9CQztFQUNDLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFsQkY7QUFvQkU7RUFDQyxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtBQWxCSDtBQXFCRTtFQUNDLHNCQUFBO0VBQ0Esc0JBQUE7QUFuQkg7QUFxQkc7RUFDQyxVQUFBO0VBQ0EsV0FBQTtBQW5CSjtBQXVCRztFQUNDLFlBQUE7QUFyQko7QUEyQkE7RUFDQyxhQUFBO0FBeEJEO0FBNkJDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBMUJGO0FBNEJFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FBMUJIO0FBNEJHO0VBQ0Msd0NBQUE7QUExQko7QUErQkc7RUFDQyxZQUFBO0VBQ0EsWUFBQTtBQTdCSjtBQStCRztFQUNDLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBN0JKO0FBa0NFO0VBQ0MsY0FBQTtFQUNBLG1CQUFBO0FBaENIO0FBa0NFO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBaENIO0FBeUNDO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQXRDRjtBQXdDRTtFQUFnQixhQUFBO0FBckNsQjtBQXNDRTtFQUNDLFVBQUE7QUFwQ0g7QUF3Q0s7RUFDQyxpQkFBQTtBQXRDTjtBQXlDSTtFQUNDLGlCQUFBO0VBQ0EsYUFBQTtBQXZDTDtBQTJDRTtFQUFnQixhQUFBO0FBeENsQjtBQThDQTtFQUVFO0lBQ0MsU0FBQTtFQTVDRDtFQStDRTtJQUNDLGFBQUE7RUE3Q0g7RUFrREM7SUFDQyxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUFtQixrQkFBQTtFQS9DckI7RUFpREc7SUFDQyxpQkFBQTtFQS9DSjtBQUNGIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0bWF4LXdpZHRoOiA5NDBweDtcclxuXHRwYWRkaW5nOiAxMDBweCAwO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHJcblx0LmNhcmQge1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNDBweDtcclxuXHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuXHRcdC5jYXJkLWJvZHkge1xyXG5cdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLnVzZXJOb3RGb3VuZCB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDRyZW0gMXJlbTtcclxufVxyXG5cclxuLmRhZGVzUGVyZmlsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Zm9udC1zaXplOiAxLjI1cmVtO1xyXG5cdFxyXG5cdC5kaXZGb3RvUGVyZmlsIHtcclxuXHJcblx0XHRhcHAtZm90by1wZXJmaWwge31cclxuXHRcdC5mb25zIHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHQvLyB0b3A6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IGxlZnQ6IDA7XHJcblx0XHRcdGluc2V0OiAwO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMjtcclxuXHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XHJcblx0XHRcdG9wYWNpdHk6IDAuMztcclxuXHRcdFx0ZmlsdGVyOiBibHVyKDEwcHgpIHNhdHVyYXRlKDIpO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdC5kYWRlc1VzdWFyaSB7XHJcblx0XHRwYWRkaW5nOiAyMHB4O1xyXG5cclxuXHRcdHAge1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdFx0XHRmb250LXNpemU6IGluaGVyaXQ7XHJcblxyXG5cdFx0XHQmLm5vbSB7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji5iaW8ge1xyXG5cdFx0XHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRcdFx0fVxyXG5cdFx0XHQmLmVtYWlsIHt9XHJcblx0XHRcdCYud2ViIHt9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5ncnVwRm9sbG93ZXJzIHtcclxuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFx0cGFkZGluZzogMjBweDtcclxuXHJcblx0XHRidXR0b24ge1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHRcdHBhZGRpbmc6IDJweCAwO1xyXG5cdFx0XHRjb2xvcjogIzg4ODtcclxuXHJcblx0XHRcdCYuZm9sbG93ZXJzIHt9XHJcblx0XHRcdCYuZm9sbG93aW5nIHt9XHJcblx0XHRcdCYuc3Vic2NyaWJlcnMge31cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLmJvdG9uc1BlcmZpbCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuXHQuYm90b25zUGVyZmlsMSB7IHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTsgfVxyXG5cdC5ib3RvbnNQZXJmaWwyIHsgd2lkdGg6IDUwcHg7IH1cclxuXHRcclxuXHQuYm90b25zUGVyZmlsMSwgLmJvdG9uc1BlcmZpbDIge1xyXG5cdFx0LmJvdG8ge1xyXG5cdFx0XHRwYWRkaW5nOiAwLjEyNXJlbSAwLjVyZW07XHJcblx0XHRcdG1hcmdpbjogMTBweCAxJTtcclxuXHRcdFx0Zm9udC1zaXplOiAxLjJyZW07XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uaGlnaGxpZ2h0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cdFxyXG5cdC5ib3RvUXVhZHJhdCB7XHJcblx0XHR3aWR0aDogMjUlO1xyXG5cdFx0bWFyZ2luOiA1cHg7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTMlOyAvLyBQZXIgcXVhZHJhciBhbWIgbGEgY3VydmF0dXJhIGRlbCBjYXJkIC8vXHJcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFxyXG5cdFx0aW1nLnF1YWRyYXQge1xyXG5cdFx0XHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR9XHJcblxyXG5cdFx0Ji5ib3RvTmV3IHtcclxuXHRcdFx0Ym9yZGVyOiAycHggc29saWQgZ3JheTtcclxuXHRcdFx0d2lkdGg6IGNhbGMoMjUlIC0gMnB4KTtcclxuXHRcdFx0XHJcblx0XHRcdGltZy5xdWFkcmF0IHtcclxuXHRcdFx0XHR3aWR0aDogNTAlO1xyXG5cdFx0XHRcdG1hcmdpbjogMjUlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQmLmJvdG9IaWdobGlnaHQge1xyXG5cdFx0XHRpbWcucXVhZHJhdCB7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uY2FycmVnYW50UHJvZmlsZSwgLmNhcnJlZ2FudCB7XHJcblx0cGFkZGluZzogNTBweDtcclxufVxyXG5cclxuLnB1YmxpY2FjaW9ucyB7XHJcblxyXG5cdC5ib3RvbnNUYWIge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0Ym9yZGVyOiB2YXIoLS1ib3JkZXItY2FyZCk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcblx0XHQuYm90b1RhYiB7XHJcblx0XHRcdHdpZHRoOiAxMDAlOyAvL0NhbnZpYXIgYWwgNTAlIHF1YW4gaGkgaGFnaSAyIGJvdG9ucy8vXHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb25zLWNhcmQpO1xyXG5cdFx0XHRjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XHJcblx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuXHRcdFx0JltkYXRhLW9wZW49dHJ1ZV0ge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRhYi1vYmVydCk7XHJcblx0XHRcdFx0ZGl2IHtcclxuXHRcdFx0XHRcdC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpbWcge1xyXG5cdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRwYWRkaW5nOiA4cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0ZGl2IHtcclxuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmU7XHJcblx0XHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdFx0XHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQucG9zdHMsIC5hcnR3b3JrcyB7XHJcblx0XHRhcHAtcHVibGljYWNpbyB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0fVxyXG5cdFx0Lm5vUG9zdHMsIC5ub0FydHdvcmtzIHtcclxuXHRcdFx0cGFkZGluZzogMXJlbTtcclxuXHRcdFx0Zm9udC1zaXplOiAxLjc1cmVtO1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdGJvcmRlci10b3A6IG5vbmU7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcbn1cclxuXHJcbi8vIE1PREFMUyAvL1xyXG46aG9zdCA6Om5nLWRlZXAgI2ZvbGxvd2Vyc01vZGFsLCA6aG9zdCA6Om5nLWRlZXAgI2ZvbGxvd2luZ01vZGFsIHtcclxuXHQubW9kYWwtY29udGVudCB7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNDBweDtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWZvbnMtY2FyZCk7XHJcblxyXG5cdFx0Lm1vZGFsLWhlYWRlciB7IGRpc3BsYXk6IG5vbmU7IH1cclxuXHRcdC5tb2RhbC1ib2R5IHtcclxuXHRcdFx0cGFkZGluZzogMDtcclxuXHJcblx0XHRcdHVsLnVzdWFyaXMge1xyXG5cdFx0XHRcdGxpIHtcclxuXHRcdFx0XHRcdCY6aG92ZXIge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDlmNDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lm5vVXN1YXJpcyB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMnJlbTtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDJyZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQubW9kYWwtZm9vdGVyIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cdH1cclxufVxyXG5cclxuLy8gTWVkaWEgcXVlcmllcyAvL1xyXG4vLyBNw7JiaWwgLy9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG5cdC5jb250ZW50IHtcclxuXHRcdC5jYXJkIHtcclxuXHRcdFx0bWFyZ2luOiAwO1xyXG5cclxuXHRcdFx0LmRhZGVzUGVyZmlsIHtcclxuXHRcdFx0XHQuZGFkZXNVc3VhcmksIC5ncnVwRm9sbG93ZXJzIHtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQucHVibGljYWNpb25zIHtcclxuXHRcdFx0LmJvdG9uc1RhYiB7XHJcblx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDA7XHJcblx0XHRcdFx0Ym9yZGVyLWxlZnQ6IG5vbmU7IGJvcmRlci1yaWdodDogbm9uZTtcclxuXHRcdFx0XHQuYm90b1RhYiB7XHJcblx0XHRcdFx0XHRkaXYge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEuMnJlbTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 67997:
/*!********************************************************!*\
  !*** ./src/app/in2art/pages/profile/profile.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": function() { return /* binding */ ProfileModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component */ 99879);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-routing.module */ 75737);
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngb-modal */ 58603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);








class ProfileModule {
}
ProfileModule.ɵfac = function ProfileModule_Factory(t) { return new (t || ProfileModule)(); };
ProfileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProfileRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
            ngb_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent], imports: [_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProfileRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
        ngb_modal__WEBPACK_IMPORTED_MODULE_7__.ModalModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_in2art_pages_profile_profile_module_ts-es2015.js.map