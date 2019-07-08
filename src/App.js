import React, {Component} from 'react';
import MainHeader from './components/common/main-header';
import MainFooter from './components/common/main-footer';
import RouterIndex from './router/index';
import './components/index.css';

class App extends Component {
	render() {
		return <div className="pageWrap">
			<MainHeader />
			<main className="main">
				<RouterIndex />
			</main>
			<MainFooter />
		</div>;
	}
}

export default App;