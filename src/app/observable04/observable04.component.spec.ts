import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable04Component } from './observable04.component';

describe('Observable04Component', () => {
  let component: Observable04Component;
  let fixture: ComponentFixture<Observable04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Observable04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Observable04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
