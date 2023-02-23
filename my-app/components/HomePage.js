import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function HomePage() {
    return (
        <Container id="home" fluid style={{ paddingTop: '90px', justifyContent: 'center' }}>
            <Row style={{ justifyContent: 'center' }}>
                <Col md={8}>
                    <Card className="bg-black text-white border-grey" style={{ height: '104%', paddingRight: '15px', paddingLeft: '15px', border: '1px solid grey', borderRadius: '0px' }}>
                        <Card.Body>
                            <Card.Title style={{ color: 'Lightgrey', }}> Hello, I am</Card.Title>
                            <Card.Text style={{ fontSize: '30px' }}>
                                <strong style={{ color: 'Lightgrey', }}>Giuseppe Cosentino</strong>.
                            </Card.Text>
                            <Card.Text style={{ color: 'Lightgrey', paddingTop: '16px', fontWeight: 'lighter' }}>
                                I am a dedicated and passionate individual, who is constantly seeking self-improvement in order to gain new skills. I enjoy working in a team environment and will do anything possible to make sure all projects are completed effectively. Through my education at Seneca I have gained knowledge of the Software industry and will continue to work hard while accumulating experience. Below You can find all my Work Experience and Projects.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2}>
                    <Card className="bg-black text-white border-grey" style={{ height: '104%', border: '1px solid grey', borderRadius: '0px' }}>
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
            <Row style={{ justifyContent: 'center', marginBottom: '100px', marginTop: '20px' }}>
                <Col md={8}>
                    <div className="text-white" style={{ marginTop: '110px' }}>
                        <h5 style={{ textAlign: 'left', marginBottom: '20px', color: 'Lightgrey' }}> <strong>Knowledge</strong></h5>
                        <Card className="bg-black border-grey" style={{ border: '1px solid grey', borderRadius: '0px' }}>
                            <Card.Header style={{ borderBottom: '1px solid grey', padding: '6px', marginTop: '8px' }}>
                                <Card.Title style={{ color: 'Lightgrey' }}> <strong>Full-Stack Development :</strong> </Card.Title>
                            </Card.Header>
                            <Card.Body style={{ padding: '10px' }}>
                                <Card.Text style={{ color: 'Lightgrey', paddingTop: '4px', fontWeight: 'lighter' }}>
                                    As a Full-Stack Developer, I have experience building web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. I am proficient in both the front-end and back-end technologies, allowing me to develop applications end-to-end.

                                    I have worked on a variety of projects, ranging from simple CRUD (Create, Read, Update, Delete) applications to more complex systems that involve real-time data processing and analytics. Some of the applications I've developed include e-commerce websites, social media platforms, and management systems.

                                    What I love most about Full-Stack Development is the ability to work on different parts of the application and see how they come together to create a cohesive product. It's rewarding to see how the work I do on the front-end interacts with the back-end and how the data flows between them. I also enjoy the challenge of problem-solving and finding elegant solutions to complex problems.

                                    Overall, my knowledge and experience in Full-Stack Development allow me to create robust and scalable web applications that meet the needs of my clients and end-users.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-black border-grey" style={{ border: '1px solid grey', borderRadius: '0px', marginTop: '20px' }}>
                            <Card.Header style={{ borderBottom: '1px solid grey', padding: '6px', marginTop: '8px' }}>
                                <Card.Title style={{ color: 'Lightgrey' }}> <strong>C++ Development :</strong> </Card.Title>
                            </Card.Header>
                            <Card.Body style={{ padding: '10px' }}>
                                <Card.Text style={{ color: 'Lightgrey', fontWeight: 'lighter' }}>
                                    I have extensive knowledge in C++ development, particularly in the use of the Standard Template Library (STL). I have worked on a variety of projects using C++, including developing algorithms, building data structures, and creating efficient programs for high-performance computing.

                                    What I love most about C++ development is the ability to create complex programs with a high degree of control over memory management and performance. The STL also provides a powerful set of tools for managing data and algorithms, making it a versatile language for a wide range of projects.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col md={2}>
                    <Card className="bg-black text-white border-grey" style={{ paddingRight: '15px', paddingLeft: '15px', border: '1px solid grey', marginTop: '154px', borderRadius: '0px' }}>
                        <Card.Header style={{ borderBottom: '1px solid grey', textAlign: 'center' }}>
                            <Card.Title style={{ color: 'Lightgrey', fontSize: '18px' }}> <strong>Languages</strong></Card.Title>
                        </Card.Header>
                        <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', color: 'Lightgrey' }}>
                            <div style={{ paddingBottom: '10px' }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" style={{ height: '20px', marginRight: '5px' }} />
                                C++
                            </div>
                            <div style={{ paddingBottom: '10px' }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" style={{ height: '20px', marginRight: '5px' }} />
                                C
                            </div>
                            <div style={{ paddingBottom: '10px' }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{ height: '20px', marginRight: '5px' }} />
                                JavaScript
                            </div>
                            <div style={{ paddingBottom: '10px' }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" style={{ height: '20px', marginRight: '5px' }} />
                                React.js
                            </div>
                            <div style={{ paddingBottom: '10px' }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" style={{ height: '20px', marginRight: '5px', filter: 'invert(1)' }} />
                                Next.js
                            </div>
                            <div style={{ paddingBottom: '10px' }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" style={{ height: '20px', marginRight: '5px' }} />
                                Python
                            </div>
                            <div style={{ paddingBottom: '10px' }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" style={{ height: '20px', marginRight: '5px' }} />
                                SQL
                            </div>
                            <div style={{ paddingBottom: '10px' }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" style={{ height: '20px', marginRight: '5px', filter: 'invert(1)' }} />
                                Express.js
                            </div>
                            <div style={{ paddingBottom: '10px' }}>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS Cloud Services" style={{ height: '20px', marginRight: '5px' }} />
                                AWS
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

