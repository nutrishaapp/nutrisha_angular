import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HungryQuestionsComponent } from './hungry-questions.component';

describe('HungryQuestionsComponent', () => {
  let component: HungryQuestionsComponent;
  let fixture: ComponentFixture<HungryQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HungryQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HungryQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
