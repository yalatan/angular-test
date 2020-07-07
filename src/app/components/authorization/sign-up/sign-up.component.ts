import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  passwordPlaceholder = "Password (8 or More Characters)";
  recaptcha: any[];


  constructor(private _formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {

    this.registerForm = this._formBuilder.group({
      firstName: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z\s]*$')
        ]),
      ],
      lastName: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z\s]*$')
        ]),
      ],
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ]),
      ],
    });

  }

  registrateUser(): void {
    this.router.navigate(["/home"]);
  }

  resolved(captchaResponse: any[]){
this.recaptcha = captchaResponse;
console.log('this.recaptcha', this.recaptcha);

  }
 
}
