import { Component, OnInit } from '@angular/core';
import { ArtistModel } from 'src/app/domain/artists/artist';
import { ArtistsStoreServiceService } from 'src/app/services/artists/artists-store-service.service';

@Component({
  selector: 'app-artists-list-page',
  templateUrl: './artists-list-page.component.html',
  styleUrls: ['./artists-list-page.component.scss'],
})
export class ArtistsListPageComponent implements OnInit {
  artists: ArtistModel[] = [];

  constructor(private artistsStoreService: ArtistsStoreServiceService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.artistsStoreService.getArtists().subscribe((artists) => (this.artists = artists));
  }
}
