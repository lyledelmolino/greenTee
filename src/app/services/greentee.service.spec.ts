import { TestBed } from '@angular/core/testing';

import { GreenteeService } from './greentee.service';

describe('GreenteeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GreenteeService = TestBed.get(GreenteeService);
    expect(service).toBeTruthy();
  });
});
