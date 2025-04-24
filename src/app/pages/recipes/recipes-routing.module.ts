import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PermissionGuard } from '../../core/shared/guards/permission-guard.service';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Route[] = [
  {
    path: '',
    component: RecipesListComponent,
    canActivate: [PermissionGuard],
    data: {
      permission: 'canViewMeals',
    },
  },
  {
    path: 'edit/:id',
    component: RecipeEditComponent,
    canActivate: [PermissionGuard],
    data: {
      permission: 'canEditMeals',
    },
  },
  {
    path: 'add',
    component: RecipeEditComponent,
    canActivate: [PermissionGuard],
    data: {
      permission: 'canCreateMeals',
    },
  },
  {
    path: ':id',
    component: RecipeDetailsComponent,
    canActivate: [PermissionGuard],
    data: {
      permission: 'canViewMeals',
    },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule { }
