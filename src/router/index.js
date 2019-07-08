import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Book from '../components/book/book';
import About from '../components/about/about';
import Index from '../containers/index/index';
import User from '../containers/user/user';
import Details from '../containers/details/details';

class RouterIndex extends Component {
	render() {
		return(
			<Switch>
				<Route path='/' exact render={()=> (
					<Redirect to='/index/all' />
				)} />
				<Route path='/index/:id' component={Index} />
				<Route path='/book' component={Book} />
				<Route path='/about' component={About} />	
				<Route path='/user/:id' component={User} />
				<Route path='/details/:id' component={Details} />
			</Switch>
		)
	}
}

export default RouterIndex;