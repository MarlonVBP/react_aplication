import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import styles from "./Card.module.css";
import SpinnerLoading from "../Spinner";

// eslint-disable-next-line react/prop-types
function Cards({ image, title, description }) {
  const [show, setShow] = useState(false);
  const [translatedTitle, setTranslatedTitle] = useState("");
  const [translatedDescription, setTranslatedDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const translateText = async (text) => {
    const endpoint = `https://lingva.ml/api/v1/en/pt/${encodeURIComponent(
      text
    )}`;

    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      return data.translation;
    } catch (error) {
      console.error("Erro ao traduzir:", error);
      return null;
    }
  };

  const handleShow = async () => {
    setIsLoading(true);

    const translatedTitleText = await translateText(title);
    const translatedDescriptionText = await translateText(description);

    setTranslatedTitle(translatedTitleText || title);
    setTranslatedDescription(translatedDescriptionText || description);
    setIsLoading(false);
    setShow(true);
  };
  return (
    <>
      <Card className={styles.card} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} className={styles.img} />
        <Card.Body className={styles.cardMain}>
          <Card.Title>{title}</Card.Title>{" "}
          <Button
            className={styles.cardButton}
            variant="primary"
            onClick={handleShow}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <SpinnerLoading />
                {" Carregando..."}
              </>
            ) : (
              "Ver mais"
            )}
          </Button>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {translatedTitle || title}{" "}
            {/* Exibe o título traduzido ou original no modal */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            className={styles.modalImage}
            src={image}
            alt={translatedTitle || title}
          />
          <p className={styles.modalTitle}>
            {translatedDescription || description}
          </p>{" "}
          {/* Exibe a descrição traduzida ou original */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Cards;
