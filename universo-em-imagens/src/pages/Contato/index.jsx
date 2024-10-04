import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "./Contato.module.css"
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button"

function Contato() {
    return (
        <>
            <Header />
            <section className={styles.container}>
                <Form className={styles.form}>

                    <Form.Group className={styles.contTitle} controlId="formBasicEmail">
                        <p className={styles.formTitle}>Formulário de contato</p>
                        <p className={styles.formSubTitle}><strong>Estamos aqui para ajudar!</strong></p>
                    </Form.Group>

                    <Form.Group className={styles.contInput} controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className={styles.input} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className={styles.contInput} controlId="formBasicNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control className={styles.input} type="Nome" placeholder="Digite o seu nome" />
                    </Form.Group>

                    <Form.Group className={styles.contInput} controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control placeholder="Digite a mensagem" as="textarea" rows={3} />
                    </Form.Group>
                    <Button className={styles.formButton} variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </section>
            <Footer />
        </>
    )
}
export default Contato