import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistDetailsPageComponent } from './artist-details-page/artist-details-page.component';
import { ArtistsListPageComponent } from './artists-list-page/artists-list-page.component';
import { RouterModule } from '@angular/router';
import { CommonUIModule } from 'src/app/components/common-ui/common-ui.module';

@NgModule({
  declarations: [ArtistDetailsPageComponent, ArtistsListPageComponent],
  imports: [CommonModule, RouterModule, CommonUIModule],
  exports: [ArtistDetailsPageComponent, ArtistsListPageComponent],
})
export class ArtistsModule {}
