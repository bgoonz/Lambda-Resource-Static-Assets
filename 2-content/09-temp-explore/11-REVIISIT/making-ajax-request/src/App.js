import React, { Component } from 'react';

class App extends Component {
	state = {}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({users}))
	}

	render() {
		console.log(this.state)
		return (
			<div className="App">

			</div>
		);
	}
}

export default App;
