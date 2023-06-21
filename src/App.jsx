import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { ourStore } from './Redux/Store';
import { AllUser } from './Components/allUsers';
import store from './Components/store';
import Dashboard from './Components/Dashboard';
import { combineReducers } from 'redux';
import rootReducer from './Components/reducer';

// const rootReducer = combineReducers({
// 	ourStore: ourStore.reducer,
// 	store: store.reducer,
// });
// const combinStore = createStore(rootReducer);

function App() {
	return (
		<>
			<Provider store={rootReducer}>
				<AllUser />
				<h1>bsd 😂</h1>
				<Dashboard/>
			</Provider>
		</>
	);
}

export default App;
