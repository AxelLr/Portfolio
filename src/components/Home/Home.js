import React from 'react'
import { Link } from "react-scroll"
import Fade from 'react-reveal/Fade'

export const Home = () => {

    return (

    <div className="main_home_container">

        <div className="home-links-container"> 
        <a className="iconA" rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/axelleonr/"> <i className="fab fa-linkedin"></i>        </a>
            <a className="iconB" rel="noopener noreferrer" target='_blank' href="https://github.com/AxelLr"> <i className="fab fa-github"></i>     </a>
                                  
        </div>
       
        <div className='text-container'> 
            <h1 className="name-title">Axel León</h1> 
        
            <h1 className="sub-title"> Full-stack <span> Developer </span>  </h1>    
        </div>

        <div >

                  <div className="home-button-container">  
                    <Fade bottom>
                        <Link
                        to="proyects-container"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {1200}
                        > <h4> Explorar Proyectos  </h4>
                        </Link>
                                
                        <Link
                            to="contact-container"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {1200}
                        >  <h4> Contactame  </h4> 
                        </Link> 
                    </Fade>
            </div>
        </div>
        
        <div className="arrow-container"> 
                <Link
                        to="aboutme-container"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {1200}
                    > <i className="fas fa-chevron-down arrow-animation"></i>  
                </Link> 
         </div>
    </div> 
);
}