import React from 'react';

const Phone = props => {
	return <h2>I like {props.fav}</h2>;
};

const Food = ({ name }) => {
	return <h3>This is {name}</h3>;
};

function App() {
	return (
		<div>
			<h1>Hello React!!</h1>
			<Food name="pizza" />
			<Food name="chicken" />
			<Food name="Spam" />

			<Phone fav="galaxy" />
			<Phone fav="iPhone" />
		</div>
	);
}

export default App;
