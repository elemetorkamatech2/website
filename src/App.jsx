import './App.css';
import React from 'react';
import  { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { ourStore } from './Redux/store';
import {GetWebsitesApi} from './Api/api'
import { Page } from './Components/Page';
import { Nav } from './Components/nav';
import { BrowserRouter } from 'react-router-dom';
import { MyRoutes } from './myRoutes';
import { Dashboard } from './Components/Dashboard'
import { WebsitesSorter } from './Components/WebsitesSorter';

function App() {
	const [data, setData] = useState([]);

useEffect(() => {
	async function fetchData() {
		const response = await GetWebsitesApi(); // Replace this with the URL of your server

		setData(response);
	}

	fetchData();
}, []);
	return (
		<>
			<BrowserRouter>
				<Provider store={ourStore}>
					<Page></Page>
					<MyRoutes></MyRoutes>
				</Provider>
			</BrowserRouter>
			
			<Dashboard></Dashboard>
				
		</>
	);
}
export default App;
