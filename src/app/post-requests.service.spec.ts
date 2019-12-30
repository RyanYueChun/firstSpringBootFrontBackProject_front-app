import { TestBed } from '@angular/core/testing';

import { PostRequestsService } from './post-requests.service';

describe('PostRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostRequestsService = TestBed.get(PostRequestsService);
    expect(service).toBeTruthy();
  });
});
