import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { PiNotebookFill } from "react-icons/pi";
import { MdCommentBank } from "react-icons/md";

function Header() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          bg="dark"
          data-bs-theme="dark"
          className="bg-body-tertiary bg-primary"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <strong>FOTOS DO UNIVERSO</strong>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              bg="dark"
              data-bs-theme="dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  FOTOS DO UNIVERSO
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    <Link className={styles.link} to="/">
                      <FaHome />
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className={styles.link} to="/sobre">
                      <MdCommentBank />
                      Sobre
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className={styles.link} to="/contato">
                      <PiNotebookFill />
                      Contato
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className={styles.link} to="/login">
                      <FaUser />
                      Perfil
                    </Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
