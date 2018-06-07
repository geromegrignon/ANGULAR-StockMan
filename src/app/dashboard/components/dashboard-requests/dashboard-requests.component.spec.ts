import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRequestsComponent } from './dashboard-requests.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DashboardRequestsComponent', () => {
  let component: DashboardRequestsComponent;
  let fixture: ComponentFixture<DashboardRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRequestsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
