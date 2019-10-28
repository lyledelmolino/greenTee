import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolferSectionComponent } from './golfer-section.component';

describe('GolferSectionComponent', () => {
  let component: GolferSectionComponent;
  let fixture: ComponentFixture<GolferSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolferSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolferSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
