import { Component, OnInit } from '@angular/core';

import { JsonFileService } from '../json-file.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  constructor(private jsonFileService: JsonFileService) {
    console.log("Created")
   }

  ngOnInit() {
  }

}
