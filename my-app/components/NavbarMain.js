import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

export default function MainNav() {
    const [hovered, setHovered] = useState(false);

    const handleMouseOver = () => {
        setHovered(true);
    }

    const handleMouseOut = () => {
        setHovered(false);
    }

    const linkStyle = {
        color: hovered ? "white" : "grey",
        paddingRight: '20px',
        cursor: 'pointer'
    };

    return (
        <Navbar id="NavbarMain" collapseOnSelect expand="lg" variant="dark" className="" style={{ borderBottom: '1px solid grey', height: '50px' }}>
            <Container className="align-items-center">
                <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto" style={{ fontSize: '17px' }}>
                        <Nav.Link style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} href="/">Home</Nav.Link>
                        <Nav.Link style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} href="/projects">Projects</Nav.Link>
                        <Nav.Link style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} href="/contact">Contact</Nav.Link>
                        <Nav.Link style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} href="/blog">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
