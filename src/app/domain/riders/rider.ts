import { GeneralMusicalInstrumentModel } from '../musical-instrument/musical-instrument';

export interface CrewMemberTemplate {
  name: string;
  document_type: string;
  document_number: string;
  role: string;
}

export interface CrewTeamTemplate {
  artists: CrewMemberTemplate[];
  managers?: CrewMemberTemplate[];
  engineers?: CrewMemberTemplate[];
  roadies?: CrewMemberTemplate[];
  security?: CrewMemberTemplate[];
  others?: CrewMemberTemplate[];
}
export interface InputRiderTemplate {
  channelNumber: number;
  instrument?: GeneralMusicalInstrumentModel;
  instrumentName?: string;
  microphone?: string;
  stand?: string;
  inserts?: string;
}

export interface StageSpecs {
  length: number;
  height: number;
  width: number;
  unitMeasure: string;
  color?: string;
}
export interface ArtistRiderTemplate {
  artistId: string;
  id: string;
  name: string;
  instruments: GeneralMusicalInstrumentModel[];
  inputList: InputRiderTemplate[];
  crewList: CrewTeamTemplate;
  stageSpecs: StageSpecs;
  created_at: Date;
  updated_at: Date;
}
export class ArtistRiderModel implements ArtistRiderTemplate {
  artistId: string;
  id: string;
  name: string;
  instruments: GeneralMusicalInstrumentModel[];
  inputList: InputRiderTemplate[];
  crewList: CrewTeamTemplate;
  stageSpecs: StageSpecs;
  created_at: Date;
  updated_at: Date;

  constructor(private readonly template: ArtistRiderTemplate) {
    this.artistId = template.artistId;
    this.id = template.id;
    this.name = template.name;
    this.instruments = template.instruments || [];
    this.inputList = template.inputList || [];
    this.crewList = template.crewList;
    this.stageSpecs = template.stageSpecs;
    this.created_at = template.created_at;
    this.updated_at = template.updated_at;
  }

  get crewMembersByRole(): { role: string; people: CrewMemberTemplate[] }[] {
    const crewMembers: { role: string; people: CrewMemberTemplate[] }[] = [];

    return crewMembers;
  }
}
