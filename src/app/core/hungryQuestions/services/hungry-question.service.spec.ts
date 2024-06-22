import { TestBed } from '@angular/core/testing';

import { HungryQuestionService } from './hungry-question.service';

describe('HungryQuestionService', () => {
  let service: HungryQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HungryQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
