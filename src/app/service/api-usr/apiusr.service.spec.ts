import { TestBed } from '@angular/core/testing';

import { ApiusrService } from './apiusr.service';

describe('ApiusrService', () => {
  let service: ApiusrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiusrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
