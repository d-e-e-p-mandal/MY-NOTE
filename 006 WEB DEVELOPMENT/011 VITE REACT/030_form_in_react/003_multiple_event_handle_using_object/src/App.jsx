import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Form from "./Form" // Importing Form component (must be in same folder)

function App() {
  return (
    <>
      <h3>Form in React</h3>
      <Form /> {/* Rendering the Form component */}
    </>
  )
}

export default App
