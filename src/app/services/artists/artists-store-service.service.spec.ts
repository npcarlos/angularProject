import { TestBed } from '@angular/core/testing';

import { ArtistsStoreServiceService } from './artists-store-service.service';

describe('ArtistsStoreServiceService', () => {
  let service: ArtistsStoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistsStoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
