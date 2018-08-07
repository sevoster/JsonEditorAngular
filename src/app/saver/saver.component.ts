import { Component, OnInit } from '@angular/core';

import { JsonFileService } from '../json-file.service';


@Component({
  selector: 'app-saver',
  templateUrl: './saver.component.html',
  styleUrls: ['./saver.component.scss']
})
export class SaverComponent implements OnInit {
  path: string = "../../assets/json-files/current.json"
  textFile: any = null;

  constructor(private jsonFileService: JsonFileService) { }

  ngOnInit() {
  }

  prepareFile() {
    var data = new Blob([this.jsonFileService.fileContent], {type: "text/plain"})

    if (this.textFile !== null) {
      window.URL.revokeObjectURL(this.textFile)
    }

    this.textFile = window.URL.createObjectURL(data);
    return this.textFile
  }

  downloadFile() {
    var link = document.createElement("a")
    link.setAttribute("download", this.jsonFileService.fileName);
    link.href = this.prepareFile();

    document.body.appendChild(link);

    window.requestAnimationFrame(function () {
      var event = new MouseEvent('click');
      link.dispatchEvent(event);
      document.body.removeChild(link);
    });
  }

}
