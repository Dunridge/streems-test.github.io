(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/04d":
/*!******************************************************!*\
  !*** ./src/app/store/actions/posts/posts.actions.ts ***!
  \******************************************************/
/*! exports provided: PostsActionTypes, FetchPosts, FetchPostsSuccess, FetchPostsFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsActionTypes", function() { return PostsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchPosts", function() { return FetchPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchPostsSuccess", function() { return FetchPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchPostsFailure", function() { return FetchPostsFailure; });
var PostsActionTypes;
(function (PostsActionTypes) {
    PostsActionTypes["LOAD_POSTS"] = "[Posts] Load posts";
    PostsActionTypes["LOAD_POSTS_SUCCESS"] = "[Posts] Load posts success";
    PostsActionTypes["LOAD_POSTS_FAILURE"] = "[Posts] Load posts failure";
})(PostsActionTypes || (PostsActionTypes = {}));
class FetchPosts {
    constructor(payload) {
        this.payload = payload;
        this.type = PostsActionTypes.LOAD_POSTS;
    }
}
class FetchPostsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = PostsActionTypes.LOAD_POSTS_SUCCESS;
    }
}
class FetchPostsFailure {
    constructor(payload) {
        this.payload = payload;
        this.type = PostsActionTypes.LOAD_POSTS_FAILURE;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Program Files\JetBrains\WebStorm projects\streems-test\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HeaderComponent {
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 0, consts: [[1, "header"], [1, "header__menu-items"], ["routerLink", "/users", 1, "header__title"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Streems test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".header[_ngcontent-%COMP%] {\n  height: 100px;\n  background-color: #a4a559;\n  cursor: pointer;\n}\n.header__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 36px;\n  outline: 0;\n}\n.header__menu-items[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  height: 100%;\n  align-items: center;\n}\n.header__menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #666161;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZXMvZm9yLWltcG9ydC9fcGFsZXR0ZS5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZXMvZm9yLWltcG9ydC9fZ2VuZXJhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHlCQ0hhO0VESWIsZUFBQTtBQURGO0FBR0U7RUFDRSxnQkFBQTtFQUNBLGVFUGU7RUZRZixVQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlFQ1U7RUZBVixtQkFBQTtBQUZKO0FBR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXRURPO0VGRVAsWUVMUTtFRk1SLHlCQUFBO0FBRE4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zdHlsZXMvYWxsXCI7XHJcblxyXG4uaGVhZGVyIHtcclxuICBoZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItY29sb3I7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAkaGVhZGVyLWZvbnQtc2l6ZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG5cclxuICAmX19tZW51LWl0ZW1zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGhlaWdodDogJGZ1bGwtaGVpZ2h0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGEge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICB3aWR0aDogJGZ1bGwtd2lkdGg7XHJcbiAgICAgIGhlaWdodDogJGZ1bGwtaGVpZ2h0O1xyXG4gICAgICBib3JkZXI6ICRzbWFsbC1ib3JkZXItd2lkdGggc29saWQgJGxpbmstYm9yZGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJcclxuJGhlYWRlci1jb2xvcjogcmdiKDE2NCwgMTY1LCA4OSk7XHJcbiRib2R5LWNvbG9yOiByZ2JhKDEyOCwxMjgsMTI4LCAwLjUpO1xyXG4kdXNlci1jb2xvcjogI2ZmZmNmMDtcclxuJGJ1dHRvbi1jb2xvcjogI2NjYjY2MDtcclxuJGZvb3Rlci1jb2xvcjogJGhlYWRlci1jb2xvcjtcclxuXHJcbiRsaW5rLWJvcmRlcjogIzY2NjE2MTtcclxuJGxpbmstY29sb3I6ICMwMDYwQjY7XHJcbiRsaW5rLWFjdGl2ZTogIzAwQTBDNjtcclxuXHJcbiRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5cclxuJGxpbmVhci1ncmFkaWVudC1mcm9tOiAjZjZiNzNjO1xyXG4kbGluZWFyLWdyYWRpZW50LXRvOiAjNGQ5ZjBjO1xyXG4iLCJcclxuLy8gaGVhZGVyIGZvbnQtc2l6ZVxyXG4kaGVhZGVyLWZvbnQtc2l6ZTogMzZweDtcclxuJGhlYWRlci1oZWlnaHQ6IDEwMHB4O1xyXG4kZm9vdGVyLWhlaWdodDogJGhlYWRlci1oZWlnaHQgKiAzLjU7XHJcbiRmb250LXNpemUtMjBweDogMjBweDtcclxuJGZvbnQtc2l6ZS0yNnB4OiAyNnB4O1xyXG4kbWFyZ2luLTIwOiAyMHB4O1xyXG4kY29weXJpZ2h0LXBhZGRpbmc6IDUwcHg7XHJcbiRtaW4td2lkdGg6IDE1MDBweDtcclxuJGJveC1zaGFkb3ctd2lkdGg6IDRweDtcclxuXHJcbiR1c2VyLWJvcmRlci1yYWRpdXM6IDZweDtcclxuJHVzZXItd2lkdGg6IDY1JTtcclxuJHVzZXItc3RhdGlzdGljcy1yaWdodC1tYXJnaW46IDAuMTUgKiAkdXNlci13aWR0aDtcclxuJGltZy1wZXJjZW50YWdlOiAxNSU7XHJcbiR1c2VyLWhlaWdodDogMjUwcHg7XHJcbiRmdWxsLWhlaWdodDogMTAwJTtcclxuXHJcbi8vIGZ1bGwgd2lkdGhcclxuJGZ1bGwtd2lkdGg6IDEwMCU7XHJcbiRzbWFsbC1ib3JkZXItd2lkdGg6IDFweDtcclxuXHJcbiRtYXJnaW4tMDogMDtcclxuJHVzZXItbWFyZ2luOiAxNHB4OyAvLyBtYXJnaW4gYmV0d2VlbiBjYXJkc1xyXG4kYm9yZGVyLXBhdHRlcm4td2lkdGg6IDI7XHJcblxyXG4vLyBzZXQgaW1hZ2UgZGltZW5zaW9uc1xyXG4kaW1nLWRpbWVuc2lvbnM6IDE1MHB4O1xyXG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "6Ma9":
/*!****************************************************!*\
  !*** ./src/app/app-layout/app-layout.component.ts ***!
  \****************************************************/
/*! exports provided: AppLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLayoutComponent", function() { return AppLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer/footer.component */ "LmEr");





class AppLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppLayoutComponent.ɵfac = function AppLayoutComponent_Factory(t) { return new (t || AppLayoutComponent)(); };
AppLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppLayoutComponent, selectors: [["app-app-layout"]], decls: 3, vars: 0, template: function AppLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1sYXlvdXQvYXBwLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-layout',
                templateUrl: './app-layout.component.html',
                styleUrls: ['./app-layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6Qg2":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UsersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getUsers() {
        return this.httpClient.get('https://5fca3e863c1c220016441fcc.mockapi.io/api/v1/users');
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "6a3v":
/*!******************************************************!*\
  !*** ./src/app/store/actions/users/users.actions.ts ***!
  \******************************************************/
/*! exports provided: UsersActionTypes, FetchUsers, FetchUsersSuccess, FetchUsersFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersActionTypes", function() { return UsersActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchUsers", function() { return FetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchUsersSuccess", function() { return FetchUsersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchUsersFailure", function() { return FetchUsersFailure; });
var UsersActionTypes;
(function (UsersActionTypes) {
    UsersActionTypes["LOAD_USERS"] = "[Users] Load users";
    UsersActionTypes["LOAD_USERS_SUCCESS"] = "[Users] Load users success";
    UsersActionTypes["LOAD_USERS_FAILURE"] = "[Users] Users load error";
})(UsersActionTypes || (UsersActionTypes = {}));
class FetchUsers {
    constructor() {
        this.type = UsersActionTypes.LOAD_USERS;
    }
}
class FetchUsersSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UsersActionTypes.LOAD_USERS_SUCCESS;
    }
}
class FetchUsersFailure {
    constructor(payload) {
        this.payload = payload;
        this.type = UsersActionTypes.LOAD_USERS_FAILURE;
    }
}


/***/ }),

/***/ "896x":
/*!************************************************!*\
  !*** ./src/app/store/effects/posts.effects.ts ***!
  \************************************************/
/*! exports provided: PostsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsEffects", function() { return PostsEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _actions_posts_posts_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/posts/posts.actions */ "/04d");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");








class PostsEffects {
    constructor(actions$, postsService) {
        this.actions$ = actions$;
        this.postsService = postsService;
        this.loadPosts$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_posts_posts_actions__WEBPACK_IMPORTED_MODULE_1__["PostsActionTypes"].LOAD_POSTS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(
        // TODO: you have to pass user id to the effect
        (action) => this.postsService.getPosts(action.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => new _actions_posts_posts_actions__WEBPACK_IMPORTED_MODULE_1__["FetchPostsSuccess"](data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_posts_posts_actions__WEBPACK_IMPORTED_MODULE_1__["FetchPostsFailure"](error)))))));
    }
}
PostsEffects.ɵfac = function PostsEffects_Factory(t) { return new (t || PostsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"])); };
PostsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PostsEffects, factory: PostsEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](PostsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"] }, { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_5__["PostsService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Hkgh":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.component */ "ytin");





function UsersComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r5)("hideButton", false);
} }
function UsersComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersComponent_ng_container_0_ng_container_1_Template, 2, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const users_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", users_r3);
} }
function UsersComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Something's wrong with the API, wait a couple of seconds and reload the page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UsersComponent {
    // TODO: correcting these parts according to your NgRx tutorial app materials (...) --
    //  -- did for users, now implementing for posts...
    constructor(store) {
        this.store = store;
        this.users$ = this.store.select(state => {
            // @ts-ignore
            return state.users.users;
        });
    }
    ngOnInit() {
        this.store.dispatch({ type: '[Users] Load users' });
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["apiError", ""], [4, "ngFor", "ngForOf"], [3, "user", "hideButton"], [1, "api-error"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UsersComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UsersComponent_ng_template_2_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.users$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".api-error[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 20px auto;\n  background-color: #fffcf0;\n  width: 65%;\n  height: 32.5%;\n  padding: 20px 0;\n  font-size: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL2Zvci1pbXBvcnQvX3BhbGV0dGUuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL2Zvci1pbXBvcnQvX2dlbmVyYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJDSFc7RURJWCxVRU1XO0VGTFgsYUFBQTtFQUNBLGVBQUE7RUFDQSxlRUplO0FGR2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy9hbGxcIjtcclxuXHJcbi5hcGktZXJyb3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAkbWFyZ2luLTIwIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHVzZXItY29sb3I7XHJcbiAgd2lkdGg6ICR1c2VyLXdpZHRoO1xyXG4gIGhlaWdodDogJHVzZXItd2lkdGggLyAyO1xyXG4gIHBhZGRpbmc6ICRmb250LXNpemUtMjBweCAwO1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0yNnB4O1xyXG59XHJcbiIsIlxyXG4kaGVhZGVyLWNvbG9yOiByZ2IoMTY0LCAxNjUsIDg5KTtcclxuJGJvZHktY29sb3I6IHJnYmEoMTI4LDEyOCwxMjgsIDAuNSk7XHJcbiR1c2VyLWNvbG9yOiAjZmZmY2YwO1xyXG4kYnV0dG9uLWNvbG9yOiAjY2NiNjYwO1xyXG4kZm9vdGVyLWNvbG9yOiAkaGVhZGVyLWNvbG9yO1xyXG5cclxuJGxpbmstYm9yZGVyOiAjNjY2MTYxO1xyXG4kbGluay1jb2xvcjogIzAwNjBCNjtcclxuJGxpbmstYWN0aXZlOiAjMDBBMEM2O1xyXG5cclxuJGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblxyXG4kbGluZWFyLWdyYWRpZW50LWZyb206ICNmNmI3M2M7XHJcbiRsaW5lYXItZ3JhZGllbnQtdG86ICM0ZDlmMGM7XHJcbiIsIlxyXG4vLyBoZWFkZXIgZm9udC1zaXplXHJcbiRoZWFkZXItZm9udC1zaXplOiAzNnB4O1xyXG4kaGVhZGVyLWhlaWdodDogMTAwcHg7XHJcbiRmb290ZXItaGVpZ2h0OiAkaGVhZGVyLWhlaWdodCAqIDMuNTtcclxuJGZvbnQtc2l6ZS0yMHB4OiAyMHB4O1xyXG4kZm9udC1zaXplLTI2cHg6IDI2cHg7XHJcbiRtYXJnaW4tMjA6IDIwcHg7XHJcbiRjb3B5cmlnaHQtcGFkZGluZzogNTBweDtcclxuJG1pbi13aWR0aDogMTUwMHB4O1xyXG4kYm94LXNoYWRvdy13aWR0aDogNHB4O1xyXG5cclxuJHVzZXItYm9yZGVyLXJhZGl1czogNnB4O1xyXG4kdXNlci13aWR0aDogNjUlO1xyXG4kdXNlci1zdGF0aXN0aWNzLXJpZ2h0LW1hcmdpbjogMC4xNSAqICR1c2VyLXdpZHRoO1xyXG4kaW1nLXBlcmNlbnRhZ2U6IDE1JTtcclxuJHVzZXItaGVpZ2h0OiAyNTBweDtcclxuJGZ1bGwtaGVpZ2h0OiAxMDAlO1xyXG5cclxuLy8gZnVsbCB3aWR0aFxyXG4kZnVsbC13aWR0aDogMTAwJTtcclxuJHNtYWxsLWJvcmRlci13aWR0aDogMXB4O1xyXG5cclxuJG1hcmdpbi0wOiAwO1xyXG4kdXNlci1tYXJnaW46IDE0cHg7IC8vIG1hcmdpbiBiZXR3ZWVuIGNhcmRzXHJcbiRib3JkZXItcGF0dGVybi13aWR0aDogMjtcclxuXHJcbi8vIHNldCBpbWFnZSBkaW1lbnNpb25zXHJcbiRpbWctZGltZW5zaW9uczogMTUwcHg7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "footer"], [1, "footer__copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A9 Copyright 2021 Streems ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  height: 350px;\n  width: 100%;\n  background-color: #a4a559;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.footer__copyright[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZXMvZm9yLWltcG9ydC9fZ2VuZXJhbC5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZXMvZm9yLWltcG9ydC9fcGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUNDYztFREFkLFdDZ0JXO0VEZlgseUJFSmE7RUZLYixhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQURGO0FBR0U7RUFDRSxrQkFBQTtFQUNBLG9CQ0pnQjtBREdwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy9hbGxcIjtcclxuXHJcbi5mb290ZXIge1xyXG4gIGhlaWdodDogJGZvb3Rlci1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRmdWxsLXdpZHRoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRmb290ZXItY29sb3I7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICZfX2NvcHlyaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogJGNvcHlyaWdodC1wYWRkaW5nO1xyXG4gIH1cclxufVxyXG4iLCJcclxuLy8gaGVhZGVyIGZvbnQtc2l6ZVxyXG4kaGVhZGVyLWZvbnQtc2l6ZTogMzZweDtcclxuJGhlYWRlci1oZWlnaHQ6IDEwMHB4O1xyXG4kZm9vdGVyLWhlaWdodDogJGhlYWRlci1oZWlnaHQgKiAzLjU7XHJcbiRmb250LXNpemUtMjBweDogMjBweDtcclxuJGZvbnQtc2l6ZS0yNnB4OiAyNnB4O1xyXG4kbWFyZ2luLTIwOiAyMHB4O1xyXG4kY29weXJpZ2h0LXBhZGRpbmc6IDUwcHg7XHJcbiRtaW4td2lkdGg6IDE1MDBweDtcclxuJGJveC1zaGFkb3ctd2lkdGg6IDRweDtcclxuXHJcbiR1c2VyLWJvcmRlci1yYWRpdXM6IDZweDtcclxuJHVzZXItd2lkdGg6IDY1JTtcclxuJHVzZXItc3RhdGlzdGljcy1yaWdodC1tYXJnaW46IDAuMTUgKiAkdXNlci13aWR0aDtcclxuJGltZy1wZXJjZW50YWdlOiAxNSU7XHJcbiR1c2VyLWhlaWdodDogMjUwcHg7XHJcbiRmdWxsLWhlaWdodDogMTAwJTtcclxuXHJcbi8vIGZ1bGwgd2lkdGhcclxuJGZ1bGwtd2lkdGg6IDEwMCU7XHJcbiRzbWFsbC1ib3JkZXItd2lkdGg6IDFweDtcclxuXHJcbiRtYXJnaW4tMDogMDtcclxuJHVzZXItbWFyZ2luOiAxNHB4OyAvLyBtYXJnaW4gYmV0d2VlbiBjYXJkc1xyXG4kYm9yZGVyLXBhdHRlcm4td2lkdGg6IDI7XHJcblxyXG4vLyBzZXQgaW1hZ2UgZGltZW5zaW9uc1xyXG4kaW1nLWRpbWVuc2lvbnM6IDE1MHB4O1xyXG4iLCJcclxuJGhlYWRlci1jb2xvcjogcmdiKDE2NCwgMTY1LCA4OSk7XHJcbiRib2R5LWNvbG9yOiByZ2JhKDEyOCwxMjgsMTI4LCAwLjUpO1xyXG4kdXNlci1jb2xvcjogI2ZmZmNmMDtcclxuJGJ1dHRvbi1jb2xvcjogI2NjYjY2MDtcclxuJGZvb3Rlci1jb2xvcjogJGhlYWRlci1jb2xvcjtcclxuXHJcbiRsaW5rLWJvcmRlcjogIzY2NjE2MTtcclxuJGxpbmstY29sb3I6ICMwMDYwQjY7XHJcbiRsaW5rLWFjdGl2ZTogIzAwQTBDNjtcclxuXHJcbiRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5cclxuJGxpbmVhci1ncmFkaWVudC1mcm9tOiAjZjZiNzNjO1xyXG4kbGluZWFyLWdyYWRpZW50LXRvOiAjNGQ5ZjBjO1xyXG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "MD2O":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/posts.reducer.ts ***!
  \*************************************************/
/*! exports provided: postsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postsReducer", function() { return postsReducer; });
/* harmony import */ var _actions_posts_posts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/posts/posts.actions */ "/04d");

const initialState = {
    posts: []
};
function postsReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_posts_posts_actions__WEBPACK_IMPORTED_MODULE_0__["PostsActionTypes"].LOAD_POSTS: {
            return Object.assign({}, state);
        }
        case _actions_posts_posts_actions__WEBPACK_IMPORTED_MODULE_0__["PostsActionTypes"].LOAD_POSTS_SUCCESS: {
            return {
                posts: action.payload
            };
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(store) {
        this.store = store;
        this.title = 'streams-test';
        this.message$ = this.store.select('message');
    }
    spanishMessage() {
        this.store.dispatch({ type: 'SPANISH' });
    }
    frenchMessage() {
        this.store.dispatch({ type: 'FRENCH' });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users/users.component */ "Hkgh");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/user.component */ "ytin");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/posts/posts.component */ "hMVD");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/users.service */ "6Qg2");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-layout/app-layout.component */ "6Ma9");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _store_effects_users_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/effects/users.effects */ "cwu1");
/* harmony import */ var _store_reducers_users_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/reducers/users.reducer */ "nyrb");
/* harmony import */ var _store_reducers_posts_reducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store/reducers/posts.reducer */ "MD2O");
/* harmony import */ var _store_effects_posts_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/effects/posts.effects */ "896x");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/environment */ "AytR");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forRoot({ users: _store_reducers_users_reducer__WEBPACK_IMPORTED_MODULE_16__["usersReducer"], posts: _store_reducers_posts_reducer__WEBPACK_IMPORTED_MODULE_17__["postsReducer"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__["EffectsModule"].forRoot([_store_effects_users_effects__WEBPACK_IMPORTED_MODULE_15__["UsersEffects"], _store_effects_posts_effects__WEBPACK_IMPORTED_MODULE_18__["PostsEffects"]]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_19__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
        _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
        _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
        _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_12__["AppLayoutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_19__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
                    _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                    _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                    _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_12__["AppLayoutComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forRoot({ users: _store_reducers_users_reducer__WEBPACK_IMPORTED_MODULE_16__["usersReducer"], posts: _store_reducers_posts_reducer__WEBPACK_IMPORTED_MODULE_17__["postsReducer"] }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__["EffectsModule"].forRoot([_store_effects_users_effects__WEBPACK_IMPORTED_MODULE_15__["UsersEffects"], _store_effects_posts_effects__WEBPACK_IMPORTED_MODULE_18__["PostsEffects"]]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_19__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].production })
                ],
                providers: [
                    _services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cwu1":
/*!************************************************!*\
  !*** ./src/app/store/effects/users.effects.ts ***!
  \************************************************/
/*! exports provided: UsersEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEffects", function() { return UsersEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/users/users.actions */ "6a3v");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/users.service */ "6Qg2");








class UsersEffects {
    constructor(actions$, usersService) {
        this.actions$ = actions$;
        this.usersService = usersService;
        this.loadUsers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_users_users_actions__WEBPACK_IMPORTED_MODULE_4__["UsersActionTypes"].LOAD_USERS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(() => this.usersService.getUsers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(users => ({ type: _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_4__["UsersActionTypes"].LOAD_USERS_SUCCESS, payload: users })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_4__["UsersActionTypes"].LOAD_USERS_FAILURE }))))));
    }
}
UsersEffects.ɵfac = function UsersEffects_Factory(t) { return new (t || UsersEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"])); };
UsersEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersEffects, factory: UsersEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] }]; }, null); })();


/***/ }),

/***/ "hMVD":
/*!*****************************************************!*\
  !*** ./src/app/components/posts/posts.component.ts ***!
  \*****************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_actions_posts_posts_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions/posts/posts.actions */ "/04d");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/users.service */ "6Qg2");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user.component */ "ytin");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function PostsComponent_ng_container_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const post_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (post_r5 == null ? null : post_r5.image) || "assets/images/default-post.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostsComponent_ng_container_1_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} }
function PostsComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostsComponent_ng_container_1_div_1_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostsComponent_ng_container_1_div_1_ng_template_2_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r5 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r5 == null ? null : post_r5.image)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r5.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r5.editedAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r5.createAt);
} }
function PostsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostsComponent_ng_container_1_div_1_Template, 11, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const posts_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", posts_r3);
} }
function PostsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Something's wrong with the API, wait a couple of seconds and reload the page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PostsComponent {
    constructor(store, route, postsService, usersService) {
        this.store = store;
        this.route = route;
        this.postsService = postsService;
        this.usersService = usersService;
    }
    ngOnInit() {
        this.route.params
            .subscribe(params => {
            this.userId = params.userId;
        });
        this.store.dispatch({ type: _store_actions_posts_posts_actions__WEBPACK_IMPORTED_MODULE_1__["PostsActionTypes"].LOAD_POSTS, payload: this.userId });
        this.usersService.getUsers()
            .subscribe(users => {
            this.user = users.find(user => user.id === this.userId);
        });
        this.posts$ = this.store.select(store => {
            // @ts-ignore
            return store.posts.posts;
        });
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"])); };
PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsComponent, selectors: [["app-posts"]], decls: 5, vars: 6, consts: [[3, "user", "hideButton"], [4, "ngIf", "ngIfElse"], ["apiError", ""], ["class", "post", 4, "ngFor", "ngForOf"], [1, "post"], ["defaultImage", ""], [1, "post__content"], [1, "post__edited-at"], [1, "post__created-at"], ["height", "512", "width", "672", "alt", "post image", 3, "src"], ["src", "assets/images/default-post.jpg", "height", "512", "width", "672", "alt", "post image"], [1, "api-error"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostsComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostsComponent_ng_template_3_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.user)("hideButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.posts$))("ngIfElse", _r1);
    } }, directives: [_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".post[_ngcontent-%COMP%] {\n  width: 65%;\n  margin: 14px auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #fffcf0;\n}\n.post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 40px;\n  border: 16px solid;\n  border-image: linear-gradient(#f6b73c, #4d9f0c) 2;\n}\n.post__content[_ngcontent-%COMP%] {\n  padding-bottom: 14px;\n}\n.post__go-back[_ngcontent-%COMP%] {\n  margin: 40px;\n}\n.post__btn-container[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.api-error[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  background-color: #fffcf0;\n  width: 65%;\n  height: 32.5%;\n  padding: 20px 0;\n  font-size: 26px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL2Zvci1pbXBvcnQvX2dlbmVyYWwuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL2Zvci1pbXBvcnQvX3BhbGV0dGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFVDVVc7RURUWCxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkVOVztBRktiO0FBR0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtBQURKO0FBSUU7RUFDRSxvQkNNVTtBRFJkO0FBS0U7RUFDRSxZQUFBO0FBSEo7QUFNRTtFQUNFLGlCQUFBO0FBSko7QUFRQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkUvQlc7RUZnQ1gsVUN0Qlc7RUR1QlgsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQ2hDZTtFRGlDZixtQkFBQTtBQUxGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlcy9hbGxcIjtcclxuXHJcbi5wb3N0IHtcclxuICB3aWR0aDogJHVzZXItd2lkdGg7XHJcbiAgbWFyZ2luOiAkdXNlci1tYXJnaW4gYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXNlci1jb2xvcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbjogNDBweDtcclxuICAgIGJvcmRlcjogMTZweCBzb2xpZDtcclxuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRsaW5lYXItZ3JhZGllbnQtZnJvbSwgJGxpbmVhci1ncmFkaWVudC10bykgJGJvcmRlci1wYXR0ZXJuLXdpZHRoO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogJHVzZXItbWFyZ2luO1xyXG4gIH1cclxuXHJcbiAgJl9fZ28tYmFjayB7XHJcbiAgICBtYXJnaW46IDQwcHg7XHJcbiAgfVxyXG5cclxuICAmX19idG4tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLmFwaS1lcnJvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46ICRtYXJnaW4tMCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR1c2VyLWNvbG9yO1xyXG4gIHdpZHRoOiAkdXNlci13aWR0aDtcclxuICBoZWlnaHQ6ICR1c2VyLXdpZHRoIC8gMjtcclxuICBwYWRkaW5nOiAkZm9udC1zaXplLTIwcHggMDtcclxuICBmb250LXNpemU6ICRmb250LXNpemUtMjZweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiIsIlxyXG4vLyBoZWFkZXIgZm9udC1zaXplXHJcbiRoZWFkZXItZm9udC1zaXplOiAzNnB4O1xyXG4kaGVhZGVyLWhlaWdodDogMTAwcHg7XHJcbiRmb290ZXItaGVpZ2h0OiAkaGVhZGVyLWhlaWdodCAqIDMuNTtcclxuJGZvbnQtc2l6ZS0yMHB4OiAyMHB4O1xyXG4kZm9udC1zaXplLTI2cHg6IDI2cHg7XHJcbiRtYXJnaW4tMjA6IDIwcHg7XHJcbiRjb3B5cmlnaHQtcGFkZGluZzogNTBweDtcclxuJG1pbi13aWR0aDogMTUwMHB4O1xyXG4kYm94LXNoYWRvdy13aWR0aDogNHB4O1xyXG5cclxuJHVzZXItYm9yZGVyLXJhZGl1czogNnB4O1xyXG4kdXNlci13aWR0aDogNjUlO1xyXG4kdXNlci1zdGF0aXN0aWNzLXJpZ2h0LW1hcmdpbjogMC4xNSAqICR1c2VyLXdpZHRoO1xyXG4kaW1nLXBlcmNlbnRhZ2U6IDE1JTtcclxuJHVzZXItaGVpZ2h0OiAyNTBweDtcclxuJGZ1bGwtaGVpZ2h0OiAxMDAlO1xyXG5cclxuLy8gZnVsbCB3aWR0aFxyXG4kZnVsbC13aWR0aDogMTAwJTtcclxuJHNtYWxsLWJvcmRlci13aWR0aDogMXB4O1xyXG5cclxuJG1hcmdpbi0wOiAwO1xyXG4kdXNlci1tYXJnaW46IDE0cHg7IC8vIG1hcmdpbiBiZXR3ZWVuIGNhcmRzXHJcbiRib3JkZXItcGF0dGVybi13aWR0aDogMjtcclxuXHJcbi8vIHNldCBpbWFnZSBkaW1lbnNpb25zXHJcbiRpbWctZGltZW5zaW9uczogMTUwcHg7XHJcbiIsIlxyXG4kaGVhZGVyLWNvbG9yOiByZ2IoMTY0LCAxNjUsIDg5KTtcclxuJGJvZHktY29sb3I6IHJnYmEoMTI4LDEyOCwxMjgsIDAuNSk7XHJcbiR1c2VyLWNvbG9yOiAjZmZmY2YwO1xyXG4kYnV0dG9uLWNvbG9yOiAjY2NiNjYwO1xyXG4kZm9vdGVyLWNvbG9yOiAkaGVhZGVyLWNvbG9yO1xyXG5cclxuJGxpbmstYm9yZGVyOiAjNjY2MTYxO1xyXG4kbGluay1jb2xvcjogIzAwNjBCNjtcclxuJGxpbmstYWN0aXZlOiAjMDBBMEM2O1xyXG5cclxuJGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblxyXG4kbGluZWFyLWdyYWRpZW50LWZyb206ICNmNmI3M2M7XHJcbiRsaW5lYXItZ3JhZGllbnQtdG86ICM0ZDlmMGM7XHJcbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-posts',
                templateUrl: './posts.component.html',
                styleUrls: ['./posts.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] }, { type: _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] }]; }, null); })();


/***/ }),

/***/ "jwUf":
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PostsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getPosts(userId) {
        console.log(userId);
        return this.httpClient.get(`https://5fca3e863c1c220016441fcc.mockapi.io/api/v1/users/${userId}/posts`);
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "nyrb":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/users.reducer.ts ***!
  \*************************************************/
/*! exports provided: usersReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersReducer", function() { return usersReducer; });
/* harmony import */ var _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/users/users.actions */ "6a3v");

const initialState = {
    users: []
};
function usersReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["UsersActionTypes"].LOAD_USERS: {
            return Object.assign({}, state);
        }
        case _actions_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["UsersActionTypes"].LOAD_USERS_SUCCESS: {
            return {
                users: [...action.payload]
            };
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/users/users.component */ "Hkgh");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/posts/posts.component */ "hMVD");
/* harmony import */ var _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-layout/app-layout.component */ "6Ma9");








const routes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_5__["AppLayoutComponent"],
        children: [
            {
                path: 'users',
                component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"]
            },
            {
                path: 'users/:userId',
                component: _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"]
            },
            {
                path: '',
                component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                pathMatch: 'full',
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ytin":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function UserComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.user == null ? null : ctx_r0.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} }
function UserComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Go back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/users", a1]; };
function UserComponent_button_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r4.user.id));
} }
class UserComponent {
    constructor() {
        this.hideButton = false;
        this.showPosts = false;
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], inputs: { user: "user", hideButton: "hideButton" }, decls: 38, vars: 9, consts: [[1, "user"], [1, "user__img-container"], [4, "ngIf", "ngIfElse"], ["defaultAvatar", ""], [1, "user__statistics"], [1, "user__statistics-container"], [1, "user__statistics-title"], [1, "user__name"], [1, "user__name-placeholder"], [1, "user__name-text"], [1, "user__age"], [1, "user__age-placeholder"], [1, "user__age-value"], [1, "user__role"], [1, "user__city"], [1, "user__created-at"], [1, "user__close-post"], ["routerLink", "/users", 4, "ngIf"], [1, "user__more-info"], [3, "routerLink", 4, "ngIf"], ["alt", "profile image", 3, "src"], ["src", "assets/images/user-2.svg", "alt", "post image"], ["routerLink", "/users"], [3, "routerLink"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserComponent_ng_template_3_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Statistics:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "City:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Created at:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UserComponent_button_35_Template, 2, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserComponent_button_37_Template, 2, 3, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user == null ? null : ctx.user.avatar)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.createdAt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideButton);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".user[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  background-color: #fffcf0;\n  width: 65%;\n  margin: 14px auto;\n  height: 250px;\n  border-radius: 6px;\n}\n.user[_ngcontent-%COMP%]:nth-of-type(1) {\n  margin-top: 7px;\n}\n.user__img-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 15%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.user__img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 150px;\n  border: 16px solid;\n  border-image: linear-gradient(#f6b73c, #4d9f0c) 2;\n}\n.user__statistics[_ngcontent-%COMP%] {\n  position: relative;\n  right: 4.875%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.user__statistics-title[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.user__statistics-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-start;\n}\n.user__name[_ngcontent-%COMP%], .user__age[_ngcontent-%COMP%], .user__role[_ngcontent-%COMP%], .user__city[_ngcontent-%COMP%], .user__created-at[_ngcontent-%COMP%] {\n  display: flex;\n}\n.user__name[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(1), .user__age[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(1), .user__role[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(1), .user__city[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(1), .user__created-at[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(1) {\n  font-weight: 600;\n  margin-right: 4px;\n}\n.user__more-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.user__more-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 130px;\n  font-size: 16px;\n}\n.user__close-post[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  left: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3N0eWxlcy9mb3ItaW1wb3J0L19wYWxldHRlLnNjc3MiLCJzcmMvYXNzZXRzL3N0eWxlcy9mb3ItaW1wb3J0L19nZW5lcmFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkNGVztFREdYLFVFT1c7RUZOWCxpQkFBQTtFQUNBLGFFUVk7RUZQWixrQkVHbUI7QUZKckI7QUFHRTtFQUNFLGVBQUE7QUFESjtBQUlFO0VBQ0UsWUVDVTtFRkFWLFVFRmE7RUZHYixhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRko7QUFJSTtFQUNFLGFFSVc7RUZIWCxZRUdXO0VGRlgsa0JBQUE7RUFDQSxpREFBQTtBQUZOO0FBTUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUpKO0FBT0U7RUFDRSxnQkFBQTtBQUxKO0FBUUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBTko7QUFTRTtFQUtFLGFBQUE7QUFYSjtBQWFJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQVhOO0FBZUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQWJKO0FBZUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQWJOO0FBaUJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFmSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL2FsbFwiO1xyXG5cclxuLnVzZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHVzZXItY29sb3I7XHJcbiAgd2lkdGg6ICR1c2VyLXdpZHRoO1xyXG4gIG1hcmdpbjogJHVzZXItbWFyZ2luIGF1dG87XHJcbiAgaGVpZ2h0OiAkdXNlci1oZWlnaHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogJHVzZXItYm9yZGVyLXJhZGl1cztcclxuXHJcbiAgJjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICBtYXJnaW4tdG9wOiAkdXNlci1tYXJnaW4gLyAyO1xyXG4gIH1cclxuXHJcbiAgJl9faW1nLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6ICRmdWxsLWhlaWdodDtcclxuICAgIHdpZHRoOiAkaW1nLXBlcmNlbnRhZ2U7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6ICRpbWctZGltZW5zaW9ucztcclxuICAgICAgd2lkdGg6ICRpbWctZGltZW5zaW9ucztcclxuICAgICAgYm9yZGVyOiAxNnB4IHNvbGlkO1xyXG4gICAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkbGluZWFyLWdyYWRpZW50LWZyb20sICRsaW5lYXItZ3JhZGllbnQtdG8pICRib3JkZXItcGF0dGVybi13aWR0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3N0YXRpc3RpY3Mge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDAuNSAqICR1c2VyLXN0YXRpc3RpY3MtcmlnaHQtbWFyZ2luO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX3N0YXRpc3RpY3MtdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB9XHJcblxyXG4gICZfX3N0YXRpc3RpY3MtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gICZfX25hbWUsXHJcbiAgJl9fYWdlLFxyXG4gICZfX3JvbGUsXHJcbiAgJl9fY2l0eSxcclxuICAmX19jcmVhdGVkLWF0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgZGl2Om50aC1vZi10eXBlKDEpIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19tb3JlLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2Nsb3NlLXBvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDIgKiAkdXNlci1tYXJnaW47XHJcbiAgfVxyXG59XHJcbiIsIlxyXG4kaGVhZGVyLWNvbG9yOiByZ2IoMTY0LCAxNjUsIDg5KTtcclxuJGJvZHktY29sb3I6IHJnYmEoMTI4LDEyOCwxMjgsIDAuNSk7XHJcbiR1c2VyLWNvbG9yOiAjZmZmY2YwO1xyXG4kYnV0dG9uLWNvbG9yOiAjY2NiNjYwO1xyXG4kZm9vdGVyLWNvbG9yOiAkaGVhZGVyLWNvbG9yO1xyXG5cclxuJGxpbmstYm9yZGVyOiAjNjY2MTYxO1xyXG4kbGluay1jb2xvcjogIzAwNjBCNjtcclxuJGxpbmstYWN0aXZlOiAjMDBBMEM2O1xyXG5cclxuJGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblxyXG4kbGluZWFyLWdyYWRpZW50LWZyb206ICNmNmI3M2M7XHJcbiRsaW5lYXItZ3JhZGllbnQtdG86ICM0ZDlmMGM7XHJcbiIsIlxyXG4vLyBoZWFkZXIgZm9udC1zaXplXHJcbiRoZWFkZXItZm9udC1zaXplOiAzNnB4O1xyXG4kaGVhZGVyLWhlaWdodDogMTAwcHg7XHJcbiRmb290ZXItaGVpZ2h0OiAkaGVhZGVyLWhlaWdodCAqIDMuNTtcclxuJGZvbnQtc2l6ZS0yMHB4OiAyMHB4O1xyXG4kZm9udC1zaXplLTI2cHg6IDI2cHg7XHJcbiRtYXJnaW4tMjA6IDIwcHg7XHJcbiRjb3B5cmlnaHQtcGFkZGluZzogNTBweDtcclxuJG1pbi13aWR0aDogMTUwMHB4O1xyXG4kYm94LXNoYWRvdy13aWR0aDogNHB4O1xyXG5cclxuJHVzZXItYm9yZGVyLXJhZGl1czogNnB4O1xyXG4kdXNlci13aWR0aDogNjUlO1xyXG4kdXNlci1zdGF0aXN0aWNzLXJpZ2h0LW1hcmdpbjogMC4xNSAqICR1c2VyLXdpZHRoO1xyXG4kaW1nLXBlcmNlbnRhZ2U6IDE1JTtcclxuJHVzZXItaGVpZ2h0OiAyNTBweDtcclxuJGZ1bGwtaGVpZ2h0OiAxMDAlO1xyXG5cclxuLy8gZnVsbCB3aWR0aFxyXG4kZnVsbC13aWR0aDogMTAwJTtcclxuJHNtYWxsLWJvcmRlci13aWR0aDogMXB4O1xyXG5cclxuJG1hcmdpbi0wOiAwO1xyXG4kdXNlci1tYXJnaW46IDE0cHg7IC8vIG1hcmdpbiBiZXR3ZWVuIGNhcmRzXHJcbiRib3JkZXItcGF0dGVybi13aWR0aDogMjtcclxuXHJcbi8vIHNldCBpbWFnZSBkaW1lbnNpb25zXHJcbiRpbWctZGltZW5zaW9uczogMTUwcHg7XHJcbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map