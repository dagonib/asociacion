import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from 'react-router'

import '../styles/navigation.styles.scss'

const Navigation = () => {
    const location = useLocation()
    const [background, setBackground] = useState('')

    useEffect(() => {
        if(location.pathname === '/' || location.pathname  === '/inicio') {
            setBackground('')
        } else if (location.pathname  === '/culturamenstrual' || location.pathname  === '/contacto' ) {
            setBackground('dark')
        }
    }, [location])

    return (
        
        <Navbar collapseOnSelect fixed="top" expand="md" bg={background} variant="dark" className='p-0'>
            <Container fluid className='py-3 px-2 px-md-4'>
                <LinkContainer to='/inicio' activeClassName='no-class'>
                    <Navbar.Brand href="#home" className="text-white py-0">ASC</Navbar.Brand>                
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border-0 p-0'/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="text-right mr-0 ml-md-auto" activeKey={location.pathname} defaultActiveKey='/'>
                            <LinkContainer to='/inicio'>
                                <Nav.Link className="text-white py-0">Inicio</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/culturamenstrual'>
                                <Nav.Link className="text-white py-0">Cultura Menstrual</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/contacto'>
                                <Nav.Link className="text-white py-0 pr-0">RRSS</Nav.Link>
                            </LinkContainer>
                        </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default Navigation
