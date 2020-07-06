import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
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
  imports: [RouterModule.forRoot(routes), SignUpModule, SignInModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
