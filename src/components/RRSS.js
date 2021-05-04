import React from 'react'
import { Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'


import '../styles/rrss.styles.scss'

// Iconos
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const RRSS = ({size, align}) => {
    return (
        <Row className={align}>
            <Nav.Link 
                href='https://www.facebook.com/lavidaenrojoasociacion' 
                target="_blank"
                className='rrss-icon p-0 mr-2'
            >
                <FaFacebook size={size} />
            </Nav.Link>
            <Nav.Link 
                href='https://www.instagram.com/lavidaenrojoasociacion/' 
                target="_blank"
                className='rrss-icon p-0 mr-2'
            >
                <FaInstagramSquare size={size} />
            </Nav.Link>
            {/**<Nav.Link 
                href='https://www.instagram.com/espaciomatriz/' 
                target="_blank" 
                className='rrss-icon p-0 mr-2'
            >
                <FaTelegram size={size} />
            </Nav.Link>*/}
        </Row>
    )
}

export default RRSS