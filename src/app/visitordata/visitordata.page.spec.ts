import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitordataPage } from './visitordata.page';

describe('VisitordataPage', () => {
  let component: VisitordataPage;
  let fixture: ComponentFixture<VisitordataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitordataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitordataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
