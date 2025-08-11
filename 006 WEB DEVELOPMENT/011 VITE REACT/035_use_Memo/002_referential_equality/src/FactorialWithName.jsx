import { useState, useMemo } from "react";

export default function App() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");

  const factorial = useMemo(() => {
    console.log("Factorial recalculated!");
    return calculateFactorial(num);
  }, [num]); // Only recalculate when num changes

  function calculateFactorial(n) {
    console.log("Running factorial calculation...");
    if (n < 0) return "Invalid";
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

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
    </div>
  );
}