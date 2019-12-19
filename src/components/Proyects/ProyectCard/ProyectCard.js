import React from 'react';
import Zoom from 'react-reveal/Zoom'

export const ProyectCard = (props) => {
   
return (
<Zoom bottom>
    <div className="card-container"> 
                
        <img src={props.imagen} alt={props.alt} width="100%" height="100%" /> 

        <div className="card-text-container">  
            <h1 className="lulu"> {props.proyectTitle} </h1>

            <ul> 
                
                <li> Repositorio </li>
                <li> Link al proyecto </li>
            
            
            </ul>
        </div> 

    </div>
</Zoom>
)
}
