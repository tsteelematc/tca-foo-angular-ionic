"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_game_service_ts"],{

/***/ 4113:
/*!**********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-dynamodb/dist-es/convertToAttr.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertToAttr": () => (/* binding */ convertToAttr)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8111);

var convertToAttr = function (data, options) {
    var _a, _b, _c, _d, _e, _f;
    if (data === undefined) {
        throw new Error("Pass options.removeUndefinedValues=true to remove undefined values from map/array/set.");
    }
    else if (data === null && typeof data === "object") {
        return convertToNullAttr();
    }
    else if (Array.isArray(data)) {
        return convertToListAttr(data, options);
    }
    else if (((_a = data === null || data === void 0 ? void 0 : data.constructor) === null || _a === void 0 ? void 0 : _a.name) === "Set") {
        return convertToSetAttr(data, options);
    }
    else if (((_b = data === null || data === void 0 ? void 0 : data.constructor) === null || _b === void 0 ? void 0 : _b.name) === "Map") {
        return convertToMapAttrFromIterable(data, options);
    }
    else if (((_c = data === null || data === void 0 ? void 0 : data.constructor) === null || _c === void 0 ? void 0 : _c.name) === "Object" ||
        (!data.constructor && typeof data === "object")) {
        return convertToMapAttrFromEnumerableProps(data, options);
    }
    else if (isBinary(data)) {
        if (data.length === 0 && (options === null || options === void 0 ? void 0 : options.convertEmptyValues)) {
            return convertToNullAttr();
        }
        return convertToBinaryAttr(data);
    }
    else if (typeof data === "boolean" || ((_d = data === null || data === void 0 ? void 0 : data.constructor) === null || _d === void 0 ? void 0 : _d.name) === "Boolean") {
        return { BOOL: data.valueOf() };
    }
    else if (typeof data === "number" || ((_e = data === null || data === void 0 ? void 0 : data.constructor) === null || _e === void 0 ? void 0 : _e.name) === "Number") {
        return convertToNumberAttr(data);
    }
    else if (typeof data === "bigint") {
        return convertToBigIntAttr(data);
    }
    else if (typeof data === "string" || ((_f = data === null || data === void 0 ? void 0 : data.constructor) === null || _f === void 0 ? void 0 : _f.name) === "String") {
        if (data.length === 0 && (options === null || options === void 0 ? void 0 : options.convertEmptyValues)) {
            return convertToNullAttr();
        }
        return convertToStringAttr(data);
    }
    else if ((options === null || options === void 0 ? void 0 : options.convertClassInstanceToMap) && typeof data === "object") {
        return convertToMapAttrFromEnumerableProps(data, options);
    }
    throw new Error("Unsupported type passed: ".concat(data, ". Pass options.convertClassInstanceToMap=true to marshall typeof object as map attribute."));
};
var convertToListAttr = function (data, options) { return ({
    L: data
        .filter(function (item) { return !(options === null || options === void 0 ? void 0 : options.removeUndefinedValues) || ((options === null || options === void 0 ? void 0 : options.removeUndefinedValues) && item !== undefined); })
        .map(function (item) { return convertToAttr(item, options); }),
}); };
var convertToSetAttr = function (set, options) {
    var setToOperate = (options === null || options === void 0 ? void 0 : options.removeUndefinedValues) ? new Set((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(set), false).filter(function (value) { return value !== undefined; })) : set;
    if (!(options === null || options === void 0 ? void 0 : options.removeUndefinedValues) && setToOperate.has(undefined)) {
        throw new Error("Pass options.removeUndefinedValues=true to remove undefined values from map/array/set.");
    }
    if (setToOperate.size === 0) {
        if (options === null || options === void 0 ? void 0 : options.convertEmptyValues) {
            return convertToNullAttr();
        }
        throw new Error("Pass a non-empty set, or options.convertEmptyValues=true.");
    }
    var item = setToOperate.values().next().value;
    if (typeof item === "number") {
        return {
            NS: Array.from(setToOperate)
                .map(convertToNumberAttr)
                .map(function (item) { return item.N; }),
        };
    }
    else if (typeof item === "bigint") {
        return {
            NS: Array.from(setToOperate)
                .map(convertToBigIntAttr)
                .map(function (item) { return item.N; }),
        };
    }
    else if (typeof item === "string") {
        return {
            SS: Array.from(setToOperate)
                .map(convertToStringAttr)
                .map(function (item) { return item.S; }),
        };
    }
    else if (isBinary(item)) {
        return {
            BS: Array.from(setToOperate)
                .map(convertToBinaryAttr)
                .map(function (item) { return item.B; }),
        };
    }
    else {
        throw new Error("Only Number Set (NS), Binary Set (BS) or String Set (SS) are allowed.");
    }
};
var convertToMapAttrFromIterable = function (data, options) { return ({
    M: (function (data) {
        var e_1, _a;
        var map = {};
        try {
            for (var data_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(data_1_1.value, 2), key = _b[0], value = _b[1];
                if (typeof value !== "function" && (value !== undefined || !(options === null || options === void 0 ? void 0 : options.removeUndefinedValues))) {
                    map[key] = convertToAttr(value, options);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return map;
    })(data),
}); };
var convertToMapAttrFromEnumerableProps = function (data, options) { return ({
    M: (function (data) {
        var map = {};
        for (var key in data) {
            var value = data[key];
            if (typeof value !== "function" && (value !== undefined || !(options === null || options === void 0 ? void 0 : options.removeUndefinedValues))) {
                map[key] = convertToAttr(value, options);
            }
        }
        return map;
    })(data),
}); };
var convertToNullAttr = function () { return ({ NULL: true }); };
var convertToBinaryAttr = function (data) { return ({ B: data }); };
var convertToStringAttr = function (data) { return ({ S: data.toString() }); };
var convertToBigIntAttr = function (data) { return ({ N: data.toString() }); };
var validateBigIntAndThrow = function (errorPrefix) {
    throw new Error("".concat(errorPrefix, " ").concat(typeof BigInt === "function" ? "Use BigInt." : "Pass string value instead.", " "));
};
var convertToNumberAttr = function (num) {
    if ([Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]
        .map(function (val) { return val.toString(); })
        .includes(num.toString())) {
        throw new Error("Special numeric value ".concat(num.toString(), " is not allowed"));
    }
    else if (num > Number.MAX_SAFE_INTEGER) {
        validateBigIntAndThrow("Number ".concat(num.toString(), " is greater than Number.MAX_SAFE_INTEGER."));
    }
    else if (num < Number.MIN_SAFE_INTEGER) {
        validateBigIntAndThrow("Number ".concat(num.toString(), " is lesser than Number.MIN_SAFE_INTEGER."));
    }
    return { N: num.toString() };
};
var isBinary = function (data) {
    var binaryTypes = [
        "ArrayBuffer",
        "Blob",
        "Buffer",
        "DataView",
        "File",
        "Int8Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "Int16Array",
        "Uint16Array",
        "Int32Array",
        "Uint32Array",
        "Float32Array",
        "Float64Array",
        "BigInt64Array",
        "BigUint64Array",
    ];
    if (data === null || data === void 0 ? void 0 : data.constructor) {
        return binaryTypes.includes(data.constructor.name);
    }
    return false;
};


/***/ }),

/***/ 2636:
/*!************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-dynamodb/dist-es/convertToNative.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertToNative": () => (/* binding */ convertToNative)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8111);

var convertToNative = function (data, options) {
    var e_1, _a;
    try {
        for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(Object.entries(data)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(_c.value, 2), key = _d[0], value = _d[1];
            if (value !== undefined) {
                switch (key) {
                    case "NULL":
                        return null;
                    case "BOOL":
                        return Boolean(value);
                    case "N":
                        return convertNumber(value, options);
                    case "B":
                        return convertBinary(value);
                    case "S":
                        return convertString(value);
                    case "L":
                        return convertList(value, options);
                    case "M":
                        return convertMap(value, options);
                    case "NS":
                        return new Set(value.map(function (item) { return convertNumber(item, options); }));
                    case "BS":
                        return new Set(value.map(convertBinary));
                    case "SS":
                        return new Set(value.map(convertString));
                    default:
                        throw new Error("Unsupported type passed: ".concat(key));
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    throw new Error("No value defined: ".concat(JSON.stringify(data)));
};
var convertNumber = function (numString, options) {
    if (options === null || options === void 0 ? void 0 : options.wrapNumbers) {
        return { value: numString };
    }
    var num = Number(numString);
    var infinityValues = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
    if ((num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) && !infinityValues.includes(num)) {
        if (typeof BigInt === "function") {
            try {
                return BigInt(numString);
            }
            catch (error) {
                throw new Error("".concat(numString, " can't be converted to BigInt. Set options.wrapNumbers to get string value."));
            }
        }
        else {
            throw new Error("".concat(numString, " is outside SAFE_INTEGER bounds. Set options.wrapNumbers to get string value."));
        }
    }
    return num;
};
var convertString = function (stringValue) { return stringValue; };
var convertBinary = function (binaryValue) { return binaryValue; };
var convertList = function (list, options) {
    return list.map(function (item) { return convertToNative(item, options); });
};
var convertMap = function (map, options) {
    return Object.entries(map).reduce(function (acc, _a) {
        var _b;
        var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(_a, 2), key = _c[0], value = _c[1];
        return ((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, acc), (_b = {}, _b[key] = convertToNative(value, options), _b)));
    }, {});
};


/***/ }),

/***/ 8889:
/*!**************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-dynamodb/dist-es/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertToAttr": () => (/* reexport safe */ _convertToAttr__WEBPACK_IMPORTED_MODULE_0__.convertToAttr),
/* harmony export */   "convertToNative": () => (/* reexport safe */ _convertToNative__WEBPACK_IMPORTED_MODULE_1__.convertToNative),
/* harmony export */   "marshall": () => (/* reexport safe */ _marshall__WEBPACK_IMPORTED_MODULE_2__.marshall),
/* harmony export */   "unmarshall": () => (/* reexport safe */ _unmarshall__WEBPACK_IMPORTED_MODULE_4__.unmarshall)
/* harmony export */ });
/* harmony import */ var _convertToAttr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertToAttr */ 4113);
/* harmony import */ var _convertToNative__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convertToNative */ 2636);
/* harmony import */ var _marshall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marshall */ 6948);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models */ 5029);
/* harmony import */ var _unmarshall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unmarshall */ 2215);







/***/ }),

/***/ 6948:
/*!*****************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-dynamodb/dist-es/marshall.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "marshall": () => (/* binding */ marshall)
/* harmony export */ });
/* harmony import */ var _convertToAttr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertToAttr */ 4113);

var marshall = function (data, options) { return (0,_convertToAttr__WEBPACK_IMPORTED_MODULE_0__.convertToAttr)(data, options).M; };


/***/ }),

/***/ 5029:
/*!***************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-dynamodb/dist-es/models.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2215:
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-dynamodb/dist-es/unmarshall.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unmarshall": () => (/* binding */ unmarshall)
/* harmony export */ });
/* harmony import */ var _convertToNative__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertToNative */ 2636);

var unmarshall = function (data, options) {
    return (0,_convertToNative__WEBPACK_IMPORTED_MODULE_0__.convertToNative)({ M: data }, options);
};


/***/ }),

/***/ 5067:
/*!********************************!*\
  !*** ./src/app/TcaCloudApi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveGameToCloud": () => (/* binding */ saveGameToCloud),
/* harmony export */   "loadGamesFromCloud": () => (/* binding */ loadGamesFromCloud)
/* harmony export */ });
/* harmony import */ var C_Users_t_ste_Documents_GitHub_2022_spring_adv_fe_tsteelematc_tca_foo_angular_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _aws_sdk_util_dynamodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/util-dynamodb */ 8889);


const saveGameToCloud = /*#__PURE__*/function () {
  var _ref = (0,C_Users_t_ste_Documents_GitHub_2022_spring_adv_fe_tsteelematc_tca_foo_angular_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (email, appName, timestamp, gameResult) {
    const dynamoGame = {
      pk: email,
      sk: `${appName}#${timestamp}`,
      ts: timestamp,
      user: email,
      app: appName,
      gsi1pk: appName,
      gsi1sk: timestamp,
      game: gameResult
    };
    console.log("Unmarshalled Game", dynamoGame);
    const marshalledGame = (0,_aws_sdk_util_dynamodb__WEBPACK_IMPORTED_MODULE_1__.marshall)(dynamoGame, {
      removeUndefinedValues: true,
      convertClassInstanceToMap: true
    });
    console.log("MarshalledGame", marshalledGame);
    const options = {
      method: 'POST',
      body: JSON.stringify({
        TableName: "tca-data",
        Item: marshalledGame
      })
    };
    yield fetch("https://32wop75hhc.execute-api.us-east-1.amazonaws.com/prod/data", options);
  });

  return function saveGameToCloud(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
const loadGamesFromCloud = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_t_ste_Documents_GitHub_2022_spring_adv_fe_tsteelematc_tca_foo_angular_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (email, appName) {
    const url = `https://32wop75hhc.execute-api.us-east-1.amazonaws.com/prod/data/?user=${email}&game=${appName}`;
    console.log("url", url);
    const response = yield fetch(url);
    const data = yield response.json();
    console.log("Marshalled Response", data);
    const unmarshalledData = data.Items.map(x => (0,_aws_sdk_util_dynamodb__WEBPACK_IMPORTED_MODULE_1__.unmarshall)(x, {
      convertEmptyValues: true
    }));
    console.log("Unarshalled Response", unmarshalledData);
    const gameResults = unmarshalledData.map(x => x.game);
    return gameResults;
  });

  return function loadGamesFromCloud(_x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ 3565:
/*!*********************************!*\
  !*** ./src/app/game.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameService": () => (/* binding */ GameService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 6151);
/* harmony import */ var _TcaCloudApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TcaCloudApi */ 5067);




let GameService = class GameService {
    constructor(storageSvc) {
        this.storageSvc = storageSvc;
        this.gameResults = [];
        this.addGameResult = (r) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.gameResults = [
                ...this.gameResults,
                r
            ];
            // await this.storage.set("gameResults", this.gameResults);
            yield (0,_TcaCloudApi__WEBPACK_IMPORTED_MODULE_0__.saveGameToCloud)(this.emailAddress, "tca-foo-angular-ionic", r.end, r);
        });
        this.getUniquePlayers = () => ([...new Set(this.gameResults.flatMap(x => x.players.map(y => y.name)))]);
        this.currentGame = {
            start: "",
            availablePlayers: []
        };
        this.setCurrentGame = (g) => {
            this.currentGame = g;
        };
        this.calculateShortestGame = () => (Math.min(...this.gameResults.map(x => Date.parse(x.end) - Date.parse(x.start))));
        this.calculateLeaderboard = () => {
            return this.getUniquePlayers().map(x => {
                const userGamesPlayed = this.gameResults.filter(y => y.players.some(z => z.name === x));
                const userGamesWon = userGamesPlayed.filter(y => y.winner === x);
                return {
                    name: x,
                    wins: userGamesWon.length,
                    losses: userGamesPlayed.length - userGamesWon.length,
                    winningPercent: (userGamesWon.length / userGamesPlayed.length).toFixed(3)
                };
            }).sort((a, b) => a.winningPercent > b.winningPercent ? -1 : 1);
        };
        this.storage = undefined;
        this.init = () => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            var _a, _b;
            this.storage = yield this.storageSvc.create();
            this.emailAddress = (_a = yield this.storage.get("email")) !== null && _a !== void 0 ? _a : "";
            if (this.emailAddress.length > 0) {
                this.gameResults = (_b = yield (0,_TcaCloudApi__WEBPACK_IMPORTED_MODULE_0__.loadGamesFromCloud)(this.emailAddress, "tca-foo-angular-ionic")) !== null && _b !== void 0 ? _b : [];
            }
        });
        this.emailAddress = "";
        this.updateEmail = (newEmailAddress) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.emailAddress = yield this.storage.set('email', newEmailAddress);
            this.init();
        });
        this.init();
    }
};
GameService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
GameService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], GameService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_game_service_ts.js.map