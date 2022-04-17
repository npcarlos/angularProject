import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsPageComponent } from './pages/domain/artists/artist-details-page/artist-details-page.component';
import { ArtistsListPageComponent } from './pages/domain/artists/artists-list-page/artists-list-page.component';
import { ErrorPageComponent } from './pages/common/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaceDetailsPageComponent } from './pages/domain/places/place-details-page/place-details-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artists', component: ArtistsListPageComponent },
  { path: 'artist/:id', component: ArtistDetailsPageComponent },
  { path: 'place/:id', component: PlaceDetailsPageComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
