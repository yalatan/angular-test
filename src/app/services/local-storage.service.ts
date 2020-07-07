import { Injectable } from "@angular/core";
import { IUserCreateModel, IUserLoginModel } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  private _currentuser = "currentuser";
  private _usersList = "usersList";

  constructor() {}

  setCurrentUser(model: IUserCreateModel): void {
    localStorage.setItem(this._currentuser, JSON.stringify(model));
  }

  saveUserToUsersList(model: IUserCreateModel): Boolean {
    let users = JSON.parse(localStorage.getItem(this._usersList)) || [];
    let isAddNewUser = true;
    users.forEach((user) => {
      if (user.Email === model.Email) {
        isAddNewUser = false;
      }
    });
    if (isAddNewUser) {
      users.push(model);
      localStorage.setItem(this._usersList, JSON.stringify(users));
      return true;
    }
  }
  checkUser(model: IUserLoginModel): IUserCreateModel {
    let users = JSON.parse(localStorage.getItem(this._usersList)) || [];
    let userchecked;
    users.forEach((user) => {
      if (user.Email === model.Email && user.Password === model.Password) {
        userchecked = user;
      }
    });
    return userchecked;
  }
}
