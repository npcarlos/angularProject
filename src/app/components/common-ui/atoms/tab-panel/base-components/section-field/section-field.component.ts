import { Component, OnInit } from '@angular/core';
import { TabSubpage } from '../../definitions/tab-page';
import { TabPanelSubpageDirective } from '../../definitions/tab-subpage.directive';

@Component({
  selector: 'app-section-field',
  templateUrl: './section-field.component.html',
  styleUrls: ['./section-field.component.scss'],
})
export class SectionFieldComponent implements OnInit, TabSubpage {
  name: string;
  icon?: string;
  subpageContentTemplate: any;

  constructor() {}

  ngOnInit(): void {}
}
