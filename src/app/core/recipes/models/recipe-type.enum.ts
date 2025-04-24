export enum RecipeType {
    DairyFree = 0,
    GlutenFree = 1,
    LowFat = 2,
    LowCarb = 3,
    LowCalorie = 4,
    SugarFree = 5,
    Vegetarian = 6,
}

export const getMealTypeByKey = (key: string) => {
    const firstLetter = key[0].toUpperCase();
    return RecipeType[firstLetter + key.substring(1)];
};

export const recipeTypes: RecipeType[] = [
    RecipeType.DairyFree,
    RecipeType.GlutenFree,
    RecipeType.LowFat,
    RecipeType.LowCarb,
    RecipeType.LowCalorie,
    RecipeType.SugarFree,
    RecipeType.Vegetarian,
];
