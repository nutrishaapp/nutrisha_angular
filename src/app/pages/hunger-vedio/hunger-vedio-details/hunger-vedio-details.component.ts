import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { HungerVedioService } from 'src/app/core/hunger-vedio/services/hunger-vedio.service';
import { Media } from '../../../core/shared';
import { HungerVideoDetailsViewModel } from 'src/app/core/hunger-vedio/view-models/hunger-video-details.view.model';
import { HungerVideosActions } from 'src/app/core/store/hunger-videos/hunger-videos.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslationService } from 'src/app/core/shared/services/translate.service';

@UntilDestroy()
@Component({
  selector: 'app-hunger-vedio-details',
  templateUrl: './hunger-vedio-details.component.html',
  styleUrls: ['./hunger-vedio-details.component.scss']
})
export class HungerVedioDetailsComponent implements OnInit {

  hungerTypes: any[] = [
    {
      "id": 1,
      "name": "Tummy Making Noises",
      "nameAr": "أصوات تصدر عن البطن"
    },
    {
      "id": 2,
      "name": "Feeling Chewy",
      "nameAr": "شعور مطاطى"
    },
    {
      "id": 3,
      "name": "Emotional Craves",
      "nameAr": "الرغبة العاطفية"
    },
    {
      "id": 4,
      "name": "I Don't Know",
      "nameAr": "لا أعرف"
    }
  ];
  selectedHungerTypeId: string = '1';
  subject: string = '';
  uploadResponse: any;
  selectedFile: File | null = null;
  id: string = '';
  url: string = '';
  deletedMediaIds: string = '';
  lang: string;


  constructor(private hungerService: HungerVedioService, private route: ActivatedRoute, private router: Router, private getSelectedLanguage: TranslationService,) { }

  ngOnInit(): void {
    this.lang = this.getSelectedLanguage.getSelectedLanguage();
    this.route.params.subscribe(params => {
      this.id = params['id'] || '';
      if (this.id != '') {
        this.getById(this.id);
      }
    });

    // this.hungerService.getHungerTypes().subscribe(
    //   (response) => {
    //     this.hungerTypes = response;
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile && this.selectedHungerTypeId && this.subject) {
      this.hungerService.postHungerVideo(this.selectedFile, this.selectedHungerTypeId, this.subject).subscribe(
        (response) => {
          this.uploadResponse = response;
          this.router.navigate(['/Hunger-videos']);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      alert("Please select a file, a hunger type, and enter a subject.");
    }
  }

  updateFile() {
    if (this.id && this.selectedFile && this.selectedHungerTypeId && this.subject) {
      this.hungerService.updateHungerVideo(this.id, this.selectedFile, this.selectedHungerTypeId, this.subject).subscribe(
        (response) => {
          this.uploadResponse = response;
          this.router.navigate(['/Hunger-videos']);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      alert("Please provide all the necessary information.");
    }
  }

  // deleteFile() {
  //   if (this.id && this.deletedMediaIds && this.selectedFile && this.selectedHungerTypeId && this.subject) {
  //     this.hungerService.deleteHungerVideo(this.id, this.deletedMediaIds, this.selectedFile, this.selectedHungerTypeId, this.subject).subscribe(
  //       (response) => {
  //         this.uploadResponse = response;
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   } else {
  //     alert("Please select file to delete.");
  //   }
  // }

  getById(id: string) {
    this.hungerService.getById(id).subscribe((data) => {
      this.id = data.data.id;
      this.subject = data.data.subject;
      this.selectedHungerTypeId = data.data.hungerTypeId;
      this.url = data.data.media[0].url;
      // this.deletedMediaIds = data.data.media[0].id;
      // console.log(this.selectedFile = data.data.media[0].url);
    })
  }

  delete(event: any, id: string) {
    if (confirm('Are you sure you want to delete ?')) {
      event.target.innerHTML = 'Deleting...';
      this.hungerService.delete(id).subscribe((res: any) => {
        alert('Deleted successfully');
        this.router.navigate(['/Hunger-videos']);
      });
    }
  }

}
