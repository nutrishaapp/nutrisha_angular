import { MealType } from './meal-type.enum';

export class MealDetailsModel {
  id: string;
  name: string;
  mealType: MealType = MealType.Breakfast;
  coverImage: string;
  preparingTime: string;
  cockingTime: string;
  service: string;
  ingredients: IngredientModel[];
  isEnglish: boolean;
  mealSteps: string;
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
