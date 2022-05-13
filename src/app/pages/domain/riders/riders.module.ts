import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistRidersListPageComponent } from './artist-riders-list-pages/artist-riders-list-page.component';
import { ArtistRiderDetailsPageComponent } from './artist-rider-details-page/artist-rider-details-page.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonUIModule } from 'src/app/components/common-ui/common-ui.module';

@NgModule({
  declarations: [ArtistRidersListPageComponent, ArtistRiderDetailsPageComponent],
  imports: [CommonModule, MatIconModule, CommonUIModule],
  exports: [ArtistRidersListPageComponent, ArtistRiderDetailsPageComponent],
})
export class RidersModule {}
