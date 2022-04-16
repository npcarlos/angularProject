import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsPagesModule } from './artists/artists-pages.module';
import { PlacesPagesModule } from './places/places-pages.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ArtistsPagesModule, PlacesPagesModule],
})
export class PagesModule {}
