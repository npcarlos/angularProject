import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsUIComponentsModule } from './artists/artists-ui-components.module';
import { EventsUIComponentsModule } from './events/events-ui-components.module';
import { PlacesUIComponentsModule } from './places/places-ui-components.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ArtistsUIComponentsModule, EventsUIComponentsModule, PlacesUIComponentsModule],
})
export class ComponentsModule {}
