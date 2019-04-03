import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { RatingFormComponent } from './rating-form/rating-form.component';
import { DetailsPageComponent } from './details-page/details-page.component';
=======
import { RiderProfileComponent } from './rider-profile/rider-profile.component';
import { TripPageComponent } from './trip-page/trip-page.component';
import { RiderProfileAcceptedComponent } from './rider-profile-accepted/rider-profile-accepted.component';
import { ViewDriversComponent } from './view-drivers/view-drivers.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { ConfirmedTripComponent } from './confirmed-trip/confirmed-trip.component';
import { HomeComponent } from './home/home.component';
import { TripFormComponent } from './trip-form/trip-form.component';
import { DriverFormComponent } from './driver-form/driver-form.component';
import { SignupComponent } from './signup/signup.component';
import { NoMatchingTripsComponent } from './no-matching-trips/no-matching-trips.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { TripMatchComponent } from './trip-match/trip-match.component';
>>>>>>> 991fef59b1a9316cd83ed5862defbfa9f7efcb12

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
<<<<<<< HEAD
    RatingFormComponent,
    DetailsPageComponent
=======
    RiderProfileComponent,
    TripPageComponent,
    RiderProfileAcceptedComponent,
    ViewDriversComponent,
    ViewPostComponent,
    ConfirmedTripComponent,
    HomeComponent,
    TripFormComponent,
    DriverFormComponent,
    SignupComponent,
    NoMatchingTripsComponent,
    TripDetailsComponent,
    TripMatchComponent
>>>>>>> 991fef59b1a9316cd83ed5862defbfa9f7efcb12
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
