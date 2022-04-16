import { Component, OnInit } from '@angular/core';

import { ArtistModel } from 'src/app/domain/artists/artist';
import { ArtTemplate } from 'src/app/domain/arts/art';
import { VerificationStatus } from 'src/app/domain/enums/verification';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentArt: ArtTemplate;
  currentArtSubtitle = '';
  desplegarSeleccionArtes = false;
  artists: ArtistModel[] = [];
  musicians: ArtistModel[] = [];
  theaterArtists: ArtistModel[] = [];
  photographers: ArtistModel[] = [];
  graffityArtists: ArtistModel[] = [];
  standUpComedyArtists: ArtistModel[] = [];

  listaArtes: ArtTemplate[] = [
    {
      name: 'Música',
      icon: 'music_note',
      value: 'Músicos y bandas locales',
      artistList: 'musicians',
    },
    {
      name: 'Teatro',
      icon: 'music_note',
      value: 'Obras de teatro',
      artistList: 'theaterArtists',
    },
    {
      name: 'Fotografía',
      icon: 'monochrome_photos',
      value: 'Galerías fotográficas',
      artistList: 'photographers',
    },
    {
      name: 'Graffiti',
      icon: 'palette',
      value: 'Ciudad graffiti en vivo',
      artistList: 'graffityArtists',
    },
    {
      name: 'Stand up Comedy',
      icon: 'person',
      value: 'Risa y comedia a la carta',
      artistList: 'standUpComedyArtists',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.initializeData();
    this.seleccionarArte(this.listaArtes[0]);
  }

  toogleSeleccionArtes() {
    this.desplegarSeleccionArtes = !this.desplegarSeleccionArtes;
  }

  seleccionarArte(newArt: ArtTemplate) {
    this.currentArt = newArt;
    this.currentArtSubtitle = this.currentArt?.value || 'No se ha seleccionado ningún arte';
    this.desplegarSeleccionArtes = false;

    this.artists = this.musicians;
    if (this.currentArt.artistList === 'theaterArtists') {
      this.artists = this.theaterArtists;
    } else if (this.currentArt.artistList === 'photographers') {
      this.artists = this.photographers;
    } else if (this.currentArt.artistList === 'graffityArtists') {
      this.artists = this.graffityArtists;
    } else if (this.currentArt.artistList === 'standUpComedyArtists') {
      this.artists = this.standUpComedyArtists;
    }
  }

  initializeData() {
    this.musicians = [
      new ArtistModel({
        name: 'Petrona Martínez',
        subtitle: 'Música folclórica del caribe',
        verified_status: VerificationStatus.VERIFIED,
        profile_pic: 'https://i0.wp.com/www.expresionnaranja.com/wp-content/uploads/2019/01/pertona.png?w=788',
        photo:
          'https://cr00.epimg.net/radio/imagenes/2021/11/19/cartagena/1637324086_096489_1637324189_noticia_normal.jpg',
        description: '',
      }),
      new ArtistModel({
        name: 'Gualajo',
        subtitle: 'El piano de la selva',
        verified_status: VerificationStatus.NON_VERIFIED,
        profile_pic:
          'https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/senalradio/articulo-noticia/galeriaimagen/gualajo.jpg?h=e414c3af&itok=YNZ1VW9-',
        photo:
          'https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2018/05/25/5b08ab38c91eb.r_1527466171569.0-0-3000-1503.jpeg',
        description: '',
      }),
      new ArtistModel({
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

    this.theaterArtists = [
      new ArtistModel({
        name: 'Teatro Petra',
        subtitle: 'Dirigido por Fabio Rubiano',
        verified_status: VerificationStatus.VERIFIED,
        profile_pic:
          'https://scontent.fbog4-2.fna.fbcdn.net/v/t1.6435-9/28472061_10156166855407594_5131571911024705536_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=P1UJWJfSkcUAX8BB58L&_nc_ht=scontent.fbog4-2.fna&oh=00_AT_HTOePnXtESBR4WAABGFUKw6s7JV2IVcWbbiyBVmaA8g&oe=628080C4',
        photo: 'https://www.soyteatro.com/wp-content/uploads/2018/05/labio-de-liebre-1.jpg',
        description:
          'Es uno de los grupos más representativos de las propuestas teatrales contemporáneas en Colombia. Fundado por Fabio Rubiano y Marcela Valencia, sus obras han recorrido Europa, Estados Unidos y Latinoamérica',
      }),
    ];

    this.photographers = [
      new ArtistModel({
        name: 'Manuel H',
        subtitle: 'Retratos',
        verified_status: VerificationStatus.VERIFIED_AND_APPROVED,
        profile_pic:
          'https://images.adsttc.com/media/images/5be1/aa1e/08a5/e5f7/ac00/0247/medium_jpg/Manuel_H..jpg?1541515801',
        photo: 'https://www.eltiempo.com/files/image_950_534/uploads/2020/07/14/5f0dd63e14201.jpeg',
        description: '',
      }),
    ];

    this.graffityArtists = [
      new ArtistModel({
        name: 'Ceroker',
        subtitle: 'Murales',
        verified_status: VerificationStatus.VERIFIED,
        profile_pic: 'https://pbs.twimg.com/profile_images/1207820958519545856/rN8vGQ75_400x400.jpg',
        photo: 'https://assets4.domestika.org/course-images/000/005/894/5894-big.jpg',
        description: '',
      }),
    ];

    this.standUpComedyArtists = [
      new ArtistModel({
        name: 'Cejas Pobladas',
        subtitle: 'Comediante de la noche',
        verified_status: VerificationStatus.NON_VERIFIED,
        profile_pic: 'https://www.soyteatro.com/wp-content/uploads/2019/10/ricardo2.jpg',
        photo: 'https://soyteatro.com/wp-content/uploads/2018/11/quevedo.jpg',
        description:
          'Más conocido como "Cejas Pobladas". No estoy de mal genio, son las cejas. Me distraigo muy fácil y',
      }),
      new ArtistModel({
        name: 'Alejandro Riaño',
        subtitle: 'Comediante de la noche',
        verified_status: VerificationStatus.NON_VERIFIED,
        profile_pic:
          'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/165862845_10159517689975616_2435082638536569265_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFSqf-_DluZ5YkSE_OA67owNKOsk3SY6M40o6yTdJjozjahtl9RPOhnIW3KQ9Vfv28&_nc_ohc=goxJu4bEZZ8AX-q7lMn&_nc_oc=AQko53aIjbNGlOP2SSViv97rIbZeHBJk_JEEjNHwowYDutj4Q1DiS0fHy8Lh0Z9ufk0&_nc_ht=scontent.fbog4-1.fna&oh=00_AT8OtHmX_36RwKCtX6uePIbvNClR3F1GsbfCV9tb9lzxhQ&oe=627F785A',
        photo:
          'https://scontent.fbog4-2.fna.fbcdn.net/v/t1.6435-9/166372443_10159517689960616_1718332385356578898_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeGN1Oyriy5NJCKt87KB7U0LyB7y68tP0JnIHvLry0_Qmfl8oAlmXOWBgDqLuTXboGU&_nc_ohc=GjwHOS8P8X0AX82rctF&_nc_ht=scontent.fbog4-2.fna&oh=00_AT-cki40g0-_p9ThgQnFC9263aig2tq_fCawn_DcQz1k1A&oe=6281F76C',
        description: 'Delicioosoo Wuuooon!<br/> Twitter: @AlejandroRia Instagram: @alejandroria www.thejpchannel.com',
      }),
    ];
  }
}
