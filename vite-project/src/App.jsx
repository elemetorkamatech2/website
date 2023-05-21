import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import { Store } from 'redux';
import { AllUser } from './Components/allUser';

function App() {
  return (
    <>
      <Provider store={ourStore}>
        {/* <AllUser /> */}
        <h1>bsd 😂</h1>
      </Provider>
    </>
  )
}

export default App
