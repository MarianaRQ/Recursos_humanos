import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import { FcAssistant, FcConferenceCall, FcDebt } from 'react-icons/fc';


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/empleados" className={activeLink === 'empleados' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Empleados</Nav.Link>
                            <Nav.Link href="/nomina" className={activeLink === 'nomina' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Nomina</Nav.Link>
                            <Nav.Link href="/area" className={activeLink === 'area' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Area</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
<div className="social-icon">
  <a href="#">
    <FcAssistant size={28} title="Asistente" />
  </a>
  <a href="#">
    <FcConferenceCall size={28} title="Conferencia" />
  </a>
  <a href="#">
    <FcDebt size={28} title="Dinero" />
  </a>
</div>

              <>
                <button className="vvd"><span>Empieza Ahora</span></button>
              </>
            </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}