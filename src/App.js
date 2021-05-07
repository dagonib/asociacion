import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import HomeScreen from './screens/HomeScreen'
import CulturaMenstrualScreen from './screens/CulturaMenstrualScreen'

import './App.scss'
import ScrollToTop from './utilities/ScrollToTop'

const App = () => {
  return (
    <Router>
        <ScrollToTop />
        <Navigation />
        <main>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/inicio' component={HomeScreen} />
            <Route path='/culturamenstrual' component={CulturaMenstrualScreen} />
        </main>
        <Footer />
    </Router>
  )
}

export default App
