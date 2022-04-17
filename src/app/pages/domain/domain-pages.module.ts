import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsModule } from './artists/artists.module';
import { EventsModule } from './events/events.module';
import { PlacesModule } from './places/places.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ArtistsModule, EventsModule, PlacesModule],
})
export class DomainPagesModule {}
