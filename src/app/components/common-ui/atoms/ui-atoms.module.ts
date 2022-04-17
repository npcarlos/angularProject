import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { EntityCardComponent } from './entity-card/entity-card.component';
import { SlideGalleryComponent } from './slide-gallery/slide-gallery.component';
import { VerificationSignComponent } from './verification-sign/verification-sign.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [EntityCardComponent, SlideGalleryComponent, VerificationSignComponent],
  imports: [CommonModule, MatIconModule, MatCardModule],
  exports: [EntityCardComponent, SlideGalleryComponent, VerificationSignComponent],
})
export class UIAtomsModule {}
