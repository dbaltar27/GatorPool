import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { RiderProfileComponent } from './rider-profile/rider-profile.component';
import { TripPageComponent } from './trip-page/trip-page.component';
import { RiderProfileAcceptedComponent } from './rider-profile-accepted/rider-profile-accepted.component';
import { ViewDriversComponent } from './view-drivers/view-drivers.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { ConfirmedTripComponent } from './confirmed-trip/confirmed-trip.component';
import { HomeComponent } from './home/home.component';
import { TripFormComponent } from './trip-form/trip-form.component';
import { DriverFormComponent } from './driver-form/driver-form.component';
import { NoMatchingTripsComponent } from './no-matching-trips/no-matching-trips.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { TripMatchComponent } from './trip-match/trip-match.component';
import { SignupComponent } from './signup/signup.component';
import { RatingFormComponent } from './rating-form/rating-form.component'
import { DetailsPageComponent } from './details-page/details-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'rider-profile', component: RiderProfileComponent},
  { path: 'trip-page', component: TripPageComponent},
  { path: 'accepted-rider', component: RiderProfileAcceptedComponent},
  { path: 'view-drivers', component: ViewDriversComponent},
  { path: 'view-post', component: ViewPostComponent},
  { path: 'confirmed-trip', component: ConfirmedTripComponent},
  { path: 'new-trip', component: TripFormComponent },
  { path: 'new-driver', component: DriverFormComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'trip-match', component: TripMatchComponent },
  { path: 'trip-details', component: TripDetailsComponent },
  { path: 'no-matching-trips', component: NoMatchingTripsComponent },
  { path: 'rating', component: RatingFormComponent },
  { path: 'details', component: DetailsPageComponent },
  { path: 'trip-form', component: TripFormComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
