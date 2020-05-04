import React from 'react'

export default function WithWaves(props) {
    return (
        <div>
			<svg 
				viewBox="0 0 500 150" 
				preserveAspectRatio="none"
				style={{height: 200, width: '100%', display: 'block'}}
			>
				<path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
					style={{ stroke: 'none', fill: '#f5f5f5'}}>
				</path>
			</svg>

            { props.children }

			<svg 
				viewBox="0 0 500 150"
				preserveAspectRatio="none"
				style={{height: 200, width: '100%', display: 'block' }}
			>
				<path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
					style={{stroke: 'none', fill: '#f5f5f5' }}>
				</path>
			</svg>
        </div>
    )
}
