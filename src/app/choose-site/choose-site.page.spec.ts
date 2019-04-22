import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSitePage } from './choose-site.page';

describe('ChooseSitePage', () => {
  let component: ChooseSitePage;
  let fixture: ComponentFixture<ChooseSitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseSitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseSitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
