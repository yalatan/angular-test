import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../app/components/landing-page/landing-page.component';
import { HomePageComponent } from '../app/components/home-page/home-page.component';
import { SignUpModule  } from '../app/components/authorization/sign-up/sign-up.module';
import { SignInModule  } from '../app/components/authorization/sign-in/sign-in.module';


const routes: Routes = [
  {
    path      : '',
    redirectTo: 'landingPage',
    pathMatch: 'full'
},
{
  path      : 'landingPage',
  component: LandingPageComponent
},
  {
    path      : 'signin',
    redirectTo: 'signIn'
},
{
    path      : 'signup',
    redirectTo: 'signUp'
},

{
    path      : 'home',
    component: HomePageComponent
},


{
  path      : '**',
 redirectTo: 'landingPage'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    
    SignUpModule,
    SignInModule],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { 

}
