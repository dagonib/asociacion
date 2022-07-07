import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import HomeScreen from './screens/HomeScreen'
import Encume from './screens/Encume'
import QuienesSomos from './screens/QuienesSomos'
import PrivacyPolicy from './screens/PrivacyPolicy'

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
            <Route path='/encume' component={Encume} />
            <Route path='/quienessomos' component={QuienesSomos} />
            <Route path='/politicaprivacidad' component={PrivacyPolicy} />
        </main>
        <Footer />
    </Router>
  )
}

export default App
