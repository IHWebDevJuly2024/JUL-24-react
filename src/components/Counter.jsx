import { useState } from "react";

function Counter() {
  // Here we are defining a state
  // the first variable is the name of the state
  // the second variable is the name of the FUNCTION THAT IS GOING TO CHANGE THE STATE
  const [counter, setCounter] = useState(0); // here we set the initial state
  console.log("Rendering the COUNTER component");
  return (
    <>
      <h1>{counter}</h1>
      {/* EVERY TIME WE USE the setCounter we are updating the whole component */}
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </>
  );
}

export default Counter;