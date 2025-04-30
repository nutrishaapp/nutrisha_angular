import { MealType } from './meal-type.enum';
import { RecipeType } from './recipe-type.enum';

export class RecipeDetailsModel {
  id: string;
  name: string;
  mealType: MealType = MealType.Breakfast;
  recipeTypeId: RecipeType = RecipeType.DairyFree;
  coverImage: string;
  preparingTime: string;
  cockingTime: string;
  service: string;
  isMealOfDay: boolean;
  ingredients: IngredientModel[];
  recipeSteps: string;
  allergies: string;
  calories: string;
  carbs: string;
  protein: string;
  fat: string;
  canEdit: boolean;
}

export class IngredientModel {
  quantity: number;
  unitType: IngredientUnitType;
  ingredientName: string;
}
export enum IngredientUnitType {
  Liter,
  Cup,
  Tbs,
  Tsp,
  Kg,
  Gram,
  Slice,
  Piece,
}

export const ingredientUnitTypeKeys = [
  'Liter',
  'Cup',
  'Tbs',
  'Tsp',
  'Kg',
  'Gram',
  'Slice',
  'Piece',
];
