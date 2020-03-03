(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <wm-formscontainer></wm-formscontainer>\r\n    <wm-loading></wm-loading>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/hello-world/form1/form1.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/hello-world/form1/form1.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"model\">\r\n    <wm-window [model]=\"model\" id=\"Form1\" class=\"HelloWorld_Form1\">\r\n        <ng-template let-model>\r\n            <div class=\"Form1\">\r\n                <wm-label id=\"label1\" [model]=\"model.label1\" class=\"label1\" tabindex=\"2\">My First Sample</wm-label>\r\n                <wm-button id=\"button1\" [model]=\"model.button1\" class=\"button1\" tabindex=\"1\"></wm-button>\r\n                <wm-button id=\"button2\" class=\"button2\" [model]=\"model.button2\"></wm-button>\r\n            </div>\r\n        </ng-template>\r\n    </wm-window>\r\n</div>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mybutton {\r\n    position: fixed;\r\n    bottom: 10px;\r\n    right: 10px;\r\n  }\r\n\r\n#formNavigator {\r\n    position: fixed;\r\n    bottom: 10px;\r\n    left: 10px;\r\n    background-color: lightskyblue;\r\n    width: 90%\r\n  }\r\n\r\n#mobilize-logo {\r\n  position: fixed;\r\n  top: 2px;\r\n  float: right;\r\n  right: 3px;\r\n}\r\n\r\n/deep/ .mat-toolbar.mat-primary {\r\n  background: #00adee !important;\r\n  color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7RUFDYjs7QUFFRjtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLDhCQUE4QjtJQUM5QjtFQUNGOztBQUVGO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI215YnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiNmb3JtTmF2aWdhdG9yIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XHJcbiAgICB3aWR0aDogOTAlXHJcbiAgfVxyXG5cclxuI21vYmlsaXplLWxvZ28ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDJweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcmlnaHQ6IDNweDtcclxufVxyXG5cclxuL2RlZXAvIC5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogIzAwYWRlZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mobilize_angularclient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mobilize/angularclient */ "./node_modules/@mobilize/angularclient/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(webmapService) {
        this.webmapService = webmapService;
        this.title = 'app';
        webmapService.init();
    }
    AppComponent.ctorParameters = function () { return [
        { type: _mobilize_angularclient__WEBPACK_IMPORTED_MODULE_1__["WebMapService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_mobilize_angularclient__WEBPACK_IMPORTED_MODULE_1__["WebMapService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mobilize_winforms_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mobilize/winforms-components */ "./node_modules/@mobilize/winforms-components/dist/index.js");
/* harmony import */ var _mobilize_angularclient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mobilize/angularclient */ "./node_modules/@mobilize/angularclient/dist/index.js");
/* harmony import */ var _hello_world_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hello-world.module */ "./src/app/hello-world.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _mobilize_winforms_components__WEBPACK_IMPORTED_MODULE_3__["WebMapKendoModule"],
                _mobilize_angularclient__WEBPACK_IMPORTED_MODULE_4__["WebMapModule"],
                _hello_world_module__WEBPACK_IMPORTED_MODULE_5__["HelloWorldModule"],
            ],
            providers: [_mobilize_angularclient__WEBPACK_IMPORTED_MODULE_4__["WebMapService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/hello-world/form1/form1.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/hello-world/form1/form1.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".HelloWorld_Form1 {\r\n    left: -1px;\r\n    top: -1px;\r\n}\r\n.HelloWorld_Form1 .Form1 {\r\n    width: 398px;\r\n    height: 143px;\r\n    overflow: hidden;\r\n}\r\n.HelloWorld_Form1 .label1 {\r\n    width: auto;\r\n    left: 12px;\r\n    top: 25px;\r\n    height: auto;\r\n    position: absolute;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n.HelloWorld_Form1 .button1 {\r\n    left: 12px;\r\n    top: 78px;\r\n    width: 116px;\r\n    height: 50px;\r\n    position: absolute;\r\n    padding: 0px 0px 0px 0px;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    display: table-cell;\r\n}\r\n.HelloWorld_Form1 .button2 {\r\n    font-family: \"Arial\";\r\n    font-size: 17.1px;\r\n    left: 134px;\r\n    top: 78px;\r\n    position: absolute;\r\n    width: 116px;\r\n    height: 50px;\r\n    padding: 0px 0px 0px 0px;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    display: table-cell;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWxsby13b3JsZC9mb3JtMS9mb3JtMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlbGxvLXdvcmxkL2Zvcm0xL2Zvcm0xLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuSGVsbG9Xb3JsZF9Gb3JtMSB7XHJcbiAgICBsZWZ0OiAtMXB4O1xyXG4gICAgdG9wOiAtMXB4O1xyXG59XHJcbi5IZWxsb1dvcmxkX0Zvcm0xIC5Gb3JtMSB7XHJcbiAgICB3aWR0aDogMzk4cHg7XHJcbiAgICBoZWlnaHQ6IDE0M3B4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uSGVsbG9Xb3JsZF9Gb3JtMSAubGFiZWwxIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbGVmdDogMTJweDtcclxuICAgIHRvcDogMjVweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5IZWxsb1dvcmxkX0Zvcm0xIC5idXR0b24xIHtcclxuICAgIGxlZnQ6IDEycHg7XHJcbiAgICB0b3A6IDc4cHg7XHJcbiAgICB3aWR0aDogMTE2cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuLkhlbGxvV29ybGRfRm9ybTEgLmJ1dHRvbjIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgIGZvbnQtc2l6ZTogMTcuMXB4O1xyXG4gICAgbGVmdDogMTM0cHg7XHJcbiAgICB0b3A6IDc4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTE2cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/hello-world/form1/form1.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/hello-world/form1/form1.component.ts ***!
  \*****************************************************************/
/*! exports provided: Form1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form1Component", function() { return Form1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mobilize_base_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mobilize/base-components */ "./node_modules/@mobilize/base-components/dist/index.js");
/* harmony import */ var _mobilize_winforms_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mobilize/winforms-components */ "./node_modules/@mobilize/winforms-components/dist/index.js");
/* harmony import */ var _mobilize_angularclient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mobilize/angularclient */ "./node_modules/@mobilize/angularclient/dist/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Form1Component = /** @class */ (function (_super) {
    __extends(Form1Component, _super);
    function Form1Component(wmservice, changeDetector, render2, elem) {
        return _super.call(this, wmservice, changeDetector, render2, elem) || this;
    }
    Form1Component.ctorParameters = function () { return [
        { type: _mobilize_angularclient__WEBPACK_IMPORTED_MODULE_3__["WebMapService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    Form1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "hello-world-form1",
            template: __webpack_require__(/*! raw-loader!./form1.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/hello-world/form1/form1.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./form1.component.css */ "./src/app/components/hello-world/form1/form1.component.css")]
        }),
        Object(_mobilize_base_components__WEBPACK_IMPORTED_MODULE_1__["dataTransfer"])(["frmHelloWorld.Form1"]),
        __metadata("design:paramtypes", [_mobilize_angularclient__WEBPACK_IMPORTED_MODULE_3__["WebMapService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], Form1Component);
    return Form1Component;
}(_mobilize_winforms_components__WEBPACK_IMPORTED_MODULE_2__["FormComponent"]));



/***/ }),

/***/ "./src/app/components/hello-world/index.ts":
/*!*************************************************!*\
  !*** ./src/app/components/hello-world/index.ts ***!
  \*************************************************/
/*! exports provided: Form1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form1_form1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form1/form1.component */ "./src/app/components/hello-world/form1/form1.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form1Component", function() { return _form1_form1_component__WEBPACK_IMPORTED_MODULE_0__["Form1Component"]; });





/***/ }),

/***/ "./src/app/hello-world.module.ts":
/*!***************************************!*\
  !*** ./src/app/hello-world.module.ts ***!
  \***************************************/
/*! exports provided: HelloWorldModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldModule", function() { return HelloWorldModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mobilize_winforms_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mobilize/winforms-components */ "./node_modules/@mobilize/winforms-components/dist/index.js");
/* harmony import */ var _mobilize_angularclient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mobilize/angularclient */ "./node_modules/@mobilize/angularclient/dist/index.js");
/* harmony import */ var _components_hello_world__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/hello-world */ "./src/app/components/hello-world/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HelloWorldModule = /** @class */ (function () {
    function HelloWorldModule() {
    }
    HelloWorldModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _mobilize_winforms_components__WEBPACK_IMPORTED_MODULE_2__["WebMapKendoModule"],
                _mobilize_angularclient__WEBPACK_IMPORTED_MODULE_3__["WebMapModule"],
            ],
            exports: [
                _components_hello_world__WEBPACK_IMPORTED_MODULE_4__["Form1Component"],
            ],
            declarations: [
                _components_hello_world__WEBPACK_IMPORTED_MODULE_4__["Form1Component"],
            ],
            entryComponents: [
                _components_hello_world__WEBPACK_IMPORTED_MODULE_4__["Form1Component"],
            ],
            providers: [_mobilize_angularclient__WEBPACK_IMPORTED_MODULE_3__["WebMapService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], HelloWorldModule);
    return HelloWorldModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\WFNetHelloWorld\MigratedCode\HelloWorld2\helloworld\helloworld-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map