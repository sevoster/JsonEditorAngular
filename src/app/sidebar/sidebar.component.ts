import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { JsonFileService } from '../json-file.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl:string;

  constructor(private router: Router, private jsonFileService: JsonFileService) {
    router.events.subscribe((_: NavigationEnd) => {
      if (_.urlAfterRedirects) { this.currentUrl = _.urlAfterRedirects }
    })
  }

  ngOnInit() {
  }

}
