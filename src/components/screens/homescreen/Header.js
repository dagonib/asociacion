import React from 'react'
import { Container, Row } from 'react-bootstrap'

import '../../../styles/homescreen/header.styles.scss'
import '../../../styles/text.scss'

const Header = () => {
    return (
        <Row className='header d-flex align-items-end mx-0'>
            <Container className='header-container text-center text-white mb-5'>
                <h1 className='association-name'>La vida en rojo</h1>
                <h2 className='header-title text-uppercase mt-1'>Asociación de Cultura Menstrual en Cataluña</h2>
            </Container>
        </Row>
    )
}

export default Header
