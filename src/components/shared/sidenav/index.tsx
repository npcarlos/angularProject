import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Offcanvas, Navbar, Container } from "react-bootstrap";
import { SUB_PATHS } from "../../../constants";

import { SearchComponent } from "../search";
import "./index.scss";

const SideNav = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSearch = () => {
    const q = (document.getElementsByName("search")[0] as HTMLInputElement)
      .value;

    navigate(`/search?q=${q}`, { replace: true, state: {} });
  };

  const general: Section[] = [
    {
      name: "Home",
      path: "",
      updated: new Date("2/20/16"),
    },
    {
      name: "Mi perfil",
      path: `profile/${SUB_PATHS.ELEMENT_DETAILS}`,
      updated: new Date("2/20/16"),
    },
    {
      name: "Mi banda",
      path: `artist/${SUB_PATHS.ELEMENT_DETAILS}`,
      updated: new Date("2/20/16"),
    },
    {
      name: "Mis eventos",
      path: `shows/${SUB_PATHS.ELEMENT_DETAILS}`,
      updated: new Date("1/18/16"),
    },
    {
      name: "Mis Riders Técnicos",
      path: `riders/${SUB_PATHS.ELEMENT_DETAILS}`,
      updated: new Date("2/20/16"),
    },
  ];

  const navigateTo = (path: string | undefined) => {
    const paramId = Math.floor(Math.random() * 18) + 1;

    if (path) {
      navigate(`${path}/${paramId}`);
    } else {
      navigate(``);
    }
    setShow(false);
  };

  const liMenuElement = (section: string, note: Section, idx: number) => {
    return (
      <a
        key={idx}
        className="menu-option"
        href={void 0}
        onClick={() => navigateTo(note?.path)}
      >
        <img
          alt="page Logo"
          className="menu-option-img"
          src="/src/assets/img/page-empty.svg"
        />
        <span className="menu-option-label">{note.name}</span>
      </a>
    );
  };

  const logosRedes = () => {
    return (
      <>
        <a
          aria-label="Angular on twitter"
          href="https://twitter.com/angular"
          rel="noopener noreferrer"
          target="_blank"
          title="Twitter"
        >
          <svg
            data-name="Logo"
            height="24"
            id="twitter-logo"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="none" height="400" width="400" />
            <path
              d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
              fill="#7a260a"
            />
          </svg>
        </a>
        <a
          aria-label="Angular on YouTube"
          href="https://youtube.com/angular"
          rel="noopener noreferrer"
          target="_blank"
          title="YouTube"
        >
          <svg
            data-name="Logo"
            fill="#7a260a"
            height="24"
            id="youtube-logo"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z" />
          </svg>
        </a>
      </>
    );
  };

  return (
    <>
      <Navbar className="toolbar-header mb-3" expand="true">
        <Container fluid>
          <div>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand`}
              className="icon-burger"
              onClick={handleShow}
            />
            <img
              alt="Artists Hive Logo"
              className="img-logotipo"
              src="/src/assets/img/logo.png"
              width="100"
            />
          </div>
          <SearchComponent handleSearch={handleSearch} />
          <div>
            {logosRedes()}
            <a className="brand-text" href="#">
              Log in
            </a>
          </div>
          {!!show && (
            <Navbar.Offcanvas
              placement="start"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <h1 className="menu-brand">Artist Hive</h1>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <h4 className="menu-title">Menú principal</h4>
                <hr />
                <section className="general-sec">
                  <>
                    <h5 className="sec-general-label">General</h5>
                    <div className="option-menu-list">
                      {general.map((general: Section, idx) => {
                        return liMenuElement("general", general, idx);
                      })}
                    </div>
                  </>
                </section>
                <hr />
                {/* <section>
                                    <h5 className='sec-general'>Herramientas</h5>
                                </section> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default SideNav;

export interface Section {
  name: string;
  updated: Date;
  path?: string;
}
