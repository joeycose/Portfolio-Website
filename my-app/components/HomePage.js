import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function HomePage() {
    return (
        <Container fluid style={{ paddingTop: '90px', justifyContent: 'center' }}>
            <Row style={{ justifyContent: 'center' }}>
                <Col md={8}>
                    <Card className="bg-black text-white border-grey" style={{ height: '104%', paddingRight: '15px', paddingLeft: '15px', border: '1px solid grey', borderRadius: '0px' }}>
                        <Card.Body>
                            <Card.Title style={{ color: 'Lightgrey', }}> Hello, I am</Card.Title>
                            <Card.Text style={{ fontSize: '30px' }}>
                                <strong style={{ color: 'Lightgrey', }}>Giuseppe Cosentino</strong>.
                            </Card.Text>
                            <Card.Text style={{ color: 'grey', paddingTop: '16px' }}>
                                I am a dedicated and passionate individual, who is constantly seeking self-improvement in order to gain new skills. I enjoy working in a team environment and will do anything possible to make sure all projects are completed effectively. Through my education at Seneca I have gained knowledge of the Software industry and will continue to work hard while accumulating experience. Below You can find all my Work Experience and Projects.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2}>
                    <Card className="bg-black text-white border-grey" style={{ height: '104%', paddingRight: '15px', paddingLeft: '15px', border: '1px solid grey', borderRadius: '0px' }}>
                        <Card.Body className="text-center">
                            <img variant="top" src="/joe.jpg" className="rounded-circle" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={10} style={{ marginTop: '20px' }}>
                    <Card className="bg-black text-white border-grey" style={{ height: '100%', paddingRight: '15px', paddingLeft: '15px', border: '1px solid grey', borderRadius: '0px' }}>
                        <Card.Body className="d-flex justify-content-center">
                            <MDBBtn className='m-1' style={{ backgroundColor: 'black', color: 'Lightgrey', border: '1px solid grey' }} href='#'>
                                <MDBIcon fab icon='github' className='me-3' style={{ color: 'Lightgrey' }} />
                                GitHub
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: 'black', color: 'Lightgrey', border: '1px solid grey' }} href='#'>
                                <MDBIcon icon='google' className='me-2' style={{ color: 'Lightgrey' }} />
                                Email
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: 'black', color: 'Lightgrey', border: '1px solid grey' }} href='#'>
                                <MDBIcon fas icon="signal" className='me-2' style={{ color: 'Lightgrey' }} />
                                Blog
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: 'black', color: 'Lightgrey', border: '1px solid grey' }} href='#'>
                                <MDBIcon fab icon='linkedin' className='me-2' style={{ color: 'Lightgrey' }} />
                                LinkedIn
                            </MDBBtn>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{ justifyContent: 'center', marginBottom: '100px' }}>
                <Col md={8}>
                    <Card className="bg-black text-white border-grey" style={{ paddingRight: '15px', paddingLeft: '15px', border: '1px solid grey', marginTop: '110px', borderRadius: '0px' }}>
                        <Card.Header style={{ borderBottom: '1px solid grey' }}>
                            <Card.Title style={{ color: 'Lightgrey' }}> <strong>Knowledge :</strong> </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text style={{ color: 'grey', paddingTop: '16px' }}>
                                Skills
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2}>
                    <Card className="bg-black text-white border-grey" style={{ paddingRight: '15px', paddingLeft: '15px', border: '1px solid grey', marginTop: '110px', borderRadius: '0px' }}>
                        <Card.Title>Hello</Card.Title>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

