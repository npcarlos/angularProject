import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistModel } from 'src/app/domain/artists/artist';
import { PlacesStoreServiceService } from 'src/app/services/places/places-store-service.service';

@Component({
  selector: 'app-place-details-page',
  templateUrl: './place-details-page.component.html',
  styleUrls: ['./place-details-page.component.scss'],
})
export class PlaceDetailsPageComponent implements OnInit {
  place: ArtistModel;

  constructor(private route: ActivatedRoute, private placesStoreService: PlacesStoreServiceService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.placesStoreService.getPlace(id).subscribe((place) => (this.place = place));
    }
  }
}
