import { Injectable } from '@angular/core';
import { EVENTS, NEXT_EVENTS, PAST_EVENTS } from 'mocks/events';
import { Observable, of } from 'rxjs';
import { ArtistModel } from 'src/app/domain/artists/artist';

@Injectable({
  providedIn: 'root',
})
export class EventsStoreServiceService {
  constructor() {}

  getEvents(params: { limit?: number } = {}): Observable<ArtistModel[]> {
    const events = [...EVENTS] || [];

    const limit = params.limit || events.length;

    const limited = [];
    while (limited.length < limit && events.length > 0) {
      limited.push(events.splice(0, 1)[0]);
    }

    return of(limited);
  }

  getPastEvents(params: { limit?: number } = {}): Observable<ArtistModel[]> {
    const events = [...PAST_EVENTS] || [];

    const limit = params.limit || events.length;

    const limited = [];
    while (limited.length < limit && events.length > 0) {
      limited.push(events.splice(0, 1)[0]);
    }

    return of(limited);
  }

  getNextEvents(params: { limit?: number } = {}): Observable<ArtistModel[]> {
    const events = [...NEXT_EVENTS] || [];

    const limit = params.limit || events.length;

    const limited = [];
    while (limited.length < limit && events.length > 0) {
      limited.push(events.splice(0, 1)[0]);
    }

    return of(limited);
  }

  getEvent(id: string): Observable<ArtistModel> {
    return of(EVENTS.find((place) => place.id === id));
  }
}
