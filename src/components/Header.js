import React from 'react'
import { Container, Row } from 'react-bootstrap'

import '../styles/header.styles.scss'

const Header = () => {
    return (
        <Row className='header d-flex align-items-end mx-0'>
            <Container className='header-container text-center text-white mb-5'>
                <h1>La vida en rojo</h1>
                <h2>Asociación de Cultura Menstrual</h2>
                <p className='px-0 px-lg-5'>Es revelador y revolucionario conocer tu cuerpo, tu menstruación, tus ciclos… Tiene una capacidad de generar cambios individuales y colectivos muy potentes</p>
            </Container>
        </Row>
    )
}

export default Header
