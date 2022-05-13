import { Injectable } from '@angular/core';
import { ARTISTS } from 'mocks/artists.mock';
import { PLACES } from 'mocks/places.mock';
import { ARTIST_RIDERS } from 'mocks/riders.mock';
import { Observable, of } from 'rxjs';
import { ArtistModel } from 'src/app/domain/artists/artist';
import { ArtistRiderModel } from 'src/app/domain/riders/rider';

@Injectable({
  providedIn: 'root',
})
export class ArtistRidersStoreServiceService {
  constructor() {}

  getRiders(idArtist: string, params: { limit?: number } = {}): Observable<ArtistRiderModel[]> {
    const riders = [...ARTIST_RIDERS] || [];

    const limit = params.limit || riders.length;

    const limited = [];
    while (limited.length < limit && riders.length > 0) {
      const randomPosition = 0;
      limited.push(riders.splice(randomPosition, 1)[0]);
    }

    return of(limited);
  }

  getRider(idArtist: string, idRider: string): Observable<ArtistRiderModel> {
    return of(ARTIST_RIDERS.find((rider) => rider.id === idRider));
  }
}
