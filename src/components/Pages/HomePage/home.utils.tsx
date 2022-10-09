import React from "react";
import { Button, Modal } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import { AligmentVerifiedMark, ArtistModel } from "../../../constants";
import VerifiedArtist from "../../shared/VerifiedArtist";

const entityCard = (data: ArtistModel, idx: number, params?: any) => {
  return (
    <Card key={idx} className="entity-card">
      <div className="header-card-container">
        <p>
          {data?.profile_pic && (
            <img className="profile-avatar" src={data.profile_pic} />
          )}
          {!data?.profile_pic && (
            <img
              className="profile-avatar"
              src="/src/assets/img/empty-profile.png"
            />
          )}
        </p>
        <p className="header-card-name">
          <span className="card-title-label">{data.name}</span>
          <VerifiedArtist
            aligment={AligmentVerifiedMark.LEFT}
            verifiedStatus={data?.verified_status}
          />
          <span>{data.subtitle}</span>
        </p>
      </div>
      {!params?.hidePhoto && (
        <>
          {data?.photo && (
            <div className="container-img-card">
              <Card.Img className="img-card" src={data.photo} variant="top" />
            </div>
          )}
        </>
      )}
      <Card.Body>
        <p className="card-description">{data.description}</p>
      </Card.Body>
      <div className="card-buttons-container">
        <Card.Link className="card-link" href="#">
          Card Link
        </Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </div>
    </Card>
  );
};

const newEntityCard = (data: ArtistModel, idx: number, params?: any) => {
  return (
    <Card key={idx} className="new-entity-card">
      {!params?.hidePhoto && (
        <>
          {data?.photo && (
            <div className="container-img-card">
              <Card.Img
                className="img-card"
                src={data.photo}
                variant="top"
              ></Card.Img>
              <Card.ImgOverlay>
                <div className="card-name-section">
                  <p className="card-title-label">
                    <span className="verified-comp">
                      <VerifiedArtist
                        aligment={AligmentVerifiedMark.LEFT}
                        verifiedStatus={data?.verified_status}
                      />
                    </span>
                    <span>{data.name}</span>
                  </p>
                  <p>{data.subtitle}</p>
                </div>
              </Card.ImgOverlay>
            </div>
          )}
        </>
      )}
    </Card>
  );
};

const ModalDetail = (props: any) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export const mainSection = (
  title: string,
  description: string,
  listView: ArtistModel[],
  params?: any
) => {
  const [modalDetailShow, setModalDetailShow] = React.useState(false);
  return (
    <section className="main-section">
      <>
        <h3 className="main-section-title">{title}</h3>
        <p>{description}</p>
        <div className="cards-container">
          {listView?.map((element, idx) => {
            return !!params?.useNewCard ? (
              <div key={`new-entity-cart-detail-${idx}`}>
                {newEntityCard(element, idx, params)}
              </div>
            ) : (
              <div key={`entity-cart-detail-${idx}`}>
                {entityCard(element, idx, params)}
              </div>
            );
          })}
        </div>
      </>
      <ModalDetail
        show={modalDetailShow}
        onHide={() => setModalDetailShow(false)}
      />
    </section>
  );
};

export const welcomeSection = () => {
  return (
    <section className="welcome-section">
      <>
        <h1 className="welcome-title">Bienvenido a Artists Hive!</h1>
        <p>
          La comunidad más grande que conecta artistas independientes con los
          sitios. Encuentra tu lugar favorito. Disfruta de las mejores
          expresiones artísticas en tu lugar.
        </p>
        <p>
          Planifica tus eventos, programa tus giras, crea la información
          profesional de tu grupo artístico
        </p>
      </>
    </section>
  );
};
