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
    // const notification = {
    //   to: token,
    //   notification: {
    //     body
    //   }
    // };
    const notification = {
      to: token,
      notification: {
        title: title,
        body: body,
        sound: 'default',
      },
      data: {
        "aps": {
          "alert": {
            "title": title,
            "body": body
          },
          "category": "All Users",
          "sound": "default",
          "content-available": 1,
          "mutable-content": 1,
          "interruption-level": "active",
          "relevance-score": 1,
        }
      }
    };

    return this.http.post<any>(BaseUrl + '/Admin/api/v1/Notification/SendNotification', notification);
  }


  sendNotificationToSubscribedUsers(token: string, title: string, body: string) {
    // const notification = {
    //   to: token,
    //   notification: {
    //     body
    //   }
    // };
    const notification = {
      to: token,
      notification: {
        title: title,
        body: body,
        sound: 'default',
      },
      data: {
        "aps": {
          "alert": {
            "title": title,
            "body": body
          },
          "category": "Subscribed Users",
          "sound": "default",
          "content-available": 1,
          "mutable-content": 1,
          "interruption-level": "active",
          "relevance-score": 1,
        }
      }
    };
    return this.http.post<any>(BaseUrl + '/Admin/api/v1/Notification/SendNotification', notification);
  }


  sendNotificationToUnSubscribedUsers(token: string, title: string, body: string) {
    // const notification = {
    //   to: token,
    //   notification: {
    //     body
    //   }
    // };
    const notification = {
      to: token,
      notification: {
        title: title,
        body: body,
        sound: 'default',
      },
      data: {
        "aps": {
          "alert": {
            "title": title,
            "body": body
          },
          "category": "Un Subscribed Users",
          "sound": "default",
          "content-available": 1,
          "mutable-content": 1,
          "interruption-level": "active",
          "relevance-score": 1,
        }
      }
    };
    return this.http.post<any>(BaseUrl + '/Admin/api/v1/Notification/SendNotification', notification);
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

  sendNotifications(tokens: string[], title: string, body: string) {
    // const notification = {
    //   to: tokens[0],
    //   notification: {
    //     body
    //   }
    // };
    const notification = {
      to: tokens[0],
      notification: {
        title: title,
        body: body,
        sound: 'default',
      },
      data: {
        "aps": {
          "alert": {
            "title": title,
            "body": body
          },
          "category": "Specific User",
          "sound": "default",
          "content-available": 1,
          "mutable-content": 1,
          "interruption-level": "active",
          "relevance-score": 1,
        }
      }
    };
    return this.http.post<any>(BaseUrl + '/Admin/api/v1/Notification/SendNotification', notification);
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
