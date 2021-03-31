import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../styles/navigation.styles.scss'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" className='navigation p-0'>
            <Container className='py-3'>

                <Navbar.Brand href="#home" className="text-white px-2 px-sm-0 py-0">ASC</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='custom-toggler border-0'/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#deets" className="text-white py-0">Inicio</Nav.Link>
                            <Nav.Link href="#deets" className="text-white py-0">Cultura Menstrual</Nav.Link>
                            <Nav.Link href="#deets" className="text-white py-0">Contacto</Nav.Link>
                            <Nav.Link href="#deets" className="text-white py-0">RRSS</Nav.Link>
                        </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default Navigation
