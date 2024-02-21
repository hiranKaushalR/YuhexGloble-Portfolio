import React from 'react'
import Hero from './Hero'
import Service from './Service'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Contact from './Contact'


function AllHome() {
  return (
    <div>
        <Hero />
        <Service />
        <Projects />
        <Testimonials />
        <Contact />
    </div>
  )
}

export default AllHome