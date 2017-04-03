import React from 'react'
import profilePic from '../../images/profile.jpg'
import './Profile.css';

const ProfileHeader = () => {
	return (
		<div className="ProfileHeader-container">
			<div className="ProfileHeader-badge">
				<div className="ProfileHeader-image-container">
					<img alt="profileImage" src={profilePic} className="ProfileHeader-image" />
				</div>
				<div className="ProfileHeader-badge-details">
					<div style={{fontWeight: "400"}}>Tuan Duong</div>
					<div style={{fontWeight: "100", paddingTop: 5, color: '#B3B3B3', fontSize: 15}}>
						Full-Stack Software Developer
					</div>
				</div>
			</div>

			<div className="ProfileHeader-hr"></div>

			<div className="ProfileHeader-descriptor">
				<div>
					Hey there, I’m Tuan! I’m a full-stack software developer that  recently moved to Seattle, WA. I love building beautiful, meaningful things with Node.js, React, and sometimes VueJS. 
				</div>
				<div style={{marginTop: 10}}>
					Have a look at some of my projects when you get a chance. Learn more about me and then consider hiring me. Thanks!
				</div>
			</div>

		</div>
	)
}

export default ProfileHeader