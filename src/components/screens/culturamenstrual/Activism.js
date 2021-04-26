import React from 'react'
import { Row, Col, Image, Container, Card, Button } from 'react-bootstrap'

// Assets
import img_manifiesto from '../../../assets/img/logos/manifiesto.png'
// Styles
import '../../../styles/culturamenstrual/activism.styles.scss'

const Activism = () => {
    return (
        <Container className='activism my-5'>
            <Row className='flex-column  m-0'>
                <h2 className='text-center'>Activismo</h2>
                <p className='text-center'>El activismo es la dedicación intensa a alguna causa en la vida pública. Implican realizar acciones cotidianas y/o puntuales donde se busque revertir creencias, mitos, tabús, violencias  y mentiras culturales por parte del patriarcado y el machismo del Siglo XXI.</p>
            </Row>
            <Row className='d-flex flex-column flex-md-row justify-content-center align-items-center m-0'>
                <Card className="activity rounded-0 border-0 m-0 m-sm-2 mb-3">
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
                                <Button className='activity_button align-self-center rounded-0'>Quiero Adherirme</Button>
                            </div>
                        </Col>
                    </Row>
                </Card>
                
                <Card className="activity  rounded-0 border-0 m-2 mb-3">
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
                                <Button className='activity_button align-self-center rounded-0'>Quiero Adherirme</Button>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Row>
            <Row className='activism mt-3 m-0'>
                <p className='text-center'>Damos visibilidad y denunciamos los ataques machistas y patriarcales que reciben las compañeras divulgadoras y educadoras en sexualidad femenina, ciclo menstrual, maternidad, climaterio, etcétera.</p>
                <p className='text-center'>Somos altavoces de las entidades y colectivos de afectadas por endometriosis o el dispositivo Essure, entre otras violencias farmacéuticas o médicas relacionadas con la salud sexual y reproductiva.</p>
            </Row>
        </Container>
    )
}

export default Activism