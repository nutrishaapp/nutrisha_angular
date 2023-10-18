import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Select, Store } from '@ngxs/store';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileUserActions } from '../../../core/store/mobile-users/mobile-user.actions';
import { Observable, of, switchMap, takeUntil, tap } from 'rxjs';
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


@UntilDestroy()
@Component({
  selector: 'app-mobile-user-details',
  templateUrl: './mobile-user-details.component.html',
  styleUrls: ['./mobile-user-details.component.scss'],
})
export class MobileUserDetailsComponent implements OnInit {
  userDetails: MobileUserDetailsViewModel;
  mealTypes = MealType;
  selectedFiles = [];

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
    private http: HttpClient,
  ) { }

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
              console.log(result);
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
              console.log(result);
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
                  await this.router.navigateByUrl(`/app/users`);
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
      width: "40%",
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
        console.log(res.data);
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert("Error while fetching the Records")
      },
    });
  }

  editNote(row: any) {
    this.dialog.open(DialogComponent, {
      width: '40%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getAllNotes();
      }
    });
  }
  deleteNote(id: number) {
    this.mobileUserService.deleteNote(id).subscribe({
      next: (res) => {
        alert("Note Deleted successfully");
        this.getAllNotes();
      },
      error: () => {
        alert("Error while Deleted the note")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}


