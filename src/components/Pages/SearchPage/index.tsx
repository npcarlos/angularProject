import "../HomePage//MainHome/index.scss";
import "../HomePage//MainSection/index.scss";
import "../HomePage//WelcomeSection/index.scss";
import "./search.scss";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";

import { ArtistModel, findCustomList } from "../../../constants";
import DynamicIcons from "../../shared/DynamicIcons";
import MainSection from "../HomePage/MainSection";

export default function SearchPage() {
  const [open, setOpen] = useState({
    artistsOpen: false,
    placesOpen: false,
  });
  const [results, setResults] = useState<{ [key: string]: ArtistModel[] }>({
    newArtistsList: [],
    newPlacesList: [],
  });
  let [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";

  useEffect(() => {
    if (!!q) {
      const { newArtistsList, newPlacesList } = findCustomList(q);

      setResults({ ...results, newArtistsList, newPlacesList });
    } else if (!q) {
      setResults({ ...results, newArtistsList: [], newPlacesList: [] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  const resultsNotFound = () => {
    if (!!results.newArtistsList.length || !!results.newPlacesList.length) {
      return;
    }

    return (
      <article>
        <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
        <ul>
          <li>Revisa la ortografía</li>
          <li>Utiliza palabras más genéricas o menos palabras</li>
          <li>Navega por las categorías para encontrar un producto similar</li>
        </ul>
      </article>
    );
  };

  return (
    <>
      {!!results.newPlacesList.length && (
        <section>
          <div
            className="group-title-icon"
            onClick={() => setOpen({ ...open, placesOpen: !open.placesOpen })}
          >
            <h3 className="main-section-title">Places</h3>
            <DynamicIcons color="#7a260a" iconName="AiOutlineDown" size="20" />
          </div>
          <hr />
          <Collapse in={open.placesOpen}>
            <div id="example-collapse-text-2">
              <article className="day-forecast">
                <MainSection
                  title={""}
                  description={""}
                  listView={results.newPlacesList}
                  params={{ hidePhoto: true }}
                />
              </article>
            </div>
          </Collapse>
        </section>
      )}
      {!!results.newArtistsList.length && (
        <section>
          <div
            className="group-title-icon"
            onClick={() => setOpen({ ...open, artistsOpen: !open.artistsOpen })}
          >
            <h3 className="main-section-title">Artistas</h3>
            <DynamicIcons color="#7a260a" iconName="AiOutlineDown" size="20" />
          </div>
          <hr />
          <Collapse in={open.artistsOpen}>
            <div id="example-collapse-text">
              {results.newArtistsList?.map((artist, id) => (
                <section key={`artist-${id}`} className="ah-search__section">
                  {artist?.profile_pic && (
                    <img className="profile-avatar" src={artist.profile_pic} />
                  )}
                  <article className="day-forecast">
                    <Link
                      className="ah-search__section__link"
                      to={`/artist/detail/${artist.id}`}
                    >
                      <h4>{artist.name}</h4>
                    </Link>
                    <p>
                      {artist.description.length > 252
                        ? `${artist.description.substring(0, 252)}...`
                        : artist.description}
                    </p>
                  </article>
                </section>
              ))}
            </div>
          </Collapse>
        </section>
      )}
      {resultsNotFound()}
    </>
  );
}
