import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Login.module.css";

function Login() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <form action="">
          <div className={styles.cont_input}>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder="Digite o seu email"/>
          </div>
          <div className={styles.cont_input}>
            <label htmlFor="nome">Nome:</label>
            <input id="nome" type="nome" placeholder="Digite o seu nome"/>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}
export default Login;
