import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubpageComponent } from './subpage/subpage.component';
import { ArtistDetailsPageComponent } from './artist-details-page.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonUIModule } from 'src/app/components/common-ui/common-ui.module';

@NgModule({
  declarations: [ArtistDetailsPageComponent, SubpageComponent],
  imports: [CommonModule, MatIconModule, CommonUIModule],
  exports: [ArtistDetailsPageComponent, SubpageComponent],
})
export class ArtistDetailsPageModule {}
