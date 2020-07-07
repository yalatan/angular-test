import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IUserLoginModel, IUserCreateModel } from "../../../models/user.model";
import { LocalStorageService } from "../../../services/local-storage.service";
import { environment } from '../../../../environments/environment';

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  recaptcha: any[];
  usertoLogin: IUserLoginModel;
  currentUser: IUserCreateModel;
  isErrorMessage: Boolean = false;
  sitekey = environment.site_key_reCAPTCHA;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private _localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ]),
      ],
    });
  }

  loginUser(): void {
    this.usertoLogin = {
      Email: this.loginForm.value.email,
      Password: this.loginForm.value.password,
    };
    this.currentUser = this._localStorageService.checkUser(this.usertoLogin);

    if (this.currentUser) {
      this._localStorageService.setCurrentUser(this.currentUser);
      this.loginForm.reset();
      this.router.navigate(["/home"]);
    } else {
      this.isErrorMessage = true;
    }
  }

  resolved(captchaResponse: any[]) {
    this.recaptcha = captchaResponse;
    console.log("this.recaptcha", this.recaptcha);
  }
}
