import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "./Login.module.css"

function Login() {
    return (
        <>
            <Header />
            <section className={styles.container}>
                <span>Login</span>
            </section>
            <Footer />
        </>
    )
}
export default Login