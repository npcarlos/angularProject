import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EntityCardParams } from 'src/app/components/common-ui/atoms/entity-card/entity-card.component';
import {
  EntityCardEvent,
  EntityCardEventSource,
} from 'src/app/components/common-ui/atoms/entity-card/entity-card.events';
import { ArtistModel } from 'src/app/domain/artists/artist';
import { VerificationStatus } from 'src/app/domain/enums/verification';

export interface RecommendationCardParams extends EntityCardParams {}

@Component({
  selector: 'app-recommended-selection',
  templateUrl: './recommended-selection.component.html',
  styleUrls: ['./recommended-selection.component.scss'],
})
export class RecommendedSelectionComponent implements OnInit {
  get VerificationStatus() {
    return VerificationStatus;
  }

  @Input() titleRecomendation: string = '';
  @Input() recomendationCardParams: RecommendationCardParams = {};
  @Input() listRecomendations: ArtistModel[] = [];
  @Output() onRecommendedClicked: EventEmitter<EntityCardEvent> = new EventEmitter<EntityCardEvent>();

  constructor() {}

  ngOnInit(): void {}

  cardClicked(event: EntityCardEvent) {
    this.onRecommendedClicked.emit(event);
  }
}
