import { TestBed } from '@angular/core/testing';

import { PlacesStoreServiceService } from './places-store-service.service';

describe('ArtistsStoreServiceService', () => {
  let service: PlacesStoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacesStoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
