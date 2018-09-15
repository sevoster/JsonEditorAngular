import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JsonFileService } from '../json-file.service';


@Component({
  selector: 'app-json-chooser',
  templateUrl: './json-chooser.component.html',
  styleUrls: ['./json-chooser.component.scss']
})
export class JsonChooserComponent implements OnInit {

  mode: string;

  // TODO: how to load file correctly?
  file: any;

  constructor(private jsonFileService: JsonFileService, private router: Router) { }

  ngOnInit() {
  }

  private goNext() {
    this.router.navigateByUrl("/edit"); 
  }

  fileChanged(e) {
    this.file = e.target.files[0];
  }

  loadFromFile() {
    let fileReader = new FileReader()
    fileReader.onload = (e) => {
      this.jsonFileService.fileName = this.file.name
      this.jsonFileService.fileContent = JSON.stringify(JSON.parse(fileReader.result), null, 2)
      this.goNext();
    }

    fileReader.readAsText(this.file);
  }

  loadFromUrl(url: string) {
    console.log("Take from URL: " + url)
    console.log("Method is not implemented")
  }

  createNewFile(name: string) {
    console.log("Create New " + name)
    this.jsonFileService.fileName = name + ".json"
    this.jsonFileService.fileContent = "{}"
    this.goNext()
  }

}
