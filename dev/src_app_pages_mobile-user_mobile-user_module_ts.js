"use strict";
(self["webpackChunknutrisha_admin"] = self["webpackChunknutrisha_admin"] || []).push([["src_app_pages_mobile-user_mobile-user_module_ts"],{

/***/ 79835:
/*!*********************!*\
  !*** ./products.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bubbleData": () => (/* binding */ bubbleData),
/* harmony export */   "emoji": () => (/* binding */ emoji),
/* harmony export */   "productSales": () => (/* binding */ productSales),
/* harmony export */   "productSalesMulti": () => (/* binding */ productSalesMulti)
/* harmony export */ });
var emoji = [
    {
        "id": 1,
        "userId": 2049,
        "emoji": "&#128512;",
        "note": "im happy today",
        "date": "2023-11-15T00:00:00Z"
    },
    {
        "id": 2,
        "userId": 2049,
        "emoji": "&#128514;",
        "note": "FACE WITH TEARS OF JOY",
        "date": "2023-11-14T00:00:00Z"
    },
    {
        "id": 3,
        "userId": 2049,
        "emoji": "&#128521;",
        "note": "WINKING FACE",
        "date": "2023-11-11T00:00:00Z"
    }
];
var productSales = [
    {
        "name": "book",
        "value": 5001
    }, {
        "name": "graphic card",
        "value": 7322
    }, {
        "name": "desk",
        "value": 1726
    }, {
        "name": "laptop",
        "value": 2599
    }, {
        "name": "monitor",
        "value": 705
    }
];
var productSalesMulti = [
    {
        "name": "book",
        "series": [
            {
                "name": "January",
                "value": 125
            }, {
                "name": "February",
                "value": 197
            }, {
                "name": "March",
                "value": 209
            }
        ]
    }, {
        "name": "graphic card",
        "series": [
            {
                "name": "January",
                "value": 210
            }, {
                "name": "February",
                "value": 255
            }, {
                "name": "March",
                "value": 203
            }
        ]
    }, {
        "name": "desk",
        "series": [
            {
                "name": "January",
                "value": 89
            }, {
                "name": "February",
                "value": 105
            }, {
                "name": "March",
                "value": 66
            }
        ]
    }, {
        "name": "laptop",
        "series": [
            {
                "name": "January",
                "value": 178
            }, {
                "name": "February",
                "value": 165
            }, {
                "name": "March",
                "value": 144
            }
        ]
    }, {
        "name": "monitor",
        "series": [
            {
                "name": "January",
                "value": 144
            }, {
                "name": "February",
                "value": 250
            }, {
                "name": "March",
                "value": 133
            }
        ]
    }
];
var bubbleData = [
    {
        name: 'book',
        series: [
            {
                name: 'January',
                x: 'January',
                y: 80.3,
                r: 80.4
            },
            {
                name: 'February',
                x: 'February',
                y: 80.3,
                r: 78
            },
            {
                name: 'March',
                x: 'March',
                y: 75.4,
                r: 79
            }
        ]
    },
    {
        name: 'graphic card',
        series: [
            {
                name: 'January',
                x: 'January',
                y: 78.8,
                r: 144
            },
            {
                name: 'February',
                x: 'February',
                y: 76.9,
                r: 178
            },
            {
                name: 'March',
                x: 'March',
                y: 75.4,
                r: 155
            }
        ]
    },
    {
        name: 'desk',
        series: [
            {
                name: 'January',
                x: 'January',
                y: 81.4,
                r: 63
            },
            {
                name: 'February',
                x: 'February',
                y: 79.1,
                r: 59.4
            },
            {
                name: 'March',
                x: 'March',
                y: 77.2,
                r: 56.9
            }
        ]
    },
    {
        name: 'laptop',
        series: [
            {
                name: 'January',
                x: 'January',
                y: 80.2,
                r: 62.7
            },
            {
                name: 'February',
                x: 'February',
                y: 77.8,
                r: 58.9
            },
            {
                name: 'March',
                x: 'March',
                y: 75.7,
                r: 57.1
            }
        ]
    }
];


/***/ }),

/***/ 63483:
/*!********************************************!*\
  !*** ./src/app/core/mobile-users/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileUserDetailsModel": () => (/* reexport safe */ _models_mobile_user_details_model__WEBPACK_IMPORTED_MODULE_1__.MobileUserDetailsModel),
/* harmony export */   "MobileUserDetailsViewModel": () => (/* reexport safe */ _models_mobile_user_details_model__WEBPACK_IMPORTED_MODULE_1__.MobileUserDetailsViewModel),
/* harmony export */   "MobileUserListModel": () => (/* reexport safe */ _models_mobile_user_list_model__WEBPACK_IMPORTED_MODULE_0__.MobileUserListModel),
/* harmony export */   "MobileUserService": () => (/* reexport safe */ _mobile_user_service__WEBPACK_IMPORTED_MODULE_3__.MobileUserService),
/* harmony export */   "UserPlanDay": () => (/* reexport safe */ _models_user_plan_day__WEBPACK_IMPORTED_MODULE_4__.UserPlanDay),
/* harmony export */   "UserPreventTypeEnum": () => (/* reexport safe */ _models_user_prevention_type_enum__WEBPACK_IMPORTED_MODULE_2__.UserPreventTypeEnum)
/* harmony export */ });
/* harmony import */ var _models_mobile_user_list_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/mobile-user-list-model */ 86632);
/* harmony import */ var _models_mobile_user_details_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/mobile-user-details.model */ 67759);
/* harmony import */ var _models_user_prevention_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/user-prevention-type.enum */ 8909);
/* harmony import */ var _mobile_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-user.service */ 41479);
/* harmony import */ var _models_user_plan_day__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/user-plan.day */ 75619);







/***/ }),

/***/ 67759:
/*!***********************************************************************!*\
  !*** ./src/app/core/mobile-users/models/mobile-user-details.model.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileUserDetailsModel": () => (/* binding */ MobileUserDetailsModel),
/* harmony export */   "MobileUserDetailsViewModel": () => (/* binding */ MobileUserDetailsViewModel)
/* harmony export */ });
/* harmony import */ var _mobile_user_list_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-user-list-model */ 86632);

class MobileUserDetailsViewModel extends _mobile_user_list_model__WEBPACK_IMPORTED_MODULE_0__.MobileUserListModel {
    constructor(model) {
        var _a, _b;
        super();
        this.currentPlan = planToViewModel((_a = model.userMealPlans) === null || _a === void 0 ? void 0 : _a.lastPlan);
        this.previousPlan = planToViewModel((_b = model.userMealPlans) === null || _b === void 0 ? void 0 : _b.previousPlan);
        Object.assign(this, model);
    }
}
class MobileUserDetailsModel extends _mobile_user_list_model__WEBPACK_IMPORTED_MODULE_0__.MobileUserListModel {
}
function planToViewModel(mealPlan) {
    if (mealPlan == null)
        return null;
    const planDays = mealPlan.days;
    const plan = {
        notes: mealPlan.notes,
        numberOfIAmHungryClicked: mealPlan.numberOfIAmHungryClicked,
    };
    for (let day of planDays) {
        const planDay = {
            water: day.waterCount,
            mens: {},
        };
        for (let mealMenu of day.menus) {
            planDay.mens[mealMenu.mealType] = {
                isEaten: mealMenu.isEaten,
                isSkipped: mealMenu.isSkipped,
                isSwapped: mealMenu.isSwapped,
                mealNames: mealMenu.meals,
            };
        }
        plan[day.day] = planDay;
    }
    return plan;
}


/***/ }),

/***/ 86632:
/*!********************************************************************!*\
  !*** ./src/app/core/mobile-users/models/mobile-user-list-model.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileUserListModel": () => (/* binding */ MobileUserListModel)
/* harmony export */ });
class MobileUserListModel {
}


/***/ }),

/***/ 75619:
/*!***********************************************************!*\
  !*** ./src/app/core/mobile-users/models/user-plan.day.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPlanDay": () => (/* binding */ UserPlanDay)
/* harmony export */ });
class UserPlanDay {
}


/***/ }),

/***/ 8909:
/*!***********************************************************************!*\
  !*** ./src/app/core/mobile-users/models/user-prevention-type.enum.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPreventTypeEnum": () => (/* binding */ UserPreventTypeEnum)
/* harmony export */ });
var UserPreventTypeEnum;
(function (UserPreventTypeEnum) {
    UserPreventTypeEnum[UserPreventTypeEnum["NoComment"] = 0] = "NoComment";
})(UserPreventTypeEnum || (UserPreventTypeEnum = {}));


/***/ }),

/***/ 60507:
/*!****************************************************************!*\
  !*** ./src/app/core/store/mobile-users/mobile-user.actions.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileUserActions": () => (/* binding */ MobileUserActions)
/* harmony export */ });
var MobileUserActions;
(function (MobileUserActions) {
    class LoadMobileUsers {
        constructor(pagedModelQueryModel) {
            this.pagedModelQueryModel = pagedModelQueryModel;
        }
    }
    LoadMobileUsers.type = '[Mobile Users] Load Mobile User Page';
    MobileUserActions.LoadMobileUsers = LoadMobileUsers;
    class LoadUserDetails {
        constructor(userId) {
            this.userId = userId;
        }
    }
    LoadUserDetails.type = '[Mobile Users] Load Mobile User Details';
    MobileUserActions.LoadUserDetails = LoadUserDetails;
})(MobileUserActions || (MobileUserActions = {}));


/***/ }),

/***/ 86031:
/*!**************************************************************!*\
  !*** ./src/app/core/store/mobile-users/mobile-user.state.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileUserState": () => (/* binding */ MobileUserState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _mobile_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-user.actions */ 60507);
/* harmony import */ var _mobile_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mobile-users */ 63483);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







let MobileUserState = class MobileUserState {
    constructor(mobileUserService) {
        this.mobileUserService = mobileUserService;
    }
    getPagedList(ctx, action) {
        return this.mobileUserService
            .getPagedList(action.pagedModelQueryModel)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)((result) => {
            const data = result.data;
            const currentState = ctx.getState();
            ctx.setState(Object.assign(Object.assign({}, currentState), { mobileUsersPage: data, totalRows: result.totalRows }));
        }));
    }
    loadUserDetails(ctx, action) {
        return this.mobileUserService.getUserDetails(action.userId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)((result) => {
            const data = result.data;
            const currentState = ctx.getState();
            const lastUser = result.data
                ? new _mobile_users__WEBPACK_IMPORTED_MODULE_2__.MobileUserDetailsViewModel(data)
                : null;
            ctx.setState(Object.assign(Object.assign({}, currentState), { lastLoadedUser: lastUser }));
        }));
    }
    static lastLoadedPage(state) {
        return state.mobileUsersPage;
    }
};
MobileUserState.ɵfac = function MobileUserState_Factory(t) { return new (t || MobileUserState)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_mobile_users__WEBPACK_IMPORTED_MODULE_2__.MobileUserService)); };
MobileUserState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: MobileUserState, factory: MobileUserState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_mobile_user_actions__WEBPACK_IMPORTED_MODULE_1__.MobileUserActions.LoadMobileUsers)
], MobileUserState.prototype, "getPagedList", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_mobile_user_actions__WEBPACK_IMPORTED_MODULE_1__.MobileUserActions.LoadUserDetails)
], MobileUserState.prototype, "loadUserDetails", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)()
], MobileUserState, "lastLoadedPage", null);
MobileUserState = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'mobileUsers',
    })
], MobileUserState);



/***/ }),

/***/ 10208:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/mobile-user/mobile-user-details/mobile-user-details.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileUserDetailsComponent": () => (/* binding */ MobileUserDetailsComponent)
/* harmony export */ });
/* harmony import */ var F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _core_store_mobile_users_mobile_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/store/mobile-users/mobile-user.actions */ 60507);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _core_shared_models_day_of_week__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/models/day-of-week */ 37086);
/* harmony import */ var _core_meals_models_meal_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/meals/models/meal-type.enum */ 71267);
/* harmony import */ var _sub_mobile_user_more_info_dialog_mobile_user_more_info_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sub/mobile-user-more-info-dialog/mobile-user-more-info-dialog.component */ 51634);
/* harmony import */ var _core_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/shared/confirm-dialog/confirm-dialog.component */ 92911);
/* harmony import */ var _sub_make_premium_make_premium_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sub/make-premium/make-premium.component */ 83602);
/* harmony import */ var _sub_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sub/dialog/dialog.component */ 79342);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _sub_upload_document_dialog_upload_document_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sub/upload-document-dialog/upload-document-dialog.component */ 98659);
/* harmony import */ var _sub_user_documents_dialog_user_documents_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sub/user-documents-dialog/user-documents-dialog.component */ 13475);
/* harmony import */ var products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! products */ 79835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/shared */ 8268);
/* harmony import */ var _core_mobile_users__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/mobile-users */ 63483);
/* harmony import */ var _core_meal_plan_meal_plan_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/meal-plan/meal-plan.service */ 74456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _shared_directives_profile_image_profile_image_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/directives/profile-image/profile-image.directive */ 13468);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @swimlane/ngx-charts */ 49458);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _shared_pipes_array_to_string_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/pipes/array-to-string.pipe */ 98749);
/* harmony import */ var _shared_pipes_enum_key_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/pipes/enum-key.pipe */ 86210);










































function MobileUserDetailsComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "MOBILE_USERS.BANNED_USER"), " ");
  }
}

function MobileUserDetailsComponent_div_0_div_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function MobileUserDetailsComponent_div_0_div_2_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return ctx_r18.openMakePremiumDialog();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 1, "MOBILE_USERS.MAKE_PREMIUM"));
  }
}

function MobileUserDetailsComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, MobileUserDetailsComponent_div_0_div_2_button_1_Template, 4, 3, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r10.userDetails.isSubscribed);
  }
}

function MobileUserDetailsComponent_div_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 1, "MOBILE_USERS.SUBSCRIBED_FROM_CLINIC"), "");
  }
}

function MobileUserDetailsComponent_div_0_div_13_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function MobileUserDetailsComponent_div_0_div_13_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return ctx_r22.banUser(ctx_r22.userDetails.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "MOBILE_USERS.BAN_USER"), " ");
  }
}

function MobileUserDetailsComponent_div_0_div_13_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function MobileUserDetailsComponent_div_0_div_13_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return ctx_r24.unBanUser(ctx_r24.userDetails.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "MOBILE_USERS.UNBAN_USER"), " ");
  }
}

function MobileUserDetailsComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, MobileUserDetailsComponent_div_0_div_13_button_1_Template, 3, 3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, MobileUserDetailsComponent_div_0_div_13_button_2_Template, 3, 3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r12.userDetails.isBanned);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r12.userDetails.isBanned);
  }
}

function MobileUserDetailsComponent_div_0_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 50)(1, "p", 17)(2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "span", 17)(9, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("matTooltip", ctx_r13.userDetails == null ? null : ctx_r13.userDetails.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 6, "MOBILE_USERS.EMAIL"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"]((ctx_r13.userDetails == null ? null : ctx_r13.userDetails.email) ? ctx_r13.userDetails == null ? null : ctx_r13.userDetails.email : _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 8, "SHARED.NOT_AVAILABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("matTooltip", ctx_r13.userDetails == null ? null : ctx_r13.userDetails.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](11, 10, "MOBILE_USERS.PHONE_NUMBER"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"]((ctx_r13.userDetails == null ? null : ctx_r13.userDetails.phoneNumber) ? ctx_r13.userDetails == null ? null : ctx_r13.userDetails.phoneNumber : _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](14, 12, "SHARED.NOT_AVAILABLE"));
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 113)(1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function MobileUserDetailsComponent_div_0_div_97_div_1_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return ctx_r56.openDialog();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 1, "MOBILE_USERS.ADD_NOTES"));
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind3"](2, 1, row_r58.title, 0, 20), " ");
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind3"](2, 1, row_r59.notes, 0, 30), "");
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, row_r60.date), "");
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_td_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td", 115)(1, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function MobileUserDetailsComponent_div_0_div_97_div_1_td_25_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r63);
      const row_r61 = restoredCtx.$implicit;
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return ctx_r62.uploadDocument(row_r61);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function MobileUserDetailsComponent_div_0_div_97_div_1_td_25_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r63);
      const row_r61 = restoredCtx.$implicit;
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return ctx_r64.editNote(row_r61);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function MobileUserDetailsComponent_div_0_div_97_div_1_td_25_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r63);
      const row_r61 = restoredCtx.$implicit;
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return ctx_r65.deleteNote(row_r61.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "tr", 118);
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "tr", 119);
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr", 120)(1, "td", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();

    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](11);

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r28.value, "\"");
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_button_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Period ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "ngx-charts-bar-vertical", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("results", ctx_r41.getWaterBare)("view", ctx_r41.view)("scheme", ctx_r41.colorScheme)("schemeType", ctx_r41.schemeType)("gradient", ctx_r41.gradient)("xAxis", ctx_r41.xAxis)("yAxis", ctx_r41.yAxis)("legend", ctx_r41.legend)("showXAxisLabel", ctx_r41.showXAxisLabel)("showYAxisLabel", ctx_r41.showYAxisLabel)("xAxisLabel", ctx_r41.xAxisLabel)("yAxisLabel", ctx_r41.getWaterlable)("legendTitle", ctx_r41.legendTitle)("legendPosition", ctx_r41.legendPosition)("animations", ctx_r41.animations)("showGridLines", ctx_r41.showGridLines)("trimXAxisTicks", ctx_r41.trimXAxisTicks)("trimYAxisTicks", ctx_r41.trimYAxisTicks)("rotateXAxisTicks", ctx_r41.rotateXAxisTicks)("maxXAxisTickLength", ctx_r41.maxXAxisTickLength)("maxYAxisTickLength", ctx_r41.maxYAxisTickLength)("xAxisTickFormatting", ctx_r41.formatString)("yAxisTickFormatting", ctx_r41.formatNumber)("yAxisTicks", ctx_r41.yAxisTicks_2)("showDataLabel", ctx_r41.showDataLabel)("barPadding", ctx_r41.barPadding)("tooltipDisabled", ctx_r41.tooltipDisabled)("roundEdges", ctx_r41.roundEdges);
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "ngx-charts-pie-chart", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("results", ctx_r42.getWaterBare)("view", ctx_r42.view)("scheme", ctx_r42.colorScheme)("schemeType", ctx_r42.schemeType)("legend", ctx_r42.legend)("legendTitle", ctx_r42.legendTitle)("legendPosition", ctx_r42.legendPosition)("animations", ctx_r42.animations)("tooltipDisabled", ctx_r42.tooltipDisabled);
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_65_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 127)(1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 129)(5, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "\uD83D\uDE00");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const mood_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, mood_r67.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", mood_r67.note, "");
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, MobileUserDetailsComponent_div_0_div_97_div_1_div_65_div_1_Template, 8, 4, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const mood_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", mood_r67.emoji.endsWith("12;"));
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_66_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 127)(1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 129)(5, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "\uD83D\uDE10");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const mood_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, mood_r70.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", mood_r70.note, "");
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, MobileUserDetailsComponent_div_0_div_97_div_1_div_66_div_1_Template, 8, 4, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const mood_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", mood_r70.emoji.endsWith("28;"));
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_67_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 127)(1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 129)(5, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "\uD83D\uDE02");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const mood_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, mood_r73.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", mood_r73.note, "");
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, MobileUserDetailsComponent_div_0_div_97_div_1_div_67_div_1_Template, 8, 4, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const mood_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", mood_r73.emoji.endsWith("14;"));
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_68_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 127)(1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 129)(5, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "\uD83D\uDE0C");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const mood_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, mood_r76.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", mood_r76.note, "");
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, MobileUserDetailsComponent_div_0_div_97_div_1_div_68_div_1_Template, 8, 4, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const mood_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", mood_r76.emoji.endsWith("24;"));
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_69_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 127)(1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 129)(5, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "\uD83D\uDE0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const mood_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, mood_r79.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", mood_r79.note, "");
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, MobileUserDetailsComponent_div_0_div_97_div_1_div_69_div_1_Template, 8, 4, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const mood_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", mood_r79.emoji.endsWith("25;"));
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_70_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 127)(1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 129)(5, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "\uD83D\uDE21");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const mood_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, mood_r82.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", mood_r82.note, "");
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, MobileUserDetailsComponent_div_0_div_97_div_1_div_70_div_1_Template, 8, 4, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const mood_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", mood_r82.emoji.endsWith("45;"));
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_71_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 127)(1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 129)(5, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "\uD83D\uDE25");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const mood_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, mood_r85.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", mood_r85.note, "");
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, MobileUserDetailsComponent_div_0_div_97_div_1_div_71_div_1_Template, 8, 4, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const mood_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", mood_r85.emoji.endsWith("49;"));
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_72_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 127)(1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 129)(5, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "\uD83D\uDE2D");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const mood_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, mood_r88.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", mood_r88.note, "");
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, MobileUserDetailsComponent_div_0_div_97_div_1_div_72_div_1_Template, 8, 4, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const mood_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", mood_r88.emoji.endsWith("57;"));
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "No Data Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "ngx-charts-bar-vertical", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("results", ctx_r52.getPeriodMonthlyBar)("view", ctx_r52.view)("scheme", ctx_r52.colorScheme)("schemeType", ctx_r52.schemeType)("gradient", ctx_r52.gradient)("xAxis", ctx_r52.xAxis)("yAxis", ctx_r52.yAxis)("legend", ctx_r52.legend)("showXAxisLabel", ctx_r52.showXAxisLabel)("showYAxisLabel", ctx_r52.showYAxisLabel)("xAxisLabel", ctx_r52.xAxisLabel)("yAxisLabel", ctx_r52.getPeriodMonthlylable)("legendTitle", ctx_r52.legendTitle)("legendPosition", ctx_r52.legendPosition)("animations", ctx_r52.animations)("showGridLines", ctx_r52.showGridLines)("trimXAxisTicks", ctx_r52.trimXAxisTicks)("trimYAxisTicks", ctx_r52.trimYAxisTicks)("rotateXAxisTicks", ctx_r52.rotateXAxisTicks)("maxXAxisTickLength", ctx_r52.maxXAxisTickLength)("maxYAxisTickLength", ctx_r52.maxYAxisTickLength)("xAxisTickFormatting", ctx_r52.formatString)("yAxisTickFormatting", ctx_r52.formatNumber)("yAxisTicks", ctx_r52.yAxisTicks_period)("showDataLabel", ctx_r52.showDataLabel)("barPadding", ctx_r52.barPadding)("tooltipDisabled", ctx_r52.tooltipDisabled)("roundEdges", ctx_r52.roundEdges);
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "ngx-charts-pie-chart", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("results", ctx_r53.getHeartMonthlyBar)("view", ctx_r53.view)("scheme", ctx_r53.colorScheme)("schemeType", ctx_r53.schemeType)("legend", ctx_r53.legend)("legendTitle", ctx_r53.legendTitle)("legendPosition", ctx_r53.legendPosition)("animations", ctx_r53.animations)("tooltipDisabled", ctx_r53.tooltipDisabled);
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "No Data Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_143_tr_4_td_3_li_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const menuItem_r97 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](menuItem_r97);
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_143_tr_4_td_3_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const mealType_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", mealType_r94.logDate, "");
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_143_tr_4_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](19, MobileUserDetailsComponent_div_0_div_97_div_1_div_143_tr_4_td_3_li_19_Template, 2, 1, "li", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](20, MobileUserDetailsComponent_div_0_div_97_div_1_div_143_tr_4_td_3_div_20_Template, 5, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const mealType_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate4"](" ", mealType_r94.color == "Green" ? "\uD83D\uDFE2" : "", "", mealType_r94.color == "Red" ? "\uD83D\uDD34" : "", "", mealType_r94.color == "Yellow" ? "\uD83D\uDFE1" : "", "", mealType_r94.color == "Orange" ? "\uD83D\uDFE0" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", mealType_r94.menuType == 0 ? "Breakfast" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", mealType_r94.menuType == 1 ? "Lunch" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", mealType_r94.menuType == 2 ? "Dinner" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", mealType_r94.menuType == 3 ? "Snack" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", mealType_r94.menuType == 4 ? "Supplement" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", mealType_r94.menuType == 5 ? "Water" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", mealType_r94.menuType == 6 ? "ExtraBites" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", mealType_r94.menuType == 7 ? "Recommended" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", mealType_r94.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", mealType_r94 == null ? null : mealType_r94.logDate);
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_143_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr")(1, "td", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, MobileUserDetailsComponent_div_0_div_97_div_1_div_143_tr_4_td_3_Template, 21, 14, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const day_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](day_r92.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", day_r92.meal);
  }
}

function MobileUserDetailsComponent_div_0_div_97_div_1_div_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "table", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, MobileUserDetailsComponent_div_0_div_97_div_1_div_143_tr_4_Template, 4, 2, "tr", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div")(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7, "Skipped");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, " \uD83D\uDD34");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11, " Eaten");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13, " \uD83D\uDFE2");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15, " Swap");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17, " \uD83D\uDFE1");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19, " Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](21, " \uD83D\uDFE0");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r55.mealData);
  }
}

const _c0 = function () {
  return [5, 10, 25, 100];
};

function MobileUserDetailsComponent_div_0_div_97_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 53)(1, "mat-tab-group", 54)(2, "mat-tab", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, MobileUserDetailsComponent_div_0_div_97_div_1_div_5_Template, 5, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 57)(7, "mat-form-field", 58)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "input", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("keyup", function MobileUserDetailsComponent_div_0_div_97_div_1_Template_input_keyup_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r100);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return ctx_r99.applyFilter($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 61)(13, "table", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](14, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, MobileUserDetailsComponent_div_0_div_97_div_1_th_15_Template, 2, 0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](16, MobileUserDetailsComponent_div_0_div_97_div_1_td_16_Template, 3, 5, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](17, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](18, MobileUserDetailsComponent_div_0_div_97_div_1_th_18_Template, 2, 0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](19, MobileUserDetailsComponent_div_0_div_97_div_1_td_19_Template, 3, 5, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](20, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, MobileUserDetailsComponent_div_0_div_97_div_1_th_21_Template, 2, 0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](22, MobileUserDetailsComponent_div_0_div_97_div_1_td_22_Template, 3, 3, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](23, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](24, MobileUserDetailsComponent_div_0_div_97_div_1_th_24_Template, 2, 0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](25, MobileUserDetailsComponent_div_0_div_97_div_1_td_25_Template, 10, 0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](26, MobileUserDetailsComponent_div_0_div_97_div_1_tr_26_Template, 1, 0, "tr", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](27, MobileUserDetailsComponent_div_0_div_97_div_1_tr_27_Template, 1, 0, "tr", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](28, MobileUserDetailsComponent_div_0_div_97_div_1_tr_28_Template, 3, 1, "tr", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](29, "mat-paginator", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "mat-tab", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "div", 73)(33, "div", 74)(34, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](35, "Water ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](36, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](37, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](38, "Moods ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](39, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](40, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](41, "Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](42, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](43, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](44, "Measurement ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](45, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](46, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](47, "Steps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](48, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](49, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](50, "Sleep ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](51, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](52, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](53, "Heart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](54, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](55, MobileUserDetailsComponent_div_0_div_97_div_1_button_55_Template, 3, 0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](56, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](57, "Log Meal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](58, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](59, "div", 92)(60, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](61, MobileUserDetailsComponent_div_0_div_97_div_1_div_61_Template, 2, 28, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](62, MobileUserDetailsComponent_div_0_div_97_div_1_div_62_Template, 2, 9, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](63, "div", 95)(64, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](65, MobileUserDetailsComponent_div_0_div_97_div_1_div_65_Template, 2, 1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](66, MobileUserDetailsComponent_div_0_div_97_div_1_div_66_Template, 2, 1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](67, MobileUserDetailsComponent_div_0_div_97_div_1_div_67_Template, 2, 1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](68, MobileUserDetailsComponent_div_0_div_97_div_1_div_68_Template, 2, 1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](69, MobileUserDetailsComponent_div_0_div_97_div_1_div_69_Template, 2, 1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](70, MobileUserDetailsComponent_div_0_div_97_div_1_div_70_Template, 2, 1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](71, MobileUserDetailsComponent_div_0_div_97_div_1_div_71_Template, 2, 1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](72, MobileUserDetailsComponent_div_0_div_97_div_1_div_72_Template, 2, 1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](73, MobileUserDetailsComponent_div_0_div_97_div_1_div_73_Template, 3, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](74, "div", 99)(75, "mat-tab-group")(76, "mat-tab", 100)(77, "div", 101)(78, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](79, "ngx-charts-bar-vertical", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](80, "mat-tab", 104)(81, "div", 101)(82, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](83, "ngx-charts-bar-vertical", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](84, "div", 105)(85, "div", 106)(86, "mat-tab-group")(87, "mat-tab", 100)(88, "div", 101)(89, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](90, "ngx-charts-bar-vertical", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](91, "hr")(92, "ngx-charts-bar-vertical", 103)(93, "hr")(94, "ngx-charts-bar-vertical", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](95, "mat-tab", 104)(96, "div", 101)(97, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](98, "ngx-charts-bar-vertical", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](99, "hr")(100, "ngx-charts-bar-vertical", 103)(101, "hr")(102, "ngx-charts-bar-vertical", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](103, "div", 107)(104, "div", 106)(105, "mat-tab-group")(106, "mat-tab", 100)(107, "div", 101)(108, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](109, "ngx-charts-bar-vertical", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](110, "mat-tab", 104)(111, "div", 101)(112, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](113, "ngx-charts-bar-vertical", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](114, "div", 108)(115, "div", 106)(116, "mat-tab-group")(117, "mat-tab", 100)(118, "div", 101)(119, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](120, "ngx-charts-bar-vertical", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](121, "mat-tab", 104)(122, "div", 101)(123, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](124, "ngx-charts-bar-vertical", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](125, "div", 109)(126, "div", 106)(127, "mat-tab-group")(128, "mat-tab", 100)(129, "div", 101)(130, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](131, "ngx-charts-bar-vertical", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](132, "mat-tab", 104)(133, "div", 101)(134, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](135, "ngx-charts-bar-vertical", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](136, "div", 110)(137, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](138, MobileUserDetailsComponent_div_0_div_97_div_1_div_138_Template, 2, 28, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](139, MobileUserDetailsComponent_div_0_div_97_div_1_div_139_Template, 2, 9, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](140, "div", 111)(141, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](142, MobileUserDetailsComponent_div_0_div_97_div_1_div_142_Template, 3, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](143, MobileUserDetailsComponent_div_0_div_97_div_1_div_143_Template, 22, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()()();
  }

  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 415, "MOBILE_USERS.NOTES_FOR_DOCTORS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngxPermissionsOnly", "canAssignPremiumFeaturesToAppUsers");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dataSource", ctx_r26.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("matHeaderRowDef", ctx_r26.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("matRowDefColumns", ctx_r26.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](419, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](31, 417, "MOBILE_USERS.TRACKERS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", (ctx_r26.userDetails == null ? null : ctx_r26.userDetails.gender) == "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r26.selectedType == "Bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r26.selectedType == "Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r26.userMood);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r26.userMood);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r26.userMood);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r26.userMood);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r26.userMood);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r26.userMood);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r26.userMood);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r26.userMood);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r26.userMood);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("results", ctx_r26.getWeghitDailyBar)("view", ctx_r26.view)("scheme", ctx_r26.colorScheme)("schemeType", ctx_r26.schemeType)("gradient", ctx_r26.gradient)("xAxis", ctx_r26.xAxis)("yAxis", ctx_r26.yAxis)("legend", ctx_r26.legend)("showXAxisLabel", ctx_r26.showXAxisLabel)("showYAxisLabel", ctx_r26.showYAxisLabel)("xAxisLabel", ctx_r26.getWeghitDailylable)("yAxisLabel", ctx_r26.getWeghitDailylable)("legendTitle", ctx_r26.legendTitle)("legendPosition", ctx_r26.legendPosition)("animations", ctx_r26.animations)("showGridLines", ctx_r26.showGridLines)("trimXAxisTicks", ctx_r26.trimXAxisTicks)("trimYAxisTicks", ctx_r26.trimYAxisTicks)("rotateXAxisTicks", ctx_r26.rotateXAxisTicks)("maxXAxisTickLength", ctx_r26.maxXAxisTickLength)("maxYAxisTickLength", ctx_r26.maxYAxisTickLength)("xAxisTickFormatting", ctx_r26.formatString)("yAxisTickFormatting", ctx_r26.formatNumber)("yAxisTicks", ctx_r26.yAxisTicks)("showDataLabel", ctx_r26.showDataLabel)("barPadding", ctx_r26.barPadding)("tooltipDisabled", ctx_r26.tooltipDisabled)("roundEdges", ctx_r26.roundEdges);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("results", ctx_r26.getWeghitMonthlyBar)("view", ctx_r26.view)("scheme", ctx_r26.colorScheme)("schemeType", ctx_r26.schemeType)("gradient", ctx_r26.gradient)("xAxis", ctx_r26.xAxis)("yAxis", ctx_r26.yAxis)("legend", ctx_r26.legend)("showXAxisLabel", ctx_r26.showXAxisLabel)("showYAxisLabel", ctx_r26.showYAxisLabel)("xAxisLabel", ctx_r26.getWeghitMonthlylable)("yAxisLabel", ctx_r26.getWeghitMonthlylable)("legendTitle", ctx_r26.legendTitle)("legendPosition", ctx_r26.legendPosition)("animations", ctx_r26.animations)("showGridLines", ctx_r26.showGridLines)("trimXAxisTicks", ctx_r26.trimXAxisTicks)("trimYAxisTicks", ctx_r26.trimYAxisTicks)("rotateXAxisTicks", ctx_r26.rotateXAxisTicks)("maxXAxisTickLength", ctx_r26.maxXAxisTickLength)("maxYAxisTickLength", ctx_r26.maxYAxisTickLength)("xAxisTickFormatting", ctx_r26.formatString)("yAxisTickFormatting", ctx_r26.formatNumber)("yAxisTicks", ctx_r26.yAxisTicks)("showDataLabel", ctx_r26.showDataLabel)("barPadding", ctx_r26.barPadding)("tooltipDisabled", ctx_r26.tooltipDisabled)("roundEdges", ctx_r26.roundEdges);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("results", ctx_r26.getBustDailyBar)("view", ctx_r26.view)("scheme", ctx_r26.colorScheme)("schemeType", ctx_r26.schemeType)("gradient", ctx_r26.gradient)("xAxis", ctx_r26.xAxis)("yAxis", ctx_r26.yAxis)("legend", ctx_r26.legend)("showXAxisLabel", ctx_r26.showXAxisLabel)("showYAxisLabel", ctx_r26.showYAxisLabel)("xAxisLabel", ctx_r26.getBustDailylable)("yAxisLabel", ctx_r26.getBustDailylable)("legendTitle", ctx_r26.legendTitle)("legendPosition", ctx_r26.legendPosition)("animations", ctx_r26.animations)("showGridLines", ctx_r26.showGridLines)("trimXAxisTicks", ctx_r26.trimXAxisTicks)("trimYAxisTicks", ctx_r26.trimYAxisTicks)("rotateXAxisTicks", ctx_r26.rotateXAxisTicks)("maxXAxisTickLength", ctx_r26.maxXAxisTickLength)("maxYAxisTickLength", ctx_r26.maxYAxisTickLength)("xAxisTickFormatting", ctx_r26.formatString)("yAxisTickFormatting", ctx_r26.formatNumber)("yAxisTicks", ctx_r26.yAxisTicks)("showDataLabel", ctx_r26.showDataLabel)("barPadding", ctx_r26.barPadding)("tooltipDisabled", ctx_r26.tooltipDisabled)("roundEdges", ctx_r26.roundEdges);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("results", ctx_r26.getWaistDailyBar)("view", ctx_r26.view)("scheme", ctx_r26.colorScheme)("schemeType", ctx_r26.schemeType)("gradient", ctx_r26.gradient)("xAxis", ctx_r26.xAxis)("yAxis", ctx_r26.yAxis)("legend", ctx_r26.legend)("showXAxisLabel", ctx_r26.showXAxisLabel)("showYAxisLabel", ctx_r26.showYAxisLabel)("xAxisLabel", ctx_r26.getWaistDailylable)("yAxisLabel", ctx_r26.getWaistDailylable)("legendTitle", ctx_r26.legendTitle)("legendPosition", ctx_r26.legendPosition)("animations", ctx_r26.animations)("showGridLines", ctx_r26.showGridLines)("trimXAxisTicks", ctx_r26.trimXAxisTicks)("trimYAxisTicks", ctx_r26.trimYAxisTicks)("rotateXAxisTicks", ctx_r26.rotateXAxisTicks)("maxXAxisTickLength", ctx_r26.maxXAxisTickLength)("maxYAxisTickLength", ctx_r26.maxYAxisTickLength)("xAxisTickFormatting", ctx_r26.formatString)("yAxisTickFormatting", ctx_r26.formatNumber)("yAxisTicks", ctx_r26.yAxisTicks)("showDataLabel", ctx_r26.showDataLabel)("barPadding", ctx_r26.barPadding)("tooltipDisabled", ctx_r26.tooltipDisabled)("roundEdges", ctx_r26.roundEdges);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("results", ctx_r26.getHipsDailyBar)("view", ctx_r26.view)("scheme", ctx_r26.colorScheme)("schemeType", ctx_r26.schemeType)("gradient", ctx_r26.gradient)("xAxis", ctx_r26.xAxis)("yAxis", ctx_r26.yAxis)("legend", ctx_r26.legend)("showXAxisLabel", ctx_r26.showXAxisLabel)("showYAxisLabel", ctx_r26.showYAxisLabel)("xAxisLabel", ctx_r26.getHipsDailylable)("yAxisLabel", ctx_r26.getHipsDailylable)("legendTitle", ctx_r26.legendTitle)("legendPosition", ctx_r26.legendPosition)("animations", ctx_r26.animations)("showGridLines", ctx_r26.showGridLines)("trimXAxisTicks", ctx_r26.trimXAxisTicks)("trimYAxisTicks", ctx_r26.trimYAxisTicks)("rotateXAxisTicks", ctx_r26.rotateXAxisTicks)("maxXAxisTickLength", ctx_r26.maxXAxisTickLength)("maxYAxisTickLength", ctx_r26.maxYAxisTickLength)("xAxisTickFormatting", ctx_r26.formatString)("yAxisTickFormatting", ctx_r26.formatNumber)("yAxisTicks", ctx_r26.yAxisTicks)("showDataLabel", ctx_r26.showDataLabel)("barPadding", ctx_r26.barPadding)("tooltipDisabled", ctx_r26.tooltipDisabled)("roundEdges", ctx_r26.roundEdges);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("results", ctx_r26.getBustMonthlyBar)("view", ctx_r26.view)("scheme", ctx_r26.colorScheme)("schemeType", ctx_r26.schemeType)("gradient", ctx_r26.gradient)("xAxis", ctx_r26.xAxis)("yAxis", ctx_r26.yAxis)("legend", ctx_r26.legend)("showXAxisLabel", ctx_r26.showXAxisLabel)("showYAxisLabel", ctx_r26.showYAxisLabel)("xAxisLabel", ctx_r26.getBustMonthlylable)("yAxisLabel", ctx_r26.getBustMonthlylable)("legendTitle", ctx_r26.legendTitle)("legendPosition", ctx_r26.legendPosition)("animations", ctx_r26.animations)("showGridLines", ctx_r26.showGridLines)("trimXAxisTicks", ctx_r26.trimXAxisTicks)("trimYAxisTicks", ctx_r26.trimYAxisTicks)("rotateXAxisTicks", ctx_r26.rotateXAxisTicks)("maxXAxisTickLength", ctx_r26.maxXAxisTickLength)("maxYAxisTickLength", ctx_r26.maxYAxisTickLength)("xAxisTickFormatting", ctx_r26.formatString)("yAxisTickFormatting", ctx_r26.formatNumber)("yAxisTicks", ctx_r26.yAxisTicks)("showDataLabel", ctx_r26.showDataLabel)("barPadding", ctx_r26.barPadding)("tooltipDisabled", ctx_r26.tooltipDisabled)("roundEdges", ctx_r26.roundEdges);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("results", ctx_r26.getWaistMonthlyBar)("view", ctx_r26.view)("scheme", ctx_r26.colorScheme)("schemeType", ctx_r26.schemeType)("gradient", ctx_r26.gradient)("xAxis", ctx_r26.xAxis)("yAxis", ctx_r26.yAxis)("legend", ctx_r26.legend)("showXAxisLabel", ctx_r26.showXAxisLabel)("showYAxisLabel", ctx_r26.showYAxisLabel)("xAxisLabel", ctx_r26.getWaistMonthlylable)("yAxisLabel", ctx_r26.getWaistMonthlylable)("legendTitle", ctx_r26.legendTitle)("legendPosition", ctx_r26.legendPosition)("animations", ctx_r26.animations)("showGridLines", ctx_r26.showGridLines)("trimXAxisTicks", ctx_r26.trimXAxisTicks)("trimYAxisTicks", ctx_r26.trimYAxisTicks)("rotateXAxisTicks", ctx_r26.rotateXAxisTicks)("maxXAxisTickLength", ctx_r26.maxXAxisTickLength)("maxYAxisTickLength", ctx_r26.maxYAxisTickLength)("xAxisTickFormatting", ctx_r26.formatString)("yAxisTickFormatting", ctx_r26.formatNumber)("yAxisTicks", ctx_r26.yAxisTicks)("showDataLabel", ctx_r26.showDataLabel)("barPadding", ctx_r26.barPadding)("tooltipDisabled", ctx_r26.tooltipDisabled)("roundEdges", ctx_r26.roundEdges);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("results", ctx_r26.getHipsMonthlyBar)("view", ctx_r26.view)("scheme", ctx_r26.colorScheme)("schemeType", ctx_r26.schemeType)("gradient", ctx_r26.gradient)("xAxis", ctx_r26.xAxis)("yAxis", ctx_r26.yAxis)("legend", ctx_r26.legend)("showXAxisLabel", ctx_r26.showXAxisLabel)("showYAxisLabel", ctx_r26.showYAxisLabel)("xAxisLabel", ctx_r26.getHipsMonthlylable)("yAxisLabel", ctx_r26.getHipsMonthlylable)("legendTitle", ctx_r26.legendTitle)("legendPosition", ctx_r26.legendPosition)("animations", ctx_r26.animations)("showGridLines", ctx_r26.showGridLines)("trimXAxisTicks", ctx_r26.trimXAxisTicks)("trimYAxisTicks", ctx_r26.trimYAxisTicks)("rotateXAxisTicks", ctx_r26.rotateXAxisTicks)("maxXAxisTickLength", ctx_r26.maxXAxisTickLength)("maxYAxisTickLength", ctx_r26.maxYAxisTickLength)("xAxisTickFormatting", ctx_r26.formatString)("yAxisTickFormatting", ctx_r26.formatNumber)("yAxisTicks", ctx_r26.yAxisTicks)("showDataLabel", ctx_r26.showDataLabel)("barPadding", ctx_r26.barPadding)("tooltipDisabled", ctx_r26.tooltipDisabled)("roundEdges", ctx_r26.roundEdges);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("results", ctx_r26.getStepsDailyBar)("view", ctx_r26.view)("scheme", ctx_r26.colorScheme)("schemeType", ctx_r26.schemeType)("gradient", ctx_r26.gradient)("xAxis", ctx_r26.xAxis)("yAxis", ctx_r26.yAxis)("legend", ctx_r26.legend)("showXAxisLabel", ctx_r26.showXAxisLabel)("showYAxisLabel", ctx_r26.showYAxisLabel)("xAxisLabel", ctx_r26.getStepsDailylable)("yAxisLabel", ctx_r26.getStepsDailylable)("legendTitle", ctx_r26.legendTitle)("legendPosition", ctx_r26.legendPosition)("animations", ctx_r26.animations)("showGridLines", ctx_r26.showGridLines)("trimXAxisTicks", ctx_r26.trimXAxisTicks)("trimYAxisTicks", ctx_r26.trimYAxisTicks)("rotateXAxisTicks", ctx_r26.rotateXAxisTicks)("maxXAxisTickLength", ctx_r26.maxXAxisTickLength)("maxYAxisTickLength", ctx_r26.maxYAxisTickLength)("xAxisTickFormatting", ctx_r26.formatString)("yAxisTickFormatting", ctx_r26.formatNumber)("yAxisTicks", ctx_r26.yAxisTicks_steps)("showDataLabel", ctx_r26.showDataLabel)("barPadding", ctx_r26.barPadding)("tooltipDisabled", ctx_r26.tooltipDisabled)("roundEdges", ctx_r26.roundEdges);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("results", ctx_r26.getStepsMonthlyBar)("view", ctx_r26.view)("scheme", ctx_r26.colorScheme)("schemeType", ctx_r26.schemeType)("gradient", ctx_r26.gradient)("xAxis", ctx_r26.xAxis)("yAxis", ctx_r26.yAxis)("legend", ctx_r26.legend)("showXAxisLabel", ctx_r26.showXAxisLabel)("showYAxisLabel", ctx_r26.showYAxisLabel)("xAxisLabel", ctx_r26.getStepsMonthlylable)("yAxisLabel", ctx_r26.getStepsMonthlylable)("legendTitle", ctx_r26.legendTitle)("legendPosition", ctx_r26.legendPosition)("animations", ctx_r26.animations)("showGridLines", ctx_r26.showGridLines)("trimXAxisTicks", ctx_r26.trimXAxisTicks)("trimYAxisTicks", ctx_r26.trimYAxisTicks)("rotateXAxisTicks", ctx_r26.rotateXAxisTicks)("maxXAxisTickLength", ctx_r26.maxXAxisTickLength)("maxYAxisTickLength", ctx_r26.maxYAxisTickLength)("xAxisTickFormatting", ctx_r26.formatString)("yAxisTickFormatting", ctx_r26.formatNumber)("yAxisTicks", ctx_r26.yAxisTicks_steps)("showDataLabel", ctx_r26.showDataLabel)("barPadding", ctx_r26.barPadding)("tooltipDisabled", ctx_r26.tooltipDisabled)("roundEdges", ctx_r26.roundEdges);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("results", ctx_r26.getSleepDailyBar)("view", ctx_r26.view)("scheme", ctx_r26.colorScheme)("schemeType", ctx_r26.schemeType)("gradient", ctx_r26.gradient)("xAxis", ctx_r26.xAxis)("yAxis", ctx_r26.yAxis)("legend", ctx_r26.legend)("showXAxisLabel", ctx_r26.showXAxisLabel)("showYAxisLabel", ctx_r26.showYAxisLabel)("xAxisLabel", ctx_r26.getSleepDailylable)("yAxisLabel", ctx_r26.getSleepDailylable)("legendTitle", ctx_r26.legendTitle)("legendPosition", ctx_r26.legendPosition)("animations", ctx_r26.animations)("showGridLines", ctx_r26.showGridLines)("trimXAxisTicks", ctx_r26.trimXAxisTicks)("trimYAxisTicks", ctx_r26.trimYAxisTicks)("rotateXAxisTicks", ctx_r26.rotateXAxisTicks)("maxXAxisTickLength", ctx_r26.maxXAxisTickLength)("maxYAxisTickLength", ctx_r26.maxYAxisTickLength)("xAxisTickFormatting", ctx_r26.formatString)("yAxisTickFormatting", ctx_r26.formatNumber)("yAxisTicks", ctx_r26.yAxisTicks_sleep)("showDataLabel", ctx_r26.showDataLabel)("barPadding", ctx_r26.barPadding)("tooltipDisabled", ctx_r26.tooltipDisabled)("roundEdges", ctx_r26.roundEdges);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("results", ctx_r26.getSleepMonthlyBar)("view", ctx_r26.view)("scheme", ctx_r26.colorScheme)("schemeType", ctx_r26.schemeType)("gradient", ctx_r26.gradient)("xAxis", ctx_r26.xAxis)("yAxis", ctx_r26.yAxis)("legend", ctx_r26.legend)("showXAxisLabel", ctx_r26.showXAxisLabel)("showYAxisLabel", ctx_r26.showYAxisLabel)("xAxisLabel", ctx_r26.getSleepMonthlylable)("yAxisLabel", ctx_r26.getSleepMonthlylable)("legendTitle", ctx_r26.legendTitle)("legendPosition", ctx_r26.legendPosition)("animations", ctx_r26.animations)("showGridLines", ctx_r26.showGridLines)("trimXAxisTicks", ctx_r26.trimXAxisTicks)("trimYAxisTicks", ctx_r26.trimYAxisTicks)("rotateXAxisTicks", ctx_r26.rotateXAxisTicks)("maxXAxisTickLength", ctx_r26.maxXAxisTickLength)("maxYAxisTickLength", ctx_r26.maxYAxisTickLength)("xAxisTickFormatting", ctx_r26.formatString)("yAxisTickFormatting", ctx_r26.formatNumber)("yAxisTicks", ctx_r26.yAxisTicks_sleep)("showDataLabel", ctx_r26.showDataLabel)("barPadding", ctx_r26.barPadding)("tooltipDisabled", ctx_r26.tooltipDisabled)("roundEdges", ctx_r26.roundEdges);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("results", ctx_r26.getHeartDailyBar)("view", ctx_r26.view)("scheme", ctx_r26.colorScheme)("schemeType", ctx_r26.schemeType)("gradient", ctx_r26.gradient)("xAxis", ctx_r26.xAxis)("yAxis", ctx_r26.yAxis)("legend", ctx_r26.legend)("showXAxisLabel", ctx_r26.showXAxisLabel)("showYAxisLabel", ctx_r26.showYAxisLabel)("xAxisLabel", ctx_r26.getHeartDailylable)("yAxisLabel", ctx_r26.getHeartDailylable)("legendTitle", ctx_r26.legendTitle)("legendPosition", ctx_r26.legendPosition)("animations", ctx_r26.animations)("showGridLines", ctx_r26.showGridLines)("trimXAxisTicks", ctx_r26.trimXAxisTicks)("trimYAxisTicks", ctx_r26.trimYAxisTicks)("rotateXAxisTicks", ctx_r26.rotateXAxisTicks)("maxXAxisTickLength", ctx_r26.maxXAxisTickLength)("maxYAxisTickLength", ctx_r26.maxYAxisTickLength)("xAxisTickFormatting", ctx_r26.formatString)("yAxisTickFormatting", ctx_r26.formatNumber)("yAxisTicks", ctx_r26.yAxisTicks_heart)("showDataLabel", ctx_r26.showDataLabel)("barPadding", ctx_r26.barPadding)("tooltipDisabled", ctx_r26.tooltipDisabled)("roundEdges", ctx_r26.roundEdges);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("results", ctx_r26.getHeartMonthlyBar)("view", ctx_r26.view)("scheme", ctx_r26.colorScheme)("schemeType", ctx_r26.schemeType)("gradient", ctx_r26.gradient)("xAxis", ctx_r26.xAxis)("yAxis", ctx_r26.yAxis)("legend", ctx_r26.legend)("showXAxisLabel", ctx_r26.showXAxisLabel)("showYAxisLabel", ctx_r26.showYAxisLabel)("xAxisLabel", ctx_r26.getHeartMonthlylable)("yAxisLabel", ctx_r26.getHeartMonthlylable)("legendTitle", ctx_r26.legendTitle)("legendPosition", ctx_r26.legendPosition)("animations", ctx_r26.animations)("showGridLines", ctx_r26.showGridLines)("trimXAxisTicks", ctx_r26.trimXAxisTicks)("trimYAxisTicks", ctx_r26.trimYAxisTicks)("rotateXAxisTicks", ctx_r26.rotateXAxisTicks)("maxXAxisTickLength", ctx_r26.maxXAxisTickLength)("maxYAxisTickLength", ctx_r26.maxYAxisTickLength)("xAxisTickFormatting", ctx_r26.formatString)("yAxisTickFormatting", ctx_r26.formatNumber)("yAxisTicks", ctx_r26.yAxisTicks_heart)("showDataLabel", ctx_r26.showDataLabel)("barPadding", ctx_r26.barPadding)("tooltipDisabled", ctx_r26.tooltipDisabled)("roundEdges", ctx_r26.roundEdges);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r26.selectedType == "Bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r26.selectedType == "Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r26.mealData);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r26.mealData);
  }
}

function MobileUserDetailsComponent_div_0_div_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, MobileUserDetailsComponent_div_0_div_97_div_1_Template, 144, 420, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngxPermissionsOnly", "canViewAppUserContactInfo");
  }
}

function MobileUserDetailsComponent_div_0_div_133_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function MobileUserDetailsComponent_div_0_div_133_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r103);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return ctx_r102.router.navigateByUrl("/plans/templates/user/" + (ctx_r102.userDetails == null ? null : ctx_r102.userDetails.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "MEALS_PLAN.CHOOSE_FROM_TEMPLATE"), " ");
  }
}

function MobileUserDetailsComponent_div_0_div_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, MobileUserDetailsComponent_div_0_div_133_button_1_Template, 3, 3, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngxPermissionsOnly", "canAssignMealPlanToAppUsers");
  }
}

function MobileUserDetailsComponent_div_0_div_139_p_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function MobileUserDetailsComponent_div_0_div_139_p_1_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r108);
      const template_r106 = restoredCtx.$implicit;
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return ctx_r107.deleteMealPlan(template_r106.mealPlanId, ctx_r107.userDetails.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const template_r106 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](2, 2, template_r106.startDate, "dd/MM"), " ", template_r106.templateName, " ");
  }
}

function MobileUserDetailsComponent_div_0_div_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, MobileUserDetailsComponent_div_0_div_139_p_1_Template, 6, 5, "p", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const templates_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", templates_r104);
  }
}

function MobileUserDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, MobileUserDetailsComponent_div_0_div_1_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, MobileUserDetailsComponent_div_0_div_2_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div")(4, "div", 8)(5, "div", 9)(6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](7, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, MobileUserDetailsComponent_div_0_span_9_Template, 4, 3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](13, MobileUserDetailsComponent_div_0_div_13_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "div", 15)(15, "div", 16)(16, "p", 17)(17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "span", 17)(24, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](30, MobileUserDetailsComponent_div_0_div_30_Template, 15, 14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "div")(32, "div", 21)(33, "span", 22)(34, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](39, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](40, "span", 22)(41, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](46, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](47, "span", 22)(48, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](51, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](53, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](54, "div", 25)(55, "span")(56, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](59, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](61, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](62, "span")(63, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](66, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](68, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](69, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](70, "span")(71, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](73, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](76, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](77, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](78, "span")(79, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](81, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](82, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](84, "span")(85, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](87, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](88, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](90, "span")(91, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](93, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](94, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](96, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](97, MobileUserDetailsComponent_div_0_div_97_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](98, "div", 28)(99, "div", 29)(100, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](102, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](103, "div")(104, "div", 31)(105, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](107, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](108, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](110, "arrayToString");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](111, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](112, "div", 31)(113, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](115, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](116, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](118, "arrayToString");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](119, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](120, "div", 31)(121, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](122);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](123, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](124, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](125);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](126, "arrayToString");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](127, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](128, "div", 34)(129, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function MobileUserDetailsComponent_div_0_Template_button_click_129_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r110);
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return ctx_r109.openMoreDetailsDialog();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](131, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](132, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](133, MobileUserDetailsComponent_div_0_div_133_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](134, "div", 29)(135, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](136);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](137, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](138, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](139, MobileUserDetailsComponent_div_0_div_139_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](140, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](141, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    let tmp_6_0;
    let tmp_32_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r0.userDetails == null ? null : ctx_r0.userDetails.isBanned);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngxPermissionsOnly", "canAssignPremiumFeaturesToAppUsers");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("imageUrl", ctx_r0.userDetails == null ? null : ctx_r0.userDetails.profileImage)("alt", ctx_r0.userDetails == null ? null : ctx_r0.userDetails.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r0.userDetails.isManuallySubscribed);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("matTooltip", ctx_r0.userDetails == null ? null : ctx_r0.userDetails.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", (tmp_6_0 = ctx_r0.userDetails == null ? null : ctx_r0.userDetails.name) !== null && tmp_6_0 !== undefined ? tmp_6_0 : _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](12, 45, "SHARED.NOT_AVAILABLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngxPermissionsOnly", "canBanAppUsers");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("matTooltip", ctx_r0.userDetails == null ? null : ctx_r0.userDetails.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](19, 47, "MOBILE_USERS.GENDER"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"]((ctx_r0.userDetails == null ? null : ctx_r0.userDetails.gender) ? ctx_r0.userDetails == null ? null : ctx_r0.userDetails.gender : _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](22, 49, "SHARED.NOT_AVAILABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("matTooltip", ctx_r0.userDetails == null ? null : ctx_r0.userDetails.age == null ? null : ctx_r0.userDetails.age.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](26, 51, "MOBILE_USERS.AGE"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"]((ctx_r0.userDetails == null ? null : ctx_r0.userDetails.age) ? ctx_r0.userDetails == null ? null : ctx_r0.userDetails.age : _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](29, 53, "SHARED.NOT_AVAILABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngxPermissionsOnly", "canViewAppUserContactInfo");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](36, 55, "MOBILE_USERS.HEIGHT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r0.userDetails == null ? null : ctx_r0.userDetails.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](43, 57, "MOBILE_USERS.WEIGHT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r0.userDetails == null ? null : ctx_r0.userDetails.currentWeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](50, 59, "MOBILE_USERS.WEIGHT_LOSS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ((ctx_r0.userDetails == null ? null : ctx_r0.userDetails.weightLoss) > 0 ? "+" : "") + (ctx_r0.userDetails == null ? null : ctx_r0.userDetails.weightLoss.toString()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](58, 61, "MOBILE_USERS.SIGN_UP_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](61, 63, ctx_r0.userDetails == null ? null : ctx_r0.userDetails.created, "dd-MM-YYYY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](65, 66, "MOBILE_USERS.SUBSCRIBE_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", !(ctx_r0.userDetails == null ? null : ctx_r0.userDetails.isSubscribed) ? _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](68, 68, "MOBILE_USERS.UNSUBSCRIBED") : _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](69, 70, ctx_r0.userDetails == null ? null : ctx_r0.userDetails.subscriptionDate, "dd-MM-YYYY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](73, 73, "MOBILE_USERS.PAID_AMOUNT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", (ctx_r0.userDetails == null ? null : ctx_r0.userDetails.totalPaidAmount) ? _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](76, 75, ctx_r0.userDetails == null ? null : ctx_r0.userDetails.totalPaidAmount, "1.0-2") : _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](77, 78, "SHARED.NOT_AVAILABLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](81, 80, "SOCIAL.TOTAL_COMMENTS_NUMBER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r0.userDetails == null ? null : ctx_r0.userDetails.totals.comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](87, 82, "SOCIAL.TOTAL_LIKES_NUMBER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r0.userDetails == null ? null : ctx_r0.userDetails.totals.likes);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](93, 84, "MEALS_PLAN.NUMBER_OF_I_AM_HUNGRY_CLICKED_THIS_WEEK"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"]((tmp_32_0 = ctx_r0.userDetails == null ? null : ctx_r0.userDetails.currentPlan == null ? null : ctx_r0.userDetails.currentPlan.numberOfIAmHungryClicked) !== null && tmp_32_0 !== undefined ? tmp_32_0 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r0.userDetails.isSubscribed);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](102, 86, "MOBILE_USERS.ALLERGIES_DISLIKES_RISKS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](107, 88, "MOBILE_USERS.ALLERGY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](110, 90, ctx_r0.userDetails == null ? null : ctx_r0.userDetails.allergies, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](111, 93, "SHARED.NOT_AVAILABLE")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](115, 95, "MOBILE_USERS.DISLIKE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](118, 97, ctx_r0.userDetails == null ? null : ctx_r0.userDetails.dislikes, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](119, 100, "SHARED.NOT_AVAILABLE")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](123, 102, "MOBILE_USERS.RISKS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](126, 104, ctx_r0.userDetails == null ? null : ctx_r0.userDetails.userRisks, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](127, 107, "SHARED.NOT_AVAILABLE")));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](131, 109, "MOBILE_USERS.MORE_INFO_LABEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r0.userDetails == null ? null : ctx_r0.userDetails.isSubscribed);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](137, 111, "MEALS_PLAN.LAST_USED_TEMPLATES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r0.userDetails == null ? null : ctx_r0.userDetails.lastUsedTemplates);
  }
}

function MobileUserDetailsComponent_ng_template_1_div_0_ng_template_3_Template(rf, ctx) {}

function MobileUserDetailsComponent_ng_template_1_div_0_ng_template_4_Template(rf, ctx) {}

function MobileUserDetailsComponent_ng_template_1_div_0_ng_template_5_Template(rf, ctx) {}

function MobileUserDetailsComponent_ng_template_1_div_0_ng_template_7_Template(rf, ctx) {}

function MobileUserDetailsComponent_ng_template_1_div_0_ng_template_8_Template(rf, ctx) {}

function MobileUserDetailsComponent_ng_template_1_div_0_ng_template_9_Template(rf, ctx) {}

const _c1 = function (a0, a1) {
  return {
    meal: a0,
    mealType: a1
  };
};

function MobileUserDetailsComponent_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "div", 140)(2, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, MobileUserDetailsComponent_ng_template_1_div_0_ng_template_3_Template, 0, 0, "ng-template", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, MobileUserDetailsComponent_ng_template_1_div_0_ng_template_4_Template, 0, 0, "ng-template", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, MobileUserDetailsComponent_ng_template_1_div_0_ng_template_5_Template, 0, 0, "ng-template", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, MobileUserDetailsComponent_ng_template_1_div_0_ng_template_7_Template, 0, 0, "ng-template", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, MobileUserDetailsComponent_ng_template_1_div_0_ng_template_8_Template, 0, 0, "ng-template", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, MobileUserDetailsComponent_ng_template_1_div_0_ng_template_9_Template, 0, 0, "ng-template", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const item_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().plan;
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](6);

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](12, _c1, item_r111[ctx_r112.currentPlanSelectedDay].mens[ctx_r112.mealTypes.Breakfast], ctx_r112.mealTypes.Breakfast));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](15, _c1, item_r111[ctx_r112.currentPlanSelectedDay].mens[ctx_r112.mealTypes.Lunch], ctx_r112.mealTypes.Lunch));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](18, _c1, item_r111[ctx_r112.currentPlanSelectedDay].mens[ctx_r112.mealTypes.Dinner], ctx_r112.mealTypes.Dinner));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](21, _c1, item_r111[ctx_r112.currentPlanSelectedDay].mens[ctx_r112.mealTypes.Snacks], ctx_r112.mealTypes.Snacks));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](24, _c1, item_r111[ctx_r112.currentPlanSelectedDay].mens[ctx_r112.mealTypes.Supplements], ctx_r112.mealTypes.Supplements));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](27, _c1, item_r111[ctx_r112.currentPlanSelectedDay].mens[ctx_r112.mealTypes.ExtraBites], ctx_r112.mealTypes.ExtraBites));
  }
}

function MobileUserDetailsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, MobileUserDetailsComponent_ng_template_1_div_0_Template, 10, 30, "div", 139);
  }

  if (rf & 2) {
    const item_r111 = ctx.plan;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r111)("ngIfElse", _r3);
  }
}

function MobileUserDetailsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "img", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 145)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "Meal plan will be");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "shown here");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
}

function MobileUserDetailsComponent_ng_template_5_div_0_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const mealName_r127 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](mealName_r127);
  }
}

function MobileUserDetailsComponent_ng_template_5_div_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " Eaten ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

function MobileUserDetailsComponent_ng_template_5_div_0_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " Swaped ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

function MobileUserDetailsComponent_ng_template_5_div_0_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " Skipped ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

const _c2 = function () {
  return [];
};

function MobileUserDetailsComponent_ng_template_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 147)(1, "div")(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "enumKey");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, MobileUserDetailsComponent_ng_template_5_div_0_p_7_Template, 2, 1, "p", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](11, MobileUserDetailsComponent_ng_template_5_div_0_span_11_Template, 2, 0, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, MobileUserDetailsComponent_ng_template_5_div_0_span_12_Template, 2, 0, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](13, MobileUserDetailsComponent_ng_template_5_div_0_span_13_Template, 2, 0, "span", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const currentMealType_r121 = ctx_r128.mealType;
    const item_r120 = ctx_r128.meal;
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 5, "MEALS.MEALS_LABELS." + _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 7, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](6, 9, currentMealType_r121, ctx_r122.mealTypes))), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", (item_r120 == null ? null : item_r120.mealNames) || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](12, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r120 == null ? null : item_r120.isEaten);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r120 == null ? null : item_r120.isSwapped);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r120 == null ? null : item_r120.isSkipped);
  }
}

function MobileUserDetailsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, MobileUserDetailsComponent_ng_template_5_div_0_Template, 14, 13, "div", 146);
  }

  if (rf & 2) {
    const item_r120 = ctx.meal;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](6);

    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _r5 && (item_r120 == null ? null : item_r120.mealNames));
  }
}

function MobileUserDetailsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " You don't have correct Perrmission ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}

let MobileUserDetailsComponent = class MobileUserDetailsComponent {
  constructor(store, activatedRoute, router, matDialog, translateService, mobileUserService, mealPlanService, dialog) {
    this.store = store;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.matDialog = matDialog;
    this.translateService = translateService;
    this.mobileUserService = mobileUserService;
    this.mealPlanService = mealPlanService;
    this.dialog = dialog;
    this.selectedType = 'Bar';
    this.menuTypes = [];
    this.view = [700, 450]; // start-chart

    this.legendTitle = 'Days';
    this.legendTitleMulti = 'Months';
    this.legendPosition = 'right'; // ['right', 'below']

    this.legend = false;
    this.xAxis = true;
    this.yAxis = true;
    this.yAxisLabel = 'Days';
    this.showXAxisLabel = false;
    this.showYAxisLabel = true;
    this.maxXAxisTickLength = 30;
    this.maxYAxisTickLength = 30;
    this.trimXAxisTicks = false;
    this.trimYAxisTicks = false;
    this.rotateXAxisTicks = false;
    this.xAxisTicks = ['Genre 1', 'Genre 2', 'Genre 3', 'Genre 4', 'Genre 5', 'Genre 6', 'Genre 7'];
    this.xAxisTicks_meal = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Supplement', 'Water', 'ExtraBites', 'Recommended'];
    this.yAxisTicks_meal_days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
    this.yAxisTicks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];
    this.yAxisTicks_sleep = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    this.yAxisTicks_period = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    this.yAxisTicks_heart = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    this.yAxisTicks_steps = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000, 29000, 30000];
    this.yAxisTicks_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.animations = true; // animations on load

    this.showGridLines = false; // grid lines

    this.showDataLabel = true; // numbers on bars

    this.gradient = false;
    this.colorScheme = {
      domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F', '#ca3427', '#399967']
    };
    this.schemeType = 'ordinal'; // 'ordinal' or 'linear'

    this.activeEntries = ['book'];
    this.barPadding = 5;
    this.tooltipDisabled = false;
    this.yScaleMax = 9000;
    this.roundEdges = true;
    this.mealTypes = _core_meals_models_meal_type_enum__WEBPACK_IMPORTED_MODULE_4__.MealType;
    this.selectedFiles = [];
    this.viewLC = [700, 450];
    this.animationsLC = true;
    this.showGridLinesLC = true;
    this.legendLC = true;
    this.legendTitleLC = "Countries";
    this.roundDomainsLC = true;
    this.xAxisLC = true;
    this.yAxisLC = true;
    this.currentPlanSelectedDay = _core_shared_models_day_of_week__WEBPACK_IMPORTED_MODULE_3__.DayOfWeek.SATURDAY;
    this.lastPlanSelectedDay = _core_shared_models_day_of_week__WEBPACK_IMPORTED_MODULE_3__.DayOfWeek.SATURDAY;
    this.displayedColumns = ['title', 'notes', 'date', 'action'];
    Object.assign(this, {
      productSales: products__WEBPACK_IMPORTED_MODULE_11__.productSales,
      productSalesMulti: products__WEBPACK_IMPORTED_MODULE_11__.productSalesMulti,
      emoji: products__WEBPACK_IMPORTED_MODULE_11__.emoji
    });
  }

  onChange(event) {
    this.selectedType = event.target.value;
  }

  onSelect(event) {
    console.log(event);
  }

  onActivate(data) {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data) {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  formatString(input) {
    return input.toUpperCase();
  }

  formatNumber(input) {
    return input;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
      this.loadUserDetails(params['id']);
    });
    this.user$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__.untilDestroyed)(this)).subscribe(u => {
      this.userDetails = u;
    }); //.subscribe((u) => (this.userDetails = u));

    this.getAllNotes();
    this.getWaterBar();
    this.getWeghitDaily();
    this.getWeghitMonthly();
    this.getUserMood();
    this.getCurrentPlanBar();
  }

  loadUserDetails(id) {
    this.store.dispatch(new _core_store_mobile_users_mobile_user_actions__WEBPACK_IMPORTED_MODULE_2__.MobileUserActions.LoadUserDetails(id));
  }

  openMoreDetailsDialog() {
    this.matDialog.open(_sub_mobile_user_more_info_dialog_mobile_user_more_info_dialog_component__WEBPACK_IMPORTED_MODULE_5__.MobileUserMoreInfoDialogComponent, {
      data: {
        userId: this.userId
      },
      direction: this.translateService.dir
    });
  }

  banUser(id) {
    this.matDialog.open(_core_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialogComponent, {}).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.switchMap)(response => {
      if (response) {
        this.mobileUserService.ban(id).subscribe(result => {
          if (result.statusCode == 200) {
            if (result.done == true) {
              this.userDetails.isBanned = true;
            }
          }
        });
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)(false);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__.untilDestroyed)(this)).subscribe();
  }

  unBanUser(id) {
    this.matDialog.open(_core_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialogComponent, {}).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.switchMap)(response => {
      if (response) {
        this.mobileUserService.unBan(id).subscribe(result => {
          if (result.statusCode == 200) {
            if (result.done == true) {
              this.userDetails.isBanned = false;
            }
          }
        });
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)(false);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__.untilDestroyed)(this)).subscribe();
  }

  deleteMealPlan(mealPlanId, userId) {
    var _this = this;

    this.matDialog.open(_core_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialogComponent, {}).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.switchMap)(d => {
      if (d) {
        return this.mealPlanService.delete(mealPlanId.toString()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.tap)( /*#__PURE__*/(0,F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield _this.loadUserDetails(_this.userId);
        })));
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)(false);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__.untilDestroyed)(this)).subscribe();
  }

  openMakePremiumDialog() {
    const makePremiumDialog = this.matDialog.open(_sub_make_premium_make_premium_component__WEBPACK_IMPORTED_MODULE_7__.MakePremiumComponent, {
      data: {
        userId: this.userId
      },
      direction: this.translateService.dir
    });
    makePremiumDialog.afterClosed().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__.untilDestroyed)(this)).subscribe(success => {
      if (!success) {
        return;
      }

      this.loadUserDetails(this.userId);
    });
  }

  openDialog() {
    this.dialog.open(_sub_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__.DialogComponent, {
      width: "50%",
      data: {
        userId: this.userId
      },
      direction: this.translateService.dir
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getAllNotes();
      }
    });
  }

  getAllNotes() {
    this.mobileUserService.getUserNotes(this.userId).subscribe({
      next: res => {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: err => {
        alert("Error while fetching the Records");
      }
    });
  }

  getUserDocuments() {
    this.mobileUserService.getFiles(this.userId).subscribe({
      next: res => {
        console.log(res.data);
      },
      error: err => {
        alert("Error while fetching the Records");
      }
    });
  }

  editNote(row) {
    this.dialog.open(_sub_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__.DialogComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getAllNotes();
      }
    });
  }

  uploadDocument(row) {
    this.dialog.open(_sub_upload_document_dialog_upload_document_dialog_component__WEBPACK_IMPORTED_MODULE_9__.UploadDocumentDialogComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(val => {});
  }

  userDocuments() {
    this.dialog.open(_sub_user_documents_dialog_user_documents_dialog_component__WEBPACK_IMPORTED_MODULE_10__.UserDocumentsDialogComponent, {
      width: '50%'
    }).afterClosed().subscribe(val => {});
  }

  deleteNote(id) {
    var _this2 = this;

    this.matDialog.open(_core_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialogComponent, {}).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.switchMap)(d => {
      if (d) {
        return this.mobileUserService.deleteNote(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.tap)( /*#__PURE__*/(0,F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield _this2.getAllNotes();
        })));
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)(false);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__.untilDestroyed)(this)).subscribe();
  }

  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getWaterBar() {
    this.mobileUserService.getWaterBar(this.userId).subscribe({
      next: res => {
        this.getWatertype = res.data.type;
        this.getWaterlable = res.data.lable;
        this.getWaterBare = res.data.data;
      },
      error: err => {
        alert("Error while fetching the Records");
      }
    });
  }

  getWeghitMonthly() {
    this.mobileUserService.getWeghitMonthlyBar(this.userId).subscribe({
      next: res => {
        console.log(res.data[7].data);
        this.getWeghitMonthlytype = res.data[0].type;
        this.getWeghitMonthlylable = res.data[0].lable;
        this.getWeghitMonthlyBar = res.data[0].data;
        this.getBustMonthlytype = res.data[1].type;
        this.getBustMonthlylable = res.data[1].lable;
        this.getBustMonthlyBar = res.data[1].data;
        this.getWaistMonthlytype = res.data[2].type;
        this.getWaistMonthlylable = res.data[2].lable;
        this.getWaistMonthlyBar = res.data[2].data;
        this.getHipsMonthlytype = res.data[3].type;
        this.getHipsMonthlylable = res.data[3].lable;
        this.getHipsMonthlyBar = res.data[3].data;
        this.getStepsMonthlytype = res.data[4].type;
        this.getStepsMonthlylable = res.data[4].lable;
        this.getStepsMonthlyBar = res.data[4].data;
        this.getSleepMonthlytype = res.data[5].type;
        this.getSleepMonthlylable = res.data[5].lable;
        this.getSleepMonthlyBar = res.data[5].data;
        this.getHeartMonthlytype = res.data[6].type;
        this.getHeartMonthlylable = res.data[6].lable;
        this.getHeartMonthlyBar = res.data[6].data;
        this.getPeriodMonthlytype = res.data[7].type;
        this.getPeriodMonthlylable = res.data[7].lable;
        this.getPeriodMonthlyBar = res.data[7].data;
      },
      error: err => {
        alert("Error while fetching the Records");
      }
    });
  }

  getWeghitDaily() {
    this.mobileUserService.getWeghitDailyBar(this.userId).subscribe({
      next: res => {
        this.getWeghitDailytype = res.data[0].type;
        this.getWeghitDailylable = res.data[0].lable;
        this.getWeghitDailyBar = res.data[0].data;
        this.getBustDailytype = res.data[1].type;
        this.getBustDailylable = res.data[1].lable;
        this.getBustDailyBar = res.data[1].data;
        this.getWaistDailytype = res.data[2].type;
        this.getWaistDailylable = res.data[2].lable;
        this.getWaistDailyBar = res.data[2].data;
        this.getHipsDailytype = res.data[3].type;
        this.getHipsDailylable = res.data[3].lable;
        this.getHipsDailyBar = res.data[3].data;
        this.getStepsDailytype = res.data[4].type;
        this.getStepsDailylable = res.data[4].lable;
        this.getStepsDailyBar = res.data[4].data;
        this.getSleepDailytype = res.data[5].type;
        this.getSleepDailylable = res.data[5].lable;
        this.getSleepDailyBar = res.data[5].data;
        this.getHeartDailytype = res.data[6].type;
        this.getHeartDailylable = res.data[6].lable;
        this.getHeartDailyBar = res.data[6].data;
        this.getPeriodDailytype = res.data[7].type;
        this.getPeriodDailylable = res.data[7].lable;
        this.getPeriodDailyBar = res.data[7].data;
      },
      error: err => {
        alert("Error while fetching the Records");
      }
    });
  }

  getUserMood() {
    this.mobileUserService.getUserMood(this.userId).subscribe({
      next: res => {
        this.userMood = res.data;
      },
      error: err => {
        alert("Error while fetching the Records");
      }
    });
  }

  getCurrentPlanBar() {
    this.mobileUserService.getCurrentPlanBar(this.userId).subscribe({
      next: res => {
        this.mealData = res.data['data'];
        console.log(this.mealData); // console.log(res.data['data'][0]);
        // console.log(res.data['data'][0].days);
        // this.getCurrentPlanBare = res.data['data'][0];
        // for (let index = 0; index < res.data['data'].length; index++) {
        //   this.days.push(res.data['data'][index].days);
        //   console.log(this.days);
        // }
        // this.days = [... this.days];
        // console.log(this.days);
        // console.log(this.days);
        // for (const i in res.data['data']) {
        //   this.days.push(res.data['data'][i].days);
        //   // this.menuTypes.push(res.data['data'][i]['meal']['menuType']);
        //   // console.log(this.menuTypes);
        // }
      },
      error: err => {
        alert("Error while fetching the Records");
      }
    });
  }

};

MobileUserDetailsComponent.ɵfac = function MobileUserDetailsComponent_Factory(t) {
  return new (t || MobileUserDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_shared__WEBPACK_IMPORTED_MODULE_12__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_mobile_users__WEBPACK_IMPORTED_MODULE_13__.MobileUserService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_meal_plan_meal_plan_service__WEBPACK_IMPORTED_MODULE_14__.MealPlanService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialog));
};

MobileUserDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
  type: MobileUserDetailsComponent,
  selectors: [["app-mobile-user-details"]],
  viewQuery: function MobileUserDetailsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSort, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 9,
  vars: 1,
  consts: [["class", "details-container m-3 p-3 bg-white", 4, "ngIf"], ["mealPlan", ""], ["noPlan", ""], ["meal", ""], ["noPermission", ""], [1, "details-container", "m-3", "p-3", "bg-white"], ["class", "w-100 alert alert-primary", 4, "ngIf"], ["class", "d-flex justify-content-end mb-2", 4, "ngxPermissionsOnly"], [1, "w-100", "user-details-header", "d-flex", "justify-content-between"], [1, "px-3", "base-info-container", "flex-fill", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "overflow-hidden", "justify-content-start", "align-items-center", "info-section"], ["appProfileImage", "", 1, "user-image", 3, "imageUrl", "alt"], ["class", "manual-subscription", 4, "ngIf"], [1, "m-0", "fw-bold", "text-truncate", 3, "matTooltip"], ["class", "m-3", 4, "ngxPermissionsOnly"], [1, "d-flex", "mx-3", "overflow-hidden", "justify-content-center", "px-2", "info-section"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-start"], [3, "matTooltip"], [1, "text-nowrap"], [1, "text-truncate"], ["class", "d-flex overflow-hidden flex-column justify-content-start align-items-start info-section", 4, "ngxPermissionsOnly"], [1, "user-measurements-container"], [1, "user-measurement-data"], [1, "user-measurement-title"], [1, "vertical-line"], [1, "w-100", "d-flex", "justify-content-between"], [1, "w-100", "d-flex", "flex-fill"], ["class", "user-meals", 4, "ngIf"], [1, "d-flex", "justify-content-start", "align-items-center", "flex-column", "w-25"], [1, "section", "user-health"], [1, "user-health-header"], [1, "user-health-details"], [1, "user-health-details-key"], [1, "user-health-details-value"], [1, "w-100", "d-flex", "justify-content-center"], [1, "nut-btn", "mb-3", "px-3", 3, "click"], [1, "p-3", "d-flex", "justify-content-between", "align-items-center"], [4, "ngIf"], ["href", "https://dashboard.kommunicate.io/", "target", "_blank", 1, "message-icon"], [1, "fas", "fa-message"], [1, "w-100", "alert", "alert-primary"], [1, "d-flex", "justify-content-end", "mb-2"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "text-white"], [1, "manual-subscription"], [1, "fa-regular", "fa-star", "manual-subscription-icon"], [1, "m-3"], ["mat-stroked-button", "", "color", "warn", "class", "mt-2", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", "color", "warn", 1, "mt-2", 3, "click"], [1, "d-flex", "overflow-hidden", "flex-column", "justify-content-start", "align-items-start", "info-section"], [1, "user-meals"], ["class", "section", 4, "ngxPermissionsOnly"], [1, "section"], [1, "w-100", "m-3"], [3, "label"], ["style", "margin-top: 30px;margin-right: 30px;", "class", "d-flex justify-content-start", 4, "ngxPermissionsOnly"], [2, "margin-right", "30px"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. Mia", 1, "m-1", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "notes"], ["matColumnDef", "date"], ["matColumnDef", "action"], ["style", "background-color: #1A1A27;", "mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], [1, "d-flex", "align-items-start", "mt-4"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills", "me-3"], ["id", "v-pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-home", "type", "button", "role", "tab", "aria-controls", "v-pills-home", "aria-selected", "true", 1, "nav-link", "active", "mb-3", 2, "background-color", "#ff725a"], [1, "fa-solid", "fa-droplet"], ["id", "v-pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-profile", "type", "button", "role", "tab", "aria-controls", "v-pills-profile", "aria-selected", "false", 1, "nav-link", "mb-3", 2, "background-color", "#ff725a"], ["aria-hidden", "true", 1, "fa", "fa-cubes"], ["id", "v-pills-messages-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-messages", "type", "button", "role", "tab", "aria-controls", "v-pills-messages", "aria-selected", "false", 1, "nav-link", "mb-3", 2, "background-color", "#ff725a"], [1, "fa-solid", "fa-weight-scale"], ["id", "v-pills-settings-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-settings", "type", "button", "role", "tab", "aria-controls", "v-pills-settings", "aria-selected", "false", 1, "nav-link", "mb-3", 2, "background-color", "#ff725a"], [1, "fa-solid", "fa-ruler"], ["id", "v-pills-steps-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-steps", "type", "button", "role", "tab", "aria-controls", "v-pills-steps", "aria-selected", "false", 1, "nav-link", "mb-3", 2, "background-color", "#ff725a"], [1, "fa-solid", "fa-shoe-prints"], ["id", "v-pills-sleep-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-sleep", "type", "button", "role", "tab", "aria-controls", "v-pills-sleep", "aria-selected", "false", 1, "nav-link", "mb-3", 2, "background-color", "#ff725a"], [1, "fa-regular", "fa-moon"], ["id", "v-pills-heart-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-heart", "type", "button", "role", "tab", "aria-controls", "v-pills-heart", "aria-selected", "false", 1, "nav-link", "mb-3", 2, "background-color", "#ff725a"], [1, "fa-solid", "fa-heart-pulse"], ["style", "background-color: #ff725a;", "style", "background-color: #ff725a;", "class", "nav-link mb-3", "id", "v-pills-period-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-period", "type", "button", "role", "tab", "aria-controls", "v-pills-period", "aria-selected", "false", 4, "ngIf"], ["id", "v-pills-meal-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-meal", "type", "button", "role", "tab", "aria-controls", "v-pills-meal", "aria-selected", "false", 1, "nav-link", "mb-3", 2, "background-color", "#ff725a"], [1, "fa-solid", "fa-utensils"], ["id", "v-pills-tabContent", 1, "tab-content"], ["id", "v-pills-home", "role", "tabpanel", "aria-labelledby", "v-pills-home-tab", 1, "tab-pane", "fade", "show", "active", "pt-2"], ["style", "margin-left: 10px;", 4, "ngIf"], ["id", "v-pills-profile", "role", "tabpanel", "aria-labelledby", "v-pills-profile-tab", 1, "tab-pane", "fade", "pt-2"], [1, "container", 2, "margin-left", "20px"], ["class", "container mb-3", 4, "ngFor", "ngForOf"], ["class", "container mb-3 ", 4, "ngFor", "ngForOf"], ["id", "v-pills-messages", "role", "tabpanel", "aria-labelledby", "v-pills-messages-tab", 1, "tab-pane", "fade", "pt-2"], ["label", "Daily"], [2, "margin-left", "10px", "margin-right", "15px"], [2, "margin-top", "20px"], [3, "results", "view", "scheme", "schemeType", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "legendTitle", "legendPosition", "animations", "showGridLines", "trimXAxisTicks", "trimYAxisTicks", "rotateXAxisTicks", "maxXAxisTickLength", "maxYAxisTickLength", "xAxisTickFormatting", "yAxisTickFormatting", "yAxisTicks", "showDataLabel", "barPadding", "tooltipDisabled", "roundEdges"], ["label", "Monthly"], ["id", "v-pills-settings", "role", "tabpanel", "aria-labelledby", "v-pills-settings-tab", 1, "tab-pane", "fade", "pt-2"], [2, "margin-left", "10px"], ["id", "v-pills-steps", "role", "tabpanel", "aria-labelledby", "v-pills-steps-tab", 1, "tab-pane", "fade", "pt-2"], ["id", "v-pills-sleep", "role", "tabpanel", "aria-labelledby", "v-pills-sleep-tab", 1, "tab-pane", "fade", "pt-2"], ["id", "v-pills-heart", "role", "tabpanel", "aria-labelledby", "v-pills-heart-tab", 1, "tab-pane", "fade", "pt-2"], ["id", "v-pills-period", "role", "tabpanel", "aria-labelledby", "v-pills-period-tab", 1, "tab-pane", "fade", "pt-2"], ["id", "v-pills-meal", "role", "tabpanel", "aria-labelledby", "v-pills-meal-tab", 1, "tab-pane", "fade", "pt-2"], [2, "margin-left", "10px", "margin-right", "20px"], [1, "d-flex", "justify-content-start", 2, "margin-top", "30px", "margin-right", "30px"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-button", "", "color", "warn", 3, "click"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", "", 2, "background-color", "#1A1A27"], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], ["id", "v-pills-period-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-period", "type", "button", "role", "tab", "aria-controls", "v-pills-period", "aria-selected", "false", 1, "nav-link", "mb-3", 2, "background-color", "#ff725a"], [1, "fa-solid", "fa-venus"], [3, "results", "view", "scheme", "schemeType", "legend", "legendTitle", "legendPosition", "animations", "tooltipDisabled"], [1, "container", "mb-3"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "card-header", "fw-bold"], [1, "card-body"], [2, "font-size", "20px"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "fw-bold", "table-warning"], [1, "text-decoration-underline"], [1, "fa-regular", "fa-clock"], [2, "color", "blue"], ["mat-flat-button", "", "color", "primary", 3, "click", 4, "ngxPermissionsOnly"], ["mat-flat-button", "", "color", "primary", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "p-3"], [1, "row"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "w-100", "h-100", "my-5", "d-flex", "justify-content-center", "align-items-center", "flex-column"], ["src", "../../../../assets/media/no-data-placeholder.png", "alt", "No Plan Yet"], [1, "d-flex", "justify-content-center", "align-items-center", "flex-column"], ["class", "col meal-container d-flex flex-column justify-content-between", 4, "ngIf"], [1, "col", "meal-container", "d-flex", "flex-column", "justify-content-between"], [1, "d-flex", "justify-content-start", "align-items-center", "flex-wrap"], ["class", "meal-badge eaten-badge", 4, "ngIf"], ["class", "meal-badge swapped-badge", 4, "ngIf"], ["class", "meal-badge skipped-badge", 4, "ngIf"], [1, "meal-badge", "eaten-badge"], [1, "meal-badge", "swapped-badge"], [1, "meal-badge", "skipped-badge"], [1, "w-100", "h-100", "d-flex", "justify-content-center", "align-content-center"]],
  template: function MobileUserDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, MobileUserDetailsComponent_div_0_Template, 142, 113, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, MobileUserDetailsComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, MobileUserDetailsComponent_ng_template_3_Template, 7, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, MobileUserDetailsComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, MobileUserDetailsComponent_ng_template_7_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.userDetails);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, ngx_permissions__WEBPACK_IMPORTED_MODULE_29__.NgxPermissionsDirective, ngx_permissions__WEBPACK_IMPORTED_MODULE_29__.NgxPermissionsRestrictStubDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButton, _shared_directives_profile_image_profile_image_directive__WEBPACK_IMPORTED_MODULE_15__.ProfileImageDirective, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltip, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTab, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_34__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginator, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_36__.BarVerticalComponent, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_36__.PieChartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgTemplateOutlet],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_28__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_28__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_28__.SlicePipe, _shared_pipes_array_to_string_pipe__WEBPACK_IMPORTED_MODULE_16__.ArrayToStringPipe, _angular_common__WEBPACK_IMPORTED_MODULE_28__.UpperCasePipe, _shared_pipes_enum_key_pipe__WEBPACK_IMPORTED_MODULE_17__.EnumKeyPipe],
  styles: [".details-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.details-container[_ngcontent-%COMP%]   .message-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  position: fixed;\n  bottom: 40px;\n  margin-inline-start: 80%;\n}\n.base-info-container[_ngcontent-%COMP%] {\n  max-width: 75%;\n}\n.base-info-container[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%] {\n  max-width: 40%;\n}\n.user-image[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  border-radius: 25px;\n  margin-inline-end: 0.3rem;\n}\n.user-measurements-container[_ngcontent-%COMP%] {\n  background: #215121;\n  border-radius: 19px;\n  padding: 5px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.vertical-line[_ngcontent-%COMP%] {\n  mix-blend-mode: normal;\n  opacity: 0.6;\n  background-color: #ffffff;\n  height: 50px;\n  width: 1px;\n}\n.section[_ngcontent-%COMP%] {\n  background: #fafafa;\n  border-radius: 19px;\n  margin: 5px 0;\n}\n.user-meals[_ngcontent-%COMP%] {\n  margin-inline-end: 0.7rem;\n  flex: 2;\n}\n.user-health[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.user-health-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem 0;\n}\n.user-health-details[_ngcontent-%COMP%] {\n  margin: 0 2rem 1rem;\n  display: flex;\n  justify-content: start;\n}\n.user-health-details[_ngcontent-%COMP%]   .user-health-details-value[_ngcontent-%COMP%] {\n  margin-inline-start: 1rem;\n}\n.user-health-details-key[_ngcontent-%COMP%] {\n  max-width: 50px;\n  min-width: 50px;\n  text-wrap: normal;\n}\n.user-measurement-data[_ngcontent-%COMP%] {\n  padding: 10px;\n  color: white;\n}\n.user-measurement-data[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.user-measurement-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.ban-user[_ngcontent-%COMP%] {\n  padding: 12px 6px;\n  width: 50%;\n  color: #c92a2a;\n  font-weight: 500;\n  border: 1px solid #c92a2a;\n  border-radius: 49px;\n  background-color: transparent;\n}\n .mat-tab-label,  .mat-tab-label-active {\n  min-width: 49% !important;\n}\n.meal-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 5px;\n  padding: 1rem;\n  background: #ffffff;\n  border-radius: 19px;\n}\n.meal-badge[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 8px 0;\n  padding-inline-end: 16px;\n  padding-inline-start: 10px;\n  margin-inline-end: 5px;\n  font-weight: 900;\n  font-size: 12px;\n  line-height: 15px;\n}\n.swapped-badge[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #ffcb51;\n}\n.eaten-badge[_ngcontent-%COMP%] {\n  background-color: #d5ded5;\n}\n.skipped-badge[_ngcontent-%COMP%] {\n  color: #c3c0c0;\n  background-color: rgba(255, 114, 90, 0.1);\n}\n.meal-breaker[_ngcontent-%COMP%] {\n  position: relative;\n  top: 90%;\n}\n.manual-subscription[_ngcontent-%COMP%] {\n  color: #215121;\n}\n.manual-subscription-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 50%;\n}\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: white;\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #1A1A27;\n}\n.imga[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYmlsZS11c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFDSjtBQUdBO0VBQ0UsY0FBQTtBQUFGO0FBRUU7RUFDRSxjQUFBO0FBQUo7QUFJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQURGO0FBSUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUZGO0FBS0E7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBRkY7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBRkY7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsT0FBQTtBQUZGO0FBS0E7RUFFRSxXQUFBO0FBSEY7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUhGO0FBTUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUhGO0FBS0U7RUFDRSx5QkFBQTtBQUhKO0FBT0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSkY7QUFPQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBSkY7QUFNRTtFQUNFLGtCQUFBO0FBSko7QUFRQTtFQUNFLG1CQUFBO0FBTEY7QUFRQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUxGO0FBUUE7O0VBRUUseUJBQUE7QUFMRjtBQVFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFMRjtBQVNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFORjtBQVNBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FBTkY7QUFTQTtFQUVFLHlCQUFBO0FBUEY7QUFVQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtBQVBGO0FBVUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUFQRjtBQVVBO0VBQ0UsY0FBQTtBQVBGO0FBVUE7RUFDRSxpQkFBQTtBQVBGO0FBVUE7RUFDRSxXQUFBO0FBUEY7QUFVQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBUEY7QUFVQTtFQUNFLFlBQUE7QUFQRjtBQVVBO0VBQ0UsWUFBQTtBQVBGO0FBVUE7RUFDRSxjQUFBO0FBUEY7QUFVQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBUEYiLCJmaWxlIjoibW9iaWxlLXVzZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAubWVzc2FnZS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiA0MHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogODAlXHJcbiAgfVxyXG59XHJcblxyXG4uYmFzZS1pbmZvLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA3NSU7XHJcblxyXG4gIC5pbmZvLXNlY3Rpb24ge1xyXG4gICAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgfVxyXG59XHJcblxyXG4udXNlci1pbWFnZSB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDAuM3JlbTtcclxufVxyXG5cclxuLnVzZXItbWVhc3VyZW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogIzIxNTEyMTtcclxuICBib3JkZXItcmFkaXVzOiAxOXB4O1xyXG5cclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1saW5lIHtcclxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMXB4O1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICBib3JkZXItcmFkaXVzOiAxOXB4O1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi51c2VyLW1lYWxzIHtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMC43cmVtO1xyXG4gIGZsZXg6IDI7XHJcbn1cclxuXHJcbi51c2VyLWhlYWx0aCB7XHJcbiAgLy9taW4taGVpZ2h0OiAzMyU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi51c2VyLWhlYWx0aC1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbn1cclxuXHJcbi51c2VyLWhlYWx0aC1kZXRhaWxzIHtcclxuICBtYXJnaW46IDAgMnJlbSAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuXHJcbiAgLnVzZXItaGVhbHRoLWRldGFpbHMtdmFsdWUge1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi51c2VyLWhlYWx0aC1kZXRhaWxzLWtleSB7XHJcbiAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gIG1pbi13aWR0aDogNTBweDtcclxuICB0ZXh0LXdyYXA6IG5vcm1hbDtcclxufVxyXG5cclxuLnVzZXItbWVhc3VyZW1lbnQtZGF0YSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICY+KiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4udXNlci1tZWFzdXJlbWVudC10aXRsZSB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmJhbi11c2VyIHtcclxuICBwYWRkaW5nOiAxMnB4IDZweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGNvbG9yOiAjYzkyYTJhO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2M5MmEyYTtcclxuICBib3JkZXItcmFkaXVzOiA0OXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXRhYi1sYWJlbCxcclxuOjpuZy1kZWVwLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICBtaW4td2lkdGg6IDQ5JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVhbC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTlweDtcclxuICAvL2hlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5tZWFsLWJhZGdlIHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogOHB4IDA7XHJcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAxNnB4O1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxMHB4O1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zd2FwcGVkLWJhZGdlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2I1MTtcclxufVxyXG5cclxuLmVhdGVuLWJhZGdlIHtcclxuICAvL2NvbG9yOiAnYmxhY2ssXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZGVkNTtcclxufVxyXG5cclxuLnNraXBwZWQtYmFkZ2Uge1xyXG4gIGNvbG9yOiAjYzNjMGMwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMTQsIDkwLCAwLjEpO1xyXG59XHJcblxyXG4ubWVhbC1icmVha2VyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA5MCU7XHJcbn1cclxuXHJcbi5tYW51YWwtc3Vic2NyaXB0aW9uIHtcclxuICBjb2xvcjogIzIxNTEyMTtcclxufVxyXG5cclxuLm1hbnVhbC1zdWJzY3JpcHRpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgY29sb3I6IHdoaXRlXHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMUExQTI3O1xyXG59XHJcblxyXG4uaW1nYSB7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG59Il19 */"]
});

(0,tslib__WEBPACK_IMPORTED_MODULE_38__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Select)(state => state.mobileUsers.lastLoadedUser)], MobileUserDetailsComponent.prototype, "user$", void 0);

MobileUserDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_38__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__.UntilDestroy)()], MobileUserDetailsComponent);


/***/ }),

/***/ 83602:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/mobile-user/mobile-user-details/sub/make-premium/make-premium.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakePremiumComponent": () => (/* binding */ MakePremiumComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_mobile_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/mobile-users */ 63483);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 33935);













class MakePremiumComponent {
    constructor(matDialogRef, data, mobileUserService) {
        this.matDialogRef = matDialogRef;
        this.data = data;
        this.mobileUserService = mobileUserService;
        this.isLoading = false;
        this.minDateFilter = (d) => {
            const m = moment__WEBPACK_IMPORTED_MODULE_0___default()(d);
            const minDate = moment__WEBPACK_IMPORTED_MODULE_0___default()();
            return m.isAfter(minDate, 'days');
        };
    }
    ngOnInit() {
        this.makePremiumForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(moment__WEBPACK_IMPORTED_MODULE_0___default()(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(0, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                (control) => {
                    if (!Number.isInteger(control.value) || control.value < 0) {
                        return { min: true };
                    }
                    return null;
                },
            ]),
        });
    }
    makePremium() {
        if (this.makePremiumForm.invalid) {
            return;
        }
        this.isLoading = true;
        this.mobileUserService
            .makePremium({
            userId: this.data.userId,
            endDate: moment__WEBPACK_IMPORTED_MODULE_0___default()(this.makePremiumForm.value.endDate).utc().toDate(),
            amountPaid: this.makePremiumForm.value.amount,
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)((r) => {
            this.matDialogRef.close(true);
        }))
            .subscribe();
    }
    close() {
        this.matDialogRef.close(false);
    }
}
MakePremiumComponent.ɵfac = function MakePremiumComponent_Factory(t) { return new (t || MakePremiumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_mobile_users__WEBPACK_IMPORTED_MODULE_1__.MobileUserService)); };
MakePremiumComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MakePremiumComponent, selectors: [["app-make-premium"]], decls: 23, vars: 19, consts: [[3, "formGroup"], [1, "w-100"], ["matInput", "", "formControlName", "endDate", 3, "matDatepicker", "matDatepickerFilter"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "type", "number", "formControlName", "amount", "min", "1"], ["mat-raised-button", "", "color", "primary", 1, "margin-end-3", 3, "disabled", "click"], [1, "text-white"], ["mat-raised-button", "", 3, "disabled", "matDialogClose"]], template: function MakePremiumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "form", 0)(2, "mat-form-field", 1)(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 2)(7, "mat-datepicker-toggle", 3)(8, "mat-datepicker", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-form-field", 1)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div")(16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MakePremiumComponent_Template_button_click_16_listener() { return ctx.makePremium(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.makePremiumForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 11, "MOBILE_USERS.END_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r0)("matDatepickerFilter", ctx.minDateFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 13, "MOBILE_USERS.AMOUNT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.makePremiumForm.invalid || ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 15, "MOBILE_USERS.MAKE_PREMIUM"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isLoading)("matDialogClose", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 17, "SHARED.CANCEL"), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWtlLXByZW1pdW0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 51634:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/mobile-user/mobile-user-details/sub/mobile-user-more-info-dialog/mobile-user-more-info-dialog.component.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileUserMoreInfoDialogComponent": () => (/* binding */ MobileUserMoreInfoDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_mobile_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/mobile-users */ 63483);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);







function MobileUserMoreInfoDialogComponent_div_0_div_72_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14)(4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const file_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](file_r3.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", file_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("download", file_r3.fileName);
} }
function MobileUserMoreInfoDialogComponent_div_0_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MobileUserMoreInfoDialogComponent_div_0_div_72_div_1_Template, 6, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.userPersonalData.files);
} }
function MobileUserMoreInfoDialogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1)(5, "div", 2)(6, "div")(7, "p")(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p")(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p")(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p")(30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p")(37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p")(45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p")(53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p")(61, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](63, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 4)(68, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, MobileUserMoreInfoDialogComponent_div_0_div_72_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 8)(74, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](76, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 21, "MOBILE_USERS.PERSONAL_DETAILS.LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 23, "MOBILE_USERS.PERSONAL_DETAILS.TARGET_WEIGHT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userPersonalData.targetWeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 25, "MOBILE_USERS.PERSONAL_DETAILS.AVERAGE_MEALS_PER_DAY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userPersonalData.numberOfMealsPerDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 27, "MOBILE_USERS.PERSONAL_DETAILS.ACTIVITY_LEVEL_LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 29, "MOBILE_USERS.PERSONAL_DETAILS.ACTIVITY_LEVEL_ENUM." + ctx_r0.userPersonalData.activityLevel));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 31, "MOBILE_USERS.PERSONAL_DETAILS.MEDICATIONS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userPersonalData.medicineNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 33, "MOBILE_USERS.PERSONAL_DETAILS.MAIN_EATING_TARGET_LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 35, "MOBILE_USERS.PERSONAL_DETAILS.MAIN_EATING_TARGET_ENUM." + ctx_r0.userPersonalData.eatReason));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 37, "MOBILE_USERS.PERSONAL_DETAILS.REGULAR_PERIOD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 39, "SHARED." + (ctx_r0.userPersonalData.isRegularMeasurer ? "YES" : "NO")));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 41, "MOBILE_USERS.PERSONAL_DETAILS.PREGNANCY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 43, "SHARED." + (ctx_r0.userPersonalData.hasBaby ? "YES" : "NO")));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](63, 45, "MOBILE_USERS.PERSONAL_DETAILS.NUTRISHA_GOAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userPersonalData.goal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](70, 47, "MOBILE_USERS.PERSONAL_DETAILS.FILES_UPLOADED_LABEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.userPersonalData == null ? null : ctx_r0.userPersonalData.files);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](76, 49, "SHARED.CLOSE"), " ");
} }
class MobileUserMoreInfoDialogComponent {
    constructor(
    // private httpClient: HttpClient,
    matDialogRef, data, mobileUserService) {
        this.matDialogRef = matDialogRef;
        this.data = data;
        this.mobileUserService = mobileUserService;
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.mobileUserService
            .getUserPersonalDetails(this.data.userId)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this._unsubscribe), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)((result) => {
            this.userPersonalData = result.data;
        }))
            .subscribe();
    }
    ngOnDestroy() {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    }
}
MobileUserMoreInfoDialogComponent.ɵfac = function MobileUserMoreInfoDialogComponent_Factory(t) { return new (t || MobileUserMoreInfoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_mobile_users__WEBPACK_IMPORTED_MODULE_0__.MobileUserService)); };
MobileUserMoreInfoDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MobileUserMoreInfoDialogComponent, selectors: [["app-mobile-user-more-info-dialog"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "section", "mb-2"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-2", "margin-end-4"], [1, "details"], [1, "w-50", "h-100"], [1, "mb-2"], [1, "file-list"], ["class", "p-2", 4, "ngIf"], [1, "d-flex", "justify-content-center"], [1, "nut-btn", "px-5", "py-2", 3, "mat-dialog-close"], [1, "p-2"], ["class", "d-flex justify-content-between align-items-center", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-truncate"], [1, "d-flex"], [3, "href", "download"], [1, "fa", "fa-download"]], template: function MobileUserMoreInfoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MobileUserMoreInfoDialogComponent_div_0_Template, 77, 51, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userPersonalData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: [".file-list[_ngcontent-%COMP%] {\n  border: 2px solid #cfd4dd;\n  border-radius: 5px;\n  min-height: 50%;\n  min-width: 50%;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.section[_ngcontent-%COMP%] {\n  background: #fafafa;\n  border-radius: 19px;\n  padding: 10px;\n  min-height: 50%;\n}\n\n.details[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYmlsZS11c2VyLW1vcmUtaW5mby1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUYiLCJmaWxlIjoibW9iaWxlLXVzZXItbW9yZS1pbmZvLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLWxpc3Qge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjZmQ0ZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDUwJTtcclxuICBtaW4td2lkdGg6IDUwJTtcclxuXHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE5cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtaW4taGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 68061:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/mobile-user/mobile-user-list/mobile-user-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileUserListComponent": () => (/* binding */ MobileUserListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _core_store_mobile_users_mobile_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/store/mobile-users/mobile-user.actions */ 60507);
/* harmony import */ var _core_shared_models_paged_list_query_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/models/paged-list-query.model */ 3654);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _shared_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/list-header/list-header.component */ 29813);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _shared_directives_profile_image_profile_image_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/directives/profile-image/profile-image.directive */ 13468);
/* harmony import */ var _shared_no_data_placeholder_no_data_placeholder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/no-data-placeholder/no-data-placeholder.component */ 30947);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 33935);



















function MobileUserListComponent_div_13_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "th", 21);
  }
}

function MobileUserListComponent_div_13_td_4_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 26);
  }
}

function MobileUserListComponent_div_13_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, MobileUserListComponent_div_13_td_4_i_3_Template, 1, 0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("alt", element_r17.name)("imageUrl", element_r17.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", element_r17.isManuallySubscribed);
  }
}

function MobileUserListComponent_div_13_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "MOBILE_USERS.NAME"), " ");
  }
}

function MobileUserListComponent_div_13_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = element_r19.name) !== null && tmp_0_0 !== undefined ? tmp_0_0 : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "SHARED.NOT_AVAILABLE"), " ");
  }
}

function MobileUserListComponent_div_13_ng_container_8_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "MOBILE_USERS.EMAIL"), " ");
  }
}

function MobileUserListComponent_div_13_ng_container_8_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r22.email ? element_r22.email : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "SHARED.NOT_AVAILABLE"), " ");
  }
}

function MobileUserListComponent_div_13_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MobileUserListComponent_div_13_ng_container_8_th_1_Template, 3, 3, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MobileUserListComponent_div_13_ng_container_8_td_2_Template, 3, 3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}

function MobileUserListComponent_div_13_ng_container_9_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "MOBILE_USERS.PHONE_NUMBER"), " ");
  }
}

function MobileUserListComponent_div_13_ng_container_9_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r25.phoneNumber ? element_r25.phoneNumber : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "SHARED.NOT_AVAILABLE"), " ");
  }
}

function MobileUserListComponent_div_13_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MobileUserListComponent_div_13_ng_container_9_th_1_Template, 3, 3, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MobileUserListComponent_div_13_ng_container_9_td_2_Template, 3, 3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}

function MobileUserListComponent_div_13_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "SHARED.CREATED"), " ");
  }
}

function MobileUserListComponent_div_13_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, element_r26.created, "dd-MM-YYYY"), " ");
  }
}

function MobileUserListComponent_div_13_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "MOBILE_USERS.SUBSCRIBE_DATE"), " ");
  }
}

function MobileUserListComponent_div_13_td_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "MOBILE_USERS.SUBSCRIBED_ON"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 4, element_r27.subscriptionDate, "dd-MM-YYYY"), " ");
  }
}

function MobileUserListComponent_div_13_td_15_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "MOBILE_USERS.UNSUBSCRIBED"));
  }
}

function MobileUserListComponent_div_13_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MobileUserListComponent_div_13_td_15_span_1_Template, 4, 7, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MobileUserListComponent_div_13_td_15_ng_template_2_Template, 3, 3, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r27 = ctx.$implicit;

    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", element_r27.isSubscribed)("ngIfElse", _r29);
  }
}

function MobileUserListComponent_div_13_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "MOBILE_USERS.PAID_AMOUNT"), " ");
  }
}

function MobileUserListComponent_div_13_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r32.totalPaidAmount ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, element_r32.totalPaidAmount, "1.0-2") : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, "SHARED.NOT_AVAILABLE"), " ");
  }
}

function MobileUserListComponent_div_13_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 34);
  }
}

function MobileUserListComponent_div_13_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MobileUserListComponent_div_13_tr_20_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const row_r33 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r34.goToUserDetails(row_r33.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function MobileUserListComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, MobileUserListComponent_div_13_th_3_Template, 1, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, MobileUserListComponent_div_13_td_4_Template, 4, 3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](5, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, MobileUserListComponent_div_13_th_6_Template, 3, 3, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, MobileUserListComponent_div_13_td_7_Template, 3, 3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, MobileUserListComponent_div_13_ng_container_8_Template, 3, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, MobileUserListComponent_div_13_ng_container_9_Template, 3, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](10, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, MobileUserListComponent_div_13_th_11_Template, 3, 3, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, MobileUserListComponent_div_13_td_12_Template, 3, 4, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](13, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, MobileUserListComponent_div_13_th_14_Template, 3, 3, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, MobileUserListComponent_div_13_td_15_Template, 4, 2, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](16, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, MobileUserListComponent_div_13_th_17_Template, 3, 3, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, MobileUserListComponent_div_13_td_18_Template, 4, 6, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, MobileUserListComponent_div_13_tr_19_Template, 1, 0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, MobileUserListComponent_div_13_tr_20_Template, 1, 0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "app-no-data-placeholder", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const users_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", users_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngxPermissionsOnly", "canViewAppUserContactInfo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngxPermissionsOnly", "canViewAppUserContactInfo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("classes", "my-3")("data", users_r2);
  }
}

const _c0 = function () {
  return [1, 5, 10, 25, 100];
};

let MobileUserListComponent = class MobileUserListComponent {
  constructor(store, router, permissionService) {
    this.store = store;
    this.router = router;
    this.permissionService = permissionService;
    this.displayedColumns = ['profileImage', 'name', 'email', 'phoneNumber', 'createdDate', 'subscribeDate', 'totalPaidAmount'];
    this.queryParams = new _core_shared_models_paged_list_query_model__WEBPACK_IMPORTED_MODULE_2__.PagedListQueryModel({});
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  }

  ngAfterViewInit() {
    this.search$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(150)).subscribe(searchTerm => {
      this.searchWord = searchTerm;
      this.paginator.pageIndex = 0;
      this.loadUsers();
    });
  }

  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.from)(this.permissionService.hasPermission('canViewAppUserContactInfo')).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.tap)(hasPermission => {
      if (!hasPermission) {
        this.displayedColumns = ['profileImage', 'name', 'createdDate', 'subscribeDate', 'totalPaidAmount'];
      }
    })).subscribe();
    this.loadUsers();
  }

  loadUsers() {
    this.prepareQueryParams();
    this.store.dispatch(new _core_store_mobile_users_mobile_user_actions__WEBPACK_IMPORTED_MODULE_1__.MobileUserActions.LoadMobileUsers(this.queryParams));
  }

  prepareQueryParams() {
    this.queryParams.pageNumber = this.paginator.pageIndex;
    this.queryParams.pageSize = this.paginator.pageSize;
    this.queryParams.searchWord = this.searchWord;
    this.queryParams.customFilters = this.selectedFilter ? this.queryParams.customFilters = new Map([[this.selectedFilter, true]]) : null;
  }

  goToUserDetails(id) {
    this.router.navigateByUrl(`/app/users/${id}`);
  }

};

MobileUserListComponent.ɵfac = function MobileUserListComponent_Factory(t) {
  return new (t || MobileUserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_14__.NgxPermissionsService));
};

MobileUserListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: MobileUserListComponent,
  selectors: [["app-mobile-user-list"]],
  viewQuery: function MobileUserListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    }
  },
  decls: 18,
  vars: 29,
  consts: [[1, "mat-elevation-z8", "list-container"], [3, "searchTerm", "headerTitle"], ["id", "customFilter"], [1, "custom-filter", 3, "click"], [4, "ngIf"], [3, "length", "pageSize", "pageSizeOptions", "showFirstLastButtons", "page"], ["paginator", ""], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "profileImage"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "email", 4, "ngxPermissionsOnly"], ["matColumnDef", "phoneNumber", 4, "ngxPermissionsOnly"], ["matColumnDef", "createdDate"], ["matColumnDef", "subscribeDate"], ["matColumnDef", "totalPaidAmount"], ["mat-cell", "", "class", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "mat-row-hover", 3, "click", 4, "matRowDef", "matRowDefColumns"], [3, "classes", "data"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "profile-image-container"], ["appProfileImage", "", 3, "alt", "imageUrl"], ["class", "fa-regular fa-star manual-subscription", 4, "ngIf"], [1, "fa-regular", "fa-star", "manual-subscription"], ["matColumnDef", "email"], ["matColumnDef", "phoneNumber"], ["class", "badge badge-pill subscription-badge subscribed-badge", 4, "ngIf", "ngIfElse"], ["unsub", ""], [1, "badge", "badge-pill", "subscription-badge", "subscribed-badge"], [1, "badge", "badge-pill", "subscription-badge", "unsubscribed-badge"], ["mat-cell", "", 1, ""], ["mat-header-row", ""], ["mat-row", "", 1, "mat-row-hover", 3, "click"]],
  template: function MobileUserListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "app-list-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](3, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MobileUserListComponent_Template_span_click_4_listener() {
        ctx.selectedFilter = null;
        return ctx.loadUsers();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MobileUserListComponent_Template_span_click_7_listener() {
        ctx.selectedFilter = "onlyUserWithoutPlan";
        return ctx.loadUsers();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MobileUserListComponent_Template_span_click_10_listener() {
        ctx.selectedFilter = "userWithAboutToFinishPlan";
        return ctx.loadUsers();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, MobileUserListComponent_div_13_Template, 22, 7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-paginator", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("page", function MobileUserListComponent_Template_mat_paginator_page_15_listener() {
        return ctx.loadUsers();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 16, "MOBILE_USERS.NAV_TITLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("searchTerm", ctx.search$);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected-filter", ctx.selectedFilter == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 18, "SHARED.ALL"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected-filter", ctx.selectedFilter == "onlyUserWithoutPlan");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 20, "MOBILE_USERS.FILTERS.NEW_USER"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected-filter", ctx.selectedFilter == "userWithAboutToFinishPlan");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 22, "MOBILE_USERS.FILTERS.FOLLOW_UP"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 24, ctx.dataSource$));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 26, ctx.totalRows$))("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](28, _c0))("showFirstLastButtons", true);
    }
  },
  directives: [_shared_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_3__.ListHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCell, _shared_directives_profile_image_profile_image_directive__WEBPACK_IMPORTED_MODULE_4__.ProfileImageDirective, ngx_permissions__WEBPACK_IMPORTED_MODULE_14__.NgxPermissionsDirective, ngx_permissions__WEBPACK_IMPORTED_MODULE_14__.NgxPermissionsRestrictStubDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRow, _shared_no_data_placeholder_no_data_placeholder_component__WEBPACK_IMPORTED_MODULE_5__.NoDataPlaceholderComponent, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DecimalPipe],
  styles: [".mat-header-cell[_ngcontent-%COMP%] {\n  background: #2a3042;\n  color: white;\n}\n\n.mat-column-profileImage[_ngcontent-%COMP%] {\n  width: 70px;\n}\n\n.mat-column-name[_ngcontent-%COMP%] {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mat-column-email[_ngcontent-%COMP%] {\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mat-column-phoneNumber[_ngcontent-%COMP%] {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  padding-inline-end: 0.5rem;\n}\n\n.profile-image-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.profile-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 20px;\n}\n\n.profile-image-container[_ngcontent-%COMP%]   .manual-subscription[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10%;\n  color: #215121;\n  font-size: 1.2rem;\n}\n\n.list-container[_ngcontent-%COMP%] {\n  background: white;\n  max-width: 100%;\n  margin: 1rem;\n}\n\n.subscription-badge[_ngcontent-%COMP%] {\n  border-radius: 35px;\n  text-align: center;\n  padding: 10px;\n  font-size: 0.8rem;\n}\n\n.unsubscribed-badge[_ngcontent-%COMP%] {\n  color: #575757;\n  width: 160px;\n  border: 0.5px solid #575757;\n}\n\n.subscribed-badge[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #ff725a;\n}\n\n.custom-filter[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 5px 10px;\n  border: 1px solid #215121;\n  border-radius: 10px;\n  margin: 0 5px;\n}\n\n.selected-filter[_ngcontent-%COMP%] {\n  background-color: #215121;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYmlsZS11c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFDQTtFQUNFLDBCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUdGOztBQUZFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUlKOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBRUEsY0FBQTtFQUNBLGlCQUFBO0FBRUo7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJtb2JpbGUtdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgYmFja2dyb3VuZDogIzJhMzA0MjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdC1jb2x1bW4tcHJvZmlsZUltYWdlIHtcclxuICB3aWR0aDogNzBweDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tbmFtZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1lbWFpbCB7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1waG9uZU51bWJlciB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIHBhZGRpbmctaW5saW5lLWVuZDogMC41cmVtO1xyXG59XHJcbi5wcm9maWxlLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hbnVhbC1zdWJzY3JpcHRpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTAlO1xyXG5cclxuICAgIGNvbG9yOiAjMjE1MTIxO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICAvL3BhZGRpbmc6IDAgMXJlbTtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbi5zdWJzY3JpcHRpb24tYmFkZ2Uge1xyXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuLnVuc3Vic2NyaWJlZC1iYWRnZSB7XHJcbiAgY29sb3I6ICM1NzU3NTc7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgIzU3NTc1NztcclxufVxyXG5cclxuLnN1YnNjcmliZWQtYmFkZ2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3MjVhO1xyXG59XHJcblxyXG4uY3VzdG9tLWZpbHRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6NXB4IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxNTEyMTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogMCA1cHg7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1maWx0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTUxMjE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4iXX0= */"]
});

(0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(state => {
  var _a;

  return (_a = state.mobileUsers) === null || _a === void 0 ? void 0 : _a.mobileUsersPage;
})], MobileUserListComponent.prototype, "dataSource$", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(state => {
  var _a;

  return (_a = state.mobileUsers) === null || _a === void 0 ? void 0 : _a.totalRows;
})], MobileUserListComponent.prototype, "totalRows$", void 0);

MobileUserListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)()], MobileUserListComponent);


/***/ }),

/***/ 72909:
/*!*********************************************************!*\
  !*** ./src/app/pages/mobile-user/mobile-user.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileUserModule": () => (/* binding */ MobileUserModule)
/* harmony export */ });
/* harmony import */ var _core_mobile_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mobile-users */ 63483);
/* harmony import */ var _mobile_user_list_mobile_user_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-user-list/mobile-user-list.component */ 68061);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _mobile_user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-user.routing.module */ 67786);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _core_store_mobile_users_mobile_user_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/store/mobile-users/mobile-user.state */ 86031);
/* harmony import */ var _mobile_user_details_mobile_user_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile-user-details/mobile-user-details.component */ 10208);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _shared_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/material */ 56993);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ 40950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _meal_plan_meal_plan_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../meal-plan/meal-plan.module */ 98675);
/* harmony import */ var _mobile_user_details_sub_mobile_user_more_info_dialog_mobile_user_more_info_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mobile-user-details/sub/mobile-user-more-info-dialog/mobile-user-more-info-dialog.component */ 51634);
/* harmony import */ var _mobile_user_details_sub_make_premium_make_premium_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mobile-user-details/sub/make-premium/make-premium.component */ 83602);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @swimlane/ngx-charts */ 49458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);



















class MobileUserModule {
}
MobileUserModule.ɵfac = function MobileUserModule_Factory(t) { return new (t || MobileUserModule)(); };
MobileUserModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: MobileUserModule });
MobileUserModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_core_mobile_users__WEBPACK_IMPORTED_MODULE_0__.MobileUserService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _mobile_user_routing_module__WEBPACK_IMPORTED_MODULE_2__.MobileUserRoutingModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
            _ngxs_store__WEBPACK_IMPORTED_MODULE_3__.NgxsModule.forFeature([_core_store_mobile_users_mobile_user_state__WEBPACK_IMPORTED_MODULE_4__.MobileUserState]),
            _shared_material__WEBPACK_IMPORTED_MODULE_6__.MaterialModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            ngx_permissions__WEBPACK_IMPORTED_MODULE_16__.NgxPermissionsModule,
            _meal_plan_meal_plan_module__WEBPACK_IMPORTED_MODULE_8__.MealPlanModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            ngx_permissions__WEBPACK_IMPORTED_MODULE_16__.NgxPermissionsRestrictStubModule,
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__.NgxChartsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](MobileUserModule, { declarations: [_mobile_user_list_mobile_user_list_component__WEBPACK_IMPORTED_MODULE_1__.MobileUserListComponent,
        _mobile_user_details_mobile_user_details_component__WEBPACK_IMPORTED_MODULE_5__.MobileUserDetailsComponent,
        _mobile_user_details_sub_mobile_user_more_info_dialog_mobile_user_more_info_dialog_component__WEBPACK_IMPORTED_MODULE_9__.MobileUserMoreInfoDialogComponent,
        _mobile_user_details_sub_make_premium_make_premium_component__WEBPACK_IMPORTED_MODULE_10__.MakePremiumComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _mobile_user_routing_module__WEBPACK_IMPORTED_MODULE_2__.MobileUserRoutingModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["ɵz"], _shared_material__WEBPACK_IMPORTED_MODULE_6__.MaterialModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        ngx_permissions__WEBPACK_IMPORTED_MODULE_16__.NgxPermissionsModule,
        _meal_plan_meal_plan_module__WEBPACK_IMPORTED_MODULE_8__.MealPlanModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        ngx_permissions__WEBPACK_IMPORTED_MODULE_16__.NgxPermissionsRestrictStubModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__.NgxChartsModule] }); })();


/***/ }),

/***/ 67786:
/*!*****************************************************************!*\
  !*** ./src/app/pages/mobile-user/mobile-user.routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileUserRoutingModule": () => (/* binding */ MobileUserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _mobile_user_list_mobile_user_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-user-list/mobile-user-list.component */ 68061);
/* harmony import */ var _mobile_user_details_mobile_user_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-user-details/mobile-user-details.component */ 10208);
/* harmony import */ var _core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/guards/permission-guard.service */ 97226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const route = [
    {
        path: ':id',
        component: _mobile_user_details_mobile_user_details_component__WEBPACK_IMPORTED_MODULE_1__.MobileUserDetailsComponent,
        canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__.PermissionGuard],
        data: { permission: 'canViewAppUsers' },
    },
    {
        path: '',
        component: _mobile_user_list_mobile_user_list_component__WEBPACK_IMPORTED_MODULE_0__.MobileUserListComponent,
        pathMatch: 'full',
        canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__.PermissionGuard],
        data: { permission: 'canViewAppUsers' },
    },
    {
        path: '**',
        component: _mobile_user_list_mobile_user_list_component__WEBPACK_IMPORTED_MODULE_0__.MobileUserListComponent,
        pathMatch: 'full',
        canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__.PermissionGuard],
        data: { permission: 'canViewAppUsers' },
    },
];
class MobileUserRoutingModule {
}
MobileUserRoutingModule.ɵfac = function MobileUserRoutingModule_Factory(t) { return new (t || MobileUserRoutingModule)(); };
MobileUserRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MobileUserRoutingModule });
MobileUserRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(route)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MobileUserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_mobile-user_mobile-user_module_ts.js.map