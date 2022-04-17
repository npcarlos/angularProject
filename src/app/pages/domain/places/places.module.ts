import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesListPageComponent } from './places-list-page/places-list-page.component';
import { PlaceDetailsPageComponent } from './place-details-page/place-details-page.component';

@NgModule({
  declarations: [PlacesListPageComponent, PlaceDetailsPageComponent],
  imports: [CommonModule],
  exports: [PlacesListPageComponent, PlaceDetailsPageComponent],
})
export class PlacesModule {}
