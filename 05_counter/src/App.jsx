import { useState } from "react";
import "./App.css";

function App() {

  let [counter,setCounter] = useState(15)

  //let counter = 15;

  const addValue = () => {
    counter=counter+1;
    setCounter(counter);
    
  }

  const removeValue = () => {
    if(counter<=0)
      return;
    counter=counter-1;
    setCounter(counter)
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  );
}

export default App;
