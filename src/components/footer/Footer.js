import React from 'react';
import { Link, animateScroll as scroll} from "react-scroll";

export const Footer = () => (

    <div className="main-footer-container"> 

        <div className="arrow-footer-container">
            <Link
                to="home-container"
                smooth={true}
                offset={0}
                duration= {1200}>
                    
                 <i className="fas fa-chevron-up"> </i> 
            </Link>
        </div>
    
        <div className="footer-text">
            <h1>Made with React <span> hooks </span> </h1>
             <h1> ©2019 Axel León. All Rights reserved</h1>
             
        </div>
    
    </div>
)