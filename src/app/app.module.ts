import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TripFormComponent } from './trip-form/trip-form.component';
import { DriverFormComponent } from './driver-form/driver-form.component';
import { SignupComponent } from './signup/signup.component';
import { NoMatchingTripsComponent } from './no-matching-trips/no-matching-trips.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { TripMatchComponent } from './trip-match/trip-match.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    HomeComponent,
    TripFormComponent,
    DriverFormComponent,
    SignupComponent,
    NoMatchingTripsComponent,
    TripDetailsComponent,
    TripMatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
