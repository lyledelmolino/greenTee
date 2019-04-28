import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoLowEligibleTScoresComponent } from './two-low-eligible-t-scores.component';

describe('TwoLowEligibleTScoresComponent', () => {
  let component: TwoLowEligibleTScoresComponent;
  let fixture: ComponentFixture<TwoLowEligibleTScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoLowEligibleTScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoLowEligibleTScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
