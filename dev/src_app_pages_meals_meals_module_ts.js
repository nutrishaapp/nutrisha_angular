"use strict";
(self["webpackChunknutrisha_admin"] = self["webpackChunknutrisha_admin"] || []).push([["src_app_pages_meals_meals_module_ts"],{

/***/ 80282:
/*!********************************************!*\
  !*** ./src/app/core/meals/meal.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealService": () => (/* binding */ MealService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared */ 8268);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





const mealAPI = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseAdminV1Url + 'Meal';
class MealService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getPagedList(queryParams) {
        return this.httpClient.get(mealAPI + '/getPagedList', {
            params: _shared__WEBPACK_IMPORTED_MODULE_0__.HttpUtilsService.prepareGetPagedListQueryParams(queryParams),
        });
    }
    getById(id) {
        return this.httpClient.get(mealAPI + '/getById', {
            params: {
                id: id,
            },
        });
    }
    getMealsLookUp() {
        return this.httpClient.get(mealAPI + '/getMealsLookup');
    }
    getIngredientsLookUp(searchValue) {
        return this.httpClient.get(mealAPI + '/GetIngredientLookup', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().append('searchWord', searchValue),
        });
    }
    post(value) {
        const form = this.prepareFormModel(value);
        return this.httpClient.post(mealAPI + '/post', form);
    }
    postIngredients(value) {
        return this.httpClient.post(mealAPI + '/PostIngredient', { name: value });
    }
    put(id, value) {
        const form = this.prepareFormModel(value);
        form.append('id', id);
        return this.httpClient.put(mealAPI + '/put', form);
    }
    prepareFormModel(value) {
        var _a, _b;
        const form = new FormData();
        form.append('Name', value.name);
        form.append('MealType', value.label);
        if (value.cockingTime)
            form.append('CockingTime', (_a = value.cockingTime) !== null && _a !== void 0 ? _a : null);
        if (value.prepTime)
            form.append('PreparingTime', value.prepTime);
        const coverImage = (_b = value.coverImage) === null || _b === void 0 ? void 0 : _b.file;
        if (coverImage) {
            form.append('CoverImage', coverImage, coverImage.name);
        }
        if (value.steps)
            form.append('MealSteps', value.steps);
        form.append('Allergies', value.allergies);
        const ingredients = value.ingredients;
        ingredients === null || ingredients === void 0 ? void 0 : ingredients.forEach((ingredient, i) => {
            var _a, _b;
            const key = `Ingredients[${i}]`;
            form.append(key + '.quantity', (_a = ingredient === null || ingredient === void 0 ? void 0 : ingredient.quantity) === null || _a === void 0 ? void 0 : _a.toString());
            form.append(key + '.IngredientName', ingredient === null || ingredient === void 0 ? void 0 : ingredient.name);
            form.append(key + '.UnitType', (_b = ingredient === null || ingredient === void 0 ? void 0 : ingredient.unitType) === null || _b === void 0 ? void 0 : _b.toString());
        });
        return form;
    }
    delete(id) {
        return this.httpClient.delete(mealAPI + '/delete', {
            params: { id },
        });
    }
}
MealService.ɵfac = function MealService_Factory(t) { return new (t || MealService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
MealService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MealService, factory: MealService.ɵfac });


/***/ }),

/***/ 90482:
/*!*********************************************************!*\
  !*** ./src/app/core/meals/models/meal-details.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngredientModel": () => (/* binding */ IngredientModel),
/* harmony export */   "IngredientUnitType": () => (/* binding */ IngredientUnitType),
/* harmony export */   "MealDetailsModel": () => (/* binding */ MealDetailsModel),
/* harmony export */   "ingredientUnitTypeKeys": () => (/* binding */ ingredientUnitTypeKeys)
/* harmony export */ });
/* harmony import */ var _meal_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal-type.enum */ 71267);

class MealDetailsModel {
    constructor() {
        this.mealType = _meal_type_enum__WEBPACK_IMPORTED_MODULE_0__.MealType.Breakfast;
    }
}
class IngredientModel {
}
var IngredientUnitType;
(function (IngredientUnitType) {
    IngredientUnitType[IngredientUnitType["Liter"] = 0] = "Liter";
    IngredientUnitType[IngredientUnitType["Cup"] = 1] = "Cup";
    IngredientUnitType[IngredientUnitType["Tbs"] = 2] = "Tbs";
    IngredientUnitType[IngredientUnitType["Tsp"] = 3] = "Tsp";
    IngredientUnitType[IngredientUnitType["Kg"] = 4] = "Kg";
    IngredientUnitType[IngredientUnitType["Gram"] = 5] = "Gram";
    IngredientUnitType[IngredientUnitType["Slice"] = 6] = "Slice";
    IngredientUnitType[IngredientUnitType["Piece"] = 7] = "Piece";
})(IngredientUnitType || (IngredientUnitType = {}));
const ingredientUnitTypeKeys = [
    'Liter',
    'Cup',
    'Tbs',
    'Tsp',
    'Kg',
    'Gram',
    'Slice',
    'Piece',
];


/***/ }),

/***/ 71267:
/*!*****************************************************!*\
  !*** ./src/app/core/meals/models/meal-type.enum.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealType": () => (/* binding */ MealType),
/* harmony export */   "getMealTypeByKey": () => (/* binding */ getMealTypeByKey),
/* harmony export */   "mealTypes": () => (/* binding */ mealTypes)
/* harmony export */ });
var MealType;
(function (MealType) {
    MealType[MealType["Breakfast"] = 0] = "Breakfast";
    MealType[MealType["Lunch"] = 1] = "Lunch";
    MealType[MealType["Dinner"] = 2] = "Dinner";
    MealType[MealType["Snacks"] = 3] = "Snacks";
    MealType[MealType["Supplements"] = 4] = "Supplements";
    MealType[MealType["Water"] = 5] = "Water";
    MealType[MealType["ExtraBites"] = 6] = "ExtraBites";
    MealType[MealType["Recommended"] = 7] = "Recommended";
    MealType[MealType["DeliciousSnack"] = 8] = "DeliciousSnack";
    MealType[MealType["SomethingSpicy"] = 9] = "SomethingSpicy";
    MealType[MealType["SomethingSweet"] = 10] = "SomethingSweet";
})(MealType || (MealType = {}));
const getMealTypeByKey = (key) => {
    const firstLetter = key[0].toUpperCase();
    return MealType[firstLetter + key.substring(1)];
};
const mealTypes = [
    MealType.Breakfast,
    MealType.Lunch,
    MealType.Dinner,
    MealType.Snacks,
    MealType.Supplements,
    MealType.Recommended,
    MealType.DeliciousSnack,
    MealType.SomethingSpicy,
    MealType.SomethingSweet,
];


/***/ }),

/***/ 71170:
/*!**************************************************!*\
  !*** ./src/app/core/store/meals/meals.action.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealsActions": () => (/* binding */ MealsActions)
/* harmony export */ });
var MealsActions;
(function (MealsActions) {
    class LoadMealsPage {
        constructor(queryParams) {
            this.queryParams = queryParams;
        }
    }
    LoadMealsPage.type = '[Meals] Load Meals';
    MealsActions.LoadMealsPage = LoadMealsPage;
    class LoadMealDetails {
        constructor(id) {
            this.id = id;
        }
    }
    LoadMealDetails.type = '[Meals] Load Meal Details';
    MealsActions.LoadMealDetails = LoadMealDetails;
})(MealsActions || (MealsActions = {}));


/***/ }),

/***/ 86111:
/*!*************************************************!*\
  !*** ./src/app/core/store/meals/meals.state.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealsState": () => (/* binding */ MealsState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _meals_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meals.action */ 71170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _meals_meal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../meals/meal.service */ 80282);






let MealsState = class MealsState {
    constructor(mealService) {
        this.mealService = mealService;
    }
    getPagedList(ctx, action) {
        return this.mealService.getPagedList(action.queryParams).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)((result) => {
            const data = result.data;
            ctx.setState(Object.assign(Object.assign({}, ctx.getState()), { meals: data, totalRows: result.totalRows, lastLoadedMeal: null }));
        }));
    }
    loadMealDetails(ctx, action) {
        return this.mealService.getById(action.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)((result) => {
            const data = result.data;
            ctx.setState(Object.assign(Object.assign({}, ctx.getState()), { lastLoadedMeal: data, totalRows: 0, meals: null }));
        }));
    }
    static lastPage(state) {
        return state.meals;
    }
    static totalRows(state) {
        return state.totalRows;
    }
    static lastLoadedMeal(state) {
        return state.lastLoadedMeal;
    }
};
MealsState.ɵfac = function MealsState_Factory(t) { return new (t || MealsState)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_meals_meal_service__WEBPACK_IMPORTED_MODULE_2__.MealService)); };
MealsState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: MealsState, factory: MealsState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_meals_action__WEBPACK_IMPORTED_MODULE_1__.MealsActions.LoadMealsPage)
], MealsState.prototype, "getPagedList", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_meals_action__WEBPACK_IMPORTED_MODULE_1__.MealsActions.LoadMealDetails)
], MealsState.prototype, "loadMealDetails", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], MealsState, "lastPage", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], MealsState, "totalRows", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], MealsState, "lastLoadedMeal", null);
MealsState = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'meals',
    })
], MealsState);



/***/ }),

/***/ 93827:
/*!********************************************************************!*\
  !*** ./src/app/pages/meals/meal-details/meal-details.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealDetailsComponent": () => (/* binding */ MealDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _core_meals_models_meal_details_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/meals/models/meal-details.model */ 90482);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _core_store_meals_meals_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/store/meals/meals.action */ 71170);
/* harmony import */ var _core_store_meals_meals_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/store/meals/meals.state */ 86111);
/* harmony import */ var _core_meals_models_meal_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/meals/models/meal-type.enum */ 71267);
/* harmony import */ var _core_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/shared/confirm-dialog/confirm-dialog.component */ 92911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _core_meals_meal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/meals/meal.service */ 80282);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 33935);




















function MealDetailsComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "MEALS.PART_OF_MEAL_PLAN"), " ");
  }
}

function MealDetailsComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div");
  }
}

function MealDetailsComponent_div_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 9)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 9)(9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const mealDetails_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](mealDetails_r1.preparingTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 4, "MEALS.PREP_TIME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](mealDetails_r1.cockingTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 6, "MEALS.COOK_TIME"));
  }
}

function MealDetailsComponent_div_0_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MealDetailsComponent_div_0_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r11.deleteMeal();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "SHARED.DELETE"), " ");
  }
}

function MealDetailsComponent_div_0_div_30_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ingredient_r14 = ctx.$implicit;
    const index_r15 = ctx.index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate4"](" ", index_r15 + 1, "- ", ingredient_r14.quantity, " ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 4, "MEALS.MEAL_UNIT_TYPE." + ctx_r13.ingredientUnitType[ingredient_r14.unitType]), " ", ingredient_r14.ingredientName, " ");
  }
}

function MealDetailsComponent_div_0_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23)(1, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, MealDetailsComponent_div_0_div_30_p_4_Template, 3, 6, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const mealDetails_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "MEALS.INGREDIENTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", mealDetails_r1.ingredients);
  }
}

function MealDetailsComponent_div_0_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25)(1, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const mealDetails_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "MEALS.STEPS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", mealDetails_r1.mealSteps, " ");
  }
}

function MealDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MealDetailsComponent_div_0_div_1_Template, 3, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 3)(3, "div", 4)(4, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, MealDetailsComponent_div_0_div_6_Template, 1, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, MealDetailsComponent_div_0_ng_template_7_Template, 14, 8, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 9)(11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div")(19, "button", 10)(20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-menu", null, 11)(24, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MealDetailsComponent_div_0_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r18.editMeal();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, MealDetailsComponent_div_0_button_27_Template, 3, 3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, MealDetailsComponent_div_0_div_30_Template, 5, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, MealDetailsComponent_div_0_div_31_Template, 6, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 18)(33, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const mealDetails_r1 = ctx.$implicit;

    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8);

    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](23);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (mealDetails_r1 == null ? null : mealDetails_r1.id) && !mealDetails_r1.canEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](mealDetails_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", mealDetails_r1.mealType == ctx_r0.mealType.Supplements)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 15, "MEALS.MEALS_LABELS." + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 17, ctx_r0.mealType[mealDetails_r1.mealType])), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 19, "MEALS.LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 21, "SHARED.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (mealDetails_r1 == null ? null : mealDetails_r1.id) && mealDetails_r1.canEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("alt", mealDetails_r1.name)("src", mealDetails_r1.coverImage, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", mealDetails_r1.mealType != ctx_r0.mealType.Supplements);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", mealDetails_r1.mealType != ctx_r0.mealType.Supplements);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](35, 23, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](36, 25, "MEALS.ALLERGIES")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", mealDetails_r1.allergies, " ");
  }
}

let MealDetailsComponent = class MealDetailsComponent {
  constructor(store, activatedRoute, router, matDialog, mealService) {
    this.store = store;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.matDialog = matDialog;
    this.mealService = mealService;
    this.mealType = _core_meals_models_meal_type_enum__WEBPACK_IMPORTED_MODULE_4__.MealType;
    this.ingredientUnitType = _core_meals_models_meal_details_model__WEBPACK_IMPORTED_MODULE_1__.IngredientUnitType;
  }

  ngOnInit() {
    this.activatedRoute.params.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this)).subscribe(params => {
      const id = params['id'];
      this.mealId = id;

      if (id) {
        this.store.dispatch(new _core_store_meals_meals_action__WEBPACK_IMPORTED_MODULE_2__.MealsActions.LoadMealDetails(id));
      }
    });
  }

  deleteMeal() {
    this.matDialog.open(_core_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmDialogComponent, {}).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(d => {
      if (d) {
        return this.mealService.delete(this.mealId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(r => this.router.navigateByUrl('meals')));
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(false);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this)).subscribe();
  }

  editMeal() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute
    });
    this.router.navigateByUrl(`meals/edit/${this.mealId}`);
  }

};

MealDetailsComponent.ɵfac = function MealDetailsComponent_Factory(t) {
  return new (t || MealDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_meals_meal_service__WEBPACK_IMPORTED_MODULE_6__.MealService));
};

MealDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MealDetailsComponent,
  selectors: [["app-meal-details"]],
  decls: 2,
  vars: 3,
  consts: [["class", "p-5 w-100 d-flex flex-column justify-content-center align-items-center", 4, "ngIf"], [1, "p-5", "w-100", "d-flex", "flex-column", "justify-content-center", "align-items-center"], ["class", "w-100 alert alert-primary", 4, "ngIf"], [1, "w-100", "d-flex", "justify-content-start"], [1, "w-100", "mb-3", "d-flex", "justify-content-start", "flex-wrap"], [1, "meal-name", "text-break"], [4, "ngIf", "ngIfElse"], ["nonSupplements", ""], [1, "vertical-breaker"], [1, "mx-3", "d-flex", "flex-column", "justify-content-center"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["optionsMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "class", "text-danger", 3, "click", 4, "ngIf"], [1, "meal-image", "w-100", 3, "alt", "src"], [1, "w-100", "d-flex", "justify-content-start", "align-items-start", "mt-3"], ["class", "meal-container margin-end-3", 4, "ngIf"], ["class", "meal-container", 4, "ngIf"], [1, "meal-container", "margin-start-3"], [1, "m-0"], [1, "text-break"], [1, "w-100", "alert", "alert-primary"], ["mat-menu-item", "", 1, "text-danger", 3, "click"], [1, "meal-container", "margin-end-3"], ["class", "text-break", 4, "ngFor", "ngForOf"], [1, "meal-container"]],
  template: function MealDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, MealDetailsComponent_div_0_Template, 39, 27, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx.mealDetails$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuItem, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.UpperCasePipe],
  styles: [".meal-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-width: 100%;\n  border-radius: 20px;\n  max-height: 400px;\n  min-height: 400px;\n  object-fit: fill;\n}\n\n.meal-name[_ngcontent-%COMP%] {\n  margin-inline-end: 15%;\n}\n\n.meal-container[_ngcontent-%COMP%] {\n  padding: 5px;\n  background: #FAFAFA;\n  border-radius: 19px;\n  width: 25%;\n  text-wrap: normal;\n  min-height: 150px;\n}\n\n.text-break[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWwtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBRUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLHNCQUFBO0FBQUY7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6Im1lYWwtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZWFsLWltYWdlIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIG9iamVjdC1maXQ6IGZpbGw7XHJcbn1cclxuXHJcbi5tZWFsLW5hbWUge1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxNSU7XHJcbn1cclxuLm1lYWwtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcclxuICBib3JkZXItcmFkaXVzOiAxOXB4O1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgdGV4dC13cmFwOiBub3JtYWw7XHJcbiAgbWluLWhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWJyZWFrIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuIl19 */"]
});

(0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_core_store_meals_meals_state__WEBPACK_IMPORTED_MODULE_3__.MealsState.lastLoadedMeal)], MealDetailsComponent.prototype, "mealDetails$", void 0);

MealDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)()], MealDetailsComponent);


/***/ }),

/***/ 5829:
/*!**************************************************************!*\
  !*** ./src/app/pages/meals/meal-edit/meal-edit.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealEditComponent": () => (/* binding */ MealEditComponent)
/* harmony export */ });
/* harmony import */ var F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_meals_models_meal_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/meals/models/meal-type.enum */ 71267);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _core_meals_models_meal_details_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/meals/models/meal-details.model */ 90482);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _core_store_meals_meals_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/store/meals/meals.action */ 71170);
/* harmony import */ var _core_store_meals_meals_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/store/meals/meals.state */ 86111);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/shared */ 8268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_meals_meal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/meals/meal.service */ 80282);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _shared_details_header_details_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/details-header/details-header.component */ 55641);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _shared_attachment_button_attachment_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/attachment-button/attachment-button.component */ 81430);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 33935);


























function MealEditComponent_mat_form_field_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-form-field", 4)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "MEALS.STEPS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 4, "VALIDATION_ERRORS.INVALID_VALUE"));
  }
}

function MealEditComponent_mat_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const type_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", type_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "MEALS.MEAL_TYPE_ENUM." + type_r5.toString()), " ");
  }
}

function MealEditComponent_mat_form_field_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-form-field", 18)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "MEALS.PREP_TIME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 4, "VALIDATION_ERRORS.INVALID_VALUE"));
  }
}

function MealEditComponent_mat_form_field_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-form-field", 4)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "MEALS.COOK_TIME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 4, "VALIDATION_ERRORS.INVALID_VALUE"));
  }
}

function MealEditComponent_div_36_div_6_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const type_r15 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r9.ingredientUnitType[type_r15]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "MEALS.MEAL_UNIT_TYPE." + type_r15.toString()), " ");
  }
}

function MealEditComponent_div_36_div_6_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MealEditComponent_div_36_div_6_mat_option_28_Template_mat_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](25);

      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return ctx_r16.addIngredient(_r11.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](25);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", _r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "MEALS.NOT_EXIST_INGREDIENT"));
  }
}

function MealEditComponent_div_36_div_6_mat_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](option_r18);
  }
}

function MealEditComponent_div_36_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 25)(1, "mat-form-field", 4)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "mat-form-field", 27)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "mat-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, MealEditComponent_div_36_div_6_mat_option_14_Template, 3, 4, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "mat-form-field")(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 29, 30)(24, "input", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("focus", function MealEditComponent_div_36_div_6_Template_input_focus_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);

      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](25);

      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return ctx_r19.searchIngredients(_r11.value);
    })("input", function MealEditComponent_div_36_div_6_Template_input_input_24_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const i_r8 = restoredCtx.index;

      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](25);

      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      ctx_r21.ingredientsForm.controls[i_r8].controls["name"].setErrors({
        invalid: true
      });
      return ctx_r21.searchIngredients(_r11.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "mat-autocomplete", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("optionSelected", function MealEditComponent_div_36_div_6_Template_mat_autocomplete_optionSelected_26_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const i_r8 = restoredCtx.index;

      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](25);

      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      _r11.value = $event.option.value;
      return ctx_r22.ingredientsForm.controls[i_r8].controls["name"].setErrors(null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, MealEditComponent_div_36_div_6_mat_option_28_Template, 3, 4, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, MealEditComponent_div_36_div_6_mat_option_29_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const i_r8 = ctx.index;

    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](23);

    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](25);

    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](27);

    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroupName", i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 13, "MEALS.INGREDIENT.QUANTITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 15, "VALIDATION_ERRORS.INVALID_VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 17, "MEALS.INGREDIENT.UNIT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r6.ingredientUnitTypeKeys);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 19, "VALIDATION_ERRORS.INVALID_VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 21, "MEALS.INGREDIENT.NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx_r6.ingredientsForm.controls[i_r8].controls["name"])("matAutocomplete", _r12)("matAutocompleteConnectedTo", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r11.value.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](30, 23, ctx_r6.ingredients$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](33, 25, "VALIDATION_ERRORS.INVALID_VALUE"));
  }
}

function MealEditComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 21)(1, "div")(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, MealEditComponent_div_36_div_6_Template, 34, 27, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MealEditComponent_div_36_Template_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      $event.preventDefault();
      return ctx_r23.ingredientsForm.push(ctx_r23.createIngredientGroup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 3, "MEALS.INGREDIENTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r4.ingredientsForm.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 5, "MEALS.ADD_MORE_INGREDIENTS"), " ");
  }
}

let MealEditComponent = class MealEditComponent {
  constructor(formBuilder, mealService, router, activatedRoute, store) {
    this.formBuilder = formBuilder;
    this.mealService = mealService;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.store = store; // Enums

    this.mealType = _core_meals_models_meal_type_enum__WEBPACK_IMPORTED_MODULE_1__.MealType;
    this.mealTypeKeys = _core_meals_models_meal_type_enum__WEBPACK_IMPORTED_MODULE_1__.mealTypes;
    this.ingredientUnitType = _core_meals_models_meal_details_model__WEBPACK_IMPORTED_MODULE_2__.IngredientUnitType;
    this.ingredientUnitTypeKeys = _core_meals_models_meal_details_model__WEBPACK_IMPORTED_MODULE_2__.ingredientUnitTypeKeys;
  }

  ngOnInit() {
    this.meal = new _core_meals_models_meal_details_model__WEBPACK_IMPORTED_MODULE_2__.MealDetailsModel();
    this.selectedMealType = _core_meals_models_meal_type_enum__WEBPACK_IMPORTED_MODULE_1__.MealType.Breakfast;
    this.initializeMealForm();
    this.activatedRoute.params.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(p => p['id']), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.tap)(mealId => {
      if (!mealId) {
        return;
      }

      this.loadMeal(mealId);
    })).subscribe();
  }

  loadMeal(mealId) {
    this.store.dispatch(new _core_store_meals_meals_action__WEBPACK_IMPORTED_MODULE_3__.MealsActions.LoadMealDetails(mealId));
    this.store.select(_core_store_meals_meals_state__WEBPACK_IMPORTED_MODULE_4__.MealsState.lastLoadedMeal).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(meal => {
      if (!(meal === null || meal === void 0 ? void 0 : meal.id)) {
        return;
      }

      this.selectedMealType = this.meal.mealType;
      this.meal = meal;
      this.initializeMealForm();
    });
  }

  initializeMealForm() {
    var _a, _b, _c, _d, _e, _f, _g;

    this.mealForm = this.formBuilder.group({
      name: this.formBuilder.control((_a = this.meal) === null || _a === void 0 ? void 0 : _a.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]),
      label: this.formBuilder.control((_b = this.meal) === null || _b === void 0 ? void 0 : _b.mealType, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]),
      prepTime: this.formBuilder.control((_c = this.meal) === null || _c === void 0 ? void 0 : _c.preparingTime, [this.nonSupplementValidator.bind(this)]),
      cockingTime: this.formBuilder.control((_d = this.meal) === null || _d === void 0 ? void 0 : _d.cockingTime, [this.nonSupplementValidator.bind(this)]),
      steps: this.formBuilder.control((_e = this.meal) === null || _e === void 0 ? void 0 : _e.mealSteps, []),
      allergies: this.formBuilder.control((_f = this.meal) === null || _f === void 0 ? void 0 : _f.allergies, []),
      coverImage: this.formBuilder.control(((_g = this.meal) === null || _g === void 0 ? void 0 : _g.coverImage) ? new _core_shared__WEBPACK_IMPORTED_MODULE_5__.Media({
        url: this.meal.coverImage
      }) : null, [])
    });
    this.mealForm.setControl('ingredients', this.initializeIngredientForm());
  }

  submit() {
    var _this = this;

    const meal = {
      name: this.mealForm.value.name,
      label: this.mealForm.value.label,
      allergies: this.mealForm.value.allergies,
      coverImage: this.mealForm.value.coverImage
    };

    if (meal.label != _core_meals_models_meal_type_enum__WEBPACK_IMPORTED_MODULE_1__.MealType.Supplements) {
      meal.prepTime = this.mealForm.value.prepTime;
      meal.cockingTime = this.mealForm.value.cockingTime;
      meal.steps = this.mealForm.value.steps;
      meal.ingredients = [];
      /*meal.ingredients = this.mealForm.value.ingredients;
      if(this.mealForm.value.ingredients && this.mealForm.value.ingredients.length == 1 && this.mealForm.value.ingredients[0].quantity == null) {
        meal.ingredients = null;
      }*/

      if (this.mealForm.value.ingredients) {
        for (let i = 0; i < this.mealForm.value.ingredients.length; i++) {
          let ingredient = this.mealForm.value.ingredients[i];

          if (ingredient.quantity != null && ingredient.unitType != null && ingredient.name != null) {
            //meal.ingredients.splice(i,1);
            meal.ingredients.push(ingredient);
          }
        }
      }
    }

    console.log(this.mealForm.value);
    console.log(this.mealForm.value.ingredients);
    console.log(meal.ingredients);

    if (this.meal.id) {
      this.mealService.put(this.meal.id, meal).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe( /*#__PURE__*/(0,F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this.router.navigateByUrl('meals/' + _this.meal.id);
      }));
      return;
    }

    this.mealService.post(meal).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
        yield _this.router.navigateByUrl('meals/' + result.data);
      });

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

  initializeIngredientForm() {
    var _a, _b;

    const controls = ((_a = this.meal) === null || _a === void 0 ? void 0 : _a.ingredients) && ((_b = this.meal) === null || _b === void 0 ? void 0 : _b.ingredients.length) ? this.meal.ingredients.map(value => this.createIngredientGroup(value)) : [this.createIngredientGroup()];
    this.ingredientsForm = this.formBuilder.array(controls);
    return this.ingredientsForm;
  }

  createIngredientGroup(ingredientModel) {
    return this.formBuilder.group({
      quantity: this.formBuilder.control(ingredientModel === null || ingredientModel === void 0 ? void 0 : ingredientModel.quantity, []),
      unitType: this.formBuilder.control(ingredientModel === null || ingredientModel === void 0 ? void 0 : ingredientModel.unitType, []),
      name: this.formBuilder.control(ingredientModel === null || ingredientModel === void 0 ? void 0 : ingredientModel.ingredientName, [])
    });
  }

  searchIngredients(searchValue) {
    this.ingredients$ = this.mealService.getIngredientsLookUp(searchValue).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(result => result.data));
  }

  addIngredient(value) {
    this.mealService.postIngredients(value).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe();
  }

  nonSupplementValidator(control) {
    if (this.selectedMealType != _core_meals_models_meal_type_enum__WEBPACK_IMPORTED_MODULE_1__.MealType.Supplements) {
      return control.value != null || control.value != undefined ? null : {};
    }

    return null;
  }

  mealTypeChanged($event) {
    this.selectedMealType = $event;
    this.updateTreeValidity(this.mealForm);
  }

  updateTreeValidity(group) {
    Object.keys(group.controls).forEach(key => {
      const abstractControl = group.controls[key];

      if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroup || abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormArray) {
        this.updateTreeValidity(abstractControl);
      } else {
        abstractControl.updateValueAndValidity();
      }
    });
  }

};

MealEditComponent.ɵfac = function MealEditComponent_Factory(t) {
  return new (t || MealEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_meals_meal_service__WEBPACK_IMPORTED_MODULE_6__.MealService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_7__.Store));
};

MealEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: MealEditComponent,
  selectors: [["app-meal-details"]],
  decls: 37,
  vars: 26,
  consts: [[1, "bg-white", "mat-elevation-z8"], [3, "headerTitle"], [1, "d-flex", "justify-content-center", "align-items-start", "w-100", "p-3", "pt-0", "m-0", 3, "formGroup"], [1, "w-100", "same-width-flex", "d-flex", "flex-column", "justify-content-center", "align-items-center", "padding-end-2"], [1, "w-100"], ["matInput", "", "formControlName", "name", "maxlength", "25"], ["formControlName", "coverImage"], ["class", "w-100", 4, "ngIf"], ["matInput", "", "formControlName", "allergies", "maxlength", "10"], ["mat-flat-button", "", "color", "primary", 1, "w-100", 3, "disabled", "click"], [1, "same-width-flex", "padding-start-2"], ["formControlName", "label", 3, "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "align-items-center"], ["class", "w-100 margin-end-2", 4, "ngIf"], ["class", "d-flex flex-column", 4, "ngIf"], ["matInput", "", "formControlName", "steps", 1, "info-area"], [3, "value"], [1, "w-100", "margin-end-2"], ["matInput", "", "formControlName", "prepTime", "maxlength", "7"], ["matInput", "", "formControlName", "cockingTime", "maxlength", "7"], [1, "d-flex", "flex-column"], ["formArrayName", "ingredients"], ["class", "d-flex justify-content-center align-items-center", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "primary", 1, "w-100", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center", 3, "formGroupName"], ["type", "number", "matInput", "", "formControlName", "quantity", "min", "0"], [1, "w-100", "mx-1"], ["formControlName", "unitType"], ["matAutocompleteOrigin", "", 1, "custom-wrapper-example"], ["origin", "matAutocompleteOrigin"], ["matInput", "", 3, "formControl", "matAutocomplete", "matAutocompleteConnectedTo", "focus", "input"], ["input", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", "click", 4, "ngIf"], [3, "value", "click"]],
  template: function MealEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-details-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "form", 2)(3, "div", 3)(4, "mat-form-field", 4)(5, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "app-attachment-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, MealEditComponent_mat_form_field_14_Template, 8, 6, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "mat-form-field", 4)(16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MealEditComponent_Template_button_click_23_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 10)(27, "mat-form-field", 4)(28, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "mat-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("valueChange", function MealEditComponent_Template_mat_select_valueChange_31_listener($event) {
        return ctx.mealTypeChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, MealEditComponent_mat_option_32_Template, 3, 4, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, MealEditComponent_mat_form_field_34_Template, 8, 6, "mat-form-field", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, MealEditComponent_mat_form_field_35_Template, 8, 6, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, MealEditComponent_div_36_Template, 10, 7, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("headerTitle", (ctx.meal == null ? null : ctx.meal.id) ? "Edit Meal" : "Add New Meal");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.mealForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 14, "MEALS.NAME"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 16, "VALIDATION_ERRORS.INVALID_VALUE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedMealType != ctx.mealType.Supplements);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 18, "MEALS.ALLERGIES"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](22, 20, "VALIDATION_ERRORS.INVALID_VALUE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.mealForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](25, 22, (ctx.meal == null ? null : ctx.meal.id) ? "SHARED.EDIT" : "SHARED.ADD"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](30, 24, "MEALS.LABEL"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.mealTypeKeys);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedMealType != ctx.mealType.Supplements);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedMealType != ctx.mealType.Supplements);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedMealType != ctx.mealType.Supplements);
    }
  },
  directives: [_shared_details_header_details_header_component__WEBPACK_IMPORTED_MODULE_8__.DetailsHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.MaxLengthValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatError, _shared_attachment_button_attachment_button_component__WEBPACK_IMPORTED_MODULE_9__.AttachmentButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.MinValidator, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__.MatAutocompleteOrigin, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__.MatAutocomplete],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe],
  styles: [".info-area[_ngcontent-%COMP%] {\n  min-height: 250px;\n}\n\n.same-width-flex[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWwtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoibWVhbC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tYXJlYSB7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5zYW1lLXdpZHRoLWZsZXgge1xyXG4gIGZsZXg6IDEgMSAwO1xyXG59XHJcbiJdfQ== */"]
});
MealEditComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.UntilDestroy)()], MealEditComponent);


/***/ }),

/***/ 78964:
/*!****************************************************************!*\
  !*** ./src/app/pages/meals/meals-list/meals-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealsListComponent": () => (/* binding */ MealsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared */ 8268);
/* harmony import */ var _core_store_meals_meals_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/store/meals/meals.action */ 71170);
/* harmony import */ var _core_store_meals_meals_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/store/meals/meals.state */ 86111);
/* harmony import */ var _core_meals_models_meal_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/meals/models/meal-type.enum */ 71267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/list-header/list-header.component */ 29813);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _shared_no_data_placeholder_no_data_placeholder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/no-data-placeholder/no-data-placeholder.component */ 30947);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 33935);



















function MealsListComponent_div_4_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 16);
  }
}

function MealsListComponent_div_4_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17)(1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}

function MealsListComponent_div_4_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "MEALS.NAME"), " ");
  }
}

function MealsListComponent_div_4_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r16.name, " ");
  }
}

function MealsListComponent_div_4_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "MEALS.LABEL"), " ");
  }
}

function MealsListComponent_div_4_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "MEALS.MEALS_LABELS." + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, ctx_r8.mealType[element_r17.mealType])), " ");
  }
}

function MealsListComponent_div_4_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "MEALS.PREP_TIME"), " ");
  }
}

function MealsListComponent_div_4_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r18.preparingTime, " ");
  }
}

function MealsListComponent_div_4_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "MEALS.COOK_TIME"), " ");
  }
}

function MealsListComponent_div_4_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r19.cookingTime, " ");
  }
}

function MealsListComponent_div_4_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 20);
  }
}

function MealsListComponent_div_4_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MealsListComponent_div_4_tr_18_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const row_r20 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r21.router.navigateByUrl("/meals/" + row_r20.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function MealsListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, MealsListComponent_div_4_th_3_Template, 1, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, MealsListComponent_div_4_td_4_Template, 3, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](5, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, MealsListComponent_div_4_th_6_Template, 3, 3, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, MealsListComponent_div_4_td_7_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](8, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, MealsListComponent_div_4_th_9_Template, 3, 3, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, MealsListComponent_div_4_td_10_Template, 4, 5, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](11, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, MealsListComponent_div_4_th_12_Template, 3, 3, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, MealsListComponent_div_4_td_13_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](14, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, MealsListComponent_div_4_th_15_Template, 3, 3, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, MealsListComponent_div_4_td_16_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, MealsListComponent_div_4_tr_17_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, MealsListComponent_div_4_tr_18_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "app-no-data-placeholder", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const meals_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", meals_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", meals_r2);
  }
}

const _c0 = function () {
  return [1, 5, 10, 25, 100];
};

let MealsListComponent = class MealsListComponent {
  constructor(router, store) {
    this.router = router;
    this.store = store;
    this.displayedColumns = ['icon', 'name', 'label', 'cookingTime', 'preparingTime'];
    this.mealType = _core_meals_models_meal_type_enum__WEBPACK_IMPORTED_MODULE_4__.MealType;
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
  }

  ngOnInit() {
    this.loadArticles();
  }

  ngAfterViewInit() {
    this.search$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(150)).subscribe(searchTerm => {
      this.searchWord = searchTerm;
      this.paginator.pageIndex = 0;
      this.loadArticles();
    });
  }

  loadArticles() {
    this.store.dispatch(new _core_store_meals_meals_action__WEBPACK_IMPORTED_MODULE_2__.MealsActions.LoadMealsPage(this.prepareQueryParams()));
  }

  prepareQueryParams() {
    return new _core_shared__WEBPACK_IMPORTED_MODULE_1__.PagedListQueryModel({
      pageNumber: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      searchWord: this.searchWord
    });
  }

};

MealsListComponent.ɵfac = function MealsListComponent_Factory(t) {
  return new (t || MealsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store));
};

MealsListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MealsListComponent,
  selectors: [["app-meals-list"]],
  viewQuery: function MealsListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    }
  },
  decls: 9,
  vars: 16,
  consts: [[1, "mat-elevation-z8", "list-container"], [3, "permissions", "searchTerm", "withAddButton", "headerTitle", "addClicked"], [4, "ngIf"], [3, "length", "pageSizeOptions", "pageSize", "showFirstLastButtons", "page"], ["paginator", ""], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "icon"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "label"], ["matColumnDef", "preparingTime"], ["matColumnDef", "cookingTime"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "mat-row-hover", "mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["classes", "my-3", 3, "data"], ["mat-header-cell", ""], ["mat-cell", ""], [2, "color", "green", "font-size", "1.5rem"], [1, "fa-solid", "fa-mug-saucer"], ["mat-header-row", ""], ["mat-row", "", 1, "mat-row-hover", 3, "click"]],
  template: function MealsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "app-list-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("addClicked", function MealsListComponent_Template_app_list_header_addClicked_2_listener() {
        return ctx.router.navigateByUrl("meals/add");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, MealsListComponent_div_4_Template, 20, 4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-paginator", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function MealsListComponent_Template_mat_paginator_page_6_listener() {
        return ctx.loadArticles();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 9, "MEALS.NAV_TITLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("permissions", "canCreateMeals")("searchTerm", ctx.search$)("withAddButton", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 11, ctx.meals$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 13, ctx.totalRows$))("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](15, _c0))("pageSize", 10)("showFirstLastButtons", true);
    }
  },
  directives: [_shared_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_5__.ListHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _shared_no_data_placeholder_no_data_placeholder_component__WEBPACK_IMPORTED_MODULE_6__.NoDataPlaceholderComponent, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.UpperCasePipe],
  styles: [".mat-header-cell[_ngcontent-%COMP%] {\n  background: #2a3042;\n  color: white;\n}\n\n.mat-column-name[_ngcontent-%COMP%] {\n  max-width: 300px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mat-column-preparingTime[_ngcontent-%COMP%] {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mat-column-cookingTime[_ngcontent-%COMP%] {\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWxzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFBRiIsImZpbGUiOiJtZWFscy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgYmFja2dyb3VuZDogIzJhMzA0MjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLW5hbWUge1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuXHJcbi5tYXQtY29sdW1uLXByZXBhcmluZ1RpbWUge1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tY29va2luZ1RpbWUge1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuIl19 */"]
});

(0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_core_store_meals_meals_state__WEBPACK_IMPORTED_MODULE_3__.MealsState.lastPage)], MealsListComponent.prototype, "meals$", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_core_store_meals_meals_state__WEBPACK_IMPORTED_MODULE_3__.MealsState.totalRows)], MealsListComponent.prototype, "totalRows$", void 0);

MealsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.UntilDestroy)()], MealsListComponent);


/***/ }),

/***/ 57603:
/*!*****************************************************!*\
  !*** ./src/app/pages/meals/meals-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealsRoutingModule": () => (/* binding */ MealsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _meals_list_meals_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meals-list/meals-list.component */ 78964);
/* harmony import */ var _meal_details_meal_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meal-details/meal-details.component */ 93827);
/* harmony import */ var _meal_edit_meal_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meal-edit/meal-edit.component */ 5829);
/* harmony import */ var _core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shared/guards/permission-guard.service */ 97226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    {
        path: '',
        component: _meals_list_meals_list_component__WEBPACK_IMPORTED_MODULE_0__.MealsListComponent,
        canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__.PermissionGuard],
        data: {
            permission: 'canViewMeals',
        },
    },
    {
        path: 'edit/:id',
        component: _meal_edit_meal_edit_component__WEBPACK_IMPORTED_MODULE_2__.MealEditComponent,
        canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__.PermissionGuard],
        data: {
            permission: 'canEditMeals',
        },
    },
    {
        path: 'add',
        component: _meal_edit_meal_edit_component__WEBPACK_IMPORTED_MODULE_2__.MealEditComponent,
        canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__.PermissionGuard],
        data: {
            permission: 'canCreateMeals',
        },
    },
    {
        path: ':id',
        component: _meal_details_meal_details_component__WEBPACK_IMPORTED_MODULE_1__.MealDetailsComponent,
        canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__.PermissionGuard],
        data: {
            permission: 'canViewMeals',
        },
    },
];
class MealsRoutingModule {
}
MealsRoutingModule.ɵfac = function MealsRoutingModule_Factory(t) { return new (t || MealsRoutingModule)(); };
MealsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MealsRoutingModule });
MealsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MealsRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 26596:
/*!*********************************************!*\
  !*** ./src/app/pages/meals/meals.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealsModule": () => (/* binding */ MealsModule)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _meals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meals-routing.module */ 57603);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 40950);
/* harmony import */ var _meals_list_meals_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meals-list/meals-list.component */ 78964);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _meal_details_meal_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meal-details/meal-details.component */ 93827);
/* harmony import */ var _meal_edit_meal_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meal-edit/meal-edit.component */ 5829);
/* harmony import */ var _core_store_meals_meals_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/store/meals/meals.state */ 86111);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _core_meals_meal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/meals/meal.service */ 80282);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
























class MealsModule {
}
MealsModule.ɵfac = function MealsModule_Factory(t) { return new (t || MealsModule)(); };
MealsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: MealsModule });
MealsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_core_meals_meal_service__WEBPACK_IMPORTED_MODULE_7__.MealService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _meals_routing_module__WEBPACK_IMPORTED_MODULE_0__.MealsRoutingModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule,
            _ngxs_store__WEBPACK_IMPORTED_MODULE_6__.NgxsModule.forFeature([_core_store_meals_meals_state__WEBPACK_IMPORTED_MODULE_5__.MealsState]),
            ngx_permissions__WEBPACK_IMPORTED_MODULE_12__.NgxPermissionsModule.forChild(),
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocompleteModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MealsModule, { declarations: [_meal_edit_meal_edit_component__WEBPACK_IMPORTED_MODULE_4__.MealEditComponent, _meals_list_meals_list_component__WEBPACK_IMPORTED_MODULE_2__.MealsListComponent, _meal_details_meal_details_component__WEBPACK_IMPORTED_MODULE_3__.MealDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _meals_routing_module__WEBPACK_IMPORTED_MODULE_0__.MealsRoutingModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["ɵz"], ngx_permissions__WEBPACK_IMPORTED_MODULE_12__.NgxPermissionsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocompleteModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_meals_meals_module_ts.js.map