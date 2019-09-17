import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFreeUserComponent } from './register-free-user.component';

describe('RegisterFreeUserComponent', () => {
  let component: RegisterFreeUserComponent;
  let fixture: ComponentFixture<RegisterFreeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFreeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFreeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
