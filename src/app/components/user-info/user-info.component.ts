import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { LocalStorageService } from "../../services/local-storage.service";
import { IUserCreateModel } from "../../models/user.model";
import { GooglePlaceDirective } from "ngx-google-places-autocomplete";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"],
})
export class UserInfoComponent implements OnInit {
  @ViewChild("placesRef") placesRef: GooglePlaceDirective;

  options = {
    types: ["adress"],
  };

  userinfoForm: FormGroup;
  cities = ["Minsk", "Grodno", "Gomel", "Brest", "Vitebsk", "Mogilev"];

  public currentUser: IUserCreateModel;

  constructor(
    private _formBuilder: FormBuilder,
    private _localStorageService: LocalStorageService
  ) 
  {}

  ngOnInit(): void {
    this.currentUser = this._localStorageService.getCurrentUser();
    this.fillForm(this.currentUser);
  }

  private fillForm(userInfo: IUserCreateModel) {
    this.userinfoForm = this._formBuilder.group({
      firstName: [
        userInfo.FirstName,
        // Validators.compose([
        //   Validators.required,
        //   Validators.minLength(1),
        //   Validators.maxLength(50),
        //   Validators.pattern("^[a-zA-Zs]*$"),
        // ]),
      ],
      lastName: [
        userInfo.LastName,
        // Validators.compose([
        //   Validators.required,
        //   Validators.minLength(1),
        //   Validators.maxLength(50),
        //   Validators.pattern("^[a-zA-Zs]*$"),
        // ]),
      ],
      birthday: [userInfo.Birthday],
      adress: [userInfo.Adress],
      city: [
        userInfo.City,
        //  [Validators.required]
      ],
      vehicle: [
        userInfo.Vehicle,
        // Validators.required
      ],
    });
  }

  saveChanges(): void {
    this.currentUser = {
      FirstName: this.userinfoForm.value.firstName,
      LastName: this.userinfoForm.value.lastName,
      Birthday: this.userinfoForm.value.birthday,
      Adress: this.userinfoForm.value.adress,
      City: this.userinfoForm.value.city,
      Vehicle: this.userinfoForm.value.vehicle,
      Email: this.currentUser.Email,
      Password: this.currentUser.Password,
    };

    this._localStorageService.updateUser(this.currentUser);
    this._localStorageService.setCurrentUser(this.currentUser);
  }

  public handleAddressChange(data) {
    console.log("adress", data);
  }
}
