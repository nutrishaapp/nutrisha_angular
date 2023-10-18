import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MobileUserDetailsComponent } from '../../mobile-user-details.component';
import { MobileUserDetailsViewModel } from 'src/app/core/mobile-users/models/mobile-user-details.model';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { MobileUserService } from 'src/app/core/mobile-users/mobile-user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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


  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: { userId: string },
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
    console.log(this.editData);
  }

  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Select File';
    }
  }

  upload(): void {
    this.progress = 0;
    this.message = "";


    if (this.currentFile) {
      this.mobileUserService.upload(this.currentFile, this.data.userId, this.fileName).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.fileInfos = this.mobileUserService.getFiles(this.data.userId);
          }
        },
        (err: any) => {
          console.log(err);
          this.progress = 0;

          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the file!';
          }

          this.currentFile = undefined;
        });
    }

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
}


