import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntityCardEvent } from 'src/app/components/common-ui/atoms/entity-card/entity-card.events';
import { ArtistModel } from 'src/app/domain/artists/artist';
import { RecommendationCardParams } from 'src/app/pages/home/home-sections/recommended-selection/recommended-selection.component';
import { ArtistsStoreServiceService } from 'src/app/services/artists/artists-store-service.service';
import { EventsStoreServiceService } from 'src/app/services/events/events-store-service.service';

@Component({
  selector: 'app-events-list-page',
  templateUrl: './events-list-page.component.html',
  styleUrls: ['./events-list-page.component.scss'],
})
export class EventsListPageComponent implements OnInit {
  pastEventsList: ArtistModel[] = [];
  nextEventsList: ArtistModel[] = [];

  artistsRecomendationCardParams: RecommendationCardParams = {
    showActionButtons: false,
    showVerificationSign: false,
    showDescription: false,
  };

  constructor(private router: Router, private eventsStoreService: EventsStoreServiceService) {}

  ngOnInit(): void {
    this.eventsStoreService.getPastEvents().subscribe((events) => (this.pastEventsList = events));
    this.eventsStoreService.getNextEvents().subscribe((events) => (this.nextEventsList = events));
  }

  eventClicked(event: EntityCardEvent) {
    console.log(event);
  }
}
