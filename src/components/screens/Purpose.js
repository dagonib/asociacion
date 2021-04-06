import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'

// Assets
import img_purpose from '../../assets/img/img-purpose.jpeg'
// Styles
import '../../styles/purpose.styles.scss'


const Purpose = () => {
    return (
        <Row className='purpose d-flex flex-column flex-md-row align-items-stretch py-5 m-0'>
            <Col className='p-0'>
                <Image
                    className='purpose-image'
                    src={img_purpose}
                />
            </Col>
            <Col className='d-flex align-items-center py-5 px-0 px-sm-2 px-md-4 bg-primary'>
                <Container>
                    <p className='purpose-text m-0'>La Asociación busca divulgar conocimientos sobre el ciclo menstrual y el climaterio para la deconstrucción de los tabúes, prejuicios y supersticiones que ha días de hoy persisten en la educación y cultura occidental. Para ello, elabora documentos de educación menstrual, coordina eventos, participa de activismos y campañas por la justicia y dignidad menstrual, y teje redes entre profesionales dedicadas a la cultural menstrual, tanto en el ámbito estatal, como el latinoamericano.</p>
                </Container>
            </Col>
        </Row>
    )
}

export default Purpose
