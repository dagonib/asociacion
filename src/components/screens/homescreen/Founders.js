import React from 'react'
import { Row, Col, Image, Container, Nav, Card } from 'react-bootstrap'

import img_analuisa from '../../../assets/img/founders/ana-luisa.jpg'
import img_carolina from '../../../assets/img/founders/carolina.png'
import img_vicotoria from '../../../assets/img/founders/victoria.jpeg'

// Iconos
import { FaFacebook, FaInstagramSquare, FaDribbble, FaTwitter } from "react-icons/fa";

// Styles
import '../../../styles/homescreen/founders.styles.scss'

const Founders = () => {

    return (
        <Container fluid className='founders mt-5 pb-5'>
            <Row className='d-flex justify-content-center mb-3 m-0'>
                <h1 className='title-section m-0'>Fundadoras</h1>
            </Row>
            <Row className='m-0'>
                <Col lg={4} className='p-2'>
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
                                    href='http://espaciomatriz.com/' 
                                    target="_blank"
                                    className='p-0 mr-2'
                                >
                                    <FaDribbble size={24} />
                                </Nav.Link>
                            </div>
                        </Card.Body >
                    </div>
                </Col>
                
                <Col lg={4} className='p-2'>
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

                <Col lg={4} className='p-2'>
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
                            <span>Proyecto Lunita Roja</span>
                            <p className='small-text'>Soy Ana Luisa Meza Ferrari, creadora del proyecto de psicoeducación menstrual Lunita Roja, apasionada por los universos y procesos femeninos. Mujer, madre, migrante y psicóloga especializada en ciclos femeninos y salud menstrual, maternidades, vínculo materno infantil y Máster en Danza Movimiento Terapia por la UAB. Doula de gestación, parto y puerperio certificada, facilitadora certificada de Danza Útera (R) y de Círculos de niñas de Templo Femenino.</p>
                            <div className='social d-flex justify-content-center justify-content-sm-start mt-3'>
                                <Nav.Link 
                                    href='https://www.instagram.com/lunita.roja.menstrual/' 
                                    target="_blank"
                                    className='p-0 mr-2'
                                >
                                    <FaInstagramSquare size={24} />
                                </Nav.Link>
                                <Nav.Link 
                                    href='https://lunitaroja.com/' 
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
