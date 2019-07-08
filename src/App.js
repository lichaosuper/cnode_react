import React, {Component} from 'react';
import MainHeader from './component/common/main-header';
import MainFooter from './component/common/main-footer';
import RouterIndex from './router/index';
import './component/index.css';

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