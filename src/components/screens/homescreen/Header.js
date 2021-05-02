import React from 'react'
import { Container, Row } from 'react-bootstrap'

import '../../../styles/homescreen/header.styles.scss'
import '../../../styles/text.scss'

const Header = () => {
    return (
        <Row className='header d-flex align-items-end mx-0'>
            <Container className='header-container text-center text-white mb-5'>
                <h1 className='association-name'>La vida en rojo</h1>
                <h2 className='header-title text-uppercase mt-1'>Asociación de Cultura Menstrual</h2>
                <p className='normal-text mt-4 px-0'>Es revelador y revolucionario conocer tu cuerpo, tu menstruación, tus ciclos… Tiene una capacidad de generar cambios individuales y colectivos muy potentes</p>
            </Container>
        </Row>
    )
}

export default Header
