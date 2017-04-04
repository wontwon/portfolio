import React, { Component } from 'react';
import ProfileHeader from './Components/Main/ProfileHeader'
import LeftNav from './Components/Main/LeftNav'


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
      <div className="App">
        <LeftNav show={showMenu}/>
        <div className="App-main-container">
          { this._renderMenuButton() }
          <div className="App-header">
            <ProfileHeader />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
