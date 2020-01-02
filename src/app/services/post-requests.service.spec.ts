import { TestBed } from '@angular/core/testing';

import { PostRequests } from './post-requests.service';

describe('PostRequests', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostRequests = TestBed.get(PostRequests);
    expect(service).toBeTruthy();
  });
});
