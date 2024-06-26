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
import { productSales, productSalesMulti, emoji } from 'products';
import { DatePipe } from '@angular/common';
import { HungryQuestionService } from 'src/app/core/hungryQuestions/services/hungry-question.service';




interface TummyMakingNoises {
  id: number;
  userId: number;
  created: string;
  hungryNo: number;
  sleepNo: number;
  lastMealTime: string;
  waterTime: string;
  mealCategoryName: string;
  mealName: string;
  mealCategoryNameAr: string;
  wantToEat: string;
}

interface FeelingChewy {
  id: number;
  userId: number;
  created: string;
  whereAreU: string;
  otherPalce: string;
  spot: string;
  otherSpot: string;
  anyoneAroundYou: string;
  doingRightNow: string;
  otherDoingRightNow: string;
  oftenMouthHunger: string;
  whereAreUAr: string | null;
  otherPalceAr: string;
  spotAr: string;
  otherSpotAr: string;
  anyoneAroundYouAr: string;
  doingRightNowAr: string;
  otherDoingRightNowAr: string;
  oftenMouthHungerAr: string | null;
  chooseOrDistract: number;
  mealCategoryName: string;
  mealName: string;
  mealCategoryNameAr: string;
  wantToEat: string;
}

export interface EmotionalCrave {
  id: number;
  userId: number;
  created: string;
  feel: string;
  feelAr: string;
  hungryNo: number;
  sleepNo: number;
  lastMealTime: string;
  waterTime: string;
  mealCategoryName: string;
  mealName: string;
  mealCategoryNameAr: string;
  doingRightNow: string;
  otherDoingRightNow: string;
  doingRightNowAr: string;
  otherDoingRightNowAr: string;
  wantToEat: string;
}
@UntilDestroy()
@Component({
  selector: 'app-mobile-user-details',
  templateUrl: './mobile-user-details.component.html',
  styleUrls: ['./mobile-user-details.component.scss'],
})
export class MobileUserDetailsComponent implements OnInit {
  lang: string;
  displayedColumns_1: string[] = [
    'created', 'hungryNo', 'sleepNo', 'lastMealTime',
    'waterTime', 'mealCategoryName', 'mealName', 'wantToEat'
  ];

  displayedColumns_2: string[] = [
    'created', 'whereAreU', 'otherPalce', 'spot', 'otherSpot', 'anyoneAroundYou', 'doingRightNow', 'otherDoingRightNow', 'oftenMouthHunger', 'chooseOrDistract', 'mealCategoryName', 'mealName', 'wantToEat'
  ];

  displayedColumns_3: string[] = [
    'date', 'feel', 'hungryNo', 'sleepNo',
    'lastMealTime', 'waterTime', 'mealCategoryName', 'mealName', 'doingRightNow', 'otherDoingRightNow', 'wantToEat'
  ];

  dataSource_1: MatTableDataSource<TummyMakingNoises>;
  dataSource_2: MatTableDataSource<FeelingChewy>;
  dataSource_3: MatTableDataSource<EmotionalCrave>;
  selectedType = 'Bar';
  public chart: any;

  onChange(event) {
    this.selectedType = event.target.value;
  }
  userMood: any[];
  mealData: any;
  menuTypes = [];
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

  getStepsMonthlytype: string
  getStepsMonthlylable: string
  getStepsMonthlyBar: any[]


  getSleepMonthlytype: string
  getSleepMonthlylable: string
  getSleepMonthlyBar: any[]

  getHeartMonthlytype: string
  getHeartMonthlylable: string
  getHeartMonthlyBar: any[]

  getPeriodMonthlytype: string
  getPeriodMonthlylable: string
  getPeriodMonthlyBar: any[]


  getWeghitDailytype: string
  getWeghitDailylable: string
  getWeghitDailyBar: any[]

  getBustDailytype: string
  getBustDailylable: string
  getBustDailyBar: any[]


  getWaistDailytype: string
  getWaistDailylable: string
  getWaistDailyBar: any[]


  getHipsDailytype: string
  getHipsDailylable: string
  getHipsDailyBar: any[]

  getStepsDailytype: string
  getStepsDailylable: string
  getStepsDailyBar: any[]

  getSleepDailytype: string
  getSleepDailylable: string
  getSleepDailyBar: any[]

  getHeartDailytype: string
  getHeartDailylable: string
  getHeartDailyBar: any[]

  getPeriodDailytype: string
  getPeriodDailylable: string
  getPeriodDailyBar: any[]

  getCurrentPlantype: string
  getCurrentPlanlable: string
  getCurrentPlanBare: any[]

  view: [number, number] = [700, 450];

  // start-chart
  legendTitle: string = 'Days';
  legendTitleMulti: string = 'Months';
  legendPosition: any = 'right'; // ['right', 'below']
  legend: boolean = false;

  xAxis: boolean = true;
  yAxis: boolean = true;

  yAxisLabel: string = 'Days';
  xAxisLabel: string;
  showXAxisLabel: boolean = false;
  showYAxisLabel: boolean = true;

  maxXAxisTickLength: number = 30;
  maxYAxisTickLength: number = 30;
  trimXAxisTicks: boolean = false;
  trimYAxisTicks: boolean = false;
  rotateXAxisTicks: boolean = false;


  xAxisTicks: any[] = ['Genre 1', 'Genre 2', 'Genre 3', 'Genre 4', 'Genre 5', 'Genre 6', 'Genre 7']
  xAxisTicks_meal: any[] = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Supplement', 'Water', 'ExtraBites', 'Recommended']
  yAxisTicks_meal_days: any[] = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday']
  yAxisTicks: any[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300]
  yAxisTicks_sleep: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
  yAxisTicks_period: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  yAxisTicks_heart: any[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  yAxisTicks_steps: any[] = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000, 29000, 30000]
  yAxisTicks_2: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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


  viewLC: [number, number] = [700, 450];
  animationsLC = true;
  showGridLinesLC = true;
  legendLC = true;
  legendTitleLC = "Countries";
  roundDomainsLC = true;
  xAxisLC = true;
  yAxisLC = true;





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
    private mealDataService: HungryQuestionService, private getSelectedLanguage: TranslationService,
    private store: Store,
    private activatedRoute: ActivatedRoute,
    public router: Router,
    private matDialog: MatDialog,
    private translateService: TranslationService,
    private mobileUserService: MobileUserService,
    private mealPlanService: MealPlanService,
    private dialog: MatDialog,
  ) { Object.assign(this, { productSales, productSalesMulti, emoji }); }



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
    this.lang = this.getSelectedLanguage.getSelectedLanguage();
    this.mealDataService.getTummyMakingNoises().subscribe(
      (data) => {
        this.dataSource_1 = new MatTableDataSource(data.data);
        this.dataSource_1.paginator = this.paginator;
        this.dataSource_1.sort = this.sort;
      },
      (error) => {
        console.error('Error fetching meal data', error);
      }
    );

    this.mealDataService.getFeelingChewy().subscribe(
      (data) => {
        this.dataSource_2 = new MatTableDataSource(data.data);
        this.dataSource_2.paginator = this.paginator;
        this.dataSource_2.sort = this.sort;
      },
      (error) => {
        console.error('Error fetching meal data', error);
      }
    );

    this.mealDataService.getEmotionalCrave().subscribe(
      (data) => {
        this.dataSource_3 = new MatTableDataSource(data.data);
        this.dataSource_3.paginator = this.paginator;
        this.dataSource_3.sort = this.sort;
      },
      (error) => {
        console.error('Error fetching meal data', error);
      }
    );
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
    this.getWeghitDaily();
    this.getWeghitMonthly();
    this.getUserMood();
    this.getCurrentPlanBar();
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
        console.log(res.data[7].data);
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

        this.getStepsMonthlytype = res.data[4].type
        this.getStepsMonthlylable = res.data[4].lable
        this.getStepsMonthlyBar = res.data[4].data;

        this.getSleepMonthlytype = res.data[5].type
        this.getSleepMonthlylable = res.data[5].lable
        this.getSleepMonthlyBar = res.data[5].data;

        this.getHeartMonthlytype = res.data[6].type
        this.getHeartMonthlylable = res.data[6].lable
        this.getHeartMonthlyBar = res.data[6].data;

        this.getPeriodMonthlytype = res.data[7].type
        this.getPeriodMonthlylable = res.data[7].lable
        this.getPeriodMonthlyBar = res.data[7].data;
      },
      error: (err) => {
        alert("Error while fetching the Records")
      },
    });
  }

  getWeghitDaily() {
    this.mobileUserService.getWeghitDailyBar(this.userId).subscribe({
      next: (res) => {
        this.getWeghitDailytype = res.data[0].type;
        this.getWeghitDailylable = res.data[0].lable;
        this.getWeghitDailyBar = res.data[0].data;

        this.getBustDailytype = res.data[1].type
        this.getBustDailylable = res.data[1].lable
        this.getBustDailyBar = res.data[1].data;


        this.getWaistDailytype = res.data[2].type
        this.getWaistDailylable = res.data[2].lable
        this.getWaistDailyBar = res.data[2].data;


        this.getHipsDailytype = res.data[3].type
        this.getHipsDailylable = res.data[3].lable
        this.getHipsDailyBar = res.data[3].data;

        this.getStepsDailytype = res.data[4].type
        this.getStepsDailylable = res.data[4].lable
        this.getStepsDailyBar = res.data[4].data;

        this.getSleepDailytype = res.data[5].type
        this.getSleepDailylable = res.data[5].lable
        this.getSleepDailyBar = res.data[5].data;

        this.getHeartDailytype = res.data[6].type
        this.getHeartDailylable = res.data[6].lable
        this.getHeartDailyBar = res.data[6].data;

        this.getPeriodDailytype = res.data[7].type
        this.getPeriodDailylable = res.data[7].lable
        this.getPeriodDailyBar = res.data[7].data;
      },
      error: (err) => {
        alert("Error while fetching the Records")
      },
    });
  }

  getUserMood() {
    this.mobileUserService.getUserMood(this.userId).subscribe({
      next: (res) => {
        this.userMood = res.data;
      },
      error: (err) => {
        alert("Error while fetching the Records")
      },
    });
  }

  getCurrentPlanBar() {
    this.mobileUserService.getCurrentPlanBar(this.userId).subscribe({
      next: (res) => {

        this.mealData = res.data['data'];
        console.log(this.mealData);
        // console.log(res.data['data'][0]);
        // console.log(res.data['data'][0].days);
        // this.getCurrentPlanBare = res.data['data'][0];
        // for (let index = 0; index < res.data['data'].length; index++) {
        //   this.days.push(res.data['data'][index].days);
        //   console.log(this.days);
        // }
        // this.days = [... this.days];
        // console.log(this.days);
        // console.log(this.days);
        // for (const i in res.data['data']) {
        //   this.days.push(res.data['data'][i].days);
        //   // this.menuTypes.push(res.data['data'][i]['meal']['menuType']);
        //   // console.log(this.menuTypes);
        // }
      },
      error: (err) => {
        alert("Error while fetching the Records")
      },
    });
  }

  applyFilter_1(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilter_2(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource_2.filter = filterValue.trim().toLowerCase();

    if (this.dataSource_2.paginator) {
      this.dataSource_2.paginator.firstPage();
    }
  }

  applyFilter_3(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource_3.filter = filterValue.trim().toLowerCase();

    if (this.dataSource_3.paginator) {
      this.dataSource_3.paginator.firstPage();
    }
  }

}


