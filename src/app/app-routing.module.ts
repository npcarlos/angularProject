import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsPageComponent } from './pages/artists/artist-details-page/artist-details-page.component';
import { ArtistsListPageComponent } from './pages/artists/artists-list-page/artists-list-page.component';
import { EventDetailsPageComponent } from './pages/events/event-details-page/event-details-page.component';
import { EventsListPageComponent } from './pages/events/events-list-page/events-list-page.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaceDetailsPageComponent } from './pages/places/place-details-page/place-details-page.component';
import { PlacesListPageComponent } from './pages/places/places-list-page/places-list-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artists', component: ArtistsListPageComponent },
  { path: 'artist', component: ArtistDetailsPageComponent },
  { path: 'events', component: EventsListPageComponent },
  { path: 'event', component: EventDetailsPageComponent },
  { path: 'places', component: PlacesListPageComponent },
  { path: 'place', component: PlaceDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
