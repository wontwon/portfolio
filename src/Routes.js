import React from 'react'
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './App.css';

import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

const Routes = ({location}) => (
	<div>
		<ReactCSSTransitionGroup
		transitionName="fade"
		transitionEnterTimeout={500}
		transitionLeaveTimeout={100}
		>
			<Switch location={location} key={location.pathname}>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/projects" component={Projects} />
				<Route path="/contact" component={Contact} />
			</Switch>
		</ReactCSSTransitionGroup>
	</div>
)

export default withRouter(Routes)