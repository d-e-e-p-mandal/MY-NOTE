import { useState, useMemo, useCallback ,useEffect } from "react";
import React from "react"; // ✅ Needed for React.memo

export default function App() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");

  const factorial = useMemo(() => {
    console.log("Factorial recalculated!");
    return calculateFactorial(num);
  }, [num]); // Only recalculate when num changes

  function calculateFactorial(n) {
    if (n < 0) return "Invalid";
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  const showName = useCallback((greeting)=> {
    return greeting + " " +name;
  },[name])


  return (
    <div>
      <h2>Number: {num}</h2>
      <h2>Factorial: {factorial}</h2>

      <button onClick={() => setNum((prev) => prev + 1)}>Increase Number</button>

      <br />
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {name}</p>
      <DisplayName showName={showName} />
    </div>
  );
}

// ✅ Only re-renders if `name` changes
const DisplayName = ({ showName }) => {
  console.log("DisplayName rendered");
  const [value,setValue] = useState("");

  useEffect(()=>{
    setValue(showName("Hi"));
    console.log("component rendered");
  },[showName])
  return <p>Name in Display Function: {value}</p>;
};