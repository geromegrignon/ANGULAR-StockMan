import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSupplyComponent } from './dashboard-supply.component';

describe('DashboardSupplyComponent', () => {
  let component: DashboardSupplyComponent;
  let fixture: ComponentFixture<DashboardSupplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSupplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
