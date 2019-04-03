import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { RatingFormComponent } from './rating-form/rating-form.component'
import { DetailsPageComponent } from './details-page/details-page.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'rating', component: RatingFormComponent },
  { path: 'details', component: DetailsPageComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
