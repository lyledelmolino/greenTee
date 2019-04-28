import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolferMenuComponent } from './golfer-menu.component';

describe('GolferMenuComponent', () => {
  let component: GolferMenuComponent;
  let fixture: ComponentFixture<GolferMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolferMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolferMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
