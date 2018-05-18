(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-new/add-new.component.css":
/*!***********************************************!*\
  !*** ./src/app/add-new/add-new.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n.nav{\r\n    margin-left:20px;\r\n    background-color: #e9ebee;\r\n    border: 3px #3b5998 solid;\r\n    color:#3b5998;\r\n    border-radius:10px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight:700;\r\n    font-size:15px;\r\n    height:50px;\r\n    width:150px;\r\n}\r\nh1{\r\n    color:#3b5998;\r\n    \r\n}\r\np{\r\n    color:red;\r\n    font-size:12px;\r\n}\r\n.formIn{\r\n    padding-left:15px;\r\n    text-align: left;\r\n}\r\n.wrapper{\r\n    text-align:center;\r\n    border:5px solid #3b5998;\r\n    background-color: #e6f2ff;\r\n    width:700px;\r\n    height:100%;\r\n    margin:0 auto;\r\n    border-radius: 20px;\r\n}\r\na:link{\r\n    color: #3b5998;\r\n    text-decoration:none;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size:20px;\r\n}\r\na:hover , a:active{\r\nbackground-color: hotpink;\r\n}\r\ntable{\r\n    border: 2px solid #3b5998;\r\n}\r\nth{\r\n    /* color:#3b5998; */\r\n    font-weight:600;\r\n    font-size:22px;\r\n    color:white;\r\n}\r\ntr:nth-child(even) {background: #e6f2ff}\r\ntr:nth-child(odd) {background: #3b5998}"

/***/ }),

/***/ "./src/app/add-new/add-new.component.html":
/*!************************************************!*\
  !*** ./src/app/add-new/add-new.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Know of a pet needing a home??</h2>\n\n\n<div class=\"formIn\">\n  <form #loginForm=\"ngForm\" (submit)='onSubmit($event)'>\n      Name :<br/> <input type=\"text\" name=\"petDetails.name\"[(ngModel)]=\"petDetails.name\" required/>* <br/>\n      Type : <br/><input type=\"text\" name=\"petDetails.type\"[(ngModel)]=\"petDetails.type\" required/>* <br/>\n      Description : <br/><input type=\"text\" name=\"petDetails.description\"[(ngModel)]=\"petDetails.description\" required/>* <br/>\n      Skills:\n      <ul>\n        <li>Skill One : <input type=\"text\" name=\"petDetails.skillone\"[(ngModel)]=\"petDetails.skillone\" required/>* <br/><br/></li>\n        <li>Skill Two : <input type=\"text\" name=\"petDetails.skilltwo\"[(ngModel)]=\"petDetails.skilltwo\" required/>* <br/><br/></li>\n        <li>skill Three : <input type=\"text\" name=\"petDetails.skillthree\"[(ngModel)]=\"petDetails.skillthree\" required/>* <br/><br/></li>\n      </ul>\n\n      <div *ngIf='errorsVal'>\n        <p *ngFor='let err of errors'> {{err.message}}</p>\n               \n        </div>\n  \n      <button class=\"nav\" type=\"submit\">Add Pet</button>\n      <button class=\"nav\" (click)='cancelAdd()'>Cancel</button>\n  </form>\n  <br/><br/>\n</div>"

/***/ }),

/***/ "./src/app/add-new/add-new.component.ts":
/*!**********************************************!*\
  !*** ./src/app/add-new/add-new.component.ts ***!
  \**********************************************/
/*! exports provided: AddNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewComponent", function() { return AddNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddNewComponent = /** @class */ (function () {
    function AddNewComponent(_httpservice, route, router) {
        this._httpservice = _httpservice;
        this.route = route;
        this.router = router;
        this.errors = [];
    }
    AddNewComponent.prototype.ngOnInit = function () {
        this.petDetails = { name: '', type: '', description: '', skillone: '', skilltwo: '', skillthree: '' };
    };
    AddNewComponent.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        this.errors = [];
        if (this.petDetails.name == '') {
            this.errorsVal = true;
            this.errors.push({ 'message': 'Give your pet a name Yo!' });
        }
        else if (this.petDetails.name.length < 3) {
            this.errorsVal = true;
            this.errors.push({ 'message': 'What kind of name is that..Try a longer name !' });
        }
        else if (this.petDetails.type == '') {
            this.errorsVal = true;
            this.errors.push({ 'message': "We need to know what kind of pet it is" });
        }
        if (this.petDetails.description == '') {
            this.errorsVal = true;
            this.errors.push({ 'message': 'Tell us something about your pet' });
        }
        else if (this.petDetails.type.length < 3) {
            this.errorsVal = true;
            this.errors.push({ 'message': "That type doesn't look right, Try something longer!" });
        }
        else if (this.petDetails.description.length < 3) {
            this.errorsVal = true;
            this.errors.push({ 'message': "Describe your pet in more than three characters" });
        }
        else {
            this.errorsVal = false;
            this.errors = [];
            console.log("I was here", this.petDetails);
            var temp = this._httpservice.createAPet(this.petDetails);
            temp.subscribe(function (data) {
                if (data['message'] == 'unique error') {
                    _this.errorsVal = true;
                    _this.errors.push(data['data']);
                }
                else if (data['message'] == 'error') {
                    _this.errorsVal = true;
                    for (var key in data['data'].errors) {
                        _this.errors.push(data['data'].errors[key]);
                        console.log("console errors", data['data'].errors[key]);
                    }
                }
                else {
                    _this.errorsVal = false;
                    _this.router.navigate(['/pets']);
                }
            });
        }
    };
    AddNewComponent.prototype.cancelAdd = function () {
        this.petDetails = { name: '', type: '', description: '', skillone: '', skilltwo: '', skillthree: '' };
        this.router.navigate(['/pets']);
    };
    AddNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new',
            template: __webpack_require__(/*! ./add-new.component.html */ "./src/app/add-new/add-new.component.html"),
            styles: [__webpack_require__(/*! ./add-new.component.css */ "./src/app/add-new/add-new.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddNewComponent);
    return AddNewComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingcomponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingcomponent", function() { return routingcomponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-new/add-new.component */ "./src/app/add-new/add-new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: 'pets', pathMatch: 'full' },
    { path: 'pets', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'pets/new', component: _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_4__["AddNewComponent"] },
    { path: 'pets/:id', component: _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"] },
    { path: 'pets/edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingcomponent = [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"], _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_4__["AddNewComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav{\r\n    margin-left:20px;\r\n    background-color: #e9ebee;\r\n    border: 3px #3b5998 solid;\r\n    color:#3b5998;\r\n    border-radius:10px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight:700;\r\n    font-size:15px;\r\n    height:50px;\r\n    width:150px;\r\n}\r\nh1{\r\n    color:#3b5998;\r\n    \r\n}\r\n.wrapper{\r\n    text-align:center;\r\n    border:5px solid #3b5998;\r\n    background-color: #e6f2ff;\r\n    width:700px;\r\n    height:100%;\r\n    margin:0 auto;\r\n    border-radius: 20px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"wrapper\" style=\"text-align:center\">\n  <h1>\n   {{ title }}\n  </h1>\n  <button class=\"nav\" [routerLink]=\"['pets']\">Home</button>\n  <!-- <button [routerLink]=\"['edit']\">Edit</button>\n  <button [routerLink]=\"['new']\">Create</button> -->\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
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
    function AppComponent(_httpservice) {
        this._httpservice = _httpservice;
        this.title = "Nishi's Pet Shelter";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routingcomponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n.nav{\r\n    margin-left:20px;\r\n    background-color: #e9ebee;\r\n    border: 3px #3b5998 solid;\r\n    color:#3b5998;\r\n    border-radius:10px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight:700;\r\n    font-size:15px;\r\n    height:50px;\r\n    width:150px;\r\n}\r\nh1{\r\n    color:#3b5998;\r\n    \r\n}\r\np{\r\n    color:red;\r\n    font-size:12px;\r\n}\r\n.formIn{\r\n    padding-left:15px;\r\n    text-align: left;\r\n}\r\n.wrapper{\r\n    text-align:center;\r\n    border:5px solid #3b5998;\r\n    background-color: #e6f2ff;\r\n    width:700px;\r\n    height:100%;\r\n    margin:0 auto;\r\n    border-radius: 20px;\r\n}\r\na:link{\r\n    color: #3b5998;\r\n    text-decoration:none;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size:20px;\r\n}\r\na:hover , a:active{\r\nbackground-color: hotpink;\r\n}\r\ntable{\r\n    padding:7px;\r\n    margin:0 auto;\r\n    border: 2px solid #3b5998;\r\n    font-size:15px;\r\n    font-weight:300;\r\n}\r\ntd{\r\n    padding:5px;\r\n}\r\nth{\r\n    /* color:#3b5998; */\r\n    font-weight:600;\r\n    font-size:22px;\r\n    color:white;\r\n}\r\ntr:nth-child(even) {background: #e6f2ff}\r\ntr:nth-child(odd) {background: #3b5998;color:white;}"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Details about {{petDeets[0].name}}</h2>\n\n\n<table>\n  <tr>\n      <td> Type: </td>\n      <td> {{petDeets[0].type}}</td>\n  </tr>\n  <tr>\n      <td> Description: </td>\n      <td> {{petDeets[0].description}}</td>\n  </tr>\n  <tr>\n      <td> Skills: </td>\n      <td> {{petDeets[0].skillone}}<br/>\n         {{petDeets[0].skilltwo}}<br/>{{petDeets[0].skillthree}}</td>\n  </tr>\n  <tr>\n      <td> Likes: </td>\n      <td> {{petDeets[0].likes}}</td>\n  </tr>\n</table>\n<br/><br/>\n\n<button class=\"nav\" (click)='like($event,petDeets[0]._id)'>Like</button>\n<button class=\"nav\" (click)='adopt(petDeets[0]._id)'>Adopt</button>\n\n<br/><br/>"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_httpservice, route, router) {
        this._httpservice = _httpservice;
        this.route = route;
        this.router = router;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.petDeets = { name: '', type: '', description: '', skillone: '', skilltwo: '', skillthree: '' };
        this.petId = this.route.snapshot.paramMap.get('id');
        this.onload();
    };
    DetailsComponent.prototype.onload = function () {
        var _this = this;
        var petDetails = this._httpservice.getAPet(this.petId);
        petDetails.subscribe(function (data) {
            console.log(data);
            _this.petDeets = data['data'];
        });
    };
    DetailsComponent.prototype.like = function (event, id) {
        var _this = this;
        event.currentTarget.disabled = true;
        var temp = Number(this.petDeets[0].likes) + 1;
        var likinPet = this._httpservice.createALike(id, temp);
        likinPet.subscribe(function (data) {
            console.log(data);
            _this.onload();
        });
    };
    DetailsComponent.prototype.adopt = function (id) {
        var _this = this;
        var delPet = this._httpservice.adoptAPet(id);
        delPet.subscribe(function (data) {
            console.log(data);
            var val = data['data'].name;
            alert(val + " Thanks you for giving him a home");
            _this.router.navigate(['pets']);
        });
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n.nav{\r\n    margin-left:20px;\r\n    background-color: #e9ebee;\r\n    border: 3px #3b5998 solid;\r\n    color:#3b5998;\r\n    border-radius:10px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight:700;\r\n    font-size:15px;\r\n    height:50px;\r\n    width:150px;\r\n}\r\nh1{\r\n    color:#3b5998;\r\n    \r\n}\r\np{\r\n    color:red;\r\n    font-size:12px;\r\n}\r\n.formIn{\r\n    padding-left:15px;\r\n    text-align: left;\r\n}\r\n.wrapper{\r\n    text-align:center;\r\n    border:5px solid #3b5998;\r\n    background-color: #e6f2ff;\r\n    width:700px;\r\n    height:100%;\r\n    margin:0 auto;\r\n    border-radius: 20px;\r\n}\r\na:link{\r\n    color: #3b5998;\r\n    text-decoration:none;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size:20px;\r\n}\r\na:hover , a:active{\r\nbackground-color: hotpink;\r\n}\r\ntable{\r\n    border: 2px solid #3b5998;\r\n}\r\nth{\r\n    /* color:#3b5998; */\r\n    font-weight:600;\r\n    font-size:22px;\r\n    color:white;\r\n}\r\ntr:nth-child(even) {background: #e6f2ff}\r\ntr:nth-child(odd) {background: #3b5998}"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Know of a pet needing a home??</h2>\n\n\n<div class=\"formIn\">\n  <form #loginForm=\"ngForm\" (submit)='onSubmit($event)'>\n      Name :<br/> <input type=\"text\" name=\"petDetails.name\"[(ngModel)]=\"petDetails.name\" required/>* <br/>\n      Type : <br/><input type=\"text\" name=\"petDetails.type\"[(ngModel)]=\"petDetails.type\" required/>* <br/>\n      Description : <br/><input type=\"text\" name=\"petDetails.description\"[(ngModel)]=\"petDetails.description\" required/>* <br/>\n      Skills:\n      <ul>\n        <li>Skill One : <input type=\"text\" name=\"petDetails.skillone\"[(ngModel)]=\"petDetails.skillone\" required/>* <br/><br/></li>\n        <li>Skill Two : <input type=\"text\" name=\"petDetails.skilltwo\"[(ngModel)]=\"petDetails.skilltwo\" required/>* <br/><br/></li>\n        <li>skill Three : <input type=\"text\" name=\"petDetails.skillthree\"[(ngModel)]=\"petDetails.skillthree\" required/>* <br/><br/></li>\n      </ul>\n\n      <div *ngIf='errorsVal'>\n        <p *ngFor='let err of errors'> {{err.message}}</p>\n               \n        </div>\n  \n      <button class=\"nav\" type=\"submit\">Edit Pet</button>\n      <button class=\"nav\" (click)='cancelAdd()'>Cancel</button>\n  </form>\n  <br/><br/>\n</div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(_httpservice, route, router) {
        this._httpservice = _httpservice;
        this.route = route;
        this.router = router;
        this.errors = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        this.petDetails = { name: '', type: '', description: '', skillone: '', skilltwo: '', skillthree: '' };
        this.id = this.route.snapshot.paramMap.get('id');
        this.onload();
    };
    EditComponent.prototype.onload = function () {
        var _this = this;
        var temp = this._httpservice.getAPet(this.id);
        temp.subscribe(function (data) {
            _this.petDetails = { name: data['data'][0].name, type: data['data'][0].type, description: data['data'][0].description, skillone: data['data'][0].skillone, skilltwo: data['data'][0].skilltwo, skillthree: data['data'][0].skillthree };
            console.log(_this.petDetails);
        });
    };
    EditComponent.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        this.errors = [];
        if (this.petDetails.name == '') {
            this.errorsVal = true;
            this.errors.push({ 'message': 'Give your pet a name Yo!' });
        }
        else if (this.petDetails.name.length < 3) {
            this.errorsVal = true;
            this.errors.push({ 'message': 'What kind of name is that..Try a longer name !' });
        }
        else if (this.petDetails.type == '') {
            this.errorsVal = true;
            this.errors.push({ 'message': "We need to know what kind of pet it is" });
        }
        if (this.petDetails.description == '') {
            this.errorsVal = true;
            this.errors.push({ 'message': 'Tell us something about your pet' });
        }
        else if (this.petDetails.type.length < 3) {
            this.errorsVal = true;
            this.errors.push({ 'message': "That type doesn't look right, Try something longer!" });
        }
        else if (this.petDetails.description.length < 3) {
            this.errorsVal = true;
            this.errors.push({ 'message': "Describe your pet in more than three characters" });
        }
        else {
            this.errorsVal = false;
            this.errors = [];
            console.log("I was here", this.petDetails);
            var temp = this._httpservice.editAPet(this.id, this.petDetails);
            temp.subscribe(function (data) {
                if (data['message'] == 'error') {
                    _this.errorsVal = true;
                    for (var key in data['data'].errors) {
                        _this.errors.push(data['data'].errors[key]);
                        console.log("console errors", data['data'].errors[key]);
                    }
                }
                else {
                    _this.errorsVal = false;
                    _this.router.navigate(['/pets']);
                }
            });
        }
    };
    EditComponent.prototype.cancelAdd = function () {
        this.petDetails = { name: '', type: '', description: '', skillone: '', skilltwo: '', skillthree: '' };
        this.router.navigate(['/pets']);
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n.nav{\r\n    margin-left:20px;\r\n    background-color: #e9ebee;\r\n    border: 3px #3b5998 solid;\r\n    color:#3b5998;\r\n    border-radius:10px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight:700;\r\n    font-size:15px;\r\n    height:50px;\r\n    width:150px;\r\n}\r\n.navS{\r\n    margin-left:20px;\r\n    background-color: #e9ebee;\r\n    border: 3px #3b5998 solid;\r\n    color:#3b5998;\r\n    border-radius:10px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight:700;\r\n    font-size:15px;\r\n    height:30px;\r\n    width:70px;\r\n}\r\nh1{\r\n    color:#3b5998;\r\n    \r\n}\r\n.wrapper{\r\n    text-align:center;\r\n    border:5px solid #3b5998;\r\n    background-color: #e6f2ff;\r\n    width:700px;\r\n    height:100%;\r\n    margin:0 auto;\r\n    border-radius: 20px;\r\n}\r\na:link{\r\n    color: #3b5998;\r\n    text-decoration:none;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size:20px;\r\n}\r\na:hover , a:active{\r\nbackground-color: hotpink;\r\n}\r\ntable{\r\n    margin:0 auto;\r\n    border: 2px solid #3b5998;\r\n}\r\nth{\r\n    color:#3b5998;\r\n    font-weight:600;\r\n    font-size:22px;\r\n    /* color:white; */\r\n    background-color:#a2a9b3;\r\n}\r\ntr:nth-child(odd) {background: #e6f2ff}\r\ntr:nth-child(even) {background: #a2a9b3}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  These pets are looking for a home!\n</h2>\n<a [routerLink]=\"['new']\">Add a pet to the Shelter</a>\n<br/><br/>\n \n<div *ngIf='errorsVal'>\n    <p *ngFor='let err of errors'> {{err.message}}</p>\n           \n    </div>\n\n\n  <table>\n    <tr>\n        <th>\n            Name\n        </th>\n        <th>  \n            Type\n        </th>\n        <th>\n            Actions\n        </th>\n    </tr>\n    <tbody  *ngFor=\"let pet of allPets\">\n        <tr>\n            <td>\n                {{pet.name}}\n            </td> \n            <td>\n                {{pet.type}}\n            </td>\n            <td>\n                <button class=\"navS\" (click)='details(pet._id)'>Details</button>\n                <button class=\"navS\" (click)='edit(pet._id)'>Edit</button>\n            </td>\n        </tr>\n    </tbody>\n  </table>\n  <br/><br/>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpservice, route, router) {
        this._httpservice = _httpservice;
        this.route = route;
        this.router = router;
        this.errorsVal = false;
        this.errors = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.onload();
    };
    HomeComponent.prototype.onload = function () {
        var _this = this;
        var petValues = this._httpservice.getAll();
        petValues.subscribe(function (data) {
            if (data['message'] == 'error') {
                _this.errorsVal = true;
                for (var key in data['data'].errors) {
                    _this.errors.push(data['data'].errors[key]);
                    console.log("console errors", data['data'].errors[key]);
                }
            }
            else {
                _this.allPets = data['data'];
            }
        });
    };
    HomeComponent.prototype.details = function (id) {
        this.router.navigate(['/pets', id]);
    };
    HomeComponent.prototype.edit = function (id) {
        this.router.navigate(['/pets/edit', id]);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAll = function () {
        console.log("Getting all products Service");
        return this._http.get('/pets');
    };
    HttpService.prototype.getAPet = function (id) {
        console.log("Getting a pet with the id:", id);
        return this._http.get('/pets/' + id);
    };
    HttpService.prototype.editAPet = function (id, values) {
        console.log("Editing a pet");
        return this._http.post('/edit/' + id, values);
    };
    HttpService.prototype.adoptAPet = function (id) {
        console.log('Adopting a pet');
        return this._http.get('/destroy/' + id);
    };
    HttpService.prototype.createAPet = function (values) {
        console.log("creating a new pet");
        return this._http.post('/create', values);
    };
    HttpService.prototype.createALike = function (id, value) {
        console.log('Liking', id, value);
        return this._http.post('/like/' + id, { data: value });
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1,h2{\r\n    color:gray\r\n}"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> The page you are looking for was not found..</h1>\n<h2> Please check the route and try again!!</h2>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! C:\Users\rohit\Desktop\coding_dojo_mean\MeanBelt\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map