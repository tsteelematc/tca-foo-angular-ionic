"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_play-game_play-game_module_ts"],{

/***/ 4906:
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/play-game/play-game.page.html ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Play &amp; Track Your Game</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-button  \r\n    *ngFor=\"let p of gameSvc.currentGame.availablePlayers\"\r\n    (click)=\"endGame(p.name)\"\r\n  >\r\n    {{ p.name }} Won\r\n  </ion-button>\r\n  <ion-button\r\n    (click)=\"quitGame()\"\r\n    color=\"light\"\r\n  >\r\n    Quit\r\n  </ion-button>\r\n</ion-content>\r\n");

/***/ }),

/***/ 5655:
/*!*******************************************************!*\
  !*** ./src/app/play-game/play-game-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayGamePageRoutingModule": () => (/* binding */ PlayGamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _play_game_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play-game.page */ 3973);




const routes = [
    {
        path: '',
        component: _play_game_page__WEBPACK_IMPORTED_MODULE_0__.PlayGamePage
    }
];
let PlayGamePageRoutingModule = class PlayGamePageRoutingModule {
};
PlayGamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlayGamePageRoutingModule);



/***/ }),

/***/ 8201:
/*!***********************************************!*\
  !*** ./src/app/play-game/play-game.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayGamePageModule": () => (/* binding */ PlayGamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _play_game_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play-game-routing.module */ 5655);
/* harmony import */ var _play_game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play-game.page */ 3973);







let PlayGamePageModule = class PlayGamePageModule {
};
PlayGamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _play_game_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlayGamePageRoutingModule
        ],
        declarations: [_play_game_page__WEBPACK_IMPORTED_MODULE_1__.PlayGamePage]
    })
], PlayGamePageModule);



/***/ }),

/***/ 3973:
/*!*********************************************!*\
  !*** ./src/app/play-game/play-game.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayGamePage": () => (/* binding */ PlayGamePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _C_Users_t_ste_Documents_GitHub_2022_spring_adv_fe_tsteelematc_tca_foo_angular_ionic_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_play_game_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./play-game.page.html */ 4906);
/* harmony import */ var _play_game_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play-game.page.scss */ 5848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ 3565);






let PlayGamePage = class PlayGamePage {
    constructor(gameSvc, routerSvc) {
        this.gameSvc = gameSvc;
        this.routerSvc = routerSvc;
        this.endGame = (winningPlayer) => {
            // Add a new game result.
            this.gameSvc.addGameResult({
                start: this.gameSvc.currentGame.start,
                end: new Date().toISOString(),
                winner: winningPlayer,
                players: this.gameSvc.currentGame.availablePlayers
            });
            // Navigate to the home page.
            this.routerSvc.navigateByUrl("/");
        };
        this.quitGame = () => {
            this.routerSvc.navigateByUrl("/");
        };
    }
    ngOnInit() {
    }
};
PlayGamePage.ctorParameters = () => [
    { type: _game_service__WEBPACK_IMPORTED_MODULE_2__.GameService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PlayGamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-play-game',
        template: _C_Users_t_ste_Documents_GitHub_2022_spring_adv_fe_tsteelematc_tca_foo_angular_ionic_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_play_game_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_play_game_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlayGamePage);



/***/ }),

/***/ 5848:
/*!***********************************************!*\
  !*** ./src/app/play-game/play-game.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5LWdhbWUucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_play-game_play-game_module_ts.js.map