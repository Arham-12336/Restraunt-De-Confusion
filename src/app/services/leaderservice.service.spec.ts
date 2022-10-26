import { TestBed } from '@angular/core/testing';

import { LeaderserviceService } from './leaderservice.service';

describe('LeaderserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaderserviceService = TestBed.get(LeaderserviceService);
    expect(service).toBeTruthy();
  });
});
