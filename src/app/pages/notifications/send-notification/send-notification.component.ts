import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/core/notifications/services/notifications.service';

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

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit() {
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
      this.notificationsService.sendNotificationToAllUsers(tokenAll, titleAll, bodyAll).subscribe((response) => {
        alert('Notification sent successfully');
        console.log('Notification sent successfully:', response);
      },
        (error) => {
          alert('Error sending notification');
          console.error('Error sending notification:', error);
        });
    } else {
      alert("Title and notification content are required");
    }
  }

  sendNotificationToSubscribedUsers() {
    const tokenSubscribed = this.tokenSubscribed; // Replace with the FCM token of the device
    const titleSubscribed = this.titleSubscribed;
    const bodySubscribed = this.bodySubscribed;
    if (this.tokenSubscribed, this.titleSubscribed, this.bodySubscribed) {
      this.notificationsService.sendNotificationToSubscribedUsers(tokenSubscribed, titleSubscribed, bodySubscribed).subscribe((response) => {
        alert('Notification sent successfully');
        console.log('Notification sent successfully:', response);
      },
        (error) => {
          alert('Error sending notification');
          console.error('Error sending notification:', error);
        });
    } else {
      alert("Title and notification content are required");
    }
  }

  sendNotificationToUnSubscribedUsers() {
    const tokenUnSubscribed = this.tokenUnSubscribed; // Replace with the FCM token of the device
    const titleUnSubscribed = this.titleUnSubscribed;
    const bodyUnSubscribed = this.bodyUnSubscribed;
    if (this.tokenUnSubscribed, this.titleUnSubscribed, this.bodyUnSubscribed) {
      this.notificationsService.sendNotificationToUnSubscribedUsers(tokenUnSubscribed, titleUnSubscribed, bodyUnSubscribed).subscribe((response) => {
        alert('Notification sent successfully');
        console.log('Notification sent successfully:', response);
      },
        (error) => {
          alert('Error sending notification');
          console.error('Error sending notification:', error);
        });
    } else {
      alert("Title and notification content are required");
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
    if (this.title, this.body) {
      console.log(tokens[0]);
      if (tokens.length === 0) {
        alert('User is required');
        return;
      }

      this.notificationsService.sendNotifications(tokens, this.title, this.body)
        .subscribe(response => {
          console.log('Notifications sent', response);
        }, error => {
          console.error('Error sending notifications', error);
        });
    } else {
      alert("Title, notification content and User are required");
    }
  }

}
