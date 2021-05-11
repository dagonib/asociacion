import React from 'react'
import { Row, Col, Image, Container, Button } from 'react-bootstrap'

import useWindowSize from '../../../utilities/useWindowSize'

// Assets
import img_encume_sm from '../../../assets/img/encume-sm.png'
import img_encume_md from '../../../assets/img/encume-md.png'
import img_encume_lg from '../../../assets/img/encume-lg.png'
import logo_encume from '../../../assets/img/logos/logo-blanco-global.png'

// Styles
import '../../../styles/encume/encume.styles.scss'

const Encume = () => {
    const { width }  = useWindowSize()

    return (
        <Row className='encume d-flex flex-column flex-md-row align-items-stretch mx-0'>
            <Col xs={{ order: 'last' }} md={{ order: 'first' }} className='d-flex align-items-center py-5 px-0 px-sm-2 px-md-4 bg-secondary'>
                <Container>                   
                    <h2 className='title-section m-0 text-center text-white mb-3 m-0'>Evento anual</h2>
                    <p className='encume-text normal-text px-0 m-0'>Los Encuentros de Cultura Menstrual (EnCuMe) son un evento anual autogestionado donde buscamos recoger la necesidad individual y colectiva de compartir investigación, lenguaje, vivencias, y debatir sobre las políticas públicas, sanitarias y educativas que sobre el ciclo menstrual se aplican en el Estado Español. En estos encuentros proponemos un espacio compartido para reflexionar sobre los diversos temas socioculturales que condicionan la vida de las mujeres y personas menstruantes. 
                    </p>
                    <p className='encume-text normal-text px-0 m-0'>
                    En cada encuentro sentamos las bases para una definición de una nueva Cultura Menstrual y una Educación Menstrual inclusiva, integral, sostenible y con perspectiva de género.
                    </p>
                    <Button 
                        href='http://www.encuentroculturamenstrual.es/'
                        target='_blank'
                        className='encume_button normal-text align-self-center rounded-0 mt-3'>EnCuMe</Button>
                </Container>
            </Col>
            <Col xs={{ order: 'first' }} md={{ order: 'last' }} className='d-flex justify-content-center p-0'>
                <Container className='encume-backgroundtext d-flex flex-column justify-content-between align-content-between'>
                    <Image 
                        className='align-self-center mt-5'
                        alt='founder-1'
                        src={logo_encume}
                        width='50%'
                    />
                    <p className='normal-text px-0 px-sm-3 px-md-4 px-lg-5 mb-5 m-0'></p>
                </Container>
                    { width > 974 ? (
                        <Image
                            className='encume-image'
                            src={img_encume_lg}
                        />
                    ) : ( width > 767 ? (
                        <Image
                            className='encume-image'
                            src={img_encume_md}
                        />
                    ) : (
                        <Image
                            className='encume-image'
                            src={img_encume_sm}
                        />
                    ) )}
            </Col>
        </Row>
    )
}

export default Encume
