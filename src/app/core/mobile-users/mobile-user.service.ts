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

@Injectable()
export class MobileUserService implements OnInit {
  private baseUrl = 'https://dev.api.nutrisha.app';
  userId: string;
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

  upload(file: File, userId: string, name: string): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('url', file);
    formData.append('userId', userId);
    formData.append('name', name);

    const req = new HttpRequest('POST', `${this.baseUrl}/Admin/api/v1/UserAttachment/Post`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpClient.request(req);
  }

  getFiles(userId: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/Admin/api/v1/UserAttachment/GetPagedList`,
      {
        params: { userId },
      });
  }

  postNote(data: any) {
    return this.httpClient.post<any>(`${this.baseUrl}/Admin/api/v1/UserNotes/Post`, data,
    );
  }

  getUserNotes(userId: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/Admin/api/v1/UserNotes/GetPagedList`,
      {
        params: { userId },
      }
    );
  }

  putNote(data: any) {
    return this.httpClient.put<any>(`${this.baseUrl}/Admin/api/v1/UserNotes/Put`, data,
    );
  }

  deleteNote(id: number) {
    return this.httpClient.delete<any>(`${this.baseUrl}/Admin/api/v1/UserNotes/Delete?id=${id}`
    );
  }
}
