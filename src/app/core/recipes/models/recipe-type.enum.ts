export enum RecipeType {
    DairyFree = 1,
    GlutenFree = 2,
    LowFat = 3,
    LowCarb = 4,
    LowCalorie = 5,
    SugarFree = 6,
    Vegetarian = 7,
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
