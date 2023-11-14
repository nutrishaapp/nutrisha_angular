import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Select, Store } from '@ngxs/store';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileUserActions } from '../../../core/store/mobile-users/mobile-user.actions';
import { Observable, Subject, of, switchMap, takeUntil, tap } from 'rxjs';
import {
  MobileUserDetailsModel,
  MobileUserDetailsViewModel,
  MobileUserService,
} from '../../../core/mobile-users';
import { MealPlanService } from '../../../core/meal-plan/meal-plan.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DayOfWeek } from '../../../core/shared/models/day-of-week';
import { MealType } from '../../../core/meals/models/meal-type.enum';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MobileUserMoreInfoDialogComponent } from './sub/mobile-user-more-info-dialog/mobile-user-more-info-dialog.component';
import { TranslationService } from '../../../core/shared';
import { ConfirmDialogComponent } from '../../../core/shared/confirm-dialog/confirm-dialog.component';
import { MakePremiumComponent } from './sub/make-premium/make-premium.component';
import { DialogComponent } from './sub/dialog/dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UploadDocumentDialogComponent } from './sub/upload-document-dialog/upload-document-dialog.component';
import { UserDocumentsDialogComponent } from './sub/user-documents-dialog/user-documents-dialog.component';
import { userInfo } from 'os';
import { MealPlanListModel } from 'src/app/core/meal-plan/models/meal-plan-list.model';
import { Chart } from 'chart.js';
import { productSales, productSalesMulti, getWater } from 'products';





@UntilDestroy()
@Component({
  selector: 'app-mobile-user-details',
  templateUrl: './mobile-user-details.component.html',
  styleUrls: ['./mobile-user-details.component.scss'],
})
export class MobileUserDetailsComponent implements OnInit {

  getWatertype: string
  getWaterlable: string
  getWaterBare: any[]

  getWeghitMonthlytype: string
  getWeghitMonthlylable: string
  getWeghitMonthlyBar: any[]

  getBustMonthlytype: string
  getBustMonthlylable: string
  getBustMonthlyBar: any[]


  getWaistMonthlytype: string
  getWaistMonthlylable: string
  getWaistMonthlyBar: any[]


  getHipsMonthlytype: string
  getHipsMonthlylable: string
  getHipsMonthlyBar: any[]

  view: [number, number] = [700, 450];

  // start-chart
  legendTitle: string = 'Days';
  legendTitleMulti: string = 'Months';
  legendPosition: any = 'right'; // ['right', 'below']
  legend: boolean = false;

  xAxis: boolean = true;
  yAxis: boolean = true;

  yAxisLabel: string = 'Days';
  xAxisLabel: string = 'Water in Litres';
  showXAxisLabel: boolean = false;
  showYAxisLabel: boolean = false;

  maxXAxisTickLength: number = 30;
  maxYAxisTickLength: number = 30;
  trimXAxisTicks: boolean = false;
  trimYAxisTicks: boolean = false;
  rotateXAxisTicks: boolean = false;

  xAxisTicks: any[] = ['Genre 1', 'Genre 2', 'Genre 3', 'Genre 4', 'Genre 5', 'Genre 6', 'Genre 7']
  yAxisTicks: any[] = [1, 2, 3]

  animations: boolean = true; // animations on load

  showGridLines: boolean = false; // grid lines

  showDataLabel: boolean = true; // numbers on bars

  gradient: boolean = false;
  colorScheme: any = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F', '#ca3427', '#399967']
  };
  schemeType: any = 'ordinal'; // 'ordinal' or 'linear'

  activeEntries: any[] = ['book']
  barPadding: number = 5
  tooltipDisabled: boolean = false;

  yScaleMax: number = 9000;

  roundEdges: boolean = true;

  //end-chart

  userDetails: MobileUserDetailsViewModel;
  mealTypes = MealType;
  selectedFiles = [];
  myChart: any;

  userId: string;
  currentPlanSelectedDay = DayOfWeek.SATURDAY;
  lastPlanSelectedDay = DayOfWeek.SATURDAY;

  @Select((state) => state.mobileUsers.lastLoadedUser)
  user$: Observable<MobileUserDetailsViewModel>;

  displayedColumns: string[] = ['title', 'notes', 'date', 'action'];
  dataSource: MatTableDataSource<any>;



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    public router: Router,
    private matDialog: MatDialog,
    private translateService: TranslationService,
    private mobileUserService: MobileUserService,
    private mealPlanService: MealPlanService,
    private dialog: MatDialog,
  ) { Object.assign(this, { productSales, productSalesMulti, getWater }); }



  onSelect(event: any) {
    console.log(event);
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  formatString(input: string): string {
    return input.toUpperCase()
  }

  formatNumber(input: number): number {
    return input
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params['id'];
      this.loadUserDetails(params['id']);
    });

    this.user$
      .pipe(untilDestroyed(this))
      .subscribe((u) => {
        this.userDetails = u;
      });
    //.subscribe((u) => (this.userDetails = u));
    this.getAllNotes();
    this.getWaterBar();
    this.getWeghitMonthly();
  }


  loadUserDetails(id: string) {
    this.store.dispatch(new MobileUserActions.LoadUserDetails(id));
  }

  openMoreDetailsDialog() {
    this.matDialog.open(MobileUserMoreInfoDialogComponent, {
      data: { userId: this.userId },
      direction: this.translateService.dir,
    });
  }

  banUser(id: string) {
    this.matDialog
      .open(ConfirmDialogComponent, {})
      .afterClosed()
      .pipe(
        switchMap((response) => {
          if (response) {
            this.mobileUserService.ban(id).subscribe((result) => {
              if (result.statusCode == 200) {
                if (result.done == true) {
                  this.userDetails.isBanned = true;
                }
              }
            });
          }

          return of(false);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  unBanUser(id: string) {
    this.matDialog
      .open(ConfirmDialogComponent, {})
      .afterClosed()
      .pipe(
        switchMap((response) => {
          if (response) {
            this.mobileUserService.unBan(id).subscribe((result) => {
              if (result.statusCode == 200) {
                if (result.done == true) {
                  this.userDetails.isBanned = false;
                }
              }
            });
          }

          return of(false);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  deleteMealPlan(mealPlanId: number, userId: string) {
    this.matDialog
      .open(ConfirmDialogComponent, {})
      .afterClosed()
      .pipe(
        switchMap((d) => {
          if (d) {
            return this.mealPlanService
              .delete(mealPlanId.toString())
              .pipe(
                tap(async () => {
                  await this.loadUserDetails(this.userId)
                }));
          }
          return of(false);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }


  openMakePremiumDialog() {
    const makePremiumDialog = this.matDialog.open(MakePremiumComponent, {
      data: { userId: this.userId },
      direction: this.translateService.dir,
    });

    makePremiumDialog
      .afterClosed()
      .pipe(untilDestroyed(this))
      .subscribe((success) => {
        if (!success) {
          return;
        }

        this.loadUserDetails(this.userId);
      });

  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: "50%",
      data: { userId: this.userId },
      direction: this.translateService.dir,
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getAllNotes();
      }
    });
  }
  getAllNotes() {
    this.mobileUserService.getUserNotes(this.userId).subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert("Error while fetching the Records")
      },
    });
  }

  getUserDocuments() {
    this.mobileUserService.getFiles(this.userId).subscribe({
      next: (res) => {
        console.log(res.data);
      },
      error: (err) => {
        alert("Error while fetching the Records")
      },
    });
  }

  editNote(row: any) {
    this.dialog.open(DialogComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getAllNotes();
      }
    });
  }

  uploadDocument(row: any) {
    this.dialog.open(UploadDocumentDialogComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(val => {
    });
  }

  userDocuments() {
    this.dialog.open(UserDocumentsDialogComponent, {
      width: '50%',
    }).afterClosed().subscribe(val => { });
  }

  deleteNote(id: number) {
    this.matDialog
      .open(ConfirmDialogComponent, {})
      .afterClosed()
      .pipe(
        switchMap((d) => {
          if (d) {
            return this.mobileUserService.deleteNote(id)
              .pipe(
                tap(async () => {
                  await this.getAllNotes()
                }));
          }
          return of(false);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getWaterBar() {
    this.mobileUserService.getWaterBar(this.userId).subscribe({
      next: (res) => {
        this.getWatertype = res.data.type;
        this.getWaterlable = res.data.lable;
        this.getWaterBare = res.data.data;
      },
      error: (err) => {
        alert("Error while fetching the Records")
      },
    });
  }

  getWeghitMonthly() {
    this.mobileUserService.getWeghitMonthlyBar(this.userId).subscribe({
      next: (res) => {
        console.log(res.data[0]);
        this.getWeghitMonthlytype = res.data[0].type;
        this.getWeghitMonthlylable = res.data[0].lable;
        this.getWeghitMonthlyBar = res.data[0].data;

        this.getBustMonthlytype = res.data[1].type
        this.getBustMonthlylable = res.data[1].lable
        this.getBustMonthlyBar = res.data[1].data;


        this.getWaistMonthlytype = res.data[2].type
        this.getWaistMonthlylable = res.data[2].lable
        this.getWaistMonthlyBar = res.data[2].data;


        this.getHipsMonthlytype = res.data[3].type
        this.getHipsMonthlylable = res.data[3].lable
        this.getHipsMonthlyBar = res.data[3].data;
      },
      error: (err) => {
        alert("Error while fetching the Records")
      },
    });
  }

}


