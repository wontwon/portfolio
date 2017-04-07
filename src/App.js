import React, { Component } from 'react'
import Routes from './Routes'
import {
  withRouter 
} from 'react-router-dom'

import LeftNav from './Components/Shared/LeftNav'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.setState({
        showMenu: false
      })
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
        <div className="App">
          <LeftNav show={showMenu}/>
          <div className="App-main-container">
            { this._renderMenuButton() }
            <Routes />
          </div>
        </div>
    );
  }
}

export default withRouter(App)
