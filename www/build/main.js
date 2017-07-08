webpackJsonp([1],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.versionNumber = "1.0.0";
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-about',template:/*ion-inline-start:"/Users/huangshuting/Documents/practice/ionic/ionic_demo/myTasks/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="card-background">\n\n  <ion-card>\n    <img src="/assets/images/about-background.jpg" />\n    <div class="card-title">Ionic MyTasks</div>\n    <div class="car-subtitle"> version {{versionNumber}}</div>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/huangshuting/Documents/practice/ionic/ionic_demo/myTasks/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 23;

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		58,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 25;

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/home/task.ts
var Task = (function () {
    function Task(title) {
        this.title = title;
        this.isDone = false;
        this.isEdit = false;
    }
    return Task;
}());

//# sourceMappingURL=task.js.map
// CONCATENATED MODULE: ./src/pages/home/home.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var home_HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tasks = [
            { id: 1, title: 'Front-End Interviews', isDone: false, isEdit: false },
            { id: 2, title: 'Learn JavaScript', isDone: false, isEdit: false },
            { id: 3, title: 'Coding Coding Coding', isDone: false, isEdit: false },
        ];
    }
    // Add Task
    HomePage.prototype.addTask = function (title) {
        if (title) {
            this.tasks.push(new Task(title));
        }
    };
    // Edit Task
    HomePage.prototype.editTask = function (task) {
        task.isEdit = !task.isEdit;
        this.list.closeSlidingItems();
    };
    // Delete Task
    HomePage.prototype.deleteTask = function (id) {
        console.log('The index being passed: ' + id);
        this.tasks.splice(id, 1);
    };
    return HomePage;
}());
__decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */](__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* List */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* List */])
], home_HomePage.prototype, "list", void 0);
home_HomePage = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-home',template:/*ion-inline-start:"/Users/huangshuting/Documents/practice/ionic/ionic_demo/myTasks/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-title padding-top padding-bottom>To-Do List</ion-title>\n\n  <ion-item>\n    <ion-input #newTask (keyup.enter)="addTask(newTask.value); newTask.value=\'\' " type="text" placeholder="Add a new task..."> </ion-input>\n\n    <button ion-button item-right (click)="addTask(newTask.value); newTask.value=\'\' ">\n      <ion-icon name="md-add-circle"></ion-icon>\n    </button>\n  </ion-item>\n\n  <ion-list no-lines>\n    <ion-item-sliding *ngFor="let task of tasks; let id = index">\n      <ion-item no-lines>\n        <ion-checkbox [checked]="task.isDone"> </ion-checkbox>\n\n        <ion-item no-lines item-left text-wrap>\n        <ion-label *ngIf="!task.isEdit" color="primary"> {{task.title}} </ion-label>\n\n        <ion-input *ngIf="task.isEdit" [(ngModel)]="task.title" (keyup.enter)="task.isEdit=false"> </ion-input>\n        </ion-item>\n      </ion-item>\n\n      <ion-item-options side="left">\n        <button ion-button (click)="editTask(task)">\n          <ion-icon name="ios-create"></ion-icon>\n        </button>\n      </ion-item-options>\n\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="deleteTask(id)">\n          <ion-icon name="md-trash"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/huangshuting/Documents/practice/ionic/ionic_demo/myTasks/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], home_HomePage);

//# sourceMappingURL=home.js.map
// CONCATENATED MODULE: ./src/app/app.component.ts
/* harmony import */ var app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(14);
var app_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var app_component_MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = home_HomePage;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: home_HomePage },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
app_component___decorate([
    app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */](app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    app_component___metadata("design:type", app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], app_component_MyApp.prototype, "nav", void 0);
app_component_MyApp = app_component___decorate([
    app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({template:/*ion-inline-start:"/Users/huangshuting/Documents/practice/ionic/ionic_demo/myTasks/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/huangshuting/Documents/practice/ionic/ionic_demo/myTasks/src/app/app.html"*/
    }),
    app_component___metadata("design:paramtypes", [app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], app_component_MyApp);

//# sourceMappingURL=app.component.js.map
// CONCATENATED MODULE: ./src/app/app.module.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var app_module___WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(28);
var app_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = app_module___decorate([
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */]({
        declarations: [
            app_component_MyApp,
            home_HomePage,
            app_module___WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(app_component_MyApp, {}, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            app_component_MyApp,
            home_HomePage,
            app_module___WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map
// CONCATENATED MODULE: ./src/app/main.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(30);


__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */]().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map

/***/ })

},[29]);
//# sourceMappingURL=main.js.map