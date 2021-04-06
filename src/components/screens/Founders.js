import React from 'react'
import { Row, Col, Image, Container, Nav } from 'react-bootstrap'

import founder_3 from '../../assets/img/founders/founder-3.jpg'

// Iconos
import { FaFacebook, FaInstagramSquare, FaTelegram } from "react-icons/fa";

// Styles
import '../../styles/founders.styles.scss'

const Founders = () => {
    return (
        <Container className='pb-5'>
            <Row className='d-flex justify-content-center mb-5 m-0'>
                <h1 className='m-0'>Fundadoras</h1>
            </Row>
            <Row className='m-0'>
                <Col sm={12} md={4} lg={4} className='d-flex align-items-stretch'>
                    <div className='founder text-center rounded mb-4'>
                        <div className='founder_img'>
                            <Image 
                                alt='founder-1'
                                src={founder_3}
                                width='100%'
                            />
                             <div className='social d-flex justify-content-center align-items-center'>
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
                        <div class="founder_info p-3">
                            <h4>Carolina Ackermann</h4>
                            <span>Espacio Matriz</span>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4} className='d-flex align-items-stretch'>
                    <div className='founder text-center rounded mb-4'>
                        <div className='founder_img'>
                            <Image 
                                alt='founder-1'
                                src={founder_3}
                                width='100%'
                            />
                             <div className='social d-flex justify-content-center align-items-center'>
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
                        <div class="founder_info p-3">
                            <h4>Carolina Ackermann</h4>
                            <span>Espacio Matriz</span>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4} className='d-flex align-items-stretch'>
                    <div className='founder text-center rounded mb-4'>
                        <div className='founder_img'>
                            <Image 
                                alt='founder-1'
                                src={founder_3}
                                width='100%'
                            />
                             <div className='social d-flex justify-content-center align-items-center'>
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
                        <div class="founder_info p-3">
                            <h4>Carolina Ackermann</h4>
                            <span>Espacio Matriz</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Founders
