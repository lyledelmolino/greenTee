import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentScoringRecordComponent } from './current-scoring-record.component';

describe('CurrentScoringRecordComponent', () => {
  let component: CurrentScoringRecordComponent;
  let fixture: ComponentFixture<CurrentScoringRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentScoringRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentScoringRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
