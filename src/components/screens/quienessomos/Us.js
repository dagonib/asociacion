import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'
import useWindowSize from '../../../utilities/useWindowSize'

// Styles
import '../../../styles/quienessomos/us.styles.scss'

// Assets
import img_us_sm from '../../../assets/img/us-sm.png'
import img_us_md from '../../../assets/img/us-md.png'
import img_us_lg from '../../../assets/img/us-lg.png'

const Us = () => {
    const { width }  = useWindowSize()

    return (
        <Row className='us d-flex flex-column flex-md-row-reverse align-items-stretch px-0 px-md-5 mb-5 mx-0'>
            <Col xs={{ order: 'last' }} className='us_textbox d-flex align-items-center px-4 px-md-0 pr-md-4 pt-3 pb-5 p-0 bg-secondary'>
                <Container className='p-0'>                   
                    <h2 className='title-section m-0 text-center text-white mb-3 m-0'>Quienes somos</h2>
                    <p className='encume-text normal-text px-0 m-0'>
                    Las fundadoras de la Asociación de Cultura Menstrual somos un círculo interdisciplinar de mujeres profesionales comprometidas con la cultura menstrual y convencidas de la importancia del trabajo colaborativo, asociativo e inspirado en principios feministas.
                    </p>  
                    <p className='encume-text normal-text px-0 m-0'>
                    Todas hemos tenido procesos personales en los que haber podido acceder a conocimientos y recursos sobre nuestra ciclicidad y salud menstrual fueron clave para la construcción de nuestro bienestar como mujeres. Por ello, nos nace la misión de sembrar un cambio de paradigma respecto a la salud femenina, menstrual y climatérica.
                    </p>  
                    <p className='encume-text normal-text px-0 m-0'>
                    Además, nos une el hecho de que con nuestros proyectos profesionales abarcamos el acompañamiento y la formación en todos los ciclos vitales de la vida sexual y reproductiva de las mujeres; aportando desde la pequeña infancia hasta la madurez herramientas y recursos para la construcción de una nueva Cultura menstrual integral, inclusiva, sostenible y feminista.
                    </p>  
                </Container>
            </Col>
            <Col xs={{ order: 'first' }} className='us_imgbox d-flex justify-content-center pl-md-4 p-0'>
                { width > 992 ? (
                    <Image
                        fluid
                        className='purpose-image'
                        src={img_us_lg}
                    />
                ) : ( width > 768 ? (
                    <Image
                        fluid
                        className='purpose-image'
                        src={img_us_md}
                    />
                    ) : ( width > 567 ? (
                        <Image
                            fluid
                            className='purpose-image'
                            src={img_us_sm}
                        />
                        ) : (
                            <Image
                                fluid
                                className='purpose-image'
                                src={img_us_sm}
                            />
                        )
                    ) 
                )}
            </Col>
        </Row>
    )
}

export default Us
