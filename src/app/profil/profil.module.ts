import { NgModule } from '@angular/core';
import { ProfilComponent } from './profil.component';
import { RouterModule } from '@angular/router';
import { PROFILE_ROUTES } from './profil.routing';
import { LayoutModule } from '../shared/modules/layout.module';
import { ProfilDetailsComponent } from './components/profil-details/profil-details.component';
import { ProfilListComponent } from './components/profil-list/profil-list.component';


@NgModule({
  imports: [
    RouterModule.forChild(PROFILE_ROUTES),
    LayoutModule
  ],
  declarations: [
    ProfilComponent,
    ProfilDetailsComponent,
    ProfilListComponent
  ]
})
export class ProfilModule { }

