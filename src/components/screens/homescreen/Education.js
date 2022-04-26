import React from 'react'
import { Row, Col, Container, Card, CardGroup } from 'react-bootstrap'

import '../../../styles/homescreen/education.styles.scss'

const Education = () => {

    return (
        <Row className='education my-5 m-0'>
            <Container className='container'>
                <Row className='d-flex flex-column mb-3 m-0'>
                    <h2 className='title-section m-0 text-center m-0'>Educación </h2>
                </Row>
                <CardGroup className='d-flex flex-column flex-md-row m-0'>
                    <Card border="primary" className='card-1'>
                        <Card.Body>
                            <Card.Text className='normal-text'>
                                Uno de los ejes principales de la Asociación es la Educación ya que sólo desde aquí la nueva Cultura Menstrual que deseamos puede ser una realidad.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="primary"  className='card-2'>
                        <Card.Body>
                            <Card.Text className='normal-text'>
                            La educación y la divulgación permiten deconstruir concepciones y creencias profundamente arraigadas que permitan generar un cambio real en cuanto a la vivencia personal y visión colectiva de todo aquello relacionado con la Cultura Menstrual.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="primary"  className='card-3'>
                        <Card.Body>
                            <Card.Text className='normal-text'>
                            Nuestra tarea educativa a través de entidades o instituciones, se dirige principalmente a niñas, mujeres y personas que menstrúan. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <p className='normal-text text-center mt-5'>Escríbenos para que podamos ofrecerte el dossier con la información de la propuesta educativa.</p>
                
            </Container>
        </Row>
    )
}

export default Education
