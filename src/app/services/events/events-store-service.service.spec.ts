import { TestBed } from '@angular/core/testing';

import { EventsStoreServiceService } from './events-store-service.service';

describe('ArtistsStoreServiceService', () => {
  let service: EventsStoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsStoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
