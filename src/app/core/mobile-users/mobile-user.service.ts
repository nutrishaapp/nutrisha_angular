import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UserPreventTypeEnum } from './models/user-prevention-type.enum';
import { Observable } from 'rxjs';
import {
  BaseV1ResponseModel,
  PagedListQueryModel,
  HttpUtilsService,
  BaseV1ObjectResponseModel,
} from '../shared';
import { MobileUserListModel } from './models/mobile-user-list-model';
import { MobileUserDetailsModel } from './models/mobile-user-details.model';
import { ActivatedRoute } from '@angular/router';

const mobileUserBaseUrl = environment.baseAdminV1Url + 'MobileUser/';
const BaseUrl = environment.baseAdminV1Url;


@Injectable()
export class MobileUserService implements OnInit {
  userId: string;
  todayDate: string = new Date().toISOString().slice(0, 10);
  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params['id'];
    });
  }

  getPagedList(
    pagedModelQueryModel: PagedListQueryModel
  ): Observable<BaseV1ResponseModel<MobileUserListModel[]>> {
    return this.httpClient.get<BaseV1ResponseModel<MobileUserListModel[]>>(
      mobileUserBaseUrl + 'getPagedList',
      {
        params:
          HttpUtilsService.prepareGetPagedListQueryParams(pagedModelQueryModel),
      }
    );
  }

  getUserDetails(
    userId: string
  ): Observable<BaseV1ResponseModel<MobileUserDetailsModel>> {
    return this.httpClient.get<BaseV1ResponseModel<MobileUserDetailsModel>>(
      mobileUserBaseUrl + 'GetUserDetails',
      {
        params: { userId },
      }
    );
  }

  getUserPersonalDetails(userId: string): Observable<BaseV1ResponseModel<any>> {
    return this.httpClient.get<BaseV1ResponseModel<MobileUserDetailsModel>>(
      mobileUserBaseUrl + 'GetUserPersonalDetails',
      {
        params: { userId },
      }
    );
  }

  ban(userId: string): Observable<BaseV1ObjectResponseModel<any>> {
    return this.httpClient.put<BaseV1ObjectResponseModel<any>>(
      mobileUserBaseUrl + 'Ban',
      {},
      {
        params: { userId },
      }
    );
  }

  unBan(userId: string) {
    return this.httpClient.put<BaseV1ObjectResponseModel<any>>(
      mobileUserBaseUrl + 'UnBan',
      {},
      {
        params: { userId },
      }
    );
  }

  prevent(
    userId: number,
    userPreventionType: UserPreventTypeEnum
  ): Observable<BaseV1ResponseModel<any>> {
    return this.httpClient.post<BaseV1ResponseModel<any>>(
      mobileUserBaseUrl + 'prevent',
      {
        userId: userId,
        preventionType: userPreventionType,
      }
    );
  }

  makePremium(model: { userId: string; endDate: Date; amountPaid: number }) {
    return this.httpClient.post<BaseV1ObjectResponseModel<any>>(
      mobileUserBaseUrl + 'test',
      model
    );
  }

  upload(file: File, userId: string, name: string, id: string): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('url', file);
    formData.append('userId', userId);
    formData.append('name', name);
    formData.append('userNoteId', id);

    const req = new HttpRequest('POST', `${BaseUrl}UserAttachment/Post`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpClient.request(req);
  }

  getFiles(userId: string): Observable<any> {
    return this.httpClient.get(`${BaseUrl}UserAttachment/GetPagedList`,
      {
        params: { userId },
      });
  }

  postNote(data: any) {
    return this.httpClient.post<any>(`${BaseUrl}UserNotes/Post`, data,
    );
  }

  getUserNotes(userId: string): Observable<any> {
    return this.httpClient.get(`${BaseUrl}UserNotes/GetPagedList`,
      {
        params: { userId },
      }
    );
  }

  putNote(data: any) {
    return this.httpClient.put<any>(`${BaseUrl}UserNotes/Put`, data,
    );
  }

  deleteNote(id: number) {
    return this.httpClient.delete<any>(`${BaseUrl}UserNotes/Delete?id=${id}`
    );
  }

  getUserAttachment(userId: string, userNoteId: string): Observable<any> {
    return this.httpClient.get(`${BaseUrl}UserAttachment/GetPagedList?userNoteId=${userNoteId ?? ''}`,
      {
        params: { userId },
      }
    );
  }

  deleteAttachment(id: number) {
    return this.httpClient.delete<any>(`${BaseUrl}UserAttachment/Delete?id=${id}`
    );
  }


  getWaterBar(userId: string): Observable<any> {
    return this.httpClient.get(`${BaseUrl}MealPlan/GetWaterBar?day=${this.todayDate}&userId=${userId}&isSubscribed=true`,
      {
        params: { userId },
      }
    );
  }

  getWeghitMonthlyBar(userId: string): Observable<any> {
    return this.httpClient.get(`${BaseUrl}MealPlan/GetWeghitAndMesurementMonthlyBar?day=${this.todayDate}&userId=${userId}`,
      {
        params: { userId },
      }
    );
  }

  getCurrentPlanBar(userId: string): Observable<any> {
    return this.httpClient.get(`${BaseUrl}MealPlan/GetCurrentPlanBar?userId=${userId}`,
      {
        params: { userId },
      }
    );
  }

  getWeghitDailyBar(userId: string): Observable<any> {
    return this.httpClient.get(`${BaseUrl}MealPlan/GetWeghitAndMesurementDailyBar?day=${this.todayDate}&userId=${userId}`,
      {
        params: { userId },
      }
    );
  }

  getHeartMonthlyBar(userId: string): Observable<any> {
    return this.httpClient.get(`${BaseUrl}MealPlan/GetWeghitAndMesurementMonthlyBar?day=${this.todayDate}&userId=${userId}`,
      {
        params: { userId },
      }
    );
  }

  getHeartDailyBar(userId: string): Observable<any> {
    return this.httpClient.get(`${BaseUrl}MealPlan/GetWeghitAndMesurementDailyBar?day=${this.todayDate}&userId=${userId}`,
      {
        params: { userId },
      }
    );
  }

  getUserMood(userId: string): Observable<any> {
    return this.httpClient.get(`${BaseUrl}UserMood/GetPagedList?UserId=${userId}`,
      {
        params: { userId },
      }
    );
  }

  getPeriodDailyBar(userId: string): Observable<any> {
    return this.httpClient.get(`${BaseUrl}MealPlan/GetWeghitAndMesurementDailyBar?day=${this.todayDate}&userId=${userId}`,
      {
        params: { userId },
      }
    );
  }

  getPeriodMonthlyBar(userId: string): Observable<any> {
    return this.httpClient.get(`${BaseUrl}MealPlan/GetWeghitAndMesurementMonthlyBar?day=${this.todayDate}&userId=${userId}`,
      {
        params: { userId },
      }
    );
  }

}
