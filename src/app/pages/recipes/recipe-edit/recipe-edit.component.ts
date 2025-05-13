import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  IngredientModel,
  IngredientUnitType,
  ingredientUnitTypeKeys,
} from '../../../core/meals/models/meal-details.model';
import { map, Observable, tap } from 'rxjs';
import { Store } from '@ngxs/store';
import { Media } from '../../../core/shared';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { RecipeDetailsModel } from 'src/app/core/recipes/models/recipe-details.model';
import { RecipeService } from 'src/app/core/recipes/recipe.service';
import { RecipesActions } from 'src/app/core/store/recipes/recipes.action';
import { RecipesState } from 'src/app/core/store/recipes/recipes.state';
import { RecipeType, recipeTypes } from 'src/app/core/recipes/models/recipe-type.enum';
import { MealType, mealTypes } from 'src/app/core/recipes/models/meal-type.enum';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@UntilDestroy()
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  recipe: RecipeDetailsModel;
  recipeForm: FormGroup;

  ingredientsForm: FormArray;

  isChecked: boolean = false;
  isCheckedRecipe: boolean = false;


  onToggle(event: MatSlideToggleChange) {
    const isChecked = event.checked;

    // Update label
    this.isChecked = isChecked ? true : false;

    // Send data to API
    const payload = { status: isChecked };
    this.isChecked = payload.status;
    console.log(payload.status)
  }

  onToggleRecipe(event: MatSlideToggleChange) {
    const isCheckedRecipe = event.checked;

    // Update label
    this.isCheckedRecipe = isCheckedRecipe ? true : false;

    // Send data to API
    const payload = { status: isCheckedRecipe };
    this.isCheckedRecipe = payload.status;
    console.log(payload.status)
  }


  // Start GPT

  recipeName: string = '';
  recipeSuggestions: string[] = [];
  recipeData: any = null;
  loading: boolean = false;
  error: string = '';
  openaiApiKey = environment.openaiApi



  query = '';
  results: any[] = [];
  selectedImageUrl: string | null = null;


  search() {
    this.recipeService.searchImages(this.recipeName).subscribe(
      (data: any) => {
        this.results = data.items
          .filter((item: any) =>
            !item.link.toLowerCase().includes('lookaside') &&
            /.(jpe?g|png)$/i.test(item.link)
          )
          .map((item: any, index: number) => ({
            id: index + 1,
            title: item.title,
            url: item.link,
          }));
        console.log(this.results);
        this.selectedImageUrl = null; // إعادة تعيين الصورة المحددة عند إجراء بحث جديد
      },
      (error) => {
        console.error('حدث خطأ أثناء البحث:', error);
      }
    );
  }

  downloadImage(imageUrl: string) {
    if (imageUrl) {
      this.recipeService.downloadImage(imageUrl);
    } else {
      alert('Please enter a valid image URL!');
    }

  }

  selectImage(result: any) {
    this.selectedImageUrl = result.url;
    this.downloadImage(this.selectedImageUrl)
  }

  async fetchSuggestions() {
    if (!this.recipeName.trim()) {
      this.recipeSuggestions = [];
      return;
    }

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini', // Use 'gpt-3.5-turbo' for a cheaper option
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant that provides food name suggestions based on user input.'
            },
            {
              role: 'user',
              content: `Suggest 5 meal names based on the input "${this.recipeName}" and do not type Let me know if you need more suggestions! .`
            }
          ],
          temperature: 0.7
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: this.openaiApiKey
          }
        }
      );

      const rawResponse = response.data.choices[0].message.content.trim();
      this.recipeSuggestions = rawResponse.split('\n').map((item: string) => item.replace(/^\d+\.\s*/, '').trim());
    } catch (err) {
      console.error('Error fetching suggestions:', err);
    }
  }

  selectSuggestion(suggestion: string) {
    this.recipeName = suggestion; // Update the input field
    this.recipeSuggestions = []; // Clear the suggestions dropdown
    this.search();
  }

  async searchRecipe(recipeName?: string) {
    const nameToSearch = recipeName || this.recipeName;
    this.search();
    if (!nameToSearch.trim()) {
      this.error = 'Please enter a recipe name';
      return;
    }

    this.loading = true;
    this.error = '';
    this.recipeData = null;

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant specialized in providing recipe details.'
            },
            {
              role: 'user',
              content: `Provide details about the meal "${nameToSearch}" in JSON format only without text after or before or json word and If "${nameToSearch}" is in Arabic, the result will be in Arabic and If "${nameToSearch}" is in English, the result will be in English , including:
                 - id
                 - name
                 - mealType (0,1,2,3,4,5,6,7,8) where (0=Breakfast,1=Lunch,2=Dinner,3=Snacks,4=Supplements,5=Recommended,6=DeliciousSnack,7=SomethingSpicy,8=SomethingSweet)
                 - RecipeTypeId (0,1,2,3,4,5,6) where (0=DairyFree,1=GlutenFree,2=LowFat,3=LowCarb,4=LowCalorie,5=SugarFree,6=Vegetarian)
                 - cookingTime (type min word instead minutes word after cookingTime and If "${nameToSearch}" is in Arabic, the result will be in Arabic and If "${nameToSearch}" is in English, the result will be in English)
                 - service (This recipe feeds how many people? Example: "one and 2 others" and If "${nameToSearch}" is in Arabic, the result will be in Arabic and If "${nameToSearch}" is in English, the result will be in English)
                 - preparingTime (If "${nameToSearch}" is in Arabic, the result will be in Arabic and If "${nameToSearch}" is in English, the result will be in English)
                 - coverImage 
                 - steps (each step on a separate line and next step in the next line and It is written in the form of dots (1-2-3) and not in one block)
                 - allergies (without Contains word only allergies )
                 - isEnglish (If "${nameToSearch}" is in Arabic, the result will be "false" and If "${nameToSearch}" is in English, the result will be "true")
                 - detailedIngredients (with quantity,unitType (0,1,2,3,4,5,6,7) where (0=Liter,1=Cup,2=Tbs,3=Tsp,4=kg,5=Gram,6=Slice,7=Piece),ingredientName(without unitType and quantity or word Cup of and Tsp of only name like oil or salt))`
            }
          ],
          temperature: 0.7
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: this.openaiApiKey
          }
        }
      );

      const rawResponse = response.data.choices[0].message.content.trim();
      this.recipeData = JSON.parse(rawResponse);
      console.log(this.recipeData);
      if (this.recipeData) {
        this.isCheckedRecipe = this.recipeData?.isEnglish;
      }
      this.recipeForm = this.formBuilder.group({
        name: this.formBuilder.control(this.recipeData?.name, [Validators.required]),
        label: this.formBuilder.control(this.recipeData?.mealType, [
          Validators.required,
        ]),
        isEnglish: this.formBuilder.control(this.recipeData?.isEnglish, [
        ]),
        prepTime: this.formBuilder.control(this.recipeData?.preparingTime, [
          this.nonSupplementValidator.bind(this),
        ]),
        recipeTypeId: this.formBuilder.control(this.recipeData?.recipeTypeId, [
        ]),
        isMealOfDay: this.formBuilder.control(this.recipeData?.isMealOfDay, [
        ]),
        cockingTime: this.formBuilder.control(this.recipeData?.cookingTime, [
          this.nonSupplementValidator.bind(this),
        ]),
        service: this.formBuilder.control(this.recipeData?.service, [
          this.nonSupplementValidator.bind(this),
        ]),
        steps: this.formBuilder.control(this.recipeData?.steps, []),
        allergies: this.formBuilder.control(this.recipeData?.allergies, []),
        coverImage: this.formBuilder.control(
          this.recipe?.coverImage
            ? new Media({
              url: this.recipe.coverImage,
            })
            : null,
          []
        ),
      });

      this.recipeForm.setControl('ingredients', this.initializeIngredientFormGpt());
      console.log(this.recipeForm);
    } catch (err) {
      this.error = 'Error fetching recipe details. Please try again.';
      console.error(err);
    } finally {
      this.loading = false;
    }
  }
  // end GPT

  // Enums
  recipeType = RecipeType;
  recipeTypeKeys = recipeTypes;
  selectedRecipeType:
    | RecipeType.DairyFree
    | RecipeType.GlutenFree
    | RecipeType.LowCalorie
    | RecipeType.LowCarb
    | RecipeType.LowFat
    | RecipeType.SugarFree
    | RecipeType.Vegetarian
    | RecipeType;

  // Enums
  mealType = MealType;
  mealTypeKeys = mealTypes;
  selectedMealType:
    | MealType.Breakfast
    | MealType.Lunch
    | MealType.Dinner
    | MealType.Snacks
    | MealType.Supplements
    | MealType.Recommended
    | MealType.DeliciousSnack
    | MealType.SomethingSpicy
    | MealType.SomethingSweet
    | MealType;

  ingredientUnitType = IngredientUnitType;
  ingredientUnitTypeKeys = ingredientUnitTypeKeys;
  ingredients$: Observable<string[]>;

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) { }


  reloadCurrentRoute(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    this.recipe = new RecipeDetailsModel();
    this.selectedRecipeType = RecipeType.DairyFree;
    this.initializeRicipeForm();

    this.activatedRoute.params
      .pipe(
        untilDestroyed(this),
        map((p) => p['id']),
        tap((recipeId) => {
          if (!recipeId) {
            return;
          }

          this.loadRecipe(recipeId);
        })
      )
      .subscribe();
  }

  loadRecipe(recipeId) {
    this.store.dispatch(new RecipesActions.LoadRecipeDetails(recipeId));

    this.store
      .select(RecipesState.lastLoadedRecipe)
      .pipe(untilDestroyed(this))
      .subscribe((recipe) => {
        if (!recipe?.id) {
          return;
        }

        this.selectedRecipeType = this.recipe.recipeTypeId;
        this.recipe = recipe;
        this.initializeRicipeForm();
      });
  }

  initializeRicipeForm() {
    this.recipeForm = this.formBuilder.group({
      name: this.formBuilder.control(this.recipe?.name, [Validators.required]),
      label: this.formBuilder.control(this.recipe?.mealType, [
        Validators.required,
      ]),
      isEnglish: this.formBuilder.control(this.recipe?.isEnglish, [
      ]),
      prepTime: this.formBuilder.control(this.recipe?.preparingTime, [
        this.nonSupplementValidator.bind(this),
      ]),
      recipeTypeId: this.formBuilder.control(this.recipe?.recipeTypeId, [
      ]),
      isMealOfDay: this.formBuilder.control(this.recipe?.isMealOfDay, [
      ]),
      cockingTime: this.formBuilder.control(this.recipe?.cockingTime, [
        this.nonSupplementValidator.bind(this),
      ]),
      service: this.formBuilder.control(this.recipe?.service, [
        this.nonSupplementValidator.bind(this),
      ]),
      steps: this.formBuilder.control(this.recipe?.recipeSteps, []),
      allergies: this.formBuilder.control(this.recipe?.allergies, []),
      coverImage: this.formBuilder.control(
        this.recipe?.coverImage
          ? new Media({
            url: this.recipe.coverImage,
          })
          : null,
        []
      ),
    });

    this.recipeForm.setControl('ingredients', this.initializeIngredientForm());
    this.isChecked = this.recipe?.isMealOfDay;
    this.isCheckedRecipe = this.recipe?.isEnglish;
  }

  submit() {
    const recipe: any = {
      name: this.recipeForm.value.name,
      isEnglish: this.isCheckedRecipe,
      isMealOfDay: this.isChecked,
      label: this.recipeForm.value.label,
      recipeTypeId: this.recipeForm.value.recipeTypeId,
      allergies: this.recipeForm.value.allergies,
      coverImage: this.recipeForm.value.coverImage,
    };

    if (recipe.label != MealType.Breakfast) {
      recipe.prepTime = this.recipeForm.value.prepTime;
      recipe.cockingTime = this.recipeForm.value.cockingTime;
      recipe.service = this.recipeForm.value.service;
      recipe.steps = this.recipeForm.value.steps;
      recipe.ingredients = [];
      if (this.recipeForm.value.ingredients) {
        for (let i = 0; i < this.recipeForm.value.ingredients.length; i++) {
          let ingredient = this.recipeForm.value.ingredients[i];
          if (ingredient.quantity != null && ingredient.unitType != null && ingredient.name != null) {
            //recipe.ingredients.splice(i,1);
            recipe.ingredients.push(ingredient);
          }
        }
      }
    }
    console.log(this.recipeForm.value);
    console.log(this.recipeForm.value.ingredients);
    console.log(recipe.ingredients);

    if (this.recipe.id) {
      this.recipeService
        .put(this.recipe.id, recipe)
        .pipe(untilDestroyed(this))
        .subscribe(async () => {
          await this.router.navigateByUrl('recipes/' + this.recipe.id);
        });
      return;
    }

    this.recipeService
      .post(recipe)
      .pipe(untilDestroyed(this))
      .subscribe(async (result) => {
        await this.router.navigateByUrl('recipes/' + result.data);
      });
  }

  initializeIngredientForm() {
    const controls =
      this.recipe?.ingredients && this.recipe?.ingredients.length
        ? this.recipe.ingredients.map((value) =>
          this.createIngredientGroup(value)
        )
        : [this.createIngredientGroup()];

    this.ingredientsForm = this.formBuilder.array(controls);
    return this.ingredientsForm;
  }

  initializeIngredientFormGpt() {
    const controls =
      this.recipeData?.detailedIngredients && this.recipeData?.detailedIngredients.length
        ? this.recipeData?.detailedIngredients.map((value) =>
          this.createIngredientGroup(value)
        )
        : [this.createIngredientGroup()];

    this.ingredientsForm = this.formBuilder.array(controls);
    return this.ingredientsForm;
  }

  createIngredientGroup(ingredientModel?: IngredientModel) {
    return this.formBuilder.group({
      quantity: this.formBuilder.control(ingredientModel?.quantity, []),
      unitType: this.formBuilder.control(ingredientModel?.unitType, []),
      name: this.formBuilder.control(ingredientModel?.ingredientName, []),
    });
  }

  searchIngredients(searchValue) {
    this.ingredients$ = this.recipeService.getIngredientsLookUp(searchValue).pipe(
      untilDestroyed(this),
      map((result) => result.data)
    );
  }

  addIngredient(value: string) {
    this.recipeService
      .postIngredients(value)
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  nonSupplementValidator(control: AbstractControl) {
    if (this.selectedMealType != MealType.Breakfast) {
      return control.value != null || control.value != undefined
        ? null
        : {};
    }

    return null;
  }

  mealTypeChanged($event: any) {
    this.selectedMealType = $event;
    this.updateTreeValidity(this.recipeForm);
  }

  recipeTypeChanged($event: any) {
    this.selectedRecipeType = $event;
    this.updateTreeValidity(this.recipeForm);
  }

  updateTreeValidity(group: FormGroup | FormArray): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.controls[key];

      if (
        abstractControl instanceof FormGroup ||
        abstractControl instanceof FormArray
      ) {
        this.updateTreeValidity(abstractControl);
      } else {
        abstractControl.updateValueAndValidity();
      }
    });
  }

  removeIngredient(index: number): void {
    const ingredientsFormArray = this.ingredientsForm as FormArray;
    ingredientsFormArray.removeAt(index);
  }
}
