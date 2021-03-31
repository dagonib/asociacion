import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from 'react-router'

import '../styles/navigation.styles.scss'

const Navigation = () => {
    const location = useLocation()
    const [background, setBackground] = useState('transparent')

    useEffect(() => {
        if(location.pathname === '/' || location.pathname  === '/inicio') {
            setBackground('transparent')
        } else if (location.pathname  === '/culturamenstrual' || location.pathname  === '/contacto' ) {
            setBackground('dark')
        }
    }, [location])

    return (
        
        <Navbar collapseOnSelect expand="lg" bg={background} variant="dark" className='navigation p-0'>
            <Container fluid className='py-3'>
                <LinkContainer to='/inicio' activeClassName='no-class'>
                    <Navbar.Brand href="#home" className="text-white px-2 py-0">ASC</Navbar.Brand>                
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='custom-toggler border-0'/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto" activeKey={location.pathname} defaultActiveKey='/'>
                            <LinkContainer to='/inicio'>
                                <Nav.Link className="text-white py-0">Inicio</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/culturamenstrual'>
                                <Nav.Link className="text-white py-0">Cultura Menstrual</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/contacto'>
                                <Nav.Link className="text-white py-0">Contacto</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/contacto'>
                                <Nav.Link className="text-white py-0">RRSS</Nav.Link>
                            </LinkContainer>
                        </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default Navigation
