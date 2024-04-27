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

  tokenSpecificUser: string = 'token'; // Replace with the FCM token of the device
  titleSpecificUser: string = '';
  bodySpecificUser: string = '';
  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
  }

  sendNotificationToAllUsers() {
    const tokenAll = this.tokenAll;
    const titleAll = this.titleAll;
    const bodyAll = this.bodyAll;
    this.notificationsService.sendNotificationToAllUsers(tokenAll, titleAll, bodyAll).subscribe((response) => {
      alert('Notification sent successfully');
      console.log('Notification sent successfully:', response);
    },
      (error) => {
        alert('Error sending notification');
        console.error('Error sending notification:', error);
      });
  }

  sendNotificationToSubscribedUsers() {
    const tokenSubscribed = this.tokenSubscribed; // Replace with the FCM token of the device
    const titleSubscribed = this.titleSubscribed;
    const bodySubscribed = this.bodySubscribed;
    this.notificationsService.sendNotificationToSubscribedUsers(tokenSubscribed, titleSubscribed, bodySubscribed).subscribe((response) => {
      alert('Notification sent successfully');
      console.log('Notification sent successfully:', response);
    },
      (error) => {
        alert('Error sending notification');
        console.error('Error sending notification:', error);
      });
  }

  sendNotificationToUnSubscribedUsers() {
    const tokenUnSubscribed = this.tokenUnSubscribed; // Replace with the FCM token of the device
    const titleUnSubscribed = this.titleUnSubscribed;
    const bodyUnSubscribed = this.bodyUnSubscribed;
    this.notificationsService.sendNotificationToUnSubscribedUsers(tokenUnSubscribed, titleUnSubscribed, bodyUnSubscribed).subscribe((response) => {
      alert('Notification sent successfully');
      console.log('Notification sent successfully:', response);
    },
      (error) => {
        alert('Error sending notification');
        console.error('Error sending notification:', error);
      });
  }

  sendNotificationToSpecificUser() {
    const tokenSpecificUser = this.tokenSpecificUser; // Replace with the FCM token of the device
    const titleSpecificUser = this.titleSpecificUser;
    const bodySpecificUser = this.bodySpecificUser;
    this.notificationsService.sendNotificationToSpecificUser(tokenSpecificUser, titleSpecificUser, bodySpecificUser).subscribe((response) => {
      alert('Notification sent successfully');
      console.log('Notification sent successfully:', response);
    },
      (error) => {
        alert('Error sending notification');
        console.error('Error sending notification:', error);
      });
  }

}
