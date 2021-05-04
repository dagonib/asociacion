import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'

import useWindowSize from '../../../utilities/useWindowSize'

// Assets
import img_offer from '../../../assets/img/offer.png'
import img_offer_md from '../../../assets/img/img-offer-md.png'
// Styles
import '../../../styles/homescreen/offer.style.scss'

const Offer = () => {
    const { width }  = useWindowSize()

    return (
        <Row className='offer d-flex flex-column flex-md-row align-items-stretch py-5 m-0'>
            <Col xs={{ order: 'last' }} md={{ order: 'first' }} className='offer-content d-flex align-items-center py-3 px-3 px-md-4 px-lg-5'>
                <Container className='py-3 p-0'>
                    <p className='offer-text small-text mt-2 px-0 m-0'>Si deseas tener el PDF con las diapositivas de su charla:</p>
                    
                    <p className='offer-text small-text mt-2 px-0 m-0'>"BIOLOGÍA MENSTRUAL, SISTEMA HORMONAL Y DIVERSIDAD SEXUAL"</p>
                    
                    <p className='offer-text small-text mt-2 px-0 m-0'>no tienes más que pedírnoslo al correo email:</p>
                    
                    <p className='offer-text small-text mt-2 px-0 m-0'>encuentroculturamenstrual@gmail.com </p>
                    
                    <p className='offer-text small-text mt-2 px-0 m-0'>explicándonos si trabajas en algún ámbito de la Cultura Menstrual (salud, higiene, arte o educación) y dónde resides.</p>
                </Container>
            </Col>
            <Col xs={{ order: 'first' }} md={{ order: 'last' }} className='p-0 align-items-center justify-content-center'>
                <Container fluid className='offer-backgroundtext px-3 px-sm-5 px-md-2 px-lg-5'>
                    <p className='offer-text small-text text-center px-0 m-0'>"La menstruación refleja la armonía de la diferencia y se manifiesta de forma equilibrada si el entorno es también armónico. De hecho las condiciones de vida y trabajo influyen de modo directo en dicha armonía y en sus trastornos posteriores."</p>
                    
                    <p className='offer-text small-text text-right mt-2 px-0 m-0'>Dra. Carme Valls-Llobet ponente del 1er Encuentro de Cultura Menstrual (EnCuMe) Barcelona, 2019.</p>
                </Container>
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
