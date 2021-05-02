import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'

import useWindowSize from '../../../utilities/useWindowSize'

// Assets
import img_purpose_md from '../../../assets/img/img-purpose-md.png'
import img_purpose from '../../../assets/img/img-purpose.png'
// Styles
import '../../../styles/culturamenstrual/definition.styles.scss'

const Definition = () => {
    const { width }  = useWindowSize()

    return (
        <Row className='definition d-flex flex-column flex-md-row bg-primary mx-0 mb-0'>      
            <Col className='p-0'> 
            {width > 767 ? (
                    <Image
                        className='purpose-image'
                        src={img_purpose_md}
                    />
                ) : (
                    <Image
                        className='purpose-image'
                        src={img_purpose}
                    />
                )}
            </Col> 
            <Col className='d-flex align-items-center py-5 px-3 px-md-4 px-lg-5 bg-secondary'>
                <Container className='p-0'>
                    <p className='definition-text normal-text m-0'>La nueva Cultura Menstrual por la que nosotras trabajamos, engloba el investigar, divulgar y deconstruir sobre todo aquello que representa un hábito, una creencia, un estigma o una vulneración de derechos para las personas que menstrúan.</p>
                    <p className='definition-text normal-text m-0'>La praxis de la nueva Cultura Menstrual la hacemos desde el activismo y existen varias ramas para ello. Por ejemplo: desde el arte, el alfabetismo corporal, la educación, la salud, los productos responsables con la recogida del sangrado y el planeta, la literatura o la justicia menstrual, entre otras prácticas.</p>
                </Container>
            </Col>
        </Row>
)
}

export default Definition
