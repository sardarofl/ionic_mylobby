import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecthostPage } from './selecthost.page';

describe('SelecthostPage', () => {
  let component: SelecthostPage;
  let fixture: ComponentFixture<SelecthostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecthostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecthostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
