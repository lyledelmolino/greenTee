import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindGolferComponent } from './find-golfer.component';

describe('FindGolferComponent', () => {
  let component: FindGolferComponent;
  let fixture: ComponentFixture<FindGolferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindGolferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindGolferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
