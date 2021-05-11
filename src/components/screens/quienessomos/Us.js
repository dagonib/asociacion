import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'
import useWindowSize from '../../../utilities/useWindowSize'

// Styles
import '../../../styles/quienessomos/us.styles.scss'

// Assets
import img_us from '../../../assets/img/us.jpg'
import img_us_sm from '../../../assets/img/us-sm.jpg'
import img_us_md from '../../../assets/img/us-md.jpeg'
import img_us_lg from '../../../assets/img/us-lg.jpeg'

const Us = () => {
    const { width }  = useWindowSize()

    return (
        <Row className='us d-flex flex-column flex-md-row-reverse align-items-stretch mb-5 mx-0'>
            <Col xs={{ order: 'last' }} className='d-flex align-items-center py-5 px-3 px-md-4 px-sm-2 px-md-4 bg-secondary'>
                <Container>                   
                    <h2 className='title-section m-0 text-center text-white mb-3 m-0'>Quienes somos</h2>
                    <p className='encume-text normal-text px-0 m-0'>
                    Las fundadoras de la Asociación de Cultura Menstrual somos un círculo interdisciplinar de mujeres profesionales comprometidas con la cultura menstrual y convencidas de que el trabajo colaborativo, asociativo, inspirado en principios feministas, es una forma de organización social que transformará el mundo y las sociedades hacia una mejor versión de lo humano.    
                    </p> 
                    <p className='encume-text normal-text px-0 m-0'>
                    Todas hemos tenido procesos personales en los que haber podido acceder a conocimientos y recursos sobre nuestra ciclicidad y salud menstrual fueron clave importante en la construcción de nuestro bienestar como mujeres. Por ello, a partir de nuestras vivencias y experiencias, nos nace la misión de invitar, difundir, expandir y acompañar a las personas, mujeres y organizaciones a generar acciones para sembrar un cambio de paradigma respecto a la experiencia de menstruar o dejar de hacerlo, con una visión positiva de la salud femenina, menstrual o climatérica.
                    </p>  
                    <p className='encume-text normal-text px-0 m-0'>
                    Además, nos une el hecho de que con nuestros proyectos profesionales abarcamos el acompañamiento y la formación en todos los ciclos vitales de la vida sexual y reproductiva de las mujeres; aportando desde la pequeña infancia hasta la madurez herramientas y recursos para la construcción de una nueva Cultura menstrual integrativa, inclusiva, sostenible y feminista.
                    </p>
                </Container>
            </Col>
            <Col xs={{ order: 'first' }} className='d-flex justify-content-center p-0'>
                { width > 900 ? (
                    <Image
                        className='purpose-image'
                        src={img_us_lg}
                    />
                ) : ( width > 768 ? (
                    <Image
                        className='purpose-image'
                        src={img_us_md}
                    />
                    ) : ( width > 567 ? (
                        <Image
                            className='purpose-image'
                            src={img_us_sm}
                        />
                        ) : (
                            <Image
                                className='purpose-image'
                                src={img_us}
                            />
                        )
                    ) 
                )}
            </Col>
        </Row>
    )
}

export default Us
