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
			list: [],
			userInfo: {},
			location: {},
			time: {}
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
				this.setState({location: {city: data.city, region: data.region}})
				return weatherPromise(lat, lon)
			})
			.then(res => res.json())
			.then(data => this.setState({userInfo: {temp:data.main.temp, desc: data.weather[0].description.toUpperCase()}}));
	}

	getCurrentTime() {
		const currentTime = new Date();
		let minutes = currentTime.getMinutes().toString();
		let hours = currentTime.getHours();
		let time0 = hours+":0"+minutes;
		let time = hours + ":" + minutes;
		minutes.length === 1 ? this.setState({time:time0}) : this.setState({time})

	}

	getList(){
		let promise = fetch('/api/todos');
		return promise.then(res => res.json())
									.then(data => this.setState({list:data}));
	}

	handleNewList(newList) {
		const list = this.state.list;
		list.push(newList);
		this.setState({list},() => {
			let promise = fetch('/api/todos', {
				method: "POST",
				headers: {
					'Accept': 'application/json, text/plain, */*',
					'Content-type':"application/json"
				},
				body: JSON.stringify({title: newList.title, the_time: newList.the_time, action: newList.action})
			});
			return promise;
		});
	}

	componentWillMount() {
		this.getCurrentTime();
		this.getWeather();
		this.getList();
	}

	render() {
		return (
			<div>
				<Header time={this.state.time} location={this.state.location} userInfo={this.state.userInfo} />
				<div className="separationBlock">
					<Form addNewList={this.handleNewList} />
					<Todo list={this.state.list} />
				</div>
			</div>

		);
	}
}

export default App;
