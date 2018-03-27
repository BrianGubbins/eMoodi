webpackJsonp([1,4],{

/***/ 163:
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
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.currentForecast = function (lat, lng) {
        return this.http.get('https://crossorigin.me/https://api.darksky.net/forecast/0d84709db8c9b163c1536a07b36f1f35/' + lat.toString() + "," + lng.toString() + "?exclude=hourly,currently,minutely,flags,alerts&units=si")
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

/***/ 344:
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

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__weather_service__ = __webpack_require__(163);
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
    function AuthService(http, weatherServ) {
        this.http = http;
        this.weatherServ = weatherServ;
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
    AuthService.prototype.setWeather = function () {
        var _this = this;
        // var lat;
        // var lng;
        var weatherFormat;
        // if (navigator.geolocation) {
        //   console.log("hello");
        //   navigator.geolocation.getCurrentPosition(position => {
        //     lat = position.coords.latitude;
        //     lng = position.coords.longitude;
        //     console.log("hello");
        //     this.weatherServ.currentForecast(lat, lng).subscribe(weather => {
        //       console.log("hello");
        //       var forecast = weather;
        //       weatherFormat = {
        //         cloudCover: forecast.daily.data[0].cloudCover,
        //         rain: forecast.daily.data[0].precipProbability,
        //         temp: forecast.daily.data[0].temperatureMax,
        //         summary: forecast.daily.data[0].summary
        //       }
        //     },
        //       err => {
        //         console.log(err);
        //         return false;
        //       });
        //   });
        // } else {
        //   /// default coords
        //   lat = 40.73;
        //   lng = -73.93;
        // }
        this.weatherServ.currentForecast(40, -72).subscribe(function (weather) {
            console.log("hello");
            var forecast = weather;
            weatherFormat = {
                cloudCover: forecast.daily.data[0].cloudCover,
                rain: forecast.daily.data[0].precipProbability,
                temp: forecast.daily.data[0].temperatureMax,
                summary: forecast.daily.data[0].summary
            };
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/json');
            var ep = _this.prepEndpoint('users/addweather');
            return _this.http.post(ep, weatherFormat, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (data.success) {
                    console.log('weather added');
                }
                else {
                    console.log('error');
                }
            });
            // console.log(weatherFormat);
        }, function (err) {
            console.log(err);
            return false;
        });
        console.log(weatherFormat);
    };
    AuthService.prototype.setMood = function (mood) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/mood');
        return this.http.post(ep, mood, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getMood = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/moodGET');
        return this.http.get(ep, { headers: headers })
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__weather_service__["a" /* WeatherService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__weather_service__["a" /* WeatherService */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/auth.service.js.map

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 528;


/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(647);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/main.js.map

/***/ }),

/***/ 646:
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
            template: __webpack_require__(873),
            styles: [__webpack_require__(864)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/app.component.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_local_forecast_local_forecast_component__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_validate_service__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_weather_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_inputs_inputs_component__ = __webpack_require__(650);
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

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(59);
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
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chart1 = true;
        this.chart2 = false;
        this.authService.getMood().subscribe(function (mood) {
            _this.mood = mood.mood;
            console.log(_this.mood);
        }, function (err) {
            console.log(err);
            return false;
        });
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
                        "label": "Your Sleep", "data": [6, 7, 9, 7, 6, 8, 6, 5, 6, 8, 9, 7, 10, 7, 5, 4, 7, 8, 6, 9, 9],
                        "fill": false,
                        "borderColor": "rgb(75, 192, 192)"
                    }]
            },
            options: {
                responsive: true
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
        }
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(874),
            styles: [__webpack_require__(865)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(45);
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
    HomeComponent.prototype.getForecast = function () {
        this.authService.setWeather();
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(875),
            styles: [__webpack_require__(866)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/home.component.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_weather_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
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
    function InputsComponent(authService, flashMessage, router, weatherServ) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.weatherServ = weatherServ;
        this.UserID = (JSON.parse(localStorage.getItem('user'))).id;
        this.date = Date.now;
    }
    InputsComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('img').click(function () {
            $('.selected').removeClass('selected');
            $(this).addClass('selected');
        });
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
    };
    InputsComponent.prototype.setExercise = function (exercise) {
        this.exercise = exercise;
    };
    InputsComponent.prototype.onInfoSubmit = function () {
        // this.weatherServ.currentForecast(this.lat, this.lng).subscribe(weather => {
        //   this.forecast = weather;
        //   var weatherFormat = {
        //     cloudCover: this.forecast.daily.data[0].cloudCover,
        //     rain: this.forecast.daily.data[0].precipProbability,
        //     temp: this.forecast.daily.data[0].temperatureMax,
        //     summary: this.forecast.daily.data[0].summary
        // }
        var _this = this;
        // console.log(this.forecast);
        // const moodInfo = {
        //   userId: this.UserID,
        //   date: Date.now,
        //   weather: weatherFormat,
        //   sleep: this.sleep,
        //   diet: this.diet,
        //   exercise: this.exercise,
        //   moodData: [{ currMood: this.mood, date: Date.now() }]
        // }
        // this.authService.setMood(moodInfo).subscribe(data => {
        //   if (data.success) {
        //     this.flashMessage.show('Info added !', { cssClass: 'alert-success', timeout: 3000 });
        //   } else {
        //     this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        //   }
        // });
        // console.log(moodInfo);
        // this.router.navigate(['dashboard']);
        // },
        // err => {
        //   console.log(err);
        //   return false;
        // });
        var weatherFormat = {
            cloudCover: 4,
            rain: 4,
            temp: 4,
            summary: "this.forecast.daily.data[0].summary"
        };
        var moodInfo = {
            userId: this.UserID,
            date: Date.now,
            weather: weatherFormat,
            sleep: this.sleep,
            diet: this.diet,
            exercise: this.exercise,
            moodData: [{ currMood: this.mood, date: Date.now() }]
        };
        this.authService.setMood(moodInfo).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Info added !', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
        console.log(moodInfo);
        this.router.navigate(['dashboard']);
    };
    InputsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inputs',
            template: __webpack_require__(876),
            styles: [__webpack_require__(867)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_weather_service__["a" /* WeatherService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_weather_service__["a" /* WeatherService */]) === 'function' && _d) || Object])
    ], InputsComponent);
    return InputsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/inputs.component.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weather_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(509);
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
            // console.log(this.forecast);
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
            template: __webpack_require__(877),
            styles: [__webpack_require__(868)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_weather_service__["a" /* WeatherService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_weather_service__["a" /* WeatherService */]) === 'function' && _a) || Object])
    ], LocalForecastComponent);
    return LocalForecastComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/local-forecast.component.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(85);
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
            template: __webpack_require__(878),
            styles: [__webpack_require__(869)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/login.component.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(85);
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
            template: __webpack_require__(879),
            styles: [__webpack_require__(870)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(59);
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
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(880),
            styles: [__webpack_require__(871)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/profile.component.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(59);
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
            template: __webpack_require__(881),
            styles: [__webpack_require__(872)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/brian/Desktop/FYP/eMoodi/angular-src/src/register.component.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(45);
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

/***/ 657:
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

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 386,
	"./af.js": 386,
	"./ar": 393,
	"./ar-dz": 387,
	"./ar-dz.js": 387,
	"./ar-kw": 388,
	"./ar-kw.js": 388,
	"./ar-ly": 389,
	"./ar-ly.js": 389,
	"./ar-ma": 390,
	"./ar-ma.js": 390,
	"./ar-sa": 391,
	"./ar-sa.js": 391,
	"./ar-tn": 392,
	"./ar-tn.js": 392,
	"./ar.js": 393,
	"./az": 394,
	"./az.js": 394,
	"./be": 395,
	"./be.js": 395,
	"./bg": 396,
	"./bg.js": 396,
	"./bm": 397,
	"./bm.js": 397,
	"./bn": 398,
	"./bn.js": 398,
	"./bo": 399,
	"./bo.js": 399,
	"./br": 400,
	"./br.js": 400,
	"./bs": 401,
	"./bs.js": 401,
	"./ca": 402,
	"./ca.js": 402,
	"./cs": 403,
	"./cs.js": 403,
	"./cv": 404,
	"./cv.js": 404,
	"./cy": 405,
	"./cy.js": 405,
	"./da": 406,
	"./da.js": 406,
	"./de": 409,
	"./de-at": 407,
	"./de-at.js": 407,
	"./de-ch": 408,
	"./de-ch.js": 408,
	"./de.js": 409,
	"./dv": 410,
	"./dv.js": 410,
	"./el": 411,
	"./el.js": 411,
	"./en-au": 412,
	"./en-au.js": 412,
	"./en-ca": 413,
	"./en-ca.js": 413,
	"./en-gb": 414,
	"./en-gb.js": 414,
	"./en-ie": 415,
	"./en-ie.js": 415,
	"./en-il": 416,
	"./en-il.js": 416,
	"./en-nz": 417,
	"./en-nz.js": 417,
	"./eo": 418,
	"./eo.js": 418,
	"./es": 421,
	"./es-do": 419,
	"./es-do.js": 419,
	"./es-us": 420,
	"./es-us.js": 420,
	"./es.js": 421,
	"./et": 422,
	"./et.js": 422,
	"./eu": 423,
	"./eu.js": 423,
	"./fa": 424,
	"./fa.js": 424,
	"./fi": 425,
	"./fi.js": 425,
	"./fo": 426,
	"./fo.js": 426,
	"./fr": 429,
	"./fr-ca": 427,
	"./fr-ca.js": 427,
	"./fr-ch": 428,
	"./fr-ch.js": 428,
	"./fr.js": 429,
	"./fy": 430,
	"./fy.js": 430,
	"./gd": 431,
	"./gd.js": 431,
	"./gl": 432,
	"./gl.js": 432,
	"./gom-latn": 433,
	"./gom-latn.js": 433,
	"./gu": 434,
	"./gu.js": 434,
	"./he": 435,
	"./he.js": 435,
	"./hi": 436,
	"./hi.js": 436,
	"./hr": 437,
	"./hr.js": 437,
	"./hu": 438,
	"./hu.js": 438,
	"./hy-am": 439,
	"./hy-am.js": 439,
	"./id": 440,
	"./id.js": 440,
	"./is": 441,
	"./is.js": 441,
	"./it": 442,
	"./it.js": 442,
	"./ja": 443,
	"./ja.js": 443,
	"./jv": 444,
	"./jv.js": 444,
	"./ka": 445,
	"./ka.js": 445,
	"./kk": 446,
	"./kk.js": 446,
	"./km": 447,
	"./km.js": 447,
	"./kn": 448,
	"./kn.js": 448,
	"./ko": 449,
	"./ko.js": 449,
	"./ky": 450,
	"./ky.js": 450,
	"./lb": 451,
	"./lb.js": 451,
	"./lo": 452,
	"./lo.js": 452,
	"./lt": 453,
	"./lt.js": 453,
	"./lv": 454,
	"./lv.js": 454,
	"./me": 455,
	"./me.js": 455,
	"./mi": 456,
	"./mi.js": 456,
	"./mk": 457,
	"./mk.js": 457,
	"./ml": 458,
	"./ml.js": 458,
	"./mr": 459,
	"./mr.js": 459,
	"./ms": 461,
	"./ms-my": 460,
	"./ms-my.js": 460,
	"./ms.js": 461,
	"./mt": 462,
	"./mt.js": 462,
	"./my": 463,
	"./my.js": 463,
	"./nb": 464,
	"./nb.js": 464,
	"./ne": 465,
	"./ne.js": 465,
	"./nl": 467,
	"./nl-be": 466,
	"./nl-be.js": 466,
	"./nl.js": 467,
	"./nn": 468,
	"./nn.js": 468,
	"./pa-in": 469,
	"./pa-in.js": 469,
	"./pl": 470,
	"./pl.js": 470,
	"./pt": 472,
	"./pt-br": 471,
	"./pt-br.js": 471,
	"./pt.js": 472,
	"./ro": 473,
	"./ro.js": 473,
	"./ru": 474,
	"./ru.js": 474,
	"./sd": 475,
	"./sd.js": 475,
	"./se": 476,
	"./se.js": 476,
	"./si": 477,
	"./si.js": 477,
	"./sk": 478,
	"./sk.js": 478,
	"./sl": 479,
	"./sl.js": 479,
	"./sq": 480,
	"./sq.js": 480,
	"./sr": 482,
	"./sr-cyrl": 481,
	"./sr-cyrl.js": 481,
	"./sr.js": 482,
	"./ss": 483,
	"./ss.js": 483,
	"./sv": 484,
	"./sv.js": 484,
	"./sw": 485,
	"./sw.js": 485,
	"./ta": 486,
	"./ta.js": 486,
	"./te": 487,
	"./te.js": 487,
	"./tet": 488,
	"./tet.js": 488,
	"./tg": 489,
	"./tg.js": 489,
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
	"./ug-cn": 497,
	"./ug-cn.js": 497,
	"./uk": 498,
	"./uk.js": 498,
	"./ur": 499,
	"./ur.js": 499,
	"./uz": 501,
	"./uz-latn": 500,
	"./uz-latn.js": 500,
	"./uz.js": 501,
	"./vi": 502,
	"./vi.js": 502,
	"./x-pseudo": 503,
	"./x-pseudo.js": 503,
	"./yo": 504,
	"./yo.js": 504,
	"./zh-cn": 505,
	"./zh-cn.js": 505,
	"./zh-hk": 506,
	"./zh-hk.js": 506,
	"./zh-tw": 507,
	"./zh-tw.js": 507
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
webpackContext.id = 862;


/***/ }),

/***/ 864:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 865:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

module.exports = "input.hideRadio {\r\n    visibility:hidden;\r\n}\r\nbody {\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: #eee;\r\n  }\r\n  \r\n  img.selected{\r\n    border-radius: 50%;\r\n    background-color: #007bff;\r\n    box-shadow: 0 0 22px 6px #007bff;\r\n}\r\n\r\n  ul.moods li {\r\n    width: 210px;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    display: inline-block;   \r\n}\r\n\r\n  .form-signin {\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n  .form-signin .form-signin-heading,\r\n  .form-signin .checkbox {\r\n    margin-bottom: 10px;\r\n  }\r\n  .form-signin .checkbox {\r\n    font-weight: 400;\r\n  }\r\n  .form-signin .form-control {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: auto;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n  }\r\n  .form-signin .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n  .form-signin input[type=\"username\"] ,input[type=\"password\"]  {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  btn.btn-lg{\r\nborder: 2px;\r\n  }"

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = "body {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #eee;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n  margin-bottom: 10px;\r\n}\r\n.form-signin .checkbox {\r\n  font-weight: 400;\r\n}\r\n.form-signin .form-control {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n.form-signin input[type=\"username\"] ,input[type=\"password\"]  {\r\n  margin-bottom: 10px;\r\n}"

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = "\r\n.navbar {\r\n    position: relative;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    padding: 0.5rem 1rem;\r\n    margin-bottom: 20px;\r\n  }"

/***/ }),

/***/ 871:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: #eee;\r\n  }\r\n  \r\n  .form-signin {\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n  }\r\n  .form-signin .form-signin-heading,\r\n  .form-signin .checkbox {\r\n    margin-bottom: 10px;\r\n  }\r\n  .form-signin .checkbox {\r\n    font-weight: 400;\r\n  }\r\n  .form-signin .form-control {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: auto;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n  }\r\n  .form-signin .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n  .form-signin input[type=\"name\"],input[type=\"username\"] ,input[type=\"email\"],input[type=\"password\"]  {\r\n    margin-bottom: 10px;\r\n  }"

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = "<button (click)=\"chart(1)\" class=\"btn btn-lg btn-primary\">chart 1</button>\n<button (click)=\"chart(2)\" class=\"btn btn-lg btn-primary\">chart 2</button>\n<a routerLink=\"/input\"><button class=\"btn btn-lg btn-primary\" > Add Info</button></a>\n\n\n<div class=\"container\" style=\"position: relative;\" [hidden]=\"!chart1\">\n  <canvas id=\"myChart\" width=\"1000\" height=\"500\"></canvas>\n</div>\n\n<div>\n  <canvas [hidden]=\"!chart2\" id=\"myChart1\" width=\"1000\" height=\"500\"></canvas>\n</div>\n\n"

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron text-center\" >\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading\">eMoodi</h1>\n    <p class=\"lead text-muted\">Welcome to eMoodi MEAN application used to track and improve your mood.</p>\n    <p>\n      <a class=\"btn btn-primary\"  *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/register']\">Register</a> \n      <a class=\"btn btn-secondary\"  *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/login']\">Login</a>\n\n    </p>\n  </div>\n</section>\n\n<!-- <button (click)=\"getForecast()\">Get Forecast</button> -->\n\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data</p>\n  </div>\n</div>"

/***/ }),

/***/ 876:
/***/ (function(module, exports) {

module.exports = "<script type=\"text/javascript\" src=\"assets/js/jquery-2.1.1.min.js\"></script>\n<div>\n\n  <ul class=\"moods\">\n    <h2 align=\"center\">How are you feeling</h2>\n    <br>\n    <li>\n      <a (click)=\"setMood(1)\">\n        <img class=\"logo\" src=\"assets/emojis/1.png\" />\n      </a>\n    </li>\n    <li>\n      <a (click)=\"setMood(2)\">\n        <img class=\"logo\" src=\"assets/emojis/2.png\" />\n      </a>\n    </li>\n    <li>\n      <a (click)=\"setMood(3)\">\n        <img class=\"logo\" src=\"assets/emojis/3.png\" />\n      </a>\n    </li>\n    <li>\n      <a (click)=\"setMood(4)\">\n        <img class=\"logo\" src=\"assets/emojis/4.png\" />\n      </a>\n    </li>\n    <li>\n      <a (click)=\"setMood(5)\">\n        <img class=\"logo\" src=\"assets/emojis/5.png\" />\n      </a>\n    </li>\n  </ul>\n\n  <form class=\"form-signin\" (submit)=\"onInfoSubmit()\">\n\n    <h3 align=\"center\">How much sleep did you get last night ?</h3>\n    <input type=\"number\" min=\"0\" required class=\"form-control\" name=\"sleep\" [(ngModel)]=\"sleep\">\n\n    <br>\n\n    <h3 align=\"center\">What was your diet like today ?</h3>\n    <br>\n    <div class=\"btn-group\" data-toggle=\"buttons\">\n      <label (click)=\"setDiet('poor')\" class=\"btn btn-lg btn-primary\">\n        <input type=\"radio\" (change)=\"test(1)\" class=\"hideRadio\"> Poor\n      </label>\n      <label (click)=\"setDiet('fair')\" class=\"btn btn-lg btn-primary\">\n        <input type=\"radio\" class=\"hideRadio\"> Fair\n      </label>\n      <label (click)=\"setDiet('good')\" class=\"btn btn-lg btn-primary\">\n        <input type=\"radio\" class=\"hideRadio\"> Good\n      </label>\n    </div>\n\n    <br>\n    <br>\n\n    <h3 align=\"center\">How was your level of exercise today ?</h3>\n    <br>\n    <div class=\"btn-group\" data-toggle=\"buttons\">\n      <label (click)=\"setExercise('poor')\" class=\"btn btn-lg btn-primary\">\n        <input class=\"hideRadio\" type=\"radio\" autocomplete=\"off\"> Poor\n      </label>\n      <label (click)=\"setExercise('fair')\" class=\"btn btn-lg btn-primary\">\n        <input class=\"hideRadio\" type=\"radio\" autocomplete=\"off\"> Fair\n      </label>\n      <label (click)=\"setExercise('good')\" class=\"btn btn-lg btn-primary\">\n        <input class=\"hideRadio\" type=\"radio\" autocomplete=\"off\"> Good\n      </label>\n    </div>\n\n    <br>\n    <br>\n    <br>\n\n    <div style=\"float:right\">\n      <button class=\"btn btn-lg btn-primary\" type=\"submit\">Submit</button>\n      <button (click)=\"reset()\" type=\"reset\" class=\"btn btn-lg btn-primary\">Reset</button>\n    </div>\n\n  </form>\n</div>"

/***/ }),

/***/ 877:
/***/ (function(module, exports) {

module.exports = "<h1>\n  <i class=\"wi wi-barometer\"></i> Your Local Weather Forecast\n</h1>\n\n<p>Current Position: {{ lat }} / {{ lng }} </p>\n\n<button (click)=\"getForecast()\">Get Forecast</button>\n\n<!-- <h1>Seven Day Forecast</h1>\n\n<div *ngIf=\"forecast\" class=\"columns\"> \n    <div *ngFor=\"let day of forecast.daily.data\" class=\"column\">\n\n        <i [class]=\"weatherIcon(day.icon)\"></i>\n        <h3>{{ day.time * 1000 | date: 'MMM d'  }}</h3>\n        <p>{{ day.summary }}</p>\n\n    </div>\n </div> -->\n\n <div *ngIf=\"forecast\">\n   time:{{ forecast.daily.data[0].time}}\n  summary: {{ forecast.daily.data[0].summary}}\n   cloudCover{{ forecast.daily.data[0].cloudCover}}\n   temp{{ forecast.daily.data[0].temperatureMax}}\n </div>"

/***/ }),

/***/ 878:
/***/ (function(module, exports) {

module.exports = "<!-- <h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form> -->\n\n\n<div class=\"container\" (submit)=\"onLoginSubmit()\">\n    <form class=\"form-signin\">\n      <h2 class=\"form-signin-heading\">Please Login</h2>\n      <input type=\"username\"  class=\"form-control\" placeholder=\"Username\" required autofocus [(ngModel)]=\"username\" name=\"username\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"password\" name=\"password\">\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button>\n    </form>\n</div>\n"

/***/ }),

/***/ 879:
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">eMoodi</a>\n      </div>\n      <div id=\"navbar\" class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav navbar-left\">\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n        </ul>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n          <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n          <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n-->\n\n\n\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">eMoodi</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#emoodiNavbar\" aria-controls=\"emoodiNavbar\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"emoodiNavbar\">\n    <div class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n      </li>\n    </div>\n      <div class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\">\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n      </li>\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ 880:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n    <h2 class=\"page-header\">{{user.name}}</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Username: {{user.username}}</li>\n      <li class=\"list-group-item\">Email: {{user.email}}</li>\n    </ul>\n\n<local-forecast></local-forecast>\n  </div>"

/***/ }),

/***/ 881:
/***/ (function(module, exports) {

module.exports = "<div>\n    <form class=\"form-signin\" (submit)=\"onRegisterSubmit()\">\n      <h2 class=\"form-signin-heading\">Please Register</h2>\n      \n      <input type=\"name\" class=\"form-control\" placeholder=\"Name\" required autofocus [(ngModel)]=\"name\" name=\"name\">\n      <input type=\"username\" class=\"form-control\" placeholder=\"Username\" required [(ngModel)]=\"username\" name=\"username\">\n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"password\" name=\"password\">\n     \n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Register</button>\n    </form>\n</div>\n"

/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(529);


/***/ })

},[923]);
//# sourceMappingURL=main.bundle.map