import { Component, Input, OnInit } from '@angular/core';
import { ArtistModel } from 'src/app/domain/artists/artist';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss'],
})
export class ArtistCardComponent implements OnInit {
  @Input() artist: ArtistModel;
  constructor() {}

  ngOnInit(): void {}
}
