import React, { Component } from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import Routes from './Routes'

import LeftNav from './Components/Shared/LeftNav'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true
    }
  }

  _renderMenuButton() {
    let icon = 'fa fa-bars fa-2x'
    if(this.state.showMenu) {
      icon = 'fa fa-times fa-2x' 
    }

    return (
      <div className="App-stack-button">
        <i
          onClick={() => this.setState({ showMenu: !this.state.showMenu })} 
          className={icon} 
          aria-hidden="true"></i>
      </div>
    )
  }

  render() {
    const { showMenu } = this.state

    return (
      <Router>
        <div className="App">
          <LeftNav show={showMenu}/>
          <div className="App-main-container">
            { this._renderMenuButton() }
            <Routes />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
