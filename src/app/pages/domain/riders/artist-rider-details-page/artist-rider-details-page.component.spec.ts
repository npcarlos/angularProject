import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistRiderDetailsPageComponent } from './artist-rider-details-page.component';

describe('ArtistRiderDetailsPageComponent', () => {
  let component: ArtistRiderDetailsPageComponent;
  let fixture: ComponentFixture<ArtistRiderDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistRiderDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistRiderDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
