import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SignUpComponent } from "../sign-up/sign-up.component";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import {
  RecaptchaModule,
  RecaptchaV3Module,
  RecaptchaFormsModule,
} from "ng-recaptcha";

const routes = [
  {
    path: "signup",
    component: SignUpComponent,
  },
  
  {
    path: "signup/:city_name",
    component: SignUpComponent,
  },
];

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    RecaptchaModule,
    RecaptchaV3Module,
    RecaptchaFormsModule,
  ],
})
export class SignUpModule {}
