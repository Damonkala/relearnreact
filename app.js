import React, { Component } from 'react';
import { render } from 'react-dom';
import MyInput from 'components/input.js'

class Greeting extends Component {
	constructor(props){
		super(props);
		this.state = { greeting: "GGello World"};
	}

	changeGreeting(value){
		this.setState({ greeting: value })
	}

	render(){
		return (
			<div>
				{ this.state.greeting }
				<MyInput changeGreeting={this.changeGreeting.bind(this)}/>
			</div>
		);
	}
}

render(<Greeting />, document.getElementById('root'))
