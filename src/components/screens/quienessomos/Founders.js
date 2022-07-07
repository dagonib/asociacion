import React from 'react'
import { Row, Col, Image, Container, Nav, Card } from 'react-bootstrap'

import img_analuisa from '../../../assets/img/founders/ana-luisa.jpg'
import img_carolina from '../../../assets/img/founders/carolina.png'
import img_vicotoria from '../../../assets/img/founders/victoria.png'

// Iconos
import { FaFacebook, FaInstagramSquare, FaDribbble, FaTwitter } from "react-icons/fa";

// Styles
import '../../../styles/quienessomos/founders.styles.scss'

const Founders = () => {

    return (
        <Container fluid className='founders mt-5 pb-5'>
            <Row className='d-flex justify-content-center mb-3 m-0'>
                <h1 className='title-section m-0'>Fundadoras</h1>
            </Row>
            <Row className='m-0'>
                <Col
                    lg={4} className='p-2'>
                    <div className='founder d-flex flex-column flex-sm-row flex-lg-column align-items-center align-items-sm-start px-3 py-5'>
                        <div className='d-flex justify-content-center px-0'>                           
                            <Image 
                                roundedCircle
                                className='founder_img'
                                alt='founder-1'
                                src={img_carolina}
                                width='100%'
                            />                        
                        </div>
                        <Card.Body className='founder_info mt-4 px-0 pl-sm-4 pl-lg-0'>
                            <h4>Carolina Ackermann</h4>
                            <span>Proyecto Espacio Matriz</span>
                            <p className='small-text'>Mi proyecto personal: @espaciomatriz. Cultura menstrual y cultura del climaterio para todes. Tallerista y coordinadora de eventos relacionados con la salud ginecológica, la educación menstrual y climatérica. Soy activista por el derecho al conocimiento del propio cuerpo, su funcionamiento y los recursos necesarios para vivir en salud. Creadora del curso virtual 'Bienestar para la mujer cíclica' y de la agenda anual “Mujer Sin Reglas”.</p>
                            <div className='social d-flex justify-content-center justify-content-sm-start mt-3'>
                                <Nav.Link 
                                    href='https://www.facebook.com/CarolinaAEspacioMatriz' 
                                    target="_blank"
                                    className='p-0 mr-2'
                                >
                                    <FaFacebook size={24} />
                                </Nav.Link>
                                <Nav.Link 
                                    href='https://www.instagram.com/espaciomatriz/' 
                                    target="_blank"
                                    className='p-0 mr-2'
                                >
                                    <FaInstagramSquare size={24} />
                                </Nav.Link>
                                <Nav.Link 
                                    href='http://lavidaenrojo.org/' 
                                    target="_blank"
                                    className='p-0 mr-2'
                                >
                                    <FaDribbble size={24} />
                                </Nav.Link>
                            </div>
                        </Card.Body >
                    </div>
                </Col>
                
                <Col 
                    data-aos="fade-left" 
                    lg={4} className='p-2'>
                    <div className='founder d-flex flex-column flex-sm-row flex-lg-column align-items-center align-items-sm-start px-3 py-5'>
                        <div className='d-flex justify-content-center px-0'>
                            <Image 
                                roundedCircle
                                className='founder_img'
                                alt='founder-1'
                                src={img_vicotoria}
                                width='100%'
                            />
                        </div>
                        <Card.Body className='founder_info mt-4 px-0 pl-sm-4 pl-lg-0'>
                            <h4>Mª Victoria López Benito</h4>
                            <span>Proyecto Hystera. Salud Femenina</span>
                            <p className='small-text'>Mujer, hija, sobrina, nieta y amiga. Docente y creadora del proyecto Hystera. Salud femenina. Con formación y experiencia profesional en Humanidades, investigación educativa, feminismo y salud femenina integral. Hoy en día sus conocimientos y saberes acumulados están al servicio del proyecto Hystera. Un proyecto sobre salud femenina con perspectiva educativa, centrado en la difusión y la transmisión del autoconocimiento y autocuidado de la salud menstrual.</p>
                            <div className='social d-flex justify-content-center justify-content-sm-start mt-3'>
                                <Nav.Link 
                                    href='https://www.facebook.com/Hysterasaludfemenina/' 
                                    target="_blank"
                                    className='p-0 mr-2'
                                >
                                    <FaFacebook size={24} />
                                </Nav.Link>
                                <Nav.Link 
                                    href='https://www.instagram.com/hysterasaludfemenina/' 
                                    target="_blank"
                                    className='p-0 mr-2'
                                >
                                    <FaInstagramSquare size={24} />
                                </Nav.Link>
                                <Nav.Link 
                                    href='https://twitter.com/Hystera_fem' 
                                    target="_blank"
                                    className='p-0 mr-2'
                                >
                                    <FaTwitter size={24} />
                                </Nav.Link>
                                <Nav.Link 
                                    href='https://hysterasaludfemenina.com/' 
                                    target="_blank"
                                    className='p-0 mr-2'
                                >
                                    <FaDribbble size={24} />
                                </Nav.Link>
                            </div>
                        </Card.Body>
                    </div>
                </Col>

                <Col 
                    lg={4} className='p-2'>
                    <div className='founder d-flex flex-column flex-sm-row flex-lg-column align-items-center align-items-sm-start px-3 py-5'>
                        <div className='d-flex justify-content-center px-0'>
                            <Image 
                                roundedCircle
                                className='founder_img'
                                alt='founder-1'
                                src={img_analuisa}
                                width='100%'
                            />
                        </div>
                        <Card.Body className='founder_info mt-4 px-0 pl-sm-4 pl-lg-0'>
                            <h4>Ana Luisa Meza</h4>
                            <span>Proyecto Psicoutera</span>
                            <p className='small-text'>Soy Ana Luisa Meza Ferrari, creadora del proyecto de Psicoutera. Apasionada por los universos femeninos y las Maternidades. Máster en Danza Movimiento Terapia. Doula certificada en el acompañamiento de las maternidades, partos y nacimientos. Facilitadora de ®Danza Útera, Círculos de Niñas y Yoga pre y posnatal. Educadora de Masaje Infantil certificada por AEMI/IAMI, Asesora de Porteo Ergonómico y Lactancia Materna. Actual Presidenta de la Asociación de Danza Movimiento Terapia Española. </p>
                            <div className='social d-flex justify-content-center justify-content-sm-start mt-3'>
                                <Nav.Link 
                                    href='https://www.instagram.com/psicoutera/' 
                                    target="_blank"
                                    className='p-0 mr-2'
                                >
                                    <FaInstagramSquare size={24} />
                                </Nav.Link>
                                <Nav.Link 
                                    href='https://psicoutera.com/' 
                                    target="_blank"
                                    className='p-0 mr-2'
                                >
                                    <FaDribbble size={24} />
                                </Nav.Link>
                            </div>
                        </Card.Body>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Founders
