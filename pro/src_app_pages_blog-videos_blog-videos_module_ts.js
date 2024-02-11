"use strict";
(self["webpackChunknutrisha_admin"] = self["webpackChunknutrisha_admin"] || []).push([["src_app_pages_blog-videos_blog-videos_module_ts"],{

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

/***/ 79747:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/blog-videos/blog-video-details/blog-video-details.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogVideoDetailsComponent": () => (/* binding */ BlogVideoDetailsComponent)
/* harmony export */ });
/* harmony import */ var F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _core_blog_videos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/blog-videos */ 55666);
/* harmony import */ var _core_store_blog_videos_blog_videos_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/store/blog-videos/blog-videos.actions */ 6612);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/shared */ 8268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _blog_tag_blog_tag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blog-tag/blog-tag.component */ 95618);
/* harmony import */ var _shared_attachment_attachment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/attachment/attachment.component */ 39503);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 33935);























function BlogVideoDetailsComponent_div_0_div_3_div_1_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogVideoDetailsComponent_div_0_div_3_div_1_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return ctx_r9.viewOnly = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "SHARED.EDIT"), " ");
  }
}

function BlogVideoDetailsComponent_div_0_div_3_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogVideoDetailsComponent_div_0_div_3_div_1_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return ctx_r11.delete();
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

function BlogVideoDetailsComponent_div_0_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-menu", null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, BlogVideoDetailsComponent_div_0_div_3_div_1_button_5_Template, 3, 3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, BlogVideoDetailsComponent_div_0_div_3_div_1_button_6_Template, 3, 3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngxPermissionsOnly", "canEditBlogVideos");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngxPermissionsOnly", "canDeleteBlogVideos");
  }
}

const _c0 = function () {
  return ["canEditBlogVideos", "canDeleteBlogVideos"];
};

function BlogVideoDetailsComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BlogVideoDetailsComponent_div_0_div_3_div_1_Template, 7, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}

function BlogVideoDetailsComponent_div_0_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "VALIDATION_ERRORS.REQUIRED"));
  }
}

function BlogVideoDetailsComponent_div_0_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogVideoDetailsComponent_div_0_button_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r13.delete();
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

function BlogVideoDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, BlogVideoDetailsComponent_div_0_div_3_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 5)(5, "div", 6)(6, "mat-form-field", 7)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, BlogVideoDetailsComponent_div_0_span_12_Template, 3, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-blog-tag", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-attachment", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-attachment", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 13)(20, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogVideoDetailsComponent_div_0_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r15.submit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogVideoDetailsComponent_div_0_Template_button_click_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);

      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      $event.preventDefault();

      _r3.clear();

      return ctx_r17.cancelEditing();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, BlogVideoDetailsComponent_div_0_button_26_Template, 3, 3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.viewOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0.blogVideoForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 25, "ARTICLES.SUBJECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("maxLength", 100)("readonly", ctx_r0.viewOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.blogVideoForm.get("subject").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readOnly", ctx_r0.viewOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("label", "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 27, "ATTACHMENTS.MAIN_VIDEO"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("supportType", "video")("maxLength", 1)("minLength", 1)("readOnly", ctx_r0.viewOnly)("flags", "MainMedia");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("label", "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 29, "ATTACHMENTS.COVER_IMAGE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("imagesType", "image/*")("supportType", "image")("maxLength", 1)("readOnly", ctx_r0.viewOnly)("flags", "CoverImage");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r0.viewOnly)("disabled", ctx_r0.blogVideoForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 31, ctx_r0.blogVideo.id ? "SHARED.SAVE_CHANGES" : "SHARED.ADD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r0.viewOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 33, "SHARED.CANCEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.blogVideo.id);
  }
}

let BlogVideoDetailsComponent = class BlogVideoDetailsComponent {
  constructor(activatedRoute, formBuilder, store, blogVideoService, router) {
    this.activatedRoute = activatedRoute;
    this.formBuilder = formBuilder;
    this.store = store;
    this.blogVideoService = blogVideoService;
    this.router = router;
    this.viewOnly = false;
  }

  ngOnInit() {
    this.initializeBlogVideo();
    this.blogVideo$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this)).subscribe(details => {
      if (!details) return;
      this.viewOnly = false;
      this.blogVideo = Object.assign(Object.assign({}, details), {
        coverImage: details.coverImage.map(m => new _core_shared__WEBPACK_IMPORTED_MODULE_4__.Media(m)),
        mainVideo: details.mainVideo.map(m => new _core_shared__WEBPACK_IMPORTED_MODULE_4__.Media(m))
      });
      this.initializeFrom();
      this.blogVideoForm.markAsPristine();
      this.blogVideoForm.markAsUntouched();
    });
  }

  initializeBlogVideo() {
    this.activatedRoute.params.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this)).subscribe(params => {
      const id = params['id'];
      this.loadBlogVideo(id);
    });
  }

  initializeFrom() {
    var _a, _b, _c, _d, _e;

    if (this.blogVideoForm) {
      this.blogVideoForm.controls['subject'].setValue((_a = this.blogVideo) === null || _a === void 0 ? void 0 : _a.subject);
      this.blogVideoForm.controls['mainVideo'].setValue((_b = this.blogVideo) === null || _b === void 0 ? void 0 : _b.mainVideo);
      this.blogVideoForm.controls['coverImage'].setValue((_c = this.blogVideo) === null || _c === void 0 ? void 0 : _c.coverImage);
      this.blogVideoForm.controls['tag'].setValue((_d = this.blogVideo) === null || _d === void 0 ? void 0 : _d.tag);
      return;
    }

    this.blogVideoForm = this.formBuilder.group({
      subject: this.formBuilder.control((_e = this.blogVideo) === null || _e === void 0 ? void 0 : _e.subject, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(100)]),
      mainVideo: this.formBuilder.control(this.blogVideo.mainVideo, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
      coverImage: this.formBuilder.control(this.blogVideo.coverImage),
      tag: this.formBuilder.control(this.blogVideo.tag, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required)
    });
  }

  submit() {
    var _this = this;

    const model = _core_blog_videos__WEBPACK_IMPORTED_MODULE_2__.BlogVideoParser.toModel(this.blogVideoForm.value);
    const data = {
      subject: model.subject,
      media: model.media,
      tagId: model.tag.id,
      id: this.blogVideo.id
    };

    if (this.blogVideo.id) {
      this.blogVideoService.edit(data).pipe().subscribe(res => this.loadBlogVideo(this.blogVideo.id));
      return;
    }

    this.blogVideoService.post(data).pipe().subscribe( /*#__PURE__*/function () {
      var _ref = (0,F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        yield _this.router.navigateByUrl('blog-videos/edit/' + res.data);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  cancelEditing() {
    this.loadBlogVideo(this.blogVideo.id);

    if (this.blogVideo.id) {
      this.viewOnly = false;
    }
  }

  delete() {
    this.blogVideoService.delete(this.blogVideo.id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this)).subscribe(() => this.router.navigateByUrl('blog-videos'));
  }

  loadBlogVideo(id) {
    if (!id) {
      this.blogVideo = new _core_blog_videos__WEBPACK_IMPORTED_MODULE_2__.BLogVideoDetailsViewModel();
      this.initializeFrom();
      this.blogVideoForm.markAsPristine();
      this.blogVideoForm.markAsUntouched();
      return;
    }

    this.store.dispatch(new _core_store_blog_videos_blog_videos_actions__WEBPACK_IMPORTED_MODULE_3__.BlogVideosActions.LoadBlogVideosDetails(id));
  }

};

BlogVideoDetailsComponent.ɵfac = function BlogVideoDetailsComponent_Factory(t) {
  return new (t || BlogVideoDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_blog_videos__WEBPACK_IMPORTED_MODULE_2__.BlogVideoService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
};

BlogVideoDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: BlogVideoDetailsComponent,
  selectors: [["app-blog-video-details"]],
  decls: 1,
  vars: 1,
  consts: [["class", "p-3 bg-white mat-elevation-z8", 4, "ngIf"], [1, "p-3", "bg-white", "mat-elevation-z8"], [1, "d-flex", "justify-content-start"], [1, "flex-grow-1"], [4, "ngIf"], [1, "w-100", "d-flex", "flex-column", "justify-content-center", "align-items-start", "flex-wrap", "flex-xl-fill", 3, "formGroup"], [1, "w-100", "d-flex", "justify-content-center", "align-items-center"], [1, "my-1", "w-100", "flex-grow-1", "margin-end-2"], ["matInput", "", "type", "text", "formControlName", "subject", 3, "maxLength", "readonly"], ["formControlName", "tag", 1, "my-1", "w-100", 3, "readOnly"], ["tag", ""], ["formControlName", "mainVideo", 1, "my-1", "w-100", 3, "supportType", "label", "maxLength", "minLength", "readOnly", "flags"], ["formControlName", "coverImage", 1, "my-1", "w-100", 3, "imagesType", "supportType", "maxLength", "label", "readOnly", "flags"], [1, "w-50", "d-flex"], ["mat-flat-button", "", "color", "primary", 3, "hidden", "disabled", "click"], ["mat-stroked-button", "", "color", "primary", 1, "margin-start-1", 3, "hidden", "click"], ["class", "margin-start-1", "mat-flat-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["class", "d-flex justify-content-end", 4, "ngxPermissionsOnly"], [1, "d-flex", "justify-content-end"], [1, "icon-container", 3, "matMenuTriggerFor"], [1, "fa-solid", "fa-ellipsis-vertical"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngxPermissionsOnly"], ["mat-menu-item", "", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "margin-start-1", 3, "click"]],
  template: function BlogVideoDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, BlogVideoDetailsComponent_div_0_Template, 27, 35, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.blogVideo);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ngx_permissions__WEBPACK_IMPORTED_MODULE_12__.NgxPermissionsDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuItem, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError, _blog_tag_blog_tag_component__WEBPACK_IMPORTED_MODULE_5__.BLogTagComponent, _shared_attachment_attachment_component__WEBPACK_IMPORTED_MODULE_6__.AttachmentComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
  styles: [".mat-flat-button[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.edit[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.icon-container[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.icon-container[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2ctdmlkZW8tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBQ0U7RUFDRSxvQ0FBQTtBQUNKIiwiZmlsZSI6ImJsb2ctdmlkZW8tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZmxhdC1idXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5lZGl0IHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmljb24tY29udGFpbmVyIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
});

(0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Select)(state => state.blogVideos.lastLoadedBlogVideo)], BlogVideoDetailsComponent.prototype, "blogVideo$", void 0);

BlogVideoDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)()], BlogVideoDetailsComponent);


/***/ }),

/***/ 43906:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/blog-videos/blog-videos-list/blog-videos-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogVideosListComponent": () => (/* binding */ BlogVideosListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _core_shared_models_paged_list_query_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/models/paged-list-query.model */ 3654);
/* harmony import */ var _core_store_blog_videos_blog_videos_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/store/blog-videos/blog-videos.actions */ 6612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/list-header/list-header.component */ 29813);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _shared_no_data_placeholder_no_data_placeholder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/no-data-placeholder/no-data-placeholder.component */ 30947);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 33935);

















function BlogVideosListComponent_div_4_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "BLOG_VIDEOS.SUBJECT"), " ");
  }
}

function BlogVideosListComponent_div_4_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r11.subject, " ");
  }
}

function BlogVideosListComponent_div_4_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "BLOG_VIDEOS.TAG"), " ");
  }
}

function BlogVideosListComponent_div_4_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 15)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", element_r12.tag.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r12.tag.name, " ");
  }
}

function BlogVideosListComponent_div_4_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "SHARED.CREATED"), " ");
  }
}

function BlogVideosListComponent_div_4_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, element_r13.created, "dd-MM-YYYY"), " ");
  }
}

function BlogVideosListComponent_div_4_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 17);
  }
}

function BlogVideosListComponent_div_4_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogVideosListComponent_div_4_tr_12_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const row_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r15.router.navigateByUrl("/blog-videos/edit/" + row_r14.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function BlogVideosListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, BlogVideosListComponent_div_4_th_3_Template, 3, 3, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, BlogVideosListComponent_div_4_td_4_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](5, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, BlogVideosListComponent_div_4_th_6_Template, 3, 3, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, BlogVideosListComponent_div_4_td_7_Template, 3, 3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](8, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, BlogVideosListComponent_div_4_th_9_Template, 3, 3, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, BlogVideosListComponent_div_4_td_10_Template, 3, 4, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, BlogVideosListComponent_div_4_tr_11_Template, 1, 0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, BlogVideosListComponent_div_4_tr_12_Template, 1, 0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app-no-data-placeholder", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const blogVideos_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", blogVideos_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", blogVideos_r2);
  }
}

const _c0 = function () {
  return [1, 5, 10, 25, 100];
};

let BlogVideosListComponent = class BlogVideosListComponent {
  constructor(router, store) {
    this.router = router;
    this.store = store;
    this.displayedColumns = ['title', 'tag', 'createdAt'];
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }

  ngOnInit() {
    this.loadBlogVideos();
  }

  ngAfterViewInit() {
    this.search$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(150)).subscribe(searchTerm => {
      this.searchWord = searchTerm;
      this.paginator.pageIndex = 0;
      this.loadBlogVideos();
    });
  }

  loadBlogVideos() {
    this.store.dispatch(new _core_store_blog_videos_blog_videos_actions__WEBPACK_IMPORTED_MODULE_2__.BlogVideosActions.LoadBlogVideosPage(this.prepareQueryParams()));
  }

  prepareQueryParams() {
    return new _core_shared_models_paged_list_query_model__WEBPACK_IMPORTED_MODULE_1__.PagedListQueryModel({
      pageNumber: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      searchWord: this.searchWord
    });
  }

};

BlogVideosListComponent.ɵfac = function BlogVideosListComponent_Factory(t) {
  return new (t || BlogVideosListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store));
};

BlogVideosListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: BlogVideosListComponent,
  selectors: [["app-blog-videos-list"]],
  viewQuery: function BlogVideosListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    }
  },
  decls: 9,
  vars: 16,
  consts: [[1, "mat-elevation-z8", "list-container"], [3, "permissions", "searchTerm", "withAddButton", "headerTitle", "addClicked"], [4, "ngIf"], [3, "length", "pageSize", "pageSizeOptions", "showFirstLastButtons", "page"], ["paginator", ""], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "tag"], ["matColumnDef", "createdAt"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "mat-row-hover", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["classes", "my-3", 3, "data"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "tag-preview"], ["mat-header-row", ""], ["mat-row", "", 1, "mat-row-hover", 3, "click"]],
  template: function BlogVideosListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "app-list-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("addClicked", function BlogVideosListComponent_Template_app_list_header_addClicked_2_listener() {
        return ctx.router.navigateByUrl("blog-videos/add");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, BlogVideosListComponent_div_4_Template, 14, 4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-paginator", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function BlogVideosListComponent_Template_mat_paginator_page_6_listener() {
        return ctx.loadBlogVideos();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 9, "BLOG_VIDEOS.NAV_TITLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("permissions", "canCreateBlogs")("searchTerm", ctx.search$)("withAddButton", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 11, ctx.blogVideos$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 13, ctx.totalRows$))("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c0))("showFirstLastButtons", true);
    }
  },
  directives: [_shared_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_3__.ListHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _shared_no_data_placeholder_no_data_placeholder_component__WEBPACK_IMPORTED_MODULE_4__.NoDataPlaceholderComponent, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
  styles: [".mat-header-cell[_ngcontent-%COMP%] {\n  background: #2a3042;\n  color: white;\n}\n\n.mat-column-profileImage[_ngcontent-%COMP%] {\n  width: 70px;\n}\n\n.profile-image-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.profile-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 20px;\n}\n\n.mat-column-title[_ngcontent-%COMP%] {\n  max-width: 8rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.list-container[_ngcontent-%COMP%] {\n  background: white;\n  max-width: 100%;\n  margin: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2ctdmlkZW9zLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUdGOztBQUZFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFHRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLFlBQUE7QUFFRiIsImZpbGUiOiJibG9nLXZpZGVvcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgYmFja2dyb3VuZDogIzJhMzA0MjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdC1jb2x1bW4tcHJvZmlsZUltYWdlIHtcclxuICB3aWR0aDogNzBweDtcclxufVxyXG4ucHJvZmlsZS1pbWFnZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1hdC1jb2x1bW4tdGl0bGUge1xyXG4gIG1heC13aWR0aDogOHJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4ubGlzdC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICAvL3BhZGRpbmc6IDAgMXJlbTtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuIl19 */"]
});

(0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(state => state.blogVideos.blogVideosPage)], BlogVideosListComponent.prototype, "blogVideos$", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(state => {
  var _a;

  return (_a = state.blogVideos) === null || _a === void 0 ? void 0 : _a.totalRows;
})], BlogVideosListComponent.prototype, "totalRows$", void 0);

BlogVideosListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)()], BlogVideosListComponent);


/***/ }),

/***/ 3289:
/*!*********************************************************!*\
  !*** ./src/app/pages/blog-videos/blog-videos.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogVideosModule": () => (/* binding */ BlogVideosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _blog_videos_list_blog_videos_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-videos-list/blog-videos-list.component */ 43906);
/* harmony import */ var _blog_video_details_blog_video_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-video-details/blog-video-details.component */ 79747);
/* harmony import */ var _blog_videos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-videos.routing.module */ 34342);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 40950);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _blog_tag_blog_tag_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blog-tag/blog-tag.module */ 96060);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _core_blog_videos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/blog-videos */ 55666);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _core_store_blog_videos_blog_videos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/store/blog-videos/blog-videos */ 64068);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);



















class BlogVideosModule {
}
BlogVideosModule.ɵfac = function BlogVideosModule_Factory(t) { return new (t || BlogVideosModule)(); };
BlogVideosModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: BlogVideosModule });
BlogVideosModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_core_blog_videos__WEBPACK_IMPORTED_MODULE_5__.BlogVideoService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _blog_videos_routing_module__WEBPACK_IMPORTED_MODULE_2__.BlogVideosRoutingModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
            _blog_tag_blog_tag_module__WEBPACK_IMPORTED_MODULE_4__.BlogTagModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
            _ngxs_store__WEBPACK_IMPORTED_MODULE_6__.NgxsModule.forFeature([_core_store_blog_videos_blog_videos__WEBPACK_IMPORTED_MODULE_7__.BlogVideosState]),
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
            ngx_permissions__WEBPACK_IMPORTED_MODULE_17__.NgxPermissionsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](BlogVideosModule, { declarations: [_blog_videos_list_blog_videos_list_component__WEBPACK_IMPORTED_MODULE_0__.BlogVideosListComponent, _blog_video_details_blog_video_details_component__WEBPACK_IMPORTED_MODULE_1__.BlogVideoDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _blog_videos_routing_module__WEBPACK_IMPORTED_MODULE_2__.BlogVideosRoutingModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _blog_tag_blog_tag_module__WEBPACK_IMPORTED_MODULE_4__.BlogTagModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["ɵz"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
        ngx_permissions__WEBPACK_IMPORTED_MODULE_17__.NgxPermissionsModule] }); })();


/***/ }),

/***/ 34342:
/*!*****************************************************************!*\
  !*** ./src/app/pages/blog-videos/blog-videos.routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogVideosRoutingModule": () => (/* binding */ BlogVideosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _blog_videos_list_blog_videos_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-videos-list/blog-videos-list.component */ 43906);
/* harmony import */ var _blog_video_details_blog_video_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-video-details/blog-video-details.component */ 79747);
/* harmony import */ var _core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/shared/guards/permission-guard.service */ 97226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: '',
        component: _blog_videos_list_blog_videos_list_component__WEBPACK_IMPORTED_MODULE_0__.BlogVideosListComponent,
        canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__.PermissionGuard],
        data: { permission: 'canViewBlogs' },
    },
    {
        path: 'add',
        component: _blog_video_details_blog_video_details_component__WEBPACK_IMPORTED_MODULE_1__.BlogVideoDetailsComponent,
        canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__.PermissionGuard],
        data: { permission: 'canCreateBlogs' },
    },
    {
        path: 'edit/:id',
        component: _blog_video_details_blog_video_details_component__WEBPACK_IMPORTED_MODULE_1__.BlogVideoDetailsComponent,
        canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__.PermissionGuard],
        data: { permission: 'canEditBlogs' },
    },
];
class BlogVideosRoutingModule {
}
BlogVideosRoutingModule.ɵfac = function BlogVideosRoutingModule_Factory(t) { return new (t || BlogVideosRoutingModule)(); };
BlogVideosRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BlogVideosRoutingModule });
BlogVideosRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BlogVideosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_blog-videos_blog-videos_module_ts.js.map