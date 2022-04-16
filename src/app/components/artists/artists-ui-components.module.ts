import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonUIComponentsModule } from '../common-ui/common-ui-components.module';

@NgModule({
  declarations: [ArtistCardComponent],
  imports: [CommonModule, MatCardModule, MatIconModule, CommonUIComponentsModule],
  exports: [ArtistCardComponent],
})
export class ArtistsUIComponentsModule {}
