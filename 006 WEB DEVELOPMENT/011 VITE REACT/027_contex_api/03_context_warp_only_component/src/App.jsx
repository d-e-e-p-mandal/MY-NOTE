import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterMainComponent from './Component/CounterMainComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterMainComponent/>
    </>
  )
}

export default App
