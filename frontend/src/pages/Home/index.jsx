import React from 'react'
import Build from './Layouts/Build'
import Collaboration from './Layouts/Collaboration'
import Hero from './Layouts/Hero'
import Info from './Layouts/Info'
import Testimonial from './Layouts/Testimonial'

const Home = () => {
  return (
    <>
      <Hero/>
      <Info/>
      <Build/>
      <Collaboration/>
      <Testimonial/>
    </>
  )
}

export default Home