import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'

import '../../../styles/homescreen/press.style.scss'

const Press = () => {

    return (
        <Row className='press my-5 m-0'>
            <Container className='container'>
                <Row className='d-flex flex-column mb-3 m-0'>
                    <h2 className='title-section m-0 text-center m-0'>Divulgación</h2>
                    <p className='normal-text text-center mb-1'>Participación en charlas, congresos y espacios feministas.</p>
                    <p className='normal-text text-center mb-4'>Creación de material informativo sobre el ciclo menstrual y el climaterio</p>
                    <h4 className='normal-text text-center text-uppercase mb-1'>Artículos publicados.</h4>
                </Row>
                <Row className='d-flex flex-column m-0'>
                    <Col className='p-0'>
                        <div className='mb-5'>
                            <h4>Jornades de Cultura Menstrual</h4>
                            <p className='normal-text'>Artículo publicado por "Onada feminista" donde explican cómo fue el Encuentro virtual de salud menstrual el pasado 30 de mayo, con nuestras invitadas Mónica Richardson experta en Medicina Tradicional China, Ana de Ginevitex - Equilibrio Hormonal 100% natural y Ana Luisa Mesa de su proyecto Lunita Roja.</p>
                            <Button
                                href='https://www.onadafeminista.cat/les-jornades-de-cultura-menstrual-ajuden-a-les-dones-a-viure-el-seu-cicle-mes-sa/?fbclid=IwAR1px9M9WNH6uTvCndGsZ6wvXdo7CGfzbpjYWRkX_YFFFdQND2xG1xeVz58' 
                                target="_blank"
                            >Ir al Artículo</Button>
                        </div>
                        
                        <div className='mb-5'>
                            <h4>Per què el confinament pot haver alterat el cicle menstrual?</h4>
                            <p className='normal-text'>Des que es va decretar l'estat d'alarma, moltes dones han tingut retards, dolors menstruals més forts i regles menys abundants, entre més canvis
                            "Amb la vista posada en aquest futur immediat, i més enllà dels processos fisiològics propis que determinen el cicle menstrual, les activistes també alerten que la crisi econòmica derivada de la crisi sanitària tindrà més conseqüències en la relació de les dones amb la seva menstruació. ‘Detectem una deriva socioeconòmica que, possiblement, assentarà el concepte de “pobresa menstrual” tant al nostre país com en països on no s’havia considerat que aquest concepte pogués ser reconegut, atès que en l’imaginari col·lectiu es percep com un fet que passa a països del tercer món i no a països desenvolupats’, explica Ackermann".
                            </p>
                            <Button
                                href='https://www.vilaweb.cat/noticies/per-que-el-confinament-pot-haver-alterat-el-cicle-menstrual/' 
                                target="_blank"
                            >Ir al Artículo</Button>
                        </div>
                        
                        <div className='mb-5'>
                            <h4>La pandemia ha alterado nuestro ciclo menstrual, pero también nos ha permitido parar</h4>
                            <p className='normal-text mt-4'>Para María Victoria López Benito, una de las autoras del estudio, “es obvio, porque en el ciclo influyen muchísimo los niveles de estrés y aquel primer momento de confinamiento estricto era una situación desconocida que muchas mujeres vivieron de una manera muy agobiante”. En su opinión “eso se refleja en el ciclo que, al final, es una manifestación de nuestro estado de salud integral”.
                            </p>
                            <Button
                                href='https://www.objetivobienestar.com/habitos-de-vida-saludable/salud-femenina/pandemia-ha-alterado-nuestro-ciclo-menstrual-pero-tambien-nos-ha-permitido-parar_53667_102.html' 
                                target="_blank"
                            >Ir al Artículo</Button>
                        </div>
                        <div>
                            <h4>Visibilitzar el climateri</h4>
                            <p className='normal-text'>El 28 d’abril ha estat declarat Dia internacional d’acció per la salut de les dones. Coincidint amb aquesta data, l’autora d’aquest article, fundadora de l’Associació de Cultura Menstrual La Vida en Rojo, vindica el període de reajustament hormonal en les dones que es produeix abans, durant i després de la menopausa, conegut com el ‘climateri’, que defineix com un “meravellós instant físic i simbòlic” que ben poc té a veure amb el tòpic estigmatitzador dels “ovaris envellits”. Reclama, alhora, un acompanyament sanitari des de la confiança i la seguretat per preparar aquesta etapa vital.
                            </p>
                            <Button
                                href='https://directa.cat/visibilitzar-el-climateri/?fbclid=IwAR2EaLioMDRuGrimDR1MudA1OS8tmWfR5HWCcD4i2vnmeP3gy69xjVruuYw' 
                                target="_blank"
                            >Ir al Artículo</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}

export default Press
