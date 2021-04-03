import React from 'react'
import { Row, Col, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

// Iconos
import { FaFacebook, FaInstagramSquare, FaTelegram } from "react-icons/fa";

import '../styles/footer.styles.scss'

const Footer = () => {
    return (
        <footer fixed="bottom" className="footer bg-dark">
            {/** Información adicional */}
            <Row className='d-flex align-items-center m-0'>
                <Container>
                    <Row className="d-flex align-items-center mx-0 py-4">
                        {/*<!-- Asociación de Cultura Menstrual -->*/} 
                        <Col md={4} className="text-center px-0">
                            <h1 className="text-white">Asociación de Cultura Menstrual</h1>
                            <p className="text-white">Cataluña</p>
                        </Col>
                        {/*<!-- RRSS -->*/}
                        <Col md={4} className="d-flex flex-column align-items-center px-0">
                           <Row>
                                <h1 className="text-white">Socializa</h1>
                            </Row> 
                            <Row>
                                <Nav.Link className='p-0 mr-2'>
                                    <FaFacebook size={20} />
                                </Nav.Link>
                                <Nav.Link className='p-0 mr-2'>
                                    <FaInstagramSquare size={20} />
                                </Nav.Link>
                                <Nav.Link className='p-0 mr-0'>
                                    <FaTelegram size={20} />
                                </Nav.Link> 
                            </Row>
                            
                        </Col>
                        {/*<!-- Navigation -->*/}
                        <Col md={4} className="px-0">
                            <Row className="d-flex flex-column align-items-center">
                                <h1 className="text-white">Navegación</h1>
                            </Row> 
                            <Nav className="d-flex flex-column align-items-center">
                                <LinkContainer to='/inicio'>
                                    <Nav.Link>Inicio</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/carolina'>
                                    <Nav.Link>Cultura Menstrual</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/el-proyecto'>
                                    <Nav.Link>Contacto</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-white text-center p-2'>
                            Design by Slash 2021
                        </Col>
                    </Row>
                </Container>
            </Row>
        </footer>
    )
}

export default Footer
