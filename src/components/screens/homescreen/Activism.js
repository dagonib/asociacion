import React from 'react'
import { Row, Col, Image, Container, Card, Button } from 'react-bootstrap'

// Assets
import img_manifiesto from '../../../assets/img/logos/manifiesto.png'
import activism_2 from '../../../assets/img/activism-2.png'
import logo from '../../../assets/img/logos/logo-icon.png'
import activisms from '../../../assets/files/activisms.pdf'
import solicitud from '../../../assets/files/solicitud.pdf'

// Styles
import '../../../styles/homescreen/activism.styles.scss'

const Activism = () => {

    return (
        <Container fluid className='activism my-5 px-1 px-sm-2 px-md-3 px-lg-4 px-md-5'>
            <Row 
                className='flex-column  m-0'
            >
                <h2 className='title-section m-0 text-center'>Activismo</h2>
                <p className='normal-text text-center mt-3'>Para nosotras, nuestro activismo tiene una dedicación intensa que implica realizar acciones cotidianas o puntuales donde buscamos revertir creencias, mitos, tabúes, estigmas, violencias y prejuicios de género sobre la experiencia menstrual y climatérica.</p>
            </Row>
            <Row 
                className='activism d-flex flex-column ml-4 ml-md-5 mt-1 px-0 pb-0  m-0 '
            >
                <Col 
                    className='d-flex flex-row align-items-center mb-3 p-0'>
                    <Image 
                        className='logo mr-3'
                        alt='founder-1'
                        src={logo}
                        width='25%'
                    />
                    <p className='normal-text m-0'>Queremos poner el ciclo menstrual en los diálogos cotidianos y en la agenda política y social ya que la menstruación es aún el gran secreto a voces en la vida de las niñas, mujeres y personas que menstrúan.</p>
                </Col>
                
                <Col 
                    className='d-flex flex-row align-items-center mb-3 p-0'>
                    <Image 
                        className='logo mr-3'
                        alt='founder-1'
                        src={logo}
                        width='25%'
                    />
                    <p className='normal-text m-0'>Buscamos identificar la pobreza menstrual que afecta a las personas con bajo poder adquisitivo. Esta se ve reflejada a la hora de no poder adquirir productos de recogida del sangrado menstrual.</p>
                </Col>
                
                <Col 
                    className='d-flex flex-row align-items-center mb-3 p-0'>
                    <Image 
                        className='logo mr-3'
                        alt='founder-1'
                        src={logo}
                        width='25%'
                    />
                    <p className='normal-text m-0'>Damos visibilidad y denunciamos los ataques machistas y patriarcales que reciben las compañeras divulgadoras y educadoras en sexualidad femenina, ciclo menstrual, maternidad, climaterio.</p>
                </Col>
                
                <Col 
                    className='d-flex flex-row align-items-center mb-3 p-0'>
                    <Image 
                        className='logo mr-3'
                        alt='founder-1'
                        src={logo}
                        width='25%'
                    />
                    <p className='normal-text m-0'>Somos altavoces de las entidades y colectivos de afectadas por endometriosis, el dispositivo Essure, entre otras violencias farmacéuticas o médicas relacionadas con la salud sexual y reproductiva.</p>
                </Col>
                
            </Row>
            <Row className='d-flex flex-column flex-md-row justify-content-center align-items-center mx-sm-5 mt-4 m-0'>
                <Card
                    data-aos="zoom-in" 
                    className="activity rounded-0 border-0 m-0 m-sm-2 mb-3">
                    <Row className="no-gutters">
                        <Col md={6} className="activity-image d-flex justify-content-center px-4 pt-4 p-md-4">
                            <Image 
                                className='image'
                                alt='activity-1'
                                src={img_manifiesto}
                            />
                        </Col>
                        <Col md={6} className="d-flex align-items-center">
                            <div className="activity_info card-body d-flex flex-column justify-content-center">
                                <h5 className="card-title text-center">Campaña por la Justicia Menstrual</h5>
                                <Button 
                                href='http://justiciamenstrual.encuentroculturamenstrual.es/'
                                target="_blank"
                                className='activity_button align-self-center rounded-0'>Quiero Adherirme</Button>
                            </div>
                        </Col>
                    </Row>
                </Card>
                
                <Card 
                    data-aos="zoom-in" 
                    className="activity  rounded-0 border-0 m-2 m-sm-2 mb-3">
                    <Row className="no-gutters">
                        <Col md={6} className="activity-image d-flex justify-content-center px-4 pt-4 p-md-4">
                            <Image 
                                className='image'
                                alt='activity-1'
                                src={activism_2}
                            />
                        </Col>
                        <Col md={6} className="d-flex align-items-center">
                            <div className="activity_info card-body d-flex flex-column justify-content-center">
                                <h5 className="card-title text-center">Activismo menstrual</h5>
                                <Button 
                                    href={activisms}
                                    target="_blank"
                                    className='activity_button align-self-center rounded-0'
                                >Ver documento</Button>
                            </div>
                        </Col>
                    </Row>
                </Card>
                
                <Card 
                    data-aos="zoom-in" 
                    className="activity rounded-0 border-0 m-2 m-sm-2 mb-3">
                    <Row className="no-gutters">
                        <Col md={12} className="d-flex align-items-center">
                            <div className="activity_info card-body d-flex flex-column justify-content-center">
                                <h5 className="card-title text-center">Campaña de solicitud de Atención Sanitaria en Menopausia y Climaterio</h5>
                                <Button 
                                    href={solicitud}
                                    target="_blank"
                                    className='activity_button align-self-center rounded-0'
                                >Obtener documento</Button>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Row>
            
        </Container>
    )
}

export default Activism