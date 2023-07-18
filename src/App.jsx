import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { ourStore } from './Redux/Store';
import { Page } from './Components/Page/Page';
import { BrowserRouter } from 'react-router-dom';
import { MyRoutes } from './Routes/myRoutes';
import { Dashboard } from './Components/Website/Dashboard';
import keycloak from "./Keycloak/keycloak";
import { ReactKeycloakProvider } from "@react-keycloak/web";

function App() {
	return (
		<>
			<ReactKeycloakProvider authClient={keycloak}>
				<BrowserRouter>
					<Provider store={ourStore}>
						<Page></Page>
						<Dashboard></Dashboard>
						<MyRoutes></MyRoutes>
					</Provider>
				</BrowserRouter>
			</ReactKeycloakProvider>
		</>
	);
}
export default App;

