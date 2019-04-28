import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostScoreComponent } from './post-score.component';

describe('PostScoreComponent', () => {
  let component: PostScoreComponent;
  let fixture: ComponentFixture<PostScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
