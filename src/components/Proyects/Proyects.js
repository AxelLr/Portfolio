import React from 'react';
import { SeccionTitle } from '../SeccionTitle/SeccionTitle';
import { ProyectCard  } from './ProyectCard/ProyectCard';

export const Proyects = () => {

 return (
        <div className="main-proyects-container">

            <div className="proyects-navbar-container">   
                <SeccionTitle title="PROYECTOS" margin= "4vh" textcolor="var(--white2)"/>
            </div> 

            <div className="proyects-cards-container">
                <div className="grid-card">
                    <ProyectCard imagen={require('../../assets/icons/black-background16.jpg')} 
                                 alt="test"
                                 proyectTitle=" nombre del proyecto"          
                    />

                    <ProyectCard imagen={require('../../assets/icons/linkedin4.png')} alt="test" />
                    <ProyectCard imagen={require('../../assets/icons/linkedin3.png')} alt="test" />
                    <ProyectCard imagen={require('../../assets/icons/linkedin3.png')} alt="test" />
                    <ProyectCard imagen={require('../../assets/icons/linkedin3.png')} alt="test" />
                    <ProyectCard imagen={require('../../assets/icons/linkedin3.png')} alt="test" />
                     
                </div>    
            </div>
        </div>    
     )
 }
