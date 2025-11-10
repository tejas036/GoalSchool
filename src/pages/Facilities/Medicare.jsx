import React from 'react'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
import Medicare from '../../component/facilities/Medicare'

const MedicarePage = () => {
  return (
    <div>
    <Navbar/>
      <Medicare/>
      <Footer/>
    </div>
  )
}

export default MedicarePage
