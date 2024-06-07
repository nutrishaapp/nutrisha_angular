import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  BaseV1ObjectResponseModel,
  BaseV1ResponseModel,
  HttpUtilsService,
  PagedListQueryModel,
} from '../../shared';
import { environment } from '../../../../environments/environment';
import { HungerVideoListModel } from '../models/hunger-video-list.model';
import { PostHungerVideoModel } from '../models/post-hunger-video.model';


const hungerVideoApi = environment.baseUrl + '/Admin/api/v1/HungerVedioVideo';
@Injectable({
  providedIn: 'root'
})
export class HungerVedioService {
  constructor(private httpClient: HttpClient) { }
  private apiUrl = environment.baseUrl + '/Admin/api/v1/HungerVedioVideo/Post';
  private hungerTypeUrl = environment.baseUrl + '/mobile/api/v1/HungerType/GetAll';
  private updateUrl = environment.baseUrl + '/Admin/api/v1/HungerVedioVideo/Put';
  private token = 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxMyIsIklzQWRtaW4iOiJUcnVlIiwibmJmIjoxNjk2NTA1NzUyLCJleHAiOjE3Mjc2MDk3NTEsImlhdCI6MTY5NjUwNTc1Mn0.ae9mVvvphXN0scDAUErWaWrVnEppbelToEDKx8qgKkdQKWgS3WtRSXe0EV76_r_zOICzVL8ePWu4wai96UpW2Q';




  getVideos(page: number, size: number, search: string): Observable<any> {
    const headers = new HttpHeaders({
      'accept': '*/*',
    });

    const params = {
      page: page.toString(),
      size: size.toString(),
      search: search
    };

    return this.httpClient.get<any>(hungerVideoApi + '/GetPagedList', { headers, params });
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

  postHungerVideo(file: File, hungerTypeId: string, subject: string): Observable<any> {
    const headers = new HttpHeaders({
      'accept': '/',
      'Authorization': this.token
    });

    const formData: FormData = new FormData();
    formData.append('Subject', subject);
    formData.append('HungerTypeId', hungerTypeId);
    formData.append('Files[0].file', file, file.name);
    formData.append('Files[0].Flags', 'Vedio');

    return this.httpClient.post(this.apiUrl, formData, { headers: headers });
  }

  updateHungerVideo(id: string, file: File, hungerTypeId: string, subject: string): Observable<any> {
    const headers = new HttpHeaders({
      'accept': '*/*',
      'Authorization': this.token
    });

    const formData: FormData = new FormData();
    formData.append('Id', id);
    formData.append('Subject', subject);
    formData.append('HungerTypeId', hungerTypeId);
    formData.append('Files', file, file.name);

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

  getHungerTypes(): Observable<any> {
    const headers = new HttpHeaders({
      'accept': '*/*',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI2MTE2IiwidW5pcXVlX25hbWUiOiIxMDAwOTY2MjI5IiwibmJmIjoxNzE3NDg1NDEzLCJleHAiOjE3NDg1ODk0MTMsImlhdCI6MTcxNzQ4NTQxM30.EUeA5ZFoo9afhOnYi8fChqATSxch3hS7T2DbrTJA-Z7aUiV0gYmlTFUrAqSTsYcRd3SXzZYFkQUwZEISzxIfug'
    });

    return this.httpClient.get(this.hungerTypeUrl, { headers: headers });
  }


  getById(id: string) {
    return this.httpClient.get<any>(
      `${hungerVideoApi}/GetById?id=${id}`
    );
  }

  delete(id: string) {
    return this.httpClient.delete<any>(
      `${hungerVideoApi}/Delete?id=${id}`
    );
  }


}
