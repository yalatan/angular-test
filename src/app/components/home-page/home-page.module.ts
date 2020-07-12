import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "../home-page/home-page.component";
import { RouterModule } from "@angular/router";

import { UserInfoComponent } from "../user-info/user-info.component";
import { VehicleInfoComponent } from "../vehicle-info/vehicle-info.component";
import { DocumentsComponent } from "../documents/documents.component";
import { FileUploadComponent} from "../file-upload/file-upload.component";

import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

import { ReactiveFormsModule } from "@angular/forms";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

const routes = [
  {
    path: "portal",
    component: HomePageComponent,
  },
  {
    path: "portal",
    component: HomePageComponent,
    children: [
      {
        path: "user",
        component: UserInfoComponent,
        // outlet: 'portalaside'
      },
      {
        path: "vehicle",
        component: VehicleInfoComponent,
        // outlet: 'portalaside'
      },
      {
        path: "documents",
        component: DocumentsComponent,
        // outlet: 'portalaside'
      },
    ],
  },
  // {
  //   path: "user",
  //   component: UserInfoComponent,
  //   // outlet: 'portalaside'
  // },
  // {
  //   path: "vehicle",
  //   component: VehicleInfoComponent,
  //   // outlet: 'portalaside'
  // },
  // {
  //   path: "documents",
  //   component: DocumentsComponent,
  //   // outlet: 'portalaside'
  // },
];

@NgModule({
  declarations: [
    HomePageComponent,
    UserInfoComponent,
    VehicleInfoComponent,
    DocumentsComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GooglePlaceModule,
    ReactiveFormsModule,

    MatCardModule,
    MatTabsModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
})
export class HomePageModule {}
