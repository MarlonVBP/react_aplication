import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Login.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
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
          <span className={styles.formTitle}>Bem-vindo de volta!!!</span>

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

          <Form.Group className={styles.contInput} controlId="formBasicPassword">
            <Form.Label>Senha:</Form.Label>
            <Form.Control
              className={styles.input}
              type="password"
              placeholder="Digite a sua senha"
              required // Adicionando a propriedade required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira uma senha.
            </Form.Control.Feedback>
          </Form.Group>

          <div className={styles.contFormButton}>
            <Button className={styles.formButton} variant="primary" type="submit">
              Entrar
            </Button>
          </div>
        </Form>
      </section>
      <Footer />
    </>
  );
}
export default Login;
