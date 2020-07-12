import { Injectable } from "@angular/core";
import { IUserCreateModel, IUserLoginModel } from "../models/user.model";
import { Subject } from "rxjs";
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  private key_currentuser = "currentuser";
  private key_usersList = "usersList";
  // public _currentUser = new Subject<IUserCreateModel>();

  constructor(private _userService: UserService) {}

  setCurrentUser(model: IUserCreateModel): void {
    localStorage.setItem(this.key_currentuser, JSON.stringify(model));
  }

  getCurrentUser(): IUserCreateModel {
    return JSON.parse(localStorage.getItem(this.key_currentuser));
  }

  saveUserToUsersList(model: IUserCreateModel): Boolean {
    let users = JSON.parse(localStorage.getItem(this.key_usersList)) || [];
    let isAddNewUser = true;
    users.forEach((user) => {
      if (user.Email === model.Email) {
        isAddNewUser = false;
      }
    });
    if (isAddNewUser) {
      users.push(model);
      localStorage.setItem(this.key_usersList, JSON.stringify(users));
      return true;
    }
  }
  checkUser(model: IUserLoginModel): IUserCreateModel {
    let users = JSON.parse(localStorage.getItem(this.key_usersList)) || [];
    let userchecked;
    users.forEach((user) => {
      if (user.Email === model.Email && user.Password === model.Password) {
        userchecked = user;
      }
    });
    return userchecked;
  }

  updateUser(model: IUserCreateModel): void {
    let users = JSON.parse(localStorage.getItem(this.key_usersList)) || [];
    users.forEach((user, i) => {
      if (user.Email === model.Email && user.Password === model.Password) {
        users[i] = model;
        this._userService._isDisableVehicleInfo.next(model.Vehicle);
      }
    });
    localStorage.setItem(this.key_usersList, JSON.stringify(users));
  }

  deleteCurrentUser(): void {
    localStorage.removeItem(this.key_currentuser);
  }
}
