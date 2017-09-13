import React, { Component } from 'react';
import { weatherApi } from './config';
import Form from './Components/Form';
import Todo from './Components/todo/TodoPage';
import Header from './Components/Header';
import "./css/main.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			list: [
				{
					title: "Udall",
					time: "3:00pm",
					action: "Go swimming"
				},
				{
					title: "Home",
					time: "4:20pm",
					action: "Do homework"
				},
				{
					title: "Baseball",
					time: "4:59pm",
					action: "Run 5 miles"
				}
			]
		};
		this.handleNewList = this.handleNewList.bind(this);
	}

	getWeather() {
		const id = weatherApi;
		let coordsPromise = fetch('http://ip-api.com/json');
		let weatherPromise = (lat, lon) => {
			return fetch(`http://api.openweathermap.org/data/2.5/weather?&units=imperial&lat=${lat}&lon=${lon}&appid=${id}`);
		};
		 return coordsPromise
		 	.then( res => res.json())
			.then( data => {
				let lat = data.lat;
				let lon = data.lon;
				// console.log(data);
				return weatherPromise(lat, lon)
			})
			.then(res => res.json())
			.then(data => console.log(data));
	}

	handleNewList(newList) {
		const list = this.state.list;
		list.push(newList);
		this.setState({list})
	}

	componentDidMount() {
		// this.getWeather();
	}

	render() {
		return (
			<div>
				<Header />
				<div className="center">
					<Form addNewList={this.handleNewList} />
					<Todo list={this.state.list} />
				</div>
			</div>

		);
	}
}

export default App;
