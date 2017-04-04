import React from 'react'
import { NavLink } from 'react-router-dom'

import './LeftNav.css'
import logo from '../../images/td-logo.png'

const LeftNav = ( { show } ) => {
	const containerClass = ['LeftNav-container']
	const logoClass = ['LeftNav-logo']
	if(show) { 
		containerClass.push('show')
		logoClass.push('show')
	}

	return (
		<div className={ containerClass.join(' ')}>
			<nav className="LeftNav-bar">
				<div className="LeftNav-bar-container">
					<img className={ logoClass.join(' ') } src={logo} alt="Tuan Logo" />
				</div>
				<div className="LeftNav-list">
					<NavLink to="/" exact={true} className="LeftNav-list-item">Home</NavLink>
					<NavLink to="/about" className="LeftNav-list-item">About</NavLink>
					<NavLink to="/projects" className="LeftNav-list-item">Projects</NavLink>
					<NavLink to="/contact" className="LeftNav-list-item">Contact</NavLink>
				</div>
			</nav>
		</div>
	)
}

export default LeftNav