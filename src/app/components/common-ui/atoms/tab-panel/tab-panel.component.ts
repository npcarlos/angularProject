import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SectionFieldComponent } from './base-components/section-field/section-field.component';
import { TabPanelSubpageDirective } from './definitions/tab-subpage.directive';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent implements OnInit {
  @Input() subpages: any = [];
  currentSubpage: any;

  @Output() onTabClicked: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TabPanelSubpageDirective, { static: true }) subpageHost: TabPanelSubpageDirective;
  constructor() {}

  ngOnInit(): void {
    this.loadSubpageComponent();
  }

  setCurrentSubpage(newSubpage: any) {
    this.currentSubpage = newSubpage;
    this.onTabClicked.emit(newSubpage);
  }

  loadSubpageComponent() {
    // const viewContainerRef = this.subpageHost.viewContainerRef;
    // viewContainerRef.clear();
    // const componentRef = viewContainerRef.createComponent<TabPanelSubpageDirective>();
  }
}
