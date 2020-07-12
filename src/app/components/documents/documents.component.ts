import { Component, OnInit } from '@angular/core';
import { simpleFadeAnimation } from '../animation';
import {HttpClient} from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  animations: [simpleFadeAnimation]
})
export class DocumentsComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   
  }

  onFileComplete(data: any): void {
    // this.profileCleanerService._profileFile.subscribe(file => {
    //   this.profileFile = file;
    //   this.horizontalStepperStep1.setValue({profile_picture: file});
    // });
    console.log("file upload");
    
  }

 
}
