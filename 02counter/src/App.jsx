import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (

    <>
      <h1>useState hooks in react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
