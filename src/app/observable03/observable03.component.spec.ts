import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable03Component } from './observable03.component';

describe('Observable03Component', () => {
  let component: Observable03Component;
  let fixture: ComponentFixture<Observable03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Observable03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Observable03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
