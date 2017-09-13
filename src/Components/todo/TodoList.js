import React from 'react';
import "../../css/todo.css";

const TodoList = (props) => (
	<li className="todoBlock__li">
		<div>
			<h2 className="todoBlock__list">{props.title} | {props.the_time}</h2>
			<h4 className="todoBlock__list todoBlock--desc">{props.action}</h4>
		</div>
		<span
			onClick={() => props.onDelete(props.id)}
			style={{border:" 2px solid red", borderRadius:'50%', padding:0, margin:0, paddingLeft:'5px', color:"red", cursor:"pointer", alignSelf:"center"}}>
			X</span>
	</li>
);

export default TodoList;
