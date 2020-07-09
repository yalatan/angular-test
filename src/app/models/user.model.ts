import { IVehicleModel } from "../models/vehicle.model";
export interface IUserCreateModel {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  City: string;
  Vehicle: Boolean;
  Birthday?: string;
  Adress?: string;
  VihicleInfo?: IVehicleModel;
}

export interface IUserLoginModel {
  Email: string;
  Password: string;
}
