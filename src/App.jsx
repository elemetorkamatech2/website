import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { ourStore } from './Redux/Store';
import { Page } from './Components/Page';
import { Nav } from './Components/nav';
import { BrowserRouter } from 'react-router-dom';
import { MyRoutes } from './myRoutes';
import keycloak from "./Keycloak/keycloak";
import { ReactKeycloakProvider } from "@react-keycloak/web";
// import PrivateRoute from "./Keycloak/PrivateRoute";

function App() {
	return (
		<>
			<ReactKeycloakProvider authClient={keycloak}>
				<BrowserRouter>
					<Provider store={ourStore}>
						<Page></Page>
						<MyRoutes></MyRoutes>
					</Provider>
				</BrowserRouter>
			</ReactKeycloakProvider>
		</>
	);
}
export default App;
