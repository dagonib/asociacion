import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'

import useWindowSize from '../../../utilities/useWindowSize'

// Assets
import img_offer from '../../../assets/img/img-offer.jpg'
import img_offer_md from '../../../assets/img/img-offer-md.png'
// Styles
import '../../../styles/homescreen/offer.style.scss'

const Offer = () => {
    const { width }  = useWindowSize()

    return (
        <Row className='offer d-flex flex-column flex-md-row align-items-stretch py-5 m-0'>
            <Col xs={{ order: 'last' }} md={{ order: 'first' }} className='d-flex align-items-center py-5 px-3 px-md-4 px-lg-5 bg-secondary'>
                <Container className='p-0'>
                    <p className='offer-text normal-text px-0 m-0'>La menstruación refleja la armonía de la diferencia y se manifiesta de forma equilibrada si el entorno es también armónico. De hecho las condiciones de vida y trabajo influyen de modo directo en dicha armonía y en sus trastornos posteriores." Dra. Carme Valls-Llobet ponente del 1er Encuentro de Cultura Menstrual (EnCuMe) Barcelona, 2019.</p>
                    <p className='offer-text normal-text px-0 m-0'>Si deseas tener el PDF con las diapositivas de su charla: "BIOLOGÍA MENSTRUAL, SISTEMA HORMONAL Y DIVERSIDAD SEXUAL" no tienes más que pedírnoslo al correo email: encuentroculturamenstrual2020@gmail.com explicándonos si trabajas en algún ámbito de la Cultura Menstrual (salud, higiene, arte o educación) y dónde resides.</p>
                </Container>
            </Col>
            <Col xs={{ order: 'first' }} md={{ order: 'last' }} className='p-0 align-items-stretch'>
                {width > 767 ? (
                    <Image
                        className='purpose-image'
                        src={img_offer_md}
                    />
                ) : (
                    <Image
                        className='purpose-image'
                        src={img_offer}
                    />
                )}
            </Col>
        </Row>
    )
}

export default Offer
