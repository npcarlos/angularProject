import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonUIComponentsModule } from 'src/app/components/common-ui/common-ui-components.module';
import { ArtistsUIComponentsModule } from 'src/app/components/artists/artists-ui-components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    CommonUIComponentsModule,
    ArtistsUIComponentsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
