import './App.css';
import React from 'react';
//import { Provider } from 'react-redux';
//import { ourStore } from './Redux/store';
//import { AllUser } from './Components/allUsers';
//import { WebsitesSorter } from './Components/WebsitesSorter ';
import { AllWebsite } from './Components/allWebsite';
import { WebsitesSorter } from './Components/WebsitesSorter';
function App() {
	return (
		<>
			{/* <Provider store={ourStore}>
				
				<WebsitesSorter />
			</Provider> */}
{/* <AllUser /> */}

			{/* <AllWebsite></AllWebsite> */}
			{/* <h1>Sorted Data</h1> */}
      <WebsitesSorter />
</>
	)
}
export default App;