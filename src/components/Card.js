import React from 'react';
import './Card.css';

const Card = (props) => {
	const { id, name, mail } = props
	return(
		<div className = "bg-light-green dib pa3 ma2 grow bw2 shadow-5" id = 'card'>			
			<img src = { `https://robohash.org/test${id}?` } alt="robots"/>
			<div>
				<h2 id = 'name'>{name}</h2>
				<p>{mail}</p>
			</div>						
		</div>
	);
}

export default Card;