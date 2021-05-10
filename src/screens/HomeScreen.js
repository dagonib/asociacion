import React from 'react'
import Header from '../components/screens/homescreen/Header'
import Purpose from '../components/screens/homescreen/Purpose'
import Founders from '../components/screens/homescreen/Founders'
import Offer from '../components/screens/homescreen/Offer'
import Press from '../components/screens/homescreen/Press'

const HomeScreen = () => {
    return (
        <> 
            <Header />
            <Purpose />
            <Press />
            <Offer />
            <Founders />
        </>
    )
}

export default HomeScreen
