import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { ourStore } from './Redux/Store';
import { AllUser } from './Components/allUsers';
import { BrowserRouter } from 'react-router-dom';
import { MyRoutes } from './myRoutes';
import { Button } from './Components/Button';
import { Header } from './Components/Header';
function App() {
	return (
		<>
		    <BrowserRouter>
			<MyRoutes></MyRoutes>
			<Header></Header>

			<Provider store={ourStore}>
				{/* <AllUser /> */}
				{/* <header> */}
				{/* <Button  primary="true" label='Login'></Button> */}
				{/* <Button primary="true" label='Singin'>Singin</Button></header> */}
				<h1>bsd 😂</h1>
			</Provider>
			</BrowserRouter>

		</>
	);
}

export default App;
