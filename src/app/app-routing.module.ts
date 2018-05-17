import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'photos', pathMatch: 'full'},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'profil', canActivate: [AuthGuard], loadChildren: './profil/profil.module#ProfilModule'},
    {path: 'supply', loadChildren: './supply/supply.module#SupplyModule'}
];

