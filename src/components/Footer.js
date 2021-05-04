import React from 'react'
import { Row, Col, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

// Iconos
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

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
                            <h4 className="title-section text-white m-0">Asociación de Cultura Menstrual</h4>
                        </Col>
                        {/*<!-- RRSS -->*/}
                        <Col md={4} className="d-flex flex-column align-items-center my-4 px-0">
                           <Row>
                                <h4 className="title-section text-white mb-1 mb-0 ">Socializa</h4>
                            </Row> 
                            <Row>
                                <Nav.Link 
                                    href='https://www.facebook.com/lavidaenrojoasociacion' 
                                    target="_blank"
                                    className='rrss-icon p-0 mr-2'
                                >
                                    <FaFacebook size={20} />
                                </Nav.Link>
                                <Nav.Link 
                                    href='https://www.instagram.com/lavidaenrojoasociacion/' 
                                    target="_blank"
                                    className='rrss-icon p-0 mr-2'
                                >
                                    <FaInstagramSquare size={20} />
                                </Nav.Link>
                            </Row>
                            
                        </Col>
                        {/*<!-- Navigation -->*/}
                        <Col md={4} className="px-0">
                            <Row className="d-flex flex-column align-items-center">
                                <h4 className="title-section text-white mb-1 m-0">Navegación</h4>
                            </Row> 
                            <Nav className="d-flex flex-column align-items-center">
                                <LinkContainer to='/inicio'>
                                    <Nav.Link className='text-white p-0'>Inicio</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/culturamenstrual'>
                                    <Nav.Link className='text-white p-0'>Cultura Menstrual</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Col>
                    </Row><Row>
                        <Col className='text-white text-center p-2'>
                            <p className='small-text'>Salvemos la revista MyS (Mujeres y Salud). <br/>SUSCRÍBETE en www.mys.matriz.net</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='small-text text-center p-2'>
                            <h3>Design by Slash 2021</h3>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </footer>
    )
}

export default Footer
