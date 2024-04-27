import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/core/shared/guards/permission-guard.service';
import { SendNotificationComponent } from '../send-notification/send-notification.component';


const routes: Routes = [
  {
    path: 'send-notification',
    component: SendNotificationComponent,
    canActivate: [PermissionGuard],
    data: {
      permission: 'canCreateMeals',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
