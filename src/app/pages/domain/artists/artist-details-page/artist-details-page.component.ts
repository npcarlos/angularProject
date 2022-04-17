import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistModel } from 'src/app/domain/artists/artist';
import { ArtistsStoreServiceService } from 'src/app/services/artists/artists-store-service.service';

@Component({
  selector: 'app-artist-details-page',
  templateUrl: './artist-details-page.component.html',
  styleUrls: ['./artist-details-page.component.scss'],
})
export class ArtistDetailsPageComponent implements OnInit {
  artist: ArtistModel;

  constructor(private route: ActivatedRoute, private artistsStoreService: ArtistsStoreServiceService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.artistsStoreService.getArtist(id).subscribe((artist) => (this.artist = artist));
    }
  }
}
