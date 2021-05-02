import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from 'react-router'
import RRSS from './RRSS'

// Estilos
import '../styles/navigation.styles.scss'

//Imágenes
import logo from '../assets/img/logos/logo-blanco.png'

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
                    <Navbar.Brand href="#home" className="text-white py-0">
                        <Image 
                            className='logo'
                            alt='founder-1'
                            src={logo}
                            width='50%'
                        />   
                    </Navbar.Brand>                
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border-0 p-0'/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="text-right mr-0 ml-md-auto" activeKey={location.pathname} defaultActiveKey='/'>
                            <LinkContainer to='/inicio'>
                                <Nav.Link className="text-white mt-3 mt-md-0 py-0">Inicio</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/culturamenstrual'>
                                <Nav.Link className="text-white mt-3 mt-md-0 py-0">Cultura Menstrual</Nav.Link>
                            </LinkContainer>
                            <RRSS align='d-flex justify-content-end text-white ml-2 mt-3 mt-md-0 m-0' size='16' />
                        </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default Navigation
