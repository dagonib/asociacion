import React from 'react'
import { Row, Col, Image, Container, Button } from 'react-bootstrap'

// Assets
import img_purpose from '../../../assets/img/img-purpose.jpeg'
// Styles
import '../../../styles/culturamenstrual/encume.styles.scss'

const Encume = () => {
    return (
        <Row className='encume d-flex flex-column flex-md-row align-items-stretch mb-5 m-0'>
            <Col xs={{ order: 'last' }} md={{ order: 'first' }} className='d-flex align-items-center py-5 px-0 px-sm-2 px-md-4 bg-primary'>
                <Container>
                    <p className='purpose-text m-0'>Los Encuentros de Cultura Menstrual son un evento anual que busca recoger la necesidad colectiva de unificar criterios, lenguaje e información sobre el ciclo menstrual como realidad biológica en un contexto sociocultural específico. En ellos proponemos crear un espacio de aprendizaje para poder reflexionar sobre los diversos temas sanitarios, educativos y socioculturales que condicionan la vida de las personas menstruantes. Estos encuentros pretenden sentar las bases para una definición de Cultura Menstrual y una Educación Menstrual positiva, pública, inclusiva e integral.</p>
                    <Button className='activity_button align-self-center rounded-0'>Visitar EnCuMe</Button>
                </Container>
            </Col>
            <Col xs={{ order: 'first' }} md={{ order: 'last' }} className='p-0'>
                <Container className='encume-backgroundtext'>
                    <p>La Asociación cuenta con un evento anual: Los “Encuentros de Cultura Menstrual” (EnCuMe).</p>
                </Container>
                <Image
                    className='encume-image'
                    src={img_purpose}
                />
            </Col>
        </Row>
    )
}

export default Encume
