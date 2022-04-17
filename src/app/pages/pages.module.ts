import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { CommonPagesModule } from './common/common-pages.module';
import { DomainPagesModule } from './domain/domain-pages.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [CommonPagesModule, HomeModule, DomainPagesModule],
})
export class PagesModule {}
