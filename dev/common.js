"use strict";
(self["webpackChunknutrisha_admin"] = self["webpackChunknutrisha_admin"] || []).push([["common"],{

/***/ 87530:
/*!********************************************!*\
  !*** ./src/app/core/roles/role.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleService": () => (/* binding */ RoleService)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 8268);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);




const roleUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseAdminV1Url + 'role';
class RoleService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getPagedList(queryParams) {
        return this.httpClient.get(roleUrl + '/getPagedList', {
            params: _shared__WEBPACK_IMPORTED_MODULE_0__.HttpUtilsService.prepareGetPagedListQueryParams(queryParams),
        });
    }
    getById(id) {
        return this.httpClient.get(roleUrl + '/GetById', {
            params: { id },
        });
    }
}
RoleService.ɵfac = function RoleService_Factory(t) { return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
RoleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RoleService, factory: RoleService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=common.js.map