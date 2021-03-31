import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

import './App.scss'

const App = () => {
  return (
    <>
        <Navigation />
        <Header />
        <main>
            <h1>Inicio</h1>
        </main>
        <Footer />
    </>
  )
}

export default App
