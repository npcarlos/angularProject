import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { EntityCardComponent } from './entity-card/entity-card.component';
import { SlideGalleryComponent } from './slide-gallery/slide-gallery.component';
import { VerificationSignComponent } from './verification-sign/verification-sign.component';
import { MatCardModule } from '@angular/material/card';
import { TableModule } from './table/table.module';
import { TabPanelModule } from './tab-panel/tab-panel.module';

@NgModule({
  declarations: [EntityCardComponent, SlideGalleryComponent, VerificationSignComponent],
  imports: [CommonModule, MatIconModule, MatCardModule],
  exports: [EntityCardComponent, SlideGalleryComponent, TableModule, TabPanelModule, VerificationSignComponent],
})
export class UIAtomsModule {}
