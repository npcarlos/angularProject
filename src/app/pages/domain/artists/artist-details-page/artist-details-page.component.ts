import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistModel } from 'src/app/domain/artists/artist';
import { ArtistsStoreServiceService } from 'src/app/services/artists/artists-store-service.service';

@Component({
  selector: 'app-artist-details-page',
  templateUrl: './artist-details-page.component.html',
  styleUrls: ['./artist-details-page.component.scss'],
})
export class ArtistDetailsPageComponent implements OnInit {
  artist: ArtistModel;

  subpages: any = [];
  currentSubpage: any;

  constructor(private route: ActivatedRoute, private artistsStoreService: ArtistsStoreServiceService) {
    this.initializeInfoSections();
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.artistsStoreService.getArtist(id).subscribe((artist) => (this.artist = artist));
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
                name: 'description',
                icon: 'info',
              },
              {
                name: 'Desde',
                icon: 'calendar_today',
              },
              {
                name: 'Ciudad de residencia',
                icon: 'home',
              },
              {
                name: 'Categorías',
                icon: 'info',
              },
              {
                name: 'Géneros',
                icon: 'info',
              },
              {
                name: 'Idiomas hablados',
                icon: 'language',
              },
              {
                name: 'Idiomas del show',
                icon: 'translate',
              },
            ],
          },
          {
            title: 'Contacto',
            attributes: [
              {
                name: 'Website',
                icon: 'language',
              },
              {
                name: 'Email',
                icon: 'email',
              },
              {
                name: 'Teléfono',
                icon: 'phone',
              },
              {
                name: 'Facebook',
                icon: 'info',
              },
              {
                name: 'Twitter',
                icon: 'info',
              },
              {
                name: 'Instagram',
                icon: 'info',
              },
              {
                name: 'Spotify',
                icon: 'info',
              },
              {
                name: 'Youtube',
                icon: 'info',
              },
            ],
          },
          {
            title: 'Sello discográfico',
            attributes: [
              {
                name: '',
                icon: 'supervisor_account',
              },
            ],
          },
          {
            title: 'Miembros',
            attributes: [
              {
                name: '',
                icon: 'supervisor_account',
              },
            ],
          },
          {
            title: 'Alimentación',
            attributes: [
              {
                name: '',
                icon: 'fastfood',
              },
            ],
          },
          {
            title: 'Tours',
            attributes: [
              {
                name: '',
                icon: 'flight',
              },
            ],
          },
        ],
      },
      {
        name: 'arts',
        title: 'Artes',
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
      {
        name: 'requirements',
        title: 'Escena',
        sections: [
          {
            title: 'Instrumentación',
            attributes: [
              {
                name: '',
                icon: 'info',
              },
            ],
          },
          {
            title: 'Iluminación',
            attributes: [
              {
                name: '',
                icon: 'info',
              },
            ],
          },
          {
            title: 'Audiovisual',
            attributes: [
              {
                name: '',
                icon: 'info',
              },
            ],
          },
          {
            title: 'Escenografía',
            attributes: [
              {
                name: '',
                icon: 'info',
              },
            ],
          },
        ],
      },
      {
        name: 'requirements',
        title: 'Social',
        sections: [
          {
            title: 'Comentarios',
            attributes: [
              {
                name: '',
                icon: 'info',
              },
            ],
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
    return this.artist[attribute as keyof ArtistModel] || 'No disponible';
  }
}
