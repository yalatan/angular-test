import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { LocalStorageService } from "../../services/local-storage.service";
import { IUserCreateModel } from "../../models/user.model";
import { IVehicleModel } from "../../models/vehicle.model";
import { Subject, Observable } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-vehicle-info",
  templateUrl: "./vehicle-info.component.html",
  styleUrls: ["./vehicle-info.component.scss"],
})
export class VehicleInfoComponent implements OnInit {
  cars = [
    {
      name: "Mercedes",
      models: [
        "Citan Van",
        "Sprinter Classic Van",
        "Vito Mixto",
        "Vito Van",
        "G-class",
      ],
    },
    {
      name: "Volkswagen",
      models: [
        "Caddy",
        "Crafter",
        "Transporter",
        "Teramont",
        "Tiguan",
        "Jetta",
        "Passat",
        "Polo",
      ],
    },
    {
      name: "Ford",
      models: [
        "EcoSport",
        "Sierra",
        "Mondeo Wagon",
        "Focus",
        "Transit Custom",
        "Transit Van",
        "Tourneo Custom",
      ],
    },
    {
      name: "Renault",
      models: ["Arkana", "Dokker", "Duster", "Kangoo", "Kaptur", "Logan"],
    },
  ];
  models = [];
  vehicleinfoForm: FormGroup;
  public currentUser: IUserCreateModel;
  vehicle: IVehicleModel = {
    Brand: "",
    Model: "",
    Year: "",
    Color: "",
  };
  private _unsubscribeAll: Observable<any>;

  constructor(
    private _formBuilder: FormBuilder,
    private _localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.currentUser = this._localStorageService.getCurrentUser();

    this.currentUser.VihicleInfo = this.currentUser.VihicleInfo || this.vehicle;
    // console.log('this.currentUser ', this.currentUser.VihicleInfo );
    // this.models
    this.fillForm(this.currentUser.VihicleInfo);
    this.models = this.setCarModels(this.vehicleinfoForm.value.brand);
    // console.log(' this.models ',  this.models );

    this.vehicleinfoForm
      .get("brand")
      .valueChanges// .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data) => {
        this.models = this.setCarModels(data);
      });
  }

  private fillForm(vehicle: IVehicleModel) {
    this.vehicleinfoForm = this._formBuilder.group({
      brand: [vehicle.Brand || ""],
      model: [vehicle.Model || ""],
      year: [vehicle.Year || ""],
      color: [vehicle.Color || ""],
    });
  }

  saveChanges(): void {
    console.log("save vehicle");

    this.currentUser.VihicleInfo = {
      Brand: this.vehicleinfoForm.value.brand,
      Model: this.vehicleinfoForm.value.model,
      Year: this.vehicleinfoForm.value.year,
      Color: this.vehicleinfoForm.value.color,
    };

    this._localStorageService.updateUser(this.currentUser);
    this._localStorageService.setCurrentUser(this.currentUser);
  }

  private setCarModels(data): Array<string> {
    let result;
    this.cars.forEach((car) => {
      if (car.name === data) {
        result = car.models;
      }
    });
    return result;
  }
}
