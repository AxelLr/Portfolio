import React from 'react';
import Zoom from 'react-reveal/Zoom'

export const ProyectCard = (props) => {
   
return (
<Zoom bottom>
    <div className="card-container"> 
                
        <img src={props.imagen} alt={props.alt} width="100%" height="100%" /> 

        <div className="card-text-container">  
            <h1 className="lulu"> {props.proyectTitle} </h1>

            <p>{props.description} </p>

            <ul>    
                <li> <a href={props.RepLink} rel="noopener noreferrer" target='_blank' > Repositorio </a> </li>
                <li> <a href={props.GitLink} rel="noopener noreferrer" target='_blank' > Live App    </a> </li>
            </ul>

            
        </div> 
        
    </div>
</Zoom>
)
}
