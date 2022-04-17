import { ArtistModel } from 'src/app/domain/artists/artist';

export enum EntityCardEventSource {
  PROFILE_PICTURE,
  TITLE,
  VERIFICATION_SIGN,
  SUBTITLE,
  MAIN_PHOTO,
}

export interface EntityCardEvent {
  eventSource: EntityCardEventSource;
  item: ArtistModel;
}
