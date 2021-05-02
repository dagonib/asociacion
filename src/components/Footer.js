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
                            <p className="text-white m-0">Asociación de Cultura Menstrual</p>
                            <p className="text-white m-0">Cataluña</p>
                        </Col>
                        {/*<!-- RRSS -->*/}
                        <Col md={4} className="d-flex flex-column align-items-center px-0">
                           <Row>
                                <p className="text-white">Socializa</p>
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
                                <p className="text-white">Navegación</p>
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
                    </Row><Row>
                        <Col className='text-white text-center p-2'>
                            <p>Salvemos la revista MyS (Mujeres y Salud) SUSCRÍBETE en www.mys.matriz.net</p>
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
