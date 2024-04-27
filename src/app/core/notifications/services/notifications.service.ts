import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return this.http.post<any>('http://localhost:3000/send-notification', notification);
  }
  sendNotificationToSubscribedUsers(token: string, title: string, body: string) {
    const notification = {
      to: token,
      notification: {
        title,
        body
      }
    };
    return this.http.post<any>('http://localhost:3000/send-notification', notification);
  }
  sendNotificationToUnSubscribedUsers(token: string, title: string, body: string) {
    const notification = {
      to: token,
      notification: {
        title,
        body
      }
    };
    return this.http.post<any>('http://localhost:3000/send-notification', notification);
  }
  sendNotificationToSpecificUser(token: string, title: string, body: string) {
    const notification = {
      to: token,
      notification: {
        title,
        body
      }
    };
    return this.http.post<any>('http://localhost:3000/send-notification', notification);
  }
}
