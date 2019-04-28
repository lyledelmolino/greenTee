import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressserveComponent } from './addressserve.component';

describe('AddressserveComponent', () => {
  let component: AddressserveComponent;
  let fixture: ComponentFixture<AddressserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
