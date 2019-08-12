import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
	constructor(props) {
		super(props);
		console.log('Hello');
	}
	state = {
		count: 0
	};
	add = () => {
		this.setState(val => ({ count: ++val.count }));
	};

	minus = () => {
		this.setState({ count: --this.state.count });
	};

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	componetWillUnmount() {
		console.log('componetWillUnmount');
	}
	render() {
		console.log('Render');
		return (
			<div>
				<h1>The number is: {this.state.count}</h1>
				<button onClick={this.add}>Add</button>
				<button onClick={this.minus}>Minus</button>
			</div>
		);
	}
}

export default App;
