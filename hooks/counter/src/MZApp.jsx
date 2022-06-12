import { useState } from "react";

const MZApp = () => {
  let [counter, setCounter] = useState(0);

  let counterHandler = () => {
    console.log("counterHandler()");
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Counter using useState hook</h1>
      <div>{counter}</div>
      <button onClick={counterHandler}>Increment</button>
    </>
  );
};

export default MZApp;
