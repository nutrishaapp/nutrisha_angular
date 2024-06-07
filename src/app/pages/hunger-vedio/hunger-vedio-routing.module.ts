import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HungerVedioListComponent } from './hunger-vedio-list/hunger-vedio-list.component';
import { PermissionGuard } from 'src/app/core/shared/guards/permission-guard.service';
import { HungerVedioDetailsComponent } from './hunger-vedio-details/hunger-vedio-details.component';

const routes: Routes = [
  {
    path: '',
    component: HungerVedioListComponent,
    canActivate: [PermissionGuard],
    data: { permission: 'canViewBlogs' },
  },
  {
    path: 'add',
    component: HungerVedioDetailsComponent,
    canActivate: [PermissionGuard],
    data: { permission: 'canCreateBlogs' },
  },
  {
    path: 'edit/:id',
    component: HungerVedioDetailsComponent,
    canActivate: [PermissionGuard],
    data: { permission: 'canEditBlogs' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HungerVedioRoutingModule { }
