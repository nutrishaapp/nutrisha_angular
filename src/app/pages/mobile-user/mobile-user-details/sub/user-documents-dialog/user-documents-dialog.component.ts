

import { Select } from '@ngxs/store/src/decorators/select/select';
import { Observable } from 'rxjs/internal/Observable';
import { MealPlanService } from 'src/app/core/meal-plan/meal-plan.service';
import { MealType } from 'src/app/core/meals/models/meal-type.enum';
import { MobileUserService } from 'src/app/core/mobile-users/mobile-user.service';
import { MobileUserDetailsViewModel } from 'src/app/core/mobile-users/models/mobile-user-details.model';
import { ConfirmDialogComponent } from 'src/app/core/shared/confirm-dialog/confirm-dialog.component';
import { DayOfWeek } from 'src/app/core/shared/models/day-of-week';
import { TranslationService } from 'src/app/core/shared/services/translate.service';
import { MobileUserActions } from 'src/app/core/store/mobile-users/mobile-user.actions';
import { MobileUserMoreInfoDialogComponent } from '../mobile-user-more-info-dialog/mobile-user-more-info-dialog.component';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { tap } from 'rxjs/operators';
import { MakePremiumComponent } from '../make-premium/make-premium.component';
import { DialogComponent } from '../dialog/dialog.component';
import { UploadDocumentDialogComponent } from '../upload-document-dialog/upload-document-dialog.component';
import { of } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-documents-dialog',
  templateUrl: './user-documents-dialog.component.html',
  styleUrls: ['./user-documents-dialog.component.scss']
})
export class UserDocumentsDialogComponent implements OnInit {

  userId: string;
  displayedColumns: string[] = ['title', 'notes', 'date', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(

    private matDialog: MatDialog,
    private translateService: TranslationService,
    private mobileUserService: MobileUserService,
    private dialog: MatDialog,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {

    //.subscribe((u) => (this.userDetails = u));
    this.getAllNotes();
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
      width: '40%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getAllNotes();
      }
    });
  }
  uploadDocument(row: any) {
    this.dialog.open(UploadDocumentDialogComponent, {
      width: '40%',
      data: row
    }).afterClosed().subscribe(val => {
      this.getAllNotes();
    });
  }

  userDocuments() {
    this.dialog.open(UserDocumentsDialogComponent, {
      width: '40%',
    }).afterClosed().subscribe(val => { });
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
