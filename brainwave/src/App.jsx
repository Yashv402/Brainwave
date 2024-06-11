import React from 'react'
import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header'
import Button from './components/Button'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Collaboration from './components/Collaboration'
import Services from './components/Services'
import Pricing from './components/Pricing'
import RoadMap from './components/RoadMap'
import Footer from './components/Footer'

function App() {
  return (
    <>

      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
      <Header />
      <Hero/>
      <Benefits/>
      <Collaboration />
      <Services/>
      </div>
      <ButtonGradient/>
      <Pricing />
      <RoadMap />
      <Footer />

    </>
  )
}

export default App
