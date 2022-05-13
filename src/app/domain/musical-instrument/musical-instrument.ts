import { VerificationStatus } from '../enums/verification';

export interface GeneralMusicalInstrumentTemplate {
  id: string;
  family: string;
  name: string;
  abbreviation?: string;
  description: string;
  photo: string;
}
export class GeneralMusicalInstrumentModel implements GeneralMusicalInstrumentTemplate {
  id: string;
  family: string;
  name: string;
  abbreviation?: string;
  description: string;
  photo: string;

  constructor(private readonly template: GeneralMusicalInstrumentTemplate) {
    this.id = template.id;
    this.family = template.family;
    this.name = template.name;
    this.abbreviation = template.abbreviation;
    this.photo = template.photo;
    this.description = template.description;
  }
}
