import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { debounceTime, distinctUntilChanged, Observable, Subject } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PagedListQueryModel } from '../../../core/shared/models/paged-list-query.model';
import { MealsActions } from '../../../core/store/meals/meals.action';
import { MealsState } from '../../../core/store/meals/meals.state';
import { MealListModel } from '../../../core/meals/models/meal-list.model';
import { MealType } from "../../../core/meals/models/meal-type.enum";


@UntilDestroy()
@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.scss'],
})
export class MealsListComponent implements OnInit {
  displayedColumns = [
    'icon',
    'name',
    'label',
    'cookingTime',
    'preparingTime',
    'service'
  ];



  mealType = MealType;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  queryParams = new PagedListQueryModel({});
  // selectedFilter: string | null;

  search$ = new Subject<string>();
  searchWord: string;
  isEnglish: string = 'false';

  selectedFilter: string | null = null;
  selectedFilterValue: string = '';



  // Store
  @Select(MealsState.lastPage) meals$: Observable<MealListModel[]>;
  @Select(MealsState.totalRows) totalRows$: Observable<number>;

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
    this.prepareQueryParams();
    this.store.dispatch(
      new MealsActions.LoadMealsPage(this.queryParams)
    );
  }

  prepareQueryParams() {
    this.queryParams.pageNumber = this.paginator.pageIndex;
    this.queryParams.pageSize = this.paginator.pageSize;
    this.queryParams.searchWord = this.searchWord;

    this.queryParams.customFilters = this.selectedFilter
      ? new Map<string, any>([[this.selectedFilter, this.selectedFilterValue]])
      : null;
  }
}
