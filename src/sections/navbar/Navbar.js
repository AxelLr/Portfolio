import React,{ useState, useRef } from 'react'
import { Link } from 'react-scroll'

export default function Navbar() { 

const buttonsContainer = useRef()

const [renderNavbar, setRenderNavbar] = useState(false)

const handleClick = e => {
    if (buttonsContainer && !buttonsContainer.current.contains(e.target) && renderNavbar) {
        setRenderNavbar(false)
      }  
}
window.addEventListener('click', handleClick)

window.onscroll = () => {

let navbar =  document.getElementById('navbar-container')

 if(document.documentElement.scrollTop < 400) {
 
 navbar.classList.add('hide-navbar')
 navbar.classList.remove('show-navbar')
 setRenderNavbar(false)
 
 } else { 

 navbar.classList.remove('hide-navbar')
 navbar.classList.add('show-navbar')
 }
}
 
return (

<nav ref={buttonsContainer} className='navbar-container' id='navbar-container'>
    
        <div
            style={{cursor: 'pointer'}} 
            onClick={() => setRenderNavbar(state => !state)}
            className='navbar-toggle'
        >
            <i className={ renderNavbar ? 'fas fa-angle-down rotate-navbar-toggle' : 'fas fa-angle-down' }></i>
        </div>

        <ul  className={renderNavbar ? 'visible-navbar' : 'close-navbar'}>    

            <li className='home-link' id='home' > 
                <Link
                    activeClass='spy-on'
                    to='home-container'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1200}
                >
                    <i className='fas fa-house-user ibn'></i>
                </Link>
            </li>

            <li className='aboutme-link' id='aboutme'> 
                <Link                    
                    activeClass='spy-on'
                    to='aboutMe-container'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1200}
                > 
                    <i className='fas fa-user ibn'>  </i>  
                </Link>
            </li> 
            
            <li className='proyects-link' id='proyects' > 
                <Link
                    activeClass='spy-on'
                    to='proyects-container'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1200}
                > 
                    <i className='fas fa-suitcase ibn'>  </i> 
                </Link>
            </li> 

            <li className='contact-link'  id='contact' > 
                <Link
                    activeClass='spy-on'
                    to='form-container'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1200}
                >  
                   <i className='fas fa-id-badge ibn'></i>
                </Link>
            </li> 

        </ul> 
    </nav>
)
}

