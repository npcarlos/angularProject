import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsPageComponent } from './pages/domain/artists/artist-details-page/artist-details-page.component';
import { ArtistsListPageComponent } from './pages/domain/artists/artists-list-page/artists-list-page.component';
import { ErrorPageComponent } from './pages/common/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaceDetailsPageComponent } from './pages/domain/places/place-details-page/place-details-page.component';
import { ArtistRidersListPageComponent } from './pages/domain/riders/artist-riders-list-pages/artist-riders-list-page.component';
import { ArtistRiderDetailsPageComponent } from './pages/domain/riders/artist-rider-details-page/artist-rider-details-page.component';
import { EventsListPageComponent } from './pages/domain/events/events-list-page/events-list-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artists', component: ArtistsListPageComponent },
  { path: 'artist/:id', component: ArtistDetailsPageComponent },
  { path: 'events/:artistId', component: EventsListPageComponent },
  { path: 'place/:id', component: PlaceDetailsPageComponent },
  { path: 'riders/:artistId', component: ArtistRidersListPageComponent },
  { path: 'riders/:artistId/:riderId', component: ArtistRiderDetailsPageComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
