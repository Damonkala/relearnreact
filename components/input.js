import React, { Component } from 'react';

class MyInput extends Component {
	constructor(props){
		super(props);

		this.state = { text: ''};
	}
	changeText(e) {
		// console.log('event:', e.target.value);
		this.setState({ text: e.target.value});
	}
	click() {
		// console.log("hello there");
		// console.log('State: ', this.state.text);
		this.props.changeGreeting(this.state.text);
	}
	render() {
		return (
			<div>
				<input type="text" onChange={this.changeText.bind(this)} />
				<button onClick={this.click.bind(this)}>Click Me!</button>
			</div>
		);
	}
}
export default MyInput;
