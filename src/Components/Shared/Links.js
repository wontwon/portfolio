import React from 'react'
import './Links.css'

import linkData from '../../Data/link-data'

const Links = () => (
	<div className="Links-container">
		{
			linkData.map( (word, i) => {
				return <LinkItem key={i} data={word} />
			})
		}
	</div>
)


const LinkItem = ({data}) => {
	let icon = `fa fa-${data.icon} fa-1x`
	return(
		<a href={data.url} target="_blank" className="Links-link">
			<div className="Links-link-icon">
				<i className={icon} aria-hidden="true"></i>
			</div>
			<div className="Links-linkicon-text">
				{data.text}									
			</div>
		</a>
	)
}

export default Links