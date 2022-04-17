import { Component, Input, OnInit } from '@angular/core';
import { VerificationStatus } from 'src/app/domain/enums/verification';

@Component({
  selector: 'app-verification-sign',
  templateUrl: './verification-sign.component.html',
  styleUrls: ['./verification-sign.component.scss'],
})
export class VerificationSignComponent implements OnInit {
  @Input() verification_status: VerificationStatus = VerificationStatus.NON_VERIFIED;

  constructor() {}

  ngOnInit(): void {}

  getVerificationStatusClass(): string {
    let cssClass = '';
    if (this.verification_status === VerificationStatus.VERIFIED) {
      cssClass = 'verified_user';
    } else if (this.verification_status === VerificationStatus.VERIFIED_AND_APPROVED) {
      cssClass = 'verified_user_and_approved';
    }
    return cssClass;
  }

  get isVerified() {
    return (
      this.verification_status === VerificationStatus.VERIFIED ||
      this.verification_status === VerificationStatus.VERIFIED_AND_APPROVED
    );
  }
}
