import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MainNav() {
    return (
        <Navbar id="NavbarMain" collapseOnSelect expand="lg" variant="dark" className="border-bottom border-grey">
            <Container className="align-items-centre">
                <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto" style={{ fontSize: '17px' }}>
                        <Nav.Link style={{ color: 'grey', paddingRight: '20px' }} href="/">Home</Nav.Link>
                        <Nav.Link style={{ color: 'grey', paddingRight: '20px' }} href="/projects">Projects</Nav.Link>
                        <Nav.Link style={{ color: 'grey', paddingRight: '20px' }} href="/contact">Contact</Nav.Link>
                        <Nav.Link style={{ color: 'grey', paddingRight: '20px' }} href="/blog">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
