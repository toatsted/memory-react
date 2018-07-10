import React, { Component } from 'react';

import {
	Container,
	Button
} from 'reactstrap'

import StatusBar from './components/StatusBar';
import GameContainer from './components/GameContainer';

import './App.css';

function shuffle(a) {
	for(let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}

	return a
}

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			score: 0,
			highScore: 0,
			clicked: [],
			characters: [
				{ url: "https://yt3.ggpht.com/a-/ACSszfEh2BI8KaggLE7qZS-q5s-MJssrLiM1HGQCvg=s900-mo-c-c0xffffffff-rj-k-no",
					idx: 0
				},
				{ url: "https://www.engineswapdepot.com/wp-content/uploads/2017/05/Nissan-370Z-with-a-Turbo-3.4-L-2JZ-01.jpg",
			  	idx: 1
			  },
				{ url: "http://www.wreckedmagazine.com/blog/wp-content/uploads/2014/09/ChrisForsberg-620x620.jpg",
					idx: 2
				},
				{ url: "http://www.wreckedmagazine.com/blog/wp-content/uploads/2013/04/JamesDeane.TestingFront.jpg",
					idx: 3
				},
				{ url: "http://drifting.com/wp-content/uploads/2016/06/@apgarage.jp-Subaru-Impreza-STI-on-WORK-Meister-M1-artofwheel.jpg",
					idx: 4
				},
				{ url: "https://www.telegraph.co.uk/content/dam/formula-1/2017/02/23/JS121504859_AP-jpg-SPORT_trans_NvBQzQNjv4BqXuvy510m4VCeEVDuNKTJKOwP8I5eyfCM1B89C0QYVdA.jpg?imwidth=450",
					idx: 5
				},
				{ url: "http://images.lemans88.com/images/products/1436796196-44592600.jpg",
					idx: 6
				},
				{ url: "https://i5.walmartimages.com/asr/32074e94-ea6c-4885-8d9d-7dab9a417eb2_1.6bacb02044ee222adbb3b14903928311.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
					idx: 7
				},
				{ url: "http://madwhips.s3.amazonaws.com/photo_7544_lamborghini_veneno_roadster_199841_original.jpg",
					idx: 8
				},
				{ url: "https://static.turbosquid.com/Preview/2014/05/19__05_53_38/lancia%20stratos%20rally%20car%201.jpg4b6d48ea-ee69-495d-8e8e-ab38dccae408Original.jpg",
					idx: 9
				},
				{ url: "https://www.arabianbusiness.com/sites/default/files/styles/full_img/public/images/2018/03/06/Abu-Dhabi_Porsche911_1.jpg",
					idx: 10
				},
				{ url: "https://madwhips.s3.amazonaws.com/photo_5918_porsche_carrera_gt_in_gulf_blue_246590_original.jpg",
					idx: 11
				}
			]
		}
	}

	componentDidMount = () => {
		this.setState({
			highScore: parseInt(localStorage.getItem("highScore"))
		})
	}

	handleHighScore = (e) => {
		if(this.state.score >= this.state.highScore) {
			this.setState({
				highScore: this.state.score + 1
			})
			localStorage.setItem("highScore", this.state.highScore + 1);
		}

	}

	updateClicked = (idx) => {
		if(this.state.clicked.includes(idx)) {
			this.setState({
				score: 0,
				clicked: []
			})
		} else {
			this.setState({
				clicked: [...this.state.clicked, idx],
				score: this.state.score + 1,
			})
			this.handleHighScore();
		}

		this.setState({
			characters: shuffle(this.state.characters)
		})
	}

	handleHSReset = () => {
		localStorage.setItem("highScore", 0);
		this.setState({
			highScore: 0
		})
	}

	render() {
		return (
			<Container className="text-center">
				<Button onClick={ this.handleHSReset }>
					Reset High Score
				</Button>

				<StatusBar 
					score={this.state.score}
					highScore={this.state.highScore}
				/>

				<GameContainer
					characters={this.state.characters}
					updateClicked={ this.updateClicked }
				/>
			</Container>
		);
	}
}

export default App;