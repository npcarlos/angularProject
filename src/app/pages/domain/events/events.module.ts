import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListPageComponent } from './events-list-page/events-list-page.component';
import { EventDetailsPageComponent } from './event-details-page/event-details-page.component';

@NgModule({
  declarations: [EventsListPageComponent, EventDetailsPageComponent],
  imports: [CommonModule],
  exports: [EventsListPageComponent, EventDetailsPageComponent],
})
export class EventsModule {}
