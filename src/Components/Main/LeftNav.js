import React from 'react'
import './LeftNav.css'
import logo from '../../images/td-logo.png'

const LeftNav = ( { show } ) => {
	const componentClass = ['LeftNav-container']
	if(show) { componentClass.push('show') }

	return (
		<div className={ componentClass.join (' ')}>
			<nav className="LeftNav-bar">
				<div className="LeftNav-bar-container">
					<img className="LeftNav-logo" src={logo} alt="Tuan Logo" />
				</div>
				<ul className="LeftNav-list">
					<li className="LeftNav-list-item active">About</li>
					<li className="LeftNav-list-item">Projects</li>
					<li className="LeftNav-list-item">Skills</li>
					<li className="LeftNav-list-item">Contact</li>
				</ul>
			</nav>
		</div>
	)
}


export default LeftNav