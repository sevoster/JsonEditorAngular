import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonFileService {
  fileContent: string;
  fileName: string = "NewFile.json";
  
  constructor() { }
}
