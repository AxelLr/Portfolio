import React from 'react'
import { Link } from 'react-scroll'

export default function Footer() {
    
    return(

    <div className='main-footer-container'> 
        <div className='triangle'>  </div>   
                    
        <div className='arrow-footer-container'>
            <Link
                to='home-container'
                smooth={true}
                offset={0}
                duration= {1200}>
                    
                 <i className='fas fa-chevron-up'> </i> 
            </Link>
        </div>

        <div className='contact-icons-container'> 

            <a  rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/axelleonr/'> <i className='fab fa-linkedin'></i>        </a>
            <a  rel='noopener noreferrer' target='_blank' href='https://github.com/AxelLr'> <i className='fab fa-github'></i>          </a>
            <a  rel='noopener noreferrer' target='_blank' href='https://www.facebook.com/axel.leon.52'> <i className='fab fa-facebook-square'></i> </a>

        </div>

        <div className='phone-number'>
                      
                      <h3>  <i className='fas fa-phone-alt'></i> 
                        <span> (+54) 2664871368 </span> 
                      </h3>  
                      
                      <h3>  <i className='fas fa-envelope'></i> 
                        <span> axelleonr12@gmail.com </span> 
                      </h3>                 
        </div>

    
        <div className='footer-text'>
            <h1> ©2019 Axel León - Made with React </h1>
            
        </div>

    </div>
) }