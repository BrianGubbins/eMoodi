webpackJsonp([1,4],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/validate.service.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherService = (function () {
    // readonly ROOT_URL = 'https://us-central1-firestarter-96e46.cloudfunctions.net/darkSkyProxy';
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.currentForecast = function (lat, lng) {
        return this.http.get('https://crossorigin.me/https://api.darksky.net/forecast/0d84709db8c9b163c1536a07b36f1f35/' + lat.toString() + "," + lng.toString() + "?exclude=hourly,currently,minutely,flags")
            .map(function (res) { return res.json(); });
    };
    WeatherService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], WeatherService);
    return WeatherService;
    var _a;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/weather.service.js.map

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 526;


/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(645);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/main.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = true; // Change to true before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.setMood = function (mood) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/mood');
        console.log("auth");
        return this.http.post(ep, mood, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/auth.service.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(870),
            styles: [__webpack_require__(861)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/app.component.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_local_forecast_local_forecast_component__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_validate_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_weather_service__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_inputs_inputs_component__ = __webpack_require__(648);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'input', component: __WEBPACK_IMPORTED_MODULE_18__components_inputs_inputs_component__["a" /* InputsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: '' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_local_forecast_local_forecast_component__["a" /* LocalForecastComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_inputs_inputs_component__["a" /* InputsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_15__services_weather_service__["a" /* WeatherService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/app.module.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.moods = [];
        this.dates = [];
    }
    // ctx: any;
    DashboardComponent.prototype.ngOnInit = function () {
        this.chart1 = true;
        this.chart2 = false;
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var mood = [
            { currentMood: 1, time: Date.now() },
            { currentMood: 3, time: Date.now() },
            { currentMood: 4, time: Date.now() },
            { currentMood: 3, time: Date.now() + (1000 * 60 * 60 * 24) },
            { currentMood: 5, time: Date.now() + (1000 * 60 * 60 * 24) },
            { currentMood: 3, time: Date.now() + (1000 * 60 * 60 * 24) },
            { currentMood: 4, time: Date.now() + ((1000 * 60 * 60 * 24) * 2) },
            { currentMood: 2, time: Date.now() + ((1000 * 60 * 60 * 24) * 2) },
            { currentMood: 3, time: Date.now() + ((1000 * 60 * 60 * 24) * 2) },
            { currentMood: 1, time: Date.now() + ((1000 * 60 * 60 * 24) * 3) },
            { currentMood: 5, time: Date.now() + ((1000 * 60 * 60 * 24) * 3) },
            { currentMood: 3, time: Date.now() + ((1000 * 60 * 60 * 24) * 3) },
            { currentMood: 2, time: Date.now() + ((1000 * 60 * 60 * 24) * 4) },
            { currentMood: 3, time: Date.now() + ((1000 * 60 * 60 * 24) * 4) },
            { currentMood: 4, time: Date.now() + ((1000 * 60 * 60 * 24) * 4) },
            { currentMood: 1, time: Date.now() + ((1000 * 60 * 60 * 24) * 5) },
            { currentMood: 2, time: Date.now() + ((1000 * 60 * 60 * 24) * 5) },
            { currentMood: 5, time: Date.now() + ((1000 * 60 * 60 * 24) * 5) },
            { currentMood: 1, time: Date.now() + ((1000 * 60 * 60 * 24) * 6) },
            { currentMood: 2, time: Date.now() + ((1000 * 60 * 60 * 24) * 6) },
            { currentMood: 4, time: Date.now() + ((1000 * 60 * 60 * 24) * 6) }
        ];
        for (var key in mood) {
            this.moods.push(mood[key].currentMood);
            var jsdate = new Date(mood[key].time);
            this.dates.push(jsdate.toLocaleTimeString('en', { month: 'long', day: 'numeric' }));
        }
        var canvas = document.getElementById('myChart');
        var ctx = canvas.getContext("2d");
        this.myChart = new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](ctx, {
            "type": "line",
            "data": {
                "labels": this.dates,
                "datasets": [{
                        "label": "Your Mood", "data": this.moods,
                        "fill": false,
                        "borderColor": "rgb(75, 192, 192)"
                    }]
            },
            options: {
                responsive: true
            }
        });
        var canvas1 = document.getElementById('myChart1');
        var ctx1 = canvas1.getContext("2d");
        var myChart1 = new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](ctx1, {
            "type": "line",
            "data": {
                "labels": this.dates,
                "datasets": [{
                        "label": "Your Mood2", "data": this.moods,
                        "fill": false,
                        "borderColor": "rgb(75, 192, 192)"
                    }]
            },
            options: {
                responsive: true
            }
        });
    };
    DashboardComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var User = JSON.parse(localStorage.getItem('user'));
        var mood = {
            userId: User.id,
            date: Date.now,
            weather: {
                cloudCover: 0.7,
                rain: 60,
                temp: 3,
                summary: "shitty enuf" },
            sleep: 8,
            diet: "fair",
            exercise: "fair",
            moodData: [{ currentMood: 1, time: Date.now() },
                { currMood: 1, date: Date.now() + (1000 * 60 * 60 * 24) },
                { currMood: 4, date: Date.now() + ((1000 * 60 * 60 * 24) * 2) },
                { currMood: 3, date: Date.now() + ((1000 * 60 * 60 * 24) * 3) },
                { currMood: 2, date: Date.now() + ((1000 * 60 * 60 * 24) * 4) }]
        };
        // // Register user
        this.authService.setMood(mood).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    DashboardComponent.prototype.chart = function (number) {
        if (number == 1) {
            this.moods.push(5);
            this.dates.push(Date.now() + ((1000 * 60 * 60 * 24) * 4));
            this.myChart.update();
            this.chart1 = true;
            this.chart2 = false;
        }
        if (number == 2) {
            this.chart1 = false;
            this.chart2 = true;
            this.router.navigate(['/input']);
        }
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(871),
            styles: [__webpack_require__(862)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(872),
            styles: [__webpack_require__(863)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/home.component.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputsComponent = (function () {
    // private LOGO = require("src/app/assets/emojis/5.png");
    function InputsComponent() {
        this.UserID = (JSON.parse(localStorage.getItem('user'))).id;
        this.date = Date.now;
        this.weather = {
            cloudCover: 0.7,
            rain: 60,
            temp: 3,
            summary: "shitty enuf" };
    }
    InputsComponent.prototype.ngOnInit = function () {
        console.log(this.UserID);
        $('img').click(function () {
            $('.selected').removeClass('selected');
            $(this).addClass('selected');
        });
    };
    InputsComponent.prototype.reset = function () {
        this.mood = null;
        this.sleep = null;
        this.diet = null;
        this.exercise = null;
        $('.btn-group :radio').prop('checked', false);
        $('.btn-group .active').removeClass('active');
        $('.selected').removeClass('selected');
    };
    InputsComponent.prototype.setMood = function (mood) {
        this.mood = mood;
    };
    InputsComponent.prototype.setDiet = function (diet) {
        this.diet = diet;
        // console.log(num);
    };
    InputsComponent.prototype.setExercise = function (exercise) {
        this.exercise = exercise;
        // console.log(num);
    };
    InputsComponent.prototype.onInfoSubmit = function () {
        var mood = {
            userId: this.UserID,
            date: Date.now,
            weather: this.weather,
            sleep: this.sleep,
            diet: this.diet,
            exercise: this.exercise,
            moodData: { currentMood: this.mood, time: Date.now() },
        };
        console.log(mood);
    };
    InputsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inputs',
            template: __webpack_require__(873),
            styles: [__webpack_require__(864)]
        }), 
        __metadata('design:paramtypes', [])
    ], InputsComponent);
    return InputsComponent;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/inputs.component.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weather_service__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalForecastComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalForecastComponent = (function () {
    function LocalForecastComponent(weather) {
        this.weather = weather;
    }
    LocalForecastComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        }
        else {
            /// default coords
            this.lat = 40.73;
            this.lng = -73.93;
        }
    };
    LocalForecastComponent.prototype.getForecast = function () {
        var _this = this;
        this.weather.currentForecast(this.lat, this.lng).subscribe(function (weather) {
            _this.forecast = weather;
            console.log(_this.forecast);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    /// Helper to make weather icons work
    /// better solution is to map icons to an object 
    LocalForecastComponent.prototype.weatherIcon = function (icon) {
        switch (icon) {
            case 'partly-cloudy-day':
                return 'wi wi-day-cloudy';
            case 'clear-day':
                return 'wi wi-day-sunny';
            case 'partly-cloudy-night':
                return 'wi wi-night-partly-cloudy';
            default:
                return "wi wi-day-sunny";
        }
    };
    LocalForecastComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'local-forecast',
            template: __webpack_require__(874),
            styles: [__webpack_require__(865)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_weather_service__["a" /* WeatherService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_weather_service__["a" /* WeatherService */]) === 'function' && _a) || Object])
    ], LocalForecastComponent);
    return LocalForecastComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/local-forecast.component.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(875),
            styles: [__webpack_require__(866)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/login.component.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(876),
            styles: [__webpack_require__(867)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            console.log(_this.user);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    //var x = document.getElementById("demo");
    ProfileComponent.prototype.getLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
        }
        else {
            this.location = "Geolocation is not supported by this browser.";
        }
    };
    ProfileComponent.prototype.showPosition = function (position) {
        this.location = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
        console.log(this.location);
        console.log("sfsdf");
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(877),
            styles: [__webpack_require__(868)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/profile.component.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, flashMessage, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(878),
            styles: [__webpack_require__(869)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/register.component.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/environment.js.map

/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 388,
	"./af.js": 388,
	"./ar": 395,
	"./ar-dz": 389,
	"./ar-dz.js": 389,
	"./ar-kw": 390,
	"./ar-kw.js": 390,
	"./ar-ly": 391,
	"./ar-ly.js": 391,
	"./ar-ma": 392,
	"./ar-ma.js": 392,
	"./ar-sa": 393,
	"./ar-sa.js": 393,
	"./ar-tn": 394,
	"./ar-tn.js": 394,
	"./ar.js": 395,
	"./az": 396,
	"./az.js": 396,
	"./be": 397,
	"./be.js": 397,
	"./bg": 398,
	"./bg.js": 398,
	"./bm": 399,
	"./bm.js": 399,
	"./bn": 400,
	"./bn.js": 400,
	"./bo": 401,
	"./bo.js": 401,
	"./br": 402,
	"./br.js": 402,
	"./bs": 403,
	"./bs.js": 403,
	"./ca": 404,
	"./ca.js": 404,
	"./cs": 405,
	"./cs.js": 405,
	"./cv": 406,
	"./cv.js": 406,
	"./cy": 407,
	"./cy.js": 407,
	"./da": 408,
	"./da.js": 408,
	"./de": 411,
	"./de-at": 409,
	"./de-at.js": 409,
	"./de-ch": 410,
	"./de-ch.js": 410,
	"./de.js": 411,
	"./dv": 412,
	"./dv.js": 412,
	"./el": 413,
	"./el.js": 413,
	"./en-au": 414,
	"./en-au.js": 414,
	"./en-ca": 415,
	"./en-ca.js": 415,
	"./en-gb": 416,
	"./en-gb.js": 416,
	"./en-ie": 417,
	"./en-ie.js": 417,
	"./en-nz": 418,
	"./en-nz.js": 418,
	"./eo": 419,
	"./eo.js": 419,
	"./es": 422,
	"./es-do": 420,
	"./es-do.js": 420,
	"./es-us": 421,
	"./es-us.js": 421,
	"./es.js": 422,
	"./et": 423,
	"./et.js": 423,
	"./eu": 424,
	"./eu.js": 424,
	"./fa": 425,
	"./fa.js": 425,
	"./fi": 426,
	"./fi.js": 426,
	"./fo": 427,
	"./fo.js": 427,
	"./fr": 430,
	"./fr-ca": 428,
	"./fr-ca.js": 428,
	"./fr-ch": 429,
	"./fr-ch.js": 429,
	"./fr.js": 430,
	"./fy": 431,
	"./fy.js": 431,
	"./gd": 432,
	"./gd.js": 432,
	"./gl": 433,
	"./gl.js": 433,
	"./gom-latn": 434,
	"./gom-latn.js": 434,
	"./gu": 435,
	"./gu.js": 435,
	"./he": 436,
	"./he.js": 436,
	"./hi": 437,
	"./hi.js": 437,
	"./hr": 438,
	"./hr.js": 438,
	"./hu": 439,
	"./hu.js": 439,
	"./hy-am": 440,
	"./hy-am.js": 440,
	"./id": 441,
	"./id.js": 441,
	"./is": 442,
	"./is.js": 442,
	"./it": 443,
	"./it.js": 443,
	"./ja": 444,
	"./ja.js": 444,
	"./jv": 445,
	"./jv.js": 445,
	"./ka": 446,
	"./ka.js": 446,
	"./kk": 447,
	"./kk.js": 447,
	"./km": 448,
	"./km.js": 448,
	"./kn": 449,
	"./kn.js": 449,
	"./ko": 450,
	"./ko.js": 450,
	"./ky": 451,
	"./ky.js": 451,
	"./lb": 452,
	"./lb.js": 452,
	"./lo": 453,
	"./lo.js": 453,
	"./lt": 454,
	"./lt.js": 454,
	"./lv": 455,
	"./lv.js": 455,
	"./me": 456,
	"./me.js": 456,
	"./mi": 457,
	"./mi.js": 457,
	"./mk": 458,
	"./mk.js": 458,
	"./ml": 459,
	"./ml.js": 459,
	"./mr": 460,
	"./mr.js": 460,
	"./ms": 462,
	"./ms-my": 461,
	"./ms-my.js": 461,
	"./ms.js": 462,
	"./mt": 463,
	"./mt.js": 463,
	"./my": 464,
	"./my.js": 464,
	"./nb": 465,
	"./nb.js": 465,
	"./ne": 466,
	"./ne.js": 466,
	"./nl": 468,
	"./nl-be": 467,
	"./nl-be.js": 467,
	"./nl.js": 468,
	"./nn": 469,
	"./nn.js": 469,
	"./pa-in": 470,
	"./pa-in.js": 470,
	"./pl": 471,
	"./pl.js": 471,
	"./pt": 473,
	"./pt-br": 472,
	"./pt-br.js": 472,
	"./pt.js": 473,
	"./ro": 474,
	"./ro.js": 474,
	"./ru": 475,
	"./ru.js": 475,
	"./sd": 476,
	"./sd.js": 476,
	"./se": 477,
	"./se.js": 477,
	"./si": 478,
	"./si.js": 478,
	"./sk": 479,
	"./sk.js": 479,
	"./sl": 480,
	"./sl.js": 480,
	"./sq": 481,
	"./sq.js": 481,
	"./sr": 483,
	"./sr-cyrl": 482,
	"./sr-cyrl.js": 482,
	"./sr.js": 483,
	"./ss": 484,
	"./ss.js": 484,
	"./sv": 485,
	"./sv.js": 485,
	"./sw": 486,
	"./sw.js": 486,
	"./ta": 487,
	"./ta.js": 487,
	"./te": 488,
	"./te.js": 488,
	"./tet": 489,
	"./tet.js": 489,
	"./th": 490,
	"./th.js": 490,
	"./tl-ph": 491,
	"./tl-ph.js": 491,
	"./tlh": 492,
	"./tlh.js": 492,
	"./tr": 493,
	"./tr.js": 493,
	"./tzl": 494,
	"./tzl.js": 494,
	"./tzm": 496,
	"./tzm-latn": 495,
	"./tzm-latn.js": 495,
	"./tzm.js": 496,
	"./uk": 497,
	"./uk.js": 497,
	"./ur": 498,
	"./ur.js": 498,
	"./uz": 500,
	"./uz-latn": 499,
	"./uz-latn.js": 499,
	"./uz.js": 500,
	"./vi": 501,
	"./vi.js": 501,
	"./x-pseudo": 502,
	"./x-pseudo.js": 502,
	"./yo": 503,
	"./yo.js": 503,
	"./zh-cn": 504,
	"./zh-cn.js": 504,
	"./zh-hk": 505,
	"./zh-hk.js": 505,
	"./zh-tw": 506,
	"./zh-tw.js": 506
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 859;


/***/ }),

/***/ 861:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

module.exports = "input.hideRadio {\r\n    visibility:hidden;\r\n}\r\nbody {\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: #eee;\r\n  }\r\n  \r\n  img.selected{\r\n    border-radius: 50%;\r\n    background-color: #007bff;\r\n    box-shadow: 0 0 22px 6px #007bff;\r\n}\r\n\r\n  ul.moods li {\r\n    width: 212px;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    display: inline-block;   \r\n}\r\n\r\n  .form-signin {\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n  .form-signin .form-signin-heading,\r\n  .form-signin .checkbox {\r\n    margin-bottom: 10px;\r\n  }\r\n  .form-signin .checkbox {\r\n    font-weight: 400;\r\n  }\r\n  .form-signin .form-control {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: auto;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n  }\r\n  .form-signin .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n  .form-signin input[type=\"username\"] ,input[type=\"password\"]  {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  btn.btn-lg{\r\nborder: 2px;\r\n  }"

/***/ }),

/***/ 865:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

module.exports = "body {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #eee;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n  margin-bottom: 10px;\r\n}\r\n.form-signin .checkbox {\r\n  font-weight: 400;\r\n}\r\n.form-signin .form-control {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n.form-signin input[type=\"username\"] ,input[type=\"password\"]  {\r\n  margin-bottom: 10px;\r\n}"

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

module.exports = "\r\n.navbar {\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    padding: 0.5rem 1rem;\r\n    margin-bottom: 20px;\r\n  }"

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: #eee;\r\n  }\r\n  \r\n  .form-signin {\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n  .form-signin .form-signin-heading,\r\n  .form-signin .checkbox {\r\n    margin-bottom: 10px;\r\n  }\r\n  .form-signin .checkbox {\r\n    font-weight: 400;\r\n  }\r\n  .form-signin .form-control {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: auto;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n  }\r\n  .form-signin .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n  .form-signin input[type=\"name\"],input[type=\"username\"] ,input[type=\"email\"],input[type=\"password\"]  {\r\n    margin-bottom: 10px;\r\n  }"

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 871:
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-container\" style=\"position: relative;\" [hidden]=\"!chart1\">\n  <canvas id=\"myChart\" width=\"1000\" height=\"500\"></canvas>\n  <button (click)=\"onRegisterSubmit()\">Try It</button>\n</div>\n\n<div>\n  <canvas [hidden]=\"!chart2\" id=\"myChart1\" width=\"600\" height=\"300\"></canvas>\n</div>\n\n\n<button (click)=\"chart(1)\">chart 1</button>\n<button (click)=\"chart(2)\">chart 2</button>\n\n"

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron text-center\" >\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading\">eMoodi</h1>\n    <p class=\"lead text-muted\">Welcome to eMoodi MEAN application used to track and improve your mood.</p>\n    <p>\n      <a class=\"btn btn-primary\"  *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/register']\">Register</a> \n      <a class=\"btn btn-secondary\"  *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/login']\">Login</a>\n\n    </p>\n  </div>\n</section>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data</p>\n  </div>\n</div>"

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = "\n    <script type=\"text/javascript\" src=\"assets/js/jquery-2.1.1.min.js\"></script>\n<div>\n\n    <ul class=\"moods\">\n  <h2 align= \"center\">How are you feeling</h2>\n  <br>\n      \n        <li>\n            <a (click)=\"setMood(1)\"><img class=\"logo\" src=\"assets/emojis/1.png\" /></a>\n        </li><li>\n            <a (click)=\"setMood(2)\"><img class=\"logo\" src=\"assets/emojis/2.png\" /></a>\n        </li>\n        <li>\n            <a (click)=\"setMood(3)\"><img class=\"logo\" src=\"assets/emojis/3.png\" /></a>\n        </li><li>\n            <a (click)=\"setMood(4)\"><img class=\"logo\" src=\"assets/emojis/4.png\" /></a>\n        </li>\n        <li>\n            <a (click)=\"setMood(5)\"><img class=\"logo\" src=\"assets/emojis/5.png\" /></a>\n        </li>\n    </ul>\n\n    <form class=\"form-signin\" (submit)=\"onInfoSubmit()\">\n\n            <h3 align= \"center\">How much sleep did you get last night ?</h3>\n            <input type=\"number\" min=\"0\" required class=\"form-control\" name=\"sleep\" [(ngModel)]=\"sleep\">\n         \n          <br>\n\n          <h3 align= \"center\">What was your diet like today ?</h3>\n        <br>          \n        <div class=\"btn-group\" data-toggle=\"buttons\">\n          <label (click)= \"setDiet('poor')\" class=\"btn btn-lg btn-primary\">\n            <input type=\"radio\" (change)=\"test(1)\" class=\"hideRadio\"  > Poor\n          </label>\n          <label (click)= \"setDiet('fair')\" class=\"btn btn-lg btn-primary\">\n            <input type=\"radio\" class=\"hideRadio\"> Fair\n          </label>\n          <label (click)= \"setDiet('good')\" class=\"btn btn-lg btn-primary\">\n            <input type=\"radio\" class=\"hideRadio\"  > Good\n          </label>\n        </div>\n\n        <br>\n        <br>\n\n          <h3 align= \"center\">How was your level of exercise today ?</h3>\n        <br>          \n        <div class=\"btn-group\" data-toggle=\"buttons\">\n          <label (click)= \"setExercise('poor')\" class=\"btn btn-lg btn-primary\">\n            <input class=\"hideRadio\" type=\"radio\" autocomplete=\"off\" > Poor\n          </label>\n          <label (click)= \"setExercise('fair')\" class=\"btn btn-lg btn-primary\">\n            <input class=\"hideRadio\" type=\"radio\" autocomplete=\"off\"> Fair\n          </label>\n          <label (click)= \"setExercise('good')\" class=\"btn btn-lg btn-primary\">\n            <input class=\"hideRadio\" type=\"radio\" autocomplete=\"off\"> Good\n          </label> \n         </div>\n\n        <br>\n        <br>\n        <br>        \n    <div style= \"float:right\">\n         <button (click)=\"reset()\" type=\"reset\" class=\"btn btn-lg btn-primary\">Reset</button>\n         <button class=\"btn btn-lg btn-primary\" type=\"submit\">Submit</button>\n    </div>\n    </form>\n</div>\n"

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = "<h1>\n  <i class=\"wi wi-barometer\"></i> Your Local Weather Forecast\n</h1>\n\n<p>Current Position: {{ lat }} / {{ lng }} </p>\n\n<button (click)=\"getForecast()\">Get Forecast</button>\n\n<h1>Seven Day Forecast</h1>\n\n<div *ngIf=\"forecast\" class=\"columns\"> \n    <div *ngFor=\"let day of forecast.daily.data\" class=\"column\">\n\n        <i [class]=\"weatherIcon(day.icon)\"></i>\n        <h3>{{ day.time * 1000 | date: 'MMM d'  }}</h3>\n        <p>{{ day.summary }}</p>\n\n    </div>\n </div>\n\n <div *ngIf=\"forecast\">\n   {{ forecast.daily.data[0].time}}\n </div>"

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

module.exports = "<!-- <h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form> -->\n\n\n<div class=\"container\" (submit)=\"onLoginSubmit()\">\n    <form class=\"form-signin\">\n      <h2 class=\"form-signin-heading\">Please Login</h2>\n      <input type=\"username\"  class=\"form-control\" placeholder=\"Username\" required autofocus [(ngModel)]=\"username\" name=\"username\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"password\" name=\"password\">\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button>\n    </form>\n</div>\n"

/***/ }),

/***/ 876:
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">eMoodi</a>\n      </div>\n      <div id=\"navbar\" class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav navbar-left\">\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n        </ul>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n          <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n          <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n-->\n\n\n\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">eMoodi</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#emoodiNavbar\" aria-controls=\"emoodiNavbar\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"emoodiNavbar\">\n    <div class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n      </li>\n    </div>\n      <div class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\">\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n      </li>\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ 877:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n    <h2 class=\"page-header\">{{user.name}}</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Username: {{user.username}}</li>\n      <li class=\"list-group-item\">Email: {{user.email}}</li>\n    </ul>\n\n    <p>Click the button to get your coordinates.</p>\n\n<button (click)=\"getLocation()\">Try It</button>\n{{location}}\n<local-forecast></local-forecast>\n  </div>"

/***/ }),

/***/ 878:
/***/ (function(module, exports) {

module.exports = "<div>\n    <form class=\"form-signin\" (submit)=\"onRegisterSubmit()\">\n      <h2 class=\"form-signin-heading\">Please Register</h2>\n      \n      <input type=\"name\" class=\"form-control\" placeholder=\"Name\" required autofocus [(ngModel)]=\"name\" name=\"name\">\n      <input type=\"username\" class=\"form-control\" placeholder=\"Username\" required [(ngModel)]=\"username\" name=\"username\">\n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"password\" name=\"password\">\n     \n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Register</button>\n    </form>\n</div>\n"

/***/ }),

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(527);


/***/ })

},[921]);
//# sourceMappingURL=main.bundle.map