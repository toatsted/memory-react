import React, { Component } from 'react';

import {
	Row, 
	Col
} from 'reactstrap';

export default class StatusBar extends Component {
  render() {
    return (
      <div className="statusbar text-center">
      	<Row>	
      		<Col>
      			<h1> Score: {this.props.score} </h1>
      		</Col>
      		<Col>
      			<h1> High Score: {this.props.highScore} </h1>
      		</Col>
      	</Row>	
      </div>
    )
  }
}
