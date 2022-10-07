import { TestBed } from '@angular/core/testing';

import { DashService } from './dash.service';

describe('DashService', () => {
  let service: DashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
