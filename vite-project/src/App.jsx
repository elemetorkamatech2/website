import './App.css'
import { Provider } from 'react-redux'
import { ourStore } from './Redux/Store'
import { AllUser } from './Components/allUser';

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
    </>
  )
}

export default App











// import { useState } from 'react'
// import './App.css'
// import { Provider } from 'react-redux'
// import { Store } from 'redux';
// import { AllUser } from './Components/allUser';

// function App() {
//   return (
//   <>
//       <Provider store={ourStore}>
//         <AllUser />
//         <h1>bsd 😂</h1>
//       </Provider>
//     </>
//   )
// }

// export default App
