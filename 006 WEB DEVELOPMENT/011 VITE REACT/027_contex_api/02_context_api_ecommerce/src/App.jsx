import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Items from './component/Items'

function App() {

  return (
    <>
      <h1> E-Commerce </h1>
      <Items itemName={"Macbook"} price={100000}/>
      <Items itemName={"Laptop"} price={50000}/>
      <Items itemName={"Mobile"} price={30000}/>
    </>
  )
}

export default App
