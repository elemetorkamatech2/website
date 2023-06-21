import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { ourStore } from './Redux/store';
//import { AllUser } from './Components/allUsers';
import { WebsitesSorter } from './Components/WebsitesSorter ';

function App() {
	return (
		<>
			<Provider store={ourStore}>
				{/* <AllUser /> */}
				<WebsitesSorter />
			</Provider>
		</>
	);
}

export default App;
