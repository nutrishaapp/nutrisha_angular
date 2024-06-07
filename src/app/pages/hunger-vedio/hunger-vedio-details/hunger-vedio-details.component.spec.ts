import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HungerVedioDetailsComponent } from './hunger-vedio-details.component';

describe('HungerVedioDetailsComponent', () => {
  let component: HungerVedioDetailsComponent;
  let fixture: ComponentFixture<HungerVedioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HungerVedioDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HungerVedioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
