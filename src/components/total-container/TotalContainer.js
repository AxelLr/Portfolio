import React from 'react'
import { Navbar } from '../navbar/Navbar';
import { Home } from '../Home/Home';
import { AboutMe } from '../AboutMe/Aboutme'; 
import { Proyects } from  '../Proyects/Proyects';
import { Contact } from '../Contact/Contact';
import { Footer } from '../footer/Footer';
import Bounce from 'react-reveal/Bounce';


const TotalContainer = () => {

    return(

<div className="total_container">


    <section className="home_container "  id="home-container"> 

        < Navbar />
        < Home />

    </section>

    <section className="about_container " id="aboutme-container" >

        <AboutMe iconsize={"40px"} />      
    </section>

    <section className="proyects-container " id="proyects-container">
    

        < Proyects />
        <div className="triangle">  </div>   
        
    </section>

    <section className="contact-container " id="contact-container">
  

    < Contact />

    </section>

    <section className="footer-container" id="footer-container">
        
    <Bounce bottom>
    < Footer />
    </Bounce>

    </section>

</div>
) }

export default TotalContainer;
