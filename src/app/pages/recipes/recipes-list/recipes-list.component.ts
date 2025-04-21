import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { debounceTime, distinctUntilChanged, Observable, Subject } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PagedListQueryModel } from '../../../core/shared';
import { RecipeType } from 'src/app/core/recipes/models/recipe-type.enum';
import { RecipeListModel } from 'src/app/core/recipes/models/recipe-list.model';
import { RecipesState } from 'src/app/core/store/recipes/recipes.state';
import { RecipesActions } from 'src/app/core/store/recipes/recipes.action';

@UntilDestroy()
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  displayedColumns = [
    'icon',
    'name',
    'label',
    'cookingTime',
    'preparingTime',
    'service'
  ];

  recipeType = RecipeType;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  search$ = new Subject<string>();
  searchWord: string;

  // Store
  @Select(RecipesState.lastPage) recipes$: Observable<RecipeListModel[]>;
  @Select(RecipesState.totalRows) totalRows$: Observable<number>;

  constructor(public router: Router, private store: Store) { }

  ngOnInit(): void {
    this.loadArticles();
  }

  ngAfterViewInit(): void {
    this.search$
      .pipe(untilDestroyed(this), distinctUntilChanged(), debounceTime(150))
      .subscribe((searchTerm) => {
        this.searchWord = searchTerm;
        this.paginator.pageIndex = 0;

        this.loadArticles();
      });
  }

  loadArticles() {
    this.store.dispatch(
      new RecipesActions.LoadRecipesPage(this.prepareQueryParams())
    );
  }

  prepareQueryParams() {
    return new PagedListQueryModel({
      pageNumber: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      searchWord: this.searchWord,
    });
  }
}
