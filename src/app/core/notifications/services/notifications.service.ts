import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const BaseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http: HttpClient) { }
  sendNotificationToAllUsers(token: string, title: string, body: string) {
    const notification = {
      to: token,
      notification: {
        title,
        body
      }
    };
    return this.http.post<any>(BaseUrl + '/Admin/api/v1/Notification/SendNotification', notification);
  }
  sendNotificationToSubscribedUsers(token: string, title: string, body: string) {
    const notification = {
      to: token,
      notification: {
        title,
        body
      }
    };
    return this.http.post<any>(BaseUrl + '/Admin/api/v1/Notification/SendNotification', notification);
  }
  sendNotificationToUnSubscribedUsers(token: string, title: string, body: string) {
    const notification = {
      to: token,
      notification: {
        title,
        body
      }
    };
    return this.http.post<any>(BaseUrl + '/Admin/api/v1/Notification/SendNotification', notification);
  }
  sendNotificationToSpecificUser(token: string, title: string, body: string) {
    const notification = {
      to: token,
      notification: {
        title,
        body
      }
    };
    return this.http.post<any>(BaseUrl + '/Admin/api/v1/Notification/SendNotification', notification);
  }
}
