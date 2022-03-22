import React from 'react'
import { Row, Col, Image, Container, Button } from 'react-bootstrap'
import useWindowSize from '../../../utilities/useWindowSize'

// Assets
import img_purpose from '../../../assets/img/img-purpose.png'
import img_purpose_md from '../../../assets/img/img-purpose-md.png'

// Styles
import '../../../styles/homescreen/purpose.styles.scss'

// Archivos
import dossier from '../../../assets/files/dossier.pdf'

const Purpose = () => {
    const { width }  = useWindowSize()

    return (
        <Row className='purpose d-flex flex-column flex-md-row bg-secondary px-0 mx-0 mb-5 p-md-5'>
            <Col           
                className='imgbox d-flex align-self-center p-0 pr-md-4'>
                {width > 767 ? (
                    <Image
                        className=''
                        src={img_purpose_md}
                    />
                ) : (
                    <Image
                        className=''
                        src={img_purpose}
                    />
                )}
            </Col>
            <Col 
                className='textbox d-flex align-self-center px-4 py-5 pr-md-0 pl-md-4 py-md-0 bg-secondary'>
                <Container className='p-0'>
                    <h1 className='title-section text-center text-white mb-3 m-0'>La Asociación</h1>
                    <p className='normal-text text-white text-justify px-0 m-0'>Desde la Asociación de Cultura Menstrual, La Vida en Rojo, buscamos divulgar conocimientos sobre el ciclo menstrual y el climaterio para que las niñas, las mujeres y personas que transitan estas etapas, podamos desarrollar todo nuestro potencial con información y recursos.</p>
                    <p className='normal-text text-white text-justify px-0 m-0'>Para ello, elaboramos documentos e investigamos sobre educación y salud del ciclo menstrual y el climaterio, coordinamos eventos, realizamos activismo y campañas por la justicia y dignidad menstrual. </p>
                    <p className='normal-text text-white text-justify px-0 m-0'>También tenemos la voluntad de crear redes entre profesionales dedicadas a la Cultura menstrual, tanto en el ámbito del Estado español como de América Latina.</p>
                    <Button 
                        href={dossier}
                        target="_blank"
                        className='purpose_button normal-text align-self-center mt-4 rounded-0'
                    >Más Información</Button>
                </Container>
            </Col>
        </Row>
    )
}

export default Purpose
