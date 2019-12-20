import React from 'react'
import { Link } from "react-scroll"
import Fade from 'react-reveal/Fade'

export const Home = () => {

    return (

    <div className="main_home_container">

        <div className="home-links-container">  
       
        <a className="iconA" href="https://www.linkedin.com/in/axelleonr/"> <i className="fab fa-linkedin"></i>        </a>
        <a className="iconB" href="https://github.com/AxelLr"> <i className="fab fa-github"></i>                       </a>
            
        </div>
        
        <h1 className="name-title">Axel León</h1> 

        <div >
        <h1 className="sub-title"> Full-stack Developer </h1>
        </div>

        <div className="separator-container"> <hr className="separator" /> <hr className="separator2" /> </div>
    

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