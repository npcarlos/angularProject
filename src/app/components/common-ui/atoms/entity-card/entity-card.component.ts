import { Component, EventEmitter, Input, OnInit, Output, Type } from '@angular/core';
import { ArtistModel } from 'src/app/domain/artists/artist';
import { VerificationStatus } from 'src/app/domain/enums/verification';
import { EntityCardEvent, EntityCardEventSource } from './entity-card.events';

export interface EntityCardParams {
  // Header
  showProfilePicture?: boolean;
  isProfilePictureClickeable?: boolean;

  showTitle?: boolean;
  isTitleClickleable?: boolean;

  showVerificationSign?: boolean;
  isVerificationSignClickleable?: boolean;

  showSubtitle?: boolean;
  isSubtitleClickleable?: boolean;

  // Body
  showMainPhoto?: boolean;
  isMainPhotoClickleable?: boolean;

  showDescription?: boolean;
  isDescriptionClickleable?: boolean;

  // Action buttons
  showActionButtons?: boolean;
  isActionButtonsClickleable?: boolean;
}

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss'],
})
export class EntityCardComponent implements OnInit {
  get EntityCardEventSource() {
    return EntityCardEventSource;
  }

  @Input() item: ArtistModel;
  @Input() entityCardParams: EntityCardParams;

  @Output() onCardClicked: EventEmitter<EntityCardEvent> = new EventEmitter<EntityCardEvent>();

  profile_pic: string;
  title: string;
  subtitle: string;
  main_photo: string;
  description: string;
  verification_status: VerificationStatus = VerificationStatus.NON_VERIFIED;

  constructor() {}

  ngOnInit(): void {
    const defaultValues = {
      // Header
      showProfilePicture: true,
      isProfilePictureClickeable: true,

      showTitle: true,
      isTitleClickleable: true,

      showVerificationSign: true,
      isVerificationSignClickleable: true,

      showSubtitle: true,
      isSubtitleClickleable: true,

      // Body
      showMainPhoto: true,
      isMainPhotoClickleable: true,

      showDescription: true,
      isDescriptionClickleable: true,

      // Action buttons
      showActionButtons: true,
      isActionButtonsClickleable: true,
    };
    if (!this.entityCardParams) {
      this.entityCardParams = {};
    }

    // Replacing the default values for those that are at the params
    Object.keys(this.entityCardParams).forEach((key: string) => {
      defaultValues[key as keyof EntityCardParams] = this.entityCardParams[key as keyof EntityCardParams];
    });
    this.entityCardParams = defaultValues;

    // Header
    if (this.entityCardParams.showProfilePicture) {
      this.profile_pic = this.item.profile_pic;
    }

    if (this.entityCardParams.showTitle) {
      this.title = this.item.name;
    }

    if (this.entityCardParams.showVerificationSign) {
      this.verification_status = this.item.verified_status;
    }

    if (this.entityCardParams.showSubtitle) {
      this.subtitle = this.item.subtitle;
    }

    // Body
    if (this.entityCardParams.showMainPhoto) {
      this.main_photo = this.item.photo;
    }

    if (this.entityCardParams.showDescription) {
      this.description = this.item.description;
    }
  }

  clicGeneral(eventSource: EntityCardEventSource) {
    let refuseEmit =
      (eventSource === EntityCardEventSource.TITLE && !this.entityCardParams.isTitleClickleable) ||
      (eventSource === EntityCardEventSource.PROFILE_PICTURE && !this.entityCardParams.isProfilePictureClickeable) ||
      (eventSource === EntityCardEventSource.VERIFICATION_SIGN &&
        !this.entityCardParams.isVerificationSignClickleable) ||
      (eventSource === EntityCardEventSource.SUBTITLE && !this.entityCardParams.isSubtitleClickleable) ||
      (eventSource === EntityCardEventSource.MAIN_PHOTO && !this.entityCardParams.isMainPhotoClickleable);

    if (!refuseEmit) {
      this.onCardClicked.emit({ eventSource, item: this.item });
    }
  }
}
