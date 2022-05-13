import { TestBed } from '@angular/core/testing';

import { ArtistRidersStoreServiceService } from './artist-riders-store-service.service';

describe('ArtistsStoreServiceService', () => {
  let service: ArtistRidersStoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistRidersStoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
