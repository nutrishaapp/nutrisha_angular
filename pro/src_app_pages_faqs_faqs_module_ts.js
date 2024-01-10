"use strict";
(self["webpackChunknutrisha_admin"] = self["webpackChunknutrisha_admin"] || []).push([["src_app_pages_faqs_faqs_module_ts"],{

/***/ 43463:
/*!***************************************************!*\
  !*** ./src/app/pages/faqs/faqs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsRoutingModule": () => (/* binding */ FaqsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs/faqs.component */ 7889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_0__.FaqsComponent }];
class FaqsRoutingModule {
}
FaqsRoutingModule.ɵfac = function FaqsRoutingModule_Factory(t) { return new (t || FaqsRoutingModule)(); };
FaqsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FaqsRoutingModule });
FaqsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FaqsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 16392:
/*!*******************************************!*\
  !*** ./src/app/pages/faqs/faqs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsModule": () => (/* binding */ FaqsModule)
/* harmony export */ });
/* harmony import */ var _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs/faqs.component */ 7889);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _faqs_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faqs-routing.module */ 43463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class FaqsModule {
}
FaqsModule.ɵfac = function FaqsModule_Factory(t) { return new (t || FaqsModule)(); };
FaqsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FaqsModule });
FaqsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _faqs_routing_module__WEBPACK_IMPORTED_MODULE_1__.FaqsRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FaqsModule, { declarations: [_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_0__.FaqsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _faqs_routing_module__WEBPACK_IMPORTED_MODULE_1__.FaqsRoutingModule] }); })();


/***/ }),

/***/ 7889:
/*!***************************************************!*\
  !*** ./src/app/pages/faqs/faqs/faqs.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsComponent": () => (/* binding */ FaqsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FaqsComponent {
    constructor() { }
    ngOnInit() {
    }
}
FaqsComponent.ɵfac = function FaqsComponent_Factory(t) { return new (t || FaqsComponent)(); };
FaqsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqsComponent, selectors: [["app-faqs"]], decls: 91, vars: 0, consts: [[1, "page"], [1, "header"], [1, "container"], [1, "title"], [1, "translations-content-container"], [1, ""], [1, "aHl"], ["id", ":zp", "tabindex", "-1"], ["id", ":zi", "jslog", "20277; u014N:xr6bB; 4:W251bGwsbnVsbCxbXV0.", 1, "ii", "gt"], ["id", ":10n", 1, "a3s", "aiL"], ["dir", "ltr"], [2, "text-align", "center"], [1, "yj6qo"], [1, "adL"], ["id", ":zt", 1, "ii", "gt", 2, "display", "none"], ["id", ":zu", 1, "a3s", "aiL"], [1, "hi"], [1, "footer"]], template: function FaqsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FAQS for Nutrisha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 2)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "h2", 11)(14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Frequently Asked Questions (FAQ)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last updated: 2023-11-06");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p")(19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Q: What is Nutrisha?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p")(22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Nutrisha is an authentic and reliable nutrition mobile app that has been thoughtfully designed to support your health and wellness journey. With personalized meal plans, intuitive tracking tools, and expert insights, Nutrisha is your trusted companion in achieving your nutrition goals.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p")(26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Q: How does Nutrisha provide nutritional analysis?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p")(29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Nutrisha leverages the extensive food database from Edamam.com to offer accurate and detailed nutritional analysis for a wide variety of foods. We take pride in providing you with dependable information to help you make informed decisions about your meals.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p")(33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Q: Can I get tailored meal plans through Nutrisha?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p")(36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Absolutely! Nutrisha offers subscription-based tailored meal plans carefully crafted by our team of highly qualified nutritionists and healthcare professionals. With their expertise and a proven track record, our team customizes meal plans to meet your specific needs, health requirements, and lifestyle, ensuring you receive trustworthy guidance on your nutrition journey.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p")(40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Q: Can I manage my subscription within Nutrisha?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p")(43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Your satisfaction is important to us. Nutrisha allows you to easily manage your subscription preferences, providing you with control and flexibility. You have the freedom to deactivate auto-renewal or cancel your subscription at any time, while still enjoying the full benefits of your personalized meal plans until the end of the subscription period.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p")(47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Q: What are the different subscription options in Nutrisha?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p")(50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Nutrisha offers both a free and premium subscription option to cater to your individual preferences. The free version includes valuable features such as a curated blog, weight and meal logging, and health metric tracking. Our premium subscription unlocks an array of enhanced functionalities and personalized meal plans, thoughtfully designed by our team of nutritionists and healthcare professionals. For detailed pricing information, please refer to the app.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p")(54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Q: Does Nutrisha focus on long-term healthy habits?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p")(57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " At Nutrisha, we genuinely care about your long-term well-being. Our approach combines evidence-based nutrition principles with cognitive-behavioral therapy (CBT) and psychology-based methods. By addressing both the physical and mental aspects of nutrition, we empower you to develop sustainable and healthy habits for lasting success on your wellness journey.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p")(61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Q: Is Nutrisha available on both iOS and Android?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p")(64, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Absolutely! Nutrisha is available for download on both iOS and Android devices, making it accessible to a wide range of users. You can find Nutrisha on the App Store for iOS devices and on the Google Play Store for Android devices. Embrace the convenience and reliability of Nutrisha, regardless of your preferred platform.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p")(68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Q: Is my data safe and private with Nutrisha?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p")(71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " We understand the importance of privacy and security. Nutrisha takes your data protection seriously and adheres to industry-standard encryption protocols. Your personal information remains confidential and secure, and we have implemented robust measures to safeguard your privacy. For detailed information, please review our comprehensive Privacy Policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p")(75, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Q: How can I contact Nutrisha's support team?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p")(78, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " We are here to support you every step of the way. If you have any questions, feedback, or concerns, our dedicated support team is genuinely committed to assisting you. Simply reach out to us through the contact section within the Nutrisha app, and we will be delighted to help you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p")(82, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "We hope this FAQ section provides the information you were looking for. If you have any further inquiries, please don't hesitate to reach out to us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 12)(85, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #000;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  line-height: 28px;\n  margin: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 60px;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  line-height: 48px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 36px;\n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 30px;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\nh5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  line-height: 24px;\n  font-weight: 700;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: cacl(16px);\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  cursor: pointer;\n  color: #000;\n}\n\na[_ngcontent-%COMP%]:hover, a[rel~=nofollow][_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\na[rel~=nofollow][_ngcontent-%COMP%] {\n  color: #0452a5;\n}\n\na[rel~=nofollow][_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.visible[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90%;\n  max-width: 1024px;\n  margin: 0 auto;\n}\n\n.header[_ngcontent-%COMP%] {\n  color: #000;\n  padding: 16px 0;\n}\n\n.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 24px;\n  font-weight: 700;\n  margin: 0;\n}\n\n.translations-list-container[_ngcontent-%COMP%] {\n  color: #000;\n  padding-bottom: 8px;\n  margin: 0 0 16px;\n}\n\n.translations-list-container[_ngcontent-%COMP%]   .translations-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.translations-list-container[_ngcontent-%COMP%]   .translations-list[_ngcontent-%COMP%]   .translations-list-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0;\n  margin: 0 8px 8px 0;\n  color: #fff;\n}\n\n.translations-list-container[_ngcontent-%COMP%]   .translations-list[_ngcontent-%COMP%]   .translations-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n}\n\n.translations-list-container[_ngcontent-%COMP%]   .translations-list[_ngcontent-%COMP%]   .translations-list-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #334055;\n}\n\n.translations-content-container[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  border-top: 1px solid #eee;\n}\n\n.footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #eee;\n  margin: 32px 0 0;\n  padding: 16px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5REFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBOztFQUVFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBOztFQUVFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTs7RUFFRSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBOztFQUVFLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFJRSxXQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUFGRjs7QUFLQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRkYiLCJmaWxlIjoiZmFxcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbmgxLFxyXG5oMiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBsaW5lLWhlaWdodDogNDhweDtcclxufVxyXG5cclxuaDMge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMzZweDtcclxufVxyXG5cclxuaDMsXHJcbmg0IHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG5oNSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5oNSxcclxuaDYge1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmg2IHtcclxuICBmb250LXNpemU6IGNhY2woMTZweCk7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbmE6aG92ZXIsXHJcbmFbcmVsfj1cIm5vZm9sbG93XCJdIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuYVtyZWx+PVwibm9mb2xsb3dcIl0ge1xyXG4gIGNvbG9yOiAjMDQ1MmE1O1xyXG59XHJcblxyXG5hW3JlbH49XCJub2ZvbGxvd1wiXTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4udmlzaWJsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5wYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHBhZGRpbmc6IDE2cHggMDtcclxufVxyXG5cclxuLmhlYWRlciAudGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRyYW5zbGF0aW9ucy1saXN0LWNvbnRhaW5lciB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICBtYXJnaW46IDAgMCAxNnB4O1xyXG59XHJcblxyXG4udHJhbnNsYXRpb25zLWxpc3QtY29udGFpbmVyIC50cmFuc2xhdGlvbnMtbGlzdCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnRyYW5zbGF0aW9ucy1saXN0LWNvbnRhaW5lciAudHJhbnNsYXRpb25zLWxpc3QgLnRyYW5zbGF0aW9ucy1saXN0LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMCA4cHggOHB4IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50cmFuc2xhdGlvbnMtbGlzdC1jb250YWluZXIgLnRyYW5zbGF0aW9ucy1saXN0IC50cmFuc2xhdGlvbnMtbGlzdC1pdGVtIGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA0cHggOHB4O1xyXG59XHJcblxyXG4udHJhbnNsYXRpb25zLWxpc3QtY29udGFpbmVyXHJcbiAgLnRyYW5zbGF0aW9ucy1saXN0XHJcbiAgLnRyYW5zbGF0aW9ucy1saXN0LWl0ZW1cclxuICBhLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogIzMzNDA1NTtcclxufVxyXG5cclxuLnRyYW5zbGF0aW9ucy1jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgbWFyZ2luOiAzMnB4IDAgMDtcclxuICBwYWRkaW5nOiAxNnB4IDA7XHJcbn1cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_faqs_faqs_module_ts.js.map