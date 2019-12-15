import React from 'react';

export const ProyectCard = (props) => {
   
return (

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
)
}
