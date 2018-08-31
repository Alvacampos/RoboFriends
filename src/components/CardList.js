import React from 'react';
import Card from './Card';


const CardList = ( {robots} ) => {	
	return(
		<div>
			{
				robots.map((user,i) => {
					return(
						<Card
							key = {robots[i].id}
					  	id = {robots[i].id} 
					  	name = {robots[i].name}
					  	user = { robots[i].user} 
					  	mail = {robots[i].email} 	
					   />
					);
				})
			}	    	
		</div>
	);	
};

export default CardList;