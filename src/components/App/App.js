import React from 'react';
import {Switch, Route} from 'react-router';

import Home from '../Home/';
import NoMatch from '../NoMatch/';

import './App.css';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Home} />
				{/*<Route path="/:id" component={About} />*/}
				<Route component={NoMatch} />
			</Switch>
		</div>
	);
}

export default App;
