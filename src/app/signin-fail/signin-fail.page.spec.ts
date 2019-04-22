import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninFailPage } from './signin-fail.page';

describe('SigninFailPage', () => {
  let component: SigninFailPage;
  let fixture: ComponentFixture<SigninFailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninFailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninFailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
