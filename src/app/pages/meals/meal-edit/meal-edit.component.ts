import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MealType, mealTypes } from '../../../core/meals/models/meal-type.enum';
import { MealService } from '../../../core/meals/meal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  IngredientModel,
  IngredientUnitType,
  ingredientUnitTypeKeys,
  MealDetailsModel,
} from '../../../core/meals/models/meal-details.model';
import { map, Observable, tap } from 'rxjs';
import { MealsActions } from '../../../core/store/meals/meals.action';
import { Store } from '@ngxs/store';
import { MealsState } from '../../../core/store/meals/meals.state';
import { Media } from '../../../core/shared';
import axios from 'axios';

@UntilDestroy()
@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-edit.component.html',
  styleUrls: ['./meal-edit.component.scss'],
})
export class MealEditComponent implements OnInit {
  meal: MealDetailsModel;
  mealForm: FormGroup;

  ingredientsForm: FormArray;

  // Start GPT
  mealName: string = '';
  mealData: any = null;
  loading: boolean = false;
  error: string = '';

  async searchMeal() {
    if (!this.mealName.trim()) {
      this.error = 'Please enter a meal name';
      return;
    }

    this.loading = true;
    this.error = '';
    this.mealData = null;

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini', // Use 'gpt-3.5-turbo' for a cheaper option
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant specialized in providing recipe details.'
            },
            {
              role: 'user',
              content: `Provide details about the meal "${this.mealName}" in JSON format only without text after or before or json word , including:
                - id
                - name
                - mealType (0,1,2,3,4,5,6,7,8) where (0=Breakfast,1=Lunch,2=Dinner,3=Snacks,4=Supplements,5=Recommended,6=DeliciousSnack,7=SomethingSpicy,8=SomethingSweet)
                - cookingTime (type min word instead minutes word after cookingTime)
                - preparingTime
                - coverImage 
                - steps
                - allergies (without Contains word only allergies )
                - detailedIngredients (with quantity,unitType (0,1,2,3,4,5,6,7) where (0=Liter,1=Cup,2=Tbs,3=Tsp,4=kg,5=Gram,6=Slice,7=Piece),ingredientName(only name without unitType and quantity ))`
            }
          ],
          temperature: 0.7
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer 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` // Replace <YOUR_API_KEY> with your OpenAI API key
          }
        }
      );

      const rawResponse = response.data.choices[0].message.content.trim();
      this.mealData = JSON.parse(rawResponse);
      console.log(this.mealData);
      this.mealForm = this.formBuilder.group({
        name: this.formBuilder.control(this.mealData?.name, [Validators.required]),
        label: this.formBuilder.control(this.mealData?.mealType, [
          Validators.required,
        ]),
        prepTime: this.formBuilder.control(this.mealData?.preparingTime, [
          this.nonSupplementValidator.bind(this),
        ]),
        cockingTime: this.formBuilder.control(this.mealData?.cookingTime, [
          this.nonSupplementValidator.bind(this),
        ]),
        steps: this.formBuilder.control(this.mealData?.steps, []),
        allergies: this.formBuilder.control(this.mealData?.allergies, []),
        coverImage: this.formBuilder.control(
          this.meal?.coverImage
            ? new Media({
              url: this.meal.coverImage,
            })
            : null,
          []
        ),
      });

      this.mealForm.setControl('ingredients', this.initializeIngredientFormGpt());
      console.log(this.mealForm);
    } catch (err) {
      this.error = 'Error fetching meal details. Please try again.';
      console.error(err);
    } finally {
      this.loading = false;
    }
  }
  // end GPT

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
    private mealService: MealService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.meal = new MealDetailsModel();
    this.selectedMealType = MealType.Breakfast;
    this.initializeMealForm();

    this.activatedRoute.params
      .pipe(
        untilDestroyed(this),
        map((p) => p['id']),
        tap((mealId) => {
          if (!mealId) {
            return;
          }

          this.loadMeal(mealId);
        })
      )
      .subscribe();
  }

  loadMeal(mealId) {
    this.store.dispatch(new MealsActions.LoadMealDetails(mealId));

    this.store
      .select(MealsState.lastLoadedMeal)
      .pipe(untilDestroyed(this))
      .subscribe((meal) => {
        if (!meal?.id) {
          return;
        }

        this.selectedMealType = this.meal.mealType;
        this.meal = meal;
        this.initializeMealForm();
      });
  }

  initializeMealForm() {
    this.mealForm = this.formBuilder.group({
      name: this.formBuilder.control(this.meal?.name, [Validators.required]),
      label: this.formBuilder.control(this.meal?.mealType, [
        Validators.required,
      ]),
      prepTime: this.formBuilder.control(this.meal?.preparingTime, [
        this.nonSupplementValidator.bind(this),
      ]),
      cockingTime: this.formBuilder.control(this.meal?.cockingTime, [
        this.nonSupplementValidator.bind(this),
      ]),
      steps: this.formBuilder.control(this.meal?.mealSteps, []),
      allergies: this.formBuilder.control(this.meal?.allergies, []),
      coverImage: this.formBuilder.control(
        this.meal?.coverImage
          ? new Media({
            url: this.meal.coverImage,
          })
          : null,
        []
      ),
    });

    this.mealForm.setControl('ingredients', this.initializeIngredientForm());
  }

  submit() {
    const meal: any = {
      name: this.mealForm.value.name,
      label: this.mealForm.value.label,
      allergies: this.mealForm.value.allergies,
      coverImage: this.mealForm.value.coverImage,
    };

    if (meal.label != MealType.Supplements) {
      meal.prepTime = this.mealForm.value.prepTime;
      meal.cockingTime = this.mealForm.value.cockingTime;
      meal.steps = this.mealForm.value.steps;
      meal.ingredients = [];
      /*meal.ingredients = this.mealForm.value.ingredients;
      if(this.mealForm.value.ingredients && this.mealForm.value.ingredients.length == 1 && this.mealForm.value.ingredients[0].quantity == null) {
        meal.ingredients = null;
      }*/
      if (this.mealForm.value.ingredients) {
        for (let i = 0; i < this.mealForm.value.ingredients.length; i++) {
          let ingredient = this.mealForm.value.ingredients[i];
          if (ingredient.quantity != null && ingredient.unitType != null && ingredient.name != null) {
            //meal.ingredients.splice(i,1);
            meal.ingredients.push(ingredient);
          }
        }
      }
    }
    console.log(this.mealForm.value);
    console.log(this.mealForm.value.ingredients);
    console.log(meal.ingredients);

    if (this.meal.id) {
      this.mealService
        .put(this.meal.id, meal)
        .pipe(untilDestroyed(this))
        .subscribe(async () => {
          await this.router.navigateByUrl('meals/' + this.meal.id);
        });
      return;
    }

    this.mealService
      .post(meal)
      .pipe(untilDestroyed(this))
      .subscribe(async (result) => {
        await this.router.navigateByUrl('meals/' + result.data);
      });
  }

  initializeIngredientForm() {
    const controls =
      this.meal?.ingredients && this.meal?.ingredients.length
        ? this.meal.ingredients.map((value) =>
          this.createIngredientGroup(value)
        )
        : [this.createIngredientGroup()];

    this.ingredientsForm = this.formBuilder.array(controls);
    return this.ingredientsForm;
  }

  initializeIngredientFormGpt() {
    const controls =
      this.mealData?.detailedIngredients && this.mealData?.detailedIngredients.length
        ? this.mealData?.detailedIngredients.map((value) =>
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
    this.ingredients$ = this.mealService.getIngredientsLookUp(searchValue).pipe(
      untilDestroyed(this),
      map((result) => result.data)
    );
  }

  addIngredient(value: string) {
    this.mealService
      .postIngredients(value)
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  nonSupplementValidator(control: AbstractControl) {
    if (this.selectedMealType != MealType.Supplements) {
      return control.value != null || control.value != undefined
        ? null
        : {};
    }

    return null;
  }

  mealTypeChanged($event: any) {
    this.selectedMealType = $event;
    this.updateTreeValidity(this.mealForm);
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
}
