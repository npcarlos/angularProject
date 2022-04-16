import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsListPageComponent } from './artists-list-page.component';

describe('ArtistsListPageComponent', () => {
  let component: ArtistsListPageComponent;
  let fixture: ComponentFixture<ArtistsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
