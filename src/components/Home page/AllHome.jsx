import React from 'react'
import Hero from './Hero'
import Service from './Service'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Contact from './Contact'


function AllHome(props) {
  const openModal = props.openModal;
  const setOpenModal = props.setOpenModal;


  return (
    <div>
        <Hero  openModal={openModal} setOpenModal={setOpenModal}/>
        <Service />
        <Projects />
        <Testimonials />
        <Contact />
    </div>
  )
}

export default AllHome