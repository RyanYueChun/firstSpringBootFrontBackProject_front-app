import { TestBed } from '@angular/core/testing';

import { ErrorHandling } from './error-handling.service';

describe('ErrorHandling', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorHandling = TestBed.get(ErrorHandling);
    expect(service).toBeTruthy();
  });
});
