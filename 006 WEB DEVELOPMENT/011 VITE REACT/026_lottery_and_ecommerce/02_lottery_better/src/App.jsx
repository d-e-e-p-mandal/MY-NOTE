import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery from "./Lottery";
import Ticket from './Ticket';
import { sum } from "./helper";

function App() {
  //if we change win condtion we only chage this function
  let winCondition = (ticket)=>{
    return sum(ticket) === 15;
  }

  //example another condition all equal 
  /*
    let winCondition = (ticket)=>{
    return ticket.every((num)=> num === ticket[0]);
  }
  */

  return (
    <>
      {/* <Ticket ticket={[0,1,2]}/> */}
      {/* <Lottery n={3} winningSum={15}/> */}
      <Lottery n={3} winCondition={winCondition} />
    </>
  )
}

export default App
