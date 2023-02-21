import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import JoeCosentino from '../images/test1.jpg';
//import Joe from '../public/vercel.svg'

//console.log(Joe);

export default function HomePage() {
    return (
        <Container fluid style={{ paddingTop: '100px', marginLeft: '100px' }}>
            <Row>
                <Col md={8}>
                    <Card className="bg-black text-white border-grey" style={{ height: '100%', paddingRight: '15px', paddingLeft: '15px', border: '1px solid grey' }}>
                        <Card.Body>
                            <Card.Title> Hello, I am</Card.Title>
                            <Card.Text style={{ fontSize: '30px' }}>
                                <strong>Giuseppe Cosentino</strong>.
                            </Card.Text>
                            <Card.Text>
                                PlaceHolder add your personal information ...//
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2}>
                    <Card className="bg-black text-white border-grey" style={{ height: '100%', paddingRight: '15px', paddingLeft: '15px', border: '1px solid grey' }}>
                        <Card.Body className="text-center">
                            <img variant="top" src="/joe.jpg" className="rounded-circle" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
