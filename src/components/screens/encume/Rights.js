import React from 'react'
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap'

// Iconos
import { FaAngleDown } from "react-icons/fa";

// Styles
import '../../../styles/encume/rights.styles.scss'

const Rights = () => {
 
    return (
        <Row className='rights my-5 mb-0 mx-0'>
            <Container fluid className='p-0'>
                <Row className='d-flex flex-column-reverse m-0'>
                    <Col className='d-flex flex-column px-3 px-0'>
                        <Row className='d-flex flex-column justify-content-center mx-0'>
                            <h2 className='title-section m-0 text-center'>Cultura Menstrual y Derechos</h2>
                            <p className='small-text text-center mx-0 mx-sm-2 mt-1'>Fuente: UNFPA (Fondo de población de las Naciones Unidas)</p>
                            <p className='normal-text text-center mx-0 mx-sm-2 mt-3'>Apostamos por la toma de consciencia individual en cuanto a la vivencia de los procesos fisiológicos propios y naturales asociados con el ciclo menstrual y la sexualidad femenina, pero estos también deben estar respaldados en el marco de los derechos. </p>
                            <p className='normal-text text-center mx-0 mx-sm-2 mt-3'>Por ello, queremos destacar de qué manera algunos de los derechos humanos universalmente aceptados pueden ser socavados por las connotaciones culturales asociadas a la menstruación. Estos son, entre otros:</p>
                        </Row>
                        <Row className='d-flex justify-content-center mx-0 mx-sm-2'> 
                            <Accordion className='accordion d-flex flex-column flex-md-row'>
                                <Col>
                                    <Card className='card normal-text'>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className='card-header d-flex justify-content-between align-items-center pl-3'>
                                            <p className='p-0 m-0'>El derecho a la dignidad humana</p>
                                            <FaAngleDown size={24} />
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className='card-body normal-text pl-4'>Cuando las mujeres y las niñas no pueden acceder a instalaciones de baño seguras y medios seguros y eficaces de manejo de la higiene menstrual, no pueden manejar su menstruación con dignidad. Las burlas relacionadas con la menstruación, la exclusión y la vergüenza también socavan el derecho a la dignidad humana.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className='card normal-text'>
                                        <Accordion.Toggle as={Card.Header} eventKey="1" className='card-header d-flex justify-content-between align-items-center pl-3'>
                                            <p className='p-0 m-0'>El derecho a un nivel adecuado de salud y bienestar</p>
                                            <FaAngleDown size={24} />
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body className='card-body normal-text pl-2'>Las mujeres y las niñas pueden sufrir consecuencias negativas para la salud cuando carecen de suministros y servicios para manejar su salud menstrual. El estigma de la menstruación también pueden impedir que las mujeres y las niñas procuren tratamiento de trastornos o dolor relacionados con la menstruación, lo cual afecta su salud y bienestar.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className='card normal-text'>
                                        <Accordion.Toggle as={Card.Header} eventKey="2" className='card-header d-flex justify-content-between align-items-center pl-3'>
                                            <p className='p-0 m-0'>El derecho a la educación</p>
                                            <FaAngleDown size={24} />
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body className='card-body normal-text pl-2'>La falta de un lugar seguro o de la capacidad para manejar la higiene menstrual, así como la falta de medicamentos para tratar el dolor relacionado con la menstruación, pueden contribuir a elevar las tasas de ausentismo escolar y los deficientes resultados educativos. Algunos estudios han confirmado que cuando las niñas no pueden manejar adecuadamente la menstruación en la escuela, su asistencia escolar y su rendimiento se resienten.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>                             
                                </Col>
                                <Col>
                                    <Card className='card normal-text'>
                                        <Accordion.Toggle as={Card.Header} eventKey="3" className='card-header d-flex justify-content-between align-items-center pl-3'>
                                            <p className='p-0 m-0'>El derecho al trabajo</p>
                                            <FaAngleDown size={24} />
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body className='card-body normal-text pl-2'>El escaso acceso a medios seguros de manejo de la higiene menstrual y la falta de medicamentos para tratar los trastornos o el dolor relacionados con la menstruación también limitan las oportunidades de empleo para las mujeres y las niñas. Pueden abstenerse de realizar ciertos trabajos, o pueden ser obligadas a renunciar a horas de trabajo y salarios. Las necesidades relacionadas con la menstruación, tales como pausas para baño, podrían ser sancionadas, conduciendo de ese modo a la desigualdad en las condiciones de trabajo. Y las mujeres y las niñas pueden enfrentar discriminación en el lugar de trabajo relacionada con tabúes en torno a la menstruación.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className='card normal-text'>
                                        <Accordion.Toggle as={Card.Header} eventKey="4" className='card-header d-flex justify-content-between align-items-center pl-3'>
                                            <p className='p-0 m-0'>El derecho a la no discriminación y la igualdad de género</p>
                                            <FaAngleDown size={24} />
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body className='card-body normal-text pl-2'>Los estigmas y las normas relacionadas con la menstruación pueden reforzar las prácticas discriminatorias. Los obstáculos relacionados con la menstruación en la escuela, el trabajo, los servicios de salud y las actividades públicas también perpetúan las desigualdades de género.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>                           
                                </Col>
                            </Accordion>
                        </Row>
                        <Row className='d-flex flex-column justify-content-center mx-0'>
                            <p className='small-text text-right mx-0 mx-sm-2 mt-5'>Fuente: UNFPA (Fondo de población de las Naciones Unidas)</p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}

export default Rights
