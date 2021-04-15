import React from 'react'
import Header from '../components/Header'
import Purpose from '../components/screens/Purpose'
import Founders from '../components/screens/Founders'
import Offer from '../components/screens/Offer'
import Press from '../components/screens/Press'

const HomeScreen = () => {
    return (
        <> 
            <Header />
            <Purpose />
            <Founders />
            <Offer />
            <Press />
        </>
    )
}

export default HomeScreen
