import './App.css';
import React, { useState ,useEffect } from 'react';
// import { Provider } from 'react-redux';
// import { ourStore } from './Redux/store';
import { WebsiteList } from './Components/allWebsite'
function App() {

	

	return (
		<>
			{/* <WebsiteList websites={websites} /> */}

			{/* <Provider store={ourStore}></Provider> */}
			<WebsiteList></WebsiteList>
		</>
	);
}

export default App;
