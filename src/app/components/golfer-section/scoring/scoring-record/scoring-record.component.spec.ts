import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringRecordComponent } from './scoring-record.component';

describe('ScoringRecordComponent', () => {
  let component: ScoringRecordComponent;
  let fixture: ComponentFixture<ScoringRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoringRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoringRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
