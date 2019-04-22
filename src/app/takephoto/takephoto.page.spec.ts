import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakephotoPage } from './takephoto.page';

describe('TakephotoPage', () => {
  let component: TakephotoPage;
  let fixture: ComponentFixture<TakephotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakephotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakephotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
