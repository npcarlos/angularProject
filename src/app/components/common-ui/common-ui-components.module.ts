import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificationSignComponent } from './verification-sign/verification-sign.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [VerificationSignComponent],
  imports: [CommonModule, MatIconModule],
  exports: [VerificationSignComponent],
})
export class CommonUIComponentsModule {}
