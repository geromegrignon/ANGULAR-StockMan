import { NgModule } from '@angular/core';
import { ProfilComponent } from './profil.component';
import { RouterModule } from '@angular/router';
import { PROFILE_ROUTES } from './profil.routing';
import { LayoutModule } from '../shared/modules/layout.module';


@NgModule({
  imports: [
    RouterModule.forChild(PROFILE_ROUTES),
    LayoutModule
  ],
  declarations: [
    ProfilComponent
  ]
})
export class ProfilModule { }

