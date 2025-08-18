import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import WeatherApp from "./component/WeatherApp";
import ThemeSwitcher from './component/ThemeSwitcher';
function App() {

  return (
    <>
      <ThemeSwitcher/>
      <WeatherApp/>
    </>
  )
}

export default App
