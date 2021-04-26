import React from 'react'
import { Row, Col, Image, Container, Nav } from 'react-bootstrap'

import founder_3 from '../../assets/img/founders/founder-3.jpg'

// Iconos
import { FaFacebook, FaInstagramSquare, FaTelegram } from "react-icons/fa";

// Styles
import '../../styles/founders.styles.scss'

const Founders = () => {
    return (
        <Container fluid className='founders pb-5'>
            <Row className='d-flex justify-content-center mb-5 m-0'>
                <h1 className='m-0'>Fundadoras</h1>
            </Row>
            <Row className='m-0'>
                <Col lg={4} className='p-2'>
                    <div className='founder d-flex flex-column flex-sm-row flex-lg-column align-items-center align-items-sm-start p-4'>
                        <div className='d-flex justify-content-center px-0'>
                            <Image 
                                roundedCircle
                                className='founder_img'
                                alt='founder-1'
                                src={founder_3}
                                width='100%'
                            />
                        </div>
                        <div className='founder_info mt-3'>
                            <h4>Carolina Ackermann</h4>
                            <span>Espacio Matriz</span>
                            <p>Mi proyecto personal: @espaciomatriz. Cultura menstrual y cultura del climaterio para todes. Tallerista y coordinadora de eventos relacionados con la salud ginecológica, la educación menstrual y climatérica. Soy activista por el derecho al conocimiento del propio cuerpo, su funcionamiento y los recursos necesarios para vivir en salud. Creadora del curso virtual 'Bienestar para la mujer cíclica' y de la agenda anual “Mujer Sin Reglas”.</p>
                            <div className='social d-flex justify-content-center justify-content-sm-start mt-3'>
                                <Nav.Link className='p-0 mr-2'>
                                    <FaFacebook size={24} />
                                </Nav.Link>
                                <Nav.Link className='p-0 mr-2'>
                                    <FaInstagramSquare size={24} />
                                </Nav.Link>
                                <Nav.Link className='p-0 mr-2'>
                                    <FaTelegram size={24} />
                                </Nav.Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4} className='p-2'>
                    <div className='founder d-flex flex-column flex-sm-row flex-lg-column align-items-center align-items-sm-start p-4'>
                        <div className='d-flex justify-content-center px-0'>
                            <Image 
                                roundedCircle
                                className='founder_img'
                                alt='founder-1'
                                src={founder_3}
                                width='100%'
                            />
                        </div>
                        <div className='founder_info mt-3'>
                            <h4>Carolina Ackermann</h4>
                            <span>Espacio Matriz</span>
                            <p>Mi proyecto personal: @espaciomatriz. Cultura menstrual y cultura del climaterio para todes. Tallerista y coordinadora de eventos relacionados con la salud ginecológica, la educación menstrual y climatérica. Soy activista por el derecho al conocimiento del propio cuerpo, su funcionamiento y los recursos necesarios para vivir en salud. Creadora del curso virtual 'Bienestar para la mujer cíclica' y de la agenda anual “Mujer Sin Reglas”.</p>
                            <div className='social d-flex justify-content-center justify-content-sm-start mt-3'>
                                <Nav.Link className='p-0 mr-2'>
                                    <FaFacebook size={24} />
                                </Nav.Link>
                                <Nav.Link className='p-0 mr-2'>
                                    <FaInstagramSquare size={24} />
                                </Nav.Link>
                                <Nav.Link className='p-0 mr-2'>
                                    <FaTelegram size={24} />
                                </Nav.Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4} className='p-2'>
                    <div className='founder d-flex flex-column flex-sm-row flex-lg-column align-items-center align-items-sm-start p-4'>
                        <div className='d-flex justify-content-center px-0'>
                            <Image 
                                roundedCircle
                                className='founder_img'
                                alt='founder-1'
                                src={founder_3}
                                width='100%'
                            />
                        </div>
                        <div className='founder_info mt-3'>
                            <h4>Carolina Ackermann</h4>
                            <span>Espacio Matriz</span>
                            <p>Mi proyecto personal: @espaciomatriz. Cultura menstrual y cultura del climaterio para todes. Tallerista y coordinadora de eventos relacionados con la salud ginecológica, la educación menstrual y climatérica. Soy activista por el derecho al conocimiento del propio cuerpo, su funcionamiento y los recursos necesarios para vivir en salud. Creadora del curso virtual 'Bienestar para la mujer cíclica' y de la agenda anual “Mujer Sin Reglas”.</p>
                            <div className='social d-flex justify-content-center justify-content-sm-start mt-3'>
                                <Nav.Link className='p-0 mr-2'>
                                    <FaFacebook size={24} />
                                </Nav.Link>
                                <Nav.Link className='p-0 mr-2'>
                                    <FaInstagramSquare size={24} />
                                </Nav.Link>
                                <Nav.Link className='p-0 mr-2'>
                                    <FaTelegram size={24} />
                                </Nav.Link>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Founders
