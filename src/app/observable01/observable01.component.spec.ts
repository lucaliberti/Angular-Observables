import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable01Component } from './observable01.component';

describe('Observable01Component', () => {
  let component: Observable01Component;
  let fixture: ComponentFixture<Observable01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Observable01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Observable01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
