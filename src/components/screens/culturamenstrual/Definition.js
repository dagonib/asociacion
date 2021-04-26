import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'

// Assets
import img_purpose from '../../../assets/img/img-purpose.jpeg'
// Styles
import '../../../styles/culturamenstrual/definition.styles.scss'

const Definition = () => {
    return (
        <Row className='definition d-flex flex-column flex-md-row bg-primary mx-0 mb-0'>      
            <Col className='p-0'> 
                <Image
                    className='purpose-image'
                    src={img_purpose}
                />
            </Col> 
            <Col className='d-flex align-items-center py-5 py-md-4 py-lg-5 p-5 px-md-4 bg-primary'>
                <Container className='px-lg-5'>
                    <p className='definition-text m-0'>La nueva Cultura Menstrual por la que nosotras trabajamos, engloba el investigar, divulgar y deconstruir sobre todo aquello que representa un hábito, una creencia, un estigma o una vulneración de derechos para las personas que menstrúan.</p>
                    <p>La praxis de la nueva Cultura Menstrual la hacemos desde el activismo y existen varias ramas para ello. Por ejemplo: desde el arte, el alfabetismo corporal, la educación, la salud, los productos responsables con la recogida del sangrado y el planeta, la literatura o la justicia menstrual, entre otras prácticas.</p>
                </Container>
            </Col>
        </Row>
)
}

export default Definition
