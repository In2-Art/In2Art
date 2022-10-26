(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["default-src_app_in2art_components__tools_image-croper_image_croper_module_ts"], {
    /***/
    27723: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImageCroperComponent": function ImageCroperComponent() {
          return (
            /* binding */
            _ImageCroperComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-image-cropper */
      55819);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _shared_directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/directives/only-numbers.directive */
      5262);

      var _c0 = ["input"];

      var _ImageCroperComponent = /*#__PURE__*/function () {
        function _ImageCroperComponent() {
          _classCallCheck(this, _ImageCroperComponent);

          this.imageChangedEvent = '';
          this.croppedImage = '';
          this.canvasRotation = 0;
          this.rotation = 0;
          this.scale = 1;
          this.showCropper = false;
          this.containWithinAspectRatio = false;
          this.transform = {};
        }

        _createClass(_ImageCroperComponent, [{
          key: "fileChangeEvent",
          value: function fileChangeEvent(event) {
            this.imageChangedEvent = event;
          }
        }, {
          key: "imageCropped",
          value: function imageCropped(event) {
            this.croppedImage = event.base64;
            console.log(event, (0, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_1__.base64ToFile)(event.base64));
          }
        }, {
          key: "imageLoaded",
          value: function imageLoaded() {
            this.showCropper = true;
            console.log('Image loaded');
          }
        }, {
          key: "cropperReady",
          value: function cropperReady(sourceImageDimensions) {
            console.log('Cropper ready', sourceImageDimensions);
          }
        }, {
          key: "loadImageFailed",
          value: function loadImageFailed() {
            console.log('Load failed');
          }
        }, {
          key: "rotateLeft",
          value: function rotateLeft() {
            this.canvasRotation--;
            this.flipAfterRotate();
          }
        }, {
          key: "rotateRight",
          value: function rotateRight() {
            this.canvasRotation++;
            this.flipAfterRotate();
          }
        }, {
          key: "flipAfterRotate",
          value: function flipAfterRotate() {
            var flippedH = this.transform.flipH;
            var flippedV = this.transform.flipV;
            this.transform = Object.assign(Object.assign({}, this.transform), {
              flipH: flippedV,
              flipV: flippedH
            });
          }
        }, {
          key: "flipHorizontal",
          value: function flipHorizontal() {
            this.transform = Object.assign(Object.assign({}, this.transform), {
              flipH: !this.transform.flipH
            });
          }
        }, {
          key: "flipVertical",
          value: function flipVertical() {
            this.transform = Object.assign(Object.assign({}, this.transform), {
              flipV: !this.transform.flipV
            });
          } // resetImage() {
          //     this.scale = 1;
          //     this.rotation = 0;
          //     this.canvasRotation = 0;
          //     this.transform = {};
          // }

        }, {
          key: "zoomOut",
          value: function zoomOut() {
            this.scale -= .1;
            this.transform = Object.assign(Object.assign({}, this.transform), {
              scale: this.scale
            });
          }
        }, {
          key: "zoomIn",
          value: function zoomIn() {
            this.scale += .1;
            this.transform = Object.assign(Object.assign({}, this.transform), {
              scale: this.scale
            });
          }
        }, {
          key: "toggleContainWithinAspectRatio",
          value: function toggleContainWithinAspectRatio() {
            this.containWithinAspectRatio = !this.containWithinAspectRatio;
          }
        }, {
          key: "updateRotation",
          value: function updateRotation() {
            this.transform = Object.assign(Object.assign({}, this.transform), {
              rotate: this.rotation
            });
          }
        }, {
          key: "removePhoto",
          value: function removePhoto() {
            this.input.nativeElement.value = "";
            this.fileChangeEvent(null);
            this.croppedImage = null;
          }
        }, {
          key: "mostrarBotons",
          value: function mostrarBotons() {
            if (!this.input) return false;
            return this.input.nativeElement.value;
          }
        }]);

        return _ImageCroperComponent;
      }();

      _ImageCroperComponent.ɵfac = function ImageCroperComponent_Factory(t) {
        return new (t || _ImageCroperComponent)();
      };

      _ImageCroperComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ImageCroperComponent,
        selectors: [["app-image-croper"]],
        viewQuery: function ImageCroperComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
          }
        },
        decls: 30,
        vars: 28,
        consts: function consts() {
          var i18n_1;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Choose_Your_Image$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_2 = goog.getMsg("Choose Your Image");
            i18n_1 = MSG_EXTERNAL_Choose_Your_Image$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_2;
          } else {
            i18n_1 = "Tria la teva imatge";
          }

          var i18n_3;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Rotate_left$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_4 = goog.getMsg("Rotate left");
            i18n_3 = MSG_EXTERNAL_Rotate_left$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_4;
          } else {
            i18n_3 = "Gira a l'esquerre";
          }

          var i18n_5;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Rotate_right$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_6 = goog.getMsg("Rotate right");
            i18n_5 = MSG_EXTERNAL_Rotate_right$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_6;
          } else {
            i18n_5 = "Gira a la dreta";
          }

          var i18n_7;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Flip_horizontal$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_8 = goog.getMsg("Flip horizontal");
            i18n_7 = MSG_EXTERNAL_Flip_horizontal$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_8;
          } else {
            i18n_7 = "Gira horitzontalment";
          }

          var i18n_9;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Flip_vertical$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_10 = goog.getMsg("Flip vertical");
            i18n_9 = MSG_EXTERNAL_Flip_vertical$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_10;
          } else {
            i18n_9 = "Gira verticalment";
          }

          var i18n_11;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Contain_Fill_Aspect_Ratio$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_12 = goog.getMsg(" {$interpolation} ", {
              "interpolation": "\uFFFD0\uFFFD"
            });
            i18n_11 = MSG_EXTERNAL_Contain_Fill_Aspect_Ratio$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_12;
          } else {
            i18n_11 = " {{containWithinAspectRatio?'Emplena la relaci\xF3 d'aspecte':'Contingues dins la relaci\xF3 d'aspecte'} ";
          }

          var i18n_13;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Remove_photo$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_14 = goog.getMsg("Remove photo");
            i18n_13 = MSG_EXTERNAL_Remove_photo$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_14;
          } else {
            i18n_13 = "Elimina foto";
          }

          var i18n_15;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Rotation$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_16 = goog.getMsg("Rotation");
            i18n_15 = MSG_EXTERNAL_Rotation$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_16;
          } else {
            i18n_15 = "Rotaci\xF3";
          }

          var i18n_17;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Rotation$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_18 = goog.getMsg("Rotation");
            i18n_17 = MSG_EXTERNAL_Rotation$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_18;
          } else {
            i18n_17 = "Rotaci\xF3";
          }

          var i18n_19;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_ZoomMinus$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_20 = goog.getMsg("Zoom -");
            i18n_19 = MSG_EXTERNAL_ZoomMinus$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_20;
          } else {
            i18n_19 = "Zoom -";
          }

          var i18n_21;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_ZoomPlus$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_22 = goog.getMsg("Zoom +");
            i18n_21 = MSG_EXTERNAL_ZoomPlus$$SRC_APP_IN2ART_COMPONENTS__TOOLS_IMAGE_CROPER_IMAGE_CROPER_COMPONENT_TS_22;
          } else {
            i18n_21 = "Zoom -";
          }

          return [["format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "containWithinAspectRatio", "aspectRatio", "resizeToWidth", "cropperMinWidth", "onlyScaleDown", "roundCropper", "canvasRotation", "transform", "alignImage", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"], [1, "boto-showcase"], [1, "image-cropper-btn"], ["placeholder", i18n_1, "type", "file", 1, "btn", "inputImage", 3, "change"], ["input", ""], [1, "text-center", "my-2"], [1, "croppedImage", "shadow-4", 3, "src"], [1, "boto", "botoSecundari", "botoPetit", 3, "click"], i18n_3, i18n_5, i18n_7, i18n_9, i18n_11, [1, "boto", "botoVermell", "botoPetit", 3, "click"], i18n_13, ["for", "rotation", 1, "col-form-label"], i18n_15, ["placeholder", i18n_17, "type", "text", "onlyNumbers", "", 1, "btn", "ml-2", 3, "ngModel", "ngModelChange", "keyup"], i18n_19, i18n_21];
        },
        template: function ImageCroperComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "image-cropper", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("imageCropped", function ImageCroperComponent_Template_image_cropper_imageCropped_0_listener($event) {
              return ctx.imageCropped($event);
            })("imageLoaded", function ImageCroperComponent_Template_image_cropper_imageLoaded_0_listener() {
              return ctx.imageLoaded();
            })("cropperReady", function ImageCroperComponent_Template_image_cropper_cropperReady_0_listener($event) {
              return ctx.cropperReady($event);
            })("loadImageFailed", function ImageCroperComponent_Template_image_cropper_loadImageFailed_0_listener() {
              return ctx.loadImageFailed();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ImageCroperComponent_Template_input_change_3_listener($event) {
              return ctx.fileChangeEvent($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageCroperComponent_Template_button_click_8_listener() {
              return ctx.rotateLeft();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](9, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageCroperComponent_Template_button_click_10_listener() {
              return ctx.rotateRight();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](11, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageCroperComponent_Template_button_click_12_listener() {
              return ctx.flipHorizontal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](13, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageCroperComponent_Template_button_click_14_listener() {
              return ctx.flipVertical();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](15, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageCroperComponent_Template_button_click_17_listener() {
              return ctx.toggleContainWithinAspectRatio();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](18, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageCroperComponent_Template_button_click_19_listener() {
              return ctx.removePhoto();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](20, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](23, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImageCroperComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.rotation = $event;
            })("keyup", function ImageCroperComponent_Template_input_keyup_24_listener() {
              return ctx.updateRotation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageCroperComponent_Template_button_click_26_listener() {
              return ctx.zoomOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](27, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageCroperComponent_Template_button_click_28_listener() {
              return ctx.zoomIn();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](29, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.showCropper ? null : "none")("display", ctx.mostrarBotons() ? "block" : "none");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("imageChangedEvent", ctx.imageChangedEvent)("maintainAspectRatio", true)("containWithinAspectRatio", ctx.containWithinAspectRatio)("aspectRatio", 1 / 1)("resizeToWidth", 256)("cropperMinWidth", 128)("onlyScaleDown", true)("roundCropper", false)("canvasRotation", ctx.canvasRotation)("transform", ctx.transform)("alignImage", "left");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.mostrarBotons() ? "block" : "none");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.croppedImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.mostrarBotons() ? "block" : "none");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.mostrarBotons() ? "block" : "none");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nExp"](ctx.containWithinAspectRatio ? "Fill Aspect Ratio" : "Contain Within Aspect Ratio");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nApply"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.mostrarBotons() ? "block" : "none");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.rotation);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.mostrarBotons() ? "block" : "none");
          }
        },
        directives: [ngx_image_cropper__WEBPACK_IMPORTED_MODULE_1__.ImageCropperComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _shared_directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_0__.OnlyNumbersDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
        styles: [".btn[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n\ninput.btn[_ngcontent-%COMP%], input.btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n}\n\n.btn-showcase[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ninput.btn[_ngcontent-%COMP%] {\n  border-color: inherit;\n}\n\n.inputImage[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.croppedImage[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  margin-bottom: 36px;\n  border-radius: 10000px;\n}\n\n[_nghost-%COMP%]     .overlay {\n  outline: none !important;\n}\n\n[_nghost-%COMP%]     .cropper {\n  border-radius: 10000px;\n  outline-color: rgba(34, 34, 34, 0.3) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLWNyb3Blci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSx3QkFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFBQTtFQUNJLHFCQUFBO0FBR0o7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFHSjs7QUFBQTtFQUNJLHdCQUFBO0FBR0o7O0FBREE7RUFDSSxzQkFBQTtFQUNBLCtDQUFBO0FBSUoiLCJmaWxlIjoiaW1hZ2UtY3JvcGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbmlucHV0LmJ0biwgaW5wdXQuYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcclxufVxyXG5cclxuLmJ0bi1zaG93Y2FzZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW5wdXQuYnRuIHtcclxuICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLmlucHV0SW1hZ2Uge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uY3JvcHBlZEltYWdlIHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMDBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5vdmVybGF5IHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmNyb3BwZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMDBweDtcclxuICAgIG91dGxpbmUtY29sb3I6IHJnYigzNCwgMzQsIDM0LCAwLjMpICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    73101: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImageCroperModule": function ImageCroperModule() {
          return (
            /* binding */
            _ImageCroperModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../shared/shared.module */
      44466);
      /* harmony import */


      var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-image-cropper */
      55819);
      /* harmony import */


      var _image_croper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./image-croper.component */
      27723);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ImageCroperModule = function _ImageCroperModule() {
        _classCallCheck(this, _ImageCroperModule);
      };

      _ImageCroperModule.ɵfac = function ImageCroperModule_Factory(t) {
        return new (t || _ImageCroperModule)();
      };

      _ImageCroperModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _ImageCroperModule
      });
      _ImageCroperModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__.ImageCropperModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_ImageCroperModule, {
          declarations: [_image_croper_component__WEBPACK_IMPORTED_MODULE_1__.ImageCroperComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__.ImageCropperModule],
          exports: [_image_croper_component__WEBPACK_IMPORTED_MODULE_1__.ImageCroperComponent]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default-src_app_in2art_components__tools_image-croper_image_croper_module_ts-es5.js.map