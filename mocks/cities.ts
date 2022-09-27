import { ArtistModel } from 'src/app/domain/artists/artist';
import { VerificationStatus } from 'src/app/domain/enums/verification';

const today = new Date();
export const CITIES = [
  new ArtistModel({
    artistType: 'musician',
    id: '1',
    name: 'Jazz al Parque',
    subtitle: 'Parque El Country \n Calle 127 # 12 -15\n Bogotá D.C. - Colombia',
    verified_status: VerificationStatus.VERIFIED,
    description: 'Bo',
    date: new Date(2022, today.getMonth() - 1, 13, 19),
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '2',
    name: 'La topa tolondra',
    subtitle: 'Calle 5 # 13 - 27 \n Cali - Colombia',
    verified_status: VerificationStatus.VERIFIED,
    description: 'Bo',
    date: new Date(2022, today.getMonth() - 1, 22, 22),
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '3',
    name: 'Teatro Matacandelas',
    subtitle: 'Cra 11a # 93 - 42 \n Medellín - Colombia',
    verified_status: VerificationStatus.VERIFIED,
    description: 'Bo',
    date: new Date(2022, today.getMonth() - 1, 26, 22),
  }),
];
export const NEXT_EVENTS = [
  new ArtistModel({
    artistType: 'musician',
    id: '4',
    name: 'Jazz al Parque',
    subtitle: 'Parque El Country \n Calle 127 # 12 -15\n Bogotá D.C. - Colombia',
    verified_status: VerificationStatus.VERIFIED,
    description: 'Bo',
    date: new Date(2022, today.getMonth(), 15, 19),
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '5',
    name: 'La topa tolondra',
    subtitle: 'Calle 5 # 13 - 27 \n Cali - Colombia',
    verified_status: VerificationStatus.VERIFIED,
    description: 'Bo',
    date: new Date(2022, today.getMonth(), 25, 22),
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '6',
    name: 'Galería Gafé Libro',
    subtitle: 'Cra 11a # 93 - 42 \n Bogotá D.C. - Colombia',
    verified_status: VerificationStatus.VERIFIED,
    description: 'Bo',
    date: new Date(2022, today.getMonth(), 28, 22),
  }),
];

export const EVENTS = [...CITIES, ...NEXT_EVENTS];
