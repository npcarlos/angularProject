import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistModel } from 'src/app/domain/artists/artist';
import { ArtistsStoreServiceService } from 'src/app/services/artists/artists-store-service.service';
import { EventsStoreServiceService } from 'src/app/services/events/events-store-service.service';

@Component({
  selector: 'app-event-details-page',
  templateUrl: './event-details-page.component.html',
  styleUrls: ['./event-details-page.component.scss'],
})
export class EventDetailsPageComponent implements OnInit {
  event: ArtistModel;

  subpages: any = [];
  currentSubpage: any;

  constructor(private route: ActivatedRoute, private eventsStoreService: EventsStoreServiceService) {
    this.initializeInfoSections();
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.route.params.subscribe((params) => {
      const id = params['eventId'];
      if (id) {
        this.eventsStoreService.getEvent(id).subscribe((artist) => (this.event = artist));
      }
    });
  }

  initializeInfoSections() {
    this.subpages = [
      {
        name: 'general',
        title: 'General',
        sections: [
          {
            title: 'General',
            attributes: [
              {
                name: 'subtitle',
                icon: 'info',
              },
              // {
              //   name: 'Desde',
              //   icon: 'calendar_today',
              // },
              // {
              //   name: 'Ciudad de residencia',
              //   icon: 'home',
              // },
              // {
              //   name: 'Categorías',
              //   icon: 'info',
              // },
              // {
              //   name: 'Géneros',
              //   icon: 'info',
              // },
              // {
              //   name: 'Idiomas hablados',
              //   icon: 'language',
              // },
              // {
              //   name: 'Idiomas del show',
              //   icon: 'translate',
              // },
            ],
          },
          {
            title: 'Contacto',
            attributes: [
              // {
              //   name: 'Website',
              //   icon: 'language',
              // },
              // {
              //   name: 'Email',
              //   icon: 'email',
              // },
              // {
              //   name: 'Teléfono',
              //   icon: 'phone',
              // },
              // {
              //   name: 'Facebook',
              //   icon: 'info',
              // },
              // {
              //   name: 'Twitter',
              //   icon: 'info',
              // },
              // {
              //   name: 'Instagram',
              //   icon: 'info',
              // },
              // {
              //   name: 'Spotify',
              //   icon: 'info',
              // },
              // {
              //   name: 'Youtube',
              //   icon: 'info',
              // },
              // {
              //   name: 'CD Baby',
              //   icon: 'info',
              // },
            ],
          },
        ],
      },
      {
        name: 'arts',
        title: 'Rider',
        sections: [
          {
            title: 'Discografía',
            attributes: [
              {
                name: 'Álbums',
                icon: 'info',
              },
              {
                name: 'DVD / Video',
                icon: 'info',
              },
            ],
          },
          {
            title: 'Media channels',
            attributes: [
              {
                name: 'Youtube channel',
                icon: 'info',
              },
              {
                name: 'Spotify',
                icon: 'info',
              },
              {
                name: 'Sound cloud',
                icon: 'info',
              },
            ],
          },
          {
            title: 'Galería',
            attributes: [
              {
                name: 'Fotos',
                icon: 'photo',
              },
              {
                name: 'Video',
                icon: 'photo',
              },
            ],
          },
          {
            title: 'Live perfomances',
            attributes: [
              {
                name: 'Youtube channel',
                icon: 'info',
              },
            ],
          },
        ],
      },
      // {
      //   name: 'requirements',
      //   title: 'Escena',
      //   sections: [
      //     {
      //       title: 'Instrumentación',
      //       attributes: [
      //         {
      //           name: '',
      //           icon: 'info',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Iluminación',
      //       attributes: [
      //         {
      //           name: '',
      //           icon: 'info',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Audiovisual',
      //       attributes: [
      //         {
      //           name: '',
      //           icon: 'info',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Escenografía',
      //       attributes: [
      //         {
      //           name: '',
      //           icon: 'info',
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        name: 'requirements',
        title: 'Set List',
        type: 'table',
        fields: [
          {
            title: 'N°',
            fieldName: 'num',
          },
          {
            title: 'Canción',
            fieldName: 'song',
          },
          {
            title: 'Comentarios',
            fieldName: 'comment',
          },
        ],
        data: [
          {
            num: '1',
            song: 'Sabré olvidar',
            comment: '',
          },
          {
            num: '1',
            song: 'Sabré olvidar',
            comment: '',
          },
        ],
      },
      {
        name: 'minutegram',
        title: 'Minutograma',
        type: 'table',
        fields: [
          {
            title: 'N°',
          },
          {
            title: 'Hora',
          },
          {
            title: 'Actividad',
          },
        ],
      },
    ];
    this.currentSubpage = this.subpages[0];
  }

  setCurrentSubpage(newSubpage: any) {
    this.currentSubpage = newSubpage;
    console.log(newSubpage);
  }
  getData(attribute: string) {
    return this.event[attribute as keyof ArtistModel] || 'No disponible';
  }
}
