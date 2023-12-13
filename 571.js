"use strict";
(self["webpackChunkweb_app_versions"] = self["webpackChunkweb_app_versions"] || []).push([[571],{

/***/ 8029:
/*!**********************************************************************!*\
  !*** ./src/app/ApiClient.Backend/components/has-token-ok.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HasTokenOkService: () => (/* binding */ HasTokenOkService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api */ 5880);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _backend_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backend/api */ 1202);
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/api */ 9686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);



 // Importa el operador takeUntil



let HasTokenOkService = /*#__PURE__*/(() => {
  class HasTokenOkService {
    constructor() {
      this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject(); // Observable para la terminación
      this.checkTokenPeriodically();
    }
    getToken() {
      return this.tokenSubject.asObservable();
    }
    checkTokenPeriodically() {
      const obj = this;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.interval)(1000) // Verificar cada segundo
      .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(obj.destroy$) // Detiene el intervalo cuando destroy$ emite un valor
      ).subscribe(() => {
        _services_api__WEBPACK_IMPORTED_MODULE_1__["default"].checkTokenApi().subscribe({
          next: function () {
            var _ref = (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (isOk) {
              let token;
              if (isOk) {
                try {
                  token = yield (0,_helpers_api__WEBPACK_IMPORTED_MODULE_3__.getMediaApiToken)();
                } catch {
                  token = yield _backend_api__WEBPACK_IMPORTED_MODULE_2__.Api.putMediaToken();
                }
                if (token) {
                  obj.stopInterval();
                  obj.tokenSubject.next(isOk);
                }
              }
            });
            return function next(_x) {
              return _ref.apply(this, arguments);
            };
          }()
        });
      });
    }
    stopInterval() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    static #_ = this.ɵfac = function HasTokenOkService_Factory(t) {
      return new (t || HasTokenOkService)();
    };
    static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: HasTokenOkService,
      factory: HasTokenOkService.ɵfac,
      providedIn: 'root'
    });
  }
  return HasTokenOkService;
})();

/***/ }),

/***/ 4072:
/*!***********************************************************************!*\
  !*** ./src/app/ApiClient.Backend/components/image/image.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageComponent: () => (/* binding */ ImageComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var src_app_ApiClient_Backend_backend_Media_mediaApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ApiClient.Backend/backend/Media/mediaApi */ 6351);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _has_token_ok_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../has-token-ok.service */ 8029);
/* harmony import */ var _backend_Common_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../backend/Common/uuid */ 4969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);









let ImageComponent = /*#__PURE__*/(() => {
  class ImageComponent {
    constructor(hasTokenService) {
      this.hasTokenService = hasTokenService;
      /**
       * It is a good idea to always include width and height attributes.
       * If height and width are not set,
       * the page might flicker while the video loads.
       */
      this.width = 50;
      this.height = 50;
      this.isThumbnail = true;
      this.canLoad = true;
      /**
       * while isSetted is false the picture doesn't load into video component
       */
      this.isSetted = true;
      this.isLoading = false;
      this.imgSourceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(undefined);
      this.imgSource$ = this.imgSourceSubject.asObservable();
      this.hasMediaToken = false;
    }
    // Data Base64 Source
    set dataBase64Src(value) {
      this._dataBase64Src = value;
      this.load();
    }
    get dataBase64Src() {
      return this._dataBase64Src;
    }
    // URL
    set url(value) {
      this._url = value;
      this.load();
    }
    get url() {
      return this._url;
    }
    // ID Picture
    set idPicture(value) {
      this._idPicture = value;
      this.load();
    }
    get idPicture() {
      return this._idPicture;
    }
    // User ID
    set userId(value) {
      this._userId = value;
      this.load();
    }
    get userId() {
      return this._userId;
    }
    get srcImg() {
      return !this.isSetted ? undefined : this.dataBase64Src ?? this.url;
    }
    get isLoaded() {
      return this.dataBase64Src != undefined || this.url != undefined;
    }
    ngOnInit() {
      var _this = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const obj = _this;
        if (!_this.dataBase64Src || !_this.url || !_this.isThumbnail || !_this.userId || !_this.folder) {
          //sense aixó necessito el token
          obj.hasTokenService.getToken().subscribe({
            next: function () {
              var _ref = (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (isOk) {
                obj.hasMediaToken = isOk;
                if (obj.canLoad && obj.hasMediaToken) {
                  yield obj.load();
                }
              });
              return function next(_x) {
                return _ref.apply(this, arguments);
              };
            }()
          });
        } else {
          yield obj.load();
        }
      })();
    }
    /**
     * if resolution change or isThumbnail
     */
    reset() {
      this.dataBase64Src = undefined;
      this.url = undefined;
    }
    load() {
      var _this2 = this;
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this2.isLoaded) {
          if (!_this2.idPicture || _this2.idPicture == _backend_Common_uuid__WEBPACK_IMPORTED_MODULE_3__.Uuid.defaultValue) {
            _this2.url = _this2.defaultImageUrl;
          } else {
            if (_this2.isThumbnail && !_this2.resolution) {
              if (_this2.userId && _this2.folder) {
                _this2.url = ImageComponent.getThumbnailUrl({
                  idPicture: _this2.idPicture,
                  userId: _this2.userId,
                  type: _this2.folder
                });
              } else {
                _this2.dataBase64Src = yield ImageComponent.getThumbnailSrc(_this2.idPicture);
              }
            } else if (_this2.hasMediaToken) {
              _this2.dataBase64Src = yield ImageComponent.getSrc(_this2.idPicture, _this2.resolution ?? 'R8K');
            }
          }
          _this2.imgSourceSubject.next(_this2.srcImg ?? undefined);
        } else {
          _this2.imgSourceSubject.next(_this2.srcImg ?? undefined);
        }
      })();
    }
    static getSrc(idPicture, resolution = 'R8K') {
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return src_app_ApiClient_Backend_backend_Media_mediaApi__WEBPACK_IMPORTED_MODULE_1__.MediaApi.getPicture({
          id: idPicture,
          resolution
        }).then(p => p.data?.Src);
      })();
    }
    static getThumbnailSrc(idPicture) {
      return (0,_home_runner_work_WebAppVersions_WebAppVersions_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return src_app_ApiClient_Backend_backend_Media_mediaApi__WEBPACK_IMPORTED_MODULE_1__.MediaApi.getFileThumbnail(idPicture).then(p => p.data?.Src);
      })();
    }
    static getThumbnailUrl({
      idPicture,
      userId,
      type
    }) {
      return src_app_ApiClient_Backend_backend_Media_mediaApi__WEBPACK_IMPORTED_MODULE_1__.MediaApi.getThumbnailUrl(idPicture, userId, type);
    }
    static #_ = this.ɵfac = function ImageComponent_Factory(t) {
      return new (t || ImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_has_token_ok_service__WEBPACK_IMPORTED_MODULE_2__.HasTokenOkService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ImageComponent,
      selectors: [["app-image"]],
      inputs: {
        width: "width",
        height: "height",
        defaultImageUrl: "defaultImageUrl",
        dataBase64Src: "dataBase64Src",
        url: "url",
        idPicture: "idPicture",
        userId: "userId",
        folder: "folder",
        resolution: "resolution",
        isThumbnail: "isThumbnail",
        canLoad: "canLoad",
        isSetted: "isSetted"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [[1, "image", 3, "src", "width", "height"]],
      template: function ImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "video", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 3, ctx.imgSource$), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("width", ctx.width)("height", ctx.height);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQXBpQ2xpZW50LkJhY2tlbmQvY29tcG9uZW50cy9pbWFnZS9pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return ImageComponent;
})();

/***/ }),

/***/ 5880:
/*!***************************************************!*\
  !*** ./src/app/ApiClient.Backend/services/api.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _backend_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../backend/api */ 1202);
/* harmony import */ var _helpers_observables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/observables */ 2594);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_helpers_observables__WEBPACK_IMPORTED_MODULE_1__.ToService)(_backend_api__WEBPACK_IMPORTED_MODULE_0__.Api));

/***/ }),

/***/ 9613:
/*!***************************************************************!*\
  !*** ./src/app/pages/profile/components/profile.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 72);
/* harmony import */ var _store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/profile/profile.selectors */ 5295);
/* harmony import */ var _store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/profile/profile.actions */ 7188);
/* harmony import */ var _store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/auth/auth.selectors */ 4590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/container/container.component */ 2580);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var _ApiClient_Backend_components_image_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ApiClient.Backend/components/image/image.component */ 4072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
















function ProfileComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-image", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div")(4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const LoginInfo_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("folder", "UserPictures")("idPicture", LoginInfo_r4.pictureId)("userId", LoginInfo_r4.userProfile.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](LoginInfo_r4.userProfile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]("@" + LoginInfo_r4.userNickname.nicknameDisplayed);
  }
}
function ProfileComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "BTN.EDIT_PROFILE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "BTN.INSIGHTS"));
  }
}
function ProfileComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "BTN.FOLLOW"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "BTN.SUBSCRIBE"));
  }
}
function ProfileComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
let ProfileComponent = /*#__PURE__*/(() => {
  class ProfileComponent {
    constructor(store, route) {
      this.store = store;
      this.route = route;
      this.isCurrentUserProfile = false;
      this.isLoading$ = this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_0__.selectIsLoadingProfile);
      this.userLoginInfo$ = this.store.select(_store_profile_profile_selectors__WEBPACK_IMPORTED_MODULE_0__.selectUserLoginInfo);
    }
    ngOnInit() {
      this.routeSubscription = this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatestWith)(this.store.select(_store_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCurrentUserNickname)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([params, currentUser]) => {
        this.isCurrentUserProfile = params['userSlug'] === currentUser;
        this.store.dispatch((0,_store_profile_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getLoginInfoAction)({
          nicknameUrl: params['userSlug']
        }));
      })).subscribe();
    }
    ngOnDestroy() {
      if (this.routeSubscription) {
        this.routeSubscription.unsubscribe();
      }
    }
    static #_ = this.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-user-profile"]],
      decls: 12,
      vars: 13,
      consts: [[3, "width", "isLoading"], [1, "flex", "flex-column", "gap-3"], ["class", "profile-user", 4, "ngIf"], [1, "profile-controls"], [4, "ngIf"], ["pButton", "", "pRipple", "", "icon", "pi pi-send", 3, "label"], [1, "profile-highlights"], ["class", "add-highlight", 4, "ngIf"], [1, "profile-user"], [1, "image-wrapper"], ["defaultImageUrl", "assets/videos/noUserVid.mp4", 3, "folder", "idPicture", "userId"], [1, "text-3xl", "font-bold", "mb-2"], ["pButton", "", "pRipple", "", "icon", "pi pi-user-edit", 3, "label"], ["pButton", "", "pRipple", "", "icon", "pi pi-eye", 3, "label"], ["pButton", "", "pRipple", "", "icon", "pi pi-user-plus", 3, "label"], ["pButton", "", "pRipple", "", "icon", "pi pi-star", 3, "label"], [1, "add-highlight"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 231.99 232.02", 1, "icon"], ["stroke", "currentColor", "stroke-width", "10px", "stroke-miterlimit", "10", "fill", "none", "d", "M95.17 136.82h-69a20.81 20.81 0 0 1-9.04-39.72 21.83 21.83 0 0 1 9.11-1.9h68.93v-69a20.25 20.25 0 0 1 8.24-16.94 20.72 20.72 0 0 1 32.77 11.78 23.12 23.12 0 0 1 .57 5.32q.06 33.93 0 67.87v1h69a20.34 20.34 0 0 1 17.57 9.05c8.64 12.37 1.24 29.8-13.66 32.23a25.15 25.15 0 0 1-4.06.31h-68.81v68.94c0 7.76-3.24 13.89-9.79 18.08a20.77 20.77 0 0 1-31.5-14.12 25.94 25.94 0 0 1-.32-4.13v-67.75Z"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProfileComponent_div_3_Template, 8, 5, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ProfileComponent_ng_container_6_Template, 5, 6, "ng-container", 4)(7, ProfileComponent_ng_container_7_Template, 5, 6, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ProfileComponent_button_11_Template, 3, 0, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 800)("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 7, ctx.isLoading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 9, ctx.userLoginInfo$));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isCurrentUserProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isCurrentUserProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 11, "BTN.MESSAGE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isCurrentUserProfile);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_3__.ContainerComponent, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.Ripple, _ApiClient_Backend_components_image_image_component__WEBPACK_IMPORTED_MODULE_4__.ImageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
      styles: [".profile-user[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  column-gap: 1rem;\n  height: 240px;\n}\n\n.profile-controls[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  column-gap: 1rem;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.profile-highlights[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.add-highlight[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 2px solid var(--textLight);\n  border-radius: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20%;\n}\n.add-highlight[_ngcontent-%COMP%]:hover {\n  border-color: var(--activeLink);\n}\n.add-highlight[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: var(--activeLink);\n}\n\n.icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  stroke: var(--textLight);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSwrQkFBQTtBQUNKO0FBQ0k7RUFDRSx5QkFBQTtBQUNOOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQURGIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtdXNlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgY29sdW1uLWdhcDogMXJlbTtcbiAgaGVpZ2h0OiAyNDBweDtcbn1cblxuLnByb2ZpbGUtY29udHJvbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBjb2x1bW4tZ2FwOiAxcmVtO1xufVxuXG4uaW1hZ2Utd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2ZpbGUtaGlnaGxpZ2h0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG59XG5cbi5hZGQtaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHRMaWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMCU7XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY3RpdmVMaW5rKTtcblxuICAgICYgLmljb24gcGF0aCB7XG4gICAgICBzdHJva2U6IHZhcigtLWFjdGl2ZUxpbmspO1xuICAgIH1cbiAgfVxufVxuXG4uaWNvbiBwYXRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgc3Ryb2tlOiB2YXIoLS10ZXh0TGlnaHQpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return ProfileComponent;
})();

/***/ }),

/***/ 8197:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileRoutingModule: () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gilsdav/ngx-translate-router */ 862);
/* harmony import */ var _components_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/profile.component */ 9613);
/* harmony import */ var _enums_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @enums/urls */ 5500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: _enums_urls__WEBPACK_IMPORTED_MODULE_1__.URLS.USER_SLUG,
  component: _components_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent
}];
let ProfileRoutingModule = /*#__PURE__*/(() => {
  class ProfileRoutingModule {
    static #_ = this.ɵfac = function ProfileRoutingModule_Factory(t) {
      return new (t || ProfileRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ProfileRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
  return ProfileRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _gilsdav_ngx_translate_router__WEBPACK_IMPORTED_MODULE_4__.LocalizeRouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5017:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileModule: () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 8197);
/* harmony import */ var _components_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/profile.component */ 9613);
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/container/container.component */ 2580);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 5046);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ApiClient/components/image/image.component */ 4072);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/progressspinner */ 7355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);










let ProfileModule = /*#__PURE__*/(() => {
  class ProfileModule {
    static #_ = this.ɵfac = function ProfileModule_Factory(t) {
      return new (t || ProfileModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: ProfileModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_3__.ImageComponent, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_9__.ProgressSpinnerModule]
    });
  }
  return ProfileModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProfileModule, {
    declarations: [_components_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule, _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__.ContainerComponent, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ApiClient_components_image_image_component__WEBPACK_IMPORTED_MODULE_3__.ImageComponent, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_9__.ProgressSpinnerModule]
  });
})();

/***/ }),

/***/ 5295:
/*!****************************************************!*\
  !*** ./src/app/store/profile/profile.selectors.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   profileFeatureSelector: () => (/* binding */ profileFeatureSelector),
/* harmony export */   selectIsLoadingProfile: () => (/* binding */ selectIsLoadingProfile),
/* harmony export */   selectUserLoginInfo: () => (/* binding */ selectUserLoginInfo),
/* harmony export */   selectUserPosts: () => (/* binding */ selectUserPosts)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

const profileFeatureSelector = state => state.profile;
const selectIsLoadingProfile = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(profileFeatureSelector, state => state.isLoading);
const selectUserLoginInfo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(profileFeatureSelector, state => state.loginInfo);
const selectUserPosts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(profileFeatureSelector, state => state.posts);

/***/ }),

/***/ 445:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/combineLatest.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combineLatest: () => (/* binding */ combineLatest)
/* harmony export */ });
/* harmony import */ var _observable_combineLatest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/combineLatest */ 3839);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 4114);
/* harmony import */ var _util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/argsOrArgArray */ 979);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 7825);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/pipe */ 2476);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 6190);






function combineLatest(...args) {
  const resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popResultSelector)(args);
  return resultSelector ? (0,_util_pipe__WEBPACK_IMPORTED_MODULE_1__.pipe)(combineLatest(...args), (0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_2__.mapOneOrManyArgs)(resultSelector)) : (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => {
    (0,_observable_combineLatest__WEBPACK_IMPORTED_MODULE_4__.combineLatestInit)([source, ...(0,_util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_5__.argsOrArgArray)(args)])(subscriber);
  });
}

/***/ }),

/***/ 72:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/combineLatestWith.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combineLatestWith: () => (/* binding */ combineLatestWith)
/* harmony export */ });
/* harmony import */ var _combineLatest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combineLatest */ 445);

function combineLatestWith(...otherSources) {
  return (0,_combineLatest__WEBPACK_IMPORTED_MODULE_0__.combineLatest)(...otherSources);
}

/***/ }),

/***/ 979:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/argsOrArgArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   argsOrArgArray: () => (/* binding */ argsOrArgArray)
/* harmony export */ });
const {
  isArray
} = Array;
function argsOrArgArray(args) {
  return args.length === 1 && isArray(args[0]) ? args[0] : args;
}

/***/ })

}]);
//# sourceMappingURL=571.js.map