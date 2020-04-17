import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable05Component } from './observable05.component';

describe('Observable05Component', () => {
  let component: Observable05Component;
  let fixture: ComponentFixture<Observable05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Observable05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Observable05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
