import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import GameContainer from './components/GameContainer/GameContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <GameContainer>this is the game container</GameContainer>
      </div>
    );
  }
}

export default App;
