import React from 'react'
import { Row } from 'react-bootstrap'

import '../styles/header.styles.scss'

const Header = () => {
    return (
        <Row className='header d-flex align-items-center mx-0'>
            <h1>Easy start with Vlava</h1>
            <h2>We are team of talented designers making websites with Bootstrap</h2>
            <a href="#about" class="btn-get-started scrollto">Get Started</a>
        </Row>
    )
}

export default Header
