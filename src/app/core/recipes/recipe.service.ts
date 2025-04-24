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
import { RecipeListModel } from './models/recipe-list.model';
import { RecipeDetailsModel } from './models/recipe-details.model';
import { RecipeLookupListModel } from './models/recipe-lookup-list.model';


const recipeAPI = environment.baseAdminV1Url + 'Recipe';
// const downloadImage = environment.baseUrl + '/download'

@Injectable()
export class RecipeService {
  private API_KEY = 'AIzaSyAS6AZT8_dr68NAGMkyh5hOpsxpDczUzJ8';
  private SEARCH_ENGINE_ID = '7327671c84e4a46c8';
  imageName: string;
  constructor(private httpClient: HttpClient) { }

  searchImages(query: string, numResults: number = 10) {
    const url = `${environment.baseUrl}/images?query=${query}&num=${numResults}`;
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
  ): Observable<BaseV1ResponseModel<RecipeListModel[]>> {
    return this.httpClient.get<BaseV1ResponseModel<RecipeListModel[]>>(
      recipeAPI + '/getPagedList',
      {
        params: HttpUtilsService.prepareGetPagedListQueryParams(queryParams),
      }
    );
  }

  getById(id: string): Observable<BaseV1ObjectResponseModel<RecipeDetailsModel>> {
    return this.httpClient.get<BaseV1ObjectResponseModel<RecipeDetailsModel>>(
      recipeAPI + '/getById',
      {
        params: {
          id: id,
        },
      }
    );
  }

  getRecipesLookUp(): Observable<BaseV1ObjectResponseModel<RecipeLookupListModel>> {
    return this.httpClient.get<BaseV1ObjectResponseModel<RecipeLookupListModel>>(
      recipeAPI + '/getRecipesLookup'
    );
  }

  getIngredientsLookUp(
    searchValue
  ): Observable<BaseV1ObjectResponseModel<string[]>> {
    return this.httpClient.get<BaseV1ObjectResponseModel<string[]>>(
      recipeAPI + '/GetIngredientLookup',
      {
        params: new HttpParams().append('searchWord', searchValue),
      }
    );
  }

  post(value: any): Observable<BaseV1ObjectResponseModel<string>> {
    const form = this.prepareFormModel(value);
    return this.httpClient.post<BaseV1ObjectResponseModel<string>>(
      recipeAPI + '/post',
      form
    );
  }

  postIngredients(value: string): Observable<any> {
    return this.httpClient.post(recipeAPI + '/PostIngredient', { name: value });
  }

  put(id: string, value: any) {
    const form = this.prepareFormModel(value);
    form.append('id', id);

    return this.httpClient.put<BaseV1ObjectResponseModel<string>>(
      recipeAPI + '/put',
      form
    );
  }

  prepareFormModel(value: any) {
    const form = new FormData();
    form.append('Name', value.name);
    form.append('MealType', value.label);
    form.append('RecipeTypeId', value.label);
    if (value.cockingTime)
      form.append('CockingTime', value.cockingTime ?? null);

    if (value.prepTime) form.append('PreparingTime', value.prepTime);
    const coverImage = value.coverImage?.file;

    if (value.service)
      form.append('Service', value.service ?? null);

    if (coverImage) {
      form.append('CoverImage', coverImage as Blob, coverImage.name);
    }
    if (value.steps) form.append('RecipeSteps', value.steps);

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
    return this.httpClient.delete(recipeAPI + '/delete', {
      params: { id },
    });
  }
}
