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
        <Row className='us d-flex flex-column flex-md-row-reverse align-items-stretch mb-5'>
            <Col xs={{ order: 'last' }} className='d-flex align-items-center py-5 px-0 px-sm-2 px-md-4 bg-secondary'>
                <Container>                   
                    <h2 className='title-section m-0 text-center text-white mb-3 m-0'>Quienes somos</h2>
                    <p className='encume-text normal-text px-0 m-0'>Las fundadoras de la Asociación de Cultura Menstrual somos un círculo interdisciplinar de mujeres profesionales comprometidas con la Cultura Menstrual y convencidas que el trabajo colaborativo, asociativo, inspirado en principios feministas es una forma de organización social que transformará el mundo y las sociedades hacia una mejor versión de lo humano.</p> 
                    <p className='encume-text normal-text px-0 m-0'>
                    Todas hemos tenido procesos personales en los que conectar con nuestra ciclicidad y salud menstrual ha sido una clave importante en la construcción de nuestro bienestar como mujeres y a partir de encuerpar estas vivencias, nos nace la misión de invitar, difundir, expandir y acompañar a las personas, mujeres y organizaciones a generar acciones para ir sembrando un cambio de paradigma respecto a la experiencia de mestruar y la concepción hacia una nueva visión en positivo de la salud femenina, cíclica y menstrual.</p>  
                    <p className='encume-text normal-text px-0 m-0'>
                    Con nuestros Proyecto Profesionales abarcamos el acompañamiento de toda la trayectoria de la vida sexual y reproductiva de las mujeres, aportando desde la pequeña infancia hasta la madurez herramientas y recursos para la construcción de una Cultura Menstrual integrativa, inclusiva y sostenible. 
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
