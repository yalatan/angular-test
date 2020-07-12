import { Component, OnInit } from '@angular/core';
import { simpleFadeAnimation } from '../animation';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
  animations: [simpleFadeAnimation]
})
export class TermsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
