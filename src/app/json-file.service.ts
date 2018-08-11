import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonFileService {
  fileContent: string = null;
  fileName: string = null;
  
  constructor() { }

}
