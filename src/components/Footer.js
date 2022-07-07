import React from 'react'
import { Row, Col, Nav, Navbar, Container, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

// Iconos
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
//Imágenes
import logo from '../assets/img/logos/logo-horiz-blanco.png'

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
                            <Navbar.Brand href="inicio" className="text-white mt-2 py-0">
                                <Image 
                                    className='logo'
                                    alt='founder-1'
                                    src={logo}
                                    width='100%'
                                />   
                            </Navbar.Brand>  
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
                            <Row>
                                <p className="text-white mb-1 mb-0 ">asociacionculturamenstrual@gmail.com</p>
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
                                <LinkContainer to='/encume'>
                                    <Nav.Link className='text-white p-0'>EnCuMe</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/quienessomos'>
                                    <Nav.Link className='text-white p-0'>Quiénes Somos</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Col>
                    </Row>
                    <Row className='d-none'>
                        <Col className='small-text text-white text-center p-2'>
                            <p className='small-text'>Salvemos la revista MyS (Mujeres y Salud). <br/>SUSCRÍBETE en www.mys.matriz.net</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='small-text text-white text-center p-2'>
                            <h3 className='text-white'>L’associació denominada Asociación de Cultura Menstrual en Cataluña s'ha inscrit a la secció 1a del Registre d'associacions de la Generalitat de Catalunya amb data 22/02/2021  NIF: G05361753</h3>
                        </Col>
                    </Row>
                    <Row className="p-0 m-0">
                        <Col className='d-flex flex-column align-items-center justify-content-center small-text text-white text-center p-2'>
                            <p className='navegation-text m-0 p-0'>@LAVIDAENROJO.2021 | Todos los derechos reservados</p>
                            <LinkContainer to='/politicaprivacidad' className='d-flex align-items-center p-0 m-0'>
                                <Nav.Link className='small-text navegation-text ml-1 p-0 m-0'>Política privacidad</Nav.Link>
                            </LinkContainer>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </footer>
    )
}

export default Footer
