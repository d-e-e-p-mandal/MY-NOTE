import { useState, useEffect } from "react";

export default function TwoCounters() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const increseX = () => {
    setX((prev) => prev + 1);
  };

  const increseY = () => {
    setY((prev) => prev + 1);
  };

  // Effect runs ONLY when y changes
  useEffect(() => {
    console.log(`(y effect) X: ${x}, Y: ${y}`);
    increseX(); // Will increase X every time Y changes
    increseY(); // infinite
  }, []); // No increseY here to avoid infinite loop

  return (
    <div>
      <h1>X: {x}</h1>
      <h1>Y: {y}</h1>

      <button onClick={increseX}>Increase X</button>
      <button onClick={increseY}>Increase Y</button>
    </div>
  );
}