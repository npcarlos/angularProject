import React from "react";
import { Card } from "react-bootstrap";
import { AligmentVerifiedMark } from "../../../../constants";
import ModalCardInfo from "../../Modals/ModalCardInfo";
import VerifiedArtist from "../../VerifiedArtist";
import "./index.scss";

const NewEntityCard = (props: any) => {
  const { data, idx, params } = props;
  const [modalDetailShow, setModalDetailShow] = React.useState(false);
  const showModalDetail = () => setModalDetailShow(true);

  const captureCloseValue =  (value: any) =>{
    setModalDetailShow(false);
  }

  const links = [
    {label: 'LINK'},
    {label: 'ANOTHER LINK'},
  ];  

  return (
    <>
      <Card key={idx} className="new-entity-card" onClick={showModalDetail}>
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
      <ModalCardInfo
        title= {data.name}
        body= {data.description}
        links = {links}
        show={modalDetailShow}
        onHide={(event: any) => captureCloseValue(event)}
      />
    </>
  );
};

export default NewEntityCard;
