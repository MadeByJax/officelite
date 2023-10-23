import React from 'react'
import Plans from '../components/Plans'
import Timer from '../components/Timer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Homescreen = () => {
  return (
    <div className='test'>
        <Navbar />
        <Header />
        <Plans />
        <Footer />
    </div>
  )
}

export default Homescreen