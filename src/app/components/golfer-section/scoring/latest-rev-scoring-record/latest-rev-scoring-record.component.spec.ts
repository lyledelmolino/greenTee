import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestRevScoringRecordComponent } from './latest-rev-scoring-record.component';

describe('LatestRevScoringRecordComponent', () => {
  let component: LatestRevScoringRecordComponent;
  let fixture: ComponentFixture<LatestRevScoringRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestRevScoringRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestRevScoringRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
