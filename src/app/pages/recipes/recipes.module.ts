import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { NgxsModule } from '@ngxs/store';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeService } from 'src/app/core/recipes/recipe.service';
import { RecipesState } from 'src/app/core/store/recipes/recipes.state';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@NgModule({
  declarations: [RecipeEditComponent, RecipesListComponent, RecipeDetailsComponent],
  exports: [],
  imports: [
    MatSlideToggleModule,
    FormsModule,
    CommonModule,
    RecipesRoutingModule,
    MatPaginatorModule,
    TranslateModule,
    NgxsModule.forFeature([RecipesState]),
    NgxPermissionsModule.forChild(),
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    SharedModule,
    MatTableModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [RecipeService],
})
export class RecipesModule { }
