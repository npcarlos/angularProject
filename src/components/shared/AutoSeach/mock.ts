import {findCustomList} from "../../../constants";

export const listbox = [
  {
    id: "artists",
    name: "Artists",
    ratio: 8,
    displayField: "name",
    data: (query: string) => {
      const {newArtistsList: artists} = findCustomList(query);

      return artists;
    },
    searchType: "startswith",
  },
  {
    id: "places",
    name: "Places",
    ratio: 2,
    displayField: "name",
    data: (query: string) => {
      const {newPlacesList: places} = findCustomList(query);

      return places;
    },
    searchType: "contains",
  },
];
