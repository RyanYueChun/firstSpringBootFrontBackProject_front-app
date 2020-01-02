import { TestBed } from '@angular/core/testing';

import { GetRequests } from './getRequests.service';

describe('GetRequests', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRequests = TestBed.get(GetRequests);
    expect(service).toBeTruthy();
  });
});
