import { Card, Col, Container, Row } from 'react-bootstrap';


export default function ProjectPage() {
    return (
        <Container id="projects" fluid style={{ justifyContent: 'center' }}>
            <Row style={{ justifyContent: 'center', marginBottom: '10px', marginTop: '20px', alignItems: 'center' }}>
                <Col md={12}>
                </Col>
                <Col md={{ span: 5, offset: 0 }}>
                    <h5 style={{ textAlign: 'left', marginBottom: '20px', color: 'Lightgrey' }}> <strong>Projects</strong></h5>
                    <Card className="bg-black border-grey" style={{ border: '1px solid grey', borderRadius: '0px', color: 'Lightgrey' }}>
                        <Card.Header className="bg-grey" style={{ borderBottom: '1px solid grey', padding: '6px', paddingTop: '14px' }}>
                            <Card.Title style={{ fontWeight: 'lighter', fontSize: '14px' }}>Made With : </Card.Title>
                        </Card.Header>
                        <Card.Body style={{ padding: '0px' }}>
                            <img src="/API.jpeg" alt="My Image" className="card-image" />
                        </Card.Body>
                        <Card.Footer className="bg-grey" style={{ borderTop: '1px solid grey' }}>
                            Card 1 Footer
                        </Card.Footer>
                    </Card>

                </Col>
                <Col md={5} style={{ marginTop: '44px' }}>
                    <Card className="bg-black border-grey" style={{ border: '1px solid grey', borderRadius: '0px', color: 'Lightgrey' }}>
                        <Card.Header className="bg-grey" style={{ borderBottom: '1px solid grey', padding: '6px', paddingTop: '14px' }}>
                            <Card.Title style={{ fontWeight: 'lighter', fontSize: '14px' }}>Made With : </Card.Title>
                        </Card.Header>
                        <Card.Body style={{ padding: '0px' }}>
                            <img src="/MovieData_website.jpeg" alt="My Image" className="card-image" />
                        </Card.Body>
                        <Card.Footer className="bg-grey" style={{ borderTop: '1px solid grey' }}>
                            Card 2 Footer
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row style={{ justifyContent: 'center', marginBottom: '10px', marginTop: '20px', alignItems: 'center' }}>
                <Col md={5}>
                    <Card className="bg-black border-grey" style={{ border: '1px solid grey', borderRadius: '0px', color: 'Lightgrey' }}>
                        <Card.Header className="bg-grey" style={{ borderBottom: '1px solid grey', padding: '6px', paddingTop: '14px' }}>
                            <Card.Title style={{ fontWeight: 'lighter', fontSize: '14px' }}>Made With : </Card.Title>
                        </Card.Header>
                        <Card.Body style={{ padding: '0px' }}>
                            <Card.Text>Card 1 Body</Card.Text>
                        </Card.Body>
                        <Card.Footer className="bg-grey" style={{ borderTop: '1px solid grey' }}>
                            Card 1 Footer
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={5}>
                    <Card className="bg-black border-grey" style={{ border: '1px solid grey', borderRadius: '0px', color: 'Lightgrey' }}>
                        <Card.Header className="bg-grey" style={{ borderBottom: '1px solid grey', padding: '6px', paddingTop: '14px' }}>
                            <Card.Title style={{ fontWeight: 'lighter', fontSize: '14px' }}>Made With : </Card.Title>
                        </Card.Header>
                        <Card.Body style={{ padding: '0px' }}>
                            <Card.Text>Card 2 Body</Card.Text>
                        </Card.Body>
                        <Card.Footer className="bg-grey" style={{ borderTop: '1px solid grey' }}>
                            Card 2 Footer
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row style={{ justifyContent: 'center', marginBottom: '100px', marginTop: '20px', alignItems: 'center' }}>
                <Col md={5}>
                    <Card className="bg-black border-grey" style={{ border: '1px solid grey', borderRadius: '0px', color: 'Lightgrey' }}>
                        <Card.Header className="bg-grey" style={{ borderBottom: '1px solid grey', padding: '6px', paddingTop: '14px' }}>
                            <Card.Title style={{ fontWeight: 'lighter', fontSize: '14px' }}>Made With : </Card.Title>
                        </Card.Header>
                        <Card.Body style={{ padding: '0px' }}>
                            <Card.Text>Card 1 Body</Card.Text>
                        </Card.Body>
                        <Card.Footer className="bg-grey" style={{ borderTop: '1px solid grey' }}>
                            Card 1 Footer
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={5}>
                    <Card className="bg-black border-grey" style={{ border: '1px solid grey', borderRadius: '0px', color: 'Lightgrey' }}>
                        <Card.Header className="bg-grey" style={{ borderBottom: '1px solid grey', padding: '6px', paddingTop: '14px' }}>
                            <Card.Title style={{ fontWeight: 'lighter', fontSize: '14px' }}>Made With : </Card.Title>
                        </Card.Header>
                        <Card.Body style={{ padding: '0px' }}>
                            <Card.Text>Card 2 Body</Card.Text>
                        </Card.Body>
                        <Card.Footer className="bg-grey" style={{ borderTop: '1px solid grey' }}>
                            Card 2 Footer
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
