import React from 'react'
import About from './About'
import Footer from '../../component/Footer'
import AboutHistory from '../../component/about/History'
import RoadmapTimeline from '../../component/about/RoadmapTimeline'
const History = () => {
  return (
    <div>
      <About/>
      <AboutHistory/>
      <RoadmapTimeline/>
      <Footer/>
    </div>
  )
}

export default History
