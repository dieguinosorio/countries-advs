import { TestBed } from '@angular/core/testing';

import { Countri.ServiceService } from './countri.service.service';

describe('Countri.ServiceService', () => {
  let service: Countri.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Countri.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
