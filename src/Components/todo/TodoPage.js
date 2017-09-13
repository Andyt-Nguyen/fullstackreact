import React, { Component } from 'react';
import TodoList from './TodoList';
import "../../css/todo.css";

class TodoPage extends Component {
	render() {
		let todoList = this.props.list.map( (a,i) =>
			<TodoList key={i} {...a} />
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
