import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendedSelectionComponent } from './recommended-selection/recommended-selection.component';
import { CommonUIModule } from 'src/app/components/common-ui/common-ui.module';

@NgModule({
  declarations: [RecommendedSelectionComponent],
  imports: [CommonModule, CommonUIModule],
  exports: [RecommendedSelectionComponent],
})
export class HomeSectionsModule {}
