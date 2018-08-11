import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JsonFileService } from '../json-file.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  parsedContent: object = null;

  constructor(private jsonFileService: JsonFileService, private router: Router) {
    console.log("Created")
    this.parsedContent = JSON.parse(jsonFileService.fileContent)
   }

  ngOnInit() {
    if (this.jsonFileService.fileName === null) {
      console.log("Select file first")
      this.router.navigateByUrl("/select");
    }
  }

  save(newValue) {
    this.jsonFileService.fileContent = newValue
  }

}
