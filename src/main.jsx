import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<Router>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Router>
	</Provider>
);
