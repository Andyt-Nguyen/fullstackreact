import React, { Component } from 'react';
import "../css/header.css";

class Header extends Component {
	constructor() {
		super();
		this.state = {};
	}



	render() {
		return (
			<header className="headerBlock">
				<div className="headerBlock__sub">
					<h3 className="headerBlock__title">Scattered Clouds</h3>
					<img width="170px" height="170px" src="https://cdn0.iconfinder.com/data/icons/large-weather-icons/512/Dawn.png" />
				</div>
				<div className="headerBlock__sub">
					<h3 className="headerBlock__title">Tucson, AZ</h3>
					<h3 className="headerBlock__temp">73 <sup>o</sup>F</h3>
				</div>
				<div className="headerBlock__sub">
					<h4 className="headerBlock__title">Current Time</h4>
					<time className="headerBlock__time">10:00am</time>
				</div>
			</header>
		);
	}
}

export default Header;
