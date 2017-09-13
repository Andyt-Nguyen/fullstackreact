import React, { Component } from 'react';
import "../css/header.css";

const Header = (props) => {

	return (
			<header className="headerBlock">
				<div className="headerBlock__sub">
					<h3 className="headerBlock__title">{props.userInfo.desc}</h3>
					<img width="170px" height="170px" src="https://cdn0.iconfinder.com/data/icons/large-weather-icons/512/Dawn.png" />
				</div>
				<div className="headerBlock__sub">
					<h3 className="headerBlock__title">{props.location.city}, {props.location.region}</h3>
					<h3 className="headerBlock__temp">{props.userInfo.temp}<sup>o</sup>F</h3>
				</div>
				<div className="headerBlock__sub">
					<h4 className="headerBlock__title">Current Time</h4>
					<time className="headerBlock__time">{props.time}am</time>
				</div>
			</header>
		);
}
export default Header;
