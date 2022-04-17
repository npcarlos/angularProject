import { Injectable } from '@angular/core';
import { PLACES } from 'mocks/places.mock';
import { Observable, of } from 'rxjs';
import { ArtistModel } from 'src/app/domain/artists/artist';

@Injectable({
  providedIn: 'root',
})
export class PlacesStoreServiceService {
  constructor() {}

  getPlaces(params: { limit?: number } = {}): Observable<ArtistModel[]> {
    const places = [...PLACES] || [];

    const limit = params.limit || places.length;

    const limited = [];
    while (limited.length < limit && places.length > 0) {
      const randomPosition = Math.random() * places.length;
      limited.push(places.splice(randomPosition, 1)[0]);
    }

    return of(limited);
  }

  getPlace(id: string): Observable<ArtistModel> {
    return of(PLACES.find((place) => place.id === id));
  }
}
