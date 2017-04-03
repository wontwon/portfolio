import React from 'react'
import './LeftNav.css'

const LeftNav = ( { show } ) => {
	const componentClass = ['LeftNav-container']
	if(show) { componentClass.push('show') }

	return (
		<div className={ componentClass.join (' ')}>
			<nav className="LeftNav-bar">
				<ul>
					<li>
						Nav Item Yo
					</li>
				</ul>
			</nav>
		</div>
	)
}


export default LeftNav