"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[296],{

/***/ 87783:
/*!***************************************************************************!*\
  !*** ./src/app/pages/new/components/new-artwork/new-artwork.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewArtworkComponent: () => (/* binding */ NewArtworkComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var _ApiClient_services_artist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ApiClient/services/artist */ 18034);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @enums/urls */ 94317);
/* harmony import */ var _enums_date_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @enums/date-format */ 90211);
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/auth/auth.selectors */ 47393);
/* harmony import */ var _store_newArtwork_newArtwork_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store/newArtwork/newArtwork.selectors */ 68349);
/* harmony import */ var _store_newArtwork_newArwork_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/newArtwork/newArwork.actions */ 69770);
/* harmony import */ var _services_artist_name_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/artist-name.service */ 51195);
/* harmony import */ var _utils_filterArtistNames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @utils/filterArtistNames */ 58311);
/* harmony import */ var _utils_dateFormatList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @utils/dateFormatList */ 7181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/container/container.component */ 2645);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var _shared_directives_event_blocker_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/directives/event-blocker.directive */ 22649);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/inputtextarea */ 87058);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_inputgroup__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/inputgroup */ 64661);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var _shared_components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/image-cropper/image-cropper.component */ 46049);
/* harmony import */ var _shared_components_aspect_ratio_controls_aspect_ratio_controls_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/aspect-ratio-controls/aspect-ratio-controls.component */ 80541);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/autocomplete */ 38784);






































const _c0 = ["fileInput"];
const _c1 = () => ({
  standalone: true
});
const _c2 = (a0, a1, a2) => ["/", a0, a1, a2];
const _c3 = a0 => ({
  isDragover: a0
});
function NewArtworkComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 64)(1, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("dragend", function NewArtworkComponent_div_9_Template_button_dragend_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.isDragover = false);
    })("dragover", function NewArtworkComponent_div_9_Template_button_dragover_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.isDragover = true);
    })("dragenter", function NewArtworkComponent_div_9_Template_button_dragenter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.isDragover = true);
    })("dragleave", function NewArtworkComponent_div_9_Template_button_dragleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.isDragover = false);
    })("mouseleave", function NewArtworkComponent_div_9_Template_button_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.isDragover = false);
    })("drop", function NewArtworkComponent_div_9_Template_button_drop_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.storeFile($event));
    })("click", function NewArtworkComponent_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      const fileInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](fileInput_r4.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "svg", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "use", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](4, _c3, ctx_r2.isDragover));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 2, "IMAGE_CROPPER.DRAG_DROP"));
  }
}
function NewArtworkComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 69)(1, "app-image-cropper", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("croppedFile", function NewArtworkComponent_ng_template_10_Template_app_image_cropper_croppedFile_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.onSelectCroppedFile($event));
    })("uploadFileOutside", function NewArtworkComponent_ng_template_10_Template_app_image_cropper_uploadFileOutside_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.clickFileInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "app-aspect-ratio-controls", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("aspectRatioChange", function NewArtworkComponent_ng_template_10_Template_app_aspect_ratio_controls_aspectRatioChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.changeAspectRatio($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("roundCropper", false)("aspectRatio", ctx_r2.templateAspectRatio)("fileInput", ctx_r2.fileToCropper);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("aspectRatio", ctx_r2.originalAspectRatio);
  }
}
function NewArtworkComponent_small_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_TITLE"), " ");
  }
}
function NewArtworkComponent_div_29_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function NewArtworkComponent_div_29_ng_container_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7);
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.deleteArtist(i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function NewArtworkComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 13)(1, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "p-inputGroup")(5, "p-autoComplete", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("completeMethod", function NewArtworkComponent_div_29_Template_p_autoComplete_completeMethod_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.filterAutoCompleteArtists($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, NewArtworkComponent_div_29_ng_container_8_Template, 2, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("for", "artist_", i_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 11, "LABEL.ARTIST"), " ", i_r8 === 0 ? "" : i_r8 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("id", "artist_", i_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("emptyMessage", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 13, "NEW_PAGE.ARTWORK.ARTIST_EMPTY_MESSAGE"))("formControlName", i_r8)("suggestions", ctx_r2.filteredArtistsList)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 15, "NEW_PAGE.ARTWORK.PLACEHOLDER.ARTIST"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r8 > 0);
  }
}
function NewArtworkComponent_ng_container_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "p-calendar", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("maxDate", ctx_r2.maxDate);
  }
}
function NewArtworkComponent_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "p-calendar", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("maxDate", ctx_r2.maxDate);
  }
}
function NewArtworkComponent_ng_container_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "p-calendar", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("maxDate", ctx_r2.maxDate);
  }
}
function NewArtworkComponent_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function NewArtworkComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function NewArtworkComponent_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function NewArtworkComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 83)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r2.dateFormatOptions[ctx_r2.currentDateFormat].name);
  }
}
function NewArtworkComponent_small_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "ERROR.INVALID_DECADE"), " ");
  }
}
function NewArtworkComponent_small_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "ERROR.INVALID_CENTURY"));
  }
}
function NewArtworkComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("error", (tmp_3_0 = ctx_r2.newArtworkForm.get("description")) == null ? null : tmp_3_0.hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", ctx_r2.newArtworkForm.value.description == null ? null : ctx_r2.newArtworkForm.value.description.length, "/", ctx_r2.maxLengthDescription, " ");
  }
}
function NewArtworkComponent_small_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "ERROR.MAX_LIMIT"), " ");
  }
}
function NewArtworkComponent_small_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_DESCRIPTION"), " ");
  }
}
function NewArtworkComponent_small_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_AGREE_PRIVACY"), " ");
  }
}
let NewArtworkComponent = /*#__PURE__*/(() => {
  class NewArtworkComponent {
    constructor(store, fb, toast, artistNameService, translate) {
      this.store = store;
      this.fb = fb;
      this.toast = toast;
      this.artistNameService = artistNameService;
      this.translate = translate;
      this.isDragover = false;
      this.originalAspectRatio = 1;
      this.templateAspectRatio = 1;
      this.fileToCropper = null;
      this.originalFile = null;
      this.originalFileExt = 'png';
      this.thumbnailFile = null;
      this.maxLengthDescription = 5000;
      this.isLoading$ = this.store.select(_store_newArtwork_newArtwork_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsLoadingNewArtwork);
      this.userName$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_4__.selectCurrentUserProfileName);
      this.currentDateFormat = _enums_date_format__WEBPACK_IMPORTED_MODULE_3__.DATE_FORMAT_ARTWORK.FULL_DATE;
      this.locale$ = this.translate.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.startWith)({
        lang: this.translate.currentLang
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(event => event.lang));
      this.currentUserNickname$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_4__.selectCurrentUserNickname);
      this.artistsList = [];
      this.filteredArtistsList = [];
      this.newArtworkForm = this.fb.group({
        artists: this.fb.array([new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('')]),
        title: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]),
        description: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.maxLength(this.maxLengthDescription)]),
        additional: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({
          technique: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(''),
          dimensions: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(''),
          material: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(''),
          others: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('')
          // preservation: new FormControl(''),
          // location: new FormControl(''),
        }),
        date: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({
          year: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(''),
          monthYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(''),
          full: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(''),
          century: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/)]),
          decade: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(/^(\d{0,3}0)$/)]),
          other: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(''),
          beforeChrist: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(false)
        }),
        isArtistUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]),
        agreeToTerms: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.requiredTrue])
        // price: new FormControl(0),
      });
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_2__.URLS;
      this.DATE_FORMAT_ARTWORK = _enums_date_format__WEBPACK_IMPORTED_MODULE_3__.DATE_FORMAT_ARTWORK;
      this.dateFormatOptions = _utils_dateFormatList__WEBPACK_IMPORTED_MODULE_9__.dateFormatOptions;
    }
    get artists() {
      return this.newArtworkForm.controls['artists'];
    }
    get date() {
      return this.newArtworkForm.controls['date'];
    }
    get additional() {
      return this.newArtworkForm.controls['additional'];
    }
    ngOnInit() {
      this.artistNameService.getArtistNames().then(artists => {
        this.artistsList = artists;
      });
      this.maxDate = new Date();
      this.newArtworkForm.get('isArtistUser')?.valueChanges.subscribe(value => {
        if (value) {
          this.userName$.subscribe(username => {
            if (username) {
              this.artists.controls[0].setValue(username);
              this.artists.controls[0].disable();
            }
          });
        } else {
          this.artists.controls[0].setValue('');
          this.artists.controls[0].enable();
        }
      });
    }
    clickFileInput() {
      this.fileToCropper = null;
      this.fileInput.nativeElement.click();
    }
    changeDateFormat(format) {
      this.currentDateFormat = format;
      this.date.reset();
    }
    onSubmit() {
      if (this.newArtworkForm.invalid) {
        this.newArtworkForm.markAllAsTouched();
        return;
      }
      const artistNames = (0,_utils_filterArtistNames__WEBPACK_IMPORTED_MODULE_8__.filterArtistNames)(this.artists.getRawValue(), this.newArtworkForm.controls.isArtistUser.value ?? false);
      const dateValue = (0,_utils_dateFormatList__WEBPACK_IMPORTED_MODULE_9__.getNewArtworkDate)(this.currentDateFormat, this.date.value);
      const newArtwork = {
        post: {
          files: [{
            fileExt: this.originalFileExt,
            dataBase64: this.originalFile ?? '',
            thumbnail: {
              fileExt: 'png',
              dataBase64: this.thumbnailFile ?? ''
            }
          }],
          languages: [{
            title: this.newArtworkForm.get('title')?.value ?? '',
            description: this.newArtworkForm.get('description')?.value ?? '',
            langCode: this.translate.currentLang
          }]
        },
        languages: [{
          ...this.additional.value,
          langCode: this.translate.currentLang
        }],
        date: (0,_utils_dateFormatList__WEBPACK_IMPORTED_MODULE_9__.getNewArtworkDate)(this.currentDateFormat, this.date.value),
        dateFormatType: (0,_utils_dateFormatList__WEBPACK_IMPORTED_MODULE_9__.getDateFormat)(this.currentDateFormat, dateValue),
        afterChrist: !this.date.get('beforeChrist')?.value,
        isArtistUser: this.newArtworkForm.get('isArtistUser')?.value
      };
      this.store.dispatch((0,_store_newArtwork_newArwork_actions__WEBPACK_IMPORTED_MODULE_6__.postNewArtworkAction)({
        newArtwork,
        artistNames
      }));
    }
    onSelectCroppedFile(file) {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.thumbnailFile = file;
      })();
    }
    addArtist() {
      this.artists.push(this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required], [this.artistNameValidator()]));
    }
    deleteArtist(artistIndex) {
      this.artists.removeAt(artistIndex);
    }
    filterAutoCompleteArtists(event) {
      const query = event.query.toLowerCase();
      this.filteredArtistsList = this.artistsList.filter(artist => {
        const artistNameWords = artist.name.toLowerCase().split(' ');
        return artistNameWords.some(word => word.startsWith(query));
      });
    }
    onSelectFileUpload(event) {
      var _this2 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const target = event.target;
        const fileList = target.files;
        if (fileList && fileList.length > 0) {
          const file = fileList[0];
          if (!file.type.startsWith('image/')) {
            _this2.showErrorMessage('ERROR.WRONG_TYPE');
          } else {
            _this2.originalFileExt = file.type.split('/')[1];
            const reader = new FileReader();
            reader.onload = event => {
              const img = new Image();
              _this2.originalFile = reader.result;
              img.onload = () => {
                _this2.originalAspectRatio = img.width / img.height;
                if (_this2.originalAspectRatio > 16 / 9) {
                  _this2.templateAspectRatio = 16 / 9;
                } else if (_this2.originalAspectRatio < 9 / 16) {
                  _this2.templateAspectRatio = 9 / 16;
                } else {
                  _this2.templateAspectRatio = img.width / img.height;
                }
              };
              img.src = event.target?.result;
            };
            reader.readAsDataURL(file);
            _this2.fileToCropper = file;
          }
        }
      })();
    }
    storeFile($event) {
      var _this3 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this3.isDragover = false;
        _this3.fileToCropper = $event.dataTransfer ? $event.dataTransfer?.files.item(0) ?? null : $event.target.files?.item(0) ?? null;
      })();
    }
    showErrorMessage(key) {
      this.toast.add({
        severity: 'error',
        summary: this.translate.instant('ERROR.TITLE'),
        detail: this.translate.instant(key)
      });
    }
    changeAspectRatio(ratio) {
      this.templateAspectRatio = ratio;
    }
    artistNameValidator() {
      return control => {
        return _ApiClient_services_artist__WEBPACK_IMPORTED_MODULE_1__["default"].search(control.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(artists => {
          if (artists.length > 0) {
            return null;
          } else {
            return {
              artistNotExist: true
            };
          }
        }));
      };
    }
    static #_ = this.ɵfac = function NewArtworkComponent_Factory(t) {
      return new (t || NewArtworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_18__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_19__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_artist_name_service__WEBPACK_IMPORTED_MODULE_7__.ArtistNameService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: NewArtworkComponent,
      selectors: [["app-new-artwork"]],
      viewQuery: function NewArtworkComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        }
      },
      decls: 131,
      vars: 116,
      consts: [["fileInput", ""], ["imageFromFile", ""], [3, "width", "isLoading"], [1, "flex", "flex-column", "align-items-center", "gap-4", "relative"], [1, "font-bold", "text-2xl", "md:text-4xl", "md:align-self-center"], [1, "flex", "justify-content-center", "w-full"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["class", "file-input-button", 4, "ngIf", "ngIfElse"], [1, "new-artwork-form", 3, "ngSubmit", "formGroup"], ["open", ""], [1, "summary"], [1, "pi", "pi-chevron-down", "add-info-chevron"], [1, "flex", "flex-column", "mt-3", "md:mt-4", "gap-3"], [1, "input-group"], ["for", "title"], ["type", "text", "id", "title", "pInputText", "", "formControlName", "title", 1, "w-full", 3, "placeholder"], ["class", "error-message text-sm", 4, "ngIf"], ["formArrayName", "artists", 1, "flex", "flex-column", "gap-3", "artists-wrapper"], ["class", "input-group", 4, "ngFor", "ngForOf"], [1, "is-author-wrapper", "flex", "align-items-center", "justify-content-between"], ["for", "isArtistUser", 1, "flex", "align-items-center", "gap-2", "m-0"], ["id", "isArtistUser", "formControlName", "isArtistUser", 3, "binary"], [1, "font-normal", "text-base"], ["type", "button", 1, "add-author-button", 3, "click"], [1, "pi", "pi-plus"], [1, "input-group", 3, "formGroup"], [1, "hidden", "text-lg", "md:block", "font-bold", "line-height-3"], [1, "date-group-inner"], [1, "flex", "flex-column", "md:flex-row"], [1, "block", "font-bold", "md:hidden", "line-height-3", "mb-2"], [4, "ngIf"], [1, "flex", "flex-column", "md:flex-row", "md:gap-3", "align-items-center"], [1, "date-format-label", "md:text-center"], ["optionLabel", "name", "optionValue", "code", 3, "onChange", "ngModelChange", "options", "ngModel", "ngModelOptions"], ["pTemplate", "selectedItem"], ["for", "beforeChrist", 1, "before-christ"], ["id", "beforeChrist", "formControlName", "beforeChrist", 3, "binary"], [1, "block", "md:hidden"], [1, "hidden", "md:block", "text-base"], [1, "input-group", "align-items-start"], ["for", "description"], [1, "relative"], ["id", "description", "rows", "3", "pInputTextarea", "", "formControlName", "description", 1, "w-full", 3, "autoResize", "placeholder"], ["class", "input-letter-count-description", 3, "error", 4, "ngIf"], [1, "flex", "flex-column", "gap-3", "mt-3", "md:mt-4", 3, "formGroup"], ["for", "material", 1, "block", "font-bold"], ["id", "material", "type", "text", "pInputText", "", "formControlName", "material", 1, "w-full", 3, "placeholder"], ["for", "technique", 1, "block", "font-bold"], ["id", "technique", "type", "text", "pInputText", "", "formControlName", "technique", 1, "w-full", 3, "placeholder"], ["for", "dimensions", 1, "block", "font-bold"], ["id", "dimensions", "type", "text", "pInputText", "", "formControlName", "dimensions", 1, "w-full", 3, "placeholder"], ["for", "other", 1, "block", "font-bold"], ["id", "other", "type", "text", "pInputText", "", "formControlName", "others", 1, "w-full", 3, "placeholder"], [1, "flex", "flex-column", "align-items-center", "gap-3", "md:gap-5"], [1, "agree-term"], ["id", "agreeToTerms", "formControlName", "agreeToTerms", 3, "binary"], [1, "line-height-3", "text-sm", "w-10"], ["for", "agreeToTerms"], [1, "cursor-pointer", "font-bold"], ["class", "error-message text-sm m-0 md:flex-grow-1", 4, "ngIf"], ["type", "submit", "pButton", "", "pRipple", "", 1, "w-9", "md:w-6", 3, "label", "disabled"], [1, "back-button", 3, "routerLink"], ["width", "19", "height", "19"], ["href", "assets/images/icons.svg#back-button"], [1, "file-input-button"], ["appEventBlocker", "", 1, "upload", "transition-duration-500", 3, "dragend", "dragover", "dragenter", "dragleave", "mouseleave", "drop", "click", "ngClass"], ["width", "80", "height", "79"], ["href", "assets/images/icons.svg#drag-file"], [1, "text-xl", "mg:text-2xl"], [1, "flex", "flex-column", "gap-3", "w-full"], [3, "croppedFile", "uploadFileOutside", "roundCropper", "aspectRatio", "fileInput"], [3, "aspectRatioChange", "aspectRatio"], [1, "error-message", "text-sm"], [1, "block", "font-bold", 3, "for"], ["optionLabel", "name", 1, "w-full", 3, "completeMethod", "emptyMessage", "id", "formControlName", "suggestions", "placeholder"], ["type", "button", "pButton", "", "icon", "pi pi-trash", 1, "remove-artist-button", 3, "click"], ["dateFormat", "dd.mm.yy", "placeholder", "17.08.1979", "formControlName", "full", "styleClass", "w-full", 1, "date-input", 3, "maxDate"], ["placeholder", "08/1979", "dateFormat", "mm/yy", "formControlName", "monthYear", "view", "month", "styleClass", "date-input", 1, "date-input", 3, "maxDate"], ["placeholder", "1979", "formControlName", "year", "dateFormat", "yy", "view", "year", "styleClass", "date-input", 1, "date-input", 3, "maxDate"], [1, "flex", "flex-column", "gap-2", "w-full"], ["placeholder", "XXVI", "formControlName", "century", "type", "text", "pInputText", "", 1, "date-input"], ["placeholder", "1990s", "formControlName", "decade", "type", "text", "pInputText", "", 1, "date-input"], ["placeholder", "Other", "formControlName", "other", "type", "text", "pInputText", "", 1, "date-input"], [1, "format-dropdown"], [1, "input-letter-count-description"], [1, "error-message", "text-sm", "m-0", "md:flex-grow-1"]],
      template: function NewArtworkComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 3)(3, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 5)(7, "input", 6, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function NewArtworkComponent_Template_input_change_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.onSelectFileUpload($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, NewArtworkComponent_div_9_Template, 7, 6, "div", 7)(10, NewArtworkComponent_ng_template_10_Template, 3, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "form", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function NewArtworkComponent_Template_form_ngSubmit_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "details", 9)(14, "summary", 10)(15, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](25, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, NewArtworkComponent_small_26_Template, 3, 3, "small", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div", 13)(28, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, NewArtworkComponent_div_29_Template, 9, 17, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 19)(31, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](32, "p-checkbox", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](35, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function NewArtworkComponent_Template_button_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.addArtist());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](37, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](39, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "div", 25)(41, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](43, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "div", 27)(45, "div", 28)(46, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](48, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](49, NewArtworkComponent_ng_container_49_Template, 2, 1, "ng-container", 30)(50, NewArtworkComponent_ng_container_50_Template, 2, 1, "ng-container", 30)(51, NewArtworkComponent_ng_container_51_Template, 2, 1, "ng-container", 30)(52, NewArtworkComponent_ng_container_52_Template, 3, 0, "ng-container", 30)(53, NewArtworkComponent_ng_container_53_Template, 2, 0, "ng-container", 30)(54, NewArtworkComponent_ng_container_54_Template, 2, 0, "ng-container", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "div", 31)(56, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](58, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "p-dropdown", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onChange", function NewArtworkComponent_Template_p_dropdown_onChange_59_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.changeDateFormat($event.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function NewArtworkComponent_Template_p_dropdown_ngModelChange_59_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx.currentDateFormat, $event) || (ctx.currentDateFormat = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](60, NewArtworkComponent_ng_template_60_Template, 3, 1, "ng-template", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](61, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](62, "p-checkbox", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](64);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](65, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](68, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](69, NewArtworkComponent_small_69_Template, 3, 3, "small", 16)(70, NewArtworkComponent_small_70_Template, 3, 3, "small", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](71, "div", 39)(72, "label", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](73);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](74, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](75, "div", 41)(76, "textarea", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](77, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](78, "              ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](79, NewArtworkComponent_div_79_Template, 2, 4, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](80, NewArtworkComponent_small_80_Template, 3, 3, "small", 16)(81, NewArtworkComponent_small_81_Template, 3, 3, "small", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](82, "details", 9)(83, "summary", 10)(84, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](85);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](86, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](87, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "div", 44)(89, "div", 13)(90, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](91);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](92, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](93, "input", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](94, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](95, "div", 13)(96, "label", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](97);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](98, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](99, "input", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](100, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](101, "div", 13)(102, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](103);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](104, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](105, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](106, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](107, "div", 13)(108, "label", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](109);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](110, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](111, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](112, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](113, "div", 53)(114, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](115, "p-checkbox", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](116, "div", 56)(117, "label", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](118);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](119, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](120, "a", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](121);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](122, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](123, NewArtworkComponent_small_123_Template, 3, 3, "small", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](124, "button", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](125, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](126, "a", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](127, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](128, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](129, "svg", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](130, "use", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_11_0;
          let tmp_32_0;
          let tmp_33_0;
          let tmp_38_0;
          let tmp_39_0;
          let tmp_53_0;
          const imageFromFile_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("width", 900)("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 55, ctx.isLoading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 57, "NEW_PAGE.ARTWORK.TITLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.fileToCropper === null)("ngIfElse", imageFromFile_r9);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.newArtworkForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](17, 59, "NEW_PAGE.ARTWORK.MAIN_INFO"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](23, 61, "LABEL.TITLE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](25, 63, "NEW_PAGE.ARTWORK.PLACEHOLDER.TITLE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.newArtworkForm.get("title")) == null ? null : tmp_11_0.hasError("required")) && ((tmp_11_0 = ctx.newArtworkForm.get("title")) == null ? null : tmp_11_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.artists.controls);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("binary", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](35, 65, "NEW_PAGE.ARTWORK.I_AM_ARTIST"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](39, 67, "NEW_PAGE.ARTWORK.ADD_ARTIST"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.date);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](43, 69, "NEW_PAGE.ARTWORK.DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](48, 71, "NEW_PAGE.ARTWORK.DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.currentDateFormat === ctx.DATE_FORMAT_ARTWORK.FULL_DATE);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.currentDateFormat === ctx.DATE_FORMAT_ARTWORK.MONTH_YEAR);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.currentDateFormat === ctx.DATE_FORMAT_ARTWORK.YEAR);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.currentDateFormat === ctx.DATE_FORMAT_ARTWORK.CENTURY);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.currentDateFormat === ctx.DATE_FORMAT_ARTWORK.DECADE);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.currentDateFormat === ctx.DATE_FORMAT_ARTWORK.OTHER);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](58, 73, "NEW_PAGE.ARTWORK.DATE_FORMAT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("options", ctx.dateFormatOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx.currentDateFormat);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](111, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("binary", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](65, 75, "NEW_PAGE.ARTWORK.BCE_DESKTOP"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](68, 77, "NEW_PAGE.ARTWORK.BCE_MOBILE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ((tmp_32_0 = ctx.date.get("decade")) == null ? null : tmp_32_0.hasError("pattern")) && ((tmp_32_0 = ctx.date.get("decade")) == null ? null : tmp_32_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (tmp_33_0 = ctx.date.get("century")) == null ? null : tmp_33_0.hasError("pattern"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](74, 79, "LABEL.DESCRIPTION"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("autoResize", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](77, 81, "NEW_PAGE.ARTWORK.PLACEHOLDER.DESCRIPTION"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.newArtworkForm.controls.description.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ((tmp_38_0 = ctx.newArtworkForm.get("description")) == null ? null : tmp_38_0.hasError("maxlength")) && ((tmp_38_0 = ctx.newArtworkForm.get("description")) == null ? null : tmp_38_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ((tmp_39_0 = ctx.newArtworkForm.get("description")) == null ? null : tmp_39_0.hasError("required")) && ((tmp_39_0 = ctx.newArtworkForm.get("description")) == null ? null : tmp_39_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](86, 83, "NEW_PAGE.ARTWORK.ADDITIONAL_INFO"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.additional);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](92, 85, "NEW_PAGE.ARTWORK.MATERIAL"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](94, 87, "NEW_PAGE.ARTWORK.PLACEHOLDER.MATERIAL"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](98, 89, "NEW_PAGE.ARTWORK.TECHNIQUE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](100, 91, "NEW_PAGE.ARTWORK.PLACEHOLDER.TECHNIQUE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](104, 93, "NEW_PAGE.ARTWORK.DIMENSIONS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](106, 95, "NEW_PAGE.ARTWORK.PLACEHOLDER.DIMENSIONS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](110, 97, "NEW_PAGE.ARTWORK.ADD_COMMENT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](112, 99, "NEW_PAGE.ARTWORK.PLACEHOLDER.OTHER"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("binary", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](119, 101, "LABEL.AGREE_TO_TERMS_1_ARTWORK"));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](122, 103, "LABEL.AGREE_TO_TERMS_2"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ((tmp_53_0 = ctx.newArtworkForm.get("agreeToTerms")) == null ? null : tmp_53_0.invalid) && ((tmp_53_0 = ctx.newArtworkForm.get("agreeToTerms")) == null ? null : tmp_53_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](125, 105, "BTN.UPLOAD"))("disabled", !ctx.originalFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction3"](112, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](127, 107, ctx.locale$), ctx.URLS.PROFILE, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](128, 109, ctx.currentUserNickname$)));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterLink, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_10__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormArrayName, primeng_api__WEBPACK_IMPORTED_MODULE_19__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_24__.ButtonDirective, _shared_directives_event_blocker_directive__WEBPACK_IMPORTED_MODULE_11__.EventBlockerDirective, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_25__.InputTextarea, primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, primeng_checkbox__WEBPACK_IMPORTED_MODULE_27__.Checkbox, primeng_ripple__WEBPACK_IMPORTED_MODULE_28__.Ripple, primeng_inputgroup__WEBPACK_IMPORTED_MODULE_29__.InputGroup, primeng_calendar__WEBPACK_IMPORTED_MODULE_30__.Calendar, _shared_components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_12__.ImageCropperComponent, _shared_components_aspect_ratio_controls_aspect_ratio_controls_component__WEBPACK_IMPORTED_MODULE_13__.AspectRatioControlsComponent, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_31__.AutoComplete, _angular_common__WEBPACK_IMPORTED_MODULE_21__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe],
      styles: [".artwork-image[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  max-height: 500px;\n  object-fit: contain;\n}\n\n.file-input-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .file-input-button[_ngcontent-%COMP%] {\n    width: 600px;\n  }\n}\n\n.skip-image[_ngcontent-%COMP%] {\n  top: 15px;\n  right: 15px;\n}\n\n.p-inputnumber[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nsummary[_ngcontent-%COMP%] {\n  width: auto;\n  gap: 2rem;\n  align-items: center;\n  transition: none;\n  list-style: none;\n}\nsummary[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\n.add-info-chevron[_ngcontent-%COMP%] {\n  transition: 0.2s;\n}\n\ndetails[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\ndetails[open][_ngcontent-%COMP%]    > summary[_ngcontent-%COMP%]   .add-info-chevron[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\nsummary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n\n.is-author-wrapper[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  margin-top: 0.5rem;\n}\n@media (min-width: 768px) {\n  .is-author-wrapper[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    grid-column-start: 2;\n  }\n}\n\n.add-author-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  align-items: center;\n  background-color: transparent;\n  display: flex;\n  border: none;\n  outline: none;\n  gap: 0.5rem;\n  font-size: 1rem;\n}\n\n.remove-artist-button[_ngcontent-%COMP%] {\n  height: 47px;\n}\n\n.artists-wrapper[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n}\n\n.format-dropdown[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n  height: 21px;\n}\n@media (min-width: 768px) {\n  .format-dropdown[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n}\n\n.date-group[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 1fr;\n}\n@media (min-width: 768px) {\n  .date-group[_ngcontent-%COMP%] {\n    column-gap: 0.5rem;\n    grid-template-columns: 120px 1fr;\n  }\n}\n\n.date-group-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 135px;\n  column-gap: 1rem;\n  row-gap: 1rem;\n  grid-column-start: 1;\n  flex-wrap: wrap;\n}\n@media (min-width: 768px) {\n  .date-group-inner[_ngcontent-%COMP%] {\n    grid-template-columns: auto 1fr auto;\n    grid-column-start: 2;\n    gap: 1rem;\n  }\n}\n\n.date-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .date-input[_ngcontent-%COMP%] {\n    width: 145px;\n  }\n}\n\n.date-format-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 24px;\n  margin-bottom: 0.5rem;\n}\n@media (min-width: 768px) {\n  .date-format-label[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-bottom: 0;\n  }\n}\n\n.input-letter-count-description[_ngcontent-%COMP%] {\n  padding: 5px 2px;\n  background-color: var(--input);\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n.input-letter-count-description.error[_ngcontent-%COMP%] {\n  color: var(--errorMessage);\n  font-weight: bold;\n}\n\n.autocomplete-group[_ngcontent-%COMP%] {\n  display: flex;\n}\n.autocomplete-group[_ngcontent-%COMP%]   .p-autocomplete[_ngcontent-%COMP%]   .p-autocomplete-input[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.before-christ[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: normal;\n  flex-grow: 1;\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .before-christ[_ngcontent-%COMP%] {\n    grid-column: auto;\n    flex-grow: 0;\n    gap: 0.25rem;\n    width: 70px;\n  }\n}\n\n.summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.new-artwork-form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n@media (min-width: 768px) {\n  .new-artwork-form[_ngcontent-%COMP%] {\n    width: 600px;\n  }\n}\n\n.agree-term[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  row-gap: 0.5rem;\n  column-gap: 1rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .agree-term[_ngcontent-%COMP%] {\n    padding-left: 128px;\n  }\n  .agree-term[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbmV3L2NvbXBvbmVudHMvbmV3LWFydHdvcmsvbmV3LWFydHdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFDRjtBQUNFO0VBTEY7SUFNSSxZQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUVGO0FBQUU7RUFDRSxnQkFBQTtBQUVKOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFKRjtJQUtJLGdCQUFBO0lBQ0Esb0JBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFRjtBQUFFO0VBUEY7SUFRSSxXQUFBO0VBR0Y7QUFDRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBR0Y7QUFERTtFQUxGO0lBTUksa0JBQUE7SUFDQSxnQ0FBQTtFQUlGO0FBQ0Y7O0FBREE7RUFDRSxhQUFBO0VBRUEsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFHRjtBQURFO0VBVEY7SUFVSSxvQ0FBQTtJQUNBLG9CQUFBO0lBQ0EsU0FBQTtFQUlGO0FBQ0Y7O0FBREE7RUFDRSxXQUFBO0FBSUY7QUFGRTtFQUhGO0lBSUksWUFBQTtFQUtGO0FBQ0Y7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBS0Y7QUFIRTtFQU5GO0lBT0ksZUFBQTtJQUNBLGdCQUFBO0VBTUY7QUFDRjs7QUFIQTtFQUNFLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTUY7QUFKRTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFGQTtFQUNFLGFBQUE7QUFLRjtBQUhFO0VBQ0UsV0FBQTtBQUtKOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUlGO0FBRkU7RUFURjtJQVVJLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VBS0Y7QUFDRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFLRjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBS0Y7QUFIRTtFQU5GO0lBT0ksWUFBQTtFQU1GO0FBQ0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBTUY7QUFKRTtFQVRGO0lBVUksbUJBQUE7RUFPRjtFQUxFO0lBQ0UsWUFBQTtFQU9KO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0d29yay1pbWFnZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uZmlsZS1pbnB1dC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICB9XG59XG5cbi5za2lwLWltYWdlIHtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMTVweDtcbn1cblxuLnAtaW5wdXRudW1iZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuc3VtbWFyeSB7XG4gIHdpZHRoOiBhdXRvO1xuICBnYXA6IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IG5vbmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxufVxuXG4uYWRkLWluZm8tY2hldnJvbiB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbmRldGFpbHMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmRldGFpbHNbb3Blbl0gPiBzdW1tYXJ5IC5hZGQtaW5mby1jaGV2cm9uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuc3VtbWFyeTo6LXdlYmtpdC1kZXRhaWxzLW1hcmtlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pcy1hdXRob3Itd3JhcHBlciB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgfVxufVxuXG4uYWRkLWF1dGhvci1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGdhcDogMC41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5yZW1vdmUtYXJ0aXN0LWJ1dHRvbiB7XG4gIGhlaWdodDogNDdweDtcbn1cblxuLmFydGlzdHMtd3JhcHBlciB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMztcbn1cblxuLmZvcm1hdC1kcm9wZG93biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAyMXB4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHdpZHRoOiA3MHB4O1xuICB9XG59XG5cbi5kYXRlLWdyb3VwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgY29sdW1uLWdhcDogMC41cmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTIwcHggMWZyO1xuICB9XG59XG5cbi5kYXRlLWdyb3VwLWlubmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcblxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMzVweDtcbiAgY29sdW1uLWdhcDogMXJlbTtcbiAgcm93LWdhcDogMXJlbTtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG59XG5cbi5kYXRlLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDE0NXB4O1xuICB9XG59XG5cbi5kYXRlLWZvcm1hdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cblxuLmlucHV0LWxldHRlci1jb3VudC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDVweCAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xuXG4gICYuZXJyb3Ige1xuICAgIGNvbG9yOiB2YXIoLS1lcnJvck1lc3NhZ2UpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cbi5hdXRvY29tcGxldGUtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gICYgLnAtYXV0b2NvbXBsZXRlIC5wLWF1dG9jb21wbGV0ZS1pbnB1dCB7XG4gICAgd2lkdGg6IDQwcHg7XG4gIH1cbn1cblxuLmJlZm9yZS1jaHJpc3Qge1xuICBncmlkLWNvbHVtbjogMSAvIDM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmbGV4LWdyb3c6IDE7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGdyaWQtY29sdW1uOiBhdXRvO1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgICBnYXA6IDAuMjVyZW07XG4gICAgd2lkdGg6IDcwcHg7XG4gIH1cbn1cblxuLnN1bW1hcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm5ldy1hcnR3b3JrLWZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjVyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICB9XG59XG5cbi5hZ3JlZS10ZXJtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHJvdy1nYXA6IDAuNXJlbTtcbiAgY29sdW1uLWdhcDogMXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmctbGVmdDogMTI4cHg7XG5cbiAgICBzbWFsbCB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return NewArtworkComponent;
})();

/***/ }),

/***/ 42679:
/*!*********************************************************************!*\
  !*** ./src/app/pages/new/components/new-post/new-post.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewPostComponent: () => (/* binding */ NewPostComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _store_post_post_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/post/post.action */ 53065);
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/auth/auth.selectors */ 47393);
/* harmony import */ var _store_post_post_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/post/post.selectors */ 30213);
/* harmony import */ var _services_tags_name_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/tags-name.service */ 49669);
/* harmony import */ var _utils_read_file_as_base_64__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/read-file-as-base-64 */ 82489);
/* harmony import */ var _utils_tags_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/tags-validator */ 24000);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @enums/urls */ 94317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 81383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/container/container.component */ 2645);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var _shared_directives_event_blocker_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/directives/event-blocker.directive */ 22649);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputtextarea */ 87058);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/autocomplete */ 38784);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/galleria */ 64747);
































const _c0 = ["fileInput"];
const _c1 = (a0, a1, a2) => ["/", a0, a1, a2];
const _c2 = a0 => ({
  isDragover: a0
});
const _c3 = a0 => ({
  "active-thumbnail": a0
});
function NewPostComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 33)(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("dragend", function NewPostComponent_div_9_Template_button_dragend_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.isDragover = false);
    })("dragover", function NewPostComponent_div_9_Template_button_dragover_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.isDragover = true);
    })("dragenter", function NewPostComponent_div_9_Template_button_dragenter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.isDragover = true);
    })("dragleave", function NewPostComponent_div_9_Template_button_dragleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.isDragover = false);
    })("mouseleave", function NewPostComponent_div_9_Template_button_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.isDragover = false);
    })("drop", function NewPostComponent_div_9_Template_button_drop_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.handleFilesUpload($event));
    })("click", function NewPostComponent_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const fileInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](fileInput_r4.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "svg", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "use", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](4, _c2, ctx_r2.isDragover));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 2, "IMAGE_CROPPER.DRAG_DROP"));
  }
}
function NewPostComponent_ng_template_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r2.filesToSend[0].dataBase64, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function NewPostComponent_ng_template_10_p_galleria_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewPostComponent_ng_template_10_p_galleria_2_ng_template_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.thumbnailIndex === ctx_r2.activeIndex ? ctx_r2.clearThumbnailIndex() : ctx_r2.setThumbnailIndex(ctx_r2.activeIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", item_r8.dataBase64, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](7, _c3, ctx_r2.thumbnailIndex === ctx_r2.activeIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r2.thumbnailIndex === ctx_r2.activeIndex ? _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 3, "NEW_PAGE.POST.COVER") : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 5, "NEW_PAGE.POST.SET_COVER"), " ");
  }
}
function NewPostComponent_ng_template_10_p_galleria_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p-galleria", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("activeIndexChange", function NewPostComponent_ng_template_10_p_galleria_2_Template_p_galleria_activeIndexChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r2.activeIndex, $event) || (ctx_r2.activeIndex = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NewPostComponent_ng_template_10_p_galleria_2_ng_template_1_Template, 6, 9, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("activeIndex", ctx_r2.activeIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r2.filesToSend)("showIndicators", true)("showThumbnails", false);
  }
}
function NewPostComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NewPostComponent_ng_template_10_div_1_Template, 2, 1, "div", 38)(2, NewPostComponent_ng_template_10_p_galleria_2_Template, 2, 4, "p-galleria", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewPostComponent_ng_template_10_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.clickFileInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "use", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.filesToSend.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.filesToSend.length > 1);
  }
}
function NewPostComponent_small_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_TITLE"), " ");
  }
}
function NewPostComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("error", (tmp_3_0 = ctx_r2.newPostForm.get("description")) == null ? null : tmp_3_0.hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", ctx_r2.newPostForm.value.description == null ? null : ctx_r2.newPostForm.value.description.length, "/", ctx_r2.maxLengthDescription, " ");
  }
}
function NewPostComponent_small_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "ERROR.MAX_LIMIT"), " ");
  }
}
function NewPostComponent_small_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_DESCRIPTION"), " ");
  }
}
function NewPostComponent_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewPostComponent_button_36_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.clearTags());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 1, "NEW_PAGE.POST.CLEAR"));
  }
}
function NewPostComponent_small_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "ERROR.INVALID_TAG"), " ");
  }
}
function NewPostComponent_small_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "ERROR.MAXIMUM_OF_TAGS"), " ");
  }
}
function NewPostComponent_ul_41_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 53)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NewPostComponent_ul_41_li_1_Template_button_click_3_listener() {
      const tag_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.removeTag(tag_r11.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "svg", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "use", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tag_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", tag_r11.name, " ");
  }
}
function NewPostComponent_ul_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ul", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NewPostComponent_ul_41_li_1_Template, 6, 1, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r2.tags$));
  }
}
function NewPostComponent_small_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "ERROR.REQUIRED_AGREE_PRIVACY"), " ");
  }
}
let NewPostComponent = /*#__PURE__*/(() => {
  class NewPostComponent {
    constructor(store, fb, translate, toast, tagService) {
      this.store = store;
      this.fb = fb;
      this.translate = translate;
      this.toast = toast;
      this.tagService = tagService;
      this.isDragover = false;
      this.maxLengthDescription = 5000;
      this.filesToSend = [];
      this.tagList = [];
      this.filteredTagList = [];
      this.tagsLength = 0;
      this.tags$ = this.store.select(_store_post_post_selectors__WEBPACK_IMPORTED_MODULE_3__.selectNewPostTags);
      this.isLoading$ = this.store.select(_store_post_post_selectors__WEBPACK_IMPORTED_MODULE_3__.selectIsLoadingPost);
      this.thumbnailIndex = null;
      this._activeIndex = 0;
      this.locale$ = this.translate.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.startWith)({
        lang: this.translate.currentLang
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(event => event.lang));
      this.currentUserNickname$ = this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCurrentUserNickname);
      this.newPostForm = this.fb.group({
        title: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]),
        description: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(this.maxLengthDescription)]),
        tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_utils_tags_validator__WEBPACK_IMPORTED_MODULE_6__.TagsValidator.pattern(/^[a-zA-Z0-9 ]+$/)]),
        agreeToTerms: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.requiredTrue])
      });
      this.URLS = _enums_urls__WEBPACK_IMPORTED_MODULE_7__.URLS;
    }
    ngOnInit() {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.tags$.subscribe(tags => {
          _this.tagsLength = tags.length;
          _this.tagsLength >= 50 ? _this.newPostForm.get('tags')?.disable() : _this.newPostForm.get('tags')?.enable();
        });
        _this.tagService.getTags().then(tags => {
          _this.tagList = tags;
        });
      })();
    }
    onSubmit() {
      if (this.newPostForm.invalid) {
        this.newPostForm.markAllAsTouched();
        return;
      }
      let files = this.filesToSend;
      if (this.thumbnailIndex && this.thumbnailIndex > 0) {
        files = this.moveElementToStart(this.filesToSend, this.thumbnailIndex);
      }
      const newPost = {
        files,
        languages: [{
          title: this.newPostForm.get('title')?.value ?? '',
          description: this.newPostForm.get('description')?.value ?? '',
          langCode: this.translate.currentLang
        }]
      };
      this.store.dispatch((0,_store_post_post_action__WEBPACK_IMPORTED_MODULE_1__.postNewPostAction)({
        newPost
      }));
    }
    handleFilesUpload(event) {
      var _this2 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        let fileList = null;
        if (event instanceof Event) {
          const target = event.target;
          fileList = target.files;
        }
        if (event instanceof DragEvent) {
          _this2.isDragover = false;
          fileList = event.dataTransfer ? event.dataTransfer.files : null;
        }
        if (fileList !== null && fileList.length > 0) {
          const files = Array.from(fileList);
          const filesLocalData = [];
          for (const file of files) {
            if (!file.type.startsWith('image/')) {
              _this2.showErrorMessage('ERROR.WRONG_TYPE');
              return;
            } else {
              const fileLocalData = {
                fileExt: file.type.split('/')[1],
                dataBase64: yield (0,_utils_read_file_as_base_64__WEBPACK_IMPORTED_MODULE_5__.readFileAsBase64)(file)
              };
              filesLocalData.push(fileLocalData);
            }
          }
          _this2.filesToSend = filesLocalData;
        }
      })();
    }
    clickFileInput() {
      this.filesToSend = [];
      this.fileInput.nativeElement.click();
    }
    setThumbnailIndex(index) {
      this.thumbnailIndex = index;
    }
    clearThumbnailIndex() {
      this.thumbnailIndex = null;
    }
    get activeIndex() {
      return this._activeIndex;
    }
    set activeIndex(newValue) {
      if (this.filesToSend && 0 <= newValue && newValue <= this.filesToSend.length - 1) {
        this._activeIndex = newValue;
      }
    }
    filterAutoCompleteTags(event) {
      const query = event.query.toLowerCase();
      this.filteredTagList = this.tagList.filter(tag => {
        const tagName = tag.name.toLowerCase();
        return tagName.startsWith(query);
      });
    }
    onKeyDown(event) {
      const tagsControl = this.newPostForm.get('tags');
      if ((event.key === ' ' || event.key === 'Enter') && !(tagsControl && tagsControl?.hasError('pattern'))) {
        const inputValue = event.target.value.trim().split(/\s+/).filter(tag => tag);
        if (inputValue.length > 0 && inputValue.length <= 50) {
          for (const tag of inputValue) {
            const existingTag = this.tagList.find(t => t.name === tag);
            const newTag = existingTag ? existingTag : {
              name: tag,
              id: ''
            };
            this.store.dispatch((0,_store_post_post_action__WEBPACK_IMPORTED_MODULE_1__.addTagAction)({
              newTag
            }));
          }
          this.filteredTagList = [];
          event.target.value = '';
        } else if (inputValue.length > 50) {
          this.showErrorMessage(`Apologies, you've exceeded the maximum allowable tag count of 50. Now it's ${inputValue.length}`);
        }
        event.preventDefault();
      }
    }
    removeTag(tag) {
      this.store.dispatch((0,_store_post_post_action__WEBPACK_IMPORTED_MODULE_1__.removeTagAction)({
        tagNameToRemove: tag
      }));
    }
    clearTags() {
      this.store.dispatch((0,_store_post_post_action__WEBPACK_IMPORTED_MODULE_1__.clearTagsAction)());
    }
    moveElementToStart(arr, index) {
      if (index < 0 || index >= arr.length) {
        return arr;
      }
      const newArr = [...arr];
      const movedItem = newArr.splice(index, 1)[0];
      newArr.unshift(movedItem);
      return newArr;
    }
    showErrorMessage(key) {
      this.toast.add({
        severity: 'error',
        summary: this.translate.instant('ERROR.TITLE'),
        detail: this.translate.instant(key)
      });
    }
    static #_ = this.ɵfac = function NewPostComponent_Factory(t) {
      return new (t || NewPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_16__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_tags_name_service__WEBPACK_IMPORTED_MODULE_4__.TagsNameService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: NewPostComponent,
      selectors: [["app-new-post"]],
      viewQuery: function NewPostComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        }
      },
      decls: 60,
      vars: 60,
      consts: [["fileInput", ""], ["imageFromFile", ""], [3, "width", "isLoading"], [1, "flex", "flex-column", "align-items-center", "gap-4", "relative"], [1, "font-bold", "text-2xl", "md:text-4xl", "md:align-self-center"], [1, "flex", "justify-content-center", "w-full"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change", "multiple"], ["class", "file-input-button", 4, "ngIf", "ngIfElse"], [1, "new-post-form", 3, "ngSubmit", "formGroup"], [1, "input-group"], ["for", "title"], ["type", "text", "id", "title", "pInputText", "", "formControlName", "title", 1, "w-full", 3, "placeholder"], ["class", "error-message text-sm", 4, "ngIf"], [1, "input-group", "align-items-start"], ["for", "description"], [1, "relative"], ["id", "description", "rows", "3", "pInputTextarea", "", "formControlName", "description", 1, "w-full", 3, "autoResize", "placeholder"], ["class", "input-letter-count-description", 3, "error", 4, "ngIf"], ["for", "tags", 1, "flex", "gap-2", "align-items-center", "md:flex-wrap"], ["class", "clear-tags", 3, "click", 4, "ngIf"], ["id", "tags", "formControlName", "tags", "optionLabel", "name", 1, "w-full", 3, "completeMethod", "keydown", "suggestions", "placeholder"], ["class", "tag-list", 4, "ngIf"], [1, "flex", "flex-column", "align-items-center", "gap-3", "md:gap-5"], [1, "agree-term"], ["id", "agreeToTerms", "formControlName", "agreeToTerms", 3, "binary"], [1, "line-height-3", "text-sm", "w-10"], ["for", "agreeToTerms"], [1, "cursor-pointer", "font-bold"], ["class", "error-message text-sm m-0 md:flex-grow-1", 4, "ngIf"], ["type", "submit", "pButton", "", "pRipple", "", 1, "w-9", "md:w-6", "align-self-center", 3, "label", "disabled"], [1, "back-button", 3, "routerLink"], ["width", "19", "height", "19"], ["href", "assets/images/icons.svg#back-button"], [1, "file-input-button"], ["appEventBlocker", "", 1, "upload", "transition-duration-500", 3, "dragend", "dragover", "dragenter", "dragleave", "mouseleave", "drop", "click", "ngClass"], ["width", "80", "height", "79"], ["href", "assets/images/icons.svg#drag-file"], [1, "text-xl", "mg:text-2xl"], [4, "ngIf"], [3, "activeIndex", "value", "showIndicators", "showThumbnails", "activeIndexChange", 4, "ngIf"], [1, "control-button", 3, "click"], ["width", "22", "height", "22"], ["href", "assets/images/icons.svg#upload-file"], ["alt", "Image", 1, "gallery-image", 3, "src"], [3, "activeIndexChange", "activeIndex", "value", "showIndicators", "showThumbnails"], ["pTemplate", "item"], ["alt", "Image", 1, "gallery-image", 2, "width", "100%", "display", "block", 3, "src"], [1, "set-thumbnail-button", 3, "click", "ngClass"], [1, "error-message", "text-sm"], [1, "input-letter-count-description"], [1, "clear-tags", 3, "click"], [1, "tag-list"], ["class", "tag-item", 4, "ngFor", "ngForOf"], [1, "tag-item"], [1, "remove-tag", 3, "click"], ["width", "8", "height", "8"], [1, "error-message", "text-sm", "m-0", "md:flex-grow-1"]],
      template: function NewPostComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 3)(3, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 5)(7, "input", 6, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function NewPostComponent_Template_input_change_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.handleFilesUpload($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, NewPostComponent_div_9_Template, 7, 6, "div", 7)(10, NewPostComponent_ng_template_10_Template, 6, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "form", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function NewPostComponent_Template_form_ngSubmit_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 9)(14, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, NewPostComponent_small_19_Template, 3, 3, "small", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 13)(21, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 15)(25, "textarea", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "          ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, NewPostComponent_div_28_Template, 2, 4, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, NewPostComponent_small_29_Template, 3, 3, "small", 12)(30, NewPostComponent_small_30_Template, 3, 3, "small", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 9)(32, "label", 18)(33, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](35, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, NewPostComponent_button_36_Template, 6, 3, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "p-autoComplete", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](38, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("completeMethod", function NewPostComponent_Template_p_autoComplete_completeMethod_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.filterAutoCompleteTags($event));
          })("keydown", function NewPostComponent_Template_p_autoComplete_keydown_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.onKeyDown($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, NewPostComponent_small_39_Template, 3, 3, "small", 12)(40, NewPostComponent_small_40_Template, 3, 3, "small", 12)(41, NewPostComponent_ul_41_Template, 3, 3, "ul", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 22)(43, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](44, "p-checkbox", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 25)(46, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](48, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](51, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](52, NewPostComponent_small_52_Template, 3, 3, "small", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](53, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](54, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](56, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](57, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "svg", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](59, "use", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_11_0;
          let tmp_16_0;
          let tmp_17_0;
          let tmp_22_0;
          let tmp_23_0;
          let tmp_28_0;
          const imageFromFile_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("width", 900)("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 30, ctx.isLoading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 32, "NEW_PAGE.POST.TITLE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("multiple", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.filesToSend.length === 0)("ngIfElse", imageFromFile_r12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.newPostForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 34, "LABEL.TITLE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 36, "NEW_PAGE.POST.PLACEHOLDER.TITLE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.newPostForm.get("title")) == null ? null : tmp_11_0.hasError("required")) && ((tmp_11_0 = ctx.newPostForm.get("title")) == null ? null : tmp_11_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](23, 38, "LABEL.BODY"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("autoResize", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 40, "NEW_PAGE.POST.PLACEHOLDER.DESCRIPTION"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.newPostForm.controls.description.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_16_0 = ctx.newPostForm.get("description")) == null ? null : tmp_16_0.hasError("maxlength")) && ((tmp_16_0 = ctx.newPostForm.get("description")) == null ? null : tmp_16_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_17_0 = ctx.newPostForm.get("description")) == null ? null : tmp_17_0.hasError("required")) && ((tmp_17_0 = ctx.newPostForm.get("description")) == null ? null : tmp_17_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](35, 42, "NEW_PAGE.POST.TAGS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.tagsLength > 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("suggestions", ctx.filteredTagList)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](38, 44, "NEW_PAGE.POST.PLACEHOLDER.TAGS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_22_0 = ctx.newPostForm.get("tags")) == null ? null : tmp_22_0.hasError("pattern")) && ((tmp_22_0 = ctx.newPostForm.get("tags")) == null ? null : tmp_22_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_23_0 = ctx.newPostForm.get("tags")) == null ? null : tmp_23_0.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.tagsLength > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("binary", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](48, 46, "LABEL.AGREE_TO_TERMS_1_POST"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](51, 48, "LABEL.AGREE_TO_TERMS_2"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_28_0 = ctx.newPostForm.get("agreeToTerms")) == null ? null : tmp_28_0.invalid) && ((tmp_28_0 = ctx.newPostForm.get("agreeToTerms")) == null ? null : tmp_28_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](54, 50, "BTN.UPLOAD"))("disabled", ctx.filesToSend.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](56, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](56, 52, ctx.locale$), ctx.URLS.PROFILE, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](57, 54, ctx.currentUserNickname$)));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterLink, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_8__.ContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_20__.ButtonDirective, _shared_directives_event_blocker_directive__WEBPACK_IMPORTED_MODULE_9__.EventBlockerDirective, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_21__.InputTextarea, primeng_checkbox__WEBPACK_IMPORTED_MODULE_22__.Checkbox, primeng_ripple__WEBPACK_IMPORTED_MODULE_23__.Ripple, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_24__.AutoComplete, primeng_galleria__WEBPACK_IMPORTED_MODULE_25__.Galleria, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
      styles: [".artwork-image[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  max-height: 500px;\n  object-fit: contain;\n}\n\n.file-input-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .file-input-button[_ngcontent-%COMP%] {\n    width: 600px;\n  }\n}\n\n.new-post-form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n@media (min-width: 768px) {\n  .new-post-form[_ngcontent-%COMP%] {\n    width: 600px;\n  }\n}\n\n.gallery-image[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n\n.control-button[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  background-color: rgba(0, 0, 0, 0.3);\n  border: none;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 0 10px 2.5px rgba(0, 0, 0, 0.3);\n  transition: all 0.1s ease;\n}\n.control-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.control-button[_ngcontent-%COMP%]:active {\n  transform: scale(1.1);\n}\n.control-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: var(--mainContrastElement);\n}\n\n.tag-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  grid-column-start: 1;\n}\n@media (min-width: 768px) {\n  .tag-list[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    grid-column-start: 2;\n  }\n}\n\n.tag-item[_ngcontent-%COMP%] {\n  color: var(--tagsText);\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  height: 1.5rem;\n  background-color: var(--tagsBackground);\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0 0 0 0.5rem;\n  border-radius: 0.75rem;\n}\n\n.remove-tag[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  width: 1.5rem;\n  height: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--greyText);\n}\n.remove-tag[_ngcontent-%COMP%]:hover, .remove-tag[_ngcontent-%COMP%]:active {\n  color: var(--mainContrastElement);\n}\n\n.input-letter-count-description[_ngcontent-%COMP%] {\n  padding: 5px 2px;\n  background-color: var(--input);\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n.input-letter-count-description.error[_ngcontent-%COMP%] {\n  color: var(--errorMessage);\n  font-weight: bold;\n}\n\n.clear-tags[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 12px;\n  color: var(--greyText);\n  background-color: transparent;\n  border: none;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n.clear-tags[_ngcontent-%COMP%]:hover {\n  color: var(--errorMessage);\n}\n\n.set-thumbnail-button[_ngcontent-%COMP%] {\n  color: var(--mainContrastElement);\n  cursor: pointer;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n  font-size: 12px;\n  padding: 0 14px;\n  border: 1px solid var(--mainContrastElement);\n  background-color: rgb(from var(--background) r g b/80%);\n  position: absolute;\n  transform: translateX(50%);\n  right: 50%;\n  bottom: 8px;\n}\n\n.active-thumbnail[_ngcontent-%COMP%] {\n  color: var(--button);\n  border-color: var(--button);\n}\n\n.agree-term[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  row-gap: 0.5rem;\n  column-gap: 1rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .agree-term[_ngcontent-%COMP%] {\n    padding-left: 128px;\n  }\n  .agree-term[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbmV3L2NvbXBvbmVudHMvbmV3LXBvc3QvbmV3LXBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFDRjtBQUNFO0VBTEY7SUFNSSxZQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBRUY7QUFBRTtFQU5GO0lBT0ksWUFBQTtFQUdGO0FBQ0Y7O0FBQUE7RUFDRSxpQkFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSx5QkFBQTtBQUdGO0FBREU7RUFDRSxvQ0FBQTtBQUdKO0FBQUU7RUFDRSxxQkFBQTtBQUVKO0FBQ0U7RUFDRSxnQ0FBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFBRjtBQUVFO0VBTkY7SUFPSSxnQkFBQTtJQUNBLG9CQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0U7RUFDRSxpQ0FBQTtBQUNKOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBRjtBQUVFO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQURGO0FBR0U7RUFDRSwwQkFBQTtBQURKOztBQUtBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLHVEQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxvQkFBQTtFQUNBLDJCQUFBO0FBRkY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSEY7QUFLRTtFQVRGO0lBVUksbUJBQUE7RUFGRjtFQUlFO0lBQ0UsWUFBQTtFQUZKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0d29yay1pbWFnZSB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uZmlsZS1pbnB1dC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICB9XG59XG5cbi5uZXctcG9zdC1mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41cmVtO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgfVxufVxuXG4uZ2FsbGVyeS1pbWFnZSB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuXG4uY29udHJvbC1idXR0b24ge1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAyLjVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgZmlsbDogdmFyKC0tbWFpbkNvbnRyYXN0RWxlbWVudCk7XG4gIH1cbn1cblxuLnRhZy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuNzVyZW07XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gIH1cbn1cblxuLnRhZy1pdGVtIHtcbiAgY29sb3I6IHZhcigtLXRhZ3NUZXh0KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFnc0JhY2tncm91bmQpO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDAgMCAwIDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbn1cblxuLnJlbW92ZS10YWcge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWdyZXlUZXh0KTtcblxuICAmOmhvdmVyLCAmOmFjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLW1haW5Db250cmFzdEVsZW1lbnQpO1xuICB9XG59XG5cbi5pbnB1dC1sZXR0ZXItY291bnQtZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiA1cHggMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMTBweDtcblxuICAmLmVycm9yIHtcbiAgICBjb2xvcjogdmFyKC0tZXJyb3JNZXNzYWdlKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4uY2xlYXItdGFncyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tZ3JleVRleHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWVycm9yTWVzc2FnZSlcbiAgfVxufVxuXG4uc2V0LXRodW1ibmFpbC1idXR0b24ge1xuICBjb2xvcjogdmFyKC0tbWFpbkNvbnRyYXN0RWxlbWVudCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbkNvbnRyYXN0RWxlbWVudCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYihmcm9tIHZhcigtLWJhY2tncm91bmQpIHIgZyBiIC8gODAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbiAgcmlnaHQ6IDUwJTtcbiAgYm90dG9tOiA4cHg7XG59XG5cbi5hY3RpdmUtdGh1bWJuYWlsIHtcbiAgY29sb3I6IHZhcigtLWJ1dHRvbik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uKTtcbn1cblxuXG4uYWdyZWUtdGVybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICByb3ctZ2FwOiAwLjVyZW07XG4gIGNvbHVtbi1nYXA6IDFyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEyOHB4O1xuXG4gICAgc21hbGwge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return NewPostComponent;
})();

/***/ }),

/***/ 58027:
/*!*************************************************!*\
  !*** ./src/app/pages/new/new-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewRoutingModule: () => (/* binding */ NewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @enums/urls */ 94317);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 61611);
/* harmony import */ var _components_new_artwork_new_artwork_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/new-artwork/new-artwork.component */ 87783);
/* harmony import */ var _components_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/new-post/new-post.component */ 42679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);








const routes = [{
  path: _enums_urls__WEBPACK_IMPORTED_MODULE_0__.URLS.ARTWORK,
  component: _components_new_artwork_new_artwork_component__WEBPACK_IMPORTED_MODULE_1__.NewArtworkComponent
}, {
  path: _enums_urls__WEBPACK_IMPORTED_MODULE_0__.URLS.POST,
  component: _components_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_2__.NewPostComponent
}];
let NewRoutingModule = /*#__PURE__*/(() => {
  class NewRoutingModule {
    static #_ = this.ɵfac = function NewRoutingModule_Factory(t) {
      return new (t || NewRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: NewRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
  return NewRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NewRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_5__.LocalizeRouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 14282:
/*!*****************************************!*\
  !*** ./src/app/pages/new/new.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewModule: () => (/* binding */ NewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/panel */ 55222);
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/chips */ 71533);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/fileupload */ 13209);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtextarea */ 87058);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/paginator */ 43157);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_inputgroup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputgroup */ 64661);
/* harmony import */ var primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/cascadeselect */ 83522);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/autocomplete */ 38784);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/galleria */ 64747);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/carousel */ 64178);
/* harmony import */ var _new_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-routing.module */ 58027);
/* harmony import */ var _shared_directives_event_blocker_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/directives/event-blocker.module */ 44254);
/* harmony import */ var _components_new_artwork_new_artwork_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/new-artwork/new-artwork.component */ 87783);
/* harmony import */ var _components_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/new-post/new-post.component */ 42679);
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/container/container.component */ 2645);
/* harmony import */ var _components_aspect_ratio_controls_aspect_ratio_controls_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/aspect-ratio-controls/aspect-ratio-controls.component */ 80541);
/* harmony import */ var _components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/image-cropper/image-cropper.component */ 46049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
























let NewModule = /*#__PURE__*/(() => {
  class NewModule {
    static #_ = this.ɵfac = function NewModule_Factory(t) {
      return new (t || NewModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: NewModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _new_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewRoutingModule, _components_container_container_component__WEBPACK_IMPORTED_MODULE_4__.ContainerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, primeng_panel__WEBPACK_IMPORTED_MODULE_11__.PanelModule, primeng_chips__WEBPACK_IMPORTED_MODULE_12__.ChipsModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_13__.FileUploadModule, _shared_directives_event_blocker_module__WEBPACK_IMPORTED_MODULE_1__.EventBlockerModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__.InputTextareaModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_15__.PaginatorModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__.CheckboxModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.RippleModule, primeng_inputgroup__WEBPACK_IMPORTED_MODULE_18__.InputGroupModule, primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_19__.CascadeSelectModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_20__.CalendarModule, _components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_6__.ImageCropperComponent, _components_aspect_ratio_controls_aspect_ratio_controls_component__WEBPACK_IMPORTED_MODULE_5__.AspectRatioControlsComponent, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_21__.AutoCompleteModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_22__.GalleriaModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_23__.CarouselModule]
    });
  }
  return NewModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NewModule, {
    declarations: [_components_new_artwork_new_artwork_component__WEBPACK_IMPORTED_MODULE_2__.NewArtworkComponent, _components_new_post_new_post_component__WEBPACK_IMPORTED_MODULE_3__.NewPostComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _new_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewRoutingModule, _components_container_container_component__WEBPACK_IMPORTED_MODULE_4__.ContainerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, primeng_panel__WEBPACK_IMPORTED_MODULE_11__.PanelModule, primeng_chips__WEBPACK_IMPORTED_MODULE_12__.ChipsModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_13__.FileUploadModule, _shared_directives_event_blocker_module__WEBPACK_IMPORTED_MODULE_1__.EventBlockerModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__.InputTextareaModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_15__.PaginatorModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__.CheckboxModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.RippleModule, primeng_inputgroup__WEBPACK_IMPORTED_MODULE_18__.InputGroupModule, primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_19__.CascadeSelectModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_20__.CalendarModule, _components_image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_6__.ImageCropperComponent, _components_aspect_ratio_controls_aspect_ratio_controls_component__WEBPACK_IMPORTED_MODULE_5__.AspectRatioControlsComponent, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_21__.AutoCompleteModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_22__.GalleriaModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_23__.CarouselModule]
  });
})();

/***/ }),

/***/ 80541:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/aspect-ratio-controls/aspect-ratio-controls.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AspectRatioControlsComponent: () => (/* binding */ AspectRatioControlsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _utils_aspectRatioList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/aspectRatioList */ 28467);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 90852);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tooltip */ 80405);









function AspectRatioControlsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "use", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("positionTop", -8)("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "TOOLTIP.ASPECT_MESSAGE"));
  }
}
function AspectRatioControlsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "use", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("positionTop", -8)("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "TOOLTIP.ASPECT_WARNING"));
  }
}
function AspectRatioControlsComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AspectRatioControlsComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.changeAspectRatio(ctx_r1.aspectRatioOriginal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "ASPECT_RATIO.ORIGINAL"), " ");
  }
}
function AspectRatioControlsComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AspectRatioControlsComponent_button_9_Template_button_click_0_listener() {
      const aspect_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.changeAspectRatio(aspect_r4.ratio));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "rect", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const aspect_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("width", aspect_r4.iconSize[0] + 2)("height", aspect_r4.iconSize[1] + 2)("viewBox", "0 0 " + (aspect_r4.iconSize[0] + 2) + " " + (aspect_r4.iconSize[1] + 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("width", aspect_r4.iconSize[0])("height", aspect_r4.iconSize[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", aspect_r4.label, " ");
  }
}
function AspectRatioControlsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "use", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 3, "ASPECT_RATIO.MESSAGE_1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 5, "ASPECT_RATIO.UNDERLINE_1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 7, "ASPECT_RATIO.MESSAGE_2"), " ");
  }
}
function AspectRatioControlsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "use", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 3, "ASPECT_RATIO.WARNING_1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 5, "ASPECT_RATIO.UNDERLINE_1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 7, "ASPECT_RATIO.WARNING_2"), " ");
  }
}
let AspectRatioControlsComponent = /*#__PURE__*/(() => {
  class AspectRatioControlsComponent {
    constructor() {
      this.aspectRatioChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.aspectRatioOriginal = 1;
      this.isAspectRatioCorrect = true;
      this.aspectRatioList = _utils_aspectRatioList__WEBPACK_IMPORTED_MODULE_0__.aspectRatioList;
    }
    ngOnChanges(changes) {
      if (changes['aspectRatio'] && !changes['aspectRatio'].firstChange) {
        this.aspectRatioOriginal = this.aspectRatio;
        this.isAspectRatioCorrect = this.aspectRatio >= 9 / 16 && this.aspectRatio <= 16 / 9;
      }
    }
    changeAspectRatio(value) {
      this.aspectRatio = value;
      this.aspectRatioChange.emit(value);
    }
    static #_ = this.ɵfac = function AspectRatioControlsComponent_Factory(t) {
      return new (t || AspectRatioControlsComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AspectRatioControlsComponent,
      selectors: [["app-aspect-ratio-controls"]],
      inputs: {
        aspectRatio: "aspectRatio"
      },
      outputs: {
        aspectRatioChange: "aspectRatioChange"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 13,
      vars: 9,
      consts: [[1, "aspect-ratio-wrapper"], [1, "aspect-ratio-title"], [1, "font-bold", "line-height-3"], ["tooltipPosition", "top", "class", "tooltip-warning hidden md:block align-self-baseline", 3, "positionTop", "pTooltip", 4, "ngIf"], ["tooltipPosition", "top", "class", "tooltip-warning warning-text hidden md:block align-self-baseline", 3, "positionTop", "pTooltip", 4, "ngIf"], [1, "aspect-ratio-buttons"], ["class", "aspect-ratio-button", 3, "click", 4, "ngIf"], ["class", "aspect-ratio-button", "type", "button", 3, "click", 4, "ngFor", "ngForOf"], [1, "flex", "md:hidden"], ["class", "flex gap-2 align-items-center", 4, "ngIf"], ["tooltipPosition", "top", 1, "tooltip-warning", "hidden", "md:block", "align-self-baseline", 3, "positionTop", "pTooltip"], ["width", "20", "height", "20"], ["href", "assets/images/icons.svg#exclamation-mark"], ["tooltipPosition", "top", 1, "tooltip-warning", "warning-text", "hidden", "md:block", "align-self-baseline", 3, "positionTop", "pTooltip"], ["width", "24", "height", "20"], ["href", "assets/images/icons.svg#warning-mark"], [1, "aspect-ratio-button", 3, "click"], ["type", "button", 1, "aspect-ratio-button", 3, "click"], ["fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "1", "y", "1", "stroke", "currentColor", "stroke-width", "1.5"], [1, "flex", "gap-2", "align-items-center"], [1, "line-height-3", "text-sm"], [1, "font-bold"], [1, "line-height-3", "warning-text", "text-sm"]],
      template: function AspectRatioControlsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AspectRatioControlsComponent_div_5_Template, 4, 4, "div", 3)(6, AspectRatioControlsComponent_div_6_Template, 4, 4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AspectRatioControlsComponent_button_8_Template, 3, 3, "button", 6)(9, AspectRatioControlsComponent_button_9_Template, 4, 6, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AspectRatioControlsComponent_div_11_Template, 12, 9, "div", 9)(12, AspectRatioControlsComponent_div_12_Template, 12, 9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "ASPECT_RATIO.TITLE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAspectRatioCorrect);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAspectRatioCorrect);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAspectRatioCorrect);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.aspectRatioList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAspectRatioCorrect);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAspectRatioCorrect);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip],
      styles: [".aspect-ratio-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  max-width: 100%;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .aspect-ratio-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n    flex-direction: row;\n    gap: 3rem;\n  }\n}\n\n.aspect-ratio-title[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .aspect-ratio-title[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    width: 145px;\n  }\n}\n\n.aspect-ratio-buttons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  width: 350px;\n}\n\n.aspect-ratio-button[_ngcontent-%COMP%] {\n  height: 44px;\n  color: var(--greyText);\n  gap: 0.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  cursor: pointer;\n  font-size: 0.75rem;\n  background-color: transparent;\n  outline: none;\n  border: none;\n}\n@media (min-width: 768px) {\n  .aspect-ratio-button[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    width: 70px;\n    padding: 0 0 0 1rem;\n  }\n}\n.aspect-ratio-button[_ngcontent-%COMP%]:hover, .aspect-ratio-button[_ngcontent-%COMP%]:active {\n  color: var(--mainContrastElement);\n}\n\n.warning-text[_ngcontent-%COMP%] {\n  color: var(--errorMessage);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYXNwZWN0LXJhdGlvLWNvbnRyb2xzL2FzcGVjdC1yYXRpby1jb250cm9scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBUEY7SUFRSSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFFRjtBQUFFO0VBTkY7SUFPSSwyQkFBQTtJQUNBLFlBQUE7RUFHRjtBQUNGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtBQUdGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFHRjtBQURFO0VBZEY7SUFlSSwyQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQUlGO0FBQ0Y7QUFGRTtFQUNFLGlDQUFBO0FBSUo7O0FBQUE7RUFDRSwwQkFBQTtBQUdGIiwic291cmNlc0NvbnRlbnQiOlsiLmFzcGVjdC1yYXRpby13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogM3JlbTtcbiAgfVxufVxuXG4uYXNwZWN0LXJhdGlvLXRpdGxlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTQ1cHg7XG4gIH1cbn1cblxuLmFzcGVjdC1yYXRpby1idXR0b25zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgd2lkdGg6IDM1MHB4O1xufVxuXG4uYXNwZWN0LXJhdGlvLWJ1dHRvbiB7XG4gIGhlaWdodDogNDRweDtcbiAgY29sb3I6IHZhcigtLWdyZXlUZXh0KTtcbiAgZ2FwOiAwLjI1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIHBhZGRpbmc6IDAgMCAwIDFyZW07XG4gIH1cblxuICAmOmhvdmVyLCAmOmFjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLW1haW5Db250cmFzdEVsZW1lbnQpXG4gIH1cbn1cblxuLndhcm5pbmctdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1lcnJvck1lc3NhZ2UpXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return AspectRatioControlsComponent;
})();

/***/ }),

/***/ 90211:
/*!*********************************************!*\
  !*** ./src/app/shared/enums/date-format.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DATE_FORMAT_ARTWORK: () => (/* binding */ DATE_FORMAT_ARTWORK)
/* harmony export */ });
var DATE_FORMAT_ARTWORK = /*#__PURE__*/function (DATE_FORMAT_ARTWORK) {
  DATE_FORMAT_ARTWORK[DATE_FORMAT_ARTWORK["CENTURY"] = 0] = "CENTURY";
  DATE_FORMAT_ARTWORK[DATE_FORMAT_ARTWORK["DECADE"] = 1] = "DECADE";
  DATE_FORMAT_ARTWORK[DATE_FORMAT_ARTWORK["YEAR"] = 2] = "YEAR";
  DATE_FORMAT_ARTWORK[DATE_FORMAT_ARTWORK["MONTH_YEAR"] = 3] = "MONTH_YEAR";
  DATE_FORMAT_ARTWORK[DATE_FORMAT_ARTWORK["FULL_DATE"] = 4] = "FULL_DATE";
  DATE_FORMAT_ARTWORK[DATE_FORMAT_ARTWORK["OTHER"] = 5] = "OTHER";
  return DATE_FORMAT_ARTWORK;
}(DATE_FORMAT_ARTWORK || {});

/***/ }),

/***/ 51195:
/*!********************************************************!*\
  !*** ./src/app/shared/services/artist-name.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtistNameService: () => (/* binding */ ArtistNameService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _ApiClient_backend_Artist_artist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ApiClient/backend/Artist/artist */ 69640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);



let ArtistNameService = /*#__PURE__*/(() => {
  class ArtistNameService {
    getArtistNames() {
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _ApiClient_backend_Artist_artist__WEBPACK_IMPORTED_MODULE_1__.Artist.updateLastest();
        return _ApiClient_backend_Artist_artist__WEBPACK_IMPORTED_MODULE_1__.Artist.items ? _ApiClient_backend_Artist_artist__WEBPACK_IMPORTED_MODULE_1__.Artist.items.map(a => ({
          id: a.id,
          name: a.names[0] ?? ''
        })) : [];
      })();
    }
    static #_ = this.ɵfac = function ArtistNameService_Factory(t) {
      return new (t || ArtistNameService)();
    };
    static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ArtistNameService,
      factory: ArtistNameService.ɵfac,
      providedIn: 'root'
    });
  }
  return ArtistNameService;
})();

/***/ }),

/***/ 49669:
/*!******************************************************!*\
  !*** ./src/app/shared/services/tags-name.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagsNameService: () => (/* binding */ TagsNameService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _ApiClient_backend_Extra_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ApiClient/backend/Extra/tag */ 88754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);



let TagsNameService = /*#__PURE__*/(() => {
  class TagsNameService {
    getTags() {
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _ApiClient_backend_Extra_tag__WEBPACK_IMPORTED_MODULE_1__.Tag.updateLastest();
        return _ApiClient_backend_Extra_tag__WEBPACK_IMPORTED_MODULE_1__.Tag.items;
      })();
    }
    static #_ = this.ɵfac = function TagsNameService_Factory(t) {
      return new (t || TagsNameService)();
    };
    static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: TagsNameService,
      factory: TagsNameService.ɵfac,
      providedIn: 'root'
    });
  }
  return TagsNameService;
})();

/***/ }),

/***/ 28467:
/*!*************************************************!*\
  !*** ./src/app/shared/utils/aspectRatioList.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aspectRatioList: () => (/* binding */ aspectRatioList)
/* harmony export */ });
const aspectRatioList = [{
  label: '16:9',
  ratio: 16 / 9,
  image: 'horizontal',
  iconSize: [23, 15]
}, {
  label: '3:2',
  ratio: 3 / 2,
  image: 'horizontal',
  iconSize: [22, 15]
}, {
  label: '7:5',
  ratio: 7 / 5,
  image: 'horizontal',
  iconSize: [21, 15]
}, {
  label: '4:3',
  ratio: 4 / 3,
  image: 'horizontal',
  iconSize: [20, 15]
}, {
  label: '1:1',
  ratio: 1,
  image: 'square',
  iconSize: [20, 20]
}, {
  label: '9:16',
  ratio: 9 / 16,
  image: 'vertical',
  iconSize: [15, 23]
}, {
  label: '2:3',
  ratio: 2 / 3,
  image: 'vertical',
  iconSize: [15, 22]
}, {
  label: '5:7',
  ratio: 5 / 7,
  image: 'vertical',
  iconSize: [15, 21]
}, {
  label: '3:4',
  ratio: 3 / 4,
  image: 'vertical',
  iconSize: [15, 20]
}];

/***/ }),

/***/ 7181:
/*!************************************************!*\
  !*** ./src/app/shared/utils/dateFormatList.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateFormatOptions: () => (/* binding */ dateFormatOptions),
/* harmony export */   getDateFormat: () => (/* binding */ getDateFormat),
/* harmony export */   getNewArtworkDate: () => (/* binding */ getNewArtworkDate)
/* harmony export */ });
/* harmony import */ var _enums_date_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @enums/date-format */ 90211);

const dateFormatOptions = [{
  name: 'Century',
  code: _enums_date_format__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT_ARTWORK.CENTURY
}, {
  name: 'Decade',
  code: _enums_date_format__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT_ARTWORK.DECADE
}, {
  name: 'Year',
  code: _enums_date_format__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT_ARTWORK.YEAR
}, {
  name: 'MM/YY',
  code: _enums_date_format__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT_ARTWORK.MONTH_YEAR
}, {
  name: 'Full date',
  code: _enums_date_format__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT_ARTWORK.FULL_DATE
}, {
  name: 'Other',
  code: _enums_date_format__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT_ARTWORK.OTHER
}];
function getNewArtworkDate(format, date) {
  switch (format) {
    case _enums_date_format__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT_ARTWORK.YEAR:
      return date.year ? date.year?.getFullYear().toString() : '';
    case _enums_date_format__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT_ARTWORK.MONTH_YEAR:
      {
        if (date.monthYear) {
          const month = date.monthYear?.getMonth();
          const year = date.monthYear?.getFullYear();
          return `${month + 1}/${year}`;
        } else {
          return '';
        }
      }
    case _enums_date_format__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT_ARTWORK.FULL_DATE:
      {
        if (date.full) {
          const day = date.full?.getDate();
          const month = date.full?.getMonth();
          const year = date.full?.getFullYear();
          return `${day}/${month + 1}/${year}`;
        } else {
          return '';
        }
      }
    case _enums_date_format__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT_ARTWORK.DECADE:
      return date.decade ? `${date.decade}s` : '';
    case _enums_date_format__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT_ARTWORK.CENTURY:
      return date.century ?? '';
    default:
      return date.other ?? '';
  }
}
function getDateFormat(format, date) {
  if (!date) {
    return 'Unknown';
  } else {
    switch (format) {
      case _enums_date_format__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT_ARTWORK.CENTURY:
        return 'Roman';
      case _enums_date_format__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT_ARTWORK.DECADE:
      case _enums_date_format__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT_ARTWORK.YEAR:
      case _enums_date_format__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT_ARTWORK.FULL_DATE:
      case _enums_date_format__WEBPACK_IMPORTED_MODULE_0__.DATE_FORMAT_ARTWORK.MONTH_YEAR:
        return 'Date';
      default:
        return 'Unknown';
    }
  }
}

/***/ }),

/***/ 58311:
/*!***************************************************!*\
  !*** ./src/app/shared/utils/filterArtistNames.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterArtistNames: () => (/* binding */ filterArtistNames)
/* harmony export */ });
function filterArtistNames(artistNamesWithObject, isArtistUser) {
  const artistNamesWithUserName = artistNamesWithObject.map(a => {
    return typeof a === 'string' ? a : a.name;
  });
  const artistNames = isArtistUser ? artistNamesWithUserName.slice(1) : artistNamesWithUserName;
  return artistNames.filter(a => a.trim() !== '');
}

/***/ }),

/***/ 24000:
/*!************************************************!*\
  !*** ./src/app/shared/utils/tags-validator.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagsValidator: () => (/* binding */ TagsValidator)
/* harmony export */ });
class TagsValidator {
  static pattern(pattern) {
    return control => {
      const value = control.value;
      if (typeof value === 'string' && value !== '') {
        if (!pattern.test(value)) {
          return {
            pattern: true
          };
        }
      } else if (typeof value === 'object') {
        return null;
      }
      return null;
    };
  }
}

/***/ }),

/***/ 68349:
/*!**********************************************************!*\
  !*** ./src/app/store/newArtwork/newArtwork.selectors.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newArtworkFeatureSelector: () => (/* binding */ newArtworkFeatureSelector),
/* harmony export */   selectIsLoadingNewArtwork: () => (/* binding */ selectIsLoadingNewArtwork)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 81383);

const newArtworkFeatureSelector = state => state.newArtwork;
const selectIsLoadingNewArtwork = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(newArtworkFeatureSelector, state => state.isLoading);

/***/ }),

/***/ 38784:
/*!****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-autocomplete.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AUTOCOMPLETE_VALUE_ACCESSOR: () => (/* binding */ AUTOCOMPLETE_VALUE_ACCESSOR),
/* harmony export */   AutoComplete: () => (/* binding */ AutoComplete),
/* harmony export */   AutoCompleteModule: () => (/* binding */ AutoCompleteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/autofocus */ 17159);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */ 35228);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/overlay */ 33576);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/scroller */ 22222);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 7251);
/* harmony import */ var primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/timescircle */ 20839);
/* harmony import */ var primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/icons/spinner */ 4766);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/icons/times */ 57727);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/icons/chevrondown */ 85804);
























const _c0 = ["container"];
const _c1 = ["focusInput"];
const _c2 = ["multiIn"];
const _c3 = ["multiContainer"];
const _c4 = ["ddBtn"];
const _c5 = ["items"];
const _c6 = ["scroller"];
const _c7 = ["overlay"];
const _c8 = a0 => ({
  "p-autocomplete-token": true,
  "p-focus": a0
});
const _c9 = a0 => ({
  $implicit: a0
});
const _c10 = a0 => ({
  height: a0
});
const _c11 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
const _c12 = a0 => ({
  options: a0
});
const _c13 = () => ({});
const _c14 = (a0, a1, a2) => ({
  "p-highlight": a0,
  "p-focus": a1,
  "p-disabled": a2
});
const _c15 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function AutoComplete_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 20, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AutoComplete_input_2_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInput($event));
    })("keydown", function AutoComplete_input_2_Template_input_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onKeyDown($event));
    })("change", function AutoComplete_input_2_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInputChange($event));
    })("focus", function AutoComplete_input_2_Template_input_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInputFocus($event));
    })("blur", function AutoComplete_input_2_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInputBlur($event));
    })("paste", function AutoComplete_input_2_Template_input_paste_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInputPaste($event));
    })("keyup", function AutoComplete_input_2_Template_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInputKeyUp($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_24_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.inputStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autofocus", ctx_r2.autofocus)("ngClass", ctx_r2.inputClass)("ngStyle", ctx_r2.inputStyle)("type", ctx_r2.type)("autocomplete", ctx_r2.autocomplete)("required", ctx_r2.required)("name", ctx_r2.name)("maxlength", ctx_r2.maxlength)("tabindex", !ctx_r2.disabled ? ctx_r2.tabindex : -1)("readonly", ctx_r2.readonly)("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("value", ctx_r2.inputValue())("id", ctx_r2.inputId)("placeholder", ctx_r2.placeholder)("size", ctx_r2.size)("aria-label", ctx_r2.ariaLabel)("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-required", ctx_r2.required)("aria-expanded", (tmp_24_0 = ctx_r2.overlayVisible) !== null && tmp_24_0 !== undefined ? tmp_24_0 : false)("aria-controls", ctx_r2.overlayVisible ? ctx_r2.id + "_list" : null)("aria-aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : undefined);
  }
}
function AutoComplete_ng_container_3_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesIcon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_ng_container_3_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-autocomplete-clear-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function AutoComplete_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {}
function AutoComplete_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoComplete_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_ng_container_3_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_ng_container_3_span_2_1_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.clearIconTemplate);
  }
}
function AutoComplete_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_ng_container_3_TimesIcon_1_Template, 1, 2, "TimesIcon", 21)(2, AutoComplete_ng_container_3_span_2_Template, 2, 2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.clearIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.clearIconTemplate);
  }
}
function AutoComplete_ul_4_li_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function AutoComplete_ul_4_li_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getOptionLabel(option_r8));
  }
}
function AutoComplete_ul_4_li_2_TimesCircleIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesCircleIcon", 36);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-autocomplete-token-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function AutoComplete_ul_4_li_2_span_6_1_ng_template_0_Template(rf, ctx) {}
function AutoComplete_ul_4_li_2_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoComplete_ul_4_li_2_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_ul_4_li_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_ul_4_li_2_span_6_1_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.removeIconTemplate);
  }
}
function AutoComplete_ul_4_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 29, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_ul_4_li_2_ng_container_2_Template, 1, 0, "ng-container", 30)(3, AutoComplete_ul_4_li_2_span_3_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_ul_4_li_2_Template_span_click_4_listener($event) {
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.removeOption($event, i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutoComplete_ul_4_li_2_TimesCircleIcon_5_Template, 1, 2, "TimesCircleIcon", 33)(6, AutoComplete_ul_4_li_2_span_6_Template, 2, 2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c8, ctx_r2.focusedMultipleOptionIndex() === i_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.id + "_multiple_option_" + i_r9)("aria-label", ctx_r2.getOptionLabel(option_r8))("aria-setsize", ctx_r2.modelValue().length)("aria-posinset", i_r9 + 1)("aria-selected", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.selectedItemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c9, option_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.selectedItemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.removeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.removeIconTemplate);
  }
}
function AutoComplete_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 25, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function AutoComplete_ul_4_Template_ul_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onMultipleContainerFocus($event));
    })("blur", function AutoComplete_ul_4_Template_ul_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onMultipleContainerBlur($event));
    })("keydown", function AutoComplete_ul_4_Template_ul_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onMultipleContainerKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_ul_4_li_2_Template, 7, 15, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 27)(4, "input", 28, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AutoComplete_ul_4_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInput($event));
    })("keydown", function AutoComplete_ul_4_Template_input_keydown_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onKeyDown($event));
    })("change", function AutoComplete_ul_4_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInputChange($event));
    })("focus", function AutoComplete_ul_4_Template_input_focus_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInputFocus($event));
    })("blur", function AutoComplete_ul_4_Template_input_blur_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInputBlur($event));
    })("paste", function AutoComplete_ul_4_Template_input_paste_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInputPaste($event));
    })("keyup", function AutoComplete_ul_4_Template_input_keyup_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onInputKeyUp($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_29_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.multiContainerClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", "horizontal")("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedMultipleOptionId : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.modelValue());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.inputStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autofocus", ctx_r2.autofocus)("ngClass", ctx_r2.inputClass)("ngStyle", ctx_r2.inputStyle)("autocomplete", ctx_r2.autocomplete)("required", ctx_r2.required)("maxlength", ctx_r2.maxlength)("tabindex", !ctx_r2.disabled ? ctx_r2.tabindex : -1)("readonly", ctx_r2.readonly)("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("type", ctx_r2.type)("id", ctx_r2.inputId)("name", ctx_r2.name)("placeholder", !ctx_r2.filled ? ctx_r2.placeholder : null)("size", ctx_r2.size)("aria-label", ctx_r2.ariaLabel)("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-required", ctx_r2.required)("aria-expanded", (tmp_29_0 = ctx_r2.overlayVisible) !== null && tmp_29_0 !== undefined ? tmp_29_0 : false)("aria-controls", ctx_r2.overlayVisible ? ctx_r2.id + "_list" : null)("aria-aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : undefined);
  }
}
function AutoComplete_ng_container_5_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SpinnerIcon", 40);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-autocomplete-loader")("spin", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function AutoComplete_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {}
function AutoComplete_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoComplete_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_ng_container_5_span_2_1_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.loadingIconTemplate);
  }
}
function AutoComplete_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_ng_container_5_SpinnerIcon_1_Template, 1, 3, "SpinnerIcon", 38)(2, AutoComplete_ng_container_5_span_2_Template, 2, 2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.loadingIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loadingIconTemplate);
  }
}
function AutoComplete_button_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 44);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.dropdownIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function AutoComplete_button_6_ng_container_3_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon");
  }
}
function AutoComplete_button_6_ng_container_3_2_ng_template_0_Template(rf, ctx) {}
function AutoComplete_button_6_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoComplete_button_6_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_button_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_button_6_ng_container_3_ChevronDownIcon_1_Template, 1, 0, "ChevronDownIcon", 12)(2, AutoComplete_button_6_ng_container_3_2_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.dropdownIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.dropdownIconTemplate);
  }
}
function AutoComplete_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_button_6_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.handleDropdownClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_button_6_span_2_Template, 1, 2, "span", 43)(3, AutoComplete_button_6_ng_container_3_Template, 3, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r2.dropdownAriaLabel)("tabindex", ctx_r2.tabindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.dropdownIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.dropdownIcon);
  }
}
function AutoComplete_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function AutoComplete_p_scroller_11_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function AutoComplete_p_scroller_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoComplete_p_scroller_11_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 30);
  }
  if (rf & 2) {
    const items_r12 = ctx.$implicit;
    const scrollerOptions_r13 = ctx.options;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const buildInItems_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", buildInItems_r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c11, items_r12, scrollerOptions_r13));
  }
}
function AutoComplete_p_scroller_11_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function AutoComplete_p_scroller_11_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoComplete_p_scroller_11_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 30);
  }
  if (rf & 2) {
    const scrollerOptions_r15 = ctx.options;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.loaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c12, scrollerOptions_r15));
  }
}
function AutoComplete_p_scroller_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_p_scroller_11_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function AutoComplete_p_scroller_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-scroller", 45, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLazyLoad", function AutoComplete_p_scroller_11_Template_p_scroller_onLazyLoad_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onLazyLoad.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_p_scroller_11_ng_template_2_Template, 1, 5, "ng-template", 46)(3, AutoComplete_p_scroller_11_ng_container_3_Template, 2, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c10, ctx_r2.scrollHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r2.visibleOptions())("itemSize", ctx_r2.virtualScrollItemSize || ctx_r2._itemSize)("autoSize", true)("lazy", ctx_r2.lazy)("options", ctx_r2.virtualScrollOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loaderTemplate);
  }
}
function AutoComplete_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function AutoComplete_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_ng_container_12_ng_container_1_Template, 1, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const buildInItems_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", buildInItems_r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c11, ctx_r2.visibleOptions(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c13)));
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getOptionGroupLabel(option_r16.optionGroup));
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_ng_template_13_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 12)(3, AutoComplete_ng_template_13_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const option_r16 = ctx_r16.$implicit;
    const i_r18 = ctx_r16.index;
    const scrollerOptions_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c10, scrollerOptions_r19.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r18, scrollerOptions_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.groupTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.groupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c9, option_r16.optionGroup));
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getOptionLabel(option_r16));
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_ng_template_13_ng_template_2_ng_container_1_Template_li_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const option_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onOptionSelect($event, option_r16));
    })("mouseenter", function AutoComplete_ng_template_13_ng_template_2_ng_container_1_Template_li_mouseenter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const scrollerOptions_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onOptionMouseEnter($event, ctx_r2.getOptionIndex(i_r18, scrollerOptions_r19)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_ng_template_13_ng_template_2_ng_container_1_span_2_Template, 2, 1, "span", 12)(3, AutoComplete_ng_template_13_ng_template_2_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const option_r16 = ctx_r16.$implicit;
    const i_r18 = ctx_r16.index;
    const scrollerOptions_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c10, scrollerOptions_r19.itemSize + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](14, _c14, ctx_r2.isSelected(option_r16), ctx_r2.focusedOptionIndex() === ctx_r2.getOptionIndex(i_r18, scrollerOptions_r19), ctx_r2.isOptionDisabled(option_r16)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r18, scrollerOptions_r19))("aria-label", ctx_r2.getOptionLabel(option_r16))("aria-selected", ctx_r2.isSelected(option_r16))("aria-disabled", ctx_r2.isOptionDisabled(option_r16))("data-p-focused", ctx_r2.focusedOptionIndex() === ctx_r2.getOptionIndex(i_r18, scrollerOptions_r19))("aria-setsize", ctx_r2.ariaSetSize)("aria-posinset", ctx_r2.getAriaPosInset(ctx_r2.getOptionIndex(i_r18, scrollerOptions_r19)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c15, option_r16, scrollerOptions_r19.getOptions ? scrollerOptions_r19.getOptions(i_r18) : i_r18));
  }
}
function AutoComplete_ng_template_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoComplete_ng_template_13_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 12)(1, AutoComplete_ng_template_13_ng_template_2_ng_container_1_Template, 4, 21, "ng-container", 12);
  }
  if (rf & 2) {
    const option_r16 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isOptionGroup(option_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isOptionGroup(option_r16));
  }
}
function AutoComplete_ng_template_13_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.searchResultMessageText, " ");
  }
}
function AutoComplete_ng_template_13_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 9);
  }
}
function AutoComplete_ng_template_13_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_ng_template_13_li_3_ng_container_1_Template, 2, 1, "ng-container", 54)(2, AutoComplete_ng_template_13_li_3_ng_container_2_Template, 2, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c10, scrollerOptions_r19.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.emptyTemplate)("ngIfElse", ctx_r2.empty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.emptyTemplate);
  }
}
function AutoComplete_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 48, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_ng_template_13_ng_template_2_Template, 2, 2, "ng-template", 49)(3, AutoComplete_ng_template_13_li_3_Template, 3, 6, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const items_r21 = ctx.$implicit;
    const scrollerOptions_r19 = ctx.options;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](scrollerOptions_r19.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", scrollerOptions_r19.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.id + "_list")("aria-label", ctx_r2.listLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !items_r21 || items_r21 && items_r21.length === 0 && ctx_r2.showEmptyMessage);
  }
}
function AutoComplete_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => AutoComplete),
  multi: true
};
/**
 * AutoComplete is an input component that provides real-time suggestions when being typed.
 * @group Components
 */
let AutoComplete = /*#__PURE__*/(() => {
  class AutoComplete {
    document;
    el;
    renderer;
    cd;
    config;
    overlayService;
    zone;
    /**
     * Minimum number of characters to initiate a search.
     * @group Props
     */
    minLength = 1;
    /**
     * Delay between keystrokes to wait before sending a query.
     * @group Props
     */
    delay = 300;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Inline style of the overlay panel element.
     * @group Props
     */
    panelStyle;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Style class of the overlay panel element.
     * @group Props
     */
    panelStyleClass;
    /**
     * Inline style of the input field.
     * @group Props
     */
    inputStyle;
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId;
    /**
     * Inline style of the input field.
     * @group Props
     */
    inputStyleClass;
    /**
     * Hint text for the input field.
     * @group Props
     */
    placeholder;
    /**
     * When present, it specifies that the input cannot be typed.
     * @group Props
     */
    readonly;
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    disabled;
    /**
     * Maximum height of the suggestions panel.
     * @group Props
     */
    scrollHeight = '200px';
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    lazy = false;
    /**
     * Whether the data should be loaded on demand during scroll.
     * @group Props
     */
    virtualScroll;
    /**
     * Height of an item in the list for VirtualScrolling.
     * @group Props
     */
    virtualScrollItemSize;
    /**
     * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
     * @group Props
     */
    virtualScrollOptions;
    /**
     * Maximum number of character allows in the input field.
     * @group Props
     */
    maxlength;
    /**
     * Name of the input element.
     * @group Props
     */
    name;
    /**
     * When present, it specifies that an input field must be filled out before submitting the form.
     * @group Props
     */
    required;
    /**
     * Size of the input field.
     * @group Props
     */
    size;
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * When enabled, highlights the first item in the list by default.
     * @group Props
     */
    autoHighlight;
    /**
     * When present, autocomplete clears the manual input if it does not match of the suggestions to force only accepting values from the suggestions.
     * @group Props
     */
    forceSelection;
    /**
     * Type of the input, defaults to "text".
     * @group Props
     */
    type = 'text';
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex = true;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex = 0;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel;
    /**
     * Defines a string that labels the dropdown button for accessibility.
     * @group Props
     */
    dropdownAriaLabel;
    /**
     * Specifies one or more IDs in the DOM that labels the input field.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Icon class of the dropdown icon.
     * @group Props
     */
    dropdownIcon;
    /**
     * Ensures uniqueness of selected items on multiple mode.
     * @group Props
     */
    unique = true;
    /**
     * Whether to display options as grouped when nested options are provided.
     * @group Props
     */
    group;
    /**
     * Whether to run a query when input receives focus.
     * @group Props
     */
    completeOnFocus = false;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear = false;
    /**
     * Field of a suggested object to resolve and display.
     * @group Props
     * @deprecated use optionLabel property instead
     */
    field;
    /**
     * Displays a button next to the input field when enabled.
     * @group Props
     */
    dropdown;
    /**
     * Whether to show the empty message or not.
     * @group Props
     */
    showEmptyMessage = true;
    /**
     * Specifies the behavior dropdown button. Default "blank" mode sends an empty string and "current" mode sends the input value.
     * @group Props
     */
    dropdownMode = 'blank';
    /**
     * Specifies if multiple values can be selected.
     * @group Props
     */
    multiple;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex;
    /**
     * A property to uniquely identify a value in options.
     * @group Props
     */
    dataKey;
    /**
     * Text to display when there is no data. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyMessage;
    /**
     * Transition options of the show animation.
     * @group Props
     */
    showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
    /**
     * Transition options of the hide animation.
     * @group Props
     */
    hideTransitionOptions = '.1s linear';
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus;
    /**
     * Used to define a string that autocomplete attribute the current element.
     * @group Props
     */
    autocomplete = 'off';
    /**
     * Name of the options field of an option group.
     * @group Props
     */
    optionGroupChildren = 'items';
    /**
     * Name of the label field of an option group.
     * @group Props
     */
    optionGroupLabel = 'label';
    /**
     * Options for the overlay element.
     * @group Props
     */
    overlayOptions;
    /**
     * An array of suggestions to display.
     * @group Props
     */
    get suggestions() {
      return this._suggestions();
    }
    set suggestions(value) {
      this._suggestions.set(value);
      this.handleSuggestionsChange();
    }
    /**
     * Element dimensions of option for virtual scrolling.
     * @group Props
     * @deprecated use virtualScrollItemSize property instead.
     */
    get itemSize() {
      return this._itemSize;
    }
    set itemSize(val) {
      this._itemSize = val;
      console.warn('The itemSize property is deprecated, use virtualScrollItemSize property instead.');
    }
    /**
     * Property name or getter function to use as the label of an option.
     * @group Props
     */
    optionLabel;
    /**
     * Unique identifier of the component.
     * @group Props
     */
    id;
    /**
     * Text to display when the search is active. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} results are available'
     */
    searchMessage;
    /**
     * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue 'No selected item'
     */
    emptySelectionMessage;
    /**
     * Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} items selected'
     */
    selectionMessage;
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
     * @group Props
     */
    autoOptionFocus = false;
    /**
     * When enabled, the focused option is selected.
     * @group Props
     */
    selectOnFocus;
    /**
     * Locale to use in searching. The default locale is the host environment's current locale.
     * @group Props
     */
    searchLocale;
    /**
     * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
     * @group Props
     */
    optionDisabled;
    /**
     * When enabled, the hovered option will be focused.
     * @group Props
     */
    focusOnHover;
    /**
     * Callback to invoke to search for suggestions.
     * @param {AutoCompleteCompleteEvent} event - Custom complete event.
     * @group Emits
     */
    completeMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a suggestion is selected.
     * @param {AutoCompleteSelectEvent} event - custom select event.
     * @group Emits
     */
    onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a selected value is removed.
     * @param {AutoCompleteUnselectEvent} event - custom unselect event.
     * @group Emits
     */
    onUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke to when dropdown button is clicked.
     * @param {AutoCompleteDropdownClickEvent} event - custom dropdown click event.
     * @group Emits
     */
    onDropdownClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when clear button is clicked.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on input key up.
     * @param {KeyboardEvent} event - Keyboard event.
     * @group Emits
     */
    onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on overlay is shown.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on overlay is hidden.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on lazy load data.
     * @param {AutoCompleteLazyLoadEvent} event - Lazy load event.
     * @group Emits
     */
    onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    containerEL;
    inputEL;
    multiInputEl;
    multiContainerEL;
    dropdownButton;
    itemsViewChild;
    scroller;
    overlayViewChild;
    templates;
    _itemSize;
    itemsWrapper;
    itemTemplate;
    emptyTemplate;
    headerTemplate;
    footerTemplate;
    selectedItemTemplate;
    groupTemplate;
    loaderTemplate;
    removeIconTemplate;
    loadingIconTemplate;
    clearIconTemplate;
    dropdownIconTemplate;
    value;
    _suggestions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    onModelChange = () => {};
    onModelTouched = () => {};
    timeout;
    overlayVisible;
    suggestionsUpdated;
    highlightOption;
    highlightOptionChanged;
    focused = false;
    _filled;
    get filled() {
      return this._filled;
    }
    set filled(value) {
      this._filled = value;
    }
    loading;
    scrollHandler;
    listId;
    searchTimeout;
    dirty = false;
    modelValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    focusedMultipleOptionIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(-1);
    focusedOptionIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(-1);
    visibleOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return this.group ? this.flatOptions(this._suggestions()) : this._suggestions() || [];
    });
    inputValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const modelValue = this.modelValue();
      if (modelValue) {
        if (typeof modelValue === 'object') {
          const label = this.getOptionLabel(modelValue);
          return label != null ? label : modelValue;
        } else {
          return modelValue;
        }
      } else {
        return '';
      }
    });
    get focusedMultipleOptionId() {
      return this.focusedMultipleOptionIndex() !== -1 ? `${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}` : null;
    }
    get focusedOptionId() {
      return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
    }
    get containerClass() {
      return {
        'p-autocomplete p-component p-inputwrapper': true,
        'p-disabled': this.disabled,
        'p-focus': this.focused,
        'p-autocomplete-dd': this.dropdown,
        'p-autocomplete-multiple': this.multiple,
        'p-inputwrapper-focus': this.focused,
        'p-overlay-open': this.overlayVisible
      };
    }
    get multiContainerClass() {
      return 'p-autocomplete-multiple-container p-component p-inputtext';
    }
    get panelClass() {
      return {
        'p-autocomplete-panel p-component': true,
        'p-input-filled': this.config.inputStyle === 'filled',
        'p-ripple-disabled': this.config.ripple === false
      };
    }
    get inputClass() {
      return {
        'p-autocomplete-input p-inputtext p-component': !this.multiple,
        'p-autocomplete-dd-input': this.dropdown
      };
    }
    get searchResultMessageText() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.visibleOptions()) && this.overlayVisible ? this.searchMessageText.replaceAll('{0}', this.visibleOptions().length) : this.emptySearchMessageText;
    }
    get searchMessageText() {
      return this.searchMessage || this.config.translation.searchMessage || '';
    }
    get emptySearchMessageText() {
      return this.emptyMessage || this.config.translation.emptySearchMessage || '';
    }
    get selectionMessageText() {
      return this.selectionMessage || this.config.translation.selectionMessage || '';
    }
    get emptySelectionMessageText() {
      return this.emptySelectionMessage || this.config.translation.emptySelectionMessage || '';
    }
    get selectedMessageText() {
      return this.hasSelectedOption() ? this.selectionMessageText.replaceAll('{0}', this.multiple ? this.modelValue().length : '1') : this.emptySelectionMessageText;
    }
    get ariaSetSize() {
      return this.visibleOptions().filter(option => !this.isOptionGroup(option)).length;
    }
    get listLabel() {
      return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_3__.TranslationKeys.ARIA)['listLabel'];
    }
    get virtualScrollerDisabled() {
      return !this.virtualScroll;
    }
    constructor(document, el, renderer, cd, config, overlayService, zone) {
      this.document = document;
      this.el = el;
      this.renderer = renderer;
      this.cd = cd;
      this.config = config;
      this.overlayService = overlayService;
      this.zone = zone;
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
        this.filled = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.modelValue());
      });
    }
    ngOnInit() {
      this.id = this.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
      this.cd.detectChanges();
    }
    ngAfterViewChecked() {
      //Use timeouts as since Angular 4.2, AfterViewChecked is broken and not called after panel is updated
      if (this.suggestionsUpdated && this.overlayViewChild) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            if (this.overlayViewChild) {
              this.overlayViewChild.alignOverlay();
            }
          }, 1);
          this.suggestionsUpdated = false;
        });
      }
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'item':
            this.itemTemplate = item.template;
            break;
          case 'group':
            this.groupTemplate = item.template;
            break;
          case 'selectedItem':
            this.selectedItemTemplate = item.template;
            break;
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'empty':
            this.emptyTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          case 'loader':
            this.loaderTemplate = item.template;
            break;
          case 'removetokenicon':
            this.removeIconTemplate = item.template;
            break;
          case 'loadingicon':
            this.loadingIconTemplate = item.template;
            break;
          case 'clearicon':
            this.clearIconTemplate = item.template;
            break;
          case 'dropdownicon':
            this.dropdownIconTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
    }
    handleSuggestionsChange() {
      if (this.loading) {
        this._suggestions() ? this.show() : !!this.emptyTemplate ? this.show() : this.hide();
        const focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
        this.focusedOptionIndex.set(focusedOptionIndex);
        this.suggestionsUpdated = true;
        this.loading = false;
        this.cd.markForCheck();
      }
    }
    flatOptions(options) {
      return (options || []).reduce((result, option, index) => {
        result.push({
          optionGroup: option,
          group: true,
          index
        });
        const optionGroupChildren = this.getOptionGroupChildren(option);
        optionGroupChildren && optionGroupChildren.forEach(o => result.push(o));
        return result;
      }, []);
    }
    isOptionGroup(option) {
      return this.optionGroupLabel && option.optionGroup && option.group;
    }
    findFirstOptionIndex() {
      return this.visibleOptions().findIndex(option => this.isValidOption(option));
    }
    findLastOptionIndex() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findLastIndex(this.visibleOptions(), option => this.isValidOption(option));
    }
    findFirstFocusedOptionIndex() {
      const selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    }
    findLastFocusedOptionIndex() {
      const selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    }
    findSelectedOptionIndex() {
      return this.hasSelectedOption() ? this.visibleOptions().findIndex(option => this.isValidSelectedOption(option)) : -1;
    }
    findNextOptionIndex(index) {
      const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex(option => this.isValidOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    }
    findPrevOptionIndex(index) {
      const matchedOptionIndex = index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), option => this.isValidOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    }
    isValidSelectedOption(option) {
      return this.isValidOption(option) && this.isSelected(option);
    }
    isValidOption(option) {
      return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
    }
    isOptionDisabled(option) {
      return this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
    }
    isSelected(option) {
      if (this.multiple) {
        return this.unique ? this.modelValue()?.find(model => primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(model, this.getOptionValue(option), this.equalityKey())) : false;
      }
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(this.modelValue(), this.getOptionValue(option), this.equalityKey());
    }
    isOptionMatched(option, value) {
      return this.isValidOption(option) && this.getOptionLabel(option).toLocaleLowerCase(this.searchLocale) === value.toLocaleLowerCase(this.searchLocale);
    }
    isInputClicked(event) {
      return event.target === this.inputEL.nativeElement;
    }
    isDropdownClicked(event) {
      return this.dropdownButton?.nativeElement ? event.target === this.dropdownButton.nativeElement || this.dropdownButton.nativeElement.contains(event.target) : false;
    }
    equalityKey() {
      return this.dataKey; // TODO: The 'optionValue' properties can be added.
    }
    onContainerClick(event) {
      if (this.disabled || this.loading || this.isInputClicked(event) || this.isDropdownClicked(event)) {
        return;
      }
      if (!this.overlayViewChild || !this.overlayViewChild.overlayViewChild?.nativeElement.contains(event.target)) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(this.inputEL.nativeElement);
      }
    }
    handleDropdownClick(event) {
      let query = undefined;
      if (this.overlayVisible) {
        this.hide(true);
      } else {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(this.inputEL.nativeElement);
        query = this.inputEL.nativeElement.value;
        if (this.dropdownMode === 'blank') this.search(event, '', 'dropdown');else if (this.dropdownMode === 'current') this.search(event, query, 'dropdown');
      }
      this.onDropdownClick.emit({
        originalEvent: event,
        query
      });
    }
    onInput(event) {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      let query = event.target.value.split('').slice(0, this.maxlength).join('');
      if (!this.multiple && !this.forceSelection) {
        this.updateModel(query);
      }
      if (query.length === 0 && !this.multiple) {
        this.onClear.emit();
        setTimeout(() => {
          this.hide();
        }, this.delay / 2);
      } else {
        if (query.length >= this.minLength) {
          this.focusedOptionIndex.set(-1);
          this.searchTimeout = setTimeout(() => {
            this.search(event, query, 'input');
          }, this.delay);
        } else {
          this.hide();
        }
      }
    }
    onInputChange(event) {
      if (this.forceSelection) {
        let valid = false;
        if (this.visibleOptions()) {
          const matchedValue = this.visibleOptions().find(option => this.isOptionMatched(option, this.inputEL.nativeElement.value || ''));
          if (matchedValue !== undefined) {
            valid = true;
            !this.isSelected(matchedValue) && this.onOptionSelect(event, matchedValue);
          }
        }
        if (!valid) {
          this.inputEL.nativeElement.value = '';
          !this.multiple && this.updateModel(null);
        }
      }
    }
    onInputFocus(event) {
      if (this.disabled) {
        // For ScreenReaders
        return;
      }
      if (!this.dirty && this.completeOnFocus) {
        this.search(event, event.target.value, 'focus');
      }
      this.dirty = true;
      this.focused = true;
      const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      this.focusedOptionIndex.set(focusedOptionIndex);
      this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
      this.onFocus.emit(event);
    }
    onMultipleContainerFocus(event) {
      if (this.disabled) {
        // For ScreenReaders
        return;
      }
      this.focused = true;
    }
    onMultipleContainerBlur(event) {
      this.focusedMultipleOptionIndex.set(-1);
      this.focused = false;
    }
    onMultipleContainerKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      switch (event.code) {
        case 'ArrowLeft':
          this.onArrowLeftKeyOnMultiple(event);
          break;
        case 'ArrowRight':
          this.onArrowRightKeyOnMultiple(event);
          break;
        case 'Backspace':
          this.onBackspaceKeyOnMultiple(event);
          break;
        default:
          break;
      }
    }
    onInputBlur(event) {
      this.dirty = false;
      this.focused = false;
      this.focusedOptionIndex.set(-1);
      this.onModelTouched();
      this.onBlur.emit(event);
    }
    onInputPaste(event) {
      this.onKeyDown(event);
    }
    onInputKeyUp(event) {
      this.onKeyUp.emit(event);
    }
    onKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      switch (event.code) {
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onArrowUpKey(event);
          break;
        case 'ArrowLeft':
          this.onArrowLeftKey(event);
          break;
        case 'ArrowRight':
          this.onArrowRightKey(event);
          break;
        case 'Home':
          this.onHomeKey(event);
          break;
        case 'End':
          this.onEndKey(event);
          break;
        case 'PageDown':
          this.onPageDownKey(event);
          break;
        case 'PageUp':
          this.onPageUpKey(event);
          break;
        case 'Enter':
        case 'NumpadEnter':
          this.onEnterKey(event);
          break;
        case 'Escape':
          this.onEscapeKey(event);
          break;
        case 'Tab':
          this.onTabKey(event);
          break;
        case 'Backspace':
          this.onBackspaceKey(event);
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          //NOOP
          break;
        default:
          break;
      }
    }
    onArrowDownKey(event) {
      if (!this.overlayVisible) {
        return;
      }
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      event.preventDefault();
      event.stopPropagation();
    }
    onArrowUpKey(event) {
      if (!this.overlayVisible) {
        return;
      }
      if (event.altKey) {
        if (this.focusedOptionIndex() !== -1) {
          this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
        }
        this.overlayVisible && this.hide();
        event.preventDefault();
      } else {
        const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
        event.preventDefault();
        event.stopPropagation();
      }
    }
    onArrowLeftKey(event) {
      const target = event.currentTarget;
      this.focusedOptionIndex.set(-1);
      if (this.multiple) {
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isEmpty(target.value) && this.hasSelectedOption()) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(this.multiContainerEL.nativeElement);
          this.focusedMultipleOptionIndex.set(this.modelValue().length);
        } else {
          event.stopPropagation(); // To prevent onArrowLeftKeyOnMultiple method
        }
      }
    }
    onArrowRightKey(event) {
      this.focusedOptionIndex.set(-1);
      this.multiple && event.stopPropagation(); // To prevent onArrowRightKeyOnMultiple method
    }
    onHomeKey(event) {
      const {
        currentTarget
      } = event;
      const len = currentTarget.value.length;
      currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
      this.focusedOptionIndex.set(-1);
      event.preventDefault();
    }
    onEndKey(event) {
      const {
        currentTarget
      } = event;
      const len = currentTarget.value.length;
      currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
      this.focusedOptionIndex.set(-1);
      event.preventDefault();
    }
    onPageDownKey(event) {
      this.scrollInView(this.visibleOptions().length - 1);
      event.preventDefault();
    }
    onPageUpKey(event) {
      this.scrollInView(0);
      event.preventDefault();
    }
    onEnterKey(event) {
      if (!this.overlayVisible) {
        this.onArrowDownKey(event);
      } else {
        if (this.focusedOptionIndex() !== -1) {
          this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
        }
        this.hide();
      }
      event.preventDefault();
    }
    onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
    }
    onTabKey(event) {
      if (this.focusedOptionIndex() !== -1) {
        this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
      }
      this.overlayVisible && this.hide();
    }
    onBackspaceKey(event) {
      if (this.multiple) {
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.modelValue()) && !this.inputEL.nativeElement.value) {
          const removedValue = this.modelValue()[this.modelValue().length - 1];
          const newValue = this.modelValue().slice(0, -1);
          this.updateModel(newValue);
          this.onUnselect.emit({
            originalEvent: event,
            value: removedValue
          });
        }
        event.stopPropagation(); // To prevent onBackspaceKeyOnMultiple method
      }
      if (!this.multiple && this.showClear && this.findSelectedOptionIndex() != -1) {
        this.clear();
      }
    }
    onArrowLeftKeyOnMultiple(event) {
      const optionIndex = this.focusedMultipleOptionIndex() < 1 ? 0 : this.focusedMultipleOptionIndex() - 1;
      this.focusedMultipleOptionIndex.set(optionIndex);
    }
    onArrowRightKeyOnMultiple(event) {
      let optionIndex = this.focusedMultipleOptionIndex();
      optionIndex++;
      this.focusedMultipleOptionIndex.set(optionIndex);
      if (optionIndex > this.modelValue().length - 1) {
        this.focusedMultipleOptionIndex.set(-1);
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(this.inputEL.nativeElement);
      }
    }
    onBackspaceKeyOnMultiple(event) {
      if (this.focusedMultipleOptionIndex() !== -1) {
        this.removeOption(event, this.focusedMultipleOptionIndex());
      }
    }
    onOptionSelect(event, option, isHide = true) {
      const value = this.getOptionValue(option);
      if (this.multiple) {
        this.inputEL.nativeElement.value = '';
        if (!this.isSelected(option)) {
          this.updateModel([...(this.modelValue() || []), value]);
        }
      } else {
        this.updateModel(value);
      }
      this.onSelect.emit({
        originalEvent: event,
        value: option
      });
      isHide && this.hide(true);
    }
    onOptionMouseEnter(event, index) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event, index);
      }
    }
    search(event, query, source) {
      //allow empty string but not undefined or null
      if (query === undefined || query === null) {
        return;
      }
      //do not search blank values on input change
      if (source === 'input' && query.trim().length === 0) {
        return;
      }
      this.loading = true;
      this.completeMethod.emit({
        originalEvent: event,
        query
      });
    }
    removeOption(event, index) {
      event.stopPropagation();
      const removedOption = this.modelValue()[index];
      const value = this.modelValue().filter((_, i) => i !== index).map(option => this.getOptionValue(option));
      this.updateModel(value);
      this.onUnselect.emit({
        originalEvent: event,
        value: removedOption
      });
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(this.inputEL.nativeElement);
    }
    updateModel(value) {
      this.value = value;
      this.modelValue.set(value);
      this.onModelChange(value);
      this.updateInputValue();
      this.cd.markForCheck();
    }
    updateInputValue() {
      if (this.inputEL && this.inputEL.nativeElement) {
        if (!this.multiple) {
          this.inputEL.nativeElement.value = this.inputValue();
        } else {
          this.inputEL.nativeElement.value = '';
        }
      }
    }
    autoUpdateModel() {
      if ((this.selectOnFocus || this.autoHighlight) && this.autoOptionFocus && !this.hasSelectedOption()) {
        const focusedOptionIndex = this.findFirstFocusedOptionIndex();
        this.focusedOptionIndex.set(focusedOptionIndex);
        this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
      }
    }
    scrollInView(index = -1) {
      const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
      if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
        const element = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
        if (element) {
          element.scrollIntoView && element.scrollIntoView({
            block: 'nearest',
            inline: 'nearest'
          });
        } else if (!this.virtualScrollerDisabled) {
          setTimeout(() => {
            this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
          }, 0);
        }
      }
    }
    changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionIndex() !== index) {
        this.focusedOptionIndex.set(index);
        this.scrollInView();
        if (this.selectOnFocus || this.autoHighlight) {
          this.onOptionSelect(event, this.visibleOptions()[index], false);
        }
      }
    }
    show(isFocus = false) {
      this.dirty = true;
      this.overlayVisible = true;
      const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      this.focusedOptionIndex.set(focusedOptionIndex);
      isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(this.inputEL.nativeElement);
      if (isFocus) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(this.inputEL.nativeElement);
      }
      this.onShow.emit();
      this.cd.markForCheck();
    }
    hide(isFocus = false) {
      const _hide = () => {
        this.dirty = isFocus;
        this.overlayVisible = false;
        this.focusedOptionIndex.set(-1);
        isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(this.inputEL.nativeElement);
        this.onHide.emit();
        this.cd.markForCheck();
      };
      setTimeout(() => {
        _hide();
      }, 0); // For ScreenReaders
    }
    clear() {
      this.updateModel(null);
      this.inputEL.nativeElement.value = '';
      this.onClear.emit();
    }
    writeValue(value) {
      this.value = value;
      this.modelValue.set(value);
      this.updateInputValue();
      this.cd.markForCheck();
    }
    hasSelectedOption() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.modelValue());
    }
    getAriaPosInset(index) {
      return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter(option => this.isOptionGroup(option)).length : index) + 1;
    }
    getOptionLabel(option) {
      return this.field || this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(option, this.field || this.optionLabel) : option && option.label != undefined ? option.label : option;
    }
    getOptionValue(option) {
      return option; // TODO: The 'optionValue' properties can be added.
    }
    getOptionIndex(index, scrollerOptions) {
      return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)['index'];
    }
    getOptionGroupLabel(optionGroup) {
      return this.optionGroupLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label != undefined ? optionGroup.label : optionGroup;
    }
    getOptionGroupChildren(optionGroup) {
      return this.optionGroupChildren ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
    }
    registerOnChange(fn) {
      this.onModelChange = fn;
    }
    registerOnTouched(fn) {
      this.onModelTouched = fn;
    }
    setDisabledState(val) {
      this.disabled = val;
      this.cd.markForCheck();
    }
    onOverlayAnimationStart(event) {
      if (event.toState === 'visible') {
        this.itemsWrapper = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(this.overlayViewChild.overlayViewChild?.nativeElement, this.virtualScroll ? '.p-scroller' : '.p-autocomplete-panel');
        if (this.virtualScroll) {
          this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
          this.scroller.viewInit();
        }
        if (this.visibleOptions() && this.visibleOptions().length) {
          if (this.virtualScroll) {
            const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
            if (selectedIndex !== -1) {
              this.scroller?.scrollToIndex(selectedIndex);
            }
          } else {
            let selectedListItem = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(this.itemsWrapper, '.p-autocomplete-item.p-highlight');
            if (selectedListItem) {
              selectedListItem.scrollIntoView({
                block: 'nearest',
                inline: 'center'
              });
            }
          }
        }
      }
    }
    ngOnDestroy() {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
    }
    static ɵfac = function AutoComplete_Factory(t) {
      return new (t || AutoComplete)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AutoComplete,
      selectors: [["p-autoComplete"]],
      contentQueries: function AutoComplete_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function AutoComplete_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerEL = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputEL = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiInputEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiContainerEL = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownButton = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlayViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element", "p-inputwrapper"],
      hostVars: 6,
      hostBindings: function AutoComplete_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused && !ctx.disabled || ctx.autofocus || ctx.overlayVisible)("p-autocomplete-clearable", ctx.showClear && !ctx.disabled);
        }
      },
      inputs: {
        minLength: "minLength",
        delay: "delay",
        style: "style",
        panelStyle: "panelStyle",
        styleClass: "styleClass",
        panelStyleClass: "panelStyleClass",
        inputStyle: "inputStyle",
        inputId: "inputId",
        inputStyleClass: "inputStyleClass",
        placeholder: "placeholder",
        readonly: "readonly",
        disabled: "disabled",
        scrollHeight: "scrollHeight",
        lazy: "lazy",
        virtualScroll: "virtualScroll",
        virtualScrollItemSize: "virtualScrollItemSize",
        virtualScrollOptions: "virtualScrollOptions",
        maxlength: "maxlength",
        name: "name",
        required: "required",
        size: "size",
        appendTo: "appendTo",
        autoHighlight: "autoHighlight",
        forceSelection: "forceSelection",
        type: "type",
        autoZIndex: "autoZIndex",
        baseZIndex: "baseZIndex",
        ariaLabel: "ariaLabel",
        dropdownAriaLabel: "dropdownAriaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        dropdownIcon: "dropdownIcon",
        unique: "unique",
        group: "group",
        completeOnFocus: "completeOnFocus",
        showClear: "showClear",
        field: "field",
        dropdown: "dropdown",
        showEmptyMessage: "showEmptyMessage",
        dropdownMode: "dropdownMode",
        multiple: "multiple",
        tabindex: "tabindex",
        dataKey: "dataKey",
        emptyMessage: "emptyMessage",
        showTransitionOptions: "showTransitionOptions",
        hideTransitionOptions: "hideTransitionOptions",
        autofocus: "autofocus",
        autocomplete: "autocomplete",
        optionGroupChildren: "optionGroupChildren",
        optionGroupLabel: "optionGroupLabel",
        overlayOptions: "overlayOptions",
        suggestions: "suggestions",
        itemSize: "itemSize",
        optionLabel: "optionLabel",
        id: "id",
        searchMessage: "searchMessage",
        emptySelectionMessage: "emptySelectionMessage",
        selectionMessage: "selectionMessage",
        autoOptionFocus: "autoOptionFocus",
        selectOnFocus: "selectOnFocus",
        searchLocale: "searchLocale",
        optionDisabled: "optionDisabled",
        focusOnHover: "focusOnHover"
      },
      outputs: {
        completeMethod: "completeMethod",
        onSelect: "onSelect",
        onUnselect: "onUnselect",
        onFocus: "onFocus",
        onBlur: "onBlur",
        onDropdownClick: "onDropdownClick",
        onClear: "onClear",
        onKeyUp: "onKeyUp",
        onShow: "onShow",
        onHide: "onHide",
        onLazyLoad: "onLazyLoad"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([AUTOCOMPLETE_VALUE_ACCESSOR])],
      decls: 18,
      vars: 26,
      consts: [["container", ""], ["overlay", ""], ["buildInItems", ""], ["focusInput", ""], ["multiContainer", ""], ["token", ""], ["ddBtn", ""], ["scroller", ""], ["items", ""], ["empty", ""], [3, "click", "ngClass", "ngStyle"], ["pAutoFocus", "", "aria-autocomplete", "list", "role", "combobox", 3, "autofocus", "ngClass", "ngStyle", "class", "type", "autocomplete", "required", "name", "maxlength", "tabindex", "readonly", "disabled", "input", "keydown", "change", "focus", "blur", "paste", "keyup", 4, "ngIf"], [4, "ngIf"], ["role", "listbox", 3, "class", "tabindex", "focus", "blur", "keydown", 4, "ngIf"], ["type", "button", "pButton", "", "class", "p-autocomplete-dropdown p-button-icon-only", "pRipple", "", 3, "disabled", "click", 4, "ngIf"], [3, "visibleChange", "onAnimationStart", "onHide", "visible", "options", "target", "appendTo", "showTransitionOptions", "hideTransitionOptions"], [3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet"], [3, "items", "style", "itemSize", "autoSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "p-hidden-accessible"], ["pAutoFocus", "", "aria-autocomplete", "list", "role", "combobox", 3, "input", "keydown", "change", "focus", "blur", "paste", "keyup", "autofocus", "ngClass", "ngStyle", "type", "autocomplete", "required", "name", "maxlength", "tabindex", "readonly", "disabled"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-autocomplete-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "styleClass"], [1, "p-autocomplete-clear-icon", 3, "click"], ["role", "listbox", 3, "focus", "blur", "keydown", "tabindex"], ["role", "option", 3, "ngClass", 4, "ngFor", "ngForOf"], ["role", "option", 1, "p-autocomplete-input-token"], ["pAutoFocus", "", "role", "combobox", "aria-autocomplete", "list", 3, "input", "keydown", "change", "focus", "blur", "paste", "keyup", "autofocus", "ngClass", "ngStyle", "autocomplete", "required", "maxlength", "tabindex", "readonly", "disabled"], ["role", "option", 3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-autocomplete-token-label", 4, "ngIf"], [1, "p-autocomplete-token-icon", 3, "click"], [3, "styleClass", 4, "ngIf"], ["class", "p-autocomplete-token-icon", 4, "ngIf"], [1, "p-autocomplete-token-label"], [3, "styleClass"], [1, "p-autocomplete-token-icon"], [3, "styleClass", "spin", 4, "ngIf"], ["class", "p-autocomplete-loader pi-spin ", 4, "ngIf"], [3, "styleClass", "spin"], [1, "p-autocomplete-loader", "pi-spin"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-autocomplete-dropdown", "p-button-icon-only", 3, "click", "disabled"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "onLazyLoad", "items", "itemSize", "autoSize", "lazy", "options"], ["pTemplate", "content"], ["pTemplate", "loader"], ["role", "listbox", 1, "p-autocomplete-items", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-autocomplete-empty-message", "role", "option", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-autocomplete-item-group", 3, "ngStyle"], ["pRipple", "", "role", "option", 1, "p-autocomplete-item", 3, "click", "mouseenter", "ngStyle", "ngClass"], ["role", "option", 1, "p-autocomplete-empty-message", 3, "ngStyle"], [4, "ngIf", "ngIfElse"]],
      template: function AutoComplete_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onContainerClick($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_input_2_Template, 2, 23, "input", 11)(3, AutoComplete_ng_container_3_Template, 3, 2, "ng-container", 12)(4, AutoComplete_ul_4_Template, 6, 28, "ul", 13)(5, AutoComplete_ng_container_5_Template, 3, 2, "ng-container", 12)(6, AutoComplete_button_6_Template, 4, 5, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-overlay", 15, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("visibleChange", function AutoComplete_Template_p_overlay_visibleChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAnimationStart", function AutoComplete_Template_p_overlay_onAnimationStart_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onOverlayAnimationStart($event));
          })("onHide", function AutoComplete_Template_p_overlay_onHide_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.hide());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AutoComplete_ng_container_10_Template, 1, 0, "ng-container", 17)(11, AutoComplete_p_scroller_11_Template, 4, 10, "p-scroller", 18)(12, AutoComplete_ng_container_12_Template, 2, 6, "ng-container", 12)(13, AutoComplete_ng_template_13_Template, 4, 7, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(15, AutoComplete_ng_container_15_Template, 1, 0, "ng-container", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass)("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.multiple);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filled && !ctx.disabled && ctx.showClear && !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("visible", ctx.overlayVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.panelStyleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx.virtualScroll ? "auto" : ctx.scrollHeight);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.panelClass)("ngStyle", ctx.panelStyle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.headerTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.virtualScroll);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.virtualScroll);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.footerTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedMessageText, " ");
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, primeng_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.Ripple, primeng_scroller__WEBPACK_IMPORTED_MODULE_9__.Scroller, primeng_autofocus__WEBPACK_IMPORTED_MODULE_10__.AutoFocus, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_11__.TimesCircleIcon, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_12__.SpinnerIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_13__.TimesIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_14__.ChevronDownIcon],
      styles: ["@layer primeng{.p-autocomplete{display:inline-flex;position:relative}.p-autocomplete-loader{position:absolute;top:50%;margin-top:-.5rem}.p-autocomplete-dd .p-autocomplete-input{flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-top-right-radius:0;border-bottom-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-top-left-radius:0;border-bottom-left-radius:0}.p-autocomplete-panel{overflow:auto}.p-autocomplete-items{margin:0;padding:0;list-style-type:none}.p-autocomplete-item{cursor:pointer;white-space:nowrap;position:relative;overflow:hidden}.p-autocomplete-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-autocomplete-token{width:fit-content;cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-autocomplete-token-icon{display:flex;cursor:pointer}.p-autocomplete-input-token{flex:1 1 auto;display:inline-flex}.p-autocomplete-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-autocomplete{display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}.p-autocomplete-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-autocomplete-clearable{position:relative}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return AutoComplete;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let AutoCompleteModule = /*#__PURE__*/(() => {
  class AutoCompleteModule {
    static ɵfac = function AutoCompleteModule_Factory(t) {
      return new (t || AutoCompleteModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AutoCompleteModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, primeng_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_9__.ScrollerModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_10__.AutoFocusModule, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_11__.TimesCircleIcon, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_12__.SpinnerIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_13__.TimesIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_14__.ChevronDownIcon, primeng_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_9__.ScrollerModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_10__.AutoFocusModule]
    });
  }
  return AutoCompleteModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 64178:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-carousel.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousel: () => (/* binding */ Carousel),
/* harmony export */   CarouselModule: () => (/* binding */ CarouselModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/chevrondown */ 85804);
/* harmony import */ var primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/chevronleft */ 44959);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/chevronright */ 45994);
/* harmony import */ var primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/chevronup */ 37223);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 7251);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 35228);















/**
 * Carousel is a content slider featuring various customization options.
 * @group Components
 */
const _c0 = ["itemsContainer"];
const _c1 = ["indicatorContent"];
const _c2 = [[["p-header"]], [["p-footer"]]];
const _c3 = ["p-header", "p-footer"];
const _c4 = (a0, a1) => ({
  "p-carousel p-component": true,
  "p-carousel-vertical": a0,
  "p-carousel-horizontal": a1
});
const _c5 = a0 => ({
  height: a0
});
const _c6 = a0 => ({
  "p-carousel-prev p-link": true,
  "p-disabled": a0
});
const _c7 = (a0, a1, a2) => ({
  "p-carousel-item p-carousel-item-cloned": true,
  "p-carousel-item-active": a0,
  "p-carousel-item-start": a1,
  "p-carousel-item-end": a2
});
const _c8 = a0 => ({
  $implicit: a0
});
const _c9 = (a0, a1, a2) => ({
  "p-carousel-item": true,
  "p-carousel-item-active": a0,
  "p-carousel-item-start": a1,
  "p-carousel-item-end": a2
});
const _c10 = a0 => ({
  "p-carousel-next p-link": true,
  "p-disabled": a0
});
const _c11 = a0 => ({
  "p-carousel-indicator": true,
  "p-highlight": a0
});
function Carousel_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Carousel_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Carousel_div_1_ng_container_2_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headerTemplate);
  }
}
function Carousel_button_4_ng_container_1_ChevronLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronLeftIcon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "carousel-prev-icon");
  }
}
function Carousel_button_4_ng_container_1_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronUpIcon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "carousel-prev-icon");
  }
}
function Carousel_button_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_button_4_ng_container_1_ChevronLeftIcon_1_Template, 1, 1, "ChevronLeftIcon", 17)(2, Carousel_button_4_ng_container_1_ChevronUpIcon_2_Template, 1, 1, "ChevronUpIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isVertical());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isVertical());
  }
}
function Carousel_button_4_span_2_1_ng_template_0_Template(rf, ctx) {}
function Carousel_button_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Carousel_button_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Carousel_button_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_button_4_span_2_1_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.previousIconTemplate);
  }
}
function Carousel_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Carousel_button_4_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.navBackward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_button_4_ng_container_1_Template, 3, 2, "ng-container", 15)(2, Carousel_button_4_span_2_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c6, ctx_r1.isBackwardNavDisabled()))("disabled", ctx_r1.isBackwardNavDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.ariaPrevButtonLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.previousIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.previousIconTemplate);
  }
}
function Carousel_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Carousel_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_div_8_ng_container_1_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c7, ctx_r1.totalShiftedItems * -1 === ctx_r1.value.length, 0 === index_r5, ctx_r1.clonedItemsForStarting.length - 1 === index_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", !(ctx_r1.totalShiftedItems * -1 === ctx_r1.value.length))("aria-label", ctx_r1.ariaSlideNumber(index_r5))("aria-roledescription", ctx_r1.ariaSlideLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c8, item_r4));
  }
}
function Carousel_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Carousel_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_div_9_ng_container_1_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c9, ctx_r1.firstIndex() <= index_r7 && ctx_r1.lastIndex() >= index_r7, ctx_r1.firstIndex() === index_r7, ctx_r1.lastIndex() === index_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", !(ctx_r1.totalShiftedItems * -1 === ctx_r1.value.length))("aria-label", ctx_r1.ariaSlideNumber(index_r7))("aria-roledescription", ctx_r1.ariaSlideLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c8, item_r6));
  }
}
function Carousel_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Carousel_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_div_10_ng_container_1_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const index_r9 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c7, ctx_r1.totalShiftedItems * -1 === ctx_r1.numVisible, 0 === index_r9, ctx_r1.clonedItemsForFinishing.length - 1 === index_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c8, item_r8));
  }
}
function Carousel_button_11_ng_container_1_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "carousel-prev-icon");
  }
}
function Carousel_button_11_ng_container_1_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "carousel-prev-icon");
  }
}
function Carousel_button_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_button_11_ng_container_1_ChevronRightIcon_1_Template, 1, 1, "ChevronRightIcon", 17)(2, Carousel_button_11_ng_container_1_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isVertical());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isVertical());
  }
}
function Carousel_button_11_span_2_1_ng_template_0_Template(rf, ctx) {}
function Carousel_button_11_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Carousel_button_11_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Carousel_button_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_button_11_span_2_1_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.nextIconTemplate);
  }
}
function Carousel_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Carousel_button_11_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.navForward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_button_11_ng_container_1_Template, 3, 2, "ng-container", 15)(2, Carousel_button_11_span_2_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c10, ctx_r1.isForwardNavDisabled()))("disabled", ctx_r1.isForwardNavDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.ariaNextButtonLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.nextIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nextIconTemplate);
  }
}
function Carousel_ul_12_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4)(1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Carousel_ul_12_li_2_Template_button_click_1_listener($event) {
      const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onDotClick($event, i_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c11, ctx_r1._page === i_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "indicator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.indicatorStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-link")("ngStyle", ctx_r1.indicatorStyle)("tabindex", ctx_r1._page === i_r13 ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.ariaPageLabel(i_r13 + 1))("aria-current", ctx_r1._page === i_r13 ? "page" : undefined);
  }
}
function Carousel_ul_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 21, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Carousel_ul_12_Template_ul_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onIndicatorKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Carousel_ul_12_li_2_Template, 2, 11, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.indicatorsContentClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-carousel-indicators p-reset")("ngStyle", ctx_r1.indicatorsContentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.totalDotsArray());
  }
}
function Carousel_div_13_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Carousel_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Carousel_div_13_ng_container_2_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
let Carousel = /*#__PURE__*/(() => {
  class Carousel {
    el;
    zone;
    cd;
    renderer;
    document;
    platformId;
    config;
    /**
     * Index of the first item.
     * @defaultValue 0
     * @group Props
     */
    get page() {
      return this._page;
    }
    set page(val) {
      if (this.isCreated && val !== this._page) {
        if (this.autoplayInterval) {
          this.stopAutoplay();
        }
        if (val > this._page && val <= this.totalDots() - 1) {
          this.step(-1, val);
        } else if (val < this._page) {
          this.step(1, val);
        }
      }
      this._page = val;
    }
    /**
     * Number of items per page.
     * @defaultValue 1
     * @group Props
     */
    get numVisible() {
      return this._numVisible;
    }
    set numVisible(val) {
      this._numVisible = val;
    }
    /**
     * Number of items to scroll.
     * @defaultValue 1
     * @group Props
     */
    get numScroll() {
      return this._numVisible;
    }
    set numScroll(val) {
      this._numScroll = val;
    }
    /**
     * An array of options for responsive design.
     * @see {CarouselResponsiveOptions}
     * @group Props
     */
    responsiveOptions;
    /**
     * Specifies the layout of the component.
     * @group Props
     */
    orientation = 'horizontal';
    /**
     * Height of the viewport in vertical layout.
     * @group Props
     */
    verticalViewPortHeight = '300px';
    /**
     * Style class of main content.
     * @group Props
     */
    contentClass = '';
    /**
     * Style class of the indicator items.
     * @group Props
     */
    indicatorsContentClass = '';
    /**
     * Inline style of the indicator items.
     * @group Props
     */
    indicatorsContentStyle;
    /**
     * Style class of the indicators.
     * @group Props
     */
    indicatorStyleClass = '';
    /**
     * Style of the indicators.
     * @group Props
     */
    indicatorStyle;
    /**
     * An array of objects to display.
     * @defaultValue null
     * @group Props
     */
    get value() {
      return this._value;
    }
    set value(val) {
      this._value = val;
    }
    /**
     * Defines if scrolling would be infinite.
     * @group Props
     */
    circular = false;
    /**
     * Whether to display indicator container.
     * @group Props
     */
    showIndicators = true;
    /**
     * Whether to display navigation buttons in container.
     * @group Props
     */
    showNavigators = true;
    /**
     * Time in milliseconds to scroll items automatically.
     * @group Props
     */
    autoplayInterval = 0;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the viewport container.
     * @group Props
     */
    styleClass;
    /**
     * Callback to invoke after scroll.
     * @param {CarouselPageEvent} event - Custom page event.
     * @group Emits
     */
    onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    itemsContainer;
    indicatorContent;
    headerFacet;
    footerFacet;
    templates;
    _numVisible = 1;
    _numScroll = 1;
    _oldNumScroll = 0;
    prevState = {
      numScroll: 0,
      numVisible: 0,
      value: []
    };
    defaultNumScroll = 1;
    defaultNumVisible = 1;
    _page = 0;
    _value;
    carouselStyle;
    id;
    totalShiftedItems;
    isRemainingItemsAdded = false;
    animationTimeout;
    translateTimeout;
    remainingItems = 0;
    _items;
    startPos;
    documentResizeListener;
    clonedItemsForStarting;
    clonedItemsForFinishing;
    allowAutoplay;
    interval;
    isCreated;
    swipeThreshold = 20;
    itemTemplate;
    headerTemplate;
    footerTemplate;
    previousIconTemplate;
    nextIconTemplate;
    window;
    constructor(el, zone, cd, renderer, document, platformId, config) {
      this.el = el;
      this.zone = zone;
      this.cd = cd;
      this.renderer = renderer;
      this.document = document;
      this.platformId = platformId;
      this.config = config;
      this.totalShiftedItems = this.page * this.numScroll * -1;
      this.window = this.document.defaultView;
    }
    ngOnChanges(simpleChange) {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        if (simpleChange.value) {
          if (this.circular && this._value) {
            this.setCloneItems();
          }
        }
        if (this.isCreated) {
          if (simpleChange.numVisible) {
            if (this.responsiveOptions) {
              this.defaultNumVisible = this.numVisible;
            }
            if (this.isCircular()) {
              this.setCloneItems();
            }
            this.createStyle();
            this.calculatePosition();
          }
          if (simpleChange.numScroll) {
            if (this.responsiveOptions) {
              this.defaultNumScroll = this.numScroll;
            }
          }
        }
      }
      this.cd.markForCheck();
    }
    ngAfterContentInit() {
      this.id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        this.allowAutoplay = !!this.autoplayInterval;
        if (this.circular) {
          this.setCloneItems();
        }
        if (this.responsiveOptions) {
          this.defaultNumScroll = this._numScroll;
          this.defaultNumVisible = this._numVisible;
        }
        this.createStyle();
        this.calculatePosition();
        if (this.responsiveOptions) {
          this.bindDocumentListeners();
        }
      }
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'item':
            this.itemTemplate = item.template;
            break;
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          case 'previousicon':
            this.previousIconTemplate = item.template;
            break;
          case 'nexticon':
            this.nextIconTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
      this.cd.detectChanges();
    }
    ngAfterContentChecked() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        const isCircular = this.isCircular();
        let totalShiftedItems = this.totalShiftedItems;
        if (this.value && this.itemsContainer && (this.prevState.numScroll !== this._numScroll || this.prevState.numVisible !== this._numVisible || this.prevState.value.length !== this.value.length)) {
          if (this.autoplayInterval) {
            this.stopAutoplay(false);
          }
          this.remainingItems = (this.value.length - this._numVisible) % this._numScroll;
          let page = this._page;
          if (this.totalDots() !== 0 && page >= this.totalDots()) {
            page = this.totalDots() - 1;
            this._page = page;
            this.onPage.emit({
              page: this.page
            });
          }
          totalShiftedItems = page * this._numScroll * -1;
          if (isCircular) {
            totalShiftedItems -= this._numVisible;
          }
          if (page === this.totalDots() - 1 && this.remainingItems > 0) {
            totalShiftedItems += -1 * this.remainingItems + this._numScroll;
            this.isRemainingItemsAdded = true;
          } else {
            this.isRemainingItemsAdded = false;
          }
          if (totalShiftedItems !== this.totalShiftedItems) {
            this.totalShiftedItems = totalShiftedItems;
          }
          this._oldNumScroll = this._numScroll;
          this.prevState.numScroll = this._numScroll;
          this.prevState.numVisible = this._numVisible;
          this.prevState.value = [...this._value];
          if (this.totalDots() > 0 && this.itemsContainer.nativeElement) {
            this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
          }
          this.isCreated = true;
          if (this.autoplayInterval && this.isAutoplay()) {
            this.startAutoplay();
          }
        }
        if (isCircular) {
          if (this.page === 0) {
            totalShiftedItems = -1 * this._numVisible;
          } else if (totalShiftedItems === 0) {
            totalShiftedItems = -1 * this.value.length;
            if (this.remainingItems > 0) {
              this.isRemainingItemsAdded = true;
            }
          }
          if (totalShiftedItems !== this.totalShiftedItems) {
            this.totalShiftedItems = totalShiftedItems;
          }
        }
      }
    }
    createStyle() {
      if (!this.carouselStyle) {
        this.carouselStyle = this.renderer.createElement('style');
        this.carouselStyle.type = 'text/css';
        this.renderer.appendChild(this.document.head, this.carouselStyle);
      }
      let innerHTML = `
            #${this.id} .p-carousel-item {
				flex: 1 0 ${100 / this.numVisible}%
			}
        `;
      if (this.responsiveOptions) {
        this.responsiveOptions.sort((data1, data2) => {
          const value1 = data1.breakpoint;
          const value2 = data2.breakpoint;
          let result = null;
          if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
            numeric: true
          });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
          return -1 * result;
        });
        for (let i = 0; i < this.responsiveOptions.length; i++) {
          let res = this.responsiveOptions[i];
          innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100 / res.numVisible}%
                        }
                    }
                `;
        }
      }
      this.carouselStyle.innerHTML = innerHTML;
    }
    calculatePosition() {
      if (this.responsiveOptions) {
        let matchedResponsiveData = {
          numVisible: this.defaultNumVisible,
          numScroll: this.defaultNumScroll
        };
        if (typeof window !== 'undefined') {
          let windowWidth = window.innerWidth;
          for (let i = 0; i < this.responsiveOptions.length; i++) {
            let res = this.responsiveOptions[i];
            if (parseInt(res.breakpoint, 10) >= windowWidth) {
              matchedResponsiveData = res;
            }
          }
        }
        if (this._numScroll !== matchedResponsiveData.numScroll) {
          let page = this._page;
          page = Math.floor(page * this._numScroll / matchedResponsiveData.numScroll);
          let totalShiftedItems = matchedResponsiveData.numScroll * this.page * -1;
          if (this.isCircular()) {
            totalShiftedItems -= matchedResponsiveData.numVisible;
          }
          this.totalShiftedItems = totalShiftedItems;
          this._numScroll = matchedResponsiveData.numScroll;
          this._page = page;
          this.onPage.emit({
            page: this.page
          });
        }
        if (this._numVisible !== matchedResponsiveData.numVisible) {
          this._numVisible = matchedResponsiveData.numVisible;
          this.setCloneItems();
        }
        this.cd.markForCheck();
      }
    }
    setCloneItems() {
      this.clonedItemsForStarting = [];
      this.clonedItemsForFinishing = [];
      if (this.isCircular()) {
        this.clonedItemsForStarting.push(...this.value.slice(-1 * this._numVisible));
        this.clonedItemsForFinishing.push(...this.value.slice(0, this._numVisible));
      }
    }
    firstIndex() {
      return this.isCircular() ? -1 * (this.totalShiftedItems + this.numVisible) : this.totalShiftedItems * -1;
    }
    lastIndex() {
      return this.firstIndex() + this.numVisible - 1;
    }
    totalDots() {
      return this.value?.length ? Math.ceil((this.value.length - this._numVisible) / this._numScroll) + 1 : 0;
    }
    totalDotsArray() {
      const totalDots = this.totalDots();
      return totalDots <= 0 ? [] : Array(totalDots).fill(0);
    }
    isVertical() {
      return this.orientation === 'vertical';
    }
    isCircular() {
      return this.circular && this.value && this.value.length >= this.numVisible;
    }
    isAutoplay() {
      return this.autoplayInterval && this.allowAutoplay;
    }
    isForwardNavDisabled() {
      return this.isEmpty() || this._page >= this.totalDots() - 1 && !this.isCircular();
    }
    isBackwardNavDisabled() {
      return this.isEmpty() || this._page <= 0 && !this.isCircular();
    }
    isEmpty() {
      return !this.value || this.value.length === 0;
    }
    navForward(e, index) {
      if (this.isCircular() || this._page < this.totalDots() - 1) {
        this.step(-1, index);
      }
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
      if (e && e.cancelable) {
        e.preventDefault();
      }
    }
    navBackward(e, index) {
      if (this.isCircular() || this._page !== 0) {
        this.step(1, index);
      }
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
      if (e && e.cancelable) {
        e.preventDefault();
      }
    }
    onDotClick(e, index) {
      let page = this._page;
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
      if (index > page) {
        this.navForward(e, index);
      } else if (index < page) {
        this.navBackward(e, index);
      }
    }
    onIndicatorKeydown(event) {
      switch (event.code) {
        case 'ArrowRight':
          this.onRightKey();
          break;
        case 'ArrowLeft':
          this.onLeftKey();
          break;
      }
    }
    onRightKey() {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')];
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, activeIndex + 1 === indicators.length ? indicators.length - 1 : activeIndex + 1);
    }
    onLeftKey() {
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, activeIndex - 1 <= 0 ? 0 : activeIndex - 1);
    }
    onHomeKey() {
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, 0);
    }
    onEndKey() {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]r')];
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, indicators.length - 1);
    }
    onTabKey() {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')];
      const highlightedIndex = indicators.findIndex(ind => primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getAttribute(ind, 'data-p-highlight') === true);
      const activeIndicator = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.indicatorContent.nativeElement, '[data-pc-section="indicator"] > button[tabindex="0"]');
      const activeIndex = indicators.findIndex(ind => ind === activeIndicator.parentElement);
      indicators[activeIndex].children[0].tabIndex = '-1';
      indicators[highlightedIndex].children[0].tabIndex = '0';
    }
    findFocusedIndicatorIndex() {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')];
      const activeIndicator = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.indicatorContent.nativeElement, '[data-pc-section="indicator"] > button[tabindex="0"]');
      return indicators.findIndex(ind => ind === activeIndicator.parentElement);
    }
    changedFocusedIndicator(prevInd, nextInd) {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')];
      indicators[prevInd].children[0].tabIndex = '-1';
      indicators[nextInd].children[0].tabIndex = '0';
      indicators[nextInd].children[0].focus();
    }
    step(dir, page) {
      let totalShiftedItems = this.totalShiftedItems;
      const isCircular = this.isCircular();
      if (page != null) {
        totalShiftedItems = this._numScroll * page * -1;
        if (isCircular) {
          totalShiftedItems -= this._numVisible;
        }
        this.isRemainingItemsAdded = false;
      } else {
        totalShiftedItems += this._numScroll * dir;
        if (this.isRemainingItemsAdded) {
          totalShiftedItems += this.remainingItems - this._numScroll * dir;
          this.isRemainingItemsAdded = false;
        }
        let originalShiftedItems = isCircular ? totalShiftedItems + this._numVisible : totalShiftedItems;
        page = Math.abs(Math.floor(originalShiftedItems / this._numScroll));
      }
      if (isCircular && this.page === this.totalDots() - 1 && dir === -1) {
        totalShiftedItems = -1 * (this.value.length + this._numVisible);
        page = 0;
      } else if (isCircular && this.page === 0 && dir === 1) {
        totalShiftedItems = 0;
        page = this.totalDots() - 1;
      } else if (page === this.totalDots() - 1 && this.remainingItems > 0) {
        totalShiftedItems += this.remainingItems * -1 - this._numScroll * dir;
        this.isRemainingItemsAdded = true;
      }
      if (this.itemsContainer) {
        this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
        this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
      }
      this.totalShiftedItems = totalShiftedItems;
      this._page = page;
      this.onPage.emit({
        page: this.page
      });
      this.cd.markForCheck();
    }
    startAutoplay() {
      this.interval = setInterval(() => {
        if (this.totalDots() > 0) {
          if (this.page === this.totalDots() - 1) {
            this.step(-1, 0);
          } else {
            this.step(-1, this.page + 1);
          }
        }
      }, this.autoplayInterval);
      this.allowAutoplay = true;
      this.cd.markForCheck();
    }
    stopAutoplay(changeAllow = true) {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = undefined;
        if (changeAllow) {
          this.allowAutoplay = false;
        }
      }
      this.cd.markForCheck();
    }
    isPlaying() {
      return !!this.interval;
    }
    onTransitionEnd() {
      if (this.itemsContainer) {
        this.itemsContainer.nativeElement.style.transition = '';
        if ((this.page === 0 || this.page === this.totalDots() - 1) && this.isCircular()) {
          this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${this.totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${this.totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
        }
      }
    }
    onTouchStart(e) {
      let touchobj = e.changedTouches[0];
      this.startPos = {
        x: touchobj.pageX,
        y: touchobj.pageY
      };
    }
    onTouchMove(e) {
      if (e.cancelable) {
        e.preventDefault();
      }
    }
    onTouchEnd(e) {
      let touchobj = e.changedTouches[0];
      if (this.isVertical()) {
        this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
      } else {
        this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
      }
    }
    changePageOnTouch(e, diff) {
      if (Math.abs(diff) > this.swipeThreshold) {
        if (diff < 0) {
          this.navForward(e);
        } else {
          this.navBackward(e);
        }
      }
    }
    ariaPrevButtonLabel() {
      return this.config.translation.aria ? this.config.translation.aria.prevPageLabel : undefined;
    }
    ariaSlideLabel() {
      return this.config.translation.aria ? this.config.translation.aria.slide : undefined;
    }
    ariaNextButtonLabel() {
      return this.config.translation.aria ? this.config.translation.aria.nextPageLabel : undefined;
    }
    ariaSlideNumber(value) {
      return this.config.translation.aria ? this.config.translation.aria.slideNumber.replace(/{slideNumber}/g, value) : undefined;
    }
    ariaPageLabel(value) {
      return this.config.translation.aria ? this.config.translation.aria.pageLabel.replace(/{page}/g, value) : undefined;
    }
    bindDocumentListeners() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        if (!this.documentResizeListener) {
          this.documentResizeListener = this.renderer.listen(this.window, 'resize', event => {
            this.calculatePosition();
          });
        }
      }
    }
    unbindDocumentListeners() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        if (this.documentResizeListener) {
          this.documentResizeListener();
          this.documentResizeListener = null;
        }
      }
    }
    ngOnDestroy() {
      if (this.responsiveOptions) {
        this.unbindDocumentListeners();
      }
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
    }
    static ɵfac = function Carousel_Factory(t) {
      return new (t || Carousel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Carousel,
      selectors: [["p-carousel"]],
      contentQueries: function Carousel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.Header, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.Footer, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Carousel_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.indicatorContent = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        page: "page",
        numVisible: "numVisible",
        numScroll: "numScroll",
        responsiveOptions: "responsiveOptions",
        orientation: "orientation",
        verticalViewPortHeight: "verticalViewPortHeight",
        contentClass: "contentClass",
        indicatorsContentClass: "indicatorsContentClass",
        indicatorsContentStyle: "indicatorsContentStyle",
        indicatorStyleClass: "indicatorStyleClass",
        indicatorStyle: "indicatorStyle",
        value: "value",
        circular: "circular",
        showIndicators: "showIndicators",
        showNavigators: "showNavigators",
        autoplayInterval: "autoplayInterval",
        style: "style",
        styleClass: "styleClass"
      },
      outputs: {
        onPage: "onPage"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c3,
      decls: 14,
      vars: 23,
      consts: [["itemsContainer", ""], ["indicatorContent", ""], ["role", "region", 3, "ngClass", "ngStyle"], ["class", "p-carousel-header", 4, "ngIf"], [3, "ngClass"], [1, "p-carousel-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "p-carousel-items-content", 3, "touchend", "touchstart", "touchmove", "ngStyle"], [1, "p-carousel-items-container", 3, "transitionend"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass", "class", "ngStyle", "keydown", 4, "ngIf"], ["class", "p-carousel-footer", 4, "ngIf"], [1, "p-carousel-header"], [4, "ngTemplateOutlet"], ["type", "button", "pRipple", "", 3, "click", "ngClass", "disabled"], [4, "ngIf"], ["class", "p-carousel-prev-icon", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-carousel-prev-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "keydown", "ngClass", "ngStyle"], ["type", "button", 3, "click", "ngClass", "ngStyle", "tabindex"], [1, "p-carousel-footer"]],
      template: function Carousel_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_div_1_Template, 3, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4)(3, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Carousel_button_4_Template, 3, 7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchend", function Carousel_Template_div_touchend_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onTouchEnd($event));
          })("touchstart", function Carousel_Template_div_touchstart_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onTouchStart($event));
          })("touchmove", function Carousel_Template_div_touchmove_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onTouchMove($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function Carousel_Template_div_transitionend_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onTransitionEnd());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Carousel_div_8_Template, 2, 12, "div", 9)(9, Carousel_div_9_Template, 2, 12, "div", 9)(10, Carousel_div_10_Template, 2, 9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Carousel_button_11_Template, 3, 7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Carousel_ul_12_Template, 3, 5, "ul", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Carousel_div_13_Template, 3, 1, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c4, ctx.isVertical(), !ctx.isVertical()))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerFacet || ctx.headerTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.contentClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-carousel-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-live", ctx.allowAutoplay ? "polite" : "off");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavigators);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c5, ctx.isVertical() ? ctx.verticalViewPortHeight : "auto"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clonedItemsForStarting);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clonedItemsForFinishing);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavigators);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIndicators);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerFacet || ctx.footerTemplate);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_7__.ChevronLeftIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon, primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_9__.ChevronUpIcon],
      styles: ["@layer primeng{.p-carousel{display:flex;flex-direction:column}.p-carousel-content{display:flex;flex-direction:column;overflow:auto}.p-carousel-prev,.p-carousel-next{align-self:center;flex-grow:0;flex-shrink:0;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-carousel-container{display:flex;flex-direction:row}.p-carousel-items-content{overflow:hidden;width:100%}.p-carousel-items-container{display:flex;flex-direction:row}.p-carousel-indicators{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap}.p-carousel-indicator>button{display:flex;align-items:center;justify-content:center}.p-carousel-vertical .p-carousel-container{flex-direction:column}.p-carousel-vertical .p-carousel-items-container{flex-direction:column;height:100%}.p-items-hidden .p-carousel-item{visibility:hidden}.p-items-hidden .p-carousel-item.p-carousel-item-active{visibility:visible}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Carousel;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CarouselModule = /*#__PURE__*/(() => {
  class CarouselModule {
    static ɵfac = function CarouselModule_Factory(t) {
      return new (t || CarouselModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CarouselModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_7__.ChevronLeftIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon, primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_9__.ChevronUpIcon, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
  return CarouselModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 83522:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-cascadeselect.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CASCADESELECT_VALUE_ACCESSOR: () => (/* binding */ CASCADESELECT_VALUE_ACCESSOR),
/* harmony export */   CascadeSelect: () => (/* binding */ CascadeSelect),
/* harmony export */   CascadeSelectModule: () => (/* binding */ CascadeSelectModule),
/* harmony export */   CascadeSelectSub: () => (/* binding */ CascadeSelectSub)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */ 35228);
/* harmony import */ var primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/angleright */ 61726);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/chevrondown */ 85804);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/times */ 57727);
/* harmony import */ var primeng_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/overlay */ 33576);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/utils */ 7251);
















const _c0 = a0 => ({
  "p-cascadeselect-panel-root": a0
});
const _c1 = a0 => ({
  $implicit: a0
});
function CascadeSelectSub_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function CascadeSelectSub_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CascadeSelectSub_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedOption_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.optionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, processedOption_r2.option));
  }
}
function CascadeSelectSub_ng_template_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedOption_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getOptionLabelToRender(processedOption_r2));
  }
}
function CascadeSelectSub_ng_template_1_span_5_AngleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleRightIcon");
  }
}
function CascadeSelectSub_ng_template_1_span_5_2_ng_template_0_Template(rf, ctx) {}
function CascadeSelectSub_ng_template_1_span_5_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CascadeSelectSub_ng_template_1_span_5_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function CascadeSelectSub_ng_template_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CascadeSelectSub_ng_template_1_span_5_AngleRightIcon_1_Template, 1, 0, "AngleRightIcon", 11)(2, CascadeSelectSub_ng_template_1_span_5_2_Template, 1, 0, null, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "groupIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.groupIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.groupIconTemplate);
  }
}
function CascadeSelectSub_ng_template_1_p_cascadeSelectSub_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-cascadeSelectSub", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function CascadeSelectSub_ng_template_1_p_cascadeSelectSub_6_Template_p_cascadeSelectSub_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onOptionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedOption_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("role", "group")("selectId", ctx_r2.selectId)("focusedOptionId", ctx_r2.focusedOptionId)("activeOptionPath", ctx_r2.activeOptionPath)("options", ctx_r2.getOptionGroupChildren(processedOption_r2))("optionLabel", ctx_r2.optionLabel)("optionValue", ctx_r2.optionValue)("level", ctx_r2.level + 1)("optionGroupLabel", ctx_r2.optionGroupLabel)("optionGroupChildren", ctx_r2.optionGroupChildren)("dirty", ctx_r2.dirty)("optionTemplate", ctx_r2.optionTemplate);
  }
}
function CascadeSelectSub_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CascadeSelectSub_ng_template_1_Template_div_click_1_listener($event) {
      const processedOption_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onOptionClick($event, processedOption_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CascadeSelectSub_ng_template_1_ng_container_2_Template, 2, 4, "ng-container", 5)(3, CascadeSelectSub_ng_template_1_ng_template_3_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(5, CascadeSelectSub_ng_template_1_span_5_Template, 3, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CascadeSelectSub_ng_template_1_p_cascadeSelectSub_6_Template, 1, 12, "p-cascadeSelectSub", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedOption_r2 = ctx.$implicit;
    const i_r5 = ctx.index;
    const defaultOptionTemplate_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.getItemClass(processedOption_r2))("id", ctx_r2.getOptionId(processedOption_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-level", ctx_r2.level + 1)("aria-setsize", ctx_r2.options.length)("data-pc-section", "item")("aria-label", ctx_r2.getOptionLabelToRender(processedOption_r2))("aria-selected", ctx_r2.isOptionGroup(processedOption_r2) ? undefined : ctx_r2.isOptionSelected(processedOption_r2))("aria-posinset", i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", 0)("data-pc-section", "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.optionTemplate)("ngIfElse", defaultOptionTemplate_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isOptionGroup(processedOption_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isOptionGroup(processedOption_r2) && ctx_r2.isOptionActive(processedOption_r2));
  }
}
const _c2 = ["focusInput"];
const _c3 = ["container"];
const _c4 = ["panel"];
const _c5 = ["overlay"];
const _c6 = (a0, a1) => ({
  $implicit: a0,
  placeholder: a1
});
function CascadeSelect_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function CascadeSelect_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CascadeSelect_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.valueTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c6, ctx_r1.value, ctx_r1.placeholder));
  }
}
function CascadeSelect_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.label(), " ");
  }
}
function CascadeSelect_ng_container_9_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesIcon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CascadeSelect_ng_container_9_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.clear($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-cascadeselect-clear-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearicon")("aria-hidden", true);
  }
}
function CascadeSelect_ng_container_9_span_2_1_ng_template_0_Template(rf, ctx) {}
function CascadeSelect_ng_container_9_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CascadeSelect_ng_container_9_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function CascadeSelect_ng_container_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CascadeSelect_ng_container_9_span_2_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.clear($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CascadeSelect_ng_container_9_span_2_1_Template, 1, 0, null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearicon")("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.clearIconTemplate);
  }
}
function CascadeSelect_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CascadeSelect_ng_container_9_TimesIcon_1_Template, 1, 3, "TimesIcon", 18)(2, CascadeSelect_ng_container_9_span_2_Template, 2, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.clearIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.clearIconTemplate);
  }
}
function CascadeSelect_ChevronDownIcon_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 23);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-cascadeselect-trigger-icon");
  }
}
function CascadeSelect_span_12_1_ng_template_0_Template(rf, ctx) {}
function CascadeSelect_span_12_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CascadeSelect_span_12_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function CascadeSelect_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CascadeSelect_span_12_1_Template, 1, 0, null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.triggerIconTemplate);
  }
}
function CascadeSelect_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25, 4)(2, "div", 26)(3, "p-cascadeSelectSub", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function CascadeSelect_ng_template_17_Template_p_cascadeSelectSub_onChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOptionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.panelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.panelStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "wrapper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.processedOptions())("selectId", ctx_r1.id)("focusedOptionId", ctx_r1.focused ? ctx_r1.focusedOptionId : undefined)("activeOptionPath", ctx_r1.activeOptionPath())("optionLabel", ctx_r1.optionLabel)("optionValue", ctx_r1.optionValue)("level", 0)("optionTemplate", ctx_r1.optionTemplate)("groupIconTemplate", ctx_r1.groupIconTemplate)("optionGroupLabel", ctx_r1.optionGroupLabel)("optionGroupChildren", ctx_r1.optionGroupChildren)("optionDisabled", ctx_r1.optionDisabled)("optionValue", ctx_r1.optionValue)("optionLabel", ctx_r1.optionLabel)("root", true)("dirty", ctx_r1.dirty)("role", "tree");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedMessageText, " ");
  }
}
const CASCADESELECT_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CascadeSelect),
  multi: true
};
let CascadeSelectSub = /*#__PURE__*/(() => {
  class CascadeSelectSub {
    el;
    config;
    role;
    selectId;
    activeOptionPath;
    optionDisabled;
    focusedOptionId;
    options;
    optionGroupChildren;
    optionTemplate;
    groupIconTemplate;
    level = 0;
    optionLabel;
    optionValue;
    optionGroupLabel;
    dirty;
    root;
    onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    get listLabel() {
      return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_2__.TranslationKeys.ARIA)['listLabel'];
    }
    constructor(el, config) {
      this.el = el;
      this.config = config;
    }
    ngOnInit() {
      if (!this.root) {
        this.position();
      }
    }
    onOptionClick(event, option) {
      this.onChange.emit({
        originalEvent: event,
        value: option,
        isFocus: true
      });
    }
    onOptionChange(event) {
      this.onChange.emit(event);
    }
    getOptionId(processedOption) {
      return `${this.selectId}_${processedOption.key}`;
    }
    getOptionLabel(processedOption) {
      return this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(processedOption.option, this.optionLabel) : processedOption.option;
    }
    getOptionValue(processedOption) {
      return this.optionValue ? primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(processedOption.option, this.optionValue) : processedOption.option;
    }
    getOptionLabelToRender(processedOption) {
      return this.isOptionGroup(processedOption) ? this.getOptionGroupLabel(processedOption) : this.getOptionLabel(processedOption);
    }
    isOptionDisabled(processedOption) {
      return this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(processedOption.option, this.optionDisabled) : false;
    }
    getOptionGroupLabel(processedOption) {
      return this.optionGroupLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(processedOption.option, this.optionGroupLabel) : null;
    }
    getOptionGroupChildren(processedOption) {
      return processedOption.children;
    }
    isOptionGroup(processedOption) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(processedOption.children);
    }
    isOptionSelected(processedOption) {
      return !this.isOptionGroup(processedOption) && this.isOptionActive(processedOption);
    }
    isOptionActive(processedOption) {
      return this.activeOptionPath.some(path => path.key === processedOption.key);
    }
    isOptionFocused(processedOption) {
      return this.focusedOptionId === this.getOptionId(processedOption);
    }
    getItemClass(option) {
      return {
        'p-cascadeselect-item': true,
        'p-cascadeselect-item-group': this.isOptionGroup(option),
        'p-cascadeselect-item-active p-highlight': this.isOptionActive(option),
        'p-focus': this.isOptionFocused(option),
        'p-disabled': this.isOptionDisabled(option)
      };
    }
    position() {
      const parentItem = this.el.nativeElement.parentElement;
      const containerOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOffset(parentItem);
      const viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getViewport();
      const sublistWidth = this.el.nativeElement.children[0].offsetParent ? this.el.nativeElement.children[0].offsetWidth : primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getHiddenElementOuterWidth(this.el.nativeElement.children[0]);
      const itemOuterWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOuterWidth(parentItem.children[0]);
      if (parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.calculateScrollbarWidth()) {
        this.el.nativeElement.children[0].style.left = '-200%';
      }
    }
    static ɵfac = function CascadeSelectSub_Factory(t) {
      return new (t || CascadeSelectSub)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CascadeSelectSub,
      selectors: [["p-cascadeSelectSub"]],
      inputs: {
        role: "role",
        selectId: "selectId",
        activeOptionPath: "activeOptionPath",
        optionDisabled: "optionDisabled",
        focusedOptionId: "focusedOptionId",
        options: "options",
        optionGroupChildren: "optionGroupChildren",
        optionTemplate: "optionTemplate",
        groupIconTemplate: "groupIconTemplate",
        level: "level",
        optionLabel: "optionLabel",
        optionValue: "optionValue",
        optionGroupLabel: "optionGroupLabel",
        dirty: "dirty",
        root: "root"
      },
      outputs: {
        onChange: "onChange"
      },
      decls: 2,
      vars: 7,
      consts: [["defaultOptionTemplate", ""], ["aria-orientation", "horizontal", 1, "p-cascadeselect-panel", "p-cascadeselect-items", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["role", "treeitem", 3, "ngClass", "id"], ["pRipple", "", 1, "p-cascadeselect-item-content", 3, "click"], [4, "ngIf", "ngIfElse"], ["class", "p-cascadeselect-group-icon", 4, "ngIf"], ["class", "p-cascadeselect-sublist", 3, "role", "selectId", "focusedOptionId", "activeOptionPath", "options", "optionLabel", "optionValue", "level", "optionGroupLabel", "optionGroupChildren", "dirty", "optionTemplate", "onChange", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-cascadeselect-item-text"], [1, "p-cascadeselect-group-icon"], [4, "ngIf"], [4, "ngTemplateOutlet"], [1, "p-cascadeselect-sublist", 3, "onChange", "role", "selectId", "focusedOptionId", "activeOptionPath", "options", "optionLabel", "optionValue", "level", "optionGroupLabel", "optionGroupChildren", "dirty", "optionTemplate"]],
      template: function CascadeSelectSub_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CascadeSelectSub_ng_template_1_Template, 7, 14, "ng-template", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.root));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("data-pc-section", ctx.level === 0 ? "list" : "sublist")("aria-label", ctx.listLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_7__.AngleRightIcon, CascadeSelectSub],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return CascadeSelectSub;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * CascadeSelect is a form component to select a value from a nested structure of options.
 * @group Components
 */
let CascadeSelect = /*#__PURE__*/(() => {
  class CascadeSelect {
    el;
    cd;
    config;
    overlayService;
    /**
     * Unique identifier of the component
     * @group Props
     */
    id;
    /**
     * Determines if the option will be selected on focus.
     * @group Props
     */
    selectOnFocus = false;
    /**
     * Text to display when the search is active. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} results are available'
     */
    searchMessage;
    /**
     * Text to display when there is no data. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyMessage;
    /**
     * Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} items selected'
     */
    selectionMessage;
    /**
     * Text to display when filtering does not return any results. Defaults to value from PrimeNG locale configuration.
     * @group Props
     * @defaultValue 'No available options'
     */
    emptySearchMessage;
    /**
     * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue 'No selected item'
     */
    emptySelectionMessage;
    /**
     * Locale to use in searching. The default locale is the host environment's current locale.
     * @group Props
     */
    searchLocale;
    /**
     * Name of the disabled field of an option.
     * @group Props
     */
    optionDisabled;
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
     * @group Props
     */
    autoOptionFocus = true;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * An array of selectitems to display as the available options.
     * @group Props
     */
    options;
    /**
     * Property name or getter function to use as the label of an option.
     * @group Props
     */
    optionLabel;
    /**
     * Property name or getter function to use as the value of an option, defaults to the option itself when not defined.
     * @group Props
     */
    optionValue;
    /**
     * Property name or getter function to use as the label of an option group.
     * @group Props
     */
    optionGroupLabel;
    /**
     * Property name or getter function to retrieve the items of a group.
     * @group Props
     */
    optionGroupChildren;
    /**
     * Default text to display when no option is selected.
     * @group Props
     */
    placeholder;
    /**
     * Selected value of the component.
     * @group Props
     */
    value;
    /**
     * A property to uniquely identify an option.
     * @group Props
     */
    dataKey;
    /**
     * Identifier of the underlying input element.
     * @group Props
     */
    inputId;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex = 0;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Label of the input for accessibility.
     * @group Props
     */
    inputLabel;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel;
    /**
     * Id of the element or "body" for document where the overlay should be appended to.
     * @group Props
     */
    appendTo;
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    disabled;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear = false;
    /**
     * Style class of the overlay panel.
     * @group Props
     */
    panelStyleClass;
    /**
     * Inline style of the overlay panel.
     * @group Props
     */
    panelStyle;
    /**
     * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
     * @group Props
     */
    overlayOptions;
    /**
     * Transition options of the show animation.
     * @group Props
     * @deprecated deprecated since v14.2.0, use overlayOptions property instead.
     */
    get showTransitionOptions() {
      return this._showTransitionOptions;
    }
    set showTransitionOptions(val) {
      this._showTransitionOptions = val;
      console.warn('The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    /**
     * Transition options of the hide animation.
     * @group Props
     * @deprecated deprecated since v14.2.0, use overlayOptions property instead.
     */
    get hideTransitionOptions() {
      return this._hideTransitionOptions;
    }
    set hideTransitionOptions(val) {
      this._hideTransitionOptions = val;
      console.warn('The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    /**
     * Callback to invoke on value change.
     * @param {CascadeSelectChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a group changes.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onGroupChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the overlay is shown.
     * @param {CascadeSelectShowEvent} event - Custom overlay show event.
     * @group Emits
     */
    onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the overlay is hidden.
     * @param {CascadeSelectHideEvent} event - Custom overlay hide event.
     * @group Emits
     */
    onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the clear token is clicked.
     * @group Emits
     */
    onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke before overlay is shown.
     * @param {CascadeSelectBeforeShowEvent} event - Custom overlay show event.
     * @group Emits
     */
    onBeforeShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke before overlay is hidden.
     * @param {CascadeSelectBeforeHideEvent} event - Custom overlay hide event.
     * @group Emits
     */
    onBeforeHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when input receives focus.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when input loses focus.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    focusInputViewChild;
    containerViewChild;
    panelViewChild;
    overlayViewChild;
    templates;
    _showTransitionOptions = '';
    _hideTransitionOptions = '';
    selectionPath = null;
    focused = false;
    overlayVisible = false;
    dirty = true;
    searchValue;
    searchTimeout;
    valueTemplate;
    optionTemplate;
    triggerIconTemplate;
    groupIconTemplate;
    clearIconTemplate;
    onModelChange = () => {};
    onModelTouched = () => {};
    focusedOptionInfo = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
      index: -1,
      level: 0,
      parentKey: ''
    });
    activeOptionPath = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    modelValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    get containerClass() {
      return {
        'p-cascadeselect p-component p-inputwrapper': true,
        'p-disabled': this.disabled,
        'p-focus': this.focused,
        'p-inputwrapper-filled': this.modelValue(),
        'p-inputwrapper-focus': this.focused || this.overlayVisible,
        'p-overlay-open': this.overlayVisible
      };
    }
    get labelClass() {
      return {
        'p-cascadeselect-label': true,
        'p-inputtext': true,
        'p-placeholder': this.label() === this.placeholder,
        'p-cascadeselect-label-empty': !this.value && (this.label() === 'p-emptylabel' || this.label().length === 0)
      };
    }
    get focusedOptionId() {
      return this.focusedOptionInfo().index !== -1 ? `${this.id}${primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(this.focusedOptionInfo().parentKey) ? '_' + this.focusedOptionInfo().parentKey : ''}_${this.focusedOptionInfo().index}` : null;
    }
    get filled() {
      if (typeof this.modelValue() === 'string') return !!this.modelValue();
      return this.modelValue() || this.modelValue() != null || this.modelValue() != undefined;
    }
    get searchResultMessageText() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(this.visibleOptions()) ? this.searchMessageText.replaceAll('{0}', this.visibleOptions().length) : this.emptySearchMessageText;
    }
    get searchMessageText() {
      return this.searchMessage || this.config.translation.searchMessage || '';
    }
    get emptySearchMessageText() {
      return this.emptySearchMessage || this.config.translation.emptySearchMessage || '';
    }
    get emptyMessageText() {
      return this.emptyMessage || this.config.translation.emptyMessage || '';
    }
    get selectionMessageText() {
      return this.selectionMessage || this.config.translation.selectionMessage || '';
    }
    get emptySelectionMessageText() {
      return this.emptySelectionMessage || this.config.translation.emptySelectionMessage || '';
    }
    get selectedMessageText() {
      return this.hasSelectedOption ? this.selectionMessageText.replaceAll('{0}', '1') : this.emptySelectionMessageText;
    }
    visibleOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const processedOption = this.activeOptionPath().find(p => p.key === this.focusedOptionInfo().parentKey);
      return processedOption ? processedOption.children : this.processedOptions();
    });
    processedOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return this.createProcessedOptions(this.options || []);
    });
    label = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const label = this.placeholder || 'p-emptylabel';
      if (this.hasSelectedOption()) {
        const activeOptionPath = this.findOptionPathByValue(this.modelValue(), null);
        const processedOption = primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(activeOptionPath) ? activeOptionPath[activeOptionPath.length - 1] : null;
        return processedOption ? this.getOptionLabel(processedOption.option) : label;
      }
      return label;
    });
    get _label() {
      const label = this.placeholder || 'p-emptylabel';
      if (this.hasSelectedOption()) {
        const activeOptionPath = this.findOptionPathByValue(this.modelValue(), null);
        const processedOption = primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(activeOptionPath) ? activeOptionPath[activeOptionPath.length - 1] : null;
        return processedOption ? this.getOptionLabel(processedOption.option) : label;
      }
      return label;
    }
    hasSelectedOption() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(this.modelValue());
    }
    createProcessedOptions(options, level = 0, parent = {}, parentKey = '') {
      const processedOptions = [];
      options && options.forEach((option, index) => {
        const key = (parentKey !== '' ? parentKey + '_' : '') + index;
        const newOption = {
          option,
          index,
          level,
          key,
          parent,
          parentKey
        };
        newOption['children'] = this.createProcessedOptions(this.getOptionGroupChildren(option, level), level + 1, newOption, key);
        processedOptions.push(newOption);
      });
      return processedOptions;
    }
    onInputFocus(event) {
      if (this.disabled) {
        // For screenreaders
        return;
      }
      this.focused = true;
      this.onFocus.emit(event);
    }
    onInputBlur(event) {
      this.focused = false;
      this.focusedOptionInfo.set({
        indeX: -1,
        level: 0,
        parentKey: ''
      });
      this.searchValue = '';
      this.onModelTouched();
      this.onBlur.emit(event);
    }
    onInputKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      const metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onArrowUpKey(event);
          break;
        case 'ArrowLeft':
          this.onArrowLeftKey(event);
          break;
        case 'ArrowRight':
          this.onArrowRightKey(event);
          break;
        case 'Home':
          this.onHomeKey(event);
          break;
        case 'End':
          this.onEndKey(event);
          break;
        case 'Space':
          this.onSpaceKey(event);
          break;
        case 'Enter':
        case 'NumpadEnter':
          this.onEnterKey(event);
          break;
        case 'Escape':
          this.onEscapeKey(event);
          break;
        case 'Tab':
          this.onTabKey(event);
          break;
        case 'Backspace':
          this.onBackspaceKey(event);
          break;
        case 'PageDown':
        case 'PageUp':
        case 'ShiftLeft':
        case 'ShiftRight':
          //NOOP
          break;
        default:
          if (!metaKey && primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isPrintableCharacter(event.key)) {
            !this.overlayVisible && this.show();
            this.searchOptions(event, event.key);
          }
          break;
      }
    }
    onArrowDownKey(event) {
      const optionIndex = this.focusedOptionInfo().index !== -1 ? this.findNextOptionIndex(this.focusedOptionInfo().index) : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
      event.preventDefault();
    }
    onArrowUpKey(event) {
      if (event.altKey) {
        if (this.focusedOptionInfo().index !== -1) {
          const processedOption = this.visibleOptions[this.focusedOptionInfo().index];
          const grouped = this.isProccessedOptionGroup(processedOption);
          !grouped && this.onOptionChange({
            originalEvent: event,
            value: processedOption
          });
        }
        this.overlayVisible && this.hide();
        event.preventDefault();
      } else {
        const optionIndex = this.focusedOptionInfo().index !== -1 ? this.findPrevOptionIndex(this.focusedOptionInfo().index) : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
        event.preventDefault();
      }
    }
    onArrowLeftKey(event) {
      if (this.overlayVisible) {
        const processedOption = this.visibleOptions()[this.focusedOptionInfo().index];
        const parentOption = this.activeOptionPath().find(p => p.key === processedOption.parentKey);
        const matched = this.focusedOptionInfo().parentKey === '' || parentOption && parentOption.key === this.focusedOptionInfo().parentKey;
        const root = primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isEmpty(processedOption.parent);
        if (matched) {
          const activeOptionPath = this.activeOptionPath().filter(p => p.parentKey !== this.focusedOptionInfo().parentKey);
          this.activeOptionPath.set(activeOptionPath);
        }
        if (!root) {
          this.focusedOptionInfo.set({
            index: -1,
            parentKey: parentOption ? parentOption.parentKey : ''
          });
          this.searchValue = '';
          this.onArrowDownKey(event);
        }
        event.preventDefault();
      }
    }
    onArrowRightKey(event) {
      if (this.overlayVisible) {
        const processedOption = this.visibleOptions()[this.focusedOptionInfo().index];
        const grouped = this.isProccessedOptionGroup(processedOption);
        if (grouped) {
          const matched = this.activeOptionPath().some(p => processedOption.key === p.key);
          if (matched) {
            this.focusedOptionInfo.set({
              index: -1,
              parentKey: processedOption.key
            });
            this.searchValue = '';
            this.onArrowDownKey(event);
          } else {
            this.onOptionChange({
              originalEvent: event,
              value: processedOption
            });
          }
        }
        event.preventDefault();
      }
    }
    onHomeKey(event) {
      this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
      !this.overlayVisible && this.show();
      event.preventDefault();
    }
    onEndKey(event) {
      this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
      !this.overlayVisible && this.show();
      event.preventDefault();
    }
    onEnterKey(event) {
      if (!this.overlayVisible) {
        this.onArrowDownKey(event);
      } else {
        if (this.focusedOptionInfo().index !== -1) {
          const processedOption = this.visibleOptions()[this.focusedOptionInfo().index];
          const grouped = this.isProccessedOptionGroup(processedOption);
          this.onOptionChange({
            originalEvent: event,
            value: processedOption
          });
          !grouped && this.hide();
        }
      }
      event.preventDefault();
    }
    onSpaceKey(event) {
      this.onEnterKey(event);
    }
    onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
    }
    onTabKey(event) {
      if (this.focusedOptionInfo().index !== -1) {
        const processedOption = this.visibleOptions()[this.focusedOptionInfo().index];
        const grouped = this.isProccessedOptionGroup(processedOption);
        !grouped && this.onOptionChange({
          originalEvent: event,
          value: processedOption
        });
      }
      this.overlayVisible && this.hide();
    }
    onBackspaceKey(event) {
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(this.modelValue()) && this.showClear) {
        this.clear();
      }
      event.stopPropagation();
    }
    equalityKey() {
      return this.optionValue ? null : this.dataKey;
    }
    updateModel(value, event) {
      this.value = value;
      this.onModelChange(value);
      this.modelValue.set(value);
      this.onChange.emit({
        originalEvent: event,
        value: value
      });
    }
    autoUpdateModel() {
      if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
        this.focusedOptionInfo().index = this.findFirstFocusedOptionIndex();
        this.onOptionChange({
          originalEvent: null,
          processedOption: this.visibleOptions()[this.focusedOptionInfo().index],
          isHide: false
        });
        !this.overlayVisible && this.focusedOptionInfo.set({
          index: -1,
          level: 0,
          parentKey: ''
        });
      }
    }
    scrollInView(index = -1) {
      const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
      const element = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(this.panelViewChild?.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: 'nearest',
          inline: 'start'
        });
      }
    }
    changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionInfo().index !== index) {
        const focusedOptionInfo = this.focusedOptionInfo();
        this.focusedOptionInfo.set({
          ...focusedOptionInfo,
          index
        });
        this.scrollInView();
      }
      if (this.selectOnFocus) {
        this.onOptionChange({
          originalEvent: event,
          processedOption: this.visibleOptions()[index],
          isHide: false
        });
      }
    }
    onOptionChange(event) {
      const {
        originalEvent,
        value,
        isFocus,
        isHide
      } = event;
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isEmpty(value)) return;
      const {
        index,
        level,
        parentKey,
        children
      } = value;
      const grouped = primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(children);
      const activeOptionPath = this.activeOptionPath().filter(p => p.parentKey !== parentKey);
      activeOptionPath.push(value);
      this.focusedOptionInfo.set({
        index,
        level,
        parentKey
      });
      this.activeOptionPath.set(activeOptionPath);
      grouped ? this.onOptionGroupSelect({
        originalEvent,
        value,
        isFocus: false
      }) : this.onOptionSelect({
        originalEvent,
        value,
        isFocus
      });
      isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(this.focusInputViewChild.nativeElement);
    }
    onOptionSelect(event) {
      const {
        originalEvent,
        value,
        isFocus
      } = event;
      const newValue = this.getOptionValue(value.option);
      const activeOptionPath = this.activeOptionPath();
      activeOptionPath.forEach(p => p.selected = true);
      this.activeOptionPath.set(activeOptionPath);
      this.updateModel(newValue, originalEvent);
      isFocus && this.hide(true);
    }
    onOptionGroupSelect(event) {
      this.dirty = true;
      this.onGroupChange.emit(event);
    }
    onContainerClick(event) {
      if (this.disabled) {
        return;
      }
      if (!this.overlayViewChild?.el?.nativeElement?.contains(event.target)) {
        if (this.overlayVisible) {
          this.hide();
        } else {
          this.show();
        }
        this.focusInputViewChild?.nativeElement.focus();
      }
    }
    isOptionMatched(processedOption) {
      return this.isValidOption(processedOption) && this.getProccessedOptionLabel(processedOption).toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale));
    }
    isOptionDisabled(option) {
      return this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
    }
    isValidOption(processedOption) {
      return !!processedOption && !this.isOptionDisabled(processedOption.option);
    }
    isValidSelectedOption(processedOption) {
      return this.isValidOption(processedOption) && this.isSelected(processedOption);
    }
    isSelected(processedOption) {
      return this.activeOptionPath().some(p => p.key === processedOption.key);
    }
    findOptionPathByValue(value, processedOptions, level = 0) {
      processedOptions = processedOptions || level === 0 && this.processedOptions();
      if (!processedOptions) return null;
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isEmpty(value)) return [];
      for (let i = 0; i < processedOptions.length; i++) {
        const processedOption = processedOptions[i];
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.equals(value, this.getOptionValue(processedOption.option), this.equalityKey())) {
          return [processedOption];
        }
        const matchedOptions = this.findOptionPathByValue(value, processedOption.children, level + 1);
        if (matchedOptions) {
          matchedOptions.unshift(processedOption);
          return matchedOptions;
        }
      }
    }
    findFirstOptionIndex() {
      return this.visibleOptions().findIndex(processedOption => this.isValidOption(processedOption));
    }
    findLastOptionIndex() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.findLastIndex(this.visibleOptions(), processedOption => this.isValidOption(processedOption));
    }
    findNextOptionIndex(index) {
      const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex(processedOption => this.isValidOption(processedOption)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    }
    findPrevOptionIndex(index) {
      const matchedOptionIndex = index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), processedOption => this.isValidOption(processedOption)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    }
    findSelectedOptionIndex() {
      return this.visibleOptions().findIndex(processedOption => this.isValidSelectedOption(processedOption));
    }
    findFirstFocusedOptionIndex() {
      const selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    }
    findLastFocusedOptionIndex() {
      const selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    }
    searchOptions(event, char) {
      this.searchValue = (this.searchValue || '') + char;
      let optionIndex = -1;
      let matched = false;
      const focusedOptionInfo = this.focusedOptionInfo();
      if (focusedOptionInfo.index !== -1) {
        optionIndex = this.visibleOptions().slice(focusedOptionInfo.index).findIndex(processedOption => this.isOptionMatched(processedOption));
        optionIndex = optionIndex === -1 ? this.visibleOptions().slice(0, focusedOptionInfo.index).findIndex(processedOption => this.isOptionMatched(processedOption)) : optionIndex + focusedOptionInfo.index;
      } else {
        optionIndex = this.visibleOptions().findIndex(processedOption => this.isOptionMatched(processedOption));
      }
      if (optionIndex !== -1) {
        matched = true;
      }
      if (optionIndex === -1 && focusedOptionInfo.index === -1) {
        optionIndex = this.findFirstFocusedOptionIndex();
      }
      if (optionIndex !== -1) {
        this.changeFocusedOptionIndex(event, optionIndex);
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(() => {
        this.searchValue = '';
        this.searchTimeout = null;
      }, 500);
      return matched;
    }
    hide(event, isFocus = false) {
      const _hide = () => {
        this.overlayVisible = false;
        this.activeOptionPath.set([]);
        this.focusedOptionInfo.set({
          index: -1,
          level: 0,
          parentKey: ''
        });
        isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(this.focusInputViewChild.nativeElement);
        this.onHide.emit(event);
      };
      setTimeout(() => {
        _hide();
      }, 0); // For ScreenReaders
    }
    show(event, isFocus = false) {
      this.onShow.emit(event);
      this.overlayVisible = true;
      const activeOptionPath = this.hasSelectedOption() ? this.findOptionPathByValue(this.modelValue()) : this.activeOptionPath();
      this.activeOptionPath.set(activeOptionPath);
      let focusedOptionInfo;
      if (this.hasSelectedOption() && primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(this.activeOptionPath())) {
        const processedOption = this.activeOptionPath()[this.activeOptionPath().length - 1];
        focusedOptionInfo = {
          index: this.autoOptionFocus ? processedOption.index : -1,
          level: processedOption.level,
          parentKey: processedOption.parentKey
        };
      } else {
        focusedOptionInfo = {
          index: this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1,
          level: 0,
          parentKey: ''
        };
      }
      this.focusedOptionInfo.set(focusedOptionInfo);
      isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(this.focusInputViewChild.nativeElement);
    }
    clear(event) {
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(this.modelValue()) && this.showClear) {
        this.updateModel(null);
        this.focusedOptionInfo.set({
          index: -1,
          level: 0,
          parentKey: ''
        });
        this.activeOptionPath.set([]);
        this.onClear.emit();
      }
      event && event.stopPropagation();
    }
    getOptionLabel(option) {
      return this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
    }
    getOptionValue(option) {
      return this.optionValue ? primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(option, this.optionValue) : option;
    }
    getOptionGroupLabel(optionGroup) {
      return this.optionGroupLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : null;
    }
    getOptionGroupChildren(optionGroup, level) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[level]);
    }
    isOptionGroup(option, level) {
      return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[level]);
    }
    isProccessedOptionGroup(processedOption) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(processedOption.children);
    }
    getProccessedOptionLabel(processedOption) {
      const grouped = this.isProccessedOptionGroup(processedOption);
      return grouped ? this.getOptionGroupLabel(processedOption.option) : this.getOptionLabel(processedOption.option);
    }
    constructor(el, cd, config, overlayService) {
      this.el = el;
      this.cd = cd;
      this.config = config;
      this.overlayService = overlayService;
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
        const activeOptionPath = this.activeOptionPath();
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isNotEmpty(activeOptionPath)) {
          this.overlayViewChild.alignOverlay();
        }
      });
    }
    ngOnInit() {
      this.id = this.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_3__.UniqueComponentId)();
      this.autoUpdateModel();
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'value':
            this.valueTemplate = item.template;
            break;
          case 'option':
            this.optionTemplate = item.template;
            break;
          case 'triggericon':
            this.triggerIconTemplate = item.template;
            break;
          case 'clearicon':
            this.clearIconTemplate = item.template;
            break;
          case 'optiongroupicon':
            this.groupIconTemplate = item.template;
            break;
        }
      });
    }
    onOverlayAnimationDone(event) {
      switch (event.toState) {
        case 'void':
          this.dirty = false;
          break;
      }
    }
    writeValue(value) {
      this.value = value;
      this.updateModel(value);
      this.cd.markForCheck();
    }
    registerOnChange(fn) {
      this.onModelChange = fn;
    }
    registerOnTouched(fn) {
      this.onModelTouched = fn;
    }
    setDisabledState(val) {
      this.disabled = val;
      this.cd.markForCheck();
    }
    static ɵfac = function CascadeSelect_Factory(t) {
      return new (t || CascadeSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.OverlayService));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CascadeSelect,
      selectors: [["p-cascadeSelect"]],
      contentQueries: function CascadeSelect_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function CascadeSelect_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusInputViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panelViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlayViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element", "p-inputwrapper"],
      hostVars: 6,
      hostBindings: function CascadeSelect_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused || ctx.overlayVisible)("p-cascadeselect-clearable", ctx.showClear && !ctx.disabled);
        }
      },
      inputs: {
        id: "id",
        selectOnFocus: "selectOnFocus",
        searchMessage: "searchMessage",
        emptyMessage: "emptyMessage",
        selectionMessage: "selectionMessage",
        emptySearchMessage: "emptySearchMessage",
        emptySelectionMessage: "emptySelectionMessage",
        searchLocale: "searchLocale",
        optionDisabled: "optionDisabled",
        autoOptionFocus: "autoOptionFocus",
        styleClass: "styleClass",
        style: "style",
        options: "options",
        optionLabel: "optionLabel",
        optionValue: "optionValue",
        optionGroupLabel: "optionGroupLabel",
        optionGroupChildren: "optionGroupChildren",
        placeholder: "placeholder",
        value: "value",
        dataKey: "dataKey",
        inputId: "inputId",
        tabindex: "tabindex",
        ariaLabelledBy: "ariaLabelledBy",
        inputLabel: "inputLabel",
        ariaLabel: "ariaLabel",
        appendTo: "appendTo",
        disabled: "disabled",
        showClear: "showClear",
        panelStyleClass: "panelStyleClass",
        panelStyle: "panelStyle",
        overlayOptions: "overlayOptions",
        showTransitionOptions: "showTransitionOptions",
        hideTransitionOptions: "hideTransitionOptions"
      },
      outputs: {
        onChange: "onChange",
        onGroupChange: "onGroupChange",
        onShow: "onShow",
        onHide: "onHide",
        onClear: "onClear",
        onBeforeShow: "onBeforeShow",
        onBeforeHide: "onBeforeHide",
        onFocus: "onFocus",
        onBlur: "onBlur"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CASCADESELECT_VALUE_ACCESSOR])],
      decls: 18,
      vars: 33,
      consts: [["container", ""], ["focusInput", ""], ["defaultValueTemplate", ""], ["overlay", ""], ["panel", ""], [3, "click", "ngClass", "ngStyle"], [1, "p-hidden-accessible"], ["readonly", "", "type", "text", "role", "combobox", "aria-haspopup", "tree", 3, "focus", "blur", "keydown", "disabled", "placeholder", "tabindex"], [3, "ngClass"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["role", "button", "aria-haspopup", "listbox", 1, "p-cascadeselect-trigger"], [3, "styleClass", 4, "ngIf"], ["class", "p-cascadeselect-trigger-icon", 4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "p-hidden-accessible"], [3, "visibleChange", "onAnimationDone", "onBeforeShow", "onShow", "onBeforeHide", "onHide", "visible", "options", "target", "appendTo", "showTransitionOptions", "hideTransitionOptions"], ["pTemplate", "content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-cascadeselect-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "styleClass"], [1, "p-cascadeselect-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], [3, "styleClass"], [1, "p-cascadeselect-trigger-icon"], [1, "p-cascadeselect-panel", "p-component", 3, "ngStyle"], [1, "p-cascadeselect-items-wrapper"], [1, "p-cascadeselect-items", 3, "onChange", "options", "selectId", "focusedOptionId", "activeOptionPath", "optionLabel", "optionValue", "level", "optionTemplate", "groupIconTemplate", "optionGroupLabel", "optionGroupChildren", "optionDisabled", "root", "dirty", "role"]],
      template: function CascadeSelect_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CascadeSelect_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onContainerClick($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6)(3, "input", 7, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function CascadeSelect_Template_input_focus_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputFocus($event));
          })("blur", function CascadeSelect_Template_input_blur_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputBlur($event));
          })("keydown", function CascadeSelect_Template_input_keydown_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputKeyDown($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CascadeSelect_ng_container_6_Template, 2, 5, "ng-container", 9)(7, CascadeSelect_ng_template_7_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CascadeSelect_ng_container_9_Template, 3, 2, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CascadeSelect_ChevronDownIcon_11_Template, 1, 1, "ChevronDownIcon", 12)(12, CascadeSelect_span_12_Template, 2, 1, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p-overlay", 15, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("visibleChange", function CascadeSelect_Template_p_overlay_visibleChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAnimationDone", function CascadeSelect_Template_p_overlay_onAnimationDone_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onOverlayAnimationDone($event));
          })("onBeforeShow", function CascadeSelect_Template_p_overlay_onBeforeShow_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onBeforeShow.emit($event));
          })("onShow", function CascadeSelect_Template_p_overlay_onShow_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.show($event));
          })("onBeforeHide", function CascadeSelect_Template_p_overlay_onBeforeHide_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onBeforeHide.emit($event));
          })("onHide", function CascadeSelect_Template_p_overlay_onHide_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.hide($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CascadeSelect_ng_template_17_Template, 6, 23, "ng-template", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_16_0;
          let tmp_24_0;
          const defaultValueTemplate_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass)("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "cascadeselect")("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "hiddenInputWrapper");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("placeholder", ctx.placeholder)("tabindex", !ctx.disabled ? ctx.tabindex : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-expanded", (tmp_16_0 = ctx.overlayVisible) !== null && tmp_16_0 !== undefined ? tmp_16_0 : false)("aria-controls", ctx.overlayVisible ? ctx.id + "_tree" : null)("aria-activedescendant", ctx.focused ? ctx.focusedOptionId : undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.labelClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.valueTemplate)("ngIfElse", defaultValueTemplate_r6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filled && !ctx.disabled && ctx.showClear);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", (tmp_24_0 = ctx.overlayVisible) !== null && tmp_24_0 !== undefined ? tmp_24_0 : false)("data-pc-section", "dropdownIcon")("aria-hidden", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.triggerIconTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.triggerIconTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.searchResultMessageText, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("visible", ctx.overlayVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, primeng_overlay__WEBPACK_IMPORTED_MODULE_8__.Overlay, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_9__.ChevronDownIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_10__.TimesIcon, CascadeSelectSub],
      styles: ["@layer primeng{.p-cascadeselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-cascadeselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-cascadeselect-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-cascadeselect-label-empty{overflow:hidden;visibility:hidden}.p-cascadeselect-item{cursor:pointer;font-weight:400;white-space:nowrap}.p-cascadeselect-item-content{display:flex;align-items:center;overflow:hidden;position:relative}.p-cascadeselect-group-icon{margin-left:auto}.p-cascadeselect-items{margin:0;padding:0;list-style-type:none}.p-fluid .p-cascadeselect{display:flex}.p-fluid .p-cascadeselect .p-cascadeselect-label{width:1%}.p-cascadeselect-sublist{position:absolute;min-width:100%;z-index:1;display:none}.p-cascadeselect-item-active{overflow:visible!important}.p-cascadeselect-item-active>.p-cascadeselect-sublist{display:block;left:100%;top:0}.p-cascadeselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-cascadeselect-clearable,.p-overlay-modal .p-cascadeselect-sublist{position:relative}.p-overlay-modal .p-cascadeselect-item-active>.p-cascadeselect-sublist{left:0}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return CascadeSelect;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CascadeSelectModule = /*#__PURE__*/(() => {
  class CascadeSelectModule {
    static ɵfac = function CascadeSelectModule_Factory(t) {
      return new (t || CascadeSelectModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CascadeSelectModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, primeng_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_9__.ChevronDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_7__.AngleRightIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_10__.TimesIcon, primeng_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
  return CascadeSelectModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 71533:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-chips.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHIPS_VALUE_ACCESSOR: () => (/* binding */ CHIPS_VALUE_ACCESSOR),
/* harmony export */   Chips: () => (/* binding */ Chips),
/* harmony export */   ChipsModule: () => (/* binding */ ChipsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/times */ 57727);
/* harmony import */ var primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/timescircle */ 20839);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 7251);










const _c0 = ["inputtext"];
const _c1 = ["container"];
const _c2 = (a0, a1, a2, a3) => ({
  "p-chips p-component p-input-wrapper": true,
  "p-disabled": a0,
  "p-focus": a1,
  "p-inputwrapper-filled": a2,
  "p-inputwrapper-focus": a3
});
const _c3 = () => ({
  "p-inputtext p-chips-multiple-container": true
});
const _c4 = a0 => ({
  "p-chips-clearable": a0
});
const _c5 = a0 => ({
  "p-chips-token": true,
  "p-focus": a0
});
const _c6 = a0 => ({
  $implicit: a0
});
function Chips_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Chips_li_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.field ? ctx_r3.resolveFieldData(item_r3, ctx_r3.field) : item_r3);
  }
}
function Chips_li_3_ng_container_4_TimesCircleIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesCircleIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Chips_li_3_ng_container_4_TimesCircleIcon_1_Template_TimesCircleIcon_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.removeItem($event, i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-chips-token-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "removeTokenIcon")("aria-hidden", true);
  }
}
function Chips_li_3_ng_container_4_span_2_1_ng_template_0_Template(rf, ctx) {}
function Chips_li_3_ng_container_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Chips_li_3_ng_container_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Chips_li_3_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Chips_li_3_ng_container_4_span_2_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.removeItem($event, i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Chips_li_3_ng_container_4_span_2_1_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "removeTokenIcon")("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.removeTokenIconTemplate);
  }
}
function Chips_li_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Chips_li_3_ng_container_4_TimesCircleIcon_1_Template, 1, 3, "TimesCircleIcon", 13)(2, Chips_li_3_ng_container_4_span_2_Template, 2, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.removeTokenIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.removeTokenIconTemplate);
  }
}
function Chips_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Chips_li_3_Template_li_click_0_listener($event) {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onItemClick($event, item_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Chips_li_3_ng_container_2_Template, 1, 0, "ng-container", 10)(3, Chips_li_3_span_3_Template, 2, 2, "span", 11)(4, Chips_li_3_ng_container_4_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c5, ctx_r3.focusedIndex === i_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r3.id + "_chips_item_" + i_r6)("ariaLabel", item_r3)("aria-selected", true)("aria-setsize", ctx_r3.value.length)("aria-posinset", i_r6 + 1)("data-p-focused", ctx_r3.focusedIndex === i_r6)("data-pc-section", "token");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c6, item_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.disabled);
  }
}
function Chips_li_7_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Chips_li_7_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-chips-clear-icon");
  }
}
function Chips_li_7_span_2_1_ng_template_0_Template(rf, ctx) {}
function Chips_li_7_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Chips_li_7_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Chips_li_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Chips_li_7_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Chips_li_7_span_2_1_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.clearIconTemplate);
  }
}
function Chips_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Chips_li_7_TimesIcon_1_Template, 1, 1, "TimesIcon", 13)(2, Chips_li_7_span_2_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.clearIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.clearIconTemplate);
  }
}
const CHIPS_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Chips),
  multi: true
};
/**
 * Chips groups a collection of contents in tabs.
 * @group Components
 */
let Chips = /*#__PURE__*/(() => {
  class Chips {
    document;
    el;
    cd;
    /**
     * Inline style of the element.
     * @group Props
     */
    style;
    /**
     * Style class of the element.
     * @group Props
     */
    styleClass;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled;
    /**
     * Name of the property to display on a chip.
     * @group Props
     */
    field;
    /**
     * Advisory information to display on input.
     * @group Props
     */
    placeholder;
    /**
     * Maximum number of entries allowed.
     * @group Props
     */
    max;
    /**
     * Maximum length of a chip.
     * @group Props
     */
    maxLength;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex;
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId;
    /**
     * Whether to allow duplicate values or not.
     * @group Props
     */
    allowDuplicate = true;
    /**
     * Defines whether duplication check should be case-sensitive
     * @group Props
     */
    caseSensitiveDuplication = true;
    /**
     * Inline style of the input field.
     * @group Props
     */
    inputStyle;
    /**
     * Style class of the input field.
     * @group Props
     */
    inputStyleClass;
    /**
     * Whether to add an item on tab key press.
     * @group Props
     */
    addOnTab;
    /**
     * Whether to add an item when the input loses focus.
     * @group Props
     */
    addOnBlur;
    /**
     * Separator char to add an item when pressed in addition to the enter key.
     * @group Props
     */
    separator;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear = false;
    /**
     * Callback to invoke on chip add.
     * @param {ChipsAddEvent} event - Custom chip add event.
     * @group Emits
     */
    onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on chip remove.
     * @param {ChipsRemoveEvent} event - Custom chip remove event.
     * @group Emits
     */
    onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on focus of input field.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on blur of input field.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on chip clicked.
     * @param {ChipsClickEvent} event - Custom chip click event.
     * @group Emits
     */
    onChipClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on clear token clicked.
     * @group Emits
     */
    onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    inputViewChild;
    containerViewChild;
    templates;
    itemTemplate;
    removeTokenIconTemplate;
    clearIconTemplate;
    value;
    onModelChange = () => {};
    onModelTouched = () => {};
    valueChanged;
    id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
    focused;
    focusedIndex;
    filled;
    get focusedOptionId() {
      return this.focusedIndex !== null ? `${this.id}_chips_item_${this.focusedIndex}` : null;
    }
    get isMaxedOut() {
      return this.max && this.value && this.max === this.value.length;
    }
    constructor(document, el, cd) {
      this.document = document;
      this.el = el;
      this.cd = cd;
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'item':
            this.itemTemplate = item.template;
            break;
          case 'removetokenicon':
            this.removeTokenIconTemplate = item.template;
            break;
          case 'clearicon':
            this.clearIconTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
      this.updateFilledState();
    }
    onWrapperClick() {
      this.inputViewChild?.nativeElement.focus();
    }
    onContainerFocus() {
      this.focused = true;
    }
    onContainerBlur() {
      this.focusedIndex = -1;
      this.focused = false;
    }
    onContainerKeyDown(event) {
      switch (event.code) {
        case 'ArrowLeft':
          this.onArrowLeftKeyOn();
          break;
        case 'ArrowRight':
          this.onArrowRightKeyOn();
          break;
        case 'Backspace':
          this.onBackspaceKeyOn(event);
          break;
        default:
          break;
      }
    }
    onArrowLeftKeyOn() {
      if (this.inputViewChild.nativeElement.value.length === 0 && this.value && this.value.length > 0) {
        this.focusedIndex = this.focusedIndex === null ? this.value.length - 1 : this.focusedIndex - 1;
        if (this.focusedIndex < 0) this.focusedIndex = 0;
      }
    }
    onArrowRightKeyOn() {
      if (this.inputViewChild.nativeElement.value.length === 0 && this.value && this.value.length > 0) {
        if (this.focusedIndex === this.value.length - 1) {
          this.focusedIndex = null;
          this.inputViewChild?.nativeElement.focus();
        } else {
          this.focusedIndex++;
        }
      }
    }
    onBackspaceKeyOn(event) {
      if (this.focusedIndex !== null) {
        this.removeItem(event, this.focusedIndex);
      }
    }
    onInput() {
      this.updateFilledState();
      this.focusedIndex = null;
    }
    onPaste(event) {
      if (!this.disabled) {
        if (this.separator) {
          const pastedData = (event.clipboardData || this.document.defaultView['clipboardData']).getData('Text');
          pastedData.split(this.separator).forEach(val => {
            this.addItem(event, val, true);
          });
          this.inputViewChild.nativeElement.value = '';
        }
        this.updateFilledState();
      }
    }
    updateFilledState() {
      if (!this.value || this.value.length === 0) {
        this.filled = this.inputViewChild && this.inputViewChild.nativeElement && this.inputViewChild.nativeElement.value != '';
      } else {
        this.filled = true;
      }
    }
    onItemClick(event, item) {
      this.onChipClick.emit({
        originalEvent: event,
        value: item
      });
    }
    writeValue(value) {
      this.value = value;
      this.updateMaxedOut();
      this.updateFilledState();
      this.cd.markForCheck();
    }
    registerOnChange(fn) {
      this.onModelChange = fn;
    }
    registerOnTouched(fn) {
      this.onModelTouched = fn;
    }
    setDisabledState(val) {
      this.disabled = val;
      this.cd.markForCheck();
    }
    resolveFieldData(data, field) {
      if (data && field) {
        if (field.indexOf('.') == -1) {
          return data[field];
        } else {
          let fields = field.split('.');
          let value = data;
          for (var i = 0, len = fields.length; i < len; ++i) {
            value = value[fields[i]];
          }
          return value;
        }
      } else {
        return null;
      }
    }
    onInputFocus(event) {
      this.focused = true;
      this.focusedIndex = null;
      this.onFocus.emit(event);
    }
    onInputBlur(event) {
      this.focused = false;
      this.focusedIndex = null;
      if (this.addOnBlur && this.inputViewChild.nativeElement.value) {
        this.addItem(event, this.inputViewChild.nativeElement.value, false);
      }
      this.onModelTouched();
      this.onBlur.emit(event);
    }
    removeItem(event, index) {
      if (this.disabled) {
        return;
      }
      let removedItem = this.value[index];
      this.value = this.value.filter((val, i) => i != index);
      this.focusedIndex = null;
      this.inputViewChild.nativeElement.focus();
      this.onModelChange(this.value);
      this.onRemove.emit({
        originalEvent: event,
        value: removedItem
      });
      this.updateFilledState();
      this.updateMaxedOut();
    }
    addItem(event, item, preventDefault) {
      this.value = this.value || [];
      if (item && item.trim().length) {
        const newItemIsDuplicate = this.caseSensitiveDuplication ? this.value.includes(item) : this.value.some(val => val.toLowerCase() === item.toLowerCase());
        if ((this.allowDuplicate || !newItemIsDuplicate) && !this.isMaxedOut) {
          this.value = [...this.value, item];
          this.onModelChange(this.value);
          this.onAdd.emit({
            originalEvent: event,
            value: item
          });
        }
      }
      this.updateFilledState();
      this.updateMaxedOut();
      this.inputViewChild.nativeElement.value = '';
      if (preventDefault) {
        event.preventDefault();
      }
    }
    /**
     * Callback to invoke on filter reset.
     * @group Method
     */
    clear() {
      this.value = null;
      this.updateFilledState();
      this.onModelChange(this.value);
      this.updateMaxedOut();
      this.onClear.emit();
    }
    onKeyDown(event) {
      const inputValue = event.target.value;
      switch (event.code) {
        case 'Backspace':
          if (inputValue.length === 0 && this.value && this.value.length > 0) {
            if (this.focusedIndex !== null) {
              this.removeItem(event, this.focusedIndex);
            } else this.removeItem(event, this.value.length - 1);
          }
          break;
        case 'Enter':
        case 'NumpadEnter':
          if (inputValue && inputValue.trim().length && !this.isMaxedOut) {
            this.addItem(event, inputValue, true);
          }
          break;
        case 'Tab':
          if (this.addOnTab && inputValue && inputValue.trim().length && !this.isMaxedOut) {
            this.addItem(event, inputValue, true);
            event.preventDefault();
          }
          break;
        case 'ArrowLeft':
          if (inputValue.length === 0 && this.value && this.value.length > 0) {
            this.containerViewChild?.nativeElement.focus();
          }
          break;
        case 'ArrowRight':
          event.stopPropagation();
          break;
        default:
          if (this.separator) {
            if (this.separator === event.key || event.key.match(this.separator)) {
              this.addItem(event, inputValue, true);
            }
          }
          break;
      }
    }
    updateMaxedOut() {
      if (this.inputViewChild && this.inputViewChild.nativeElement) {
        if (this.isMaxedOut) {
          // Calling `blur` is necessary because firefox does not call `onfocus` events
          // for disabled inputs, unlike chromium browsers.
          this.inputViewChild.nativeElement.blur();
          this.inputViewChild.nativeElement.disabled = true;
        } else {
          if (this.disabled) {
            this.inputViewChild.nativeElement.blur();
          }
          this.inputViewChild.nativeElement.disabled = this.disabled || false;
        }
      }
    }
    static ɵfac = function Chips_Factory(t) {
      return new (t || Chips)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Chips,
      selectors: [["p-chips"]],
      contentQueries: function Chips_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Chips_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element", "p-inputwrapper"],
      hostVars: 6,
      hostBindings: function Chips_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused)("p-chips-clearable", ctx.showClear);
        }
      },
      inputs: {
        style: "style",
        styleClass: "styleClass",
        disabled: "disabled",
        field: "field",
        placeholder: "placeholder",
        max: "max",
        maxLength: "maxLength",
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        tabindex: "tabindex",
        inputId: "inputId",
        allowDuplicate: "allowDuplicate",
        caseSensitiveDuplication: "caseSensitiveDuplication",
        inputStyle: "inputStyle",
        inputStyleClass: "inputStyleClass",
        addOnTab: "addOnTab",
        addOnBlur: "addOnBlur",
        separator: "separator",
        showClear: "showClear"
      },
      outputs: {
        onAdd: "onAdd",
        onRemove: "onRemove",
        onFocus: "onFocus",
        onBlur: "onBlur",
        onChipClick: "onChipClick",
        onClear: "onClear"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHIPS_VALUE_ACCESSOR])],
      decls: 8,
      vars: 32,
      consts: [["container", ""], ["inputtext", ""], ["token", ""], [3, "ngClass", "ngStyle"], ["tabindex", "-1", "role", "listbox", 3, "click", "focus", "blur", "keydown", "ngClass"], ["role", "option", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["role", "option", 1, "p-chips-input-token", 3, "ngClass"], ["type", "text", 3, "keydown", "input", "paste", "focus", "blur", "disabled", "ngStyle"], [4, "ngIf"], ["role", "option", 3, "click", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-chips-token-label", 4, "ngIf"], [1, "p-chips-token-label"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-chips-token-icon", 3, "click", 4, "ngIf"], [3, "click", "styleClass"], [1, "p-chips-token-icon", 3, "click"], [4, "ngTemplateOutlet"], ["class", "p-chips-clear-icon", 3, "click", 4, "ngIf"], [1, "p-chips-clear-icon", 3, "click"]],
      template: function Chips_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "ul", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Chips_Template_ul_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onWrapperClick());
          })("focus", function Chips_Template_ul_focus_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onContainerFocus());
          })("blur", function Chips_Template_ul_blur_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onContainerBlur());
          })("keydown", function Chips_Template_ul_keydown_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onContainerKeyDown($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Chips_li_3_Template, 5, 16, "li", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 6)(5, "input", 7, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Chips_Template_input_keydown_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onKeyDown($event));
          })("input", function Chips_Template_input_input_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInput());
          })("paste", function Chips_Template_input_paste_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onPaste($event));
          })("focus", function Chips_Template_input_focus_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputFocus($event));
          })("blur", function Chips_Template_input_blur_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputBlur($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Chips_li_7_Template, 3, 2, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](24, _c2, ctx.disabled, ctx.focused, ctx.value && ctx.value.length || (ctx.inputViewChild == null ? null : ctx.inputViewChild.nativeElement.value) && (ctx.inputViewChild == null ? null : ctx.inputViewChild.nativeElement.value.length), ctx.focused))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "chips")("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-activedescendant", ctx.focused ? ctx.focusedOptionId : undefined)("aria-orientation", "horizontal")("data-pc-section", "container");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c4, ctx.showClear && !ctx.disabled));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "inputToken");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.inputStyleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled || ctx.isMaxedOut)("ngStyle", ctx.inputStyle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("maxlength", ctx.maxLength)("placeholder", ctx.value && ctx.value.length ? null : ctx.placeholder)("tabindex", ctx.tabindex);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value != null && ctx.filled && !ctx.disabled && ctx.showClear);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_5__.TimesCircleIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_6__.TimesIcon],
      styles: ["@layer primeng{.p-chips{display:inline-flex}.p-chips-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-chips-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto;max-width:100%}.p-chips-token-label{min-width:0%;overflow:auto}.p-chips-token-label::-webkit-scrollbar{display:none}.p-chips-input-token{flex:1 1 auto;display:inline-flex}.p-chips-token-icon{cursor:pointer}.p-chips-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-chips{display:flex}.p-chips-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-chips-clearable .p-inputtext{position:relative}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Chips;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ChipsModule = /*#__PURE__*/(() => {
  class ChipsModule {
    static ɵfac = function ChipsModule_Factory(t) {
      return new (t || ChipsModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChipsModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_5__.TimesCircleIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_6__.TimesIcon, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
  return ChipsModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 78540:
/*!*************************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angledoubleleft.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleDoubleLeftIcon: () => (/* binding */ AngleDoubleLeftIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 19436);



let AngleDoubleLeftIcon = /*#__PURE__*/(() => {
  class AngleDoubleLeftIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵAngleDoubleLeftIcon_BaseFactory;
      return function AngleDoubleLeftIcon_Factory(t) {
        return (ɵAngleDoubleLeftIcon_BaseFactory || (ɵAngleDoubleLeftIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleDoubleLeftIcon)))(t || AngleDoubleLeftIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AngleDoubleLeftIcon,
      selectors: [["AngleDoubleLeftIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z", "fill", "currentColor"]],
      template: function AngleDoubleLeftIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        }
      },
      encapsulation: 2
    });
  }
  return AngleDoubleLeftIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 14607:
/*!**************************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angledoubleright.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleDoubleRightIcon: () => (/* binding */ AngleDoubleRightIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 19436);



let AngleDoubleRightIcon = /*#__PURE__*/(() => {
  class AngleDoubleRightIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵAngleDoubleRightIcon_BaseFactory;
      return function AngleDoubleRightIcon_Factory(t) {
        return (ɵAngleDoubleRightIcon_BaseFactory || (ɵAngleDoubleRightIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleDoubleRightIcon)))(t || AngleDoubleRightIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AngleDoubleRightIcon,
      selectors: [["AngleDoubleRightIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z", "fill", "currentColor"]],
      template: function AngleDoubleRightIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        }
      },
      encapsulation: 2
    });
  }
  return AngleDoubleRightIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 98776:
/*!*******************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angledown.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleDownIcon: () => (/* binding */ AngleDownIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 19436);



let AngleDownIcon = /*#__PURE__*/(() => {
  class AngleDownIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵAngleDownIcon_BaseFactory;
      return function AngleDownIcon_Factory(t) {
        return (ɵAngleDownIcon_BaseFactory || (ɵAngleDownIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleDownIcon)))(t || AngleDownIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AngleDownIcon,
      selectors: [["AngleDownIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z", "fill", "currentColor"]],
      template: function AngleDownIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        }
      },
      encapsulation: 2
    });
  }
  return AngleDownIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 10203:
/*!*******************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angleleft.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleLeftIcon: () => (/* binding */ AngleLeftIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 19436);



let AngleLeftIcon = /*#__PURE__*/(() => {
  class AngleLeftIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵAngleLeftIcon_BaseFactory;
      return function AngleLeftIcon_Factory(t) {
        return (ɵAngleLeftIcon_BaseFactory || (ɵAngleLeftIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleLeftIcon)))(t || AngleLeftIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AngleLeftIcon,
      selectors: [["AngleLeftIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z", "fill", "currentColor"]],
      template: function AngleLeftIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        }
      },
      encapsulation: 2
    });
  }
  return AngleLeftIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 61726:
/*!********************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angleright.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleRightIcon: () => (/* binding */ AngleRightIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 19436);



let AngleRightIcon = /*#__PURE__*/(() => {
  class AngleRightIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵAngleRightIcon_BaseFactory;
      return function AngleRightIcon_Factory(t) {
        return (ɵAngleRightIcon_BaseFactory || (ɵAngleRightIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleRightIcon)))(t || AngleRightIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AngleRightIcon,
      selectors: [["AngleRightIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z", "fill", "currentColor"]],
      template: function AngleRightIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        }
      },
      encapsulation: 2
    });
  }
  return AngleRightIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 31147:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-angleup.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleUpIcon: () => (/* binding */ AngleUpIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 19436);



let AngleUpIcon = /*#__PURE__*/(() => {
  class AngleUpIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵAngleUpIcon_BaseFactory;
      return function AngleUpIcon_Factory(t) {
        return (ɵAngleUpIcon_BaseFactory || (ɵAngleUpIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AngleUpIcon)))(t || AngleUpIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AngleUpIcon,
      selectors: [["AngleUpIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z", "fill", "currentColor"]],
      template: function AngleUpIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        }
      },
      encapsulation: 2
    });
  }
  return AngleUpIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 77965:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-minus.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinusIcon: () => (/* binding */ MinusIcon)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 19436);




let MinusIcon = /*#__PURE__*/(() => {
  class MinusIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMinusIcon_BaseFactory;
      return function MinusIcon_Factory(t) {
        return (ɵMinusIcon_BaseFactory || (ɵMinusIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MinusIcon)))(t || MinusIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MinusIcon,
      selectors: [["MinusIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z", "fill", "currentColor"]],
      template: function MinusIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      encapsulation: 2
    });
  }
  return MinusIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 31717:
/*!************************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-windowmaximize.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WindowMaximizeIcon: () => (/* binding */ WindowMaximizeIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 19436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




let WindowMaximizeIcon = /*#__PURE__*/(() => {
  class WindowMaximizeIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵWindowMaximizeIcon_BaseFactory;
      return function WindowMaximizeIcon_Factory(t) {
        return (ɵWindowMaximizeIcon_BaseFactory || (ɵWindowMaximizeIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](WindowMaximizeIcon)))(t || WindowMaximizeIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: WindowMaximizeIcon,
      selectors: [["WindowMaximizeIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function WindowMaximizeIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
        }
      },
      encapsulation: 2
    });
  }
  return WindowMaximizeIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 69551:
/*!************************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-windowminimize.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WindowMinimizeIcon: () => (/* binding */ WindowMinimizeIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 19436);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);




let WindowMinimizeIcon = /*#__PURE__*/(() => {
  class WindowMinimizeIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵWindowMinimizeIcon_BaseFactory;
      return function WindowMinimizeIcon_Factory(t) {
        return (ɵWindowMinimizeIcon_BaseFactory || (ɵWindowMinimizeIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](WindowMinimizeIcon)))(t || WindowMinimizeIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: WindowMinimizeIcon,
      selectors: [["WindowMinimizeIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function WindowMinimizeIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
        }
      },
      encapsulation: 2
    });
  }
  return WindowMinimizeIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 64661:
/*!**************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-inputgroup.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputGroup: () => (/* binding */ InputGroup),
/* harmony export */   InputGroupModule: () => (/* binding */ InputGroupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 17780);






/**
 * InputGroup displays text, icon, buttons and other content can be grouped next to an input.
 * @group Components
 */
const _c0 = ["*"];
let InputGroup = /*#__PURE__*/(() => {
  class InputGroup {
    /**
     * Inline style of the element.
     * @group Props
     */
    style;
    /**
     * Class of the element.
     * @group Props
     */
    styleClass;
    static ɵfac = function InputGroup_Factory(t) {
      return new (t || InputGroup)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputGroup,
      selectors: [["p-inputGroup"]],
      hostAttrs: [1, "p-element", "p-inputgroup"],
      inputs: {
        style: "style",
        styleClass: "styleClass"
      },
      ngContentSelectors: _c0,
      decls: 2,
      vars: 3,
      consts: [[1, "p-inputgroup", 3, "ngClass", "ngStyle"]],
      template: function InputGroup_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.styleClass)("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "inputgroup");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
      encapsulation: 2
    });
  }
  return InputGroup;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let InputGroupModule = /*#__PURE__*/(() => {
  class InputGroupModule {
    static ɵfac = function InputGroupModule_Factory(t) {
      return new (t || InputGroupModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InputGroupModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
  return InputGroupModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 61759:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-inputnumber.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INPUTNUMBER_VALUE_ACCESSOR: () => (/* binding */ INPUTNUMBER_VALUE_ACCESSOR),
/* harmony export */   InputNumber: () => (/* binding */ InputNumber),
/* harmony export */   InputNumberModule: () => (/* binding */ InputNumberModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ 35228);
/* harmony import */ var primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/angledown */ 98776);
/* harmony import */ var primeng_icons_angleup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/angleup */ 31147);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/times */ 57727);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 48361);














const _c0 = ["input"];
const _c1 = (a0, a1, a2) => ({
  "p-inputnumber p-component": true,
  "p-inputnumber-buttons-stacked": a0,
  "p-inputnumber-buttons-horizontal": a1,
  "p-inputnumber-buttons-vertical": a2
});
const _c2 = () => ({
  "p-inputnumber-button p-inputnumber-button-up": true
});
const _c3 = () => ({
  "p-inputnumber-button p-inputnumber-button-down": true
});
function InputNumber_ng_container_3_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesIcon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputNumber_ng_container_3_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-inputnumber-clear-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearIcon");
  }
}
function InputNumber_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {}
function InputNumber_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputNumber_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputNumber_ng_container_3_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_ng_container_3_span_2_1_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.clearIconTemplate);
  }
}
function InputNumber_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_ng_container_3_TimesIcon_1_Template, 1, 2, "TimesIcon", 6)(2, InputNumber_ng_container_3_span_2_Template, 2, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.clearIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.clearIconTemplate);
  }
}
function InputNumber_span_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.incrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_span_4_ng_container_3_AngleUpIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleUpIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_span_4_ng_container_3_2_ng_template_0_Template(rf, ctx) {}
function InputNumber_span_4_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputNumber_span_4_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_span_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_span_4_ng_container_3_AngleUpIcon_1_Template, 1, 1, "AngleUpIcon", 3)(2, InputNumber_span_4_ng_container_3_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.incrementButtonIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.incrementButtonIconTemplate);
  }
}
function InputNumber_span_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.decrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_span_4_ng_container_6_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_span_4_ng_container_6_2_ng_template_0_Template(rf, ctx) {}
function InputNumber_span_4_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputNumber_span_4_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_span_4_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_span_4_ng_container_6_AngleDownIcon_1_Template, 1, 1, "AngleDownIcon", 3)(2, InputNumber_span_4_ng_container_6_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.decrementButtonIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.decrementButtonIconTemplate);
  }
}
function InputNumber_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function InputNumber_span_4_Template_button_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonMouseDown($event));
    })("mouseup", function InputNumber_span_4_Template_button_mouseup_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonMouseUp());
    })("mouseleave", function InputNumber_span_4_Template_button_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonMouseLeave());
    })("keydown", function InputNumber_span_4_Template_button_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonKeyDown($event));
    })("keyup", function InputNumber_span_4_Template_button_keyup_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonKeyUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputNumber_span_4_span_2_Template, 1, 2, "span", 13)(3, InputNumber_span_4_ng_container_3_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function InputNumber_span_4_Template_button_mousedown_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonMouseDown($event));
    })("mouseup", function InputNumber_span_4_Template_button_mouseup_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonMouseUp());
    })("mouseleave", function InputNumber_span_4_Template_button_mouseleave_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonMouseLeave());
    })("keydown", function InputNumber_span_4_Template_button_keydown_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonKeyDown($event));
    })("keyup", function InputNumber_span_4_Template_button_keyup_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonKeyUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputNumber_span_4_span_5_Template, 1, 2, "span", 13)(6, InputNumber_span_4_ng_container_6_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "buttonGroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.incrementButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2))("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", "incrementbutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.incrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.incrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.decrementButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3))("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", ctx_r2.decrementbutton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.decrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.decrementButtonIcon);
  }
}
function InputNumber_button_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.incrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_button_5_ng_container_2_AngleUpIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleUpIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_button_5_ng_container_2_2_ng_template_0_Template(rf, ctx) {}
function InputNumber_button_5_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputNumber_button_5_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_button_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_button_5_ng_container_2_AngleUpIcon_1_Template, 1, 1, "AngleUpIcon", 3)(2, InputNumber_button_5_ng_container_2_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.incrementButtonIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.incrementButtonIconTemplate);
  }
}
function InputNumber_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function InputNumber_button_5_Template_button_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonMouseDown($event));
    })("mouseup", function InputNumber_button_5_Template_button_mouseup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonMouseUp());
    })("mouseleave", function InputNumber_button_5_Template_button_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonMouseLeave());
    })("keydown", function InputNumber_button_5_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonKeyDown($event));
    })("keyup", function InputNumber_button_5_Template_button_keyup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onUpButtonKeyUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_button_5_span_1_Template, 1, 2, "span", 13)(2, InputNumber_button_5_ng_container_2_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.incrementButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2))("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", "incrementbutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.incrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.incrementButtonIcon);
  }
}
function InputNumber_button_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.decrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_button_6_ng_container_2_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_button_6_ng_container_2_2_ng_template_0_Template(rf, ctx) {}
function InputNumber_button_6_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputNumber_button_6_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_button_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_button_6_ng_container_2_AngleDownIcon_1_Template, 1, 1, "AngleDownIcon", 3)(2, InputNumber_button_6_ng_container_2_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.decrementButtonIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.decrementButtonIconTemplate);
  }
}
function InputNumber_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function InputNumber_button_6_Template_button_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonMouseDown($event));
    })("mouseup", function InputNumber_button_6_Template_button_mouseup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonMouseUp());
    })("mouseleave", function InputNumber_button_6_Template_button_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonMouseLeave());
    })("keydown", function InputNumber_button_6_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonKeyDown($event));
    })("keyup", function InputNumber_button_6_Template_button_keyup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onDownButtonKeyUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumber_button_6_span_1_Template, 1, 2, "span", 13)(2, InputNumber_button_6_ng_container_2_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.decrementButtonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3))("disabled", ctx_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", "decrementbutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.decrementButtonIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.decrementButtonIcon);
  }
}
const INPUTNUMBER_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => InputNumber),
  multi: true
};
/**
 * InputNumber is an input component to provide numerical input.
 * @group Components
 */
let InputNumber = /*#__PURE__*/(() => {
  class InputNumber {
    document;
    el;
    cd;
    injector;
    /**
     * Displays spinner buttons.
     * @group Props
     */
    showButtons = false;
    /**
     * Whether to format the value.
     * @group Props
     */
    format = true;
    /**
     * Layout of the buttons, valid values are "stacked" (default), "horizontal" and "vertical".
     * @group Props
     */
    buttonLayout = 'stacked';
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Advisory information to display on input.
     * @group Props
     */
    placeholder;
    /**
     * Size of the input field.
     * @group Props
     */
    size;
    /**
     * Maximum number of character allows in the input field.
     * @group Props
     */
    maxlength;
    /**
     * Specifies tab order of the element.
     * @group Props
     */
    tabindex;
    /**
     * Title text of the input text.
     * @group Props
     */
    title;
    /**
     * Specifies one or more IDs in the DOM that labels the input field.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Used to define a string that labels the input element.
     * @group Props
     */
    ariaLabel;
    /**
     * Used to indicate that user input is required on an element before a form can be submitted.
     * @group Props
     */
    ariaRequired;
    /**
     * Name of the input field.
     * @group Props
     */
    name;
    /**
     * Indicates that whether the input field is required.
     * @group Props
     */
    required;
    /**
     * Used to define a string that autocomplete attribute the current element.
     * @group Props
     */
    autocomplete;
    /**
     * Mininum boundary value.
     * @group Props
     */
    min;
    /**
     * Maximum boundary value.
     * @group Props
     */
    max;
    /**
     * Style class of the increment button.
     * @group Props
     */
    incrementButtonClass;
    /**
     * Style class of the decrement button.
     * @group Props
     */
    decrementButtonClass;
    /**
     * Style class of the increment button.
     * @group Props
     */
    incrementButtonIcon;
    /**
     * Style class of the decrement button.
     * @group Props
     */
    decrementButtonIcon;
    /**
     * When present, it specifies that an input field is read-only.
     * @group Props
     */
    readonly = false;
    /**
     * Step factor to increment/decrement the value.
     * @group Props
     */
    step = 1;
    /**
     * Determines whether the input field is empty.
     * @group Props
     */
    allowEmpty = true;
    /**
     * Locale to be used in formatting.
     * @group Props
     */
    locale;
    /**
     * The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". See Locale Negotiation for details.
     * @group Props
     */
    localeMatcher;
    /**
     * Defines the behavior of the component, valid values are "decimal" and "currency".
     * @group Props
     */
    mode = 'decimal';
    /**
     * The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB. There is no default value; if the style is "currency", the currency property must be provided.
     * @group Props
     */
    currency;
    /**
     * How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €, ü"code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol".
     * @group Props
     */
    currencyDisplay;
    /**
     * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.
     * @group Props
     */
    useGrouping = true;
    /**
     * The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
     * @group Props
     */
    minFractionDigits;
    /**
     * The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
     * @group Props
     */
    maxFractionDigits;
    /**
     * Text to display before the value.
     * @group Props
     */
    prefix;
    /**
     * Text to display after the value.
     * @group Props
     */
    suffix;
    /**
     * Inline style of the input field.
     * @group Props
     */
    inputStyle;
    /**
     * Style class of the input field.
     * @group Props
     */
    inputStyleClass;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear = false;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    get disabled() {
      return this._disabled;
    }
    set disabled(disabled) {
      if (disabled) this.focused = false;
      this._disabled = disabled;
      if (this.timer) this.clearTimer();
    }
    /**
     * Callback to invoke on input.
     * @param {InputNumberInputEvent} event - Custom input event.
     * @group Emits
     */
    onInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on input key press.
     * @param {KeyboardEvent} event - Keyboard event.
     * @group Emits
     */
    onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when clear token is clicked.
     * @group Emits
     */
    onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    input;
    templates;
    clearIconTemplate;
    incrementButtonIconTemplate;
    decrementButtonIconTemplate;
    value;
    onModelChange = () => {};
    onModelTouched = () => {};
    focused;
    initialized;
    groupChar = '';
    prefixChar = '';
    suffixChar = '';
    isSpecialChar;
    timer;
    lastValue;
    _numeral;
    numberFormat;
    _decimal;
    _decimalChar;
    _group;
    _minusSign;
    _currency;
    _prefix;
    _suffix;
    _index;
    _disabled;
    ngControl = null;
    constructor(document, el, cd, injector) {
      this.document = document;
      this.el = el;
      this.cd = cd;
      this.injector = injector;
    }
    ngOnChanges(simpleChange) {
      const props = ['locale', 'localeMatcher', 'mode', 'currency', 'currencyDisplay', 'useGrouping', 'minFractionDigits', 'maxFractionDigits', 'prefix', 'suffix'];
      if (props.some(p => !!simpleChange[p])) {
        this.updateConstructParser();
      }
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'clearicon':
            this.clearIconTemplate = item.template;
            break;
          case 'incrementbuttonicon':
            this.incrementButtonIconTemplate = item.template;
            break;
          case 'decrementbuttonicon':
            this.decrementButtonIconTemplate = item.template;
            break;
        }
      });
    }
    ngOnInit() {
      this.ngControl = this.injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, null, {
        optional: true
      });
      this.constructParser();
      this.initialized = true;
    }
    getOptions() {
      return {
        localeMatcher: this.localeMatcher,
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        useGrouping: this.useGrouping,
        minimumFractionDigits: this.minFractionDigits,
        maximumFractionDigits: this.maxFractionDigits
      };
    }
    constructParser() {
      this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
      const numerals = [...new Intl.NumberFormat(this.locale, {
        useGrouping: false
      }).format(9876543210)].reverse();
      const index = new Map(numerals.map((d, i) => [d, i]));
      this._numeral = new RegExp(`[${numerals.join('')}]`, 'g');
      this._group = this.getGroupingExpression();
      this._minusSign = this.getMinusSignExpression();
      this._currency = this.getCurrencyExpression();
      this._decimal = this.getDecimalExpression();
      this._decimalChar = this.getDecimalChar();
      this._suffix = this.getSuffixExpression();
      this._prefix = this.getPrefixExpression();
      this._index = d => index.get(d);
    }
    updateConstructParser() {
      if (this.initialized) {
        this.constructParser();
      }
    }
    escapeRegExp(text) {
      return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }
    getDecimalExpression() {
      const decimalChar = this.getDecimalChar();
      return new RegExp(`[${decimalChar}]`, 'g');
    }
    getDecimalChar() {
      const formatter = new Intl.NumberFormat(this.locale, {
        ...this.getOptions(),
        useGrouping: false
      });
      return formatter.format(1.1).replace(this._currency, '').trim().replace(this._numeral, '');
    }
    getGroupingExpression() {
      const formatter = new Intl.NumberFormat(this.locale, {
        useGrouping: true
      });
      this.groupChar = formatter.format(1000000).trim().replace(this._numeral, '').charAt(0);
      return new RegExp(`[${this.groupChar}]`, 'g');
    }
    getMinusSignExpression() {
      const formatter = new Intl.NumberFormat(this.locale, {
        useGrouping: false
      });
      return new RegExp(`[${formatter.format(-1).trim().replace(this._numeral, '')}]`, 'g');
    }
    getCurrencyExpression() {
      if (this.currency) {
        const formatter = new Intl.NumberFormat(this.locale, {
          style: 'currency',
          currency: this.currency,
          currencyDisplay: this.currencyDisplay,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
        return new RegExp(`[${formatter.format(1).replace(/\s/g, '').replace(this._numeral, '').replace(this._group, '')}]`, 'g');
      }
      return new RegExp(`[]`, 'g');
    }
    getPrefixExpression() {
      if (this.prefix) {
        this.prefixChar = this.prefix;
      } else {
        const formatter = new Intl.NumberFormat(this.locale, {
          style: this.mode,
          currency: this.currency,
          currencyDisplay: this.currencyDisplay
        });
        this.prefixChar = formatter.format(1).split('1')[0];
      }
      return new RegExp(`${this.escapeRegExp(this.prefixChar || '')}`, 'g');
    }
    getSuffixExpression() {
      if (this.suffix) {
        this.suffixChar = this.suffix;
      } else {
        const formatter = new Intl.NumberFormat(this.locale, {
          style: this.mode,
          currency: this.currency,
          currencyDisplay: this.currencyDisplay,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
        this.suffixChar = formatter.format(1).split('1')[1];
      }
      return new RegExp(`${this.escapeRegExp(this.suffixChar || '')}`, 'g');
    }
    formatValue(value) {
      if (value != null) {
        if (value === '-') {
          // Minus sign
          return value;
        }
        if (this.format) {
          let formatter = new Intl.NumberFormat(this.locale, this.getOptions());
          let formattedValue = formatter.format(value);
          if (this.prefix) {
            formattedValue = this.prefix + formattedValue;
          }
          if (this.suffix) {
            formattedValue = formattedValue + this.suffix;
          }
          return formattedValue;
        }
        return value.toString();
      }
      return '';
    }
    parseValue(text) {
      let filteredText = text.replace(this._suffix, '').replace(this._prefix, '').trim().replace(/\s/g, '').replace(this._currency, '').replace(this._group, '').replace(this._minusSign, '-').replace(this._decimal, '.').replace(this._numeral, this._index);
      if (filteredText) {
        if (filteredText === '-')
          // Minus sign
          return filteredText;
        let parsedValue = +filteredText;
        return isNaN(parsedValue) ? null : parsedValue;
      }
      return null;
    }
    repeat(event, interval, dir) {
      if (this.readonly) {
        return;
      }
      let i = interval || 500;
      this.clearTimer();
      this.timer = setTimeout(() => {
        this.repeat(event, 40, dir);
      }, i);
      this.spin(event, dir);
    }
    spin(event, dir) {
      let step = this.step * dir;
      let currentValue = this.parseValue(this.input?.nativeElement.value) || 0;
      let newValue = this.validateValue(currentValue + step);
      if (this.maxlength && this.maxlength < this.formatValue(newValue).length) {
        return;
      }
      this.updateInput(newValue, null, 'spin', null);
      this.updateModel(event, newValue);
      this.handleOnInput(event, currentValue, newValue);
    }
    clear() {
      this.value = null;
      this.onModelChange(this.value);
      this.onClear.emit();
    }
    onUpButtonMouseDown(event) {
      if (event.button === 2) {
        this.clearTimer();
        return;
      }
      if (!this.disabled) {
        this.input?.nativeElement.focus();
        this.repeat(event, null, 1);
        event.preventDefault();
      }
    }
    onUpButtonMouseUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    }
    onUpButtonMouseLeave() {
      if (!this.disabled) {
        this.clearTimer();
      }
    }
    onUpButtonKeyDown(event) {
      if (event.keyCode === 32 || event.keyCode === 13) {
        this.repeat(event, null, 1);
      }
    }
    onUpButtonKeyUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    }
    onDownButtonMouseDown(event) {
      if (event.button === 2) {
        this.clearTimer();
        return;
      }
      if (!this.disabled) {
        this.input?.nativeElement.focus();
        this.repeat(event, null, -1);
        event.preventDefault();
      }
    }
    onDownButtonMouseUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    }
    onDownButtonMouseLeave() {
      if (!this.disabled) {
        this.clearTimer();
      }
    }
    onDownButtonKeyUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    }
    onDownButtonKeyDown(event) {
      if (event.keyCode === 32 || event.keyCode === 13) {
        this.repeat(event, null, -1);
      }
    }
    onUserInput(event) {
      if (this.readonly) {
        return;
      }
      if (this.isSpecialChar) {
        event.target.value = this.lastValue;
      }
      this.isSpecialChar = false;
    }
    onInputKeyDown(event) {
      if (this.readonly) {
        return;
      }
      this.lastValue = event.target.value;
      if (event.shiftKey || event.altKey) {
        this.isSpecialChar = true;
        return;
      }
      let selectionStart = event.target.selectionStart;
      let selectionEnd = event.target.selectionEnd;
      let inputValue = event.target.value;
      let newValueStr = null;
      if (event.altKey) {
        event.preventDefault();
      }
      switch (event.code) {
        case 'ArrowUp':
          this.spin(event, 1);
          event.preventDefault();
          break;
        case 'ArrowDown':
          this.spin(event, -1);
          event.preventDefault();
          break;
        case 'ArrowLeft':
          for (let index = selectionStart; index <= inputValue.length; index++) {
            const previousCharIndex = index === 0 ? 0 : index - 1;
            if (this.isNumeralChar(inputValue.charAt(previousCharIndex))) {
              this.input.nativeElement.setSelectionRange(index, index);
              break;
            }
          }
          break;
        case 'ArrowRight':
          for (let index = selectionEnd; index >= 0; index--) {
            if (this.isNumeralChar(inputValue.charAt(index))) {
              this.input.nativeElement.setSelectionRange(index, index);
              break;
            }
          }
          break;
        case 'Tab':
        case 'Enter':
          newValueStr = this.validateValue(this.parseValue(this.input.nativeElement.value));
          this.input.nativeElement.value = this.formatValue(newValueStr);
          this.input.nativeElement.setAttribute('aria-valuenow', newValueStr);
          this.updateModel(event, newValueStr);
          break;
        case 'Backspace':
          {
            event.preventDefault();
            if (selectionStart === selectionEnd) {
              const deleteChar = inputValue.charAt(selectionStart - 1);
              const {
                decimalCharIndex,
                decimalCharIndexWithoutPrefix
              } = this.getDecimalCharIndexes(inputValue);
              if (this.isNumeralChar(deleteChar)) {
                const decimalLength = this.getDecimalLength(inputValue);
                if (this._group.test(deleteChar)) {
                  this._group.lastIndex = 0;
                  newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
                } else if (this._decimal.test(deleteChar)) {
                  this._decimal.lastIndex = 0;
                  if (decimalLength) {
                    this.input?.nativeElement.setSelectionRange(selectionStart - 1, selectionStart - 1);
                  } else {
                    newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                  }
                } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                  const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? '' : '0';
                  newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
                } else if (decimalCharIndexWithoutPrefix === 1) {
                  newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart);
                  newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
                } else {
                  newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                }
              } else if (this.mode === 'currency' && deleteChar.search(this._currency) != -1) {
                newValueStr = inputValue.slice(1);
              }
              this.updateValue(event, newValueStr, null, 'delete-single');
            } else {
              newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
              this.updateValue(event, newValueStr, null, 'delete-range');
            }
            break;
          }
        case 'Delete':
          event.preventDefault();
          if (selectionStart === selectionEnd) {
            const deleteChar = inputValue.charAt(selectionStart);
            const {
              decimalCharIndex,
              decimalCharIndexWithoutPrefix
            } = this.getDecimalCharIndexes(inputValue);
            if (this.isNumeralChar(deleteChar)) {
              const decimalLength = this.getDecimalLength(inputValue);
              if (this._group.test(deleteChar)) {
                this._group.lastIndex = 0;
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
              } else if (this._decimal.test(deleteChar)) {
                this._decimal.lastIndex = 0;
                if (decimalLength) {
                  this.input?.nativeElement.setSelectionRange(selectionStart + 1, selectionStart + 1);
                } else {
                  newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                }
              } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? '' : '0';
                newValueStr = inputValue.slice(0, selectionStart) + insertedText + inputValue.slice(selectionStart + 1);
              } else if (decimalCharIndexWithoutPrefix === 1) {
                newValueStr = inputValue.slice(0, selectionStart) + '0' + inputValue.slice(selectionStart + 1);
                newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
              } else {
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
              }
            }
            this.updateValue(event, newValueStr, null, 'delete-back-single');
          } else {
            newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
            this.updateValue(event, newValueStr, null, 'delete-range');
          }
          break;
        case 'Home':
          if (this.min) {
            this.updateModel(event, this.min);
            event.preventDefault();
          }
          break;
        case 'End':
          if (this.max) {
            this.updateModel(event, this.max);
            event.preventDefault();
          }
          break;
        default:
          break;
      }
      this.onKeyDown.emit(event);
    }
    onInputKeyPress(event) {
      if (this.readonly) {
        return;
      }
      let code = event.which || event.keyCode;
      let char = String.fromCharCode(code);
      let isDecimalSign = this.isDecimalSign(char);
      const isMinusSign = this.isMinusSign(char);
      if (code != 13) {
        event.preventDefault();
      }
      if (!isDecimalSign && event.code === 'NumpadDecimal') {
        isDecimalSign = true;
        char = this._decimalChar;
        code = char.charCodeAt(0);
      }
      const newValue = this.parseValue(this.input.nativeElement.value + char);
      const newValueStr = newValue != null ? newValue.toString() : '';
      if (this.maxlength && newValueStr.length > this.maxlength) {
        return;
      }
      if (48 <= code && code <= 57 || isMinusSign || isDecimalSign) {
        this.insert(event, char, {
          isDecimalSign,
          isMinusSign
        });
      }
    }
    onPaste(event) {
      if (!this.disabled && !this.readonly) {
        event.preventDefault();
        let data = (event.clipboardData || this.document.defaultView['clipboardData']).getData('Text');
        if (data) {
          if (this.maxlength) {
            data = data.toString().substring(0, this.maxlength);
          }
          let filteredData = this.parseValue(data);
          if (filteredData != null) {
            this.insert(event, filteredData.toString());
          }
        }
      }
    }
    allowMinusSign() {
      return this.min == null || this.min < 0;
    }
    isMinusSign(char) {
      if (this._minusSign.test(char) || char === '-') {
        this._minusSign.lastIndex = 0;
        return true;
      }
      return false;
    }
    isDecimalSign(char) {
      if (this._decimal.test(char)) {
        this._decimal.lastIndex = 0;
        return true;
      }
      return false;
    }
    isDecimalMode() {
      return this.mode === 'decimal';
    }
    getDecimalCharIndexes(val) {
      let decimalCharIndex = val.search(this._decimal);
      this._decimal.lastIndex = 0;
      const filteredVal = val.replace(this._prefix, '').trim().replace(/\s/g, '').replace(this._currency, '');
      const decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal);
      this._decimal.lastIndex = 0;
      return {
        decimalCharIndex,
        decimalCharIndexWithoutPrefix
      };
    }
    getCharIndexes(val) {
      const decimalCharIndex = val.search(this._decimal);
      this._decimal.lastIndex = 0;
      const minusCharIndex = val.search(this._minusSign);
      this._minusSign.lastIndex = 0;
      const suffixCharIndex = val.search(this._suffix);
      this._suffix.lastIndex = 0;
      const currencyCharIndex = val.search(this._currency);
      this._currency.lastIndex = 0;
      return {
        decimalCharIndex,
        minusCharIndex,
        suffixCharIndex,
        currencyCharIndex
      };
    }
    insert(event, text, sign = {
      isDecimalSign: false,
      isMinusSign: false
    }) {
      const minusCharIndexOnText = text.search(this._minusSign);
      this._minusSign.lastIndex = 0;
      if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {
        return;
      }
      let selectionStart = this.input?.nativeElement.selectionStart;
      let selectionEnd = this.input?.nativeElement.selectionEnd;
      let inputValue = this.input?.nativeElement.value.trim();
      const {
        decimalCharIndex,
        minusCharIndex,
        suffixCharIndex,
        currencyCharIndex
      } = this.getCharIndexes(inputValue);
      let newValueStr;
      if (sign.isMinusSign) {
        if (selectionStart === 0) {
          newValueStr = inputValue;
          if (minusCharIndex === -1 || selectionEnd !== 0) {
            newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
          }
          this.updateValue(event, newValueStr, text, 'insert');
        }
      } else if (sign.isDecimalSign) {
        if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
          this.updateValue(event, inputValue, text, 'insert');
        } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, text, 'insert');
        } else if (decimalCharIndex === -1 && this.maxFractionDigits) {
          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, text, 'insert');
        }
      } else {
        const maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
        const operation = selectionStart !== selectionEnd ? 'range-insert' : 'insert';
        if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
          if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
            const charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
            newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
            this.updateValue(event, newValueStr, text, operation);
          }
        } else {
          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, text, operation);
        }
      }
    }
    insertText(value, text, start, end) {
      let textSplit = text === '.' ? text : text.split('.');
      if (textSplit.length === 2) {
        const decimalCharIndex = value.slice(start, end).search(this._decimal);
        this._decimal.lastIndex = 0;
        return decimalCharIndex > 0 ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : value || this.formatValue(text);
      } else if (end - start === value.length) {
        return this.formatValue(text);
      } else if (start === 0) {
        return text + value.slice(end);
      } else if (end === value.length) {
        return value.slice(0, start) + text;
      } else {
        return value.slice(0, start) + text + value.slice(end);
      }
    }
    deleteRange(value, start, end) {
      let newValueStr;
      if (end - start === value.length) newValueStr = '';else if (start === 0) newValueStr = value.slice(end);else if (end === value.length) newValueStr = value.slice(0, start);else newValueStr = value.slice(0, start) + value.slice(end);
      return newValueStr;
    }
    initCursor() {
      let selectionStart = this.input?.nativeElement.selectionStart;
      let inputValue = this.input?.nativeElement.value;
      let valueLength = inputValue.length;
      let index = null;
      // remove prefix
      let prefixLength = (this.prefixChar || '').length;
      inputValue = inputValue.replace(this._prefix, '');
      selectionStart = selectionStart - prefixLength;
      let char = inputValue.charAt(selectionStart);
      if (this.isNumeralChar(char)) {
        return selectionStart + prefixLength;
      }
      //left
      let i = selectionStart - 1;
      while (i >= 0) {
        char = inputValue.charAt(i);
        if (this.isNumeralChar(char)) {
          index = i + prefixLength;
          break;
        } else {
          i--;
        }
      }
      if (index !== null) {
        this.input?.nativeElement.setSelectionRange(index + 1, index + 1);
      } else {
        i = selectionStart;
        while (i < valueLength) {
          char = inputValue.charAt(i);
          if (this.isNumeralChar(char)) {
            index = i + prefixLength;
            break;
          } else {
            i++;
          }
        }
        if (index !== null) {
          this.input?.nativeElement.setSelectionRange(index, index);
        }
      }
      return index || 0;
    }
    onInputClick() {
      const currentValue = this.input?.nativeElement.value;
      if (!this.readonly && currentValue !== primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getSelection()) {
        this.initCursor();
      }
    }
    isNumeralChar(char) {
      if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
        this.resetRegex();
        return true;
      }
      return false;
    }
    resetRegex() {
      this._numeral.lastIndex = 0;
      this._decimal.lastIndex = 0;
      this._group.lastIndex = 0;
      this._minusSign.lastIndex = 0;
    }
    updateValue(event, valueStr, insertedValueStr, operation) {
      let currentValue = this.input?.nativeElement.value;
      let newValue = null;
      if (valueStr != null) {
        newValue = this.parseValue(valueStr);
        newValue = !newValue && !this.allowEmpty ? 0 : newValue;
        this.updateInput(newValue, insertedValueStr, operation, valueStr);
        this.handleOnInput(event, currentValue, newValue);
      }
    }
    handleOnInput(event, currentValue, newValue) {
      if (this.isValueChanged(currentValue, newValue)) {
        this.input.nativeElement.value = this.formatValue(newValue);
        this.input?.nativeElement.setAttribute('aria-valuenow', newValue);
        this.updateModel(event, newValue);
        this.onInput.emit({
          originalEvent: event,
          value: newValue,
          formattedValue: currentValue
        });
      }
    }
    isValueChanged(currentValue, newValue) {
      if (newValue === null && currentValue !== null) {
        return true;
      }
      if (newValue != null) {
        let parsedCurrentValue = typeof currentValue === 'string' ? this.parseValue(currentValue) : currentValue;
        return newValue !== parsedCurrentValue;
      }
      return false;
    }
    validateValue(value) {
      if (value === '-' || value == null) {
        return null;
      }
      if (this.min != null && value < this.min) {
        return this.min;
      }
      if (this.max != null && value > this.max) {
        return this.max;
      }
      return value;
    }
    updateInput(value, insertedValueStr, operation, valueStr) {
      insertedValueStr = insertedValueStr || '';
      let inputValue = this.input?.nativeElement.value;
      let newValue = this.formatValue(value);
      let currentLength = inputValue.length;
      if (newValue !== valueStr) {
        newValue = this.concatValues(newValue, valueStr);
      }
      if (currentLength === 0) {
        this.input.nativeElement.value = newValue;
        this.input.nativeElement.setSelectionRange(0, 0);
        const index = this.initCursor();
        const selectionEnd = index + insertedValueStr.length;
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else {
        let selectionStart = this.input.nativeElement.selectionStart;
        let selectionEnd = this.input.nativeElement.selectionEnd;
        if (this.maxlength && newValue.length > this.maxlength) {
          newValue = newValue.slice(0, this.maxlength);
          selectionStart = Math.min(selectionStart, this.maxlength);
          selectionEnd = Math.min(selectionEnd, this.maxlength);
        }
        if (this.maxlength && this.maxlength < newValue.length) {
          return;
        }
        this.input.nativeElement.value = newValue;
        let newLength = newValue.length;
        if (operation === 'range-insert') {
          const startValue = this.parseValue((inputValue || '').slice(0, selectionStart));
          const startValueStr = startValue !== null ? startValue.toString() : '';
          const startExpr = startValueStr.split('').join(`(${this.groupChar})?`);
          const sRegex = new RegExp(startExpr, 'g');
          sRegex.test(newValue);
          const tExpr = insertedValueStr.split('').join(`(${this.groupChar})?`);
          const tRegex = new RegExp(tExpr, 'g');
          tRegex.test(newValue.slice(sRegex.lastIndex));
          selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
          this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
        } else if (newLength === currentLength) {
          if (operation === 'insert' || operation === 'delete-back-single') this.input.nativeElement.setSelectionRange(selectionEnd + 1, selectionEnd + 1);else if (operation === 'delete-single') this.input.nativeElement.setSelectionRange(selectionEnd - 1, selectionEnd - 1);else if (operation === 'delete-range' || operation === 'spin') this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
        } else if (operation === 'delete-back-single') {
          let prevChar = inputValue.charAt(selectionEnd - 1);
          let nextChar = inputValue.charAt(selectionEnd);
          let diff = currentLength - newLength;
          let isGroupChar = this._group.test(nextChar);
          if (isGroupChar && diff === 1) {
            selectionEnd += 1;
          } else if (!isGroupChar && this.isNumeralChar(prevChar)) {
            selectionEnd += -1 * diff + 1;
          }
          this._group.lastIndex = 0;
          this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
        } else if (inputValue === '-' && operation === 'insert') {
          this.input.nativeElement.setSelectionRange(0, 0);
          const index = this.initCursor();
          const selectionEnd = index + insertedValueStr.length + 1;
          this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
        } else {
          selectionEnd = selectionEnd + (newLength - currentLength);
          this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
        }
      }
      this.input.nativeElement.setAttribute('aria-valuenow', value);
    }
    concatValues(val1, val2) {
      if (val1 && val2) {
        let decimalCharIndex = val2.search(this._decimal);
        this._decimal.lastIndex = 0;
        if (this.suffixChar) {
          return decimalCharIndex !== -1 ? val1 : val1.replace(this.suffixChar, '').split(this._decimal)[0] + val2.replace(this.suffixChar, '').slice(decimalCharIndex) + this.suffixChar;
        } else {
          return decimalCharIndex !== -1 ? val1.split(this._decimal)[0] + val2.slice(decimalCharIndex) : val1;
        }
      }
      return val1;
    }
    getDecimalLength(value) {
      if (value) {
        const valueSplit = value.split(this._decimal);
        if (valueSplit.length === 2) {
          return valueSplit[1].replace(this._suffix, '').trim().replace(/\s/g, '').replace(this._currency, '').length;
        }
      }
      return 0;
    }
    onInputFocus(event) {
      this.focused = true;
      this.onFocus.emit(event);
    }
    onInputBlur(event) {
      this.focused = false;
      const newValueNumber = this.validateValue(this.parseValue(this.input.nativeElement.value));
      const newValueString = newValueNumber?.toString();
      this.input.nativeElement.value = this.formatValue(newValueString);
      this.input.nativeElement.setAttribute('aria-valuenow', newValueString);
      this.updateModel(event, newValueNumber);
      this.onBlur.emit(event);
    }
    formattedValue() {
      const val = !this.value && !this.allowEmpty ? 0 : this.value;
      return this.formatValue(val);
    }
    updateModel(event, value) {
      const isBlurUpdateOnMode = this.ngControl?.control?.updateOn === 'blur';
      if (this.value !== value) {
        this.value = value;
        if (!(isBlurUpdateOnMode && this.focused)) {
          this.onModelChange(value);
        }
      } else if (isBlurUpdateOnMode) {
        this.onModelChange(value);
      }
      this.onModelTouched();
    }
    writeValue(value) {
      this.value = value;
      this.cd.markForCheck();
    }
    registerOnChange(fn) {
      this.onModelChange = fn;
    }
    registerOnTouched(fn) {
      this.onModelTouched = fn;
    }
    setDisabledState(val) {
      this.disabled = val;
      this.cd.markForCheck();
    }
    get filled() {
      return this.value != null && this.value.toString().length > 0;
    }
    clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
    static ɵfac = function InputNumber_Factory(t) {
      return new (t || InputNumber)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputNumber,
      selectors: [["p-inputNumber"]],
      contentQueries: function InputNumber_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function InputNumber_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
        }
      },
      hostAttrs: [1, "p-element", "p-inputwrapper"],
      hostVars: 6,
      hostBindings: function InputNumber_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused)("p-inputnumber-clearable", ctx.showClear && ctx.buttonLayout != "vertical");
        }
      },
      inputs: {
        showButtons: "showButtons",
        format: "format",
        buttonLayout: "buttonLayout",
        inputId: "inputId",
        styleClass: "styleClass",
        style: "style",
        placeholder: "placeholder",
        size: "size",
        maxlength: "maxlength",
        tabindex: "tabindex",
        title: "title",
        ariaLabelledBy: "ariaLabelledBy",
        ariaLabel: "ariaLabel",
        ariaRequired: "ariaRequired",
        name: "name",
        required: "required",
        autocomplete: "autocomplete",
        min: "min",
        max: "max",
        incrementButtonClass: "incrementButtonClass",
        decrementButtonClass: "decrementButtonClass",
        incrementButtonIcon: "incrementButtonIcon",
        decrementButtonIcon: "decrementButtonIcon",
        readonly: "readonly",
        step: "step",
        allowEmpty: "allowEmpty",
        locale: "locale",
        localeMatcher: "localeMatcher",
        mode: "mode",
        currency: "currency",
        currencyDisplay: "currencyDisplay",
        useGrouping: "useGrouping",
        minFractionDigits: "minFractionDigits",
        maxFractionDigits: "maxFractionDigits",
        prefix: "prefix",
        suffix: "suffix",
        inputStyle: "inputStyle",
        inputStyleClass: "inputStyleClass",
        showClear: "showClear",
        disabled: "disabled"
      },
      outputs: {
        onInput: "onInput",
        onFocus: "onFocus",
        onBlur: "onBlur",
        onKeyDown: "onKeyDown",
        onClear: "onClear"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([INPUTNUMBER_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 7,
      vars: 39,
      consts: [["input", ""], [3, "ngClass", "ngStyle"], ["pInputText", "", "role", "spinbutton", "inputmode", "decimal", 3, "input", "keydown", "keypress", "paste", "click", "focus", "blur", "ngClass", "ngStyle", "value", "disabled", "readonly"], [4, "ngIf"], ["class", "p-inputnumber-button-group", 4, "ngIf"], ["type", "button", "pButton", "", "class", "p-button-icon-only", "tabindex", "-1", 3, "ngClass", "class", "disabled", "mousedown", "mouseup", "mouseleave", "keydown", "keyup", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], ["class", "p-inputnumber-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "ngClass"], [1, "p-inputnumber-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], [1, "p-inputnumber-button-group"], ["type", "button", "pButton", "", "tabindex", "-1", 1, "p-button-icon-only", 3, "mousedown", "mouseup", "mouseleave", "keydown", "keyup", "ngClass", "disabled"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"]],
      template: function InputNumber_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 1)(1, "input", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputNumber_Template_input_input_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onUserInput($event));
          })("keydown", function InputNumber_Template_input_keydown_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputKeyDown($event));
          })("keypress", function InputNumber_Template_input_keypress_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputKeyPress($event));
          })("paste", function InputNumber_Template_input_paste_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onPaste($event));
          })("click", function InputNumber_Template_input_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputClick());
          })("focus", function InputNumber_Template_input_focus_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputFocus($event));
          })("blur", function InputNumber_Template_input_blur_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputBlur($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InputNumber_ng_container_3_Template, 3, 2, "ng-container", 3)(4, InputNumber_span_4_Template, 7, 19, "span", 4)(5, InputNumber_button_5_Template, 3, 9, "button", 5)(6, InputNumber_button_6_Template, 3, 9, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](35, _c1, ctx.showButtons && ctx.buttonLayout === "stacked", ctx.showButtons && ctx.buttonLayout === "horizontal", ctx.showButtons && ctx.buttonLayout === "vertical"))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "inputnumber")("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.inputStyleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-inputnumber-input")("ngStyle", ctx.inputStyle)("value", ctx.formattedValue())("disabled", ctx.disabled)("readonly", ctx.readonly);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.value)("placeholder", ctx.placeholder)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("title", ctx.title)("size", ctx.size)("name", ctx.name)("autocomplete", ctx.autocomplete)("maxlength", ctx.maxlength)("tabindex", ctx.tabindex)("aria-required", ctx.ariaRequired)("required", ctx.required)("min", ctx.min)("max", ctx.max)("data-pc-section", "input");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttonLayout != "vertical" && ctx.showClear && ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButtons && ctx.buttonLayout === "stacked");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__.TimesIcon, primeng_icons_angleup__WEBPACK_IMPORTED_MODULE_8__.AngleUpIcon, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_9__.AngleDownIcon],
      styles: ["@layer primeng{p-inputnumber,.p-inputnumber{display:inline-flex}.p-inputnumber-button{display:flex;align-items:center;justify-content:center;flex:0 0 auto}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label{display:none}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up{border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-input{border-top-right-radius:0;border-bottom-right-radius:0}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-button-group{display:flex;flex-direction:column}.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button{flex:1 1 auto}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up{order:3;border-top-left-radius:0;border-bottom-left-radius:0}.p-inputnumber-buttons-horizontal .p-inputnumber-input{order:2;border-radius:0}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down{order:1;border-top-right-radius:0;border-bottom-right-radius:0}.p-inputnumber-buttons-vertical{flex-direction:column}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up{order:1;border-bottom-left-radius:0;border-bottom-right-radius:0;width:100%}.p-inputnumber-buttons-vertical .p-inputnumber-input{order:2;border-radius:0;text-align:center}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down{order:3;border-top-left-radius:0;border-top-right-radius:0;width:100%}.p-inputnumber-input{flex:1 1 auto}.p-fluid p-inputnumber,.p-fluid .p-inputnumber{width:100%}.p-fluid .p-inputnumber .p-inputnumber-input{width:1%}.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input{width:100%}.p-inputnumber-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-inputnumber-clearable{position:relative}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return InputNumber;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let InputNumberModule = /*#__PURE__*/(() => {
  class InputNumberModule {
    static ɵfac = function InputNumberModule_Factory(t) {
      return new (t || InputNumberModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InputNumberModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__.TimesIcon, primeng_icons_angleup__WEBPACK_IMPORTED_MODULE_8__.AngleUpIcon, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_9__.AngleDownIcon, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
  return InputNumberModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 43157:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-paginator.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Paginator: () => (/* binding */ Paginator),
/* harmony export */   PaginatorModule: () => (/* binding */ PaginatorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_icons_angledoubleleft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/angledoubleleft */ 78540);
/* harmony import */ var primeng_icons_angledoubleright__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/angledoubleright */ 14607);
/* harmony import */ var primeng_icons_angleleft__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/angleleft */ 10203);
/* harmony import */ var primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/angleright */ 61726);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 30078);



















/**
 * Paginator is a generic component to display content in paged format.
 * @group Components
 */
const _c0 = a0 => ({
  "p-disabled": a0
});
const _c1 = a0 => ({
  $implicit: a0
});
const _c2 = a0 => ({
  "p-highlight": a0
});
function Paginator_div_0_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Paginator_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_div_1_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.templateLeft)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r1.paginatorState));
  }
}
function Paginator_div_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentPageReport);
  }
}
function Paginator_div_0_button_3_AngleDoubleLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDoubleLeftIcon", 19);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_button_3_span_2_1_ng_template_0_Template(rf, ctx) {}
function Paginator_div_0_button_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_button_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_button_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_button_3_span_2_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.firstPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_button_3_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changePageToFirst($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_button_3_AngleDoubleLeftIcon_1_Template, 1, 1, "AngleDoubleLeftIcon", 6)(2, Paginator_div_0_button_3_span_2_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isFirstPage() || ctx_r1.empty())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r1.isFirstPage() || ctx_r1.empty()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getAriaLabel("firstPageLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.firstPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.firstPageLinkIconTemplate);
  }
}
function Paginator_div_0_AngleLeftIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleLeftIcon", 19);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_span_6_1_ng_template_0_Template(rf, ctx) {}
function Paginator_div_0_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_span_6_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.previousPageLinkIconTemplate);
  }
}
function Paginator_div_0_span_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_span_7_button_1_Template_button_click_0_listener($event) {
      const pageLink_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onPageLinkClick($event, pageLink_r5 - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pageLink_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, pageLink_r5 - 1 == ctx_r1.getPage()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getPageAriaLabel(pageLink_r5))("aria-current", pageLink_r5 - 1 == ctx_r1.getPage() ? "page" : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getLocalization(pageLink_r5), " ");
  }
}
function Paginator_div_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_span_7_button_1_Template, 2, 6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.pageLinks);
  }
}
function Paginator_div_0_p_dropdown_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentPageReport);
  }
}
function Paginator_div_0_p_dropdown_8_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Paginator_div_0_p_dropdown_8_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_p_dropdown_8_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_p_dropdown_8_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_p_dropdown_8_2_ng_template_0_Template, 1, 1, "ng-template", 28);
  }
}
function Paginator_div_0_p_dropdown_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dropdown", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function Paginator_div_0_p_dropdown_8_Template_p_dropdown_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onPageDropdownChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_p_dropdown_8_ng_template_1_Template, 1, 1, "ng-template", 26)(2, Paginator_div_0_p_dropdown_8_2_Template, 1, 0, null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.pageItems)("ngModel", ctx_r1.getPage())("disabled", ctx_r1.empty())("appendTo", ctx_r1.dropdownAppendTo)("scrollHeight", ctx_r1.dropdownScrollHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getAriaLabel("jumpToPageDropdownLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_AngleRightIcon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleRightIcon", 19);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_span_11_1_ng_template_0_Template(rf, ctx) {}
function Paginator_div_0_span_11_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_span_11_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_span_11_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.nextPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_12_AngleDoubleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDoubleRightIcon", 19);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-paginator-icon");
  }
}
function Paginator_div_0_button_12_span_2_1_ng_template_0_Template(rf, ctx) {}
function Paginator_div_0_button_12_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_button_12_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_button_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_button_12_span_2_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.lastPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_button_12_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changePageToLast($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_button_12_AngleDoubleRightIcon_1_Template, 1, 1, "AngleDoubleRightIcon", 6)(2, Paginator_div_0_button_12_span_2_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isLastPage() || ctx_r1.empty())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r1.isLastPage() || ctx_r1.empty()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getAriaLabel("lastPageLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.lastPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lastPageLinkIconTemplate);
  }
}
function Paginator_div_0_p_inputNumber_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-inputNumber", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Paginator_div_0_p_inputNumber_13_Template_p_inputNumber_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changePage($event - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.currentPage())("disabled", ctx_r1.empty());
  }
}
function Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 16);
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.dropdownItemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r10));
  }
}
function Paginator_div_0_p_dropdown_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_p_dropdown_14_ng_container_1_ng_template_1_Template, 1, 4, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function Paginator_div_0_p_dropdown_14_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Paginator_div_0_p_dropdown_14_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_p_dropdown_14_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_p_dropdown_14_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_p_dropdown_14_2_ng_template_0_Template, 1, 1, "ng-template", 28);
  }
}
function Paginator_div_0_p_dropdown_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dropdown", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function Paginator_div_0_p_dropdown_14_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r1.rows, $event) || (ctx_r1.rows = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function Paginator_div_0_p_dropdown_14_Template_p_dropdown_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onRppChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_p_dropdown_14_ng_container_1_Template, 2, 0, "ng-container", 27)(2, Paginator_div_0_p_dropdown_14_2_Template, 1, 0, null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.rowsPerPageItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.empty())("appendTo", ctx_r1.dropdownAppendTo)("scrollHeight", ctx_r1.dropdownScrollHeight)("ariaLabel", ctx_r1.getAriaLabel("rowsPerPageLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dropdownItemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.dropdownIconTemplate);
  }
}
function Paginator_div_0_div_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Paginator_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_div_15_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "end");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.templateRight)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r1.paginatorState));
  }
}
function Paginator_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Paginator_div_0_div_1_Template, 2, 5, "div", 2)(2, Paginator_div_0_span_2_Template, 2, 1, "span", 3)(3, Paginator_div_0_button_3_Template, 3, 7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changePageToPrev($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Paginator_div_0_AngleLeftIcon_5_Template, 1, 1, "AngleLeftIcon", 6)(6, Paginator_div_0_span_6_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Paginator_div_0_span_7_Template, 2, 1, "span", 8)(8, Paginator_div_0_p_dropdown_8_Template, 3, 7, "p-dropdown", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Paginator_div_0_Template_button_click_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changePageToNext($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Paginator_div_0_AngleRightIcon_10_Template, 1, 1, "AngleRightIcon", 6)(11, Paginator_div_0_span_11_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Paginator_div_0_button_12_Template, 3, 7, "button", 11)(13, Paginator_div_0_p_inputNumber_13_Template, 1, 2, "p-inputNumber", 12)(14, Paginator_div_0_p_dropdown_14_Template, 3, 8, "p-dropdown", 13)(15, Paginator_div_0_div_15_Template, 2, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.style)("ngClass", "p-paginator p-component");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "paginator")("data-pc-section", "root");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.templateLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showCurrentPageReport);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showFirstLastIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isFirstPage() || ctx_r1.empty())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx_r1.isFirstPage() || ctx_r1.empty()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getAriaLabel("prevPageLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.previousPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.previousPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showPageLinks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showJumpToPageDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isLastPage() || ctx_r1.empty())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx_r1.isLastPage() || ctx_r1.empty()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.getAriaLabel("nextPageLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.nextPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nextPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showFirstLastIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showJumpToPageInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.rowsPerPageOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.templateRight);
  }
}
let Paginator = /*#__PURE__*/(() => {
  class Paginator {
    cd;
    config;
    /**
     * Number of page links to display.
     * @group Props
     */
    pageLinkSize = 5;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Whether to show it even there is only one page.
     * @group Props
     */
    alwaysShow = true;
    /**
     * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    dropdownAppendTo;
    /**
     * Template instance to inject into the left side of the paginator.
     * @param {PaginatorState} context - Paginator state.
     * @group Props
     */
    templateLeft;
    /**
     * Template instance to inject into the right side of the paginator.
     * @param {PaginatorState} context - Paginator state.
     * @group Props
     */
    templateRight;
    /**
     * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * Dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
     * @group Props
     */
    dropdownScrollHeight = '200px';
    /**
     * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
     * @group Props
     */
    currentPageReportTemplate = '{currentPage} of {totalPages}';
    /**
     * Whether to display current page report.
     * @group Props
     */
    showCurrentPageReport;
    /**
     * When enabled, icons are displayed on paginator to go first and last page.
     * @group Props
     */
    showFirstLastIcon = true;
    /**
     * Number of total records.
     * @group Props
     */
    totalRecords = 0;
    /**
     * Data count to display per page.
     * @group Props
     */
    rows = 0;
    /**
     * Array of integer/object values to display inside rows per page dropdown. A object that have 'showAll' key can be added to it to show all data. Exp; [10,20,30,{showAll:'All'}]
     * @group Props
     */
    rowsPerPageOptions;
    /**
     * Whether to display a dropdown to navigate to any page.
     * @group Props
     */
    showJumpToPageDropdown;
    /**
     * Whether to display a input to navigate to any page.
     * @group Props
     */
    showJumpToPageInput;
    /**
     * Whether to show page links.
     * @group Props
     */
    showPageLinks = true;
    /**
     * Locale to be used in formatting.
     * @group Props
     */
    locale;
    /**
     * Template instance to inject into the dropdown item inside in the paginator.
     * @param {Object} context - item instance.
     * @group Props
     */
    dropdownItemTemplate;
    /**
     * Zero-relative number of the first row to be displayed.
     * @group Props
     */
    get first() {
      return this._first;
    }
    set first(val) {
      this._first = val;
    }
    /**
     * Callback to invoke when page changes, the event object contains information about the new state.
     * @param {PaginatorState} event - Paginator state.
     * @group Emits
     */
    onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    templates;
    dropdownIconTemplate;
    firstPageLinkIconTemplate;
    previousPageLinkIconTemplate;
    lastPageLinkIconTemplate;
    nextPageLinkIconTemplate;
    pageLinks;
    pageItems;
    rowsPerPageItems;
    paginatorState;
    _first = 0;
    _page = 0;
    constructor(cd, config) {
      this.cd = cd;
      this.config = config;
    }
    ngOnInit() {
      this.updatePaginatorState();
    }
    getAriaLabel(labelType) {
      return this.config.translation.aria ? this.config.translation.aria[labelType] : undefined;
    }
    getPageAriaLabel(value) {
      return this.config.translation.aria ? this.config.translation.aria.pageLabel.replace(/{page}/g, `Page ${value}`) : undefined;
    }
    getLocalization(digit) {
      const numerals = [...new Intl.NumberFormat(this.locale, {
        useGrouping: false
      }).format(9876543210)].reverse();
      const index = new Map(numerals.map((d, i) => [i, d]));
      if (digit > 9) {
        const numbers = String(digit).split('');
        return numbers.map(number => index.get(Number(number))).join('');
      } else {
        return index.get(digit);
      }
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'dropdownicon':
            this.dropdownIconTemplate = item.template;
            break;
          case 'firstpagelinkicon':
            this.firstPageLinkIconTemplate = item.template;
            break;
          case 'previouspagelinkicon':
            this.previousPageLinkIconTemplate = item.template;
            break;
          case 'lastpagelinkicon':
            this.lastPageLinkIconTemplate = item.template;
            break;
          case 'nextpagelinkicon':
            this.nextPageLinkIconTemplate = item.template;
            break;
        }
      });
    }
    ngOnChanges(simpleChange) {
      if (simpleChange.totalRecords) {
        this.updatePageLinks();
        this.updatePaginatorState();
        this.updateFirst();
        this.updateRowsPerPageOptions();
      }
      if (simpleChange.first) {
        this._first = simpleChange.first.currentValue;
        this.updatePageLinks();
        this.updatePaginatorState();
      }
      if (simpleChange.rows) {
        this.updatePageLinks();
        this.updatePaginatorState();
      }
      if (simpleChange.rowsPerPageOptions) {
        this.updateRowsPerPageOptions();
      }
    }
    updateRowsPerPageOptions() {
      if (this.rowsPerPageOptions) {
        this.rowsPerPageItems = [];
        for (let opt of this.rowsPerPageOptions) {
          if (typeof opt == 'object' && opt['showAll']) {
            this.rowsPerPageItems.unshift({
              label: opt['showAll'],
              value: this.totalRecords
            });
          } else {
            this.rowsPerPageItems.push({
              label: String(this.getLocalization(opt)),
              value: opt
            });
          }
        }
      }
    }
    isFirstPage() {
      return this.getPage() === 0;
    }
    isLastPage() {
      return this.getPage() === this.getPageCount() - 1;
    }
    getPageCount() {
      return Math.ceil(this.totalRecords / this.rows);
    }
    calculatePageLinkBoundaries() {
      let numberOfPages = this.getPageCount(),
        visiblePages = Math.min(this.pageLinkSize, numberOfPages);
      //calculate range, keep current in middle if necessary
      let start = Math.max(0, Math.ceil(this.getPage() - visiblePages / 2)),
        end = Math.min(numberOfPages - 1, start + visiblePages - 1);
      //check when approaching to last page
      var delta = this.pageLinkSize - (end - start + 1);
      start = Math.max(0, start - delta);
      return [start, end];
    }
    updatePageLinks() {
      this.pageLinks = [];
      let boundaries = this.calculatePageLinkBoundaries(),
        start = boundaries[0],
        end = boundaries[1];
      for (let i = start; i <= end; i++) {
        this.pageLinks.push(i + 1);
      }
      if (this.showJumpToPageDropdown) {
        this.pageItems = [];
        for (let i = 0; i < this.getPageCount(); i++) {
          this.pageItems.push({
            label: String(i + 1),
            value: i
          });
        }
      }
    }
    changePage(p) {
      var pc = this.getPageCount();
      if (p >= 0 && p < pc) {
        this._first = this.rows * p;
        var state = {
          page: p,
          first: this.first,
          rows: this.rows,
          pageCount: pc
        };
        this.updatePageLinks();
        this.onPageChange.emit(state);
        this.updatePaginatorState();
      }
    }
    updateFirst() {
      const page = this.getPage();
      if (page > 0 && this.totalRecords && this.first >= this.totalRecords) {
        Promise.resolve(null).then(() => this.changePage(page - 1));
      }
    }
    getPage() {
      return Math.floor(this.first / this.rows);
    }
    changePageToFirst(event) {
      if (!this.isFirstPage()) {
        this.changePage(0);
      }
      event.preventDefault();
    }
    changePageToPrev(event) {
      this.changePage(this.getPage() - 1);
      event.preventDefault();
    }
    changePageToNext(event) {
      this.changePage(this.getPage() + 1);
      event.preventDefault();
    }
    changePageToLast(event) {
      if (!this.isLastPage()) {
        this.changePage(this.getPageCount() - 1);
      }
      event.preventDefault();
    }
    onPageLinkClick(event, page) {
      this.changePage(page);
      event.preventDefault();
    }
    onRppChange(event) {
      this.changePage(this.getPage());
    }
    onPageDropdownChange(event) {
      this.changePage(event.value);
    }
    updatePaginatorState() {
      this.paginatorState = {
        page: this.getPage(),
        pageCount: this.getPageCount(),
        rows: this.rows,
        first: this.first,
        totalRecords: this.totalRecords
      };
    }
    empty() {
      return this.getPageCount() === 0;
    }
    currentPage() {
      return this.getPageCount() > 0 ? this.getPage() + 1 : 0;
    }
    get currentPageReport() {
      return this.currentPageReportTemplate.replace('{currentPage}', String(this.currentPage())).replace('{totalPages}', String(this.getPageCount())).replace('{first}', String(this.totalRecords > 0 ? this._first + 1 : 0)).replace('{last}', String(Math.min(this._first + this.rows, this.totalRecords))).replace('{rows}', String(this.rows)).replace('{totalRecords}', String(this.totalRecords));
    }
    static ɵfac = function Paginator_Factory(t) {
      return new (t || Paginator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Paginator,
      selectors: [["p-paginator"]],
      contentQueries: function Paginator_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        pageLinkSize: "pageLinkSize",
        style: "style",
        styleClass: "styleClass",
        alwaysShow: "alwaysShow",
        dropdownAppendTo: "dropdownAppendTo",
        templateLeft: "templateLeft",
        templateRight: "templateRight",
        appendTo: "appendTo",
        dropdownScrollHeight: "dropdownScrollHeight",
        currentPageReportTemplate: "currentPageReportTemplate",
        showCurrentPageReport: "showCurrentPageReport",
        showFirstLastIcon: "showFirstLastIcon",
        totalRecords: "totalRecords",
        rows: "rows",
        rowsPerPageOptions: "rowsPerPageOptions",
        showJumpToPageDropdown: "showJumpToPageDropdown",
        showJumpToPageInput: "showJumpToPageInput",
        showPageLinks: "showPageLinks",
        locale: "locale",
        dropdownItemTemplate: "dropdownItemTemplate",
        first: "first"
      },
      outputs: {
        onPageChange: "onPageChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "class", "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "ngClass"], ["class", "p-paginator-left-content", 4, "ngIf"], ["class", "p-paginator-current", 4, "ngIf"], ["type", "button", "pRipple", "", "class", "p-paginator-first p-paginator-element p-link", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-prev", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "p-paginator-icon", 4, "ngIf"], ["class", "p-paginator-pages", 4, "ngIf"], ["styleClass", "p-paginator-page-options", 3, "options", "ngModel", "disabled", "appendTo", "scrollHeight", "onChange", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-next", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], ["type", "button", "pRipple", "", "class", "p-paginator-last p-paginator-element p-link", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["class", "p-paginator-page-input", 3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], ["styleClass", "p-paginator-rpp-options", 3, "options", "ngModel", "disabled", "appendTo", "scrollHeight", "ariaLabel", "ngModelChange", "onChange", 4, "ngIf"], ["class", "p-paginator-right-content", 4, "ngIf"], [1, "p-paginator-left-content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-paginator-current"], ["type", "button", "pRipple", "", 1, "p-paginator-first", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], [3, "styleClass"], [1, "p-paginator-icon"], [4, "ngTemplateOutlet"], [1, "p-paginator-pages"], ["type", "button", "class", "p-paginator-page p-paginator-element p-link", "pRipple", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 1, "p-paginator-page", "p-paginator-element", "p-link", 3, "click", "ngClass"], ["styleClass", "p-paginator-page-options", 3, "onChange", "options", "ngModel", "disabled", "appendTo", "scrollHeight"], ["pTemplate", "selectedItem"], [4, "ngIf"], ["pTemplate", "dropdownicon"], ["type", "button", "pRipple", "", 1, "p-paginator-last", "p-paginator-element", "p-link", 3, "click", "disabled", "ngClass"], [1, "p-paginator-page-input", 3, "ngModelChange", "ngModel", "disabled"], ["styleClass", "p-paginator-rpp-options", 3, "ngModelChange", "onChange", "options", "ngModel", "disabled", "appendTo", "scrollHeight", "ariaLabel"], ["pTemplate", "item"], [1, "p-paginator-right-content"]],
      template: function Paginator_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Paginator_div_0_Template, 16, 29, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alwaysShow ? true : ctx.pageLinks && ctx.pageLinks.length > 1);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__.Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__.InputNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_icons_angledoubleleft__WEBPACK_IMPORTED_MODULE_7__.AngleDoubleLeftIcon, primeng_icons_angledoubleright__WEBPACK_IMPORTED_MODULE_8__.AngleDoubleRightIcon, primeng_icons_angleleft__WEBPACK_IMPORTED_MODULE_9__.AngleLeftIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_10__.AngleRightIcon],
      styles: ["@layer primeng{.p-paginator{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.p-paginator-left-content{margin-right:auto}.p-paginator-right-content{margin-left:auto}.p-paginator-page,.p-paginator-next,.p-paginator-last,.p-paginator-first,.p-paginator-prev,.p-paginator-current{cursor:pointer;display:inline-flex;align-items:center;justify-content:center;line-height:1;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-paginator-element:focus{z-index:1;position:relative}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Paginator;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let PaginatorModule = /*#__PURE__*/(() => {
  class PaginatorModule {
    static ɵfac = function PaginatorModule_Factory(t) {
      return new (t || PaginatorModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PaginatorModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__.InputNumberModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_icons_angledoubleleft__WEBPACK_IMPORTED_MODULE_7__.AngleDoubleLeftIcon, primeng_icons_angledoubleright__WEBPACK_IMPORTED_MODULE_8__.AngleDoubleRightIcon, primeng_icons_angleleft__WEBPACK_IMPORTED_MODULE_9__.AngleLeftIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_10__.AngleRightIcon, primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__.InputNumberModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
    });
  }
  return PaginatorModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 55222:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-panel.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Panel: () => (/* binding */ Panel),
/* harmony export */   PanelModule: () => (/* binding */ PanelModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_icons_minus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/minus */ 77965);
/* harmony import */ var primeng_icons_plus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/plus */ 41155);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 7251);












/**
 * Panel is a container with the optional content toggle feature.
 * @group Components
 */
const _c0 = ["*", [["p-header"]], [["p-footer"]]];
const _c1 = ["*", "p-header", "p-footer"];
const _c2 = (a0, a1) => ({
  "p-panel p-component": true,
  "p-panel-toggleable": a0,
  "p-panel-expanded": a1
});
const _c3 = a0 => ({
  transitionParams: a0,
  height: "0",
  opacity: "0"
});
const _c4 = a0 => ({
  value: "hidden",
  params: a0
});
const _c5 = a0 => ({
  transitionParams: a0,
  height: "*",
  opacity: "1"
});
const _c6 = a0 => ({
  value: "visible",
  params: a0
});
const _c7 = (a0, a1, a2) => ({
  "p-panel-icons-start": a0,
  "p-panel-icons-end": a1,
  "p-panel-icons-center": a2
});
const _c8 = a0 => ({
  $implicit: a0
});
function Panel_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.id + "_header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.header);
  }
}
function Panel_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Panel_div_1_5_ng_template_0_Template(rf, ctx) {}
function Panel_div_1_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Panel_div_1_5_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.expandIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_1_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "MinusIcon", 17);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", ctx_r1.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Panel_div_1_button_6_ng_container_1_ng_container_1_span_1_Template, 1, 3, "span", 14)(2, Panel_div_1_button_6_ng_container_1_ng_container_1_MinusIcon_2_Template, 1, 1, "MinusIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.expandIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.expandIcon);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.collapseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_2_PlusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "PlusIcon", 17);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", ctx_r1.iconClass);
  }
}
function Panel_div_1_button_6_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Panel_div_1_button_6_ng_container_1_ng_container_2_span_1_Template, 1, 3, "span", 14)(2, Panel_div_1_button_6_ng_container_1_ng_container_2_PlusIcon_2_Template, 1, 1, "PlusIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.collapseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.collapseIcon);
  }
}
function Panel_div_1_button_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Panel_div_1_button_6_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 12)(2, Panel_div_1_button_6_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.collapsed);
  }
}
function Panel_div_1_button_6_2_ng_template_0_Template(rf, ctx) {}
function Panel_div_1_button_6_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Panel_div_1_button_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Panel_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Panel_div_1_button_6_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onIconClick($event));
    })("keydown", function Panel_div_1_button_6_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Panel_div_1_button_6_ng_container_1_Template, 3, 2, "ng-container", 12)(2, Panel_div_1_button_6_2_Template, 1, 0, null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.id + "_header")("aria-label", ctx_r1.buttonAriaLabel)("aria-controls", ctx_r1.id + "_content")("aria-expanded", !ctx_r1.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.headerIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headerIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c8, ctx_r1.collapsed));
  }
}
function Panel_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Panel_div_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onHeaderClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Panel_div_1_span_1_Template, 2, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Panel_div_1_ng_container_3_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Panel_div_1_5_Template, 1, 0, null, 4)(6, Panel_div_1_button_6_Template, 3, 9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.id + "-titlebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c7, ctx_r1.iconPos === "start", ctx_r1.iconPos === "end", ctx_r1.iconPos === "center"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.iconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.toggleable);
  }
}
function Panel_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Panel_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Panel_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Panel_div_6_ng_container_2_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
let Panel = /*#__PURE__*/(() => {
  class Panel {
    el;
    /**
     * Defines if content of panel can be expanded and collapsed.
     * @group Props
     */
    toggleable;
    /**
     * Header text of the panel.
     * @group Props
     */
    header;
    /**
     * Defines the initial state of panel content, supports one or two-way binding as well.
     * @group Props
     */
    collapsed;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Position of the icons.
     * @group Props
     */
    iconPos = 'end';
    /**
     * Expand icon of the toggle button.
     * @group Props
     * @deprecated since v15.4.2, use `headericons` template instead.
     */
    expandIcon;
    /**
     * Collapse icon of the toggle button.
     * @group Props
     * @deprecated since v15.4.2, use `headericons` template instead.
     */
    collapseIcon;
    /**
     * Specifies if header of panel cannot be displayed.
     * @group Props
     * @deprecated since v15.4.2, use `headericons` template instead.
     */
    showHeader = true;
    /**
     * Specifies the toggler element to toggle the panel content.
     * @group Props
     */
    toggler = 'icon';
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
    /**
     * Emitted when the collapsed changes.
     * @param {boolean} value - New Value.
     * @group Emits
     */
    collapsedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke before panel toggle.
     * @param {PanelBeforeToggleEvent} event - Custom panel toggle event
     * @group Emits
     */
    onBeforeToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke after panel toggle.
     * @param {PanelAfterToggleEvent} event - Custom panel toggle event
     * @group Emits
     */
    onAfterToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    footerFacet;
    templates;
    iconTemplate;
    animating;
    headerTemplate;
    contentTemplate;
    footerTemplate;
    headerIconTemplate;
    id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)();
    get buttonAriaLabel() {
      return this.header;
    }
    constructor(el) {
      this.el = el;
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'content':
            this.contentTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          case 'icons':
            this.iconTemplate = item.template;
            break;
          case 'headericons':
            this.headerIconTemplate = item.template;
            break;
          default:
            this.contentTemplate = item.template;
            break;
        }
      });
    }
    onHeaderClick(event) {
      if (this.toggler === 'header') {
        this.toggle(event);
      }
    }
    onIconClick(event) {
      if (this.toggler === 'icon') {
        this.toggle(event);
      }
    }
    toggle(event) {
      if (this.animating) {
        return false;
      }
      this.animating = true;
      this.onBeforeToggle.emit({
        originalEvent: event,
        collapsed: this.collapsed
      });
      if (this.toggleable) {
        if (this.collapsed) this.expand();else this.collapse();
      }
      event.preventDefault();
    }
    expand() {
      this.collapsed = false;
      this.collapsedChange.emit(this.collapsed);
    }
    collapse() {
      this.collapsed = true;
      this.collapsedChange.emit(this.collapsed);
    }
    getBlockableElement() {
      return this.el.nativeElement.children[0];
    }
    onKeyDown(event) {
      if (event.code === 'Enter' || event.code === 'Space') {
        this.toggle(event);
        event.preventDefault();
      }
    }
    onToggleDone(event) {
      this.animating = false;
      this.onAfterToggle.emit({
        originalEvent: event,
        collapsed: this.collapsed
      });
    }
    static ɵfac = function Panel_Factory(t) {
      return new (t || Panel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Panel,
      selectors: [["p-panel"]],
      contentQueries: function Panel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.Footer, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        toggleable: "toggleable",
        header: "header",
        collapsed: "collapsed",
        style: "style",
        styleClass: "styleClass",
        iconPos: "iconPos",
        expandIcon: "expandIcon",
        collapseIcon: "collapseIcon",
        showHeader: "showHeader",
        toggler: "toggler",
        transitionOptions: "transitionOptions"
      },
      outputs: {
        collapsedChange: "collapsedChange",
        onBeforeToggle: "onBeforeToggle",
        onAfterToggle: "onAfterToggle"
      },
      ngContentSelectors: _c1,
      decls: 7,
      vars: 25,
      consts: [[3, "ngClass", "ngStyle"], ["class", "p-panel-header", 3, "click", 4, "ngIf"], ["role", "region", 1, "p-toggleable-content", 3, "id"], [1, "p-panel-content"], [4, "ngTemplateOutlet"], ["class", "p-panel-footer", 4, "ngIf"], [1, "p-panel-header", 3, "click"], ["class", "p-panel-title", 4, "ngIf"], [1, "p-panel-icons", 3, "ngClass"], ["pRipple", "", "type", "button", "role", "button", "class", "p-panel-header-icon p-panel-toggler p-link", 3, "click", "keydown", 4, "ngIf"], [1, "p-panel-title"], ["pRipple", "", "type", "button", "role", "button", 1, "p-panel-header-icon", "p-panel-toggler", "p-link", 3, "click", "keydown"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "ngClass"], [3, "styleClass"], [1, "p-panel-footer"]],
      template: function Panel_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Panel_div_1_Template, 7, 10, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@panelContent.done", function Panel_Template_div_animation_panelContent_done_2_listener($event) {
            return ctx.onToggleDone($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Panel_ng_container_5_Template, 1, 0, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Panel_div_6_Template, 3, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c2, ctx.toggleable, !ctx.collapsed && ctx.toggleable))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("data-pc-name", "panel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showHeader);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id + "_content")("@panelContent", ctx.collapsed ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c3, ctx.animating ? ctx.transitionOptions : "0ms")) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c5, ctx.animating ? ctx.transitionOptions : "0ms")));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx.id + "_header")("aria-hidden", ctx.collapsed)("tabindex", ctx.collapsed ? "-1" : undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerFacet || ctx.footerTemplate);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_5__.PlusIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_6__.MinusIcon],
      styles: ["@layer primeng{.p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-panel-toggleable.p-panel-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-panel-toggleable .p-toggleable-content{overflow:hidden}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('panelContent', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '0'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '{{height}}'
        }), {
          params: {
            height: '0'
          }
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '*'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('visible <=> hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}'))])]
      },
      changeDetection: 0
    });
  }
  return Panel;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let PanelModule = /*#__PURE__*/(() => {
  class PanelModule {
    static ɵfac = function PanelModule_Factory(t) {
      return new (t || PanelModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PanelModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_5__.PlusIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_6__.MinusIcon, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
  return PanelModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=296.js.map