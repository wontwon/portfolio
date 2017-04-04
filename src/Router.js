import React from 'react'
import {
  Route,
} from 'react-router-dom'

import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

const AppRouter = () => (
	<div>
		<Route exact path="/" component={Home} />
		<Route path="/about" component={About} />
		<Route path="/projects" component={Projects} />
		<Route path="/contact" component={Contact} />
	</div>
)

export default AppRouter