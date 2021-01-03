(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Cda":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/compote-list/compote-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-accordion>\n  <mat-expansion-panel *ngFor=\"let compote of compotes$ | async; let index = index; trackBy: trackByIndex\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        #{{index + 1}}\n      </mat-panel-title>\n      <mat-panel-description>\n        {{(names$ | async)[index]}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <ng-template matExpansionPanelContent>\n      <app-compote\n        [compote]=\"compote\"\n        [name]=\"(names$ | async)[index]\"\n        [soils]=\"soils$ | async\"\n        (compoteDailyChange)=\"onDailyChange(index, $event)\"\n        (nameChange)=\"onNameChange(index, $event)\"\n        (add)=\"onAddDaily(index)\"\n      ></app-compote>\n    </ng-template>\n  </mat-expansion-panel>\n</mat-accordion>\n");

/***/ }),

/***/ "+bc7":
/*!*******************************************************************!*\
  !*** ./src/app/shared/choose-dialog/choose-dialog.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-content {\n  min-height: 4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaG9vc2UtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6ImNob29zZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWluLWhlaWdodDogNGVtO1xufVxuIl19 */");

/***/ }),

/***/ "+n3R":
/*!******************************************************!*\
  !*** ./src/app/store/dashboard/dashboard.effects.ts ***!
  \******************************************************/
/*! exports provided: DashboardEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardEffects", function() { return DashboardEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _dashboard_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.reducer */ "dImw");
/* harmony import */ var _model_device_request_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/device-request-type */ "f5g5");
/* harmony import */ var _model_device_response_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/device-response-type */ "8NFJ");
/* harmony import */ var _services_storage_db_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/storage/db.service */ "iwvj");
/* harmony import */ var _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../connect/connect.reducer */ "pp5j");
/* harmony import */ var _model_date_time__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../model/date-time */ "RcPo");
/* harmony import */ var _model_device_status__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../model/device-status */ "w219");
/* harmony import */ var _config_config_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config/config.reducer */ "JAt8");














var DashboardEffects = /** @class */ (function () {
    function DashboardEffects(actions$, store, db) {
        this.actions$ = actions$;
        this.store = store;
        this.db = db;
    }
    DashboardEffects.prototype.init = function () {
        var _this = this;
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_dashboard_reducer__WEBPACK_IMPORTED_MODULE_6__["DashboardActionTypes"].INIT))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_config_config_reducer__WEBPACK_IMPORTED_MODULE_13__["selectorMonitorConfig"])); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (monitorConfig) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(monitorConfig.time.enable ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, monitorConfig.time.interval)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.getTime(); })) : rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"], monitorConfig.temp.enable ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, monitorConfig.temp.interval)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.getTemp(); })) : rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"], monitorConfig.status.enable ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, monitorConfig.status.interval)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.getStatus(); })) : rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"]); }));
    };
    DashboardEffects.prototype.updateTemp = function () {
        var _this = this;
        return this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_dashboard_reducer__WEBPACK_IMPORTED_MODULE_6__["DashboardActionTypes"].UPDATE_TEMP))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (action) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.db.logTemp(action.payload)); }));
    };
    DashboardEffects.prototype.updateStatus = function () {
        var _this = this;
        return this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_dashboard_reducer__WEBPACK_IMPORTED_MODULE_6__["DashboardActionTypes"].UPDATE_STATUS))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (action) { return action.payload.state === _model_device_status__WEBPACK_IMPORTED_MODULE_12__["DeviceState"].fertigate &&
            action.payload.cmdState === _model_device_status__WEBPACK_IMPORTED_MODULE_12__["FertigateState"].irrigate; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (action) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.db.logFlow(action.payload.flow)); }));
    };
    DashboardEffects.prototype.syncTime = function () {
        return this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_dashboard_reducer__WEBPACK_IMPORTED_MODULE_6__["DashboardActionTypes"].SYNC_TIME))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_10__["ActionConnectRequest"]({
            type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_7__["DeviceRequestType"].setTime,
            payload: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(_model_date_time__WEBPACK_IMPORTED_MODULE_11__["dateToDateTime"])(new Date())),
        }); }));
    };
    DashboardEffects.prototype.getTime = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_10__["ActionConnectRequest"]({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_7__["DeviceRequestType"].getTime, payload: { fake: 0 } })), this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_10__["ConnectActionTypes"].RESPONSE))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (action) { return action.payload.type === _model_device_response_type__WEBPACK_IMPORTED_MODULE_8__["DeviceResponseType"].time; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) {
            return new _dashboard_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionDashboardUpdateTime"](action.payload.payload);
        })));
    };
    DashboardEffects.prototype.getTemp = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_10__["ActionConnectRequest"]({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_7__["DeviceRequestType"].getTemp, payload: { fake: 0 } })), this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_10__["ConnectActionTypes"].RESPONSE))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (action) { return action.payload.type === _model_device_response_type__WEBPACK_IMPORTED_MODULE_8__["DeviceResponseType"].temp; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) {
            return new _dashboard_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionDashboardUpdateTemp"](action.payload.payload.value);
        })));
    };
    DashboardEffects.prototype.getStatus = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_10__["ActionConnectRequest"]({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_7__["DeviceRequestType"].getStatus, payload: { fake: 0 } })), this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_10__["ConnectActionTypes"].RESPONSE))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (action) { return action.payload.type === _model_device_response_type__WEBPACK_IMPORTED_MODULE_8__["DeviceResponseType"].status; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return new _dashboard_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionDashboardUpdateStatus"](action.payload.payload); })));
    };
    DashboardEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _services_storage_db_service__WEBPACK_IMPORTED_MODULE_9__["DbService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], DashboardEffects.prototype, "init", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], DashboardEffects.prototype, "updateTemp", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], DashboardEffects.prototype, "updateStatus", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], DashboardEffects.prototype, "syncTime", null);
    DashboardEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _services_storage_db_service__WEBPACK_IMPORTED_MODULE_9__["DbService"]])
    ], DashboardEffects);
    return DashboardEffects;
}());



/***/ }),

/***/ "+tiT":
/*!************************************************************************************!*\
  !*** ./src/app/components/access-control/camshot-slider/camshot-slider.service.ts ***!
  \************************************************************************************/
/*! exports provided: CamshotSliderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamshotSliderService", function() { return CamshotSliderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _camshot_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camshot-slider.component */ "55n1");




var CamshotSliderService = /** @class */ (function () {
    function CamshotSliderService(dialog) {
        this.dialog = dialog;
    }
    CamshotSliderService.prototype.show = function (key) {
        var dialogRef = this.dialog.open(_camshot_slider_component__WEBPACK_IMPORTED_MODULE_3__["CamshotSliderComponent"], { data: { key: key }, width: '100vw', height: '100vh' });
        return dialogRef.afterClosed();
    };
    CamshotSliderService.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    CamshotSliderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CamshotSliderService);
    return CamshotSliderService;
}());



/***/ }),

/***/ "/41K":
/*!*****************************************!*\
  !*** ./src/app/pipes/date-time.pipe.ts ***!
  \*****************************************/
/*! exports provided: DateTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePipe", function() { return DateTimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var DateTimePipe = /** @class */ (function () {
    function DateTimePipe() {
    }
    DateTimePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return 1970 + value.year + "-" + ('0' + value.month).slice(-2) + "-" + ('0' + value.day).slice(-2) + " " + ('0' + value.hour).slice(-2) + ":" + ('0' + value.minute).slice(-2) + ":" + ('0' + value.second).slice(-2);
    };
    DateTimePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'dateTime',
            pure: true,
        })
    ], DateTimePipe);
    return DateTimePipe;
}());



/***/ }),

/***/ "/9c2":
/*!**********************************************************************!*\
  !*** ./src/app/components/settings/pump-list/pump-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: PumpListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PumpListComponent", function() { return PumpListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pump_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pump-list.component.html */ "Iyny");
/* harmony import */ var _pump_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pump-list.component.scss */ "uafK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/settings/settings.reducer */ "inRq");






var PumpListComponent = /** @class */ (function () {
    function PumpListComponent(store) {
        this.store = store;
        this.pumps$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorPumps"]));
        this.names$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(Object(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorNames"])('pump')));
    }
    PumpListComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsLoadPump"]());
    };
    PumpListComponent.prototype.onNameChange = function (index, value) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsChangeName"]({ key: 'pump', index: index, value: value }));
    };
    PumpListComponent.prototype.onChange = function (index, value) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsChangePump"]({ index: index, value: value }));
    };
    PumpListComponent.prototype.onRemove = function (index) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsRemovePump"](index));
    };
    PumpListComponent.prototype.trackByIndex = function (index, item) {
        return index;
    };
    PumpListComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    PumpListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-pump-list',
            template: _raw_loader_pump_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_pump_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], PumpListComponent);
    return PumpListComponent;
}());



/***/ }),

/***/ "/KoW":
/*!*****************************************************************!*\
  !*** ./src/app/platform/android/android-permissions.service.ts ***!
  \*****************************************************************/
/*! exports provided: AndroidPermissions, AndroidPermissionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndroidPermissions", function() { return AndroidPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndroidPermissionsService", function() { return AndroidPermissionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var AndroidPermissions;
(function (AndroidPermissions) {
    AndroidPermissions["ACCESS_CHECKIN_PROPERTIES"] = "android.permission.ACCESS_CHECKIN_PROPERTIES";
    AndroidPermissions["ACCESS_COARSE_LOCATION"] = "android.permission.ACCESS_COARSE_LOCATION";
    AndroidPermissions["ACCESS_FINE_LOCATION"] = "android.permission.ACCESS_FINE_LOCATION";
    AndroidPermissions["ACCESS_LOCATION_EXTRA_COMMANDS"] = "android.permission.ACCESS_LOCATION_EXTRA_COMMANDS";
    AndroidPermissions["ACCESS_MOCK_LOCATION"] = "android.permission.ACCESS_MOCK_LOCATION";
    AndroidPermissions["ACCESS_NETWORK_STATE"] = "android.permission.ACCESS_NETWORK_STATE";
    AndroidPermissions["ACCESS_SURFACE_FLINGER"] = "android.permission.ACCESS_SURFACE_FLINGER";
    AndroidPermissions["ACCESS_WIFI_STATE"] = "android.permission.ACCESS_WIFI_STATE";
    AndroidPermissions["ACCOUNT_MANAGER"] = "android.permission.ACCOUNT_MANAGER";
    AndroidPermissions["ADD_VOICEMAIL"] = "com.android.voicemail.permission.ADD_VOICEMAIL";
    AndroidPermissions["AUTHENTICATE_ACCOUNTS"] = "android.permission.AUTHENTICATE_ACCOUNTS";
    AndroidPermissions["BATTERY_STATS"] = "android.permission.BATTERY_STATS";
    AndroidPermissions["BIND_ACCESSIBILITY_SERVICE"] = "android.permission.BIND_ACCESSIBILITY_SERVICE";
    AndroidPermissions["BIND_APPWIDGET"] = "android.permission.BIND_APPWIDGET";
    AndroidPermissions["BIND_CARRIER_MESSAGING_SERVICE"] = "android.permission.BIND_CARRIER_MESSAGING_SERVICE";
    AndroidPermissions["BIND_DEVICE_ADMIN"] = "android.permission.BIND_DEVICE_ADMIN";
    AndroidPermissions["BIND_DREAM_SERVICE"] = "android.permission.BIND_DREAM_SERVICE";
    AndroidPermissions["BIND_INPUT_METHOD"] = "android.permission.BIND_INPUT_METHOD";
    AndroidPermissions["BIND_NFC_SERVICE"] = "android.permission.BIND_NFC_SERVICE";
    AndroidPermissions["BIND_NOTIFICATION_LISTENER_SERVICE"] = "android.permission.BIND_NOTIFICATION_LISTENER_SERVICE";
    AndroidPermissions["BIND_PRINT_SERVICE"] = "android.permission.BIND_PRINT_SERVICE";
    AndroidPermissions["BIND_REMOTEVIEWS"] = "android.permission.BIND_REMOTEVIEWS";
    AndroidPermissions["BIND_TEXT_SERVICE"] = "android.permission.BIND_TEXT_SERVICE";
    AndroidPermissions["BIND_TV_INPUT"] = "android.permission.BIND_TV_INPUT";
    AndroidPermissions["BIND_VOICE_INTERACTION"] = "android.permission.BIND_VOICE_INTERACTION";
    AndroidPermissions["BIND_VPN_SERVICE"] = "android.permission.BIND_VPN_SERVICE";
    AndroidPermissions["BIND_WALLPAPER"] = "android.permission.BIND_WALLPAPER";
    AndroidPermissions["BLUETOOTH"] = "android.permission.BLUETOOTH";
    AndroidPermissions["BLUETOOTH_ADMIN"] = "android.permission.BLUETOOTH_ADMIN";
    AndroidPermissions["BLUETOOTH_PRIVILEGED"] = "android.permission.BLUETOOTH_PRIVILEGED";
    AndroidPermissions["BODY_SENSORS"] = "android.permission.BODY_SENSORS";
    AndroidPermissions["BRICK"] = "android.permission.BRICK";
    AndroidPermissions["BROADCAST_PACKAGE_REMOVED"] = "android.permission.BROADCAST_PACKAGE_REMOVED";
    AndroidPermissions["BROADCAST_SMS"] = "android.permission.BROADCAST_SMS";
    AndroidPermissions["BROADCAST_STICKY"] = "android.permission.BROADCAST_STICKY";
    AndroidPermissions["BROADCAST_WAP_PUSH"] = "android.permission.BROADCAST_WAP_PUSH";
    AndroidPermissions["CALL_PHONE"] = "android.permission.CALL_PHONE";
    AndroidPermissions["CALL_PRIVILEGED"] = "android.permission.CALL_PRIVILEGED";
    AndroidPermissions["CAMERA"] = "android.permission.CAMERA";
    AndroidPermissions["CAPTURE_AUDIO_OUTPUT"] = "android.permission.CAPTURE_AUDIO_OUTPUT";
    AndroidPermissions["CAPTURE_SECURE_VIDEO_OUTPUT"] = "android.permission.CAPTURE_SECURE_VIDEO_OUTPUT";
    AndroidPermissions["CAPTURE_VIDEO_OUTPUT"] = "android.permission.CAPTURE_VIDEO_OUTPUT";
    AndroidPermissions["CHANGE_COMPONENT_ENABLED_STATE"] = "android.permission.CHANGE_COMPONENT_ENABLED_STATE";
    AndroidPermissions["CHANGE_CONFIGURATION"] = "android.permission.CHANGE_CONFIGURATION";
    AndroidPermissions["CHANGE_NETWORK_STATE"] = "android.permission.CHANGE_NETWORK_STATE";
    AndroidPermissions["CHANGE_WIFI_MULTICAST_STATE"] = "android.permission.CHANGE_WIFI_MULTICAST_STATE";
    AndroidPermissions["CHANGE_WIFI_STATE"] = "android.permission.CHANGE_WIFI_STATE";
    AndroidPermissions["CLEAR_APP_CACHE"] = "android.permission.CLEAR_APP_CACHE";
    AndroidPermissions["CLEAR_APP_USER_DATA"] = "android.permission.CLEAR_APP_USER_DATA";
    AndroidPermissions["CONTROL_LOCATION_UPDATES"] = "android.permission.CONTROL_LOCATION_UPDATES";
    AndroidPermissions["DELETE_CACHE_FILES"] = "android.permission.DELETE_CACHE_FILES";
    AndroidPermissions["DELETE_PACKAGES"] = "android.permission.DELETE_PACKAGES";
    AndroidPermissions["DEVICE_POWER"] = "android.permission.DEVICE_POWER";
    AndroidPermissions["DIAGNOSTIC"] = "android.permission.DIAGNOSTIC";
    AndroidPermissions["DISABLE_KEYGUARD"] = "android.permission.DISABLE_KEYGUARD";
    AndroidPermissions["DUMP"] = "android.permission.DUMP";
    AndroidPermissions["EXPAND_STATUS_BAR"] = "android.permission.EXPAND_STATUS_BAR";
    AndroidPermissions["FACTORY_TEST"] = "android.permission.FACTORY_TEST";
    AndroidPermissions["FLASHLIGHT"] = "android.permission.FLASHLIGHT";
    AndroidPermissions["FORCE_BACK"] = "android.permission.FORCE_BACK";
    AndroidPermissions["GET_ACCOUNTS"] = "android.permission.GET_ACCOUNTS";
    AndroidPermissions["GET_PACKAGE_SIZE"] = "android.permission.GET_PACKAGE_SIZE";
    AndroidPermissions["GET_TASKS"] = "android.permission.GET_TASKS";
    AndroidPermissions["GET_TOP_ACTIVITY_INFO"] = "android.permission.GET_TOP_ACTIVITY_INFO";
    AndroidPermissions["GLOBAL_SEARCH"] = "android.permission.GLOBAL_SEARCH";
    AndroidPermissions["HARDWARE_TEST"] = "android.permission.HARDWARE_TEST";
    AndroidPermissions["INJECT_EVENTS"] = "android.permission.INJECT_EVENTS";
    AndroidPermissions["INSTALL_LOCATION_PROVIDER"] = "android.permission.INSTALL_LOCATION_PROVIDER";
    AndroidPermissions["INSTALL_PACKAGES"] = "android.permission.INSTALL_PACKAGES";
    AndroidPermissions["INSTALL_SHORTCUT"] = "com.android.launcher.permission.INSTALL_SHORTCUT";
    AndroidPermissions["INTERNAL_SYSTEM_WINDOW"] = "android.permission.INTERNAL_SYSTEM_WINDOW";
    AndroidPermissions["INTERNET"] = "android.permission.INTERNET";
    AndroidPermissions["KILL_BACKGROUND_PROCESSES"] = "android.permission.KILL_BACKGROUND_PROCESSES";
    AndroidPermissions["LOCATION_HARDWARE"] = "android.permission.LOCATION_HARDWARE";
    AndroidPermissions["MANAGE_ACCOUNTS"] = "android.permission.MANAGE_ACCOUNTS";
    AndroidPermissions["MANAGE_APP_TOKENS"] = "android.permission.MANAGE_APP_TOKENS";
    AndroidPermissions["MANAGE_DOCUMENTS"] = "android.permission.MANAGE_DOCUMENTS";
    AndroidPermissions["MASTER_CLEAR"] = "android.permission.MASTER_CLEAR";
    AndroidPermissions["MEDIA_CONTENT_CONTROL"] = "android.permission.MEDIA_CONTENT_CONTROL";
    AndroidPermissions["MODIFY_AUDIO_SETTINGS"] = "android.permission.MODIFY_AUDIO_SETTINGS";
    AndroidPermissions["MODIFY_PHONE_STATE"] = "android.permission.MODIFY_PHONE_STATE";
    AndroidPermissions["MOUNT_FORMAT_FILESYSTEMS"] = "android.permission.MOUNT_FORMAT_FILESYSTEMS";
    AndroidPermissions["MOUNT_UNMOUNT_FILESYSTEMS"] = "android.permission.MOUNT_UNMOUNT_FILESYSTEMS";
    AndroidPermissions["NFC"] = "android.permission.NFC";
    AndroidPermissions["PERSISTENT_ACTIVITY"] = "android.permission.PERSISTENT_ACTIVITY";
    AndroidPermissions["PROCESS_OUTGOING_CALLS"] = "android.permission.PROCESS_OUTGOING_CALLS";
    AndroidPermissions["READ_CALENDAR"] = "android.permission.READ_CALENDAR";
    AndroidPermissions["READ_CALL_LOG"] = "android.permission.READ_CALL_LOG";
    AndroidPermissions["READ_CONTACTS"] = "android.permission.READ_CONTACTS";
    AndroidPermissions["READ_EXTERNAL_STORAGE"] = "android.permission.READ_EXTERNAL_STORAGE";
    AndroidPermissions["READ_FRAME_BUFFER"] = "android.permission.READ_FRAME_BUFFER";
    AndroidPermissions["READ_HISTORY_BOOKMARKS"] = "com.android.browser.permission.READ_HISTORY_BOOKMARKS";
    AndroidPermissions["READ_INPUT_STATE"] = "android.permission.READ_INPUT_STATE";
    AndroidPermissions["READ_LOGS"] = "android.permission.READ_LOGS";
    AndroidPermissions["READ_PHONE_STATE"] = "android.permission.READ_PHONE_STATE";
    AndroidPermissions["READ_PROFILE"] = "android.permission.READ_PROFILE";
    AndroidPermissions["READ_SMS"] = "android.permission.READ_SMS";
    AndroidPermissions["READ_SOCIAL_STREAM"] = "android.permission.READ_SOCIAL_STREAM";
    AndroidPermissions["READ_SYNC_SETTINGS"] = "android.permission.READ_SYNC_SETTINGS";
    AndroidPermissions["READ_SYNC_STATS"] = "android.permission.READ_SYNC_STATS";
    AndroidPermissions["READ_USER_DICTIONARY"] = "android.permission.READ_USER_DICTIONARY";
    AndroidPermissions["READ_VOICEMAIL"] = "com.android.voicemail.permission.READ_VOICEMAIL";
    AndroidPermissions["REBOOT"] = "android.permission.REBOOT";
    AndroidPermissions["RECEIVE_BOOT_COMPLETED"] = "android.permission.RECEIVE_BOOT_COMPLETED";
    AndroidPermissions["RECEIVE_MMS"] = "android.permission.RECEIVE_MMS";
    AndroidPermissions["RECEIVE_SMS"] = "android.permission.RECEIVE_SMS";
    AndroidPermissions["RECEIVE_WAP_PUSH"] = "android.permission.RECEIVE_WAP_PUSH";
    AndroidPermissions["RECORD_AUDIO"] = "android.permission.RECORD_AUDIO";
    AndroidPermissions["REORDER_TASKS"] = "android.permission.REORDER_TASKS";
    AndroidPermissions["RESTART_PACKAGES"] = "android.permission.RESTART_PACKAGES";
    AndroidPermissions["SEND_RESPOND_VIA_MESSAGE"] = "android.permission.SEND_RESPOND_VIA_MESSAGE";
    AndroidPermissions["SEND_SMS"] = "android.permission.SEND_SMS";
    AndroidPermissions["SET_ACTIVITY_WATCHER"] = "android.permission.SET_ACTIVITY_WATCHER";
    AndroidPermissions["SET_ALARM"] = "com.android.alarm.permission.SET_ALARM";
    AndroidPermissions["SET_ALWAYS_FINISH"] = "android.permission.SET_ALWAYS_FINISH";
    AndroidPermissions["SET_ANIMATION_SCALE"] = "android.permission.SET_ANIMATION_SCALE";
    AndroidPermissions["SET_DEBUG_APP"] = "android.permission.SET_DEBUG_APP";
    AndroidPermissions["SET_ORIENTATION"] = "android.permission.SET_ORIENTATION";
    AndroidPermissions["SET_POINTER_SPEED"] = "android.permission.SET_POINTER_SPEED";
    AndroidPermissions["SET_PREFERRED_APPLICATIONS"] = "android.permission.SET_PREFERRED_APPLICATIONS";
    AndroidPermissions["SET_PROCESS_LIMIT"] = "android.permission.SET_PROCESS_LIMIT";
    AndroidPermissions["SET_TIME"] = "android.permission.SET_TIME";
    AndroidPermissions["SET_TIME_ZONE"] = "android.permission.SET_TIME_ZONE";
    AndroidPermissions["SET_WALLPAPER"] = "android.permission.SET_WALLPAPER";
    AndroidPermissions["SET_WALLPAPER_HINTS"] = "android.permission.SET_WALLPAPER_HINTS";
    AndroidPermissions["SIGNAL_PERSISTENT_PROCESSES"] = "android.permission.SIGNAL_PERSISTENT_PROCESSES";
    AndroidPermissions["STATUS_BAR"] = "android.permission.STATUS_BAR";
    AndroidPermissions["SUBSCRIBED_FEEDS_READ"] = "android.permission.SUBSCRIBED_FEEDS_READ";
    AndroidPermissions["SUBSCRIBED_FEEDS_WRITE"] = "android.permission.SUBSCRIBED_FEEDS_WRITE";
    AndroidPermissions["SYSTEM_ALERT_WINDOW"] = "android.permission.SYSTEM_ALERT_WINDOW";
    AndroidPermissions["TRANSMIT_IR"] = "android.permission.TRANSMIT_IR";
    AndroidPermissions["UNINSTALL_SHORTCUT"] = "com.android.launcher.permission.UNINSTALL_SHORTCUT";
    AndroidPermissions["UPDATE_DEVICE_STATS"] = "android.permission.UPDATE_DEVICE_STATS";
    AndroidPermissions["USE_CREDENTIALS"] = "android.permission.USE_CREDENTIALS";
    AndroidPermissions["USE_SIP"] = "android.permission.USE_SIP";
    AndroidPermissions["VIBRATE"] = "android.permission.VIBRATE";
    AndroidPermissions["WAKE_LOCK"] = "android.permission.WAKE_LOCK";
    AndroidPermissions["WRITE_APN_SETTINGS"] = "android.permission.WRITE_APN_SETTINGS";
    AndroidPermissions["WRITE_CALENDAR"] = "android.permission.WRITE_CALENDAR";
    AndroidPermissions["WRITE_CALL_LOG"] = "android.permission.WRITE_CALL_LOG";
    AndroidPermissions["WRITE_CONTACTS"] = "android.permission.WRITE_CONTACTS";
    AndroidPermissions["WRITE_EXTERNAL_STORAGE"] = "android.permission.WRITE_EXTERNAL_STORAGE";
    AndroidPermissions["WRITE_GSERVICES"] = "android.permission.WRITE_GSERVICES";
    AndroidPermissions["WRITE_HISTORY_BOOKMARKS"] = "com.android.browser.permission.WRITE_HISTORY_BOOKMARKS";
    AndroidPermissions["WRITE_PROFILE"] = "android.permission.WRITE_PROFILE";
    AndroidPermissions["WRITE_SECURE_SETTINGS"] = "android.permission.WRITE_SECURE_SETTINGS";
    AndroidPermissions["WRITE_SETTINGS"] = "android.permission.WRITE_SETTINGS";
    AndroidPermissions["WRITE_SMS"] = "android.permission.WRITE_SMS";
    AndroidPermissions["WRITE_SOCIAL_STREAM"] = "android.permission.WRITE_SOCIAL_STREAM";
    AndroidPermissions["WRITE_SYNC_SETTINGS"] = "android.permission.WRITE_SYNC_SETTINGS";
    AndroidPermissions["WRITE_USER_DICTIONARY"] = "android.permission.WRITE_USER_DICTIONARY";
    AndroidPermissions["WRITE_VOICEMAIL"] = "com.android.voicemail.permission.WRITE_VOICEMAIL";
})(AndroidPermissions || (AndroidPermissions = {}));
/**
 * Android Permissions
 */
var AndroidPermissionsService = /** @class */ (function () {
    function AndroidPermissionsService() {
        // console.log((window as any).plugins, (window as any).cordova, (window as any).cordova.plugins);
        this.plugin = window.cordova.plugins.permissions;
    }
    /**
     * Check permission
     * @param permission The name of the permission
     * @return Returns a promise
     */
    AndroidPermissionsService.prototype.checkPermission = function (permission) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.plugin.hasPermission(permission, function (results) {
                resolve(results[permission]);
            }, reject);
        });
    };
    /**
     * Request permission
     * @param permission The name of the permission to request
     * @return Returns a promise
     */
    AndroidPermissionsService.prototype.requestPermission = function (permission) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.plugin.requestPermission(permission, function (results) {
                resolve(results.hasPermission);
            }, reject);
        });
    };
    /**
     * Request permissions
     * @param permissions An array with permissions
     * @return Returns a promise
     */
    AndroidPermissionsService.prototype.requestPermissions = function (permissions) {
        return null;
    };
    AndroidPermissionsService.ctorParameters = function () { return []; };
    AndroidPermissionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AndroidPermissionsService);
    return AndroidPermissionsService;
}());



/***/ }),

/***/ "/OAK":
/*!****************************************************************!*\
  !*** ./src/app/components/settings/settings-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "1U8w");
/* harmony import */ var _compote_list_compote_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compote-list/compote-list.component */ "wE9O");
/* harmony import */ var _program_list_program_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./program-list/program-list.component */ "DxkL");
/* harmony import */ var _pump_list_pump_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pump-list/pump-list.component */ "/9c2");
/* harmony import */ var _dose_list_dose_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dose-list/dose-list.component */ "8eVM");
/* harmony import */ var _schedule_list_schedule_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schedule-list/schedule-list.component */ "rIn5");
/* harmony import */ var _timer_list_timer_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./timer-list/timer-list.component */ "Y+EC");
/* harmony import */ var _mixer_list_mixer_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mixer-list/mixer-list.component */ "je1Z");
/* harmony import */ var _pin_assignment_pin_assignment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pin-assignment/pin-assignment.component */ "Yw+w");












var routes = [
    {
        path: 'settings',
        children: [
            {
                path: '',
                component: _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"],
                pathMatch: 'full',
                data: {
                    title: 'Settings',
                    actions: ['menu', 'bt', 'sync'],
                },
            },
            {
                path: 'compote',
                component: _compote_list_compote_list_component__WEBPACK_IMPORTED_MODULE_4__["CompoteListComponent"],
                data: {
                    title: 'Compote',
                    actions: ['back', 'sync'],
                },
            },
            {
                path: 'program',
                component: _program_list_program_list_component__WEBPACK_IMPORTED_MODULE_5__["ProgramListComponent"],
                data: {
                    title: 'Program',
                    actions: ['back', 'sync'],
                },
            },
            {
                path: 'pump',
                component: _pump_list_pump_list_component__WEBPACK_IMPORTED_MODULE_6__["PumpListComponent"],
                data: {
                    title: 'Pump',
                    actions: ['back', 'sync'],
                },
            },
            {
                path: 'dose',
                component: _dose_list_dose_list_component__WEBPACK_IMPORTED_MODULE_7__["DoseListComponent"],
                data: {
                    title: 'Dose',
                    actions: ['back', 'sync'],
                },
            },
            {
                path: 'mixer',
                component: _mixer_list_mixer_list_component__WEBPACK_IMPORTED_MODULE_10__["MixerListComponent"],
                data: {
                    title: 'Mixer',
                    actions: ['back', 'sync'],
                },
            },
            {
                path: 'timer',
                component: _timer_list_timer_list_component__WEBPACK_IMPORTED_MODULE_9__["TimerListComponent"],
                data: {
                    title: 'Timer',
                    actions: ['back', 'sync'],
                },
            },
            {
                path: 'schedule',
                component: _schedule_list_schedule_list_component__WEBPACK_IMPORTED_MODULE_8__["ScheduleListComponent"],
                data: {
                    title: 'Schedule',
                    actions: ['back', 'sync'],
                },
            },
            {
                path: 'pin-assignment',
                component: _pin_assignment_pin_assignment_component__WEBPACK_IMPORTED_MODULE_11__["PinAssignmentComponent"],
                data: {
                    title: 'Pin Assignment',
                    actions: ['back', 'sync'],
                },
            },
        ],
    },
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\www\grow-control\src\main.ts */"zUnb");


/***/ }),

/***/ "02t3":
/*!********************************************************!*\
  !*** ./src/app/components/settings/settings.module.ts ***!
  \********************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "1U8w");
/* harmony import */ var _compote_list_compote_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compote-list/compote-list.module */ "kLPo");
/* harmony import */ var _program_list_program_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./program-list/program-list.module */ "ayZw");
/* harmony import */ var _shared_page_page_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/page/page.module */ "IQGA");
/* harmony import */ var _dose_list_dose_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dose-list/dose-list.module */ "NLeb");
/* harmony import */ var _pump_list_pump_list_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pump-list/pump-list.module */ "Fd/N");
/* harmony import */ var _timer_list_timer_list_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./timer-list/timer-list.module */ "zxSY");
/* harmony import */ var _schedule_list_schedule_list_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./schedule-list/schedule-list.module */ "Cu+V");
/* harmony import */ var _mixer_list_mixer_list_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mixer-list/mixer-list.module */ "MZQL");
/* harmony import */ var _pin_assignment_pin_assignment_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pin-assignment/pin-assignment.module */ "fGFP");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings-routing.module */ "/OAK");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
















var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]],
            exports: [_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_13__["SettingsRoutingModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _shared_page_page_module__WEBPACK_IMPORTED_MODULE_6__["PageModule"],
                _compote_list_compote_list_module__WEBPACK_IMPORTED_MODULE_4__["CompoteListModule"],
                _program_list_program_list_module__WEBPACK_IMPORTED_MODULE_5__["ProgramListModule"],
                _dose_list_dose_list_module__WEBPACK_IMPORTED_MODULE_7__["DoseListModule"],
                _pump_list_pump_list_module__WEBPACK_IMPORTED_MODULE_8__["PumpListModule"],
                _timer_list_timer_list_module__WEBPACK_IMPORTED_MODULE_9__["TimerListModule"],
                _schedule_list_schedule_list_module__WEBPACK_IMPORTED_MODULE_10__["ScheduleListModule"],
                _mixer_list_mixer_list_module__WEBPACK_IMPORTED_MODULE_11__["MixerListModule"],
                _pin_assignment_pin_assignment_module__WEBPACK_IMPORTED_MODULE_12__["PinAssignmentModule"],
            ],
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "0aP2":
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboard/status/status.component.ts ***!
  \*****************************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_status_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./status.component.html */ "2NEv");
/* harmony import */ var _status_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status.component.scss */ "4yGp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_device_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/device-status */ "w219");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/connect/connect.reducer */ "pp5j");
/* harmony import */ var _model_device_request_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../model/device-request-type */ "f5g5");








var StatusComponent = /** @class */ (function () {
    function StatusComponent(store) {
        this.store = store;
        this.DeviceState = _model_device_status__WEBPACK_IMPORTED_MODULE_4__["DeviceState"];
        this.FertigateState = _model_device_status__WEBPACK_IMPORTED_MODULE_4__["FertigateState"];
    }
    StatusComponent.prototype.ngOnInit = function () {
    };
    StatusComponent.prototype.onReset = function () {
        this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectRequest"]({
            type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_7__["DeviceRequestType"].resetError,
            payload: { fake: 0 },
        }));
    };
    StatusComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
    ]; };
    StatusComponent.propDecorators = {
        status: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    StatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-status',
            template: _raw_loader_status_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_status_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "1E7G":
/*!************************************************************!*\
  !*** ./src/app/components/config/config-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ConfigRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigRoutingModule", function() { return ConfigRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_config_config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/config/config.component */ "H1XW");




var routes = [
    {
        path: 'config',
        component: _components_config_config_component__WEBPACK_IMPORTED_MODULE_3__["ConfigComponent"],
        data: {
            title: 'Config',
            actions: ['back', 'sync'],
        },
    },
];
var ConfigRoutingModule = /** @class */ (function () {
    function ConfigRoutingModule() {
    }
    ConfigRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ConfigRoutingModule);
    return ConfigRoutingModule;
}());



/***/ }),

/***/ "1KVV":
/*!************************************************************************!*\
  !*** ./src/app/components/settings/dose-list/dose/dose.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3NlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "1U8w":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.component.html */ "UdRf");
/* harmony import */ var _settings_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component.scss */ "47Ok");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        this.links = [
            {
                route: ['/', 'settings', 'program'],
                title: 'Program',
                icon: 'cogs',
            },
            {
                route: ['/', 'settings', 'compote'],
                title: 'Compote',
                icon: 'cup-water',
            },
            {
                route: ['/', 'settings', 'timer'],
                title: 'Timer',
                icon: 'alarm',
            },
            {
                route: ['/', 'settings', 'schedule'],
                title: 'Schedule',
                icon: 'clock-outline',
            },
            {
                route: ['/', 'settings', 'pump'],
                title: 'Pump',
                icon: 'water-pump',
            },
            {
                route: ['/', 'settings', 'dose'],
                title: 'Dose',
                icon: 'eyedropper',
            },
            {
                route: ['/', 'settings', 'mixer'],
                title: 'Mixer',
                icon: 'pinwheel',
            },
            {
                route: ['/', 'settings', 'pin-assignment'],
                title: 'Pin Assignment',
                icon: 'chip',
            },
        ];
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.ctorParameters = function () { return []; };
    SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-settings',
            template: _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_settings_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "1nh8":
/*!************************************************************************!*\
  !*** ./src/app/components/settings/pump-list/pump/pump.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdW1wLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "1tfR":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/config/database-config/database-config.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"update; else databaseSizes\">\n  <mat-progress-spinner mode=\"indeterminate\" diameter=\"58\"></mat-progress-spinner>\n</div>\n<div class=\"mt-2\">\n  <button mat-button (click)=\"updateSizes.emit()\">Update database</button>\n  <button mat-button (click)=\"onClear()\">Clear database</button>\n</div>\n<ng-template #databaseSizes>\n  <div *ngFor=\"let size of sizes\">\n    <mat-checkbox\n      [checked]=\"selection.isSelected(size.name)\"\n      (change)=\"selection.toggle(size.name)\"\n    ></mat-checkbox>\n    {{size.name}} - {{size.size | memory}} of {{size.count}} records\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "2B+R":
/*!*******************************************************************************!*\
  !*** ./src/app/components/config/select-bt-device/select-bt-device.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SelectBtDeviceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBtDeviceModule", function() { return SelectBtDeviceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _select_bt_device_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-bt-device.component */ "LT9m");
/* harmony import */ var _select_bt_device_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-bt-device.service */ "D+HV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










var SelectBtDeviceModule = /** @class */ (function () {
    function SelectBtDeviceModule() {
    }
    SelectBtDeviceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_select_bt_device_component__WEBPACK_IMPORTED_MODULE_3__["SelectBtDeviceComponent"]],
            entryComponents: [_select_bt_device_component__WEBPACK_IMPORTED_MODULE_3__["SelectBtDeviceComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
            ],
            providers: [_select_bt_device_service__WEBPACK_IMPORTED_MODULE_4__["SelectBtDeviceService"]],
        })
    ], SelectBtDeviceModule);
    return SelectBtDeviceModule;
}());



/***/ }),

/***/ "2EB/":
/*!***************************************************************************!*\
  !*** ./src/app/components/config/device-monitor/device-monitor.module.ts ***!
  \***************************************************************************/
/*! exports provided: DeviceMonitorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceMonitorModule", function() { return DeviceMonitorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _device_monitor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device-monitor.component */ "4NRq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");








var DeviceMonitorModule = /** @class */ (function () {
    function DeviceMonitorModule() {
    }
    DeviceMonitorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_device_monitor_component__WEBPACK_IMPORTED_MODULE_3__["DeviceMonitorComponent"]],
            exports: [_device_monitor_component__WEBPACK_IMPORTED_MODULE_3__["DeviceMonitorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
            ],
        })
    ], DeviceMonitorModule);
    return DeviceMonitorModule;
}());



/***/ }),

/***/ "2MVJ":
/*!***************************************************!*\
  !*** ./src/app/services/camera/camera.service.ts ***!
  \***************************************************/
/*! exports provided: CameraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraService", function() { return CameraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var CameraService = /** @class */ (function () {
    function CameraService() {
        this.constraints = {
            qvga: { width: { exact: 320 }, height: { exact: 240 } },
            vga: { width: { exact: 640 }, height: { exact: 480 } },
        };
        this.onInactive = function () {
            console.error('media loss');
        };
    }
    CameraService.prototype.start = function (resolution, videoId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var videoConstraint, video, stream, err_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        videoConstraint = this.constraints[resolution];
                        video = document.getElementById(videoId);
                        if (!video) {
                            video = document.createElement('video');
                            video.width = videoConstraint.width.exact;
                            video.height = videoConstraint.height.exact;
                        }
                        this.video = video;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, navigator.mediaDevices
                                .getUserMedia({ video: videoConstraint, audio: false })];
                    case 2:
                        stream = _a.sent();
                        video.srcObject = stream;
                        video.play();
                        this.video = video;
                        this.stream = stream;
                        // this.stream.addEventListener(this.onInactive, false);
                        return [4 /*yield*/, new Promise(function (resolve) {
                                var onVideoCanPlay = function () {
                                    video.removeEventListener('canplay', onVideoCanPlay);
                                    resolve();
                                };
                                video.addEventListener('canplay', onVideoCanPlay, false);
                            })];
                    case 3:
                        // this.stream.addEventListener(this.onInactive, false);
                        _a.sent();
                        console.log('camera ready');
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.error('Camera Error: ' + err_1.name + ' ' + err_1.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CameraService.prototype.stop = function () {
        // this.stream.removeEventListener(this.onInactive);
        if (this.video) {
            this.video.pause();
            this.video.srcObject = null;
        }
        if (this.stream) {
            this.stream.getVideoTracks()[0].stop();
        }
    };
    CameraService.ctorParameters = function () { return []; };
    CameraService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CameraService);
    return CameraService;
}());



/***/ }),

/***/ "2NEv":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/status/status.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container [ngSwitch]=\"status.state\">\n  <ng-container *ngSwitchCase=\"DeviceState.fertigate\">\n    <ng-container [ngSwitch]=\"status.cmdState\">\n      <ng-container *ngSwitchCase=\"FertigateState.pumpIn\">\n        <ng-container *ngTemplateOutlet=\"pumpIn\"></ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"FertigateState.mixDose\">\n        <mat-icon svgIcon=\"water-pump\"></mat-icon>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"FertigateState.dose\">\n        dose\n      </ng-container>\n      <ng-container *ngSwitchCase=\"FertigateState.mix\">\n        <mat-icon svgIcon=\"water-pump\"></mat-icon>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"FertigateState.irrigate\">\n        <ng-container *ngTemplateOutlet=\"pumpOut\"></ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"FertigateState.irrigateFinish\">\n        <ng-container *ngTemplateOutlet=\"pumpOut\"></ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"FertigateState.washPumpIn\">\n        <ng-container *ngTemplateOutlet=\"pumpIn\"></ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"FertigateState.washMix\">\n        <mat-icon svgIcon=\"water-pump\"></mat-icon>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"FertigateState.wash\">\n        <mat-icon svgIcon=\"water-pump\"></mat-icon>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"DeviceState.irrigate\">\n    irrigate\n    <ng-container *ngTemplateOutlet=\"pumpOut\"></ng-container>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"DeviceState.wash\">\n    wash\n    <ng-container *ngTemplateOutlet=\"pumpOut\"></ng-container>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"DeviceState.pumpIn\">\n    <ng-container *ngTemplateOutlet=\"pumpIn\"></ng-container>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"DeviceState.compote\">\n    compote\n  </ng-container>\n  <ng-container *ngSwitchCase=\"DeviceState.washCompote\">\n    washCompote\n  </ng-container>\n  <ng-container *ngSwitchCase=\"DeviceState.mixer\">\n    mixer\n  </ng-container>\n  <ng-container *ngSwitchCase=\"DeviceState.dose\">\n    dose\n  </ng-container>\n  <ng-container *ngSwitchCase=\"DeviceState.doseMixer\">\n    doseMixer\n  </ng-container>\n  <ng-container *ngSwitchCase=\"DeviceState.idle\">\n    idle\n  </ng-container>\n  <ng-container *ngSwitchCase=\"DeviceState.error\">\n    Error\n    <button type=\"button\" mat-button (click)=\"onReset()\">Reset</button>\n  </ng-container>\n  <ng-container *ngSwitchDefault>\n    Unknown\n  </ng-container>\n</ng-container>\n<ng-template #pumpIn>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <mat-icon svgIcon=\"water-pump\"></mat-icon> Pump in\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-6 text-right\">\n      Flow\n    </div>\n    <div class=\"col-6 text-left\">\n      {{status.flow | number: '1.0-0'}} mL/minute\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-6 text-right\">\n      Total volume\n    </div>\n    <div class=\"col-6 text-left\">\n      {{status.totalVolume | number: '1.0-0'}} mL\n    </div>\n  </div>\n</ng-template>\n<ng-template #pumpOut>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <mat-icon svgIcon=\"fountain\"></mat-icon> Pump out\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-6 text-right\">\n      Flow\n    </div>\n    <div class=\"col-6 text-left\">\n      {{status.flow | number: '1.0-0'}} mL/minute\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-6 text-right\">\n      Total volume\n    </div>\n    <div class=\"col-6 text-left\">\n      {{status.totalVolume | number: '1.0-0'}} mL\n    </div>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "2cSi":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/config/device-monitor/device-monitor.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-slide-toggle class=\"col-12\"\n  [checked]=\"config.enable\" (change)=\"onChange({enable: $event.checked})\">\n  Enable\n</mat-slide-toggle>\n<mat-form-field>\n  <input matInput\n    type=\"number\"\n    placeholder=\"Interval\"\n    [value]=\"config.interval\"\n    (input)=\"onChange({interval: +$event.target.value})\"\n  >\n</mat-form-field>\n");

/***/ }),

/***/ "2un1":
/*!**********************************************************************!*\
  !*** ./src/app/components/settings/pump-list/pump/pump.component.ts ***!
  \**********************************************************************/
/*! exports provided: PumpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PumpComponent", function() { return PumpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pump_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pump.component.html */ "M5AE");
/* harmony import */ var _pump_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pump.component.scss */ "1nh8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var PumpComponent = /** @class */ (function () {
    function PumpComponent() {
        this.pumpChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nameChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    PumpComponent.prototype.ngOnInit = function () {
    };
    PumpComponent.prototype.onChange = function (changes) {
        this.pumpChange.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.pump), changes));
    };
    PumpComponent.prototype.onNameChange = function (name) {
        this.nameChange.next(name);
    };
    PumpComponent.ctorParameters = function () { return []; };
    PumpComponent.propDecorators = {
        pump: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        pumpChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        nameChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    PumpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-pump',
            template: _raw_loader_pump_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_pump_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PumpComponent);
    return PumpComponent;
}());



/***/ }),

/***/ "3prO":
/*!*************************************************************************!*\
  !*** ./src/app/components/settings/timer-list/timer/timer.component.ts ***!
  \*************************************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_timer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./timer.component.html */ "9AaC");
/* harmony import */ var _timer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer.component.scss */ "xiRq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
        this.timerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nameChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    TimerComponent.prototype.ngOnInit = function () {
    };
    TimerComponent.prototype.onChange = function (changes) {
        this.timerChange.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.timer), changes));
    };
    TimerComponent.prototype.onNameChange = function (name) {
        this.nameChange.next(name);
    };
    TimerComponent.ctorParameters = function () { return []; };
    TimerComponent.propDecorators = {
        timer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        timerChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        nameChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        programs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    TimerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-timer',
            template: _raw_loader_timer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_timer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "4/X3":
/*!**************************************************!*\
  !*** ./src/app/store/monitor/monitor.effects.ts ***!
  \**************************************************/
/*! exports provided: MonitorEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorEffects", function() { return MonitorEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _monitor_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./monitor.reducer */ "iET3");
/* harmony import */ var _services_storage_db_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/storage/db.service */ "iwvj");








var MonitorEffects = /** @class */ (function () {
    function MonitorEffects(actions$, store, db) {
        this.actions$ = actions$;
        this.store = store;
        this.db = db;
    }
    MonitorEffects.prototype.init = function () {
        var _this = this;
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_monitor_reducer__WEBPACK_IMPORTED_MODULE_6__["MonitorActionTypes"].INIT))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.db.getTemp())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return new _monitor_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionMonitorUpdateTemp"](data); })), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.db.getFlow())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return new _monitor_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionMonitorUpdateFlow"](data); }))); }));
    };
    MonitorEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _services_storage_db_service__WEBPACK_IMPORTED_MODULE_7__["DbService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], MonitorEffects.prototype, "init", null);
    MonitorEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _services_storage_db_service__WEBPACK_IMPORTED_MODULE_7__["DbService"]])
    ], MonitorEffects);
    return MonitorEffects;
}());



/***/ }),

/***/ "47Ok":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "4NRq":
/*!******************************************************************************!*\
  !*** ./src/app/components/config/device-monitor/device-monitor.component.ts ***!
  \******************************************************************************/
/*! exports provided: DeviceMonitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceMonitorComponent", function() { return DeviceMonitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_device_monitor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./device-monitor.component.html */ "2cSi");
/* harmony import */ var _device_monitor_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./device-monitor.component.scss */ "k3Re");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var DeviceMonitorComponent = /** @class */ (function () {
    function DeviceMonitorComponent() {
        this.configChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    DeviceMonitorComponent.prototype.ngOnInit = function () {
    };
    DeviceMonitorComponent.prototype.onChange = function (changes) {
        this.configChange.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.config), changes));
    };
    DeviceMonitorComponent.ctorParameters = function () { return []; };
    DeviceMonitorComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        configChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    DeviceMonitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-device-monitor',
            template: _raw_loader_device_monitor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_device_monitor_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DeviceMonitorComponent);
    return DeviceMonitorComponent;
}());



/***/ }),

/***/ "4mQ/":
/*!*******************************************************************************!*\
  !*** ./src/app/components/settings/compote-list/compote/compote.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CompoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompoteComponent", function() { return CompoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_compote_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./compote.component.html */ "8y70");
/* harmony import */ var _compote_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compote.component.scss */ "rDUR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var CompoteComponent = /** @class */ (function () {
    function CompoteComponent() {
        this.compoteChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.compoteDailyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nameChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    CompoteComponent.prototype.ngOnInit = function () {
    };
    CompoteComponent.prototype.onChange = function (changes) {
        this.compoteChange.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.compote), changes));
    };
    CompoteComponent.prototype.onNameChange = function (name) {
        this.nameChange.next(name);
    };
    CompoteComponent.prototype.onDailyChange = function (index, value) {
        this.compoteDailyChange.next({ index: index, value: value });
    };
    CompoteComponent.prototype.onAdd = function () {
        this.add.emit();
    };
    CompoteComponent.prototype.trackByIndex = function (index, item) {
        return index;
    };
    CompoteComponent.ctorParameters = function () { return []; };
    CompoteComponent.propDecorators = {
        compote: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        soils: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        compoteChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        compoteDailyChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        nameChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        add: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    CompoteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-compote',
            template: _raw_loader_compote_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_compote_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CompoteComponent);
    return CompoteComponent;
}());



/***/ }),

/***/ "4yGp":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/status/status.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0dXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "5+sL":
/*!**********************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "Lquv");
/* harmony import */ var _shared_page_page_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/page/page.module */ "IQGA");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _status_status_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status/status.module */ "dkp/");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-routing.module */ "VpI2");
/* harmony import */ var _time_chart_time_chart_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./time-chart/time-chart.module */ "SCOo");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");












var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _shared_page_page_module__WEBPACK_IMPORTED_MODULE_4__["PageModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], _status_status_module__WEBPACK_IMPORTED_MODULE_6__["StatusModule"], _time_chart_time_chart_module__WEBPACK_IMPORTED_MODULE_8__["TimeChartModule"],
            ],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "55n1":
/*!**************************************************************************************!*\
  !*** ./src/app/components/access-control/camshot-slider/camshot-slider.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CamshotSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamshotSliderComponent", function() { return CamshotSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_camshot_slider_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./camshot-slider.component.html */ "I5EF");
/* harmony import */ var _camshot_slider_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camshot-slider.component.scss */ "HMNo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_storage_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/storage/db.service */ "iwvj");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");









var CamshotSliderComponent = /** @class */ (function () {
    function CamshotSliderComponent(db, cd, data, dialogRef) {
        var _this = this;
        this.db = db;
        this.dialogRef = dialogRef;
        this.keySubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.keySubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (key) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(db.getAccessControlCamshot(key))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null)); }))
            .subscribe(function (camshot) {
            _this.camshot = camshot;
            cd.markForCheck();
        });
        this.key = data.key;
    }
    Object.defineProperty(CamshotSliderComponent.prototype, "key", {
        get: function () {
            return this.keySubject.value;
        },
        set: function (value) {
            this.keySubject.next(value);
        },
        enumerable: false,
        configurable: true
    });
    CamshotSliderComponent.prototype.onKeyDown = function ($event) {
        switch ($event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["LEFT_ARROW"]:
                this.onPrev();
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["RIGHT_ARROW"]:
                this.onNext();
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["DELETE"]:
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["BACKSPACE"]:
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"]:
                break;
        }
    };
    CamshotSliderComponent.prototype.ngOnInit = function () {
    };
    CamshotSliderComponent.prototype.onPrev = function () {
        var _this = this;
        this.db.getAccessControlCamshotPrev(this.key).then(function (_a) {
            var key = _a.key, value = _a.value;
            _this.key = key;
            _this.camshot = value;
        });
    };
    CamshotSliderComponent.prototype.onNext = function () {
        var _this = this;
        this.db.getAccessControlCamshotNext(this.key).then(function (_a) {
            var key = _a.key, value = _a.value;
            _this.key = key;
            _this.camshot = value;
        });
    };
    CamshotSliderComponent.ctorParameters = function () { return [
        { type: _services_storage_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"] }
    ]; };
    CamshotSliderComponent.propDecorators = {
        key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['document:keydown', ['$event'],] }]
    };
    CamshotSliderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-camshot-slider',
            template: _raw_loader_camshot_slider_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_camshot_slider_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_storage_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"]])
    ], CamshotSliderComponent);
    return CamshotSliderComponent;
}());



/***/ }),

/***/ "56Av":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dev/access-control/dev-access-control.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>access-control works!</p>\n<canvas id=\"canvasInput\" width=\"640\" height=\"480\"></canvas>\n<canvas id=\"canvasOutput\" width=\"640\" height=\"480\"></canvas>\n");

/***/ }),

/***/ "57QP":
/*!***********************************************************!*\
  !*** ./src/app/services/storage/local-storage.service.ts ***!
  \***********************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var settingsKey = 'settings';
var configKey = 'config';
var versionKey = 'version';
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
        var version = localStorage.getItem(versionKey);
        if (version !== LocalStorageService_1.version) {
            localStorage.clear();
            localStorage.setItem(versionKey, LocalStorageService_1.version);
        }
    }
    LocalStorageService_1 = LocalStorageService;
    LocalStorageService.prototype.loadSettings = function () {
        console.log('load settings');
        var value = localStorage.getItem(settingsKey);
        if (!value) {
            return;
        }
        return JSON.parse(value);
    };
    LocalStorageService.prototype.saveSettings = function (settings) {
        console.log('save settings');
        localStorage.setItem(settingsKey, JSON.stringify(settings));
    };
    LocalStorageService.prototype.loadConfig = function () {
        console.log('load config');
        var value = localStorage.getItem(configKey);
        if (!value) {
            return;
        }
        return JSON.parse(value);
    };
    LocalStorageService.prototype.saveConfig = function (config) {
        console.log('save config');
        localStorage.setItem(configKey, JSON.stringify(config));
    };
    var LocalStorageService_1;
    LocalStorageService.version = '12';
    LocalStorageService.ctorParameters = function () { return []; };
    LocalStorageService = LocalStorageService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "5PGW":
/*!***************************************************************!*\
  !*** ./src/app/platform/android/android-bluetooth.service.ts ***!
  \***************************************************************/
/*! exports provided: AndroidBluetoothService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndroidBluetoothService", function() { return AndroidBluetoothService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _android_permissions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./android-permissions.service */ "/KoW");




var AndroidBluetoothService = /** @class */ (function () {
    function AndroidBluetoothService(permission) {
        var _this = this;
        this.permission = permission;
        this.responseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        console.log(window.plugins, window.cordova, window.cordova.plugins);
        this.plugin = bluetoothSerial;
        this.response$ = this.responseSubject.asObservable();
        this.subscribeRawData = function (data) {
            // console.log('subscribe', data);
            _this.responseSubject.next(data);
        };
    }
    AndroidBluetoothService.prototype.discover = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var success;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('discover$');
                        return [4 /*yield*/, this.permission.requestPermission(_android_permissions_service__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"].BLUETOOTH)];
                    case 1:
                        success = _a.sent();
                        if (!success) {
                            throw new Error('deny');
                        }
                        console.log(_android_permissions_service__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"].BLUETOOTH, 'OK');
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return _this.plugin.list(function (result) {
                                console.log('discover', JSON.stringify(result));
                                resolve(result);
                            }, function (error) {
                                console.log('discover', JSON.stringify(error));
                                reject(error);
                            }); })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AndroidBluetoothService.prototype.connect = function (device) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('connect$', device);
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return _this.plugin.connectInsecure(device.address, function (result) {
                                console.log('connect', JSON.stringify(result));
                                resolve();
                            }, function (error) {
                                console.log('connect', JSON.stringify(error));
                                reject(error);
                            }); })];
                    case 1:
                        _a.sent();
                        this.plugin.subscribeRawData(this.subscribeRawData);
                        return [2 /*return*/];
                }
            });
        });
    };
    AndroidBluetoothService.prototype.disconnect = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('disconnect$');
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return _this.plugin.unsubscribeRawData(function (result) {
                                console.log('unsubscribe', JSON.stringify(result));
                                resolve();
                            }, function (error) {
                                console.log('unsubscribe', JSON.stringify(error));
                                reject(error);
                            }); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return _this.plugin.disconnect(function (result) {
                                console.log('disconnect', JSON.stringify(result));
                                resolve();
                            }, function (error) {
                                console.log('disconnect', JSON.stringify(error));
                                reject(error);
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AndroidBluetoothService.prototype.send = function (data) {
        var _this = this;
        // console.log('send', data);
        return new Promise(function (resolve, reject) { return _this.plugin.write(data, function (result) {
            console.log('send success', JSON.stringify(result));
            resolve();
        }, function (error) {
            console.log('send error', JSON.stringify(error));
            reject(error);
        }); });
    };
    AndroidBluetoothService.ctorParameters = function () { return [
        { type: _android_permissions_service__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissionsService"] }
    ]; };
    AndroidBluetoothService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_android_permissions_service__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissionsService"]])
    ], AndroidBluetoothService);
    return AndroidBluetoothService;
}());



/***/ }),

/***/ "5qS8":
/*!****************************************************************************!*\
  !*** ./src/app/components/dev/access-control/dev-access-control.module.ts ***!
  \****************************************************************************/
/*! exports provided: DevAccessControlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevAccessControlModule", function() { return DevAccessControlModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dev_access_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dev-access-control.component */ "vrZN");
/* harmony import */ var _services_access_control_access_control_service_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/access-control/access-control-service.module */ "fJeO");





var DevAccessControlModule = /** @class */ (function () {
    function DevAccessControlModule() {
    }
    DevAccessControlModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dev_access_control_component__WEBPACK_IMPORTED_MODULE_3__["DevAccessControlComponent"],
            ],
            exports: [
                _dev_access_control_component__WEBPACK_IMPORTED_MODULE_3__["DevAccessControlComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _services_access_control_access_control_service_module__WEBPACK_IMPORTED_MODULE_4__["AccessControlServiceModule"],
            ],
        })
    ], DevAccessControlModule);
    return DevAccessControlModule;
}());



/***/ }),

/***/ "63DD":
/*!******************************************************!*\
  !*** ./src/app/components/log/log-routing.module.ts ***!
  \******************************************************/
/*! exports provided: LogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogRoutingModule", function() { return LogRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_log_log_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/log/log.component */ "C+iR");




var routes = [
    {
        path: 'log',
        component: _components_log_log_component__WEBPACK_IMPORTED_MODULE_3__["LogComponent"],
        data: {
            title: 'Log',
            actions: ['menu', 'bt', 'sync'],
        },
    },
];
var LogRoutingModule = /** @class */ (function () {
    function LogRoutingModule() {
    }
    LogRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LogRoutingModule);
    return LogRoutingModule;
}());



/***/ }),

/***/ "6mFi":
/*!*******************************************************************!*\
  !*** ./src/app/platform/browser/ble/browser-bluetooth.service.ts ***!
  \*******************************************************************/
/*! exports provided: BrowserBluetoothService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserBluetoothService", function() { return BrowserBluetoothService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



var BrowserBluetoothService = /** @class */ (function () {
    function BrowserBluetoothService() {
        var _this = this;
        // private serviceUUID = 0x1800; // generic_access
        // private serviceUUID = 0x1801; // generic_attribute
        // private serviceUUID = 0x180A; // device_information
        this.serviceUUID = 0xffe0; // custom serial
        // private charUUID = 0x00002a00;
        // private charUUID = 0x00002a01;
        // private charUUID = 0x00002a02;
        // private charUUID = 0x00002a04;
        this.charUUID = 0x0000ffe1;
        this.responseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ble = navigator.bluetooth || navigator.mozBluetooth;
        if (!this.ble) {
            throw new Error('Your browser does not support Smart Bluetooth. See http://caniuse.com/#search=Bluetooth for more details.');
        }
        this.response$ = this.responseSubject.asObservable();
        this.characteristicvaluechanged = function (event) {
            console.log(event);
            _this.responseSubject.next(event);
        };
        this.gattserverdisconnected = function () {
            console.log('gattserverdisconnected');
        };
    }
    /**
     * Run the discovery process.
     *
     * @param options such as filters and optional services
     * @return  Emites the value of the requested service read from the device
     */
    BrowserBluetoothService.prototype.discover = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var device, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[BLE::Info] Requesting devices with options %o', options);
                        device = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        if (!(options && options.discover)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.discoverAll()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, []];
                    case 3: return [4 /*yield*/, this.ble.requestDevice({
                            // filters: [{services: [this.serviceUUID]}],
                            optionalServices: [this.serviceUUID],
                            acceptAllDevices: true,
                        })];
                    case 4:
                        device = _a.sent();
                        console.log('[BLE::Info] Discover', device);
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error(error_1.message);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, device ? [
                            {
                                id: device.id,
                                name: device.name,
                                type: 'ble',
                                ble: device,
                            },
                        ] : []];
                }
            });
        });
    };
    BrowserBluetoothService.prototype.connect = function (device) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, _b, _c, _d, error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 6, , 7]);
                        _a = this;
                        return [4 /*yield*/, this.discover()];
                    case 1:
                        _a.device = (_e.sent())[0];
                        _b = this;
                        return [4 /*yield*/, this.device.ble.gatt.connect()];
                    case 2:
                        _b.server = _e.sent();
                        this.device.ble.addEventListener('gattserverdisconnected', this.gattserverdisconnected);
                        console.log(this.server);
                        _c = this;
                        return [4 /*yield*/, this.server.getPrimaryService(this.serviceUUID)];
                    case 3:
                        _c.service = _e.sent();
                        console.log(this.service);
                        _d = this;
                        return [4 /*yield*/, this.service.getCharacteristic(this.charUUID)];
                    case 4:
                        _d.char = _e.sent();
                        console.log(this.char);
                        this.char.addEventListener('characteristicvaluechanged', this.characteristicvaluechanged);
                        return [4 /*yield*/, this.char.startNotifications()];
                    case 5:
                        _e.sent();
                        console.log('Notifications started');
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _e.sent();
                        console.error(error_2.message);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    BrowserBluetoothService.prototype.disconnect = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('disconnect');
                        if (!this.server) {
                            return [2 /*return*/];
                        }
                        this.char.removeEventListener('characteristicvaluechanged', this.characteristicvaluechanged);
                        this.device.ble.removeEventListener('gattserverdisconnected', this.gattserverdisconnected);
                        return [4 /*yield*/, this.char.stopNotifications()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.server.disconnect()];
                    case 2:
                        _a.sent();
                        this.device = null;
                        this.service = null;
                        this.char = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    BrowserBluetoothService.prototype.send = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.char.writeValue(data)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BrowserBluetoothService.prototype.read = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, _b, _c;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = console).log;
                        _c = ['read'];
                        return [4 /*yield*/, this.char.readValue()];
                    case 1:
                        _b.apply(_a, _c.concat([_d.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    BrowserBluetoothService.prototype.discoverAll = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            function getSupportedProperties(characteristic) {
                var supportedProperties = [];
                for (var p in characteristic.properties) {
                    if (characteristic.properties[p] === true) {
                        supportedProperties.push(p.toUpperCase());
                    }
                }
                return '[' + supportedProperties.join(', ') + ']';
            }
            var server, device, services, _i, services_1, service, chars, _a, chars_1, char, _b, _c, _d, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 11, , 12]);
                        console.log('discover all');
                        return [4 /*yield*/, this.ble.requestDevice({
                                acceptAllDevices: true,
                                optionalServices: [
                                    // 0xffe0,
                                    0x1800,
                                ],
                            })];
                    case 1:
                        device = _e.sent();
                        console.log(device);
                        return [4 /*yield*/, device.gatt.connect()];
                    case 2:
                        server = _e.sent();
                        console.log(server);
                        return [4 /*yield*/, server.getPrimaryServices()];
                    case 3:
                        services = _e.sent();
                        console.log(services);
                        _i = 0, services_1 = services;
                        _e.label = 4;
                    case 4:
                        if (!(_i < services_1.length)) return [3 /*break*/, 10];
                        service = services_1[_i];
                        console.log(service.uuid);
                        return [4 /*yield*/, service.getCharacteristics()];
                    case 5:
                        chars = _e.sent();
                        console.log(chars);
                        _a = 0, chars_1 = chars;
                        _e.label = 6;
                    case 6:
                        if (!(_a < chars_1.length)) return [3 /*break*/, 9];
                        char = chars_1[_a];
                        console.log('\t', char.uuid, getSupportedProperties(char));
                        if (!char.properties.read) return [3 /*break*/, 8];
                        _c = (_b = console).log;
                        _d = ['\t'];
                        return [4 /*yield*/, char.readValue()];
                    case 7:
                        _c.apply(_b, _d.concat([_e.sent()]));
                        _e.label = 8;
                    case 8:
                        _a++;
                        return [3 /*break*/, 6];
                    case 9:
                        _i++;
                        return [3 /*break*/, 4];
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        e_1 = _e.sent();
                        console.error(e_1.message);
                        return [3 /*break*/, 12];
                    case 12: return [4 /*yield*/, server.disconnect()];
                    case 13:
                        _e.sent();
                        console.log('disconnected');
                        return [2 /*return*/];
                }
            });
        });
    };
    BrowserBluetoothService.ctorParameters = function () { return []; };
    BrowserBluetoothService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BrowserBluetoothService);
    return BrowserBluetoothService;
}());



/***/ }),

/***/ "7CRl":
/*!***********************************************************************!*\
  !*** ./src/app/components/access-control/camshots/camshots.module.ts ***!
  \***********************************************************************/
/*! exports provided: CamshotsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamshotsModule", function() { return CamshotsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _camshots_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camshots.component */ "zjcK");
/* harmony import */ var _camshot_camshot_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../camshot/camshot.module */ "B09h");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");






var CamshotsModule = /** @class */ (function () {
    function CamshotsModule() {
    }
    CamshotsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_camshots_component__WEBPACK_IMPORTED_MODULE_3__["CamshotsComponent"]],
            exports: [_camshots_component__WEBPACK_IMPORTED_MODULE_3__["CamshotsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                _camshot_camshot_module__WEBPACK_IMPORTED_MODULE_4__["CamshotModule"],
            ]
        })
    ], CamshotsModule);
    return CamshotsModule;
}());



/***/ }),

/***/ "7r3l":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/access-control/episode/episode.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"h-100 d-flex flex-column flex-nowrap\">\n  <div>{{episode.key | date: 'yyyy.MM.dd HH:mm:ss'}} - {{episode.value.lastKey | date: 'HH:mm:ss'}}</div>\n  <app-camshots [keys]=\"episodeKeys\" class=\"flex-fill\"></app-camshots>\n</div>\n");

/***/ }),

/***/ "8NFJ":
/*!***********************************************!*\
  !*** ./src/app/model/device-response-type.ts ***!
  \***********************************************/
/*! exports provided: DeviceResponseType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceResponseType", function() { return DeviceResponseType; });
var DeviceResponseType;
(function (DeviceResponseType) {
    DeviceResponseType[DeviceResponseType["commandSuccess"] = 0] = "commandSuccess";
    DeviceResponseType[DeviceResponseType["log"] = 1] = "log";
    DeviceResponseType[DeviceResponseType["error"] = 2] = "error";
    DeviceResponseType[DeviceResponseType["status"] = 3] = "status";
    DeviceResponseType[DeviceResponseType["program"] = 4] = "program";
    DeviceResponseType[DeviceResponseType["compoteDaily"] = 5] = "compoteDaily";
    DeviceResponseType[DeviceResponseType["schedule"] = 6] = "schedule";
    DeviceResponseType[DeviceResponseType["timer"] = 7] = "timer";
    DeviceResponseType[DeviceResponseType["pump"] = 8] = "pump";
    DeviceResponseType[DeviceResponseType["mixer"] = 9] = "mixer";
    DeviceResponseType[DeviceResponseType["dose"] = 10] = "dose";
    DeviceResponseType[DeviceResponseType["pinPump"] = 11] = "pinPump";
    DeviceResponseType[DeviceResponseType["pinFlowSensor"] = 12] = "pinFlowSensor";
    DeviceResponseType[DeviceResponseType["pinLevelSensor"] = 13] = "pinLevelSensor";
    DeviceResponseType[DeviceResponseType["pinMixer"] = 14] = "pinMixer";
    DeviceResponseType[DeviceResponseType["pinDose"] = 15] = "pinDose";
    DeviceResponseType[DeviceResponseType["pinDoseMixer"] = 16] = "pinDoseMixer";
    DeviceResponseType[DeviceResponseType["pinValve"] = 17] = "pinValve";
    DeviceResponseType[DeviceResponseType["time"] = 18] = "time";
    DeviceResponseType[DeviceResponseType["temp"] = 19] = "temp";
    DeviceResponseType[DeviceResponseType["statePump"] = 20] = "statePump";
    DeviceResponseType[DeviceResponseType["stateValve"] = 21] = "stateValve";
    DeviceResponseType[DeviceResponseType["stateMixer"] = 22] = "stateMixer";
    DeviceResponseType[DeviceResponseType["stateDose"] = 23] = "stateDose";
    DeviceResponseType[DeviceResponseType["stateDoseMixer"] = 24] = "stateDoseMixer";
})(DeviceResponseType || (DeviceResponseType = {}));


/***/ }),

/***/ "8eVM":
/*!**********************************************************************!*\
  !*** ./src/app/components/settings/dose-list/dose-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: DoseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoseListComponent", function() { return DoseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dose_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dose-list.component.html */ "ODUb");
/* harmony import */ var _dose_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dose-list.component.scss */ "doPl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/settings/settings.reducer */ "inRq");






var DoseListComponent = /** @class */ (function () {
    function DoseListComponent(store) {
        this.store = store;
        this.doses$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorDoses"]));
        this.names$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(Object(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorNames"])('dose')));
    }
    DoseListComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsLoadDose"]());
    };
    DoseListComponent.prototype.onNameChange = function (index, value) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsChangeName"]({ key: 'dose', index: index, value: value }));
    };
    DoseListComponent.prototype.onChange = function (index, value) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsChangeDose"]({ index: index, value: value }));
    };
    DoseListComponent.prototype.onRemove = function (index) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsRemoveDose"](index));
    };
    DoseListComponent.prototype.trackByIndex = function (index, item) {
        return index;
    };
    DoseListComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    DoseListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dose-list',
            template: _raw_loader_dose_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_dose_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], DoseListComponent);
    return DoseListComponent;
}());



/***/ }),

/***/ "8y70":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/compote-list/compote/compote.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-form-field>\n    <input matInput\n      type=\"text\"\n      placeholder=\"Name\"\n      [value]=\"name\"\n      (input)=\"onNameChange($event.target.value)\"\n    >\n  </mat-form-field>\n  <mat-accordion>\n    <mat-expansion-panel *ngFor=\"let daily of compote.daily; trackBy: trackByIndex; let index = index\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          #{{index + 1}}\n        </mat-panel-title>\n        <mat-panel-description>\n          {{daily.volume}}\n          <span class=\"ml-1\">{{daily.washVolume}}</span>\n          <span *ngFor=\"let dose of daily.dose; trackBy: trackByIndex\" class=\"ml-1\">{{dose}}</span>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <ng-template matExpansionPanelContent>\n        <app-compote-daily\n          [compoteDaily]=\"daily\"\n          [soils]=\"soils\"\n          (compoteDailyChange)=\"onDailyChange(index, $event)\"\n        ></app-compote-daily>\n      </ng-template>\n    </mat-expansion-panel>\n  </mat-accordion>\n  <button mat-button (click)=\"onAdd()\">Add</button>\n</div>\n");

/***/ }),

/***/ "9AaC":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/timer-list/timer/timer.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-slide-toggle\n    class=\"col-12\"\n    [checked]=\"!!timer.enable\" (change)=\"onChange({enable: +$event.checked})\"\n  >\n    Enable\n  </mat-slide-toggle>\n  <app-day-time\n    class=\"col-12\"\n    [time]=\"timer.time\"\n    (timeChange)=\"onChange({time: $event})\"\n  >\n  </app-day-time>\n  <mat-form-field class=\"col-12\">\n    <mat-select\n      placeholder=\"Program\"\n      [value]=\"timer.program\"\n      (selectionChange)=\"onChange({program: $event.value})\"\n    >\n      <mat-option *ngFor=\"let program of programs; let index = index\" [value]=\"index\">\n        {{program || (index + 1)}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n");

/***/ }),

/***/ "9Rc6":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/settings/compote-list/compote-daily/compote-daily.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb3RlLWRhaWx5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "9pTV":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/log/log-filter/log-filter.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Log filter</h1>\n<mat-dialog-content class=\"pb-2\">\n  <div\n    *ngFor=\"let line of filter$ | async; trackBy: trackBy\"\n    [class]=\"'app-tree-padding-' + line.level\"\n    [class.d-none]=\"!line.visible\"\n  >\n    <button\n      mat-icon-button\n      (click)=\"onExpand(line)\"\n      [attr.aria-label]=\"'toggle ' + line.title\"\n      [class.invisible]=\"!line.expandable\"\n    >\n      <mat-icon class=\"mat-icon-rtl-mirror\"\n        [svgIcon]=\"line.expanded ? 'chevron-down' : 'chevron-right'\">\n      </mat-icon>\n    </button>\n    <mat-checkbox\n      [checked]=\"line.selected\"\n      [indeterminate]=\"line.selected === null\"\n      (change)=\"onSelect(line)\"\n      class=\"align-middle\"\n    >\n      {{line.title}}\n    </mat-checkbox>\n  </div>\n</mat-dialog-content>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onCancel()\" cdkFocusInitial>Cancel</button>\n  <button mat-button (click)=\"onReset()\">Reset</button>\n  <button mat-button (click)=\"onApply()\">Apply</button>\n</div>\n");

/***/ }),

/***/ "9tB1":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/program-list/program/program.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\n  <input matInput\n    placeholder=\"Name\"\n    [value]=\"name\"\n    (input)=\"onNameChange($event.target.value)\"\n  >\n</mat-form-field>\n<mat-form-field>\n  <mat-select\n    placeholder=\"Compote\"\n    [value]=\"program.compote\"\n    (selectionChange)=\"onChange({compote: $event.value})\"\n  >\n    <mat-option *ngFor=\"let compote of compotes; let index = index\" [value]=\"index\">\n      {{compote || (index + 1)}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n  <input matInput placeholder=\"Start\" [matDatepicker]=\"startDatepicker\"\n    [value]=\"program.start | dateDay\" (dateChange)=\"onChangeDate($event.value)\">\n  <mat-datepicker-toggle matSuffix [for]=\"startDatepicker\"></mat-datepicker-toggle>\n  <mat-datepicker #startDatepicker></mat-datepicker>\n</mat-form-field>\n<mat-form-field>\n  <mat-select\n    placeholder=\"Valves\"\n    [value]=\"program.valves | bits\"\n    (selectionChange)=\"onChangeValves($event.value)\"\n    multiple\n  >\n    <mat-option *ngFor=\"let valve of valves\" [value]=\"valve\">\n      {{valve}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n");

/***/ }),

/***/ "A/r1":
/*!****************************************************!*\
  !*** ./src/app/components/config/config.module.ts ***!
  \****************************************************/
/*! exports provided: ConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModule", function() { return ConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.component */ "H1XW");
/* harmony import */ var _select_bt_device_select_bt_device_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-bt-device/select-bt-device.module */ "2B+R");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _monitor_config_monitor_config_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./monitor-config/monitor-config.module */ "hogY");
/* harmony import */ var _config_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config-routing.module */ "1E7G");
/* harmony import */ var _access_control_config_access_control_config_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./access-control-config/access-control-config.module */ "sGxu");
/* harmony import */ var _database_config_database_config_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./database-config/database-config.module */ "BAST");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");














var ConfigModule = /** @class */ (function () {
    function ConfigModule() {
    }
    ConfigModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_config_component__WEBPACK_IMPORTED_MODULE_3__["ConfigComponent"]],
            exports: [_config_component__WEBPACK_IMPORTED_MODULE_3__["ConfigComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _config_routing_module__WEBPACK_IMPORTED_MODULE_7__["ConfigRoutingModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _select_bt_device_select_bt_device_module__WEBPACK_IMPORTED_MODULE_4__["SelectBtDeviceModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                _monitor_config_monitor_config_module__WEBPACK_IMPORTED_MODULE_6__["MonitorConfigModule"],
                _access_control_config_access_control_config_module__WEBPACK_IMPORTED_MODULE_8__["AccessControlConfigModule"],
                _database_config_database_config_module__WEBPACK_IMPORTED_MODULE_9__["DatabaseConfigModule"],
            ],
        })
    ], ConfigModule);
    return ConfigModule;
}());



/***/ }),

/***/ "A1jf":
/*!**********************************************************************************!*\
  !*** ./src/app/components/settings/pin-assignment/pin-assignment.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaW4tYXNzaWdubWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "A6k7":
/*!***********************************************************!*\
  !*** ./src/app/store/dashboard/dashboard-store.module.ts ***!
  \***********************************************************/
/*! exports provided: DashboardStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardStoreModule", function() { return DashboardStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _dashboard_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.reducer */ "dImw");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _dashboard_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.effects */ "+n3R");






var DashboardStoreModule = /** @class */ (function () {
    function DashboardStoreModule() {
    }
    DashboardStoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            exports: [],
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('dashboard', _dashboard_reducer__WEBPACK_IMPORTED_MODULE_3__["dashboardReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_dashboard_effects__WEBPACK_IMPORTED_MODULE_5__["DashboardEffects"]]),
            ],
        })
    ], DashboardStoreModule);
    return DashboardStoreModule;
}());



/***/ }),

/***/ "AOl3":
/*!**********************************************************!*\
  !*** ./src/app/components/calibrate/calibrate.module.ts ***!
  \**********************************************************/
/*! exports provided: CalibrateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalibrateModule", function() { return CalibrateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _calibrate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calibrate.component */ "Zwnc");
/* harmony import */ var _calibrate_dose_calibrate_dose_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calibrate-dose/calibrate-dose.module */ "Oaqo");
/* harmony import */ var _calibrate_flow_sensor_calibrate_flow_sensor_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calibrate-flow-sensor/calibrate-flow-sensor.module */ "RcLG");
/* harmony import */ var _calibrate_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calibrate-routing.module */ "Lvie");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "MutI");










var CalibrateModule = /** @class */ (function () {
    function CalibrateModule() {
    }
    CalibrateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_calibrate_component__WEBPACK_IMPORTED_MODULE_3__["CalibrateComponent"]],
            exports: [_calibrate_component__WEBPACK_IMPORTED_MODULE_3__["CalibrateComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _calibrate_routing_module__WEBPACK_IMPORTED_MODULE_6__["CalibrateRoutingModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _calibrate_flow_sensor_calibrate_flow_sensor_module__WEBPACK_IMPORTED_MODULE_5__["CalibrateFlowSensorModule"],
                _calibrate_dose_calibrate_dose_module__WEBPACK_IMPORTED_MODULE_4__["CalibrateDoseModule"],
            ],
        })
    ], CalibrateModule);
    return CalibrateModule;
}());



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
var environment = {
    production: false,
    platform: 'android',
};


/***/ }),

/***/ "B09h":
/*!*********************************************************************!*\
  !*** ./src/app/components/access-control/camshot/camshot.module.ts ***!
  \*********************************************************************/
/*! exports provided: CamshotModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamshotModule", function() { return CamshotModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _camshot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camshot.component */ "nde0");
/* harmony import */ var _camshot_slider_camshot_slider_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../camshot-slider/camshot-slider.module */ "x40G");





var CamshotModule = /** @class */ (function () {
    function CamshotModule() {
    }
    CamshotModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_camshot_component__WEBPACK_IMPORTED_MODULE_3__["CamshotComponent"]],
            exports: [_camshot_component__WEBPACK_IMPORTED_MODULE_3__["CamshotComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _camshot_slider_camshot_slider_module__WEBPACK_IMPORTED_MODULE_4__["CamshotSliderModule"],
            ]
        })
    ], CamshotModule);
    return CamshotModule;
}());



/***/ }),

/***/ "BAST":
/*!*****************************************************************************!*\
  !*** ./src/app/components/config/database-config/database-config.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DatabaseConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseConfigModule", function() { return DatabaseConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _database_config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database-config.component */ "U/d0");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








var DatabaseConfigModule = /** @class */ (function () {
    function DatabaseConfigModule() {
    }
    DatabaseConfigModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_database_config_component__WEBPACK_IMPORTED_MODULE_3__["DatabaseConfigComponent"]],
            exports: [_database_config_component__WEBPACK_IMPORTED_MODULE_3__["DatabaseConfigComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            ]
        })
    ], DatabaseConfigModule);
    return DatabaseConfigModule;
}());



/***/ }),

/***/ "BBQf":
/*!**********************************************************!*\
  !*** ./src/app/components/dev/device-simulate.sevice.ts ***!
  \**********************************************************/
/*! exports provided: DeviceSimulateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceSimulateService", function() { return DeviceSimulateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_device_response_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/device-response-type */ "8NFJ");
/* harmony import */ var _model_device_request_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/device-request-type */ "f5g5");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/connect/connect.reducer */ "pp5j");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _model_device_status__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/device-status */ "w219");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");










var DeviceSimulateService = /** @class */ (function () {
    function DeviceSimulateService(store, actions) {
        this.store = store;
        this.actions = actions;
        this.enableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](false);
    }
    DeviceSimulateService.prototype.init = function () {
        var _this = this;
        this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ConnectActionTypes"].REQUEST))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["withLatestFrom"])(this.enableSubject.asObservable()))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (_a) {
            var request = _a[0], enable = _a[1];
            return enable;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (_a) {
            var request = _a[0], enable = _a[1];
            return request.payload;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (request) {
            if (request.type === _model_device_request_type__WEBPACK_IMPORTED_MODULE_3__["DeviceRequestType"].getTemp) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectResponse"]({
                    type: _model_device_response_type__WEBPACK_IMPORTED_MODULE_2__["DeviceResponseType"].temp,
                    payload: { value: Math.random() * 50 },
                })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1000));
            }
            else if (request.type === _model_device_request_type__WEBPACK_IMPORTED_MODULE_3__["DeviceRequestType"].getStatus) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectResponse"]({
                    type: _model_device_response_type__WEBPACK_IMPORTED_MODULE_2__["DeviceResponseType"].status,
                    payload: {
                        state: _model_device_status__WEBPACK_IMPORTED_MODULE_8__["DeviceState"].fertigate,
                        cmdState: _model_device_status__WEBPACK_IMPORTED_MODULE_8__["FertigateState"].irrigate,
                        valve: 0,
                        flow: Math.random() * 1200,
                        volume: 0,
                        totalVolume: 0,
                        mix: 0,
                    }
                })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1000));
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_9__["EMPTY"];
        }))
            .subscribe(function (response) {
            _this.store.dispatch(response);
        });
    };
    DeviceSimulateService.prototype.enable = function (value) {
        this.enableSubject.next(value);
    };
    Object.defineProperty(DeviceSimulateService.prototype, "enabled", {
        get: function () {
            return this.enableSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    DeviceSimulateService.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"] }
    ]; };
    DeviceSimulateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"]])
    ], DeviceSimulateService);
    return DeviceSimulateService;
}());



/***/ }),

/***/ "BTSD":
/*!*********************************************************!*\
  !*** ./src/app/store/settings/settings-store.module.ts ***!
  \*********************************************************/
/*! exports provided: SettingsStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsStoreModule", function() { return SettingsStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.reducer */ "inRq");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _settings_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.effects */ "z1dt");






var SettingsStoreModule = /** @class */ (function () {
    function SettingsStoreModule() {
    }
    SettingsStoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            exports: [],
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('settings', _settings_reducer__WEBPACK_IMPORTED_MODULE_3__["settingsReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_settings_effects__WEBPACK_IMPORTED_MODULE_5__["SettingsEffects"]]),
            ],
        })
    ], SettingsStoreModule);
    return SettingsStoreModule;
}());



/***/ }),

/***/ "BwRQ":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/calibrate/calibrate-dose/calibrate-dose.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-vertical-stepper [linear]=\"true\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\" [editable]=\"false\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Dose rate</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Volume (mL)\" formControlName=\"firstCtrl\">\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Start</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" [editable]=\"false\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Pumping</ng-template>\n      <div>\n        <button mat-button (click)=\"stepper.reset()\">Cancel</button>\n        <button mat-button matStepperNext>Stop</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [editable]=\"false\">\n    <ng-template matStepLabel>Save</ng-template>\n    You are going to save new rate value.\n    <div>\n      <button mat-button (click)=\"stepper.reset()\">Cancel</button>\n      <button mat-button matStepperNext>Save</button>\n    </div>\n  </mat-step>\n  <mat-step [editable]=\"false\">\n    <ng-template matStepLabel>Done</ng-template>\n    You are done.\n    <div>\n      <button mat-button (click)=\"stepper.reset()\">Repeat</button>\n    </div>\n  </mat-step>\n  <ng-template matStepperIcon=\"edit\">\n    <mat-icon svgIcon=\"pencil\"></mat-icon>\n  </ng-template>\n  <ng-template matStepperIcon=\"done\">\n    <mat-icon svgIcon=\"check\"></mat-icon>\n  </ng-template>\n</mat-vertical-stepper>\n");

/***/ }),

/***/ "C+iR":
/*!*************************************************!*\
  !*** ./src/app/components/log/log.component.ts ***!
  \*************************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_log_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./log.component.html */ "UKqz");
/* harmony import */ var _log_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log.component.scss */ "Ftc2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _log_filter_log_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./log-filter/log-filter.component */ "rVOb");
/* harmony import */ var _store_log_log_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/log/log.reducer */ "ubYs");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");










var LogComponent = /** @class */ (function () {
    function LogComponent(store, actions, dialog) {
        this.store = store;
        this.actions = actions;
        this.dialog = dialog;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    LogComponent.prototype.ngOnInit = function () {
        this.log$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_log_log_reducer__WEBPACK_IMPORTED_MODULE_8__["selectorLogFilteredItems"]));
        this.hasFilter$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_log_log_reducer__WEBPACK_IMPORTED_MODULE_8__["selectorLogHasFilter"]));
    };
    LogComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
    };
    LogComponent.prototype.onFilter = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_log_filter_log_filter_component__WEBPACK_IMPORTED_MODULE_7__["LogFilterComponent"]);
        dialogRef.afterClosed().subscribe(function (filter) {
            if (filter) {
                _this.store.dispatch(new _store_log_log_reducer__WEBPACK_IMPORTED_MODULE_8__["ActionLogSetFilter"](filter));
            }
        });
    };
    LogComponent.prototype.onFilterReset = function () {
        this.store.dispatch(new _store_log_log_reducer__WEBPACK_IMPORTED_MODULE_8__["ActionLogResetFilter"]());
    };
    LogComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }
    ]; };
    LogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-log',
            template: _raw_loader_log_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_log_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]])
    ], LogComponent);
    return LogComponent;
}());



/***/ }),

/***/ "CHoB":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/select-index/select-index.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{ data.title || 'Select index number' }}</h1>\n<mat-dialog-content class=\"pt-2\">\n  <mat-radio-group (change)=\"onChange($event.value)\" [value]=\"index\">\n    <mat-radio-button *ngFor=\"let id of count | times\" [value]=\"id\" class=\"mr-3\">\n      {{id + 1}}\n    </mat-radio-button>\n  </mat-radio-group>\n</mat-dialog-content>\n<div mat-dialog-actions>\n  <button (click)=\"onCancel()\" cdkFocusInitial mat-button>Cancel</button>\n  <button (click)=\"onSelect()\" mat-button>Select</button>\n</div>\n");

/***/ }),

/***/ "CaHV":
/*!************************************************************************************!*\
  !*** ./src/app/components/settings/schedule-list/schedule/schedule.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2hlZHVsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Cf3h":
/*!***********************************************************!*\
  !*** ./src/app/components/monitor/monitor.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".temp-chart {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb25pdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6Im1vbml0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVtcC1jaGFydCB7XG4gIGhlaWdodDogMzAwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "Cl+2":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/calibrate/calibrate-flow-sensor/calibrate-flow-sensor.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-vertical-stepper [linear]=\"true\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\" [editable]=\"false\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Pump In Flow sensor</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Volume (mL)\" formControlName=\"firstCtrl\">\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Start</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" [editable]=\"false\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Pumping</ng-template>\n      <div>\n        <button mat-button (click)=\"stepper.reset()\">Cancel</button>\n        <button mat-button matStepperNext>Stop</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [editable]=\"false\">\n    <ng-template matStepLabel>Save</ng-template>\n    You are going to save new rate value.\n    <div>\n      <button mat-button (click)=\"stepper.reset()\">Cancel</button>\n      <button mat-button matStepperNext>Save</button>\n    </div>\n  </mat-step>\n  <mat-step [editable]=\"false\">\n    <ng-template matStepLabel>Done</ng-template>\n    You are done.\n    <div>\n      <button mat-button (click)=\"stepper.reset()\">Repeat</button>\n    </div>\n  </mat-step>\n  <ng-template matStepperIcon=\"edit\">\n    <mat-icon svgIcon=\"pencil\"></mat-icon>\n  </ng-template>\n  <ng-template matStepperIcon=\"done\">\n    <mat-icon svgIcon=\"check\"></mat-icon>\n  </ng-template>\n</mat-vertical-stepper>\n");

/***/ }),

/***/ "Cu+V":
/*!***************************************************************************!*\
  !*** ./src/app/components/settings/schedule-list/schedule-list.module.ts ***!
  \***************************************************************************/
/*! exports provided: ScheduleListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleListModule", function() { return ScheduleListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _schedule_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule-list.component */ "rIn5");
/* harmony import */ var _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedule/schedule.module */ "HGml");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








var ScheduleListModule = /** @class */ (function () {
    function ScheduleListModule() {
    }
    ScheduleListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_schedule_list_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_4__["ScheduleModule"],
            ],
        })
    ], ScheduleListModule);
    return ScheduleListModule;
}());



/***/ }),

/***/ "CycX":
/*!*************************************************************!*\
  !*** ./src/app/shared/select-index/select-index.service.ts ***!
  \*************************************************************/
/*! exports provided: SelectIndexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectIndexService", function() { return SelectIndexService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _select_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-index.component */ "uxi/");




var SelectIndexService = /** @class */ (function () {
    function SelectIndexService(dialog) {
        this.dialog = dialog;
    }
    SelectIndexService.prototype.select = function (params) {
        var dialogRef = this.dialog.open(_select_index_component__WEBPACK_IMPORTED_MODULE_3__["SelectIndexComponent"], { data: params });
        return dialogRef.afterClosed();
    };
    SelectIndexService.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    SelectIndexService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], SelectIndexService);
    return SelectIndexService;
}());



/***/ }),

/***/ "D+HV":
/*!********************************************************************************!*\
  !*** ./src/app/components/config/select-bt-device/select-bt-device.service.ts ***!
  \********************************************************************************/
/*! exports provided: SelectBtDeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBtDeviceService", function() { return SelectBtDeviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_connect_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/connect/connect.service */ "EEFU");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_platform_device_connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/platform/device-connect */ "bxw3");







var SelectBtDeviceService = /** @class */ (function () {
    function SelectBtDeviceService(dialog, connectService) {
        this.dialog = dialog;
        this.connectService = connectService;
    }
    SelectBtDeviceService.prototype.select = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.connectService.discover())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var device = _a[0];
            return device;
        }));
        // const dialogRef = this.dialog.open(SelectBtDeviceComponent);
        // return dialogRef.afterClosed();
    };
    SelectBtDeviceService.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _services_connect_connect_service__WEBPACK_IMPORTED_MODULE_3__["ConnectService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_app_platform_device_connect__WEBPACK_IMPORTED_MODULE_6__["DEVICE_CONNECT"],] }] }
    ]; };
    SelectBtDeviceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_connect_connect_service__WEBPACK_IMPORTED_MODULE_3__["ConnectService"]])
    ], SelectBtDeviceService);
    return SelectBtDeviceService;
}());



/***/ }),

/***/ "DxkL":
/*!****************************************************************************!*\
  !*** ./src/app/components/settings/program-list/program-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProgramListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramListComponent", function() { return ProgramListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_program_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./program-list.component.html */ "XUya");
/* harmony import */ var _program_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./program-list.component.scss */ "c1x0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/settings/settings.reducer */ "inRq");
/* harmony import */ var _model_device_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../model/device-config */ "saMG");








var ProgramListComponent = /** @class */ (function () {
    function ProgramListComponent(store) {
        this.store = store;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.programs$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorPrograms"]));
        this.compotes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(Object(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorNames"])('compote')));
        this.names$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(Object(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorNames"])('program')));
        this.valves = new Array(_model_device_config__WEBPACK_IMPORTED_MODULE_7__["deviceConfig"].valveCount);
        for (var i = 0; i < _model_device_config__WEBPACK_IMPORTED_MODULE_7__["deviceConfig"].valveCount; i++) {
            this.valves[i] = i + 1;
        }
    }
    ProgramListComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionSettingsLoadProgram"]());
    };
    ProgramListComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
    };
    ProgramListComponent.prototype.onNameChange = function (index, value) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionSettingsChangeName"]({ key: 'program', index: index, value: value }));
    };
    ProgramListComponent.prototype.onChange = function (index, value) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionSettingsChangeProgram"]({ index: index, value: value }));
    };
    ProgramListComponent.prototype.onRemove = function (index) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionSettingsRemoveProgram"](index));
    };
    ProgramListComponent.prototype.trackByIndex = function (index, item) {
        return index;
    };
    ProgramListComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
    ]; };
    ProgramListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-program-list',
            template: _raw_loader_program_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_program_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], ProgramListComponent);
    return ProgramListComponent;
}());



/***/ }),

/***/ "EEFU":
/*!*****************************************************!*\
  !*** ./src/app/services/connect/connect.service.ts ***!
  \*****************************************************/
/*! exports provided: ConnectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectService", function() { return ConnectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _platform_device_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../platform/device-connect */ "bxw3");
/* harmony import */ var _device_request_serializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device-request-serializer */ "TEPc");
/* harmony import */ var _device_response_deserializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./device-response-deserializer */ "Hmvq");
/* harmony import */ var _model_device_io_meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/device-io-meta */ "pSR6");
/* harmony import */ var _model_device_request_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/device-request-type */ "f5g5");
/* harmony import */ var _model_device_response_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/device-response-type */ "8NFJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









var ConnectService = /** @class */ (function () {
    function ConnectService(deviceConnect) {
        this.deviceConnect = deviceConnect;
        this.requestSerializer = new _device_request_serializer__WEBPACK_IMPORTED_MODULE_3__["DeviceRequestSerializer"](_model_device_io_meta__WEBPACK_IMPORTED_MODULE_5__["deviceRequestMeta"], _model_device_io_meta__WEBPACK_IMPORTED_MODULE_5__["structMeta"], _model_device_request_type__WEBPACK_IMPORTED_MODULE_6__["DeviceRequestType"]);
        this.responseDeserializer = new _device_response_deserializer__WEBPACK_IMPORTED_MODULE_4__["DeviceResponseDeserializer"](_model_device_io_meta__WEBPACK_IMPORTED_MODULE_5__["deviceResponseMeta"], _model_device_io_meta__WEBPACK_IMPORTED_MODULE_5__["structMeta"], _model_device_response_type__WEBPACK_IMPORTED_MODULE_7__["DeviceResponseType"]);
        this.response$ = this.deviceConnect.response$
            .pipe(this.responseDeserializer.mapRaw)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (response) {
            return response.type === _model_device_response_type__WEBPACK_IMPORTED_MODULE_7__["DeviceResponseType"].temp ? {
                type: _model_device_response_type__WEBPACK_IMPORTED_MODULE_7__["DeviceResponseType"].temp,
                payload: { value: Math.round(response.payload.value * 2.5) * 0.1 },
            } :
                response;
        }));
    }
    ConnectService.prototype.discover = function (options) {
        return this.deviceConnect.discover(options);
    };
    ConnectService.prototype.connect = function (device) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deviceConnect.connect(device)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConnectService.prototype.disconnect = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deviceConnect.disconnect()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConnectService.prototype.send = function (request) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var raw;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        raw = this.requestSerializer.serialize(request);
                        // console.log(raw);
                        return [4 /*yield*/, this.deviceConnect.send(raw)];
                    case 1:
                        // console.log(raw);
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConnectService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_platform_device_connect__WEBPACK_IMPORTED_MODULE_2__["DEVICE_CONNECT"],] }] }
    ]; };
    ConnectService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], ConnectService);
    return ConnectService;
}());



/***/ }),

/***/ "FXGq":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/manual-control/manual-control.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-action-list>\n  <mat-list-item (click)=\"onFertigate()\">\n    <mat-icon svgIcon=\"fountain\"></mat-icon>\n    &nbsp;\n    Fertigate\n  </mat-list-item>\n  <mat-list-item (click)=\"onPumpIn()\">\n    <mat-icon svgIcon=\"water-pump\"></mat-icon>\n    &nbsp;\n    Pump In\n  </mat-list-item>\n  <mat-list-item (click)=\"onDose()\">\n    <mat-icon svgIcon=\"eyedropper\"></mat-icon>\n    &nbsp;\n    Dose\n  </mat-list-item>\n  <mat-list-item (click)=\"onDoseMix()\">\n    <mat-icon svgIcon=\"pinwheel\"></mat-icon>\n    &nbsp;\n    Dose mix\n  </mat-list-item>\n  <mat-list-item (click)=\"onMix()\">\n    <mat-icon svgIcon=\"pinwheel\"></mat-icon>\n    &nbsp;\n    Mix\n  </mat-list-item>\n  <mat-list-item (click)=\"onIrrigate()\">\n    <mat-icon svgIcon=\"fountain\"></mat-icon>\n    &nbsp;\n    Irrigate\n  </mat-list-item>\n  <mat-list-item (click)=\"onWash()\">\n    <mat-icon svgIcon=\"fountain\"></mat-icon>\n    &nbsp;\n    Wash\n  </mat-list-item>\n</mat-action-list>\n");

/***/ }),

/***/ "Fd/N":
/*!*******************************************************************!*\
  !*** ./src/app/components/settings/pump-list/pump-list.module.ts ***!
  \*******************************************************************/
/*! exports provided: PumpListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PumpListModule", function() { return PumpListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pump_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pump-list.component */ "/9c2");
/* harmony import */ var _pump_pump_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pump/pump.module */ "lgpr");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








var PumpListModule = /** @class */ (function () {
    function PumpListModule() {
    }
    PumpListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pump_list_component__WEBPACK_IMPORTED_MODULE_3__["PumpListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _pump_pump_module__WEBPACK_IMPORTED_MODULE_4__["PumpModule"],
            ],
        })
    ], PumpListModule);
    return PumpListModule;
}());



/***/ }),

/***/ "FfYR":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/day-time/day-time.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\n  <mat-select\n    (selectionChange)=\"onChange({hour: $event.value})\"\n    [value]=\"time.hour\"\n    placeholder=\"Hour\"\n  >\n    <mat-option *ngFor=\"let hour of hours\" [value]=\"hour\">{{hour}}</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n  <mat-select\n    (selectionChange)=\"onChange({minute: $event.value})\"\n    [value]=\"time.minute\"\n    placeholder=\"Minute\"\n  >\n    <mat-option *ngFor=\"let minute of minutes\" [value]=\"minute\">{{minute}}</mat-option>\n  </mat-select>\n</mat-form-field>\n");

/***/ }),

/***/ "Fhy2":
/*!*******************************************************!*\
  !*** ./src/app/store/connect/connect-store.module.ts ***!
  \*******************************************************/
/*! exports provided: ConnectStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectStoreModule", function() { return ConnectStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _connect_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect.reducer */ "pp5j");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _connect_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connect.effects */ "QbVE");






var ConnectStoreModule = /** @class */ (function () {
    function ConnectStoreModule() {
    }
    ConnectStoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            exports: [],
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('connect', _connect_reducer__WEBPACK_IMPORTED_MODULE_3__["connectReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_connect_effects__WEBPACK_IMPORTED_MODULE_5__["ConnectEffects"]]),
            ],
        })
    ], ConnectStoreModule);
    return ConnectStoreModule;
}());



/***/ }),

/***/ "Ftc2":
/*!***************************************************!*\
  !*** ./src/app/components/log/log.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFDRiIsImZpbGUiOiJsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuIl19 */");

/***/ }),

/***/ "G/Ek":
/*!**************************************!*\
  !*** ./src/app/model/device-info.ts ***!
  \**************************************/
/*! exports provided: deviceInfo, getAllPins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceInfo", function() { return deviceInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPins", function() { return getAllPins; });
/**
 * Devices
 */
var deviceInfo = {
    // Arduino Mega Specifications
    // The ATmega2560 is a Microcontroller
    // The operating voltage of this microcontroller is 5volts
    // The recommended Input Voltage will range from 7volts to 12volts
    // The input voltage will range from 6volts to 20volts
    // The digital input/output pins are 54 where 15 of these pins will supply PWM o/p.
    // Analog Input Pins are 16
    // DC Current for each input/output pin is 40 mA
    // DC Current used for 3.3V Pin is 50 mA
    // Flash Memory like 256 KB where 8 KB of flash memory is used with the help of bootloader
    // The static random access memory (SRAM) is 8 KB
    // The electrically erasable programmable read-only memory (EEPROM) is 4 KB
    // The clock (CLK) speed is 16 MHz
    // The USB host chip used in this is MAX3421E
    // The length of this board is 101.52 mm
    // The width of this board is 53.3 mm
    // The weight of this board is 36 g
    /**
     * Arduino Mega 2560
     */
    mega2560: {
        pins: {
            0: {
                mode: 'rx',
            },
            1: {
                mode: 'tx',
            },
            2: {
                pwm: true,
                int: 0,
            },
            3: {
                pwm: true,
                int: 1,
            },
            4: {
                pwm: true,
            },
            5: {
                pwm: true,
            },
            6: {
                pwm: true,
            },
            7: {
                pwm: true,
            },
            8: {
                pwm: true,
            },
            9: {
                pwm: true,
            },
            10: {
                pwm: true,
            },
            11: {
                pwm: true,
            },
            12: {
                pwm: true,
            },
            13: {
                pwm: true,
            },
            14: {
                mode: 'tx3',
            },
            15: {
                mode: 'rx3',
            },
            16: {
                mode: 'tx2',
            },
            17: {
                mode: 'rx2',
            },
            18: {
                mode: 'tx1',
                int: 5,
            },
            19: {
                mode: 'rx1',
                int: 4,
            },
            20: {
                mode: 'sda',
                int: 3,
            },
            21: {
                mode: 'scl',
                int: 2,
            },
            22: {},
            23: {},
            24: {},
            25: {},
            26: {},
            27: {},
            28: {},
            29: {},
            30: {},
            31: {},
            32: {},
            33: {},
            34: {},
            35: {},
            36: {},
            37: {},
            38: {},
            39: {},
            40: {},
            41: {},
            42: {},
            43: {},
            44: {
                pwm: true,
            },
            45: {
                pwm: true,
            },
            46: {
                pwm: true,
            },
            47: {},
            48: {},
            49: {},
            50: {
                mode: 'miso',
            },
            51: {
                mode: 'mosi',
            },
            52: {
                mode: 'sck',
            },
            53: {
                mode: 'ss',
            },
            54: {
                analog: true,
            },
            55: {
                analog: true,
            },
            56: {
                analog: true,
            },
            57: {
                analog: true,
            },
            58: {
                analog: true,
            },
            59: {
                analog: true,
            },
            60: {
                analog: true,
            },
            61: {
                analog: true,
            },
            62: {
                analog: true,
            },
            63: {
                analog: true,
            },
            64: {
                analog: true,
            },
            65: {
                analog: true,
            },
            66: {
                analog: true,
            },
            67: {
                analog: true,
            },
            68: {
                analog: true,
            },
            69: {
                analog: true,
            },
        },
    },
};
function getAllPins() {
    return Object.keys(deviceInfo.mega2560.pins).map(function (p) { return +p; });
}


/***/ }),

/***/ "G1R8":
/*!*************************************************!*\
  !*** ./src/app/shared/page/page.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-content {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBQ0YiLCJmaWxlIjoicGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuIl19 */");

/***/ }),

/***/ "GY9F":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dev/access-control/dev-access-control.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXYtYWNjZXNzLWNvbnRyb2wuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "GccI":
/*!********************************************************************************!*\
  !*** ./src/app/components/settings/schedule-list/schedule-list.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2hlZHVsZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "H/f6":
/*!****************************************************!*\
  !*** ./src/app/platform/browser/browser.module.ts ***!
  \****************************************************/
/*! exports provided: AppBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function() { return AppBrowserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ble_browser_bluetooth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ble/browser-bluetooth.service */ "6mFi");
/* harmony import */ var _serial_browser_serial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serial/browser-serial.service */ "N1LG");
/* harmony import */ var _browser_connect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./browser-connect.service */ "HF5j");
/* harmony import */ var _device_connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../device-connect */ "bxw3");
/* harmony import */ var _shared_choose_dialog_choose_dialog_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/choose-dialog/choose-dialog.module */ "w5PT");








var AppBrowserModule = /** @class */ (function () {
    function AppBrowserModule() {
    }
    AppBrowserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_choose_dialog_choose_dialog_module__WEBPACK_IMPORTED_MODULE_7__["ChooseDialogModule"],
            ],
            providers: [
                _ble_browser_bluetooth_service__WEBPACK_IMPORTED_MODULE_3__["BrowserBluetoothService"],
                _serial_browser_serial_service__WEBPACK_IMPORTED_MODULE_4__["BrowserSerialService"],
                { provide: _device_connect__WEBPACK_IMPORTED_MODULE_6__["DEVICE_CONNECT"], useClass: _browser_connect_service__WEBPACK_IMPORTED_MODULE_5__["BrowserConnectService"] },
            ],
        })
    ], AppBrowserModule);
    return AppBrowserModule;
}());



/***/ }),

/***/ "H0MD":
/*!*********************************************************!*\
  !*** ./src/app/components/config/config.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "H1XW":
/*!*******************************************************!*\
  !*** ./src/app/components/config/config.component.ts ***!
  \*******************************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_config_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./config.component.html */ "qLIw");
/* harmony import */ var _config_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.component.scss */ "H0MD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_config_config_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/config/config.reducer */ "JAt8");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _platform_device_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../platform/device-connect */ "bxw3");
/* harmony import */ var _services_connect_connect_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/connect/connect.service */ "EEFU");









var ConfigComponent = /** @class */ (function () {
    function ConfigComponent(store, connectService) {
        this.store = store;
        this.connectService = connectService;
    }
    ConfigComponent.prototype.ngOnInit = function () {
        this.config$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_config_config_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorConfig"]));
        this.updateDatabaseSizes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_config_config_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorUpdateDatabaseSizes"]));
        this.databaseSizes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_config_config_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorDatabaseSizes"]));
        this.monitor$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_config_config_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorMonitorConfig"]));
        this.accessControl$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_config_config_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorConfigAccessControl"]));
        this.store.dispatch(new _store_config_config_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionConfigUpdateDatabaseSize"]());
    };
    ConfigComponent.prototype.selectDevice = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.connectService.discover())
            .subscribe(function (device) {
            if (device === null || device === void 0 ? void 0 : device.length) {
                _this.store.dispatch(new _store_config_config_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionConfigSetDevice"](device[0]));
            }
        });
    };
    ConfigComponent.prototype.updateDb = function () {
        this.store.dispatch(new _store_config_config_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionConfigUpdateDatabaseSize"]());
    };
    ConfigComponent.prototype.clearDb = function (names) {
        this.store.dispatch(new _store_config_config_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionConfigClearDatabase"](names));
    };
    ConfigComponent.prototype.onChange = function (changes) {
        this.store.dispatch(new _store_config_config_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionConfigChange"](changes));
    };
    ConfigComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _services_connect_connect_service__WEBPACK_IMPORTED_MODULE_8__["ConnectService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_platform_device_connect__WEBPACK_IMPORTED_MODULE_7__["DEVICE_CONNECT"],] }] }
    ]; };
    ConfigComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-config',
            template: _raw_loader_config_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_config_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _services_connect_connect_service__WEBPACK_IMPORTED_MODULE_8__["ConnectService"]])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "HByw":
/*!*********************************************************************!*\
  !*** ./src/app/components/log/log-filter/log-filter.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .mat-checkbox-layout {\n  margin-bottom: 0;\n}\n\n.app-tree-padding-0 {\n  padding-left: 0;\n}\n\n.app-tree-padding-1 {\n  padding-left: 1em;\n}\n\n.app-tree-padding-2 {\n  padding-left: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9nLWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0FBQUo7O0FBS0U7RUFDRSxlQUFBO0FBRko7O0FBSUU7RUFDRSxpQkFBQTtBQUZKOztBQUlFO0VBQ0UsaUJBQUE7QUFGSiIsImZpbGUiOiJsb2ctZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcbiAgLm1hdC1jaGVja2JveC1sYXlvdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cblxuLmFwcC10cmVlLXBhZGRpbmcge1xuICAmLTAge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuICAmLTEge1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICB9XG4gICYtMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "HF5j":
/*!*************************************************************!*\
  !*** ./src/app/platform/browser/browser-connect.service.ts ***!
  \*************************************************************/
/*! exports provided: BrowserConnectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserConnectService", function() { return BrowserConnectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_choose_dialog_choose_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/choose-dialog/choose-dialog.service */ "X6Ps");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ble_browser_bluetooth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ble/browser-bluetooth.service */ "6mFi");
/* harmony import */ var _serial_browser_serial_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serial/browser-serial.service */ "N1LG");







var BrowserConnectService = /** @class */ (function () {
    function BrowserConnectService(chooseDialogService, browserBluetoothService, browserSerialService) {
        this.chooseDialogService = chooseDialogService;
        this.browserBluetoothService = browserBluetoothService;
        this.browserSerialService = browserSerialService;
        this.responseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.response$ = this.responseSubject.asObservable();
    }
    /**
     * Run the discovery process.
     *
     * @param options such as filters and optional services
     * @return  Emites the value of the requested service read from the device
     */
    BrowserConnectService.prototype.discover = function (options) {
        var _this = this;
        return this.chooseDialogService.choose({
            title: 'Choose device size',
            options: [
                {
                    title: 'Serial',
                    value: 'Serial',
                },
                {
                    title: 'Bluetooth',
                    value: 'Bluetooth',
                },
            ],
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (choose) { return choose === 'Serial' ? _this.browserSerialService : _this.browserBluetoothService; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (device) { return _this.device = device; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { var _a; return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])((_a = _this.device) === null || _a === void 0 ? void 0 : _a.discover(options)); })).toPromise();
    };
    BrowserConnectService.prototype.connect = function (device) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.device) === null || _a === void 0 ? void 0 : _a.connect(device))];
                    case 1:
                        _b.sent();
                        this.device.response$.subscribe({
                            next: function (e) { return _this.responseSubject.next(e); },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    BrowserConnectService.prototype.disconnect = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.device) === null || _a === void 0 ? void 0 : _a.disconnect())];
                    case 1:
                        _b.sent();
                        this.device = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    BrowserConnectService.prototype.send = function (data) {
        var _a;
        return (_a = this.device) === null || _a === void 0 ? void 0 : _a.send(data);
    };
    BrowserConnectService.ctorParameters = function () { return [
        { type: _shared_choose_dialog_choose_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ChooseDialogService"] },
        { type: _ble_browser_bluetooth_service__WEBPACK_IMPORTED_MODULE_5__["BrowserBluetoothService"] },
        { type: _serial_browser_serial_service__WEBPACK_IMPORTED_MODULE_6__["BrowserSerialService"] }
    ]; };
    BrowserConnectService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_choose_dialog_choose_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ChooseDialogService"],
            _ble_browser_bluetooth_service__WEBPACK_IMPORTED_MODULE_5__["BrowserBluetoothService"],
            _serial_browser_serial_service__WEBPACK_IMPORTED_MODULE_6__["BrowserSerialService"]])
    ], BrowserConnectService);
    return BrowserConnectService;
}());



/***/ }),

/***/ "HGml":
/*!*******************************************************************************!*\
  !*** ./src/app/components/settings/schedule-list/schedule/schedule.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleModule", function() { return ScheduleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule.component */ "oFdz");
/* harmony import */ var _shared_day_time_day_time_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/day-time/day-time.module */ "IxSP");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");








var ScheduleModule = /** @class */ (function () {
    function ScheduleModule() {
    }
    ScheduleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_schedule_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleComponent"]],
            exports: [_schedule_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _shared_day_time_day_time_module__WEBPACK_IMPORTED_MODULE_4__["DayTimeModule"],
            ],
        })
    ], ScheduleModule);
    return ScheduleModule;
}());



/***/ }),

/***/ "HMNo":
/*!****************************************************************************************!*\
  !*** ./src/app/components/access-control/camshot-slider/camshot-slider.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-dialog-content {\n  max-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2Ftc2hvdC1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6ImNhbXNob3Qtc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG59XG4iXX0= */");

/***/ }),

/***/ "HX34":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/calibrate/calibrate-flow-sensor/calibrate-flow-sensor.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CalibrateFlowSensorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalibrateFlowSensorComponent", function() { return CalibrateFlowSensorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calibrate_flow_sensor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calibrate-flow-sensor.component.html */ "Cl+2");
/* harmony import */ var _calibrate_flow_sensor_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calibrate-flow-sensor.component.scss */ "RgQe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");






var CalibrateFlowSensorComponent = /** @class */ (function () {
    function CalibrateFlowSensorComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    CalibrateFlowSensorComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this.formBuilder.group({
            firstCtrl: [''],
        });
        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: [''],
        });
    };
    CalibrateFlowSensorComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    CalibrateFlowSensorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-calibrate-flow-sensor',
            template: _raw_loader_calibrate_flow_sensor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            providers: [
                {
                    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["STEPPER_GLOBAL_OPTIONS"], useValue: { displayDefaultIndicatorType: false },
                },
            ],
            styles: [_calibrate_flow_sensor_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CalibrateFlowSensorComponent);
    return CalibrateFlowSensorComponent;
}());



/***/ }),

/***/ "Hmvq":
/*!******************************************************************!*\
  !*** ./src/app/services/connect/device-response-deserializer.ts ***!
  \******************************************************************/
/*! exports provided: DeviceResponseDeserializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceResponseDeserializer", function() { return DeviceResponseDeserializer; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _model_device_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/device-io */ "X8Em");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



var DeviceResponseDeserializer = /** @class */ (function () {
    function DeviceResponseDeserializer(meta, struct, mapper) {
        this.meta = meta;
        this.struct = struct;
        this.mapper = mapper;
        this.mapRaw = this.mapRaw.bind(this);
    }
    DeviceResponseDeserializer.prototype.deserialize = function (type, raw) {
        var _this = this;
        // console.log('deserialize', type, raw);
        var index = 0;
        var payloadBufferData = new DataView(raw);
        var readObject = function (metaOrName) {
            var meta = typeof metaOrName === 'string' ? _this.struct[metaOrName] : metaOrName;
            var obj = {};
            // console.log('readObject', meta);
            Object.keys(meta).forEach(function (key) {
                var fieldOrName = meta[key];
                var field = typeof fieldOrName === 'string' ?
                    { type: 'object', itemMeta: _this.struct[fieldOrName] } : fieldOrName;
                var value;
                switch (field.type) {
                    case 'list':
                        value = new Array(field.length);
                        for (var i = 0; i < field.length; i++) {
                            value[i] = readObject(field.itemMeta);
                        }
                        break;
                    case 'object':
                        value = readObject(field.itemMeta);
                        break;
                    case 'uint8':
                        value = payloadBufferData.getUint8(index);
                        index += 1;
                        break;
                    case 'uint16':
                        value = payloadBufferData.getUint16(index, true);
                        index += 2;
                        break;
                    case 'uint32':
                        value = payloadBufferData.getUint32(index, true);
                        index += 4;
                        break;
                    case 'uint8[]':
                        value = new Array(field.length);
                        for (var i = 0; i < field.length; i++) {
                            value[i] = payloadBufferData.getUint8(index);
                            index += 1;
                        }
                        break;
                    case 'uint16[]':
                        value = new Array(field.length);
                        for (var i = 0; i < field.length; i++) {
                            value[i] = payloadBufferData.getUint16(index, true);
                            index += 2;
                        }
                        break;
                    case 'uint32[]':
                        value = new Array(field.length);
                        for (var i = 0; i < field.length; i++) {
                            value[i] = payloadBufferData.getUint32(index, true);
                            index += 4;
                        }
                        break;
                    case 'string':
                        throw new Error('not implemented');
                }
                obj[key] = value;
            });
            return obj;
        };
        var typeName = this.mapper[type];
        var payload = readObject(this.meta[typeName]);
        // console.log(`deserialized`, type, payload);
        return { type: type, payload: payload };
    };
    DeviceResponseDeserializer.prototype.mapRaw = function (source) {
        var _this = this;
        var defaultBufferLength = 256;
        // tslint:disable:no-bitwise
        var scanRawData = function (bufferLength) {
            if (bufferLength === void 0) { bufferLength = defaultBufferLength; }
            return function (source) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
                    var type = null;
                    var buffer = new Uint8Array(bufferLength);
                    var offset = 0;
                    return source.subscribe({
                        next: function (rawData) {
                            // console.error('received', rawData);
                            var array = new Uint8Array(rawData);
                            var length = array.length;
                            for (var i = 0; i < length; i++) {
                                var byte = array[i];
                                var mode = byte & _model_device_io__WEBPACK_IMPORTED_MODULE_1__["DeviceIOMarker"].mask;
                                if (mode) {
                                    var cmd = byte & _model_device_io__WEBPACK_IMPORTED_MODULE_1__["DeviceIOMarker"].cmdMask;
                                    var cmdPayload = byte & _model_device_io__WEBPACK_IMPORTED_MODULE_1__["DeviceIOMarker"].cmdPayloadMask;
                                    if (cmd) {
                                        // end of message
                                        if (type === null) {
                                            console.error('received end marked, but type is not defined');
                                            continue;
                                        }
                                        // console.error('received end marker', type);
                                        var payload = Object(_model_device_io__WEBPACK_IMPORTED_MODULE_1__["convert7bitTo8bit"])(buffer.slice(0, offset));
                                        var expectedLength = Object(_model_device_io__WEBPACK_IMPORTED_MODULE_1__["getLength"])(_this.meta[_this.mapper[type]], _this.struct);
                                        if (payload.byteLength !== expectedLength) {
                                            console.error('received bad length', payload.byteLength, expectedLength);
                                            type = null;
                                            offset = 0;
                                            continue;
                                        }
                                        var crc = Object(_model_device_io__WEBPACK_IMPORTED_MODULE_1__["crc6"])(payload);
                                        if (crc !== cmdPayload) {
                                            console.error('received bad crc', crc, cmdPayload);
                                            type = null;
                                            offset = 0;
                                            continue;
                                        }
                                        // console.error('emit', type, payload);
                                        observer.next({ type: type, raw: payload.buffer });
                                        type = null;
                                        offset = 0;
                                        continue;
                                    }
                                    // begin of message
                                    if (type !== null) {
                                        console.error('received begin marked, but previous message is not complete');
                                    }
                                    type = cmdPayload;
                                    offset = 0;
                                    // console.log('received begin marker', type);
                                    continue;
                                }
                                if (type === null) {
                                    console.error('received body, but type is not defined');
                                    continue;
                                }
                                buffer[offset] = byte;
                                // console.log('received body', buffer[offset]);
                                offset += 1;
                            }
                        },
                        error: function (err) {
                            observer.error(err);
                        },
                        complete: function () {
                            observer.complete();
                        },
                    });
                });
            };
        };
        return source.pipe(scanRawData())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var type = _a.type, raw = _a.raw;
            return _this.deserialize(type, raw);
        }));
    };
    return DeviceResponseDeserializer;
}());



/***/ }),

/***/ "I5EF":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/access-control/camshot-slider/camshot-slider.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{key | date: 'yyyy.MM.dd HH:mm:ss'}}</h1>\n<mat-dialog-content class=\"pt-2\">\n  <div class=\"d-flex flex-column flex-nowrap\">\n    <div class=\"d-flex flex-row flex-nowrap\">\n      <div (click)=\"onPrev()\">\n        <mat-icon svgIcon=\"chevron-left\"></mat-icon>\n      </div>\n      <div  class=\"flex-fill\" *ngIf=\"camshot\">\n        <img class=\"mx-auto d-block\" [attr.src]=\"camshot.image\"/>\n      </div>\n      <div (click)=\"onNext()\">\n        <mat-icon svgIcon=\"chevron-right\"></mat-icon>\n      </div>\n    </div>\n    <div>\n      {{key | date: 'HH:mm:ss'}}\n    </div>\n  </div>\n</mat-dialog-content>\n");

/***/ }),

/***/ "IBGI":
/*!****************************************************************!*\
  !*** ./src/app/store/access-control/access-control.reducer.ts ***!
  \****************************************************************/
/*! exports provided: AccessControlActionTypes, ActionAccessControlInit, ActionAccessControlAdd, ActionAccessControlUpdate, initialAccessControlState, selectorAccessControl, selectorAccessControlItems, selectorAccessControlLastEpisode, accessControlReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlActionTypes", function() { return AccessControlActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionAccessControlInit", function() { return ActionAccessControlInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionAccessControlAdd", function() { return ActionAccessControlAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionAccessControlUpdate", function() { return ActionAccessControlUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialAccessControlState", function() { return initialAccessControlState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorAccessControl", function() { return selectorAccessControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorAccessControlItems", function() { return selectorAccessControlItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorAccessControlLastEpisode", function() { return selectorAccessControlLastEpisode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accessControlReducer", function() { return accessControlReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

var AccessControlActionTypes;
(function (AccessControlActionTypes) {
    AccessControlActionTypes["INIT"] = "[AccessControl] Init";
    AccessControlActionTypes["ADD"] = "[AccessControl] Add";
    AccessControlActionTypes["UPDATE"] = "[AccessControl] Update";
})(AccessControlActionTypes || (AccessControlActionTypes = {}));
var ActionAccessControlInit = /** @class */ (function () {
    function ActionAccessControlInit() {
        this.type = AccessControlActionTypes.INIT;
    }
    return ActionAccessControlInit;
}());

var ActionAccessControlAdd = /** @class */ (function () {
    function ActionAccessControlAdd(payload) {
        this.payload = payload;
        this.type = AccessControlActionTypes.ADD;
    }
    return ActionAccessControlAdd;
}());

var ActionAccessControlUpdate = /** @class */ (function () {
    function ActionAccessControlUpdate(payload) {
        this.payload = payload;
        this.type = AccessControlActionTypes.UPDATE;
    }
    return ActionAccessControlUpdate;
}());

var initialAccessControlState = {
    items: [],
};
var selectorAccessControl = function (state) { return state.accessControl; };
var selectorAccessControlItems = function (state) { return state.accessControl.items; };
var selectorAccessControlLastEpisode = function (state) { return state.accessControl.items[0]; };
function accessControlReducer(state, action) {
    if (state === void 0) { state = initialAccessControlState; }
    switch (action.type) {
        case AccessControlActionTypes.ADD:
            return addAccessControl(state, action.payload);
        case AccessControlActionTypes.UPDATE:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { items: action.payload });
        default:
            return state;
    }
}
function addAccessControl(state, camshot) {
    var newEpisode = !state.items.length || camshot.key - state.items[0].value.lastKey > 60000;
    var episode;
    var items;
    if (newEpisode) {
        episode = { key: camshot.key, value: { lastKey: camshot.key } };
        items = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([episode], state.items);
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { items: items });
    }
    episode = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.items[0]), { value: { lastKey: camshot.key } });
    items = state.items.slice(0);
    items[0] = episode;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { items: items });
}


/***/ }),

/***/ "IDKA":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/pin-assignment/pin-select/pin-select.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\">\n    <mat-form-field class=\"col-12\" *ngFor=\"let value of pins; trackBy: trackByValue; let index = index\">\n      <mat-select\n        placeholder=\"Pin {{title}} #{{index}}\"\n        [value]=\"value\"\n        (selectionChange)=\"onChange(index, $event.value)\"\n      >\n        <mat-option *ngFor=\"let pin of allPins; trackBy: trackByValue\" [value]=\"pin\">\n          <div class=\"pl-4\">\n            {{pin}}\n          </div>\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</div>\n");

/***/ }),

/***/ "ILw6":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/schedule-list/schedule/schedule.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <mat-slide-toggle class=\"col-12\"\n    [checked]=\"!!schedule.enable\" (change)=\"onChange({enable: +$event.checked})\">\n    Enable\n  </mat-slide-toggle>\n  <app-day-time\n    class=\"col-12\"\n    [time]=\"schedule.startTime\"\n    (timeChange)=\"onChange({startTime: $event})\"\n  >\n  </app-day-time>\n  <app-day-time\n    class=\"col-12\"\n    [time]=\"schedule.endTime\"\n    (timeChange)=\"onChange({endTime: $event})\"\n  >\n  </app-day-time>\n</div>\n");

/***/ }),

/***/ "IQGA":
/*!********************************************!*\
  !*** ./src/app/shared/page/page.module.ts ***!
  \********************************************/
/*! exports provided: PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageModule", function() { return PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.component */ "IlGR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bt_status_icon_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bt-status-icon.pipe */ "gGum");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");











var PageModule = /** @class */ (function () {
    function PageModule() {
    }
    PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"], _bt_status_icon_pipe__WEBPACK_IMPORTED_MODULE_5__["BtStatusIconPipe"]],
            exports: [_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            ],
        })
    ], PageModule);
    return PageModule;
}());



/***/ }),

/***/ "IlGR":
/*!***********************************************!*\
  !*** ./src/app/shared/page/page.component.ts ***!
  \***********************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./page.component.html */ "mEf4");
/* harmony import */ var _page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.component.scss */ "G1R8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_connect_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/connect-status */ "YzEn");





var PageComponent = /** @class */ (function () {
    function PageComponent() {
        this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.sync = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.bt = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.links = [
            {
                route: ['/'],
                title: 'Dashboard',
                icon: 'view-dashboard',
            },
            {
                route: ['/', 'settings'],
                title: 'Settings',
                icon: 'cog-outline',
            },
            {
                route: ['/', 'monitor'],
                title: 'Monitor',
                icon: 'chart-bar',
            },
            {
                route: ['/', 'calibrate'],
                title: 'Calibrate',
                icon: 'gauge',
            },
            {
                route: ['/', 'manual-control'],
                title: 'Manual control',
                icon: 'cursor-pointer',
            },
            {
                route: ['/', 'access-control'],
                title: 'Access control',
                icon: 'webcam',
            },
            {
                route: ['/', 'log'],
                title: 'Log',
                icon: 'format-list-bulleted',
            },
            {
                route: ['/', 'config'],
                title: 'Config',
                icon: 'cellphone-settings',
            },
            {
                route: ['/', 'dev'],
                title: 'Development',
                icon: 'dev-to',
            },
        ];
    }
    Object.defineProperty(PageComponent.prototype, "showMenu", {
        get: function () {
            return (this.options &&
                this.options.actions &&
                this.options.actions.includes('menu'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "showAdd", {
        get: function () {
            return (this.options &&
                this.options.actions &&
                this.options.actions.includes('add'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "showBack", {
        get: function () {
            return (this.options &&
                this.options.actions &&
                this.options.actions.includes('back'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "showSync", {
        get: function () {
            return (this.options &&
                this.options.actions &&
                this.options.actions.includes('sync') &&
                this.syncStatus);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "showBt", {
        get: function () {
            return (this.options &&
                this.options.actions &&
                this.options.actions.includes('bt'));
        },
        enumerable: false,
        configurable: true
    });
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent.prototype.onBack = function () {
        this.back.next();
    };
    PageComponent.prototype.onAdd = function () {
        this.add.next();
    };
    PageComponent.prototype.onSync = function () {
        this.sync.next();
    };
    PageComponent.prototype.onBt = function () {
        this.bt.next();
    };
    PageComponent.ctorParameters = function () { return []; };
    PageComponent.propDecorators = {
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        btStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        syncStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        back: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        add: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        sync: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        bt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    PageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-page',
            template: _raw_loader_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "IxSP":
/*!****************************************************!*\
  !*** ./src/app/shared/day-time/day-time.module.ts ***!
  \****************************************************/
/*! exports provided: DayTimeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayTimeModule", function() { return DayTimeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _day_time_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./day-time.component */ "Ou21");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");








var DayTimeModule = /** @class */ (function () {
    function DayTimeModule() {
    }
    DayTimeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_day_time_component__WEBPACK_IMPORTED_MODULE_3__["DayTimeComponent"]],
            exports: [_day_time_component__WEBPACK_IMPORTED_MODULE_3__["DayTimeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
            ],
        })
    ], DayTimeModule);
    return DayTimeModule;
}());



/***/ }),

/***/ "Iyny":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/pump-list/pump-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-accordion>\n  <mat-expansion-panel *ngFor=\"let pump of pumps$ | async; let index = index; trackBy: trackByIndex\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        #{{index + 1}}\n      </mat-panel-title>\n      <mat-panel-description>\n        {{(names$ | async)[index]}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <ng-template matExpansionPanelContent>\n      <app-pump\n        [pump]=\"pump\"\n        [name]=\"(names$ | async)[index]\"\n        (pumpChange)=\"onChange(index, $event)\"\n        (nameChange)=\"onNameChange(index, $event)\"\n      ></app-pump>\n    </ng-template>\n  </mat-expansion-panel>\n</mat-accordion>\n");

/***/ }),

/***/ "J6F9":
/*!*****************************************************!*\
  !*** ./src/app/services/open-cv/open-cv.service.ts ***!
  \*****************************************************/
/*! exports provided: OpenCvConfigToken, OpenCVService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenCvConfigToken", function() { return OpenCvConfigToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenCVService", function() { return OpenCVService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



var OpenCvConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('OpenCV config object token');
var OpenCVService = /** @class */ (function () {
    function OpenCVService(options, zone) {
        this.zone = zone;
        this.cvState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            ready: false,
            error: false,
            loading: true,
            state: 'loading',
        });
        if (!options) {
            options = {};
        }
        this.configModule = this.generateConfigModule(options);
        this.loadOpenCv();
    }
    /**
     * load the OpenCV script
     */
    OpenCVService.prototype.loadOpenCv = function () {
        var _this = this;
        this.cvState.next(this.newState('loading'));
        // create global module variable
        window.Module = this.configModule;
        // create script element and set attributes
        var script = document.createElement('script');
        script.setAttribute('async', '');
        script.setAttribute('type', 'text/javascript');
        // listen for errors
        script.addEventListener('error', function () {
            var err = new Error('Failed to load ' + _this.configModule.scriptUrl);
            _this.cvState.next(_this.newState('error'));
            _this.cvState.error(err);
        }, { passive: true });
        // set script url
        script.src = this.configModule.scriptUrl;
        // insert script as first script tag
        var node = document.getElementsByTagName('script')[0];
        if (node) {
            node.parentNode.insertBefore(script, node);
        }
        else {
            document.head.appendChild(script);
        }
    };
    /**
     * generates a new state object
     * @param change - the new state of the module
     */
    OpenCVService.prototype.newState = function (change) {
        var newStateObj = {
            ready: false,
            loading: false,
            error: false,
            state: '',
        };
        Object.keys(newStateObj).forEach(function (key) {
            if (key !== 'state') {
                if (key === change) {
                    newStateObj[key] = true;
                    newStateObj.state = key;
                }
                else {
                    newStateObj[key] = false;
                }
            }
        });
        return newStateObj;
    };
    /**
     * generates a config module for the global Module object
     * @param options - configuration options
     */
    OpenCVService.prototype.generateConfigModule = function (options) {
        var _this = this;
        return {
            scriptUrl: options.openCVDirPath ? options.openCVDirPath + "/opencv.js" : "/assets/opencv/opencv.js",
            wasmBinaryFile: 'opencv_js.wasm',
            usingWasm: false,
            onRuntimeInitialized: function () {
                _this.zone.run(function () {
                    console.log('openCV Ready');
                    _this.cvState.next(_this.newState('ready'));
                });
            },
        };
    };
    OpenCVService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [OpenCvConfigToken,] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    OpenCVService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], OpenCVService);
    return OpenCVService;
}());



/***/ }),

/***/ "JAt8":
/*!************************************************!*\
  !*** ./src/app/store/config/config.reducer.ts ***!
  \************************************************/
/*! exports provided: ConfigActionTypes, ActionConfigInit, ActionConfigUpdate, ActionConfigUpdateDatabaseSize, ActionConfigSetDevice, ActionConfigSetDatabaseSizes, ActionConfigChange, ActionConfigClearDatabase, initialConfigState, selectorConfig, selectorBtDevice, selectorDatabaseSizes, selectorUpdateDatabaseSizes, selectorMonitorConfig, selectorConfigAccessControl, configReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigActionTypes", function() { return ConfigActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionConfigInit", function() { return ActionConfigInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionConfigUpdate", function() { return ActionConfigUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionConfigUpdateDatabaseSize", function() { return ActionConfigUpdateDatabaseSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionConfigSetDevice", function() { return ActionConfigSetDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionConfigSetDatabaseSizes", function() { return ActionConfigSetDatabaseSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionConfigChange", function() { return ActionConfigChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionConfigClearDatabase", function() { return ActionConfigClearDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialConfigState", function() { return initialConfigState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorConfig", function() { return selectorConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorBtDevice", function() { return selectorBtDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorDatabaseSizes", function() { return selectorDatabaseSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorUpdateDatabaseSizes", function() { return selectorUpdateDatabaseSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorMonitorConfig", function() { return selectorMonitorConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorConfigAccessControl", function() { return selectorConfigAccessControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configReducer", function() { return configReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

var ConfigActionTypes;
(function (ConfigActionTypes) {
    ConfigActionTypes["INIT"] = "[Config] Init";
    ConfigActionTypes["UPDATE"] = "[Config] Update";
    ConfigActionTypes["UPDATE_DATABASE_SIZES"] = "[Config] Update size";
    ConfigActionTypes["SET_DEVICE"] = "[Config] Set device";
    ConfigActionTypes["SET_DATABASE_SIZES"] = "[Config] Set database sizes";
    ConfigActionTypes["CHANGE"] = "[Config] Change";
    ConfigActionTypes["CLEAR_DATABASE"] = "[Config] Clear database";
})(ConfigActionTypes || (ConfigActionTypes = {}));
var ActionConfigInit = /** @class */ (function () {
    function ActionConfigInit() {
        this.type = ConfigActionTypes.INIT;
    }
    return ActionConfigInit;
}());

var ActionConfigUpdate = /** @class */ (function () {
    function ActionConfigUpdate(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.UPDATE;
    }
    return ActionConfigUpdate;
}());

var ActionConfigUpdateDatabaseSize = /** @class */ (function () {
    function ActionConfigUpdateDatabaseSize() {
        this.type = ConfigActionTypes.UPDATE_DATABASE_SIZES;
    }
    return ActionConfigUpdateDatabaseSize;
}());

var ActionConfigSetDevice = /** @class */ (function () {
    function ActionConfigSetDevice(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.SET_DEVICE;
    }
    return ActionConfigSetDevice;
}());

var ActionConfigSetDatabaseSizes = /** @class */ (function () {
    function ActionConfigSetDatabaseSizes(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.SET_DATABASE_SIZES;
    }
    return ActionConfigSetDatabaseSizes;
}());

var ActionConfigChange = /** @class */ (function () {
    function ActionConfigChange(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.CHANGE;
    }
    return ActionConfigChange;
}());

var ActionConfigClearDatabase = /** @class */ (function () {
    function ActionConfigClearDatabase(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.CLEAR_DATABASE;
    }
    return ActionConfigClearDatabase;
}());

var initialConfigState = {
    device: null,
    databaseSizes: [],
    updateDatabaseSizes: false,
    monitor: {
        time: {
            enable: true,
            interval: 5000,
        },
        temp: {
            enable: true,
            interval: 5000,
        },
        status: {
            enable: true,
            interval: 5000,
        },
    },
    accessControl: {
        enable: false,
        fps: 3,
    },
};
var selectorConfig = function (state) { return state.config; };
var selectorBtDevice = function (state) { return state.config.device; };
var selectorDatabaseSizes = function (state) { return state.config.databaseSizes; };
var selectorUpdateDatabaseSizes = function (state) { return state.config.updateDatabaseSizes; };
var selectorMonitorConfig = function (state) { return state.config.monitor; };
var selectorConfigAccessControl = function (state) { return state.config.accessControl; };
function configReducer(state, action) {
    if (state === void 0) { state = initialConfigState; }
    switch (action.type) {
        case ConfigActionTypes.UPDATE:
            return updateState(state, action.payload);
        case ConfigActionTypes.UPDATE_DATABASE_SIZES:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { updateDatabaseSizes: true });
        case ConfigActionTypes.SET_DEVICE:
            return setDevice(state, action.payload);
        case ConfigActionTypes.SET_DATABASE_SIZES:
            return setDatabaseSizes(state, action.payload);
        case ConfigActionTypes.CHANGE:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), action.payload);
        default:
            return state;
    }
}
function updateState(state, newState) {
    return newState || state;
}
function setDevice(state, device) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { device: device });
}
function setDatabaseSizes(state, databaseSizes) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { databaseSizes: databaseSizes, updateDatabaseSizes: false });
}


/***/ }),

/***/ "Joy5":
/*!***************************************************************************!*\
  !*** ./src/app/components/settings/program-list/program/date-day.pipe.ts ***!
  \***************************************************************************/
/*! exports provided: DateDayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateDayPipe", function() { return DateDayPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_date_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../model/date-time */ "RcPo");



var DateDayPipe = /** @class */ (function () {
    function DateDayPipe() {
    }
    DateDayPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return Object(_model_date_time__WEBPACK_IMPORTED_MODULE_2__["dateDayToDate"])(value);
    };
    DateDayPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'dateDay'
        })
    ], DateDayPipe);
    return DateDayPipe;
}());



/***/ }),

/***/ "K7hc":
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/*! exports provided: appConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConfig", function() { return appConfig; });
var appConfig = {
    logMaxLength: 10000,
};


/***/ }),

/***/ "KFQ5":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/monitor/monitor.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div echarts class=\"temp-chart\" [options]=\"tempOptions$ | async\"></div>\n<div echarts class=\"temp-chart\" [options]=\"flowOptions$ | async\"></div>\n");

/***/ }),

/***/ "KSRV":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/timer-list/timer-list.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-accordion>\n  <mat-expansion-panel *ngFor=\"let timer of timers$ | async; let index = index; trackBy: trackByIndex\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        #{{index + 1}}\n      </mat-panel-title>\n      <mat-panel-description>\n        {{(names$ | async)[index]}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <ng-template matExpansionPanelContent>\n      <app-timer\n        [timer]=\"timer\"\n        [name]=\"(names$ | async)[index]\"\n        [programs]=\"programs$ | async\"\n        (timerChange)=\"onChange(index, $event)\"\n        (nameChange)=\"onNameChange(index, $event)\"\n      ></app-timer>\n    </ng-template>\n  </mat-expansion-panel>\n</mat-accordion>\n");

/***/ }),

/***/ "KbOC":
/*!*****************************************************************!*\
  !*** ./src/app/shared/choose-dialog/choose-dialog.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChooseDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseDialogComponent", function() { return ChooseDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_choose_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./choose-dialog.component.html */ "oIp7");
/* harmony import */ var _choose_dialog_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choose-dialog.component.scss */ "+bc7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");





var ChooseDialogComponent = /** @class */ (function () {
    function ChooseDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    Object.defineProperty(ChooseDialogComponent.prototype, "options", {
        get: function () {
            var _a;
            return (_a = this.data) === null || _a === void 0 ? void 0 : _a.options;
        },
        enumerable: false,
        configurable: true
    });
    ChooseDialogComponent.prototype.ngOnInit = function () {
    };
    ChooseDialogComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    ChooseDialogComponent.prototype.onSelect = function () {
        this.dialogRef.close(this.value);
    };
    ChooseDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ChooseDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-choose-dialog',
            template: _raw_loader_choose_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_choose_dialog_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], ChooseDialogComponent);
    return ChooseDialogComponent;
}());



/***/ }),

/***/ "Kewi":
/*!****************************************************!*\
  !*** ./src/app/platform/android/android.module.ts ***!
  \****************************************************/
/*! exports provided: AndroidModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndroidModule", function() { return AndroidModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _android_permissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./android-permissions.service */ "/KoW");
/* harmony import */ var _android_bluetooth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./android-bluetooth.service */ "5PGW");
/* harmony import */ var _device_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../device-connect */ "bxw3");





var AndroidModule = /** @class */ (function () {
    function AndroidModule() {
    }
    AndroidModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                _android_permissions_service__WEBPACK_IMPORTED_MODULE_2__["AndroidPermissionsService"],
                { provide: _device_connect__WEBPACK_IMPORTED_MODULE_4__["DEVICE_CONNECT"], useClass: _android_bluetooth_service__WEBPACK_IMPORTED_MODULE_3__["AndroidBluetoothService"] },
            ],
        })
    ], AndroidModule);
    return AndroidModule;
}());



/***/ }),

/***/ "KqSi":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/dose-list/dose/dose.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-form-field class=\"col-12\">\n    <input\n      matInput\n      type=\"text\"\n      placeholder=\"Name\"\n      [value]=\"name\"\n      (input)=\"onNameChange($event.target.value)\"\n    >\n  </mat-form-field>\n  <mat-form-field class=\"col-12\">\n    <input\n      matInput\n      type=\"number\"\n      placeholder=\"Rate (0.1 mL / ms)\"\n      [value]=\"dose.rate\"\n      (input)=\"onChange({rate: +$event.target.value})\"\n    >\n  </mat-form-field>\n  <mat-form-field class=\"col-12\">\n    <input\n      matInput\n      type=\"number\"\n      placeholder=\"Seconds\"\n      [value]=\"dose.seconds\"\n      (input)=\"onChange({seconds: +$event.target.value})\"\n    >\n  </mat-form-field>\n  <mat-slide-toggle\n    class=\"col-12\"\n    [checked]=\"!!dose.pwm\"\n    (change)=\"onChange({pwm: +$event.checked})\"\n  >\n    PWM\n  </mat-slide-toggle>\n  <mat-form-field>\n    <input\n      matInput\n      type=\"number\"\n      placeholder=\"PWM Sensor\"\n      [value]=\"dose.pwmSensor\"\n      (input)=\"onChange({pwmSensor: +$event.target.value})\"\n    >\n  </mat-form-field>\n</div>\n");

/***/ }),

/***/ "L/S7":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/mixer-list/mixer/mixer.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-form-field>\n    <input matInput\n      type=\"text\"\n      placeholder=\"Name\"\n      [value]=\"name\"\n      (input)=\"onNameChange($event.target.value)\"\n    >\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput\n      type=\"number\"\n      placeholder=\"Seconds\"\n      [value]=\"mixer.seconds\"\n      (input)=\"onChange({seconds: +$event.target.value})\"\n    >\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput\n           type=\"number\"\n           placeholder=\"Wash seconds\"\n           [value]=\"mixer.washSeconds\"\n           (input)=\"onChange({washSeconds: +$event.target.value})\"\n    >\n  </mat-form-field>\n</div>\n");

/***/ }),

/***/ "LT9m":
/*!**********************************************************************************!*\
  !*** ./src/app/components/config/select-bt-device/select-bt-device.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SelectBtDeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBtDeviceComponent", function() { return SelectBtDeviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_select_bt_device_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./select-bt-device.component.html */ "vwhI");
/* harmony import */ var _select_bt_device_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-bt-device.component.scss */ "lIUF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_connect_connect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/connect/connect.service */ "EEFU");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");








var SelectBtDeviceComponent = /** @class */ (function () {
    function SelectBtDeviceComponent(connectService, dialogRef, data, changeDetector) {
        this.connectService = connectService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.changeDetector = changeDetector;
    }
    SelectBtDeviceComponent.prototype.ngOnInit = function () {
        this.selectionList.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](false);
        this.discover();
    };
    SelectBtDeviceComponent.prototype.discover = function () {
        var _this = this;
        this.connectService.discover()
            .then(function (devices) {
            _this.devices = devices;
            _this.changeDetector.detectChanges();
        });
    };
    SelectBtDeviceComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    SelectBtDeviceComponent.prototype.onSelect = function () {
        this.dialogRef.close(this.selectionList.selectedOptions.selected[0].value);
    };
    SelectBtDeviceComponent.prototype.compareWith = function (o1, o2) {
        return o1.id === o2.id;
    };
    SelectBtDeviceComponent.ctorParameters = function () { return [
        { type: _services_connect_connect_service__WEBPACK_IMPORTED_MODULE_4__["ConnectService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
    ]; };
    SelectBtDeviceComponent.propDecorators = {
        selectionList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatSelectionList"], { static: true },] }]
    };
    SelectBtDeviceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-select-bt-device',
            template: _raw_loader_select_bt_device_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_select_bt_device_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_connect_connect_service__WEBPACK_IMPORTED_MODULE_4__["ConnectService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
    ], SelectBtDeviceComponent);
    return SelectBtDeviceComponent;
}());



/***/ }),

/***/ "Lquv":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "SFq8");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.scss */ "dma5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_dashboard_dashboard_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/dashboard/dashboard.reducer */ "dImw");
/* harmony import */ var _time_chart_time_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./time-chart/time-chart.component */ "Qftb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");










var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(store, actions) {
        var _this = this;
        this.store = store;
        this.actions = actions;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.time$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_dashboard_dashboard_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorTime"]));
        this.temp$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_dashboard_dashboard_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorTemp"]));
        this.minTemp$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_dashboard_dashboard_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorMinTemp"]));
        this.maxTemp$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_dashboard_dashboard_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorMaxTemp"]));
        this.status$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_dashboard_dashboard_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorStatus"]));
        this.actions
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["ofType"])(_store_dashboard_dashboard_reducer__WEBPACK_IMPORTED_MODULE_6__["DashboardActionTypes"].UPDATE_TEMP))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$))
            .subscribe(function (action) {
            if (!_this.chart) {
                return;
            }
            _this.chart.add(action.payload);
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
    };
    DashboardComponent.prototype.onSyncTime = function () {
        this.store.dispatch(new _store_dashboard_dashboard_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionDashboardSyncTime"]());
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["Actions"] }
    ]; };
    DashboardComponent.propDecorators = {
        chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['chart', { static: true },] }]
    };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["Actions"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "Lvie":
/*!******************************************************************!*\
  !*** ./src/app/components/calibrate/calibrate-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: CalibrateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalibrateRoutingModule", function() { return CalibrateRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _calibrate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calibrate.component */ "Zwnc");
/* harmony import */ var _calibrate_flow_sensor_calibrate_flow_sensor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calibrate-flow-sensor/calibrate-flow-sensor.component */ "HX34");
/* harmony import */ var _calibrate_dose_calibrate_dose_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calibrate-dose/calibrate-dose.component */ "e/0k");






var routes = [
    {
        path: 'calibrate',
        children: [
            {
                path: '',
                component: _calibrate_component__WEBPACK_IMPORTED_MODULE_3__["CalibrateComponent"],
                pathMatch: 'full',
                data: {
                    title: 'Calibrate',
                    actions: ['menu', 'bt', 'sync'],
                },
            },
            {
                path: 'pump/:id',
                component: _calibrate_flow_sensor_calibrate_flow_sensor_component__WEBPACK_IMPORTED_MODULE_4__["CalibrateFlowSensorComponent"],
                data: {
                    title: 'Calibrate flow sensor',
                    actions: ['back', 'sync'],
                },
            },
            {
                path: 'dose/:id',
                component: _calibrate_dose_calibrate_dose_component__WEBPACK_IMPORTED_MODULE_5__["CalibrateDoseComponent"],
                data: {
                    title: 'Calibrate dose',
                    actions: ['back', 'sync'],
                },
            },
        ],
    },
];
var CalibrateRoutingModule = /** @class */ (function () {
    function CalibrateRoutingModule() {
    }
    CalibrateRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CalibrateRoutingModule);
    return CalibrateRoutingModule;
}());



/***/ }),

/***/ "M5AE":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/pump-list/pump/pump.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-form-field>\n    <input matInput\n      type=\"text\"\n      placeholder=\"Name\"\n      [value]=\"name\"\n      (input)=\"onNameChange($event.target.value)\"\n    >\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput\n      type=\"number\"\n      placeholder=\"Min flow\"\n      [value]=\"pump.minFlow\"\n      (input)=\"onChange({minFlow: +$event.target.value})\"\n    >\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput\n      type=\"number\"\n      placeholder=\"Starting Time\"\n      [value]=\"pump.startingTime\"\n      (input)=\"onChange({startingTime: +$event.target.value})\"\n    >\n  </mat-form-field>\n  <mat-slide-toggle class=\"col-12\" [checked]=\"!!pump.pwm\" (change)=\"onChange({pwm: +$event.checked})\">\n    PWM\n  </mat-slide-toggle>\n  <mat-form-field>\n    <input matInput\n      type=\"number\"\n      placeholder=\"PWM Flow\"\n      [value]=\"pump.pwmFlow\"\n      (input)=\"onChange({pwmFlow: +$event.target.value})\"\n    >\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput\n      type=\"number\"\n      placeholder=\"Rate\"\n      [value]=\"pump.rate\"\n      (input)=\"onChange({rate: +$event.target.value})\"\n    >\n  </mat-form-field>\n</div>\n");

/***/ }),

/***/ "MAHH":
/*!****************************************************************************!*\
  !*** ./src/app/components/settings/compote-list/compote/compote.module.ts ***!
  \****************************************************************************/
/*! exports provided: CompoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompoteModule", function() { return CompoteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _compote_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compote.component */ "4mQ/");
/* harmony import */ var _compote_daily_compote_daily_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../compote-daily/compote-daily.module */ "QOcv");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");









var CompoteModule = /** @class */ (function () {
    function CompoteModule() {
    }
    CompoteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_compote_component__WEBPACK_IMPORTED_MODULE_3__["CompoteComponent"]],
            exports: [_compote_component__WEBPACK_IMPORTED_MODULE_3__["CompoteComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _compote_daily_compote_daily_module__WEBPACK_IMPORTED_MODULE_4__["CompoteDailyModule"]],
        })
    ], CompoteModule);
    return CompoteModule;
}());



/***/ }),

/***/ "MOas":
/*!*****************************************************!*\
  !*** ./src/app/store/config/config-store.module.ts ***!
  \*****************************************************/
/*! exports provided: ConfigStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigStoreModule", function() { return ConfigStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _config_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.reducer */ "JAt8");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _config_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.effects */ "qqi4");






var ConfigStoreModule = /** @class */ (function () {
    function ConfigStoreModule() {
    }
    ConfigStoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            exports: [],
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('config', _config_reducer__WEBPACK_IMPORTED_MODULE_3__["configReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_config_effects__WEBPACK_IMPORTED_MODULE_5__["ConfigEffects"]]),
            ],
        })
    ], ConfigStoreModule);
    return ConfigStoreModule;
}());



/***/ }),

/***/ "MZQL":
/*!*********************************************************************!*\
  !*** ./src/app/components/settings/mixer-list/mixer-list.module.ts ***!
  \*********************************************************************/
/*! exports provided: MixerListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MixerListModule", function() { return MixerListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mixer_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixer-list.component */ "je1Z");
/* harmony import */ var _mixer_mixer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixer/mixer.module */ "Yj2c");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








var MixerListModule = /** @class */ (function () {
    function MixerListModule() {
    }
    MixerListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_mixer_list_component__WEBPACK_IMPORTED_MODULE_3__["MixerListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _mixer_mixer_module__WEBPACK_IMPORTED_MODULE_4__["MixerModule"],
            ],
        })
    ], MixerListModule);
    return MixerListModule;
}());



/***/ }),

/***/ "MdEb":
/*!**************************************************************************!*\
  !*** ./src/app/components/settings/mixer-list/mixer-list.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXhlci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "MmwW":
/*!****************************************************************!*\
  !*** ./src/app/store/access-control/access-control.effects.ts ***!
  \****************************************************************/
/*! exports provided: AccessControlEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlEffects", function() { return AccessControlEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _access_control_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./access-control.reducer */ "IBGI");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _config_config_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/config.reducer */ "JAt8");
/* harmony import */ var _services_access_control_access_control_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/access-control/access-control.service */ "g8o9");
/* harmony import */ var _services_storage_db_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/storage/db.service */ "iwvj");










var AccessControlEffects = /** @class */ (function () {
    function AccessControlEffects(actions$, store, accessControl, db) {
        this.actions$ = actions$;
        this.store = store;
        this.accessControl = accessControl;
        this.db = db;
    }
    AccessControlEffects.prototype.init = function () {
        var _this = this;
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_access_control_reducer__WEBPACK_IMPORTED_MODULE_5__["AccessControlActionTypes"].INIT))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.db.getAccessControlEpisode()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (items) { return new _access_control_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionAccessControlUpdate"](items); })), _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_config_config_reducer__WEBPACK_IMPORTED_MODULE_7__["selectorConfigAccessControl"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilKeyChanged"])('enable'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (config) { return config.enable ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["concat"])(_this.stop(), _this.start(config), _this.process(config)) : _this.stop(); }))); }));
    };
    AccessControlEffects.prototype.add = function () {
        var _this = this;
        return this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_access_control_reducer__WEBPACK_IMPORTED_MODULE_5__["AccessControlActionTypes"].ADD))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_access_control_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorAccessControlLastEpisode"]))))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var action = _a[0], episode = _a[1];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.db.logAccessControl(episode.key, action.payload));
        }));
    };
    AccessControlEffects.prototype.start = function (config) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["concat"])(this.accessControl.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (state) { return state === 'idle'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(function () { return _this.accessControl.start(config); })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["ignoreElements"])());
    };
    AccessControlEffects.prototype.stop = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["concat"])(this.accessControl.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (state) { return state === 'idle'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(function () { return _this.accessControl.stop(); })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["ignoreElements"])());
    };
    AccessControlEffects.prototype.process = function (config) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Date.now()); }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (date) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(function () { return _this.accessControl.process(); }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (result) {
                var ms = Math.max(1000 / config.fps - (Date.now() - date), 30);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["concat"])(result ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _access_control_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionAccessControlAdd"]({
                    key: date,
                    value: {
                        processTime: Date.now() - date,
                        image: _this.accessControl.getImage(),
                    },
                })) : rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"], Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["delay"])(ms), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["ignoreElements"])()));
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["repeat"])());
    };
    AccessControlEffects.prototype.process2 = function (config) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, 1000 / config.fps)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["exhaustMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Date.now()); })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (date) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(function () { return _this.accessControl.process(); })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (result) {
            return result ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _access_control_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionAccessControlAdd"]({
                key: date,
                value: {
                    processTime: Date.now() - date,
                    image: _this.accessControl.getImage(),
                },
            })) : rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
        })); })); }));
    };
    AccessControlEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _services_access_control_access_control_service__WEBPACK_IMPORTED_MODULE_8__["AccessControlService"] },
        { type: _services_storage_db_service__WEBPACK_IMPORTED_MODULE_9__["DbService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], AccessControlEffects.prototype, "init", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], AccessControlEffects.prototype, "add", null);
    AccessControlEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _services_access_control_access_control_service__WEBPACK_IMPORTED_MODULE_8__["AccessControlService"],
            _services_storage_db_service__WEBPACK_IMPORTED_MODULE_9__["DbService"]])
    ], AccessControlEffects);
    return AccessControlEffects;
}());



/***/ }),

/***/ "N1LG":
/*!*******************************************************************!*\
  !*** ./src/app/platform/browser/serial/browser-serial.service.ts ***!
  \*******************************************************************/
/*! exports provided: BrowserSerialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserSerialService", function() { return BrowserSerialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



var BrowserSerialService = /** @class */ (function () {
    function BrowserSerialService() {
        this.enabled = true;
        this.responseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        if (!('serial' in navigator)) {
            // throw new Error('Your browser does not support Serial API');
            console.warn('Your browser does not support Serial API');
            this.enabled = false;
        }
        this.response$ = this.responseSubject.asObservable();
        // navigator.serial.addEventListener("connect", (event) => {
        // TODO: Automatically open event.target or warn user a port is available.
        // });
        // navigator.serial.addEventListener("disconnect", (event) => {
        // TODO: Remove |event.target| from the UI.
        // If the serial port was opened, a stream error would be observed as well.
        // });
    }
    /**
     * Run the discovery process.
     *
     * @param options such as filters and optional services
     * @return  Emites the value of the requested service read from the device
     */
    BrowserSerialService.prototype.discover = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ports, port;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('[Serial::Info] Requesting devices with options %o', options);
                        return [4 /*yield*/, navigator['serial'].getPorts()];
                    case 1:
                        ports = _a.sent();
                        console.log(ports);
                        return [4 /*yield*/, navigator.serial.requestPort()];
                    case 2:
                        port = _a.sent();
                        console.log(port);
                        console.log(port.getInfo());
                        this.port = port;
                        return [2 /*return*/, [{
                                    id: 'id',
                                    name: 'name',
                                    type: 'serial',
                                    port: port,
                                }]];
                }
            });
        });
    };
    BrowserSerialService.prototype.connect = function (device) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Wait for the serial port to open.
                        console.log('open serial port');
                        return [4 /*yield*/, this.port.open({
                                baudrate: 9600,
                                baudRate: 9600,
                            })];
                    case 1:
                        _a.sent();
                        // dataBits: The number of data bits per frame (either 7 or 8).
                        // stopBits: The number of stop bits at the end of a frame (either 1 or 2).
                        // parity: The parity mode (either "none", "even" or "odd").
                        // bufferSize: The size of the read and write buffers that should be created (must be less than 16MB).
                        // flowControl: The flow control mode (either "none" or "hardware").
                        console.log('serial port is opened');
                        return [2 /*return*/];
                }
            });
        });
    };
    BrowserSerialService.prototype.disconnect = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    BrowserSerialService.prototype.send = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var writer;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('serial port write');
                        writer = this.port.writable.getWriter();
                        return [4 /*yield*/, writer.write(data)];
                    case 1:
                        _a.sent();
                        writer.releaseLock();
                        return [2 /*return*/];
                }
            });
        });
    };
    BrowserSerialService.prototype.read = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, value, done, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (false) {}
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.port.readable.getReader().read()];
                    case 2:
                        _a = _b.sent(), value = _a.value, done = _a.done;
                        if (value) {
                            this.responseSubject.next(value);
                        }
                        if (done) {
                            console.log('[readLoop] DONE', done);
                            this.port.readable.getReader().releaseLock();
                            return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 0];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BrowserSerialService.ctorParameters = function () { return []; };
    BrowserSerialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BrowserSerialService);
    return BrowserSerialService;
}());



/***/ }),

/***/ "NLeb":
/*!*******************************************************************!*\
  !*** ./src/app/components/settings/dose-list/dose-list.module.ts ***!
  \*******************************************************************/
/*! exports provided: DoseListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoseListModule", function() { return DoseListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dose_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dose-list.component */ "8eVM");
/* harmony import */ var _dose_dose_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dose/dose.module */ "Tgud");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








var DoseListModule = /** @class */ (function () {
    function DoseListModule() {
    }
    DoseListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dose_list_component__WEBPACK_IMPORTED_MODULE_3__["DoseListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _dose_dose_module__WEBPACK_IMPORTED_MODULE_4__["DoseModule"],
            ],
        })
    ], DoseListModule);
    return DoseListModule;
}());



/***/ }),

/***/ "NQxp":
/*!*********************************************************!*\
  !*** ./src/app/components/monitor/monitor.component.ts ***!
  \*********************************************************/
/*! exports provided: MonitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorComponent", function() { return MonitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_monitor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./monitor.component.html */ "KFQ5");
/* harmony import */ var _monitor_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monitor.component.scss */ "Cf3h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_monitor_monitor_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/monitor/monitor.reducer */ "iET3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







var MonitorComponent = /** @class */ (function () {
    function MonitorComponent(store) {
        var _this = this;
        this.store = store;
        this.tempOptions$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_monitor_monitor_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorMonitorTemp"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (temp) { return _this.getTempOptions(temp); }));
        this.flowOptions$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_monitor_monitor_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorMonitorFlow"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (flow) { return _this.getFlowOptions(flow); }));
    }
    MonitorComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_monitor_monitor_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionMonitorInit"]());
    };
    MonitorComponent.prototype.getTempOptions = function (temp) {
        return {
            color: ['#1edb13'],
            title: {
                show: true,
                text: 'Temperature ℃',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
            },
            dataZoom: {
                show: true,
                realtime: true,
                zoomLock: true,
                start: 80,
                end: 100,
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: [
                {
                    type: 'category',
                    data: temp.xData,
                    axisTick: {
                        alignWithLabel: true,
                    },
                },
            ],
            yAxis: [
                {
                    type: 'value',
                },
            ],
            series: [
                {
                    name: 'Counters',
                    type: 'line',
                    barWidth: '60%',
                    data: temp.yData,
                },
            ],
        };
    };
    MonitorComponent.prototype.getFlowOptions = function (flow) {
        return {
            color: ['#3398DB'],
            title: {
                show: true,
                text: 'Flow mL/min',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
            },
            dataZoom: {
                show: true,
                realtime: true,
                zoomLock: true,
                start: 80,
                end: 100,
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: [
                {
                    type: 'category',
                    data: flow.xData,
                    axisTick: {
                        alignWithLabel: true,
                    },
                },
            ],
            yAxis: [
                {
                    type: 'value',
                },
            ],
            series: [
                {
                    name: 'mL/min',
                    type: 'line',
                    barWidth: '60%',
                    data: flow.yData,
                },
            ],
        };
    };
    MonitorComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    MonitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-monitor',
            template: _raw_loader_monitor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_monitor_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], MonitorComponent);
    return MonitorComponent;
}());



/***/ }),

/***/ "ODUb":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/dose-list/dose-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-accordion>\n  <mat-expansion-panel *ngFor=\"let dose of doses$ | async; let index = index; trackBy: trackByIndex\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        #{{index + 1}}\n      </mat-panel-title>\n      <mat-panel-description>\n        {{(names$ | async)[index]}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <ng-template matExpansionPanelContent>\n      <app-dose\n        [dose]=\"dose\"\n        [name]=\"(names$ | async)[index]\"\n        (doseChange)=\"onChange(index, $event)\"\n        (nameChange)=\"onNameChange(index, $event)\"\n      ></app-dose>\n    </ng-template>\n  </mat-expansion-panel>\n</mat-accordion>\n");

/***/ }),

/***/ "OLTt":
/*!****************************************************************************!*\
  !*** ./src/app/components/access-control/access-control-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AccessControlRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlRoutingModule", function() { return AccessControlRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _access_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-control.component */ "eZ0O");




var routes = [
    {
        path: 'access-control',
        component: _access_control_component__WEBPACK_IMPORTED_MODULE_3__["AccessControlComponent"],
        data: {
            title: 'Access control',
            actions: ['menu', 'bt', 'sync'],
        },
    },
];
var AccessControlRoutingModule = /** @class */ (function () {
    function AccessControlRoutingModule() {
    }
    AccessControlRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AccessControlRoutingModule);
    return AccessControlRoutingModule;
}());



/***/ }),

/***/ "OVTF":
/*!****************************************************!*\
  !*** ./src/app/services/connect/connect.module.ts ***!
  \****************************************************/
/*! exports provided: ConnectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectModule", function() { return ConnectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect.service */ "EEFU");
/* harmony import */ var _platform_app_platform_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../platform/app-platform.module */ "tFt5");





var ConnectModule = /** @class */ (function () {
    function ConnectModule() {
    }
    ConnectModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _platform_app_platform_module__WEBPACK_IMPORTED_MODULE_4__["AppPlatformModule"]],
            providers: [_connect_service__WEBPACK_IMPORTED_MODULE_3__["ConnectService"]],
        })
    ], ConnectModule);
    return ConnectModule;
}());



/***/ }),

/***/ "Oaqo":
/*!******************************************************************************!*\
  !*** ./src/app/components/calibrate/calibrate-dose/calibrate-dose.module.ts ***!
  \******************************************************************************/
/*! exports provided: CalibrateDoseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalibrateDoseModule", function() { return CalibrateDoseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _calibrate_dose_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calibrate-dose.component */ "e/0k");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");










var CalibrateDoseModule = /** @class */ (function () {
    function CalibrateDoseModule() {
    }
    CalibrateDoseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_calibrate_dose_component__WEBPACK_IMPORTED_MODULE_3__["CalibrateDoseComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            ],
        })
    ], CalibrateDoseModule);
    return CalibrateDoseModule;
}());



/***/ }),

/***/ "Ou21":
/*!*******************************************************!*\
  !*** ./src/app/shared/day-time/day-time.component.ts ***!
  \*******************************************************/
/*! exports provided: DayTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayTimeComponent", function() { return DayTimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_day_time_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./day-time.component.html */ "FfYR");
/* harmony import */ var _day_time_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./day-time.component.scss */ "aGZk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var DayTimeComponent = /** @class */ (function () {
    function DayTimeComponent() {
        this.timeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.hours = new Array(24).fill(0).map(function (v, i) { return i; });
        this.minutes = new Array(60).fill(0).map(function (v, i) { return i; });
    }
    DayTimeComponent.prototype.ngOnInit = function () {
    };
    DayTimeComponent.prototype.onChange = function (changes) {
        this.timeChange.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.time), changes));
    };
    DayTimeComponent.ctorParameters = function () { return []; };
    DayTimeComponent.propDecorators = {
        time: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        timeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    DayTimeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-day-time',
            template: _raw_loader_day_time_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_day_time_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DayTimeComponent);
    return DayTimeComponent;
}());



/***/ }),

/***/ "PByM":
/*!**************************************************************************!*\
  !*** ./src/app/components/settings/timer-list/timer-list.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "PMQD":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/schedule-list/schedule-list.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-accordion>\n  <mat-expansion-panel *ngFor=\"let schedule of schedules$ | async; let index = index; trackBy: trackByIndex\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        #{{index + 1}}\n      </mat-panel-title>\n      <mat-panel-description>\n        {{(names$ | async)[index]}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <ng-template matExpansionPanelContent>\n      <app-schedule\n        [schedule]=\"schedule\"\n        [name]=\"(names$ | async)[index]\"\n        (scheduleChange)=\"onChange(index, $event)\"\n        (nameChange)=\"onNameChange(index, $event)\"\n      ></app-schedule>\n    </ng-template>\n  </mat-expansion-panel>\n</mat-accordion>\n");

/***/ }),

/***/ "PnUB":
/*!**************************************************************!*\
  !*** ./src/app/components/monitor/monitor-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: MonitorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorRoutingModule", function() { return MonitorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _monitor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monitor.component */ "NQxp");




var routes = [
    {
        path: 'monitor',
        component: _monitor_component__WEBPACK_IMPORTED_MODULE_3__["MonitorComponent"],
        data: {
            title: 'Monitor',
            actions: ['menu', 'bt', 'sync'],
        },
    },
];
var MonitorRoutingModule = /** @class */ (function () {
    function MonitorRoutingModule() {
    }
    MonitorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MonitorRoutingModule);
    return MonitorRoutingModule;
}());



/***/ }),

/***/ "Q12L":
/*!********************************************************************************************!*\
  !*** ./src/app/components/config/access-control-config/access-control-config.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AccessControlConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlConfigComponent", function() { return AccessControlConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_access_control_config_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./access-control-config.component.html */ "j+l3");
/* harmony import */ var _access_control_config_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./access-control-config.component.scss */ "Ycwp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AccessControlConfigComponent = /** @class */ (function () {
    function AccessControlConfigComponent() {
        this.accessControlChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    AccessControlConfigComponent.prototype.ngOnInit = function () {
    };
    AccessControlConfigComponent.prototype.onChange = function (changes) {
        this.accessControlChange.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.accessControl), changes));
    };
    AccessControlConfigComponent.ctorParameters = function () { return []; };
    AccessControlConfigComponent.propDecorators = {
        accessControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        accessControlChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    AccessControlConfigComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-access-control-config',
            template: _raw_loader_access_control_config_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_access_control_config_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AccessControlConfigComponent);
    return AccessControlConfigComponent;
}());



/***/ }),

/***/ "QK2S":
/*!****************************************************************!*\
  !*** ./src/app/components/log/log-filter/log-filter.module.ts ***!
  \****************************************************************/
/*! exports provided: LogFilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogFilterModule", function() { return LogFilterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _log_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-filter.component */ "rVOb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");









var LogFilterModule = /** @class */ (function () {
    function LogFilterModule() {
    }
    LogFilterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_log_filter_component__WEBPACK_IMPORTED_MODULE_3__["LogFilterComponent"]],
            exports: [_log_filter_component__WEBPACK_IMPORTED_MODULE_3__["LogFilterComponent"]],
            entryComponents: [_log_filter_component__WEBPACK_IMPORTED_MODULE_3__["LogFilterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
            ],
        })
    ], LogFilterModule);
    return LogFilterModule;
}());



/***/ }),

/***/ "QOcv":
/*!****************************************************************************************!*\
  !*** ./src/app/components/settings/compote-list/compote-daily/compote-daily.module.ts ***!
  \****************************************************************************************/
/*! exports provided: CompoteDailyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompoteDailyModule", function() { return CompoteDailyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _compote_daily_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compote-daily.component */ "sDqn");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");






var CompoteDailyModule = /** @class */ (function () {
    function CompoteDailyModule() {
    }
    CompoteDailyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_compote_daily_component__WEBPACK_IMPORTED_MODULE_3__["CompoteDailyComponent"]],
            exports: [_compote_daily_component__WEBPACK_IMPORTED_MODULE_3__["CompoteDailyComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]]
        })
    ], CompoteDailyModule);
    return CompoteDailyModule;
}());



/***/ }),

/***/ "QbVE":
/*!**************************************************!*\
  !*** ./src/app/store/connect/connect.effects.ts ***!
  \**************************************************/
/*! exports provided: ConnectEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectEffects", function() { return ConnectEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _connect_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connect.reducer */ "pp5j");
/* harmony import */ var _services_connect_connect_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/connect/connect.service */ "EEFU");
/* harmony import */ var _config_config_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/config.reducer */ "JAt8");
/* harmony import */ var _model_connect_status__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/connect-status */ "YzEn");
/* harmony import */ var _model_device_response_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/device-response-type */ "8NFJ");
/* harmony import */ var _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../settings/settings.reducer */ "inRq");












var ConnectEffects = /** @class */ (function () {
    function ConnectEffects(actions$, store, connectBt) {
        this.actions$ = actions$;
        this.store = store;
        this.connectBt = connectBt;
    }
    ConnectEffects.prototype.connect = function () {
        var _this = this;
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ConnectActionTypes"].CONNECT))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_config_config_reducer__WEBPACK_IMPORTED_MODULE_8__["selectorBtDevice"]))))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var action = _a[0], device = _a[1];
            return device ?
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.connectBt.connect(device)) :
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.connectBt.discover())
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (device) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.connectBt.connect(device[0])); }));
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectSetStatus"](_model_connect_status__WEBPACK_IMPORTED_MODULE_9__["ConnectStatus"].CONNECTED)); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectError"](error)); }));
    };
    ConnectEffects.prototype.disconnect = function () {
        var _this = this;
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ConnectActionTypes"].DISCONNECT))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.connectBt.disconnect())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectSetStatus"](_model_connect_status__WEBPACK_IMPORTED_MODULE_9__["ConnectStatus"].DISCONNECTED)); })); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectError"](error)); }));
    };
    ConnectEffects.prototype.request = function () {
        var _this = this;
        return this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ConnectActionTypes"].REQUEST))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.select(_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorConnectStatus"])))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_a) {
            var a = _a[0], status = _a[1];
            return status === _model_connect_status__WEBPACK_IMPORTED_MODULE_9__["ConnectStatus"].CONNECTED ||
                status === _model_connect_status__WEBPACK_IMPORTED_MODULE_9__["ConnectStatus"].TRANSFER;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (_a) {
            var action = _a[0], status = _a[1];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectSetStatus"](_model_connect_status__WEBPACK_IMPORTED_MODULE_9__["ConnectStatus"].TRANSFER)), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.connectBt.send(action.payload)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["ignoreElements"])()), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectSetStatus"](_model_connect_status__WEBPACK_IMPORTED_MODULE_9__["ConnectStatus"].CONNECTED)));
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectError"](error)); }));
    };
    ConnectEffects.prototype.response = function () {
        return this.connectBt.response$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return new _connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectResponse"](response); }));
    };
    ConnectEffects.prototype.responseProcess = function () {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ConnectActionTypes"].RESPONSE))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var payload = _a.payload;
            switch (payload.type) {
                case _model_device_response_type__WEBPACK_IMPORTED_MODULE_10__["DeviceResponseType"].pump:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_11__["ActionSettingsUpdatePump"]({
                        index: payload.payload.index,
                        value: payload.payload.value,
                    }));
                case _model_device_response_type__WEBPACK_IMPORTED_MODULE_10__["DeviceResponseType"].mixer:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_11__["ActionSettingsUpdateMixer"]({
                        index: payload.payload.index,
                        value: payload.payload.value,
                    }));
                case _model_device_response_type__WEBPACK_IMPORTED_MODULE_10__["DeviceResponseType"].dose:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_11__["ActionSettingsUpdateDose"]({
                        index: payload.payload.index,
                        value: payload.payload.value,
                    }));
                case _model_device_response_type__WEBPACK_IMPORTED_MODULE_10__["DeviceResponseType"].program:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_11__["ActionSettingsUpdateProgram"]({
                        index: payload.payload.index,
                        value: payload.payload.value,
                    }));
                case _model_device_response_type__WEBPACK_IMPORTED_MODULE_10__["DeviceResponseType"].timer:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_11__["ActionSettingsUpdateTimer"]({
                        index: payload.payload.index,
                        value: payload.payload.value,
                    }));
                case _model_device_response_type__WEBPACK_IMPORTED_MODULE_10__["DeviceResponseType"].schedule:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_11__["ActionSettingsUpdateSchedule"]({
                        index: payload.payload.index,
                        value: payload.payload.value,
                    }));
                case _model_device_response_type__WEBPACK_IMPORTED_MODULE_10__["DeviceResponseType"].compoteDaily:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_11__["ActionSettingsUpdateCompoteDaily"]({
                        index: payload.payload.index,
                        dailyIndex: payload.payload.dailyIndex,
                        value: payload.payload.value,
                    }));
                case _model_device_response_type__WEBPACK_IMPORTED_MODULE_10__["DeviceResponseType"].pinPump:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_11__["ActionSettingsUpdatePinAssignment"]({
                        key: 'pump',
                        index: payload.payload.index,
                        value: payload.payload.value,
                    }));
                case _model_device_response_type__WEBPACK_IMPORTED_MODULE_10__["DeviceResponseType"].pinValve:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_11__["ActionSettingsUpdatePinAssignment"]({
                        key: 'valve',
                        index: payload.payload.index,
                        value: payload.payload.value,
                    }));
                case _model_device_response_type__WEBPACK_IMPORTED_MODULE_10__["DeviceResponseType"].pinFlowSensor:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_11__["ActionSettingsUpdatePinAssignment"]({
                        key: 'flowSensor',
                        index: payload.payload.index,
                        value: payload.payload.value,
                    }));
                case _model_device_response_type__WEBPACK_IMPORTED_MODULE_10__["DeviceResponseType"].pinLevelSensor:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_11__["ActionSettingsUpdatePinAssignment"]({
                        key: 'levelSensor',
                        index: payload.payload.index,
                        value: payload.payload.value,
                    }));
                case _model_device_response_type__WEBPACK_IMPORTED_MODULE_10__["DeviceResponseType"].pinDose:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_11__["ActionSettingsUpdatePinAssignment"]({
                        key: 'dose',
                        index: payload.payload.index,
                        value: payload.payload.value,
                    }));
                case _model_device_response_type__WEBPACK_IMPORTED_MODULE_10__["DeviceResponseType"].pinMixer:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_11__["ActionSettingsUpdatePinAssignment"]({
                        key: 'mixer',
                        index: payload.payload.index,
                        value: payload.payload.value,
                    }));
                case _model_device_response_type__WEBPACK_IMPORTED_MODULE_10__["DeviceResponseType"].pinDoseMixer:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_11__["ActionSettingsUpdatePinAssignment"]({
                        key: 'doseMixer',
                        index: payload.payload.index,
                        value: payload.payload.value,
                    }));
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
        }));
    };
    ConnectEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _services_connect_connect_service__WEBPACK_IMPORTED_MODULE_7__["ConnectService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ConnectEffects.prototype, "connect", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ConnectEffects.prototype, "disconnect", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ConnectEffects.prototype, "request", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ConnectEffects.prototype, "response", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ConnectEffects.prototype, "responseProcess", null);
    ConnectEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _services_connect_connect_service__WEBPACK_IMPORTED_MODULE_7__["ConnectService"]])
    ], ConnectEffects);
    return ConnectEffects;
}());



/***/ }),

/***/ "Qftb":
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboard/time-chart/time-chart.component.ts ***!
  \*************************************************************************/
/*! exports provided: TimeChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeChartComponent", function() { return TimeChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_time_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./time-chart.component.html */ "VBlw");
/* harmony import */ var _time_chart_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-chart.component.scss */ "TI9F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var smoothie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! smoothie */ "JYkB");
/* harmony import */ var smoothie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(smoothie__WEBPACK_IMPORTED_MODULE_4__);





var TimeChartComponent = /** @class */ (function () {
    function TimeChartComponent() {
    }
    TimeChartComponent.prototype.ngOnInit = function () {
    };
    TimeChartComponent.prototype.ngAfterViewInit = function () {
        this.chart = new smoothie__WEBPACK_IMPORTED_MODULE_4__["SmoothieChart"]({
            millisPerPixel: 5000,
            responsive: true,
            grid: {
                verticalSections: 3,
                millisPerLine: 60000,
                sharpLines: true,
            },
        });
        this.series = new smoothie__WEBPACK_IMPORTED_MODULE_4__["TimeSeries"]();
        this.chart.addTimeSeries(this.series, {
            strokeStyle: 'rgba(0, 255, 0, 1)',
            fillStyle: 'rgba(0, 255, 0, 0.2)',
            lineWidth: 1,
        });
        this.chart.streamTo(this.chartCanvas.nativeElement, 5000);
    };
    TimeChartComponent.prototype.add = function (value) {
        this.series.append(new Date().getTime(), value);
    };
    TimeChartComponent.ctorParameters = function () { return []; };
    TimeChartComponent.propDecorators = {
        chartCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['chart', { static: true },] }]
    };
    TimeChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-time-chart',
            template: _raw_loader_time_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_time_chart_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TimeChartComponent);
    return TimeChartComponent;
}());



/***/ }),

/***/ "Qnvn":
/*!**********************************************************************************!*\
  !*** ./src/app/components/config/database-config/database-config.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhYmFzZS1jb25maWcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Qu8q":
/*!*************************************************************************!*\
  !*** ./src/app/components/settings/mixer-list/mixer/mixer.component.ts ***!
  \*************************************************************************/
/*! exports provided: MixerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MixerComponent", function() { return MixerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mixer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mixer.component.html */ "L/S7");
/* harmony import */ var _mixer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixer.component.scss */ "p64W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var MixerComponent = /** @class */ (function () {
    function MixerComponent() {
        this.mixerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nameChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    MixerComponent.prototype.ngOnInit = function () {
    };
    MixerComponent.prototype.onChange = function (changes) {
        this.mixerChange.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.mixer), changes));
    };
    MixerComponent.prototype.onNameChange = function (name) {
        this.nameChange.next(name);
    };
    MixerComponent.ctorParameters = function () { return []; };
    MixerComponent.propDecorators = {
        mixer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        mixerChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        nameChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    MixerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-mixer',
            template: _raw_loader_mixer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_mixer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], MixerComponent);
    return MixerComponent;
}());



/***/ }),

/***/ "RGej":
/*!******************************************************!*\
  !*** ./src/app/components/monitor/monitor.module.ts ***!
  \******************************************************/
/*! exports provided: MonitorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorModule", function() { return MonitorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _monitor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monitor.component */ "NQxp");
/* harmony import */ var _shared_page_page_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/page/page.module */ "IQGA");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-echarts */ "DKVz");
/* harmony import */ var _monitor_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./monitor-routing.module */ "PnUB");







var MonitorModule = /** @class */ (function () {
    function MonitorModule() {
    }
    MonitorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_monitor_component__WEBPACK_IMPORTED_MODULE_3__["MonitorComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _monitor_routing_module__WEBPACK_IMPORTED_MODULE_6__["MonitorRoutingModule"], _shared_page_page_module__WEBPACK_IMPORTED_MODULE_4__["PageModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"]],
        })
    ], MonitorModule);
    return MonitorModule;
}());



/***/ }),

/***/ "RabY":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dev/dev.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-button (click)=\"discover()\">Discover</button>\n<button mat-button (click)=\"requestStatus()\">Status</button>\n<button mat-button (click)=\"compote()\">Compote</button>\n<button mat-button (click)=\"mixer()\">Mixer</button>\n<button mat-button (click)=\"getProgram()\">getProgram</button>\n<button mat-button (click)=\"setProgram()\">setProgram</button>\n<button mat-button (click)=\"getCompote()\">getCompote</button>\n<button mat-button (click)=\"setCompote()\">setCompote</button>\n<button mat-button (click)=\"getTimer()\">getTimer</button>\n<button mat-button (click)=\"setTimer()\">setTimer</button>\n<button mat-button (click)=\"getSchedule()\">getSchedule</button>\n<button mat-button (click)=\"setSchedule()\">setSchedule</button>\n<button mat-button (click)=\"simulate()\">simulate</button>\n<button mat-button (click)=\"serialDiscover()\">serial discover</button>\n<button mat-button (click)=\"serialConnect()\">serial connect</button>\n<button mat-button (click)=\"syncSettings()\">sync</button>\n<button mat-button (click)=\"resetError()\">Reset error</button>\n<app-dev-access-control></app-dev-access-control>\n");

/***/ }),

/***/ "RcLG":
/*!********************************************************************************************!*\
  !*** ./src/app/components/calibrate/calibrate-flow-sensor/calibrate-flow-sensor.module.ts ***!
  \********************************************************************************************/
/*! exports provided: CalibrateFlowSensorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalibrateFlowSensorModule", function() { return CalibrateFlowSensorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _calibrate_flow_sensor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calibrate-flow-sensor.component */ "HX34");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");










var CalibrateFlowSensorModule = /** @class */ (function () {
    function CalibrateFlowSensorModule() {
    }
    CalibrateFlowSensorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_calibrate_flow_sensor_component__WEBPACK_IMPORTED_MODULE_3__["CalibrateFlowSensorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            ],
        })
    ], CalibrateFlowSensorModule);
    return CalibrateFlowSensorModule;
}());



/***/ }),

/***/ "RcPo":
/*!************************************!*\
  !*** ./src/app/model/date-time.ts ***!
  \************************************/
/*! exports provided: dateToDateTime, dateToDateDay, dateDayToDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateToDateTime", function() { return dateToDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateToDateDay", function() { return dateToDateDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateDayToDate", function() { return dateDayToDate; });
function dateToDateTime(date) {
    return {
        minute: date.getMinutes(),
        second: date.getSeconds(),
        hour: date.getHours(),
        wday: date.getDay(),
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear() - 1970,
    };
}
function dateToDateDay(date) {
    return {
        wday: date.getDay(),
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear() - 1970,
    };
}
function dateDayToDate(date) {
    return new Date(date.year + 1970, date.month, date.day);
}


/***/ }),

/***/ "RgQe":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/calibrate/calibrate-flow-sensor/calibrate-flow-sensor.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxpYnJhdGUtZmxvdy1zZW5zb3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "SCOo":
/*!**********************************************************************!*\
  !*** ./src/app/components/dashboard/time-chart/time-chart.module.ts ***!
  \**********************************************************************/
/*! exports provided: TimeChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeChartModule", function() { return TimeChartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _time_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time-chart.component */ "Qftb");




var TimeChartModule = /** @class */ (function () {
    function TimeChartModule() {
    }
    TimeChartModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_time_chart_component__WEBPACK_IMPORTED_MODULE_3__["TimeChartComponent"]],
            exports: [_time_chart_component__WEBPACK_IMPORTED_MODULE_3__["TimeChartComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
        })
    ], TimeChartModule);
    return TimeChartModule;
}());



/***/ }),

/***/ "SFq8":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-wrap\">\n  <mat-card class=\"w-100 m-1\">\n    <mat-card-content class=\"w-100 h-100 d-flex align-items-center\">\n      <mat-icon svgIcon=\"clock-outline\"></mat-icon>\n      &nbsp;\n      Time {{time$ | async | dateTime}}\n      &nbsp;\n      <button mat-icon-button (click)=\"onSyncTime()\">\n        <mat-icon svgIcon=\"sync\"></mat-icon>\n      </button>\n    </mat-card-content>\n  </mat-card>\n  <mat-card class=\"w-100 m-1\">\n    <mat-card-content class=\"w-100\">\n      <div>\n        <mat-icon svgIcon=\"thermometer\"></mat-icon>\n        Temperature&nbsp;{{temp$ | async | number: '1.2-2'}}℃\n        Min&nbsp;{{minTemp$ | async | number: '1.2-2'}}℃\n        Max&nbsp;{{maxTemp$ | async | number: '1.2-2'}}℃\n      </div>\n      <app-time-chart #chart></app-time-chart>\n    </mat-card-content>\n  </mat-card>\n  <mat-card class=\"w-100 m-1\">\n    <mat-card-content class=\"w-100 h-100 d-flex align-items-center\">\n      <app-status class=\"w-100\" [status]=\"status$ | async\"></app-status>\n    </mat-card-content>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "SaK9":
/*!***************************************!*\
  !*** ./src/app/model/device-parts.ts ***!
  \***************************************/
/*! exports provided: DevicePartType, devicePartTypeName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePartType", function() { return DevicePartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devicePartTypeName", function() { return devicePartTypeName; });
/**
 * Devices parts
 */
var DevicePartType;
(function (DevicePartType) {
    DevicePartType[DevicePartType["pump"] = 0] = "pump";
    DevicePartType[DevicePartType["valve"] = 1] = "valve";
    DevicePartType[DevicePartType["mixer"] = 2] = "mixer";
    DevicePartType[DevicePartType["dose"] = 3] = "dose";
    DevicePartType[DevicePartType["doseMixer"] = 4] = "doseMixer";
    DevicePartType[DevicePartType["flowSensor"] = 5] = "flowSensor";
    DevicePartType[DevicePartType["levelSensor"] = 6] = "levelSensor";
    DevicePartType[DevicePartType["rtc"] = 7] = "rtc";
    DevicePartType[DevicePartType["display"] = 8] = "display";
    DevicePartType[DevicePartType["button"] = 9] = "button";
})(DevicePartType || (DevicePartType = {}));
;
var devicePartTypeName = {
    pump: 'Pump',
    valve: 'Valve',
    mixer: 'Mixer',
    dose: 'Dose',
    doseMixer: 'Dose Mixer',
    flowSensor: 'Flow Sensor',
    levelSensor: 'Level Sensor',
    rtc: 'RTC',
    display: 'Display',
    button: 'Button',
};


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/settings/settings.reducer */ "inRq");
/* harmony import */ var _store_config_config_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/config/config.reducer */ "JAt8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/connect/connect.reducer */ "pp5j");
/* harmony import */ var _model_connect_status__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/connect-status */ "YzEn");
/* harmony import */ var _store_dashboard_dashboard_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/dashboard/dashboard.reducer */ "dImw");
/* harmony import */ var _store_log_log_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/log/log.reducer */ "ubYs");
/* harmony import */ var _store_access_control_access_control_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/access-control/access-control.reducer */ "IBGI");














var AppComponent = /** @class */ (function () {
    function AppComponent(store, router, activatedRoute) {
        this.store = store;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pageOptions$ = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivationStart"]; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (event) { return event.snapshot.data; }));
        this.btStatus$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_9__["selectorConnectStatus"]));
        this.sync$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorSettingsSync"]));
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsInit"]());
        this.store.dispatch(new _store_config_config_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConfigInit"]());
        this.store.dispatch(new _store_dashboard_dashboard_reducer__WEBPACK_IMPORTED_MODULE_11__["ActionDashboardInit"]());
        this.store.dispatch(new _store_log_log_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionLogInit"]());
        this.store.dispatch(new _store_access_control_access_control_reducer__WEBPACK_IMPORTED_MODULE_13__["ActionAccessControlInit"]());
    }
    AppComponent.prototype.onBack = function () {
        var route = this.getRoute();
        var pathFromRoot = route.snapshot.pathFromRoot;
        pathFromRoot.pop();
        var segments = pathFromRoot.map(function (p) { return p.url; }).reduce(function (p, v) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(p, v); }, []);
        var path = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(['/'], segments.map(function (p) { return p.path; }));
        this.router.navigate(path);
    };
    AppComponent.prototype.onAdd = function () {
        var route = this.getRoute();
        switch (route.routeConfig.path) {
            case 'compote':
                this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsAddCompote"]());
                break;
            case 'program':
                this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsAddProgram"]());
                break;
        }
    };
    AppComponent.prototype.onBt = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_9__["selectorConnectStatus"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe(function (status) {
            if (status === _model_connect_status__WEBPACK_IMPORTED_MODULE_10__["ConnectStatus"].DISCONNECTED) {
                _this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_9__["ActionConnectConnect"]());
            }
            else if (status === _model_connect_status__WEBPACK_IMPORTED_MODULE_10__["ConnectStatus"].CONNECTED) {
                _this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_9__["ActionConnectDisconnect"]());
            }
        });
    };
    AppComponent.prototype.onSync = function () {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsSync"]());
    };
    AppComponent.prototype.getRoute = function () {
        var route = this.activatedRoute.firstChild;
        var child = route;
        while (child) {
            if (child.firstChild) {
                child = child.firstChild;
                route = child;
            }
            else {
                child = null;
            }
        }
        return route;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "TBkr":
/*!**********************************************!*\
  !*** ./src/app/components/log/log.module.ts ***!
  \**********************************************/
/*! exports provided: LogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogModule", function() { return LogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _log_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log.component */ "C+iR");
/* harmony import */ var _shared_page_page_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/page/page.module */ "IQGA");
/* harmony import */ var _log_filter_log_filter_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log-filter/log-filter.module */ "QK2S");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _log_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./log-routing.module */ "63DD");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










var LogModule = /** @class */ (function () {
    function LogModule() {
    }
    LogModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_log_component__WEBPACK_IMPORTED_MODULE_3__["LogComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _log_routing_module__WEBPACK_IMPORTED_MODULE_7__["LogRoutingModule"], _shared_page_page_module__WEBPACK_IMPORTED_MODULE_4__["PageModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _log_filter_log_filter_module__WEBPACK_IMPORTED_MODULE_5__["LogFilterModule"]],
        })
    ], LogModule);
    return LogModule;
}());



/***/ }),

/***/ "TEPc":
/*!***************************************************************!*\
  !*** ./src/app/services/connect/device-request-serializer.ts ***!
  \***************************************************************/
/*! exports provided: DeviceRequestSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceRequestSerializer", function() { return DeviceRequestSerializer; });
/* harmony import */ var _model_device_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/device-io */ "X8Em");

// tslint:disable:no-bitwise
var DeviceRequestSerializer = /** @class */ (function () {
    function DeviceRequestSerializer(meta, struct, mapper) {
        this.meta = meta;
        this.struct = struct;
        this.mapper = mapper;
    }
    DeviceRequestSerializer.prototype.serialize = function (_a) {
        var _this = this;
        var type = _a.type, payload = _a.payload;
        var typeName = this.mapper[type];
        var meta = this.meta[typeName];
        var length = Object(_model_device_io__WEBPACK_IMPORTED_MODULE_0__["getLength"])(meta, this.struct);
        var raw = new ArrayBuffer(length);
        var rawView = new DataView(raw);
        var offset = 0;
        /**
         * convert data to bytes and save it to the buffer
         * @param o data to convert
         * @param m metadata
         */
        var writeBytes = function (o, m) {
            if (typeof m === 'string') {
                m = _this.struct[m];
            }
            Object.keys(m).forEach(function (key) {
                var field = m[key];
                var value = o[key];
                if (typeof field === 'string') {
                    field = { type: 'object', itemMeta: _this.struct[field] };
                }
                switch (field.type) {
                    case 'list':
                        value.forEach(function (c) { return writeBytes(c, field.itemMeta); });
                        return;
                    case 'object':
                        writeBytes(value, field.itemMeta);
                        return;
                    case 'uint8':
                        rawView.setUint8(offset, value);
                        offset += 1;
                        return;
                    case 'uint16':
                        rawView.setUint16(offset, value, true);
                        offset += 2;
                        return;
                    case 'uint32':
                        rawView.setUint32(offset, value, true);
                        offset += 4;
                        return;
                    case 'uint8[]':
                        value.forEach(function (v) {
                            rawView.setUint8(offset, v);
                            offset += 1;
                        });
                        return;
                    case 'uint16[]':
                        value.forEach(function (v) {
                            rawView.setUint16(offset, v, true);
                            offset += 2;
                        });
                        return;
                    case 'uint32[]':
                        value.forEach(function (v) {
                            rawView.setUint32(offset, v, true);
                            offset += 4;
                        });
                        return;
                    case 'string':
                        // wip
                        // rawView.setUint8(offset, value.length);
                        // offset += 1;
                        // for (let i = 0; i < value.length; i++) {
                        //   rawView.setUint8(offset, value.charCodeAt(i));
                        //   offset += 1;
                        // }
                        return;
                }
            });
        };
        writeBytes(payload, meta);
        var rawPayload = Object(_model_device_io__WEBPACK_IMPORTED_MODULE_0__["convert8bitTo7bit"])(new Uint8Array(raw));
        // begin marker + payload + end marker
        var result = new ArrayBuffer(rawPayload.byteLength + 2);
        var resultView = new DataView(result);
        resultView.setUint8(0, type | _model_device_io__WEBPACK_IMPORTED_MODULE_0__["DeviceIOMarker"].beginMessage);
        (new Uint8Array(result)).set(rawPayload, 1);
        var crc = Object(_model_device_io__WEBPACK_IMPORTED_MODULE_0__["crc6"])(new Uint8Array(raw));
        resultView.setUint8(result.byteLength - 1, crc | _model_device_io__WEBPACK_IMPORTED_MODULE_0__["DeviceIOMarker"].endMessage);
        // console.log(Array.from(new Uint8Array(result)).map(b => b.toString(16)).join(' '));
        return result;
    };
    return DeviceRequestSerializer;
}());



/***/ }),

/***/ "TI9F":
/*!***************************************************************************!*\
  !*** ./src/app/components/dashboard/time-chart/time-chart.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("canvas {\n  width: 100%;\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGltZS1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoidGltZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "TKUc":
/*!******************************************!*\
  !*** ./src/app/store/log/log.effects.ts ***!
  \******************************************/
/*! exports provided: LogEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogEffects", function() { return LogEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _log_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log.reducer */ "ubYs");
/* harmony import */ var _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../connect/connect.reducer */ "pp5j");
/* harmony import */ var _services_connect_message_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/connect/message-to-string */ "YQ9A");









var LogEffects = /** @class */ (function () {
    function LogEffects(actions$, store) {
        this.actions$ = actions$;
        this.store = store;
    }
    LogEffects.prototype.init = function () {
        var _this = this;
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_log_reducer__WEBPACK_IMPORTED_MODULE_6__["LogActionTypes"].INIT))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(_this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_7__["ConnectActionTypes"].CONNECT))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return ({
            time: new Date(),
            icon: 'bluetooth',
            text: 'bluetooth connect',
            type: _log_reducer__WEBPACK_IMPORTED_MODULE_6__["LogItemType"].connect,
        }); })), _this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_7__["ConnectActionTypes"].DISCONNECT))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return ({
            time: new Date(),
            icon: 'bluetooth-off',
            text: 'bluetooth disconnect',
            type: _log_reducer__WEBPACK_IMPORTED_MODULE_6__["LogItemType"].disconnect,
        }); })), _this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_7__["ConnectActionTypes"].REQUEST))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return ({
            time: new Date(),
            icon: 'chevron-right',
            text: Object(_services_connect_message_to_string__WEBPACK_IMPORTED_MODULE_8__["requestToString"])(action.payload),
            type: _log_reducer__WEBPACK_IMPORTED_MODULE_6__["LogItemType"].request,
            subType: action.payload.type,
        }); })), _this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_7__["ConnectActionTypes"].RESPONSE))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return ({
            time: new Date(),
            icon: 'chevron-left',
            text: Object(_services_connect_message_to_string__WEBPACK_IMPORTED_MODULE_8__["responseToString"])(action.payload),
            type: _log_reducer__WEBPACK_IMPORTED_MODULE_6__["LogItemType"].response,
            subType: action.payload.type,
        }); })), _this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_7__["ConnectActionTypes"].ERROR))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return ({
            time: new Date(),
            icon: 'alert-circle-outline',
            text: 'connect error',
            type: _log_reducer__WEBPACK_IMPORTED_MODULE_6__["LogItemType"].error,
        }); })))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (item) { return new _log_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionLogAdd"](item); })); }));
    };
    LogEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], LogEffects.prototype, "init", null);
    LogEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], LogEffects);
    return LogEffects;
}());



/***/ }),

/***/ "Tgud":
/*!*******************************************************************!*\
  !*** ./src/app/components/settings/dose-list/dose/dose.module.ts ***!
  \*******************************************************************/
/*! exports provided: DoseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoseModule", function() { return DoseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dose_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dose.component */ "emuR");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");







var DoseModule = /** @class */ (function () {
    function DoseModule() {
    }
    DoseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dose_component__WEBPACK_IMPORTED_MODULE_3__["DoseComponent"]],
            exports: [_dose_component__WEBPACK_IMPORTED_MODULE_3__["DoseComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"]],
        })
    ], DoseModule);
    return DoseModule;
}());



/***/ }),

/***/ "Th/r":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/config/monitor-config/monitor-config.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  Time\n  <app-device-monitor\n    [config]=\"config.time\"\n    (configChange)=\"onChange({time: $event})\"\n  ></app-device-monitor>\n</div>\n<div>\n  Temp\n  <app-device-monitor\n    [config]=\"config.temp\"\n    (configChange)=\"onChange({temp: $event})\"\n  ></app-device-monitor>\n</div>\n<div>\n  Status\n  <app-device-monitor\n    [config]=\"config.status\"\n    (configChange)=\"onChange({status: $event})\"\n  ></app-device-monitor>\n</div>\n");

/***/ }),

/***/ "U/d0":
/*!********************************************************************************!*\
  !*** ./src/app/components/config/database-config/database-config.component.ts ***!
  \********************************************************************************/
/*! exports provided: DatabaseConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseConfigComponent", function() { return DatabaseConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_database_config_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./database-config.component.html */ "1tfR");
/* harmony import */ var _database_config_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database-config.component.scss */ "Qnvn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");





var DatabaseConfigComponent = /** @class */ (function () {
    function DatabaseConfigComponent() {
        this.updateSizes = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true);
    }
    DatabaseConfigComponent.prototype.ngOnInit = function () {
    };
    DatabaseConfigComponent.prototype.onClear = function () {
        this.clear.emit(this.selection.selected);
        this.selection.clear();
    };
    DatabaseConfigComponent.ctorParameters = function () { return []; };
    DatabaseConfigComponent.propDecorators = {
        sizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        updateSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        clear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    DatabaseConfigComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-database-config',
            template: _raw_loader_database_config_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_database_config_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DatabaseConfigComponent);
    return DatabaseConfigComponent;
}());



/***/ }),

/***/ "UFAQ":
/*!****************************************************************************!*\
  !*** ./src/app/components/access-control/camshots/camshots.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .cdk-virtual-scroll-content-wrapper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n\napp-camshot {\n  width: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2Ftc2hvdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6ImNhbXNob3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5jZGstdmlydHVhbC1zY3JvbGwtY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbmFwcC1jYW1zaG90IHtcbiAgd2lkdGg6IDY0cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "UKqz":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/log/log.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <button mat-button (click)=\"onFilter()\" class=\"mt-1\">\n    <mat-icon svgIcon=\"filter-outline\" class=\"align-middle\"></mat-icon>\n    Filters...\n  </button>\n  <button mat-icon-button (click)=\"onFilterReset()\" *ngIf=\"hasFilter$ | async\">\n    <mat-icon svgIcon=\"close-circle-outline\"></mat-icon>\n  </button>\n</div>\n<cdk-virtual-scroll-viewport itemSize=\"24\" class=\"flex-fill\">\n  <div *cdkVirtualFor=\"let log of log$ | async\">\n    {{log.time | date: 'HH:mm:ss'}}\n    <mat-icon [svgIcon]=\"log.icon\"></mat-icon>\n    {{log.text}}\n  </div>\n</cdk-virtual-scroll-viewport>\n");

/***/ }),

/***/ "UdRf":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-nav-list>\n  <a mat-list-item *ngFor=\"let link of links\" [routerLink]=\"link.route\">\n    <mat-icon *ngIf=\"link.icon\" [svgIcon]=\"link.icon\"></mat-icon>\n    &nbsp;\n    {{link.title}}\n  </a>\n</mat-nav-list>\n");

/***/ }),

/***/ "VBlw":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/time-chart/time-chart.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<canvas #chart></canvas>\n");

/***/ }),

/***/ "VVwT":
/*!*****************************************************************!*\
  !*** ./src/app/shared/select-index/select-index.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-content {\n  min-height: 4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWxlY3QtaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoic2VsZWN0LWluZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDRlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "VpI2":
/*!******************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dashboard/dashboard.component */ "Lquv");




var routes = [
    {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        data: {
            title: 'Dashboard',
            actions: ['menu', 'bt', 'sync'],
        },
    },
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page\n  [options]=\"pageOptions$ | async\"\n  [btStatus]=\"btStatus$ | async\"\n  [syncStatus]=\"sync$ | async\"\n  (back)=\"onBack()\"\n  (add)=\"onAdd()\"\n  (bt)=\"onBt()\"\n  (sync)=\"onSync()\"\n>\n  <router-outlet></router-outlet>\n</app-page>\n");

/***/ }),

/***/ "WCyp":
/*!**********************************************!*\
  !*** ./src/app/components/dev/dev.module.ts ***!
  \**********************************************/
/*! exports provided: DevModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevModule", function() { return DevModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dev_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dev.component */ "rIPO");
/* harmony import */ var _shared_page_page_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/page/page.module */ "IQGA");
/* harmony import */ var _shared_select_index_select_index_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/select-index/select-index.module */ "gE7k");
/* harmony import */ var _device_simulate_sevice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-simulate.sevice */ "BBQf");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _dev_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dev-routing.module */ "v7oy");
/* harmony import */ var _access_control_dev_access_control_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./access-control/dev-access-control.module */ "5qS8");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












var DevModule = /** @class */ (function () {
    function DevModule() {
    }
    DevModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dev_component__WEBPACK_IMPORTED_MODULE_3__["DevComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dev_routing_module__WEBPACK_IMPORTED_MODULE_8__["DevRoutingModule"], _shared_page_page_module__WEBPACK_IMPORTED_MODULE_4__["PageModule"], _shared_select_index_select_index_module__WEBPACK_IMPORTED_MODULE_5__["SelectIndexModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _access_control_dev_access_control_module__WEBPACK_IMPORTED_MODULE_9__["DevAccessControlModule"]],
            providers: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])((_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].platform === 'mock' ? [_device_simulate_sevice__WEBPACK_IMPORTED_MODULE_6__["DeviceSimulateService"]] : []), [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: function (deviceSimulateService) { return function () { return deviceSimulateService.init(); }; },
                    deps: [_device_simulate_sevice__WEBPACK_IMPORTED_MODULE_6__["DeviceSimulateService"]],
                    multi: true,
                },
            ]),
        })
    ], DevModule);
    return DevModule;
}());



/***/ }),

/***/ "X6Ps":
/*!***************************************************************!*\
  !*** ./src/app/shared/choose-dialog/choose-dialog.service.ts ***!
  \***************************************************************/
/*! exports provided: ChooseDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseDialogService", function() { return ChooseDialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _choose_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choose-dialog.component */ "KbOC");




var ChooseDialogService = /** @class */ (function () {
    function ChooseDialogService(dialog) {
        this.dialog = dialog;
    }
    ChooseDialogService.prototype.choose = function (data) {
        var dialogRef = this.dialog.open(_choose_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ChooseDialogComponent"], { data: data });
        return dialogRef.afterClosed();
    };
    ChooseDialogService.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    ChooseDialogService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ChooseDialogService);
    return ChooseDialogService;
}());



/***/ }),

/***/ "X8Em":
/*!************************************!*\
  !*** ./src/app/model/device-io.ts ***!
  \************************************/
/*! exports provided: DeviceIOMarker, convert7bitTo8bit, convert8bitTo7bit, crc6, getLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceIOMarker", function() { return DeviceIOMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convert7bitTo8bit", function() { return convert7bitTo8bit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convert8bitTo7bit", function() { return convert8bitTo7bit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crc6", function() { return crc6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLength", function() { return getLength; });
// tslint:disable:no-bitwise
var DeviceIOMarker;
(function (DeviceIOMarker) {
    DeviceIOMarker[DeviceIOMarker["beginMessage"] = 128] = "beginMessage";
    DeviceIOMarker[DeviceIOMarker["endMessage"] = 192] = "endMessage";
    DeviceIOMarker[DeviceIOMarker["payloadMask"] = 127] = "payloadMask";
    DeviceIOMarker[DeviceIOMarker["cmdMask"] = 64] = "cmdMask";
    DeviceIOMarker[DeviceIOMarker["cmdPayloadMask"] = 63] = "cmdPayloadMask";
    DeviceIOMarker[DeviceIOMarker["mask"] = 128] = "mask";
})(DeviceIOMarker || (DeviceIOMarker = {}));
/**
 * convert bytes buffer
 * @param raw
 */
function convert7bitTo8bit(raw) {
    // console.log('7bit', raw);
    var length = Math.floor(raw.byteLength * 7 / 8);
    var result = new Uint8Array(length);
    var value = 0;
    var bytes = 0;
    var index = 0;
    for (var i = 0; i < raw.byteLength; i++) {
        var byte = raw[i];
        value = value + (byte << bytes);
        bytes += 7;
        if (bytes < 8) {
            continue;
        }
        result[index] = value & 255;
        index += 1;
        bytes -= 8;
        value = value >> 8;
    }
    return result;
}
function convert8bitTo7bit(raw) {
    // console.log('8bit ', raw);
    var length7 = Math.ceil(raw.byteLength * 8 / 7);
    var result = new Uint8Array(length7);
    for (var i = 0; i < length7; i++) {
        var index = Math.floor(i * 7 / 8);
        var value = raw[index] + ((raw[index + 1] || 0) << 8);
        value = (value >> (8 - (i % 8)) % 8) & DeviceIOMarker.payloadMask;
        result[i] = value;
    }
    return result;
}
function crc6(raw) {
    var bits = raw.length * 8;
    var i = 0;
    var crc = 0xfc;
    var index = 0;
    while (bits--) {
        if (!i--) {
            i = 7;
            crc ^= raw[index++];
        }
        crc = (crc << 1 ^ (crc & 0x80 ? 0x9c : 0)) & 255;
    }
    return crc >> 2 & 0x3f;
}
function getLength(metaOrName, struct) {
    if (!metaOrName) {
        return 0;
    }
    var meta = typeof metaOrName === 'string' ? struct[metaOrName] : metaOrName;
    return Object.keys(meta).reduce(function (result, key) {
        var fieldOrName = meta[key];
        // console.error('fieldOrName', fieldOrName);
        var field = typeof fieldOrName === 'string' ?
            { type: 'object', itemMeta: struct[fieldOrName] } : fieldOrName;
        switch (field.type) {
            case 'list':
                return result + field.length * getLength(field.itemMeta, struct);
            case 'object':
                return result + getLength(field.itemMeta, struct);
            case 'uint8':
                return result + 1;
            case 'uint16':
                return result + 2;
            case 'uint32':
                return result + 4;
            case 'uint8[]':
                return result + 1 * field.length;
            case 'uint16[]':
                return result + 2 * field.length;
            case 'uint32[]':
                return result + 4 * field.length;
            case 'string':
                return result + 1 * field.length;
        }
    }, 0);
}


/***/ }),

/***/ "XEv0":
/*!************************************************************************************!*\
  !*** ./src/app/components/settings/pin-assignment/pin-select/pin-select.module.ts ***!
  \************************************************************************************/
/*! exports provided: PinSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinSelectModule", function() { return PinSelectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pin_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pin-select.component */ "l/D0");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");






var PinSelectModule = /** @class */ (function () {
    function PinSelectModule() {
    }
    PinSelectModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pin_select_component__WEBPACK_IMPORTED_MODULE_3__["PinSelectComponent"]],
            exports: [_pin_select_component__WEBPACK_IMPORTED_MODULE_3__["PinSelectComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"]],
        })
    ], PinSelectModule);
    return PinSelectModule;
}());



/***/ }),

/***/ "XUya":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/program-list/program-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-accordion>\n  <mat-expansion-panel *ngFor=\"let program of programs$ | async; let index = index; trackBy: trackByIndex\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        #{{index + 1}}\n      </mat-panel-title>\n      <mat-panel-description>\n        {{(names$ | async)[index]}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <ng-template matExpansionPanelContent>\n      <app-program\n        [program]=\"program\"\n        [name]=\"(names$ | async)[index]\"\n        [compotes]=\"compotes$ | async\"\n        [valves]=\"valves\"\n        (programChange)=\"onChange(index, $event)\"\n        (nameChange)=\"onNameChange(index, $event)\"\n      ></app-program>\n    </ng-template>\n  </mat-expansion-panel>\n</mat-accordion>\n");

/***/ }),

/***/ "XdS8":
/*!***************************************************!*\
  !*** ./src/app/components/dev/dev.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-list-item {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoiZGV2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1saXN0LWl0ZW0ge1xuICBoZWlnaHQ6IGF1dG87XG59XG4iXX0= */");

/***/ }),

/***/ "Y+EC":
/*!************************************************************************!*\
  !*** ./src/app/components/settings/timer-list/timer-list.component.ts ***!
  \************************************************************************/
/*! exports provided: TimerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerListComponent", function() { return TimerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_timer_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./timer-list.component.html */ "KSRV");
/* harmony import */ var _timer_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer-list.component.scss */ "PByM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/settings/settings.reducer */ "inRq");






var TimerListComponent = /** @class */ (function () {
    function TimerListComponent(store) {
        this.store = store;
        this.timers$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorTimers"]));
        this.names$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(Object(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorNames"])('timer')));
        this.programs$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(Object(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorNames"])('program')));
    }
    TimerListComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsLoadTimer"]());
    };
    TimerListComponent.prototype.onNameChange = function (index, value) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsChangeName"]({ key: 'timer', index: index, value: value }));
    };
    TimerListComponent.prototype.onChange = function (index, value) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsChangeTimer"]({ index: index, value: value }));
    };
    TimerListComponent.prototype.onRemove = function (index) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsRemoveTimer"](index));
    };
    TimerListComponent.prototype.trackByIndex = function (index, item) {
        return index;
    };
    TimerListComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    TimerListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-timer-list',
            template: _raw_loader_timer_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_timer_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], TimerListComponent);
    return TimerListComponent;
}());



/***/ }),

/***/ "Y62Z":
/*!************************************************************************!*\
  !*** ./src/app/components/access-control/episode/episode.component.ts ***!
  \************************************************************************/
/*! exports provided: EpisodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeComponent", function() { return EpisodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_episode_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./episode.component.html */ "7r3l");
/* harmony import */ var _episode_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./episode.component.scss */ "p0F5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_storage_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/storage/db.service */ "iwvj");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







var EpisodeComponent = /** @class */ (function () {
    function EpisodeComponent(db, cd) {
        var _this = this;
        this.episodeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.episodeSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (episode) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(db.getAccessControlEpisodeKeys(episode));
        }
        // .pipe(startWith([]))
        ))
            .subscribe(function (keys) {
            _this.episodeKeys = keys;
            cd.markForCheck();
        });
    }
    Object.defineProperty(EpisodeComponent.prototype, "episode", {
        get: function () {
            return this.episodeSubject.value;
        },
        set: function (value) {
            this.episodeSubject.next(value);
        },
        enumerable: false,
        configurable: true
    });
    EpisodeComponent.prototype.ngOnInit = function () {
    };
    EpisodeComponent.ctorParameters = function () { return [
        { type: _services_storage_db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
    ]; };
    EpisodeComponent.propDecorators = {
        episode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    EpisodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-episode',
            template: _raw_loader_episode_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_episode_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_storage_db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
    ], EpisodeComponent);
    return EpisodeComponent;
}());



/***/ }),

/***/ "YMbw":
/*!***********************************************************************!*\
  !*** ./src/app/components/manual-control/manual-control.component.ts ***!
  \***********************************************************************/
/*! exports provided: ManualControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualControlComponent", function() { return ManualControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_manual_control_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./manual-control.component.html */ "FXGq");
/* harmony import */ var _manual_control_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manual-control.component.scss */ "ejKh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/connect/connect.reducer */ "pp5j");
/* harmony import */ var _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/device-request-type */ "f5g5");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _model_device_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/device-config */ "saMG");
/* harmony import */ var _shared_select_index_select_index_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/select-index/select-index.service */ "CycX");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");











var ManualControlComponent = /** @class */ (function () {
    function ManualControlComponent(store, selectIndexService) {
        this.store = store;
        this.selectIndexService = selectIndexService;
    }
    ManualControlComponent.prototype.ngOnInit = function () {
    };
    ManualControlComponent.prototype.onFertigate = function () {
        var _this = this;
        this.selectIndexService.select({ count: _model_device_config__WEBPACK_IMPORTED_MODULE_7__["deviceConfig"].programCount, title: 'Select program' })
            .subscribe(function (programId) {
            if (typeof programId === 'undefined') {
                return;
            }
            _this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionConnectRequest"]({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].fertigate, payload: { programId: 0 } }));
        });
    };
    ManualControlComponent.prototype.onPumpIn = function () {
        var _this = this;
        this.selectIndexService.select({ count: _model_device_config__WEBPACK_IMPORTED_MODULE_7__["deviceConfig"].programCount, title: 'Select program' })
            .subscribe(function (programId) {
            if (typeof programId === 'undefined') {
                return;
            }
            _this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionConnectRequest"]({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].pumpIn, payload: { programId: 0 } }));
        });
    };
    ManualControlComponent.prototype.onDose = function () {
        var _this = this;
        this.selectIndexService.select({ count: _model_device_config__WEBPACK_IMPORTED_MODULE_7__["deviceConfig"].programCount, title: 'Select program' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (programId) { return typeof programId === 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_10__["EMPTY"] :
            _this.selectIndexService.select({ count: _model_device_config__WEBPACK_IMPORTED_MODULE_7__["deviceConfig"].doseCount, title: 'Select dose' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (doseId) { return [programId, doseId]; })); }))
            .subscribe(function (_a) {
            var programId = _a[0], doseId = _a[1];
            if (typeof programId === 'undefined' || typeof doseId === 'undefined') {
                return;
            }
            _this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionConnectRequest"]({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].dose, payload: { programId: programId, doseId: doseId } }));
        });
    };
    ManualControlComponent.prototype.onDoseMix = function () {
        var _this = this;
        this.selectIndexService.select({ count: _model_device_config__WEBPACK_IMPORTED_MODULE_7__["deviceConfig"].doseCount, title: 'Select dose' })
            .subscribe(function (mixerId) {
            if (typeof mixerId === 'undefined') {
                return;
            }
            _this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionConnectRequest"]({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].mixDose, payload: { mixerId: mixerId } }));
        });
    };
    ManualControlComponent.prototype.onMix = function () {
        this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionConnectRequest"]({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].mix, payload: { mixerId: 0 } }));
    };
    ManualControlComponent.prototype.onIrrigate = function () {
        var _this = this;
        this.selectIndexService.select({ count: _model_device_config__WEBPACK_IMPORTED_MODULE_7__["deviceConfig"].programCount, title: 'Select program' })
            .subscribe(function (programId) {
            if (typeof programId === 'undefined') {
                return;
            }
            _this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionConnectRequest"]({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].irrigate, payload: { programId: programId } }));
        });
    };
    ManualControlComponent.prototype.onWash = function () {
        var _this = this;
        this.selectIndexService.select({ count: _model_device_config__WEBPACK_IMPORTED_MODULE_7__["deviceConfig"].programCount, title: 'Select program' })
            .subscribe(function (programId) {
            if (typeof programId === 'undefined') {
                return;
            }
            _this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionConnectRequest"]({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].wash, payload: { programId: programId } }));
        });
    };
    ManualControlComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
        { type: _shared_select_index_select_index_service__WEBPACK_IMPORTED_MODULE_8__["SelectIndexService"] }
    ]; };
    ManualControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-manual-control',
            template: _raw_loader_manual_control_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_manual_control_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _shared_select_index_select_index_service__WEBPACK_IMPORTED_MODULE_8__["SelectIndexService"]])
    ], ManualControlComponent);
    return ManualControlComponent;
}());



/***/ }),

/***/ "YQ9A":
/*!*******************************************************!*\
  !*** ./src/app/services/connect/message-to-string.ts ***!
  \*******************************************************/
/*! exports provided: requestToString, responseToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestToString", function() { return requestToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responseToString", function() { return responseToString; });
/* harmony import */ var _model_device_request_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/device-request-type */ "f5g5");
/* harmony import */ var _model_device_response_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/device-response-type */ "8NFJ");


function requestToString(request) {
    return _model_device_request_type__WEBPACK_IMPORTED_MODULE_0__["DeviceRequestType"][request.type] + " " + JSON.stringify(request.payload);
}
function responseToString(response) {
    return _model_device_response_type__WEBPACK_IMPORTED_MODULE_1__["DeviceResponseType"][response.type] + " " + JSON.stringify(response);
}


/***/ }),

/***/ "Ycwp":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/config/access-control-config/access-control-config.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Nlc3MtY29udHJvbC1jb25maWcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Yd2l":
/*!********************************************************************!*\
  !*** ./src/app/components/manual-control/manual-control.module.ts ***!
  \********************************************************************/
/*! exports provided: ManualControlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualControlModule", function() { return ManualControlModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _manual_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manual-control.component */ "YMbw");
/* harmony import */ var _manual_control_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manual-control-routing.module */ "blN+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







var ManualControlModule = /** @class */ (function () {
    function ManualControlModule() {
    }
    ManualControlModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_manual_control_component__WEBPACK_IMPORTED_MODULE_3__["ManualControlComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _manual_control_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManualControlRoutingModule"],
            ],
        })
    ], ManualControlModule);
    return ManualControlModule;
}());



/***/ }),

/***/ "Yj2c":
/*!**********************************************************************!*\
  !*** ./src/app/components/settings/mixer-list/mixer/mixer.module.ts ***!
  \**********************************************************************/
/*! exports provided: MixerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MixerModule", function() { return MixerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mixer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixer.component */ "Qu8q");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");






var MixerModule = /** @class */ (function () {
    function MixerModule() {
    }
    MixerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_mixer_component__WEBPACK_IMPORTED_MODULE_3__["MixerComponent"]],
            exports: [_mixer_component__WEBPACK_IMPORTED_MODULE_3__["MixerComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]],
        })
    ], MixerModule);
    return MixerModule;
}());



/***/ }),

/***/ "Yw+w":
/*!********************************************************************************!*\
  !*** ./src/app/components/settings/pin-assignment/pin-assignment.component.ts ***!
  \********************************************************************************/
/*! exports provided: PinAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinAssignmentComponent", function() { return PinAssignmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pin_assignment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pin-assignment.component.html */ "djxK");
/* harmony import */ var _pin_assignment_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pin-assignment.component.scss */ "A1jf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/settings/settings.reducer */ "inRq");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _model_device_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../model/device-info */ "G/Ek");
/* harmony import */ var _model_device_parts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../model/device-parts */ "SaK9");









var PinAssignmentComponent = /** @class */ (function () {
    function PinAssignmentComponent(store, changeDetectorRef) {
        this.store = store;
        this.changeDetectorRef = changeDetectorRef;
        this.pins = Object(_model_device_info__WEBPACK_IMPORTED_MODULE_7__["getAllPins"])();
        this.pins2 = Object.keys(_model_device_info__WEBPACK_IMPORTED_MODULE_7__["deviceInfo"].mega2560.pins)
            .map(function (p) { return ({ key: +p, value: _model_device_info__WEBPACK_IMPORTED_MODULE_7__["deviceInfo"].mega2560.pins[p] }); })
            .sort(function (a, b) { return a.key - b.key; });
        this.devicePartTypeName = _model_device_parts__WEBPACK_IMPORTED_MODULE_8__["devicePartTypeName"];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    PinAssignmentComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsLoadPinAssignment"]());
        this.pinPumps$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorPinPumps"]));
        this.pinFlowSensors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorPinFlowSensors"]));
        this.pinMixers$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorPinMixers"]));
        this.pinDoses$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorPinDoses"]));
        this.pinDoseMixers$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorPinDoseMixers"]));
        this.pinValves$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorPinValves"]));
        this.pinLevelSensors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorPinLevelSensors"]));
    };
    PinAssignmentComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
    };
    PinAssignmentComponent.prototype.onChange = function (key, index, value) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsChangePinAssignment"]({ key: key, index: index, value: value }));
    };
    PinAssignmentComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
    ]; };
    PinAssignmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-pin-assignment',
            template: _raw_loader_pin_assignment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_pin_assignment_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
    ], PinAssignmentComponent);
    return PinAssignmentComponent;
}());



/***/ }),

/***/ "YzEn":
/*!*****************************************!*\
  !*** ./src/app/model/connect-status.ts ***!
  \*****************************************/
/*! exports provided: ConnectStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectStatus", function() { return ConnectStatus; });
var ConnectStatus;
(function (ConnectStatus) {
    ConnectStatus["CONNECTING"] = "connecting";
    ConnectStatus["CONNECTED"] = "connected";
    ConnectStatus["DISCONNECTING"] = "disconnecting";
    ConnectStatus["DISCONNECTED"] = "disconnected";
    ConnectStatus["TRANSFER"] = "transfer";
})(ConnectStatus || (ConnectStatus = {}));


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: logReducer, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logReducer", function() { return logReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.module */ "5+sL");
/* harmony import */ var _components_settings_settings_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/settings/settings.module */ "02t3");
/* harmony import */ var _services_connect_connect_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/connect/connect.module */ "OVTF");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _components_monitor_monitor_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/monitor/monitor.module */ "RGej");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _components_log_log_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/log/log.module */ "TBkr");
/* harmony import */ var _store_settings_settings_store_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/settings/settings-store.module */ "BTSD");
/* harmony import */ var _store_config_config_store_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store/config/config-store.module */ "MOas");
/* harmony import */ var _shared_page_page_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/page/page.module */ "IQGA");
/* harmony import */ var _components_dev_dev_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/dev/dev.module */ "WCyp");
/* harmony import */ var _store_connect_connect_store_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./store/connect/connect-store.module */ "Fhy2");
/* harmony import */ var _store_dashboard_dashboard_store_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./store/dashboard/dashboard-store.module */ "A6k7");
/* harmony import */ var _services_storage_storage_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/storage/storage.module */ "cAWP");
/* harmony import */ var _store_monitor_monitor_store_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./store/monitor/monitor-store.module */ "oexy");
/* harmony import */ var _components_config_config_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/config/config.module */ "A/r1");
/* harmony import */ var _store_log_log_store_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./store/log/log-store.module */ "cjZZ");
/* harmony import */ var _components_calibrate_calibrate_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/calibrate/calibrate.module */ "AOl3");
/* harmony import */ var _components_manual_control_manual_control_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/manual-control/manual-control.module */ "Yd2l");
/* harmony import */ var _components_access_control_access_control_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/access-control/access-control.module */ "r6rb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






























function logReducer(reducer) {
    return function (state, action) {
        var newState = reducer(state, action);
        console.log("action " + action.type, {
            payload: action.payload,
            oldState: state,
            newState: newState,
        });
        return newState;
    };
}
var AppModule = /** @class */ (function () {
    function AppModule(iconRegistry, sanitizer) {
        iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/sprite.svg'));
    }
    AppModule.ctorParameters = function () { return [
        { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconRegistry"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
    ]; };
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _services_connect_connect_module__WEBPACK_IMPORTED_MODULE_7__["ConnectModule"],
                _shared_page_page_module__WEBPACK_IMPORTED_MODULE_18__["PageModule"],
                _components_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["DashboardModule"],
                _components_settings_settings_module__WEBPACK_IMPORTED_MODULE_6__["SettingsModule"],
                _components_monitor_monitor_module__WEBPACK_IMPORTED_MODULE_12__["MonitorModule"],
                _components_log_log_module__WEBPACK_IMPORTED_MODULE_15__["LogModule"],
                _components_dev_dev_module__WEBPACK_IMPORTED_MODULE_19__["DevModule"],
                _components_config_config_module__WEBPACK_IMPORTED_MODULE_24__["ConfigModule"],
                _store_settings_settings_store_module__WEBPACK_IMPORTED_MODULE_16__["SettingsStoreModule"],
                _store_config_config_store_module__WEBPACK_IMPORTED_MODULE_17__["ConfigStoreModule"],
                _store_connect_connect_store_module__WEBPACK_IMPORTED_MODULE_20__["ConnectStoreModule"],
                _store_dashboard_dashboard_store_module__WEBPACK_IMPORTED_MODULE_21__["DashboardStoreModule"],
                _store_monitor_monitor_store_module__WEBPACK_IMPORTED_MODULE_23__["MonitorStoreModule"],
                _services_storage_storage_module__WEBPACK_IMPORTED_MODULE_22__["StorageModule"],
                _store_log_log_store_module__WEBPACK_IMPORTED_MODULE_25__["LogStoreModule"],
                _components_calibrate_calibrate_module__WEBPACK_IMPORTED_MODULE_26__["CalibrateModule"],
                _components_manual_control_manual_control_module__WEBPACK_IMPORTED_MODULE_27__["ManualControlModule"],
                _components_access_control_access_control_module__WEBPACK_IMPORTED_MODULE_28__["AccessControlModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production }),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot({}, { metaReducers: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production ? [] : [logReducer] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forRoot([]),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "Zjgc":
/*!**************************************!*\
  !*** ./src/app/pipes/memory.pipe.ts ***!
  \**************************************/
/*! exports provided: MemoryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryPipe", function() { return MemoryPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var MemoryPipe = /** @class */ (function () {
    function MemoryPipe() {
    }
    MemoryPipe.prototype.transform = function (value) {
        var thresh = 1024;
        if (Math.abs(value) < thresh) {
            return value + " B";
        }
        var units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var u = -1;
        do {
            value /= thresh;
            ++u;
        } while (Math.abs(value) >= thresh && u < units.length - 1);
        return value.toFixed(1) + " " + units[u];
    };
    MemoryPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'memory',
            pure: true,
        })
    ], MemoryPipe);
    return MemoryPipe;
}());



/***/ }),

/***/ "Zwnc":
/*!*************************************************************!*\
  !*** ./src/app/components/calibrate/calibrate.component.ts ***!
  \*************************************************************/
/*! exports provided: CalibrateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalibrateComponent", function() { return CalibrateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calibrate_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calibrate.component.html */ "s8Mk");
/* harmony import */ var _calibrate_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calibrate.component.scss */ "xeJm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_device_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/device-config */ "saMG");





var CalibrateComponent = /** @class */ (function () {
    function CalibrateComponent() {
        this.links = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(new Array(_model_device_config__WEBPACK_IMPORTED_MODULE_4__["deviceConfig"].pumpCount).fill(0).map(function (_, index) { return ({
            route: ['/', 'calibrate', 'pump', '' + index],
            title: "Pump " + _model_device_config__WEBPACK_IMPORTED_MODULE_4__["PumpType"][index],
            icon: index === _model_device_config__WEBPACK_IMPORTED_MODULE_4__["PumpType"].in ? 'water-pump' : 'fountain',
        }); }), new Array(_model_device_config__WEBPACK_IMPORTED_MODULE_4__["deviceConfig"].doseCount).fill(0).map(function (_, index) { return ({
            route: ['/', 'calibrate', 'dose', '' + index],
            title: "Dose " + (index + 1),
            icon: 'eyedropper',
        }); }));
    }
    CalibrateComponent.ctorParameters = function () { return []; };
    CalibrateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-calibrate',
            template: _raw_loader_calibrate_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_calibrate_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CalibrateComponent);
    return CalibrateComponent;
}());



/***/ }),

/***/ "aGZk":
/*!*********************************************************!*\
  !*** ./src/app/shared/day-time/day-time.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXktdGltZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ayZw":
/*!*************************************************************************!*\
  !*** ./src/app/components/settings/program-list/program-list.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProgramListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramListModule", function() { return ProgramListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _program_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./program-list.component */ "DxkL");
/* harmony import */ var _program_program_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./program/program.module */ "sfAH");
/* harmony import */ var _store_settings_settings_store_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/settings/settings-store.module */ "BTSD");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









var ProgramListModule = /** @class */ (function () {
    function ProgramListModule() {
    }
    ProgramListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_program_list_component__WEBPACK_IMPORTED_MODULE_3__["ProgramListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _store_settings_settings_store_module__WEBPACK_IMPORTED_MODULE_5__["SettingsStoreModule"],
                _program_program_module__WEBPACK_IMPORTED_MODULE_4__["ProgramModule"],
            ],
        })
    ], ProgramListModule);
    return ProgramListModule;
}());



/***/ }),

/***/ "bhzt":
/*!****************************************************!*\
  !*** ./src/app/services/open-cv/open-cv.module.ts ***!
  \****************************************************/
/*! exports provided: OpenCvModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenCvModule", function() { return OpenCvModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _open_cv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./open-cv.service */ "J6F9");




var OpenCvModule = /** @class */ (function () {
    function OpenCvModule() {
    }
    OpenCvModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            providers: [
                _open_cv_service__WEBPACK_IMPORTED_MODULE_3__["OpenCVService"],
                { provide: _open_cv_service__WEBPACK_IMPORTED_MODULE_3__["OpenCvConfigToken"], useValue: {} },
            ],
        })
    ], OpenCvModule);
    return OpenCvModule;
}());



/***/ }),

/***/ "blN+":
/*!****************************************************************************!*\
  !*** ./src/app/components/manual-control/manual-control-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ManualControlRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualControlRoutingModule", function() { return ManualControlRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _manual_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manual-control.component */ "YMbw");




var routes = [
    {
        path: 'manual-control',
        component: _manual_control_component__WEBPACK_IMPORTED_MODULE_3__["ManualControlComponent"],
        data: {
            title: 'Manual Control',
            actions: ['menu', 'bt', 'sync'],
        },
    },
];
var ManualControlRoutingModule = /** @class */ (function () {
    function ManualControlRoutingModule() {
    }
    ManualControlRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ManualControlRoutingModule);
    return ManualControlRoutingModule;
}());



/***/ }),

/***/ "bxw3":
/*!********************************************!*\
  !*** ./src/app/platform/device-connect.ts ***!
  \********************************************/
/*! exports provided: DEVICE_CONNECT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICE_CONNECT", function() { return DEVICE_CONNECT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var DEVICE_CONNECT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('DEVICE_CONNECT');


/***/ }),

/***/ "c1Dp":
/*!***********************************************************************!*\
  !*** ./src/app/components/settings/program-list/program/bits.pipe.ts ***!
  \***********************************************************************/
/*! exports provided: BitsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitsPipe", function() { return BitsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var BitsPipe = /** @class */ (function () {
    function BitsPipe() {
    }
    BitsPipe.prototype.transform = function (value) {
        var bits = [];
        for (var i = 0; i < value.length; i++) {
            var num = value[i];
            for (var j = 0; j < 8; j++) {
                // tslint:disable-next-line:no-bitwise
                if (num & 1) {
                    bits.push(i * 8 + j + 1);
                }
                // tslint:disable-next-line:no-bitwise
                num >>= 1;
            }
        }
        return bits;
    };
    BitsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'bits',
            pure: true,
        })
    ], BitsPipe);
    return BitsPipe;
}());



/***/ }),

/***/ "c1x0":
/*!******************************************************************************!*\
  !*** ./src/app/components/settings/program-list/program-list.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmFtLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "cAWP":
/*!****************************************************!*\
  !*** ./src/app/services/storage/storage.module.ts ***!
  \****************************************************/
/*! exports provided: StorageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageModule", function() { return StorageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage.service */ "57QP");
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./db.service */ "iwvj");





var StorageModule = /** @class */ (function () {
    function StorageModule() {
    }
    StorageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            providers: [
                _local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
                _db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: function (dbService) { return function () { return dbService.init(); }; },
                    deps: [_db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"]],
                    multi: true,
                },
            ],
        })
    ], StorageModule);
    return StorageModule;
}());



/***/ }),

/***/ "cZuW":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/access-control/camshots/camshots.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<cdk-virtual-scroll-viewport itemSize=\"64\" class=\"h-100 w-100 overflow-auto\" orientation=\"horizontal\">\n  <app-camshot\n    *cdkVirtualFor=\"let key of keys; trackBy: trackByKey\"\n    class=\"d-block\"\n    [key]=\"key\"\n  ></app-camshot>\n</cdk-virtual-scroll-viewport>\n");

/***/ }),

/***/ "cjZZ":
/*!***********************************************!*\
  !*** ./src/app/store/log/log-store.module.ts ***!
  \***********************************************/
/*! exports provided: LogStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogStoreModule", function() { return LogStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _log_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log.reducer */ "ubYs");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _log_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log.effects */ "TKUc");






var LogStoreModule = /** @class */ (function () {
    function LogStoreModule() {
    }
    LogStoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            exports: [],
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('log', _log_reducer__WEBPACK_IMPORTED_MODULE_3__["logReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_log_effects__WEBPACK_IMPORTED_MODULE_5__["LogEffects"]]),
            ],
        })
    ], LogStoreModule);
    return LogStoreModule;
}());



/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "d8ya":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/compote-list/compote-daily/compote-daily.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\n  <input matInput\n    type=\"number\"\n    placeholder=\"Days\"\n    [value]=\"compoteDaily.days\"\n    (input)=\"onChange({days: +$event.target.value})\"\n  >\n</mat-form-field>\n<mat-form-field>\n  <input matInput\n    type=\"number\"\n    placeholder=\"Light schedule\"\n    [value]=\"compoteDaily.schedule\"\n    (input)=\"onChange({schedule: +$event.target.value})\"\n  >\n</mat-form-field>\n<mat-form-field>\n  <input matInput\n    type=\"number\"\n    placeholder=\"Volume (mL)\"\n    [value]=\"compoteDaily.volume\"\n    (input)=\"onChange({volume: +$event.target.value})\"\n  >\n</mat-form-field>\n<mat-form-field>\n  <input matInput\n    type=\"number\"\n    placeholder=\"Washing Volume (mL)\"\n    [value]=\"compoteDaily.washVolume\"\n    (input)=\"onChange({washVolume: +$event.target.value})\"\n  >\n</mat-form-field>\n<ng-container *ngFor=\"let soil of soils; let index = index; trackBy: trackByIndex\">\n  <mat-form-field>\n    <input matInput\n      type=\"number\"\n      [placeholder]=\"(soil || (index + 1)) + ' Volume (0.1 mL)'\"\n      [value]=\"compoteDaily.dose[index]\"\n      (input)=\"onDoseChange(index, +$event.target.value)\"\n    >\n  </mat-form-field>\n</ng-container>\n");

/***/ }),

/***/ "dImw":
/*!******************************************************!*\
  !*** ./src/app/store/dashboard/dashboard.reducer.ts ***!
  \******************************************************/
/*! exports provided: DashboardActionTypes, ActionDashboardInit, ActionDashboardUpdateTime, ActionDashboardUpdateTemp, ActionDashboardUpdateStatus, ActionDashboardSyncTime, initialDashboardState, selectorDashboard, selectorTime, selectorTemp, selectorMinTemp, selectorMaxTemp, selectorStatus, dashboardReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardActionTypes", function() { return DashboardActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDashboardInit", function() { return ActionDashboardInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDashboardUpdateTime", function() { return ActionDashboardUpdateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDashboardUpdateTemp", function() { return ActionDashboardUpdateTemp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDashboardUpdateStatus", function() { return ActionDashboardUpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDashboardSyncTime", function() { return ActionDashboardSyncTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialDashboardState", function() { return initialDashboardState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorDashboard", function() { return selectorDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorTime", function() { return selectorTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorTemp", function() { return selectorTemp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorMinTemp", function() { return selectorMinTemp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorMaxTemp", function() { return selectorMaxTemp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorStatus", function() { return selectorStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardReducer", function() { return dashboardReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

var DashboardActionTypes;
(function (DashboardActionTypes) {
    DashboardActionTypes["INIT"] = "[Dashboard] Init";
    DashboardActionTypes["UPDATE_TIME"] = "[Dashboard] Update time";
    DashboardActionTypes["UPDATE_TEMP"] = "[Dashboard] Update temp";
    DashboardActionTypes["UPDATE_STATUS"] = "[Dashboard] Update status";
    DashboardActionTypes["SYNC_TIME"] = "[Dashboard] Sync time";
})(DashboardActionTypes || (DashboardActionTypes = {}));
var ActionDashboardInit = /** @class */ (function () {
    function ActionDashboardInit() {
        this.type = DashboardActionTypes.INIT;
    }
    return ActionDashboardInit;
}());

var ActionDashboardUpdateTime = /** @class */ (function () {
    function ActionDashboardUpdateTime(payload) {
        this.payload = payload;
        this.type = DashboardActionTypes.UPDATE_TIME;
    }
    return ActionDashboardUpdateTime;
}());

var ActionDashboardUpdateTemp = /** @class */ (function () {
    function ActionDashboardUpdateTemp(payload) {
        this.payload = payload;
        this.type = DashboardActionTypes.UPDATE_TEMP;
    }
    return ActionDashboardUpdateTemp;
}());

var ActionDashboardUpdateStatus = /** @class */ (function () {
    function ActionDashboardUpdateStatus(payload) {
        this.payload = payload;
        this.type = DashboardActionTypes.UPDATE_STATUS;
    }
    return ActionDashboardUpdateStatus;
}());

var ActionDashboardSyncTime = /** @class */ (function () {
    function ActionDashboardSyncTime() {
        this.type = DashboardActionTypes.SYNC_TIME;
    }
    return ActionDashboardSyncTime;
}());

var initialDashboardState = {
    time: {
        minute: 0,
        second: 0,
        hour: 0,
        wday: 0,
        day: 0,
        month: 0,
        year: 0,
    },
    temp: 0,
    minTemp: -99,
    maxTemp: 99,
    status: {
        state: 0,
        cmdState: 0,
        valve: 0,
        flow: 0,
        volume: 0,
        totalVolume: 0,
        mix: 0,
        dose: 0,
    },
};
var selectorDashboard = function (state) { return state.dashboard; };
var selectorTime = function (state) { return state.dashboard.time; };
var selectorTemp = function (state) { return state.dashboard.temp; };
var selectorMinTemp = function (state) { return state.dashboard.minTemp; };
var selectorMaxTemp = function (state) { return state.dashboard.maxTemp; };
var selectorStatus = function (state) { return state.dashboard.status; };
function dashboardReducer(state, action) {
    if (state === void 0) { state = initialDashboardState; }
    switch (action.type) {
        case DashboardActionTypes.UPDATE_TIME:
            return updateTime(state, action.payload);
        case DashboardActionTypes.UPDATE_TEMP:
            return updateTemp(state, action.payload);
        case DashboardActionTypes.UPDATE_STATUS:
            return updateStatus(state, action.payload);
        default:
            return state;
    }
}
function updateTime(state, time) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { time: time });
}
function updateTemp(state, temp) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { temp: temp, minTemp: Math.min(temp, state.minTemp), maxTemp: Math.max(temp, state.maxTemp) });
}
function updateStatus(state, status) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { status: status });
}


/***/ }),

/***/ "dMyh":
/*!**************************************************!*\
  !*** ./src/app/services/camera/camera.module.ts ***!
  \**************************************************/
/*! exports provided: CameraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraModule", function() { return CameraModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _camera_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera.service */ "2MVJ");



var CameraModule = /** @class */ (function () {
    function CameraModule() {
    }
    CameraModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                _camera_service__WEBPACK_IMPORTED_MODULE_2__["CameraService"],
            ],
        })
    ], CameraModule);
    return CameraModule;
}());



/***/ }),

/***/ "dc4k":
/*!**************************************************************************!*\
  !*** ./src/app/components/access-control/camshot/camshot.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1zaG90LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "djxK":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/pin-assignment/pin-assignment.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group class=\"h-100\">\n  <mat-tab label=\"Blocks\">\n    <mat-accordion class=\"w-100\">\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Pump\n          </mat-panel-title>\n          <mat-panel-description>\n            Pump pin assignment\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ng-template matExpansionPanelContent>\n          <app-pin-select\n            [pins]=\"pinPumps$ | async\"\n            [allPins]=\"pins\"\n            (pinChange)=\"onChange('pump', $event.index, $event.value)\"\n            title=\"Pump\"\n          ></app-pin-select>\n        </ng-template>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Flow sensor\n          </mat-panel-title>\n          <mat-panel-description>\n            Flow sensor pin assignment\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ng-template matExpansionPanelContent>\n          <app-pin-select\n            [pins]=\"pinFlowSensors$ | async\"\n            [allPins]=\"pins\"\n            (pinChange)=\"onChange('flowSensor', $event.index, $event.value)\"\n            title=\"Flow Sensor\"\n          ></app-pin-select>\n        </ng-template>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Mixer\n          </mat-panel-title>\n          <mat-panel-description>\n            Mixer pin assignment\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ng-template matExpansionPanelContent>\n          <app-pin-select\n            [pins]=\"pinMixers$ | async\"\n            [allPins]=\"pins\"\n            (pinChange)=\"onChange('mixer', $event.index, $event.value)\"\n            title=\"Mixer\"\n          ></app-pin-select>\n        </ng-template>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Dose\n          </mat-panel-title>\n          <mat-panel-description>\n            Dose pin assignment\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ng-template matExpansionPanelContent>\n          <app-pin-select\n            [pins]=\"pinDoses$ | async\"\n            [allPins]=\"pins\"\n            (pinChange)=\"onChange('dose', $event.index, $event.value)\"\n            title=\"Dose\"\n          ></app-pin-select>\n        </ng-template>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Dose Mixer\n          </mat-panel-title>\n          <mat-panel-description>\n            Dose Mixer pin assignment\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ng-template matExpansionPanelContent>\n          <app-pin-select\n            [pins]=\"pinDoseMixers$ | async\"\n            [allPins]=\"pins\"\n            (pinChange)=\"onChange('doseMixer', $event.index, $event.value)\"\n            title=\"Dose Mixer\"\n          ></app-pin-select>\n        </ng-template>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Valve\n          </mat-panel-title>\n          <mat-panel-description>\n            Valve pin assignment\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ng-template matExpansionPanelContent>\n          <app-pin-select\n            [pins]=\"pinValves$ | async\"\n            [allPins]=\"pins\"\n            (pinChange)=\"onChange('valve', $event.index, $event.value)\"\n            title=\"Valve\"\n          ></app-pin-select>\n        </ng-template>\n      </mat-expansion-panel>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Level sensor\n          </mat-panel-title>\n          <mat-panel-description>\n            Level sensor pin assignment\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <ng-template matExpansionPanelContent>\n          <app-pin-select\n            [pins]=\"pinLevelSensors$ | async\"\n            [allPins]=\"pins\"\n            (pinChange)=\"onChange('levelSensor', $event.index, $event.value)\"\n            title=\"Level Sensor\"\n          ></app-pin-select>\n        </ng-template>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </mat-tab>\n  <mat-tab label=\"Pins\">\n<!--    <div class=\"container-fluid\">-->\n<!--      <div *ngFor=\"let pinInfo of pins2\" class=\"row\">-->\n<!--        <div class=\"col-1 my-auto\">Pin #{{ pinInfo.key }}</div>-->\n<!--        <mat-form-field class=\"col\">-->\n<!--          <mat-label>Device type</mat-label>-->\n<!--          <mat-select>-->\n<!--            <mat-option *ngFor=\"let partName of devicePartTypeName | keyvalue\" [value]=\"partName.key\">-->\n<!--              {{partName.value}}-->\n<!--            </mat-option>-->\n<!--          </mat-select>-->\n<!--        </mat-form-field>-->\n<!--        <mat-form-field class=\"col\">-->\n<!--          <mat-label>Device index</mat-label>-->\n<!--          <mat-select>-->\n<!--            <mat-option *ngFor=\"let partIndex of 10 | times\" [value]=\"partIndex\">-->\n<!--              {{partIndex}}-->\n<!--            </mat-option>-->\n<!--          </mat-select>-->\n<!--        </mat-form-field>-->\n<!--      </div>-->\n<!--    </div>-->\n  </mat-tab>\n</mat-tab-group>\n");

/***/ }),

/***/ "dkp/":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/status/status.module.ts ***!
  \**************************************************************/
/*! exports provided: StatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusModule", function() { return StatusModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status.component */ "0aP2");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






var StatusModule = /** @class */ (function () {
    function StatusModule() {
    }
    StatusModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_status_component__WEBPACK_IMPORTED_MODULE_3__["StatusComponent"]],
            exports: [_status_component__WEBPACK_IMPORTED_MODULE_3__["StatusComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            ],
        })
    ], StatusModule);
    return StatusModule;
}());



/***/ }),

/***/ "dma5":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-time-chart {\n  max-width: 330px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtdGltZS1jaGFydCB7XG4gIG1heC13aWR0aDogMzMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */");

/***/ }),

/***/ "doPl":
/*!************************************************************************!*\
  !*** ./src/app/components/settings/dose-list/dose-list.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3NlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "e/0k":
/*!*********************************************************************************!*\
  !*** ./src/app/components/calibrate/calibrate-dose/calibrate-dose.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CalibrateDoseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalibrateDoseComponent", function() { return CalibrateDoseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calibrate_dose_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calibrate-dose.component.html */ "BwRQ");
/* harmony import */ var _calibrate_dose_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calibrate-dose.component.scss */ "v0NG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






var CalibrateDoseComponent = /** @class */ (function () {
    function CalibrateDoseComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    CalibrateDoseComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this.formBuilder.group({
            firstCtrl: [''],
        });
        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: [''],
        });
    };
    CalibrateDoseComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    CalibrateDoseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-calibrate-dose',
            template: _raw_loader_calibrate_dose_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [
                {
                    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["STEPPER_GLOBAL_OPTIONS"], useValue: { displayDefaultIndicatorType: false },
                },
            ],
            styles: [_calibrate_dose_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], CalibrateDoseComponent);
    return CalibrateDoseComponent;
}());



/***/ }),

/***/ "eZ0O":
/*!***********************************************************************!*\
  !*** ./src/app/components/access-control/access-control.component.ts ***!
  \***********************************************************************/
/*! exports provided: AccessControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlComponent", function() { return AccessControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_access_control_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./access-control.component.html */ "pvbj");
/* harmony import */ var _access_control_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./access-control.component.scss */ "ykSb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_access_control_access_control_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/access-control/access-control.reducer */ "IBGI");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");






var AccessControlComponent = /** @class */ (function () {
    function AccessControlComponent(store) {
        this.store = store;
        this.log$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_access_control_access_control_reducer__WEBPACK_IMPORTED_MODULE_4__["selectorAccessControlItems"]));
    }
    AccessControlComponent.prototype.ngOnInit = function () {
    };
    AccessControlComponent.prototype.trackByKey = function (index, item) {
        return item.key;
    };
    AccessControlComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
    ]; };
    AccessControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-access-control',
            template: _raw_loader_access_control_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_access_control_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], AccessControlComponent);
    return AccessControlComponent;
}());



/***/ }),

/***/ "ehNA":
/*!******************************************************************************!*\
  !*** ./src/app/components/settings/compote-list/compote-list.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb3RlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ejKh":
/*!*************************************************************************!*\
  !*** ./src/app/components/manual-control/manual-control.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW51YWwtY29udHJvbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "emuR":
/*!**********************************************************************!*\
  !*** ./src/app/components/settings/dose-list/dose/dose.component.ts ***!
  \**********************************************************************/
/*! exports provided: DoseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoseComponent", function() { return DoseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dose_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dose.component.html */ "KqSi");
/* harmony import */ var _dose_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dose.component.scss */ "1KVV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var DoseComponent = /** @class */ (function () {
    function DoseComponent() {
        this.doseChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nameChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    DoseComponent.prototype.ngOnInit = function () {
    };
    DoseComponent.prototype.onChange = function (changes) {
        this.doseChange.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.dose), changes));
    };
    DoseComponent.prototype.onNameChange = function (name) {
        this.nameChange.next(name);
    };
    DoseComponent.ctorParameters = function () { return []; };
    DoseComponent.propDecorators = {
        dose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        doseChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        nameChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    DoseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dose',
            template: _raw_loader_dose_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_dose_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DoseComponent);
    return DoseComponent;
}());



/***/ }),

/***/ "f5g5":
/*!**********************************************!*\
  !*** ./src/app/model/device-request-type.ts ***!
  \**********************************************/
/*! exports provided: DeviceRequestType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceRequestType", function() { return DeviceRequestType; });
var DeviceRequestType;
(function (DeviceRequestType) {
    DeviceRequestType[DeviceRequestType["fertigate"] = 0] = "fertigate";
    DeviceRequestType[DeviceRequestType["irrigate"] = 1] = "irrigate";
    DeviceRequestType[DeviceRequestType["wash"] = 2] = "wash";
    DeviceRequestType[DeviceRequestType["pumpIn"] = 3] = "pumpIn";
    DeviceRequestType[DeviceRequestType["compote"] = 4] = "compote";
    DeviceRequestType[DeviceRequestType["washCompote"] = 5] = "washCompote";
    DeviceRequestType[DeviceRequestType["mix"] = 6] = "mix";
    DeviceRequestType[DeviceRequestType["mixDose"] = 7] = "mixDose";
    DeviceRequestType[DeviceRequestType["dose"] = 8] = "dose";
    DeviceRequestType[DeviceRequestType["getProgram"] = 9] = "getProgram";
    DeviceRequestType[DeviceRequestType["setProgram"] = 10] = "setProgram";
    DeviceRequestType[DeviceRequestType["getCompoteDaily"] = 11] = "getCompoteDaily";
    DeviceRequestType[DeviceRequestType["setCompoteDaily"] = 12] = "setCompoteDaily";
    DeviceRequestType[DeviceRequestType["getSchedule"] = 13] = "getSchedule";
    DeviceRequestType[DeviceRequestType["setSchedule"] = 14] = "setSchedule";
    DeviceRequestType[DeviceRequestType["getTimer"] = 15] = "getTimer";
    DeviceRequestType[DeviceRequestType["setTimer"] = 16] = "setTimer";
    DeviceRequestType[DeviceRequestType["getPump"] = 17] = "getPump";
    DeviceRequestType[DeviceRequestType["setPump"] = 18] = "setPump";
    DeviceRequestType[DeviceRequestType["getMixer"] = 19] = "getMixer";
    DeviceRequestType[DeviceRequestType["setMixer"] = 20] = "setMixer";
    DeviceRequestType[DeviceRequestType["getDose"] = 21] = "getDose";
    DeviceRequestType[DeviceRequestType["setDose"] = 22] = "setDose";
    DeviceRequestType[DeviceRequestType["getPinPump"] = 23] = "getPinPump";
    DeviceRequestType[DeviceRequestType["setPinPump"] = 24] = "setPinPump";
    DeviceRequestType[DeviceRequestType["getPinValve"] = 25] = "getPinValve";
    DeviceRequestType[DeviceRequestType["setPinValve"] = 26] = "setPinValve";
    DeviceRequestType[DeviceRequestType["getPinFlowSensor"] = 27] = "getPinFlowSensor";
    DeviceRequestType[DeviceRequestType["setPinFlowSensor"] = 28] = "setPinFlowSensor";
    DeviceRequestType[DeviceRequestType["getPinLevelSensor"] = 29] = "getPinLevelSensor";
    DeviceRequestType[DeviceRequestType["setPinLevelSensor"] = 30] = "setPinLevelSensor";
    DeviceRequestType[DeviceRequestType["getPinMixer"] = 31] = "getPinMixer";
    DeviceRequestType[DeviceRequestType["setPinMixer"] = 32] = "setPinMixer";
    DeviceRequestType[DeviceRequestType["getPinDose"] = 33] = "getPinDose";
    DeviceRequestType[DeviceRequestType["setPinDose"] = 34] = "setPinDose";
    DeviceRequestType[DeviceRequestType["getPinDoseMixer"] = 35] = "getPinDoseMixer";
    DeviceRequestType[DeviceRequestType["setPinDoseMixer"] = 36] = "setPinDoseMixer";
    DeviceRequestType[DeviceRequestType["getTime"] = 37] = "getTime";
    DeviceRequestType[DeviceRequestType["setTime"] = 38] = "setTime";
    DeviceRequestType[DeviceRequestType["getTemp"] = 39] = "getTemp";
    DeviceRequestType[DeviceRequestType["getStatus"] = 40] = "getStatus";
    DeviceRequestType[DeviceRequestType["getStatePump"] = 41] = "getStatePump";
    DeviceRequestType[DeviceRequestType["setStatePump"] = 42] = "setStatePump";
    DeviceRequestType[DeviceRequestType["getStateValve"] = 43] = "getStateValve";
    DeviceRequestType[DeviceRequestType["setStateValve"] = 44] = "setStateValve";
    DeviceRequestType[DeviceRequestType["getStateMixer"] = 45] = "getStateMixer";
    DeviceRequestType[DeviceRequestType["setStateMixer"] = 46] = "setStateMixer";
    DeviceRequestType[DeviceRequestType["getStateDose"] = 47] = "getStateDose";
    DeviceRequestType[DeviceRequestType["setStateDose"] = 48] = "setStateDose";
    DeviceRequestType[DeviceRequestType["getStateDoseMixer"] = 49] = "getStateDoseMixer";
    DeviceRequestType[DeviceRequestType["setStateDoseMixer"] = 50] = "setStateDoseMixer";
    DeviceRequestType[DeviceRequestType["resetError"] = 51] = "resetError";
})(DeviceRequestType || (DeviceRequestType = {}));


/***/ }),

/***/ "fGFP":
/*!*****************************************************************************!*\
  !*** ./src/app/components/settings/pin-assignment/pin-assignment.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PinAssignmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinAssignmentModule", function() { return PinAssignmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pin_assignment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pin-assignment.component */ "Yw+w");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _pin_select_pin_select_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pin-select/pin-select.module */ "XEv0");












var PinAssignmentModule = /** @class */ (function () {
    function PinAssignmentModule() {
    }
    PinAssignmentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pin_assignment_component__WEBPACK_IMPORTED_MODULE_3__["PinAssignmentComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"],
                _pin_select_pin_select_module__WEBPACK_IMPORTED_MODULE_11__["PinSelectModule"],
            ],
        })
    ], PinAssignmentModule);
    return PinAssignmentModule;
}());



/***/ }),

/***/ "fJeO":
/*!**************************************************************************!*\
  !*** ./src/app/services/access-control/access-control-service.module.ts ***!
  \**************************************************************************/
/*! exports provided: AccessControlServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlServiceModule", function() { return AccessControlServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _access_control_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-control.service */ "g8o9");
/* harmony import */ var _open_cv_open_cv_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../open-cv/open-cv.module */ "bhzt");
/* harmony import */ var _camera_camera_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../camera/camera.module */ "dMyh");






var AccessControlServiceModule = /** @class */ (function () {
    function AccessControlServiceModule() {
    }
    AccessControlServiceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _open_cv_open_cv_module__WEBPACK_IMPORTED_MODULE_4__["OpenCvModule"],
                _camera_camera_module__WEBPACK_IMPORTED_MODULE_5__["CameraModule"],
            ],
            providers: [
                _access_control_service__WEBPACK_IMPORTED_MODULE_3__["AccessControlService"],
            ],
        })
    ], AccessControlServiceModule);
    return AccessControlServiceModule;
}());



/***/ }),

/***/ "fp/1":
/*!*********************************************************************!*\
  !*** ./src/app/store/access-control/access-control-store.module.ts ***!
  \*********************************************************************/
/*! exports provided: AccessControlStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlStoreModule", function() { return AccessControlStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _access_control_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-control.reducer */ "IBGI");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _access_control_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./access-control.effects */ "MmwW");
/* harmony import */ var _services_access_control_access_control_service_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/access-control/access-control-service.module */ "fJeO");







var AccessControlStoreModule = /** @class */ (function () {
    function AccessControlStoreModule() {
    }
    AccessControlStoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            exports: [],
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"],
                _services_access_control_access_control_service_module__WEBPACK_IMPORTED_MODULE_6__["AccessControlServiceModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('accessControl', _access_control_reducer__WEBPACK_IMPORTED_MODULE_3__["accessControlReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_access_control_effects__WEBPACK_IMPORTED_MODULE_5__["AccessControlEffects"]]),
            ],
        })
    ], AccessControlStoreModule);
    return AccessControlStoreModule;
}());



/***/ }),

/***/ "g8o9":
/*!*******************************************************************!*\
  !*** ./src/app/services/access-control/access-control.service.ts ***!
  \*******************************************************************/
/*! exports provided: AccessControlStrategyThreshold, AccessControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlStrategyThreshold", function() { return AccessControlStrategyThreshold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlService", function() { return AccessControlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _camera_camera_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../camera/camera.service */ "2MVJ");
/* harmony import */ var _open_cv_open_cv_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../open-cv/open-cv.service */ "J6F9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






var AccessControlStrategyThreshold = /** @class */ (function () {
    function AccessControlStrategyThreshold() {
        this.frameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.frame$ = this.frameSubject.asObservable();
    }
    AccessControlStrategyThreshold.prototype.start = function () {
        this.frameDelta = new cv.Mat();
        this.M = cv.Mat.ones(5, 5, cv.CV_8U);
        this.ksize = new cv.Size(3, 3);
        this.anchor = new cv.Point(-1, -1);
        this.contours = new cv.MatVector();
        this.hierarchy = new cv.Mat();
    };
    AccessControlStrategyThreshold.prototype.process = function (prevFrame, currentFrame) {
        // compute difference between first frame and current frame
        cv.absdiff(prevFrame, currentFrame, this.frameDelta);
        cv.threshold(this.frameDelta, this.frameDelta, 25, 255, cv.THRESH_BINARY);
        cv.erode(this.frameDelta, this.frameDelta, this.M, this.anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
        cv.dilate(this.frameDelta, this.frameDelta, this.M, this.anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
        cv.findContours(this.frameDelta, this.contours, this.hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
        for (var i = 0; i < this.contours.size(); i++) {
            if (cv.contourArea(this.contours.get(i), false) < 500) {
                continue;
            }
            return true;
        }
        this.frameSubject.next(this.frameDelta);
        return false;
    };
    AccessControlStrategyThreshold.prototype.preprocess = function (src, dst) {
        cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);
        cv.GaussianBlur(dst, dst, this.ksize, 0, 0, cv.BORDER_DEFAULT);
    };
    AccessControlStrategyThreshold.prototype.stop = function () {
        this.frameDelta.delete();
        this.M.delete();
        // todo how to delete this?
        // this.ksize.delete();
        this.contours.delete();
        this.hierarchy.delete();
    };
    return AccessControlStrategyThreshold;
}());

var AccessControlService = /** @class */ (function () {
    function AccessControlService(camera, openCv) {
        this.camera = camera;
        this.openCv = openCv;
        this.strategy = new AccessControlStrategyThreshold();
        this.started = false;
        this.frameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.stateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('idle');
        this.frame$ = this.frameSubject.asObservable();
        this.state$ = this.stateSubject.asObservable();
    }
    AccessControlService.prototype.start = function (config) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var resolution, size;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.started) {
                            return [2 /*return*/];
                        }
                        this.started = true;
                        this.stateSubject.next('start');
                        this.config = config;
                        resolution = 'vga';
                        size = this.camera.constraints[resolution];
                        return [4 /*yield*/, this.camera.start(resolution, 'videoInput')];
                    case 1:
                        _a.sent();
                        if (!!this.openCv.cvState.value.ready) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.openCv.cvState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (state) { return state.ready; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).toPromise()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.video = this.camera.video;
                        this.capture = new cv.VideoCapture(this.video);
                        this.source = new cv.Mat(size.height.exact, size.width.exact, cv.CV_8UC4);
                        this.prevFrame = new cv.Mat();
                        this.currentFrame = new cv.Mat();
                        this.strategy.start();
                        this.getFrame(this.currentFrame);
                        this.stateSubject.next('idle');
                        return [2 /*return*/];
                }
            });
        });
    };
    AccessControlService.prototype.stop = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (!this.started) {
                    return [2 /*return*/];
                }
                this.started = false;
                this.stateSubject.next('stop');
                // clean and stop.
                this.source.delete();
                this.prevFrame.delete();
                this.currentFrame.delete();
                this.strategy.stop();
                this.camera.stop();
                this.stateSubject.next('idle');
                return [2 /*return*/];
            });
        });
    };
    AccessControlService.prototype.process = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                this.stateSubject.next('process');
                try {
                    if (!this.camera.stream) {
                        // todo what is the case?
                        return [2 /*return*/, false];
                    }
                    _a = [this.currentFrame, this.prevFrame], this.prevFrame = _a[0], this.currentFrame = _a[1];
                    // start processing.
                    this.getFrame(this.currentFrame);
                    if (this.strategy.process(this.prevFrame, this.currentFrame)) {
                        return [2 /*return*/, true];
                    }
                }
                catch (err) {
                    console.error(err);
                }
                finally {
                    this.stateSubject.next('idle');
                }
                return [2 /*return*/, false];
            });
        });
    };
    AccessControlService.prototype.getImage = function () {
        var canvas = document.createElement('canvas');
        canvas.width = 640;
        canvas.height = 480;
        cv.imshow(canvas, this.source);
        // const mime = 'image/png';
        var mime = 'image/jpeg';
        var image = canvas.toDataURL(mime);
        return image;
    };
    AccessControlService.prototype.getFrame = function (dst) {
        this.capture.read(this.source);
        this.strategy.preprocess(this.source, dst);
        this.frameSubject.next(this.source);
    };
    AccessControlService.ctorParameters = function () { return [
        { type: _camera_camera_service__WEBPACK_IMPORTED_MODULE_3__["CameraService"] },
        { type: _open_cv_open_cv_service__WEBPACK_IMPORTED_MODULE_4__["OpenCVService"] }
    ]; };
    AccessControlService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_camera_camera_service__WEBPACK_IMPORTED_MODULE_3__["CameraService"],
            _open_cv_open_cv_service__WEBPACK_IMPORTED_MODULE_4__["OpenCVService"]])
    ], AccessControlService);
    return AccessControlService;
}());



/***/ }),

/***/ "gE7k":
/*!************************************************************!*\
  !*** ./src/app/shared/select-index/select-index.module.ts ***!
  \************************************************************/
/*! exports provided: SelectIndexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectIndexModule", function() { return SelectIndexModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _select_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-index.component */ "uxi/");
/* harmony import */ var _select_index_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-index.service */ "CycX");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");










var SelectIndexModule = /** @class */ (function () {
    function SelectIndexModule() {
    }
    SelectIndexModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_select_index_component__WEBPACK_IMPORTED_MODULE_3__["SelectIndexComponent"]],
            entryComponents: [_select_index_component__WEBPACK_IMPORTED_MODULE_3__["SelectIndexComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            ],
            providers: [_select_index_service__WEBPACK_IMPORTED_MODULE_4__["SelectIndexService"]],
        })
    ], SelectIndexModule);
    return SelectIndexModule;
}());



/***/ }),

/***/ "gGum":
/*!****************************************************!*\
  !*** ./src/app/shared/page/bt-status-icon.pipe.ts ***!
  \****************************************************/
/*! exports provided: BtStatusIconPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtStatusIconPipe", function() { return BtStatusIconPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_connect_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/connect-status */ "YzEn");



var BtStatusIconPipe = /** @class */ (function () {
    function BtStatusIconPipe() {
        this.btStatusConnect = new Map([
            [_model_connect_status__WEBPACK_IMPORTED_MODULE_2__["ConnectStatus"].CONNECTED, 'bluetooth-connect'],
            [_model_connect_status__WEBPACK_IMPORTED_MODULE_2__["ConnectStatus"].CONNECTING, 'bluetooth-transfer'],
            [_model_connect_status__WEBPACK_IMPORTED_MODULE_2__["ConnectStatus"].DISCONNECTED, 'bluetooth-off'],
            [_model_connect_status__WEBPACK_IMPORTED_MODULE_2__["ConnectStatus"].DISCONNECTING, 'bluetooth-transfer'],
            [_model_connect_status__WEBPACK_IMPORTED_MODULE_2__["ConnectStatus"].TRANSFER, 'bluetooth-transfer'],
        ]);
    }
    BtStatusIconPipe.prototype.transform = function (value, args) {
        return this.btStatusConnect.get(value);
    };
    BtStatusIconPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'btStatusIcon',
        })
    ], BtStatusIconPipe);
    return BtStatusIconPipe;
}());



/***/ }),

/***/ "hogY":
/*!***************************************************************************!*\
  !*** ./src/app/components/config/monitor-config/monitor-config.module.ts ***!
  \***************************************************************************/
/*! exports provided: MonitorConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorConfigModule", function() { return MonitorConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _monitor_config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monitor-config.component */ "vZ4l");
/* harmony import */ var _device_monitor_device_monitor_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../device-monitor/device-monitor.module */ "2EB/");





var MonitorConfigModule = /** @class */ (function () {
    function MonitorConfigModule() {
    }
    MonitorConfigModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_monitor_config_component__WEBPACK_IMPORTED_MODULE_3__["MonitorConfigComponent"]],
            exports: [_monitor_config_component__WEBPACK_IMPORTED_MODULE_3__["MonitorConfigComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _device_monitor_device_monitor_module__WEBPACK_IMPORTED_MODULE_4__["DeviceMonitorModule"],
            ],
        })
    ], MonitorConfigModule);
    return MonitorConfigModule;
}());



/***/ }),

/***/ "iET3":
/*!**************************************************!*\
  !*** ./src/app/store/monitor/monitor.reducer.ts ***!
  \**************************************************/
/*! exports provided: MonitorActionTypes, ActionMonitorInit, ActionMonitorUpdateTemp, ActionMonitorUpdateFlow, initialMonitorState, selectorMonitor, selectorMonitorTemp, selectorMonitorFlow, monitorReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorActionTypes", function() { return MonitorActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionMonitorInit", function() { return ActionMonitorInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionMonitorUpdateTemp", function() { return ActionMonitorUpdateTemp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionMonitorUpdateFlow", function() { return ActionMonitorUpdateFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialMonitorState", function() { return initialMonitorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorMonitor", function() { return selectorMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorMonitorTemp", function() { return selectorMonitorTemp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorMonitorFlow", function() { return selectorMonitorFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monitorReducer", function() { return monitorReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

var MonitorActionTypes;
(function (MonitorActionTypes) {
    MonitorActionTypes["INIT"] = "[Monitor] Init";
    MonitorActionTypes["UPDATE_TEMP"] = "[Monitor] Update temp";
    MonitorActionTypes["UPDATE_FLOW"] = "[Monitor] Update flow";
})(MonitorActionTypes || (MonitorActionTypes = {}));
var ActionMonitorInit = /** @class */ (function () {
    function ActionMonitorInit() {
        this.type = MonitorActionTypes.INIT;
    }
    return ActionMonitorInit;
}());

var ActionMonitorUpdateTemp = /** @class */ (function () {
    function ActionMonitorUpdateTemp(payload) {
        this.payload = payload;
        this.type = MonitorActionTypes.UPDATE_TEMP;
    }
    return ActionMonitorUpdateTemp;
}());

var ActionMonitorUpdateFlow = /** @class */ (function () {
    function ActionMonitorUpdateFlow(payload) {
        this.payload = payload;
        this.type = MonitorActionTypes.UPDATE_FLOW;
    }
    return ActionMonitorUpdateFlow;
}());

var initialMonitorState = {
    temp: {
        xData: [],
        yData: [],
    },
    flow: {
        xData: [],
        yData: [],
    },
};
var selectorMonitor = function (state) { return state.monitor; };
var selectorMonitorTemp = function (state) { return state.monitor.temp; };
var selectorMonitorFlow = function (state) { return state.monitor.flow; };
function monitorReducer(state, action) {
    if (state === void 0) { state = initialMonitorState; }
    switch (action.type) {
        case MonitorActionTypes.UPDATE_TEMP:
            return updateTemp(state, action.payload);
        case MonitorActionTypes.UPDATE_FLOW:
            return updateFlow(state, action.payload);
        default:
            return state;
    }
}
function updateTemp(state, temp) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { temp: temp });
}
function updateFlow(state, flow) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { flow: flow });
}


/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _times_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./times.pipe */ "qyO8");
/* harmony import */ var _date_time_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date-time.pipe */ "/41K");
/* harmony import */ var _memory_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./memory.pipe */ "Zjgc");






var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_times_pipe__WEBPACK_IMPORTED_MODULE_3__["TimesPipe"], _date_time_pipe__WEBPACK_IMPORTED_MODULE_4__["DateTimePipe"], _memory_pipe__WEBPACK_IMPORTED_MODULE_5__["MemoryPipe"]],
            exports: [_times_pipe__WEBPACK_IMPORTED_MODULE_3__["TimesPipe"], _date_time_pipe__WEBPACK_IMPORTED_MODULE_4__["DateTimePipe"], _memory_pipe__WEBPACK_IMPORTED_MODULE_5__["MemoryPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "inRq":
/*!****************************************************!*\
  !*** ./src/app/store/settings/settings.reducer.ts ***!
  \****************************************************/
/*! exports provided: SettingsActionTypes, ActionSettingsInit, ActionSettingsUpdate, ActionSettingsAddCompote, ActionSettingsChangeCompote, ActionSettingsRemoveCompote, ActionSettingsUpdateCompote, ActionSettingsLoadCompote, ActionSettingsAddCompoteDaily, ActionSettingsChangeCompoteDaily, ActionSettingsRemoveCompoteDaily, ActionSettingsUpdateCompoteDaily, ActionSettingsLoadCompoteDaily, ActionSettingsAddProgram, ActionSettingsChangeProgram, ActionSettingsRemoveProgram, ActionSettingsUpdateProgram, ActionSettingsLoadProgram, ActionSettingsAddPump, ActionSettingsChangePump, ActionSettingsRemovePump, ActionSettingsUpdatePump, ActionSettingsLoadPump, ActionSettingsAddDose, ActionSettingsChangeDose, ActionSettingsRemoveDose, ActionSettingsUpdateDose, ActionSettingsLoadDose, ActionSettingsAddTimer, ActionSettingsChangeTimer, ActionSettingsRemoveTimer, ActionSettingsUpdateTimer, ActionSettingsLoadTimer, ActionSettingsAddSchedule, ActionSettingsChangeSchedule, ActionSettingsRemoveSchedule, ActionSettingsUpdateSchedule, ActionSettingsLoadSchedule, ActionSettingsAddMixer, ActionSettingsChangeMixer, ActionSettingsRemoveMixer, ActionSettingsUpdateMixer, ActionSettingsLoadMixer, ActionSettingsLoadPinAssignment, ActionSettingsChangePinAssignment, ActionSettingsUpdatePinAssignment, ActionSettingsChangeName, ActionSettingsSync, ActionSettingsSyncEnd, initialSettingsState, selectorSettings, selectorDeviceSettings, selectorPrograms, selectorProgram, selectorCompotes, selectorCompote, selectorCompoteDaily, selectorTimers, selectorTimer, selectorSchedules, selectorSchedule, selectorPumps, selectorPump, selectorMixers, selectorMixer, selectorDoses, selectorDose, selectorPinAssignment, selectorPinPump, selectorPinPumps, selectorPinFlowSensor, selectorPinFlowSensors, selectorPinMixer, selectorPinMixers, selectorPinDose, selectorPinDoses, selectorPinDoseMixer, selectorPinDoseMixers, selectorPinValve, selectorPinValves, selectorPinLevelSensor, selectorPinLevelSensors, selectorNames, selectorSettingsSync, settingsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsActionTypes", function() { return SettingsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsInit", function() { return ActionSettingsInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsUpdate", function() { return ActionSettingsUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsAddCompote", function() { return ActionSettingsAddCompote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeCompote", function() { return ActionSettingsChangeCompote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsRemoveCompote", function() { return ActionSettingsRemoveCompote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsUpdateCompote", function() { return ActionSettingsUpdateCompote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsLoadCompote", function() { return ActionSettingsLoadCompote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsAddCompoteDaily", function() { return ActionSettingsAddCompoteDaily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeCompoteDaily", function() { return ActionSettingsChangeCompoteDaily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsRemoveCompoteDaily", function() { return ActionSettingsRemoveCompoteDaily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsUpdateCompoteDaily", function() { return ActionSettingsUpdateCompoteDaily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsLoadCompoteDaily", function() { return ActionSettingsLoadCompoteDaily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsAddProgram", function() { return ActionSettingsAddProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeProgram", function() { return ActionSettingsChangeProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsRemoveProgram", function() { return ActionSettingsRemoveProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsUpdateProgram", function() { return ActionSettingsUpdateProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsLoadProgram", function() { return ActionSettingsLoadProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsAddPump", function() { return ActionSettingsAddPump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangePump", function() { return ActionSettingsChangePump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsRemovePump", function() { return ActionSettingsRemovePump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsUpdatePump", function() { return ActionSettingsUpdatePump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsLoadPump", function() { return ActionSettingsLoadPump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsAddDose", function() { return ActionSettingsAddDose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeDose", function() { return ActionSettingsChangeDose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsRemoveDose", function() { return ActionSettingsRemoveDose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsUpdateDose", function() { return ActionSettingsUpdateDose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsLoadDose", function() { return ActionSettingsLoadDose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsAddTimer", function() { return ActionSettingsAddTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeTimer", function() { return ActionSettingsChangeTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsRemoveTimer", function() { return ActionSettingsRemoveTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsUpdateTimer", function() { return ActionSettingsUpdateTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsLoadTimer", function() { return ActionSettingsLoadTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsAddSchedule", function() { return ActionSettingsAddSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeSchedule", function() { return ActionSettingsChangeSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsRemoveSchedule", function() { return ActionSettingsRemoveSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsUpdateSchedule", function() { return ActionSettingsUpdateSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsLoadSchedule", function() { return ActionSettingsLoadSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsAddMixer", function() { return ActionSettingsAddMixer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeMixer", function() { return ActionSettingsChangeMixer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsRemoveMixer", function() { return ActionSettingsRemoveMixer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsUpdateMixer", function() { return ActionSettingsUpdateMixer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsLoadMixer", function() { return ActionSettingsLoadMixer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsLoadPinAssignment", function() { return ActionSettingsLoadPinAssignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangePinAssignment", function() { return ActionSettingsChangePinAssignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsUpdatePinAssignment", function() { return ActionSettingsUpdatePinAssignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeName", function() { return ActionSettingsChangeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsSync", function() { return ActionSettingsSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsSyncEnd", function() { return ActionSettingsSyncEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialSettingsState", function() { return initialSettingsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorSettings", function() { return selectorSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorDeviceSettings", function() { return selectorDeviceSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPrograms", function() { return selectorPrograms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorProgram", function() { return selectorProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorCompotes", function() { return selectorCompotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorCompote", function() { return selectorCompote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorCompoteDaily", function() { return selectorCompoteDaily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorTimers", function() { return selectorTimers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorTimer", function() { return selectorTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorSchedules", function() { return selectorSchedules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorSchedule", function() { return selectorSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPumps", function() { return selectorPumps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPump", function() { return selectorPump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorMixers", function() { return selectorMixers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorMixer", function() { return selectorMixer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorDoses", function() { return selectorDoses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorDose", function() { return selectorDose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPinAssignment", function() { return selectorPinAssignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPinPump", function() { return selectorPinPump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPinPumps", function() { return selectorPinPumps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPinFlowSensor", function() { return selectorPinFlowSensor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPinFlowSensors", function() { return selectorPinFlowSensors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPinMixer", function() { return selectorPinMixer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPinMixers", function() { return selectorPinMixers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPinDose", function() { return selectorPinDose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPinDoses", function() { return selectorPinDoses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPinDoseMixer", function() { return selectorPinDoseMixer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPinDoseMixers", function() { return selectorPinDoseMixers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPinValve", function() { return selectorPinValve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPinValves", function() { return selectorPinValves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPinLevelSensor", function() { return selectorPinLevelSensor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPinLevelSensors", function() { return selectorPinLevelSensors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorNames", function() { return selectorNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorSettingsSync", function() { return selectorSettingsSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsReducer", function() { return settingsReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _model_default_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/default-settings */ "n3qP");
/* harmony import */ var _model_device_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/device-config */ "saMG");



var SettingsActionTypes;
(function (SettingsActionTypes) {
    SettingsActionTypes["INIT"] = "[Settings] Init";
    SettingsActionTypes["UPDATE"] = "[Settings] Update";
    SettingsActionTypes["CHANGE_NAME"] = "[Settings] Change name";
    SettingsActionTypes["ADD_COMPOTE"] = "[Settings] Add compote";
    SettingsActionTypes["CHANGE_COMPOTE"] = "[Settings] Change compote";
    SettingsActionTypes["REMOVE_COMPOTE"] = "[Settings] Remove compote";
    SettingsActionTypes["LOAD_COMPOTE"] = "[Settings] Load compote";
    SettingsActionTypes["UPDATE_COMPOTE"] = "[Settings] Update compote";
    SettingsActionTypes["ADD_COMPOTE_DAILY"] = "[Settings] Add compote daily";
    SettingsActionTypes["CHANGE_COMPOTE_DAILY"] = "[Settings] Change compote daily";
    SettingsActionTypes["REMOVE_COMPOTE_DAILY"] = "[Settings] Remove compote daily";
    SettingsActionTypes["LOAD_COMPOTE_DAILY"] = "[Settings] Load compote daily";
    SettingsActionTypes["UPDATE_COMPOTE_DAILY"] = "[Settings] Update compote daily";
    SettingsActionTypes["ADD_PROGRAM"] = "[Settings] Add program";
    SettingsActionTypes["CHANGE_PROGRAM"] = "[Settings] Change program";
    SettingsActionTypes["REMOVE_PROGRAM"] = "[Settings] Remove program";
    SettingsActionTypes["LOAD_PROGRAM"] = "[Settings] Load program";
    SettingsActionTypes["UPDATE_PROGRAM"] = "[Settings] Update program";
    SettingsActionTypes["ADD_PUMP"] = "[Settings] Add pump";
    SettingsActionTypes["CHANGE_PUMP"] = "[Settings] Change pump";
    SettingsActionTypes["REMOVE_PUMP"] = "[Settings] Remove pump";
    SettingsActionTypes["LOAD_PUMP"] = "[Settings] Load pump";
    SettingsActionTypes["UPDATE_PUMP"] = "[Settings] Update pump";
    SettingsActionTypes["ADD_DOSE"] = "[Settings] Add dose";
    SettingsActionTypes["CHANGE_DOSE"] = "[Settings] Change dose";
    SettingsActionTypes["REMOVE_DOSE"] = "[Settings] Remove dose";
    SettingsActionTypes["LOAD_DOSE"] = "[Settings] Load dose";
    SettingsActionTypes["UPDATE_DOSE"] = "[Settings] Update dose";
    SettingsActionTypes["ADD_TIMER"] = "[Settings] Add timer";
    SettingsActionTypes["CHANGE_TIMER"] = "[Settings] Change timer";
    SettingsActionTypes["REMOVE_TIMER"] = "[Settings] Remove timer";
    SettingsActionTypes["LOAD_TIMER"] = "[Settings] Load timer";
    SettingsActionTypes["UPDATE_TIMER"] = "[Settings] Update timer";
    SettingsActionTypes["ADD_SCHEDULE"] = "[Settings] Add schedule";
    SettingsActionTypes["CHANGE_SCHEDULE"] = "[Settings] Change schedule";
    SettingsActionTypes["REMOVE_SCHEDULE"] = "[Settings] Remove schedule";
    SettingsActionTypes["LOAD_SCHEDULE"] = "[Settings] Load schedule";
    SettingsActionTypes["UPDATE_SCHEDULE"] = "[Settings] Update schedule";
    SettingsActionTypes["ADD_MIXER"] = "[Settings] Add mixer";
    SettingsActionTypes["CHANGE_MIXER"] = "[Settings] Change mixer";
    SettingsActionTypes["REMOVE_MIXER"] = "[Settings] Remove mixer";
    SettingsActionTypes["LOAD_MIXER"] = "[Settings] Load mixer";
    SettingsActionTypes["UPDATE_MIXER"] = "[Settings] Update mixer";
    SettingsActionTypes["CHANGE_PIN_ASSIGNMENT"] = "[Settings] Change pin assignment";
    SettingsActionTypes["LOAD_PIN_ASSIGNMENT"] = "[Settings] Load pin assignment";
    SettingsActionTypes["UPDATE_PIN_ASSIGNMENT"] = "[Settings] Update pin assignment";
    SettingsActionTypes["SYNC"] = "[Settings] Sync";
    SettingsActionTypes["SYNC_END"] = "[Settings] Sync end";
})(SettingsActionTypes || (SettingsActionTypes = {}));
var ActionSettingsInit = /** @class */ (function () {
    function ActionSettingsInit() {
        this.type = SettingsActionTypes.INIT;
    }
    return ActionSettingsInit;
}());

var ActionSettingsUpdate = /** @class */ (function () {
    function ActionSettingsUpdate(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.UPDATE;
    }
    return ActionSettingsUpdate;
}());

var ActionSettingsAddCompote = /** @class */ (function () {
    function ActionSettingsAddCompote() {
        this.type = SettingsActionTypes.ADD_COMPOTE;
    }
    return ActionSettingsAddCompote;
}());

var ActionSettingsChangeCompote = /** @class */ (function () {
    function ActionSettingsChangeCompote(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_COMPOTE;
    }
    return ActionSettingsChangeCompote;
}());

var ActionSettingsRemoveCompote = /** @class */ (function () {
    function ActionSettingsRemoveCompote(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.REMOVE_COMPOTE;
    }
    return ActionSettingsRemoveCompote;
}());

var ActionSettingsUpdateCompote = /** @class */ (function () {
    function ActionSettingsUpdateCompote(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.UPDATE_COMPOTE;
    }
    return ActionSettingsUpdateCompote;
}());

var ActionSettingsLoadCompote = /** @class */ (function () {
    function ActionSettingsLoadCompote() {
        this.type = SettingsActionTypes.LOAD_COMPOTE;
    }
    return ActionSettingsLoadCompote;
}());

var ActionSettingsAddCompoteDaily = /** @class */ (function () {
    function ActionSettingsAddCompoteDaily(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.ADD_COMPOTE_DAILY;
    }
    return ActionSettingsAddCompoteDaily;
}());

var ActionSettingsChangeCompoteDaily = /** @class */ (function () {
    function ActionSettingsChangeCompoteDaily(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_COMPOTE_DAILY;
    }
    return ActionSettingsChangeCompoteDaily;
}());

var ActionSettingsRemoveCompoteDaily = /** @class */ (function () {
    function ActionSettingsRemoveCompoteDaily(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.REMOVE_COMPOTE_DAILY;
    }
    return ActionSettingsRemoveCompoteDaily;
}());

var ActionSettingsUpdateCompoteDaily = /** @class */ (function () {
    function ActionSettingsUpdateCompoteDaily(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.UPDATE_COMPOTE_DAILY;
    }
    return ActionSettingsUpdateCompoteDaily;
}());

var ActionSettingsLoadCompoteDaily = /** @class */ (function () {
    function ActionSettingsLoadCompoteDaily() {
        this.type = SettingsActionTypes.LOAD_COMPOTE_DAILY;
    }
    return ActionSettingsLoadCompoteDaily;
}());

var ActionSettingsAddProgram = /** @class */ (function () {
    function ActionSettingsAddProgram() {
        this.type = SettingsActionTypes.ADD_PROGRAM;
    }
    return ActionSettingsAddProgram;
}());

var ActionSettingsChangeProgram = /** @class */ (function () {
    function ActionSettingsChangeProgram(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_PROGRAM;
    }
    return ActionSettingsChangeProgram;
}());

var ActionSettingsRemoveProgram = /** @class */ (function () {
    function ActionSettingsRemoveProgram(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.REMOVE_PROGRAM;
    }
    return ActionSettingsRemoveProgram;
}());

var ActionSettingsUpdateProgram = /** @class */ (function () {
    function ActionSettingsUpdateProgram(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.UPDATE_PROGRAM;
    }
    return ActionSettingsUpdateProgram;
}());

var ActionSettingsLoadProgram = /** @class */ (function () {
    function ActionSettingsLoadProgram() {
        this.type = SettingsActionTypes.LOAD_PROGRAM;
    }
    return ActionSettingsLoadProgram;
}());

var ActionSettingsAddPump = /** @class */ (function () {
    function ActionSettingsAddPump() {
        this.type = SettingsActionTypes.ADD_PUMP;
    }
    return ActionSettingsAddPump;
}());

var ActionSettingsChangePump = /** @class */ (function () {
    function ActionSettingsChangePump(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_PUMP;
    }
    return ActionSettingsChangePump;
}());

var ActionSettingsRemovePump = /** @class */ (function () {
    function ActionSettingsRemovePump(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.REMOVE_PUMP;
    }
    return ActionSettingsRemovePump;
}());

var ActionSettingsUpdatePump = /** @class */ (function () {
    function ActionSettingsUpdatePump(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.UPDATE_PUMP;
    }
    return ActionSettingsUpdatePump;
}());

var ActionSettingsLoadPump = /** @class */ (function () {
    function ActionSettingsLoadPump() {
        this.type = SettingsActionTypes.LOAD_PUMP;
    }
    return ActionSettingsLoadPump;
}());

var ActionSettingsAddDose = /** @class */ (function () {
    function ActionSettingsAddDose() {
        this.type = SettingsActionTypes.ADD_DOSE;
    }
    return ActionSettingsAddDose;
}());

var ActionSettingsChangeDose = /** @class */ (function () {
    function ActionSettingsChangeDose(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_DOSE;
    }
    return ActionSettingsChangeDose;
}());

var ActionSettingsRemoveDose = /** @class */ (function () {
    function ActionSettingsRemoveDose(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.REMOVE_DOSE;
    }
    return ActionSettingsRemoveDose;
}());

var ActionSettingsUpdateDose = /** @class */ (function () {
    function ActionSettingsUpdateDose(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.UPDATE_DOSE;
    }
    return ActionSettingsUpdateDose;
}());

var ActionSettingsLoadDose = /** @class */ (function () {
    function ActionSettingsLoadDose() {
        this.type = SettingsActionTypes.LOAD_DOSE;
    }
    return ActionSettingsLoadDose;
}());

var ActionSettingsAddTimer = /** @class */ (function () {
    function ActionSettingsAddTimer() {
        this.type = SettingsActionTypes.ADD_TIMER;
    }
    return ActionSettingsAddTimer;
}());

var ActionSettingsChangeTimer = /** @class */ (function () {
    function ActionSettingsChangeTimer(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_TIMER;
    }
    return ActionSettingsChangeTimer;
}());

var ActionSettingsRemoveTimer = /** @class */ (function () {
    function ActionSettingsRemoveTimer(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.REMOVE_TIMER;
    }
    return ActionSettingsRemoveTimer;
}());

var ActionSettingsUpdateTimer = /** @class */ (function () {
    function ActionSettingsUpdateTimer(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.UPDATE_TIMER;
    }
    return ActionSettingsUpdateTimer;
}());

var ActionSettingsLoadTimer = /** @class */ (function () {
    function ActionSettingsLoadTimer() {
        this.type = SettingsActionTypes.LOAD_TIMER;
    }
    return ActionSettingsLoadTimer;
}());

var ActionSettingsAddSchedule = /** @class */ (function () {
    function ActionSettingsAddSchedule() {
        this.type = SettingsActionTypes.ADD_SCHEDULE;
    }
    return ActionSettingsAddSchedule;
}());

var ActionSettingsChangeSchedule = /** @class */ (function () {
    function ActionSettingsChangeSchedule(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_SCHEDULE;
    }
    return ActionSettingsChangeSchedule;
}());

var ActionSettingsRemoveSchedule = /** @class */ (function () {
    function ActionSettingsRemoveSchedule(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.REMOVE_SCHEDULE;
    }
    return ActionSettingsRemoveSchedule;
}());

var ActionSettingsUpdateSchedule = /** @class */ (function () {
    function ActionSettingsUpdateSchedule(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.UPDATE_SCHEDULE;
    }
    return ActionSettingsUpdateSchedule;
}());

var ActionSettingsLoadSchedule = /** @class */ (function () {
    function ActionSettingsLoadSchedule() {
        this.type = SettingsActionTypes.LOAD_SCHEDULE;
    }
    return ActionSettingsLoadSchedule;
}());

var ActionSettingsAddMixer = /** @class */ (function () {
    function ActionSettingsAddMixer() {
        this.type = SettingsActionTypes.ADD_MIXER;
    }
    return ActionSettingsAddMixer;
}());

var ActionSettingsChangeMixer = /** @class */ (function () {
    function ActionSettingsChangeMixer(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_MIXER;
    }
    return ActionSettingsChangeMixer;
}());

var ActionSettingsRemoveMixer = /** @class */ (function () {
    function ActionSettingsRemoveMixer(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.REMOVE_MIXER;
    }
    return ActionSettingsRemoveMixer;
}());

var ActionSettingsUpdateMixer = /** @class */ (function () {
    function ActionSettingsUpdateMixer(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.UPDATE_MIXER;
    }
    return ActionSettingsUpdateMixer;
}());

var ActionSettingsLoadMixer = /** @class */ (function () {
    function ActionSettingsLoadMixer() {
        this.type = SettingsActionTypes.LOAD_MIXER;
    }
    return ActionSettingsLoadMixer;
}());

var ActionSettingsLoadPinAssignment = /** @class */ (function () {
    function ActionSettingsLoadPinAssignment() {
        this.type = SettingsActionTypes.LOAD_PIN_ASSIGNMENT;
    }
    return ActionSettingsLoadPinAssignment;
}());

var ActionSettingsChangePinAssignment = /** @class */ (function () {
    function ActionSettingsChangePinAssignment(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_PIN_ASSIGNMENT;
    }
    return ActionSettingsChangePinAssignment;
}());

var ActionSettingsUpdatePinAssignment = /** @class */ (function () {
    function ActionSettingsUpdatePinAssignment(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.UPDATE_PIN_ASSIGNMENT;
    }
    return ActionSettingsUpdatePinAssignment;
}());

var ActionSettingsChangeName = /** @class */ (function () {
    function ActionSettingsChangeName(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_NAME;
    }
    return ActionSettingsChangeName;
}());

var ActionSettingsSync = /** @class */ (function () {
    function ActionSettingsSync() {
        this.type = SettingsActionTypes.SYNC;
    }
    return ActionSettingsSync;
}());

var ActionSettingsSyncEnd = /** @class */ (function () {
    function ActionSettingsSyncEnd() {
        this.type = SettingsActionTypes.SYNC_END;
    }
    return ActionSettingsSyncEnd;
}());

var initialSettingsState = {
    settings: Object(_model_default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultSettings"])(),
    pinAssignment: Object(_model_default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultPinAssignment"])(),
    names: Object(_model_default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultNames"])(),
    sync: false,
};
var selectorSettings = function (state) { return state.settings; };
var selectorDeviceSettings = function (state) { return state.settings.settings; };
var selectorPrograms = function (state) { return state.settings.settings.program; };
var selectorProgram = function (index) { return function (state) { return state.settings.settings.program[index]; }; };
var selectorCompotes = function (state) { return state.settings.settings.compote; };
var selectorCompote = function (index) { return function (state) { return state.settings.settings.compote[index]; }; };
var selectorCompoteDaily = function (id) { return function (index) { return function (state) { return state.settings.settings.compote[id].daily[index]; }; }; };
var selectorTimers = function (state) { return state.settings.settings.timer; };
var selectorTimer = function (index) { return function (state) { return state.settings.settings.timer[index]; }; };
var selectorSchedules = function (state) { return state.settings.settings.schedule; };
var selectorSchedule = function (index) { return function (state) { return state.settings.settings.schedule[index]; }; };
var selectorPumps = function (state) { return state.settings.settings.pump; };
var selectorPump = function (index) { return function (state) { return state.settings.settings.pump[index]; }; };
var selectorMixers = function (state) { return state.settings.settings.mixer; };
var selectorMixer = function (index) { return function (state) { return state.settings.settings.mixer[index]; }; };
var selectorDoses = function (state) { return state.settings.settings.dose; };
var selectorDose = function (index) { return function (state) { return state.settings.settings.dose[index]; }; };
var selectorPinAssignment = function (state) { return state.settings.pinAssignment; };
var selectorPinPump = function (index) { return function (state) { return state.settings.pinAssignment.pump[index]; }; };
var selectorPinPumps = function (state) { return state.settings.pinAssignment.pump; };
var selectorPinFlowSensor = function (index) { return function (state) { return state.settings.pinAssignment.flowSensor[index]; }; };
var selectorPinFlowSensors = function (state) { return state.settings.pinAssignment.flowSensor; };
var selectorPinMixer = function (index) { return function (state) { return state.settings.pinAssignment.mixer[index]; }; };
var selectorPinMixers = function (state) { return state.settings.pinAssignment.mixer; };
var selectorPinDose = function (index) { return function (state) { return state.settings.pinAssignment.dose[index]; }; };
var selectorPinDoses = function (state) { return state.settings.pinAssignment.dose; };
var selectorPinDoseMixer = function (index) { return function (state) { return state.settings.pinAssignment.doseMixer[index]; }; };
var selectorPinDoseMixers = function (state) { return state.settings.pinAssignment.doseMixer; };
var selectorPinValve = function (index) { return function (state) { return state.settings.pinAssignment.valve[index]; }; };
var selectorPinValves = function (state) { return state.settings.pinAssignment.valve; };
var selectorPinLevelSensor = function (index) { return function (state) { return state.settings.pinAssignment.levelSensor[index]; }; };
var selectorPinLevelSensors = function (state) { return state.settings.pinAssignment.levelSensor; };
var selectorNames = function (key) { return function (state) { return state.settings.names[key]; }; };
var selectorSettingsSync = function (state) { return state.settings.sync; };
function settingsReducer(state, action) {
    if (state === void 0) { state = initialSettingsState; }
    switch (action.type) {
        case SettingsActionTypes.UPDATE:
            return updateState(state, action.payload);
        case SettingsActionTypes.CHANGE_NAME:
            return changeName(state, action.payload);
        case SettingsActionTypes.ADD_COMPOTE:
            return addCompote(state);
        case SettingsActionTypes.CHANGE_COMPOTE:
            return changeCompote(state, action.payload);
        case SettingsActionTypes.REMOVE_COMPOTE:
            return removeCompote(state, action.payload);
        case SettingsActionTypes.ADD_COMPOTE_DAILY:
            return addCompoteDaily(state, action.payload);
        case SettingsActionTypes.CHANGE_COMPOTE_DAILY:
        case SettingsActionTypes.UPDATE_COMPOTE_DAILY:
            return changeCompoteDaily(state, action.payload);
        case SettingsActionTypes.LOAD_COMPOTE_DAILY:
            return state;
        case SettingsActionTypes.REMOVE_COMPOTE_DAILY:
            return removeCompoteDaily(state, action.payload);
        case SettingsActionTypes.ADD_PROGRAM:
            return addProgram(state);
        case SettingsActionTypes.CHANGE_PROGRAM:
        case SettingsActionTypes.UPDATE_PROGRAM:
            return changeProgram(state, action.payload);
        case SettingsActionTypes.LOAD_PROGRAM:
            return state;
        case SettingsActionTypes.REMOVE_PROGRAM:
            return removeProgram(state, action.payload);
        case SettingsActionTypes.ADD_DOSE:
            return addDose(state);
        case SettingsActionTypes.CHANGE_DOSE:
        case SettingsActionTypes.UPDATE_DOSE:
            return changeDose(state, action.payload);
        case SettingsActionTypes.LOAD_DOSE:
            return state;
        case SettingsActionTypes.REMOVE_DOSE:
            return removeDose(state, action.payload);
        case SettingsActionTypes.ADD_PUMP:
            return addPump(state);
        case SettingsActionTypes.CHANGE_PUMP:
        case SettingsActionTypes.UPDATE_PUMP:
            return changePump(state, action.payload);
        case SettingsActionTypes.LOAD_PUMP:
            return state;
        case SettingsActionTypes.REMOVE_PUMP:
            return removePump(state, action.payload);
        case SettingsActionTypes.ADD_TIMER:
            return addTimer(state);
        case SettingsActionTypes.CHANGE_TIMER:
        case SettingsActionTypes.UPDATE_TIMER:
            return changeTimer(state, action.payload);
        case SettingsActionTypes.LOAD_TIMER:
            return state;
        case SettingsActionTypes.REMOVE_TIMER:
            return removeTimer(state, action.payload);
        case SettingsActionTypes.ADD_SCHEDULE:
            return addSchedule(state);
        case SettingsActionTypes.CHANGE_SCHEDULE:
        case SettingsActionTypes.UPDATE_SCHEDULE:
            return changeSchedule(state, action.payload);
        case SettingsActionTypes.LOAD_SCHEDULE:
            return state;
        case SettingsActionTypes.REMOVE_SCHEDULE:
            return removeSchedule(state, action.payload);
        case SettingsActionTypes.ADD_MIXER:
            return addMixer(state);
        case SettingsActionTypes.CHANGE_MIXER:
        case SettingsActionTypes.UPDATE_MIXER:
            return changeMixer(state, action.payload);
        case SettingsActionTypes.LOAD_MIXER:
            return state;
        case SettingsActionTypes.REMOVE_MIXER:
            return removeMixer(state, action.payload);
        case SettingsActionTypes.LOAD_PIN_ASSIGNMENT:
            return state;
        case SettingsActionTypes.CHANGE_PIN_ASSIGNMENT:
        case SettingsActionTypes.UPDATE_PIN_ASSIGNMENT:
            return changePinAssignment(state, action.payload);
        case SettingsActionTypes.SYNC:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { sync: true });
        case SettingsActionTypes.SYNC_END:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { sync: false });
        default:
            return state;
    }
}
function updateState(state, newState) {
    if (!newState) {
        return state;
    }
    var nextState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, newState), { settings: {
            program: fixArray(newState.settings.program, _model_device_config__WEBPACK_IMPORTED_MODULE_2__["deviceConfig"].programCount, _model_default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultProgram"]),
            compote: fixArray(newState.settings.compote, _model_device_config__WEBPACK_IMPORTED_MODULE_2__["deviceConfig"].compoteCount, _model_default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultCompote"]),
            schedule: fixArray(newState.settings.schedule, _model_device_config__WEBPACK_IMPORTED_MODULE_2__["deviceConfig"].scheduleCount, _model_default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultSchedule"]),
            timer: fixArray(newState.settings.timer, _model_device_config__WEBPACK_IMPORTED_MODULE_2__["deviceConfig"].timerCount, _model_default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultTimer"]),
            pump: fixArray(newState.settings.pump, _model_device_config__WEBPACK_IMPORTED_MODULE_2__["deviceConfig"].pumpCount, _model_default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultPumpSettings"]),
            levelSensor: fixArray(newState.settings.levelSensor, _model_device_config__WEBPACK_IMPORTED_MODULE_2__["deviceConfig"].levelSensorCount, _model_default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultLevelSensorSettings"]),
            mixer: fixArray(newState.settings.mixer, _model_device_config__WEBPACK_IMPORTED_MODULE_2__["deviceConfig"].mixerCount, _model_default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultMixerSettings"]),
            dose: fixArray(newState.settings.dose, _model_device_config__WEBPACK_IMPORTED_MODULE_2__["deviceConfig"].doseCount, _model_default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultDoseSettings"]),
        }, pinAssignment: {
            pump: fixArray(newState.pinAssignment.pump, _model_device_config__WEBPACK_IMPORTED_MODULE_2__["deviceConfig"].pumpCount, defaultPin),
            levelSensor: fixArray(newState.pinAssignment.levelSensor, _model_device_config__WEBPACK_IMPORTED_MODULE_2__["deviceConfig"].levelSensorCount, defaultPin),
            mixer: fixArray(newState.pinAssignment.mixer, _model_device_config__WEBPACK_IMPORTED_MODULE_2__["deviceConfig"].mixerCount, defaultPin),
            dose: fixArray(newState.pinAssignment.dose, _model_device_config__WEBPACK_IMPORTED_MODULE_2__["deviceConfig"].doseCount, defaultPin),
            valve: fixArray(newState.pinAssignment.valve, _model_device_config__WEBPACK_IMPORTED_MODULE_2__["deviceConfig"].valveCount, defaultPin),
            doseMixer: newState.pinAssignment.doseMixer,
            flowSensor: newState.pinAssignment.flowSensor,
            rtc: newState.pinAssignment.rtc,
            display: newState.pinAssignment.display,
            button: newState.pinAssignment.button,
        } });
    return nextState;
}
function defaultPin() {
    return 0;
}
function fixArray(array, length, fillFn) {
    if (array.length === length) {
        return array;
    }
    if (array.length > length) {
        return array.slice(0, length);
    }
    var fixed = array.slice();
    for (var i = array.length; i < length; i++) {
        fixed.push(fillFn());
    }
    return fixed;
}
function changeName(state, _a) {
    var _b;
    var key = _a.key, index = _a.index, value = _a.value;
    var names = state.names[key].slice(0);
    names[index] = value;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { names: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.names), (_b = {}, _b[key] = names, _b)) });
}
function addCompoteDaily(state, index) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { compote: state.settings.compote.map(function (compote, i) {
                return i === index ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, compote), { daily: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(compote.daily, [Object(_model_default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultCompoteDaily"])()]) }) : compote;
            }) }) });
}
function changeCompoteDaily(state, _a) {
    var index = _a.index, dailyIndex = _a.dailyIndex, value = _a.value;
    var compote = state.settings.compote.slice(0);
    var daily = compote[index].daily.slice(0);
    daily[dailyIndex] = value;
    compote[index] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, compote[index]), { daily: daily });
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { compote: compote }) });
}
function removeCompoteDaily(state, _a) {
    var index = _a.index, dailyIndex = _a.dailyIndex;
    var compote = state.settings.compote.slice(0);
    compote.splice(index, 1);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { compote: compote }) });
}
function addCompote(state) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { compote: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(state.settings.compote, [
                {
                    daily: [],
                },
            ]) }) });
}
function changeCompote(state, _a) {
    var index = _a.index, value = _a.value;
    var compote = state.settings.compote.slice(0);
    compote[index] = value;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { compote: compote }) });
}
function removeCompote(state, index) {
    var compote = state.settings.compote.slice(0);
    compote.splice(index, 1);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { compote: compote }) });
}
function addProgram(state) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { program: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(state.settings.program, [
                Object(_model_default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultProgram"])(),
            ]) }) });
}
function changeProgram(state, _a) {
    var index = _a.index, value = _a.value;
    var program = state.settings.program.slice(0);
    program[index] = value;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { program: program }) });
}
function removeProgram(state, index) {
    var program = state.settings.program.slice(0);
    program.splice(index, 1);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { program: program }) });
}
function addPump(state) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { pump: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(state.settings.pump, [
                Object(_model_default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultPumpSettings"])(),
            ]) }) });
}
function changePump(state, _a) {
    var index = _a.index, value = _a.value;
    var pump = state.settings.pump.slice(0);
    pump[index] = value;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { pump: pump }) });
}
function removePump(state, index) {
    var pump = state.settings.pump.slice(0);
    pump.splice(index, 1);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { pump: pump }) });
}
function addDose(state) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { dose: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(state.settings.dose, [
                Object(_model_default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultDoseSettings"])(),
            ]) }) });
}
function changeDose(state, _a) {
    var index = _a.index, value = _a.value;
    var dose = state.settings.dose.slice(0);
    dose[index] = value;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { dose: dose }) });
}
function removeDose(state, index) {
    var dose = state.settings.dose.slice(0);
    dose.splice(index, 1);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { dose: dose }) });
}
function addMixer(state) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { mixer: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(state.settings.mixer, [
                Object(_model_default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultMixerSettings"])(),
            ]) }) });
}
function changeMixer(state, _a) {
    var index = _a.index, value = _a.value;
    var mixer = state.settings.mixer.slice(0);
    mixer[index] = value;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { mixer: mixer }) });
}
function removeMixer(state, index) {
    var mixer = state.settings.mixer.slice(0);
    mixer.splice(index, 1);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { mixer: mixer }) });
}
function addTimer(state) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { timer: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(state.settings.timer, [
                Object(_model_default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultTimer"])(),
            ]) }) });
}
function changeTimer(state, _a) {
    var index = _a.index, value = _a.value;
    var timer = state.settings.timer.slice(0);
    timer[index] = value;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { timer: timer }) });
}
function removeTimer(state, index) {
    var timer = state.settings.timer.slice(0);
    timer.splice(index, 1);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { timer: timer }) });
}
function addSchedule(state) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { schedule: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(state.settings.schedule, [
                Object(_model_default_settings__WEBPACK_IMPORTED_MODULE_1__["defaultSchedule"])(),
            ]) }) });
}
function changeSchedule(state, _a) {
    var index = _a.index, value = _a.value;
    var schedule = state.settings.schedule.slice(0);
    schedule[index] = value;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { schedule: schedule }) });
}
function removeSchedule(state, index) {
    var schedule = state.settings.schedule.slice(0);
    schedule.splice(index, 1);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { settings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.settings), { schedule: schedule }) });
}
function changePinAssignment(state, _a) {
    var _b;
    var key = _a.key, index = _a.index, value = _a.value;
    var pins = state.pinAssignment[key].slice(0);
    pins[index] = value;
    var pinAssignment = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.pinAssignment), (_b = {}, _b[key] = pins, _b));
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { pinAssignment: pinAssignment });
}


/***/ }),

/***/ "iwvj":
/*!************************************************!*\
  !*** ./src/app/services/storage/db.service.ts ***!
  \************************************************/
/*! exports provided: DbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbService", function() { return DbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! idb */ "P0+2");



var DbService = /** @class */ (function () {
    function DbService() {
    }
    DbService.prototype.init = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, Object(idb__WEBPACK_IMPORTED_MODULE_2__["openDB"])('grow-control-db4', 1, {
                                upgrade: function (db) {
                                    db.createObjectStore('temp');
                                    db.createObjectStore('flow');
                                    db.createObjectStore('accessControlCamshot');
                                    db.createObjectStore('accessControlEpisode');
                                },
                            })];
                    case 1:
                        _a.db = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DbService.prototype.logTemp = function (temp) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.put('temp', temp, new Date().toISOString())];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DbService.prototype.getTemp = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = {};
                        return [4 /*yield*/, this.db.getAllKeys('temp')];
                    case 1:
                        _a.xData = _b.sent();
                        return [4 /*yield*/, this.db.getAll('temp')];
                    case 2: return [2 /*return*/, (_a.yData = _b.sent(), _a)];
                }
            });
        });
    };
    DbService.prototype.logFlow = function (flow) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.put('flow', flow, new Date().toISOString())];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DbService.prototype.getFlow = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = {};
                        return [4 /*yield*/, this.db.getAllKeys('flow')];
                    case 1:
                        _a.xData = _b.sent();
                        return [4 /*yield*/, this.db.getAll('flow')];
                    case 2: return [2 /*return*/, (_a.yData = _b.sent(), _a)];
                }
            });
        });
    };
    DbService.prototype.logAccessControl = function (episode, camshot) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var transaction;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        transaction = this.db.transaction(['accessControlCamshot', 'accessControlEpisode'], 'readwrite');
                        transaction.objectStore('accessControlEpisode').put({ lastKey: camshot.key }, episode);
                        transaction.objectStore('accessControlCamshot').put(camshot.value, camshot.key);
                        return [4 /*yield*/, transaction.done];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DbService.prototype.getAccessControlEpisode = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var keys, values;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.getAllKeys('accessControlEpisode')];
                    case 1:
                        keys = _a.sent();
                        return [4 /*yield*/, this.db.getAll('accessControlEpisode')];
                    case 2:
                        values = _a.sent();
                        return [2 /*return*/, keys.map(function (key, index) { return ({ key: key, value: values[index] }); }).sort(function (a, b) { return b.key - a.key; })];
                }
            });
        });
    };
    DbService.prototype.getAccessControlEpisodeKeys = function (episode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var keyRangeValue, transaction, objectStore, cursor, keys;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keyRangeValue = IDBKeyRange.bound(episode.key, episode.value.lastKey);
                        transaction = this.db.transaction(['accessControlCamshot'], 'readonly');
                        objectStore = transaction.objectStore('accessControlCamshot');
                        return [4 /*yield*/, objectStore.openCursor(keyRangeValue)];
                    case 1:
                        cursor = _a.sent();
                        keys = [];
                        _a.label = 2;
                    case 2:
                        if (!cursor) return [3 /*break*/, 4];
                        keys.push(cursor.key);
                        return [4 /*yield*/, cursor.continue()];
                    case 3:
                        cursor = _a.sent();
                        return [3 /*break*/, 2];
                    case 4: return [2 /*return*/, keys];
                }
            });
        });
    };
    DbService.prototype.getAccessControlCamshot = function (key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.get('accessControlCamshot', key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DbService.prototype.getAccessControlCamshotNext = function (key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var keyRangeValue, transaction, objectStore, cursor, next;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keyRangeValue = IDBKeyRange.lowerBound(key, true);
                        transaction = this.db.transaction(['accessControlCamshot'], 'readonly');
                        objectStore = transaction.objectStore('accessControlCamshot');
                        return [4 /*yield*/, objectStore.openCursor(keyRangeValue)];
                    case 1:
                        cursor = _a.sent();
                        next = { key: cursor.key, value: cursor.value };
                        return [2 /*return*/, next];
                }
            });
        });
    };
    DbService.prototype.getAccessControlCamshotPrev = function (key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var keyRangeValue, transaction, objectStore, cursor, next;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keyRangeValue = IDBKeyRange.upperBound(key, true);
                        transaction = this.db.transaction(['accessControlCamshot'], 'readonly');
                        objectStore = transaction.objectStore('accessControlCamshot');
                        return [4 /*yield*/, objectStore.openCursor(keyRangeValue)];
                    case 1:
                        cursor = _a.sent();
                        next = { key: cursor.key, value: cursor.value };
                        return [2 /*return*/, next];
                }
            });
        });
    };
    DbService.prototype.clear = function (names) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(names.map(function (name) { return _this.db.clear(name); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DbService.prototype.getTableSize = function (name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var size, count, cursor;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        size = 0;
                        count = 0;
                        return [4 /*yield*/, this.db.transaction(name).store.openCursor()];
                    case 1:
                        cursor = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!cursor) return [3 /*break*/, 4];
                        size += JSON.stringify(cursor.value).length;
                        size += JSON.stringify(cursor.key).length;
                        count++;
                        return [4 /*yield*/, cursor.continue()];
                    case 3:
                        cursor = _a.sent();
                        return [3 /*break*/, 2];
                    case 4: return [2 /*return*/, { name: name, size: size, count: count }];
                }
            });
        });
    };
    DbService.prototype.getDatabaseSize = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var tableNames, sizes, report;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tableNames = Array.from(this.db.objectStoreNames);
                        return [4 /*yield*/, Promise.all(tableNames.map(function (t) { return _this.getTableSize(t); }))];
                    case 1:
                        sizes = _a.sent();
                        report = sizes;
                        report.push({
                            name: 'total',
                            size: sizes.reduce(function (acc, val) { return acc + val.size; }, 0),
                            count: sizes.reduce(function (acc, val) { return acc + val.count; }, 0),
                        });
                        return [2 /*return*/, report];
                }
            });
        });
    };
    DbService.ctorParameters = function () { return []; };
    DbService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DbService);
    return DbService;
}());



/***/ }),

/***/ "j+l3":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/config/access-control-config/access-control-config.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-slide-toggle class=\"col-12\"\n  [checked]=\"accessControl.enable\" (change)=\"onChange({enable: $event.checked})\">\n  Enable\n</mat-slide-toggle>\n");

/***/ }),

/***/ "je1Z":
/*!************************************************************************!*\
  !*** ./src/app/components/settings/mixer-list/mixer-list.component.ts ***!
  \************************************************************************/
/*! exports provided: MixerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MixerListComponent", function() { return MixerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mixer_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mixer-list.component.html */ "vQc7");
/* harmony import */ var _mixer_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixer-list.component.scss */ "MdEb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/settings/settings.reducer */ "inRq");






var MixerListComponent = /** @class */ (function () {
    function MixerListComponent(store) {
        this.store = store;
        this.mixers$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorMixers"]));
        this.names$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(Object(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorNames"])('mixer')));
    }
    MixerListComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsLoadMixer"]());
    };
    MixerListComponent.prototype.onNameChange = function (index, value) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsChangeName"]({ key: 'mixer', index: index, value: value }));
    };
    MixerListComponent.prototype.onChange = function (index, value) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsChangeMixer"]({ index: index, value: value }));
    };
    MixerListComponent.prototype.onRemove = function (index) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsRemoveMixer"](index));
    };
    MixerListComponent.prototype.trackByIndex = function (index, item) {
        return index;
    };
    MixerListComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    MixerListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-mixer-list',
            template: _raw_loader_mixer_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_mixer_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], MixerListComponent);
    return MixerListComponent;
}());



/***/ }),

/***/ "k3Re":
/*!********************************************************************************!*\
  !*** ./src/app/components/config/device-monitor/device-monitor.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZpY2UtbW9uaXRvci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "kLPo":
/*!*************************************************************************!*\
  !*** ./src/app/components/settings/compote-list/compote-list.module.ts ***!
  \*************************************************************************/
/*! exports provided: CompoteListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompoteListModule", function() { return CompoteListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _compote_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compote-list.component */ "wE9O");
/* harmony import */ var _compote_compote_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compote/compote.module */ "MAHH");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








var CompoteListModule = /** @class */ (function () {
    function CompoteListModule() {
    }
    CompoteListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_compote_list_component__WEBPACK_IMPORTED_MODULE_3__["CompoteListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _compote_compote_module__WEBPACK_IMPORTED_MODULE_4__["CompoteModule"],
            ],
        })
    ], CompoteListModule);
    return CompoteListModule;
}());



/***/ }),

/***/ "kpDB":
/*!*********************************************************************************!*\
  !*** ./src/app/components/settings/program-list/program/program.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmFtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "l/D0":
/*!***************************************************************************************!*\
  !*** ./src/app/components/settings/pin-assignment/pin-select/pin-select.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PinSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinSelectComponent", function() { return PinSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pin_select_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pin-select.component.html */ "IDKA");
/* harmony import */ var _pin_select_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pin-select.component.scss */ "tOz4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var PinSelectComponent = /** @class */ (function () {
    function PinSelectComponent() {
        this.pinChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    PinSelectComponent.prototype.ngOnInit = function () {
    };
    PinSelectComponent.prototype.onChange = function (index, value) {
        this.pinChange.next({ index: index, value: value });
    };
    PinSelectComponent.prototype.trackByValue = function (index, value) {
        return value;
    };
    PinSelectComponent.ctorParameters = function () { return []; };
    PinSelectComponent.propDecorators = {
        pins: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        allPins: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        pinChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    PinSelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-pin-select',
            template: _raw_loader_pin_select_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_pin_select_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PinSelectComponent);
    return PinSelectComponent;
}());



/***/ }),

/***/ "lAHu":
/*!*********************************************************************!*\
  !*** ./src/app/components/access-control/episode/episode.module.ts ***!
  \*********************************************************************/
/*! exports provided: EpisodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeModule", function() { return EpisodeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _episode_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./episode.component */ "Y62Z");
/* harmony import */ var _camshots_camshots_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../camshots/camshots.module */ "7CRl");





var EpisodeModule = /** @class */ (function () {
    function EpisodeModule() {
    }
    EpisodeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _episode_component__WEBPACK_IMPORTED_MODULE_3__["EpisodeComponent"],
            ],
            exports: [
                _episode_component__WEBPACK_IMPORTED_MODULE_3__["EpisodeComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _camshots_camshots_module__WEBPACK_IMPORTED_MODULE_4__["CamshotsModule"],
            ]
        })
    ], EpisodeModule);
    return EpisodeModule;
}());



/***/ }),

/***/ "lIUF":
/*!************************************************************************************!*\
  !*** ./src/app/components/config/select-bt-device/select-bt-device.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-spinner {\n  margin: auto;\n}\n\n.mat-list-option {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VsZWN0LWJ0LWRldmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJzZWxlY3QtYnQtZGV2aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1zcGlubmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubWF0LWxpc3Qtb3B0aW9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuIl19 */");

/***/ }),

/***/ "lgpr":
/*!*******************************************************************!*\
  !*** ./src/app/components/settings/pump-list/pump/pump.module.ts ***!
  \*******************************************************************/
/*! exports provided: PumpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PumpModule", function() { return PumpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pump_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pump.component */ "2un1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");







var PumpModule = /** @class */ (function () {
    function PumpModule() {
    }
    PumpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pump_component__WEBPACK_IMPORTED_MODULE_3__["PumpComponent"]],
            exports: [_pump_component__WEBPACK_IMPORTED_MODULE_3__["PumpComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
            ],
        })
    ], PumpModule);
    return PumpModule;
}());



/***/ }),

/***/ "mEf4":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page/page.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-column app-content\">\n  <mat-toolbar>\n    <button (click)=\"sidenav.toggle()\" *ngIf=\"showMenu\" mat-icon-button>\n      <mat-icon svgIcon=\"menu\"></mat-icon>\n    </button>\n    <button (click)=\"onBack()\" *ngIf=\"showBack\" mat-icon-button>\n      <mat-icon svgIcon=\"arrow-left\"></mat-icon>\n    </button>\n    <span class=\"flex-fill text-center\">{{options?.title}}</span>\n    <button (click)=\"onAdd()\" *ngIf=\"showAdd\" mat-icon-button>\n      <mat-icon svgIcon=\"plus-circle-outline\"></mat-icon>\n    </button>\n    <button (click)=\"onSync()\" *ngIf=\"showSync\" mat-icon-button>\n      <mat-icon svgIcon=\"sync\"></mat-icon>\n    </button>\n    <button *ngIf=\"showBt\" mat-icon-button>\n      <mat-icon (click)=\"onBt()\" [svgIcon]=\"btStatus | btStatusIcon\"></mat-icon>\n    </button>\n  </mat-toolbar>\n  <mat-sidenav-container (backdropClick)=\"sidenav.close()\" class=\"flex-fill\">\n    <mat-sidenav #sidenav mode=\"over\">\n      <mat-nav-list>\n        <a (click)=\"sidenav.toggle()\"\n           *ngFor=\"let link of links\"\n           [routerLink]=\"link.route\"\n           mat-list-item\n        >\n          <mat-icon *ngIf=\"link.icon\" [svgIcon]=\"link.icon\"></mat-icon>\n          &nbsp;\n          {{link.title}}\n        </a>\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <ng-content></ng-content>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n");

/***/ }),

/***/ "n3qP":
/*!*******************************************!*\
  !*** ./src/app/model/default-settings.ts ***!
  \*******************************************/
/*! exports provided: defaultSettings, defaultProgram, defaultCompoteDaily, defaultCompote, defaultSchedule, defaultTimer, defaultPumpSettings, defaultDoseSettings, defaultLevelSensorSettings, defaultMixerSettings, defaultDayTime, defaultPinAssignment, defaultNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSettings", function() { return defaultSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProgram", function() { return defaultProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCompoteDaily", function() { return defaultCompoteDaily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCompote", function() { return defaultCompote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSchedule", function() { return defaultSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTimer", function() { return defaultTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPumpSettings", function() { return defaultPumpSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDoseSettings", function() { return defaultDoseSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLevelSensorSettings", function() { return defaultLevelSensorSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMixerSettings", function() { return defaultMixerSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDayTime", function() { return defaultDayTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPinAssignment", function() { return defaultPinAssignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultNames", function() { return defaultNames; });
/* harmony import */ var _device_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-config */ "saMG");
/* harmony import */ var _date_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-time */ "RcPo");


function defaultSettings() {
    return {
        program: new Array(_device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].programCount)
            .fill(0)
            .map(function () { return defaultProgram(); }),
        compote: new Array(_device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].compoteCount)
            .fill(0)
            .map(function () { return defaultCompote(); }),
        schedule: new Array(_device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].scheduleCount)
            .fill(0)
            .map(function () { return defaultSchedule(); }),
        timer: new Array(_device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].timerCount)
            .fill(0)
            .map(function () { return defaultTimer(); }),
        pump: new Array(_device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].pumpCount)
            .fill(0)
            .map(function () { return defaultPumpSettings(); }),
        mixer: new Array(_device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].mixerCount)
            .fill(0)
            .map(function () { return defaultMixerSettings(); }),
        dose: new Array(_device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].doseCount)
            .fill(0)
            .map(function () { return defaultDoseSettings(); }),
        levelSensor: new Array(_device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].doseCount)
            .fill(0)
            .map(function () { return defaultLevelSensorSettings(); }),
    };
}
function defaultProgram() {
    return {
        valves: new Array(Math.ceil(_device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].valveCount / 8)).fill(0),
        compote: 0,
        start: Object(_date_time__WEBPACK_IMPORTED_MODULE_1__["dateToDateDay"])(new Date()),
    };
}
function defaultCompoteDaily() {
    return {
        days: 0,
        schedule: 0,
        volume: 0,
        washVolume: 0,
        dose: new Array(_device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].doseCount).fill(0),
    };
}
function defaultCompote() {
    return {
        daily: new Array(_device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].compoteDailyCount).fill(0).map(function () { return defaultCompoteDaily(); }),
    };
}
function defaultSchedule() {
    return {
        enable: 0,
        deviceId: 0,
        startTime: defaultDayTime(),
        endTime: defaultDayTime(),
    };
}
function defaultTimer() {
    return {
        enable: 0,
        program: 0,
        weekDays: 0,
        time: defaultDayTime(),
    };
}
function defaultPumpSettings() {
    return {
        minFlow: 100,
        startingTime: 3000,
        pwmFlow: 0,
        pwm: 0,
        rate: 5880,
    };
}
function defaultDoseSettings() {
    return {
        rate: 0,
        seconds: 0,
        pwmSensor: 0,
        pwm: 0,
    };
}
function defaultLevelSensorSettings() {
    return {
        beepSeconds: 1,
    };
}
function defaultMixerSettings() {
    return {
        seconds: 180,
        washSeconds: 180,
        pwmSensor: 0,
        pwm: 0,
    };
}
function defaultDayTime() {
    return {
        hour: 0,
        minute: 0,
        second: 0,
    };
}
function defaultPinAssignment() {
    return {
        pump: [],
        flowSensor: [],
        levelSensor: [],
        mixer: [],
        dose: [],
        doseMixer: [],
        valve: [],
        rtc: [],
        display: [],
        button: [],
    };
}
function defaultNames() {
    return {
        program: new Array(_device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].programCount).fill(''),
        compote: new Array(_device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].compoteCount).fill(''),
        schedule: new Array(_device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].scheduleCount).fill(''),
        timer: new Array(_device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].timerCount).fill(''),
        pump: ['In', 'Out'],
        mixer: ['Compote', 'Wash'],
        dose: ['Grow', 'Bloom', '', ''],
        levelSensor: ['Min', 'Max'],
    };
}


/***/ }),

/***/ "nde0":
/*!************************************************************************!*\
  !*** ./src/app/components/access-control/camshot/camshot.component.ts ***!
  \************************************************************************/
/*! exports provided: CamshotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamshotComponent", function() { return CamshotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_camshot_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./camshot.component.html */ "rl1S");
/* harmony import */ var _camshot_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camshot.component.scss */ "dc4k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_storage_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/storage/db.service */ "iwvj");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _camshot_slider_camshot_slider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../camshot-slider/camshot-slider.service */ "+tiT");








var CamshotComponent = /** @class */ (function () {
    function CamshotComponent(db, cd, camshotSlider) {
        var _this = this;
        this.camshotSlider = camshotSlider;
        this.keySubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.keySubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (key) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(db.getAccessControlCamshot(key))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null)); }))
            .subscribe(function (camshot) {
            _this.camshot = camshot;
            cd.markForCheck();
        });
    }
    Object.defineProperty(CamshotComponent.prototype, "key", {
        get: function () {
            return this.keySubject.value;
        },
        set: function (value) {
            this.keySubject.next(value);
        },
        enumerable: false,
        configurable: true
    });
    CamshotComponent.prototype.ngOnInit = function () {
    };
    CamshotComponent.prototype.onClick = function () {
        this.camshotSlider.show(this.key);
    };
    CamshotComponent.ctorParameters = function () { return [
        { type: _services_storage_db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _camshot_slider_camshot_slider_service__WEBPACK_IMPORTED_MODULE_7__["CamshotSliderService"] }
    ]; };
    CamshotComponent.propDecorators = {
        key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    CamshotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-camshot',
            template: _raw_loader_camshot_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_camshot_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_storage_db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
            _camshot_slider_camshot_slider_service__WEBPACK_IMPORTED_MODULE_7__["CamshotSliderService"]])
    ], CamshotComponent);
    return CamshotComponent;
}());



/***/ }),

/***/ "o94p":
/*!*******************************************************************************!*\
  !*** ./src/app/components/settings/program-list/program/program.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramComponent", function() { return ProgramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_program_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./program.component.html */ "9tB1");
/* harmony import */ var _program_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./program.component.scss */ "kpDB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_device_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../model/device-config */ "saMG");
/* harmony import */ var _model_date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../model/date-time */ "RcPo");






var ProgramComponent = /** @class */ (function () {
    function ProgramComponent() {
        this.programChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nameChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ProgramComponent.prototype.ngOnInit = function () {
    };
    ProgramComponent.prototype.onChange = function (changes) {
        this.programChange.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.program), changes));
    };
    ProgramComponent.prototype.onChangeDate = function (date) {
        this.programChange.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.program), { start: Object(_model_date_time__WEBPACK_IMPORTED_MODULE_5__["dateToDateDay"])(date) }));
    };
    ProgramComponent.prototype.onChangeValves = function (changes) {
        var valves = new Array(Math.ceil(_model_device_config__WEBPACK_IMPORTED_MODULE_4__["deviceConfig"].valveCount / 8)).fill(0);
        for (var _i = 0, changes_1 = changes; _i < changes_1.length; _i++) {
            var pin = changes_1[_i];
            var offset = pin - 1;
            var index = Math.trunc(offset / 8);
            // tslint:disable-next-line:no-bitwise
            valves[index] |= 1 << (offset % 8);
        }
        this.programChange.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.program), { valves: valves }));
    };
    ProgramComponent.prototype.onNameChange = function (name) {
        this.nameChange.next(name);
    };
    ProgramComponent.ctorParameters = function () { return []; };
    ProgramComponent.propDecorators = {
        program: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        programChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        nameChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        compotes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        valves: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    ProgramComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-program',
            template: _raw_loader_program_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_program_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProgramComponent);
    return ProgramComponent;
}());



/***/ }),

/***/ "oFdz":
/*!**********************************************************************************!*\
  !*** ./src/app/components/settings/schedule-list/schedule/schedule.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_schedule_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./schedule.component.html */ "ILw6");
/* harmony import */ var _schedule_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.component.scss */ "CaHV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent() {
        this.scheduleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nameChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ScheduleComponent.prototype.ngOnInit = function () {
    };
    ScheduleComponent.prototype.onChange = function (changes) {
        this.scheduleChange.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.schedule), changes));
    };
    ScheduleComponent.prototype.onNameChange = function (name) {
        this.nameChange.next(name);
    };
    ScheduleComponent.ctorParameters = function () { return []; };
    ScheduleComponent.propDecorators = {
        schedule: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        scheduleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        nameChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    ScheduleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-schedule',
            template: _raw_loader_schedule_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_schedule_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "oIp7":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/choose-dialog/choose-dialog.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Select index number</h1>\n<mat-dialog-content class=\"pt-2\">\n  <mat-radio-group [(ngModel)]=\"value\">\n    <mat-radio-button *ngFor=\"let option of options\" [value]=\"option.value\" class=\"mr-3\">\n      {{ option.title }}\n    </mat-radio-button>\n  </mat-radio-group>\n</mat-dialog-content>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button (click)=\"onSelect()\" cdkFocusInitial color=\"primary\" mat-button>Select</button>\n</div>\n");

/***/ }),

/***/ "oexy":
/*!*******************************************************!*\
  !*** ./src/app/store/monitor/monitor-store.module.ts ***!
  \*******************************************************/
/*! exports provided: MonitorStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorStoreModule", function() { return MonitorStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _monitor_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monitor.reducer */ "iET3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _monitor_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./monitor.effects */ "4/X3");






var MonitorStoreModule = /** @class */ (function () {
    function MonitorStoreModule() {
    }
    MonitorStoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            exports: [],
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('monitor', _monitor_reducer__WEBPACK_IMPORTED_MODULE_3__["monitorReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_monitor_effects__WEBPACK_IMPORTED_MODULE_5__["MonitorEffects"]]),
            ],
        })
    ], MonitorStoreModule);
    return MonitorStoreModule;
}());



/***/ }),

/***/ "p0F5":
/*!**************************************************************************!*\
  !*** ./src/app/components/access-control/episode/episode.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-camshots {\n  width: 100%;\n  display: block;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXBpc29kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJlcGlzb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNhbXNob3RzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */");

/***/ }),

/***/ "p64W":
/*!***************************************************************************!*\
  !*** ./src/app/components/settings/mixer-list/mixer/mixer.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXhlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "pSR6":
/*!*****************************************!*\
  !*** ./src/app/model/device-io-meta.ts ***!
  \*****************************************/
/*! exports provided: structMeta, deviceRequestMeta, deviceResponseMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "structMeta", function() { return structMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceRequestMeta", function() { return deviceRequestMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceResponseMeta", function() { return deviceResponseMeta; });
/* harmony import */ var _device_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-config */ "saMG");

var structMeta = {
    empty: {
        fake: { type: 'uint8' },
    },
    dayTime: {
        hour: { type: 'uint8' },
        minute: { type: 'uint8' },
        second: { type: 'uint8' },
    },
    dateDay: {
        wday: { type: 'uint8' },
        day: { type: 'uint8' },
        month: { type: 'uint8' },
        year: { type: 'uint8' },
    },
    program: {
        valves: { type: 'uint8[]', length: Math.ceil(_device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].valveCount / 8) },
        compote: { type: 'uint8' },
        start: 'dateDay',
    },
    compoteDaily: {
        days: { type: 'uint8' },
        schedule: { type: 'uint8' },
        volume: { type: 'uint16' },
        washVolume: { type: 'uint16' },
        dose: {
            type: 'uint16[]',
            length: _device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].doseCount,
        },
    },
    compote: {
        daily: {
            type: 'list',
            length: _device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].compoteDailyCount,
            itemMeta: 'compoteDaily',
        },
    },
    schedule: {
        enable: { type: 'uint8' },
        deviceId: { type: 'uint8' },
        startTime: 'dayTime',
        endTime: 'dayTime',
    },
    timer: {
        enable: { type: 'uint8' },
        program: { type: 'uint8' },
        weekDays: { type: 'uint8' },
        time: 'dayTime',
    },
    pump: {
        minFlow: { type: 'uint16' },
        startingTime: { type: 'uint16' },
        pwmFlow: { type: 'uint16' },
        pwm: { type: 'uint8' },
        rate: { type: 'uint16' },
    },
    levelSensor: {
        beepSeconds: { type: 'uint8' },
    },
    mixer: {
        seconds: { type: 'uint16' },
        washSeconds: { type: 'uint16' },
        pwmSensor: { type: 'uint16' },
        pwm: { type: 'uint8' },
    },
    dose: {
        rate: { type: 'uint32' },
        seconds: { type: 'uint16' },
        pwmSensor: { type: 'uint16' },
        pwm: { type: 'uint8' },
    },
    dateTime: {
        second: { type: 'uint8' },
        minute: { type: 'uint8' },
        hour: { type: 'uint8' },
        wday: { type: 'uint8' },
        day: { type: 'uint8' },
        month: { type: 'uint8' },
        year: { type: 'uint8' },
    },
    deviceStatus: {
        state: { type: 'uint8' },
        cmdState: { type: 'uint8' },
        valve: { type: 'uint8' },
        flow: { type: 'uint16' },
        volume: { type: 'uint16' },
        totalVolume: { type: 'uint16' },
        mix: { type: 'uint16' },
    },
    settings: {
        program: {
            type: 'list',
            length: _device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].programCount,
            itemMeta: 'program',
        },
        compote: {
            type: 'list',
            length: _device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].compoteCount,
            itemMeta: 'compote',
        },
        schedule: {
            type: 'list',
            length: _device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].scheduleCount,
            itemMeta: 'schedule',
        },
        timer: {
            type: 'list',
            length: _device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].timerCount,
            itemMeta: 'timer',
        },
        pump: {
            type: 'list',
            length: _device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].pumpCount,
            itemMeta: 'pump',
        },
        levelSensor: {
            type: 'list',
            length: _device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].levelSensorCount,
            itemMeta: 'levelSensor',
        },
        mixer: {
            type: 'list',
            length: _device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].mixerCount,
            itemMeta: 'mixer',
        },
        dose: {
            type: 'list',
            length: _device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].doseCount,
            itemMeta: 'dose',
        },
    },
    pinAssignment: {
        pump: {
            type: 'uint8[]',
            length: _device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].pumpCount,
        },
        flowSensor: {
            type: 'uint8[]',
            length: _device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].pumpCount,
        },
        levelSensor: {
            type: 'uint8[]',
            length: _device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].levelSensorCount,
        },
        mixer: {
            type: 'uint8[]',
            length: _device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].mixerCount,
        },
        dose: {
            type: 'uint8[]',
            length: _device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].doseCount,
        },
        doseMixer: {
            type: 'uint8[]',
            length: _device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].doseCount,
        },
        valve: {
            type: 'uint8[]',
            length: _device_config__WEBPACK_IMPORTED_MODULE_0__["deviceConfig"].valveCount,
        },
    },
};
var deviceRequestMeta = {
    fertigate: {
        programId: { type: 'uint8' },
    },
    irrigate: {
        programId: { type: 'uint8' },
    },
    wash: {
        programId: { type: 'uint8' },
    },
    pumpIn: {
        programId: { type: 'uint8' },
    },
    compote: {
        programId: { type: 'uint8' },
    },
    washCompote: {
        programId: { type: 'uint8' },
    },
    mix: {
        mixerId: { type: 'uint8' },
    },
    mixDose: {
        mixerId: { type: 'uint8' },
    },
    dose: {
        programId: { type: 'uint8' },
        doseId: { type: 'uint8' },
    },
    getProgram: {
        index: { type: 'uint8' },
    },
    setProgram: {
        index: { type: 'uint8' },
        value: 'program',
    },
    getCompoteDaily: {
        index: { type: 'uint8' },
        dailyIndex: { type: 'uint8' },
    },
    setCompoteDaily: {
        index: { type: 'uint8' },
        dailyIndex: { type: 'uint8' },
        value: 'compoteDaily',
    },
    getSchedule: {
        index: { type: 'uint8' },
    },
    setSchedule: {
        index: { type: 'uint8' },
        value: 'schedule',
    },
    getTimer: {
        index: { type: 'uint8' },
    },
    setTimer: {
        index: { type: 'uint8' },
        value: 'timer',
    },
    getPump: {
        index: { type: 'uint8' },
    },
    setPump: {
        index: { type: 'uint8' },
        value: 'pump',
    },
    getMixer: {
        index: { type: 'uint8' },
    },
    setMixer: {
        index: { type: 'uint8' },
        value: 'mixer',
    },
    getDose: {
        index: { type: 'uint8' },
    },
    setDose: {
        index: { type: 'uint8' },
        value: 'dose',
    },
    getPinPump: {
        index: { type: 'uint8' },
    },
    setPinPump: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    getPinFlowSensor: {
        index: { type: 'uint8' },
    },
    setPinFlowSensor: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    getPinLevelSensor: {
        index: { type: 'uint8' },
    },
    setPinLevelSensor: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    getPinMixer: {
        index: { type: 'uint8' },
    },
    setPinMixer: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    getPinDose: {
        index: { type: 'uint8' },
    },
    setPinDose: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    getPinDoseMixer: {
        index: { type: 'uint8' },
    },
    setPinDoseMixer: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    getPinValve: {
        index: { type: 'uint8' },
    },
    setPinValve: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    getTime: 'empty',
    setTime: 'dateTime',
    getTemp: 'empty',
    getStatus: 'empty',
    getStatePump: {
        index: { type: 'uint8' },
    },
    setStatePump: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    getStateValve: {
        index: { type: 'uint8' },
    },
    setStateValve: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    getStateMixer: {
        index: { type: 'uint8' },
    },
    setStateMixer: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    getStateDose: {
        index: { type: 'uint8' },
    },
    setStateDose: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    getStateDoseMixer: {
        index: { type: 'uint8' },
    },
    setStateDoseMixer: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    resetError: {
        fake: { type: 'uint8' },
    },
};
var deviceResponseMeta = {
    commandSuccess: {
        code: { type: 'uint8' },
    },
    log: {
        code: { type: 'uint8' },
    },
    status: 'deviceStatus',
    error: {
        code: { type: 'uint8' },
    },
    program: {
        index: { type: 'uint8' },
        value: 'program',
    },
    compoteDaily: {
        index: { type: 'uint8' },
        dailyIndex: { type: 'uint8' },
        value: 'compoteDaily',
    },
    schedule: {
        index: { type: 'uint8' },
        value: 'schedule',
    },
    timer: {
        index: { type: 'uint8' },
        value: 'timer',
    },
    pump: {
        index: { type: 'uint8' },
        value: 'pump',
    },
    mixer: {
        index: { type: 'uint8' },
        value: 'mixer',
    },
    dose: {
        index: { type: 'uint8' },
        value: 'dose',
    },
    pinPump: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    pinFlowSensor: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    pinLevelSensor: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    pinMixer: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    pinDose: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    pinDoseMixer: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    pinValve: {
        index: { type: 'uint8' },
        value: { type: 'uint8' },
    },
    time: 'dateTime',
    temp: {
        value: { type: 'uint16' },
    },
    statePump: {
        value: { type: 'uint8' },
    },
    stateValve: {
        value: { type: 'uint8' },
    },
    stateMixer: {
        value: { type: 'uint8' },
    },
    stateDose: {
        value: { type: 'uint8' },
    },
    stateDoseMixer: {
        value: { type: 'uint8' },
    },
};


/***/ }),

/***/ "pp5j":
/*!**************************************************!*\
  !*** ./src/app/store/connect/connect.reducer.ts ***!
  \**************************************************/
/*! exports provided: ConnectActionTypes, ActionConnectConnect, ActionConnectDisconnect, ActionConnectSetStatus, ActionConnectRequest, ActionConnectResponse, ActionConnectError, initialConnectState, selectorConnect, selectorConnectStatus, connectReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectActionTypes", function() { return ConnectActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionConnectConnect", function() { return ActionConnectConnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionConnectDisconnect", function() { return ActionConnectDisconnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionConnectSetStatus", function() { return ActionConnectSetStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionConnectRequest", function() { return ActionConnectRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionConnectResponse", function() { return ActionConnectResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionConnectError", function() { return ActionConnectError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialConnectState", function() { return initialConnectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorConnect", function() { return selectorConnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorConnectStatus", function() { return selectorConnectStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectReducer", function() { return connectReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _model_connect_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/connect-status */ "YzEn");


var ConnectActionTypes;
(function (ConnectActionTypes) {
    ConnectActionTypes["CONNECT"] = "[Connect] Connect";
    ConnectActionTypes["DISCONNECT"] = "[Connect] Disconnect";
    ConnectActionTypes["SET_STATUS"] = "[Connect] Set status";
    ConnectActionTypes["REQUEST"] = "[Connect] Request";
    ConnectActionTypes["RESPONSE"] = "[Connect] Response";
    ConnectActionTypes["ERROR"] = "[Connect] Error";
})(ConnectActionTypes || (ConnectActionTypes = {}));
var ActionConnectConnect = /** @class */ (function () {
    function ActionConnectConnect() {
        this.type = ConnectActionTypes.CONNECT;
    }
    return ActionConnectConnect;
}());

var ActionConnectDisconnect = /** @class */ (function () {
    function ActionConnectDisconnect() {
        this.type = ConnectActionTypes.DISCONNECT;
    }
    return ActionConnectDisconnect;
}());

var ActionConnectSetStatus = /** @class */ (function () {
    function ActionConnectSetStatus(payload) {
        this.payload = payload;
        this.type = ConnectActionTypes.SET_STATUS;
    }
    return ActionConnectSetStatus;
}());

var ActionConnectRequest = /** @class */ (function () {
    function ActionConnectRequest(payload) {
        this.payload = payload;
        this.type = ConnectActionTypes.REQUEST;
    }
    return ActionConnectRequest;
}());

var ActionConnectResponse = /** @class */ (function () {
    function ActionConnectResponse(payload) {
        this.payload = payload;
        this.type = ConnectActionTypes.RESPONSE;
    }
    return ActionConnectResponse;
}());

var ActionConnectError = /** @class */ (function () {
    function ActionConnectError(payload) {
        this.payload = payload;
        this.type = ConnectActionTypes.ERROR;
    }
    return ActionConnectError;
}());

var initialConnectState = {
    status: _model_connect_status__WEBPACK_IMPORTED_MODULE_1__["ConnectStatus"].DISCONNECTED,
};
var selectorConnect = function (state) { return state.connect; };
var selectorConnectStatus = function (state) { return state.connect.status; };
function connectReducer(state, action) {
    if (state === void 0) { state = initialConnectState; }
    switch (action.type) {
        case ConnectActionTypes.CONNECT:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { status: _model_connect_status__WEBPACK_IMPORTED_MODULE_1__["ConnectStatus"].CONNECTING });
        case ConnectActionTypes.DISCONNECT:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { status: _model_connect_status__WEBPACK_IMPORTED_MODULE_1__["ConnectStatus"].DISCONNECTING });
        case ConnectActionTypes.SET_STATUS:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { status: action.payload });
        case ConnectActionTypes.REQUEST:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
        case ConnectActionTypes.ERROR:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { status: _model_connect_status__WEBPACK_IMPORTED_MODULE_1__["ConnectStatus"].DISCONNECTED });
        default:
            return state;
    }
}


/***/ }),

/***/ "pvbj":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/access-control/access-control.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<cdk-virtual-scroll-viewport itemSize=\"120\" class=\"h-100 w-100\">\n  <app-episode *cdkVirtualFor=\"let log of log$ | async; trackBy: trackByKey\" [episode]=\"log\">\n  </app-episode>\n</cdk-virtual-scroll-viewport>\n");

/***/ }),

/***/ "qLIw":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/config/config.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-accordion *ngIf=\"config$ | async as config\">\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <mat-icon svgIcon=\"bluetooth\"></mat-icon>\n        &nbsp;Bluetooth\n      </mat-panel-title>\n      <mat-panel-description>\n        {{config.device?.name}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <button mat-button (click)=\"selectDevice()\">Select Device</button>\n  </mat-expansion-panel>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <mat-icon svgIcon=\"database\"></mat-icon>\n        &nbsp;Database\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <app-database-config\n      [sizes]=\"databaseSizes$ | async\"\n      [update]=\"updateDatabaseSizes$ | async\"\n      (clear)=\"clearDb($event)\"\n      (updateSizes)=\"updateDb()\"\n    ></app-database-config>\n  </mat-expansion-panel>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <mat-icon svgIcon=\"monitor\"></mat-icon>\n        &nbsp;Monitor\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <app-monitor-config\n      [config]=\"monitor$ | async\"\n      (configChange)=\"onChange({monitor: $event})\"\n    ></app-monitor-config>\n  </mat-expansion-panel>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <mat-icon svgIcon=\"webcam\"></mat-icon>\n        &nbsp;Access control\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <app-access-control-config\n      [accessControl]=\"accessControl$ | async\"\n      (accessControlChange)=\"onChange({accessControl: $event})\"\n    ></app-access-control-config>\n  </mat-expansion-panel>\n</mat-accordion>\n");

/***/ }),

/***/ "qqi4":
/*!************************************************!*\
  !*** ./src/app/store/config/config.effects.ts ***!
  \************************************************/
/*! exports provided: ConfigEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigEffects", function() { return ConfigEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _config_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.reducer */ "JAt8");
/* harmony import */ var _services_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/storage/local-storage.service */ "57QP");
/* harmony import */ var _services_storage_db_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/storage/db.service */ "iwvj");









var ConfigEffects = /** @class */ (function () {
    function ConfigEffects(actions$, store, storage, db) {
        this.actions$ = actions$;
        this.store = store;
        this.storage = storage;
        this.db = db;
    }
    ConfigEffects.prototype.init = function () {
        var _this = this;
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_config_reducer__WEBPACK_IMPORTED_MODULE_6__["ConfigActionTypes"].INIT))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _config_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConfigUpdate"](_this.storage.loadConfig())), _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_config_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorConfig"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (state) { return _this.storage.saveConfig(state); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () { return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"]; }))); }));
    };
    ConfigEffects.prototype.updateSize = function () {
        var _this = this;
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_config_reducer__WEBPACK_IMPORTED_MODULE_6__["ConfigActionTypes"].UPDATE_DATABASE_SIZES))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.db.getDatabaseSize()); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (sizes) { return new _config_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConfigSetDatabaseSizes"](sizes); }));
    };
    ConfigEffects.prototype.clear = function () {
        var _this = this;
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_config_reducer__WEBPACK_IMPORTED_MODULE_6__["ConfigActionTypes"].CLEAR_DATABASE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.db.clear(action.payload)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return action.payload; })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_config_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorDatabaseSizes"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var names = _a[0], sizes = _a[1];
            return new _config_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConfigSetDatabaseSizes"](sizes.map(function (s) {
                return names.includes(s.name) ? { name: s.name, size: 0, count: 0 } : s;
            }));
        }));
    };
    ConfigEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _services_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] },
        { type: _services_storage_db_service__WEBPACK_IMPORTED_MODULE_8__["DbService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ConfigEffects.prototype, "init", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ConfigEffects.prototype, "updateSize", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ConfigEffects.prototype, "clear", null);
    ConfigEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _services_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"],
            _services_storage_db_service__WEBPACK_IMPORTED_MODULE_8__["DbService"]])
    ], ConfigEffects);
    return ConfigEffects;
}());



/***/ }),

/***/ "qyO8":
/*!*************************************!*\
  !*** ./src/app/pipes/times.pipe.ts ***!
  \*************************************/
/*! exports provided: TimesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesPipe", function() { return TimesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var TimesPipe = /** @class */ (function () {
    function TimesPipe() {
    }
    TimesPipe.prototype.transform = function (value) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return _a = {},
            _a[Symbol.iterator] = function () {
                var i;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < value)) return [3 /*break*/, 4];
                            return [4 /*yield*/, i];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            },
            _a;
    };
    TimesPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'times',
            pure: true,
        })
    ], TimesPipe);
    return TimesPipe;
}());



/***/ }),

/***/ "r6rb":
/*!********************************************************************!*\
  !*** ./src/app/components/access-control/access-control.module.ts ***!
  \********************************************************************/
/*! exports provided: AccessControlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlModule", function() { return AccessControlModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _access_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-control.component */ "eZ0O");
/* harmony import */ var _access_control_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./access-control-routing.module */ "OLTt");
/* harmony import */ var _store_access_control_access_control_store_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/access-control/access-control-store.module */ "fp/1");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _episode_episode_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./episode/episode.module */ "lAHu");








var AccessControlModule = /** @class */ (function () {
    function AccessControlModule() {
    }
    AccessControlModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _access_control_component__WEBPACK_IMPORTED_MODULE_3__["AccessControlComponent"],
            ],
            exports: [
                _access_control_component__WEBPACK_IMPORTED_MODULE_3__["AccessControlComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
                _access_control_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccessControlRoutingModule"],
                _store_access_control_access_control_store_module__WEBPACK_IMPORTED_MODULE_5__["AccessControlStoreModule"],
                _episode_episode_module__WEBPACK_IMPORTED_MODULE_7__["EpisodeModule"],
            ],
        })
    ], AccessControlModule);
    return AccessControlModule;
}());



/***/ }),

/***/ "rDUR":
/*!*********************************************************************************!*\
  !*** ./src/app/components/settings/compote-list/compote/compote.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb3RlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "rIPO":
/*!*************************************************!*\
  !*** ./src/app/components/dev/dev.component.ts ***!
  \*************************************************/
/*! exports provided: DevComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevComponent", function() { return DevComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dev_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dev.component.html */ "RabY");
/* harmony import */ var _dev_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dev.component.scss */ "XdS8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/device-request-type */ "f5g5");
/* harmony import */ var _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/connect/connect.reducer */ "pp5j");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_connect_connect_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/connect/connect.service */ "EEFU");
/* harmony import */ var _model_default_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/default-settings */ "n3qP");
/* harmony import */ var _model_device_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/device-config */ "saMG");
/* harmony import */ var _shared_select_index_select_index_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/select-index/select-index.service */ "CycX");
/* harmony import */ var _device_simulate_sevice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./device-simulate.sevice */ "BBQf");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _platform_browser_serial_browser_serial_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../platform/browser/serial/browser-serial.service */ "N1LG");
/* harmony import */ var _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store/settings/settings.reducer */ "inRq");
















var DevComponent = /** @class */ (function () {
    function DevComponent(store, connectBt, selectIndexService, deviceSimulateService, serialService) {
        this.store = store;
        this.connectBt = connectBt;
        this.selectIndexService = selectIndexService;
        this.deviceSimulateService = deviceSimulateService;
        this.serialService = serialService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    DevComponent.prototype.ngOnInit = function () {
    };
    DevComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
    };
    DevComponent.prototype.requestStatus = function () {
        this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectRequest"]({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].getStatus, payload: { fake: 0 } }));
    };
    DevComponent.prototype.discover = function () {
        this.connectBt.discover({ discover: true });
    };
    DevComponent.prototype.compote = function () {
        this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectRequest"]({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].compote, payload: { programId: 0 } }));
    };
    DevComponent.prototype.mixer = function () {
        this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectRequest"]({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].mix, payload: { mixerId: 0 } }));
    };
    DevComponent.prototype.getProgram = function () {
        var _this = this;
        this.selectIndexService.select({ count: _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].programCount, title: 'Select program' })
            .subscribe(function (index) {
            if (typeof index === 'undefined') {
                return;
            }
            var raw = _this.connectBt.requestSerializer
                .serialize({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].getProgram, payload: { index: index } });
            // console.log(raw);
            _this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectRequest"]({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].getProgram, payload: { index: index } }));
        });
    };
    DevComponent.prototype.setProgram = function () {
        var _this = this;
        this.selectIndexService.select({ count: _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].programCount, title: 'Select program' })
            .subscribe(function (index) {
            if (typeof index === 'undefined') {
                return;
            }
            _this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectRequest"]({
                type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].setProgram,
                payload: { index: index, value: Object(_model_default_settings__WEBPACK_IMPORTED_MODULE_9__["defaultProgram"])(), },
            }));
        });
    };
    DevComponent.prototype.getCompote = function () {
        var _this = this;
        this.selectIndexService.select({ count: _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].compoteCount, title: 'Select compote' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["withLatestFrom"])(this.selectIndexService.select({ count: _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].compoteDailyCount, title: 'Select compote daily' })))
            .subscribe(function (_a) {
            var index = _a[0], dailyIndex = _a[1];
            if (typeof index === 'undefined' || typeof dailyIndex === 'undefined') {
                return;
            }
            _this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectRequest"]({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].getCompoteDaily, payload: { index: index, dailyIndex: dailyIndex } }));
        });
    };
    DevComponent.prototype.setCompote = function () {
        var _this = this;
        this.selectIndexService.select({ count: _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].compoteCount, title: 'Select compote' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["withLatestFrom"])(this.selectIndexService.select({ count: _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].compoteDailyCount, title: 'Select compote daily' })))
            .subscribe(function (_a) {
            var index = _a[0], dailyIndex = _a[1];
            if (typeof index === 'undefined' || typeof dailyIndex === 'undefined') {
                return;
            }
            _this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectRequest"]({
                type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].setCompoteDaily,
                payload: { index: index, dailyIndex: dailyIndex, value: Object(_model_default_settings__WEBPACK_IMPORTED_MODULE_9__["defaultCompoteDaily"])() },
            }));
        });
    };
    DevComponent.prototype.getTimer = function () {
        var _this = this;
        this.selectIndexService.select({ count: _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].timerCount, title: 'Select timer' })
            .subscribe(function (index) {
            if (typeof index === 'undefined') {
                return;
            }
            _this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectRequest"]({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].getTimer, payload: { index: index } }));
        });
    };
    DevComponent.prototype.setTimer = function () {
        var _this = this;
        this.selectIndexService.select({ count: _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].timerCount, title: 'Select timer' })
            .subscribe(function (index) {
            if (typeof index === 'undefined') {
                return;
            }
            _this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectRequest"]({
                type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].setTimer,
                payload: { index: index, value: Object(_model_default_settings__WEBPACK_IMPORTED_MODULE_9__["defaultTimer"])() },
            }));
        });
    };
    DevComponent.prototype.getSchedule = function () {
        var _this = this;
        this.selectIndexService.select({ count: _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].scheduleCount, title: 'Select schedule' })
            .subscribe(function (index) {
            if (typeof index === 'undefined') {
                return;
            }
            _this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectRequest"]({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].getSchedule, payload: { index: index } }));
        });
    };
    DevComponent.prototype.setSchedule = function () {
        var _this = this;
        this.selectIndexService.select({ count: _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].scheduleCount, title: 'Select schedule' })
            .subscribe(function (index) {
            if (typeof index === 'undefined') {
                return;
            }
            _this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectRequest"]({
                type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].setSchedule,
                payload: { index: index, value: Object(_model_default_settings__WEBPACK_IMPORTED_MODULE_9__["defaultSchedule"])(), }
            }));
        });
    };
    DevComponent.prototype.simulate = function () {
        this.deviceSimulateService.enable(!this.deviceSimulateService.enabled);
    };
    DevComponent.prototype.serialDiscover = function () {
        this.serialService.discover();
    };
    DevComponent.prototype.serialConnect = function () {
        this.serialService.connect(null);
    };
    DevComponent.prototype.syncSettings = function () {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_15__["ActionSettingsSync"]());
    };
    DevComponent.prototype.resetError = function () {
        this.store.dispatch(new _store_connect_connect_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionConnectRequest"]({ type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_5__["DeviceRequestType"].resetError, payload: { fake: 0 } }));
    };
    DevComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _services_connect_connect_service__WEBPACK_IMPORTED_MODULE_8__["ConnectService"] },
        { type: _shared_select_index_select_index_service__WEBPACK_IMPORTED_MODULE_11__["SelectIndexService"] },
        { type: _device_simulate_sevice__WEBPACK_IMPORTED_MODULE_12__["DeviceSimulateService"] },
        { type: _platform_browser_serial_browser_serial_service__WEBPACK_IMPORTED_MODULE_14__["BrowserSerialService"] }
    ]; };
    DevComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dev',
            template: _raw_loader_dev_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_dev_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _services_connect_connect_service__WEBPACK_IMPORTED_MODULE_8__["ConnectService"],
            _shared_select_index_select_index_service__WEBPACK_IMPORTED_MODULE_11__["SelectIndexService"],
            _device_simulate_sevice__WEBPACK_IMPORTED_MODULE_12__["DeviceSimulateService"],
            _platform_browser_serial_browser_serial_service__WEBPACK_IMPORTED_MODULE_14__["BrowserSerialService"]])
    ], DevComponent);
    return DevComponent;
}());



/***/ }),

/***/ "rIn5":
/*!******************************************************************************!*\
  !*** ./src/app/components/settings/schedule-list/schedule-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: ScheduleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleListComponent", function() { return ScheduleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_schedule_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./schedule-list.component.html */ "PMQD");
/* harmony import */ var _schedule_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-list.component.scss */ "GccI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/settings/settings.reducer */ "inRq");






var ScheduleListComponent = /** @class */ (function () {
    function ScheduleListComponent(store) {
        this.store = store;
        this.schedules$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorSchedules"]));
        this.names$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(Object(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorNames"])('schedule')));
    }
    ScheduleListComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsLoadSchedule"]());
    };
    ScheduleListComponent.prototype.onNameChange = function (index, value) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsChangeName"]({ key: 'schedule', index: index, value: value }));
    };
    ScheduleListComponent.prototype.onChange = function (index, value) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsChangeSchedule"]({ index: index, value: value }));
    };
    ScheduleListComponent.prototype.onRemove = function (index) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsRemoveSchedule"](index));
    };
    ScheduleListComponent.prototype.trackByIndex = function (index, item) {
        return index;
    };
    ScheduleListComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    ScheduleListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-schedule-list',
            template: _raw_loader_schedule_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_schedule_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], ScheduleListComponent);
    return ScheduleListComponent;
}());



/***/ }),

/***/ "rVOb":
/*!*******************************************************************!*\
  !*** ./src/app/components/log/log-filter/log-filter.component.ts ***!
  \*******************************************************************/
/*! exports provided: LogFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogFilterComponent", function() { return LogFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_log_filter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./log-filter.component.html */ "9pTV");
/* harmony import */ var _log_filter_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log-filter.component.scss */ "HByw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_log_log_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/log/log.reducer */ "ubYs");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");








var LogFilterComponent = /** @class */ (function () {
    function LogFilterComponent(store, dialogRef) {
        var _this = this;
        this.store = store;
        this.dialogRef = dialogRef;
        this.filter$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_log_log_reducer__WEBPACK_IMPORTED_MODULE_4__["selectorLogFilter"]));
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_log_log_reducer__WEBPACK_IMPORTED_MODULE_4__["selectorLogFilter"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (filter) { return _this.initialFilter = filter; });
    }
    LogFilterComponent.prototype.ngOnInit = function () {
    };
    LogFilterComponent.prototype.onSelect = function (line) {
        this.store.dispatch(new _store_log_log_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionLogToggleFilter"](line));
    };
    LogFilterComponent.prototype.onExpand = function (line) {
        this.store.dispatch(new _store_log_log_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionLogToggleExpandFilter"](line));
    };
    LogFilterComponent.prototype.onReset = function () {
        this.store.dispatch(new _store_log_log_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionLogResetFilter"]());
    };
    LogFilterComponent.prototype.onApply = function () {
        this.dialogRef.close();
    };
    LogFilterComponent.prototype.onCancel = function () {
        var _this = this;
        this.dialogRef.close();
        setTimeout(function () { return _this.store.dispatch(new _store_log_log_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionLogSetFilter"](_this.initialFilter)); });
    };
    LogFilterComponent.prototype.trackBy = function (index, item) {
        return index;
    };
    LogFilterComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] }
    ]; };
    LogFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-log-filter',
            template: _raw_loader_log_filter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_log_filter_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"]])
    ], LogFilterComponent);
    return LogFilterComponent;
}());



/***/ }),

/***/ "rl1S":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/access-control/camshot/camshot.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-column flex-nowrap\">\n  <ng-container *ngIf=\"camshot\">\n    <img [attr.src]=\"camshot.image\" width=\"64\" height=\"48\" class=\"flex-fill\"\n    (click)=\"onClick()\"/>\n  </ng-container>\n  <div>\n    {{key | date: 'HH:mm:ss'}}\n  </div>\n</div>\n");

/***/ }),

/***/ "s8Mk":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/calibrate/calibrate.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-nav-list>\n  <a mat-list-item *ngFor=\"let link of links\" [routerLink]=\"link.route\">\n    <mat-icon *ngIf=\"link.icon\" [svgIcon]=\"link.icon\"></mat-icon>\n    &nbsp;\n    {{link.title}}\n  </a>\n</mat-nav-list>\n");

/***/ }),

/***/ "sDqn":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/settings/compote-list/compote-daily/compote-daily.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CompoteDailyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompoteDailyComponent", function() { return CompoteDailyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_compote_daily_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./compote-daily.component.html */ "d8ya");
/* harmony import */ var _compote_daily_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compote-daily.component.scss */ "9Rc6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var CompoteDailyComponent = /** @class */ (function () {
    function CompoteDailyComponent() {
        this.compoteDailyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    CompoteDailyComponent.prototype.ngOnInit = function () {
    };
    CompoteDailyComponent.prototype.onChange = function (changes) {
        this.compoteDailyChange.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.compoteDaily), changes));
    };
    CompoteDailyComponent.prototype.onDoseChange = function (index, value) {
        var dose = this.compoteDaily.dose.slice(0);
        dose[index] = value;
        this.onChange({ dose: dose });
    };
    CompoteDailyComponent.prototype.trackByIndex = function (index, item) {
        return index;
    };
    CompoteDailyComponent.ctorParameters = function () { return []; };
    CompoteDailyComponent.propDecorators = {
        compoteDaily: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        compoteDailyChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        soils: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    CompoteDailyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-compote-daily',
            template: _raw_loader_compote_daily_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_compote_daily_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CompoteDailyComponent);
    return CompoteDailyComponent;
}());



/***/ }),

/***/ "sGxu":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/config/access-control-config/access-control-config.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AccessControlConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlConfigModule", function() { return AccessControlConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _access_control_config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-control-config.component */ "Q12L");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");





var AccessControlConfigModule = /** @class */ (function () {
    function AccessControlConfigModule() {
    }
    AccessControlConfigModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_access_control_config_component__WEBPACK_IMPORTED_MODULE_3__["AccessControlConfigComponent"]],
            exports: [_access_control_config_component__WEBPACK_IMPORTED_MODULE_3__["AccessControlConfigComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
            ],
        })
    ], AccessControlConfigModule);
    return AccessControlConfigModule;
}());



/***/ }),

/***/ "sITE":
/*!**********************************************!*\
  !*** ./src/app/platform/mock/mock.module.ts ***!
  \**********************************************/
/*! exports provided: AppMockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMockModule", function() { return AppMockModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mock_bluetooth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-bluetooth.service */ "uYj1");
/* harmony import */ var _device_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../device-connect */ "bxw3");





var AppMockModule = /** @class */ (function () {
    function AppMockModule() {
    }
    AppMockModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            providers: [{ provide: _device_connect__WEBPACK_IMPORTED_MODULE_4__["DEVICE_CONNECT"], useClass: _mock_bluetooth_service__WEBPACK_IMPORTED_MODULE_3__["MockBluetoothService"] }],
        })
    ], AppMockModule);
    return AppMockModule;
}());



/***/ }),

/***/ "saMG":
/*!****************************************!*\
  !*** ./src/app/model/device-config.ts ***!
  \****************************************/
/*! exports provided: deviceConfig, PumpType, FlowSensorType, LevelSensorType, ButtonType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceConfig", function() { return deviceConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PumpType", function() { return PumpType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowSensorType", function() { return FlowSensorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelSensorType", function() { return LevelSensorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return ButtonType; });
var deviceConfig = {
    programCount: 4,
    compoteCount: 2,
    compoteDailyCount: 14,
    scheduleCount: 4,
    timerCount: 8,
    devCount: 4,
    pumpCount: 2,
    flowSensorCount: 2,
    mixerCount: 1,
    doseCount: 4,
    doseMixerCount: 4,
    nameLength: 8,
    valveCount: 24,
    levelSensorCount: 2,
    rtcCount: 1,
    buttonCount: 0,
};
var PumpType;
(function (PumpType) {
    PumpType[PumpType["in"] = 0] = "in";
    PumpType[PumpType["out"] = 1] = "out";
})(PumpType || (PumpType = {}));
var FlowSensorType;
(function (FlowSensorType) {
    FlowSensorType[FlowSensorType["in"] = 0] = "in";
    FlowSensorType[FlowSensorType["out"] = 1] = "out";
})(FlowSensorType || (FlowSensorType = {}));
var LevelSensorType;
(function (LevelSensorType) {
    LevelSensorType[LevelSensorType["low"] = 0] = "low";
    LevelSensorType[LevelSensorType["high"] = 1] = "high";
})(LevelSensorType || (LevelSensorType = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["up"] = 0] = "up";
    ButtonType[ButtonType["down"] = 1] = "down";
    ButtonType[ButtonType["left"] = 2] = "left";
    ButtonType[ButtonType["right"] = 3] = "right";
})(ButtonType || (ButtonType = {}));


/***/ }),

/***/ "sfAH":
/*!****************************************************************************!*\
  !*** ./src/app/components/settings/program-list/program/program.module.ts ***!
  \****************************************************************************/
/*! exports provided: ProgramModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramModule", function() { return ProgramModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _program_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./program.component */ "o94p");
/* harmony import */ var _bits_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bits.pipe */ "c1Dp");
/* harmony import */ var _date_day_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date-day.pipe */ "Joy5");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");











var ProgramModule = /** @class */ (function () {
    function ProgramModule() {
    }
    ProgramModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_program_component__WEBPACK_IMPORTED_MODULE_3__["ProgramComponent"], _bits_pipe__WEBPACK_IMPORTED_MODULE_4__["BitsPipe"], _date_day_pipe__WEBPACK_IMPORTED_MODULE_5__["DateDayPipe"]],
            exports: [_program_component__WEBPACK_IMPORTED_MODULE_3__["ProgramComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
            ],
        })
    ], ProgramModule);
    return ProgramModule;
}());



/***/ }),

/***/ "tFt5":
/*!*************************************************!*\
  !*** ./src/app/platform/app-platform.module.ts ***!
  \*************************************************/
/*! exports provided: AppPlatformModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPlatformModule", function() { return AppPlatformModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _browser_browser_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browser/browser.module */ "H/f6");
/* harmony import */ var _android_android_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./android/android.module */ "Kewi");
/* harmony import */ var _mock_mock_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock/mock.module */ "sITE");






var AppPlatformModule = /** @class */ (function () {
    function AppPlatformModule() {
    }
    AppPlatformModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])((_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].platform === 'browser'
                ? [_browser_browser_module__WEBPACK_IMPORTED_MODULE_3__["AppBrowserModule"]]
                : _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].platform === 'android'
                    ? [_android_android_module__WEBPACK_IMPORTED_MODULE_4__["AndroidModule"]]
                    : [_mock_mock_module__WEBPACK_IMPORTED_MODULE_5__["AppMockModule"]])),
        })
    ], AppPlatformModule);
    return AppPlatformModule;
}());



/***/ }),

/***/ "tOz4":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/settings/pin-assignment/pin-select/pin-select.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaW4tc2VsZWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "uYj1":
/*!*********************************************************!*\
  !*** ./src/app/platform/mock/mock-bluetooth.service.ts ***!
  \*********************************************************/
/*! exports provided: MockBluetoothService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockBluetoothService", function() { return MockBluetoothService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



var MockBluetoothService = /** @class */ (function () {
    function MockBluetoothService() {
        this.responseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    Object.defineProperty(MockBluetoothService.prototype, "response$", {
        get: function () {
            return this.responseSubject.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Run the discovery process.
     *
     * @param options such as filters and optional services
     * @return  Emites the value of the requested service read from the device
     */
    MockBluetoothService.prototype.discover = function (options) {
        var devices = [
            {
                name: 'device1',
                type: 'ble',
                address: 'address1-xxxxxxxxxxxxxxxxxxxx',
                id: 'id1-xxxxxxxxxxxxxxxxxxxx',
                class: 1111,
            },
            {
                name: 'device2',
                type: 'ble',
                address: 'address2-xxxxxxxxxxxxxxxxxxxx',
                id: 'id2-xxxxxxxxxxxxxxxxxxxx',
                class: 2222,
            },
            {
                name: 'device3',
                type: 'ble',
                address: 'address1-xxxxxxxxxxxxxxxxxxxx',
                id: 'id1-xxxxxxxxxxxxxxxxxxxx',
                class: 1111,
            },
            {
                name: 'device4',
                type: 'ble',
                address: 'address2-xxxxxxxxxxxxxxxxxxxx',
                id: 'id2-xxxxxxxxxxxxxxxxxxxx',
                class: 2222,
            },
            {
                name: 'device5',
                type: 'ble',
                address: 'address1-xxxxxxxxxxxxxxxxxxxx',
                id: 'id1-xxxxxxxxxxxxxxxxxxxx',
                class: 1111,
            },
            {
                name: 'device6',
                type: 'ble',
                address: 'address2-xxxxxxxxxxxxxxxxxxxx',
                id: 'id2-xxxxxxxxxxxxxxxxxxxx',
                class: 2222,
            },
            {
                name: 'device7',
                type: 'ble',
                address: 'address2-xxxxxxxxxxxxxxxxxxxx',
                id: 'id2-xxxxxxxxxxxxxxxxxxxx',
                class: 2222,
            },
        ];
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(devices); }, 1000);
        });
    };
    MockBluetoothService.prototype.connect = function (device) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        setTimeout(resolve, 1000);
                    })];
            });
        });
    };
    MockBluetoothService.prototype.disconnect = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 1000);
        });
    };
    MockBluetoothService.prototype.send = function (data) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000);
        });
    };
    MockBluetoothService.ctorParameters = function () { return []; };
    MockBluetoothService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], MockBluetoothService);
    return MockBluetoothService;
}());



/***/ }),

/***/ "uafK":
/*!************************************************************************!*\
  !*** ./src/app/components/settings/pump-list/pump-list.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdW1wLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ubYs":
/*!******************************************!*\
  !*** ./src/app/store/log/log.reducer.ts ***!
  \******************************************/
/*! exports provided: LogActionTypes, ActionLogInit, ActionLogAdd, ActionLogResetFilter, ActionLogSetFilter, ActionLogToggleFilter, ActionLogToggleExpandFilter, LogItemType, initialLogState, selectorLog, selectorLogItems, selectorLogFilter, selectorLogHasFilter, selectorLogFilteredItems, logReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogActionTypes", function() { return LogActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionLogInit", function() { return ActionLogInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionLogAdd", function() { return ActionLogAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionLogResetFilter", function() { return ActionLogResetFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionLogSetFilter", function() { return ActionLogSetFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionLogToggleFilter", function() { return ActionLogToggleFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionLogToggleExpandFilter", function() { return ActionLogToggleExpandFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogItemType", function() { return LogItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialLogState", function() { return initialLogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorLog", function() { return selectorLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorLogItems", function() { return selectorLogItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorLogFilter", function() { return selectorLogFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorLogHasFilter", function() { return selectorLogHasFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorLogFilteredItems", function() { return selectorLogFilteredItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logReducer", function() { return logReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _model_device_request_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/device-request-type */ "f5g5");
/* harmony import */ var _model_device_response_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/device-response-type */ "8NFJ");
/* harmony import */ var _model_device_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/device-status */ "w219");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-config */ "K7hc");





var LogActionTypes;
(function (LogActionTypes) {
    LogActionTypes["INIT"] = "[Log] Init";
    LogActionTypes["ADD"] = "[Log] Add";
    LogActionTypes["RESET_FILTER"] = "[Log] Reset filter";
    LogActionTypes["SET_FILTER"] = "[Log] Set filter";
    LogActionTypes["TOGGLE_FILTER"] = "[Log] Toggle filter";
    LogActionTypes["TOGGLE_EXPAND_FILTER"] = "[Log] Toggle expand filter";
})(LogActionTypes || (LogActionTypes = {}));
var ActionLogInit = /** @class */ (function () {
    function ActionLogInit() {
        this.type = LogActionTypes.INIT;
    }
    return ActionLogInit;
}());

var ActionLogAdd = /** @class */ (function () {
    function ActionLogAdd(payload) {
        this.payload = payload;
        this.type = LogActionTypes.ADD;
    }
    return ActionLogAdd;
}());

var ActionLogResetFilter = /** @class */ (function () {
    function ActionLogResetFilter() {
        this.type = LogActionTypes.RESET_FILTER;
    }
    return ActionLogResetFilter;
}());

var ActionLogSetFilter = /** @class */ (function () {
    function ActionLogSetFilter(payload) {
        this.payload = payload;
        this.type = LogActionTypes.SET_FILTER;
    }
    return ActionLogSetFilter;
}());

var ActionLogToggleFilter = /** @class */ (function () {
    function ActionLogToggleFilter(payload) {
        this.payload = payload;
        this.type = LogActionTypes.TOGGLE_FILTER;
    }
    return ActionLogToggleFilter;
}());

var ActionLogToggleExpandFilter = /** @class */ (function () {
    function ActionLogToggleExpandFilter(payload) {
        this.payload = payload;
        this.type = LogActionTypes.TOGGLE_EXPAND_FILTER;
    }
    return ActionLogToggleExpandFilter;
}());

var LogItemType;
(function (LogItemType) {
    LogItemType[LogItemType["connect"] = 0] = "connect";
    LogItemType[LogItemType["disconnect"] = 1] = "disconnect";
    LogItemType[LogItemType["response"] = 2] = "response";
    LogItemType[LogItemType["request"] = 3] = "request";
    LogItemType[LogItemType["error"] = 4] = "error";
})(LogItemType || (LogItemType = {}));
var initialLogState = {
    items: [],
    filteredItems: [],
    filter: getInitialFilter(),
    hasFilter: false,
};
var selectorLog = function (state) { return state.log; };
var selectorLogItems = function (state) { return state.log.items; };
var selectorLogFilter = function (state) { return state.log.filter; };
var selectorLogHasFilter = function (state) { return state.log.hasFilter; };
var selectorLogFilteredItems = function (state) { return state.log.filteredItems; };
function logReducer(state, action) {
    if (state === void 0) { state = initialLogState; }
    switch (action.type) {
        case LogActionTypes.ADD:
            return addLog(state, action.payload);
        case LogActionTypes.RESET_FILTER:
            return resetFilter(state);
        case LogActionTypes.SET_FILTER:
            return setFilter(state, action.payload);
        case LogActionTypes.TOGGLE_FILTER:
            return toggleFilter(state, action.payload);
        case LogActionTypes.TOGGLE_EXPAND_FILTER:
            return toggleExpandFilter(state, action.payload);
        default:
            return state;
    }
}
function addLog(state, item) {
    var items = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([item], state.items);
    var filteredItems = isFiltered(item, state.filter) ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([item], state.filteredItems) : state.filteredItems;
    if (items.length > _app_config__WEBPACK_IMPORTED_MODULE_4__["appConfig"].logMaxLength) {
        var last = items.pop();
        if (last === filteredItems[filteredItems.length - 1]) {
            filteredItems.pop();
        }
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { items: items, filteredItems: filteredItems });
}
function resetFilter(state) {
    var filter = getInitialFilter();
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { filter: filter, hasFilter: false, filteredItems: getFilteredItems(state.items, filter) });
}
function setFilter(state, filter) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { filter: filter, hasFilter: hasFilter(filter), filteredItems: getFilteredItems(state.items, filter) });
}
function toggleFilter(state, filterRow) {
    var filter = state.filter.slice(0);
    var index = filter.findIndex(function (f) { return f === filterRow; });
    var selected = !filterRow.selected;
    var level = filterRow.level;
    filter[index] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, filterRow), { selected: selected });
    for (var i = index + 1; i < filter.length; i++) {
        var row = filter[i];
        if (row.level <= level) {
            break;
        }
        filter[i] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, row), { selected: selected });
    }
    if (level) {
        for (var i = index - 1; i >= 0 && level; i--) {
            var row = filter[i];
            if (row.level >= level) {
                continue;
            }
            var sel = filter[i + 1].selected;
            if (sel !== null) {
                for (var j = i + 2; j < filter.length; j++) {
                    if (filter[j].level < level) {
                        break;
                    }
                    if (sel !== filter[j].selected) {
                        sel = null;
                        break;
                    }
                }
            }
            if (row.selected !== sel) {
                filter[i] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, row), { selected: sel });
            }
            level--;
        }
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { filter: filter, hasFilter: hasFilter(filter), filteredItems: getFilteredItems(state.items, filter) });
}
function toggleExpandFilter(state, filterRow) {
    var filter = state.filter.slice(0);
    var index = filter.findIndex(function (f) { return f === filterRow; });
    var expanded = !filterRow.expanded;
    var level = filterRow.level + 1;
    filter[index] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, filterRow), { expanded: expanded });
    for (var i = index + 1; i < filter.length; i++) {
        var row = filter[i];
        if (row.level < level) {
            break;
        }
        filter[i] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, row), { visible: expanded, expanded: expanded });
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { filter: filter, hasFilter: hasFilter(filter), filteredItems: getFilteredItems(state.items, filter) });
}
function getFilteredItems(items, filter) {
    return items.filter(function (i) { return isFiltered(i, filter); });
}
function isFiltered(item, filter) {
    var row = filter.find(function (f) { return f.type === item.type && f.subType === item.subType; });
    return !row || row.selected;
}
function enumFilter(level, title, enumType, type) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
        {
            level: level,
            title: title,
            selected: true,
            expandable: true,
            expanded: true,
            visible: true,
            type: type,
        }
    ], Object.keys(enumType)
        .filter(function (key) { return isNaN(+key); })
        .map(function (key) { return ({
        level: level + 1,
        title: getFilterTitle(key),
        selected: true,
        expandable: false,
        expanded: true,
        visible: true,
        type: type,
        subType: enumType[key],
    }); }));
}
function getInitialFilter() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
        {
            level: 0,
            title: 'Bluetooth',
            selected: true,
            expandable: true,
            expanded: true,
            visible: true,
            type: LogItemType.connect,
        },
        {
            level: 1,
            title: 'Connect',
            selected: true,
            expandable: false,
            expanded: true,
            visible: true,
            type: LogItemType.connect,
        },
        {
            level: 1,
            title: 'Disconnect',
            selected: true,
            expandable: false,
            expanded: true,
            visible: true,
            type: LogItemType.disconnect,
        }
    ], enumFilter(1, 'Device Request', _model_device_request_type__WEBPACK_IMPORTED_MODULE_1__["DeviceRequestType"], LogItemType.request), enumFilter(1, 'Device Response', _model_device_response_type__WEBPACK_IMPORTED_MODULE_2__["DeviceResponseType"], LogItemType.response), enumFilter(0, 'Errors', _model_device_status__WEBPACK_IMPORTED_MODULE_3__["ErrorCode"], LogItemType.error));
}
function hasFilter(filter) {
    return !filter.every(function (f) { return f.selected; });
}
function getFilterTitle(str) {
    return (str.slice(0, 1).toUpperCase() + str.slice(1))
        .split(/(?=[A-Z])/)
        .join(' ');
}


/***/ }),

/***/ "uxi/":
/*!***************************************************************!*\
  !*** ./src/app/shared/select-index/select-index.component.ts ***!
  \***************************************************************/
/*! exports provided: SelectIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectIndexComponent", function() { return SelectIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_select_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./select-index.component.html */ "CHoB");
/* harmony import */ var _select_index_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-index.component.scss */ "VVwT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");





var SelectIndexComponent = /** @class */ (function () {
    function SelectIndexComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.count = data.count;
        this.index = 0;
    }
    SelectIndexComponent.prototype.ngOnInit = function () {
    };
    SelectIndexComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    SelectIndexComponent.prototype.onSelect = function () {
        this.dialogRef.close(this.index);
    };
    SelectIndexComponent.prototype.onChange = function (value) {
        this.index = value;
    };
    SelectIndexComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
    ]; };
    SelectIndexComponent.propDecorators = {
        count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    SelectIndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-select-index',
            template: _raw_loader_select_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_select_index_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], SelectIndexComponent);
    return SelectIndexComponent;
}());



/***/ }),

/***/ "v0NG":
/*!***********************************************************************************!*\
  !*** ./src/app/components/calibrate/calibrate-dose/calibrate-dose.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxpYnJhdGUtZG9zZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "v7oy":
/*!******************************************************!*\
  !*** ./src/app/components/dev/dev-routing.module.ts ***!
  \******************************************************/
/*! exports provided: DevRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRoutingModule", function() { return DevRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_dev_dev_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dev/dev.component */ "rIPO");




var routes = [
    {
        path: 'dev',
        component: _components_dev_dev_component__WEBPACK_IMPORTED_MODULE_3__["DevComponent"],
        data: {
            title: 'Development',
            actions: ['menu', 'bt', 'sync'],
        },
    },
];
var DevRoutingModule = /** @class */ (function () {
    function DevRoutingModule() {
    }
    DevRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DevRoutingModule);
    return DevRoutingModule;
}());



/***/ }),

/***/ "vFJ3":
/*!********************************************************************************!*\
  !*** ./src/app/components/config/monitor-config/monitor-config.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb25pdG9yLWNvbmZpZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "vQc7":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/mixer-list/mixer-list.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-accordion>\n  <mat-expansion-panel *ngFor=\"let mixer of mixers$ | async; let index = index; trackBy: trackByIndex\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        #{{index + 1}}\n      </mat-panel-title>\n      <mat-panel-description>\n        {{(names$ | async)[index]}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <ng-template matExpansionPanelContent>\n      <app-mixer\n        [mixer]=\"mixer\"\n        [name]=\"(names$ | async)[index]\"\n        (mixerChange)=\"onChange(index, $event)\"\n        (nameChange)=\"onNameChange(index, $event)\"\n      ></app-mixer>\n    </ng-template>\n  </mat-expansion-panel>\n</mat-accordion>\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "vZ4l":
/*!******************************************************************************!*\
  !*** ./src/app/components/config/monitor-config/monitor-config.component.ts ***!
  \******************************************************************************/
/*! exports provided: MonitorConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorConfigComponent", function() { return MonitorConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_monitor_config_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./monitor-config.component.html */ "Th/r");
/* harmony import */ var _monitor_config_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monitor-config.component.scss */ "vFJ3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var MonitorConfigComponent = /** @class */ (function () {
    function MonitorConfigComponent() {
        this.configChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    MonitorConfigComponent.prototype.ngOnInit = function () {
    };
    MonitorConfigComponent.prototype.onChange = function (changes) {
        this.configChange.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.config), changes));
    };
    MonitorConfigComponent.ctorParameters = function () { return []; };
    MonitorConfigComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        configChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    MonitorConfigComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-monitor-config',
            template: _raw_loader_monitor_config_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_monitor_config_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], MonitorConfigComponent);
    return MonitorConfigComponent;
}());



/***/ }),

/***/ "vrZN":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dev/access-control/dev-access-control.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DevAccessControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevAccessControlComponent", function() { return DevAccessControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dev_access_control_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dev-access-control.component.html */ "56Av");
/* harmony import */ var _dev_access_control_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dev-access-control.component.scss */ "GY9F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_access_control_access_control_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/access-control/access-control.service */ "g8o9");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







var DevAccessControlComponent = /** @class */ (function () {
    function DevAccessControlComponent(accessControlService) {
        this.accessControlService = accessControlService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    DevAccessControlComponent.prototype.ngOnInit = function () {
        this.accessControlService.frame$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe(function (frame) {
            cv.imshow('canvasInput', frame);
        });
        this.accessControlService.strategy.frame$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe(function (frame) {
            cv.imshow('canvasOutput', frame);
        });
    };
    DevAccessControlComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
    };
    DevAccessControlComponent.ctorParameters = function () { return [
        { type: _services_access_control_access_control_service__WEBPACK_IMPORTED_MODULE_4__["AccessControlService"] }
    ]; };
    DevAccessControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dev-access-control',
            template: _raw_loader_dev_access_control_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_dev_access_control_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_access_control_access_control_service__WEBPACK_IMPORTED_MODULE_4__["AccessControlService"]])
    ], DevAccessControlComponent);
    return DevAccessControlComponent;
}());



/***/ }),

/***/ "vwhI":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/config/select-bt-device/select-bt-device.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Select Bluetooth device</h1>\n<mat-dialog-content>\n  <mat-selection-list [compareWith]=\"compareWith\">\n    <ng-container *ngIf=\"devices; else loading\">\n      <ng-container *ngFor=\"let device of devices\">\n        <mat-list-option [value]=\"device\">\n          {{device.name}}\n          {{device.address}}\n          {{device.id}}\n          {{device.class}}\n        </mat-list-option>\n        <mat-divider></mat-divider>\n      </ng-container>\n    </ng-container>\n  </mat-selection-list>\n</mat-dialog-content>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onCancel()\" cdkFocusInitial>Cancel</button>\n  <button mat-button (click)=\"onSelect()\"\n    [disabled]=\"!selectionList?.selectedOptions.selected.length\">Select\n  </button>\n</div>\n<ng-template #loading>\n  <mat-spinner></mat-spinner>\n</ng-template>\n");

/***/ }),

/***/ "w219":
/*!****************************************!*\
  !*** ./src/app/model/device-status.ts ***!
  \****************************************/
/*! exports provided: DeviceState, FertigateState, ErrorCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceState", function() { return DeviceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FertigateState", function() { return FertigateState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return ErrorCode; });
var DeviceState;
(function (DeviceState) {
    DeviceState[DeviceState["idle"] = 0] = "idle";
    DeviceState[DeviceState["fertigate"] = 1] = "fertigate";
    DeviceState[DeviceState["pumpIn"] = 2] = "pumpIn";
    DeviceState[DeviceState["irrigate"] = 3] = "irrigate";
    DeviceState[DeviceState["wash"] = 4] = "wash";
    DeviceState[DeviceState["compote"] = 5] = "compote";
    DeviceState[DeviceState["washCompote"] = 6] = "washCompote";
    DeviceState[DeviceState["mixer"] = 7] = "mixer";
    DeviceState[DeviceState["dose"] = 8] = "dose";
    DeviceState[DeviceState["doseMixer"] = 9] = "doseMixer";
    DeviceState[DeviceState["error"] = 255] = "error";
})(DeviceState || (DeviceState = {}));
var FertigateState;
(function (FertigateState) {
    FertigateState[FertigateState["pumpIn"] = 0] = "pumpIn";
    FertigateState[FertigateState["mixDose"] = 1] = "mixDose";
    FertigateState[FertigateState["dose"] = 2] = "dose";
    FertigateState[FertigateState["mix"] = 3] = "mix";
    FertigateState[FertigateState["irrigate"] = 4] = "irrigate";
    FertigateState[FertigateState["irrigateFinish"] = 5] = "irrigateFinish";
    FertigateState[FertigateState["washPumpIn"] = 6] = "washPumpIn";
    FertigateState[FertigateState["washMix"] = 7] = "washMix";
    FertigateState[FertigateState["wash"] = 8] = "wash";
    FertigateState[FertigateState["done"] = 9] = "done";
})(FertigateState || (FertigateState = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["pumpIn"] = 1] = "pumpIn";
    ErrorCode[ErrorCode["dose"] = 2] = "dose";
    ErrorCode[ErrorCode["pumpOut"] = 3] = "pumpOut";
    ErrorCode[ErrorCode["pumpOutLast"] = 4] = "pumpOutLast";
    ErrorCode[ErrorCode["sensorOut"] = 5] = "sensorOut";
    ErrorCode[ErrorCode["io"] = 6] = "io";
    ErrorCode[ErrorCode["badCmdState"] = 7] = "badCmdState";
    ErrorCode[ErrorCode["lowWaterLevel"] = 8] = "lowWaterLevel";
    ErrorCode[ErrorCode["highWaterLevel"] = 9] = "highWaterLevel";
})(ErrorCode || (ErrorCode = {}));


/***/ }),

/***/ "w5PT":
/*!**************************************************************!*\
  !*** ./src/app/shared/choose-dialog/choose-dialog.module.ts ***!
  \**************************************************************/
/*! exports provided: ChooseDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseDialogModule", function() { return ChooseDialogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _choose_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choose-dialog.component */ "KbOC");
/* harmony import */ var _choose_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./choose-dialog.service */ "X6Ps");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











var ChooseDialogModule = /** @class */ (function () {
    function ChooseDialogModule() {
    }
    ChooseDialogModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_choose_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ChooseDialogComponent"]],
            entryComponents: [_choose_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ChooseDialogComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            ],
            providers: [_choose_dialog_service__WEBPACK_IMPORTED_MODULE_4__["ChooseDialogService"]],
        })
    ], ChooseDialogModule);
    return ChooseDialogModule;
}());



/***/ }),

/***/ "wE9O":
/*!****************************************************************************!*\
  !*** ./src/app/components/settings/compote-list/compote-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: CompoteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompoteListComponent", function() { return CompoteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_compote_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./compote-list.component.html */ "+Cda");
/* harmony import */ var _compote_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compote-list.component.scss */ "ehNA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/settings/settings.reducer */ "inRq");






var CompoteListComponent = /** @class */ (function () {
    function CompoteListComponent(store) {
        this.store = store;
        this.compotes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorCompotes"]));
        this.soils$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(Object(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorNames"])('dose')));
        this.names$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(Object(_store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["selectorNames"])('compote')));
    }
    CompoteListComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsLoadCompote"]());
    };
    CompoteListComponent.prototype.onNameChange = function (index, value) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsChangeName"]({ key: 'compote', index: index, value: value }));
    };
    CompoteListComponent.prototype.onChange = function (index, value) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsChangeCompote"]({ index: index, value: value }));
    };
    CompoteListComponent.prototype.onDailyChange = function (index, daily) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsChangeCompoteDaily"]({
            index: index,
            dailyIndex: daily.index, value: daily.value
        }));
    };
    CompoteListComponent.prototype.onRemove = function (index) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsRemoveCompote"](index));
    };
    CompoteListComponent.prototype.onAddDaily = function (index) {
        this.store.dispatch(new _store_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["ActionSettingsAddCompoteDaily"](index));
    };
    CompoteListComponent.prototype.trackByIndex = function (index, item) {
        return index;
    };
    CompoteListComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    CompoteListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-compote-list',
            template: _raw_loader_compote_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_compote_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], CompoteListComponent);
    return CompoteListComponent;
}());



/***/ }),

/***/ "x40G":
/*!***********************************************************************************!*\
  !*** ./src/app/components/access-control/camshot-slider/camshot-slider.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CamshotSliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamshotSliderModule", function() { return CamshotSliderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _camshot_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camshot-slider.component */ "55n1");
/* harmony import */ var _camshot_slider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./camshot-slider.service */ "+tiT");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








var CamshotSliderModule = /** @class */ (function () {
    function CamshotSliderModule() {
    }
    CamshotSliderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_camshot_slider_component__WEBPACK_IMPORTED_MODULE_3__["CamshotSliderComponent"]],
            entryComponents: [_camshot_slider_component__WEBPACK_IMPORTED_MODULE_3__["CamshotSliderComponent"]],
            providers: [_camshot_slider_service__WEBPACK_IMPORTED_MODULE_4__["CamshotSliderService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            ]
        })
    ], CamshotSliderModule);
    return CamshotSliderModule;
}());



/***/ }),

/***/ "xeJm":
/*!***************************************************************!*\
  !*** ./src/app/components/calibrate/calibrate.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxpYnJhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "xiRq":
/*!***************************************************************************!*\
  !*** ./src/app/components/settings/timer-list/timer/timer.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ykSb":
/*!*************************************************************************!*\
  !*** ./src/app/components/access-control/access-control.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-episode {\n  width: 100%;\n  height: 120px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhY2Nlc3MtY29udHJvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6ImFjY2Vzcy1jb250cm9sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWVwaXNvZGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "z1dt":
/*!****************************************************!*\
  !*** ./src/app/store/settings/settings.effects.ts ***!
  \****************************************************/
/*! exports provided: SettingsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsEffects", function() { return SettingsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.reducer */ "inRq");
/* harmony import */ var _services_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/storage/local-storage.service */ "57QP");
/* harmony import */ var _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/device-request-type */ "f5g5");
/* harmony import */ var _model_device_response_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/device-response-type */ "8NFJ");
/* harmony import */ var _model_device_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/device-config */ "saMG");
/* harmony import */ var _services_connect_connect_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/connect/connect.service */ "EEFU");
/* harmony import */ var _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../connect/connect.reducer */ "pp5j");













var SettingsEffects = /** @class */ (function () {
    function SettingsEffects(actions$, store, storage, connectBt) {
        this.actions$ = actions$;
        this.store = store;
        this.storage = storage;
        this.connectBt = connectBt;
    }
    SettingsEffects.prototype.init = function () {
        var _this = this;
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["SettingsActionTypes"].INIT))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _settings_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionSettingsUpdate"](_this.storage.loadSettings())), _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorSettings"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (state) { return _this.storage.saveSettings(state); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () { return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"]; }))); }));
    };
    SettingsEffects.prototype.sync = function () {
        var _this = this;
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["SettingsActionTypes"].SYNC))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorSettings"]))))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_a) {
            var action = _a[0], state = _a[1];
            return !state.sync;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var action = _a[0], state = _a[1];
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["concat"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([_this.syncItems(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorProgram"], _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getProgram, _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setProgram, _model_device_response_type__WEBPACK_IMPORTED_MODULE_9__["DeviceResponseType"].program, _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].programCount)], state.settings.compote.map(function (compote, id) {
                return _this.syncItems(Object(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorCompoteDaily"])(id), _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getCompoteDaily, _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setCompoteDaily, _model_device_response_type__WEBPACK_IMPORTED_MODULE_9__["DeviceResponseType"].compoteDaily, _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].compoteDailyCount, { id: id });
            }), [_this.syncItems(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorTimer"], _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getTimer, _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setTimer, _model_device_response_type__WEBPACK_IMPORTED_MODULE_9__["DeviceResponseType"].timer, _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].timerCount),
                _this.syncItems(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorSchedule"], _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getSchedule, _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setSchedule, _model_device_response_type__WEBPACK_IMPORTED_MODULE_9__["DeviceResponseType"].schedule, _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].scheduleCount),
                _this.syncItems(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorPump"], _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getPump, _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setPump, _model_device_response_type__WEBPACK_IMPORTED_MODULE_9__["DeviceResponseType"].pump, _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].pumpCount),
                _this.syncItems(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorMixer"], _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getMixer, _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setMixer, _model_device_response_type__WEBPACK_IMPORTED_MODULE_9__["DeviceResponseType"].mixer, _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].mixerCount),
                _this.syncItems(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorDose"], _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getDose, _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setDose, _model_device_response_type__WEBPACK_IMPORTED_MODULE_9__["DeviceResponseType"].dose, _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].doseCount),
                _this.syncItems(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorPinPump"], _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getPinPump, _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setPinPump, _model_device_response_type__WEBPACK_IMPORTED_MODULE_9__["DeviceResponseType"].pinPump, _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].pumpCount),
                _this.syncItems(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorPinFlowSensor"], _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getPinFlowSensor, _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setPinFlowSensor, _model_device_response_type__WEBPACK_IMPORTED_MODULE_9__["DeviceResponseType"].pinFlowSensor, _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].pumpCount),
                _this.syncItems(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorPinMixer"], _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getPinMixer, _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setPinMixer, _model_device_response_type__WEBPACK_IMPORTED_MODULE_9__["DeviceResponseType"].pinMixer, _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].mixerCount),
                _this.syncItems(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorPinDose"], _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getPinDose, _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setPinDose, _model_device_response_type__WEBPACK_IMPORTED_MODULE_9__["DeviceResponseType"].pinDose, _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].doseCount),
                _this.syncItems(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["selectorPinDoseMixer"], _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getPinDoseMixer, _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setPinDoseMixer, _model_device_response_type__WEBPACK_IMPORTED_MODULE_9__["DeviceResponseType"].pinDoseMixer, _model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].doseCount),
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _settings_reducer__WEBPACK_IMPORTED_MODULE_6__["ActionSettingsSyncEnd"]())]));
        }));
    };
    SettingsEffects.prototype.onChangePump = function () {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["SettingsActionTypes"].CHANGE_PUMP))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var payload = _a.payload;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
                type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setPump,
                payload: payload,
            }));
        }));
    };
    SettingsEffects.prototype.loadPump = function () {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["SettingsActionTypes"].LOAD_PUMP))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])((new Array(_model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].pumpCount).fill(0)
            .map(function (x, index) { return new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
            type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getPump,
            payload: {
                index: index,
            },
        }); })))); }));
    };
    SettingsEffects.prototype.onChangeMixer = function () {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["SettingsActionTypes"].CHANGE_MIXER))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var payload = _a.payload;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
                type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setMixer,
                payload: payload,
            }));
        }));
    };
    SettingsEffects.prototype.loadMixer = function () {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["SettingsActionTypes"].LOAD_MIXER))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])((new Array(_model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].mixerCount).fill(0)
            .map(function (x, index) { return new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
            type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getMixer,
            payload: {
                index: index,
            },
        }); })))); }));
    };
    SettingsEffects.prototype.onChangeDose = function () {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["SettingsActionTypes"].CHANGE_DOSE))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var payload = _a.payload;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
                type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setDose,
                payload: payload,
            }));
        }));
    };
    SettingsEffects.prototype.loadDose = function () {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["SettingsActionTypes"].LOAD_DOSE))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])((new Array(_model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].doseCount).fill(0)
            .map(function (x, index) { return new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
            type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getDose,
            payload: {
                index: index,
            },
        }); })))); }));
    };
    SettingsEffects.prototype.onChangeProgram = function () {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["SettingsActionTypes"].CHANGE_PROGRAM))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var payload = _a.payload;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
                type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setProgram,
                payload: payload,
            }));
        }));
    };
    SettingsEffects.prototype.loadProgram = function () {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["SettingsActionTypes"].LOAD_PROGRAM))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])((new Array(_model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].programCount).fill(0)
            .map(function (x, index) { return new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
            type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getProgram,
            payload: {
                index: index,
            },
        }); })))); }));
    };
    SettingsEffects.prototype.onChangeCompote = function () {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["SettingsActionTypes"].CHANGE_COMPOTE_DAILY))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var payload = _a.payload;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
                type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setCompoteDaily,
                payload: payload,
            }));
        }));
    };
    SettingsEffects.prototype.loadCompote = function () {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["SettingsActionTypes"].LOAD_COMPOTE))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(([].concat.apply([], (new Array(_model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].compoteCount).fill(0)
            .map(function (x, index) {
            return new Array(_model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].compoteDailyCount).fill(0)
                .map(function (x, dailyIndex) { return new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
                type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getCompoteDaily,
                payload: {
                    index: index,
                    dailyIndex: dailyIndex,
                },
            }); });
        })))))); }));
    };
    SettingsEffects.prototype.onChangeTimer = function () {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["SettingsActionTypes"].CHANGE_TIMER))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var payload = _a.payload;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
                type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setTimer,
                payload: payload,
            }));
        }));
    };
    SettingsEffects.prototype.loadTimer = function () {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["SettingsActionTypes"].LOAD_TIMER))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])((new Array(_model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].timerCount).fill(0)
            .map(function (x, index) { return new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
            type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getTimer,
            payload: {
                index: index,
            },
        }); })))); }));
    };
    SettingsEffects.prototype.onChangeSchedule = function () {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["SettingsActionTypes"].CHANGE_SCHEDULE))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var payload = _a.payload;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
                type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setSchedule,
                payload: payload,
            }));
        }));
    };
    SettingsEffects.prototype.loadSchedule = function () {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["SettingsActionTypes"].LOAD_SCHEDULE))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])((new Array(_model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].scheduleCount).fill(0)
            .map(function (x, index) { return new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
            type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getSchedule,
            payload: {
                index: index,
            },
        }); })))); }));
    };
    SettingsEffects.prototype.onChangePin = function () {
        var _this = this;
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["SettingsActionTypes"].CHANGE_PIN_ASSIGNMENT))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var payload = _a.payload;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
                type: _this.keyToCmd(payload.key),
                payload: {
                    index: payload.index,
                    value: payload.value,
                },
            }));
        }));
    };
    SettingsEffects.prototype.loadPinAssignment = function () {
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["SettingsActionTypes"].LOAD_PIN_ASSIGNMENT))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])((new Array(_model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].pumpCount).fill(0)
            .map(function (x, index) { return new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
            type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getPinPump,
            payload: {
                index: index,
            },
        }); })), (new Array(_model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].valveCount).fill(0)
            .map(function (x, index) { return new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
            type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getPinValve,
            payload: {
                index: index,
            },
        }); })), (new Array(_model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].doseCount).fill(0)
            .map(function (x, index) { return new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
            type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getPinDose,
            payload: {
                index: index,
            },
        }); })), (new Array(_model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].doseMixerCount).fill(0)
            .map(function (x, index) { return new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
            type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getPinDoseMixer,
            payload: {
                index: index,
            },
        }); })), (new Array(_model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].flowSensorCount).fill(0)
            .map(function (x, index) { return new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
            type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getPinFlowSensor,
            payload: {
                index: index,
            },
        }); })), (new Array(_model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].levelSensorCount).fill(0)
            .map(function (x, index) { return new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
            type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getPinLevelSensor,
            payload: {
                index: index,
            },
        }); })), (new Array(_model_device_config__WEBPACK_IMPORTED_MODULE_10__["deviceConfig"].mixerCount).fill(0)
            .map(function (x, index) { return new _connect_connect_reducer__WEBPACK_IMPORTED_MODULE_12__["ActionConnectRequest"]({
            type: _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].getPinMixer,
            payload: {
                index: index,
            },
        }); })))); }));
    };
    SettingsEffects.prototype.keyToCmd = function (key) {
        switch (key) {
            case 'pump': return _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setPinPump;
            case 'valve': return _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setPinValve;
            case 'flowSensor': return _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setPinFlowSensor;
            case 'levelSensor': return _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setPinLevelSensor;
            case 'mixer': return _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setPinMixer;
            case 'doseMixer': return _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setPinDoseMixer;
            case 'dose': return _model_device_request_type__WEBPACK_IMPORTED_MODULE_8__["DeviceRequestType"].setPinDose;
        }
    };
    SettingsEffects.prototype.syncItems = function (selector, requestGet, requestSet, response, count, payload) {
        var _this = this;
        if (payload === void 0) { payload = null; }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["range"])(0, count)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (i) { return _this.syncItem(selector, requestGet, requestSet, response, i, payload); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatAll"])());
    };
    SettingsEffects.prototype.syncItem = function (selector, requestGet, requestSet, response, index, payload) {
        var _this = this;
        if (payload === void 0) { payload = null; }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.connectBt.send({ type: requestGet, payload: { index: index } }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () { return _this.connectBt.response$; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (r) { return r.type === response; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(selector(index)))))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (_a) {
            var deviceValue = _a[0], value = _a[1];
            if (JSON.stringify(deviceValue) === JSON.stringify(value)) {
                return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(value);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (value) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.connectBt.send({ type: requestSet, payload: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ index: index, value: value }, payload) }));
        }));
    };
    SettingsEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _services_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] },
        { type: _services_connect_connect_service__WEBPACK_IMPORTED_MODULE_11__["ConnectService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SettingsEffects.prototype, "init", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SettingsEffects.prototype, "sync", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SettingsEffects.prototype, "onChangePump", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SettingsEffects.prototype, "loadPump", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SettingsEffects.prototype, "onChangeMixer", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SettingsEffects.prototype, "loadMixer", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SettingsEffects.prototype, "onChangeDose", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SettingsEffects.prototype, "loadDose", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SettingsEffects.prototype, "onChangeProgram", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SettingsEffects.prototype, "loadProgram", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SettingsEffects.prototype, "onChangeCompote", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SettingsEffects.prototype, "loadCompote", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SettingsEffects.prototype, "onChangeTimer", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SettingsEffects.prototype, "loadTimer", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SettingsEffects.prototype, "onChangeSchedule", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SettingsEffects.prototype, "loadSchedule", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SettingsEffects.prototype, "onChangePin", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SettingsEffects.prototype, "loadPinAssignment", null);
    SettingsEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _services_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"],
            _services_connect_connect_service__WEBPACK_IMPORTED_MODULE_11__["ConnectService"]])
    ], SettingsEffects);
    return SettingsEffects;
}());



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
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var echarts_lib_chart_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts/lib/chart/line */ "75ce");
/* harmony import */ var echarts_lib_chart_line__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_chart_line__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var echarts_lib_component_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! echarts/lib/component/tooltip */ "AH3D");
/* harmony import */ var echarts_lib_component_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_component_tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var echarts_lib_component_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! echarts/lib/component/title */ "Ynxi");
/* harmony import */ var echarts_lib_component_title__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_component_title__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var echarts_lib_component_toolbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! echarts/lib/component/toolbox */ "sRwP");
/* harmony import */ var echarts_lib_component_toolbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_component_toolbox__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var echarts_lib_component_dataZoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! echarts/lib/component/dataZoom */ "Cm0C");
/* harmony import */ var echarts_lib_component_dataZoom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_component_dataZoom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./environments/environment */ "AytR");










if (_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
if (_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].platform === 'android') {
    document.addEventListener('deviceready', function () {
        bootstrap();
    }, false);
}
else {
    bootstrap();
}
function bootstrap() {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_8__["AppModule"])
        .catch(function (err) { return console.error(err.message, err); });
}


/***/ }),

/***/ "zjcK":
/*!**************************************************************************!*\
  !*** ./src/app/components/access-control/camshots/camshots.component.ts ***!
  \**************************************************************************/
/*! exports provided: CamshotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamshotsComponent", function() { return CamshotsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_camshots_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./camshots.component.html */ "cZuW");
/* harmony import */ var _camshots_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camshots.component.scss */ "UFAQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var CamshotsComponent = /** @class */ (function () {
    function CamshotsComponent() {
    }
    CamshotsComponent.prototype.ngOnInit = function () {
    };
    CamshotsComponent.prototype.trackByKey = function (index, key) {
        return key;
    };
    CamshotsComponent.ctorParameters = function () { return []; };
    CamshotsComponent.propDecorators = {
        keys: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    CamshotsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-camshots',
            template: _raw_loader_camshots_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_camshots_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CamshotsComponent);
    return CamshotsComponent;
}());



/***/ }),

/***/ "zoF2":
/*!**********************************************************************!*\
  !*** ./src/app/components/settings/timer-list/timer/timer.module.ts ***!
  \**********************************************************************/
/*! exports provided: TimerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerModule", function() { return TimerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _timer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer.component */ "3prO");
/* harmony import */ var _shared_day_time_day_time_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/day-time/day-time.module */ "IxSP");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");









var TimerModule = /** @class */ (function () {
    function TimerModule() {
    }
    TimerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_timer_component__WEBPACK_IMPORTED_MODULE_3__["TimerComponent"]],
            exports: [_timer_component__WEBPACK_IMPORTED_MODULE_3__["TimerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _shared_day_time_day_time_module__WEBPACK_IMPORTED_MODULE_4__["DayTimeModule"],
            ],
        })
    ], TimerModule);
    return TimerModule;
}());



/***/ }),

/***/ "zxSY":
/*!*********************************************************************!*\
  !*** ./src/app/components/settings/timer-list/timer-list.module.ts ***!
  \*********************************************************************/
/*! exports provided: TimerListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerListModule", function() { return TimerListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _timer_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer-list.component */ "Y+EC");
/* harmony import */ var _timer_timer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer/timer.module */ "zoF2");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








var TimerListModule = /** @class */ (function () {
    function TimerListModule() {
    }
    TimerListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_timer_list_component__WEBPACK_IMPORTED_MODULE_3__["TimerListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _timer_timer_module__WEBPACK_IMPORTED_MODULE_4__["TimerModule"],
            ],
        })
    ], TimerListModule);
    return TimerListModule;
}());



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map