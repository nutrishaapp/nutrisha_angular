import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { RecipesActions } from './recipes.action';
import { RecipeListModel } from '../../recipes/models/recipe-list.model';
import { RecipeDetailsModel } from '../../recipes/models/recipe-details.model';
import { RecipeService } from '../../recipes/recipe.service';

interface RecipeStateModel {
  recipes: RecipeListModel[];
  totalRows: number;
  lastLoadedRecipe: RecipeDetailsModel;
}

@Injectable()
@State<RecipeStateModel>({
  name: 'recipes',
})
export class RecipesState {
  constructor(private recipeService: RecipeService) { }

  @Action(RecipesActions.LoadRecipesPage)
  getPagedList(
    ctx: StateContext<RecipeStateModel>,
    action: RecipesActions.LoadRecipesPage
  ) {
    return this.recipeService.getPagedList(action.queryParams).pipe(
      tap((result) => {
        const data = result.data;
        ctx.setState({
          ...ctx.getState(),
          recipes: data,
          totalRows: result.totalRows,
          lastLoadedRecipe: null,
        });
      })
    );
  }

  @Action(RecipesActions.LoadRecipeDetails)
  loadRecipeDetails(
    ctx: StateContext<RecipeStateModel>,
    action: RecipesActions.LoadRecipeDetails
  ) {
    return this.recipeService.getById(action.id).pipe(
      tap((result) => {
        const data = result.data;
        ctx.setState({
          ...ctx.getState(),
          lastLoadedRecipe: data,
          totalRows: 0,
          recipes: null,
        });
      })
    );
  }

  @Selector()
  static lastPage(state: RecipeStateModel) {
    return state.recipes;
  }

  @Selector()
  static totalRows(state: RecipeStateModel) {
    return state.totalRows;
  }

  @Selector()
  static lastLoadedRecipe(state: RecipeStateModel) {
    return state.lastLoadedRecipe;
  }
}
