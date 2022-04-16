import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsDetailsPageComponent } from './events/events-details-page/events-details-page.component';
import { EventsListPageComponent } from './events/events-list-page/events-list-page.component';

@NgModule({
  declarations: [
    EventsDetailsPageComponent,
    EventsListPageComponent
  ],
  imports: [CommonModule],
})
export class PagesModule {}
