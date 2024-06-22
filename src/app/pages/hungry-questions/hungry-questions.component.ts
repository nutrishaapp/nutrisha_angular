import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HungryQuestionService } from 'src/app/core/hungryQuestions/services/hungry-question.service';
import { TranslationService } from 'src/app/core/shared/services/translate.service';


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


@Component({
  selector: 'app-hungry-questions',
  templateUrl: './hungry-questions.component.html',
  styleUrls: ['./hungry-questions.component.scss']
})
export class HungryQuestionsComponent implements OnInit {
  lang: string;
  displayedColumns: string[] = [
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

  dataSource: MatTableDataSource<TummyMakingNoises>;
  dataSource_2: MatTableDataSource<FeelingChewy>;
  dataSource_3: MatTableDataSource<EmotionalCrave>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private mealDataService: HungryQuestionService, private getSelectedLanguage: TranslationService) { }

  ngOnInit(): void {
    this.lang = this.getSelectedLanguage.getSelectedLanguage();
    this.mealDataService.getTummyMakingNoises().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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


  }

  applyFilter(event: Event) {
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
