import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceCardComponent } from './place-card/place-card.component';

@NgModule({
  declarations: [PlaceCardComponent],
  imports: [CommonModule],
  exports: [PlaceCardComponent],
})
export class PlacesUIComponentsModule {}
