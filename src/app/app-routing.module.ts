import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsPageComponent } from './pages/domain/artists/artist-details-page/artist-details-page.component';
import { ArtistsListPageComponent } from './pages/domain/artists/artists-list-page/artists-list-page.component';
import { ErrorPageComponent } from './pages/common/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artists', component: ArtistsListPageComponent },
  { path: 'artist/:id', component: ArtistDetailsPageComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
