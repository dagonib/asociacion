import React from 'react'
import Header from '../components/screens/homescreen/Header'
import Purpose from '../components/screens/homescreen/Purpose'
import Activism from '../components/screens/homescreen/Activism'
import Research from '../components/screens/homescreen/Research'
import Press from '../components/screens/homescreen/Press'
import Education from '../components/screens/homescreen/Education'

const HomeScreen = () => {
    return (
        <> 
            <Header />
            <Purpose />
            <Activism /> 
            <Research />
            <Press />
            <Education />
        </>
    )
}

export default HomeScreen
