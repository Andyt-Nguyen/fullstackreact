import React, { Component } from 'react';
import TodoList from './TodoList';
import "../../css/todo.css";

class TodoPage extends Component {
	constructor() {
		super();
		this.state = {};
	}

	onDelete(id) {
		this.props.onDelete(id);
	}

	render() {
		let todoList = this.props.list.map( (a,i) =>
			<TodoList
				key={i}
				onDelete={this.onDelete.bind(this)}
				{...a} />
		);
		return (
			<div className="todoBlock">
				<ul>
					{todoList}
				</ul>
			</div>
		);
	}
}

export default TodoPage
