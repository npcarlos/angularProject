import { Component, Input, OnInit } from '@angular/core';
import { VerificationStatus } from 'src/app/domain/enums/verification';

@Component({
  selector: 'app-verification-sign',
  templateUrl: './verification-sign.component.html',
  styleUrls: ['./verification-sign.component.scss'],
})
export class VerificationSignComponent implements OnInit {
  @Input() verificationStatus: VerificationStatus = VerificationStatus.NON_VERIFIED;

  constructor() {}

  ngOnInit(): void {}

  getVerificationStatusClass(): string {
    let color = '#000';
    if (this.verificationStatus === VerificationStatus.VERIFIED) {
      color = 'verified_user';
    } else if (this.verificationStatus === VerificationStatus.VERIFIED_AND_APPROVED) {
      color = 'verified_user_and_approved';
    }
    return color;
  }

  get isVerified() {
    return (
      this.verificationStatus === VerificationStatus.VERIFIED ||
      this.verificationStatus === VerificationStatus.VERIFIED_AND_APPROVED
    );
  }
}
