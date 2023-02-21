import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MainNav() {
    return (
        <Navbar style={{ backgroundColor: '' }} id="NavbarMain" collapseOnSelect expand="lg" variant="dark" className="border-bottom border-grey">
            <Container className="align-items-centre">
                <Navbar.Brand style={{ padding: '6px', color: 'lightGrey' }} className="mx-auto" href="#">Giuseppe Cosentino</Navbar.Brand>
                <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" style={{ fontSize: '16px' }}>
                        <Nav.Link style={{ color: 'lightGrey' }} href="">Home</Nav.Link>
                        <Nav.Link style={{ color: 'lightGrey' }} href="/projects">Projects</Nav.Link>
                        <Nav.Link style={{ color: 'lightGrey' }} href="/contact">Contact</Nav.Link>
                        <Nav.Link style={{ color: 'lightGrey' }} href="/blog">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
