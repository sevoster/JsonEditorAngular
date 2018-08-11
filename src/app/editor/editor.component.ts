import { Component, OnInit } from '@angular/core';

import { JsonFileService } from '../json-file.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  parsedContent: string = null;

  constructor(private jsonFileService: JsonFileService) {
    console.log("Created")
    this.parsedContent = JSON.parse(jsonFileService.fileContent)
   }

  ngOnInit() {
  }

  save(newValue) {
    this.jsonFileService.fileContent = this.parsedContent;
  }

}
