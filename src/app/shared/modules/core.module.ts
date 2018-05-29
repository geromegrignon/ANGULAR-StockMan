import { NgModule } from '@angular/core';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Components
import { SignupComponent } from '../../components/signup/signup.component';
import { SigninComponent } from '../../components/signin/signin.component';
import { TopbarComponent } from '../components/topbar/topbar.component';
import { NavigationComponent } from '../components/navigation/navigation.component';

// Modules
import { LayoutModule } from './layout.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertDialogComponent } from '../../supply/components/supply-details/alert-dialog/alert-dialog.component';


const COMPONENTS = [
  SignupComponent,
  SigninComponent,
  TopbarComponent,
  NavigationComponent
];

@NgModule({
  imports: [
    HttpClientModule,
    LayoutModule,
    RouterModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    COMPONENTS
  ]
})
export class CoreModule { }

