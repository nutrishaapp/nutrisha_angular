import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealEditComponent } from './recipe-edit.component';

describe('MealDetailsComponent', () => {
  let component: MealEditComponent;
  let fixture: ComponentFixture<MealEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MealEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
