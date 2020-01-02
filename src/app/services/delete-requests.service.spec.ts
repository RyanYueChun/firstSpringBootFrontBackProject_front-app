import { TestBed } from '@angular/core/testing';

import { DeleteRequestsService } from './delete-requests.service';

describe('DeleteRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteRequestsService = TestBed.get(DeleteRequestsService);
    expect(service).toBeTruthy();
  });
});
