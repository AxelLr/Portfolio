import React from 'react'
import { Link } from 'react-scroll'
import Fade from 'react-reveal/Fade'

    export default function Home() {

        return (
            <section className='home-container'>
                <div className='home-blue-background'>
                    <div className='main-home-container'>

                        <div className='home-links-container'> 
                            <a className='iconA' rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/axelleonr/'> <i className='fab fa-linkedin'></i>        </a>
                            <a className='iconB' rel='noopener noreferrer' target='_blank' href='https://github.com/AxelLr'> <i className='fab fa-github'></i>     </a>                       
                        </div>
                    
                        <div className='text-container'> 
                            <h1 className='name-title'>Axel León</h1> 
                            <h1 className='sub-title' > Software <span> Developer </span></h1>    
                        </div>
                       
                        <div className='home-button-container'>  
                            <Fade bottom>
                                <Link
                                    to='proyects-container'
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {1200}
                                > 
                                    <h4> Explorar Proyectos  </h4>
                                </Link>
                                        
                                <Link
                                    to='form-container'
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {1200}
                                >  
                                    <h4> Contactame  </h4> 
                                </Link> 
                            </Fade>
                        </div>
                   
                        <div className='arrow-container'> 
                                <Link
                                    to='aboutMe-body'
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {1200}
                                > 
                                    <i className='fas fa-chevron-down arrow-animation'></i>  
                                </Link> 
                        </div>
                    </div> 
                </div>
            </section>
        )
}