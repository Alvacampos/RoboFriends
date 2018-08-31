import React, { Component } from 'react';
//funtion that allows connection between the app and the store
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchField, requestRobots } from '../actions/actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {	
	componentDidMount() {
		//it fetches the json data from an restAPI
		 this.props.onRequestRobots();
	}

  render() {  	
  	const { searchField, onSearchChange, robots, isPending } = this.props;
  	//Filtering function, it returns the searched robots
  	const filteredRobots = robots.filter( robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return isPending ? 
			<h1>Loading...</h1> :
			(
	    	<div className = "tc">
	    		<h1 id = 'title'>RoboFriends</h1>
	    		<SearchBox searchChange = {onSearchChange}/>
	    		<Scroll>
	    			<ErrorBoundry>
	    				<CardList robots = { filteredRobots }/>	
	    			</ErrorBoundry>    			
	    		</Scroll>
	    	</div>
	    );
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//Standar use of connect for stablish the connection.
