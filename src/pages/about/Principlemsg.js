import React from 'react'
// import About from './About'
import AboutPrincipleMessage from '../../component/about/PrincipleMessage'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'

const Principlemsg = () => {
  return (
    <div>
      <Navbar />
      {/* <About/> */}
      <AboutPrincipleMessage/>
      <Footer/>
    </div>
  )
}

export default Principlemsg
