import { NgModule } from '@angular/core';
import { LayoutModule } from '../shared/modules/layout.module';
import { RouterModule } from '@angular/router';
import { DASHBOARD_ROUTES } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { DashboardResolver } from '../shared/resolvers/dashboard.resolver';
import { DashboardRequestsComponent } from './components/dashboard-requests/dashboard-requests.component';
import { DashboardSupplyComponent } from './components/dashboard-supply/dashboard-supply.component';
import {
  DashboardRequestsDetailsComponent
} from './components/dashboard-requests/dashboard-requests-details/dashboard-requests-details.component';

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(DASHBOARD_ROUTES)
  ],
  declarations: [
    DashboardComponent,
    DashboardRequestsComponent,
    DashboardSupplyComponent,
    DashboardRequestsDetailsComponent
  ],
  providers: [DashboardResolver],
  entryComponents: [DashboardRequestsDetailsComponent]
})
export class DashboardModule { }
