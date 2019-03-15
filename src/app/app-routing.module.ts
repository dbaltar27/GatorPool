import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { RiderProfileComponent } from './rider-profile/rider-profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'rider-profile', component: RiderProfileComponent},
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
