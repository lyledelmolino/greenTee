import { TestBed } from '@angular/core/testing';

import { Greentee918Service } from './greentee918.service';

describe('Greentee918Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Greentee918Service = TestBed.get(Greentee918Service);
    expect(service).toBeTruthy();
  });
});
