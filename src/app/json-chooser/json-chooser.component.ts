import { Component, OnInit } from '@angular/core';

import { JsonFileService } from '../json-file.service';


@Component({
  selector: 'app-json-chooser',
  templateUrl: './json-chooser.component.html',
  styleUrls: ['./json-chooser.component.scss']
})
export class JsonChooserComponent implements OnInit {

  fileContent: string;
  fileName: string = "MyFile.json";
  mode: string;

  // TODO: how to load file correctly?
  file: any;

  constructor(private jsonFileService: JsonFileService) { }

  ngOnInit() {
  }

  fileChanged(e) {
    this.file = e.target.files[0];
  }

  loadFromFile() {
    let fileReader = new FileReader()
    fileReader.onload = (e) => {
      this.jsonFileService.fileName = this.file.name
      this.jsonFileService.fileContent = JSON.stringify(JSON.parse(fileReader.result), null, 2)
    }

    fileReader.readAsText(this.file)
  }

  loadFromUrl(url: string) {
    console.log("Take from URL: " + url)
  }

  createNewFile(name: string) {
    console.log("Create New " + name)
    this.jsonFileService.fileName = name
    this.jsonFileService.fileContent = ""
  }

}
