import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsListPageComponent } from './artists-list-page/artists-list-page.component';
import { RouterModule } from '@angular/router';
import { CommonUIModule } from 'src/app/components/common-ui/common-ui.module';
import { MatIconModule } from '@angular/material/icon';
import { ArtistDetailsPageModule } from './artist-details-page/artist-details-page.module';

@NgModule({
  declarations: [ArtistsListPageComponent],
  imports: [CommonModule, RouterModule, MatIconModule, CommonUIModule],
  exports: [ArtistDetailsPageModule, ArtistsListPageComponent],
})
export class ArtistsModule {}
