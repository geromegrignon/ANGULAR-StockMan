import { NgModule } from '@angular/core';
import { LayoutModule } from '../shared/modules/layout.module';
import { RouterModule } from '@angular/router';
import { DASHBOARD_ROUTES } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { AlertListComponent } from './components/alert-list/alert-list.component';
import { OndemandRequestListComponent } from './components/ondemand-request-list/ondemand-request-list.component';

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(DASHBOARD_ROUTES)
  ],
  declarations: [
    DashboardComponent,
    AlertListComponent,
    OndemandRequestListComponent
  ]
})
export class DashboardModule { }
