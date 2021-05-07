import React from 'react'
import { Container, Row, Col, Accordion, Card, Image } from 'react-bootstrap'

// Assets
import img_offer from '../../../assets/img/img-offer.jpg'
import img_offer_md from '../../../assets/img/img-offer-md.png'

import useWindowSize from '../../../utilities/useWindowSize'

// Styles
import '../../../styles/culturamenstrual/rights.styles.scss'

const Rights = () => {
    const { width }  = useWindowSize()

    return (
        <Row className='rights mb-0 mx-0'>
            <Container fluid className='p-0'>
                <Row className='d-flex flex-column-reverse flex-md-row m-0'>
                    <Col className='d-flex flex-column px-3 py-5 px-0 bg-secondary'>
                        <Row className='d-flex justify-content-center mx-0'>
                            <h2 className='title-section text-white m-0 text-center'>Derechos</h2>
                            <p className='normal-text text-white text-center mt-3'>Hay una serie de derechos humanos universalmente aceptados que pueden ser socavados por el tratamiento que se presta a mujeres y niñas durante la menstruación. Estos son, entre otros:</p>
                        </Row>
                        <Row className='d-flex justify-content-center mx-0 mx-sm-2'> 
                            <Accordion defaultActiveKey="0" className='accordion'>
                                <Card className='card normal-text'>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className='card-header pl-2'>
                                        El derecho a la dignidad humana
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className='card-body normal-text pl-2'>Cuando las mujeres y las niñas no pueden acceder a instalaciones de baño seguras y medios seguros y eficaces de manejo de la higiene menstrual, no pueden manejar su menstruación con dignidad. Las burlas relacionadas con la menstruación, la exclusión y la vergüenza también socavan el derecho a la dignidad humana.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className='card normal-text'>
                                    <Accordion.Toggle as={Card.Header} eventKey="1" className='card-header pl-2'>
                                        El derecho a un nivel adecuado de salud y bienestar
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body className='card-body normal-text pl-2'>Las mujeres y las niñas pueden sufrir consecuencias negativas para la salud cuando carecen de suministros y servicios para manejar su salud menstrual. El estigma de la menstruación también pueden impedir que las mujeres y las niñas procuren tratamiento de trastornos o dolor relacionados con la menstruación, lo cual afecta su salud y bienestar.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className='card normal-text'>
                                    <Accordion.Toggle as={Card.Header} eventKey="2" className='card-header pl-2'>
                                        El derecho a la educación
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body className='card-body normal-text pl-2'>La falta de un lugar seguro o de la capacidad para manejar la higiene menstrual, así como la falta de medicamentos para tratar el dolor relacionado con la menstruación, pueden contribuir a elevar las tasas de ausentismo escolar y los deficientes resultados educativos. Algunos estudios han confirmado que cuando las niñas no pueden manejar adecuadamente la menstruación en la escuela, su asistencia escolar y su rendimiento se resienten.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className='card normal-text'>
                                    <Accordion.Toggle as={Card.Header} eventKey="3" className='card-header pl-2'>
                                        El derecho al trabajo
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body className='card-body normal-text pl-2'>El escaso acceso a medios seguros de manejo de la higiene menstrual y la falta de medicamentos para tratar los trastornos o el dolor relacionados con la menstruación también limitan las oportunidades de empleo para las mujeres y las niñas. Pueden abstenerse de realizar ciertos trabajos, o pueden ser obligadas a renunciar a horas de trabajo y salarios. Las necesidades relacionadas con la menstruación, tales como pausas para baño, podrían ser sancionadas, conduciendo de ese modo a la desigualdad en las condiciones de trabajo. Y las mujeres y las niñas pueden enfrentar discriminación en el lugar de trabajo relacionada con tabúes en torno a la menstruación.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className='card normal-text'>
                                    <Accordion.Toggle as={Card.Header} eventKey="4" className='card-header pl-2'>
                                        El derecho a la no discriminación y la igualdad de género
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body className='card-body normal-text pl-2'>Los estigmas y las normas relacionadas con la menstruación pueden reforzar las prácticas discriminatorias. Los obstáculos relacionados con la menstruación en la escuela, el trabajo, los servicios de salud y las actividades públicas también perpetúan las desigualdades de género.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Row>
                    </Col>
                    <Col className='px-0'>
                        {width > 767 ? (
                            <Image
                                className='encume-image'
                                src={img_offer_md}
                            />
                        ) : (
                            <Image
                                className='encume-image'
                                src={img_offer}
                            />
                        )}
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}

export default Rights
