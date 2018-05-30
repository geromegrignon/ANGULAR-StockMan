import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OndemandRequestListComponent } from './ondemand-request-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material';

describe('OndemandRequestListComponent', () => {
  let component: OndemandRequestListComponent;
  let fixture: ComponentFixture<OndemandRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OndemandRequestListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatTableModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OndemandRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
