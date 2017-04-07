import React from 'react'
import Links from '../Shared/Links'

import './About.css'

const About = () => (
	<div className="About-container">
		<div className="About-content">
			<div>Picture</div>
			<div>
				Hi! I'm a developer living in Seattle, WA that takes pride in writing clean maintainble code 
				and building beautiful interfaces. My tools of choice right now are ReactJS and Node.
			</div>
			<br />
			<div>What's been going on for me lately?</div>
			<div>
				<ul>
					<li>Working with VueJS for personal projects (Love it)</li>
					<li>Experimenting with React-Native and Exponent to work on my personal project, DojoHub.</li>
					<li>Learning Swift from an iOS developer whom has the same first name as me (I'm the cooler one). He's a badass! Makes me want to transition into being an iOS dev myself.</li>
					<li>Working for a small contract project to build the backend a of photosharing app. Since backend is a weakness, I look forward to the challenge. </li>			
				</ul>
			</div>
		</div>

		<Links />
		
	</div>
)

export default About