// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { debounceTime, distinctUntilChanged, Observable, Subject } from 'rxjs';
// import { Select, Store } from '@ngxs/store';
// import { Router } from '@angular/router';
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
// import { PagedListQueryModel } from '../../../core/shared/models/paged-list-query.model';
// import { HungerVideosActions } from 'src/app/core/store/hunger-videos/hunger-videos.actions';
// @UntilDestroy()
// @Component({
//   selector: 'app-hunger-vedio-list',
//   templateUrl: './hunger-vedio-list.component.html',
//   styleUrls: ['./hunger-vedio-list.component.scss']
// })
// export class HungerVedioListComponent implements OnInit {
//   displayedColumns = ['title', 'tag', 'createdAt'];

//   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

//   search$ = new Subject<string>();
//   searchWord: string;

//   // Store
//   @Select((state) => state.hungerVideos.hungerVideosPage) hungerVideos$: Observable<
//     any
//   >;
//   @Select((state) => state.hungerVideos?.totalRows) totalRows$;

//   constructor(public router: Router, private store: Store) { }

//   ngOnInit(): void {
//     this.loadHungerVideos();
//   }

//   ngAfterViewInit(): void {
//     this.search$
//       .pipe(untilDestroyed(this), distinctUntilChanged(), debounceTime(150))
//       .subscribe((searchTerm) => {
//         this.searchWord = searchTerm;
//         this.paginator.pageIndex = 0;

//         this.loadHungerVideos();
//       });
//   }

//   loadHungerVideos() {
//     this.store.dispatch(
//       new HungerVideosActions.LoadHungerVideosPage(this.prepareQueryParams())
//     );
//   }

//   prepareQueryParams() {
//     return new PagedListQueryModel({
//       pageNumber: this.paginator.pageIndex,
//       pageSize: this.paginator.pageSize,
//       searchWord: this.searchWord,
//     });
//   }

// }

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HungerVedioService } from 'src/app/core/hunger-vedio/services/hunger-vedio.service';
import { TranslationService } from 'src/app/core/shared/services/translate.service';

@Component({
  selector: 'app-hunger-vedio-list',
  templateUrl: './hunger-vedio-list.component.html',
  styleUrls: ['./hunger-vedio-list.component.scss']
})
export class HungerVedioListComponent implements OnInit {
  displayedColumns: string[] = ['subject', 'hungerType', 'createdAt'];
  dataSource = new MatTableDataSource([]);
  totalItems = 0;
  pageSize = 10;
  searchControl = new FormControl('');
  search$: Observable<any>;
  lang: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public router: Router, private videoService: HungerVedioService, private getSelectedLanguage: TranslationService,) { }

  ngOnInit(): void {
    this.lang = this.getSelectedLanguage.getSelectedLanguage();
    this.search$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    );

    this.loadHungerVideos();

    this.search$.subscribe(() => {
      this.paginator.pageIndex = 0;
      this.loadHungerVideos();
    });
  }

  loadHungerVideos(): void {
    const page = this.paginator ? this.paginator.pageIndex + 1 : 1;
    const search = this.searchControl.value || '';
    this.videoService.getVideos(page, this.pageSize, search).subscribe(data => {
      this.dataSource.data = data.data || [];
      this.totalItems = data.totalRows || 0;
    });
  }

  onPageChange(event: any): void {
    this.pageSize = event.pageSize;
    this.loadHungerVideos();
  }
}
