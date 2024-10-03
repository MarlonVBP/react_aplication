import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} bg="dark" data-bs-theme="dark" className="bg-body-tertiary mb-3 bg-primary">
                    <Container fluid>
                        <Navbar.Brand href="#">Fotos do universo</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            bg="dark" data-bs-theme="dark"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Fotos do universo
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link><Link className={styles.link} to="/">Home</Link></Nav.Link>
                                    <Nav.Link><Link className={styles.link} to="/sobre">Sobre</Link></Nav.Link>
                                    <Nav.Link><Link className={styles.link} to="/contato">Contato</Link></Nav.Link>
                                    <Nav.Link><Link className={styles.link} to="/login">Login</Link></Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default Header