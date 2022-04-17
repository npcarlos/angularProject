import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeSectionsModule } from './home-sections/home-sections.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule, ComponentsModule, HomeSectionsModule],
  exports: [HomeComponent, HomeSectionsModule],
})
export class HomeModule {}
