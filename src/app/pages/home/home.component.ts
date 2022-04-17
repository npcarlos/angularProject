import { Component, OnInit } from '@angular/core';
import { ArtistModel } from 'src/app/domain/artists/artist';
import { ArtistsStoreServiceService } from 'src/app/services/artists/artists-store-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  artists: ArtistModel[] = [];

  constructor(private artistsStoreService: ArtistsStoreServiceService) {}

  ngOnInit(): void {
    this.artistsStoreService.getArtists({ limit: 6 }).subscribe((artists) => (this.artists = artists));
  }
}
