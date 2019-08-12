import React from 'react';
import PropTypes from 'prop-types';

const Phone = props => {
	return <h2>I like {props.fav}</h2>;
};

const Food = ({ name, picture, rating }) => {
	return (
		<div>
			<h3>This is {name}</h3>
			<h4>{rating} / 5</h4>
			<img src={picture} alt={name} />
		</div>
	);
};

Food.propTypes = {
	name: PropTypes.string.isRequired,
	picture: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired
};

const foods = [
	{
		id: 1,
		name: 'pizza',
		image:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*',
		rating: 5
	},
	{
		id: 2,
		name: 'chicken',
		image:
			'https://www.tasteofhome.com/wp-content/uploads/2018/01/Southern-Fried-Chicken-with-Gravy_exps33285_THRAA2874593C01_23_1b_RMS-696x696.jpg',
		rating: 4
	},
	{
		id: 3,
		name: 'Spam',
		image:
			'https://images2.minutemediacdn.com/image/upload/c_crop,h_1576,w_2800,x_0,y_52/f_auto,q_auto,w_1100/v1554931909/shape/mentalfloss/20997-istock-471531747.jpg',
		rating: 3
	}
];

function App() {
	return (
		<div>
			<h1>Hello React!!</h1>
			{foods.map(menu => (
				<Food
					key={menu.id}
					name={menu.name}
					picture={menu.image}
					rating={menu.rating}
				/>
			))}

			<Phone fav="galaxy" />
			<Phone fav="iPhone" />
		</div>
	);
}

export default App;
