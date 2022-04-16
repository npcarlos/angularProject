import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-project';
  arteActual = '';

  listaArtes = [
    {
      name: 'Música',
      icon: 'music_note',
      value: 'Músicos y bandas locales',
      artistas: [
        {
          name: 'Petrona Martínez',
          subtitle: 'Música folclórica del caribe',
          is_verified: true,
          profile_pic:
            'https://i0.wp.com/www.expresionnaranja.com/wp-content/uploads/2019/01/pertona.png?w=788',
          photo:
            'https://cr00.epimg.net/radio/imagenes/2021/11/19/cartagena/1637324086_096489_1637324189_noticia_normal.jpg',
          description: '',
        },
        {
          name: 'Gualajo',
          subtitle: 'El piano de la selva',
          is_verified: false,
          profile_pic:
            'https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/senalradio/articulo-noticia/galeriaimagen/gualajo.jpg?h=e414c3af&itok=YNZ1VW9-',
          photo:
            'https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2018/05/25/5b08ab38c91eb.r_1527466171569.0-0-3000-1503.jpeg',
          description: '',
        },
      ],
    },
    {
      name: 'Teatro',
      icon: 'music_note',
      value: 'Obras de teatro',
      artistas: [
        {
          name: 'Teatro Petra',
          subtitle: 'Dirigido por Fabio Rubiano',
          is_verified: true,
          profile_pic:
            'https://scontent.fbog4-2.fna.fbcdn.net/v/t1.6435-9/28472061_10156166855407594_5131571911024705536_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=P1UJWJfSkcUAX8BB58L&_nc_ht=scontent.fbog4-2.fna&oh=00_AT_HTOePnXtESBR4WAABGFUKw6s7JV2IVcWbbiyBVmaA8g&oe=628080C4',
          photo:
            'https://www.soyteatro.com/wp-content/uploads/2018/05/labio-de-liebre-1.jpg',
          description: '',
        },
      ],
    },
    {
      name: 'Fotografía',
      icon: 'monochrome_photos',
      value: 'Galerías fotográficas',
      artistas: [
        {
          name: 'Manuel H',
          subtitle: 'Retratos',
          is_verified: false,
          profile_pic:
            'https://images.adsttc.com/media/images/5be1/aa1e/08a5/e5f7/ac00/0247/medium_jpg/Manuel_H..jpg?1541515801',
          photo:
            'https://www.eltiempo.com/files/image_950_534/uploads/2020/07/14/5f0dd63e14201.jpeg',
          description: '',
        },
      ],
    },
    {
      name: 'Graffiti',
      icon: 'palette',
      value: 'Ciudad graffiti en vivo',
      artistas: [
        {
          name: 'Ceroker',
          subtitle: 'Murales',
          is_verified: true,
          profile_pic:
            'https://pbs.twimg.com/profile_images/1207820958519545856/rN8vGQ75_400x400.jpg',
          photo:
            'https://assets4.domestika.org/course-images/000/005/894/5894-big.jpg',
          description: '',
        },
      ],
    },
    {
      name: 'Stand up Comedy',
      icon: 'person',
      value: 'Risa y comedia a la carta',
      artistas: [
        {
          name: 'Cejas Pobladas',
          subtitle: 'Comediante de la noche',
          is_verified: false,
          profile_pic:
            'https://www.soyteatro.com/wp-content/uploads/2019/10/ricardo2.jpg',
          photo: 'https://soyteatro.com/wp-content/uploads/2018/11/quevedo.jpg',
          description: '',
        },
      ],
    },
  ];

  ngOnInit() {
    this.seleccionarArte(this.listaArtes[0].name);
  }

  seleccionarArte(name: string) {
    this.arteActual =
      this.listaArtes.find((arte) => arte.name === name)?.value ||
      'No se ha seleccionado ningún arte';
    console.log(this.arteActual);
  }
}
