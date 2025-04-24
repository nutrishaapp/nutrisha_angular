import { PagedListQueryModel } from '../../shared';

export namespace RecipesActions {
  export class LoadRecipesPage {
    public static type = '[Recipes] Load Recipes';

    constructor(public queryParams: PagedListQueryModel) { }
  }

  export class LoadRecipeDetails {
    public static type = '[Recipes] Load Recipe Details';

    constructor(public id: string) { }
  }
}
