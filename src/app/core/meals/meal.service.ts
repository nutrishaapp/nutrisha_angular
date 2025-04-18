import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  BaseV1ObjectResponseModel,
  BaseV1ResponseModel,
  HttpUtilsService,
  PagedListQueryModel,
} from '../shared';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MealListModel } from './models/meal-list.model';
import { MealDetailsModel } from './models/meal-details.model';
import { MealLookupListModel } from './models/meal-lookup-list.model';

const mealAPI = environment.baseAdminV1Url + 'Meal';
// const downloadImage = environment.baseUrl + '/download'

@Injectable()
export class MealService {
  private API_KEY = 'AIzaSyAS6AZT8_dr68NAGMkyh5hOpsxpDczUzJ8';
  private SEARCH_ENGINE_ID = '7327671c84e4a46c8';
  imageName: string;
  constructor(private httpClient: HttpClient) { }

  searchImages(query: string, numResults: number = 10) {
    const url = `https://dev.api.nutrisha.app/images?query=${query}&num=${numResults}`;
    return this.httpClient.get(url);
  }
  private apiUrl = 'https://image-download-beryl.vercel.app/download-image'; // Backend URL // Replace with your Node.js server URL
  downloadImage(imageUrl: string): void {
    const downloadLink = document.createElement('a');

    this.httpClient
      .get(`${this.apiUrl}?url=${encodeURIComponent(imageUrl)}`, {
        responseType: 'blob', // Get the image as a Blob
      })
      .subscribe((blob) => {
        const url = window.URL.createObjectURL(blob);
        downloadLink.href = url;
        this.imageName = `downloaded-image-${Date.now()}.jpg`
        downloadLink.download = this.imageName; // Default file name
        downloadLink.click();
        window.URL.revokeObjectURL(url); // Clean up
      });
  }


  getPagedList(
    queryParams: PagedListQueryModel
  ): Observable<BaseV1ResponseModel<MealListModel[]>> {
    return this.httpClient.get<BaseV1ResponseModel<MealListModel[]>>(
      mealAPI + '/getPagedList',
      {
        params: HttpUtilsService.prepareGetPagedListQueryParams(queryParams),
      }
    );
  }

  getById(id: string): Observable<BaseV1ObjectResponseModel<MealDetailsModel>> {
    return this.httpClient.get<BaseV1ObjectResponseModel<MealDetailsModel>>(
      mealAPI + '/getById',
      {
        params: {
          id: id,
        },
      }
    );
  }

  getMealsLookUp(): Observable<BaseV1ObjectResponseModel<MealLookupListModel>> {
    return this.httpClient.get<BaseV1ObjectResponseModel<MealLookupListModel>>(
      mealAPI + '/getMealsLookup'
    );
  }

  getIngredientsLookUp(
    searchValue
  ): Observable<BaseV1ObjectResponseModel<string[]>> {
    return this.httpClient.get<BaseV1ObjectResponseModel<string[]>>(
      mealAPI + '/GetIngredientLookup',
      {
        params: new HttpParams().append('searchWord', searchValue),
      }
    );
  }

  post(value: any): Observable<BaseV1ObjectResponseModel<string>> {
    const form = this.prepareFormModel(value);
    return this.httpClient.post<BaseV1ObjectResponseModel<string>>(
      mealAPI + '/post',
      form
    );
  }

  postIngredients(value: string): Observable<any> {
    return this.httpClient.post(mealAPI + '/PostIngredient', { name: value });
  }

  put(id: string, value: any) {
    const form = this.prepareFormModel(value);
    form.append('id', id);

    return this.httpClient.put<BaseV1ObjectResponseModel<string>>(
      mealAPI + '/put',
      form
    );
  }

  prepareFormModel(value: any) {
    const form = new FormData();
    form.append('Name', value.name);
    form.append('MealType', value.label);
    if (value.cockingTime)
      form.append('CockingTime', value.cockingTime ?? null);

    if (value.prepTime) form.append('PreparingTime', value.prepTime);
    const coverImage = value.coverImage?.file;

    if (value.service)
      form.append('Service', value.service ?? null);

    if (coverImage) {
      form.append('CoverImage', coverImage as Blob, coverImage.name);
    }
    if (value.steps) form.append('MealSteps', value.steps);

    form.append('Allergies', value.allergies);

    const ingredients = value.ingredients;
    ingredients?.forEach((ingredient, i) => {
      const key = `Ingredients[${i}]`;
      form.append(key + '.quantity', ingredient?.quantity?.toString());
      form.append(key + '.IngredientName', ingredient?.name);
      form.append(key + '.UnitType', ingredient?.unitType?.toString());
    });

    return form;
  }
  delete(id) {
    return this.httpClient.delete(mealAPI + '/delete', {
      params: { id },
    });
  }
}
