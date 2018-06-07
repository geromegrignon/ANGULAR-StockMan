import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRequestsDetailsComponent } from './dashboard-requests-details.component';

describe('DashboardRequestsDetailsComponent', () => {
  let component: DashboardRequestsDetailsComponent;
  let fixture: ComponentFixture<DashboardRequestsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRequestsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRequestsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
