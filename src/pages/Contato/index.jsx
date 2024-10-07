import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Contato.module.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function Contato() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Header />
      <section className={styles.container}>
        <Form className={styles.form} noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className={styles.contTitle} controlId="formBasicEmail">
            <p className={styles.formTitle}>Formulário de contato</p>
            <p className={styles.formSubTitle}>
              <strong>Estamos aqui para ajudar!</strong>
            </p>
          </Form.Group>

          <Form.Group className={styles.contInput} controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              className={styles.input}
              type="email"
              placeholder="Digite o seu email"
              required // Adicionando a propriedade required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira um email válido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className={styles.contInput} controlId="formBasicNome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              className={styles.input}
              type="text" // Corrigido para "text" em vez de "Nome"
              placeholder="Digite o seu nome"
              required // Adicionando a propriedade required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira seu nome.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            className={styles.contInput}
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Mensagem:</Form.Label>
            <Form.Control
              placeholder="Digite a mensagem"
              as="textarea"
              rows={3}
              required // Adicionando a propriedade required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira sua mensagem.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            className={styles.contInput}
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Tipo de contato:</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1" selected>Contato</option>
              <option value="2">Melhoria</option>
              <option value="3">Reclamação</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Por favor, insira sua mensagem.
            </Form.Control.Feedback>
          </Form.Group>

          <div className={styles.contFormButton}>
            <Button
              className={styles.formButton}
              variant="primary"
              type="submit"
            >
              Enviar
            </Button>
          </div>
        </Form>
      </section>
      <Footer />
    </>
  );
}

export default Contato;
