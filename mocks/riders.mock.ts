import { ArtistRiderModel } from 'src/app/domain/riders/rider';

export const ARTIST_RIDERS = [
  new ArtistRiderModel({
    artistId: '',
    name: 'Rider Principal',
    created_at: new Date(),
    updated_at: new Date(),
    id: '1',
    instruments: [],
    inputList: [
      {
        channelNumber: 1,
        instrumentName: 'Kick Drum',
        microphone: 'Shure Beta 52 / Akg D112',
        inserts: 'COMP/GATE',
      },
      {
        channelNumber: 2,
        instrumentName: 'Snare Drum TOP',
        microphone: 'Shure Sm 57',
        inserts: 'COMP',
      },
      {
        channelNumber: 3,
        instrumentName: 'Snare Drum BOTTOM',
        microphone: 'ShureSm 57',
        inserts: 'COMP',
      },
      {
        channelNumber: 4,
        instrumentName: 'Hi Hat',
        microphone: 'Shure Beta 81',
        inserts: '',
      },
      {
        channelNumber: 5,
        instrumentName: 'Small Tom',
        microphone: 'ShureBETA-98',
        inserts: 'GATE',
      },
      {
        channelNumber: 6,
        instrumentName: 'Medium Tom',
        microphone: 'ShureBETA-98',
        inserts: 'GATE',
      },
      {
        channelNumber: 7,
        instrumentName: 'Floor Tom',
        microphone: 'ShureBETA-98',
        inserts: 'GATE',
      },
      {
        channelNumber: 8,
        instrumentName: 'Over Head L',
        microphone: 'Shure Sm 81',
        inserts: '',
      },
      {
        channelNumber: 9,
        instrumentName: 'Over Head R',
        microphone: 'Shure Sm 81 / rode NT-5',
        inserts: '',
      },
      {
        channelNumber: 10,
        instrumentName: 'Bajo',
        microphone: 'Akg D112/ D.I. Active',
        inserts: 'COMP',
      },
      {
        channelNumber: 11,
        instrumentName: 'Guitarra Líder',
        microphone: 'Shure SM 57 / Beta 57A',
        inserts: '',
      },
      {
        channelNumber: 12,
        instrumentName: 'Guitarra Rítmica',
        microphone: 'Shure SM 57 / Beta 57A',
        inserts: '',
      },
      {
        channelNumber: 13,
        instrumentName: 'Voz Líder',
        microphone: 'Shure Sm 58',
        inserts: 'COMP/GATE/RV',
      },
      {
        channelNumber: 14,
        instrumentName: 'Coro Andrés',
        microphone: 'Shure Sm 58',
        inserts: 'COMP/GATE/RV',
      },
      {
        channelNumber: 15,
        instrumentName: 'Coro Gustavo',
        microphone: 'Shure Sm 58',
        inserts: 'COMP/GATE/RV',
      },
      {
        channelNumber: 16,
        instrumentName: '',
        microphone: '',
        inserts: '',
      },
      {
        channelNumber: 17,
        instrumentName: '',
        microphone: '',
        inserts: '',
      },
    ],
    stageSpecs: { height: 2, length: 2, width: 4, unitMeasure: 'mts' },
  }),
  new ArtistRiderModel({
    artistId: '',
    name: 'Rider Tarima pequeña',
    created_at: new Date(),
    updated_at: new Date(),
    id: '2',
    instruments: [],
    inputList: [
      {
        channelNumber: 1,
        instrumentName: 'Kick Drum',
        microphone: 'Shure Beta 52 / Akg D112',
        inserts: 'COMP/GATE',
      },
      {
        channelNumber: 2,
        instrumentName: 'Snare Drum TOP',
        microphone: 'Shure Sm 57',
        inserts: 'COMP',
      },
      {
        channelNumber: 3,
        instrumentName: 'Snare Drum BOTTOM',
        microphone: 'ShureSm 57',
        inserts: 'COMP',
      },
      {
        channelNumber: 4,
        instrumentName: 'Hi Hat',
        microphone: 'Shure Beta 81',
        inserts: '',
      },
      {
        channelNumber: 5,
        instrumentName: 'Small Tom',
        microphone: 'ShureBETA-98',
        inserts: 'GATE',
      },
      {
        channelNumber: 6,
        instrumentName: 'Medium Tom',
        microphone: 'ShureBETA-98',
        inserts: 'GATE',
      },
      {
        channelNumber: 7,
        instrumentName: 'Floor Tom',
        microphone: 'ShureBETA-98',
        inserts: 'GATE',
      },
      {
        channelNumber: 8,
        instrumentName: 'Over Head L',
        microphone: 'Shure Sm 81',
        inserts: '',
      },
      {
        channelNumber: 9,
        instrumentName: 'Over Head R',
        microphone: 'Shure Sm 81 / rode NT-5',
        inserts: '',
      },
      {
        channelNumber: 10,
        instrumentName: 'Bajo',
        microphone: 'Akg D112/ D.I. Active',
        inserts: 'COMP',
      },
      {
        channelNumber: 11,
        instrumentName: 'Guitarra Líder',
        microphone: 'Shure SM 57 / Beta 57A',
        inserts: '',
      },
      {
        channelNumber: 12,
        instrumentName: 'Guitarra Rítmica',
        microphone: 'Shure SM 57 / Beta 57A',
        inserts: '',
      },
      {
        channelNumber: 13,
        instrumentName: 'Voz Líder',
        microphone: 'Shure Sm 58',
        inserts: 'COMP/GATE/RV',
      },
      {
        channelNumber: 14,
        instrumentName: 'Coro Andrés',
        microphone: 'Shure Sm 58',
        inserts: 'COMP/GATE/RV',
      },
      {
        channelNumber: 15,
        instrumentName: 'Coro Gustavo',
        microphone: 'Shure Sm 58',
        inserts: 'COMP/GATE/RV',
      },
      {
        channelNumber: 16,
        instrumentName: '',
        microphone: '',
        inserts: '',
      },
      {
        channelNumber: 17,
        instrumentName: '',
        microphone: '',
        inserts: '',
      },
    ],
    stageSpecs: { height: 2, length: 2, width: 4, unitMeasure: 'mts' },
  }),
];
