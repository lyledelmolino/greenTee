import { TestBed, async, inject } from '@angular/core/testing';

import { LastrouteGuard } from './lastroute.guard';

describe('LastrouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LastrouteGuard]
    });
  });

  it('should ...', inject([LastrouteGuard], (guard: LastrouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
