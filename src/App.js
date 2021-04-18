import Parent from "./Parent"
import Child from "./Child"
import valueContext from "./ValueContext"
import React, {useState} from "react"
import GrandChild from "./GrandChild";

function App() {
  let value = useState(15);
  return (
  <div>
    <valueContext.Provider value = {value}>
    hello from app
    <Parent />
    <Child />
    <GrandChild></GrandChild>
    </valueContext.Provider>
  </div>
  );
}

export default App;
