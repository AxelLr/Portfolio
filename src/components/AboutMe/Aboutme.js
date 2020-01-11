import React from 'react'
import { Grill } from './Grill/Grill'
import { SeccionTitle } from '../SeccionTitle/SeccionTitle'
import profilePic from '../../assets/icons/profilepic.jpg'
import Zoom from 'react-reveal/Zoom'

export const AboutMe = () => {

    return (

        <div className="main-about-container"> 

            <div className="about-title"> 
      
            <SeccionTitle title="SOBRE MI"
                          margin="10vh"
                          textcolor="var(--white)"
                          iconClass="fas fa-user"
                          />
            </div>

            <div className="about-body"> 

                <div className="about-body-picture">

                     <div className="profile-image-container"> 
                        <img src={profilePic} alt="foto-perfil" /> 
                     </div>
                <Zoom bottom >
                    <div className="profile-paragraph-container"> 
                            <p> 
                                Desarrollador web Full-Stack. Nacido en Buenos Aires, Argentina, 
                                residiendo actualmente en la provincia de San Luis.                                       
                            </p>

                            <p> 
                                Autodidacta, 
                                perfeccionista y perserverante,
                                con una gran afinidad por los diseños dinámicos e intuitivos, y los
                                desafios lógicos inherentes a la programación.
                            </p> 

                            <h3> <span> Nombre:  </span>Axel León Rodríguez </h3> 
                            <h3> <span> Perfil:  </span> Desarrollador web Full Stack</h3> 
                            <h3><span> Inglés:  </span> Avanzado </h3> 
                    </div>
                </Zoom>    
                </div>

                
            <Grill backcolor= "transparent"
                   paragraph1= "Tiempos de carga rápidos e interacción libre de lag. Siempre pensando en el costo computacional."
                   paragraph2= "Diseños que funcionen en cualquier dispositivo,  grande o pequeño."
                   paragraph3= "Preferencia por diseños intuitivos y dinámicos, considerando siempre al usuario final. "
            /> 
                
                <div className="about-body-skills">

                    <SeccionTitle title="HABILIDADES" margin='5vh' textcolor="var(--white)" />

                    <div className="skills">
                
                        <div className="list-skills">
                            <h1> Front-End   </h1>

                            <h2> <p> <span> HTML        </span> </p> </h2>
                            <h2>  <p> <span> CSS         </span> </p> </h2>
                            <h2>  <p> <span> JavaScript  </span>  </p> </h2>
                            <h2> <p> <span> SASS        </span>  </p> </h2>
                            <h2><p> <span> ReactJS     </span> </p>   </h2>
                            <h2> <p>  <span> Redux       </span> </p> </h2>

                        </div> 

                        <div className="list-skills">  
                            <h1> Back-End   </h1>  

                            <h2> <p> <span> Node        </span> </p> </h2>
                            <h2>  <p> <span> Express         </span> </p> </h2>
                            <h2>  <p> <span> WebSockets  </span>  </p> </h2>
                            <h2> <p> <span> Firebase        </span>  </p> </h2>
                            <h2><p> <span> SQL     </span> </p>   </h2>
                            <h2> <p>  <span> MongoDB       </span> </p> </h2>
                          
                        </div> 
              
                    </div>    
                  
                </div> 
                    
            </div>
            
        </div>
    )
}