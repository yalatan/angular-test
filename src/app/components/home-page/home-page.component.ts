import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "../../services/local-storage.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  isDisabledVehicleInfo: Boolean;

  constructor(
    private _userService: UserService,
    private _localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.isDisabledVehicleInfo = this._localStorageService.getCurrentUser().Vehicle;

    this._userService._isDisableVehicleInfo.subscribe((data) => {
      this.isDisabledVehicleInfo = data;
    });
  }
}
