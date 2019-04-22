import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSigningInPage } from './after-signing-in.page';

describe('AfterSigningInPage', () => {
  let component: AfterSigningInPage;
  let fixture: ComponentFixture<AfterSigningInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterSigningInPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterSigningInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
