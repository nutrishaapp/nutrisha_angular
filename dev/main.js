"use strict";
(self["webpackChunknutrisha_admin"] = self["webpackChunknutrisha_admin"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/auth/guards/auth.guard */ 74694);
/* harmony import */ var _pages_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/base/base.component */ 23972);
/* harmony import */ var _core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/shared/guards/permission-guard.service */ 97226);
/* harmony import */ var _core_shared_no_access_no_access_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/shared/no-access/no-access.component */ 290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    {
        path: 'privacy',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_privacy_privacy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/privacy/privacy.module */ 2886)).then((m) => m.PrivacyModule),
    },
    {
        path: 'terms',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_terms_terms_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/terms/terms.module */ 27498)).then((m) => m.TermsModule),
    },
    {
        path: 'faqs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_faqs_faqs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/faqs/faqs.module */ 16392)).then((m) => m.FaqsModule),
    },
    {
        path: 'references',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_references-and-resources_references-and-resources_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/references-and-resources/references-and-resources.module */ 37491)).then((m) => m.ReferencesAndResourcesModule),
    },
    {
        path: 'auth',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/auth.module */ 6621)).then((m) => m.AuthModule),
    },
    {
        path: '',
        canActivate: [_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        component: _pages_base_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_polls_poll_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/polls/poll.module */ 48824)).then((m) => m.PollModule),
            },
            {
                path: 'polls',
                canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__.PermissionGuard],
                data: {
                    permission: 'canAccessBlogsModule',
                },
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_polls_poll_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/polls/poll.module */ 48824)).then((m) => m.PollModule),
            },
            {
                path: 'articles',
                canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__.PermissionGuard],
                data: {
                    permission: 'canAccessBlogsModule',
                },
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_articles_article_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/articles/article.module */ 12192)).then((m) => m.ArticleModule),
            },
            {
                path: 'blog-videos',
                canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__.PermissionGuard],
                data: {
                    permission: 'canAccessBlogsModule',
                },
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_blog-videos_blog-videos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/blog-videos/blog-videos.module */ 3289)).then((m) => m.BlogVideosModule),
            },
            {
                path: 'Hunger-videos',
                canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__.PermissionGuard],
                data: {
                    permission: 'canAccessBlogsModule',
                },
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/hunger-vedio/hunger-vedio.module */ 88938)).then((m) => m.HungerVedioModule),
            },
            {
                path: 'app/users',
                canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__.PermissionGuard],
                data: {
                    permission: 'canAccessAppUsersModule',
                },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_meal-plan_meal-plan_module_ts"), __webpack_require__.e("src_app_pages_mobile-user_mobile-user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mobile-user/mobile-user.module */ 72909)).then((m) => m.MobileUserModule),
            },
            {
                path: 'meals',
                canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__.PermissionGuard],
                data: {
                    permission: 'canAccessMealsModule',
                },
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_meals_meals_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/meals/meals.module */ 26596)).then((m) => m.MealsModule),
            },
            {
                path: 'plans',
                canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__.PermissionGuard],
                data: {
                    permission: 'canAccessMealPlansModule',
                },
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_meal-plan_meal-plan_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/meal-plan/meal-plan.module */ 98675)).then((m) => m.MealPlanModule),
            },
            {
                path: 'admin-users',
                canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__.PermissionGuard],
                data: {
                    permission: 'canAccessAdminUsersModule',
                },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_admin-users_admin-users_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin-users/admin-users.module */ 53774)).then((m) => m.AdminUsersModule),
            },
            {
                path: 'notifications',
                canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__.PermissionGuard],
                data: {
                    permission: 'canAccessAdminUsersModule',
                },
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notifications/notifications/notifications.module */ 95440)).then((m) => m.NotificationsModule),
            },
            {
                path: 'profiles',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 88558)).then((m) => m.ProfileModule),
            },
            {
                path: 'roles',
                canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__.PermissionGuard],
                data: {
                    permission: 'canAccessAdminUsersModule',
                },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_roles_roles_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/roles/roles.module */ 48352)).then((m) => m.RolesModule),
            },
            { path: 'no-access', component: _core_shared_no_access_no_access_component__WEBPACK_IMPORTED_MODULE_3__.NoAccessComponent },
            { path: '**', redirectTo: 'articles', pathMatch: 'full' },
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/shared */ 8268);
/* harmony import */ var _pages_shared_app_request_loader_app_request_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/shared/app-request-loader/app-request-loader.component */ 97997);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);








class AppComponent {
  constructor(store, translationService, splashScreenService) {
    this.store = store;
    this.translationService = translationService;
    this.splashScreenService = splashScreenService;
    this._unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.title = 'frontend';
  }

  ngOnInit() {
    setTimeout(() => {
      this.splashScreenService.hide();
    }, 5000);
    this.translationService.initializeLanguage(this.translationService.getSelectedLanguage());
  }

  ngOnDestroy() {
    this._unsubscribe.next();

    this._unsubscribe.complete();
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_shared__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_shared__WEBPACK_IMPORTED_MODULE_1__.SplashScreenService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 3,
  consts: [[3, "dir"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-app-request-loader")(1, "router-outlet", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx.translationService.directionChanged$));
    }
  },
  directives: [_pages_shared_app_request_loader_app_request_loader_component__WEBPACK_IMPORTED_MODULE_2__.AppRequestLoaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Dir],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".progress-bar[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.progress[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n#fileInput[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  z-index: 10;\n  opacity: 0;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n}\n\n.mat-toolbar-single-row[_ngcontent-%COMP%] {\n  height: auto !important;\n  background: transparent;\n  padding: 0;\n}\n\n.mat-toolbar-single-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.message[_ngcontent-%COMP%] {\n  background-color: #ddd;\n  padding: 15px;\n  color: #333;\n  border: #aaa solid 1px;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcy1iYXIge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnByb2dyZXNzIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4jZmlsZUlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyOiAjYWFhIHNvbGlkIDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _core_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/auth/services/auth.service */ 75397);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/auth/auth.module */ 6621);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32202);
/* harmony import */ var _pages_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/base/base.component */ 23972);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/shared */ 8268);
/* harmony import */ var _pages_shared_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/shared/header-title/header-title.component */ 44563);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _core_interceptors_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/interceptors/interceptor.service */ 40612);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _pages_shared_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/shared/material */ 56993);
/* harmony import */ var _core_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/loader/loader.component */ 74541);
/* harmony import */ var _pages_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/shared/shared.module */ 40950);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngxs/devtools-plugin */ 62015);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _core_admin_user_user_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/admin-user/user.module */ 91087);
/* harmony import */ var _core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/shared/guards/permission-guard.service */ 97226);
/* harmony import */ var _core_store_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/store/auth */ 78811);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _core_shared_no_access_no_access_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/shared/no-access/no-access.component */ 290);
/* harmony import */ var _core_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/shared/confirm-dialog/confirm-dialog.component */ 92911);
/* harmony import */ var _pages_mobile_user_mobile_user_details_sub_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/mobile-user/mobile-user-details/sub/dialog/dialog.component */ 79342);
/* harmony import */ var _pages_mobile_user_mobile_user_details_sub_upload_document_dialog_upload_document_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/mobile-user/mobile-user-details/sub/upload-document-dialog/upload-document-dialog.component */ 98659);
/* harmony import */ var _pages_mobile_user_mobile_user_details_sub_user_documents_dialog_user_documents_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/mobile-user/mobile-user-details/sub/user-documents-dialog/user-documents-dialog.component */ 13475);
/* harmony import */ var _pages_shared_rich_text_rich_text_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/shared/rich-text/rich-text.module */ 43780);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @swimlane/ngx-charts */ 49458);
/* harmony import */ var _pages_notifications_send_notification_send_notification_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/notifications/send-notification/send-notification.component */ 64327);
/* harmony import */ var _pages_notifications_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/notifications/notifications/notifications.module */ 95440);
/* harmony import */ var _pages_hunger_vedio_hunger_vedio_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/hunger-vedio/hunger-vedio.module */ 88938);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);












































function initializeAppFactory(store) {
    return () => {
        store.dispatch(new _core_store_auth__WEBPACK_IMPORTED_MODULE_16__.UserActions.LoadCurrentUser());
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.of)(null);
    };
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ providers: [
        _core_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_15__.PermissionGuard,
        _core_shared__WEBPACK_IMPORTED_MODULE_5__.SplashScreenService,
        _core_shared__WEBPACK_IMPORTED_MODULE_5__.NavHeaderTitleService,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HTTP_INTERCEPTORS,
            useClass: _core_interceptors_interceptor_service__WEBPACK_IMPORTED_MODULE_8__.InterceptorService,
            multi: true,
        },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_27__.APP_INITIALIZER,
            useFactory: initializeAppFactory,
            deps: [_ngxs_store__WEBPACK_IMPORTED_MODULE_12__.Store],
            multi: true,
        },
    ], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule,
            _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_3__.AuthModule.forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslateLoader,
                    useFactory: function HttpLoaderFactory(httpClient) {
                        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_33__.TranslateHttpLoader(httpClient, '/assets/i18n/', `.json?Version=` + "2JfTJ4DscMI69-_Pqz08DQ");
                    },
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClient],
                },
            }),
            _pages_shared_material__WEBPACK_IMPORTED_MODULE_9__.MaterialModule,
            _pages_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__.SharedModule,
            _ngxs_store__WEBPACK_IMPORTED_MODULE_12__.NgxsModule.forRoot([], {
                developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.production,
            }),
            _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_13__.NgxsReduxDevtoolsPluginModule.forRoot(),
            ngx_permissions__WEBPACK_IMPORTED_MODULE_34__.NgxPermissionsModule.forRoot(),
            _core_admin_user_user_module__WEBPACK_IMPORTED_MODULE_14__.UserModule,
            _pages_shared_rich_text_rich_text_module__WEBPACK_IMPORTED_MODULE_22__.RichTextModule,
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_35__.NgxChartsModule,
            _pages_notifications_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_24__.NotificationsModule,
            _pages_hunger_vedio_hunger_vedio_module__WEBPACK_IMPORTED_MODULE_25__.HungerVedioModule,
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_36__.NgMultiSelectDropDownModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pages_base_base_component__WEBPACK_IMPORTED_MODULE_4__.BaseComponent,
        _pages_shared_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_6__.HeaderTitleComponent,
        _core_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__.LoaderComponent,
        _core_shared_no_access_no_access_component__WEBPACK_IMPORTED_MODULE_17__.NoAccessComponent,
        _core_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_18__.ConfirmDialogComponent,
        _pages_mobile_user_mobile_user_details_sub_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_19__.DialogComponent,
        _pages_mobile_user_mobile_user_details_sub_upload_document_dialog_upload_document_dialog_component__WEBPACK_IMPORTED_MODULE_20__.UploadDocumentDialogComponent,
        _pages_mobile_user_mobile_user_details_sub_user_documents_dialog_user_documents_dialog_component__WEBPACK_IMPORTED_MODULE_21__.UserDocumentsDialogComponent,
        _pages_notifications_send_notification_send_notification_component__WEBPACK_IMPORTED_MODULE_23__.SendNotificationComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule, _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_3__.AuthModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslateModule, _pages_shared_material__WEBPACK_IMPORTED_MODULE_9__.MaterialModule,
        _pages_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__.SharedModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_12__["ɵj"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_13__.NgxsReduxDevtoolsPluginModule, ngx_permissions__WEBPACK_IMPORTED_MODULE_34__.NgxPermissionsModule, _core_admin_user_user_module__WEBPACK_IMPORTED_MODULE_14__.UserModule,
        _pages_shared_rich_text_rich_text_module__WEBPACK_IMPORTED_MODULE_22__.RichTextModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_35__.NgxChartsModule,
        _pages_notifications_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_24__.NotificationsModule,
        _pages_hunger_vedio_hunger_vedio_module__WEBPACK_IMPORTED_MODULE_25__.HungerVedioModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_36__.NgMultiSelectDropDownModule] }); })();


/***/ }),

/***/ 63939:
/*!****************************************************************!*\
  !*** ./src/app/core/admin-user/services/admin-user.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminUserService": () => (/* binding */ AdminUserService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared */ 8268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/services/auth.service */ 75397);






const adminUserApi = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAdminV1Url + 'AdminUser';
class AdminUserService {
    constructor(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
    }
    loadCurrentUser() {
        const token = this.authService.getToken();
        if (!token) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
        }
        return this.httpClient.get(adminUserApi + '/GetUser');
    }
    getPagedList(queryParams) {
        return this.httpClient.get(adminUserApi + '/getPagedList', {
            params: _shared__WEBPACK_IMPORTED_MODULE_1__.HttpUtilsService.prepareGetPagedListQueryParams(queryParams),
        });
    }
    getById(id) {
        return this.httpClient.get(adminUserApi + '/getById', {
            params: { id },
        });
    }
    put(userId, roleId) {
        return this.httpClient.put(adminUserApi + '/put', {
            userId,
            roleId,
        });
    }
    post(user) {
        return this.httpClient.post(adminUserApi + '/post', user);
    }
    delete(id) {
        return this.httpClient.delete(adminUserApi + '/delete', {
            params: { id },
        });
    }
    updateProfile(data) {
        var _a;
        if (!data)
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
        const form = new FormData();
        form.append('name', data.name);
        form.append('email', data.email);
        if ((_a = data.image) === null || _a === void 0 ? void 0 : _a.file) {
            form.append('Image', data.image.file, data.image.file.name);
        }
        return this.httpClient.put(adminUserApi + '/UpdateProfile', form);
    }
}
AdminUserService.ɵfac = function AdminUserService_Factory(t) { return new (t || AdminUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
AdminUserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AdminUserService, factory: AdminUserService.ɵfac });


/***/ }),

/***/ 91087:
/*!************************************************!*\
  !*** ./src/app/core/admin-user/user.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _services_admin_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/admin-user.service */ 63939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class UserModule {
}
UserModule.ɵfac = function UserModule_Factory(t) { return new (t || UserModule)(); };
UserModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [_services_admin_user_service__WEBPACK_IMPORTED_MODULE_0__.AdminUserService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] }); })();


/***/ }),

/***/ 74694:
/*!************************************************!*\
  !*** ./src/app/core/auth/guards/auth.guard.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 75397);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isLoggedIn()) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true);
        }
        this.router.navigate(['/auth/login']);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(false);
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ 75397:
/*!****************************************************!*\
  !*** ./src/app/core/auth/services/auth.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 89196);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);




const baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAdminV1Url + 'auth';
class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    login(loginModel) {
        return this.httpClient
            .post(baseUrl + '/login', loginModel)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)((res) => {
            this.setToken(res.data.token);
            this.setIsOwned(res.data.user.isOwned);
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.shareReplay)(1));
    }
    logOut() {
        localStorage.removeItem('token');
        localStorage.getItem('expiryDate');
    }
    isLoggedIn() {
        return !!this.getToken();
    }
    getToken() {
        return localStorage.getItem('token');
    }
    requestResetPassword(email) {
        return this.httpClient.post(baseUrl + '/requestResetPassword', {
            email,
        });
    }
    resetPassword(param) {
        return this.httpClient.post(baseUrl + '/resetPassword', param);
    }
    changePassword(param) {
        return this.httpClient.post(baseUrl + '/changePassword', param);
    }
    isExpired() {
        const expiryDate = localStorage.getItem('expiryDate');
        if (!expiryDate) {
            return true;
        }
        return new Date() > new Date(expiryDate);
    }
    setToken(token) {
        localStorage.setItem('expiryAt', new Date().toString());
        localStorage.setItem('token', token);
    }
    setIsOwned(isOwned) {
        localStorage.setItem('isOwned', JSON.stringify(isOwned));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


/***/ }),

/***/ 55666:
/*!*******************************************!*\
  !*** ./src/app/core/blog-videos/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BLogVideoDetailsViewModel": () => (/* reexport safe */ _view_models_blog_video_details_view_model__WEBPACK_IMPORTED_MODULE_4__.BLogVideoDetailsViewModel),
/* harmony export */   "BlogVideoParser": () => (/* reexport safe */ _parser_blog_video_parser__WEBPACK_IMPORTED_MODULE_2__.BlogVideoParser),
/* harmony export */   "BlogVideoService": () => (/* reexport safe */ _services_blog_video_service__WEBPACK_IMPORTED_MODULE_3__.BlogVideoService)
/* harmony export */ });
/* harmony import */ var _models_blog_video_list_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/blog-video-list.model */ 70468);
/* harmony import */ var _models_post_blog_video_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/post-blog-video.model */ 83048);
/* harmony import */ var _parser_blog_video_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser/blog-video.parser */ 85731);
/* harmony import */ var _services_blog_video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/blog-video.service */ 66251);
/* harmony import */ var _view_models_blog_video_details_view_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-models/blog-video-details.view.model */ 22840);








/***/ }),

/***/ 36548:
/*!**********************************************************************!*\
  !*** ./src/app/core/blog-videos/models/blog-video-details.models.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogVideoDetailsModel": () => (/* binding */ BlogVideoDetailsModel)
/* harmony export */ });
class BlogVideoDetailsModel {
}


/***/ }),

/***/ 70468:
/*!******************************************************************!*\
  !*** ./src/app/core/blog-videos/models/blog-video-list.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 83048:
/*!******************************************************************!*\
  !*** ./src/app/core/blog-videos/models/post-blog-video.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 85731:
/*!**************************************************************!*\
  !*** ./src/app/core/blog-videos/parser/blog-video.parser.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogVideoParser": () => (/* binding */ BlogVideoParser)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ 8268);
/* harmony import */ var _models_blog_video_details_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/blog-video-details.models */ 36548);
/* harmony import */ var _view_models_blog_video_details_view_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-models/blog-video-details.view.model */ 22840);



class BlogVideoParser {
    static toViewModel(model) {
        const viewModel = new _view_models_blog_video_details_view_model__WEBPACK_IMPORTED_MODULE_2__.BLogVideoDetailsViewModel();
        Object.assign(viewModel, model);
        viewModel.coverImage = _shared__WEBPACK_IMPORTED_MODULE_0__.Media.getMediaByFlag(model.media, _shared__WEBPACK_IMPORTED_MODULE_0__.MediaFlags.CoverImage);
        viewModel.mainVideo = _shared__WEBPACK_IMPORTED_MODULE_0__.Media.getMediaByFlag(model.media, _shared__WEBPACK_IMPORTED_MODULE_0__.MediaFlags.MainMedia);
        return viewModel;
    }
    static toModel(viewModel) {
        const model = new _models_blog_video_details_models__WEBPACK_IMPORTED_MODULE_1__.BlogVideoDetailsModel();
        Object.assign(model, viewModel);
        viewModel.mainVideo[0].flags = ['MainMedia'];
        let media = [...viewModel.mainVideo];
        if (viewModel.coverImage && viewModel.coverImage.length) {
            viewModel.coverImage[0].flags = ['CoverImage'];
            media = [...media, ...viewModel.coverImage];
        }
        model.media = media;
        return model;
    }
}


/***/ }),

/***/ 66251:
/*!*****************************************************************!*\
  !*** ./src/app/core/blog-videos/services/blog-video.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogVideoService": () => (/* binding */ BlogVideoService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ 8268);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





const blogVideoApi = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseAdminV1Url + 'BlogVideo';
class BlogVideoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getPagedList(queryParams) {
        return this.httpClient.get(blogVideoApi + '/getPagedList', {
            params: _shared__WEBPACK_IMPORTED_MODULE_0__.HttpUtilsService.prepareGetPagedListQueryParams(queryParams),
        });
    }
    getById(id) {
        return this.httpClient.get(`${blogVideoApi}/GetById?id=${id}`);
    }
    delete(id) {
        return this.httpClient.delete(`${blogVideoApi}/Delete?id=${id}`);
    }
    post(body) {
        const formData = new FormData();
        formData.append('subject', body.subject);
        formData.append('tagId', body.tagId);
        _shared__WEBPACK_IMPORTED_MODULE_0__.HttpUtilsService.appendMediaToForm(formData, body.media);
        return this.httpClient
            .post(blogVideoApi + '/post', formData, {
            observe: 'events',
            reportProgress: true,
        })
            .pipe(_shared__WEBPACK_IMPORTED_MODULE_0__.HttpUtilsService.handleUploadProgress(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((result) => result.body));
    }
    edit(body) {
        const formData = new FormData();
        formData.append('subject', body.subject);
        formData.append('id', body.id);
        formData.append('tagId', body.tagId);
        _shared__WEBPACK_IMPORTED_MODULE_0__.HttpUtilsService.appendMediaToForm(formData, body.media);
        return this.httpClient
            .put(blogVideoApi + '/put', formData, {
            observe: 'events',
            reportProgress: true,
        })
            .pipe(_shared__WEBPACK_IMPORTED_MODULE_0__.HttpUtilsService.handleUploadProgress(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((result) => result.body));
    }
}
BlogVideoService.ɵfac = function BlogVideoService_Factory(t) { return new (t || BlogVideoService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
BlogVideoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BlogVideoService, factory: BlogVideoService.ɵfac });


/***/ }),

/***/ 22840:
/*!*******************************************************************************!*\
  !*** ./src/app/core/blog-videos/view-models/blog-video-details.view.model.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BLogVideoDetailsViewModel": () => (/* binding */ BLogVideoDetailsViewModel)
/* harmony export */ });
class BLogVideoDetailsViewModel {
}


/***/ }),

/***/ 76945:
/*!*************************************!*\
  !*** ./src/app/core/blogs/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogTagDetailsModel": () => (/* reexport safe */ _models_blog_tag_models__WEBPACK_IMPORTED_MODULE_0__.BlogTagDetailsModel),
/* harmony export */   "BlogTagService": () => (/* reexport safe */ _services_blog_tag_service__WEBPACK_IMPORTED_MODULE_1__.BlogTagService)
/* harmony export */ });
/* harmony import */ var _models_blog_tag_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/blog-tag.models */ 88026);
/* harmony import */ var _services_blog_tag_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/blog-tag.service */ 2023);




/***/ }),

/***/ 88026:
/*!******************************************************!*\
  !*** ./src/app/core/blogs/models/blog-tag.models.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogTagDetailsModel": () => (/* binding */ BlogTagDetailsModel)
/* harmony export */ });
class BlogTagDetailsModel {
}


/***/ }),

/***/ 2023:
/*!*********************************************************!*\
  !*** ./src/app/core/blogs/services/blog-tag.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogTagService": () => (/* binding */ BlogTagService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAdminV1Url + 'BlogTag/';
class BlogTagService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    addTag(model) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().append('Authorization', `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIyNCIsIklzQWRtaW4iOiJUcnVlIiwibmJmIjoxNjU0MjE0NDk4LCJleHAiOjE2NTQzMDA4OTgsImlhdCI6MTY1NDIxNDQ5OH0.HRJBvflRmKiPW_D8KlLlM3WbvfXgmMg38zbocLIlTtC-XQ7LnU3xBWyAc3GcPPClH3vvEjOfRUIpY3Gk-k3KTA`);
        return this.httpClient
            .post(url + 'post', model, {
            headers,
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res.data));
    }
    getAll(keyword) {
        let params;
        if (keyword) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('keyword', keyword);
        }
        return this.httpClient
            .get(url + 'getAll', {
            params: params,
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => response.data));
    }
}
BlogTagService.ɵfac = function BlogTagService_Factory(t) { return new (t || BlogTagService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
BlogTagService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BlogTagService, factory: BlogTagService.ɵfac });


/***/ }),

/***/ 24988:
/*!********************************************************************!*\
  !*** ./src/app/core/hunger-vedio/services/hunger-vedio.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HungerVedioService": () => (/* binding */ HungerVedioService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




const hungerVideoApi = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/Admin/api/v1/HungerVedioVideo';
class HungerVedioService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/Admin/api/v1/HungerVedioVideo/Post';
        this.hungerTypeUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/mobile/api/v1/HungerType/GetAll';
        this.updateUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/Admin/api/v1/HungerVedioVideo/Put';
        this.token = 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxMyIsIklzQWRtaW4iOiJUcnVlIiwibmJmIjoxNjk2NTA1NzUyLCJleHAiOjE3Mjc2MDk3NTEsImlhdCI6MTY5NjUwNTc1Mn0.ae9mVvvphXN0scDAUErWaWrVnEppbelToEDKx8qgKkdQKWgS3WtRSXe0EV76_r_zOICzVL8ePWu4wai96UpW2Q';
    }
    getVideos(page, size, search) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'accept': '*/*',
        });
        const params = {
            page: page.toString(),
            size: size.toString(),
            search: search
        };
        return this.httpClient.get(hungerVideoApi + '/GetPagedList', { headers, params });
    }
    // getPagedList(
    //   queryParams: PagedListQueryModel
    // ): Observable<BaseV1ResponseModel<HungerVideoListModel[]>> {
    //   const headers = new HttpHeaders({
    //     'accept': '*/*',
    //   });
    //   return this.httpClient.get<BaseV1ResponseModel<HungerVideoListModel[]>>(
    //     hungerVideoApi + '/GetPagedList',
    //     {
    //       headers: headers,
    //       params: HttpUtilsService.prepareGetPagedListQueryParams(queryParams),
    //     }
    //   );
    // }
    // getById(id: string): Observable<BaseV1ResponseModel<any>> {
    //   return this.httpClient.get<BaseV1ResponseModel<any>>(
    //     `${hungerVideoApi}/GetById?id=${id}`
    //   );
    // }
    // delete(id: string): Observable<BaseV1ObjectResponseModel<any>> {
    //   return this.httpClient.delete<BaseV1ObjectResponseModel<any>>(
    //     `${hungerVideoApi}/Delete?id=${id}`
    //   );
    // }
    // post(body: any): Observable<BaseV1ResponseModel<string>> {
    //   const formData = new FormData();
    //   formData.append('Subject', body.subject);
    //   formData.append('HungerTypeId', '2');
    //   formData.append('Files[0].file', body.media);
    //   formData.append('Files[0].Flags', 'Vedio');
    //   return this.httpClient
    //     .post<BaseV1ResponseModel<string>>(hungerVideoApi + '/Post', formData, {
    //       observe: 'events',
    //       reportProgress: true,
    //     })
    //     .pipe(
    //       HttpUtilsService.handleUploadProgress(),
    //       map((result) => result.body)
    //     );
    // }
    // postHungerVideo(file: File, hungerTypeId: string, subject: string): Observable<any> {
    //   const headers = new HttpHeaders({
    //     'accept': '/',
    //     'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxMyIsIklzQWRtaW4iOiJUcnVlIiwibmJmIjoxNjk2NTA1NzUyLCJleHAiOjE3Mjc2MDk3NTEsImlhdCI6MTY5NjUwNTc1Mn0.ae9mVvvphXN0scDAUErWaWrVnEppbelToEDKx8qgKkdQKWgS3WtRSXe0EV76_r_zOICzVL8ePWu4wai96UpW2Q'
    //   });
    //   const formData: FormData = new FormData();
    //   formData.append('Subject', subject);
    //   formData.append('HungerTypeId', hungerTypeId);
    //   formData.append('Files[0].file', file, file.name);
    //   formData.append('Files[0].Flags', 'Vedio');
    //   return this.httpClient.post(this.apiUrl, formData, { headers: headers });
    // }
    // getHungerTypes(): Observable<any> {
    //   const headers = new HttpHeaders({
    //     'accept': '*/*',
    //     'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI2MTE2IiwidW5pcXVlX25hbWUiOiIxMDAwOTY2MjI5IiwibmJmIjoxNzE3NDg1NDEzLCJleHAiOjE3NDg1ODk0MTMsImlhdCI6MTcxNzQ4NTQxM30.EUeA5ZFoo9afhOnYi8fChqATSxch3hS7T2DbrTJA-Z7aUiV0gYmlTFUrAqSTsYcRd3SXzZYFkQUwZEISzxIfug'
    //   });
    //   return this.httpClient.get(this.hungerTypeUrl, { headers: headers });
    // }
    // edit(body: PostHungerVideoModel): Observable<BaseV1ResponseModel<string>> {
    //   const formData = new FormData();
    //   formData.append('subject', body.subject);
    //   formData.append('id', body.id);
    //   formData.append('tagId', body.tagId);
    //   HttpUtilsService.appendMediaToForm(formData, body.media);
    //   return this.httpClient
    //     .put<BaseV1ResponseModel<string>>(hungerVideoApi + '/Put', formData, {
    //       observe: 'events',
    //       reportProgress: true,
    //     })
    //     .pipe(
    //       HttpUtilsService.handleUploadProgress(),
    //       map((result) => result.body)
    //     );
    // }
    postHungerVideo(file, hungerTypeId, subject) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'accept': '/',
            'Authorization': this.token
        });
        const formData = new FormData();
        formData.append('Subject', subject);
        formData.append('HungerTypeId', hungerTypeId);
        formData.append('Files[0].file', file, file.name);
        formData.append('Files[0].Flags', 'Vedio');
        return this.httpClient.post(this.apiUrl, formData, { headers: headers });
    }
    updateHungerVideo(id, file, hungerTypeId, subject) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'accept': '*/*',
            'Authorization': this.token
        });
        const formData = new FormData();
        formData.append('Id', id);
        formData.append('Subject', subject);
        formData.append('HungerTypeId', hungerTypeId);
        formData.append('Files[0].file', file, file.name);
        formData.append('Files[0].Flags', 'Vedio');
        return this.httpClient.put(this.updateUrl, formData, { headers: headers });
    }
    // deleteHungerVideo(id: string, deletedMediaIds: string, file: File, hungerTypeId: string, subject: string): Observable<any> {
    //   const headers = new HttpHeaders({
    //     'accept': '*/*',
    //     'Authorization': this.token
    //   });
    //   const formData: FormData = new FormData();
    //   formData.append('Id', id);
    //   formData.append('Subject', subject);
    //   formData.append('DeletedMediaIds', deletedMediaIds);
    //   formData.append('HungerTypeId', hungerTypeId);
    //   formData.append('Files', file, file.name);
    //   return this.httpClient.put(this.updateUrl, formData, { headers: headers });
    // }
    getHungerTypes() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'accept': '*/*',
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI2MTE2IiwidW5pcXVlX25hbWUiOiIxMDAwOTY2MjI5IiwibmJmIjoxNzE3NDg1NDEzLCJleHAiOjE3NDg1ODk0MTMsImlhdCI6MTcxNzQ4NTQxM30.EUeA5ZFoo9afhOnYi8fChqATSxch3hS7T2DbrTJA-Z7aUiV0gYmlTFUrAqSTsYcRd3SXzZYFkQUwZEISzxIfug'
        });
        return this.httpClient.get(this.hungerTypeUrl, { headers: headers });
    }
    getById(id) {
        return this.httpClient.get(`${hungerVideoApi}/GetById?id=${id}`);
    }
    delete(id) {
        return this.httpClient.delete(`${hungerVideoApi}/Delete?id=${id}`);
    }
}
HungerVedioService.ɵfac = function HungerVedioService_Factory(t) { return new (t || HungerVedioService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
HungerVedioService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HungerVedioService, factory: HungerVedioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 40612:
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/interceptor.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterceptorService": () => (/* binding */ InterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/services/auth.service */ 75397);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ 8268);








class InterceptorService {
    constructor(authService, matDialog, ngZone, router, translateService, translationService, requestLoaderService) {
        this.authService = authService;
        this.matDialog = matDialog;
        this.ngZone = ngZone;
        this.router = router;
        this.translateService = translateService;
        this.translationService = translationService;
        this.requestLoaderService = requestLoaderService;
        this.ignoreRequestLoaderDic = new Set(['']);
        this.timeZoneOffset = ((new Date().getTimezoneOffset() * -1) /
            60).toString();
    }
    intercept(req, next) {
        let headers = this.getBaseHeaders();
        const token = this.authService.getToken();
        if (token) {
            headers = headers.append('Authorization', `Bearer ${token}`);
        }
        let newReq = req.clone({
            headers: headers,
        });
        if (!this.ignoreRequestLoader(req)) {
            this.requestLoaderService.requestLoading$.next(true);
        }
        return next.handle(newReq).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)((res) => {
            if (!InterceptorService.isRequestCompetedSuccessfully(res)) {
                return;
            }
            this.requestLoaderService.requestLoading$.next(false);
            if (newReq.method != 'GET') {
                this.ngZone.run(() => {
                    this.matDialog.open(this.translateService.instant('REQUESTS.SUCCESS'), this.translateService.instant('REQUESTS.DISMISS'), {
                        duration: 5000,
                        panelClass: 'successMessage',
                        direction: this.translationService.dir,
                    });
                });
            }
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.requestLoaderService.requestLoading$.next(false);
            let message = '';
            if (e.status == 401) {
                this.authService.logOut();
                this.router.navigateByUrl('auth/login');
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => e);
            }
            if (e.status == 400) {
                message = this.prepareErrorMessage(e);
            }
            if (message) {
                this.ngZone.run(() => {
                    this.matDialog.open(message, this.translateService.instant('REQUESTS.DISMISS'), {
                        duration: 5000,
                        panelClass: 'errorMessage',
                        direction: this.translationService.dir,
                    });
                });
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => e);
        }));
    }
    ignoreRequestLoader(httpRequest) {
        return (this.ignoreRequestLoaderDic.has(httpRequest.url) ||
            new RegExp('/assets/i18n/.*.json').test(httpRequest.url) ||
            httpRequest.url.includes('BlogTag/getAll'));
    }
    prepareErrorMessage(error) {
        var _a, _b;
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.title) {
                return error.error.title;
            }
            if ((_b = error.error) === null || _b === void 0 ? void 0 : _b.errorMessage) {
                return error.error.errorMessage;
            }
        }
        return this.translateService.instant('REQUESTS.UNKNOWN_ERROR');
    }
    static isRequestCompetedSuccessfully(res) {
        return (res.type != _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpEventType.UploadProgress && res.type != _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpEventType.Sent);
    }
    getBaseHeaders() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders().append('Time-Zone-Offset', this.timeZoneOffset);
    }
}
InterceptorService.ɵfac = function InterceptorService_Factory(t) { return new (t || InterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared__WEBPACK_IMPORTED_MODULE_1__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared__WEBPACK_IMPORTED_MODULE_1__.RequestLoaderService)); };
InterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: InterceptorService, factory: InterceptorService.ɵfac });


/***/ }),

/***/ 74541:
/*!*************************************************!*\
  !*** ./src/app/core/loader/loader.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);



class LoaderComponent {
    constructor() { }
    ngOnInit() { }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 3, vars: 1, consts: [[1, "app-loader"], [1, "loader"], ["diameter", "100"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimation", undefined);
    } }, directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__.MatSpinner], styles: [".app-loader[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  opacity: 0;\n}\n\n.loader[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-inline-start: 48%;\n  top: 48%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsUUFBQTtBQUNGIiwiZmlsZSI6ImxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtbG9hZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDQ4JTtcclxuICB0b3A6IDQ4JTtcclxufVxyXG4iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('inOutAnimation', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ display: '', opacity: '0' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(800, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: '1' })),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: '1' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(800, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: '0' })),
                ]),
            ]),
        ] } });


/***/ }),

/***/ 41479:
/*!**********************************************************!*\
  !*** ./src/app/core/mobile-users/mobile-user.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileUserService": () => (/* binding */ MobileUserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ 8268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);






const mobileUserBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAdminV1Url + 'MobileUser/';
const BaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAdminV1Url;
class MobileUserService {
    constructor(httpClient, activatedRoute) {
        this.httpClient = httpClient;
        this.activatedRoute = activatedRoute;
        this.todayDate = new Date().toISOString().slice(0, 10);
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.userId = params['id'];
        });
    }
    getPagedList(pagedModelQueryModel) {
        return this.httpClient.get(mobileUserBaseUrl + 'getPagedList', {
            params: _shared__WEBPACK_IMPORTED_MODULE_1__.HttpUtilsService.prepareGetPagedListQueryParams(pagedModelQueryModel),
        });
    }
    getUserDetails(userId) {
        return this.httpClient.get(mobileUserBaseUrl + 'GetUserDetails', {
            params: { userId },
        });
    }
    getUserPersonalDetails(userId) {
        return this.httpClient.get(mobileUserBaseUrl + 'GetUserPersonalDetails', {
            params: { userId },
        });
    }
    ban(userId) {
        return this.httpClient.put(mobileUserBaseUrl + 'Ban', {}, {
            params: { userId },
        });
    }
    unBan(userId) {
        return this.httpClient.put(mobileUserBaseUrl + 'UnBan', {}, {
            params: { userId },
        });
    }
    prevent(userId, userPreventionType) {
        return this.httpClient.post(mobileUserBaseUrl + 'prevent', {
            userId: userId,
            preventionType: userPreventionType,
        });
    }
    makePremium(model) {
        return this.httpClient.post(mobileUserBaseUrl + 'test', model);
    }
    upload(file, userId, name, id) {
        const formData = new FormData();
        formData.append('url', file);
        formData.append('userId', userId);
        formData.append('name', name);
        formData.append('userNoteId', id);
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', `${BaseUrl}UserAttachment/Post`, formData, {
            reportProgress: true,
            responseType: 'json'
        });
        return this.httpClient.request(req);
    }
    getFiles(userId) {
        return this.httpClient.get(`${BaseUrl}UserAttachment/GetPagedList`, {
            params: { userId },
        });
    }
    postNote(data) {
        return this.httpClient.post(`${BaseUrl}UserNotes/Post`, data);
    }
    getUserNotes(userId) {
        return this.httpClient.get(`${BaseUrl}UserNotes/GetPagedList`, {
            params: { userId },
        });
    }
    putNote(data) {
        return this.httpClient.put(`${BaseUrl}UserNotes/Put`, data);
    }
    deleteNote(id) {
        return this.httpClient.delete(`${BaseUrl}UserNotes/Delete?id=${id}`);
    }
    getUserAttachment(userId, userNoteId) {
        return this.httpClient.get(`${BaseUrl}UserAttachment/GetPagedList?userNoteId=${userNoteId !== null && userNoteId !== void 0 ? userNoteId : ''}`, {
            params: { userId },
        });
    }
    deleteAttachment(id) {
        return this.httpClient.delete(`${BaseUrl}UserAttachment/Delete?id=${id}`);
    }
    getWaterBar(userId) {
        return this.httpClient.get(`${BaseUrl}MealPlan/GetWaterBar?day=${this.todayDate}&userId=${userId}&isSubscribed=true`, {
            params: { userId },
        });
    }
    getWeghitMonthlyBar(userId) {
        return this.httpClient.get(`${BaseUrl}MealPlan/GetWeghitAndMesurementMonthlyBar?day=${this.todayDate}&userId=${userId}`, {
            params: { userId },
        });
    }
    getCurrentPlanBar(userId) {
        return this.httpClient.get(`${BaseUrl}MealPlan/GetCurrentPlanBar?userId=${userId}`, {
            params: { userId },
        });
    }
    getWeghitDailyBar(userId) {
        return this.httpClient.get(`${BaseUrl}MealPlan/GetWeghitAndMesurementDailyBar?day=${this.todayDate}&userId=${userId}`, {
            params: { userId },
        });
    }
    getHeartMonthlyBar(userId) {
        return this.httpClient.get(`${BaseUrl}MealPlan/GetWeghitAndMesurementMonthlyBar?day=${this.todayDate}&userId=${userId}`, {
            params: { userId },
        });
    }
    getHeartDailyBar(userId) {
        return this.httpClient.get(`${BaseUrl}MealPlan/GetWeghitAndMesurementDailyBar?day=${this.todayDate}&userId=${userId}`, {
            params: { userId },
        });
    }
    getUserMood(userId) {
        return this.httpClient.get(`${BaseUrl}UserMood/GetPagedList?UserId=${userId}`, {
            params: { userId },
        });
    }
    getPeriodDailyBar(userId) {
        return this.httpClient.get(`${BaseUrl}MealPlan/GetWeghitAndMesurementDailyBar?day=${this.todayDate}&userId=${userId}`, {
            params: { userId },
        });
    }
    getPeriodMonthlyBar(userId) {
        return this.httpClient.get(`${BaseUrl}MealPlan/GetWeghitAndMesurementMonthlyBar?day=${this.todayDate}&userId=${userId}`, {
            params: { userId },
        });
    }
}
MobileUserService.ɵfac = function MobileUserService_Factory(t) { return new (t || MobileUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
MobileUserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MobileUserService, factory: MobileUserService.ɵfac });


/***/ }),

/***/ 4202:
/*!**********************************************************************!*\
  !*** ./src/app/core/notifications/services/notifications.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsService": () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



const BaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
class NotificationsService {
    constructor(http) {
        this.http = http;
    }
    getUserData() {
        return this.http.get(BaseUrl + '/Admin/api/v1/MobileUser/GetPagedList?PageSize=1000000');
    }
    sendNotificationToAllUsers(token, title, body) {
        const notification = {
            to: token,
            notification: {
                title,
                body
            }
        };
        return this.http.post(BaseUrl + '/Admin/api/v1/Notification/SendNotification', notification);
    }
    sendNotificationToSubscribedUsers(token, title, body) {
        const notification = {
            to: token,
            notification: {
                title,
                body
            }
        };
        return this.http.post(BaseUrl + '/Admin/api/v1/Notification/SendNotification', notification);
    }
    sendNotificationToUnSubscribedUsers(token, title, body) {
        const notification = {
            to: token,
            notification: {
                title,
                body
            }
        };
        return this.http.post(BaseUrl + '/Admin/api/v1/Notification/SendNotification', notification);
    }
    // sendNotificationToSpecificUser(token: string, title: string, body: string) {
    //   const notification = {
    //     to: token,
    //     notification: {
    //       title,
    //       body
    //     }
    //   };
    //   return this.http.post<any>(BaseUrl + '/Admin/api/v1/Notification/SendNotification', notification);
    // }
    sendNotifications(tokens, title, body) {
        const notification = {
            to: tokens[0],
            notification: {
                title,
                body
            }
        };
        return this.http.post(BaseUrl + '/Admin/api/v1/Notification/SendNotification', notification);
    }
}
NotificationsService.ɵfac = function NotificationsService_Factory(t) { return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
NotificationsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationsService, factory: NotificationsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92911:
/*!************************************************************************!*\
  !*** ./src/app/core/shared/confirm-dialog/confirm-dialog.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 33935);




class ConfirmDialogComponent {
    constructor(matDialogRef) {
        this.matDialogRef = matDialogRef;
    }
    ngOnInit() {
    }
    close(confirm) {
        this.matDialogRef.close(confirm);
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
ConfirmDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 11, vars: 9, consts: [[1, "d-flex", "justify-content-center"], ["mat-raised-button", "", "color", "warn", 1, "margin-end-2", 3, "click"], ["mat-raised-button", "", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0)(5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_5_listener() { return ctx.close(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() { return ctx.close(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "SHARED.CONFIRM_MESSAGE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "SHARED.CONFIRM"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "SHARED.CANCEL"), " ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 24716:
/*!******************************************!*\
  !*** ./src/app/core/shared/constants.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseColor": () => (/* binding */ baseColor)
/* harmony export */ });
const baseColor = '#000000';


/***/ }),

/***/ 48057:
/*!*****************************************************************************!*\
  !*** ./src/app/core/shared/directives/extenal-video-validator.directive.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoValidatorDirective": () => (/* binding */ VideoValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class VideoValidatorDirective {
    validate(control) {
        if (!control.value)
            return null;
        return this.videoValidator()(control);
    }
    videoValidator() {
        return (control) => {
            // Regex for instagram, facebook, twitter, and azure uploaded videos
            var regExp = /(((https?:\/\/)?(?:www\.)?instagram\.com\/.*\/([^\/?#&]+)).*|(https?:\/\/)?(?:www\.|web\.|m\.)?facebook\.com\/.+|(https?:\/\/)?(?:www\.)?twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)(\?.*)?(?:\/.*)?$)/;
            var match = control.value.match(regExp) || this.matchYoutubeUrl(control.value);
            return !!match ? null : { invalidUrl: { value: control.value } };
        };
    }
    matchYoutubeUrl(url) {
        // Regex for youtube links
        var regExp = /^(https?:\/\/)?((www\.)?youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/;
        var match = url.match(regExp);
        return match && match[6] && match[6].length == 11;
    }
}
VideoValidatorDirective.ɵfac = function VideoValidatorDirective_Factory(t) { return new (t || VideoValidatorDirective)(); };
VideoValidatorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: VideoValidatorDirective, selectors: [["", "externalVideoValidator", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
                useExisting: VideoValidatorDirective,
                multi: true,
            },
        ])] });


/***/ }),

/***/ 53606:
/*!********************************************************************!*\
  !*** ./src/app/core/shared/directives/hover-observer.directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HoverObserverDirective": () => (/* binding */ HoverObserverDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HoverObserverDirective {
    constructor(el) {
        this.el = el;
        this.el.nativeElement.classList.add('hover-observer');
    }
}
HoverObserverDirective.ɵfac = function HoverObserverDirective_Factory(t) { return new (t || HoverObserverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
HoverObserverDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HoverObserverDirective, selectors: [["", "hoverObserver", ""]] });


/***/ }),

/***/ 97226:
/*!****************************************************************!*\
  !*** ./src/app/core/shared/guards/permission-guard.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionGuard": () => (/* binding */ PermissionGuard)
/* harmony export */ });
/* harmony import */ var F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/auth */ 78811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);



var LoadCurrentUser = _store_auth__WEBPACK_IMPORTED_MODULE_1__.UserActions.LoadCurrentUser;



class PermissionGuard {
  constructor(store, router) {
    this.store = store;
    this.router = router;
  }

  canActivate(route, state) {
    var _this = this;

    const permission = route.data['permission'];
    const currentUser = this.store.snapshot().currentUser;

    if (!currentUser) {
      return this.store.dispatch(new LoadCurrentUser()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(m => true));
    }

    const userPermissions = currentUser.user.permissions;
    if (!userPermissions) return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)( /*#__PURE__*/(0,F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this.router.navigateByUrl('/no-access');
    })));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(!!userPermissions.find(p => p == permission)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)( /*#__PURE__*/function () {
      var _ref2 = (0,F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (hasPer) {
        if (!hasPer) {
          yield _this.router.navigateByUrl('/no-access');
        }
      });

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()));
  }

}

PermissionGuard.ɵfac = function PermissionGuard_Factory(t) {
  return new (t || PermissionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};

PermissionGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: PermissionGuard,
  factory: PermissionGuard.ɵfac
});

/***/ }),

/***/ 8268:
/*!**************************************!*\
  !*** ./src/app/core/shared/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalMediaValidator": () => (/* reexport safe */ _models_media__WEBPACK_IMPORTED_MODULE_4__.ExternalMediaValidator),
/* harmony export */   "HoverObserverDirective": () => (/* reexport safe */ _directives_hover_observer_directive__WEBPACK_IMPORTED_MODULE_0__.HoverObserverDirective),
/* harmony export */   "HttpUtilsService": () => (/* reexport safe */ _services_http_utils_service__WEBPACK_IMPORTED_MODULE_8__.HttpUtilsService),
/* harmony export */   "Media": () => (/* reexport safe */ _models_media__WEBPACK_IMPORTED_MODULE_4__.Media),
/* harmony export */   "MediaFlags": () => (/* reexport safe */ _models_media__WEBPACK_IMPORTED_MODULE_4__.MediaFlags),
/* harmony export */   "MediaType": () => (/* reexport safe */ _models_media__WEBPACK_IMPORTED_MODULE_4__.MediaType),
/* harmony export */   "NavHeaderTitleService": () => (/* reexport safe */ _services_nav_header_title_service__WEBPACK_IMPORTED_MODULE_10__.NavHeaderTitleService),
/* harmony export */   "PagedListQueryModel": () => (/* reexport safe */ _models_paged_list_query_model__WEBPACK_IMPORTED_MODULE_6__.PagedListQueryModel),
/* harmony export */   "RequestLoaderService": () => (/* reexport safe */ _services_request_loader_service__WEBPACK_IMPORTED_MODULE_11__.RequestLoaderService),
/* harmony export */   "SplashScreenService": () => (/* reexport safe */ _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_12__.SplashScreenService),
/* harmony export */   "TranslationService": () => (/* reexport safe */ _services_translate_service__WEBPACK_IMPORTED_MODULE_9__.TranslationService),
/* harmony export */   "baseColor": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_7__.baseColor),
/* harmony export */   "colorValidator": () => (/* reexport safe */ _validators_color_validator__WEBPACK_IMPORTED_MODULE_13__.colorValidator)
/* harmony export */ });
/* harmony import */ var _directives_hover_observer_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/hover-observer.directive */ 53606);
/* harmony import */ var _models_owner_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/owner.model */ 69967);
/* harmony import */ var _models_totals_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/totals.model */ 7129);
/* harmony import */ var _models_base_v1_response_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/base-v1-response.model */ 59555);
/* harmony import */ var _models_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/media */ 3151);
/* harmony import */ var _models_localized_object_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/localized-object.model */ 13629);
/* harmony import */ var _models_paged_list_query_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/paged-list-query.model */ 3654);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ 24716);
/* harmony import */ var _services_http_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/http-utils.service */ 50864);
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/translate.service */ 47209);
/* harmony import */ var _services_nav_header_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/nav-header-title.service */ 98798);
/* harmony import */ var _services_request_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/request-loader.service */ 65309);
/* harmony import */ var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/splash-screen.service */ 55328);
/* harmony import */ var _validators_color_validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./validators/color.validator */ 33769);
















/***/ }),

/***/ 59555:
/*!**************************************************************!*\
  !*** ./src/app/core/shared/models/base-v1-response.model.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 37086:
/*!***************************************************!*\
  !*** ./src/app/core/shared/models/day-of-week.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayOfWeek": () => (/* binding */ DayOfWeek),
/* harmony export */   "DayOfWeekKeys": () => (/* binding */ DayOfWeekKeys)
/* harmony export */ });
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["SUNDAY"] = 0] = "SUNDAY";
    DayOfWeek[DayOfWeek["MONDAY"] = 1] = "MONDAY";
    DayOfWeek[DayOfWeek["TUESDAY"] = 2] = "TUESDAY";
    DayOfWeek[DayOfWeek["WEDNESDAY"] = 3] = "WEDNESDAY";
    DayOfWeek[DayOfWeek["THURSDAY"] = 4] = "THURSDAY";
    DayOfWeek[DayOfWeek["FRIDAY"] = 5] = "FRIDAY";
    DayOfWeek[DayOfWeek["SATURDAY"] = 6] = "SATURDAY";
})(DayOfWeek || (DayOfWeek = {}));
const DayOfWeekKeys = [
    'SATURDAY',
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
];


/***/ }),

/***/ 13629:
/*!**************************************************************!*\
  !*** ./src/app/core/shared/models/localized-object.model.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3151:
/*!*********************************************!*\
  !*** ./src/app/core/shared/models/media.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalMediaValidator": () => (/* binding */ ExternalMediaValidator),
/* harmony export */   "Media": () => (/* binding */ Media),
/* harmony export */   "MediaFlags": () => (/* binding */ MediaFlags),
/* harmony export */   "MediaType": () => (/* binding */ MediaType)
/* harmony export */ });
class Media {
    constructor(media) {
        Object.assign(this, media);
    }
    static getMediaByFlag(media, flag) {
        return media === null || media === void 0 ? void 0 : media.filter((m) => m.flags && m.flags.some((f) => f == flag));
    }
    static excludeMediaWithFlag(media, flag) {
        return media === null || media === void 0 ? void 0 : media.filter((m) => !m.flags || (m.flags && !m.flags.some((f) => f == flag)));
    }
}
var MediaType;
(function (MediaType) {
    MediaType[MediaType["Image"] = 0] = "Image";
    MediaType[MediaType["Video"] = 1] = "Video";
    MediaType[MediaType["Youtube"] = 2] = "Youtube";
    MediaType[MediaType["Facebook"] = 3] = "Facebook";
    MediaType[MediaType["Gif"] = 4] = "Gif";
})(MediaType || (MediaType = {}));
const regexFacebook1 = new RegExp('^(https?://)?(?:www.|web.|m.)?facebook.com/.+');
const regexFacebook2 = new RegExp('^(https?://)?(?:www.|web.|m.|fb.)?watch/.+');
const youtubeRegex = new RegExp('^(https?://)?((www.|m.)?youtube.com|youtu.be)/(watch)?(v=)?(S+)?');
class ExternalMediaValidator {
    // var regexYoutube = GetYoutubeRegex();
    // var regexInstagram = new Regex(@"^(((https?:\/\/)?(?:www\.)?instagram\.com\/.*\/([^\/?#&]+)).*)");
    // var regexFacebook1 = new Regex(@"^(https?:\/\/)?(?:www\.|web\.|m\.)?facebook\.com\/.+");
    // var regexFacebook2 = new Regex(@"^(https?:\/\/)?(?:www\.|web\.|m\.|fb\.)?watch\/.+");
    // var regexTwitter = new Regex(@"^(https?:\/\/)?(?:www\.)?twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)(\?.*)?(?:\/.*)?$");
    // var regexVideoStream = new Regex(@"^((https?:\/\/)?(?:www\.)?.*\.streaming.media.azure.net\/.*)");
    // var regexVideo = new Regex(@"^((https?:\/\/)?(?:www\.)?.*\.blob.core.windows.net\/.*)");
    static validate(control) {
        const link = control.value;
        if (regexFacebook1.test(link) || regexFacebook2.test(link)) {
            return null;
        }
        if (youtubeRegex.test(link)) {
            return null;
        }
        // setTimeout(() => control.setErrors({}), 0.1);
        return [];
    }
    static getLinkVideoType(link) {
        if (regexFacebook1.test(link) || regexFacebook2.test(link)) {
            return MediaType.Facebook;
        }
        if (youtubeRegex.test(link)) {
            return MediaType.Youtube;
        }
        return null;
    }
}
var MediaFlags;
(function (MediaFlags) {
    MediaFlags.CoverImage = 'CoverImage';
    MediaFlags.MainMedia = 'Files[0].file';
})(MediaFlags || (MediaFlags = {}));


/***/ }),

/***/ 69967:
/*!***************************************************!*\
  !*** ./src/app/core/shared/models/owner.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3654:
/*!**************************************************************!*\
  !*** ./src/app/core/shared/models/paged-list-query.model.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagedListQueryModel": () => (/* binding */ PagedListQueryModel)
/* harmony export */ });
class PagedListQueryModel {
    constructor(model) {
        this.pageNumber = 0;
        this.pageSize = 10;
        this.searchWord = null;
        this.customFilters = new Map();
        Object.assign(this, model);
    }
}


/***/ }),

/***/ 7129:
/*!****************************************************!*\
  !*** ./src/app/core/shared/models/totals.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 290:
/*!**************************************************************!*\
  !*** ./src/app/core/shared/no-access/no-access.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoAccessComponent": () => (/* binding */ NoAccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class NoAccessComponent {
    constructor() { }
    ngOnInit() {
    }
}
NoAccessComponent.ɵfac = function NoAccessComponent_Factory(t) { return new (t || NoAccessComponent)(); };
NoAccessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoAccessComponent, selectors: [["app-no-access"]], decls: 2, vars: 0, template: function NoAccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You don't have the required permission to acess this page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuby1hY2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 50864:
/*!************************************************************!*\
  !*** ./src/app/core/shared/services/http-utils.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpUtilsService": () => (/* binding */ HttpUtilsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 64055);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
var _HttpUtilsService_uploadProgress;




class HttpUtilsService {
    constructor() {
        _HttpUtilsService_uploadProgress.set(this, new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject());
        this.uploadProgress$ = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(this, _HttpUtilsService_uploadProgress, "f");
    }
    static appendLocalizedObjectToForm(formData, key, localized) {
        if (localized.en)
            formData.append(`${key}.en`, localized.en);
        if (localized.ar)
            formData.append(`${key}.ar`, localized.ar);
    }
    static appendMediaToForm(formData, media) {
        if (!formData)
            return;
        if (!media || media.length === 0)
            return;
        let filesIndex = 0;
        let externalIndex = 0;
        //To API Problem
        formData.append(`files[${filesIndex}].index`, '0');
        media.forEach((m) => {
            if (m.removed) {
                formData.append('DeletedMediaIds', m.id);
                return;
            }
            if (!m.isNew) {
                return;
            }
            if (!m.file && !m.url) {
                return;
            }
            if (m.file) {
                formData.append(`files[${filesIndex}].file`, m.file, m.file.name);
                this.appendMediaFlag(formData, m.flags, `files[${filesIndex}].flags`);
                filesIndex++;
                return;
            }
            formData.append(`externalMedia[${externalIndex}].url`, m.url);
            this.appendMediaFlag(formData, m.flags, `externalMedia[${externalIndex}].flags`);
            externalIndex++;
        });
    }
    handleUploadProgress() {
        return (source) => source.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)((event) => {
            // Via this API, you get access to the raw event stream.
            // Look for upload progress events.
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpEventType.UploadProgress) {
                // This is an upload progress event. Compute and show the % done:
                const percentDone = Math.round((100 * event.loaded) / event.total);
                (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(this, _HttpUtilsService_uploadProgress, "f").next({
                    progress: percentDone,
                    inProgress: true,
                });
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {
                (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__classPrivateFieldGet)(this, _HttpUtilsService_uploadProgress, "f").next({ progress: 100, inProgress: false });
            }
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.skipWhile)((event) => !(event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse)));
    }
    static appendMediaFlag(formData, flags, key) {
        if (flags) {
            flags.forEach((flag) => {
                formData.append(key, flag);
            });
        }
    }
    static prepareGetPagedListQueryParams(pagedModelQueryModel) {
        var _a;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams()
            .set('pageNumber', pagedModelQueryModel.pageNumber + 1)
            .set('pageSize', (_a = pagedModelQueryModel.pageSize) !== null && _a !== void 0 ? _a : 10);
        if (pagedModelQueryModel.searchWord) {
            params = params.set('searchWord', pagedModelQueryModel.searchWord);
        }
        if (pagedModelQueryModel.entityId) {
            params = params.set('entityId', pagedModelQueryModel.entityId);
        }
        if (pagedModelQueryModel.customFilters &&
            pagedModelQueryModel.customFilters.size) {
            pagedModelQueryModel.customFilters.forEach((value, key) => {
                params = params.set(key, value);
            });
        }
        return params;
    }
    static handleUploadProgress() {
        return (source) => source.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)((event) => {
            // Via this API, you get access to the raw event stream.
            // Look for upload progress events.
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpEventType.UploadProgress) {
                // This is an upload progress event. Compute and show the % done:
                const percentDone = Math.round((100 * event.loaded) / event.total);
                this.uploadProgressSubject.next({
                    progress: percentDone,
                    inProgress: true,
                });
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {
                this.uploadProgressSubject.next({
                    progress: 100,
                    inProgress: false,
                });
            }
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.skipWhile)((event) => !(event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse)));
    }
}
_HttpUtilsService_uploadProgress = new WeakMap();
HttpUtilsService.uploadProgressSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({
    inProgress: false,
    progress: 0,
});
HttpUtilsService.uploadProgress$ = HttpUtilsService.uploadProgressSubject.asObservable();
HttpUtilsService.ɵfac = function HttpUtilsService_Factory(t) { return new (t || HttpUtilsService)(); };
HttpUtilsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: HttpUtilsService, factory: HttpUtilsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 98798:
/*!******************************************************************!*\
  !*** ./src/app/core/shared/services/nav-header-title.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavHeaderTitleService": () => (/* binding */ NavHeaderTitleService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class NavHeaderTitleService {
    constructor(document) {
        this.document = document;
        this.title$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    }
    setTitle(title) {
        this.title$.next(title);
    }
}
NavHeaderTitleService.ɵfac = function NavHeaderTitleService_Factory(t) { return new (t || NavHeaderTitleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
NavHeaderTitleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NavHeaderTitleService, factory: NavHeaderTitleService.ɵfac });


/***/ }),

/***/ 65309:
/*!****************************************************************!*\
  !*** ./src/app/core/shared/services/request-loader.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestLoaderService": () => (/* binding */ RequestLoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class RequestLoaderService {
    constructor() {
        this.requestLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
}
RequestLoaderService.ɵfac = function RequestLoaderService_Factory(t) { return new (t || RequestLoaderService)(); };
RequestLoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RequestLoaderService, factory: RequestLoaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 55328:
/*!***************************************************************!*\
  !*** ./src/app/core/shared/services/splash-screen.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreenService": () => (/* binding */ SplashScreenService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class SplashScreenService {
    constructor() {
        this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.isLoading$ = this.isLoadingSubject;
    }
    show() {
        this.isLoadingSubject.next(true);
    }
    hide() {
        this.isLoadingSubject.next(false);
    }
}
SplashScreenService.ɵfac = function SplashScreenService_Factory(t) { return new (t || SplashScreenService)(); };
SplashScreenService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SplashScreenService, factory: SplashScreenService.ɵfac });


/***/ }),

/***/ 47209:
/*!***********************************************************!*\
  !*** ./src/app/core/shared/services/translate.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslationService": () => (/* binding */ TranslationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _splash_screen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash-screen.service */ 55328);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 33935);





class TranslationService {
    constructor(loadingService, translateService, document) {
        this.loadingService = loadingService;
        this.translateService = translateService;
        this.document = document;
        this.dir = 'ltr';
        // Private properties
        this.langChangeStartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.langChangedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.directionChangedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.dir);
        this.langChangeStart$ = this.langChangeStartSubject.asObservable();
        this.langChanged$ = this.langChangedSubject.asObservable();
        this.directionChanged$ = this.directionChangedSubject.asObservable();
        this.htmlTag = this.document.getElementsByTagName('html')[0];
    }
    /**
     * Adds list of languages to TransalteService
     *
     * @param locales: Locale[]
     */
    loadTranslations(locales) {
        // add new languages to the list
        this.translateService.addLangs([...locales]);
    }
    getTranslation(key) {
        return this.translateService.instant(key);
    }
    /**
     * Set current Laguage
     *
     * @param lang: Locale
     */
    setLanguage(lang) {
        const currentLang = this.getSelectedLanguage();
        if (currentLang == lang)
            return;
        this.loadingService.show();
        this.useLanguage(lang);
        setTimeout(() => {
            this.loadingService.hide();
        }, 2000);
        //
        // let styleLink = this.document.getElementById('langCss') as HTMLLinkElement;
        // let bundleName = lang === 'ar' ? 'rtl-styles.css' : 'ltr-styles.css';
        //
        // // Style href shouldn't be chnaged if lang not changed.
        // if (styleLink && !styleLink.href.includes(bundleName)) {
        //     // wait 1000ms until splash screen cover the screen completely.
        //     setTimeout(() => {
        //         this.langChangeStartSubject.next();
        //         this.useLanguage(lang);
        //         styleLink.href = bundleName;
        //
        //         // Change moment default locale
        //         // Note: Used 'en' local with proper translation, to keep numbers always in English format.
        //         // moment.updateLocale('en', {relativeTime: this.translateService.instant('RELATIVE_TIME')});
        //         this.langChangedSubject.next(lang);
        //         // wait 1000ms until switching styles complete.
        //     }, 1000);
        // } else {
        //     this.useLanguage(lang);
        // }
    }
    /**
     * Returns selected language from localStorage if found, or it returns default language
     */
    getSelectedLanguage() {
        return (localStorage.getItem('language') ||
            this.translateService.getDefaultLang() ||
            'en');
    }
    useLanguage(lang) {
        if (lang) {
            this.translateService.use(lang);
            this.dir = lang === 'ar' ? 'rtl' : 'ltr';
            this.htmlTag.dir = this.dir;
            if (this.dir != this.directionChangedSubject.value) {
                // emit direction change value
                this.directionChangedSubject.next(this.dir);
            }
            localStorage.setItem('language', lang);
        }
    }
    initializeLanguage(locale) {
        this.useLanguage(locale);
    }
}
TranslationService.ɵfac = function TranslationService_Factory(t) { return new (t || TranslationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_splash_screen_service__WEBPACK_IMPORTED_MODULE_0__.SplashScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT)); };
TranslationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TranslationService, factory: TranslationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 33769:
/*!***********************************************************!*\
  !*** ./src/app/core/shared/validators/color.validator.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorValidator": () => (/* binding */ colorValidator)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 90587);

const colorValidator = _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('#[0-9a-f]{6}$');


/***/ }),

/***/ 78811:
/*!******************************************!*\
  !*** ./src/app/core/store/auth/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActions": () => (/* reexport safe */ _user_actions__WEBPACK_IMPORTED_MODULE_0__.UserActions),
/* harmony export */   "UserState": () => (/* reexport safe */ _user_state__WEBPACK_IMPORTED_MODULE_1__.UserState)
/* harmony export */ });
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.actions */ 36973);
/* harmony import */ var _user_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.state */ 75149);




/***/ }),

/***/ 36973:
/*!*************************************************!*\
  !*** ./src/app/core/store/auth/user.actions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActions": () => (/* binding */ UserActions)
/* harmony export */ });
var UserActions;
(function (UserActions) {
    class UserLoginRequested {
        constructor(payload) {
            this.payload = payload;
        }
    }
    UserLoginRequested.type = '[Users] User Login Requested';
    UserActions.UserLoginRequested = UserLoginRequested;
    class LoadCurrentUser {
    }
    LoadCurrentUser.type = '[Users] Load Current User';
    UserActions.LoadCurrentUser = LoadCurrentUser;
    class CurrentUserDataUpdated {
        constructor(userInfo) {
            this.userInfo = userInfo;
        }
    }
    CurrentUserDataUpdated.type = '[Users] Current User Updated';
    UserActions.CurrentUserDataUpdated = CurrentUserDataUpdated;
})(UserActions || (UserActions = {}));


/***/ }),

/***/ 75149:
/*!***********************************************!*\
  !*** ./src/app/core/store/auth/user.state.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserState": () => (/* binding */ UserState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.actions */ 36973);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/services/auth.service */ 75397);
/* harmony import */ var _admin_user_services_admin_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin-user/services/admin-user.service */ 63939);







let UserState = class UserState {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    feedAnimals(ctx, action) {
        return this.authService.login(action.payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)((result) => {
            ctx.setState(Object.assign(Object.assign({}, ctx.getState()), { user: result.data.user, token: result.data.token }));
        }));
    }
    loadCurrentUser(ctx) {
        return this.userService.loadCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)((result) => {
            if (!result || !result.data) {
                return;
            }
            ctx.setState(Object.assign(Object.assign({}, ctx.getState()), { user: result.data }));
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)((e) => {
            this.authService.logOut();
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => e);
        }));
    }
    CurrentUserDataUpdated(ctx, action) {
        return this.userService.updateProfile(action.userInfo).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)((result) => {
            if (!result) {
                return;
            }
            const currentStatus = ctx.getState();
            ctx.setState(Object.assign(Object.assign({}, currentStatus), { user: Object.assign(Object.assign({}, currentStatus.user), { email: result.data.email, name: result.data.name, personalImage: result.data.personalImage }) }));
        }));
    }
    // Selectors
    static hasUser(state) {
        var _a, _b;
        return !!((_a = state.currentUser) === null || _a === void 0 ? void 0 : _a.user) && !!((_b = state.currentUser) === null || _b === void 0 ? void 0 : _b.user.id);
    }
    static currentUser(state) {
        var _a;
        return (_a = state.currentUser) === null || _a === void 0 ? void 0 : _a.user;
    }
};
UserState.ɵfac = function UserState_Factory(t) { return new (t || UserState)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_admin_user_services_admin_user_service__WEBPACK_IMPORTED_MODULE_3__.AdminUserService)); };
UserState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: UserState, factory: UserState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.UserLoginRequested)
], UserState.prototype, "feedAnimals", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.LoadCurrentUser)
], UserState.prototype, "loadCurrentUser", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_user_actions__WEBPACK_IMPORTED_MODULE_1__.UserActions.CurrentUserDataUpdated)
], UserState.prototype, "CurrentUserDataUpdated", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)()
], UserState, "hasUser", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)()
], UserState, "currentUser", null);
UserState = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'currentUser',
        defaults: null,
    })
], UserState);



/***/ }),

/***/ 6612:
/*!***************************************************************!*\
  !*** ./src/app/core/store/blog-videos/blog-videos.actions.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogVideosActions": () => (/* binding */ BlogVideosActions)
/* harmony export */ });
var BlogVideosActions;
(function (BlogVideosActions) {
    class LoadBlogVideosPage {
        constructor(queryParams) {
            this.queryParams = queryParams;
        }
    }
    LoadBlogVideosPage.type = '[BlogVideos] Load BlogVideos Page';
    BlogVideosActions.LoadBlogVideosPage = LoadBlogVideosPage;
    class LoadBlogVideosDetails {
        constructor(id) {
            this.id = id;
        }
    }
    LoadBlogVideosDetails.type = '[BlogVideos] Load BlogVideo Details';
    BlogVideosActions.LoadBlogVideosDetails = LoadBlogVideosDetails;
})(BlogVideosActions || (BlogVideosActions = {}));


/***/ }),

/***/ 64068:
/*!*******************************************************!*\
  !*** ./src/app/core/store/blog-videos/blog-videos.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogVideosState": () => (/* binding */ BlogVideosState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _blog_videos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blog-videos */ 55666);
/* harmony import */ var _blog_videos_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-videos.actions */ 6612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







let BlogVideosState = class BlogVideosState {
    constructor(blogVideoService) {
        this.blogVideoService = blogVideoService;
    }
    getPagedList(ctx, action) {
        return this.blogVideoService.getPagedList(action.queryParams).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)((result) => {
            const data = result.data;
            ctx.setState(Object.assign(Object.assign({}, ctx.getState()), { blogVideosPage: data, totalRows: result.totalRows, lastLoadedBlogVideo: undefined }));
        }));
    }
    getById(ctx, action) {
        return this.blogVideoService.getById(action.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)((result) => {
            const data = result.data;
            ctx.setState(Object.assign(Object.assign({}, ctx.getState()), { lastLoadedBlogVideo: _blog_videos__WEBPACK_IMPORTED_MODULE_1__.BlogVideoParser.toViewModel(data) }));
        }));
    }
};
BlogVideosState.ɵfac = function BlogVideosState_Factory(t) { return new (t || BlogVideosState)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_blog_videos__WEBPACK_IMPORTED_MODULE_1__.BlogVideoService)); };
BlogVideosState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: BlogVideosState, factory: BlogVideosState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_blog_videos_actions__WEBPACK_IMPORTED_MODULE_2__.BlogVideosActions.LoadBlogVideosPage)
], BlogVideosState.prototype, "getPagedList", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_blog_videos_actions__WEBPACK_IMPORTED_MODULE_2__.BlogVideosActions.LoadBlogVideosDetails)
], BlogVideosState.prototype, "getById", null);
BlogVideosState = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'blogVideos',
    })
], BlogVideosState);



/***/ }),

/***/ 6621:
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 96361);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.routing,module */ 5887);
/* harmony import */ var _core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth/guards/auth.guard */ 74694);
/* harmony import */ var _shared_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/material */ 56993);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _core_store_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/store/auth */ 78811);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ 40950);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 8056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);














class AuthModule {
    static forRoot() {
        return {
            ngModule: AuthModule,
            providers: [_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
        };
    }
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthRoutingModule,
            _shared_material__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forChild(),
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__.NgxsModule.forFeature([_core_store_auth__WEBPACK_IMPORTED_MODULE_5__.UserState]),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__.ResetPasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthRoutingModule,
        _shared_material__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["ɵz"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule] }); })();


/***/ }),

/***/ 5887:
/*!***************************************************!*\
  !*** ./src/app/pages/auth/auth.routing,module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 96361);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 8056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
    },
    {
        path: 'reset-password',
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordComponent,
    },
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 96361:
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _core_store_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/store/auth */ 78811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _core_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/auth/services/auth.service */ 75397);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 33935);















let LoginComponent = class LoginComponent {
  constructor(store, formBuilder, authService, router) {
    this.store = store;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.router = router;
    this.hidePassword = true;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
      password: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
    });
  }

  login() {
    var _this = this;

    this.store.dispatch(new _core_store_auth__WEBPACK_IMPORTED_MODULE_1__.UserActions.UserLoginRequested(this.loginForm.value));
    this.store.select(_core_store_auth__WEBPACK_IMPORTED_MODULE_1__.UserState.hasUser).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe( /*#__PURE__*/function () {
      var _ref = (0,F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (hasUser) {
        if (hasUser) {
          yield _this.router.navigateByUrl('/');
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

};

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 43,
  vars: 36,
  consts: [[1, "login-form-container"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-start", "position-relative"], ["src", "../../../../assets/media/login/login-logo.svg", 1, "mb-2"], [1, "login-form", "d-flex", "flex-column", 3, "formGroup", "submit"], [1, "my-2"], ["matInput", "", "formControlName", "email"], ["matInput", "", "formControlName", "password", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "radius-2", 3, "disabled"], ["href", "auth/reset-password", 1, "my-1"], [1, "privacy"], ["href", "/terms", 1, "margin-end-1"], ["href", "/privacy", 1, "margin-end-1"], ["href", "/faqs", 1, "margin-end-1"], ["href", "/references"], ["src", "../../../../assets/media/login/login-image.png", 1, "login-image"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_3_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-form-field", 4)(5, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-form-field", 4)(13, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener($event) {
        ctx.hidePassword = !ctx.hidePassword;
        return $event.preventDefault();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 10)(30, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](35, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](38, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](41, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 16, "VALIDATION_ERRORS.REQUIRED"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 18, "AUTH.EMAIL"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 20, "VALIDATION_ERRORS.REQUIRED"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 22, "AUTH.PASSWORD"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hidePassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility_off" : "visibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](25, 24, "AUTH.LOGIN"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 26, "AUTH.RESET_PASSWORD"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](32, 28, "FOOTER.TERMS"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](35, 30, "FOOTER.PRIVACY"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](38, 32, "FOOTER.FAQS"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](41, 34, "FOOTER.REFRENCES"), " ");
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
  styles: [".login-form-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color: white;\n}\n\n.login-image[_ngcontent-%COMP%] {\n  height: 100%;\n  object-fit: fill;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 1rem;\n  margin-inline-end: 8%;\n}\n\n.privacy[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm0tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9naW4taW1hZ2Uge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBmaWxsO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBtYXJnaW4taW5saW5lLWVuZDogOCU7XHJcbn1cclxuXHJcbi5wcml2YWN5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAxcmVtO1xyXG59XHJcbiJdfQ== */"]
});
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy)()], LoginComponent);


/***/ }),

/***/ 8056:
/*!***********************************************************************!*\
  !*** ./src/app/pages/auth/reset-password/reset-password.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _core_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/auth/services/auth.service */ 75397);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 33935);

















function ResetPasswordComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", "your request successfully submitted, please check your email to continue resetting your password", " ");
  }
}

function ResetPasswordComponent_mat_form_field_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 13)(1, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, "VALIDATION_ERRORS.REQUIRED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 4, "AUTH.EMAIL"));
  }
}

function ResetPasswordComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "mat-form-field", 16)(2, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResetPasswordComponent_div_7_Template_button_click_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r3.hidePassword = !ctx_r3.hidePassword;
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 16)(13, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResetPasswordComponent_div_7_Template_button_click_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r5.hideConfirmPassword = !ctx_r5.hideConfirmPassword;
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 12, "VALIDATION_ERRORS.REQUIRED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 14, "AUTH.PASSWORD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r2.hidePassword ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r2.hidePassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.hidePassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 16, "VALIDATION_ERRORS.REQUIRED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 18, "AUTH.CONFIRM_PASSWORD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r2.hideConfirmPassword ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r2.hideConfirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.hideConfirmPassword ? "visibility_off" : "visibility");
  }
}

let ResetPasswordComponent = class ResetPasswordComponent {
  constructor(store, formBuilder, authService, activatedRoute, router) {
    this.store = store;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.showSuccessResetRequestMessage = false;
    this.hidePassword = true;
    this.hideConfirmPassword = true;
  }

  ngOnInit() {
    var _this = this;

    return (0,F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const queryParams = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.activatedRoute.queryParams);
      _this.resetPasswordToken = queryParams['token'];

      _this.setEmailForm();

      _this.resetPasswordForm = _this.emailForm;

      _this.setPasswordForm();

      _this.setResetForm();
    })();
  }

  setResetForm() {
    this.resetPasswordForm = this.resetPasswordToken ? this.passwordForm : this.emailForm;
  }

  setEmailForm() {
    this.emailForm = this.formBuilder.group({
      email: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email])
    });
  }

  setPasswordForm() {
    this.passwordForm = this.formBuilder.group({
      password: this.formBuilder.control(null),
      confirmPassword: this.formBuilder.control(null, [this.hasTheSameValue.bind(this)])
    });
  }

  submit() {
    var _this2 = this;

    if (!this.resetPasswordToken) {
      this.authService.requestResetPassword(this.resetPasswordForm.value.email).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.showSuccessResetRequestMessage = true)).subscribe();
      return;
    }

    this.authService.resetPassword({
      token: this.resetPasswordToken,
      password: this.resetPasswordForm.value.password
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)( /*#__PURE__*/(0,F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this2.router.navigateByUrl('auth/login');
    }))).subscribe();
  }

  hasTheSameValue(control) {
    var _a;

    if (((_a = this.resetPasswordForm) === null || _a === void 0 ? void 0 : _a.value.password) !== control.value) return [{
      invalidConfirm: 'Password And Confirm Password should be the same'
    }];
    return null;
  }

};

ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
  return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};

ResetPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ResetPasswordComponent,
  selectors: [["app-reset-password"]],
  decls: 16,
  vars: 11,
  consts: [[1, "login-form-container"], [1, "w-50", "d-flex", "flex-column", "justify-content-start", "align-items-center"], [1, "w-50"], ["src", "../../../../assets/media/login/login-logo.svg", 1, "mb-2"], [1, "w-50", "d-flex", "flex-column", "align-items-center", 3, "formGroup", "submit"], ["class", "w-100 alert alert-primary", 4, "ngIf"], ["class", "w-100 my-2", 4, "ngIf"], ["class", "d-flex flex-column w-100", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "w-100", "radius-2", 3, "disabled"], [1, "mt-1"], ["href", "auth/login"], ["src", "../../../../assets/media/login/login-image.png", 1, "login-image"], [1, "w-100", "alert", "alert-primary"], [1, "w-100", "my-2"], ["matInput", "", "formControlName", "email"], [1, "d-flex", "flex-column", "w-100"], [1, "my-2"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "confirmPassword", "required", "", 3, "type"]],
  template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function ResetPasswordComponent_Template_form_submit_4_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ResetPasswordComponent_p_5_Template, 2, 1, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ResetPasswordComponent_mat_form_field_6_Template, 8, 6, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ResetPasswordComponent_div_7_Template, 23, 20, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9)(12, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.resetPasswordForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showSuccessResetRequestMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.resetPasswordToken);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.resetPasswordToken);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.resetPasswordForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 7, "AUTH.RESET_PASSWORD"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 9, "AUTH.LOGIN"));
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
  styles: [".login-form-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n}\n\n.login-image[_ngcontent-%COMP%] {\n  height: 100%;\n  object-fit: fill;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxvZ2luLWltYWdlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogZmlsbDtcclxufVxyXG5cclxuIl19 */"]
});
ResetPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.UntilDestroy)()], ResetPasswordComponent);


/***/ }),

/***/ 23972:
/*!**********************************************!*\
  !*** ./src/app/pages/base/base.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/auth/services/auth.service */ 75397);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared */ 8268);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _shared_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/side-nav/side-nav.component */ 12817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_directives_profile_image_profile_image_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/directives/profile-image/profile-image.directive */ 13468);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 33935);














function BaseComponent_div_5_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BaseComponent_div_5_button_17_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const lang_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r6.changeLang(lang_r5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const lang_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", lang_r5.logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, lang_r5.title), " ");
  }
}

function BaseComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BaseComponent_div_5_Template_a_click_1_listener($event) {
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-menu", null, 14)(9, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-menu", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, BaseComponent_div_5_button_17_Template, 4, 4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BaseComponent_div_5_Template_a_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r9.logOut();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const user_r1 = ctx.$implicit;

    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("circularWidth", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 8, "PROFILE.MY_PROFILE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 10, "TOP_BAR.CHANGE_LANGUAGE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.languages);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 12, "AUTH.LOGOUT"), " ");
  }
}

class BaseComponent {
  constructor(store, authService, translationService, permissionService) {
    this.store = store;
    this.authService = authService;
    this.translationService = translationService;
    this.permissionService = permissionService;
    this.collapse = false;
    this.languages = [{
      locale: 'en',
      title: 'LANGUAGES.EN',
      logo: './assets/media/lang-selector-icons/usa-en.svg'
    }, {
      locale: 'ar',
      title: 'LANGUAGES.AR',
      logo: './assets/media/lang-selector-icons/ar-eg.svg'
    }];
  }

  ngOnInit() {
    this.internalizeApp();
  }

  internalizeApp() {
    this.loadPermissions();
    const activeLang = this.translationService.getSelectedLanguage();
    this.activeLang = this.languages.filter(lang => lang.locale == activeLang)[0];
  }

  loadPermissions() {
    this.permissionService.flushPermissions();
    this.store.select(state => {
      var _a, _b;

      return (_b = (_a = state === null || state === void 0 ? void 0 : state.currentUser) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.permissions;
    }).subscribe(result => {
      if (result) this.permissionService.loadPermissions(result);
    });
  }

  logOut() {
    this.authService.logOut();
  }

  changeLang(lang) {
    this.translationService.setLanguage(lang.locale);
    this.activeLang = lang;
  }

}

BaseComponent.ɵfac = function BaseComponent_Factory(t) {
  return new (t || BaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_shared__WEBPACK_IMPORTED_MODULE_2__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_6__.NgxPermissionsService));
};

BaseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: BaseComponent,
  selectors: [["app-base"]],
  decls: 10,
  vars: 4,
  consts: [[1, "nav-container"], [3, "collapse"], [1, "body", "d-flex", "flex-column"], [1, "top-bar"], [1, "top-bar-right"], ["class", "d-flex", 4, "ngIf"], [1, "top-bar-right-item", "top-bar-user"], [1, "content", "flex-grow-1"], [1, "d-flex"], ["href", "", 1, "top-bar-item", "btn-link", "nav-lang", 3, "click"], ["appProfileImage", "", "imageUrl", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg30kWDYgrSeRobjdwPDiNw1EDK62VkV4SvPXWGT5bqSCAdnNG0CjRmpXRcW43N9OHCY&usqp=CAU", 3, "circularWidth"], [1, "top-bar__username"], [1, "top-bar-item", "btn-link", "nav-lang", 3, "matMenuTriggerFor"], [1, "fa-solid", "fa-gear"], ["settingMenu", "matMenu"], ["mat-menu-item", "", "href", "profiles/my-profile", 1, "top-bar-item", "btn-link", "w-100"], ["mat-menu-item", "", 1, "top-bar-item", "btn-link", "w-100", 3, "matMenuTriggerFor"], ["changeLangMenu", ""], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["href", "auth/login", "mat-menu-item", "", 1, "top-bar-item", "btn-link", "w-100", 2, "color", "red", 3, "click"], ["mat-menu-item", "", 3, "click"], ["alt", "", 1, "lang-logo", 3, "src"]],
  template: function BaseComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-side-nav", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "nav", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, BaseComponent_div_5_Template, 21, 14, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("collapse", ctx.collapse);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 2, ctx.user$));
    }
  },
  directives: [_shared_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__.SideNavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_directives_profile_image_profile_image_directive__WEBPACK_IMPORTED_MODULE_4__.ProfileImageDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: [".nav-container[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n  margin: 0;\n}\n\n.body[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  width: 100%;\n  border: #d0bbbb;\n  overflow: hidden;\n  margin-inline-start: 285px;\n}\n\n\n\n\n\n.top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 1rem;\n  background-color: white;\n  height: 65px;\n}\n\n.top-bar-right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.top-bar-header[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n}\n\n.top-bar-right-item[_ngcontent-%COMP%] {\n  padding: 0 0.5rem;\n}\n\n.top-bar-user[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.nav-lang-selector[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #3699FF;\n}\n\n.nav-lang[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.selected-lang-logo[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n\n.lang-logo[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.top-bar-item[_ngcontent-%COMP%] {\n  color: #B5B5C3;\n  display: inline-flex;\n  height: 52px;\n}\n\n.top-bar-item[_ngcontent-%COMP%]:hover {\n  color: #3699FF;\n  border-radius: 3px;\n  background-color: #F3F6F9;\n}\n\n.top-bar__username[_ngcontent-%COMP%] {\n  color: black;\n  margin-inline-start: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n.footer[_ngcontent-%COMP%] {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxhQUFBO0VBRUEsVUFBQTtFQUNBLFNBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsMEJBQUE7QUFMRjs7QUFRQSxhQUFBOztBQUNBLGtCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0FBTEY7O0FBUUE7RUFDRSxpQkFBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTEY7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFMRjs7QUFRQTtFQUNFLGNBN0VpQjtFQThFakIsa0JBQUE7RUFDQSx5QkFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFPQSxhQUFBOztBQUVBO0VBQ0UsdUJBQUE7QUFMRiIsImZpbGUiOiJiYXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2VOYXZDb2xvcjogIzFFMUUyRDtcclxuJG5hdkhlYWRlckNvbG9yOiAjMUExQTI3O1xyXG4kdG9wQmFySG92ZXJDb2xvcjogIzM2OTlGRjtcclxuXHJcbi5uYXYtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vd2lkdGg6IDEwMHZ3O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogI2QwYmJiYjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8vbWFyZ2luLWlubGluZS1zdGFydDogMTUlO1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDI4NXB4O1xyXG59XHJcblxyXG4vKiNlbmRyZWdpb24qL1xyXG4vKiNyZWdpb24gTmF2IEJhciovXHJcbi50b3AtYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbn1cclxuXHJcbi50b3AtYmFyLXJpZ2h0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udG9wLWJhci1oZWFkZXIge1xyXG4gIG1hcmdpbjogMCAxcmVtO1xyXG59XHJcblxyXG4udG9wLWJhci1yaWdodC1pdGVtIHtcclxuICBwYWRkaW5nOiAwIDAuNXJlbTtcclxufVxyXG5cclxuLnRvcC1iYXItdXNlciB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4ubmF2LWxhbmctc2VsZWN0b3Ige1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzM2OTlGRjtcclxufVxyXG5cclxuLm5hdi1sYW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1sYW5nLWxvZ28ge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmxhbmctbG9nbyB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4udG9wLWJhci1pdGVtIHtcclxuICBjb2xvcjogI0I1QjVDMztcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBoZWlnaHQ6IDUycHg7XHJcbn1cclxuXHJcbi50b3AtYmFyLWl0ZW06aG92ZXIge1xyXG4gIGNvbG9yOiAkdG9wQmFySG92ZXJDb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjZGOTtcclxufVxyXG5cclxuLnRvcC1iYXJfX3VzZXJuYW1lIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLWlubGluZS1zdGFydDogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"]
});

(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(state => {
  var _a;

  return (_a = state.currentUser) === null || _a === void 0 ? void 0 : _a.user;
})], BaseComponent.prototype, "user$", void 0);

/***/ }),

/***/ 61054:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/blog-tag/blog-tag-create/blog-tag-create.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogTagCreateComponent": () => (/* binding */ BlogTagCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared */ 8268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);










function BlogTagCreateComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "VALIDATION_ERRORS.INVALID_COLOR"), " ");
} }
const defaultTagColor = '#000000';
class BlogTagCreateComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
        this.blogForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(10),
            ]),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(defaultTagColor, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                _core_shared__WEBPACK_IMPORTED_MODULE_0__.colorValidator,
                ({ value }) => {
                    if (value == '#ffffff') {
                        return [
                            {
                                invalidColor: '',
                            },
                        ];
                    }
                    return null;
                },
            ]),
        });
    }
    close() {
        this.dialogRef.close();
    }
    submit() {
        this.dialogRef.close(Object.assign({}, this.blogForm.value));
    }
}
BlogTagCreateComponent.ɵfac = function BlogTagCreateComponent_Factory(t) { return new (t || BlogTagCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
BlogTagCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BlogTagCreateComponent, selectors: [["app-blog-tag-create"]], decls: 18, vars: 10, consts: [[2, "display", "flex", "flex-direction", "column", 3, "formGroup"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "placeholder", "Tag Name", "formControlName", "name", 3, "maxlength"], ["matInput", "", "type", "color", "formControlName", "color", "placeholder", "Color"], ["color", ""], [4, "ngIf"], ["mat-button", "", "type", "submit", "color", "primary", 3, "disabled", "click"], ["mat-button", "", "type", "button", 3, "click"]], template: function BlogTagCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 1)(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Tag Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 1)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, BlogTagCreateComponent_mat_error_11_Template, 3, 3, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogTagCreateComponent_Template_button_click_12_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogTagCreateComponent_Template_button_click_15_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.blogForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("maxlength", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.value == "#ffffff");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.blogForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 6, "SHARED.ADD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 8, "SHARED.CANCEL"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".mat-flat-button[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2ctdGFnLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJibG9nLXRhZy1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZsYXQtYnV0dG9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 95618:
/*!******************************************************!*\
  !*** ./src/app/pages/blog-tag/blog-tag.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BLogTagComponent": () => (/* binding */ BLogTagComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _blog_tag_create_blog_tag_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-tag-create/blog-tag-create.component */ 61054);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_blogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/blogs */ 76945);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 33935);

















const _c0 = ["tag"];
function BLogTagComponent_mat_spinner_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-spinner", 9);
} }
function BLogTagComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", tag_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tag_r5.name, " ");
} }
function BLogTagComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BLogTagComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.addTag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "BLOGS.ADD_TAG"), " ");
} }
let BLogTagComponent = class BLogTagComponent {
    constructor(controlDir, blogTagService, dialog) {
        this.controlDir = controlDir;
        this.blogTagService = blogTagService;
        this.dialog = dialog;
        this.loading = false;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
        this.readOnly = true;
        this.controlDir.valueAccessor = this;
    }
    ngOnInit() {
        this.formControl.setValidators(this.controlDir.control.validator);
        this.formControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
    }
    addTag() {
        const dialogRef = this.dialog.open(_blog_tag_create_blog_tag_create_component__WEBPACK_IMPORTED_MODULE_0__.BlogTagCreateComponent);
        dialogRef
            .afterClosed()
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)((tag) => {
            if (tag) {
                return this.blogTagService.addTag(tag).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)((tagId) => (Object.assign(Object.assign({}, tag), { id: tagId }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)((tag) => this.setSelectedTag(tag)));
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(null);
        }))
            .subscribe();
    }
    setSelectedTag(tag) {
        var _a;
        (_a = this.controlDir.control) === null || _a === void 0 ? void 0 : _a.setValue(tag);
    }
    clear() {
        this.selectedTag = null;
        this.formControl.markAsPristine();
        this.formControl.markAsUntouched();
        this.input.nativeElement.value = null;
    }
    loadOnFocusTags() {
        this.controlDir.control.markAsTouched();
        if (this.readOnly || this.selectedTag || (this.tags && this.tags.length)) {
            return;
        }
        this.loadTags(null);
    }
    loadTags(keyword) {
        this.loading = true;
        this.controlDir.control.markAsTouched();
        this.blogTagService
            .getAll(keyword)
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe((tags) => {
            this.tags = tags;
            this.loading = false;
        });
        this.setSelectedTag(null);
    }
    // Validation
    validate(control) {
        if (this.selectedTag)
            return null;
        return [];
    }
    registerOnValidatorChange(fn) {
        throw new Error('Method not implemented.');
    }
    setDisabledState(isDisabled) {
        throw new Error('Method not implemented.');
    }
    // NG CONTROL
    writeValue(obj) {
        var _a;
        this.selectedTag = obj;
        if (obj) {
            this.formControl.setValue(obj.name);
            this.input.nativeElement.value = obj.name;
        }
        else {
            (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setErrors([]);
        }
    }
    onChanged(event) { }
    onTouched() { }
    registerOnChange(fn) {
        this.onChanged = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
};
BLogTagComponent.ɵfac = function BLogTagComponent_Factory(t) { return new (t || BLogTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControl, 2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_blogs__WEBPACK_IMPORTED_MODULE_1__.BlogTagService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog)); };
BLogTagComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BLogTagComponent, selectors: [["app-blog-tag"]], viewQuery: function BLogTagComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, inputs: { readOnly: "readOnly" }, decls: 15, vars: 12, consts: [[1, "d-flex", "align-items-start"], [1, "d-flex", "align-items-center"], ["matInput", "", "type", "text", "placeholder", "Pick one", "aria-label", "Number", "title", "Text", 3, "readonly", "formControl", "matAutocomplete", "input", "focus"], ["tag", ""], ["matSuffix", "", "diameter", "20", 4, "ngIf"], ["autoActiveFirstOption", "", 3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "primary", "class", "mx-2 add-tag", 3, "click", 4, "ngIf"], ["matSuffix", "", "diameter", "20"], [3, "value"], ["mat-flat-button", "", "color", "primary", 1, "mx-2", "add-tag", 3, "click"]], template: function BLogTagComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function BLogTagComponent_Template_input_input_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6); return ctx.loadTags(_r0.value); })("focus", function BLogTagComponent_Template_input_focus_5_listener() { return ctx.loadOnFocusTags(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, BLogTagComponent_mat_spinner_10_Template, 1, 0, "mat-spinner", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-autocomplete", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("optionSelected", function BLogTagComponent_Template_mat_autocomplete_optionSelected_11_listener($event) { return ctx.setSelectedTag($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BLogTagComponent_mat_option_13_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, BLogTagComponent_button_14_Template, 3, 3, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 8, "BLOGS.SELECT_TAG"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", ctx.readOnly)("formControl", ctx.formControl)("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 10, "VALIDATION_ERRORS.SELECT_CORRECT_TAG"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.readOnly);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatSpinner, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: [".mat-flat-button[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.add-tag[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2ctdGFnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJibG9nLXRhZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZmxhdC1idXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFkZC10YWcge1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuIl19 */"] });
BLogTagComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)()
], BLogTagComponent);



/***/ }),

/***/ 96060:
/*!***************************************************!*\
  !*** ./src/app/pages/blog-tag/blog-tag.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogTagModule": () => (/* binding */ BlogTagModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _blog_tag_create_blog_tag_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-tag-create/blog-tag-create.component */ 61054);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _blog_tag_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-tag.component */ 95618);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _core_blogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/blogs */ 76945);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);












class BlogTagModule {
}
BlogTagModule.ɵfac = function BlogTagModule_Factory(t) { return new (t || BlogTagModule)(); };
BlogTagModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BlogTagModule });
BlogTagModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_core_blogs__WEBPACK_IMPORTED_MODULE_2__.BlogTagService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BlogTagModule, { declarations: [_blog_tag_create_blog_tag_create_component__WEBPACK_IMPORTED_MODULE_0__.BlogTagCreateComponent, _blog_tag_component__WEBPACK_IMPORTED_MODULE_1__.BLogTagComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule], exports: [_blog_tag_component__WEBPACK_IMPORTED_MODULE_1__.BLogTagComponent] }); })();


/***/ }),

/***/ 49781:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/hunger-vedio/hunger-vedio-details/hunger-vedio-details.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HungerVedioDetailsComponent": () => (/* binding */ HungerVedioDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_hunger_vedio_services_hunger_vedio_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/hunger-vedio/services/hunger-vedio.service */ 24988);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 33935);









function HungerVedioDetailsComponent_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const hungerType_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", hungerType_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](hungerType_r5.name);
  }
}

function HungerVedioDetailsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "video", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Your browser does not support the video tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}

function HungerVedioDetailsComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HungerVedioDetailsComponent_button_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r6.uploadFile();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SHARED.ADD"), "");
  }
}

function HungerVedioDetailsComponent_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HungerVedioDetailsComponent_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r8.updateFile();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function HungerVedioDetailsComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HungerVedioDetailsComponent_button_30_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r10.delete($event, ctx_r10.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SHARED.DELETE"));
  }
}

let HungerVedioDetailsComponent = class HungerVedioDetailsComponent {
  constructor(hungerService, route, router) {
    this.hungerService = hungerService;
    this.route = route;
    this.router = router; // hungerVideoForm: FormGroup;
    // hungerVideo: any;
    // viewOnly = false;
    // // Store
    // @Select((state) => state.hungerVideos.lastLoadedHungerVideo)
    // hungerVideo$: Observable<any>;
    // constructor(
    //   private activatedRoute: ActivatedRoute,
    //   private formBuilder: FormBuilder,
    //   private store: Store,
    //   private hungerVideoService: HungerVedioService,
    //   private router: Router
    // ) { }
    // ngOnInit(): void {
    //   this.initializeHungerVideo();
    //   this.hungerVideo$.pipe(untilDestroyed(this)).subscribe((details) => {
    //     if (!details) return;
    //     this.viewOnly = false;
    //     this.hungerVideo = {
    //       ...details,
    //       coverImage: details.coverImage.map((m) => new Media(m)),
    //       mainVideo: details.mainVideo.map((m) => new Media(m)),
    //     };
    //     this.initializeFrom();
    //     this.hungerVideoForm.markAsPristine();
    //     this.hungerVideoForm.markAsUntouched();
    //   });
    // }
    // initializeHungerVideo() {
    //   this.activatedRoute.params
    //     .pipe(untilDestroyed(this))
    //     .subscribe((params) => {
    //       const id = params['id'];
    //       this.loadHungerVideo(id);
    //     });
    // }
    // initializeFrom() {
    //   if (this.hungerVideoForm) {
    //     this.hungerVideoForm.controls['subject'].setValue(this.hungerVideo?.subject);
    //     this.hungerVideoForm.controls['mainVideo'].setValue(
    //       this.hungerVideo?.mainVideo
    //     );
    //     this.hungerVideoForm.controls['coverImage'].setValue(
    //       this.hungerVideo?.coverImage
    //     );
    //     this.hungerVideoForm.controls['tag'].setValue(this.hungerVideo?.tag);
    //     return;
    //   }
    //   this.hungerVideoForm = this.formBuilder.group({
    //     subject: this.formBuilder.control(this.hungerVideo?.subject, [
    //       Validators.required,
    //       Validators.maxLength(100),
    //     ]),
    //     mainVideo: this.formBuilder.control(this.hungerVideo.mainVideo, [
    //       Validators.required,
    //     ]),
    //     coverImage: this.formBuilder.control(this.hungerVideo.coverImage),
    //     tag: this.formBuilder.control(this.hungerVideo.tag, Validators.required),
    //   });
    // }
    // submit() {
    //   const model = this.hungerVideoForm.value;
    //   const data = {
    //     subject: model.subject,
    //     media: model.media,
    //     tagId: model.tag.id,
    //     id: this.hungerVideo.id,
    //   };
    //   if (this.hungerVideo.id) {
    //     this.hungerVideoService
    //       .edit(data)
    //       .pipe()
    //       .subscribe((res) => this.loadHungerVideo(this.hungerVideo.id));
    //     return;
    //   }
    //   this.hungerVideoService
    //     .post(data)
    //     .pipe()
    //     .subscribe(async (res) => {
    //       await this.router.navigateByUrl('Hunger-videos/edit/' + res.data);
    //     });
    // }
    // cancelEditing() {
    //   this.loadHungerVideo(this.hungerVideo.id);
    //   if (this.hungerVideo.id) {
    //     this.viewOnly = false;
    //   }
    // }
    // delete() {
    //   this.hungerVideoService
    //     .delete(this.hungerVideo.id)
    //     .pipe(untilDestroyed(this))
    //     .subscribe(() => this.router.navigateByUrl('Hunger-videos'));
    // }
    // private loadHungerVideo(id: string) {
    //   if (!id) {
    //     this.hungerVideo = new HungerVideoDetailsViewModel();
    //     this.initializeFrom();
    //     this.hungerVideoForm.markAsPristine();
    //     this.hungerVideoForm.markAsUntouched();
    //     return;
    //   }
    //   this.store.dispatch(new HungerVideosActions.LoadHungerVideosDetails(id));
    // }
    // hungerTypes: any[] = [
    //   {
    //     "id": 1,
    //     "name": "Tummy Making Noises",
    //     "nameAr": "أصوات تصدر عن البطن"
    //   },
    //   {
    //     "id": 2,
    //     "name": "Feeling Chewy",
    //     "nameAr": "شعور مطاطى"
    //   },
    //   {
    //     "id": 3,
    //     "name": "Emotional Craves",
    //     "nameAr": "الرغبة العاطفية"
    //   },
    //   {
    //     "id": 4,
    //     "name": "I Don't Know",
    //     "nameAr": "لا أعرف"
    //   }
    // ];
    // selectedHungerTypeId: string = '';
    // subject: string = '';
    // uploadResponse: any;
    // selectedFile: File | null = null;
    // constructor(private hungerService: HungerVedioService) { }
    // ngOnInit(): void {
    //   // this.hungerService.getHungerTypes().subscribe(
    //   //   (response) => {
    //   //     this.hungerTypes = response;
    //   //   },
    //   //   (error) => {
    //   //     console.error(error);
    //   //   }
    //   // );
    // }
    // onFileSelected(event: any) {
    //   this.selectedFile = event.target.files[0];
    // }
    // uploadFile() {
    //   if (this.selectedFile && this.selectedHungerTypeId && this.subject) {
    //     this.hungerService.postHungerVideo(this.selectedFile, this.selectedHungerTypeId, this.subject).subscribe(
    //       (response) => {
    //         this.uploadResponse = response;
    //       },
    //       (error) => {
    //         console.error(error);
    //       }
    //     );
    //   } else {
    //     alert("Please select a file, a hunger type, and enter a subject.");
    //   }
    // }

    this.hungerTypes = [{
      "id": 1,
      "name": "Tummy Making Noises",
      "nameAr": "أصوات تصدر عن البطن"
    }, {
      "id": 2,
      "name": "Feeling Chewy",
      "nameAr": "شعور مطاطى"
    }, {
      "id": 3,
      "name": "Emotional Craves",
      "nameAr": "الرغبة العاطفية"
    }, {
      "id": 4,
      "name": "I Don't Know",
      "nameAr": "لا أعرف"
    }];
    this.selectedHungerTypeId = '1';
    this.subject = '';
    this.selectedFile = null;
    this.id = '';
    this.url = '';
    this.deletedMediaIds = '';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'] || '';

      if (this.id != '') {
        this.getById(this.id);
      }
    }); // this.hungerService.getHungerTypes().subscribe(
    //   (response) => {
    //     this.hungerTypes = response;
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile && this.selectedHungerTypeId && this.subject) {
      this.hungerService.postHungerVideo(this.selectedFile, this.selectedHungerTypeId, this.subject).subscribe(response => {
        this.uploadResponse = response;
        this.router.navigate(['/Hunger-videos']);
      }, error => {
        console.error(error);
      });
    } else {
      alert("Please select a file, a hunger type, and enter a subject.");
    }
  }

  updateFile() {
    if (this.id && this.selectedFile && this.selectedHungerTypeId && this.subject) {
      this.hungerService.updateHungerVideo(this.id, this.selectedFile, this.selectedHungerTypeId, this.subject).subscribe(response => {
        this.uploadResponse = response;
        this.router.navigate(['/Hunger-videos']);
      }, error => {
        console.error(error);
      });
    } else {
      alert("Please provide all the necessary information.");
    }
  } // deleteFile() {
  //   if (this.id && this.deletedMediaIds && this.selectedFile && this.selectedHungerTypeId && this.subject) {
  //     this.hungerService.deleteHungerVideo(this.id, this.deletedMediaIds, this.selectedFile, this.selectedHungerTypeId, this.subject).subscribe(
  //       (response) => {
  //         this.uploadResponse = response;
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   } else {
  //     alert("Please select file to delete.");
  //   }
  // }


  getById(id) {
    this.hungerService.getById(id).subscribe(data => {
      this.id = data.data.id;
      this.subject = data.data.subject;
      this.selectedHungerTypeId = data.data.hungerTypeId;
      this.url = data.data.media[0].url; // this.deletedMediaIds = data.data.media[0].id;
      // console.log(this.selectedFile = data.data.media[0].url);
    });
  }

  delete(event, id) {
    if (confirm('Are you sure you want to delete ?')) {
      event.target.innerHTML = 'Deleting...';
      this.hungerService.delete(id).subscribe(res => {
        alert('Deleted successfully');
        this.router.navigate(['/Hunger-videos']);
      });
    }
  }

};

HungerVedioDetailsComponent.ɵfac = function HungerVedioDetailsComponent_Factory(t) {
  return new (t || HungerVedioDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_hunger_vedio_services_hunger_vedio_service__WEBPACK_IMPORTED_MODULE_0__.HungerVedioService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};

HungerVedioDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HungerVedioDetailsComponent,
  selectors: [["app-hunger-vedio-details"]],
  decls: 31,
  vars: 10,
  consts: [[1, "p-3", "bg-white", "mat-elevation-z8"], [1, "d-flex", "justify-content-start"], [1, "flex-grow-1"], [1, "form-group", "col-md-6", "mt-3"], ["for", "subject"], ["type", "text", "placeholder", "Subject", "id", "subject", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "hungerType"], ["id", "hungerType", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "card", "col-md-10", "mt-4"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-md-6"], ["type", "file", "id", "fileInput", "accept", "video/mp4,video/x-m4v,video/*", 3, "change"], [4, "ngIf"], [1, "container", 2, "margin-left", "0"], [1, "col-md-3", 2, "margin-left", "0"], ["type", "button", "class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], [1, "col-md-3"], ["type", "button", "class", "button-1", 3, "click", 4, "ngIf"], [3, "value"], ["width", "300", "height", "200", "controls", "", 3, "src"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "button-1", 3, "click"]],
  template: function HungerVedioDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Subject");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HungerVedioDetailsComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.subject = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3)(8, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Hunger Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HungerVedioDetailsComponent_Template_select_ngModelChange_10_listener($event) {
        return ctx.selectedHungerTypeId = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HungerVedioDetailsComponent_option_11_Template, 2, 2, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HungerVedioDetailsComponent_Template_input_change_19_listener($event) {
        return ctx.onFileSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HungerVedioDetailsComponent_div_21_Template, 3, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div")(23, "div", 16)(24, "div", 12)(25, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HungerVedioDetailsComponent_button_26_Template, 3, 3, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, HungerVedioDetailsComponent_button_28_Template, 2, 0, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, HungerVedioDetailsComponent_button_30_Template, 3, 3, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.subject);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedHungerTypeId);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.hungerTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 8, "ATTACHMENTS.MAIN_VIDEO"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.url);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.id == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.id != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.id != "");
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
  styles: [".container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 20px;\n  text-align: center;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 20px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\ninput[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  padding: 8px;\n  margin-bottom: 10px;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.response[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: left;\n}\n\n.response[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.response[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 10px;\n  border-radius: 4px;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  position: relative;\n}\n\ninput[type=file][_ngcontent-%COMP%]::file-selector-button {\n  width: 136px;\n  color: transparent;\n}\n\n\n\ninput[type=file][_ngcontent-%COMP%]::before {\n  position: absolute;\n  pointer-events: none;\n  top: 10px;\n  left: 16px;\n  height: 20px;\n  width: 20px;\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230964B0'%3E%3Cpath d='M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z'/%3E%3C/svg%3E\");\n}\n\ninput[type=file][_ngcontent-%COMP%]::after {\n  position: absolute;\n  pointer-events: none;\n  top: 11px;\n  left: 40px;\n  color: #ff725a;\n  content: \"Upload Video\";\n}\n\n\n\n\n\ninput[type=file][_ngcontent-%COMP%]::file-selector-button {\n  border-radius: 4px;\n  padding: 0 16px;\n  height: 40px;\n  cursor: pointer;\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.16);\n  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);\n  margin-right: 16px;\n  transition: background-color 200ms;\n}\n\n\n\ninput[type=file][_ngcontent-%COMP%]::file-selector-button:hover {\n  background-color: #f3f4f6;\n}\n\n\n\ninput[type=file][_ngcontent-%COMP%]::file-selector-button:active {\n  background-color: #e5e7eb;\n}\n\n\n\n\n\nbody[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  max-width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5vmax;\n  box-sizing: border-box;\n}\n\n.button-1[_ngcontent-%COMP%] {\n  background-color: #ff725a;\n  border: none;\n  color: white;\n  padding: 10px 20px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n.button-1[_ngcontent-%COMP%]:hover {\n  background-color: #ff725a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1bmdlci12ZWRpby1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBOztFQUVJLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQSxnQ0FBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHdRQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQSxnQ0FBQTs7QUFFQSx1QkFBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQURKOztBQUlBLG1DQUFBOztBQUNBO0VBQ0kseUJBQUE7QUFESjs7QUFJQSxvQ0FBQTs7QUFDQTtFQUNJLHlCQUFBO0FBREo7O0FBSUEsNkJBQUE7O0FBRUEsd0NBQUE7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFGSjs7QUFLQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUNJLHlCQUFBO0FBRkoiLCJmaWxlIjoiaHVuZ2VyLXZlZGlvLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuc2VsZWN0IHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcblxyXG4ucmVzcG9uc2Uge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5yZXNwb25zZSBoMiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5yZXNwb25zZSBwcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImZpbGVcIl06OmZpbGUtc2VsZWN0b3ItYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMzZweDtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLyogRmFrZWQgbGFiZWwgc3R5bGVzIGFuZCBpY29uICovXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdOjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nJTIzMDk2NEIwJyUzRSUzQ3BhdGggZD0nTTE4IDE1djNINnYtM0g0djNjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMnYtM2gtMnpNNyA5bDEuNDEgMS40MUwxMSA3LjgzVjE2aDJWNy44M2wyLjU5IDIuNThMMTcgOWwtNS01LTUgNXonLyUzRSUzQy9zdmclM0VcIik7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdOjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRvcDogMTFweDtcclxuICAgIGxlZnQ6IDQwcHg7XHJcbiAgICBjb2xvcjogI2ZmNzI1YTtcclxuICAgIGNvbnRlbnQ6IFwiVXBsb2FkIFZpZGVvXCI7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0gRnJvbSBTdGVwIDEgLS0tLS0tLSAqL1xyXG5cclxuLyogZmlsZSB1cGxvYWQgYnV0dG9uICovXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcclxufVxyXG5cclxuLyogZmlsZSB1cGxvYWQgYnV0dG9uIGhvdmVyIHN0YXRlICovXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xyXG59XHJcblxyXG4vKiBmaWxlIHVwbG9hZCBidXR0b24gYWN0aXZlIHN0YXRlICovXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKiBkZWZhdWx0IGJvaWxlcnBsYXRlIHRvIGNlbnRlciBpbnB1dCAqL1xyXG5ib2R5IHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1dm1heDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5idXR0b24tMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3MjVhO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLTE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzI1YTtcclxufSJdfQ== */"]
});
HungerVedioDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)()], HungerVedioDetailsComponent);


/***/ }),

/***/ 90085:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/hunger-vedio/hunger-vedio-list/hunger-vedio-list.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HungerVedioListComponent": () => (/* binding */ HungerVedioListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_hunger_vedio_services_hunger_vedio_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/hunger-vedio/services/hunger-vedio.service */ 24988);
/* harmony import */ var _shared_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/list-header/list-header.component */ 29813);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_no_data_placeholder_no_data_placeholder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/no-data-placeholder/no-data-placeholder.component */ 30947);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 33935);













function HungerVedioListComponent_div_4_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Subject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HungerVedioListComponent_div_4_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r12.subject, " ");
} }
function HungerVedioListComponent_div_4_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Hunger Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HungerVedioListComponent_div_4_td_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Tummy Making Noises");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HungerVedioListComponent_div_4_td_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Feeling Chewy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HungerVedioListComponent_div_4_td_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Emotional Craves");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HungerVedioListComponent_div_4_td_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "I Don't Know");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HungerVedioListComponent_div_4_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HungerVedioListComponent_div_4_td_7_span_1_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, HungerVedioListComponent_div_4_td_7_span_2_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, HungerVedioListComponent_div_4_td_7_span_3_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HungerVedioListComponent_div_4_td_7_span_4_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r13.hungerTypeId == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r13.hungerTypeId == "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r13.hungerTypeId == "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r13.hungerTypeId == "4");
} }
function HungerVedioListComponent_div_4_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "SHARED.CREATED"), " ");
} }
function HungerVedioListComponent_div_4_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, element_r18.created, "dd-MM-YYYY"), " ");
} }
function HungerVedioListComponent_div_4_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 17);
} }
function HungerVedioListComponent_div_4_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HungerVedioListComponent_div_4_tr_12_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const row_r19 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r20.router.navigateByUrl("/Hunger-videos/edit/" + row_r19.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HungerVedioListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, HungerVedioListComponent_div_4_th_3_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HungerVedioListComponent_div_4_td_4_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](5, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, HungerVedioListComponent_div_4_th_6_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, HungerVedioListComponent_div_4_td_7_Template, 5, 4, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, HungerVedioListComponent_div_4_th_9_Template, 3, 3, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, HungerVedioListComponent_div_4_td_10_Template, 3, 4, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, HungerVedioListComponent_div_4_tr_11_Template, 1, 0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, HungerVedioListComponent_div_4_tr_12_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
} }
function HungerVedioListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-no-data-placeholder", 19);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r2.dataSource.data);
} }
const _c0 = function () { return [1, 5, 10, 25, 100]; };
class HungerVedioListComponent {
    constructor(router, videoService) {
        this.router = router;
        this.videoService = videoService;
        this.displayedColumns = ['subject', 'hungerType', 'createdAt'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource([]);
        this.totalItems = 0;
        this.pageSize = 10;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
    }
    ngOnInit() {
        this.search$ = this.searchControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)());
        this.loadHungerVideos();
        this.search$.subscribe(() => {
            this.paginator.pageIndex = 0;
            this.loadHungerVideos();
        });
    }
    loadHungerVideos() {
        const page = this.paginator ? this.paginator.pageIndex + 1 : 1;
        const search = this.searchControl.value || '';
        this.videoService.getVideos(page, this.pageSize, search).subscribe(data => {
            this.dataSource.data = data.data || [];
            this.totalItems = data.totalRows || 0;
        });
    }
    onPageChange(event) {
        this.pageSize = event.pageSize;
        this.loadHungerVideos();
    }
}
HungerVedioListComponent.ɵfac = function HungerVedioListComponent_Factory(t) { return new (t || HungerVedioListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_hunger_vedio_services_hunger_vedio_service__WEBPACK_IMPORTED_MODULE_0__.HungerVedioService)); };
HungerVedioListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HungerVedioListComponent, selectors: [["app-hunger-vedio-list"]], viewQuery: function HungerVedioListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 9, vars: 12, consts: [[1, "mat-elevation-z8", "list-container"], [3, "permissions", "withAddButton", "headerTitle", "addClicked"], [4, "ngIf", "ngIfElse"], ["noData", ""], [3, "length", "pageSize", "pageSizeOptions", "showFirstLastButtons", "page"], ["paginator", ""], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "subject"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "hungerType"], ["matColumnDef", "createdAt"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "mat-row-hover", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], ["mat-header-row", ""], ["mat-row", "", 1, "mat-row-hover", 3, "click"], ["classes", "my-3", 3, "data"]], template: function HungerVedioListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "app-list-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("addClicked", function HungerVedioListComponent_Template_app_list_header_addClicked_2_listener() { return ctx.router.navigateByUrl("Hunger-videos/add"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HungerVedioListComponent_div_4_Template, 13, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, HungerVedioListComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-paginator", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function HungerVedioListComponent_Template_mat_paginator_page_7_listener($event) { return ctx.onPageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 9, "Hunger Videos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("permissions", "canCreateBlogs")("withAddButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx.totalItems)("pageSize", ctx.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0))("showFirstLastButtons", true);
    } }, directives: [_shared_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_1__.ListHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _shared_no_data_placeholder_no_data_placeholder_component__WEBPACK_IMPORTED_MODULE_2__.NoDataPlaceholderComponent, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: [".mat-header-cell[_ngcontent-%COMP%] {\n  background: #2a3042;\n  color: white;\n}\n\n.mat-column-profileImage[_ngcontent-%COMP%] {\n  width: 70px;\n}\n\n.profile-image-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.profile-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 20px;\n}\n\n.mat-column-title[_ngcontent-%COMP%] {\n  max-width: 8rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.list-container[_ngcontent-%COMP%] {\n  background: white;\n  max-width: 100%;\n  margin: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh1bmdlci12ZWRpby1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDUjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxZQUFBO0FBREoiLCJmaWxlIjoiaHVuZ2VyLXZlZGlvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIGJhY2tncm91bmQ6ICMyYTMwNDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXByb2ZpbGVJbWFnZSB7XHJcbiAgICB3aWR0aDogNzBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXRpdGxlIHtcclxuICAgIG1heC13aWR0aDogOHJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLmxpc3QtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgLy9wYWRkaW5nOiAwIDFyZW07XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbn0iXX0= */"] });


/***/ }),

/***/ 44389:
/*!*******************************************************************!*\
  !*** ./src/app/pages/hunger-vedio/hunger-vedio-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HungerVedioRoutingModule": () => (/* binding */ HungerVedioRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _hunger_vedio_list_hunger_vedio_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hunger-vedio-list/hunger-vedio-list.component */ 90085);
/* harmony import */ var src_app_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/shared/guards/permission-guard.service */ 97226);
/* harmony import */ var _hunger_vedio_details_hunger_vedio_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hunger-vedio-details/hunger-vedio-details.component */ 49781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: '',
        component: _hunger_vedio_list_hunger_vedio_list_component__WEBPACK_IMPORTED_MODULE_0__.HungerVedioListComponent,
        canActivate: [src_app_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_1__.PermissionGuard],
        data: { permission: 'canViewBlogs' },
    },
    {
        path: 'add',
        component: _hunger_vedio_details_hunger_vedio_details_component__WEBPACK_IMPORTED_MODULE_2__.HungerVedioDetailsComponent,
        canActivate: [src_app_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_1__.PermissionGuard],
        data: { permission: 'canCreateBlogs' },
    },
    {
        path: 'edit/:id',
        component: _hunger_vedio_details_hunger_vedio_details_component__WEBPACK_IMPORTED_MODULE_2__.HungerVedioDetailsComponent,
        canActivate: [src_app_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_1__.PermissionGuard],
        data: { permission: 'canEditBlogs' },
    },
];
class HungerVedioRoutingModule {
}
HungerVedioRoutingModule.ɵfac = function HungerVedioRoutingModule_Factory(t) { return new (t || HungerVedioRoutingModule)(); };
HungerVedioRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HungerVedioRoutingModule });
HungerVedioRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HungerVedioRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 88938:
/*!***********************************************************!*\
  !*** ./src/app/pages/hunger-vedio/hunger-vedio.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HungerVedioModule": () => (/* binding */ HungerVedioModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 40950);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _blog_tag_blog_tag_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog-tag/blog-tag.module */ 96060);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _core_blog_videos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/blog-videos */ 55666);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _core_store_blog_videos_blog_videos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/store/blog-videos/blog-videos */ 64068);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _hunger_vedio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hunger-vedio-routing.module */ 44389);
/* harmony import */ var _hunger_vedio_details_hunger_vedio_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hunger-vedio-details/hunger-vedio-details.component */ 49781);
/* harmony import */ var _hunger_vedio_list_hunger_vedio_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hunger-vedio-list/hunger-vedio-list.component */ 90085);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var src_app_core_hunger_vedio_services_hunger_vedio_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/hunger-vedio/services/hunger-vedio.service */ 24988);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);






















class HungerVedioModule {
}
HungerVedioModule.ɵfac = function HungerVedioModule_Factory(t) { return new (t || HungerVedioModule)(); };
HungerVedioModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: HungerVedioModule, bootstrap: [src_app_app_component__WEBPACK_IMPORTED_MODULE_8__.AppComponent] });
HungerVedioModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [_core_blog_videos__WEBPACK_IMPORTED_MODULE_2__.BlogVideoService, src_app_core_hunger_vedio_services_hunger_vedio_service__WEBPACK_IMPORTED_MODULE_9__.HungerVedioService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _hunger_vedio_routing_module__WEBPACK_IMPORTED_MODULE_5__.HungerVedioRoutingModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
            _blog_tag_blog_tag_module__WEBPACK_IMPORTED_MODULE_1__.BlogTagModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
            _ngxs_store__WEBPACK_IMPORTED_MODULE_3__.NgxsModule.forFeature([_core_store_blog_videos_blog_videos__WEBPACK_IMPORTED_MODULE_4__.BlogVideosState]),
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
            ngx_permissions__WEBPACK_IMPORTED_MODULE_20__.NgxPermissionsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](HungerVedioModule, { declarations: [_hunger_vedio_details_hunger_vedio_details_component__WEBPACK_IMPORTED_MODULE_6__.HungerVedioDetailsComponent,
        _hunger_vedio_list_hunger_vedio_list_component__WEBPACK_IMPORTED_MODULE_7__.HungerVedioListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _hunger_vedio_routing_module__WEBPACK_IMPORTED_MODULE_5__.HungerVedioRoutingModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _blog_tag_blog_tag_module__WEBPACK_IMPORTED_MODULE_1__.BlogTagModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["ɵz"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
        ngx_permissions__WEBPACK_IMPORTED_MODULE_20__.NgxPermissionsModule] }); })();


/***/ }),

/***/ 79342:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/mobile-user/mobile-user-details/sub/dialog/dialog.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogComponent": () => (/* binding */ DialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_shared_services_translate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/shared/services/translate.service */ 47209);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_core_mobile_users_mobile_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/mobile-users/mobile-user.service */ 41479);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);



















function DialogComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "button", 9)(2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogComponent_div_13_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r2.addnote();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.actionBtn);
  }
}

function DialogComponent_mat_list_15_mat_list_item_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-list-item")(1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "note");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogComponent_mat_list_15_mat_list_item_4_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const attachment_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r6.openTab(attachment_r5.url);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "remove_red_eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 17)(12, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DialogComponent_mat_list_15_mat_list_item_4_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const attachment_r5 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r8.deleteUserAttachment(attachment_r5.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const attachment_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](attachment_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, attachment_r5.date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", attachment_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", attachment_r5.url);
  }
}

function DialogComponent_mat_list_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DialogComponent_mat_list_15_mat_list_item_4_Template, 19, 6, "mat-list-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.attachments);
  }
}

class DialogComponent {
  constructor(matDialog, translateService, dialog, http, formBuilder, data, editData, mobileUserService, dialogRef) {
    this.matDialog = matDialog;
    this.translateService = translateService;
    this.dialog = dialog;
    this.http = http;
    this.formBuilder = formBuilder;
    this.data = data;
    this.editData = editData;
    this.mobileUserService = mobileUserService;
    this.dialogRef = dialogRef;
    this.progress = 0;
    this.message = '';
    this.actionBtn = "Save";
    this.fileName = 'Select File';
    this.selectedLang = 'en';
    this.viewOnly = false;
    this.attachments = [];
  }

  ngOnInit() {
    this.noteForm = this.formBuilder.group({
      id: [this.editData.id],
      userId: [this.data.userId],
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    }); // this.fileInfos = this.mobileUserService.getFiles(this.data.userId);

    if (this.editData) {
      if (this.editData.id) {
        this.actionBtn = "Update";
      }

      this.noteForm.controls['title'].setValue(this.editData.title);
      this.noteForm.controls['notes'].setValue(this.editData.notes);
    }

    this.getUserAttachment();
  }

  addnote() {
    if (!this.editData.id) {
      if (this.noteForm.valid) {
        this.mobileUserService.postNote(this.noteForm.value).subscribe({
          next: res => {
            alert("Note added successfully");
            this.mobileUserService.getUserNotes(this.data.userId);
            this.noteForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert("Error while adding the note");
          }
        });
      }
    } else {
      this.updateNote();
    }
  }

  updateNote() {
    this.mobileUserService.putNote(this.noteForm.value).subscribe({
      next: res => {
        alert("Note updated successfully");
        this.mobileUserService.getUserNotes(this.data.userId);
        this.noteForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert("Error while adding the note");
      }
    });
  }

  deleteUserAttachment(id) {
    this.mobileUserService.deleteAttachment(id).subscribe({
      next: res => {
        alert("Attachment Deleted successfully");
        this.getUserAttachment();
      },
      error: err => {
        alert("Error while fetching the Records");
      }
    }); // this.matDialog
    //   .open(ConfirmDialogComponent, {})
    //   .afterClosed()
    //   .pipe(
    //     switchMap((d) => {
    //       if (d) {
    //         return this.mobileUserService.deleteAttachment(id)
    //           .pipe(
    //             tap(async () => {
    //               // await this.mobileUserService.getUserAttachment(this.data.userId, this.data.id);
    //             }));
    //       }
    //       return of(false);
    //     }),
    //     untilDestroyed(this)
    //   )
    //   .subscribe();
  }

  getUserAttachment() {
    this.mobileUserService.getUserAttachment(this.data.userId, this.data.id).subscribe({
      next: res => {
        this.attachments = res.data;
        console.log(this.attachments);
      },
      error: err => {
        alert("Error while fetching the Records");
      }
    });
  }

  openTab(url) {
    if (url.includes('png') || url.includes('jpg') || url.includes('jpeg') || url.includes('gif')) {
      window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400").document.write(`<img style="display: block;
      margin-left: auto;
      margin-right: auto;" width="750" height="750" src=${url} alt="image" />`);
    } else {
      window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400").document.write(`<a href=${url} target="_blank">Open</a>`);
    }
  }

}

DialogComponent.ɵfac = function DialogComponent_Factory(t) {
  return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_shared_services_translate_service__WEBPACK_IMPORTED_MODULE_0__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_mobile_users_mobile_user_service__WEBPACK_IMPORTED_MODULE_1__.MobileUserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef));
};

DialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DialogComponent,
  selectors: [["app-dialog"]],
  decls: 16,
  vars: 3,
  consts: [[3, "formGroup"], ["mat-dialog-title", ""], [1, "w-100"], ["required", "", "formControlName", "title", "matInput", "", "placeholder", "Title"], ["rows", "10", "cols", "50", "required", "", "formControlName", "notes", "matInput", ""], ["class", "d-flex justify-content-end m-3", 4, "ngxPermissionsOnly"], [1, "m-4"], [4, "ngIf"], [1, "d-flex", "justify-content-end", "m-3"], ["mat-raised-button", "", "color", "primary"], [1, "text-white", 3, "click"], ["mat-raised-button", "", "mat-dialog-close", "", 2, "margin-left", "8px"], ["mat-subheader", ""], [4, "ngFor", "ngForOf"], ["mat-list-icon", ""], ["mat-line", ""], ["mat-icon-button", "", "color", "warn", 3, "click"], [3, "href"], ["color", "warn"], [3, "routerLink"]],
  template: function DialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "mat-dialog-content")(2, "form", 0)(3, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Notes Form");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 2)(6, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 2)(10, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "textarea", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, DialogComponent_div_13_Template, 6, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DialogComponent_mat_list_15_Template, 5, 1, "mat-list", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.noteForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxPermissionsOnly", "canAssignPremiumFeaturesToAppUsers");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.actionBtn != "Save");
    }
  },
  directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ngx_permissions__WEBPACK_IMPORTED_MODULE_8__.NgxPermissionsDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatList, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListSubheaderCssMatStyler, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListIconCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatLine, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLinkWithHref],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  styles: [".progress-bar[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.progress[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n#fileInput[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  z-index: 10;\n  opacity: 0;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n}\n\n.mat-toolbar-single-row[_ngcontent-%COMP%] {\n  height: auto !important;\n  background: transparent;\n  padding: 0;\n}\n\n.mat-toolbar-single-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.message[_ngcontent-%COMP%] {\n  background-color: #ddd;\n  padding: 15px;\n  color: #333;\n  border: #aaa solid 1px;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcy1iYXIge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnByb2dyZXNzIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4jZmlsZUlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyOiAjYWFhIHNvbGlkIDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 98659:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/mobile-user/mobile-user-details/sub/upload-document-dialog/upload-document-dialog.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadDocumentDialogComponent": () => (/* binding */ UploadDocumentDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_mobile_users_mobile_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/mobile-users/mobile-user.service */ 41479);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-permissions */ 16562);












function UploadDocumentDialogComponent_mat_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-bar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.progress, "%");
} }
function UploadDocumentDialogComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.message, " ");
} }
function UploadDocumentDialogComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class UploadDocumentDialogComponent {
    constructor(data, editData, mobileUserService, dialogRef) {
        this.data = data;
        this.editData = editData;
        this.mobileUserService = mobileUserService;
        this.dialogRef = dialogRef;
        this.progress = 0;
        this.message = '';
        this.actionBtn = "Save";
        this.fileName = 'Select File';
    }
    ngOnInit() {
    }
    selectFile(event) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            this.currentFile = file;
            this.fileName = this.currentFile.name;
        }
        else {
            this.fileName = 'Select File';
        }
    }
    upload() {
        this.progress = 0;
        this.message = "";
        if (this.currentFile) {
            this.mobileUserService.upload(this.currentFile, this.data.userId, this.fileName, this.data.id).subscribe((event) => {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpEventType.UploadProgress) {
                    this.progress = Math.round(100 * event.loaded / event.total);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {
                    this.message = event.body.message;
                    this.fileInfos = this.mobileUserService.getFiles(this.data.userId);
                }
            }, (err) => {
                this.progress = 0;
                if (err.error && err.error.message) {
                    this.message = err.error.message;
                }
                else {
                    this.message = 'Could not upload the file!';
                }
                this.currentFile = undefined;
            });
            // console.log(this.fileInfos);
        }
    }
}
UploadDocumentDialogComponent.ɵfac = function UploadDocumentDialogComponent_Factory(t) { return new (t || UploadDocumentDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_mobile_users_mobile_user_service__WEBPACK_IMPORTED_MODULE_0__.MobileUserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
UploadDocumentDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UploadDocumentDialogComponent, selectors: [["app-upload-document-dialog"]], decls: 13, vars: 5, consts: [["class", "progress-bar m-3", 4, "ngIf"], ["matInput", "", 3, "value"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], ["type", "file", "id", "fileInput", "name", "fileInput", 3, "change"], ["class", "message", "class", "m-3", 4, "ngIf"], ["class", "d-flex justify-content-end m-3", 4, "ngxPermissionsOnly"], [1, "progress-bar", "m-3"], ["color", "accent", 3, "value"], [1, "progress"], [1, "m-3"], [1, "d-flex", "justify-content-end", "m-3"], ["mat-raised-button", "", "mat-dialog-close", "", 2, "margin-left", "8px"]], template: function UploadDocumentDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "mat-dialog-content")(2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UploadDocumentDialogComponent_mat_toolbar_3_Template, 4, 2, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field")(5, "div")(6, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadDocumentDialogComponent_Template_button_click_8_listener() { return ctx.upload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UploadDocumentDialogComponent_Template_input_change_10_listener($event) { return ctx.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UploadDocumentDialogComponent_div_11_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UploadDocumentDialogComponent_div_12_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.fileName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.currentFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", "canAssignPremiumFeaturesToAppUsers");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBar, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, ngx_permissions__WEBPACK_IMPORTED_MODULE_10__.NgxPermissionsDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose], styles: [".progress-bar[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.progress[_ngcontent-%COMP%] {\n  width: 50px;\n  align-items: center;\n  padding: 15px;\n}\n\n#fileInput[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  z-index: 10;\n  opacity: 0;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n}\n\n.mat-toolbar-single-row[_ngcontent-%COMP%] {\n  height: auto !important;\n  background: transparent;\n  padding: 0;\n}\n\n.mat-toolbar-single-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.message[_ngcontent-%COMP%] {\n  background-color: #ddd;\n  padding: 15px;\n  color: #333;\n  border: #aaa solid 1px;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC1kb2N1bWVudC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJ1cGxvYWQtZG9jdW1lbnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzLWJhciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuI2ZpbGVJbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci1zaW5nbGUtcm93IGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJvcmRlcjogI2FhYSBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 13475:
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/mobile-user/mobile-user-details/sub/user-documents-dialog/user-documents-dialog.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDocumentsDialogComponent": () => (/* binding */ UserDocumentsDialogComponent)
/* harmony export */ });
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dialog/dialog.component */ 79342);
/* harmony import */ var _upload_document_dialog_upload_document_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../upload-document-dialog/upload-document-dialog.component */ 98659);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var src_app_core_shared_services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/shared/services/translate.service */ 47209);
/* harmony import */ var src_app_core_mobile_users_mobile_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/mobile-users/mobile-user.service */ 41479);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);




















function UserDocumentsDialogComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserDocumentsDialogComponent_div_2_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r14.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "MOBILE_USERS.ADD_NOTES"));
} }
function UserDocumentsDialogComponent_div_2_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserDocumentsDialogComponent_div_2_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r16.title, " ");
} }
function UserDocumentsDialogComponent_div_2_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserDocumentsDialogComponent_div_2_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r17.notes, "");
} }
function UserDocumentsDialogComponent_div_2_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserDocumentsDialogComponent_div_2_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, row_r18.date), "");
} }
function UserDocumentsDialogComponent_div_2_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserDocumentsDialogComponent_div_2_td_22_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserDocumentsDialogComponent_div_2_td_22_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const row_r19 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r20.uploadDocument(row_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Upload Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserDocumentsDialogComponent_div_2_td_22_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const row_r19 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r22.editNote(row_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserDocumentsDialogComponent_div_2_td_22_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const row_r19 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r23.deleteNote(row_r19.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} }
function UserDocumentsDialogComponent_div_2_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 29);
} }
function UserDocumentsDialogComponent_div_2_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 30);
} }
function UserDocumentsDialogComponent_div_2_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 31)(1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r2.value, "\"");
} }
const _c0 = function () { return [5, 10, 25, 100]; };
function UserDocumentsDialogComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, UserDocumentsDialogComponent_div_2_div_2_Template, 5, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 5)(4, "mat-form-field", 6)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function UserDocumentsDialogComponent_div_2_Template_input_keyup_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r25.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9)(10, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](11, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, UserDocumentsDialogComponent_div_2_th_12_Template, 2, 0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, UserDocumentsDialogComponent_div_2_td_13_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](14, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, UserDocumentsDialogComponent_div_2_th_15_Template, 2, 0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, UserDocumentsDialogComponent_div_2_td_16_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](17, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, UserDocumentsDialogComponent_div_2_th_18_Template, 2, 0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, UserDocumentsDialogComponent_div_2_td_19_Template, 3, 3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](20, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, UserDocumentsDialogComponent_div_2_th_21_Template, 2, 0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, UserDocumentsDialogComponent_div_2_td_22_Template, 9, 0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, UserDocumentsDialogComponent_div_2_tr_23_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, UserDocumentsDialogComponent_div_2_tr_24_Template, 1, 0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, UserDocumentsDialogComponent_div_2_tr_25_Template, 3, 1, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "mat-paginator", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngxPermissionsOnly", "canAssignPremiumFeaturesToAppUsers");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c0));
} }
class UserDocumentsDialogComponent {
    constructor(matDialog, translateService, mobileUserService, dialog, http) {
        this.matDialog = matDialog;
        this.translateService = translateService;
        this.mobileUserService = mobileUserService;
        this.dialog = dialog;
        this.http = http;
        this.displayedColumns = ['title', 'notes', 'date', 'action'];
    }
    ngOnInit() {
        //.subscribe((u) => (this.userDetails = u));
        this.getAllNotes();
    }
    openDialog() {
        this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DialogComponent, {
            width: "50%",
            data: { userId: this.userId },
            direction: this.translateService.dir,
        }).afterClosed().subscribe(val => {
            if (val === 'save') {
                this.getAllNotes();
            }
        });
    }
    getAllNotes() {
        this.mobileUserService.getUserNotes(this.userId).subscribe({
            next: (res) => {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(res.data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            },
            error: (err) => {
                alert("Error while fetching the Records");
            },
        });
    }
    getUserDocuments() {
        this.mobileUserService.getFiles(this.userId).subscribe({
            next: (res) => {
                console.log(res.data);
            },
            error: (err) => {
                alert("Error while fetching the Records");
            },
        });
    }
    editNote(row) {
        this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DialogComponent, {
            width: '50%',
            data: row
        }).afterClosed().subscribe(val => {
            if (val === 'update') {
                this.getAllNotes();
            }
        });
    }
    uploadDocument(row) {
        this.dialog.open(_upload_document_dialog_upload_document_dialog_component__WEBPACK_IMPORTED_MODULE_1__.UploadDocumentDialogComponent, {
            width: '50%',
            data: row
        }).afterClosed().subscribe(val => {
            this.getAllNotes();
        });
    }
    userDocuments() {
        this.dialog.open(UserDocumentsDialogComponent, {
            width: '50%',
        }).afterClosed().subscribe(val => { });
    }
    deleteNote(id) {
        this.mobileUserService.deleteNote(id).subscribe({
            next: (res) => {
                alert("Note Deleted successfully");
                this.getAllNotes();
            },
            error: () => {
                alert("Error while Deleted the note");
            }
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
UserDocumentsDialogComponent.ɵfac = function UserDocumentsDialogComponent_Factory(t) { return new (t || UserDocumentsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_shared_services_translate_service__WEBPACK_IMPORTED_MODULE_2__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_mobile_users_mobile_user_service__WEBPACK_IMPORTED_MODULE_3__.MobileUserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient)); };
UserDocumentsDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UserDocumentsDialogComponent, selectors: [["app-user-documents-dialog"]], viewQuery: function UserDocumentsDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 3, vars: 1, consts: [[1, "w-100", "d-flex", "flex-fill"], [1, "user-meals"], ["class", "section", 4, "ngxPermissionsOnly"], [1, "section"], ["style", "margin-top: 30px;margin-right: 30px;", "class", "d-flex justify-content-end", 4, "ngxPermissionsOnly"], [2, "margin-right", "30px"], ["appearance", "standard"], ["matInput", "", "placeholder", "Ex. Mia", 1, "m-1", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "notes"], ["matColumnDef", "date"], ["matColumnDef", "action"], ["style", "background-color: #1A1A27;", "mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], [1, "d-flex", "justify-content-end", 2, "margin-top", "30px", "margin-right", "30px"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "text-white"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-button", "", "color", "warn", 3, "click"], ["mat-icon-button", "", "color", "accent", 3, "click"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", "", 2, "background-color", "#1A1A27"], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function UserDocumentsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, UserDocumentsDialogComponent_div_2_Template, 27, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngxPermissionsOnly", "canViewAppUserContactInfo");
    } }, directives: [ngx_permissions__WEBPACK_IMPORTED_MODULE_10__.NgxPermissionsDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZG9jdW1lbnRzLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoidXNlci1kb2N1bWVudHMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICBjb2xvcjogd2hpdGVcclxufSJdfQ== */"] });


/***/ }),

/***/ 35622:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/notifications/notifications/notifications-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsRoutingModule": () => (/* binding */ NotificationsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/shared/guards/permission-guard.service */ 97226);
/* harmony import */ var _send_notification_send_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../send-notification/send-notification.component */ 64327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: 'send-notification',
        component: _send_notification_send_notification_component__WEBPACK_IMPORTED_MODULE_1__.SendNotificationComponent,
        canActivate: [src_app_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_0__.PermissionGuard],
        data: {
            permission: 'canCreateMeals',
        },
    }
];
class NotificationsRoutingModule {
}
NotificationsRoutingModule.ɵfac = function NotificationsRoutingModule_Factory(t) { return new (t || NotificationsRoutingModule)(); };
NotificationsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NotificationsRoutingModule });
NotificationsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotificationsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 95440:
/*!***************************************************************************!*\
  !*** ./src/app/pages/notifications/notifications/notifications.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsModule": () => (/* binding */ NotificationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications-routing.module */ 35622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class NotificationsModule {
}
NotificationsModule.ɵfac = function NotificationsModule_Factory(t) { return new (t || NotificationsModule)(); };
NotificationsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NotificationsModule });
NotificationsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotificationsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsRoutingModule] }); })();


/***/ }),

/***/ 64327:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/notifications/send-notification/send-notification.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendNotificationComponent": () => (/* binding */ SendNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/notifications/services/notifications.service */ 4202);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);




class SendNotificationComponent {
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
        this.tokenAll = '/topics/All';
        this.titleAll = '';
        this.bodyAll = '';
        this.tokenSubscribed = '/topics/Subscribed';
        this.titleSubscribed = '';
        this.bodySubscribed = '';
        this.tokenUnSubscribed = '/topics/unSubscribed';
        this.titleUnSubscribed = '';
        this.bodyUnSubscribed = '';
        this.users = [];
        this.selectedUsers = [];
        this.dropdownSettings = {};
    }
    ngOnInit() {
        this.fetchUserData();
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'deviceToken',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'Unselect All',
            limitSelection: 1,
            itemsShowLimit: 1,
            allowSearchFilter: true
        };
    }
    sendNotificationToAllUsers() {
        const tokenAll = this.tokenAll;
        const titleAll = this.titleAll;
        const bodyAll = this.bodyAll;
        if (this.tokenAll, this.titleAll, this.bodyAll) {
            this.notificationsService.sendNotificationToAllUsers(tokenAll, titleAll, bodyAll).subscribe((response) => {
                alert('Notification sent successfully');
                console.log('Notification sent successfully:', response);
            }, (error) => {
                alert('Error sending notification');
                console.error('Error sending notification:', error);
            });
        }
        else {
            alert("Title and notification content are required");
        }
    }
    sendNotificationToSubscribedUsers() {
        const tokenSubscribed = this.tokenSubscribed; // Replace with the FCM token of the device
        const titleSubscribed = this.titleSubscribed;
        const bodySubscribed = this.bodySubscribed;
        if (this.tokenSubscribed, this.titleSubscribed, this.bodySubscribed) {
            this.notificationsService.sendNotificationToSubscribedUsers(tokenSubscribed, titleSubscribed, bodySubscribed).subscribe((response) => {
                alert('Notification sent successfully');
                console.log('Notification sent successfully:', response);
            }, (error) => {
                alert('Error sending notification');
                console.error('Error sending notification:', error);
            });
        }
        else {
            alert("Title and notification content are required");
        }
    }
    sendNotificationToUnSubscribedUsers() {
        const tokenUnSubscribed = this.tokenUnSubscribed; // Replace with the FCM token of the device
        const titleUnSubscribed = this.titleUnSubscribed;
        const bodyUnSubscribed = this.bodyUnSubscribed;
        if (this.tokenUnSubscribed, this.titleUnSubscribed, this.bodyUnSubscribed) {
            this.notificationsService.sendNotificationToUnSubscribedUsers(tokenUnSubscribed, titleUnSubscribed, bodyUnSubscribed).subscribe((response) => {
                alert('Notification sent successfully');
                console.log('Notification sent successfully:', response);
            }, (error) => {
                alert('Error sending notification');
                console.error('Error sending notification:', error);
            });
        }
        else {
            alert("Title and notification content are required");
        }
    }
    // sendNotificationToSpecificUser() {
    //   const tokenSpecificUser = this.tokenSpecificUser; // Replace with the FCM token of the device
    //   const titleSpecificUser = this.titleSpecificUser;
    //   const bodySpecificUser = this.bodySpecificUser;
    //   this.notificationsService.sendNotificationToSpecificUser(tokenSpecificUser, titleSpecificUser, bodySpecificUser).subscribe((response) => {
    //     alert('Notification sent successfully');
    //     console.log('Notification sent successfully:', response);
    //   },
    //     (error) => {
    //       alert('Error sending notification');
    //       console.error('Error sending notification:', error);
    //     });
    // }
    fetchUserData() {
        this.notificationsService.getUserData().subscribe(data => {
            this.users = data.data.filter(user => user.deviceToken && user.name != null && user.deviceToken != "string");
            console.log(this.users);
        }, error => {
            console.error('Error fetching user data', error);
        });
    }
    send() {
        const tokens = this.selectedUsers.map(user => user.deviceToken);
        if (this.title, this.body) {
            console.log(tokens);
            if (tokens.length === 0) {
                console.error('No device tokens available');
                return;
            }
            this.notificationsService.sendNotifications(tokens, this.title, this.body)
                .subscribe(response => {
                console.log('Notifications sent', response);
            }, error => {
                console.error('Error sending notifications', error);
            });
        }
        else {
            alert("Title, notification content and User are required");
        }
    }
}
SendNotificationComponent.ɵfac = function SendNotificationComponent_Factory(t) { return new (t || SendNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_0__.NotificationsService)); };
SendNotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SendNotificationComponent, selectors: [["app-send-notification"]], decls: 85, vars: 12, consts: [[1, "p-3", "bg-white", "mat-elevation-z8"], [1, "d-flex", "justify-content-start"], [1, "flex-grow-1"], [1, "card"], [1, "card-header"], [1, "mb-3"], [1, "card-body"], [1, "d-flex", "align-items-start"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills", "me-3"], ["id", "v-pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-home", "type", "button", "role", "tab", "aria-controls", "v-pills-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "v-pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-profile", "type", "button", "role", "tab", "aria-controls", "v-pills-profile", "aria-selected", "false", 1, "nav-link"], ["id", "v-pills-messages-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-messages", "type", "button", "role", "tab", "aria-controls", "v-pills-messages", "aria-selected", "false", 1, "nav-link"], ["id", "v-pills-settings-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-settings", "type", "button", "role", "tab", "aria-controls", "v-pills-settings", "aria-selected", "false", 1, "nav-link"], ["id", "v-pills-tabContent", 1, "tab-content"], ["id", "v-pills-home", "role", "tabpanel", "aria-labelledby", "v-pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "container"], [3, "ngSubmit"], ["form", "ngForm"], [1, "fmb-3", "mt-3"], ["for", "title"], ["type", "text", "id", "titleAll", "placeholder", "Enter title", "name", "titleAll", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "mb-3", "mt-3"], ["for", "exampleFormControlTextarea1", 1, "form-label"], ["id", "exampleFormControlTextarea1", "rows", "3", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "button-1"], ["id", "v-pills-profile", "role", "tabpanel", "aria-labelledby", "v-pills-profile-tab", 1, "tab-pane", "fade"], ["type", "text", "id", "titleSubscribed", "placeholder", "Enter title", "name", "titleSubscribed", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "v-pills-messages", "role", "tabpanel", "aria-labelledby", "v-pills-messages-tab", 1, "tab-pane", "fade"], ["type", "text", "id", "titleUnSubscribed", "placeholder", "Enter title", "name", "titleUnSubscribed", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "v-pills-settings", "role", "tabpanel", "aria-labelledby", "v-pills-settings-tab", 1, "tab-pane", "fade"], ["for", "title", 1, "form-label"], ["id", "title", "placeholder", "Enter notification title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "body", 1, "form-label"], ["id", "body", "placeholder", "Enter notification body", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "users", 1, "form-label"], ["required", "true", 1, "form-control", 3, "placeholder", "data", "ngModel", "settings", "ngModelChange"], [1, "button-1", 3, "click"]], template: function SendNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Send Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "All Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Subscribed Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Unsubscribed Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Specific User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Send Notification to All Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "form", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SendNotificationComponent_Template_form_ngSubmit_23_listener() { return ctx.sendNotificationToAllUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18)(26, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SendNotificationComponent_Template_input_ngModelChange_28_listener($event) { return ctx.titleAll = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21)(30, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Notification content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SendNotificationComponent_Template_textarea_ngModelChange_32_listener($event) { return ctx.bodyAll = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 25)(36, "div", 15)(37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Send Notification to Subscribed Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "form", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SendNotificationComponent_Template_form_ngSubmit_39_listener() { return ctx.sendNotificationToSubscribedUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 21)(42, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SendNotificationComponent_Template_input_ngModelChange_44_listener($event) { return ctx.titleSubscribed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 5)(46, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Notification content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SendNotificationComponent_Template_textarea_ngModelChange_48_listener($event) { return ctx.bodySubscribed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 27)(52, "div", 15)(53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Send Notification to Unsubscribed Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "form", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SendNotificationComponent_Template_form_ngSubmit_55_listener() { return ctx.sendNotificationToUnSubscribedUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 21)(58, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SendNotificationComponent_Template_input_ngModelChange_60_listener($event) { return ctx.titleUnSubscribed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 5)(62, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Notification content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SendNotificationComponent_Template_textarea_ngModelChange_64_listener($event) { return ctx.bodyUnSubscribed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 29)(68, "div", 15)(69, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Send Notification to Specific User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 5)(72, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SendNotificationComponent_Template_input_ngModelChange_74_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 5)(76, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Body:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SendNotificationComponent_Template_input_ngModelChange_78_listener($event) { return ctx.body = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 5)(80, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "User Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "ng-multiselect-dropdown", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SendNotificationComponent_Template_ng_multiselect_dropdown_ngModelChange_82_listener($event) { return ctx.selectedUsers = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SendNotificationComponent_Template_button_click_83_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.titleAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.bodyAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.titleSubscribed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.bodySubscribed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.titleUnSubscribed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.bodyUnSubscribed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", "Select User")("data", ctx.users)("ngModel", ctx.selectedUsers)("settings", ctx.dropdownSettings);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_3__.MultiSelectComponent], styles: [".button-1[_ngcontent-%COMP%] {\n  background-color: #ff725a;\n  border: none;\n  color: white;\n  padding: 10px 20px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n.button-1[_ngcontent-%COMP%]:hover {\n  background-color: #ff725a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmQtbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJzZW5kLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3MjVhO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLTE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzI1YTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 97997:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/shared/app-request-loader/app-request-loader.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRequestLoaderComponent": () => (/* binding */ AppRequestLoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared */ 8268);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 33935);






function AppRequestLoaderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-progress-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "SHARED.LOADING"), "...");
  }
}

class AppRequestLoaderComponent {
  constructor(requestLoadingService) {
    this.requestLoadingService = requestLoadingService;
  }

}

AppRequestLoaderComponent.ɵfac = function AppRequestLoaderComponent_Factory(t) {
  return new (t || AppRequestLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_shared__WEBPACK_IMPORTED_MODULE_0__.RequestLoaderService));
};

AppRequestLoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppRequestLoaderComponent,
  selectors: [["app-app-request-loader"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "w-100", "loading-container"], [1, "loading"], ["mode", "indeterminate"]],
  template: function AppRequestLoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppRequestLoaderComponent_ng_container_0_Template, 7, 3, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.requestLoadingService.requestLoading$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__.MatProgressBar],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
  styles: [".loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n  background-color: transparent;\n  position: fixed;\n  z-index: 999;\n  top: 0;\n}\n\n.loading[_ngcontent-%COMP%] {\n  padding: 14px 3rem;\n  color: #3d3a3a;\n  background-color: white;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  box-shadow: #807777 0 0 4px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1yZXF1ZXN0LWxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7QUFDRiIsImZpbGUiOiJhcHAtcmVxdWVzdC1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4ubG9hZGluZyB7XHJcbiAgcGFkZGluZzogMTRweCAzcmVtO1xyXG4gIGNvbG9yOiAjM2QzYTNhO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6ICM4MDc3NzcgMCAwIDRweCAwO1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 81430:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/shared/attachment-button/attachment-button.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachmentButtonComponent": () => (/* binding */ AttachmentButtonComponent)
/* harmony export */ });
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared */ 8268);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _media_players_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media-players/image-preview/image-preview.component */ 64253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);







function AttachmentButtonComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r1.label) !== null && tmp_0_0 !== undefined ? tmp_0_0 : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "ATTACHMENTS.CHANGE_IMAGE"), " ");
} }
function AttachmentButtonComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.media.file.name, " ");
} }
function AttachmentButtonComponent_i_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AttachmentButtonComponent_i_7_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r6.openImage(ctx_r6.media); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AttachmentButtonComponent_ng_template_8_Template(rf, ctx) { }
class AttachmentButtonComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() { }
    prepareImage(files) {
        const image = files.item(0);
        const fileReader = new FileReader();
        fileReader.readAsDataURL(image);
        const media = new _core_shared__WEBPACK_IMPORTED_MODULE_0__.Media({
            file: image,
            mediaType: _core_shared__WEBPACK_IMPORTED_MODULE_0__.MediaType.Image,
            isNew: true,
        });
        this.media = media;
        fileReader.onload = (e) => {
            media.url = fileReader.result;
            this.onChange(media);
        };
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(obj) {
        this.media = obj;
    }
    validate(control) {
        const media = control.value;
        if ((media === null || media === void 0 ? void 0 : media.url) || (media === null || media === void 0 ? void 0 : media.file)) {
            return null;
        }
        return {
            invalid: true,
        };
    }
    openImage(media) {
        this.dialog.open(_media_players_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_1__.ImagePreviewComponent, {
            data: [media],
            width: 'calc(100vw - 0.001px)',
            height: '100vh',
            maxWidth: '100vw',
            panelClass: 'bg-trasparent',
        });
    }
}
AttachmentButtonComponent.ɵfac = function AttachmentButtonComponent_Factory(t) { return new (t || AttachmentButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
AttachmentButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AttachmentButtonComponent, selectors: [["app-attachment-button"]], inputs: { label: "label" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
                useExisting: AttachmentButtonComponent,
                multi: true,
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALIDATORS,
                useExisting: AttachmentButtonComponent,
                multi: true,
            },
        ])], decls: 10, vars: 3, consts: [[1, "w-100", "d-flex"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], ["uploadInput", ""], [1, "upload-trigger", "d-flex", "justify-content-start", "align-items-center", "w-100"], [1, "d-flex", "p-1", "align-items-center", "justify-content-between", "h-100", "w-100", 2, "cursor", "pointer", 3, "click"], [4, "ngIf"], ["class", "p-1", 4, "ngIf"], ["class", "fa-solid fa-eye", 3, "click", 4, "ngIf"], ["imageAdded", ""], [1, "p-1"], [1, "fa-solid", "fa-eye", 3, "click"]], template: function AttachmentButtonComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AttachmentButtonComponent_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return ctx.prepareImage(_r0.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AttachmentButtonComponent_Template_div_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); _r0.click(); return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AttachmentButtonComponent_span_5_Template, 3, 3, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AttachmentButtonComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AttachmentButtonComponent_i_7_Template, 1, 0, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AttachmentButtonComponent_ng_template_8_Template, 0, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.media == null ? null : ctx.media.file));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.media == null ? null : ctx.media.file);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.media || (ctx.media == null ? null : ctx.media.file));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: [".upload-trigger[_ngcontent-%COMP%] {\n  background: #215121;\n  border: 1px solid rgba(86, 103, 137, 0.26);\n  border-radius: 8px;\n  color: white;\n  height: 52px;\n  margin-bottom: 27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGFjaG1lbnQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImF0dGFjaG1lbnQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZC10cmlnZ2VyIHtcclxuICBiYWNrZ3JvdW5kOiAjMjE1MTIxO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoODYsIDEwMywgMTM3LCAwLjI2KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogNTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAyN3B4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 39503:
/*!*****************************************************************!*\
  !*** ./src/app/pages/shared/attachment/attachment.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachmentComponent": () => (/* binding */ AttachmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared */ 8268);
/* harmony import */ var _media_players_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media-players/video-player/video-player.component */ 9429);
/* harmony import */ var _media_players_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media-players/image-preview/image-preview.component */ 64253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _core_shared_directives_extenal_video_validator_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/directives/extenal-video-validator.directive */ 48057);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 33935);


















function AttachmentComponent_div_6_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AttachmentComponent_div_6_div_2_div_1_div_3_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const media_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      $event.preventDefault();
      return ctx_r10.openImage(media_r5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const media_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("alt", media_r5.file == null ? null : media_r5.file.name)("src", media_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

function AttachmentComponent_div_6_div_2_div_1_div_4_div_1_mat_progress_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-spinner", 21);
  }

  if (rf & 2) {
    const upload_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 80)("value", upload_r15.progress);
  }
}

function AttachmentComponent_div_6_div_2_div_1_div_4_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 22);
  }
}

function AttachmentComponent_div_6_div_2_div_1_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AttachmentComponent_div_6_div_2_div_1_div_4_div_1_mat_progress_spinner_1_Template, 1, 2, "mat-progress-spinner", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AttachmentComponent_div_6_div_2_div_1_div_4_div_1_ng_template_2_Template, 1, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const upload_r15 = ctx.$implicit;

    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);

    const media_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", media_r5.file && upload_r15.inProgress)("ngIfElse", _r17);
  }
}

function AttachmentComponent_div_6_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AttachmentComponent_div_6_div_2_div_1_div_4_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const media_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      $event.preventDefault();
      return ctx_r21.playVideo(media_r5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AttachmentComponent_div_6_div_2_div_1_div_4_div_1_Template, 4, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r8.uploadProgress$));
  }
}

function AttachmentComponent_div_6_div_2_div_1_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const media_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", media_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

function AttachmentComponent_div_6_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AttachmentComponent_div_6_div_2_div_1_Template_mat_icon_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const media_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      $event.preventDefault();
      return ctx_r25.removeMedia(media_r5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AttachmentComponent_div_6_div_2_div_1_div_3_Template, 2, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AttachmentComponent_div_6_div_2_div_1_div_4_Template, 3, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AttachmentComponent_div_6_div_2_div_1_a_5_Template, 2, 1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const media_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx_r6.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", media_r5.mediaType == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", media_r5.mediaType == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", media_r5.mediaType != 0 && media_r5.mediaType != 1);
  }
}

function AttachmentComponent_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AttachmentComponent_div_6_div_2_div_1_Template, 6, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const media_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !media_r5.removed);
  }
}

function AttachmentComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AttachmentComponent_div_6_div_2_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.media);
  }
}

function AttachmentComponent_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "ATTACHMENTS.NO_MEDIA"));
  }
}

function AttachmentComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AttachmentComponent_ng_template_7_div_0_Template, 4, 3, "div", 18);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.readOnly);
  }
}

function AttachmentComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AttachmentComponent_div_9_div_1_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34);

      const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r33.prepareImage(_r32.files);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AttachmentComponent_div_9_div_1_Template_button_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34);

      const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      $event.preventDefault();
      ctx_r35.ngControl.control.markAllAsTouched();
      return _r32.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("accept", ctx_r30.imagesType)("multiple", ctx_r30.multi);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("border", ctx_r30.ngControl.control.touched && ctx_r30.ngControl.control.invalid ? "3px red solid" : "");
  }
}

function AttachmentComponent_div_9_div_2_ng_template_11_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "VALIDATION_ERRORS.INVALID_VALUE"));
  }
}

function AttachmentComponent_div_9_div_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AttachmentComponent_div_9_div_2_ng_template_11_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 41)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-tab-group", 42)(9, "mat-tab", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 44)(12, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AttachmentComponent_div_9_div_2_ng_template_11_Template_button_click_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

      const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);

      $event.preventDefault();
      return _r36.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-tab", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 44)(18, "mat-form-field", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AttachmentComponent_div_9_div_2_ng_template_11_Template_mat_form_field_click_18_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 48, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, AttachmentComponent_div_9_div_2_ng_template_11_mat_error_24_Template, 3, 3, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AttachmentComponent_div_9_div_2_ng_template_11_Template_button_click_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r44);

      const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](23);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

      const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);

      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      $event.preventDefault();
      ctx_r46.addExternalMedia(_r40.value);
      return _r37.closeMenu();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 10, "ATTACHMENTS.SELECT_VIDEO_HEADER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 12, "ATTACHMENTS.SELECT_VIDEO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 14, "ATTACHMENTS.VIDEO_UPLOAD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 16, "ATTACHMENTS.VIDEO_UPLOAD_TEXT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 18, "ATTACHMENTS.VIDEO_LINK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 20, "ATTACHMENTS.VIDEO_LINK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r39.externalLinkControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r39.externalLinkControl.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r39.externalLinkControl.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 22, "SHARED.ADD"), " ");
  }
}

function AttachmentComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32)(1, "div")(2, "input", 27, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AttachmentComponent_div_9_div_2_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);

      const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);

      const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);

      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      ctx_r47.prepareVideo(_r36.files);
      return !_r36.files || _r37.closeMenu();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div")(5, "button", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AttachmentComponent_div_9_div_2_Template_button_click_5_listener($event) {
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-menu", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closed", function AttachmentComponent_div_9_div_2_Template_mat_menu_closed_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);

      const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);

      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      ctx_r50.resetExternalForm();
      return _r36.files = null;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AttachmentComponent_div_9_div_2_ng_template_11_Template, 28, 24, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);

    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("accept", ctx_r31.videoType)("multiple", ctx_r31.multi);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r38);
  }
}

function AttachmentComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AttachmentComponent_div_9_div_1_Template, 6, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AttachmentComponent_div_9_div_2_Template, 12, 3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r3.supportType == "image" || ctx_r3.supportType == "all") && ctx_r3.mediaCount < ctx_r3.maxLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.supportType != "image" && ctx_r3.mediaCount < ctx_r3.maxLength);
  }
}

class AttachmentComponent {
  constructor(ngControl, dialog) {
    this.ngControl = ngControl;
    this.dialog = dialog;
    this.media = [];
    this.uploadProgress$ = _core_shared__WEBPACK_IMPORTED_MODULE_0__.HttpUtilsService.uploadProgress$;
    this.mediaCount = 0;
    this.imagesType = "'image/*'";
    this.videoType = 'video/*';
    this.multi = false;
    this.maxLength = Number.MAX_SAFE_INTEGER;
    this.minLength = 0;
    this.readOnly = false;
    this.externalLinkControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);

    if (ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  get flags() {
    return this._flags;
  }

  set flags(value) {
    if (!value) {
      return;
    }

    if (Array.isArray(value)) {
      this._flags = value;
      return;
    }

    this._flags = [value];
  }

  ngOnInit() {
    this.ngControl.control.addValidators(control => {
      const isLessThanMinLenght = this.mediaCount < this.minLength;
      const isBiggerThanMinLenght = this.mediaCount > this.maxLength;

      if (isBiggerThanMinLenght || isLessThanMinLenght) {
        setTimeout(() => {
          this.ngControl.control.setErrors({});
        }, 1);
        return;
      }

      return null;
    });
    this.ngControl.control.updateValueAndValidity();
  }

  prepareImage(files) {
    if (!this.multi && files.length > 1) return;

    for (let i = 0; i < files.length; i++) {
      const image = files.item(i);
      const fileReader = new FileReader();
      fileReader.readAsDataURL(image);
      const media = new _core_shared__WEBPACK_IMPORTED_MODULE_0__.Media({
        file: image,
        mediaType: _core_shared__WEBPACK_IMPORTED_MODULE_0__.MediaType.Image,
        isNew: true,
        flags: this._flags
      });

      fileReader.onload = e => {
        media.url = fileReader.result;
        this.media = [...this.media, media];
        this.mediaCount++;
        this.setValue();
      };
    }
  }

  prepareVideo(files) {
    if (!this.multi && files.length > 1) return;

    for (let i = 0; i < files.length; i++) {
      this.media.push(new _core_shared__WEBPACK_IMPORTED_MODULE_0__.Media({
        file: files.item(i),
        mediaType: _core_shared__WEBPACK_IMPORTED_MODULE_0__.MediaType.Video,
        isNew: true,
        flags: this._flags
      }));
      this.mediaCount++;
      this.setValue();
    }
  }

  addExternalMedia(value) {
    const result = _core_shared__WEBPACK_IMPORTED_MODULE_0__.ExternalMediaValidator.getLinkVideoType(value);
    this.mediaCount++;
    this.media.push(new _core_shared__WEBPACK_IMPORTED_MODULE_0__.Media({
      url: value,
      mediaType: result,
      isNew: true,
      flags: this._flags
    }));
    this.setValue();
    this.resetExternalForm();
  }

  resetExternalForm() {
    this.externalLinkControl.markAsUntouched();
    this.externalLinkControl.setValue(null);
    this.externalLinkControl.markAsPristine();
  }

  removeMedia(media) {
    this.mediaCount--;

    if (media.isNew) {
      this.media = this.media.filter(m => m != media);
    } else {
      media.removed = true;
    }

    this.setValue();
  }

  playVideo(media) {
    if (media.file) {
      return;
    }

    this.dialog.open(_media_players_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_1__.VideoPlayerComponent, {
      data: media,
      width: 'calc(100vw - 0.001px)',
      height: '100vh',
      maxWidth: '100vw',
      panelClass: 'bg-trasparent'
    });
  }

  openImage(media) {
    this.dialog.open(_media_players_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_2__.ImagePreviewComponent, {
      data: [media],
      width: 'calc(100vw - 0.001px)',
      height: '100vh',
      maxWidth: '100vw',
      panelClass: 'bg-trasparent'
    });
  }

  clear() {
    this.ngControl.control.markAsPristine();
    this.ngControl.control.markAsUntouched();
    this.media = [];
  } // Form


  setValue() {
    this.ngControl.control.setValue(this.media);
  }

  writeValue(obj) {
    if (!obj) {
      this.media = [];
      this.mediaCount = 0;
      return;
    }

    if (Array.isArray(obj)) {
      this.media = obj;
      this.mediaCount = obj.filter(m => !m.removed).length;
      return;
    }

    this.media = [obj];
    this.mediaCount = obj.removed ? 0 : 1;
    return;
  }

  onChanged(event) {}

  onTouched() {}

  registerOnChange(fn) {
    this.onChanged = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}

AttachmentComponent.ɵfac = function AttachmentComponent_Factory(t) {
  return new (t || AttachmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
};

AttachmentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AttachmentComponent,
  selectors: [["app-attachment"]],
  inputs: {
    imagesType: "imagesType",
    videoType: "videoType",
    supportType: "supportType",
    required: "required",
    multi: "multi",
    maxLength: "maxLength",
    minLength: "minLength",
    readOnly: "readOnly",
    label: "label",
    flags: "flags"
  },
  decls: 10,
  vars: 6,
  consts: [[1, "w-100"], [1, "card", "overflow-auto"], [1, "card-header"], [1, "card-body", "d-flex", "justify-content-start", "align-items-center", "flex-wrap"], [4, "ngIf", "ngIfElse"], ["noMedia", ""], ["class", "d-flex justify-content-start align-items-center flex-wrap", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-start", "flex-wrap"], [4, "ngFor", "ngForOf"], ["class", "media-container media-preview", 4, "ngIf"], [1, "media-container", "media-preview"], ["type", "button", 1, "media-delete", 3, "hidden", "click"], [3, "click", 4, "ngIf"], ["class", "media-container media-video-preview add-media", 3, "click", 4, "ngIf"], ["class", "extenal-link media-video-preview add-media display-5", "target", "_blank", 3, "href", 4, "ngIf"], [3, "click"], [1, "media-img-preview", 3, "alt", "src"], [1, "media-container", "media-video-preview", "add-media", 3, "click"], [4, "ngIf"], ["color", "primary", "mode", "determinate", 3, "diameter", "value", 4, "ngIf", "ngIfElse"], ["videoIcon", ""], ["color", "primary", "mode", "determinate", 3, "diameter", "value"], [1, "fa-brands", "fa-youtube", "display-5"], ["target", "_blank", 1, "extenal-link", "media-video-preview", "add-media", "display-5", 3, "href"], [1, "fa-solid", "fa-up-right-from-square"], [1, "d-flex", "justify-content-start", "align-items-center", "flex-wrap"], ["class", "d-flex justify-content-start align-items-center", 4, "ngIf"], ["hidden", "", "type", "file", 3, "accept", "multiple", "change"], ["image", ""], [1, "btn", "media-container", "add-media", 3, "click"], [1, "display-5"], [1, "fa-solid", "fa-file-image"], [1, "d-flex", "justify-content-start", "align-items-center"], ["video", ""], [1, "btn", "media-container", "add-media", 3, "matMenuTriggerFor", "click"], ["menuTrigger", "matMenuTrigger"], [1, "fa-solid", "fa-video-camera"], [3, "closed"], ["menu2", "matMenu"], ["matMenuContent", ""], [1, "video-selector-container", 3, "click"], [1, "video-selector-header"], [1, ""], [1, "margin-start-1", 3, "label"], [1, "video-upload-toggler"], ["color", "primary", "mat-flat-button", "", 3, "click"], [3, "label"], ["appearance", "fill", 1, "w-75", "margin-end-2", 3, "click"], ["matInput", "", "type", "text", "externalVideoValidator", "", 3, "formControl"], ["input", ""], ["color", "primary", "mat-flat-button", "", 1, "mb-3", 3, "disabled", "click"]],
  template: function AttachmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AttachmentComponent_div_6_Template, 3, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, AttachmentComponent_ng_template_7_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AttachmentComponent_div_9_Template, 3, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, ctx.label), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.media && ctx.media.length)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.readOnly);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuContent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTab, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _core_shared_directives_extenal_video_validator_directive__WEBPACK_IMPORTED_MODULE_3__.VideoValidatorDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".media-container[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 10px;\n  margin: 0.5rem;\n  cursor: pointer;\n}\n\n.media-preview[_ngcontent-%COMP%] {\n  position: relative;\n  margin-inline-end: 1rem;\n  overflow: hidden;\n}\n\n.media-preview[_ngcontent-%COMP%]:hover   .media-delete[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.media-preview[dir=rtl][_ngcontent-%COMP%]   .media-delete[_ngcontent-%COMP%] {\n  margin-inline-end: 80%;\n}\n\n.media-preview[dir=ltr][_ngcontent-%COMP%]   .media-delete[_ngcontent-%COMP%] {\n  margin-inline-start: 80%;\n}\n\n.media-img-preview[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  object-fit: cover;\n}\n\n.media-video-preview[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n}\n\n.media-delete[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  opacity: 0;\n  color: red;\n  transition: opacity 0.3s linear;\n}\n\n.add-media[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n\n.extenal-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.add-external-media-container[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n\n.video-selector-container[_ngcontent-%COMP%] {\n  width: 470px;\n  min-height: 180px;\n}\n\n.video-selector-header[_ngcontent-%COMP%] {\n  padding: 1rem 1rem 0;\n}\n\n.video-upload-toggler[_ngcontent-%COMP%] {\n  min-height: 112px;\n  padding: 1rem;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  background-color: #f8f9fa;\n}\n\n .mat-menu-content {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n .mat-menu-panel {\n  max-width: none !important;\n  min-height: 0 !important;\n  max-height: none !important;\n  overflow: hidden;\n}\n\n .mat-tab-label,  .mat-tab-label-active {\n  min-width: 0 !important;\n  width: 100px;\n  padding: 3px !important;\n  margin: 3px !important;\n}\n\n.mat-flat-button[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGFjaG1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNJO0VBQ0UsVUFBQTtBQUNOOztBQUdJO0VBQ0Usc0JBQUE7QUFETjs7QUFNSTtFQUNFLHdCQUFBO0FBSk47O0FBU0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7QUFORjs7QUFTQTtFQUNFLHlCQUFBO0FBTkY7O0FBU0E7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxZQUFBO0FBTkY7O0FBU0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFORjs7QUFTQTtFQUNFLG9CQUFBO0FBTkY7O0FBUUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBTEY7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0FBSkY7O0FBTUE7RUFDRSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BOztFQUVFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7QUFIRiIsImZpbGUiOiJhdHRhY2htZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lZGlhLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDAuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tZWRpYS1wcmV2aWV3IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDFyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAmOmhvdmVyIHtcclxuICAgIC5tZWRpYS1kZWxldGUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICAmW2Rpcj1cInJ0bFwiXSB7XHJcbiAgICAubWVkaWEtZGVsZXRlIHtcclxuICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDgwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZbZGlyPVwibHRyXCJdIHtcclxuICAgIC5tZWRpYS1kZWxldGUge1xyXG4gICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiA4MCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWVkaWEtaW1nLXByZXZpZXcge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4ubWVkaWEtdmlkZW8tcHJldmlldyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm1lZGlhLWRlbGV0ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGxpbmVhcjtcclxufVxyXG5cclxuLmFkZC1tZWRpYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLmV4dGVuYWwtbGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZC1leHRlcm5hbC1tZWRpYS1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuLnZpZGVvLXNlbGVjdG9yLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDQ3MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG59XHJcblxyXG4udmlkZW8tc2VsZWN0b3ItaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxcmVtIDFyZW0gMDtcclxufVxyXG4udmlkZW8tdXBsb2FkLXRvZ2dsZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDExMnB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ5LCAyNTApO1xyXG59XHJcbjo6bmctZGVlcC5tYXQtbWVudS1jb250ZW50IHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwLm1hdC1tZW51LXBhbmVsIHtcclxuICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgbWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtdGFiLWxhYmVsLFxyXG46Om5nLWRlZXAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBwYWRkaW5nOiAzcHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWZsYXQtYnV0dG9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 87448:
/*!*****************************************************************!*\
  !*** ./src/app/pages/shared/attachment/pipes/with-flag.pipe.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithFlagPipe": () => (/* binding */ WithFlagPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class WithFlagPipe {
    transform(value, flag) {
        var _a;
        if (!value)
            return null;
        return (_a = value.find(m => m.flags && m.flags.some(f => f == flag))) === null || _a === void 0 ? void 0 : _a.url;
    }
}
WithFlagPipe.ɵfac = function WithFlagPipe_Factory(t) { return new (t || WithFlagPipe)(); };
WithFlagPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "withFlag", type: WithFlagPipe, pure: true });


/***/ }),

/***/ 98572:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/shared/day-of-week-tabs/day-of-week-tabs.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayOfWeekTabsComponent": () => (/* binding */ DayOfWeekTabsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_shared_models_day_of_week__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared/models/day-of-week */ 37086);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 33935);





function DayOfWeekTabsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DayOfWeekTabsComponent_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const day_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r2._selectedDay = ctx_r2.dayOfWeek[day_r1]; return ctx_r2.selectedDayChange.next(ctx_r2.dayOfWeek[day_r1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.dayOfWeek[day_r1] == ctx_r0._selectedDay ? "selected-day" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "SHARED.DAYS_OF_WEEK." + day_r1)), " ");
} }
class DayOfWeekTabsComponent {
    constructor() {
        this.selectedDayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.dayOfWeek = _core_shared_models_day_of_week__WEBPACK_IMPORTED_MODULE_0__.DayOfWeek;
        this.dayOfWeekKeys = _core_shared_models_day_of_week__WEBPACK_IMPORTED_MODULE_0__.DayOfWeekKeys;
    }
    set selectedDay(value) {
        this._selectedDay = value;
    }
    ngOnInit() { }
}
DayOfWeekTabsComponent.ɵfac = function DayOfWeekTabsComponent_Factory(t) { return new (t || DayOfWeekTabsComponent)(); };
DayOfWeekTabsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DayOfWeekTabsComponent, selectors: [["app-day-of-week-tabs"]], inputs: { selectedDay: "selectedDay" }, outputs: { selectedDayChange: "selectedDayChange" }, decls: 2, vars: 1, consts: [[1, "w-100", "d-flex", "justify-content-between", "align-content-center"], ["class", "day", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "day", 3, "ngClass", "click"]], template: function DayOfWeekTabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DayOfWeekTabsComponent_div_1_Template, 4, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dayOfWeekKeys);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe], styles: [".day[_ngcontent-%COMP%] {\n  padding: 0.5rem 3%;\n  margin: 0 5px;\n  cursor: pointer;\n  border: 1px solid transparent;\n}\n\n.selected-day[_ngcontent-%COMP%] {\n  border: 1px solid #215121;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRheS1vZi13ZWVrLXRhYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJkYXktb2Ytd2Vlay10YWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRheSB7XHJcbiAgcGFkZGluZzogMC41cmVtIDMlO1xyXG4gIG1hcmdpbjowIDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1kYXkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTUxMjE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 55641:
/*!*************************************************************************!*\
  !*** ./src/app/pages/shared/details-header/details-header.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsHeaderComponent": () => (/* binding */ DetailsHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DetailsHeaderComponent {
    constructor() { }
    ngOnInit() { }
}
DetailsHeaderComponent.ɵfac = function DetailsHeaderComponent_Factory(t) { return new (t || DetailsHeaderComponent)(); };
DetailsHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsHeaderComponent, selectors: [["app-details-header"]], inputs: { headerTitle: "headerTitle" }, decls: 4, vars: 1, consts: [[1, "py-3", "w-100", "d-flex", "justify-content-between"], [1, "list-header"], [1, "nav-header__text"]], template: function DetailsHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerTitle);
    } }, styles: [".list-header[_ngcontent-%COMP%] {\n  min-height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.nav-header__text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 500;\n  margin-inline-start: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUVBLHlCQUFBO0FBQUYiLCJmaWxlIjoiZGV0YWlscy1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1oZWFkZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2LWhlYWRlcl9fdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAvL2NvbG9yOiAjMzY5OUZGO1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDFyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 13468:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/shared/directives/profile-image/profile-image.directive.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileImageDirective": () => (/* binding */ ProfileImageDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ProfileImageDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.widthUnit = 'px';
        this.imgElement = this.elementRef.nativeElement;
    }
    ngOnChanges(changes) {
        let src = this.imageUrl;
        if (!this.imageUrl) {
            src = '../../../../../assets/media/no-profile-image.png';
        }
        this.elementRef.nativeElement.src = src;
        if (this.circularWidth) {
            this.imgElement.style.width = this.circularWidth + this.widthUnit;
            this.imgElement.style.height = this.circularWidth + this.widthUnit;
            this.imgElement.style.borderRadius =
                this.circularWidth / 2 + this.widthUnit;
        }
    }
}
ProfileImageDirective.ɵfac = function ProfileImageDirective_Factory(t) { return new (t || ProfileImageDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
ProfileImageDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ProfileImageDirective, selectors: [["img", "appProfileImage", ""]], inputs: { imageUrl: "imageUrl", circularWidth: "circularWidth", widthUnit: "widthUnit" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 82297:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/shared/directives/validators/required-validators.directive.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequiredValidatorsDirective": () => (/* binding */ RequiredValidatorsDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);


class RequiredValidatorsDirective {
    constructor(elementRef, ngContainer, control, _componentResolver) {
        this.elementRef = elementRef;
        this.ngContainer = ngContainer;
        this.control = control;
    }
    ngOnChanges(changes) { }
}
RequiredValidatorsDirective.ɵfac = function RequiredValidatorsDirective_Factory(t) { return new (t || RequiredValidatorsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver)); };
RequiredValidatorsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RequiredValidatorsDirective, selectors: [["", "appRequiredValidators", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 44563:
/*!*********************************************************************!*\
  !*** ./src/app/pages/shared/header-title/header-title.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderTitleComponent": () => (/* binding */ HeaderTitleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_shared_services_nav_header_title_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared/services/nav-header-title.service */ 98798);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 33935);





let HeaderTitleComponent = class HeaderTitleComponent {
    constructor(headerTitleService) {
        this.headerTitleService = headerTitleService;
    }
    ngOnInit() {
        this.headerTitleService.title$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.untilDestroyed)(this)).subscribe(title => this.title = title);
    }
};
HeaderTitleComponent.ɵfac = function HeaderTitleComponent_Factory(t) { return new (t || HeaderTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_shared_services_nav_header_title_service__WEBPACK_IMPORTED_MODULE_0__.NavHeaderTitleService)); };
HeaderTitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderTitleComponent, selectors: [["app-header-title"]], decls: 3, vars: 3, consts: [[1, "nav-header__text"]], template: function HeaderTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx.title));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: [".nav-header__text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: #3699FF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci10aXRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUYiLCJmaWxlIjoiaGVhZGVyLXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uYXYtaGVhZGVyX190ZXh0IHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMzY5OUZGO1xyXG59XHJcbiJdfQ== */"] });
HeaderTitleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.UntilDestroy)()
], HeaderTitleComponent);



/***/ }),

/***/ 28304:
/*!*********************************************************************!*\
  !*** ./src/app/pages/shared/list-filters/list-filters.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListFiltersComponent": () => (/* binding */ ListFiltersComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 33935);



class ListFiltersComponent {
    // @Output() searchTermChange = new EventEmitter<string>();
    constructor() {
        this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    ngOnInit() {
    }
}
ListFiltersComponent.ɵfac = function ListFiltersComponent_Factory(t) { return new (t || ListFiltersComponent)(); };
ListFiltersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListFiltersComponent, selectors: [["app-list-filters"]], inputs: { searchTerm: "searchTerm" }, decls: 6, vars: 3, consts: [[1, "d-flex", "justify-content-end", "align-items-center"], [1, "search-input-container"], [1, "fa", "fa-search", "search-icon"], ["type", "text", 3, "placeholder", "input"], ["searchInput", ""]], template: function ListFiltersComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ListFiltersComponent_Template_input_input_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); return ctx.searchTerm.next(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, "SHARED.SEARCH"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".search-input-container[_ngcontent-%COMP%] {\n  background: #F0F0F0;\n  position: relative;\n  border-radius: 36px;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  margin-inline-end: 1rem;\n}\n.search-input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 0.5rem 1rem;\n  border: none;\n  margin-inline-start: 1rem;\n}\n.search-input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.search-input-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  margin-inline-start: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtZmlsdGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSx1QkFBQTtBQUFGO0FBR0U7RUFDRSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBREo7QUFHSTtFQUNFLGFBQUE7QUFETjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7QUFISiIsImZpbGUiOiJsaXN0LWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNlYXJjaC1pbnB1dC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNGMEYwRjA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDM2cHg7XHJcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMXJlbTtcclxuXHJcblxyXG4gICYgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDFyZW07XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmIC5zZWFyY2gtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 29813:
/*!*******************************************************************!*\
  !*** ./src/app/pages/shared/list-header/list-header.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListHeaderComponent": () => (/* binding */ ListHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _list_filters_list_filters_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../list-filters/list-filters.component */ 28304);






function ListHeaderComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListHeaderComponent_div_5_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r2.addClicked.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListHeaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListHeaderComponent_div_5_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", ctx_r0.permissions);
} }
const _c0 = [[["", "id", "customfilter"]]];
const _c1 = ["#customFilter"];
class ListHeaderComponent {
    constructor() {
        this.permissions = '';
        this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.addClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
}
ListHeaderComponent.ɵfac = function ListHeaderComponent_Factory(t) { return new (t || ListHeaderComponent)(); };
ListHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListHeaderComponent, selectors: [["app-list-header"]], inputs: { permissions: "permissions", headerTitle: "headerTitle", withAddButton: "withAddButton", searchTerm: "searchTerm" }, outputs: { addClicked: "addClicked" }, ngContentSelectors: _c1, decls: 9, vars: 3, consts: [[1, "py-3", "w-100", "d-flex", "justify-content-between"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "list-header"], [1, "nav-header__text"], [4, "ngIf"], [1, "margin-start-3", "d-flex", "align-items-center"], [3, "searchTerm"], ["class", "margin-start-3 btn-add", 3, "click", 4, "ngxPermissionsOnly"], [1, "margin-start-3", "btn-add", 3, "click"], [1, "fa", "fa-add"]], template: function ListHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ListHeaderComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-list-filters", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.headerTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.withAddButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("searchTerm", ctx.searchTerm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__.NgxPermissionsDirective, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__.NgxPermissionsRestrictStubDirective, _list_filters_list_filters_component__WEBPACK_IMPORTED_MODULE_0__.ListFiltersComponent], styles: [".list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.nav-header__text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 500;\n  margin-inline-start: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx5QkFBQTtBQUFGIiwiZmlsZSI6Imxpc3QtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtaGVhZGVyX190ZXh0IHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIC8vY29sb3I6ICMzNjk5RkY7XHJcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMXJlbTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 36938:
/*!***************************************************************************!*\
  !*** ./src/app/pages/shared/localized-input/localized-input.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalizedInputComponent": () => (/* binding */ LocalizedInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 33935);





class LocalizedInputComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        ngControl.valueAccessor = this;
    }
    ngOnInit() {
    }
    writeValue(obj) {
        this.object = obj || {};
    }
    registerOnChange(fn) {
    }
    registerOnTouched(fn) {
    }
    setValue() {
        this.ngControl.control.setValue(this.object);
    }
}
LocalizedInputComponent.ɵfac = function LocalizedInputComponent_Factory(t) { return new (t || LocalizedInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl)); };
LocalizedInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocalizedInputComponent, selectors: [["app-localized-input"]], inputs: { lang: "lang", label: "label" }, decls: 5, vars: 4, consts: [["matInput", "", 3, "ngModel", "ngModelChange", "change"]], template: function LocalizedInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LocalizedInputComponent_Template_input_ngModelChange_4_listener($event) { return (ctx.object[ctx.lang] = $event); })("change", function LocalizedInputComponent_Template_input_change_4_listener() { return ctx.setValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.label));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.object[ctx.lang]);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhbGl6ZWQtaW5wdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 70095:
/*!********************************************************!*\
  !*** ./src/app/pages/shared/material/_config/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatPaginatorIntlLocale": () => (/* reexport safe */ _mat_paginator_intl_locale__WEBPACK_IMPORTED_MODULE_0__.MatPaginatorIntlLocale)
/* harmony export */ });
/* harmony import */ var _mat_paginator_intl_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mat-paginator-intl-locale */ 88332);
// export { MatDialogConfigLocale } from './mat-dialog-config-locale';



/***/ }),

/***/ 88332:
/*!****************************************************************************!*\
  !*** ./src/app/pages/shared/material/_config/mat-paginator-intl-locale.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatPaginatorIntlLocale": () => (/* binding */ MatPaginatorIntlLocale)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 33935);



class MatPaginatorIntlLocale extends _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__.MatPaginatorIntl {
    constructor(translationService) {
        super();
        this.translationService = translationService;
        this.itemsPerPageLabel = "";
        this.getRangeLabel = function (page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
                return `0 ${this.translationService.instant('BASE.OF_LABEL')} ` + length;
            }
            length = Math.max(length, 0);
            const startIndex = page * pageSize;
            // If the start index exceeds the list length, do not try and fix the end index to the end.
            const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            return (startIndex +
                1 +
                ' - ' +
                endIndex +
                ` ${this.translationService.instant('BASE.OF_LABEL')} ` +
                length);
        };
    }
}
MatPaginatorIntlLocale.ɵfac = function MatPaginatorIntlLocale_Factory(t) { return new (t || MatPaginatorIntlLocale)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
MatPaginatorIntlLocale.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MatPaginatorIntlLocale, factory: MatPaginatorIntlLocale.ɵfac });


/***/ }),

/***/ 56993:
/*!************************************************!*\
  !*** ./src/app/pages/shared/material/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatPaginatorIntlLocale": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_1__.MatPaginatorIntlLocale),
/* harmony export */   "MaterialModule": () => (/* reexport safe */ _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule)
/* harmony export */ });
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ 80000);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_config */ 70095);




/***/ }),

/***/ 80000:
/*!**********************************************************!*\
  !*** ./src/app/pages/shared/material/material.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/badge */ 70178);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/chips */ 81196);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ 12928);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/slider */ 61859);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 54941);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_config */ 70095);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);






























// import {
// 	MomentDateAdapter,
// 	MAT_MOMENT_DATE_ADAPTER_OPTIONS,
// 	MAT_MOMENT_DATE_FORMATS,
// } from '@angular/material-moment-adapter';
// import { TranslationService } from '../../../core/_base/layout';



class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__.MAT_TABS_CONFIG,
            useValue: { animationDuration: '0ms' },
        },
        {
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: { appearance: "outline" },
        },
        // {
        // 	provide: MAT_DIALOG_DEFAULT_OPTIONS,
        // 	useClass: MatDialogConfigLocale,
        // 	deps: [TranslationService],
        // },
        {
            provide: _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MAT_TOOLTIP_DEFAULT_OPTIONS,
            useValue: {
                showDelay: 500,
                hideDelay: 500,
            },
        },
        { provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginatorIntl, useClass: _config__WEBPACK_IMPORTED_MODULE_0__.MatPaginatorIntlLocale },
        // { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
        // Native MomentDateAdapter configuration
        // {
        // 	provide: DateAdapter,
        // 	useClass: MomentDateAdapter,
        // 	deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
        // },
        // {
        // 	provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
        // 	useValue: { useUtc: true },
        // },
        // Extended MomentDataAdapter configuration to support Timezone
        // {
        // 	provide: DateAdapter,
        // 	useClass: ExtendedMomentDateAdapter,
        // 	deps: [MAT_DATE_LOCALE]
        // },
    ], imports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatNativeDateModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__.MatProgressBarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__.MatTabsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDividerModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_27__.MatListModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__.MatSlideToggleModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__.DragDropModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__.MatSidenavModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__.MatBadgeModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__.MatSliderModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatRippleModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatNativeDateModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__.MatProgressBarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__.MatTabsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDividerModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_27__.MatListModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__.MatSlideToggleModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__.DragDropModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__.MatSidenavModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_31__.MatBadgeModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__.MatSliderModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatRippleModule] }); })();


/***/ }),

/***/ 64253:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/shared/media-players/image-preview/image-preview.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagePreviewComponent": () => (/* binding */ ImagePreviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);




function ImagePreviewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImagePreviewComponent_div_0_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.media[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ImagePreviewComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.media = data;
    }
    ngOnInit() { }
    close() {
        this.dialogRef.close();
    }
}
ImagePreviewComponent.ɵfac = function ImagePreviewComponent_Factory(t) { return new (t || ImagePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ImagePreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImagePreviewComponent, selectors: [["app-image-preview"]], inputs: { media: "media" }, decls: 1, vars: 1, consts: [["class", "full", 4, "ngIf"], [1, "full"], [1, "d-flex", "justify-content-center", "align-items-center", "close-container", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "w-100", "h-100", "d-flex", "justify-content-center", "align-items-center"], ["alt", "", 1, "image", 3, "src"]], template: function ImagePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImagePreviewComponent_div_0_Template, 5, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.media && ctx.media.length == 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".full[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n\n.close-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  margin-inline-start: 95%;\n  background-color: white;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  cursor: pointer;\n}\n\n.image[_ngcontent-%COMP%] {\n  max-width: 75vw;\n  max-height: 75vh;\n  min-width: 25vw;\n  min-height: 25vh;\n}\n\n  .custom-dialog > mat-dialog-container {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFFQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLDZCQUFBO0FBQUYiLCJmaWxlIjoiaW1hZ2UtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNsb3NlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMXJlbTtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiA5NSU7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICBtYXgtd2lkdGg6IDc1dnc7XHJcbiAgbWF4LWhlaWdodDogNzV2aDtcclxuICBtaW4td2lkdGg6IDI1dnc7XHJcbiAgbWluLWhlaWdodDogMjV2aDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jdXN0b20tZGlhbG9nID4gbWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9429:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/shared/media-players/video-player/video-player.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoPlayerComponent": () => (/* binding */ VideoPlayerComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_shared_models_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/shared/models/media */ 3151);




class VideoPlayerComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.media = data;
    }
    ngOnInit() { }
    close() {
        this.dialogRef.close();
    }
}
VideoPlayerComponent.ɵfac = function VideoPlayerComponent_Factory(t) { return new (t || VideoPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
VideoPlayerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VideoPlayerComponent, selectors: [["app-video-player"]], inputs: { media: "media" }, decls: 5, vars: 1, consts: [[1, "full"], [1, "d-flex", "justify-content-center", "align-items-center", "close-container", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "w-100", "h-100", "d-flex", "justify-content-center", "align-items-center"], ["controls", "", 1, "video", 3, "src"]], template: function VideoPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoPlayerComponent_Template_span_click_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.media.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, styles: [".full[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n\n.close-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  margin-inline-start: 95%;\n  background-color: white;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  cursor: pointer;\n}\n\n.video[_ngcontent-%COMP%] {\n  width: 75vw;\n  height: 75vh;\n  min-width: 25vw;\n  min-height: 25vh;\n}\n\n  .custom-dialog > mat-dialog-container {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLXBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUVBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSw2QkFBQTtBQURGIiwiZmlsZSI6InZpZGVvLXBsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNsb3NlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMXJlbTtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiA5NSU7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnZpZGVvIHtcclxuICB3aWR0aDogNzV2dztcclxuICBoZWlnaHQ6IDc1dmg7XHJcblxyXG4gIG1pbi13aWR0aDogMjV2dztcclxuICBtaW4taGVpZ2h0OiAyNXZoO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmN1c3RvbS1kaWFsb2cgPiBtYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 30947:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/shared/no-data-placeholder/no-data-placeholder.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoDataPlaceholderComponent": () => (/* binding */ NoDataPlaceholderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 33935);



function NoDataPlaceholderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("w-100 d-flex flex-column align-items-center justify-content-start ", ctx_r0.classes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "SHARED.NO_DATA"));
} }
class NoDataPlaceholderComponent {
    constructor() { }
    ngOnInit() {
    }
}
NoDataPlaceholderComponent.ɵfac = function NoDataPlaceholderComponent_Factory(t) { return new (t || NoDataPlaceholderComponent)(); };
NoDataPlaceholderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoDataPlaceholderComponent, selectors: [["app-no-data-placeholder"]], inputs: { data: "data", classes: "classes" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], ["src", "../../../../assets/media/no-data-placeholder.png", "alt", "No Data"], [1, "no-data-label"]], template: function NoDataPlaceholderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NoDataPlaceholderComponent_div_0_Template, 5, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".no-data-label[_ngcontent-%COMP%] {\n  margin-top: 13px;\n  font-size: 13px;\n  color: #989898;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vLWRhdGEtcGxhY2Vob2xkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoibm8tZGF0YS1wbGFjZWhvbGRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1kYXRhLWxhYmVse1xyXG4gIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjOTg5ODk4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 98749:
/*!************************************************************!*\
  !*** ./src/app/pages/shared/pipes/array-to-string.pipe.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayToStringPipe": () => (/* binding */ ArrayToStringPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ArrayToStringPipe {
    transform(value, notAvailable = 'N/A', spacer = ', ') {
        return value && value.length ? value === null || value === void 0 ? void 0 : value.join(spacer) : notAvailable;
    }
}
ArrayToStringPipe.ɵfac = function ArrayToStringPipe_Factory(t) { return new (t || ArrayToStringPipe)(); };
ArrayToStringPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "arrayToString", type: ArrayToStringPipe, pure: true });


/***/ }),

/***/ 86210:
/*!*****************************************************!*\
  !*** ./src/app/pages/shared/pipes/enum-key.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnumKeyPipe": () => (/* binding */ EnumKeyPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class EnumKeyPipe {
    transform(value, enumObject) {
        return enumObject[value];
    }
}
EnumKeyPipe.ɵfac = function EnumKeyPipe_Factory(t) { return new (t || EnumKeyPipe)(); };
EnumKeyPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "enumKey", type: EnumKeyPipe, pure: true });


/***/ }),

/***/ 43869:
/*!***********************************************************************!*\
  !*** ./src/app/pages/shared/rich-text/add-link/add-link.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddLinkComponent": () => (/* binding */ AddLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);








class AddLinkComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.linkForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]),
            placeHolder: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]),
        });
    }
    ngOnInit() { }
}
AddLinkComponent.ɵfac = function AddLinkComponent_Factory(t) { return new (t || AddLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef)); };
AddLinkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddLinkComponent, selectors: [["app-add-link"]], decls: 20, vars: 11, consts: [[1, "d-flex", "flex-column", "justify-content-center", "align-items-center", 3, "formGroup"], ["appearance", "fill", 2, "height", "60px"], ["matInput", "", "formControlName", "link"], ["appearance", "fill"], ["matInput", "", "formControlName", "placeHolder"], ["mat-flat-button", "", "color", "primary", 1, "w-100", "my-2", 3, "disabled", "click"], ["mat-button", "", 1, "w-100", 3, "click"]], template: function AddLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0)(1, "mat-form-field", 1)(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Link ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Please Add Correct Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 3)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Placeholder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddLinkComponent_Template_button_click_14_listener($event) { $event.preventDefault(); return ctx.dialogRef.close(ctx.linkForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddLinkComponent_Template_button_click_17_listener($event) { $event.preventDefault(); return ctx.dialogRef.close(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.linkForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 5, "VALIDATION_ERRORS.REQUIRED"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.linkForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 7, "SHARED.ADD"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 9, "SHARED.CANCEL"), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: [".mat-flat-button[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1saW5rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6ImFkZC1saW5rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mbGF0LWJ1dHRvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 43780:
/*!************************************************************!*\
  !*** ./src/app/pages/shared/rich-text/rich-text.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RichTextModule": () => (/* binding */ RichTextModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rich-text/rich-text.component */ 32608);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _add_link_add_link_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-link/add-link.component */ 43869);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-editor */ 81142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);











class RichTextModule {
}
RichTextModule.ɵfac = function RichTextModule_Factory(t) { return new (t || RichTextModule)(); };
RichTextModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RichTextModule });
RichTextModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
            ngx_editor__WEBPACK_IMPORTED_MODULE_10__.NgxEditorModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RichTextModule, { declarations: [_rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_0__.RichTextComponent, _add_link_add_link_component__WEBPACK_IMPORTED_MODULE_1__.AddLinkComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
        ngx_editor__WEBPACK_IMPORTED_MODULE_10__.NgxEditorModule], exports: [_rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_0__.RichTextComponent] }); })();


/***/ }),

/***/ 32608:
/*!*************************************************************************!*\
  !*** ./src/app/pages/shared/rich-text/rich-text/rich-text.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RichTextComponent": () => (/* binding */ RichTextComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-editor */ 81142);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 33935);







const _c0 = function () { return ["red"]; };
let RichTextComponent = class RichTextComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.initialized = false;
        this.currentLang = 'en';
        this.borderColor = '#D9D9DE';
        // Rich Text Provider Properties
        this.editor = new ngx_editor__WEBPACK_IMPORTED_MODULE_0__.Editor({
            history: true,
            inputRules: true,
            keyboardShortcuts: true,
            features: {
                linkOnPaste: true,
            },
        });
        this.toolbar = [
            ['bold', 'italic'],
            ['underline', 'strike'],
            ['code', 'blockquote'],
            ['ordered_list', 'bullet_list'],
            [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
            ['link'],
            ['text_color', 'background_color'],
            ['align_left', 'align_center', 'align_right', 'align_justify'],
        ];
        ngControl.valueAccessor = this;
    }
    ngOnDestroy() {
        this.editor.destroy();
    }
    clear() {
        this.initialized = false;
        this.firstFocus = false;
        this.localizedObject = null;
    }
    ngOnInit() {
        this.editor.valueChanges
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.untilDestroyed)(this))
            .subscribe((data) => {
            if (data.content && data.content.length) {
                const first = data.content[0];
                if (first.content) {
                    this.localizedObject[this.currentLang] = (0,ngx_editor__WEBPACK_IMPORTED_MODULE_0__.toHTML)(data);
                    this.setData();
                    return;
                }
            }
            this.localizedObject[this.currentLang] = null;
            this.setData();
        });
        this.ngControl.control.setValidators((control) => {
            const value = control.value;
            const isValid = value && (value.ar || value.en);
            return isValid ? null : [];
        });
    }
    setData() {
        this.ngControl.control.setValue(this.localizedObject);
    }
    writeValue(obj) {
        this.localizedObject = obj || {};
        if (this.initialized) {
            return;
        }
        this.initialized = true;
    }
    registerOnChange(fn) { }
    registerOnTouched(fn) { }
};
RichTextComponent.ɵfac = function RichTextComponent_Factory(t) { return new (t || RichTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControl, 2)); };
RichTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RichTextComponent, selectors: [["app-rich-text"]], inputs: { currentLang: "currentLang", readOnly: "readOnly" }, decls: 9, vars: 21, consts: [[1, "NgxEditor__Wrapper"], [3, "editor", "toolbar", "disabled", "colorPresets"], ["outputFormat", "html", 2, "background-color", "transparent !important", 3, "editor", "ngModel", "disabled", "maxlength", "placeholder", "focusIn", "focusOut"], [1, "NgxEditor", 2, "background-color", "transparent"], [1, "margin-start-1", 2, "height", "20px"], [1, "error-message"]], template: function RichTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ngx-editor-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ngx-editor", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusIn", function RichTextComponent_Template_ngx_editor_focusIn_2_listener() { return ctx.borderColor = "coral"; })("focusOut", function RichTextComponent_Template_ngx_editor_focusOut_2_listener() { ctx.borderColor = "#D9D9DE"; return ctx.firstFocus = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("border", "2px #D9D9DE solid")("border-color", ctx.firstFocus && ctx.ngControl.control.invalid ? "red" : ctx.borderColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("editor", ctx.editor)("toolbar", ctx.toolbar)("disabled", ctx.readOnly)("colorPresets", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 16, "ARTICLES.DESCRIPTION"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("editor", ctx.editor)("ngModel", ctx.localizedObject[ctx.currentLang])("disabled", ctx.readOnly)("maxlength", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx.firstFocus && ctx.ngControl.control.invalid ? "20px" : "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 18, "VALIDATION_ERRORS.REQUIRED"), " ");
    } }, directives: [ngx_editor__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, ngx_editor__WEBPACK_IMPORTED_MODULE_0__.NgxEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["div.ql-toolbar.ql-snow[_ngcontent-%COMP%] {\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n}\n\n.NgxEditor__Wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  overflow: hidden;\n  color: red;\n  transition: height 0.3s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpY2gtdGV4dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLHdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsVUFBQTtFQUNBLDhCQUFBO0FBQUYiLCJmaWxlIjoicmljaC10ZXh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnFsLXRvb2xiYXIucWwtc25vdyB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxufVxyXG5cclxuLk5neEVkaXRvcl9fV3JhcHBlciA+ICoge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDEwLjVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8vaGVpZ2h0OiAwO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgbGluZWFyO1xyXG59XHJcbiJdfQ== */"] });
RichTextComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.UntilDestroy)()
], RichTextComponent);



/***/ }),

/***/ 40950:
/*!***********************************************!*\
  !*** ./src/app/pages/shared/shared.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _attachment_attachment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attachment/attachment.component */ 39503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material */ 56993);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared */ 8268);
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-nav/side-nav.component */ 12817);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _localized_input_localized_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localized-input/localized-input.component */ 36938);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _list_filters_list_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-filters/list-filters.component */ 28304);
/* harmony import */ var _attachment_pipes_with_flag_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attachment/pipes/with-flag.pipe */ 87448);
/* harmony import */ var _list_header_list_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-header/list-header.component */ 29813);
/* harmony import */ var _directives_profile_image_profile_image_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/profile-image/profile-image.directive */ 13468);
/* harmony import */ var _pipes_array_to_string_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/array-to-string.pipe */ 98749);
/* harmony import */ var _no_data_placeholder_no_data_placeholder_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./no-data-placeholder/no-data-placeholder.component */ 30947);
/* harmony import */ var _directives_validators_required_validators_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/validators/required-validators.directive */ 82297);
/* harmony import */ var _app_request_loader_app_request_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-request-loader/app-request-loader.component */ 97997);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _attachment_button_attachment_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./attachment-button/attachment-button.component */ 81430);
/* harmony import */ var _details_header_details_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./details-header/details-header.component */ 55641);
/* harmony import */ var _pipes_enum_key_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/enum-key.pipe */ 86210);
/* harmony import */ var _day_of_week_tabs_day_of_week_tabs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./day-of-week-tabs/day-of-week-tabs.component */ 98572);
/* harmony import */ var _core_shared_directives_extenal_video_validator_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../core/shared/directives/extenal-video-validator.directive */ 48057);
/* harmony import */ var _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./splash-screen/splash-screen.component */ 72795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);

























class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [[
            _material__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
            ngx_permissions__WEBPACK_IMPORTED_MODULE_24__.NgxPermissionsModule,
            ngx_permissions__WEBPACK_IMPORTED_MODULE_24__.NgxPermissionsRestrictStubModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_attachment_attachment_component__WEBPACK_IMPORTED_MODULE_0__.AttachmentComponent,
        _core_shared_directives_extenal_video_validator_directive__WEBPACK_IMPORTED_MODULE_17__.VideoValidatorDirective,
        _core_shared__WEBPACK_IMPORTED_MODULE_2__.HoverObserverDirective,
        _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__.SideNavComponent,
        _localized_input_localized_input_component__WEBPACK_IMPORTED_MODULE_4__.LocalizedInputComponent,
        _list_filters_list_filters_component__WEBPACK_IMPORTED_MODULE_5__.ListFiltersComponent,
        _attachment_pipes_with_flag_pipe__WEBPACK_IMPORTED_MODULE_6__.WithFlagPipe,
        _list_header_list_header_component__WEBPACK_IMPORTED_MODULE_7__.ListHeaderComponent,
        _directives_profile_image_profile_image_directive__WEBPACK_IMPORTED_MODULE_8__.ProfileImageDirective,
        _pipes_array_to_string_pipe__WEBPACK_IMPORTED_MODULE_9__.ArrayToStringPipe,
        _no_data_placeholder_no_data_placeholder_component__WEBPACK_IMPORTED_MODULE_10__.NoDataPlaceholderComponent,
        _directives_validators_required_validators_directive__WEBPACK_IMPORTED_MODULE_11__.RequiredValidatorsDirective,
        _app_request_loader_app_request_loader_component__WEBPACK_IMPORTED_MODULE_12__.AppRequestLoaderComponent,
        _attachment_button_attachment_button_component__WEBPACK_IMPORTED_MODULE_13__.AttachmentButtonComponent,
        _details_header_details_header_component__WEBPACK_IMPORTED_MODULE_14__.DetailsHeaderComponent,
        _pipes_enum_key_pipe__WEBPACK_IMPORTED_MODULE_15__.EnumKeyPipe,
        _day_of_week_tabs_day_of_week_tabs_component__WEBPACK_IMPORTED_MODULE_16__.DayOfWeekTabsComponent,
        _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_18__.SplashScreenComponent], imports: [_material__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
        ngx_permissions__WEBPACK_IMPORTED_MODULE_24__.NgxPermissionsModule,
        ngx_permissions__WEBPACK_IMPORTED_MODULE_24__.NgxPermissionsRestrictStubModule], exports: [_attachment_attachment_component__WEBPACK_IMPORTED_MODULE_0__.AttachmentComponent,
        _core_shared__WEBPACK_IMPORTED_MODULE_2__.HoverObserverDirective,
        _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__.SideNavComponent,
        _localized_input_localized_input_component__WEBPACK_IMPORTED_MODULE_4__.LocalizedInputComponent,
        _list_filters_list_filters_component__WEBPACK_IMPORTED_MODULE_5__.ListFiltersComponent,
        _attachment_pipes_with_flag_pipe__WEBPACK_IMPORTED_MODULE_6__.WithFlagPipe,
        _list_header_list_header_component__WEBPACK_IMPORTED_MODULE_7__.ListHeaderComponent,
        _directives_profile_image_profile_image_directive__WEBPACK_IMPORTED_MODULE_8__.ProfileImageDirective,
        _pipes_array_to_string_pipe__WEBPACK_IMPORTED_MODULE_9__.ArrayToStringPipe,
        _no_data_placeholder_no_data_placeholder_component__WEBPACK_IMPORTED_MODULE_10__.NoDataPlaceholderComponent,
        _app_request_loader_app_request_loader_component__WEBPACK_IMPORTED_MODULE_12__.AppRequestLoaderComponent,
        _directives_validators_required_validators_directive__WEBPACK_IMPORTED_MODULE_11__.RequiredValidatorsDirective,
        _attachment_button_attachment_button_component__WEBPACK_IMPORTED_MODULE_13__.AttachmentButtonComponent,
        _details_header_details_header_component__WEBPACK_IMPORTED_MODULE_14__.DetailsHeaderComponent,
        _pipes_enum_key_pipe__WEBPACK_IMPORTED_MODULE_15__.EnumKeyPipe,
        _day_of_week_tabs_day_of_week_tabs_component__WEBPACK_IMPORTED_MODULE_16__.DayOfWeekTabsComponent,
        _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_18__.SplashScreenComponent] }); })();


/***/ }),

/***/ 12817:
/*!*************************************************************!*\
  !*** ./src/app/pages/shared/side-nav/side-nav.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavComponent": () => (/* binding */ SideNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 33935);





function SideNavComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6)(1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function SideNavComponent_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
const _c0 = function (a0) { return { item: a0 }; };
function SideNavComponent_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SideNavComponent_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template", 10);
} if (rf & 2) {
    const sideItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, sideItem_r6));
} }
function SideNavComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_3_1_Template, 1, 4, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sideItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sideItem_r6.type === "link");
} }
function SideNavComponent_ng_template_4_ng_template_0_Template(rf, ctx) { }
function SideNavComponent_ng_template_4_ng_container_2_1_ng_template_0_Template(rf, ctx) { }
function SideNavComponent_ng_template_4_ng_container_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SideNavComponent_ng_template_4_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template", 10);
} if (rf & 2) {
    const sideItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, sideItem_r13));
} }
function SideNavComponent_ng_template_4_ng_container_2_2_ng_template_0_Template(rf, ctx) { }
function SideNavComponent_ng_template_4_ng_container_2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SideNavComponent_ng_template_4_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 10);
} if (rf & 2) {
    const sideItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, sideItem_r13));
} }
function SideNavComponent_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_template_4_ng_container_2_1_Template, 1, 4, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_template_4_ng_container_2_2_Template, 1, 4, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sideItem_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sideItem_r13.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sideItem_r13.type === "section");
} }
function SideNavComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SideNavComponent_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_template_4_ng_container_2_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r10.children);
} }
function SideNavComponent_ng_template_6_li_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("menu-toggler", item_r20.type == "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r20.href);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r20.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, item_r20.title), " ");
} }
function SideNavComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SideNavComponent_ng_template_6_li_0_Template, 6, 7, "li", 11);
} if (rf & 2) {
    const item_r20 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", item_r20.permission);
} }
var sideNavTypes;
(function (sideNavTypes) {
    sideNavTypes["Link"] = "link";
    sideNavTypes["Section"] = "section";
})(sideNavTypes || (sideNavTypes = {}));
class SideNavComponent {
    constructor() {
        this.collapse = false;
        this.sideNav = [
            // {
            //   title: 'DASHBOARD.NAV_TITLE',
            //   type: sideNavTypes.Link,
            //   permission: '',
            //   icon: 'fa-solid fa-gauge',
            //   href: '/dashboard',
            //   active: false,
            // },
            {
                title: 'ARTICLES.NAV_TITLE',
                type: sideNavTypes.Link,
                permission: 'canAccessBlogsModule',
                icon: 'fa fa-newspaper',
                href: '/articles',
                active: false,
            },
            {
                title: 'BLOG_VIDEOS.NAV_TITLE',
                type: sideNavTypes.Link,
                permission: 'canAccessBlogsModule',
                icon: 'fa fa-video',
                href: '/blog-videos',
                active: false,
            },
            {
                title: 'Hunger  Videos',
                type: sideNavTypes.Link,
                permission: 'canAccessBlogsModule',
                icon: 'fa-solid fa-utensils',
                href: '/Hunger-videos',
                active: false,
            },
            {
                title: 'POLLS.NAV_TITLE',
                type: sideNavTypes.Link,
                permission: 'canAccessBlogsModule',
                icon: 'fa fa-poll',
                href: '/polls',
                active: false,
            },
            {
                title: 'MOBILE_USERS.NAV_TITLE',
                type: sideNavTypes.Link,
                permission: 'canAccessAppUsersModule',
                icon: 'fa fa-user',
                href: '/app/users',
                active: false,
            },
            {
                title: 'MEALS.NAV_TITLE',
                type: sideNavTypes.Link,
                permission: 'canAccessMealsModule',
                icon: 'fa-solid fa-cheese',
                href: '/meals',
                active: false,
            },
            // {
            //   title: 'ADMIN_USERS.NAV_TITLE',
            //   type: sideNavTypes.Link,
            //   permission: 'canAccessAdminUsersModule',
            //   icon: 'fa-solid fa-user-gear',
            //   href: '/admin/users',
            //   active: false,
            // },
            {
                title: 'PLAN_TEMPLATES.NAV_TITLE',
                type: sideNavTypes.Link,
                permission: 'canAccessMealPlansModule',
                icon: 'fa-solid fa-user-gear',
                href: '/plans/templates',
                active: false,
            },
            {
                title: 'ADMIN_USERS.NAV_TITLE',
                type: sideNavTypes.Link,
                permission: 'canAccessAdminUsersModule',
                icon: 'fa-solid fa-user-gear',
                href: '/admin-users',
                active: false,
            },
            {
                title: 'ROLES.NAV_TITLE',
                type: sideNavTypes.Link,
                permission: 'canAccessAdminUsersModule',
                icon: 'fa-solid fa-user-gear',
                href: '/roles',
                active: false,
            },
            {
                title: 'Notifications',
                type: sideNavTypes.Link,
                permission: 'canAccessAdminUsersModule',
                icon: 'fa-solid fa-bell',
                href: '/notifications/send-notification',
                active: false,
            },
            {
            // title: 'POLLS.NAV_TITLE',
            // type: sideNavTypes.Section,
            // permission: 'canAccessAdminUsersModule',
            // icon: 'fa fa-poll',
            // active: false,
            // children: [
            //   {
            //     title: 'ARTICLES.NAV_TITLE',
            //     type: sideNavTypes.Link,
            //     icon: 'fa fa-newspaper',
            //     permission: 'canAccessAdminUsersModule',
            //     href: '/articles',
            //     active: false,
            //   },
            //   {
            //     title: 'POLLS.NAV_TITLE',
            //     type: sideNavTypes.Link,
            //     permission: 'canAccessAdminUsersModule',
            //     icon: 'fa fa-poll',
            //     href: '/polls',
            //     active: false,
            //   },
            // ],
            },
        ];
    }
    ngOnInit() { }
    expand(sideItem, submenu) {
        const menu = submenu.children.namedItem('.menu-submenu');
        if (submenu) {
            const newHeight = submenu.style.maxHeight === '0px' ? '100%' : '0px';
            submenu.style.setProperty('max-height', newHeight);
        }
    }
    open($event) {
        $event.preventDefault();
        const menu = $event.path.find((q) => q.className.includes('menu-item'));
        for (let i = 0; i < menu.children.length; i++) {
            const item = menu.children.item(i);
            if (!item.className.includes('menu-submenu'))
                continue;
            item.classList.toggle('menu-submenu-open');
        }
    }
}
SideNavComponent.ɵfac = function SideNavComponent_Factory(t) { return new (t || SideNavComponent)(); };
SideNavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavComponent, selectors: [["app-side-nav"]], inputs: { collapse: "collapse" }, decls: 8, vars: 4, consts: [[1, "side-nav"], ["class", "nav-side-header", "routerLink", "/articles", 4, "ngIf"], [1, "menu-nav", "menu-nav-scroll"], [4, "ngFor", "ngForOf"], ["sideNavSection", ""], ["sideNavItem", ""], ["routerLink", "/articles", 1, "nav-side-header"], [1, "nav__logo"], ["src", "assets/media/logo.svg", "alt", "logo"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "menu-item", 4, "ngxPermissionsOnly"], [1, "menu-item"], ["routerLinkActive", "menu-item-active", 1, "menu-link", 3, "routerLink"], [1, "menu-icon", 3, "ngClass"], [1, "side-nav-link-text"]], template: function SideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_a_1_Template, 3, 0, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideNavComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SideNavComponent_ng_template_4_Template, 3, 5, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SideNavComponent_ng_template_6_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", "285px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.collapse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sideNav);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, ngx_permissions__WEBPACK_IMPORTED_MODULE_3__.NgxPermissionsDirective, ngx_permissions__WEBPACK_IMPORTED_MODULE_3__.NgxPermissionsRestrictStubDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".side-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100vh;\n  top: 0;\n  bottom: 0;\n  background-color: #1E1E2D;\n  transition: width 1s linear;\n}\n\n.nav-side-header[_ngcontent-%COMP%] {\n  height: 65px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  background-color: #1A1A27;\n}\n\n.menu-nav[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n  margin: 1rem 0;\n  height: 100vh;\n  overflow-x: auto;\n}\n\n.menu-item[_ngcontent-%COMP%] {\n  text-align: start;\n  white-space: nowrap;\n  color: #969BA1;\n  cursor: pointer;\n  width: 100%;\n}\n\n.menu-item[_ngcontent-%COMP%]:hover   [_ngcontent-%COMP%]:first-of-type(\"a\") {\n  background-color: #1A1A27;\n  color: white;\n}\n\n.menu-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 15px 25px;\n  text-decoration: none;\n  color: #969BA1;\n  width: 100%;\n}\n\n.menu-link[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n.menu-link[_ngcontent-%COMP%]:hover   .menu-icon[_ngcontent-%COMP%] {\n  color: #5D78FF;\n}\n\n.menu-item-active[_ngcontent-%COMP%] {\n  background-color: #1A1A27;\n  color: white;\n}\n\n.menu-item-active[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  color: #5D78FF;\n}\n\n.menu-icon[_ngcontent-%COMP%] {\n  margin-inline-end: 15px;\n  max-width: 16px;\n}\n\n.menu-submenu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.5s linear;\n}\n\n.menu-submenu-open[_ngcontent-%COMP%] {\n  max-height: 100vh;\n}\n\n\n\n.menu-nav-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n\n\n\n.menu-nav-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #1E1E2D;\n}\n\n\n\n.menu-nav-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  width: 6px;\n  background: #474F6E;\n  border: 3px solid #1E1E2D;\n  background-clip: content-box;\n}\n\n\n\n.menu-nav-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #637099;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQVZhO0VBWWIsMkJBQUE7QUFMRjs7QUFTQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFyQmU7QUFlakI7O0FBYUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBVkY7O0FBYUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBVkY7O0FBWUU7RUFDRSx5QkE1Q2E7RUE2Q2IsWUFBQTtBQVZKOztBQWNBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFYRjs7QUFjRTtFQUNFLFlBQUE7QUFaSjs7QUFjSTtFQUNFLGNBQUE7QUFaTjs7QUFpQkE7RUFDRSx5QkFuRWU7RUFvRWYsWUFBQTtBQWRGOztBQWdCRTtFQUNFLGNBQUE7QUFkSjs7QUFrQkE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUFmRjs7QUFtQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQWhCRjs7QUFtQkE7RUFDRSxpQkFBQTtBQWhCRjs7QUFtQkEscUJBQUE7O0FBQ0E7RUFDRSxXQUFBO0FBaEJGOztBQW1CQSxVQUFBOztBQUNBO0VBQ0UsbUJBckdhO0FBcUZmOztBQW1CQSxXQUFBOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBaEJGOztBQW1CQSxvQkFBQTs7QUFDQTtFQUNFLG1CQUFBO0FBaEJGOztBQW1CQSxhQUFBIiwiZmlsZSI6InNpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2VOYXZDb2xvcjogIzFFMUUyRDtcclxuJG5hdkhlYWRlckNvbG9yOiAjMUExQTI3O1xyXG4kdG9wQmFySG92ZXJDb2xvcjogIzM2OTlGRjtcclxuXHJcblxyXG4uc2lkZS1uYXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2VOYXZDb2xvcjtcclxuXHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgbGluZWFyO1xyXG4gIC8vZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm5hdi1zaWRlLWhlYWRlciB7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG5hdkhlYWRlckNvbG9yO1xyXG59XHJcblxyXG4uc2lkZS1uYXYtbGluay10ZXh0IHtcclxuXHJcbn1cclxuXHJcbi5tZW51LW5hdiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLm1lbnUtaXRlbSB7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBjb2xvcjogIzk2OUJBMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICY6aG92ZXIgOmZpcnN0LW9mLXR5cGUoJ2EnKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2SGVhZGVyQ29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudS1saW5rIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzk2OUJBMTtcclxuICB3aWR0aDogMTAwJTtcclxuICAvL2ZvbnQtc2l6ZTogMTAlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAubWVudS1pY29uIHtcclxuICAgICAgY29sb3I6ICM1RDc4RkY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudS1pdGVtLWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG5hdkhlYWRlckNvbG9yO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgLm1lbnUtaWNvbiB7XHJcbiAgICBjb2xvcjogIzVENzhGRjtcclxuICB9XHJcbn1cclxuXHJcbi5tZW51LWljb24ge1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxNXB4O1xyXG4gIG1heC13aWR0aDogMTZweDtcclxufVxyXG5cclxuXHJcbi5tZW51LXN1Ym1lbnUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtaGVpZ2h0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGxpbmVhcjtcclxufVxyXG5cclxuLm1lbnUtc3VibWVudS1vcGVuIHtcclxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLyojcmVnaW9uIFNjcm9sbCBCYXIqL1xyXG4ubWVudS1uYXYtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDEycHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbi5tZW51LW5hdi1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAkYmFzZU5hdkNvbG9yO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuLm1lbnUtbmF2LXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6IDZweDtcclxuICBiYWNrZ3JvdW5kOiAjNDc0RjZFO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICRiYXNlTmF2Q29sb3I7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbi5tZW51LW5hdi1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNjM3MDk5O1xyXG59XHJcblxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 72795:
/*!***********************************************************************!*\
  !*** ./src/app/pages/shared/splash-screen/splash-screen.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreenComponent": () => (/* binding */ SplashScreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared */ 8268);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);




const _c0 = function (a0, a1) { return { opacity: a0, transition: a1 }; };
function SplashScreenComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-progress-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx_r0.opacityChange, ctx_r0.splashTransition));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 30);
} }
class SplashScreenComponent {
    constructor(splashScreenStateService) {
        this.splashScreenStateService = splashScreenStateService;
        // The screen starts with the maximum opacity
        this.opacityChange = 1;
        // First access the splash is visible
        this.showSplash = true;
        this.ANIMATION_DURATION = 1;
    }
    ngOnInit() { }
    hideSplashAnimation() {
        // Setting the transition
        this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
        this.opacityChange = 0;
        setTimeout(() => {
            // After the transition is ended the showSplash will be hided
            this.showSplash = !this.showSplash;
        }, 1000);
    }
}
SplashScreenComponent.ɵfac = function SplashScreenComponent_Factory(t) { return new (t || SplashScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_shared__WEBPACK_IMPORTED_MODULE_0__.SplashScreenService)); };
SplashScreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SplashScreenComponent, selectors: [["app-splash-screen"]], decls: 1, vars: 1, consts: [["class", "app-splash-screen", 3, "ngStyle", 4, "ngIf"], [1, "app-splash-screen", 3, "ngStyle"], [1, "app-splash-content"], [3, "diameter"]], template: function SplashScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SplashScreenComponent_div_0_Template, 3, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSplash);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinner], styles: [".app-splash-screen[_ngcontent-%COMP%] {\n  background: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: 1;\n}\n\n.loading-text[_ngcontent-%COMP%] {\n  position: relative;\n  color: rgba(0, 0, 0, 0.3);\n  font-size: 5em;\n}\n\n.loading-text[_ngcontent-%COMP%]:before {\n  content: attr(data-text);\n  position: absolute;\n  overflow: hidden;\n  max-width: 7em;\n  white-space: nowrap;\n  color: #fff;\n  animation: loading 8s linear;\n}\n\n@keyframes loading {\n  0% {\n    max-width: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InNwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXNwbGFzaC1zY3JlZW4ge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5sb2FkaW5nLXRleHQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGZvbnQtc2l6ZTogNWVtO1xyXG59XHJcblxyXG4ubG9hZGluZy10ZXh0OmJlZm9yZSB7XHJcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1heC13aWR0aDogN2VtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDhzIGxpbmVhcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBsb2FkaW5nIHtcclxuICAwJSB7XHJcbiAgICBtYXgtd2lkdGg6IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
//const baseUrl = 'https://localhost:5033';
const baseUrl = 'https://dev.api.nutrisha.app';
// const baseUrl = 'https://api.nutrisha.app';
const environment = {
    production: true,
    baseUrl,
    baseAdminV1Url: `${baseUrl}/admin/api/v1/`,
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map