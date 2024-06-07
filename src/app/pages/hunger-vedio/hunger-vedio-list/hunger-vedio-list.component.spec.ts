import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HungerVedioListComponent } from './hunger-vedio-list.component';

describe('HungerVedioListComponent', () => {
  let component: HungerVedioListComponent;
  let fixture: ComponentFixture<HungerVedioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HungerVedioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HungerVedioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
