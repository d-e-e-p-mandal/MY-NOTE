import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function x() {
  return(
    <> 
      <p>componet x</p>
    </>
  )
}

function y() {
  return(
    <> 
      <p>componet y</p>
    </>
  )
}
function App() {

  return (
    <>
      <x/>
      <y/>
      <x/>
      <y/>    
    </>
  )
}

export default App
