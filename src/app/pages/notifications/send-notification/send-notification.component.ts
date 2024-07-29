import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { NotificationsService } from 'src/app/core/notifications/services/notifications.service';
import { TranslationService } from 'src/app/core/shared/services/translate.service';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.scss']
})
export class SendNotificationComponent implements OnInit {
  tokenAll: string = '/topics/All';
  titleAll: string = '';
  bodyAll: string = '';

  tokenSubscribed: string = '/topics/Subscribed';
  titleSubscribed: string = '';
  bodySubscribed: string = '';

  tokenUnSubscribed: string = '/topics/unSubscribed';
  titleUnSubscribed: string = '';
  bodyUnSubscribed: string = '';

  // tokenSpecificUser: string = 'token'; 
  // titleSpecificUser: string = '';
  // bodySpecificUser: string = '';

  title: string;
  body: string;
  users: any[] = [];
  selectedUsers: any[] = [];
  dropdownSettings = {};
  userId: string;
  lang: string;


  constructor(private notificationsService: NotificationsService, private authService: AuthService, private getSelectedLanguage: TranslationService,) { }

  ngOnInit() {
    this.lang = this.getSelectedLanguage.getSelectedLanguage();
    this.userId = this.authService.getUserId();
    this.fetchUserData();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'deviceToken',
      textField: 'name',
      // selectAllText: 'Select All',
      // unSelectAllText: 'Unselect All',
      limitSelection: 1,
      itemsShowLimit: 1,
      allowSearchFilter: true,
      enableCheckAll: false
    };
  }

  sendNotificationToAllUsers() {
    const tokenAll = this.tokenAll;
    const titleAll = this.titleAll;
    const bodyAll = this.bodyAll;
    if (this.tokenAll, this.titleAll, this.bodyAll) {
      this.notificationsService.postDataToBackend(bodyAll, this.userId, true, true).subscribe((response) => {
        console.log('Notification sent to backend successfully:', response);
      });
      this.notificationsService.sendNotificationToAllUsers(tokenAll, bodyAll).subscribe((response) => {
        alert('Notification sent successfully');
        console.log('Notification sent successfully:', response);
      },
        (error) => {
          alert('Error sending notification');
          console.error('Error sending notification:', error);
        });
    } else {
      alert("Message is required");
    }
  }

  sendNotificationToSubscribedUsers() {
    const tokenSubscribed = this.tokenSubscribed; // Replace with the FCM token of the device
    const titleSubscribed = this.titleSubscribed;
    const bodySubscribed = this.bodySubscribed;
    if (this.tokenSubscribed, this.titleSubscribed, this.bodySubscribed) {
      this.notificationsService.postDataToBackend(bodySubscribed, this.userId, true, false).subscribe((response) => {
        console.log('Notification sent to backend successfully:', response);
      });
      this.notificationsService.sendNotificationToSubscribedUsers(tokenSubscribed, bodySubscribed).subscribe((response) => {
        alert('Notification sent successfully');
        console.log('Notification sent successfully:', response);
      },
        (error) => {
          alert('Error sending notification');
          console.error('Error sending notification:', error);
        });
    } else {
      alert("Message is required");
    }
  }

  sendNotificationToUnSubscribedUsers() {
    const tokenUnSubscribed = this.tokenUnSubscribed; // Replace with the FCM token of the device
    const titleUnSubscribed = this.titleUnSubscribed;
    const bodyUnSubscribed = this.bodyUnSubscribed;
    if (this.tokenUnSubscribed, this.titleUnSubscribed, this.bodyUnSubscribed) {
      this.notificationsService.postDataToBackend(bodyUnSubscribed, this.userId, false, true).subscribe((response) => {
        console.log('Notification sent to backend successfully:', response);
      });
      this.notificationsService.sendNotificationToUnSubscribedUsers(tokenUnSubscribed, bodyUnSubscribed).subscribe((response) => {
        alert('Notification sent successfully');
        console.log('Notification sent successfully:', response);
      },
        (error) => {
          alert('Error sending notification');
          console.error('Error sending notification:', error);
        });
    } else {
      alert("Message is required");
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
    const id = this.users.filter(user => user.deviceToken == tokens[0]);

    console.log(tokens[0]);
    console.log(id[0].id);

    if (this.title, this.body) {
      if (tokens.length === 0) {
        alert('User is required');
        return;
      }
      this.notificationsService.postDataToBackendSpecificUser(this.body, this.userId, id[0].id).subscribe((response) => {
        console.log('Notification sent to backend successfully:', response);
      });
      this.notificationsService.sendNotifications(tokens, this.body)
        .subscribe(response => {
          alert('Notification sent successfully');
          console.log('Notifications sent', response);
        }, error => {
          alert('Error sending notification');
          console.error('Error sending notifications', error);
        });
    } else {
      alert("Message and User are required");
    }
  }

}
