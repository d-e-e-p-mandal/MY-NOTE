import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./component/Counter";
import {CounterContext} from "./context/Counter";
import { useContext } from "react";


function App() {

  const counterState = useContext(CounterContext);

  return (
    <>
      <h1>Counter is :{counterState.count} </h1>
      <Counter/>
      <Counter/>
      <Counter/>
    </>
  )
}

export default App
