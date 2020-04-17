import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable02Component } from './observable02.component';

describe('Observable02Component', () => {
  let component: Observable02Component;
  let fixture: ComponentFixture<Observable02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Observable02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Observable02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
