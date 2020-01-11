import React from 'react';
import { GrillComp } from './GrillComp/GrillComp';

export const Grill = (props) => {

    return (
            <div className="grill-container" style={{background: props.backcolor}}>
                < GrillComp iconclass='fas fa-chalkboard-teacher' title="Orientacíon al usuario" paragraph={props.paragraph3}/>
                < GrillComp iconclass='fab fa-audible' title="Performance" paragraph={props.paragraph1} />
                < GrillComp iconclass='fas fa-object-group' title="Responsive Design" paragraph={props.paragraph2}/>
             </div>
    )
}