import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { BlogTagModule } from '../blog-tag/blog-tag.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BlogVideoService } from '../../core/blog-videos';
import { NgxsModule } from '@ngxs/store';
import { BlogVideosState } from '../../core/store/blog-videos/blog-videos';
import { MatMenuModule } from '@angular/material/menu';
import { NgxPermissionsModule } from "ngx-permissions";

import { HungerVedioRoutingModule } from './hunger-vedio-routing.module';
import { HungerVedioDetailsComponent } from './hunger-vedio-details/hunger-vedio-details.component';
import { HungerVedioListComponent } from './hunger-vedio-list/hunger-vedio-list.component';
import { AppComponent } from 'src/app/app.component';
import { HungerVedioService } from 'src/app/core/hunger-vedio/services/hunger-vedio.service';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    HungerVedioDetailsComponent,
    HungerVedioListComponent
  ],
  imports: [
    CommonModule,
    HungerVedioRoutingModule,
    MatPaginatorModule,
    SharedModule,
    MatTableModule,
    FormsModule,
    MatSelectModule,
    TranslateModule,
    MatInputModule,
    BlogTagModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxsModule.forFeature([BlogVideosState]),
    MatMenuModule,
    NgxPermissionsModule,
  ],
  providers: [BlogVideoService, HungerVedioService],
  bootstrap: [AppComponent]
})
export class HungerVedioModule {

}
