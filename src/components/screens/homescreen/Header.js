import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Aos from 'aos'
import "aos/dist/aos.css"

import '../../../styles/homescreen/header.styles.scss'
import '../../../styles/commons/text.scss'

const Header = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <Row className='header d-flex align-items-end mx-0' id='header'>
            <Container 
                className='header-container text-center text-white mb-5'
            >
                <h1 
                    data-aos="fade-right"
                    className='association-name'
                >La vida en rojo
                </h1>
                <h2 
                    data-aos="fade-left"
                    className='header-title text-uppercase mt-1'
                    >Asociación de Cultura Menstrual</h2>
            </Container>
        </Row>
    )
}

export default Header
