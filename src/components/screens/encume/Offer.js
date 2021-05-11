import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'

import useWindowSize from '../../../utilities/useWindowSize'

// Assets
import img_offer from '../../../assets/img/offer.png'
import img_offer_md from '../../../assets/img/offer-md.png'
import img_offer_lg from '../../../assets/img/offer-lg.png'
// Styles
import '../../../styles/encume/offer.style.scss'

const Offer = () => {
    const { width }  = useWindowSize()

    return (
        <Row className='offer d-flex flex-column flex-md-row align-items-stretch py-5 m-0'>
            <Col xs={{ order: 'last' }} md={{ span: 8, order: 'first' }} className='offer-content d-flex align-items-center py-3 px-3 px-md-4 px-lg-5'>
                <Container className='py-3 p-0'>
                    <h1 className='title-section m-0 text-center text-white mb-3'>Ofrecemos</h1>
                    <p className='offer-text small-text font-italic mt-2 px-0 m-0'>"La menstruación refleja la armonía de la diferencia y se manifiesta de forma equilibrada si el entorno es también armónico. De hecho, las condiciones de vida y trabajo influyen de modo directo en dicha armonía y en sus trastornos posteriores."</p>
                    
                    <p className='offer-text-small small-text text-right mt-2 px-0 m-0'>Dra. Carme Valls-Llobet ponente del 1er Encuentro de Cultura Menstrual (EnCuMe) Barcelona, 2019.</p>
                    
                    <p className='offer-text small-text mt-3 px-0 m-0'>Ofrecemos  el PDF "BIOLOGÍA MENSTRUAL, SISTEMA HORMONAL Y DIVERSIDAD SEXUAL" de la Dra. Carme Valls-Llobet.</p>
                    
                    <p className='offer-text small-text text-center mt-2 px-0 m-0'>Envíanos un email solicitando el PDF a encuentroculturamenstrual@gmail.com </p>
                    
                    <p className='offer-text small-text mt-2 px-0 m-0'>Dinos si trabajas en algún ámbito de la Cultura Menstrual (salud, higiene, arte o educación) y dónde resides. </p>
                </Container>
            </Col>
            <Col xs={{ order: 'first' }} md={{ span: 4, order: 'last' }} className='p-0 align-items-center justify-content-center'>
                
                { width > 1056 ? (
                    <Image
                        className='purpose-image'
                        src={img_offer_lg}
                    />
                ) : ( width > 767 ? (
                    <Image
                        className='purpose-image'
                        src={img_offer_md}
                    />
                    ) : (
                        <Image
                            className='purpose-image'
                            src={img_offer}
                        />
                    ) )}
            </Col>
        </Row>
    )
}

export default Offer
