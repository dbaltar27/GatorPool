import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { RatingFormComponent } from './rating-form/rating-form.component'

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'rating', component: RatingFormComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
