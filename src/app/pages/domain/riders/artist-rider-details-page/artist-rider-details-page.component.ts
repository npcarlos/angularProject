import { ViewportScroller } from '@angular/common';
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

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private artistsRidersStoreService: ArtistRidersStoreServiceService
  ) {
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
                name: 'Email',
                icon: 'email',
              },
              {
                name: 'Production manager',
                icon: 'phone',
              },
              {
                name: 'Tour manager',
                icon: 'phone',
              },
            ],
          },
          {
            title: 'Aspectos técnicos generales',
            attributes: [
              {
                name: 'Respuesta en frecuencia',
                icon: 'info',
              },
              {
                name: 'Presión sonora',
                icon: 'info',
              },
              {
                name: 'Distancia FOH',
                icon: 'info',
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
      { title: 'Mix', fieldName: 'mixNumber', alignment: 'center' },
      { title: 'Descripción', fieldName: 'description', alignment: 'left' },
      { title: 'Monitor', fieldName: 'monitor', alignment: 'left' },
      { title: 'Nota', fieldName: 'notes', alignment: 'center' },
    ];

    this.roomingListTableFields = [
      { title: 'Req. Habitación', fieldName: 'mix', alignment: 'center' },
      { title: 'Crew members', fieldName: 'description', alignment: 'left' },
    ];
    this.flyingListTableFields = [
      { title: 'Req. Habitación', fieldName: 'mix', alignment: 'center' },
      { title: 'Cabina', fieldName: 'description', alignment: 'left' },
      { title: 'Alianzas', fieldName: 'description', alignment: 'left' },
      { title: 'Viajero frec.', fieldName: 'description', alignment: 'left' },
      { title: 'Cuenta viajero frec.', fieldName: 'description', alignment: 'left' },
    ];
    this.currentSubpage = this.subpages[0];
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

  public onClick(elementId: string): void {
    console.log(elementId);
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
