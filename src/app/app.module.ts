import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";

import { LandingPageComponent } from "../app/components/landing-page/landing-page.component";
import { HomePageModule } from "../app/components/home-page/home-page.module";
import { SignUpModule } from "../app/components/authorization/sign-up/sign-up.module";
import { SignInModule } from "../app/components/authorization/sign-in/sign-in.module";

import { RecaptchaModule } from "ng-recaptcha";
import { RecaptchaV3Module } from "ng-recaptcha";
import { TermsComponent } from "./components/terms/terms.component";
import { FooterComponent } from "./components/footer/footer.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "signup",
    pathMatch: "full",
  },
  {
    path: "signup",
    redirectTo: "/",
    pathMatch: "full",
  },
  {
    path: "signin",
    redirectTo: "signin",
  },
  {
    path: "terms",
    component: TermsComponent,
  },

  {
    path: "portal",
    loadChildren: () =>
      import("../app/components/home-page/home-page.module").then(
        (m) => m.HomePageModule
      ),
  },

  {
    path: "**",
    redirectTo: "/",
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TermsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    RecaptchaModule,
    RecaptchaV3Module,
    SignUpModule,
    SignInModule,
    HomePageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
