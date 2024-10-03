import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "./Sobre.module.css"

function Sobre() {
    return (
        <>
            <Header />
            <section className={styles.container}>
                <span>Sobre</span>
            </section>
            <Footer />
        </>
    )
}
export default Sobre