import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'

// Assets
import img_purpose from '../../assets/img/img-purpose.jpeg'
// Styles
import '../../styles/offer.style.scss'

const Offer = () => {
    return (
        <Row className='offer d-flex flex-column flex-md-row align-items-stretch py-5 m-0'>
            <Col xs={{ order: 'last' }} md={{ order: 'first' }} className='d-flex align-items-center py-5 px-0 px-sm-2 px-md-4 bg-primary'>
                <Container>
                    <p className='purpose-text m-0'>La "La menstruación refleja la armonía de la diferencia y se manifiesta de forma equilibrada si el entorno es también armónico. De hecho las condiciones de vida y trabajo influyen de modo directo en dicha armonía y en sus trastornos posteriores." Dra. Carme Valls-Llobet ponente del 1er Encuentro de Cultura Menstrual (EnCuMe) Barcelona, 2019.</p>
                    <p className='purpose-text m-0'>Si deseas tener el PDF con las diapositivas de su charla: "BIOLOGÍA MENSTRUAL, SISTEMA HORMONAL Y DIVERSIDAD SEXUAL" no tienes más que pedírnoslo al correo email: encuentroculturamenstrual2020@gmail.com explicándonos si trabajas en algún ámbito de la Cultura Menstrual (salud, higiene, arte o educación) y dónde resides.</p>
                </Container>
            </Col>
            <Col xs={{ order: 'first' }} md={{ order: 'last' }} className='p-0'>
                <Image
                    className='purpose-image'
                    src={img_purpose}
                />
            </Col>
        </Row>
    )
}

export default Offer
