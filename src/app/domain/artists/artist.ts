import { VerificationStatus } from '../enums/verification';

export interface ArtistTemplate {
  id: string;
  name: string;
  subtitle: string;
  verified_status: VerificationStatus;
  profile_pic: string;
  photo: string;
  description: string;
}
export class ArtistModel implements ArtistTemplate {
  id: string;
  name: string;
  subtitle: string;
  verified_status: VerificationStatus;
  profile_pic: string;
  photo: string;
  description: string;

  constructor(private readonly template: ArtistTemplate) {
    this.id = template.id;
    this.name = template.name;
    this.subtitle = template.subtitle;
    this.verified_status = template.verified_status;
    this.profile_pic = template.profile_pic;
    this.photo = template.photo;
    this.description = template.description;
  }
}
