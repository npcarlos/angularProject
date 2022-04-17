import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistDetailsPageComponent } from './artist-details-page/artist-details-page.component';
import { ArtistsListPageComponent } from './artists-list-page/artists-list-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ArtistDetailsPageComponent, ArtistsListPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [ArtistDetailsPageComponent, ArtistsListPageComponent],
})
export class ArtistsModule {}
