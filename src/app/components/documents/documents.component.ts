import { Component, OnInit } from '@angular/core';
import { simpleFadeAnimation } from '../animation';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  animations: [simpleFadeAnimation]
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
