import React, { Component } from 'react';

export default class Card extends Component {

	handleClick = (e) => {
		let idx = e.target.dataset.idx;
		this.props.updateClicked(idx)
	}

  render() {
    return (
			<img
				onClick={ this.handleClick }
				src={ this.props.url }
				data-idx={ this.props.idx } alt=""
			/>
    )
  }
}
