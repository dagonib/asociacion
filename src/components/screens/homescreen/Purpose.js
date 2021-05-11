import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'

import useWindowSize from '../../../utilities/useWindowSize'

// Assets
import img_purpose from '../../../assets/img/img-purpose.png'
import img_purpose_md from '../../../assets/img/img-purpose-md.png'
// Styles
import '../../../styles/homescreen/purpose.styles.scss'

const Purpose = () => {
    const { width }  = useWindowSize()

    return (
        <Row className='purpose d-flex flex-column flex-md-row align-items-stretch m-0'>
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
                    <h1 className='title-section m-0 text-center text-white mb-3'>La Asociación</h1>
                    <p className='purpose-text normal-text px-0 m-0'>Desde la Asociación de Cultura Menstrual, La Vida en Rojo, buscamos divulgar conocimientos sobre el ciclo menstrual y el climaterio para que las niñas, las mujeres y personas que transitan estas etapas, podamos desarrollar todo nuestro potencial con información y recursos.</p>
                    <p className='purpose-text normal-text px-0 m-0'>Para ello, elaboramos documentos e investigamos sobre educación y salud del ciclo menstrual y el climaterio, coordinamos eventos, realizamos activismo y campañas por la justicia y dignidad menstrual. </p>
                    <p className='purpose-text normal-text px-0 m-0'>También tenemos la voluntad de crear redes entre profesionales dedicadas a la Cultura menstrual, tanto en el ámbito del Estado español como de América Latina.</p>
                </Container>
            </Col>
        </Row>
    )
}

export default Purpose
