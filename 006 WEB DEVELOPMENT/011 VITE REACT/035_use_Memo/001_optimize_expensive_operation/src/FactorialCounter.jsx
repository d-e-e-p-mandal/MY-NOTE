import { useState, useMemo } from "react";

export default function FactorialCounter() {
  const [num, setNum] = useState(0);

  // Calculate factorial using useMemo for performance
  const factorial = useMemo(() => {
    if (num === 0) return 1;
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }, [num]);

  return (
    <div>
      <h2>Number: {num}</h2>
      <h3>Factorial: {factorial}</h3>
      <button onClick={() => setNum((prev) => prev + 1)}>Increase</button>
    </div>
  );
}