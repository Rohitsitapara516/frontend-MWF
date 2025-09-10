import React from 'react'
import NavbarApp from './component/NavbarApp'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/contact'
import Gallery from './component/Gallery'

export default function Layout() {
  return (
    <>
        <NavbarApp />
        <Home />
         <About />
          <Contact />
           <Gallery />

    </>
  )
}


