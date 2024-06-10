"use strict";
(self["webpackChunknutrisha_admin"] = self["webpackChunknutrisha_admin"] || []).push([["src_app_pages_articles_article_module_ts"],{

/***/ 65615:
/*!****************************************!*\
  !*** ./src/app/core/articles/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleDetailsModel": () => (/* reexport safe */ _models_article_details_models__WEBPACK_IMPORTED_MODULE_0__.ArticleDetailsModel),
/* harmony export */   "ArticleService": () => (/* reexport safe */ _services_article_service__WEBPACK_IMPORTED_MODULE_1__.ArticleService)
/* harmony export */ });
/* harmony import */ var _models_article_details_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/article-details.models */ 48610);
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/article.service */ 54439);




/***/ }),

/***/ 48610:
/*!****************************************************************!*\
  !*** ./src/app/core/articles/models/article-details.models.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleDetailsModel": () => (/* binding */ ArticleDetailsModel)
/* harmony export */ });
class ArticleDetailsModel {
}


/***/ }),

/***/ 77251:
/*!********************************************************!*\
  !*** ./src/app/core/articles/parser/article.parser.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleParser": () => (/* binding */ ArticleParser)
/* harmony export */ });
/* harmony import */ var _view_models_article_details_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view-models/article-details.view.model */ 87155);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared */ 8268);


class ArticleParser {
    static toViewModel(model) {
        const viewModel = new _view_models_article_details_view_model__WEBPACK_IMPORTED_MODULE_0__.ArticleDetailsViewModel();
        Object.assign(viewModel, model);
        viewModel.coverImage = _shared__WEBPACK_IMPORTED_MODULE_1__.Media.getMediaByFlag(model.media, 'CoverImage');
        viewModel.additionalMedia = _shared__WEBPACK_IMPORTED_MODULE_1__.Media.excludeMediaWithFlag(model.media, 'CoverImage');
        return viewModel;
    }
}


/***/ }),

/***/ 54439:
/*!***********************************************************!*\
  !*** ./src/app/core/articles/services/article.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleService": () => (/* binding */ ArticleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ 8268);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





const articleAPI = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseAdminV1Url + 'Article';
class ArticleService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getPagedList(queryParams) {
        return this.httpClient.get(articleAPI + '/getPagedList', {
            params: _shared__WEBPACK_IMPORTED_MODULE_0__.HttpUtilsService.prepareGetPagedListQueryParams(queryParams),
        });
    }
    getById(id) {
        return this.httpClient.get(`${articleAPI}/GetById?id=${id}`);
    }
    delete(id) {
        return this.httpClient.put(`${articleAPI}/Delete?id=${id}`, {});
    }
    post(body) {
        const formData = new FormData();
        formData.append('subject', body.subject);
        formData.append('tagId', body.tagId);
        _shared__WEBPACK_IMPORTED_MODULE_0__.HttpUtilsService.appendMediaToForm(formData, body.media);
        _shared__WEBPACK_IMPORTED_MODULE_0__.HttpUtilsService.appendLocalizedObjectToForm(formData, 'description', body.description);
        return this.httpClient
            .post(articleAPI + '/post', formData, {
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
        _shared__WEBPACK_IMPORTED_MODULE_0__.HttpUtilsService.appendLocalizedObjectToForm(formData, 'description', body.description);
        return this.httpClient
            .put(articleAPI + '/put', formData, {
            observe: 'events',
            reportProgress: true,
        })
            .pipe(_shared__WEBPACK_IMPORTED_MODULE_0__.HttpUtilsService.handleUploadProgress(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((result) => result.body));
    }
}
ArticleService.ɵfac = function ArticleService_Factory(t) { return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
ArticleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ArticleService, factory: ArticleService.ɵfac });


/***/ }),

/***/ 87155:
/*!*************************************************************************!*\
  !*** ./src/app/core/articles/view-models/article-details.view.model.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleDetailsViewModel": () => (/* binding */ ArticleDetailsViewModel)
/* harmony export */ });
class ArticleDetailsViewModel {
}


/***/ }),

/***/ 36038:
/*!****************************************!*\
  !*** ./src/app/core/comments/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentService": () => (/* reexport safe */ _services_comment_service__WEBPACK_IMPORTED_MODULE_1__.CommentService)
/* harmony export */ });
/* harmony import */ var _models_comment_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/comment.model */ 8883);
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/comment.service */ 58871);




/***/ }),

/***/ 8883:
/*!*******************************************************!*\
  !*** ./src/app/core/comments/models/comment.model.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 58871:
/*!***********************************************************!*\
  !*** ./src/app/core/comments/services/comment.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentService": () => (/* binding */ CommentService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _shared_services_http_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/http-utils.service */ 50864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);




const commentApiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseAdminV1Url + 'Comment';
class CommentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getPagedList(pagedListQueryModel) {
        return this.httpClient.get(commentApiUrl + '/GetPagedList', {
            params: _shared_services_http_utils_service__WEBPACK_IMPORTED_MODULE_1__.HttpUtilsService.prepareGetPagedListQueryParams(pagedListQueryModel),
        });
    }
    delete(id) {
        return this.httpClient.delete(commentApiUrl + '/Delete', {
            params: {
                id: id,
            },
        });
    }
}
CommentService.ɵfac = function CommentService_Factory(t) { return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
CommentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CommentService, factory: CommentService.ɵfac });


/***/ }),

/***/ 54651:
/*!*********************************************************!*\
  !*** ./src/app/core/store/articles/articles.actions.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesActions": () => (/* binding */ ArticlesActions)
/* harmony export */ });
var ArticlesActions;
(function (ArticlesActions) {
    class LoadArticles {
        constructor(queryParams) {
            this.queryParams = queryParams;
        }
    }
    LoadArticles.type = "[Articles] Load Articles";
    ArticlesActions.LoadArticles = LoadArticles;
    class LoadArticleDetails {
        constructor(id) {
            this.id = id;
        }
    }
    LoadArticleDetails.type = "[Articles] Load Article Details";
    ArticlesActions.LoadArticleDetails = LoadArticleDetails;
})(ArticlesActions || (ArticlesActions = {}));


/***/ }),

/***/ 81089:
/*!*******************************************************!*\
  !*** ./src/app/core/store/articles/articles.state.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleState": () => (/* binding */ ArticleState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _articles_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles.actions */ 54651);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _articles_parser_article_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../articles/parser/article.parser */ 77251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _articles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../articles */ 65615);







let ArticleState = class ArticleState {
    constructor(articleService) {
        this.articleService = articleService;
    }
    getPagedList(ctx, action) {
        return this.articleService.getPagedList(action.queryParams).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)((result) => {
            const data = result.data;
            ctx.setState(Object.assign(Object.assign({}, ctx.getState()), { articlesPage: data, totalRows: result.totalRows, lastLoadedArticle: undefined }));
        }));
    }
    getById(ctx, action) {
        return this.articleService.getById(action.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)((result) => {
            const data = result.data;
            ctx.setState(Object.assign(Object.assign({}, ctx.getState()), { lastLoadedArticle: _articles_parser_article_parser__WEBPACK_IMPORTED_MODULE_2__.ArticleParser.toViewModel(data) }));
        }));
    }
};
ArticleState.ɵfac = function ArticleState_Factory(t) { return new (t || ArticleState)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_articles__WEBPACK_IMPORTED_MODULE_3__.ArticleService)); };
ArticleState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ArticleState, factory: ArticleState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_articles_actions__WEBPACK_IMPORTED_MODULE_1__.ArticlesActions.LoadArticles)
], ArticleState.prototype, "getPagedList", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_articles_actions__WEBPACK_IMPORTED_MODULE_1__.ArticlesActions.LoadArticleDetails)
], ArticleState.prototype, "getById", null);
ArticleState = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'articles',
    })
], ArticleState);



/***/ }),

/***/ 12192:
/*!**************************************************!*\
  !*** ./src/app/pages/articles/article.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleModule": () => (/* binding */ ArticleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/material */ 56993);
/* harmony import */ var _base_articles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/articles.component */ 67524);
/* harmony import */ var _articles_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articles-routing.module */ 28121);
/* harmony import */ var _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-article/create-article.component */ 12083);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _shared_rich_text_rich_text_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/rich-text/rich-text.module */ 43780);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ 40950);
/* harmony import */ var _articles_list_articles_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./articles-list/articles-list.component */ 91999);
/* harmony import */ var _core_articles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/articles */ 65615);
/* harmony import */ var _blog_tag_blog_tag_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blog-tag/blog-tag.module */ 96060);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _core_store_articles_articles_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/store/articles/articles.state */ 81089);
/* harmony import */ var _comments_comments_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../comments/comments.module */ 58181);
/* harmony import */ var _shared_media_players_media_player_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/media-players/media-player.module */ 6680);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);





















class ArticleModule {
}
ArticleModule.ɵfac = function ArticleModule_Factory(t) { return new (t || ArticleModule)(); };
ArticleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: ArticleModule });
ArticleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [_core_articles__WEBPACK_IMPORTED_MODULE_7__.ArticleService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _shared_material__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
            _articles_routing_module__WEBPACK_IMPORTED_MODULE_2__.ArticlesRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule.forChild(),
            _shared_rich_text_rich_text_module__WEBPACK_IMPORTED_MODULE_4__.RichTextModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            _blog_tag_blog_tag_module__WEBPACK_IMPORTED_MODULE_8__.BlogTagModule,
            _ngxs_store__WEBPACK_IMPORTED_MODULE_9__.NgxsModule.forFeature([_core_store_articles_articles_state__WEBPACK_IMPORTED_MODULE_10__.ArticleState]),
            _comments_comments_module__WEBPACK_IMPORTED_MODULE_11__.CommentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _shared_media_players_media_player_module__WEBPACK_IMPORTED_MODULE_12__.MediaPlayerModule,
            ngx_permissions__WEBPACK_IMPORTED_MODULE_17__.NgxPermissionsModule.forChild(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ArticleModule, { declarations: [_base_articles_component__WEBPACK_IMPORTED_MODULE_1__.ArticlesComponent,
        _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_3__.CreateArticleComponent,
        _articles_list_articles_list_component__WEBPACK_IMPORTED_MODULE_6__.ArticlesListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _shared_material__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _articles_routing_module__WEBPACK_IMPORTED_MODULE_2__.ArticlesRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _shared_rich_text_rich_text_module__WEBPACK_IMPORTED_MODULE_4__.RichTextModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _blog_tag_blog_tag_module__WEBPACK_IMPORTED_MODULE_8__.BlogTagModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_9__["ɵz"], _comments_comments_module__WEBPACK_IMPORTED_MODULE_11__.CommentsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _shared_media_players_media_player_module__WEBPACK_IMPORTED_MODULE_12__.MediaPlayerModule, ngx_permissions__WEBPACK_IMPORTED_MODULE_17__.NgxPermissionsModule] }); })();


/***/ }),

/***/ 91999:
/*!*************************************************************************!*\
  !*** ./src/app/pages/articles/articles-list/articles-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesListComponent": () => (/* binding */ ArticlesListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared */ 8268);
/* harmony import */ var _core_store_articles_articles_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/store/articles/articles.actions */ 54651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/list-header/list-header.component */ 29813);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _shared_no_data_placeholder_no_data_placeholder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/no-data-placeholder/no-data-placeholder.component */ 30947);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 33935);

















function ArticlesListComponent_div_4_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ARTICLES.SUBJECT"), " ");
  }
}

function ArticlesListComponent_div_4_td_4_Template(rf, ctx) {
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

function ArticlesListComponent_div_4_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ARTICLES.TAG"), " ");
  }
}

function ArticlesListComponent_div_4_td_7_Template(rf, ctx) {
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

function ArticlesListComponent_div_4_th_9_Template(rf, ctx) {
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

function ArticlesListComponent_div_4_td_10_Template(rf, ctx) {
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

function ArticlesListComponent_div_4_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 17);
  }
}

function ArticlesListComponent_div_4_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ArticlesListComponent_div_4_tr_12_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const row_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r15.router.navigateByUrl("/articles/edit/" + row_r14.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function ArticlesListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ArticlesListComponent_div_4_th_3_Template, 3, 3, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ArticlesListComponent_div_4_td_4_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](5, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ArticlesListComponent_div_4_th_6_Template, 3, 3, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ArticlesListComponent_div_4_td_7_Template, 3, 3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](8, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ArticlesListComponent_div_4_th_9_Template, 3, 3, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ArticlesListComponent_div_4_td_10_Template, 3, 4, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ArticlesListComponent_div_4_tr_11_Template, 1, 0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ArticlesListComponent_div_4_tr_12_Template, 1, 0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app-no-data-placeholder", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const articles_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", articles_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", articles_r2);
  }
}

const _c0 = function () {
  return [1, 5, 10, 25, 100];
};

let ArticlesListComponent = class ArticlesListComponent {
  constructor(router, store) {
    this.router = router;
    this.store = store;
    this.displayedColumns = ['title', 'tag', 'createdAt'];
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }

  ngOnInit() {
    this.loadArticles();
  }

  ngAfterViewInit() {
    this.search$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(150)).subscribe(searchTerm => {
      this.searchWord = searchTerm;
      this.paginator.pageIndex = 0;
      this.loadArticles();
    });
  }

  loadArticles() {
    this.store.dispatch(new _core_store_articles_articles_actions__WEBPACK_IMPORTED_MODULE_2__.ArticlesActions.LoadArticles(this.prepareQueryParams()));
  }

  prepareQueryParams() {
    return new _core_shared__WEBPACK_IMPORTED_MODULE_1__.PagedListQueryModel({
      pageNumber: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      searchWord: this.searchWord
    });
  }

};

ArticlesListComponent.ɵfac = function ArticlesListComponent_Factory(t) {
  return new (t || ArticlesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store));
};

ArticlesListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ArticlesListComponent,
  selectors: [["app-articles-list"]],
  viewQuery: function ArticlesListComponent_Query(rf, ctx) {
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
  template: function ArticlesListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "app-list-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("addClicked", function ArticlesListComponent_Template_app_list_header_addClicked_2_listener() {
        return ctx.router.navigateByUrl("articles/add");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ArticlesListComponent_div_4_Template, 14, 4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-paginator", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function ArticlesListComponent_Template_mat_paginator_page_6_listener() {
        return ctx.loadArticles();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("headerTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 9, "ARTICLES.NAV_TITLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("permissions", "canCreateBlogs")("searchTerm", ctx.search$)("withAddButton", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 11, ctx.articles$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 13, ctx.totalRows$))("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c0))("showFirstLastButtons", true);
    }
  },
  directives: [_shared_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_3__.ListHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _shared_no_data_placeholder_no_data_placeholder_component__WEBPACK_IMPORTED_MODULE_4__.NoDataPlaceholderComponent, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
  styles: [".mat-header-cell[_ngcontent-%COMP%] {\n  background: #2a3042;\n  color: white;\n}\n\n.mat-column-title[_ngcontent-%COMP%] {\n  max-width: 8rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.article-cover-image[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.article-cover-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100px;\n  border-radius: 5px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBREU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFHSiIsImZpbGUiOiJhcnRpY2xlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgYmFja2dyb3VuZDogIzJhMzA0MjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdC1jb2x1bW4tdGl0bGUge1xyXG4gIG1heC13aWR0aDogOHJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1jb3Zlci1pbWFnZSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gICYgaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbn1cclxuIl19 */"]
});

(0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(state => state.articles.articlesPage)], ArticlesListComponent.prototype, "articles$", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(state => {
  var _a;

  return (_a = state.articles) === null || _a === void 0 ? void 0 : _a.totalRows;
})], ArticlesListComponent.prototype, "totalRows$", void 0);

ArticlesListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)()], ArticlesListComponent);


/***/ }),

/***/ 28121:
/*!***********************************************************!*\
  !*** ./src/app/pages/articles/articles-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesRoutingModule": () => (/* binding */ ArticlesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-article/create-article.component */ 12083);
/* harmony import */ var _base_articles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/articles.component */ 67524);
/* harmony import */ var _articles_list_articles_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articles-list/articles-list.component */ 91999);
/* harmony import */ var _core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shared/guards/permission-guard.service */ 97226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    {
        path: '',
        component: _base_articles_component__WEBPACK_IMPORTED_MODULE_1__.ArticlesComponent,
        children: [
            {
                path: '',
                component: _articles_list_articles_list_component__WEBPACK_IMPORTED_MODULE_2__.ArticlesListComponent,
                canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__.PermissionGuard],
                data: { permission: 'canViewBlogs' },
            },
            {
                path: 'add',
                canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__.PermissionGuard],
                data: { permission: 'canCreateBlogs' },
                component: _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_0__.CreateArticleComponent,
            },
            {
                path: 'edit/:id',
                component: _create_article_create_article_component__WEBPACK_IMPORTED_MODULE_0__.CreateArticleComponent,
                canActivate: [_core_shared_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__.PermissionGuard],
                data: { permission: 'canEditBlogs' },
            },
        ],
    },
];
class ArticlesRoutingModule {
}
ArticlesRoutingModule.ɵfac = function ArticlesRoutingModule_Factory(t) { return new (t || ArticlesRoutingModule)(); };
ArticlesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ArticlesRoutingModule });
ArticlesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ArticlesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 67524:
/*!***********************************************************!*\
  !*** ./src/app/pages/articles/base/articles.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesComponent": () => (/* binding */ ArticlesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_shared_services_nav_header_title_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared/services/nav-header-title.service */ 98798);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);



class ArticlesComponent {
    constructor(navHeaderTitleService) {
        this.navHeaderTitleService = navHeaderTitleService;
    }
    ngOnInit() {
        this.navHeaderTitleService.setTitle('ARTICLES.NAV_TITLE');
    }
}
ArticlesComponent.ɵfac = function ArticlesComponent_Factory(t) { return new (t || ArticlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_shared_services_nav_header_title_service__WEBPACK_IMPORTED_MODULE_0__.NavHeaderTitleService)); };
ArticlesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArticlesComponent, selectors: [["app-articles"]], decls: 1, vars: 0, template: function ArticlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 12083:
/*!***************************************************************************!*\
  !*** ./src/app/pages/articles/create-article/create-article.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateArticleComponent": () => (/* binding */ CreateArticleComponent)
/* harmony export */ });
/* harmony import */ var F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _core_store_articles_articles_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/store/articles/articles.actions */ 54651);
/* harmony import */ var _core_articles_view_models_article_details_view_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/articles/view-models/article-details.view.model */ 87155);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/shared */ 8268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_articles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/articles */ 65615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _shared_directives_profile_image_profile_image_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/directives/profile-image/profile-image.directive */ 13468);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _blog_tag_blog_tag_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blog-tag/blog-tag.component */ 95618);
/* harmony import */ var _shared_rich_text_rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/rich-text/rich-text/rich-text.component */ 32608);
/* harmony import */ var _shared_attachment_attachment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/attachment/attachment.component */ 39503);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _comments_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../comments/comments-list/comments-list.component */ 77983);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 33935);


























function CreateArticleComponent_div_0_div_3_div_1_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CreateArticleComponent_div_0_div_3_div_1_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return ctx_r13.delete();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "SHARED.DELETE"), " ");
  }
}

function CreateArticleComponent_div_0_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-menu", null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, CreateArticleComponent_div_0_div_3_div_1_button_5_Template, 3, 3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matMenuTriggerFor", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngxPermissionsOnly", "canDeleteArticles");
  }
}

const _c0 = function () {
  return ["canEditArticles", "canDeleteArticles"];
};

function CreateArticleComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CreateArticleComponent_div_0_div_3_div_1_Template, 6, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](1, _c0));
  }
}

function CreateArticleComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div", 30)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div")(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("imageUrl", ctx_r2.article.owner.profileImage)("circularWidth", 60)("alt", ctx_r2.article.owner.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", (tmp_3_0 = ctx_r2.article.owner.name) !== null && tmp_3_0 !== undefined ? tmp_3_0 : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 9, "SHARED.NOT_AVAILABLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](9, 11, ctx_r2.article.created, "short"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](13, 14, "SOCIAL.LIKES"), ": ", ctx_r2.article.totals.likes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](16, 16, "SOCIAL.COMMENTS"), ": ", ctx_r2.article.totals.comments, " ");
  }
}

function CreateArticleComponent_div_0_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "VALIDATION_ERRORS.REQUIRED"));
  }
}

function CreateArticleComponent_div_0_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CreateArticleComponent_div_0_button_33_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r15.submit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx_r7.viewOnly)("disabled", ctx_r7.articleForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 3, ctx_r7.article.id ? "SHARED.SAVE_CHANGES" : "SHARED.ADD"), " ");
  }
}

function CreateArticleComponent_div_0_div_37_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CreateArticleComponent_div_0_div_37_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return ctx_r18.delete();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "SHARED.DELETE"), " ");
  }
}

function CreateArticleComponent_div_0_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CreateArticleComponent_div_0_div_37_button_1_Template, 3, 3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r8.article.id);
  }
}

function CreateArticleComponent_div_0_div_38_app_comments_list_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-comments-list", 38);
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("entityId", ctx_r20.article.id);
  }
}

function CreateArticleComponent_div_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CreateArticleComponent_div_0_div_38_app_comments_list_1_Template, 1, 1, "app-comments-list", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r9.article.id);
  }
}

function CreateArticleComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, CreateArticleComponent_div_0_div_3_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, CreateArticleComponent_div_0_div_4_Template, 17, 18, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CreateArticleComponent_div_0_Template_button_click_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      $event.preventDefault();
      return ctx_r21.selectedLang = "en";
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CreateArticleComponent_div_0_Template_button_click_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      $event.preventDefault();
      return ctx_r23.selectedLang = "ar";
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "form", 8)(17, "mat-form-field", 9)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, CreateArticleComponent_div_0_span_23_Template, 3, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "app-blog-tag", 11, 12)(26, "app-rich-text", 13, 14)(28, "app-attachment", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](31, "app-attachment", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, CreateArticleComponent_div_0_button_33_Template, 3, 5, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CreateArticleComponent_div_0_Template_button_click_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r22);

      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](27);

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](25);

      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](29);

      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      $event.preventDefault();

      _r5.clear();

      _r4.clear();

      _r6.clear();

      return ctx_r24.cancelEditing();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](37, CreateArticleComponent_div_0_div_37_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](38, CreateArticleComponent_div_0_div_38_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.viewOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.article.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 30, "SHARED.SELECT_LANGUAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r0.selectedLang == "en" ? "langSelected" : "lang-not-selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 32, "LANGUAGES.ENGLISH_CODE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r0.selectedLang == "ar" ? "langSelected" : "lang-not-selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](15, 34, "LANGUAGES.ARABIC_CODE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.articleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](20, 36, "ARTICLES.SUBJECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("maxLength", 120)("readonly", ctx_r0.viewOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.articleForm.get("subject").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("readOnly", ctx_r0.viewOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("currentLang", ctx_r0.selectedLang)("readOnly", ctx_r0.viewOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("label", "", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](30, 38, "ATTACHMENTS.COVER_IMAGE"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("imagesType", "image/*")("supportType", "image")("maxLength", 1)("minLength", 1)("readOnly", ctx_r0.viewOnly)("flags", "CoverImage");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("imagesType", "image/*")("supportType", "all")("readOnly", ctx_r0.viewOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngxPermissionsOnly", ctx_r0.article.id ? "canEditBlogs" : "canCreateBlogs");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx_r0.viewOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](36, 40, "SHARED.CANCEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngxPermissionsOnly", "canDeleteBlogs");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngxPermissionsOnly", "canViewComments");
  }
}

let CreateArticleComponent = class CreateArticleComponent {
  constructor(activatedRoute, formBuilder, store, articleService, router) {
    this.activatedRoute = activatedRoute;
    this.formBuilder = formBuilder;
    this.store = store;
    this.articleService = articleService;
    this.router = router;
    this.selectedLang = 'en';
    this.viewOnly = false;
  }

  ngOnInit() {
    this.initializeArticle();
    this.articleDetails$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this)).subscribe(details => {
      if (!details) return;
      this.viewOnly = false;
      this.article = Object.assign(Object.assign({}, details), {
        description: Object.assign({}, details.description),
        coverImage: details.coverImage.map(m => new _core_shared__WEBPACK_IMPORTED_MODULE_4__.Media(m)),
        additionalMedia: details.additionalMedia.map(m => new _core_shared__WEBPACK_IMPORTED_MODULE_4__.Media(m))
      });
      this.initializeFrom();
      this.articleForm.markAsPristine();
      this.articleForm.markAsUntouched();
    });
  }

  initializeArticle() {
    this.activatedRoute.params.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.untilDestroyed)(this)).subscribe(params => {
      const id = params['id'];
      this.loadArticle(id);
    });
  }

  initializeFrom() {
    var _a, _b, _c, _d;

    if (this.articleForm) {
      this.articleForm.controls['description'].setValue((_a = this.article) === null || _a === void 0 ? void 0 : _a.description);
      this.articleForm.controls['subject'].setValue((_b = this.article) === null || _b === void 0 ? void 0 : _b.subject);
      this.articleForm.controls['coverImage'].setValue(this.article.coverImage);
      this.articleForm.controls['additionalMedia'].setValue(this.article.additionalMedia);
      this.articleForm.controls['tag'].setValue(this.article.tag);
      return;
    }

    this.articleForm = this.formBuilder.group({
      subject: this.formBuilder.control((_c = this.article) === null || _c === void 0 ? void 0 : _c.subject, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(120)]),
      description: this.formBuilder.control((_d = this.article) === null || _d === void 0 ? void 0 : _d.description, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
      coverImage: this.formBuilder.control(this.article.coverImage),
      tag: this.formBuilder.control(this.article.tag, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
      additionalMedia: this.formBuilder.control(this.article.additionalMedia)
    });
  }

  submit() {
    var _this = this;

    let media = this.articleForm.controls['coverImage'].value;

    if (this.articleForm.value.additionalMedia) {
      media = media.concat(this.articleForm.value.additionalMedia);
    }

    const data = {
      subject: this.articleForm.value.subject,
      description: this.articleForm.value.description,
      media: media,
      tagId: this.articleForm.value.tag.id,
      id: this.article.id
    };

    if (this.article.id) {
      this.articleService.edit(data).pipe().subscribe(res => this.loadArticle(this.article.id));
      return;
    }

    this.articleService.post(data).pipe().subscribe( /*#__PURE__*/function () {
      var _ref = (0,F_Nutrisha_angular_Nutrisha_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        yield _this.router.navigateByUrl('articles/edit/' + res.data);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  cancelEditing() {
    // if (this.article.id) {
    //   this.viewOnly = false;
    // }
    this.loadArticle(this.article.id);
  }

  loadArticle(id) {
    if (!id) {
      this.article = new _core_articles_view_models_article_details_view_model__WEBPACK_IMPORTED_MODULE_3__.ArticleDetailsViewModel();
      this.initializeFrom();
      this.articleForm.markAsPristine();
      this.articleForm.markAsUntouched();
      return;
    }

    this.store.dispatch(new _core_store_articles_articles_actions__WEBPACK_IMPORTED_MODULE_2__.ArticlesActions.LoadArticleDetails(id));
  }

  delete() {
    this.articleService.delete(this.article.id).pipe().subscribe(() => this.router.navigateByUrl('articles'));
  }

};

CreateArticleComponent.ɵfac = function CreateArticleComponent_Factory(t) {
  return new (t || CreateArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_articles__WEBPACK_IMPORTED_MODULE_5__.ArticleService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router));
};

CreateArticleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: CreateArticleComponent,
  selectors: [["app-create-article"]],
  decls: 1,
  vars: 1,
  consts: [["class", "m-5", 4, "ngIf"], [1, "m-5"], [1, "d-flex", "justify-content-start"], [1, "flex-grow-1", "w-75"], [4, "ngIf"], [1, "d-flex", "justify-content-between"], [1, "lang"], [1, "lang-selector", "en-selector", "mx-2", 3, "ngClass", "click"], [1, "w-100", "d-flex", "flex-column", "justify-content-center", "align-items-start", "flex-wrap", "flex-xl-fill", 3, "formGroup"], [1, "my-1", "w-100"], ["matInput", "", "type", "text", "formControlName", "subject", 3, "maxLength", "readonly"], ["formControlName", "tag", 1, "my-1", "w-100", 3, "readOnly"], ["tag", ""], ["formControlName", "description", 1, "my-1", "w-100", 3, "currentLang", "readOnly"], ["richText", ""], ["formControlName", "coverImage", 1, "my-1", "w-100", 3, "imagesType", "supportType", "maxLength", "minLength", "required", "label", "readOnly", "flags"], ["coverImage", ""], ["formControlName", "additionalMedia", "label", "SHARED.ADDITIONAL", 1, "my-1", "w-100", 3, "imagesType", "supportType", "readOnly"], [1, "w-100", "d-flex"], ["mat-flat-button", "", "color", "primary", 3, "hidden", "disabled", "click", 4, "ngxPermissionsOnly"], ["mat-stroked-button", "", "color", "primary", 1, "margin-start-1", 3, "hidden", "click"], [4, "ngxPermissionsOnly"], ["class", "comments-wrapper", 4, "ngxPermissionsOnly"], ["class", "d-flex justify-content-end", 4, "ngxPermissionsOnly"], [1, "d-flex", "justify-content-end"], [1, "icon-container", 3, "matMenuTriggerFor"], [1, "fa-solid", "fa-ellipsis-vertical"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngxPermissionsOnly"], ["mat-menu-item", "", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center"], ["appProfileImage", "", 3, "imageUrl", "circularWidth", "alt"], [1, "mt-1", "padding-start-1"], ["mat-flat-button", "", "color", "primary", 3, "hidden", "disabled", "click"], ["class", "margin-start-1", "mat-flat-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "warn", 1, "margin-start-1", 3, "click"], [1, "comments-wrapper"], ["class", "flex-grow-0", 3, "entityId", 4, "ngIf"], [1, "flex-grow-0", 3, "entityId"]],
  template: function CreateArticleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, CreateArticleComponent_div_0_Template, 39, 42, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.article);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, ngx_permissions__WEBPACK_IMPORTED_MODULE_16__.NgxPermissionsDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuItem, _shared_directives_profile_image_profile_image_directive__WEBPACK_IMPORTED_MODULE_6__.ProfileImageDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatError, _blog_tag_blog_tag_component__WEBPACK_IMPORTED_MODULE_7__.BLogTagComponent, _shared_rich_text_rich_text_rich_text_component__WEBPACK_IMPORTED_MODULE_8__.RichTextComponent, _shared_attachment_attachment_component__WEBPACK_IMPORTED_MODULE_9__.AttachmentComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _comments_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_10__.CommentsListComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe],
  styles: [".lang-selector[_ngcontent-%COMP%] {\n  border: none;\n  padding: 1rem 3rem;\n  border-radius: 10px;\n}\n\n.langSelected[_ngcontent-%COMP%] {\n  background: #fcc419;\n}\n\n.lang-not-selected[_ngcontent-%COMP%] {\n  border: 1px solid #fcc419;\n}\n\n.mat-flat-button[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.edit[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.icon-container[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.icon-container[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.comments-wrapper[_ngcontent-%COMP%] {\n  max-width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1hcnRpY2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFBRTtFQUNFLG9DQUFBO0FBRUo7O0FBR0E7RUFDRSxjQUFBO0FBQUYiLCJmaWxlIjoiY3JlYXRlLWFydGljbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZy1zZWxlY3RvciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ubGFuZ1NlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmNjNDE5O1xyXG59XHJcblxyXG4ubGFuZy1ub3Qtc2VsZWN0ZWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmY2M0MTk7XHJcbn1cclxuXHJcbi5tYXQtZmxhdC1idXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmVkaXQge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uaWNvbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmNvbW1lbnRzLXdyYXBwZXIge1xyXG4gIG1heC13aWR0aDogNDAlO1xyXG59XHJcbiJdfQ== */"]
});

(0,tslib__WEBPACK_IMPORTED_MODULE_22__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Select)(state => state.articles.lastLoadedArticle)], CreateArticleComponent.prototype, "articleDetails$", void 0);

CreateArticleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__.UntilDestroy)()], CreateArticleComponent);


/***/ }),

/***/ 77983:
/*!*************************************************************************!*\
  !*** ./src/app/pages/comments/comments-list/comments-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsListComponent": () => (/* binding */ CommentsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _core_shared_models_paged_list_query_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared/models/paged-list-query.model */ 3654);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/comments */ 36038);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_directives_profile_image_profile_image_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directives/profile-image/profile-image.directive */ 13468);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _shared_no_data_placeholder_no_data_placeholder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/no-data-placeholder/no-data-placeholder.component */ 30947);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 33935);













function CommentsListComponent_div_0_div_7_i_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 19);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r5);
} }
function CommentsListComponent_div_0_div_7_hr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "hr");
} }
function CommentsListComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 7)(2, "div", 8)(3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 12)(8, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CommentsListComponent_div_0_div_7_i_12_Template, 1, 1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-menu", null, 15)(15, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CommentsListComponent_div_0_div_7_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const comment_r2 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r7.deleteComment(comment_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, CommentsListComponent_div_0_div_7_hr_20_Template, 1, 0, "hr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("alt", comment_r2.owner.name)("imageUrl", comment_r2.owner.profileImage)("circularWidth", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](comment_r2.owner.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](10, 9, comment_r2.created, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngxPermissionsOnly", "canModerateComments");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 12, "SHARED.DELETE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](comment_r2.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r3 != ctx_r1.comments.length - 1);
} }
const _c0 = function () { return [1, 5, 10, 50]; };
function CommentsListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div")(2, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "hr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CommentsListComponent_div_0_div_7_Template, 21, 14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-no-data-placeholder", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-paginator", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function CommentsListComponent_div_0_Template_mat_paginator_page_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r9.queryParams.pageSize = $event.pageSize; ctx_r9.queryParams.pageNumber = $event.pageIndex; return ctx_r9.loadComments(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, "SOCIAL.COMMENTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r0.comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx_r0.totalRows)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c0));
} }
let CommentsListComponent = class CommentsListComponent {
    constructor(commentService) {
        this.commentService = commentService;
        this.queryParams = new _core_shared_models_paged_list_query_model__WEBPACK_IMPORTED_MODULE_0__.PagedListQueryModel({});
    }
    ngOnInit() {
        this.queryParams.entityId = this.entityId;
        this.loadComments();
    }
    loadComments() {
        this.commentService
            .getPagedList(this.queryParams)
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this))
            .subscribe((result) => {
            this.comments = result.data;
            this.totalRows = result.totalRows;
        });
    }
    deleteComment(id) {
        this.commentService
            .delete(id)
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this))
            .subscribe(() => {
            this.loadComments();
        });
    }
};
CommentsListComponent.ɵfac = function CommentsListComponent_Factory(t) { return new (t || CommentsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_comments__WEBPACK_IMPORTED_MODULE_1__.CommentService)); };
CommentsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CommentsListComponent, selectors: [["app-comments-list"]], viewQuery: function CommentsListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { entityId: "entityId" }, decls: 1, vars: 1, consts: [["class", "comments-container mat-elevation-z8 rounded", 4, "ngIf"], [1, "comments-container", "mat-elevation-z8", "rounded"], [1, "p-3", "m-0"], [1, "m-0"], [4, "ngFor", "ngForOf"], ["classes", "mt-3", 3, "data"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], [1, "comment"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "justify-content-start"], ["appProfileImage", "", 1, "comment-owner", 3, "alt", "imageUrl", "circularWidth"], [1, "comment-owner-name"], [1, "d-flex", "justify-content-end", "align-items-start"], [1, "comment-date"], ["class", "fa fa-list d-flex justify-content-center align-items-center option-toggle", 3, "matMenuTriggerFor", 4, "ngxPermissionsOnly"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "comment-content"], [4, "ngIf"], [1, "fa", "fa-list", "d-flex", "justify-content-center", "align-items-center", "option-toggle", 3, "matMenuTriggerFor"]], template: function CommentsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CommentsListComponent_div_0_Template, 10, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", "canViewComments");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _shared_directives_profile_image_profile_image_directive__WEBPACK_IMPORTED_MODULE_2__.ProfileImageDirective, ngx_permissions__WEBPACK_IMPORTED_MODULE_8__.NgxPermissionsDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _shared_no_data_placeholder_no_data_placeholder_component__WEBPACK_IMPORTED_MODULE_3__.NoDataPlaceholderComponent, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".comment[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.comment-owner-name[_ngcontent-%COMP%] {\n  margin-inline-start: 5px;\n  margin-top: 5px;\n  color: #646C9A;\n  font-weight: bold;\n}\n\n.comment-date[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  padding: 0;\n}\n\n.comment-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  overflow-wrap: break-word;\n  white-space: pre-line;\n  margin-top: 1rem;\n  margin-inline-start: 1rem;\n  color: #646C9A;\n}\n\n.option-toggle[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n}\n\n.option-toggle[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #F5F5F5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxhQUFBO0FBSkY7O0FBT0E7RUFDRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxjQVpXO0VBYVgsaUJBQUE7QUFKRjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBSkY7O0FBUUE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0E1Qlc7QUF1QmI7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBT0U7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUFMSiIsImZpbGUiOiJjb21tZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQtY29sb3I6ICM2NDZDOUE7XHJcblxyXG4uY29tbWVudHMtY29udGFpbmVyIHtcclxufVxyXG5cclxuLmNvbW1lbnQge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5jb21tZW50LW93bmVyLW5hbWUge1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgY29sb3I6ICRmb250LWNvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY29tbWVudC1kYXRlIHtcclxuICBtYXJnaW46IDVweCAwIDA7XHJcbiAgcGFkZGluZzogMDtcclxuICAvLyBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5jb21tZW50LWNvbnRlbnQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxcmVtO1xyXG4gIGNvbG9yOiAkZm9udC1jb2xvcjtcclxufVxyXG5cclxuLm9wdGlvbi10b2dnbGUge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
CommentsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy)()
], CommentsListComponent);



/***/ }),

/***/ 58181:
/*!***************************************************!*\
  !*** ./src/app/pages/comments/comments.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsModule": () => (/* binding */ CommentsModule)
/* harmony export */ });
/* harmony import */ var _comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments-list/comments-list.component */ 77983);
/* harmony import */ var _core_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/comments */ 36038);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 40950);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);











class CommentsModule {
}
CommentsModule.ɵfac = function CommentsModule_Factory(t) { return new (t || CommentsModule)(); };
CommentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CommentsModule });
CommentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_core_comments__WEBPACK_IMPORTED_MODULE_1__.CommentService], imports: [[
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
            ngx_permissions__WEBPACK_IMPORTED_MODULE_9__.NgxPermissionsModule.forChild()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CommentsModule, { declarations: [_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_0__.CommentsListComponent], imports: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, ngx_permissions__WEBPACK_IMPORTED_MODULE_9__.NgxPermissionsModule], exports: [_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_0__.CommentsListComponent] }); })();


/***/ }),

/***/ 6680:
/*!*******************************************************************!*\
  !*** ./src/app/pages/shared/media-players/media-player.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaPlayerModule": () => (/* binding */ MediaPlayerModule)
/* harmony export */ });
/* harmony import */ var _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-player/video-player.component */ 9429);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _pipes_video_link_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/video-link.pipe */ 62849);
/* harmony import */ var _image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-preview/image-preview.component */ 64253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class MediaPlayerModule {
}
MediaPlayerModule.ɵfac = function MediaPlayerModule_Factory(t) { return new (t || MediaPlayerModule)(); };
MediaPlayerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MediaPlayerModule });
MediaPlayerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MediaPlayerModule, { declarations: [_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_0__.VideoPlayerComponent, _pipes_video_link_pipe__WEBPACK_IMPORTED_MODULE_1__.VideoLinkPipe, _image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_2__.ImagePreviewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_0__.VideoPlayerComponent, _pipes_video_link_pipe__WEBPACK_IMPORTED_MODULE_1__.VideoLinkPipe] }); })();


/***/ }),

/***/ 62849:
/*!*********************************************************************!*\
  !*** ./src/app/pages/shared/media-players/pipes/video-link.pipe.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoLinkPipe": () => (/* binding */ VideoLinkPipe)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class VideoLinkPipe {
    transform(value) {
        const streamEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/Stream?filePath=';
        return value.replace(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/', streamEndpoint);
    }
}
VideoLinkPipe.ɵfac = function VideoLinkPipe_Factory(t) { return new (t || VideoLinkPipe)(); };
VideoLinkPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "videoLink", type: VideoLinkPipe, pure: true });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_articles_article_module_ts.js.map