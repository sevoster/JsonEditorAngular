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
  objectKeys = Object.keys;

  constructor(private jsonFileService: JsonFileService, private router: Router) {
    this.parsedContent = JSON.parse(jsonFileService.fileContent)
    this.parsedContent = this.constructDictForms(this.parsedContent)
  }

  constructDictForms(obj) {
    console.log(obj)
    if (Array.isArray(obj)) {
      var length = obj.length
      var res = {}
      for (var i = 0; i < length; i++) {
        res[i.toString()] = this.constructDictForms(obj[i])
      }
      return res
    }
    return obj
  }

  objects() {
    return Array.from(this.traverse())
  }

  // TODO: Assumption that there are no identical keys (bad assumption)
  * traverse() {
    var currentPath = [];
    var toTraverse = Object.keys(this.parsedContent);
    while (toTraverse.length > 0) {
      var key = toTraverse[toTraverse.length - 1];
      if (currentPath[currentPath.length - 1] === key) {
        currentPath.pop();
        toTraverse.pop();
        continue;
      }
      currentPath.push(key);
      yield currentPath.slice();
      var value = this.getValue(currentPath);
      console.log("VALUE FOR PATH: " + value + " " + currentPath)
      if (this.isDict(value)) {
        toTraverse = toTraverse.concat(Object.keys(value));
      }
    }
  }

  // TODO: Does not check all cases
  isDict(v) {
    return typeof v === 'object' && v !== null && !(v instanceof Array) && !(v instanceof Date);
  }

  getKey(path) {
    return path[path.length - 1]
  }

  getValue(path) {
    if (path.length === 0) {
      return null;
    }
    var res = this.parsedContent;
    for (var key in path) {
      res = res[path[key]]
    }
    return res
  }

  getPaddingStyle(path) {
    return {'padding-left': '' + path.length * 10 + 'px'}
  }

  getRange(num) {
    return Array(num).fill(1).map((x,i)=>i);
  }

  isNested(key) {
    return key.startsWith('__nested_')
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
