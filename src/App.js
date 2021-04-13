import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import SignIn from "./pages/Sign/SignIn"
import SignUp from "./pages/Sign/SignUp"
import Home from './pages/Home';
import Results from './pages/Results';
import MovieDetail from './pages/MovieDetail';

const App = ({ store }) => (
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/results" component={Results}/>
				<Route path="/movie/:movieId" component={MovieDetail}/>
				<Route path ="/signup" render={()=> <SignUp />}/>
				<Route path ="/signin" render={()=> <SignIn />}/>
			</div>
		</Router>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
