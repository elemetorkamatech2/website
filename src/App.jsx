import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { ourStore } from './Redux/Store';
import { Page } from './Components/Page';



function App() {
	return (
		<>
			<Provider store={ourStore}>
				
				<Page></Page>
			</Provider>
		</>
	);
}

export default App;
