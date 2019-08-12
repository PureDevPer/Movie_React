import React from 'react';

const Phone = props => {
	return <h2>I like {props.fav}</h2>;
};

const Food = ({ name, picture }) => {
	return (
		<div>
			<h3>This is {name}</h3>
			<img src={picture} />
		</div>
	);
};

const foods = [
	{
		id: 1,
		name: 'pizza',
		image:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*'
	},
	{
		id: 2,
		name: 'chicken',
		image:
			'https://www.tasteofhome.com/wp-content/uploads/2018/01/Southern-Fried-Chicken-with-Gravy_exps33285_THRAA2874593C01_23_1b_RMS-696x696.jpg'
	},
	{
		id: 3,
		name: 'Spam',
		image:
			'https://images2.minutemediacdn.com/image/upload/c_crop,h_1576,w_2800,x_0,y_52/f_auto,q_auto,w_1100/v1554931909/shape/mentalfloss/20997-istock-471531747.jpg'
	}
];

function App() {
	return (
		<div>
			<h1>Hello React!!</h1>
			{foods.map(menu => (
				<Food key={menu.id} name={menu.name} picture={menu.image} />
			))}

			<Phone fav="galaxy" />
			<Phone fav="iPhone" />
		</div>
	);
}

export default App;
