import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HungryQuestionsComponent } from './hungry-questions.component';

const routes: Routes = [{ path: '', component: HungryQuestionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HungryQuestionsRoutingModule { }
