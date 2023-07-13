import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { ourStore } from './Redux/Store';
import { Page } from './Components/Page';
import { Nav } from './Components/nav';
import { BrowserRouter } from 'react-router-dom';
import { MyRoutes } from './myRoutes';
//import { AllUser } from './Components/allUsers';
import { Dashboard } from './Components/Dashboard';
import { AllWebsite } from './Components/allWebsite';
import {FormCreatingWebsite} from './Components/FormCreatingWebsite'
function App() {
    return (
        <>
            <BrowserRouter>
            <Provider store={ourStore}>
				{/* <FormCreatingWebsite></FormCreatingWebsite> */}
                <Page></Page>
                <Dashboard></Dashboard>
                <MyRoutes></MyRoutes>
                </Provider>
                </BrowserRouter>
                <AllWebsite></AllWebsite>
        </>
    );
}
export default App;