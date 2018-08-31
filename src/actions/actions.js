import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from '../constants/constants';

export const setSearchField = ( text ) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
});

//HOF, returns a function that triggers redux.thunk that allows us to dispatch the fetch data
export const requestRobots = () => ( dispatch ) => {
	dispatch({ type: REQUEST_ROBOTS_PENDING });
	fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
			})
			.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
			.catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}