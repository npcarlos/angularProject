import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistRiderModel } from 'src/app/domain/riders/rider';
import { ArtistRidersStoreServiceService } from 'src/app/services/riders/artist-riders-store-service.service';

@Component({
  selector: 'app-artist-riders-list-page',
  templateUrl: './artist-riders-list-page.component.html',
  styleUrls: ['./artist-riders-list-page.component.scss'],
})
export class ArtistRidersListPageComponent implements OnInit {
  artistId: string;
  riders: ArtistRiderModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private artistRidersStoreService: ArtistRidersStoreServiceService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.route.params.subscribe((params) => {
      this.artistId = params['artistId'];
      console.log('Artist id', this.artistId);
      if (this.artistId) {
        this.artistRidersStoreService.getRiders(this.artistId).subscribe((riders) => (this.riders = riders));
      }
    });
  }

  riderClicked(rider: ArtistRiderModel) {
    this.router.navigate([`/riders/${this.artistId}/${rider.id}`]);
  }
}
