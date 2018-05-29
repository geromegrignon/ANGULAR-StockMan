import { Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const USER_ROUTES: Routes = [
    {path: '', component: UserComponent, children : [
        {path: ':id', component: UserDetailsComponent}
    ]},
];
