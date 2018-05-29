import { NgModule } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserComponent } from './user.component';
import { LayoutModule } from '../shared/modules/layout.module';
import { RouterModule } from '@angular/router';
import { USER_ROUTES } from './user.routing';

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(USER_ROUTES),
  ],
  declarations: [
    UserComponent,
    UserListComponent,
    UserDetailsComponent
  ]
})
export class UserModule { }
