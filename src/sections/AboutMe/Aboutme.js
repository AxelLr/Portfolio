import React from 'react'
import { SeccionTitle } from '../../components/SeccionTitle/SeccionTitle'
import profilePic from '../../util/icons/profilepic.jpg'
import Zoom from 'react-reveal/Zoom'
import WithWaves from '../../components/WithWaves'
import Card from './components/card/Card'
import Skills from './components/skills/Skills'
import CV from '../../util/CV_Axel_León.pdf'

export default function AboutMe() {

let frontSkills = ['CSS3', 'JavaScript', 'SCSS', 'React JS',
 'React Native', 'Git / Github']

let backSkills = ['Node JS', 'Express', 'SocketIO', 'Firebase',
'MongoDB', 'PL / SQL']

    return (
        <section className='aboutMe-container'>    
            <div className='aboutMe-body'> 
                <WithWaves> 
                    <SeccionTitle title='SOBRE MI' textcolor='var(--white)'/>

                    <div className='aboutMe-profile-info'>
                        
                        <div className='profile-image-container'>
                            <img src={profilePic} alt='perfil' /> 
                        </div>

                        <Zoom bottom>
                            <div className='profile-paragraph-container'> 
                                <p> 
                                    Desarrollador de software autodidacta. Nacido en Buenos Aires, Argentina, 
                                    residiendo actualmente en la provincia de San Luis.     
                                    Atento a las necesidades del mercado, y a las nuevas tecnologías y tendencias en desarrollo web y aplicaciones móviles.                                  
                                 </p>
                                <a download href={CV}>Descargar CV!</a>
                            </div>
                        </Zoom>    
                    </div>

                    <div className='aboutMe-cards-container'>
                        <Card iconclass='fas fa-chalkboard-teacher' title="Orientacíon al usuario" paragraph='Preferencia por diseños intuitivos y dinámicos, considerando siempre al usuario final.' />
                        <Card iconclass='fab fa-audible' title="Performance" paragraph=' Tiempos de carga rápidos e interacción libre de lag. Siempre pensando en el costo computacional' />
                        <Card iconclass='fas fa-object-group' title="Responsive Design" paragraph='Diseños que funcionen en cualquier dispositivo,  grande o pequeño.' />        
                    </div>
                    
                </WithWaves>
            </div> 
            <SeccionTitle title='HABILIDADES' textcolor='var(--black)' /> 

            <div className='aboutMe-skills'>
                <Skills skillsList={frontSkills} icon='fas fa-tablet-alt' />         
                <Skills skillsList={backSkills} icon='fas fa-server' />
                
            </div>          
        </section>
    )
}