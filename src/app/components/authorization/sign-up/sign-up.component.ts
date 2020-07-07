import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { IUserCreateModel } from "../../../models/user.model";
import { LocalStorageService } from "../../../services/local-storage.service";
import { environment } from '../../../../environments/environment';
// import { ReCaptchaV3Service } from 'ng-recaptcha';



@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  passwordPlaceholder = "Password (8 or More Characters)";
  user: IUserCreateModel;
  isErrorMessageEmail: Boolean = false;
  sitekey = environment.site_key_reCAPTCHA;
  recaptcha: any[];

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private _localStorageService: LocalStorageService,
  ) {}

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      firstName: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
          Validators.pattern("^[a-zA-Zs]*$"),
        ]),
      ],
      lastName: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
          Validators.pattern("^[a-zA-Zs]*$"),
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
      recaptchaReactive: new FormControl(null, Validators.required)
    });

    
  }

  resolved(captchaResponse: any[]) {
    this.recaptcha = captchaResponse;
    console.log("this.recaptcha", this.recaptcha);
  }

  registrateUser(): void {
    this.user = {
      FirstName: this.registerForm.value.firstName,
      LastName: this.registerForm.value.lastName,
      Email: this.registerForm.value.email,
      Password: this.registerForm.value.password,
    };

    if (this._localStorageService.saveUserToUsersList(this.user)) {
      this._localStorageService.setCurrentUser(this.user);
      this.registerForm.reset();
      this.router.navigate(["/home"]);
    } else {
      this.isErrorMessageEmail = true;
    }
  }
}



 