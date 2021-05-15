import React, { useEffect } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Aos from 'aos'
import "aos/dist/aos.css"

// Styles
import '../../../styles/homescreen/research.styles.scss'

const Research = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <Row className='research overflow mt-5 m-0'>
            <Container 
                    data-aos="fade-right"
                    className='container'>
                <Row className='d-flex flex-column m-0'>
                    <h2 
                    className='title-section m-0 text-center m-0'>Investigación</h2>
                </Row>
                <Row 
                    className='d-flex flex-column mt-4 m-0'>
                    <p className='font-weight-bold normal-text'>Alteraciones del ciclo menstrual y confinamiento</p>
                </Row>
                <Row  
                    className='d-flex flex-column flex-md-row'>
                    <Col className='mr-md-2'>
                        <p className='text-justify normal-text'>El confinamiento total que vivimos todas las personas durante el año 2020 lo hemos vivido de infinidad de maneras distintas. Pero hay peculiaridades concretas y comunes asociadas al proceso de la menstruación, que nos llevaron a sacar algunas conclusiones importantes.</p>
                    </Col>
                    <Col className='ml-md-2'>
                        <p className='text-justify normal-text'>La salud menstrual es un reto en los diversos contextos de crisis sanitaria, económica, climática y comunitaria, y por ende, es necesario estudiarla ante situaciones excepcionales de falta de condiciones para el buen funcionamiento de las hormonas sexuales femeninas.</p>
                    </Col>
                </Row>
                <Row className='d-flex flex-column'>
                    <p className='text-center normal-text'>Puedes leer el artículo con los primeros resultados aquí: </p>
                    <Button 
                        href='https://matriz.net/mys4849/img/mys49-especial-covid.pdf' 
                        target="_blank"
                        className='activity_button align-self-center rounded-0'
                    >Leer Artículo</Button>
                </Row>
                <Row className='d-flex flex-column mt-5 m-0'>
                    <p className='font-weight-bold normal-text'>Atención sanitaria en menopausia y climaterio.</p>
                </Row>
                <Row  className='d-flex flex-column flex-md-row'>
                    <Col className='mr-md-2'>
                        <p className='text-justify normal-text'>Esta iniciativa surge de Marisela Romero Psicóloga y Promotora de Igualdad de Género y por cientos de mujeres que se sumaron a su deseo de crear un escrito para demandar una atención sanitaria de calidad, integral y sin juicios. Marisela forma parte de FemIgual, Asociación de Mujeres para la Promoción de la Igualdad de Género.</p>
                    </Col>
                    <Col className='ml-md-2'>
                        <p className='text-justify normal-text'>Colabora Carolina Ackermann, cofundadora de la Asociación de Cultura Menstrual, La Vida en Rojo, entidad que apoya, difunde y proporciona los resultados de este estudio.</p>
                    </Col>
                </Row>
                <Row className='d-flex flex-column'>
                    <p className='text-center normal-text'>Puedes leer el artículo con los primeros resultados a partir del 1 de junio 2021. </p>
                    <Button 
                        href='https://matriz.net/mys4849/img/mys49-especial-covid.pdf' 
                        target="_blank"
                        className='d-none activity_button align-self-center rounded-0'
                    >Leer Artículo</Button>
                </Row>
            </Container>
        </Row>
    )
}

export default Research
