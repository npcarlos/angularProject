import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListPageComponent } from './events-list-page/events-list-page.component';
import { EventDetailsPageComponent } from './event-details-page/event-details-page.component';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [EventsListPageComponent, EventDetailsPageComponent],
  imports: [CommonModule, MatIconModule, ComponentsModule],
  exports: [EventsListPageComponent, EventDetailsPageComponent],
})
export class EventsModule {}
