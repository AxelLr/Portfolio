import React from 'react';
import { Grill } from './Grill/Grill';
import { SeccionTitle } from '../SeccionTitle/SeccionTitle';
import { Triangle } from '../total-container/triangle/Triangle';
import profilePic from '../../assets/icons/profilepic.jpg';

export const AboutMe = () => {

    return (

        <div className="main-about-container"> 

            <div className="about-title">      
            <SeccionTitle title="SOBRE MI" margin="8vh" textcolor="var(--white2)" />
            </div>

            <div className="about-body"> 

                <div className="about-body-picture">

                <div className="profile-paragraph-container"> 
                        <p> 
                            Desarrollador web Full-Stack. Nacido en Buenos Aires, Argentina, 
                            residiendo actualmente en la provincia de San Luis.
                            
                            
                           <p> Autodidacta, 
                            perfeccionista y perserverante,
                            con una gran afinidad por los diseños dinámicos e intuitivos, y los
                            desafios lógicos inherentes a la programación. </p>  
                        </p>
                    </div>

                    <div className="profile-image-container"> 
                        <img src={profilePic} alt="foto-perfil"  width="270px" height="300px"/> 
                    </div>
                    
                </div>
                
                <div className="about-body-skills">

                    <SeccionTitle title="# Development Skills" textcolor="var(--white2)" />

                    <div className="skills">

                        <div className="front-skills">  
                            <h2> HTML        </h2>
                            <h2> CSS         </h2>
                            <h2> JavaScript  </h2>
                            <h2> SASS        </h2>
                            <h2> ReactJS     </h2>
                            <h2> Redux       </h2>    
                        </div> 

                        <div className="back-skills">  
                            <h2> Node.js      </h2>
                            <h2> Express     </h2>
                            <h2> GraphQL     </h2>
                            <h2> Firebase    </h2>
                            <h2> MySQL       </h2>
                            <h2> MongoDB     </h2>
                        </div> 
                    </div>    
                    
                </div> 
                    
            </div>

            <Grill backcolor= "transparent"
                   paragraph1= "Tiempos de carga rápidos e interacción libre de lag. Siempre pensando en el costo computacional."
                   paragraph2= "Diseños que funcionen en cualquier dispositivo,  grande o pequeño."
                   paragraph3= "Preferencia por diseños intuitivos y dinámicos, considerando siempre al usuario final. "
            /> 
            
        </div>
    )
}