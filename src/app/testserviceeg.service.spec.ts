import { TestBed } from '@angular/core/testing';

import { TestserviceegService } from './testserviceeg.service';

describe('TestserviceegService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestserviceegService = TestBed.get(TestserviceegService);
    expect(service).toBeTruthy();
  });
});
