import React from 'react'
import { Row, Col, Image, Container, Button } from 'react-bootstrap'

import useWindowSize from '../../../utilities/useWindowSize'

// Assets
import img_encume_sm from '../../../assets/img/encume-sm.png'
import img_encume_md from '../../../assets/img/encume-md.png'
import logo_encume from '../../../assets/img/logos/logo-blanco-global.png'

// Styles
import '../../../styles/encume/encume.styles.scss'

const Encume = () => {
    const { width }  = useWindowSize()

    return (
        <Row className='encume  d-flex flex-column-reverse flex-md-row bg-secondary px-0 mx-0 mb-5 p-md-5'>
            <Col 
                className='textbox d-flex align-self-center px-4 pt-3 pb-5 pl-md-0 pr-md-4 py-md-0 bg-secondary'>
                <Container className='p-0'>                   
                    <h2 className='title-section text-center text-white mb-3 m-0'>Evento anual</h2>
                    <p className='normal-text text-white text-justify px-0 m-0'>Los Encuentros de Cultura Menstrual (EnCuMe) son un evento anual autogestionado donde buscamos recoger la necesidad individual y colectiva de compartir investigación, lenguaje, vivencias, y debatir sobre las políticas públicas, sanitarias y educativas que sobre el ciclo menstrual se aplican en el Estado español. En estos encuentros proponemos un espacio compartido para reflexionar sobre los diversos temas socioculturales que condicionan la vida de las mujeres y personas menstruantes.</p>
                    <p className='normal-text text-white text-justify px-0 m-0'>En cada encuentro sentamos las bases para una definición de una nueva Cultura menstrual y una educación menstrual inclusiva, integral, sostenible y feminista.</p>
                    <Button 
                        href='http://www.encuentroculturamenstrual.es/'
                        target='_blank'
                        className='encume_button normal-text align-self-center rounded-0 mt-3'>EnCuMe 2021</Button>
                </Container>
            </Col>
            <Col 
                className='imgbox d-flex flex-column-reverse flex-md-column align-self-center p-0 pl-md-4'>
                    <Image 
                        className='encume_logo align-self-center mt-3 mt-md-0 mb-md-3'
                        alt='founder-1'
                        src={logo_encume}
                    />
                    { width > 767 ? (
                        <Image
                            src={img_encume_md}
                        />
                    ) : (
                            <Image
                                src={img_encume_sm}
                            />
                    )}
                    
            </Col>
        </Row>
    )
}

export default Encume
