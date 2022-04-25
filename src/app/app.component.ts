import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

export interface Section {
  name: string;
  updated: Date;
  path?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer;

  constructor(private router: Router) {}

  notes: Section[] = [
    {
      name: 'Mi banda',
      path: 'artist',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Riders Técnicos',
      path: 'riders',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Mis Tours',
      path: 'tours',
      updated: new Date('1/18/16'),
    },
  ];

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  toogleMenu() {
    this.drawer.toggle();
    window.scrollTo(0, 0);
  }

  clickSideMenu(section: Section) {
    let path = section.path;
    const itemId = Math.round(Math.random() * 14);
    this.router.navigate([`/${path}/${itemId}`]);
    this.drawer.close();
  }
}
