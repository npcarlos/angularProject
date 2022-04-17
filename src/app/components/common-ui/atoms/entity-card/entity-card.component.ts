import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VerificationStatus } from 'src/app/domain/enums/verification';

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss'],
})
export class EntityCardComponent implements OnInit {
  @Input() profile_pic = '';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() main_photo = '';
  @Input() description = '';
  @Input() verification_status: VerificationStatus = VerificationStatus.NON_VERIFIED;
  @Input() link: string = null;

  @Output() onCardClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  clicGeneral(source: string = '') {
    this.onCardClick.emit(source);
  }
}
