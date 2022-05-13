import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistRidersListPageComponent } from './artist-riders-list-page.component';

describe('ArtistRidersListPagesComponent', () => {
  let component: ArtistRidersListPageComponent;
  let fixture: ComponentFixture<ArtistRidersListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtistRidersListPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistRidersListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
