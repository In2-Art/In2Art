(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_in2art_pages_search_search_module_ts"], {
    /***/
    56766: function _(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /**
      * matchesSelector v2.0.2
      * matchesSelector( element, '.selector' )
      * MIT license
      */

      /*jshint browser: true, strict: true, undef: true, unused: true */


      (function (window, factory) {
        /*global define: false, module: false */
        'use strict'; // universal module definition

        if (true) {
          // AMD
          !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(window, function factory() {
        'use strict';

        var matchesMethod = function () {
          var ElemProto = window.Element.prototype; // check for the standard method name first

          if (ElemProto.matches) {
            return 'matches';
          } // check un-prefixed


          if (ElemProto.matchesSelector) {
            return 'matchesSelector';
          } // check vendor prefixes


          var prefixes = ['webkit', 'moz', 'ms', 'o'];

          for (var i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i];
            var method = prefix + 'MatchesSelector';

            if (ElemProto[method]) {
              return method;
            }
          }
        }();

        return function matchesSelector(elem, selector) {
          return elem[matchesMethod](selector);
        };
      });
      /***/

    },

    /***/
    82026: function _(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /**
      * EvEmitter v1.1.0
      * Lil' event emitter
      * MIT License
      */

      /* jshint unused: true, undef: true, strict: true */


      (function (global, factory) {
        // universal module definition

        /* jshint strict: false */

        /* globals define, module, window */
        if (true) {
          // AMD - RequireJS
          !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(typeof window != 'undefined' ? window : this, function () {
        "use strict";

        function EvEmitter() {}

        var proto = EvEmitter.prototype;

        proto.on = function (eventName, listener) {
          if (!eventName || !listener) {
            return;
          } // set events hash


          var events = this._events = this._events || {}; // set listeners array

          var listeners = events[eventName] = events[eventName] || []; // only add once

          if (listeners.indexOf(listener) == -1) {
            listeners.push(listener);
          }

          return this;
        };

        proto.once = function (eventName, listener) {
          if (!eventName || !listener) {
            return;
          } // add event


          this.on(eventName, listener); // set once flag
          // set onceEvents hash

          var onceEvents = this._onceEvents = this._onceEvents || {}; // set onceListeners object

          var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {}; // set flag

          onceListeners[listener] = true;
          return this;
        };

        proto.off = function (eventName, listener) {
          var listeners = this._events && this._events[eventName];

          if (!listeners || !listeners.length) {
            return;
          }

          var index = listeners.indexOf(listener);

          if (index != -1) {
            listeners.splice(index, 1);
          }

          return this;
        };

        proto.emitEvent = function (eventName, args) {
          var listeners = this._events && this._events[eventName];

          if (!listeners || !listeners.length) {
            return;
          } // copy over to avoid interference if .off() in listener


          listeners = listeners.slice(0);
          args = args || []; // once stuff

          var onceListeners = this._onceEvents && this._onceEvents[eventName];

          for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i];
            var isOnce = onceListeners && onceListeners[listener];

            if (isOnce) {
              // remove listener
              // remove before trigger to prevent recursion
              this.off(eventName, listener); // unset once flag

              delete onceListeners[listener];
            } // trigger listener


            listener.apply(this, args);
          }

          return this;
        };

        proto.allOff = function () {
          delete this._events;
          delete this._onceEvents;
        };

        return EvEmitter;
      });
      /***/

    },

    /***/
    94060: function _(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /**
      * Fizzy UI utils v2.0.7
      * MIT license
      */

      /*jshint browser: true, undef: true, unused: true, strict: true */


      (function (window, factory) {
        // universal module definition

        /*jshint strict: false */

        /*globals define, module, require */
        if (true) {
          // AMD
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
          /*! desandro-matches-selector/matches-selector */
          56766)], __WEBPACK_AMD_DEFINE_RESULT__ = function (matchesSelector) {
            return factory(window, matchesSelector);
          }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(window, function factory(window, matchesSelector) {
        'use strict';

        var utils = {}; // ----- extend ----- //
        // extends objects

        utils.extend = function (a, b) {
          for (var prop in b) {
            a[prop] = b[prop];
          }

          return a;
        }; // ----- modulo ----- //


        utils.modulo = function (num, div) {
          return (num % div + div) % div;
        }; // ----- makeArray ----- //


        var arraySlice = Array.prototype.slice; // turn element or nodeList into an array

        utils.makeArray = function (obj) {
          if (Array.isArray(obj)) {
            // use object if already an array
            return obj;
          } // return empty array if undefined or null. #6


          if (obj === null || obj === undefined) {
            return [];
          }

          var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';

          if (isArrayLike) {
            // convert nodeList to array
            return arraySlice.call(obj);
          } // array of single index


          return [obj];
        }; // ----- removeFrom ----- //


        utils.removeFrom = function (ary, obj) {
          var index = ary.indexOf(obj);

          if (index != -1) {
            ary.splice(index, 1);
          }
        }; // ----- getParent ----- //


        utils.getParent = function (elem, selector) {
          while (elem.parentNode && elem != document.body) {
            elem = elem.parentNode;

            if (matchesSelector(elem, selector)) {
              return elem;
            }
          }
        }; // ----- getQueryElement ----- //
        // use element as selector string


        utils.getQueryElement = function (elem) {
          if (typeof elem == 'string') {
            return document.querySelector(elem);
          }

          return elem;
        }; // ----- handleEvent ----- //
        // enable .ontype to trigger from .addEventListener( elem, 'type' )


        utils.handleEvent = function (event) {
          var method = 'on' + event.type;

          if (this[method]) {
            this[method](event);
          }
        }; // ----- filterFindElements ----- //


        utils.filterFindElements = function (elems, selector) {
          // make array of elems
          elems = utils.makeArray(elems);
          var ffElems = [];
          elems.forEach(function (elem) {
            // check that elem is an actual element
            if (!(elem instanceof HTMLElement)) {
              return;
            } // add elem if no selector


            if (!selector) {
              ffElems.push(elem);
              return;
            } // filter & find items if we have a selector
            // filter


            if (matchesSelector(elem, selector)) {
              ffElems.push(elem);
            } // find children


            var childElems = elem.querySelectorAll(selector); // concat childElems to filterFound array

            for (var i = 0; i < childElems.length; i++) {
              ffElems.push(childElems[i]);
            }
          });
          return ffElems;
        }; // ----- debounceMethod ----- //


        utils.debounceMethod = function (_class, methodName, threshold) {
          threshold = threshold || 100; // original method

          var method = _class.prototype[methodName];
          var timeoutName = methodName + 'Timeout';

          _class.prototype[methodName] = function () {
            var timeout = this[timeoutName];
            clearTimeout(timeout);
            var args = arguments;

            var _this = this;

            this[timeoutName] = setTimeout(function () {
              method.apply(_this, args);
              delete _this[timeoutName];
            }, threshold);
          };
        }; // ----- docReady ----- //


        utils.docReady = function (callback) {
          var readyState = document.readyState;

          if (readyState == 'complete' || readyState == 'interactive') {
            // do async to allow for other scripts to run. metafizzy/flickity#441
            setTimeout(callback);
          } else {
            document.addEventListener('DOMContentLoaded', callback);
          }
        }; // ----- htmlInit ----- //
        // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/


        utils.toDashed = function (str) {
          return str.replace(/(.)([A-Z])/g, function (match, $1, $2) {
            return $1 + '-' + $2;
          }).toLowerCase();
        };

        var console = window.console;
        /**
         * allow user to initialize classes via [data-namespace] or .js-namespace class
         * htmlInit( Widget, 'widgetName' )
         * options are parsed from data-namespace-options
         */

        utils.htmlInit = function (WidgetClass, namespace) {
          utils.docReady(function () {
            var dashedNamespace = utils.toDashed(namespace);
            var dataAttr = 'data-' + dashedNamespace;
            var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
            var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
            var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
            var dataOptionsAttr = dataAttr + '-options';
            var jQuery = window.jQuery;
            elems.forEach(function (elem) {
              var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
              var options;

              try {
                options = attr && JSON.parse(attr);
              } catch (error) {
                // log error, do not initialize
                if (console) {
                  console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
                }

                return;
              } // initialize


              var instance = new WidgetClass(elem, options); // make available via $().data('namespace')

              if (jQuery) {
                jQuery.data(elem, namespace, instance);
              }
            });
          });
        }; // -----  ----- //


        return utils;
      });
      /***/

    },

    /***/
    32575: function _(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*!
      * getSize v2.0.3
      * measure size of elements
      * MIT license
      */

      /* jshint browser: true, strict: true, undef: true, unused: true */

      /* globals console: false */


      (function (window, factory) {
        /* jshint strict: false */

        /* globals define, module */
        if (true) {
          // AMD
          !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(window, function factory() {
        'use strict'; // -------------------------- helpers -------------------------- //
        // get a number from a string, not a percentage

        function getStyleSize(value) {
          var num = parseFloat(value); // not a percent like '100%', and a number

          var isValid = value.indexOf('%') == -1 && !isNaN(num);
          return isValid && num;
        }

        function noop() {}

        var logError = typeof console == 'undefined' ? noop : function (message) {
          console.error(message);
        }; // -------------------------- measurements -------------------------- //

        var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
        var measurementsLength = measurements.length;

        function getZeroSize() {
          var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
          };

          for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            size[measurement] = 0;
          }

          return size;
        } // -------------------------- getStyle -------------------------- //

        /**
         * getStyle, get style of element, check for Firefox bug
         * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
         */


        function getStyle(elem) {
          var style = getComputedStyle(elem);

          if (!style) {
            logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See https://bit.ly/getsizebug1');
          }

          return style;
        } // -------------------------- setup -------------------------- //


        var isSetup = false;
        var isBoxSizeOuter;
        /**
         * setup
         * check isBoxSizerOuter
         * do on first getSize() rather than on page load for Firefox bug
         */

        function setup() {
          // setup once
          if (isSetup) {
            return;
          }

          isSetup = true; // -------------------------- box sizing -------------------------- //

          /**
           * Chrome & Safari measure the outer-width on style.width on border-box elems
           * IE11 & Firefox<29 measures the inner-width
           */

          var div = document.createElement('div');
          div.style.width = '200px';
          div.style.padding = '1px 2px 3px 4px';
          div.style.borderStyle = 'solid';
          div.style.borderWidth = '1px 2px 3px 4px';
          div.style.boxSizing = 'border-box';
          var body = document.body || document.documentElement;
          body.appendChild(div);
          var style = getStyle(div); // round value for browser zoom. desandro/masonry#928

          isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
          getSize.isBoxSizeOuter = isBoxSizeOuter;
          body.removeChild(div);
        } // -------------------------- getSize -------------------------- //


        function getSize(elem) {
          setup(); // use querySeletor if elem is string

          if (typeof elem == 'string') {
            elem = document.querySelector(elem);
          } // do not proceed on non-objects


          if (!elem || typeof elem != 'object' || !elem.nodeType) {
            return;
          }

          var style = getStyle(elem); // if hidden, everything is 0

          if (style.display == 'none') {
            return getZeroSize();
          }

          var size = {};
          size.width = elem.offsetWidth;
          size.height = elem.offsetHeight;
          var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box'; // get all measurements

          for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            var value = style[measurement];
            var num = parseFloat(value); // any 'auto', 'medium' value will be 0

            size[measurement] = !isNaN(num) ? num : 0;
          }

          var paddingWidth = size.paddingLeft + size.paddingRight;
          var paddingHeight = size.paddingTop + size.paddingBottom;
          var marginWidth = size.marginLeft + size.marginRight;
          var marginHeight = size.marginTop + size.marginBottom;
          var borderWidth = size.borderLeftWidth + size.borderRightWidth;
          var borderHeight = size.borderTopWidth + size.borderBottomWidth;
          var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter; // overwrite width and height if we can get it from style

          var styleWidth = getStyleSize(style.width);

          if (styleWidth !== false) {
            size.width = styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
          }

          var styleHeight = getStyleSize(style.height);

          if (styleHeight !== false) {
            size.height = styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
          }

          size.innerWidth = size.width - (paddingWidth + borderWidth);
          size.innerHeight = size.height - (paddingHeight + borderHeight);
          size.outerWidth = size.width + marginWidth;
          size.outerHeight = size.height + marginHeight;
          return size;
        }

        return getSize;
      });
      /***/

    },

    /***/
    96302: function _(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*!
      * imagesLoaded v4.1.4
      * JavaScript is all like "You images are done yet or what?"
      * MIT License
      */


      (function (window, factory) {
        'use strict'; // universal module definition

        /*global define: false, module: false, require: false */

        if (true) {
          // AMD
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
          /*! ev-emitter/ev-emitter */
          82026)], __WEBPACK_AMD_DEFINE_RESULT__ = function (EvEmitter) {
            return factory(window, EvEmitter);
          }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(typeof window !== 'undefined' ? window : this, // --------------------------  factory -------------------------- //
      function factory(window, EvEmitter) {
        'use strict';

        var $ = window.jQuery;
        var console = window.console; // -------------------------- helpers -------------------------- //
        // extend objects

        function extend(a, b) {
          for (var prop in b) {
            a[prop] = b[prop];
          }

          return a;
        }

        var arraySlice = Array.prototype.slice; // turn element or nodeList into an array

        function makeArray(obj) {
          if (Array.isArray(obj)) {
            // use object if already an array
            return obj;
          }

          var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';

          if (isArrayLike) {
            // convert nodeList to array
            return arraySlice.call(obj);
          } // array of single index


          return [obj];
        } // -------------------------- imagesLoaded -------------------------- //

        /**
         * @param {Array, Element, NodeList, String} elem
         * @param {Object or Function} options - if function, use as callback
         * @param {Function} onAlways - callback function
         */


        function ImagesLoaded(elem, options, onAlways) {
          // coerce ImagesLoaded() without new, to be new ImagesLoaded()
          if (!(this instanceof ImagesLoaded)) {
            return new ImagesLoaded(elem, options, onAlways);
          } // use elem as selector string


          var queryElem = elem;

          if (typeof elem == 'string') {
            queryElem = document.querySelectorAll(elem);
          } // bail if bad element


          if (!queryElem) {
            console.error('Bad element for imagesLoaded ' + (queryElem || elem));
            return;
          }

          this.elements = makeArray(queryElem);
          this.options = extend({}, this.options); // shift arguments if no options set

          if (typeof options == 'function') {
            onAlways = options;
          } else {
            extend(this.options, options);
          }

          if (onAlways) {
            this.on('always', onAlways);
          }

          this.getImages();

          if ($) {
            // add jQuery Deferred object
            this.jqDeferred = new $.Deferred();
          } // HACK check async to allow time to bind listeners


          setTimeout(this.check.bind(this));
        }

        ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
        ImagesLoaded.prototype.options = {};

        ImagesLoaded.prototype.getImages = function () {
          this.images = []; // filter & find items if we have an item selector

          this.elements.forEach(this.addElementImages, this);
        };
        /**
         * @param {Node} element
         */


        ImagesLoaded.prototype.addElementImages = function (elem) {
          // filter siblings
          if (elem.nodeName == 'IMG') {
            this.addImage(elem);
          } // get background image on element


          if (this.options.background === true) {
            this.addElementBackgroundImages(elem);
          } // find children
          // no non-element nodes, #143


          var nodeType = elem.nodeType;

          if (!nodeType || !elementNodeTypes[nodeType]) {
            return;
          }

          var childImgs = elem.querySelectorAll('img'); // concat childElems to filterFound array

          for (var i = 0; i < childImgs.length; i++) {
            var img = childImgs[i];
            this.addImage(img);
          } // get child background images


          if (typeof this.options.background == 'string') {
            var children = elem.querySelectorAll(this.options.background);

            for (i = 0; i < children.length; i++) {
              var child = children[i];
              this.addElementBackgroundImages(child);
            }
          }
        };

        var elementNodeTypes = {
          1: true,
          9: true,
          11: true
        };

        ImagesLoaded.prototype.addElementBackgroundImages = function (elem) {
          var style = getComputedStyle(elem);

          if (!style) {
            // Firefox returns null if in a hidden iframe https://bugzil.la/548397
            return;
          } // get url inside url("...")


          var reURL = /url\((['"])?(.*?)\1\)/gi;
          var matches = reURL.exec(style.backgroundImage);

          while (matches !== null) {
            var url = matches && matches[2];

            if (url) {
              this.addBackground(url, elem);
            }

            matches = reURL.exec(style.backgroundImage);
          }
        };
        /**
         * @param {Image} img
         */


        ImagesLoaded.prototype.addImage = function (img) {
          var loadingImage = new LoadingImage(img);
          this.images.push(loadingImage);
        };

        ImagesLoaded.prototype.addBackground = function (url, elem) {
          var background = new Background(url, elem);
          this.images.push(background);
        };

        ImagesLoaded.prototype.check = function () {
          var _this = this;

          this.progressedCount = 0;
          this.hasAnyBroken = false; // complete if no images

          if (!this.images.length) {
            this.complete();
            return;
          }

          function onProgress(image, elem, message) {
            // HACK - Chrome triggers event before object properties have changed. #83
            setTimeout(function () {
              _this.progress(image, elem, message);
            });
          }

          this.images.forEach(function (loadingImage) {
            loadingImage.once('progress', onProgress);
            loadingImage.check();
          });
        };

        ImagesLoaded.prototype.progress = function (image, elem, message) {
          this.progressedCount++;
          this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded; // progress event

          this.emitEvent('progress', [this, image, elem]);

          if (this.jqDeferred && this.jqDeferred.notify) {
            this.jqDeferred.notify(this, image);
          } // check if completed


          if (this.progressedCount == this.images.length) {
            this.complete();
          }

          if (this.options.debug && console) {
            console.log('progress: ' + message, image, elem);
          }
        };

        ImagesLoaded.prototype.complete = function () {
          var eventName = this.hasAnyBroken ? 'fail' : 'done';
          this.isComplete = true;
          this.emitEvent(eventName, [this]);
          this.emitEvent('always', [this]);

          if (this.jqDeferred) {
            var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
            this.jqDeferred[jqMethod](this);
          }
        }; // --------------------------  -------------------------- //


        function LoadingImage(img) {
          this.img = img;
        }

        LoadingImage.prototype = Object.create(EvEmitter.prototype);

        LoadingImage.prototype.check = function () {
          // If complete is true and browser supports natural sizes,
          // try to check for image status manually.
          var isComplete = this.getIsImageComplete();

          if (isComplete) {
            // report based on naturalWidth
            this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
            return;
          } // If none of the checks above matched, simulate loading on detached element.


          this.proxyImage = new Image();
          this.proxyImage.addEventListener('load', this);
          this.proxyImage.addEventListener('error', this); // bind to image as well for Firefox. #191

          this.img.addEventListener('load', this);
          this.img.addEventListener('error', this);
          this.proxyImage.src = this.img.src;
        };

        LoadingImage.prototype.getIsImageComplete = function () {
          // check for non-zero, non-undefined naturalWidth
          // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
          return this.img.complete && this.img.naturalWidth;
        };

        LoadingImage.prototype.confirm = function (isLoaded, message) {
          this.isLoaded = isLoaded;
          this.emitEvent('progress', [this, this.img, message]);
        }; // ----- events ----- //
        // trigger specified handler for event type


        LoadingImage.prototype.handleEvent = function (event) {
          var method = 'on' + event.type;

          if (this[method]) {
            this[method](event);
          }
        };

        LoadingImage.prototype.onload = function () {
          this.confirm(true, 'onload');
          this.unbindEvents();
        };

        LoadingImage.prototype.onerror = function () {
          this.confirm(false, 'onerror');
          this.unbindEvents();
        };

        LoadingImage.prototype.unbindEvents = function () {
          this.proxyImage.removeEventListener('load', this);
          this.proxyImage.removeEventListener('error', this);
          this.img.removeEventListener('load', this);
          this.img.removeEventListener('error', this);
        }; // -------------------------- Background -------------------------- //


        function Background(url, element) {
          this.url = url;
          this.element = element;
          this.img = new Image();
        } // inherit LoadingImage prototype


        Background.prototype = Object.create(LoadingImage.prototype);

        Background.prototype.check = function () {
          this.img.addEventListener('load', this);
          this.img.addEventListener('error', this);
          this.img.src = this.url; // check if image is already complete

          var isComplete = this.getIsImageComplete();

          if (isComplete) {
            this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
            this.unbindEvents();
          }
        };

        Background.prototype.unbindEvents = function () {
          this.img.removeEventListener('load', this);
          this.img.removeEventListener('error', this);
        };

        Background.prototype.confirm = function (isLoaded, message) {
          this.isLoaded = isLoaded;
          this.emitEvent('progress', [this, this.element, message]);
        }; // -------------------------- jQuery -------------------------- //


        ImagesLoaded.makeJQueryPlugin = function (jQuery) {
          jQuery = jQuery || window.jQuery;

          if (!jQuery) {
            return;
          } // set local variable


          $ = jQuery; // $().imagesLoaded()

          $.fn.imagesLoaded = function (options, callback) {
            var instance = new ImagesLoaded(this, options, callback);
            return instance.jqDeferred.promise($(this));
          };
        }; // try making plugin


        ImagesLoaded.makeJQueryPlugin(); // --------------------------  -------------------------- //

        return ImagesLoaded;
      });
      /***/

    },

    /***/
    98745: function _(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*!
      * Masonry v4.2.2
      * Cascading grid layout library
      * https://masonry.desandro.com
      * MIT License
      * by David DeSandro
      */


      (function (window, factory) {
        // universal module definition

        /* jshint strict: false */

        /*globals define, module, require */
        if (true) {
          // AMD
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
          /*! outlayer/outlayer */
          22933), __webpack_require__(
          /*! get-size/get-size */
          32575)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(window, function factory(Outlayer, getSize) {
        'use strict'; // -------------------------- masonryDefinition -------------------------- //
        // create an Outlayer layout class

        var Masonry = Outlayer.create('masonry'); // isFitWidth -> fitWidth

        Masonry.compatOptions.fitWidth = 'isFitWidth';
        var proto = Masonry.prototype;

        proto._resetLayout = function () {
          this.getSize();

          this._getMeasurement('columnWidth', 'outerWidth');

          this._getMeasurement('gutter', 'outerWidth');

          this.measureColumns(); // reset column Y

          this.colYs = [];

          for (var i = 0; i < this.cols; i++) {
            this.colYs.push(0);
          }

          this.maxY = 0;
          this.horizontalColIndex = 0;
        };

        proto.measureColumns = function () {
          this.getContainerWidth(); // if columnWidth is 0, default to outerWidth of first item

          if (!this.columnWidth) {
            var firstItem = this.items[0];
            var firstItemElem = firstItem && firstItem.element; // columnWidth fall back to item of first element

            this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || // if first elem has no width, default to size of container
            this.containerWidth;
          }

          var columnWidth = this.columnWidth += this.gutter; // calculate columns

          var containerWidth = this.containerWidth + this.gutter;
          var cols = containerWidth / columnWidth; // fix rounding errors, typically with gutters

          var excess = columnWidth - containerWidth % columnWidth; // if overshoot is less than a pixel, round up, otherwise floor it

          var mathMethod = excess && excess < 1 ? 'round' : 'floor';
          cols = Math[mathMethod](cols);
          this.cols = Math.max(cols, 1);
        };

        proto.getContainerWidth = function () {
          // container is parent if fit width
          var isFitWidth = this._getOption('fitWidth');

          var container = isFitWidth ? this.element.parentNode : this.element; // check that this.size and size are there
          // IE8 triggers resize on body size change, so they might not be

          var size = getSize(container);
          this.containerWidth = size && size.innerWidth;
        };

        proto._getItemLayoutPosition = function (item) {
          item.getSize(); // how many columns does this brick span

          var remainder = item.size.outerWidth % this.columnWidth;
          var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil'; // round if off by 1 pixel, otherwise use ceil

          var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
          colSpan = Math.min(colSpan, this.cols); // use horizontal or top column position

          var colPosMethod = this.options.horizontalOrder ? '_getHorizontalColPosition' : '_getTopColPosition';
          var colPosition = this[colPosMethod](colSpan, item); // position the brick

          var position = {
            x: this.columnWidth * colPosition.col,
            y: colPosition.y
          }; // apply setHeight to necessary columns

          var setHeight = colPosition.y + item.size.outerHeight;
          var setMax = colSpan + colPosition.col;

          for (var i = colPosition.col; i < setMax; i++) {
            this.colYs[i] = setHeight;
          }

          return position;
        };

        proto._getTopColPosition = function (colSpan) {
          var colGroup = this._getTopColGroup(colSpan); // get the minimum Y value from the columns


          var minimumY = Math.min.apply(Math, colGroup);
          return {
            col: colGroup.indexOf(minimumY),
            y: minimumY
          };
        };
        /**
         * @param {Number} colSpan - number of columns the element spans
         * @returns {Array} colGroup
         */


        proto._getTopColGroup = function (colSpan) {
          if (colSpan < 2) {
            // if brick spans only one column, use all the column Ys
            return this.colYs;
          }

          var colGroup = []; // how many different places could this brick fit horizontally

          var groupCount = this.cols + 1 - colSpan; // for each group potential horizontal position

          for (var i = 0; i < groupCount; i++) {
            colGroup[i] = this._getColGroupY(i, colSpan);
          }

          return colGroup;
        };

        proto._getColGroupY = function (col, colSpan) {
          if (colSpan < 2) {
            return this.colYs[col];
          } // make an array of colY values for that one group


          var groupColYs = this.colYs.slice(col, col + colSpan); // and get the max value of the array

          return Math.max.apply(Math, groupColYs);
        }; // get column position based on horizontal index. #873


        proto._getHorizontalColPosition = function (colSpan, item) {
          var col = this.horizontalColIndex % this.cols;
          var isOver = colSpan > 1 && col + colSpan > this.cols; // shift to next row if item can't fit on current row

          col = isOver ? 0 : col; // don't let zero-size items take up space

          var hasSize = item.size.outerWidth && item.size.outerHeight;
          this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
          return {
            col: col,
            y: this._getColGroupY(col, colSpan)
          };
        };

        proto._manageStamp = function (stamp) {
          var stampSize = getSize(stamp);

          var offset = this._getElementOffset(stamp); // get the columns that this stamp affects


          var isOriginLeft = this._getOption('originLeft');

          var firstX = isOriginLeft ? offset.left : offset.right;
          var lastX = firstX + stampSize.outerWidth;
          var firstCol = Math.floor(firstX / this.columnWidth);
          firstCol = Math.max(0, firstCol);
          var lastCol = Math.floor(lastX / this.columnWidth); // lastCol should not go over if multiple of columnWidth #425

          lastCol -= lastX % this.columnWidth ? 0 : 1;
          lastCol = Math.min(this.cols - 1, lastCol); // set colYs to bottom of the stamp

          var isOriginTop = this._getOption('originTop');

          var stampMaxY = (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;

          for (var i = firstCol; i <= lastCol; i++) {
            this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
          }
        };

        proto._getContainerSize = function () {
          this.maxY = Math.max.apply(Math, this.colYs);
          var size = {
            height: this.maxY
          };

          if (this._getOption('fitWidth')) {
            size.width = this._getContainerFitWidth();
          }

          return size;
        };

        proto._getContainerFitWidth = function () {
          var unusedCols = 0; // count unused columns

          var i = this.cols;

          while (--i) {
            if (this.colYs[i] !== 0) {
              break;
            }

            unusedCols++;
          } // fit container to columns that have been used


          return (this.cols - unusedCols) * this.columnWidth - this.gutter;
        };

        proto.needsResizeLayout = function () {
          var previousWidth = this.containerWidth;
          this.getContainerWidth();
          return previousWidth != this.containerWidth;
        };

        return Masonry;
      });
      /***/

    },

    /***/
    25918: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IMasonryGalleryImage": function IMasonryGalleryImage() {
          return (
            /* binding */
            _IMasonryGalleryImage
          );
        },

        /* harmony export */
        "MasonryGalleryComponent": function MasonryGalleryComponent() {
          return (
            /* binding */
            _MasonryGalleryComponent
          );
        },

        /* harmony export */
        "MasonryGalleryModule": function MasonryGalleryModule() {
          return (
            /* binding */
            _MasonryGalleryModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var imagesloaded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! imagesloaded */
      96302);
      /* harmony import */


      var imagesloaded__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var masonry_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! masonry-layout */
      98745);
      /* harmony import */


      var masonry_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(masonry_layout__WEBPACK_IMPORTED_MODULE_1__);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var Utilities = /*#__PURE__*/function () {
        function Utilities() {
          _classCallCheck(this, Utilities);
        }

        _createClass(Utilities, [{
          key: "newGuid",
          value:
          /**
           * @return {?}
           */
          function newGuid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
            /**
            * @param {?} c
            * @return {?}
            */
            function (c) {
              // tslint:disable-next-line:no-bitwise triple-equals

              /** @type {?} */
              var r = Math.random() * 16 | 0;
              /** @type {?} */

              var v = c == 'x' ? r : r & 0x3 | 0x8;
              return v.toString(16);
            });
          }
        }]);

        return Utilities;
      }();
      /** @type {?} */


      var utilities = new Utilities();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var _MasonryGalleryComponent = /*#__PURE__*/function () {
        /**
         * @param {?} renderer
         */
        function _MasonryGalleryComponent(renderer) {
          _classCallCheck(this, _MasonryGalleryComponent);

          this.renderer = renderer;
          this.images = [];
          this.width = 330;
          this.gutter = 5;
          this.verticalGutter = 5;
          this.imageClasses = [];
          this.clickImage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.removeComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.layoutComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.galleryGuid = utilities.newGuid();
          this.mansonryItemSelectorClass = "grid-item-".concat(this.galleryGuid);
          this.activeImages = [];
          this.viewReady = false;
        }
        /**
         * @param {?} changes
         * @return {?}
         */


        _createClass(_MasonryGalleryComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.images && changes.images.currentValue) {
              if (!this.viewReady) {
                // process images once we can
                this.changesToProcess = changes;
              } else {
                this.processImages(changes);
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.msnry) {
              this.msnry.destroy();
            }
          }
          /**
           * @param {?} image
           * @return {?}
           */

        }, {
          key: "handleClick",
          value: function handleClick(image) {
            this.clickImage.next(image);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.viewReady = true;
            this.initMasonry(); // process images now

            if (this.changesToProcess) {
              this.processImages(this.changesToProcess);
              this.changesToProcess = undefined;
            }
          }
          /**
           * @param {?} images
           * @return {?}
           */

        }, {
          key: "addImages",
          value: function addImages(images) {
            if (images && images.length > 0) {
              this.addImagesToGallery(images);
            }
          }
          /**
           * @param {?} images
           * @return {?}
           */

        }, {
          key: "removeImages",
          value: function removeImages(images) {
            var _this2 = this;

            if (images && images.length > 0) {
              images.forEach(
              /**
              * @param {?} image
              * @return {?}
              */
              function (image) {
                _this2.removeImageFromGallery(image);
              });
            }
          }
          /**
           * @private
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "processImages",
          value: function processImages(changes) {
            /** @type {?} */
            var imagesToProcess = this.getAddedAndRemovesImages(changes); // add images to mansonry layout

            this.addImages(imagesToProcess.addedImages); // removes images from layout

            this.removeImages(imagesToProcess.removedImages);
          }
          /**
           * @private
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "getAddedAndRemovesImages",
          value: function getAddedAndRemovesImages(changes) {
            /** @type {?} */
            var addedImages = [];
            /** @type {?} */

            var removedImages = [];
            /** @type {?} */

            var newImagesValue = changes.images.currentValue;
            /** @type {?} */

            var oldImagesValue = changes.images.previousValue;

            if (!oldImagesValue) {
              // all images are new ones
              addedImages = changes.images.currentValue;
            } else {
              // process added images
              newImagesValue.forEach(
              /**
              * @param {?} newImage
              * @return {?}
              */
              function (newImage) {
                /** @type {?} */
                var existingImage = oldImagesValue.find(
                /**
                * @param {?} m
                * @return {?}
                */
                function (m) {
                  return m.imageUrl.toLowerCase() === newImage.imageUrl.toLowerCase();
                });
                if (existingImage) ;else {
                  // image is new
                  addedImages.push(newImage);
                }
              }); // process removed images

              oldImagesValue.forEach(
              /**
              * @param {?} oldImage
              * @return {?}
              */
              function (oldImage) {
                /** @type {?} */
                var existingImage = newImagesValue.find(
                /**
                * @param {?} m
                * @return {?}
                */
                function (m) {
                  return m.imageUrl.toLowerCase() === oldImage.imageUrl.toLowerCase();
                });
                if (existingImage) ;else {
                  // image is removed
                  removedImages.push(oldImage);
                }
              });
            }

            return {
              addedImages: addedImages,
              removedImages: removedImages
            };
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "initMasonry",
          value: function initMasonry() {
            this.grid = document.getElementById(this.galleryGuid); // remove all existing data from grid

            this.grid.innerHTML = '';

            if (!this.grid) {
              throw Error("Could not init mansory due to non existing elem with id '".concat(this.galleryGuid, "'"));
            }

            this.msnry = new masonry_layout__WEBPACK_IMPORTED_MODULE_1__(this.grid, {
              // options...
              itemSelector: '.' + this.mansonryItemSelectorClass,
              columnWidth: this.width,
              gutter: this.gutter
            });
            /** @type {?} */

            var that = this;
            this.msnry.on('layoutComplete',
            /**
            * @param {?} items
            * @return {?}
            */
            function (items) {
              that.layoutComplete.next(items);
            });
            this.msnry.on('removeComplete',
            /**
            * @param {?} items
            * @return {?}
            */
            function (items) {
              that.removeComplete.next(items);
            });
          }
          /**
           * @private
           * @param {?} image
           * @return {?}
           */

        }, {
          key: "removeImageFromGallery",
          value: function removeImageFromGallery(image) {
            // get image guid

            /** @type {?} */
            var imageIdResult = this.activeImages.find(
            /**
            * @param {?} m
            * @return {?}
            */
            function (m) {
              return m.image.imageUrl.toLowerCase() === image.imageUrl.toLowerCase();
            });

            if (!imageIdResult) {
              // image was not found, this is probably an error
              console.warn("Image with url '".concat(image.imageUrl, "' was not found. If you are adding images, make sure to 'replace' the images array with a new one\n                so that detection change can be executed instead of just adding an image to array\n                (which doesn't fire change detection on array property)"));
              return;
            } // find image based on its id

            /** @type {?} */


            var imageElem = document.getElementById(imageIdResult.id);

            if (!imageElem) {
              // image was not found in DOM
              console.warn("Image with id '{".concat(imageIdResult.id, "}' was not found in DOM. Have you manipulated the DOM in some way?"));
              return;
            } // remove image from gallery


            this.msnry.remove(imageElem); // refresh layout

            this.msnry.layout(); // remove image from array

            for (var i = 0; i < this.activeImages.length; i++) {
              /** @type {?} */
              var idWithImage = this.activeImages[i];

              if (idWithImage.image.imageUrl.toLowerCase() === imageIdResult.image.imageUrl.toLowerCase()) {
                this.activeImages.splice(i, 1);
              }
            }
          }
          /**
           * @private
           * @param {?} images
           * @return {?}
           */

        }, {
          key: "addImagesToGallery",
          value: function addImagesToGallery(images) {
            var _this3 = this;

            if (!this.grid) {
              throw Error('Grid element is not yet ready, are you trying to add image too soon?');
            }
            /** @type {?} */


            var imagesWrapper = this.renderer.createElement('span');
            images.forEach(
            /**
            * @param {?} image
            * @return {?}
            */
            function (image) {
              // generate unique image id

              /** @type {?} */
              var imageId = _this3.getImageId(); // create element

              /** @type {?} */


              var imageElem = _this3.renderer.createElement('img');

              imageElem.setAttribute('id', imageId);
              imageElem.setAttribute('alt', image.alt ? image.alt : 'no description');
              imageElem.setAttribute('src', image.imageUrl); // note - images are hidden by default and should be shown only after they are loaded

              imageElem.setAttribute('style', "display: none; width: ".concat(_this3.width, "px; margin-bottom: ").concat(_this3.verticalGutter, "px"));
              imageElem.className = _this3.getImageClass();
              imageElem.addEventListener('click',
              /**
              * @return {?}
              */
              function () {
                _this3.handleClick(image);
              }); // store guid with this image

              _this3.activeImages.push({
                id: imageId,
                image: image
              }); // add to dom and mansory & refresh layout


              _this3.renderer.appendChild(imagesWrapper, imageElem);
            }); // add html to dom

            this.renderer.appendChild(this.grid, imagesWrapper); // add images once they are loaded

            /** @type {?} */

            var imgLoad = imagesloaded__WEBPACK_IMPORTED_MODULE_0___default()(imagesWrapper);
            imgLoad.on('progress',
            /**
            * @param {?} instance
            * @param {?} image
            * @return {?}
            */
            function (instance, image) {
              if (image.isLoaded) {
                _this3.renderer.appendChild(_this3.grid, image.img); // unhide image


                _this3.renderer.setStyle(image.img, 'display', 'block');

                _this3.msnry.appended(image.img);

                _this3.msnry.reloadItems();
              }
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getImageClass",
          value: function getImageClass() {
            /** @type {?} */
            var className = this.mansonryItemSelectorClass;

            if (this.imageClasses && this.imageClasses.length > 0) {
              /** @type {?} */
              var customClass = this.imageClasses.join(' ');
              className += ' ' + customClass;
            }

            return className;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getImageId",
          value: function getImageId() {
            return this.galleryGuid + '_' + utilities.newGuid();
          }
        }]);

        return _MasonryGalleryComponent;
      }();

      _MasonryGalleryComponent.ɵfac = function MasonryGalleryComponent_Factory(t) {
        return new (t || _MasonryGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2));
      };

      _MasonryGalleryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _MasonryGalleryComponent,
        selectors: [["ngx-masonry-gallery"]],
        inputs: {
          images: "images",
          width: "width",
          gutter: "gutter",
          verticalGutter: "verticalGutter",
          imageClasses: "imageClasses"
        },
        outputs: {
          clickImage: "clickImage",
          removeComplete: "removeComplete",
          layoutComplete: "layoutComplete"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [[3, "id"]],
        template: function MasonryGalleryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.galleryGuid);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      _MasonryGalleryComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
        }];
      };

      _MasonryGalleryComponent.propDecorators = {
        images: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        gutter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        verticalGutter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        imageClasses: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        clickImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        removeComplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        layoutComplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MasonryGalleryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
            selector: 'ngx-masonry-gallery',
            template: '<div [id]="galleryGuid"></div>'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
          }];
        }, {
          images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          gutter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          verticalGutter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          imageClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          clickImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          removeComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          layoutComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _MasonryGalleryModule = function _MasonryGalleryModule() {
        _classCallCheck(this, _MasonryGalleryModule);
      };

      _MasonryGalleryModule.ɵfac = function MasonryGalleryModule_Factory(t) {
        return new (t || _MasonryGalleryModule)();
      };

      _MasonryGalleryModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _MasonryGalleryModule
      });
      _MasonryGalleryModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MasonryGalleryModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
            declarations: [_MasonryGalleryComponent],
            exports: [_MasonryGalleryComponent]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_MasonryGalleryModule, {
          declarations: function declarations() {
            return [_MasonryGalleryComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule];
          },
          exports: function exports() {
            return [_MasonryGalleryComponent];
          }
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _IMasonryGalleryImage = function _IMasonryGalleryImage() {
        _classCallCheck(this, _IMasonryGalleryImage);
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-masonry-gallery.js.map

      /***/

    },

    /***/
    70346: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgxMasonryComponent": function NgxMasonryComponent() {
          return (
            /* binding */
            _NgxMasonryComponent
          );
        },

        /* harmony export */
        "NgxMasonryDirective": function NgxMasonryDirective() {
          return (
            /* binding */
            _NgxMasonryDirective
          );
        },

        /* harmony export */
        "NgxMasonryModule": function NgxMasonryModule() {
          return (
            /* binding */
            _NgxMasonryModule
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
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      17238);

      var _c0 = ["ngx-masonry", ""];
      var _c1 = ["*"];
      var masonryConstructor;

      var _NgxMasonryComponent = /*#__PURE__*/function () {
        function _NgxMasonryComponent(platformId, _element) {
          _classCallCheck(this, _NgxMasonryComponent);

          this.platformId = platformId;
          this._element = _element;
          this.updateLayout = false;
          this.ordered = false; // Outputs

          this.layoutComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.removeComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.itemsLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.pendingItems = [];
        }

        _createClass(_NgxMasonryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId) && masonryConstructor === undefined) {
              masonryConstructor = __webpack_require__(
              /*! masonry-layout */
              98745);
            } // Create masonry options object


            if (!this.options) {
              this.options = {};
            } // Set default itemSelector


            if (!this.options.itemSelector) {
              this.options.itemSelector = '[ngxMasonryItem], ngxMasonryItem';
            }

            this.options['transitionDuration'] = '0s';

            if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
              // Initialize Masonry
              this.masonryInstance = new masonryConstructor(this._element.nativeElement, this.options); // Bind to events

              this.masonryInstance.on('layoutComplete', function (items) {
                _this4.layoutComplete.emit(items);
              });
              this.masonryInstance.on('removeComplete', function (items) {
                _this4.removeComplete.emit(items);
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            // only update layout if it's not the first change
            if (changes.updateLayout) {
              if (!changes.updateLayout.firstChange) {
                this.layout();
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.masonryInstance) {
              this.masonryInstance.destroy();
            }
          }
        }, {
          key: "layout",
          value: function layout() {
            var _this5 = this;

            setTimeout(function () {
              _this5.masonryInstance.layout();
            });
          }
        }, {
          key: "reloadItems",
          value: function reloadItems() {
            var _this6 = this;

            setTimeout(function () {
              _this6.masonryInstance.reloadItems();
            });
          }
        }, {
          key: "addPendingItem",
          value: function addPendingItem(item) {
            this.pendingItems.push(item);
          }
        }, {
          key: "add",
          value: function add(newItem) {
            if (this.ordered) {
              var _iterator = _createForOfIteratorHelper(this.pendingItems.entries()),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _step$value = _slicedToArray(_step.value, 2),
                      index = _step$value[0],
                      item = _step$value[1];

                  if (item) {
                    if (item.images && item.images.size === 0) {
                      this.pendingItems[index] = undefined;
                      this.itemLoaded(item);

                      if (index + 1 === this.pendingItems.length) {
                        // All items are loaded
                        this.itemsLoaded.emit(this.pendingItems.length);
                        this.pendingItems = [];
                      }
                    } else {
                      return;
                    }
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } else {
              this.itemLoaded(newItem);
            }
          }
        }, {
          key: "itemLoaded",
          value: function itemLoaded(item) {
            // Tell Masonry that a child element has been added
            if (item.prepend) {
              this.masonryInstance.prepended(item.element.nativeElement);
            } else {
              this.masonryInstance.appended(item.element.nativeElement);
            } // Check if first item


            if (this.masonryInstance.items.length === 1) {
              this.masonryInstance.layout();
            }

            item.playAnimation(true);
          }
        }, {
          key: "remove",
          value: function remove(element) {
            // Tell Masonry that a child element has been removed
            this.masonryInstance.remove(element); // Layout items

            this.layout();
          }
        }]);

        return _NgxMasonryComponent;
      }();

      _NgxMasonryComponent.ɵfac = function NgxMasonryComponent_Factory(t) {
        return new (t || _NgxMasonryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _NgxMasonryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NgxMasonryComponent,
        selectors: [["", "ngx-masonry", ""], ["ngx-masonry"]],
        inputs: {
          updateLayout: "updateLayout",
          ordered: "ordered",
          options: "options"
        },
        outputs: {
          layoutComplete: "layoutComplete",
          removeComplete: "removeComplete",
          itemsLoaded: "itemsLoaded"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 1,
        vars: 0,
        template: function NgxMasonryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: ["[_nghost-%COMP%] {\n\t\t\tdisplay: block;\n\t\t}"]
      });

      _NgxMasonryComponent.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      _NgxMasonryComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        updateLayout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        ordered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        layoutComplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        removeComplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        itemsLoaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgxMasonryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: '[ngx-masonry], ngx-masonry',
            template: '<ng-content></ng-content>',
            styles: ["\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t}\n\t"]
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, {
          updateLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          ordered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          layoutComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          removeComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          itemsLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _NgxMasonryDirective = /*#__PURE__*/function () {
        function _NgxMasonryDirective(element, builder, parent, renderer) {
          _classCallCheck(this, _NgxMasonryDirective);

          this.element = element;
          this.builder = builder;
          this.parent = parent;
          this.renderer = renderer;
          this.prepend = false;
          this.animations = {
            show: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
              opacity: 0
            }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('400ms ease-in', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
              opacity: 1
            }))],
            hide: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
              opacity: '*'
            }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('400ms ease-in', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
              opacity: 0
            }))]
          };
        }

        _createClass(_NgxMasonryDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.parent.options.animations !== undefined) {
              this.animations = this.parent.options.animations;
            }

            this.renderer.setStyle(this.element.nativeElement, 'position', 'fixed');
            this.renderer.setStyle(this.element.nativeElement, 'right', '-150vw');
            this.parent.addPendingItem(this);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this7 = this;

            var images = Array.from(this.element.nativeElement.getElementsByTagName('img'));

            if (images.length === 0) {
              setTimeout(function () {
                _this7.parent.add(_this7);
              });
            } else {
              this.images = new Set(images);

              var _iterator2 = _createForOfIteratorHelper(images),
                  _step2;

              try {
                var _loop = function _loop() {
                  var imageRef = _step2.value;

                  // skip image render check if image has `masonryLazy` attribute
                  if (imageRef.hasAttribute('masonryLazy')) {
                    _this7.imageLoaded(imageRef);
                  } else {
                    _this7.renderer.listen(imageRef, 'load', function (_) {
                      _this7.imageLoaded(imageRef);
                    });

                    _this7.renderer.listen(imageRef, 'error', function (_) {
                      _this7.imageLoaded(imageRef);
                    });
                  }
                };

                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.images && this.images.size === 0 && this.element.nativeElement.parentNode) {
              this.playAnimation(false);
              this.parent.remove(this.element.nativeElement);
            }
          }
        }, {
          key: "imageLoaded",
          value: function imageLoaded(image) {
            this.images["delete"](image);

            if (this.images.size === 0) {
              this.parent.add(this);
            }
          }
        }, {
          key: "playAnimation",
          value: function playAnimation(show) {
            var metadata = show ? this.animations.show : this.animations.hide;

            if (metadata) {
              var player = this.builder.build(metadata).create(this.element.nativeElement);
              player.play();
            }
          }
        }]);

        return _NgxMasonryDirective;
      }();

      _NgxMasonryDirective.ɵfac = function NgxMasonryDirective_Factory(t) {
        return new (t || _NgxMasonryDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_2__.AnimationBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _NgxMasonryComponent;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
      };

      _NgxMasonryDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _NgxMasonryDirective,
        selectors: [["", "ngxMasonryItem", ""], ["ngxMasonryItem"]],
        inputs: {
          prepend: "prepend"
        }
      });

      _NgxMasonryDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__.AnimationBuilder
        }, {
          type: _NgxMasonryComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
              return _NgxMasonryComponent;
            })]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }];
      };

      _NgxMasonryDirective.propDecorators = {
        prepend: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgxMasonryDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ngxMasonryItem], ngxMasonryItem'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__.AnimationBuilder
          }, {
            type: _NgxMasonryComponent,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
                return _NgxMasonryComponent;
              })]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }];
        }, {
          prepend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _NgxMasonryModule = function _NgxMasonryModule() {
        _classCallCheck(this, _NgxMasonryModule);
      };

      _NgxMasonryModule.ɵfac = function NgxMasonryModule_Factory(t) {
        return new (t || _NgxMasonryModule)();
      };

      _NgxMasonryModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _NgxMasonryModule
      });
      _NgxMasonryModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgxMasonryModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [],
            declarations: [_NgxMasonryComponent, _NgxMasonryDirective],
            exports: [_NgxMasonryComponent, _NgxMasonryDirective]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_NgxMasonryModule, {
          declarations: [_NgxMasonryComponent, _NgxMasonryDirective],
          exports: [_NgxMasonryComponent, _NgxMasonryDirective]
        });
      })();
      /*
       * Public API Surface of ngx-masonry
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-masonry.js.map

      /***/

    },

    /***/
    15853: function _(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /**
      * Outlayer Item
      */


      (function (window, factory) {
        // universal module definition

        /* jshint strict: false */

        /* globals define, module, require */
        if (true) {
          // AMD - RequireJS
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
          /*! ev-emitter/ev-emitter */
          82026), __webpack_require__(
          /*! get-size/get-size */
          32575)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(window, function factory(EvEmitter, getSize) {
        'use strict'; // ----- helpers ----- //

        function isEmptyObj(obj) {
          for (var prop in obj) {
            return false;
          }

          prop = null;
          return true;
        } // -------------------------- CSS3 support -------------------------- //


        var docElemStyle = document.documentElement.style;
        var transitionProperty = typeof docElemStyle.transition == 'string' ? 'transition' : 'WebkitTransition';
        var transformProperty = typeof docElemStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
        var transitionEndEvent = {
          WebkitTransition: 'webkitTransitionEnd',
          transition: 'transitionend'
        }[transitionProperty]; // cache all vendor properties that could have vendor prefix

        var vendorProperties = {
          transform: transformProperty,
          transition: transitionProperty,
          transitionDuration: transitionProperty + 'Duration',
          transitionProperty: transitionProperty + 'Property',
          transitionDelay: transitionProperty + 'Delay'
        }; // -------------------------- Item -------------------------- //

        function Item(element, layout) {
          if (!element) {
            return;
          }

          this.element = element; // parent layout class, i.e. Masonry, Isotope, or Packery

          this.layout = layout;
          this.position = {
            x: 0,
            y: 0
          };

          this._create();
        } // inherit EvEmitter


        var proto = Item.prototype = Object.create(EvEmitter.prototype);
        proto.constructor = Item;

        proto._create = function () {
          // transition objects
          this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
          };
          this.css({
            position: 'absolute'
          });
        }; // trigger specified handler for event type


        proto.handleEvent = function (event) {
          var method = 'on' + event.type;

          if (this[method]) {
            this[method](event);
          }
        };

        proto.getSize = function () {
          this.size = getSize(this.element);
        };
        /**
         * apply CSS styles to element
         * @param {Object} style
         */


        proto.css = function (style) {
          var elemStyle = this.element.style;

          for (var prop in style) {
            // use vendor property if available
            var supportedProp = vendorProperties[prop] || prop;
            elemStyle[supportedProp] = style[prop];
          }
        }; // measure position, and sets it


        proto.getPosition = function () {
          var style = getComputedStyle(this.element);

          var isOriginLeft = this.layout._getOption('originLeft');

          var isOriginTop = this.layout._getOption('originTop');

          var xValue = style[isOriginLeft ? 'left' : 'right'];
          var yValue = style[isOriginTop ? 'top' : 'bottom'];
          var x = parseFloat(xValue);
          var y = parseFloat(yValue); // convert percent to pixels

          var layoutSize = this.layout.size;

          if (xValue.indexOf('%') != -1) {
            x = x / 100 * layoutSize.width;
          }

          if (yValue.indexOf('%') != -1) {
            y = y / 100 * layoutSize.height;
          } // clean up 'auto' or other non-integer values


          x = isNaN(x) ? 0 : x;
          y = isNaN(y) ? 0 : y; // remove padding from measurement

          x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
          y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
          this.position.x = x;
          this.position.y = y;
        }; // set settled position, apply padding


        proto.layoutPosition = function () {
          var layoutSize = this.layout.size;
          var style = {};

          var isOriginLeft = this.layout._getOption('originLeft');

          var isOriginTop = this.layout._getOption('originTop'); // x


          var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
          var xProperty = isOriginLeft ? 'left' : 'right';
          var xResetProperty = isOriginLeft ? 'right' : 'left';
          var x = this.position.x + layoutSize[xPadding]; // set in percentage or pixels

          style[xProperty] = this.getXValue(x); // reset other property

          style[xResetProperty] = ''; // y

          var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
          var yProperty = isOriginTop ? 'top' : 'bottom';
          var yResetProperty = isOriginTop ? 'bottom' : 'top';
          var y = this.position.y + layoutSize[yPadding]; // set in percentage or pixels

          style[yProperty] = this.getYValue(y); // reset other property

          style[yResetProperty] = '';
          this.css(style);
          this.emitEvent('layout', [this]);
        };

        proto.getXValue = function (x) {
          var isHorizontal = this.layout._getOption('horizontal');

          return this.layout.options.percentPosition && !isHorizontal ? x / this.layout.size.width * 100 + '%' : x + 'px';
        };

        proto.getYValue = function (y) {
          var isHorizontal = this.layout._getOption('horizontal');

          return this.layout.options.percentPosition && isHorizontal ? y / this.layout.size.height * 100 + '%' : y + 'px';
        };

        proto._transitionTo = function (x, y) {
          this.getPosition(); // get current x & y from top/left

          var curX = this.position.x;
          var curY = this.position.y;
          var didNotMove = x == this.position.x && y == this.position.y; // save end position

          this.setPosition(x, y); // if did not move and not transitioning, just go to layout

          if (didNotMove && !this.isTransitioning) {
            this.layoutPosition();
            return;
          }

          var transX = x - curX;
          var transY = y - curY;
          var transitionStyle = {};
          transitionStyle.transform = this.getTranslate(transX, transY);
          this.transition({
            to: transitionStyle,
            onTransitionEnd: {
              transform: this.layoutPosition
            },
            isCleaning: true
          });
        };

        proto.getTranslate = function (x, y) {
          // flip cooridinates if origin on right or bottom
          var isOriginLeft = this.layout._getOption('originLeft');

          var isOriginTop = this.layout._getOption('originTop');

          x = isOriginLeft ? x : -x;
          y = isOriginTop ? y : -y;
          return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
        }; // non transition + transform support


        proto.goTo = function (x, y) {
          this.setPosition(x, y);
          this.layoutPosition();
        };

        proto.moveTo = proto._transitionTo;

        proto.setPosition = function (x, y) {
          this.position.x = parseFloat(x);
          this.position.y = parseFloat(y);
        }; // ----- transition ----- //

        /**
         * @param {Object} style - CSS
         * @param {Function} onTransitionEnd
         */
        // non transition, just trigger callback


        proto._nonTransition = function (args) {
          this.css(args.to);

          if (args.isCleaning) {
            this._removeStyles(args.to);
          }

          for (var prop in args.onTransitionEnd) {
            args.onTransitionEnd[prop].call(this);
          }
        };
        /**
         * proper transition
         * @param {Object} args - arguments
         *   @param {Object} to - style to transition to
         *   @param {Object} from - style to start transition from
         *   @param {Boolean} isCleaning - removes transition styles after transition
         *   @param {Function} onTransitionEnd - callback
         */


        proto.transition = function (args) {
          // redirect to nonTransition if no transition duration
          if (!parseFloat(this.layout.options.transitionDuration)) {
            this._nonTransition(args);

            return;
          }

          var _transition = this._transn; // keep track of onTransitionEnd callback by css property

          for (var prop in args.onTransitionEnd) {
            _transition.onEnd[prop] = args.onTransitionEnd[prop];
          } // keep track of properties that are transitioning


          for (prop in args.to) {
            _transition.ingProperties[prop] = true; // keep track of properties to clean up when transition is done

            if (args.isCleaning) {
              _transition.clean[prop] = true;
            }
          } // set from styles


          if (args.from) {
            this.css(args.from); // force redraw. http://blog.alexmaccaw.com/css-transitions

            var h = this.element.offsetHeight; // hack for JSHint to hush about unused var

            h = null;
          } // enable transition


          this.enableTransition(args.to); // set styles that are transitioning

          this.css(args.to);
          this.isTransitioning = true;
        }; // dash before all cap letters, including first for
        // WebkitTransform => -webkit-transform


        function toDashedAll(str) {
          return str.replace(/([A-Z])/g, function ($1) {
            return '-' + $1.toLowerCase();
          });
        }

        var transitionProps = 'opacity,' + toDashedAll(transformProperty);

        proto.enableTransition = function () {
          // HACK changing transitionProperty during a transition
          // will cause transition to jump
          if (this.isTransitioning) {
            return;
          } // make `transition: foo, bar, baz` from style object
          // HACK un-comment this when enableTransition can work
          // while a transition is happening
          // var transitionValues = [];
          // for ( var prop in style ) {
          //   // dash-ify camelCased properties like WebkitTransition
          //   prop = vendorProperties[ prop ] || prop;
          //   transitionValues.push( toDashedAll( prop ) );
          // }
          // munge number to millisecond, to match stagger


          var duration = this.layout.options.transitionDuration;
          duration = typeof duration == 'number' ? duration + 'ms' : duration; // enable transition styles

          this.css({
            transitionProperty: transitionProps,
            transitionDuration: duration,
            transitionDelay: this.staggerDelay || 0
          }); // listen for transition end event

          this.element.addEventListener(transitionEndEvent, this, false);
        }; // ----- events ----- //


        proto.onwebkitTransitionEnd = function (event) {
          this.ontransitionend(event);
        };

        proto.onotransitionend = function (event) {
          this.ontransitionend(event);
        }; // properties that I munge to make my life easier


        var dashedVendorProperties = {
          '-webkit-transform': 'transform'
        };

        proto.ontransitionend = function (event) {
          // disregard bubbled events from children
          if (event.target !== this.element) {
            return;
          }

          var _transition = this._transn; // get property name of transitioned property, convert to prefix-free

          var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName; // remove property that has completed transitioning

          delete _transition.ingProperties[propertyName]; // check if any properties are still transitioning

          if (isEmptyObj(_transition.ingProperties)) {
            // all properties have completed transitioning
            this.disableTransition();
          } // clean style


          if (propertyName in _transition.clean) {
            // clean up style
            this.element.style[event.propertyName] = '';
            delete _transition.clean[propertyName];
          } // trigger onTransitionEnd callback


          if (propertyName in _transition.onEnd) {
            var onTransitionEnd = _transition.onEnd[propertyName];
            onTransitionEnd.call(this);
            delete _transition.onEnd[propertyName];
          }

          this.emitEvent('transitionEnd', [this]);
        };

        proto.disableTransition = function () {
          this.removeTransitionStyles();
          this.element.removeEventListener(transitionEndEvent, this, false);
          this.isTransitioning = false;
        };
        /**
         * removes style property from element
         * @param {Object} style
        **/


        proto._removeStyles = function (style) {
          // clean up transition styles
          var cleanStyle = {};

          for (var prop in style) {
            cleanStyle[prop] = '';
          }

          this.css(cleanStyle);
        };

        var cleanTransitionStyle = {
          transitionProperty: '',
          transitionDuration: '',
          transitionDelay: ''
        };

        proto.removeTransitionStyles = function () {
          // remove transition
          this.css(cleanTransitionStyle);
        }; // ----- stagger ----- //


        proto.stagger = function (delay) {
          delay = isNaN(delay) ? 0 : delay;
          this.staggerDelay = delay + 'ms';
        }; // ----- show/hide/remove ----- //
        // remove element from DOM


        proto.removeElem = function () {
          this.element.parentNode.removeChild(this.element); // remove display: none

          this.css({
            display: ''
          });
          this.emitEvent('remove', [this]);
        };

        proto.remove = function () {
          // just remove element if no transition support or no transition
          if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
            this.removeElem();
            return;
          } // start transition


          this.once('transitionEnd', function () {
            this.removeElem();
          });
          this.hide();
        };

        proto.reveal = function () {
          delete this.isHidden; // remove display: none

          this.css({
            display: ''
          });
          var options = this.layout.options;
          var onTransitionEnd = {};
          var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
          onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
          this.transition({
            from: options.hiddenStyle,
            to: options.visibleStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
          });
        };

        proto.onRevealTransitionEnd = function () {
          // check if still visible
          // during transition, item may have been hidden
          if (!this.isHidden) {
            this.emitEvent('reveal');
          }
        };
        /**
         * get style property use for hide/reveal transition end
         * @param {String} styleProperty - hiddenStyle/visibleStyle
         * @returns {String}
         */


        proto.getHideRevealTransitionEndProperty = function (styleProperty) {
          var optionStyle = this.layout.options[styleProperty]; // use opacity

          if (optionStyle.opacity) {
            return 'opacity';
          } // get first property


          for (var prop in optionStyle) {
            return prop;
          }
        };

        proto.hide = function () {
          // set flag
          this.isHidden = true; // remove display: none

          this.css({
            display: ''
          });
          var options = this.layout.options;
          var onTransitionEnd = {};
          var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
          onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
          this.transition({
            from: options.visibleStyle,
            to: options.hiddenStyle,
            // keep hidden stuff hidden
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
          });
        };

        proto.onHideTransitionEnd = function () {
          // check if still hidden
          // during transition, item may have been un-hidden
          if (this.isHidden) {
            this.css({
              display: 'none'
            });
            this.emitEvent('hide');
          }
        };

        proto.destroy = function () {
          this.css({
            position: '',
            left: '',
            right: '',
            top: '',
            bottom: '',
            transition: '',
            transform: ''
          });
        };

        return Item;
      });
      /***/

    },

    /***/
    22933: function _(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*!
      * Outlayer v2.1.1
      * the brains and guts of a layout library
      * MIT license
      */


      (function (window, factory) {
        'use strict'; // universal module definition

        /* jshint strict: false */

        /* globals define, module, require */

        if (true) {
          // AMD - RequireJS
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
          /*! ev-emitter/ev-emitter */
          82026), __webpack_require__(
          /*! get-size/get-size */
          32575), __webpack_require__(
          /*! fizzy-ui-utils/utils */
          94060), __webpack_require__(
          /*! ./item */
          15853)], __WEBPACK_AMD_DEFINE_RESULT__ = function (EvEmitter, getSize, utils, Item) {
            return factory(window, EvEmitter, getSize, utils, Item);
          }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(window, function factory(window, EvEmitter, getSize, utils, Item) {
        'use strict'; // ----- vars ----- //

        var console = window.console;
        var jQuery = window.jQuery;

        var noop = function noop() {}; // -------------------------- Outlayer -------------------------- //
        // globally unique identifiers


        var GUID = 0; // internal store of all Outlayer intances

        var instances = {};
        /**
         * @param {Element, String} element
         * @param {Object} options
         * @constructor
         */

        function Outlayer(element, options) {
          var queryElement = utils.getQueryElement(element);

          if (!queryElement) {
            if (console) {
              console.error('Bad element for ' + this.constructor.namespace + ': ' + (queryElement || element));
            }

            return;
          }

          this.element = queryElement; // add jQuery

          if (jQuery) {
            this.$element = jQuery(this.element);
          } // options


          this.options = utils.extend({}, this.constructor.defaults);
          this.option(options); // add id for Outlayer.getFromElement

          var id = ++GUID;
          this.element.outlayerGUID = id; // expando

          instances[id] = this; // associate via id
          // kick it off

          this._create();

          var isInitLayout = this._getOption('initLayout');

          if (isInitLayout) {
            this.layout();
          }
        } // settings are for internal use only


        Outlayer.namespace = 'outlayer';
        Outlayer.Item = Item; // default options

        Outlayer.defaults = {
          containerStyle: {
            position: 'relative'
          },
          initLayout: true,
          originLeft: true,
          originTop: true,
          resize: true,
          resizeContainer: true,
          // item options
          transitionDuration: '0.4s',
          hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
          },
          visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
          }
        };
        var proto = Outlayer.prototype; // inherit EvEmitter

        utils.extend(proto, EvEmitter.prototype);
        /**
         * set options
         * @param {Object} opts
         */

        proto.option = function (opts) {
          utils.extend(this.options, opts);
        };
        /**
         * get backwards compatible option value, check old name
         */


        proto._getOption = function (option) {
          var oldOption = this.constructor.compatOptions[option];
          return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option];
        };

        Outlayer.compatOptions = {
          // currentName: oldName
          initLayout: 'isInitLayout',
          horizontal: 'isHorizontal',
          layoutInstant: 'isLayoutInstant',
          originLeft: 'isOriginLeft',
          originTop: 'isOriginTop',
          resize: 'isResizeBound',
          resizeContainer: 'isResizingContainer'
        };

        proto._create = function () {
          // get items from children
          this.reloadItems(); // elements that affect layout, but are not laid out

          this.stamps = [];
          this.stamp(this.options.stamp); // set container style

          utils.extend(this.element.style, this.options.containerStyle); // bind resize method

          var canBindResize = this._getOption('resize');

          if (canBindResize) {
            this.bindResize();
          }
        }; // goes through all children again and gets bricks in proper order


        proto.reloadItems = function () {
          // collection of item elements
          this.items = this._itemize(this.element.children);
        };
        /**
         * turn elements into Outlayer.Items to be used in layout
         * @param {Array or NodeList or HTMLElement} elems
         * @returns {Array} items - collection of new Outlayer Items
         */


        proto._itemize = function (elems) {
          var itemElems = this._filterFindItemElements(elems);

          var Item = this.constructor.Item; // create new Outlayer Items for collection

          var items = [];

          for (var i = 0; i < itemElems.length; i++) {
            var elem = itemElems[i];
            var item = new Item(elem, this);
            items.push(item);
          }

          return items;
        };
        /**
         * get item elements to be used in layout
         * @param {Array or NodeList or HTMLElement} elems
         * @returns {Array} items - item elements
         */


        proto._filterFindItemElements = function (elems) {
          return utils.filterFindElements(elems, this.options.itemSelector);
        };
        /**
         * getter method for getting item elements
         * @returns {Array} elems - collection of item elements
         */


        proto.getItemElements = function () {
          return this.items.map(function (item) {
            return item.element;
          });
        }; // ----- init & layout ----- //

        /**
         * lays out all items
         */


        proto.layout = function () {
          this._resetLayout();

          this._manageStamps(); // don't animate first layout


          var layoutInstant = this._getOption('layoutInstant');

          var isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
          this.layoutItems(this.items, isInstant); // flag for initalized

          this._isLayoutInited = true;
        }; // _init is alias for layout


        proto._init = proto.layout;
        /**
         * logic before any new layout
         */

        proto._resetLayout = function () {
          this.getSize();
        };

        proto.getSize = function () {
          this.size = getSize(this.element);
        };
        /**
         * get measurement from option, for columnWidth, rowHeight, gutter
         * if option is String -> get element from selector string, & get size of element
         * if option is Element -> get size of element
         * else use option as a number
         *
         * @param {String} measurement
         * @param {String} size - width or height
         * @private
         */


        proto._getMeasurement = function (measurement, size) {
          var option = this.options[measurement];
          var elem;

          if (!option) {
            // default to 0
            this[measurement] = 0;
          } else {
            // use option as an element
            if (typeof option == 'string') {
              elem = this.element.querySelector(option);
            } else if (option instanceof HTMLElement) {
              elem = option;
            } // use size of element, if element


            this[measurement] = elem ? getSize(elem)[size] : option;
          }
        };
        /**
         * layout a collection of item elements
         * @api public
         */


        proto.layoutItems = function (items, isInstant) {
          items = this._getItemsForLayout(items);

          this._layoutItems(items, isInstant);

          this._postLayout();
        };
        /**
         * get the items to be laid out
         * you may want to skip over some items
         * @param {Array} items
         * @returns {Array} items
         */


        proto._getItemsForLayout = function (items) {
          return items.filter(function (item) {
            return !item.isIgnored;
          });
        };
        /**
         * layout items
         * @param {Array} items
         * @param {Boolean} isInstant
         */


        proto._layoutItems = function (items, isInstant) {
          this._emitCompleteOnItems('layout', items);

          if (!items || !items.length) {
            // no items, emit event with empty array
            return;
          }

          var queue = [];
          items.forEach(function (item) {
            // get x/y object from method
            var position = this._getItemLayoutPosition(item); // enqueue


            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push(position);
          }, this);

          this._processLayoutQueue(queue);
        };
        /**
         * get item layout position
         * @param {Outlayer.Item} item
         * @returns {Object} x and y position
         */


        proto._getItemLayoutPosition = function () {
          return {
            x: 0,
            y: 0
          };
        };
        /**
         * iterate over array and position each item
         * Reason being - separating this logic prevents 'layout invalidation'
         * thx @paul_irish
         * @param {Array} queue
         */


        proto._processLayoutQueue = function (queue) {
          this.updateStagger();
          queue.forEach(function (obj, i) {
            this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
          }, this);
        }; // set stagger from option in milliseconds number


        proto.updateStagger = function () {
          var stagger = this.options.stagger;

          if (stagger === null || stagger === undefined) {
            this.stagger = 0;
            return;
          }

          this.stagger = getMilliseconds(stagger);
          return this.stagger;
        };
        /**
         * Sets position of item in DOM
         * @param {Outlayer.Item} item
         * @param {Number} x - horizontal position
         * @param {Number} y - vertical position
         * @param {Boolean} isInstant - disables transitions
         */


        proto._positionItem = function (item, x, y, isInstant, i) {
          if (isInstant) {
            // if not transition, just set CSS
            item.goTo(x, y);
          } else {
            item.stagger(i * this.stagger);
            item.moveTo(x, y);
          }
        };
        /**
         * Any logic you want to do after each layout,
         * i.e. size the container
         */


        proto._postLayout = function () {
          this.resizeContainer();
        };

        proto.resizeContainer = function () {
          var isResizingContainer = this._getOption('resizeContainer');

          if (!isResizingContainer) {
            return;
          }

          var size = this._getContainerSize();

          if (size) {
            this._setContainerMeasure(size.width, true);

            this._setContainerMeasure(size.height, false);
          }
        };
        /**
         * Sets width or height of container if returned
         * @returns {Object} size
         *   @param {Number} width
         *   @param {Number} height
         */


        proto._getContainerSize = noop;
        /**
         * @param {Number} measure - size of width or height
         * @param {Boolean} isWidth
         */

        proto._setContainerMeasure = function (measure, isWidth) {
          if (measure === undefined) {
            return;
          }

          var elemSize = this.size; // add padding and border width if border box

          if (elemSize.isBorderBox) {
            measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
          }

          measure = Math.max(measure, 0);
          this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
        };
        /**
         * emit eventComplete on a collection of items events
         * @param {String} eventName
         * @param {Array} items - Outlayer.Items
         */


        proto._emitCompleteOnItems = function (eventName, items) {
          var _this = this;

          function onComplete() {
            _this.dispatchEvent(eventName + 'Complete', null, [items]);
          }

          var count = items.length;

          if (!items || !count) {
            onComplete();
            return;
          }

          var doneCount = 0;

          function tick() {
            doneCount++;

            if (doneCount == count) {
              onComplete();
            }
          } // bind callback


          items.forEach(function (item) {
            item.once(eventName, tick);
          });
        };
        /**
         * emits events via EvEmitter and jQuery events
         * @param {String} type - name of event
         * @param {Event} event - original event
         * @param {Array} args - extra arguments
         */


        proto.dispatchEvent = function (type, event, args) {
          // add original event to arguments
          var emitArgs = event ? [event].concat(args) : args;
          this.emitEvent(type, emitArgs);

          if (jQuery) {
            // set this.$element
            this.$element = this.$element || jQuery(this.element);

            if (event) {
              // create jQuery event
              var $event = jQuery.Event(event);
              $event.type = type;
              this.$element.trigger($event, args);
            } else {
              // just trigger with type if no event available
              this.$element.trigger(type, args);
            }
          }
        }; // -------------------------- ignore & stamps -------------------------- //

        /**
         * keep item in collection, but do not lay it out
         * ignored items do not get skipped in layout
         * @param {Element} elem
         */


        proto.ignore = function (elem) {
          var item = this.getItem(elem);

          if (item) {
            item.isIgnored = true;
          }
        };
        /**
         * return item to layout collection
         * @param {Element} elem
         */


        proto.unignore = function (elem) {
          var item = this.getItem(elem);

          if (item) {
            delete item.isIgnored;
          }
        };
        /**
         * adds elements to stamps
         * @param {NodeList, Array, Element, or String} elems
         */


        proto.stamp = function (elems) {
          elems = this._find(elems);

          if (!elems) {
            return;
          }

          this.stamps = this.stamps.concat(elems); // ignore

          elems.forEach(this.ignore, this);
        };
        /**
         * removes elements to stamps
         * @param {NodeList, Array, or Element} elems
         */


        proto.unstamp = function (elems) {
          elems = this._find(elems);

          if (!elems) {
            return;
          }

          elems.forEach(function (elem) {
            // filter out removed stamp elements
            utils.removeFrom(this.stamps, elem);
            this.unignore(elem);
          }, this);
        };
        /**
         * finds child elements
         * @param {NodeList, Array, Element, or String} elems
         * @returns {Array} elems
         */


        proto._find = function (elems) {
          if (!elems) {
            return;
          } // if string, use argument as selector string


          if (typeof elems == 'string') {
            elems = this.element.querySelectorAll(elems);
          }

          elems = utils.makeArray(elems);
          return elems;
        };

        proto._manageStamps = function () {
          if (!this.stamps || !this.stamps.length) {
            return;
          }

          this._getBoundingRect();

          this.stamps.forEach(this._manageStamp, this);
        }; // update boundingLeft / Top


        proto._getBoundingRect = function () {
          // get bounding rect for container element
          var boundingRect = this.element.getBoundingClientRect();
          var size = this.size;
          this._boundingRect = {
            left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
            top: boundingRect.top + size.paddingTop + size.borderTopWidth,
            right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
            bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
          };
        };
        /**
         * @param {Element} stamp
        **/


        proto._manageStamp = noop;
        /**
         * get x/y position of element relative to container element
         * @param {Element} elem
         * @returns {Object} offset - has left, top, right, bottom
         */

        proto._getElementOffset = function (elem) {
          var boundingRect = elem.getBoundingClientRect();
          var thisRect = this._boundingRect;
          var size = getSize(elem);
          var offset = {
            left: boundingRect.left - thisRect.left - size.marginLeft,
            top: boundingRect.top - thisRect.top - size.marginTop,
            right: thisRect.right - boundingRect.right - size.marginRight,
            bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
          };
          return offset;
        }; // -------------------------- resize -------------------------- //
        // enable event handlers for listeners
        // i.e. resize -> onresize


        proto.handleEvent = utils.handleEvent;
        /**
         * Bind layout to window resizing
         */

        proto.bindResize = function () {
          window.addEventListener('resize', this);
          this.isResizeBound = true;
        };
        /**
         * Unbind layout to window resizing
         */


        proto.unbindResize = function () {
          window.removeEventListener('resize', this);
          this.isResizeBound = false;
        };

        proto.onresize = function () {
          this.resize();
        };

        utils.debounceMethod(Outlayer, 'onresize', 100);

        proto.resize = function () {
          // don't trigger if size did not change
          // or if resize was unbound. See #9
          if (!this.isResizeBound || !this.needsResizeLayout()) {
            return;
          }

          this.layout();
        };
        /**
         * check if layout is needed post layout
         * @returns Boolean
         */


        proto.needsResizeLayout = function () {
          var size = getSize(this.element); // check that this.size and size are there
          // IE8 triggers resize on body size change, so they might not be

          var hasSizes = this.size && size;
          return hasSizes && size.innerWidth !== this.size.innerWidth;
        }; // -------------------------- methods -------------------------- //

        /**
         * add items to Outlayer instance
         * @param {Array or NodeList or Element} elems
         * @returns {Array} items - Outlayer.Items
        **/


        proto.addItems = function (elems) {
          var items = this._itemize(elems); // add items to collection


          if (items.length) {
            this.items = this.items.concat(items);
          }

          return items;
        };
        /**
         * Layout newly-appended item elements
         * @param {Array or NodeList or Element} elems
         */


        proto.appended = function (elems) {
          var items = this.addItems(elems);

          if (!items.length) {
            return;
          } // layout and reveal just the new items


          this.layoutItems(items, true);
          this.reveal(items);
        };
        /**
         * Layout prepended elements
         * @param {Array or NodeList or Element} elems
         */


        proto.prepended = function (elems) {
          var items = this._itemize(elems);

          if (!items.length) {
            return;
          } // add items to beginning of collection


          var previousItems = this.items.slice(0);
          this.items = items.concat(previousItems); // start new layout

          this._resetLayout();

          this._manageStamps(); // layout new stuff without transition


          this.layoutItems(items, true);
          this.reveal(items); // layout previous items

          this.layoutItems(previousItems);
        };
        /**
         * reveal a collection of items
         * @param {Array of Outlayer.Items} items
         */


        proto.reveal = function (items) {
          this._emitCompleteOnItems('reveal', items);

          if (!items || !items.length) {
            return;
          }

          var stagger = this.updateStagger();
          items.forEach(function (item, i) {
            item.stagger(i * stagger);
            item.reveal();
          });
        };
        /**
         * hide a collection of items
         * @param {Array of Outlayer.Items} items
         */


        proto.hide = function (items) {
          this._emitCompleteOnItems('hide', items);

          if (!items || !items.length) {
            return;
          }

          var stagger = this.updateStagger();
          items.forEach(function (item, i) {
            item.stagger(i * stagger);
            item.hide();
          });
        };
        /**
         * reveal item elements
         * @param {Array}, {Element}, {NodeList} items
         */


        proto.revealItemElements = function (elems) {
          var items = this.getItems(elems);
          this.reveal(items);
        };
        /**
         * hide item elements
         * @param {Array}, {Element}, {NodeList} items
         */


        proto.hideItemElements = function (elems) {
          var items = this.getItems(elems);
          this.hide(items);
        };
        /**
         * get Outlayer.Item, given an Element
         * @param {Element} elem
         * @param {Function} callback
         * @returns {Outlayer.Item} item
         */


        proto.getItem = function (elem) {
          // loop through items to get the one that matches
          for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];

            if (item.element == elem) {
              // return item
              return item;
            }
          }
        };
        /**
         * get collection of Outlayer.Items, given Elements
         * @param {Array} elems
         * @returns {Array} items - Outlayer.Items
         */


        proto.getItems = function (elems) {
          elems = utils.makeArray(elems);
          var items = [];
          elems.forEach(function (elem) {
            var item = this.getItem(elem);

            if (item) {
              items.push(item);
            }
          }, this);
          return items;
        };
        /**
         * remove element(s) from instance and DOM
         * @param {Array or NodeList or Element} elems
         */


        proto.remove = function (elems) {
          var removeItems = this.getItems(elems);

          this._emitCompleteOnItems('remove', removeItems); // bail if no items to remove


          if (!removeItems || !removeItems.length) {
            return;
          }

          removeItems.forEach(function (item) {
            item.remove(); // remove item from collection

            utils.removeFrom(this.items, item);
          }, this);
        }; // ----- destroy ----- //
        // remove and disable Outlayer instance


        proto.destroy = function () {
          // clean up dynamic styles
          var style = this.element.style;
          style.height = '';
          style.position = '';
          style.width = ''; // destroy items

          this.items.forEach(function (item) {
            item.destroy();
          });
          this.unbindResize();
          var id = this.element.outlayerGUID;
          delete instances[id]; // remove reference to instance by id

          delete this.element.outlayerGUID; // remove data for jQuery

          if (jQuery) {
            jQuery.removeData(this.element, this.constructor.namespace);
          }
        }; // -------------------------- data -------------------------- //

        /**
         * get Outlayer instance from element
         * @param {Element} elem
         * @returns {Outlayer}
         */


        Outlayer.data = function (elem) {
          elem = utils.getQueryElement(elem);
          var id = elem && elem.outlayerGUID;
          return id && instances[id];
        }; // -------------------------- create Outlayer class -------------------------- //

        /**
         * create a layout class
         * @param {String} namespace
         */


        Outlayer.create = function (namespace, options) {
          // sub-class Outlayer
          var Layout = subclass(Outlayer); // apply new options and compatOptions

          Layout.defaults = utils.extend({}, Outlayer.defaults);
          utils.extend(Layout.defaults, options);
          Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
          Layout.namespace = namespace;
          Layout.data = Outlayer.data; // sub-class Item

          Layout.Item = subclass(Item); // -------------------------- declarative -------------------------- //

          utils.htmlInit(Layout, namespace); // -------------------------- jQuery bridge -------------------------- //
          // make into jQuery plugin

          if (jQuery && jQuery.bridget) {
            jQuery.bridget(namespace, Layout);
          }

          return Layout;
        };

        function subclass(Parent) {
          function SubClass() {
            Parent.apply(this, arguments);
          }

          SubClass.prototype = Object.create(Parent.prototype);
          SubClass.prototype.constructor = SubClass;
          return SubClass;
        } // ----- helpers ----- //
        // how many milliseconds are in each unit


        var msUnits = {
          ms: 1,
          s: 1000
        }; // munge time-like parameter into millisecond number
        // '0.4s' -> 40

        function getMilliseconds(time) {
          if (typeof time == 'number') {
            return time;
          }

          var matches = time.match(/(^\d*\.?\d*)(\w*)/);
          var num = matches && matches[1];
          var unit = matches && matches[2];

          if (!num.length) {
            return 0;
          }

          num = parseFloat(num);
          var mult = msUnits[unit] || 1;
          return num * mult;
        } // ----- fin ----- //
        // back in global


        Outlayer.Item = Item;
        return Outlayer;
      });
      /***/

    },

    /***/
    43757: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DiscoverComponent": function DiscoverComponent() {
          return (
            /* binding */
            _DiscoverComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/grid-list */
      4929);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./grid-item/grid-item.component */
      75560);

      var _c0 = ["table"];

      function DiscoverComponent_mat_grid_tile_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-grid-item", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var imageItem_r2 = ctx.$implicit;

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowspan", _r3.getRows());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", imageItem_r2)("rowHeight", ctx_r1.rowHeight)("gutterSize", ctx_r1.gutterSize);
        }
      }

      var _DiscoverComponent = /*#__PURE__*/function () {
        function _DiscoverComponent() {
          _classCallCheck(this, _DiscoverComponent);

          this.cols = 4;
          this.rowHeight = 1;
          this.gutterSize = 10;
        }

        _createClass(_DiscoverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getDefaultSize",
          value: function getDefaultSize() {
            var usersWidth = window.innerWidth;
            if (usersWidth < 576) return this.cols_xs;else if (usersWidth < 768) return this.cols_sm;else if (usersWidth < 992) return this.cols_md;else if (usersWidth < 1200) return this.cols_lg;else return this.cols_xl;
          }
        }]);

        return _DiscoverComponent;
      }();

      _DiscoverComponent.ɵfac = function DiscoverComponent_Factory(t) {
        return new (t || _DiscoverComponent)();
      };

      _DiscoverComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _DiscoverComponent,
        selectors: [["app-discover"]],
        viewQuery: function DiscoverComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        inputs: {
          posts: "posts",
          cols: "cols",
          cols_xs: ["cols.xs", "cols_xs"],
          cols_sm: ["cols.sm", "cols_sm"],
          cols_md: ["cols.md", "cols_md"],
          cols_lg: ["cols.lg", "cols_lg"],
          cols_xl: ["cols.xl", "cols_xl"],
          rowHeight: "rowHeight",
          gutterSize: "gutterSize"
        },
        decls: 3,
        vars: 4,
        consts: [[3, "cols", "rowHeight", "gutterSize"], ["tables", ""], [3, "rowspan", 4, "ngFor", "ngForOf"], [3, "rowspan"], [3, "post", "rowHeight", "gutterSize"], ["item", ""]],
        template: function DiscoverComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-list", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DiscoverComponent_mat_grid_tile_2_Template, 3, 4, "mat-grid-tile", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cols", ctx.getDefaultSize())("rowHeight", ctx.rowHeight)("gutterSize", ctx.gutterSize + "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.posts);
          }
        },
        directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__.MatGridList, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__.MatGridTile, _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_0__.GridItemComponent],
        styles: ["app-grid-item[_ngcontent-%COMP%] {\n  min-width: 100%;\n  cursor: pointer;\n}\n\nmat-grid-tile[_ngcontent-%COMP%]   .fade.ng-hide[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\nmat-grid-tile[_ngcontent-%COMP%]   .fade.ng-hide-remove[_ngcontent-%COMP%], mat-grid-tile[_ngcontent-%COMP%]   .fade.ng-hide-add[_ngcontent-%COMP%] {\n  display: block !important;\n  \n}\n\nmat-grid-tile[_ngcontent-%COMP%]   .fade.ng-hide-remove[_ngcontent-%COMP%] {\n  transition: all linear 1000ms;\n}\n\nmat-grid-tile[_ngcontent-%COMP%]   .fade.ng-hide-add[_ngcontent-%COMP%] {\n  transition: all linear 500ms;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NvdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFHSTtFQUNJLFVBQUE7QUFBUjs7QUFHTTs7RUFFRSx5QkFBQTtFQUEyQixvQ0FBQTtBQUFuQzs7QUFHTTtFQUNFLDZCQUFBO0FBRFI7O0FBSU07RUFDRSw0QkFBQTtBQUZSIiwiZmlsZSI6ImRpc2NvdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWdyaWQtaXRlbXtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubWF0LWdyaWQtdGlsZSB7XHJcbiAgICAuZmFkZS5uZy1oaWRlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZmFkZS5uZy1oaWRlLXJlbW92ZSxcclxuICAgICAgLmZhZGUubmctaGlkZS1hZGQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IC8qIG9yIGlubGluZS1ibG9jaywgYXMgYXBwcm9wcmlhdGUgKi9cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmZhZGUubmctaGlkZS1yZW1vdmUge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMTAwMG1zO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZmFkZS5uZy1oaWRlLWFkZCB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciA1MDBtcztcclxuICAgICAgfVxyXG4gfVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    75560: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GridItemComponent": function GridItemComponent() {
          return (
            /* binding */
            _GridItemComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../services/main.service */
      18607);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = ["masonryPost"];

      function GridItemComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridItemComponent_ng_container_1_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.main.goToPost(ctx_r3.post.idPost);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.post == null ? null : ctx_r0.post.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r0.post == null ? null : ctx_r0.post.alt);
        }
      }

      function GridItemComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "video", 4, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridItemComponent_ng_container_2_Template_video_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.main.goToPost(ctx_r6.post.idPost);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "source", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("muted", true)("alt", ctx_r1.post == null ? null : ctx_r1.post.alt);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.post == null ? null : ctx_r1.post.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      var _GridItemComponent = /*#__PURE__*/function () {
        function _GridItemComponent(main) {
          _classCallCheck(this, _GridItemComponent);

          this.main = main;
          this.rowHeight = 1;
          this.gutterSize = 1;
          this.rows = 0;
        }

        _createClass(_GridItemComponent, [{
          key: "getRows",
          value: function getRows() {
            var _a;

            return Math.floor(((_a = this.masonryPost) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetHeight) / (this.rowHeight + this.gutterSize));
          }
        }]);

        return _GridItemComponent;
      }();

      _GridItemComponent.ɵfac = function GridItemComponent_Factory(t) {
        return new (t || _GridItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
      };

      _GridItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _GridItemComponent,
        selectors: [["app-grid-item"]],
        viewQuery: function GridItemComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.masonryPost = _t.first);
          }
        },
        inputs: {
          post: "post",
          rowHeight: "rowHeight",
          gutterSize: "gutterSize"
        },
        decls: 3,
        vars: 3,
        consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [3, "src", "alt", "click"], ["masonryPost", ""], ["autoplay", "", "loop", "", 3, "muted", "alt", "click"], [3, "src"]],
        template: function GridItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GridItemComponent_ng_container_1_Template, 3, 2, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GridItemComponent_ng_container_2_Template, 4, 3, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.post.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 2);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase],
        styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: all 0.5s ease-in-out;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   video[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjtBQUNJO0VBQ0ksV0FBQTtFQUNBLGdDQUFBO0FBQ1I7QUFDWTtFQUNBLHFCQUFBO0FBQ1oiLCJmaWxlIjoiZ3JpZC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGltZywgdmlkZW97XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDsgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmOmhvdmVyIHsgXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    71023: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchRoutingModule": function SearchRoutingModule() {
          return (
            /* binding */
            _SearchRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./search.component */
      64322);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent
        }]
      }];

      var _SearchRoutingModule = function _SearchRoutingModule() {
        _classCallCheck(this, _SearchRoutingModule);
      };

      _SearchRoutingModule.ɵfac = function SearchRoutingModule_Factory(t) {
        return new (t || _SearchRoutingModule)();
      };

      _SearchRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _SearchRoutingModule
      });
      _SearchRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_SearchRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    64322: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchComponent": function SearchComponent() {
          return (
            /* binding */
            _SearchComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      46797);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../services/main.service */
      18607);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _components_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../components/skeleton-loader/skeleton-loader.component */
      89148);
      /* harmony import */


      var _discover_discover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./discover/discover.component */
      43757);
      /* harmony import */


      var _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/user-info/user-info.component */
      77273);
      /* harmony import */


      var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/loading/loading.component */
      6362);
      /* harmony import */


      var _components_publicacio_info_publicacio_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/publicacio-info/publicacio-info.component */
      40439);

      var _c0 = ["search"];

      function SearchComponent_div_6_app_skeleton_loader_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-skeleton-loader", 12);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("numero", 1);
        }
      }

      function SearchComponent_div_6_app_discover_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-discover", 13);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("posts", ctx_r4.imagesReady);
        }
      }

      function SearchComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SearchComponent_div_6_app_skeleton_loader_2_Template, 1, 1, "app-skeleton-loader", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SearchComponent_div_6_app_discover_3_Template, 1, 1, "app-discover", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.carregantDiscover);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.carregantDiscover);
        }
      }

      function SearchComponent_div_7_div_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-user-info", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", user_r10.id);
        }
      }

      function SearchComponent_div_7_div_1_app_loading_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loading");
        }
      }

      function SearchComponent_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](4, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SearchComponent_div_7_div_1_div_5_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SearchComponent_div_7_div_1_app_loading_6_Template, 1, 0, "app-loading", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.resultats.usuaris);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.carregantUsuaris);
        }
      }

      function SearchComponent_div_7_div_2_div_2_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SearchComponent_div_7_div_2_div_2_button_4_Template_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);

            var mediums_r16 = restoredCtx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);

            return ctx_r17.main.goToMedium(mediums_r16.nom_categoria);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mediums_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](mediums_r16.nom_categoria);
        }
      }

      function SearchComponent_div_7_div_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](2, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SearchComponent_div_7_div_2_div_2_button_4_Template, 2, 1, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r11.resultats.mediums);
        }
      }

      function SearchComponent_div_7_div_2_div_3_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SearchComponent_div_7_div_2_div_3_button_4_Template_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);

            var movements_r20 = restoredCtx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);

            return ctx_r21.main.goToMovement(movements_r20.nom_estil);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var movements_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](movements_r20.nom_estil);
        }
      }

      function SearchComponent_div_7_div_2_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](2, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SearchComponent_div_7_div_2_div_3_button_4_Template, 2, 1, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r12.resultats.movements);
        }
      }

      function SearchComponent_div_7_div_2_div_4_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SearchComponent_div_7_div_2_div_4_button_4_Template_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);

            var tags_r24 = restoredCtx.$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);

            return ctx_r25.main.goToTag(tags_r24.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tags_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("#", tags_r24.name, "");
        }
      }

      function SearchComponent_div_7_div_2_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](2, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SearchComponent_div_7_div_2_div_4_button_4_Template, 2, 1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r13.resultats.tags);
        }
      }

      function SearchComponent_div_7_div_2_app_loading_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loading");
        }
      }

      function SearchComponent_div_7_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SearchComponent_div_7_div_2_div_2_Template, 5, 1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SearchComponent_div_7_div_2_div_3_Template, 5, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SearchComponent_div_7_div_2_div_4_Template, 5, 1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SearchComponent_div_7_div_2_app_loading_5_Template, 1, 0, "app-loading", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.resultats.mediums);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.resultats.movements);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.resultats.tags);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.carregantMedimus || ctx_r6.carregantMovements || ctx_r6.carregantTags);
        }
      }

      function SearchComponent_div_7_div_3_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-publicacio-info", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("p", p_r30);
        }
      }

      function SearchComponent_div_7_div_3_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](2, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SearchComponent_div_7_div_3_app_loading_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loading");
        }
      }

      function SearchComponent_div_7_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](3, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SearchComponent_div_7_div_3_div_4_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SearchComponent_div_7_div_3_div_5_Template, 4, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SearchComponent_div_7_div_3_app_loading_6_Template, 1, 0, "app-loading", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.resultats.publicacions);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.resultats.publicacions == 0 && !ctx_r7.carregantPublicacions);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.carregantPublicacions);
        }
      }

      function SearchComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SearchComponent_div_7_div_1_Template, 7, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SearchComponent_div_7_div_2_Template, 6, 4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SearchComponent_div_7_div_3_Template, 7, 3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.resultats.usuaris);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.resultats.mediums && ctx_r2.resultats.movements && ctx_r2.resultats.tags);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.resultats.usuaris);
        }
      }

      var _SearchComponent = /*#__PURE__*/function () {
        function _SearchComponent(main, router, route, location) {
          var _this8 = this;

          _classCallCheck(this, _SearchComponent);

          this.main = main;
          this.router = router;
          this.route = route;
          this.location = location;
          this.carregantDiscover = true; // carregantSearch = true;

          this.carregantUsuaris = true;
          this.carregantMediums = true;
          this.carregantMovements = true;
          this.carregantTags = true;
          this.carregantPublicacions = true;
          this.textSearch = "";
          this.imagesReady = [];
          main.newPage(this);
          this.resultats = {}; // force route reload whenever params change;

          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          };

          this.route.params.subscribe(function (params) {
            return _this8.paramsUrl = params;
          });
          this.route.queryParams.subscribe(function (params) {
            return _this8.queryParamsUrl = params;
          });
          this.resultats.usuaris = [];
          this.resultats.mediums = [];
          this.resultats.movements = [];
          this.resultats.tags = [];
          this.resultats.publicacions = [];
        }

        _createClass(_SearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this9 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.textSearch = this.queryParamsUrl.t || "";
                      this.search();
                      setTimeout(function () {
                        _this9.inputSearch.nativeElement.focus();
                      }, 500); // 500 És la duració de la transició del .page-body //

                    case 3:
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
            clearTimeout(this.timeoutRef);
            this.main.onDestroyPage();
          }
        }, {
          key: "modificarUrl",
          value: function modificarUrl() {
            var text = "/search";
            if (this.textSearch) text += "?t=".concat(this.textSearch); // &medium bla bla bla...

            this.location.replaceState(text);
          }
        }, {
          key: "search_delay",
          value: function search_delay(event) {
            var _this10 = this;

            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
            this.textSearch = event.target.value;
            clearTimeout(this.timeoutRef);
            this.timeoutRef = setTimeout(function () {
              _this10.search();
            }, delay);
          }
        }, {
          key: "search",
          value: function search() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.modificarUrl();

                      if (this.textSearch) {
                        _context2.next = 8;
                        break;
                      }

                      this.carregantDiscover = true;
                      _context2.next = 5;
                      return this.getDiscoverPosts();

                    case 5:
                      this.carregantDiscover = false;
                      _context2.next = 13;
                      break;

                    case 8:
                      // this.carregantSearch = true;
                      this.searchUsuaris();
                      this.searchMediums();
                      this.searchMovements();
                      this.searchTags();
                      this.searchPublicacions(); // this.carregantSearch = false;

                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "searchUsuaris",
          value: function searchUsuaris() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.carregantUsuaris = true;
                      _context3.next = 3;
                      return this.main.provider.searchUsuaris(this.textSearch);

                    case 3:
                      this.resultats.usuaris = _context3.sent;
                      this.carregantUsuaris = false;

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "searchMediums",
          value: function searchMediums() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.carregantMediums = true;
                      _context4.next = 3;
                      return this.main.provider.searchMediums(this.textSearch);

                    case 3:
                      this.resultats.mediums = _context4.sent;
                      this.carregantMediums = false;

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "searchMovements",
          value: function searchMovements() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.carregantMovements = true;
                      _context5.next = 3;
                      return this.main.provider.searchMovements(this.textSearch);

                    case 3:
                      this.resultats.movements = _context5.sent;
                      this.carregantMovements = false;

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "searchTags",
          value: function searchTags() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.carregantTags = true;
                      _context6.next = 3;
                      return this.main.provider.searchTags(this.textSearch);

                    case 3:
                      this.resultats.tags = _context6.sent;
                      this.carregantTags = false;

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "searchPublicacions",
          value: function searchPublicacions() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.carregantPublicacions = true;
                      _context7.next = 3;
                      return this.main.provider.searchPublicacions(this.textSearch, 1, 10);

                    case 3:
                      this.resultats.publicacions = _context7.sent;
                      this.carregantPublicacions = false;

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "getDiscoverPosts",
          value: function getDiscoverPosts() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var imagesConfig;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      imagesConfig = [];
                      _context8.next = 3;
                      return this.main.provider.getXPosts(1, 100);

                    case 3:
                      this.discover = _context8.sent;
                      //ajustar array a la informacio necessaria
                      // await this.discover.forEach((element, index) => { 
                      //     imagesConfig.push({ idPost: element.idPost, type: element.content[0].type, url: element.content[0].url, alt: `#${index}`});
                      // });
                      this.imagesReady = imagesConfig; // this.imagesReady = this.shuffleArray(imagesConfig);

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "shuffleArray",
          value: function shuffleArray(array) {
            var m = array.length,
                t,
                i;

            while (m) {
              i = Math.floor(Math.random() * m--);
              t = array[m];
              array[m] = array[i];
              array[i] = t;
            }

            return array;
          } //Cooldowns

        }, {
          key: "delay",
          value: function delay(seg) {
            return new Promise(function (resolve) {
              return setTimeout(resolve, seg);
            });
          }
        }, {
          key: "discoverDelay",
          value: function discoverDelay() {
            var _this11 = this;

            (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.timer)(1000).subscribe(function (value) {
              return _this11.carregantDiscover = false;
            });
          }
        }]);

        return _SearchComponent;
      }();

      _SearchComponent.ɵfac = function SearchComponent_Factory(t) {
        return new (t || _SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.Location));
      };

      _SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _SearchComponent,
        selectors: [["app-search"]],
        viewQuery: function SearchComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.inputSearch = _t.first);
          }
        },
        decls: 8,
        vars: 3,
        consts: function consts() {
          var i18n_1;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Search___$$SRC_APP_IN2ART_PAGES_SEARCH_SEARCH_COMPONENT_TS_2 = goog.getMsg("Search...");
            i18n_1 = MSG_EXTERNAL_Search___$$SRC_APP_IN2ART_PAGES_SEARCH_SEARCH_COMPONENT_TS_2;
          } else {
            i18n_1 = "Search...";
          }

          var i18n_3;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Users$$SRC_APP_IN2ART_PAGES_SEARCH_SEARCH_COMPONENT_TS___4 = goog.getMsg("Users");
            i18n_3 = MSG_EXTERNAL_Users$$SRC_APP_IN2ART_PAGES_SEARCH_SEARCH_COMPONENT_TS___4;
          } else {
            i18n_3 = "Users";
          }

          var i18n_5;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Mediums$$SRC_APP_IN2ART_PAGES_SEARCH_SEARCH_COMPONENT_TS____6 = goog.getMsg("Mediums");
            i18n_5 = MSG_EXTERNAL_Mediums$$SRC_APP_IN2ART_PAGES_SEARCH_SEARCH_COMPONENT_TS____6;
          } else {
            i18n_5 = "Mediums";
          }

          var i18n_7;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Movements$$SRC_APP_IN2ART_PAGES_SEARCH_SEARCH_COMPONENT_TS____8 = goog.getMsg("Movements");
            i18n_7 = MSG_EXTERNAL_Movements$$SRC_APP_IN2ART_PAGES_SEARCH_SEARCH_COMPONENT_TS____8;
          } else {
            i18n_7 = "Movements";
          }

          var i18n_9;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_Tags$$SRC_APP_IN2ART_PAGES_SEARCH_SEARCH_COMPONENT_TS____10 = goog.getMsg("Tags");
            i18n_9 = MSG_EXTERNAL_Tags$$SRC_APP_IN2ART_PAGES_SEARCH_SEARCH_COMPONENT_TS____10;
          } else {
            i18n_9 = "Tags";
          }

          var i18n_11;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_PostsArtworks$$SRC_APP_IN2ART_PAGES_SEARCH_SEARCH_COMPONENT_TS___12 = goog.getMsg("Posts/Artworks");
            i18n_11 = MSG_EXTERNAL_PostsArtworks$$SRC_APP_IN2ART_PAGES_SEARCH_SEARCH_COMPONENT_TS___12;
          } else {
            i18n_11 = "Posts/Artworks";
          }

          var i18n_13;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_It_seems_that_there_isn_t_any_Artwork_with_that_name$$SRC_APP_IN2ART_PAGES_SEARCH_SEARCH_COMPONENT_TS____14 = goog.getMsg(" It seems that there isn't any Artwork with that name");
            i18n_13 = MSG_EXTERNAL_It_seems_that_there_isn_t_any_Artwork_with_that_name$$SRC_APP_IN2ART_PAGES_SEARCH_SEARCH_COMPONENT_TS____14;
          } else {
            i18n_13 = " It seems that there isn't any Artwork with that name";
          }

          return [[1, "content"], [1, "search", 3, "dblclick"], [1, "form-camp"], [1, "fas", "fa-search"], ["type", "search", "placeholder", i18n_1, 1, "inputSearch", 3, "value", "input", "change"], ["search", ""], ["class", "discover fadeIn", 4, "ngIf"], ["class", "resultats row no-gutters", 4, "ngIf"], [1, "discover", "fadeIn"], [1, "card"], [3, "numero", 4, "ngIf"], ["cols.xs", "2", "cols.sm", "2", "cols.md", "3", "cols.lg", "4", "cols.xl", "5", 3, "posts", 4, "ngIf"], [3, "numero"], ["cols.xs", "2", "cols.sm", "2", "cols.md", "3", "cols.lg", "4", "cols.xl", "5", 3, "posts"], [1, "resultats", "row", "no-gutters"], ["class", "col-12 col-md fadeIn", 4, "ngIf"], ["class", "col-12 fadeIn", 4, "ngIf"], [1, "col-12", "col-md", "fadeIn"], [1, "usuaris"], i18n_3, [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "id"], ["class", "mediums", 4, "ngIf"], ["class", "movements", 4, "ngIf"], ["class", "tags", 4, "ngIf"], [1, "mediums"], i18n_5, [1, "botonsMedium"], ["class", "boto botoSecundari", 3, "click", 4, "ngFor", "ngForOf"], [1, "boto", "botoSecundari", 3, "click"], [1, "movements"], i18n_7, [1, "botonsMovement"], [1, "tags"], i18n_9, [1, "botonsTag"], ["class", "boto botoTag", 3, "click", 4, "ngFor", "ngForOf"], [1, "boto", "botoTag", 3, "click"], [1, "col-12", "fadeIn"], i18n_11, [3, "p"], [1, "noArtkworksNotificationText"], i18n_13, ["src", "assets/in2art/logos/ma_blanca_text.svg", "alt", "logo in2art", 1, "noArtworkLogo", "text-center"]];
        },
        template: function SearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dblclick", function SearchComponent_Template_div_dblclick_1_listener() {
              return ctx.main.logDebug(ctx.resultats);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function SearchComponent_Template_input_input_4_listener($event) {
              return ctx.search_delay($event);
            })("change", function SearchComponent_Template_input_change_4_listener($event) {
              return ctx.search_delay($event, 0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SearchComponent_div_6_Template, 4, 2, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, SearchComponent_div_7_Template, 4, 3, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.textSearch);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.textSearch);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.textSearch);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _components_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_1__.SkeletonLoaderComponent, _discover_discover_component__WEBPACK_IMPORTED_MODULE_2__.DiscoverComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_3__.UserInfoComponent, _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__.LoadingComponent, _components_publicacio_info_publicacio_info_component__WEBPACK_IMPORTED_MODULE_5__.PublicacioInfoComponent],
        styles: [".content[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n}\n.content[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   .form-camp[_ngcontent-%COMP%] {\n  border-radius: 40px;\n}\n.content[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   .form-camp[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  font-size: large;\n  width: 25px;\n}\n.content[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   .form-camp[_ngcontent-%COMP%]   .inputSearch[_ngcontent-%COMP%] {\n  width: calc(100% - 25px);\n  padding-left: 0.3rem;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  color: var(--color-text);\n  align-self: center;\n  font-size: large;\n}\n.content[_ngcontent-%COMP%]   .discover[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding: 20px;\n}\n.content[_ngcontent-%COMP%]   .discover[_ngcontent-%COMP%]   app-skeleton-loader[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding: 20px;\n}\n.content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .mediums[_ngcontent-%COMP%]:not(:last-child), .content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .movements[_ngcontent-%COMP%]:not(:last-child), .content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 20px;\n}\n.content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .mediums[_ngcontent-%COMP%]   .botonsMedium[_ngcontent-%COMP%]   .boto[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .mediums[_ngcontent-%COMP%]   .botonsMovement[_ngcontent-%COMP%]   .boto[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .mediums[_ngcontent-%COMP%]   .botonsTag[_ngcontent-%COMP%]   .boto[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .movements[_ngcontent-%COMP%]   .botonsMedium[_ngcontent-%COMP%]   .boto[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .movements[_ngcontent-%COMP%]   .botonsMovement[_ngcontent-%COMP%]   .boto[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .movements[_ngcontent-%COMP%]   .botonsTag[_ngcontent-%COMP%]   .boto[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .botonsMedium[_ngcontent-%COMP%]   .boto[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .botonsMovement[_ngcontent-%COMP%]   .boto[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .botonsTag[_ngcontent-%COMP%]   .boto[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  float: left;\n  margin: 0 10px 5px 0;\n}\n.content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .noArtkworksNotificationText[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  text-align: center;\n  font-size: 30px;\n  font-weight: bold;\n  color: grey;\n}\n.content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .noArtworkLogo[_ngcontent-%COMP%] {\n  width: 20%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .fadeIn[_ngcontent-%COMP%] {\n  animation: fadeIn linear 0.3s;\n  -webkit-animation: fadeIn linear 0.3s;\n  -moz-animation: fadeIn linear 0.3s;\n  -o-animation: fadeIn linear 0.3s;\n  -ms-animation: fadeIn linear 0.3s;\n}\n.content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .fadeInDown[_ngcontent-%COMP%] {\n  animation: fadeInDown linear 0.7s;\n  -webkit-animation: fadeInDown linear 0.7s;\n  -moz-animation: fadeInDown linear 0.7s;\n  -o-animation: fadeInDown linear 0.7s;\n  -ms-animation: fadeInDown linear 0.7s;\n}\n.content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .fadeInLeft[_ngcontent-%COMP%] {\n  animation: fadeInLeft linear 0.7s;\n  -webkit-animation: fadeInLeft linear 0.7s;\n  -moz-animation: fadeInLeft linear 0.7s;\n  -o-animation: fadeInLeft linear 0.7s;\n  -ms-animation: fadeInLeft linear 0.7s;\n}\n@media only screen and (max-width: 576px) {\n  .content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .usuaris[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .mediums[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .movements[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .publicacions[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .content[_ngcontent-%COMP%]   .resultats[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSTtFQUNJLGtCQUFBO0FBTlI7QUFRUTtFQUNJLG1CQUFBO0FBTlo7QUFRWTtFQUVJLGdCQUFBO0VBQ0EsV0FBQTtBQVBoQjtBQVVZO0VBQ0ksd0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFSaEI7QUFjUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBWlo7QUFjUTtFQUNJLGdCQUFBO0FBWlo7QUFpQlE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQWZaO0FBa0JZO0VBQ0ksbUJBQUE7QUFoQmhCO0FBcUJnQjs7Ozs7OztFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQWJwQjtBQWtCUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBaEJaO0FBbUJRO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBakJaO0FBb0JRO0VBQ0ksNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtBQWxCWjtBQXFCUTtFQUNJLGlDQUFBO0VBQ0EseUNBQUE7RUFDQSxzQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7QUFuQlo7QUFzQlE7RUFDSSxpQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0FBcEJaO0FBOEJBO0VBR1k7Ozs7O0lBS0ksVUFBQTtFQTdCZDtFQWdDVTtJQUNJLFNBQUE7RUE5QmQ7QUFDRiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAudXN1YXJpcyAuY2FyZCB7IGJhY2tncm91bmQtY29sb3I6IGhzbCg2MCwgMTAwJSwgOTAlKTsgfVxyXG4vLyAubWVkaXVtcyAuY2FyZCB7IGJhY2tncm91bmQtY29sb3I6IGhzbCgxMjAsIDEwMCUsIDkwJSk7IH1cclxuLy8gLm1vdmVtZW50cyAuY2FyZCB7IGJhY2tncm91bmQtY29sb3I6IGhzbCgxODAsIDEwMCUsIDkwJSk7IH1cclxuLy8gLnRhZ3MgLmNhcmQgeyBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCAxMDAlLCA5MCUpOyB9XHJcbi8vIC5wdWJsaWNhY2lvbnMgLmNhcmQgeyBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzAwLCAxMDAlLCA5MCUpOyB9XHJcblxyXG4uY29udGVudCB7XHJcbiAgICAuc2VhcmNoIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcblxyXG4gICAgICAgIC5mb3JtLWNhbXAge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgLmZhcyB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmlucHV0U2VhcmNoIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC4zcmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGlzY292ZXIge1xyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcHAtc2tlbGV0b24tbG9hZGVyIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJlc3VsdGF0cyB7XHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZWRpdW1zLCAubW92ZW1lbnRzLCAudGFncyB7XHJcbiAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3RvbnNNZWRpdW0sXHJcbiAgICAgICAgICAgIC5ib3RvbnNNb3ZlbWVudCxcclxuICAgICAgICAgICAgLmJvdG9uc1RhZyB7XHJcbiAgICAgICAgICAgICAgICAuYm90byB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDVweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubm9BcnRrd29ya3NOb3RpZmljYXRpb25UZXh0IHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubm9BcnR3b3JrTG9nbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZhZGVJbntcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gbGluZWFyIDAuM3M7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gbGluZWFyIDAuM3M7XHJcbiAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gbGluZWFyIDAuM3M7XHJcbiAgICAgICAgICAgIC1vLWFuaW1hdGlvbjogZmFkZUluIGxpbmVhciAwLjNzO1xyXG4gICAgICAgICAgICAtbXMtYW5pbWF0aW9uOiBmYWRlSW4gbGluZWFyIDAuM3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmFkZUluRG93biB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluRG93biBsaW5lYXIgMC43cztcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbkRvd24gbGluZWFyIDAuN3M7XHJcbiAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlSW5Eb3duIGxpbmVhciAwLjdzO1xyXG4gICAgICAgICAgICAtby1hbmltYXRpb246IGZhZGVJbkRvd24gbGluZWFyIDAuN3M7XHJcbiAgICAgICAgICAgIC1tcy1hbmltYXRpb246IGZhZGVJbkRvd24gbGluZWFyIDAuN3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmFkZUluTGVmdCB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluTGVmdCBsaW5lYXIgMC43cztcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbkxlZnQgbGluZWFyIDAuN3M7XHJcbiAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlSW5MZWZ0IGxpbmVhciAwLjdzO1xyXG4gICAgICAgICAgICAtby1hbmltYXRpb246IGZhZGVJbkxlZnQgbGluZWFyIDAuN3M7XHJcbiAgICAgICAgICAgIC1tcy1hbmltYXRpb246IGZhZGVJbkxlZnQgbGluZWFyIDAuN3M7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1tZXNvbnJ5IGltZyB7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4vLyB9XHJcblxyXG4vLyBNw7JiaWwgLy9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIC5yZXN1bHRhdHMge1xyXG4gICAgICAgICAgICAudXN1YXJpcyxcclxuICAgICAgICAgICAgLm1lZGl1bXMsXHJcbiAgICAgICAgICAgIC5tb3ZlbWVudHMsXHJcbiAgICAgICAgICAgIC50YWdzLFxyXG4gICAgICAgICAgICAucHVibGljYWNpb25zIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    81627: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchModule": function SearchModule() {
          return (
            /* binding */
            _SearchModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      44466);
      /* harmony import */


      var ngx_masonry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-masonry */
      70346);
      /* harmony import */


      var _search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./search.component */
      64322);
      /* harmony import */


      var _search_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search-routing.module */
      71023);
      /* harmony import */


      var ngx_masonry_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-masonry-gallery */
      25918);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _discover_discover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./discover/discover.component */
      43757);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout */
      70793);
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/grid-list */
      4929);
      /* harmony import */


      var _discover_grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./discover/grid-item/grid-item.component */
      75560);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SearchModule = function _SearchModule() {
        _classCallCheck(this, _SearchModule);
      };

      _SearchModule.ɵfac = function SearchModule_Factory(t) {
        return new (t || _SearchModule)();
      };

      _SearchModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _SearchModule
      });
      _SearchModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_search_routing_module__WEBPACK_IMPORTED_MODULE_2__.SearchRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_masonry__WEBPACK_IMPORTED_MODULE_7__.NgxMasonryModule, ngx_masonry_gallery__WEBPACK_IMPORTED_MODULE_8__.MasonryGalleryModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__.MatGridListModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_SearchModule, {
          declarations: [_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent, _discover_discover_component__WEBPACK_IMPORTED_MODULE_3__.DiscoverComponent, _discover_grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_4__.GridItemComponent],
          imports: [_search_routing_module__WEBPACK_IMPORTED_MODULE_2__.SearchRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_masonry__WEBPACK_IMPORTED_MODULE_7__.NgxMasonryModule, ngx_masonry_gallery__WEBPACK_IMPORTED_MODULE_8__.MasonryGalleryModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__.MatGridListModule],
          exports: [_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_in2art_pages_search_search_module_ts-es5.js.map