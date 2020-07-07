import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import { RecaptchaModule, RecaptchaV3Module } from 'ng-recaptcha';

import { LandingPageComponent } from "../app/components/landing-page/landing-page.component";
import { HomePageComponent } from "../app/components/home-page/home-page.component";
import { SignUpModule } from "../app/components/authorization/sign-up/sign-up.module";
import { SignInModule } from "../app/components/authorization/sign-in/sign-in.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "landing",
    pathMatch: "full",
  },
  {
    path: "landing",
    component: LandingPageComponent,
  },
  {
    path: "signin",
    redirectTo: "signin",
  },
  {
    path: "signup",
    redirectTo: "signup",
  },

  {
    path: "home",
    component: HomePageComponent,
  },

  {
    path: "**",
    redirectTo: "landing",
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    RecaptchaModule,
    RecaptchaV3Module,
    SignUpModule, 
    SignInModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
