import React from 'react';
import { SeccionTitle } from '../SeccionTitle/SeccionTitle';
import { ProyectCard  } from './ProyectCard/ProyectCard';

export const Proyects = () => {

 return (
        <div className="main-proyects-container">

            <div className="proyects-navbar-container">   
                <SeccionTitle title="PROYECTOS" margin= "10vh" textcolor="var(--white)"/>
            </div> 

            <div className="proyects-cards-container">
                
                <div className="grid-card">

                    <ProyectCard 
                        imagen={require('../../assets/icons/react-chat-2.png')} 
                        alt="chat app" 
                        proyectTitle='Real time Chat App'
                        GitLink='https://axellr.github.io/React---socket.io-Client/#/'
                        RepLink='https://github.com/AxelLr/React---socket.io-Client'
                        description= 'Chat en tiempo real, desarrollado con React y Socket.io' 
                    />

                    <ProyectCard 
                        imagen={require('../../assets/icons/dolphapp.png')} 
                        alt="test"
                        proyectTitle="Red Social"
                        GitLink='https://dolphapp.firebaseapp.com/SignUp'
                        RepLink='https://github.com/AxelLr/React---socket.io-Client'
                        description= 'Red social similar a Twitter, desarrollada con React, Redux y Firebase'       
                    />
                    
                    <ProyectCard imagen={require('../../assets/icons/linkedin3.png')} alt="test" />
                    <ProyectCard imagen={require('../../assets/icons/linkedin3.png')} alt="test" />                   
                </div>   
            </div>
  
        </div>    
     )
 }
