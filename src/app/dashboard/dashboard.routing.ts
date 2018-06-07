import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardResolver } from '../shared/resolvers/dashboard.resolver';
import {
    DashboardRequestsDetailsComponent
} from './components/dashboard-requests/dashboard-requests-details/dashboard-requests-details.component';

export const DASHBOARD_ROUTES: Routes = [
    {path: '', component: DashboardComponent, resolve: {data: DashboardResolver}}
];

