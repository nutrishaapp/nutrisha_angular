import { TestBed } from '@angular/core/testing';

import { HungerVedioService } from './hunger-vedio.service';

describe('HungerVedioService', () => {
  let service: HungerVedioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HungerVedioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
