import './App.css';

import {useState,useMemo} from "react";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);
  
  const data = useMemo(() => {
    return calculateObject();
  },[] );
  
  return (
    <div className="App">
      <Header data={data} />

      <hr />

      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

function calculateObject(){
  console.log("Calculating...");
  for(let i=0; i<1000000000; i++) {}
  console.log("Calculating completed.");

  return {name: "Fran"};
}

export default App;
