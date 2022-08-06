import { TestBed } from '@angular/core/testing';

import { CountriApiService } from './countri-api.service';

describe('CountriApiService', () => {
  let service: CountriApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
