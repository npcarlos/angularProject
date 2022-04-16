import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistDetailsPageComponent } from './artist-details-page/artist-details-page.component';

@NgModule({
  declarations: [ArtistDetailsPageComponent],
  imports: [CommonModule],
  exports: [ArtistDetailsPageComponent],
})
export class ArtistsPagesModule {}
