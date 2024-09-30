import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <span>MarlonPassos</span>
            <nav>
                <a href="">Home</a>
                <a href="">Sobre</a>
                <a href="">Contato</a>
                <a href="">Login</a>
            </nav>
        </header>
    )
}

export default Header