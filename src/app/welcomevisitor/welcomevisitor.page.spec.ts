import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomevisitorPage } from './welcomevisitor.page';

describe('WelcomevisitorPage', () => {
  let component: WelcomevisitorPage;
  let fixture: ComponentFixture<WelcomevisitorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomevisitorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomevisitorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
