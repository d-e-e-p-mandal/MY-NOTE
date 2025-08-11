import { useRef, useState } from "react";

export default function App() {
  const prevRandom = useRef(null); // store last previous value
  const [currentRandom, setCurrentRandom] = useState(null); // for display

  const generateRandom = () => {
    const newRandom = Math.floor(Math.random() * 1000);

    // store the current random into previous before updating
    prevRandom.current = currentRandom;

    // update the current random (this re-renders so you can see it)
    setCurrentRandom(newRandom);
  };

  return (
    <div>
      <button onClick={generateRandom}>Generate Random</button>
      <h3>Current: {currentRandom}</h3>
      <h3>Previous: {prevRandom.current}</h3>
    </div>
  );
}