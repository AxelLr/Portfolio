import React from 'react'

export default function Skills({ skillsList, icon }) {
    return (
        <div className='skills-container'>
            <div className='skills-icon-container'>
                <i className={icon}></i>            
            </div>
            <ul className='skillList-container'>
                {skillsList.map((skill, index) => 

                    <li key={index}>
                        <h4>{skill}</h4>
                    </li>
                )}
            </ul>
        </div>
    )
}
