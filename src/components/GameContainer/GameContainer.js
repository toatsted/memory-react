import React, { Component } from 'react';

export default class GameContainer extends Component {
  render() {
    return (
      <div className="gamecontainer">
        { this.props.children }
      </div>
    )
  }
}
