import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { ourStore } from './Redux/Store';
import { Page } from './Components/Page/Page';
import { Nav } from './Components/Nav/nav';
import { BrowserRouter } from 'react-router-dom';
import { MyRoutes } from './Routes/myRoutes';
import { Dashboard } from './Components/Website/Dashboard';
import { AllWebsite } from './Components/Website/allWebsite';

function App() {
    return (
        <>
            <BrowserRouter>
            <Provider store={ourStore}>
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