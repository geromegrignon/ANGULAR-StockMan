import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'signin', pathMatch: 'full'},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'supply',  canActivate: [AuthGuard], loadChildren: './supply/supply.module#SupplyModule'},
    {path: 'provider', canActivate: [AuthGuard], loadChildren: './provider/provider.module#ProviderModule'},
    {path: 'dashboard', canActivate: [AuthGuard], loadChildren: './dashboard/dashboard.module#DashboardModule'}];

