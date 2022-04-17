import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntityCardEvent } from 'src/app/components/common-ui/atoms/entity-card/entity-card.events';
import { ArtistModel } from 'src/app/domain/artists/artist';
import { ArtistsStoreServiceService } from 'src/app/services/artists/artists-store-service.service';
import { PlacesStoreServiceService } from 'src/app/services/places/places-store-service.service';
import { RecommendationCardParams } from './home-sections/recommended-selection/recommended-selection.component';

const MAX_RECOMMENDATIONS: number = 5;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  artists: ArtistModel[] = [];
  topTenArtists: ArtistModel[] = [];
  places: ArtistModel[] = [];

  artistsRecomendationCardParams: RecommendationCardParams = {};
  placesRecomendationCardParams: RecommendationCardParams = { showMainPhoto: false };

  constructor(
    private router: Router,
    private artistsStoreService: ArtistsStoreServiceService,
    private placesStoreService: PlacesStoreServiceService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.artistsStoreService
      .getArtists({ limit: MAX_RECOMMENDATIONS })
      .subscribe((artists) => (this.artists = artists));
    this.artistsStoreService.getArtistTop10Artists().subscribe((artists) => (this.topTenArtists = artists));
    this.placesStoreService.getPlaces({ limit: MAX_RECOMMENDATIONS }).subscribe((places) => (this.places = places));
  }

  recommendedClicked(event: EntityCardEvent) {
    let path = 'artist';
    if (event.item.artistType === 'place') {
      path = 'place';
    }
    const itemId = event.item.id;
    this.router.navigate([`/${path}/${itemId}`]);
  }
}
