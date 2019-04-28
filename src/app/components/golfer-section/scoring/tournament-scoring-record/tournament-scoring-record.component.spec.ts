import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentScoringRecordComponent } from './tournament-scoring-record.component';

describe('TournamentScoringRecordComponent', () => {
  let component: TournamentScoringRecordComponent;
  let fixture: ComponentFixture<TournamentScoringRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentScoringRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentScoringRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
