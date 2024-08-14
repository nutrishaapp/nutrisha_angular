import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { title } from 'process';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const BaseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private apiUrl = BaseUrl + '/Admin/api/v1/Notification/Post';

  constructor(private http: HttpClient) { }
  getUserData(): Observable<any> {
    return this.http.get<any>(BaseUrl + '/Admin/api/v1/MobileUser/GetPagedList?PageSize=10000');
  }


  sendNotificationToAllUsers(token: string, title: string, body: string) {
    const payload = {
      token: token,
      title: title,
      body: body
    };

    return this.http.post(BaseUrl + '/Admin/api/v1/Notification/SendNotification', payload);
  }


  sendNotificationToSubscribedUsers(token: string, title: string, body: string) {
    const payload = {
      token: token,
      title: title,
      body: body
    };

    return this.http.post(BaseUrl + '/Admin/api/v1/Notification/SendNotification', payload);
  }


  sendNotificationToUnSubscribedUsers(token: string, title: string, body: string) {
    const payload = {
      token: token,
      title: title,
      body: body
    };

    return this.http.post(BaseUrl + '/Admin/api/v1/Notification/SendNotification', payload);
  }


  sendNotifications(tokens: string[], title: string, body: string) {
    const payload = {
      token: tokens[0],
      title: title,
      body: body
    };

    return this.http.post(BaseUrl + '/Admin/api/v1/Notification/SendNotification', payload);
  }

  postDataToBackend(message: string, title: string, createdId: string, isSubscribe: boolean, isNonSubscribe: boolean, lstUserId?: string): Observable<any> {
    const myHeaders = new HttpHeaders({
      'accept': '/',
      'Content-Type': 'application/json-patch+json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxMyIsIklzQWRtaW4iOiJUcnVlIiwibmJmIjoxNzAyODcyMjYwLCJleHAiOjE3MzM5NzYyNjAsImlhdCI6MTcwMjg3MjI2MH0.n4Hu41QYV49ycwZWTtx7WRX9Pf0Qn2OiR44FrFA4-RsPZfsdsseXkspEhDaX16uYCaS_6rCeXs-cuAjaePekKQ'
    });

    const body = {
      message: message,
      title: title,
      date: Date.now().toString,
      createdId: createdId,
      lstUserId: [],
      isSubscribe: isSubscribe,
      isNonSubscribe: isNonSubscribe
    };

    return this.http.post(this.apiUrl, body, { headers: myHeaders });
  }


  postDataToBackendSpecificUser(message: string, title: string, createdId: string, lstUserId?: number): Observable<any> {
    const myHeaders = new HttpHeaders({
      'accept': '/',
      'Content-Type': 'application/json-patch+json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxMyIsIklzQWRtaW4iOiJUcnVlIiwibmJmIjoxNzAyODcyMjYwLCJleHAiOjE3MzM5NzYyNjAsImlhdCI6MTcwMjg3MjI2MH0.n4Hu41QYV49ycwZWTtx7WRX9Pf0Qn2OiR44FrFA4-RsPZfsdsseXkspEhDaX16uYCaS_6rCeXs-cuAjaePekKQ'
    });

    const body = {
      message: message,
      title: title,
      date: Date.now().toString,
      createdId: createdId,
      lstUserId: [lstUserId],
      isSubscribe: false,
      isNonSubscribe: false,
    };

    return this.http.post(this.apiUrl, body, { headers: myHeaders });
  }

}
