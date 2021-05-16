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
        <Row className='definition d-flex flex-column flex-md-row px-0 mx-0 mb-5 p-md-5'>      
            <Col className='imgbox d-flex align-self-center p-0 pr-md-4'> 
             { width > 992 ? (
                    <Image
                        data-aos-duration="2000"
                        fluid
                        src={img_definition_lg}
                    />
                ) : ( width > 767 ? (
                    <Image
                        fluid
                        src={img_definition_md}
                    />
                    ) : (
                        <Image
                            fluid
                            src={img_definition}
                        />
                    ) )}
            </Col> 
            <Col className='textbox d-flex align-self-center px-4 py-5 pr-md-0 pl-md-4 py-md-0'>
                <Container className='p-0'>
                    <p className='normal-text text-justify px-0 m-0'>La nueva Cultura Menstrual engloba el investigar, analizar, debatir y finalmente, divulgar sobre todo aquello que cambie la perspectiva negativa o patológica sobre el hecho biológico de ovular y menstruar que atraviesa la mitad de la población mundial.</p>
                    <p className='normal-text text-justify px-0 m-0'>La praxis de la nueva Cultura menstrual la hacemos desde el activismo con la promoción de la educación menstrual y cíclica, de la promoción de la salud hormonal, del reconocimiento de la anatomía de los órganos sexuales femeninos y de la recomendación de productos de recogida del sangrado saludables y sostenibles.</p>
                </Container>
            </Col>
        </Row>
)
}

export default Definition
