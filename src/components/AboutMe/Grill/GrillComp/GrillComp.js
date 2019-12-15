 import React from 'react';

 export const GrillComp = (props) => {

    return (

        <div className="grill-comp">

            <div> <i className={props.iconclass}>    </i> </div>

            <h1>{props.title} </h1>

            <p> {props.paragraph} </p>

        </div>
    )
 }