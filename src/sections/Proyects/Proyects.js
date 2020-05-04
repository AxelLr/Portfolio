import React from 'react'
import { SeccionTitle } from '../../components/SeccionTitle/SeccionTitle'
import { ProyectCard  } from './ProyectCard/ProyectCard'
import WithWaves from '../../components/WithWaves'

export default function Proyects() {

 return (
        <section className='proyects-container'>
            <WithWaves> 
                <SeccionTitle title='PROYECTOS' textcolor='var(--white)'/>
                <div className='proyects-cards-container'>
                    <div className='cards-layout'>

                        <ProyectCard 
                            imagen={require('../../util/icons/Clonetagram.png')} 
                            alt='clonetagram'
                            proyectTitle='Clonetagram'
                            GitLink='https://axellr.github.io/Clonetagram/#/'
                            RepLink='https://github.com/AxelLr/Clonetagram'
                            description= 'App inspirada en Instagram, desarrollada con React, Redux y MongoDB'       
                        />

                        <ProyectCard 
                            imagen={require('../../util/icons/react-chat-2.png')} 
                            alt='chat app' 
                            proyectTitle='Real time Chat App'
                            GitLink='https://axellr.github.io/React---socket.io-Client/#/'
                            RepLink='https://github.com/AxelLr/React---socket.io-Client'
                            description= 'Real time chat, desarrollado con React y Socket.io' 
                        />

                        <ProyectCard 
                            imagen={require('../../util/icons/songfinder.png')} 
                            alt='song finder'
                            proyectTitle='Song Finder'
                            GitLink='https://axellr.github.io/Buscador-de-canciones/#/'
                            RepLink='https://github.com/AxelLr/Buscador-de-canciones'
                            description= 'Simple buscador de canciones, desarrollado con React.'       
                        />

                        <ProyectCard 
                            imagen={require('../../util/icons/dolphapp.png')} 
                            alt='twitter clone'
                            proyectTitle='Red Social' 
                            GitLink='https://dolphapp.firebaseapp.com/SignUp'
                            RepLink='https://github.com/AxelLr/React-Firebase-Client'
                            description= 'Red social similar a Twitter, desarrollada con React, Redux y Firebase'       
                        />      
                    </div>

                    <a href='https://github.com/AxelLr/' rel='noopener noreferrer' target='_blank' className='github-link'>
                        <p> Ver más proyectos </p>   
                        <span>
                            <i className='fab fa-github'></i>
                        </span>       
                    </a>

                </div>
             
            </WithWaves>
        </section>    
     )
 }
