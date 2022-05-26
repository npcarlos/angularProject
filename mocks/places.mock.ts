import { ArtistModel } from 'src/app/domain/artists/artist';
import { VerificationStatus } from 'src/app/domain/enums/verification';

export const BARS = [
  new ArtistModel({
    artistType: 'place',
    id: '1',
    name: 'Matik - Matik',
    subtitle: 'Cra 11 # 67 - 20, Bogotá DC',
    verified_status: VerificationStatus.VERIFIED,
    profile_pic: 'http://npcarlos.co/artistsHive_mocks/profile_mm.png',
    photo:
      'https://scontent.fbog4-2.fna.fbcdn.net/v/t1.6435-9/103692966_10158480139524521_1314928447462667274_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=H1BTGqxYLxUAX-qLLTw&_nc_ht=scontent.fbog4-2.fna&oh=00_AT9jEk3fWc8lGE10OBZaP3_UC7YTKYSjJjfRNkn3BM55tw&oe=6284015D',
    description:
      '*matik-matik* es un espacio independiente implantado en Bogota (barrio Quinta Camacho) cuyo proyecto es desarrollar actividades con relación al sonido bajo la plataforma de un café.',
  }),
  new ArtistModel({
    artistType: 'place',
    id: '2',
    name: 'Casa Kilele',
    subtitle: 'Cl. 28a # 16a - 31, Bogotá DC',
    verified_status: VerificationStatus.NON_VERIFIED,
    profile_pic: 'http://npcarlos.co/artistsHive_mocks/profile_ck.jpg',
    photo:
      'https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2018/05/25/5b08ab38c91eb.r_1527466171569.0-0-3000-1503.jpeg',
    description:
      'Casa Kilele-Casa Cultural es una fundación sin ánimo de lucro; una plataforma artística y de encuentros creativos que ofrece espacios de creación y colaboración, con el objetivo de activar el ser, fomentar flujo cultural y desarrollar una comunidad.',
  }),
  new ArtistModel({
    artistType: 'place',
    id: '3',
    name: 'Galería Café Libro 93',
    subtitle: 'Cra 11a # 93 - 42',
    verified_status: VerificationStatus.VERIFIED_AND_APPROVED,
    profile_pic: 'https://pbs.twimg.com/profile_images/943944101820551168/pjNPndM1_400x400.jpg',
    photo:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/196750348_335743828122435_8635650371587580230_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=NdWgL11xdpYAX8yYrtO&_nc_ht=scontent.fbog4-1.fna&oh=00_AT-1XET9IkNFK-__GKmu1sR2X1fryCb1hEOciRe6fk5UCA&oe=627F9283',
    description:
      'LA RUMBA EN BOGOTA!🎶punto de encuentro de la salsa, el son y la música Caribe. Sedes: Parque 93, Palermo & Salón café Bohemia Tels.: 285 1794 - 218 3435',
  }),
  new ArtistModel({
    artistType: 'place',
    id: '4',
    name: 'Disco Jaguar',
    subtitle: 'Ak. 7 # 59-30, Bogotá DC',
    verified_status: VerificationStatus.VERIFIED_AND_APPROVED,
    profile_pic: 'http://npcarlos.co/artistsHive_mocks/profile_dj.jpg',
    photo:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/196750348_335743828122435_8635650371587580230_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=NdWgL11xdpYAX8yYrtO&_nc_ht=scontent.fbog4-1.fna&oh=00_AT-1XET9IkNFK-__GKmu1sR2X1fryCb1hEOciRe6fk5UCA&oe=627F9283',
    description:
      'Un 2 x 1 de Sabor, Coctail de colores y ritmos servido en 2 copas!! mas que dos ambientes, dos movimientos!!  El Corazón de Chapinero !!',
  }),
];

export const PLACES = [...BARS];
