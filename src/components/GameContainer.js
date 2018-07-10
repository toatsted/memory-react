import React, { Component } from 'react';
import {
	Row,
	Col
} from 'reactstrap';

import Card from './Card';

export default class GameContainer extends Component {

  render() {
    return (
      <div className="gamecontainer">
      	<Row>
      		{
      			this.props.characters.map(val => {
      				return (
      					<Col>
      						<Card
      							url={ val.url }
      							idx={ val.idx }
      							updateClicked={ this.props.updateClicked }
      						/>
      					</Col>
      				);
      			})
      		}
      	</Row>
      </div>
    )
  }
}
