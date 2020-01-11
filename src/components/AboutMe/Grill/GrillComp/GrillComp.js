 import React from 'react';
 import Fade from 'react-reveal/Fade'

 export const GrillComp = (props) => {

    return (
  <Fade bottom>
        <div className="grill-comp">

            <div> <i className={props.iconclass}>  </i> </div>

            <h1>{props.title} </h1>

            <p> {props.paragraph} </p>

        </div>
  </Fade>
    )
 }