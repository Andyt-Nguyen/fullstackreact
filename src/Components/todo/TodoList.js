import React from 'react';

const TodoList = (props) => (
	<li className="todoBlock__li">
		<h2 className="todoBlock__list">{props.title} | {props.time}</h2>
		<h4 className="todoBlock__list todoBlock--desc">{props.action}</h4>
	</li>
);

export default TodoList;
