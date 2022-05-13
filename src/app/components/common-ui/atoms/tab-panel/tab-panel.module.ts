import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabPanelComponent } from './tab-panel.component';
import { SectionFieldComponent } from './base-components/section-field/section-field.component';

@NgModule({
  declarations: [TabPanelComponent, SectionFieldComponent],
  imports: [CommonModule],
  exports: [TabPanelComponent, SectionFieldComponent],
})
export class TabPanelModule {}
