import React from 'react'
import profilePic from '../../images/profile.jpg'
import './ProfileHeader.css';

const ProfileHeader = () => {
	return (
		<div className="ProfileHeader-container">
			<div className="ProfileHeader-image-container">
				<img alt="profileImage" src={profilePic} className="ProfileHeader-image" />
			</div>
			<div className="ProfileHeader-descriptor">
				<div style={{fontWeight: "bold"}}>Tuan Duong</div>
				<div style={{fontWeight: "100", paddingTop: 5, color: 'lightgrey', fontSize: 15}}>
					Full-Stack Software Developer
				</div>
			</div>
		</div>
	)
}

export default ProfileHeader