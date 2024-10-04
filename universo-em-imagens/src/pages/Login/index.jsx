import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Login.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <Form className={styles.form}>
        <span className={styles.formTitle}>Bem-vindo de volta!!!</span>

          <Form.Group className={styles.contInput} controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control className={styles.input} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className={styles.contInput} controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className={styles.input} type="password" placeholder="Password" />
          </Form.Group>
          <Button className={styles.formButton} variant="primary" type="submit">
            LOGIN
          </Button>
        </Form>
      </section>
      <Footer />
    </>
  );
}
export default Login;
