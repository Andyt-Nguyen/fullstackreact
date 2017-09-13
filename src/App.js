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
			list: []
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

	componentDidMount() {
		// this.getWeather();
		this.getList();
	}

	render() {
		console.log(this.state);
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
