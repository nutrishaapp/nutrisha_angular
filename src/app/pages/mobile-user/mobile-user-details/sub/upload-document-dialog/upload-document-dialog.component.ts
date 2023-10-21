import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MobileUserDetailsComponent } from '../../mobile-user-details.component';
import { MobileUserDetailsViewModel } from 'src/app/core/mobile-users/models/mobile-user-details.model';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { MobileUserService } from 'src/app/core/mobile-users/mobile-user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-document-dialog',
  templateUrl: './upload-document-dialog.component.html',
  styleUrls: ['./upload-document-dialog.component.scss']
})
export class UploadDocumentDialogComponent implements OnInit {

  noteForm !: FormGroup;
  currentFile?: File;
  progress = 0;
  message = '';
  actionBtn: string = "Save";

  fileName = 'Select File';
  fileInfos?: Observable<any>;


  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private mobileUserService: MobileUserService, private dialogRef: MatDialogRef<UploadDocumentDialogComponent>) { }

  ngOnInit(): void {

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
      this.mobileUserService.upload(this.currentFile, this.data.userId, this.fileName, this.data.id).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.fileInfos = this.mobileUserService.getFiles(this.data.userId);
          }
        },
        (err: any) => {
          this.progress = 0;

          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the file!';
          }

          this.currentFile = undefined;
        });
      // console.log(this.fileInfos);
    }

  }
}
