"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_setup-game_setup-game_module_ts"],{

/***/ 8089:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/setup-game/setup-game.page.html ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Setup Game</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <h3>\r\n    Choose players:\r\n  </h3>\r\n  <ion-input\r\n    placeholder=\"Enter new player name\"\r\n    [(ngModel)]=\"newPlayerName\"\r\n  ></ion-input>\r\n  <ion-button\r\n    (click)=\"addNewPlayer()\"\r\n  >\r\n    Add\r\n  </ion-button>\r\n  <ion-list>\r\n    <ion-item\r\n      *ngFor=\"let p of availablePlayers\"\r\n    >\r\n      <ion-label>\r\n        {{ p.name }}\r\n      </ion-label>\r\n      <ion-checkbox\r\n        [(ngModel)]=\"p.checked\"\r\n      >\r\n      </ion-checkbox>\r\n    </ion-item>   \r\n  </ion-list>\r\n  <ion-button\r\n    (click)=\"letsPlay()\"\r\n  >\r\n    Start Playing\r\n  </ion-button>\r\n</ion-content>\r\n");

/***/ }),

/***/ 1856:
/*!*********************************************************!*\
  !*** ./src/app/setup-game/setup-game-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupGamePageRoutingModule": () => (/* binding */ SetupGamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _setup_game_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup-game.page */ 8491);




const routes = [
    {
        path: '',
        component: _setup_game_page__WEBPACK_IMPORTED_MODULE_0__.SetupGamePage
    }
];
let SetupGamePageRoutingModule = class SetupGamePageRoutingModule {
};
SetupGamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SetupGamePageRoutingModule);



/***/ }),

/***/ 3174:
/*!*************************************************!*\
  !*** ./src/app/setup-game/setup-game.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupGamePageModule": () => (/* binding */ SetupGamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _setup_game_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup-game-routing.module */ 1856);
/* harmony import */ var _setup_game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup-game.page */ 8491);







let SetupGamePageModule = class SetupGamePageModule {
};
SetupGamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _setup_game_routing_module__WEBPACK_IMPORTED_MODULE_0__.SetupGamePageRoutingModule
        ],
        declarations: [_setup_game_page__WEBPACK_IMPORTED_MODULE_1__.SetupGamePage]
    })
], SetupGamePageModule);



/***/ }),

/***/ 8491:
/*!***********************************************!*\
  !*** ./src/app/setup-game/setup-game.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupGamePage": () => (/* binding */ SetupGamePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_t_ste_Documents_GitHub_2022_spring_adv_fe_tsteelematc_tca_foo_angular_ionic_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_setup_game_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./setup-game.page.html */ 8089);
/* harmony import */ var _setup_game_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup-game.page.scss */ 6488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ 3565);






let SetupGamePage = class SetupGamePage {
    constructor(gameSvc, router) {
        this.gameSvc = gameSvc;
        this.router = router;
        this.letsPlay = () => {
            // Setup the current game players and start timestamp.
            this.gameSvc.setCurrentGame({
                start: new Date().toISOString(),
                availablePlayers: this.availablePlayers.filter(x => x.checked)
            });
            // Navigate to the play screen.
            this.router.navigateByUrl("/play");
        };
        this.availablePlayers = [];
        this.newPlayerName = "";
        this.addNewPlayer = () => {
            // Add a new player, defaulted to checked.
            this.availablePlayers = [
                ...this.availablePlayers,
                {
                    name: this.newPlayerName,
                    checked: true,
                    order: 0
                }
            ];
            // Clear the new player name.
            this.newPlayerName = "";
        };
    }
    ngOnInit() {
        this.availablePlayers = this.gameSvc.getUniquePlayers().map(x => ({
            name: x,
            order: 0,
            checked: false
        }));
    }
};
SetupGamePage.ctorParameters = () => [
    { type: _game_service__WEBPACK_IMPORTED_MODULE_2__.GameService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SetupGamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-setup-game',
        template: _C_Users_t_ste_Documents_GitHub_2022_spring_adv_fe_tsteelematc_tca_foo_angular_ionic_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_setup_game_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_setup_game_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SetupGamePage);



/***/ }),

/***/ 6488:
/*!*************************************************!*\
  !*** ./src/app/setup-game/setup-game.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR1cC1nYW1lLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_setup-game_setup-game_module_ts.js.map