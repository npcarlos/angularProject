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
      name: 'Home',
      path: '',
      updated: new Date('2/20/16'),
    },
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
      name: 'Próximos eventos',
      path: 'events',
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
    if (!!path) {
      const itemId = Math.floor(Math.random() * 18) + 1;
      this.router.navigate([`/${path}/${itemId}`]);
    } else {
      this.router.navigate([`/`]);
    }
    this.drawer.close();
  }
}
