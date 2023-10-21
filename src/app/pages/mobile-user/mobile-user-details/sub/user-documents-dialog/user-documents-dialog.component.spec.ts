import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDocumentsDialogComponent } from './user-documents-dialog.component';

describe('UserDocumentsDialogComponent', () => {
  let component: UserDocumentsDialogComponent;
  let fixture: ComponentFixture<UserDocumentsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDocumentsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDocumentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
