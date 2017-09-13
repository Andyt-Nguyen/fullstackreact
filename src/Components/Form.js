import React, { Component } from 'react';
import '../css/form.css';

class Form extends Component {
	constructor() {
		super();
		this.state = {
			newList: {}
		};
		this.addList = this.addList.bind(this);
	}

	addList(e) {
		e.preventDefault();
		this.setState({newList: {
			title: this.refs.title.value,
			time: this.refs.time.value,
			action: this.refs.action.value
		}}, () => {
			this.props.addNewList(this.state.newList);
			this.refs.title.value = "";
			this.refs.time.value = "";
			this.refs.action.value = "";
		});
	}

	render() {
		return (
			<form className="formBlock" onSubmit={this.addList}>
				<h1 className="formBlock__title">Add Notes</h1>
				<input ref="title" required className="form__input" placeholder="Title" />
				<input ref="time" required className="form__input" placeholder="Time" />
				<textarea ref="action" required className="form__input form__input--text" placeholder="Action"></textarea>
				<button type="submit" className="formBlock__btn">Submit</button>
			</form>
		);
	}
}

export default Form;
