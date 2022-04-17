import { ArtistModel } from 'src/app/domain/artists/artist';
import { VerificationStatus } from 'src/app/domain/enums/verification';

export const MUSICIANS = [
  new ArtistModel({
    artistType: 'musician',
    id: '1',
    name: 'Petrona Martínez',
    subtitle: 'Música folclórica del caribe',
    verified_status: VerificationStatus.VERIFIED,
    profile_pic: 'https://i0.wp.com/www.expresionnaranja.com/wp-content/uploads/2019/01/pertona.png?w=788',
    photo: 'https://cr00.epimg.net/radio/imagenes/2021/11/19/cartagena/1637324086_096489_1637324189_noticia_normal.jpg',
    description:
      'Petrona Martínez es una cantante afrocolombiana de música tradicional de la Costa Caribe. Su larga y prolífica carrera profesional le han valido el título de “la reina del bullerengue”',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '2',
    name: 'Gualajo',
    subtitle: 'El piano de la selva',
    verified_status: VerificationStatus.NON_VERIFIED,
    profile_pic:
      'https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/senalradio/articulo-noticia/galeriaimagen/gualajo.jpg?h=e414c3af&itok=YNZ1VW9-',
    photo:
      'https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2018/05/25/5b08ab38c91eb.r_1527466171569.0-0-3000-1503.jpeg',
    description:
      'Por su destreza y maestría en la interpretación de la Marimba de Chonta, a José Antonio Torres Solís se le conocía como el “Maestro Gualajo” o el “Pianista de la Selva”. La estrecha relación con este instrumento inició desde los 15 años, cuando construyo y diseñó su primera marimba.',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '3',
    name: 'Bluefinch & The Wanderlust',
    subtitle: 'Just Rockers!',
    verified_status: VerificationStatus.VERIFIED_AND_APPROVED,
    profile_pic:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/95703470_111763943853759_411293644587270144_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ZeWIdUp-cfIAX-JSXnD&_nc_ht=scontent.fbog4-1.fna&oh=00_AT-Hxw62635Unb43GPybpJiOeWP13JH7_lq56JqsafifIA&oe=628024C8',
    photo:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/196750348_335743828122435_8635650371587580230_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=NdWgL11xdpYAX8yYrtO&_nc_ht=scontent.fbog4-1.fna&oh=00_AT-1XET9IkNFK-__GKmu1sR2X1fryCb1hEOciRe6fk5UCA&oe=627F9283',
    description:
      'Bluefinch & The Wanderlust es una banda de Rock Alternativo bogotana formada por Osvaldo Oliver (Bajo y Coros), Julian Londoño, (Guitarra Líder), Juan Pinzón (Batería y Coros) y Sergio de Helena (Voz y Guitarra). Aunque el rock alternativo se distingue como la influencia más destacada, no se dejan encasillar en un sólo género, seducidos por el blues, el rock británico, las nuevas propuestas locales y el deseo constante de explorar sus límites la banda se compromete con lo heterogéneo, su sonido siempre contundente más nunca unívoco refleja la riqueza del contexto bogotano en el que viven sus músicos.',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '4',
    name: 'Petrona Martínez',
    subtitle: 'Música folclórica del caribe',
    verified_status: VerificationStatus.VERIFIED,
    profile_pic: 'https://i0.wp.com/www.expresionnaranja.com/wp-content/uploads/2019/01/pertona.png?w=788',
    photo: 'https://cr00.epimg.net/radio/imagenes/2021/11/19/cartagena/1637324086_096489_1637324189_noticia_normal.jpg',
    description:
      'Petrona Martínez es una cantante afrocolombiana de música tradicional de la Costa Caribe. Su larga y prolífica carrera profesional le han valido el título de “la reina del bullerengue”',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '5',
    name: 'Gualajo',
    subtitle: 'El piano de la selva',
    verified_status: VerificationStatus.NON_VERIFIED,
    profile_pic:
      'https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/senalradio/articulo-noticia/galeriaimagen/gualajo.jpg?h=e414c3af&itok=YNZ1VW9-',
    photo:
      'https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2018/05/25/5b08ab38c91eb.r_1527466171569.0-0-3000-1503.jpeg',
    description:
      'Por su destreza y maestría en la interpretación de la Marimba de Chonta, a José Antonio Torres Solís se le conocía como el “Maestro Gualajo” o el “Pianista de la Selva”. La estrecha relación con este instrumento inició desde los 15 años, cuando construyo y diseñó su primera marimba.',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '6',
    name: 'Bluefinch & The Wanderlust',
    subtitle: 'Just Rockers!',
    verified_status: VerificationStatus.VERIFIED_AND_APPROVED,
    profile_pic:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/95703470_111763943853759_411293644587270144_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ZeWIdUp-cfIAX-JSXnD&_nc_ht=scontent.fbog4-1.fna&oh=00_AT-Hxw62635Unb43GPybpJiOeWP13JH7_lq56JqsafifIA&oe=628024C8',
    photo:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/196750348_335743828122435_8635650371587580230_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=NdWgL11xdpYAX8yYrtO&_nc_ht=scontent.fbog4-1.fna&oh=00_AT-1XET9IkNFK-__GKmu1sR2X1fryCb1hEOciRe6fk5UCA&oe=627F9283',
    description:
      'Bluefinch & The Wanderlust es una banda de Rock Alternativo bogotana formada por Osvaldo Oliver (Bajo y Coros), Julian Londoño, (Guitarra Líder), Juan Pinzón (Batería y Coros) y Sergio de Helena (Voz y Guitarra). Aunque el rock alternativo se distingue como la influencia más destacada, no se dejan encasillar en un sólo género, seducidos por el blues, el rock británico, las nuevas propuestas locales y el deseo constante de explorar sus límites la banda se compromete con lo heterogéneo, su sonido siempre contundente más nunca unívoco refleja la riqueza del contexto bogotano en el que viven sus músicos.',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '7',
    name: 'Petrona Martínez',
    subtitle: 'Música folclórica del caribe',
    verified_status: VerificationStatus.VERIFIED,
    profile_pic: 'https://i0.wp.com/www.expresionnaranja.com/wp-content/uploads/2019/01/pertona.png?w=788',
    photo: 'https://cr00.epimg.net/radio/imagenes/2021/11/19/cartagena/1637324086_096489_1637324189_noticia_normal.jpg',
    description:
      'Petrona Martínez es una cantante afrocolombiana de música tradicional de la Costa Caribe. Su larga y prolífica carrera profesional le han valido el título de “la reina del bullerengue”',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '8',
    name: 'Gualajo',
    subtitle: 'El piano de la selva',
    verified_status: VerificationStatus.NON_VERIFIED,
    profile_pic:
      'https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/senalradio/articulo-noticia/galeriaimagen/gualajo.jpg?h=e414c3af&itok=YNZ1VW9-',
    photo:
      'https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2018/05/25/5b08ab38c91eb.r_1527466171569.0-0-3000-1503.jpeg',
    description:
      'Por su destreza y maestría en la interpretación de la Marimba de Chonta, a José Antonio Torres Solís se le conocía como el “Maestro Gualajo” o el “Pianista de la Selva”. La estrecha relación con este instrumento inició desde los 15 años, cuando construyo y diseñó su primera marimba.',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '8',
    name: 'Bluefinch & The Wanderlust',
    subtitle: 'Just Rockers!',
    verified_status: VerificationStatus.VERIFIED_AND_APPROVED,
    profile_pic:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/95703470_111763943853759_411293644587270144_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ZeWIdUp-cfIAX-JSXnD&_nc_ht=scontent.fbog4-1.fna&oh=00_AT-Hxw62635Unb43GPybpJiOeWP13JH7_lq56JqsafifIA&oe=628024C8',
    photo:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/196750348_335743828122435_8635650371587580230_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=NdWgL11xdpYAX8yYrtO&_nc_ht=scontent.fbog4-1.fna&oh=00_AT-1XET9IkNFK-__GKmu1sR2X1fryCb1hEOciRe6fk5UCA&oe=627F9283',
    description:
      'Bluefinch & The Wanderlust es una banda de Rock Alternativo bogotana formada por Osvaldo Oliver (Bajo y Coros), Julian Londoño, (Guitarra Líder), Juan Pinzón (Batería y Coros) y Sergio de Helena (Voz y Guitarra). Aunque el rock alternativo se distingue como la influencia más destacada, no se dejan encasillar en un sólo género, seducidos por el blues, el rock británico, las nuevas propuestas locales y el deseo constante de explorar sus límites la banda se compromete con lo heterogéneo, su sonido siempre contundente más nunca unívoco refleja la riqueza del contexto bogotano en el que viven sus músicos.',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '9',
    name: 'Petrona Martínez',
    subtitle: 'Música folclórica del caribe',
    verified_status: VerificationStatus.VERIFIED,
    profile_pic: 'https://i0.wp.com/www.expresionnaranja.com/wp-content/uploads/2019/01/pertona.png?w=788',
    photo: 'https://cr00.epimg.net/radio/imagenes/2021/11/19/cartagena/1637324086_096489_1637324189_noticia_normal.jpg',
    description:
      'Petrona Martínez es una cantante afrocolombiana de música tradicional de la Costa Caribe. Su larga y prolífica carrera profesional le han valido el título de “la reina del bullerengue”',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '10',
    name: 'Gualajo',
    subtitle: 'El piano de la selva',
    verified_status: VerificationStatus.NON_VERIFIED,
    profile_pic:
      'https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/senalradio/articulo-noticia/galeriaimagen/gualajo.jpg?h=e414c3af&itok=YNZ1VW9-',
    photo:
      'https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2018/05/25/5b08ab38c91eb.r_1527466171569.0-0-3000-1503.jpeg',
    description:
      'Por su destreza y maestría en la interpretación de la Marimba de Chonta, a José Antonio Torres Solís se le conocía como el “Maestro Gualajo” o el “Pianista de la Selva”. La estrecha relación con este instrumento inició desde los 15 años, cuando construyo y diseñó su primera marimba.',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '11',
    name: 'Bluefinch & The Wanderlust',
    subtitle: 'Just Rockers!',
    verified_status: VerificationStatus.VERIFIED_AND_APPROVED,
    profile_pic:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/95703470_111763943853759_411293644587270144_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ZeWIdUp-cfIAX-JSXnD&_nc_ht=scontent.fbog4-1.fna&oh=00_AT-Hxw62635Unb43GPybpJiOeWP13JH7_lq56JqsafifIA&oe=628024C8',
    photo:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/196750348_335743828122435_8635650371587580230_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=NdWgL11xdpYAX8yYrtO&_nc_ht=scontent.fbog4-1.fna&oh=00_AT-1XET9IkNFK-__GKmu1sR2X1fryCb1hEOciRe6fk5UCA&oe=627F9283',
    description:
      'Bluefinch & The Wanderlust es una banda de Rock Alternativo bogotana formada por Osvaldo Oliver (Bajo y Coros), Julian Londoño, (Guitarra Líder), Juan Pinzón (Batería y Coros) y Sergio de Helena (Voz y Guitarra). Aunque el rock alternativo se distingue como la influencia más destacada, no se dejan encasillar en un sólo género, seducidos por el blues, el rock británico, las nuevas propuestas locales y el deseo constante de explorar sus límites la banda se compromete con lo heterogéneo, su sonido siempre contundente más nunca unívoco refleja la riqueza del contexto bogotano en el que viven sus músicos.',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '12',
    name: 'Petrona Martínez',
    subtitle: 'Música folclórica del caribe',
    verified_status: VerificationStatus.VERIFIED,
    profile_pic: 'https://i0.wp.com/www.expresionnaranja.com/wp-content/uploads/2019/01/pertona.png?w=788',
    photo: 'https://cr00.epimg.net/radio/imagenes/2021/11/19/cartagena/1637324086_096489_1637324189_noticia_normal.jpg',
    description:
      'Petrona Martínez es una cantante afrocolombiana de música tradicional de la Costa Caribe. Su larga y prolífica carrera profesional le han valido el título de “la reina del bullerengue”',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '13',
    name: 'Gualajo',
    subtitle: 'El piano de la selva',
    verified_status: VerificationStatus.NON_VERIFIED,
    profile_pic:
      'https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/senalradio/articulo-noticia/galeriaimagen/gualajo.jpg?h=e414c3af&itok=YNZ1VW9-',
    photo:
      'https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2018/05/25/5b08ab38c91eb.r_1527466171569.0-0-3000-1503.jpeg',
    description:
      'Por su destreza y maestría en la interpretación de la Marimba de Chonta, a José Antonio Torres Solís se le conocía como el “Maestro Gualajo” o el “Pianista de la Selva”. La estrecha relación con este instrumento inició desde los 15 años, cuando construyo y diseñó su primera marimba.',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '14',
    name: 'Bluefinch & The Wanderlust',
    subtitle: 'Just Rockers!',
    verified_status: VerificationStatus.VERIFIED_AND_APPROVED,
    profile_pic:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/95703470_111763943853759_411293644587270144_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ZeWIdUp-cfIAX-JSXnD&_nc_ht=scontent.fbog4-1.fna&oh=00_AT-Hxw62635Unb43GPybpJiOeWP13JH7_lq56JqsafifIA&oe=628024C8',
    photo:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/196750348_335743828122435_8635650371587580230_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=NdWgL11xdpYAX8yYrtO&_nc_ht=scontent.fbog4-1.fna&oh=00_AT-1XET9IkNFK-__GKmu1sR2X1fryCb1hEOciRe6fk5UCA&oe=627F9283',
    description:
      'Bluefinch & The Wanderlust es una banda de Rock Alternativo bogotana formada por Osvaldo Oliver (Bajo y Coros), Julian Londoño, (Guitarra Líder), Juan Pinzón (Batería y Coros) y Sergio de Helena (Voz y Guitarra). Aunque el rock alternativo se distingue como la influencia más destacada, no se dejan encasillar en un sólo género, seducidos por el blues, el rock británico, las nuevas propuestas locales y el deseo constante de explorar sus límites la banda se compromete con lo heterogéneo, su sonido siempre contundente más nunca unívoco refleja la riqueza del contexto bogotano en el que viven sus músicos.',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '15',
    name: 'Petrona Martínez',
    subtitle: 'Música folclórica del caribe',
    verified_status: VerificationStatus.VERIFIED,
    profile_pic: 'https://i0.wp.com/www.expresionnaranja.com/wp-content/uploads/2019/01/pertona.png?w=788',
    photo: 'https://cr00.epimg.net/radio/imagenes/2021/11/19/cartagena/1637324086_096489_1637324189_noticia_normal.jpg',
    description:
      'Petrona Martínez es una cantante afrocolombiana de música tradicional de la Costa Caribe. Su larga y prolífica carrera profesional le han valido el título de “la reina del bullerengue”',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '16',
    name: 'Gualajo',
    subtitle: 'El piano de la selva',
    verified_status: VerificationStatus.NON_VERIFIED,
    profile_pic:
      'https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/senalradio/articulo-noticia/galeriaimagen/gualajo.jpg?h=e414c3af&itok=YNZ1VW9-',
    photo:
      'https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2018/05/25/5b08ab38c91eb.r_1527466171569.0-0-3000-1503.jpeg',
    description:
      'Por su destreza y maestría en la interpretación de la Marimba de Chonta, a José Antonio Torres Solís se le conocía como el “Maestro Gualajo” o el “Pianista de la Selva”. La estrecha relación con este instrumento inició desde los 15 años, cuando construyo y diseñó su primera marimba.',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '17',
    name: 'Bluefinch & The Wanderlust',
    subtitle: 'Just Rockers!',
    verified_status: VerificationStatus.VERIFIED_AND_APPROVED,
    profile_pic:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/95703470_111763943853759_411293644587270144_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ZeWIdUp-cfIAX-JSXnD&_nc_ht=scontent.fbog4-1.fna&oh=00_AT-Hxw62635Unb43GPybpJiOeWP13JH7_lq56JqsafifIA&oe=628024C8',
    photo:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/196750348_335743828122435_8635650371587580230_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=NdWgL11xdpYAX8yYrtO&_nc_ht=scontent.fbog4-1.fna&oh=00_AT-1XET9IkNFK-__GKmu1sR2X1fryCb1hEOciRe6fk5UCA&oe=627F9283',
    description:
      'Bluefinch & The Wanderlust es una banda de Rock Alternativo bogotana formada por Osvaldo Oliver (Bajo y Coros), Julian Londoño, (Guitarra Líder), Juan Pinzón (Batería y Coros) y Sergio de Helena (Voz y Guitarra). Aunque el rock alternativo se distingue como la influencia más destacada, no se dejan encasillar en un sólo género, seducidos por el blues, el rock británico, las nuevas propuestas locales y el deseo constante de explorar sus límites la banda se compromete con lo heterogéneo, su sonido siempre contundente más nunca unívoco refleja la riqueza del contexto bogotano en el que viven sus músicos.',
  }),
];

export const ARTISTS = [...MUSICIANS];
