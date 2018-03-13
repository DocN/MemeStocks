import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutframeComponent } from './logoutframe.component';

describe('LogoutframeComponent', () => {
  let component: LogoutframeComponent;
  let fixture: ComponentFixture<LogoutframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
