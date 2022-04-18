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
    name: 'Espiral 7',
    subtitle: 'Música folclórica del caribe',
    verified_status: VerificationStatus.VERIFIED,
    profile_pic:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/224664002_1373102573074131_5342254193140271114_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=GtMQLsaTJV0AX9gyn6B&_nc_ht=scontent.fbog4-1.fna&oh=00_AT9dg3rIchQoSCW7hyJq7fdOiApSv4YyTAlZxd1P4xBDMw&oe=626157B8',
    photo:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/42200156_663783390672723_818545385646587904_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=9267fe&_nc_ohc=lpWgqqFbUAgAX8IRlMw&_nc_ht=scontent.fbog4-1.fna&oh=00_AT_I2rGnl0SRBHAQ77UYyHgq_AKE29jFFJWBGkSqX0VNCg&oe=6283C6B9',
    description:
      'Espiral7 representa la desembocadura, el lugar donde el afluente se encuentra con el mar, combinando ritmos, sonidos y juegos de palabras.',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '5',
    name: 'Yaturubé',
    subtitle: 'La consagración de la salsa',
    verified_status: VerificationStatus.NON_VERIFIED,
    profile_pic:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/277108883_101577042521230_5956361830794004831_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=in1p8C2ALYYAX9X1he2&_nc_oc=AQnX8J5w0vlRpZs72ZN-DYwEiaPD3iJDbSuQ9udPkFECNTwv5cpj782qFhrlWbYgnfU&_nc_ht=scontent.fbog4-1.fna&oh=00_AT-qaKi1TnOoxIfXiEZukgOpGJSllnyYCuum_v9kcusSqQ&oe=62632AE5',
    photo: 'http://yaturube.co/images/yaturube-all.png',
    description:
      'Por su destreza y maestría en la interpretación de la Marimba de Chonta, a José Antonio Torres Solís se le conocía como el “Maestro Gualajo” o el “Pianista de la Selva”. La estrecha relación con este instrumento inició desde los 15 años, cuando construyo y diseñó su primera marimba.',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '6',
    name: 'Monsieur Periné',
    subtitle: 'Jazz a la colombiana',
    verified_status: VerificationStatus.VERIFIED_AND_APPROVED,
    profile_pic:
      'https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/275385021_519097179581542_6629886561986942727_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=4p8xz6_-UxMAX_hdmPq&_nc_ht=scontent.fbog4-2.fna&oh=00_AT8hOdwUQ0gRi6N3pknP-oLHaS0xtjQqn7PGPUvV5tJzCw&oe=6262E807',
    photo:
      'https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/275614531_519096809581579_5012430951205493402_n.png?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=AqrVDnVWVQkAX-vAQyA&_nc_ht=scontent.fbog4-2.fna&oh=00_AT-GWqPtkNceUFAL5wmD2Pa9-5LqObhITyN20G60sfEDZA&oe=6262C8BF',
    description: 'Volverte A Ver: https://SML.lnk.to/VolverteaVerPreSave',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '7',
    name: 'La Pacifican Power',
    subtitle: 'Música folclórica del caribe',
    verified_status: VerificationStatus.VERIFIED,
    profile_pic:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/277668557_390984909697435_1486963973794235757_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kKnJmwqquGAAX-VNZQv&_nc_ht=scontent.fbog4-1.fna&oh=00_AT868r3JUxMYumc8F7QwTTArR9HYS5kBU5_cPv8iwPio9g&oe=6261CE78',
    photo:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/266503585_960763307858159_4188776505461784387_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=jEfNc5LClw8AX8_ZDUu&_nc_ht=scontent.fbog4-1.fna&oh=00_AT8pqdujS5ctVVyJdxP7Hs8rKLDs4IKAtV2dD8x8WuLgiA&oe=626212E7',
    description: 'La Pacifican Power es un colectivo multidisciplinario donde la música, la gráfica, la fotografía,',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '8',
    name: 'Los Rolling Ruanas',
    subtitle: 'El piano de la selva',
    verified_status: VerificationStatus.NON_VERIFIED,
    profile_pic:
      'https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/272079895_494762828672609_4949414101568830774_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-wWarcYGJd8AX9tMPMX&_nc_ht=scontent.fbog4-2.fna&oh=00_AT8Nzo7iyy-4MCVv8_lC9HoW7DYk1XQg0DejdseguZSLig&oe=62614BB9',
    photo:
      'https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/277531519_539381870877371_8478363398964607965_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=MXh7F3H7Q_0AX91rzRI&_nc_ht=scontent.fbog4-2.fna&oh=00_AT92SBgHooa9uy7Bc9IczdbSR6JSUMa0t0X04Ghp6K4lBg&oe=626282CC',
    description: '"Nueva Tierra" disponible en todas las plataformas. 🎼🎤⚡ https://links.altafonte.com/gwpee2x',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '8',
    name: 'Puerto Candelaria',
    subtitle: 'Just Rockers!',
    verified_status: VerificationStatus.VERIFIED_AND_APPROVED,
    profile_pic:
      'https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/246014912_437821854371256_2398747288584152355_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-Veg-7wAiRsAX_KGU1a&_nc_ht=scontent.fbog4-2.fna&oh=00_AT_oC8POm_7sFl8CcLhw43xofy7m4mXOC_oX0kZ9s3jQ2w&oe=62621D59',
    photo:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/278183153_546981546788619_9164132711833636091_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=xldmXqIw_TUAX_8AZZ-&_nc_ht=scontent.fbog4-1.fna&oh=00_AT9dIVAMSWhfV1hhZlfsMiLKDSnjLcBMTmuU1zZTEEAmoQ&oe=6262A4CC',
    description: 'Atrevida, controversial e innovadora agrupación colombiana. Escucha su más reciente lanzamiento: h',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '9',
    name: 'Lunalé',
    subtitle: 'Música folclórica del caribe',
    verified_status: VerificationStatus.VERIFIED,
    profile_pic:
      'https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/277107129_1848862501969805_6336903362939035213_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=a26aad&_nc_ohc=3AOurFr3s34AX82uK29&_nc_ht=scontent.fbog4-2.fna&oh=00_AT-LZa4jiwsx8Qm6sBhqA584nAkUsG1B1cLMmjKOLHmtYw&oe=6262C506',
    photo:
      'https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/277004078_1848862495303139_8032247034811878393_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=a26aad&_nc_ohc=471_U7udyasAX8WgRWK&_nc_ht=scontent.fbog4-2.fna&oh=00_AT-_OcVsgxijBA2-ZanQMfUE_fvZG6rDOmKbMXDcAX6W2g&oe=62629164',
    description: 'Cantante, compositora y artista audiovisual colombiana 🇨🇴 🔥Hoy nada me daña soy de fuego🔥',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '10',
    name: 'Ministerio del beat',
    subtitle: 'El piano de la selva',
    verified_status: VerificationStatus.NON_VERIFIED,
    profile_pic: 'https://yt3.ggpht.com/ytc/AKedOLT1FbjEvF3nmssCqdFQ5Aao5DwMqdhS8XKQQw8c=s88-c-k-c0x00ffffff-no-rj',
    photo:
      'https://instagram.fbog4-2.fna.fbcdn.net/v/t51.2885-15/100970951_110867240484909_2099585599527439757_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fbog4-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=ylAKsZXWbRIAX_lyFkg&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT9YJmOZyeHdZeod5LGt5iaiFJt9i9ASKSZ3pEgTDu9yDA&oe=6263C518&_nc_sid=83d603',
    description: 'Mirá nuestra live session 🤯🤯🤯',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '11',
    name: 'La mojarra eléctrica',
    subtitle: 'Just Rockers!',
    verified_status: VerificationStatus.VERIFIED_AND_APPROVED,
    profile_pic:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/278215925_4974824045919090_7503261169342432291_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Hv2Zs4yWf50AX_9JqI8&_nc_ht=scontent.fbog4-1.fna&oh=00_AT9uH7GQ-AfGCT8ZdcC4acDsZpzOw_k5TabydwWzYT4MXA&oe=6261D578',
    photo:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/277787138_4974890929245735_3371425580665925454_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=e3f864&_nc_ohc=7itzuLfyjuEAX-SpitH&_nc_ht=scontent.fbog4-1.fna&oh=00_AT9Ikie2QxcgAVtnrjid-yMjItKBkk1KCHVNGXuO2ql_3A&oe=6261A287',
    description:
      'La Mojarra Eléctrica es la banda mas representativa del nuevo sonido moderno Afro- Colombiano, pioneros en este nuevo genero que se empezó a gestar en el año 2002, han liderado la escena de esta música underground.',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '12',
    name: 'Pacífico Libre',
    subtitle: 'Música folclórica del caribe',
    verified_status: VerificationStatus.VERIFIED,
    profile_pic:
      'https://scontent.fbog4-2.fna.fbcdn.net/v/t1.6435-9/165268215_135038958625707_456488731288503824_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=D2tTGSLqVw4AX_miF0Y&_nc_ht=scontent.fbog4-2.fna&oh=00_AT-AsrCtiMUdOnp2QES3ElWYAk7Xa1R7DARuIlZ3yOXu_g&oe=6283D4FF',
    photo:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/168911343_135038951959041_679467350257684206_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=hpsBfe-53L8AX-r7P1Q&_nc_ht=scontent.fbog4-1.fna&oh=00_AT_GTHB8YcALshITOqjMDkIIy2si_HUq3xXjUHPYaYfVQA&oe=62840223',
    description: 'La agrupación Pacifico libre tiene un profundo compromiso con la difusión cultural y se ha enfocad',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '13',
    name: 'Gregorio Uribe',
    subtitle: 'El piano de la selva',
    verified_status: VerificationStatus.NON_VERIFIED,
    profile_pic:
      'https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/278371177_528702878814209_3982791882156233999_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=KgP0CmQFGQ0AX87R2tx&_nc_ht=scontent.fbog4-2.fna&oh=00_AT_6cIZ_wI4UamonHvNCs301fTtuHgYgkjaelvQHNr3PLQ&oe=6261CF79',
    photo:
      'https://scontent.fbog4-2.fna.fbcdn.net/v/t1.6435-9/128717110_207825330901967_3422551406528486021_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=R7DLNH1yPqQAX9fstEm&_nc_oc=AQmk71PuWuXKXLeqkRS4IMBasrrVe1sd9eLvJz3Yq_K9RjmvfUQFxAg-mRxCfI3SEbA&_nc_ht=scontent.fbog4-2.fna&oh=00_AT84EJsXwUAxYgPW2r4hf3g0csDMZKjAeh-66sMC6gHIuA&oe=62821D06',
    description: 'Cantautor y acordeonista que ha llevado sus canciones a Carnegie Hall y a los Montes de María.',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '14',
    name: 'Sonoras Mil',
    subtitle: 'Just Rockers!',
    verified_status: VerificationStatus.VERIFIED_AND_APPROVED,
    profile_pic:
      'https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/272634040_342497151214273_3507243037439906935_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fylAGqzzvBAAX-cL2Sw&_nc_ht=scontent.fbog4-2.fna&oh=00_AT9tnIiDNTFnzcd7jEXzv3WhLc33P1KDb6nz_3fyr1jCdw&oe=62633235',
    photo:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/261773718_302960765167912_6641917123524383911_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=sPHMlM4H8R0AX-iwVHd&_nc_ht=scontent.fbog4-1.fna&oh=00_AT_xB4FN64bMeujI1X0VnzOLEE2iPBqcXp0hKm2BkGN1CA&oe=6262E4A7',
    description: 'Sonoras mil is the project of Colombian musician Felipe Gómez Ossa. The music is a fresh mix of Dub',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '15',
    name: 'La 33',
    subtitle: 'Música folclórica del caribe',
    verified_status: VerificationStatus.VERIFIED,
    profile_pic:
      'https://scontent.fbog4-2.fna.fbcdn.net/v/t1.6435-9/128943694_219093032914857_1037445509542433596_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=4OgbBbTUlc4AX8wr6Xf&_nc_ht=scontent.fbog4-2.fna&oh=00_AT_6BcCI7C31ecMg9SYAkZF_DkGSC1pXQ2eUkvXVvK0xMQ&oe=6282A8B2',
    photo:
      'https://scontent.fbog4-2.fna.fbcdn.net/v/t1.6435-9/128763848_219093026248191_8918693391327890464_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=TDrkkVZCX8sAX9uEJVV&_nc_ht=scontent.fbog4-2.fna&oh=00_AT_3QU4WBffL6-ucYEGAhrkycWcgRgwRINBzIGhq7LfrYA&oe=62838421',
    description: 'Salsa, boogaloo, Funk, jazz and folk. https://linkr.bio/la-33',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '16',
    name: 'Los Cañaverales del Bohío',
    subtitle: 'El piano de la selva',
    verified_status: VerificationStatus.NON_VERIFIED,
    profile_pic:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/215279115_532553281490534_4573711611592225503_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=HXf70zDR9QoAX8LmAiI&_nc_ht=scontent.fbog4-1.fna&oh=00_AT-EK3nWJTgXkjYrOO_YGCcJKgP1D998dnYiAX6buvyP8A&oe=6261C3F9',
    photo:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/87980186_188717699207429_7353951396300849152_n.jpg?stp=dst-jpg_p180x540&_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=7UkzZU3FItIAX-YYGjo&_nc_ht=scontent.fbog4-1.fna&oh=00_AT8mkqO2fJy2xvbfhu7wc8rJtUZOvFomQBP5iVrg45DQzA&oe=62846344',
    description:
      'Por su destreza y maestría en la interpretación de la Marimba de Chonta, a José Antonio Torres Solís se le conocía como el “Maestro Gualajo” o el “Pianista de la Selva”. La estrecha relación con este instrumento inició desde los 15 años, cuando construyo y diseñó su primera marimba.',
  }),
  new ArtistModel({
    artistType: 'musician',
    id: '17',
    name: 'LauraMare',
    subtitle: 'Just Rockers!',
    verified_status: VerificationStatus.VERIFIED_AND_APPROVED,
    profile_pic:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/73278417_2716468448448233_2860679859607175168_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fWqYC2kgzyMAX-omNFY&_nc_ht=scontent.fbog4-1.fna&oh=00_AT-9_mk-JuKPRe0FQd1R-IT0aT67y3zu49OMwiWovYBPmQ&oe=628174B2',
    photo:
      'https://scontent.fbog4-2.fna.fbcdn.net/v/t1.6435-9/70714531_2568190899942656_4171314942735024128_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=2h0EqkH2Pc4AX86x7Is&_nc_ht=scontent.fbog4-2.fna&oh=00_AT9Okj0IkPZqwrSHR5vbAZxQxqOZSJrlZMNHjvj7A0cSSA&oe=62810600',
    description:
      'Mi falda tiene espinas, es el primer sencillo de LauraMare cantautora, comunicadora y productora cultural de Marediagua Producciones en Medellín, con una trayectoria de más de 20 años como intérprete - Todo es política',
  }),
];

export const ARTISTS = [...MUSICIANS];
