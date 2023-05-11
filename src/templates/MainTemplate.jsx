import React from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Nosotros from "../pages/Nosotros";
import Contacto from "../pages/Contacto";
import Inicio from "../pages/Inicio";

const MainTemplate = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar bg="black" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="/pag-inicio">Grupo Frontend</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/pag-inicio">Inicio</Nav.Link>
                                <Nav.Link as={Link} to="/pag-nosotros">Nosotros</Nav.Link>
                                <Nav.Link as={Link} to="/pag-contacto">Contacto</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">
                                    <Badge bg="light" text="dark">
                                        Idioma
                                    </Badge>{' '}
                                </Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    <Badge bg="light" text="dark">
                                        Tema
                                    </Badge>{' '}
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container>
                    <Routes>
                        <Route path="/pag-inicio" element={<Inicio />} />
                        <Route path="/pag-nosotros" element={<Nosotros />} />
                        <Route path="/pag-contacto" element={<Contacto />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </>
    );
}

export default MainTemplate;