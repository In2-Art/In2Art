"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[747],{

/***/ 64747:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-galleria.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Galleria: () => (/* binding */ Galleria),
/* harmony export */   GalleriaContent: () => (/* binding */ GalleriaContent),
/* harmony export */   GalleriaItem: () => (/* binding */ GalleriaItem),
/* harmony export */   GalleriaItemSlot: () => (/* binding */ GalleriaItemSlot),
/* harmony export */   GalleriaModule: () => (/* binding */ GalleriaModule),
/* harmony export */   GalleriaThumbnails: () => (/* binding */ GalleriaThumbnails)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dom */ 35228);
/* harmony import */ var primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/chevronleft */ 44959);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/chevronright */ 45994);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/times */ 57727);
/* harmony import */ var primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/windowmaximize */ 31717);
/* harmony import */ var primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/icons/windowminimize */ 69551);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 7251);
/* harmony import */ var primeng_focustrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/focustrap */ 61257);



















/**
 * Galleria is an advanced content gallery component.
 * @group Components
 */
const _c0 = ["mask"];
const _c1 = ["container"];
const _c2 = a0 => ({
  "p-galleria-mask p-component-overlay p-component-overlay-enter": true,
  "p-galleria-visible": a0
});
const _c3 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
const _c4 = a0 => ({
  value: "visible",
  params: a0
});
function Galleria_div_0_div_2_p_galleriaContent_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-galleriaContent", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@animation.start", function Galleria_div_0_div_2_p_galleriaContent_2_Template_p_galleriaContent_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onAnimationStart($event));
    })("@animation.done", function Galleria_div_0_div_2_p_galleriaContent_2_Template_p_galleriaContent_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onAnimationEnd($event));
    })("maskHide", function Galleria_div_0_div_2_p_galleriaContent_2_Template_p_galleriaContent_maskHide_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onMaskHide());
    })("activeItemChange", function Galleria_div_0_div_2_p_galleriaContent_2_Template_p_galleriaContent_activeItemChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onActiveItemChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c3, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("value", ctx_r1.value)("activeIndex", ctx_r1.activeIndex)("numVisible", ctx_r1.numVisibleLimit || ctx_r1.numVisible)("ngStyle", ctx_r1.containerStyle);
  }
}
function Galleria_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Galleria_div_0_div_2_p_galleriaContent_2_Template, 1, 10, "p-galleriaContent", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.maskClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx_r1.visible));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx_r1.fullScreen ? "dialog" : "region")("aria-modal", ctx_r1.fullScreen ? "true" : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.visible);
  }
}
function Galleria_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Galleria_div_0_div_2_Template, 3, 8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.maskVisible);
  }
}
function Galleria_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-galleriaContent", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeItemChange", function Galleria_ng_template_1_Template_p_galleriaContent_activeItemChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onActiveItemChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.value)("activeIndex", ctx_r1.activeIndex)("numVisible", ctx_r1.numVisibleLimit || ctx_r1.numVisible);
  }
}
const _c5 = ["closeButton"];
const _c6 = (a0, a1, a2) => ({
  "p-galleria p-component": true,
  "p-galleria-fullscreen": a0,
  "p-galleria-indicator-onitem": a1,
  "p-galleria-item-nav-onhover": a2
});
const _c7 = () => ({});
function GalleriaContent_div_0_button_1_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesIcon", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-galleria-close-icon");
  }
}
function GalleriaContent_div_0_button_1_2_ng_template_0_Template(rf, ctx) {}
function GalleriaContent_div_0_button_1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaContent_div_0_button_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaContent_div_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaContent_div_0_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.maskHide.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaContent_div_0_button_1_TimesIcon_1_Template, 1, 1, "TimesIcon", 9)(2, GalleriaContent_div_0_button_1_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r2.closeAriaLabel())("data-pc-section", "closebutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.galleria.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.galleria.closeIconTemplate);
  }
}
function GalleriaContent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-galleriaItemSlot", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("templates", ctx_r2.galleria.templates);
  }
}
function GalleriaContent_div_0_p_galleriaThumbnails_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-galleriaThumbnails", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onActiveIndexChange", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_onActiveIndexChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onActiveIndexChange($event));
    })("stopSlideShow", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_stopSlideShow_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.stopSlideShow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("containerId", ctx_r2.id)("value", ctx_r2.value)("activeIndex", ctx_r2.activeIndex)("templates", ctx_r2.galleria.templates)("numVisible", ctx_r2.numVisible)("responsiveOptions", ctx_r2.galleria.responsiveOptions)("circular", ctx_r2.galleria.circular)("isVertical", ctx_r2.isVertical())("contentHeight", ctx_r2.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators", ctx_r2.galleria.showThumbnailNavigators)("slideShowActive", ctx_r2.slideShowActive);
  }
}
function GalleriaContent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-galleriaItemSlot", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("templates", ctx_r2.galleria.templates);
  }
}
function GalleriaContent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaContent_div_0_button_1_Template, 3, 4, "button", 2)(2, GalleriaContent_div_0_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4)(4, "p-galleriaItem", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onActiveIndexChange", function GalleriaContent_div_0_Template_p_galleriaItem_onActiveIndexChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onActiveIndexChange($event));
    })("startSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_startSlideShow_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.startSlideShow());
    })("stopSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_stopSlideShow_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.stopSlideShow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleriaContent_div_0_p_galleriaThumbnails_5_Template, 1, 11, "p-galleriaThumbnails", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GalleriaContent_div_0_div_6_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.galleriaClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](23, _c6, ctx_r2.galleria.fullScreen, ctx_r2.galleria.showIndicatorsOnItem, ctx_r2.galleria.showItemNavigatorsOnHover && !ctx_r2.galleria.fullScreen))("ngStyle", !ctx_r2.galleria.fullScreen ? ctx_r2.galleria.containerStyle : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.id)("role", "region");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.galleria.fullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.galleria.templates && ctx_r2.galleria.headerFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-live", ctx_r2.galleria.autoPlay ? "polite" : "off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r2.id)("value", ctx_r2.value)("activeIndex", ctx_r2.activeIndex)("circular", ctx_r2.galleria.circular)("templates", ctx_r2.galleria.templates)("showIndicators", ctx_r2.galleria.showIndicators)("changeItemOnIndicatorHover", ctx_r2.galleria.changeItemOnIndicatorHover)("indicatorFacet", ctx_r2.galleria.indicatorFacet)("captionFacet", ctx_r2.galleria.captionFacet)("showItemNavigators", ctx_r2.galleria.showItemNavigators)("autoPlay", ctx_r2.galleria.autoPlay)("slideShowActive", ctx_r2.slideShowActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.galleria.showThumbnails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.galleria.templates && ctx_r2.galleria.footerFacet);
  }
}
function GalleriaItemSlot_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function GalleriaItemSlot_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItemSlot_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ctx_r0.context);
  }
}
const _c8 = a0 => ({
  "p-galleria-item-prev p-galleria-item-nav p-link": true,
  "p-disabled": a0
});
const _c9 = a0 => ({
  "p-galleria-item-next p-galleria-item-nav p-link": true,
  "p-disabled": a0
});
const _c10 = a0 => ({
  "p-galleria-indicator": true,
  "p-highlight": a0
});
function GalleriaItem_button_2_ChevronLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronLeftIcon", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-galleria-item-prev-icon");
  }
}
function GalleriaItem_button_2_2_ng_template_0_Template(rf, ctx) {}
function GalleriaItem_button_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaItem_button_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaItem_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaItem_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.navBackward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItem_button_2_ChevronLeftIcon_1_Template, 1, 1, "ChevronLeftIcon", 9)(2, GalleriaItem_button_2_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c8, ctx_r1.isNavBackwardDisabled()))("disabled", ctx_r1.isNavBackwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.galleria.itemPreviousIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.galleria.itemPreviousIconTemplate);
  }
}
function GalleriaItem_button_5_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-galleria-item-next-icon");
  }
}
function GalleriaItem_button_5_2_ng_template_0_Template(rf, ctx) {}
function GalleriaItem_button_5_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaItem_button_5_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaItem_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaItem_button_5_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.navForward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItem_button_5_ChevronRightIcon_1_Template, 1, 1, "ChevronRightIcon", 9)(2, GalleriaItem_button_5_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c9, ctx_r1.isNavForwardDisabled()))("disabled", ctx_r1.isNavForwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.galleria.itemNextIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.galleria.itemNextIconTemplate);
  }
}
function GalleriaItem_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-galleriaItemSlot", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx_r1.activeItem)("templates", ctx_r1.templates);
  }
}
function GalleriaItem_ul_7_li_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 20);
  }
}
function GalleriaItem_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaItem_ul_7_li_1_Template_li_click_0_listener() {
      const index_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onIndicatorClick(index_r5));
    })("mouseenter", function GalleriaItem_ul_7_li_1_Template_li_mouseenter_0_listener() {
      const index_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onIndicatorMouseEnter(index_r5));
    })("keydown", function GalleriaItem_ul_7_li_1_Template_li_keydown_0_listener($event) {
      const index_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onIndicatorKeyDown($event, index_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItem_ul_7_li_1_button_1_Template, 1, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-galleriaItemSlot", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c10, ctx_r1.isIndicatorItemActive(index_r5)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.ariaPageLabel(index_r5 + 1))("aria-selected", ctx_r1.activeIndex === index_r5)("aria-controls", ctx_r1.id + "_item_" + index_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.indicatorFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", index_r5)("templates", ctx_r1.templates);
  }
}
function GalleriaItem_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItem_ul_7_li_1_Template, 3, 9, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.value);
  }
}
const _c11 = ["itemsContainer"];
const _c12 = a0 => ({
  height: a0
});
const _c13 = a0 => ({
  "p-galleria-thumbnail-prev p-link": true,
  "p-disabled": a0
});
const _c14 = (a0, a1, a2, a3) => ({
  "p-galleria-thumbnail-item": true,
  "p-galleria-thumbnail-item-current": a0,
  "p-galleria-thumbnail-item-active": a1,
  "p-galleria-thumbnail-item-start": a2,
  "p-galleria-thumbnail-item-end": a3
});
const _c15 = a0 => ({
  "p-galleria-thumbnail-next p-link": true,
  "p-disabled": a0
});
function GalleriaThumbnails_button_2_ng_container_1_ChevronLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronLeftIcon", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-galleria-thumbnail-prev-icon");
  }
}
function GalleriaThumbnails_button_2_ng_container_1_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronUpIcon", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-galleria-thumbnail-prev-icon");
  }
}
function GalleriaThumbnails_button_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaThumbnails_button_2_ng_container_1_ChevronLeftIcon_1_Template, 1, 1, "ChevronLeftIcon", 10)(2, GalleriaThumbnails_button_2_ng_container_1_ChevronUpIcon_2_Template, 1, 1, "ChevronUpIcon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isVertical);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isVertical);
  }
}
function GalleriaThumbnails_button_2_2_ng_template_0_Template(rf, ctx) {}
function GalleriaThumbnails_button_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaThumbnails_button_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaThumbnails_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaThumbnails_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.navBackward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaThumbnails_button_2_ng_container_1_Template, 3, 2, "ng-container", 8)(2, GalleriaThumbnails_button_2_2_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c13, ctx_r2.isNavBackwardDisabled()))("disabled", ctx_r2.isNavBackwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r2.ariaPrevButtonLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.galleria.previousThumbnailIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.galleria.previousThumbnailIconTemplate);
  }
}
function GalleriaThumbnails_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function GalleriaThumbnails_div_6_Template_div_keydown_0_listener($event) {
      const index_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onThumbnailKeydown($event, index_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaThumbnails_div_6_Template_div_click_1_listener() {
      const index_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onItemClick(index_r5));
    })("touchend", function GalleriaThumbnails_div_6_Template_div_touchend_1_listener() {
      const index_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onItemClick(index_r5));
    })("keydown.enter", function GalleriaThumbnails_div_6_Template_div_keydown_enter_1_listener() {
      const index_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onItemClick(index_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-galleriaItemSlot", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](10, _c14, ctx_r2.activeIndex === index_r5, ctx_r2.isItemActive(index_r5), ctx_r2.firstItemAciveIndex() === index_r5, ctx_r2.lastItemActiveIndex() === index_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-selected", ctx_r2.activeIndex === index_r5)("aria-controls", ctx_r2.containerId + "_item_" + index_r5)("data-pc-section", "thumbnailitem")("data-p-active", ctx_r2.activeIndex === index_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r2.activeIndex === index_r5 ? 0 : -1)("aria-current", ctx_r2.activeIndex === index_r5 ? "page" : undefined)("aria-label", ctx_r2.ariaPageLabel(index_r5 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r6)("templates", ctx_r2.templates);
  }
}
function GalleriaThumbnails_button_7_ng_container_1_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon", 16);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-galleria-thumbnail-next-icon");
  }
}
function GalleriaThumbnails_button_7_ng_container_1_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 16);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-galleria-thumbnail-next-icon");
  }
}
function GalleriaThumbnails_button_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaThumbnails_button_7_ng_container_1_ChevronRightIcon_1_Template, 1, 1, "ChevronRightIcon", 15)(2, GalleriaThumbnails_button_7_ng_container_1_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isVertical);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isVertical);
  }
}
function GalleriaThumbnails_button_7_2_ng_template_0_Template(rf, ctx) {}
function GalleriaThumbnails_button_7_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaThumbnails_button_7_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaThumbnails_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaThumbnails_button_7_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.navForward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaThumbnails_button_7_ng_container_1_Template, 3, 2, "ng-container", 8)(2, GalleriaThumbnails_button_7_2_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c15, ctx_r2.isNavForwardDisabled()))("disabled", ctx_r2.isNavForwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r2.ariaNextButtonLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.galleria.nextThumbnailIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.galleria.nextThumbnailIconTemplate);
  }
}
let Galleria = /*#__PURE__*/(() => {
  class Galleria {
    document;
    platformId;
    element;
    cd;
    config;
    /**
     * Index of the first item.
     * @group Props
     */
    get activeIndex() {
      return this._activeIndex;
    }
    set activeIndex(activeIndex) {
      this._activeIndex = activeIndex;
    }
    /**
     * Whether to display the component on fullscreen.
     * @group Props
     */
    fullScreen = false;
    /**
     * Unique identifier of the element.
     * @group Props
     */
    id;
    /**
     * An array of objects to display.
     * @group Props
     */
    value;
    /**
     * Number of items per page.
     * @group Props
     */
    numVisible = 3;
    /**
     * An array of options for responsive design.
     * @see {GalleriaResponsiveOptions}
     * @group Props
     */
    responsiveOptions;
    /**
     * Whether to display navigation buttons in item section.
     * @group Props
     */
    showItemNavigators = false;
    /**
     * Whether to display navigation buttons in thumbnail container.
     * @group Props
     */
    showThumbnailNavigators = true;
    /**
     * Whether to display navigation buttons on item hover.
     * @group Props
     */
    showItemNavigatorsOnHover = false;
    /**
     * When enabled, item is changed on indicator hover.
     * @group Props
     */
    changeItemOnIndicatorHover = false;
    /**
     * Defines if scrolling would be infinite.
     * @group Props
     */
    circular = false;
    /**
     * Items are displayed with a slideshow in autoPlay mode.
     * @group Props
     */
    autoPlay = false;
    /**
     * When enabled, autorun should stop by click.
     * @group Props
     */
    shouldStopAutoplayByClick = true;
    /**
     * Time in milliseconds to scroll items.
     * @group Props
     */
    transitionInterval = 4000;
    /**
     * Whether to display thumbnail container.
     * @group Props
     */
    showThumbnails = true;
    /**
     * Position of thumbnails.
     * @group Props
     */
    thumbnailsPosition = 'bottom';
    /**
     * Height of the viewport in vertical thumbnail.
     * @group Props
     */
    verticalThumbnailViewPortHeight = '300px';
    /**
     * Whether to display indicator container.
     * @group Props
     */
    showIndicators = false;
    /**
     * When enabled, indicator container is displayed on item container.
     * @group Props
     */
    showIndicatorsOnItem = false;
    /**
     * Position of indicators.
     * @group Props
     */
    indicatorsPosition = 'bottom';
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex = 0;
    /**
     * Style class of the mask on fullscreen mode.
     * @group Props
     */
    maskClass;
    /**
     * Style class of the component on fullscreen mode. Otherwise, the 'class' property can be used.
     * @group Props
     */
    containerClass;
    /**
     * Inline style of the component on fullscreen mode. Otherwise, the 'style' property can be used.
     * @group Props
     */
    containerStyle;
    /**
     * Transition options of the show animation.
     * @group Props
     */
    showTransitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    /**
     * Transition options of the hide animation.
     * @group Props
     */
    hideTransitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    /**
     * Specifies the visibility of the mask on fullscreen mode.
     * @group Props
     */
    get visible() {
      return this._visible;
    }
    set visible(visible) {
      this._visible = visible;
      if (this._visible && !this.maskVisible) {
        this.maskVisible = true;
      }
    }
    /**
     * Callback to invoke on active index change.
     * @param {number} number - Active index.
     * @group Emits
     */
    activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on visiblity change.
     * @param {boolean} boolean - Visible value.
     * @group Emits
     */
    visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    mask;
    container;
    templates;
    _visible = false;
    _activeIndex = 0;
    headerFacet;
    footerFacet;
    indicatorFacet;
    captionFacet;
    closeIconTemplate;
    previousThumbnailIconTemplate;
    nextThumbnailIconTemplate;
    itemPreviousIconTemplate;
    itemNextIconTemplate;
    maskVisible = false;
    numVisibleLimit = 0;
    constructor(document, platformId, element, cd, config) {
      this.document = document;
      this.platformId = platformId;
      this.element = element;
      this.cd = cd;
      this.config = config;
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'header':
            this.headerFacet = item.template;
            break;
          case 'footer':
            this.footerFacet = item.template;
            break;
          case 'indicator':
            this.indicatorFacet = item.template;
            break;
          case 'closeicon':
            this.closeIconTemplate = item.template;
            break;
          case 'itemnexticon':
            this.itemNextIconTemplate = item.template;
            break;
          case 'itempreviousicon':
            this.itemPreviousIconTemplate = item.template;
            break;
          case 'previousthumbnailicon':
            this.previousThumbnailIconTemplate = item.template;
            break;
          case 'nextthumbnailicon':
            this.nextThumbnailIconTemplate = item.template;
            break;
          case 'caption':
            this.captionFacet = item.template;
            break;
        }
      });
    }
    ngOnChanges(simpleChanges) {
      if (simpleChanges.value && simpleChanges.value.currentValue?.length < this.numVisible) {
        this.numVisibleLimit = simpleChanges.value.currentValue.length;
      } else {
        this.numVisibleLimit = 0;
      }
    }
    onMaskHide() {
      this.visible = false;
      this.visibleChange.emit(false);
    }
    onActiveItemChange(index) {
      if (this.activeIndex !== index) {
        this.activeIndex = index;
        this.activeIndexChange.emit(index);
      }
    }
    onAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          this.enableModality();
          setTimeout(() => {
            primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.focus(primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.findSingle(this.container.nativeElement, '[data-pc-section="closebutton"]'));
          }, 25);
          break;
        case 'void':
          primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.addClass(this.mask?.nativeElement, 'p-component-overlay-leave');
          break;
      }
    }
    onAnimationEnd(event) {
      switch (event.toState) {
        case 'void':
          this.disableModality();
          break;
      }
    }
    enableModality() {
      primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.blockBodyScroll();
      this.cd.markForCheck();
      if (this.mask) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('modal', this.mask.nativeElement, this.baseZIndex || this.config.zIndex.modal);
      }
    }
    disableModality() {
      primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.unblockBodyScroll();
      this.maskVisible = false;
      this.cd.markForCheck();
      if (this.mask) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.mask.nativeElement);
      }
    }
    ngOnDestroy() {
      if (this.fullScreen) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(this.document.body, 'p-overflow-hidden');
      }
      if (this.mask) {
        this.disableModality();
      }
    }
    static ɵfac = function Galleria_Factory(t) {
      return new (t || Galleria)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Galleria,
      selectors: [["p-galleria"]],
      contentQueries: function Galleria_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Galleria_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mask = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        activeIndex: "activeIndex",
        fullScreen: "fullScreen",
        id: "id",
        value: "value",
        numVisible: "numVisible",
        responsiveOptions: "responsiveOptions",
        showItemNavigators: "showItemNavigators",
        showThumbnailNavigators: "showThumbnailNavigators",
        showItemNavigatorsOnHover: "showItemNavigatorsOnHover",
        changeItemOnIndicatorHover: "changeItemOnIndicatorHover",
        circular: "circular",
        autoPlay: "autoPlay",
        shouldStopAutoplayByClick: "shouldStopAutoplayByClick",
        transitionInterval: "transitionInterval",
        showThumbnails: "showThumbnails",
        thumbnailsPosition: "thumbnailsPosition",
        verticalThumbnailViewPortHeight: "verticalThumbnailViewPortHeight",
        showIndicators: "showIndicators",
        showIndicatorsOnItem: "showIndicatorsOnItem",
        indicatorsPosition: "indicatorsPosition",
        baseZIndex: "baseZIndex",
        maskClass: "maskClass",
        containerClass: "containerClass",
        containerStyle: "containerStyle",
        showTransitionOptions: "showTransitionOptions",
        hideTransitionOptions: "hideTransitionOptions",
        visible: "visible"
      },
      outputs: {
        activeIndexChange: "activeIndexChange",
        visibleChange: "visibleChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 2,
      consts: [["windowed", ""], ["container", ""], ["mask", ""], [4, "ngIf", "ngIfElse"], [3, "ngClass", "class", 4, "ngIf"], [3, "ngClass"], [3, "value", "activeIndex", "numVisible", "ngStyle", "maskHide", "activeItemChange", 4, "ngIf"], [3, "maskHide", "activeItemChange", "value", "activeIndex", "numVisible", "ngStyle"], [3, "activeItemChange", "value", "activeIndex", "numVisible"]],
      template: function Galleria_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Galleria_div_0_Template, 3, 1, "div", 3)(1, Galleria_ng_template_1_Template, 1, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const windowed_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fullScreen)("ngIfElse", windowed_r4);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, GalleriaContent],
      styles: ["@layer primeng{.p-galleria-content{display:flex;flex-direction:column}.p-galleria-item-wrapper{display:flex;flex-direction:column;position:relative}.p-galleria-item-container{position:relative;display:flex;height:100%}.p-galleria-item-nav{position:absolute;top:50%;margin-top:-.5rem;display:inline-flex;justify-content:center;align-items:center;overflow:hidden}.p-galleria-item-prev{left:0;border-top-left-radius:0;border-bottom-left-radius:0}.p-galleria-item-next{right:0;border-top-right-radius:0;border-bottom-right-radius:0}.p-galleria-item{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{pointer-events:all;opacity:1}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{position:absolute;bottom:0;left:0;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;overflow:auto;flex-shrink:0}.p-galleria-thumbnail-prev,.p-galleria-thumbnail-next{align-self:center;flex:0 0 auto;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-galleria-thumbnail-prev span,.p-galleria-thumbnail-next span{display:flex;justify-content:center;align-items:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden;width:100%}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{overflow:auto;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:.5}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{display:flex;align-items:center;justify-content:center}.p-galleria-indicator>button{display:inline-flex;align-items:center}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{flex-direction:row;align-items:center}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{position:absolute;display:flex;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{top:0;left:0;width:100%;align-items:flex-start}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{right:0;top:0;height:100%;align-items:flex-end}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{bottom:0;left:0;width:100%;align-items:flex-end}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{left:0;top:0;height:100%;align-items:flex-start}.p-galleria-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:transparent;transition-property:background-color}.p-galleria-close{position:absolute;top:0;right:0;display:flex;justify-content:center;align-items:center;overflow:hidden}.p-galleria-mask .p-galleria-item-nav{position:fixed;top:50%;margin-top:-.5rem}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
          transform: 'scale(0.7)',
          opacity: 0
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
          transform: 'scale(0.7)',
          opacity: 0
        }))])])]
      },
      changeDetection: 0
    });
  }
  return Galleria;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let GalleriaContent = /*#__PURE__*/(() => {
  class GalleriaContent {
    galleria;
    cd;
    differs;
    config;
    get activeIndex() {
      return this._activeIndex;
    }
    set activeIndex(activeIndex) {
      this._activeIndex = activeIndex;
    }
    value = [];
    numVisible;
    maskHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    activeItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    closeButton;
    id;
    _activeIndex = 0;
    slideShowActive = true;
    interval;
    styleClass;
    differ;
    constructor(galleria, cd, differs, config) {
      this.galleria = galleria;
      this.cd = cd;
      this.differs = differs;
      this.config = config;
      this.id = this.galleria.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
      this.differ = this.differs.find(this.galleria).create();
    }
    ngDoCheck() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.galleria.platformId)) {
        const changes = this.differ.diff(this.galleria);
        if (changes && changes.forEachItem.length > 0) {
          // Because we change the properties of the parent component,
          // and the children take our entity from the injector.
          // We can tell the children to redraw themselves when we change the properties of the parent component.
          // Since we have an onPush strategy
          this.cd.markForCheck();
        }
      }
    }
    galleriaClass() {
      const thumbnailsPosClass = this.galleria.showThumbnails && this.getPositionClass('p-galleria-thumbnails', this.galleria.thumbnailsPosition);
      const indicatorPosClass = this.galleria.showIndicators && this.getPositionClass('p-galleria-indicators', this.galleria.indicatorsPosition);
      return (this.galleria.containerClass ? this.galleria.containerClass + ' ' : '') + (thumbnailsPosClass ? thumbnailsPosClass + ' ' : '') + (indicatorPosClass ? indicatorPosClass + ' ' : '');
    }
    startSlideShow() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.galleria.platformId)) {
        this.interval = setInterval(() => {
          let activeIndex = this.galleria.circular && this.value.length - 1 === this.activeIndex ? 0 : this.activeIndex + 1;
          this.onActiveIndexChange(activeIndex);
          this.activeIndex = activeIndex;
        }, this.galleria.transitionInterval);
        this.slideShowActive = true;
      }
    }
    stopSlideShow() {
      if (this.galleria.autoPlay && !this.galleria.shouldStopAutoplayByClick) {
        return;
      }
      if (this.interval) {
        clearInterval(this.interval);
      }
      this.slideShowActive = false;
    }
    getPositionClass(preClassName, position) {
      const positions = ['top', 'left', 'bottom', 'right'];
      const pos = positions.find(item => item === position);
      return pos ? `${preClassName}-${pos}` : '';
    }
    isVertical() {
      return this.galleria.thumbnailsPosition === 'left' || this.galleria.thumbnailsPosition === 'right';
    }
    onActiveIndexChange(index) {
      if (this.activeIndex !== index) {
        this.activeIndex = index;
        this.activeItemChange.emit(this.activeIndex);
      }
    }
    closeAriaLabel() {
      return this.config.translation.aria ? this.config.translation.aria.close : undefined;
    }
    static ɵfac = function GalleriaContent_Factory(t) {
      return new (t || GalleriaContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Galleria), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleriaContent,
      selectors: [["p-galleriaContent"]],
      viewQuery: function GalleriaContent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.closeButton = _t.first);
        }
      },
      inputs: {
        activeIndex: "activeIndex",
        value: "value",
        numVisible: "numVisible"
      },
      outputs: {
        maskHide: "maskHide",
        activeItemChange: "activeItemChange"
      },
      decls: 1,
      vars: 1,
      consts: [["pFocusTrap", "", 3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["pFocusTrap", "", 3, "ngClass", "ngStyle"], ["type", "button", "class", "p-galleria-close p-link", "pRipple", "", 3, "click", 4, "ngIf"], ["class", "p-galleria-header", 4, "ngIf"], [1, "p-galleria-content"], [3, "onActiveIndexChange", "startSlideShow", "stopSlideShow", "id", "value", "activeIndex", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "indicatorFacet", "captionFacet", "showItemNavigators", "autoPlay", "slideShowActive"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow", 4, "ngIf"], ["class", "p-galleria-footer", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-galleria-close", "p-link", 3, "click"], [3, "styleClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass"], [1, "p-galleria-header"], ["type", "header", 3, "templates"], [3, "onActiveIndexChange", "stopSlideShow", "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive"], [1, "p-galleria-footer"], ["type", "footer", 3, "templates"]],
      template: function GalleriaContent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaContent_div_0_Template, 7, 28, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value && ctx.value.length > 0);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__.TimesIcon, primeng_focustrap__WEBPACK_IMPORTED_MODULE_8__.FocusTrap, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return GalleriaContent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let GalleriaItemSlot = /*#__PURE__*/(() => {
  class GalleriaItemSlot {
    templates;
    index;
    get item() {
      return this._item;
    }
    set item(item) {
      this._item = item;
      if (this.templates) {
        this.templates.forEach(item => {
          if (item.getType() === this.type) {
            switch (this.type) {
              case 'item':
              case 'caption':
              case 'thumbnail':
                this.context = {
                  $implicit: this.item
                };
                this.contentTemplate = item.template;
                break;
            }
          }
        });
      }
    }
    type;
    contentTemplate;
    context;
    _item;
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        if (item.getType() === this.type) {
          switch (this.type) {
            case 'item':
            case 'caption':
            case 'thumbnail':
              this.context = {
                $implicit: this.item
              };
              this.contentTemplate = item.template;
              break;
            case 'indicator':
              this.context = {
                $implicit: this.index
              };
              this.contentTemplate = item.template;
              break;
            default:
              this.context = {};
              this.contentTemplate = item.template;
              break;
          }
        }
      });
    }
    static ɵfac = function GalleriaItemSlot_Factory(t) {
      return new (t || GalleriaItemSlot)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleriaItemSlot,
      selectors: [["p-galleriaItemSlot"]],
      inputs: {
        templates: "templates",
        index: "index",
        item: "item",
        type: "type"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function GalleriaItemSlot_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaItemSlot_ng_container_0_Template, 2, 2, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentTemplate);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return GalleriaItemSlot;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let GalleriaItem = /*#__PURE__*/(() => {
  class GalleriaItem {
    galleria;
    id;
    circular = false;
    value;
    showItemNavigators = false;
    showIndicators = true;
    slideShowActive = true;
    changeItemOnIndicatorHover = true;
    autoPlay = false;
    templates;
    indicatorFacet;
    captionFacet;
    startSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    stopSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    onActiveIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    get activeIndex() {
      return this._activeIndex;
    }
    set activeIndex(activeIndex) {
      this._activeIndex = activeIndex;
    }
    get activeItem() {
      return this.value && this.value[this._activeIndex];
    }
    _activeIndex = 0;
    constructor(galleria) {
      this.galleria = galleria;
    }
    ngOnChanges({
      autoPlay
    }) {
      if (autoPlay?.currentValue) {
        this.startSlideShow.emit();
      }
      if (autoPlay && autoPlay.currentValue === false) {
        this.stopTheSlideShow();
      }
    }
    next() {
      let nextItemIndex = this.activeIndex + 1;
      let activeIndex = this.circular && this.value.length - 1 === this.activeIndex ? 0 : nextItemIndex;
      this.onActiveIndexChange.emit(activeIndex);
    }
    prev() {
      let prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
      let activeIndex = this.circular && this.activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
      this.onActiveIndexChange.emit(activeIndex);
    }
    stopTheSlideShow() {
      if (this.slideShowActive && this.stopSlideShow) {
        this.stopSlideShow.emit();
      }
    }
    navForward(e) {
      this.stopTheSlideShow();
      this.next();
      if (e && e.cancelable) {
        e.preventDefault();
      }
    }
    navBackward(e) {
      this.stopTheSlideShow();
      this.prev();
      if (e && e.cancelable) {
        e.preventDefault();
      }
    }
    onIndicatorClick(index) {
      this.stopTheSlideShow();
      this.onActiveIndexChange.emit(index);
    }
    onIndicatorMouseEnter(index) {
      if (this.changeItemOnIndicatorHover) {
        this.stopTheSlideShow();
        this.onActiveIndexChange.emit(index);
      }
    }
    onIndicatorKeyDown(event, index) {
      switch (event.code) {
        case 'Enter':
        case 'Space':
          this.stopTheSlideShow();
          this.onActiveIndexChange.emit(index);
          event.preventDefault();
          break;
        case 'ArrowDown':
        case 'ArrowUp':
          event.preventDefault();
          break;
        default:
          break;
      }
    }
    isNavForwardDisabled() {
      return !this.circular && this.activeIndex === this.value.length - 1;
    }
    isNavBackwardDisabled() {
      return !this.circular && this.activeIndex === 0;
    }
    isIndicatorItemActive(index) {
      return this.activeIndex === index;
    }
    ariaSlideLabel() {
      return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.slide : undefined;
    }
    ariaSlideNumber(value) {
      return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.slideNumber.replace(/{slideNumber}/g, value) : undefined;
    }
    ariaPageLabel(value) {
      return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.pageLabel.replace(/{page}/g, value) : undefined;
    }
    static ɵfac = function GalleriaItem_Factory(t) {
      return new (t || GalleriaItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Galleria));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleriaItem,
      selectors: [["p-galleriaItem"]],
      inputs: {
        id: "id",
        circular: "circular",
        value: "value",
        showItemNavigators: "showItemNavigators",
        showIndicators: "showIndicators",
        slideShowActive: "slideShowActive",
        changeItemOnIndicatorHover: "changeItemOnIndicatorHover",
        autoPlay: "autoPlay",
        templates: "templates",
        indicatorFacet: "indicatorFacet",
        captionFacet: "captionFacet",
        activeIndex: "activeIndex"
      },
      outputs: {
        startSlideShow: "startSlideShow",
        stopSlideShow: "stopSlideShow",
        onActiveIndexChange: "onActiveIndexChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 8,
      vars: 11,
      consts: [[1, "p-galleria-item-wrapper"], [1, "p-galleria-item-container"], ["type", "button", "role", "navigation", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], ["role", "group", 3, "id"], ["type", "item", 1, "p-galleria-item", 3, "item", "templates"], ["type", "button", "pRipple", "", "role", "navigation", 3, "ngClass", "disabled", "click", 4, "ngIf"], ["class", "p-galleria-caption", 4, "ngIf"], ["class", "p-galleria-indicators p-reset", 4, "ngIf"], ["type", "button", "role", "navigation", "pRipple", "", 3, "click", "ngClass", "disabled"], [3, "styleClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass"], ["type", "button", "pRipple", "", "role", "navigation", 3, "click", "ngClass", "disabled"], [1, "p-galleria-caption"], ["type", "caption", 3, "item", "templates"], [1, "p-galleria-indicators", "p-reset"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown", 4, "ngFor", "ngForOf"], ["tabindex", "0", 3, "click", "mouseenter", "keydown", "ngClass"], ["type", "button", "tabIndex", "-1", "class", "p-link", 4, "ngIf"], ["type", "indicator", 3, "index", "templates"], ["type", "button", "tabIndex", "-1", 1, "p-link"]],
      template: function GalleriaItem_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleriaItem_button_2_Template, 3, 6, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-galleriaItemSlot", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleriaItem_button_5_Template, 3, 6, "button", 5)(6, GalleriaItem_div_6_Template, 2, 2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GalleriaItem_ul_7_Template, 2, 1, "ul", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showItemNavigators);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", "100%");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id + "_item_" + ctx.activeIndex);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaSlideNumber(ctx.activeIndex + 1))("aria-roledescription", ctx.ariaSlideLabel());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.activeItem)("templates", ctx.templates);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showItemNavigators);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.captionFacet);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIndicators);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_10__.ChevronLeftIcon, GalleriaItemSlot],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return GalleriaItem;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let GalleriaThumbnails = /*#__PURE__*/(() => {
  class GalleriaThumbnails {
    galleria;
    document;
    platformId;
    renderer;
    cd;
    containerId;
    value;
    isVertical = false;
    slideShowActive = false;
    circular = false;
    responsiveOptions;
    contentHeight = '300px';
    showThumbnailNavigators = true;
    templates;
    onActiveIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    stopSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    itemsContainer;
    get numVisible() {
      return this._numVisible;
    }
    set numVisible(numVisible) {
      this._numVisible = numVisible;
      this._oldNumVisible = this.d_numVisible;
      this.d_numVisible = numVisible;
    }
    get activeIndex() {
      return this._activeIndex;
    }
    set activeIndex(activeIndex) {
      this._oldactiveIndex = this._activeIndex;
      this._activeIndex = activeIndex;
    }
    index;
    startPos = null;
    thumbnailsStyle = null;
    sortedResponsiveOptions = null;
    totalShiftedItems = 0;
    page = 0;
    documentResizeListener;
    _numVisible = 0;
    d_numVisible = 0;
    _oldNumVisible = 0;
    _activeIndex = 0;
    _oldactiveIndex = 0;
    constructor(galleria, document, platformId, renderer, cd) {
      this.galleria = galleria;
      this.document = document;
      this.platformId = platformId;
      this.renderer = renderer;
      this.cd = cd;
    }
    ngOnInit() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        this.createStyle();
        if (this.responsiveOptions) {
          this.bindDocumentListeners();
        }
      }
    }
    ngAfterContentChecked() {
      let totalShiftedItems = this.totalShiftedItems;
      if ((this._oldNumVisible !== this.d_numVisible || this._oldactiveIndex !== this._activeIndex) && this.itemsContainer) {
        if (this._activeIndex <= this.getMedianItemIndex()) {
          totalShiftedItems = 0;
        } else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this._activeIndex) {
          totalShiftedItems = this.d_numVisible - this.value.length;
        } else if (this.value.length - this.d_numVisible < this._activeIndex && this.d_numVisible % 2 === 0) {
          totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex() + 1;
        } else {
          totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex();
        }
        if (totalShiftedItems !== this.totalShiftedItems) {
          this.totalShiftedItems = totalShiftedItems;
        }
        if (this.itemsContainer && this.itemsContainer.nativeElement) {
          this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
        }
        if (this._oldactiveIndex !== this._activeIndex) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
          this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
        }
        this._oldactiveIndex = this._activeIndex;
        this._oldNumVisible = this.d_numVisible;
      }
    }
    ngAfterViewInit() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        this.calculatePosition();
      }
    }
    createStyle() {
      if (!this.thumbnailsStyle) {
        this.thumbnailsStyle = this.document.createElement('style');
        this.document.body.appendChild(this.thumbnailsStyle);
      }
      let innerHTML = `
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${100 / this.d_numVisible}%
            }
        `;
      if (this.responsiveOptions) {
        this.sortedResponsiveOptions = [...this.responsiveOptions];
        this.sortedResponsiveOptions.sort((data1, data2) => {
          const value1 = data1.breakpoint;
          const value2 = data2.breakpoint;
          let result = null;
          if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
            numeric: true
          });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
          return -1 * result;
        });
        for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
          let res = this.sortedResponsiveOptions[i];
          innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${100 / res.numVisible}%
                        }
                    }
                `;
        }
      }
      this.thumbnailsStyle.innerHTML = innerHTML;
    }
    calculatePosition() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        if (this.itemsContainer && this.sortedResponsiveOptions) {
          let windowWidth = window.innerWidth;
          let matchedResponsiveData = {
            numVisible: this._numVisible
          };
          for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
            let res = this.sortedResponsiveOptions[i];
            if (parseInt(res.breakpoint, 10) >= windowWidth) {
              matchedResponsiveData = res;
            }
          }
          if (this.d_numVisible !== matchedResponsiveData.numVisible) {
            this.d_numVisible = matchedResponsiveData.numVisible;
            this.cd.markForCheck();
          }
        }
      }
    }
    getTabIndex(index) {
      return this.isItemActive(index) ? 0 : null;
    }
    navForward(e) {
      this.stopTheSlideShow();
      let nextItemIndex = this._activeIndex + 1;
      if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && (-1 * this.totalShiftedItems < this.getTotalPageNumber() - 1 || this.circular)) {
        this.step(-1);
      }
      let activeIndex = this.circular && this.value.length - 1 === this._activeIndex ? 0 : nextItemIndex;
      this.onActiveIndexChange.emit(activeIndex);
      if (e.cancelable) {
        e.preventDefault();
      }
    }
    navBackward(e) {
      this.stopTheSlideShow();
      let prevItemIndex = this._activeIndex !== 0 ? this._activeIndex - 1 : 0;
      let diff = prevItemIndex + this.totalShiftedItems;
      if (this.d_numVisible - diff - 1 > this.getMedianItemIndex() && (-1 * this.totalShiftedItems !== 0 || this.circular)) {
        this.step(1);
      }
      let activeIndex = this.circular && this._activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
      this.onActiveIndexChange.emit(activeIndex);
      if (e.cancelable) {
        e.preventDefault();
      }
    }
    onItemClick(index) {
      this.stopTheSlideShow();
      let selectedItemIndex = index;
      if (selectedItemIndex !== this._activeIndex) {
        const diff = selectedItemIndex + this.totalShiftedItems;
        let dir = 0;
        if (selectedItemIndex < this._activeIndex) {
          dir = this.d_numVisible - diff - 1 - this.getMedianItemIndex();
          if (dir > 0 && -1 * this.totalShiftedItems !== 0) {
            this.step(dir);
          }
        } else {
          dir = this.getMedianItemIndex() - diff;
          if (dir < 0 && -1 * this.totalShiftedItems < this.getTotalPageNumber() - 1) {
            this.step(dir);
          }
        }
        this.activeIndex = selectedItemIndex;
        this.onActiveIndexChange.emit(this.activeIndex);
      }
    }
    onThumbnailKeydown(event, index) {
      if (event.code === 'Enter' || event.code === 'Space') {
        this.onItemClick(index);
        event.preventDefault();
      }
      switch (event.code) {
        case 'ArrowRight':
          this.onRightKey();
          break;
        case 'ArrowLeft':
          this.onLeftKey();
          break;
        case 'Home':
          this.onHomeKey();
          event.preventDefault();
          break;
        case 'End':
          this.onEndKey();
          event.preventDefault();
          break;
        case 'ArrowUp':
        case 'ArrowDown':
          event.preventDefault();
          break;
        case 'Tab':
          this.onTabKey();
          break;
        default:
          break;
      }
    }
    onRightKey() {
      const indicators = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.find(this.itemsContainer.nativeElement, '[data-pc-section="thumbnailitem"]');
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
      const indicators = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.find(this.itemsContainer.nativeElement, '[data-pc-section="thumbnailitem"]');
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, indicators.length - 1);
    }
    onTabKey() {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.find(this.itemsContainer.nativeElement, '[data-pc-section="thumbnailitem"]')];
      const highlightedIndex = indicators.findIndex(ind => primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getAttribute(ind, 'data-p-active') === true);
      const activeIndicator = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.findSingle(this.itemsContainer.nativeElement, '[tabindex="0"]');
      const activeIndex = indicators.findIndex(ind => ind === activeIndicator.parentElement);
      indicators[activeIndex].children[0].tabIndex = '-1';
      indicators[highlightedIndex].children[0].tabIndex = '0';
    }
    findFocusedIndicatorIndex() {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.find(this.itemsContainer.nativeElement, '[data-pc-section="thumbnailitem"]')];
      const activeIndicator = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.findSingle(this.itemsContainer.nativeElement, '[data-pc-section="thumbnailitem"] > [tabindex="0"]');
      return indicators.findIndex(ind => ind === activeIndicator.parentElement);
    }
    changedFocusedIndicator(prevInd, nextInd) {
      const indicators = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.find(this.itemsContainer.nativeElement, '[data-pc-section="thumbnailitem"]');
      indicators[prevInd].children[0].tabIndex = '-1';
      indicators[nextInd].children[0].tabIndex = '0';
      indicators[nextInd].children[0].focus();
    }
    step(dir) {
      let totalShiftedItems = this.totalShiftedItems + dir;
      if (dir < 0 && -1 * totalShiftedItems + this.d_numVisible > this.value.length - 1) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      } else if (dir > 0 && totalShiftedItems > 0) {
        totalShiftedItems = 0;
      }
      if (this.circular) {
        if (dir < 0 && this.value.length - 1 === this._activeIndex) {
          totalShiftedItems = 0;
        } else if (dir > 0 && this._activeIndex === 0) {
          totalShiftedItems = this.d_numVisible - this.value.length;
        }
      }
      if (this.itemsContainer) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
        this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
        this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
      }
      this.totalShiftedItems = totalShiftedItems;
    }
    stopTheSlideShow() {
      if (this.slideShowActive && this.stopSlideShow) {
        this.stopSlideShow.emit();
      }
    }
    changePageOnTouch(e, diff) {
      if (diff < 0) {
        // left
        this.navForward(e);
      } else {
        // right
        this.navBackward(e);
      }
    }
    getTotalPageNumber() {
      return this.value.length > this.d_numVisible ? this.value.length - this.d_numVisible + 1 : 0;
    }
    getMedianItemIndex() {
      let index = Math.floor(this.d_numVisible / 2);
      return this.d_numVisible % 2 ? index : index - 1;
    }
    onTransitionEnd() {
      if (this.itemsContainer && this.itemsContainer.nativeElement) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.addClass(this.itemsContainer.nativeElement, 'p-items-hidden');
        this.itemsContainer.nativeElement.style.transition = '';
      }
    }
    onTouchEnd(e) {
      let touchobj = e.changedTouches[0];
      if (this.isVertical) {
        this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
      } else {
        this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
      }
    }
    onTouchMove(e) {
      if (e.cancelable) {
        e.preventDefault();
      }
    }
    onTouchStart(e) {
      let touchobj = e.changedTouches[0];
      this.startPos = {
        x: touchobj.pageX,
        y: touchobj.pageY
      };
    }
    isNavBackwardDisabled() {
      return !this.circular && this._activeIndex === 0 || this.value.length <= this.d_numVisible;
    }
    isNavForwardDisabled() {
      return !this.circular && this._activeIndex === this.value.length - 1 || this.value.length <= this.d_numVisible;
    }
    firstItemAciveIndex() {
      return this.totalShiftedItems * -1;
    }
    lastItemActiveIndex() {
      return this.firstItemAciveIndex() + this.d_numVisible - 1;
    }
    isItemActive(index) {
      return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
    }
    bindDocumentListeners() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        const window = this.document.defaultView || 'window';
        this.documentResizeListener = this.renderer.listen(window, 'resize', () => {
          this.calculatePosition();
        });
      }
    }
    unbindDocumentListeners() {
      if (this.documentResizeListener) {
        this.documentResizeListener();
        this.documentResizeListener = null;
      }
    }
    ngOnDestroy() {
      if (this.responsiveOptions) {
        this.unbindDocumentListeners();
      }
      if (this.thumbnailsStyle) {
        this.thumbnailsStyle.parentNode?.removeChild(this.thumbnailsStyle);
      }
    }
    ariaPrevButtonLabel() {
      return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.prevPageLabel : undefined;
    }
    ariaNextButtonLabel() {
      return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.nextPageLabel : undefined;
    }
    ariaPageLabel(value) {
      return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.pageLabel.replace(/{page}/g, value) : undefined;
    }
    static ɵfac = function GalleriaThumbnails_Factory(t) {
      return new (t || GalleriaThumbnails)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Galleria), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleriaThumbnails,
      selectors: [["p-galleriaThumbnails"]],
      viewQuery: function GalleriaThumbnails_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c11, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsContainer = _t.first);
        }
      },
      inputs: {
        containerId: "containerId",
        value: "value",
        isVertical: "isVertical",
        slideShowActive: "slideShowActive",
        circular: "circular",
        responsiveOptions: "responsiveOptions",
        contentHeight: "contentHeight",
        showThumbnailNavigators: "showThumbnailNavigators",
        templates: "templates",
        numVisible: "numVisible",
        activeIndex: "activeIndex"
      },
      outputs: {
        onActiveIndexChange: "onActiveIndexChange",
        stopSlideShow: "stopSlideShow"
      },
      decls: 8,
      vars: 6,
      consts: [["itemsContainer", ""], [1, "p-galleria-thumbnail-wrapper"], [1, "p-galleria-thumbnail-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "p-galleria-thumbnail-items-container", 3, "ngStyle"], ["role", "tablist", 1, "p-galleria-thumbnail-items", 3, "transitionend", "touchstart", "touchmove"], [3, "ngClass", "keydown", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 3, "click", "ngClass", "disabled"], [4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [3, "keydown", "ngClass"], [1, "p-galleria-thumbnail-item-content", 3, "click", "touchend", "keydown.enter"], ["type", "thumbnail", 3, "item", "templates"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"]],
      template: function GalleriaThumbnails_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleriaThumbnails_button_2_Template, 3, 7, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4)(4, "div", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function GalleriaThumbnails_Template_div_transitionend_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onTransitionEnd());
          })("touchstart", function GalleriaThumbnails_Template_div_touchstart_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onTouchStart($event));
          })("touchmove", function GalleriaThumbnails_Template_div_touchmove_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onTouchMove($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GalleriaThumbnails_div_6_Template, 3, 15, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GalleriaThumbnails_button_7_Template, 3, 7, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showThumbnailNavigators);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c12, ctx.isVertical ? ctx.contentHeight : ""));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showThumbnailNavigators);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_10__.ChevronLeftIcon, GalleriaItemSlot],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return GalleriaThumbnails;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let GalleriaModule = /*#__PURE__*/(() => {
  class GalleriaModule {
    static ɵfac = function GalleriaModule_Factory(t) {
      return new (t || GalleriaModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GalleriaModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__.TimesIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_10__.ChevronLeftIcon, primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_11__.WindowMaximizeIcon, primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_12__.WindowMinimizeIcon, primeng_focustrap__WEBPACK_IMPORTED_MODULE_8__.FocusTrapModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
  return GalleriaModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=747.js.map