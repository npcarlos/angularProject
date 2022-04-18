import { Injectable } from '@angular/core';
import { ARTISTS } from 'mocks/artists.mock';
import { Observable, of } from 'rxjs';
import { ArtistModel } from 'src/app/domain/artists/artist';
import { VerificationStatus } from 'src/app/domain/enums/verification';

@Injectable({
  providedIn: 'root',
})
export class ArtistsStoreServiceService {
  constructor() {}

  getArtists(params: { limit?: number } = {}): Observable<ArtistModel[]> {
    const artists = [...ARTISTS] || [];

    const limit = params.limit || artists.length;

    const limited = [];
    while (limited.length < limit && artists.length > 0) {
      const randomPosition = Math.random() * artists.length;
      limited.push(artists.splice(randomPosition, 1)[0]);
    }

    return of(limited);
  }

  getArtist(id: string): Observable<ArtistModel> {
    return of(ARTISTS.find((artist) => artist.id === id));
  }

  getArtistTop10Artists(): Observable<ArtistModel[]> {
    return this.getArtists();
  }
}
