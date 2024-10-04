import { Button, Card, Modal } from "react-bootstrap";
import styles from "./Card.module.css"
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Cards({ image, title, description }) {
    const [show, setShow] = useState(false);

    return (
        <>
            <Card className={styles.card} style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={image}
                    className={styles.img}
                />
                <Card.Body className={styles.cardMain}>
                    <Card.Title>{title}</Card.Title>
                    <Button className={styles.cardButton} variant="primary" onClick={() => setShow(true)}>Ver mais</Button>
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
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className={styles.modalImage} src={image} alt={title} />
                    <p className={styles.modalTitle}>
                        {description}
                    </p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Cards;