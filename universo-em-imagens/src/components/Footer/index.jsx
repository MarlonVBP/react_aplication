import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <span>Desenvolvido por: <a href="https://github.com/MarlonVBP">Marlon Passos</a></span>
        </footer>
    )
}

export default Footer