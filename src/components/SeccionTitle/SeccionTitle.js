import React from 'react';
import Fade from 'react-reveal/Fade'

export const SeccionTitle = (props) => (
<Fade left>
<div className="seccion-title-container" style={{marginTop: props.margin, color: props.textcolor}}>
    <h1 className="seccion-title"> {props.title} </h1>
    <div className="underline">  </div> 
</div>
</Fade>
 )
    
