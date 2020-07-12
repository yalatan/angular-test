import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Router } from "@angular/router";
import { IUserCreateModel } from "../../../models/user.model";
import { LocalStorageService } from "../../../services/local-storage.service";
import { environment } from "../../../../environments/environment";
import { UserService } from "../../../services/user.service";
import { simpleFadeAnimation } from '../../animation';

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
  animations: [simpleFadeAnimation]
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  passwordPlaceholder = "Password (8 or More Characters)";
  user: IUserCreateModel;
  isErrorMessageEmail: Boolean = false;
  sitekey = environment.site_key_reCAPTCHA;
  recaptcha: any[];
  cities = ["Minsk", "Grodno", "Gomel", "Brest", "Vitebsk", "Mogilev"];

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private _localStorageService: LocalStorageService,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    if (this._localStorageService.getCurrentUser()) {
      this.router.navigate(["/portal"]);
    }

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
      city: ["", [Validators.required]],
      vehicle: ["", Validators.required],
      recaptchaReactive: new FormControl(null, Validators.required),
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
      City: this.registerForm.value.city,
      Vehicle: this.registerForm.value.vehicle,
    };

    if (this._localStorageService.saveUserToUsersList(this.user)) {
      this._localStorageService.setCurrentUser(this.user);
      this._userService._isDisableVehicleInfo.next(this.user.Vehicle);
      this._userService._isDisableVehicleInfo.complete();
      this.registerForm.reset();
      this.router.navigate(["/portal"]);
    } else {
      this.isErrorMessageEmail = true;
    }
  }
}
