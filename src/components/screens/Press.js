import React from 'react'
import '../../styles/press.style.scss'
import { Row, Col, Container } from 'react-bootstrap'

const Press = () => {
    return (
        <Row className='press py-5 m-0'>
            <Container fluid className='d-flex flex-column flex-md-row align-items-stretch'>
                <Col md={4} className='d-flex flex-column align-items-start px-0 px-sm-2 px-md-4'>
                    <h1>Press</h1>
                    <p>Lorem ipsum kdjf kfjkf kdjfdjf kdjf </p>
                </Col>
                <Col md={8} className='p-0'>
                    <div>
                        <h2>Jornades de Cultura Menstrual</h2>
                        <p>Artículo publicado por "Onada feminista" donde explican cómo fue el Encuentro virtual de salud menstrual el pasado 30 de mayo, con nuestras invitadas Mónica Richardson experta en Medicina Tradicional China, Ana de Ginevitex - Equilibrio Hormonal 100% natural y Ana Luisa Mesa de su proyecto Lunita Roja.</p>
                        <p>Leer Artículo</p>
                    </div>
                    
                    <div>
                        <h2>Per què el confinament pot haver alterat el cicle menstrual?</h2>
                        <p>Des que es va decretar l'estat d'alarma, moltes dones han tingut retards, dolors menstruals més forts i regles menys abundants, entre més canvis
                        "Amb la vista posada en aquest futur immediat, i més enllà dels processos fisiològics propis que determinen el cicle menstrual, les activistes també alerten que la crisi econòmica derivada de la crisi sanitària tindrà més conseqüències en la relació de les dones amb la seva menstruació. ‘Detectem una deriva socioeconòmica que, possiblement, assentarà el concepte de “pobresa menstrual” tant al nostre país com en països on no s’havia considerat que aquest concepte pogués ser reconegut, atès que en l’imaginari col·lectiu es percep com un fet que passa a països del tercer món i no a països desenvolupats’, explica Ackermann".
                        </p>
                        <p>Leer Artículo</p>
                    </div>
                </Col>
            </Container>
        </Row>
    )
}

export default Press
