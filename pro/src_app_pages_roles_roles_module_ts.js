"use strict";
(self["webpackChunknutrisha_admin"] = self["webpackChunknutrisha_admin"] || []).push([["src_app_pages_roles_roles_module_ts"],{

/***/ 91759:
/*!********************************************************************!*\
  !*** ./src/app/pages/roles/role-details/role-details.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleDetailsComponent": () => (/* binding */ RoleDetailsComponent)
/* harmony export */ });
/* harmony import */ var F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_roles_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/roles/role.service */ 87530);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);








function RoleDetailsComponent_div_4_ng_template_9_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_11_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_13_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_15_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_21_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_23_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_25_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_27_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_29_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_31_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_37_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_39_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_41_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_43_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_49_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_51_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_53_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_55_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_57_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_63_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_65_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_67_Template(rf, ctx) {}

function RoleDetailsComponent_div_4_ng_template_69_Template(rf, ctx) {}

const _c0 = function () {
  return {
    permissionName: "canViewBlogs"
  };
};

const _c1 = function () {
  return {
    permissionName: "canCreateBlogs"
  };
};

const _c2 = function () {
  return {
    permissionName: "canEditBlogs"
  };
};

const _c3 = function () {
  return {
    permissionName: "canDeleteBlogs"
  };
};

const _c4 = function () {
  return {
    permissionName: "canViewAppUsers"
  };
};

const _c5 = function () {
  return {
    permissionName: "canViewAppUserContactInfo"
  };
};

const _c6 = function () {
  return {
    permissionName: "canBanAppUsers"
  };
};

const _c7 = function () {
  return {
    permissionName: "canModerateComments"
  };
};

const _c8 = function () {
  return {
    permissionName: "canViewComments"
  };
};

const _c9 = function () {
  return {
    permissionName: "canAssignPremiumFeaturesToAppUsers"
  };
};

const _c10 = function () {
  return {
    permissionName: "canViewAdminUsers"
  };
};

const _c11 = function () {
  return {
    permissionName: "canCreateAdminUsers"
  };
};

const _c12 = function () {
  return {
    permissionName: "canEditAdminUsers"
  };
};

const _c13 = function () {
  return {
    permissionName: "canDeleteAdminUsers"
  };
};

const _c14 = function () {
  return {
    permissionName: "canAssignMealPlanToAppUsers"
  };
};

const _c15 = function () {
  return {
    permissionName: "canViewMealPlans"
  };
};

const _c16 = function () {
  return {
    permissionName: "canCreateParentMealPlans"
  };
};

const _c17 = function () {
  return {
    permissionName: "canCreateChildMealPlans"
  };
};

const _c18 = function () {
  return {
    permissionName: "canEditMealPlans"
  };
};

const _c19 = function () {
  return {
    permissionName: "canViewMeals"
  };
};

const _c20 = function () {
  return {
    permissionName: "canCreateMeals"
  };
};

const _c21 = function () {
  return {
    permissionName: "canEditMeals"
  };
};

const _c22 = function () {
  return {
    permissionName: "canDeleteMeals"
  };
};

function RoleDetailsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "div")(6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RoleDetailsComponent_div_4_ng_template_9_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, RoleDetailsComponent_div_4_ng_template_11_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, RoleDetailsComponent_div_4_ng_template_13_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RoleDetailsComponent_div_4_ng_template_15_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div")(18, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, RoleDetailsComponent_div_4_ng_template_21_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, RoleDetailsComponent_div_4_ng_template_23_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, RoleDetailsComponent_div_4_ng_template_25_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, RoleDetailsComponent_div_4_ng_template_27_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, RoleDetailsComponent_div_4_ng_template_29_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, RoleDetailsComponent_div_4_ng_template_31_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div")(34, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, RoleDetailsComponent_div_4_ng_template_37_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, RoleDetailsComponent_div_4_ng_template_39_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, RoleDetailsComponent_div_4_ng_template_41_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, RoleDetailsComponent_div_4_ng_template_43_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div")(46, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, RoleDetailsComponent_div_4_ng_template_49_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, RoleDetailsComponent_div_4_ng_template_51_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, RoleDetailsComponent_div_4_ng_template_53_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, RoleDetailsComponent_div_4_ng_template_55_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, RoleDetailsComponent_div_4_ng_template_57_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div")(60, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](62, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, RoleDetailsComponent_div_4_ng_template_63_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, RoleDetailsComponent_div_4_ng_template_65_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, RoleDetailsComponent_div_4_ng_template_67_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, RoleDetailsComponent_div_4_ng_template_69_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 52, "PERMISSIONS." + ctx_r0.roleDetails.roleName + "_PERMISSIONS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 54, "PERMISSIONS.PARENT_NAMES.BLOGS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](64, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](65, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](66, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](67, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 56, "PERMISSIONS.PARENT_NAMES.APP_USERS_DETAILS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](68, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](69, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](70, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](71, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](72, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](73, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 58, "PERMISSIONS.PARENT_NAMES.ADMIN_USERS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](74, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](75, _c11));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](76, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](77, _c13));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](48, 60, "PERMISSIONS.PARENT_NAMES.MEAL_PLANS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](78, _c14));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](79, _c15));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](80, _c16));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](81, _c17));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](82, _c18));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](62, 62, "PERMISSIONS.PARENT_NAMES.MEALS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](83, _c19));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](84, _c20));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](85, _c21));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](86, _c22));
  }
}

function RoleDetailsComponent_ng_template_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function RoleDetailsComponent_ng_template_5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 12);
  }
}

function RoleDetailsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RoleDetailsComponent_ng_template_5_div_2_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RoleDetailsComponent_ng_template_5_ng_template_3_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const permissionName_r26 = ctx.permissionName;

    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.roleDetails.permissions.has(permissionName_r26))("ngIfElse", _r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 3, "PERMISSIONS." + permissionName_r26));
  }
}

class RoleDetailsComponent {
  constructor(activatedRoute, router, roleService) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.roleService = roleService;
  }

  ngOnInit() {
    var _this = this;

    return (0,F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const params = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this.activatedRoute.params);
      const roleId = params['id'];

      if (!roleId) {
        yield _this.router.navigateByUrl('/roles/all');
      }

      _this.roleService.getById(roleId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(res => {
        const data = res.data;
        _this.roleDetails = {
          roleName: data.roleName,
          permissions: new Set(data.permissions)
        };
      })).subscribe();
    })();
  }

}

RoleDetailsComponent.ɵfac = function RoleDetailsComponent_Factory(t) {
  return new (t || RoleDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_roles_role_service__WEBPACK_IMPORTED_MODULE_1__.RoleService));
};

RoleDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RoleDetailsComponent,
  selectors: [["app-role-details"]],
  decls: 7,
  vars: 4,
  consts: [[1, "m-3"], ["class", "margin-start-3", 4, "ngIf"], ["permission", ""], [1, "margin-start-3"], [1, "fs-4", "mb-3"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "margin-start-3", "d-flex", "justify-content-start", "align-items-center"], [1, "margin-end-2"], ["class", "permission-check has-permission d-flex justify-content-center align-items-center", 4, "ngIf", "ngIfElse"], ["noPermissions", ""], [1, "permission-check", "has-permission", "d-flex", "justify-content-center", "align-items-center"], [1, "fa-solid", "fa-check", "fs-4", 2, "color", "white"], [1, "permission-check", "no-permission"]],
  template: function RoleDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RoleDetailsComponent_div_4_Template, 70, 87, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, RoleDetailsComponent_ng_template_5_Template, 8, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "ROLES.NAV_TITLE"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.roleDetails);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: [".permission-check[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n}\n\n.has-permission[_ngcontent-%COMP%] {\n  background: #ff725a;\n}\n\n.no-permission[_ngcontent-%COMP%] {\n  background: #d9d9d9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvbGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0YiLCJmaWxlIjoicm9sZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcm1pc3Npb24tY2hlY2sge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5oYXMtcGVybWlzc2lvbiB7XHJcbiAgYmFja2dyb3VuZDogI2ZmNzI1YTtcclxufVxyXG5cclxuLm5vLXBlcm1pc3Npb24ge1xyXG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 45289:
/*!****************************************************!*\
  !*** ./src/app/pages/roles/role-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleRoutingModule": () => (/* binding */ RoleRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles-list/roles-list.component */ 40419);
/* harmony import */ var _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-details/role-details.component */ 91759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class RoleRoutingModule {
}
RoleRoutingModule.ɵfac = function RoleRoutingModule_Factory(t) { return new (t || RoleRoutingModule)(); };
RoleRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RoleRoutingModule });
RoleRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([
                {
                    path: 'all',
                    component: _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_0__.RolesListComponent,
                },
                {
                    path: 'details/:id',
                    component: _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_1__.RoleDetailsComponent,
                },
                {
                    path: '',
                    redirectTo: 'all',
                },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RoleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 40419:
/*!****************************************************************!*\
  !*** ./src/app/pages/roles/roles-list/roles-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesListComponent": () => (/* binding */ RolesListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared */ 8268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_roles_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/roles/role.service */ 87530);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/list-header/list-header.component */ 29813);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _shared_no_data_placeholder_no_data_placeholder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/no-data-placeholder/no-data-placeholder.component */ 30947);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 33935);












function RolesListComponent_div_4_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "ROLES.NAME_LABEL"), " ");
} }
function RolesListComponent_div_4_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "ROLES.LABELS." + element_r7.name), " ");
} }
function RolesListComponent_div_4_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "ROLES.PERMISSIONS_LABEL"), " ");
} }
function RolesListComponent_div_4_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RolesListComponent_div_4_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 15);
} }
function RolesListComponent_div_4_tr_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RolesListComponent_div_4_tr_9_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const row_r9 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r10.router.navigateByUrl("/roles/details/" + row_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RolesListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, RolesListComponent_div_4_th_3_Template, 3, 3, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, RolesListComponent_div_4_td_4_Template, 3, 3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, RolesListComponent_div_4_th_6_Template, 3, 3, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, RolesListComponent_div_4_td_7_Template, 2, 0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, RolesListComponent_div_4_tr_8_Template, 1, 0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, RolesListComponent_div_4_tr_9_Template, 1, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-no-data-placeholder", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r0.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.tableHeaderNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r0.tableHeaderNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r0.roles);
} }
const _c0 = function () { return [1, 5, 10, 25, 100]; };
class RolesListComponent {
    constructor(roleService, router) {
        this.roleService = roleService;
        this.router = router;
        this.tableHeaderNames = ['name', 'permissions'];
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    ngOnInit() {
        this.loadRoles();
    }
    ngOnDestroy() {
        this._unsubscribe.next();
        this._unsubscribe.complete();
    }
    ngAfterViewInit() {
        this.search$
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribe), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(150))
            .subscribe((searchTerm) => {
            this.searchWord = searchTerm;
            this.paginator.pageIndex = 0;
            this.loadRoles();
        });
    }
    loadRoles() {
        this.roleService
            .getPagedList(this.prepareQueryParams())
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribe), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)((res) => {
            this.totalRows = res.totalRows;
            this.roles = res.data;
        }))
            .subscribe();
    }
    prepareQueryParams() {
        return new _core_shared__WEBPACK_IMPORTED_MODULE_0__.PagedListQueryModel({
            pageNumber: this.paginator.pageIndex,
            pageSize: this.paginator.pageSize,
            searchWord: this.searchWord,
        });
    }
}
RolesListComponent.ɵfac = function RolesListComponent_Factory(t) { return new (t || RolesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_roles_role_service__WEBPACK_IMPORTED_MODULE_1__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router)); };
RolesListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RolesListComponent, selectors: [["app-roles-list"]], viewQuery: function RolesListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 6, vars: 12, consts: [[1, "mat-elevation-z8", "list-container"], [3, "permissions", "searchTerm", "withAddButton", "headerTitle"], [4, "ngIf"], [3, "length", "pageSize", "pageSizeOptions", "showFirstLastButtons", "page"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "permissions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "mat-row-hover", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["classes", "my-3", 3, "data"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "fa-solid", "fa-gear"], ["mat-header-row", ""], ["mat-row", "", 1, "mat-row-hover", 3, "click"]], template: function RolesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-list-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, RolesListComponent_div_4_Template, 11, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-paginator", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function RolesListComponent_Template_mat_paginator_page_5_listener() { return ctx.loadRoles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 9, "ROLES.NAV_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("permissions", "canAddArticles")("searchTerm", ctx.search$)("withAddButton", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx.totalRows)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0))("showFirstLastButtons", true);
    } }, directives: [_shared_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_2__.ListHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _shared_no_data_placeholder_no_data_placeholder_component__WEBPACK_IMPORTED_MODULE_3__.NoDataPlaceholderComponent, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: [".mat-header-cell[_ngcontent-%COMP%] {\n  background: #2a3042;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvbGVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJyb2xlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgYmFja2dyb3VuZDogIzJhMzA0MjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 48352:
/*!*********************************************!*\
  !*** ./src/app/pages/roles/roles.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesModule": () => (/* binding */ RolesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _role_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role-routing.module */ 45289);
/* harmony import */ var _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles-list/roles-list.component */ 40419);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 40950);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _core_roles_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/roles/role.service */ 87530);
/* harmony import */ var _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role-details/role-details.component */ 91759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);










class RolesModule {
}
RolesModule.ɵfac = function RolesModule_Factory(t) { return new (t || RolesModule)(); };
RolesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RolesModule });
RolesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_core_roles_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _role_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoleRoutingModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RolesModule, { declarations: [_roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_1__.RolesListComponent, _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_4__.RoleDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _role_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoleRoutingModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_roles_roles_module_ts.js.map