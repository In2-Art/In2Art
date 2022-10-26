(function () {
  var _templateObject, _templateObject2;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_in2art_pages_presentation_presentation_module_ts"], {
    /***/
    6662: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CarouselComponent": function CarouselComponent() {
          return (
            /* binding */
            _CarouselComponent
          );
        },

        /* harmony export */
        "IvyCarouselModule": function IvyCarouselModule() {
          return (
            /* binding */
            _IvyCarouselModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function CarouselComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.counter);
        }
      }

      function CarouselComponent_ng_template_5_div_0_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
        }

        if (rf & 2) {
          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("object-fit", ctx_r8.objectFit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.getImage(i_r6)["image"]["path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CarouselComponent_ng_template_5_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ng_template_5_div_0_img_1_Template, 1, 3, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r7.getCellWidth() + "px")("border-radius", ctx_r7.borderRadius + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getImage(i_r6) && ctx_r7.getImage(i_r6)["image"]);
        }
      }

      function CarouselComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_ng_template_5_div_0_Template, 2, 5, "div", 8);
        }

        if (rf & 2) {
          var i_r6 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r6 < ctx_r2.cellLimit);
        }
      }

      function CarouselComponent_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
        }

        if (rf & 2) {
          var i_r13 = ctx.index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-dot-active", i_r13 === ctx_r11.activeDotIndex);
        }
      }

      function CarouselComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_6_div_1_Template, 1, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.dotsArr);
        }
      }

      function CarouselComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_7_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.prev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_7_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-arrows-outside", ctx_r4.arrowsOutside)("carousel-dark-arrows", ctx_r4.arrowsTheme === "dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-arrow-disabled", ctx_r4.isPrevArrowDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-arrow-disabled", ctx_r4.isNextArrowDisabled());
        }
      }

      var _c0 = ["*"];

      var Touches = /*#__PURE__*/function () {
        function Touches(properties) {
          var _this = this;

          _classCallCheck(this, Touches);

          this.eventType = undefined;
          this.handlers = {};
          this.startX = 0;
          this.startY = 0;
          this.lastTap = 0;
          this.doubleTapMinTimeout = 300;
          this.tapMinTimeout = 200;
          this.touchstartTime = 0;
          this.i = 0;
          this.isMousedown = false;
          this._touchListeners = {
            "touchstart": "handleTouchstart",
            "touchmove": "handleTouchmove",
            "touchend": "handleTouchend"
          };
          this._mouseListeners = {
            "mousedown": "handleMousedown",
            "mousemove": "handleMousemove",
            "mouseup": "handleMouseup",
            "wheel": "handleWheel"
          };
          this._otherListeners = {
            "resize": "handleResize"
          };
          /*
           * Listeners
           */

          /* Touchstart */

          this.handleTouchstart = function (event) {
            _this.elementPosition = _this.getElementPosition();
            _this.touchstartTime = new Date().getTime();

            if (_this.eventType === undefined) {
              _this.getTouchstartPosition(event);
            }

            _this.runHandler("touchstart", event);
          };
          /* Touchmove */


          this.handleTouchmove = function (event) {
            var touches = event.touches; // Pan

            if (_this.detectPan(touches)) {
              _this.runHandler("pan", event);
            } // Pinch


            if (_this.detectPinch(event)) {
              _this.runHandler("pinch", event);
            } // Linear swipe


            switch (_this.detectLinearSwipe(event)) {
              case "horizontal-swipe":
                event.swipeType = "horizontal-swipe";

                _this.runHandler("horizontal-swipe", event);

                break;

              case "vertical-swipe":
                event.swipeType = "vertical-swipe";

                _this.runHandler("vertical-swipe", event);

                break;
            } // Linear swipe


            if (_this.detectLinearSwipe(event) || _this.eventType === 'horizontal-swipe' || _this.eventType === 'vertical-swipe') {
              _this.handleLinearSwipe(event);
            }
          };
          /* Touchend */


          this.handleTouchend = function (event) {
            var touches = event.touches; // Double Tap

            if (_this.detectDoubleTap()) {
              _this.runHandler("double-tap", event);
            } // Tap


            _this.detectTap();

            _this.runHandler("touchend", event);

            _this.eventType = 'touchend';

            if (touches && touches.length === 0) {
              _this.eventType = undefined;
              _this.i = 0;
            }
          };
          /* Mousedown */


          this.handleMousedown = function (event) {
            _this.isMousedown = true;
            _this.elementPosition = _this.getElementPosition();
            _this.touchstartTime = new Date().getTime();

            if (_this.eventType === undefined) {
              _this.getMousedownPosition(event);
            }

            _this.runHandler("mousedown", event);
          };
          /* Mousemove */


          this.handleMousemove = function (event) {
            //event.preventDefault();
            if (!_this.isMousedown) {
              return;
            } // Pan


            _this.runHandler("pan", event); // Linear swipe


            switch (_this.detectLinearSwipe(event)) {
              case "horizontal-swipe":
                event.swipeType = "horizontal-swipe";

                _this.runHandler("horizontal-swipe", event);

                break;

              case "vertical-swipe":
                event.swipeType = "vertical-swipe";

                _this.runHandler("vertical-swipe", event);

                break;
            } // Linear swipe


            if (_this.detectLinearSwipe(event) || _this.eventType === 'horizontal-swipe' || _this.eventType === 'vertical-swipe') {
              _this.handleLinearSwipe(event);
            }
          };
          /* Mouseup */


          this.handleMouseup = function (event) {
            // Tap
            _this.detectTap();

            _this.isMousedown = false;

            _this.runHandler("mouseup", event);

            _this.eventType = undefined;
            _this.i = 0;
          };
          /* Wheel */


          this.handleWheel = function (event) {
            _this.runHandler("wheel", event);
          };
          /* Resize */


          this.handleResize = function (event) {
            _this.runHandler("resize", event);
          };

          this.properties = properties;
          this.element = this.properties.element;
          this.elementPosition = this.getElementPosition();
          this.toggleEventListeners('addEventListener');
        }

        _createClass(Touches, [{
          key: "touchListeners",
          get: function get() {
            return this.properties.touchListeners ? this.properties.touchListeners : this._touchListeners;
          }
        }, {
          key: "mouseListeners",
          get: function get() {
            return this.properties.mouseListeners ? this.properties.mouseListeners : this._mouseListeners;
          }
        }, {
          key: "otherListeners",
          get: function get() {
            return this.properties.otherListeners ? this.properties.otherListeners : this._otherListeners;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.toggleEventListeners('removeEventListener');
          }
        }, {
          key: "toggleEventListeners",
          value: function toggleEventListeners(action) {
            var listeners;

            if (this.properties.listeners === 'mouse and touch') {
              listeners = Object.assign(this.touchListeners, this.mouseListeners);
            } else {
              listeners = this.detectTouchScreen() ? this.touchListeners : this.mouseListeners;
            }

            if (this.properties.resize) {
              listeners = Object.assign(listeners, this.otherListeners);
            }

            for (var listener in listeners) {
              var handler = listeners[listener]; // Window

              if (listener === "resize") {
                if (action === 'addEventListener') {
                  window.addEventListener(listener, this[handler], false);
                }

                if (action === 'removeEventListener') {
                  window.removeEventListener(listener, this[handler], false);
                } // Document

              } else if (listener === 'mouseup' || listener === "mousemove") {
                if (action === 'addEventListener') {
                  document.addEventListener(listener, this[handler], {
                    passive: false
                  });
                }

                if (action === 'removeEventListener') {
                  document.removeEventListener(listener, this[handler], false);
                } // Element

              } else {
                if (action === 'addEventListener') {
                  this.element.addEventListener(listener, this[handler], false);
                }

                if (action === 'removeEventListener') {
                  this.element.removeEventListener(listener, this[handler], false);
                }
              }
            }
          }
        }, {
          key: "addEventListeners",
          value: function addEventListeners(listener) {
            var handler = this._mouseListeners[listener];
            window.addEventListener(listener, this[handler], false);
          }
        }, {
          key: "removeEventListeners",
          value: function removeEventListeners(listener) {
            var handler = this._mouseListeners[listener];
            window.removeEventListener(listener, this[handler], false);
          }
        }, {
          key: "handleLinearSwipe",
          value: function handleLinearSwipe(event) {
            //event.preventDefault();
            this.i++;

            if (this.i > 3) {
              this.eventType = this.getLinearSwipeType(event);
            }

            if (this.eventType === 'horizontal-swipe') {
              this.runHandler('horizontal-swipe', event);
            }

            if (this.eventType === 'vertical-swipe') {
              this.runHandler('vertical-swipe', event);
            }
          }
        }, {
          key: "runHandler",
          value: function runHandler(eventName, response) {
            if (this.handlers[eventName]) {
              this.handlers[eventName](response);
            }
          }
          /*
           * Detection
           */

        }, {
          key: "detectPan",
          value: function detectPan(touches) {
            return touches.length === 1 && !this.eventType || this.eventType === 'pan';
          }
        }, {
          key: "detectDoubleTap",
          value: function detectDoubleTap() {
            var _this2 = this;

            if (this.eventType != undefined) {
              return;
            }

            var currentTime = new Date().getTime();
            var tapLength = currentTime - this.lastTap;
            clearTimeout(this.doubleTapTimeout);

            if (tapLength < this.doubleTapMinTimeout && tapLength > 0) {
              return true;
            } else {
              this.doubleTapTimeout = setTimeout(function () {
                clearTimeout(_this2.doubleTapTimeout);
              }, this.doubleTapMinTimeout);
            }

            this.lastTap = currentTime;
            return undefined;
          }
        }, {
          key: "detectTap",
          value: function detectTap() {
            if (this.eventType != undefined) {
              return;
            }

            var currentTime = new Date().getTime();
            var tapLength = currentTime - this.touchstartTime;

            if (tapLength > 0) {
              if (tapLength < this.tapMinTimeout) {
                this.runHandler("tap", event);
              } else {
                this.runHandler("longtap", event);
              }
            }
          }
        }, {
          key: "detectPinch",
          value: function detectPinch(event) {
            var touches = event.touches;
            return touches.length === 2 && this.eventType === undefined || this.eventType === 'pinch';
          }
        }, {
          key: "detectLinearSwipe",
          value: function detectLinearSwipe(event) {
            var touches = event.touches;

            if (touches) {
              if (touches.length === 1 && !this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
              }
            } else {
              if (!this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
              }
            }

            return undefined;
          }
        }, {
          key: "getLinearSwipeType",
          value: function getLinearSwipeType(event) {
            if (this.eventType !== 'horizontal-swipe' && this.eventType !== 'vertical-swipe') {
              var movementX = Math.abs(this.moveLeft(0, event) - this.startX);
              var movementY = Math.abs(this.moveTop(0, event) - this.startY);

              if (movementY * 3 > movementX) {
                return 'vertical-swipe';
              } else {
                return 'horizontal-swipe';
              }
            } else {
              return this.eventType;
            }
          }
        }, {
          key: "getElementPosition",
          value: function getElementPosition() {
            return this.element.getBoundingClientRect();
          }
        }, {
          key: "getTouchstartPosition",
          value: function getTouchstartPosition(event) {
            this.startX = event.touches[0].clientX - this.elementPosition.left;
            this.startY = event.touches[0].clientY - this.elementPosition.top;
          }
        }, {
          key: "getMousedownPosition",
          value: function getMousedownPosition(event) {
            this.startX = event.clientX - this.elementPosition.left;
            this.startY = event.clientY - this.elementPosition.top;
          }
        }, {
          key: "moveLeft",
          value: function moveLeft(index, event) {
            var touches = event.touches;

            if (touches) {
              return touches[index].clientX - this.elementPosition.left;
            } else {
              return event.clientX - this.elementPosition.left;
            }
          }
        }, {
          key: "moveTop",
          value: function moveTop(index, event) {
            var touches = event.touches;

            if (touches) {
              return touches[index].clientY - this.elementPosition.top;
            } else {
              return event.clientY - this.elementPosition.top;
            }
          }
        }, {
          key: "detectTouchScreen",
          value: function detectTouchScreen() {
            var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

            var mq = function mq(query) {
              return window.matchMedia(query).matches;
            };

            if ('ontouchstart' in window) {
              return true;
            } // include the 'heartz' as a way to have a non matching MQ to help terminate the join
            // https://git.io/vznFH


            var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            return mq(query);
          }
          /* Public properties and methods */

        }, {
          key: "on",
          value: function on(event, handler) {
            if (event) {
              this.handlers[event] = handler;
            }
          }
        }]);

        return Touches;
      }();

      var Carousel = /*#__PURE__*/function () {
        function Carousel(properties, utils, cells, container, slide) {
          var _this3 = this;

          _classCallCheck(this, Carousel);

          this.properties = properties;
          this.utils = utils;
          this.cells = cells;
          this.container = container;
          this.slide = slide;
          /* The slide length has been limited by the limitSlideLength() method */

          this.isSlideLengthLimited = false;
          this.isContentImages = true;
          this.isLazyLoad = true;
          this.isContainerLocked = true;
          this.alignCells = "left";
          this.initialContainerPosition = 0;
          this.containerPullLimit = 100;

          this.handleTouchstart = function (event) {
            _this3.container.handleTouchstart();

            _this3.slide.handleTouchstart(event);
          };

          this.handleHorizontalSwipe = function (event) {
            _this3.container.handleHorizontalSwipe();
          };

          this.handleTouchend = function (event) {
            if (_this3.properties.freeScroll) {
              _this3.container.handleTouchend();
            } else {
              _this3.container.handleTouchend(true);

              _this3.slide.handleTouchend(event);
            }
          };

          this.isNextArrowDisabled = function () {
            return _this3.slide.isNextArrowDisabled();
          };

          this.isPrevArrowDisabled = function () {
            return _this3.slide.isPrevArrowDisabled();
          };

          this.init();
        }

        _createClass(Carousel, [{
          key: "cellLength",
          get: function get() {
            return this.cells.cellLength;
          }
        }, {
          key: "cellLengthInLightDOMMode",
          get: function get() {
            if (this.images) {
              var cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;

              if (cellLength > this.images.length) {
                cellLength = this.images.length;
              }

              return cellLength;
            } else {
              return this.cellLength;
            }
          }
        }, {
          key: "lastCellIndex",
          get: function get() {
            return this.images.length ? this.images.length - 1 : this.cells.cellLength - 1;
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            return this.utils.overflowCellsLimit;
          }
        }, {
          key: "cellLimit",
          get: function get() {
            if (this.isLightDOM) {
              var cellLimit = this.numberOfVisibleCells + this.overflowCellsLimit * 2;

              if (cellLimit < this.numberOfVisibleCells) {
                cellLimit = this.numberOfVisibleCells;
              }

              return cellLimit;
            } else {
              return this.properties.images.length;
            }
          }
        }, {
          key: "isLightDOM",
          get: function get() {
            return this.properties.lightDOM || this.properties.loop;
          }
        }, {
          key: "images",
          get: function get() {
            return this.properties.images;
          }
        }, {
          key: "margin",
          get: function get() {
            return this.properties.margin;
          }
        }, {
          key: "minSwipeDistance",
          get: function get() {
            return this.properties.minSwipeDistance;
          }
        }, {
          key: "transitionDuration",
          get: function get() {
            return this.properties.transitionDuration;
          }
        }, {
          key: "transitionTimingFunction",
          get: function get() {
            return this.properties.transitionTimingFunction;
          }
        }, {
          key: "fullCellWidth",
          get: function get() {
            return this.properties.cellWidth + this.margin;
          }
        }, {
          key: "numberOfVisibleCells",
          get: function get() {
            return this.utils.numberOfVisibleCells;
          }
        }, {
          key: "lapCounter",
          get: function get() {
            return Math.floor(this.slide.counter / this.cellLengthInLightDOMMode);
          }
        }, {
          key: "slideCounter",
          get: function get() {
            return this.slide.counter;
          }
        }, {
          key: "updateProperties",
          value: function updateProperties(properties) {
            this.properties = properties;
          }
        }, {
          key: "init",
          value: function init() {
            this.cellsElement = this.properties.cellsElement;
            this.visibleWidth = this.properties.visibleWidth || this.cellsElement.parentElement.clientWidth;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            clearInterval(this.autoplayId);
          }
        }, {
          key: "lineUpCells",
          value: function lineUpCells() {
            this.cells.lineUp();
          }
        }, {
          key: "handleTransitionend",
          value: function handleTransitionend() {
            this.slide.handleTransitionend();
          }
        }, {
          key: "getImage",
          value: function getImage(index) {
            return this.cells.getImage(index);
          }
        }, {
          key: "next",
          value: function next() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            if (!this.isNextArrowDisabled()) {
              this.slide.next(length);
            }
          }
        }, {
          key: "prev",
          value: function prev() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            this.slide.prev(length);
          }
        }, {
          key: "autoplay",
          value: function autoplay() {
            var _this4 = this;

            this.autoplayId = setInterval(function () {
              _this4.next();
            }, this.properties.autoplayInterval);
          }
        }, {
          key: "stopAutoplay",
          value: function stopAutoplay() {
            if (this.autoplayId) {
              clearInterval(this.autoplayId);
            }
          }
        }]);

        return Carousel;
      }();

      var Container = /*#__PURE__*/function () {
        function Container(carouselProperties, utils, cells) {
          _classCallCheck(this, Container);

          this.carouselProperties = carouselProperties;
          this.utils = utils;
          this.cells = cells;
          /* The index of the new position relative to
           * the active index, for example -1 or +1
           */

          this.newPositionIndex = 0;
          this.isPositionCorrection = false;
          this.initialPositionX = 0;
          this.initialElementPositionX = 0;
          this.isLocked = true;
          this.pullLimit = 100;
          this.startTime = 0;
          this.startX = 0;
          this.moveX = 0;
          this.isSwipeInProgress = false;
          this.init();
        }

        _createClass(Container, [{
          key: "visibleWidth",
          get: function get() {
            return this.utils.visibleWidth;
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            return this.utils.overflowCellsLimit;
          }
        }, {
          key: "images",
          get: function get() {
            return this.carouselProperties.images;
          }
        }, {
          key: "element",
          get: function get() {
            return this.carouselProperties.cellsElement;
          }
        }, {
          key: "freeScroll",
          get: function get() {
            return this.carouselProperties.freeScroll;
          }
        }, {
          key: "fullCellWidth",
          get: function get() {
            return this.carouselProperties.cellWidth + this.carouselProperties.margin;
          }
        }, {
          key: "numberOfVisibleCells",
          get: function get() {
            return this.utils.numberOfVisibleCells;
          }
        }, {
          key: "transitionDuration",
          get: function get() {
            return this.carouselProperties.transitionDuration;
          }
        }, {
          key: "transitionTimingFunction",
          get: function get() {
            return this.carouselProperties.transitionTimingFunction;
          }
        }, {
          key: "cellLength",
          get: function get() {
            if (this.images) {
              return this.images.length;
            } else {
              return this.cells.cellLength;
            }
          }
        }, {
          key: "cellLengthInLightDOMMode",
          get: function get() {
            if (this.images) {
              var cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;

              if (cellLength > this.images.length) {
                cellLength = this.images.length;
              }

              return cellLength;
            } else {
              return this.cellLength;
            }
          }
        }, {
          key: "tooFewCells",
          get: function get() {
            return this.numberOfVisibleCells > this.cellLength;
          }
        }, {
          key: "disabled",
          get: function get() {
            return this.tooFewCells;
          }
        }, {
          key: "margin",
          get: function get() {
            return this.carouselProperties.margin;
          }
        }, {
          key: "isLightDOM",
          get: function get() {
            return this.carouselProperties.lightDOM || this.carouselProperties.loop;
          }
        }, {
          key: "updateProperties",
          value: function updateProperties(carouselProperties) {
            this.carouselProperties = carouselProperties;
          }
        }, {
          key: "init",
          value: function init() {
            this.setWidth();
          }
        }, {
          key: "handleTouchstart",
          value: function handleTouchstart() {
            this.startX = this.utils.getStartX(event);
            this.startTime = new Date().getTime();
            this.initialElementPositionX = this.getInitialElementPositionX();
          }
        }, {
          key: "handleHorizontalSwipe",
          value: function handleHorizontalSwipe() {
            if (this.disabled) {
              return;
            }

            if (!this.isSwipeInProgress) {
              this.startX = this.utils.getStartX(event);
              this.startTime = new Date().getTime();
              this.initialElementPositionX = this.getInitialElementPositionX();
            }

            this.isSwipeInProgress = true;
            this.moveX = this.utils.getMoveX(event);
            this.move();
          }
        }, {
          key: "handleTouchend",
          value: function handleTouchend() {
            var simpleProcessing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.disabled) {
              return;
            }
            /* If touchend was passed to the Slide class */


            if (simpleProcessing) {
              this.isSwipeInProgress = false;
              return;
            }

            this.isSwipeInProgress = false;
            this.finishMoving();
            this.clearInitialValues();
          }
        }, {
          key: "move",
          value: function move() {
            var positionX = this.getMovePositionX();
            var isPulled = this.detectPulled();
            var direction = this.getDirection();

            if (isPulled) {
              if (isPulled.edge === "left" && direction === "right" || isPulled.edge === "right" && direction === "left") {
                positionX = this.slowdownOnPull(positionX);
              }
            }

            this.transformPositionX(positionX, 0);

            if (this.freeScroll) {
              this.initialPositionX = positionX;
            }

            if (isPulled) {
              if (isPulled.edge === 'left' && isPulled.overflowX > this.pullLimit) {
                this.initialPositionX = 0;
              }

              if (isPulled.edge === 'right' && isPulled.overflowX > this.pullLimit) {
                this.initialPositionX = positionX;
              }
            }
          }
        }, {
          key: "getMovePositionX",
          value: function getMovePositionX() {
            var distance = this.getDistance();
            return this.initialElementPositionX - distance;
          }
        }, {
          key: "getDistance",
          value: function getDistance() {
            return this.startX - this.moveX;
          }
          /* If the container is pulled out of the left or right border */

        }, {
          key: "detectPulled",
          value: function detectPulled() {
            var currentPositionX = this.getCurrentPositionX();

            if (currentPositionX > 0) {
              return {
                edge: 'left',
                positionX: currentPositionX,
                overflowX: Math.abs(currentPositionX)
              };
            }

            if (currentPositionX < this.getEndPosition()) {
              return {
                edge: 'right',
                positionX: currentPositionX,
                overflowX: Math.abs(currentPositionX - this.getEndPosition())
              };
            }

            return undefined;
          }
        }, {
          key: "slowdownOnPull",
          value: function slowdownOnPull(_positionX) {
            var distance = Math.abs(this.getDistance());
            var endPosition = this.getEndPosition();
            var isPulled = this.detectPulled();

            if (!isPulled) {
              return 0;
            }

            var decelerationRatio = 3 + isPulled.overflowX / 50;
            var positionX = 0;

            if (isPulled.edge === 'left') {
              if (this.initialElementPositionX < 0) {
                distance = distance - Math.abs(this.initialElementPositionX);
              }

              var rubberPositionX = distance / decelerationRatio;
              positionX = rubberPositionX;

              if (this.initialElementPositionX > 0) {
                positionX = this.initialElementPositionX + rubberPositionX;
              }

              if (positionX > this.pullLimit) {
                positionX = this.pullLimit;
              }
            }

            if (isPulled.edge === 'right') {
              var _rubberPositionX = endPosition + (this.initialElementPositionX - distance - endPosition) / decelerationRatio;

              var containerWidth = this.getWidth();
              positionX = _rubberPositionX;

              if (this.initialElementPositionX < -(containerWidth - this.visibleWidth)) {
                positionX = containerWidth - this.visibleWidth + this.initialElementPositionX + _rubberPositionX;
              }

              if (positionX < endPosition - this.pullLimit) {
                positionX = endPosition - this.pullLimit;
              }
            }

            return positionX;
          }
        }, {
          key: "finishMoving",
          value: function finishMoving() {
            var positionX = this.getMovePositionX();
            var newPositionX = 0;

            if (this.freeScroll) {
              newPositionX = this.getInertia();
            }
            /* Align container while pulling */


            newPositionX = this.getAlignedPositionOnPull(newPositionX);
            this.transformPositionX(newPositionX);
            this.setInitialPosition(positionX);
          }
          /* Returns the new position of the container with inertia */

        }, {
          key: "getInertia",
          value: function getInertia() {
            var distance = this.getDistance();
            var currentTime = new Date().getTime();
            var tapLength = currentTime - this.startTime;
            var inertia = distance / tapLength * 100;
            return this.initialPositionX - inertia;
          }
        }, {
          key: "getAlignedPositionOnPull",
          value: function getAlignedPositionOnPull(newPositionX) {
            var direction = this.getDirection();

            if (direction === 'left') {
              var endPosition = this.getEndPosition();

              if (newPositionX < endPosition) {
                return endPosition;
              }
            }

            if (direction === 'right') {
              if (newPositionX > 0) {
                return 0;
              }
            }

            return newPositionX;
          }
        }, {
          key: "getCurrentPositionX",
          value: function getCurrentPositionX() {
            var parentPosition = this.element.parentElement.getBoundingClientRect();
            var position = this.element.getBoundingClientRect();
            return position.left - parentPosition.left;
          }
        }, {
          key: "getEndPosition",
          value: function getEndPosition() {
            if (this.isLightDOM) {
              var imagesInContainer = this.cells.imageUtils.getImages();
              return -(imagesInContainer.length * this.fullCellWidth - this.visibleWidth - this.margin);
            } else {
              var width = this.getWidth();
              var visibleWidth = this.element.parentElement.clientWidth;
              return visibleWidth - width;
            }
          }
        }, {
          key: "transformPositionX",
          value: function transformPositionX(value) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.transitionDuration;

            if (value === undefined) {
              return;
            }

            this.element.style.transition = 'transform ' + duration + 'ms ' + this.transitionTimingFunction;
            this.element.style.transform = 'translateX(' + value + 'px)';
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            var width = this.cellLengthInLightDOMMode * this.fullCellWidth;
            var totalImageWidth = this.cellLength * this.fullCellWidth;

            if (totalImageWidth < width) {
              width = totalImageWidth;
            }

            return this.isLightDOM ? width : totalImageWidth;
          }
        }, {
          key: "setWidth",
          value: function setWidth() {
            var width = this.getWidth();
            this.element.style.width = width + "px";
          }
        }, {
          key: "setInitialPosition",
          value: function setInitialPosition(position) {
            this.initialPositionX = position;
          }
        }, {
          key: "getElementPosition",
          value: function getElementPosition() {
            return this.element.getBoundingClientRect();
          }
        }, {
          key: "getInitialElementPositionX",
          value: function getInitialElementPositionX() {
            var carouselElementPosition = this.utils.getCarouselElementPosition()['left'];
            return this.getElementPosition()['left'] - carouselElementPosition;
          }
        }, {
          key: "clearInitialValues",
          value: function clearInitialValues() {
            this.startX = this.moveX = 0;
          }
        }, {
          key: "getDirection",
          value: function getDirection() {
            var direction = Math.sign(this.startX - this.moveX);

            if (direction === -1) {
              return 'right';
            }

            if (direction === 1) {
              return 'left';
            }

            return undefined;
          }
        }]);

        return Container;
      }();

      var ImageUtils = /*#__PURE__*/function () {
        function ImageUtils(element) {
          _classCallCheck(this, ImageUtils);

          this.cellStack = [];
          this.element = element;
        }

        _createClass(ImageUtils, [{
          key: "getImages",
          value: function getImages() {
            return this.cellStack.filter(this.filter);
          }
        }, {
          key: "filter",
          value: function filter(cell) {
            return cell.img !== undefined;
          }
        }]);

        return ImageUtils;
      }();

      var Cells = /*#__PURE__*/function () {
        function Cells(carouselProperties, utils) {
          _classCallCheck(this, Cells);

          this.carouselProperties = carouselProperties;
          this.utils = utils;
          this.counter = 0;
          this.imageUtils = new ImageUtils(this.element);
          this.init(carouselProperties);
        }

        _createClass(Cells, [{
          key: "images",
          get: function get() {
            return this.carouselProperties.images;
          }
        }, {
          key: "cellLength",
          get: function get() {
            return this.cells ? this.cells.length : 0;
          }
        }, {
          key: "fullCellWidth",
          get: function get() {
            return this.carouselProperties.cellWidth + this.carouselProperties.margin;
          }
        }, {
          key: "cellLengthInLightDOMMode",
          get: function get() {
            if (this.images) {
              var cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;

              if (cellLength > this.images.length) {
                cellLength = this.images.length;
              }

              return cellLength;
            } else {
              return this.cellLength;
            }
          }
        }, {
          key: "numberOfVisibleCells",
          get: function get() {
            return this.utils.numberOfVisibleCells;
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            return this.utils.overflowCellsLimit;
          }
        }, {
          key: "isLightDOM",
          get: function get() {
            return this.carouselProperties.lightDOM || this.carouselProperties.loop;
          }
        }, {
          key: "updateProperties",
          value: function updateProperties(carouselProperties) {
            this.carouselProperties = carouselProperties;
          }
        }, {
          key: "lineUp",
          value: function lineUp() {
            var cells = this.element ? this.element.children : [];
            this.imageUtils.cellStack = [];

            for (var i = 0; i < cells.length; i++) {
              var cell = cells[i];
              var positionX = this.getCellPositionInContainer(i);
              cell.style.transform = 'translateX(' + positionX + 'px)';
              cell.style.width = this.carouselProperties.cellWidth + 'px';

              if (this.getImage(i)) {
                this.imageUtils.cellStack.push({
                  index: i,
                  positionX: positionX,
                  img: this.getImage(i)['image']
                });
              }
            }

            ;
          }
        }, {
          key: "ifSequenceOfCellsIsChanged",
          value: function ifSequenceOfCellsIsChanged() {
            var cells = this.element.children;
            return cells[0]['style'].transform !== 'translateX(0px)';
          }
        }, {
          key: "getCellPositionInContainer",
          value: function getCellPositionInContainer(cellIndexInDOMTree) {
            var positionIndex = this.getCellIndexInContainer(cellIndexInDOMTree);
            return positionIndex * this.fullCellWidth;
          }
        }, {
          key: "getCellIndexInContainer",
          value: function getCellIndexInContainer(cellIndexInDOMTree) {
            var positionIndex;

            if (!this.isLightDOM) {
              return cellIndexInDOMTree;
            }

            var cellLength = this.cellLengthInLightDOMMode;
            var counter = this.counter - this.overflowCellsLimit;

            if (counter > cellLength) {
              counter = counter % cellLength;
            }

            if (counter < 0) {
              return cellIndexInDOMTree;
            } else {
              positionIndex = cellIndexInDOMTree - counter;

              if (positionIndex < 0) {
                positionIndex = cellLength + positionIndex;
              }
            }

            return positionIndex;
          }
        }, {
          key: "getImage",
          value: function getImage(cellIndex) {
            if (!this.images) {
              return;
            }

            var imageIndex = this.getImageIndex(cellIndex);
            var file = this.images[imageIndex];

            if (file && !file.type) {
              file.type = 'image';
            }

            return {
              image: this.images[imageIndex],
              imageIndex: imageIndex
            };
          }
        }, {
          key: "getImageIndex",
          value: function getImageIndex(cellIndexInDOMTree) {
            var positionIndex = this.getCellIndexInContainer(cellIndexInDOMTree);
            var imageIndex;

            if (this.counter > this.overflowCellsLimit) {
              var cellLimitOverflow = this.counter - this.overflowCellsLimit;
              imageIndex = positionIndex + cellLimitOverflow;

              if (this.images && this.carouselProperties.loop) {
                imageIndex = imageIndex % this.images.length;
              }
            } else {
              imageIndex = cellIndexInDOMTree;
            }

            return imageIndex;
          }
        }, {
          key: "setCounter",
          value: function setCounter(value) {
            this.counter = value;
          }
        }, {
          key: "init",
          value: function init(carouselProperties) {
            this.element = this.carouselProperties.cellsElement;
            this.cells = this.element.children;
            this.visibleWidth = this.carouselProperties.visibleWidth || this.element.parentElement.clientWidth;
          }
        }]);

        return Cells;
      }();

      var Slide = /*#__PURE__*/function () {
        function Slide(carouselProperties, utils, cells, container) {
          _classCallCheck(this, Slide);

          this.carouselProperties = carouselProperties;
          this.utils = utils;
          this.cells = cells;
          this.container = container;
          this.slideLength = 0;
          this.isSlideInProgress = false;
          this.counter = 0;
          this._counter = 0;
          this.distance = 0;
          this.distanceAbs = 0;
          this.isNotClickOnArrow = false;
          this.initialPositionX = 0;
          this.currentPositionX = 0;
          /* The slide length has been limited by the limitSlideLength() method */

          this.isSlideLengthLimited = false;
          this.init();
        }

        _createClass(Slide, [{
          key: "fullCellWidth",
          get: function get() {
            return this.carouselProperties.cellWidth + this.carouselProperties.margin;
          }
        }, {
          key: "margin",
          get: function get() {
            return this.carouselProperties.margin;
          }
        }, {
          key: "minSwipeDistance",
          get: function get() {
            return this.carouselProperties.minSwipeDistance;
          }
        }, {
          key: "numberOfVisibleCells",
          get: function get() {
            return this.utils.numberOfVisibleCells;
          }
        }, {
          key: "visibleCellsOverflowContainer",
          get: function get() {
            return this.utils.visibleCellsOverflowContainer;
          }
          /* The position to which the container returns after each slide
           * in the light DUM tree mode.
           */

        }, {
          key: "fixedContainerPosition",
          get: function get() {
            return -(this.overflowCellsLimit * this.fullCellWidth);
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            return this.utils.overflowCellsLimit;
          }
        }, {
          key: "images",
          get: function get() {
            return this.carouselProperties.images;
          }
          /* Number of cell elements in the DUM tree */

        }, {
          key: "cellLength",
          get: function get() {
            if (this.isLightDOM) {
              return this.cells.cellLengthInLightDOMMode;
            } else {
              if (this.images) {
                return this.images.length;
              } else {
                return this.cells.cellLength;
              }
            }
          }
        }, {
          key: "isLightDOM",
          get: function get() {
            return this.carouselProperties.lightDOM || this.carouselProperties.loop;
          }
        }, {
          key: "updateProperties",
          value: function updateProperties(carouselProperties) {
            this.carouselProperties = carouselProperties;
            this.setVisibleWidth();
          }
        }, {
          key: "init",
          value: function init() {
            this.visibleWidth = this.carouselProperties.visibleWidth || this.carouselProperties.hostElement.clientWidth;
          }
        }, {
          key: "handleTouchstart",
          value: function handleTouchstart() {
            /* Touchstart event is not called for arrow */
            this.isNotClickOnArrow = true;
            this.isSlideLengthLimited = false;

            if (!this.isSlideInProgress) {
              this.initialPositionX = this.container.getCurrentPositionX();
            }
          }
        }, {
          key: "handleTouchend",
          value: function handleTouchend() {
            if (!this.isNotClickOnArrow) {
              return;
            }

            this.currentPositionX = this.container.getCurrentPositionX();
            this.distanceAbs = Math.abs(this.initialPositionX - this.currentPositionX);
            this.distance = this.initialPositionX - this.currentPositionX;
            this.direction = this.getDirection();
            this.isNotClickOnArrow = false;
            this.handleSlide();
          }
        }, {
          key: "handleTransitionend",
          value: function handleTransitionend() {
            this.setCounter();
            this.isSlideInProgress = false;

            if (this.isLightDOM) {
              this.alignContainerFast();
            }
          }
        }, {
          key: "handleSlide",
          value: function handleSlide() {
            var customSlideLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            var isUsingButton = customSlideLength;
            var newPositionX;

            if (isUsingButton && this.isSlideInProgress || !this.direction) {
              return;
            }
            /* Custom slide length is used in arrows */


            if (customSlideLength) {
              this.slideLength = this.limitSlideLength(customSlideLength);

              if (!this.isSlideInProgress) {
                this.initialPositionX = this.container.getCurrentPositionX();
              }
            } else {
              this.slideLength = this.getSlideLength(this.distanceAbs);
            }
            /* Store intermediate counter value */


            this._counter = this.getPreliminaryCounter();

            if (this.direction === 'left') {
              if (!customSlideLength) {
                this.slideLength = this.limitSlideLength(this.getSlideLength(this.distanceAbs));
              }

              this._counter = this.getPreliminaryCounter();
              var isSlidesEnd = this.isSlidesEnd(this._counter);
              newPositionX = this.getPositionByIndex(this._counter);

              if (isSlidesEnd) {
                this._counter = this.counter;
                newPositionX = this.getPositionByIndex(this.counter);
                this.slideLength = 0;
              }
            }

            if (this.direction === 'right') {
              if (!customSlideLength) {
                this.slideLength = this.getSlideLength(this.distanceAbs);
              }

              if (this._counter < 0) {
                this._counter = this.counter;
                this.slideLength = this.counter;
              }

              newPositionX = this.getPositionByIndex(this.counter - this.slideLength);
            }

            if (this.container.getCurrentPositionX() !== newPositionX) {
              this.isSlideInProgress = true;
              this.container.transformPositionX(newPositionX);
            }
          }
        }, {
          key: "next",
          value: function next() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            this.direction = 'left';
            this.handleSlide(length);
          }
        }, {
          key: "prev",
          value: function prev() {
            var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            this.direction = 'right';
            this.handleSlide(length);
          }
        }, {
          key: "select",
          value: function select(index) {
            if (index > this.cellLength - 1) {
              return;
            }

            if (index > this.counter) {
              var length = index - this.counter;
              this.next(length);
            }

            if (index < this.counter) {
              var _length = this.counter - index;

              this.prev(_length);
            }
          }
        }, {
          key: "getPreliminaryCounter",
          value: function getPreliminaryCounter() {
            if (this.direction === 'left') {
              return this.counter + this.slideLength;
            }

            if (this.direction === 'right') {
              return this.counter - this.slideLength;
            }

            return 0;
          }
          /*
           * Limits the length of the slide during calls to the next() and prev()
           * methods if the specified position is outside the cell length
           */

        }, {
          key: "limitSlideLength",
          value: function limitSlideLength(slideLength) {
            if (slideLength > 1) {
              for (var i = 0; i < slideLength; i++) {
                var newCounter = this.counter + (slideLength - i);

                if (!this.isSlidesEnd(newCounter)) {
                  slideLength = slideLength - i;
                  this.isSlideLengthLimited = i > 0;
                  break;
                }
              }
            }

            return slideLength;
          }
          /* Offset the container to show the last cell completely */

        }, {
          key: "getPositionCorrection",
          value: function getPositionCorrection(counter) {
            var correction = 0;
            var isLastSlide = this.isLastSlide(counter);

            if (this.carouselProperties.loop || this.direction === "right") {
              return 0;
            }

            if (this.isSlideLengthLimited || isLastSlide) {
              var cellsWidth = this.cells.cellLengthInLightDOMMode * this.fullCellWidth;

              if (this.visibleWidth < cellsWidth) {
                correction = -(this.numberOfVisibleCells * this.fullCellWidth - this.visibleWidth - this.margin);
              }

              if (correction >= -this.margin) {
                correction = 0;
              }
            }

            return correction;
          }
        }, {
          key: "getSlideLength",
          value: function getSlideLength(distanceAbs) {
            var isLastSlide = this.isLastSlide(this.counter);
            /* If the last cell does not fit entirely, then the
             * length of the swipe to the left, from the extreme
             * right position, may be shorter than usual.
             */

            if (isLastSlide && this.direction === "right") {
              distanceAbs = distanceAbs + this.visibleWidth % this.fullCellWidth;
            }

            var length = Math.floor(distanceAbs / this.fullCellWidth);

            if (distanceAbs % this.fullCellWidth >= this.minSwipeDistance) {
              length++;
            }

            return length;
          }
        }, {
          key: "getDistanceAbs",
          value: function getDistanceAbs() {
            return Math.abs(this.initialPositionX - this.currentPositionX);
          }
        }, {
          key: "getDirection",
          value: function getDirection() {
            var direction = Math.sign(this.initialPositionX - this.currentPositionX);

            if (direction === -1) {
              return 'right';
            }

            if (direction === 1) {
              return 'left';
            }

            return undefined;
          }
        }, {
          key: "isSlidesEnd",
          value: function isSlidesEnd(counter) {
            var margin = this.visibleCellsOverflowContainer ? 1 : 0;
            var imageLength = this.images ? this.images.length : this.cells.cellLength;

            if (this.carouselProperties.loop) {
              return false;
            } else {
              return imageLength - counter + margin < this.numberOfVisibleCells;
            }
          }
        }, {
          key: "isLastSlide",
          value: function isLastSlide(counter) {
            return this.isSlidesEnd(counter + 1);
          }
        }, {
          key: "setCounter",
          value: function setCounter() {
            if (this.direction === 'left') {
              this.counter = this.counter + this.slideLength;
            }

            if (this.direction === 'right') {
              this.counter = this.counter - this.slideLength;
            }
          }
        }, {
          key: "getPositionByIndex",
          value: function getPositionByIndex(_counter) {
            var correction = this.getPositionCorrection(this.counter + this.slideLength);
            var position;

            if (correction !== 0) {
              correction = correction + this.fullCellWidth;
            }

            if (this.direction === 'right') {
              correction = 0;
            }

            if (this.isLightDOM && this.isLightDOMMode(_counter) || this.isLightDOM && this.ifLeftDOMModeAtEnd(_counter)) {
              var initialPosition = this.getPositionWithoutCorrection(this.initialPositionX);
              var counterDifference = _counter - this.counter;
              position = initialPosition - (counterDifference * this.fullCellWidth - correction);
            } else {
              position = -(_counter * this.fullCellWidth - correction);
            }

            position = this.provideSafePosition(position);
            return position;
          }
        }, {
          key: "provideSafePosition",
          value: function provideSafePosition(position) {
            var endPosition = this.container.getEndPosition();

            if (this.direction === 'left') {
              if (position > 0) {
                position = 0;
              }
            }

            if (this.direction === 'right') {
              if (position < endPosition) {
                position = endPosition;
              }
            }

            return position;
          }
        }, {
          key: "getPositionWithoutCorrection",
          value: function getPositionWithoutCorrection(value) {
            var remainder = Math.round(value) % this.fullCellWidth;

            if (remainder !== 0) {
              return value - (this.fullCellWidth + remainder);
            } else {
              return value;
            }
          }
        }, {
          key: "isNextArrowDisabled",
          value: function isNextArrowDisabled() {
            return this.isLastSlide(this.counter) || !this.visibleCellsOverflowContainer && this.cellLength <= this.numberOfVisibleCells || this.visibleCellsOverflowContainer && this.cellLength < this.numberOfVisibleCells;
          }
        }, {
          key: "isPrevArrowDisabled",
          value: function isPrevArrowDisabled() {
            return this.counter === 0;
          }
        }, {
          key: "alignContainerFast",
          value: function alignContainerFast() {
            if (this.isLightDOMMode(this.counter)) {
              var positionX = this.fixedContainerPosition;
              this.container.transformPositionX(positionX, 0);
              this.cells.setCounter(this.counter);
              this.cells.lineUp();
            } else if (this.ifLeftDOMModeToBeginning(this.counter)) {
              /* If we have already exited the light DOM mode but
               * the cells are still out of place
               */
              if (this.cells.ifSequenceOfCellsIsChanged()) {
                var _positionX2 = -(this.counter * this.fullCellWidth);

                this.container.transformPositionX(_positionX2, 0);
                this.cells.setCounter(this.counter);
                this.cells.lineUp();
              }
            } else if (this.ifLeftDOMModeAtEnd(this.counter)) {
              var containerPositionX = this.container.getCurrentPositionX();
              var containerWidth = this.container.getWidth();
              this.visibleWidth;

              if (this.isLastSlide(this.counter) && containerWidth + containerPositionX >= this.visibleWidth) {
                return;
              }

              var correction = this.getPositionCorrection(this.counter);

              if (correction !== 0) {
                correction = correction + this.fullCellWidth;
              }

              if (this.direction === 'right') {
                correction = 0;
              }

              var _positionX3 = this.fixedContainerPosition + correction;

              this.container.transformPositionX(_positionX3, 0);
              this.cells.setCounter(this.counter);
              this.cells.lineUp();
            }
          }
        }, {
          key: "isLightDOMMode",
          value: function isLightDOMMode(counter) {
            var flag;
            var remainderOfCells = this.images.length - this.overflowCellsLimit - this.numberOfVisibleCells;

            if (!this.isLightDOM) {
              return false;
            }

            if (counter > this.overflowCellsLimit && this.direction === "left" && counter <= remainderOfCells) {
              flag = true;
            }

            if (counter >= this.overflowCellsLimit && this.direction === "right" && counter < remainderOfCells) {
              flag = true;
            }

            if (this.counter > this.overflowCellsLimit && this.direction === "left" && this.counter <= remainderOfCells) {
              flag = true;
            }

            if (this.counter >= this.overflowCellsLimit && this.direction === "right" && this.counter < remainderOfCells) {
              flag = true;
            }

            return flag;
          }
        }, {
          key: "ifLeftDOMModeAtEnd",
          value: function ifLeftDOMModeAtEnd(counter) {
            var flag;
            var remainderOfCells = this.images.length - this.overflowCellsLimit - this.numberOfVisibleCells;

            if (counter >= remainderOfCells) {
              flag = true;
            }

            if (this.counter >= remainderOfCells) {
              flag = true;
            }

            return flag;
          }
        }, {
          key: "ifLeftDOMModeToBeginning",
          value: function ifLeftDOMModeToBeginning(counter) {
            var flag;

            if (counter <= this.overflowCellsLimit) {
              flag = true;
            }

            if (this.counter <= this.overflowCellsLimit) {
              flag = true;
            }

            return flag;
          }
        }, {
          key: "setVisibleWidth",
          value: function setVisibleWidth() {
            this.visibleWidth = this.carouselProperties.visibleWidth || this.carouselProperties.hostElement.clientWidth;
          }
        }]);

        return Slide;
      }();

      var Utils = /*#__PURE__*/function () {
        function Utils(carouselProperties) {
          _classCallCheck(this, Utils);

          this.carouselProperties = carouselProperties;
        }

        _createClass(Utils, [{
          key: "images",
          get: function get() {
            return this.carouselProperties.images;
          }
        }, {
          key: "margin",
          get: function get() {
            return this.carouselProperties.margin;
          }
        }, {
          key: "overflowCellsLimit",
          get: function get() {
            if (this.images && this.isImagesLessCellLimit) {
              var overflowCellsLimit = Math.floor((this.images.length - this.numberOfVisibleCells) / 2);

              if (overflowCellsLimit < 0) {
                overflowCellsLimit = 0;
              }

              return overflowCellsLimit;
            } else {
              return this.carouselProperties.overflowCellsLimit;
            }
          }
        }, {
          key: "isImagesLessCellLimit",
          get: function get() {
            return this.carouselProperties.overflowCellsLimit * 2 + this.numberOfVisibleCells > this.images.length;
          }
        }, {
          key: "numberOfVisibleCells",
          get: function get() {
            return Math.ceil(this.visibleWidth / this.fullCellWidth);
          }
        }, {
          key: "visibleCellsOverflowContainer",
          get: function get() {
            return this.numberOfVisibleCells * this.fullCellWidth - this.margin > this.visibleWidth;
          }
        }, {
          key: "fullCellWidth",
          get: function get() {
            return this.carouselProperties.cellWidth + this.carouselProperties.margin;
          }
        }, {
          key: "visibleWidth",
          get: function get() {
            return this.carouselProperties.visibleWidth || this.carouselProperties.cellsElement.parentElement.clientWidth;
          }
        }, {
          key: "updateProperties",
          value: function updateProperties(carouselProperties) {
            this.carouselProperties = carouselProperties;
          }
        }, {
          key: "getStartX",
          value: function getStartX(event) {
            var touches = event.touches;
            var carouselElementPosition = this.getCarouselElementPosition()['left'];
            var startX;

            if (touches) {
              startX = touches[0].clientX - carouselElementPosition;
            } else {
              startX = event.clientX - carouselElementPosition;
            }

            return startX;
          }
        }, {
          key: "getMoveX",
          value: function getMoveX(event) {
            var touches = event.touches;
            var carouselElementPositionX = this.getCarouselElementPosition()['left'];

            if (touches) {
              return touches[0].clientX - carouselElementPositionX;
            } else {
              return event.clientX - carouselElementPositionX;
            }
          }
        }, {
          key: "getCarouselElementPosition",
          value: function getCarouselElementPosition() {
            return this.carouselProperties.hostElement.getBoundingClientRect();
          }
        }]);

        return Utils;
      }();

      var _CarouselComponent = /*#__PURE__*/function () {
        function _CarouselComponent(elementRef, ref) {
          var _this5 = this;

          _classCallCheck(this, _CarouselComponent);

          this.elementRef = elementRef;
          this.ref = ref;
          this.minTimeout = 30;
          this.isVideoPlaying = false;
          this._isCounter = false;
          this._cellWidth = 200;
          this._loop = false;
          this._lightDOM = false;
          this.isMoving = false;
          this.isNgContent = false;
          this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.height = 200;
          this.autoplay = false;
          this.autoplayInterval = 5000;
          this.pauseOnHover = true;
          this.dots = false;
          this.margin = 10;
          this.objectFit = 'cover';
          this.minSwipeDistance = 10;
          this.transitionDuration = 200;
          this.transitionTimingFunction = 'ease-out';
          this.counterSeparator = " / ";
          this.overflowCellsLimit = 3;
          this.listeners = 'mouse and touch';
          this.cellsToScroll = 1;
          this.freeScroll = false;
          this.arrows = true;
          this.arrowsOutside = false;
          this.arrowsTheme = 'light';
          this.hostClassCarousel = true;

          this.handleTouchstart = function (event) {
            _this5.touches.addEventListeners("mousemove", "handleMousemove");

            _this5.carousel.handleTouchstart(event);

            _this5.isMoving = true;
          };

          this.handleHorizontalSwipe = function (event) {
            event.preventDefault();

            _this5.carousel.handleHorizontalSwipe(event);
          };

          this.handleTouchend = function (event) {
            var touches = event.touches;

            _this5.carousel.handleTouchend(event);

            _this5.touches.removeEventListeners("mousemove", "handleMousemove");

            _this5.isMoving = false;
          };

          this.handleTap = function (event) {
            var outboundEvent = {
              name: 'click'
            };
            var nodes = Array.prototype.slice.call(_this5.cellsElement.children);
            var cellElement = event.srcElement.closest(".carousel-cell");
            var i = nodes.indexOf(cellElement);
            var cellIndex = nodes.indexOf(cellElement);

            if (_this5.images) {//outboundEvent.fileIndex = this.carousel.getFileIndex(i);
              //outboundEvent.file = this.carousel.getFile(cellIndex);
            } else {
              outboundEvent.cellIndex = cellIndex;
            }
          };
        }

        _createClass(_CarouselComponent, [{
          key: "isContainerLocked",
          get: function get() {
            if (this.carousel) {
              return this.carousel.isContainerLocked;
            }
          }
        }, {
          key: "slideCounter",
          get: function get() {
            if (this.carousel) {
              return this.carousel.slideCounter;
            }
          }
        }, {
          key: "lapCounter",
          get: function get() {
            if (this.carousel) {
              return this.carousel.lapCounter;
            }
          }
        }, {
          key: "isLandscape",
          get: function get() {
            return window.innerWidth > window.innerHeight;
          }
        }, {
          key: "isSafari",
          get: function get() {
            var ua = navigator.userAgent.toLowerCase();

            if (ua.indexOf('safari') !== -1) {
              return !(ua.indexOf('chrome') > -1);
            }
          }
        }, {
          key: "counter",
          get: function get() {
            var counter;

            if (this.loop) {
              counter = this.slideCounter % this.cellLength;
            } else {
              counter = this.slideCounter;
            }

            return counter + 1 + this.counterSeparator + this.cellLength;
          }
        }, {
          key: "cellsElement",
          get: function get() {
            return this.elementRef.nativeElement.querySelector('.carousel-cells');
          }
        }, {
          key: "isArrows",
          get: function get() {
            return this.arrows && !this.freeScroll;
          }
        }, {
          key: "isCounter",
          get: function get() {
            return this._isCounter && this.cellLength > 1;
          },
          set: function set(value) {
            if (value) {
              this._isCounter = value;
            }
          }
        }, {
          key: "activeDotIndex",
          get: function get() {
            return this.slideCounter % this.cellLength;
          }
        }, {
          key: "cellLimit",
          get: function get() {
            if (this.carousel) {
              return this.carousel.cellLimit;
            }
          }
        }, {
          key: "carouselWidth",
          get: function get() {
            return this.elementRef.nativeElement.clientWidth;
          }
        }, {
          key: "images",
          get: function get() {
            return this._images;
          },
          set: function set(images) {
            this._images = images;
          }
        }, {
          key: "cellWidth",
          set: function set(value) {
            if (value) {
              this._cellWidth = value;
            }
          }
        }, {
          key: "loop",
          get: function get() {
            if (this.images) {
              return this._loop;
            } else {
              return false;
            }
          },
          set: function set(value) {
            if (value) {
              this._loop = value;
            }
          }
        }, {
          key: "lightDOM",
          get: function get() {
            if (this.images) {
              return this._lightDOM;
            } else {
              return false;
            }
          },
          set: function set(value) {
            if (value) {
              this._lightDOM = value;
            }
          }
        }, {
          key: "onWindowResize",
          value: function onWindowResize(event) {
            if (this.utils.visibleWidth !== this.savedCarouselWidth) {
              this.resize();
            }
          }
        }, {
          key: "onMousemove",
          value: function onMousemove(event) {
            if (this.autoplay && this.pauseOnHover) {
              this.carousel.stopAutoplay();
            }
          }
        }, {
          key: "onMouseleave",
          value: function onMouseleave(event) {
            if (this.autoplay && this.pauseOnHover) {
              this.carousel.autoplay();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isNgContent = this.cellsElement.children.length > 0;
            this.touches = new Touches({
              element: this.cellsElement,
              listeners: this.listeners,
              mouseListeners: {
                "mousedown": "handleMousedown",
                "mouseup": "handleMouseup"
              }
            });
            this.touches.on('touchstart', this.handleTouchstart);
            this.touches.on('horizontal-swipe', this.handleHorizontalSwipe);
            this.touches.on('touchend', this.handleTouchend);
            this.touches.on('mousedown', this.handleTouchstart);
            this.touches.on('mouseup', this.handleTouchend);
            this.touches.on('tap', this.handleTap);
            this.setDimensions();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.initCarousel();
            this.cellLength = this.getCellLength();
            this.dotsArr = Array(this.cellLength).fill(1);
            this.ref.detectChanges();
            this.carousel.lineUpCells();
            this.savedCarouselWidth = this.carouselWidth;
            /* Start detecting changes in the DOM tree */

            this.detectDomChanges();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.width || changes.height || changes.images) {
              this.setDimensions();
              this.initCarousel();
              this.carousel.lineUpCells();
              this.ref.detectChanges();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.touches.destroy(); //this.carousel.destroy();
          }
        }, {
          key: "initCarousel",
          value: function initCarousel() {
            this.carouselProperties = {
              id: this.id,
              cellsElement: this.elementRef.nativeElement.querySelector('.carousel-cells'),
              hostElement: this.elementRef.nativeElement,
              images: this.images,
              cellWidth: this.getCellWidth(),
              loop: this.loop,
              autoplayInterval: this.autoplayInterval,
              overflowCellsLimit: this.overflowCellsLimit,
              visibleWidth: this.width,
              margin: this.margin,
              minSwipeDistance: this.minSwipeDistance,
              transitionDuration: this.transitionDuration,
              transitionTimingFunction: this.transitionTimingFunction,
              videoProperties: this.videoProperties,
              eventHandler: this.events,
              freeScroll: this.freeScroll,
              lightDOM: this.lightDOM
            };
            this.utils = new Utils(this.carouselProperties);
            this.cells = new Cells(this.carouselProperties, this.utils);
            this.container = new Container(this.carouselProperties, this.utils, this.cells);
            this.slide = new Slide(this.carouselProperties, this.utils, this.cells, this.container);
            this.carousel = new Carousel(this.carouselProperties, this.utils, this.cells, this.container, this.slide);

            if (this.autoplay) {
              this.carousel.autoplay();
            }
          }
        }, {
          key: "resize",
          value: function resize() {
            this.landscapeMode = this.isLandscape;
            this.savedCarouselWidth = this.carouselWidth;
            this.carouselProperties.cellWidth = this.getCellWidth();
            this.cells.updateProperties(this.carouselProperties);
            this.carousel.updateProperties(this.carouselProperties);
            this.container.updateProperties(this.carouselProperties);
            this.slide.updateProperties(this.carouselProperties);
            this.utils.updateProperties(this.carouselProperties);
            this.carousel.lineUpCells();
            this.slide.select(0);
            this.ref.detectChanges();
          }
        }, {
          key: "detectDomChanges",
          value: function detectDomChanges() {
            var _this6 = this;

            var observer = new MutationObserver(function (mutations) {
              _this6.onDomChanges();
            });
            var config = {
              attributes: true,
              childList: true,
              characterData: true
            };
            observer.observe(this.cellsElement, config);
          }
        }, {
          key: "onDomChanges",
          value: function onDomChanges() {
            this.cellLength = this.getCellLength();
            this.carousel.lineUpCells();
            this.ref.detectChanges();
          }
        }, {
          key: "setDimensions",
          value: function setDimensions() {
            this.hostStyleHeight = this.height + 'px';
            this.hostStyleWidth = this.width + 'px';
          }
        }, {
          key: "getImage",
          value: function getImage(index) {
            return this.carousel.getImage(index);
          }
        }, {
          key: "handleTransitionendCellContainer",
          value: function handleTransitionendCellContainer(event) {
            if (event.target['className'] === 'carousel-cells') {
              this.carousel.handleTransitionend();
            }
          }
        }, {
          key: "getCellWidth",
          value: function getCellWidth() {
            var elementWidth = this.carouselWidth;

            if (this.cellsToShow) {
              var margin = this.cellsToShow > 1 ? this.margin : 0;
              var totalMargin = margin * (this.cellsToShow - 1);
              return (elementWidth - totalMargin) / this.cellsToShow;
            }

            if (this._cellWidth === '100%') {
              return elementWidth;
            } else {
              return this._cellWidth;
            }
          }
        }, {
          key: "next",
          value: function next() {
            this.carousel.next(this.cellsToScroll);
            this.carousel.stopAutoplay();
          }
        }, {
          key: "prev",
          value: function prev() {
            this.carousel.prev(this.cellsToScroll);
            this.carousel.stopAutoplay();
          }
        }, {
          key: "isNextArrowDisabled",
          value: function isNextArrowDisabled() {
            if (this.carousel) {
              return this.carousel.isNextArrowDisabled();
            }
          }
        }, {
          key: "isPrevArrowDisabled",
          value: function isPrevArrowDisabled() {
            if (this.carousel) {
              return this.carousel.isPrevArrowDisabled();
            }
          }
        }, {
          key: "getCellLength",
          value: function getCellLength() {
            if (this.images) {
              return this.images.length;
            } else {
              return this.cellsElement.children.length;
            }
          }
        }]);

        return _CarouselComponent;
      }();

      _CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
        return new (t || _CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };

      _CarouselComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CarouselComponent,
        selectors: [["carousel"], ["", "carousel", ""]],
        hostVars: 6,
        hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function CarouselComponent_resize_HostBindingHandler($event) {
              return ctx.onWindowResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mousemove", function CarouselComponent_mousemove_HostBindingHandler($event) {
              return ctx.onMousemove($event);
            })("mouseleave", function CarouselComponent_mouseleave_HostBindingHandler($event) {
              return ctx.onMouseleave($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.hostStyleHeight)("width", ctx.hostStyleWidth);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel", ctx.hostClassCarousel);
          }
        },
        inputs: {
          height: "height",
          autoplay: "autoplay",
          autoplayInterval: "autoplayInterval",
          pauseOnHover: "pauseOnHover",
          dots: "dots",
          margin: "margin",
          objectFit: "objectFit",
          minSwipeDistance: "minSwipeDistance",
          transitionDuration: "transitionDuration",
          transitionTimingFunction: "transitionTimingFunction",
          counterSeparator: "counterSeparator",
          overflowCellsLimit: "overflowCellsLimit",
          listeners: "listeners",
          cellsToScroll: "cellsToScroll",
          freeScroll: "freeScroll",
          arrows: "arrows",
          arrowsOutside: "arrowsOutside",
          arrowsTheme: "arrowsTheme",
          isCounter: ["counter", "isCounter"],
          images: "images",
          cellWidth: "cellWidth",
          loop: "loop",
          lightDOM: "lightDOM",
          id: "id",
          width: "width",
          borderRadius: "borderRadius",
          videoProperties: "videoProperties",
          cellsToShow: "cellsToShow"
        },
        outputs: {
          events: "events"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 8,
        vars: 6,
        consts: [["class", "carousel-counter", 4, "ngIf"], [1, "carousel-container"], [1, "carousel-cells", 3, "transitionend"], ["cells", ""], ["ngFor", "", 3, "ngForOf"], ["class", "carousel-dots", 4, "ngIf"], ["class", "carousel-arrows", 3, "carousel-arrows-outside", "carousel-dark-arrows", 4, "ngIf"], [1, "carousel-counter"], ["class", "carousel-cell", 3, "width", "border-radius", 4, "ngIf"], [1, "carousel-cell"], ["draggable", "false", 3, "src", "object-fit", 4, "ngIf"], ["draggable", "false", 3, "src"], [1, "carousel-dots"], ["class", "carousel-dot", 3, "carousel-dot-active", 4, "ngFor", "ngForOf"], [1, "carousel-dot"], [1, "carousel-arrows"], [1, "carousel-arrow", "carousel-arrow-prev", 3, "click"], [1, "carousel-arrow", "carousel-arrow-next", 3, "click"]],
        template: function CarouselComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_div_0_Template, 2, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function CarouselComponent_Template_div_transitionend_2_listener($event) {
              return ctx.handleTransitionendCellContainer($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_ng_template_5_Template, 1, 1, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CarouselComponent_div_6_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CarouselComponent_div_7_Template, 3, 8, "div", 6);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCounter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-moving", ctx.isMoving);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dots);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isArrows);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
        styles: ["[_nghost-%COMP%]{position:relative;display:block;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;user-select:none;z-index:10000;transform-origin:top left;box-sizing:border-box}[_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%]{overflow:hidden;width:100%;height:100%;cursor:grab}[_nghost-%COMP%]   .carousel-container.carousel-moving[_ngcontent-%COMP%]{cursor:grabbing}[_nghost-%COMP%]   .carousel-counter[_ngcontent-%COMP%]{text-align:right;position:absolute;z-index:30;transition:opacity .2s;top:8px;right:24px;border-radius:13px;background-color:rgba(23,37,68,.3);font-size:11px;color:#fff;padding:5px 7px;line-height:normal}[_nghost-%COMP%]     .carousel-cells{transition:transform .2s;width:100%;height:100%;display:block;will-change:transform}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-prev-image{transform:translate3d(-100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-next-image{transform:translate3d(100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell{width:100%;height:100%;position:absolute;overflow:hidden}[_nghost-%COMP%]     .carousel-cells .carousel-cell img, [_nghost-%COMP%]     .carousel-cells .carousel-cell video{width:100%;height:100%;position:relative;object-fit:contain}[_nghost-%COMP%]     .carousel-cells .carousel-cell img.swiper-hide{display:none}[_nghost-%COMP%]     .carousel-cells .carousel-cell .carousel-play{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1}[_nghost-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:50%;border-radius:100px;position:absolute;top:50%;margin-top:-20px;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}[_nghost-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}[_nghost-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:-60px}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:-60px}[_nghost-%COMP%]   .carousel-dark-arrows[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{filter:invert(1)}[_nghost-%COMP%]   .carousel-arrow-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.5}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;z-index:10;text-align:center}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot[_ngcontent-%COMP%]{display:inline-block;border:2px solid #fff;border-radius:100px;margin:4px;width:8px;height:8px}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot-active[_ngcontent-%COMP%]{background-color:#fff}"]
      });

      _CarouselComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }];
      };

      _CarouselComponent.propDecorators = {
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        autoplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        autoplayInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pauseOnHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        dots: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        borderRadius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        margin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        objectFit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        minSwipeDistance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        transitionDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        transitionTimingFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        videoProperties: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        counterSeparator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        overflowCellsLimit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        listeners: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        cellsToShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        cellsToScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        freeScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        arrows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        arrowsOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        arrowsTheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        images: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        cellWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['cellWidth']
        }],
        isCounter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['counter']
        }],
        loop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['loop']
        }],
        lightDOM: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['lightDOM']
        }],
        hostClassCarousel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.carousel']
        }],
        hostStyleHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.height']
        }],
        hostStyleWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['style.width']
        }],
        onWindowResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['window:resize', ['$event']]
        }],
        onMousemove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['mousemove', ['$event']]
        }],
        onMouseleave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['mouseleave', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CarouselComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'carousel, [carousel]',
            template: "<div class=\"carousel-counter\" *ngIf=\"isCounter\">{{counter}}</div>\r\n\r\n<div class=\"carousel-container\" [class.carousel-moving]=\"isMoving\">\r\n\t<div class=\"carousel-cells\" #cells (transitionend)=\"handleTransitionendCellContainer($event)\">\r\n\t\t<ng-content></ng-content>\r\n\r\n\t\t<ng-template ngFor let-image [ngForOf]=\"images\" let-i=\"index\">\r\n\t\t\t<div class=\"carousel-cell\" \r\n\t\t\t\t[style.width]=\"getCellWidth()+'px'\"\r\n\t\t\t\t[style.border-radius]=\"borderRadius+'px'\"\r\n\t\t\t\t*ngIf=\"i < cellLimit\">\r\n\t\t\t\t<!-- Image -->\r\n\t\t\t\t<img \r\n\t\t\t\t\t*ngIf=\"getImage(i) && getImage(i)['image']\" \r\n\t\t\t\t\t[src]=\"getImage(i)['image']['path']\"\r\n\t\t\t\t\t[style.object-fit]=\"objectFit\"\r\n\t\t\t\t\tdraggable=\"false\" />\r\n\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</div>\r\n\r\n\t<div class=\"carousel-dots\" *ngIf=\"dots\">\r\n\t\t<div class=\"carousel-dot\" [class.carousel-dot-active]=\"i === activeDotIndex\" *ngFor=\"let dot of dotsArr; index as i\"></div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"carousel-arrows\" \r\n\t[class.carousel-arrows-outside]=\"arrowsOutside\" \r\n\t[class.carousel-dark-arrows]=\"arrowsTheme === 'dark'\"\r\n\t*ngIf=\"isArrows\">\r\n\t\r\n\t<div class=\"carousel-arrow carousel-arrow-prev\" [class.carousel-arrow-disabled]=\"isPrevArrowDisabled()\" (click)=\"prev()\"></div>\r\n\t<div class=\"carousel-arrow carousel-arrow-next\" [class.carousel-arrow-disabled]=\"isNextArrowDisabled()\" (click)=\"next()\"></div>\r\n</div>",
            styles: [":host{position:relative;display:block;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;user-select:none;z-index:10000;transform-origin:top left;box-sizing:border-box}:host .carousel-container{overflow:hidden;width:100%;height:100%;cursor:grab}:host .carousel-container.carousel-moving{cursor:grabbing}:host .carousel-counter{text-align:right;position:absolute;z-index:30;transition:opacity .2s;top:8px;right:24px;border-radius:13px;background-color:rgba(23,37,68,.3);font-size:11px;color:#fff;padding:5px 7px;line-height:normal}:host ::ng-deep .carousel-cells{transition:transform .2s;width:100%;height:100%;display:block;will-change:transform}:host ::ng-deep .carousel-cells .carousel-cell.swiper-prev-image{transform:translate3d(-100%,0,0)}:host ::ng-deep .carousel-cells .carousel-cell.swiper-next-image{transform:translate3d(100%,0,0)}:host ::ng-deep .carousel-cells .carousel-cell{width:100%;height:100%;position:absolute;overflow:hidden}:host ::ng-deep .carousel-cells .carousel-cell img,:host ::ng-deep .carousel-cells .carousel-cell video{width:100%;height:100%;position:relative;object-fit:contain}:host ::ng-deep .carousel-cells .carousel-cell img.swiper-hide{display:none}:host ::ng-deep .carousel-cells .carousel-cell .carousel-play{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1}:host .carousel-arrow{width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:50%;border-radius:100px;position:absolute;top:50%;margin-top:-20px;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}:host .carousel-arrow-prev{left:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}:host .carousel-arrow-next{right:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}:host .carousel-arrows-outside .carousel-arrow-prev{left:-60px}:host .carousel-arrows-outside .carousel-arrow-next{right:-60px}:host .carousel-dark-arrows .carousel-arrow{filter:invert(1)}:host .carousel-arrow-disabled{cursor:default;opacity:.5}:host .carousel-dots{position:absolute;left:0;right:0;bottom:0;z-index:10;text-align:center}:host .carousel-dots .carousel-dot{display:inline-block;border:2px solid #fff;border-radius:100px;margin:4px;width:8px;height:8px}:host .carousel-dots .carousel-dot-active{background-color:#fff}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }];
        }, {
          events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          autoplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          autoplayInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pauseOnHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          dots: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          margin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          objectFit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          minSwipeDistance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          transitionDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          transitionTimingFunction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          counterSeparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          overflowCellsLimit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          listeners: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          cellsToScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          freeScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          arrows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          arrowsOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          arrowsTheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          hostClassCarousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.carousel']
          }],
          isCounter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['counter']
          }],
          images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          cellWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['cellWidth']
          }],
          loop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['loop']
          }],
          lightDOM: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['lightDOM']
          }],
          onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:resize', ['$event']]
          }],
          onMousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mousemove', ['$event']]
          }],
          onMouseleave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mouseleave', ['$event']]
          }],
          hostStyleHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.height']
          }],
          hostStyleWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.width']
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          borderRadius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          videoProperties: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          cellsToShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _IvyCarouselModule = function _IvyCarouselModule() {
        _classCallCheck(this, _IvyCarouselModule);
      };

      _IvyCarouselModule.ɵfac = function IvyCarouselModule_Factory(t) {
        return new (t || _IvyCarouselModule)();
      };

      _IvyCarouselModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _IvyCarouselModule
      });
      _IvyCarouselModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_IvyCarouselModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [_CarouselComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
            exports: [_CarouselComponent],
            providers: [],
            bootstrap: [],
            entryComponents: [_CarouselComponent]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_IvyCarouselModule, {
          declarations: function declarations() {
            return [_CarouselComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule];
          },
          exports: function exports() {
            return [_CarouselComponent];
          }
        });
      })();
      /*
       * Public API Surface of angular-responsive-carousel
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=angular-responsive-carousel.js.map

      /***/

    },

    /***/
    61554: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PresentationRoutingModule": function PresentationRoutingModule() {
          return (
            /* binding */
            _PresentationRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _presentation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./presentation.component */
      63532);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _presentation_component__WEBPACK_IMPORTED_MODULE_0__.PresentationComponent
        }]
      }];

      var _PresentationRoutingModule = function _PresentationRoutingModule() {
        _classCallCheck(this, _PresentationRoutingModule);
      };

      _PresentationRoutingModule.ɵfac = function PresentationRoutingModule_Factory(t) {
        return new (t || _PresentationRoutingModule)();
      };

      _PresentationRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _PresentationRoutingModule
      });
      _PresentationRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_PresentationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    63532: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PresentationComponent": function PresentationComponent() {
          return (
            /* binding */
            _PresentationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _services_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../services/utils.service */
      81274);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/main.service */
      18607);
      /* harmony import */


      var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth/login/login.component */
      11864);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-responsive-carousel */
      6662);

      function PresentationComponent_div_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PresentationComponent_div_4_div_2_Template_img_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var item_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r3.main.goTo("/ytvideo/" + item_r2.id.videoId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r2.snippet.thumbnails.high.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        }
      }

      function PresentationComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "carousel", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PresentationComponent_div_4_div_2_Template, 2, 1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cellsToShow", ctx_r0.main.utils.esPc() ? 3 : 1)("cellsToScroll", ctx_r0.main.utils.esPc() ? 3 : 1)("margin", 30)("arrowsTheme", ctx_r0.light);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.videosYoutube.items);
        }
      }

      var _PresentationComponent = /*#__PURE__*/function () {
        function _PresentationComponent(main) {
          _classCallCheck(this, _PresentationComponent);

          this.main = main;
          main.newPage(this);
        }

        _createClass(_PresentationComponent, [{
          key: "cellsToShowAndScroll",
          value: function cellsToShowAndScroll() {
            return _services_utils_service__WEBPACK_IMPORTED_MODULE_0__.Utils.esPc() ? 3 : 1;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      //redirigir a la home
                      if (this.main.currentUser) this.main.goTo('/home'); // this.cellsToShow = Utils.esPc() ? 3 : 1;
                      // this.cellsToScroll = this.cellsToShow;
                      // this.videosYoutube = await this.main.provider.getVideosYoutubeIn2art();

                      this.videosYoutube = {
                        "kind": "youtube#searchListResponse",
                        "etag": "5IVif65m5VbHuqkAz5DHR7fVIgo",
                        "nextPageToken": "CBQQAA",
                        "regionCode": "ES",
                        "pageInfo": {
                          "totalResults": 123,
                          "resultsPerPage": 20
                        },
                        "items": [{
                          "kind": "youtube#searchResult",
                          "etag": "OiguWRGeZ_pwTmTJv1DdwYbhcfo",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "Pisjx_U9-Ac"
                          },
                          "snippet": {
                            "publishedAt": "2022-01-24T17:30:06Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "COLORIST APPRECIATION DAY - THE HISTORY BEHIND THIS FESTIVITY - MEET JORDIE BELLAIRE - IN2ART",
                            "description": "Today, January 24th is the Colorist Appreciation Day. This celebration started unexpectedly in 2013, from a Tumblr post by Jordie ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/Pisjx_U9-Ac/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/Pisjx_U9-Ac/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/Pisjx_U9-Ac/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2022-01-24T17:30:06Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "8fomHl9i6M7jzMXXEiGpHJvXXQ0",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "Ixy34JJDpBw"
                          },
                          "snippet": {
                            "publishedAt": "2022-01-21T17:30:01Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "ALL ABOUT THE ART OF KITES 💨🌈 IN2ART",
                            "description": "They're pretty, they're colorful, and they are art! 5 interesting facts about kites: 1. The Chinese name for a kite is Fen Zheng, which ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/Ixy34JJDpBw/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/Ixy34JJDpBw/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/Ixy34JJDpBw/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2022-01-21T17:30:01Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "XAdLSUriTtDSBnTZinBGNhpzyH4",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "mZSsXjW5-no"
                          },
                          "snippet": {
                            "publishedAt": "2022-01-19T17:30:10Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "TOP 5+1 COOLEST FOOD MUSEUMS AROUND THE WORLD - BEST GASTRONOMY MUSEUMS WORLDWIDE - IN2ART",
                            "description": "Sweet, salty, spicy, and even bitter. Who doesn't like to relish a good meal? Cooking is an art, and like all arts, gastronomy ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/mZSsXjW5-no/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/mZSsXjW5-no/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/mZSsXjW5-no/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2022-01-19T17:30:10Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "2hLXwz47p54VtHDhPqFfettOpzo",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "LvMq_2H9iyU"
                          },
                          "snippet": {
                            "publishedAt": "2022-01-17T17:30:03Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "FIVE FACTS ABOUT BRAILLE ✋🏻 HOW DO BLIND PEOPLE READ? 📚 IN2ART #SHORTS",
                            "description": "Five facts about Braille #1 Braille is not a language. It's a tactile alphabet that can write almost any language. #2 Braille takes up ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/LvMq_2H9iyU/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/LvMq_2H9iyU/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/LvMq_2H9iyU/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2022-01-17T17:30:03Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "t3MOVqEepFh-cAei0CZAfLnS1uU",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "fncOr2gQ-SI"
                          },
                          "snippet": {
                            "publishedAt": "2022-01-14T17:30:03Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "MAKE ART AT THE BATHTUB! 🛁 THE ART BEHIND BATH BOMBS 🧼 IN2ART #SHORTS",
                            "description": "Have you ever considered making art in your bathtub? Well, it is possible! Mo Constantine, inspired by the antacid pill Alka Seltzer ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/fncOr2gQ-SI/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/fncOr2gQ-SI/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/fncOr2gQ-SI/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2022-01-14T17:30:03Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "AXG7O4KgWvyW5lNG_JcuBWvCKr0",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "JWkWi_pDpAY"
                          },
                          "snippet": {
                            "publishedAt": "2022-01-12T17:30:03Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "WILL TATTOOS DISAPPEAR BECAUSE OF THE NEW EU INK LAWS? - ARE TATTOOS SAFE? - IN2ART",
                            "description": "Have you ever considered getting a tattoo? You or some of your relatives have probably thought about it. According to a study by ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/JWkWi_pDpAY/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/JWkWi_pDpAY/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/JWkWi_pDpAY/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2022-01-12T17:30:03Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "O5c6LtN4OPWrDZ7q5WtdgOSIng4",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "I7JAYU7B7SU"
                          },
                          "snippet": {
                            "publishedAt": "2022-01-10T17:30:02Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "THE ART OF ORIGA2021 🗞 JAPANESE CULTURE ART ⭐️ IN2ART #SHORTS",
                            "description": "Every November 11th is celebrated World Origami Day. In this #short you will learn #amazing things about this #art Who are we?",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/I7JAYU7B7SU/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/I7JAYU7B7SU/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/I7JAYU7B7SU/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2022-01-10T17:30:02Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "grxStijGcUOd8syKcQmLvpbxICw",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "vNKNP655dL4"
                          },
                          "snippet": {
                            "publishedAt": "2022-01-07T17:30:03Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "5 FACTS ABOUT INDIAN CINEMA THAT YOU DIDN&#39;T KNOW - BOLLYWOOD #SHORTS - IN2ART",
                            "description": "India has the most significant film industry globally in terms of the number of films produced, and it also exceeds the #Hollywood ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/vNKNP655dL4/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/vNKNP655dL4/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/vNKNP655dL4/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2022-01-07T17:30:03Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "E1drdf0oDPu6JkuDQCzXGlwA9io",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "RL0G4z-l7mg"
                          },
                          "snippet": {
                            "publishedAt": "2022-01-05T17:30:02Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "BARBIES OF THE ROMAN EMPIRE - FIRST DOLLS IN HISTORY - CREPEREIA TRYPHAENAL&#39;S DOLL - IN2ART",
                            "description": "Everybody knows her, and perhaps you have even played with one of them during your childhood. But do you know where the ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/RL0G4z-l7mg/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/RL0G4z-l7mg/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/RL0G4z-l7mg/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2022-01-05T17:30:02Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "xUPU0qZyMkxIkeXNJ1ePnMxEVSs",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "jG1wsxU0syE"
                          },
                          "snippet": {
                            "publishedAt": "2022-01-03T17:30:03Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "HOW MANY AMAZING THINGS CAN BE DONE WITH A 3D PRINTER? ⭐️FLOR DE CACAO JORDI ROCA 🍫 IN2ART",
                            "description": "Have you ever wondered how many amazing things you could do with a #3D printer? Mona Lisa 3D Studio and chef #JordiRoca ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/jG1wsxU0syE/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/jG1wsxU0syE/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/jG1wsxU0syE/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2022-01-03T17:30:03Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "DArjmaEPIxSgl277CehEa6romzo",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "aJ-j6ivB0R8"
                          },
                          "snippet": {
                            "publishedAt": "2021-12-31T17:30:01Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "USING BACTERIA AS PAINT? IS POSSIBLE! 🧫 SCIENTIST CREATES INTRICATE DRAWINGS WITH BACTERIA 🧪 #SHORTS",
                            "description": "He is Mustafá al Yasiri. An Iraqi man who has managed to combine his experience in the laboratory with his talent for drawing, ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/aJ-j6ivB0R8/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/aJ-j6ivB0R8/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/aJ-j6ivB0R8/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2021-12-31T17:30:01Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "4z2FxbOgDBQlm9u32IZbsHHC9ek",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "ozbRk5AAeVY"
                          },
                          "snippet": {
                            "publishedAt": "2021-12-29T17:30:10Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "THE BEST PHOTOS OF 2021 - COMPILATION OF THE MOST WONDERFUL PHOTOGRAPHS OF THE YEAR - IN2ART",
                            "description": "In today's video, we share with you a compilation of the best photos of the year 2021. They're the world press photo winners in ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/ozbRk5AAeVY/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/ozbRk5AAeVY/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/ozbRk5AAeVY/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2021-12-29T17:30:10Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "LEstRwfRr57_g3vL8uCPqi3qgNU",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "zH_H4ldEiW0"
                          },
                          "snippet": {
                            "publishedAt": "2021-12-27T17:30:06Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "HOW CAN MUSIC HELP PEOPLE? 🎶 5 BENEFITS OF MUSIC 🎻 ART THERAPY - IN2ART #SHORTS",
                            "description": "5 WAYS MUSIC HELPS PEOPLE 1. #Music improves our mood and increases our optimism. 2. Music reduces #stress and anxiety ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/zH_H4ldEiW0/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/zH_H4ldEiW0/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/zH_H4ldEiW0/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2021-12-27T17:30:06Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "uRIuPYZikd5C_4i-HKUPHo3q64k",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "Npy1d257xzM"
                          },
                          "snippet": {
                            "publishedAt": "2021-12-24T17:30:01Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "THE HISTORY OF CLOWNERY ART 🤡 CURIOUS FACTS ABOUT CLOWNS 🎪 IN2ART #SHORTS",
                            "description": "The first clowns appeared in ancient Greece. They were bald, padded buffoons who performed in farces, parodying others. Also ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/Npy1d257xzM/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/Npy1d257xzM/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/Npy1d257xzM/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2021-12-24T17:30:01Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "zhonkoMeGSiPiwLyCTCeHHGWchM",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "tP--O41qGbo"
                          },
                          "snippet": {
                            "publishedAt": "2021-12-22T17:30:06Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "THE ART OF XMAS - SECRETS AND STORY OF ARTISTIC CHRISTMAS TRADITIONS AROUND THE WORLD - IN2ART",
                            "description": "Christmas is just around the corner, and by now, if you celebrate this holiday, you probably think you already know everything ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/tP--O41qGbo/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/tP--O41qGbo/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/tP--O41qGbo/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2021-12-22T17:30:06Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "QL8Kx1w6jpQ58vtNuHlrF4froHU",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "nF4M28TEeqA"
                          },
                          "snippet": {
                            "publishedAt": "2021-12-20T17:30:05Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "3 INTERESTING FACTS ABOUT THE SAX THAT YOU PROBABLY DON&#39;T KNOW 🎷 MUSIC &amp; ART #SHORTS",
                            "description": "Three interesting facts about the sax: 1. The standard saxophone has 23 keys. 2. Saxophone reeds are made out of the plant ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/nF4M28TEeqA/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/nF4M28TEeqA/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/nF4M28TEeqA/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2021-12-20T17:30:05Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "q239Smr_DE44Y86u3jcfP9Yb9po",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "RJXmRuExPUI"
                          },
                          "snippet": {
                            "publishedAt": "2021-12-15T17:30:02Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "TOP 5 MUSEUMS WHERE EXPLOIT YOUR CREATIVITY - BEST MUSEUMS ON THE WORLD - IN2ART",
                            "description": "If you are passionate about art, visiting museums can be an excellent plan for the weekend or your holidays. But what about those ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/RJXmRuExPUI/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/RJXmRuExPUI/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/RJXmRuExPUI/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2021-12-15T17:30:02Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "Yyc7kKSKOgG0VRjTneabqCqE63U",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "ntuqkRtIlw8"
                          },
                          "snippet": {
                            "publishedAt": "2021-12-08T17:30:03Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "CHRISTMAS GIFT IDEAS FOR ARTISTS 🎁BEST PRESENTS FOR PAINTERS, WRITERS &amp; MUSICIANS THIS YEAR - IN2ART",
                            "description": "Christmas is coming. Have you already thought about what you want to receive as a gift? Here are some presents ideas to give to ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/ntuqkRtIlw8/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/ntuqkRtIlw8/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/ntuqkRtIlw8/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2021-12-08T17:30:03Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "tmfgQ5dkd7ia2dpofucoqsoIgOE",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "NQmWpCZ3LpU"
                          },
                          "snippet": {
                            "publishedAt": "2021-12-06T17:30:01Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "A MOUNTAIN OF CANDY IN A MUSEUM TO FIGHT AGAINS AIDS &amp; HIV - IN2ART",
                            "description": "We wanted to commemorate World AIDS Day (December 1st) with the visual artist Félix González-Torres, who died in 1996 due to ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/NQmWpCZ3LpU/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/NQmWpCZ3LpU/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/NQmWpCZ3LpU/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2021-12-06T17:30:01Z"
                          }
                        }, {
                          "kind": "youtube#searchResult",
                          "etag": "1GixGgezVGZKfzhSucE3D0vmjQk",
                          "id": {
                            "kind": "youtube#video",
                            "videoId": "QMWyid2ibAw"
                          },
                          "snippet": {
                            "publishedAt": "2021-12-01T17:30:03Z",
                            "channelId": "UC2quhoMmYVW9V8EjMVB-xpw",
                            "title": "ALL ABOUT MERCHANDISE: ORIGINS &amp; HISTORY. HOW MERCH CHANGED THE ART INDUSTRY? DISNEY &amp; ANDY WARHOL.",
                            "description": "Shirts of sports teams and players, mugs of artworks, toys of animated movie characters, clothes of pop and rock stars and musical ...",
                            "thumbnails": {
                              "default": {
                                "url": "https://i.ytimg.com/vi/QMWyid2ibAw/default.jpg",
                                "width": 120,
                                "height": 90
                              },
                              "medium": {
                                "url": "https://i.ytimg.com/vi/QMWyid2ibAw/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                              },
                              "high": {
                                "url": "https://i.ytimg.com/vi/QMWyid2ibAw/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                              }
                            },
                            "channelTitle": "In2art",
                            "liveBroadcastContent": "none",
                            "publishTime": "2021-12-01T17:30:03Z"
                          }
                        }]
                      }; // console.log(this.videosYoutube);
                      // this.videos = this.videosYoutube.items.map((item) => {
                      //     return this.main.sanitizeVideoURL('https://www.youtube.com/embed/' + item.id.videoId)
                      // });

                    case 2:
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

        return _PresentationComponent;
      }();

      _PresentationComponent.ɵfac = function PresentationComponent_Factory(t) {
        return new (t || _PresentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__.MainService));
      };

      _PresentationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _PresentationComponent,
        selectors: [["app-presentation"]],
        decls: 25,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Privacy_policy$$SRC_APP_IN2ART_PAGES_PRESENTATION_PRESENTATION_COMPONENT_TS_1 = goog.getMsg("Privacy policy");
            i18n_0 = MSG_EXTERNAL_Privacy_policy$$SRC_APP_IN2ART_PAGES_PRESENTATION_PRESENTATION_COMPONENT_TS_1;
          } else {
            i18n_0 = "Pol\xEDtica de privacitat";
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Terms_of_use$$SRC_APP_IN2ART_PAGES_PRESENTATION_PRESENTATION_COMPONENT_TS_3 = goog.getMsg("Terms of use");
            i18n_2 = MSG_EXTERNAL_Terms_of_use$$SRC_APP_IN2ART_PAGES_PRESENTATION_PRESENTATION_COMPONENT_TS_3;
          } else {
            i18n_2 = "Condicions d'\xFAs";
          }

          return [[1, "content"], [1, "grupLogin", "row", "no-gutters"], [1, "col-12", "login"], ["class", "grupVideos", 4, "ngIf"], [1, "footer", "row", "no-gutters"], [1, "links", "col-5", "col-sm-3", "row", "no-gutters"], [1, "boto", "botoText", "col-12", "col-lg-6", 3, "click"], i18n_0, i18n_2, [1, "icones", "col-sm-6", "d-none", "d-sm-block"], [1, "icones", "col-7", "col-sm-3", "row", "no-gutters"], ["title", "Instagram", "href", "https://www.instagram.com/in2artsocial/", 1, "icona", "col", "boing"], ["src", "assets/in2art/icones/xarxes/instagram_white.svg", "alt", "Instagram"], ["title", "Facebook", "href", "https://www.facebook.com/in2artsocial", 1, "icona", "col", "boing"], ["src", "assets/in2art/icones/xarxes/facebook_white.svg", "alt", "Facebook"], ["title", "Twitter", "href", "https://twitter.com/in2artsocial", 1, "icona", "col", "boing"], ["src", "assets/in2art/icones/xarxes/twitter_white.svg", "alt", "Twitter"], ["title", "YouTube", "href", "https://www.youtube.com/in2art", 1, "icona", "col", "boing"], ["src", "assets/in2art/icones/xarxes/youtube_white.svg", "alt", "YouTube"], ["title", "Pinterest", "href", "https://www.pinterest.es/in2artsocial/_created/", 1, "icona", "col", "boing"], ["src", "assets/in2art/icones/xarxes/pinterest_white.svg", "alt", "Pinterest"], ["title", "LinkedIn", "href", "https://www.linkedin.com/company/in2art/", 1, "icona", "col", "boing"], ["src", "assets/in2art/icones/xarxes/linkedIn_white.svg", "alt", "LinkedIn"], [1, "grupVideos"], [3, "cellsToShow", "cellsToScroll", "margin", "arrowsTheme"], ["class", "carousel-cell", 4, "ngFor", "ngForOf"], [1, "carousel-cell"], ["alt", "item.snippet.title", 3, "src", "click"]];
        },
        template: function PresentationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-login");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PresentationComponent_div_4_Template, 3, 5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PresentationComponent_Template_button_click_7_listener() {
              return ctx.main.goTo("/settings/about/privacy-policy");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](8, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PresentationComponent_Template_button_click_9_listener() {
              return ctx.main.goTo("/settings/about/terms-of-use");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](10, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.videosYoutube && false);
          }
        },
        directives: [_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__.CarouselComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
        styles: [".content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0;\n}\n.content[_ngcontent-%COMP%]   .grupLogin[_ngcontent-%COMP%] {\n  max-width: var(--breakpoint-md);\n  width: 100%;\n  display: inline-flex;\n  margin-top: 100px;\n  margin-bottom: 200px;\n  transition: all 0.5s;\n}\n.content[_ngcontent-%COMP%]   .grupVideos[_ngcontent-%COMP%] {\n  max-width: var(--breakpoint-xl);\n  margin: 0 auto 200px;\n}\n.content[_ngcontent-%COMP%]   .grupVideos[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  height: 300px !important;\n}\n.content[_ngcontent-%COMP%]   .grupVideos[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%]:hover {\n  z-index: 10;\n}\n.content[_ngcontent-%COMP%]   .grupVideos[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  cursor: pointer;\n  transition: transform 0.5s;\n}\n.content[_ngcontent-%COMP%]   .grupVideos[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2) !important;\n}\n.content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  left: 0;\n  right: 0;\n  bottom: -1px;\n  margin: 0;\n  padding: 30px;\n  box-shadow: none;\n  background-color: var(--color-fons-card);\n  transition: all 0.5s;\n}\n.content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .boto[_ngcontent-%COMP%] {\n  max-height: 60px;\n  padding: 0.5rem;\n  font-size: 1rem;\n  background: none;\n}\n.content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .icones[_ngcontent-%COMP%]   .icona[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  transition: height 0.5s;\n}\n[_nghost-%COMP%]     .grupVideos .carousel .carousel-container {\n  padding: 50px 0;\n}\n[_nghost-%COMP%]     .grupVideos .carousel .carousel-container * {\n  overflow: visible !important;\n}\n@media only screen and (max-width: 576px) {\n  .content[_ngcontent-%COMP%]   .grupLogin[_ngcontent-%COMP%] {\n    margin-top: 0px !important;\n  }\n  .content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    padding: 15px 5px;\n  }\n  .content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .boto[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .icones[_ngcontent-%COMP%]   .icona[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXNlbnRhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0VBQ0EsVUFBQTtBQUFKO0FBR0k7RUFDSSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQURSO0FBT0k7RUFDSSwrQkFBQTtFQUNBLG9CQUFBO0FBTFI7QUFRUTtFQUNJLHdCQUFBO0FBTlo7QUFVZ0I7RUFDSSxXQUFBO0FBUnBCO0FBVWdCO0VBQ0ksOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsZUFBQTtFQUVBLDBCQUFBO0FBVHBCO0FBV29CO0VBQ0ksZ0NBQUE7QUFUeEI7QUFnQkk7RUFDSSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQkFBQTtBQWRSO0FBaUJZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBZmhCO0FBcUJnQjtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQW5CcEI7QUEwQkE7RUFDSSxlQUFBO0FBdkJKO0FBd0JJO0VBQ0ksNEJBQUE7QUF0QlI7QUE0QkE7RUFHUTtJQUNJLDBCQUFBO0VBM0JWO0VBNkJNO0lBQ0ksaUJBQUE7RUEzQlY7RUE2QmM7SUFDSSxpQkFBQTtFQTNCbEI7RUFpQ2tCO0lBQ0ksWUFBQTtFQS9CdEI7QUFDRiIsImZpbGUiOiJwcmVzZW50YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG5cclxuICAgIC5ncnVwTG9naW4ge1xyXG4gICAgICAgIG1heC13aWR0aDogdmFyKC0tYnJlYWtwb2ludC1tZCk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7IC8vMTAwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcblxyXG5cclxuICAgICAgICAubG9naW4geyB9XHJcbiAgICB9XHJcblxyXG4gICAgLmdydXBWaWRlb3Mge1xyXG4gICAgICAgIG1heC13aWR0aDogdmFyKC0tYnJlYWtwb2ludC14bCk7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMjAwcHg7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC5jYXJvdXNlbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIC5jYXJvdXNlbC1jZWxsIHtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IC0xcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb25zLWNhcmQpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG5cclxuICAgICAgICAubGlua3Mge1xyXG4gICAgICAgICAgICAuYm90byB7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaWNvbmVzIHtcclxuICAgICAgICAgICAgLmljb25hIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ncnVwVmlkZW9zIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgICoge1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBNw7JiaWwgLy9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICAuZ3J1cExvZ2luIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDVweDtcclxuICAgICAgICAgICAgLmxpbmtzIHtcclxuICAgICAgICAgICAgICAgIC5ib3RvIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWNvbmVzIHtcclxuICAgICAgICAgICAgICAgIC5pY29uYSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    86788: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PresentationModule": function PresentationModule() {
          return (
            /* binding */
            _PresentationModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-responsive-carousel */
      6662);
      /* harmony import */


      var _presentation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./presentation.component */
      63532);
      /* harmony import */


      var _presentation_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./presentation-routing.module */
      61554);
      /* harmony import */


      var _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../auth/auth.module */
      49622);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PresentationModule = function _PresentationModule() {
        _classCallCheck(this, _PresentationModule);
      };

      _PresentationModule.ɵfac = function PresentationModule_Factory(t) {
        return new (t || _PresentationModule)();
      };

      _PresentationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _PresentationModule
      });
      _PresentationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_presentation_routing_module__WEBPACK_IMPORTED_MODULE_2__.PresentationRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__.AuthModule, angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__.IvyCarouselModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_PresentationModule, {
          declarations: [_presentation_component__WEBPACK_IMPORTED_MODULE_1__.PresentationComponent],
          imports: [_presentation_routing_module__WEBPACK_IMPORTED_MODULE_2__.PresentationRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__.AuthModule, angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__.IvyCarouselModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_in2art_pages_presentation_presentation_module_ts-es5.js.map