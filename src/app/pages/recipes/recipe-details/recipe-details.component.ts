import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, of, switchMap, takeUntil, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { RecipesState } from '../../../core/store/recipes/recipes.state';
import { MealType } from '../../../core/meals/models/meal-type.enum';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../core/shared/confirm-dialog/confirm-dialog.component';
import { RecipeType } from 'src/app/core/recipes/models/recipe-type.enum';
import { RecipeService } from 'src/app/core/recipes/recipe.service';
import { IngredientUnitType, RecipeDetailsModel } from 'src/app/core/recipes/models/recipe-details.model';
import { RecipesActions } from 'src/app/core/store/recipes/recipes.action';

@UntilDestroy()
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  mealType = MealType;
  recipeType = RecipeType;
  mealId: string;
  recipeId: string;
  ingredientUnitType = IngredientUnitType;

  @Select(RecipesState.lastLoadedRecipe)
  recipeDetails$: Observable<RecipeDetailsModel>;

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private matDialog: MatDialog,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(untilDestroyed(this))
      .subscribe((params) => {
        const id = params['id'];
        this.recipeId = id;

        if (id) {
          this.store.dispatch(new RecipesActions.LoadRecipeDetails(id));
        }
      });
  }

  deleteRecipe() {
    this.matDialog
      .open(ConfirmDialogComponent, {})
      .afterClosed()
      .pipe(
        switchMap((d) => {
          if (d) {
            return this.recipeService
              .delete(this.recipeId)
              .pipe(tap((r) => this.router.navigateByUrl('recipes')));
          }

          return of(false);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  editRecipe() {
    this.router.navigate([], { relativeTo: this.activatedRoute });
    this.router.navigateByUrl(`recipes/edit/${this.recipeId}`);
  }
}
