import './App.css'
import { Provider } from 'react-redux'
import { ourStore } from './Redux/Store'
import { AllUser } from './Components/allUsers';

function App() {
  return (
    <>
      <Provider store={ourStore}>
         <AllUser />
        <h1>bsd 😂</h1>
      </Provider>
    </>
  )
}

export default App;;;;;;
