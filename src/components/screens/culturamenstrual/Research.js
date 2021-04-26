import React from 'react'
import { Row, Col, Image, Container, Button } from 'react-bootstrap'

// Styles
import '../../../styles/culturamenstrual/research.styles.scss'

const Research = () => {
    return (
        <Row className='research my-5 m-0'>
            <Container className='container p-5'>
                <Row className='d-flex flex-column m-0'>
                    <h2 className='text-center'>Investigación</h2>
                    <p className='text-center'>Alteraciones del ciclo menstrual y confinamiento</p>
                </Row>
                <Row  className='d-flex flex-column flex-md-row'>
                    <Col   >
                        <p className='text-justify'>El confinamiento total que vivimos todas las personas durante el año 2020 lo hemos pasado de infinidad de maneras distintas, pero hay peculiaridades concretas, comunes a todas las menstruantes, que nos llevaron a sacar conclusiones sobre el hecho de vivir el ciclo desde estados emocionales, anímicos, físicos y fisiológicos vinculados con el</p>
                    </Col>
                    <Col>
                        <p className='text-justify'>hecho de estar privadas del vínculo social; con miedo o tristeza por la pérdida de un familiar querido sin haberle podido despedir; privadas de nuestras rutinas laborales, académicas y/o deportivas y culturales; o porque hemos seguido teniendo que salir a trabajar exponiéndonos aún más al virus Covid-19.</p>
                    </Col>
                </Row>
                <Row className='d-flex flex-column'>
                    <p className='text-center'>Puedes leer el artículo con los primeros resultados aquí: </p>
                    <Button className='activity_button align-self-center rounded-0'>Leer Artículo</Button>
                </Row>
            </Container>
        </Row>
    )
}

export default Research
/** 
<Col   >
<p className='text-justify'>El confinamiento total que vivimos todas las personas durante el año 2020 lo hemos pasado de infinidad de maneras distintas, pero hay peculiaridades concretas, comunes a todas las menstruantes, que nos llevaron a sacar conclusiones sobre el hecho de vivir el ciclo desde  estados emocionales, anímicos, físicos y fisiológicos
</p>
</Col>
<Col>
<p className='text-justify'>vinculados con el hecho de estar privadas del vínculo social; con miedo o tristeza por la pérdida de un familiar querido sin haberle podido despedir; privadas de nuestras rutinas laborales, académicas y/o deportivas y culturales; o porque hemos seguido teniendo que salir a trabajar exponiéndonos aún más al virus Covid-19.</p>
</Col>*/