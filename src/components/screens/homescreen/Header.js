import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'

import '../../../styles/homescreen/header.styles.scss'
import '../../../styles/commons/text.scss'

const titlevariant = {
    hidden: {
        opacity: 0,
        x: "50vw"
    },
    show: {
        opacity: 1,
        x: "0",
        transition: {
            duration: 1,
            ease: "easeIn"
        }
    }
}

const Header = () => {
    return (
        <Row className='header d-flex align-items-end mx-0' id='header'>
            <Container 
                className='header-container text-center text-white mb-5'
            >
                <motion.h1 
                    variants={titlevariant}
                    initial="hidden"
                    animate="show"
                    className='association-name'
                >
                        La vida en rojo
                </motion.h1>
                <h2 className='header-title text-uppercase mt-1'>Asociación de Cultura Menstrual</h2>
            </Container>
        </Row>
    )
}

export default Header
