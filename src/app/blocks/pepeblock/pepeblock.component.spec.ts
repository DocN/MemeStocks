import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PepeblockComponent } from './pepeblock.component';

describe('PepeblockComponent', () => {
  let component: PepeblockComponent;
  let fixture: ComponentFixture<PepeblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PepeblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PepeblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
