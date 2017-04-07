import React from 'react'
import Links from '../Shared/Links'

import profilePic from '../../images/profile.jpg'
import './Home.css';

const Home = () => {
	return (
		<div className="Home-container">
			<div className="Home-badge">
				<div className="Home-image-container">
					<img alt="profileImage" src={profilePic} className="Home-image" />
				</div>
				<div className="Home-badge-details">
					<div style={{fontWeight: "400"}}>Tuan Duong</div>
					<div style={{fontWeight: "100", paddingTop: 5, color: '#B3B3B3', fontSize: 15}}>
						Full-Stack Software Developer
					</div>
				</div>
			</div>

			<div className="Home-hr"></div>

			<div className="Home-descriptor">
				<div>
					Hey there, I’m Tuan! I’m a full-stack software developer that  recently moved to Seattle, WA. I love building beautiful, meaningful things with Node.js, React, and sometimes VueJS. 
				</div>
				<div style={{marginTop: 10}}>
					Have a look at some of my projects when you get a chance. Learn more about me and then consider hiring me. Thanks!
				</div>
			</div>

			<Links />

		</div>
	)
}

export default Home