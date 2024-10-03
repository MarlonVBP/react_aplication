import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "./Contato.module.css"

function Contato() {
    return (
        <>
            <Header />
            <section className={styles.container}>
                <span>Contato</span>
            </section>
            <Footer />
        </>
    )
}
export default Contato