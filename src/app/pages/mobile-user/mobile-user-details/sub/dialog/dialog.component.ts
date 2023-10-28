import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MobileUserDetailsComponent } from '../../mobile-user-details.component';
import { MobileUserDetailsViewModel } from 'src/app/core/mobile-users/models/mobile-user-details.model';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { MobileUserService } from 'src/app/core/mobile-users/mobile-user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslationService } from 'src/app/core/shared/services/translate.service';
import { ConfirmDialogComponent } from 'src/app/core/shared/confirm-dialog/confirm-dialog.component';
import { Observable, Subject, of, switchMap, takeUntil, tap } from 'rxjs';
import { untilDestroyed } from '@ngneat/until-destroy';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  noteForm !: FormGroup;
  currentFile?: File;
  progress = 0;
  message = '';
  actionBtn: string = "Save";

  fileName = 'Select File';
  fileInfos?: Observable<any>;
  selectedLang: 'en' | 'ar' = 'en';
  viewOnly = false;

  attachments: any[] = [];


  constructor(
    private matDialog: MatDialog,
    private translateService: TranslationService,
    private dialog: MatDialog,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private mobileUserService: MobileUserService, private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      id: [this.editData.id],
      userId: [this.data.userId],
      title: ['', Validators.required],
      notes: ['', Validators.required],
    });
    // this.fileInfos = this.mobileUserService.getFiles(this.data.userId);
    if (this.editData) {
      if (this.editData.id) {
        this.actionBtn = "Update";
      }
      this.noteForm.controls['title'].setValue(this.editData.title);
      this.noteForm.controls['notes'].setValue(this.editData.notes);
    }

    this.getUserAttachment();

  }


  addnote() {
    if (!this.editData.id) {
      if (this.noteForm.valid) {
        this.mobileUserService.postNote(this.noteForm.value).subscribe({
          next: (res) => {
            alert("Note added successfully");
            this.mobileUserService.getUserNotes(this.data.userId);
            this.noteForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert("Error while adding the note")
          }
        })
      }
    } else {
      this.updateNote();
    }
  }

  updateNote() {
    this.mobileUserService.putNote(this.noteForm.value).subscribe({
      next: (res) => {
        alert("Note updated successfully");
        this.mobileUserService.getUserNotes(this.data.userId);
        this.noteForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert("Error while adding the note")
      }
    })
  }

  deleteUserAttachment(id: number) {
    this.mobileUserService.deleteAttachment(id).subscribe({
      next: (res) => {
        alert("Attachment Deleted successfully");
        this.getUserAttachment();
      },
      error: (err) => {
        alert("Error while fetching the Records")
      },
    });
    // this.matDialog
    //   .open(ConfirmDialogComponent, {})
    //   .afterClosed()
    //   .pipe(
    //     switchMap((d) => {
    //       if (d) {
    //         return this.mobileUserService.deleteAttachment(id)
    //           .pipe(
    //             tap(async () => {
    //               // await this.mobileUserService.getUserAttachment(this.data.userId, this.data.id);
    //             }));
    //       }
    //       return of(false);
    //     }),
    //     untilDestroyed(this)
    //   )
    //   .subscribe();
  }

  getUserAttachment() {
    this.mobileUserService.getUserAttachment(this.data.userId, this.data.id).subscribe({
      next: (res) => {
        this.attachments = res.data;
        console.log(this.attachments);
      },
      error: (err) => {
        alert("Error while fetching the Records")
      },
    });
  }

  openTab(url: string) {
    if (url.includes('png') || url.includes('jpg') || url.includes('jpeg') || url.includes('gif')) {
      window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400").document.write(`<img style="display: block;
      margin-left: auto;
      margin-right: auto;" width="750" height="750" src=${url} alt="image" />`);
    } else {
      window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400").document.write(`<a href=${url} target="_blank">Open</a>`);
    }

  }

}


