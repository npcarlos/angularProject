import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableFieldTemplate } from 'src/app/components/common-ui/atoms/table/table.component';
import { ArtistRiderModel, CrewMemberTemplate, CrewTeamTemplate } from 'src/app/domain/riders/rider';
import { ArtistRidersStoreServiceService } from 'src/app/services/riders/artist-riders-store-service.service';

export const CrewRoles: { name: string; title: string }[] = [
  { name: 'artists', title: 'Artistas' },
  { name: 'managers', title: 'Managers' },
  { name: 'engineers', title: 'Ingenieros' },
  { name: 'roadies', title: 'Roadies' },
  { name: 'security', title: 'Seguridad' },
  { name: 'others', title: 'Otros' },
];

@Component({
  selector: 'app-artist-rider-details-page',
  templateUrl: './artist-rider-details-page.component.html',
  styleUrls: ['./artist-rider-details-page.component.scss'],
})
export class ArtistRiderDetailsPageComponent implements OnInit {
  get CrewRoles() {
    return CrewRoles;
  }

  rider: ArtistRiderModel;
  subpages: any = [];
  currentSubpage: any;

  inputListTableFields: TableFieldTemplate[] = [];
  mixesListTableFields: TableFieldTemplate[] = [];
  roomingListTableFields: TableFieldTemplate[] = [];
  flyingListTableFields: TableFieldTemplate[] = [];

  constructor(private route: ActivatedRoute, private artistsRidersStoreService: ArtistRidersStoreServiceService) {
    this.initializeInfoSections();
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.route.params.subscribe((params) => {
      const artistId = params['artistId'];
      const riderId = params['riderId'];
      if (artistId && riderId) {
        this.artistsRidersStoreService.getRider(artistId, riderId).subscribe((rider) => {
          this.rider = rider;
        });
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
        name: 'people',
        title: 'Personal',
        sections: [],
      },
      {
        name: 'requirements',
        title: 'Requerimientos Técnicos',
        sections: [],
      },
      {
        name: 'backline',
        title: 'Backline',
        sections: [],
      },
      {
        name: 'soundcheck',
        title: 'Prueba de sonido',
        sections: [],
      },
    ];

    this.inputListTableFields = [
      { title: 'Canal', fieldName: 'channelNumber', alignment: 'center' },
      { title: 'Instr.', fieldName: 'instrumentName', alignment: 'left' },
      { title: 'Mic / DI', fieldName: 'microphone', alignment: 'left' },
      { title: 'Stand', fieldName: 'stand', alignment: 'center' },
      { title: 'Ins. Mon', fieldName: 'inserts', alignment: 'left' },
      { title: 'Ins. FOH', fieldName: 'inserts', alignment: 'left' },
    ];
    this.mixesListTableFields = [
      { title: 'Mix', fieldName: 'mix', alignment: 'center' },
      { title: 'Descripción', fieldName: 'description', alignment: 'left' },
      { title: 'Nota', fieldName: 'notes', alignment: 'left' },
      { title: 'EQ', fieldName: 'eq', alignment: 'center' },
    ];

    this.roomingListTableFields = [
      { title: 'Req. Habitación', fieldName: 'mix', alignment: 'center' },
      { title: 'Crew members', fieldName: 'description', alignment: 'left' },
    ];
    this.flyingListTableFields = [
      { title: 'Req. Habitación', fieldName: 'mix', alignment: 'center' },
      { title: 'Crew members', fieldName: 'description', alignment: 'left' },
    ];
    this.currentSubpage = this.subpages[1];
  }

  setCurrentSubpage(newSubpage: any) {
    this.currentSubpage = newSubpage;
  }
  getData(attribute: string) {
    // return this.artist[attribute as keyof ArtistModel] || 'jdfhkjdshfs';
    return 'No disponible';
  }

  get crewMemberRoles() {
    return CrewRoles.filter((role) => !!this.rider.crewList[role.name as keyof CrewTeamTemplate]);
  }

  crewMembersByRole(roleName: string): CrewMemberTemplate[] {
    return this.rider.crewList[roleName as keyof typeof this.rider.crewList] || [];
  }
}
