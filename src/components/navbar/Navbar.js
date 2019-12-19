import React,{useState} from 'react';
import { Link } from "react-scroll";

export const Navbar = () => { 

const [renderHandler, setRenderHandler] = useState(false);

function handlerToggle () {
    
    function navbarHandler () {
        setRenderHandler(!renderHandler);
     }

    function buttonHandler () {
        let menuBtn = document.getElementById('menu-button');
        if(renderHandler === false) { menuBtn.classList.add('button-on');
        menuBtn.classList.remove('button-off');    }
        if(renderHandler === true ) { menuBtn.classList.remove('button-on');
        menuBtn.classList.add('button-off');}
    }

navbarHandler();
buttonHandler();
}

window.onscroll = () => {

let navbar   =  document.getElementById("navbar-container");
let home     =  document.getElementById("home");
let aboutMe  =  document.getElementById("aboutme");
let proyects =  document.getElementById("proyects");
let contact  =  document.getElementById("contact");

if(document.documentElement.scrollTop > 400) {
navbar.classList.add("yes-navbar");
navbar.classList.remove("no-navbar");
home.classList.add("home-anim");
aboutMe.classList.add("about-anim");
proyects.classList.add("proyects-anim");
contact.classList.add("contact-anim");
} else { navbar.classList.add("no-navbar");
navbar.classList.remove("yes-navbar");
setRenderHandler(false);
}
}
return (
<nav className="navbar_container no-navbar" id="navbar-container"> 
    <button id="menu-button" className="navbar-toggle" type="button" onClick={handlerToggle}>
    {renderHandler === false ? <i className="fas fa-bars"></i> : <i className="fas fa-times-circle"></i> }</button>
        <ul className={renderHandler === true ? "links-container lale" : "links-container lolo"}>    

        <li className="home-link" id="home" > 
<Link
    onClick={handlerToggle}
    activeClass="spy-on"
    to="home-container"
    spy={true}
    smooth={true}
    offset={0}
    duration= {1200}
>       <i className="fas fa-circle ibn">  </i> </Link>  </li>

<li className="aboutme-link" id="aboutme"> 
<Link
    onClick={handlerToggle}
    activeClass="spy-on"
    to="aboutme-container"
    spy={true}
    smooth={true}
    offset={0}
    duration= {1200}
> 
    <i className="fas fa-circle ibn">  </i>  </Link> </li> 
    
    <li className="proyects-link" id="proyects" > 
<Link
    onClick={handlerToggle}
    activeClass="spy-on"
    to="proyects-container"
    spy={true}
    smooth={true}
    offset={0}
    duration= {1200}
> 
    <i className="fas fa-circle ibn">  </i> </Link>   </li> 

    <li className="contact-link"  id="contact" > 
    <Link
    onClick={handlerToggle}
    activeClass="spy-on"
    to="contact-container"
    spy={true}
    smooth={true}
    offset={0}
    duration= {1200}
>  
<i className="fas fa-circle ibn">  </i>  </Link> </li> 

</ul>
</nav>
)
}

