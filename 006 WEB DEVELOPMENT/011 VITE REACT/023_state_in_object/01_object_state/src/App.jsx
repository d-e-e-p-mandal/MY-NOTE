import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ludobox from "./Ludobox";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ludobox/>
    </>
  )
}

export default App
