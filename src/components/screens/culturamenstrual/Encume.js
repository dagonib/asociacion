import React from 'react'
import { Row, Col, Image, Container, Button } from 'react-bootstrap'

import useWindowSize from '../../../utilities/useWindowSize'

// Assets
import img_offer from '../../../assets/img/img-offer.jpg'
import img_offer_md from '../../../assets/img/img-offer-md.png'
// Styles
import '../../../styles/culturamenstrual/encume.styles.scss'

const Encume = () => {
    const { width }  = useWindowSize()

    return (
        <Row className='encume d-flex flex-column flex-md-row align-items-stretch mb-5 m-0'>
            <Col xs={{ order: 'last' }} md={{ order: 'first' }} className='d-flex align-items-center py-5 px-0 px-sm-2 px-md-4 bg-secondary'>
                <Container>
                    <p className='encume-text normal-text px-0 m-0'>Los Encuentros de Cultura Menstrual son un evento anual que busca recoger la necesidad colectiva de unificar criterios, lenguaje e información sobre el ciclo menstrual como realidad biológica en un contexto sociocultural específico. En ellos proponemos crear un espacio de aprendizaje para poder reflexionar sobre los diversos temas sanitarios, educativos y socioculturales que condicionan la vida de las personas menstruantes. Estos encuentros pretenden sentar las bases para una definición de Cultura Menstrual y una Educación Menstrual inclusiva, integral, sostenible y con perspectiva de género.</p>
                    <Button className='encume_button normal-text align-self-center rounded-0 mt-3'>EnCuMe</Button>
                </Container>
            </Col>
            <Col xs={{ order: 'first' }} md={{ order: 'last' }} className='p-0'>
                <Container className='encume-backgroundtext'>
                    <p className='normal-text px-0 px-sm-3 px-md-4 px-lg-5 m-0'>La Asociación cuenta con un evento anual: Los “Encuentros de Cultura Menstrual” (EnCuMe).</p>
                </Container>
                {width > 767 ? (
                    <Image
                        className='encume-image'
                        src={img_offer_md}
                    />
                ) : (
                    <Image
                        className='encume-image'
                        src={img_offer}
                    />
                )}
            </Col>
        </Row>
    )
}

export default Encume
