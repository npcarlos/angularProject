import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ArtistModel } from 'src/app/domain/artists/artist';
import { VerificationStatus } from 'src/app/domain/enums/verification';

@Component({
  selector: 'app-recommended-selection',
  templateUrl: './recommended-selection.component.html',
  styleUrls: ['./recommended-selection.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class RecommendedSelectionComponent implements OnInit {
  get VerificationStatus() {
    return VerificationStatus;
  }

  @Input() titleRecomendation: string = '';
  @Input() isLinkeable: boolean = false;
  @Input() listRecomendations: ArtistModel[] = [];

  constructor() {}

  ngOnInit(): void {}

  cardClicked(event: string) {
    console.log(event);
  }
}
