import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HungryQuestionsRoutingModule } from './hungry-questions-routing.module';
import { HungryQuestionsComponent } from './hungry-questions.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HungryQuestionsComponent
  ],
  imports: [
    CommonModule,
    HungryQuestionsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class HungryQuestionsModule { }
