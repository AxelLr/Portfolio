import React from 'react';
import linkedin from '../../assets/icons/linkedin4.png';
import github from '../../assets/icons/github3.png';
import { Link, animateScroll as scroll} from "react-scroll";

export const Home = () => {

    return (
    <div className="main_home_container">

        <div className="lala">  
       
        <a href="lala " className="iconA"> <img src={github} height="40px" width="40px" alt="github" /> </a> 
        <a href="lala " className="iconB"> <img src={linkedin} height="30px" width="30px" alt="linkedin" /> </a> 
        
        </div>
        
        <h1 className="name-title">Axel León</h1> 

        <div >
        <h1 className="sub-title"> Full-stack <span> Developer </span></h1>
        </div>
    
        <hr className="separator" /> <hr className="separator2" />
    

        <div className="home-button-container">  
        <Link
    to="proyects-container"
    spy={true}
    smooth={true}
    offset={0}
    duration= {1200}
> <h1> Explorar proyectos </h1> <i className="fas fa-angle-right"></i>  </Link>
            
<Link
    to="contact-container"
    spy={true}
    smooth={true}
    offset={0}
    duration= {1200}
>       <h1> Contactame </h1> <i className="fas fa-circle-notch"></i>  </Link> 
        </div>
    
         <div className="arrow-container">
           
         <Link
    to="aboutme-container"
    spy={true}
    smooth={true}
    offset={0}
    duration= {1200}
> <i className="fas fa-chevron-down arrow-animation"></i>  </Link>
           
         </div>
    </div> 
);
}