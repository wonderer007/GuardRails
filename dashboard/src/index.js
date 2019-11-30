import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes/index';
import { Router } from 'react-router';

import { Provider } from 'react-redux'
import store from './store/index';
import history from './store/history';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			{routes}
		</Router>
	</Provider>
	, document.getElementById('root')
);
