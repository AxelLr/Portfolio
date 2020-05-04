import React from 'react'
import Navbar from './sections/navbar/Navbar'
import Home from './sections/Home/Home'
import AboutMe from './sections/AboutMe/Aboutme'
import Proyects from './sections/Proyects/Proyects'
import Contact from './sections/Contact/Contact'
import Footer from './sections/footer/Footer'

export default function App() {

    return(
        <>
          < Navbar />                
          < Home />
          < AboutMe />                
          < Proyects />
          < Contact />
          < Footer />
        </>
) }

