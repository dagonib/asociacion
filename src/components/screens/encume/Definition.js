import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'

import useWindowSize from '../../../utilities/useWindowSize'

// Assets
import img_definition_lg from '../../../assets/img/definition-lg.jpeg'
import img_definition_md from '../../../assets/img/definition-md.jpeg'
import img_definition from '../../../assets/img/definition-sm.jpeg'

// Styles
import '../../../styles/encume/definition.styles.scss'

const Definition = () => {
    const { width }  = useWindowSize()

    return (
        <Row className='definition d-flex flex-column flex-md-row bg-primary my-5 mx-0 mb-0' id='definition'>      
            <Col className='p-0'> 
             { width > 992 ? (
                    <Image
                        className='purpose-image'
                        src={img_definition_lg}
                    />
                ) : ( width > 767 ? (
                    <Image
                        className='purpose-image'
                        src={img_definition_md}
                    />
                    ) : (
                        <Image
                            className='purpose-image'
                            src={img_definition}
                        />
                    ) )}
            </Col> 
            <Col className='d-flex align-items-center py-5 px-3 px-md-4 px-lg-5 bg-secondary'>
                <Container className='p-0'>
                    <p className='definition-text normal-text m-0'>La nueva Cultura Menstrual engloba el investigar, analizar, debatir y finalmente, divulgar sobre todo aquello que cambie la perspectiva negativa, sucia o patológica sobre el hecho biológico de ovular y menstruar que atraviesa la mitad de la población mundial.</p>
                    <p className='definition-text normal-text m-0'>La praxis de la nueva Cultura Menstrual la hacemos desde el activismo a través de la promoción de la educación menstrual y cíclica, de la promoción de la  salud hormonal, del reconocimiento de la anatomía de los órganos pélvicos femeninos y la anatomía genital, de campañas por la justicia y la dignidad menstrual, de la recomendación de productos para la recogida del sangrado que sean saludables y sostenibles, de la investigación y del arte entre otras prácticas.</p>
                </Container>
            </Col>
        </Row>
)
}

export default Definition
